/**
 * Build script for dsh-cad-scene (run with `node build.mjs`):
 *  - bundles src/client.jsx into lib/client.js as lazy-CJS factory form for the
 *    web module system (three.js + dxf-parser inlined; react external);
 *  - copies the host half (src/host.mjs + src/scene-core.mjs) into lib/.
 *
 * All writes are UTF-8 WITHOUT BOM — a BOM breaks JSON.parse of package
 * metadata downstream and is easy to introduce with some Windows editors.
 */
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, copyFileSync } from 'node:fs'

const ID = 'dsh-cad-scene'

// worker bundle first: its code travels inside the client bundle as a string
// and is spawned from a Blob URL at runtime.
const workerBuild = await build({
  entryPoints: ['src/worker.js'],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  write: false,
  logLevel: 'info',
})
const workerSource = workerBuild.outputFiles[0].text

const result = await build({
  entryPoints: ['src/client.jsx'],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  jsx: 'automatic',
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    __CAD_WORKER_SOURCE__: JSON.stringify(workerSource),
  },
  external: ['react', 'react-dom', 'react/jsx-runtime', '@deepseek-ai/cordis'],
  write: false,
  logLevel: 'info',
})

const body = result.outputFiles[0].text
const wrapped = [
  'window.__ModuleLoader__.load({',
  '\tid: ' + JSON.stringify(ID) + ',',
  '\tfactory: (require) => {',
  '\t\tvar module = { exports: {} };',
  '\t\tvar exports = module.exports;',
  body,
  '\t\treturn module.exports;',
  '\t}',
  '});',
  '',
].join('\n')

mkdirSync('lib', { recursive: true })
writeFileSync('lib/client.js', wrapped, 'utf8')
copyFileSync('src/host.mjs', 'lib/index.js')
copyFileSync('src/scene-core.mjs', 'lib/scene-core.mjs')
console.log('lib/client.js:', wrapped.length, 'chars | lib/index.js + lib/scene-core.mjs copied')
