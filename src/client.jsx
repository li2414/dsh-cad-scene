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
const EMPTY_SCENE = { racks: [], aisles: [], zones: [], agvs: [], entities: [], layers: [] }

// ── three.js builders (DXF plan (x, y) maps to ground (x, 0, -y)) ───────────

const LAYER_PALETTE = [0x60a5fa, 0xf97316, 0x34d399, 0xf472b6, 0xa78bfa, 0xfacc15, 0x22d3ee, 0xfb7185, 0x4ade80, 0x818cf8, 0xfda4af, 0x38bdf8, 0xfdba74, 0xc084fc, 0x86efac, 0xfca5a5]

/** Stable identity color per layer name (when the drawing ships no color). */
function layerPaletteColor(name) {
  const s = String(name || '0')
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return LAYER_PALETTE[h % LAYER_PALETTE.length]
}

// Semantic heights for 2.5D curtains (flat drawings carry no Z): guessing the
// representative height of each layer's equipment family.
const HEIGHT_RULES = [
  [/crane|elevat|lift|hoist|stacker|货架|堆垛|提升/, 11],
  [/platform|conveyor|belt|roller|输送|转台/, 1.5],
  [/shuttle|vehicle|agv|amr|rgv|trolley|小车|叉车|穿梭/, 0.8],
  [/rack|shelf|shelv|pallet|托盘/, 6],
]

function layerHeight(name) {
  const l = String(name || '').toLowerCase()
  for (const rule of HEIGHT_RULES) {
    if (rule[0].test(l)) return rule[1]
  }
  return 1
}

// Layer identity wins: the drawing's own layer color, else a stable per-layer
// palette color. Category colors are only a last resort.
function layerColor(scene, layerName, fallback) {
  const layers = Array.isArray(scene.layers) ? scene.layers : []
  const layer = layers.find((l) => l && l.name === layerName)
  if (layer && typeof layer.color === 'number' && layer.color > 0) return layer.color
  return layerPaletteColor(layerName)
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
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color }))
  mesh.position.y = (vertices[0] && vertices[0].z) || 0
  return mesh
}

function flatPolygon(vertices, color) {
  const geometry = new THREE.ShapeGeometry(shapeFrom(vertices))
  geometry.rotateX(-Math.PI / 2)
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, side: THREE.DoubleSide }),
  )
  mesh.position.y = ((vertices[0] && vertices[0].z) || 0) + 0.05
  return mesh
}

function polylineObject(vertices, color, closed) {
  const points = vertices.map((v) => new THREE.Vector3(v.x, (v.z || 0) + 0.12, -v.y))
  if (closed && points.length > 2) points.push(points[0].clone())
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color }),
  )
}

function arcObject(center, radius, startAngle, endAngle, color) {
  // y -> -z mirrors the plan, so the radian range is negated and swapped.
  const curve = new THREE.EllipseCurve(center.x, center.y, radius, radius, -endAngle, -startAngle, false)
  const points = curve.getPoints(48).map((p) => new THREE.Vector3(p.x, (center.z || 0) + 0.12, -p.y))
  return new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color }),
  )
}

function buildItemObject(item, category, scene) {
  const color = layerColor(scene, item.layer, CATEGORY_COLORS[category] || 0x94a3b8)
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
      mesh.position.set(p.x, hgt / 2 + (p.z || 0), -p.y)
      return mesh
    }
    case 'CIRCLE': {
      const c = item.center || { x: 0, y: 0 }
      if (category === 'zones') return arcObject(c, item.radius || 1, 0, Math.PI * 2, color)
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(item.radius || 1, item.radius || 1, RACK_HEIGHT, 24),
        new THREE.MeshStandardMaterial({ color }),
      )
      mesh.position.set(c.x, RACK_HEIGHT / 2 + (c.z || 0), -c.y)
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

