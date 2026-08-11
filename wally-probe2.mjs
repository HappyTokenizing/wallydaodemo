import * as THREE from 'three'
const noop = () => {}
globalThis.document = { createElement: () => ({ width:1,height:1,style:{},getContext:()=>new Proxy({},{get:()=>noop,set:()=>true}),toDataURL:()=>'data:,',addEventListener:noop,removeEventListener:noop }), createElementNS:()=>({}), body:{appendChild:noop,style:{}}, addEventListener:noop, removeEventListener:noop }
const G = await import('./src/render/index.js')
const f=n=>+n.toFixed(4)
const ext=(g,l)=>{g.computeBoundingBox();const b=g.boundingBox;console.log(l,'x',f(b.min.x),f(b.max.x),'y',f(b.min.y),f(b.max.y),'z',f(b.min.z),f(b.max.z))}
const collarPath=(dx,dy,h,th)=>{const s=[];for(let i=0;i<=10;i++){const z=-0.30+(i/10)*0.60;const k=z/0.30
  s.push({at:[-0.330+k*k*0.190+dx,0.560+dy-k*k*0.030,z],shape:G.superellipsePoints(h,th,2.6,10)})}return s}
ext(G.loft(collarPath(0,0,0.100,0.034),{up:[0,1,0],subdivide:1,ringPoints:10}),'collar')
const LAPEL=[[1.282,0.052,0.150,0.416],[1.330,0.058,0.203,0.414],[1.372,0.064,0.243,0.408],[1.420,0.073,0.252,0.396],[1.462,0.090,0.255,0.352],[1.484,0.104,0.206,0.262],[1.500,0.115,0.152,0.184]]
const rings=LAPEL.map(([wy,zi,zo,cx])=>({y:wy-1.020,shape:G.superellipsePoints(0.030,Math.max(0.024,zo-zi),2.6,12),offset:[cx,((zi+zo)/2)]}))
ext(G.loft(rings,{up:[1,0,0],subdivide:1,ringPoints:12}),'lapel')
ext(G.splineTube(LAPEL.map(([wy,zi,,cx])=>[cx+0.012,wy-1.020,zi]),0.019,12,(t)=>0.019*(1-0.35*t*t),{radialSeg:7,roundStart:true}),'lapelRoll')
const COAT_E=2.55
const COAT_RINGS=[[0.040,0.872,0.934,-0.032],[0.100,0.880,0.960,-0.035],[0.180,0.888,0.952,-0.033],[0.260,0.898,0.936,-0.031],[0.320,0.904,0.922,-0.030],[0.370,0.896,0.910,-0.034],[0.410,0.850,0.966,-0.056],[0.440,0.780,1.020,-0.098],[0.465,0.680,1.070,-0.152],[0.485,0.580,1.100,-0.200],[0.508,0.530,1.084,-0.222],[0.528,0.480,1.040,-0.243],[0.545,0.430,0.990,-0.262],[0.555,0.380,0.930,-0.278]]
ext(G.loft(COAT_RINGS.map(([y,w,d,ox])=>({y,shape:G.superellipsePoints(w,d,COAT_E,26),offset:[ox,0]})),{up:[1,0,0],ringPoints:26}),'coatBody')
