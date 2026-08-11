import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1,height:1,style:{},getContext:()=>new Proxy({},{get:()=>noop,set:()=>true}),toDataURL:()=>'data:,',addEventListener:noop,removeEventListener:noop }), createElementNS:()=>({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const mod = await import('./src/characters/wally.js')
const def = Object.values(mod).find(v => v && typeof v === 'object' && typeof v.buildModel === 'function')
const built = def.buildModel(0); const g=built.group
const path=o=>{const a=[];let p=o;while(p&&p!==g){if(p.name)a.unshift(p.name);p=p.parent}return a.join('/')}
const rows=[]
g.traverse(o=>{ if(!o.isMesh) return
  const gm=o.geometry; const n=(gm.index?gm.index.count/3:gm.attributes.position.count/3)*(o.isInstancedMesh?o.count:1)
  rows.push([Math.round(n), path(o)+' ['+(o.material?.name||'')+']']) })
rows.sort((a,b)=>b[0]-a[0])
let t=0; rows.forEach(r=>t+=r[0])
console.log('total', t, 'meshes', rows.length)
rows.slice(0,28).forEach(r=>console.log(String(r[0]).padStart(6), r[1]))