function SceneCanvas({ scene, selectedId, onSelect, hiddenCats, hiddenLayers }) {
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
    // gentle auto-orbit to reveal the 2.5D depth; stops at first interaction
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.8

    scene3.add(new THREE.AmbientLight(0xffffff, 0.55))
    scene3.add(new THREE.HemisphereLight(0xbfd4ff, 0x0b1220, 0.5))

    const group = new THREE.Group()
    const pickables = []
    const cats = hiddenCats || {}
    const layersOff = hiddenLayers || {}
    const segGroups = {}
    const bucketHandles = new Set()
    const pushSeg = (cat, layer, a, b) => {
      const key = String(cat) + '|' + String(layer)
      if (!segGroups[key]) segGroups[key] = { cat, layer, pts: [] }
      segGroups[key].pts.push(a, b)
    }
    const chainSegs = (cat, layer, item) => {
      const pts = item.vertices || []
      for (let i = 0; i + 1 < pts.length; i++) pushSeg(cat, layer, pts[i], pts[i + 1])
      if (item.closed && pts.length > 2) pushSeg(cat, layer, pts[pts.length - 1], pts[0])
    }
    for (const category of ['racks', 'aisles', 'zones', 'agvs']) {
      if (cats[category]) continue
      for (const item of scene[category] || []) {
        if (layersOff[item.layer]) continue
        if (item.handle != null) bucketHandles.add(item.handle)
        if (item.type === 'LINE' || item.type === 'LWPOLYLINE' || item.type === 'POLYLINE') {
          chainSegs(category, item.layer, item)
          continue
        }
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
    // uncategorized entities still draw as flat floor-plan geometry in layer
    // color — classification only colors/groups; it never hides the drawing.
    let synth = 0
    for (const e of scene.entities || []) {
      if (e.handle != null && bucketHandles.has(e.handle)) continue
      if (layersOff[e.layer]) continue
      if (e.type === 'TEXT' || e.type === 'MTEXT') continue
      if (e.type === 'LINE' || e.type === 'LWPOLYLINE' || e.type === 'POLYLINE') {
        chainSegs(null, e.layer, e)
        continue
      }
      const item = Object.assign({ id: 'ent-' + (++synth) }, e)
      const object = buildItemObject(item, null, scene)
      if (!object) continue
      object.traverse((child) => {
        child.userData.item = item
        child.userData.category = null
      })
      group.add(object)
      pickables.push(object)
    }
    // mass line segments render as 2.5D vertical curtain walls per
    // category+layer (semantic height + dark-to-bright gradient) — flat
    // drawings carry no Z, so depth comes from the equipment-family height.
    for (const key of Object.keys(segGroups)) {
      const g = segGroups[key]
      const h = layerHeight(g.layer)
      const base = new THREE.Color(layerColor(scene, g.layer, g.cat ? CATEGORY_COLORS[g.cat] : 0x94a3b8))
      const dark = base.clone().multiplyScalar(0.22)
      const pos = []
      const col = []
      for (let i = 0; i + 1 < g.pts.length; i += 2) {
        const a = g.pts[i]
        const b = g.pts[i + 1]
        const y0a = (a.z || 0)
        const y0b = (b.z || 0)
        const a0 = [a.x, y0a, -a.y]
        const b0 = [b.x, y0b, -b.y]
        const a1 = [a.x, y0a + h, -a.y]
        const b1 = [b.x, y0b + h, -b.y]
        pos.push(...a0, ...b0, ...b1, ...a0, ...b1, ...a1)
        col.push(
          dark.r, dark.g, dark.b, dark.r, dark.g, dark.b, base.r, base.g, base.b,
          dark.r, dark.g, dark.b, base.r, base.g, base.b, base.r, base.g, base.b,
        )
      }
      const geom = new THREE.BufferGeometry()
      geom.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
      geom.setAttribute('color', new THREE.Float32BufferAttribute(col, 3))
      group.add(new THREE.Mesh(geom, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide })))
    }
    scene3.add(group)
    pickablesRef.current = pickables

    // Default environment — ground plane + grid + a visible sun — sized to the
    // content (or a small playground before anything is parsed), so the scene
    // always has a horizon to orbit against.
    const bounds = new THREE.Box3().setFromObject(group)
    const empty = bounds.isEmpty()
    const center = empty ? new THREE.Vector3(0, 0, 0) : bounds.getCenter(new THREE.Vector3())
    const size = empty ? new THREE.Vector3(40, 0, 40) : bounds.getSize(new THREE.Vector3())
    const radius = Math.max(size.x, size.z, size.y, 40)
    scene3.fog = new THREE.Fog(0x0f172a, radius * 1.5, radius * 5)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(radius * 3, radius * 3),
      new THREE.MeshStandardMaterial({ color: 0x141c2b, roughness: 1 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.set(center.x, -0.02, center.z)
    scene3.add(ground)

    const grid = new THREE.GridHelper(radius * 3, 30, 0x334155, 0x1e293b)
    grid.position.set(center.x, 0, center.z)
    scene3.add(grid)

    // Visible sun: glowing orb in the sky; the key light comes from its place.
    const sunPos = new THREE.Vector3(center.x + radius * 0.8, radius * 1.5, center.z - radius * 0.6)
    const sunOrb = new THREE.Mesh(
      new THREE.SphereGeometry(Math.max(radius * 0.06, 1.5), 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xffe6a3 }),
    )
    sunOrb.position.copy(sunPos)
    scene3.add(sunOrb)

    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = 64
    glowCanvas.height = 64
    const g2d = glowCanvas.getContext('2d')
    const gradient = g2d.createRadialGradient(32, 32, 4, 32, 32, 32)
    gradient.addColorStop(0, 'rgba(255,236,179,0.95)')
    gradient.addColorStop(0.4, 'rgba(255,220,150,0.35)')
    gradient.addColorStop(1, 'rgba(255,220,150,0)')
    g2d.fillStyle = gradient
    g2d.fillRect(0, 0, 64, 64)
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(glowCanvas), transparent: true, depthWrite: false }))
    glow.scale.setScalar(Math.max(radius * 0.5, 8))
    glow.position.copy(sunPos)
    scene3.add(glow)

    const keyLight = new THREE.DirectionalLight(0xfff2d8, 1.2)
    keyLight.position.copy(sunPos)
    keyLight.target.position.copy(center)
    scene3.add(keyLight)
    scene3.add(keyLight.target)

    camera.position.set(center.x + radius * 1.0, radius * 0.55, center.z + radius * 1.0)
    controls.target.copy(center)
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
    const stopAuto = () => {
      controls.autoRotate = false
      renderer.domElement.removeEventListener('pointerdown', stopAuto)
    }
    renderer.domElement.addEventListener('pointerdown', stopAuto)
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
          const mats = Array.isArray(object.material) ? object.material : [object.material]
          for (const m of mats) {
            if (m.map) m.map.dispose()
            m.dispose()
          }
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
      pickablesRef.current = []
    }
  }, [scene, hiddenCats, hiddenLayers])

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

function runWorkerParse(name, content, format, onPhase) {
  return new Promise((resolve, reject) => {
    const phase = typeof onPhase === 'function' ? onPhase : () => {}
    if (typeof Worker === 'undefined' || typeof __CAD_WORKER_SOURCE__ !== 'string') {
      phase('解析中 · 主线程回退')
      try {
        resolve(parseDxfToScene(content, name, format))
      } catch (error) {
        reject(error)
      }
      return
    }
    let url = ''
    let worker = null
    try {
      url = URL.createObjectURL(new Blob([__CAD_WORKER_SOURCE__], { type: 'text/javascript' }))
      worker = new Worker(url)
    } catch (error) {
      try {
        resolve(parseDxfToScene(content, name, format))
      } catch (error2) {
        reject(error2)
      }
      return
    }
    const cleanup = () => {
      worker.terminate()
      URL.revokeObjectURL(url)
    }
    worker.onmessage = (event) => {
      const msg = event.data || {}
      if (msg.phase) {
        phase(msg.phase)
        return
      }
      cleanup()
      if (msg.error) reject(new Error(msg.error))
      else resolve(msg.scene)
    }
    worker.onerror = () => {
      cleanup()
      try {
        resolve(parseDxfToScene(content, name, format))
      } catch (error) {
        reject(error)
      }
    }
    worker.postMessage({ name, content, format })
  })
}

async function parseFile(file, onPhase) {
  const phase = typeof onPhase === 'function' ? onPhase : () => {}
  if (/\.(dwg|step|stp)$/i.test(file.name)) {
    phase('上传中 · Host 转换解析')
    const response = await fetch('/api/cad-scene-builder/parse', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: file.name, content: await fileToBase64(file) }),
    })
    const raw = await response.text()
    let payload = null
    try {
      payload = JSON.parse(raw)
    } catch (e) {
      throw new Error('解析服务返回了非 JSON 响应 (HTTP ' + response.status + ')：' + String(raw).slice(0, 100) + '（路由未生效时请重启 dsh web）')
    }
    if (!response.ok || !payload || !payload.scene) {
      throw new Error((payload && payload.error) || ('解析服务错误 (HTTP ' + response.status + ')'))
    }
    return { scene: payload.scene, download: payload.download || null }
  }
  const text = await file.text()
  const scene = await runWorkerParse(file.name, text, 'dxf', phase)
  return { scene, download: null }
}

// ── shared components ───────────────────────────────────────────────────────

