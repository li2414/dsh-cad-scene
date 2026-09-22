/**
 * Shared CAD → scene-JSON core for the 3d解析 panel, isomorphic: bundled into
 * the browser client (dxf-parser works in UMD form) and imported by the host
 * route for DWG conversions. Single source for entity normalization and the
 * racks/aisles/zones classification.
 */
import DxfParser from 'dxf-parser'

// ── layer classification ────────────────────────────────────────────────────

export function classifyLayer(layer) {
  const l = String(layer || '').toLowerCase()
  if (/agv|amr|rgv|小车|叉车/.test(l)) return 'agvs'
  if (/rack|shelf|shelv|货架|货位/.test(l)) return 'racks'
  if (/aisle|lane|corridor|通道|走道/.test(l)) return 'aisles'
  if (/zone|area|region|区|区域|库区/.test(l)) return 'zones'
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

export function buildScene(parsed, sourceName, sourceFormat) {
  const CAP = 2000
  const racks = []
  const aisles = []
  const zones = []
  const agvs = []
  const entities = []
  let truncated = false
  const buckets = { racks, aisles, zones, agvs }
  const counters = { racks: 0, aisles: 0, zones: 0, agvs: 0 }

  for (const raw of parsed.entities || []) {
    if (entities.length >= CAP) { truncated = true; break }
    const e = normalizeEntity(raw)
    entities.push(e)
    const bucketName = classifyLayer(e.layer)
    if (bucketName === null) continue
    counters[bucketName] += 1
    buckets[bucketName].push(Object.assign({ id: bucketName.slice(0, -1) + '-' + counters[bucketName] }, e))
  }

  return {
    racks,
    aisles,
    zones,
    agvs,
    entities,
    layers: normalizeLayers(parsed),
    meta: {
      source: sourceName,
      format: sourceFormat,
      blocks: normalizeBlocks(parsed),
      entityCount: entities.length,
      truncated,
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
