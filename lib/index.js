/**
 * Host half of dsh-cad-scene.
 *
 * Three jobs:
 *  1. Registers the global `parse_cad_to_scene` model tool: parse a CAD
 *     drawing (DXF in-process via scene-core/dxf-parser; DWG converted to DXF
 *     first through an external converter — LibreDWG `dwg2dxf` or ODA File
 *     Converter, auto-detected or pinned via row config `dwgConverter`) into a
 *     structured warehouse-scene JSON (racks/aisles/zones/agvs/entities/layers/meta).
 *  2. Registers POST /api/cad-scene-builder/parse (loopback-only) so the
 *     browser panel can parse DWG uploads: the browser sends base64, the host
 *     converts and parses. DXF uploads are parsed in-browser and never reach
 *     this route.
 *  3. Its presence in the host loader tree lets client-modules discover this
 *     package's `dsh.client` declaration and serve the browser half.
 *
 * Publishes no service; consumes `tools`/`fs` (declared) and `webServer`
 * (optional — CLI-only profiles simply skip the route).
 */
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { existsSync, mkdtempSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync, createReadStream, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, basename, delimiter } from 'node:path'
import { parseDxfToScene, summarizeScene } from './scene-core.mjs'

const execFileAsync = promisify(execFile)

const name = 'dsh-cad-scene'
const inject = ['tools', 'fs']
const ROUTE_PATH = '/api/cad-scene-builder/parse'
const BODY_LIMIT = 64 * 1024 * 1024

// Converted DXFs stay on disk in the temp dir and are served back through a
// token URL so the panel can offer a download without shipping 100MB+ text
// through the JSON response.
const convertedStore = new Map()

function rememberConverted(path, name) {
  const token = Date.now().toString(36) + '-' + Math.floor(Math.random() * 1e9).toString(36)
  convertedStore.set(token, { path, name })
  while (convertedStore.size > 8) {
    const oldest = convertedStore.keys().next().value
    convertedStore.delete(oldest)
  }
  return token
}

// ── DWG converter discovery (shared by the tool and the panel route) ────────

function detectConverterKind(exe) {
  return /oda/i.test(exe) ? 'oda' : 'libredwg'
}

function findConverter(cfg) {
  const configured = cfg && typeof cfg.dwgConverter === 'string' ? cfg.dwgConverter.trim() : ''
  if (configured !== '' && configured.toLowerCase() !== 'auto') {
    if (!existsSync(configured)) {
      throw new Error('dsh-cad-scene: configured dwgConverter does not exist: ' + configured)
    }
    return { exe: configured, kind: detectConverterKind(configured) }
  }
  for (const dir of String(process.env.PATH || '').split(delimiter)) {
    if (dir === '') continue
    for (const exeName of ['dwg2dxf.exe', 'dwg2dxf']) {
      const candidate = join(dir, exeName)
      if (existsSync(candidate)) return { exe: candidate, kind: 'libredwg' }
    }
  }
  for (const root of ['C:\\Program Files\\ODA', 'C:\\Program Files (x86)\\ODA']) {
    try {
      const direct = join(root, 'ODAFileConverter.exe')
      if (existsSync(direct)) return { exe: direct, kind: 'oda' }
      for (const sub of readdirSync(root)) {
        const candidate = join(root, sub, 'ODAFileConverter.exe')
        if (existsSync(candidate)) return { exe: candidate, kind: 'oda' }
      }
    } catch {
      // install root missing
    }
  }
  return null
}

async function convertDwgToDxf(inputPath, converter) {
  const tmp = mkdtempSync(join(tmpdir(), 'dsh-cad-scene-'))
  if (converter.kind === 'libredwg') {
    const out = join(tmp, 'out.dxf')
    await execFileAsync(converter.exe, ['-o', out, inputPath], { timeout: 120000 })
    if (!existsSync(out)) throw new Error('dwg2dxf did not produce an output DXF file')
    return out
  }
  // ODA File Converter: <inDir> <outDir> <version> <format> <recurse> <audit> [filter]
  const inDir = join(tmp, 'in')
  const outDir = join(tmp, 'out')
  mkdirSync(inDir)
  mkdirSync(outDir)
  copyFileSync(inputPath, join(inDir, basename(inputPath)))
  await execFileAsync(converter.exe, [inDir, outDir, 'ACAD2018', 'DXF', '0', '1', '*.DWG'], { timeout: 300000 })
  const produced = readdirSync(outDir).filter((f) => /\.dxf$/i.test(f))
  if (produced.length === 0) throw new Error('ODA File Converter did not produce a DXF file')
  return join(outDir, produced[0])
}