const styles = {
  wrap: { display: 'flex', gap: 12, height: '100%', minHeight: 0, padding: 12, boxSizing: 'border-box' },
  col: { flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0, minHeight: 0 },
  colLeft: {
    flex: '0 0 33%', maxWidth: '33%', display: 'flex', flexDirection: 'column',
    gap: 10, minWidth: 0, minHeight: 0, overflowY: 'auto', paddingRight: 2,
  },
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

// ── import portal styles (keyframes; injected once per page) ────────────────

const IMPORT_CSS = `
.cad-im-portal{position:relative;border:1.5px dashed rgba(56,189,248,.45);border-radius:16px;padding:30px 16px 24px;text-align:center;cursor:pointer;overflow:hidden;isolation:isolate;background:rgba(8,16,34,.55);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.cad-im-portal:hover{transform:translateY(-2px);border-color:rgba(56,189,248,.85);box-shadow:0 10px 30px rgba(56,189,248,.16),inset 0 0 24px rgba(56,189,248,.06)}
.cad-im-portal[data-state='drag']{transform:translateY(-3px) scale(1.012);border-color:transparent;box-shadow:0 0 0 2px rgba(56,189,248,.65),0 14px 40px rgba(56,189,248,.3),inset 0 0 32px rgba(56,189,248,.12)}
.cad-im-portal[data-state='parsing']{border-color:rgba(125,211,252,.8)}
.cad-im-portal[data-state='done']{border-color:rgba(52,211,153,.7)}
.cad-im-portal[data-state='error']{border-color:rgba(248,113,113,.8);animation:cad-im-shake .4s ease}
.cad-im-grid{position:absolute;left:-40%;right:-40%;top:-30%;bottom:-30%;z-index:-2;background-image:linear-gradient(rgba(96,165,250,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.16) 1px,transparent 1px);background-size:24px 24px;transform:perspective(420px) rotateX(56deg);transform-origin:center 88%;opacity:.45;animation:cad-im-pan 7s linear infinite;transition:opacity .3s}
.cad-im-portal[data-state='drag'] .cad-im-grid,.cad-im-portal[data-state='parsing'] .cad-im-grid{opacity:.85}
@keyframes cad-im-pan{to{background-position:0 48px}}
.cad-im-corner{position:absolute;width:18px;height:18px;border:2px solid rgba(56,189,248,.85);transition:all .25s ease;animation:cad-im-blink 3.4s ease-in-out infinite}
.cad-im-corner.tl{top:8px;left:8px;border-right:none;border-bottom:none;border-radius:6px 0 0 0}
.cad-im-corner.tr{top:8px;right:8px;border-left:none;border-bottom:none;border-radius:0 6px 0 0;animation-delay:.4s}
.cad-im-corner.bl{bottom:8px;left:8px;border-right:none;border-top:none;border-radius:0 0 0 6px;animation-delay:.8s}
.cad-im-corner.br{bottom:8px;right:8px;border-left:none;border-top:none;border-radius:0 0 6px 0;animation-delay:1.2s}
.cad-im-portal[data-state='drag'] .cad-im-corner{width:28px;height:28px;border-color:#7dd3fc;box-shadow:0 0 8px rgba(56,189,248,.8)}
@keyframes cad-im-blink{0%,100%{opacity:.35}50%{opacity:1}}
.cad-im-stage{position:relative;height:84px;margin-bottom:10px}
.cad-im-icon{width:72px;height:72px;animation:cad-im-float 3.2s ease-in-out infinite;transition:transform .25s;filter:drop-shadow(0 6px 14px rgba(56,189,248,.35))}
.cad-im-portal[data-state='drag'] .cad-im-icon{transform:scale(1.14);animation-duration:1s}
@keyframes cad-im-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.cad-im-check{position:absolute;right:calc(50% - 64px);bottom:2px;width:34px;height:34px}
.cad-im-check circle{fill:rgba(16,185,129,.2);stroke:#34d399;stroke-width:2.5}
.cad-im-check path{stroke:#34d399;stroke-width:3.5;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:34;stroke-dashoffset:34;animation:cad-im-draw .5s .15s ease forwards}
@keyframes cad-im-draw{to{stroke-dashoffset:0}}
.cad-im-scan{position:absolute;left:6px;right:6px;height:34px;top:-40px;opacity:0;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(56,189,248,.28) 35%,rgba(125,211,252,.95) 50%,rgba(56,189,248,.28) 65%,transparent);border-radius:8px}
.cad-im-portal[data-state='drag'] .cad-im-scan,.cad-im-portal[data-state='parsing'] .cad-im-scan{opacity:1;animation:cad-im-scan 1.15s linear infinite}
@keyframes cad-im-scan{0%{top:-40px}100%{top:100%}}
.cad-im-cross{position:absolute;width:10px;height:10px;pointer-events:none;animation:cad-im-twinkle 2.8s ease-in-out infinite}
.cad-im-cross::before,.cad-im-cross::after{content:'';position:absolute;background:rgba(125,211,252,.8)}
.cad-im-cross::before{left:4px;top:0;width:2px;height:10px}
.cad-im-cross::after{top:4px;left:0;height:2px;width:10px}
@keyframes cad-im-twinkle{0%,100%{opacity:.12;transform:scale(.8)}50%{opacity:.9;transform:scale(1.1)}}
.cad-im-title{font-size:14px;font-weight:600;letter-spacing:.02em}
.cad-im-sub{font-size:12px;opacity:.75;margin-top:4px;transition:color .2s}
.cad-im-portal[data-state='drag'] .cad-im-sub{color:#7dd3fc;opacity:1;animation:cad-im-pulse 1s ease-in-out infinite}
@keyframes cad-im-pulse{50%{opacity:.45}}
.cad-im-chip{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:3px 12px;border-radius:999px;background:rgba(56,189,248,.12);border:1px solid rgba(56,189,248,.35);font-family:ui-monospace,Consolas,monospace;font-size:12px;animation:cad-im-rise .3s ease}
@keyframes cad-im-rise{from{opacity:0;transform:translateY(6px)}}
.cad-im-btn{position:relative;overflow:hidden;padding:8px 26px;border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;background:linear-gradient(135deg,#2563eb,#06b6d4);box-shadow:0 6px 18px rgba(37,99,235,.35);transition:transform .2s,box-shadow .2s,opacity .2s}
.cad-im-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 10px 24px rgba(37,99,235,.45)}
.cad-im-btn:disabled{opacity:.45;cursor:not-allowed;box-shadow:none}
.cad-im-btn::after{content:'';position:absolute;top:0;bottom:0;width:48px;left:-70px;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-18deg)}
.cad-im-btn:hover:not(:disabled)::after{animation:cad-im-shine .8s ease}
.cad-im-btn[data-busy='true']::after{animation:cad-im-shine 1s linear infinite}
@keyframes cad-im-shine{to{left:120%}}
@keyframes cad-im-shake{20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}
.cad-p-card{border:1px solid rgba(148,163,184,.22);border-radius:12px;background:rgba(148,163,184,.06);padding:10px 12px;font-size:12px}
.cad-p-card h4{margin:0 0 8px;font-size:12px;letter-spacing:.04em;opacity:.85;display:flex;align-items:center;gap:6px}
.cad-p-legend{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.cad-p-leg{display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:8px;border:1px solid rgba(148,163,184,.18);background:rgba(8,16,34,.35);cursor:pointer;transition:all .18s;user-select:none}
.cad-p-leg:hover{border-color:rgba(56,189,248,.5)}
.cad-p-leg[data-off='true']{opacity:.38;filter:grayscale(.7)}
.cad-p-dot{width:10px;height:10px;border-radius:3px;flex:none}
.cad-p-leg b{font-weight:600}
.cad-p-leg .cnt{margin-left:auto;opacity:.7;font-family:ui-monospace,Consolas,monospace}
.cad-p-layers{max-height:184px;overflow-y:auto;display:flex;flex-direction:column;gap:2px}
.cad-p-layer{display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:6px;cursor:pointer;transition:background .15s}
.cad-p-layer:hover{background:rgba(56,189,248,.1)}
.cad-p-layer[data-off='true']{opacity:.4}
.cad-p-layer .nm{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,Consolas,monospace;font-size:11px}
.cad-p-layer .cnt{opacity:.6;font-family:ui-monospace,Consolas,monospace}
.cad-p-badge{font-size:10px;padding:0 6px;border-radius:999px;border:1px solid rgba(148,163,184,.35);opacity:.75;flex:none}
.cad-p-bar{display:flex;height:8px;border-radius:4px;overflow:hidden;margin:6px 0 8px}
.cad-p-bar span{height:100%}
.cad-p-types{display:flex;flex-wrap:wrap;gap:4px}
.cad-p-type{padding:1px 7px;border-radius:6px;background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.2);font-family:ui-monospace,Consolas,monospace;font-size:10.5px}
.cad-p-row{display:flex;justify-content:space-between;gap:8px;padding:2px 0}
.cad-p-row .k{opacity:.6}
.cad-p-log-toggle{display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none}
.cad-p-log-toggle .chev{transition:transform .2s;display:inline-block}
.cad-p-log[data-open='true'] .cad-p-log-toggle .chev{transform:rotate(90deg)}
.cad-p-logline{display:flex;gap:6px;padding:2px 0;line-height:1.5}
.cad-p-warn{color:#fbbf24}
.cad-p-err{color:#f87171}
.cad-v-toggle{display:flex;padding:3px;border-radius:10px;background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.22);gap:2px;flex:none}
.cad-v-btn{padding:4px 14px;border:none;border-radius:8px;background:transparent;color:inherit;font-size:12px;cursor:pointer;transition:all .2s}
.cad-v-btn[data-on='true']{background:linear-gradient(135deg,#2563eb,#06b6d4);color:#fff;box-shadow:0 2px 8px rgba(37,99,235,.4);font-weight:600}
.cad-v-btn:hover:not([data-on='true']){background:rgba(148,163,184,.15)}
.cad-p-gm{padding-left:22px}
.cad-p-edit{display:flex;gap:4px;padding:2px 0 6px 22px}
.cad-p-edit input{flex:1;min-width:0;padding:3px 8px;border-radius:6px;border:1px solid rgba(56,189,248,.4);background:rgba(8,16,34,.6);color:inherit;font-size:11px}
.cad-p-mini{flex:none;width:22px;height:22px;border-radius:6px;border:1px solid rgba(148,163,184,.3);background:transparent;color:inherit;cursor:pointer;font-size:11px;line-height:1;opacity:.7}
.cad-p-mini:hover{opacity:1;border-color:rgba(56,189,248,.6)}
.cad-im-dl{background:linear-gradient(135deg,#059669,#10b981);box-shadow:0 6px 18px rgba(16,185,129,.3);animation:cad-im-rise .3s ease}
.cad-im-dl:hover:not(:disabled){box-shadow:0 10px 24px rgba(16,185,129,.45)}
`

function ensureImportStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById('dsh-cad-scene-import-styles')) return
  const style = document.createElement('style')
  style.id = 'dsh-cad-scene-import-styles'
  style.textContent = IMPORT_CSS
  document.head.appendChild(style)
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
          {CATEGORY_LABELS[key]} {((scene[key] || []).length) || (meta.summary && meta.summary.classified ? meta.summary.classified[key] : 0)}
        </span>
      ))}
      {typeof meta.entityCount === 'number' ? <span style={{ opacity: 0.6 }}>实体 {meta.entityCount}</span> : null}
      {meta.truncated ? <span style={{ opacity: 0.6 }}>(已截断)</span> : null}
    </div>
  )
}

