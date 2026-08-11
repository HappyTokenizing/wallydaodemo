import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1,height:1,style:{},getContext:()=>new Proxy({},{get:()=>noop,set:()=>true}),toDataURL:()=>'data:,',addEventListener:noop,removeEventListener:noop }), createElementNS:()=>({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const mod = await import('./src/characters/wally.js')
const def = Object.values(mod).find(v => v && typeof v === 'object' && typeof v.buildModel === 'function')
const built = def.buildModel(0); const g=built.group; g.updateMatrixWorld(true); const B=built.bones
const f=n=>+n.toFixed(4)
const v=new THREE.Vector3(), m=new THREE.Matrix4()
// exact world-space vertex iteration (Box3.setFromObject is a rotated-AABB overestimate)
function verts(root, cb, skip=null){
  root.traverse(o=>{
    if(!o.isMesh) return
    if(skip){ let p=o,bad=false; while(p){ if(p===skip) bad=true; p=p.parent } if(bad) return }
    const pos=o.geometry.attributes.position
    const count = o.isInstancedMesh ? o.count : 1
    for(let i=0;i<count;i++){
      if(o.isInstancedMesh){ o.getMatrixAt(i,m); m.premultiply(o.matrixWorld) } else m.copy(o.matrixWorld)
      for(let k=0;k<pos.count;k++){ v.fromBufferAttribute(pos,k).applyMatrix4(m); cb(v,o) }
    }
  })
}
function span(root, skip){
  const b=new THREE.Box3(); b.makeEmpty()
  verts(root,(p)=>b.expandByPoint(p),skip)
  return b
}
const pr=(l,b)=>console.log(` ${l.padEnd(22)} x ${f(b.min.x)}..${f(b.max.x)}  y ${f(b.min.y)}..${f(b.max.y)}  z ${f(b.min.z)}..${f(b.max.z)}`)
pr('WHOLE', span(g))
pr('earL', span(B.earL)); pr('earR', span(B.earR))
pr('head(no ears/trunk)', (()=>{const b=new THREE.Box3();b.makeEmpty();verts(B.head,(p)=>b.expandByPoint(p),null);return b})())
pr('armL', span(B.armL)); pr('forearmL', span(B.forearmL))
pr('trunk', span(B.trunk))
pr('torso-only', (()=>{const b=new THREE.Box3();b.makeEmpty()
  B.torso.children.forEach(c=>{ if(c===B.head||c===B.armL||c===B.armR) return; verts(c,(p)=>b.expandByPoint(p)) }); return b})())
pr('hips-only', (()=>{const b=new THREE.Box3();b.makeEmpty()
  B.hips.children.forEach(c=>{ if(c===B.torso||c===B.legL||c===B.legR||c===B.tail) return; verts(c,(p)=>b.expandByPoint(p)) }); return b})())
pr('legL', span(B.legL))

// coat front x at given world y, z=0  (max x among torso-only meshes near that y)
function frontAt(y0, z0, tol=0.012){
  let best=-9
  B.torso.children.forEach(c=>{ if(c===B.head||c===B.armL||c===B.armR) return
    verts(c,(p)=>{ if(Math.abs(p.y-y0)<tol && Math.abs(p.z-z0)<0.04 && p.x>best) best=p.x }) })
  return best
}
for(const y of [1.20,1.28,1.32,1.40,1.45,1.50,1.53,1.56,1.575]) console.log('  coat front x @y',y,'=',f(frontAt(y,0)))
// max z of coat at y
function widthAt(y0, tol=0.012){
  let best=-9
  B.torso.children.forEach(c=>{ if(c===B.head||c===B.armL||c===B.armR) return
    verts(c,(p)=>{ if(Math.abs(p.y-y0)<tol && p.z>best) best=p.z }) })
  return best
}
for(const y of [1.10,1.20,1.32,1.46,1.505,1.55,1.575]) console.log('  coat half-width @y',y,'=',f(widthAt(y)))
// arm sleeve outer z and forward x
console.log('  sleeve span', JSON.stringify({}) )
pr('armL sleeve', span(B.armL, B.forearmL))
console.log('--- torso children (excluding head/arms)')
B.torso.children.forEach(c=>{ if(c===B.head||c===B.armL||c===B.armR) return
  c.traverse(o=>{ if(!o.isMesh) return
    const b=new THREE.Box3(); b.makeEmpty(); verts(o,(p)=>b.expandByPoint(p))
    console.log('  ', (o.material?.name||'').padEnd(26), 'y',f(b.min.y),'..',f(b.max.y),' x',f(b.min.x),'..',f(b.max.x),' z',f(b.max.z)) })
})
