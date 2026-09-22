/**
 * Browser half of dsh-cad-scene.
 *
 * - sidebar.panellist: the 「📐 3d解析」 row rendered directly under the
 *   sidebar's New Session button. The row itself is shell chrome (button,
 *   label, tooltip, selection); this slot's component is only its glyph cell.
 *   Row clicks select the center panel through the shell's own mechanics.
 * - main: the dual-pane center panel keyed to the same id. Left column imports
 *   a CAD file (.dxf parsed in-browser with dxf-parser via scene-core; .dwg
 *   goes to the host route for conversion; .step reports unsupported). Right
 *   column renders the warehouse in three.js (orbit/zoom/pan, layer-colored
 *   racks/aisles/zones/agvs, click to inspect layer + text info).
 * - tool.call.toolview (key parse_cad_to_scene): the tool-call card renders
 *   the parsed scene as the same interactive three.js preview.
 *
 * An ErrorBoundary wraps every registered component so a render failure shows
 * the error instead of a blank page.
 */
import { Component, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { parseDxfToScene } from './scene-core.mjs'

const inject = ['slots']

const CATEGORY_COLORS = { racks: 0xf97316, aisles: 0x94a3b8, zones: 0x22c55e, agvs: 0xef4444 }
const CATEGORY_LABELS = { racks: '货架', aisles: '通道', zones: '区域', agvs: 'AGV' }
const RACK_HEIGHT = 6

// ── three.js builders (DXF plan (x, y) maps to ground (x, 0, -y)) ───────────

function layerColor(scene, layerName, fallback) {
  const layers = Array.isArray(scene.layers) ? scene.layers : []
  const layer = layers.find((l) => l && l.name === layerName)
  return layer && typeof layer.color === 'number' && layer.color > 0 ? layer.color : fallback
}

function shapeFrom(vertices) {
  const shape = new THREE.Shape()
  vertices.forEach((v, i) => {
    if (i === 0) shape.moveTo(v.x, v.y)
    else shape.lineTo(v.x, v.y)
  })
  return shape
}

function extrudePolygon(vertices, height, color) {
  const geometry = new THREE.ExtrudeGeometry(shapeFrom(vertices), { depth: height, bevelEnabled: false })
  geometry.rotateX(-Math.PI / 2)
  return new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color }))
}

function flatPolygon(vertices, color) {
  const geometry = new THREE.ShapeGeometry(shapeFrom(vertices))
  geometry.rotateX(-Math.PI / 2)
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, side: THREE.DoubleSide }),
  )
  mesh.position.y = 0.05
  return mesh
}

function polylineObject(vertices, color, closed) {
  const points = vertices.map((v) => new THREE.Vector3(v.x, 0.12, -v.y))
  if (closed && points.length > 2) points.push(points[0].clone())
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color }),
  )
}

function arcObject(center, radius, startAngle, endAngle, color) {
  // y -> -z mirrors the plan, so the radian range is negated and swapped.
  const curve = new THREE.EllipseCurve(center.x, center.y, radius, radius, -endAngle, -startAngle, false)
  const points = curve.getPoints(48).map((p) => new THREE.Vector3(p.x, 0.12, -p.y))
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color }),
  )
}

function buildItemObject(item, category, scene) {
  const color = layerColor(scene, item.layer, CATEGORY_COLORS[category])
  switch (item.type) {
    case 'INSERT': {
      const w = category === 'agvs' ? 1.2 : 2.4
      const hgt = category === 'agvs' ? 0.8 : RACK_HEIGHT
      const d = category === 'agvs' ? 0.8 : 1.2
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(w, hgt, d),
        new THREE.MeshStandardMaterial({ color }),
      )
      const p = item.position || { x: 0, y: 0 }
      mesh.position.set(p.x, hgt / 2, -p.y)
      return mesh
    }
    case 'CIRCLE': {
      const c = item.center || { x: 0, y: 0 }
      if (category === 'zones') return arcObject(c, item.radius || 1, 0, Math.PI * 2, color)
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(item.radius || 1, item.radius || 1, RACK_HEIGHT, 24),
        new THREE.MeshStandardMaterial({ color }),
      )
      mesh.position.set(c.x, RACK_HEIGHT / 2, -c.y)
      return mesh
    }
    case 'LWPOLYLINE':
    case 'POLYLINE': {
      const vertices = Array.isArray(item.vertices) ? item.vertices : []
      if (vertices.length < 2) return null
      if (category === 'zones') return item.closed ? flatPolygon(vertices, color) : polylineObject(vertices, color, false)
      return item.closed ? extrudePolygon(vertices, RACK_HEIGHT, color) : polylineObject(vertices, color, false)
    }
    case 'LINE':
      return polylineObject(Array.isArray(item.vertices) ? item.vertices : [], color, false)
    case 'ARC':
      return arcObject(item.center || { x: 0, y: 0 }, item.radius || 1, item.startAngle || 0, item.endAngle || Math.PI, color)
    default:
      return null
  }
}