// ── dual-pane center panel ──────────────────────────────────────────────────

// ── left workbench cards ────────────────────────────────────────────────────

function loadGroupMap(fileKey) {
  try {
    const raw = localStorage.getItem('dsh-cad-scene:groups')
    const all = raw ? JSON.parse(raw) : {}
    return all[fileKey] && typeof all[fileKey] === 'object' ? all[fileKey] : {}
  } catch (e) { return {} }
}

function saveGroupMap(fileKey, map) {
  try {
    const raw = localStorage.getItem('dsh-cad-scene:groups')
    const all = raw ? JSON.parse(raw) : {}
    all[fileKey] = map
    localStorage.setItem('dsh-cad-scene:groups', JSON.stringify(all))
  } catch (e) { /* storage unavailable */ }
}

// Legend generated from the parsed content: one entry per layer the drawing
// actually uses, keeping the ORIGINAL names — no fixed category list. Layers
// can be merged into named groups via the ✎ editor (persisted per drawing).
function GeneratedLegend({ scene, hiddenLayers, onToggleLayer }) {
  const fileKey = String((scene.meta && scene.meta.source) || '') + '|' + ((scene.entities || []).length)
  const [groupMap, setGroupMap] = useState(() => loadGroupMap(fileKey))
  const [editing, setEditing] = useState(null)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    setGroupMap(loadGroupMap(fileKey))
    setEditing(null)
    setDraft('')
  }, [fileKey])

  const assign = (layerName, groupName) => {
    const next = Object.assign({}, groupMap)
    const g = String(groupName || '').trim()
    if (g === '' || g === layerName) delete next[layerName]
    else next[layerName] = g
    setGroupMap(next)
    saveGroupMap(fileKey, next)
    setEditing(null)
    setDraft('')
  }

  const counts = {}
  for (const e of scene.entities || []) counts[e.layer] = (counts[e.layer] || 0) + 1
  const table = {}
  for (const l of scene.layers || []) table[l.name] = l
  const layerNames = Object.keys(counts)
  for (const l of scene.layers || []) if (counts[l.name] === undefined) layerNames.push(l.name)

  const groups = {}
  for (const name of layerNames) {
    const gname = groupMap[name] || name
    if (!groups[gname]) groups[gname] = { name: gname, layers: [], count: 0, color: hex(layerColor(scene, name)) }
    groups[gname].layers.push(name)
    groups[gname].count += counts[name] || 0
  }
  const ordered = Object.keys(groups).map((k) => groups[k]).sort((a, b) => b.count - a.count)
  const existingGroups = Object.keys(groups).sort()

  const toggleGroup = (g) => {
    const anyVisible = g.layers.some((n) => !hiddenLayers[n])
    for (const n of g.layers) {
      if (anyVisible !== !!hiddenLayers[n]) onToggleLayer(n)
    }
  }

  const renderEditor = (name) => (
    <div className="cad-p-edit" onClick={(e) => e.stopPropagation()}>
      <input
        list="cad-p-group-options"
        value={draft}
        placeholder="合并到组名（留空=独立）"
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') assign(name, draft) }}
        autoFocus
      />
      <datalist id="cad-p-group-options">
        {existingGroups.map((g) => <option key={g} value={g} />)}
      </datalist>
      <button type="button" className="cad-p-mini" onClick={() => assign(name, draft)}>✓</button>
      <button type="button" className="cad-p-mini" onClick={() => setEditing(null)}>✕</button>
    </div>
  )

  const renderLayerRow = (name, indent) => {
    const l = table[name]
    return (
      <div key={name}>
        <div
          className={indent ? 'cad-p-layer cad-p-gm' : 'cad-p-layer'}
          data-off={hiddenLayers[name] ? 'true' : 'false'}
          onClick={() => onToggleLayer(name)}
        >
          <span className="cad-p-dot" style={{ background: hex(layerColor(scene, name)) }} />
          <span className="nm">{name}</span>
          {l && l.visible === false ? <span className="cad-p-badge">隐藏</span> : null}
          {l && l.frozen ? <span className="cad-p-badge">冻结</span> : null}
          <span className="cnt">{counts[name] || 0}</span>
          <button
            type="button"
            className="cad-p-mini"
            onClick={(e) => {
              e.stopPropagation()
              setDraft(groupMap[name] && groupMap[name] !== name ? groupMap[name] : '')
              setEditing(editing === name ? null : name)
            }}
          >✎</button>
        </div>
        {editing === name ? renderEditor(name) : null}
      </div>
    )
  }

  return (
    <div className="cad-p-card">
      <h4>图例 · 按解析内容生成（{ordered.length} 组 · ✎ 可合并/命名）</h4>
      <div className="cad-p-layers" style={{ maxHeight: 300 }}>
        {ordered.map((g) => {
          if (g.layers.length === 1) return renderLayerRow(g.layers[0], false)
          const allHidden = g.layers.every((n) => !!hiddenLayers[n])
          return (
            <div key={g.name}>
              <div className="cad-p-layer" data-off={allHidden ? 'true' : 'false'} onClick={() => toggleGroup(g)}>
                <span className="cad-p-dot" style={{ background: g.color }} />
                <span className="nm"><b>{g.name}</b></span>
                <span className="cnt">{g.count}</span>
              </div>
              {g.layers.map((name) => renderLayerRow(name, true))}
            </div>
          )
        })}
        {ordered.length === 0 ? <div style={{ opacity: 0.6 }}>无图层内容</div> : null}
      </div>
    </div>
  )
}

