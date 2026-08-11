import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1,height:1,style:{},getContext:()=>new Proxy({},{get:()=>noop,set:()=>true}),toDataURL:()=>'data:,',addEventListener:noop,removeEventListener:noop }), createElementNS:()=>({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const mod = await import('./src/characters/wally.js')
const def = Object.values(mod).find(v => v && typeof v === 'object' && typeof v.buildModel === 'function')
const built = def.buildModel(0); const g=built.group; g.updateMatrixWorld(true)
const rc = new THREE.Raycaster(); rc.firstHitOnly = false
const objs=[]; g.traverse(o=>{ if(o.isMesh && !o.isInstancedMesh) objs.push(o) })
const key = (m)=>{ const h=m?.color?.getHex()
  switch(h){ case 0x8a8f9c: return '#'; case 0x4e545f: return '.'; case 0xadb2be: return '+'
    case 0x2f3541: return 'W'; case 0x1f232c: return 'w'; case 0x7c8593: return '/'
    case 0xe8ebef: return 'S'; case 0x7e2b38: return 'T'; case 0xddb44e: return 'q'
    case 0xd8a83e: return 'G'; case 0xe6dab9: return 'I'; case 0xdcd2b9: return 'n'
    case 0x1e2026: return 'L'; case 0x2b2f38: return 'F'; case 0xb4818a: return 'e'
    case 0x969ba8: return 'v'; case 0x33302e: return ':'; case 0xb3a992: return 'd'
    case 0x5c6472: return ','; case 0xb6a47c: return 'i'
    default: return m?.userData?.__wcsEmissive ? '$' : '?' } }
const W=62, H=52
let out=''
for(let r=0;r<H;r++){
  const y = 2.03 - (r+0.5)*(2.06/H)
  let line=''
  for(let c=0;c<W;c++){
    const z = -0.78 + (c+0.5)*(1.56/W)
    rc.set(new THREE.Vector3(4,y,z), new THREE.Vector3(-1,0,0))
    const hits = rc.intersectObjects(objs, false)
    line += hits.length ? key(hits[0].object.material) : ' '
  }
  out += (y.toFixed(2)+' ').padStart(6)+line+'\n'
}
console.log(out)
console.log('legend: # hide  . hideDeep  W suit  w suitDeep  / chalk  S shirt  T tie  q square  G gold  I ivory  n nail  L lens  F frame  e earflush  v vein  : bristle  , stitch  $ glint')
