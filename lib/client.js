window.__ModuleLoader__.load({
	id: "dsh-cad-scene",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var $p=Object.create;var qa=Object.defineProperty;var Qp=Object.getOwnPropertyDescriptor;var em=Object.getOwnPropertyNames;var tm=Object.getPrototypeOf,nm=Object.prototype.hasOwnProperty;var im=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},sm=(i,e)=>{for(var t in e)qa(i,t,{get:e[t],enumerable:!0})},Hu=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of em(e))!nm.call(i,s)&&s!==t&&qa(i,s,{get:()=>e[s],enumerable:!(n=Qp(e,s))||n.enumerable});return i};var rm=(i,e,t)=>(t=i!=null?$p(tm(i)):{},Hu(e||!i||!i.__esModule?qa(t,"default",{value:i,enumerable:!0}):t,i)),am=i=>Hu(qa({},"__esModule",{value:!0}),i);var Ap=im((Ep,sc)=>{(function(i,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof sc=="object"&&sc.exports?sc.exports=e():i.log=e()})(Ep,function(){"use strict";var i=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],s={},r=null;function a(p,_){var m=p[_];if(typeof m.bind=="function")return m.bind(p);try{return Function.prototype.bind.call(m,p)}catch{return function(){return Function.prototype.apply.apply(m,[p,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(p){return p==="debug"&&(p="log"),typeof console===e?!1:p==="trace"&&t?o:console[p]!==void 0?a(console,p):console.log!==void 0?a(console,"log"):i}function c(){for(var p=this.getLevel(),_=0;_<n.length;_++){var m=n[_];this[m]=_<p?i:this.methodFactory(m,p,this.name)}if(this.log=this.debug,typeof console===e&&p<this.levels.SILENT)return"No console available for logging"}function f(p){return function(){typeof console!==e&&(c.call(this),this[p].apply(this,arguments))}}function h(p,_,m){return l(p)||f.apply(this,arguments)}function u(p,_){var m=this,g,E,T,x="loglevel";typeof p=="string"?x+=":"+p:typeof p=="symbol"&&(x=void 0);function M(C){var I=(n[C]||"silent").toUpperCase();if(!(typeof window===e||!x)){try{window.localStorage[x]=I;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+I+";"}catch{}}}function b(){var C;if(!(typeof window===e||!x)){try{C=window.localStorage[x]}catch{}if(typeof C===e)try{var I=window.document.cookie,k=encodeURIComponent(x),G=I.indexOf(k+"=");G!==-1&&(C=/^([^;]+)/.exec(I.slice(G+k.length+1))[1])}catch{}return m.levels[C]===void 0&&(C=void 0),C}}function S(){if(!(typeof window===e||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function y(C){var I=C;if(typeof I=="string"&&m.levels[I.toUpperCase()]!==void 0&&(I=m.levels[I.toUpperCase()]),typeof I=="number"&&I>=0&&I<=m.levels.SILENT)return I;throw new TypeError("log.setLevel() called with invalid level: "+C)}m.name=p,m.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},m.methodFactory=_||h,m.getLevel=function(){return T??E??g},m.setLevel=function(C,I){return T=y(C),I!==!1&&M(T),c.call(m)},m.setDefaultLevel=function(C){E=y(C),b()||m.setLevel(C,!1)},m.resetLevel=function(){T=null,S(),c.call(m)},m.enableAll=function(C){m.setLevel(m.levels.TRACE,C)},m.disableAll=function(C){m.setLevel(m.levels.SILENT,C)},m.rebuild=function(){if(r!==m&&(g=y(r.getLevel())),c.call(m),r===m)for(var C in s)s[C].rebuild()},g=y(r?r.getLevel():"WARN");var A=b();A!=null&&(T=y(A)),c.call(m)}r=new u,r.getLogger=function(_){if(typeof _!="symbol"&&typeof _!="string"||_==="")throw new TypeError("You must supply a name when creating a logger.");var m=s[_];return m||(m=s[_]=new u(_,r.methodFactory)),m};var d=typeof window!==e?window.log:void 0;return r.noConflict=function(){return typeof window!==e&&window.log===r&&(window.log=d),r},r.getLoggers=function(){return s},r.default=r,r})});var oS={};sm(oS,{apply:()=>aS,inject:()=>Ub});module.exports=am(oS);var St=require("react");var Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nf=0,$c=1,Uf=2;var ha=1,Ff=2,or=3,ri=0,cn=1,gn=2,ai=0,lr=1,Qc=2,eh=3,th=4,Of=5;var xs=100,Bf=101,kf=102,zf=103,Vf=104,Hf=200,Gf=201,Wf=202,Xf=203,nh=204,ih=205,Yf=206,qf=207,Kf=208,Zf=209,jf=210,Jf=211,$f=212,Qf=213,ed=214,Ro=0,Co=1,Io=2,Xs=3,Po=4,Lo=5,Do=6,No=7,ua=0,td=1,nd=2,Vn=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,hh=7,Fc="attached",id="detached",uh=300,qi=301,ys=302,cr=303,Qo=304,fa=306,Fn=1e3,on=1001,Ys=1002,Nt=1003,el=1004;var _s=1005;var Ut=1006,hr=1007;var Hn=1008;var xn=1009,fh=1010,dh=1011,ur=1012,tl=1013,Gn=1014,Mn=1015,Wn=1016,nl=1017,il=1018,fr=1020,ph=35902,mh=35899,gh=1021,xh=1022,wn=1023,$n=1026,Ki=1027,sl=1028,rl=1029,Zi=1030,al=1031;var ol=1033,da=33776,pa=33777,ma=33778,ga=33779,ll=35840,cl=35841,hl=35842,ul=35843,fl=36196,dl=37492,pl=37496,ml=37488,gl=37489,xa=37490,xl=37491,yl=37808,_l=37809,vl=37810,bl=37811,Sl=37812,Ml=37813,wl=37814,Tl=37815,El=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Ll=36492,Dl=36494,Nl=36495,Ul=36283,Fl=36284,ya=36285,Ol=36286;var is=2300,ss=2301,To=2302,Oc=2303,Bc=2400,kc=2401,zc=2402,sd=2500;var yh=0,_a=1,dr=2,rd=3200;var pr=0,ad=1,Ti="",lt="srgb",ln="srgb-linear",Br="linear",gt="srgb";var Eo=7680;var od=519,ld=512,cd=513,hd=514,Bl=515,ud=516,fd=517,kl=518,dd=519,_h=35044;var vh="300 es",Nn=2e3,qs=2001;function om(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=Ks("canvas");return i.style.display="block",i}var Gu={},Zs=null;function kr(...i){let e="THREE."+i.shift();Zs?Zs("log",e,...i):console.log(e,...i)}function md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=md(i);let e="THREE."+i.shift();if(Zs)Zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=md(i);let e="THREE."+i.shift();if(Zs)Zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ns(...i){let e=i.join(" ");e in Gu||(Gu[e]=!0,ke(...i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xd={[Ro]:Co,[Io]:Do,[Po]:No,[Xs]:Lo,[Co]:Ro,[Do]:Io,[No]:Po,[Lo]:Xs},On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=1234567,Fr=Math.PI/180,rs=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function bh(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hm(i,e,t){return i!==e?(t-i)/(e-i):0}function Or(i,e,t){return(1-t)*i+t*e}function um(i,e,t,n){return Or(i,e,1-Math.exp(-t*n))}function fm(i,e=1){return e-Math.abs(bh(i,e*2)-e)}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gm(i,e){return i+Math.random()*(e-i)}function xm(i){return i*(.5-Math.random())}function ym(i){i!==void 0&&(Wu=i);let e=Wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(i){return i*Fr}function vm(i){return i*rs}function bm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),f=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*f,l*h,l*u,o*c);break;case"YZY":i.set(l*u,o*f,l*h,o*c);break;case"ZXZ":i.set(l*h,l*u,o*f,o*c);break;case"XZX":i.set(o*f,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*f,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*f,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ot={DEG2RAD:Fr,RAD2DEG:rs,generateUUID:Un,clamp:$e,euclideanModulo:bh,mapLinear:cm,inverseLerp:hm,lerp:Or,damp:um,pingpong:fm,smoothstep:dm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:xm,seededRandom:ym,degToRad:_m,radToDeg:vm,isPowerOfTwo:bm,ceilPowerOfTwo:Sm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:wm,normalize:vt,denormalize:Dn},Ce=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(h!==_||l!==u||c!==d||f!==p){let m=l*u+c*d+f*p+h*_;m<0&&(u=-u,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let E=Math.acos(m),T=Math.sin(E);g=Math.sin(g*E)/T,o=Math.sin(o*E)/T,l=l*g+u*o,c=c*g+d*o,f=f*g+p*o,h=h*g+_*o}else{l=l*g+u*o,c=c*g+d*o,f=f*g+p*o,h=h*g+_*o;let E=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=E,c*=E,f*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+f*h+l*d-c*u,e[t+1]=l*p+f*u+c*h-o*d,e[t+2]=c*p+f*d+o*u-l*h,e[t+3]=f*p-o*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h-u*d*p;break;case"YXZ":this._x=u*f*h+c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h+u*d*p;break;case"ZXY":this._x=u*f*h-c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h-u*d*p;break;case"ZYX":this._x=u*f*h-c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h+u*d*p;break;case"YZX":this._x=u*f*h+c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h-u*d*p;break;case"XZY":this._x=u*f*h-c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h+u*d*p;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=n+o+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new L,Xu=new Tt,qe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],p=n[8],_=s[0],m=s[3],g=s[6],E=s[1],T=s[4],x=s[7],M=s[2],b=s[5],S=s[8];return r[0]=a*_+o*E+l*M,r[3]=a*m+o*T+l*b,r[6]=a*g+o*x+l*S,r[1]=c*_+f*E+h*M,r[4]=c*m+f*T+h*b,r[7]=c*g+f*x+h*S,r[2]=u*_+d*E+p*M,r[5]=u*m+d*T+p*b,r[8]=u*g+d*x+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,p=t*h+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*c-f*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(f*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fc=new qe,Yu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Yu,fromXYZ:qu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),i}var Xe=Tm();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Es,Uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Ks("canvas")),Es.width=e.width,Es.height=e.height;let s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Am=0,pc=new L,Ft=class i extends On{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=on,s=on,r=Ut,a=Hn,o=wn,l=xn,c=i.DEFAULT_ANISOTROPY,f=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Un(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=uh;Ft.DEFAULT_ANISOTROPY=1;var rt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,x=(d+1)/2,M=(g+1)/2,b=(f+u)/4,S=(h+_)/4,y=(p+m)/4;return T>x&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=S/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=S/r,s=y/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(E)<.001&&(E=1),this.x=(m-p)/E,this.y=(h-_)/E,this.z=(u-f)/E,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fo=class extends On{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ft(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zr=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oo=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var we=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,f,h,u,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,h,u,d,p,_,m)}set(e,t,n,s,r,a,o,l,c,f,h,u,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=f,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*f,d=a*h,p=o*f,_=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*f,d=l*h,p=c*f,_=c*h;t[0]=u+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=d*o-p,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*f,d=l*h,p=c*f,_=c*h;t[0]=u-_*o,t[4]=-a*h,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*f,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*f,d=a*h,p=o*f,_=o*h;t[0]=l*f,t[4]=p*c-d,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*f,t[4]=_-u*h,t[8]=p*h+d,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*h+p,t[10]=u-_*h}else if(e.order==="XZY"){let u=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+_,t[5]=a*f,t[9]=d*h-p,t[2]=p*h-d,t[6]=o*f,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Cm)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Pi.crossVectors(n,_n),Pi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Pi.crossVectors(n,_n)),Pi.normalize(),Ka.crossVectors(_n,Pi),s[0]=Pi.x,s[4]=Ka.x,s[8]=_n.x,s[1]=Pi.y,s[5]=Ka.y,s[9]=_n.y,s[2]=Pi.z,s[6]=Ka.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],E=n[3],T=n[7],x=n[11],M=n[15],b=s[0],S=s[4],y=s[8],A=s[12],C=s[1],I=s[5],k=s[9],G=s[13],N=s[2],z=s[6],Q=s[10],J=s[14],se=s[3],U=s[7],V=s[11],ee=s[15];return r[0]=a*b+o*C+l*N+c*se,r[4]=a*S+o*I+l*z+c*U,r[8]=a*y+o*k+l*Q+c*V,r[12]=a*A+o*G+l*J+c*ee,r[1]=f*b+h*C+u*N+d*se,r[5]=f*S+h*I+u*z+d*U,r[9]=f*y+h*k+u*Q+d*V,r[13]=f*A+h*G+u*J+d*ee,r[2]=p*b+_*C+m*N+g*se,r[6]=p*S+_*I+m*z+g*U,r[10]=p*y+_*k+m*Q+g*V,r[14]=p*A+_*G+m*J+g*ee,r[3]=E*b+T*C+x*N+M*se,r[7]=E*S+T*I+x*z+M*U,r[11]=E*y+T*k+x*Q+M*V,r[15]=E*A+T*G+x*J+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],E=l*d-c*u,T=o*d-c*h,x=o*u-l*h,M=a*d-c*f,b=a*u-l*f,S=a*h-o*f;return t*(_*E-m*T+g*x)-n*(p*E-m*M+g*b)+s*(p*T-_*M+g*S)-r*(p*x-_*b+m*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],E=t*o-n*a,T=t*l-s*a,x=t*c-r*a,M=n*l-s*o,b=n*c-r*o,S=s*c-r*l,y=f*_-h*p,A=f*m-u*p,C=f*g-d*p,I=h*m-u*_,k=h*g-d*_,G=u*g-d*m,N=E*G-T*k+x*I+M*C-b*A+S*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(o*G-l*k+c*I)*z,e[1]=(s*k-n*G-r*I)*z,e[2]=(_*S-m*b+g*M)*z,e[3]=(u*b-h*S-d*M)*z,e[4]=(l*C-a*G-c*A)*z,e[5]=(t*G-s*C+r*A)*z,e[6]=(m*x-p*S-g*T)*z,e[7]=(f*S-u*x+d*T)*z,e[8]=(a*k-o*C+c*y)*z,e[9]=(n*C-t*k-r*y)*z,e[10]=(p*b-_*x+g*E)*z,e[11]=(h*x-f*b-d*E)*z,e[12]=(o*A-a*I-l*y)*z,e[13]=(t*I-n*A+s*y)*z,e[14]=(_*T-p*M-m*E)*z,e[15]=(f*M-h*T+u*E)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,p=r*h,_=a*f,m=a*h,g=o*h,E=l*c,T=l*f,x=l*h,M=n.x,b=n.y,S=n.z;return s[0]=(1-(_+g))*M,s[1]=(d+x)*M,s[2]=(p-T)*M,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(u+g))*b,s[6]=(m+E)*b,s[7]=0,s[8]=(p+T)*S,s[9]=(m-E)*S,s[10]=(1-(u+_))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,f=1/o,h=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,f=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Nn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,f=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Nn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===qs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},As=new L,In=new we,Rm=new L(0,0,0),Cm=new L(1,1,1),Pi=new L,Ka=new L,_n=new L,Ku=new we,Zu=new Tt,Gt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Im=0,ju=new L,Rs=new Tt,fi=new we,Za=new L,wr=new L,Pm=new L,Lm=new Tt,Ju=new L(1,0,0),$u=new L(0,1,0),Qu=new L(0,0,1),ef={type:"added"},Dm={type:"removed"},Cs={type:"childadded",child:null},mc={type:"childremoved",child:null},yt=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Gt,n=new Tt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new qe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Qu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(wr,Za,this.up):fi.lookAt(Za,wr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(fi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),mc.child=e,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nm={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ja={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=bh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gc(a,r,e+1/3),this.g=gc(a,r,e),this.b=gc(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=lt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let n=yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Xe.workingToColorSpace($t.copy(this),e),Math.round($e($t.r*255,0,255))*65536+Math.round($e($t.g*255,0,255))*256+Math.round($e($t.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=lt){Xe.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(ja);let n=Or(Li.h,ja.h,t),s=Or(Li.s,ja.s,t),r=Or(Li.l,ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new _e;_e.NAMES=yd;var Vr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hr=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new L,di=new L,xc=new L,pi=new L,Is=new L,Ps=new L,tf=new L,yc=new L,_c=new L,vc=new L,bc=new rt,Sc=new rt,Mc=new rt,yi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),di.subVectors(n,t),xc.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(di),l=Pn.dot(xc),c=di.dot(di),f=di.dot(xc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-o*f)*u,p=(a*f-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return bc.setScalar(0),Sc.setScalar(0),Mc.setScalar(0),bc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),Mc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bc,r.x),a.addScaledVector(Sc,r.y),a.addScaledVector(Mc,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),di.subVectors(e,t),Pn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Pn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Is.subVectors(s,n),Ps.subVectors(r,n),yc.subVectors(e,n);let l=Is.dot(yc),c=Ps.dot(yc);if(l<=0&&c<=0)return t.copy(n);_c.subVectors(e,s);let f=Is.dot(_c),h=Ps.dot(_c);if(f>=0&&h<=f)return t.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Is,a);vc.subVectors(e,r);let d=Is.dot(vc),p=Ps.dot(vc);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ps,o);let m=f*p-d*h;if(m<=0&&h-f>=0&&d-p>=0)return tf.subVectors(r,s),o=(h-f)/(h-f+(d-p)),t.copy(s).addScaledVector(tf,o);let g=1/(m+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Is,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),$a.subVectors(this.max,Tr),Ls.subVectors(e.a,Tr),Ds.subVectors(e.b,Tr),Ns.subVectors(e.c,Tr),Di.subVectors(Ds,Ls),Ni.subVectors(Ns,Ds),$i.subVectors(Ls,Ns);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-$i.z,$i.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,$i.z,0,-$i.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-$i.y,$i.x,0];return!wc(t,Ls,Ds,Ns,$a)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,Ls,Ds,Ns,$a))?!1:(Qa.crossVectors(Di,Ni),t=[Qa.x,Qa.y,Qa.z],wc(t,Ls,Ds,Ns,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,Ja=new en,Ls=new L,Ds=new L,Ns=new L,Di=new L,Ni=new L,$i=new L,Tr=new L,$a=new L,Qa=new L,Qi=new L;function wc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);let o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),f=n.dot(Qi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Vt=new L,eo=new Ce,Um=0,Ht=class extends On{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var as=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gr=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fm=new en,Er=new L,Tc=new L,un=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Tc)),this.expandByPoint(Er.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Om=0,En=new we,Ec=new yt,Us=new L,vn=new en,Ar=new en,Kt=new L,Ct=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?Gr:as)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ec.lookAt(e),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(vn.min,Ar.min),vn.expandByPoint(Kt),Kt.addVectors(vn.max,Ar.max),vn.expandByPoint(Kt)):(vn.expandByPoint(Ar.min),vn.expandByPoint(Ar.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Kt.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Kt.add(Us)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new L,l[y]=new L;let c=new L,f=new L,h=new L,u=new Ce,d=new Ce,p=new Ce,_=new L,m=new L;function g(y,A,C){c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),f.sub(c),h.sub(c),d.sub(u),p.sub(u);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(I),o[y].add(_),o[A].add(_),o[C].add(_),l[y].add(m),l[A].add(m),l[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let y=0,A=E.length;y<A;++y){let C=E[y],I=C.start,k=C.count;for(let G=I,N=I+k;G<N;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let T=new L,x=new L,M=new L,b=new L;function S(y){M.fromBufferAttribute(s,y),b.copy(M);let A=o[y];T.copy(A),T.sub(M.multiplyScalar(M.dot(A))).normalize(),x.crossVectors(b,A);let I=x.dot(l[y])<0?-1:1;a.setXYZW(y,T.x,T.y,T.z,I)}for(let y=0,A=E.length;y<A;++y){let C=E[y],I=C.start,k=C.count;for(let G=I,N=I+k;G<N;G+=3)S(e.getX(G+0)),S(e.getX(G+1)),S(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,f=new L,h=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f),d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*f;for(let g=0;g<f;g++)u[p++]=c[d++]}return new Ht(u,f,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},an=new L,Oi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ac=new L,Bm=new L,km=new qe,bn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(Bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||km.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zm=0,Zt=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=lr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qs=class extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Rr=new L,Os=new L,Bs=new L,ks=new Ce,Cr=new Ce,_d=new we,to=new L,Ir=new L,no=new L,nf=new Ce,Rc=new Ce,sf=new Ce,Wr=class extends yt{constructor(e=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new os(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Oi(n,3,0,!1)),Fs.setAttribute("uv",new Oi(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),_d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;io(to.set(-.5,-.5,0),Bs,a,Os,s,r),io(Ir.set(.5,-.5,0),Bs,a,Os,s,r),io(no.set(.5,.5,0),Bs,a,Os,s,r),nf.set(0,0),Rc.set(1,0),sf.set(1,1);let o=e.ray.intersectTriangle(to,Ir,no,!1,Rr);if(o===null&&(io(Ir.set(-.5,.5,0),Bs,a,Os,s,r),Rc.set(0,1),o=e.ray.intersectTriangle(to,no,Ir,!1,Rr),o===null))return;let l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:yi.getInterpolation(Rr,to,Ir,no,nf,Rc,sf,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function io(i,e,t,n,s,r){ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*ks.x-s*ks.y,Cr.y=s*ks.x+r*ks.y):Cr.copy(ks),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(_d)}var gi=new L,Cc=new L,so=new L,ro=new L,Qn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cc.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(Cc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),f=Math.abs(1-a*a),h,u,d,p;if(f>0)if(h=a*l-o,u=a*o-l,p=r*f,h>=0)if(u>=-p)if(u<=p){let _=1/f;h*=_,u*=_,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Cc).addScaledVector(so,u),d}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=e.x-a.x,u=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,m=t.z-a.z,g=n.x-a.x,E=n.y-a.y,T=n.z-a.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(f),S,y,A,C,I,k,G,N,z,Q,J,se;if(x>=M&&x>=b?(A=l,k=h,z=p,se=g,l>=0?(S=c,y=f,C=u,I=d,G=_,N=m,Q=E,J=T):(S=f,y=c,C=d,I=u,G=m,N=_,Q=T,J=E)):M>=b?(A=c,k=u,z=_,se=E,c>=0?(S=f,y=l,C=d,I=h,G=m,N=p,Q=T,J=g):(S=l,y=f,C=h,I=d,G=p,N=m,Q=g,J=T)):(A=f,k=d,z=m,se=T,f>=0?(S=l,y=c,C=h,I=u,G=p,N=_,Q=g,J=E):(S=c,y=l,C=u,I=h,G=_,N=p,Q=E,J=g)),A===0)return null;let U=S/A,V=y/A,ee=1/A,re=C-U*k,oe=I-V*k,pe=G-U*z,Ne=N-V*z,ze=Q-U*se,j=J-V*se,Z=ze*Ne-j*pe,ie=re*j-oe*ze,Ie=pe*oe-Ne*re;if(s){if(Z<0||ie<0||Ie<0)return null}else if((Z<0||ie<0||Ie<0)&&(Z>0||ie>0||Ie>0))return null;let de=Z+ie+Ie;if(de===0)return null;let Oe=ee*(Z*k+ie*z+Ie*se);return(de>0?Oe<0:Oe>0)?null:this.at(Oe/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new we,es=new Qn,ao=new un,af=new L,oo=new L,lo=new L,co=new L,Ic=new L,ho=new L,of=new L,uo=new L,Pt=class extends yt{constructor(e=new Ct,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],h=r[l];f!==0&&(Ic.fromBufferAttribute(h,e),a?ho.addScaledVector(Ic,f):ho.addScaledVector(Ic.sub(t),f))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(ao.containsPoint(es.origin)===!1&&(es.intersectSphere(ao,af)===null||es.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),es.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,M=T;x<M;x+=3){let b=o.getX(x),S=o.getX(x+1),y=o.getX(x+2);s=fo(this,g,e,n,c,f,h,b,S,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let E=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);s=fo(this,a,e,n,c,f,h,E,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a[m.materialIndex],E=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,M=T;x<M;x+=3){let b=x,S=x+1,y=x+2;s=fo(this,g,e,n,c,f,h,b,S,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let E=m,T=m+1,x=m+2;s=fo(this,a,e,n,c,f,h,E,T,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Vm(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ri,o),l===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(uo);return c<t.near||c>t.far?null:{distance:c,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,oo),i.getVertexPosition(l,lo),i.getVertexPosition(c,co);let f=Vm(i,e,t,n,oo,lo,co,of);if(f){let h=new L;yi.getBarycoord(of,oo,lo,co,h),s&&(f.uv=yi.getInterpolatedAttribute(s,o,l,c,h,new Ce)),r&&(f.uv1=yi.getInterpolatedAttribute(r,o,l,c,h,new Ce)),a&&(f.normal=yi.getInterpolatedAttribute(a,o,l,c,h,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};yi.getNormal(oo,lo,co,u.normal),f.face=u,f.barycoord=h}return f}var Pr=new rt,lf=new rt,cf=new rt,Hm=new rt,hf=new we,po=new L,Pc=new un,uf=new we,Lc=new Qn,ls=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fc,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingBox.expandByPoint(po)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingSphere.expandByPoint(po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(s),e.ray.intersectsSphere(Pc)!==!1&&(uf.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;lf.fromBufferAttribute(s.attributes.skinIndex,e),cf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Pr.copy(t),t.set(0,0,0,0)):(Pr.set(...t,1),t.set(0,0,0)),Pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=cf.getComponent(r);if(a!==0){let o=lf.getComponent(r);hf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hm.copy(Pr).applyMatrix4(hf),a)}}return t.isVector4&&(t.w=Pr.w),t.applyMatrix4(this.bindMatrixInverse)}},vi=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},er=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Nt,f=Nt,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ff=new we,Gm=new we,cs=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Gm;ff.multiplyMatrices(o,t[r]),ff.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new er(t,e,e,wn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new vi),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},bi=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new we,df=new we,mo=[],pf=new en,Wm=new we,Lr=new Pt,Dr=new un,hs=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),pf.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(pf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Dr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),df.multiplyMatrices(n,zs),Lr.matrixWorld=df,Lr.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let l=mo[a];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,sl,Mn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ts=new un,Xm=new Ce(.5,.5),go=new L,tr=class{constructor(e=new bn,t=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],E=r[12],T=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,d-f,g-p,M-E).normalize(),s[1].setComponents(c+a,d+f,g+p,M+E).normalize(),s[2].setComponents(c+o,d+h,g+_,M+T).normalize(),s[3].setComponents(c-o,d-h,g-_,M-T).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,d-u,g-m,M-x).normalize();else if(s[4].setComponents(c-l,d-u,g-m,M-x).normalize(),t===Nn)s[5].setComponents(c+l,d+u,g+m,M+x).normalize();else if(t===qs)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);let t=Xm.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ei=class extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new L,ko=new L,mf=new we,Nr=new Qn,xo=new un,Dc=new L,gf=new L,ti=class extends yt{constructor(e=new Ct,t=new ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bo.fromBufferAttribute(t,s-1),ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bo.distanceTo(ko);e.setAttribute("lineDistance",new xt(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;mf.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){let g=f.getX(_),E=f.getX(_+1),T=yo(this,e,Nr,l,g,E,_);T&&t.push(T)}if(this.isLineLoop){let _=f.getX(p-1),m=f.getX(d),g=yo(this,e,Nr,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,m=p-1;_<m;_+=c){let g=yo(this,e,Nr,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=yo(this,e,Nr,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Bo.fromBufferAttribute(o,s),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Bo,ko,Dc,gf)>n)return;Dc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dc);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var xf=new L,yf=new L,nr=class extends ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xf.fromBufferAttribute(t,s),yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xf.distanceTo(yf);e.setAttribute("lineDistance",new xt(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xr=class extends ti{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new we,Vc=new Qn,_o=new un,vo=new L,Yr=class extends yt{constructor(e=new Ct,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;_f.copy(s).invert(),Vc.copy(e.ray).applyMatrix4(_f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,_=d;p<_;p++){let m=c.getX(p);vo.fromBufferAttribute(h,m),vf(vo,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=u,_=d;p<_;p++)vo.fromBufferAttribute(h,p),vf(vo,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vf(i,e,t,n,s,r,a){let o=Vc.distanceSqToPoint(i);if(o<t){let l=new L;Vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qr=class extends Ft{constructor(e=[],t=qi,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends Ft{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends Ft{constructor(e,t,n=Gn,s,r,a,o=Nt,l=Nt,c,f=$n,h=1){if(f!==$n&&f!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zo=class extends Bi{constructor(e,t=Gn,n=qi,s,r,a=Nt,o=Nt,l,c=$n){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],h=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(h,2));function p(_,m,g,E,T,x,M,b,S,y,A){let C=x/S,I=M/y,k=x/2,G=M/2,N=b/2,z=S+1,Q=y+1,J=0,se=0,U=new L;for(let V=0;V<Q;V++){let ee=V*I-G;for(let re=0;re<z;re++){let oe=re*C-k;U[_]=oe*E,U[m]=ee*T,U[g]=N,c.push(U.x,U.y,U.z),U[_]=0,U[m]=0,U[g]=b>0?1:-1,f.push(U.x,U.y,U.z),h.push(re/S),h.push(1-V/y),J+=1}}for(let V=0;V<y;V++)for(let ee=0;ee<S;ee++){let re=u+ee+z*V,oe=u+ee+z*(V+1),pe=u+(ee+1)+z*(V+1),Ne=u+(ee+1)+z*V;l.push(re,oe,Ne),l.push(oe,pe,Ne),se+=6}o.addGroup(d,se,A),d+=se,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var jr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let f=n[s],u=n[s+1]-f,d=(a-f)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ce:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new we;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Ym(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Jm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let f=o,h=l;for(let u=t;u<s;u+=t){let d=i[u],p=i[u+1];d<o&&(o=d),p<l&&(l=p),d>f&&(f=d),p>h&&(h=p)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return Jr(r,a,t,o,l,c,0),a}function vd(i,e,t,n,s){let r;if(s===lg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bf(a/n|0,i[a],i[a+1],r);return r&&sr(r,r.next)&&(Qr(r),r=r.next),r}function us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||It(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ng(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Km(i,n,s,r):qm(i)){e.push(l.i,i.i,c.i),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Zm(us(i),e),Jr(i,e,t,n,s,r,2)):a===2&&jm(i,e,t,n,s,r):Jr(us(i),e,t,n,s,r,1);break}}}function qm(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=Math.min(s,r,a),h=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=f&&p.x<=u&&p.y>=h&&p.y<=d&&Ur(s,o,r,l,a,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Km(i,e,t,n){let s=i.prev,r=i,a=i.next;if(It(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(f,h,u),_=Math.max(o,l,c),m=Math.max(f,h,u),g=Hc(d,p,e,t,n),E=Hc(_,m,e,t,n),T=i.prevZ,x=i.nextZ;for(;T&&T.z>=g&&x&&x.z<=E;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==a&&Ur(o,f,l,h,c,u,T.x,T.y)&&It(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Ur(o,f,l,h,c,u,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=g;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=m&&T!==s&&T!==a&&Ur(o,f,l,h,c,u,T.x,T.y)&&It(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==a&&Ur(o,f,l,h,c,u,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!sr(n,s)&&Sd(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Qr(t),Qr(t.next),t=i=s),t=t.next}while(t!==i);return us(t)}function jm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&rg(a,o)){let l=Md(a,o);a=us(a,a.next),l=us(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Jm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(sg(c))}s.sort($m);for(let r=0;r<s.length;r++)t=Qm(s[r],t);return t}function $m(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Qm(i,e){let t=eg(i,e);if(!t)return e;let n=Md(t,i);return us(n,n.next),us(t,t.next)}function eg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(sr(i,t))return t;do{if(sr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,f=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&tg(a,t)))&&(a=t,f=h)}t=t.next}while(t!==o);return a}function tg(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function ng(i,e,t,n){let s=i;do s.z===0&&(s.z=Hc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ig(s)}function ig(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Hc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function sg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ur(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&bd(i,e,t,n,s,r,a,o)}function rg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ag(i,e)&&($r(i,e)&&$r(e,i)&&og(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||sr(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sr(i,e){return i.x===e.x&&i.y===e.y}function Sd(i,e,t,n){let s=So(It(i,e,t)),r=So(It(i,e,n)),a=So(It(t,n,i)),o=So(It(t,n,e));return!!(s!==r&&a!==o||s===0&&bo(i,t,e)||r===0&&bo(i,n,e)||a===0&&bo(t,i,n)||o===0&&bo(t,e,n))}function bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function So(i){return i>0?1:i<0?-1:0}function ag(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function og(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){let t=Gc(i.i,i.x,i.y),n=Gc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bf(i,e,t,n){let s=Gc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wc=class{static triangulate(e,t,n=2){return Ym(e,t,n)}},ea=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Sf(e),Mf(n,e);let a=e.length;t.forEach(Sf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Mf(n,t[l]);let o=Wc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Sf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Mf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fs=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=e/o,u=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<f;g++){let E=g*u-a;for(let T=0;T<c;T++){let x=T*h-r;p.push(x,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let E=0;E<o;E++){let T=E+c*g,x=E+c*(g+1),M=E+1+c*(g+1),b=E+1+c*g;d.push(T,x,b),d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ta=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,f=[],h=new L,u=new L,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let E=[],T=g/n,x=a+T*o,M=e*Math.cos(x),b=Math.sqrt(e*e-M*M),S=0;g===0&&a===0?S=.5/t:g===n&&l===Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){let A=y/t,C=s+A*r;h.x=-b*Math.cos(C),h.y=M,h.z=b*Math.sin(C),p.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(A+S,1-T),E.push(c++)}f.push(E)}for(let g=0;g<n;g++)for(let E=0;E<t;E++){let T=f[g][E+1],x=f[g][E],M=f[g+1][E],b=f[g+1][E+1];(g!==0||a>0)&&d.push(T,x,b),(g!==n-1||l<Math.PI)&&d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wf(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=vs(i[t]);for(let s in n)e[s]=n[s]}return e}function wf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var wd={clone:vs,merge:tn},hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vo=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ni=class extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},zi=class extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var na=class extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ua,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ho=class extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ao(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function fg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function dg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wo=class extends ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kc:r=e,o=2*t-n;break;case zc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kc:a=e,l=2*n-t;break;case zc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,E=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,T=(-1-d)*m+(1.5+d)*_+.5*p,x=d*m-d*_;for(let M=0;M!==o;++M)r[M]=g*a[f+M]+E*a[c+M]+T*a[l+M]+x*a[h+M];return r}},Xo=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),h=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*f;return r}},Yo=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qo=class extends ii{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}let u=o*2,d=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=d*u+p*2,E=h[g],T=h[g+1],x=e*u+p*2,M=f[x],b=f[x+1],S=mg(n,t,E,M,s);r[p]=Td(S,_,T,b,m)}return r}};function Td(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function pg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Td(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=pg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ao(e.settings)&&(n.settings={inTangents:Fi(e.settings.inTangents,Array),outTangents:Fi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new qo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ss:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case Oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ao(this.settings)&&(Ef(this.settings.inTangents,e),Ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[u+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ao(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ss;var Si=class extends pn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=is;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};ia.prototype.ValueTypeName="color";var Bn=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Bn.prototype.ValueTypeName="number";var Ko=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let f=c+o;c!==f;c+=4)Tt.slerpFlat(r,0,a,c-o,a,c,l);return r}},kn=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}};kn.prototype.ValueTypeName="quaternion";kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends pn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=is;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};si.prototype.ValueTypeName="vector";var ds=class{constructor(e="",t=-1,n=[],s=sd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let f=fg(l);l=Tf(l,1,f),c=Tf(c,1,f),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Bn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],f=c.name.match(r);if(f&&f.length>1){let h=f[1],u=s[h];u||(s[h]=u=[]),u.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bn;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return ia;case"quaternion":return kn;case"bool":case"boolean":return Si;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gg(i.type);if(i.times===void 0){let n=[],s=[];dg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ao(i.settings)&&(t.settings={inTangents:Fi(i.settings.inTangents,Float32Array),outTangents:Fi(i.settings.outTangents,Float32Array)}),t}var Jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Af(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Af(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Af(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Zo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Zo,mn=class{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Xc=class extends Error{constructor(e,t){super(e),this.response=t}},Vi=class extends mn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let f=xi[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0,_=0,m=new ReadableStream({start(g){E();function E(){h.read().then(({done:T,value:x})=>{if(T)g.close();else{_+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let b=0,S=f.length;b<S;b++){let y=f[b];y.onProgress&&y.onProgress(M)}g.enqueue(x),E()}},T=>{g.error(T)})}}});return new Response(m)}else throw new Xc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Jn.add(`file:${e}`,c);let f=xi[e];delete xi[e];for(let h=0,u=f.length;h<u;h++){let d=f[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let f=xi[e];if(f===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let h=0,u=f.length;h<u;h++){let d=f[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,jo=class extends mn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Vs.get(a);h===void 0&&(h=[],Vs.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Ks("img");function l(){f(),t&&t(this);let h=Vs.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function c(h){f(),s&&s(h),Jn.remove(`image:${e}`);let u=Vs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onError&&p.onError(h)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ps=class extends mn{constructor(e){super(e)}load(e,t,n,s){let r=new Ft,a=new jo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hi=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sa=class extends Hi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nc=new we,Rf=new L,Cf=new L,rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Nc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mo=new L,wo=new Tt,jn=new L,ra=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mo,wo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,wo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Mo,wo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,wo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new L,If=new Ce,Pf=new Ce,Lt=class extends ra{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,If,Pf),t.subVectors(Pf,If)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yc=class extends rr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ms=class extends Hi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qc=class extends rr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends Hi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wi=class extends ra{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kc=class extends rr{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends Hi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gs=class extends Hi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var zn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Uc=new WeakMap,aa=class extends mn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Jn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Uc.has(a)===!0?(s&&s(Uc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Jn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Uc.set(l,c),Jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=-90,Gs=1,Jo=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Hs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Hs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Lt(Hs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Lt(Hs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$o=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mh="\\[\\]\\.:\\/",yg=new RegExp("["+Mh+"]","g"),wh="[^"+Mh+"]",_g="[^"+Mh.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",wh),bg=/(WCOD+)?/.source.replace("WCOD",_g),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),wg=new RegExp("^"+vg+bg+Sg+Mg+"$"),Tg=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(e){let t=wg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=Zc;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cS=new Float32Array(1);var Lf=new we,oa=class{constructor(e,t,n=0,s=1/0){this.ray=new Qn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(e,t=!0,n=[]){return jc(e,this,n,t),n.sort(Df),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,n,t);return n.sort(Df),n}};function Df(i,e){return i.distance-e.distance}function jc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)jc(r[a],e,t,!0)}}var ar=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Jc=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var la=class extends nr{constructor(e=10,t=10,n=4473924,s=8947848){n=new _e(n),s=new _e(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let _=u===r?n:s;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}let f=new Ct;f.setAttribute("position",new xt(l,3)),f.setAttribute("color",new xt(c,3));let h=new ei({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var ca=class extends On{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Th(i,e,t,n){let s=Eg(n);switch(t){case gh:return i*e;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case xh:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case ol:return i*e*4/s.components*s.byteLength;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case fl:case dl:case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case xa:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eg(i){switch(i){case xn:case fh:return{byteLength:1,components:1};case ur:case dh:case Wn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Gn:case tl:case Mn:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dg(i){let e=new WeakMap;function t(o,l){let c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<h.length;d++){let p=h[u],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,h[u]=_)}h.length=u+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
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
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hg=`#ifdef USE_BATCHING
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
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,E0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
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
#endif`,L0=`uniform sampler2D dfgLUT;
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
}`,D0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fx=`uniform sampler2D t2D;
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,Qx=`#define MATCAP
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
}`,ey=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,sy=`#define PHONG
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
}`,ry=`#define STANDARD
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
}`,ay=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ly=`#define TOON
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
}`,cy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ng,alphahash_pars_fragment:Ug,alphamap_fragment:Fg,alphamap_pars_fragment:Og,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:zg,aomap_pars_fragment:Vg,batching_pars_vertex:Hg,batching_vertex:Gg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:Yg,iridescence_fragment:qg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:$g,color_fragment:Qg,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:a0,displacementmap_vertex:o0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:E0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:y0,fog_fragment:_0,fog_pars_fragment:v0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:S0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:w0,lights_pars_begin:T0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:I0,lights_physical_fragment:P0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:N0,lights_fragment_end:U0,lightprobes_pars_fragment:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:z0,map_fragment:V0,map_pars_fragment:H0,map_particle_fragment:G0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:q0,morphcolor_vertex:K0,morphnormal_vertex:Z0,morphtarget_pars_vertex:j0,morphtarget_vertex:J0,normal_fragment_begin:$0,normal_fragment_maps:Q0,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:hx,project_vertex:ux,dithering_fragment:fx,dithering_pars_fragment:dx,roughnessmap_fragment:px,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:yx,shadowmap_vertex:_x,shadowmask_pars_fragment:vx,skinbase_vertex:bx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:wx,specularmap_fragment:Tx,specularmap_pars_fragment:Ex,tonemapping_fragment:Ax,tonemapping_pars_fragment:Rx,transmission_fragment:Cx,transmission_pars_fragment:Ix,uv_pars_fragment:Px,uv_pars_vertex:Lx,uv_vertex:Dx,worldpos_vertex:Nx,background_vert:Ux,background_frag:Fx,backgroundCube_vert:Ox,backgroundCube_frag:Bx,cube_vert:kx,cube_frag:zx,depth_vert:Vx,depth_frag:Hx,distance_vert:Gx,distance_frag:Wx,equirect_vert:Xx,equirect_frag:Yx,linedashed_vert:qx,linedashed_frag:Kx,meshbasic_vert:Zx,meshbasic_frag:jx,meshlambert_vert:Jx,meshlambert_frag:$x,meshmatcap_vert:Qx,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:sy,meshphysical_vert:ry,meshphysical_frag:ay,meshtoon_vert:oy,meshtoon_frag:ly,points_vert:cy,points_frag:hy,shadow_vert:uy,shadow_frag:fy,sprite_vert:dy,sprite_frag:py},ve={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},li={basic:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new _e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([ve.points,ve.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([ve.common,ve.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([ve.sprite,ve.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:tn([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:tn([ve.lights,ve.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var zl={r:0,b:0,g:0},gy=new we,Zd=new qe;Zd.set(-1,0,0,0,1,0,0,0,1);function xy(i,e,t,n,s,r){let a=new _e(0),o=s===!0?0:1,l,c,f=null,h=0,u=null;function d(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let x=E.backgroundBlurriness>0;T=e.get(T,x)}return T}function p(E){let T=!1,x=d(E);x===null?m(a,o):x&&x.isColor&&(m(x,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,T){let x=d(T);x&&(x.isCubeTexture||x.mapping===fa)?(c===void 0&&(c=new Pt(new ki(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:vs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==gt,(f!==x||h!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pt(new fs(2,2),new Sn({name:"BackgroundMaterial",uniforms:vs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,T){E.getRGB(zl,Sh(i)),t.buffers.color.setClear(zl.r,zl.g,zl.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:p,addToRenderList:_,dispose:g}}function yy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,k,G,N,z){let Q=!1,J=h(I,N,G,k);r!==J&&(r=J,c(r.object)),Q=d(I,N,G,z),Q&&p(I,N,G,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(I,k,G,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function f(I){return i.deleteVertexArray(I)}function h(I,k,G,N){let z=N.wireframe===!0,Q=n[k.id];Q===void 0&&(Q={},n[k.id]=Q);let J=I.isInstancedMesh===!0?I.id:0,se=Q[J];se===void 0&&(se={},Q[J]=se);let U=se[G.id];U===void 0&&(U={},se[G.id]=U);let V=U[z];return V===void 0&&(V=u(l()),U[z]=V),V}function u(I){let k=[],G=[],N=[];for(let z=0;z<t;z++)k[z]=0,G[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,k,G,N){let z=r.attributes,Q=k.attributes,J=0,se=G.getAttributes();for(let U in se)if(se[U].location>=0){let ee=z[U],re=Q[U];if(re===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function p(I,k,G,N){let z={},Q=k.attributes,J=0,se=G.getAttributes();for(let U in se)if(se[U].location>=0){let ee=Q[U];ee===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));let re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),z[U]=re,J++}r.attributes=z,r.attributesNum=J,r.index=N}function _(){let I=r.newAttributes;for(let k=0,G=I.length;k<G;k++)I[k]=0}function m(I){g(I,0)}function g(I,k){let G=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;G[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),z[I]!==k&&(i.vertexAttribDivisor(I,k),z[I]=k)}function E(){let I=r.newAttributes,k=r.enabledAttributes;for(let G=0,N=k.length;G<N;G++)k[G]!==I[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function T(I,k,G,N,z,Q,J){J===!0?i.vertexAttribIPointer(I,k,G,z,Q):i.vertexAttribPointer(I,k,G,N,z,Q)}function x(I,k,G,N){_();let z=N.attributes,Q=G.getAttributes(),J=k.defaultAttributeValues;for(let se in Q){let U=Q[se];if(U.location>=0){let V=z[se];if(V===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let ee=V.normalized,re=V.itemSize,oe=e.get(V);if(oe===void 0)continue;let pe=oe.buffer,Ne=oe.type,ze=oe.bytesPerElement,j=Ne===i.INT||Ne===i.UNSIGNED_INT||V.gpuType===tl;if(V.isInterleavedBufferAttribute){let Z=V.data,ie=Z.stride,Ie=V.offset;if(Z.isInstancedInterleavedBuffer){for(let de=0;de<U.locationSize;de++)g(U.location+de,Z.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let de=0;de<U.locationSize;de++)T(U.location+de,re/U.locationSize,Ne,ee,ie*ze,(Ie+re/U.locationSize*de)*ze,j)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)g(U.location+Z,V.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Z=0;Z<U.locationSize;Z++)T(U.location+Z,re/U.locationSize,Ne,ee,re*ze,re/U.locationSize*Z*ze,j)}}else if(J!==void 0){let ee=J[se];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(U.location,ee);break;case 3:i.vertexAttrib3fv(U.location,ee);break;case 4:i.vertexAttrib4fv(U.location,ee);break;default:i.vertexAttrib1fv(U.location,ee)}}}}E()}function M(){A();for(let I in n){let k=n[I];for(let G in k){let N=k[G];for(let z in N){let Q=N[z];for(let J in Q)f(Q[J].object),delete Q[J];delete N[z]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;let k=n[I.id];for(let G in k){let N=k[G];for(let z in N){let Q=N[z];for(let J in Q)f(Q[J].object),delete Q[J];delete N[z]}}delete n[I.id]}function S(I){for(let k in n){let G=n[k];for(let N in G){let z=G[N];if(z[I.id]===void 0)continue;let Q=z[I.id];for(let J in Q)f(Q[J].object),delete Q[J];delete z[I.id]}}}function y(I){for(let k in n){let G=n[k],N=I.isInstancedMesh===!0?I.id:0,z=G[N];if(z!==void 0){for(let Q in z){let J=z[Q];for(let se in J)f(J[se].object),delete J[se];delete z[Q]}delete G[N],Object.keys(G).length===0&&delete n[k]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function _y(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==wn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let y=S===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==xn&&S!==Mn&&!y&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(ke("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:x,maxSamples:M,samples:b}}function by(i){let e=this,t=null,n=0,s=!1,r=!1,a=new bn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?f(null):c();else{let E=r?0:n,T=E*4,x=g.clippingState||null;l.value=x,x=f(p,u,T,d);for(let M=0;M!==T;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,u,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,x=d;T!==_;++T,x+=4)a.copy(h[T]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var gr=4,Sy=6,My=20,wy=256,va=new Wi,Ad=new _e,Eh=null,Ah=0,Rh=0,Ch=!1,Ty=new L,bs=new L,Hl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ty}=r;Eh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Wn,format:wn,colorSpace:ln,depthBuffer:!1},s=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ey(r)),this._blurMaterial=Ry(r,e,t),this._ggxMaterial=Ay(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new Ct,e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s,r){let l=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ad),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new ki,new fn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,g=!0):(m.color.copy(Ad),g=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[T]));let M=this._cubeSize;mr(s,x*M,T>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qi||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;mr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-gr?n-p+gr:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,mr(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(o,va),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,mr(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(o,va)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-gr?s-this._lodMax+gr:0),u=4*(this._cubeSize-f);mr(t,h,u,3*f,2*f),a.setRenderTarget(t),a.render(l,va)}};function Ey(i){let e=[],t=[],n=i,s=i-gr+1+Sy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,p=new Float32Array(d*u*h),_=new Float32Array(d*u*h);for(let g=0;g<h;g++){let E=g%3*2/3-1,T=g>2?0:-1,x=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];p.set(x,d*u*g);for(let M=0;M<u;M++){let b=f[M*2]*2-1,S=f[M*2+1]*2-1;g===0?bs.set(1,S,b):g===1?bs.set(-b,1,-S):g===2?bs.set(-b,S,1):g===3?bs.set(-1,S,-b):g===4?bs.set(-b,-1,S):bs.set(b,S,-1),bs.toArray(_,(g*u+M)*d)}}let m=new Ct;m.setAttribute("position",new Ht(p,d)),m.setAttribute("outputDirection",new Ht(_,d)),t.push(new Pt(m,null)),n>gr&&n--}return{lodMeshes:t,sizeLods:e}}function Rd(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ay(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ry(i,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:My,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Cd(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Id(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gl=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:ai});r.uniforms.tEquirect.value=t;let a=new Pt(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Ut),new Jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Cy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===cr||d===Qo)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Gl(p.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===cr||d===Qo,_=d===qi||d===ys;if(p||_){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Hl(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return p&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new Hl(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===cr?u.mapping=qi:d===Qo&&(u.mapping=ys),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Iy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function Py(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(d!==null){let E=d.array;_=d.version;for(let T=0,x=E.length;T<x;T+=3){let M=E[T+0],b=E[T+1],S=E[T+2];u.push(M,b,b,S,S,M)}}else{let E=p.array;_=p.version;for(let T=0,x=E.length/3-1;T<x;T+=3){let M=T+0,b=T+1,S=T+2;u.push(M,b,b,S,S,M)}}let m=new(p.count>=65535?Gr:as)(u,1);m.version=_;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Ly(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*a,d),t.update(u,n,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ny(i,e,t){let n=new WeakMap,s=new rt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(o);if(u===void 0||u.count!==h){let A=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let x=o.attributes.position.count*T,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*M*4*h),S=new zr(b,x,M,h);S.type=Mn,S.needsUpdate=!0;let y=T*4;for(let C=0;C<h;C++){let I=m[C],k=g[C],G=E[C],N=x*M*4*C;for(let z=0;z<I.count;z++){let Q=z*y;d===!0&&(s.fromBufferAttribute(I,z),b[N+Q+0]=s.x,b[N+Q+1]=s.y,b[N+Q+2]=s.z,b[N+Q+3]=0),p===!0&&(s.fromBufferAttribute(k,z),b[N+Q+4]=s.x,b[N+Q+5]=s.y,b[N+Q+6]=s.z,b[N+Q+7]=0),_===!0&&(s.fromBufferAttribute(G,z),b[N+Q+8]=s.x,b[N+Q+9]=s.y,b[N+Q+10]=s.z,b[N+Q+11]=G.itemSize===4?s.w:1)}}u={count:h,texture:S,size:new Ce(x,M)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Uy(i,e,t,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var Fy={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function Oy(i,e,t,n,s,r){let a=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ct;c.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xt([0,2,0,0,2,0],2));let f=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(c,f),u=new Wi(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,E=[],T=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<E.length;b++){let S=E[b];S.setSize&&S.setSize(x,M)}},this.setEffects=function(x){E=x,T=E.length>0&&E[0].isRenderPass===!0;let M=a.width,b=a.height;E.length>0&&o===null&&(o=new hn(M,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(M,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<E.length;S++){let y=E[S];y.setSize&&y.setSize(M,b)}},this.begin=function(x,M){if(_||x.toneMapping===Vn&&E.length===0)return!1;if(g=M,M!==null){let b=M.width,S=M.height;(a.width!==b||a.height!==S)&&this.setSize(b,S)}return T===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Vn,!0},this.hasRenderPass=function(){return T},this.end=function(x,M){x.toneMapping=m,_=!0;let b=a,S=o;for(let y=0;y<E.length;y++){let A=E[y];A.enabled!==!1&&(A.render(x,S,b,M),A.needsSwap!==!1&&(b=S,S=S===o?l:o))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,f.defines={},Xe.getTransfer(d)===gt&&(f.defines.SRGB_TRANSFER="");let y=Fy[p];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(h,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var jd=new Ft,Lh=new Bi(1,1),Jd=new zr,$d=new Oo,Qd=new qr,Pd=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yl(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function By(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Xt(t,n)}}function Gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),Xt(t,n)}}function Wy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Dd.set(n),i.uniformMatrix4fv(this.addr,!1,Dd),Xt(t,n)}}function Xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=t.isReversedDepthBuffer()?kl:Bl,r=Lh):r=jd,t.setTexture2D(e||r,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$d,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qd,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jd,s)}function i_(i){switch(i){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return Yy;case 35668:case 35672:return qy;case 35669:case 35673:return Ky;case 5125:return Zy;case 36294:return jy;case 36295:return Jy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(i,e){i.uniform1fv(this.addr,e)}function r_(i,e){let t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function a_(i,e){let t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function o_(i,e){let t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function l_(i,e){let t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c_(i,e){let t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h_(i,e){let t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function d_(i,e){i.uniform3iv(this.addr,e)}function p_(i,e){i.uniform4iv(this.addr,e)}function m_(i,e){i.uniform1uiv(this.addr,e)}function g_(i,e){i.uniform2uiv(this.addr,e)}function x_(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function __(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Lh:a=jd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function v_(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$d,r[a])}function b_(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qd,r[a])}function S_(i,e,t){let n=this.cache,s=e.length,r=Yl(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jd,r[a])}function M_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return f_;case 35668:case 35672:return d_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return x_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return S_}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i_(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function Fd(i,e){i.seq.push(e),i.map[e.id]=e}function w_(i,e,t){let n=i.name,s=n.length;for(Ih.lastIndex=0;;){let r=Ih.exec(n),a=Ih.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fd(t,c===void 0?new Dh(o,i,e):new Nh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Uh(o),Fd(t,h)),t=h}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);w_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T_=37297,E_=0;function A_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bd=new qe;function R_(i){Xe._getMatrix(Bd,Xe.workingColorSpace,i);let e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+A_(i.getShaderSource(e),o)}else return r}function C_(i,e){let t=R_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var I_={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function P_(i,e){let t=I_[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Vl=new L;function L_(){Xe.getLuminanceCoefficients(Vl);let i=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function N_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Sa(i){return i!==""}function zd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(F_,B_)}var O_=new Map;function B_(i,e){let t=et[e];if(t===void 0){let n=O_.get(e);if(n!==void 0)t=et[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fh(t)}var k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(k_,z_)}function z_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var V_={[ha]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function H_(i){return V_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G_={[qi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE_UV"};function W_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":G_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var X_={[ys]:"ENVMAP_MODE_REFRACTION"};function Y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":X_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q_={[ua]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function K_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":q_[i.combine]||"ENVMAP_BLENDING_NONE"}function Z_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function j_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=H_(t),c=W_(t),f=Y_(t),h=K_(t),u=Z_(t),d=D_(t),p=N_(r),_=s.createProgram(),m,g,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sa).join(`
`),g.length>0&&(g+=`
`)):(m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),g=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?et.tonemapping_pars_fragment:"",t.toneMapping!==Vn?P_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,C_("linearToOutputTexel",t.outputColorSpace),L_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Fh(a),a=zd(a,t),a=Vd(a,t),o=Fh(o),o=zd(o,t),o=Vd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let T=E+m+a,x=E+g+o,M=Od(s,s.VERTEX_SHADER,T),b=Od(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(b)||"",z=k.trim(),Q=G.trim(),J=N.trim(),se=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,b);else{let V=kd(s,M,"vertex"),ee=kd(s,b,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+V+`
`+ee)}else z!==""?ke("WebGLProgram: Program Info Log:",z):(Q===""||J==="")&&(U=!1);U&&(I.diagnostics={runnable:se,programLog:z,vertexShader:{log:Q,prefix:m},fragmentShader:{log:J,prefix:g}})}s.deleteShader(M),s.deleteShader(b),y=new xr(s,_),A=U_(s,_)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let A;this.getAttributes=function(){return A===void 0&&S(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,T_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}var J_=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=J_++,this.code=e,this.usedTimes=0}};function $_(i){return i===Zi||i===xa||i===ya}function Q_(i,e,t,n,s,r){let a=new Js,o=new Oh,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,A,C,I,k,G){let N=I.fog,z=k.geometry,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,se=e.get(y.envMap||Q,J),U=se&&se.mapping===fa?se.image.height:null,V=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&ke("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=ee!==void 0?ee.length:0,oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let pe,Ne,ze,j;if(V){let Et=li[V];pe=Et.vertexShader,Ne=Et.fragmentShader}else{pe=y.vertexShader,Ne=y.fragmentShader;let Et=o.getVertexShaderStage(y),pt=o.getFragmentShaderStage(y);o.update(y,Et,pt),ze=Et.id,j=pt.id}let Z=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,de=k.isBatchedMesh===!0,Oe=!!y.map,it=!!y.matcap,Ze=!!se,tt=!!y.aoMap,ut=!!y.lightMap,Je=!!y.bumpMap&&y.wireframe===!1,_t=!!y.normalMap,Y=!!y.displacementMap,ue=!!y.emissiveMap,ce=!!y.metalnessMap,Re=!!y.roughnessMap,P=y.anisotropy>0,Ee=y.clearcoat>0,Ge=y.dispersion>0,R=y.retroreflectivity>0,v=y.iridescence>0,B=y.sheen>0,H=y.transmission>0,q=P&&!!y.anisotropyMap,he=Ee&&!!y.clearcoatMap,fe=Ee&&!!y.clearcoatNormalMap,K=Ee&&!!y.clearcoatRoughnessMap,$=v&&!!y.iridescenceMap,le=v&&!!y.iridescenceThicknessMap,Pe=B&&!!y.sheenColorMap,me=B&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Ue=!!y.specularColorMap,He=!!y.specularIntensityMap,Ke=H&&!!y.transmissionMap,O=H&&!!y.thicknessMap,ge=!!y.gradientMap,ne=!!y.alphaMap,ye=y.alphaTest>0,Me=!!y.alphaHash,ae=!!y.extensions,Ve=Vn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Fe={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:pe,fragmentShader:Ne,defines:y.defines,customVertexShaderID:ze,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:de,batchingColor:de&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:it,envMap:Ze,envMapMode:Ze&&se.mapping,envMapCubeUVHeight:U,aoMap:tt,lightMap:ut,bumpMap:Je,normalMap:_t,displacementMap:Y,emissiveMap:ue,normalMapObjectSpace:_t&&y.normalMapType===ad,normalMapTangentSpace:_t&&y.normalMapType===pr,packedNormalMap:_t&&y.normalMapType===pr&&$_(y.normalMap.format),metalnessMap:ce,roughnessMap:Re,anisotropy:P,anisotropyMap:q,clearcoat:Ee,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:K,dispersion:Ge,retroreflection:R,iridescence:v,iridescenceMap:$,iridescenceThicknessMap:le,sheen:B,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:xe,specularColorMap:Ue,specularIntensityMap:He,transmission:H,transmissionMap:Ke,thicknessMap:O,gradientMap:ge,opaque:y.transparent===!1&&y.blending===lr&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:ye,alphaHash:Me,combine:y.combine,mapUv:Oe&&p(y.map.channel),aoMapUv:tt&&p(y.aoMap.channel),lightMapUv:ut&&p(y.lightMap.channel),bumpMapUv:Je&&p(y.bumpMap.channel),normalMapUv:_t&&p(y.normalMap.channel),displacementMapUv:Y&&p(y.displacementMap.channel),emissiveMapUv:ue&&p(y.emissiveMap.channel),metalnessMapUv:ce&&p(y.metalnessMap.channel),roughnessMapUv:Re&&p(y.roughnessMap.channel),anisotropyMapUv:q&&p(y.anisotropyMap.channel),clearcoatMapUv:he&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&p(y.sheenRoughnessMap.channel),specularMapUv:xe&&p(y.specularMap.channel),specularColorMapUv:Ue&&p(y.specularColorMap.channel),specularIntensityMapUv:He&&p(y.specularIntensityMap.channel),transmissionMapUv:Ke&&p(y.transmissionMap.channel),thicknessMapUv:O&&p(y.thicknessMap.channel),alphaMapUv:ne&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(_t||P),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Oe||ne),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&_t===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:oe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gn,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)A.push(C),A.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(g(A,y),E(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function E(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function T(y){let A=d[y.type],C;if(A){let I=li[A];C=wd.clone(I.uniforms)}else C=y.uniforms;return C}function x(y,A){let C=f.get(A);return C!==void 0?++C.usedTimes:(C=new j_(i,A,y,s),c.push(C),f.set(A,C)),C}function M(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function S(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:S}}function ev(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,_,m,g){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},i[e]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=p,E.materialVariant=a(u),E.groupOrder=_,E.renderOrder=u.renderOrder,E.z=m,E.group=g),e++,E}function l(u,d,p,_,m,g,E){E.reversedDepth===!0&&(m=-m);let T=o(u,d,p,_,m,g);p.transmission>0?n.push(T):p.transparent===!0?s.push(T):t.push(T)}function c(u,d,p,_,m,g){let E=o(u,d,p,_,m,g);p.transmission>0?n.unshift(E):p.transparent===!0?s.unshift(E):t.unshift(E)}function f(u,d){t.length>1&&t.sort(u||tv),n.length>1&&n.sort(d||Wd),s.length>1&&s.sort(d||Wd)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function nv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function iv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new _e};break;case"SpotLight":t={position:new L,direction:new L,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rv=0;function av(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ov(i){let e=new iv,t=sv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new we,a=new we;function o(c){let f=0,h=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,E=0,T=0,x=0,M=0,b=0,S=0,y=0,A=0,C=0;c.sort(av);for(let k=0,G=c.length;k<G;k++){let N=c[k],z=N.color,Q=N.intensity,J=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Zi?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=z.r*Q,h+=z.g*Q,u+=z.b*Q;else if(N.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(N.sh.coefficients[U],Q);C++}else if(N.isSunLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=ee,n.sunShadowMap[p]=se;let re=V.getViewportCount();for(let oe=0;oe<re;oe++)n.sunShadowMatrix[_+oe]=V.getMatrix(oe),n.sunShadowCascade[_+oe]=V._cascadeData[oe];_+=re,p++}n.sun[d]=U,d++}else if(N.isDirectionalLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=U,m++}else if(N.isSpotLight){let U=e.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(z).multiplyScalar(Q),U.distance=J,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,n.spot[E]=U;let V=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,V.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[E]=V.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[E]=ee,n.spotShadowMap[E]=se,S++}E++}else if(N.isRectAreaLight){let U=e.get(N);U.color.copy(z).multiplyScalar(Q),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=U,T++}else if(N.isPointLight){let U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){let V=N.shadow,ee=t.get(N);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=U,g++}else if(N.isHemisphereLight){let U=e.get(N);U.skyColor.copy(N.color).multiplyScalar(Q),U.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[x]=U,x++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==E||I.rectAreaLength!==T||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==S||I.numSpotMaps!==y||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=E,n.rectArea.length=T,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=E,I.rectAreaLength=T,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=S,I.numSpotMaps=y,I.numLightProbes=C,n.version=rv++)}function l(c,f){let h=0,u=0,d=0,p=0,_=0,m=0,g=f.matrixWorldInverse;for(let E=0,T=c.length;E<T;E++){let x=c[E];if(x.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),h++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Yd(i){let e=new ov(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yd(i),e.set(s,[o])):r>=a.length?(o=new Yd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`,uv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],fv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qd=new we,ba=new L,Ph=new L;function dv(i,e,t){let n=new tr,s=new Ce,r=new Ce,a=new rt,o=new Ho,l=new Go,c={},f=t.maxTextureSize,h={[ri]:cn,[cn]:ri,[gn]:gn},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:cv,fragmentShader:hv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ct;p.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let g=this.type;this.render=function(b,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ff&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ha);let A=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ai),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=g!==this.type;G&&S.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=b.length;N<z;N++){let Q=b[N],J=Q.shadow;if(J===void 0){ke("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let se=J.getFrameExtents();s.multiply(se),r.copy(J.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/se.x),s.x=r.x*se.x,J.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/se.y),s.y=r.y*se.y,J.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=U,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===or){if(Q.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new hn(s.x,s.y,{format:Zi,type:Wn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new Bi(s.x,s.y,Mn),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=$n,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Nt,J.map.depthTexture.magFilter=Nt}else Q.isPointLight?(J.map=new Gl(s.x),J.map.depthTexture=new zo(s.x,Gn)):(J.map=new hn(s.x,s.y),J.map.depthTexture=new Bi(s.x,s.y,Gn)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=$n,this.type===ha?(J.map.depthTexture.compareFunction=U?kl:Bl,J.map.depthTexture.minFilter=Ut,J.map.depthTexture.magFilter=Ut):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Nt,J.map.depthTexture.magFilter=Nt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let V=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Q.isPointLight!==!0&&J.updateMatrices(Q,y);for(let ee=0;ee<V;ee++){let re=J.getCamera(ee);if(Q.isPointLight){let oe=J.camera,pe=J.matrix,Ne=Q.distance||oe.far;Ne!==oe.far&&(oe.far=Ne,oe.updateProjectionMatrix()),ba.setFromMatrixPosition(Q.matrixWorld),oe.position.copy(ba),Ph.copy(oe.position),Ph.add(uv[ee]),oe.up.copy(fv[ee]),oe.lookAt(Ph),oe.updateMatrixWorld(),pe.makeTranslation(-ba.x,-ba.y,-ba.z),qd.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(qd,oe.coordinateSystem,oe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(J.map),i.clear());let oe=J.getViewport(ee);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),k.viewport(a)}n=J.getFrustum(ee),x(S,y,re,Q,this.type)}J.isPointLightShadow!==!0&&this.type===or&&E(J,y),J.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(A,C,I)};function E(b,S){let y=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new hn(s.x,s.y,{format:Zi,type:Wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,y,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,y,d,_,null)}function T(b,S,y,A){let C=null,I=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)C=I;else if(C=y.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let k=C.uuid,G=S.uuid,N=c[k];N===void 0&&(N={},c[k]=N);let z=N[G];z===void 0&&(z=C.clone(),N[G]=z,S.addEventListener("dispose",M)),C=z}if(C.visible=S.visible,C.wireframe=S.wireframe,A===or?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:h[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=y}return C}function x(b,S,y,A,C){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===or)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let G=e.update(b),N=b.material;if(Array.isArray(N)){let z=G.groups;for(let Q=0,J=z.length;Q<J;Q++){let se=z[Q],U=N[se.materialIndex];if(U&&U.visible){let V=T(b,U,A,C);b.onBeforeShadow(i,b,S,y,G,V,se),i.renderBufferDirect(y,null,G,V,b,se),b.onAfterShadow(i,b,S,y,G,V,se)}}}else if(N.visible){let z=T(b,N,A,C);b.onBeforeShadow(i,b,S,y,G,z,null),i.renderBufferDirect(y,null,G,z,b,null),b.onAfterShadow(i,b,S,y,G,z,null)}}let k=b.children;for(let G=0,N=k.length;G<N;G++)x(k[G],S,y,A,C)}function M(b){b.target.removeEventListener("dispose",M);for(let y in c){let A=c[y],C=b.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function pv(i,e){function t(){let O=!1,ge=new rt,ne=null,ye=new rt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!O&&(i.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){O=Me},setClear:function(Me,ae,Ve,Fe,Et){Et===!0&&(Me*=Fe,ae*=Fe,Ve*=Fe),ge.set(Me,ae,Ve,Fe),ye.equals(ge)===!1&&(i.clearColor(Me,ae,Ve,Fe),ye.copy(ge))},reset:function(){O=!1,ne=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,ge=!1,ne=null,ye=null,Me=null;return{setReversed:function(ae){if(ge!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ge=ae;let Fe=Me;Me=null,this.setClear(Fe)}},getReversed:function(){return ge},setTest:function(ae){ae?Z(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!O&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(ge&&(ae=xd[ae]),ye!==ae){switch(ae){case Ro:i.depthFunc(i.NEVER);break;case Co:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Lo:i.depthFunc(i.GEQUAL);break;case Do:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=ae}},setLocked:function(ae){O=ae},setClear:function(ae){Me!==ae&&(Me=ae,ge&&(ae=1-ae),i.clearDepth(ae))},reset:function(){O=!1,ne=null,ye=null,Me=null,ge=!1}}}function s(){let O=!1,ge=null,ne=null,ye=null,Me=null,ae=null,Ve=null,Fe=null,Et=null;return{setTest:function(pt){O||(pt?Z(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!O&&(i.stencilMask(pt),ge=pt)},setFunc:function(pt,Cn,Kn){(ne!==pt||ye!==Cn||Me!==Kn)&&(i.stencilFunc(pt,Cn,Kn),ne=pt,ye=Cn,Me=Kn)},setOp:function(pt,Cn,Kn){(ae!==pt||Ve!==Cn||Fe!==Kn)&&(i.stencilOp(pt,Cn,Kn),ae=pt,Ve=Cn,Fe=Kn)},setLocked:function(pt){O=pt},setClear:function(pt){Et!==pt&&(i.clearStencil(pt),Et=pt)},reset:function(){O=!1,ge=null,ne=null,ye=null,Me=null,ae=null,Ve=null,Fe=null,Et=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,E=null,T=null,x=null,M=null,b=null,S=null,y=new _e(0,0,0),A=0,C=!1,I=null,k=null,G=null,N=null,z=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,se=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(U)[1]),J=se>=1):U.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),J=se>=2);let V=null,ee={},re=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),pe=new rt().fromArray(re),Ne=new rt().fromArray(oe);function ze(O,ge,ne,ye){let Me=new Uint8Array(4),ae=i.createTexture();i.bindTexture(O,ae),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ge+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ae}let j={};j[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(Xs),Je(!1),_t($c),Z(i.CULL_FACE),tt(ai);function Z(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function ie(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Ie(O,ge){return u[O]!==ge?(i.bindFramebuffer(O,ge),u[O]=ge,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function de(O,ge){let ne=p,ye=!1;if(O){ne=d.get(ge),ne===void 0&&(ne=[],d.set(ge,ne));let Me=O.textures;if(ne.length!==Me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ve=Me.length;ae<Ve;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Me.length,ye=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ne)}function Oe(O){return _!==O?(i.useProgram(O),_=O,!0):!1}let it={[xs]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[kf]:i.FUNC_REVERSE_SUBTRACT};it[zf]=i.MIN,it[Vf]=i.MAX;let Ze={[Hf]:i.ZERO,[Gf]:i.ONE,[Wf]:i.SRC_COLOR,[nh]:i.SRC_ALPHA,[jf]:i.SRC_ALPHA_SATURATE,[Kf]:i.DST_COLOR,[Yf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[ih]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[$f]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(O,ge,ne,ye,Me,ae,Ve,Fe,Et,pt){if(O===ai){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),O!==Of){if(O!==g||pt!==C){if((E!==xs||M!==xs)&&(i.blendEquation(i.FUNC_ADD),E=xs,M=xs),pt)switch(O){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFunc(i.ONE,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",O);break}else switch(O){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case th:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",O);break}T=null,x=null,b=null,S=null,y.set(0,0,0),A=0,g=O,C=pt}return}Me=Me||ge,ae=ae||ne,Ve=Ve||ye,(ge!==E||Me!==M)&&(i.blendEquationSeparate(it[ge],it[Me]),E=ge,M=Me),(ne!==T||ye!==x||ae!==b||Ve!==S)&&(i.blendFuncSeparate(Ze[ne],Ze[ye],Ze[ae],Ze[Ve]),T=ne,x=ye,b=ae,S=Ve),(Fe.equals(y)===!1||Et!==A)&&(i.blendColor(Fe.r,Fe.g,Fe.b,Et),y.copy(Fe),A=Et),g=O,C=!1}function ut(O,ge){O.side===gn?ie(i.CULL_FACE):Z(i.CULL_FACE);let ne=O.side===cn;ge&&(ne=!ne),Je(ne),O.blending===lr&&O.transparent===!1?tt(ai):tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function _t(O){O!==Nf?(Z(i.CULL_FACE),O!==k&&(O===$c?i.cullFace(i.BACK):O===Uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),k=O}function Y(O){O!==G&&(J&&i.lineWidth(O),G=O)}function ue(O,ge,ne){O?(Z(i.POLYGON_OFFSET_FILL),(N!==ge||z!==ne)&&(N=ge,z=ne,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,ne))):ie(i.POLYGON_OFFSET_FILL)}function ce(O){O?Z(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Re(O){O===void 0&&(O=i.TEXTURE0+Q-1),V!==O&&(i.activeTexture(O),V=O)}function P(O,ge,ne){ne===void 0&&(V===null?ne=i.TEXTURE0+Q-1:ne=V);let ye=ee[ne];ye===void 0&&(ye={type:void 0,texture:void 0},ee[ne]=ye),(ye.type!==O||ye.texture!==ge)&&(V!==ne&&(i.activeTexture(ne),V=ne),i.bindTexture(O,ge||j[O]),ye.type=O,ye.texture=ge)}function Ee(){let O=ee[V];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function B(){try{i.texSubImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function he(){try{i.texStorage2D(...arguments)}catch(O){We("WebGLState:",O)}}function fe(){try{i.texStorage3D(...arguments)}catch(O){We("WebGLState:",O)}}function K(){try{i.texImage2D(...arguments)}catch(O){We("WebGLState:",O)}}function $(){try{i.texImage3D(...arguments)}catch(O){We("WebGLState:",O)}}function le(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function Pe(O,ge){h[O]!==ge&&(i.pixelStorei(O,ge),h[O]=ge)}function me(O){pe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function xe(O){Ne.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ne.copy(O))}function Ue(O,ge){let ne=c.get(ge);ne===void 0&&(ne=new WeakMap,c.set(ge,ne));let ye=ne.get(O);ye===void 0&&(ye=i.getUniformBlockIndex(ge,O.name),ne.set(O,ye))}function He(O,ge){let ye=c.get(ge).get(O);l.get(ge)!==ye&&(i.uniformBlockBinding(ge,ye,O.__bindingPointIndex),l.set(ge,ye))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},V=null,ee={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,E=null,T=null,x=null,M=null,b=null,S=null,y=new _e(0,0,0),A=0,C=!1,I=null,k=null,G=null,N=null,z=null,pe.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ie,bindFramebuffer:Ie,drawBuffers:de,useProgram:Oe,setBlending:tt,setMaterial:ut,setFlipSided:Je,setCullFace:_t,setLineWidth:Y,setPolygonOffset:ue,setScissorTest:ce,activeTexture:Re,bindTexture:P,unbindTexture:Ee,compressedTexImage2D:Ge,compressedTexImage3D:R,texImage2D:K,texImage3D:$,pixelStorei:Pe,getParameter:le,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:he,texStorage3D:fe,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:me,viewport:xe,reset:Ke}}function mv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,f=new WeakMap,h=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return p?new OffscreenCanvas(R,v):Ks("canvas")}function m(R,v,B){let H=1,q=Ge(R);if((q.width>B||q.height>B)&&(H=B/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let he=Math.floor(H*q.width),fe=Math.floor(H*q.height);u===void 0&&(u=_(he,fe));let K=v?_(he,fe):u;return K.width=he,K.height=fe,K.getContext("2d").drawImage(R,0,0,he,fe),ke("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+he+"x"+fe+")."),K}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function g(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,v,B,H,q,he=!1){if(R!==null){if(i[R]!==void 0)return i[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;H&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&fe&&(K=fe.R16_EXT),B===i.SHORT&&fe&&(K=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),v===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&fe&&(K=fe.RG16_EXT),B===i.SHORT&&fe&&(K=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&fe&&(K=fe.RGB16_EXT),B===i.SHORT&&fe&&(K=fe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let $=he?Br:Xe.getTransfer(q);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=$===gt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&fe&&(K=fe.RGBA16_EXT),B===i.SHORT&&fe&&(K=fe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(R,v){let B;return R?v===null||v===Gn||v===fr?B=i.DEPTH24_STENCIL8:v===Mn?B=i.DEPTH32F_STENCIL8:v===ur&&(B=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===fr?B=i.DEPTH_COMPONENT24:v===Mn?B=i.DEPTH_COMPONENT32F:v===ur&&(B=i.DEPTH_COMPONENT16),B}function b(R,v){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ut?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function S(R){let v=R.target;v.removeEventListener("dispose",S),A(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&h.delete(v)}function y(R){let v=R.target;v.removeEventListener("dispose",y),I(v)}function A(R){let v=n.get(R);if(v.__webglInit===void 0)return;let B=R.source,H=d.get(B);if(H){let q=H[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(H).length===0&&d.delete(B)}n.remove(R)}function C(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let B=R.source,H=d.get(B);delete H[v.__cacheKey],a.memory.textures--}function I(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let q=0;q<v.__webglFramebuffer[H].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[H][q]);else i.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)i.deleteFramebuffer(v.__webglFramebuffer[H]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=R.textures;for(let H=0,q=B.length;H<q;H++){let he=n.get(B[H]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(R)}let k=0;function G(){k=0}function N(){return k}function z(R){k=R}function Q(){let R=k;return R>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function J(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function se(R,v){let B=n.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let H=R.image;if(H===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(B,R,v);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function U(R,v){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ie(B,R,v);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function V(R,v){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ie(B,R,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function ee(R,v){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ie(B,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let re={[Fn]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Ys]:i.MIRRORED_REPEAT},oe={[Nt]:i.NEAREST,[el]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},pe={[ld]:i.NEVER,[dd]:i.ALWAYS,[cd]:i.LESS,[Bl]:i.LEQUAL,[hd]:i.EQUAL,[kl]:i.GEQUAL,[ud]:i.GREATER,[fd]:i.NOTEQUAL};function Ne(R,v){if(v.type===Mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Ut||v.magFilter===hr||v.magFilter===_s||v.magFilter===Hn||v.minFilter===Ut||v.minFilter===hr||v.minFilter===_s||v.minFilter===Hn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,oe[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nt||v.minFilter!==_s&&v.minFilter!==Hn||v.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ze(R,v){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",S));let H=v.source,q=d.get(H);q===void 0&&(q={},d.set(H,q));let he=J(v);if(he!==R.__cacheKey){q[he]===void 0&&(q[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[he].usedTimes++;let fe=q[R.__cacheKey];fe!==void 0&&(q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&C(v)),R.__cacheKey=he,R.__webglTexture=q[he].texture}return B}function j(R,v,B){return Math.floor(Math.floor(R/B)/v)}function Z(R,v,B,H){let he=R.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,H,v.data);else{he.sort((Pe,me)=>Pe.start-me.start);let fe=0;for(let Pe=1;Pe<he.length;Pe++){let me=he[fe],xe=he[Pe],Ue=me.start+me.count,He=j(xe.start,v.width,4),Ke=j(me.start,v.width,4);xe.start<=Ue+1&&He===Ke&&j(xe.start+xe.count-1,v.width,4)===He?me.count=Math.max(me.count,xe.start+xe.count-me.start):(++fe,he[fe]=xe)}he.length=fe+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Pe=0,me=he.length;Pe<me;Pe++){let xe=he[Pe],Ue=Math.floor(xe.start/4),He=Math.ceil(xe.count/4),Ke=Ue%v.width,O=Math.floor(Ue/v.width),ge=He,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ke,O,ge,ne,B,H,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ie(R,v,B){let H=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=i.TEXTURE_3D);let q=ze(R,v),he=v.source;t.bindTexture(H,R.__webglTexture,i.TEXTURE0+B);let fe=n.get(he);if(he.version!==fe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=Xe.getPrimaries(Xe.workingColorSpace),ye=v.colorSpace===Ti?null:Xe.getPrimaries(v.colorSpace),Me=v.colorSpace===Ti||ne===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let $=m(v.image,!1,s.maxTextureSize);$=Ee(v,$);let le=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),me=x(v.internalFormat,le,Pe,v.normalized,v.colorSpace,v.isVideoTexture);Ne(H,v);let xe,Ue=v.mipmaps,He=v.isVideoTexture!==!0,Ke=fe.__version===void 0||q===!0,O=he.dataReady,ge=b(v,$);if(v.isDepthTexture)me=M(v.format===Ki,v.type),Ke&&(He?t.texStorage2D(i.TEXTURE_2D,1,me,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,me,$.width,$.height,0,le,Pe,null));else if(v.isDataTexture)if(Ue.length>0){He&&Ke&&t.texStorage2D(i.TEXTURE_2D,ge,me,Ue[0].width,Ue[0].height);for(let ne=0,ye=Ue.length;ne<ye;ne++)xe=Ue[ne],He?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,xe.width,xe.height,le,Pe,xe.data):t.texImage2D(i.TEXTURE_2D,ne,me,xe.width,xe.height,0,le,Pe,xe.data);v.generateMipmaps=!1}else He?(Ke&&t.texStorage2D(i.TEXTURE_2D,ge,me,$.width,$.height),O&&Z(v,$,le,Pe)):t.texImage2D(i.TEXTURE_2D,0,me,$.width,$.height,0,le,Pe,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,me,Ue[0].width,Ue[0].height,$.depth);for(let ne=0,ye=Ue.length;ne<ye;ne++)if(xe=Ue[ne],v.format!==wn)if(le!==null)if(He){if(O)if(v.layerUpdates.size>0){let Me=Th(xe.width,xe.height,v.format,v.type);for(let ae of v.layerUpdates){let Ve=xe.data.subarray(ae*Me/xe.data.BYTES_PER_ELEMENT,(ae+1)*Me/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,xe.width,xe.height,1,le,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,$.depth,le,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,me,xe.width,xe.height,$.depth,0,xe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,xe.width,xe.height,$.depth,le,Pe,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,me,xe.width,xe.height,$.depth,0,le,Pe,xe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{He&&Ke&&t.texStorage2D(i.TEXTURE_2D,ge,me,Ue[0].width,Ue[0].height);for(let ne=0,ye=Ue.length;ne<ye;ne++)xe=Ue[ne],v.format!==wn?le!==null?He?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,me,xe.width,xe.height,0,xe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,xe.width,xe.height,le,Pe,xe.data):t.texImage2D(i.TEXTURE_2D,ne,me,xe.width,xe.height,0,le,Pe,xe.data)}else if(v.isDataArrayTexture)if(He){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,me,$.width,$.height,$.depth),O)if(v.layerUpdates.size>0){let ne=Th($.width,$.height,v.format,v.type);for(let ye of v.layerUpdates){let Me=$.data.subarray(ye*ne/$.data.BYTES_PER_ELEMENT,(ye+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,$.width,$.height,1,le,Pe,Me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,le,Pe,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,$.width,$.height,$.depth,0,le,Pe,$.data);else if(v.isData3DTexture)He?(Ke&&t.texStorage3D(i.TEXTURE_3D,ge,me,$.width,$.height,$.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,le,Pe,$.data)):t.texImage3D(i.TEXTURE_3D,0,me,$.width,$.height,$.depth,0,le,Pe,$.data);else if(v.isFramebufferTexture){if(Ke)if(He)t.texStorage2D(i.TEXTURE_2D,ge,me,$.width,$.height);else{let ne=$.width,ye=$.height;for(let Me=0;Me<ge;Me++)t.texImage2D(i.TEXTURE_2D,Me,me,ne,ye,0,le,Pe,null),ne>>=1,ye>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),$.parentNode!==ne){ne.appendChild($),h.add(v),ne.onpaint=ye=>{let Me=ye.changedElements;for(let ae of h)Me.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Me=i.RGBA,ae=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,ae,Ve,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&Ke){let ne=Ge(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ge,me,ne.width,ne.height)}for(let ne=0,ye=Ue.length;ne<ye;ne++)xe=Ue[ne],He?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le,Pe,xe):t.texImage2D(i.TEXTURE_2D,ne,me,le,Pe,xe);v.generateMipmaps=!1}else if(He){if(Ke){let ne=Ge($);t.texStorage2D(i.TEXTURE_2D,ge,me,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Pe,$)}else t.texImage2D(i.TEXTURE_2D,0,me,le,Pe,$);g(v)&&E(H),fe.__version=he.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ie(R,v,B){if(v.image.length!==6)return;let H=ze(R,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let he=n.get(q);if(q.version!==he.__version||H===!0){t.activeTexture(i.TEXTURE0+B);let fe=Xe.getPrimaries(Xe.workingColorSpace),K=v.colorSpace===Ti?null:Xe.getPrimaries(v.colorSpace),$=v.colorSpace===Ti||fe===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,me=[];for(let ae=0;ae<6;ae++)!le&&!Pe?me[ae]=m(v.image[ae],!0,s.maxCubemapSize):me[ae]=Pe?v.image[ae].image:v.image[ae],me[ae]=Ee(v,me[ae]);let xe=me[0],Ue=r.convert(v.format,v.colorSpace),He=r.convert(v.type),Ke=x(v.internalFormat,Ue,He,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ge=he.__version===void 0||H===!0,ne=q.dataReady,ye=b(v,xe);Ne(i.TEXTURE_CUBE_MAP,v);let Me;if(le){O&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,xe.width,xe.height);for(let ae=0;ae<6;ae++){Me=me[ae].mipmaps;for(let Ve=0;Ve<Me.length;Ve++){let Fe=Me[Ve];v.format!==wn?Ue!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,Ke,Fe.width,Fe.height,0,Fe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Fe.width,Fe.height,Ue,He,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,Ke,Fe.width,Fe.height,0,Ue,He,Fe.data)}}}else{if(Me=v.mipmaps,O&&ge){Me.length>0&&ye++;let ae=Ge(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Pe){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,me[ae].width,me[ae].height,Ue,He,me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,me[ae].width,me[ae].height,0,Ue,He,me[ae].data);for(let Ve=0;Ve<Me.length;Ve++){let Et=Me[Ve].image[ae].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Et.width,Et.height,Ue,He,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,Ke,Et.width,Et.height,0,Ue,He,Et.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,He,me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ke,Ue,He,me[ae]);for(let Ve=0;Ve<Me.length;Ve++){let Fe=Me[Ve];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ue,He,Fe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,Ke,Ue,He,Fe.image[ae])}}}g(v)&&E(i.TEXTURE_CUBE_MAP),he.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function de(R,v,B,H,q,he){let fe=r.convert(B.format,B.colorSpace),K=r.convert(B.type),$=x(B.internalFormat,fe,K,B.normalized,B.colorSpace),le=n.get(v),Pe=n.get(B);if(Pe.__renderTarget=v,!le.__hasExternalTextures){let me=Math.max(1,v.width>>he),xe=Math.max(1,v.height>>he);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,he,$,me,xe,v.depth,0,fe,K,null):t.texImage2D(q,he,$,me,xe,0,fe,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,q,Pe.__webglTexture,0,ce(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,q,Pe.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(R,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let H=v.depthTexture,q=H&&H.isDepthTexture?H.type:null,he=M(v.stencilBuffer,q),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),he,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let H=v.textures;for(let q=0;q<H.length;q++){let he=H[q],fe=r.convert(he.format,he.colorSpace),K=r.convert(he.type),$=x(he.internalFormat,fe,K,he.normalized,he.colorSpace);Re(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(v),$,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(v),$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(R,v,B){let H=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",S)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v.depthTexture);let le=r.convert(v.depthTexture.format),Pe=r.convert(v.depthTexture.type),me;v.depthTexture.format===$n?me=i.DEPTH_COMPONENT24:v.depthTexture.format===Ki&&(me=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,me,v.width,v.height,0,le,Pe,null)}}else se(v.depthTexture,0);let he=q.__webglTexture,fe=ce(v),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,$=v.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)Re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,he,0);else if(v.depthTexture.format===Ki)Re(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,he,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,$,K,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(R){let v=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=H}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)it(v.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?it(v.__webglFramebuffer[0],R,0):it(v.__webglFramebuffer,R,0)}else if(B){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=i.createRenderbuffer(),Oe(v.__webglDepthbuffer[H],R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,he)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Oe(v.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,v,B){let H=n.get(R);v!==void 0&&de(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ze(R)}function ut(R){let v=R.texture,B=n.get(R),H=n.get(v);R.addEventListener("dispose",y);let q=R.textures,he=R.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=v.version,a.memory.textures++),he){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[K][$]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(fe)for(let K=0,$=q.length;K<$;K++){let le=n.get(q[K]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Re(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){let $=q[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let le=r.convert($.format,$.colorSpace),Pe=r.convert($.type),me=x($.internalFormat,le,Pe,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),xe=ce(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)de(B.__webglFramebuffer[K][$],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else de(B.__webglFramebuffer[K],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(v)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let K=0,$=q.length;K<$;K++){let le=q[K],Pe=n.get(le),me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Pe.__webglTexture),Ne(me,le),de(B.__webglFramebuffer,R,le,i.COLOR_ATTACHMENT0+K,me,0),g(le)&&E(me)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,H.__webglTexture),Ne(K,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)de(B.__webglFramebuffer[$],R,v,i.COLOR_ATTACHMENT0,K,$);else de(B.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,K,0);g(v)&&E(K),t.unbindTexture()}R.depthBuffer&&Ze(R)}function Je(R){let v=R.textures;for(let B=0,H=v.length;B<H;B++){let q=v[B];if(g(q)){let he=T(R),fe=n.get(q).__webglTexture;t.bindTexture(he,fe),E(he),t.unbindTexture()}}}let _t=[],Y=[];function ue(R){if(R.samples>0){if(Re(R)===!1){let v=R.textures,B=R.width,H=R.height,q=i.COLOR_BUFFER_BIT,he=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),K=v.length>1;if(K)for(let le=0;le<v.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let le=0;le<v.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[le]);let Pe=n.get(v[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,H,0,0,B,H,q,i.NEAREST),l===!0&&(_t.length=0,Y.length=0,_t.push(i.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(he),Y.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let le=0;le<v.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,fe.__webglColorRenderbuffer[le]);let Pe=n.get(v[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ce(R){return Math.min(s.maxSamples,R.samples)}function Re(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(R){let v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function Ee(R,v){let B=R.colorSpace,H=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ln&&B!==Ti&&(Xe.getTransfer(B)===gt?(H!==wn||q!==xn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",B)),v}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=se,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=tt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gv(i,e){function t(n,s=Ti){let r,a=Xe.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===dh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===xh)return i.RGB;if(n===wn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===dl||n===pl||n===ml||n===gl||n===xa||n===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===dl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===_l||n===vl||n===bl||n===Sl||n===Ml||n===wl||n===Tl||n===El||n===Al||n===Rl||n===Cl||n===Il||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Fl||n===ya||n===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yv=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:xv,fragmentShader:yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends On{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new kh,g={},E=t.getContextAttributes(),T=null,x=null,M=[],b=[],S=new Ce,y=null,A=null,C=new Lt;C.viewport=new rt;let I=new Lt;I.viewport=new rt;let k=[C,I],G=new $o,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=M[j];return Z===void 0&&(Z=new $s,M[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=M[j];return Z===void 0&&(Z=new $s,M[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=M[j];return Z===void 0&&(Z=new $s,M[j]=Z),Z.getHandSpace()};function Q(j){let Z=b.indexOf(j.inputSource);if(Z===-1)return;let ie=M[Z];ie!==void 0&&(ie.update(j.inputSource,j.frame,c||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",se);for(let j=0;j<M.length;j++){let Z=b[j];Z!==null&&(b[j]=null,M[j].disconnect(Z))}N=null,z=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(T),d=null,u=null,h=null,s=null,x=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(S.width,S.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",se),E.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ie=null,de=null;E.depth&&(de=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?Ki:$n,Ie=E.stencil?fr:Gn);let Oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new hn(u.textureWidth,u.textureHeight,{format:wn,type:xn,depthTexture:new Bi(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new hn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(j){for(let Z=0;Z<j.removed.length;Z++){let ie=j.removed[Z],Ie=b.indexOf(ie);Ie>=0&&(b[Ie]=null,M[Ie].disconnect(ie))}for(let Z=0;Z<j.added.length;Z++){let ie=j.added[Z],Ie=b.indexOf(ie);if(Ie===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=b.length){b.push(ie),Ie=Oe;break}else if(b[Oe]===null){b[Oe]=ie,Ie=Oe;break}if(Ie===-1)break}let de=M[Ie];de&&de.connect(ie)}}let U=new L,V=new L;function ee(j,Z,ie){U.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(ie.matrixWorld);let Ie=U.distanceTo(V),de=Z.projectionMatrix.elements,Oe=ie.projectionMatrix.elements,it=de[14]/(de[10]-1),Ze=de[14]/(de[10]+1),tt=(de[9]+1)/de[5],ut=(de[9]-1)/de[5],Je=(de[8]-1)/de[0],_t=(Oe[8]+1)/Oe[0],Y=it*Je,ue=it*_t,ce=Ie/(-Je+_t),Re=ce*-Je;if(Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Re),j.translateZ(ce),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),de[10]===-1)j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let P=it+ce,Ee=Ze+ce,Ge=Y-Re,R=ue+(Ie-Re),v=tt*Ze/Ee*P,B=ut*Ze/Ee*P;j.projectionMatrix.makePerspective(Ge,R,v,B,P,Ee),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Z=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),G.near=I.near=C.near=Z,G.far=I.far=C.far=ie,(N!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,z=G.far),G.layers.mask=j.layers.mask|6,C.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let Ie=j.parent,de=G.cameras;re(G,Ie);for(let Oe=0;Oe<de.length;Oe++)re(de[Oe],Ie);de.length===2?ee(G,C,I):G.projectionMatrix.copy(C.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),oe(j,G,Ie)};function oe(j,Z,ie){ie===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return g[j]};let pe=null;function Ne(j,Z){if(f=Z.getViewerPose(c||a),p=Z,f!==null){let ie=f.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ie=!1;ie.length!==G.cameras.length&&(G.cameras.length=0,Ie=!0);for(let Ze=0;Ze<ie.length;Ze++){let tt=ie[Ze],ut=null;if(d!==null)ut=d.getViewport(tt);else{let _t=h.getViewSubImage(u,tt);ut=_t.viewport,Ze===0&&(e.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(x))}let Je=k[Ze];Je===void 0&&(Je=new Lt,Je.layers.enable(Ze),Je.viewport=new rt,k[Ze]=Je),Je.matrix.fromArray(tt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(tt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ut.x,ut.y,ut.width,ut.height),Ze===0&&(G.matrix.copy(Je.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ie===!0&&G.cameras.push(Je)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Ze=h.getDepthInformation(ie[0]);Ze&&Ze.isValid&&Ze.texture&&m.init(Ze,s.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<ie.length;Ze++){let tt=ie[Ze].camera;if(tt){let ut=g[tt];ut||(ut=new Zr,g[tt]=ut);let Je=h.getCameraImage(tt);ut.sourceTexture=Je}}}}for(let ie=0;ie<M.length;ie++){let Ie=b[ie],de=M[ie];Ie!==null&&de!==void 0&&de.update(Ie,Z,c||a)}pe&&pe(j,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}let ze=new Kd;ze.setAnimationLoop(Ne),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}},_v=new we,ep=new qe;ep.set(-1,0,0,0,1,0,0,0,1);function vv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Sh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,E,T,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),f(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,E,T):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let E=e.get(g),T=E.envMap,x=E.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ep),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,E,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*E,m.scale.value=T*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,E){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let E=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=s[x.id];b===void 0&&(m(x),b=f(x),s[x.id]=b,x.addEventListener("dispose",E));let S=M.program;n.updateUBOMapping(x,S);let y=e.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function f(x){let M=h();x.__bindingPointIndex=M;let b=i.createBuffer(),S=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=s[x.id],b=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,A=b.length;y<A;y++){let C=b[y];if(Array.isArray(C))for(let I=0,k=C.length;I<k;I++)d(C[I],y,I,S);else d(C,y,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,b,S){if(_(x,M,b,S)===!0){let y=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let I=0;I<A.length;I++){let k=A[I],G=g(k);p(k,x.__data,C),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function _(x,M,b,S){let y=x.value,A=M+"_"+b;if(S[A]===void 0)return typeof y=="number"||typeof y=="boolean"?S[A]=y:ArrayBuffer.isView(y)?S[A]=y.slice():S[A]=y.clone(),!0;{let C=S[A];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return S[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(x){let M=x.uniforms,b=0,S=16;for(let A=0,C=M.length;A<C;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let k=0,G=I.length;k<G;k++){let N=I[k],z=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,J=z.length;Q<J;Q++){let se=z[Q],U=g(se),V=b%S,ee=V%U.boundary,re=V+ee;b+=ee,re!==0&&S-re<U.storage&&(b+=S-re),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=U.storage}}}let y=b%S;return y>0&&(b+=S-y),x.__size=b,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",x),M}function E(x){let M=x.target;M.removeEventListener("dispose",E);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function Mv(){return oi===null&&(oi=new er(Sv,16,16,Zi,Wn),oi.name="DFG_LUT",oi.minFilter=Ut,oi.magFilter=Ut,oi.wrapS=on,oi.wrapT=on,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Wl=class{constructor(e={}){let{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=xn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=d,m=new Set([ol,al,rl]),g=new Set([xn,Gn,ur,fr,nl,il]),E=new Uint32Array(4),T=new Int32Array(4),x=new L,M=null,b=null,S=[],y=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,k=null,G=null,N=null,z=null;this._outputColorSpace=lt;let Q=0,J=0,se=null,U=-1,V=null,ee=new rt,re=new rt,oe=null,pe=new _e(0),Ne=0,ze=t.width,j=t.height,Z=1,ie=null,Ie=null,de=new rt(0,0,ze,j),Oe=new rt(0,0,ze,j),it=!1,Ze=new tr,tt=!1,ut=!1,Je=new we,_t=new L,Y=new rt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function Re(){return se===null?Z:1}let P=n;function Ee(w,F){return t.getContext(w,F)}let Ge,R,v,B,H,q,he,fe,K,$,le,Pe,me,xe,Ue,He,Ke,O,ge,ne,ye,Me,ae;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Cn,!1),P===null){let F="webgl2";if(P=Ee(F,w),P===null)throw Ee(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(w){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),We("WebGLRenderer: "+w.message),w}function Ve(){Ge=new Iy(P),Ge.init(),ye=new gv(P,Ge),R=new vy(P,Ge,e,ye),v=new pv(P,Ge),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),G=P.createFramebuffer(),N=P.createFramebuffer(),z=P.createFramebuffer(),B=new Dy(P),H=new ev,q=new mv(P,Ge,v,H,R,ye,B),he=new Cy(C),fe=new Dg(P),Me=new yy(P,fe),K=new Py(P,fe,B,Me),$=new Uy(P,K,fe,Me,B),O=new Ny(P,R,q),Ue=new by(H),le=new Q_(C,he,Ge,R,Me,Ue),Pe=new vv(C,H),me=new nv,xe=new lv(Ge),Ke=new xy(C,he,v,$,p,l),He=new dv(C,$,R),ae=new bv(P,B,R,v),ge=new _y(P,Ge,B),ne=new Ly(P,Ge,B),B.programs=le.programs,C.capabilities=R,C.extensions=Ge,C.properties=H,C.renderLists=me,C.shadowMap=He,C.state=v,C.info=B}_!==xn&&(A=new Oy(_,t.width,t.height,o,s,r));let Fe=new zh(C,P);this.xr=Fe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(ze,j,!1))},this.getSize=function(w){return w.set(ze,j)},this.setSize=function(w,F,te=!0){if(Fe.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=w,j=F,t.width=Math.floor(w*Z),t.height=Math.floor(F*Z),te===!0&&(t.style.width=w+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(ze*Z,j*Z).floor()},this.setDrawingBufferSize=function(w,F,te){ze=w,j=F,Z=te,t.width=Math.floor(w*te),t.height=Math.floor(F*te),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(_===xn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,F,te,W){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,F,te,W),v.viewport(ee.copy(de).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(Oe)},this.setScissor=function(w,F,te,W){w.isVector4?Oe.set(w.x,w.y,w.z,w.w):Oe.set(w,F,te,W),v.scissor(re.copy(Oe).multiplyScalar(Z).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){v.setScissorTest(it=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,te=!0){let W=0;if(w){let X=!1;if(se!==null){let Se=se.texture.format;X=m.has(Se)}if(X){let Se=se.texture.type,Ae=g.has(Se),be=Ke.getClearColor(),Le=Ke.getClearAlpha(),Be=be.r,Qe=be.g,st=be.b;Ae?(E[0]=Be,E[1]=Qe,E[2]=st,E[3]=Le,P.clearBufferuiv(P.COLOR,0,E)):(T[0]=Be,T[1]=Qe,T[2]=st,T[3]=Le,P.clearBufferiv(P.COLOR,0,T))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Cn,!1),Ke.dispose(),me.dispose(),xe.dispose(),H.dispose(),he.dispose(),$.dispose(),Me.dispose(),ae.dispose(),le.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Du),Fe.removeEventListener("sessionend",Nu),Ji.stop()};function Et(w){w.preventDefault(),kr("WebGLRenderer: Context Lost."),I=!0}function pt(){kr("WebGLRenderer: Context Restored."),I=!1;let w=B.autoReset,F=He.enabled,te=He.autoUpdate,W=He.needsUpdate,X=He.type;Ve(),B.autoReset=w,He.enabled=F,He.autoUpdate=te,He.needsUpdate=W,He.type=X}function Cn(w){We("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kn(w){let F=w.target;F.removeEventListener("dispose",Kn),Xp(F)}function Xp(w){Yp(w),H.remove(w)}function Yp(w){let F=H.get(w).programs;F!==void 0&&(F.forEach(function(te){le.releaseProgram(te)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,te,W,X,Se){F===null&&(F=ue);let Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=Zp(w,F,te,W,X);v.setMaterial(W,Ae);let Le=te.index,Be=1;if(W.wireframe===!0){if(Le=K.getWireframeAttribute(te),Le===void 0)return;Be=2}let Qe=te.drawRange,st=te.attributes.position,De=Qe.start*Be,mt=(Qe.start+Qe.count)*Be;Se!==null&&(De=Math.max(De,Se.start*Be),mt=Math.min(mt,(Se.start+Se.count)*Be)),Le!==null?(De=Math.max(De,0),mt=Math.min(mt,Le.count)):st!=null&&(De=Math.max(De,0),mt=Math.min(mt,st.count));let zt=mt-De;if(zt<0||zt===1/0)return;Me.setup(X,W,be,te,Le);let Rt,wt=ge;if(Le!==null&&(Rt=fe.get(Le),wt=ne,wt.setIndex(Rt)),X.isMesh)W.wireframe===!0?(v.setLineWidth(W.wireframeLinewidth*Re()),wt.setMode(P.LINES)):wt.setMode(P.TRIANGLES);else if(X.isLine){let jt=W.linewidth;jt===void 0&&(jt=1),v.setLineWidth(jt*Re()),X.isLineSegments?wt.setMode(P.LINES):X.isLineLoop?wt.setMode(P.LINE_LOOP):wt.setMode(P.LINE_STRIP)}else X.isPoints?wt.setMode(P.POINTS):X.isSprite&&wt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))wt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let jt=X._multiDrawStarts,Te=X._multiDrawCounts,rn=X._multiDrawCount,ot=Le?fe.get(Le).bytesPerElement:1,Tn=H.get(W).currentProgram.getUniforms();for(let Zn=0;Zn<rn;Zn++)Tn.setValue(P,"_gl_DrawID",Zn),wt.render(jt[Zn]/ot,Te[Zn])}else if(X.isInstancedMesh)wt.renderInstances(De,zt,X.count);else if(te.isInstancedBufferGeometry){let jt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Te=Math.min(te.instanceCount,jt);wt.renderInstances(De,zt,Te)}else wt.render(De,zt)};function Lu(w,F,te,W){k!==null&&w.isNodeMaterial&&k.setObject(W,w),tt===!0&&Ue.setState(w,te,!1),w.transparent===!0&&w.side===gn&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,Ya(w,F,W),w.side=ri,w.needsUpdate=!0,Ya(w,F,W),w.side=gn):Ya(w,F,W)}this.compile=function(w,F,te=null){te===null&&(te=w),k!==null&&k.renderStart(w,F,te),b=xe.get(te),b.init(F),y.push(b),te.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),w!==te&&w.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,tt=Ue.init(this.clippingPlanes,ut),tt===!0&&Ue.setGlobalState(this.clippingPlanes,F),k!==null&&He.render(b.state.shadowsArray,te,F);let W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let be=Se[Ae];Lu(be,te,F,X),W.add(be)}else Lu(Se,te,F,X),W.add(Se)}),b=y.pop(),k!==null&&k.renderEnd(),W},this.compileAsync=function(w,F,te=null){let W=this.compile(w,F,te);return new Promise(X=>{function Se(){if(W.forEach(function(Ae){let Le=H.get(Ae).currentProgram;(Le===void 0||Le.isReady())&&W.delete(Ae)}),W.size===0){X(w);return}setTimeout(Se,10)}Ge.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let cc=null;function qp(w){cc&&cc(w)}function Du(){Ji.stop()}function Nu(){Ji.start()}let Ji=new Kd;Ji.setAnimationLoop(qp),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(w){cc=w,Fe.setAnimationLoop(w),w===null?Ji.stop():Ji.start()},Fe.addEventListener("sessionstart",Du),Fe.addEventListener("sessionend",Nu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(w,F);let te=Fe.enabled===!0&&Fe.isPresenting===!0,W=A!==null&&(se===null||te)&&A.begin(C,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(F),F=Fe.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,F,se),b=xe.get(w,y.length),b.init(F),b.state.textureUnits=q.getTextureUnits(),y.push(b),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ze.setFromProjectionMatrix(Je,Nn,F.reversedDepth),ut=this.localClippingEnabled,tt=Ue.init(this.clippingPlanes,ut),M=me.get(w,S.length),M.init(),S.push(M),Fe.enabled===!0&&Fe.isPresenting===!0){let Ae=C.xr.getDepthSensingMesh();Ae!==null&&hc(Ae,F,-1/0,C.sortObjects)}hc(w,F,0,C.sortObjects),M.finish(),k!==null&&k.updateLights(b.state.lightsArray),C.sortObjects===!0&&M.sort(ie,Ie),ce=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,ce&&Ke.addToRenderList(M,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Ue.beginShadows();let X=b.state.shadowsArray;if(He.render(X,w,F),tt===!0&&Ue.endShadows(),(W&&A.hasRenderPass())===!1){let Ae=M.opaque,be=M.transmissive;if(b.setupLights(),F.isArrayCamera){let Le=F.cameras;if(be.length>0)for(let Be=0,Qe=Le.length;Be<Qe;Be++){let st=Le[Be];Fu(Ae,be,w,st)}ce&&Ke.render(w);for(let Be=0,Qe=Le.length;Be<Qe;Be++){let st=Le[Be];Uu(M,w,st,st.viewport)}}else be.length>0&&Fu(Ae,be,w,F),ce&&Ke.render(w),Uu(M,w,F)}se!==null&&J===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),W&&A.end(C),w.isScene===!0&&w.onAfterRender(C,w,F),Me.resetDefaultState(),U=-1,V=null,y.pop(),y.length>0?(b=y[y.length-1],q.setTextureUnits(b.state.textureUnits),tt===!0&&Ue.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,S.pop(),S.length>0?M=S[S.length-1]:M=null,k!==null&&k.renderEnd()};function hc(w,F,te,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Ze)){W&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Je);let Ae=$.update(w),be=w.material;be.visible&&M.push(w,Ae,be,te,Y.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Ze))){let Ae=$.update(w),be=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Y.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Y.copy(Ae.boundingSphere.center)),Y.applyMatrix4(w.matrixWorld).applyMatrix4(Je)),Array.isArray(be)){let Le=Ae.groups;for(let Be=0,Qe=Le.length;Be<Qe;Be++){let st=Le[Be],De=be[st.materialIndex];De&&De.visible&&M.push(w,Ae,De,te,Y.z,st,F)}}else be.visible&&M.push(w,Ae,be,te,Y.z,null,F)}}let Se=w.children;for(let Ae=0,be=Se.length;Ae<be;Ae++)hc(Se[Ae],F,te,W)}function Uu(w,F,te,W){let{opaque:X,transmissive:Se,transparent:Ae}=w;b.setupLightsView(te),tt===!0&&Ue.setGlobalState(C.clippingPlanes,te),W&&v.viewport(ee.copy(W)),X.length>0&&Xa(X,F,te),Se.length>0&&Xa(Se,F,te),Ae.length>0&&Xa(Ae,F,te),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Fu(w,F,te,W){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let De=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new hn(1,1,{generateMipmaps:!0,type:De?Wn:xn,minFilter:Hn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let Se=b.state.transmissionRenderTarget[W.id],Ae=W.viewport||ee;Se.setSize(Ae.z*C.transmissionResolutionScale,Ae.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Le=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(pe),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),ce&&Ke.render(te);let Qe=C.toneMapping;C.toneMapping=Vn;let st=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),tt===!0&&Ue.setGlobalState(C.clippingPlanes,W),Xa(w,te,W),q.updateMultisampleRenderTarget(Se),q.updateRenderTargetMipmap(Se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let mt=0,zt=F.length;mt<zt;mt++){let Rt=F[mt],{object:wt,geometry:jt,material:Te,group:rn}=Rt;if(Te.side===gn&&wt.layers.test(W.layers)){let ot=Te.side;Te.side=cn,Te.needsUpdate=!0,Ou(wt,te,W,jt,Te,rn),Te.side=ot,Te.needsUpdate=!0,De=!0}}De===!0&&(q.updateMultisampleRenderTarget(Se),q.updateRenderTargetMipmap(Se))}C.setRenderTarget(be,Le,Be),C.setClearColor(pe,Ne),st!==void 0&&(W.viewport=st),C.toneMapping=Qe}function Xa(w,F,te){let W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Se=w.length;X<Se;X++){let Ae=w[X],{object:be,geometry:Le,group:Be}=Ae,Qe=Ae.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),be.layers.test(te.layers)&&Ou(be,F,te,Le,Qe,Be)}}function Ou(w,F,te,W,X,Se){k!==null&&X.isNodeMaterial&&k.setObject(w,X),w.onBeforeRender(C,F,te,W,X,Se),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(C,F,te,W,w,Se),X.transparent===!0&&X.side===gn&&X.forceSinglePass===!1?(X.side=cn,X.needsUpdate=!0,C.renderBufferDirect(te,F,W,X,w,Se),X.side=ri,X.needsUpdate=!0,C.renderBufferDirect(te,F,W,X,w,Se),X.side=gn):C.renderBufferDirect(te,F,W,X,w,Se),w.onAfterRender(C,F,te,W,X,Se)}function Ya(w,F,te){F.isScene!==!0&&(F=ue);let W=H.get(w),X=b.state.lights,Se=b.state.shadowsArray,Ae=X.state.version,be=le.getParameters(w,X.state,Se,F,te,b.state.lightProbeGridArray),Le=le.getProgramCacheKey(be),Be=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=he.get(w.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Kn),Be=new Map,W.programs=Be);let st=Be.get(Le);if(st!==void 0){if(W.currentProgram===st&&W.lightsStateVersion===Ae)return ku(w,be),st}else be.uniforms=le.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,te,be),w.onBeforeCompile(be,C),st=le.acquireProgram(be,Le),Be.set(Le,st),W.uniforms=be.uniforms;let De=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Ue.uniform),ku(w,be),W.needsLights=Jp(w),W.lightsStateVersion=Ae,W.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.sunLights.value=X.state.sun,De.sunLightShadows.value=X.state.sunShadow,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.sunShadowMatrix.value=X.state.sunShadowMatrix,De.sunShadowCascade.value=X.state.sunShadowCascade,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=st,W.uniformsList=null,st}function Bu(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=xr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ku(w,F){let te=H.get(w);te.outputColorSpace=F.outputColorSpace,te.batching=F.batching,te.batchingColor=F.batchingColor,te.instancing=F.instancing,te.instancingColor=F.instancingColor,te.instancingMorph=F.instancingMorph,te.skinning=F.skinning,te.morphTargets=F.morphTargets,te.morphNormals=F.morphNormals,te.morphColors=F.morphColors,te.morphTargetsCount=F.morphTargetsCount,te.numClippingPlanes=F.numClippingPlanes,te.numIntersection=F.numClipIntersection,te.vertexAlphas=F.vertexAlphas,te.vertexTangents=F.vertexTangents,te.toneMapping=F.toneMapping}function Kp(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let te=0,W=w.length;te<W;te++){let X=w[te];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function Zp(w,F,te,W,X){F.isScene!==!0&&(F=ue),q.resetTextureUnits();let Se=F.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,be=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xe.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=he.get(W.envMap||Ae,Le),Qe=W.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color,Rt=Vn;W.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Rt=C.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,jt=wt!==void 0?wt.length:0,Te=H.get(W),rn=b.state.lights;if(tt===!0&&(ut===!0||w!==V)){let At=w===V&&W.id===U;Ue.setState(W,w,At)}let ot=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rn.state.version||Te.outputColorSpace!==be||X.isBatchedMesh&&Te.batching===!1||!X.isBatchedMesh&&Te.batching===!0||X.isBatchedMesh&&Te.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Te.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Te.instancing===!1||!X.isInstancedMesh&&Te.instancing===!0||X.isSkinnedMesh&&Te.skinning===!1||!X.isSkinnedMesh&&Te.skinning===!0||X.isInstancedMesh&&Te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Te.instancingMorph===!1&&X.morphTexture!==null||Te.envMap!==Be||W.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ue.numPlanes||Te.numIntersection!==Ue.numIntersection)||Te.vertexAlphas!==Qe||Te.vertexTangents!==st||Te.morphTargets!==De||Te.morphNormals!==mt||Te.morphColors!==zt||Te.toneMapping!==Rt||Te.morphTargetsCount!==jt||!!Te.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Te.__version=W.version);let Tn=Te.currentProgram;ot===!0&&(Tn=Ya(W,F,X),k&&W.isNodeMaterial&&k.onUpdateProgram(W,Tn,Te));let Zn=!1,Ri=!1,ws=!1,Mt=Tn.getUniforms(),Dt=Te.uniforms;if(v.useProgram(Tn.program)&&(Zn=!0,Ri=!0,ws=!0),W.id!==U&&(U=W.id,Ri=!0),Te.needsLights){let At=Kp(b.state.lightProbeGridArray,X);Te.lightProbeGrid!==At&&(Te.lightProbeGrid=At,Ri=!0)}if(Zn||V!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",w.projectionMatrix),Mt.setValue(P,"viewMatrix",w.matrixWorldInverse);let Ii=Mt.map.cameraPosition;Ii!==void 0&&Ii.setValue(P,_t.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Ri=!0,ws=!0)}if(Te.needsLights&&(rn.state.sunShadowMap.length>0&&Mt.setValue(P,"sunShadowMap",rn.state.sunShadowMap,q),rn.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",rn.state.directionalShadowMap,q),rn.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",rn.state.spotShadowMap,q),rn.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",rn.state.pointShadowMap,q)),X.isSkinnedMesh){Mt.setOptional(P,X,"bindMatrix"),Mt.setOptional(P,X,"bindMatrixInverse");let At=X.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Mt.setValue(P,"boneTexture",At.boneTexture,q))}X.isBatchedMesh&&(Mt.setOptional(P,X,"batchingTexture"),Mt.setValue(P,"batchingTexture",X._matricesTexture,q),Mt.setOptional(P,X,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",X._indirectTexture,q),Mt.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",X._colorsTexture,q));let Ci=te.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&O.update(X,te,Tn),(Ri||Te.receiveShadow!==X.receiveShadow)&&(Te.receiveShadow=X.receiveShadow,Mt.setValue(P,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Mv()),Ri){if(Mt.setValue(P,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&jp(Dt,ws),Se&&W.fog===!0&&Pe.refreshFogUniforms(Dt,Se),Pe.refreshMaterialUniforms(Dt,W,Z,j,b.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.lightProbeGrid){let At=Te.lightProbeGrid;Dt.probesSH.value=At.texture,Dt.probesMin.value.copy(At.boundingBox.min),Dt.probesMax.value.copy(At.boundingBox.max),Dt.probesResolution.value.copy(At.resolution)}xr.upload(P,Bu(Te),Dt,q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xr.upload(P,Bu(Te),Dt,q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Mt.setValue(P,"center",X.center),Mt.setValue(P,"modelViewMatrix",X.modelViewMatrix),Mt.setValue(P,"normalMatrix",X.normalMatrix),Mt.setValue(P,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let At=W.uniformsGroups;for(let Ii=0,Ts=At.length;Ii<Ts;Ii++){let Vu=At[Ii];ae.update(Vu,Tn),ae.bind(Vu,Tn)}}return Tn}function jp(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,F,te){let W=H.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=F,H.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:te,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let te=H.get(w);te.__webglFramebuffer=F,te.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,te=0){se=w,Q=F,J=te;let W=null,X=!1,Se=!1;if(w){let be=H.get(w);if(be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(w.viewport),re.copy(w.scissor),oe=w.scissorTest,v.viewport(ee),v.scissor(re),v.setScissorTest(oe),U=-1;return}else if(be.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(be.__hasExternalTextures)q.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&H.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);let Be=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?W=Be[F][te]:W=Be[F],X=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?W=H.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[te]:W=Be,ee.copy(w.viewport),re.copy(w.scissor),oe=w.scissorTest}else ee.copy(de).multiplyScalar(Z).floor(),re.copy(Oe).multiplyScalar(Z).floor(),oe=it;if(te!==0&&(W=G),v.bindFramebuffer(P.FRAMEBUFFER,W)&&v.drawBuffers(w,W),v.viewport(ee),v.scissor(re),v.setScissorTest(oe),X){let be=H.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,te)}else if(Se){let be=F;for(let Le=0;Le<w.textures.length;Le++){let Be=H.get(w.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Be.__webglTexture,te,be)}}else if(w!==null&&te!==0){let be=H.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,te)}U=-1};function zu(w){let F=H.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=R.textureFormatReadable(w.format),F.__typeReadable=R.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,te,W,X,Se,Ae,be=0){if(!(w&&w.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){v.bindFramebuffer(P.FRAMEBUFFER,Le);try{let Be=w.textures[be],Qe=Be.format,st=Be.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);let De=zu(Be);if(De.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&te>=0&&te<=w.height-X&&P.readPixels(F,te,W,X,ye.convert(Qe),ye.convert(st),Se)}finally{let Be=se!==null?H.get(se).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,F,te,W,X,Se,Ae,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(F>=0&&F<=w.width-W&&te>=0&&te<=w.height-X){v.bindFramebuffer(P.FRAMEBUFFER,Le);let Be=w.textures[be],Qe=Be.format,st=Be.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);let De=zu(Be);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.bufferData(P.PIXEL_PACK_BUFFER,Se.byteLength,P.STREAM_READ),P.readPixels(F,te,W,X,ye.convert(Qe),ye.convert(st),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let zt=se!==null?H.get(se).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,zt);let Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gd(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,mt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Se),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(mt),P.deleteSync(Rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,te=0){let W=Math.pow(2,-te),X=Math.floor(w.image.width*W),Se=Math.floor(w.image.height*W),Ae=F!==null?F.x:0,be=F!==null?F.y:0;q.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,te,0,0,Ae,be,X,Se),v.unbindTexture()},this.copyTextureToTexture=function(w,F,te=null,W=null,X=0,Se=0){let Ae,be,Le,Be,Qe,st,De,mt,zt,Rt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(te!==null)Ae=te.max.x-te.min.x,be=te.max.y-te.min.y,Le=te.isBox3?te.max.z-te.min.z:1,Be=te.min.x,Qe=te.min.y,st=te.isBox3?te.min.z:0;else{let Dt=Math.pow(2,-X);Ae=Math.floor(Rt.width*Dt),be=Math.floor(Rt.height*Dt),w.isDataArrayTexture?Le=Rt.depth:w.isData3DTexture?Le=Math.floor(Rt.depth*Dt):Le=1,Be=0,Qe=0,st=0}W!==null?(De=W.x,mt=W.y,zt=W.z):(De=0,mt=0,zt=0);let wt=ye.convert(F.format),jt=ye.convert(F.type),Te;F.isData3DTexture?(q.setTexture3D(F,0),Te=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),Te=P.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),Te=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let rn=v.getParameter(P.UNPACK_ROW_LENGTH),ot=v.getParameter(P.UNPACK_IMAGE_HEIGHT),Tn=v.getParameter(P.UNPACK_SKIP_PIXELS),Zn=v.getParameter(P.UNPACK_SKIP_ROWS),Ri=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),v.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(P.UNPACK_SKIP_IMAGES,st);let ws=w.isDataArrayTexture||w.isData3DTexture,Mt=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Dt=H.get(w),Ci=H.get(F),At=H.get(Dt.__renderTarget),Ii=H.get(Ci.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,At.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ts=0;Ts<Le;Ts++)ws&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(w).__webglTexture,X,st+Ts),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Se,zt+Ts)),P.blitFramebuffer(Be,Qe,Ae,be,De,mt,Ae,be,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||H.has(w)){let Dt=H.get(w),Ci=H.get(F);v.bindFramebuffer(P.READ_FRAMEBUFFER,N),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let At=0;At<Le;At++)ws?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,X,st+At):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dt.__webglTexture,X),Mt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ci.__webglTexture,Se,zt+At):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ci.__webglTexture,Se),X!==0?P.blitFramebuffer(Be,Qe,Ae,be,De,mt,Ae,be,P.COLOR_BUFFER_BIT,P.NEAREST):Mt?P.copyTexSubImage3D(Te,Se,De,mt,zt+At,Be,Qe,Ae,be):P.copyTexSubImage2D(Te,Se,De,mt,Be,Qe,Ae,be);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Te,Se,De,mt,zt,Ae,be,Le,wt,jt,Rt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,Se,De,mt,zt,Ae,be,Le,wt,Rt.data):P.texSubImage3D(Te,Se,De,mt,zt,Ae,be,Le,wt,jt,Rt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Se,De,mt,Ae,be,wt,jt,Rt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Se,De,mt,Rt.width,Rt.height,wt,Rt.data):P.texSubImage2D(P.TEXTURE_2D,Se,De,mt,Ae,be,wt,jt,Rt);v.pixelStorei(P.UNPACK_ROW_LENGTH,rn),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ot),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Tn),v.pixelStorei(P.UNPACK_SKIP_ROWS,Zn),v.pixelStorei(P.UNPACK_SKIP_IMAGES,Ri),Se===0&&F.generateMipmaps&&P.generateMipmap(Te),v.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){Q=0,J=0,se=null,v.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var tp={type:"change"},Hh={type:"start"},ip={type:"end"},ql=new Qn,np=new bn,Tv=Math.cos(70*Ot.DEG2RAD),Yt=new L,yn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6,Kl=class extends ca{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Tt,this._lastTargetPosition=new L,this._quat=new Tt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ar,this._sphericalDelta=new ar,this._scale=1,this._panOffset=new L,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new L,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Av.bind(this),this._onPointerDown=Ev.bind(this),this._onPointerUp=Rv.bind(this),this._onContextMenu=Uv.bind(this),this._onMouseWheel=Pv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Dv.bind(this),this._onTouchMove=Nv.bind(this),this._onMouseDown=Cv.bind(this),this._onMouseMove=Iv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tp),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Yt.copy(t).sub(this.target),Yt.applyQuaternion(this._quat),this._spherical.setFromVector3(Yt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Yt.setFromSpherical(this._spherical),Yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Yt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ql.origin.copy(this.object.position),ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ql.direction))<Tv?this.object.lookAt(this.target):(np.setFromNormalAndCoplanarPoint(this.object.up,this.target),ql.intersectPlane(np,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?yn/60*this.autoRotateSpeed*e:yn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Yt.setFromMatrixColumn(t,0),Yt.multiplyScalar(-e),this._panOffset.add(Yt)}_panUp(e,t){this.screenSpacePanning===!0?Yt.setFromMatrixColumn(t,1):(Yt.setFromMatrixColumn(t,0),Yt.crossVectors(this.object.up,Yt)),Yt.multiplyScalar(e),this._panOffset.add(Yt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Yt.copy(s).sub(this.target);let r=Yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ev(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Av(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Rv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ip),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Cv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hh)}function Iv(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pv(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Hh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ip))}function Lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Dv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hh)}function Nv(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function Uv(i){this.enabled!==!1&&i.preventDefault()}function Fv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var An=Uint8Array,_r=Uint16Array,Bv=Int32Array,sp=new An([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rp=new An([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),kv=new An([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ap=function(i,e){for(var t=new _r(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Bv(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},op=ap(sp,2),lp=op.b,zv=op.r;lp[28]=258,zv[258]=28;var cp=ap(rp,0),Vv=cp.b,ew=cp.r,Xh=new _r(32768);for(ft=0;ft<32768;++ft)Ei=(ft&43690)>>1|(ft&21845)<<1,Ei=(Ei&52428)>>2|(Ei&13107)<<2,Ei=(Ei&61680)>>4|(Ei&3855)<<4,Xh[ft]=((Ei&65280)>>8|(Ei&255)<<8)>>1;var Ei,ft,Ma=(function(i,e,t){for(var n=i.length,s=0,r=new _r(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new _r(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new _r(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],f=e-i[s],h=a[i[s]-1]++<<f,u=h|(1<<f)-1;h<=u;++h)o[Xh[h]>>l]=c}else for(o=new _r(n),s=0;s<n;++s)i[s]&&(o[s]=Xh[a[i[s]-1]++]>>15-i[s]);return o}),wa=new An(288);for(ft=0;ft<144;++ft)wa[ft]=8;var ft;for(ft=144;ft<256;++ft)wa[ft]=9;var ft;for(ft=256;ft<280;++ft)wa[ft]=7;var ft;for(ft=280;ft<288;++ft)wa[ft]=8;var ft,hp=new An(32);for(ft=0;ft<32;++ft)hp[ft]=5;var ft;var Hv=Ma(wa,9,1);var Gv=Ma(hp,5,1),Gh=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Xn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Wh=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Wv=function(i){return(i+7)/8|0},Xv=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new An(i.subarray(e,t))};var Yv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Yn=function(i,e,t){var n=new Error(e||Yv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Yn),!t)throw n;return n},qv=function(i,e,t,n){var s=i.length,r=n?n.length:0;if(!s||e.f&&!e.l)return t||new An(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new An(s*3));var c=function(de){var Oe=t.length;if(de>Oe){var it=new An(Math.max(Oe*2,de));it.set(t),t=it}},f=e.f||0,h=e.p||0,u=e.b||0,d=e.l,p=e.d,_=e.m,m=e.n,g=s*8;do{if(!d){f=Xn(i,h,1);var E=Xn(i,h+1,3);if(h+=3,E)if(E==1)d=Hv,p=Gv,_=9,m=5;else if(E==2){var b=Xn(i,h,31)+257,S=Xn(i,h+10,15)+4,y=b+Xn(i,h+5,31)+1;h+=14;for(var A=new An(y),C=new An(19),I=0;I<S;++I)C[kv[I]]=Xn(i,h+I*3,7);h+=S*3;for(var k=Gh(C),G=(1<<k)-1,N=Ma(C,k,1),I=0;I<y;){var z=N[Xn(i,h,G)];h+=z&15;var T=z>>4;if(T<16)A[I++]=T;else{var Q=0,J=0;for(T==16?(J=3+Xn(i,h,3),h+=2,Q=A[I-1]):T==17?(J=3+Xn(i,h,7),h+=3):T==18&&(J=11+Xn(i,h,127),h+=7);J--;)A[I++]=Q}}var se=A.subarray(0,b),U=A.subarray(b);_=Gh(se),m=Gh(U),d=Ma(se,_,1),p=Ma(U,m,1)}else Yn(1);else{var T=Wv(h)+4,x=i[T-4]|i[T-3]<<8,M=T+x;if(M>s){l&&Yn(0);break}o&&c(u+x),t.set(i.subarray(T,M),u),e.b=u+=x,e.p=h=M*8,e.f=f;continue}if(h>g){l&&Yn(0);break}}o&&c(u+131072);for(var V=(1<<_)-1,ee=(1<<m)-1,re=h;;re=h){var Q=d[Wh(i,h)&V],oe=Q>>4;if(h+=Q&15,h>g){l&&Yn(0);break}if(Q||Yn(2),oe<256)t[u++]=oe;else if(oe==256){re=h,d=null;break}else{var pe=oe-254;if(oe>264){var I=oe-257,Ne=sp[I];pe=Xn(i,h,(1<<Ne)-1)+lp[I],h+=Ne}var ze=p[Wh(i,h)&ee],j=ze>>4;ze||Yn(3),h+=ze&15;var U=Vv[j];if(j>3){var Ne=rp[j];U+=Wh(i,h)&(1<<Ne)-1,h+=Ne}if(h>g){l&&Yn(0);break}o&&c(u+131072);var Z=u+pe;if(u<U){var ie=r-U,Ie=Math.min(U,Z);for(ie+u<0&&Yn(3);u<Ie;++u)t[u]=n[ie+u]}for(;u<Z;++u)t[u]=t[u-U]}}e.l=d,e.p=re,e.b=u,e.f=f,d&&(f=1,e.m=_,e.d=p,e.n=m)}while(!f);return u!=t.length&&a?Xv(t,0,u):t.subarray(0,u)};var Kv=new An(0);var Zv=function(i,e){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&Yn(6,"invalid zlib data"),(i[1]>>5&1)==+!e&&Yn(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function up(i,e){return qv(i.subarray(Zv(i,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var jv=typeof TextDecoder<"u"&&new TextDecoder,Jv=0;try{jv.decode(Kv,{stream:!0}),Jv=1}catch{}function fp(i,e,t){let n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let s=i,r=n,a=Math.floor((s+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:s=a,a=Math.floor((s+r)/2);return a}function $v(i,e,t,n){let s=[],r=[],a=[];s[0]=1;for(let o=1;o<=t;++o){r[o]=e-n[i+1-o],a[o]=n[i+o]-e;let l=0;for(let c=0;c<o;++c){let f=a[c+1],h=r[o-c],u=s[c]/(f+h);s[c]=l+f*u,l=h*u}s[o]=l}return s}function dp(i,e,t,n){let s=fp(i,n,e),r=$v(s,n,i,e),a=new rt(0,0,0,0);for(let o=0;o<=i;++o){let l=t[s-i+o],c=r[o],f=l.w*c;a.x+=l.x*f,a.y+=l.y*f,a.z+=l.z*f,a.w+=l.w*c}return a}function Qv(i,e,t,n,s){let r=[];for(let h=0;h<=t;++h)r[h]=0;let a=[];for(let h=0;h<=n;++h)a[h]=r.slice(0);let o=[];for(let h=0;h<=t;++h)o[h]=r.slice(0);o[0][0]=1;let l=r.slice(0),c=r.slice(0);for(let h=1;h<=t;++h){l[h]=e-s[i+1-h],c[h]=s[i+h]-e;let u=0;for(let d=0;d<h;++d){let p=c[d+1],_=l[h-d];o[h][d]=p+_;let m=o[d][h-1]/o[h][d];o[d][h]=u+p*m,u=_*m}o[h][h]=u}for(let h=0;h<=t;++h)a[0][h]=o[h][t];for(let h=0;h<=t;++h){let u=0,d=1,p=[];for(let _=0;_<=t;++_)p[_]=r.slice(0);p[0][0]=1;for(let _=1;_<=n;++_){let m=0,g=h-_,E=t-_;h>=_&&(p[d][0]=p[u][0]/o[E+1][g],m=p[d][0]*o[g][E]);let T=g>=-1?1:-g,x=h-1<=E?_-1:t-h;for(let b=T;b<=x;++b)p[d][b]=(p[u][b]-p[u][b-1])/o[E+1][g+b],m+=p[d][b]*o[g+b][E];h<=E&&(p[d][_]=-p[u][_-1]/o[E+1][h],m+=p[d][_]*o[h][E]),a[_][h]=m;let M=u;u=d,d=M}}let f=t;for(let h=1;h<=n;++h){for(let u=0;u<=t;++u)a[h][u]*=f;f*=t-h}return a}function eb(i,e,t,n,s){let r=s<i?s:i,a=[],o=fp(i,n,e),l=Qv(o,n,i,r,e),c=[];for(let f=0;f<t.length;++f){let h=t[f].clone(),u=h.w;h.x*=u,h.y*=u,h.z*=u,c[f]=h}for(let f=0;f<=r;++f){let h=c[o-i].clone().multiplyScalar(l[f][0]);for(let u=1;u<=i;++u)h.add(c[o-i+u].clone().multiplyScalar(l[f][u]));a[f]=h}for(let f=r+1;f<=s+1;++f)a[f]=new rt(0,0,0);return a}function tb(i,e){let t=1;for(let s=2;s<=i;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=i-e;++s)n*=s;return t/n}function nb(i){let e=i.length,t=[],n=[];for(let r=0;r<e;++r){let a=i[r];t[r]=new L(a.x,a.y,a.z),n[r]=a.w}let s=[];for(let r=0;r<e;++r){let a=t[r].clone();for(let o=1;o<=r;++o)a.sub(s[r-o].clone().multiplyScalar(tb(r,o)*n[o]));s[r]=a.divideScalar(n[0])}return s}function pp(i,e,t,n,s){let r=eb(i,e,t,n,s);return nb(r)}var Zl=class extends jr{constructor(e,t,n,s,r){super();let a=t?t.length-1:0,o=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=r||a;for(let l=0;l<o;++l){let c=n[l];this.controlPoints[l]=new rt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new L){let n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=dp(this.degree,this.knots,this.controlPoints,s);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new L){let n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=pp(this.degree,this.knots,this.controlPoints,s,1);return n.copy(r[1]).normalize(),n}toJSON(){let e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new rt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}};var je,Bt,qt,Jl=class extends mn{constructor(e){super(e),this.trimAnimationClips=!1}load(e,t,n,s){let r=this,a=r.path===""?zn.extractUrlBase(e):r.path,o=new Vi(this.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){if(sb(e))je=new Qh().parse(e);else{let s=xp(e);if(!rb(s))throw new Error("THREE.FBXLoader: Unknown format.");if(mp(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+mp(s));je=new $h().parse(s)}let n=new ps(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Zh(n,this.manager,this.trimAnimationClips).parse(je)}},Zh=class{constructor(e,t,n){this.textureLoader=e,this.manager=t,this.trimAnimationClips=n}parse(){Bt=this.parseConnections();let e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),r=new jh().parse(s);return this.parseScene(s,r,n),qt}parseConnections(){let e=new Map;return"Connections"in je&&je.Connections.connections.forEach(function(n){let s=n[0],r=n[1],a=n[2];e.has(s)||e.set(s,{parents:[],children:[]});let o={ID:r,relationship:a};e.get(s).parents.push(o),e.has(r)||e.set(r,{parents:[],children:[]});let l={ID:s,relationship:a};e.get(r).children.push(l)}),e}parseImages(){let e={},t={};if("Video"in je.Objects){let n=je.Objects.Video;for(let s in n){let r=n[s],a=parseInt(s);if(e[a]=r.RelativeFilename||r.Filename,"Content"in r){let o=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(o||l){let c=this.parseImage(n[s]);t[r.RelativeFilename||r.Filename]=c}}}}for(let n in e){let s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){let t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase(),r;switch(s){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{let a=new Uint8Array(t);return URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(e){let t=new Map;if("Texture"in je.Objects){let n=je.Objects.Texture;for(let s in n){let r=this.parseTexture(n[s],e);t.set(parseInt(s),r)}}return t}parseTexture(e,t){let n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;let s=e.WrapModeU,r=e.WrapModeV,a=s!==void 0?s.value:0,o=r!==void 0?r.value:0;if(n.wrapS=a===0?Fn:on,n.wrapT=o===0?Fn:on,"Scaling"in e){let l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){let l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n=e.FileName.split(".").pop().toLowerCase(),s=this.manager.getHandler(`.${n}`);s===null&&(s=this.textureLoader);let r=s.path;r||s.setPath(this.textureLoader.path);let a=Bt.get(e.id).children,o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&s.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Ft;let l=s.load(o);return s.setPath(r),l}parseMaterials(e){let t=new Map;if("Material"in je.Objects){let n=je.Objects.Material;for(let s in n){let r=this.parseMaterial(n[s],e);r!==null&&t.set(parseInt(s),r)}}return t}parseMaterial(e,t){let n=e.id,s=e.attrName,r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Bt.has(n))return null;let a=this.parseParameters(e,t,n),o;switch(r.toLowerCase()){case"phong":o=new zi;break;case"lambert":o=new na;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),o=new zi;break}return o.setValues(a),o.name=s,o}parseParameters(e,t,n){let s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=Xe.colorSpaceToWorking(new _e().fromArray(e.Diffuse.value),lt):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=Xe.colorSpaceToWorking(new _e().fromArray(e.DiffuseColor.value),lt)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=Xe.colorSpaceToWorking(new _e().fromArray(e.Emissive.value),lt):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=Xe.colorSpaceToWorking(new _e().fromArray(e.EmissiveColor.value),lt)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),s.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(s.opacity===1||s.opacity===0)&&(s.opacity=e.Opacity?parseFloat(e.Opacity.value):null,s.opacity===null&&(s.opacity=1)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=Xe.colorSpaceToWorking(new _e().fromArray(e.Specular.value),lt):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=Xe.colorSpaceToWorking(new _e().fromArray(e.SpecularColor.value),lt));let r=this;return Bt.get(n).children.forEach(function(a){let o=a.relationship;switch(o){case"Bump":s.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":s.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=r.getTexture(t,a.ID),s.map!==void 0&&(s.map.colorSpace=lt);break;case"DisplacementColor":s.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":s.emissiveMap=r.getTexture(t,a.ID),s.emissiveMap!==void 0&&(s.emissiveMap.colorSpace=lt);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":s.envMap=r.getTexture(t,a.ID),s.envMap!==void 0&&(s.envMap.mapping=cr,s.envMap.colorSpace=lt);break;case"SpecularColor":s.specularMap=r.getTexture(t,a.ID),s.specularMap!==void 0&&(s.specularMap.colorSpace=lt);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=r.getTexture(t,a.ID),s.transparent=!0;break;default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),s}getTexture(e,t){return"LayeredTexture"in je.Objects&&t in je.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Bt.get(t).children[0].ID),e.get(t)}parseDeformers(){let e={},t={};if("Deformer"in je.Objects){let n=je.Objects.Deformer;for(let s in n){let r=n[s],a=Bt.get(parseInt(s));if(r.attrType==="Skin"){let o=this.parseSkeleton(a,n);o.ID=s,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[s]=o}else if(r.attrType==="BlendShape"){let o={id:s};o.rawTargets=this.parseMorphTargets(a,n),o.id=s,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){let n=[];return e.children.forEach(function(s){let r=t[s.ID];if(r.attrType!=="Cluster")return;let a={ID:s.ID,indices:[],weights:[],transformLink:new we().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),n.push(a)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){let n=[];for(let s=0;s<e.children.length;s++){let r=e.children[s],a=t[r.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Bt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){qt=new Qt;let s=this.parseModels(e.skeletons,t,n),r=je.Objects.Model,a=this;s.forEach(function(h){let u=r[h.ID];a.setLookAtProperties(h,u),Bt.get(h.ID).parents.forEach(function(p){let _=s.get(p.ID);_!==void 0&&_.add(h)}),h.parent===null&&qt.add(h)}),this.addGlobalSceneSettings(),qt.traverse(function(h){if(h.userData.transformData){h.parent&&(h.userData.transformData.parentMatrix=h.parent.matrix,h.userData.transformData.parentMatrixWorld=h.parent.matrixWorld);let u=gp(h.userData.transformData);h.applyMatrix4(u),h.updateWorldMatrix()}});let o=this.parsePoseNodes(),l=new Set;for(let h in e.skeletons)e.skeletons[h].rawBones.forEach(function(u,d){let p=e.skeletons[h].bones[d];p&&l.add(p.ID)});let c=new we;qt.traverse(function(h){if(h.isBone&&h.ID!==void 0&&!l.has(h.ID)){let u=o[h.ID];u!==void 0&&(h.parent?(c.copy(h.parent.matrixWorld).invert(),c.multiply(u)):c.copy(u),c.decompose(h.position,h.quaternion,h.scale),h.updateMatrix(),h.matrixWorld.copy(u))}}),this.bindSkeleton(e.skeletons,t,s);let f=new Jh(this.trimAnimationClips).parse();qt.children.length===1&&qt.children[0].isGroup&&(qt.children[0].animations=f,Object.assign(qt.children[0].userData,qt.userData),qt=qt.children[0]),qt.animations=f,"GlobalSettings"in je&&"UpAxis"in je.GlobalSettings&&je.GlobalSettings.UpAxis.value===2&&(console.warn("THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted."),qt.rotation.set(-Math.PI/2,0,0))}parseModels(e,t,n){let s=new Map,r=je.Objects.Model;for(let a in r){let o=parseInt(a),l=r[a],c=Bt.get(o),f=this.buildSkeleton(c,e,o,l.attrName);if(!f){switch(l.attrType){case"Camera":f=this.createCamera(c);break;case"Light":f=this.createLight(c);break;case"Mesh":f=this.createMesh(c,t,n);break;case"NurbsCurve":f=this.createCurve(c,t);break;case"LimbNode":case"Root":f=new vi;break;default:f=new Qt;break}f.name=l.attrName?ht.sanitizeNodeName(l.attrName):"",f.userData.originalName=l.attrName,f.ID=o}this.getTransformData(f,l),s.set(o,f)}return s}buildSkeleton(e,t,n,s){let r=null;return e.parents.forEach(function(a){for(let o in t){let l=t[o];l.rawBones.forEach(function(c,f){if(c.ID===a.ID){let h=r;r=new vi,r.matrixWorld.copy(c.transformLink),r.name=s?ht.sanitizeNodeName(s):"",r.userData.originalName=s,r.ID=n,l.bones[f]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(s){let r=je.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new yt;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let a=1e3;n.FarPlane!==void 0&&(a=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);let c=o/l,f=45;n.FieldOfView!==void 0&&(f=n.FieldOfView.value);let h=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new Lt(f,c,r,a),h!==null&&t.setFocalLength(h);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new yt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new yt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){let r=je.Objects.NodeAttribute[s.ID];r!==void 0&&(n=r)}),n===void 0)t=new yt;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Xe.colorSpaceToWorking(new _e().fromArray(n.Color.value),lt));let a=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(a=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);let l=1;switch(s){case 0:t=new Gi(r,a,o,l);break;case 1:t=new wi(r,a);break;case 2:let c=Math.PI/3,f=0;n.OuterAngle!==void 0?(c=Ot.degToRad(n.OuterAngle.value),n.InnerAngle!==void 0&&(f=1-n.InnerAngle.value/n.OuterAngle.value,f=Math.max(0,f))):n.InnerAngle!==void 0&&(c=Ot.degToRad(n.InnerAngle.value)),t=new ms(r,a,o,c,f,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Gi(r,a);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,r=null,a=null,o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new zi({name:mn.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in r.attributes&&o.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,f=r.groups.length;c<f;c++){let h=r.groups[c];(h.materialIndex<0||h.materialIndex>=o.length)&&(h.materialIndex=o.length,l=!0)}if(l){let c=new zi;o.push(c)}}return r.FBX_Deformer?(s=new ls(r,a),s.normalizeSkinWeights()):s=new Pt(r,a),s}createCurve(e,t){let n=e.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),s=new ei({name:mn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new ti(n,s)}getTransformData(e,t){let n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ta(t.RotationOrder.value):n.eulerOrder=Ta(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Bt.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){let r=je.Objects.Model[s.ID];if("Lcl_Translation"in r){let a=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),qt.add(e.target)):e.lookAt(new L().fromArray(a))}}})}bindSkeleton(e,t,n){for(let s in e){let r=e[s],a=[];for(let l=0,c=r.bones.length;l<c;l++){let f=new we;r.bones[l]&&r.rawBones[l]&&f.copy(r.rawBones[l].transformLink).invert(),a.push(f)}Bt.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){let c=l.ID;Bt.get(c).parents.forEach(function(h){if(n.has(h.ID)){let u=n.get(h.ID);u.updateMatrixWorld(!0),u.bind(new cs(r.bones,a),u.matrixWorld)}})}})}}parsePoseNodes(){let e={};if("Pose"in je.Objects){let t=je.Objects.Pose;for(let n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){let s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(r){e[r.Node]=new we().fromArray(r.Matrix.a)}):e[s.Node]=new we().fromArray(s.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in je){if("AmbientColor"in je.GlobalSettings){let e=je.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){let r=new _e().setRGB(t,n,s,lt);qt.add(new gs(r,1))}}"UnitScaleFactor"in je.GlobalSettings&&(qt.userData.unitScaleFactor=je.GlobalSettings.UnitScaleFactor.value)}}},jh=class{constructor(){this.negativeMaterialIndices=!1}parse(e){let t=new Map;if("Geometry"in je.Objects){let n=je.Objects.Geometry;for(let s in n){let r=Bt.get(parseInt(s)),a=this.parseGeometry(r,n[s],e);t.set(parseInt(s),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){let s=n.skeletons,r=[],a=e.parents.map(function(h){return je.Objects.Model[h.ID]});if(a.length===0)return;let o=e.children.reduce(function(h,u){return s[u.ID]!==void 0&&(h=s[u.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});let l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ta(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);let f=gp(c);return this.genGeometry(t,o,r,f)}genGeometry(e,t,n,s){let r=new Ct;e.attrName&&(r.name=e.attrName);let a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new xt(o.vertex,3);if(l.applyMatrix4(s),r.setAttribute("position",l),o.colors.length>0&&r.setAttribute("color",new xt(o.colors,3)),t&&(r.setAttribute("skinIndex",new as(o.weightsIndices,4)),r.setAttribute("skinWeight",new xt(o.vertexWeights,4)),r.FBX_Deformer=t),o.normal.length>0){let c=new qe().getNormalMatrix(s),f=new xt(o.normal,3);f.applyNormalMatrix(c),r.setAttribute("normal",f)}if(o.uvs.forEach(function(c,f){let h=f===0?"uv":`uv${f}`;r.setAttribute(h,new xt(o.uvs[f],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],f=0;if(o.materialIndex.forEach(function(h,u){h!==c&&(r.addGroup(f,u-f,c),c=h,f=u)}),r.groups.length>0){let h=r.groups[r.groups.length-1],u=h.start+h.count;u!==o.materialIndex.length&&r.addGroup(u,o.materialIndex.length-u,c)}r.groups.length===0&&r.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(r,e,n,s),r}parseGeoNode(e,t){let n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,r){s.indices.forEach(function(a,o){n.weightTable[a]===void 0&&(n.weightTable[a]=[]),n.weightTable[a].push({id:r,weight:s.weights[o]})})})),n}genBuffers(e){let t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]},n=0,s=0,r=!1,a=[],o=[],l=[],c=[],f=[],h=[],u=this;return e.vertexIndices.forEach(function(d,p){let _,m=!1;d<0&&(d=d^-1,m=!0);let g=[],E=[];if(a.push(d*3,d*3+1,d*3+2),e.color){let T=jl(p,n,d,e.color);l.push(T[0],T[1],T[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(T){E.push(T.weight),g.push(T.id)}),E.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);let T=[0,0,0,0],x=[0,0,0,0];E.forEach(function(M,b){let S=M,y=g[b];x.forEach(function(A,C,I){if(S>A){I[C]=S,S=A;let k=T[C];T[C]=y,y=k}})}),g=T,E=x}for(;E.length<4;)E.push(0),g.push(0);for(let T=0;T<4;++T)f.push(E[T]),h.push(g[T])}if(e.normal){let T=jl(p,n,d,e.normal);o.push(T[0],T[1],T[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=jl(p,n,d,e.material)[0],_<0&&(u.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(T,x){let M=jl(p,n,d,T);c[x]===void 0&&(c[x]=[]),c[x].push(M[0]),c[x].push(M[1])}),s++,m&&(u.genFace(t,e,a,_,o,l,c,f,h,s),n++,s=0,a=[],o=[],l=[],c=[],f=[],h=[])}),t}getNormalNewell(e){let t=new L(0,0,0);for(let n=0;n<e.length;n++){let s=e[n],r=e[(n+1)%e.length];t.x+=(s.y-r.y)*(s.z+r.z),t.y+=(s.z-r.z)*(s.x+r.x),t.z+=(s.x-r.x)*(s.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){let t=this.getNormalNewell(e),s=(Math.abs(t.z)>.5?new L(0,1,0):new L(0,0,1)).cross(t).normalize(),r=t.clone().cross(s).normalize();return{normal:t,tangent:s,bitangent:r}}flattenVertex(e,t,n){return new Ce(e.dot(t),e.dot(n))}genFace(e,t,n,s,r,a,o,l,c,f){let h;if(f>3){let u=[],d=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)u.push(new L(d[n[g]],d[n[g+1]],d[n[g+2]]));let{tangent:p,bitangent:_}=this.getNormalTangentAndBitangent(u),m=[];for(let g of u)m.push(this.flattenVertex(g,p,_));h=ea.triangulateShape(m,[])}else h=[[0,1,2]];for(let[u,d,p]of h)e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(a[u*3]),e.colors.push(a[u*3+1]),e.colors.push(a[u*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[p*3]),e.colors.push(a[p*3+1]),e.colors.push(a[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(r[u*3]),e.normal.push(r[u*3+1]),e.normal.push(r[u*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2])),t.uv&&t.uv.forEach(function(_,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(o[m][u*2]),e.uvs[m].push(o[m][u*2+1]),e.uvs[m].push(o[m][d*2]),e.uvs[m].push(o[m][d*2+1]),e.uvs[m].push(o[m][p*2]),e.uvs[m].push(o[m][p*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];let r=s.clone().setPosition(0,0,0),a=this;n.forEach(function(o){o.rawTargets.forEach(function(l){let c=je.Objects.Geometry[l.geoID];c!==void 0&&a.genMorphGeometry(e,t,c,r,l.name)})})}genMorphGeometry(e,t,n,s,r){let a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],f=e.attributes.position.count*3,h=new Float32Array(f);for(let _=0;_<c.length;_++){let m=c[_]*3;h[m]=l[_*3],h[m+1]=l[_*3+1],h[m+2]=l[_*3+2]}let u={vertexIndices:o,vertexPositions:h,baseVertexPositions:a},d=this.genBuffers(u),p=new xt(d.vertex,3);p.name=r||n.attrName,p.applyMatrix4(s),e.morphAttributes.position.push(p)}parseNormals(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a,r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:r,mappingType:t,referenceType:n}}parseUVs(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a,r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:s,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){let t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a,r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let a=0,o=new _e;a<s.length;a+=4)o.fromArray(s,a),Xe.colorSpaceToWorking(o,lt),o.toArray(s,a);return{dataSize:4,buffer:s,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){let t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};let s=e.Materials.a,r=[];for(let a=0;a<s.length;++a)r.push(a);return{dataSize:1,buffer:s,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){let t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ct;let n=t-1,s=e.KnotVector.a,r=[],a=e.Points.a;for(let h=0,u=a.length;h<u;h+=4)r.push(new rt().fromArray(a,h));let o,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){o=n,l=s.length-1-o;for(let h=0;h<n;++h)r.push(r[h])}let f=new Zl(n,s,r,o,l).getPoints(r.length*12);return new Ct().setFromPoints(f)}},Jh=class{constructor(e){this.trimAnimationClips=e}parse(){let e=[],t=this.parseClips();if(t!==void 0)for(let n in t){let s=t[n],r=this.addClip(s);e.push(r)}return e}parseClips(){if(je.Objects.AnimationCurve===void 0)return;let e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);let t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){let e=je.Objects.AnimationCurveNode,t=new Map;for(let n in e){let s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){let r={id:s.id,attr:s.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){let t=je.Objects.AnimationCurve;for(let n in t){let s={id:t[n].id,times:t[n].KeyTime.a.map(Yh),values:t[n].KeyValueFloat.a},r=Bt.get(s.id);if(r!==void 0){let a=r.parents[0].ID,o=r.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=s:o.match(/Y/)?e.get(a).curves.y=s:o.match(/Z/)?e.get(a).curves.z=s:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=s)}}}parseAnimationLayers(e){let t=je.Objects.AnimationLayer,n=new Map;for(let s in t){let r=[],a=Bt.get(parseInt(s));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){let f=e.get(l.ID);if(f.curves.x!==void 0||f.curves.y!==void 0||f.curves.z!==void 0){if(r[c]===void 0){let h=Bt.get(l.ID).parents.filter(function(d){return d.relationship!==void 0});if(h.length===0)return;let u=h[0].ID;if(u!==void 0){let d=je.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}let p={modelName:d.attrName?ht.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};qt.traverse(function(_){_.ID===d.id&&(p.transform=_.matrix,_.userData.transformData&&(p.eulerOrder=_.userData.transformData.eulerOrder,_.userData.transformData.rotation&&(p.initialRotation=_.userData.transformData.rotation)))}),p.transform||(p.transform=new we),"PreRotation"in d&&(p.preRotation=d.PreRotation.value),"PostRotation"in d&&(p.postRotation=d.PostRotation.value),r[c]=p}}r[c]&&(r[c][f.attr]=f)}else if(f.curves.morph!==void 0){if(r[c]===void 0){let h=Bt.get(l.ID).parents.filter(function(E){return E.relationship!==void 0});if(h.length===0)return;let u=h[0].ID,d=Bt.get(u).parents[0].ID,p=Bt.get(d).parents[0].ID,_=Bt.get(p).parents[0].ID,m=je.Objects.Model[_],g={modelName:m.attrName?ht.sanitizeNodeName(m.attrName):"",morphName:je.Objects.Deformer[u].attrName};r[c]=g}r[c][f.attr]=f}}}),n.set(parseInt(s),r))}return n}parseAnimStacks(e){let t=je.Objects.AnimationStack,n={};for(let s in t){let r=Bt.get(parseInt(s)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");let a=e.get(r[0].ID),o=t[s];n[s]={name:o.attrName,layer:a,localStart:o.LocalStart!==void 0?Yh(Number(o.LocalStart.value)):0,localStop:o.LocalStop!==void 0?Yh(Number(o.LocalStop.value)):0}}return n}addClip(e){let t=[],n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),this.trimAnimationClips===!0&&e.localStop>e.localStart&&(t=this.trimTracks(t,e.localStart,e.localStop)),new ds(e.name,-1,t)}trimTracks(e,t,n){let s=Math.fround(t),r=Math.fround(n),a=[];for(let o=0;o<e.length;o++){let l=e[o],c=l.getValueSize(),f=[],h=[];for(let u=0;u<l.times.length;u++){let d=l.times[u];if(!(d<s||d>r)){f.push(d-s);for(let p=0;p<c;p++)h.push(l.values[u*c+p])}}f.length!==0&&(l.times=new Float32Array(f),l.values=new Float32Array(h),a.push(l))}return a}generateTracks(e){let t=[],n=new L,s=new L;if(e.transform&&e.transform.decompose(n,new Tt,s),n=n.toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){let r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder,e.initialRotation);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){let r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){let r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,s){let r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,n);return new si(e+"."+s,r,a)}generateRotationTrack(e,t,n,s,r,a){let o,l;if(t.x!==void 0||t.y!==void 0||t.z!==void 0){let d=this.getTimesForAllAxes(t);if(d.length>0){let p=a||[0,0,0],_=this.synchronizeCurve(t.x,d,p[0]),m=this.synchronizeCurve(t.y,d,p[1]),g=this.synchronizeCurve(t.z,d,p[2]),E=this.interpolateRotations(_,m,g,r);o=E[0],l=E[1]}}let c=Ta(0);n!==void 0&&(n=n.map(Ot.degToRad),n.push(c),n=new Gt().fromArray(n),n=new Tt().setFromEuler(n)),s!==void 0&&(s=s.map(Ot.degToRad),s.push(c),s=new Gt().fromArray(s),s=new Tt().setFromEuler(s).invert());let f=new Tt,h=new Gt,u=[];if(!(!l||!o)){for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],r),f.setFromEuler(h),n!==void 0&&f.premultiply(n),s!==void 0&&f.multiply(s),d>2&&new Tt().fromArray(u,(d-3)/3*4).dot(f)<0&&f.set(-f.x,-f.y,-f.z,-f.w),f.toArray(u,d/3*4);return new kn(e+".quaternion",o,u)}}generateMorphTrack(e){let t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),s=qt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Bn(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let r=1;r<t.length;r++){let a=t[r];a!==s&&(t[n]=a,s=a,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){let s=n,r=[],a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){let f=t.x.values[a];r.push(f),s[0]=f}else r.push(s[0]);if(o!==-1){let f=t.y.values[o];r.push(f),s[1]=f}else r.push(s[1]);if(l!==-1){let f=t.z.values[l];r.push(f),s[2]=f}else r.push(s[2])}),r}synchronizeCurve(e,t,n){if(e===void 0)return{times:t,values:t.map(()=>n)};if(e.times.length===t.length)return e;let s=[];for(let r=0;r<t.length;r++)s.push(this.sampleCurveValue(e,t[r],n));return{times:t,values:s}}sampleCurveValue(e,t,n){let s=e.times,r=e.values;if(t<=s[0])return r[0];if(t>=s[s.length-1])return r[r.length-1];for(let a=0;a<s.length-1;a++)if(t>=s[a]&&t<=s[a+1]){if(s[a]===t)return r[a];let o=(t-s[a])/(s[a+1]-s[a]);return r[a]*(1-o)+r[a+1]*o}return n}interpolateRotations(e,t,n,s){let r=[],a=[];r.push(e.times[0]),a.push(Ot.degToRad(e.values[0])),a.push(Ot.degToRad(t.values[0])),a.push(Ot.degToRad(n.values[0]));for(let o=1;o<e.values.length;o++){let l=[e.values[o-1],t.values[o-1],n.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;let c=l.map(Ot.degToRad),f=[e.values[o],t.values[o],n.values[o]];if(isNaN(f[0])||isNaN(f[1])||isNaN(f[2]))continue;let h=f.map(Ot.degToRad),u=[f[0]-l[0],f[1]-l[1],f[2]-l[2]],d=[Math.abs(u[0]),Math.abs(u[1]),Math.abs(u[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){let _=Math.max(...d)/180,m=new Gt(...c,s),g=new Gt(...h,s),E=new Tt().setFromEuler(m),T=new Tt().setFromEuler(g);E.dot(T)<0&&T.set(-T.x,-T.y,-T.z,-T.w);let x=e.times[o-1],M=e.times[o]-x,b=new Tt,S=new Gt;for(let y=0;y<1;y+=1/_)b.copy(E.clone().slerp(T.clone(),y)),r.push(x+y*M),S.setFromQuaternion(b,s),a.push(S.x),a.push(S.y),a.push(S.z)}else r.push(e.times[o]),a.push(Ot.degToRad(e.values[o])),a.push(Ot.degToRad(t.values[o])),a.push(Ot.degToRad(n.values[o]))}return[r,a]}},$h=class{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ql,this.nodeStack=[],this.currentProp=[],this.currentPropName="";let t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,r){let a=s.match(/^[\s\t]*;/),o=s.match(/^[\s\t]*$/);if(a||o)return;let l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),f=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++r]):f?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){let n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},a=this.parseNodeAttr(s),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in o?(n==="PoseNode"?o.PoseNode.push(r):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),a.id!==""&&(o[n][a.id]=r)):typeof a.id=="number"?(o[n]={},o[n][a.id]=r):n!=="Properties70"&&(n==="PoseNode"?o[n]=[r]:o[n]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());let a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,s,r);return}if(s==="C"){let l=r.split(",").slice(1),c=parseInt(l[0]),f=parseInt(l[1]),h=r.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),s="connections",r=[c,f],ob(r,h),a[s]===void 0&&(a[s]=[])}s==="Node"&&(a.id=r),s in a&&Array.isArray(a[s])?a[s].push(r):s!=="a"?a[s]=r:a.a=r,this.setCurrentProp(a,s),s==="a"&&r.slice(-1)!==","&&(a.a=Kh(r))}parseNodePropertyContinued(e){let t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Kh(t.a))}parseNodeSpecialProperty(e,t,n){let s=n.split('",').map(function(f){return f.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=s[0],a=s[1],o=s[2],l=s[3],c=s[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Kh(c);break}this.getPrevNode()[r]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}},Qh=class{parse(e){let t=new $l(e);t.skip(23);let n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);let s=new Ql;for(;!this.endOfContent(t);){let r=this.parseNode(t,n);r!==null&&s.add(r.name,r)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){let n={},s=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();let a=e.getUint8(),o=e.getString(a);if(s===0)return null;let l=[];for(let u=0;u<r;u++)l.push(this.parseProperty(e));let c=l.length>0?l[0]:"",f=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===s;s>e.getOffset();){let u=this.parseNode(e,t);u!==null&&this.parseSubNode(o,n,u)}return n.propertyList=l,typeof c=="number"&&(n.id=c),f!==""&&(n.attrName=f),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){let s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){let s=[];n.propertyList.forEach(function(r,a){a!==0&&s.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],r=n.propertyList[1],a=n.propertyList[2],o=n.propertyList[3],l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:r,type2:a,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){let t=e.getString(1),n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":let s=e.getUint32(),r=e.getUint32(),a=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}let o=up(new Uint8Array(e.getArrayBuffer(a))),l=new $l(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}},$l=class{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){let t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){let e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){let e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){let e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){let e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){let e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){let e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){let t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){let t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=this.offset,n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);let s=n.indexOf(0);return s>=0&&(n=new Uint8Array(this.dv.buffer,t,s)),this._textDecoder.decode(n)}},Ql=class{add(e,t){this[e]=t}};function sb(i){let e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===xp(i,0,e.length)}function rb(i){let e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],t=0;function n(s){let r=i[s-1];return i=i.slice(t+s),t++,r}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function mp(i){let e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Yh(i){return i/46186158e3}var ab=[];function jl(i,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=i;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);let r=s*n.dataSize,a=r+n.dataSize;return lb(ab,n.buffer,r,a)}var qh=new Gt,vr=new L;function gp(i){let e=new we,t=new we,n=new we,s=new we,r=new we,a=new we,o=new we,l=new we,c=new we,f=new we,h=new we,u=new we,d=i.inheritType?i.inheritType:0;i.translation&&e.setPosition(vr.fromArray(i.translation));let p=Ta(0);if(i.preRotation){let I=i.preRotation.map(Ot.degToRad);I.push(p),t.makeRotationFromEuler(qh.fromArray(I))}if(i.rotation){let I=i.rotation.map(Ot.degToRad);I.push(i.eulerOrder||p),n.makeRotationFromEuler(qh.fromArray(I))}if(i.postRotation){let I=i.postRotation.map(Ot.degToRad);I.push(p),s.makeRotationFromEuler(qh.fromArray(I)),s.invert()}i.scale&&r.scale(vr.fromArray(i.scale)),i.scalingOffset&&o.setPosition(vr.fromArray(i.scalingOffset)),i.scalingPivot&&a.setPosition(vr.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(vr.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(vr.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),f.copy(i.parentMatrixWorld));let _=t.clone().multiply(n).multiply(s),m=new we;m.extractRotation(f);let g=new we;g.copyPosition(f);let E=g.clone().invert().multiply(f),T=m.clone().invert().multiply(E),x=r,M=new we;if(d===0)M.copy(m).multiply(_).multiply(T).multiply(x);else if(d===1)M.copy(m).multiply(T).multiply(_).multiply(x);else{let k=new we().scale(new L().setFromMatrixScale(h)).clone().invert(),G=T.clone().multiply(k);M.copy(m).multiply(_).multiply(G).multiply(x)}let b=c.clone().invert(),S=a.clone().invert(),y=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(b).multiply(o).multiply(a).multiply(r).multiply(S),A=new we().copyPosition(y),C=f.clone().multiply(A);return u.copyPosition(C),y=u.clone().multiply(M),y.premultiply(f.invert()),y}function Ta(i){i=i||0;let e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function Kh(i){return i.split(",").map(function(t){return parseFloat(t)})}function xp(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),new TextDecoder().decode(new Uint8Array(i,e,t))}function ob(i,e){for(let t=0,n=i.length,s=e.length;t<s;t++,n++)i[n]=e[t]}function lb(i,e,t,n){for(let s=t,r=0;s<n;s++,r++)i[r]=e[s];return i}function eu(i,e){if(e===yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dr||e===_a){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===dr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function yp(i){let e=new Map,t=new Map,n=i.clone();return _p(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _p(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)_p(i.children[n],e.children[n],t)}var ec=class extends mn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new tc(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new tc(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=zn.extractUrlBase(e);a=zn.resolveURL(c,this.path)}else a=zn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(f){t(f),r.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===wp){try{a[nt.KHR_BINARY_GLTF]=new bu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ru(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let h=this.pluginCallbacks[f](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let f=0;f<r.extensionsUsed.length;++f){let h=r.extensionsUsed[f],u=r.extensionsRequired||[];switch(h){case nt.KHR_MATERIALS_UNLIT:a[h]=new ru;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Su(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[h]=new Mu;break;case nt.KHR_MESH_QUANTIZATION:a[h]=new wu;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function cb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},su=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,f=new _e(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],ln);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new wi(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gi(f),c.distance=h;break;case"spot":c=new ms(f),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},ru=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){let s=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,lt))}return Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(r,r)}return Promise.all(s)}},lu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(r[0],r[1],r[2],ln),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,lt)),Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?dn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},yu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},_u=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},tc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,f=s.count,h=s.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,h,u,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(f*h);return a.decodeGltfBuffer(new Uint8Array(d),f,h,u,s.mode,s.filter),d})})}else return null}},vu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(f=>(l[c]=f,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let f=c.pop(),h=f.isGroup?f.children:[f],u=c[0].count,d=[];for(let p of h){let _=new we,m=new L,g=new Tt,E=new L(1,1,1),T=new hs(p.geometry,p.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),T.setMatrixAt(M,_.compose(m,g,E));let x=null;for(let M in l)if(M==="_COLOR_0"){let b=l[M];T.instanceColor=new bi(b.array,b.itemSize,b.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(x===null){let S=T.geometry;x=new Ct,x.name=S.name;for(let y in S.attributes)x.setAttribute(y,S.attributes[y]);for(let y in S.morphAttributes)x.morphAttributes[y]=S.morphAttributes[y];S.index!==null&&x.setIndex(S.index),x.morphTargetsRelative=S.morphTargetsRelative;for(let y of S.groups)x.addGroup(y.start,y.count,y.materialIndex);S.boundingBox!==null&&(x.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(x.boundingSphere=S.boundingSphere.clone()),x.drawRange.start=S.drawRange.start,x.drawRange.count=S.drawRange.count,x.userData=Object.assign({},S.userData),T.geometry=x}let b=l[M];x.setAttribute(M,new bi(b.array,b.itemSize,b.normalized))}yt.prototype.copy.call(T,p),this.parser.assignFinalMaterial(T),d.push(T)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}},wp="glTF",Ea=12,vp={JSON:1313821514,BIN:5130562},bu=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ea,r=new DataView(e,Ea),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===vp.JSON){let c=new Uint8Array(e,Ea+a,o);this.content=n.decode(c)}else if(l===vp.BIN){let c=Ea+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let f in a){let h=Eu[f]||f.toLowerCase();o[h]=a[f]}for(let f in e.attributes){let h=Eu[f]||f.toLowerCase();if(a[f]!==void 0){let u=n.accessors[e.attributes[f]],d=br[u.componentType];c[h]=d.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(f){return new Promise(function(h,u){s.decodeDracoFile(f,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(d)},o,c,ln,u)})})}},Mu=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},wu=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},nc=class extends ii{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,f=s-t,h=(n-t)/f,u=h*h,d=u*h,p=e*c,_=p-c,m=-2*d+3*u,g=d-u,E=1-m,T=g-u+h;for(let x=0;x!==o;x++){let M=a[_+x+o],b=a[_+x+l]*f,S=a[p+x+o],y=a[p+x]*f;r[x]=E*M+T*b+m*S+g*y}return r}},hb=new Tt,Tu=class extends nc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hb.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bp={9728:Nt,9729:Ut,9984:el,9985:hr,9986:_s,9987:Hn},Sp={33071:on,33648:Ys,10497:Fn},tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ub={CUBICSPLINE:void 0,LINEAR:ss,STEP:is},nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ni({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),i.DefaultMaterial}function Ss(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function db(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,f=e.length;c<f;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,f=e.length;c<f;c++){let h=e[c];if(n){let u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(u)}if(s){let u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let f=c[0],h=c[1],u=c[2];return n&&(i.morphAttributes.position=f),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function pb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mb(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+iu(t.attributes):e=i.indices+":"+iu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+iu(i.targets[n]);return e}function iu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Au(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xb=new we,Ru=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ps(this.options.manager):this.textureLoader=new aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ss(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,f]of a.children.entries())r(f,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(zn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=tu[s.type],o=br[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ht(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=tu[s.type],c=br[s.componentType],f=c.BYTES_PER_ELEMENT,h=f*l,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(d&&d!==h){let g=Math.floor(u/d),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,T=t.cache.get(E);T||(_=new c(o,g*d,s.count*d/f),T=new os(_,d/f),t.cache.add(E,T)),m=new Oi(T,l,u%d/f,p)}else o===null?_=new c(s.count*l):_=new c(o,u,s.count*l),m=new Ht(_,l,p);if(s.sparse!==void 0){let g=tu.SCALAR,E=br[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,M=new E(a[1],T,s.sparse.count*g),b=new c(a[2],x,s.sparse.count*l);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,y=M.length;S<y;S++){let A=M[S];if(m.setX(A,b[S*l]),l>=2&&m.setY(A,b[S*l+1]),l>=3&&m.setZ(A,b[S*l+2]),l>=4&&m.setW(A,b[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return f.magFilter=bp[u.magFilter]||Ut,f.minFilter=bp[u.minFilter]||Hn,f.wrapS=Sp[u.wrapS]||Fn,f.wrapT=Sp[u.wrapT]||Fn,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Nt&&f.minFilter!==Ut,s.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(l).then(function(h){return new Promise(function(u,d){let p=u;t.isImageBitmapLoader===!0&&(p=function(_){let m=new Ft(_);m.needsUpdate=!0,u(m)}),t.load(zn.resolveURL(h,r.path),p,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ci(h,a),h.userData.mimeType=a.mimeType||gb(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=f,f}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ir,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ei,Zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ni}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let h=s[nt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],ln),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);let f=r.alphaMode||nu.OPAQUE;if(f===nu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===nu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==fn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==fn){let h=r.emissiveFactor;o.emissive=new _e().setRGB(h[0],h[1],h[2],ln)}return r.emissiveTexture!==void 0&&a!==fn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,lt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ss(s,h,r),h})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Mp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],f=mb(c),h=s[f];if(h)a.push(h.promise);else{let u;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Mp(new Ct,c,t),c.mode===Rn.TRIANGLE_STRIP?u=u.then(d=>eu(d,_a)):c.mode===Rn.TRIANGLE_FAN&&(u=u.then(d=>eu(d,dr))),s[f]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let f=a[l].material===void 0?fb(this.cache):this.getDependency("material",a[l].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let d=0,p=f.length;d<p;d++){let _=f[d],m=a[d],g,E=c[d];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0){let T=r.isSkinnedMesh===!0,x=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");T&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&x?new ls(_,E):new Pt(_,E),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Rn.LINES)g=new nr(_,E);else if(m.mode===Rn.LINE_STRIP)g=new ti(_,E);else if(m.mode===Rn.LINE_LOOP)g=new Xr(_,E);else if(m.mode===Rn.POINTS)g=new Yr(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&pb(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ci(g,r),m.extensions&&Ss(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ss(s,h[0],r),h[0];let u=new Qt;r.extensions&&Ss(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Ot.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,f=a.length;c<f;c++){let h=a[c];if(h){o.push(h);let u=new we;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new cs(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],f=[];for(let h=0,u=s.channels.length;h<u;h++){let d=s.channels[h],p=s.samplers[d.sampler],_=d.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,E=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",E)),c.push(p),f.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(f)]).then(function(h){let u=h[0],d=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let T=0,x=u.length;T<x;T++){let M=u[T],b=d[T],S=p[T],y=_[T],A=m[T];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,b,S,y,A);if(C)for(let I=0;I<C.length;I++)g.push(C[I])}let E=new ds(r,void 0,g);return ci(E,s),E})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,f=o.length;c<f;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let f=c[0],h=c[1],u=c[2];u!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(u,xb)});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);if(f.userData.pivot!==void 0&&h.length>0){let d=f.userData.pivot,p=h[0];f.pivot=new L().fromArray(d),f.position.x-=d[0],f.position.y-=d[1],f.position.z-=d[2],p.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let f;if(r.isBone===!0?f=new vi:c.length>1?f=new Qt:c.length===1?f=c[0]:f=new yt,f!==c[0])for(let h=0,u=c.length;h<u;h++)f.add(c[h]);if(r.name&&(f.userData.name=r.name,f.name=a),ci(f,r),r.extensions&&Ss(n,f,r),r.matrix!==void 0){let h=new we;h.fromArray(r.matrix),f.applyMatrix4(h)}else r.translation!==void 0&&f.position.fromArray(r.translation),r.rotation!==void 0&&f.quaternion.fromArray(r.rotation),r.scale!==void 0&&f.scale.fromArray(r.scale);if(!s.associations.has(f))s.associations.set(f,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(f);s.associations.set(f,{...h})}return s.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Qt;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Ss(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let f=0,h=l.length;f<h;f++){let u=l[f];u.parent!==null?r.add(yp(u)):r.add(u)}let c=f=>{let h=new Map;for(let[u,d]of s.associations)(u instanceof Zt||u instanceof Ft)&&h.set(u,d);return f.traverse(u=>{let d=s.associations.get(u);d!=null&&h.set(u,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ji[r.path]===ji.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let f;switch(ji[r.path]){case ji.weights:f=Bn;break;case ji.rotation:f=kn;break;case ji.translation:case ji.scale:f=si;break;default:n.itemSize===1?f=Bn:f=si;break}let h=s.interpolation!==void 0?ub[s.interpolation]:ss,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new f(l[d]+"."+ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Au(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof kn?Tu:nc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yb(i,e,t){let n=e.attributes,s=new en;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let f=Au(br[o.componentType]);s.min.multiplyScalar(f),s.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,f=r.length;c<f;c++){let h=r[c];if(h.POSITION!==void 0){let u=t.json.accessors[h.POSITION],d=u.min,p=u.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),u.normalized){let _=Au(br[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Mp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Eu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Xe.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),ci(i,e),yb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?db(i,e.targets,t):i})}var Aa=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=Tp(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=Tp(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function Tp(i,e){return i<=9?e:i>=10&&i<=59?parseFloat(e):i>=60&&i<=99?parseInt(e):i>=100&&i<=109?e:i>=110&&i<=149?parseFloat(e):i>=160&&i<=179?parseInt(e):i>=210&&i<=239?parseFloat(e):i>=270&&i<=289?parseInt(e):i>=290&&i<=299?_b(e):i>=300&&i<=369?e:i>=370&&i<=389?parseInt(e):i>=390&&i<=399?e:i>=400&&i<=409?parseInt(e):i>=410&&i<=419?e:i>=420&&i<=429?parseInt(e):i>=430&&i<=439?e:i>=440&&i<=459?parseInt(e):i>=460&&i<=469?parseFloat(e):i>=470&&i<=481||i===999||i>=1e3&&i<=1009?e:i>=1010&&i<=1059?parseFloat(e):i>=1060&&i<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:i,value:e}),e)}function _b(i){if(i==="0")return!1;if(i==="1")return!0;throw TypeError("String '"+i+"' cannot be cast to Boolean type")}var ic=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function vb(i){return ic[i]}function Ye(i){let e={};i.rewind();let t=i.next(),n=t.code;if(e.x=t.value,n+=10,t=i.next(),t.code!=n)throw new Error("Expected code for point value to be "+n+" but got "+t.code+".");return e.y=t.value,n+=10,t=i.next(),t.code!=n?(i.rewind(),e):(e.z=t.value,e)}function ct(i,e,t){switch(e.code){case 0:i.type=e.value;break;case 5:i.handle=e.value;break;case 6:i.lineType=e.value;break;case 8:i.layer=e.value;break;case 48:i.lineTypeScale=e.value;break;case 60:i.visible=e.value===0;break;case 62:i.colorIndex=e.value,i.color=vb(Math.abs(e.value));break;case 67:i.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:i.ownerHandle=e.value;break;case 347:i.materialObjectHandle=e.value;break;case 370:i.lineweight=e.value;break;case 420:i.color=e.value;break;case 1e3:i.extendedData=i.extendedData||{},i.extendedData.customStrings=i.extendedData.customStrings||[],i.extendedData.customStrings.push(e.value);break;case 1001:i.extendedData=i.extendedData||{},i.extendedData.applicationName=e.value;break;default:return!1}return!0}var Ra=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:n.vertices=bb(e,t),t=e.lastReadGroup;break;default:ct(n,t,e);break}t=e.next()}return n}};function bb(i,e){var t=[],n=!1,s=!1,r=4;for(let o=0;o<=r;o++){for(var a={};!i.isEOF()&&!(e.code===0||s);){switch(e.code){case 10:case 11:case 12:case 13:if(n){s=!0;continue}a.x=e.value,n=!0;break;case 20:case 21:case 22:case 23:a.y=e.value;break;case 30:case 31:case 32:case 33:a.z=e.value;break;default:return t}e=i.next()}t.push(a),n=!1,s=!1}return i.rewind(),t}var Ca=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ye(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:n.endAngle=Math.PI/180*t.value,n.angleLength=n.endAngle-n.startAngle;break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var Ia=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var n={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:n.text=t.value;break;case 2:n.tag=t.value;break;case 3:n.prompt=t.value;break;case 7:n.textStyle=t.value;break;case 10:n.startPoint=Ye(e);break;case 11:n.endPoint=Ye(e);break;case 39:n.thickness=t.value;break;case 40:n.textHeight=t.value;break;case 41:n.scale=t.value;break;case 50:n.rotation=t.value;break;case 51:n.obliqueAngle=t.value;break;case 70:n.invisible=!!(t.value&1),n.constant=!!(t.value&2),n.verificationRequired=!!(t.value&4),n.preset=!!(t.value&8);break;case 71:n.backwards=!!(t.value&2),n.mirrored=!!(t.value&4);break;case 72:n.horizontalJustification=t.value;break;case 73:n.fieldLength=t.value;break;case 74:n.verticalJustification=t.value;break;case 100:break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var Pa=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ye(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:let s=Math.PI/180*t.value;s<n.startAngle?n.angleLength=s+2*Math.PI-n.startAngle:n.angleLength=s-n.startAngle,n.endAngle=s;break;default:ct(n,t,e);break}t=e.next()}return n}};var La=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.block=t.value;break;case 10:n.anchorPoint=Ye(e);break;case 11:n.middleOfText=Ye(e);break;case 12:n.insertionPoint=Ye(e);break;case 13:n.linearOrAngularPoint1=Ye(e);break;case 14:n.linearOrAngularPoint2=Ye(e);break;case 15:n.diameterOrRadiusPoint=Ye(e);break;case 16:n.arcPoint=Ye(e);break;case 70:n.dimensionType=t.value;break;case 71:n.attachmentPoint=t.value;break;case 42:n.actualMeasurement=t.value;break;case 1:n.text=t.value;break;case 50:n.angle=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var Da=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ye(e);break;case 11:n.majorAxisEndPoint=Ye(e);break;case 40:n.axisRatio=t.value;break;case 41:n.startAngle=t.value;break;case 42:n.endAngle=t.value;break;case 2:n.name=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var Na=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.name=t.value;break;case 41:n.xScale=t.value;break;case 42:n.yScale=t.value;break;case 43:n.zScale=t.value;break;case 10:n.position=Ye(e);break;case 50:n.rotation=t.value;break;case 70:n.columnCount=t.value;break;case 71:n.rowCount=t.value;break;case 44:n.columnSpacing=t.value;break;case 45:n.rowSpacing=t.value;break;case 210:n.extrusionDirection=Ye(e);break;default:ct(n,t,e);break}t=e.next()}return n}};var Ua=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.vertices.unshift(Ye(e));break;case 11:n.vertices.push(Ye(e));break;case 210:n.extrusionDirection=Ye(e);break;case 100:break;default:ct(n,t,e);break}t=e.next()}return n}};var Fa=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let n={type:t.value,vertices:[]},s=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:n.elevation=t.value;break;case 39:n.depth=t.value;break;case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:s=t.value;break;case 10:n.vertices=Sb(s,e);break;case 43:t.value!==0&&(n.width=t.value);break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};function Sb(i,e){if(!i||i<=0)throw Error("n must be greater than 0 verticies");let t=[],n=!1,s=!1,r=e.lastReadGroup;for(let a=0;a<i;a++){let o={};for(;!e.isEOF()&&!(r.code===0||s);){switch(r.code){case 10:if(n){s=!0;continue}o.x=r.value,n=!0;break;case 20:o.y=r.value;break;case 30:o.z=r.value;break;case 40:o.startWidth=r.value;break;case 41:o.endWidth=r.value;break;case 42:r.value!=0&&(o.bulge=r.value);break;default:return e.rewind(),n&&t.push(o),e.rewind(),t}r=e.next()}t.push(o),n=!1,s=!1}return e.rewind(),t}var Oa=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:n.text?n.text+=t.value:n.text=t.value;break;case 1:n.text?n.text+=t.value:n.text=t.value;break;case 10:n.position=Ye(e);break;case 11:n.directionVector=Ye(e);break;case 40:n.height=t.value;break;case 41:n.width=t.value;break;case 50:n.rotation=t.value;break;case 71:n.attachmentPoint=t.value;break;case 72:n.drawingDirection=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var Ba=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let s={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:s.position=Ye(e);break;case 39:s.thickness=t.value;break;case 210:s.extrusionDirection=Ye(e);break;case 100:break;default:ct(s,t,e);break}t=e.next()}return s}};var ka=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.x=t.value;break;case 20:n.y=t.value;break;case 30:n.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(n.bulge=t.value);break;case 70:n.curveFittingVertex=(t.value&1)!==0,n.curveFitTangent=(t.value&2)!==0,n.splineVertex=(t.value&8)!==0,n.splineControlPoint=(t.value&16)!==0,n.threeDPolylineVertex=(t.value&32)!==0,n.threeDPolylineMesh=(t.value&64)!==0,n.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:n.faceA=t.value;break;case 72:n.faceB=t.value;break;case 73:n.faceC=t.value;break;case 74:n.faceD=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var za=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:n.thickness=t.value;break;case 40:break;case 41:break;case 70:n.shape=(t.value&1)!==0,n.includesCurveFitVertices=(t.value&2)!==0,n.includesSplineFitVertices=(t.value&4)!==0,n.is3dPolyline=(t.value&8)!==0,n.is3dPolygonMesh=(t.value&16)!==0,n.is3dPolygonMeshClosed=(t.value&32)!==0,n.isPolyfaceMesh=(t.value&64)!==0,n.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:n.extrusionDirection=Ye(e);break;default:ct(n,t,e);break}t=e.next()}return n.vertices=Mb(e,t),n}};function Mb(i,e){let t=new ka,n=[];for(;!i.isEOF();)if(e.code===0){if(e.value==="VERTEX")n.push(t.parseEntity(i,e)),e=i.lastReadGroup;else if(e.value==="SEQEND"){wb(i,e);break}}return n}function wb(i,e){let t={type:e.value};for(e=i.next();!i.isEOF()&&e.code!=0;)ct(t,e,i),e=i.next();return t}var Va=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let n={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.points[0]=Ye(e);break;case 11:n.points[1]=Ye(e);break;case 12:n.points[2]=Ye(e);break;case 13:n.points[3]=Ye(e);break;case 210:n.extrusionDirection=Ye(e);break;default:ct(n,t,e);break}t=e.next()}return n}};var Ha=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.controlPoints||(n.controlPoints=[]),n.controlPoints.push(Ye(e));break;case 11:n.fitPoints||(n.fitPoints=[]),n.fitPoints.push(Ye(e));break;case 12:n.startTangent=Ye(e);break;case 13:n.endTangent=Ye(e);break;case 40:n.knotValues||(n.knotValues=[]),n.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(n.closed=!0),(t.value&2)!=0&&(n.periodic=!0),(t.value&4)!=0&&(n.rational=!0),(t.value&8)!=0&&(n.planar=!0),(t.value&16)!=0&&(n.planar=!0,n.linear=!0);break;case 71:n.degreeOfSplineCurve=t.value;break;case 72:n.numberOfKnots=t.value;break;case 73:n.numberOfControlPoints=t.value;break;case 74:n.numberOfFitPoints=t.value;break;case 210:n.normalVector=Ye(e);break;default:ct(n,t,e);break}t=e.next()}return n}};var Ga=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.startPoint=Ye(e);break;case 11:n.endPoint=Ye(e);break;case 40:n.textHeight=t.value;break;case 41:n.xScale=t.value;break;case 50:n.rotation=t.value;break;case 1:n.text=t.value;break;case 72:n.halign=t.value;break;case 73:n.valign=t.value;break;default:ct(n,t,e);break}t=e.next()}return n}};var at=rm(Ap());at.default.setLevel("error");function Tb(i){i.registerEntityHandler(Ra),i.registerEntityHandler(Ca),i.registerEntityHandler(Ia),i.registerEntityHandler(Pa),i.registerEntityHandler(La),i.registerEntityHandler(Da),i.registerEntityHandler(Na),i.registerEntityHandler(Ua),i.registerEntityHandler(Fa),i.registerEntityHandler(Oa),i.registerEntityHandler(Ba),i.registerEntityHandler(za),i.registerEntityHandler(Va),i.registerEntityHandler(Ha),i.registerEntityHandler(Ga)}var Sr=class{constructor(){this._entityHandlers={},Tb(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",n=this;return new Promise((s,r)=>{e.on("data",a=>{t+=a}),e.on("end",()=>{try{s(n._parse(t))}catch(a){r(a)}}),e.on("error",a=>{r(a)})})}_parse(e){let t={},n=0,s=e.split(/\r\n|\r|\n/g),r=new Aa(s);if(!r.hasNext())throw Error("Empty file");let a=this,o;function l(){for(o=r.next();!r.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=r.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",Rp(o)),o=r.next();continue}o.value==="HEADER"?(at.default.debug("> HEADER"),t.header=c(),at.default.debug("<")):o.value==="BLOCKS"?(at.default.debug("> BLOCKS"),t.blocks=f(),at.default.debug("<")):o.value==="ENTITIES"?(at.default.debug("> ENTITIES"),t.entities=T(!1),at.default.debug("<")):o.value==="TABLES"?(at.default.debug("> TABLES"),t.tables=u(),at.default.debug("<")):o.value==="EOF"?at.default.debug("EOF"):at.default.warn("Skipping section '%s'",o.value)}else o=r.next()}function c(){let b=null,S=null,y={};for(o=r.next();;){if(hi(o,0,"ENDSEC")){b&&(y[b]=S);break}else o.code===9?(b&&(y[b]=S),b=o.value):o.code===10?S={x:o.value}:o.code===20?S.y=o.value:o.code===30?S.z=o.value:S=o.value;o=r.next()}return o=r.next(),y}function f(){let b={};for(o=r.next();o.value!=="EOF"&&!hi(o,0,"ENDSEC");)if(hi(o,0,"BLOCK")){at.default.debug("block {");let S=h();at.default.debug("}"),M(S),S.name?b[S.name]=S:at.default.error('block with handle "'+S.handle+'" is missing a name.')}else Ms(o),o=r.next();return b}function h(){let b={};for(o=r.next();o.value!=="EOF";){switch(o.code){case 1:b.xrefPath=o.value,o=r.next();break;case 2:b.name=o.value,o=r.next();break;case 3:b.name2=o.value,o=r.next();break;case 5:b.handle=o.value,o=r.next();break;case 8:b.layer=o.value,o=r.next();break;case 10:b.position=x(o),o=r.next();break;case 67:b.paperSpace=!!(o.value&&o.value==1),o=r.next();break;case 70:o.value!=0&&(b.type=o.value),o=r.next();break;case 100:o=r.next();break;case 330:b.ownerHandle=o.value,o=r.next();break;case 0:if(o.value=="ENDBLK")break;b.entities=T(!0);break;default:Ms(o),o=r.next()}if(hi(o,0,"ENDBLK")){o=r.next();break}}return b}function u(){let b={};for(o=r.next();o.value!=="EOF"&&!hi(o,0,"ENDSEC");)hi(o,0,"TABLE")?(o=r.next(),E[o.value]?(at.default.debug(o.value+" Table {"),b[E[o.value].tableName]=p(o),at.default.debug("}")):at.default.debug("Unhandled Table "+o.value)):o=r.next();return o=r.next(),b}let d="ENDTAB";function p(b){let S=E[b.value],y={},A=0;for(o=r.next();!hi(o,0,d);)switch(o.code){case 5:y.handle=o.value,o=r.next();break;case 330:y.ownerHandle=o.value,o=r.next();break;case 100:o.value==="AcDbSymbolTable"||Ms(o),o=r.next();break;case 70:A=o.value,o=r.next();break;case 0:o.value===S.dxfSymbolName?y[S.tableRecordsProperty]=S.parseTableRecords():(Ms(o),o=r.next());break;default:Ms(o),o=r.next()}let C=y[S.tableRecordsProperty];if(C){let I=(()=>{if(C.constructor===Array)return C.length;if(typeof C=="object")return Object.keys(C).length})();A!==I&&at.default.warn("Parsed "+I+" "+S.dxfSymbolName+"'s but expected "+A)}return o=r.next(),y}function _(){let b=[],S={};for(at.default.debug("ViewPort {"),o=r.next();!hi(o,0,d);)switch(o.code){case 2:S.name=o.value,o=r.next();break;case 10:S.lowerLeftCorner=x(o),o=r.next();break;case 11:S.upperRightCorner=x(o),o=r.next();break;case 12:S.center=x(o),o=r.next();break;case 13:S.snapBasePoint=x(o),o=r.next();break;case 14:S.snapSpacing=x(o),o=r.next();break;case 15:S.gridSpacing=x(o),o=r.next();break;case 16:S.viewDirectionFromTarget=x(o),o=r.next();break;case 17:S.viewTarget=x(o),o=r.next();break;case 42:S.lensLength=o.value,o=r.next();break;case 43:S.frontClippingPlane=o.value,o=r.next();break;case 44:S.backClippingPlane=o.value,o=r.next();break;case 45:S.viewHeight=o.value,o=r.next();break;case 50:S.snapRotationAngle=o.value,o=r.next();break;case 51:S.viewTwistAngle=o.value,o=r.next();break;case 79:S.orthographicType=o.value,o=r.next();break;case 110:S.ucsOrigin=x(o),o=r.next();break;case 111:S.ucsXAxis=x(o),o=r.next();break;case 112:S.ucsYAxis=x(o),o=r.next();break;case 110:S.ucsOrigin=x(o),o=r.next();break;case 281:S.renderMode=o.value,o=r.next();break;case 281:S.defaultLightingType=o.value,o=r.next();break;case 292:S.defaultLightingOn=o.value,o=r.next();break;case 330:S.ownerHandle=o.value,o=r.next();break;case 63:case 421:case 431:S.ambientColor=o.value,o=r.next();break;case 0:o.value==="VPORT"&&(at.default.debug("}"),b.push(S),at.default.debug("ViewPort {"),S={},o=r.next());break;default:Ms(o),o=r.next();break}return at.default.debug("}"),b.push(S),b}function m(){let b={},S={},y=0,A;for(at.default.debug("LType {"),o=r.next();!hi(o,0,"ENDTAB");)switch(o.code){case 2:S.name=o.value,A=o.value,o=r.next();break;case 3:S.description=o.value,o=r.next();break;case 73:y=o.value,y>0&&(S.pattern=[]),o=r.next();break;case 40:S.patternLength=o.value,o=r.next();break;case 49:S.pattern.push(o.value),o=r.next();break;case 0:at.default.debug("}"),y>0&&y!==S.pattern.length&&at.default.warn("lengths do not match on LTYPE pattern"),b[A]=S,S={},at.default.debug("LType {"),o=r.next();break;default:o=r.next()}return at.default.debug("}"),b[A]=S,b}function g(){let b={},S={},y;for(at.default.debug("Layer {"),o=r.next();!hi(o,0,"ENDTAB");)switch(o.code){case 2:S.name=o.value,y=o.value,o=r.next();break;case 62:S.visible=o.value>=0,S.colorIndex=Math.abs(o.value),S.color=Eb(S.colorIndex),o=r.next();break;case 70:S.frozen=(o.value&1)!=0||(o.value&2)!=0,o=r.next();break;case 0:o.value==="LAYER"&&(at.default.debug("}"),b[y]=S,at.default.debug("Layer {"),S={},y=void 0,o=r.next());break;default:Ms(o),o=r.next();break}return at.default.debug("}"),b[y]=S,b}let E={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:_},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:m},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:g}};function T(b){let S=[],y=b?"ENDBLK":"ENDSEC";for(b||(o=r.next());;)if(o.code===0){if(o.value===y)break;let A=a._entityHandlers[o.value];if(A!=null){at.default.debug(o.value+" {");let C=A.parseEntity(r,o);o=r.lastReadGroup,at.default.debug("}"),M(C),S.push(C)}else{at.default.warn("Unhandled entity "+o.value),o=r.next();continue}}else o=r.next();return y=="ENDSEC"&&(o=r.next()),S}function x(b){let S={},y=b.code;if(S.x=b.value,y+=10,b=r.next(),b.code!=y)throw new Error("Expected code for point value to be "+y+" but got "+b.code+".");return S.y=b.value,y+=10,b=r.next(),b.code!=y?(r.rewind(),S):(S.z=b.value,S)}function M(b){if(!b)throw new TypeError("entity cannot be undefined or null");b.handle||(b.handle=n++)}return l(),t}};function hi(i,e,t){return i.code===e&&i.value===t}function Ms(i){at.default.debug("unhandled group "+Rp(i))}function Rp(i){return i.code+":"+i.value}function Eb(i){return ic[i]}var Cp=Sr;var Ab=[["racks",/rack|shelf|shelv|pallet|stowage|货架|货位|托盘/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|通道|走道|输送/],["zones",/zone|area|region|区|区域|库区/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|小车|叉车|穿梭|堆垛|提升|转台/]];function Cu(i){let t=(String(i&&i.layer||"")+" "+String(i&&i.block||"")).toLowerCase();for(let n of Ab)if(n[1].test(t))return n[0];return null}function ui(i){if(i===null||typeof i!="object"||typeof i.x!="number")return null;let e={x:i.x,y:typeof i.y=="number"?i.y:0};return typeof i.z=="number"&&(e.z=i.z),e}function Wa(i){return(Array.isArray(i)?i:[]).map(ui).filter(e=>e!==null)}function Lp(i){let e={type:i.type,layer:i.layer||"0"};switch(i.handle!==void 0&&(e.handle=String(i.handle)),i.type){case"LINE":e.vertices=Wa(i.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=Wa(i.vertices),e.closed=i.shape===!0,typeof i.width=="number"&&(e.width=i.width);break;case"ARC":e.center=ui(i.center),e.radius=i.radius,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"CIRCLE":e.center=ui(i.center),e.radius=i.radius;break;case"ELLIPSE":e.center=ui(i.center),e.majorAxisEndPoint=ui(i.majorAxisEndPoint),e.axisRatio=i.axisRatio,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"TEXT":e.text=rc(typeof i.text=="string"?i.text:""),e.position=ui(i.startPoint),typeof i.textHeight=="number"&&(e.height=i.textHeight),typeof i.rotation=="number"&&(e.rotation=i.rotation);break;case"MTEXT":e.text=rc(typeof i.text=="string"?i.text:""),e.position=ui(i.position),typeof i.height=="number"&&(e.height=i.height);break;case"INSERT":e.block=typeof i.name=="string"?i.name:null,e.position=ui(i.position),typeof i.rotation=="number"&&(e.rotation=i.rotation),typeof i.xScale=="number"&&i.xScale!==1&&(e.xScale=i.xScale),typeof i.yScale=="number"&&i.yScale!==1&&(e.yScale=i.yScale);break;case"POINT":e.position=ui(i.position);break;case"SOLID":e.points=Wa(i.points);break;case"SPLINE":e.controlPoints=Wa(i.controlPoints),e.fitPoints=Wa(i.fitPoints);break;default:break}return e}function Rb(i){let e=i&&i.tables&&i.tables.layer&&i.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function Cb(i){let e=i&&i.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:ui(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}var Dp={racks:"\u8D27\u67B6",aisles:"\u901A\u9053",zones:"\u533A\u57DF",agvs:"AGV"},Ib=new Set(["TEXT","MTEXT","DIMENSION","HATCH","ATTDEF","ATTRIB","LEADER","MLINE"]),Pb=/dim|标注|note|text|hatch|边框|图框|frame|border|title/i;function rc(i){return typeof i!="string"||i===""?"":i.replace(/\\[A-Za-z][^;\\]*;/g,"").replace(/\\[A-Za-z]/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}var Lb={tolerance:1,maxPerDevice:200};function Ip(i){let e=i.handle!=null?String(i.handle):null;switch(i.type){case"LINE":{let s=i.vertices||[];if(s.length>=2)return{type:"line",coords:[s[0].x,s[0].y,s[1].x,s[1].y],handle:e};break}case"LWPOLYLINE":case"POLYLINE":{let s=[];for(let r of i.vertices||[])s.push(r.x,r.y);if(s.length>=4)return{type:"polyline",coords:s,closed:i.closed===!0,handle:e};break}case"ARC":return{type:"arc",coords:[i.center.x,i.center.y,i.radius||0,i.startAngle||0,i.endAngle||0],handle:e};case"CIRCLE":return{type:"circle",coords:[i.center.x,i.center.y,i.radius||0],handle:e};case"TEXT":case"MTEXT":return{type:"text",coords:[i.position?i.position.x:0,i.position?i.position.y:0],text:rc(i.text||""),handle:e};case"INSERT":return{type:"insert",coords:[i.position?i.position.x:0,i.position?i.position.y:0],blockName:i.block||null,rotation:i.rotation||0,handle:e};case"POINT":return{type:"point",coords:[i.position?i.position.x:0,i.position?i.position.y:0],handle:e};default:break}let t=[];for(let s of i.vertices||[])t.push(s.x,s.y);if(t.length>=4)return{type:"polyline",coords:t,closed:i.closed===!0,handle:e};let n=i.position||i.center||i.vertices&&i.vertices[0]||{x:0,y:0};return{type:"point",coords:[n.x||0,n.y||0],handle:e}}function Np(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i){let a=r.coords||[];if(r.type==="arc"||r.type==="circle"){let o=a[0],l=a[1],c=a[2]||0;e=Math.min(e,o-c),n=Math.max(n,o+c),t=Math.min(t,l-c),s=Math.max(s,l+c);continue}for(let o=0;o+1<a.length;o+=2)e=Math.min(e,a[o]),n=Math.max(n,a[o]),t=Math.min(t,a[o+1]),s=Math.max(s,a[o+1])}return e===1/0?null:{minX:e,minY:t,maxX:n,maxY:s}}function Pp(i,e,t,n,s,r,a,o){let l=Np(n)||{minX:0,minY:0,maxX:0,maxY:0},c=s?s.x:(l.minX+l.maxX)/2,f=s?s.y:(l.minY+l.maxY)/2,h=null,u=1/0,d=Math.max(l.maxX-l.minX,l.maxY-l.minY,1)+5;for(let _ of o){let m=_&&_.position;if(!m||!_.text)continue;let g=rc(_.text);if(g==="")continue;let E=Math.max(l.minX-m.x,0,m.x-l.maxX),T=Math.max(l.minY-m.y,0,m.y-l.maxY),x=E*E+T*T;x<u&&x<=d*d&&(u=x,h=g)}let p=Cu({layer:e,block:t});return{device_id:i,id:i,type:p&&Dp[p]||e||"0",layer:e||"0",blockName:t||null,name:h?h.slice(0,60):null,bounding_box:{min:[l.minX,l.minY,0],max:[l.maxX,l.maxY,0]},center:[c,f,0],rotation:r||0,scale:a||{x:1,y:1},entityCount:n.length,handles:n.map(_=>_.handle).filter(_=>_!=null),geometry_group:n}}function Db(i,e,t){let n=t||Lb,s=i.filter(u=>u.type==="TEXT"||u.type==="MTEXT"),r=e&&e.blocks||{},a=[],o=0,l=()=>"device_"+ ++o,c=[],f=[];for(let u of i)Ib.has(u.type)||Pb.test(String(u.layer||""))||(u.type==="INSERT"?c.push(u):f.push(u));for(let u of c){let d=r[u.block],p=(d&&d.entities||[]).map(Lp).map(Ip).filter(Boolean);p.length===0&&(p=[{type:"point",coords:[0,0],handle:u.handle!=null?String(u.handle):null}]),a.push(Pp(l(),u.layer,u.block||null,p,u.position||{x:0,y:0},u.rotation||0,{x:u.xScale||1,y:u.yScale||1},s))}let h=[];for(let u of f){let d=Ip(u);if(!d)continue;let p=Np([d]);p&&h.push({entry:d,layer:u.layer||"0",minX:p.minX,minY:p.minY,maxX:p.maxX,maxY:p.maxY})}if(h.length>0){let u=1/0,d=1/0,p=-1/0,_=-1/0;for(let y of h)u=Math.min(u,y.minX),d=Math.min(d,y.minY),p=Math.max(p,y.maxX),_=Math.max(_,y.maxY);let m=Math.max(p-u,_-d,1),g=(m>5e3?10:m*.005)*(n.tolerance||1),E=h.map((y,A)=>A),T=y=>{for(;E[y]!==y;)E[y]=E[E[y]],y=E[y];return y},x=(y,A)=>{let C=T(y),I=T(A);C!==I&&(E[I]=C)},M=Math.max(g*5,m/100),b=new Map;h.forEach((y,A)=>{let C=Math.floor((y.minX-g)/M),I=Math.floor((y.maxX+g)/M),k=Math.floor((y.minY-g)/M),G=Math.floor((y.maxY+g)/M);for(let N=C;N<=I;N++)for(let z=k;z<=G;z++){let Q=N+","+z;for(let J of b.get(Q)||[]){let se=h[J];y.minX-g<=se.maxX&&se.minX-g<=y.maxX&&y.minY-g<=se.maxY&&se.minY-g<=y.maxY&&x(A,J)}b.has(Q)||b.set(Q,[]),b.get(Q).push(A)}});let S=new Map;h.forEach((y,A)=>{let C=T(A);S.has(C)||S.set(C,[]),S.get(C).push(y)});for(let y of S.values()){let A=n.maxPerDevice||200,C=[y],I=[];for(;C.length>0;){let k=C.pop();k.length<=A?I.push(k):(C.push(k.slice(0,Math.floor(k.length/2))),C.push(k.slice(Math.floor(k.length/2))))}for(let k of I){let G={};for(let z of k)G[z.layer]=(G[z.layer]||0)+1;let N=Object.keys(G).sort((z,Q)=>G[Q]-G[z])[0]||"0";a.push(Pp(l(),N,null,k.map(z=>z.entry),null,0,{x:1,y:1},s))}}}return a}function Nb(i,e,t,n){let r=[],a=[],o=[],l=[],c=[],f=!1,h={racks:r,aisles:a,zones:o,agvs:l},u={racks:0,aisles:0,zones:0,agvs:0},d=0;for(let y of i.entities||[]){if(c.length>=5e4){f=!0;break}let A=Lp(y);c.push(A);let C=Cu(A);if(C===null){A.type!=="TEXT"&&A.type!=="MTEXT"&&(d+=1);continue}u[C]+=1,h[C].push(Object.assign({id:C.slice(0,-1)+"-"+u[C]},A))}let p={},_={},m=1/0,g=1/0,E=-1/0,T=-1/0;for(let y of c){p[y.layer]=(p[y.layer]||0)+1,_[y.type]=(_[y.type]||0)+1;let A=C=>{C&&(m=Math.min(m,C.x),g=Math.min(g,C.y),E=Math.max(E,C.x),T=Math.max(T,C.y))};A(y.position),A(y.center);for(let C of y.vertices||[])A(C);for(let C of(y.controlPoints||[]).concat(y.fitPoints||[],y.points||[]))A(C)}let x=m<1/0?{width:E-m,height:T-g}:null,M=Rb(i).map(y=>Object.assign({},y,{count:p[y.name]||0}));for(let y of Object.keys(p))M.some(A=>A.name===y)||M.push({name:y,color:null,colorIndex:null,visible:!0,frozen:!1,count:p[y]});let b=x?Math.max(x.width,x.height):100,S=Db(c,i,n);return{racks:r,aisles:a,zones:o,agvs:l,entities:c,devices:S,layers:M,meta:{source:e,format:t,blocks:Cb(i),entityCount:c.length,unclassified:d,truncated:f,byType:_,span:x}}}function ac(i,e,t){let n;try{n=new Cp().parseSync(i)}catch(s){throw new Error("DXF \u89E3\u6790\u5931\u8D25: "+(s&&s.message?s.message:String(s)))}if(n===null||typeof n!="object"||!Array.isArray(n.entities))throw new Error("DXF \u89E3\u6790\u5931\u8D25: \u89E3\u6790\u5668\u672A\u8FD4\u56DE\u5B9E\u4F53\u8868");return Nb(n,e,t||"dxf")}function Iu(i){let e=i.devices||[],t=new Map;for(let f of e){let h=f.layer||"0",u=t.get(h);if(!u){let p=Cu({layer:f.layer,block:f.blockName});u={key:h,category:p&&Dp[p]||h,ids:[],widths:[],depths:[],areas:[],texts:new Set,geometry:new Set,blocks:new Set},t.set(h,u)}u.ids.push(String(f.device_id||f.id||""));let d=f.bounding_box;d&&(u.widths.push(Math.abs(d.max[0]-d.min[0])),u.depths.push(Math.abs(d.max[1]-d.min[1])),u.areas.push(Math.abs(d.max[0]-d.min[0])*Math.abs(d.max[1]-d.min[1]))),f.name&&u.texts.add(f.name),f.blockName&&u.blocks.add(f.blockName);for(let p of f.geometry_group||[])u.geometry.add(p.type)}let n=f=>{if(f.length===0)return 0;let h=f.slice().sort((d,p)=>d-p),u=Math.floor(h.length/2);return h.length%2?h[u]:(h[u-1]+h[u])/2},s=f=>Math.round(f*10)/10,r=f=>{let h=f.map(m=>Number(String(m).replace(/^device_/,""))).filter(m=>Number.isFinite(m)).sort((m,g)=>m-g),u=[],d=null,p=null,_=()=>{d!==null&&(u.push(d===p?"device_"+d:"device_"+d+"..device_"+p),d=null)};for(let m of h){if(d===null){d=m,p=m;continue}if(m===p+1){p=m;continue}_(),d=m,p=m}return _(),u.join(", ")},a=[],o=[];for(let f of t.values()){let h=n(f.widths),u=n(f.depths);a.push({key:f.key,category:f.category,count:f.ids.length,ids:r(f.ids),bbox_typical:[s(h),s(u)],texts:Array.from(f.texts).slice(0,5),geometry:Array.from(f.geometry),block_names:Array.from(f.blocks)});let d=n(f.areas);for(let p of e){if((p.layer||"0")!==f.key)continue;let _=p.bounding_box,m=_?Math.abs(_.max[0]-_.min[0]):0,g=_?Math.abs(_.max[1]-_.min[1]):0,E=m*g,T=!!p.name,x=E>0&&(E<d*.2||E>d*5);(T||x)&&o.length<50&&o.push({device_id:p.device_id||p.id,key:f.key,why:[T?"named":null,x?"size-outlier":null].filter(Boolean).join("+"),size:[s(m),s(g)],texts:p.name?[p.name]:[]})}}a.sort((f,h)=>h.count-f.count);let l=i.meta&&i.meta.span||null,c=l?Math.max(l.width,l.height):0;return{manifest_version:1,generated_by:"dsh-cad-scene",source:i.meta&&i.meta.source||null,plan:{span:l?[Math.round(l.width),Math.round(l.height)]:null,unit_guess:c>5e3?"large-span (likely mm)":"small plan (unit-less)"},groups:a,anomalies:o}}var D=require("react/jsx-runtime"),Ub=["slots"],Fb={racks:16347926,aisles:9741240,zones:2278750,agvs:15680580},zp={racks:"\u8D27\u67B6",aisles:"\u901A\u9053",zones:"\u533A\u57DF",agvs:"AGV"};var Pu={racks:[],aisles:[],zones:[],agvs:[],entities:[],layers:[]},Up=[6333946,16347926,3462041,16020150,10980346,16436245,2282478,16478597,4906624,8490232,16622767,3718648,16628340,12616956,8843180,16557477];function Ob(i){let e=String(i||"0"),t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return Up[t%Up.length]}var Bb=[[/crane|elevat|lift|hoist|stacker|货架|堆垛|提升/,11],[/platform|conveyor|belt|roller|输送|转台/,1.5],[/shuttle|vehicle|agv|amr|rgv|trolley|小车|叉车|穿梭/,.8],[/rack|shelf|shelv|pallet|托盘/,6]];function Fp(i){let e=String(i||"").toLowerCase();for(let t of Bb)if(t[0].test(e))return t[1];return 1}function Ai(i,e,t){let s=(Array.isArray(i.layers)?i.layers:[]).find(r=>r&&r.name===e);return s&&typeof s.color=="number"&&s.color>0?s.color:Ob(e)}function Vp({scene:i,selected:e,onSelect:t,hiddenCats:n,hiddenLayers:s,models:r,binding:a,showRealModels:o}){let l=(0,St.useRef)(null),c=(0,St.useRef)([]);return(0,St.useEffect)(()=>{let f=l.current;if(!f)return;let h=f.clientWidth||640,u=Math.max(f.clientHeight||0,320),d=new Wl({antialias:!0});d.setPixelRatio(window.devicePixelRatio||1),d.setSize(h,u),f.appendChild(d.domElement);let p=new Hr;p.background=new _e(988970);let _=new Lt(50,h/u,.1,1e4),m=new Kl(_,d.domElement);m.enableDamping=!0,m.autoRotate=!0,m.autoRotateSpeed=.8,p.add(new gs(16777215,.55)),p.add(new sa(12571903,725536,.5));let g=new Qt,E=[],T=1/0,x=1/0,M=-1/0,b=-1/0,S=Y=>{!Y||typeof Y.x!="number"||(T=Math.min(T,Y.x),x=Math.min(x,Y.y),M=Math.max(M,Y.x),b=Math.max(b,Y.y))};for(let Y of["racks","aisles","zones","agvs"])for(let ue of i[Y]||[]){S(ue.position),S(ue.center);for(let ce of ue.vertices||[])S(ce)}for(let Y of i.entities||[]){S(Y.position),S(Y.center);for(let ue of Y.vertices||[])S(ue)}let A=(T===1/0?100:Math.max(M-T,b-x,40))/100,C=s||{},I=(i.devices||[]).filter(Y=>Y&&!C[Y.layer]),k=new Map,G=[];for(let Y of I)Y.blockName?(k.has(Y.blockName)||k.set(Y.blockName,[]),k.get(Y.blockName).push(Y)):G.push(Y);let N=e||new Set,z=(Y,ue,ce,Re,P,Ee,Ge,R,v)=>{Y.push(ce,0,-Re,P,0,-Ee,P,Ge,-Ee,ce,0,-Re,P,Ge,-Ee,ce,Ge,-Re),ue.push(v.r,v.g,v.b,v.r,v.g,v.b,R.r,R.g,R.b,v.r,v.g,v.b,R.r,R.g,R.b,R.r,R.g,R.b)},Q=new Map;if(a){for(let Y of a.group_bindings||[])Y.key&&Y.model&&Q.set(Y.key,Y.model);for(let Y of a.devices||[])Y.device_id&&Y.model&&Q.set(Y.device_id,Y.model)}for(let[Y,ue]of k){let ce=new hs(new ki(1,1,1),new ni,ue.length),Re=new we,P=new Tt,Ee=new L(0,1,0),Ge=new L,R=new L;ue.forEach((v,B)=>{let H=v.bounding_box,q=H?Math.max(H.max[0]-H.min[0],.1):1,he=H?Math.max(H.max[1]-H.min[1],.1):1,fe=Math.max(q*(v.scale.x||1),A*.2),K=Math.max(he*(v.scale.y||1),A*.2),$=Fp(v.layer)*A;P.setFromAxisAngle(Ee,-((v.rotation||0)*Math.PI)/180);let le=v.center||[0,0,0];R.set(le[0],$/2,-le[1]),Ge.set(fe,$,K),Re.compose(R,P,Ge),ce.setMatrixAt(B,Re),ce.setColorAt(B,new _e(N.has(v.id)?16436245:Ai(i,v.layer)))}),ce.instanceMatrix.needsUpdate=!0,ce.instanceColor&&(ce.instanceColor.needsUpdate=!0),ce.userData.instanceDevices=ue,ce.userData.recolor=v=>{ue.forEach((B,H)=>{ce.setColorAt(H,new _e(v&&v.has(B.id)?16436245:Ai(i,B.layer)))}),ce.instanceColor&&(ce.instanceColor.needsUpdate=!0)},g.add(ce),E.push(ce)}if(o&&r&&r.size>0&&Q.size>0){let Y=s||{};for(let ue of I){if(Y[ue.layer])continue;let ce=Q.get(ue.device_id)||Q.get(ue.layer);if(!ce)continue;let Re=r.get(ce);if(!Re)continue;let P=Re.clone(!0),Ee=ue.bounding_box,Ge=Ee?Math.max(Ee.max[0]-Ee.min[0],.1):1,R=Ee?Math.max(Ee.max[1]-Ee.min[1],.1):1,v=a.model_library&&a.model_library[ce]||{},B=Array.isArray(v.size_hint)?v.size_hint:[1,1,1],H=B[0]>0?Ge/B[0]:1,q=B[2]>0?R/B[2]:1,he=Math.max(H,q),fe=ue.center||[0,0,0],K=(ue.rotation||0)+(v.rotation_offset_deg||0);P.scale.setScalar(he),P.position.set(fe[0],0,-fe[1]),P.rotation.y=-(K*Math.PI)/180,P.traverse($=>{$.isMesh&&($.material=$.material.clone(),$.material.emissive=new _e(N.has(ue.id)?4473856:0)),$.userData.device=ue}),g.add(P),E.push(P)}}let J=new Map;for(let Y of G)J.has(Y.layer)||J.set(Y.layer,[]),J.get(Y.layer).push(Y);for(let[Y,ue]of J){let ce=Fp(Y)*A,Re=[],P=[],Ee=[],Ge=0;for(let B of ue){let H=Ge,q=new _e(N.has(B.id)?16436245:Ai(i,B.layer)),he=q.clone().multiplyScalar(.22);for(let fe of B.geometry_group||[]){let K=fe.coords||[];if(fe.type==="line"&&K.length>=4)z(Re,P,K[0],K[1],K[2],K[3],ce,q,he),Ge+=2;else if(fe.type==="polyline")for(let $=0;$+3<K.length;$+=2)z(Re,P,K[$],K[$+1],K[$+2],K[$+3],ce,q,he),Ge+=2;else if(fe.type==="arc"||fe.type==="circle"){let $=K[0],le=K[1],Pe=K[2]||0,me=fe.type==="circle"?0:K[3]||0,xe=fe.type==="circle"?Math.PI*2:K[4]||0,Ue=$+Pe*Math.cos(me),He=le+Pe*Math.sin(me);for(let Ke=1;Ke<=24;Ke++){let O=me+(xe-me)*Ke/24,ge=$+Pe*Math.cos(O),ne=le+Pe*Math.sin(O);z(Re,P,Ue,He,ge,ne,ce,q,he),Ge+=2,Ue=ge,He=ne}}}Ee.push({device:B,start:H,end:Ge})}if(Re.length===0)continue;let R=new Ct;R.setAttribute("position",new xt(Re,3)),R.setAttribute("color",new xt(P,3));let v=new Pt(R,new fn({vertexColors:!0,side:gn}));v.userData.deviceRanges=Ee,v.userData.recolor=B=>{let H=v.geometry.getAttribute("color"),q=H.array;for(let he of Ee){let fe=B&&B.has(he.device.id),K=new _e(fe?16436245:Ai(i,he.device.layer)),$=K.clone().multiplyScalar(.22),le=he.start*9,Pe=(he.end-he.start)/2;for(let me=0;me<Pe;me++)q[le++]=$.r,q[le++]=$.g,q[le++]=$.b,q[le++]=$.r,q[le++]=$.g,q[le++]=$.b,q[le++]=K.r,q[le++]=K.g,q[le++]=K.b,q[le++]=$.r,q[le++]=$.g,q[le++]=$.b,q[le++]=K.r,q[le++]=K.g,q[le++]=K.b,q[le++]=K.r,q[le++]=K.g,q[le++]=K.b}H.needsUpdate=!0},g.add(v),E.push(v)}p.add(g),c.current=E;let se=T===1/0?new en(new L(-20,0,-20),new L(20,1,20)):new en(new L(T,0,-b),new L(M,12*A,-x)),U=T===1/0,V=U?new L(0,0,0):se.getCenter(new L),ee=U?new L(40,0,40):se.getSize(new L),re=Math.max(ee.x,ee.z,ee.y,40);p.fog=new Vr(988970,re*1.5,re*5),_.near=Math.max(re*.001,.01),_.far=Math.max(re*30,1e3),_.updateProjectionMatrix();let oe=new Pt(new fs(re*3,re*3),new ni({color:1317931,roughness:1}));oe.rotation.x=-Math.PI/2,oe.position.set(V.x,-.02*A,V.z),p.add(oe);let pe=new la(re*3,30,3359061,1976635);pe.position.set(V.x,0,V.z),p.add(pe);let Ne=new L(V.x+re*.8,re*1.5,V.z-re*.6),ze=new Pt(new ta(Math.max(re*.06,1.5),24,24),new fn({color:16770723}));ze.position.copy(Ne),p.add(ze);let j=document.createElement("canvas");j.width=64,j.height=64;let Z=j.getContext("2d"),ie=Z.createRadialGradient(32,32,4,32,32,32);ie.addColorStop(0,"rgba(255,236,179,0.95)"),ie.addColorStop(.4,"rgba(255,220,150,0.35)"),ie.addColorStop(1,"rgba(255,220,150,0)"),Z.fillStyle=ie,Z.fillRect(0,0,64,64);let Ie=new Wr(new Qs({map:new Kr(j),transparent:!0,depthWrite:!1}));Ie.scale.setScalar(Math.max(re*.5,8)),Ie.position.copy(Ne),p.add(Ie);let de=new wi(16773848,1.2);de.position.copy(Ne),de.target.position.copy(V),p.add(de),p.add(de.target),_.position.set(V.x+re*1,re*.55,V.z+re*1),m.target.copy(V),m.update();let Oe=new oa;Oe.params.Line.threshold=1.5;let it=new Ce,Ze=Y=>{let ue=d.domElement.getBoundingClientRect();it.x=(Y.clientX-ue.left)/ue.width*2-1,it.y=-((Y.clientY-ue.top)/ue.height)*2+1,Oe.setFromCamera(it,_);let ce=Oe.intersectObjects(E,!0);if(ce.length>0){let Re=ce[0],P=Re.object;if(P.isInstancedMesh&&P.userData.instanceDevices&&P.userData.instanceDevices[Re.instanceId])t({item:null,category:null,device:P.userData.instanceDevices[Re.instanceId]});else if(P.userData.deviceRanges&&Re.faceIndex!=null){let Ee=P.userData.deviceRanges.find(Ge=>Re.faceIndex>=Ge.start&&Re.faceIndex<Ge.end);t({item:null,category:null,device:Ee?Ee.device:null})}else P.userData.device?t({item:null,category:null,device:P.userData.device}):P.userData.item?t({item:P.userData.item,category:P.userData.category||null}):t(null)}else t(null)},tt=()=>{m.autoRotate=!1,d.domElement.removeEventListener("pointerdown",tt)};d.domElement.addEventListener("pointerdown",tt),d.domElement.addEventListener("click",Ze);let ut=new ResizeObserver(()=>{let Y=f.clientWidth||h,ue=Math.max(f.clientHeight||0,320);_.aspect=Y/ue,_.updateProjectionMatrix(),d.setSize(Y,ue)});ut.observe(f);let Je=0,_t=()=>{Je=requestAnimationFrame(_t),m.update(),d.render(p,_)};return _t(),()=>{cancelAnimationFrame(Je),ut.disconnect(),d.domElement.removeEventListener("click",Ze),m.dispose(),p.traverse(Y=>{if(Y.geometry&&Y.geometry.dispose(),Y.material){let ue=Array.isArray(Y.material)?Y.material:[Y.material];for(let ce of ue)ce.map&&ce.map.dispose(),ce.dispose()}}),d.dispose(),d.domElement.parentNode===f&&f.removeChild(d.domElement),c.current=[]}},[i,n,s,r,a,o]),(0,St.useEffect)(()=>{for(let f of c.current)f.userData&&typeof f.userData.recolor=="function"&&f.userData.recolor(e)},[e]),(0,D.jsx)("div",{ref:l,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}async function kb(i){let e=new Uint8Array(await i.arrayBuffer()),t="",n=32768;for(let s=0;s<e.length;s+=n)t+=String.fromCharCode.apply(null,e.subarray(s,s+n));return btoa(t)}function zb(i,e,t,n,s){return new Promise((r,a)=>{let o=typeof n=="function"?n:()=>{};if(typeof Worker>"u"){o("\u89E3\u6790\u4E2D \xB7 \u4E3B\u7EBF\u7A0B\u56DE\u9000");try{r(ac(e,i,t,s))}catch(h){a(h)}return}let l="",c=null;try{l=URL.createObjectURL(new Blob([`(()=>{var Ee=Object.create;var ue=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var Te=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty;var Se=(a,e)=>()=>{try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Ie=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Pe(e))!Le.call(a,l)&&l!==t&&ue(a,l,{get:()=>e[l],enumerable:!(n=we(e,l))||n.enumerable});return a};var Ae=(a,e,t)=>(t=a!=null?Ee(Te(a)):{},Ie(e||!a||!a.__esModule?ue(t,"default",{value:a,enumerable:!0}):t,a));var de=Se((pe,re)=>{(function(a,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof re=="object"&&re.exports?re.exports=e():a.log=e()})(pe,function(){"use strict";var a=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],l={},s=null;function b(p,x){var f=p[x];if(typeof f.bind=="function")return f.bind(p);try{return Function.prototype.bind.call(f,p)}catch{return function(){return Function.prototype.apply.apply(f,[p,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function g(p){return p==="debug"&&(p="log"),typeof console===e?!1:p==="trace"&&t?o:console[p]!==void 0?b(console,p):console.log!==void 0?b(console,"log"):a}function w(){for(var p=this.getLevel(),x=0;x<n.length;x++){var f=n[x];this[f]=x<p?a:this.methodFactory(f,p,this.name)}if(this.log=this.debug,typeof console===e&&p<this.levels.SILENT)return"No console available for logging"}function O(p){return function(){typeof console!==e&&(w.call(this),this[p].apply(this,arguments))}}function I(p,x,f){return g(p)||O.apply(this,arguments)}function m(p,x){var f=this,P,L,S,y="loglevel";typeof p=="string"?y+=":"+p:typeof p=="symbol"&&(y=void 0);function C(u){var E=(n[u]||"silent").toUpperCase();if(!(typeof window===e||!y)){try{window.localStorage[y]=E;return}catch{}try{window.document.cookie=encodeURIComponent(y)+"="+E+";"}catch{}}}function c(){var u;if(!(typeof window===e||!y)){try{u=window.localStorage[y]}catch{}if(typeof u===e)try{var E=window.document.cookie,A=encodeURIComponent(y),F=E.indexOf(A+"=");F!==-1&&(u=/^([^;]+)/.exec(E.slice(F+A.length+1))[1])}catch{}return f.levels[u]===void 0&&(u=void 0),u}}function i(){if(!(typeof window===e||!y)){try{window.localStorage.removeItem(y)}catch{}try{window.document.cookie=encodeURIComponent(y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function r(u){var E=u;if(typeof E=="string"&&f.levels[E.toUpperCase()]!==void 0&&(E=f.levels[E.toUpperCase()]),typeof E=="number"&&E>=0&&E<=f.levels.SILENT)return E;throw new TypeError("log.setLevel() called with invalid level: "+u)}f.name=p,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=x||I,f.getLevel=function(){return S??L??P},f.setLevel=function(u,E){return S=r(u),E!==!1&&C(S),w.call(f)},f.setDefaultLevel=function(u){L=r(u),c()||f.setLevel(u,!1)},f.resetLevel=function(){S=null,i(),w.call(f)},f.enableAll=function(u){f.setLevel(f.levels.TRACE,u)},f.disableAll=function(u){f.setLevel(f.levels.SILENT,u)},f.rebuild=function(){if(s!==f&&(P=r(s.getLevel())),w.call(f),s===f)for(var u in l)l[u].rebuild()},P=r(s?s.getLevel():"WARN");var h=c();h!=null&&(S=r(h)),w.call(f)}s=new m,s.getLogger=function(x){if(typeof x!="symbol"&&typeof x!="string"||x==="")throw new TypeError("You must supply a name when creating a logger.");var f=l[x];return f||(f=l[x]=new m(x,s.methodFactory)),f};var T=typeof window!==e?window.log:void 0;return s.noConflict=function(){return typeof window!==e&&window.log===s&&(window.log=T),s},s.getLoggers=function(){return l},s.default=s,s})});var V=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=fe(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=fe(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function fe(a,e){return a<=9?e:a>=10&&a<=59?parseFloat(e):a>=60&&a<=99?parseInt(e):a>=100&&a<=109?e:a>=110&&a<=149?parseFloat(e):a>=160&&a<=179?parseInt(e):a>=210&&a<=239?parseFloat(e):a>=270&&a<=289?parseInt(e):a>=290&&a<=299?Ne(e):a>=300&&a<=369?e:a>=370&&a<=389?parseInt(e):a>=390&&a<=399?e:a>=400&&a<=409?parseInt(e):a>=410&&a<=419?e:a>=420&&a<=429?parseInt(e):a>=430&&a<=439?e:a>=440&&a<=459?parseInt(e):a>=460&&a<=469?parseFloat(e):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?e:a>=1010&&a<=1059?parseFloat(e):a>=1060&&a<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:e}),e)}function Ne(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}var ie=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function Ce(a){return ie[a]}function d(a){let e={};a.rewind();let t=a.next(),n=t.code;if(e.x=t.value,n+=10,t=a.next(),t.code!=n)throw new Error("Expected code for point value to be "+n+" but got "+t.code+".");return e.y=t.value,n+=10,t=a.next(),t.code!=n?(a.rewind(),e):(e.z=t.value,e)}function k(a,e,t){switch(e.code){case 0:a.type=e.value;break;case 5:a.handle=e.value;break;case 6:a.lineType=e.value;break;case 8:a.layer=e.value;break;case 48:a.lineTypeScale=e.value;break;case 60:a.visible=e.value===0;break;case 62:a.colorIndex=e.value,a.color=Ce(Math.abs(e.value));break;case 67:a.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:a.ownerHandle=e.value;break;case 347:a.materialObjectHandle=e.value;break;case 370:a.lineweight=e.value;break;case 420:a.color=e.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(e.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=e.value;break;default:return!1}return!0}var z=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:n.vertices=Oe(e,t),t=e.lastReadGroup;break;default:k(n,t,e);break}t=e.next()}return n}};function Oe(a,e){var t=[],n=!1,l=!1,s=4;for(let o=0;o<=s;o++){for(var b={};!a.isEOF()&&!(e.code===0||l);){switch(e.code){case 10:case 11:case 12:case 13:if(n){l=!0;continue}b.x=e.value,n=!0;break;case 20:case 21:case 22:case 23:b.y=e.value;break;case 30:case 31:case 32:case 33:b.z=e.value;break;default:return t}e=a.next()}t.push(b),n=!1,l=!1}return a.rewind(),t}var B=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=d(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:n.endAngle=Math.PI/180*t.value,n.angleLength=n.endAngle-n.startAngle;break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var U=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var n={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:n.text=t.value;break;case 2:n.tag=t.value;break;case 3:n.prompt=t.value;break;case 7:n.textStyle=t.value;break;case 10:n.startPoint=d(e);break;case 11:n.endPoint=d(e);break;case 39:n.thickness=t.value;break;case 40:n.textHeight=t.value;break;case 41:n.scale=t.value;break;case 50:n.rotation=t.value;break;case 51:n.obliqueAngle=t.value;break;case 70:n.invisible=!!(t.value&1),n.constant=!!(t.value&2),n.verificationRequired=!!(t.value&4),n.preset=!!(t.value&8);break;case 71:n.backwards=!!(t.value&2),n.mirrored=!!(t.value&4);break;case 72:n.horizontalJustification=t.value;break;case 73:n.fieldLength=t.value;break;case 74:n.verticalJustification=t.value;break;case 100:break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var j=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=d(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:let l=Math.PI/180*t.value;l<n.startAngle?n.angleLength=l+2*Math.PI-n.startAngle:n.angleLength=l-n.startAngle,n.endAngle=l;break;default:k(n,t,e);break}t=e.next()}return n}};var W=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.block=t.value;break;case 10:n.anchorPoint=d(e);break;case 11:n.middleOfText=d(e);break;case 12:n.insertionPoint=d(e);break;case 13:n.linearOrAngularPoint1=d(e);break;case 14:n.linearOrAngularPoint2=d(e);break;case 15:n.diameterOrRadiusPoint=d(e);break;case 16:n.arcPoint=d(e);break;case 70:n.dimensionType=t.value;break;case 71:n.attachmentPoint=t.value;break;case 42:n.actualMeasurement=t.value;break;case 1:n.text=t.value;break;case 50:n.angle=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var G=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=d(e);break;case 11:n.majorAxisEndPoint=d(e);break;case 40:n.axisRatio=t.value;break;case 41:n.startAngle=t.value;break;case 42:n.endAngle=t.value;break;case 2:n.name=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var K=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.name=t.value;break;case 41:n.xScale=t.value;break;case 42:n.yScale=t.value;break;case 43:n.zScale=t.value;break;case 10:n.position=d(e);break;case 50:n.rotation=t.value;break;case 70:n.columnCount=t.value;break;case 71:n.rowCount=t.value;break;case 44:n.columnSpacing=t.value;break;case 45:n.rowSpacing=t.value;break;case 210:n.extrusionDirection=d(e);break;default:k(n,t,e);break}t=e.next()}return n}};var Z=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.vertices.unshift(d(e));break;case 11:n.vertices.push(d(e));break;case 210:n.extrusionDirection=d(e);break;case 100:break;default:k(n,t,e);break}t=e.next()}return n}};var q=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let n={type:t.value,vertices:[]},l=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:n.elevation=t.value;break;case 39:n.depth=t.value;break;case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:l=t.value;break;case 10:n.vertices=Fe(l,e);break;case 43:t.value!==0&&(n.width=t.value);break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};function Fe(a,e){if(!a||a<=0)throw Error("n must be greater than 0 verticies");let t=[],n=!1,l=!1,s=e.lastReadGroup;for(let b=0;b<a;b++){let o={};for(;!e.isEOF()&&!(s.code===0||l);){switch(s.code){case 10:if(n){l=!0;continue}o.x=s.value,n=!0;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:o.startWidth=s.value;break;case 41:o.endWidth=s.value;break;case 42:s.value!=0&&(o.bulge=s.value);break;default:return e.rewind(),n&&t.push(o),e.rewind(),t}s=e.next()}t.push(o),n=!1,l=!1}return e.rewind(),t}var J=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:n.text?n.text+=t.value:n.text=t.value;break;case 1:n.text?n.text+=t.value:n.text=t.value;break;case 10:n.position=d(e);break;case 11:n.directionVector=d(e);break;case 40:n.height=t.value;break;case 41:n.width=t.value;break;case 50:n.rotation=t.value;break;case 71:n.attachmentPoint=t.value;break;case 72:n.drawingDirection=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var Q=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let l={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:l.position=d(e);break;case 39:l.thickness=t.value;break;case 210:l.extrusionDirection=d(e);break;case 100:break;default:k(l,t,e);break}t=e.next()}return l}};var $=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.x=t.value;break;case 20:n.y=t.value;break;case 30:n.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(n.bulge=t.value);break;case 70:n.curveFittingVertex=(t.value&1)!==0,n.curveFitTangent=(t.value&2)!==0,n.splineVertex=(t.value&8)!==0,n.splineControlPoint=(t.value&16)!==0,n.threeDPolylineVertex=(t.value&32)!==0,n.threeDPolylineMesh=(t.value&64)!==0,n.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:n.faceA=t.value;break;case 72:n.faceB=t.value;break;case 73:n.faceC=t.value;break;case 74:n.faceD=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var ee=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:n.thickness=t.value;break;case 40:break;case 41:break;case 70:n.shape=(t.value&1)!==0,n.includesCurveFitVertices=(t.value&2)!==0,n.includesSplineFitVertices=(t.value&4)!==0,n.is3dPolyline=(t.value&8)!==0,n.is3dPolygonMesh=(t.value&16)!==0,n.is3dPolygonMeshClosed=(t.value&32)!==0,n.isPolyfaceMesh=(t.value&64)!==0,n.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:n.extrusionDirection=d(e);break;default:k(n,t,e);break}t=e.next()}return n.vertices=De(e,t),n}};function De(a,e){let t=new $,n=[];for(;!a.isEOF();)if(e.code===0){if(e.value==="VERTEX")n.push(t.parseEntity(a,e)),e=a.lastReadGroup;else if(e.value==="SEQEND"){Me(a,e);break}}return n}function Me(a,e){let t={type:e.value};for(e=a.next();!a.isEOF()&&e.code!=0;)k(t,e,a),e=a.next();return t}var te=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let n={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.points[0]=d(e);break;case 11:n.points[1]=d(e);break;case 12:n.points[2]=d(e);break;case 13:n.points[3]=d(e);break;case 210:n.extrusionDirection=d(e);break;default:k(n,t,e);break}t=e.next()}return n}};var ae=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.controlPoints||(n.controlPoints=[]),n.controlPoints.push(d(e));break;case 11:n.fitPoints||(n.fitPoints=[]),n.fitPoints.push(d(e));break;case 12:n.startTangent=d(e);break;case 13:n.endTangent=d(e);break;case 40:n.knotValues||(n.knotValues=[]),n.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(n.closed=!0),(t.value&2)!=0&&(n.periodic=!0),(t.value&4)!=0&&(n.rational=!0),(t.value&8)!=0&&(n.planar=!0),(t.value&16)!=0&&(n.planar=!0,n.linear=!0);break;case 71:n.degreeOfSplineCurve=t.value;break;case 72:n.numberOfKnots=t.value;break;case 73:n.numberOfControlPoints=t.value;break;case 74:n.numberOfFitPoints=t.value;break;case 210:n.normalVector=d(e);break;default:k(n,t,e);break}t=e.next()}return n}};var ne=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.startPoint=d(e);break;case 11:n.endPoint=d(e);break;case 40:n.textHeight=t.value;break;case 41:n.xScale=t.value;break;case 50:n.rotation=t.value;break;case 1:n.text=t.value;break;case 72:n.halign=t.value;break;case 73:n.valign=t.value;break;default:k(n,t,e);break}t=e.next()}return n}};var v=Ae(de());v.default.setLevel("error");function _e(a){a.registerEntityHandler(z),a.registerEntityHandler(B),a.registerEntityHandler(U),a.registerEntityHandler(j),a.registerEntityHandler(W),a.registerEntityHandler(G),a.registerEntityHandler(K),a.registerEntityHandler(Z),a.registerEntityHandler(q),a.registerEntityHandler(J),a.registerEntityHandler(Q),a.registerEntityHandler(ee),a.registerEntityHandler(te),a.registerEntityHandler(ae),a.registerEntityHandler(ne)}var H=class{constructor(){this._entityHandlers={},_e(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type \`"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",n=this;return new Promise((l,s)=>{e.on("data",b=>{t+=b}),e.on("end",()=>{try{l(n._parse(t))}catch(b){s(b)}}),e.on("error",b=>{s(b)})})}_parse(e){let t={},n=0,l=e.split(/\\r\\n|\\r|\\n/g),s=new V(l);if(!s.hasNext())throw Error("Empty file");let b=this,o;function g(){for(o=s.next();!s.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=s.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",he(o)),o=s.next();continue}o.value==="HEADER"?(v.default.debug("> HEADER"),t.header=w(),v.default.debug("<")):o.value==="BLOCKS"?(v.default.debug("> BLOCKS"),t.blocks=O(),v.default.debug("<")):o.value==="ENTITIES"?(v.default.debug("> ENTITIES"),t.entities=S(!1),v.default.debug("<")):o.value==="TABLES"?(v.default.debug("> TABLES"),t.tables=m(),v.default.debug("<")):o.value==="EOF"?v.default.debug("EOF"):v.default.warn("Skipping section '%s'",o.value)}else o=s.next()}function w(){let c=null,i=null,r={};for(o=s.next();;){if(M(o,0,"ENDSEC")){c&&(r[c]=i);break}else o.code===9?(c&&(r[c]=i),c=o.value):o.code===10?i={x:o.value}:o.code===20?i.y=o.value:o.code===30?i.z=o.value:i=o.value;o=s.next()}return o=s.next(),r}function O(){let c={};for(o=s.next();o.value!=="EOF"&&!M(o,0,"ENDSEC");)if(M(o,0,"BLOCK")){v.default.debug("block {");let i=I();v.default.debug("}"),C(i),i.name?c[i.name]=i:v.default.error('block with handle "'+i.handle+'" is missing a name.')}else X(o),o=s.next();return c}function I(){let c={};for(o=s.next();o.value!=="EOF";){switch(o.code){case 1:c.xrefPath=o.value,o=s.next();break;case 2:c.name=o.value,o=s.next();break;case 3:c.name2=o.value,o=s.next();break;case 5:c.handle=o.value,o=s.next();break;case 8:c.layer=o.value,o=s.next();break;case 10:c.position=y(o),o=s.next();break;case 67:c.paperSpace=!!(o.value&&o.value==1),o=s.next();break;case 70:o.value!=0&&(c.type=o.value),o=s.next();break;case 100:o=s.next();break;case 330:c.ownerHandle=o.value,o=s.next();break;case 0:if(o.value=="ENDBLK")break;c.entities=S(!0);break;default:X(o),o=s.next()}if(M(o,0,"ENDBLK")){o=s.next();break}}return c}function m(){let c={};for(o=s.next();o.value!=="EOF"&&!M(o,0,"ENDSEC");)M(o,0,"TABLE")?(o=s.next(),L[o.value]?(v.default.debug(o.value+" Table {"),c[L[o.value].tableName]=p(o),v.default.debug("}")):v.default.debug("Unhandled Table "+o.value)):o=s.next();return o=s.next(),c}let T="ENDTAB";function p(c){let i=L[c.value],r={},h=0;for(o=s.next();!M(o,0,T);)switch(o.code){case 5:r.handle=o.value,o=s.next();break;case 330:r.ownerHandle=o.value,o=s.next();break;case 100:o.value==="AcDbSymbolTable"||X(o),o=s.next();break;case 70:h=o.value,o=s.next();break;case 0:o.value===i.dxfSymbolName?r[i.tableRecordsProperty]=i.parseTableRecords():(X(o),o=s.next());break;default:X(o),o=s.next()}let u=r[i.tableRecordsProperty];if(u){let E=(()=>{if(u.constructor===Array)return u.length;if(typeof u=="object")return Object.keys(u).length})();h!==E&&v.default.warn("Parsed "+E+" "+i.dxfSymbolName+"'s but expected "+h)}return o=s.next(),r}function x(){let c=[],i={};for(v.default.debug("ViewPort {"),o=s.next();!M(o,0,T);)switch(o.code){case 2:i.name=o.value,o=s.next();break;case 10:i.lowerLeftCorner=y(o),o=s.next();break;case 11:i.upperRightCorner=y(o),o=s.next();break;case 12:i.center=y(o),o=s.next();break;case 13:i.snapBasePoint=y(o),o=s.next();break;case 14:i.snapSpacing=y(o),o=s.next();break;case 15:i.gridSpacing=y(o),o=s.next();break;case 16:i.viewDirectionFromTarget=y(o),o=s.next();break;case 17:i.viewTarget=y(o),o=s.next();break;case 42:i.lensLength=o.value,o=s.next();break;case 43:i.frontClippingPlane=o.value,o=s.next();break;case 44:i.backClippingPlane=o.value,o=s.next();break;case 45:i.viewHeight=o.value,o=s.next();break;case 50:i.snapRotationAngle=o.value,o=s.next();break;case 51:i.viewTwistAngle=o.value,o=s.next();break;case 79:i.orthographicType=o.value,o=s.next();break;case 110:i.ucsOrigin=y(o),o=s.next();break;case 111:i.ucsXAxis=y(o),o=s.next();break;case 112:i.ucsYAxis=y(o),o=s.next();break;case 110:i.ucsOrigin=y(o),o=s.next();break;case 281:i.renderMode=o.value,o=s.next();break;case 281:i.defaultLightingType=o.value,o=s.next();break;case 292:i.defaultLightingOn=o.value,o=s.next();break;case 330:i.ownerHandle=o.value,o=s.next();break;case 63:case 421:case 431:i.ambientColor=o.value,o=s.next();break;case 0:o.value==="VPORT"&&(v.default.debug("}"),c.push(i),v.default.debug("ViewPort {"),i={},o=s.next());break;default:X(o),o=s.next();break}return v.default.debug("}"),c.push(i),c}function f(){let c={},i={},r=0,h;for(v.default.debug("LType {"),o=s.next();!M(o,0,"ENDTAB");)switch(o.code){case 2:i.name=o.value,h=o.value,o=s.next();break;case 3:i.description=o.value,o=s.next();break;case 73:r=o.value,r>0&&(i.pattern=[]),o=s.next();break;case 40:i.patternLength=o.value,o=s.next();break;case 49:i.pattern.push(o.value),o=s.next();break;case 0:v.default.debug("}"),r>0&&r!==i.pattern.length&&v.default.warn("lengths do not match on LTYPE pattern"),c[h]=i,i={},v.default.debug("LType {"),o=s.next();break;default:o=s.next()}return v.default.debug("}"),c[h]=i,c}function P(){let c={},i={},r;for(v.default.debug("Layer {"),o=s.next();!M(o,0,"ENDTAB");)switch(o.code){case 2:i.name=o.value,r=o.value,o=s.next();break;case 62:i.visible=o.value>=0,i.colorIndex=Math.abs(o.value),i.color=Re(i.colorIndex),o=s.next();break;case 70:i.frozen=(o.value&1)!=0||(o.value&2)!=0,o=s.next();break;case 0:o.value==="LAYER"&&(v.default.debug("}"),c[r]=i,v.default.debug("Layer {"),i={},r=void 0,o=s.next());break;default:X(o),o=s.next();break}return v.default.debug("}"),c[r]=i,c}let L={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:x},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:f},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:P}};function S(c){let i=[],r=c?"ENDBLK":"ENDSEC";for(c||(o=s.next());;)if(o.code===0){if(o.value===r)break;let h=b._entityHandlers[o.value];if(h!=null){v.default.debug(o.value+" {");let u=h.parseEntity(s,o);o=s.lastReadGroup,v.default.debug("}"),C(u),i.push(u)}else{v.default.warn("Unhandled entity "+o.value),o=s.next();continue}}else o=s.next();return r=="ENDSEC"&&(o=s.next()),i}function y(c){let i={},r=c.code;if(i.x=c.value,r+=10,c=s.next(),c.code!=r)throw new Error("Expected code for point value to be "+r+" but got "+c.code+".");return i.y=c.value,r+=10,c=s.next(),c.code!=r?(s.rewind(),i):(i.z=c.value,i)}function C(c){if(!c)throw new TypeError("entity cannot be undefined or null");c.handle||(c.handle=n++)}return g(),t}};function M(a,e,t){return a.code===e&&a.value===t}function X(a){v.default.debug("unhandled group "+he(a))}function he(a){return a.code+":"+a.value}function Re(a){return ie[a]}var be=H;var Xe=[["racks",/rack|shelf|shelv|pallet|stowage|\u8D27\u67B6|\u8D27\u4F4D|\u6258\u76D8/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|\u901A\u9053|\u8D70\u9053|\u8F93\u9001/],["zones",/zone|area|region|\u533A|\u533A\u57DF|\u5E93\u533A/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|\u5C0F\u8F66|\u53C9\u8F66|\u7A7F\u68AD|\u5806\u579B|\u63D0\u5347|\u8F6C\u53F0/]];function ve(a){let t=(String(a&&a.layer||"")+" "+String(a&&a.block||"")).toLowerCase();for(let n of Xe)if(n[1].test(t))return n[0];return null}function _(a){if(a===null||typeof a!="object"||typeof a.x!="number")return null;let e={x:a.x,y:typeof a.y=="number"?a.y:0};return typeof a.z=="number"&&(e.z=a.z),e}function oe(a){return(Array.isArray(a)?a:[]).map(_).filter(e=>e!==null)}function xe(a){let e={type:a.type,layer:a.layer||"0"};switch(a.handle!==void 0&&(e.handle=String(a.handle)),a.type){case"LINE":e.vertices=oe(a.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=oe(a.vertices),e.closed=a.shape===!0,typeof a.width=="number"&&(e.width=a.width);break;case"ARC":e.center=_(a.center),e.radius=a.radius,e.startAngle=a.startAngle,e.endAngle=a.endAngle;break;case"CIRCLE":e.center=_(a.center),e.radius=a.radius;break;case"ELLIPSE":e.center=_(a.center),e.majorAxisEndPoint=_(a.majorAxisEndPoint),e.axisRatio=a.axisRatio,e.startAngle=a.startAngle,e.endAngle=a.endAngle;break;case"TEXT":e.text=le(typeof a.text=="string"?a.text:""),e.position=_(a.startPoint),typeof a.textHeight=="number"&&(e.height=a.textHeight),typeof a.rotation=="number"&&(e.rotation=a.rotation);break;case"MTEXT":e.text=le(typeof a.text=="string"?a.text:""),e.position=_(a.position),typeof a.height=="number"&&(e.height=a.height);break;case"INSERT":e.block=typeof a.name=="string"?a.name:null,e.position=_(a.position),typeof a.rotation=="number"&&(e.rotation=a.rotation),typeof a.xScale=="number"&&a.xScale!==1&&(e.xScale=a.xScale),typeof a.yScale=="number"&&a.yScale!==1&&(e.yScale=a.yScale);break;case"POINT":e.position=_(a.position);break;case"SOLID":e.points=oe(a.points);break;case"SPLINE":e.controlPoints=oe(a.controlPoints),e.fitPoints=oe(a.fitPoints);break;default:break}return e}function Ye(a){let e=a&&a.tables&&a.tables.layer&&a.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function He(a){let e=a&&a.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:_(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}var Ve={racks:"\\u8D27\\u67B6",aisles:"\\u901A\\u9053",zones:"\\u533A\\u57DF",agvs:"AGV"},ze=new Set(["TEXT","MTEXT","DIMENSION","HATCH","ATTDEF","ATTRIB","LEADER","MLINE"]),Be=/dim|\u6807\u6CE8|note|text|hatch|\u8FB9\u6846|\u56FE\u6846|frame|border|title/i;function le(a){return typeof a!="string"||a===""?"":a.replace(/\\\\[A-Za-z][^;\\\\]*;/g,"").replace(/\\\\[A-Za-z]/g,"").replace(/[{}]/g,"").replace(/\\s+/g," ").trim()}var Ue={tolerance:1,maxPerDevice:200};function me(a){let e=a.handle!=null?String(a.handle):null;switch(a.type){case"LINE":{let l=a.vertices||[];if(l.length>=2)return{type:"line",coords:[l[0].x,l[0].y,l[1].x,l[1].y],handle:e};break}case"LWPOLYLINE":case"POLYLINE":{let l=[];for(let s of a.vertices||[])l.push(s.x,s.y);if(l.length>=4)return{type:"polyline",coords:l,closed:a.closed===!0,handle:e};break}case"ARC":return{type:"arc",coords:[a.center.x,a.center.y,a.radius||0,a.startAngle||0,a.endAngle||0],handle:e};case"CIRCLE":return{type:"circle",coords:[a.center.x,a.center.y,a.radius||0],handle:e};case"TEXT":case"MTEXT":return{type:"text",coords:[a.position?a.position.x:0,a.position?a.position.y:0],text:le(a.text||""),handle:e};case"INSERT":return{type:"insert",coords:[a.position?a.position.x:0,a.position?a.position.y:0],blockName:a.block||null,rotation:a.rotation||0,handle:e};case"POINT":return{type:"point",coords:[a.position?a.position.x:0,a.position?a.position.y:0],handle:e};default:break}let t=[];for(let l of a.vertices||[])t.push(l.x,l.y);if(t.length>=4)return{type:"polyline",coords:t,closed:a.closed===!0,handle:e};let n=a.position||a.center||a.vertices&&a.vertices[0]||{x:0,y:0};return{type:"point",coords:[n.x||0,n.y||0],handle:e}}function ke(a){let e=1/0,t=1/0,n=-1/0,l=-1/0;for(let s of a){let b=s.coords||[];if(s.type==="arc"||s.type==="circle"){let o=b[0],g=b[1],w=b[2]||0;e=Math.min(e,o-w),n=Math.max(n,o+w),t=Math.min(t,g-w),l=Math.max(l,g+w);continue}for(let o=0;o+1<b.length;o+=2)e=Math.min(e,b[o]),n=Math.max(n,b[o]),t=Math.min(t,b[o+1]),l=Math.max(l,b[o+1])}return e===1/0?null:{minX:e,minY:t,maxX:n,maxY:l}}function ye(a,e,t,n,l,s,b,o){let g=ke(n)||{minX:0,minY:0,maxX:0,maxY:0},w=l?l.x:(g.minX+g.maxX)/2,O=l?l.y:(g.minY+g.maxY)/2,I=null,m=1/0,T=Math.max(g.maxX-g.minX,g.maxY-g.minY,1)+5;for(let x of o){let f=x&&x.position;if(!f||!x.text)continue;let P=le(x.text);if(P==="")continue;let L=Math.max(g.minX-f.x,0,f.x-g.maxX),S=Math.max(g.minY-f.y,0,f.y-g.maxY),y=L*L+S*S;y<m&&y<=T*T&&(m=y,I=P)}let p=ve({layer:e,block:t});return{device_id:a,id:a,type:p&&Ve[p]||e||"0",layer:e||"0",blockName:t||null,name:I?I.slice(0,60):null,bounding_box:{min:[g.minX,g.minY,0],max:[g.maxX,g.maxY,0]},center:[w,O,0],rotation:s||0,scale:b||{x:1,y:1},entityCount:n.length,handles:n.map(x=>x.handle).filter(x=>x!=null),geometry_group:n}}function je(a,e,t){let n=t||Ue,l=a.filter(m=>m.type==="TEXT"||m.type==="MTEXT"),s=e&&e.blocks||{},b=[],o=0,g=()=>"device_"+ ++o,w=[],O=[];for(let m of a)ze.has(m.type)||Be.test(String(m.layer||""))||(m.type==="INSERT"?w.push(m):O.push(m));for(let m of w){let T=s[m.block],p=(T&&T.entities||[]).map(xe).map(me).filter(Boolean);p.length===0&&(p=[{type:"point",coords:[0,0],handle:m.handle!=null?String(m.handle):null}]),b.push(ye(g(),m.layer,m.block||null,p,m.position||{x:0,y:0},m.rotation||0,{x:m.xScale||1,y:m.yScale||1},l))}let I=[];for(let m of O){let T=me(m);if(!T)continue;let p=ke([T]);p&&I.push({entry:T,layer:m.layer||"0",minX:p.minX,minY:p.minY,maxX:p.maxX,maxY:p.maxY})}if(I.length>0){let m=1/0,T=1/0,p=-1/0,x=-1/0;for(let r of I)m=Math.min(m,r.minX),T=Math.min(T,r.minY),p=Math.max(p,r.maxX),x=Math.max(x,r.maxY);let f=Math.max(p-m,x-T,1),P=(f>5e3?10:f*.005)*(n.tolerance||1),L=I.map((r,h)=>h),S=r=>{for(;L[r]!==r;)L[r]=L[L[r]],r=L[r];return r},y=(r,h)=>{let u=S(r),E=S(h);u!==E&&(L[E]=u)},C=Math.max(P*5,f/100),c=new Map;I.forEach((r,h)=>{let u=Math.floor((r.minX-P)/C),E=Math.floor((r.maxX+P)/C),A=Math.floor((r.minY-P)/C),F=Math.floor((r.maxY+P)/C);for(let R=u;R<=E;R++)for(let D=A;D<=F;D++){let Y=R+","+D;for(let ce of c.get(Y)||[]){let se=I[ce];r.minX-P<=se.maxX&&se.minX-P<=r.maxX&&r.minY-P<=se.maxY&&se.minY-P<=r.maxY&&y(h,ce)}c.has(Y)||c.set(Y,[]),c.get(Y).push(h)}});let i=new Map;I.forEach((r,h)=>{let u=S(h);i.has(u)||i.set(u,[]),i.get(u).push(r)});for(let r of i.values()){let h=n.maxPerDevice||200,u=[r],E=[];for(;u.length>0;){let A=u.pop();A.length<=h?E.push(A):(u.push(A.slice(0,Math.floor(A.length/2))),u.push(A.slice(Math.floor(A.length/2))))}for(let A of E){let F={};for(let D of A)F[D.layer]=(F[D.layer]||0)+1;let R=Object.keys(F).sort((D,Y)=>F[Y]-F[D])[0]||"0";b.push(ye(g(),R,null,A.map(D=>D.entry),null,0,{x:1,y:1},l))}}}return b}function We(a,e,t,n){let s=[],b=[],o=[],g=[],w=[],O=!1,I={racks:s,aisles:b,zones:o,agvs:g},m={racks:0,aisles:0,zones:0,agvs:0},T=0;for(let r of a.entities||[]){if(w.length>=5e4){O=!0;break}let h=xe(r);w.push(h);let u=ve(h);if(u===null){h.type!=="TEXT"&&h.type!=="MTEXT"&&(T+=1);continue}m[u]+=1,I[u].push(Object.assign({id:u.slice(0,-1)+"-"+m[u]},h))}let p={},x={},f=1/0,P=1/0,L=-1/0,S=-1/0;for(let r of w){p[r.layer]=(p[r.layer]||0)+1,x[r.type]=(x[r.type]||0)+1;let h=u=>{u&&(f=Math.min(f,u.x),P=Math.min(P,u.y),L=Math.max(L,u.x),S=Math.max(S,u.y))};h(r.position),h(r.center);for(let u of r.vertices||[])h(u);for(let u of(r.controlPoints||[]).concat(r.fitPoints||[],r.points||[]))h(u)}let y=f<1/0?{width:L-f,height:S-P}:null,C=Ye(a).map(r=>Object.assign({},r,{count:p[r.name]||0}));for(let r of Object.keys(p))C.some(h=>h.name===r)||C.push({name:r,color:null,colorIndex:null,visible:!0,frozen:!1,count:p[r]});let c=y?Math.max(y.width,y.height):100,i=je(w,a,n);return{racks:s,aisles:b,zones:o,agvs:g,entities:w,devices:i,layers:C,meta:{source:e,format:t,blocks:He(a),entityCount:w.length,unclassified:T,truncated:O,byType:x,span:y}}}function ge(a,e,t){let n;try{n=new be().parseSync(a)}catch(l){throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: "+(l&&l.message?l.message:String(l)))}if(n===null||typeof n!="object"||!Array.isArray(n.entities))throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: \\u89E3\\u6790\\u5668\\u672A\\u8FD4\\u56DE\\u5B9E\\u4F53\\u8868");return We(n,e,t||"dxf")}self.onmessage=a=>{let e=a.data||{};try{self.postMessage({phase:"\\u89E3\\u6790\\u4E2D \\xB7 \\u56FE\\u5143\\u626B\\u63CF"});let t=ge(String(e.content||""),e.name||"drawing.dxf",e.format||"dxf",e.clusterOptions);self.postMessage({done:!0,scene:t})}catch(t){self.postMessage({done:!0,error:String(t&&t.message||t)})}};})();
`],{type:"text/javascript"})),c=new Worker(l)}catch{try{r(ac(e,i,t))}catch(u){a(u)}return}let f=()=>{c.terminate(),URL.revokeObjectURL(l)};c.onmessage=h=>{let u=h.data||{};if(u.phase){o(u.phase);return}f(),u.error?a(new Error(u.error)):r(u.scene)},c.onerror=()=>{f();try{r(ac(e,i,t))}catch(h){a(h)}},c.postMessage({name:i,content:e,format:t,clusterOptions:s})})}async function Op(i,e,t){let n=typeof e=="function"?e:()=>{};if(/\.(dwg|step|stp)$/i.test(i.name)){n("\u4E0A\u4F20\u4E2D \xB7 Host \u8F6C\u6362\u89E3\u6790");let a=await fetch("/api/cad-scene-builder/parse",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i.name,content:await kb(i)})}),o=await a.text(),l=null;try{l=JSON.parse(o)}catch{throw new Error("\u89E3\u6790\u670D\u52A1\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94 (HTTP "+a.status+")\uFF1A"+String(o).slice(0,100)+"\uFF08\u8DEF\u7531\u672A\u751F\u6548\u65F6\u8BF7\u91CD\u542F dsh web\uFF09")}if(!a.ok||!l||!l.scene)throw new Error(l&&l.error||"\u89E3\u6790\u670D\u52A1\u9519\u8BEF (HTTP "+a.status+")");return{scene:l.scene,download:l.download||null}}let s=await i.text();return{scene:await zb(i.name,s,"dxf",n,t),download:null}}var dt={wrap:{display:"flex",gap:12,height:"100%",minHeight:0,padding:12,boxSizing:"border-box"},col:{flex:1,display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0},colLeft:{flex:"0 0 33%",maxWidth:"33%",display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0,overflowY:"auto",paddingRight:2},title:{margin:0,fontSize:14},drop:{border:"2px dashed rgba(148,163,184,0.4)",borderRadius:10,padding:24,textAlign:"center",fontSize:13,opacity:.9,cursor:"pointer"},btn:{padding:"6px 18px",borderRadius:8,border:"none",cursor:"pointer",background:"#2563eb",color:"#fff",fontSize:13},info:{fontSize:12,lineHeight:1.7,padding:"8px 10px",borderRadius:8,background:"rgba(148,163,184,0.08)",border:"1px solid rgba(148,163,184,0.2)"},label:{opacity:.6,marginRight:6},hint:{fontSize:12,opacity:.55},pre:{fontSize:11,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:240,overflow:"auto"},summary:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",fontSize:12,opacity:.9},chip:{display:"inline-flex",alignItems:"center",gap:4,padding:"1px 8px",borderRadius:999,border:"1px solid rgba(148,163,184,0.35)"},dot:i=>({width:8,height:8,borderRadius:4,background:i})},Vb=`
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
.cad-p-edit-input{width:100%;box-sizing:border-box;padding:4px 8px;border-radius:6px;border:1px solid rgba(56,189,248,.35);background:rgba(8,16,34,.6);color:inherit;font-size:11px}
.cad-p-layer[data-sel='true']{background:rgba(56,189,248,.16)}
`;function Hb(){if(typeof document>"u"||document.getElementById("dsh-cad-scene-import-styles"))return;let i=document.createElement("style");i.id="dsh-cad-scene-import-styles",i.textContent=Vb,document.head.appendChild(i)}function Mr(i){return"#"+(i>>>0).toString(16).padStart(6,"0")}var qn={state:{file:null,fileState:null,scene:null,busy:!1,selection:null,hiddenLayers:{},dxfDownload:null,view2d:!1,catalog:null,binding:null,aiBusy:!1,aiError:null},listeners:new Set,set(i){this.state=Object.assign({},this.state,i);for(let e of this.listeners)e()},subscribe(i){return this.listeners.add(i),()=>this.listeners.delete(i)}};function Gb(){return(0,St.useSyncExternalStore)(i=>qn.subscribe(i),()=>qn.state)}var sn=i=>e=>qn.set({[i]:typeof e=="function"?e(qn.state[i]):e}),lc=class extends St.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error("[dsh-cad-scene] render error",e)}render(){return this.state.error?(0,D.jsxs)("div",{style:{padding:24,color:"#f87171",fontSize:13},children:["dsh-cad-scene \u6E32\u67D3\u51FA\u9519\uFF1A",String(this.state.error&&this.state.error.message||this.state.error)]}):this.props.children}};function Hp(i,e){if(!i||e==null)return null;let t=String(e);for(let n of i.devices||[])if((n.handles||[]).some(s=>String(s)===t))return n;return null}function Gp(i){if(!i)return null;let e=new Set;if(i.item&&(e.add(i.item.id),i.item.handle!=null&&e.add(String(i.item.handle))),i.device){e.add(i.device.id);for(let t of i.device.handles||[])e.add(String(t))}return e.size>0?e:null}function Wp({scene:i,selection:e}){if(!e||!e.item&&!e.device)return(0,D.jsx)("div",{style:dt.info,children:"\u70B9\u51FB\u573A\u666F\u4E2D\u7684\u5B9E\u4F53\u6216\u8BBE\u5907\u6E05\u5355\u6761\u76EE\u67E5\u770B\u8BE6\u60C5"});let t=e.device,n=e.item,s=e.category,r=Array.isArray(i.layers)?i.layers:[],a=n?n.layer:t?t.layer:null,o=r.find(f=>f&&f.name===a)||null,l=(Array.isArray(i.entities)?i.entities:[]).filter(f=>f&&(f.type==="TEXT"||f.type==="MTEXT")&&f.layer===a&&f.text).slice(0,6),c=n&&(n.position||n.center||Array.isArray(n.vertices)&&n.vertices[0])||null;return(0,D.jsxs)("div",{style:dt.info,children:[t?(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u8BBE\u5907"}),(0,D.jsx)("strong",{children:t.name||t.id}),t.name?" \xB7 "+t.id:""]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u7C7B\u578B"}),t.type,t.blockName?" \xB7 \u5757 "+t.blockName:""]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u56FE\u5C42"}),t.layer]}),t.bounding_box?(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u5C3A\u5BF8"}),Math.round((t.bounding_box.max[0]-t.bounding_box.min[0])*10)/10," \xD7 ",Math.round((t.bounding_box.max[1]-t.bounding_box.min[1])*10)/10]}):null,(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u56FE\u5143"}),t.entityCount," \u4E2A"]})]}):null,n?(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u5B9E\u4F53"}),(0,D.jsx)("strong",{children:n.id})," \xB7 ",n.type,s?` \xB7 ${zp[s]}`:""]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u56FE\u5C42"}),n.layer,o?(0,D.jsxs)("span",{style:{marginLeft:8,opacity:.8},children:[o.visible===!1?"\u9690\u85CF":"\u53EF\u89C1",o.frozen?" \xB7 \u51BB\u7ED3":""]}):null]}),n.block?(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u5757\u5F15\u7528"}),n.block]}):null,c?(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u4F4D\u7F6E"}),"(",Math.round(c.x*100)/100,", ",Math.round(c.y*100)/100,")"]}):null,n.text?(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u6587\u672C"}),n.text]}):null]}):null,l.length>0?(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u540C\u5C42\u6587\u672C"}),l.map((f,h)=>(0,D.jsx)("div",{style:{paddingLeft:12},children:f.text},h))]}):null]})}function Wb({scene:i}){let e=i.meta||{};return(0,D.jsxs)("div",{style:dt.summary,children:[(0,D.jsx)("span",{children:e.source||"CAD scene"}),e.format?(0,D.jsx)("span",{style:{opacity:.6},children:e.format}):null,["racks","aisles","zones","agvs"].map(t=>(0,D.jsxs)("span",{style:dt.chip,children:[(0,D.jsx)("span",{style:dt.dot(Mr(Fb[t]))}),zp[t]," ",(i[t]||[]).length||(e.summary&&e.summary.classified?e.summary.classified[t]:0)]},t)),typeof e.entityCount=="number"?(0,D.jsxs)("span",{style:{opacity:.6},children:["\u5B9E\u4F53 ",e.entityCount]}):null,e.truncated?(0,D.jsx)("span",{style:{opacity:.6},children:"(\u5DF2\u622A\u65AD)"}):null]})}function Bp(i){try{let e=localStorage.getItem("dsh-cad-scene:groups"),t=e?JSON.parse(e):{};return t[i]&&typeof t[i]=="object"?t[i]:{}}catch{return{}}}function Xb(i,e){try{let t=localStorage.getItem("dsh-cad-scene:groups"),n=t?JSON.parse(t):{};n[i]=e,localStorage.setItem("dsh-cad-scene:groups",JSON.stringify(n))}catch{}}function Yb({scene:i,hiddenLayers:e,onToggleLayer:t}){let n=String(i.meta&&i.meta.source||"")+"|"+(i.entities||[]).length,[s,r]=(0,St.useState)(()=>Bp(n)),[a,o]=(0,St.useState)(null),[l,c]=(0,St.useState)("");(0,St.useEffect)(()=>{r(Bp(n)),o(null),c("")},[n]);let f=(x,M)=>{let b=Object.assign({},s),S=String(M||"").trim();S===""||S===x?delete b[x]:b[x]=S,r(b),Xb(n,b),o(null),c("")},h={};for(let x of i.entities||[])h[x.layer]=(h[x.layer]||0)+1;let u={};for(let x of i.layers||[])u[x.name]=x;let d=Object.keys(h);for(let x of i.layers||[])h[x.name]===void 0&&d.push(x.name);let p={};for(let x of d){let M=s[x]||x;p[M]||(p[M]={name:M,layers:[],count:0,color:Mr(Ai(i,x))}),p[M].layers.push(x),p[M].count+=h[x]||0}let _=Object.keys(p).map(x=>p[x]).sort((x,M)=>M.count-x.count),m=Object.keys(p).sort(),g=x=>{let M=x.layers.some(b=>!e[b]);for(let b of x.layers)M!==!!e[b]&&t(b)},E=x=>(0,D.jsxs)("div",{className:"cad-p-edit",onClick:M=>M.stopPropagation(),children:[(0,D.jsx)("input",{list:"cad-p-group-options",value:l,placeholder:"\u5408\u5E76\u5230\u7EC4\u540D\uFF08\u7559\u7A7A=\u72EC\u7ACB\uFF09",onChange:M=>c(M.target.value),onKeyDown:M=>{M.key==="Enter"&&f(x,l)},autoFocus:!0}),(0,D.jsx)("datalist",{id:"cad-p-group-options",children:m.map(M=>(0,D.jsx)("option",{value:M},M))}),(0,D.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>f(x,l),children:"\u2713"}),(0,D.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>o(null),children:"\u2715"})]}),T=(x,M)=>{let b=u[x];return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:M?"cad-p-layer cad-p-gm":"cad-p-layer","data-off":e[x]?"true":"false",onClick:()=>t(x),children:[(0,D.jsx)("span",{className:"cad-p-dot",style:{background:Mr(Ai(i,x))}}),(0,D.jsx)("span",{className:"nm",children:x}),b&&b.visible===!1?(0,D.jsx)("span",{className:"cad-p-badge",children:"\u9690\u85CF"}):null,b&&b.frozen?(0,D.jsx)("span",{className:"cad-p-badge",children:"\u51BB\u7ED3"}):null,(0,D.jsx)("span",{className:"cnt",children:h[x]||0}),(0,D.jsx)("button",{type:"button",className:"cad-p-mini",onClick:S=>{S.stopPropagation(),c(s[x]&&s[x]!==x?s[x]:""),o(a===x?null:x)},children:"\u270E"})]}),a===x?E(x):null]},x)};return(0,D.jsxs)("div",{className:"cad-p-card",children:[(0,D.jsxs)("h4",{children:["\u56FE\u4F8B \xB7 \u6309\u89E3\u6790\u5185\u5BB9\u751F\u6210\uFF08",_.length," \u7EC4 \xB7 \u270E \u53EF\u5408\u5E76/\u547D\u540D\uFF09"]}),(0,D.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:300},children:[_.map(x=>{if(x.layers.length===1)return T(x.layers[0],!1);let M=x.layers.every(b=>!!e[b]);return(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:"cad-p-layer","data-off":M?"true":"false",onClick:()=>g(x),children:[(0,D.jsx)("span",{className:"cad-p-dot",style:{background:x.color}}),(0,D.jsx)("span",{className:"nm",children:(0,D.jsx)("b",{children:x.name})}),(0,D.jsx)("span",{className:"cnt",children:x.count})]}),x.layers.map(b=>T(b,!0))]},x.name)}),_.length===0?(0,D.jsx)("div",{style:{opacity:.6},children:"\u65E0\u56FE\u5C42\u5185\u5BB9"}):null]})]})}var oc=["#60a5fa","#f97316","#34d399","#f472b6","#a78bfa","#facc15","#22d3ee","#fb7185","#94a3b8"];function qb({scene:i,selection:e,onSelect:t}){let[n,s]=(0,St.useState)(""),r=i.devices||[],a=n.trim().toLowerCase(),o=a===""?r:r.filter(c=>String(c.name||"").toLowerCase().includes(a)||String(c.id).includes(a)||String(c.layer).toLowerCase().includes(a)),l=o.slice(0,300);return(0,D.jsxs)("div",{className:"cad-p-card",children:[(0,D.jsxs)("h4",{children:["\u8BBE\u5907\u6E05\u5355 \xB7 ",r.length," \u53F0\uFF08\u70B9\u51FB\u9009\u4E2D\u6574\u53F0\uFF09"]}),(0,D.jsx)("input",{className:"cad-p-edit-input",placeholder:"\u641C\u7D22 \u540D\u79F0/\u7F16\u53F7/\u56FE\u5C42\u2026",value:n,onChange:c=>s(c.target.value)}),(0,D.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:260,marginTop:6},children:[l.map(c=>{let f=e&&e.device&&e.device.id===c.id;return(0,D.jsxs)("div",{className:"cad-p-layer","data-sel":f?"true":"false",onClick:()=>t(c),children:[(0,D.jsx)("span",{className:"cad-p-dot",style:{background:Mr(Ai(i,c.layer))}}),(0,D.jsx)("span",{className:"nm",children:c.name||c.id}),(0,D.jsx)("span",{className:"cnt",children:c.entityCount})]},c.id)}),o.length===0?(0,D.jsx)("div",{style:{opacity:.6},children:"\u65E0\u5339\u914D\u8BBE\u5907"}):null,o.length>l.length?(0,D.jsxs)("div",{style:{opacity:.6,padding:"2px 6px"},children:["\u2026\u8FD8\u6709 ",o.length-l.length," \u53F0\uFF08\u7F29\u5C0F\u641C\u7D22\u8303\u56F4\uFF09"]}):null]})]})}function Kb({scene:i,catalog:e,binding:t,busy:n,error:s,onCatalog:r,onIdentify:a,onBindChange:o,onRemove:l,onExport:c,modelFiles:f,showRealModels:h,onModelFiles:u,onToggleReal:d}){let p=e&&e.model_library?Object.keys(e.model_library):[],_=t&&t.group_bindings?t.group_bindings:[],m=t&&t.devices?t.devices:[],g=t&&t.unmatched?t.unmatched:[],E=f?f.size:0,T=S=>S==null?"":S>=.75?"\u9AD8":S>=.5?"\u4E2D":"\u5F85\u786E\u8BA4",x=S=>Array.isArray(S)&&S.some(y=>typeof y=="string"&&y.startsWith("size-check")),M={width:"auto",padding:"3px 10px",display:"inline-flex"},b=(S,y)=>(0,D.jsxs)("select",{className:"cad-p-edit-input",style:{width:110,flex:"none"},value:S||"",onChange:A=>y(A.target.value),children:[(0,D.jsx)("option",{value:"",children:"\uFF08\u5360\u4F4D\uFF09"}),p.map(A=>(0,D.jsx)("option",{value:A,children:A},A))]});return(0,D.jsxs)("div",{className:"cad-p-card",children:[(0,D.jsxs)("h4",{children:["AI \u8BBE\u5907\u8BC6\u522B",t?" \xB7 \u5DF2\u51FA\u7ED3\u679C":""]}),(0,D.jsxs)("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[(0,D.jsxs)("label",{className:"cad-p-mini",style:{...M,cursor:"pointer"},children:["\u8F7D\u5165\u578B\u53F7\u5E93",(0,D.jsx)("input",{type:"file",accept:".json",style:{display:"none"},onChange:S=>{r(S.target.files&&S.target.files[0]),S.target.value=""}})]}),(0,D.jsx)("button",{type:"button",className:"cad-p-mini",style:M,disabled:!i||n,onClick:a,children:n?"\u8BC6\u522B\u4E2D\u2026":"AI \u8BC6\u522B\u8BBE\u5907"}),(0,D.jsxs)("label",{className:"cad-p-mini",style:{...M,cursor:"pointer"},children:["\u8F7D\u5165\u6A21\u578B",(0,D.jsx)("input",{type:"file",accept:".fbx,.glb,.gltf",multiple:!0,style:{display:"none"},onChange:S=>{u(S.target.files),S.target.value=""}})]}),E>0?(0,D.jsx)("button",{type:"button",className:"cad-p-mini",style:M,onClick:d,children:h?"\u663E\u793A\u5360\u4F4D":"\u663E\u793A\u771F\u5B9E\u6A21\u578B"}):null,t?(0,D.jsx)("button",{type:"button",className:"cad-p-mini",style:M,onClick:c,children:"\u2B07 \u5BFC\u51FA\u7ED1\u5B9A\u6E05\u5355"}):null]}),(0,D.jsxs)("div",{style:{fontSize:11,opacity:.7,marginTop:4},children:[e?"\u578B\u53F7\u5E93\u5DF2\u8F7D\u5165\uFF1A"+p.length+" \u6B3E":"\u672A\u8F7D\u5165\u578B\u53F7\u5E93\uFF08device-models.manifest.json\uFF09",E>0?" \xB7 3D \u6A21\u578B\u5DF2\u8F7D\u5165\uFF1A"+E+" \u6B3E":""]}),s?(0,D.jsx)("div",{style:{color:"#f87171",fontSize:12},children:s}):null,t?(0,D.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:300,marginTop:6},children:[_.map((S,y)=>(0,D.jsxs)("div",{className:"cad-p-layer",children:[(0,D.jsxs)("span",{className:"nm",children:[S.key," \u2192 ",S.type]}),b(S.model,A=>o("group",y,A)),(0,D.jsx)("span",{className:"cnt",children:T(S.confidence)}),x(S.evidence)?(0,D.jsx)("span",{className:"cad-p-badge",style:{color:"#fbbf24"},children:"\u7F29\u653E\u53EF\u7591"}):null]},"g"+y)),m.map((S,y)=>(0,D.jsxs)("div",{className:"cad-p-layer",children:[(0,D.jsxs)("span",{className:"nm",children:[S.device_id," \u2192 ",S.type]}),b(S.model,A=>o("device",y,A)),(0,D.jsx)("span",{className:"cnt",children:T(S.confidence)}),x(S.evidence)?(0,D.jsx)("span",{className:"cad-p-badge",style:{color:"#fbbf24"},children:"\u7F29\u653E\u53EF\u7591"}):null,(0,D.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>l(y),children:"\u2715"})]},S.device_id||"d"+y)),g.length>0?(0,D.jsxs)("div",{style:{opacity:.6,padding:"2px 6px"},children:["\u672A\u8BC6\u522B ",g.length," \u9879"]}):null]}):null]})}function Zb({scene:i}){let e=i.meta||{},t={},n=1/0,s=1/0,r=-1/0,a=-1/0,o=h=>{h&&(n=Math.min(n,h.x),s=Math.min(s,h.y),r=Math.max(r,h.x),a=Math.max(a,h.y))};for(let h of i.entities||[]){t[h.type]=(t[h.type]||0)+1,o(h.position),o(h.center);for(let u of h.vertices||[])o(u);for(let u of(h.controlPoints||[]).concat(h.fitPoints||[],h.points||[]))o(u)}let l=n<1/0?{w:r-n,h:a-s}:null,c=Object.entries(t).sort((h,u)=>u[1]-h[1]),f=c.reduce((h,u)=>h+u[1],0)||1;return(0,D.jsxs)("div",{className:"cad-p-card",children:[(0,D.jsx)("h4",{children:"\u56FE\u7EB8\u7EDF\u8BA1"}),(0,D.jsxs)("div",{className:"cad-p-row",children:[(0,D.jsx)("span",{className:"k",children:"\u5B9E\u4F53\u603B\u6570"}),(0,D.jsx)("b",{children:e.entityCount!==void 0?e.entityCount:(i.entities||[]).length})]}),(0,D.jsxs)("div",{className:"cad-p-row",children:[(0,D.jsx)("span",{className:"k",children:"\u8BBE\u5907\u6570"}),(0,D.jsx)("b",{children:(i.devices||[]).length})]}),e.truncated?(0,D.jsx)("div",{className:"cad-p-logline cad-p-warn",children:"\u26A0 \u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD"}):null,(0,D.jsx)("div",{className:"cad-p-bar",children:c.map((h,u)=>(0,D.jsx)("span",{style:{width:h[1]/f*100+"%",background:oc[u%oc.length]}},h[0]))}),(0,D.jsx)("div",{className:"cad-p-types",children:c.map((h,u)=>(0,D.jsxs)("span",{className:"cad-p-type",children:[(0,D.jsx)("i",{style:{color:oc[u%oc.length],fontStyle:"normal"},children:"\u25A0"})," ",h[0],"\xD7",h[1]]},h[0]))}),l?(0,D.jsxs)("div",{className:"cad-p-row",style:{marginTop:6},children:[(0,D.jsx)("span",{className:"k",children:"\u56FE\u5E45\u8303\u56F4"}),(0,D.jsxs)("b",{children:[Math.round(l.w*10)/10," \xD7 ",Math.round(l.h*10)/10]})]}):null,(0,D.jsxs)("div",{className:"cad-p-row",children:[(0,D.jsx)("span",{className:"k",children:"\u5757\u5B9A\u4E49"}),(0,D.jsx)("b",{children:(e.blocks||[]).length})]})]})}var jb=new Set(["INSERT","LINE","LWPOLYLINE","POLYLINE","ARC","CIRCLE","TEXT","MTEXT","POINT"]);function Jb({scene:i}){let[e,t]=(0,St.useState)(!1),n=i.meta||{},s={};for(let c of i.entities||[])jb.has(c.type)||(s[c.type]=(s[c.type]||0)+1);let r=[],a=String(n.format||"dxf");r.push({kind:"info",text:"\u89E3\u6790\u683C\u5F0F: "+a+(a.indexOf("dwg")===0?"\uFF08\u7ECF\u5916\u90E8\u8F6C\u6362\u5668\uFF09":"\uFF08\u6D4F\u89C8\u5668\u5185\u89E3\u6790\uFF09")}),n.truncated&&r.push({kind:"warn",text:"\u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD\uFF0C\u4EC5\u4FDD\u7559\u524D "+(i.entities||[]).length+" \u4E2A"}),n.unclassified>0&&r.push({kind:"warn",text:"\u672A\u5206\u7C7B\u5B9E\u4F53 "+n.unclassified+" \u4E2A\uFF08\u672A\u5339\u914D\u5206\u7C7B\u8BCD\u8868\uFF0C\u5DF2\u6309\u56FE\u5C42\u8272\u7ED8\u5236\uFF09"});let o=Object.entries(s);o.length>0&&r.push({kind:"warn",text:"\u4E24\u4FA7\u89C6\u56FE\u5747\u672A\u7ED8\u5236: "+o.map(c=>c[0]+"\xD7"+c[1]).join("\u3001")}),r.push({kind:"info",text:"\u56FE\u5C42 "+(i.layers||[]).length+" \u4E2A \xB7 \u5757\u5B9A\u4E49 "+(n.blocks||[]).length+" \u4E2A"}),n.source&&r.push({kind:"info",text:n.source});let l=r.filter(c=>c.kind==="warn").length;return(0,D.jsxs)("div",{className:"cad-p-card cad-p-log","data-open":e?"true":"false",children:[(0,D.jsxs)("div",{className:"cad-p-log-toggle",onClick:()=>t(!e),children:[(0,D.jsx)("span",{className:"chev",children:"\u25B6"}),(0,D.jsx)("h4",{style:{margin:0,flex:1},children:"\u89E3\u6790\u65E5\u5FD7"}),(0,D.jsx)("span",{className:"cnt",children:l>0?l+" \u9879\u63D0\u793A":"\u6B63\u5E38"})]}),e?(0,D.jsx)("div",{style:{marginTop:8},children:r.map((c,f)=>(0,D.jsxs)("div",{className:"cad-p-logline"+(c.kind==="warn"?" cad-p-warn":""),children:[(0,D.jsx)("span",{children:c.kind==="warn"?"\u26A0":"\u2139"}),(0,D.jsx)("span",{children:c.text})]},f))}):null]})}function $b(i,e,t){let n=i.type;if(n==="LINE"||n==="LWPOLYLINE"||n==="POLYLINE"){let s=(i.vertices||[]).filter(r=>r&&typeof r.x=="number");return s.length<2?null:{item:i,category:e,color:t,kind:"poly",pts:i.closed&&s.length>2?s.concat([s[0]]):s}}return n==="CIRCLE"&&i.center?{item:i,category:e,color:t,kind:"circle",c:i.center,r:i.radius||1}:n==="ARC"&&i.center?{item:i,category:e,color:t,kind:"arc",c:i.center,r:i.radius||1,a0:i.startAngle||0,a1:i.endAngle!=null?i.endAngle:Math.PI}:i.position?{item:i,category:e,color:t,kind:"mark",p:i.position}:null}function Qb({scene:i,selected:e,onSelect:t,hiddenCats:n,hiddenLayers:s}){let r=(0,St.useRef)(null),a=(0,St.useRef)([]),o=(0,St.useRef)([]),l=(0,St.useRef)({s:1,tx:0,ty:0}),c=(0,St.useRef)(null);return(0,St.useEffect)(()=>{let f=r.current;if(!f)return;let h=document.createElement("canvas");h.style.width="100%",h.style.height="100%",h.style.display="block",h.style.background="#0b1220",h.style.cursor="crosshair",h.style.touchAction="none",f.appendChild(h);let u=h.getContext("2d"),d=n||{},p=s||{},_=[],m=[],g={};for(let U of["racks","aisles","zones","agvs"])for(let V of i[U]||[])V.handle!=null&&(g[V.handle]={item:V,category:U});let E=0;for(let U of i.entities||[]){if(p[U.layer])continue;let V=U.handle!=null?g[U.handle]:null;if(V&&d[V.category])continue;let ee=V?V.item:Object.assign({id:"ent-"+ ++E},U),re=V?V.category:null,oe=Mr(Ai(i,U.layer)),pe=$b(ee,re,oe);pe&&_.push(pe)}let T=0;for(let U of i.entities||[])(U.type==="TEXT"||U.type==="MTEXT")&&!p[U.layer]&&U.text&&(T+=1,m.push({item:Object.assign({id:"text-"+T},U),category:null,p:U.position||{x:0,y:0},text:U.text,color:Mr(Ai(i,U.layer))}));a.current=_,o.current=m;let x=l.current,M=window.devicePixelRatio||1,b=()=>{let U=1/0,V=1/0,ee=-1/0,re=-1/0,oe=Z=>{Z&&(U=Math.min(U,Z.x),V=Math.min(V,Z.y),ee=Math.max(ee,Z.x),re=Math.max(re,Z.y))};for(let Z of _)Z.kind==="poly"?Z.pts.forEach(oe):Z.kind==="circle"||Z.kind==="arc"?(oe({x:Z.c.x-Z.r,y:Z.c.y-Z.r}),oe({x:Z.c.x+Z.r,y:Z.c.y+Z.r})):oe(Z.p);for(let Z of m)oe(Z.p);U===1/0&&(U=-20,V=-20,ee=20,re=20);let pe=h.clientWidth||600,Ne=h.clientHeight||360,ze=36,j=Math.min((pe-ze*2)/Math.max(ee-U,1),(Ne-ze*2)/Math.max(re-V,1));x.s=j>0?j:1,x.tx=pe/2-(U+ee)/2*x.s,x.ty=Ne/2+(V+re)/2*x.s},S=()=>{let U=h.clientWidth||600,V=h.clientHeight||360,ee=x.s,re=ie=>ie*ee+x.tx,oe=ie=>x.ty-ie*ee;u.setTransform(M,0,0,M,0,0),u.clearRect(0,0,U,V);let pe=10;for(;pe*ee<26;)pe*=5;for(;pe*ee>130;)pe/=5;u.lineWidth=1,u.strokeStyle="rgba(148,163,184,0.08)";let Ne=Math.floor((0-x.tx)/ee/pe)*pe,ze=Math.ceil((U-x.tx)/ee/pe)*pe,j=Math.floor((x.ty-V)/ee/pe)*pe,Z=Math.ceil(x.ty/ee/pe)*pe;u.beginPath();for(let ie=Ne;ie<=ze;ie+=pe)u.moveTo(re(ie),0),u.lineTo(re(ie),V);for(let ie=j;ie<=Z;ie+=pe)u.moveTo(0,oe(ie)),u.lineTo(U,oe(ie));u.stroke(),u.strokeStyle="rgba(248,113,113,0.45)",u.beginPath(),u.moveTo(0,oe(0)),u.lineTo(U,oe(0)),u.stroke(),u.strokeStyle="rgba(52,211,153,0.45)",u.beginPath(),u.moveTo(re(0),0),u.lineTo(re(0),V),u.stroke();for(let ie of _){let Ie=e&&ie.item&&(e.has(ie.item.id)||ie.item.handle!=null&&e.has(String(ie.item.handle)));if(u.strokeStyle=Ie?"#facc15":ie.color,u.fillStyle=u.strokeStyle,u.lineWidth=Ie?2.6:1.4,Ie?(u.shadowColor="rgba(250,204,21,0.8)",u.shadowBlur=8):u.shadowBlur=0,ie.kind==="poly")u.beginPath(),ie.pts.forEach((de,Oe)=>{Oe===0?u.moveTo(re(de.x),oe(de.y)):u.lineTo(re(de.x),oe(de.y))}),u.stroke();else if(ie.kind==="circle")u.beginPath(),u.arc(re(ie.c.x),oe(ie.c.y),Math.max(ie.r*ee,.5),0,Math.PI*2),u.stroke();else if(ie.kind==="arc")u.beginPath(),u.arc(re(ie.c.x),oe(ie.c.y),Math.max(ie.r*ee,.5),-ie.a1,-ie.a0,!1),u.stroke();else if(ie.kind==="mark"){let de=re(ie.p.x),Oe=oe(ie.p.y),it=5;u.beginPath(),u.moveTo(de-it,Oe),u.lineTo(de+it,Oe),u.moveTo(de,Oe-it),u.lineTo(de,Oe+it),u.stroke(),u.beginPath(),u.arc(de,Oe,2.2,0,Math.PI*2),u.stroke()}}u.shadowBlur=0,u.font="12px ui-monospace, Consolas, monospace";for(let ie of m)u.fillStyle=e&&e.has(ie.item.id)?"#facc15":ie.color,u.fillText(String(ie.text).slice(0,48),re(ie.p.x),oe(ie.p.y))},y=()=>{let U=h.clientWidth||600,V=h.clientHeight||360;h.width=Math.max(U*M,1),h.height=Math.max(V*M,1),c.current!==i&&(b(),c.current=i),S()},A=new ResizeObserver(y);A.observe(f),y();let C=(U,V,ee,re)=>{let oe=mx(ee.x),pe=my(ee.y),Ne=mx(re.x),ze=my(re.y),j=Ne-oe,Z=ze-pe,ie=j*j+Z*Z,Ie=ie===0?0:Math.max(0,Math.min(1,((U-oe)*j+(V-pe)*Z)/ie));return Math.hypot(U-(oe+Ie*j),V-(pe+Ie*Z))},I=(U,V)=>{let ee=x.s,re=6;for(let oe=m.length-1;oe>=0;oe--){let pe=m[oe];if(Math.abs(mx(pe.p.x)-U)<44&&Math.abs(my(pe.p.y)-V)<9)return{item:pe.item,category:null}}for(let oe=_.length-1;oe>=0;oe--){let pe=_[oe],Ne=!1;if(pe.kind==="poly"){for(let ze=0;ze+1<pe.pts.length;ze++)if(C(U,V,pe.pts[ze],pe.pts[ze+1])<re){Ne=!0;break}}else if(pe.kind==="circle"){let ze=Math.hypot(U-mx(pe.c.x),V-my(pe.c.y));Ne=Math.abs(ze-pe.r*ee)<re||ze<pe.r*ee}else if(pe.kind==="arc"){let ze=U-mx(pe.c.x),j=V-my(pe.c.y),Z=Math.hypot(ze,j),ie=Math.atan2(-j,ze);ie<0&&(ie+=Math.PI*2);let Ie=pe.a0%(Math.PI*2);Ie<0&&(Ie+=Math.PI*2);let de=pe.a1%(Math.PI*2);de<0&&(de+=Math.PI*2);let Oe=de-Ie;Oe<=0&&(Oe+=Math.PI*2);let it=ie-Ie;it<0&&(it+=Math.PI*2),Ne=Math.abs(Z-pe.r*ee)<re&&it<=Oe}else pe.kind==="mark"&&(Ne=Math.hypot(U-mx(pe.p.x),V-my(pe.p.y))<re+4);if(Ne)return{item:pe.item,category:pe.category}}return null},k=null,G=!1,N=U=>{U.preventDefault();let V=h.getBoundingClientRect(),ee=U.clientX-V.left,re=U.clientY-V.top,oe=U.deltaY>0?1/1.12:1.12,pe=Math.max(1e-4,x.s*oe);x.tx=ee-(ee-x.tx)*(pe/x.s),x.ty=re-(re-x.ty)*(pe/x.s),x.s=pe,S()},z=U=>{k={x:U.clientX,y:U.clientY,tx:x.tx,ty:x.ty},G=!1},Q=U=>{if(!k)return;let V=U.clientX-k.x,ee=U.clientY-k.y;(Math.abs(V)>2||Math.abs(ee)>2)&&(G=!0),x.tx=k.tx+V,x.ty=k.ty+ee,S()},J=()=>{k=null},se=U=>{if(G)return;let V=h.getBoundingClientRect();t(I(U.clientX-V.left,U.clientY-V.top))};return h.addEventListener("wheel",N,{passive:!1}),h.addEventListener("mousedown",z),h.addEventListener("mousemove",Q),h.addEventListener("mouseup",J),h.addEventListener("mouseleave",J),h.addEventListener("click",se),()=>{A.disconnect(),h.removeEventListener("wheel",N),h.removeEventListener("mousedown",z),h.removeEventListener("mousemove",Q),h.removeEventListener("mouseup",J),h.removeEventListener("mouseleave",J),h.removeEventListener("click",se),h.parentNode===f&&f.removeChild(h)}},[i,n,s,e]),(0,D.jsx)("div",{ref:r,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}function eS(){let i=Gb(),e=i.fileState,t=i.scene,n=i.busy,s=i.selection,r=i.hiddenLayers,a=i.dxfDownload,o=i.view2d,l=i.catalog,c=i.binding,f=i.aiBusy,h=i.aiError,u=i.clusterTol!=null?i.clusterTol:1,d=i.clusterCap!=null?i.clusterCap:200,p=i.models||new Map,_=i.modelFiles||new Map,m=i.showRealModels!==!1,g=sn("fileState"),E=sn("scene"),T=sn("busy"),x=sn("selection"),M=sn("hiddenLayers"),b=sn("dxfDownload"),S=sn("view2d"),y=sn("catalog"),A=sn("binding"),C=sn("aiBusy"),I=sn("aiError"),k=sn("clusterTol"),G=sn("clusterCap"),N=sn("models"),z=sn("modelFiles"),Q=sn("showRealModels"),J=(0,St.useRef)(null),[se,U]=(0,St.useState)(!1);(0,St.useEffect)(()=>{Hb()},[]);let V=Y=>M(ue=>Object.assign({},ue,{[Y]:!ue[Y]})),ee=Y=>{if(!Y){x(null);return}let ue=Y.device||(Y.item&&Y.item.handle!=null?Hp(t,Y.item.handle):null);x({item:Y.item||null,category:Y.category||null,device:ue})},re=Y=>x({item:null,category:null,device:Y}),oe=Gp(s),pe=async Y=>{let ue=new Map(qn.state.models),ce=new Map(qn.state.modelFiles);for(let Re of Y||[]){let P=Re.name.replace(/\.[^.]+$/,"").toLowerCase();try{let Ee;if(/\.fbx$/i.test(Re.name)){let Ge=await Re.arrayBuffer();Ee=new Jl().parse(Ge,"")}else if(/\.(glb|gltf)$/i.test(Re.name)){let Ge=await Re.arrayBuffer();Ee=await new Promise((R,v)=>new ec().parse(Ge,"",B=>R(B.scene),v))}else continue;ue.set(P,Ee),ce.set(P,Re.name)}catch(Ee){I("\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF1A"+Re.name+" \u2014 "+String(Ee&&Ee.message||Ee))}}N(ue),z(ce)},Ne=async()=>{let Y=qn.state.file;if(Y){T(!0);try{let ue=await Op(Y,ce=>g(Re=>Object.assign({},Re,{phase:ce})),{tolerance:u,maxPerDevice:d});E(ue.scene),b(ue.download||null),g(ce=>Object.assign({},ce,{status:"done"}))}catch(ue){g(ce=>Object.assign({},ce,{status:"error",error:String(ue&&ue.message||ue)}))}finally{T(!1)}}},ze=Y=>{k(Y),qn.state.scene&&Ne()},j=Y=>{G(Y),qn.state.scene&&Ne()},Z=Y=>pe(Y),ie=()=>Q(!m),Ie=async Y=>{if(Y)try{y(JSON.parse(await Y.text())),I(null)}catch(ue){I("\u578B\u53F7\u5E93 JSON \u89E3\u6790\u5931\u8D25\uFF1A"+String(ue&&ue.message||ue))}},de=async()=>{if(!(!t||f)){C(!0),I(null);try{let Y=await fetch("/api/cad-scene-builder/identify",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({digest:Iu(t),catalog:l||{}})}),ue=await Y.text(),ce=null;try{ce=JSON.parse(ue)}catch{throw new Error("\u8BC6\u522B\u670D\u52A1\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94 (HTTP "+Y.status+")")}if(!Y.ok||!ce||!ce.manifest)throw new Error(ce&&ce.error||"\u8BC6\u522B\u670D\u52A1\u9519\u8BEF (HTTP "+Y.status+")");A(ce.manifest)}catch(Y){I(String(Y&&Y.message||Y))}finally{C(!1)}}},Oe=(Y,ue,ce)=>{A(Re=>{if(!Re)return Re;let P=JSON.parse(JSON.stringify(Re)),Ee=Y==="group"?P.group_bindings||[]:P.devices||[];return Ee[ue]?(ce?Ee[ue].model=ce:delete Ee[ue].model,P):Re})},it=Y=>{A(ue=>{if(!ue)return ue;let ce=JSON.parse(JSON.stringify(ue));return ce.devices=(ce.devices||[]).filter((Re,P)=>P!==Y),ce})},Ze=()=>{if(!c)return;let Y={};for(let Ee of c.group_bindings||[])Ee.type&&Ee.model&&!Y[Ee.type]&&(Y[Ee.type]={model:Ee.model});let ue={manifest_version:1,source:t&&t.meta&&t.meta.source||null,generated_by:"dsh-cad-scene:ai-identify",model_library:l&&l.model_library||{},group_bindings:(c.group_bindings||[]).map(Ee=>({key:Ee.key,type:Ee.type,model:Ee.model,confidence:Ee.confidence,evidence:Ee.evidence})),device_types:Y,devices:(c.devices||[]).map(Ee=>({device_id:Ee.device_id,type:Ee.type,model:Ee.model,confidence:Ee.confidence,evidence:Ee.evidence})),unmatched:c.unmatched||[]},ce=new Blob([JSON.stringify(ue,null,2)],{type:"application/json"}),Re=URL.createObjectURL(ce),P=document.createElement("a");P.href=Re,P.download=String(ue.source||"scene").replace(/\.[^.]+$/,"")+".binding.json",document.body.appendChild(P),P.click(),setTimeout(()=>{P.remove(),URL.revokeObjectURL(Re)},2e3)},tt=Y=>{Y&&(qn.set({file:Y}),E(null),x(null),M({}),b(null),g({name:Y.name,size:Y.size,status:"ready",error:null}))},ut=async()=>{let Y=qn.state.file;if(!(!Y||n)){T(!0),g(ue=>Object.assign({},ue,{status:"parsing",error:null}));try{let ue=await Op(Y,ce=>g(Re=>Object.assign({},Re,{phase:ce})),{tolerance:u,maxPerDevice:d});E(ue.scene),b(ue.download||null),g(ce=>Object.assign({},ce,{status:"done"}))}catch(ue){g(ce=>Object.assign({},ce,{status:"error",error:String(ue&&ue.message||ue)}))}finally{T(!1)}}},Je=se?"drag":n?"parsing":e?e.status==="done"?"done":e.status==="error"?"error":"ready":"idle",_t=e?e.status==="ready"?"\u5F85\u89E3\u6790":e.status==="parsing"?e.phase||"\u89E3\u6790\u4E2D\u2026":e.status==="done"?"\u89E3\u6790\u5B8C\u6210":"\u89E3\u6790\u5931\u8D25":"\u5C1A\u672A\u9009\u62E9\u6587\u4EF6";return(0,D.jsxs)("div",{style:dt.wrap,children:[(0,D.jsxs)("div",{style:dt.colLeft,children:[(0,D.jsx)("h3",{style:dt.title,children:"CAD \u6587\u4EF6\u5BFC\u5165\u533A"}),(0,D.jsxs)("div",{className:"cad-im-portal","data-state":Je,onClick:()=>{J.current&&J.current.click()},onDragEnter:Y=>{Y.preventDefault(),U(!0)},onDragOver:Y=>Y.preventDefault(),onDragLeave:Y=>{Y.preventDefault(),U(!1)},onDrop:Y=>{Y.preventDefault(),U(!1),tt(Y.dataTransfer&&Y.dataTransfer.files&&Y.dataTransfer.files[0])},children:[(0,D.jsx)("div",{className:"cad-im-grid"}),(0,D.jsx)("span",{className:"cad-im-corner tl"}),(0,D.jsx)("span",{className:"cad-im-corner tr"}),(0,D.jsx)("span",{className:"cad-im-corner bl"}),(0,D.jsx)("span",{className:"cad-im-corner br"}),(0,D.jsx)("div",{className:"cad-im-scan"}),(0,D.jsx)("span",{className:"cad-im-cross",style:{top:18,left:30,animationDelay:"0.2s"}}),(0,D.jsx)("span",{className:"cad-im-cross",style:{top:26,right:36,animationDelay:"0.9s"}}),(0,D.jsx)("span",{className:"cad-im-cross",style:{bottom:22,left:44,animationDelay:"1.6s"}}),(0,D.jsxs)("div",{className:"cad-im-stage",children:[(0,D.jsxs)("svg",{className:"cad-im-icon",viewBox:"0 0 64 64","aria-hidden":"true",children:[(0,D.jsx)("path",{d:"M14 6h26l10 10v42H14z",fill:"rgba(30,58,138,.55)",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,D.jsx)("path",{d:"M40 6v10h10",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,D.jsx)("circle",{cx:"31",cy:"36",r:"8.5",fill:"none",stroke:"#7dd3fc",strokeWidth:"2"}),(0,D.jsx)("path",{d:"M31 22.5v6M31 43.5v6M17.5 36h6M38.5 36h6",stroke:"#7dd3fc",strokeWidth:"2",strokeLinecap:"round"})]}),e&&e.status==="done"?(0,D.jsxs)("svg",{className:"cad-im-check",viewBox:"0 0 48 48",children:[(0,D.jsx)("circle",{cx:"24",cy:"24",r:"21"}),(0,D.jsx)("path",{d:"M13 25l7.5 7.5L35 16"})]}):null]}),(0,D.jsx)("div",{className:"cad-im-title",children:se?"\u677E\u624B\uFF0C\u5F00\u59CB\u89E3\u6790\u56FE\u7EB8":"\u62D6\u62FD CAD \u56FE\u7EB8\u5230\u6B64\u5904"}),(0,D.jsx)("div",{className:"cad-im-sub",children:se?"\u652F\u6301 .dwg / .dxf / .step":"\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6 \xB7 \u89E3\u6790\u540E\u5B9E\u4F53\u53E0\u52A0\u5230\u53F3\u4FA7 3D \u573A\u666F"}),e?(0,D.jsxs)("div",{className:"cad-im-chip",children:[e.name," \xB7 ",(e.size/1024).toFixed(1)," KB"]}):null,(0,D.jsx)("input",{ref:J,type:"file",accept:".dwg,.dxf,.step,.stp",style:{display:"none"},onChange:Y=>{tt(Y.target.files&&Y.target.files[0]),Y.target.value=""}})]}),e?(0,D.jsxs)("div",{style:dt.info,children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u6587\u4EF6"}),e.name]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u5927\u5C0F"}),(e.size/1024).toFixed(1)," KB"]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:"\u72B6\u6001"}),_t]}),e.error?(0,D.jsx)("div",{style:{color:"#f87171"},children:e.error}):null]}):null,(0,D.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,D.jsx)("button",{type:"button",className:"cad-im-btn","data-busy":n?"true":"false",disabled:!e||n,onClick:ut,children:n?"\u89E3\u6790\u4E2D\u2026":"\u89E3\u6790"}),a?(0,D.jsx)("button",{type:"button",className:"cad-im-btn cad-im-dl",onClick:()=>{let Y=document.createElement("a");Y.href=a.url,Y.download=a.name,document.body.appendChild(Y),Y.click(),setTimeout(()=>Y.remove(),2e3)},children:"\u2B07 \u4E0B\u8F7D DXF"}):null,t?(0,D.jsx)("button",{type:"button",className:"cad-im-btn",onClick:()=>{let Y=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),ue=URL.createObjectURL(Y),ce=document.createElement("a");ce.href=ue,ce.download=String(t.meta&&t.meta.source||"scene").replace(/\.[^.]+$/,"")+".scene.json",document.body.appendChild(ce),ce.click(),setTimeout(()=>{ce.remove(),URL.revokeObjectURL(ue)},2e3)},children:"\u2B07 \u4E0B\u8F7D JSON"}):null,t?(0,D.jsx)("button",{type:"button",className:"cad-im-btn",onClick:()=>{let Y=new Blob([JSON.stringify(Iu(t),null,2)],{type:"application/json"}),ue=URL.createObjectURL(Y),ce=document.createElement("a");ce.href=ue,ce.download=String(t.meta&&t.meta.source||"scene").replace(/\.[^.]+$/,"")+".digest.json",document.body.appendChild(ce),ce.click(),setTimeout(()=>{ce.remove(),URL.revokeObjectURL(ue)},2e3)},children:"\u2B07 digest \u6458\u8981"}):null]}),t?(0,D.jsx)(Yb,{scene:t,hiddenLayers:r,onToggleLayer:V}):null,t?(0,D.jsxs)("div",{className:"cad-p-card",children:[(0,D.jsx)("h4",{children:"\u805A\u7C7B\u7075\u654F\u5EA6"}),(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4},children:[(0,D.jsx)("span",{style:{fontSize:11,opacity:.7},children:"\u95F4\u8DDD\u5BB9\u5DEE \xD7"}),(0,D.jsx)("input",{className:"cad-p-edit-input",style:{flex:1},type:"range",min:"0.1",max:"5",step:"0.1",value:u,onChange:Y=>ze(Number(Y.target.value))}),(0,D.jsx)("span",{className:"cnt",children:u.toFixed(1)})]}),(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,D.jsx)("span",{style:{fontSize:11,opacity:.7},children:"\u5355\u7C07\u4E0A\u9650"}),(0,D.jsx)("input",{className:"cad-p-edit-input",style:{flex:1},type:"range",min:"20",max:"1000",step:"20",value:d,onChange:Y=>j(Number(Y.target.value))}),(0,D.jsx)("span",{className:"cnt",children:d})]})]}):null,t?(0,D.jsx)(qb,{scene:t,selection:s,onSelect:re}):null,(0,D.jsx)(Kb,{scene:t,catalog:l,binding:c,busy:f,error:h,onCatalog:Ie,onIdentify:de,onBindChange:Oe,onRemove:it,onExport:Ze,modelFiles:_,showRealModels:m,onModelFiles:Z,onToggleReal:ie}),t?(0,D.jsx)(Zb,{scene:t}):null,t?(0,D.jsx)(Jb,{scene:t}):null]}),(0,D.jsxs)("div",{style:dt.col,children:[(0,D.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,D.jsx)("h3",{style:Object.assign({},dt.title,{flex:1}),children:o?"CAD \u56FE\u7EB8 \xB7 2D \u4FEF\u89C6":"Three.js 3D \u573A\u666F\u663E\u793A\u533A"}),(0,D.jsxs)("div",{className:"cad-v-toggle",children:[(0,D.jsx)("button",{type:"button",className:"cad-v-btn","data-on":o?"false":"true",onClick:()=>S(!1),children:"3D \u573A\u666F"}),(0,D.jsx)("button",{type:"button",className:"cad-v-btn","data-on":o?"true":"false",onClick:()=>S(!0),children:"CAD \u56FE\u7EB8"})]})]}),(0,D.jsxs)("div",{style:{position:"relative",flex:1,minHeight:0,display:"flex"},children:[o?(0,D.jsx)(Qb,{scene:t||Pu,selected:oe,onSelect:ee,hiddenLayers:r}):(0,D.jsx)(Vp,{scene:t||Pu,selected:oe,onSelect:ee,hiddenLayers:r,models:p,binding:c,showRealModels:m}),t?null:(0,D.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:12,pointerEvents:"none",fontSize:12,opacity:.7},children:o?"\u89E3\u6790\u540E\u5728\u6B64\u67E5\u770B CAD \u56FE\u7EB8\uFF08\u6EDA\u8F6E\u7F29\u653E\u3001\u62D6\u62FD\u5E73\u79FB\uFF0C\u70B9\u51FB\u56FE\u5143\u67E5\u770B\u8BE6\u60C5\uFF09":"\u89E3\u6790\u540E\u5B9E\u4F53\u5C06\u53E0\u52A0\u5230\u573A\u666F\u4E2D\uFF08\u5DE6\u952E\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001\u53F3\u952E\u5E73\u79FB\uFF0C\u70B9\u51FB\u5B9E\u4F53\u67E5\u770B\u8BE6\u60C5\uFF09"})]}),(0,D.jsx)(Wp,{scene:t||Pu,selection:s})]})]})}function tS(i){return(0,D.jsx)(lc,{children:(0,D.jsx)(eS,{...i})})}function kp(i){let e=i&&i.content||[];for(let t of e)if(t&&t.type==="text"&&typeof t.text=="string")return t.text;return""}function nS(i){if(!i||i.kind!=="tool-result"||i.isError)return null;for(let e of i.content||[])if(!(!e||e.type!=="text"||typeof e.text!="string"))try{let t=JSON.parse(e.text);if(t&&Array.isArray(t.racks)&&Array.isArray(t.aisles)&&Array.isArray(t.zones))return t}catch{}return null}function iS(i){let e=i&&i.block,t=(0,St.useMemo)(()=>nS(e),[e]),[n,s]=(0,St.useState)(null);return!e||e.kind!=="tool-result"?(0,D.jsx)("div",{style:dt.info,children:"\u6B63\u5728\u89E3\u6790 CAD \u56FE\u7EB8\u2026"}):e.isError?(0,D.jsxs)("div",{style:dt.info,children:["\u89E3\u6790\u5931\u8D25\uFF1A",kp(e)]}):t?(0,D.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:"4px 0"},children:[(0,D.jsx)(Wb,{scene:t}),t.meta&&t.meta.summary&&(t.entities||[]).length===0?(0,D.jsxs)("div",{style:dt.info,children:[(0,D.jsxs)("div",{children:[(0,D.jsx)("b",{children:"\u6458\u8981\u6A21\u5F0F"}),"\uFF08detail: 'full' \u8FD4\u56DE\u5168\u91CF\u5B9E\u4F53\uFF09"]}),Object.entries(t.meta.summary.byType||{}).map(r=>(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:r[0]}),r[1]]},r[0])),(t.layers||[]).slice(0,24).map(r=>(0,D.jsxs)("div",{children:[(0,D.jsx)("span",{style:dt.label,children:r.name}),r.count]},r.name))]}):(0,D.jsx)("div",{style:{height:380,display:"flex"},children:(0,D.jsx)(Vp,{scene:t,selected:Gp(n),onSelect:r=>s(r?{item:r.item||null,category:r.category||null,device:r.device||(r.item&&r.item.handle!=null?Hp(t,r.item.handle):null)}:null)})}),(0,D.jsx)(Wp,{scene:t,selection:n})]}):(0,D.jsx)("pre",{style:dt.pre,children:kp(e)})}function sS(i){return(0,D.jsx)(lc,{children:(0,D.jsx)(iS,{...i})})}function rS(i){let e=i&&typeof i.size=="number"?i.size:18;return(0,D.jsx)("span",{style:{fontSize:e,lineHeight:1},children:"\u{1F4D0}"})}function aS(i){i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:"cad-scene-builder",label:"3d\u89E3\u6790",order:100},rS)),i.slots.inject("main",()=>i.slots.register({name:"main",key:"cad-scene-builder"},tS)),i.slots.inject("tool.call.toolview",()=>i.slots.register({name:"tool.call.toolview",key:"parse_cad_to_scene"},sS))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/

		return module.exports;
	}
});
