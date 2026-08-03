import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-DjPHiq1u.js";var r=e(t(),1),i=1e3,a=1001,o=1002,s=1003,c=1004,l=1005,u=1006,d=1007,f=1008,p=1009,m=1010,h=1011,g=1012,_=1013,v=1014,y=1015,b=1016,x=1017,S=1018,C=1020,w=35902,T=35899,E=1021,D=1022,O=1023,k=1026,A=1027,ee=1028,te=1029,j=1030,M=1031,ne=1033,N=33776,re=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37488,P=37489,me=37490,F=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,I=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,L=36284,Me=36285,Ne=36286,Pe=2300,R=2301,Fe=2302,z=2303,Ie=2400,Le=2401,Re=2402,ze=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=35048,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={},$e=null;function et(...e){let t=`THREE.`+e.shift();$e?$e(`log`,t,...e):console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=tt(e);let t=`THREE.`+e.shift();if($e)$e(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=tt(e);let t=`THREE.`+e.shift();if($e)$e(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,B(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=1234567,ct=Math.PI/180,lt=180/Math.PI;function ut(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function dt(e,t,n){return Math.max(t,Math.min(n,e))}function ft(e,t){return(e%t+t)%t}function pt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function mt(e,t,n){return e===t?0:(n-e)/(t-e)}function ht(e,t,n){return(1-n)*e+n*t}function gt(e,t,n,r){return ht(e,t,1-Math.exp(-n*r))}function _t(e,t=1){return t-Math.abs(ft(e,t*2)-t)}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function bt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function xt(e,t){return e+Math.random()*(t-e)}function St(e){return e*(.5-Math.random())}function Ct(e){e!==void 0&&(st=e);let t=st+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wt(e){return e*ct}function Tt(e){return e*lt}function Et(e){return(e&e-1)==0&&e!==0}function Dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ot(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function kt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Mt={DEG2RAD:ct,RAD2DEG:lt,generateUUID:ut,clamp:dt,euclideanModulo:ft,mapLinear:pt,inverseLerp:mt,lerp:ht,damp:gt,pingpong:_t,smoothstep:vt,smootherstep:yt,randInt:bt,randFloat:xt,randFloatSpread:St,seededRandom:Ct,degToRad:wt,radToDeg:Tt,isPowerOfTwo:Et,ceilPowerOfTwo:Dt,floorPowerOfTwo:Ot,setQuaternionFromProperEuler:kt,normalize:jt,denormalize:At},Nt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new H,It=new Pt,U=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new U,Rt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=G(e.r),e.g=G(e.g),e.b=G(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return nt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return nt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var W=Bt();function G(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ht,Ut=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ht===void 0&&(Ht=Xe(`canvas`)),Ht.width=e.width,Ht.height=e.height;let t=Ht.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ht}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=G(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(G(t[e]/255)*255):t[e]=G(t[e]);return{data:t,width:e.width,height:e.height}}else return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Wt=0,Gt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Wt++}),this.uuid=ut(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Kt(r[t].image)):e.push(Kt(r[t]))}else e=Kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ut.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var qt=0,Jt=new H,Yt=class e extends at{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=a,i=a,o=u,s=f,c=O,l=p,d=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:qt++}),this.uuid=ut(),this.name=``,this.source=new Gt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case i:e.x-=Math.floor(e.x);break;case a:e.x=e.x<0?0:1;break;case o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case i:e.y-=Math.floor(e.y);break;case a:e.y=e.y<0?0:1;break;case o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:u,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*te+c*N,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*te+f*N,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*te+g*N,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*te+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new H,rn=new tn,an=new H(0,0,0),on=new H(1,1,1),sn=new H,cn=new H,ln=new H,un=new tn,dn=new Pt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mn=0,hn=new H,gn=new Pt,_n=new tn,vn=new H,yn=new H,bn=new H,xn=new Pt,Sn=new H(1,0,0),Cn=new H(0,1,0),wn=new H(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:mn++}),this.uuid=ut(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new fn,r=new Pt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new U}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};kn.DEFAULT_UP=new H(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=ft(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=Nn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=G(e.r),this.g=G(e.g),this.b=G(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return W.workingToColorSpace(Ln.copy(this),e),Math.round(dt(Ln.r*255,0,255))*65536+Math.round(dt(Ln.g*255,0,255))*256+Math.round(dt(Ln.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Be){W.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=ht(Pn.h,Fn.h,t),r=ht(Pn.s,Fn.s,t),i=ht(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new K;K.NAMES=Nn;var Rn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new K(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H,Jn=new H,Yn=new H,Xn=new Xt,Zn=new Xt,Qn=new Xt,$n=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new H,new H,new H,new H,new H,new H,new H,new H],nr=new H,rr=new er,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H,dr=new H,fr=new H,pr=new H;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new H,gr=new Nt,_r=0,vr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=y,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=At(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=At(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=At(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=At(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=At(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new H,wr=new H,Tr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new tn,Or=new kn,kr=new H,Ar=new er,jr=new er,Mr=new H,Nr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Er++}),this.uuid=ut(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Je(e)?br:yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new Nt,f=new Nt,p=new Nt,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=0,Fr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Pr++}),this.uuid=ut(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Nt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ir=new H,Lr=new H,Rr=new H,zr=new H,Br=new H,Vr=new H,Hr=new H,Ur=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lr.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Lr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=zr.dot(this.direction),s=-zr.dot(Rr),c=zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lr).addScaledVector(Rr,d),f}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);let n=Ir.dot(this.direction),r=Ir.dot(Ir)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,r,i){Br.subVectors(t,e),Vr.subVectors(n,e),Hr.crossVectors(Br,Vr);let a=this.direction.dot(Hr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zr.subVectors(this.origin,e);let s=o*this.direction.dot(Vr.crossVectors(zr,Vr));if(s<0)return null;let c=o*this.direction.dot(Br.cross(zr));if(c<0||s+c>a)return null;let l=-o*zr.dot(Hr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gr=new tn,Kr=new Ur,qr=new Tr,Jr=new H,Yr=new H,Xr=new H,Zr=new H,Qr=new H,$r=new H,ei=new H,ti=new H,ni=class extends kn{constructor(e=new Nr,t=new Wr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){$r.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Qr.fromBufferAttribute(s,e),a?$r.addScaledVector(Qr,r):$r.addScaledVector(Qr.sub(t),r))}t.add($r)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),Kr.copy(e.ray).recast(e.near),!(qr.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(qr,Jr)===null||Kr.origin.distanceToSquared(Jr)>(e.far-e.near)**2))&&(Gr.copy(i).invert(),Kr.copy(e.ray).applyMatrix4(Gr),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ti.copy(s),ti.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ti);return l<n.near||l>n.far?null:{distance:l,point:ti.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Yr),e.getVertexPosition(c,Xr),e.getVertexPosition(l,Zr);let u=ri(e,t,n,r,Yr,Xr,Zr,ei);if(u){let e=new H;$n.getBarycoord(ei,Yr,Xr,Zr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new Nt)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new Nt)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};$n.getNormal(Yr,Xr,Zr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Yt{constructor(e=null,t=1,n=1,r,i,a,o,c,l=s,u=s,d,f){super(null,a,o,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new tn,ci=new tn,li=[],ui=new er,di=new tn,fi=new ni,pi=new Tr,mi=class extends ni{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,ee,y));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new H,gi=new H,_i=new U,vi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hi.subVectors(n,t).cross(gi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_i.getNormalMatrix(e),r=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Tr,bi=new Nt(.5,.5),xi=new H,Si=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,a=new vi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476+bi.distanceTo(e.center),yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xi.x=r.normal.x>0?e.max.x:e.min.x,xi.y=r.normal.y>0?e.max.y:e.min.y,xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ci=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wi=class extends Yt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class extends Yt{constructor(e,t,n=v,r,i,a,o=s,c=s,l,u=k,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ei=class extends Ti{constructor(e,t=v,n=301,r,i,a=s,o=s,c,l=k){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Di=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ki=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new Nt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ai=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ji=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new Nt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Mi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Pi(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Pi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ni(e){let t={};for(let n=0;n<e.length;n++){let r=Mi(e[n]);for(let e in r)t[e]=r[e]}return t}function Pi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ii(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var Li={clone:Mi,merge:Ni},Ri=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ri,this.fragmentShader=zi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=Fi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vi=class extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Hi=class extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ui=class extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ki=class extends Gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ji=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class extends Gi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Xi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Wi(t,this.TimeBufferType),this.values=Wi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wi(e.times,Array),values:Wi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case R:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth;break;case z:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return R;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return z}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Xi.prototype.ValueTypeName=``,Xi.prototype.TimeBufferType=Float32Array,Xi.prototype.ValueBufferType=Float32Array,Xi.prototype.DefaultInterpolation=R;var Zi=class extends Xi{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName=`bool`,Zi.prototype.ValueBufferType=Array,Zi.prototype.DefaultInterpolation=Pe,Zi.prototype.InterpolantFactoryMethodLinear=void 0,Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};Qi.prototype.ValueTypeName=`color`;var $i=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};$i.prototype.ValueTypeName=`number`;var ea=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ta=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ea(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName=`quaternion`,ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Xi{constructor(e,t,n){super(e,t,n)}};na.prototype.ValueTypeName=`string`,na.prototype.ValueBufferType=Array,na.prototype.DefaultInterpolation=Pe,na.prototype.InterpolantFactoryMethodLinear=void 0,na.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`vector`;var ia={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(aa(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!aa(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function aa(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var oa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},sa=class{constructor(e){this.manager=e===void 0?oa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ca=new WeakMap,la=class extends sa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ia.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ca.get(a);e===void 0&&(e=[],ca.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Xe(`img`);function s(){l(),t&&t(this);let n=ca.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ca.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),ia.remove(`image:${e}`);let n=ca.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ca.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ia.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ua=class extends sa{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new la(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},da=new H,fa=new Pt,pa=new H,ma=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,pa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(da,fa,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ha=new H,ga=new Nt,_a=new Nt,va=class extends ma{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lt*2*Math.atan(Math.tan(ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ha.x,ha.y).multiplyScalar(-e/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-e/ha.z)}getViewSize(e,t){return this.getViewBounds(e,ga,_a),t.subVectors(_a,ga)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ya=class extends ma{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ba=-90,xa=1,Sa=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new va(ba,xa,e,t);r.layers=this.layers,this.add(r);let i=new va(ba,xa,e,t);i.layers=this.layers,this.add(i);let a=new va(ba,xa,e,t);a.layers=this.layers,this.add(a);let o=new va(ba,xa,e,t);o.layers=this.layers,this.add(o);let s=new va(ba,xa,e,t);s.layers=this.layers,this.add(s);let c=new va(ba,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ca=class extends va{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},wa=`\\[\\]\\.:\\/`,Ta=RegExp(`[`+wa+`]`,`g`),Ea=`[^`+wa+`]`,Da=`[^`+wa.replace(`\\.`,``)+`]`,Oa=`((?:WC+[\\/:])*)`.replace(`WC`,Ea),ka=`(WCOD+)?`.replace(`WCOD`,Da),Aa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ea),ja=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ea),Ma=RegExp(`^`+Oa+ka+Aa+ja+`$`),Na=[`material`,`materials`,`bones`,`map`],Pa=class{constructor(e,t,n){let r=n||Fa.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Fa=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ta,``)}static parseTrackName(e){let t=Ma.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Na.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fa.Composite=Pa,Fa.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fa.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fa.prototype.GetterByBindingType=[Fa.prototype._getValue_direct,Fa.prototype._getValue_array,Fa.prototype._getValue_arrayElement,Fa.prototype._getValue_toArray],Fa.prototype.SetterByBindingTypeAndVersioning=[[Fa.prototype._setValue_direct,Fa.prototype._setValue_direct_setNeedsUpdate,Fa.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fa.prototype._setValue_array,Fa.prototype._setValue_array_setNeedsUpdate,Fa.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fa.prototype._setValue_arrayElement,Fa.prototype._setValue_arrayElement_setNeedsUpdate,Fa.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fa.prototype._setValue_fromArray,Fa.prototype._setValue_fromArray_setNeedsUpdate,Fa.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Ia(e,t,n,r){let i=La(r);switch(n){case E:return e*t;case ee:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case D:return e*t*3/i.components*i.byteLength;case O:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case N:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case pe:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case me:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case L:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function La(e){switch(e){case p:case m:return{byteLength:1,components:1};case g:case h:case b:return{byteLength:2,components:1};case x:case S:return{byteLength:2,components:4};case v:case _:case y:return{byteLength:4,components:1};case w:case T:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Ra(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function za(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ba={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Va={basic:{uniforms:Ni([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:Ba.meshbasic_vert,fragmentShader:Ba.meshbasic_frag},lambert:{uniforms:Ni([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Ba.meshlambert_vert,fragmentShader:Ba.meshlambert_frag},phong:{uniforms:Ni([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ba.meshphong_vert,fragmentShader:Ba.meshphong_frag},standard:{uniforms:Ni([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ba.meshphysical_vert,fragmentShader:Ba.meshphysical_frag},toon:{uniforms:Ni([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new K(0)}}]),vertexShader:Ba.meshtoon_vert,fragmentShader:Ba.meshtoon_frag},matcap:{uniforms:Ni([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:Ba.meshmatcap_vert,fragmentShader:Ba.meshmatcap_frag},points:{uniforms:Ni([q.points,q.fog]),vertexShader:Ba.points_vert,fragmentShader:Ba.points_frag},dashed:{uniforms:Ni([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ba.linedashed_vert,fragmentShader:Ba.linedashed_frag},depth:{uniforms:Ni([q.common,q.displacementmap]),vertexShader:Ba.depth_vert,fragmentShader:Ba.depth_frag},normal:{uniforms:Ni([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:Ba.meshnormal_vert,fragmentShader:Ba.meshnormal_frag},sprite:{uniforms:Ni([q.sprite,q.fog]),vertexShader:Ba.sprite_vert,fragmentShader:Ba.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ba.background_vert,fragmentShader:Ba.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Ba.backgroundCube_vert,fragmentShader:Ba.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ba.cube_vert,fragmentShader:Ba.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ba.equirect_vert,fragmentShader:Ba.equirect_frag},distance:{uniforms:Ni([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ba.distance_vert,fragmentShader:Ba.distance_frag},shadow:{uniforms:Ni([q.lights,q.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Ba.shadow_vert,fragmentShader:Ba.shadow_frag}};Va.physical={uniforms:Ni([Va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Ba.meshphysical_vert,fragmentShader:Ba.meshphysical_frag};var Ha={r:0,b:0,g:0},Ua=new tn,Wa=new U;Wa.set(-1,0,0,0,1,0,0,0,1);function Ga(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ni(new Oi(1,1,1),new Bi({name:`BackgroundCubeMaterial`,uniforms:Mi(Va.backgroundCube.uniforms),vertexShader:Va.backgroundCube.vertexShader,fragmentShader:Va.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ua.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wa),l.material.toneMapped=W.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ni(new Ai(2,2),new Bi({name:`BackgroundMaterial`,uniforms:Mi(Va.background.uniforms),vertexShader:Va.background.vertexShader,fragmentShader:Va.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ha,Ii(e)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ka(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function qa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ja(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ya(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vi,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Xa=4,Za=[.125,.215,.35,.446,.526,.582],Qa=20,$a=256,eo=new ya,to=new K,no=null,ro=0,io=0,ao=!1,oo=new H,so=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=oo}=i;no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(no,ro,io),this._renderer.xr.enabled=ao,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:u,minFilter:u,generateMipmaps:!1,type:b,format:O,colorSpace:Ve,depthBuffer:!1},r=lo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=co(r)),this._blurMaterial=po(r,e,t),this._ggxMaterial=fo(r,e,t)}return r}_compileMaterial(e){let t=new ni(new Nr,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,r,i){let a=new va(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(to),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Oi,new Wr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(to),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;uo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;uo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Xa?n-d+Xa:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,uo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,eo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,uo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,eo)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&V(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Qa-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Qa;m>Qa&&B(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qa}`);let h=[],g=0;for(let e=0;e<Qa;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];uo(t,3*v*(r>_-Xa?r-_+Xa:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,eo)}};function co(e){let t=[],n=[],r=[],i=e,a=e-Xa+1+Za.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Xa?s=Za[o-e+Xa-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),r.push(new ni(h,null)),i>Xa&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function lo(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function uo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function fo(e,t,n){return new Bi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:$a,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(e,t,n){let r=new Float32Array(Qa),i=new H(0,1,0);return new Bi({name:`SphericalGaussianBlur`,defines:{n:Qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mo(){return new Bi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ho(){return new Bi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ci(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oi(5,5,5),i=new Bi({name:`CubemapFromEquirect`,uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ni(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=u),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function vo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new _o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new so(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function yo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function bo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function xo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function So(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Co(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new $t(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Nt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function wo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var To={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Eo(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Ti(t,n):void 0}),s=new Qt(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}),c=new Nr;c.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let l=new Vi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ni(c,l),d=new ya(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},W.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=To[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Do=new Yt,Oo=new Ti(1,1),ko=new $t,Ao=new en,jo=new Ci,Mo=[],No=[],Po=new Float32Array(16),Fo=new Float32Array(9),Io=new Float32Array(4);function Lo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Mo[i];if(a===void 0&&(a=new Float32Array(i),Mo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ro(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function zo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Bo(e,t){let n=No[t];n===void 0&&(n=new Int32Array(t),No[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Vo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2fv(this.addr,t),zo(n,t)}}function Uo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ro(n,t))return;e.uniform3fv(this.addr,t),zo(n,t)}}function Wo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4fv(this.addr,t),zo(n,t)}}function Go(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Io.set(r),e.uniformMatrix2fv(this.addr,!1,Io),zo(n,r)}}function Ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Fo.set(r),e.uniformMatrix3fv(this.addr,!1,Fo),zo(n,r)}}function qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ro(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),zo(n,t)}else{if(Ro(n,r))return;Po.set(r),e.uniformMatrix4fv(this.addr,!1,Po),zo(n,r)}}function Jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2iv(this.addr,t),zo(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3iv(this.addr,t),zo(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4iv(this.addr,t),zo(n,t)}}function Qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ro(n,t))return;e.uniform2uiv(this.addr,t),zo(n,t)}}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ro(n,t))return;e.uniform3uiv(this.addr,t),zo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ro(n,t))return;e.uniform4uiv(this.addr,t),zo(n,t)}}function ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Oo.compareFunction=n.isReversedDepthBuffer()?518:515,a=Oo):a=Do,n.setTexture2D(t||a,i)}function rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ao,i)}function is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||jo,i)}function as(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ko,i)}function os(e){switch(e){case 5126:return Vo;case 35664:return Ho;case 35665:return Uo;case 35666:return Wo;case 35674:return Go;case 35675:return Ko;case 35676:return qo;case 5124:case 35670:return Jo;case 35667:case 35671:return Yo;case 35668:case 35672:return Xo;case 35669:case 35673:return Zo;case 5125:return Qo;case 36294:return $o;case 36295:return es;case 36296:return ts;case 35678:case 36198:case 36298:case 36306:case 35682:return ns;case 35679:case 36299:case 36307:return rs;case 35680:case 36300:case 36308:case 36293:return is;case 36289:case 36303:case 36311:case 36292:return as}}function ss(e,t){e.uniform1fv(this.addr,t)}function cs(e,t){let n=Lo(t,this.size,2);e.uniform2fv(this.addr,n)}function ls(e,t){let n=Lo(t,this.size,3);e.uniform3fv(this.addr,n)}function us(e,t){let n=Lo(t,this.size,4);e.uniform4fv(this.addr,n)}function ds(e,t){let n=Lo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fs(e,t){let n=Lo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ps(e,t){let n=Lo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ms(e,t){e.uniform1iv(this.addr,t)}function hs(e,t){e.uniform2iv(this.addr,t)}function gs(e,t){e.uniform3iv(this.addr,t)}function _s(e,t){e.uniform4iv(this.addr,t)}function vs(e,t){e.uniform1uiv(this.addr,t)}function ys(e,t){e.uniform2uiv(this.addr,t)}function bs(e,t){e.uniform3uiv(this.addr,t)}function xs(e,t){e.uniform4uiv(this.addr,t)}function Ss(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Oo:Do;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Cs(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ao,a[e])}function ws(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||jo,a[e])}function Ts(e,t,n){let r=this.cache,i=t.length,a=Bo(n,i);Ro(r,a)||(e.uniform1iv(this.addr,a),zo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ko,a[e])}function Es(e){switch(e){case 5126:return ss;case 35664:return cs;case 35665:return ls;case 35666:return us;case 35674:return ds;case 35675:return fs;case 35676:return ps;case 5124:case 35670:return ms;case 35667:case 35671:return hs;case 35668:case 35672:return gs;case 35669:case 35673:return _s;case 5125:return vs;case 36294:return ys;case 36295:return bs;case 36296:return xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ss;case 35679:case 36299:case 36307:return Cs;case 35680:case 36300:case 36308:case 36293:return ws;case 36289:case 36303:case 36311:case 36292:return Ts}}var Ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=os(t.type)}},Os=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Es(t.type)}},ks=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},As=/(\w+)(\])?(\[|\.)?/g;function js(e,t){e.seq.push(t),e.map[t.id]=t}function Ms(e,t,n){let r=e.name,i=r.length;for(As.lastIndex=0;;){let a=As.exec(r),o=As.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){js(n,l===void 0?new Ds(s,e,t):new Os(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ks(s),js(n,e)),n=e}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ms(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ps(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Fs=37297,Is=0;function Ls(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Rs=new U;function zs(e){W._getMatrix(Rs,W.workingColorSpace,e);let t=`mat3( ${Rs.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Bs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ls(e.getShaderSource(t),r)}else return i}function Vs(e,t){let n=zs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Hs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Us(e,t){let n=Hs[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ws=new H;function Gs(){return W.getLuminanceCoefficients(Ws),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ws.x.toFixed(4)}, ${Ws.y.toFixed(4)}, ${Ws.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ks(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ys).join(`
`)}function qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Js(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ys(e){return e!==``}function Xs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qs=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(e){return e.replace(Qs,tc)}var ec=new Map;function tc(e,t){let n=Ba[t];if(n===void 0){let e=ec.get(t);if(e!==void 0)n=Ba[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return $s(n)}var nc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(e){return e.replace(nc,ic)}function ic(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ac(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var oc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function sc(e){return oc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var cc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function lc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:cc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var uc={302:`ENVMAP_MODE_REFRACTION`};function dc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:uc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var fc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function pc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:fc[e.combine]||`ENVMAP_BLENDING_NONE`}function mc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function hc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=sc(n),l=lc(n),u=dc(n),d=pc(n),f=mc(n),p=Ks(n),m=qs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(g=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ys).join(`
`),_=[ac(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ba.tonemapping_pars_fragment,n.toneMapping===0?``:Us(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ba.colorspace_pars_fragment,Vs(`linearToOutputTexel`,n.outputColorSpace),Gs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ys).join(`
`)),o=$s(o),o=Xs(o,n),o=Zs(o,n),s=$s(s),s=Xs(s,n),s=Zs(s,n),o=rc(o),s=rc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ps(i,i.VERTEX_SHADER,y),S=Ps(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Bs(i,x,`vertex`),n=Bs(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ns(i,h),T=Js(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Fs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Is++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var gc=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vc(e),t.set(e,n)),n}},vc=class{constructor(e){this.id=gc++,this.code=e,this.usedTimes=0}};function yc(e){return e===1030||e===37490||e===36285}function bc(e,t,n,r,i,a){let o=new pn,s=new _c,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Va[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,P=i.dispersion>0,me=i.iridescence>0,F=i.sheen>0,he=i.transmission>0,ge=fe&&!!i.anisotropyMap,_e=pe&&!!i.clearcoatMap,ve=pe&&!!i.clearcoatNormalMap,ye=pe&&!!i.clearcoatRoughnessMap,be=me&&!!i.iridescenceMap,I=me&&!!i.iridescenceThicknessMap,xe=F&&!!i.sheenColorMap,Se=F&&!!i.sheenRoughnessMap,Ce=!!i.specularMap,we=!!i.specularColorMap,Te=!!i.specularIntensityMap,Ee=he&&!!i.transmissionMap,De=he&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,L=!!i.extensions,Me=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&yc(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:ge,clearcoat:pe,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:P,iridescence:me,iridescenceMap:be,iridescenceThicknessMap:I,sheen:F,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:Ce,specularColorMap:we,specularIntensityMap:Te,transmission:he,transmissionMap:Ee,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:ue&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:I&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(i.sheenRoughnessMap.channel),specularMapUv:Ce&&m(i.specularMap.channel),specularColorMapUv:we&&m(i.specularColorMap.channel),specularIntensityMapUv:Te&&m(i.specularIntensityMap.channel),transmissionMapUv:Ee&&m(i.transmissionMap.channel),thicknessMapUv:De&&m(i.thicknessMap.channel),alphaMapUv:ke&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||ke),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:L&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(L&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Va[t];n=Li.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new hc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function xc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Sc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function wc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Sc),r.length>1&&r.sort(t||Cc),i.length>1&&i.sort(t||Cc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Tc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new wc,e.set(t,[i])):n>=r.length?(i=new wc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ec(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new H,color:new K};break;case`SpotLight`:n={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function Dc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Oc=0;function kc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ac(e){let t=new Ec,n=Dc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(kc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Oc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function jc(e){let t=new Ac(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Mc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new jc(e),t.set(n,[a])):r>=i.length?(a=new jc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Ic=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lc=new tn,Rc=new H,zc=new H;function Bc(e,t,n){let r=new Si,i=new Nt,a=new Nt,o=new Xt,c=new Hi,l=new Ui,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Nc,fragmentShader:Pc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Nr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ni(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,d=t.length;l<d;l++){let d=t[l],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(i.x,i.y,{format:j,type:b,minFilter:u,magFilter:u,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ti(i.x,i.y,y),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=k,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s}else d.isPointLight?(p.map=new _o(i.x),p.map.depthTexture=new Ei(i.x,v)):(p.map=new Qt(i.x,i.y),p.map.depthTexture=new Ti(i.x,i.y,v)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=k,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=u,p.map.depthTexture.magFilter=u):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Rc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Rc),zc.copy(e.position),zc.add(Fc[t]),e.up.copy(Ic[t]),e.lookAt(zc),e.updateMatrixWorld(),n.makeTranslation(-Rc.x,-Rc.y,-Rc.z),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,c,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(l,d,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qt(i.x,i.y,{format:j,type:b})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Vc(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Xt().fromArray(ie),se=new Xt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),ue(e.CULL_FACE),he(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function P(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let F={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(F[r],F[i],F[o],F[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(j&&e.lineWidth(t),k=t)}function be(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function I(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+te-1),N!==t&&(e.activeTexture(t),N=t)}function Se(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+te-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Ce(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:P,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:I,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Le}}function Hc(e,t,n,r,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Nt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?He:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ue(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let P={[i]:e.REPEAT,[a]:e.CLAMP_TO_EDGE,[o]:e.MIRRORED_REPEAT},me={[s]:e.NEAREST,[c]:e.NEAREST_MIPMAP_NEAREST,[l]:e.NEAREST_MIPMAP_LINEAR,[u]:e.LINEAR,[d]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},F={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,P[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,P[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,P[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,F[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,p.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=le(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,i,a){let o=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(o=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(o=e.TEXTURE_3D);let s=ge(t,i),c=i.source;n.bindTexture(o,t.__webglTexture,e.TEXTURE0+a);let l=r.get(c);if(c.version!==l.__version||s===!0){if(n.activeTexture(e.TEXTURE0+a),!(typeof ImageBitmap<`u`&&i.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=i.colorSpace===``?null:W.getPrimaries(i.colorSpace),a=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);let t=T(i.image,!1,p.maxTextureSize);t=Me(i,t);let r=m.convert(i.format,i.colorSpace),u=m.convert(i.type),d=k(i.internalFormat,r,u,i.normalized,i.colorSpace,i.isVideoTexture);he(o,i);let f,h=i.mipmaps,g=i.isVideoTexture!==!0,_=l.__version===void 0||s===!0,v=c.dataReady,y=te(i,t);if(i.isDepthTexture)d=ee(i.format===A,i.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,null));else if(i.isDataTexture)if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data);i.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&ve(i,t,r,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,t.data);else if(i.isCompressedTexture)if(i.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(f=h[a],i.format!==1023)if(r!==null)if(g){if(v)if(i.layerUpdates.size>0){let t=Ia(f.width,f.height,i.format,i.type);for(let o of i.layerUpdates){let i=f.data.subarray(o*t/f.data.BYTES_PER_ELEMENT,(o+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,f.width,f.height,1,r,i)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,f.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,f.data,0,0);else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,r,u,f.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)f=h[t],i.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}else if(i.isDataArrayTexture)if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v)if(i.layerUpdates.size>0){let a=Ia(t.width,t.height,i.format,i.type);for(let o of i.layerUpdates){let i=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,u,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,r,u,t.data);else if(i.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,r,u,t.data);else if(i.isFramebufferTexture){if(_)if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,i,a,0,r,u,null),i>>=1,a>>=1}}else if(i.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(i),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,u,f):n.texImage2D(e.TEXTURE_2D,t,d,r,u,f);i.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,r,u,t);E(i)&&D(o),l.__version=c.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function be(t,i,a){if(i.image.length!==6)return;let o=ge(t,i),s=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+a);let c=r.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+a);let t=W.getPrimaries(W.workingColorSpace),r=i.colorSpace===``?null:W.getPrimaries(i.colorSpace),l=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(i.image[e],!0,p.maxCubemapSize):f[e]=d?i.image[e].image:i.image[e],f[e]=Me(i,f[e]);let h=f[0],g=m.convert(i.format,i.colorSpace),_=m.convert(i.type),v=k(i.internalFormat,g,_,i.normalized,i.colorSpace),y=i.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=te(i,h);he(e.TEXTURE_CUBE_MAP,i);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let a=C[r];i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(C=i.mipmaps,y&&b){C.length>0&&S++;let t=Ne(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(i)&&D(e.TEXTURE_CUBE_MAP),c.__version=s.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function I(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Ae(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,j)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else ue(i.depthTexture,0);let c=s.__webglTexture,l=Ae(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)je(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&I(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function Te(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,M);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&je(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)I(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else I(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),he(l,o),I(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)I(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else I(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(De.push(c),Oe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=ue,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=I,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Uc(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Wc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Di(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bi({vertexShader:Wc,fragmentShader:Gc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Kc,_={},y=t.getContextAttributes(),b=null,x=null,S=[],w=[],T=new Nt,E=null,D=new va;D.viewport=new Xt;let ee=new va;ee.viewport=new Xt;let te=[D,ee],j=new Ca,M=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new Mn,S[e]=t),t.getHandSpace()};function N(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}M=null,ne=null,g.reset();for(let e in _)delete _[e];e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?A:k,a=y.stencil?C:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qt(d.textureWidth,d.textureHeight,{format:O,type:p,depthTexture:new Ti(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Qt(f.framebufferWidth,f.framebufferHeight,{format:O,type:p,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ae=new H,oe=new H;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=ee.near=D.near=t,j.far=ee.far=D.far=n,(M!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,ne=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,ee.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ce(j,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(j,D,ee):j.projectionMatrix.copy(D.projectionMatrix),le(e,j,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return _[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=te[n];o===void 0&&(o=new va,o.layers.enable(n),o.viewport=new Xt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Di,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new Ra;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Jc=new tn,Yc=new U;Yc.set(-1,0,0,0,1,0,0,0,1);function Xc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ii(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Jc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Yc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Zc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Qc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$c=null;function el(){return $c===null&&($c=new ai(Qc,16,16,j,b),$c.name=`DFG_LUT`,$c.minFilter=u,$c.magFilter=u,$c.wrapS=a,$c.wrapT=a,$c.generateMipmaps=!1,$c.needsUpdate=!0),$c}var tl=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=p}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let _=m,y=new Set([ne,M,te]),w=new Set([p,v,g,C,x,S]),T=new Uint32Array(4),E=new Int32Array(4),D=new H,O=null,k=null,A=[],ee=[],j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Be;let ce=0,le=0,ue=null,de=-1,fe=null,pe=new Xt,P=new Xt,me=null,F=new K(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,I=new Xt(0,0,ge,_e),xe=new Xt(0,0,ge,_e),Se=!1,Ce=new Si,we=!1,Te=!1,Ee=new tn,De=new H,Oe=new Xt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return ue===null?ve:1}let L=n;function Me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw V(`WebGLRenderer: `+e.message),e}let Ne,Pe,R,Fe,z,Ie,Le,Re,ze,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,$e,tt,nt,it;function at(){Ne=new yo(L),Ne.init(),tt=new Uc(L,Ne),Pe=new Ja(L,Ne,e,tt),R=new Vc(L,Ne),Pe.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),ae=L.createFramebuffer(),oe=L.createFramebuffer(),se=L.createFramebuffer(),Fe=new So(L),z=new xc,Ie=new Hc(L,Ne,R,z,Pe,tt,Fe),Le=new vo(N),Re=new za(L),nt=new Ka(L,Re),ze=new bo(L,Re,Fe,nt),Ve=new wo(L,ze,Re,nt,Fe),Xe=new Co(L,Pe,Ie),Ke=new Ya(z),He=new bc(N,Le,Ne,Pe,nt,Ke),Ue=new Xc(N,z),We=new Tc,Ge=new Mc(Ne),Ye=new Ga(N,Le,R,Ve,h,s),Je=new Bc(N,Ve,Pe),it=new Zc(L,Fe,Pe,R),Qe=new qa(L,Ne,Fe),$e=new xo(L,Ne,Fe),Fe.programs=He.programs,N.capabilities=Pe,N.extensions=Ne,N.properties=z,N.renderLists=We,N.shadowMap=Je,N.state=R,N.info=Fe}at(),_!==1009&&(j=new Eo(_,t.width,t.height,o,r,i));let ot=new qc(N,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){B(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009){V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}j.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(I)},this.setViewport=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),R.viewport(pe.copy(I).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(P.copy(xe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ue!==null){let t=ue.texture.format;e=y.has(t)}if(e){let e=ue.texture.type,t=w.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ye.dispose(),We.dispose(),Ge.dispose(),z.dispose(),Le.dispose(),Ve.dispose(),nt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),re=!0}function ct(){et(`WebGLRenderer: Context Restored.`),re=!1;let e=Fe.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;at(),Fe.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),z.remove(e)}function ft(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Re.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh)if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,n),e.side=0,e.needsUpdate=!0,wt(e,t,n),e.side=2):wt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Ge.get(n),k.init(t),ee.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];pt(a,n,e),r.add(a)}else pt(t,n,e),r.add(t)}),k=ee.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){z.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Ra;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=j!==null&&(ue===null||n)&&j.begin(N,ue);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,ue),k=Ge.get(e,ee.length),k.init(t),k.state.textureUnits=Ie.getTextureUnits(),ee.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,qe,t.reversedDepth),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),O=We.get(e,A.length),O.init(),A.push(O),ot.enabled===!0&&ot.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(ye,be,t.reversedDepth),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Ye.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Ke.beginShadows();let i=k.state.shadowsArray;if(Je.render(i,e,t),we===!0&&Ke.endShadows(),(r&&j.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Ye.render(e),bt(O,e,t)}ue!==null&&le===0&&(Ie.updateMultisampleRenderTarget(ue),Ie.updateRenderTargetMipmap(ue)),r&&j.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),nt.resetDefaultState(),de=-1,fe=null,ee.pop(),ee.length>0?(k=ee[ee.length-1],Ie.setTextureUnits(k.state.textureUnits),we===!0&&Ke.setGlobalState(N.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,ie!==null&&ie.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Ce.intersectsSprite(e)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let t=Ve.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Ce.intersectsObject(e))){let t=Ve.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Oe.z,o)}}else i.visible&&O.push(e,t,i,n,Oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&Ke.setGlobalState(N.clippingPlanes,n),r&&R.viewport(pe.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?b:p,minFilter:f,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(F),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&Ye.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&Ke.setGlobalState(N.clippingPlanes,r),St(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(F,he),d!==void 0&&(r.viewport=d),N.toneMapping=u}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=He.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Et(e,s),r.needsLights=At(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ns.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=ke),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ue===null?N.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==fe)){let t=e===fe&&r.id===de;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=Dt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,Ie),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,Ie),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,Ie));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=el()),C){if(T.setValue(L,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ue.refreshFogUniforms(E,a),Ue.refreshMaterialUniforms(E,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Ns.upload(L,Tt(v),E,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ns.upload(L,Tt(v),E,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function At(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){ue=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),P.copy(e.scissor),me=e.scissorTest,R.viewport(pe),R.scissor(P),R.setScissorTest(me),de=-1;return}else if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),P.copy(e.scissor),me=e.scissorTest}else pe.copy(I).multiplyScalar(ve).floor(),P.copy(xe).multiplyScalar(ve).floor(),me=Se;if(n!==0&&(r=ae),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(pe),R.scissor(P),R.setScissorTest(me),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}de=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(c)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Pe.textureTypeReadable(l)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=ue===null?null:z.get(ue).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s),!Pe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Pe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0);let f=ue===null?null:z.get(ue).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,f);let p=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rt(L,p,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,d),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.deleteBuffer(d),L.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,oe),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){ce=0,le=0,ue=null,R.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},nl=[`food-hospitality`,`real-estate`,`technology-companies`,`agriculture-commodities`,`culture-collectibles`,`public-community`,`trade-industry-transport`,`finance-energy-infrastructure`],rl={"food-hospitality":{id:`food-hospitality`,name:`Food & Hospitality`,pulseColor:`#D98273`,particleStyle:`tiny coral steam curls and sesame-shaped flecks`,pickupTone:`warm electric-piano sixth`},"real-estate":{id:`real-estate`,name:`Real Estate`,pulseColor:`#77AEC7`,particleStyle:`sky-blue window squares and soft chalk motes`,pickupTone:`two airy glass notes`},"technology-companies":{id:`technology-companies`,name:`Technology & Fictional Companies`,pulseColor:`#78B99B`,particleStyle:`mint paper sparks joined by brief dotted trails`,pickupTone:`muted wooden mallet triplet`},"agriculture-commodities":{id:`agriculture-commodities`,name:`Agriculture & Commodities`,pulseColor:`#D4AA55`,particleStyle:`golden leaf specks and drifting seed husks`,pickupTone:`soft kalimba fourth`},"culture-collectibles":{id:`culture-collectibles`,name:`Culture & Collectibles`,pulseColor:`#A28AB7`,particleStyle:`lavender brush dabs and translucent paper stars`,pickupTone:`felt-piano arpeggio`},"public-community":{id:`public-community`,name:`Public Spaces & Community Services`,pulseColor:`#5F9E98`,particleStyle:`teal leaf rings and tiny lantern glows`,pickupTone:`gentle marimba pair`},"trade-industry-transport":{id:`trade-industry-transport`,name:`Trade, Industry & Transportation`,pulseColor:`#CE874E`,particleStyle:`warm-orange rivet dots and paper ribbon trails`,pickupTone:`hollow woodblock and brushed chime`},"finance-energy-infrastructure":{id:`finance-energy-infrastructure`,name:`Finance, Energy & Infrastructure`,pulseColor:`#496A91`,particleStyle:`deep-blue ripple lines and slow silver motes`,pickupTone:`low vibraphone fifth`}};function J(e){return{...e,requiredPieces:3,pulseColor:rl[e.category].pulseColor}}var Y=(e,t,n,r=`all-day`,i=[8,24])=>({roles:e,activity:t,density:n,activePeriod:r,lingerSeconds:i}),X=(e,t,n,r=`compact`)=>({width:e,depth:t,clearingRadius:n,shape:r}),Z=(e,t,n=`standard`,r=3,i=!1)=>({material:e,entries:t,width:n,connectionPriority:r,plazaAtEntrance:i}),Q=(e,t=`balanced`,n=`warm`,r=`soft grass feathering`)=>({items:e,density:t,lightTemperature:n,edgeTreatment:r}),il=(e,t,n,r)=>({companyIcon:e,iconShape:t,minimumPrice:n,maximumPrice:r}),al=[J({id:`sunbeam-cafe`,name:`Sunbeam Café`,category:`food-hospitality`,requiredPieces:3,constructionStages:[`painted foundation and counter`,`cream awning and round windows`,`terrace tables, pastries, and steaming cups`],finishedAppearance:`A butter-yellow corner café with a coral awning, curved glass, and three tiny terrace tables.`,passiveBudgetPerMinute:4,discovery:`crowd`,discoveryOrder:1,ambientPopulationBehavior:Y([`barista`,`neighbor`,`reader`],`sip, read, and exchange small waves at the terrace`,`lively`,`all-day`,[10,30]),mapFootprint:X(5,4,5),pathPreferences:Z(`cream-pavers`,[`south`,`east`],`standard`,5,!0),decorationPreferences:Q([`terracotta herbs`,`striped awning`,`chalkboard`,`sparrows`],`lush`,`candle`)}),J({id:`hearthside-bakery`,name:`Hearthside Bakery`,category:`food-hospitality`,requiredPieces:4,constructionStages:[`brick oven slab`,`plaster walls and copper flue`,`bread window and flour-dusted counter`,`flower boxes and morning bread baskets`],finishedAppearance:`A round-doored bakery in warm plaster, with a copper chimney and bread glowing behind low windows.`,passiveBudgetPerMinute:5,discovery:`crowd`,discoveryOrder:2,ambientPopulationBehavior:Y([`baker`,`delivery cyclist`,`breakfast visitor`],`carry loaves, queue briefly, and chat beside the warm window`,`lively`,`morning`,[8,22]),mapFootprint:X(5,4,5),pathPreferences:Z(`warm-brick`,[`south`],`standard`,5,!0),decorationPreferences:Q([`wheat pots`,`bread crates`,`copper lamp`,`gingham cloth`],`balanced`,`candle`)}),J({id:`noodle-nook`,name:`Noodle Nook`,category:`food-hospitality`,requiredPieces:4,constructionStages:[`tiled kitchen pad`,`mint timber frame`,`open serving hatch`,`paper lanterns and little stools`],finishedAppearance:`A tiny mint noodle shop with an open hatch, hand-painted bowls, and bobbing amber lanterns.`,passiveBudgetPerMinute:6,discovery:`crowd`,discoveryOrder:5,ambientPopulationBehavior:Y([`cook`,`courier`,`diner`],`twirl noodles at the counter and carry bowls to shaded stools`,`lively`,`evening`,[9,25]),mapFootprint:X(4,4,4.5),pathPreferences:Z(`cream-pavers`,[`west`,`south`],`narrow`,4,!1),decorationPreferences:Q([`paper lanterns`,`stacked bowls`,`bamboo tub`,`menu tiles`],`lush`,`candle`)}),J({id:`olive-table`,name:`The Olive Table`,category:`food-hospitality`,requiredPieces:5,constructionStages:[`stone dining-room outline`,`sage stucco walls`,`arched kitchen and tiled roof`,`pergola, long table, and olive planters`],finishedAppearance:`A sage restaurant wrapped around a shaded communal table, with blue crockery and a vine-laced pergola.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:9,ambientPopulationBehavior:Y([`chef`,`server`,`family diner`],`share plates beneath the pergola and pause for after-meal conversation`,`lively`,`evening`,[15,38]),mapFootprint:X(7,6,6),pathPreferences:Z(`garden-stone`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`olive tubs`,`linen parasols`,`ceramic jugs`,`climbing vine`],`lush`,`candle`)}),J({id:`bluebell-tea-room`,name:`Bluebell Tea Room`,category:`food-hospitality`,requiredPieces:5,constructionStages:[`porcelain-blue floor`,`bowed timber walls`,`glass conservatory roof`,`tea cart and bluebell garden`],finishedAppearance:`A curved glass tea room with powder-blue trim, lace curtains, and a pocket garden of bluebells.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:13,ambientPopulationBehavior:Y([`tea keeper`,`gardener`,`quiet visitor`],`pour tea slowly, sketch flowers, and stroll the glasshouse`,`gentle`,`day`,[14,34]),mapFootprint:X(6,5,5.5,`courtyard`),pathPreferences:Z(`garden-stone`,[`west`,`south`],`narrow`,3,!1),decorationPreferences:Q([`bluebells`,`porcelain pots`,`lace curtains`,`bird bath`],`lush`,`warm`)}),J({id:`dockside-taco-kitchen`,name:`Dockside Taco Kitchen`,category:`food-hospitality`,requiredPieces:6,constructionStages:[`painted deck`,`coral kitchen walls`,`fold-up counter and canopy`,`planters, stools, and enamel serving trays`],finishedAppearance:`A cheerful coral kitchen on a low timber deck, trimmed with aqua tiles and herb-filled cans.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:18,ambientPopulationBehavior:Y([`grill cook`,`dock worker`,`street diner`],`lean on the rail, share quick meals, and return trays to the hatch`,`lively`,`day`,[7,20]),mapFootprint:X(6,5,5.5),pathPreferences:Z(`boardwalk`,[`north`,`west`],`standard`,3,!0),decorationPreferences:Q([`enamel signs`,`lime tubs`,`canvas canopy`,`rope rail`],`balanced`,`warm`,`weathered boardwalk edge`)}),J({id:`orchard-inn`,name:`Orchard Inn`,category:`food-hospitality`,requiredPieces:7,constructionStages:[`stone cellar`,`timber guest-room frame`,`two gabled floors`,`apple-red shutters and porch`,`orchard yard and luggage bench`],finishedAppearance:`A small timber inn with apple-red shutters, three cozy dormers, and a porch facing a miniature orchard.`,passiveBudgetPerMinute:12,discovery:`crowd`,discoveryOrder:25,ambientPopulationBehavior:Y([`innkeeper`,`traveler`,`orchard worker`],`roll tiny cases to the porch and linger over breakfast under apple trees`,`gentle`,`all-day`,[18,42]),mapFootprint:X(8,7,7,`courtyard`),pathPreferences:Z(`soft-gravel`,[`south`,`east`],`standard`,3,!0),decorationPreferences:Q([`apple trees`,`luggage cart`,`porch chairs`,`rain barrel`],`lush`,`candle`,`low orchard hedge`)}),J({id:`moonrise-bistro`,name:`Moonrise Rooftop Bistro`,category:`food-hospitality`,requiredPieces:8,constructionStages:[`rounded ground floor`,`curved stair tower`,`second-floor kitchen`,`roof terrace rail`,`moon lamps and dining canopy`],finishedAppearance:`A two-story plum-and-cream bistro crowned by a quiet rooftop terrace and round moonlike lamps.`,passiveBudgetPerMinute:15,discovery:`crowd`,discoveryOrder:34,ambientPopulationBehavior:Y([`host`,`musician`,`evening diner`],`climb to the terrace, dine under lamps, and listen to soft acoustic sets`,`lively`,`evening`,[18,44]),mapFootprint:X(7,6,6),pathPreferences:Z(`civic-tile`,[`south`,`west`],`broad`,3,!0),decorationPreferences:Q([`moon lamps`,`rooftop herbs`,`canvas canopy`,`menu pedestal`],`balanced`,`candle`)}),J({id:`lantern-market-hall`,name:`Lantern Market Hall`,category:`food-hospitality`,requiredPieces:10,constructionStages:[`broad market slab`,`timber arcade`,`high clerestory roof`,`produce bays`,`communal tables and hanging lantern canopy`],finishedAppearance:`An airy ochre market hall with open arches, colorful food bays, long tables, and dozens of softly swaying lanterns.`,passiveBudgetPerMinute:20,discovery:`crowd`,discoveryOrder:47,ambientPopulationBehavior:Y([`stall keeper`,`shopper`,`busker`,`porter`],`browse looping stall routes, rest at long tables, and carry paper parcels away`,`lively`,`day`,[12,36]),mapFootprint:X(12,9,9,`linear`),pathPreferences:Z(`warm-brick`,[`north`,`east`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`produce baskets`,`cloth banners`,`lantern canopy`,`water trough`],`lush`,`candle`,`brick planter edge`)}),J({id:`wally-world-hotel`,name:`Wally World Grand Hotel`,category:`food-hospitality`,requiredPieces:12,constructionStages:[`curved lobby foundation`,`arcaded ground floor`,`first guest-room wing`,`second guest-room wing`,`copper roof and central cupola`,`garden court, bell desk, and lit windows`],finishedAppearance:`A gracious cream hotel with coral arcades, a sea-green copper roof, rounded wings, and a lamp-filled garden court.`,passiveBudgetPerMinute:28,discovery:`crowd`,discoveryOrder:63,ambientPopulationBehavior:Y([`concierge`,`guest`,`porter`,`garden visitor`],`arrive with luggage, cross the lobby court, and relax on deep porch chairs`,`lively`,`all-day`,[20,50]),mapFootprint:X(15,12,11,`courtyard`),pathPreferences:Z(`civic-tile`,[`south`,`east`,`west`],`broad`,5,!0),decorationPreferences:Q([`topiary elephants`,`luggage cart`,`copper lamps`,`fountain court`],`lush`,`candle`,`low cream balustrade`)}),J({id:`maple-row-townhomes`,name:`Maple Row Townhomes`,category:`real-estate`,requiredPieces:4,constructionStages:[`three garden plots`,`three slim timber frames`,`painted façades and pitched roofs`,`stoops, mailboxes, and maple saplings`],finishedAppearance:`Three mismatched pastel townhomes with tiny stoops, shared side gardens, and young maple trees.`,passiveBudgetPerMinute:6,discovery:`crowd`,discoveryOrder:4,ambientPopulationBehavior:Y([`resident`,`dog walker`,`neighbor`],`water stoop plants, collect mail, and cross between neighboring doors`,`gentle`,`all-day`,[9,28]),mapFootprint:X(8,5,6,`linear`),pathPreferences:Z(`cream-pavers`,[`south`],`standard`,4,!1),decorationPreferences:Q([`maple saplings`,`painted mailboxes`,`stoop pots`,`laundry line`],`lush`,`warm`,`low picket fence`)}),J({id:`skyblue-apartments`,name:`Skyblue Apartments`,category:`real-estate`,requiredPieces:6,constructionStages:[`shared lobby slab`,`ground-floor frame`,`first apartment floor`,`second apartment floor`,`blue cornice and rooftop laundry`,`entry garden and lit balconies`],finishedAppearance:`A softly rounded blue apartment house with cream balconies, rooftop laundry, and plants in every other window.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:8,ambientPopulationBehavior:Y([`resident`,`visitor`,`building keeper`],`enter with shopping bags, greet from balconies, and tend the shared garden`,`lively`,`all-day`,[10,30]),mapFootprint:X(8,7,7),pathPreferences:Z(`cream-pavers`,[`south`,`east`],`standard`,4,!0),decorationPreferences:Q([`balcony plants`,`bicycle rack`,`laundry line`,`lobby lamp`],`balanced`,`warm`,`rounded hedge pockets`)}),J({id:`courtyard-homes`,name:`Clover Courtyard Homes`,category:`real-estate`,requiredPieces:6,constructionStages:[`four corner foundations`,`paired cottage walls`,`green roofs and chimneys`,`central path ring`,`clover lawn and shared picnic table`],finishedAppearance:`Four tiny cream cottages facing a clover-shaped common lawn with a shared picnic table.`,passiveBudgetPerMinute:11,discovery:`crowd`,discoveryOrder:15,ambientPopulationBehavior:Y([`resident`,`child`,`neighbor`],`cross the common lawn, share tea, and pause around the picnic table`,`gentle`,`all-day`,[14,38]),mapFootprint:X(10,9,8,`courtyard`),pathPreferences:Z(`garden-stone`,[`north`,`south`],`standard`,3,!0),decorationPreferences:Q([`clover lawn`,`picnic table`,`shared herb beds`,`birdhouses`],`lush`,`warm`,`woven willow fence`)}),J({id:`canal-lofts`,name:`Canal Lofts`,category:`real-estate`,requiredPieces:7,constructionStages:[`brick warehouse base`,`tall arched first floor`,`loft window floor`,`sawtooth roof`,`canal balconies and mooring steps`],finishedAppearance:`A converted red-brick warehouse with huge arched windows, mint balconies, and little steps touching the canal.`,passiveBudgetPerMinute:13,discovery:`crowd`,discoveryOrder:23,ambientPopulationBehavior:Y([`resident`,`paddler`,`artist`],`carry canvases upstairs, watch canal boats, and sit on waterside steps`,`gentle`,`evening`,[12,35]),mapFootprint:X(9,7,7,`linear`),pathPreferences:Z(`boardwalk`,[`east`,`west`],`standard`,3,!1),decorationPreferences:Q([`mooring posts`,`window plants`,`folding chairs`,`reed tubs`],`balanced`,`warm`,`canal stone retaining edge`)}),J({id:`garden-apartments`,name:`Fern Garden Apartments`,category:`real-estate`,requiredPieces:8,constructionStages:[`horseshoe foundation`,`garden-level homes`,`two curved residential floors`,`leaf-green roofline`,`central fern court and balcony vines`],finishedAppearance:`A horseshoe-shaped apartment garden in dusty rose and cream, its balconies softened by trailing ferns.`,passiveBudgetPerMinute:15,discovery:`crowd`,discoveryOrder:28,ambientPopulationBehavior:Y([`resident`,`gardener`,`courier`],`follow the court loop, trim ferns, and exchange parcels by the arch`,`lively`,`day`,[10,32]),mapFootprint:X(11,10,9,`courtyard`),pathPreferences:Z(`garden-stone`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`tree ferns`,`balcony vines`,`stone basin`,`wood benches`],`lush`,`warm`,`deep planted border`)}),J({id:`sunroom-cooperative`,name:`Sunroom Cooperative`,category:`real-estate`,requiredPieces:8,constructionStages:[`shared-house foundation`,`cream masonry shell`,`three residential wings`,`glass sunroom spine`,`solar roof and common dining garden`],finishedAppearance:`Three modest homes joined by a glowing glass sunroom, with a communal table beneath a shallow solar roof.`,passiveBudgetPerMinute:16,discovery:`crowd`,discoveryOrder:31,ambientPopulationBehavior:Y([`resident`,`cook`,`gardener`],`move between shared rooms, prepare communal meals, and tend the edible garden`,`gentle`,`all-day`,[16,44]),mapFootprint:X(12,8,8,`linear`),pathPreferences:Z(`cream-pavers`,[`north`,`south`],`standard`,3,!0),decorationPreferences:Q([`solar awning`,`edible garden`,`long table`,`watering cans`],`lush`,`warm`,`mixed herb hedge`)}),J({id:`townhouse-crescent`,name:`Poppy Townhouse Crescent`,category:`real-estate`,requiredPieces:9,constructionStages:[`curved row foundation`,`five ground-floor shells`,`five upper floors`,`alternating roofs and dormers`,`crescent path`,`poppy green and front-door details`],finishedAppearance:`A graceful crescent of five narrow townhouses in faded peach, blue, oat, sage, and lilac.`,passiveBudgetPerMinute:18,discovery:`crowd`,discoveryOrder:40,ambientPopulationBehavior:Y([`resident`,`neighbor`,`postal carrier`],`walk the crescent, stop at bright doors, and gather beside the poppy green`,`lively`,`all-day`,[10,30]),mapFootprint:X(14,8,9,`courtyard`),pathPreferences:Z(`warm-brick`,[`south`,`east`,`west`],`standard`,4,!0),decorationPreferences:Q([`poppies`,`door knockers`,`boot scrapers`,`crescent bench`],`lush`,`warm`,`wrought-iron garden edge`)}),J({id:`bricklane-offices`,name:`Bricklane Offices`,category:`real-estate`,requiredPieces:10,constructionStages:[`brick podium`,`arched lobby`,`first office floor`,`second office floor`,`clock cornice`,`courtyard trees and bicycle court`],finishedAppearance:`A compact brick office block with broad factory windows, a corner clock, and a leafy bicycle court.`,passiveBudgetPerMinute:22,discovery:`crowd`,discoveryOrder:49,ambientPopulationBehavior:Y([`office worker`,`courier`,`café visitor`],`arrive by bicycle, cross the lobby, and take lunch beneath court trees`,`lively`,`day`,[7,25]),mapFootprint:X(11,9,8),pathPreferences:Z(`warm-brick`,[`south`,`west`],`broad`,4,!0),decorationPreferences:Q([`bicycle court`,`clock`,`planter trees`,`parcel cart`],`balanced`,`neutral`,`low brick seat wall`)}),J({id:`harbor-residences`,name:`Harbor Residences`,category:`real-estate`,requiredPieces:12,constructionStages:[`waterside piling deck`,`two lobby cores`,`lower residential terraces`,`upper residential terraces`,`wave-form roofs`,`promenade balconies and reed gardens`],finishedAppearance:`Two terraced sea-blue residence blocks with wave-like roofs and balconies stepping toward the water.`,passiveBudgetPerMinute:27,discovery:`crowd`,discoveryOrder:61,ambientPopulationBehavior:Y([`resident`,`jogger`,`boat watcher`],`follow the promenade, pause at railings, and carry groceries to stepped lobbies`,`lively`,`all-day`,[10,32]),mapFootprint:X(15,11,10,`linear`),pathPreferences:Z(`boardwalk`,[`east`,`west`,`south`],`broad`,4,!0),decorationPreferences:Q([`reed gardens`,`promenade lights`,`deck chairs`,`life-ring cabinet`],`balanced`,`warm`,`timber-and-rope waterside rail`)}),J({id:`hilltop-mixed-use`,name:`Hilltop Mixed-Use House`,category:`real-estate`,requiredPieces:14,constructionStages:[`stepped hill foundation`,`arcaded shop floor`,`first home terrace`,`second home terrace`,`corner tower`,`green roof`,`public steps, shops, and overlook gardens`],finishedAppearance:`A large stepped cream-and-ochre building where tiny shops, planted apartment terraces, and a corner lookout share one hill.`,passiveBudgetPerMinute:34,discovery:`crowd`,discoveryOrder:71,ambientPopulationBehavior:Y([`resident`,`shopkeeper`,`visitor`,`gardener`],`climb public steps, browse ground shops, and rest at the planted overlook`,`lively`,`all-day`,[12,40]),mapFootprint:X(17,13,12,`campus`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`overlook benches`,`green roofs`,`shop awnings`,`stepped rain garden`],`lush`,`warm`,`terraced stone planter`)}),J({id:`pear-technology`,name:`Pear Technology Office`,category:`technology-companies`,requiredPieces:4,constructionStages:[`mint office pad`,`rounded timber-and-glass shell`,`leaf-shaped skylight`,`whole-pear sign and courtyard desks`],finishedAppearance:`A cozy mint studio with rounded windows, a leaf skylight, and an original whole-pear emblem over the door.`,passiveBudgetPerMinute:10,discovery:`exchange-exclusive`,discoveryOrder:21,ambientPopulationBehavior:Y([`designer`,`engineer`,`visitor`],`carry sketchbooks between courtyard desks and gather around small prototypes`,`gentle`,`day`,[8,26]),mapFootprint:X(7,6,6,`courtyard`),pathPreferences:Z(`cream-pavers`,[`south`,`east`],`standard`,3,!0),decorationPreferences:Q([`pear tree`,`round stools`,`paper prototypes`,`mint task lamps`],`balanced`,`neutral`),exchangeListing:il(`A simple upright whole pear with one leaf`,`pear`,24,42)}),J({id:`nimbus-nest-cloud`,name:`Nimbus Nest Cloud Studio`,category:`technology-companies`,requiredPieces:5,constructionStages:[`pale-blue server floor`,`soft cloudlike walls`,`open studio loft`,`roof vents and sky bridge`,`cloud emblem and shaded work garden`],finishedAppearance:`A low cloud-shaped blue studio with porthole windows, quiet roof vents, and hammocklike courtyard seats.`,passiveBudgetPerMinute:13,discovery:`exchange-exclusive`,discoveryOrder:27,ambientPopulationBehavior:Y([`systems maker`,`illustrator`,`technician`],`move between softly lit work bays and take breaks in hanging courtyard seats`,`gentle`,`day`,[8,25]),mapFootprint:X(8,6,6),pathPreferences:Z(`cream-pavers`,[`south`,`west`],`standard`,3,!1),decorationPreferences:Q([`hanging seats`,`blue grasses`,`round vents`,`cloud pennant`],`balanced`,`neutral`),exchangeListing:il(`Three overlapping rounded cloud puffs`,`cloud`,28,50)}),J({id:`mossbyte-robotics`,name:`Mossbyte Robotics Laboratory`,category:`technology-companies`,requiredPieces:5,constructionStages:[`workshop slab`,`moss-green lab frame`,`high test-bay doors`,`glass observation loft`,`friendly robot emblem and test garden`],finishedAppearance:`A moss-green robotics shed where gentle wheeled helpers trace tidy loops through a planted test yard.`,passiveBudgetPerMinute:14,discovery:`exchange-exclusive`,discoveryOrder:30,ambientPopulationBehavior:Y([`roboticist`,`mechanic`,`test observer`],`adjust small helper machines and watch them water planters in calm loops`,`gentle`,`day`,[9,28]),mapFootprint:X(8,7,6.5),pathPreferences:Z(`warm-brick`,[`east`,`south`],`standard`,3,!1),decorationPreferences:Q([`test planters`,`tool trolley`,`chalk loop`,`moss roof`],`balanced`,`neutral`,`timber test-yard rail`),exchangeListing:il(`A round friendly robot head with two dot lights`,`robot`,34,58)}),J({id:`petalhelix-bioworks`,name:`PetalHelix Bioworks`,category:`technology-companies`,requiredPieces:6,constructionStages:[`laboratory foundation`,`cream clean-room wing`,`curved glasshouse`,`petal roof vents`,`helix-flower emblem and research garden`],finishedAppearance:`A cream laboratory flowing into a lavender glasshouse, marked by an original flower-and-helix symbol.`,passiveBudgetPerMinute:18,discovery:`exchange-exclusive`,discoveryOrder:36,ambientPopulationBehavior:Y([`biologist`,`glasshouse keeper`,`student`],`carry seed trays, examine leaves, and confer beside the glasshouse`,`gentle`,`day`,[11,31]),mapFootprint:X(9,7,7,`linear`),pathPreferences:Z(`garden-stone`,[`south`,`east`],`standard`,3,!0),decorationPreferences:Q([`research beds`,`petal vents`,`rain chains`,`specimen cart`],`lush`,`neutral`,`pollinator border`),exchangeListing:il(`A flower whose center is a tiny double helix`,`helix`,38,64)}),J({id:`lantern-fox-games`,name:`Lantern Fox Game Studio`,category:`technology-companies`,requiredPieces:6,constructionStages:[`warm studio floor`,`fox-red timber walls`,`sawtooth skylights`,`screening loft`,`lantern-tail emblem and play-test terrace`],finishedAppearance:`A fox-red creative studio with sawtooth skylights, hand-painted posters, and lanterns shaped like soft tails.`,passiveBudgetPerMinute:20,discovery:`exchange-exclusive`,discoveryOrder:39,ambientPopulationBehavior:Y([`game maker`,`artist`,`play tester`],`pin up drawings, test tiny tabletop games, and relax on the terrace`,`lively`,`day`,[12,34]),mapFootprint:X(9,7,7),pathPreferences:Z(`warm-brick`,[`south`,`west`],`standard`,3,!0),decorationPreferences:Q([`painted posters`,`tail lanterns`,`tabletop pieces`,`beanbag terrace`],`lush`,`candle`),exchangeListing:il(`A curled fox tail wrapped around a square lantern`,`fox`,42,70)}),J({id:`cinderchip-semiconductor`,name:`Cinderchip Semiconductor Workshop`,category:`technology-companies`,requiredPieces:7,constructionStages:[`charcoal utility base`,`clean workshop shell`,`fabrication bay`,`copper service roof`,`chip-flame emblem and inspection garden`],finishedAppearance:`A charcoal-and-copper micro-workshop with precise square windows and a tiny chip emblem warmed by a flame motif.`,passiveBudgetPerMinute:24,discovery:`exchange-exclusive`,discoveryOrder:45,ambientPopulationBehavior:Y([`fabricator`,`quality inspector`,`maintenance worker`],`move quietly between clean bays and inspect trays beneath amber lamps`,`gentle`,`day`,[7,24]),mapFootprint:X(10,8,7.5),pathPreferences:Z(`civic-tile`,[`north`,`south`],`standard`,3,!1),decorationPreferences:Q([`copper vents`,`inspection lamps`,`sealed carts`,`square rain garden`],`restrained`,`neutral`,`trimmed charcoal curb`),exchangeListing:il(`A rounded microchip containing one small flame`,`chip`,48,78)}),J({id:`everbright-energy`,name:`Everbright Green Energy Company`,category:`technology-companies`,requiredPieces:7,constructionStages:[`green campus pad`,`timber office hall`,`solar canopy`,`small wind sculpture`,`rising-sun emblem and energy garden`],finishedAppearance:`A timber energy office beneath a blue solar canopy, framed by tall grass and a slow kinetic wind sculpture.`,passiveBudgetPerMinute:26,discovery:`exchange-exclusive`,discoveryOrder:50,ambientPopulationBehavior:Y([`energy planner`,`field technician`,`visitor`],`compare site maps, wheel tool cases, and sit beneath the solar shade`,`gentle`,`day`,[8,26]),mapFootprint:X(11,8,8,`campus`),pathPreferences:Z(`garden-stone`,[`east`,`south`],`standard`,3,!0),decorationPreferences:Q([`solar canopy`,`tall grass`,`wind sculpture`,`battery bench`],`lush`,`neutral`,`bioswale edge`),exchangeListing:il(`A sunrise with three broad rays above a leaf`,`sun`,52,84)}),J({id:`wayfarer-logistics`,name:`Wayfarer Logistics Company`,category:`technology-companies`,requiredPieces:8,constructionStages:[`parcel-court foundation`,`dispatch office`,`sorting shed`,`curved loading canopy`,`walking-parcel emblem and cargo bicycle yard`],finishedAppearance:`A friendly orange dispatch hall with a curved canopy, clocklike loading doors, and a fleet of cargo bicycles.`,passiveBudgetPerMinute:28,discovery:`exchange-exclusive`,discoveryOrder:55,ambientPopulationBehavior:Y([`dispatcher`,`cargo cyclist`,`sorter`],`sort small parcels, load cargo bicycles, and depart along connected paths`,`lively`,`day`,[5,18]),mapFootprint:X(12,9,8,`linear`),pathPreferences:Z(`warm-brick`,[`north`,`east`,`south`],`broad`,4,!0),decorationPreferences:Q([`cargo bicycles`,`parcel cages`,`route board`,`orange canopy`],`balanced`,`neutral`,`painted loading curb`),exchangeListing:il(`A parcel with two small walking feet`,`parcel`,58,92)}),J({id:`moonpost-satellite`,name:`Moonpost Satellite Systems`,category:`technology-companies`,requiredPieces:9,constructionStages:[`midnight-blue campus base`,`control-room shell`,`antenna workshop`,`small tracking dome`,`orbiting-letter emblem and listening garden`],finishedAppearance:`A deep-blue satellite studio with a tiny tracking dome, silver dish, and a moonlit grass listening garden.`,passiveBudgetPerMinute:32,discovery:`exchange-exclusive`,discoveryOrder:62,ambientPopulationBehavior:Y([`orbital engineer`,`radio operator`,`night visitor`],`adjust the dish, cross-check star maps, and listen from garden benches`,`gentle`,`evening`,[12,36]),mapFootprint:X(12,10,9,`campus`),pathPreferences:Z(`civic-tile`,[`south`,`west`],`standard`,3,!0),decorationPreferences:Q([`silver dish`,`star map table`,`moon grass`,`low red lamps`],`restrained`,`warm`,`dark stone seat wall`),exchangeListing:il(`A tiny satellite carrying a sealed letter`,`satellite`,66,104)}),J({id:`onre-reinsurance`,name:`OnRe Reinsurance House`,category:`technology-companies`,requiredPieces:10,constructionStages:[`quiet stone risk-vault foundation`,`arched assurance hall`,`cream upper offices`,`blue mansard roof`,`OnRe façade mark`,`courtyard trees and warm reinsurance gallery`],finishedAppearance:`A dignified cream reinsurance house with blue rooflines, arched windows, warm interiors, and the exact OnRe identity above its entrance.`,passiveBudgetPerMinute:36,discovery:`exchange-exclusive`,discoveryOrder:69,ambientPopulationBehavior:Y([`reinsurance analyst`,`risk partner`,`visiting broker`],`compare risk maps, meet beneath the courtyard trees, and cross the warmly lit assurance hall`,`lively`,`day`,[9,30]),mapFootprint:X(13,11,9.5,`courtyard`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`],`broad`,4,!0),decorationPreferences:Q([`OnRe façade mark`,`blue awnings`,`risk-map gallery`,`courtyard trees`],`lush`,`neutral`,`curved stone bench`),exchangeListing:il(`The exact OnRe double-ring icon`,`onre`,72,118)}),J({id:`honeycomb-apiary`,name:`Honeycomb Apiary`,category:`agriculture-commodities`,requiredPieces:3,constructionStages:[`wildflower clearing`,`three painted hive boxes`,`beekeeper shed and honey stall`],finishedAppearance:`Three powder-yellow hives among wildflowers, with a tiny striped shed and jars catching the afternoon light.`,passiveBudgetPerMinute:4,discovery:`crowd`,discoveryOrder:3,ambientPopulationBehavior:Y([`beekeeper`,`garden visitor`],`inspect hives calmly and follow a loop through the wildflowers`,`quiet`,`day`,[10,28]),mapFootprint:X(6,5,5.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`south`],`narrow`,3,!1),decorationPreferences:Q([`wildflowers`,`hive boxes`,`honey jars`,`shallow bee basin`],`lush`,`warm`,`woven willow edge`)}),J({id:`kitchen-garden`,name:`Patchwork Kitchen Garden`,category:`agriculture-commodities`,requiredPieces:4,constructionStages:[`four soil patches`,`raised timber beds`,`potting shelter`,`bean arches and harvest table`],finishedAppearance:`A quilt of small vegetable beds crossed by stepping stones, bean arches, and a green-roofed potting shelter.`,passiveBudgetPerMinute:5,discovery:`crowd`,discoveryOrder:7,ambientPopulationBehavior:Y([`gardener`,`cook`,`neighbor`],`weed beds, fill baskets, and leave herbs on the sharing table`,`gentle`,`day`,[12,32]),mapFootprint:X(7,6,6,`landscape`),pathPreferences:Z(`garden-stone`,[`east`,`south`],`narrow`,3,!1),decorationPreferences:Q([`bean arches`,`vegetable beds`,`compost box`,`harvest table`],`lush`,`warm`,`herb border`)}),J({id:`amber-wheat-farm`,name:`Amber Wheat Farm`,category:`agriculture-commodities`,requiredPieces:5,constructionStages:[`golden field strips`,`stone barn base`,`timber barn and red door`,`windbreak trees and sheaf stacks`],finishedAppearance:`A softly waving patch of amber wheat beside a round-roofed cream barn and neat hand-tied sheaves.`,passiveBudgetPerMinute:7,discovery:`crowd`,discoveryOrder:11,ambientPopulationBehavior:Y([`farmer`,`field hand`,`walker`],`follow field margins, stack sheaves, and rest in the barn shade`,`gentle`,`day`,[9,27]),mapFootprint:X(10,8,7.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`south`,`west`],`standard`,3,!1),decorationPreferences:Q([`wheat strips`,`sheaf stacks`,`red barn door`,`windbreak poplars`],`lush`,`warm`,`rough grass verge`)}),J({id:`bramble-berry-farm`,name:`Bramble Berry Farm`,category:`agriculture-commodities`,requiredPieces:5,constructionStages:[`berry rows`,`wooden trellises`,`lavender packing hut`,`basket stand and shade arbor`],finishedAppearance:`Curving berry rows with violet fruit, a lavender packing hut, and little baskets beneath a leafy arbor.`,passiveBudgetPerMinute:7,discovery:`crowd`,discoveryOrder:14,ambientPopulationBehavior:Y([`picker`,`farm visitor`,`packer`],`pick along looping rows and carry half-full baskets to the shaded hut`,`gentle`,`day`,[10,30]),mapFootprint:X(9,7,7,`landscape`),pathPreferences:Z(`soft-gravel`,[`north`,`south`],`narrow`,2,!1),decorationPreferences:Q([`berry trellises`,`basket stand`,`shade arbor`,`scarecrow coat`],`lush`,`warm`,`bramble hedge`)}),J({id:`little-apple-orchard`,name:`Little Apple Orchard`,category:`agriculture-commodities`,requiredPieces:6,constructionStages:[`orchard grass`,`first apple rows`,`second apple rows`,`cider shed`,`harvest ladder and picnic hollow`],finishedAppearance:`A dozen small round apple trees around a sage cider shed, crossed by a wandering mown path.`,passiveBudgetPerMinute:9,discovery:`crowd`,discoveryOrder:19,ambientPopulationBehavior:Y([`orchard keeper`,`picker`,`picnicker`],`carry apple baskets, use short ladders, and picnic in the mown hollow`,`lively`,`day`,[12,35]),mapFootprint:X(11,9,8.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`east`,`south`],`narrow`,3,!1),decorationPreferences:Q([`apple trees`,`short ladders`,`cider shed`,`picnic blanket`],`lush`,`warm`,`living orchard hedge`)}),J({id:`sunlit-greenhouse`,name:`Sunlit Greenhouse`,category:`agriculture-commodities`,requiredPieces:6,constructionStages:[`brick heat bed`,`arched glass ribs`,`glasshouse panels`,`potting aisle`,`tomato vines and rainwater tanks`],finishedAppearance:`A long arched greenhouse glowing green and gold, dense with tomatoes, vines, and hanging watering cans.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:22,ambientPopulationBehavior:Y([`grower`,`student`,`produce courier`],`tend vines, check watering cans, and wheel shallow produce trays outside`,`gentle`,`day`,[8,26]),mapFootprint:X(10,6,6.5,`linear`),pathPreferences:Z(`warm-brick`,[`east`,`west`],`standard`,3,!1),decorationPreferences:Q([`tomato vines`,`rain tanks`,`potting bench`,`watering cans`],`lush`,`neutral`,`brick herb border`)}),J({id:`meadow-dairy`,name:`Meadow Dairy`,category:`agriculture-commodities`,requiredPieces:7,constructionStages:[`pasture clearing`,`cream dairy barn`,`milking room wing`,`hay loft`,`fenced meadow and milk-cart porch`],finishedAppearance:`A cream-and-sage dairy barn with a half-moon hay window, small meadow, and quiet handcart of milk cans.`,passiveBudgetPerMinute:12,discovery:`crowd`,discoveryOrder:29,ambientPopulationBehavior:Y([`dairy keeper`,`milk courier`,`farm visitor`],`carry silver cans, sweep the porch, and follow the meadow fence`,`gentle`,`morning`,[8,25]),mapFootprint:X(11,9,8.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`south`,`west`],`standard`,3,!1),decorationPreferences:Q([`milk cans`,`hay bales`,`clover pasture`,`wood handcart`],`balanced`,`warm`,`split-rail meadow fence`)}),J({id:`willow-watermill`,name:`Willow Watermill`,category:`agriculture-commodities`,requiredPieces:8,constructionStages:[`millrace stones`,`timber mill house`,`overshot wheel`,`grain loft`,`willow bank and flour-loading porch`],finishedAppearance:`A weathered timber mill with a slow blue wheel, cream sacks, and willows brushing a narrow millrace.`,passiveBudgetPerMinute:15,discovery:`crowd`,discoveryOrder:38,ambientPopulationBehavior:Y([`miller`,`grain courier`,`riverside walker`],`roll flour sacks to a handcart and pause to watch the slow wheel`,`gentle`,`day`,[8,28]),mapFootprint:X(11,8,8,`linear`),pathPreferences:Z(`garden-stone`,[`east`,`south`],`standard`,4,!0),decorationPreferences:Q([`willow trees`,`flour sacks`,`mill wheel`,`reed fringe`],`lush`,`warm`,`river-stone edge`)}),J({id:`wildflower-fiber-farm`,name:`Wildflower Fiber Farm`,category:`agriculture-commodities`,requiredPieces:8,constructionStages:[`striped crop fields`,`drying frames`,`indigo work shed`,`spinning porch`,`dyed-cloth lines and flower margins`],finishedAppearance:`Striped flax and dye-flower fields around an indigo shed, with soft lengths of cloth moving on the line.`,passiveBudgetPerMinute:16,discovery:`crowd`,discoveryOrder:44,ambientPopulationBehavior:Y([`fiber grower`,`dyer`,`weaver`],`gather plant bundles, tend drying frames, and carry cloth toward town`,`gentle`,`day`,[10,31]),mapFootprint:X(12,9,8.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`north`,`south`],`standard`,2,!1),decorationPreferences:Q([`flax strips`,`dye flowers`,`drying frames`,`cloth lines`],`lush`,`warm`,`uncut wildflower margin`)}),J({id:`golden-ridge-mine`,name:`Golden Ridge Mine`,category:`agriculture-commodities`,requiredPieces:12,constructionStages:[`rocky ridge cut`,`timbered mine portal`,`ore shed`,`short cart rail`,`sorting house`,`restored meadow, gold-veined stones, and safety lamps`],finishedAppearance:`A storybook hillside mine with stout timbering, a tiny ore cart, amber safety lamps, and a carefully replanted meadow.`,passiveBudgetPerMinute:30,discovery:`crowd`,discoveryOrder:65,ambientPopulationBehavior:Y([`miner`,`geologist`,`cart handler`],`inspect rock trays, guide a slow ore cart, and rest by the replanted meadow`,`gentle`,`day`,[7,24]),mapFootprint:X(14,11,10,`landscape`),pathPreferences:Z(`soft-gravel`,[`south`,`west`],`broad`,3,!0),decorationPreferences:Q([`ore cart`,`safety lamps`,`gold-veined rocks`,`replanted meadow`],`balanced`,`warm`,`rough stone retaining edge`)}),J({id:`pocket-gallery`,name:`Pocket Gallery`,category:`culture-collectibles`,requiredPieces:3,constructionStages:[`white gallery pad`,`arched lavender room`,`picture rail, sculpture window, and garden bench`],finishedAppearance:`A one-room lavender gallery with a huge arched window, three changing paintings, and one perfect bench.`,passiveBudgetPerMinute:4,discovery:`crowd`,discoveryOrder:6,ambientPopulationBehavior:Y([`curator`,`artist`,`visitor`],`pause at each small artwork and sketch from the garden bench`,`gentle`,`day`,[12,36]),mapFootprint:X(5,4,5),pathPreferences:Z(`civic-tile`,[`south`],`standard`,4,!0),decorationPreferences:Q([`gallery bench`,`sculpture window`,`poster frame`,`lavender pot`],`restrained`,`neutral`)}),J({id:`claybird-pottery`,name:`Claybird Pottery`,category:`culture-collectibles`,requiredPieces:4,constructionStages:[`clay studio floor`,`rounded plaster walls`,`kiln chimney`,`wheel porch and shelves of handmade pots`],finishedAppearance:`A rounded terracotta pottery with a birdlike chimney cap, open wheel porch, and wonky pots on timber shelves.`,passiveBudgetPerMinute:5,discovery:`crowd`,discoveryOrder:12,ambientPopulationBehavior:Y([`potter`,`apprentice`,`shop visitor`],`turn clay, carry glazed bowls, and inspect shelves on the porch`,`gentle`,`day`,[10,30]),mapFootprint:X(6,5,5.5),pathPreferences:Z(`warm-brick`,[`south`,`east`],`standard`,3,!1),decorationPreferences:Q([`pot shelves`,`kiln wood`,`clay basin`,`apron hooks`],`balanced`,`warm`,`terracotta shard edge`)}),J({id:`town-library`,name:`Town Library`,category:`culture-collectibles`,requiredPieces:5,constructionStages:[`reading-hall foundation`,`cream book-room walls`,`arched blue roof`,`window seats`,`book return, story garden, and lamp`],finishedAppearance:`A small cream library with a blue barrel roof, deep window seats, and an outdoor story circle beneath a tree.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:17,ambientPopulationBehavior:Y([`librarian`,`reader`,`child`],`browse low shelves, settle into windows, and gather for quiet story circles`,`lively`,`day`,[16,46]),mapFootprint:X(8,6,6.5,`courtyard`),pathPreferences:Z(`civic-tile`,[`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`book return`,`story tree`,`reading bench`,`paper lantern`],`lush`,`warm`,`low alphabet tile edge`)}),J({id:`marionette-theater`,name:`Marionette Theater`,category:`culture-collectibles`,requiredPieces:6,constructionStages:[`tiny auditorium base`,`plum theater shell`,`painted proscenium`,`backstage loft`,`ticket booth and striped forecourt`],finishedAppearance:`A plum jewel-box theater with a gold-trimmed miniature stage, striped ticket booth, and puppets in the attic window.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:24,ambientPopulationBehavior:Y([`puppeteer`,`stagehand`,`audience member`],`queue at the tiny booth, take seats, and gather around puppets after shows`,`lively`,`evening`,[18,48]),mapFootprint:X(8,7,7),pathPreferences:Z(`civic-tile`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`striped booth`,`painted masks`,`show posters`,`velvet rope`],`balanced`,`candle`,`star-pattern forecourt`)}),J({id:`river-song-conservatory`,name:`River Song Conservatory`,category:`culture-collectibles`,requiredPieces:7,constructionStages:[`acoustic stone base`,`curved practice rooms`,`tall music hall`,`blue copper roof`,`river terrace and instrument garden`],finishedAppearance:`A flowing cream music school with round practice windows, blue roof, and a river terrace shaped like a staff of music.`,passiveBudgetPerMinute:13,discovery:`crowd`,discoveryOrder:32,ambientPopulationBehavior:Y([`music student`,`teacher`,`listener`],`carry instrument cases, practice by windows, and sit for terrace recitals`,`lively`,`day`,[12,36]),mapFootprint:X(10,8,8,`campus`),pathPreferences:Z(`civic-tile`,[`north`,`south`,`west`],`broad`,4,!0),decorationPreferences:Q([`music-note rail`,`instrument cases`,`river seats`,`reed planters`],`balanced`,`warm`,`curved acoustic wall`)}),J({id:`ink-and-leaf-printworks`,name:`Ink & Leaf Printworks`,category:`culture-collectibles`,requiredPieces:6,constructionStages:[`ink-blue floor`,`timber print shop`,`north-light windows`,`drying loft`,`poster wall and paper courtyard`],finishedAppearance:`An ink-blue print shop with tall north windows, fluttering paper racks, and a public wall layered with gentle posters.`,passiveBudgetPerMinute:11,discovery:`crowd`,discoveryOrder:35,ambientPopulationBehavior:Y([`printmaker`,`bookbinder`,`poster browser`],`turn the hand press, hang fresh sheets, and browse the outdoor poster wall`,`gentle`,`day`,[10,30]),mapFootprint:X(8,6,6.5),pathPreferences:Z(`warm-brick`,[`east`,`south`],`standard`,3,!0),decorationPreferences:Q([`drying racks`,`poster wall`,`ink bottles`,`paper bundles`],`balanced`,`neutral`,`wood type-block edge`)}),J({id:`cloudstone-sculpture-garden`,name:`Cloudstone Sculpture Garden`,category:`culture-collectibles`,requiredPieces:7,constructionStages:[`meandering lawn`,`first stone plinths`,`cloudlike sculptures`,`reflection rill`,`curving seats and night lighting`],finishedAppearance:`A quiet lawn of rounded pale sculptures, a narrow reflecting rill, and seats that curl around the art like commas.`,passiveBudgetPerMinute:12,discovery:`crowd`,discoveryOrder:42,ambientPopulationBehavior:Y([`sculptor`,`visitor`,`grounds keeper`],`circle sculptures, pause at changing viewpoints, and sketch beside the rill`,`gentle`,`all-day`,[14,42]),mapFootprint:X(11,9,8.5,`landscape`),pathPreferences:Z(`garden-stone`,[`north`,`east`,`south`],`narrow`,3,!0),decorationPreferences:Q([`rounded sculptures`,`reflection rill`,`curved seats`,`low art lights`],`restrained`,`neutral`,`mown grass ribbon`)}),J({id:`neighborhood-museum`,name:`Neighborhood Memory Museum`,category:`culture-collectibles`,requiredPieces:9,constructionStages:[`archive foundation`,`brick memory rooms`,`central cream hall`,`sawtooth roof`,`object windows`,`oral-history porch and time garden`],finishedAppearance:`A brick-and-cream local museum whose windows display tiny everyday treasures, with a porch for recorded stories.`,passiveBudgetPerMinute:18,discovery:`crowd`,discoveryOrder:52,ambientPopulationBehavior:Y([`archivist`,`elder`,`school visitor`],`study window objects, record stories on the porch, and walk the time garden`,`lively`,`day`,[16,46]),mapFootprint:X(12,9,9,`courtyard`),pathPreferences:Z(`civic-tile`,[`south`,`east`,`west`],`broad`,4,!0),decorationPreferences:Q([`memory windows`,`recording porch`,`date stones`,`archive cart`],`balanced`,`warm`,`timeline paving band`)}),J({id:`starlight-cinema`,name:`Starlight Cinema`,category:`culture-collectibles`,requiredPieces:10,constructionStages:[`deep-blue auditorium base`,`curved screen hall`,`balcony tier`,`star marquee`,`ticket lobby`,`outdoor screen garden and glowing poster cases`],finishedAppearance:`A rounded midnight-blue cinema with a restrained star marquee, glowing poster cases, and a tiny outdoor screening lawn.`,passiveBudgetPerMinute:21,discovery:`crowd`,discoveryOrder:59,ambientPopulationBehavior:Y([`projectionist`,`cinema visitor`,`snack keeper`],`gather under the marquee, enter in small groups, and sit on the screening lawn`,`lively`,`evening`,[20,52]),mapFootprint:X(13,10,9.5),pathPreferences:Z(`civic-tile`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`star marquee`,`poster cases`,`screening lawn`,`paper cup stand`],`balanced`,`candle`,`dark terrazzo edge`)}),J({id:`collectors-archive`,name:`Cabinet of Small Wonders`,category:`culture-collectibles`,requiredPieces:12,constructionStages:[`octagonal archive base`,`lower cabinet hall`,`upper collection ring`,`faceted glass roof`,`conservation studio`,`curiosity garden and lit display niches`],finishedAppearance:`An octagonal lilac archive under a faceted glass roof, filled with tiny shells, toys, maps, and beautifully ordinary curiosities.`,passiveBudgetPerMinute:28,discovery:`crowd`,discoveryOrder:68,ambientPopulationBehavior:Y([`collector`,`conservator`,`curious visitor`],`lean into small display niches, catalog objects, and trade stories in the garden`,`gentle`,`day`,[18,50]),mapFootprint:X(13,12,10,`courtyard`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`,`west`],`broad`,4,!0),decorationPreferences:Q([`display niches`,`shell mosaic`,`map table`,`curiosity topiary`],`lush`,`warm`,`inlaid cabinet-pattern curb`)}),J({id:`clover-pocket-park`,name:`Clover Pocket Park`,category:`public-community`,requiredPieces:3,constructionStages:[`clover lawn clearing`,`curved path and shade tree`,`benches, drinking fountain, and flower edge`],finishedAppearance:`A tiny clover-shaped lawn with one generous shade tree, curved benches, and a bubbling drinking fountain.`,passiveBudgetPerMinute:3,discovery:`crowd`,discoveryOrder:10,ambientPopulationBehavior:Y([`neighbor`,`reader`,`dog walker`],`cross the lawn, rest beneath the tree, and refill at the fountain`,`lively`,`all-day`,[14,40]),mapFootprint:X(7,7,6.5,`landscape`),pathPreferences:Z(`garden-stone`,[`north`,`east`,`south`,`west`],`narrow`,5,!0),decorationPreferences:Q([`shade tree`,`curved benches`,`drinking fountain`,`clover beds`],`lush`,`warm`,`flowering groundcover`)}),J({id:`acorn-playground`,name:`Acorn Playground`,category:`public-community`,requiredPieces:4,constructionStages:[`soft play lawn`,`acorn climbing house`,`curved slide`,`sand hollow, swings, and parent bench`],finishedAppearance:`A low natural playground with an acorn-shaped climbing hut, curved timber slide, sand hollow, and shaded family bench.`,passiveBudgetPerMinute:4,discovery:`crowd`,discoveryOrder:16,ambientPopulationBehavior:Y([`child`,`caregiver`,`park keeper`],`loop between the acorn house, swings, and sand hollow while adults share the bench`,`lively`,`day`,[16,44]),mapFootprint:X(8,7,7,`landscape`),pathPreferences:Z(`soft-gravel`,[`east`,`south`],`standard`,4,!0),decorationPreferences:Q([`acorn climber`,`timber swing`,`sand hollow`,`family bench`],`balanced`,`warm`,`soft log edge`)}),J({id:`meadow-clinic`,name:`Meadow Community Clinic`,category:`public-community`,requiredPieces:5,constructionStages:[`quiet clinic foundation`,`cream treatment rooms`,`mint waiting room`,`green roof`,`herb court and sheltered entry`],finishedAppearance:`A calm cream clinic with mint doors, a green roof, rounded waiting-room windows, and a healing herb courtyard.`,passiveBudgetPerMinute:7,discovery:`crowd`,discoveryOrder:20,ambientPopulationBehavior:Y([`nurse`,`doctor`,`patient`,`visitor`],`enter beneath the shelter, wait by garden windows, and take slow herb-court walks`,`gentle`,`day`,[10,34]),mapFootprint:X(9,7,7),pathPreferences:Z(`civic-tile`,[`south`,`east`],`broad`,5,!0),decorationPreferences:Q([`herb court`,`covered bench`,`green roof`,`water carafe stand`],`lush`,`neutral`,`smooth seat-height planter`)}),J({id:`little-school`,name:`Little Lantern School`,category:`public-community`,requiredPieces:5,constructionStages:[`schoolyard outline`,`two cream classrooms`,`orange assembly room`,`bell cupola`,`garden classroom and lantern gate`],finishedAppearance:`A small cream school with orange doors, a round assembly room, lanternlike cupola, and outdoor garden classroom.`,passiveBudgetPerMinute:7,discovery:`crowd`,discoveryOrder:26,ambientPopulationBehavior:Y([`teacher`,`student`,`caregiver`],`arrive in little groups, circle the garden classroom, and gather beneath the cupola`,`lively`,`day`,[12,38]),mapFootprint:X(10,8,8,`courtyard`),pathPreferences:Z(`civic-tile`,[`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`garden classroom`,`lantern gate`,`chalk wall`,`rainbow stools`],`lush`,`warm`,`low painted picket fence`)}),J({id:`roundhouse-fire-station`,name:`Roundhouse Fire Station`,category:`public-community`,requiredPieces:6,constructionStages:[`engine-bay slab`,`coral roundhouse walls`,`arched bay doors`,`lookout cupola`,`community safety garden and polished little engine`],finishedAppearance:`A compact coral roundhouse with cream arched doors, a tiny polished engine, and a lantern-capped lookout.`,passiveBudgetPerMinute:9,discovery:`crowd`,discoveryOrder:33,ambientPopulationBehavior:Y([`firefighter`,`mechanic`,`school visitor`],`check the little engine, roll hoses neatly, and host calm safety visits`,`lively`,`day`,[7,24]),mapFootprint:X(10,8,7.5),pathPreferences:Z(`warm-brick`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`polished engine`,`hose tower`,`safety garden`,`brass bell`],`balanced`,`warm`,`painted bay apron`)}),J({id:`pigeon-post-office`,name:`Pigeon Post Office`,category:`public-community`,requiredPieces:6,constructionStages:[`sorting-room pad`,`blue post hall`,`parcel porch`,`clock roof`,`pigeon loft, mailboxes, and bicycle rack`],finishedAppearance:`A dusty-blue post office with a clock roof, covered parcel porch, painted mailboxes, and a decorative pigeon loft.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:37,ambientPopulationBehavior:Y([`postal worker`,`resident`,`cargo cyclist`],`sort letters, collect parcels, and depart by bicycle along town paths`,`lively`,`day`,[6,22]),mapFootprint:X(9,7,7),pathPreferences:Z(`warm-brick`,[`north`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`painted mailboxes`,`parcel porch`,`bicycle rack`,`clock face`],`balanced`,`warm`,`blue brick curb`)}),J({id:`willow-town-hall`,name:`Willow Town Hall`,category:`public-community`,requiredPieces:8,constructionStages:[`civic hall foundation`,`arcaded ground floor`,`council chamber`,`clock gable`,`public counter`,`willow plaza and notice colonnade`],finishedAppearance:`A welcoming sage civic hall with open cream arcades, a modest clock gable, and a willow-shaded public plaza.`,passiveBudgetPerMinute:15,discovery:`crowd`,discoveryOrder:46,ambientPopulationBehavior:Y([`clerk`,`neighbor`,`council visitor`],`cross the arcade, study the community notice rail, and sit beneath the willow`,`lively`,`day`,[10,34]),mapFootprint:X(12,9,9,`courtyard`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`willow tree`,`notice rail`,`clock gable`,`public water bowl`],`balanced`,`warm`,`civic tile band`)}),J({id:`wally-botanical-garden`,name:`Wally Botanical Garden`,category:`public-community`,requiredPieces:9,constructionStages:[`garden boundary grove`,`curving discovery paths`,`fern valley`,`pond garden`,`small glass pavilion`,`benches, labels, and lantern walk`],finishedAppearance:`A lush miniature botanical garden of ferns, grasses, a lily pond, and a low glass pavilion threaded by wandering paths.`,passiveBudgetPerMinute:17,discovery:`crowd`,discoveryOrder:54,ambientPopulationBehavior:Y([`botanist`,`gardener`,`stroller`,`sketcher`],`wander branching loops, read plant labels, and pause at the lily pond`,`lively`,`all-day`,[20,55]),mapFootprint:X(15,13,11,`landscape`),pathPreferences:Z(`garden-stone`,[`north`,`east`,`south`,`west`],`narrow`,4,!0),decorationPreferences:Q([`fern valley`,`lily pond`,`glass pavilion`,`plant labels`],`lush`,`warm`,`layered woodland fringe`)}),J({id:`rainlight-bathhouse`,name:`Rainlight Bathhouse`,category:`public-community`,requiredPieces:10,constructionStages:[`stone bath foundation`,`warm changing rooms`,`arched bathing hall`,`rain roof`,`steam courtyard`,`reflecting basins and towel garden`],finishedAppearance:`A low stone-and-plaster bathhouse under a blue rain roof, with warm arched windows and shallow reflecting basins.`,passiveBudgetPerMinute:21,discovery:`crowd`,discoveryOrder:60,ambientPopulationBehavior:Y([`bath keeper`,`visitor`,`laundry attendant`],`enter quietly, cross the steam court, and rest beside shallow basins`,`gentle`,`evening`,[18,46]),mapFootprint:X(13,11,9.5,`courtyard`),pathPreferences:Z(`garden-stone`,[`south`,`east`],`broad`,3,!0),decorationPreferences:Q([`reflecting basins`,`towel garden`,`rain chains`,`stone lanterns`],`lush`,`candle`,`smooth river-stone edge`)}),J({id:`lakeside-community-house`,name:`Lakeside Community House`,category:`public-community`,requiredPieces:8,constructionStages:[`waterside community deck`,`multi-use timber hall`,`workshop wing`,`kitchen wing`,`folding lakeside wall`,`fire circle and shared boat porch`],finishedAppearance:`A broad timber community house that opens to the lake, with workshop tables, shared kitchen, and a sheltered fire circle.`,passiveBudgetPerMinute:16,discovery:`crowd`,discoveryOrder:57,ambientPopulationBehavior:Y([`neighbor`,`workshop host`,`cook`,`paddler`],`join craft tables, share food, and carry small boats from the porch`,`lively`,`all-day`,[16,50]),mapFootprint:X(13,10,9.5,`linear`),pathPreferences:Z(`boardwalk`,[`north`,`east`,`west`],`broad`,5,!0),decorationPreferences:Q([`fire circle`,`shared boat rack`,`workshop tables`,`lake reeds`],`lush`,`candle`,`timber lake deck`)}),J({id:`spoke-bicycle-workshop`,name:`Spoke Bicycle Workshop`,category:`trade-industry-transport`,requiredPieces:4,constructionStages:[`brick repair pad`,`orange workshop walls`,`wide folding doors`,`wheel sign, tool wall, and bicycle garden`],finishedAppearance:`A little orange repair shop with wide open doors, wheels on the wall, and bicycles tucked among tall grasses.`,passiveBudgetPerMinute:6,discovery:`crowd`,discoveryOrder:41,ambientPopulationBehavior:Y([`mechanic`,`cyclist`,`courier`],`wheel bicycles in, test bells, and depart onto connected town paths`,`lively`,`day`,[6,22]),mapFootprint:X(7,5,5.5),pathPreferences:Z(`warm-brick`,[`east`,`south`],`standard`,4,!1),decorationPreferences:Q([`bicycle racks`,`wheel sign`,`tool wall`,`air pump`],`balanced`,`warm`,`painted repair apron`)}),J({id:`makers-yard`,name:`Makers' Yard`,category:`trade-industry-transport`,requiredPieces:5,constructionStages:[`shared yard surface`,`carpentry shed`,`metal studio`,`covered assembly table`,`material racks and lantern gantry`],finishedAppearance:`A cluster of modest craft sheds around an open assembly yard, animated by sawdust curls and quiet hand tools.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:43,ambientPopulationBehavior:Y([`maker`,`apprentice`,`customer`],`carry small materials between sheds and gather around the assembly table`,`lively`,`day`,[8,27]),mapFootprint:X(9,8,7.5,`courtyard`),pathPreferences:Z(`warm-brick`,[`north`,`south`,`west`],`standard`,3,!0),decorationPreferences:Q([`material racks`,`assembly table`,`sawdust sacks`,`lantern gantry`],`balanced`,`warm`,`reused timber fence`)}),J({id:`cedar-timberworks`,name:`Cedar Timberworks`,category:`trade-industry-transport`,requiredPieces:6,constructionStages:[`timber yard base`,`long cutting shed`,`seasoning racks`,`sawdust roof vent`,`finished-furniture porch and replanted grove`],finishedAppearance:`A long cedar shed with orderly timber racks, a carved furniture porch, and a carefully replanted tree grove.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:48,ambientPopulationBehavior:Y([`carpenter`,`yard worker`,`furniture buyer`],`move timber on hand trolleys, sand benches, and inspect finished pieces`,`gentle`,`day`,[7,25]),mapFootprint:X(11,8,7.5,`linear`),pathPreferences:Z(`soft-gravel`,[`east`,`west`,`south`],`standard`,3,!1),decorationPreferences:Q([`timber racks`,`hand trolley`,`carved chairs`,`replanted cedars`],`balanced`,`warm`,`stacked offcut edge`)}),J({id:`loomlight-textile-mill`,name:`Loomlight Textile Mill`,category:`trade-industry-transport`,requiredPieces:6,constructionStages:[`brick mill floor`,`sawtooth weaving hall`,`dye room`,`cloth-loading porch`,`thread mural and shade courtyard`],finishedAppearance:`A compact brick weaving hall with blue sawtooth roofs, long windows, and cloth samples fluttering beneath a shade frame.`,passiveBudgetPerMinute:11,discovery:`crowd`,discoveryOrder:51,ambientPopulationBehavior:Y([`weaver`,`dyer`,`cloth courier`],`tend quiet looms, hang sample cloth, and wheel folded bolts to the porch`,`lively`,`day`,[7,24]),mapFootprint:X(11,8,8,`linear`),pathPreferences:Z(`warm-brick`,[`north`,`east`,`south`],`broad`,3,!0),decorationPreferences:Q([`cloth samples`,`thread mural`,`folded bolts`,`shade frame`],`balanced`,`neutral`,`brick-and-indigo curb`)}),J({id:`opal-glassworks`,name:`Opal Glassworks`,category:`trade-industry-transport`,requiredPieces:7,constructionStages:[`heatproof workshop base`,`cream furnace room`,`tall orange chimney`,`cooling gallery`,`glass garden and display arcade`],finishedAppearance:`A cream glass workshop with a tall orange chimney, glowing furnace windows, and an outdoor garden of translucent colored forms.`,passiveBudgetPerMinute:13,discovery:`crowd`,discoveryOrder:56,ambientPopulationBehavior:Y([`glassblower`,`apprentice`,`gallery visitor`],`carry cooling pieces, work at the furnace, and circle the translucent garden`,`gentle`,`day`,[10,30]),mapFootprint:X(10,8,8,`courtyard`),pathPreferences:Z(`warm-brick`,[`south`,`west`],`broad`,3,!0),decorationPreferences:Q([`glass garden`,`sand bins`,`cooling rack`,`orange chimney`],`balanced`,`warm`,`dark heatproof brick edge`)}),J({id:`canopy-warehouse`,name:`Canopy Warehouse`,category:`trade-industry-transport`,requiredPieces:7,constructionStages:[`loading apron`,`timber storage frame`,`high cream walls`,`green canopy roof`,`loading bays and pocket rain garden`],finishedAppearance:`A handsome cream warehouse beneath a wide green roof, with rounded loading arches and a rain garden softening the apron.`,passiveBudgetPerMinute:14,discovery:`crowd`,discoveryOrder:58,ambientPopulationBehavior:Y([`warehouse keeper`,`porter`,`cargo cyclist`],`sort crates, move handcarts through arched bays, and depart by cargo bicycle`,`lively`,`day`,[5,19]),mapFootprint:X(12,9,8),pathPreferences:Z(`warm-brick`,[`north`,`east`,`south`],`broad`,4,!1),decorationPreferences:Q([`handcarts`,`labeled crates`,`rain garden`,`green loading canopy`],`balanced`,`neutral`,`painted loading stripe`)}),J({id:`teal-tram-depot`,name:`Teal Tram Depot`,category:`trade-industry-transport`,requiredPieces:8,constructionStages:[`short rail fan`,`arched depot shell`,`repair pit`,`clock gable`,`teal tram car`,`waiting garden and route totem`],finishedAppearance:`An arched brick depot housing one rounded teal tram, beside a pocket waiting garden and simple route totem.`,passiveBudgetPerMinute:17,discovery:`crowd`,discoveryOrder:64,ambientPopulationBehavior:Y([`tram driver`,`mechanic`,`passenger`],`check the tram, gather by the route totem, and board in unhurried groups`,`lively`,`all-day`,[7,25]),mapFootprint:X(13,9,9,`linear`),pathPreferences:Z(`civic-tile`,[`east`,`west`,`south`],`broad`,5,!0),decorationPreferences:Q([`teal tram`,`route totem`,`platform bench`,`tool cabinet`],`balanced`,`warm`,`grass-set tram rails`)}),J({id:`wally-town-station`,name:`Wally Town Train Station`,category:`trade-industry-transport`,requiredPieces:10,constructionStages:[`platform foundations`,`cream ticket hall`,`covered first platform`,`footbridge`,`clock tower`,`second platform, luggage garden, and blue train`],finishedAppearance:`A cream station with a blue canopy, little clock tower, planted platforms, and a short rounded train that comes and goes.`,passiveBudgetPerMinute:23,discovery:`crowd`,discoveryOrder:70,ambientPopulationBehavior:Y([`traveler`,`conductor`,`porter`,`commuter`],`wait beneath canopies, cross the footbridge, and board the little train in waves`,`lively`,`all-day`,[8,30]),mapFootprint:X(17,10,10.5,`linear`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`blue train`,`station clock`,`luggage garden`,`platform canopies`],`lush`,`warm`,`cream platform coping`)}),J({id:`sunset-cargo-port`,name:`Sunset Cargo Port`,category:`trade-industry-transport`,requiredPieces:14,constructionStages:[`stone harbor edge`,`first timber pier`,`harbor office`,`small orange crane`,`warehouse sheds`,`second pier`,`cargo boat, stacked containers, and quay market`],finishedAppearance:`A cozy working harbor of timber piers, one small orange crane, muted containers, a rounded cargo boat, and a lively quay edge.`,passiveBudgetPerMinute:36,discovery:`crowd`,discoveryOrder:75,ambientPopulationBehavior:Y([`dock worker`,`crane operator`,`sailor`,`quay visitor`],`guide cargo by hand signal, roll carts, and pause at the small quay market`,`lively`,`day`,[6,26]),mapFootprint:X(20,15,13,`linear`),pathPreferences:Z(`boardwalk`,[`north`,`east`,`west`],`broad`,5,!0),decorationPreferences:Q([`orange crane`,`cargo boat`,`muted containers`,`quay stalls`],`balanced`,`warm`,`rope-and-bollard harbor edge`)}),J({id:`cloudskip-freight-terminal`,name:`Cloudskip Freight Terminal`,category:`trade-industry-transport`,requiredPieces:16,constructionStages:[`broad grass landing field`,`curved terminal hall`,`freight sorting wing`,`mooring mast`,`hangar`,`weather station`,`small cream airship, cargo garden, and visitor deck`],finishedAppearance:`A fanciful but grounded freight field with a cream airship, low curved terminal, orange mooring mast, and grassy cargo apron.`,passiveBudgetPerMinute:44,discovery:`crowd`,discoveryOrder:79,ambientPopulationBehavior:Y([`airship crew`,`freight handler`,`weather keeper`,`visitor`],`tend mooring ropes, wheel light cargo, and watch the airship from a safe deck`,`lively`,`day`,[8,30]),mapFootprint:X(22,17,14,`campus`),pathPreferences:Z(`soft-gravel`,[`north`,`east`,`south`,`west`],`broad`,4,!0),decorationPreferences:Q([`cream airship`,`orange mast`,`windsocks`,`cargo flower beds`],`balanced`,`neutral`,`mown landing-field rings`)}),J({id:`neighborly-bank`,name:`Neighborly Bank`,category:`finance-energy-infrastructure`,requiredPieces:5,constructionStages:[`deep-blue corner foundation`,`cream banking room`,`arched blue roof`,`public counter`,`shade porch and budget-tree court`],finishedAppearance:`A small deep-blue and cream bank with an open shade porch, round counter windows, and a symbolic tree in its court.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:53,ambientPopulationBehavior:Y([`bank clerk`,`shopkeeper`,`neighbor`],`visit the open counter, review small ledgers, and meet beneath the court tree`,`gentle`,`day`,[8,26]),mapFootprint:X(8,6,6.5,`courtyard`),pathPreferences:Z(`civic-tile`,[`south`,`east`],`broad`,4,!0),decorationPreferences:Q([`budget tree`,`ledger desk`,`shade porch`,`blue ceramic clock`],`balanced`,`warm`,`low cream seat wall`)}),J({id:`harbor-credit-union`,name:`Harbor Credit Union`,category:`finance-energy-infrastructure`,requiredPieces:5,constructionStages:[`waterside office pad`,`round blue meeting room`,`member hall`,`copper roof`,`community table and reed court`],finishedAppearance:`A round blue member-owned finance house with a copper roof, communal planning table, and waterside reed court.`,passiveBudgetPerMinute:8,discovery:`crowd`,discoveryOrder:66,ambientPopulationBehavior:Y([`member advisor`,`local trader`,`resident`],`gather around the planning table and talk quietly beside the reed court`,`gentle`,`day`,[10,30]),mapFootprint:X(8,7,6.5,`courtyard`),pathPreferences:Z(`boardwalk`,[`south`,`west`],`standard`,3,!0),decorationPreferences:Q([`community table`,`reed court`,`copper roof`,`shared notice board`],`balanced`,`warm`,`river-stone planting rim`)}),J({id:`hidden-stock-exchange`,name:`Wally World Stock Exchange`,category:`finance-energy-infrastructure`,requiredPieces:8,constructionStages:[`secret civic foundation`,`deep-blue exchange hall`,`arched public entrance`,`upper counting room`,`copper clock roof`,`interior counter, glowing door lamps, and exchange plaza`],finishedAppearance:`A dignified miniature exchange with deep-blue walls, copper clock roof, softly glowing entrance, and a roof that fades near Wally.`,passiveBudgetPerMinute:18,discovery:`crowd`,discoveryOrder:67,ambientPopulationBehavior:Y([`exchange keeper`,`messenger`,`curious visitor`],`cross the tiny floor, carry paper slips, and gather near the softly lit counter`,`lively`,`day`,[8,28]),mapFootprint:X(11,9,8.5),pathPreferences:Z(`civic-tile`,[`south`,`east`,`west`],`broad`,5,!0),decorationPreferences:Q([`copper clock`,`glowing door lamps`,`paper-slip baskets`,`exchange plaza trees`],`balanced`,`warm`,`deep-blue terrazzo band`)}),J({id:`ribbon-water-tower`,name:`Ribbon Water Tower`,category:`finance-energy-infrastructure`,requiredPieces:6,constructionStages:[`stone pump base`,`four blue support legs`,`rounded water tank`,`spiral service stair`,`ribbon mural and rain garden`],finishedAppearance:`A soft blue water tower on four stout legs, wrapped by a painted ribbon mural and circled by a rain garden.`,passiveBudgetPerMinute:10,discovery:`crowd`,discoveryOrder:72,ambientPopulationBehavior:Y([`water engineer`,`gardener`,`walker`],`check gauges, tend the rain garden, and loop beneath the tower`,`gentle`,`day`,[7,24]),mapFootprint:X(8,8,7,`landscape`),pathPreferences:Z(`garden-stone`,[`north`,`south`],`narrow`,3,!1),decorationPreferences:Q([`ribbon mural`,`rain garden`,`gauge cabinet`,`spiral stair`],`lush`,`neutral`,`circular bioswale`)}),J({id:`whisper-wind-farm`,name:`Whisper Wind Farm`,category:`finance-energy-infrastructure`,requiredPieces:7,constructionStages:[`grassy energy field`,`first slow turbine`,`second slow turbine`,`third slow turbine`,`timber control hut and flower paths`],finishedAppearance:`Three modest cream wind turbines turning lazily above native grass, a timber control hut, and flower-lined maintenance paths.`,passiveBudgetPerMinute:14,discovery:`crowd`,discoveryOrder:73,ambientPopulationBehavior:Y([`wind technician`,`field ecologist`,`walker`],`inspect turbine bases, survey meadow birds, and follow flower paths`,`gentle`,`day`,[8,26]),mapFootprint:X(15,12,10.5,`landscape`),pathPreferences:Z(`soft-gravel`,[`north`,`east`,`south`],`narrow`,2,!1),decorationPreferences:Q([`native grass`,`three slow turbines`,`control hut`,`bird markers`],`lush`,`neutral`,`unmown meadow edge`)}),J({id:`sunpatch-solar-garden`,name:`Sunpatch Solar Garden`,category:`finance-energy-infrastructure`,requiredPieces:7,constructionStages:[`pollinator field`,`first blue panel rows`,`second panel rows`,`timber inverter shelter`,`viewing arbor and sheep gate`],finishedAppearance:`Low blue solar panels floating above a gold pollinator meadow, with a timber shelter and shaded viewing arbor.`,passiveBudgetPerMinute:15,discovery:`crowd`,discoveryOrder:74,ambientPopulationBehavior:Y([`solar keeper`,`ecologist`,`visitor`],`walk between panel rows, study flowers, and rest beneath the viewing arbor`,`gentle`,`day`,[9,28]),mapFootprint:X(15,11,10,`landscape`),pathPreferences:Z(`soft-gravel`,[`east`,`south`],`narrow`,2,!1),decorationPreferences:Q([`solar rows`,`pollinator meadow`,`viewing arbor`,`inverter shelter`],`lush`,`neutral`,`wildflower field edge`)}),J({id:`earthwarm-geothermal`,name:`Earthwarm Geothermal House`,category:`finance-energy-infrastructure`,requiredPieces:10,constructionStages:[`deep-well marker field`,`stone turbine base`,`cream generation hall`,`blue condenser roof`,`warm-water channel`,`fern terraces and public warmth pavilion`],finishedAppearance:`A low stone energy house with a blue curved roof, thin threads of steam, fern terraces, and a warm public sitting pavilion.`,passiveBudgetPerMinute:24,discovery:`crowd`,discoveryOrder:76,ambientPopulationBehavior:Y([`plant engineer`,`geologist`,`pavilion visitor`],`check quiet pipes, study the well garden, and warm hands in the public pavilion`,`gentle`,`all-day`,[10,32]),mapFootprint:X(14,11,10,`campus`),pathPreferences:Z(`garden-stone`,[`north`,`east`,`south`],`standard`,3,!0),decorationPreferences:Q([`fern terraces`,`warm channel`,`well markers`,`sitting pavilion`],`lush`,`warm`,`dark geothermal stone edge`)}),J({id:`willow-arch-bridge`,name:`Willow Arch Bridge`,category:`finance-energy-infrastructure`,requiredPieces:8,constructionStages:[`paired stone abutments`,`first cream arch`,`second cream arch`,`timber walking deck`,`blue railings`,`willow landings and bridge lamps`],finishedAppearance:`A graceful two-arch cream bridge with a timber walking deck, dusty-blue rails, tiny lamps, and willows at both landings.`,passiveBudgetPerMinute:16,discovery:`crowd`,discoveryOrder:77,ambientPopulationBehavior:Y([`pedestrian`,`cyclist`,`bridge keeper`],`cross in both directions, pause at the center rail, and gather beneath landing willows`,`lively`,`all-day`,[5,20]),mapFootprint:X(18,6,8,`linear`),pathPreferences:Z(`boardwalk`,[`east`,`west`],`broad`,5,!0),decorationPreferences:Q([`willow landings`,`bridge lamps`,`blue railings`,`river steps`],`lush`,`warm`,`stone river abutment`)}),J({id:`bluefin-hydro-station`,name:`Bluefin Hydro Station`,category:`finance-energy-infrastructure`,requiredPieces:12,constructionStages:[`river control stones`,`low blue turbine hall`,`cream spillway arches`,`fish passage`,`control room`,`waterside walk and reed restoration`],finishedAppearance:`A low blue hydro house built into cream river arches, softened by a visible fish passage, reeds, and a waterside walk.`,passiveBudgetPerMinute:31,discovery:`crowd`,discoveryOrder:78,ambientPopulationBehavior:Y([`hydro engineer`,`river keeper`,`walker`],`check the turbine hall, monitor the fish passage, and follow the waterside walk`,`gentle`,`day`,[8,28]),mapFootprint:X(17,12,11,`linear`),pathPreferences:Z(`garden-stone`,[`north`,`east`,`west`],`broad`,4,!0),decorationPreferences:Q([`fish passage`,`reed restoration`,`control windows`,`waterside walk`],`lush`,`neutral`,`layered river-stone bank`)}),J({id:`civic-data-grid`,name:`Civic Data & Light Grid`,category:`finance-energy-infrastructure`,requiredPieces:18,constructionStages:[`underground conduit garden`,`first neighborhood light loop`,`blue civic operations hall`,`second light loop`,`energy-storage courtyard`,`third light loop`,`community map room`,`townwide lantern synchronization and planted service plaza`],finishedAppearance:`A deep-blue civic operations house linked to the whole town by warm synchronized lamps, subtle conduit gardens, and a public map room.`,passiveBudgetPerMinute:52,discovery:`crowd`,discoveryOrder:80,ambientPopulationBehavior:Y([`grid keeper`,`lamplighter`,`community planner`,`visitor`],`inspect town maps, tend lamp circuits, and walk outward along softly synchronized lights`,`lively`,`all-day`,[8,30]),mapFootprint:X(18,14,12,`campus`),pathPreferences:Z(`civic-tile`,[`north`,`east`,`south`,`west`],`broad`,5,!0),decorationPreferences:Q([`synchronized lanterns`,`conduit gardens`,`public map room`,`storage court`],`lush`,`warm`,`deep-blue circuit mosaic`)})],ol=[5,5,4,4,4,4,6,5,4,4,5,6,5,4,5,5,5,4,6,5,4,5,4,5,6,4,5,4,4,5,5,4,5,4,4,5,6,4,6,5,4,5,6,5,6,5,4,5,4,5,5,4,4,5,5,6,4,4,4,6,5,4,5,6,6,5,4,5,5,4,5,6,4,4,6,4,5,5,6,5],sl={25:`hidden-stock-exchange`,26:`neighborly-bank`,27:`harbor-credit-union`,29:`onre-reinsurance`},cl=al.map(e=>e.id);for(let[e,t]of Object.entries(sl)){let n=Number(e)-1,r=cl.findIndex(e=>e===t);if(r<0)throw Error(`Missing global-pack game asset ${t}.`);[cl[n],cl[r]]=[cl[r],cl[n]]}var ll=Object.fromEntries(cl.map((e,t)=>[e,ol[t]-1])),ul=al.map(e=>({...e,requiredPieces:ll[e.id]??3})),dl=ul,fl=ul.map(e=>e.id),pl=Object.freeze(Object.fromEntries(ul.map(e=>[e.id,e]))),ml=ul.filter(e=>e.discovery===`exchange-exclusive`);ul.filter(e=>e.discovery===`crowd`);var hl=`hidden-stock-exchange`;function gl(){let e=new Set(ul.map(e=>e.id)),t=new Set(ul.map(e=>e.name));if(ul.length!==80||e.size!==80||t.size!==80)throw Error(`WALLY WORLD requires exactly 80 assets with unique ids and names.`);for(let e of nl)if(ul.filter(t=>t.category===e).length!==10)throw Error(`Asset category ${e} must contain exactly ten projects.`);if(ml.length!==10)throw Error(`WALLY WORLD requires exactly ten exchange-exclusive companies.`);for(let e of ul){if(e.requiredPieces<3||e.requiredPieces>18)throw Error(`${e.id} has an out-of-range piece count.`);if(e.discovery===`exchange-exclusive`&&!e.exchangeListing)throw Error(`${e.id} requires exchange listing data.`)}}gl();var _l=`/assets/scored-paper/structures/construction_stages`;function $(e){let t=`${_l}/${String(e.packNumber).padStart(2,`0`)}_${e.slug}`;return Object.freeze({...e,stagePathPattern:`${t}/stage_N.png`,stagePath:n=>`${t}/stage_${Math.max(1,Math.min(e.stageCount,Math.round(n)))}.png`})}var vl=[$({packNumber:1,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`neighborhood_restaurant`,displayName:`Neighborhood Restaurant`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:2,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`artisan_bakery`,displayName:`Artisan Bakery`,sizeClass:`large`,visualScale:.96,stageCount:5}),$({packNumber:3,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`coffee_shop`,displayName:`Coffee Shop`,sizeClass:`medium`,visualScale:.74,stageCount:4}),$({packNumber:4,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`pizza_parlor`,displayName:`Pizza Parlor`,sizeClass:`medium`,visualScale:.84,stageCount:4}),$({packNumber:5,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`taco_stand`,displayName:`Taco Stand`,sizeClass:`compact`,visualScale:.58,stageCount:4}),$({packNumber:6,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`ice_cream_shop`,displayName:`Ice Cream Shop`,sizeClass:`compact`,visualScale:.66,stageCount:4}),$({packNumber:7,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`farmers_market`,displayName:`Farmers Market`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:8,neighborhoodId:`01_feast_street`,neighborhoodName:`Feast Street`,slug:`rooftop_garden_cafe`,displayName:`Rooftop Garden Café`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:9,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`starter_cottage`,displayName:`Starter Cottage`,sizeClass:`medium`,visualScale:.74,stageCount:4}),$({packNumber:10,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`townhome`,displayName:`Townhome`,sizeClass:`medium`,visualScale:.84,stageCount:4}),$({packNumber:11,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`apartment_building`,displayName:`Apartment Building`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:12,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`luxury_apartments`,displayName:`Luxury Apartments`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:13,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`co_living_house`,displayName:`Co-Living House`,sizeClass:`large`,visualScale:.95,stageCount:5}),$({packNumber:14,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`brownstone`,displayName:`Brownstone`,sizeClass:`medium`,visualScale:.78,stageCount:4}),$({packNumber:15,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`artist_lofts`,displayName:`Artist Lofts`,sizeClass:`large`,visualScale:.88,stageCount:5}),$({packNumber:16,neighborhoodId:`02_homeward_gardens`,neighborhoodName:`Homeward Gardens`,slug:`garden_flats`,displayName:`Garden Flats`,sizeClass:`large`,visualScale:.96,stageCount:5}),$({packNumber:17,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`machiya_tea_house`,displayName:`Machiya Tea House`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:18,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`ramen_alley_shop`,displayName:`Ramen Alley Shop`,sizeClass:`compact`,visualScale:.68,stageCount:4}),$({packNumber:19,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`sento_bathhouse`,displayName:`Sento Bathhouse`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:20,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`capsule_hotel_tower`,displayName:`Capsule Hotel Tower`,sizeClass:`medium`,visualScale:.8,stageCount:5}),$({packNumber:21,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`garden_pavilion`,displayName:`Garden Pavilion`,sizeClass:`medium`,visualScale:.72,stageCount:4}),$({packNumber:22,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`tokyo_micro_office`,displayName:`Tokyo Micro Office`,sizeClass:`medium`,visualScale:.82,stageCount:5}),$({packNumber:23,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`stationery_townhouse`,displayName:`Stationery Townhouse`,sizeClass:`medium`,visualScale:.82,stageCount:4}),$({packNumber:24,neighborhoodId:`03_japan_quarter`,neighborhoodName:`Japan Quarter`,slug:`neighborhood_rail_station`,displayName:`Neighborhood Rail Station`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:25,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`stock_exchange`,displayName:`Stock Exchange`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:26,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`community_bank`,displayName:`Community Bank`,sizeClass:`medium`,visualScale:.8,stageCount:4}),$({packNumber:27,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`credit_union`,displayName:`Credit Union`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:28,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`brokerage_house`,displayName:`Brokerage House`,sizeClass:`medium`,visualScale:.86,stageCount:4}),$({packNumber:29,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`insurance_house`,displayName:`Insurance House`,sizeClass:`medium`,visualScale:.72,stageCount:4}),$({packNumber:30,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`venture_studio`,displayName:`Venture Studio`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:31,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`token_vault`,displayName:`Token Vault`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:32,neighborhoodId:`04_ledger_square`,neighborhoodName:`Ledger Square — NYC Finance`,slug:`auction_house`,displayName:`Auction House`,sizeClass:`medium`,visualScale:.82,stageCount:4}),$({packNumber:33,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`earthen_courtyard_library`,displayName:`Earthen Courtyard Library`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:34,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`swahili_coast_cafe`,displayName:`Swahili Coast Café`,sizeClass:`medium`,visualScale:.84,stageCount:4}),$({packNumber:35,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`highland_coffee_pavilion`,displayName:`Highland Coffee Pavilion`,sizeClass:`medium`,visualScale:.72,stageCount:4}),$({packNumber:36,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`west_african_arts_center`,displayName:`West African Arts Center`,sizeClass:`large`,visualScale:.94,stageCount:5}),$({packNumber:37,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`woven_canopy_market`,displayName:`Woven Canopy Market`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:38,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`solar_craft_workshop`,displayName:`Solar Craft Workshop`,sizeClass:`compact`,visualScale:.65,stageCount:4}),$({packNumber:39,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`baobab_gathering_pavilion`,displayName:`Baobab Gathering Pavilion`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:40,neighborhoodId:`05_ubuntu_gardens`,neighborhoodName:`Ubuntu Gardens`,slug:`garden_clinic`,displayName:`Garden Clinic`,sizeClass:`large`,visualScale:.88,stageCount:5}),$({packNumber:41,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`a_frame_cabin`,displayName:`A-Frame Cabin`,sizeClass:`compact`,visualScale:.58,stageCount:4}),$({packNumber:42,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`alpine_lodge`,displayName:`Alpine Lodge`,sizeClass:`large`,visualScale:.96,stageCount:5}),$({packNumber:43,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`cable_car_station`,displayName:`Cable-Car Station`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:44,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`stone_observatory`,displayName:`Stone Observatory`,sizeClass:`medium`,visualScale:.83,stageCount:5}),$({packNumber:45,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`terraced_hot_spring_spa`,displayName:`Terraced Hot-Spring Spa`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:46,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`fire_lookout_tower`,displayName:`Fire Lookout Tower`,sizeClass:`medium`,visualScale:.78,stageCount:5}),$({packNumber:47,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`mountaineering_outfitter`,displayName:`Mountaineering Outfitter`,sizeClass:`compact`,visualScale:.7,stageCount:4}),$({packNumber:48,neighborhoodId:`06_mountain_heights`,neighborhoodName:`Mountain Heights`,slug:`avalanche_research_lab`,displayName:`Avalanche Research Laboratory`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:49,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`cinema`,displayName:`Cinema`,sizeClass:`medium`,visualScale:.78,stageCount:4}),$({packNumber:50,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`community_theater`,displayName:`Community Theater`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:51,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`city_museum`,displayName:`City Museum`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:52,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`music_hall`,displayName:`Music Hall`,sizeClass:`medium`,visualScale:.85,stageCount:4}),$({packNumber:53,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`boardwalk_arcade`,displayName:`Boardwalk Arcade`,sizeClass:`medium`,visualScale:.76,stageCount:4}),$({packNumber:54,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`bowling_alley`,displayName:`Bowling Alley`,sizeClass:`large`,visualScale:.88,stageCount:5}),$({packNumber:55,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`fitness_club`,displayName:`Fitness Club`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:56,neighborhoodId:`07_lantern_arts`,neighborhoodName:`Lantern Arts`,slug:`skate_park`,displayName:`Skate Park`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:57,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`central_park`,displayName:`Central Park Pavilion`,sizeClass:`medium`,visualScale:.8,stageCount:4}),$({packNumber:58,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`playground`,displayName:`Playground`,sizeClass:`medium`,visualScale:.85,stageCount:4}),$({packNumber:59,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`dog_park`,displayName:`Dog Park`,sizeClass:`large`,visualScale:.88,stageCount:4}),$({packNumber:60,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`fountain_plaza`,displayName:`Fountain Plaza`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:61,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`botanical_garden`,displayName:`Botanical Garden`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:62,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`community_garden`,displayName:`Community Garden`,sizeClass:`medium`,visualScale:.8,stageCount:4}),$({packNumber:63,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`neighborhood_orchard`,displayName:`Neighborhood Orchard`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:64,neighborhoodId:`08_green_commons`,neighborhoodName:`Green Commons`,slug:`pond_pavilion`,displayName:`Pond Pavilion`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:65,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`colonial_courtyard_casa`,displayName:`Colonial Courtyard Casa`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:66,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`covered_mercado_hall`,displayName:`Covered Mercado Hall`,sizeClass:`large`,visualScale:.92,stageCount:5}),$({packNumber:67,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`neighborhood_panaderia`,displayName:`Neighborhood Panadería`,sizeClass:`compact`,visualScale:.7,stageCount:4}),$({packNumber:68,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`art_deco_cinema`,displayName:`Art Deco Cinema`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:69,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`creative_office_tower`,displayName:`Creative Office Tower`,sizeClass:`medium`,visualScale:.78,stageCount:5}),$({packNumber:70,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`corner_food_kiosk`,displayName:`Corner Food Kiosk`,sizeClass:`compact`,visualScale:.58,stageCount:4}),$({packNumber:71,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`community_music_courtyard`,displayName:`Community Music Courtyard`,sizeClass:`large`,visualScale:.9,stageCount:5}),$({packNumber:72,neighborhoodId:`09_latin_plaza`,neighborhoodName:`Latin Plaza`,slug:`hillside_row_homes`,displayName:`Hillside Row Homes`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:73,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`stilt_beach_bungalow`,displayName:`Stilt Beach Bungalow`,sizeClass:`compact`,visualScale:.65,stageCount:4}),$({packNumber:74,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`mangrove_cafe`,displayName:`Mangrove Café`,sizeClass:`medium`,visualScale:.8,stageCount:4}),$({packNumber:75,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`palm_courtyard_hotel`,displayName:`Palm Courtyard Hotel`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:76,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`open_canopy_market`,displayName:`Open-Canopy Market`,sizeClass:`medium`,visualScale:.85,stageCount:4}),$({packNumber:77,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`marine_research_center`,displayName:`Marine Research Center`,sizeClass:`medium`,visualScale:.8,stageCount:5}),$({packNumber:78,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`shell_event_pavilion`,displayName:`Shell Event Pavilion`,sizeClass:`large`,visualScale:.88,stageCount:5}),$({packNumber:79,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`lagoon_bathhouse`,displayName:`Lagoon Bathhouse`,sizeClass:`landmark`,visualScale:1,stageCount:6}),$({packNumber:80,neighborhoodId:`10_tropical_harbor`,neighborhoodName:`Tropical Harbor`,slug:`marina_clubhouse`,displayName:`Marina Clubhouse`,sizeClass:`large`,visualScale:.92,stageCount:5})];if(vl.length!==dl.length)throw Error(`Global structure art must map one-to-one with the 80 GAME_ASSETS entries.`);var yl=[...dl];for(let[e,t]of Object.entries(sl)){let n=t,r=Number(e)-1,i=yl.findIndex(e=>e.id===n);if(i<0)throw Error(`Missing Ledger Square game asset ${n}.`);[yl[r],yl[i]]=[yl[i],yl[r]]}var bl=Object.freeze(Object.fromEntries(yl.map((e,t)=>[e.id,vl[t]])));function xl(e){let t=bl[e.id];if(!t)throw Error(`No global structure mapping exists for game asset ${e.id}.`);return t}function Sl(e){return bl[e]}var Cl=[3,5,7,9,12,15,18,22,27,33];function wl(e){let t=Sl(e).packNumber;return Math.max(0,Math.min(9,Math.floor((t-1)/8)))}function Tl(e,t){return(Cl[Math.max(0,Math.min(9,Math.floor(e)))]??Cl.at(-1))+Math.max(0,Math.floor(t)-1)*2}function El(e){return dl.filter(t=>t.discovery===`crowd`&&wl(t.id)===e).reduce((t,n,r)=>e===0&&n.id===fl[0]?t:t+Tl(e,r),0)}function Dl(e){let t=Math.max(0,Math.min(9,Math.floor(e))),n=Tl(Math.min(9,t+1),0)*(t===9?1:2),r=(El(t)+n)*1.8;return Math.ceil(Math.max(60,r)/5)*5}function Ol(){return ml.reduce((e,t)=>e+t.exchangeListing.maximumPrice*t.requiredPieces,0)}function kl(e){let t=Dl(e);return e===3?t+Ol():t}var Al=`wally-world:town:v4`,jl=360*60*1e3,Ml=.22,Nl=`wally_world_checkpoint_v4`,Pl=2800,Fl=12,Il=new Set(fl),Ll=new Set([`n`,`ne`,`e`,`se`,`s`,`sw`,`w`,`nw`]);function Rl(e,t,n){return Math.min(n,Math.max(t,e))}function zl(e,t){return typeof e==`number`&&Number.isFinite(e)?e:t}function Bl(e,t=0){return Math.max(0,zl(e,t))}function Vl(e){return Math.round(Math.max(0,e)*100)/100}function Hl(e){return typeof e==`object`&&e&&!Array.isArray(e)?e:void 0}function Ul(e){return Math.floor(Rl(e(),0,.999999999)*4294967296)>>>0}function Wl(e,t,n){return t+Math.floor(Rl(e(),0,.999999999)*(n-t+1))}function Gl(e,t){return e.includes(t)?e:[...e,t]}function Kl(e){return typeof e==`string`&&Il.has(e)}function ql(e){return Array.isArray(e)?[...new Set(e.filter(Kl))]:[]}function Jl(e){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`&&/^-?\d+:-?\d+$/.test(e)))]:[]}function Yl(e){return Array.isArray(e)?[...new Set(e.filter(e=>{if(typeof e!=`string`)return!1;let t=e.lastIndexOf(`:`),n=e.slice(0,t),r=Number(e.slice(t+1));return t>0&&Kl(n)&&Number.isInteger(r)&&r>=0&&r<pl[n].requiredPieces}))]:[]}function Xl(e){return Array.isArray(e)?[...new Set(e.filter(e=>Number.isInteger(e)&&e>=0&&e<256).map(e=>Math.floor(e)))]:[]}function Zl(e){return Array.isArray(e)?[...new Set(e.filter(e=>Number.isInteger(e)&&e>=0&&e<10).map(e=>Math.floor(e)))]:[]}function Ql(e){let t=Array.isArray(e)?e:[];return Array.from({length:10},(e,n)=>Vl(Bl(t[n])))}function $l(){if(typeof document>`u`)try{return globalThis.localStorage===void 0?void 0:globalThis.localStorage}catch{return}let e=()=>Object.fromEntries(document.cookie.split(`;`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`=`);return t<0?[e,``]:[e.slice(0,t),e.slice(t+1)]})),t=(e,t,n)=>{document.cookie=`${e}=${t}; Path=/; Max-Age=${n}; SameSite=Lax`},n=(()=>{try{return globalThis.localStorage}catch{return}})();return{getItem:t=>{if(t!==`wally-world:town:v4`)return n?.getItem(t)??null;try{let t=e(),n=Math.min(Fl,Math.max(0,Number(t[`${Nl}_count`]??0)));if(n>0){let e=Array.from({length:n},(e,n)=>t[`${Nl}_${n}`]??``).join(``);if(e)return decodeURIComponent(e)}}catch{}return n?.getItem(t)??null},setItem:(e,r)=>{if(n?.setItem(e,r),e===`wally-world:town:v4`)try{let e=encodeURIComponent(r),n=Array.from({length:Math.min(Fl,Math.ceil(e.length/Pl))},(t,n)=>e.slice(n*Pl,(n+1)*Pl));n.forEach((e,n)=>t(`${Nl}_${n}`,e,31536e3));for(let e=n.length;e<Fl;e+=1)t(`${Nl}_${e}`,``,0);t(`${Nl}_count`,String(n.length),31536e3)}catch{}},removeItem:e=>{if(n?.removeItem(e),e===`wally-world:town:v4`){for(let e=0;e<Fl;e+=1)t(`${Nl}_${e}`,``,0);t(`${Nl}_count`,``,0)}}}}function eu(e=Date.now()){let t=typeof e==`number`?new Date(e):e;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}function tu(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function nu(e){let t=typeof e==`number`?new Date(e):e;return Math.floor(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())/864e5)}function ru(e,t=Date.now()){let n=ml.find(t=>t.id===e);if(!n)throw Error(`Unknown exchange company: ${e}`);let r=n.exchangeListing,i=r.maximumPrice-r.minimumPrice+1,a=tu(`WALLY-WORLD-PRICE-V1:offset:${e}`)%i,o=1+tu(`WALLY-WORLD-PRICE-V1:step:${e}`)%(i-1),s=(a+nu(t)%i*o)%i;return r.minimumPrice+s}function iu(e=Date.now()){let t=Object.fromEntries(ml.map(t=>[t.id,ru(t.id,e)]));return{dateKey:eu(e),prices:t}}function au(e=Date.now(),t={}){let n=t.random??Math.random,r=t.worldSeed===void 0?Ul(n):Math.floor(t.worldSeed)>>>0,i=tu(`crowd:${r}`),a=tu(`tokens:${r}`);return{version:4,wallyPosition:{x:0,z:4,facing:`n`},assetProgress:{},completedAssetIds:[],completedAt:{},budget:Vl(t.initialBudget??0),lifetimeBudgetEarned:0,exchangePurchases:{},exchangeRevealAfterCompletions:Wl(n,5,10),dailyPrices:iu(e),town:{worldSeed:r,crowdSeed:i,tokenSeed:a,discoveredAssetIds:[],ownedPlotAssetIds:[fl[0]],visitedAssetIds:[],permanentClearingAssetIds:[],footpaths:[],tokensCollected:0,collectedTokenKeys:[],peoplePassed:0,neighborhoodBudgetProduced:Array.from({length:10},()=>0),reserveCollectedIds:[],exploredNeighborhoodKeys:[`0:0`],celebratedNeighborhoodIds:[],developmentLevel:0},totalPlaySeconds:0,lastAccrualAt:e,lastSavedAt:e}}function ou(e){let t=Hl(e);if(!t)return{};let n={};for(let e of fl){let r=t[e];typeof r==`number`&&Number.isFinite(r)&&r>0&&(n[e]=Math.floor(Rl(r,0,pl[e].requiredPieces)))}return n}function su(e){let t=Hl(e);if(!t)return{};let n={};for(let e of fl){let r=t[e];typeof r==`number`&&Number.isFinite(r)&&r>0&&(n[e]=r)}return n}function cu(e){let t=Hl(e);if(!t)return{};let n={};for(let e of ml){let r=t[e.id];typeof r==`number`&&Number.isFinite(r)&&r>0&&(n[e.id]=Math.floor(Rl(r,0,e.requiredPieces)))}return n}function lu(e,t){if(!Array.isArray(e))return[];let n=[],r=new Set;for(let i of e){let e=Hl(i);if(!e||!Kl(e.from)||!Kl(e.to)||e.from===e.to)continue;let a=[e.from,e.to].sort().join(`::`),o=typeof e.id==`string`&&e.id.length>0?e.id:a;r.has(o)||(r.add(o),n.push({id:o,from:e.from,to:e.to,createdAt:Bl(e.createdAt,t)}))}return n}function uu(e,t){let n=Hl(e),r=eu(t);if(!n||n.dateKey!==r)return iu(t);let i=Hl(n.prices);if(!i)return iu(t);let a={};for(let e of ml){let n=i[e.id],r=e.exchangeListing,o=ru(e.id,t);if(typeof n!=`number`||!Number.isFinite(n)||n<r.minimumPrice||n>r.maximumPrice||n!==o)return iu(t);a[e.id]=Math.round(n)}return{dateKey:r,prices:a}}function du(e,t=Date.now()){let n=au(t),r=Hl(e);if(!r)return n;let i=Hl(r.wallyPosition),a=Hl(r.town),o=ou(r.assetProgress),s=cu(r.exchangePurchases),c=ql(r.completedAssetIds);for(let e of ml)o[e.id]=Math.max(o[e.id]??0,s[e.id]??0);for(let e of c)o[e]=pl[e].requiredPieces;let l=fl.filter(e=>(o[e]??0)>=pl[e].requiredPieces),u=new Set(l),d=su(r.completedAt);for(let e of l)d[e]||(d[e]=Bl(r.lastSavedAt,t));let f=i?.facing,p=typeof f==`string`&&Ll.has(f)?f:n.wallyPosition.facing,m=Math.floor(Bl(a?.worldSeed,n.town.worldSeed))>>>0,h=ql(a?.discoveredAssetIds),g=ql(a?.ownedPlotAssetIds);g.includes(fl[0])||g.unshift(fl[0]);for(let e of fl)(o[e]??0)>0&&!g.includes(e)&&g.push(e);let _=ql(a?.permanentClearingAssetIds).filter(e=>u.has(e));for(let e of l)_.includes(e)||_.push(e);let v=Yl(a?.collectedTokenKeys),y=[];for(let e of fl){let t=o[e]??0,n=v.filter(t=>t.startsWith(`${e}:`)).map(e=>Number(e.slice(e.lastIndexOf(`:`)+1))).sort((e,t)=>e-t).slice(0,t),r=new Set(n);for(let n=0;r.size<t&&!(n>=pl[e].requiredPieces);n+=1)r.add(n);for(let t of[...r].sort((e,t)=>e-t))y.push(`${e}:${t}`)}return{version:4,wallyPosition:{x:zl(i?.x,n.wallyPosition.x),z:zl(i?.z,n.wallyPosition.z),facing:p},assetProgress:o,completedAssetIds:l,completedAt:d,budget:Vl(Bl(r.budget,n.budget)),lifetimeBudgetEarned:Vl(Bl(r.lifetimeBudgetEarned)),exchangePurchases:s,exchangeRevealAfterCompletions:Math.floor(Rl(zl(r.exchangeRevealAfterCompletions,n.exchangeRevealAfterCompletions),5,10)),dailyPrices:uu(r.dailyPrices,t),town:{worldSeed:m,crowdSeed:Math.floor(Bl(a?.crowdSeed,tu(`crowd:${m}`)))>>>0,tokenSeed:Math.floor(Bl(a?.tokenSeed,tu(`tokens:${m}`)))>>>0,discoveredAssetIds:[...new Set([...h,...l])],ownedPlotAssetIds:g,visitedAssetIds:ql(a?.visitedAssetIds),permanentClearingAssetIds:_,footpaths:lu(a?.footpaths,t),tokensCollected:Math.floor(Bl(a?.tokensCollected)),collectedTokenKeys:y,peoplePassed:Math.floor(Bl(a?.peoplePassed)),neighborhoodBudgetProduced:Ql(a?.neighborhoodBudgetProduced),reserveCollectedIds:Xl(a?.reserveCollectedIds),exploredNeighborhoodKeys:Jl(a?.exploredNeighborhoodKeys),celebratedNeighborhoodIds:Zl(a?.celebratedNeighborhoodIds),developmentLevel:Math.min(8,Math.floor(l.length/10))},totalPlaySeconds:Bl(r.totalPlaySeconds),lastAccrualAt:Bl(r.lastAccrualAt,Bl(r.lastSavedAt,t)),lastSavedAt:Bl(r.lastSavedAt,t)}}function fu(e,t){return Math.floor(Rl(e.assetProgress[t]??0,0,pl[t].requiredPieces))}function pu(e,t){return Math.max(0,pl[t].requiredPieces-fu(e,t))}function mu(e,t,n){return e.town.collectedTokenKeys.includes(`${t}:${Math.floor(n)}`)}function hu(e,t){return e.town.ownedPlotAssetIds.includes(t)||fu(e,t)>0||e.completedAssetIds.includes(t)}function gu(e,t,n){let r=Math.max(1,Math.round(Bl(n,1)));return hu(e,t)?{state:e,purchased:!1,price:r,reason:`already-owned`}:e.budget<r?{state:e,purchased:!1,price:r,reason:`insufficient-budget`}:{purchased:!0,price:r,state:{...e,budget:Vl(e.budget-r),town:{...e.town,ownedPlotAssetIds:Gl(e.town.ownedPlotAssetIds,t),discoveredAssetIds:Gl(e.town.discoveredAssetIds,t)}}}}function _u(e,t,n){let r=Math.floor(n);if(r<0||r>=pl[t].requiredPieces)return e;let i=`${t}:${r}`;return e.town.collectedTokenKeys.includes(i)?e:{...e,town:{...e.town,collectedTokenKeys:[...e.town.collectedTokenKeys,i]}}}function vu(e){return yu(e).reduce((e,t)=>e+t,0)}function yu(e){let t=Array.from({length:10},()=>0);for(let n of e.completedAssetIds)t[wl(n)]+=pl[n].passiveBudgetPerMinute;return t.map((t,n)=>{let r=e.town.neighborhoodBudgetProduced[n]??0;return t<=0||r>=kl(n)?0:t<=4?t*2.25:Math.min(36,9+Math.sqrt(t-4)*1.65)})}function bu(e,t,n=1,r=1/0){let i=yu(e),a=Array.from({length:10},(t,n)=>e.town.neighborhoodBudgetProduced[n]??0),o=0;for(let e=0;e<10;e+=1){let s=Math.max(0,r-o);if(s<=0)break;let c=Math.max(0,kl(e)-a[e]),l=Math.min(s,c,i[e]*Math.max(0,t)*Math.max(0,n));l<=0||(a[e]=Vl(a[e]+l),o=Vl(o+l))}return{amount:o,neighborhoodBudgetProduced:a}}function xu(e){return e.completedAssetIds.filter(e=>e!==hl).length>=e.exchangeRevealAfterCompletions}function Su(e){return e.completedAssetIds.includes(hl)}function Cu(e,t=Date.now()){let n=eu(t);return e.dailyPrices.dateKey===n?e:{...e,dailyPrices:iu(t)}}function wu(e,t=Date.now()){let n=Math.max(0,t-e.lastAccrualAt);if(n<=0)return e;let r=bu(e,n/6e4);return{...e,budget:Vl(e.budget+r.amount),lifetimeBudgetEarned:Vl(e.lifetimeBudgetEarned+r.amount),town:{...e.town,neighborhoodBudgetProduced:r.neighborhoodBudgetProduced},totalPlaySeconds:e.totalPlaySeconds+n/1e3,lastAccrualAt:t}}function Tu(e,t=Date.now()){let n=Math.max(0,t-Math.max(e.lastSavedAt,e.lastAccrualAt)),r=Math.min(n,jl),i=vu(e);return{amount:bu(e,r/6e4,Ml,600).amount,elapsedMs:n,creditedMs:r,passiveBudgetPerMinute:i}}function Eu(e,t=Date.now()){let n=bu(e,Tu(e,t).creditedMs/6e4,Ml,600);return{...e,budget:Vl(e.budget+n.amount),lifetimeBudgetEarned:Vl(e.lifetimeBudgetEarned+n.amount),town:{...e.town,neighborhoodBudgetProduced:n.neighborhoodBudgetProduced},lastAccrualAt:t}}function Du(e,t,n){let r=pl[t],i=fu(e,t);if(i>=r.requiredPieces)return{state:e,collected:!1,completed:!0,remainingPieces:0,reason:`already-complete`};let a=i+1,o=a>=r.requiredPieces,s={...e.assetProgress,[t]:a},c=o?Gl(e.completedAssetIds,t):e.completedAssetIds,l=o?{...e.completedAt,[t]:e.completedAt[t]??n}:e.completedAt,u=o?Gl(e.town.permanentClearingAssetIds,t):e.town.permanentClearingAssetIds;return{state:{...e,assetProgress:s,completedAssetIds:c,completedAt:l,town:{...e.town,discoveredAssetIds:Gl(e.town.discoveredAssetIds,t),permanentClearingAssetIds:u,tokensCollected:e.town.tokensCollected+1,developmentLevel:Math.min(8,Math.floor(c.length/10))}},collected:!0,completed:o,remainingPieces:Math.max(0,r.requiredPieces-a)}}function Ou(e,t,n=Date.now()){return pl[t].discovery===`crowd`?t===`hidden-stock-exchange`&&!xu(e)?{state:e,collected:!1,completed:!1,remainingPieces:pu(e,t),reason:`exchange-hidden`}:Du(e,t,n):{state:e,collected:!1,completed:pu(e,t)===0,remainingPieces:pu(e,t),reason:`wrong-source`}}function ku(e,t,n=Date.now()){let r=Cu(e,n),i=r.dailyPrices.prices[t],a=pu(r,t);if(!Su(r))return{state:r,purchased:!1,completed:!1,price:i,remainingPieces:a,reason:`exchange-closed`};if(a===0)return{state:r,purchased:!1,completed:!0,price:i,remainingPieces:0,reason:`already-complete`};if(r.budget<i)return{state:r,purchased:!1,completed:!1,price:i,remainingPieces:a,reason:`insufficient-budget`};let o=Du(r,t,n),s=Math.min(pl[t].requiredPieces,(r.exchangePurchases[t]??0)+1);return{state:{...o.state,budget:Vl(r.budget-i),exchangePurchases:{...r.exchangePurchases,[t]:s}},purchased:!0,completed:o.completed,price:i,remainingPieces:o.remainingPieces}}function Au(e,t){return{...e,wallyPosition:{x:zl(t.x,e.wallyPosition.x),z:zl(t.z,e.wallyPosition.z),facing:Ll.has(t.facing)?t.facing:e.wallyPosition.facing}}}function ju(e,t=1){let n=Math.max(0,Math.floor(t));return n===0?e:{...e,town:{...e.town,peoplePassed:e.town.peoplePassed+n}}}function Mu(e,t){let n=Math.floor(t);return!Number.isFinite(n)||n<0||e.town.reserveCollectedIds.includes(n)?{state:e,collected:!1}:{collected:!0,state:{...e,town:{...e.town,reserveCollectedIds:[...e.town.reserveCollectedIds,n]}}}}function Nu(e,t){return!/^-?\d+:-?\d+$/.test(t)||e.town.exploredNeighborhoodKeys.includes(t)?e:{...e,town:{...e.town,exploredNeighborhoodKeys:[...e.town.exploredNeighborhoodKeys,t]}}}function Pu(e,t){let n=Math.floor(t);return n<0||n>=10||e.town.celebratedNeighborhoodIds.includes(n)?e:{...e,town:{...e.town,celebratedNeighborhoodIds:[...e.town.celebratedNeighborhoodIds,n]}}}function Fu(e=$l()){try{e?.removeItem?.(Al)}catch{}}function Iu(e=$l(),t=Date.now()){if(!e)return au(t);try{let n=e.getItem(Al);return n?Cu(Eu(du(JSON.parse(n),t),t),t):au(t)}catch{return au(t)}}function Lu(e,t=$l(),n=Date.now()){let r={...Cu(wu(e,n),n),lastSavedAt:n};if(!t)return r;try{t.setItem(Al,JSON.stringify(r))}catch{}return r}var Ru=`neighborhood_restaurant.artisan_bakery.coffee_shop.pizza_parlor.taco_stand.ice_cream_shop.farmers_market.rooftop_garden_cafe.noodle_house.juice_bar.starter_cottage.townhome.apartment_building.luxury_apartments.co_living_house.brownstone.artist_lofts.garden_flats.waterfront_condos.senior_living.pear_tech_office.fashion_boutique.bookstore.record_shop.bike_shop.furniture_studio.design_agency.coworking_hub.boutique_hotel.department_store.stock_exchange.community_bank.credit_union.brokerage_house.insurance_house.venture_studio.token_vault.auction_house.town_hall.post_office.public_library.neighborhood_school.fire_station.community_clinic.transit_station.public_safety_office.courthouse.recycling_center.solar_farm.wind_lab.water_tower.power_station.data_center.microchip_factory.textile_mill.distribution_warehouse.shipping_depot.construction_yard.cinema.community_theater.city_museum.music_hall.boardwalk_arcade.bowling_alley.fitness_club.skate_park.sports_arena.community_pool.central_park.playground.dog_park.fountain_plaza.botanical_garden.community_garden.neighborhood_orchard.pond_pavilion.tree_nursery.flower_conservatory.waterfront_pier.hiking_lodge`.split(`.`),zu={"food-hospitality":[1,2,3,4,5,6,7,8,9,10],"real-estate":[11,12,13,14,15,16,17,18,19,20],"technology-companies":[21,22,23,24,25,26,27,28,29,30],"agriculture-commodities":[75,74,69,73,76,78,77,72,70,80],"culture-collectibles":[61,62,41,60,59,23,73,63,64,38],"public-community":[69,70,44,42,43,40,39,73,68,41],"trade-industry-transport":[25,58,56,55,54,56,45,57,79,58],"finance-energy-infrastructure":[32,33,31,51,50,49,52,45,57,53]},Bu={"onre-reinsurance":35,"hidden-stock-exchange":25,"whisper-wind-farm":50,"sunpatch-solar-garden":49,"ribbon-water-tower":51};function Vu(e){let t=dl.filter(t=>t.category===e.category),n=Math.max(0,t.findIndex(t=>t.id===e.id)),r=Bu[e.id]??zu[e.category][n]??1,i=Ru[r-1]??Ru[0],a=String(r).padStart(2,`0`);return{number:r,paddedNumber:a,slug:i,iconPath:`/assets/token-world/icons/${a}_${i}_icon.png`,stagePath:e=>`/assets/token-world/build_stages/${a}_${i}/stage_${Math.max(1,Math.min(5,Math.round(e)))}.png`}}var Hu=`/assets/token-world/token_base/token_base.png`,Uu=.9,Wu=[{id:0,packId:`01_feast_street`,name:`WALLY WORLD`,sign:`WALLY WORLD`,signFolder:`10_wally_world`,signAspect:941/1672,center:{x:0,y:4},map:{x:0,y:0},palette:[`#d97b62`,`#e9bd62`,`#739b7e`]},{id:1,packId:`02_homeward_gardens`,name:`Tokenize N’ Chill`,sign:`Tokenize N’ Chill`,signFolder:`01_tokenize_n_chill`,signAspect:1672/941,center:{x:-47,y:5},map:{x:-1,y:0},palette:[`#7b9db0`,`#d9a775`,`#8aa17a`]},{id:2,packId:`03_japan_quarter`,name:`Relax, we're moving onchain`,sign:`Relax, we're moving onchain`,signFolder:`02_relax_were_moving_onchain`,signAspect:941/1672,center:{x:47,y:4},map:{x:1,y:0},palette:[`#c96f63`,`#5f8b88`,`#e6c480`]},{id:3,packId:`04_ledger_square`,name:`COMING FOR WALL ST`,sign:`COMING FOR WALL ST`,signFolder:`03_coming_for_wall_st`,signAspect:1672/941,center:{x:-50,y:53},map:{x:-1,y:1},palette:[`#496a91`,`#d8b46e`,`#6c8a78`]},{id:4,packId:`05_ubuntu_gardens`,name:`Crypto Meets the World`,sign:`Crypto Meets the World`,signFolder:`04_crypto_meets_the_world`,signAspect:1536/1024,center:{x:0,y:56},map:{x:0,y:1},palette:[`#c57a4f`,`#6e9b72`,`#e0b65f`]},{id:5,packId:`06_mountain_heights`,name:`TokenizeThis`,sign:`TokenizeThis`,signFolder:`05_tokenizethis`,signAspect:1672/941,center:{x:50,y:52},map:{x:1,y:1},palette:[`#668aa1`,`#88a184`,`#d9b77b`]},{id:6,packId:`07_lantern_arts`,name:`Zeus' RWA Lounge`,sign:`Zeus' RWA Lounge`,signFolder:`06_zeus_rwa_lounge`,signAspect:1672/941,center:{x:-51,y:-48},map:{x:-1,y:-1},palette:[`#9b7093`,`#d77c62`,`#e1b965`]},{id:7,packId:`08_green_commons`,name:`Prosperity for All`,sign:`Prosperity for All`,signFolder:`07_prosperity_for_all`,signAspect:1672/941,center:{x:0,y:-51},map:{x:0,y:-1},palette:[`#6f9b76`,`#90b1a0`,`#e1be6f`]},{id:8,packId:`09_latin_plaza`,name:`YOU MADE IT THIS FAR`,sign:`YOU MADE IT THIS FAR`,signFolder:`08_you_made_it_this_far`,signAspect:941/1672,center:{x:51,y:-47},map:{x:1,y:-1},palette:[`#d46e5e`,`#e4a94f`,`#62a19a`]},{id:9,packId:`10_tropical_harbor`,name:`Happy Tokenizing`,sign:`Happy Tokenizing`,signFolder:`09_happy_tokenizing`,signAspect:1672/941,center:{x:0,y:-100},map:{x:0,y:-2},palette:[`#4f9c9b`,`#e3b55e`,`#cf7964`]}],Gu=[[0],[1,2],[3,4,5],[6,7,8],[9]],Ku=[[{x:-15,y:9},{x:-6,y:10},{x:5,y:9},{x:15,y:7},{x:-14,y:-7},{x:-5,y:-8},{x:6,y:-7},{x:15,y:-9}],[{x:-15,y:11},{x:-16,y:1},{x:-14,y:-10},{x:-5,y:-14},{x:6,y:-13},{x:15,y:-8},{x:16,y:2},{x:13,y:13}],[{x:-17,y:12},{x:-8,y:9},{x:2,y:11},{x:11,y:1},{x:-13,y:-2},{x:-6,y:-10},{x:6,y:-11},{x:16,y:-14}],[{x:-15,y:12},{x:-4,y:12},{x:8,y:12},{x:16,y:4},{x:-15,y:-3},{x:-5,y:-10},{x:6,y:-10},{x:16,y:-8}],[{x:0,y:10},{x:-10,y:6},{x:-19,y:10},{x:10,y:7},{x:19,y:11},{x:-6,y:-10},{x:-13,y:-17},{x:9,y:-13}],[{x:-18,y:-13},{x:-9,y:-10},{x:1,y:-7},{x:13,y:-4},{x:9,y:5},{x:-2,y:7},{x:-13,y:11},{x:0,y:16}],[{x:-17,y:11},{x:-7,y:13},{x:5,y:11},{x:16,y:6},{x:10,y:-1},{x:1,y:-6},{x:-12,y:-7},{x:-3,y:-14}],[{x:-18,y:6},{x:-12,y:15},{x:0,y:17},{x:13,y:13},{x:18,y:2},{x:10,y:-9},{x:-2,y:-14},{x:-15,y:-9}],[{x:-17,y:14},{x:-8,y:16},{x:8,y:17},{x:17,y:8},{x:-13,y:3},{x:0,y:10},{x:13,y:-2},{x:-6,y:-12}],[{x:-18,y:11},{x:-8,y:11},{x:3,y:10},{x:14,y:7},{x:17,y:-2},{x:11,y:-12},{x:1,y:-14},{x:-10,y:-11}]];function qu(e){return{...e.center}}function Ju(e,t){let n=new Set(e.completedAssetIds);return t.flatMap((e,t)=>{let r=e.filter(e=>e.discovery===`crowd`);return r.length>0&&r.every(e=>n.has(e.id))?[t]:[]})}function Yu(e){let t=new Set(e),n=[];for(let e=0;e<Gu.length;e+=1){let r=Gu[e];if(e>0&&!Gu[e-1].every(e=>t.has(e)))break;n.push(...r)}return n}function Xu(e,t){let n=t.filter(e=>e.discovery===`crowd`),r=n.reduce((e,t)=>e+t.requiredPieces,0);if(r===0)return 1;let i=n.reduce((t,n)=>t+Math.min(n.requiredPieces,Math.max(0,e.assetProgress[n.id]??0)),0);return Math.min(1,i/r)}function Zu(e){let t=new Set(e);return t.has(9)?{x:184,y:238}:t.has(6)?{x:184,y:180}:t.has(3)?{x:182,y:142}:t.has(1)?{x:148,y:100}:{x:62,y:70}}function Qu(e,t,n){let r=(e,t,n)=>e+Math.round((t-e)/n)*n;return{x:r(e.x,t.x,n.x),y:r(e.y,t.y,n.y)}}var $u=`/assets/scored-paper/neighborhood_props`,ed=`/assets/scored-paper/universal_environment`,td={tree:`01_broadleaf_tree.png`,"flower-bed":`06_flower_cluster.png`,bench:`09_wood_bench.png`,lamp:`07_street_lamp.png`,planter:`05_angular_shrub.png`,bicycle:`16_bicycle_rack.png`,"notice-board":`15_blank_signpost.png`};function nd(e){return`${ed}/${td[e]}`}var rd=[[`01_bistro_table.png`,`03_blank_menu_board.png`,`05_herb_planter.png`,`06_food_cart.png`,`07_produce_crates.png`,`09_umbrella_table.png`,`11_deco_street_lamp.png`,`12_decorative_fountain.png`],[`01_mailbox.png`,`02_hedge_section.png`,`03_picket_gate.png`,`04_porch_bench.png`,`07_sandbox.png`,`08_birdbath.png`,`09_laundry_line.png`,`11_residential_lamp.png`],[`01_stone_garden_lantern.png`,`02_vending_kiosk.png`,`03_bonsai_planter.png`,`04_bamboo_screen.png`,`05_curved_bridge.png`,`08_lantern_cluster.png`,`09_stepping_stones.png`,`10_cedar_bench.png`],[`01_bronze_bull_sculpture.png`,`02_street_clock.png`,`03_news_kiosk.png`,`04_deco_street_lamp.png`,`06_stone_planter.png`,`07_plaza_bench.png`,`08_subway_entrance.png`,`10_abstract_ticker_sculpture.png`],[`01_patterned_planter.png`,`02_shade_bench.png`,`03_water_urns.png`,`04_woven_canopy.png`,`05_solar_street_lamp.png`,`06_market_baskets.png`,`09_bicycle.png`,`10_baobab_planter.png`],[`01_ski_rack.png`,`02_trail_sign.png`,`03_pine_planter.png`,`04_firewood_stack.png`,`05_cable_car_cabin.png`,`06_telescope.png`,`09_hot_spring_rocks.png`,`10_rescue_sled.png`],[`01_blank_marquee_sign.png`,`02_ticket_booth.png`,`03_film_reel_sculpture.png`,`04_stage_light.png`,`05_poster_case.png`,`07_abstract_mural_wall.png`,`08_plaza_bench.png`,`10_record_crate.png`],[`01_shade_tree.png`,`02_sapling_guard.png`,`03_park_bench.png`,`04_park_lamp.png`,`05_flower_bed.png`,`07_picnic_table.png`,`08_open_gazebo.png`,`12_park_fountain.png`],[`01_tiled_planter.png`,`02_market_umbrella.png`,`03_fruit_cart.png`,`04_cafe_table_set.png`,`05_courtyard_fountain.png`,`06_pergola.png`,`07_curved_bench.png`,`09_string_light_arch.png`],[`01_palm_planter.png`,`02_lounge_chair.png`,`03_surfboard_rack.png`,`04_pier_lantern.png`,`05_market_baskets.png`,`06_boardwalk_bench.png`,`07_coral_sculpture.png`,`11_hammock.png`]];function id(e,t){let n=String(e+1).padStart(2,`0`),r=[`feast_street`,`homeward_gardens`,`japan_quarter`,`ledger_square`,`ubuntu_gardens`,`mountain_heights`,`lantern_arts`,`green_commons`,`latin_plaza`,`tropical_harbor`],i=rd[e]?.[t];if(!i)throw RangeError(`No scored-paper prop ${t} for neighborhood ${e}.`);return`${$u}/${n}_${r[e]}/${i}`}var ad=`${ed}/22_flying_bird_left.png`,od=`${ed}/23_flying_bird_right.png`,sd=768,cd=384,ld=192;function ud(e){return Math.min(1,Math.max(0,Number.isFinite(e)?e:0))}function dd(e,t){if(typeof document>`u`)throw Error(`World landmark textures can only be created in a browser.`);let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function fd(e){let t=e.getContext(`2d`);if(!t)throw Error(`A 2D canvas context is required for world landmark textures.`);return t}function pd(e){let t=new wi(e);return t.colorSpace=Be,t.minFilter=u,t.magFilter=u,t.generateMipmaps=!1,t.wrapS=a,t.wrapT=a,t.needsUpdate=!0,t}function md(e){let t=e.image;if(!t||typeof t.getContext!=`function`)throw Error(`Expected a CanvasTexture backed by an HTML canvas.`);return t}function hd(e){let t=e>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gd(e,t,n,r,i,a){let o=Math.min(a,r/2,i/2);e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}function _d(e,t,n,r,i,a){e.save(),e.globalCompositeOperation=`multiply`;for(let o=0;o<r;o+=1){let r=i.x+t()*i.width,s=i.y+t()*i.height,c=8+t()*Math.max(12,i.width*.12),l=5+t()*Math.max(9,i.height*.11),u=e.createRadialGradient(r,s,0,r,s,c);u.addColorStop(0,n[o%n.length]),u.addColorStop(.65,n[o%n.length]),u.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=u,e.globalAlpha=a*(.25+t()*.55),e.beginPath(),e.ellipse(r,s,c,l,t()*Math.PI,0,Math.PI*2),e.fill()}e.restore()}function vd(e,t,n,r){e.save(),e.fillStyle=`#5e5144`;for(let i=0;i<Math.round(n*r/620);i+=1){e.globalAlpha=.015+t()*.035;let i=.35+t()*1.2;e.fillRect(t()*n,t()*r,i,i)}e.restore()}function yd(e){return Math.min(5,Math.max(1,Math.ceil(ud(e)*5)))}var bd={0:[`WALLY`,`WORLD`],1:[`Tokenize`,`N’ Chill`],2:[`Relax, we're`,`moving onchain`],3:[`COMING FOR`,`WALL ST`],4:[`Crypto Meets`,`the World`],5:[`TokenizeThis`],6:[`Zeus' RWA`,`Lounge`],7:[`Prosperity`,`for All`],8:[`YOU MADE IT`,`THIS FAR`],9:[`Happy`,`Tokenizing`]};function xd(e,t,n){let r=fd(e),i=yd(n),a=hd(20905+t.id*977+i*31),o=e.width,s=e.height,c=Math.max(28,Math.min(o,s)*.075),l=Math.min(o,s)*.16;r.clearRect(0,0,o,s),r.save(),r.shadowColor=`rgba(56,63,57,.16)`,r.shadowBlur=14,r.shadowOffsetY=7,gd(r,c,c,o-c*2,s-c*2,l),r.fillStyle=`rgba(250,246,231,.97)`,r.fill(),r.restore(),gd(r,c,c,o-c*2,s-c*2,l),r.strokeStyle=t.palette[2],r.globalAlpha=.55,r.lineWidth=Math.max(12,c*.34),r.stroke(),r.globalAlpha=1,gd(r,c+9,c+9,o-c*2-18,s-c*2-18,l*.82),r.strokeStyle=`#4b524c`,r.lineWidth=Math.max(5,c*.14),r.stroke();let u=2+i*2;for(let e=0;e<u;e+=1){let n=e%2==0?1:-1,l=s*(.25+e*.173%.52),u=n>0?o-c*1.18:c*1.18;r.save(),r.translate(u,l),r.rotate(n*(.4+a()*.35)),r.fillStyle=t.palette[(e+1)%t.palette.length],r.globalAlpha=.42+i*.07,r.beginPath(),r.ellipse(0,0,c*.16,c*.31,0,0,Math.PI*2),r.fill(),r.restore()}r.globalAlpha=1,r.fillStyle=t.palette[1],r.beginPath(),r.arc(o/2,c*1.42,c*.18,0,Math.PI*2),r.fill(),r.strokeStyle=`#4b524c`,r.lineWidth=Math.max(3,c*.09),r.stroke();let d=bd[t.id]??[t.sign],f=Math.min(o*.16,s*(d.length===1?.19:.13));for(r.textAlign=`center`,r.textBaseline=`middle`,r.font=`750 ${f}px ui-rounded, "Trebuchet MS", sans-serif`;Math.max(...d.map(e=>r.measureText(e).width))>o-c*3.1&&f>28;)f-=2,r.font=`750 ${f}px ui-rounded, "Trebuchet MS", sans-serif`;let p=f*1.08,m=s*.52-(d.length-1)*p/2;r.lineJoin=`round`,r.strokeStyle=`rgba(250,246,231,.95)`,r.lineWidth=Math.max(6,f*.12),r.fillStyle=`#414943`,d.forEach((e,t)=>{let n=m+t*p;r.strokeText(e,o/2,n),r.fillText(e,o/2,n)}),r.strokeStyle=t.palette[0],r.lineWidth=Math.max(5,c*.13),r.lineCap=`round`,r.beginPath(),r.moveTo(o*.33,s-c*1.48),r.quadraticCurveTo(o*.5,s-c*1.15,o*.67,s-c*1.48),r.stroke(),vd(r,a,o,s)}function Sd(e,t=0){let n=e.signAspect>=1?900:620,r=dd(n,Math.round(n/e.signAspect));return xd(r,e,t),pd(r)}function Cd(e,t,n){let r=Sd(t,n);return e.dispose(),r}function wd(e,t,n,r,i,a,o){e.beginPath(),e.arc(t,n,r,a,o),e.arc(t,n,i,o,a,!0),e.closePath()}function Td(e,t){let n=fd(e),r=Wu.map((e,n)=>ud(t[n]??0)),i=hd(358929),a=e.width/2;n.clearRect(0,0,e.width,e.height),n.save(),n.shadowColor=`rgba(49,46,39,0.17)`,n.shadowBlur=12,n.shadowOffsetY=7,n.beginPath(),n.arc(a,236,189,0,Math.PI*2),n.fillStyle=`rgba(249,247,238,0.96)`,n.fill(),n.restore();let o=.026;for(let e=0;e<Wu.length;e+=1){let t=Wu[e],s=-Math.PI/2+e/10*Math.PI*2+o,c=-Math.PI/2+(e+1)/10*Math.PI*2-o;if(wd(n,a,236,182,38,s,c),n.fillStyle=`rgba(225,221,207,0.44)`,n.fill(),r[e]>0){n.save(),wd(n,a,236,182,38,s,c),n.clip();let o=144*r[e],l=n.createRadialGradient(a,236,38,a,236,182);l.addColorStop(0,t.palette[1]),l.addColorStop(.64,t.palette[0]),l.addColorStop(1,t.palette[2]),n.fillStyle=l,n.globalAlpha=.68+r[e]*.24,n.beginPath(),n.arc(a,236,38+o,s,c),n.arc(a,236,38,c,s,!0),n.closePath(),n.fill(),_d(n,i,t.palette,3,{x:a-182,y:54,width:364,height:364},.08+r[e]*.12),n.restore()}n.save(),n.strokeStyle=`rgba(68,78,71,0.5)`,n.lineWidth=1.8,wd(n,a,236,182,38,s,c),n.stroke(),n.restore()}if(n.save(),n.strokeStyle=`rgba(65,76,68,0.78)`,n.lineWidth=4,n.beginPath(),n.arc(a,236,186,0,Math.PI*2),n.stroke(),n.restore(),n.save(),n.translate(a,240),n.rotate(-.05),n.fillStyle=`rgba(249,247,238,0.9)`,n.beginPath(),n.arc(0,0,43,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(47,43,39,0.8)`,n.lineWidth=3,n.stroke(),n.font=`800 42px ui-rounded, 'Trebuchet MS', sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#302d29`,n.fillText(`W`,0,4),n.restore(),vd(n,i,e.width,640),n.save(),n.textAlign=`center`,n.textBaseline=`middle`,n.font=`800 35px ui-rounded, 'Trebuchet MS', sans-serif`,n.lineWidth=6,n.strokeStyle=`rgba(250,247,236,0.98)`,n.strokeText(`BRING THE WORLD ONCHAIN`,a,494),n.fillStyle=`#526b5f`,n.fillText(`BRING THE WORLD ONCHAIN`,a,494),n.restore(),r[0]>=.999){let e=r.reduce((e,t)=>e+t,0)/r.length;n.save(),gd(n,188,548,392,22,22/2),n.fillStyle=`rgba(224,220,207,0.72)`,n.fill(),n.clip();let t=n.createLinearGradient(188,548,580,548);t.addColorStop(0,Wu[0].palette[0]),t.addColorStop(.5,Wu[4].palette[1]),t.addColorStop(1,Wu[9].palette[0]),n.fillStyle=t,n.globalAlpha=.9,n.fillRect(188,548,392*e,22),n.restore(),n.save(),gd(n,188,548,392,22,22/2),n.strokeStyle=`rgba(48,45,41,0.72)`,n.lineWidth=2.5,n.stroke(),n.textAlign=`center`,n.font=`750 14px ui-rounded, 'Trebuchet MS', sans-serif`,n.fillStyle=`rgba(48,45,41,0.8)`,n.fillText(`${Math.round(e*100)}% OF THE WORLD ONCHAIN`,a,606),n.restore()}}function Ed(e=[]){let t=dd(sd,sd);return Td(t,e),pd(t)}function Dd(e,t){Td(md(e),t),e.needsUpdate=!0}function Od(e){let t=fd(e),n=hd(5951559);t.clearRect(0,0,e.width,e.height),t.save(),t.translate(24,10),t.filter=`blur(14px)`;let r=t.createLinearGradient(78,62,326,141);r.addColorStop(0,`rgba(49,45,39,0.38)`),r.addColorStop(.55,`rgba(49,45,39,0.2)`),r.addColorStop(1,`rgba(49,45,39,0)`),t.fillStyle=r,t.beginPath(),t.moveTo(66,69),t.bezierCurveTo(95,36,154,49,178,73),t.bezierCurveTo(220,84,289,105,333,135),t.bezierCurveTo(276,149,202,142,147,127),t.bezierCurveTo(105,126,56,111,66,69),t.closePath(),t.fill(),t.restore(),t.save(),t.filter=`blur(4px)`,t.fillStyle=`rgba(45,41,36,0.19)`,t.beginPath(),t.moveTo(78,79),t.bezierCurveTo(102,60,144,61,166,82),t.bezierCurveTo(205,91,248,108,270,124),t.bezierCurveTo(224,128,174,119,136,108),t.bezierCurveTo(104,110,72,101,78,79),t.closePath(),t.fill(),t.restore(),t.save(),t.fillStyle=`rgba(50,45,39,0.08)`;for(let e=0;e<34;e+=1){let e=88+n()*212,r=80+n()*55,i=1+n()*4;t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill()}t.restore()}function kd(){let e=dd(cd,ld);return Od(e),pd(e)}var Ad=Object.freeze({tileSize:360,worldSeed:1463897164,rebaseDistance:1440,tileViewRadius:3}),jd=[`sage-garden`,`cream-market`,`clay-court`,`lavender-walk`,`bluebell-square`],Md=[`tree`,`flower-bed`,`bench`,`lamp`,`planter`,`bicycle`,`notice-board`],Nd=Math.PI*2;function Pd(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Fd(e,t=0,n=0,r=0){let i=Math.imul(t|0,2654435761),a=Math.imul(n|0,2246822519),o=Math.imul(r|0,3266489917);return Pd((e^i^a^o)>>>0)}function Id(e,t=0,n=0,r=0){return Fd(e,t,n,r)/4294967296}function Ld(e,t,n){let r=typeof n==`number`?n:n.x,i=typeof n==`number`?n:n.y,a=(e,t,n)=>n<=0?e:e+Math.round((t-e)/n)*n;return{x:a(e.x,t.x,r),y:a(e.y,t.y,i)}}function Rd(e,t,n){let r=e.x,i=e.y,a=0;return t===`east`?(r+=1,a=1):t===`west`?a=1:(t===`north`&&(i+=1),a=2),Id(n,r,i,701+a)>.18}function zd(e,t,n){let r=e.x-n*.5,i=e.y-n*.5;for(let e=0;e<t;e+=1){let e=r;r=-i,i=e}return{x:r+n*.5,y:i+n*.5}}function Bd(e,t,n){let r=n.tileSize,i=r*.5,a=(Id(n.worldSeed,t.x,t.y,810+e.length)-.5)*48,o=(Id(n.worldSeed,t.x,t.y,830+e.charCodeAt(0))-.5)*34,s;return s=e===`north`?[{x:i,y:r},{x:i+a,y:r*.76},{x:i+o,y:r*.61},{x:i,y:i}]:e===`south`?[{x:i,y:0},{x:i-a,y:r*.24},{x:i-o,y:r*.39},{x:i,y:i}]:e===`east`?[{x:r,y:i},{x:r*.76,y:i-a},{x:r*.61,y:i-o},{x:i,y:i}]:[{x:0,y:i},{x:r*.24,y:i+a},{x:r*.39,y:i+o},{x:i,y:i}],{socket:e,points:s,width:16+Id(n.worldSeed,t.x,t.y,850+e.length)*7}}function Vd(e,t=Ad){let n=t.worldSeed,r=t.tileSize,i=Fd(n,e.x,e.y,17),a=i&3,o=jd[Fd(n,e.x,e.y,23)%jd.length],s=[`north`,`east`,`south`,`west`].filter(t=>Rd(e,t,n)).map(n=>Bd(n,e,t));s.length===0&&s.push(Bd(`south`,e,t));let c=10+i%9,l=[];for(let t=0;t<c;t+=1){let i=Id(n,e.x,e.y,100+t)*Nd,o=r*(.25+Id(n,e.x,e.y,200+t)*.2),s={x:r*.5+Math.cos(i)*o,y:r*.5+Math.sin(i)*o*.86},c=Fd(n,e.x,e.y,300+t)%Md.length;l.push({id:Fd(n,e.x,e.y,400+t),kind:Md[c],offset:zd(s,a,r),rotation:Id(n,e.x,e.y,500+t)*Nd,scale:.82+Id(n,e.x,e.y,600+t)*.38,tint:Fd(n,e.x,e.y,650+t)%4,phase:Id(n,e.x,e.y,690+t)*Nd})}let u=[],d=14+Fd(n,e.x,e.y,901)%10;for(let t=0;t<d;t+=1){let i=Id(n,e.x,e.y,910+t*2),a=Id(n,e.x,e.y,911+t*2);u.push({x:r*(.08+i*.84),y:r*(.08+a*.84)})}return{address:e,key:`${e.x}:${e.y}`,palette:o,rotationQuarterTurns:a,greenInset:19+Id(n,e.x,e.y,33)*18,plazaRadius:28+Id(n,e.x,e.y,34)*24,paths:s,props:l,crowdAnchors:u}}var Hd=n(),Ud=360,Wd=80,Gd=1200,Kd=128,qd=Wu.map(e=>e.center),Jd=[`#f2d2b6`,`#c88777`,`#82a58a`,`#7fa7bd`,`#d6ad61`,`#9a86aa`,`#77a7a1`,`#bc8a68`,`#e09c67`,`#69a7a3`],Yd=[`Herd strong together!`,`Trunks up!`,`Bring the world onchain!`,`Good to see you, WALLY!`,`Looking sharp, WALLY!`,`Have a wonderful walk!`],Xd={"food-hospitality":`#d98273`,"real-estate":`#77aec7`,"technology-companies":`#78b99b`,"agriculture-commodities":`#d4aa55`,"culture-collectibles":`#a28ab7`,"public-community":`#5f9e98`,"trade-industry-transport":`#ce874e`,"finance-energy-infrastructure":`#496a91`},Zd={"food-hospitality":349.23,"real-estate":392,"technology-companies":440,"agriculture-commodities":523.25,"culture-collectibles":466.16,"public-community":587.33,"trade-industry-transport":329.63,"finance-energy-infrastructure":293.66},Qd=[{roots:[130.81,110],melody:[261.63,329.63,392,329.63,220,261.63,329.63,293.66],cutoff:1360},{roots:[146.83,116.54],melody:[293.66,349.23,440,349.23,233.08,293.66,349.23,261.63],cutoff:1480},{roots:[116.54,98],melody:[233.08,293.66,349.23,293.66,196,233.08,293.66,261.63],cutoff:1220},{roots:[164.81,130.81],melody:[329.63,392,493.88,392,261.63,329.63,392,349.23],cutoff:1660},{roots:[123.47,103.83],melody:[246.94,311.13,369.99,311.13,207.65,246.94,311.13,277.18],cutoff:1320},{roots:[174.61,146.83],melody:[349.23,440,523.25,440,293.66,349.23,440,392],cutoff:1780},{roots:[110,92.5],melody:[220,277.18,329.63,277.18,185,220,277.18,246.94],cutoff:1160},{roots:[155.56,123.47],melody:[311.13,392,466.16,392,246.94,311.13,392,349.23],cutoff:1580}],$d=[{kicks:[0,3,7,10],snares:[4,12],ghosts:[15],hats:[0,2,4,6,8,10,12,14],bass:[0,3,8,10,14],melody:[1,3,7,9,13],swing:.026},{kicks:[0,6,10,14],snares:[4,12],ghosts:[11],hats:[0,2,4,6,8,10,12,14],bass:[0,6,8,13],melody:[1,5,7,11,15],swing:.032},{kicks:[0,3,8,11],snares:[4,12],ghosts:[14],hats:[0,2,4,6,8,10,12,14],bass:[0,5,8,14],melody:[3,7,9,13],swing:.022},{kicks:[0,3,7,8,11],snares:[4,12],ghosts:[15],hats:[0,2,4,6,8,10,12,14],bass:[0,5,8,13],melody:[1,5,9,11,15],swing:.028},{kicks:[0,7,10,14],snares:[4,12],ghosts:[11],hats:[0,2,4,6,8,10,12,14],bass:[0,6,8,15],melody:[3,5,9,13],swing:.034},{kicks:[0,3,6,10],snares:[4,12],ghosts:[15],hats:[0,2,4,6,8,10,12,14],bass:[0,7,8,14],melody:[1,3,7,11,13],swing:.024},{kicks:[0,3,8,10],snares:[4,12],ghosts:[14],hats:[0,2,4,6,8,10,12,14],bass:[0,3,8,14],melody:[3,7,11,15],swing:.036},{kicks:[0,6,10,14],snares:[4,12],ghosts:[11],hats:[0,2,4,6,8,10,12,14],bass:[0,6,8,13],melody:[1,5,9,13,15],swing:.03}],ef=330,tf={pear:``,cloud:``,robot:``,helix:``,fox:``,chip:``,sun:``,parcel:``,satellite:``,droplet:``,onre:``};function nf(e){return{budget:e.budget,cards:ml.map(t=>({id:t.id,name:t.name,price:e.dailyPrices.prices[t.id],remaining:pu(e,t.id),icon:t.exchangeListing.iconShape}))}}function rf(e){let t=e>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function af(e){return xl(e).stageCount}function of(e,t,n){return e>=t?n-1:Math.max(0,Math.min(n-2,Math.floor(e/t*n)))}function sf(){return Wu.map((e,t)=>dl.filter(e=>Math.floor((xl(e).packNumber-1)/8)===t))}function cf(e,t,n){if(t.discovery!==`crowd`||fu(e,t.id)>0||hu(e,t.id))return!0;let r=n.filter(e=>e.discovery===`crowd`),i=r.findIndex(e=>e.id===t.id);if(i<=0)return!0;let a=r[i<=2?0:i<=4?1:2];return!!(a&&pu(e,a.id)===0)}function lf(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);if(!i)throw Error(`Canvas rendering is unavailable.`);n(i,e,t);let a=new wi(r);return a.colorSpace=Be,a.minFilter=u,a.magFilter=u,a.generateMipmaps=!1,a}function uf(e){return lf(768,224,t=>{t.clearRect(0,0,768,224),t.save(),t.shadowColor=`rgba(69, 55, 45, 0.18)`,t.shadowBlur=14,t.shadowOffsetY=7,t.fillStyle=`#fffaf0`,t.strokeStyle=`#574a40`,t.lineWidth=8,t.beginPath(),t.moveTo(54,22),t.lineTo(714,22),t.quadraticCurveTo(746,22,746,54),t.lineTo(746,154),t.quadraticCurveTo(746,186,714,186),t.lineTo(356,186),t.lineTo(316,214),t.lineTo(324,186),t.lineTo(54,186),t.quadraticCurveTo(22,186,22,154),t.lineTo(22,54),t.quadraticCurveTo(22,22,54,22),t.closePath(),t.fill(),t.shadowColor=`transparent`,t.stroke(),t.fillStyle=`#3f3732`,t.font=`700 39px Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(e,384,103,660),t.restore()})}function df(e,t=1024){let n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`,{willReadFrequently:!0});if(!r)throw Error(`Canvas rendering is unavailable.`);let i=new wi(n);i.colorSpace=Be,i.minFilter=u,i.magFilter=u,i.generateMipmaps=!1;let a=new window.Image;return a.onload=()=>{r.clearRect(0,0,t,t),r.drawImage(a,0,0,t,t);let e=r.getImageData(0,0,t,t);for(let t=0;t<e.data.length;t+=4){let n=e.data[t],r=e.data[t+1],i=e.data[t+2],a=Math.min(Math.max(0,(n-196)/46),Math.max(0,(i-165)/70),Math.max(0,(118-r)/92));a>0&&(e.data[t+3]=Math.round(e.data[t+3]*(1-a)))}r.putImageData(e,0,0),i.needsUpdate=!0},a.src=e,i}function ff(e){let t=document.createElement(`canvas`);t.width=384,t.height=576;let n=t.getContext(`2d`,{willReadFrequently:!0});if(!n)throw Error(`Canvas rendering is unavailable.`);let r=new wi(t);r.colorSpace=Be,r.minFilter=u,r.magFilter=u,r.generateMipmaps=!1;let i=new window.Image;return i.onload=()=>{n.clearRect(0,0,384,576),n.drawImage(i,330,120,600,940,0,0,384,576);let t=n.getImageData(0,0,384,576);for(let n=0;n<t.data.length;n+=4){let r=t.data[n],i=t.data[n+1],a=t.data[n+2],o=Math.min(Math.max(0,(r-196)/46),Math.max(0,(a-165)/70),Math.max(0,(118-i)/92));if(o>.08){t.data[n+3]=Math.round(t.data[n+3]*(1-o));continue}let s=r*.2126+i*.7152+a*.0722,c=Math.max(30,Math.min(255,18+s*e));t.data[n]=c,t.data[n+1]=c,t.data[n+2]=c}n.putImageData(t,0,0),r.needsUpdate=!0},i.src=`/assets/crowd-reference-front.png`,r}function pf(){return df(`/assets/wally-reference-exact.png`)}function mf(){return lf(64,64,e=>{e.fillStyle=`#fffdf8`,e.fillRect(0,0,64,64)})}function hf(){return lf(96,96,e=>{e.clearRect(0,0,96,96),e.strokeStyle=`#5f7b60`,e.lineWidth=4,e.lineCap=`round`,e.beginPath(),e.moveTo(48,82),e.quadraticCurveTo(46,59,50,38),e.stroke(),e.fillStyle=`#7f9a70`,e.beginPath(),e.ellipse(36,55,14,7,.55,0,Math.PI*2),e.ellipse(61,48,14,7,-.52,0,Math.PI*2),e.fill(),e.fillStyle=`#d9a168`;for(let t=0;t<5;t+=1){let n=t/5*Math.PI*2;e.beginPath(),e.arc(49+Math.cos(n)*9,30+Math.sin(n)*9,6,0,Math.PI*2),e.fill()}e.fillStyle=`#ead17d`,e.beginPath(),e.arc(49,30,5,0,Math.PI*2),e.fill()})}function gf(e,t){let[n,r,i]={"sage-garden":[`#cad4b5`,`#9eb78d`,`#e8d9bd`],"cream-market":[`#e4d3ad`,`#c9aa7e`,`#f1e4c9`],"clay-court":[`#dfb19a`,`#b87962`,`#ead7bd`],"lavender-walk":[`#d5c8da`,`#a991b2`,`#ede0c9`],"bluebell-square":[`#bfd1d2`,`#83a9ad`,`#e8dcc2`]}[e.palette];return lf(512,512,a=>{let o=512/t;a.clearRect(0,0,512,512),a.save(),a.scale(o,o),a.globalAlpha=.19,a.fillStyle=n,a.beginPath(),a.moveTo(18,t*.23),a.bezierCurveTo(t*.2,4,t*.42,17,t*.44,t*.31),a.bezierCurveTo(t*.38,t*.46,t*.17,t*.47,18,t*.34),a.closePath(),a.fill(),a.beginPath(),a.moveTo(t-14,t*.66),a.bezierCurveTo(t*.82,t*.53,t*.6,t*.68,t*.65,t*.88),a.bezierCurveTo(t*.77,t-8,t-8,t*.9,t-14,t*.66),a.closePath(),a.fill(),a.globalAlpha=.68,a.strokeStyle=i,a.lineCap=`round`,a.lineJoin=`round`;for(let n of e.paths)a.lineWidth=n.width,a.beginPath(),a.moveTo(n.points[0].x,t-n.points[0].y),a.bezierCurveTo(n.points[1].x,t-n.points[1].y,n.points[2].x,t-n.points[2].y,n.points[3].x,t-n.points[3].y),a.stroke(),a.globalAlpha=.28,a.strokeStyle=`#fffaf0`,a.lineWidth=Math.max(2,n.width*.08),a.stroke(),a.strokeStyle=i,a.globalAlpha=.68;a.fillStyle=i,a.globalAlpha=.72,a.beginPath(),a.arc(t*.5,t*.5,e.plazaRadius,0,Math.PI*2),a.fill(),a.strokeStyle=`rgba(255,250,238,.48)`,a.lineWidth=2.4;for(let n=0;n<3;n+=1)a.beginPath(),a.arc(t*.5,t*.5,e.plazaRadius*(.42+n*.23),.15,Math.PI*1.72),a.stroke();a.globalAlpha=.38,a.fillStyle=r;for(let n=0;n<22;n+=1){let r=n*2.4+e.rotationQuarterTurns,i=e.greenInset+n%5*5.2;a.beginPath(),a.arc(t*.5+Math.cos(r)*i,t*.5+Math.sin(r)*i*.76,1.5+n%3,0,Math.PI*2),a.fill()}a.restore()})}function _f(e){let t=Vu(e),n=lf(512,512,e=>e.clearRect(0,0,512,512)),r=n.image.getContext(`2d`);if(!r)return n;let i=new window.Image,a=new window.Image,o=()=>{r.clearRect(0,0,512,512);let t=Xd[e.category],o=r.createRadialGradient(256,256,70,256,256,250);o.addColorStop(0,`${t}5c`),o.addColorStop(.68,`${t}22`),o.addColorStop(1,`${t}00`),r.fillStyle=o,r.fillRect(0,0,512,512),i.complete&&i.naturalWidth>0&&r.drawImage(i,24,24,464,464),a.complete&&a.naturalWidth>0&&r.drawImage(a,141,134,230,230),n.needsUpdate=!0};return i.onload=o,a.onload=o,i.src=Hu,a.src=e.id===`onre-reinsurance`?`/assets/onre-icon.svg`:t.iconPath,o(),n}function vf(){let e=lf(192,192,e=>{e.clearRect(0,0,192,192);let t=e.createRadialGradient(96,96,5,96,96,92);t.addColorStop(0,`rgba(255,224,108,.96)`),t.addColorStop(.5,`rgba(255,207,77,.42)`),t.addColorStop(1,`rgba(255,207,77,0)`),e.fillStyle=t,e.fillRect(0,0,192,192),e.shadowColor=`#f4b83d`,e.shadowBlur=20,e.fillStyle=`#fff8dc`,e.strokeStyle=`#d89a25`,e.lineWidth=8,e.beginPath(),e.arc(96,96,52,0,Math.PI*2),e.fill(),e.stroke(),e.shadowBlur=0}),t=new window.Image;return t.onload=()=>{let n=e.image.getContext(`2d`);if(!n)return;let r=document.createElement(`canvas`);r.width=320,r.height=300;let i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)return;i.drawImage(t,235,105,770,700,0,0,320,300);let a=i.getImageData(0,0,320,300);for(let e=0;e<a.data.length;e+=4){let t=a.data[e],n=a.data[e+1],r=a.data[e+2],i=Math.min(Math.max(0,(t-196)/46),Math.max(0,(r-165)/70),Math.max(0,(118-n)/92));i>0&&(a.data[e+3]=Math.round(a.data[e+3]*(1-i)))}i.putImageData(a,0,0),n.save(),n.beginPath(),n.arc(96,95,44,0,Math.PI*2),n.clip(),n.drawImage(r,51,48,90,88),n.restore(),e.needsUpdate=!0},t.src=`/assets/wally-reference-exact.png`,e}function yf(e){let t=Wu[e]?.palette??[`#dbe8d5`,`#ead9b8`,`#789680`];return lf(256,256,n=>{n.clearRect(0,0,256,256),n.lineJoin=`round`,n.lineCap=`round`,n.globalAlpha=.3,n.fillStyle=t[0];let r=(e,t,r,i,a=18)=>{n.beginPath(),n.roundRect(e,t,r,i,a),n.fill()};e===0?(r(18,62,220,58,24),r(18,145,220,58,24)):e===1?(r(30,28,48,196,23),r(178,28,48,196,23),r(64,170,128,54,24)):e===2?(n.beginPath(),n.moveTo(8,60),n.lineTo(198,8),n.lineTo(248,62),n.lineTo(50,116),n.closePath(),n.fill(),n.beginPath(),n.moveTo(8,164),n.lineTo(206,110),n.lineTo(248,168),n.lineTo(52,224),n.closePath(),n.fill()):e===3?(r(18,40,220,66,14),r(18,150,220,66,14),r(102,82,52,94,12)):e===4?(r(98,70,60,116,25),n.beginPath(),n.moveTo(112,104),n.lineTo(18,44),n.lineTo(36,22),n.lineTo(128,92),n.closePath(),n.fill(),n.beginPath(),n.moveTo(142,104),n.lineTo(238,44),n.lineTo(222,20),n.lineTo(128,92),n.closePath(),n.fill(),n.beginPath(),n.moveTo(112,154),n.lineTo(56,236),n.lineTo(90,244),n.lineTo(134,170),n.closePath(),n.fill()):e===5?(n.beginPath(),n.moveTo(10,208),n.lineTo(28,166),n.lineTo(105,146),n.lineTo(66,112),n.lineTo(86,78),n.lineTo(180,58),n.lineTo(142,28),n.lineTo(166,10),n.lineTo(242,64),n.lineTo(224,104),n.lineTo(138,122),n.lineTo(174,154),n.lineTo(150,190),n.lineTo(58,214),n.closePath(),n.fill()):e===6?(n.strokeStyle=t[0],n.lineWidth=62,n.globalAlpha=.3,n.beginPath(),n.moveTo(26,58),n.bezierCurveTo(220,8,224,116,124,126),n.bezierCurveTo(22,136,30,230,224,196),n.stroke()):e===7?(n.beginPath(),n.moveTo(35,72),n.quadraticCurveTo(68,12,143,26),n.quadraticCurveTo(230,38,226,122),n.quadraticCurveTo(224,214,122,229),n.quadraticCurveTo(32,218,24,137),n.closePath(),n.fill()):e===8?(r(18,34,220,48,16),r(34,92,188,50,16),r(54,152,150,50,16),r(92,210,74,32,14)):(r(20,38,192,58,20),r(154,70,64,138,20),r(66,166,130,50,20)),n.globalAlpha=.12,n.fillStyle=t[1],r(54,94,148,68,26)})}function bf(e){return lf(192,192,t=>{if(t.clearRect(0,0,192,192),t.lineJoin=`round`,t.lineCap=`round`,t.strokeStyle=`#4d504c`,t.lineWidth=7,e===`ball`){t.fillStyle=`#f6f1e6`,t.beginPath(),t.arc(96,96,54,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle=`#687a70`;for(let e=0;e<5;e+=1){let n=e*Math.PI*.4-Math.PI/2;t.beginPath(),t.arc(96+Math.cos(n)*31,96+Math.sin(n)*31,8,0,Math.PI*2),t.fill()}}else e===`newspaper`?(t.fillStyle=`#f8f2df`,t.beginPath(),t.roundRect(28,43,136,106,8),t.fill(),t.stroke(),t.strokeStyle=`#7c827b`,t.lineWidth=5,t.beginPath(),t.moveTo(44,67),t.lineTo(145,67),t.moveTo(44,88),t.lineTo(104,88),t.moveTo(44,110),t.lineTo(145,110),t.moveTo(44,130),t.lineTo(124,130),t.stroke()):(t.fillStyle=`#b8b8b2`,t.beginPath(),t.ellipse(100,108,48,30,0,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.arc(62,79,25,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(43,64),t.lineTo(35,35),t.lineTo(62,54),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.moveTo(80,132),t.lineTo(74,162),t.moveTo(122,131),t.lineTo(130,160),t.moveTo(145,99),t.quadraticCurveTo(172,72,162,47),t.stroke(),t.fillStyle=`#4d504c`,t.beginPath(),t.arc(55,78,4,0,Math.PI*2),t.fill())})}function xf(e,t){let n=new An,r=new Wr({color:new K(Xd[e.category]),transparent:!0,opacity:.82,depthWrite:!0,depthTest:!0,alphaTest:.02}),i=`lights`;if(e.category===`agriculture-commodities`||e.category===`finance-energy-infrastructure`?i=`rotor`:e.category===`food-hospitality`||e.category===`trade-industry-transport`?i=`steam`:(e.category===`culture-collectibles`||e.category===`public-community`)&&(i=`orbit`),i===`rotor`){for(let e=0;e<4;e+=1){let t=new ni(new Ai(.16,1.1),r.clone());t.position.y=.48,t.rotation.z=e*Math.PI/2,n.add(t)}let e=new ni(new ki(.18,24),r.clone());n.add(e)}else for(let e=0;e<4;e+=1){let i=new ni(new ki(.1+e*.018,18),r.clone()),a=e*Math.PI*.5+t;i.position.set(Math.cos(a)*.58,Math.sin(a)*.42,0),n.add(i)}return n.renderOrder=15,n.visible=!1,{group:n,kind:i}}function Sf(e,t){return lf(96,96,n=>{n.clearRect(0,0,96,96),n.font=`700 50px Georgia, serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.strokeStyle=`#fff7e8`,n.lineWidth=9,n.strokeText(String(e),48,43),n.fillStyle=t,n.fillText(String(e),48,43),n.globalAlpha=.58,n.strokeStyle=t,n.lineWidth=4,n.beginPath(),n.moveTo(36,76),n.quadraticCurveTo(48,80,60,76),n.stroke(),n.globalAlpha=1})}function Cf(e,t=0,n=5){let r=xl(e),i=1+Math.round(t/Math.max(1,n-1)*(r.stageCount-1)),a=new ua().load(r.stagePath(i));return a.colorSpace=Be,a.minFilter=u,a.magFilter=u,a.generateMipmaps=!1,a}function wf(){return lf(192,128,e=>{e.clearRect(0,0,192,128),e.fillStyle=`rgba(238,226,201,.94)`,e.beginPath(),e.moveTo(27,35),e.lineTo(164,27),e.lineTo(174,94),e.lineTo(39,102),e.closePath(),e.fill(),e.fillStyle=`#70907d`,e.fillRect(36,36,10,55),e.fillStyle=`#fffaf0`,e.beginPath(),e.moveTo(46,38),e.lineTo(94,31),e.lineTo(88,59),e.lineTo(46,64),e.closePath(),e.fill(),e.fillStyle=`#52675b`,e.font=`700 24px Georgia, serif`,e.fillText(`$`,59,55)})}function Tf(e,t=0){return 18-e*.055+t}function Ef(){let e=new An;e.renderOrder=20;let t=pf(),n=new Bi({uniforms:{map:{value:t},walkAmount:{value:0},walkPhase:{value:0},breath:{value:0}},vertexShader:`
      varying vec2 vUv;
      uniform float walkAmount;
      uniform float walkPhase;
      uniform float breath;
      void main() {
        vUv = uv;
        vec3 animated = position;
        float lowerBody = 1.0 - smoothstep(0.17, 0.51, uv.y);
        float legBlend = smoothstep(0.42, 0.58, uv.x);
        float legSide = mix(-1.0, 1.0, legBlend);
        float step = sin(walkPhase) * legSide * walkAmount;
        animated.x += step * lowerBody * 0.062;
        animated.y += max(0.0, step) * lowerBody * 0.032;
        float torsoSway = smoothstep(0.35, 0.78, uv.y) * walkAmount;
        animated.x -= sin(walkPhase) * torsoSway * 0.009;
        animated.y += breath * smoothstep(0.25, 0.9, uv.y) * 0.008;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(animated, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform sampler2D map;
      void main() {
        vec4 color = texture2D(map, vUv);
        if (color.a < 0.025) discard;
        gl_FragColor = color;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!0,depthTest:!0}),r=new ni(new Ai(3.22,3.22,32,32),n);r.position.set(0,.08,.04),r.renderOrder=10,e.add(r);let i=kd(),a=new Wr({map:i,transparent:!0,opacity:.62,depthWrite:!0,depthTest:!0,alphaTest:.02}),o=new ni(new Ai(1.42,.58),a);return o.scale.set(1,1,1),o.position.set(.2,-.99,0),o.renderOrder=9,e.add(o),{group:e,sprite:r,shadow:o,material:n,textures:[t,i]}}function Df(e,t,n,r){let i=qd[e]??qd[0],a=Ku[e]??Ku[0],o=a[t%a.length];return{x:i.x+o.x*Uu,y:i.y+o.y*Uu}}function Of(e){let t=e.signAspect<.8?4.6:7.6;return{width:t,height:t/e.signAspect}}function kf(e,t,n,r){let i=qd[e]??qd[0],a=Ku[e]??Ku[0],o=qu(Wu[e]??Wu[0]),s=t*6+r;for(let t=0;t<48;t+=1){let r=(s+t*37+n*.13)*2.399963229728653+e*.61,c=5.8+(s*7+t*5+e*3)%12,l=e===3?1.08:e===5?1.12:1,u=e===2||e===6?.72:e===8?.78:.88,d={x:i.x+Math.cos(r)*c*l,y:i.y+Math.sin(r)*c*u},f=a.some(e=>{let t=(d.x-i.x-e.x*Uu)/4.7,n=(d.y-i.y-e.y*Uu)/3.7;return t*t+n*n<1}),p=Math.hypot(d.x-o.x,d.y-o.y)<3.6;if(!f&&!p&&Math.hypot(d.x-i.x,d.y-i.y)>3.4)return d}let c=(s+e*3)*2.399963229728653;return{x:i.x+Math.cos(c)*15,y:i.y+Math.sin(c)*13.5}}function Af(e,t,n){return(.76+xl(e).visualScale*.7)*(.72+t/Math.max(1,n-1)*.28)}function jf(e,t,n){let r=xl(e),i=Af(e,t,n),a=r.sizeClass===`landmark`?1.16:r.sizeClass===`large`?1.08:1;return[2.05*i*a+.42,1.26*i*a+.38]}function Mf(e,t,n){return-.62*Af(e,t,n)}function Nf(e,t,n,r){let i=jf(e,t,n);return r+Mf(e,t,n)-i[1]}function Pf(e,t){return[`e`,`ne`,`n`,`nw`,`w`,`sw`,`s`,`se`][(Math.round(Math.atan2(t,e)/(Math.PI/4))+8)%8]}function Ff(){let e=(0,r.useRef)(null),t=(0,r.useRef)({x:0,y:0,active:!1,pointerId:-1,originX:0,originY:0}),n=(0,r.useRef)(!1),i=(0,r.useRef)(!0),[a,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!0),[l,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)({budget:0}),[m,h]=(0,r.useState)(0),[g,_]=(0,r.useState)(!1),[v,y]=(0,r.useState)(null),[b,x]=(0,r.useState)(null),S=(0,r.useRef)(()=>void 0),C=(0,r.useRef)(()=>void 0),w=(0,r.useRef)(!1);(0,r.useEffect)(()=>{n.current=a},[a]),(0,r.useEffect)(()=>{i.current=s},[s]);let T=(0,r.useRef)(()=>void 0);return(0,r.useEffect)(()=>{let r=e.current;if(!r)return;let a=!1,s=0,c=performance.now(),l=0,f=0,m=0,g=0,_=!1,v=0,b=0,E=``,D=new Set,O={value:null},k=[],A=[],ee=[],te=[],j=Iu();Su(j)&&(b=performance.now()+6500);let M={current:j},ne=sf(),N=new Map;ne.forEach((e,t)=>e.forEach(e=>N.set(e.id,t)));let re=ne.map(e=>[...e]),ie=e=>Ju(e,ne),ae=e=>Yu(ie(e)),oe=ie(j),se=new Set(oe),ce=ae(j),le=Zu(ce),ue=new Set(ce),de=new Map,fe=0,pe=performance.now()+28e3+j.town.worldSeed%12e3,P=null,me=new tl({antialias:!0,alpha:!1,powerPreference:`high-performance`});me.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),me.setClearColor(16777215,1),me.outputColorSpace=Be,me.domElement.className=`wally-canvas`,me.domElement.setAttribute(`aria-label`,`WALLY WORLD living town`),r.appendChild(me.domElement);let F=new zn;F.background=new K(`#ffffff`),F.fog=new Rn(`#ffffff`,.0038);let he=new K(`#fffdf7`),ge=new K(`#d9d7e8`),_e=new K(`#243248`),ve=new K,ye=new K(`#ffffff`),be=new K(`#8ea1b5`),I=new ya(-10,10,10,-10,.1,500);I.position.set(j.wallyPosition.x,j.wallyPosition.z+2,100),I.lookAt(I.position.x,I.position.y,0);let xe=mf(),Se=Math.min(1,j.completedAssetIds.length/10),Ce=new Wr({map:xe,color:16777215,transparent:!0,opacity:.025+Se*.975}),we=new ni(new Ai(Gd,Gd),Ce);we.position.z=-6,F.add(we);let Te=new tn,Ee=hf(),De=new Wr({map:Ee,transparent:!0,depthWrite:!1,alphaTest:.04,opacity:.06+Se*.94}),Oe=new mi(new Ai(.72,.72),De,320);Oe.frustumCulled=!1,Oe.visible=!1;let ke=rf(j.town.worldSeed^32587),Ae=[`#ffffff`,`#f2d9c8`,`#d6e0c4`,`#d9d0e7`],je=[];for(let e=0;e<320;e+=1){let t=e<230?28:135,n=(ke()-.5)*t*2,r=(ke()-.5)*t*2;Math.hypot(n,r)<3&&(n+=n<0?-3:3,r+=r<0?-2:2);let i=.48+ke()*.7,a={x:n,y:r,z:-2.6,scale:i};je.push(a),Te.compose(new H(a.x,a.y,a.z),new Pt,new H(i,i,1)),Oe.setMatrixAt(e,Te),Oe.setColorAt(e,new K(Ae[Math.floor(ke()*Ae.length)]))}Oe.instanceColor.needsUpdate=!0,F.add(Oe);let L={tileSize:240,worldSeed:j.town.worldSeed^12184,rebaseDistance:480,tileViewRadius:1},Me=.1,Ne=L.tileSize*Me*3,Pe=[`tree`,`flower-bed`,`bench`,`lamp`,`planter`,`bicycle`,`notice-board`],R=new Set(ce),Fe=new Map;Pe.forEach(e=>Fe.set(e,[]));let z=[];for(let e=-1;e<=1;e+=1)for(let t=-1;t<=1;t+=1){let n=Vd({x:t,y:e},L);z.push({tile:n,x:(t*L.tileSize+L.tileSize*.5)*Me,y:(e*L.tileSize+L.tileSize*.5)*Me,z:-4.15,scale:1,rotation:0})}let Ie=[[`flower-bed`,`bench`,`planter`,`notice-board`],[`tree`,`flower-bed`,`bench`,`bicycle`],[`planter`,`lamp`,`tree`,`notice-board`],[`lamp`,`bench`,`notice-board`,`planter`],[`tree`,`planter`,`flower-bed`,`bench`],[`tree`,`notice-board`,`lamp`,`planter`],[`lamp`,`flower-bed`,`bench`,`planter`],[`tree`,`bench`,`flower-bed`,`bicycle`],[`lamp`,`flower-bed`,`bench`,`planter`],[`planter`,`lamp`,`bicycle`,`bench`]],Le=rf(j.town.worldSeed^4878793);Wu.forEach((e,t)=>{let n=[],r=[],i=re[t]??[];i.forEach((e,n)=>{let a=Df(t,n,i.length,n),o=af(e),s=o-1,c=jf(e,s,o);r.push({x:a.x,y:a.y+Mf(e,s,o),radiusX:c[0]+1.5,radiusY:c[1]+1.35})});let a=qu(e),o=Of(e);r.push({x:a.x,y:a.y,radiusX:o.width*.5+1.2,radiusY:o.height*.42+1.1}),r.push({x:e.center.x,y:e.center.y-1.8,radiusX:4.4,radiusY:3.2}),t===0&&r.push({x:0,y:-18.5,radiusX:6.2,radiusY:6.2});let s=Ie[t]??Pe,c=0;for(let i=0;i<220&&c<14;i+=1){let a=Le()*Math.PI*2,o=4.8+Math.sqrt(Le())*10.8,l=e.center.x+Math.cos(a)*o,u=e.center.y+Math.sin(a)*o*.9,d=s[(c+i+t)%s.length],f=(d===`tree`?.86:.62)+Le()*(d===`tree`?.24:.18),p=(d===`tree`||d===`bench`||d===`bicycle`?1.15:.86)*f;r.some(e=>{let t=(l-e.x)/(e.radiusX+p),n=(u-e.y)/(e.radiusY+p);return t*t+n*n<1})||n.some(e=>Math.hypot(l-e.x,u-e.y)<e.radius+p+.48)||(n.push({x:l,y:u,radius:p}),Fe.get(d)?.push({x:l,y:u,canonicalX:l,canonicalY:u,neighborhood:t,z:Tf(u-(d===`tree`||d===`lamp`?1.38:.9)*f,-.16),scale:f,rotation:(Le()-.5)*.16}),c+=1)}});let Re=new ua,ze=new Map,Ve=Pe.map(e=>{let t=Fe.get(e)??[],n=Re.load(nd(e));n.colorSpace=Be,n.minFilter=u,n.magFilter=u,n.generateMipmaps=!1,ze.set(e,n);let r=new Wr({map:n,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.035,opacity:.05+Se*.95}),i=new mi(new Ai(e===`bench`||e===`bicycle`?2.25:1.72,e===`tree`||e===`lamp`?2.75:2.12),r,t.length);return i.frustumCulled=!1,i.visible=!1,t.forEach((e,t)=>{let n=R.has(e.neighborhood)?e.scale:0;Te.compose(new H(e.x,e.y,e.z),new Pt().setFromAxisAngle(new H(0,0,1),e.rotation),new H(n,n,1)),i.setMatrixAt(t,Te)}),F.add(i),{mesh:i,instances:t,kind:e}}),He=[],Ue=z.map(e=>{let t=gf(e.tile,L.tileSize);He.push(t);let n=new ni(new Ai(L.tileSize*Me,L.tileSize*Me),new Wr({map:t,transparent:!0,depthWrite:!1,opacity:.035+Se*.965}));return n.position.set(e.x,e.y,e.z),n.renderOrder=1,n.visible=!1,F.add(n),{mesh:n,instance:e}}),We=qd.map((e,t)=>yf(t)),Ge=new Set(oe),qe=qd.map((e,t)=>{let n=new Wr({map:We[t],transparent:!0,depthWrite:!1,opacity:R.has(t)?Ge.has(t)?.94:.28:0}),r=new ni(new Ai(40,40),n);return r.position.set(e.x,e.y,-5.2),r.renderOrder=1,F.add(r),{mesh:r,center:{...e},canonicalCenter:{...e},index:t}}),Je=Wu.map(e=>{let t=Xu(M.current,ne[e.id]),n=Sd(e,t),r=Of(e),i=new ni(new Ai(r.width,r.height),new Wr({map:n,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.025,opacity:0})),a=qu(e),o={x:a.x,y:a.y};return i.position.set(o.x,o.y,Tf(o.y-r.height*.5,.02)),i.renderOrder=10,F.add(i),{mesh:i,texture:n,canonical:o,neighborhood:e,stage:Math.min(5,Math.max(1,Math.ceil(t*5)))}}),Ye=Wu.map(e=>Xu(M.current,ne[e.id])),Xe=Ed(Ye),Ze=new ni(new Ai(10.5,10.5),new Wr({map:Xe,transparent:!0,depthWrite:!1})),Qe={x:0,y:-18.5};Ze.position.set(Qe.x,Qe.y,-4.75),Ze.renderOrder=2,F.add(Ze);let $e=Ye.map(e=>Math.round(e*20)).join(`:`),et=[1.28,1.12,.98,.84,.7,.57,.45,.33].map(e=>ff(e)),tt=Jd.map(e=>new K(e)),B=new K,V=new K(`#ffffff`),nt=new Ai(1.15,1.75),rt=et.map(e=>{let t=new mi(nt,new Wr({map:e,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.04}),Ud/et.length);return t.instanceMatrix.setUsage(Ke),t.frustumCulled=!1,t.renderOrder=10,F.add(t),t}),it=[],at=rf(j.town.crowdSeed),ot=Ud/qd.length;for(let e=0;e<Ud;e+=1){let t=Math.min(qd.length-1,Math.floor(e/ot)),n=qd[t],r=e-t*ot,i=Ku[t]??Ku[0],a=i[r%i.length],o=i[(r*3+2)%i.length],s=.16+at()*.68,c=(at()-.5)*2.2,l=o.x-a.x,u=o.y-a.y,d=Math.max(.01,Math.hypot(l,u)),f=n.x+Mt.lerp(a.x,o.x,s)*Uu-u/d*c,p=n.y+Mt.lerp(a.y,o.y,s)*Uu+l/d*c,m=e%rt.length,h=Math.floor(e/rt.length);it.push({x:f,y:p,canonicalHomeX:f,canonicalHomeY:p,homeX:f,homeY:p,size:.72+at()*.3,phase:at()*Math.PI*2,drift:at(),variant:m,slot:h,neighborhood:t,passed:!1,greetingEligible:(Math.imul(e+1,29)+j.town.crowdSeed>>>0)%17==0,greeted:!1,active:!1,arrivalOrder:(r*17+t*7)%ot}),rt[m].setColorAt(h,new K(`#ffffff`)),Te.compose(new H(f,p,4),new Pt,new H(0,0,1)),rt[m].setMatrixAt(h,Te)}rt.forEach(e=>{e.instanceColor&&(e.instanceColor.needsUpdate=!0)});let st=performance.now()+1e4,ct=null,lt=()=>{ct&&=(F.remove(ct.mesh),ct.texture.dispose(),ct.mesh.geometry.dispose(),ct.mesh.material.dispose(),null)},ut=(e,t,n)=>{lt();let r=uf(t),i=new ni(new Ai(6.6,1.92),new Wr({map:r,transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));i.renderOrder=30,F.add(i),ct={mesh:i,texture:r,person:e,born:n,duration:3350}},dt={ball:bf(`ball`),dog:bf(`dog`),newspaper:bf(`newspaper`)},ft=[`soccer`,`family`,`fetch`,`reader`],pt=Wu.map((e,t)=>{let n=ft[t%ft.length],r={x:e.center.x+(t%2==0?-.8:1.1),y:e.center.y-1.8},i=new An;i.position.set(r.x,r.y,0),i.visible=!1;let a=[],o=[];(n===`family`?[[-1.65,0],[0,.62],[1.55,-.05]]:n===`reader`?[[0,.22]]:[[-2,0],[2,0]]).forEach(([e,n],o)=>{let s=new Wr({map:et[(o+t*2)%et.length],color:`#e7e7e3`,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.04}),c=new ni(new Ai(1.02,1.58),s);c.position.set(e,n,Tf(r.y+n-.79,.025)),c.renderOrder=10,a.push(c),i.add(c)});let s=(e,t,n,a=0,s=0)=>{let c=new ni(new Ai(t,n),new Wr({map:e,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.035}));return c.position.set(a,s,Tf(r.y+s-n*.5,.04)),c.renderOrder=10,o.push(c),i.add(c),c};if((n===`soccer`||n===`family`)&&s(dt.ball,.48,.48),n===`fetch`&&(s(dt.dog,1.18,.9,0,-.08),s(dt.ball,.42,.42,1.85,-.18)),n===`reader`){let e=ze.get(`bench`);e&&s(e,2.3,1.28,0,-.45),s(dt.newspaper,.72,.72,.05,.32)}return F.add(i),{group:i,canonical:r,neighborhood:t,kind:n,actors:a,props:o}}),mt=wf(),ht=new Wr({map:mt,transparent:!0,depthWrite:!1}),gt=new Ai(1.68,1.68),_t=[...ne.flat()],vt=new Map;_t.forEach(e=>{let t=N.get(e.id)??0;R.has(t)&&vt.set(e.id,_f(e))});let yt=new ua().load(`/assets/onre-logo.jpg`);yt.colorSpace=Be,yt.minFilter=u,yt.magFilter=u,yt.generateMipmaps=!1;let bt=new Map,xt=(e,t)=>{let n=`${t}:${e}`,r=bt.get(n);return r||(r=Sf(e,Xd[t]),bt.set(n,r)),r},St=[];_t.forEach((e,t)=>{let n=N.get(e.id)??0,r=re[n],i=Math.max(0,r.findIndex(t=>t.id===e.id)),a=r.filter(e=>e.discovery===`crowd`).findIndex(t=>t.id===e.id),o=Df(n,i,r.length,t),s=fu(M.current,e.id),c=pu(M.current,e.id),l=af(e),u=R.has(n),d=cf(M.current,e,r),f=e.discovery!==`crowd`||hu(M.current,e.id),p=Tl(n,Math.max(0,a)),m=d&&f,h=new Wr({map:vt.get(e.id)??null,transparent:!0,depthWrite:!1,alphaTest:.025}),g=[];for(let r=0;r<e.requiredPieces;r+=1){let i=kf(n,Math.max(0,a),t,r),o=new ni(gt,h);o.position.set(i.x,i.y,7+r*.001),o.renderOrder=14,o.visible=u&&e.discovery===`crowd`&&m&&!mu(M.current,e.id,r)&&(e.id!==`hidden-stock-exchange`||xu(M.current)),F.add(o),g.push({mesh:o,canonical:{...i},pieceIndex:r})}let _,v,y,b,x,S,C,w=[],T,E=`lights`;if(t<Wd){let n=ht.clone(),r=xl(e),i=Math.max(.9,Math.min(1.25,.72+r.visualScale*.42));v=new ni(new Ai(4.8,3.2),n),v.scale.set(i,i,1),v.position.set(o.x,o.y-.35,-.3),F.add(v),S=of(s,e.requiredPieces,l),x=u?Cf(e,S,l):lf(2,2,e=>e.clearRect(0,0,2,2));let a=new Wr({map:x,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.025,color:`#ffffff`,opacity:1});_=new ni(new Ai(5.35,5.35),a);let d=Af(e,S,l);_.scale.set(d,d,1),_.position.set(o.x,o.y+.72*d,Tf(Nf(e,S,l,o.y))),_.renderOrder=10,F.add(_),C=new An,C.position.set(o.x,o.y,Tf(o.y-1.1,.03));let f=[`flower-bed`,`planter`,`lamp`,`bench`,`tree`,`notice-board`,`bicycle`];for(let n=0;n<e.requiredPieces;n+=1){let e=f[(n+t)%f.length],r=ze.get(e);if(!r)continue;let i=e===`tree`?2.2:e===`lamp`?1.65:1.35,a=new ni(new Ai(i,i),new Wr({map:r,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.03})),o=n*2.39996+t*.33,c=2.95*d+n%3*.62;a.position.set(Math.cos(o)*c,Math.sin(o)*c*.68,n*.002),a.rotation.z=Math.sin(o)*.08,a.visible=n<s,a.renderOrder=7,C.add(a),w.push(a)}F.add(C);let p=xf(e,t);T=p.group,E=p.kind,T.position.set(o.x,o.y+3.15*d,Tf(Nf(e,S,l,o.y),.06)),T.visible=c===0,F.add(T),e.id===`onre-reinsurance`&&(b=new ni(new Ai(2.25,.7),new Wr({map:yt,transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.025})),b.position.set(o.x,o.y+1.42*d,Tf(Nf(e,S,l,o.y),.05)),b.scale.set(d,d,1),b.visible=s>0,b.renderOrder=13,F.add(b));let m=new Wr({map:xt(c,e.category),transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.025});y=new ni(new Ai(1.05,1.05),m),y.position.set(o.x,o.y+4.15,Tf(Nf(e,S,l,o.y),.08)),y.visible=s>0&&c>0,y.renderOrder=18,F.add(y)}_&&(_.visible=u&&f&&(e.discovery!==`exchange-exclusive`||Su(M.current)||s>0)),v&&(v.visible=u&&e.discovery===`crowd`&&d&&!f),b&&(b.visible=u&&s>0),C&&(C.visible=u&&f),St.push({asset:e,plot:o,canonicalPlot:{...o},tokens:g,building:_,plotHalo:v,remainingLabel:y,branding:b,constructionTexture:x,constructionStage:S,formCount:l,neighborhood:n,slot:a,flowAvailable:d,landOwned:f,landPrice:p,improvementGroup:C,improvements:w,activity:T,activityKind:E,unlocked:m,pulsePhase:t*.9,walkRevealArmed:!1,artLoaded:u,tokenTextureLoaded:u})});let Ct=Wu.map(e=>St.filter(t=>t.neighborhood===e.id)),wt=new ua,Tt=[],Et=[1,1,2,3,4,5,6,7];Wu.forEach((e,t)=>{let n=[];(rd[t]??[]).forEach((r,i)=>{let a=/fountain|bridge|canopy|gazebo|subway|mural|hammock|tree|cable_car/.test(r),o=(a?1.12:.88)+(i+t)%3*.055,s=(a?1.58:1.08)*o,c=(a?1.16:.82)*o,l;for(let r=0;r<96&&!l;r+=1){let a=((i+1)*.61803398875+r*.41421356237+t*.137)%1,o=((i+1)*.7548776662+r*.36787944117+t*.211)%1,u={x:e.center.x+(a-.5)*35.5,y:e.center.y+(o-.5)*32};if(Math.hypot(u.x-e.center.x,u.y-e.center.y)<4.5||(Ct[t]??[]).some(e=>{let t=e.formCount-1,n=jf(e.asset,t,e.formCount),r=(u.x-e.canonicalPlot.x)/(n[0]+s+1.05),i=(u.y-e.canonicalPlot.y-Mf(e.asset,t,e.formCount))/(n[1]+c+.9);return r*r+i*i<1}))continue;let d=Je[t];if(d){let e=Math.abs(u.x-d.canonical.x),t=Math.abs(u.y-d.canonical.y);if(e<d.mesh.geometry.parameters.width*.5+s+.8&&t<d.mesh.geometry.parameters.height*.42+c+.65)continue}t===0&&Math.hypot(u.x,u.y+18.5)<7||n.some(e=>{let t=(u.x-e.x)/(s+e.radiusX+.7),n=(u.y-e.y)/(c+e.radiusY+.55);return t*t+n*n<1})||(l=u)}if(!l)return;n.push({...l,radiusX:s,radiusY:c});let u=new Wr({transparent:!0,depthWrite:!0,depthTest:!0,alphaTest:.035,opacity:0}),d=new ni(new Ai(2.9,2.9),u);d.position.set(l.x,l.y,Tf(l.y-1.18*o,-.04)),d.scale.setScalar(.01),d.visible=!1,d.renderOrder=9,F.add(d),Tt.push({mesh:d,canonical:l,neighborhood:t,revealAfter:Et[i]??7,baseScale:o,radiusX:s,radiusY:c,footOffset:1.18*o,swayPhase:i*1.91+t,path:id(t,i),loaded:!1,loading:!1})})});let Dt={x:0,y:0},Ot=(e,t,n,r,i,a)=>{let o=e.x-t,s=e.y-n,c=o*o/(r*r)+s*s/(i*i);if(c>=1)return;if(c<1e-4){e.x=t+Math.cos(a)*r,e.y=n+Math.sin(a)*i;return}let l=1/Math.sqrt(c);e.x=t+o*l,e.y=n+s*l},kt=(e,t,n)=>{for(let r of Ct[t]??[]){if(!r.landOwned&&fu(M.current,r.asset.id)<=0)continue;let t=jf(r.asset,r.constructionStage??0,r.formCount),i=r.plot.y+Mf(r.asset,r.constructionStage??0,r.formCount);Math.abs(e.x-r.plot.x)>t[0]+.8||Math.abs(e.y-i)>t[1]+.8||Ot(e,r.plot.x,i,t[0]+.38,t[1]+.32,n)}for(let r of Tt)r.neighborhood!==t||!r.mesh.visible||Math.abs(e.x-r.mesh.position.x)>r.radiusX+.35||Math.abs(e.y-r.mesh.position.y)>r.radiusY+.35||Ot(e,r.mesh.position.x,r.mesh.position.y-.08,r.radiusX+.32,r.radiusY+.28,n);let r=Je[t];return r&&Ot(e,r.mesh.position.x,r.mesh.position.y-.12,r.mesh.geometry.parameters.width*.5+.42,r.mesh.geometry.parameters.height*.34+.34,n),e},At=(e,t,n)=>{let r=qd[t]??qd[0];for(let i=0;i<8;i+=1){for(let r of Ct[t]??[]){let t=r.formCount-1,a=jf(r.asset,t,r.formCount);Ot(e,r.canonicalPlot.x,r.canonicalPlot.y+Mf(r.asset,t,r.formCount),a[0]+1.35,a[1]+1.18,n+i*.47)}let a=Je[t];a&&Ot(e,a.canonical.x,a.canonical.y-.12,a.mesh.geometry.parameters.width*.5+1.15,a.mesh.geometry.parameters.height*.34+.9,n+i*.61);for(let r of Tt)r.neighborhood===t&&Ot(e,r.canonical.x,r.canonical.y-.08,r.radiusX+.78,r.radiusY+.66,n+i*.39);t===0&&Ot(e,0,-18.5,6.1,6.1,n+i*.27);let o=(e.x-r.x)/17.2,s=(e.y-r.y)/15.4,c=o*o+s*s;if(c>1){let t=1/Math.sqrt(c);e.x=r.x+(e.x-r.x)*t,e.y=r.y+(e.y-r.y)*t}}return e};St.forEach((e,t)=>{e.tokens.forEach(n=>{At(n.canonical,e.neighborhood,t*1.73+n.pieceIndex*.91),n.mesh.position.x=n.canonical.x,n.mesh.position.y=n.canonical.y})});let jt=Ef();jt.group.position.set(j.wallyPosition.x,j.wallyPosition.z,Tf(j.wallyPosition.z-1.05,.04)),F.add(jt.group);let Ft=vf(),It=new Wr({map:Ft,transparent:!0,depthWrite:!1,alphaTest:.025}),U=new mi(new Ai(1.28,1.28),It,Kd);U.instanceMatrix.setUsage(Ke),U.frustumCulled=!1,U.renderOrder=15;let Lt=rf(j.town.tokenSeed^11030305),Rt=new Set(j.town.reserveCollectedIds),zt=[];for(let e=0;e<Kd;e+=1){let t=3+e%7,n=qd[t],r=3.8+Math.sqrt(Lt())*13,i=Lt()*Math.PI*2,a={id:e,neighborhood:t,x:n.x+Math.cos(i)*r,y:n.y+Math.sin(i)*r,homeX:n.x+Math.cos(i)*r,homeY:n.y+Math.sin(i)*r,phase:Lt()*Math.PI*2,collected:Rt.has(e)};At(a,t,e*1.618),a.homeX=a.x,a.homeY=a.y,zt.push(a);let o=+!a.collected;Te.compose(new H(a.x,a.y,Tf(a.y-.64,.12)),new Pt,new H(o,o,1)),U.setMatrixAt(e,Te)}F.add(U),U.visible=R.has(3),h(Rt.size);let Bt=new Nt,W=new Nt,G=new Nt(j.wallyPosition.x,j.wallyPosition.z),Vt=j.wallyPosition.facing.includes(`w`)?-1:1,Ht=0,Ut=-1,Wt=(e,t=.32,n=.035,r=0)=>{if(!P||!i.current)return;let a=P.context.currentTime+r,o=P.context.createOscillator(),s=P.context.createGain();o.type=`sine`,o.frequency.setValueAtTime(e,a),o.detune.setValueAtTime(-4,a),s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(n,a+.018),s.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(s).connect(P.gain),o.start(a),o.stop(a+t+.05)},Gt=(e,t,n,r=0,a=`triangle`,o=1450)=>{if(!P||!i.current)return;let s=P.context.currentTime+r,c=P.context.createOscillator(),l=P.context.createBiquadFilter(),u=P.context.createGain();c.type=a,c.frequency.setValueAtTime(e,s),c.detune.setValueAtTime(Math.sin(P.beat*.19)*1.4,s),l.type=`lowpass`,l.frequency.setValueAtTime(o,s),l.Q.setValueAtTime(.65,s),u.gain.setValueAtTime(1e-4,s),u.gain.exponentialRampToValueAtTime(n,s+.045),u.gain.exponentialRampToValueAtTime(Math.max(2e-4,n*.44),s+Math.min(.48,t*.42)),u.gain.exponentialRampToValueAtTime(1e-4,s+t),c.connect(l).connect(u).connect(P.gain),c.start(s),c.stop(s+t+.06)},Kt=(e,t=0,n=1)=>{if(!P||!i.current)return;let r=P.context.currentTime+t;if(e===`kick`){let e=P.context.createOscillator(),t=P.context.createGain();e.type=`sine`,e.frequency.setValueAtTime(88,r),e.frequency.exponentialRampToValueAtTime(46,r+.18),t.gain.setValueAtTime(.054*n,r),t.gain.exponentialRampToValueAtTime(1e-4,r+.24),e.connect(t).connect(P.gain),e.start(r),e.stop(r+.26);return}let a=e===`hat`?.052:.135,o=P.context.createBuffer(1,Math.ceil(P.context.sampleRate*a),P.context.sampleRate),s=o.getChannelData(0);for(let e=0;e<s.length;e+=1)s[e]=(Math.random()*2-1)*(1-e/s.length);let c=P.context.createBufferSource(),l=P.context.createBiquadFilter(),u=P.context.createGain();c.buffer=o,l.type=e===`hat`?`highpass`:`bandpass`,l.frequency.value=e===`hat`?6100:1380,l.Q.value=e===`hat`?.62:.72,u.gain.setValueAtTime((e===`hat`?.012:.026)*n,r),u.gain.exponentialRampToValueAtTime(1e-4,r+a),c.connect(l).connect(u).connect(P.gain),c.start(r)},qt=()=>{if(!P||n.current||!i.current)return;let e=P.beat++,t=e%16;e>0&&e%256==0&&(P.theme=(P.theme+1)%Qd.length);let r=Qd[P.theme],a=$d[P.theme],o=t%2==1?a.swing:0,s=r.roots[t<8?0:1],c=[s,s*1.25,s*1.5,s*1.875];(t===0||t===8)&&c.forEach((e,t)=>Gt(e,2.45,.016-t*.0014,t*.01,`triangle`,r.cutoff)),a.kicks.includes(t)&&Kt(`kick`,0,.9),a.snares.includes(t)&&Kt(`snare`,.014,.82),a.ghosts.includes(t)&&Kt(`snare`,o,.22),a.hats.includes(t)&&Kt(`hat`,o,t===14?.72:.55),a.bass.includes(t)&&Gt(s/2*(t===14||t===15?1.125:1),.56,.029,o*.45,`sine`,620);let l=a.melody.includes(t)?r.melody[Math.floor(t/2)]:0;l>0&&Gt(l,.42,.017,.015+o,`triangle`,1880)},Jt=()=>{if(P){P.context.resume();return}try{let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e,n=t.createGain();n.gain.value=.58;let r=t.createDynamicsCompressor();r.threshold.value=-22,r.knee.value=14,r.ratio.value=2.6,r.attack.value=.025,r.release.value=.28,n.connect(r).connect(t.destination),P={context:t,gain:n,beat:0,timer:0,theme:M.current.town.worldSeed%Qd.length},t.resume(),qt(),P.timer=window.setInterval(qt,ef)}catch{P=null}};T.current=Jt;let Yt=new ua,Xt=Yt.load(ad),Zt=Yt.load(od);[Xt,Zt].forEach(e=>{e.colorSpace=Be,e.minFilter=u,e.magFilter=u,e.generateMipmaps=!1});let Qt=new Ai(1.35,.82),$t=new ki(.08,12),en=new ji(.5,.66,48),nn=(e,t,n=1)=>{let r=new ni($t,e),i=t/.08;return r.scale.set(i*n,i/Math.sqrt(n),1),r},rn=(e,t)=>{let n=new ni(en,e);return n.scale.setScalar(t/.66),n},an=(e,t,n,r={})=>{let i=t.x-e.x,a=t.y-e.y,o=Math.max(.01,Math.hypot(i,a)),s={x:i/o,y:a/o},c={x:-s.y,y:s.x},l=Math.max(1,Math.floor((r.count??9)/2)),u=r.baseScale??1;for(let o=-l;o<=l;o+=1){let d=Math.abs(o),f=o*.48*u,p=d*.42*u,m=new ni(Qt,new Wr({map:i<0?Xt:Zt,transparent:!0,depthWrite:!1,depthTest:!1,alphaTest:.025,opacity:r.maxOpacity??.95})),h={x:e.x+c.x*f-s.x*p,y:e.y+c.y*f-s.y*p},g={x:t.x+c.x*f-s.x*p,y:t.y+c.y*f-s.y*p};m.position.set(h.x,h.y,28+(l-d)*.01),m.rotation.z=Math.atan2(a,i)*.08,m.scale.setScalar(.01),m.visible=!1,m.renderOrder=48,F.add(m),te.push({mesh:m,from:h,to:g,born:n,duration:(r.duration??3500)+d*95,delay:d*58,phase:o*.9,arc:r.arc??2.1,baseScale:u,maxOpacity:r.maxOpacity??.92})}},on=(e,t,n=`celebration`)=>{let r=Qu(e,G,le),i=r.x-G.x,a=r.y-G.y,o=Math.hypot(i,a);o<.2&&(i=1,a=.28,o=Math.hypot(i,a));let s={x:i/o,y:a/o},c={x:-s.y,y:s.x},l=Math.hypot(I.right-I.left,I.top-I.bottom)*.62+4,u={x:I.position.x+c.x*(n===`guidance`?1.4:.5),y:I.position.y+.85+c.y*(n===`guidance`?1.4:.5)};an({x:u.x-s.x*l,y:u.y-s.y*l},{x:u.x+s.x*l,y:u.y+s.y*l},t,n===`celebration`?{count:11,baseScale:1.14,duration:3450,arc:2.35,maxOpacity:.98}:{count:3,baseScale:.78,duration:3200,arc:1.25,maxOpacity:.86})},sn=e=>{let t=null,n=1/0,r=e=>{let r=Math.hypot(e.x-G.x,e.y-G.y);r<3.8||r>=n||(t=e,n=r)};for(let t of St)if(e.has(t.neighborhood)){if(t.asset.discovery===`crowd`&&t.flowAvailable&&!t.landOwned){r(t.plot);continue}if(!(!t.unlocked||t.asset.discovery===`exchange-exclusive`))for(let e of t.tokens)e.mesh.visible&&r({x:e.mesh.position.x,y:e.mesh.position.y})}return t},cn=(e,t)=>{let n=Xd[e.asset.category];[0,110,220].forEach((e,r)=>{let i=rn(new Wr({color:n,transparent:!0,opacity:.82,depthWrite:!1}),.72+r*.08);i.position.set(G.x,G.y,1.6+r*.02),i.renderOrder=11,F.add(i),A.push({mesh:i,born:t+e,duration:1180+r*180})}),[760,930].forEach((r,i)=>{let a=rn(new Wr({color:n,transparent:!0,opacity:.86,depthWrite:!1}),.6);a.position.set(e.plot.x,e.plot.y+.35,10+i*.02),a.renderOrder=17,F.add(a),A.push({mesh:a,born:t+r,duration:1220})}),[.23,.47,.71].forEach((r,i)=>{let a=rn(new Wr({color:i===1?`#ecfbff`:n,transparent:!0,opacity:.82,depthWrite:!1}),.24+i*.035);a.position.set(Mt.lerp(G.x,e.plot.x,r),Mt.lerp(G.y,e.plot.y,r),12+i*.02),a.renderOrder=18,F.add(a),A.push({mesh:a,born:t+150+i*155,duration:680})});for(let r=0;r<27;r+=1){let i=Math.floor(r/9),a=nn(new Wr({color:r%7==0?`#fff4c7`:r%5==0?`#d9f8ff`:n,transparent:!0,opacity:.95,depthWrite:!1}),.07+r%4*.018,r%5==0?1.9:1);a.rotation.z=r*1.618,a.position.set(G.x,G.y,8),a.renderOrder=16,F.add(a),ee.push({mesh:a,from:{x:G.x,y:G.y},to:e.plot,born:t,duration:720+r%9*45,arc:(r%2==0?1:-1)*(.44+r%7*.15),delay:i*115+r%9*18})}},ln=(e,t)=>{let n=Xd[e.asset.category];[0,145,290,435].forEach((r,i)=>{let a=rn(new Wr({color:n,transparent:!0,opacity:.74,depthWrite:!1}),.67);a.position.set(e.plot.x,e.plot.y+.35,5+i*.03),a.renderOrder=12,F.add(a),A.push({mesh:a,born:t+r,duration:1450})});for(let r=0;r<46;r+=1){let i=r*2.39996,a=2.4+r%8*.24,o=nn(new Wr({color:r%4==0?`#fff1af`:n,transparent:!0,opacity:.95,depthWrite:!1}),.06+r%5*.018,r%3==0?2.15:1);o.rotation.z=i+.4,o.renderOrder=16,F.add(o),ee.push({mesh:o,from:{x:e.plot.x,y:e.plot.y},to:{x:e.plot.x+Math.cos(i)*a,y:e.plot.y+Math.sin(i)*a*.66},born:t,duration:820+r%6*90,arc:.9+r%5*.22,delay:r*14})}},un=e=>{[0,120,240].forEach(t=>{let n=rn(new Wr({color:`#edbd4d`,transparent:!0,opacity:.82,depthWrite:!1}),.66);n.position.set(G.x,G.y,9),n.renderOrder=17,F.add(n),A.push({mesh:n,born:e+t,duration:1100})});for(let t=0;t<28;t+=1){let n=t*2.39996,r=nn(new Wr({color:t%4==0?`#ffffff`:`#edbd4d`,transparent:!0,opacity:.96,depthWrite:!1}),.065+t%3*.02,t%4==0?1.8:1);r.rotation.z=n,r.renderOrder=18,F.add(r),ee.push({mesh:r,from:{x:G.x,y:G.y},to:{x:G.x+Math.cos(n)*(2.2+t%6*.25),y:G.y+Math.sin(n)*(1.5+t%5*.2)},born:e,duration:650+t%6*85,arc:.55+t%4*.18,delay:t*10})}},dn=(e,t,n,r=!0)=>{let i=[`#edbd4d`,`#ef8d75`,`#80a78e`,`#80aecd`,`#f7efe0`],a=r?7:3;for(let o=0;o<a;o+=1){let s=o/a*Math.PI*2+t*.43,c={x:e.x+Math.cos(s)*(r?5.8:2.8),y:e.y+Math.sin(s)*(r?3.8:1.8)},l=rn(new Wr({color:i[o%i.length],transparent:!0,opacity:.88,depthWrite:!1}),.53);l.position.set(c.x,c.y,13+o*.01),l.renderOrder=20,F.add(l),A.push({mesh:l,born:n+o*90,duration:r?1700:1150});let u=r?18:9;for(let e=0;e<u;e+=1){let t=e/u*Math.PI*2+o*.29,a=(r?3.2:1.8)+e%5*.32,s=nn(new Wr({color:i[(e+o)%i.length],transparent:!0,opacity:.98,depthWrite:!1}),.07+e%3*.025,e%4==0?2.4:1.25);s.rotation.z=t,s.renderOrder=21,F.add(s),ee.push({mesh:s,from:c,to:{x:c.x+Math.cos(t)*a,y:c.y+Math.sin(t)*a*.78},born:n+o*90,duration:850+e%5*95,arc:1.2+e%4*.32,delay:e*13})}}r&&(Wt(523.25,.58,.035),Wt(659.25,.66,.03,.1),Wt(783.99,.82,.028,.2))},fn=(e,t)=>{for(let n=0;n<4;n+=1){let r=-.5+n*.34+t*.08,i=nn(new Wr({color:n===0?`#ffffff`:`#9fb3aa`,transparent:!0,opacity:.32,depthWrite:!1}),.025+n*.009,1.6);i.rotation.z=r,i.renderOrder=9,F.add(i);let a={x:G.x+t*.18,y:G.y-1.03};ee.push({mesh:i,from:a,to:{x:a.x+Math.cos(r)*(.18+n*.035),y:a.y+Math.sin(r)*.12},born:e,duration:300+n*28,arc:.08+n*.018,delay:n*13,maxOpacity:.32})}},pn=(e,t,n)=>{if(!e.building||!e.constructionTexture||t===e.constructionStage)return;let r=e.constructionTexture;e.constructionTexture=Cf(e.asset,t,e.formCount),e.building.material.map=e.constructionTexture,e.building.material.needsUpdate=!0,r.dispose(),e.constructionStage=t,e.pendingStage=void 0,e.building.material.color.set(`#ffffff`),e.building.material.opacity=1,e.building.visible=!0,e.branding&&(e.branding.visible=t>=1),e.building.scale.multiplyScalar(1.06),ln(e,n)},mn=(e,t,n)=>{let r=Ou(M.current,e.asset.id,Date.now());if(r.collected){if(M.current=_u(r.state,e.asset.id,t.pieceIndex),j=M.current,t.mesh.visible=!1,cn(e,n),Wt(Zd[e.asset.category],.42,.038),Wt(Zd[e.asset.category]*1.5,.52,.022,.08),Wt(Zd[e.asset.category]*2,.36,.016,.16),navigator.vibrate&&navigator.vibrate(r.completed?[13,45,20]:13),e.building){let t=fu(M.current,e.asset.id),r=e.improvements[Math.max(0,t-1)];r&&(r.visible=!0,r.scale.setScalar(.08));let i=of(t,e.asset.requiredPieces,e.formCount);Math.abs(e.plot.x-I.position.x)<Math.abs(I.right)*.9&&Math.abs(e.plot.y-I.position.y)<I.top*.95?pn(e,i,n):e.pendingStage=i}e.remainingLabel&&(e.remainingLabel.material.map=xt(r.remainingPieces,e.asset.category),e.remainingLabel.material.needsUpdate=!0,e.remainingLabel.visible=r.remainingPieces>0),p({budget:M.current.budget}),r.completed&&(Wt(Zd[e.asset.category]*2,.75,.026,.18),e.asset.id===`hidden-stock-exchange`&&(b=n+12e3,w.current=!1,M.current=Cu(M.current,Date.now()),j=M.current,y(nf(M.current)),_=!0,v=n)),M.current=Lu(M.current),j=M.current}};C.current=e=>{let t=St.find(t=>t.asset.id===e);if(!t||!t.flowAvailable||t.asset.discovery!==`crowd`)return;let n=gu(M.current,e,t.landPrice);if(M.current=n.state,j=n.state,!n.purchased){x({assetId:e,name:t.asset.name,price:t.landPrice,budget:M.current.budget});return}t.landOwned=!0,t.unlocked=!0,t.plotHalo&&(t.plotHalo.visible=!1),t.building&&(t.building.visible=!0,t.building.scale.setScalar(.08)),t.improvementGroup&&(t.improvementGroup.visible=!0),ln(t,performance.now()),Wt(523.25,.54,.036),Wt(659.25,.68,.025,.11),navigator.vibrate&&navigator.vibrate([10,32,16]),M.current=Lu(M.current),j=M.current,p({budget:M.current.budget}),x(null)},S.current=e=>{let t=ku(M.current,e,Date.now());if(M.current=t.state,j=t.state,!t.purchased){y(nf(M.current));return}let n=St[St.findIndex(t=>t.asset.id===e)];if(n){let e=fu(M.current,n.asset.id),r=n.improvements[Math.max(0,e-1)];r&&(r.visible=!0,r.scale.setScalar(.08));let i=of(e,n.asset.requiredPieces,n.formCount);n.building&&n.constructionTexture&&i!==n.constructionStage&&(Math.abs(n.plot.x-I.position.x)<Math.abs(I.right)*.9&&Math.abs(n.plot.y-I.position.y)<I.top*.95?pn(n,i,performance.now()):n.pendingStage=i),n.plotHalo&&(n.plotHalo.visible=!1),n.remainingLabel&&(n.remainingLabel.material.map=xt(t.remainingPieces,n.asset.category),n.remainingLabel.material.needsUpdate=!0,n.remainingLabel.visible=t.remainingPieces>0),cn(n,performance.now()),Wt(Zd[n.asset.category],.48,.036),t.completed&&Wt(Zd[n.asset.category]*2,.78,.025,.14)}navigator.vibrate&&navigator.vibrate(t.completed?[13,45,20]:13),M.current=Lu(M.current),j=M.current,p({budget:M.current.budget}),y(nf(M.current))};let hn=e=>{let t=e.key.toLowerCase();if([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`escape`].includes(t)&&e.preventDefault(),Jt(),t===`escape`){o(e=>!e);return}D.add(t)},gn=e=>D.delete(e.key.toLowerCase()),_n=e=>{if(n.current)return;if(Jt(),e.pointerType!==`mouse`){me.domElement.setPointerCapture(e.pointerId),t.current={x:0,y:0,active:!0,pointerId:e.pointerId,originX:e.clientX,originY:e.clientY},O.value=null;return}let r=me.domElement.getBoundingClientRect(),i=new H((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1,0).unproject(I);O.value={x:i.x,y:i.y}},vn=e=>{let n=t.current;if(!n.active||e.pointerId!==n.pointerId)return;let r=e.clientX-n.originX,i=e.clientY-n.originY,a=Math.hypot(r,i),o=Math.min(1,a/58);t.current.x=a<5?0:r/Math.max(1,a)*o,t.current.y=a<5?0:-i/Math.max(1,a)*o},yn=e=>{e.pointerId===t.current.pointerId&&(t.current={x:0,y:0,active:!1,pointerId:-1,originX:0,originY:0})},bn=()=>{let e=Math.max(1,r.clientWidth),t=Math.max(1,r.clientHeight);me.setSize(e,t,!1),me.setPixelRatio(Math.min(window.devicePixelRatio||1,e<520?1.6:1.75));let n=e/t,i=n<.72?24:n>1.25?18:21;I.left=-i*n/2,I.right=i*n/2,I.top=i/2,I.bottom=-i/2,I.updateProjectionMatrix()};window.addEventListener(`keydown`,hn,{passive:!1}),window.addEventListener(`keyup`,gn),window.addEventListener(`resize`,bn),me.domElement.addEventListener(`pointerdown`,_n),me.domElement.addEventListener(`pointermove`,vn),me.domElement.addEventListener(`pointerup`,yn),me.domElement.addEventListener(`pointercancel`,yn),bn(),p({budget:j.budget}),d(!0);let xn=e=>{if(a)return;s=requestAnimationFrame(xn);let r=Math.min(.045,Math.max(.001,(e-c)/1e3));if(c=e,!n.current){let n=(Date.now()+M.current.town.worldSeed*137)%54e4/54e4*Math.PI*2,i=(Math.cos(n)+1)*.5,a=Mt.smoothstep(1-i,.38,.88);ve.copy(he).lerp(ge,a*.44).lerp(_e,Math.max(0,a-.5)*.72),F.background.copy(ve),F.fog?.color.copy(ve),Ce.color.copy(ye).lerp(be,a*.34),De.color.copy(ye).lerp(be,a*.22),W.set(0,0),(D.has(`w`)||D.has(`arrowup`))&&(W.y+=1),(D.has(`s`)||D.has(`arrowdown`))&&--W.y,(D.has(`a`)||D.has(`arrowleft`))&&--W.x,(D.has(`d`)||D.has(`arrowright`))&&(W.x+=1),t.current.active?(W.x=t.current.x,W.y=t.current.y,O.value=null):W.lengthSq()>0?O.value=null:O.value&&(W.set(O.value.x-G.x,O.value.y-G.y),W.length()<.34&&(W.set(0,0),O.value=null)),W.lengthSq()>1&&W.normalize();let o=ie(M.current).length*.14,s=W.lengthSq()>.002?6.35+o:0;W.lengthSq()>0&&W.normalize().multiplyScalar(s),Bt.lerp(W,1-Math.exp(-r*(s>0?12.8:16)));let c=new Set(ae(M.current)),d=(e,t,n,r)=>{let i=(i,a,o,s)=>{let c=(e-i)/o,l=(t-a)/s,u=(n-i)/o,d=(r-a)/s,f=c*c+l*l,p=u*u+d*d;return p<1&&p<=f+1e-4};for(let e of St){if(!c.has(e.neighborhood)||!e.landOwned&&fu(M.current,e.asset.id)<=0)continue;let t=Qu(e.canonicalPlot,{x:n,y:r},le),a=jf(e.asset,e.constructionStage??0,e.formCount),o=t.y+Mf(e.asset,e.constructionStage??0,e.formCount);if(i(t.x,o,a[0],a[1]))return!0}for(let e of Je){if(!c.has(e.neighborhood.id))continue;let t=Qu(e.canonical,{x:n,y:r},le),a=e.mesh.geometry.parameters.width*.5+.55,o=e.mesh.geometry.parameters.height*.34+.52;if(i(t.x,t.y-.12,a,o))return!0}for(let e of Tt){if(!e.mesh.visible||!c.has(e.neighborhood))continue;let t=Qu(e.canonical,{x:n,y:r},le);if(i(t.x,t.y-.08,e.radiusX+.42,e.radiusY+.36))return!0}return!1},S=G.x+Bt.x*r;d(G.x,G.y,S,G.y)?Bt.x=0:G.x=S;let C=G.y+Bt.y*r;for(d(G.x,G.y,G.x,C)?Bt.y=0:G.y=C,e-m>235&&Bt.lengthSq()>.9&&(k.push({x:G.x,y:G.y,born:e}),k.length>16&&k.shift(),m=e);k.length&&e-k[0].born>3500;)k.shift();let T=Math.min(1,Bt.length()/7.8);Ht+=Bt.length()*r*3.15;let N=Math.abs(Math.sin(Ht)),oe=Math.floor((Ht+Math.PI*.5)/Math.PI);T>.5&&oe!==Ut&&(Ut=oe,fn(e,oe%2==0?-1:1)),jt.group.position.set(G.x,G.y,Tf(G.y-1.05,.04)),jt.group.rotation.z=Mt.lerp(jt.group.rotation.z,0,1-Math.exp(-r*12));let P=1+Math.sin(e*.002)*.008,me=Bt.lengthSq()>.08?Mt.clamp(Bt.y/7.8,-1,1):0;Math.abs(Bt.x)>.14&&(Vt=Bt.x<0?-1:1),jt.group.scale.x=Mt.lerp(jt.group.scale.x,Vt,1-Math.exp(-r*16)),jt.sprite.scale.set(P+N*T*.007,P-N*T*.005,1),jt.sprite.position.y=.08+me*.024-N*T*.012,jt.sprite.rotation.z=Mt.lerp(jt.sprite.rotation.z,-Bt.x*.0045+Math.sin(Ht)*T*.008,1-Math.exp(-r*13)),jt.material.uniforms.walkAmount.value=Mt.lerp(jt.material.uniforms.walkAmount.value,T,1-Math.exp(-r*12)),jt.material.uniforms.walkPhase.value=Ht,jt.material.uniforms.breath.value=Math.sin(e*.002),jt.shadow.scale.x=Mt.lerp(jt.shadow.scale.x,1.02+N*T*.07,.22),jt.shadow.scale.y=Mt.lerp(jt.shadow.scale.y,1-N*T*.045,.22),jt.shadow.position.x=.2-Bt.x*.012,jt.shadow.position.y=-.99+N*T*.012,jt.shadow.material.opacity=.44+T*.07,Bt.lengthSq()>.08&&(M.current=Au(M.current,{x:G.x,z:G.y,facing:Pf(Bt.x,Bt.y)}));let xe=G.x+Bt.x*.105,Se=G.y+2.15+Bt.y*.09;I.position.x=Mt.lerp(I.position.x,xe,1-Math.exp(-r*6.8)),I.position.y=Mt.lerp(I.position.y,Se,1-Math.exp(-r*6.8));let Ee=ie(M.current),ke=ae(M.current),Ae=new Set(Ee),L=new Set(ke),Me=Zu(ke);if(Me.x!==le.x||Me.y!==le.y){let e=ce[0]??0,t=1/0;for(let n of ce){let r=Qu(Wu[n].center,G,le),i=Math.hypot(r.x-G.x,r.y-G.y);i<t&&(e=n,t=i)}let n=Qu(Wu[e].center,G,le),r=Qu(Wu[e].center,G,Me),i=r.x-n.x,a=r.y-n.y;(i!==0||a!==0)&&(G.x+=i,G.y+=a,I.position.x+=i,I.position.y+=a,jt.group.position.x+=i,jt.group.position.y+=a,O.value&&(O.value.x+=i,O.value.y+=a),k.forEach(e=>{e.x+=i,e.y+=a}),A.forEach(e=>{e.mesh.position.x+=i,e.mesh.position.y+=a}),ee.forEach(e=>{e.from.x+=i,e.from.y+=a,e.to.x+=i,e.to.y+=a,e.mesh.position.x+=i,e.mesh.position.y+=a}),te.forEach(e=>{e.from.x+=i,e.from.y+=a,e.to.x+=i,e.to.y+=a,e.mesh.position.x+=i,e.mesh.position.y+=a}),it.forEach(e=>{e.x+=i,e.y+=a,e.homeX+=i,e.homeY+=a}),M.current=Au(M.current,{x:G.x,z:G.y,facing:M.current.wallyPosition.facing}),j=M.current),le=Me}let Pe=Wu.map((e,t)=>Xu(M.current,ne[t])),R=Ct.map(e=>e.filter(e=>pu(M.current,e.asset.id)===0)),Fe=Pe.map(e=>Math.round(e*20)).join(`:`);Fe!==$e&&(Je.forEach((e,t)=>{let n=Math.min(5,Math.max(1,Math.ceil(Pe[t]*5)));n!==e.stage&&(e.stage=n,e.texture=Cd(e.texture,e.neighborhood,Pe[t]),e.mesh.material.map=e.texture,e.mesh.material.needsUpdate=!0)}),Dd(Xe,Pe),$e=Fe);let z=Pe.reduce((e,t)=>e+t,0)/Wu.length,Ie=1-Math.exp(-r*1.4);Ce.opacity=Mt.lerp(Ce.opacity,.025+z*.975,Ie),De.opacity=Mt.lerp(De.opacity,.06+z*.94,Ie);for(let e of Ve)e.mesh.material.opacity=Mt.lerp(e.mesh.material.opacity,.05+z*.95,Ie),e.mesh.material.color.copy(ye).lerp(be,a*.2);for(let e of Ue)e.mesh.material.opacity=Mt.lerp(e.mesh.material.opacity,.035+z*.965,Ie);for(let e of qe){let t=Ae.has(e.index)?.96:L.has(e.index)?.28+Pe[e.index]*.34:0;e.mesh.material.opacity=Mt.lerp(e.mesh.material.opacity,t,1-Math.exp(-r*2.2))}for(let e of Je){let t=L.has(e.neighborhood.id);e.mesh.material.opacity=Mt.lerp(e.mesh.material.opacity,+!!t,1-Math.exp(-r*2.6))}U.visible=L.has(3);let Le=Ee.filter(e=>!se.has(e));for(let t of Le){se.add(t);let n=ke.filter(e=>!Ae.has(e)),r=n.length>0?n:Wu.map(e=>e.id).filter(e=>!Ae.has(e)),i,a=1/0;for(let e of r){let t=Qu(Wu[e].center,G,le),n=Math.hypot(t.x-G.x,t.y-G.y);n>=a||(i=e,a=n)}i!==void 0&&on(Wu[i].center,e+520,`celebration`)}if(ke.length>ce.length)for(let t of ke)ue.has(t)||(ue.add(t),dn(Qu(Wu[t].center,G,le),t,e,!1));ce=ke;for(let t of Ee){if(M.current.town.celebratedNeighborhoodIds.includes(t))continue;let n=Qu(Wu[t].center,G,le);Math.hypot(n.x-G.x,n.y-G.y)>14||(dn(n,t,e,!0),de.set(t,{until:e+12e4,nextBurst:e+3300}),navigator.vibrate&&navigator.vibrate([18,38,18,38,26]),M.current=Pu(M.current,t),j=M.current)}for(let[t,n]of de){if(e>=n.until){de.delete(t);continue}e<n.nextBurst||ee.length>210||(dn(Qu(Wu[t].center,G,le),t,e,!1),n.nextBurst=e+3600+(t*773+Math.floor(e))%2200)}if(e-g>650){let t=0,n=1/0;for(let e of qe){if(!L.has(e.index))continue;let r=Qu(Wu[e.index].center,G,le),i=Math.hypot(r.x-G.x,r.y-G.y);i>=n||(n=i,t=e.index)}let r=`${Wu[t].map.x}:${Wu[t].map.y}`;M.current=Nu(M.current,r),g=e}we.position.x=G.x,we.position.y=G.y;let Re=Math.max(0,Math.sin(e*21e-5+M.current.town.worldSeed))**4,ze=!1;for(let e=0;e<je.length;e+=1){let t=je[e],n=Ld(t,G,272),r=n.x,i=n.y;r===t.x&&i===t.y||(t.x=r,t.y=i,Te.compose(new H(t.x,t.y,t.z),new Pt,new H(t.scale,t.scale,1)),Oe.setMatrixAt(e,Te),ze=!0)}ze&&(Oe.instanceMatrix.needsUpdate=!0);for(let t of Ve){if(!t.mesh.visible)continue;let n=!1;for(let r=0;r<t.instances.length;r+=1){let i=t.instances[r],a=Qu({x:i.canonicalX,y:i.canonicalY},G,le),o=L.has(i.neighborhood);i.x=a.x,i.y=a.y;let s=(t.kind===`tree`||t.kind===`lamp`?1.38:.9)*i.scale;i.z=Tf(i.y-s,-.16);let c=t.kind===`tree`?Math.sin(e*.0016+r*.73+i.neighborhood)*(.008+Re*.045):0,l=o?i.scale:0;Te.compose(new H(i.x,i.y,i.z),new Pt().setFromAxisAngle(new H(0,0,1),i.rotation+c),new H(l,l,1)),t.mesh.setMatrixAt(r,Te),n=!0}n&&(t.mesh.instanceMatrix.needsUpdate=!0)}for(let t of Tt){let n=R[t.neighborhood]?.length??0,i=L.has(t.neighborhood)&&n>=t.revealAfter;i&&!t.loaded&&!t.loading&&(t.loading=!0,wt.load(t.path,e=>{e.colorSpace=Be,e.minFilter=u,e.magFilter=u,e.generateMipmaps=!1,t.texture=e,t.mesh.material.map=e,t.mesh.material.needsUpdate=!0,t.loaded=!0,t.loading=!1},void 0,()=>{t.loading=!1}));let o=Qu(t.canonical,G,le);t.mesh.position.x=o.x,t.mesh.position.y=o.y,t.mesh.position.z=Tf(o.y-t.footOffset,-.04);let s=i&&t.loaded;if(t.mesh.visible=s,!s)continue;let c=/tree|planter|flower/.test(t.path)?Math.sin(e*.0011+t.swayPhase)*(.006+Re*.025):0;t.mesh.rotation.z=c;let l=t.baseScale,d=Mt.lerp(t.mesh.scale.x,l,1-Math.exp(-r*3.8));t.mesh.scale.setScalar(d),t.mesh.material.opacity=Mt.lerp(t.mesh.material.opacity,1,1-Math.exp(-r*3.2)),t.mesh.material.color.copy(ye).lerp(be,a*.16)}for(let e of Ue){let t=e.instance,n=Ld(t,G,Ne);n.x===t.x&&n.y===t.y||(t.x=n.x,t.y=n.y,e.mesh.position.x=t.x,e.mesh.position.y=t.y)}for(let e of qe){let t=Qu(e.canonicalCenter,G,le);e.center.x=t.x,e.center.y=t.y,e.mesh.position.x=t.x,e.mesh.position.y=t.y}for(let e of Je){let t=Qu(e.canonical,G,le);e.mesh.position.x=t.x,e.mesh.position.y=t.y,e.mesh.position.z=Tf(t.y-e.mesh.geometry.parameters.height*.5,.02)}for(let t of pt){let n=Pe[t.neighborhood]??0,r=Qu(t.canonical,G,le);if(t.group.position.x=r.x,t.group.position.y=r.y,t.group.visible=L.has(t.neighborhood)&&(R[t.neighborhood]?.length??0)>=3,t.group.visible){if(t.actors.forEach((i,a)=>{B.copy(V).lerp(tt[(t.neighborhood+a*2)%tt.length],n*.76),i.material.color.copy(B),i.rotation.z=Math.sin(e*.0014+a*2.1+t.neighborhood)*.025,i.position.z=Tf(r.y+i.position.y-.79,.025)}),t.kind===`soccer`&&t.props[0]){let n=(Math.sin(e*.0015+t.neighborhood)+1)*.5;t.props[0].position.x=Mt.lerp(-1.55,1.55,n),t.props[0].position.y=-.22+Math.sin(Math.PI*n)*.62}else if(t.kind===`family`&&t.props[0])t.props[0].position.x=Math.sin(e*.0011+t.neighborhood)*.92,t.props[0].position.y=.05+Math.abs(Math.cos(e*.0011+t.neighborhood))*.34;else if(t.kind===`fetch`&&t.props[0]){let n=Math.sin(e*.00125+t.neighborhood);t.props[0].position.x=n*1.45,t.props[0].position.y=-.08+Math.abs(Math.cos(e*.0025))*.08,t.props[0].scale.x=n<0?-1:1}else t.kind===`reader`&&t.props.at(-1)&&(t.props.at(-1).rotation.z=Math.sin(e*8e-4)*.018);t.props.forEach(e=>{e.position.z=Tf(r.y+e.position.y-e.geometry.parameters.height*.5,.04)})}}let He=Qu(Qe,G,le);Ze.position.x=He.x,Ze.position.y=He.y;for(let e=0;e<St.length;e+=1){let t=St[e],n=Qu(t.canonicalPlot,G,le),r=n.x,i=n.y,a=r-t.plot.x,o=i-t.plot.y;for(let e of t.tokens){let t=Qu(e.canonical,G,le);e.mesh.position.x=t.x,e.mesh.position.y=t.y,e.mesh.position.z=Tf(t.y-.84,.14)}let s=Nf(t.asset,t.constructionStage??0,t.formCount,i);t.building&&(t.building.position.z=Tf(s)),t.improvementGroup&&(t.improvementGroup.position.z=Tf(i-1.1,.03)),t.activity&&(t.activity.position.z=Tf(s,.06)),t.branding&&(t.branding.position.z=Tf(s,.05)),t.remainingLabel&&(t.remainingLabel.position.z=Tf(s,.08)),!(a===0&&o===0)&&(t.plot.x=r,t.plot.y=i,t.building&&(t.building.position.x+=a,t.building.position.y+=o),t.plotHalo&&(t.plotHalo.position.x+=a,t.plotHalo.position.y+=o),t.remainingLabel&&(t.remainingLabel.position.x+=a,t.remainingLabel.position.y+=o),t.branding&&(t.branding.position.x+=a,t.branding.position.y+=o),t.improvementGroup&&(t.improvementGroup.position.x+=a,t.improvementGroup.position.y+=o),t.activity&&(t.activity.position.x+=a,t.activity.position.y+=o))}for(let t=0;t<zt.length;t+=1){let n=zt[t],r=Qu({x:n.homeX,y:n.homeY},G,le);n.x=r.x,n.y=r.y;let i=L.has(n.neighborhood)&&n.neighborhood>=3;if(i&&!n.collected&&Math.hypot(n.x-G.x,n.y-G.y)<1.12){let t=Mu(M.current,n.id);t.collected&&(M.current=t.state,j=t.state,n.collected=!0,h(j.town.reserveCollectedIds.length),Wt(659.25,.42,.036),Wt(987.77,.58,.024,.08),navigator.vibrate&&navigator.vibrate([10,28,10]),un(e))}let a=.9+Math.sin(e*.0032+n.phase)*.1,o=n.collected||!i?0:a;Te.compose(new H(n.x,n.y+Math.sin(e*.0021+n.phase)*.13,Tf(n.y-.64,.14)),new Pt,new H(o,o,1)),U.setMatrixAt(t,Te)}U.instanceMatrix.needsUpdate=!0;let We=St.find(e=>e.asset.id===`hidden-stock-exchange`),Ge=!!(We&&Su(M.current)&&Math.hypot(We.plot.x-G.x,We.plot.y-G.y)<5.1),Ke=Su(M.current)&&(Ge||e<b);We?.building&&(We.building.material.opacity=Mt.lerp(We.building.material.opacity,Ge?.28:1,.08)),Ke&&!w.current&&(!_||e-v>500)?(M.current=Cu(M.current,Date.now()),j=M.current,y(nf(M.current)),_=!0,v=e):!Ke&&_?(y(null),_=!1,w.current=!1):Ke||(w.current=!1);let Ye=0;for(let t=0;t<it.length;t+=1){let n=it[t],i=Mt.smoothstep(Pe[n.neighborhood]??0,0,1),a=R[n.neighborhood]?.length??0,o=Math.min(ot,[0,5,9,14,20,27,34,36][a]??36);if(B.copy(V).lerp(tt[(n.variant+n.neighborhood)%tt.length],i*.72),rt[n.variant].setColorAt(n.slot,B),a===0||n.arrivalOrder>=o||!L.has(n.neighborhood)){Te.compose(new H(n.x,n.y,4),new Pt,new H(0,0,1)),rt[n.variant].setMatrixAt(n.slot,Te),n.active=!1;continue}n.active=!0;let s=Qu({x:n.canonicalHomeX,y:n.canonicalHomeY},G,le),c=s.x-n.homeX,l=s.y-n.homeY,u=c!==0||l!==0;n.homeX=s.x,n.homeY=s.y,u&&(n.x+=c,n.y+=l);let d=n.homeX-G.x,f=n.homeY-G.y,p=Math.max(.001,Math.hypot(d,f));!n.passed&&p<3.25&&(n.passed=!0,Ye+=1);let m=n.homeX+Math.sin(e*(35e-5+i*12e-5)+n.phase)*(.1+i*.16)*n.drift,h=n.homeY+Math.cos(e*(31e-5+i*1e-4)+n.phase)*(.08+i*.13)*n.drift;if(p<5.35){let e=(1-p/5.35)**1.55,n=t%2==0?1:-1;m+=d/p*e*3.9+-f/p*e*n*1.2,h+=f/p*e*3.9+d/p*e*n*1.2}for(let t=0;t<k.length;t+=1){let r=k[t],i=n.homeX-r.x,a=n.homeY-r.y,o=Math.max(.01,Math.hypot(i,a));if(o<1.45){let t=1-(e-r.born)/3500;m+=i/o*t*1.05,h+=a/o*t*1.05}}let g=!1,_=Ct[n.neighborhood]??[],v=R[n.neighborhood]??[];if(i>.86&&v.length>1&&t%3==0){let t=e*(7e-5+n.drift*25e-6)+n.phase,r=Math.floor(t)%v.length,i=t-Math.floor(t),a=v[r],o=v[(r+1)%v.length],s=i*i*(3-2*i);m=Mt.lerp(a.plot.x,o.plot.x,s),h=Mt.lerp(a.plot.y-1.4,o.plot.y-1.4,s),g=!0}if(!g&&_.length>0){let r=_[t%_.length];if(pu(M.current,r.asset.id)===0){let i=Math.floor(t/Math.max(1,_.length)),a=r.asset.ambientPopulationBehavior,o=a.roles[i%a.roles.length].toLowerCase(),s=/resident|neighbor|gardener|keeper|worker|maker|engineer|operator/.test(o),c=/visitor|guest|diner|reader|shopper|family|traveler|student/.test(o),l=s?`resident`:c||i%3==0?`customer`:i%3==1?`observer`:`resident`,u=Math.sin(e*.0011+n.phase);if(l===`customer`){let t=(i%3-1)*1.12,a=(Math.sin(e*42e-5+n.phase)+1)*.5;m=r.plot.x+t+u*.12,h=r.plot.y-1.5-a*1.15}else if(l===`observer`){let t=e*16e-5*(i%2==0?1:-1)+n.phase;m=r.plot.x+Math.cos(t)*(2.75+i%2*.42),h=r.plot.y+Math.sin(t)*1.72}else{let t=i%2==0?-1:1;m=r.plot.x+t*(1.55+i%3*.38)+u*.24,h=r.plot.y+2.12+Math.cos(e*8e-4+n.phase)*.18}g=!0}}Dt.x=m,Dt.y=h,kt(Dt,n.neighborhood,n.phase),m=Dt.x,h=Dt.y;let y=1-Math.exp(-r*(g?2.8:p<5.35?4.7:1.15)),b=Mt.lerp(n.x,m,y),x=Mt.lerp(n.y,h,y),S=b-n.x,C=x-n.y,w=Math.hypot(S,C),E=r*(.95+i*1.35+(p<5.35?.85:0)),D=w>E?E/w:1;n.x+=S*D,n.y+=C*D;let O=Math.sin(e*(.0018+i*8e-4)+n.phase)*(.018+i*.045);Te.compose(new H(n.x,n.y+O,Tf(n.y-n.size*.83,.01)),new Pt,new H(n.size,n.size,1)),rt[n.variant].setMatrixAt(n.slot,Te);let A=Math.hypot(n.x-G.x,n.y-G.y);n.greetingEligible&&!n.greeted&&T>.28&&A<2.45&&e>=st&&(n.greeted=!0,ut(n,Yd[(t+n.neighborhood*3+j.town.crowdSeed>>>0)%Yd.length],e),st=e+14e3+t%5*1600)}if(rt.forEach(e=>{e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}),ct){let t=ct,n=e-t.born;if(n>=t.duration||!t.person.active)lt();else{let e=Mt.smoothstep(n,0,260),r=1-Mt.smoothstep(n,t.duration-520,t.duration),i=Math.min(e,r);t.mesh.material.opacity=i,t.mesh.position.set(t.person.x,t.person.y+2.08+Math.sin(n*.004)*.035+n*35e-6,Tf(t.person.y-1.3,.95));let a=.9+i*.1;t.mesh.scale.set(a,a,1)}}Ye>0&&(M.current=ju(M.current,Ye),j=M.current);let et,nt=1/0;for(let t=0;t<St.length;t+=1){let n=St[t];if(!L.has(n.neighborhood)){n.tokens.forEach(e=>{e.mesh.visible=!1}),n.building&&(n.building.visible=!1),n.plotHalo&&(n.plotHalo.visible=!1),n.branding&&(n.branding.visible=!1),n.remainingLabel&&(n.remainingLabel.visible=!1),n.improvementGroup&&(n.improvementGroup.visible=!1),n.activity&&(n.activity.visible=!1);continue}let i=re[n.neighborhood]??[];if(n.flowAvailable=cf(M.current,n.asset,i),n.landOwned=n.asset.discovery!==`crowd`||hu(M.current,n.asset.id),n.unlocked=n.flowAvailable&&n.landOwned,n.asset.discovery===`crowd`&&!n.flowAvailable){n.tokens.forEach(e=>{e.mesh.visible=!1}),n.building&&(n.building.visible=!1),n.plotHalo&&(n.plotHalo.visible=!1),n.branding&&(n.branding.visible=!1),n.remainingLabel&&(n.remainingLabel.visible=!1),n.improvementGroup&&(n.improvementGroup.visible=!1),n.activity&&(n.activity.visible=!1);continue}if(n.asset.discovery===`crowd`&&!n.landOwned){n.tokens.forEach(e=>{e.mesh.visible=!1}),n.building&&(n.building.visible=!1),n.plotHalo&&(n.plotHalo.visible=!0),n.branding&&(n.branding.visible=!1),n.remainingLabel&&(n.remainingLabel.visible=!1),n.improvementGroup&&(n.improvementGroup.visible=!1),n.activity&&(n.activity.visible=!1);let e=Math.hypot(n.plot.x-G.x,n.plot.y-G.y);e<4.8&&e<nt&&(nt=e,et=n);continue}if(!n.artLoaded&&n.building&&(n.constructionTexture?.dispose(),n.constructionTexture=Cf(n.asset,n.constructionStage??0,n.formCount),n.building.material.map=n.constructionTexture,n.building.material.needsUpdate=!0,n.artLoaded=!0),!n.tokenTextureLoaded){let e=_f(n.asset);vt.set(n.asset.id,e),n.tokens.forEach(t=>{t.mesh.material.map=e,t.mesh.material.needsUpdate=!0}),n.tokenTextureLoaded=!0}n.improvementGroup&&(n.improvementGroup.visible=n.landOwned);for(let e of n.improvements){if(!e.visible)continue;let t=e.geometry.parameters.width>1.2?1.08:1;e.scale.lerp(new H(t,t,1),1-Math.exp(-r*5.8))}let o=pu(M.current,n.asset.id)===0,s=Math.hypot(n.plot.x-G.x,n.plot.y-G.y)<13;if(n.activity&&(n.activity.visible=o&&s,n.activity.visible)){let i=r*(.8+t%4*.16);n.activityKind===`rotor`?n.activity.rotation.z-=i*2.5:n.activityKind===`orbit`&&(n.activity.rotation.z+=i),n.activity.children.forEach((t,r)=>{if(!(t instanceof ni))return;n.activityKind===`steam`?(t.position.y=(e*72e-5+r*.23)%1.5-.25,t.position.x=Math.sin(e*.0015+r)*.32,t.scale.setScalar(.75+t.position.y*.3)):n.activityKind===`lights`&&t.scale.setScalar(.75+Math.sin(e*.003+r*1.7)*.28);let i=t.material;!Array.isArray(i)&&i instanceof Wr&&(i.opacity=.5+Math.sin(e*.0025+r)*.25)})}if(n.asset.discovery!==`exchange-exclusive`&&(n.building&&(n.building.visible=!0),n.plotHalo&&(n.plotHalo.visible=!1),n.branding&&(n.branding.visible=fu(M.current,n.asset.id)>0),n.remainingLabel&&(n.remainingLabel.visible=fu(M.current,n.asset.id)>0&&!o)),n.pendingStage!==void 0&&Math.abs(n.plot.x-I.position.x)<Math.abs(I.right)*.9&&Math.abs(n.plot.y-I.position.y)<I.top*.95&&pn(n,n.pendingStage,e),n.asset.discovery===`exchange-exclusive`){let e=Su(M.current)||fu(M.current,n.asset.id)>0;n.tokens.forEach(e=>{e.mesh.visible=!1}),n.building&&(n.building.visible=e),n.plotHalo&&(n.plotHalo.visible=!1),n.branding&&(n.branding.visible=e&&fu(M.current,n.asset.id)>0);continue}if(n.asset.id===`hidden-stock-exchange`&&!xu(M.current)){n.tokens.forEach(e=>{e.mesh.visible=!1});continue}if(pu(M.current,n.asset.id)<=0){n.tokens.forEach(e=>{e.mesh.visible=!1});continue}if(!n.unlocked){n.tokens.forEach(e=>{e.mesh.visible=!1});continue}for(let t of n.tokens){if(t.mesh.visible=!mu(M.current,n.asset.id,t.pieceIndex),!t.mesh.visible)continue;let r=Qu(t.canonical,G,le);t.mesh.position.y=r.y+Math.sin(e*.0022+n.pulsePhase+t.pieceIndex*.8)*.08;let i=.92+Math.sin(e*.003+n.pulsePhase+t.pieceIndex)*.09;t.mesh.scale.setScalar(i),Math.hypot(t.mesh.position.x-G.x,t.mesh.position.y-G.y)<1.16&&mn(n,t,e)}n.building&&(n.building.material.color.copy(ye).lerp(be,a*.22),n.building.scale.lerp(new H(Af(n.asset,n.constructionStage??0,n.formCount),Af(n.asset,n.constructionStage??0,n.formCount),1),.08))}if(e>=pe&&te.length===0){let t=sn(L);fe+=1,t?(on(t,e,`guidance`),pe=e+38e3+(M.current.town.worldSeed+fe*7919)%18e3):pe=e+12e3}let at=et?`${et.asset.id}:${Math.floor(M.current.budget)}`:``;at!==E&&(E=at,x(et?{assetId:et.asset.id,name:et.asset.name,price:et.landPrice,budget:M.current.budget}:null));for(let t=A.length-1;t>=0;--t){let n=A[t],r=(e-n.born)/n.duration;if(r<0){n.mesh.visible=!1;continue}if(n.mesh.visible=!0,r>=1)F.remove(n.mesh),n.mesh.material.dispose(),A.splice(t,1);else{let e=1-(1-r)**3;n.mesh.scale.setScalar(.35+e*8.4),n.mesh.material.opacity=(1-r)*.72}}for(let t=ee.length-1;t>=0;--t){let n=ee[t],r=e-n.born-n.delay;if(r<0)continue;let i=r/n.duration;if(i>=1)F.remove(n.mesh),n.mesh.material.dispose(),ee.splice(t,1);else{let e=i*i*(3-2*i);n.mesh.position.x=Mt.lerp(n.from.x,n.to.x,e),n.mesh.position.y=Mt.lerp(n.from.y,n.to.y,e)+Math.sin(Math.PI*i)*n.arc,n.mesh.material.opacity=Math.min(1,i*5)*(1-i*.45)*(n.maxOpacity??1)}}for(let t=te.length-1;t>=0;--t){let n=te[t],r=e-n.born-n.delay;if(r<0){n.mesh.visible=!1;continue}let i=r/n.duration;if(i>=1){F.remove(n.mesh),n.mesh.material.dispose(),te.splice(t,1);continue}n.mesh.visible=!0;let a=i*i*(3-2*i);n.mesh.position.x=Mt.lerp(n.from.x,n.to.x,a),n.mesh.position.y=Mt.lerp(n.from.y,n.to.y,a)+Math.sin(Math.PI*i)*n.arc+Math.sin(e*.004+n.phase)*.1;let o=.82+Math.abs(Math.sin(e*.008+n.phase))*.23,s=Math.min(1,i*8)*Math.min(1,(1-i)*6);n.mesh.scale.set(n.baseScale*o*s,n.baseScale*s,1),n.mesh.material.opacity=n.maxOpacity*s}e-l>350&&(M.current=wu(M.current,Date.now()),j=M.current,p({budget:j.budget}),l=e),e-f>3e3&&(M.current=Lu(M.current),j=M.current,f=e)}me.render(F,I)};return s=requestAnimationFrame(xn),()=>{a=!0,cancelAnimationFrame(s),window.removeEventListener(`keydown`,hn),window.removeEventListener(`keyup`,gn),window.removeEventListener(`resize`,bn),me.domElement.removeEventListener(`pointerdown`,_n),me.domElement.removeEventListener(`pointermove`,vn),me.domElement.removeEventListener(`pointerup`,yn),me.domElement.removeEventListener(`pointercancel`,yn),M.current=Lu(M.current),P&&(window.clearInterval(P.timer),P.context.close()),lt(),me.dispose(),F.traverse(e=>{if(!(e instanceof ni)&&!(e instanceof mi))return;e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t?.dispose()}),xe.dispose(),Ee.dispose(),ze.forEach(e=>e.dispose()),He.forEach(e=>e.dispose()),We.forEach(e=>e.dispose()),Je.forEach(e=>e.texture.dispose()),Xe.dispose(),Tt.forEach(e=>e.texture?.dispose()),et.forEach(e=>e.dispose()),Object.values(dt).forEach(e=>e.dispose()),mt.dispose(),vt.forEach(e=>e.dispose()),bt.forEach(e=>e.dispose()),St.forEach(e=>e.building?.material.map?.dispose()),yt.dispose(),Ft.dispose(),Xt.dispose(),Zt.dispose(),jt.textures.forEach(e=>e.dispose()),me.domElement.parentNode===r&&r.removeChild(me.domElement)}},[]),(0,Hd.jsxs)(`section`,{className:`wally-game`,"aria-label":`WALLY WORLD game`,children:[(0,Hd.jsx)(`div`,{ref:e,className:`wally-stage`}),(0,Hd.jsx)(`div`,{className:`wally-hud`,"aria-label":`Town status`,children:(0,Hd.jsxs)(`div`,{className:`wally-budget`,"aria-label":`Budget ${Math.floor(f.budget)}`,children:[(0,Hd.jsx)(`span`,{className:`wally-budget-mark`,"aria-hidden":`true`,children:`$`}),(0,Hd.jsx)(`span`,{children:Math.floor(f.budget).toLocaleString()})]})}),(0,Hd.jsxs)(`button`,{type:`button`,className:`wally-pause-button`,"aria-label":`Pause`,onPointerDown:e=>{e.stopPropagation(),T.current()},onClick:()=>{o(!0)},children:[(0,Hd.jsx)(`span`,{}),(0,Hd.jsx)(`span`,{})]}),!l&&(0,Hd.jsx)(`div`,{className:`wally-loading`,"aria-label":`Loading WALLY WORLD`,children:(0,Hd.jsx)(`span`,{})}),b&&!a&&!v&&(0,Hd.jsxs)(`div`,{className:`wally-land-offer`,role:`dialog`,"aria-label":`Land available for ${b.name}`,onPointerDown:e=>e.stopPropagation(),children:[(0,Hd.jsx)(`span`,{className:`wally-land-flag`,"aria-hidden":`true`,children:`$`}),(0,Hd.jsxs)(`span`,{className:`wally-land-copy`,children:[(0,Hd.jsx)(`strong`,{children:`Available plot`}),(0,Hd.jsx)(`small`,{children:b.name})]}),(0,Hd.jsx)(`button`,{type:`button`,disabled:b.budget<b.price,onClick:()=>C.current(b.assetId),children:b.budget<b.price?`Save $${b.price}`:`Buy · $${b.price}`})]}),v&&!a&&(0,Hd.jsxs)(`div`,{className:`wally-exchange-panel`,role:`dialog`,"aria-label":`Wally World Exchange`,onPointerDown:e=>e.stopPropagation(),children:[(0,Hd.jsxs)(`div`,{className:`wally-exchange-head`,children:[(0,Hd.jsx)(`span`,{className:`wally-exchange-seal`,"aria-hidden":`true`,children:`W`}),(0,Hd.jsx)(`span`,{children:`Exchange`}),(0,Hd.jsx)(`button`,{type:`button`,"aria-label":`Close exchange`,onClick:()=>{w.current=!0,y(null)},children:`×`})]}),(0,Hd.jsx)(`div`,{className:`wally-exchange-cards`,children:v.cards.map(e=>{let t=e.remaining===0,n=v.budget>=e.price;return(0,Hd.jsxs)(`article`,{className:`wally-exchange-card`,children:[(0,Hd.jsx)(`span`,{className:`wally-stock-icon is-${e.icon}`,"aria-hidden":`true`,children:tf[e.icon]}),(0,Hd.jsx)(`span`,{className:`wally-stock-name`,children:e.name}),(0,Hd.jsxs)(`span`,{className:`wally-stock-price`,children:[`$`,e.price]}),e.remaining>0&&(0,Hd.jsx)(`span`,{className:`wally-stock-remaining`,children:e.remaining}),(0,Hd.jsx)(`button`,{type:`button`,disabled:t||!n,"aria-label":t?`${e.name} complete`:`Buy ${e.name} for ${e.price}`,onClick:()=>S.current(e.id),children:t?`✓`:`Buy`})]},e.id)})})]}),a&&(0,Hd.jsx)(`div`,{className:`wally-pause-layer`,role:`dialog`,"aria-modal":`true`,"aria-label":`WALLY WORLD paused`,children:(0,Hd.jsxs)(`div`,{className:`wally-pause-card`,children:[(0,Hd.jsx)(`h1`,{children:`WALLY WORLD`}),(0,Hd.jsxs)(`p`,{className:`wally-reserve-status`,children:[`WALLY Reserve `,m,` / `,Kd]}),(0,Hd.jsx)(`button`,{type:`button`,className:`wally-continue`,onClick:()=>o(!1),children:`Continue`}),(0,Hd.jsxs)(`button`,{type:`button`,className:`wally-sound-toggle`,"aria-pressed":s,onClick:()=>{T.current(),c(e=>!e)},children:[`Sound `,s?`on`:`off`]}),(0,Hd.jsx)(`button`,{type:`button`,className:`wally-restart ${g?`is-confirming`:``}`,onClick:()=>{if(!g){_(!0);return}Fu(),window.location.reload()},children:g?`Tap again to restart`:`Restart town`}),g&&(0,Hd.jsx)(`button`,{type:`button`,className:`wally-restart-cancel`,onClick:()=>_(!1),children:`Keep my town`})]})})]})}export{Ff as default};