// ── three.js canvas ─────────────────────────────────────────────────────────

function SceneCanvas({ scene, selectedId, onSelect }) {
  const hostRef = useRef(null)
  const pickablesRef = useRef([])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined
    const width = host.clientWidth || 640
    const height = Math.max(host.clientHeight || 0, 320)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(width, height)
    host.appendChild(renderer.domElement)

    const scene3 = new THREE.Scene()
    scene3.background = new THREE.Color(0x0f172a)
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 10000)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    scene3.add(new THREE.AmbientLight(0xffffff, 0.75))
    const sun = new THREE.DirectionalLight(0xffffff, 1.1)
    sun.position.set(1, 2, 1)
    scene3.add(sun)

    const group = new THREE.Group()
    const pickables = []
    for (const category of ['racks', 'aisles', 'zones', 'agvs']) {
      for (const item of scene[category] || []) {
        const object = buildItemObject(item, category, scene)
        if (!object) continue
        object.traverse((child) => {
          child.userData.item = item
          child.userData.category = category
        })
        group.add(object)
        pickables.push(object)
      }
    }
    scene3.add(group)
    pickablesRef.current = pickables

    const bounds = new THREE.Box3().setFromObject(group)
    if (!bounds.isEmpty()) {
      const center = bounds.getCenter(new THREE.Vector3())
      const size = bounds.getSize(new THREE.Vector3())
      const radius = Math.max(size.x, size.z, 10)
      const grid = new THREE.GridHelper(radius * 2, 20, 0x334155, 0x1e293b)
      grid.position.set(center.x, 0, center.z)
      scene3.add(grid)
      camera.position.set(center.x + radius * 0.9, radius * 0.9, center.z + radius * 0.9)
      controls.target.copy(center)
    } else {
      camera.position.set(30, 30, 30)
    }
    controls.update()

    const raycaster = new THREE.Raycaster()
    raycaster.params.Line.threshold = 1.5
    const pointer = new THREE.Vector2()
    const onClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)
      const hits = raycaster.intersectObjects(pickables, true)
      if (hits.length > 0) {
        const hit = hits[0].object
        onSelect({ item: hit.userData.item || null, category: hit.userData.category || null })
      } else {
        onSelect(null)
      }
    }
    renderer.domElement.addEventListener('click', onClick)

    const resizeObserver = new ResizeObserver(() => {
      const w = host.clientWidth || width
      const hgt = Math.max(host.clientHeight || 0, 320)
      camera.aspect = w / hgt
      camera.updateProjectionMatrix()
      renderer.setSize(w, hgt)
    })
    resizeObserver.observe(host)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene3, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      renderer.domElement.removeEventListener('click', onClick)
      controls.dispose()
      scene3.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          if (Array.isArray(object.material)) object.material.forEach((m) => m.dispose())
          else object.material.dispose()
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
      pickablesRef.current = []
    }
  }, [scene])

  useEffect(() => {
    for (const object of pickablesRef.current) {
      object.traverse((child) => {
        const material = child.material
        if (material && 'emissive' in material) {
          const selected = selectedId !== null && child.userData.item && child.userData.item.id === selectedId
          material.emissive.setHex(selected ? 0x666666 : 0x000000)
        }
      })
    }
  }, [selectedId])

  return <div ref={hostRef} style={{ flex: 1, minHeight: 320, borderRadius: 8, overflow: 'hidden', lineHeight: 0 }} />
}

