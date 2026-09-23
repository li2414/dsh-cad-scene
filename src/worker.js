/**
 * Parse worker for the 3d解析 panel: runs dxf parsing off the main thread so
 * multi-MB drawings never freeze the UI. Bundled as an IIFE string at build
 * time and spawned from a Blob URL (the module system serves exactly one
 * bundle per package, so a second chunk URL is not an option).
 */
import { parseDxfToScene } from './scene-core.mjs'

self.onmessage = (event) => {
  const data = event.data || {}
  try {
    self.postMessage({ phase: '解析中 · 图元扫描' })
    const scene = parseDxfToScene(String(data.content || ''), data.name || 'drawing.dxf', data.format || 'dxf')
    self.postMessage({ done: true, scene })
  } catch (error) {
    self.postMessage({ done: true, error: String((error && error.message) || error) })
  }
}