const TYPE_PALETTE = ['#60a5fa', '#f97316', '#34d399', '#f472b6', '#a78bfa', '#facc15', '#22d3ee', '#fb7185', '#94a3b8']

function StatsCard({ scene }) {
  const meta = scene.meta || {}
  const counts = {}
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  const eat = (p) => {
    if (!p) return
    minX = Math.min(minX, p.x); minY = Math.min(minY, p.y)
    maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y)
  }
  for (const e of scene.entities || []) {
    counts[e.type] = (counts[e.type] || 0) + 1
    eat(e.position); eat(e.center)
    for (const v of e.vertices || []) eat(v)
    for (const p of (e.controlPoints || []).concat(e.fitPoints || [], e.points || [])) eat(p)
  }
  const span = minX < Infinity ? { w: maxX - minX, h: maxY - minY } : null
  const types = Object.entries(counts).sort((a, b) => b[1] - a[1])
  const total = types.reduce((s, t) => s + t[1], 0) || 1
  return (
    <div className="cad-p-card">
      <h4>图纸统计</h4>
      <div className="cad-p-row">
        <span className="k">实体总数</span>
        <b>{meta.entityCount !== undefined ? meta.entityCount : (scene.entities || []).length}</b>
      </div>
      {meta.truncated ? <div className="cad-p-logline cad-p-warn">⚠ 实体超上限已截断</div> : null}
      <div className="cad-p-bar">
        {types.map((t, i) => (
          <span key={t[0]} style={{ width: (t[1] / total * 100) + '%', background: TYPE_PALETTE[i % TYPE_PALETTE.length] }} />
        ))}
      </div>
      <div className="cad-p-types">
        {types.map((t, i) => (
          <span key={t[0]} className="cad-p-type"><i style={{ color: TYPE_PALETTE[i % TYPE_PALETTE.length], fontStyle: 'normal' }}>■</i> {t[0]}×{t[1]}</span>
        ))}
      </div>
      {span ? (
        <div className="cad-p-row" style={{ marginTop: 6 }}>
          <span className="k">图幅范围</span>
          <b>{Math.round(span.w * 10) / 10} × {Math.round(span.h * 10) / 10}</b>
        </div>
      ) : null}
      <div className="cad-p-row"><span className="k">块定义</span><b>{(meta.blocks || []).length}</b></div>
    </div>
  )
}

const RENDERABLE_TYPES = new Set(['INSERT', 'LINE', 'LWPOLYLINE', 'POLYLINE', 'ARC', 'CIRCLE', 'TEXT', 'MTEXT', 'POINT'])