// ── HTTP helpers (panel DWG route) ──────────────────────────────────────────

function writeJson(res, status, value) {
  const body = JSON.stringify(value)
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' })
  res.end(body)
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > BODY_LIMIT) {
        reject(new Error('request body exceeds the 64MB limit'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

/** The route converts arbitrary files with local executables: loopback only. */
function isLoopbackRequest(req) {
  const address = req.socket ? req.socket.remoteAddress : undefined
  return address === '127.0.0.1' || address === '::1' || address === '::ffff:127.0.0.1'
}

async function handleParse(req, res, cfg) {
  if (!isLoopbackRequest(req)) return writeJson(res, 403, { error: 'forbidden' })
  // Downloads ride this exact-match route: sub-path prefix routes under
  // /api/ lose to the gateway catch-all, while an exact route wins. A GET
  // with ?download=<token> streams the converted DXF as an attachment.
  if (req.method === 'GET') {
    const url = new URL(String(req.url || ''), 'http://localhost')
    const token = url.searchParams.get('download')
    if (token) return handleDownload(res, token)
  }
  if (req.method !== 'POST') return writeJson(res, 405, { error: 'method-not-allowed' })
  let payload
  try {
    payload = JSON.parse((await readBody(req)).toString('utf8'))
  } catch (error) {
    return writeJson(res, 400, { error: 'request body is not valid JSON: ' + (error && error.message ? error.message : String(error)) })
  }
  const fileName = typeof payload.name === 'string' ? payload.name : ''
  const content = typeof payload.content === 'string' ? payload.content : ''
  if (fileName === '' || content === '') return writeJson(res, 400, { error: 'missing name or content(base64)' })

  try {
    if (/\.(step|stp)$/i.test(fileName)) {
      return writeJson(res, 501, { error: 'STEP is not supported yet; please convert to DXF first' })
    }
    if (/\.dwg$/i.test(fileName)) {
      const converter = findConverter(cfg)
      if (converter === null) {
        return writeJson(res, 501, { error: 'no DWG converter found: install LibreDWG (dwg2dxf on PATH) or ODA File Converter, or set config.dwgConverter on the plugin row' })
      }
      const tmp = mkdtempSync(join(tmpdir(), 'dsh-cad-scene-in-'))
      const inputPath = join(tmp, fileName.replace(/[\\/:*?"<>|]/g, '_'))
      writeFileSync(inputPath, Buffer.from(content, 'base64'))
      const dxfPath = await convertDwgToDxf(inputPath, converter)
      const scene = parseDxfToScene(readFileSync(dxfPath, 'utf8'), fileName, 'dwg->dxf:' + converter.kind)
      const outName = String(fileName).replace(/\.dwg$/i, '') + '.dxf'
      const token = rememberConverted(dxfPath, outName)
      return writeJson(res, 200, { scene, download: { url: ROUTE_PATH + '?download=' + token, name: outName } })
    }
    // .dxf and anything else: treat as DXF text
    const scene = parseDxfToScene(Buffer.from(content, 'base64').toString('utf8'), fileName, 'dxf')
    return writeJson(res, 200, { scene })
  } catch (error) {
    return writeJson(res, 422, { error: error && error.message ? error.message : String(error) })
  }
}

/** Stream one converted DXF back to the browser (attachment download). */
function handleDownload(res, token) {
  const entry = convertedStore.get(token)
  if (!entry) return writeJson(res, 404, { error: 'converted file not found or expired' })
  if (!existsSync(entry.path)) return writeJson(res, 404, { error: 'converted file no longer exists on disk' })
  const size = statSync(entry.path).size
  res.writeHead(200, {
    'content-type': 'application/dxf',
    'content-disposition': 'attachment; filename="' + entry.name.replace(/["\\]/g, '_') + '"',
    'content-length': String(size),
  })
  createReadStream(entry.path).pipe(res)
}

// ── parse_cad_to_scene tool (plain ToolDefinition, global registration) ─────

const sceneItemArray = {
  type: 'array',
  items: { type: 'object', additionalProperties: true },
}

function sceneItems(description) {
  return Object.assign({}, sceneItemArray, { description })
}

function makeTool(ctx, cfg) {
  return {
    name: 'parse_cad_to_scene',
    description: 'Parse a CAD drawing of a logistics warehouse into a structured scene JSON for a Three.js 3D scene. DXF files are parsed directly with dxf-parser; DWG files are converted to DXF first via an external converter (LibreDWG dwg2dxf or ODA File Converter; auto-detected, or pinned with the row config dwgConverter). Returns { racks, aisles, zones, agvs, entities, layers, meta }: entities holds every parsed entity (LWPOLYLINE/POLYLINE/LINE vertices, ARC/CIRCLE center+radius with angles in radians, TEXT/MTEXT content, INSERT block references, etc.) with its layer; layers holds the layer table (name, color, visibility); racks/aisles/zones/agvs are the subsets classified by layer-name keywords (rack/货架 -> racks, aisle/通道 -> aisles, zone/区域 -> zones, agv/小车 -> agvs); meta lists block definitions and parse stats. By default a compact SUMMARY is returned (heavy arrays empty; per-layer counts in layers[].count, type counts and span in meta.summary) — pass detail:"full" for every entity with geometry; large drawings can reach tens of MB.',
    parameters: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'Absolute or workspace-relative path of the .dxf or .dwg file to parse.' },
        detail: { type: 'string', enum: ['summary', 'full'], description: 'Omit or "summary" for a compact summary (recommended on large drawings — full entity dumps can reach tens of MB); "full" returns every entity with geometry.' },
      },
      required: ['path'],
    },
    output: {
      schema: {
        type: 'object',
        additionalProperties: false,
        required: ['racks', 'aisles', 'zones', 'agvs', 'entities', 'devices', 'layers', 'meta'],
        properties: {
          racks: sceneItems('Entities on rack-classified layers, with generated ids.'),
          aisles: sceneItems('Entities on aisle-classified layers, with generated ids.'),
          zones: sceneItems('Entities on zone-classified layers, with generated ids.'),
          agvs: sceneItems('Entities on AGV-classified layers, with generated ids.'),
          entities: sceneItems('Every parsed entity with type, layer, and normalized geometry.'),
          devices: sceneItems('Logical devices, one per block INSERT (blockName + position/rotation/scale preserved, block geometry in children) when the drawing has blocks, else one per layer, plus one single-entity device per isolated entity. Each device: id (device_N), type (lowercased layer), layer (original name), blockName, name (nearest text), position, rotation, scale, size, entityCount, handles, children [{ geometryType: line|arc|polyline|circle|point|text|insert, coords, handle }].'),
          layers: sceneItems('Layer table entries: name, color, colorIndex, visible, frozen.'),
          meta: { type: 'object', additionalProperties: true, description: 'Source path, format, block definitions, entity count, truncation flag.' },
        },
      },
      render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
    },
    timeoutMs: 300000,
    isConcurrencySafe: () => true,
    async execute(args) {
      if (args === null || typeof args !== 'object' || typeof args.path !== 'string' || args.path.trim().length === 0) {
        throw new Error('parse_cad_to_scene: "path" must be a non-empty string')
      }
      const target = await ctx.fs.resolve(args.path)
      const procPath = ctx.fs.processPath(target)
      let dxfText
      let format = 'dxf'
      if (/\.dwg$/i.test(procPath)) {
        const converter = findConverter(cfg)
        if (converter === null) {
          throw new Error('DWG input requires an external converter, but none was found. Install LibreDWG (dwg2dxf on PATH) or ODA File Converter, or set config.dwgConverter on the plugin row to the converter executable path.')
        }
        dxfText = readFileSync(await convertDwgToDxf(procPath, converter), 'utf8')
        format = 'dwg->dxf:' + converter.kind
      } else {
        dxfText = await ctx.fs.readText(target)
      }
      const scene = parseDxfToScene(dxfText, procPath, format)
      return args.detail === 'full' ? scene : summarizeScene(scene)
    },
  }
}

// ── plugin entry ────────────────────────────────────────────────────────────

function apply(ctx, config) {
  const cfg = config && typeof config === 'object' ? config : {}
  ctx.tools.register(makeTool(ctx, cfg))
  // webServer may mount after this row (entry startup is asynchronous), so
  // WAIT for it instead of skipping the route forever — the old ctx.get()
  // approach silently raced and left /api/cad-scene-builder/parse as a404.
  // Non-web profiles never see the service and keep the tool-only behavior.
  ctx.inject(['webServer'], (webCtx) => {
    webCtx.effect(() => webCtx.webServer.register({ kind: 'exact', path: ROUTE_PATH, handler: (req, res) => handleParse(req, res, cfg) }), 'dsh-cad-scene: parse + download route')
  })
}

export { name, inject, apply }