// ── file helpers ────────────────────────────────────────────────────────────

async function fileToBase64(file) {
  const buffer = new Uint8Array(await file.arrayBuffer())
  let binary = ''
  const CHUNK = 0x8000
  for (let i = 0; i < buffer.length; i += CHUNK) {
    binary += String.fromCharCode.apply(null, buffer.subarray(i, i + CHUNK))
  }
  return btoa(binary)
}

async function parseFile(file) {
  if (/\.(dwg|step|stp)$/i.test(file.name)) {
    const response = await fetch('/api/cad-scene-builder/parse', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: file.name, content: await fileToBase64(file) }),
    })
    const payload = await response.json()
    if (!response.ok || !payload.scene) throw new Error(payload.error || ('HTTP ' + response.status))
    return payload.scene
  }
  return parseDxfToScene(await file.text(), file.name, 'dxf')
}

// ── shared components ───────────────────────────────────────────────────────

const styles = {
  wrap: { display: 'flex', gap: 12, height: '100%', minHeight: 0, padding: 12, boxSizing: 'border-box' },
  col: { flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0, minHeight: 0 },
  title: { margin: 0, fontSize: 14 },
  drop: {
    border: '2px dashed rgba(148,163,184,0.4)', borderRadius: 10, padding: 24,
    textAlign: 'center', fontSize: 13, opacity: 0.9, cursor: 'pointer',
  },
  btn: {
    padding: '6px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
    background: '#2563eb', color: '#fff', fontSize: 13,
  },
  info: { fontSize: 12, lineHeight: 1.7, padding: '8px 10px', borderRadius: 8, background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.2)' },
  label: { opacity: 0.6, marginRight: 6 },
  hint: { fontSize: 12, opacity: 0.55 },
  pre: { fontSize: 11, whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: 240, overflow: 'auto' },
  summary: { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', fontSize: 12, opacity: 0.9 },
  chip: {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '1px 8px', borderRadius: 999, border: '1px solid rgba(148,163,184,0.35)',
  },
  dot: (color) => ({ width: 8, height: 8, borderRadius: 4, background: color }),
}

function hex(color) {
  return '#' + (color >>> 0).toString(16).padStart(6, '0')
}

class PanelErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error) { console.error('[dsh-cad-scene] render error', error) }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, color: '#f87171', fontSize: 13 }}>
          dsh-cad-scene 渲染出错：{String(this.state.error && this.state.error.message || this.state.error)}
        </div>
      )
    }
    return this.props.children
  }
}

function InfoPanel({ scene, selection }) {
  if (!selection || !selection.item) {
    return <div style={styles.info}>点击场景中的实体，查看其图层与文本信息</div>
  }
  const { item, category } = selection
  const layers = Array.isArray(scene.layers) ? scene.layers : []
  const layer = layers.find((l) => l && l.name === item.layer)
  const texts = (Array.isArray(scene.entities) ? scene.entities : [])
    .filter((e) => e && (e.type === 'TEXT' || e.type === 'MTEXT') && e.layer === item.layer && e.text)
    .slice(0, 6)
  const anchor = item.position || item.center || (Array.isArray(item.vertices) && item.vertices[0]) || null
  return (
    <div style={styles.info}>
      <div>
        <span style={styles.label}>实体</span>
        <strong>{item.id}</strong>{' · '}{item.type}{category ? ` · ${CATEGORY_LABELS[category]}` : ''}
      </div>
      <div>
        <span style={styles.label}>图层</span>{item.layer}
        {layer ? <span style={{ marginLeft: 8, opacity: 0.8 }}>{layer.visible === false ? '隐藏' : '可见'}{layer.frozen ? ' · 冻结' : ''}</span> : null}
      </div>
      {item.block ? <div><span style={styles.label}>块引用</span>{item.block}</div> : null}
      {anchor ? <div><span style={styles.label}>位置</span>({Math.round(anchor.x * 100) / 100}, {Math.round(anchor.y * 100) / 100})</div> : null}
      {item.text ? <div><span style={styles.label}>文本</span>{item.text}</div> : null}
      {texts.length > 0 ? (
        <div>
          <span style={styles.label}>同层文本</span>
          {texts.map((t, i) => <div key={i} style={{ paddingLeft: 12 }}>{t.text}</div>)}
        </div>
      ) : null}
    </div>
  )
}

