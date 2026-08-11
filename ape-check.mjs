import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1, height:1, style:{}, getContext: () => new Proxy({}, { get: (t,k) => (k==='createLinearGradient'||k==='createRadialGradient') ? (()=>({addColorStop:noop})) : k==='measureText' ? (()=>({width:10})) : k==='getImageData' ? ((x,y,w,h)=>({data:new Uint8ClampedArray(Math.max(4,(w|0)*(h|0)*4)),width:w|0,height:h|0})) : noop, set: ()=>true }), toDataURL: () => 'data:,', addEventListener:noop, removeEventListener:noop }), createElementNS: () => ({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const mod = await import('./src/characters/tired-ape.js')
const def = Object.values(mod).find(v => v && typeof v === 'object' && typeof v.buildModel === 'function')
const built = def.buildModel(0); const g = built.group; g.updateMatrixWorld(true); const B = built.bones
const f = n => +n.toFixed(4)
const wp = o => { const v = new THREE.Vector3(); o.getWorldPosition(v); return v }
const bb = o => new THREE.Box3().setFromObject(o)
const path = o => { const a=[]; let p=o; while(p&&p!==g){ if(p.name) a.unshift(p.name); p=p.parent } return a.join('/') }
// collect by material name, optionally excluding subtrees
function span(root, matName, exclude=[]) {
  let out=null
  root.traverse(o=>{ if(!o.isMesh) return
    for(const e of exclude){ let p=o; while(p){ if(p===e) return; p=p.parent } }
    if(matName && o.material.name !== matName) return
    const b=bb(o); out = out? out.union(b) : b })
  return out
}
const box = bb(g)
console.log('1 height', f(box.max.y-box.min.y), '| feet y', f(box.min.y), '| top y', f(box.max.y))
let top=null,bot=null
g.traverse(o=>{ if(!o.isMesh) return; const b=bb(o); if(!top||b.max.y>top[1]) top=[path(o),b.max.y]; if(!bot||b.min.y<bot[1]) bot=[path(o),b.min.y] })
console.log('  top:', top[0], f(top[1]), '| bottom:', bot[0], f(bot[1]))
const ears=[B.earL,B.earR]
const eb = bb(B.earL).union(bb(B.earR))
console.log('2 head width across ears', f(eb.max.z-eb.min.z))
const skull = span(B.head,'coat',ears)
console.log('  skull (fur) z width', f(skull.max.z-skull.min.z), '| fur crown y', f(skull.max.y))
const mask = span(B.head,'mask',ears)
console.log('3 mask y', f(mask.min.y), '->', f(mask.max.y), '| x', f(mask.min.x), '->', f(mask.max.x), '| z', f(mask.min.z),'->',f(mask.max.z))
console.log('  H_h (crown - chin)', f(skull.max.y - mask.min.y))
console.log('4 eye centre y', f(wp(B.head).y+0.163), '| ear bone y', f(wp(B.earL).y), '| head bone', wp(B.head).toArray().map(f).join(','))
const lip = span(B.head,'lipBand',ears)
console.log('5 lip band y', f(lip.min.y),'->',f(lip.max.y), '| z span (aperture)', f(lip.max.z-lip.min.z), '| front x', f(lip.max.x))
console.log('6 muzzle front x', f(mask.max.x), '| brow front: see mask; projection', f(mask.max.x - (wp(B.head).x+0.100)))
const hand = span(B.forearmR,'palmHide')
console.log('7 knuckle y', f(hand.min.y), '| knee y', f(wp(B.legR).y - 0.404*Math.cos(0.150)), '| delta', f(wp(B.legR).y-0.404*Math.cos(0.150)-hand.min.y))
const sh = wp(B.armR)
console.log('8 acromion(shoulder bone) y', f(sh.y), '| IMI', f((0.42+0.40)/(0.41+0.35)*100), '| sh->knuckle/hip->sole', f((sh.y-hand.min.y)/0.85))
console.log('9 shoulder z', f(Math.abs(wp(B.armL).z))+' * 2 + deltoid =', f(Math.abs(wp(B.armL).z)*2+0.19))
let tris=0,calls=0; const seen=new Set()
g.traverse(o=>{ if(!o.isMesh) return; const i=o.geometry.index; tris+=(i?i.count/3:o.geometry.getAttribute('position').count/3)*(o.isInstancedMesh?o.count:1); calls++; seen.add(o.material) })
console.log('10 tris', Math.round(tris), '| draw calls', calls, '| materials', seen.size)
const bad=[], presets={}
for(const m of seen){ presets[m.userData.__wcsPreset||'(none)']=(presets[m.userData.__wcsPreset||'(none)']||0)+1
  if(!m.color) continue; const s=[m.color.r,m.color.g,m.color.b].map(v=>Math.round(Math.pow(v,1/2.2)*255))
  if(!m.userData.__wcsPreset) continue
  if(m.userData.__wcsPreset==='neon-panel') continue
  if(s.some(v=>v<29||v>241)) bad.push(m.name+' '+s.join(',')) }
console.log('11 albedo out of [30,240]:', bad.length?bad.join(' | '):'none')
console.log('12 presets', JSON.stringify(presets))
console.log('13 costume1 builds', !!def.buildModel(1).group)
console.log('14 bones', Object.keys(built.bones).sort().join(','))
