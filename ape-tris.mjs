import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1, height:1, style:{}, getContext: () => new Proxy({}, { get: (t,k) => (k==='createLinearGradient'||k==='createRadialGradient') ? (()=>({addColorStop:noop})) : k==='measureText' ? (()=>({width:10})) : k==='getImageData' ? ((x,y,w,h)=>({data:new Uint8ClampedArray(Math.max(4,(w|0)*(h|0)*4)),width:w|0,height:h|0})) : noop, set: ()=>true }), toDataURL: () => 'data:,' , addEventListener:noop, removeEventListener:noop}), createElementNS: () => ({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const mod = await import('./src/characters/tired-ape.js')
const def = Object.values(mod).find(v => v && typeof v === 'object' && typeof v.buildModel === 'function')
const built = def.buildModel(0)
const g = built.group
g.updateMatrixWorld(true)
const rows = []
g.traverse((o) => {
  if (!o.isMesh) return
  const idx = o.geometry.index
  const n = (idx ? idx.count/3 : o.geometry.getAttribute('position').count/3) * (o.isInstancedMesh ? o.count : 1)
  let path = [], p = o
  while (p && p !== g) { if (p.name) path.unshift(p.name); p = p.parent }
  rows.push([Math.round(n), o.name || '(anon)', o.material.name, path.join('/')])
})
rows.sort((a,b) => b[0]-a[0])
let t = 0; for (const r of rows) t += r[0]
console.log('TOTAL tris', t, 'draws', rows.length)
for (const r of rows.slice(0, 80)) console.log(String(r[0]).padStart(6), r[1].padEnd(16), r[2].padEnd(22), r[3])