function CategorySummary({ scene }) {
  const meta = scene.meta || {}
  return (
    <div style={styles.summary}>
      <span>{meta.source || 'CAD scene'}</span>
      {meta.format ? <span style={{ opacity: 0.6 }}>{meta.format}</span> : null}
      {['racks', 'aisles', 'zones', 'agvs'].map((key) => (
        <span key={key} style={styles.chip}>
          <span style={styles.dot(hex(CATEGORY_COLORS[key]))} />
          {CATEGORY_LABELS[key]} {(scene[key] || []).length}
        </span>
      ))}
      {typeof meta.entityCount === 'number' ? <span style={{ opacity: 0.6 }}>实体 {meta.entityCount}</span> : null}
      {meta.truncated ? <span style={{ opacity: 0.6 }}>(已截断)</span> : null}
    </div>
  )
}

// ── dual-pane center panel ──────────────────────────────────────────────────

function CadSceneBuilderPanel() {
  const [fileState, setFileState] = useState(null)
  const fileRef = useRef(null)
  const inputRef = useRef(null)
  const [scene, setScene] = useState(null)
  const [busy, setBusy] = useState(false)
  const [selection, setSelection] = useState(null)

  const acceptFile = (file) => {
    if (!file) return
    fileRef.current = file
    setScene(null)
    setSelection(null)
    setFileState({ name: file.name, size: file.size, status: 'ready', error: null })
  }

  const runParse = async () => {
    const file = fileRef.current
    if (!file || busy) return
    setBusy(true)
    setFileState((s) => Object.assign({}, s, { status: 'parsing', error: null }))
    try {
      const result = await parseFile(file)
      setScene(result)
      setFileState((s) => Object.assign({}, s, { status: 'done' }))
    } catch (error) {
      setFileState((s) => Object.assign({}, s, { status: 'error', error: String(error && error.message || error) }))
    } finally {
      setBusy(false)
    }
  }

  const statusText = !fileState ? '尚未选择文件'
    : fileState.status === 'ready' ? '待解析'
    : fileState.status === 'parsing' ? '解析中…'
    : fileState.status === 'done' ? '解析完成'
    : '解析失败'

  return (
    <div style={styles.wrap}>
      <div style={styles.col}>
        <h3 style={styles.title}>CAD 文件导入区</h3>
        <div
          style={styles.drop}
          onClick={() => { if (inputRef.current) inputRef.current.click() }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            acceptFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0])
          }}
        >
          <div style={{ fontSize: 28 }}>📐</div>
          <div>点击选择或拖拽 CAD 文件到此处</div>
          <div style={styles.hint}>支持 .dwg / .dxf / .step（.dxf 浏览器内直接解析；.dwg 经 Host 转换；.step 暂不支持）</div>
          <input
            ref={inputRef}
            type="file"
            accept=".dwg,.dxf,.step,.stp"
            style={{ display: 'none' }}
            onChange={(e) => { acceptFile(e.target.files && e.target.files[0]); e.target.value = '' }}
          />
        </div>
        {fileState ? (
          <div style={styles.info}>
            <div><span style={styles.label}>文件</span>{fileState.name}</div>
            <div><span style={styles.label}>大小</span>{(fileState.size / 1024).toFixed(1)} KB</div>
            <div><span style={styles.label}>状态</span>{statusText}</div>
            {fileState.error ? <div style={{ color: '#f87171' }}>{fileState.error}</div> : null}
          </div>
        ) : null}
        <div>
          <button
            type="button"
            style={Object.assign({}, styles.btn, (!fileState || busy) ? { opacity: 0.5, cursor: 'not-allowed' } : {})}
            disabled={!fileState || busy}
            onClick={runParse}
          >
            {busy ? '解析中…' : '解析'}
          </button>
        </div>
        {scene ? (
          <div style={styles.info}>
            <div><span style={styles.label}>货架</span>{(scene.racks || []).length}</div>
            <div><span style={styles.label}>通道</span>{(scene.aisles || []).length}</div>
            <div><span style={styles.label}>区域</span>{(scene.zones || []).length}</div>
            <div><span style={styles.label}>AGV</span>{(scene.agvs || []).length}</div>
            {scene.meta && Array.isArray(scene.meta.blocks) ? (
              <div><span style={styles.label}>块定义</span>{scene.meta.blocks.map((b) => b.name).join('、') || '无'}</div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div style={styles.col}>
        <h3 style={styles.title}>Three.js 3D 场景显示区</h3>
        {scene
          ? <SceneCanvas scene={scene} selectedId={selection && selection.item ? selection.item.id : null} onSelect={setSelection} />
          : <div style={Object.assign({}, styles.drop, { cursor: 'default', flex: 1 })}>解析后在此显示 3D 场景（左键旋转、滚轮缩放、右键平移，点击实体查看详情）</div>}
        {scene ? <InfoPanel scene={scene} selection={selection} /> : null}
      </div>
    </div>
  )
}

function PanelWithBoundary(props) {
  return <PanelErrorBoundary><CadSceneBuilderPanel {...props} /></PanelErrorBoundary>
}

// ── parse_cad_to_scene tool card ────────────────────────────────────────────

function firstText(block) {
  const content = (block && block.content) || []
  for (const part of content) {
    if (part && part.type === 'text' && typeof part.text === 'string') return part.text
  }
  return ''
}

function extractScene(block) {
  if (!block || block.kind !== 'tool-result' || block.isError) return null
  for (const part of block.content || []) {
    if (!part || part.type !== 'text' || typeof part.text !== 'string') continue
    try {
      const value = JSON.parse(part.text)
      if (value && Array.isArray(value.racks) && Array.isArray(value.aisles) && Array.isArray(value.zones)) {
        return value
      }
    } catch {
      // not scene JSON
    }
  }
  return null
}

function SceneToolCard(props) {
  const block = props && props.block
  const scene = useMemo(() => extractScene(block), [block])
  const [selection, setSelection] = useState(null)

  if (!block || block.kind !== 'tool-result') {
    return <div style={styles.info}>正在解析 CAD 图纸…</div>
  }
  if (block.isError) {
    return <div style={styles.info}>解析失败：{firstText(block)}</div>
  }
  if (!scene) {
    return <pre style={styles.pre}>{firstText(block)}</pre>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '4px 0' }}>
      <CategorySummary scene={scene} />
      <div style={{ height: 380, display: 'flex' }}>
        <SceneCanvas scene={scene} selectedId={selection && selection.item ? selection.item.id : null} onSelect={setSelection} />
      </div>
      <InfoPanel scene={scene} selection={selection} />
    </div>
  )
}

