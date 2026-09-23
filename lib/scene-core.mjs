/**
 * Shared CAD → scene-JSON core for the 3d解析 panel, isomorphic: bundled into
 * the browser client (dxf-parser works in UMD form) and imported by the host
 * route for DWG conversions. Single source for entity normalization and the
 * racks/aisles/zones classification.
 */
import DxfParser from 'dxf-parser'

// ── layer classification ────────────────────────────────────────────────────

const CATEGORY_RULES = [
  ['racks', /rack|shelf|shelv|pallet|stowage|货架|货位|托盘/],
  ['aisles', /aisle|lane|corridor|conveyor|belt|roller|通道|走道|输送/],
  ['zones', /zone|area|region|区|区域|库区/],
  ['agvs', /agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|小车|叉车|穿梭|堆垛|提升|转台/],
]

export function classifyLayer(layer) {
  const l = String(layer || '').toLowerCase()
  for (const rule of CATEGORY_RULES) {
    if (rule[1].test(l)) return rule[0]
  }
  return null
}

/** Classify by layer name OR block reference name (INSERT blocks carry meaning). */
export function classifyEntity(e) {
  const hay = String((e && e.layer) || '') + ' ' + String((e && e.block) || '')
  const l = hay.toLowerCase()
  for (const rule of CATEGORY_RULES) {
    if (rule[1].test(l)) return rule[0]
  }
  return null
}

// ── entity normalization ────────────────────────────────────────────────────

function point(p) {
  if (p === null || typeof p !== 'object' || typeof p.x !== 'number') return null
  const out = { x: p.x, y: typeof p.y === 'number' ? p.y : 0 }
  if (typeof p.z === 'number') out.z = p.z
  return out
}

function points(list) {
  return (Array.isArray(list) ? list : []).map(point).filter((p) => p !== null)
}

export function normalizeEntity(e) {
  const out = { type: e.type, layer: e.layer || '0' }
  if (e.handle !== undefined) out.handle = String(e.handle)
  switch (e.type) {
    case 'LINE':
      out.vertices = points(e.vertices)
      break
    case 'LWPOLYLINE':
    case 'POLYLINE':
    case '3DFACE':
      out.vertices = points(e.vertices)
      out.closed = e.shape === true
      if (typeof e.width === 'number') out.width = e.width
      break
    case 'ARC':
      // dxf-parser reports arc angles in radians
      out.center = point(e.center)
      out.radius = e.radius
      out.startAngle = e.startAngle
      out.endAngle = e.endAngle
      break
    case 'CIRCLE':
      out.center = point(e.center)
      out.radius = e.radius
      break
    case 'ELLIPSE':
      out.center = point(e.center)
      out.majorAxisEndPoint = point(e.majorAxisEndPoint)
      out.axisRatio = e.axisRatio
      out.startAngle = e.startAngle
      out.endAngle = e.endAngle
      break
    case 'TEXT':
      out.text = typeof e.text === 'string' ? e.text : ''
      out.position = point(e.startPoint)
      if (typeof e.textHeight === 'number') out.height = e.textHeight
      if (typeof e.rotation === 'number') out.rotation = e.rotation
      break
    case 'MTEXT':
      out.text = typeof e.text === 'string' ? e.text : ''
      out.position = point(e.position)
      if (typeof e.height === 'number') out.height = e.height
      break
    case 'INSERT':
      out.block = typeof e.name === 'string' ? e.name : null
      out.position = point(e.position)
      if (typeof e.rotation === 'number') out.rotation = e.rotation
      if (typeof e.xScale === 'number' && e.xScale !== 1) out.xScale = e.xScale
      if (typeof e.yScale === 'number' && e.yScale !== 1) out.yScale = e.yScale
      break
    case 'POINT':
      out.position = point(e.position)
      break
    case 'SOLID':
      out.points = points(e.points)
      break
    case 'SPLINE':
      out.controlPoints = points(e.controlPoints)
      out.fitPoints = points(e.fitPoints)
      break
    default:
      break
  }
  return out
}

function normalizeLayers(parsed) {
  const table = parsed && parsed.tables && parsed.tables.layer && parsed.tables.layer.layers
  if (table === null || typeof table !== 'object') return []
  return Object.values(table).map((l) => ({
    name: typeof l.name === 'string' ? l.name : '0',
    color: typeof l.color === 'number' ? l.color : null,
    colorIndex: typeof l.colorIndex === 'number' ? l.colorIndex : null,
    visible: l.visible !== false,
    frozen: l.frozen === true,
  }))
}