function ParseLog({ scene }) {
  const [open, setOpen] = useState(false)
  const meta = scene.meta || {}
  const counts = {}
  for (const e of scene.entities || []) {
    if (!RENDERABLE_TYPES.has(e.type)) counts[e.type] = (counts[e.type] || 0) + 1
  }
  const lines = []
  const fmt = String(meta.format || 'dxf')
  lines.push({ kind: 'info', text: '解析格式: ' + fmt + (fmt.indexOf('dwg') === 0 ? '（经外部转换器）' : '（浏览器内解析）') })
  if (meta.truncated) lines.push({ kind: 'warn', text: '实体超上限已截断，仅保留前 ' + (scene.entities || []).length + ' 个' })
  if (meta.unclassified > 0) {
    lines.push({ kind: 'warn', text: '未分类实体 ' + meta.unclassified + ' 个（未匹配分类词表，已按图层色绘制）' })
  }
  const unrendered = Object.entries(counts)
  if (unrendered.length > 0) {
    lines.push({ kind: 'warn', text: '两侧视图均未绘制: ' + unrendered.map((e) => e[0] + '×' + e[1]).join('、') })
  }
  lines.push({ kind: 'info', text: '图层 ' + ((scene.layers || []).length) + ' 个 · 块定义 ' + ((meta.blocks || []).length) + ' 个' })
  if (meta.source) lines.push({ kind: 'info', text: meta.source })
  const warns = lines.filter((l) => l.kind === 'warn').length
  return (
    <div className="cad-p-card cad-p-log" data-open={open ? 'true' : 'false'}>
      <div className="cad-p-log-toggle" onClick={() => setOpen(!open)}>
        <span className="chev">▶</span>
        <h4 style={{ margin: 0, flex: 1 }}>解析日志</h4>
        <span className="cnt">{warns > 0 ? warns + ' 项提示' : '正常'}</span>
      </div>
      {open ? (
        <div style={{ marginTop: 8 }}>
          {lines.map((l, i) => (
            <div key={i} className={'cad-p-logline' + (l.kind === 'warn' ? ' cad-p-warn' : '')}>
              <span>{l.kind === 'warn' ? '⚠' : 'ℹ'}</span><span>{l.text}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

// ── 2D CAD drawing canvas ───────────────────────────────────────────────────

function makePrim(item, category, color) {
  const t = item.type
  if (t === 'LINE' || t === 'LWPOLYLINE' || t === 'POLYLINE') {
    const pts = (item.vertices || []).filter((v) => v && typeof v.x === 'number')
    if (pts.length < 2) return null
    return { item, category, color, kind: 'poly', pts: item.closed && pts.length > 2 ? pts.concat([pts[0]]) : pts }
  }
  if (t === 'CIRCLE' && item.center) {
    return { item, category, color, kind: 'circle', c: item.center, r: item.radius || 1 }
  }
  if (t === 'ARC' && item.center) {
    return { item, category, color, kind: 'arc', c: item.center, r: item.radius || 1, a0: item.startAngle || 0, a1: item.endAngle != null ? item.endAngle : Math.PI }
  }
  if (item.position) {
    return { item, category, color, kind: 'mark', p: item.position }
  }
  return null
}

function DrawingCanvas({ scene, selectedId, onSelect, hiddenCats, hiddenLayers }) {
  const hostRef = useRef(null)
  const primsRef = useRef([])
  const textsRef = useRef([])
  const viewRef = useRef({ s: 1, tx: 0, ty: 0 })
  const fittedRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined
    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.style.background = '#0b1220'
    canvas.style.cursor = 'crosshair'
    canvas.style.touchAction = 'none'
    host.appendChild(canvas)
    const ctx2d = canvas.getContext('2d')

    // build filtered primitives (same legend/layer filters as the 3D view)
    const cats = hiddenCats || {}
    const layersOff = hiddenLayers || {}
    const prims = []
    const texts = []
    const bucketByHandle = {}
    for (const category of ['racks', 'aisles', 'zones', 'agvs']) {
      for (const item of scene[category] || []) {
        if (item.handle != null) bucketByHandle[item.handle] = { item, category }
      }
    }
    let synth = 0
    for (const e of scene.entities || []) {
      if (layersOff[e.layer]) continue
      const bucketed = e.handle != null ? bucketByHandle[e.handle] : null
      if (bucketed && cats[bucketed.category]) continue
      const item = bucketed ? bucketed.item : Object.assign({ id: 'ent-' + (++synth) }, e)
      const category = bucketed ? bucketed.category : null
      const color = hex(layerColor(scene, e.layer))
      const prim = makePrim(item, category, color)
      if (prim) prims.push(prim)
    }
    let textIndex = 0
    for (const e of scene.entities || []) {
      if ((e.type === 'TEXT' || e.type === 'MTEXT') && !layersOff[e.layer] && e.text) {
        textIndex += 1
        texts.push({
          item: Object.assign({ id: 'text-' + textIndex }, e),
          category: null,
          p: e.position || { x: 0, y: 0 },
          text: e.text,
          color: hex(layerColor(scene, e.layer)),
        })
      }
    }
    primsRef.current = prims
    textsRef.current = texts

    const view = viewRef.current
    const dpr = window.devicePixelRatio || 1

    const fit = () => {
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
      const eat = (p) => {
        if (!p) return
        minX = Math.min(minX, p.x); minY = Math.min(minY, p.y)
        maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y)
      }
      for (const prim of prims) {
        if (prim.kind === 'poly') prim.pts.forEach(eat)
        else if (prim.kind === 'circle' || prim.kind === 'arc') {
          eat({ x: prim.c.x - prim.r, y: prim.c.y - prim.r })
          eat({ x: prim.c.x + prim.r, y: prim.c.y + prim.r })
        } else eat(prim.p)
      }
      for (const t of texts) eat(t.p)
      if (minX === Infinity) { minX = -20; minY = -20; maxX = 20; maxY = 20 }
      const w = canvas.clientWidth || 600
      const h = canvas.clientHeight || 360
      const pad = 36
      const s = Math.min((w - pad * 2) / Math.max(maxX - minX, 1), (h - pad * 2) / Math.max(maxY - minY, 1))
      view.s = s > 0 ? s : 1
      view.tx = w / 2 - ((minX + maxX) / 2) * view.s
      view.ty = h / 2 + ((minY + maxY) / 2) * view.s
    }

    const draw = () => {
      const w = canvas.clientWidth || 600
      const h = canvas.clientHeight || 360
      const s = view.s
      const mx = (x) => x * s + view.tx
      const my = (y) => view.ty - y * s
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx2d.clearRect(0, 0, w, h)

      // world-aligned faint grid + origin axes (UCS vibe)
      let step = 10
      while (step * s < 26) step *= 5
      while (step * s > 130) step /= 5
      ctx2d.lineWidth = 1
      ctx2d.strokeStyle = 'rgba(148,163,184,0.08)'
      const wx0 = Math.floor((0 - view.tx) / s / step) * step
      const wx1 = Math.ceil((w - view.tx) / s / step) * step
      const wy0 = Math.floor((view.ty - h) / s / step) * step
      const wy1 = Math.ceil(view.ty / s / step) * step
      ctx2d.beginPath()
      for (let x = wx0; x <= wx1; x += step) { ctx2d.moveTo(mx(x), 0); ctx2d.lineTo(mx(x), h) }
      for (let y = wy0; y <= wy1; y += step) { ctx2d.moveTo(0, my(y)); ctx2d.lineTo(w, my(y)) }
      ctx2d.stroke()
      ctx2d.strokeStyle = 'rgba(248,113,113,0.45)'
      ctx2d.beginPath(); ctx2d.moveTo(0, my(0)); ctx2d.lineTo(w, my(0)); ctx2d.stroke()
      ctx2d.strokeStyle = 'rgba(52,211,153,0.45)'
      ctx2d.beginPath(); ctx2d.moveTo(mx(0), 0); ctx2d.lineTo(mx(0), h); ctx2d.stroke()

      // geometry in layer colors; selection glows yellow
      for (const prim of prims) {
        const sel = selectedId != null && prim.item.id === selectedId
        ctx2d.strokeStyle = sel ? '#facc15' : prim.color
        ctx2d.fillStyle = ctx2d.strokeStyle
        ctx2d.lineWidth = sel ? 2.6 : 1.4
        if (sel) { ctx2d.shadowColor = 'rgba(250,204,21,0.8)'; ctx2d.shadowBlur = 8 } else { ctx2d.shadowBlur = 0 }
        if (prim.kind === 'poly') {
          ctx2d.beginPath()
          prim.pts.forEach((p, i) => { if (i === 0) ctx2d.moveTo(mx(p.x), my(p.y)); else ctx2d.lineTo(mx(p.x), my(p.y)) })
          ctx2d.stroke()
        } else if (prim.kind === 'circle') {
          ctx2d.beginPath()
          ctx2d.arc(mx(prim.c.x), my(prim.c.y), Math.max(prim.r * s, 0.5), 0, Math.PI * 2)
          ctx2d.stroke()
        } else if (prim.kind === 'arc') {
          ctx2d.beginPath()
          ctx2d.arc(mx(prim.c.x), my(prim.c.y), Math.max(prim.r * s, 0.5), -prim.a1, -prim.a0, false)
          ctx2d.stroke()
        } else if (prim.kind === 'mark') {
          const px = mx(prim.p.x); const py = my(prim.p.y)
          const sz = 5
          ctx2d.beginPath()
          ctx2d.moveTo(px - sz, py); ctx2d.lineTo(px + sz, py)
          ctx2d.moveTo(px, py - sz); ctx2d.lineTo(px, py + sz)
          ctx2d.stroke()
          ctx2d.beginPath()
          ctx2d.arc(px, py, 2.2, 0, Math.PI * 2)
          ctx2d.stroke()
        }
      }
      ctx2d.shadowBlur = 0

      // text annotations in layer colors
      ctx2d.font = '12px ui-monospace, Consolas, monospace'
      for (const t of texts) {
        ctx2d.fillStyle = selectedId === t.item.id ? '#facc15' : t.color
        ctx2d.fillText(String(t.text).slice(0, 48), mx(t.p.x), my(t.p.y))
      }
    }

    const resize = () => {
      const w = canvas.clientWidth || 600
      const h = canvas.clientHeight || 360
      canvas.width = Math.max(w * dpr, 1)
      canvas.height = Math.max(h * dpr, 1)
      if (fittedRef.current !== scene) { fit(); fittedRef.current = scene }
      draw()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)
    resize()

    // pan / zoom / pick
    const distSeg = (sx, sy, a, b) => {
      const ax = mx(a.x), ay = my(a.y), bx = mx(b.x), by = my(b.y)
      const dx = bx - ax, dy = by - ay
      const len2 = dx * dx + dy * dy
      const t = len2 === 0 ? 0 : Math.max(0, Math.min(1, ((sx - ax) * dx + (sy - ay) * dy) / len2))
      return Math.hypot(sx - (ax + t * dx), sy - (ay + t * dy))
    }
    const hitTest = (sx, sy) => {
      const s = view.s
      const tol = 6
      for (let i = texts.length - 1; i >= 0; i--) {
        const t = texts[i]
        if (Math.abs(mx(t.p.x) - sx) < 44 && Math.abs(my(t.p.y) - sy) < 9) return { item: t.item, category: null }
      }
      for (let i = prims.length - 1; i >= 0; i--) {
        const prim = prims[i]
        let hit = false
        if (prim.kind === 'poly') {
          for (let j = 0; j + 1 < prim.pts.length; j++) {
            if (distSeg(sx, sy, prim.pts[j], prim.pts[j + 1]) < tol) { hit = true; break }
          }
        } else if (prim.kind === 'circle') {
          const d = Math.hypot(sx - mx(prim.c.x), sy - my(prim.c.y))
          hit = Math.abs(d - prim.r * s) < tol || d < prim.r * s
        } else if (prim.kind === 'arc') {
          const dx = sx - mx(prim.c.x)
          const dy = sy - my(prim.c.y)
          const d = Math.hypot(dx, dy)
          let a = Math.atan2(-dy, dx)
          if (a < 0) a += Math.PI * 2
          let a0 = prim.a0 % (Math.PI * 2); if (a0 < 0) a0 += Math.PI * 2
          let a1 = prim.a1 % (Math.PI * 2); if (a1 < 0) a1 += Math.PI * 2
          let sweep = a1 - a0; if (sweep <= 0) sweep += Math.PI * 2
          let rel = a - a0; if (rel < 0) rel += Math.PI * 2
          hit = Math.abs(d - prim.r * s) < tol && rel <= sweep
        } else if (prim.kind === 'mark') {
          hit = Math.hypot(sx - mx(prim.p.x), sy - my(prim.p.y)) < tol + 4
        }
        if (hit) return { item: prim.item, category: prim.category }
      }
      return null
    }

    let dragging = null
    let moved = false
    const onWheel = (e) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const sx = e.clientX - rect.left
      const sy = e.clientY - rect.top
      const factor = e.deltaY > 0 ? 1 / 1.12 : 1.12
      const next = Math.max(1e-4, view.s * factor)
      view.tx = sx - (sx - view.tx) * (next / view.s)
      view.ty = sy - (sy - view.ty) * (next / view.s)
      view.s = next
      draw()
    }
    const onMouseDown = (e) => {
      dragging = { x: e.clientX, y: e.clientY, tx: view.tx, ty: view.ty }
      moved = false
    }
    const onMouseMove = (e) => {
      if (!dragging) return
      const dx = e.clientX - dragging.x
      const dy = e.clientY - dragging.y
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true
      view.tx = dragging.tx + dx
      view.ty = dragging.ty + dy
      draw()
    }
    const onMouseUp = () => { dragging = null }
    const onClick = (e) => {
      if (moved) return
      const rect = canvas.getBoundingClientRect()
      onSelect(hitTest(e.clientX - rect.left, e.clientY - rect.top))
    }
    canvas.addEventListener('wheel', onWheel, { passive: false })
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('mouseleave', onMouseUp)
    canvas.addEventListener('click', onClick)

    return () => {
      resizeObserver.disconnect()
      canvas.removeEventListener('wheel', onWheel)
      canvas.removeEventListener('mousedown', onMouseDown)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseup', onMouseUp)
      canvas.removeEventListener('mouseleave', onMouseUp)
      canvas.removeEventListener('click', onClick)
      if (canvas.parentNode === host) host.removeChild(canvas)
    }
  }, [scene, hiddenCats, hiddenLayers, selectedId])

  return <div ref={hostRef} style={{ flex: 1, minHeight: 320, borderRadius: 8, overflow: 'hidden', lineHeight: 0 }} />
}

function CadSceneBuilderPanel() {
  const [fileState, setFileState] = useState(null)
  const fileRef = useRef(null)
  const inputRef = useRef(null)
  const [scene, setScene] = useState(null)
  const [busy, setBusy] = useState(false)
  const [selection, setSelection] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [hiddenLayers, setHiddenLayers] = useState({})
  const [dxfDownload, setDxfDownload] = useState(null)
  const [view2d, setView2d] = useState(false)

  useEffect(() => { ensureImportStyles() }, [])

  const toggleLayer = (name) => setHiddenLayers((h) => Object.assign({}, h, { [name]: !h[name] }))

  const acceptFile = (file) => {
    if (!file) return
    fileRef.current = file
    setScene(null)
    setSelection(null)
    setHiddenLayers({})
    setDxfDownload(null)
    setFileState({ name: file.name, size: file.size, status: 'ready', error: null })
  }

  const runParse = async () => {
    const file = fileRef.current
    if (!file || busy) return
    setBusy(true)
    setFileState((s) => Object.assign({}, s, { status: 'parsing', error: null }))
    try {
      const res = await parseFile(file, (phase) => setFileState((s) => Object.assign({}, s, { phase })))
      setScene(res.scene)
      setDxfDownload(res.download || null)
      setFileState((s) => Object.assign({}, s, { status: 'done' }))
    } catch (error) {
      setFileState((s) => Object.assign({}, s, { status: 'error', error: String(error && error.message || error) }))
    } finally {
      setBusy(false)
    }
  }

  const portalState = dragging ? 'drag'
    : busy ? 'parsing'
    : !fileState ? 'idle'
    : fileState.status === 'done' ? 'done'
    : fileState.status === 'error' ? 'error'
    : 'ready'

  const statusText = !fileState ? '尚未选择文件'
    : fileState.status === 'ready' ? '待解析'
    : fileState.status === 'parsing' ? (fileState.phase || '解析中…')
    : fileState.status === 'done' ? '解析完成'
    : '解析失败'

  return (
    <div style={styles.wrap}>
      <div style={styles.colLeft}>
        <h3 style={styles.title}>CAD 文件导入区</h3>
        <div
          className="cad-im-portal"
          data-state={portalState}
          onClick={() => { if (inputRef.current) inputRef.current.click() }}
          onDragEnter={(e) => { e.preventDefault(); setDragging(true) }}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => { e.preventDefault(); setDragging(false) }}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            acceptFile(e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0])
          }}
        >
          <div className="cad-im-grid" />
          <span className="cad-im-corner tl" /><span className="cad-im-corner tr" />
          <span className="cad-im-corner bl" /><span className="cad-im-corner br" />
          <div className="cad-im-scan" />
          <span className="cad-im-cross" style={{ top: 18, left: 30, animationDelay: '0.2s' }} />
          <span className="cad-im-cross" style={{ top: 26, right: 36, animationDelay: '0.9s' }} />
          <span className="cad-im-cross" style={{ bottom: 22, left: 44, animationDelay: '1.6s' }} />
          <div className="cad-im-stage">
            <svg className="cad-im-icon" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M14 6h26l10 10v42H14z" fill="rgba(30,58,138,.55)" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" />
              <path d="M40 6v10h10" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="31" cy="36" r="8.5" fill="none" stroke="#7dd3fc" strokeWidth="2" />
              <path d="M31 22.5v6M31 43.5v6M17.5 36h6M38.5 36h6" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {fileState && fileState.status === 'done' ? (
              <svg className="cad-im-check" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="21" />
                <path d="M13 25l7.5 7.5L35 16" />
              </svg>
            ) : null}
          </div>
          <div className="cad-im-title">{dragging ? '松手，开始解析图纸' : '拖拽 CAD 图纸到此处'}</div>
          <div className="cad-im-sub">
            {dragging ? '支持 .dwg / .dxf / .step' : '或点击选择文件 · 解析后实体叠加到右侧 3D 场景'}
          </div>
          {fileState ? (
            <div className="cad-im-chip">{fileState.name} · {(fileState.size / 1024).toFixed(1)} KB</div>
          ) : null}
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
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            className="cad-im-btn"
            data-busy={busy ? 'true' : 'false'}
            disabled={!fileState || busy}
            onClick={runParse}
          >
            {busy ? '解析中…' : '解析'}
          </button>
          {dxfDownload ? (
            <button
              type="button"
              className="cad-im-btn cad-im-dl"
              onClick={() => {
                const a = document.createElement('a')
                a.href = dxfDownload.url
                a.download = dxfDownload.name
                document.body.appendChild(a)
                a.click()
                a.remove()
              }}
            >⬇ 下载 DXF</button>
          ) : null}
        </div>
        {scene ? <GeneratedLegend scene={scene} hiddenLayers={hiddenLayers} onToggleLayer={toggleLayer} /> : null}
        {scene ? <StatsCard scene={scene} /> : null}
        {scene ? <ParseLog scene={scene} /> : null}
      </div>
      <div style={styles.col}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h3 style={Object.assign({}, styles.title, { flex: 1 })}>{view2d ? 'CAD 图纸 · 2D 俯视' : 'Three.js 3D 场景显示区'}</h3>
          <div className="cad-v-toggle">
            <button type="button" className="cad-v-btn" data-on={view2d ? 'false' : 'true'} onClick={() => setView2d(false)}>3D 场景</button>
            <button type="button" className="cad-v-btn" data-on={view2d ? 'true' : 'false'} onClick={() => setView2d(true)}>CAD 图纸</button>
          </div>
        </div>
        <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'flex' }}>
          {view2d ? (
            <DrawingCanvas scene={scene || EMPTY_SCENE} selectedId={selection && selection.item ? selection.item.id : null} onSelect={setSelection} hiddenLayers={hiddenLayers} />
          ) : (
            <SceneCanvas scene={scene || EMPTY_SCENE} selectedId={selection && selection.item ? selection.item.id : null} onSelect={setSelection} hiddenLayers={hiddenLayers} />
          )}
          {!scene ? (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 12, pointerEvents: 'none', fontSize: 12, opacity: 0.7 }}>
              {view2d ? '解析后在此查看 CAD 图纸（滚轮缩放、拖拽平移，点击图元查看详情）' : '解析后实体将叠加到场景中（左键旋转、滚轮缩放、右键平移，点击实体查看详情）'}
            </div>
          ) : null}
        </div>
        <InfoPanel scene={scene || EMPTY_SCENE} selection={selection} />
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
      {scene.meta && scene.meta.summary && (scene.entities || []).length === 0 ? (
        <div style={styles.info}>
          <div><b>摘要模式</b>（detail: 'full' 返回全量实体）</div>
          {Object.entries(scene.meta.summary.byType || {}).map((t) => (
            <div key={t[0]}><span style={styles.label}>{t[0]}</span>{t[1]}</div>
          ))}
          {(scene.layers || []).slice(0, 24).map((l) => (
            <div key={l.name}><span style={styles.label}>{l.name}</span>{l.count}</div>
          ))}
        </div>
      ) : (
        <div style={{ height: 380, display: 'flex' }}>
          <SceneCanvas scene={scene} selectedId={selection && selection.item ? selection.item.id : null} onSelect={setSelection} />
        </div>
      )}
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
