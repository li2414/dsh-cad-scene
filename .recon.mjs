// Full recon of scene.dxf: uncapped entity histogram, INSERT block names,
// layer histogram, text count — grounds the classification fix.
import DxfParser from 'dxf-parser'
import { readFileSync } from 'node:fs'

const path = 'C:/Users/Administrator/.dsh/attachments/v1/files/b0/b0e0871d53c6730ba45ccd845c8d9555e193902bf51435488fb6c79fd9e5b72a/scene.dxf'
const text = readFileSync(path, 'utf8')
const parsed = new DxfParser().parseSync(text)

const types = {}
const layers = {}
const blocks = {}
let texts = 0
for (const e of parsed.entities || []) {
  types[e.type] = (types[e.type] || 0) + 1
  layers[e.layer || '0'] = (layers[e.layer || '0'] || 0) + 1
  if (e.type === 'INSERT' && e.name) blocks[e.name] = (blocks[e.name] || 0) + 1
  if (e.type === 'TEXT' || e.type === 'MTEXT') texts += 1
}
console.log('total entities:', (parsed.entities || []).length)
console.log('types:', JSON.stringify(types))
console.log('texts:', texts)
console.log('layer histogram:', JSON.stringify(layers))
console.log('INSERT block names:', JSON.stringify(blocks))
console.log('block definitions:', Object.keys(parsed.blocks || {}).length, '|', Object.keys(parsed.blocks || {}).slice(0, 40).join(' | '))