function normalizeBlocks(parsed) {
  const blocks = parsed && parsed.blocks
  if (blocks === null || typeof blocks !== 'object') return []
  return Object.values(blocks)
    .filter((b) => typeof b.name === 'string' && !b.name.startsWith('*'))
    .map((b) => ({
      name: b.name,
      position: point(b.position),
      entityCount: Array.isArray(b.entities) ? b.entities.length : 0,
    }))
}

const DEVICE_TYPE_LABELS = { racks: '货架', aisles: '通道', zones: '区域', agvs: 'AGV' }
const NON_DEVICE_TYPES = new Set(['TEXT', 'MTEXT', 'DIMENSION', 'HATCH', 'ATTDEF', 'ATTRIB', 'LEADER', 'MLINE'])
const NON_DEVICE_LAYER = /dim|标注|note|text|hatch|边框|图框|frame|border|title/i

/**
 * Normalize one parsed entity into a portable geometry entry for device
 * geometry groups: { type, coords, handle }. coords are flat numeric arrays
 * (line [x1,y1,x2,y2], polyline [x1,y1,...], arc [cx,cy,r,a0,a1],
 * circle [cx,cy,r], point/text/insert [x,y]).
 */
function geometryEntry(e) {
  const handle = e.handle != null ? String(e.handle) : null
  switch (e.type) {
    case 'LINE': {
      const v = e.vertices || []
      if (v.length >= 2) return { type: 'line', coords: [v[0].x, v[0].y, v[1].x, v[1].y], handle }
      break
    }
    case 'LWPOLYLINE':
    case 'POLYLINE': {
      const flat = []
      for (const v of e.vertices || []) flat.push(v.x, v.y)
      if (flat.length >= 4) return { type: 'polyline', coords: flat, closed: e.closed === true, handle }
      break
    }
    case 'ARC':
      return { type: 'arc', coords: [e.center.x, e.center.y, e.radius || 0, e.startAngle || 0, e.endAngle || 0], handle }
    case 'CIRCLE':
      return { type: 'circle', coords: [e.center.x, e.center.y, e.radius || 0], handle }
    case 'TEXT':
    case 'MTEXT':
      return { type: 'text', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], text: e.text || '', handle }
    case 'INSERT':
      return { type: 'insert', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], blockName: e.block || null, rotation: e.rotation || 0, handle }
    case 'POINT':
      return { type: 'point', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], handle }
    default:
      break
  }
  const flat = []
  for (const v of e.vertices || []) flat.push(v.x, v.y)
  if (flat.length >= 4) return { type: 'polyline', coords: flat, closed: e.closed === true, handle }
  const p = e.position || e.center || (e.vertices && e.vertices[0]) || { x: 0, y: 0 }
  return { type: 'point', coords: [p.x || 0, p.y || 0], handle }
}

/** Plan bounding box of a geometry group (z kept flat at 0 for 2.5D plans). */
function geometryGroupBounds(group) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const c of group) {
    const co = c.coords || []
    if (c.type === 'arc' || c.type === 'circle') {
      const cx = co[0], cy = co[1], r = co[2] || 0
      minX = Math.min(minX, cx - r); maxX = Math.max(maxX, cx + r)
      minY = Math.min(minY, cy - r); maxY = Math.max(maxY, cy + r)
      continue
    }
    for (let i = 0; i + 1 < co.length; i += 2) {
      minX = Math.min(minX, co[i]); maxX = Math.max(maxX, co[i])
      minY = Math.min(minY, co[i + 1]); maxY = Math.max(maxY, co[i + 1])
    }
  }
  if (minX === Infinity) return null
  return { minX, minY, maxX, maxY }
}

function makeDevice(id, layer, blockName, geometryGroup, position, rotation, scale, texts) {
  const bb = geometryGroupBounds(geometryGroup) || { minX: 0, minY: 0, maxX: 0, maxY: 0 }
  const cx = position ? position.x : (bb.minX + bb.maxX) / 2
  const cy = position ? position.y : (bb.minY + bb.maxY) / 2
  let name = null
  let best = Infinity
  const reach = Math.max(bb.maxX - bb.minX, bb.maxY - bb.minY, 1) + 5
  for (const t of texts) {
    const p = t && t.position
    if (!p || !t.text) continue
    const dx = Math.max(bb.minX - p.x, 0, p.x - bb.maxX)
    const dy = Math.max(bb.minY - p.y, 0, p.y - bb.maxY)
    const d = dx * dx + dy * dy
    if (d < best && d <= reach * reach) {
      best = d
      name = String(t.text)
    }
  }
  const family = classifyEntity({ layer: layer, block: blockName })
  return {
    device_id: id,
    id,
    type: (family && DEVICE_TYPE_LABELS[family]) || layer || '0',
    layer: layer || '0',
    blockName: blockName || null,
    name: name ? name.replace(/[{}\\]/g, '').slice(0, 60) : null,
    bounding_box: { min: [bb.minX, bb.minY, 0], max: [bb.maxX, bb.maxY, 0] },
    center: [cx, cy, 0],
    rotation: rotation || 0,
    scale: scale || { x: 1, y: 1 },
    entityCount: geometryGroup.length,
    handles: geometryGroup.map((c) => c.handle).filter((h) => h != null),
    geometry_group: geometryGroup,
  }
}