function ToolCardWithBoundary(props) {
  return <PanelErrorBoundary><SceneToolCard {...props} /></PanelErrorBoundary>
}

// ── sidebar panel glyph ─────────────────────────────────────────────────────

// The panellist row is shell chrome (button + label + selection state); this
// slot's component is only the glyph cell, receiving { size, active } from the
// row. Row clicks select the main panel via the shell's own selectPanel.
function Glyph(props) {
  const size = props && typeof props.size === 'number' ? props.size : 18
  return <span style={{ fontSize: size, lineHeight: 1 }}>📐</span>
}

// ── plugin entry ────────────────────────────────────────────────────────────

function apply(ctx) {
  // Row directly under the sidebar's New Session button; its id doubles as the
  // main-panel key the shell dispatches on row click (selectPanel mechanics).
  ctx.slots.inject('sidebar.panellist', () => ctx.slots.register(
    { name: 'sidebar.panellist', id: 'cad-scene-builder', label: '3d解析', order: 100 },
    Glyph,
  ))
  ctx.slots.inject('main', () => ctx.slots.register(
    { name: 'main', key: 'cad-scene-builder' },
    PanelWithBoundary,
  ))
  ctx.slots.inject('tool.call.toolview', () => ctx.slots.register(
    { name: 'tool.call.toolview', key: 'parse_cad_to_scene' },
    ToolCardWithBoundary,
  ))
}

export { apply, inject }
