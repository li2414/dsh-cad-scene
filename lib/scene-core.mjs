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

/**
 * Normalize one parsed entity into a portable geometry entry for device
 * children: { geometryType, coords, handle }. coords are flat numeric arrays
 * (line [x1,y1,x2,y2], polyline [x1,y1,...], arc [cx,cy,r,a0,a1],
 * circle [cx,cy,r], point/text/insert [x,y]).
 */
function geometryEntry(e) {
  const handle = e.handle != null ? String(e.handle) : null
  switch (e.type) {
    case 'LINE': {
      const v = e.vertices || []
      if (v.length >= 2) return { geometryType: 'line', coords: [v[0].x, v[0].y, v[1].x, v[1].y], handle }
      break
    }
    case 'LWPOLYLINE':
    case 'POLYLINE': {
      const flat = []
      for (const v of e.vertices || []) flat.push(v.x, v.y)
      if (flat.length >= 4) return { geometryType: 'polyline', coords: flat, closed: e.closed === true, handle }
      break
    }
    case 'ARC':
      return { geometryType: 'arc', coords: [e.center.x, e.center.y, e.radius || 0, e.startAngle || 0, e.endAngle || 0], handle }
    case 'CIRCLE':
      return { geometryType: 'circle', coords: [e.center.x, e.center.y, e.radius || 0], handle }
    case 'TEXT':
    case 'MTEXT':
      return { geometryType: 'text', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], text: e.text || '', handle }
    case 'INSERT':
      return { geometryType: 'insert', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], blockName: e.block || null, rotation: e.rotation || 0, handle }
    case 'POINT':
      return { geometryType: 'point', coords: [e.position ? e.position.x : 0, e.position ? e.position.y : 0], handle }
    default:
      break
  }
  // never dropped: any other entity keeps at least a polyline/point entry
  const flat = []
  for (const v of e.vertices || []) flat.push(v.x, v.y)
  if (flat.length >= 4) return { geometryType: 'polyline', coords: flat, closed: e.closed === true, handle }
  const p = e.position || e.center || (e.vertices && e.vertices[0]) || { x: 0, y: 0 }
  return { geometryType: 'point', coords: [p.x || 0, p.y || 0], handle }
}

function childrenBounds(children) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const c of children) {
    const co = c.coords || []
    if (c.geometryType === 'arc' || c.geometryType === 'circle') {
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

function makeDevice(id, layer, blockName, children, position, rotation, scale, texts) {
  const bb = childrenBounds(children) || { minX: 0, minY: 0, maxX: 0, maxY: 0 }
  const center = position || { x: (bb.minX + bb.maxX) / 2, y: (bb.minY + bb.maxY) / 2 }
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
  return {
    id,
    type: String(layer || '0').toLowerCase(),
    layer: layer || '0',
    blockName: blockName || null,
    name: name ? name.replace(/[{}\\]/g, '').slice(0, 60) : null,
    position: { x: center.x, y: center.y },
    rotation: rotation || 0,
    scale: scale || { x: 1, y: 1 },
    size: { width: bb.maxX - bb.minX, depth: bb.maxY - bb.minY },
    entityCount: children.length,
    handles: children.map((c) => c.handle).filter((h) => h != null),
    children,
  }
}

/**
 * Device decomposition per the layered contract:
 *  1. block level — every INSERT is one logical device (block geometry in
 *     `children` in block-local coords; position/rotation/scale preserved),
 *  2. layer level — a drawing without INSERTs groups each layer's entities
 *     into one logical device,
 *  3. isolated level — any entity not claimed by a grouping above is its own
 *     single-entity device (never dropped).
 * Texts attach as device names and always remain in entities[].
 */
export function buildDevices(entities, parsed) {
  const texts = entities.filter((e) => e.type === 'TEXT' || e.type === 'MTEXT')
  const blockDefs = (parsed && parsed.blocks) || {}
  const devices = []
  let n = 0
  const nextId = () => {
    n += 1
    return 'device_' + n
  }

  const inserts = entities.filter((e) => e.type === 'INSERT')
  if (inserts.length > 0) {
    for (const e of inserts) {
      const def = blockDefs[e.block]
      const blockEntities = ((def && def.entities) || []).map(normalizeEntity)
      let children = blockEntities.map(geometryEntry).filter(Boolean)
      if (children.length === 0) {
        children = [{ geometryType: 'point', coords: [0, 0], handle: e.handle != null ? String(e.handle) : null }]
      }
      devices.push(makeDevice(
        nextId(), e.layer, e.block || null, children,
        e.position || { x: 0, y: 0 }, e.rotation || 0,
        { x: e.xScale || 1, y: e.yScale || 1 },
        texts,
      ))
    }
    for (const e of entities) {
      if (e.type === 'INSERT' || e.type === 'TEXT' || e.type === 'MTEXT') continue
      const child = geometryEntry(e)
      if (!child) continue
      devices.push(makeDevice(nextId(), e.layer, null, [child], null, 0, { x: 1, y: 1 }, texts))
    }
  } else {
    const byLayer = new Map()
    for (const e of entities) {
      if (e.type === 'TEXT' || e.type === 'MTEXT') continue
      const key = e.layer || '0'
      if (!byLayer.has(key)) byLayer.set(key, [])
      const child = geometryEntry(e)
      if (child) byLayer.get(key).push(child)
    }
    for (const [layer, children] of byLayer) {
      devices.push(makeDevice(nextId(), layer, null, children, null, 0, { x: 1, y: 1 }, texts))
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