/**
 * Device decomposition: block-first, then spatial bbox clustering.
 *  1. filter non-device content (TEXT/DIMENSION/HATCH/annotation layers),
 *  2. block priority — every INSERT is one device; block content stays
 *     together in block-local coordinates (never split),
 *  3. remaining geometry clusters by bounding-box proximity: entities whose
 *     boxes overlap/intersect or sit within the tolerance (10 drawing units
 *     on mm-scale plans, proportional on smaller ones) join one device group
 *     transitively (union-find).
 */
export function buildDevices(entities, parsed) {
  const texts = entities.filter((e) => e.type === 'TEXT' || e.type === 'MTEXT')
  const blockDefs = (parsed && parsed.blocks) || {}
  const devices = []
  let n = 0
  const nextId = () => 'device_' + (++n)

  const inserts = []
  const loose = []
  for (const e of entities) {
    if (NON_DEVICE_TYPES.has(e.type)) continue
    if (NON_DEVICE_LAYER.test(String(e.layer || ''))) continue
    if (e.type === 'INSERT') inserts.push(e)
    else loose.push(e)
  }

  // 2. block priority: one INSERT is one logical device
  for (const e of inserts) {
    const def = blockDefs[e.block]
    let group = ((def && def.entities) || []).map(normalizeEntity).map(geometryEntry).filter(Boolean)
    if (group.length === 0) {
      group = [{ type: 'point', coords: [0, 0], handle: e.handle != null ? String(e.handle) : null }]
    }
    devices.push(makeDevice(nextId(), e.layer, e.block || null, group,
      e.position || { x: 0, y: 0 }, e.rotation || 0,
      { x: e.xScale || 1, y: e.yScale || 1 }, texts))
  }

  // 3. spatial bounding-box clustering (union-find over near/overlapping boxes)
  const parts = []
  for (const e of loose) {
    const entry = geometryEntry(e)
    if (!entry) continue
    const bb = geometryGroupBounds([entry])
    if (!bb) continue
    parts.push({ entry, layer: e.layer || '0', minX: bb.minX, minY: bb.minY, maxX: bb.maxX, maxY: bb.maxY })
  }
  if (parts.length > 0) {
    let pminX = Infinity, pminY = Infinity, pmaxX = -Infinity, pmaxY = -Infinity
    for (const p of parts) {
      pminX = Math.min(pminX, p.minX); pminY = Math.min(pminY, p.minY)
      pmaxX = Math.max(pmaxX, p.maxX); pmaxY = Math.max(pmaxY, p.maxY)
    }
    const planSpan = Math.max(pmaxX - pminX, pmaxY - pminY, 1)
    // 10 drawing units on mm-scale plans (a rack detail gap); proportional
    // on unit-less plans so clusters stay meaningful at any scale
    const tol = planSpan > 5000 ? 10 : planSpan * 0.005
    const parent = parts.map((_, i) => i)
    const find = (i) => {
      while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i] }
      return i
    }
    const union = (a, b) => {
      const ra = find(a)
      const rb = find(b)
      if (ra !== rb) parent[rb] = ra
    }
    const cell = Math.max(tol * 5, planSpan / 100)
    const grid = new Map()
    parts.forEach((p, i) => {
      const x0 = Math.floor((p.minX - tol) / cell)
      const x1 = Math.floor((p.maxX + tol) / cell)
      const y0 = Math.floor((p.minY - tol) / cell)
      const y1 = Math.floor((p.maxY + tol) / cell)
      for (let gx = x0; gx <= x1; gx++) {
        for (let gy = y0; gy <= y1; gy++) {
          const key = gx + ',' + gy
          for (const j of grid.get(key) || []) {
            const q = parts[j]
            if (p.minX - tol <= q.maxX && q.minX - tol <= p.maxX && p.minY - tol <= q.maxY && q.minY - tol <= p.maxY) {
              union(i, j)
            }
          }
          if (!grid.has(key)) grid.set(key, [])
          grid.get(key).push(i)
        }
      }
    })
    const groups = new Map()
    parts.forEach((p, i) => {
      const r = find(i)
      if (!groups.has(r)) groups.set(r, [])
      groups.get(r).push(p)
    })
    for (const members of groups.values()) {
      const layerCounts = {}
      for (const m of members) layerCounts[m.layer] = (layerCounts[m.layer] || 0) + 1
      const layer = Object.keys(layerCounts).sort((a, b) => layerCounts[b] - layerCounts[a])[0] || '0'
      devices.push(makeDevice(nextId(), layer, null, members.map((m) => m.entry), null, 0, { x: 1, y: 1 }, texts))
    }
  }
  return devices
}

