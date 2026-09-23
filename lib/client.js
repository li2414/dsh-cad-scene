window.__ModuleLoader__.load({
	id: "dsh-cad-scene",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var Dd=Object.create;var qr=Object.defineProperty;var Nd=Object.getOwnPropertyDescriptor;var Ud=Object.getOwnPropertyNames;var Fd=Object.getPrototypeOf,Od=Object.prototype.hasOwnProperty;var Bd=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},kd=(i,e)=>{for(var t in e)qr(i,t,{get:e[t],enumerable:!0})},ah=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ud(e))!Od.call(i,s)&&s!==t&&qr(i,s,{get:()=>e[s],enumerable:!(n=Nd(e,s))||n.enumerable});return i};var zd=(i,e,t)=>(t=i!=null?Dd(Fd(i)):{},ah(e||!i||!i.__esModule?qr(t,"default",{value:i,enumerable:!0}):t,i)),Vd=i=>ah(qr({},"__esModule",{value:!0}),i);var pd=Bd((fd,ll)=>{(function(i,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof ll=="object"&&ll.exports?ll.exports=e():i.log=e()})(fd,function(){"use strict";var i=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],s={},r=null;function o(g,S){var p=g[S];if(typeof p.bind=="function")return p.bind(g);try{return Function.prototype.bind.call(p,g)}catch{return function(){return Function.prototype.apply.apply(p,[g,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(g){return g==="debug"&&(g="log"),typeof console===e?!1:g==="trace"&&t?a:console[g]!==void 0?o(console,g):console.log!==void 0?o(console,"log"):i}function c(){for(var g=this.getLevel(),S=0;S<n.length;S++){var p=n[S];this[p]=S<g?i:this.methodFactory(p,g,this.name)}if(this.log=this.debug,typeof console===e&&g<this.levels.SILENT)return"No console available for logging"}function u(g){return function(){typeof console!==e&&(c.call(this),this[g].apply(this,arguments))}}function d(g,S,p){return l(g)||u.apply(this,arguments)}function h(g,S){var p=this,m,T,C,_="loglevel";typeof g=="string"?_+=":"+g:typeof g=="symbol"&&(_=void 0);function E(R){var P=(n[R]||"silent").toUpperCase();if(!(typeof window===e||!_)){try{window.localStorage[_]=P;return}catch{}try{window.document.cookie=encodeURIComponent(_)+"="+P+";"}catch{}}}function v(){var R;if(!(typeof window===e||!_)){try{R=window.localStorage[_]}catch{}if(typeof R===e)try{var P=window.document.cookie,O=encodeURIComponent(_),V=P.indexOf(O+"=");V!==-1&&(R=/^([^;]+)/.exec(P.slice(V+O.length+1))[1])}catch{}return p.levels[R]===void 0&&(R=void 0),R}}function M(){if(!(typeof window===e||!_)){try{window.localStorage.removeItem(_)}catch{}try{window.document.cookie=encodeURIComponent(_)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function x(R){var P=R;if(typeof P=="string"&&p.levels[P.toUpperCase()]!==void 0&&(P=p.levels[P.toUpperCase()]),typeof P=="number"&&P>=0&&P<=p.levels.SILENT)return P;throw new TypeError("log.setLevel() called with invalid level: "+R)}p.name=g,p.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},p.methodFactory=S||d,p.getLevel=function(){return C??T??m},p.setLevel=function(R,P){return C=x(R),P!==!1&&E(C),c.call(p)},p.setDefaultLevel=function(R){T=x(R),v()||p.setLevel(R,!1)},p.resetLevel=function(){C=null,M(),c.call(p)},p.enableAll=function(R){p.setLevel(p.levels.TRACE,R)},p.disableAll=function(R){p.setLevel(p.levels.SILENT,R)},p.rebuild=function(){if(r!==p&&(m=x(r.getLevel())),c.call(p),r===p)for(var R in s)s[R].rebuild()},m=x(r?r.getLevel():"WARN");var w=v();w!=null&&(C=x(w)),c.call(p)}r=new h,r.getLogger=function(S){if(typeof S!="symbol"&&typeof S!="string"||S==="")throw new TypeError("You must supply a name when creating a logger.");var p=s[S];return p||(p=s[S]=new h(S,r.methodFactory)),p};var f=typeof window!==e?window.log:void 0;return r.noConflict=function(){return typeof window!==e&&window.log===r&&(window.log=f),r},r.getLoggers=function(){return s},r.default=r,r})});var iy={};kd(iy,{apply:()=>ny,inject:()=>Ix});module.exports=Vd(iy);var st=require("react");var li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,Ql=1,Wh=2;var pr=1,Xh=2,hs=3,hi=0,Xt=1,rn=2,Rn=0,us=1,ec=2,tc=3,nc=4,Yh=5;var Ti=100,qh=101,Zh=102,Jh=103,Kh=104,$h=200,jh=201,Qh=202,eu=203,ic=204,sc=205,tu=206,nu=207,iu=208,su=209,ru=210,au=211,ou=212,lu=213,cu=214,Sa=0,Ma=1,Ea=2,$i=3,wa=4,Ta=5,Aa=6,Ca=7,rc=0,hu=1,uu=2,gn=0,ac=1,oc=2,lc=3,cc=4,hc=5,uc=6,dc=7;var fc=300,ui=301,Ai=302,co=303,ho=304,mr=306,Ra=1e3,Mn=1001,Pa=1002,Dt=1003,du=1004;var gr=1005;var Ut=1006,uo=1007;var di=1008;var qt=1009,pc=1010,mc=1011,ds=1012,fo=1013,_n=1014,xn=1015,yn=1016,po=1017,mo=1018,fs=1020,gc=35902,_c=35899,xc=1021,yc=1022,ln=1023,Tn=1026,fi=1027,vc=1028,go=1029,pi=1030,_o=1031;var xo=1033,_r=33776,xr=33777,yr=33778,vr=33779,yo=35840,vo=35841,bo=35842,So=35843,Mo=36196,Eo=37492,wo=37496,To=37488,Ao=37489,br=37490,Co=37491,Ro=37808,Po=37809,Io=37810,Lo=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,ko=37818,zo=37819,Vo=37820,Ho=37821,Go=36492,Wo=36494,Xo=36495,Yo=36283,qo=36284,Sr=36285,Zo=36286;var Ds=2300,Ia=2301,va=2302,Vl=2303,Hl=2400,Gl=2401,Wl=2402;var fu=3200;var Jo=0,pu=1,Wn="",$t="srgb",Ns="srgb-linear",Us="linear",ht="srgb";var ba=7680;var mu=519,gu=512,_u=513,xu=514,Ko=515,yu=516,vu=517,$o=518,bu=519,bc=35044;var Sc="300 es",pn=2e3,ji=2001;function Hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){let i=Fs("canvas");return i.style.display="block",i}var oh={},Qi=null;function Os(...i){let e="THREE."+i.shift();Qi?Qi("log",e,...i):console.log(e,...i)}function Mu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Mu(i);let e="THREE."+i.shift();if(Qi)Qi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Mu(i);let e="THREE."+i.shift();if(Qi)Qi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function vi(...i){let e=i.join(" ");e in oh||(oh[e]=!0,Ve(...i))}function Eu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wu={[Sa]:Ma,[Ea]:Aa,[wa]:Ca,[$i]:Ta,[Ma]:Sa,[Aa]:Ea,[Ca]:wa,[Ta]:$i},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=1234567,Rs=Math.PI/180,es=180/Math.PI;function wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function Mc(i,e){return(i%e+e)%e}function Wd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Xd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ps(i,e,t){return(1-t)*i+t*e}function Yd(i,e,t,n){return Ps(i,e,1-Math.exp(-t*n))}function qd(i,e=1){return e-Math.abs(Mc(i,e*2)-e)}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $d(i,e){return i+Math.random()*(e-i)}function jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(lh=i);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ef(i){return i*Rs}function tf(i){return i*es}function nf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function af(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ec={DEG2RAD:Rs,RAD2DEG:es,generateUUID:wn,clamp:je,euclideanModulo:Mc,mapLinear:Wd,inverseLerp:Xd,lerp:Ps,damp:Yd,pingpong:qd,smoothstep:Zd,smootherstep:Jd,randInt:Kd,randFloat:$d,randFloatSpread:jd,seededRandom:Qd,degToRad:ef,radToDeg:tf,isPowerOfTwo:nf,ceilPowerOfTwo:sf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:af,normalize:dt,denormalize:fn},le=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*S;p<0&&(h=-h,f=-f,g=-g,S=-S,p=-p);let m=1-a;if(p<.9995){let T=Math.acos(p),C=Math.sin(T);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+S*a}else{l=l*m+h*a,c=c*m+f*a,u=u*m+g*a,d=d*m+S*a;let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new I,ch=new en,qe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],S=s[0],p=s[3],m=s[6],T=s[1],C=s[4],_=s[7],E=s[2],v=s[5],M=s[8];return r[0]=o*S+a*T+l*E,r[3]=o*p+a*C+l*v,r[6]=o*m+a*_+l*M,r[1]=c*S+u*T+d*E,r[4]=c*p+u*C+d*v,r[7]=c*m+u*_+d*M,r[2]=h*S+f*T+g*E,r[5]=h*p+f*C+g*v,r[8]=h*m+f*_+g*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*c-u*n)*S,e[2]=(a*n-s*o)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gl.makeScale(e,t)),this}rotate(e){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gl=new qe,hh=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function of(){let i={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ns]:{primaries:e,whitePoint:n,transfer:Us,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}var nt=of();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Di,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Di===void 0&&(Di=Fs("canvas")),Di.width=e.width,Di.height=e.height;let s=Di.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lf=0,ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_l(s[o].image)):r.push(_l(s[o]))}else r=_l(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var cf=0,xl=new I,Wt=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=Ut,o=di,a=ln,l=qt,c=i.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=wn(),this.name="",this.source=new ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=fc;Wt.DEFAULT_ANISOTROPY=1;var St=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,_=(f+1)/2,E=(m+1)/2,v=(u+h)/4,M=(d+S)/4,x=(g+p)/4;return C>_&&C>E?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=v/n,r=M/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=v/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=M/r,s=x/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-S)/T,this.z=(h-u)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Wt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ts(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bs=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,S,p)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,S,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,S=c*d;t[0]=h+S*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,S=c*d;t[0]=h-S*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,uf)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Zn.crossVectors(n,Jt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Zn.crossVectors(n,Jt)),Zn.normalize(),Zr.crossVectors(Jt,Zn),s[0]=Zn.x,s[4]=Zr.x,s[8]=Jt.x,s[1]=Zn.y,s[5]=Zr.y,s[9]=Jt.y,s[2]=Zn.z,s[6]=Zr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],S=n[6],p=n[10],m=n[14],T=n[3],C=n[7],_=n[11],E=n[15],v=s[0],M=s[4],x=s[8],w=s[12],R=s[1],P=s[5],O=s[9],V=s[13],D=s[2],z=s[6],j=s[10],J=s[14],re=s[3],F=s[7],H=s[11],Z=s[15];return r[0]=o*v+a*R+l*D+c*re,r[4]=o*M+a*P+l*z+c*F,r[8]=o*x+a*O+l*j+c*H,r[12]=o*w+a*V+l*J+c*Z,r[1]=u*v+d*R+h*D+f*re,r[5]=u*M+d*P+h*z+f*F,r[9]=u*x+d*O+h*j+f*H,r[13]=u*w+d*V+h*J+f*Z,r[2]=g*v+S*R+p*D+m*re,r[6]=g*M+S*P+p*z+m*F,r[10]=g*x+S*O+p*j+m*H,r[14]=g*w+S*V+p*J+m*Z,r[3]=T*v+C*R+_*D+E*re,r[7]=T*M+C*P+_*z+E*F,r[11]=T*x+C*O+_*j+E*H,r[15]=T*w+C*V+_*J+E*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],S=e[7],p=e[11],m=e[15],T=l*f-c*h,C=a*f-c*d,_=a*h-l*d,E=o*f-c*u,v=o*h-l*u,M=o*d-a*u;return t*(S*T-p*C+m*_)-n*(g*T-p*E+m*v)+s*(g*C-S*E+m*M)-r*(g*_-S*v+p*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],S=e[13],p=e[14],m=e[15],T=t*a-n*o,C=t*l-s*o,_=t*c-r*o,E=n*l-s*a,v=n*c-r*a,M=s*c-r*l,x=u*S-d*g,w=u*p-h*g,R=u*m-f*g,P=d*p-h*S,O=d*m-f*S,V=h*m-f*p,D=T*V-C*O+_*P+E*R-v*w+M*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return e[0]=(a*V-l*O+c*P)*z,e[1]=(s*O-n*V-r*P)*z,e[2]=(S*M-p*v+m*E)*z,e[3]=(h*v-d*M-f*E)*z,e[4]=(l*R-o*V-c*w)*z,e[5]=(t*V-s*R+r*w)*z,e[6]=(p*_-g*M-m*C)*z,e[7]=(u*M-h*_+f*C)*z,e[8]=(o*O-a*R+c*x)*z,e[9]=(n*R-t*O-r*x)*z,e[10]=(g*v-S*_+m*T)*z,e[11]=(d*_-u*v-f*T)*z,e[12]=(a*w-o*P-l*x)*z,e[13]=(t*P-n*w+s*x)*z,e[14]=(S*C-g*E-p*T)*z,e[15]=(u*E-d*C+h*T)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,S=o*u,p=o*d,m=a*d,T=l*c,C=l*u,_=l*d,E=n.x,v=n.y,M=n.z;return s[0]=(1-(S+m))*E,s[1]=(f+_)*E,s[2]=(g-C)*E,s[3]=0,s[4]=(f-_)*v,s[5]=(1-(h+m))*v,s[6]=(p+T)*v,s[7]=0,s[8]=(g+C)*M,s[9]=(p-T)*M,s[10]=(1-(h+S))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ni.set(s[0],s[1],s[2]).length(),a=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hn.copy(this);let c=1/o,u=1/a,d=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===pn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===ji)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===pn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===ji)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ni=new I,hn=new gt,hf=new I(0,0,0),uf=new I(1,1,1),Zn=new I,Zr=new I,Jt=new I,dh=new gt,fh=new en,Hn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},df=0,ph=new I,Ui=new en,Nn=new gt,Jr=new I,vs=new I,ff=new I,pf=new en,mh=new I(1,0,0),gh=new I(0,1,0),_h=new I(0,0,1),xh={type:"added"},mf={type:"removed"},Fi={type:"childadded",child:null},yl={type:"childremoved",child:null},Nt=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Hn,n=new en,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new qe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(vs,Jr,this.up):Nn.lookAt(Jr,vs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xh),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xh),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},gf={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,n),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Mc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return nt.workingToColorSpace(Bt.copy(this),e),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=$t){nt.workingToColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Kr);let n=Ps(Jn.h,Kr.h,t),s=Ps(Jn.s,Kr.s,t),r=Ps(Jn.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ze;Ze.NAMES=Tu;var ks=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new I,Un=new I,bl=new I,Fn=new I,Oi=new I,Bi=new I,yh=new I,Sl=new I,Ml=new I,El=new I,wl=new St,Tl=new St,Al=new St,kn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Un.subVectors(n,t),bl.subVectors(e,t);let o=un.dot(un),a=un.dot(Un),l=un.dot(bl),c=Un.dot(Un),u=Un.dot(bl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,n),Al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Un.subVectors(e,t),un.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Oi.subVectors(s,n),Bi.subVectors(r,n),Sl.subVectors(e,n);let l=Oi.dot(Sl),c=Bi.dot(Sl);if(l<=0&&c<=0)return t.copy(n);Ml.subVectors(e,s);let u=Oi.dot(Ml),d=Bi.dot(Ml);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Oi,o);El.subVectors(e,r);let f=Oi.dot(El),g=Bi.dot(El);if(g>=0&&f<=g)return t.copy(r);let S=f*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bi,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return yh.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(yh,a);let m=1/(p+S+h);return o=S*m,a=h*m,t.copy(n).addScaledVector(Oi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),jr.subVectors(this.max,bs),ki.subVectors(e.a,bs),zi.subVectors(e.b,bs),Vi.subVectors(e.c,bs),Kn.subVectors(zi,ki),$n.subVectors(Vi,zi),gi.subVectors(ki,Vi);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-gi.z,gi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,gi.z,0,-gi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-gi.y,gi.x,0];return!Cl(t,ki,zi,Vi,jr)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,ki,zi,Vi,jr))?!1:(Qr.crossVectors(Kn,$n),t=[Qr.x,Qr.y,Qr.z],Cl(t,ki,zi,Vi,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},On=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,$r=new An,ki=new I,zi=new I,Vi=new I,Kn=new I,$n=new I,gi=new I,bs=new I,jr=new I,Qr=new I,_i=new I;function Cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);let a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var At=new I,ea=new le,_f=0,Qt=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hs=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},xf=new An,Ss=new I,Rl=new I,bi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);let t=Ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Rl)),this.expandByPoint(Ss.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yf=0,on=new gt,Pl=new Nt,Hi=new I,Kt=new An,Ms=new An,Lt=new I,wt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?Hs:Vs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Kt.min,Ms.min),Kt.expandByPoint(Lt),Lt.addVectors(Kt.max,Ms.max),Kt.expandByPoint(Lt)):(Kt.expandByPoint(Ms.min),Kt.expandByPoint(Ms.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Lt.add(Hi)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,u=new I,d=new I,h=new le,f=new le,g=new le,S=new I,p=new I;function m(x,w,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[x].add(S),a[w].add(S),a[R].add(S),l[x].add(p),l[w].add(p),l[R].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,w=T.length;x<w;++x){let R=T[x],P=R.start,O=R.count;for(let V=P,D=P+O;V<D;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let C=new I,_=new I,E=new I,v=new I;function M(x){E.fromBufferAttribute(s,x),v.copy(E);let w=a[x];C.copy(w),C.sub(E.multiplyScalar(E.dot(w))).normalize(),_.crossVectors(v,w);let P=_.dot(l[x])<0?-1:1;o.setXYZW(x,C.x,C.y,C.z,P)}for(let x=0,w=T.length;x<w;++x){let R=T[x],P=R.start,O=R.count;for(let V=P,D=P+O;V<D;V+=3)M(e.getX(V+0)),M(e.getX(V+1)),M(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Qt(h,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Gt=new I,Gs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Il=new I,vf=new I,bf=new qe,jt=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Il.subVectors(n,t).cross(vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||bf.getNormalMatrix(e),s=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sf=0,Cn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=us,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ss=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gi,Es=new I,Wi=new I,Xi=new I,Yi=new le,ws=new le,Au=new gt,ta=new I,Ts=new I,na=new I,vh=new le,Ll=new le,bh=new le,Ws=class extends Nt{constructor(e=new ss){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ua(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Gs(n,3,0,!1)),Gi.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ia(ta.set(-.5,-.5,0),Xi,o,Wi,s,r),ia(Ts.set(.5,-.5,0),Xi,o,Wi,s,r),ia(na.set(.5,.5,0),Xi,o,Wi,s,r),vh.set(0,0),Ll.set(1,0),bh.set(1,1);let a=e.ray.intersectTriangle(ta,Ts,na,!1,Es);if(a===null&&(ia(Ts.set(-.5,.5,0),Xi,o,Wi,s,r),Ll.set(0,1),a=e.ray.intersectTriangle(ta,na,Ts,!1,Es),a===null))return;let l=e.ray.origin.distanceTo(Es);l<e.near||l>e.far||t.push({distance:l,point:Es.clone(),uv:kn.getInterpolation(Es,ta,Ts,na,vh,Ll,bh,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ia(i,e,t,n,s,r){Yi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ws.x=r*Yi.x-s*Yi.y,ws.y=s*Yi.x+r*Yi.y):ws.copy(Yi),i.copy(e),i.x+=ws.x,i.y+=ws.y,i.applyMatrix4(Au)}var Bn=new I,Dl=new I,sa=new I,ra=new I,Qn=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),ra.copy(this.origin).sub(Dl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=ra.dot(this.direction),l=-ra.dot(sa),c=ra.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dl).addScaledVector(sa,h),f}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,g=t.x-o.x,S=t.y-o.y,p=t.z-o.z,m=n.x-o.x,T=n.y-o.y,C=n.z-o.z,_=Math.abs(l),E=Math.abs(c),v=Math.abs(u),M,x,w,R,P,O,V,D,z,j,J,re;if(_>=E&&_>=v?(w=l,O=d,z=g,re=m,l>=0?(M=c,x=u,R=h,P=f,V=S,D=p,j=T,J=C):(M=u,x=c,R=f,P=h,V=p,D=S,j=C,J=T)):E>=v?(w=c,O=h,z=S,re=T,c>=0?(M=u,x=l,R=f,P=d,V=p,D=g,j=C,J=m):(M=l,x=u,R=d,P=f,V=g,D=p,j=m,J=C)):(w=u,O=f,z=p,re=C,u>=0?(M=l,x=c,R=d,P=h,V=g,D=S,j=m,J=T):(M=c,x=l,R=h,P=d,V=S,D=g,j=T,J=m)),w===0)return null;let F=M/w,H=x/w,Z=1/w,de=R-F*O,ce=P-H*O,fe=V-F*z,ze=D-H*z,Be=j-F*re,K=J-H*re,B=Be*ze-K*fe,X=de*K-ce*Be,me=fe*ce-ze*de;if(s){if(B<0||X<0||me<0)return null}else if((B<0||X<0||me<0)&&(B>0||X>0||me>0))return null;let se=B+X+me;if(se===0)return null;let xe=Z*(B*O+X*z+me*re);return(se>0?xe<0:xe>0)?null:this.at(xe/se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sh=new gt,xi=new Qn,aa=new bi,Mh=new I,oa=new I,la=new I,ca=new I,Nl=new I,ha=new I,Eh=new I,ua=new I,Ct=class extends Nt{constructor(e=new wt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Nl.fromBufferAttribute(d,e),o?ha.addScaledVector(Nl,u):ha.addScaledVector(Nl.sub(t),u))}t.add(ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(aa.containsPoint(xi.origin)===!1&&(xi.intersectSphere(aa,Mh)===null||xi.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(Sh.copy(r).invert(),xi.copy(e.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),C=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=T,E=C;_<E;_+=3){let v=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);s=da(this,m,e,n,c,u,d,v,M,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){let T=a.getX(p),C=a.getX(p+1),_=a.getX(p+2);s=da(this,o,e,n,c,u,d,T,C,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let p=h[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),C=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=T,E=C;_<E;_+=3){let v=_,M=_+1,x=_+2;s=da(this,m,e,n,c,u,d,v,M,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=g,m=S;p<m;p+=3){let T=p,C=p+1,_=p+2;s=da(this,o,e,n,c,u,d,T,C,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Mf(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===hi,a),l===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:i}}function da(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,oa),i.getVertexPosition(l,la),i.getVertexPosition(c,ca);let u=Mf(i,e,t,n,oa,la,ca,Eh);if(u){let d=new I;kn.getBarycoord(Eh,oa,la,ca,d),s&&(u.uv=kn.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};kn.getNormal(oa,la,ca,h.normal),u.face=h,u.barycoord=d}return u}var Fa=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,u=Dt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=new bi,Ef=new le(.5,.5),fa=new I,rs=class{constructor(e=new jt,t=new jt,n=new jt,s=new jt,r=new jt,o=new jt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],S=r[9],p=r[10],m=r[11],T=r[12],C=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,m-g,E-T).normalize(),s[1].setComponents(c+o,f+u,m+g,E+T).normalize(),s[2].setComponents(c+a,f+d,m+S,E+C).normalize(),s[3].setComponents(c-a,f-d,m-S,E-C).normalize(),n)s[4].setComponents(l,h,p,_).normalize(),s[5].setComponents(c-l,f-h,m-p,E-_).normalize();else if(s[4].setComponents(c-l,f-h,m-p,E-_).normalize(),t===pn)s[5].setComponents(c+l,f+h,m+p,E+_).normalize();else if(t===ji)s[5].setComponents(l,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);let t=Ef.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ei=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oa=new I,Ba=new I,wh=new gt,As=new Qn,pa=new bi,Ul=new I,Th=new I,Si=class extends Nt{constructor(e=new wt,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oa.fromBufferAttribute(t,s-1),Ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oa.distanceTo(Ba);e.setAttribute("lineDistance",new ut(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;wh.copy(s).invert(),As.copy(e.ray).applyMatrix4(wh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=f,p=g-1;S<p;S+=c){let m=u.getX(S),T=u.getX(S+1),C=ma(this,e,As,l,m,T,S);C&&t.push(C)}if(this.isLineLoop){let S=u.getX(g-1),p=u.getX(f),m=ma(this,e,As,l,S,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,p=g-1;S<p;S+=c){let m=ma(this,e,As,l,S,S+1,S);m&&t.push(m)}if(this.isLineLoop){let S=ma(this,e,As,l,g-1,f,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ma(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Oa.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Oa,Ba,Ul,Th)>n)return;Ul.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ul);if(!(c<e.near||c>e.far))return{distance:c,point:Th.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ah=new I,Ch=new I,ka=class extends Si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ah.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Ch);e.setAttribute("lineDistance",new ut(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xs=class extends Wt{constructor(e=[],t=ui,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends Wt{constructor(e,t,n=_n,s,r,o,a=Dt,l=Dt,c,u=Tn,d=1){if(u!==Tn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},za=class extends ti{constructor(e,t=_n,n=ui,s,r,o=Dt,a=Dt,l,c=Tn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},qs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ni=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(d,2));function g(S,p,m,T,C,_,E,v,M,x,w){let R=_/M,P=E/x,O=_/2,V=E/2,D=v/2,z=M+1,j=x+1,J=0,re=0,F=new I;for(let H=0;H<j;H++){let Z=H*P-V;for(let de=0;de<z;de++){let ce=de*R-O;F[S]=ce*T,F[p]=Z*C,F[m]=D,c.push(F.x,F.y,F.z),F[S]=0,F[p]=0,F[m]=v>0?1:-1,u.push(F.x,F.y,F.z),d.push(de/M),d.push(1-H/x),J+=1}}for(let H=0;H<x;H++)for(let Z=0;Z<M;Z++){let de=h+Z+z*H,ce=h+Z+z*(H+1),fe=h+(Z+1)+z*(H+1),ze=h+(Z+1)+z*H;l.push(de,ce,ze),l.push(ce,fe,ze),re+=6}a.addGroup(f,re,w),f+=re,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zs=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,S=[],p=n/2,m=0;T(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2));function T(){let _=new I,E=new I,v=0,M=(t-e)/n;for(let x=0;x<=r;x++){let w=[],R=x/r,P=R*(t-e)+e;for(let O=0;O<=s;O++){let V=O/s,D=V*l+a,z=Math.sin(D),j=Math.cos(D);E.x=P*z,E.y=-R*n+p,E.z=P*j,d.push(E.x,E.y,E.z),_.set(z,M,j).normalize(),h.push(_.x,_.y,_.z),f.push(V,1-R),w.push(g++)}S.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=S[w][x],P=S[w+1][x],O=S[w+1][x+1],V=S[w][x+1];(e>0||w!==0)&&(u.push(R,P,V),v+=3),(t>0||w!==r-1)&&(u.push(P,O,V),v+=3)}c.addGroup(m,v,0),m+=v}function C(_){let E=g,v=new le,M=new I,x=0,w=_===!0?e:t,R=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let D=O/s*l+a,z=Math.cos(D),j=Math.sin(D);M.x=w*j,M.y=p*R,M.z=w*z,d.push(M.x,M.y,M.z),h.push(0,R,0),v.x=z*.5+.5,v.y=j*.5*R+.5,f.push(v.x,v.y),g++}for(let O=0;O<s;O++){let V=E+O,D=P+O;_===!0?u.push(D,D+1,V):u.push(D+1,D,V),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new gt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ii=class extends tn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Va=class extends ii{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Rh=new I,Ph=new I,Fl=new wc,Ol=new wc,Bl=new wc,Ha=class extends tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ph.subVectors(s[0],s[1]).add(s[0]),c=Ph);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Rh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);S<1e-4&&(S=1),g<1e-4&&(g=S),p<1e-4&&(p=S),Fl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,S,p),Ol.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,S,p),Bl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,S,p)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ol.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Bl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Fl.calc(l),Ol.calc(l),Bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ih(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function wf(i,e){let t=1-i;return t*t*e}function Tf(i,e){return 2*(1-i)*i*e}function Af(i,e){return i*i*e}function Is(i,e,t,n){return wf(i,e)+Tf(i,t)+Af(i,n)}function Cf(i,e){let t=1-i;return t*t*t*e}function Rf(i,e){let t=1-i;return 3*t*t*i*e}function Pf(i,e){return 3*(1-i)*i*i*e}function If(i,e){return i*i*i*e}function Ls(i,e,t,n,s){return Cf(i,e)+Rf(i,t)+Pf(i,n)+If(i,s)}var Js=class extends tn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(e,s.x,r.x,o.x,a.x),Ls(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends tn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(e,s.x,r.x,o.x,a.x),Ls(e,s.y,r.y,o.y,a.y),Ls(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ks=class extends tn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends tn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$s=class extends tn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(e,s.x,r.x,o.x),Is(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends tn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Is(e,s.x,r.x,o.x),Is(e,s.y,r.y,o.y),Is(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},js=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ih(a,l.x,c.x,u.x,d.x),Ih(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Xl=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ha,CubicBezierCurve:Js,CubicBezierCurve3:Ga,EllipseCurve:ii,LineCurve:Ks,LineCurve3:Wa,QuadraticBezierCurve:$s,QuadraticBezierCurve3:Xa,SplineCurve:js}),Ya=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xl[s.type]().fromJSON(s))}return this}},Qs=class extends Ya{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ks(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $s(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Js(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new js(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ii(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends Qs{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Qs().fromJSON(s))}return this}};function Lf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Cu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Of(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,d=l;for(let h=t;h<s;h+=t){let f=i[h],g=i[h+1];f<a&&(a=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return er(r,o,t,a,l,c,0),o}function Cu(i,e,t,n,s){let r;if(s===Zf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Lh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Lh(o/n|0,i[o],i[o+1],r);return r&&as(r,r.next)&&(nr(r),r=r.next),r}function Ei(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(as(t,t.next)||Mt(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function er(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Hf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Nf(i,n,s,r):Df(i)){e.push(l.i,i.i,c.i),nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Uf(Ei(i),e),er(i,e,t,n,s,r,2)):o===2&&Ff(i,e,t,n,s,r):er(Ei(i),e,t,n,s,r,1);break}}}function Df(i){let e=i.prev,t=i,n=i.next;if(Mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Cs(s,a,r,l,o,c,g.x,g.y)&&Mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Mt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(u,d,h),S=Math.max(a,l,c),p=Math.max(u,d,h),m=Yl(f,g,e,t,n),T=Yl(S,p,e,t,n),C=i.prevZ,_=i.nextZ;for(;C&&C.z>=m&&_&&_.z<=T;){if(C.x>=f&&C.x<=S&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&Cs(a,u,l,d,c,h,C.x,C.y)&&Mt(C.prev,C,C.next)>=0||(C=C.prevZ,_.x>=f&&_.x<=S&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Cs(a,u,l,d,c,h,_.x,_.y)&&Mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;C&&C.z>=m;){if(C.x>=f&&C.x<=S&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&Cs(a,u,l,d,c,h,C.x,C.y)&&Mt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;_&&_.z<=T;){if(_.x>=f&&_.x<=S&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Cs(a,u,l,d,c,h,_.x,_.y)&&Mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Uf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!as(n,s)&&Pu(n,t,t.next,s)&&tr(n,s)&&tr(s,n)&&(e.push(n.i,t.i,s.i),nr(t),nr(t.next),t=i=s),t=t.next}while(t!==i);return Ei(t)}function Ff(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xf(o,a)){let l=Iu(o,a);o=Ei(o,o.next),l=Ei(l,l.next),er(o,e,t,n,s,r,0),er(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Of(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Cu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Wf(c))}s.sort(Bf);for(let r=0;r<s.length;r++)t=kf(s[r],t);return t}function Bf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function kf(i,e){let t=zf(i,e);if(!t)return e;let n=Iu(t,i);return Ei(n,n.next),Ei(t,t.next)}function zf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(as(i,t))return t;do{if(as(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ru(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);tr(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Vf(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Vf(i,e){return Mt(i.prev,i,e.prev)<0&&Mt(e.next,i,i.next)<0}function Hf(i,e,t,n){let s=i;do s.z===0&&(s.z=Yl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gf(s)}function Gf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Yl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Wf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ru(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Cs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ru(i,e,t,n,s,r,o,a)}function Xf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Yf(i,e)&&(tr(i,e)&&tr(e,i)&&qf(i,e)&&(Mt(i.prev,i,e.prev)||Mt(i,e.prev,e))||as(i,e)&&Mt(i.prev,i,i.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function as(i,e){return i.x===e.x&&i.y===e.y}function Pu(i,e,t,n){let s=_a(Mt(i,e,t)),r=_a(Mt(i,e,n)),o=_a(Mt(t,n,i)),a=_a(Mt(t,n,e));return!!(s!==r&&o!==a||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||o===0&&ga(t,i,n)||a===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function Yf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function tr(i,e){return Mt(i.prev,i,i.next)<0?Mt(i,e,i.next)>=0&&Mt(i,i.prev,e)>=0:Mt(i,e,i.prev)<0||Mt(i,i.next,e)<0}function qf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Iu(i,e){let t=ql(i.i,i.x,i.y),n=ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lh(i,e,t,n){let s=ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Zl=class{static triangulate(e,t,n=2){return Lf(e,t,n)}},En=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Dh(e),Nh(n,e);let o=e.length;t.forEach(Dh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nh(n,t[l]);let a=Zl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Dh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ir=class i extends wt{constructor(e=new Mi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Jf,C,_=!1,E,v,M,x;if(m){C=m.getSpacedPoints(u),_=!0,h=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,ne),v=new I,M=new I,x=new I}h||(p=0,f=0,g=0,S=0);let w=a.extractPoints(c),R=w.shape,P=w.holes;if(!En.isClockWise(R)){R=R.reverse();for(let ne=0,oe=P.length;ne<oe;ne++){let he=P[ne];En.isClockWise(he)&&(P[ne]=he.reverse())}}function V(ne){let he=10000000000000001e-36,ue=ne[0];for(let ge=1;ge<=ne.length;ge++){let ke=ge%ne.length,Ne=ne[ke],He=Ne.x-ue.x,Ye=Ne.y-ue.y,L=He*He+Ye*Ye,rt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(ue.x),Math.abs(ue.y)),et=he*rt*rt;if(L<=et){ne.splice(ke,1),ge--;continue}ue=Ne}}V(R),P.forEach(V);let D=P.length,z=R;for(let ne=0;ne<D;ne++){let oe=P[ne];R=R.concat(oe)}function j(ne,oe,he){return oe||We("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(oe,he)}let J=R.length;function re(ne,oe,he){let ue,ge,ke,Ne=ne.x-oe.x,He=ne.y-oe.y,Ye=he.x-ne.x,L=he.y-ne.y,rt=Ne*Ne+He*He,et=Ne*L-He*Ye;if(Math.abs(et)>Number.EPSILON){let A=Math.sqrt(rt),y=Math.sqrt(Ye*Ye+L*L),k=oe.x-He/A,Y=oe.y+Ne/A,Q=he.x-L/y,pe=he.y+Ye/y,_e=((Q-k)*L-(pe-Y)*Ye)/(Ne*L-He*Ye);ue=k+Ne*_e-ne.x,ge=Y+He*_e-ne.y;let ee=ue*ue+ge*ge;if(ee<=2)return new le(ue,ge);ke=Math.sqrt(ee/2)}else{let A=!1;Ne>Number.EPSILON?Ye>Number.EPSILON&&(A=!0):Ne<-Number.EPSILON?Ye<-Number.EPSILON&&(A=!0):Math.sign(He)===Math.sign(L)&&(A=!0),A?(ue=-He,ge=Ne,ke=Math.sqrt(rt)):(ue=Ne,ge=He,ke=Math.sqrt(rt/2))}return new le(ue/ke,ge/ke)}let F=[];for(let ne=0,oe=z.length,he=oe-1,ue=ne+1;ne<oe;ne++,he++,ue++)he===oe&&(he=0),ue===oe&&(ue=0),F[ne]=re(z[ne],z[he],z[ue]);let H=[],Z,de=F.concat();for(let ne=0,oe=D;ne<oe;ne++){let he=P[ne];Z=[];for(let ue=0,ge=he.length,ke=ge-1,Ne=ue+1;ue<ge;ue++,ke++,Ne++)ke===ge&&(ke=0),Ne===ge&&(Ne=0),Z[ue]=re(he[ue],he[ke],he[Ne]);H.push(Z),de=de.concat(Z)}let ce;if(p===0)ce=En.triangulateShape(z,P);else{let ne=[],oe=[];for(let he=0;he<p;he++){let ue=he/p,ge=f*Math.cos(ue*Math.PI/2),ke=g*Math.sin(ue*Math.PI/2)+S;for(let Ne=0,He=z.length;Ne<He;Ne++){let Ye=j(z[Ne],F[Ne],ke);X(Ye.x,Ye.y,-ge),ue===0&&ne.push(Ye)}for(let Ne=0,He=D;Ne<He;Ne++){let Ye=P[Ne];Z=H[Ne];let L=[];for(let rt=0,et=Ye.length;rt<et;rt++){let A=j(Ye[rt],Z[rt],ke);X(A.x,A.y,-ge),ue===0&&L.push(A)}ue===0&&oe.push(L)}}ce=En.triangulateShape(ne,oe)}let fe=ce.length,ze=g+S;for(let ne=0;ne<J;ne++){let oe=h?j(R[ne],de[ne],ze):R[ne];_?(M.copy(E.normals[0]).multiplyScalar(oe.x),v.copy(E.binormals[0]).multiplyScalar(oe.y),x.copy(C[0]).add(M).add(v),X(x.x,x.y,x.z)):X(oe.x,oe.y,0)}for(let ne=1;ne<=u;ne++)for(let oe=0;oe<J;oe++){let he=h?j(R[oe],de[oe],ze):R[oe];_?(M.copy(E.normals[ne]).multiplyScalar(he.x),v.copy(E.binormals[ne]).multiplyScalar(he.y),x.copy(C[ne]).add(M).add(v),X(x.x,x.y,x.z)):X(he.x,he.y,d/u*ne)}for(let ne=p-1;ne>=0;ne--){let oe=ne/p,he=f*Math.cos(oe*Math.PI/2),ue=g*Math.sin(oe*Math.PI/2)+S;for(let ge=0,ke=z.length;ge<ke;ge++){let Ne=j(z[ge],F[ge],ue);X(Ne.x,Ne.y,d+he)}for(let ge=0,ke=P.length;ge<ke;ge++){let Ne=P[ge];Z=H[ge];for(let He=0,Ye=Ne.length;He<Ye;He++){let L=j(Ne[He],Z[He],ue);_?X(L.x,L.y+C[u-1].y,C[u-1].x+he):X(L.x,L.y,d+he)}}}Be(),K();function Be(){let ne=s.length/3;if(h){let oe=0,he=J*oe;for(let ue=0;ue<fe;ue++){let ge=ce[ue];me(ge[2]+he,ge[1]+he,ge[0]+he)}oe=u+p*2,he=J*oe;for(let ue=0;ue<fe;ue++){let ge=ce[ue];me(ge[0]+he,ge[1]+he,ge[2]+he)}}else{for(let oe=0;oe<fe;oe++){let he=ce[oe];me(he[2],he[1],he[0])}for(let oe=0;oe<fe;oe++){let he=ce[oe];me(he[0]+J*u,he[1]+J*u,he[2]+J*u)}}n.addGroup(ne,s.length/3-ne,0)}function K(){let ne=s.length/3,oe=0;B(z,oe),oe+=z.length;for(let he=0,ue=P.length;he<ue;he++){let ge=P[he];B(ge,oe),oe+=ge.length}n.addGroup(ne,s.length/3-ne,1)}function B(ne,oe){let he=ne.length;for(;--he>=0;){let ue=he,ge=he-1;ge<0&&(ge=ne.length-1);for(let ke=0,Ne=u+p*2;ke<Ne;ke++){let He=J*ke,Ye=J*(ke+1),L=oe+ue+He,rt=oe+ge+He,et=oe+ge+Ye,A=oe+ue+Ye;se(L,rt,et,A)}}}function X(ne,oe,he){l.push(ne),l.push(oe),l.push(he)}function me(ne,oe,he){xe(ne),xe(oe),xe(he);let ue=s.length/3,ge=T.generateTopUV(n,s,ue-3,ue-2,ue-1);Ke(ge[0]),Ke(ge[1]),Ke(ge[2])}function se(ne,oe,he,ue){xe(ne),xe(oe),xe(ue),xe(oe),xe(he),xe(ue);let ge=s.length/3,ke=T.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Ke(ke[0]),Ke(ke[1]),Ke(ke[3]),Ke(ke[1]),Ke(ke[2]),Ke(ke[3])}function xe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Ke(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xl[s.type]().fromJSON(s)),new i(n,e.options)}},Jf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],S=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-d),new le(h,1-g),new le(S,1-m)]:[new le(a,1-l),new le(u,1-d),new le(f,1-g),new le(p,1-m)]}};function Kf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],S=[],p=[];for(let m=0;m<u;m++){let T=m*h-o;for(let C=0;C<c;C++){let _=C*d-r;g.push(_,-T,0),S.push(0,0,1),p.push(C/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let C=T+c*m,_=T+c*(m+1),E=T+1+c*(m+1),v=T+1+c*m;f.push(C,_,v),f.push(_,E,v)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var sr=class i extends wt{constructor(e=new Mi([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,g=h.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let T=g[p];En.isClockWise(T)===!0&&(g[p]=T.reverse())}let S=En.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let T=g[p];f=f.concat(T)}for(let p=0,m=f.length;p<m;p++){let T=f[p];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let p=0,m=S.length;p<m;p++){let T=S[p],C=T[0]+d,_=T[1]+d,E=T[2]+d;n.push(C,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return $f(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function $f(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var rr=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new I,h=new I,f=[],g=[],S=[],p=[];for(let m=0;m<=n;m++){let T=[],C=m/n,_=o+C*a,E=e*Math.cos(_),v=Math.sqrt(e*e-E*E),M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let x=0;x<=t;x++){let w=x/t,R=s+w*r;d.x=-v*Math.cos(R),d.y=E,d.z=v*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),p.push(w+M,1-C),T.push(c++)}u.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){let C=u[m][T+1],_=u[m][T],E=u[m+1][T],v=u[m+1][T+1];(m!==0||o>0)&&f.push(C,_,v),(m!==n-1||l<Math.PI)&&f.push(_,E,v)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(S,3)),this.setAttribute("uv",new ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ci(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Uh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Uh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=Ci(i[t]);for(let s in n)e[s]=n[s]}return e}function Uh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Lu={clone:Ci,merge:zt},Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Za=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ka=class extends ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gl:r=e,a=2*t-n;break;case Wl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gl:o=e,l=2*n-t;break;case Wl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),S=g*g,p=S*g,m=-h*p+2*h*S-h*g,T=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*g+1,C=(-1-f)*p+(1.5+f)*S+.5*g,_=f*p-f*S;for(let E=0;E!==a;++E)r[E]=m*o[u+E]+T*o[c+E]+C*o[l+E]+_*o[d+E];return r}},$a=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},ja=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends ri{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),S=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*S+o[l+p]*g;return r}let h=a*2,f=e-1;for(let g=0;g!==a;++g){let S=o[c+g],p=o[l+g],m=f*h+g*2,T=d[m],C=d[m+1],_=e*h+g*2,E=u[_],v=u[_+1],M=np(n,t,T,E,s);r[g]=Du(M,S,C,v,p)}return r}};function Du(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function tp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function np(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Du(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=tp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var sn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),kl(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break;case Vl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;kl(this.settings)&&(Fh(this.settings.inTangents,e),Fh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Gd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,kl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ia;var ai=class extends sn{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ds;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="color";var to=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="number";var no=class extends ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},ar=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends sn{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ds;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends sn{constructor(e,t,n,s){super(e,t,n,s)}};io.prototype.ValueTypeName="vector";var so=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new so,ro=class{constructor(e){this.manager=e!==void 0?e:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},or=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zl=new gt,Oh=new I,Bh=new I,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ji||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xa=new I,ya=new en,Sn=new I,lr=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xa,ya,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(xa,ya,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},jn=new I,kh=new le,zh=new le,kt=class extends lr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,kh,zh),t.subVectors(zh,kh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ls=class extends lr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jl=class extends ao{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},hr=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zi=-90,Ji=1,oo=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Zi,Ji,e,t);s.layers=this.layers,this.add(s);let r=new kt(Zi,Ji,e,t);r.layers=this.layers,this.add(r);let o=new kt(Zi,Ji,e,t);o.layers=this.layers,this.add(o);let a=new kt(Zi,Ji,e,t);a.layers=this.layers,this.add(a);let l=new kt(Zi,Ji,e,t);l.layers=this.layers,this.add(l);let c=new kt(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},lo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ac="\\[\\]\\.:\\/",ip=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",sp="[^"+Ac.replace("\\.","")+"]",rp=/((?:WC+[\/:])*)/.source.replace("WC",Cc),ap=/(WCOD+)?/.source.replace("WCOD",sp),op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),cp=new RegExp("^"+rp+ap+op+lp+"$"),hp=["material","materials","bones","map"],Kl=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ip,"")}static parseTrackName(e){let t=cp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Kl;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ry=new Float32Array(1);var Vh=new gt,ur=class{constructor(e,t,n=0,s=1/0){this.ray=new Qn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,n=[]){return $l(e,this,n,t),n.sort(Hh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$l(e[s],this,n,t);return n.sort(Hh),n}};function Hh(i,e){return i.distance-e.distance}function $l(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$l(r[o],e,t,!0)}}var cs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var dr=class extends ka{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ze(n),s=new Ze(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let S=h===r?n:s;S.toArray(c,f),f+=3,S.toArray(c,f),f+=3,S.toArray(c,f),f+=3,S.toArray(c,f),f+=3}let u=new wt;u.setAttribute("position",new ut(l,3)),u.setAttribute("color",new ut(c,3));let d=new ei({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var fr=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Rc(i,e,t,n){let s=up(n);switch(t){case xc:return i*e;case vc:return i*e/s.components*s.byteLength;case go:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case yc:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case xo:return i*e*4/s.components*s.byteLength;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case So:return Math.max(i,16)*Math.max(e,8)/4;case yo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case Eo:case To:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case br:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sr:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(i){switch(i){case qt:case pc:return{byteLength:1,components:1};case ds:case mc:case yn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case _n:case fo:case xn:return{byteLength:4,components:1};case gc:case _c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fp(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],S=d[f];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let S=d[f];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Cp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,fm=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,Mg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,zg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Hg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,Yg=`uniform float rotation;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:xp,alphatest_pars_fragment:yp,aomap_fragment:vp,aomap_pars_fragment:bp,batching_pars_vertex:Sp,batching_vertex:Mp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:kp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Gp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:Yp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:vm,map_fragment:bm,map_pars_fragment:Sm,map_particle_fragment:Mm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Vm,opaque_fragment:Hm,packing:Gm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:Ym,dithering_pars_fragment:qm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:$m,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:_g,cube_vert:xg,cube_frag:yg,depth_vert:vg,depth_frag:bg,distance_vert:Sg,distance_frag:Mg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Cg,meshbasic_frag:Rg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Bg,meshphysical_frag:kg,meshtoon_vert:zg,meshtoon_frag:Vg,points_vert:Hg,points_frag:Gg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:Yg,sprite_frag:qg},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},In={basic:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:zt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:zt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:zt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:zt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:zt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:zt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:zt([Ee.common,Ee.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:zt([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};In.physical={uniforms:zt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var jo={r:0,b:0,g:0},Zg=new gt,id=new qe;id.set(-1,0,0,0,1,0,0,0,1);function Jg(i,e,t,n,s,r){let o=new Ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let _=T.backgroundBlurriness>0;C=e.get(C,_)}return C}function g(T){let C=!1,_=f(T);_===null?p(o,a):_&&_.isColor&&(p(_,1),C=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,C){let _=f(C);_&&(_.isCubeTexture||_.mapping===mr)?(c===void 0&&(c=new Ct(new ni(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Ci(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(C.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ct(new wi(2,2),new nn({name:"BackgroundMaterial",uniforms:Ci(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,C){T.getRGB(jo,Tc(i)),t.buffers.color.setClear(jo.r,jo.g,jo.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),a=C,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:g,addToRenderList:S,dispose:m}}function Kg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(P,O,V,D,z){let j=!1,J=d(P,D,V,O);r!==J&&(r=J,c(r.object)),j=f(P,D,V,z),j&&g(P,D,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(P,O,V,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,O,V,D){let z=D.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let J=P.isInstancedMesh===!0?P.id:0,re=j[J];re===void 0&&(re={},j[J]=re);let F=re[V.id];F===void 0&&(F={},re[V.id]=F);let H=F[z];return H===void 0&&(H=h(l()),F[z]=H),H}function h(P){let O=[],V=[],D=[];for(let z=0;z<t;z++)O[z]=0,V[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,O,V,D){let z=r.attributes,j=O.attributes,J=0,re=V.getAttributes();for(let F in re)if(re[F].location>=0){let Z=z[F],de=j[F];if(de===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),Z===void 0||Z.attribute!==de||de&&Z.data!==de.data)return!0;J++}return r.attributesNum!==J||r.index!==D}function g(P,O,V,D){let z={},j=O.attributes,J=0,re=V.getAttributes();for(let F in re)if(re[F].location>=0){let Z=j[F];Z===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let de={};de.attribute=Z,Z&&Z.data&&(de.data=Z.data),z[F]=de,J++}r.attributes=z,r.attributesNum=J,r.index=D}function S(){let P=r.newAttributes;for(let O=0,V=P.length;O<V;O++)P[O]=0}function p(P){m(P,0)}function m(P,O){let V=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;V[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),z[P]!==O&&(i.vertexAttribDivisor(P,O),z[P]=O)}function T(){let P=r.newAttributes,O=r.enabledAttributes;for(let V=0,D=O.length;V<D;V++)O[V]!==P[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function C(P,O,V,D,z,j,J){J===!0?i.vertexAttribIPointer(P,O,V,z,j):i.vertexAttribPointer(P,O,V,D,z,j)}function _(P,O,V,D){S();let z=D.attributes,j=V.getAttributes(),J=O.defaultAttributeValues;for(let re in j){let F=j[re];if(F.location>=0){let H=z[re];if(H===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){let Z=H.normalized,de=H.itemSize,ce=e.get(H);if(ce===void 0)continue;let fe=ce.buffer,ze=ce.type,Be=ce.bytesPerElement,K=ze===i.INT||ze===i.UNSIGNED_INT||H.gpuType===fo;if(H.isInterleavedBufferAttribute){let B=H.data,X=B.stride,me=H.offset;if(B.isInstancedInterleavedBuffer){for(let se=0;se<F.locationSize;se++)m(F.location+se,B.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let se=0;se<F.locationSize;se++)p(F.location+se);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let se=0;se<F.locationSize;se++)C(F.location+se,de/F.locationSize,ze,Z,X*Be,(me+de/F.locationSize*se)*Be,K)}else{if(H.isInstancedBufferAttribute){for(let B=0;B<F.locationSize;B++)m(F.location+B,H.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let B=0;B<F.locationSize;B++)p(F.location+B);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let B=0;B<F.locationSize;B++)C(F.location+B,de/F.locationSize,ze,Z,de*Be,de/F.locationSize*B*Be,K)}}else if(J!==void 0){let Z=J[re];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(F.location,Z);break;case 3:i.vertexAttrib3fv(F.location,Z);break;case 4:i.vertexAttrib4fv(F.location,Z);break;default:i.vertexAttrib1fv(F.location,Z)}}}}T()}function E(){w();for(let P in n){let O=n[P];for(let V in O){let D=O[V];for(let z in D){let j=D[z];for(let J in j)u(j[J].object),delete j[J];delete D[z]}}delete n[P]}}function v(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let V in O){let D=O[V];for(let z in D){let j=D[z];for(let J in j)u(j[J].object),delete j[J];delete D[z]}}delete n[P.id]}function M(P){for(let O in n){let V=n[O];for(let D in V){let z=V[D];if(z[P.id]===void 0)continue;let j=z[P.id];for(let J in j)u(j[J].object),delete j[J];delete z[P.id]}}}function x(P){for(let O in n){let V=n[O],D=P.isInstancedMesh===!0?P.id:0,z=V[D];if(z!==void 0){for(let j in z){let J=z[j];for(let re in J)u(J[re].object),delete J[re];delete z[j]}delete V[D],Object.keys(V).length===0&&delete n[O]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:p,disableUnusedAttributes:T}}function $g(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==ln&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let x=M===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==qt&&M!==xn&&!x&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:_,maxSamples:E,samples:v}}function Qg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new jt,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{let T=r?0:n,C=T*4,_=m.clippingState||null;l.value=_,_=u(g,h,C,f);for(let E=0;E!==C;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=l.value,g!==!0||p===null){let m=f+S*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,_=f;C!==S;++C,_+=4)o.copy(d[C]).applyMatrix4(T,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var ms=4,e0=6,t0=20,n0=256,Mr=new ls,Uu=new Ze,Pc=null,Ic=0,Lc=0,Dc=!1,i0=new I,Ri=new I,el=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=i0}=r;Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pc,Ic,Lc),this._renderer.xr.enabled=Dc,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:yn,format:ln,colorSpace:Ns,depthBuffer:!1},s=Fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=s0(r)),this._blurMaterial=a0(r,e,t),this._ggxMaterial=r0(r,e,t)}return s}_compileMaterial(e){let t=new Ct(new wt,e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,s,r){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Uu),d.toneMapping=gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new ni,new Gn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,m=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,m=!0):(p.color.copy(Uu),m=!0);for(let C=0;C<6;C++){let _=C%3;_===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):_===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let E=this._cubeSize;ps(s,_*E,C>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(S,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ui||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ou());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,S=this._sizeLods[n],p=3*S*(n>g-ms?n-g+ms:0),m=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ps(r,p,m,3*S,2*S),s.setRenderTarget(r),s.render(a,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ps(e,p,m,3*S,2*S),s.setRenderTarget(e),s.render(a,Mr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-ms?s-this._lodMax+ms:0),h=4*(this._cubeSize-u);ps(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,Mr)}};function s0(i){let e=[],t=[],n=i,s=i-ms+1+e0;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),S=new Float32Array(f*h*d);for(let m=0;m<d;m++){let T=m%3*2/3-1,C=m>2?0:-1,_=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(_,f*h*m);for(let E=0;E<h;E++){let v=u[E*2]*2-1,M=u[E*2+1]*2-1;m===0?Ri.set(1,M,v):m===1?Ri.set(-v,1,-M):m===2?Ri.set(-v,M,1):m===3?Ri.set(-1,M,-v):m===4?Ri.set(-v,-1,M):Ri.set(v,M,-1),Ri.toArray(S,(m*h+E)*f)}}let p=new wt;p.setAttribute("position",new Qt(g,f)),p.setAttribute("outputDirection",new Qt(S,f)),t.push(new Ct(p,null)),n>ms&&n--}return{lodMeshes:t,sizeLods:e}}function Fu(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r0(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function a0(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:t0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ou(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Bu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var tl=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Rn});r.uniforms.tEquirect.value=t;let o=new Ct(s,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Ut),new oo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function o0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===co||f===ho)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new tl(g.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===co||f===ho,S=f===ui||f===Ai;if(g||S){let p=t.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new el(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{let T=h.image;return g&&T&&T.height>0||S&&T&&l(T)?(n===null&&(n=new el(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===co?h.mapping=ui:f===ho&&(h.mapping=Ai),h}function l(h){let f=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function l0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function c0(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(f!==null){let T=f.array;S=f.version;for(let C=0,_=T.length;C<_;C+=3){let E=T[C+0],v=T[C+1],M=T[C+2];h.push(E,v,v,M,M,E)}}else{let T=g.array;S=g.version;for(let C=0,_=T.length/3-1;C<_;C+=3){let E=C+0,v=C+1,M=C+2;h.push(E,v,v,M,M,E)}}let p=new(g.count>=65535?Hs:Vs)(h,1);p.version=S;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function h0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let S=0;for(let p=0;p<f;p++)S+=h[p];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function u0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function d0(i,e,t){let n=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let w=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),S===!0&&(C=3);let _=a.attributes.position.count*C,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let v=new Float32Array(_*E*4*d),M=new Bs(v,_,E,d);M.type=xn,M.needsUpdate=!0;let x=C*4;for(let R=0;R<d;R++){let P=p[R],O=m[R],V=T[R],D=_*E*4*R;for(let z=0;z<P.count;z++){let j=z*x;f===!0&&(s.fromBufferAttribute(P,z),v[D+j+0]=s.x,v[D+j+1]=s.y,v[D+j+2]=s.z,v[D+j+3]=0),g===!0&&(s.fromBufferAttribute(O,z),v[D+j+4]=s.x,v[D+j+5]=s.y,v[D+j+6]=s.z,v[D+j+7]=0),S===!0&&(s.fromBufferAttribute(V,z),v[D+j+8]=s.x,v[D+j+9]=s.y,v[D+j+10]=s.z,v[D+j+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:M,size:new le(_,E)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function f0(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var p0={[ac]:"LINEAR_TONE_MAPPING",[oc]:"REINHARD_TONE_MAPPING",[lc]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function m0(i,e,t,n,s,r){let o=new Yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new wt;c.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(c,u),h=new ls(-1,1,1,-1,0,1),f=null,g=null,S=!1,p,m=null,T=[],C=!1;this.setSize=function(_,E){o.setSize(_,E),a!==null&&a.setSize(_,E),l!==null&&l.setSize(_,E);for(let v=0;v<T.length;v++){let M=T[v];M.setSize&&M.setSize(_,E)}},this.setEffects=function(_){T=_,C=T.length>0&&T[0].isRenderPass===!0;let E=o.width,v=o.height;T.length>0&&a===null&&(a=new Yt(E,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(E,v,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<T.length;M++){let x=T[M];x.setSize&&x.setSize(E,v)}},this.begin=function(_,E){if(S||_.toneMapping===gn&&T.length===0)return!1;if(m=E,E!==null){let v=E.width,M=E.height;(o.width!==v||o.height!==M)&&this.setSize(v,M)}return C===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=gn,!0},this.hasRenderPass=function(){return C},this.end=function(_,E){_.toneMapping=p,S=!0;let v=o,M=a;for(let x=0;x<T.length;x++){let w=T[x];w.enabled!==!1&&(w.render(_,M,v,E),w.needsSwap!==!1&&(v=M,M=M===a?l:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},nt.getTransfer(f)===ht&&(u.defines.SRGB_TRANSFER="");let x=p0[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,_.setRenderTarget(m),_.render(d,h),m=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var sd=new Wt,Fc=new ti(1,1),rd=new Bs,ad=new Na,od=new Xs,ku=[],zu=[],Vu=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function _s(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function g0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function v0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Pt(t,n)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),Pt(t,n)}}function S0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Vu.set(n),i.uniformMatrix4fv(this.addr,!1,Vu),Pt(t,n)}}function M0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function A0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function I0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=t.isReversedDepthBuffer()?$o:Ko,r=Fc):r=sd,t.setTexture2D(e||r,s)}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ad,s)}function D0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rd,s)}function U0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return x0;case 35666:return y0;case 35674:return v0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return M0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(i,e){i.uniform1fv(this.addr,e)}function O0(i,e){let t=_s(e,this.size,2);i.uniform2fv(this.addr,t)}function B0(i,e){let t=_s(e,this.size,3);i.uniform3fv(this.addr,t)}function k0(i,e){let t=_s(e,this.size,4);i.uniform4fv(this.addr,t)}function z0(i,e){let t=_s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V0(i,e){let t=_s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function H0(i,e){let t=_s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function G0(i,e){i.uniform1iv(this.addr,e)}function W0(i,e){i.uniform2iv(this.addr,e)}function X0(i,e){i.uniform3iv(this.addr,e)}function Y0(i,e){i.uniform4iv(this.addr,e)}function q0(i,e){i.uniform1uiv(this.addr,e)}function Z0(i,e){i.uniform2uiv(this.addr,e)}function J0(i,e){i.uniform3uiv(this.addr,e)}function K0(i,e){i.uniform4uiv(this.addr,e)}function $0(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Fc:o=sd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function j0(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ad,r[o])}function Q0(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||od,r[o])}function e_(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rd,r[o])}function t_(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return k0;case 35674:return z0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return Z0;case 36295:return J0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return e_}}var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U0(t.type)}},Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t_(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Wu(i,e){i.seq.push(e),i.map[e.id]=e}function n_(i,e,t){let n=i.name,s=n.length;for(Nc.lastIndex=0;;){let r=Nc.exec(n),o=Nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wu(t,c===void 0?new Oc(a,i,e):new Bc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new kc(a),Wu(t,d)),t=d}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);n_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Xu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var i_=37297,s_=0;function r_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Yu=new qe;function a_(i){nt._getMatrix(Yu,nt.workingColorSpace,i);let e=`mat3( ${Yu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Us:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(e),a)}else return r}function o_(i,e){let t=a_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var l_={[ac]:"Linear",[oc]:"Reinhard",[lc]:"Cineon",[cc]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function c_(i,e){let t=l_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qo=new I;function h_(){nt.getLuminanceCoefficients(Qo);let i=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function d_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wr(i){return i!==""}function Zu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,e){let t=Qe[e];if(t===void 0){let n=m_.get(e);if(n!==void 0)t=Qe[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zc(t)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(__,x_)}function x_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var y_={[pr]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function v_(i){return y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b_={[ui]:"ENVMAP_TYPE_CUBE",[Ai]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":b_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var M_={[Ai]:"ENVMAP_MODE_REFRACTION"};function E_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":M_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var w_={[rc]:"ENVMAP_BLENDING_MULTIPLY",[hu]:"ENVMAP_BLENDING_MIX",[uu]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function C_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=v_(t),c=S_(t),u=E_(t),d=T_(t),h=A_(t),f=u_(t),g=d_(r),S=s.createProgram(),p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`)):(p=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==gn?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,o_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=zc(o),o=Zu(o,t),o=Ju(o,t),a=zc(a),a=Zu(a,t),a=Ju(a,t),o=Ku(o),a=Ku(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=T+p+o,_=T+m+a,E=Xu(s,s.VERTEX_SHADER,C),v=Xu(s,s.FRAGMENT_SHADER,_);s.attachShader(S,E),s.attachShader(S,v),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function M(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(v)||"",z=O.trim(),j=V.trim(),J=D.trim(),re=!0,F=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,E,v);else{let H=qu(s,E,"vertex"),Z=qu(s,v,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+H+`
`+Z)}else z!==""?Ve("WebGLProgram: Program Info Log:",z):(j===""||J==="")&&(F=!1);F&&(P.diagnostics={runnable:re,programLog:z,vertexShader:{log:j,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(E),s.deleteShader(v),x=new gs(s,S),w=f_(s,S)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let w;this.getAttributes=function(){return w===void 0&&M(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,i_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=v,this}var R_=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}};function P_(i){return i===pi||i===br||i===Sr}function I_(i,e,t,n,s,r){let o=new ns,a=new Vc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,w,R,P,O,V){let D=P.fog,z=O.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,re=e.get(x.envMap||j,J),F=re&&re.mapping===mr?re.image.height:null,H=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=Z!==void 0?Z.length:0,ce=0;z.morphAttributes.position!==void 0&&(ce=1),z.morphAttributes.normal!==void 0&&(ce=2),z.morphAttributes.color!==void 0&&(ce=3);let fe,ze,Be,K;if(H){let _t=In[H];fe=_t.vertexShader,ze=_t.fragmentShader}else{fe=x.vertexShader,ze=x.fragmentShader;let _t=a.getVertexShaderStage(x),lt=a.getFragmentShaderStage(x);a.update(x,_t,lt),Be=_t.id,K=lt.id}let B=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),me=O.isInstancedMesh===!0,se=O.isBatchedMesh===!0,xe=!!x.map,Ke=!!x.matcap,ne=!!re,oe=!!x.aoMap,he=!!x.lightMap,ue=!!x.bumpMap&&x.wireframe===!1,ge=!!x.normalMap,ke=!!x.displacementMap,Ne=!!x.emissiveMap,He=!!x.metalnessMap,Ye=!!x.roughnessMap,L=x.anisotropy>0,rt=x.clearcoat>0,et=x.dispersion>0,A=x.retroreflectivity>0,y=x.iridescence>0,k=x.sheen>0,Y=x.transmission>0,Q=L&&!!x.anisotropyMap,pe=rt&&!!x.clearcoatMap,_e=rt&&!!x.clearcoatNormalMap,ee=rt&&!!x.clearcoatRoughnessMap,ie=y&&!!x.iridescenceMap,ye=y&&!!x.iridescenceThicknessMap,Ue=k&&!!x.sheenColorMap,Me=k&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Fe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,Je=Y&&!!x.transmissionMap,U=Y&&!!x.thicknessMap,be=!!x.gradientMap,te=!!x.alphaMap,Se=x.alphaTest>0,Ae=!!x.alphaHash,ae=!!x.extensions,Oe=gn;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Le={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:ze,defines:x.defines,customVertexShaderID:Be,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:se,batchingColor:se&&O._colorsTexture!==null,instancing:me,instancingColor:me&&O.instanceColor!==null,instancingMorph:me&&O.morphTexture!==null,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Ke,envMap:ne,envMapMode:ne&&re.mapping,envMapCubeUVHeight:F,aoMap:oe,lightMap:he,bumpMap:ue,normalMap:ge,displacementMap:ke,emissiveMap:Ne,normalMapObjectSpace:ge&&x.normalMapType===pu,normalMapTangentSpace:ge&&x.normalMapType===Jo,packedNormalMap:ge&&x.normalMapType===Jo&&P_(x.normalMap.format),metalnessMap:He,roughnessMap:Ye,anisotropy:L,anisotropyMap:Q,clearcoat:rt,clearcoatMap:pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:ee,dispersion:et,retroreflection:A,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:ye,sheen:k,sheenColorMap:Ue,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Fe,specularIntensityMap:Ge,transmission:Y,transmissionMap:Je,thicknessMap:U,gradientMap:be,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:Se,alphaHash:Ae,combine:x.combine,mapUv:xe&&g(x.map.channel),aoMapUv:oe&&g(x.aoMap.channel),lightMapUv:he&&g(x.lightMap.channel),bumpMapUv:ue&&g(x.bumpMap.channel),normalMapUv:ge&&g(x.normalMap.channel),displacementMapUv:ke&&g(x.displacementMap.channel),emissiveMapUv:Ne&&g(x.emissiveMap.channel),metalnessMapUv:He&&g(x.metalnessMap.channel),roughnessMapUv:Ye&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:pe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(x.sheenRoughnessMap.channel),specularMapUv:ve&&g(x.specularMap.channel),specularColorMapUv:Fe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ge&&g(x.specularIntensityMap.channel),transmissionMapUv:Je&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ge||L),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(xe||te),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:X,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(w,x),T(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function C(x){let w=f[x.type],R;if(w){let P=In[w];R=Lu.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new C_(i,w,x,s),c.push(R),u.set(w,R)),R}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function M(){a.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:C,acquireProgram:_,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:M}}function L_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function D_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ju(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,S,p,m){let T=i[e];return T===void 0?(T={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:m},i[e]=T):(T.id=h.id,T.object=h,T.geometry=f,T.material=g,T.materialVariant=o(h),T.groupOrder=S,T.renderOrder=h.renderOrder,T.z=p,T.group=m),e++,T}function l(h,f,g,S,p,m,T){T.reversedDepth===!0&&(p=-p);let C=a(h,f,g,S,p,m);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):t.push(C)}function c(h,f,g,S,p,m){let T=a(h,f,g,S,p,m);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):t.unshift(T)}function u(h,f){t.length>1&&t.sort(h||D_),n.length>1&&n.sort(f||ju),s.length>1&&s.sort(f||ju)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function N_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Qu,i.set(n,[o])):s>=r.length?(o=new Qu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function U_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function F_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var O_=0;function B_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function k_(i){let e=new U_,t=F_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new gt,o=new gt;function a(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,S=0,p=0,m=0,T=0,C=0,_=0,E=0,v=0,M=0,x=0,w=0,R=0;c.sort(B_);for(let O=0,V=c.length;O<V;O++){let D=c[O],z=D.color,j=D.intensity,J=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pi?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*j,d+=z.g*j,h+=z.b*j;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],j);R++}else if(D.isSunLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,Z=t.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=re;let de=H.getViewportCount();for(let ce=0;ce<de;ce++)n.sunShadowMatrix[S+ce]=H.getMatrix(ce),n.sunShadowCascade[S+ce]=H._cascadeData[ce];S+=de,g++}n.sun[f]=F,f++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let H=D.shadow,Z=t.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=F,p++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(z).multiplyScalar(j),F.distance=J,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[T]=F;let H=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,H.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[T]=H.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[T]=Z,n.spotShadowMap[T]=re,M++}T++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(z).multiplyScalar(j),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[C]=F,C++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let H=D.shadow,Z=t.get(D);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=D.shadow.matrix,v++}n.point[m]=F,m++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(j),F.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[_]=F,_++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==T||P.rectAreaLength!==C||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=T,n.rectArea.length=C,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=T,P.rectAreaLength=C,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=x,P.numLightProbes=R,n.version=O_++)}function l(c,u){let d=0,h=0,f=0,g=0,S=0,p=0,m=u.matrixWorldInverse;for(let T=0,C=c.length;T<C;T++){let _=c[T];if(_.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(_.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function ed(i){let e=new k_(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function z_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ed(i),e.set(s,[a])):r>=o.length?(a=new ed(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`,G_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],W_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],td=new gt,Er=new I,Uc=new I;function X_(i,e,t){let n=new rs,s=new le,r=new le,o=new St,a=new Za,l=new Ja,c={},u=t.maxTextureSize,d={[hi]:Xt,[Xt]:hi,[rn]:rn},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:V_,fragmentShader:H_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ct(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let m=this.type;this.render=function(v,M,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===Xh&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Rn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=m!==this.type;V&&M.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=v.length;D<z;D++){let j=v[D],J=j.shadow;if(J===void 0){Ve("WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let re=J.getFrameExtents();s.multiply(re),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,J.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=F,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===hs){if(j.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Yt(s.x,s.y,{format:pi,type:yn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),J.map.texture.name=j.name+".shadowMap",J.map.depthTexture=new ti(s.x,s.y,xn),J.map.depthTexture.name=j.name+".shadowMapDepth",J.map.depthTexture.format=Tn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dt,J.map.depthTexture.magFilter=Dt}else j.isPointLight?(J.map=new tl(s.x),J.map.depthTexture=new za(s.x,_n)):(J.map=new Yt(s.x,s.y),J.map.depthTexture=new ti(s.x,s.y,_n)),J.map.depthTexture.name=j.name+".shadowMap",J.map.depthTexture.format=Tn,this.type===pr?(J.map.depthTexture.compareFunction=F?$o:Ko,J.map.depthTexture.minFilter=Ut,J.map.depthTexture.magFilter=Ut):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Dt,J.map.depthTexture.magFilter=Dt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let H=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();j.isPointLight!==!0&&J.updateMatrices(j,x);for(let Z=0;Z<H;Z++){let de=J.getCamera(Z);if(j.isPointLight){let ce=J.camera,fe=J.matrix,ze=j.distance||ce.far;ze!==ce.far&&(ce.far=ze,ce.updateProjectionMatrix()),Er.setFromMatrixPosition(j.matrixWorld),ce.position.copy(Er),Uc.copy(ce.position),Uc.add(G_[Z]),ce.up.copy(W_[Z]),ce.lookAt(Uc),ce.updateMatrixWorld(),fe.makeTranslation(-Er.x,-Er.y,-Er.z),td.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),J._frustum.setFromProjectionMatrix(td,ce.coordinateSystem,ce.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(J.map),i.clear());let ce=J.getViewport(Z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),O.viewport(o)}n=J.getFrustum(Z),_(M,x,de,j,this.type)}J.isPointLightShadow!==!0&&this.type===hs&&T(J,x),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,R,P)};function T(v,M){let x=e.update(S);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new Yt(s.x,s.y,{format:pi,type:yn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(M,null,x,h,S,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(M,null,x,f,S,null)}function C(v,M,x,w){let R=null,P=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let O=R.uuid,V=M.uuid,D=c[O];D===void 0&&(D={},c[O]=D);let z=D[V];z===void 0&&(z=R.clone(),D[V]=z,M.addEventListener("dispose",E)),R=z}if(R.visible=M.visible,R.wireframe=M.wireframe,w===hs?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=x}return R}function _(v,M,x,w,R){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===hs)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);let V=e.update(v),D=v.material;if(Array.isArray(D)){let z=V.groups;for(let j=0,J=z.length;j<J;j++){let re=z[j],F=D[re.materialIndex];if(F&&F.visible){let H=C(v,F,w,R);v.onBeforeShadow(i,v,M,x,V,H,re),i.renderBufferDirect(x,null,V,H,v,re),v.onAfterShadow(i,v,M,x,V,H,re)}}}else if(D.visible){let z=C(v,D,w,R);v.onBeforeShadow(i,v,M,x,V,z,null),i.renderBufferDirect(x,null,V,z,v,null),v.onAfterShadow(i,v,M,x,V,z,null)}}let O=v.children;for(let V=0,D=O.length;V<D;V++)_(O[V],M,x,w,R)}function E(v){v.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],R=v.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Y_(i,e){function t(){let U=!1,be=new St,te=null,Se=new St(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!U&&(i.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,ae,Oe,Le,_t){_t===!0&&(Ae*=Le,ae*=Le,Oe*=Le),be.set(Ae,ae,Oe,Le),Se.equals(be)===!1&&(i.clearColor(Ae,ae,Oe,Le),Se.copy(be))},reset:function(){U=!1,te=null,Se.set(-1,0,0,0)}}}function n(){let U=!1,be=!1,te=null,Se=null,Ae=null;return{setReversed:function(ae){if(be!==ae){let Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),be=ae;let Le=Ae;Ae=null,this.setClear(Le)}},getReversed:function(){return be},setTest:function(ae){ae?B(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(ae){te!==ae&&!U&&(i.depthMask(ae),te=ae)},setFunc:function(ae){if(be&&(ae=wu[ae]),Se!==ae){switch(ae){case Sa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ae}},setLocked:function(ae){U=ae},setClear:function(ae){Ae!==ae&&(Ae=ae,be&&(ae=1-ae),i.clearDepth(ae))},reset:function(){U=!1,te=null,Se=null,Ae=null,be=!1}}}function s(){let U=!1,be=null,te=null,Se=null,Ae=null,ae=null,Oe=null,Le=null,_t=null;return{setTest:function(lt){U||(lt?B(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(lt){be!==lt&&!U&&(i.stencilMask(lt),be=lt)},setFunc:function(lt,cn,vn){(te!==lt||Se!==cn||Ae!==vn)&&(i.stencilFunc(lt,cn,vn),te=lt,Se=cn,Ae=vn)},setOp:function(lt,cn,vn){(ae!==lt||Oe!==cn||Le!==vn)&&(i.stencilOp(lt,cn,vn),ae=lt,Oe=cn,Le=vn)},setLocked:function(lt){U=lt},setClear:function(lt){_t!==lt&&(i.clearStencil(lt),_t=lt)},reset:function(){U=!1,be=null,te=null,Se=null,Ae=null,ae=null,Oe=null,Le=null,_t=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,T=null,C=null,_=null,E=null,v=null,M=null,x=new Ze(0,0,0),w=0,R=!1,P=null,O=null,V=null,D=null,z=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,re=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=re>=1):F.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=re>=2);let H=null,Z={},de=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),fe=new St().fromArray(de),ze=new St().fromArray(ce);function Be(U,be,te,Se){let Ae=new Uint8Array(4),ae=i.createTexture();i.bindTexture(U,ae),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<te;Oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(be+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return ae}let K={};K[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc($i),ue(!1),ge(Ql),B(i.CULL_FACE),oe(Rn);function B(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function X(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function me(U,be){return h[U]!==be?(i.bindFramebuffer(U,be),h[U]=be,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function se(U,be){let te=g,Se=!1;if(U){te=f.get(be),te===void 0&&(te=[],f.set(be,te));let Ae=U.textures;if(te.length!==Ae.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Oe=Ae.length;ae<Oe;ae++)te[ae]=i.COLOR_ATTACHMENT0+ae;te.length=Ae.length,Se=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Se=!0);Se&&i.drawBuffers(te)}function xe(U){return S!==U?(i.useProgram(U),S=U,!0):!1}let Ke={[Ti]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Zh]:i.FUNC_REVERSE_SUBTRACT};Ke[Jh]=i.MIN,Ke[Kh]=i.MAX;let ne={[$h]:i.ZERO,[jh]:i.ONE,[Qh]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(U,be,te,Se,Ae,ae,Oe,Le,_t,lt){if(U===Rn){p===!0&&(X(i.BLEND),p=!1);return}if(p===!1&&(B(i.BLEND),p=!0),U!==Yh){if(U!==m||lt!==R){if((T!==Ti||E!==Ti)&&(i.blendEquation(i.FUNC_ADD),T=Ti,E=Ti),lt)switch(U){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",U);break}else switch(U){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",U);break}C=null,_=null,v=null,M=null,x.set(0,0,0),w=0,m=U,R=lt}return}Ae=Ae||be,ae=ae||te,Oe=Oe||Se,(be!==T||Ae!==E)&&(i.blendEquationSeparate(Ke[be],Ke[Ae]),T=be,E=Ae),(te!==C||Se!==_||ae!==v||Oe!==M)&&(i.blendFuncSeparate(ne[te],ne[Se],ne[ae],ne[Oe]),C=te,_=Se,v=ae,M=Oe),(Le.equals(x)===!1||_t!==w)&&(i.blendColor(Le.r,Le.g,Le.b,_t),x.copy(Le),w=_t),m=U,R=!1}function he(U,be){U.side===rn?X(i.CULL_FACE):B(i.CULL_FACE);let te=U.side===Xt;be&&(te=!te),ue(te),U.blending===us&&U.transparent===!1?oe(Rn):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Se=U.stencilWrite;a.setTest(Se),Se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function ge(U){U!==Gh?(B(i.CULL_FACE),U!==O&&(U===Ql?i.cullFace(i.BACK):U===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),O=U}function ke(U){U!==V&&(J&&i.lineWidth(U),V=U)}function Ne(U,be,te){U?(B(i.POLYGON_OFFSET_FILL),(D!==be||z!==te)&&(D=be,z=te,o.getReversed()&&(be=-be),i.polygonOffset(be,te))):X(i.POLYGON_OFFSET_FILL)}function He(U){U?B(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function Ye(U){U===void 0&&(U=i.TEXTURE0+j-1),H!==U&&(i.activeTexture(U),H=U)}function L(U,be,te){te===void 0&&(H===null?te=i.TEXTURE0+j-1:te=H);let Se=Z[te];Se===void 0&&(Se={type:void 0,texture:void 0},Z[te]=Se),(Se.type!==U||Se.texture!==be)&&(H!==te&&(i.activeTexture(te),H=te),i.bindTexture(U,be||K[U]),Se.type=U,Se.texture=be)}function rt(){let U=Z[H];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{i.compressedTexImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function pe(){try{i.texStorage2D(...arguments)}catch(U){We("WebGLState:",U)}}function _e(){try{i.texStorage3D(...arguments)}catch(U){We("WebGLState:",U)}}function ee(){try{i.texImage2D(...arguments)}catch(U){We("WebGLState:",U)}}function ie(){try{i.texImage3D(...arguments)}catch(U){We("WebGLState:",U)}}function ye(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Ue(U,be){d[U]!==be&&(i.pixelStorei(U,be),d[U]=be)}function Me(U){fe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function ve(U){ze.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Fe(U,be){let te=c.get(be);te===void 0&&(te=new WeakMap,c.set(be,te));let Se=te.get(U);Se===void 0&&(Se=i.getUniformBlockIndex(be,U.name),te.set(U,Se))}function Ge(U,be){let Se=c.get(be).get(U);l.get(be)!==Se&&(i.uniformBlockBinding(be,Se,U.__bindingPointIndex),l.set(be,Se))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},H=null,Z={},h={},f=new WeakMap,g=[],S=null,p=!1,m=null,T=null,C=null,_=null,E=null,v=null,M=null,x=new Ze(0,0,0),w=0,R=!1,P=null,O=null,V=null,D=null,z=null,fe.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:X,bindFramebuffer:me,drawBuffers:se,useProgram:xe,setBlending:oe,setMaterial:he,setFlipSided:ue,setCullFace:ge,setLineWidth:ke,setPolygonOffset:Ne,setScissorTest:He,activeTexture:Ye,bindTexture:L,unbindTexture:rt,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:ee,texImage3D:ie,pixelStorei:Ue,getParameter:ye,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:pe,texStorage3D:_e,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:Me,viewport:ve,reset:Je}}function q_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,y){return g?new OffscreenCanvas(A,y):Fs("canvas")}function p(A,y,k){let Y=1,Q=et(A);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pe=Math.floor(Y*Q.width),_e=Math.floor(Y*Q.height);h===void 0&&(h=S(pe,_e));let ee=y?S(pe,_e):h;return ee.width=pe,ee.height=_e,ee.getContext("2d").drawImage(A,0,0,pe,_e),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pe+"x"+_e+")."),ee}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,y,k,Y,Q,pe=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _e;Y&&(_e=e.get("EXT_texture_norm16"),_e||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8),k===i.UNSIGNED_SHORT&&_e&&(ee=_e.R16_EXT),k===i.SHORT&&_e&&(ee=_e.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),y===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8),k===i.UNSIGNED_SHORT&&_e&&(ee=_e.RG16_EXT),k===i.SHORT&&_e&&(ee=_e.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&_e&&(ee=_e.RGB16_EXT),k===i.SHORT&&_e&&(ee=_e.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),y===i.RGBA){let ie=pe?Us:nt.getTransfer(Q);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=ie===ht?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&_e&&(ee=_e.RGBA16_EXT),k===i.SHORT&&_e&&(ee=_e.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(A,y){let k;return A?y===null||y===_n||y===fs?k=i.DEPTH24_STENCIL8:y===xn?k=i.DEPTH32F_STENCIL8:y===ds&&(k=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_n||y===fs?k=i.DEPTH_COMPONENT24:y===xn?k=i.DEPTH_COMPONENT32F:y===ds&&(k=i.DEPTH_COMPONENT16),k}function v(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Ut?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function M(A){let y=A.target;y.removeEventListener("dispose",M),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function x(A){let y=A.target;y.removeEventListener("dispose",x),P(y)}function w(A){let y=n.get(A);if(y.__webglInit===void 0)return;let k=A.source,Y=f.get(k);if(Y){let Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(A),Object.keys(Y).length===0&&f.delete(k)}n.remove(A)}function R(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let k=A.source,Y=f.get(k);delete Y[y.__cacheKey],o.memory.textures--}function P(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=A.textures;for(let Y=0,Q=k.length;Y<Q;Y++){let pe=n.get(k[Y]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(A)}let O=0;function V(){O=0}function D(){return O}function z(A){O=A}function j(){let A=O;return A>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function J(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function re(A,y){let k=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let Y=A.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function F(A,y){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){X(k,A,y);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function H(A,y){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){X(k,A,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function Z(A,y){let k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){me(k,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let de={[Ra]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},ce={[Dt]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},fe={[gu]:i.NEVER,[bu]:i.ALWAYS,[_u]:i.LESS,[Ko]:i.LEQUAL,[xu]:i.EQUAL,[$o]:i.GEQUAL,[yu]:i.GREATER,[vu]:i.NOTEQUAL};function ze(A,y){if(y.type===xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ut||y.magFilter===uo||y.magFilter===gr||y.magFilter===di||y.minFilter===Ut||y.minFilter===uo||y.minFilter===gr||y.minFilter===di)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,de[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,de[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,de[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Dt||y.minFilter!==gr&&y.minFilter!==di||y.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Be(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",M));let Y=y.source,Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));let pe=J(y);if(pe!==A.__cacheKey){Q[pe]===void 0&&(Q[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[pe].usedTimes++;let _e=Q[A.__cacheKey];_e!==void 0&&(Q[A.__cacheKey].usedTimes--,_e.usedTimes===0&&R(y)),A.__cacheKey=pe,A.__webglTexture=Q[pe].texture}return k}function K(A,y,k){return Math.floor(Math.floor(A/k)/y)}function B(A,y,k,Y){let pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,Y,y.data);else{pe.sort((Ue,Me)=>Ue.start-Me.start);let _e=0;for(let Ue=1;Ue<pe.length;Ue++){let Me=pe[_e],ve=pe[Ue],Fe=Me.start+Me.count,Ge=K(ve.start,y.width,4),Je=K(Me.start,y.width,4);ve.start<=Fe+1&&Ge===Je&&K(ve.start+ve.count-1,y.width,4)===Ge?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++_e,pe[_e]=ve)}pe.length=_e+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ue=0,Me=pe.length;Ue<Me;Ue++){let ve=pe[Ue],Fe=Math.floor(ve.start/4),Ge=Math.ceil(ve.count/4),Je=Fe%y.width,U=Math.floor(Fe/y.width),be=Ge,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Je,U,be,te,k,Y,y.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function X(A,y,k){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=Be(A,y),pe=y.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+k);let _e=n.get(pe);if(pe.version!==_e.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let te=nt.getPrimaries(nt.workingColorSpace),Se=y.colorSpace===Wn?null:nt.getPrimaries(y.colorSpace),Ae=y.colorSpace===Wn||te===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=p(y.image,!1,s.maxTextureSize);ie=rt(y,ie);let ye=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type),Me=_(y.internalFormat,ye,Ue,y.normalized,y.colorSpace,y.isVideoTexture);ze(Y,y);let ve,Fe=y.mipmaps,Ge=y.isVideoTexture!==!0,Je=_e.__version===void 0||Q===!0,U=pe.dataReady,be=v(y,ie);if(y.isDepthTexture)Me=E(y.format===fi,y.type),Je&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,ye,Ue,null));else if(y.isDataTexture)if(Fe.length>0){Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,be,Me,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)ve=Fe[te],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,ye,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,te,Me,ve.width,ve.height,0,ye,Ue,ve.data);y.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(i.TEXTURE_2D,be,Me,ie.width,ie.height),U&&B(y,ie,ye,Ue)):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,ye,Ue,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Me,Fe[0].width,Fe[0].height,ie.depth);for(let te=0,Se=Fe.length;te<Se;te++)if(ve=Fe[te],y.format!==ln)if(ye!==null)if(Ge){if(U)if(y.layerUpdates.size>0){let Ae=Rc(ve.width,ve.height,y.format,y.type);for(let ae of y.layerUpdates){let Oe=ve.data.subarray(ae*Ae/ve.data.BYTES_PER_ELEMENT,(ae+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ae,ve.width,ve.height,1,ye,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,ie.depth,ye,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Me,ve.width,ve.height,ie.depth,0,ve.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,ie.depth,ye,Ue,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Me,ve.width,ve.height,ie.depth,0,ye,Ue,ve.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ge&&Je&&t.texStorage2D(i.TEXTURE_2D,be,Me,Fe[0].width,Fe[0].height);for(let te=0,Se=Fe.length;te<Se;te++)ve=Fe[te],y.format!==ln?ye!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Me,ve.width,ve.height,0,ve.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,ye,Ue,ve.data):t.texImage2D(i.TEXTURE_2D,te,Me,ve.width,ve.height,0,ye,Ue,ve.data)}else if(y.isDataArrayTexture)if(Ge){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Me,ie.width,ie.height,ie.depth),U)if(y.layerUpdates.size>0){let te=Rc(ie.width,ie.height,y.format,y.type);for(let Se of y.layerUpdates){let Ae=ie.data.subarray(Se*te/ie.data.BYTES_PER_ELEMENT,(Se+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ie.width,ie.height,1,ye,Ue,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ue,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,ye,Ue,ie.data);else if(y.isData3DTexture)Ge?(Je&&t.texStorage3D(i.TEXTURE_3D,be,Me,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Ue,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,ye,Ue,ie.data);else if(y.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(i.TEXTURE_2D,be,Me,ie.width,ie.height);else{let te=ie.width,Se=ie.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Me,te,Se,0,ye,Ue,null),te>>=1,Se>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),d.add(y),te.onpaint=Se=>{let Ae=Se.changedElements;for(let ae of d)Ae.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ae=i.RGBA,ae=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,ae,Oe,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&Je){let te=et(Fe[0]);t.texStorage2D(i.TEXTURE_2D,be,Me,te.width,te.height)}for(let te=0,Se=Fe.length;te<Se;te++)ve=Fe[te],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ye,Ue,ve):t.texImage2D(i.TEXTURE_2D,te,Me,ye,Ue,ve);y.generateMipmaps=!1}else if(Ge){if(Je){let te=et(ie);t.texStorage2D(i.TEXTURE_2D,be,Me,te.width,te.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ue,ie)}else t.texImage2D(i.TEXTURE_2D,0,Me,ye,Ue,ie);m(y)&&T(Y),_e.__version=pe.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function me(A,y,k){if(y.image.length!==6)return;let Y=Be(A,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let pe=n.get(Q);if(Q.version!==pe.__version||Y===!0){t.activeTexture(i.TEXTURE0+k);let _e=nt.getPrimaries(nt.workingColorSpace),ee=y.colorSpace===Wn?null:nt.getPrimaries(y.colorSpace),ie=y.colorSpace===Wn||_e===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Ue=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!ye&&!Ue?Me[ae]=p(y.image[ae],!0,s.maxCubemapSize):Me[ae]=Ue?y.image[ae].image:y.image[ae],Me[ae]=rt(y,Me[ae]);let ve=Me[0],Fe=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),Je=_(y.internalFormat,Fe,Ge,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,be=pe.__version===void 0||Y===!0,te=Q.dataReady,Se=v(y,ve);ze(i.TEXTURE_CUBE_MAP,y);let Ae;if(ye){U&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Je,ve.width,ve.height);for(let ae=0;ae<6;ae++){Ae=Me[ae].mipmaps;for(let Oe=0;Oe<Ae.length;Oe++){let Le=Ae[Oe];y.format!==ln?Fe!==null?U?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Je,Le.width,Le.height,0,Le.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,Fe,Ge,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Je,Le.width,Le.height,0,Fe,Ge,Le.data)}}}else{if(Ae=y.mipmaps,U&&be){Ae.length>0&&Se++;let ae=et(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ue){U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Fe,Ge,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Me[ae].width,Me[ae].height,0,Fe,Ge,Me[ae].data);for(let Oe=0;Oe<Ae.length;Oe++){let _t=Ae[Oe].image[ae].image;U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,_t.width,_t.height,Fe,Ge,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Je,_t.width,_t.height,0,Fe,Ge,_t.data)}}else{U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Ge,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Fe,Ge,Me[ae]);for(let Oe=0;Oe<Ae.length;Oe++){let Le=Ae[Oe];U?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Fe,Ge,Le.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Je,Fe,Ge,Le.image[ae])}}}m(y)&&T(i.TEXTURE_CUBE_MAP),pe.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function se(A,y,k,Y,Q,pe){let _e=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ie=_(k.internalFormat,_e,ee,k.normalized,k.colorSpace),ye=n.get(y),Ue=n.get(k);if(Ue.__renderTarget=y,!ye.__hasExternalTextures){let Me=Math.max(1,y.width>>pe),ve=Math.max(1,y.height>>pe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,pe,ie,Me,ve,y.depth,0,_e,ee,null):t.texImage2D(Q,pe,ie,Me,ve,0,_e,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,Ue.__webglTexture,0,He(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,Ue.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(A,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,pe=E(y.stencilBuffer,Q),_e=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(y),pe,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(y),pe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,A)}else{let Y=y.textures;for(let Q=0;Q<Y.length;Q++){let pe=Y[Q],_e=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),ie=_(pe.internalFormat,_e,ee,pe.normalized,pe.colorSpace);Ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(y),ie,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(A,y,k){let Y=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",M)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y.depthTexture);let ye=r.convert(y.depthTexture.format),Ue=r.convert(y.depthTexture.type),Me;y.depthTexture.format===Tn?Me=i.DEPTH_COMPONENT24:y.depthTexture.format===fi&&(Me=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,y.width,y.height,0,ye,Ue,null)}}else re(y.depthTexture,0);let pe=Q.__webglTexture,_e=He(y),ee=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ie=y.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Tn)Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,pe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,pe,0);else if(y.depthTexture.format===fi)Ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,pe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let y=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let Y=0;Y<6;Y++)Ke(y.__webglFramebuffer[Y],A,Y);else{let Y=A.texture.mipmaps;Y&&Y.length>0?Ke(y.__webglFramebuffer[0],A,0):Ke(y.__webglFramebuffer,A,0)}else if(k){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),xe(y.__webglDepthbuffer[Y],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xe(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,y,k){let Y=n.get(A);y!==void 0&&se(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ne(A)}function he(A){let y=A.texture,k=n.get(A),Y=n.get(y);A.addEventListener("dispose",x);let Q=A.textures,pe=A.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),pe){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)k.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ee=0,ie=Q.length;ee<ie;ee++){let ye=n.get(Q[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ye(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let ie=Q[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let ye=r.convert(ie.format,ie.colorSpace),Ue=r.convert(ie.type),Me=_(ie.internalFormat,ye,Ue,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ve=He(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)se(k.__webglFramebuffer[ee][ie],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else se(k.__webglFramebuffer[ee],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(y)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ee=0,ie=Q.length;ee<ie;ee++){let ye=Q[ee],Ue=n.get(ye),Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ue.__webglTexture),ze(Me,ye),se(k.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+ee,Me,0),m(ye)&&T(Me)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Y.__webglTexture),ze(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)se(k.__webglFramebuffer[ie],A,y,i.COLOR_ATTACHMENT0,ee,ie);else se(k.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ee,0);m(y)&&T(ee),t.unbindTexture()}A.depthBuffer&&ne(A)}function ue(A){let y=A.textures;for(let k=0,Y=y.length;k<Y;k++){let Q=y[k];if(m(Q)){let pe=C(A),_e=n.get(Q).__webglTexture;t.bindTexture(pe,_e),T(pe),t.unbindTexture()}}}let ge=[],ke=[];function Ne(A){if(A.samples>0){if(Ye(A)===!1){let y=A.textures,k=A.width,Y=A.height,Q=i.COLOR_BUFFER_BIT,pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(A),ee=y.length>1;if(ee)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ue=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ue,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,i.NEAREST),l===!0&&(ge.length=0,ke.length=0,ge.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ge.push(pe),ke.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ue=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function He(A){return Math.min(s.maxSamples,A.samples)}function Ye(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(A){let y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function rt(A,y){let k=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ns&&k!==Wn&&(nt.getTransfer(k)===ht?(Y!==ln||Q!==qt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),y}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=re,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=oe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z_(i,e){function t(n,s=Wn){let r,o=nt.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===xc)return i.ALPHA;if(n===yc)return i.RGB;if(n===ln)return i.RGBA;if(n===Tn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===go)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===_r||n===xr||n===yr||n===vr)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===vo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===Eo||n===wo||n===To||n===Ao||n===br||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===Eo)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===br)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===qo||n===Sr||n===Zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K_=`
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

}`,Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:J_,fragmentShader:K_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,S=typeof XRWebGLBinding<"u",p=new Gc,m={},T=t.getContextAttributes(),C=null,_=null,E=[],v=[],M=new le,x=null,w=null,R=new kt;R.viewport=new St;let P=new kt;P.viewport=new St;let O=[R,P],V=new lo,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let B=E[K];return B===void 0&&(B=new is,E[K]=B),B.getTargetRaySpace()},this.getControllerGrip=function(K){let B=E[K];return B===void 0&&(B=new is,E[K]=B),B.getGripSpace()},this.getHand=function(K){let B=E[K];return B===void 0&&(B=new is,E[K]=B),B.getHandSpace()};function j(K){let B=v.indexOf(K.inputSource);if(B===-1)return;let X=E[B];X!==void 0&&(X.update(K.inputSource,K.frame,c||o),X.dispatchEvent({type:K.type,data:K.inputSource}))}function J(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",re);for(let K=0;K<E.length;K++){let B=v[K];B!==null&&(v[K]=null,E[K].disconnect(B))}D=null,z=null,p.reset();for(let K in m)delete m[K];if(e.setRenderTarget(C),f=null,h=null,d=null,s=null,_=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(M.width,M.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",J),s.addEventListener("inputsourceschange",re),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(M),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,me=null,se=null;T.depth&&(se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=T.stencil?fi:Tn,me=T.stencil?fs:_n);let xe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Yt(h.textureWidth,h.textureHeight,{format:ln,type:qt,depthTexture:new ti(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let X={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Yt(f.framebufferWidth,f.framebufferHeight,{format:ln,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(K){for(let B=0;B<K.removed.length;B++){let X=K.removed[B],me=v.indexOf(X);me>=0&&(v[me]=null,E[me].disconnect(X))}for(let B=0;B<K.added.length;B++){let X=K.added[B],me=v.indexOf(X);if(me===-1){for(let xe=0;xe<E.length;xe++)if(xe>=v.length){v.push(X),me=xe;break}else if(v[xe]===null){v[xe]=X,me=xe;break}if(me===-1)break}let se=E[me];se&&se.connect(X)}}let F=new I,H=new I;function Z(K,B,X){F.setFromMatrixPosition(B.matrixWorld),H.setFromMatrixPosition(X.matrixWorld);let me=F.distanceTo(H),se=B.projectionMatrix.elements,xe=X.projectionMatrix.elements,Ke=se[14]/(se[10]-1),ne=se[14]/(se[10]+1),oe=(se[9]+1)/se[5],he=(se[9]-1)/se[5],ue=(se[8]-1)/se[0],ge=(xe[8]+1)/xe[0],ke=Ke*ue,Ne=Ke*ge,He=me/(-ue+ge),Ye=He*-ue;if(B.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ye),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),se[10]===-1)K.projectionMatrix.copy(B.projectionMatrix),K.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let L=Ke+He,rt=ne+He,et=ke-Ye,A=Ne+(me-Ye),y=oe*ne/rt*L,k=he*ne/rt*L;K.projectionMatrix.makePerspective(et,A,y,k,L,rt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,B){B===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(B.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let B=K.near,X=K.far;p.texture!==null&&(p.depthNear>0&&(B=p.depthNear),p.depthFar>0&&(X=p.depthFar)),V.near=P.near=R.near=B,V.far=P.far=R.far=X,(D!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,z=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,P.layers.mask=V.layers.mask&-3;let me=K.parent,se=V.cameras;de(V,me);for(let xe=0;xe<se.length;xe++)de(se[xe],me);se.length===2?Z(V,R,P):V.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ce(K,V,me)};function ce(K,B,X){X===null?K.matrix.copy(B.matrixWorld):(K.matrix.copy(X.matrixWorld),K.matrix.invert(),K.matrix.multiply(B.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(B.projectionMatrix),K.projectionMatrixInverse.copy(B.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=es*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(K){return m[K]};let fe=null;function ze(K,B){if(u=B.getViewerPose(c||o),g=B,u!==null){let X=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let me=!1;X.length!==V.cameras.length&&(V.cameras.length=0,me=!0);for(let ne=0;ne<X.length;ne++){let oe=X[ne],he=null;if(f!==null)he=f.getViewport(oe);else{let ge=d.getViewSubImage(h,oe);he=ge.viewport,ne===0&&(e.setRenderTargetTextures(_,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(_))}let ue=O[ne];ue===void 0&&(ue=new kt,ue.layers.enable(ne),ue.viewport=new St,O[ne]=ue),ue.matrix.fromArray(oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),ne===0&&(V.matrix.copy(ue.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),me===!0&&V.cameras.push(ue)}let se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let ne=d.getDepthInformation(X[0]);ne&&ne.isValid&&ne.texture&&p.init(ne,s.renderState)}if(se&&se.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let ne=0;ne<X.length;ne++){let oe=X[ne].camera;if(oe){let he=m[oe];he||(he=new qs,m[oe]=he);let ue=d.getCameraImage(oe);he.sourceTexture=ue}}}}for(let X=0;X<E.length;X++){let me=v[X],se=E[X];me!==null&&se!==void 0&&se.update(me,B,c||o)}fe&&fe(K,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let Be=new nd;Be.setAnimationLoop(ze),this.setAnimationLoop=function(K){fe=K},this.dispose=function(){}}},$_=new gt,ld=new qe;ld.set(-1,0,0,0,1,0,0,0,1);function j_(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Tc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,C,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Xt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Xt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),C=T.envMap,_=T.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(_)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ld),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=C*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let v=E.program;n.uniformBlockBinding(_,v)}function c(_,E){let v=s[_.id];v===void 0&&(p(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",T));let M=E.program;n.updateUBOMapping(_,M);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){let E=d();_.__bindingPointIndex=E;let v=i.createBuffer(),M=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let E=s[_.id],v=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,w=v.length;x<w;x++){let R=v[x];if(Array.isArray(R))for(let P=0,O=R.length;P<O;P++)f(R[P],x,P,M);else f(R,x,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,E,v,M){if(S(_,E,v,M)===!0){let x=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let O=w[P],V=m(O);g(O,_.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,E,v){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,v)}function S(_,E,v,M){let x=_.value,w=E+"_"+v;if(M[w]===void 0)return typeof x=="number"||typeof x=="boolean"?M[w]=x:ArrayBuffer.isView(x)?M[w]=x.slice():M[w]=x.clone(),!0;{let R=M[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return M[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){let E=_.uniforms,v=0,M=16;for(let w=0,R=E.length;w<R;w++){let P=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,V=P.length;O<V;O++){let D=P[O],z=Array.isArray(D.value)?D.value:[D.value];for(let j=0,J=z.length;j<J;j++){let re=z[j],F=m(re),H=v%M,Z=H%F.boundary,de=H+Z;v+=Z,de!==0&&M-de<F.storage&&(v+=M-de),D.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=F.storage}}}let x=v%M;return x>0&&(v+=M-x),_.__size=v,_.__cache={},this}function m(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",_),E}function T(_){let E=_.target;E.removeEventListener("dispose",T);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function C(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function tx(){return Pn===null&&(Pn=new Fa(ex,16,16,pi,yn),Pn.name="DFG_LUT",Pn.minFilter=Ut,Pn.magFilter=Ut,Pn.wrapS=Mn,Pn.wrapT=Mn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var nl=class{constructor(e={}){let{canvas:t=Su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let S=f,p=new Set([xo,_o,go]),m=new Set([qt,_n,ds,fs,po,mo]),T=new Uint32Array(4),C=new Int32Array(4),_=new I,E=null,v=null,M=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,O=null,V=null,D=null,z=null;this._outputColorSpace=$t;let j=0,J=0,re=null,F=-1,H=null,Z=new St,de=new St,ce=null,fe=new Ze(0),ze=0,Be=t.width,K=t.height,B=1,X=null,me=null,se=new St(0,0,Be,K),xe=new St(0,0,Be,K),Ke=!1,ne=new rs,oe=!1,he=!1,ue=new gt,ge=new I,ke=new St,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ye(){return re===null?B:1}let L=n;function rt(b,N){return t.getContext(b,N)}let et,A,y,k,Y,Q,pe,_e,ee,ie,ye,Ue,Me,ve,Fe,Ge,Je,U,be,te,Se,Ae,ae;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",cn,!1),L===null){let N="webgl2";if(L=rt(N,b),L===null)throw rt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(b){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),We("WebGLRenderer: "+b.message),b}function Oe(){et=new l0(L),et.init(),Se=new Z_(L,et),A=new jg(L,et,e,Se),y=new Y_(L,et),A.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),V=L.createFramebuffer(),D=L.createFramebuffer(),z=L.createFramebuffer(),k=new u0(L),Y=new L_,Q=new q_(L,et,y,Y,A,Se,k),pe=new o0(R),_e=new fp(L),Ae=new Kg(L,_e),ee=new c0(L,_e,k,Ae),ie=new f0(L,ee,_e,Ae,k),U=new d0(L,A,Q),Fe=new Qg(Y),ye=new I_(R,pe,et,A,Ae,Fe),Ue=new j_(R,Y),Me=new N_,ve=new z_(et),Je=new Jg(R,pe,y,ie,g,l),Ge=new X_(R,ie,A),ae=new Q_(L,k,A,y),be=new $g(L,et,k),te=new h0(L,et,k),k.programs=ye.programs,R.capabilities=A,R.extensions=et,R.properties=Y,R.renderLists=Me,R.shadowMap=Ge,R.state=y,R.info=k}S!==qt&&(w=new m0(S,t.width,t.height,a,s,r));let Le=new Wc(R,L);this.xr=Le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(Be,K,!1))},this.getSize=function(b){return b.set(Be,K)},this.setSize=function(b,N,$=!0){if(Le.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=b,K=N,t.width=Math.floor(b*B),t.height=Math.floor(N*B),$===!0&&(t.style.width=b+"px",t.style.height=N+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Be*B,K*B).floor()},this.setDrawingBufferSize=function(b,N,$){Be=b,K=N,B=$,t.width=Math.floor(b*$),t.height=Math.floor(N*$),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(S===qt){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Z)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,N,$,G){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,N,$,G),y.viewport(Z.copy(se).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(xe)},this.setScissor=function(b,N,$,G){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,N,$,G),y.scissor(de.copy(xe).multiplyScalar(B).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(b){y.setScissorTest(Ke=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,$=!0){let G=0;if(b){let W=!1;if(re!==null){let Te=re.texture.format;W=p.has(Te)}if(W){let Te=re.texture.type,Re=m.has(Te),we=Je.getClearColor(),Pe=Je.getClearAlpha(),De=we.r,$e=we.g,tt=we.b;Re?(T[0]=De,T[1]=$e,T[2]=tt,T[3]=Pe,L.clearBufferuiv(L.COLOR,0,T)):(C[0]=De,C[1]=$e,C[2]=tt,C[3]=Pe,L.clearBufferiv(L.COLOR,0,C))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Je.dispose(),Me.dispose(),ve.dispose(),Y.dispose(),pe.dispose(),ie.dispose(),Ae.dispose(),ae.dispose(),ye.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",$c),Le.removeEventListener("sessionend",jc),mi.stop()};function _t(b){b.preventDefault(),Os("WebGLRenderer: Context Lost."),P=!0}function lt(){Os("WebGLRenderer: Context Restored."),P=!1;let b=k.autoReset,N=Ge.enabled,$=Ge.autoUpdate,G=Ge.needsUpdate,W=Ge.type;Oe(),k.autoReset=b,Ge.enabled=N,Ge.autoUpdate=$,Ge.needsUpdate=G,Ge.type=W}function cn(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vn(b){let N=b.target;N.removeEventListener("dispose",vn),Td(N)}function Td(b){Ad(b),Y.remove(b)}function Ad(b){let N=Y.get(b).programs;N!==void 0&&(N.forEach(function($){ye.releaseProgram($)}),b.isShaderMaterial&&ye.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,$,G,W,Te){N===null&&(N=Ne);let Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=Pd(b,N,$,G,W);y.setMaterial(G,Re);let Pe=$.index,De=1;if(G.wireframe===!0){if(Pe=ee.getWireframeAttribute($),Pe===void 0)return;De=2}let $e=$.drawRange,tt=$.attributes.position,Ie=$e.start*De,ct=($e.start+$e.count)*De;Te!==null&&(Ie=Math.max(Ie,Te.start*De),ct=Math.min(ct,(Te.start+Te.count)*De)),Pe!==null?(Ie=Math.max(Ie,0),ct=Math.min(ct,Pe.count)):tt!=null&&(Ie=Math.max(Ie,0),ct=Math.min(ct,tt.count));let Tt=ct-Ie;if(Tt<0||Tt===1/0)return;Ae.setup(W,G,we,$,Pe);let vt,mt=be;if(Pe!==null&&(vt=_e.get(Pe),mt=te,mt.setIndex(vt)),W.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Ye()),mt.setMode(L.LINES)):mt.setMode(L.TRIANGLES);else if(W.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),y.setLineWidth(Ft*Ye()),W.isLineSegments?mt.setMode(L.LINES):W.isLineLoop?mt.setMode(L.LINE_LOOP):mt.setMode(L.LINE_STRIP)}else W.isPoints?mt.setMode(L.POINTS):W.isSprite&&mt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(et.get("WEBGL_multi_draw"))mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ft=W._multiDrawStarts,Ce=W._multiDrawCounts,Ht=W._multiDrawCount,at=Pe?_e.get(Pe).bytesPerElement:1,an=Y.get(G).currentProgram.getUniforms();for(let bn=0;bn<Ht;bn++)an.setValue(L,"_gl_DrawID",bn),mt.render(Ft[bn]/at,Ce[bn])}else if(W.isInstancedMesh)mt.renderInstances(Ie,Tt,W.count);else if($.isInstancedBufferGeometry){let Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,Ft);mt.renderInstances(Ie,Tt,Ce)}else mt.render(Ie,Tt)};function Kc(b,N,$,G){O!==null&&b.isNodeMaterial&&O.setObject(G,b),oe===!0&&Fe.setState(b,$,!1),b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,Yr(b,N,G),b.side=hi,b.needsUpdate=!0,Yr(b,N,G),b.side=rn):Yr(b,N,G)}this.compile=function(b,N,$=null){$===null&&($=b),O!==null&&O.renderStart(b,N,$),v=ve.get($),v.init(N),x.push(v),$.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),b!==$&&b.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(),O!==null&&O.updateLights(v.state.lightsArray),he=this.localClippingEnabled,oe=Fe.init(this.clippingPlanes,he),oe===!0&&Fe.setGlobalState(this.clippingPlanes,N),O!==null&&Ge.render(v.state.shadowsArray,$,N);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Te=W.material;if(Te)if(Array.isArray(Te))for(let Re=0;Re<Te.length;Re++){let we=Te[Re];Kc(we,$,N,W),G.add(we)}else Kc(Te,$,N,W),G.add(Te)}),v=x.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(b,N,$=null){let G=this.compile(b,N,$);return new Promise(W=>{function Te(){if(G.forEach(function(Re){let Pe=Y.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Re)}),G.size===0){W(b);return}setTimeout(Te,10)}et.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let fl=null;function Cd(b){fl&&fl(b)}function $c(){mi.stop()}function jc(){mi.start()}let mi=new nd;mi.setAnimationLoop(Cd),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(b){fl=b,Le.setAnimationLoop(b),b===null?mi.stop():mi.start()},Le.addEventListener("sessionstart",$c),Le.addEventListener("sessionend",jc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(b,N);let $=Le.enabled===!0&&Le.isPresenting===!0,G=w!==null&&(re===null||$)&&w.begin(R,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(N),N=Le.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,N,re),v=ve.get(b,x.length),v.init(N),v.state.textureUnits=Q.getTextureUnits(),x.push(v),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(ue,pn,N.reversedDepth),he=this.localClippingEnabled,oe=Fe.init(this.clippingPlanes,he),E=Me.get(b,M.length),E.init(),M.push(E),Le.enabled===!0&&Le.isPresenting===!0){let Re=R.xr.getDepthSensingMesh();Re!==null&&pl(Re,N,-1/0,R.sortObjects)}pl(b,N,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(v.state.lightsArray),R.sortObjects===!0&&E.sort(X,me),He=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,He&&Je.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Fe.beginShadows();let W=v.state.shadowsArray;if(Ge.render(W,b,N),oe===!0&&Fe.endShadows(),(G&&w.hasRenderPass())===!1){let Re=E.opaque,we=E.transmissive;if(v.setupLights(),N.isArrayCamera){let Pe=N.cameras;if(we.length>0)for(let De=0,$e=Pe.length;De<$e;De++){let tt=Pe[De];eh(Re,we,b,tt)}He&&Je.render(b);for(let De=0,$e=Pe.length;De<$e;De++){let tt=Pe[De];Qc(E,b,tt,tt.viewport)}}else we.length>0&&eh(Re,we,b,N),He&&Je.render(b),Qc(E,b,N)}re!==null&&J===0&&(Q.updateMultisampleRenderTarget(re),Q.updateRenderTargetMipmap(re)),G&&w.end(R),b.isScene===!0&&b.onAfterRender(R,b,N),Ae.resetDefaultState(),F=-1,H=null,x.pop(),x.length>0?(v=x[x.length-1],Q.setTextureUnits(v.state.textureUnits),oe===!0&&Fe.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,O!==null&&O.renderEnd()};function pl(b,N,$,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)v.pushLightProbeGrid(b);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ne)){G&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);let Re=ie.update(b),we=b.material;we.visible&&E.push(b,Re,we,$,ke.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ne))){let Re=ie.update(b),we=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){let Pe=Re.groups;for(let De=0,$e=Pe.length;De<$e;De++){let tt=Pe[De],Ie=we[tt.materialIndex];Ie&&Ie.visible&&E.push(b,Re,Ie,$,ke.z,tt,N)}}else we.visible&&E.push(b,Re,we,$,ke.z,null,N)}}let Te=b.children;for(let Re=0,we=Te.length;Re<we;Re++)pl(Te[Re],N,$,G)}function Qc(b,N,$,G){let{opaque:W,transmissive:Te,transparent:Re}=b;v.setupLightsView($),oe===!0&&Fe.setGlobalState(R.clippingPlanes,$),G&&y.viewport(Z.copy(G)),W.length>0&&Xr(W,N,$),Te.length>0&&Xr(Te,N,$),Re.length>0&&Xr(Re,N,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function eh(b,N,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[G.id]===void 0){let Ie=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[G.id]=new Yt(1,1,{generateMipmaps:!0,type:Ie?yn:qt,minFilter:di,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Te=v.state.transmissionRenderTarget[G.id],Re=G.viewport||Z;Te.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);let we=R.getRenderTarget(),Pe=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(fe),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),He&&Je.render($);let $e=R.toneMapping;R.toneMapping=gn;let tt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),v.setupLightsView(G),oe===!0&&Fe.setGlobalState(R.clippingPlanes,G),Xr(b,$,G),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ct=0,Tt=N.length;ct<Tt;ct++){let vt=N[ct],{object:mt,geometry:Ft,material:Ce,group:Ht}=vt;if(Ce.side===rn&&mt.layers.test(G.layers)){let at=Ce.side;Ce.side=Xt,Ce.needsUpdate=!0,th(mt,$,G,Ft,Ce,Ht),Ce.side=at,Ce.needsUpdate=!0,Ie=!0}}Ie===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}R.setRenderTarget(we,Pe,De),R.setClearColor(fe,ze),tt!==void 0&&(G.viewport=tt),R.toneMapping=$e}function Xr(b,N,$){let G=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Te=b.length;W<Te;W++){let Re=b[W],{object:we,geometry:Pe,group:De}=Re,$e=Re.material;$e.allowOverride===!0&&G!==null&&($e=G),we.layers.test($.layers)&&th(we,N,$,Pe,$e,De)}}function th(b,N,$,G,W,Te){O!==null&&W.isNodeMaterial&&O.setObject(b,W),b.onBeforeRender(R,N,$,G,W,Te),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(R,N,$,G,b,Te),W.transparent===!0&&W.side===rn&&W.forceSinglePass===!1?(W.side=Xt,W.needsUpdate=!0,R.renderBufferDirect($,N,G,W,b,Te),W.side=hi,W.needsUpdate=!0,R.renderBufferDirect($,N,G,W,b,Te),W.side=rn):R.renderBufferDirect($,N,G,W,b,Te),b.onAfterRender(R,N,$,G,W,Te)}function Yr(b,N,$){N.isScene!==!0&&(N=Ne);let G=Y.get(b),W=v.state.lights,Te=v.state.shadowsArray,Re=W.state.version,we=ye.getParameters(b,W.state,Te,N,$,v.state.lightProbeGridArray),Pe=ye.getProgramCacheKey(we),De=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=pe.get(b.envMap||G.environment,$e),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",vn),De=new Map,G.programs=De);let tt=De.get(Pe);if(tt!==void 0){if(G.currentProgram===tt&&G.lightsStateVersion===Re)return ih(b,we),tt}else we.uniforms=ye.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,$,we),b.onBeforeCompile(we,R),tt=ye.acquireProgram(we,Pe),De.set(Pe,tt),G.uniforms=we.uniforms;let Ie=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=Fe.uniform),ih(b,we),G.needsLights=Ld(b),G.lightsStateVersion=Re,G.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.sunLights.value=W.state.sun,Ie.sunLightShadows.value=W.state.sunShadow,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.sunShadowMatrix.value=W.state.sunShadowMatrix,Ie.sunShadowCascade.value=W.state.sunShadowCascade,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=v.state.lightProbeGridArray.length>0,G.currentProgram=tt,G.uniformsList=null,tt}function nh(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=gs.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ih(b,N){let $=Y.get(b);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function Rd(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let $=0,G=b.length;$<G;$++){let W=b[$];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Pd(b,N,$,G,W){N.isScene!==!0&&(N=Ne),Q.resetTextureUnits();let Te=N.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,we=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=pe.get(G.envMap||Re,Pe),$e=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,tt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color,vt=gn;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(vt=R.toneMapping);let mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=mt!==void 0?mt.length:0,Ce=Y.get(G),Ht=v.state.lights;if(oe===!0&&(he===!0||b!==H)){let xt=b===H&&G.id===F;Fe.setState(G,b,xt)}let at=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ht.state.version||Ce.outputColorSpace!==we||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==De||G.fog===!0&&Ce.fog!==Te||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Fe.numPlanes||Ce.numIntersection!==Fe.numIntersection)||Ce.vertexAlphas!==$e||Ce.vertexTangents!==tt||Ce.morphTargets!==Ie||Ce.morphNormals!==ct||Ce.morphColors!==Tt||Ce.toneMapping!==vt||Ce.morphTargetsCount!==Ft||!!Ce.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ce.__version=G.version);let an=Ce.currentProgram;at===!0&&(an=Yr(G,N,W),O&&G.isNodeMaterial&&O.onUpdateProgram(G,an,Ce));let bn=!1,Xn=!1,Ii=!1,pt=an.getUniforms(),Et=Ce.uniforms;if(y.useProgram(an.program)&&(bn=!0,Xn=!0,Ii=!0),G.id!==F&&(F=G.id,Xn=!0),Ce.needsLights){let xt=Rd(v.state.lightProbeGridArray,W);Ce.lightProbeGrid!==xt&&(Ce.lightProbeGrid=xt,Xn=!0)}if(bn||H!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",b.projectionMatrix),pt.setValue(L,"viewMatrix",b.matrixWorldInverse);let qn=pt.map.cameraPosition;qn!==void 0&&qn.setValue(L,ge.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,Xn=!0,Ii=!0)}if(Ce.needsLights&&(Ht.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",Ht.state.sunShadowMap,Q),Ht.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Ht.state.directionalShadowMap,Q),Ht.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Ht.state.spotShadowMap,Q),Ht.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Ht.state.pointShadowMap,Q)),W.isSkinnedMesh){pt.setOptional(L,W,"bindMatrix"),pt.setOptional(L,W,"bindMatrixInverse");let xt=W.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(L,"boneTexture",xt.boneTexture,Q))}W.isBatchedMesh&&(pt.setOptional(L,W,"batchingTexture"),pt.setValue(L,"batchingTexture",W._matricesTexture,Q),pt.setOptional(L,W,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",W._indirectTexture,Q),pt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",W._colorsTexture,Q));let Yn=$.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&U.update(W,$,an),(Xn||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,pt.setValue(L,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Et.envMapIntensity.value=N.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=tx()),Xn){if(pt.setValue(L,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Id(Et,Ii),Te&&G.fog===!0&&Ue.refreshFogUniforms(Et,Te),Ue.refreshMaterialUniforms(Et,G,B,K,v.state.transmissionRenderTarget[b.id]),Ce.needsLights&&Ce.lightProbeGrid){let xt=Ce.lightProbeGrid;Et.probesSH.value=xt.texture,Et.probesMin.value.copy(xt.boundingBox.min),Et.probesMax.value.copy(xt.boundingBox.max),Et.probesResolution.value.copy(xt.resolution)}gs.upload(L,nh(Ce),Et,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(gs.upload(L,nh(Ce),Et,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(L,"center",W.center),pt.setValue(L,"modelViewMatrix",W.modelViewMatrix),pt.setValue(L,"normalMatrix",W.normalMatrix),pt.setValue(L,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let xt=G.uniformsGroups;for(let qn=0,Li=xt.length;qn<Li;qn++){let rh=xt[qn];ae.update(rh,an),ae.bind(rh,an)}}return an}function Id(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Ld(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,N,$){let G=Y.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Y.get(b.texture).__webglTexture=N,Y.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let $=Y.get(b);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,$=0){re=b,j=N,J=$;let G=null,W=!1,Te=!1;if(b){let we=Y.get(b);if(we.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),Z.copy(b.viewport),de.copy(b.scissor),ce=b.scissorTest,y.viewport(Z),y.scissor(de),y.setScissorTest(ce),F=-1;return}else if(we.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(we.__hasExternalTextures)Q.rebindTextures(b,Y.get(b.texture).__webglTexture,Y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let $e=b.depthTexture;if(we.__boundDepthTexture!==$e){if($e!==null&&Y.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}let Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let De=Y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[N])?G=De[N][$]:G=De[N],W=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?G=Y.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[$]:G=De,Z.copy(b.viewport),de.copy(b.scissor),ce=b.scissorTest}else Z.copy(se).multiplyScalar(B).floor(),de.copy(xe).multiplyScalar(B).floor(),ce=Ke;if($!==0&&(G=V),y.bindFramebuffer(L.FRAMEBUFFER,G)&&y.drawBuffers(b,G),y.viewport(Z),y.scissor(de),y.setScissorTest(ce),W){let we=Y.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,$)}else if(Te){let we=N;for(let Pe=0;Pe<b.textures.length;Pe++){let De=Y.get(b.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,De.__webglTexture,$,we)}}else if(b!==null&&$!==0){let we=Y.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,$)}F=-1};function sh(b){let N=Y.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=A.textureFormatReadable(b.format),N.__typeReadable=A.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,$,G,W,Te,Re,we=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){y.bindFramebuffer(L.FRAMEBUFFER,Pe);try{let De=b.textures[we],$e=De.format,tt=De.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let Ie=sh(De);if(Ie.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&$>=0&&$<=b.height-W&&L.readPixels(N,$,G,W,Se.convert($e),Se.convert(tt),Te)}finally{let De=re!==null?Y.get(re).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,N,$,G,W,Te,Re,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(N>=0&&N<=b.width-G&&$>=0&&$<=b.height-W){y.bindFramebuffer(L.FRAMEBUFFER,Pe);let De=b.textures[we],$e=De.format,tt=De.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we);let Ie=sh(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,Te.byteLength,L.STREAM_READ),L.readPixels(N,$,G,W,Se.convert($e),Se.convert(tt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Tt=re!==null?Y.get(re).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Tt);let vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Eu(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Te),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ct),L.deleteSync(vt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,$=0){let G=Math.pow(2,-$),W=Math.floor(b.image.width*G),Te=Math.floor(b.image.height*G),Re=N!==null?N.x:0,we=N!==null?N.y:0;Q.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,Re,we,W,Te),y.unbindTexture()},this.copyTextureToTexture=function(b,N,$=null,G=null,W=0,Te=0){let Re,we,Pe,De,$e,tt,Ie,ct,Tt,vt=b.isCompressedTexture?b.mipmaps[Te]:b.image;if($!==null)Re=$.max.x-$.min.x,we=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,$e=$.min.y,tt=$.isBox3?$.min.z:0;else{let Et=Math.pow(2,-W);Re=Math.floor(vt.width*Et),we=Math.floor(vt.height*Et),b.isDataArrayTexture?Pe=vt.depth:b.isData3DTexture?Pe=Math.floor(vt.depth*Et):Pe=1,De=0,$e=0,tt=0}G!==null?(Ie=G.x,ct=G.y,Tt=G.z):(Ie=0,ct=0,Tt=0);let mt=Se.convert(N.format),Ft=Se.convert(N.type),Ce;N.isData3DTexture?(Q.setTexture3D(N,0),Ce=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Q.setTexture2DArray(N,0),Ce=L.TEXTURE_2D_ARRAY):(Q.setTexture2D(N,0),Ce=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Ht=y.getParameter(L.UNPACK_ROW_LENGTH),at=y.getParameter(L.UNPACK_IMAGE_HEIGHT),an=y.getParameter(L.UNPACK_SKIP_PIXELS),bn=y.getParameter(L.UNPACK_SKIP_ROWS),Xn=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,De),y.pixelStorei(L.UNPACK_SKIP_ROWS,$e),y.pixelStorei(L.UNPACK_SKIP_IMAGES,tt);let Ii=b.isDataArrayTexture||b.isData3DTexture,pt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let Et=Y.get(b),Yn=Y.get(N),xt=Y.get(Et.__renderTarget),qn=Y.get(Yn.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Li=0;Li<Pe;Li++)Ii&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(b).__webglTexture,W,tt+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(N).__webglTexture,Te,Tt+Li)),L.blitFramebuffer(De,$e,Re,we,Ie,ct,Re,we,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Y.has(b)){let Et=Y.get(b),Yn=Y.get(N);y.bindFramebuffer(L.READ_FRAMEBUFFER,D),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let xt=0;xt<Pe;xt++)Ii?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,W,tt+xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,W),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Yn.__webglTexture,Te,Tt+xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Yn.__webglTexture,Te),W!==0?L.blitFramebuffer(De,$e,Re,we,Ie,ct,Re,we,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(Ce,Te,Ie,ct,Tt+xt,De,$e,Re,we):L.copyTexSubImage2D(Ce,Te,Ie,ct,De,$e,Re,we);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ce,Te,Ie,ct,Tt,Re,we,Pe,mt,Ft,vt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,Te,Ie,ct,Tt,Re,we,Pe,mt,vt.data):L.texSubImage3D(Ce,Te,Ie,ct,Tt,Re,we,Pe,mt,Ft,vt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Te,Ie,ct,Re,we,mt,Ft,vt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Te,Ie,ct,vt.width,vt.height,mt,vt.data):L.texSubImage2D(L.TEXTURE_2D,Te,Ie,ct,Re,we,mt,Ft,vt);y.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at),y.pixelStorei(L.UNPACK_SKIP_PIXELS,an),y.pixelStorei(L.UNPACK_SKIP_ROWS,bn),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Xn),Te===0&&N.generateMipmaps&&L.generateMipmap(Ce),y.unbindTexture()},this.initRenderTarget=function(b){Y.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){j=0,J=0,re=null,y.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var cd={type:"change"},Yc={type:"start"},ud={type:"end"},rl=new Qn,hd=new jt,ix=Math.cos(70*Ec.DEG2RAD),It=new I,Zt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xc=1e-6,al=class extends fr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new en,this._lastTargetPosition=new I,this._quat=new en().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new I,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new I,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rx.bind(this),this._onPointerDown=sx.bind(this),this._onPointerUp=ax.bind(this),this._onContextMenu=fx.bind(this),this._onMouseWheel=cx.bind(this),this._onKeyDown=hx.bind(this),this._onTouchStart=ux.bind(this),this._onTouchMove=dx.bind(this),this._onMouseDown=ox.bind(this),this._onMouseMove=lx.bind(this),this._interceptControlDown=px.bind(this),this._interceptControlUp=gx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=It.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<ix?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xc||this._lastTargetPosition.distanceToSquared(this.target)>Xc?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function sx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function rx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ax(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ox(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Yc)}function lx(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Yc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ud))}function hx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Yc)}function dx(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function fx(i){this.enabled!==!1&&i.preventDefault()}function px(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Tr=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=dd(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=dd(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function dd(i,e){return i<=9?e:i>=10&&i<=59?parseFloat(e):i>=60&&i<=99?parseInt(e):i>=100&&i<=109?e:i>=110&&i<=149?parseFloat(e):i>=160&&i<=179?parseInt(e):i>=210&&i<=239?parseFloat(e):i>=270&&i<=289?parseInt(e):i>=290&&i<=299?_x(e):i>=300&&i<=369?e:i>=370&&i<=389?parseInt(e):i>=390&&i<=399?e:i>=400&&i<=409?parseInt(e):i>=410&&i<=419?e:i>=420&&i<=429?parseInt(e):i>=430&&i<=439?e:i>=440&&i<=459?parseInt(e):i>=460&&i<=469?parseFloat(e):i>=470&&i<=481||i===999||i>=1e3&&i<=1009?e:i>=1010&&i<=1059?parseFloat(e):i>=1060&&i<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:i,value:e}),e)}function _x(i){if(i==="0")return!1;if(i==="1")return!0;throw TypeError("String '"+i+"' cannot be cast to Boolean type")}var ol=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function xx(i){return ol[i]}function Xe(i){let e={};i.rewind();let t=i.next(),n=t.code;if(e.x=t.value,n+=10,t=i.next(),t.code!=n)throw new Error("Expected code for point value to be "+n+" but got "+t.code+".");return e.y=t.value,n+=10,t=i.next(),t.code!=n?(i.rewind(),e):(e.z=t.value,e)}function ot(i,e,t){switch(e.code){case 0:i.type=e.value;break;case 5:i.handle=e.value;break;case 6:i.lineType=e.value;break;case 8:i.layer=e.value;break;case 48:i.lineTypeScale=e.value;break;case 60:i.visible=e.value===0;break;case 62:i.colorIndex=e.value,i.color=xx(Math.abs(e.value));break;case 67:i.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:i.ownerHandle=e.value;break;case 347:i.materialObjectHandle=e.value;break;case 370:i.lineweight=e.value;break;case 420:i.color=e.value;break;case 1e3:i.extendedData=i.extendedData||{},i.extendedData.customStrings=i.extendedData.customStrings||[],i.extendedData.customStrings.push(e.value);break;case 1001:i.extendedData=i.extendedData||{},i.extendedData.applicationName=e.value;break;default:return!1}return!0}var Ar=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:n.vertices=yx(e,t),t=e.lastReadGroup;break;default:ot(n,t,e);break}t=e.next()}return n}};function yx(i,e){var t=[],n=!1,s=!1,r=4;for(let a=0;a<=r;a++){for(var o={};!i.isEOF()&&!(e.code===0||s);){switch(e.code){case 10:case 11:case 12:case 13:if(n){s=!0;continue}o.x=e.value,n=!0;break;case 20:case 21:case 22:case 23:o.y=e.value;break;case 30:case 31:case 32:case 33:o.z=e.value;break;default:return t}e=i.next()}t.push(o),n=!1,s=!1}return i.rewind(),t}var Cr=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Xe(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:n.endAngle=Math.PI/180*t.value,n.angleLength=n.endAngle-n.startAngle;break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var Rr=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var n={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:n.text=t.value;break;case 2:n.tag=t.value;break;case 3:n.prompt=t.value;break;case 7:n.textStyle=t.value;break;case 10:n.startPoint=Xe(e);break;case 11:n.endPoint=Xe(e);break;case 39:n.thickness=t.value;break;case 40:n.textHeight=t.value;break;case 41:n.scale=t.value;break;case 50:n.rotation=t.value;break;case 51:n.obliqueAngle=t.value;break;case 70:n.invisible=!!(t.value&1),n.constant=!!(t.value&2),n.verificationRequired=!!(t.value&4),n.preset=!!(t.value&8);break;case 71:n.backwards=!!(t.value&2),n.mirrored=!!(t.value&4);break;case 72:n.horizontalJustification=t.value;break;case 73:n.fieldLength=t.value;break;case 74:n.verticalJustification=t.value;break;case 100:break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var Pr=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Xe(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:let s=Math.PI/180*t.value;s<n.startAngle?n.angleLength=s+2*Math.PI-n.startAngle:n.angleLength=s-n.startAngle,n.endAngle=s;break;default:ot(n,t,e);break}t=e.next()}return n}};var Ir=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.block=t.value;break;case 10:n.anchorPoint=Xe(e);break;case 11:n.middleOfText=Xe(e);break;case 12:n.insertionPoint=Xe(e);break;case 13:n.linearOrAngularPoint1=Xe(e);break;case 14:n.linearOrAngularPoint2=Xe(e);break;case 15:n.diameterOrRadiusPoint=Xe(e);break;case 16:n.arcPoint=Xe(e);break;case 70:n.dimensionType=t.value;break;case 71:n.attachmentPoint=t.value;break;case 42:n.actualMeasurement=t.value;break;case 1:n.text=t.value;break;case 50:n.angle=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var Lr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Xe(e);break;case 11:n.majorAxisEndPoint=Xe(e);break;case 40:n.axisRatio=t.value;break;case 41:n.startAngle=t.value;break;case 42:n.endAngle=t.value;break;case 2:n.name=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var Dr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.name=t.value;break;case 41:n.xScale=t.value;break;case 42:n.yScale=t.value;break;case 43:n.zScale=t.value;break;case 10:n.position=Xe(e);break;case 50:n.rotation=t.value;break;case 70:n.columnCount=t.value;break;case 71:n.rowCount=t.value;break;case 44:n.columnSpacing=t.value;break;case 45:n.rowSpacing=t.value;break;case 210:n.extrusionDirection=Xe(e);break;default:ot(n,t,e);break}t=e.next()}return n}};var Nr=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.vertices.unshift(Xe(e));break;case 11:n.vertices.push(Xe(e));break;case 210:n.extrusionDirection=Xe(e);break;case 100:break;default:ot(n,t,e);break}t=e.next()}return n}};var Ur=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let n={type:t.value,vertices:[]},s=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:n.elevation=t.value;break;case 39:n.depth=t.value;break;case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:s=t.value;break;case 10:n.vertices=vx(s,e);break;case 43:t.value!==0&&(n.width=t.value);break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};function vx(i,e){if(!i||i<=0)throw Error("n must be greater than 0 verticies");let t=[],n=!1,s=!1,r=e.lastReadGroup;for(let o=0;o<i;o++){let a={};for(;!e.isEOF()&&!(r.code===0||s);){switch(r.code){case 10:if(n){s=!0;continue}a.x=r.value,n=!0;break;case 20:a.y=r.value;break;case 30:a.z=r.value;break;case 40:a.startWidth=r.value;break;case 41:a.endWidth=r.value;break;case 42:r.value!=0&&(a.bulge=r.value);break;default:return e.rewind(),n&&t.push(a),e.rewind(),t}r=e.next()}t.push(a),n=!1,s=!1}return e.rewind(),t}var Fr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:n.text?n.text+=t.value:n.text=t.value;break;case 1:n.text?n.text+=t.value:n.text=t.value;break;case 10:n.position=Xe(e);break;case 11:n.directionVector=Xe(e);break;case 40:n.height=t.value;break;case 41:n.width=t.value;break;case 50:n.rotation=t.value;break;case 71:n.attachmentPoint=t.value;break;case 72:n.drawingDirection=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var Or=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let s={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:s.position=Xe(e);break;case 39:s.thickness=t.value;break;case 210:s.extrusionDirection=Xe(e);break;case 100:break;default:ot(s,t,e);break}t=e.next()}return s}};var Br=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.x=t.value;break;case 20:n.y=t.value;break;case 30:n.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(n.bulge=t.value);break;case 70:n.curveFittingVertex=(t.value&1)!==0,n.curveFitTangent=(t.value&2)!==0,n.splineVertex=(t.value&8)!==0,n.splineControlPoint=(t.value&16)!==0,n.threeDPolylineVertex=(t.value&32)!==0,n.threeDPolylineMesh=(t.value&64)!==0,n.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:n.faceA=t.value;break;case 72:n.faceB=t.value;break;case 73:n.faceC=t.value;break;case 74:n.faceD=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var kr=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:n.thickness=t.value;break;case 40:break;case 41:break;case 70:n.shape=(t.value&1)!==0,n.includesCurveFitVertices=(t.value&2)!==0,n.includesSplineFitVertices=(t.value&4)!==0,n.is3dPolyline=(t.value&8)!==0,n.is3dPolygonMesh=(t.value&16)!==0,n.is3dPolygonMeshClosed=(t.value&32)!==0,n.isPolyfaceMesh=(t.value&64)!==0,n.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:n.extrusionDirection=Xe(e);break;default:ot(n,t,e);break}t=e.next()}return n.vertices=bx(e,t),n}};function bx(i,e){let t=new Br,n=[];for(;!i.isEOF();)if(e.code===0){if(e.value==="VERTEX")n.push(t.parseEntity(i,e)),e=i.lastReadGroup;else if(e.value==="SEQEND"){Sx(i,e);break}}return n}function Sx(i,e){let t={type:e.value};for(e=i.next();!i.isEOF()&&e.code!=0;)ot(t,e,i),e=i.next();return t}var zr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let n={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.points[0]=Xe(e);break;case 11:n.points[1]=Xe(e);break;case 12:n.points[2]=Xe(e);break;case 13:n.points[3]=Xe(e);break;case 210:n.extrusionDirection=Xe(e);break;default:ot(n,t,e);break}t=e.next()}return n}};var Vr=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.controlPoints||(n.controlPoints=[]),n.controlPoints.push(Xe(e));break;case 11:n.fitPoints||(n.fitPoints=[]),n.fitPoints.push(Xe(e));break;case 12:n.startTangent=Xe(e);break;case 13:n.endTangent=Xe(e);break;case 40:n.knotValues||(n.knotValues=[]),n.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(n.closed=!0),(t.value&2)!=0&&(n.periodic=!0),(t.value&4)!=0&&(n.rational=!0),(t.value&8)!=0&&(n.planar=!0),(t.value&16)!=0&&(n.planar=!0,n.linear=!0);break;case 71:n.degreeOfSplineCurve=t.value;break;case 72:n.numberOfKnots=t.value;break;case 73:n.numberOfControlPoints=t.value;break;case 74:n.numberOfFitPoints=t.value;break;case 210:n.normalVector=Xe(e);break;default:ot(n,t,e);break}t=e.next()}return n}};var Hr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.startPoint=Xe(e);break;case 11:n.endPoint=Xe(e);break;case 40:n.textHeight=t.value;break;case 41:n.xScale=t.value;break;case 50:n.rotation=t.value;break;case 1:n.text=t.value;break;case 72:n.halign=t.value;break;case 73:n.valign=t.value;break;default:ot(n,t,e);break}t=e.next()}return n}};var it=zd(pd());it.default.setLevel("error");function Mx(i){i.registerEntityHandler(Ar),i.registerEntityHandler(Cr),i.registerEntityHandler(Rr),i.registerEntityHandler(Pr),i.registerEntityHandler(Ir),i.registerEntityHandler(Lr),i.registerEntityHandler(Dr),i.registerEntityHandler(Nr),i.registerEntityHandler(Ur),i.registerEntityHandler(Fr),i.registerEntityHandler(Or),i.registerEntityHandler(kr),i.registerEntityHandler(zr),i.registerEntityHandler(Vr),i.registerEntityHandler(Hr)}var xs=class{constructor(){this._entityHandlers={},Mx(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",n=this;return new Promise((s,r)=>{e.on("data",o=>{t+=o}),e.on("end",()=>{try{s(n._parse(t))}catch(o){r(o)}}),e.on("error",o=>{r(o)})})}_parse(e){let t={},n=0,s=e.split(/\r\n|\r|\n/g),r=new Tr(s);if(!r.hasNext())throw Error("Empty file");let o=this,a;function l(){for(a=r.next();!r.isEOF();)if(a.code===0&&a.value==="SECTION"){if(a=r.next(),a.code!==2){console.error("Unexpected code %s after 0:SECTION",md(a)),a=r.next();continue}a.value==="HEADER"?(it.default.debug("> HEADER"),t.header=c(),it.default.debug("<")):a.value==="BLOCKS"?(it.default.debug("> BLOCKS"),t.blocks=u(),it.default.debug("<")):a.value==="ENTITIES"?(it.default.debug("> ENTITIES"),t.entities=C(!1),it.default.debug("<")):a.value==="TABLES"?(it.default.debug("> TABLES"),t.tables=h(),it.default.debug("<")):a.value==="EOF"?it.default.debug("EOF"):it.default.warn("Skipping section '%s'",a.value)}else a=r.next()}function c(){let v=null,M=null,x={};for(a=r.next();;){if(Ln(a,0,"ENDSEC")){v&&(x[v]=M);break}else a.code===9?(v&&(x[v]=M),v=a.value):a.code===10?M={x:a.value}:a.code===20?M.y=a.value:a.code===30?M.z=a.value:M=a.value;a=r.next()}return a=r.next(),x}function u(){let v={};for(a=r.next();a.value!=="EOF"&&!Ln(a,0,"ENDSEC");)if(Ln(a,0,"BLOCK")){it.default.debug("block {");let M=d();it.default.debug("}"),E(M),M.name?v[M.name]=M:it.default.error('block with handle "'+M.handle+'" is missing a name.')}else Pi(a),a=r.next();return v}function d(){let v={};for(a=r.next();a.value!=="EOF";){switch(a.code){case 1:v.xrefPath=a.value,a=r.next();break;case 2:v.name=a.value,a=r.next();break;case 3:v.name2=a.value,a=r.next();break;case 5:v.handle=a.value,a=r.next();break;case 8:v.layer=a.value,a=r.next();break;case 10:v.position=_(a),a=r.next();break;case 67:v.paperSpace=!!(a.value&&a.value==1),a=r.next();break;case 70:a.value!=0&&(v.type=a.value),a=r.next();break;case 100:a=r.next();break;case 330:v.ownerHandle=a.value,a=r.next();break;case 0:if(a.value=="ENDBLK")break;v.entities=C(!0);break;default:Pi(a),a=r.next()}if(Ln(a,0,"ENDBLK")){a=r.next();break}}return v}function h(){let v={};for(a=r.next();a.value!=="EOF"&&!Ln(a,0,"ENDSEC");)Ln(a,0,"TABLE")?(a=r.next(),T[a.value]?(it.default.debug(a.value+" Table {"),v[T[a.value].tableName]=g(a),it.default.debug("}")):it.default.debug("Unhandled Table "+a.value)):a=r.next();return a=r.next(),v}let f="ENDTAB";function g(v){let M=T[v.value],x={},w=0;for(a=r.next();!Ln(a,0,f);)switch(a.code){case 5:x.handle=a.value,a=r.next();break;case 330:x.ownerHandle=a.value,a=r.next();break;case 100:a.value==="AcDbSymbolTable"||Pi(a),a=r.next();break;case 70:w=a.value,a=r.next();break;case 0:a.value===M.dxfSymbolName?x[M.tableRecordsProperty]=M.parseTableRecords():(Pi(a),a=r.next());break;default:Pi(a),a=r.next()}let R=x[M.tableRecordsProperty];if(R){let P=(()=>{if(R.constructor===Array)return R.length;if(typeof R=="object")return Object.keys(R).length})();w!==P&&it.default.warn("Parsed "+P+" "+M.dxfSymbolName+"'s but expected "+w)}return a=r.next(),x}function S(){let v=[],M={};for(it.default.debug("ViewPort {"),a=r.next();!Ln(a,0,f);)switch(a.code){case 2:M.name=a.value,a=r.next();break;case 10:M.lowerLeftCorner=_(a),a=r.next();break;case 11:M.upperRightCorner=_(a),a=r.next();break;case 12:M.center=_(a),a=r.next();break;case 13:M.snapBasePoint=_(a),a=r.next();break;case 14:M.snapSpacing=_(a),a=r.next();break;case 15:M.gridSpacing=_(a),a=r.next();break;case 16:M.viewDirectionFromTarget=_(a),a=r.next();break;case 17:M.viewTarget=_(a),a=r.next();break;case 42:M.lensLength=a.value,a=r.next();break;case 43:M.frontClippingPlane=a.value,a=r.next();break;case 44:M.backClippingPlane=a.value,a=r.next();break;case 45:M.viewHeight=a.value,a=r.next();break;case 50:M.snapRotationAngle=a.value,a=r.next();break;case 51:M.viewTwistAngle=a.value,a=r.next();break;case 79:M.orthographicType=a.value,a=r.next();break;case 110:M.ucsOrigin=_(a),a=r.next();break;case 111:M.ucsXAxis=_(a),a=r.next();break;case 112:M.ucsYAxis=_(a),a=r.next();break;case 110:M.ucsOrigin=_(a),a=r.next();break;case 281:M.renderMode=a.value,a=r.next();break;case 281:M.defaultLightingType=a.value,a=r.next();break;case 292:M.defaultLightingOn=a.value,a=r.next();break;case 330:M.ownerHandle=a.value,a=r.next();break;case 63:case 421:case 431:M.ambientColor=a.value,a=r.next();break;case 0:a.value==="VPORT"&&(it.default.debug("}"),v.push(M),it.default.debug("ViewPort {"),M={},a=r.next());break;default:Pi(a),a=r.next();break}return it.default.debug("}"),v.push(M),v}function p(){let v={},M={},x=0,w;for(it.default.debug("LType {"),a=r.next();!Ln(a,0,"ENDTAB");)switch(a.code){case 2:M.name=a.value,w=a.value,a=r.next();break;case 3:M.description=a.value,a=r.next();break;case 73:x=a.value,x>0&&(M.pattern=[]),a=r.next();break;case 40:M.patternLength=a.value,a=r.next();break;case 49:M.pattern.push(a.value),a=r.next();break;case 0:it.default.debug("}"),x>0&&x!==M.pattern.length&&it.default.warn("lengths do not match on LTYPE pattern"),v[w]=M,M={},it.default.debug("LType {"),a=r.next();break;default:a=r.next()}return it.default.debug("}"),v[w]=M,v}function m(){let v={},M={},x;for(it.default.debug("Layer {"),a=r.next();!Ln(a,0,"ENDTAB");)switch(a.code){case 2:M.name=a.value,x=a.value,a=r.next();break;case 62:M.visible=a.value>=0,M.colorIndex=Math.abs(a.value),M.color=Ex(M.colorIndex),a=r.next();break;case 70:M.frozen=(a.value&1)!=0||(a.value&2)!=0,a=r.next();break;case 0:a.value==="LAYER"&&(it.default.debug("}"),v[x]=M,it.default.debug("Layer {"),M={},x=void 0,a=r.next());break;default:Pi(a),a=r.next();break}return it.default.debug("}"),v[x]=M,v}let T={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:S},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:p},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:m}};function C(v){let M=[],x=v?"ENDBLK":"ENDSEC";for(v||(a=r.next());;)if(a.code===0){if(a.value===x)break;let w=o._entityHandlers[a.value];if(w!=null){it.default.debug(a.value+" {");let R=w.parseEntity(r,a);a=r.lastReadGroup,it.default.debug("}"),E(R),M.push(R)}else{it.default.warn("Unhandled entity "+a.value),a=r.next();continue}}else a=r.next();return x=="ENDSEC"&&(a=r.next()),M}function _(v){let M={},x=v.code;if(M.x=v.value,x+=10,v=r.next(),v.code!=x)throw new Error("Expected code for point value to be "+x+" but got "+v.code+".");return M.y=v.value,x+=10,v=r.next(),v.code!=x?(r.rewind(),M):(M.z=v.value,M)}function E(v){if(!v)throw new TypeError("entity cannot be undefined or null");v.handle||(v.handle=n++)}return l(),t}};function Ln(i,e,t){return i.code===e&&i.value===t}function Pi(i){it.default.debug("unhandled group "+md(i))}function md(i){return i.code+":"+i.value}function Ex(i){return ol[i]}var gd=xs;var wx=[["racks",/rack|shelf|shelv|pallet|stowage|货架|货位|托盘/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|通道|走道|输送/],["zones",/zone|area|region|区|区域|库区/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|小车|叉车|穿梭|堆垛|提升|转台/]];function Tx(i){let t=(String(i&&i.layer||"")+" "+String(i&&i.block||"")).toLowerCase();for(let n of wx)if(n[1].test(t))return n[0];return null}function Dn(i){if(i===null||typeof i!="object"||typeof i.x!="number")return null;let e={x:i.x,y:typeof i.y=="number"?i.y:0};return typeof i.z=="number"&&(e.z=i.z),e}function Gr(i){return(Array.isArray(i)?i:[]).map(Dn).filter(e=>e!==null)}function Ax(i){let e={type:i.type,layer:i.layer||"0"};switch(i.handle!==void 0&&(e.handle=String(i.handle)),i.type){case"LINE":e.vertices=Gr(i.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=Gr(i.vertices),e.closed=i.shape===!0,typeof i.width=="number"&&(e.width=i.width);break;case"ARC":e.center=Dn(i.center),e.radius=i.radius,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"CIRCLE":e.center=Dn(i.center),e.radius=i.radius;break;case"ELLIPSE":e.center=Dn(i.center),e.majorAxisEndPoint=Dn(i.majorAxisEndPoint),e.axisRatio=i.axisRatio,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"TEXT":e.text=typeof i.text=="string"?i.text:"",e.position=Dn(i.startPoint),typeof i.textHeight=="number"&&(e.height=i.textHeight),typeof i.rotation=="number"&&(e.rotation=i.rotation);break;case"MTEXT":e.text=typeof i.text=="string"?i.text:"",e.position=Dn(i.position),typeof i.height=="number"&&(e.height=i.height);break;case"INSERT":e.block=typeof i.name=="string"?i.name:null,e.position=Dn(i.position),typeof i.rotation=="number"&&(e.rotation=i.rotation),typeof i.xScale=="number"&&i.xScale!==1&&(e.xScale=i.xScale),typeof i.yScale=="number"&&i.yScale!==1&&(e.yScale=i.yScale);break;case"POINT":e.position=Dn(i.position);break;case"SOLID":e.points=Gr(i.points);break;case"SPLINE":e.controlPoints=Gr(i.controlPoints),e.fitPoints=Gr(i.fitPoints);break;default:break}return e}function Cx(i){let e=i&&i.tables&&i.tables.layer&&i.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function Rx(i){let e=i&&i.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:Dn(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}function Px(i,e,t){let s=[],r=[],o=[],a=[],l=[],c=!1,u={racks:s,aisles:r,zones:o,agvs:a},d={racks:0,aisles:0,zones:0,agvs:0},h=0;for(let E of i.entities||[]){if(l.length>=5e4){c=!0;break}let v=Ax(E);l.push(v);let M=Tx(v);if(M===null){v.type!=="TEXT"&&v.type!=="MTEXT"&&(h+=1);continue}d[M]+=1,u[M].push(Object.assign({id:M.slice(0,-1)+"-"+d[M]},v))}let f={},g={},S=1/0,p=1/0,m=-1/0,T=-1/0;for(let E of l){f[E.layer]=(f[E.layer]||0)+1,g[E.type]=(g[E.type]||0)+1;let v=M=>{M&&(S=Math.min(S,M.x),p=Math.min(p,M.y),m=Math.max(m,M.x),T=Math.max(T,M.y))};v(E.position),v(E.center);for(let M of E.vertices||[])v(M);for(let M of(E.controlPoints||[]).concat(E.fitPoints||[],E.points||[]))v(M)}let C=S<1/0?{width:m-S,height:T-p}:null,_=Cx(i).map(E=>Object.assign({},E,{count:f[E.name]||0}));for(let E of Object.keys(f))_.some(v=>v.name===E)||_.push({name:E,color:null,colorIndex:null,visible:!0,frozen:!1,count:f[E]});return{racks:s,aisles:r,zones:o,agvs:a,entities:l,layers:_,meta:{source:e,format:t,blocks:Rx(i),entityCount:l.length,unclassified:h,truncated:c,byType:g,span:C}}}function cl(i,e,t){let n;try{n=new gd().parseSync(i)}catch(s){throw new Error("DXF \u89E3\u6790\u5931\u8D25: "+(s&&s.message?s.message:String(s)))}if(n===null||typeof n!="object"||!Array.isArray(n.entities))throw new Error("DXF \u89E3\u6790\u5931\u8D25: \u89E3\u6790\u5668\u672A\u8FD4\u56DE\u5B9E\u4F53\u8868");return Px(n,e,t||"dxf")}var q=require("react/jsx-runtime"),Ix=["slots"],Jc={racks:16347926,aisles:9741240,zones:2278750,agvs:15680580},Sd={racks:"\u8D27\u67B6",aisles:"\u901A\u9053",zones:"\u533A\u57DF",agvs:"AGV"},hl=6,qc={racks:[],aisles:[],zones:[],agvs:[],entities:[],layers:[]},_d=[6333946,16347926,3462041,16020150,10980346,16436245,2282478,16478597,4906624,8490232,16622767,3718648,16628340,12616956,8843180,16557477];function Lx(i){let e=String(i||"0"),t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return _d[t%_d.length]}var Dx=[[/crane|elevat|lift|hoist|stacker|货架|堆垛|提升/,11],[/platform|conveyor|belt|roller|输送|转台/,1.5],[/shuttle|vehicle|agv|amr|rgv|trolley|小车|叉车|穿梭/,.8],[/rack|shelf|shelv|pallet|托盘/,6]];function Nx(i){let e=String(i||"").toLowerCase();for(let t of Dx)if(t[0].test(e))return t[1];return 1}function ys(i,e,t){let s=(Array.isArray(i.layers)?i.layers:[]).find(r=>r&&r.name===e);return s&&typeof s.color=="number"&&s.color>0?s.color:Lx(e)}function Md(i){let e=new Mi;return i.forEach((t,n)=>{n===0?e.moveTo(t.x,t.y):e.lineTo(t.x,t.y)}),e}function Ux(i,e,t){let n=new ir(Md(i),{depth:e,bevelEnabled:!1});n.rotateX(-Math.PI/2);let s=new Ct(n,new si({color:t}));return s.position.y=i[0]&&i[0].z||0,s}function Fx(i,e){let t=new sr(Md(i));t.rotateX(-Math.PI/2);let n=new Ct(t,new Gn({color:e,transparent:!0,opacity:.28,side:rn}));return n.position.y=(i[0]&&i[0].z||0)+.05,n}function Zc(i,e,t){let n=i.map(s=>new I(s.x,(s.z||0)+.12,-s.y));return t&&n.length>2&&n.push(n[0].clone()),new Si(new wt().setFromPoints(n),new ei({color:e}))}function xd(i,e,t,n,s){let o=new ii(i.x,i.y,e,e,-n,-t,!1).getPoints(48).map(a=>new I(a.x,(i.z||0)+.12,-a.y));return new Si(new wt().setFromPoints(o),new ei({color:s}))}function yd(i,e,t){let n=ys(t,i.layer,Jc[e]||9741240);switch(i.type){case"INSERT":{let s=e==="agvs"?1.2:2.4,r=e==="agvs"?.8:hl,o=e==="agvs"?.8:1.2,a=new Ct(new ni(s,r,o),new si({color:n})),l=i.position||{x:0,y:0};return a.position.set(l.x,r/2+(l.z||0),-l.y),a}case"CIRCLE":{let s=i.center||{x:0,y:0};if(e==="zones")return xd(s,i.radius||1,0,Math.PI*2,n);let r=new Ct(new Zs(i.radius||1,i.radius||1,hl,24),new si({color:n}));return r.position.set(s.x,hl/2+(s.z||0),-s.y),r}case"LWPOLYLINE":case"POLYLINE":{let s=Array.isArray(i.vertices)?i.vertices:[];return s.length<2?null:e==="zones"?i.closed?Fx(s,n):Zc(s,n,!1):i.closed?Ux(s,hl,n):Zc(s,n,!1)}case"LINE":return Zc(Array.isArray(i.vertices)?i.vertices:[],n,!1);case"ARC":return xd(i.center||{x:0,y:0},i.radius||1,i.startAngle||0,i.endAngle||Math.PI,n);default:return null}}function Ed({scene:i,selectedId:e,onSelect:t,hiddenCats:n,hiddenLayers:s}){let r=(0,st.useRef)(null),o=(0,st.useRef)([]);return(0,st.useEffect)(()=>{let a=r.current;if(!a)return;let l=a.clientWidth||640,c=Math.max(a.clientHeight||0,320),u=new nl({antialias:!0});u.setPixelRatio(window.devicePixelRatio||1),u.setSize(l,c),a.appendChild(u.domElement);let d=new zs;d.background=new Ze(988970);let h=new kt(50,l/c,.1,1e4),f=new al(h,u.domElement);f.enableDamping=!0,f.autoRotate=!0,f.autoRotateSpeed=.8,d.add(new hr(16777215,.55)),d.add(new or(12571903,725536,.5));let g=new zn,S=[],p=n||{},m=s||{},T={},C=new Set,_=(B,X,me,se)=>{let xe=String(B)+"|"+String(X);T[xe]||(T[xe]={cat:B,layer:X,pts:[]}),T[xe].pts.push(me,se)},E=(B,X,me)=>{let se=me.vertices||[];for(let xe=0;xe+1<se.length;xe++)_(B,X,se[xe],se[xe+1]);me.closed&&se.length>2&&_(B,X,se[se.length-1],se[0])};for(let B of["racks","aisles","zones","agvs"])if(!p[B])for(let X of i[B]||[]){if(m[X.layer])continue;if(X.handle!=null&&C.add(X.handle),X.type==="LINE"||X.type==="LWPOLYLINE"||X.type==="POLYLINE"){E(B,X.layer,X);continue}let me=yd(X,B,i);me&&(me.traverse(se=>{se.userData.item=X,se.userData.category=B}),g.add(me),S.push(me))}let v=0;for(let B of i.entities||[]){if(B.handle!=null&&C.has(B.handle)||m[B.layer]||B.type==="TEXT"||B.type==="MTEXT")continue;if(B.type==="LINE"||B.type==="LWPOLYLINE"||B.type==="POLYLINE"){E(null,B.layer,B);continue}let X=Object.assign({id:"ent-"+ ++v},B),me=yd(X,null,i);me&&(me.traverse(se=>{se.userData.item=X,se.userData.category=null}),g.add(me),S.push(me))}for(let B of Object.keys(T)){let X=T[B],me=Nx(X.layer),se=new Ze(ys(i,X.layer,X.cat?Jc[X.cat]:9741240)),xe=se.clone().multiplyScalar(.22),Ke=[],ne=[];for(let he=0;he+1<X.pts.length;he+=2){let ue=X.pts[he],ge=X.pts[he+1],ke=ue.z||0,Ne=ge.z||0,He=[ue.x,ke,-ue.y],Ye=[ge.x,Ne,-ge.y],L=[ue.x,ke+me,-ue.y],rt=[ge.x,Ne+me,-ge.y];Ke.push(...He,...Ye,...rt,...He,...rt,...L),ne.push(xe.r,xe.g,xe.b,xe.r,xe.g,xe.b,se.r,se.g,se.b,xe.r,xe.g,xe.b,se.r,se.g,se.b,se.r,se.g,se.b)}let oe=new wt;oe.setAttribute("position",new ut(Ke,3)),oe.setAttribute("color",new ut(ne,3)),g.add(new Ct(oe,new Gn({vertexColors:!0,side:rn})))}d.add(g),o.current=S;let M=new An().setFromObject(g),x=M.isEmpty(),w=x?new I(0,0,0):M.getCenter(new I),R=x?new I(40,0,40):M.getSize(new I),P=Math.max(R.x,R.z,R.y,40);d.fog=new ks(988970,P*1.5,P*5);let O=new Ct(new wi(P*3,P*3),new si({color:1317931,roughness:1}));O.rotation.x=-Math.PI/2,O.position.set(w.x,-.02,w.z),d.add(O);let V=new dr(P*3,30,3359061,1976635);V.position.set(w.x,0,w.z),d.add(V);let D=new I(w.x+P*.8,P*1.5,w.z-P*.6),z=new Ct(new rr(Math.max(P*.06,1.5),24,24),new Gn({color:16770723}));z.position.copy(D),d.add(z);let j=document.createElement("canvas");j.width=64,j.height=64;let J=j.getContext("2d"),re=J.createRadialGradient(32,32,4,32,32,32);re.addColorStop(0,"rgba(255,236,179,0.95)"),re.addColorStop(.4,"rgba(255,220,150,0.35)"),re.addColorStop(1,"rgba(255,220,150,0)"),J.fillStyle=re,J.fillRect(0,0,64,64);let F=new Ws(new ss({map:new Ys(j),transparent:!0,depthWrite:!1}));F.scale.setScalar(Math.max(P*.5,8)),F.position.copy(D),d.add(F);let H=new cr(16773848,1.2);H.position.copy(D),H.target.position.copy(w),d.add(H),d.add(H.target),h.position.set(w.x+P*1,P*.55,w.z+P*1),f.target.copy(w),f.update();let Z=new ur;Z.params.Line.threshold=1.5;let de=new le,ce=B=>{let X=u.domElement.getBoundingClientRect();de.x=(B.clientX-X.left)/X.width*2-1,de.y=-((B.clientY-X.top)/X.height)*2+1,Z.setFromCamera(de,h);let me=Z.intersectObjects(S,!0);if(me.length>0){let se=me[0].object;t({item:se.userData.item||null,category:se.userData.category||null})}else t(null)},fe=()=>{f.autoRotate=!1,u.domElement.removeEventListener("pointerdown",fe)};u.domElement.addEventListener("pointerdown",fe),u.domElement.addEventListener("click",ce);let ze=new ResizeObserver(()=>{let B=a.clientWidth||l,X=Math.max(a.clientHeight||0,320);h.aspect=B/X,h.updateProjectionMatrix(),u.setSize(B,X)});ze.observe(a);let Be=0,K=()=>{Be=requestAnimationFrame(K),f.update(),u.render(d,h)};return K(),()=>{cancelAnimationFrame(Be),ze.disconnect(),u.domElement.removeEventListener("click",ce),f.dispose(),d.traverse(B=>{if(B.geometry&&B.geometry.dispose(),B.material){let X=Array.isArray(B.material)?B.material:[B.material];for(let me of X)me.map&&me.map.dispose(),me.dispose()}}),u.dispose(),u.domElement.parentNode===a&&a.removeChild(u.domElement),o.current=[]}},[i,n,s]),(0,st.useEffect)(()=>{for(let a of o.current)a.traverse(l=>{let c=l.material;if(c&&"emissive"in c){let u=e!==null&&l.userData.item&&l.userData.item.id===e;c.emissive.setHex(u?6710886:0)}})},[e]),(0,q.jsx)("div",{ref:r,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}async function Ox(i){let e=new Uint8Array(await i.arrayBuffer()),t="",n=32768;for(let s=0;s<e.length;s+=n)t+=String.fromCharCode.apply(null,e.subarray(s,s+n));return btoa(t)}function Bx(i,e,t,n){return new Promise((s,r)=>{let o=typeof n=="function"?n:()=>{};if(typeof Worker>"u"){o("\u89E3\u6790\u4E2D \xB7 \u4E3B\u7EBF\u7A0B\u56DE\u9000");try{s(cl(e,i,t))}catch(u){r(u)}return}let a="",l=null;try{a=URL.createObjectURL(new Blob([`(()=>{var ce=Object.create;var oe=Object.defineProperty;var be=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var he=Object.getPrototypeOf,ve=Object.prototype.hasOwnProperty;var ke=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ye=(n,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of de(e))!ve.call(n,p)&&p!==t&&oe(n,p,{get:()=>e[p],enumerable:!(a=be(e,p))||a.enumerable});return n};var ge=(n,e,t)=>(t=n!=null?ce(he(n)):{},ye(e||!n||!n.__esModule?oe(t,"default",{value:n,enumerable:!0}):t,n));var re=ke((se,ae)=>{(function(n,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof ae=="object"&&ae.exports?ae.exports=e():n.log=e()})(se,function(){"use strict";var n=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"],p={},i=null;function g(h,y){var u=h[y];if(typeof u.bind=="function")return u.bind(h);try{return Function.prototype.bind.call(u,h)}catch{return function(){return Function.prototype.apply.apply(u,[h,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function O(h){return h==="debug"&&(h="log"),typeof console===e?!1:h==="trace"&&t?o:console[h]!==void 0?g(console,h):console.log!==void 0?g(console,"log"):n}function L(){for(var h=this.getLevel(),y=0;y<a.length;y++){var u=a[y];this[u]=y<h?n:this.methodFactory(u,h,this.name)}if(this.log=this.debug,typeof console===e&&h<this.levels.SILENT)return"No console available for logging"}function R(h){return function(){typeof console!==e&&(L.call(this),this[h].apply(this,arguments))}}function I(h,y,u){return O(h)||R.apply(this,arguments)}function A(h,y){var u=this,C,w,P,v="loglevel";typeof h=="string"?v+=":"+h:typeof h=="symbol"&&(v=void 0);function k(b){var x=(a[b]||"silent").toUpperCase();if(!(typeof window===e||!v)){try{window.localStorage[v]=x;return}catch{}try{window.document.cookie=encodeURIComponent(v)+"="+x+";"}catch{}}}function r(){var b;if(!(typeof window===e||!v)){try{b=window.localStorage[v]}catch{}if(typeof b===e)try{var x=window.document.cookie,ee=encodeURIComponent(v),ne=x.indexOf(ee+"=");ne!==-1&&(b=/^([^;]+)/.exec(x.slice(ne+ee.length+1))[1])}catch{}return u.levels[b]===void 0&&(b=void 0),b}}function s(){if(!(typeof window===e||!v)){try{window.localStorage.removeItem(v)}catch{}try{window.document.cookie=encodeURIComponent(v)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function c(b){var x=b;if(typeof x=="string"&&u.levels[x.toUpperCase()]!==void 0&&(x=u.levels[x.toUpperCase()]),typeof x=="number"&&x>=0&&x<=u.levels.SILENT)return x;throw new TypeError("log.setLevel() called with invalid level: "+b)}u.name=h,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=y||I,u.getLevel=function(){return P??w??C},u.setLevel=function(b,x){return P=c(b),x!==!1&&k(P),L.call(u)},u.setDefaultLevel=function(b){w=c(b),r()||u.setLevel(b,!1)},u.resetLevel=function(){P=null,s(),L.call(u)},u.enableAll=function(b){u.setLevel(u.levels.TRACE,b)},u.disableAll=function(b){u.setLevel(u.levels.SILENT,b)},u.rebuild=function(){if(i!==u&&(C=c(i.getLevel())),L.call(u),i===u)for(var b in p)p[b].rebuild()},C=c(i?i.getLevel():"WARN");var E=r();E!=null&&(P=c(E)),L.call(u)}i=new A,i.getLogger=function(y){if(typeof y!="symbol"&&typeof y!="string"||y==="")throw new TypeError("You must supply a name when creating a logger.");var u=p[y];return u||(u=p[y]=new A(y,i.methodFactory)),u};var T=typeof window!==e?window.log:void 0;return i.noConflict=function(){return typeof window!==e&&window.log===i&&(window.log=T),i},i.getLoggers=function(){return p},i.default=i,i})});var _=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=ie(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=ie(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function ie(n,e){return n<=9?e:n>=10&&n<=59?parseFloat(e):n>=60&&n<=99?parseInt(e):n>=100&&n<=109?e:n>=110&&n<=149?parseFloat(e):n>=160&&n<=179?parseInt(e):n>=210&&n<=239?parseFloat(e):n>=270&&n<=289?parseInt(e):n>=290&&n<=299?xe(e):n>=300&&n<=369?e:n>=370&&n<=389?parseInt(e):n>=390&&n<=399?e:n>=400&&n<=409?parseInt(e):n>=410&&n<=419?e:n>=420&&n<=429?parseInt(e):n>=430&&n<=439?e:n>=440&&n<=459?parseInt(e):n>=460&&n<=469?parseFloat(e):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?e:n>=1010&&n<=1059?parseFloat(e):n>=1060&&n<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:e}),e)}function xe(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var te=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function me(n){return te[n]}function l(n){let e={};n.rewind();let t=n.next(),a=t.code;if(e.x=t.value,a+=10,t=n.next(),t.code!=a)throw new Error("Expected code for point value to be "+a+" but got "+t.code+".");return e.y=t.value,a+=10,t=n.next(),t.code!=a?(n.rewind(),e):(e.z=t.value,e)}function d(n,e,t){switch(e.code){case 0:n.type=e.value;break;case 5:n.handle=e.value;break;case 6:n.lineType=e.value;break;case 8:n.layer=e.value;break;case 48:n.lineTypeScale=e.value;break;case 60:n.visible=e.value===0;break;case 62:n.colorIndex=e.value,n.color=me(Math.abs(e.value));break;case 67:n.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:n.ownerHandle=e.value;break;case 347:n.materialObjectHandle=e.value;break;case 370:n.lineweight=e.value;break;case 420:n.color=e.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(e.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=e.value;break;default:return!1}return!0}var H=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let a={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:a.shape=(t.value&1)===1,a.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:a.vertices=Ee(e,t),t=e.lastReadGroup;break;default:d(a,t,e);break}t=e.next()}return a}};function Ee(n,e){var t=[],a=!1,p=!1,i=4;for(let o=0;o<=i;o++){for(var g={};!n.isEOF()&&!(e.code===0||p);){switch(e.code){case 10:case 11:case 12:case 13:if(a){p=!0;continue}g.x=e.value,a=!0;break;case 20:case 21:case 22:case 23:g.y=e.value;break;case 30:case 31:case 32:case 33:g.z=e.value;break;default:return t}e=n.next()}t.push(g),a=!1,p=!1}return n.rewind(),t}var M=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.center=l(e);break;case 40:a.radius=t.value;break;case 50:a.startAngle=Math.PI/180*t.value;break;case 51:a.endAngle=Math.PI/180*t.value,a.angleLength=a.endAngle-a.startAngle;break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var V=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var a={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:a.text=t.value;break;case 2:a.tag=t.value;break;case 3:a.prompt=t.value;break;case 7:a.textStyle=t.value;break;case 10:a.startPoint=l(e);break;case 11:a.endPoint=l(e);break;case 39:a.thickness=t.value;break;case 40:a.textHeight=t.value;break;case 41:a.scale=t.value;break;case 50:a.rotation=t.value;break;case 51:a.obliqueAngle=t.value;break;case 70:a.invisible=!!(t.value&1),a.constant=!!(t.value&2),a.verificationRequired=!!(t.value&4),a.preset=!!(t.value&8);break;case 71:a.backwards=!!(t.value&2),a.mirrored=!!(t.value&4);break;case 72:a.horizontalJustification=t.value;break;case 73:a.fieldLength=t.value;break;case 74:a.verticalJustification=t.value;break;case 100:break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var z=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.center=l(e);break;case 40:a.radius=t.value;break;case 50:a.startAngle=Math.PI/180*t.value;break;case 51:let p=Math.PI/180*t.value;p<a.startAngle?a.angleLength=p+2*Math.PI-a.startAngle:a.angleLength=p-a.startAngle,a.endAngle=p;break;default:d(a,t,e);break}t=e.next()}return a}};var B=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:a.block=t.value;break;case 10:a.anchorPoint=l(e);break;case 11:a.middleOfText=l(e);break;case 12:a.insertionPoint=l(e);break;case 13:a.linearOrAngularPoint1=l(e);break;case 14:a.linearOrAngularPoint2=l(e);break;case 15:a.diameterOrRadiusPoint=l(e);break;case 16:a.arcPoint=l(e);break;case 70:a.dimensionType=t.value;break;case 71:a.attachmentPoint=t.value;break;case 42:a.actualMeasurement=t.value;break;case 1:a.text=t.value;break;case 50:a.angle=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var U=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.center=l(e);break;case 11:a.majorAxisEndPoint=l(e);break;case 40:a.axisRatio=t.value;break;case 41:a.startAngle=t.value;break;case 42:a.endAngle=t.value;break;case 2:a.name=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var X=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:a.name=t.value;break;case 41:a.xScale=t.value;break;case 42:a.yScale=t.value;break;case 43:a.zScale=t.value;break;case 10:a.position=l(e);break;case 50:a.rotation=t.value;break;case 70:a.columnCount=t.value;break;case 71:a.rowCount=t.value;break;case 44:a.columnSpacing=t.value;break;case 45:a.rowSpacing=t.value;break;case 210:a.extrusionDirection=l(e);break;default:d(a,t,e);break}t=e.next()}return a}};var Y=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let a={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.vertices.unshift(l(e));break;case 11:a.vertices.push(l(e));break;case 210:a.extrusionDirection=l(e);break;case 100:break;default:d(a,t,e);break}t=e.next()}return a}};var j=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let a={type:t.value,vertices:[]},p=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:a.elevation=t.value;break;case 39:a.depth=t.value;break;case 70:a.shape=(t.value&1)===1,a.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:p=t.value;break;case 10:a.vertices=we(p,e);break;case 43:t.value!==0&&(a.width=t.value);break;case 210:a.extrusionDirectionX=t.value;break;case 220:a.extrusionDirectionY=t.value;break;case 230:a.extrusionDirectionZ=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};function we(n,e){if(!n||n<=0)throw Error("n must be greater than 0 verticies");let t=[],a=!1,p=!1,i=e.lastReadGroup;for(let g=0;g<n;g++){let o={};for(;!e.isEOF()&&!(i.code===0||p);){switch(i.code){case 10:if(a){p=!0;continue}o.x=i.value,a=!0;break;case 20:o.y=i.value;break;case 30:o.z=i.value;break;case 40:o.startWidth=i.value;break;case 41:o.endWidth=i.value;break;case 42:i.value!=0&&(o.bulge=i.value);break;default:return e.rewind(),a&&t.push(o),e.rewind(),t}i=e.next()}t.push(o),a=!1,p=!1}return e.rewind(),t}var G=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:a.text?a.text+=t.value:a.text=t.value;break;case 1:a.text?a.text+=t.value:a.text=t.value;break;case 10:a.position=l(e);break;case 11:a.directionVector=l(e);break;case 40:a.height=t.value;break;case 41:a.width=t.value;break;case 50:a.rotation=t.value;break;case 71:a.attachmentPoint=t.value;break;case 72:a.drawingDirection=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var W=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let p={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:p.position=l(e);break;case 39:p.thickness=t.value;break;case 210:p.extrusionDirection=l(e);break;case 100:break;default:d(p,t,e);break}t=e.next()}return p}};var K=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.x=t.value;break;case 20:a.y=t.value;break;case 30:a.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(a.bulge=t.value);break;case 70:a.curveFittingVertex=(t.value&1)!==0,a.curveFitTangent=(t.value&2)!==0,a.splineVertex=(t.value&8)!==0,a.splineControlPoint=(t.value&16)!==0,a.threeDPolylineVertex=(t.value&32)!==0,a.threeDPolylineMesh=(t.value&64)!==0,a.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:a.faceA=t.value;break;case 72:a.faceB=t.value;break;case 73:a.faceC=t.value;break;case 74:a.faceD=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var q=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var a={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:a.thickness=t.value;break;case 40:break;case 41:break;case 70:a.shape=(t.value&1)!==0,a.includesCurveFitVertices=(t.value&2)!==0,a.includesSplineFitVertices=(t.value&4)!==0,a.is3dPolyline=(t.value&8)!==0,a.is3dPolygonMesh=(t.value&16)!==0,a.is3dPolygonMeshClosed=(t.value&32)!==0,a.isPolyfaceMesh=(t.value&64)!==0,a.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:a.extrusionDirection=l(e);break;default:d(a,t,e);break}t=e.next()}return a.vertices=Pe(e,t),a}};function Pe(n,e){let t=new K,a=[];for(;!n.isEOF();)if(e.code===0){if(e.value==="VERTEX")a.push(t.parseEntity(n,e)),e=n.lastReadGroup;else if(e.value==="SEQEND"){Le(n,e);break}}return a}function Le(n,e){let t={type:e.value};for(e=n.next();!n.isEOF()&&e.code!=0;)d(t,e,n),e=n.next();return t}var J=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let a={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.points[0]=l(e);break;case 11:a.points[1]=l(e);break;case 12:a.points[2]=l(e);break;case 13:a.points[3]=l(e);break;case 210:a.extrusionDirection=l(e);break;default:d(a,t,e);break}t=e.next()}return a}};var Z=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.controlPoints||(a.controlPoints=[]),a.controlPoints.push(l(e));break;case 11:a.fitPoints||(a.fitPoints=[]),a.fitPoints.push(l(e));break;case 12:a.startTangent=l(e);break;case 13:a.endTangent=l(e);break;case 40:a.knotValues||(a.knotValues=[]),a.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(a.closed=!0),(t.value&2)!=0&&(a.periodic=!0),(t.value&4)!=0&&(a.rational=!0),(t.value&8)!=0&&(a.planar=!0),(t.value&16)!=0&&(a.planar=!0,a.linear=!0);break;case 71:a.degreeOfSplineCurve=t.value;break;case 72:a.numberOfKnots=t.value;break;case 73:a.numberOfControlPoints=t.value;break;case 74:a.numberOfFitPoints=t.value;break;case 210:a.normalVector=l(e);break;default:d(a,t,e);break}t=e.next()}return a}};var Q=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let a={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:a.startPoint=l(e);break;case 11:a.endPoint=l(e);break;case 40:a.textHeight=t.value;break;case 41:a.xScale=t.value;break;case 50:a.rotation=t.value;break;case 1:a.text=t.value;break;case 72:a.halign=t.value;break;case 73:a.valign=t.value;break;default:d(a,t,e);break}t=e.next()}return a}};var f=ge(re());f.default.setLevel("error");function Te(n){n.registerEntityHandler(H),n.registerEntityHandler(M),n.registerEntityHandler(V),n.registerEntityHandler(z),n.registerEntityHandler(B),n.registerEntityHandler(U),n.registerEntityHandler(X),n.registerEntityHandler(Y),n.registerEntityHandler(j),n.registerEntityHandler(G),n.registerEntityHandler(W),n.registerEntityHandler(q),n.registerEntityHandler(J),n.registerEntityHandler(Z),n.registerEntityHandler(Q)}var D=class{constructor(){this._entityHandlers={},Te(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type \`"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",a=this;return new Promise((p,i)=>{e.on("data",g=>{t+=g}),e.on("end",()=>{try{p(a._parse(t))}catch(g){i(g)}}),e.on("error",g=>{i(g)})})}_parse(e){let t={},a=0,p=e.split(/\\r\\n|\\r|\\n/g),i=new _(p);if(!i.hasNext())throw Error("Empty file");let g=this,o;function O(){for(o=i.next();!i.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=i.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",le(o)),o=i.next();continue}o.value==="HEADER"?(f.default.debug("> HEADER"),t.header=L(),f.default.debug("<")):o.value==="BLOCKS"?(f.default.debug("> BLOCKS"),t.blocks=R(),f.default.debug("<")):o.value==="ENTITIES"?(f.default.debug("> ENTITIES"),t.entities=P(!1),f.default.debug("<")):o.value==="TABLES"?(f.default.debug("> TABLES"),t.tables=A(),f.default.debug("<")):o.value==="EOF"?f.default.debug("EOF"):f.default.warn("Skipping section '%s'",o.value)}else o=i.next()}function L(){let r=null,s=null,c={};for(o=i.next();;){if(S(o,0,"ENDSEC")){r&&(c[r]=s);break}else o.code===9?(r&&(c[r]=s),r=o.value):o.code===10?s={x:o.value}:o.code===20?s.y=o.value:o.code===30?s.z=o.value:s=o.value;o=i.next()}return o=i.next(),c}function R(){let r={};for(o=i.next();o.value!=="EOF"&&!S(o,0,"ENDSEC");)if(S(o,0,"BLOCK")){f.default.debug("block {");let s=I();f.default.debug("}"),k(s),s.name?r[s.name]=s:f.default.error('block with handle "'+s.handle+'" is missing a name.')}else N(o),o=i.next();return r}function I(){let r={};for(o=i.next();o.value!=="EOF";){switch(o.code){case 1:r.xrefPath=o.value,o=i.next();break;case 2:r.name=o.value,o=i.next();break;case 3:r.name2=o.value,o=i.next();break;case 5:r.handle=o.value,o=i.next();break;case 8:r.layer=o.value,o=i.next();break;case 10:r.position=v(o),o=i.next();break;case 67:r.paperSpace=!!(o.value&&o.value==1),o=i.next();break;case 70:o.value!=0&&(r.type=o.value),o=i.next();break;case 100:o=i.next();break;case 330:r.ownerHandle=o.value,o=i.next();break;case 0:if(o.value=="ENDBLK")break;r.entities=P(!0);break;default:N(o),o=i.next()}if(S(o,0,"ENDBLK")){o=i.next();break}}return r}function A(){let r={};for(o=i.next();o.value!=="EOF"&&!S(o,0,"ENDSEC");)S(o,0,"TABLE")?(o=i.next(),w[o.value]?(f.default.debug(o.value+" Table {"),r[w[o.value].tableName]=h(o),f.default.debug("}")):f.default.debug("Unhandled Table "+o.value)):o=i.next();return o=i.next(),r}let T="ENDTAB";function h(r){let s=w[r.value],c={},E=0;for(o=i.next();!S(o,0,T);)switch(o.code){case 5:c.handle=o.value,o=i.next();break;case 330:c.ownerHandle=o.value,o=i.next();break;case 100:o.value==="AcDbSymbolTable"||N(o),o=i.next();break;case 70:E=o.value,o=i.next();break;case 0:o.value===s.dxfSymbolName?c[s.tableRecordsProperty]=s.parseTableRecords():(N(o),o=i.next());break;default:N(o),o=i.next()}let b=c[s.tableRecordsProperty];if(b){let x=(()=>{if(b.constructor===Array)return b.length;if(typeof b=="object")return Object.keys(b).length})();E!==x&&f.default.warn("Parsed "+x+" "+s.dxfSymbolName+"'s but expected "+E)}return o=i.next(),c}function y(){let r=[],s={};for(f.default.debug("ViewPort {"),o=i.next();!S(o,0,T);)switch(o.code){case 2:s.name=o.value,o=i.next();break;case 10:s.lowerLeftCorner=v(o),o=i.next();break;case 11:s.upperRightCorner=v(o),o=i.next();break;case 12:s.center=v(o),o=i.next();break;case 13:s.snapBasePoint=v(o),o=i.next();break;case 14:s.snapSpacing=v(o),o=i.next();break;case 15:s.gridSpacing=v(o),o=i.next();break;case 16:s.viewDirectionFromTarget=v(o),o=i.next();break;case 17:s.viewTarget=v(o),o=i.next();break;case 42:s.lensLength=o.value,o=i.next();break;case 43:s.frontClippingPlane=o.value,o=i.next();break;case 44:s.backClippingPlane=o.value,o=i.next();break;case 45:s.viewHeight=o.value,o=i.next();break;case 50:s.snapRotationAngle=o.value,o=i.next();break;case 51:s.viewTwistAngle=o.value,o=i.next();break;case 79:s.orthographicType=o.value,o=i.next();break;case 110:s.ucsOrigin=v(o),o=i.next();break;case 111:s.ucsXAxis=v(o),o=i.next();break;case 112:s.ucsYAxis=v(o),o=i.next();break;case 110:s.ucsOrigin=v(o),o=i.next();break;case 281:s.renderMode=o.value,o=i.next();break;case 281:s.defaultLightingType=o.value,o=i.next();break;case 292:s.defaultLightingOn=o.value,o=i.next();break;case 330:s.ownerHandle=o.value,o=i.next();break;case 63:case 421:case 431:s.ambientColor=o.value,o=i.next();break;case 0:o.value==="VPORT"&&(f.default.debug("}"),r.push(s),f.default.debug("ViewPort {"),s={},o=i.next());break;default:N(o),o=i.next();break}return f.default.debug("}"),r.push(s),r}function u(){let r={},s={},c=0,E;for(f.default.debug("LType {"),o=i.next();!S(o,0,"ENDTAB");)switch(o.code){case 2:s.name=o.value,E=o.value,o=i.next();break;case 3:s.description=o.value,o=i.next();break;case 73:c=o.value,c>0&&(s.pattern=[]),o=i.next();break;case 40:s.patternLength=o.value,o=i.next();break;case 49:s.pattern.push(o.value),o=i.next();break;case 0:f.default.debug("}"),c>0&&c!==s.pattern.length&&f.default.warn("lengths do not match on LTYPE pattern"),r[E]=s,s={},f.default.debug("LType {"),o=i.next();break;default:o=i.next()}return f.default.debug("}"),r[E]=s,r}function C(){let r={},s={},c;for(f.default.debug("Layer {"),o=i.next();!S(o,0,"ENDTAB");)switch(o.code){case 2:s.name=o.value,c=o.value,o=i.next();break;case 62:s.visible=o.value>=0,s.colorIndex=Math.abs(o.value),s.color=Ce(s.colorIndex),o=i.next();break;case 70:s.frozen=(o.value&1)!=0||(o.value&2)!=0,o=i.next();break;case 0:o.value==="LAYER"&&(f.default.debug("}"),r[c]=s,f.default.debug("Layer {"),s={},c=void 0,o=i.next());break;default:N(o),o=i.next();break}return f.default.debug("}"),r[c]=s,r}let w={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:y},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:u},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:C}};function P(r){let s=[],c=r?"ENDBLK":"ENDSEC";for(r||(o=i.next());;)if(o.code===0){if(o.value===c)break;let E=g._entityHandlers[o.value];if(E!=null){f.default.debug(o.value+" {");let b=E.parseEntity(i,o);o=i.lastReadGroup,f.default.debug("}"),k(b),s.push(b)}else{f.default.warn("Unhandled entity "+o.value),o=i.next();continue}}else o=i.next();return c=="ENDSEC"&&(o=i.next()),s}function v(r){let s={},c=r.code;if(s.x=r.value,c+=10,r=i.next(),r.code!=c)throw new Error("Expected code for point value to be "+c+" but got "+r.code+".");return s.y=r.value,c+=10,r=i.next(),r.code!=c?(i.rewind(),s):(s.z=r.value,s)}function k(r){if(!r)throw new TypeError("entity cannot be undefined or null");r.handle||(r.handle=a++)}return O(),t}};function S(n,e,t){return n.code===e&&n.value===t}function N(n){f.default.debug("unhandled group "+le(n))}function le(n){return n.code+":"+n.value}function Ce(n){return te[n]}var pe=D;var Se=[["racks",/rack|shelf|shelv|pallet|stowage|\u8D27\u67B6|\u8D27\u4F4D|\u6258\u76D8/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|\u901A\u9053|\u8D70\u9053|\u8F93\u9001/],["zones",/zone|area|region|\u533A|\u533A\u57DF|\u5E93\u533A/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|\u5C0F\u8F66|\u53C9\u8F66|\u7A7F\u68AD|\u5806\u579B|\u63D0\u5347|\u8F6C\u53F0/]];function Fe(n){let t=(String(n&&n.layer||"")+" "+String(n&&n.block||"")).toLowerCase();for(let a of Se)if(a[1].test(t))return a[0];return null}function F(n){if(n===null||typeof n!="object"||typeof n.x!="number")return null;let e={x:n.x,y:typeof n.y=="number"?n.y:0};return typeof n.z=="number"&&(e.z=n.z),e}function $(n){return(Array.isArray(n)?n:[]).map(F).filter(e=>e!==null)}function Oe(n){let e={type:n.type,layer:n.layer||"0"};switch(n.handle!==void 0&&(e.handle=String(n.handle)),n.type){case"LINE":e.vertices=$(n.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=$(n.vertices),e.closed=n.shape===!0,typeof n.width=="number"&&(e.width=n.width);break;case"ARC":e.center=F(n.center),e.radius=n.radius,e.startAngle=n.startAngle,e.endAngle=n.endAngle;break;case"CIRCLE":e.center=F(n.center),e.radius=n.radius;break;case"ELLIPSE":e.center=F(n.center),e.majorAxisEndPoint=F(n.majorAxisEndPoint),e.axisRatio=n.axisRatio,e.startAngle=n.startAngle,e.endAngle=n.endAngle;break;case"TEXT":e.text=typeof n.text=="string"?n.text:"",e.position=F(n.startPoint),typeof n.textHeight=="number"&&(e.height=n.textHeight),typeof n.rotation=="number"&&(e.rotation=n.rotation);break;case"MTEXT":e.text=typeof n.text=="string"?n.text:"",e.position=F(n.position),typeof n.height=="number"&&(e.height=n.height);break;case"INSERT":e.block=typeof n.name=="string"?n.name:null,e.position=F(n.position),typeof n.rotation=="number"&&(e.rotation=n.rotation),typeof n.xScale=="number"&&n.xScale!==1&&(e.xScale=n.xScale),typeof n.yScale=="number"&&n.yScale!==1&&(e.yScale=n.yScale);break;case"POINT":e.position=F(n.position);break;case"SOLID":e.points=$(n.points);break;case"SPLINE":e.controlPoints=$(n.controlPoints),e.fitPoints=$(n.fitPoints);break;default:break}return e}function Ae(n){let e=n&&n.tables&&n.tables.layer&&n.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function Ne(n){let e=n&&n.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:F(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}function Ie(n,e,t){let p=[],i=[],g=[],o=[],O=[],L=!1,R={racks:p,aisles:i,zones:g,agvs:o},I={racks:0,aisles:0,zones:0,agvs:0},A=0;for(let k of n.entities||[]){if(O.length>=5e4){L=!0;break}let r=Oe(k);O.push(r);let s=Fe(r);if(s===null){r.type!=="TEXT"&&r.type!=="MTEXT"&&(A+=1);continue}I[s]+=1,R[s].push(Object.assign({id:s.slice(0,-1)+"-"+I[s]},r))}let T={},h={},y=1/0,u=1/0,C=-1/0,w=-1/0;for(let k of O){T[k.layer]=(T[k.layer]||0)+1,h[k.type]=(h[k.type]||0)+1;let r=s=>{s&&(y=Math.min(y,s.x),u=Math.min(u,s.y),C=Math.max(C,s.x),w=Math.max(w,s.y))};r(k.position),r(k.center);for(let s of k.vertices||[])r(s);for(let s of(k.controlPoints||[]).concat(k.fitPoints||[],k.points||[]))r(s)}let P=y<1/0?{width:C-y,height:w-u}:null,v=Ae(n).map(k=>Object.assign({},k,{count:T[k.name]||0}));for(let k of Object.keys(T))v.some(r=>r.name===k)||v.push({name:k,color:null,colorIndex:null,visible:!0,frozen:!1,count:T[k]});return{racks:p,aisles:i,zones:g,agvs:o,entities:O,layers:v,meta:{source:e,format:t,blocks:Ne(n),entityCount:O.length,unclassified:A,truncated:L,byType:h,span:P}}}function ue(n,e,t){let a;try{a=new pe().parseSync(n)}catch(p){throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: "+(p&&p.message?p.message:String(p)))}if(a===null||typeof a!="object"||!Array.isArray(a.entities))throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: \\u89E3\\u6790\\u5668\\u672A\\u8FD4\\u56DE\\u5B9E\\u4F53\\u8868");return Ie(a,e,t||"dxf")}self.onmessage=n=>{let e=n.data||{};try{self.postMessage({phase:"\\u89E3\\u6790\\u4E2D \\xB7 \\u56FE\\u5143\\u626B\\u63CF"});let t=ue(String(e.content||""),e.name||"drawing.dxf",e.format||"dxf");self.postMessage({done:!0,scene:t})}catch(t){self.postMessage({done:!0,error:String(t&&t.message||t)})}};})();
`],{type:"text/javascript"})),l=new Worker(a)}catch{try{s(cl(e,i,t))}catch(d){r(d)}return}let c=()=>{l.terminate(),URL.revokeObjectURL(a)};l.onmessage=u=>{let d=u.data||{};if(d.phase){o(d.phase);return}c(),d.error?r(new Error(d.error)):s(d.scene)},l.onerror=()=>{c();try{s(cl(e,i,t))}catch(u){r(u)}},l.postMessage({name:i,content:e,format:t})})}async function kx(i,e){let t=typeof e=="function"?e:()=>{};if(/\.(dwg|step|stp)$/i.test(i.name)){t("\u4E0A\u4F20\u4E2D \xB7 Host \u8F6C\u6362\u89E3\u6790");let r=await fetch("/api/cad-scene-builder/parse",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i.name,content:await Ox(i)})}),o=await r.text(),a=null;try{a=JSON.parse(o)}catch{throw new Error("\u89E3\u6790\u670D\u52A1\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94 (HTTP "+r.status+")\uFF1A"+String(o).slice(0,100)+"\uFF08\u8DEF\u7531\u672A\u751F\u6548\u65F6\u8BF7\u91CD\u542F dsh web\uFF09")}if(!r.ok||!a||!a.scene)throw new Error(a&&a.error||"\u89E3\u6790\u670D\u52A1\u9519\u8BEF (HTTP "+r.status+")");return{scene:a.scene,download:a.download||null}}let n=await i.text();return{scene:await Bx(i.name,n,"dxf",t),download:null}}var yt={wrap:{display:"flex",gap:12,height:"100%",minHeight:0,padding:12,boxSizing:"border-box"},col:{flex:1,display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0},colLeft:{flex:"0 0 33%",maxWidth:"33%",display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0,overflowY:"auto",paddingRight:2},title:{margin:0,fontSize:14},drop:{border:"2px dashed rgba(148,163,184,0.4)",borderRadius:10,padding:24,textAlign:"center",fontSize:13,opacity:.9,cursor:"pointer"},btn:{padding:"6px 18px",borderRadius:8,border:"none",cursor:"pointer",background:"#2563eb",color:"#fff",fontSize:13},info:{fontSize:12,lineHeight:1.7,padding:"8px 10px",borderRadius:8,background:"rgba(148,163,184,0.08)",border:"1px solid rgba(148,163,184,0.2)"},label:{opacity:.6,marginRight:6},hint:{fontSize:12,opacity:.55},pre:{fontSize:11,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:240,overflow:"auto"},summary:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",fontSize:12,opacity:.9},chip:{display:"inline-flex",alignItems:"center",gap:4,padding:"1px 8px",borderRadius:999,border:"1px solid rgba(148,163,184,0.35)"},dot:i=>({width:8,height:8,borderRadius:4,background:i})},zx=`
.cad-im-portal{position:relative;border:1.5px dashed rgba(56,189,248,.45);border-radius:16px;padding:30px 16px 24px;text-align:center;cursor:pointer;overflow:hidden;isolation:isolate;background:rgba(8,16,34,.55);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.cad-im-portal:hover{transform:translateY(-2px);border-color:rgba(56,189,248,.85);box-shadow:0 10px 30px rgba(56,189,248,.16),inset 0 0 24px rgba(56,189,248,.06)}
.cad-im-portal[data-state='drag']{transform:translateY(-3px) scale(1.012);border-color:transparent;box-shadow:0 0 0 2px rgba(56,189,248,.65),0 14px 40px rgba(56,189,248,.3),inset 0 0 32px rgba(56,189,248,.12)}
.cad-im-portal[data-state='parsing']{border-color:rgba(125,211,252,.8)}
.cad-im-portal[data-state='done']{border-color:rgba(52,211,153,.7)}
.cad-im-portal[data-state='error']{border-color:rgba(248,113,113,.8);animation:cad-im-shake .4s ease}
.cad-im-grid{position:absolute;left:-40%;right:-40%;top:-30%;bottom:-30%;z-index:-2;background-image:linear-gradient(rgba(96,165,250,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,.16) 1px,transparent 1px);background-size:24px 24px;transform:perspective(420px) rotateX(56deg);transform-origin:center 88%;opacity:.45;animation:cad-im-pan 7s linear infinite;transition:opacity .3s}
.cad-im-portal[data-state='drag'] .cad-im-grid,.cad-im-portal[data-state='parsing'] .cad-im-grid{opacity:.85}
@keyframes cad-im-pan{to{background-position:0 48px}}
.cad-im-corner{position:absolute;width:18px;height:18px;border:2px solid rgba(56,189,248,.85);transition:all .25s ease;animation:cad-im-blink 3.4s ease-in-out infinite}
.cad-im-corner.tl{top:8px;left:8px;border-right:none;border-bottom:none;border-radius:6px 0 0 0}
.cad-im-corner.tr{top:8px;right:8px;border-left:none;border-bottom:none;border-radius:0 6px 0 0;animation-delay:.4s}
.cad-im-corner.bl{bottom:8px;left:8px;border-right:none;border-top:none;border-radius:0 0 0 6px;animation-delay:.8s}
.cad-im-corner.br{bottom:8px;right:8px;border-left:none;border-top:none;border-radius:0 0 6px 0;animation-delay:1.2s}
.cad-im-portal[data-state='drag'] .cad-im-corner{width:28px;height:28px;border-color:#7dd3fc;box-shadow:0 0 8px rgba(56,189,248,.8)}
@keyframes cad-im-blink{0%,100%{opacity:.35}50%{opacity:1}}
.cad-im-stage{position:relative;height:84px;margin-bottom:10px}
.cad-im-icon{width:72px;height:72px;animation:cad-im-float 3.2s ease-in-out infinite;transition:transform .25s;filter:drop-shadow(0 6px 14px rgba(56,189,248,.35))}
.cad-im-portal[data-state='drag'] .cad-im-icon{transform:scale(1.14);animation-duration:1s}
@keyframes cad-im-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.cad-im-check{position:absolute;right:calc(50% - 64px);bottom:2px;width:34px;height:34px}
.cad-im-check circle{fill:rgba(16,185,129,.2);stroke:#34d399;stroke-width:2.5}
.cad-im-check path{stroke:#34d399;stroke-width:3.5;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:34;stroke-dashoffset:34;animation:cad-im-draw .5s .15s ease forwards}
@keyframes cad-im-draw{to{stroke-dashoffset:0}}
.cad-im-scan{position:absolute;left:6px;right:6px;height:34px;top:-40px;opacity:0;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(56,189,248,.28) 35%,rgba(125,211,252,.95) 50%,rgba(56,189,248,.28) 65%,transparent);border-radius:8px}
.cad-im-portal[data-state='drag'] .cad-im-scan,.cad-im-portal[data-state='parsing'] .cad-im-scan{opacity:1;animation:cad-im-scan 1.15s linear infinite}
@keyframes cad-im-scan{0%{top:-40px}100%{top:100%}}
.cad-im-cross{position:absolute;width:10px;height:10px;pointer-events:none;animation:cad-im-twinkle 2.8s ease-in-out infinite}
.cad-im-cross::before,.cad-im-cross::after{content:'';position:absolute;background:rgba(125,211,252,.8)}
.cad-im-cross::before{left:4px;top:0;width:2px;height:10px}
.cad-im-cross::after{top:4px;left:0;height:2px;width:10px}
@keyframes cad-im-twinkle{0%,100%{opacity:.12;transform:scale(.8)}50%{opacity:.9;transform:scale(1.1)}}
.cad-im-title{font-size:14px;font-weight:600;letter-spacing:.02em}
.cad-im-sub{font-size:12px;opacity:.75;margin-top:4px;transition:color .2s}
.cad-im-portal[data-state='drag'] .cad-im-sub{color:#7dd3fc;opacity:1;animation:cad-im-pulse 1s ease-in-out infinite}
@keyframes cad-im-pulse{50%{opacity:.45}}
.cad-im-chip{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:3px 12px;border-radius:999px;background:rgba(56,189,248,.12);border:1px solid rgba(56,189,248,.35);font-family:ui-monospace,Consolas,monospace;font-size:12px;animation:cad-im-rise .3s ease}
@keyframes cad-im-rise{from{opacity:0;transform:translateY(6px)}}
.cad-im-btn{position:relative;overflow:hidden;padding:8px 26px;border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;background:linear-gradient(135deg,#2563eb,#06b6d4);box-shadow:0 6px 18px rgba(37,99,235,.35);transition:transform .2s,box-shadow .2s,opacity .2s}
.cad-im-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 10px 24px rgba(37,99,235,.45)}
.cad-im-btn:disabled{opacity:.45;cursor:not-allowed;box-shadow:none}
.cad-im-btn::after{content:'';position:absolute;top:0;bottom:0;width:48px;left:-70px;background:linear-gradient(100deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-18deg)}
.cad-im-btn:hover:not(:disabled)::after{animation:cad-im-shine .8s ease}
.cad-im-btn[data-busy='true']::after{animation:cad-im-shine 1s linear infinite}
@keyframes cad-im-shine{to{left:120%}}
@keyframes cad-im-shake{20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}
.cad-p-card{border:1px solid rgba(148,163,184,.22);border-radius:12px;background:rgba(148,163,184,.06);padding:10px 12px;font-size:12px}
.cad-p-card h4{margin:0 0 8px;font-size:12px;letter-spacing:.04em;opacity:.85;display:flex;align-items:center;gap:6px}
.cad-p-legend{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.cad-p-leg{display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:8px;border:1px solid rgba(148,163,184,.18);background:rgba(8,16,34,.35);cursor:pointer;transition:all .18s;user-select:none}
.cad-p-leg:hover{border-color:rgba(56,189,248,.5)}
.cad-p-leg[data-off='true']{opacity:.38;filter:grayscale(.7)}
.cad-p-dot{width:10px;height:10px;border-radius:3px;flex:none}
.cad-p-leg b{font-weight:600}
.cad-p-leg .cnt{margin-left:auto;opacity:.7;font-family:ui-monospace,Consolas,monospace}
.cad-p-layers{max-height:184px;overflow-y:auto;display:flex;flex-direction:column;gap:2px}
.cad-p-layer{display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:6px;cursor:pointer;transition:background .15s}
.cad-p-layer:hover{background:rgba(56,189,248,.1)}
.cad-p-layer[data-off='true']{opacity:.4}
.cad-p-layer .nm{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,Consolas,monospace;font-size:11px}
.cad-p-layer .cnt{opacity:.6;font-family:ui-monospace,Consolas,monospace}
.cad-p-badge{font-size:10px;padding:0 6px;border-radius:999px;border:1px solid rgba(148,163,184,.35);opacity:.75;flex:none}
.cad-p-bar{display:flex;height:8px;border-radius:4px;overflow:hidden;margin:6px 0 8px}
.cad-p-bar span{height:100%}
.cad-p-types{display:flex;flex-wrap:wrap;gap:4px}
.cad-p-type{padding:1px 7px;border-radius:6px;background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.2);font-family:ui-monospace,Consolas,monospace;font-size:10.5px}
.cad-p-row{display:flex;justify-content:space-between;gap:8px;padding:2px 0}
.cad-p-row .k{opacity:.6}
.cad-p-log-toggle{display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none}
.cad-p-log-toggle .chev{transition:transform .2s;display:inline-block}
.cad-p-log[data-open='true'] .cad-p-log-toggle .chev{transform:rotate(90deg)}
.cad-p-logline{display:flex;gap:6px;padding:2px 0;line-height:1.5}
.cad-p-warn{color:#fbbf24}
.cad-p-err{color:#f87171}
.cad-v-toggle{display:flex;padding:3px;border-radius:10px;background:rgba(148,163,184,.12);border:1px solid rgba(148,163,184,.22);gap:2px;flex:none}
.cad-v-btn{padding:4px 14px;border:none;border-radius:8px;background:transparent;color:inherit;font-size:12px;cursor:pointer;transition:all .2s}
.cad-v-btn[data-on='true']{background:linear-gradient(135deg,#2563eb,#06b6d4);color:#fff;box-shadow:0 2px 8px rgba(37,99,235,.4);font-weight:600}
.cad-v-btn:hover:not([data-on='true']){background:rgba(148,163,184,.15)}
.cad-p-gm{padding-left:22px}
.cad-p-edit{display:flex;gap:4px;padding:2px 0 6px 22px}
.cad-p-edit input{flex:1;min-width:0;padding:3px 8px;border-radius:6px;border:1px solid rgba(56,189,248,.4);background:rgba(8,16,34,.6);color:inherit;font-size:11px}
.cad-p-mini{flex:none;width:22px;height:22px;border-radius:6px;border:1px solid rgba(148,163,184,.3);background:transparent;color:inherit;cursor:pointer;font-size:11px;line-height:1;opacity:.7}
.cad-p-mini:hover{opacity:1;border-color:rgba(56,189,248,.6)}
.cad-im-dl{background:linear-gradient(135deg,#059669,#10b981);box-shadow:0 6px 18px rgba(16,185,129,.3);animation:cad-im-rise .3s ease}
.cad-im-dl:hover:not(:disabled){box-shadow:0 10px 24px rgba(16,185,129,.45)}
`;function Vx(){if(typeof document>"u"||document.getElementById("dsh-cad-scene-import-styles"))return;let i=document.createElement("style");i.id="dsh-cad-scene-import-styles",i.textContent=zx,document.head.appendChild(i)}function Wr(i){return"#"+(i>>>0).toString(16).padStart(6,"0")}var dl=class extends st.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error("[dsh-cad-scene] render error",e)}render(){return this.state.error?(0,q.jsxs)("div",{style:{padding:24,color:"#f87171",fontSize:13},children:["dsh-cad-scene \u6E32\u67D3\u51FA\u9519\uFF1A",String(this.state.error&&this.state.error.message||this.state.error)]}):this.props.children}};function wd({scene:i,selection:e}){if(!e||!e.item)return(0,q.jsx)("div",{style:yt.info,children:"\u70B9\u51FB\u573A\u666F\u4E2D\u7684\u5B9E\u4F53\uFF0C\u67E5\u770B\u5176\u56FE\u5C42\u4E0E\u6587\u672C\u4FE1\u606F"});let{item:t,category:n}=e,r=(Array.isArray(i.layers)?i.layers:[]).find(l=>l&&l.name===t.layer),o=(Array.isArray(i.entities)?i.entities:[]).filter(l=>l&&(l.type==="TEXT"||l.type==="MTEXT")&&l.layer===t.layer&&l.text).slice(0,6),a=t.position||t.center||Array.isArray(t.vertices)&&t.vertices[0]||null;return(0,q.jsxs)("div",{style:yt.info,children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u5B9E\u4F53"}),(0,q.jsx)("strong",{children:t.id})," \xB7 ",t.type,n?` \xB7 ${Sd[n]}`:""]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u56FE\u5C42"}),t.layer,r?(0,q.jsxs)("span",{style:{marginLeft:8,opacity:.8},children:[r.visible===!1?"\u9690\u85CF":"\u53EF\u89C1",r.frozen?" \xB7 \u51BB\u7ED3":""]}):null]}),t.block?(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u5757\u5F15\u7528"}),t.block]}):null,a?(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u4F4D\u7F6E"}),"(",Math.round(a.x*100)/100,", ",Math.round(a.y*100)/100,")"]}):null,t.text?(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u6587\u672C"}),t.text]}):null,o.length>0?(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u540C\u5C42\u6587\u672C"}),o.map((l,c)=>(0,q.jsx)("div",{style:{paddingLeft:12},children:l.text},c))]}):null]})}function Hx({scene:i}){let e=i.meta||{};return(0,q.jsxs)("div",{style:yt.summary,children:[(0,q.jsx)("span",{children:e.source||"CAD scene"}),e.format?(0,q.jsx)("span",{style:{opacity:.6},children:e.format}):null,["racks","aisles","zones","agvs"].map(t=>(0,q.jsxs)("span",{style:yt.chip,children:[(0,q.jsx)("span",{style:yt.dot(Wr(Jc[t]))}),Sd[t]," ",(i[t]||[]).length||(e.summary&&e.summary.classified?e.summary.classified[t]:0)]},t)),typeof e.entityCount=="number"?(0,q.jsxs)("span",{style:{opacity:.6},children:["\u5B9E\u4F53 ",e.entityCount]}):null,e.truncated?(0,q.jsx)("span",{style:{opacity:.6},children:"(\u5DF2\u622A\u65AD)"}):null]})}function vd(i){try{let e=localStorage.getItem("dsh-cad-scene:groups"),t=e?JSON.parse(e):{};return t[i]&&typeof t[i]=="object"?t[i]:{}}catch{return{}}}function Gx(i,e){try{let t=localStorage.getItem("dsh-cad-scene:groups"),n=t?JSON.parse(t):{};n[i]=e,localStorage.setItem("dsh-cad-scene:groups",JSON.stringify(n))}catch{}}function Wx({scene:i,hiddenLayers:e,onToggleLayer:t}){let n=String(i.meta&&i.meta.source||"")+"|"+(i.entities||[]).length,[s,r]=(0,st.useState)(()=>vd(n)),[o,a]=(0,st.useState)(null),[l,c]=(0,st.useState)("");(0,st.useEffect)(()=>{r(vd(n)),a(null),c("")},[n]);let u=(_,E)=>{let v=Object.assign({},s),M=String(E||"").trim();M===""||M===_?delete v[_]:v[_]=M,r(v),Gx(n,v),a(null),c("")},d={};for(let _ of i.entities||[])d[_.layer]=(d[_.layer]||0)+1;let h={};for(let _ of i.layers||[])h[_.name]=_;let f=Object.keys(d);for(let _ of i.layers||[])d[_.name]===void 0&&f.push(_.name);let g={};for(let _ of f){let E=s[_]||_;g[E]||(g[E]={name:E,layers:[],count:0,color:Wr(ys(i,_))}),g[E].layers.push(_),g[E].count+=d[_]||0}let S=Object.keys(g).map(_=>g[_]).sort((_,E)=>E.count-_.count),p=Object.keys(g).sort(),m=_=>{let E=_.layers.some(v=>!e[v]);for(let v of _.layers)E!==!!e[v]&&t(v)},T=_=>(0,q.jsxs)("div",{className:"cad-p-edit",onClick:E=>E.stopPropagation(),children:[(0,q.jsx)("input",{list:"cad-p-group-options",value:l,placeholder:"\u5408\u5E76\u5230\u7EC4\u540D\uFF08\u7559\u7A7A=\u72EC\u7ACB\uFF09",onChange:E=>c(E.target.value),onKeyDown:E=>{E.key==="Enter"&&u(_,l)},autoFocus:!0}),(0,q.jsx)("datalist",{id:"cad-p-group-options",children:p.map(E=>(0,q.jsx)("option",{value:E},E))}),(0,q.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>u(_,l),children:"\u2713"}),(0,q.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>a(null),children:"\u2715"})]}),C=(_,E)=>{let v=h[_];return(0,q.jsxs)("div",{children:[(0,q.jsxs)("div",{className:E?"cad-p-layer cad-p-gm":"cad-p-layer","data-off":e[_]?"true":"false",onClick:()=>t(_),children:[(0,q.jsx)("span",{className:"cad-p-dot",style:{background:Wr(ys(i,_))}}),(0,q.jsx)("span",{className:"nm",children:_}),v&&v.visible===!1?(0,q.jsx)("span",{className:"cad-p-badge",children:"\u9690\u85CF"}):null,v&&v.frozen?(0,q.jsx)("span",{className:"cad-p-badge",children:"\u51BB\u7ED3"}):null,(0,q.jsx)("span",{className:"cnt",children:d[_]||0}),(0,q.jsx)("button",{type:"button",className:"cad-p-mini",onClick:M=>{M.stopPropagation(),c(s[_]&&s[_]!==_?s[_]:""),a(o===_?null:_)},children:"\u270E"})]}),o===_?T(_):null]},_)};return(0,q.jsxs)("div",{className:"cad-p-card",children:[(0,q.jsxs)("h4",{children:["\u56FE\u4F8B \xB7 \u6309\u89E3\u6790\u5185\u5BB9\u751F\u6210\uFF08",S.length," \u7EC4 \xB7 \u270E \u53EF\u5408\u5E76/\u547D\u540D\uFF09"]}),(0,q.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:300},children:[S.map(_=>{if(_.layers.length===1)return C(_.layers[0],!1);let E=_.layers.every(v=>!!e[v]);return(0,q.jsxs)("div",{children:[(0,q.jsxs)("div",{className:"cad-p-layer","data-off":E?"true":"false",onClick:()=>m(_),children:[(0,q.jsx)("span",{className:"cad-p-dot",style:{background:_.color}}),(0,q.jsx)("span",{className:"nm",children:(0,q.jsx)("b",{children:_.name})}),(0,q.jsx)("span",{className:"cnt",children:_.count})]}),_.layers.map(v=>C(v,!0))]},_.name)}),S.length===0?(0,q.jsx)("div",{style:{opacity:.6},children:"\u65E0\u56FE\u5C42\u5185\u5BB9"}):null]})]})}var ul=["#60a5fa","#f97316","#34d399","#f472b6","#a78bfa","#facc15","#22d3ee","#fb7185","#94a3b8"];function Xx({scene:i}){let e=i.meta||{},t={},n=1/0,s=1/0,r=-1/0,o=-1/0,a=d=>{d&&(n=Math.min(n,d.x),s=Math.min(s,d.y),r=Math.max(r,d.x),o=Math.max(o,d.y))};for(let d of i.entities||[]){t[d.type]=(t[d.type]||0)+1,a(d.position),a(d.center);for(let h of d.vertices||[])a(h);for(let h of(d.controlPoints||[]).concat(d.fitPoints||[],d.points||[]))a(h)}let l=n<1/0?{w:r-n,h:o-s}:null,c=Object.entries(t).sort((d,h)=>h[1]-d[1]),u=c.reduce((d,h)=>d+h[1],0)||1;return(0,q.jsxs)("div",{className:"cad-p-card",children:[(0,q.jsx)("h4",{children:"\u56FE\u7EB8\u7EDF\u8BA1"}),(0,q.jsxs)("div",{className:"cad-p-row",children:[(0,q.jsx)("span",{className:"k",children:"\u5B9E\u4F53\u603B\u6570"}),(0,q.jsx)("b",{children:e.entityCount!==void 0?e.entityCount:(i.entities||[]).length})]}),e.truncated?(0,q.jsx)("div",{className:"cad-p-logline cad-p-warn",children:"\u26A0 \u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD"}):null,(0,q.jsx)("div",{className:"cad-p-bar",children:c.map((d,h)=>(0,q.jsx)("span",{style:{width:d[1]/u*100+"%",background:ul[h%ul.length]}},d[0]))}),(0,q.jsx)("div",{className:"cad-p-types",children:c.map((d,h)=>(0,q.jsxs)("span",{className:"cad-p-type",children:[(0,q.jsx)("i",{style:{color:ul[h%ul.length],fontStyle:"normal"},children:"\u25A0"})," ",d[0],"\xD7",d[1]]},d[0]))}),l?(0,q.jsxs)("div",{className:"cad-p-row",style:{marginTop:6},children:[(0,q.jsx)("span",{className:"k",children:"\u56FE\u5E45\u8303\u56F4"}),(0,q.jsxs)("b",{children:[Math.round(l.w*10)/10," \xD7 ",Math.round(l.h*10)/10]})]}):null,(0,q.jsxs)("div",{className:"cad-p-row",children:[(0,q.jsx)("span",{className:"k",children:"\u5757\u5B9A\u4E49"}),(0,q.jsx)("b",{children:(e.blocks||[]).length})]})]})}var Yx=new Set(["INSERT","LINE","LWPOLYLINE","POLYLINE","ARC","CIRCLE","TEXT","MTEXT","POINT"]);function qx({scene:i}){let[e,t]=(0,st.useState)(!1),n=i.meta||{},s={};for(let c of i.entities||[])Yx.has(c.type)||(s[c.type]=(s[c.type]||0)+1);let r=[],o=String(n.format||"dxf");r.push({kind:"info",text:"\u89E3\u6790\u683C\u5F0F: "+o+(o.indexOf("dwg")===0?"\uFF08\u7ECF\u5916\u90E8\u8F6C\u6362\u5668\uFF09":"\uFF08\u6D4F\u89C8\u5668\u5185\u89E3\u6790\uFF09")}),n.truncated&&r.push({kind:"warn",text:"\u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD\uFF0C\u4EC5\u4FDD\u7559\u524D "+(i.entities||[]).length+" \u4E2A"}),n.unclassified>0&&r.push({kind:"warn",text:"\u672A\u5206\u7C7B\u5B9E\u4F53 "+n.unclassified+" \u4E2A\uFF08\u672A\u5339\u914D\u5206\u7C7B\u8BCD\u8868\uFF0C\u5DF2\u6309\u56FE\u5C42\u8272\u7ED8\u5236\uFF09"});let a=Object.entries(s);a.length>0&&r.push({kind:"warn",text:"\u4E24\u4FA7\u89C6\u56FE\u5747\u672A\u7ED8\u5236: "+a.map(c=>c[0]+"\xD7"+c[1]).join("\u3001")}),r.push({kind:"info",text:"\u56FE\u5C42 "+(i.layers||[]).length+" \u4E2A \xB7 \u5757\u5B9A\u4E49 "+(n.blocks||[]).length+" \u4E2A"}),n.source&&r.push({kind:"info",text:n.source});let l=r.filter(c=>c.kind==="warn").length;return(0,q.jsxs)("div",{className:"cad-p-card cad-p-log","data-open":e?"true":"false",children:[(0,q.jsxs)("div",{className:"cad-p-log-toggle",onClick:()=>t(!e),children:[(0,q.jsx)("span",{className:"chev",children:"\u25B6"}),(0,q.jsx)("h4",{style:{margin:0,flex:1},children:"\u89E3\u6790\u65E5\u5FD7"}),(0,q.jsx)("span",{className:"cnt",children:l>0?l+" \u9879\u63D0\u793A":"\u6B63\u5E38"})]}),e?(0,q.jsx)("div",{style:{marginTop:8},children:r.map((c,u)=>(0,q.jsxs)("div",{className:"cad-p-logline"+(c.kind==="warn"?" cad-p-warn":""),children:[(0,q.jsx)("span",{children:c.kind==="warn"?"\u26A0":"\u2139"}),(0,q.jsx)("span",{children:c.text})]},u))}):null]})}function Zx(i,e,t){let n=i.type;if(n==="LINE"||n==="LWPOLYLINE"||n==="POLYLINE"){let s=(i.vertices||[]).filter(r=>r&&typeof r.x=="number");return s.length<2?null:{item:i,category:e,color:t,kind:"poly",pts:i.closed&&s.length>2?s.concat([s[0]]):s}}return n==="CIRCLE"&&i.center?{item:i,category:e,color:t,kind:"circle",c:i.center,r:i.radius||1}:n==="ARC"&&i.center?{item:i,category:e,color:t,kind:"arc",c:i.center,r:i.radius||1,a0:i.startAngle||0,a1:i.endAngle!=null?i.endAngle:Math.PI}:i.position?{item:i,category:e,color:t,kind:"mark",p:i.position}:null}function Jx({scene:i,selectedId:e,onSelect:t,hiddenCats:n,hiddenLayers:s}){let r=(0,st.useRef)(null),o=(0,st.useRef)([]),a=(0,st.useRef)([]),l=(0,st.useRef)({s:1,tx:0,ty:0}),c=(0,st.useRef)(null);return(0,st.useEffect)(()=>{let u=r.current;if(!u)return;let d=document.createElement("canvas");d.style.width="100%",d.style.height="100%",d.style.display="block",d.style.background="#0b1220",d.style.cursor="crosshair",d.style.touchAction="none",u.appendChild(d);let h=d.getContext("2d"),f=n||{},g=s||{},S=[],p=[],m={};for(let F of["racks","aisles","zones","agvs"])for(let H of i[F]||[])H.handle!=null&&(m[H.handle]={item:H,category:F});let T=0;for(let F of i.entities||[]){if(g[F.layer])continue;let H=F.handle!=null?m[F.handle]:null;if(H&&f[H.category])continue;let Z=H?H.item:Object.assign({id:"ent-"+ ++T},F),de=H?H.category:null,ce=Wr(ys(i,F.layer)),fe=Zx(Z,de,ce);fe&&S.push(fe)}let C=0;for(let F of i.entities||[])(F.type==="TEXT"||F.type==="MTEXT")&&!g[F.layer]&&F.text&&(C+=1,p.push({item:Object.assign({id:"text-"+C},F),category:null,p:F.position||{x:0,y:0},text:F.text,color:Wr(ys(i,F.layer))}));o.current=S,a.current=p;let _=l.current,E=window.devicePixelRatio||1,v=()=>{let F=1/0,H=1/0,Z=-1/0,de=-1/0,ce=B=>{B&&(F=Math.min(F,B.x),H=Math.min(H,B.y),Z=Math.max(Z,B.x),de=Math.max(de,B.y))};for(let B of S)B.kind==="poly"?B.pts.forEach(ce):B.kind==="circle"||B.kind==="arc"?(ce({x:B.c.x-B.r,y:B.c.y-B.r}),ce({x:B.c.x+B.r,y:B.c.y+B.r})):ce(B.p);for(let B of p)ce(B.p);F===1/0&&(F=-20,H=-20,Z=20,de=20);let fe=d.clientWidth||600,ze=d.clientHeight||360,Be=36,K=Math.min((fe-Be*2)/Math.max(Z-F,1),(ze-Be*2)/Math.max(de-H,1));_.s=K>0?K:1,_.tx=fe/2-(F+Z)/2*_.s,_.ty=ze/2+(H+de)/2*_.s},M=()=>{let F=d.clientWidth||600,H=d.clientHeight||360,Z=_.s,de=X=>X*Z+_.tx,ce=X=>_.ty-X*Z;h.setTransform(E,0,0,E,0,0),h.clearRect(0,0,F,H);let fe=10;for(;fe*Z<26;)fe*=5;for(;fe*Z>130;)fe/=5;h.lineWidth=1,h.strokeStyle="rgba(148,163,184,0.08)";let ze=Math.floor((0-_.tx)/Z/fe)*fe,Be=Math.ceil((F-_.tx)/Z/fe)*fe,K=Math.floor((_.ty-H)/Z/fe)*fe,B=Math.ceil(_.ty/Z/fe)*fe;h.beginPath();for(let X=ze;X<=Be;X+=fe)h.moveTo(de(X),0),h.lineTo(de(X),H);for(let X=K;X<=B;X+=fe)h.moveTo(0,ce(X)),h.lineTo(F,ce(X));h.stroke(),h.strokeStyle="rgba(248,113,113,0.45)",h.beginPath(),h.moveTo(0,ce(0)),h.lineTo(F,ce(0)),h.stroke(),h.strokeStyle="rgba(52,211,153,0.45)",h.beginPath(),h.moveTo(de(0),0),h.lineTo(de(0),H),h.stroke();for(let X of S){let me=e!=null&&X.item.id===e;if(h.strokeStyle=me?"#facc15":X.color,h.fillStyle=h.strokeStyle,h.lineWidth=me?2.6:1.4,me?(h.shadowColor="rgba(250,204,21,0.8)",h.shadowBlur=8):h.shadowBlur=0,X.kind==="poly")h.beginPath(),X.pts.forEach((se,xe)=>{xe===0?h.moveTo(de(se.x),ce(se.y)):h.lineTo(de(se.x),ce(se.y))}),h.stroke();else if(X.kind==="circle")h.beginPath(),h.arc(de(X.c.x),ce(X.c.y),Math.max(X.r*Z,.5),0,Math.PI*2),h.stroke();else if(X.kind==="arc")h.beginPath(),h.arc(de(X.c.x),ce(X.c.y),Math.max(X.r*Z,.5),-X.a1,-X.a0,!1),h.stroke();else if(X.kind==="mark"){let se=de(X.p.x),xe=ce(X.p.y),Ke=5;h.beginPath(),h.moveTo(se-Ke,xe),h.lineTo(se+Ke,xe),h.moveTo(se,xe-Ke),h.lineTo(se,xe+Ke),h.stroke(),h.beginPath(),h.arc(se,xe,2.2,0,Math.PI*2),h.stroke()}}h.shadowBlur=0,h.font="12px ui-monospace, Consolas, monospace";for(let X of p)h.fillStyle=e===X.item.id?"#facc15":X.color,h.fillText(String(X.text).slice(0,48),de(X.p.x),ce(X.p.y))},x=()=>{let F=d.clientWidth||600,H=d.clientHeight||360;d.width=Math.max(F*E,1),d.height=Math.max(H*E,1),c.current!==i&&(v(),c.current=i),M()},w=new ResizeObserver(x);w.observe(u),x();let R=(F,H,Z,de)=>{let ce=mx(Z.x),fe=my(Z.y),ze=mx(de.x),Be=my(de.y),K=ze-ce,B=Be-fe,X=K*K+B*B,me=X===0?0:Math.max(0,Math.min(1,((F-ce)*K+(H-fe)*B)/X));return Math.hypot(F-(ce+me*K),H-(fe+me*B))},P=(F,H)=>{let Z=_.s,de=6;for(let ce=p.length-1;ce>=0;ce--){let fe=p[ce];if(Math.abs(mx(fe.p.x)-F)<44&&Math.abs(my(fe.p.y)-H)<9)return{item:fe.item,category:null}}for(let ce=S.length-1;ce>=0;ce--){let fe=S[ce],ze=!1;if(fe.kind==="poly"){for(let Be=0;Be+1<fe.pts.length;Be++)if(R(F,H,fe.pts[Be],fe.pts[Be+1])<de){ze=!0;break}}else if(fe.kind==="circle"){let Be=Math.hypot(F-mx(fe.c.x),H-my(fe.c.y));ze=Math.abs(Be-fe.r*Z)<de||Be<fe.r*Z}else if(fe.kind==="arc"){let Be=F-mx(fe.c.x),K=H-my(fe.c.y),B=Math.hypot(Be,K),X=Math.atan2(-K,Be);X<0&&(X+=Math.PI*2);let me=fe.a0%(Math.PI*2);me<0&&(me+=Math.PI*2);let se=fe.a1%(Math.PI*2);se<0&&(se+=Math.PI*2);let xe=se-me;xe<=0&&(xe+=Math.PI*2);let Ke=X-me;Ke<0&&(Ke+=Math.PI*2),ze=Math.abs(B-fe.r*Z)<de&&Ke<=xe}else fe.kind==="mark"&&(ze=Math.hypot(F-mx(fe.p.x),H-my(fe.p.y))<de+4);if(ze)return{item:fe.item,category:fe.category}}return null},O=null,V=!1,D=F=>{F.preventDefault();let H=d.getBoundingClientRect(),Z=F.clientX-H.left,de=F.clientY-H.top,ce=F.deltaY>0?1/1.12:1.12,fe=Math.max(1e-4,_.s*ce);_.tx=Z-(Z-_.tx)*(fe/_.s),_.ty=de-(de-_.ty)*(fe/_.s),_.s=fe,M()},z=F=>{O={x:F.clientX,y:F.clientY,tx:_.tx,ty:_.ty},V=!1},j=F=>{if(!O)return;let H=F.clientX-O.x,Z=F.clientY-O.y;(Math.abs(H)>2||Math.abs(Z)>2)&&(V=!0),_.tx=O.tx+H,_.ty=O.ty+Z,M()},J=()=>{O=null},re=F=>{if(V)return;let H=d.getBoundingClientRect();t(P(F.clientX-H.left,F.clientY-H.top))};return d.addEventListener("wheel",D,{passive:!1}),d.addEventListener("mousedown",z),d.addEventListener("mousemove",j),d.addEventListener("mouseup",J),d.addEventListener("mouseleave",J),d.addEventListener("click",re),()=>{w.disconnect(),d.removeEventListener("wheel",D),d.removeEventListener("mousedown",z),d.removeEventListener("mousemove",j),d.removeEventListener("mouseup",J),d.removeEventListener("mouseleave",J),d.removeEventListener("click",re),d.parentNode===u&&u.removeChild(d)}},[i,n,s,e]),(0,q.jsx)("div",{ref:r,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}function Kx(){let[i,e]=(0,st.useState)(null),t=(0,st.useRef)(null),n=(0,st.useRef)(null),[s,r]=(0,st.useState)(null),[o,a]=(0,st.useState)(!1),[l,c]=(0,st.useState)(null),[u,d]=(0,st.useState)(!1),[h,f]=(0,st.useState)({}),[g,S]=(0,st.useState)(null),[p,m]=(0,st.useState)(!1);(0,st.useEffect)(()=>{Vx()},[]);let T=M=>f(x=>Object.assign({},x,{[M]:!x[M]})),C=M=>{M&&(t.current=M,r(null),c(null),f({}),S(null),e({name:M.name,size:M.size,status:"ready",error:null}))},_=async()=>{let M=t.current;if(!(!M||o)){a(!0),e(x=>Object.assign({},x,{status:"parsing",error:null}));try{let x=await kx(M,w=>e(R=>Object.assign({},R,{phase:w})));r(x.scene),S(x.download||null),e(w=>Object.assign({},w,{status:"done"}))}catch(x){e(w=>Object.assign({},w,{status:"error",error:String(x&&x.message||x)}))}finally{a(!1)}}},E=u?"drag":o?"parsing":i?i.status==="done"?"done":i.status==="error"?"error":"ready":"idle",v=i?i.status==="ready"?"\u5F85\u89E3\u6790":i.status==="parsing"?i.phase||"\u89E3\u6790\u4E2D\u2026":i.status==="done"?"\u89E3\u6790\u5B8C\u6210":"\u89E3\u6790\u5931\u8D25":"\u5C1A\u672A\u9009\u62E9\u6587\u4EF6";return(0,q.jsxs)("div",{style:yt.wrap,children:[(0,q.jsxs)("div",{style:yt.colLeft,children:[(0,q.jsx)("h3",{style:yt.title,children:"CAD \u6587\u4EF6\u5BFC\u5165\u533A"}),(0,q.jsxs)("div",{className:"cad-im-portal","data-state":E,onClick:()=>{n.current&&n.current.click()},onDragEnter:M=>{M.preventDefault(),d(!0)},onDragOver:M=>M.preventDefault(),onDragLeave:M=>{M.preventDefault(),d(!1)},onDrop:M=>{M.preventDefault(),d(!1),C(M.dataTransfer&&M.dataTransfer.files&&M.dataTransfer.files[0])},children:[(0,q.jsx)("div",{className:"cad-im-grid"}),(0,q.jsx)("span",{className:"cad-im-corner tl"}),(0,q.jsx)("span",{className:"cad-im-corner tr"}),(0,q.jsx)("span",{className:"cad-im-corner bl"}),(0,q.jsx)("span",{className:"cad-im-corner br"}),(0,q.jsx)("div",{className:"cad-im-scan"}),(0,q.jsx)("span",{className:"cad-im-cross",style:{top:18,left:30,animationDelay:"0.2s"}}),(0,q.jsx)("span",{className:"cad-im-cross",style:{top:26,right:36,animationDelay:"0.9s"}}),(0,q.jsx)("span",{className:"cad-im-cross",style:{bottom:22,left:44,animationDelay:"1.6s"}}),(0,q.jsxs)("div",{className:"cad-im-stage",children:[(0,q.jsxs)("svg",{className:"cad-im-icon",viewBox:"0 0 64 64","aria-hidden":"true",children:[(0,q.jsx)("path",{d:"M14 6h26l10 10v42H14z",fill:"rgba(30,58,138,.55)",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,q.jsx)("path",{d:"M40 6v10h10",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,q.jsx)("circle",{cx:"31",cy:"36",r:"8.5",fill:"none",stroke:"#7dd3fc",strokeWidth:"2"}),(0,q.jsx)("path",{d:"M31 22.5v6M31 43.5v6M17.5 36h6M38.5 36h6",stroke:"#7dd3fc",strokeWidth:"2",strokeLinecap:"round"})]}),i&&i.status==="done"?(0,q.jsxs)("svg",{className:"cad-im-check",viewBox:"0 0 48 48",children:[(0,q.jsx)("circle",{cx:"24",cy:"24",r:"21"}),(0,q.jsx)("path",{d:"M13 25l7.5 7.5L35 16"})]}):null]}),(0,q.jsx)("div",{className:"cad-im-title",children:u?"\u677E\u624B\uFF0C\u5F00\u59CB\u89E3\u6790\u56FE\u7EB8":"\u62D6\u62FD CAD \u56FE\u7EB8\u5230\u6B64\u5904"}),(0,q.jsx)("div",{className:"cad-im-sub",children:u?"\u652F\u6301 .dwg / .dxf / .step":"\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6 \xB7 \u89E3\u6790\u540E\u5B9E\u4F53\u53E0\u52A0\u5230\u53F3\u4FA7 3D \u573A\u666F"}),i?(0,q.jsxs)("div",{className:"cad-im-chip",children:[i.name," \xB7 ",(i.size/1024).toFixed(1)," KB"]}):null,(0,q.jsx)("input",{ref:n,type:"file",accept:".dwg,.dxf,.step,.stp",style:{display:"none"},onChange:M=>{C(M.target.files&&M.target.files[0]),M.target.value=""}})]}),i?(0,q.jsxs)("div",{style:yt.info,children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u6587\u4EF6"}),i.name]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u5927\u5C0F"}),(i.size/1024).toFixed(1)," KB"]}),(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:"\u72B6\u6001"}),v]}),i.error?(0,q.jsx)("div",{style:{color:"#f87171"},children:i.error}):null]}):null,(0,q.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,q.jsx)("button",{type:"button",className:"cad-im-btn","data-busy":o?"true":"false",disabled:!i||o,onClick:_,children:o?"\u89E3\u6790\u4E2D\u2026":"\u89E3\u6790"}),g?(0,q.jsx)("button",{type:"button",className:"cad-im-btn cad-im-dl",onClick:()=>{let M=document.createElement("a");M.href=g.url,M.download=g.name,document.body.appendChild(M),M.click(),setTimeout(()=>M.remove(),2e3)},children:"\u2B07 \u4E0B\u8F7D DXF"}):null]}),s?(0,q.jsx)(Wx,{scene:s,hiddenLayers:h,onToggleLayer:T}):null,s?(0,q.jsx)(Xx,{scene:s}):null,s?(0,q.jsx)(qx,{scene:s}):null]}),(0,q.jsxs)("div",{style:yt.col,children:[(0,q.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,q.jsx)("h3",{style:Object.assign({},yt.title,{flex:1}),children:p?"CAD \u56FE\u7EB8 \xB7 2D \u4FEF\u89C6":"Three.js 3D \u573A\u666F\u663E\u793A\u533A"}),(0,q.jsxs)("div",{className:"cad-v-toggle",children:[(0,q.jsx)("button",{type:"button",className:"cad-v-btn","data-on":p?"false":"true",onClick:()=>m(!1),children:"3D \u573A\u666F"}),(0,q.jsx)("button",{type:"button",className:"cad-v-btn","data-on":p?"true":"false",onClick:()=>m(!0),children:"CAD \u56FE\u7EB8"})]})]}),(0,q.jsxs)("div",{style:{position:"relative",flex:1,minHeight:0,display:"flex"},children:[p?(0,q.jsx)(Jx,{scene:s||qc,selectedId:l&&l.item?l.item.id:null,onSelect:c,hiddenLayers:h}):(0,q.jsx)(Ed,{scene:s||qc,selectedId:l&&l.item?l.item.id:null,onSelect:c,hiddenLayers:h}),s?null:(0,q.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:12,pointerEvents:"none",fontSize:12,opacity:.7},children:p?"\u89E3\u6790\u540E\u5728\u6B64\u67E5\u770B CAD \u56FE\u7EB8\uFF08\u6EDA\u8F6E\u7F29\u653E\u3001\u62D6\u62FD\u5E73\u79FB\uFF0C\u70B9\u51FB\u56FE\u5143\u67E5\u770B\u8BE6\u60C5\uFF09":"\u89E3\u6790\u540E\u5B9E\u4F53\u5C06\u53E0\u52A0\u5230\u573A\u666F\u4E2D\uFF08\u5DE6\u952E\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001\u53F3\u952E\u5E73\u79FB\uFF0C\u70B9\u51FB\u5B9E\u4F53\u67E5\u770B\u8BE6\u60C5\uFF09"})]}),(0,q.jsx)(wd,{scene:s||qc,selection:l})]})]})}function $x(i){return(0,q.jsx)(dl,{children:(0,q.jsx)(Kx,{...i})})}function bd(i){let e=i&&i.content||[];for(let t of e)if(t&&t.type==="text"&&typeof t.text=="string")return t.text;return""}function jx(i){if(!i||i.kind!=="tool-result"||i.isError)return null;for(let e of i.content||[])if(!(!e||e.type!=="text"||typeof e.text!="string"))try{let t=JSON.parse(e.text);if(t&&Array.isArray(t.racks)&&Array.isArray(t.aisles)&&Array.isArray(t.zones))return t}catch{}return null}function Qx(i){let e=i&&i.block,t=(0,st.useMemo)(()=>jx(e),[e]),[n,s]=(0,st.useState)(null);return!e||e.kind!=="tool-result"?(0,q.jsx)("div",{style:yt.info,children:"\u6B63\u5728\u89E3\u6790 CAD \u56FE\u7EB8\u2026"}):e.isError?(0,q.jsxs)("div",{style:yt.info,children:["\u89E3\u6790\u5931\u8D25\uFF1A",bd(e)]}):t?(0,q.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:"4px 0"},children:[(0,q.jsx)(Hx,{scene:t}),t.meta&&t.meta.summary&&(t.entities||[]).length===0?(0,q.jsxs)("div",{style:yt.info,children:[(0,q.jsxs)("div",{children:[(0,q.jsx)("b",{children:"\u6458\u8981\u6A21\u5F0F"}),"\uFF08detail: 'full' \u8FD4\u56DE\u5168\u91CF\u5B9E\u4F53\uFF09"]}),Object.entries(t.meta.summary.byType||{}).map(r=>(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:r[0]}),r[1]]},r[0])),(t.layers||[]).slice(0,24).map(r=>(0,q.jsxs)("div",{children:[(0,q.jsx)("span",{style:yt.label,children:r.name}),r.count]},r.name))]}):(0,q.jsx)("div",{style:{height:380,display:"flex"},children:(0,q.jsx)(Ed,{scene:t,selectedId:n&&n.item?n.item.id:null,onSelect:s})}),(0,q.jsx)(wd,{scene:t,selection:n})]}):(0,q.jsx)("pre",{style:yt.pre,children:bd(e)})}function ey(i){return(0,q.jsx)(dl,{children:(0,q.jsx)(Qx,{...i})})}function ty(i){let e=i&&typeof i.size=="number"?i.size:18;return(0,q.jsx)("span",{style:{fontSize:e,lineHeight:1},children:"\u{1F4D0}"})}function ny(i){i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:"cad-scene-builder",label:"3d\u89E3\u6790",order:100},ty)),i.slots.inject("main",()=>i.slots.register({name:"main",key:"cad-scene-builder"},$x)),i.slots.inject("tool.call.toolview",()=>i.slots.register({name:"tool.call.toolview",key:"parse_cad_to_scene"},ey))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

		return module.exports;
	}
});