export function buildScene(parsed, sourceName, sourceFormat) {
  const CAP = 50000
  const racks = []
  const aisles = []
  const zones = []
  const agvs = []
  const entities = []
  let truncated = false
  const buckets = { racks, aisles, zones, agvs }
  const counters = { racks: 0, aisles: 0, zones: 0, agvs: 0 }
  let unclassified = 0

  for (const raw of parsed.entities || []) {
    if (entities.length >= CAP) { truncated = true; break }
    const e = normalizeEntity(raw)
    entities.push(e)
    const bucketName = classifyEntity(e)
    if (bucketName === null) {
      if (e.type !== 'TEXT' && e.type !== 'MTEXT') unclassified += 1
      continue
    }
    counters[bucketName] += 1
    buckets[bucketName].push(Object.assign({ id: bucketName.slice(0, -1) + '-' + counters[bucketName] }, e))
  }

  // per-layer counts + byType + plan bounds feed the summary mode and legend
  const layerCounts = {}
  const byType = {}
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const e of entities) {
    layerCounts[e.layer] = (layerCounts[e.layer] || 0) + 1
    byType[e.type] = (byType[e.type] || 0) + 1
    const eat = (p) => {
      if (!p) return
      minX = Math.min(minX, p.x); minY = Math.min(minY, p.y)
      maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y)
    }
    eat(e.position); eat(e.center)
    for (const v of e.vertices || []) eat(v)
    for (const p of (e.controlPoints || []).concat(e.fitPoints || [], e.points || [])) eat(p)
  }
  const span = minX < Infinity ? { width: maxX - minX, height: maxY - minY } : null
  const layers = normalizeLayers(parsed).map((l) => Object.assign({}, l, { count: layerCounts[l.name] || 0 }))
  for (const name of Object.keys(layerCounts)) {
    if (!layers.some((l) => l.name === name)) {
      layers.push({ name, color: null, colorIndex: null, visible: true, frozen: false, count: layerCounts[name] })
    }
  }

  const planRadius = span ? Math.max(span.width, span.height) : 100
  void planRadius
  const devices = buildDevices(entities, parsed)

  return {
    racks,
    aisles,
    zones,
    agvs,
    entities,
    devices,
    layers,
    meta: {
      source: sourceName,
      format: sourceFormat,
      blocks: normalizeBlocks(parsed),
      entityCount: entities.length,
      unclassified,
      truncated,
      byType,
      span,
    },
  }
}

/**
 * Compact tool-friendly projection: identical top-level shape (so one output
 * schema covers both modes) with the heavy arrays emptied and everything a
 * model usually needs moved into layers[].count and meta.summary.
 */
export function summarizeScene(scene) {
  const meta = scene.meta || {}
  return {
    racks: [],
    aisles: [],
    zones: [],
    agvs: [],
    entities: [],
    devices: [],
    layers: scene.layers || [],
    meta: {
      source: meta.source,
      format: meta.format,
      blocks: (meta.blocks || []).slice(0, 50),
      entityCount: meta.entityCount || 0,
      unclassified: meta.unclassified || 0,
      truncated: meta.truncated === true,
      summary: {
        devices: (scene.devices || []).length,
        classified: {
          racks: (scene.racks || []).length,
          aisles: (scene.aisles || []).length,
          zones: (scene.zones || []).length,
          agvs: (scene.agvs || []).length,
        },
        byType: meta.byType || {},
        span: meta.span || null,
      },
    },
  }
}

/**
 * Parse DXF text into the scene JSON. Throws with a readable message on
 * malformed content.
 */
export function parseDxfToScene(text, sourceName, sourceFormat) {
  let parsed
  try {
    parsed = new DxfParser().parseSync(text)
  } catch (error) {
    throw new Error('DXF 解析失败: ' + (error && error.message ? error.message : String(error)))
  }
  if (parsed === null || typeof parsed !== 'object' || !Array.isArray(parsed.entities)) {
    throw new Error('DXF 解析失败: 解析器未返回实体表')
  }
  return buildScene(parsed, sourceName, sourceFormat || 'dxf')
}

/**
 * Compact device digest for AI recognition: devices grouped by layer with
 * range-compressed ids, typical sizes, deduped names and geometry signatures.
 * Roughly 2KB regardless of drawing size — this is the LLM-facing input, not
 * the full scene. Named devices and size outliers are listed individually in
 * `anomalies`.
 */
export function buildDigest(scene) {
  const devices = scene.devices || []
  const groupMap = new Map()
  for (const d of devices) {
    const key = d.layer || '0'
    let g = groupMap.get(key)
    if (!g) {
      const family = classifyEntity({ layer: d.layer, block: d.blockName })
      g = {
        key,
        category: (family && DEVICE_TYPE_LABELS[family]) || key,
        ids: [],
        widths: [],
        depths: [],
        texts: new Set(),
        geometry: new Set(),
        blocks: new Set(),
      }
      groupMap.set(key, g)
    }
    g.ids.push(String(d.device_id || d.id || ''))
    const bb = d.bounding_box
    if (bb) {
      g.widths.push(Math.abs(bb.max[0] - bb.min[0]))
      g.depths.push(Math.abs(bb.max[1] - bb.min[1]))
    }
    if (d.name) g.texts.add(d.name)
    if (d.blockName) g.blocks.add(d.blockName)
    for (const c of d.geometry_group || []) g.geometry.add(c.type)
  }

  const med = (vals) => {
    if (vals.length === 0) return 0
    const s = vals.slice().sort((a, b) => a - b)
    const m = Math.floor(s.length / 2)
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
  }
  const r1 = (x) => Math.round(x * 10) / 10
  const idRanges = (ids) => {
    const nums = ids
      .map((s) => Number(String(s).replace(/^device_/, '')))
      .filter((n) => Number.isFinite(n))
      .sort((a, b) => a - b)
    const out = []
    let start = null
    let prev = null
    const flush = () => {
      if (start === null) return
      out.push(start === prev ? 'device_' + start : 'device_' + start + '..device_' + prev)
      start = null
    }
    for (const n of nums) {
      if (start === null) {
        start = n
        prev = n
        continue
      }
      if (n === prev + 1) {
        prev = n
        continue
      }
      flush()
      start = n
      prev = n
    }
    flush()
    return out.join(', ')
  }

  const groups = []
  const anomalies = []
  for (const g of groupMap.values()) {
    const w = med(g.widths)
    const dpt = med(g.depths)
    groups.push({
      key: g.key,
      category: g.category,
      count: g.ids.length,
      ids: idRanges(g.ids),
      bbox_typical: [r1(w), r1(dpt)],
      texts: Array.from(g.texts).slice(0, 5),
      geometry: Array.from(g.geometry),
      block_names: Array.from(g.blocks),
    })
    const typicalArea = Math.max(w * dpt, 1e-6)
    for (const d of devices) {
      if ((d.layer || '0') !== g.key) continue
      const bb = d.bounding_box
      const dw = bb ? Math.abs(bb.max[0] - bb.min[0]) : 0
      const dd = bb ? Math.abs(bb.max[1] - bb.min[1]) : 0
      const area = dw * dd
      const named = !!d.name
      const outlier = area > 0 && (area < typicalArea * 0.2 || area > typicalArea * 5)
      if ((named || outlier) && anomalies.length < 50) {
        anomalies.push({
          device_id: d.device_id || d.id,
          key: g.key,
          why: [named ? 'named' : null, outlier ? 'size-outlier' : null].filter(Boolean).join('+'),
          size: [r1(dw), r1(dd)],
          texts: d.name ? [d.name] : [],
        })
      }
    }
  }
  groups.sort((a, b) => b.count - a.count)

  const span = (scene.meta && scene.meta.span) || null
  const maxSpan = span ? Math.max(span.width, span.height) : 0
  return {
    manifest_version: 1,
    generated_by: 'dsh-cad-scene',
    source: (scene.meta && scene.meta.source) || null,
    plan: {
      span: span ? [Math.round(span.width), Math.round(span.height)] : null,
      unit_guess: maxSpan > 5000 ? 'large-span (likely mm)' : 'small plan (unit-less)',
    },
    groups,
    anomalies,
  }
}
