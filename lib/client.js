window.__ModuleLoader__.load({
	id: "dsh-cad-scene",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var ju=Object.create;var Lr=Object.defineProperty;var Qu=Object.getOwnPropertyDescriptor;var ed=Object.getOwnPropertyNames;var td=Object.getPrototypeOf,nd=Object.prototype.hasOwnProperty;var id=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},sd=(i,e)=>{for(var t in e)Lr(i,t,{get:e[t],enumerable:!0})},Ac=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ed(e))!nd.call(i,s)&&s!==t&&Lr(i,s,{get:()=>e[s],enumerable:!(n=Qu(e,s))||n.enumerable});return i};var rd=(i,e,t)=>(t=i!=null?ju(td(i)):{},Ac(e||!i||!i.__esModule?Lr(t,"default",{value:i,enumerable:!0}):t,i)),ad=i=>Ac(Lr({},"__esModule",{value:!0}),i);var Au=id((Tu,zo)=>{(function(i,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof zo=="object"&&zo.exports?zo.exports=e():i.log=e()})(Tu,function(){"use strict";var i=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],s={},r=null;function o(g,S){var f=g[S];if(typeof f.bind=="function")return f.bind(g);try{return Function.prototype.bind.call(f,g)}catch{return function(){return Function.prototype.apply.apply(f,[g,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(g){return g==="debug"&&(g="log"),typeof console===e?!1:g==="trace"&&t?a:console[g]!==void 0?o(console,g):console.log!==void 0?o(console,"log"):i}function c(){for(var g=this.getLevel(),S=0;S<n.length;S++){var f=n[S];this[f]=S<g?i:this.methodFactory(f,g,this.name)}if(this.log=this.debug,typeof console===e&&g<this.levels.SILENT)return"No console available for logging"}function u(g){return function(){typeof console!==e&&(c.call(this),this[g].apply(this,arguments))}}function d(g,S,f){return l(g)||u.apply(this,arguments)}function h(g,S){var f=this,p,C,R,y="loglevel";typeof g=="string"?y+=":"+g:typeof g=="symbol"&&(y=void 0);function E(A){var I=(n[A]||"silent").toUpperCase();if(!(typeof window===e||!y)){try{window.localStorage[y]=I;return}catch{}try{window.document.cookie=encodeURIComponent(y)+"="+I+";"}catch{}}}function v(){var A;if(!(typeof window===e||!y)){try{A=window.localStorage[y]}catch{}if(typeof A===e)try{var I=window.document.cookie,U=encodeURIComponent(y),G=I.indexOf(U+"=");G!==-1&&(A=/^([^;]+)/.exec(I.slice(G+U.length+1))[1])}catch{}return f.levels[A]===void 0&&(A=void 0),A}}function M(){if(!(typeof window===e||!y)){try{window.localStorage.removeItem(y)}catch{}try{window.document.cookie=encodeURIComponent(y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function x(A){var I=A;if(typeof I=="string"&&f.levels[I.toUpperCase()]!==void 0&&(I=f.levels[I.toUpperCase()]),typeof I=="number"&&I>=0&&I<=f.levels.SILENT)return I;throw new TypeError("log.setLevel() called with invalid level: "+A)}f.name=g,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=S||d,f.getLevel=function(){return R??C??p},f.setLevel=function(A,I){return R=x(A),I!==!1&&E(R),c.call(f)},f.setDefaultLevel=function(A){C=x(A),v()||f.setLevel(A,!1)},f.resetLevel=function(){R=null,M(),c.call(f)},f.enableAll=function(A){f.setLevel(f.levels.TRACE,A)},f.disableAll=function(A){f.setLevel(f.levels.SILENT,A)},f.rebuild=function(){if(r!==f&&(p=x(r.getLevel())),c.call(f),r===f)for(var A in s)s[A].rebuild()},p=x(r?r.getLevel():"WARN");var w=v();w!=null&&(R=x(w)),c.call(f)}r=new h,r.getLogger=function(S){if(typeof S!="symbol"&&typeof S!="string"||S==="")throw new TypeError("You must supply a name when creating a logger.");var f=s[S];return f||(f=s[S]=new h(S,r.methodFactory)),f};var m=typeof window!==e?window.log:void 0;return r.noConflict=function(){return typeof window!==e&&window.log===r&&(window.log=m),r},r.getLoggers=function(){return s},r.default=r,r})});var ex={};sd(ex,{apply:()=>Q_,inject:()=>R_});module.exports=ad(ex);var nt=require("react");var si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ah=0,Ml=1,oh=2;var er=1,lh=2,ss=3,ai=0,Xt=1,an=2,wn=0,rs=1,El=2,wl=3,Tl=4,ch=5;var xi=100,hh=101,uh=102,dh=103,fh=104,ph=200,mh=201,gh=202,_h=203,Al=204,Cl=205,xh=206,yh=207,vh=208,bh=209,Sh=210,Mh=211,Eh=212,wh=213,Th=214,aa=0,oa=1,la=2,Wi=3,ca=4,ha=5,ua=6,da=7,Rl=0,Ah=1,Ch=2,gn=0,Pl=1,Il=2,Ll=3,Dl=4,Nl=5,Ul=6,Fl=7;var Ol=300,oi=301,yi=302,za=303,Va=304,tr=306,fa=1e3,Sn=1001,pa=1002,Pt=1003,Rh=1004;var nr=1005;var Dt=1006,Ha=1007;var li=1008;var Zt=1009,Bl=1010,kl=1011,as=1012,Ga=1013,_n=1014,on=1015,xn=1016,Wa=1017,Xa=1018,os=1020,zl=35902,Vl=35899,Hl=1021,Gl=1022,ln=1023,Mn=1026,ci=1027,Ya=1028,qa=1029,hi=1030,Za=1031;var Ja=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ka=35840,$a=35841,ja=35842,Qa=35843,eo=36196,to=37492,no=37496,io=37488,so=37489,or=37490,ro=37491,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,yo=37820,vo=37821,bo=36492,So=36494,Mo=36495,Eo=36283,wo=36284,lr=36285,To=36286;var Ts=2300,ma=2301,sa=2302,ml=2303,gl=2400,_l=2401,xl=2402;var Ph=3200;var Ao=0,Ih=1,Vn="",jt="srgb",As="srgb-linear",Cs="linear",ut="srgb";var ra=7680;var Lh=519,Dh=512,Nh=513,Uh=514,Co=515,Fh=516,Oh=517,Ro=518,Bh=519,Wl=35044;var Xl="300 es",pn=2e3,Xi=2001;function od(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=Rs("canvas");return i.style.display="block",i}var Cc={},Yi=null;function Ps(...i){let e="THREE."+i.shift();Yi?Yi("log",e,...i):console.log(e,...i)}function zh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=zh(i);let e="THREE."+i.shift();if(Yi)Yi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=zh(i);let e="THREE."+i.shift();if(Yi)Yi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gi(...i){let e=i.join(" ");e in Cc||(Cc[e]=!0,Oe(...i))}function Vh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hh={[aa]:oa,[la]:ua,[ca]:da,[Wi]:ha,[oa]:aa,[ua]:la,[da]:ca,[ha]:Wi},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Es=Math.PI/180,qi=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Yl(i,e){return(i%e+e)%e}function cd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hd(i,e,t){return i!==e?(t-i)/(e-i):0}function ws(i,e,t){return(1-t)*i+t*e}function ud(i,e,t,n){return ws(i,e,1-Math.exp(-t*n))}function dd(i,e=1){return e-Math.abs(Yl(i,e*2)-e)}function fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function md(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gd(i,e){return i+Math.random()*(e-i)}function _d(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(i){return i*Es}function vd(i){return i*qi}function bd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ql={DEG2RAD:Es,RAD2DEG:qi,generateUUID:On,clamp:$e,euclideanModulo:Yl,mapLinear:cd,inverseLerp:hd,lerp:ws,damp:ud,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:yd,radToDeg:vd,isPowerOfTwo:bd,ceilPowerOfTwo:Sd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:Ed,normalize:dt,denormalize:fn},Le=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],m=r[o+1],g=r[o+2],S=r[o+3];if(d!==S||l!==h||c!==m||u!==g){let f=l*h+c*m+u*g+d*S;f<0&&(h=-h,m=-m,g=-g,S=-S,f=-f);let p=1-a;if(f<.9995){let C=Math.acos(f),R=Math.sin(C);p=Math.sin(p*C)/R,a=Math.sin(a*C)/R,l=l*p+h*a,c=c*p+m*a,u=u*p+g*a,d=d*p+S*a}else{l=l*p+h*a,c=c*p+m*a,u=u*p+g*a,d=d*p+S*a;let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new F,Pc=new Gt,He=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],S=s[0],f=s[3],p=s[6],C=s[1],R=s[4],y=s[7],E=s[2],v=s[5],M=s[8];return r[0]=o*S+a*C+l*E,r[3]=o*f+a*R+l*v,r[6]=o*p+a*y+l*M,r[1]=c*S+u*C+d*E,r[4]=c*f+u*R+d*v,r[7]=c*p+u*y+d*M,r[2]=h*S+m*C+g*E,r[5]=h*f+m*R+g*v,r[8]=h*p+m*y+g*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=t*d+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return e[0]=d*S,e[1]=(s*c-u*n)*S,e[2]=(a*n-s*o)*S,e[3]=h*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qo.makeScale(e,t)),this}rotate(e){return gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qo=new He,Ic=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}var et=wd();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wi,ga=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wi===void 0&&(wi=Rs("canvas")),wi.width=e.width,wi.height=e.height;let s=wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Td=0,Zi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zo(s[o].image)):r.push(Zo(s[o]))}else r=Zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Ad=0,Jo=new F,Wt=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Sn,s=Sn,r=Dt,o=li,a=ln,l=Zt,c=i.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=On(),this.name="",this.source=new Zi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ol;Wt.DEFAULT_ANISOTROPY=1;var bt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],S=l[2],f=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,y=(m+1)/2,E=(p+1)/2,v=(u+h)/4,M=(d+S)/4,x=(g+f)/4;return R>y&&R>E?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=v/n,r=M/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=M/r,s=x/r),this.set(n,s,r,t),this}let C=Math.sqrt((f-g)*(f-g)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(f-g)/C,this.y=(d-S)/C,this.z=(h-u)/C,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_a=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Wt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Is=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,u,d,h,m,g,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,m,g,S,f)}set(e,t,n,s,r,o,a,l,c,u,d,h,m,g,S,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=m,p[7]=g,p[11]=S,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-S*c,t[9]=-a*l,t[2]=S-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,m=l*d,g=c*u,S=c*d;t[0]=h+S*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=S+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,m=l*d,g=c*u,S=c*d;t[0]=h-S*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=S-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+S,t[1]=l*d,t[5]=S*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-S*d}else if(e.order==="XZY"){let h=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+S,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=S*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Yn.crossVectors(n,Kt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Yn.crossVectors(n,Kt)),Yn.normalize(),Dr.crossVectors(Kt,Yn),s[0]=Yn.x,s[4]=Dr.x,s[8]=Kt.x,s[1]=Yn.y,s[5]=Dr.y,s[9]=Kt.y,s[2]=Yn.z,s[6]=Dr.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],S=n[6],f=n[10],p=n[14],C=n[3],R=n[7],y=n[11],E=n[15],v=s[0],M=s[4],x=s[8],w=s[12],A=s[1],I=s[5],U=s[9],G=s[13],D=s[2],X=s[6],$=s[10],j=s[14],ne=s[3],O=s[7],W=s[11],K=s[15];return r[0]=o*v+a*A+l*D+c*ne,r[4]=o*M+a*I+l*X+c*O,r[8]=o*x+a*U+l*$+c*W,r[12]=o*w+a*G+l*j+c*K,r[1]=u*v+d*A+h*D+m*ne,r[5]=u*M+d*I+h*X+m*O,r[9]=u*x+d*U+h*$+m*W,r[13]=u*w+d*G+h*j+m*K,r[2]=g*v+S*A+f*D+p*ne,r[6]=g*M+S*I+f*X+p*O,r[10]=g*x+S*U+f*$+p*W,r[14]=g*w+S*G+f*j+p*K,r[3]=C*v+R*A+y*D+E*ne,r[7]=C*M+R*I+y*X+E*O,r[11]=C*x+R*U+y*$+E*W,r[15]=C*w+R*G+y*j+E*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],S=e[7],f=e[11],p=e[15],C=l*m-c*h,R=a*m-c*d,y=a*h-l*d,E=o*m-c*u,v=o*h-l*u,M=o*d-a*u;return t*(S*C-f*R+p*y)-n*(g*C-f*E+p*v)+s*(g*R-S*E+p*M)-r*(g*y-S*v+f*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],S=e[13],f=e[14],p=e[15],C=t*a-n*o,R=t*l-s*o,y=t*c-r*o,E=n*l-s*a,v=n*c-r*a,M=s*c-r*l,x=u*S-d*g,w=u*f-h*g,A=u*p-m*g,I=d*f-h*S,U=d*p-m*S,G=h*p-m*f,D=C*G-R*U+y*I+E*A-v*w+M*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/D;return e[0]=(a*G-l*U+c*I)*X,e[1]=(s*U-n*G-r*I)*X,e[2]=(S*M-f*v+p*E)*X,e[3]=(h*v-d*M-m*E)*X,e[4]=(l*A-o*G-c*w)*X,e[5]=(t*G-s*A+r*w)*X,e[6]=(f*y-g*M-p*R)*X,e[7]=(u*M-h*y+m*R)*X,e[8]=(o*U-a*A+c*x)*X,e[9]=(n*A-t*U-r*x)*X,e[10]=(g*v-S*y+p*C)*X,e[11]=(d*y-u*v-m*C)*X,e[12]=(a*w-o*I-l*x)*X,e[13]=(t*I-n*w+s*x)*X,e[14]=(S*R-g*E-f*C)*X,e[15]=(u*E-d*R+h*C)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,g=r*d,S=o*u,f=o*d,p=a*d,C=l*c,R=l*u,y=l*d,E=n.x,v=n.y,M=n.z;return s[0]=(1-(S+p))*E,s[1]=(m+y)*E,s[2]=(g-R)*E,s[3]=0,s[4]=(m-y)*v,s[5]=(1-(h+p))*v,s[6]=(f+C)*v,s[7]=0,s[8]=(g+R)*M,s[9]=(f-C)*M,s[10]=(1-(h+S))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ti.set(s[0],s[1],s[2]).length(),a=Ti.set(s[4],s[5],s[6]).length(),l=Ti.set(s[8],s[9],s[10]).length();r<0&&(o=-o),hn.copy(this);let c=1/o,u=1/a,d=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s),g,S;if(l)g=r/(o-r),S=o*r/(o-r);else if(a===pn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Xi)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),m=-(n+s)/(n-s),g,S;if(l)g=1/(o-r),S=o/(o-r);else if(a===pn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===Xi)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ti=new F,hn=new at,Cd=new F(0,0,0),Rd=new F(1,1,1),Yn=new F,Dr=new F,Kt=new F,Dc=new at,Nc=new Gt,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pd=0,Uc=new F,Ai=new Gt,Pn=new at,Nr=new F,ps=new F,Id=new F,Ld=new Gt,Fc=new F(1,0,0),Oc=new F(0,1,0),Bc=new F(0,0,1),kc={type:"added"},Dd={type:"removed"},Ci={type:"childadded",child:null},Ko={type:"childremoved",child:null},It=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new kn,n=new Gt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new He}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ps,Nr,this.up):Pn.lookAt(Nr,ps,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new F(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let f=t.getJointPose(S,n),p=this._getHandJoint(c,S);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function $o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Yl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$o(o,r,e+1/3),this.g=$o(o,r,e),this.b=$o(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return et.workingToColorSpace(Ft.copy(this),e),Math.round($e(Ft.r*255,0,255))*65536+Math.round($e(Ft.g*255,0,255))*256+Math.round($e(Ft.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=jt){et.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Ur);let n=ws(qn.h,Ur.h,t),s=ws(qn.s,Ur.s,t),r=ws(qn.l,Ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new ze;ze.NAMES=Gh;var Ls=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},un=new F,In=new F,jo=new F,Ln=new F,Ri=new F,Pi=new F,zc=new F,Qo=new F,el=new F,tl=new F,nl=new bt,il=new bt,sl=new bt,Un=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),In.subVectors(n,t),jo.subVectors(e,t);let o=un.dot(un),a=un.dot(In),l=un.dot(jo),c=In.dot(In),u=In.dot(jo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nl,r.x),o.addScaledVector(il,r.y),o.addScaledVector(sl,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ri.subVectors(s,n),Pi.subVectors(r,n),Qo.subVectors(e,n);let l=Ri.dot(Qo),c=Pi.dot(Qo);if(l<=0&&c<=0)return t.copy(n);el.subVectors(e,s);let u=Ri.dot(el),d=Pi.dot(el);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ri,o);tl.subVectors(e,r);let m=Ri.dot(tl),g=Pi.dot(tl);if(g>=0&&m<=g)return t.copy(r);let S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Pi,a);let f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return zc.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(zc,a);let p=1/(f+S+h);return o=S*p,a=h*p,t.copy(n).addScaledVector(Ri,o).addScaledVector(Pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Or.subVectors(this.max,ms),Ii.subVectors(e.a,ms),Li.subVectors(e.b,ms),Di.subVectors(e.c,ms),Zn.subVectors(Li,Ii),Jn.subVectors(Di,Li),di.subVectors(Ii,Di);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-di.z,di.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,di.z,0,-di.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-di.y,di.x,0];return!rl(t,Ii,Li,Di,Or)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Ii,Li,Di,Or))?!1:(Br.crossVectors(Zn,Jn),t=[Br.x,Br.y,Br.z],rl(t,Ii,Li,Di,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,Fr=new en,Ii=new F,Li=new F,Di=new F,Zn=new F,Jn=new F,di=new F,ms=new F,Or=new F,Br=new F,fi=new F;function rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var wt=new F,kr=new Le,Ud=0,Yt=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wl,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Us=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=new en,gs=new F,al=new F,zn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);let t=gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(al)),this.expandByPoint(gs.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Od=0,rn=new at,ol=new It,Ni=new F,$t=new en,_s=new en,Rt=new F,Bt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors($t.min,_s.min),$t.expandByPoint(Rt),Rt.addVectors($t.max,_s.max),$t.expandByPoint(Rt)):($t.expandByPoint(_s.min),$t.expandByPoint(_s.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),Rt.add(Ni)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new F,l[x]=new F;let c=new F,u=new F,d=new F,h=new Le,m=new Le,g=new Le,S=new F,f=new F;function p(x,w,A){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,A),h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),u.sub(c),d.sub(c),m.sub(h),g.sub(h);let I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(I),f.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),a[x].add(S),a[w].add(S),a[A].add(S),l[x].add(f),l[w].add(f),l[A].add(f))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let x=0,w=C.length;x<w;++x){let A=C[x],I=A.start,U=A.count;for(let G=I,D=I+U;G<D;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let R=new F,y=new F,E=new F,v=new F;function M(x){E.fromBufferAttribute(s,x),v.copy(E);let w=a[x];R.copy(w),R.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(v,w);let I=y.dot(l[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,I)}for(let x=0,w=C.length;x<w;++x){let A=C[x],I=A.start,U=A.count;for(let G=I,D=I+U;G<D;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,d=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),S=e.getX(h+1),f=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,f),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),m=0,g=0;for(let S=0,f=l.length;S<f;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let p=0;p<u;p++)h[g++]=c[m++]}return new Yt(h,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ya=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ht=new F,Fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ll=new F,Bd=new F,kd=new He,Qt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ll.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kd.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zd=0,En=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=On(),this.name="",this.type="Material",this.blending=rs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$i=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ui,xs=new F,Fi=new F,Oi=new F,Bi=new Le,ys=new Le,Wh=new at,zr=new F,vs=new F,Vr=new F,Vc=new Le,cl=new Le,Hc=new Le,Os=class extends It{constructor(e=new $i){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ya(t,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Fs(n,3,0,!1)),Ui.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=Ui,this.material=e,this.center=new Le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Hr(zr.set(-.5,-.5,0),Oi,o,Fi,s,r),Hr(vs.set(.5,-.5,0),Oi,o,Fi,s,r),Hr(Vr.set(.5,.5,0),Oi,o,Fi,s,r),Vc.set(0,0),cl.set(1,0),Hc.set(1,1);let a=e.ray.intersectTriangle(zr,vs,Vr,!1,xs);if(a===null&&(Hr(vs.set(-.5,.5,0),Oi,o,Fi,s,r),cl.set(0,1),a=e.ray.intersectTriangle(zr,Vr,vs,!1,xs),a===null))return;let l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Un.getInterpolation(xs,zr,vs,Vr,Vc,cl,Hc,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Hr(i,e,t,n,s,r){Bi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Bi.x-s*Bi.y,ys.y=s*Bi.x+r*Bi.y):ys.copy(Bi),i.copy(e),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(Wh)}var Nn=new F,hl=new F,Gr=new F,Wr=new F,$n=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hl.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(hl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=Wr.dot(this.direction),l=-Wr.dot(Gr),c=Wr.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let S=1/u;d*=S,h*=S,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hl).addScaledVector(Gr,h),m}intersectSphere(e,t){if(e.radius<0)return null;Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,m=e.z-o.z,g=t.x-o.x,S=t.y-o.y,f=t.z-o.z,p=n.x-o.x,C=n.y-o.y,R=n.z-o.z,y=Math.abs(l),E=Math.abs(c),v=Math.abs(u),M,x,w,A,I,U,G,D,X,$,j,ne;if(y>=E&&y>=v?(w=l,U=d,X=g,ne=p,l>=0?(M=c,x=u,A=h,I=m,G=S,D=f,$=C,j=R):(M=u,x=c,A=m,I=h,G=f,D=S,$=R,j=C)):E>=v?(w=c,U=h,X=S,ne=C,c>=0?(M=u,x=l,A=m,I=d,G=f,D=g,$=R,j=p):(M=l,x=u,A=d,I=m,G=g,D=f,$=p,j=R)):(w=u,U=m,X=f,ne=R,u>=0?(M=l,x=c,A=d,I=h,G=g,D=S,$=p,j=C):(M=c,x=l,A=h,I=d,G=S,D=g,$=C,j=p)),w===0)return null;let O=M/w,W=x/w,K=1/w,oe=A-O*U,ae=I-W*U,ce=G-O*X,Fe=D-W*X,Ne=$-O*ne,Z=j-W*ne,q=Ne*Fe-Z*ce,ie=oe*Z-ae*Ne,Re=ce*ae-Fe*oe;if(s){if(q<0||ie<0||Re<0)return null}else if((q<0||ie<0||Re<0)&&(q>0||ie>0||Re>0))return null;let he=q+ie+Re;if(he===0)return null;let Ue=K*(q*U+ie*X+Re*ne);return(he>0?Ue<0:Ue>0)?null:this.at(Ue/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new at,pi=new $n,Xr=new zn,Wc=new F,Yr=new F,qr=new F,Zr=new F,ul=new F,Jr=new F,Xc=new F,Kr=new F,Lt=class extends It{constructor(e=new Bt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(ul.fromBufferAttribute(d,e),o?Jr.addScaledVector(ul,u):Jr.addScaledVector(ul.sub(t),u))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Xr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Xr,Wc)===null||pi.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),pi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let f=h[g],p=o[f.materialIndex],C=Math.max(f.start,m.start),R=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=C,E=R;y<E;y+=3){let v=a.getX(y),M=a.getX(y+1),x=a.getX(y+2);s=$r(this,p,e,n,c,u,d,v,M,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let f=g,p=S;f<p;f+=3){let C=a.getX(f),R=a.getX(f+1),y=a.getX(f+2);s=$r(this,o,e,n,c,u,d,C,R,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){let f=h[g],p=o[f.materialIndex],C=Math.max(f.start,m.start),R=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=C,E=R;y<E;y+=3){let v=y,M=y+1,x=y+2;s=$r(this,p,e,n,c,u,d,v,M,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let f=g,p=S;f<p;f+=3){let C=f,R=f+1,y=f+2;s=$r(this,o,e,n,c,u,d,C,R,y),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Vd(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:i}}function $r(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Zr);let u=Vd(i,e,t,n,Yr,qr,Zr,Xc);if(u){let d=new F;Un.getBarycoord(Xc,Yr,qr,Zr,d),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,d,new Le)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,d,new Le)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,d,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new F,materialIndex:0};Un.getNormal(Yr,qr,Zr,h.normal),u.face=h,u.barycoord=d}return u}var Bs=class extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Pt,u=Pt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ks=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ki=new at,Yc=new at,jr=[],qc=new en,Hd=new at,bs=new Lt,Ss=new zn,zs=class extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),qc.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(qc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Ss.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),Yc.multiplyMatrices(n,ki),bs.matrixWorld=Yc,bs.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){let l=jr[o];l.instanceId=r,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Ya,on));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mi=new zn,Gd=new Le(.5,.5),Qr=new F,ji=class{constructor(e=new Qt,t=new Qt,n=new Qt,s=new Qt,r=new Qt,o=new Qt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],m=r[7],g=r[8],S=r[9],f=r[10],p=r[11],C=r[12],R=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-o,m-u,p-g,E-C).normalize(),s[1].setComponents(c+o,m+u,p+g,E+C).normalize(),s[2].setComponents(c+a,m+d,p+S,E+R).normalize(),s[3].setComponents(c-a,m-d,p-S,E-R).normalize(),n)s[4].setComponents(l,h,f,y).normalize(),s[5].setComponents(c-l,m-h,p-f,E-y).normalize();else if(s[4].setComponents(c-l,m-h,p-f,E-y).normalize(),t===pn)s[5].setComponents(c+l,m+h,p+f,E+y).normalize();else if(t===Xi)s[5].setComponents(l,h,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);let t=Gd.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qi=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},va=new F,ba=new F,Zc=new at,Ms=new $n,ea=new zn,dl=new F,Jc=new F,Vs=class extends It{constructor(e=new Bt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)va.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=va.distanceTo(ba);e.setAttribute("lineDistance",new St(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;Zc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Zc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let S=m,f=g-1;S<f;S+=c){let p=u.getX(S),C=u.getX(S+1),R=ta(this,e,Ms,l,p,C,S);R&&t.push(R)}if(this.isLineLoop){let S=u.getX(g-1),f=u.getX(m),p=ta(this,e,Ms,l,S,f,g-1);p&&t.push(p)}}else{let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=m,f=g-1;S<f;S+=c){let p=ta(this,e,Ms,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=ta(this,e,Ms,l,g-1,m,g-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(va.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(va,ba,dl,Jc)>n)return;dl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dl);if(!(c<e.near||c>e.far))return{distance:c,point:Jc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Kc=new F,$c=new F,Sa=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kc.fromBufferAttribute(t,s),$c.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kc.distanceTo($c);e.setAttribute("lineDistance",new St(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hs=class extends Wt{constructor(e=[],t=oi,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gs=class extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Wt{constructor(e,t,n=_n,s,r,o,a=Pt,l=Pt,c,u=Mn,d=1){if(u!==Mn&&u!==ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ma=class extends Qn{constructor(e,t=_n,n=oi,s,r,o=Pt,a=Pt,l,c=Mn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ws=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ei=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function g(S,f,p,C,R,y,E,v,M,x,w){let A=y/M,I=E/x,U=y/2,G=E/2,D=v/2,X=M+1,$=x+1,j=0,ne=0,O=new F;for(let W=0;W<$;W++){let K=W*I-G;for(let oe=0;oe<X;oe++){let ae=oe*A-U;O[S]=ae*C,O[f]=K*R,O[p]=D,c.push(O.x,O.y,O.z),O[S]=0,O[f]=0,O[p]=v>0?1:-1,u.push(O.x,O.y,O.z),d.push(oe/M),d.push(1-W/x),j+=1}}for(let W=0;W<x;W++)for(let K=0;K<M;K++){let oe=h+K+X*W,ae=h+K+X*(W+1),ce=h+(K+1)+X*(W+1),Fe=h+(K+1)+X*W;l.push(oe,ae,Fe),l.push(ae,ce,Fe),ne+=6}a.addGroup(m,ne,w),m+=ne,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _i=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],S=[],f=[];for(let p=0;p<u;p++){let C=p*h-o;for(let R=0;R<c;R++){let y=R*d-r;g.push(y,-C,0),S.push(0,0,1),f.push(R/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let R=C+c*p,y=C+c*(p+1),E=C+1+c*(p+1),v=C+1+c*p;m.push(R,y,v),m.push(y,E,v)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(S,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xs=class i extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new F,h=new F,m=[],g=[],S=[],f=[];for(let p=0;p<=n;p++){let C=[],R=p/n,y=o+R*a,E=e*Math.cos(y),v=Math.sqrt(e*e-E*E),M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let x=0;x<=t;x++){let w=x/t,A=s+w*r;d.x=-v*Math.cos(A),d.y=E,d.z=v*Math.sin(A),g.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),f.push(w+M,1-R),C.push(c++)}u.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let R=u[p][C+1],y=u[p][C],E=u[p+1][C],v=u[p+1][C+1];(p!==0||o>0)&&m.push(R,y,v),(p!==n-1||l<Math.PI)&&m.push(y,E,v)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(S,3)),this.setAttribute("uv",new St(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jc(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=vi(i[t]);for(let s in n)e[s]=n[s]}return e}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Xh={clone:vi,merge:kt},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var wa=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ta=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _l:r=e,a=2*t-n;break;case xl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:o=e,l=2*n-t;break;case xl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),S=g*g,f=S*g,p=-h*f+2*h*S-h*g,C=(1+h)*f+(-1.5-2*h)*S+(-.5+h)*g+1,R=(-1-m)*f+(1.5+m)*S+.5*g,y=m*f-m*S;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+C*o[c+E]+R*o[l+E]+y*o[d+E];return r}},Ca=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},Ra=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends ti{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),S=1-g;for(let f=0;f!==a;++f)r[f]=o[c+f]*S+o[l+f]*g;return r}let h=a*2,m=e-1;for(let g=0;g!==a;++g){let S=o[c+g],f=o[l+g],p=m*h+g*2,C=d[p],R=d[p+1],y=e*h+g*2,E=u[y],v=u[y+1],M=Zd(n,t,C,E,s);r[g]=Yh(M,S,R,v,f)}return r}};function Yh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function qd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Zd(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Yh(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=qd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fl(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break;case ml:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return sa;case this.InterpolantFactoryMethodBezier:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fl(this.settings)&&(Qc(this.settings.inTangents,e),Qc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ld(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,m=d+n;for(let g=0;g!==n;++g){let S=t[d+g];if(S!==t[h+g]||S!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let m=0;m!==n;++m)t[h+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=ma;var ni=class extends nn{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ts;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="color";var La=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ys=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends nn{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ts;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new Ua,Fa=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qs=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pl=new at,eh=new F,th=new F,Oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Xi||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},na=new F,ia=new Gt,bn=new F,Zs=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(na,ia,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(na,ia,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new F,nh=new Le,ih=new Le,Ot=class extends Zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ns=class extends Zs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yl=class extends Oa{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new yl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ks=class extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vi=-90,Hi=1,Ba=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Vi,Hi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Vi,Hi,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Vi,Hi,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Vi,Hi,e,t);a.layers=this.layers,this.add(a);let l=new Ot(Vi,Hi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Vi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jl="\\[\\]\\.:\\/",Jd=new RegExp("["+Jl+"]","g"),Kl="[^"+Jl+"]",Kd="[^"+Jl.replace("\\.","")+"]",$d=/((?:WC+[\/:])*)/.source.replace("WC",Kl),jd=/(WCOD+)?/.source.replace("WCOD",Kd),Qd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl),ef=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl),tf=new RegExp("^"+$d+jd+Qd+ef+"$"),nf=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jd,"")}static parseTrackName(e){let t=tf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=vl;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var sh=new at,$s=class{constructor(e,t,n=0,s=1/0){this.ray=new $n(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ji,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bl(e[s],this,n,t);return n.sort(rh),n}};function rh(i,e){return i.distance-e.distance}function bl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],e,t,!0)}}var is=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Sl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var js=class extends Sa{constructor(e=10,t=10,n=4473924,s=8947848){n=new ze(n),s=new ze(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let S=h===r?n:s;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}let u=new Bt;u.setAttribute("position",new St(l,3)),u.setAttribute("color",new St(c,3));let d=new Qi({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Qs=class extends mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function $l(i,e,t,n){let s=sf(n);switch(t){case Hl:return i*e;case Ya:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case hi:return i*e*2/s.components*s.byteLength;case Za:return i*e*2/s.components*s.byteLength;case Gl:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case Ja:return i*e*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:case Qa:return Math.max(i,16)*Math.max(e,8)/4;case Ka:case ja:return Math.max(i,8)*Math.max(e,8)/2;case eo:case to:case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case or:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bo:case So:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eo:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lr:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sf(i){switch(i){case Zt:case Bl:return{byteLength:1,components:1};case as:case kl:case xn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case _n:case Ga:case on:return{byteLength:4,components:1};case zl:case Vl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uf(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<d.length;m++){let g=d[h],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,d[h]=S)}d.length=h+1;for(let m=0,g=d.length;m<g;m++){let S=d[m];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`uniform sampler2D dfgLUT;
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,bm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Cm=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,km=`#define TOON
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
}`,zm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:_f,aomap_fragment:xf,aomap_pars_fragment:yf,batching_pars_vertex:vf,batching_vertex:bf,begin_vertex:Sf,beginnormal_vertex:Mf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Nf,common:Uf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:zf,emissivemap_pars_fragment:Vf,colorspace_fragment:Hf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sp,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Kf,fog_fragment:$f,fog_pars_fragment:jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:ap,lights_phong_fragment:op,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:vp,map_particle_fragment:bp,map_particle_pars_fragment:Sp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:wp,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Cp,morphtarget_vertex:Rp,normal_fragment_begin:Pp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Np,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:kp,opaque_fragment:zp,packing:Vp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Kp,shadowmask_pars_fragment:$p,skinbase_vertex:jp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:am,transmission_pars_fragment:om,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:xm,depth_frag:ym,distance_vert:vm,distance_frag:bm,equirect_vert:Sm,equirect_frag:Mm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Cm,meshlambert_frag:Rm,meshmatcap_vert:Pm,meshmatcap_frag:Im,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Nm,meshphong_frag:Um,meshphysical_vert:Fm,meshphysical_frag:Om,meshtoon_vert:Bm,meshtoon_frag:km,points_vert:zm,points_frag:Vm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},_e={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},An={basic:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kt([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kt([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kt([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:kt([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:kt([_e.lights,_e.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};An.physical={uniforms:kt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Po={r:0,b:0,g:0},Ym=new at,gu=new He;gu.set(-1,0,0,0,1,0,0,0,1);function qm(i,e,t,n,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function m(C){let R=C.isScene===!0?C.background:null;if(R&&R.isTexture){let y=C.backgroundBlurriness>0;R=e.get(R,y)}return R}function g(C){let R=!1,y=m(C);y===null?f(o,a):y&&y.isColor&&(f(y,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(C,R){let y=m(R);y&&(y.isCubeTexture||y.mapping===tr)?(c===void 0&&(c=new Lt(new ei(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:vi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gu),c.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new _i(2,2),new tn({name:"BackgroundMaterial",uniforms:vi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function f(C,R){C.getRGB(Po,Zl(i)),t.buffers.color.setClear(Po.r,Po.g,Po.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,R=1){o.set(C),a=R,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,f(o,a)},render:g,addToRenderList:S,dispose:p}}function Zm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(I,U,G,D,X){let $=!1,j=d(I,D,G,U);r!==j&&(r=j,c(r.object)),$=m(I,D,G,X),$&&g(I,D,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(I,U,G,D),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function d(I,U,G,D){let X=D.wireframe===!0,$=n[U.id];$===void 0&&($={},n[U.id]=$);let j=I.isInstancedMesh===!0?I.id:0,ne=$[j];ne===void 0&&(ne={},$[j]=ne);let O=ne[G.id];O===void 0&&(O={},ne[G.id]=O);let W=O[X];return W===void 0&&(W=h(l()),O[X]=W),W}function h(I){let U=[],G=[],D=[];for(let X=0;X<t;X++)U[X]=0,G[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:D,object:I,attributes:{},index:null}}function m(I,U,G,D){let X=r.attributes,$=U.attributes,j=0,ne=G.getAttributes();for(let O in ne)if(ne[O].location>=0){let K=X[O],oe=$[O];if(oe===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function g(I,U,G,D){let X={},$=U.attributes,j=0,ne=G.getAttributes();for(let O in ne)if(ne[O].location>=0){let K=$[O];K===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),X[O]=oe,j++}r.attributes=X,r.attributesNum=j,r.index=D}function S(){let I=r.newAttributes;for(let U=0,G=I.length;U<G;U++)I[U]=0}function f(I){p(I,0)}function p(I,U){let G=r.newAttributes,D=r.enabledAttributes,X=r.attributeDivisors;G[I]=1,D[I]===0&&(i.enableVertexAttribArray(I),D[I]=1),X[I]!==U&&(i.vertexAttribDivisor(I,U),X[I]=U)}function C(){let I=r.newAttributes,U=r.enabledAttributes;for(let G=0,D=U.length;G<D;G++)U[G]!==I[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function R(I,U,G,D,X,$,j){j===!0?i.vertexAttribIPointer(I,U,G,X,$):i.vertexAttribPointer(I,U,G,D,X,$)}function y(I,U,G,D){S();let X=D.attributes,$=G.getAttributes(),j=U.defaultAttributeValues;for(let ne in $){let O=$[ne];if(O.location>=0){let W=X[ne];if(W===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let K=W.normalized,oe=W.itemSize,ae=e.get(W);if(ae===void 0)continue;let ce=ae.buffer,Fe=ae.type,Ne=ae.bytesPerElement,Z=Fe===i.INT||Fe===i.UNSIGNED_INT||W.gpuType===Ga;if(W.isInterleavedBufferAttribute){let q=W.data,ie=q.stride,Re=W.offset;if(q.isInstancedInterleavedBuffer){for(let he=0;he<O.locationSize;he++)p(O.location+he,q.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<O.locationSize;he++)f(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let he=0;he<O.locationSize;he++)R(O.location+he,oe/O.locationSize,Fe,K,ie*Ne,(Re+oe/O.locationSize*he)*Ne,Z)}else{if(W.isInstancedBufferAttribute){for(let q=0;q<O.locationSize;q++)p(O.location+q,W.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let q=0;q<O.locationSize;q++)f(O.location+q);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let q=0;q<O.locationSize;q++)R(O.location+q,oe/O.locationSize,Fe,K,oe*Ne,oe/O.locationSize*q*Ne,Z)}}else if(j!==void 0){let K=j[ne];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}C()}function E(){w();for(let I in n){let U=n[I];for(let G in U){let D=U[G];for(let X in D){let $=D[X];for(let j in $)u($[j].object),delete $[j];delete D[X]}}delete n[I]}}function v(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let G in U){let D=U[G];for(let X in D){let $=D[X];for(let j in $)u($[j].object),delete $[j];delete D[X]}}delete n[I.id]}function M(I){for(let U in n){let G=n[U];for(let D in G){let X=G[D];if(X[I.id]===void 0)continue;let $=X[I.id];for(let j in $)u($[j].object),delete $[j];delete X[I.id]}}}function x(I){for(let U in n){let G=n[U],D=I.isInstancedMesh===!0?I.id:0,X=G[D];if(X!==void 0){for(let $ in X){let j=X[$];for(let ne in j)u(j[ne].object),delete j[ne];delete X[$]}delete G[D],Object.keys(G).length===0&&delete n[U]}}}function w(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:x,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:f,disableUnusedAttributes:C}}function Jm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Km(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==ln&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let x=M===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Zt&&M!==on&&!x&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:v}}function $m(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qt,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,S=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let C=r?0:n,R=C*4,y=p.clippingState||null;l.value=y,y=u(g,h,R,m);for(let E=0;E!==R;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){let S=d!==null?d.length:0,f=null;if(S!==0){if(f=l.value,g!==!0||f===null){let p=m+S*4,C=h.matrixWorldInverse;a.getNormalMatrix(C),(f===null||f.length<p)&&(f=new Float32Array(p));for(let R=0,y=m;R!==S;++R,y+=4)o.copy(d[R]).applyMatrix4(C,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,f}}var cs=4,jm=6,Qm=20,eg=256,cr=new ns,Zh=new ze,jl=null,Ql=0,ec=0,tc=!1,tg=new F,bi=new F,Lo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=tg}=r;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:xn,format:ln,colorSpace:As,depthBuffer:!1},s=Jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ng(r)),this._blurMaterial=sg(r,e,t),this._ggxMaterial=ig(r,e,t)}return s}_compileMaterial(e){let t=new Lt(new Bt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,m=d.toneMapping;d.getClearColor(Zh),d.toneMapping=gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new ei,new jn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,f=S.material,p=!1,C=e.background;C?C.isColor&&(f.color.copy(C),e.background=null,p=!0):(f.color.copy(Zh),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));let E=this._cubeSize;ls(s,y*E,R>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(S,l),d.render(e,l)}d.toneMapping=m,d.autoClear=h,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===oi||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,cr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,m=d*h,{_lodMax:g}=this,S=this._sizeLods[n],f=3*S*(n>g-cs?n-g+cs:0),p=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,ls(r,f,p,3*S,2*S),s.setRenderTarget(r),s.render(a,cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ls(e,f,p,3*S,2*S),s.setRenderTarget(e),s.render(a,cr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-cs?s-this._lodMax+cs:0),h=4*(this._cubeSize-u);ls(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(l,cr)}};function ng(i){let e=[],t=[],n=i,s=i-cs+1+jm;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,m=3,g=new Float32Array(m*h*d),S=new Float32Array(m*h*d);for(let p=0;p<d;p++){let C=p%3*2/3-1,R=p>2?0:-1,y=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];g.set(y,m*h*p);for(let E=0;E<h;E++){let v=u[E*2]*2-1,M=u[E*2+1]*2-1;p===0?bi.set(1,M,v):p===1?bi.set(-v,1,-M):p===2?bi.set(-v,M,1):p===3?bi.set(-1,M,-v):p===4?bi.set(-v,-1,M):bi.set(v,M,-1),bi.toArray(S,(p*h+E)*m)}}let f=new Bt;f.setAttribute("position",new Yt(g,m)),f.setAttribute("outputDirection",new Yt(S,m)),t.push(new Lt(f,null)),n>cs&&n--}return{lodMeshes:t,sizeLods:e}}function Jh(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ig(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function sg(i,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Kh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $h(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Do=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:wn});r.uniforms.tEquirect.value=t;let o=new Lt(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Dt),new Ba(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function rg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,m=!1){return h==null?null:m?o(h):r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===za||m===Va)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let S=new Do(g.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let m=h.mapping,g=m===za||m===Va,S=m===oi||m===yi;if(g||S){let f=t.get(h),p=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lo(i)),f=g?n.fromEquirectangular(h,f):n.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),f.texture;if(f!==void 0)return f.texture;{let C=h.image;return g&&C&&C.height>0||S&&C&&l(C)?(n===null&&(n=new Lo(i)),f=g?n.fromEquirectangular(h):n.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,t.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function a(h,m){return m===za?h.mapping=oi:m===Va&&(h.mapping=yi),h}function l(h){let m=0,g=6;for(let S=0;S<g;S++)h[S]!==void 0&&m++;return m===g}function c(h){let m=h.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function u(h){let m=h.target;m.removeEventListener("dispose",u);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ag(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gi("WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let m in h)e.update(h[m],i.ARRAY_BUFFER)}function c(d){let h=[],m=d.index,g=d.attributes.position,S=0;if(g===void 0)return;if(m!==null){let C=m.array;S=m.version;for(let R=0,y=C.length;R<y;R+=3){let E=C[R+0],v=C[R+1],M=C[R+2];h.push(E,v,v,M,M,E)}}else{let C=g.array;S=g.version;for(let R=0,y=C.length/3-1;R<y;R+=3){let E=R+0,v=R+1,M=R+2;h.push(E,v,v,M,M,E)}}let f=new(g.count>=65535?Us:Ns)(h,1);f.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,f)}function u(d){let h=r.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function c(d,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,d*o,m),t.update(h,n,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,m);let S=0;for(let f=0;f<m;f++)S+=h[f];t.update(S,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let w=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],R=0;m===!0&&(R=1),g===!0&&(R=2),S===!0&&(R=3);let y=a.attributes.position.count*R,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let v=new Float32Array(y*E*4*d),M=new Is(v,y,E,d);M.type=on,M.needsUpdate=!0;let x=R*4;for(let A=0;A<d;A++){let I=f[A],U=p[A],G=C[A],D=y*E*4*A;for(let X=0;X<I.count;X++){let $=X*x;m===!0&&(s.fromBufferAttribute(I,X),v[D+$+0]=s.x,v[D+$+1]=s.y,v[D+$+2]=s.z,v[D+$+3]=0),g===!0&&(s.fromBufferAttribute(U,X),v[D+$+4]=s.x,v[D+$+5]=s.y,v[D+$+6]=s.z,v[D+$+7]=0),S===!0&&(s.fromBufferAttribute(G,X),v[D+$+8]=s.x,v[D+$+9]=s.y,v[D+$+10]=s.z,v[D+$+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:M,size:new Le(y,E)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ug(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var dg={[Pl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function fg(i,e,t,n,s,r){let o=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Bt;c.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new St([0,2,0,0,2,0],2));let u=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(c,u),h=new ns(-1,1,1,-1,0,1),m=null,g=null,S=!1,f,p=null,C=[],R=!1;this.setSize=function(y,E){o.setSize(y,E),a!==null&&a.setSize(y,E),l!==null&&l.setSize(y,E);for(let v=0;v<C.length;v++){let M=C[v];M.setSize&&M.setSize(y,E)}},this.setEffects=function(y){C=y,R=C.length>0&&C[0].isRenderPass===!0;let E=o.width,v=o.height;C.length>0&&a===null&&(a=new qt(E,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new qt(E,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let M=0;M<C.length;M++){let x=C[M];x.setSize&&x.setSize(E,v)}},this.begin=function(y,E){if(S||y.toneMapping===gn&&C.length===0)return!1;if(p=E,E!==null){let v=E.width,M=E.height;(o.width!==v||o.height!==M)&&this.setSize(v,M)}return R===!1&&y.setRenderTarget(o),f=y.toneMapping,y.toneMapping=gn,!0},this.hasRenderPass=function(){return R},this.end=function(y,E){y.toneMapping=f,S=!0;let v=o,M=a;for(let x=0;x<C.length;x++){let w=C[x];w.enabled!==!1&&(w.render(y,M,v,E),w.needsSwap!==!1&&(v=M,M=M===a?l:a))}if(m!==y.outputColorSpace||g!==y.toneMapping){m=y.outputColorSpace,g=y.toneMapping,u.defines={},et.getTransfer(m)===ut&&(u.defines.SRGB_TRANSFER="");let x=dg[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(d,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var _u=new Wt,sc=new Qn(1,1),xu=new Is,yu=new xa,vu=new Hs,jh=[],Qh=[],eu=new Float32Array(16),tu=new Float32Array(9),nu=new Float32Array(4);function us(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jh[s];if(r===void 0&&(r=new Float32Array(s),jh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;nu.set(n),i.uniformMatrix2fv(this.addr,!1,nu),At(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;tu.set(n),i.uniformMatrix3fv(this.addr,!1,tu),At(t,n)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;eu.set(n),i.uniformMatrix4fv(this.addr,!1,eu),At(t,n)}}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function wg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=t.isReversedDepthBuffer()?Ro:Co,r=sc):r=_u,t.setTexture2D(e||r,s)}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yu,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||vu,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xu,s)}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return yg;case 35676:return vg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Mg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return Tg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ng(i,e){i.uniform1fv(this.addr,e)}function Ug(i,e){let t=us(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){let t=us(e,this.size,3);i.uniform3fv(this.addr,t)}function Og(i,e){let t=us(e,this.size,4);i.uniform4fv(this.addr,t)}function Bg(i,e){let t=us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kg(i,e){let t=us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zg(i,e){let t=us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vg(i,e){i.uniform1iv(this.addr,e)}function Hg(i,e){i.uniform2iv(this.addr,e)}function Gg(i,e){i.uniform3iv(this.addr,e)}function Wg(i,e){i.uniform4iv(this.addr,e)}function Xg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function qg(i,e){i.uniform3uiv(this.addr,e)}function Zg(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sc:o=_u;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Kg(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yu,r[o])}function $g(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vu,r[o])}function jg(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xu,r[o])}function Qg(i){switch(i){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return Yg;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function iu(i,e){i.seq.push(e),i.map[e.id]=e}function e0(i,e,t){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),o=nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){iu(t,c===void 0?new rc(a,i,e):new ac(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new oc(a),iu(t,d)),t=d}}}var hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);e0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function su(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var t0=37297,n0=0;function i0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ru=new He;function s0(i){et._getMatrix(ru,et.workingColorSpace,i);let e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function au(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+i0(i.getShaderSource(e),a)}else return r}function r0(i,e){let t=s0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var a0={[Pl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[Dl]:"ACESFilmic",[Ul]:"AgX",[Fl]:"Neutral",[Nl]:"Custom"};function o0(i,e){let t=a0[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Io=new F;function l0(){et.getLuminanceCoefficients(Io);let i=Io.x.toFixed(4),e=Io.y.toFixed(4),t=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function h0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ur(i){return i!==""}function ou(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(d0,p0)}var f0=new Map;function p0(i,e){let t=Je[e];if(t===void 0){let n=f0.get(e);if(n!==void 0)t=Je[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lc(t)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(m0,g0)}function g0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var _0={[er]:"SHADOWMAP_TYPE_PCF",[ss]:"SHADOWMAP_TYPE_VSM"};function x0(i){return _0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y0={[oi]:"ENVMAP_TYPE_CUBE",[yi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function v0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":y0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var b0={[yi]:"ENVMAP_MODE_REFRACTION"};function S0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var M0={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[Ah]:"ENVMAP_BLENDING_MIX",[Ch]:"ENVMAP_BLENDING_ADD"};function E0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":M0[i.combine]||"ENVMAP_BLENDING_NONE"}function w0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=x0(t),c=v0(t),u=S0(t),d=E0(t),h=w0(t),m=c0(t),g=h0(r),S=s.createProgram(),f,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(f=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Je.tonemapping_pars_fragment:"",t.toneMapping!==gn?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=lc(o),o=ou(o,t),o=lu(o,t),a=lc(a),a=ou(a,t),a=lu(a,t),o=cu(o),a=cu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=C+f+o,y=C+p+a,E=su(s,s.VERTEX_SHADER,R),v=su(s,s.FRAGMENT_SHADER,y);s.attachShader(S,E),s.attachShader(S,v),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function M(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(E)||"",D=s.getShaderInfoLog(v)||"",X=U.trim(),$=G.trim(),j=D.trim(),ne=!0,O=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,E,v);else{let W=au(s,E,"vertex"),K=au(s,v,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+W+`
`+K)}else X!==""?Oe("WebGLProgram: Program Info Log:",X):($===""||j==="")&&(O=!1);O&&(I.diagnostics={runnable:ne,programLog:X,vertexShader:{log:$,prefix:f},fragmentShader:{log:j,prefix:p}})}s.deleteShader(E),s.deleteShader(v),x=new hs(s,S),w=u0(s,S)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let w;this.getAttributes=function(){return w===void 0&&M(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,t0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=v,this}var A0=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hc(e),t.set(e,n)),n}},hc=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function C0(i){return i===hi||i===or||i===lr}function R0(i,e,t,n,s,r){let o=new Ji,a=new cc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,w,A,I,U,G){let D=I.fog,X=U.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||$,j),O=ne&&ne.mapping===tr?ne.image.height:null,W=m[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=K!==void 0?K.length:0,ae=0;X.morphAttributes.position!==void 0&&(ae=1),X.morphAttributes.normal!==void 0&&(ae=2),X.morphAttributes.color!==void 0&&(ae=3);let ce,Fe,Ne,Z;if(W){let _t=An[W];ce=_t.vertexShader,Fe=_t.fragmentShader}else{ce=x.vertexShader,Fe=x.fragmentShader;let _t=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,_t,ct),Ne=_t.id,Z=ct.id}let q=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Re=U.isInstancedMesh===!0,he=U.isBatchedMesh===!0,Ue=!!x.map,rt=!!x.matcap,qe=!!ne,fe=!!x.aoMap,Be=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,Ge=!!x.normalMap,Xe=!!x.displacementMap,mt=!!x.emissiveMap,Ke=!!x.metalnessMap,je=!!x.roughnessMap,P=x.anisotropy>0,lt=x.clearcoat>0,We=x.dispersion>0,T=x.retroreflectivity>0,_=x.iridescence>0,B=x.sheen>0,k=x.transmission>0,Y=P&&!!x.anisotropyMap,se=lt&&!!x.clearcoatMap,le=lt&&!!x.clearcoatNormalMap,Q=lt&&!!x.clearcoatRoughnessMap,te=_&&!!x.iridescenceMap,ue=_&&!!x.iridescenceThicknessMap,Te=B&&!!x.sheenColorMap,pe=B&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ae=!!x.specularColorMap,De=!!x.specularIntensityMap,Ye=k&&!!x.transmissionMap,N=k&&!!x.thicknessMap,me=!!x.gradientMap,ee=!!x.alphaMap,ge=x.alphaTest>0,ve=!!x.alphaHash,re=!!x.extensions,Ie=gn;x.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Ce={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:Fe,defines:x.defines,customVertexShaderID:Ne,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:he,batchingColor:he&&U._colorsTexture!==null,instancing:Re,instancingColor:Re&&U.instanceColor!==null,instancingMorph:Re&&U.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:rt,envMap:qe,envMapMode:qe&&ne.mapping,envMapCubeUVHeight:O,aoMap:fe,lightMap:Be,bumpMap:Se,normalMap:Ge,displacementMap:Xe,emissiveMap:mt,normalMapObjectSpace:Ge&&x.normalMapType===Ih,normalMapTangentSpace:Ge&&x.normalMapType===Ao,packedNormalMap:Ge&&x.normalMapType===Ao&&C0(x.normalMap.format),metalnessMap:Ke,roughnessMap:je,anisotropy:P,anisotropyMap:Y,clearcoat:lt,clearcoatMap:se,clearcoatNormalMap:le,clearcoatRoughnessMap:Q,dispersion:We,retroreflection:T,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Te,sheenRoughnessMap:pe,specularMap:de,specularColorMap:Ae,specularIntensityMap:De,transmission:k,transmissionMap:Ye,thicknessMap:N,gradientMap:me,opaque:x.transparent===!1&&x.blending===rs&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:ve,combine:x.combine,mapUv:Ue&&g(x.map.channel),aoMapUv:fe&&g(x.aoMap.channel),lightMapUv:Be&&g(x.lightMap.channel),bumpMapUv:Se&&g(x.bumpMap.channel),normalMapUv:Ge&&g(x.normalMap.channel),displacementMapUv:Xe&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:Ke&&g(x.metalnessMap.channel),roughnessMapUv:je&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:de&&g(x.specularMap.channel),specularColorMapUv:Ae&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:Ye&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||P),vertexNormals:!!X.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Ue||ee),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&Ge===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ae,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function f(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)w.push(A),w.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(p(w,x),C(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function C(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let w=m[x.type],A;if(w){let I=An[w];A=Xh.clone(I.uniforms)}else A=x.uniforms;return A}function y(x,w){let A=u.get(w);return A!==void 0?++A.usedTimes:(A=new T0(i,w,x,s),c.push(A),u.set(w,A)),A}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function M(){a.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:R,acquireProgram:y,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:M}}function P0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function du(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function a(h,m,g,S,f,p){let C=i[e];return C===void 0?(C={id:h.id,object:h,geometry:m,material:g,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:f,group:p},i[e]=C):(C.id=h.id,C.object=h,C.geometry=m,C.material=g,C.materialVariant=o(h),C.groupOrder=S,C.renderOrder=h.renderOrder,C.z=f,C.group=p),e++,C}function l(h,m,g,S,f,p,C){C.reversedDepth===!0&&(f=-f);let R=a(h,m,g,S,f,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(h,m,g,S,f,p){let C=a(h,m,g,S,f,p);g.transmission>0?n.unshift(C):g.transparent===!0?s.unshift(C):t.unshift(C)}function u(h,m){t.length>1&&t.sort(h||I0),n.length>1&&n.sort(m||uu),s.length>1&&s.sort(m||uu)}function d(){for(let h=e,m=i.length;h<m;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function L0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new du,i.set(n,[o])):s>=r.length?(o=new du,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function N0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i){let e=new D0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new at,o=new at;function a(c){let u=0,d=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,S=0,f=0,p=0,C=0,R=0,y=0,E=0,v=0,M=0,x=0,w=0,A=0;c.sort(F0);for(let U=0,G=c.length;U<G;U++){let D=c[U],X=D.color,$=D.intensity,j=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=X.r*$,d+=X.g*$,h+=X.b*$;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],$);A++}else if(D.isSunLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,K=t.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=ne;let oe=W.getViewportCount();for(let ae=0;ae<oe;ae++)n.sunShadowMatrix[S+ae]=W.getMatrix(ae),n.sunShadowCascade[S+ae]=W._cascadeData[ae];S+=oe,g++}n.sun[m]=O,m++}else if(D.isDirectionalLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,K=t.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=O,f++}else if(D.isSpotLight){let O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(X).multiplyScalar($),O.distance=j,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[C]=O;let W=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,W.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[C]=W.matrix,D.castShadow){let K=t.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.spotShadow[C]=K,n.spotShadowMap[C]=ne,M++}C++}else if(D.isRectAreaLight){let O=e.get(D);O.color.copy(X).multiplyScalar($),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=O,R++}else if(D.isPointLight){let O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let W=D.shadow,K=t.get(D);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=ne,n.pointShadowMatrix[p]=D.shadow.matrix,v++}n.point[p]=O,p++}else if(D.isHemisphereLight){let O=e.get(D);O.skyColor.copy(D.color).multiplyScalar($),O.groundColor.copy(D.groundColor).multiplyScalar($),n.hemi[y]=O,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.sunLength!==m||I.directionalLength!==f||I.pointLength!==p||I.spotLength!==C||I.rectAreaLength!==R||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==v||I.numSpotShadows!==M||I.numSpotMaps!==x||I.numLightProbes!==A)&&(n.sun.length=m,n.directional.length=f,n.spot.length=C,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.sunLength=m,I.directionalLength=f,I.pointLength=p,I.spotLength=C,I.rectAreaLength=R,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=v,I.numSpotShadows=M,I.numSpotMaps=x,I.numLightProbes=A,n.version=U0++)}function l(c,u){let d=0,h=0,m=0,g=0,S=0,f=0,p=u.matrixWorldInverse;for(let C=0,R=c.length;C<R;C++){let y=c[C];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(y.isPointLight){let E=n.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){let E=n.hemi[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),f++}}}return{setup:a,setupView:l,state:n}}function fu(i){let e=new O0(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function B0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new fu(i),e.set(s,[a])):r>=o.length?(a=new fu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`,V0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],H0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],pu=new at,hr=new F,ic=new F;function G0(i,e,t){let n=new ji,s=new Le,r=new Le,o=new bt,a=new wa,l=new Ta,c={},u=t.maxTextureSize,d={[ai]:Xt,[Xt]:ai,[an]:an},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:k0,fragmentShader:z0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Lt(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let p=this.type;this.render=function(v,M,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;this.type===lh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);let w=i.getRenderTarget(),A=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(wn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==this.type;G&&M.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=v.length;D<X;D++){let $=v[D],j=$.shadow;if(j===void 0){Oe("WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ne=j.getFrameExtents();s.multiply(ne),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,j.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=O,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ss){if($.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new qt(s.x,s.y,{format:hi,type:xn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),j.map.texture.name=$.name+".shadowMap",j.map.depthTexture=new Qn(s.x,s.y,on),j.map.depthTexture.name=$.name+".shadowMapDepth",j.map.depthTexture.format=Mn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt}else $.isPointLight?(j.map=new Do(s.x),j.map.depthTexture=new Ma(s.x,_n)):(j.map=new qt(s.x,s.y),j.map.depthTexture=new Qn(s.x,s.y,_n)),j.map.depthTexture.name=$.name+".shadowMap",j.map.depthTexture.format=Mn,this.type===er?(j.map.depthTexture.compareFunction=O?Ro:Co,j.map.depthTexture.minFilter=Dt,j.map.depthTexture.magFilter=Dt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Pt,j.map.depthTexture.magFilter=Pt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let W=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();$.isPointLight!==!0&&j.updateMatrices($,x);for(let K=0;K<W;K++){let oe=j.getCamera(K);if($.isPointLight){let ae=j.camera,ce=j.matrix,Fe=$.distance||ae.far;Fe!==ae.far&&(ae.far=Fe,ae.updateProjectionMatrix()),hr.setFromMatrixPosition($.matrixWorld),ae.position.copy(hr),ic.copy(ae.position),ic.add(V0[K]),ae.up.copy(H0[K]),ae.lookAt(ic),ae.updateMatrixWorld(),ce.makeTranslation(-hr.x,-hr.y,-hr.z),pu.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),j._frustum.setFromProjectionMatrix(pu,ae.coordinateSystem,ae.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,K),i.clear();else{K===0&&(i.setRenderTarget(j.map),i.clear());let ae=j.getViewport(K);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),U.viewport(o)}n=j.getFrustum(K),y(M,x,oe,$,this.type)}j.isPointLightShadow!==!0&&this.type===ss&&C(j,x),j.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(w,A,I)};function C(v,M){let x=e.update(S);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null?v.mapPass=new qt(s.x,s.y,{format:hi,type:xn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(M,null,x,h,S,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value.set(v.map.width,v.map.height),m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(M,null,x,m,S,null)}function R(v,M,x,w){let A=null,I=x.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)A=I;else if(A=x.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let U=A.uuid,G=M.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let X=D[G];X===void 0&&(X=A.clone(),D[G]=X,M.addEventListener("dispose",E)),A=X}if(A.visible=M.visible,A.wireframe=M.wireframe,w===ss?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:d[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let U=i.properties.get(A);U.light=x}return A}function y(v,M,x,w,A){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&A===ss)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,v.matrixWorld);let G=e.update(v),D=v.material;if(Array.isArray(D)){let X=G.groups;for(let $=0,j=X.length;$<j;$++){let ne=X[$],O=D[ne.materialIndex];if(O&&O.visible){let W=R(v,O,w,A);v.onBeforeShadow(i,v,M,x,G,W,ne),i.renderBufferDirect(x,null,G,W,v,ne),v.onAfterShadow(i,v,M,x,G,W,ne)}}}else if(D.visible){let X=R(v,D,w,A);v.onBeforeShadow(i,v,M,x,G,X,null),i.renderBufferDirect(x,null,G,X,v,null),v.onAfterShadow(i,v,M,x,G,X,null)}}let U=v.children;for(let G=0,D=U.length;G<D;G++)y(U[G],M,x,w,A)}function E(v){v.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],A=v.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function W0(i,e){function t(){let N=!1,me=new bt,ee=null,ge=new bt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!N&&(i.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){N=ve},setClear:function(ve,re,Ie,Ce,_t){_t===!0&&(ve*=Ce,re*=Ce,Ie*=Ce),me.set(ve,re,Ie,Ce),ge.equals(me)===!1&&(i.clearColor(ve,re,Ie,Ce),ge.copy(me))},reset:function(){N=!1,ee=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,me=!1,ee=null,ge=null,ve=null;return{setReversed:function(re){if(me!==re){let Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),me=re;let Ce=ve;ve=null,this.setClear(Ce)}},getReversed:function(){return me},setTest:function(re){re?q(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(re){ee!==re&&!N&&(i.depthMask(re),ee=re)},setFunc:function(re){if(me&&(re=Hh[re]),ge!==re){switch(re){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=re}},setLocked:function(re){N=re},setClear:function(re){ve!==re&&(ve=re,me&&(re=1-re),i.clearDepth(re))},reset:function(){N=!1,ee=null,ge=null,ve=null,me=!1}}}function s(){let N=!1,me=null,ee=null,ge=null,ve=null,re=null,Ie=null,Ce=null,_t=null;return{setTest:function(ct){N||(ct?q(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(ct){me!==ct&&!N&&(i.stencilMask(ct),me=ct)},setFunc:function(ct,cn,yn){(ee!==ct||ge!==cn||ve!==yn)&&(i.stencilFunc(ct,cn,yn),ee=ct,ge=cn,ve=yn)},setOp:function(ct,cn,yn){(re!==ct||Ie!==cn||Ce!==yn)&&(i.stencilOp(ct,cn,yn),re=ct,Ie=cn,Ce=yn)},setLocked:function(ct){N=ct},setClear:function(ct){_t!==ct&&(i.clearStencil(ct),_t=ct)},reset:function(){N=!1,me=null,ee=null,ge=null,ve=null,re=null,Ie=null,Ce=null,_t=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},m=new WeakMap,g=[],S=null,f=!1,p=null,C=null,R=null,y=null,E=null,v=null,M=null,x=new ze(0,0,0),w=0,A=!1,I=null,U=null,G=null,D=null,X=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(O)[1]),j=ne>=1):O.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),j=ne>=2);let W=null,K={},oe=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ce=new bt().fromArray(oe),Fe=new bt().fromArray(ae);function Ne(N,me,ee,ge){let ve=new Uint8Array(4),re=i.createTexture();i.bindTexture(N,re),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<ee;Ie++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return re}let Z={};Z[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Wi),Se(!1),Ge(Ml),q(i.CULL_FACE),fe(wn);function q(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ie(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Re(N,me){return h[N]!==me?(i.bindFramebuffer(N,me),h[N]=me,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function he(N,me){let ee=g,ge=!1;if(N){ee=m.get(me),ee===void 0&&(ee=[],m.set(me,ee));let ve=N.textures;if(ee.length!==ve.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ie=ve.length;re<Ie;re++)ee[re]=i.COLOR_ATTACHMENT0+re;ee.length=ve.length,ge=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ee)}function Ue(N){return S!==N?(i.useProgram(N),S=N,!0):!1}let rt={[xi]:i.FUNC_ADD,[hh]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};rt[dh]=i.MIN,rt[fh]=i.MAX;let qe={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Sh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[_h]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Eh]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(N,me,ee,ge,ve,re,Ie,Ce,_t,ct){if(N===wn){f===!0&&(ie(i.BLEND),f=!1);return}if(f===!1&&(q(i.BLEND),f=!0),N!==ch){if(N!==p||ct!==A){if((C!==xi||E!==xi)&&(i.blendEquation(i.FUNC_ADD),C=xi,E=xi),ct)switch(N){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",N);break}else switch(N){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wl:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",N);break}R=null,y=null,v=null,M=null,x.set(0,0,0),w=0,p=N,A=ct}return}ve=ve||me,re=re||ee,Ie=Ie||ge,(me!==C||ve!==E)&&(i.blendEquationSeparate(rt[me],rt[ve]),C=me,E=ve),(ee!==R||ge!==y||re!==v||Ie!==M)&&(i.blendFuncSeparate(qe[ee],qe[ge],qe[re],qe[Ie]),R=ee,y=ge,v=re,M=Ie),(Ce.equals(x)===!1||_t!==w)&&(i.blendColor(Ce.r,Ce.g,Ce.b,_t),x.copy(Ce),w=_t),p=N,A=!1}function Be(N,me){N.side===an?ie(i.CULL_FACE):q(i.CULL_FACE);let ee=N.side===Xt;me&&(ee=!ee),Se(ee),N.blending===rs&&N.transparent===!1?fe(wn):fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function Ge(N){N!==ah?(q(i.CULL_FACE),N!==U&&(N===Ml?i.cullFace(i.BACK):N===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),U=N}function Xe(N){N!==G&&(j&&i.lineWidth(N),G=N)}function mt(N,me,ee){N?(q(i.POLYGON_OFFSET_FILL),(D!==me||X!==ee)&&(D=me,X=ee,o.getReversed()&&(me=-me),i.polygonOffset(me,ee))):ie(i.POLYGON_OFFSET_FILL)}function Ke(N){N?q(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function je(N){N===void 0&&(N=i.TEXTURE0+$-1),W!==N&&(i.activeTexture(N),W=N)}function P(N,me,ee){ee===void 0&&(W===null?ee=i.TEXTURE0+$-1:ee=W);let ge=K[ee];ge===void 0&&(ge={type:void 0,texture:void 0},K[ee]=ge),(ge.type!==N||ge.texture!==me)&&(W!==ee&&(i.activeTexture(ee),W=ee),i.bindTexture(N,me||Z[N]),ge.type=N,ge.texture=me)}function lt(){let N=K[W];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function B(){try{i.texSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function le(){try{i.texStorage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function Q(){try{i.texImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function te(){try{i.texImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function ue(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function Te(N,me){d[N]!==me&&(i.pixelStorei(N,me),d[N]=me)}function pe(N){ce.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function de(N){Fe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Fe.copy(N))}function Ae(N,me){let ee=c.get(me);ee===void 0&&(ee=new WeakMap,c.set(me,ee));let ge=ee.get(N);ge===void 0&&(ge=i.getUniformBlockIndex(me,N.name),ee.set(N,ge))}function De(N,me){let ge=c.get(me).get(N);l.get(me)!==ge&&(i.uniformBlockBinding(me,ge,N.__bindingPointIndex),l.set(me,ge))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},W=null,K={},h={},m=new WeakMap,g=[],S=null,f=!1,p=null,C=null,R=null,y=null,E=null,v=null,M=null,x=new ze(0,0,0),w=0,A=!1,I=null,U=null,G=null,D=null,X=null,ce.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ie,bindFramebuffer:Re,drawBuffers:he,useProgram:Ue,setBlending:fe,setMaterial:Be,setFlipSided:Se,setCullFace:Ge,setLineWidth:Xe,setPolygonOffset:mt,setScissorTest:Ke,activeTexture:je,bindTexture:P,unbindTexture:lt,compressedTexImage2D:We,compressedTexImage3D:T,texImage2D:Q,texImage3D:te,pixelStorei:Te,getParameter:ue,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:se,texStorage3D:le,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:pe,viewport:de,reset:Ye}}function X0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,d=new Set,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,_){return g?new OffscreenCanvas(T,_):Rs("canvas")}function f(T,_,B){let k=1,Y=We(T);if((Y.width>B||Y.height>B)&&(k=B/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let se=Math.floor(k*Y.width),le=Math.floor(k*Y.height);h===void 0&&(h=S(se,le));let Q=_?S(se,le):h;return Q.width=se,Q.height=le,Q.getContext("2d").drawImage(T,0,0,se,le),Oe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+le+")."),Q}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function p(T){return T.generateMipmaps}function C(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,_,B,k,Y,se=!1){if(T!==null){if(i[T]!==void 0)return i[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le;k&&(le=e.get("EXT_texture_norm16"),le||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8),B===i.UNSIGNED_SHORT&&le&&(Q=le.R16_EXT),B===i.SHORT&&le&&(Q=le.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8),B===i.UNSIGNED_SHORT&&le&&(Q=le.RG16_EXT),B===i.SHORT&&le&&(Q=le.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&le&&(Q=le.RGB16_EXT),B===i.SHORT&&le&&(Q=le.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let te=se?Cs:et.getTransfer(Y);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=te===ut?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&le&&(Q=le.RGBA16_EXT),B===i.SHORT&&le&&(Q=le.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(T,_){let B;return T?_===null||_===_n||_===os?B=i.DEPTH24_STENCIL8:_===on?B=i.DEPTH32F_STENCIL8:_===as&&(B=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===_n||_===os?B=i.DEPTH_COMPONENT24:_===on?B=i.DEPTH_COMPONENT32F:_===as&&(B=i.DEPTH_COMPONENT16),B}function v(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function M(T){let _=T.target;_.removeEventListener("dispose",M),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(T){let _=T.target;_.removeEventListener("dispose",x),I(_)}function w(T){let _=n.get(T);if(_.__webglInit===void 0)return;let B=T.source,k=m.get(B);if(k){let Y=k[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(T),Object.keys(k).length===0&&m.delete(B)}n.remove(T)}function A(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let B=T.source,k=m.get(B);delete k[_.__cacheKey],o.memory.textures--}function I(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Y=0;Y<_.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let k=0,Y=B.length;k<Y;k++){let se=n.get(B[k]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(B[k])}n.remove(T)}let U=0;function G(){U=0}function D(){return U}function X(T){U=T}function $(){let T=U;return T>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function j(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function ne(T,_){let B=n.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let k=T.image;if(k===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function O(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ie(B,T,_);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function W(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ie(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function K(T,_){let B=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){Re(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let oe={[fa]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},ae={[Pt]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Ha]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},ce={[Dh]:i.NEVER,[Bh]:i.ALWAYS,[Nh]:i.LESS,[Co]:i.LEQUAL,[Uh]:i.EQUAL,[Ro]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function Fe(T,_){if(_.type===on&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===Ha||_.magFilter===nr||_.magFilter===li||_.minFilter===Dt||_.minFilter===Ha||_.minFilter===nr||_.minFilter===li)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pt||_.minFilter!==nr&&_.minFilter!==li||_.type===on&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ne(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",M));let k=_.source,Y=m.get(k);Y===void 0&&(Y={},m.set(k,Y));let se=j(_);if(se!==T.__cacheKey){Y[se]===void 0&&(Y[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[se].usedTimes++;let le=Y[T.__cacheKey];le!==void 0&&(Y[T.__cacheKey].usedTimes--,le.usedTimes===0&&A(_)),T.__cacheKey=se,T.__webglTexture=Y[se].texture}return B}function Z(T,_,B){return Math.floor(Math.floor(T/B)/_)}function q(T,_,B,k){let se=T.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,k,_.data);else{se.sort((Te,pe)=>Te.start-pe.start);let le=0;for(let Te=1;Te<se.length;Te++){let pe=se[le],de=se[Te],Ae=pe.start+pe.count,De=Z(de.start,_.width,4),Ye=Z(pe.start,_.width,4);de.start<=Ae+1&&De===Ye&&Z(de.start+de.count-1,_.width,4)===De?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++le,se[le]=de)}se.length=le+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Te=0,pe=se.length;Te<pe;Te++){let de=se[Te],Ae=Math.floor(de.start/4),De=Math.ceil(de.count/4),Ye=Ae%_.width,N=Math.floor(Ae/_.width),me=De,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ye,N,me,ee,B,k,_.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function ie(T,_,B){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let Y=Ne(T,_),se=_.source;t.bindTexture(k,T.__webglTexture,i.TEXTURE0+B);let le=n.get(se);if(se.version!==le.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=et.getPrimaries(et.workingColorSpace),ge=_.colorSpace===Vn?null:et.getPrimaries(_.colorSpace),ve=_.colorSpace===Vn||ee===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let te=f(_.image,!1,s.maxTextureSize);te=lt(_,te);let ue=r.convert(_.format,_.colorSpace),Te=r.convert(_.type),pe=y(_.internalFormat,ue,Te,_.normalized,_.colorSpace,_.isVideoTexture);Fe(k,_);let de,Ae=_.mipmaps,De=_.isVideoTexture!==!0,Ye=le.__version===void 0||Y===!0,N=se.dataReady,me=v(_,te);if(_.isDepthTexture)pe=E(_.format===ci,_.type),Ye&&(De?t.texStorage2D(i.TEXTURE_2D,1,pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Te,null));else if(_.isDataTexture)if(Ae.length>0){De&&Ye&&t.texStorage2D(i.TEXTURE_2D,me,pe,Ae[0].width,Ae[0].height);for(let ee=0,ge=Ae.length;ee<ge;ee++)de=Ae[ee],De?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(i.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Te,de.data);_.generateMipmaps=!1}else De?(Ye&&t.texStorage2D(i.TEXTURE_2D,me,pe,te.width,te.height),N&&q(_,te,ue,Te)):t.texImage2D(i.TEXTURE_2D,0,pe,te.width,te.height,0,ue,Te,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,Ae[0].width,Ae[0].height,te.depth);for(let ee=0,ge=Ae.length;ee<ge;ee++)if(de=Ae[ee],_.format!==ln)if(ue!==null)if(De){if(N)if(_.layerUpdates.size>0){let ve=$l(de.width,de.height,_.format,_.type);for(let re of _.layerUpdates){let Ie=de.data.subarray(re*ve/de.data.BYTES_PER_ELEMENT,(re+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,re,de.width,de.height,1,ue,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ue,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,de.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,de.width,de.height,te.depth,ue,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,pe,de.width,de.height,te.depth,0,ue,Te,de.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{De&&Ye&&t.texStorage2D(i.TEXTURE_2D,me,pe,Ae[0].width,Ae[0].height);for(let ee=0,ge=Ae.length;ee<ge;ee++)de=Ae[ee],_.format!==ln?ue!==null?De?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,pe,de.width,de.height,0,de.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de.width,de.height,ue,Te,de.data):t.texImage2D(i.TEXTURE_2D,ee,pe,de.width,de.height,0,ue,Te,de.data)}else if(_.isDataArrayTexture)if(De){if(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,pe,te.width,te.height,te.depth),N)if(_.layerUpdates.size>0){let ee=$l(te.width,te.height,_.format,_.type);for(let ge of _.layerUpdates){let ve=te.data.subarray(ge*ee/te.data.BYTES_PER_ELEMENT,(ge+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,te.width,te.height,1,ue,Te,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Te,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,te.width,te.height,te.depth,0,ue,Te,te.data);else if(_.isData3DTexture)De?(Ye&&t.texStorage3D(i.TEXTURE_3D,me,pe,te.width,te.height,te.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Te,te.data)):t.texImage3D(i.TEXTURE_3D,0,pe,te.width,te.height,te.depth,0,ue,Te,te.data);else if(_.isFramebufferTexture){if(Ye)if(De)t.texStorage2D(i.TEXTURE_2D,me,pe,te.width,te.height);else{let ee=te.width,ge=te.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,pe,ee,ge,0,ue,Te,null),ee>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(_),ee.onpaint=ge=>{let ve=ge.changedElements;for(let re of d)ve.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let ve=i.RGBA,re=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,re,Ie,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(De&&Ye){let ee=We(Ae[0]);t.texStorage2D(i.TEXTURE_2D,me,pe,ee.width,ee.height)}for(let ee=0,ge=Ae.length;ee<ge;ee++)de=Ae[ee],De?N&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,Te,de):t.texImage2D(i.TEXTURE_2D,ee,pe,ue,Te,de);_.generateMipmaps=!1}else if(De){if(Ye){let ee=We(te);t.texStorage2D(i.TEXTURE_2D,me,pe,ee.width,ee.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Te,te)}else t.texImage2D(i.TEXTURE_2D,0,pe,ue,Te,te);p(_)&&C(k),le.__version=se.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Re(T,_,B){if(_.image.length!==6)return;let k=Ne(T,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let se=n.get(Y);if(Y.version!==se.__version||k===!0){t.activeTexture(i.TEXTURE0+B);let le=et.getPrimaries(et.workingColorSpace),Q=_.colorSpace===Vn?null:et.getPrimaries(_.colorSpace),te=_.colorSpace===Vn||le===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let re=0;re<6;re++)!ue&&!Te?pe[re]=f(_.image[re],!0,s.maxCubemapSize):pe[re]=Te?_.image[re].image:_.image[re],pe[re]=lt(_,pe[re]);let de=pe[0],Ae=r.convert(_.format,_.colorSpace),De=r.convert(_.type),Ye=y(_.internalFormat,Ae,De,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,me=se.__version===void 0||k===!0,ee=Y.dataReady,ge=v(_,de);Fe(i.TEXTURE_CUBE_MAP,_);let ve;if(ue){N&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,de.width,de.height);for(let re=0;re<6;re++){ve=pe[re].mipmaps;for(let Ie=0;Ie<ve.length;Ie++){let Ce=ve[Ie];_.format!==ln?Ae!==null?N?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ye,Ce.width,Ce.height,0,Ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,Ce.width,Ce.height,Ae,De,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Ye,Ce.width,Ce.height,0,Ae,De,Ce.data)}}}else{if(ve=_.mipmaps,N&&me){ve.length>0&&ge++;let re=We(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ye,re.width,re.height)}for(let re=0;re<6;re++)if(Te){N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe[re].width,pe[re].height,Ae,De,pe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,pe[re].width,pe[re].height,0,Ae,De,pe[re].data);for(let Ie=0;Ie<ve.length;Ie++){let _t=ve[Ie].image[re].image;N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,_t.width,_t.height,Ae,De,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ye,_t.width,_t.height,0,Ae,De,_t.data)}}else{N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae,De,pe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ye,Ae,De,pe[re]);for(let Ie=0;Ie<ve.length;Ie++){let Ce=ve[Ie];N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Ae,De,Ce.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Ye,Ae,De,Ce.image[re])}}}p(_)&&C(i.TEXTURE_CUBE_MAP),se.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function he(T,_,B,k,Y,se){let le=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),te=y(B.internalFormat,le,Q,B.normalized,B.colorSpace),ue=n.get(_),Te=n.get(B);if(Te.__renderTarget=_,!ue.__hasExternalTextures){let pe=Math.max(1,_.width>>se),de=Math.max(1,_.height>>se);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,se,te,pe,de,_.depth,0,le,Q,null):t.texImage2D(Y,se,te,pe,de,0,le,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,Te.__webglTexture,0,Ke(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let k=_.depthTexture,Y=k&&k.isDepthTexture?k.type:null,se=E(_.stencilBuffer,Y),le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),se,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,T)}else{let k=_.textures;for(let Y=0;Y<k.length;Y++){let se=k[Y],le=r.convert(se.format,se.colorSpace),Q=r.convert(se.type),te=y(se.internalFormat,le,Q,se.normalized,se.colorSpace);je(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke(_),te,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,_,B){let k=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",M)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_.depthTexture);let ue=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type),pe;_.depthTexture.format===Mn?pe=i.DEPTH_COMPONENT24:_.depthTexture.format===ci&&(pe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,_.width,_.height,0,ue,Te,null)}}else ne(_.depthTexture,0);let se=Y.__webglTexture,le=Ke(_),Q=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,te=_.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Mn)je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,se,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,se,0);else if(_.depthTexture.format===ci)je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,se,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(T){let _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=k}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)rt(_.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?rt(_.__webglFramebuffer[0],T,0):rt(_.__webglFramebuffer,T,0)}else if(B){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Ue(_.__webglDepthbuffer[k],T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ue(_.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,_,B){let k=n.get(T);_!==void 0&&he(k.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&qe(T)}function Be(T){let _=T.texture,B=n.get(T),k=n.get(_);T.addEventListener("dispose",x);let Y=T.textures,se=T.isWebGLCubeRenderTarget===!0,le=Y.length>1;if(le||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,o.memory.textures++),se){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let te=0;te<_.mipmaps.length;te++)B.__webglFramebuffer[Q][te]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(le)for(let Q=0,te=Y.length;Q<te;Q++){let ue=n.get(Y[Q]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&je(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<Y.length;Q++){let te=Y[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let ue=r.convert(te.format,te.colorSpace),Te=r.convert(te.type),pe=y(te.internalFormat,ue,Te,te.normalized,te.colorSpace,T.isXRRenderTarget===!0),de=Ke(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,pe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)he(B.__webglFramebuffer[Q][te],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,te);else he(B.__webglFramebuffer[Q],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(_)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let Q=0,te=Y.length;Q<te;Q++){let ue=Y[Q],Te=n.get(ue),pe=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Te.__webglTexture),Fe(pe,ue),he(B.__webglFramebuffer,T,ue,i.COLOR_ATTACHMENT0+Q,pe,0),p(ue)&&C(pe)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,k.__webglTexture),Fe(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)he(B.__webglFramebuffer[te],T,_,i.COLOR_ATTACHMENT0,Q,te);else he(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,Q,0);p(_)&&C(Q),t.unbindTexture()}T.depthBuffer&&qe(T)}function Se(T){let _=T.textures;for(let B=0,k=_.length;B<k;B++){let Y=_[B];if(p(Y)){let se=R(T),le=n.get(Y).__webglTexture;t.bindTexture(se,le),C(se),t.unbindTexture()}}}let Ge=[],Xe=[];function mt(T){if(T.samples>0){if(je(T)===!1){let _=T.textures,B=T.width,k=T.height,Y=i.COLOR_BUFFER_BIT,se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(T),Q=_.length>1;if(Q)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let te=T.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);let Te=n.get(_[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,B,k,0,0,B,k,Y,i.NEAREST),l===!0&&(Ge.length=0,Xe.length=0,Ge.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Ge.push(se),Xe.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);let Te=n.get(_[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ke(T){return Math.min(s.maxSamples,T.samples)}function je(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(T){let _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function lt(T,_){let B=T.colorSpace,k=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==As&&B!==Vn&&(et.getTransfer(B)===ut?(k!==ln||Y!==Zt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",B)),_}function We(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=fe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Y0(i,e){function t(n,s=Vn){let r,o=et.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===kl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Hl)return i.ALPHA;if(n===Gl)return i.RGB;if(n===ln)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===$a||n===ja||n===Qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===or||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===to)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===io)return r.COMPRESSED_R11_EAC;if(n===so)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===So||n===Mo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eo||n===wo||n===lr||n===To)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:q0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null,S=typeof XRWebGLBinding<"u",f=new uc,p={},C=t.getContextAttributes(),R=null,y=null,E=[],v=[],M=new Le,x=null,w=null,A=new Ot;A.viewport=new bt;let I=new Ot;I.viewport=new bt;let U=[A,I],G=new ka,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=E[Z];return q===void 0&&(q=new Ki,E[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=E[Z];return q===void 0&&(q=new Ki,E[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=E[Z];return q===void 0&&(q=new Ki,E[Z]=q),q.getHandSpace()};function $(Z){let q=v.indexOf(Z.inputSource);if(q===-1)return;let ie=E[q];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,c||o),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<E.length;Z++){let q=v[Z];q!==null&&(v[Z]=null,E[Z].disconnect(q))}D=null,X=null,f.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(R),m=null,h=null,d=null,s=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(M.width,M.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ne),C.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(M),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Re=null,he=null;C.depth&&(he=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=C.stencil?ci:Mn,Re=C.stencil?os:_n);let Ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ue),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new qt(h.textureWidth,h.textureHeight,{format:ln,type:Zt,depthTexture:new Qn(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qt(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(Z){for(let q=0;q<Z.removed.length;q++){let ie=Z.removed[q],Re=v.indexOf(ie);Re>=0&&(v[Re]=null,E[Re].disconnect(ie))}for(let q=0;q<Z.added.length;q++){let ie=Z.added[q],Re=v.indexOf(ie);if(Re===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=v.length){v.push(ie),Re=Ue;break}else if(v[Ue]===null){v[Ue]=ie,Re=Ue;break}if(Re===-1)break}let he=E[Re];he&&he.connect(ie)}}let O=new F,W=new F;function K(Z,q,ie){O.setFromMatrixPosition(q.matrixWorld),W.setFromMatrixPosition(ie.matrixWorld);let Re=O.distanceTo(W),he=q.projectionMatrix.elements,Ue=ie.projectionMatrix.elements,rt=he[14]/(he[10]-1),qe=he[14]/(he[10]+1),fe=(he[9]+1)/he[5],Be=(he[9]-1)/he[5],Se=(he[8]-1)/he[0],Ge=(Ue[8]+1)/Ue[0],Xe=rt*Se,mt=rt*Ge,Ke=Re/(-Se+Ge),je=Ke*-Se;if(q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(je),Z.translateZ(Ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),he[10]===-1)Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let P=rt+Ke,lt=qe+Ke,We=Xe-je,T=mt+(Re-je),_=fe*qe/lt*P,B=Be*qe/lt*P;Z.projectionMatrix.makePerspective(We,T,_,B,P,lt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let q=Z.near,ie=Z.far;f.texture!==null&&(f.depthNear>0&&(q=f.depthNear),f.depthFar>0&&(ie=f.depthFar)),G.near=I.near=A.near=q,G.far=I.far=A.far=ie,(D!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,X=G.far),G.layers.mask=Z.layers.mask|6,A.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let Re=Z.parent,he=G.cameras;oe(G,Re);for(let Ue=0;Ue<he.length;Ue++)oe(he[Ue],Re);he.length===2?K(G,A,I):G.projectionMatrix.copy(A.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),ae(Z,G,Re)};function ae(Z,q,ie){ie===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let ce=null;function Fe(Z,q){if(u=q.getViewerPose(c||o),g=q,u!==null){let ie=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Re=!1;ie.length!==G.cameras.length&&(G.cameras.length=0,Re=!0);for(let qe=0;qe<ie.length;qe++){let fe=ie[qe],Be=null;if(m!==null)Be=m.getViewport(fe);else{let Ge=d.getViewSubImage(h,fe);Be=Ge.viewport,qe===0&&(e.setRenderTargetTextures(y,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(y))}let Se=U[qe];Se===void 0&&(Se=new Ot,Se.layers.enable(qe),Se.viewport=new bt,U[qe]=Se),Se.matrix.fromArray(fe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(fe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Be.x,Be.y,Be.width,Be.height),qe===0&&(G.matrix.copy(Se.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Re===!0&&G.cameras.push(Se)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let qe=d.getDepthInformation(ie[0]);qe&&qe.isValid&&qe.texture&&f.init(qe,s.renderState)}if(he&&he.includes("camera-access")&&S){e.state.unbindTexture(),d=n.getBinding();for(let qe=0;qe<ie.length;qe++){let fe=ie[qe].camera;if(fe){let Be=p[fe];Be||(Be=new Ws,p[fe]=Be);let Se=d.getCameraImage(fe);Be.sourceTexture=Se}}}}for(let ie=0;ie<E.length;ie++){let Re=v[ie],he=E[ie];Re!==null&&he!==void 0&&he.update(Re,q,c||o)}ce&&ce(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let Ne=new mu;Ne.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}},J0=new at,bu=new He;bu.set(-1,0,0,0,1,0,0,0,1);function K0(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Zl(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,C,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),h(f,p),p.isMeshPhysicalMaterial&&m(f,p,y)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),S(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,C,R):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let C=e.get(p),R=C.envMap,y=C.envMapRotation;R&&(f.envMap.value=R,f.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(bu),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,C,R){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*C,f.scale.value=R*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,C){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=C.texture,f.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function S(f,p){let C=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(C.matrixWorld),f.nearDistance.value=C.shadow.camera.near,f.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=s[y.id];v===void 0&&(f(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",C));let M=E.program;n.updateUBOMapping(y,M);let x=e.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let E=d();y.__bindingPointIndex=E;let v=i.createBuffer(),M=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],v=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,w=v.length;x<w;x++){let A=v[x];if(Array.isArray(A))for(let I=0,U=A.length;I<U;I++)m(A[I],x,I,M);else m(A,x,0,M)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,v,M){if(S(y,E,v,M)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let A=0;for(let I=0;I<w.length;I++){let U=w[I],G=p(U);g(U,y.__data,A),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(A+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,E,v){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,v)}function S(y,E,v,M){let x=y.value,w=E+"_"+v;if(M[w]===void 0)return typeof x=="number"||typeof x=="boolean"?M[w]=x:ArrayBuffer.isView(x)?M[w]=x.slice():M[w]=x.clone(),!0;{let A=M[w];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return M[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function f(y){let E=y.uniforms,v=0,M=16;for(let w=0,A=E.length;w<A;w++){let I=Array.isArray(E[w])?E[w]:[E[w]];for(let U=0,G=I.length;U<G;U++){let D=I[U],X=Array.isArray(D.value)?D.value:[D.value];for(let $=0,j=X.length;$<j;$++){let ne=X[$],O=p(ne),W=v%M,K=W%O.boundary,oe=W+K;v+=K,oe!==0&&M-oe<O.storage&&(v+=M-oe),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=O.storage}}}let x=v%M;return x>0&&(v+=M-x),y.__size=v,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",y),E}function C(y){let E=y.target;E.removeEventListener("dispose",C);let v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var j0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Tn=null;function Q0(){return Tn===null&&(Tn=new Bs(j0,16,16,hi,xn),Tn.name="DFG_LUT",Tn.minFilter=Dt,Tn.magFilter=Dt,Tn.wrapS=Sn,Tn.wrapT=Sn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}var No=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:m=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let S=m,f=new Set([Ja,Za,qa]),p=new Set([Zt,_n,as,os,Wa,Xa]),C=new Uint32Array(4),R=new Int32Array(4),y=new F,E=null,v=null,M=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,I=!1,U=null,G=null,D=null,X=null;this._outputColorSpace=jt;let $=0,j=0,ne=null,O=-1,W=null,K=new bt,oe=new bt,ae=null,ce=new ze(0),Fe=0,Ne=t.width,Z=t.height,q=1,ie=null,Re=null,he=new bt(0,0,Ne,Z),Ue=new bt(0,0,Ne,Z),rt=!1,qe=new ji,fe=!1,Be=!1,Se=new at,Ge=new F,Xe=new bt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function je(){return ne===null?q:1}let P=n;function lt(b,L){return t.getContext(b,L)}let We,T,_,B,k,Y,se,le,Q,te,ue,Te,pe,de,Ae,De,Ye,N,me,ee,ge,ve,re;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",cn,!1),P===null){let L="webgl2";if(P=lt(L,b),P===null)throw lt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(b){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),ke("WebGLRenderer: "+b.message),b}function Ie(){We=new ag(P),We.init(),ge=new Y0(P,We),T=new Km(P,We,e,ge),_=new W0(P,We),T.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=P.createFramebuffer(),D=P.createFramebuffer(),X=P.createFramebuffer(),B=new cg(P),k=new P0,Y=new X0(P,We,_,k,T,ge,B),se=new rg(A),le=new uf(P),ve=new Zm(P,le),Q=new og(P,le,B,ve),te=new ug(P,Q,le,ve,B),N=new hg(P,T,Y),Ae=new $m(k),ue=new R0(A,se,We,T,ve,Ae),Te=new K0(A,k),pe=new L0,de=new B0(We),Ye=new qm(A,se,_,te,g,l),De=new G0(A,te,T),re=new $0(P,B,T,_),me=new Jm(P,We,B),ee=new lg(P,We,B),B.programs=ue.programs,A.capabilities=T,A.extensions=We,A.properties=k,A.renderLists=pe,A.shadowMap=De,A.state=_,A.info=B}S!==Zt&&(w=new fg(S,t.width,t.height,a,s,r));let Ce=new dc(A,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(Ne,Z,!1))},this.getSize=function(b){return b.set(Ne,Z)},this.setSize=function(b,L,J=!0){if(Ce.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=b,Z=L,t.width=Math.floor(b*q),t.height=Math.floor(L*q),J===!0&&(t.style.width=b+"px",t.style.height=L+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(Ne*q,Z*q).floor()},this.setDrawingBufferSize=function(b,L,J){Ne=b,Z=L,q=J,t.width=Math.floor(b*J),t.height=Math.floor(L*J),this.setViewport(0,0,b,L)},this.setEffects=function(b){if(S===Zt){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let L=0;L<b.length;L++)if(b[L].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,L,J,V){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,L,J,V),_.viewport(K.copy(he).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,L,J,V){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,L,J,V),_.scissor(oe.copy(Ue).multiplyScalar(q).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){_.setScissorTest(rt=b)},this.setOpaqueSort=function(b){ie=b},this.setTransparentSort=function(b){Re=b},this.getClearColor=function(b){return b.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,J=!0){let V=0;if(b){let H=!1;if(ne!==null){let ye=ne.texture.format;H=f.has(ye)}if(H){let ye=ne.texture.type,Me=p.has(ye),xe=Ye.getClearColor(),Ee=Ye.getClearAlpha(),Pe=xe.r,Ze=xe.g,Qe=xe.b;Me?(C[0]=Pe,C[1]=Ze,C[2]=Qe,C[3]=Ee,P.clearBufferuiv(P.COLOR,0,C)):(R[0]=Pe,R[1]=Ze,R[2]=Qe,R[3]=Ee,P.clearBufferiv(P.COLOR,0,R))}else V|=P.COLOR_BUFFER_BIT}L&&(V|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Ye.dispose(),pe.dispose(),de.dispose(),k.dispose(),se.dispose(),te.dispose(),ve.dispose(),re.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",xc),Ce.removeEventListener("sessionend",yc),ui.stop()};function _t(b){b.preventDefault(),Ps("WebGLRenderer: Context Lost."),I=!0}function ct(){Ps("WebGLRenderer: Context Restored."),I=!1;let b=B.autoReset,L=De.enabled,J=De.autoUpdate,V=De.needsUpdate,H=De.type;Ie(),B.autoReset=b,De.enabled=L,De.autoUpdate=J,De.needsUpdate=V,De.type=H}function cn(b){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yn(b){let L=b.target;L.removeEventListener("dispose",yn),Xu(L)}function Xu(b){Yu(b),k.remove(b)}function Yu(b){let L=k.get(b).programs;L!==void 0&&(L.forEach(function(J){ue.releaseProgram(J)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,J,V,H,ye){L===null&&(L=mt);let Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=Ju(b,L,J,V,H);_.setMaterial(V,Me);let Ee=J.index,Pe=1;if(V.wireframe===!0){if(Ee=Q.getWireframeAttribute(J),Ee===void 0)return;Pe=2}let Ze=J.drawRange,Qe=J.attributes.position,we=Ze.start*Pe,ht=(Ze.start+Ze.count)*Pe;ye!==null&&(we=Math.max(we,ye.start*Pe),ht=Math.min(ht,(ye.start+ye.count)*Pe)),Ee!==null?(we=Math.max(we,0),ht=Math.min(ht,Ee.count)):Qe!=null&&(we=Math.max(we,0),ht=Math.min(ht,Qe.count));let Et=ht-we;if(Et<0||Et===1/0)return;ve.setup(H,V,xe,J,Ee);let yt,gt=me;if(Ee!==null&&(yt=le.get(Ee),gt=ee,gt.setIndex(yt)),H.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*je()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(H.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),_.setLineWidth(Nt*je()),H.isLineSegments?gt.setMode(P.LINES):H.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else H.isPoints?gt.setMode(P.POINTS):H.isSprite&&gt.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(We.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Nt=H._multiDrawStarts,be=H._multiDrawCounts,Vt=H._multiDrawCount,it=Ee?le.get(Ee).bytesPerElement:1,sn=k.get(V).currentProgram.getUniforms();for(let vn=0;vn<Vt;vn++)sn.setValue(P,"_gl_DrawID",vn),gt.render(Nt[vn]/it,be[vn])}else if(H.isInstancedMesh)gt.renderInstances(we,Et,H.count);else if(J.isInstancedBufferGeometry){let Nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,Nt);gt.renderInstances(we,Et,be)}else gt.render(we,Et)};function _c(b,L,J,V){U!==null&&b.isNodeMaterial&&U.setObject(V,b),fe===!0&&Ae.setState(b,J,!1),b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,Ir(b,L,V),b.side=ai,b.needsUpdate=!0,Ir(b,L,V),b.side=an):Ir(b,L,V)}this.compile=function(b,L,J=null){J===null&&(J=b),U!==null&&U.renderStart(b,L,J),v=de.get(J),v.init(L),x.push(v),J.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),b!==J&&b.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights(),U!==null&&U.updateLights(v.state.lightsArray),Be=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,Be),fe===!0&&Ae.setGlobalState(this.clippingPlanes,L),U!==null&&De.render(v.state.shadowsArray,J,L);let V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ye=H.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){let xe=ye[Me];_c(xe,J,L,H),V.add(xe)}else _c(ye,J,L,H),V.add(ye)}),v=x.pop(),U!==null&&U.renderEnd(),V},this.compileAsync=function(b,L,J=null){let V=this.compile(b,L,J);return new Promise(H=>{function ye(){if(V.forEach(function(Me){let Ee=k.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Me)}),V.size===0){H(b);return}setTimeout(ye,10)}We.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Wo=null;function qu(b){Wo&&Wo(b)}function xc(){ui.stop()}function yc(){ui.start()}let ui=new mu;ui.setAnimationLoop(qu),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(b){Wo=b,Ce.setAnimationLoop(b),b===null?ui.stop():ui.start()},Ce.addEventListener("sessionstart",xc),Ce.addEventListener("sessionend",yc),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(b,L);let J=Ce.enabled===!0&&Ce.isPresenting===!0,V=w!==null&&(ne===null||J)&&w.begin(A,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(L),L=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,L,ne),v=de.get(b,x.length),v.init(L),v.state.textureUnits=Y.getTextureUnits(),x.push(v),Se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),qe.setFromProjectionMatrix(Se,pn,L.reversedDepth),Be=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,Be),E=pe.get(b,M.length),E.init(),M.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){let Me=A.xr.getDepthSensingMesh();Me!==null&&Xo(Me,L,-1/0,A.sortObjects)}Xo(b,L,0,A.sortObjects),E.finish(),U!==null&&U.updateLights(v.state.lightsArray),A.sortObjects===!0&&E.sort(ie,Re),Ke=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ke&&Ye.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ae.beginShadows();let H=v.state.shadowsArray;if(De.render(H,b,L),fe===!0&&Ae.endShadows(),(V&&w.hasRenderPass())===!1){let Me=E.opaque,xe=E.transmissive;if(v.setupLights(),L.isArrayCamera){let Ee=L.cameras;if(xe.length>0)for(let Pe=0,Ze=Ee.length;Pe<Ze;Pe++){let Qe=Ee[Pe];bc(Me,xe,b,Qe)}Ke&&Ye.render(b);for(let Pe=0,Ze=Ee.length;Pe<Ze;Pe++){let Qe=Ee[Pe];vc(E,b,Qe,Qe.viewport)}}else xe.length>0&&bc(Me,xe,b,L),Ke&&Ye.render(b),vc(E,b,L)}ne!==null&&j===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),V&&w.end(A),b.isScene===!0&&b.onAfterRender(A,b,L),ve.resetDefaultState(),O=-1,W=null,x.pop(),x.length>0?(v=x[x.length-1],Y.setTextureUnits(v.state.textureUnits),fe===!0&&Ae.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,U!==null&&U.renderEnd()};function Xo(b,L,J,V){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLightProbeGrid)v.pushLightProbeGrid(b);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(qe)){V&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Se);let Me=te.update(b),xe=b.material;xe.visible&&E.push(b,Me,xe,J,Xe.z,null,L)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(qe))){let Me=te.update(b),xe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Xe.copy(Me.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(Se)),Array.isArray(xe)){let Ee=Me.groups;for(let Pe=0,Ze=Ee.length;Pe<Ze;Pe++){let Qe=Ee[Pe],we=xe[Qe.materialIndex];we&&we.visible&&E.push(b,Me,we,J,Xe.z,Qe,L)}}else xe.visible&&E.push(b,Me,xe,J,Xe.z,null,L)}}let ye=b.children;for(let Me=0,xe=ye.length;Me<xe;Me++)Xo(ye[Me],L,J,V)}function vc(b,L,J,V){let{opaque:H,transmissive:ye,transparent:Me}=b;v.setupLightsView(J),fe===!0&&Ae.setGlobalState(A.clippingPlanes,J),V&&_.viewport(K.copy(V)),H.length>0&&Pr(H,L,J),ye.length>0&&Pr(ye,L,J),Me.length>0&&Pr(Me,L,J),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function bc(b,L,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[V.id]===void 0){let we=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[V.id]=new qt(1,1,{generateMipmaps:!0,type:we?xn:Zt,minFilter:li,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let ye=v.state.transmissionRenderTarget[V.id],Me=V.viewport||K;ye.setSize(Me.z*A.transmissionResolutionScale,Me.w*A.transmissionResolutionScale);let xe=A.getRenderTarget(),Ee=A.getActiveCubeFace(),Pe=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(ce),Fe=A.getClearAlpha(),Fe<1&&A.setClearColor(16777215,.5),A.clear(),Ke&&Ye.render(J);let Ze=A.toneMapping;A.toneMapping=gn;let Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),v.setupLightsView(V),fe===!0&&Ae.setGlobalState(A.clippingPlanes,V),Pr(b,J,V),Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye),We.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ht=0,Et=L.length;ht<Et;ht++){let yt=L[ht],{object:gt,geometry:Nt,material:be,group:Vt}=yt;if(be.side===an&&gt.layers.test(V.layers)){let it=be.side;be.side=Xt,be.needsUpdate=!0,Sc(gt,J,V,Nt,be,Vt),be.side=it,be.needsUpdate=!0,we=!0}}we===!0&&(Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye))}A.setRenderTarget(xe,Ee,Pe),A.setClearColor(ce,Fe),Qe!==void 0&&(V.viewport=Qe),A.toneMapping=Ze}function Pr(b,L,J){let V=L.isScene===!0?L.overrideMaterial:null;for(let H=0,ye=b.length;H<ye;H++){let Me=b[H],{object:xe,geometry:Ee,group:Pe}=Me,Ze=Me.material;Ze.allowOverride===!0&&V!==null&&(Ze=V),xe.layers.test(J.layers)&&Sc(xe,L,J,Ee,Ze,Pe)}}function Sc(b,L,J,V,H,ye){U!==null&&H.isNodeMaterial&&U.setObject(b,H),b.onBeforeRender(A,L,J,V,H,ye),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(A,L,J,V,b,ye),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,A.renderBufferDirect(J,L,V,H,b,ye),H.side=ai,H.needsUpdate=!0,A.renderBufferDirect(J,L,V,H,b,ye),H.side=an):A.renderBufferDirect(J,L,V,H,b,ye),b.onAfterRender(A,L,J,V,H,ye)}function Ir(b,L,J){L.isScene!==!0&&(L=mt);let V=k.get(b),H=v.state.lights,ye=v.state.shadowsArray,Me=H.state.version,xe=ue.getParameters(b,H.state,ye,L,J,v.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(xe),Pe=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,V.fog=L.fog;let Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=se.get(b.envMap||V.environment,Ze),V.envMapRotation=V.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",yn),Pe=new Map,V.programs=Pe);let Qe=Pe.get(Ee);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Me)return Ec(b,xe),Qe}else xe.uniforms=ue.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,J,xe),b.onBeforeCompile(xe,A),Qe=ue.acquireProgram(xe,Ee),Pe.set(Ee,Qe),V.uniforms=xe.uniforms;let we=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=Ae.uniform),Ec(b,xe),V.needsLights=$u(b),V.lightsStateVersion=Me,V.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=v.state.lightProbeGridArray.length>0,V.currentProgram=Qe,V.uniformsList=null,Qe}function Mc(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Ec(b,L){let J=k.get(b);J.outputColorSpace=L.outputColorSpace,J.batching=L.batching,J.batchingColor=L.batchingColor,J.instancing=L.instancing,J.instancingColor=L.instancingColor,J.instancingMorph=L.instancingMorph,J.skinning=L.skinning,J.morphTargets=L.morphTargets,J.morphNormals=L.morphNormals,J.morphColors=L.morphColors,J.morphTargetsCount=L.morphTargetsCount,J.numClippingPlanes=L.numClippingPlanes,J.numIntersection=L.numClipIntersection,J.vertexAlphas=L.vertexAlphas,J.vertexTangents=L.vertexTangents,J.toneMapping=L.toneMapping}function Zu(b,L){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(L.matrixWorld);for(let J=0,V=b.length;J<V;J++){let H=b[J];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Ju(b,L,J,V,H){L.isScene!==!0&&(L=mt),Y.resetTextureUnits();let ye=L.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?L.environment:null,xe=ne===null?A.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Pe=se.get(V.envMap||Me,Ee),Ze=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color,yt=gn;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=A.toneMapping);let gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Nt=gt!==void 0?gt.length:0,be=k.get(V),Vt=v.state.lights;if(fe===!0&&(Be===!0||b!==W)){let xt=b===W&&V.id===O;Ae.setState(V,b,xt)}let it=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Vt.state.version||be.outputColorSpace!==xe||H.isBatchedMesh&&be.batching===!1||!H.isBatchedMesh&&be.batching===!0||H.isBatchedMesh&&be.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&be.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&be.instancing===!1||!H.isInstancedMesh&&be.instancing===!0||H.isSkinnedMesh&&be.skinning===!1||!H.isSkinnedMesh&&be.skinning===!0||H.isInstancedMesh&&be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&be.instancingMorph===!1&&H.morphTexture!==null||be.envMap!==Pe||V.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ae.numPlanes||be.numIntersection!==Ae.numIntersection)||be.vertexAlphas!==Ze||be.vertexTangents!==Qe||be.morphTargets!==we||be.morphNormals!==ht||be.morphColors!==Et||be.toneMapping!==yt||be.morphTargetsCount!==Nt||!!be.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,be.__version=V.version);let sn=be.currentProgram;it===!0&&(sn=Ir(V,L,H),U&&V.isNodeMaterial&&U.onUpdateProgram(V,sn,be));let vn=!1,Gn=!1,Mi=!1,pt=sn.getUniforms(),Mt=be.uniforms;if(_.useProgram(sn.program)&&(vn=!0,Gn=!0,Mi=!0),V.id!==O&&(O=V.id,Gn=!0),be.needsLights){let xt=Zu(v.state.lightProbeGridArray,H);be.lightProbeGrid!==xt&&(be.lightProbeGrid=xt,Gn=!0)}if(vn||W!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(P,"projectionMatrix",b.projectionMatrix),pt.setValue(P,"viewMatrix",b.matrixWorldInverse);let Xn=pt.map.cameraPosition;Xn!==void 0&&Xn.setValue(P,Ge.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,Gn=!0,Mi=!0)}if(be.needsLights&&(Vt.state.sunShadowMap.length>0&&pt.setValue(P,"sunShadowMap",Vt.state.sunShadowMap,Y),Vt.state.directionalShadowMap.length>0&&pt.setValue(P,"directionalShadowMap",Vt.state.directionalShadowMap,Y),Vt.state.spotShadowMap.length>0&&pt.setValue(P,"spotShadowMap",Vt.state.spotShadowMap,Y),Vt.state.pointShadowMap.length>0&&pt.setValue(P,"pointShadowMap",Vt.state.pointShadowMap,Y)),H.isSkinnedMesh){pt.setOptional(P,H,"bindMatrix"),pt.setOptional(P,H,"bindMatrixInverse");let xt=H.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(P,"boneTexture",xt.boneTexture,Y))}H.isBatchedMesh&&(pt.setOptional(P,H,"batchingTexture"),pt.setValue(P,"batchingTexture",H._matricesTexture,Y),pt.setOptional(P,H,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",H._indirectTexture,Y),pt.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",H._colorsTexture,Y));let Wn=J.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&N.update(H,J,sn),(Gn||be.receiveShadow!==H.receiveShadow)&&(be.receiveShadow=H.receiveShadow,pt.setValue(P,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&L.environment!==null&&(Mt.envMapIntensity.value=L.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Q0()),Gn){if(pt.setValue(P,"toneMappingExposure",A.toneMappingExposure),be.needsLights&&Ku(Mt,Mi),ye&&V.fog===!0&&Te.refreshFogUniforms(Mt,ye),Te.refreshMaterialUniforms(Mt,V,q,Z,v.state.transmissionRenderTarget[b.id]),be.needsLights&&be.lightProbeGrid){let xt=be.lightProbeGrid;Mt.probesSH.value=xt.texture,Mt.probesMin.value.copy(xt.boundingBox.min),Mt.probesMax.value.copy(xt.boundingBox.max),Mt.probesResolution.value.copy(xt.resolution)}hs.upload(P,Mc(be),Mt,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hs.upload(P,Mc(be),Mt,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(P,"center",H.center),pt.setValue(P,"modelViewMatrix",H.modelViewMatrix),pt.setValue(P,"normalMatrix",H.normalMatrix),pt.setValue(P,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let xt=V.uniformsGroups;for(let Xn=0,Ei=xt.length;Xn<Ei;Xn++){let Tc=xt[Xn];re.update(Tc,sn),re.bind(Tc,sn)}}return sn}function Ku(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.sunLights.needsUpdate=L,b.sunLightShadows.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function $u(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,L,J){let V=k.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=L,k.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let J=k.get(b);J.__webglFramebuffer=L,J.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,J=0){ne=b,$=L,j=J;let V=null,H=!1,ye=!1;if(b){let xe=k.get(b);if(xe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),K.copy(b.viewport),oe.copy(b.scissor),ae=b.scissorTest,_.viewport(K),_.scissor(oe),_.setScissorTest(ae),O=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(xe.__hasExternalTextures)Y.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ze=b.depthTexture;if(xe.__boundDepthTexture!==Ze){if(Ze!==null&&k.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Pe=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[L])?V=Pe[L][J]:V=Pe[L],H=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?V=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[J]:V=Pe,K.copy(b.viewport),oe.copy(b.scissor),ae=b.scissorTest}else K.copy(he).multiplyScalar(q).floor(),oe.copy(Ue).multiplyScalar(q).floor(),ae=rt;if(J!==0&&(V=G),_.bindFramebuffer(P.FRAMEBUFFER,V)&&_.drawBuffers(b,V),_.viewport(K),_.scissor(oe),_.setScissorTest(ae),H){let xe=k.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,J)}else if(ye){let xe=L;for(let Ee=0;Ee<b.textures.length;Ee++){let Pe=k.get(b.textures[Ee]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ee,Pe.__webglTexture,J,xe)}}else if(b!==null&&J!==0){let xe=k.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,J)}O=-1};function wc(b){let L=k.get(b);return(L.__readFormat!==b.format||L.__readType!==b.type)&&(L.__readFormat=b.format,L.__readType=b.type,L.__formatReadable=T.textureFormatReadable(b.format),L.__typeReadable=T.textureTypeReadable(b.type)),L}this.readRenderTargetPixels=function(b,L,J,V,H,ye,Me,xe=0){if(!(b&&b.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){_.bindFramebuffer(P.FRAMEBUFFER,Ee);try{let Pe=b.textures[xe],Ze=Pe.format,Qe=Pe.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe);let we=wc(Pe);if(we.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-V&&J>=0&&J<=b.height-H&&P.readPixels(L,J,V,H,ge.convert(Ze),ge.convert(Qe),ye)}finally{let Pe=ne!==null?k.get(ne).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,L,J,V,H,ye,Me,xe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(L>=0&&L<=b.width-V&&J>=0&&J<=b.height-H){_.bindFramebuffer(P.FRAMEBUFFER,Ee);let Pe=b.textures[xe],Ze=Pe.format,Qe=Pe.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe);let we=wc(Pe);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.bufferData(P.PIXEL_PACK_BUFFER,ye.byteLength,P.STREAM_READ),P.readPixels(L,J,V,H,ge.convert(Ze),ge.convert(Qe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Et=ne!==null?k.get(ne).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Et);let yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vh(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ye),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ht),P.deleteSync(yt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,J=0){let V=Math.pow(2,-J),H=Math.floor(b.image.width*V),ye=Math.floor(b.image.height*V),Me=L!==null?L.x:0,xe=L!==null?L.y:0;Y.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,Me,xe,H,ye),_.unbindTexture()},this.copyTextureToTexture=function(b,L,J=null,V=null,H=0,ye=0){let Me,xe,Ee,Pe,Ze,Qe,we,ht,Et,yt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(J!==null)Me=J.max.x-J.min.x,xe=J.max.y-J.min.y,Ee=J.isBox3?J.max.z-J.min.z:1,Pe=J.min.x,Ze=J.min.y,Qe=J.isBox3?J.min.z:0;else{let Mt=Math.pow(2,-H);Me=Math.floor(yt.width*Mt),xe=Math.floor(yt.height*Mt),b.isDataArrayTexture?Ee=yt.depth:b.isData3DTexture?Ee=Math.floor(yt.depth*Mt):Ee=1,Pe=0,Ze=0,Qe=0}V!==null?(we=V.x,ht=V.y,Et=V.z):(we=0,ht=0,Et=0);let gt=ge.convert(L.format),Nt=ge.convert(L.type),be;L.isData3DTexture?(Y.setTexture3D(L,0),be=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Y.setTexture2DArray(L,0),be=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(L,0),be=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let Vt=_.getParameter(P.UNPACK_ROW_LENGTH),it=_.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=_.getParameter(P.UNPACK_SKIP_PIXELS),vn=_.getParameter(P.UNPACK_SKIP_ROWS),Gn=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),_.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Qe);let Mi=b.isDataArrayTexture||b.isData3DTexture,pt=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let Mt=k.get(b),Wn=k.get(L),xt=k.get(Mt.__renderTarget),Xn=k.get(Wn.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,xt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Ei=0;Ei<Ee;Ei++)Mi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(b).__webglTexture,H,Qe+Ei),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(L).__webglTexture,ye,Et+Ei)),P.blitFramebuffer(Pe,Ze,Me,xe,we,ht,Me,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||k.has(b)){let Mt=k.get(b),Wn=k.get(L);_.bindFramebuffer(P.READ_FRAMEBUFFER,D),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,X);for(let xt=0;xt<Ee;xt++)Mi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,H,Qe+xt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,H),pt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wn.__webglTexture,ye,Et+xt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wn.__webglTexture,ye),H!==0?P.blitFramebuffer(Pe,Ze,Me,xe,we,ht,Me,xe,P.COLOR_BUFFER_BIT,P.NEAREST):pt?P.copyTexSubImage3D(be,ye,we,ht,Et+xt,Pe,Ze,Me,xe):P.copyTexSubImage2D(be,ye,we,ht,Pe,Ze,Me,xe);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(be,ye,we,ht,Et,Me,xe,Ee,gt,Nt,yt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(be,ye,we,ht,Et,Me,xe,Ee,gt,yt.data):P.texSubImage3D(be,ye,we,ht,Et,Me,xe,Ee,gt,Nt,yt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ye,we,ht,Me,xe,gt,Nt,yt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ye,we,ht,yt.width,yt.height,gt,yt.data):P.texSubImage2D(P.TEXTURE_2D,ye,we,ht,Me,xe,gt,Nt,yt);_.pixelStorei(P.UNPACK_ROW_LENGTH,Vt),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),_.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),_.pixelStorei(P.UNPACK_SKIP_ROWS,vn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Gn),ye===0&&L.generateMipmaps&&P.generateMipmap(be),_.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){$=0,j=0,ne=null,_.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Su={type:"change"},pc={type:"start"},Eu={type:"end"},Oo=new $n,Mu=new Qt,t_=Math.cos(70*ql.DEG2RAD),Ct=new F,Jt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fc=1e-6,Bo=class extends Qs{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Gt,this._lastTargetPosition=new F,this._quat=new Gt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new is,this._sphericalDelta=new is,this._scale=1,this._panOffset=new F,this._rotateStart=new Le,this._rotateEnd=new Le,this._rotateDelta=new Le,this._panStart=new Le,this._panEnd=new Le,this._panDelta=new Le,this._dollyStart=new Le,this._dollyEnd=new Le,this._dollyDelta=new Le,this._dollyDirection=new F,this._mouse=new Le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=s_.bind(this),this._onContextMenu=u_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=l_.bind(this),this._onTouchStart=c_.bind(this),this._onTouchMove=h_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=a_.bind(this),this._interceptControlDown=d_.bind(this),this._interceptControlUp=f_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Su),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Jt:n>Math.PI&&(n-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ct.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<t_?this.object.lookAt(this.target):(Mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Mu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fc||this._lastTargetPosition.distanceToSquared(this.target)>fc?(this.dispatchEvent(Su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function n_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function s_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eu),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(pc)}function a_(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function o_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(pc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eu))}function l_(i){this.enabled!==!1&&this._handleKeyDown(i)}function c_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(pc)}function h_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function u_(i){this.enabled!==!1&&i.preventDefault()}function d_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var dr=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=wu(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=wu(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function wu(i,e){return i<=9?e:i>=10&&i<=59?parseFloat(e):i>=60&&i<=99?parseInt(e):i>=100&&i<=109?e:i>=110&&i<=149?parseFloat(e):i>=160&&i<=179?parseInt(e):i>=210&&i<=239?parseFloat(e):i>=270&&i<=289?parseInt(e):i>=290&&i<=299?p_(e):i>=300&&i<=369?e:i>=370&&i<=389?parseInt(e):i>=390&&i<=399?e:i>=400&&i<=409?parseInt(e):i>=410&&i<=419?e:i>=420&&i<=429?parseInt(e):i>=430&&i<=439?e:i>=440&&i<=459?parseInt(e):i>=460&&i<=469?parseFloat(e):i>=470&&i<=481||i===999||i>=1e3&&i<=1009?e:i>=1010&&i<=1059?parseFloat(e):i>=1060&&i<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:i,value:e}),e)}function p_(i){if(i==="0")return!1;if(i==="1")return!0;throw TypeError("String '"+i+"' cannot be cast to Boolean type")}var ko=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function m_(i){return ko[i]}function Ve(i){let e={};i.rewind();let t=i.next(),n=t.code;if(e.x=t.value,n+=10,t=i.next(),t.code!=n)throw new Error("Expected code for point value to be "+n+" but got "+t.code+".");return e.y=t.value,n+=10,t=i.next(),t.code!=n?(i.rewind(),e):(e.z=t.value,e)}function st(i,e,t){switch(e.code){case 0:i.type=e.value;break;case 5:i.handle=e.value;break;case 6:i.lineType=e.value;break;case 8:i.layer=e.value;break;case 48:i.lineTypeScale=e.value;break;case 60:i.visible=e.value===0;break;case 62:i.colorIndex=e.value,i.color=m_(Math.abs(e.value));break;case 67:i.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:i.ownerHandle=e.value;break;case 347:i.materialObjectHandle=e.value;break;case 370:i.lineweight=e.value;break;case 420:i.color=e.value;break;case 1e3:i.extendedData=i.extendedData||{},i.extendedData.customStrings=i.extendedData.customStrings||[],i.extendedData.customStrings.push(e.value);break;case 1001:i.extendedData=i.extendedData||{},i.extendedData.applicationName=e.value;break;default:return!1}return!0}var fr=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:n.vertices=g_(e,t),t=e.lastReadGroup;break;default:st(n,t,e);break}t=e.next()}return n}};function g_(i,e){var t=[],n=!1,s=!1,r=4;for(let a=0;a<=r;a++){for(var o={};!i.isEOF()&&!(e.code===0||s);){switch(e.code){case 10:case 11:case 12:case 13:if(n){s=!0;continue}o.x=e.value,n=!0;break;case 20:case 21:case 22:case 23:o.y=e.value;break;case 30:case 31:case 32:case 33:o.z=e.value;break;default:return t}e=i.next()}t.push(o),n=!1,s=!1}return i.rewind(),t}var pr=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ve(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:n.endAngle=Math.PI/180*t.value,n.angleLength=n.endAngle-n.startAngle;break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var mr=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var n={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:n.text=t.value;break;case 2:n.tag=t.value;break;case 3:n.prompt=t.value;break;case 7:n.textStyle=t.value;break;case 10:n.startPoint=Ve(e);break;case 11:n.endPoint=Ve(e);break;case 39:n.thickness=t.value;break;case 40:n.textHeight=t.value;break;case 41:n.scale=t.value;break;case 50:n.rotation=t.value;break;case 51:n.obliqueAngle=t.value;break;case 70:n.invisible=!!(t.value&1),n.constant=!!(t.value&2),n.verificationRequired=!!(t.value&4),n.preset=!!(t.value&8);break;case 71:n.backwards=!!(t.value&2),n.mirrored=!!(t.value&4);break;case 72:n.horizontalJustification=t.value;break;case 73:n.fieldLength=t.value;break;case 74:n.verticalJustification=t.value;break;case 100:break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var gr=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ve(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:let s=Math.PI/180*t.value;s<n.startAngle?n.angleLength=s+2*Math.PI-n.startAngle:n.angleLength=s-n.startAngle,n.endAngle=s;break;default:st(n,t,e);break}t=e.next()}return n}};var _r=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.block=t.value;break;case 10:n.anchorPoint=Ve(e);break;case 11:n.middleOfText=Ve(e);break;case 12:n.insertionPoint=Ve(e);break;case 13:n.linearOrAngularPoint1=Ve(e);break;case 14:n.linearOrAngularPoint2=Ve(e);break;case 15:n.diameterOrRadiusPoint=Ve(e);break;case 16:n.arcPoint=Ve(e);break;case 70:n.dimensionType=t.value;break;case 71:n.attachmentPoint=t.value;break;case 42:n.actualMeasurement=t.value;break;case 1:n.text=t.value;break;case 50:n.angle=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var xr=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=Ve(e);break;case 11:n.majorAxisEndPoint=Ve(e);break;case 40:n.axisRatio=t.value;break;case 41:n.startAngle=t.value;break;case 42:n.endAngle=t.value;break;case 2:n.name=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var yr=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.name=t.value;break;case 41:n.xScale=t.value;break;case 42:n.yScale=t.value;break;case 43:n.zScale=t.value;break;case 10:n.position=Ve(e);break;case 50:n.rotation=t.value;break;case 70:n.columnCount=t.value;break;case 71:n.rowCount=t.value;break;case 44:n.columnSpacing=t.value;break;case 45:n.rowSpacing=t.value;break;case 210:n.extrusionDirection=Ve(e);break;default:st(n,t,e);break}t=e.next()}return n}};var vr=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.vertices.unshift(Ve(e));break;case 11:n.vertices.push(Ve(e));break;case 210:n.extrusionDirection=Ve(e);break;case 100:break;default:st(n,t,e);break}t=e.next()}return n}};var br=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let n={type:t.value,vertices:[]},s=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:n.elevation=t.value;break;case 39:n.depth=t.value;break;case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:s=t.value;break;case 10:n.vertices=__(s,e);break;case 43:t.value!==0&&(n.width=t.value);break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};function __(i,e){if(!i||i<=0)throw Error("n must be greater than 0 verticies");let t=[],n=!1,s=!1,r=e.lastReadGroup;for(let o=0;o<i;o++){let a={};for(;!e.isEOF()&&!(r.code===0||s);){switch(r.code){case 10:if(n){s=!0;continue}a.x=r.value,n=!0;break;case 20:a.y=r.value;break;case 30:a.z=r.value;break;case 40:a.startWidth=r.value;break;case 41:a.endWidth=r.value;break;case 42:r.value!=0&&(a.bulge=r.value);break;default:return e.rewind(),n&&t.push(a),e.rewind(),t}r=e.next()}t.push(a),n=!1,s=!1}return e.rewind(),t}var Sr=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:n.text?n.text+=t.value:n.text=t.value;break;case 1:n.text?n.text+=t.value:n.text=t.value;break;case 10:n.position=Ve(e);break;case 11:n.directionVector=Ve(e);break;case 40:n.height=t.value;break;case 41:n.width=t.value;break;case 50:n.rotation=t.value;break;case 71:n.attachmentPoint=t.value;break;case 72:n.drawingDirection=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var Mr=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let s={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:s.position=Ve(e);break;case 39:s.thickness=t.value;break;case 210:s.extrusionDirection=Ve(e);break;case 100:break;default:st(s,t,e);break}t=e.next()}return s}};var Er=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.x=t.value;break;case 20:n.y=t.value;break;case 30:n.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(n.bulge=t.value);break;case 70:n.curveFittingVertex=(t.value&1)!==0,n.curveFitTangent=(t.value&2)!==0,n.splineVertex=(t.value&8)!==0,n.splineControlPoint=(t.value&16)!==0,n.threeDPolylineVertex=(t.value&32)!==0,n.threeDPolylineMesh=(t.value&64)!==0,n.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:n.faceA=t.value;break;case 72:n.faceB=t.value;break;case 73:n.faceC=t.value;break;case 74:n.faceD=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var wr=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:n.thickness=t.value;break;case 40:break;case 41:break;case 70:n.shape=(t.value&1)!==0,n.includesCurveFitVertices=(t.value&2)!==0,n.includesSplineFitVertices=(t.value&4)!==0,n.is3dPolyline=(t.value&8)!==0,n.is3dPolygonMesh=(t.value&16)!==0,n.is3dPolygonMeshClosed=(t.value&32)!==0,n.isPolyfaceMesh=(t.value&64)!==0,n.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:n.extrusionDirection=Ve(e);break;default:st(n,t,e);break}t=e.next()}return n.vertices=x_(e,t),n}};function x_(i,e){let t=new Er,n=[];for(;!i.isEOF();)if(e.code===0){if(e.value==="VERTEX")n.push(t.parseEntity(i,e)),e=i.lastReadGroup;else if(e.value==="SEQEND"){y_(i,e);break}}return n}function y_(i,e){let t={type:e.value};for(e=i.next();!i.isEOF()&&e.code!=0;)st(t,e,i),e=i.next();return t}var Tr=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let n={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.points[0]=Ve(e);break;case 11:n.points[1]=Ve(e);break;case 12:n.points[2]=Ve(e);break;case 13:n.points[3]=Ve(e);break;case 210:n.extrusionDirection=Ve(e);break;default:st(n,t,e);break}t=e.next()}return n}};var Ar=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.controlPoints||(n.controlPoints=[]),n.controlPoints.push(Ve(e));break;case 11:n.fitPoints||(n.fitPoints=[]),n.fitPoints.push(Ve(e));break;case 12:n.startTangent=Ve(e);break;case 13:n.endTangent=Ve(e);break;case 40:n.knotValues||(n.knotValues=[]),n.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(n.closed=!0),(t.value&2)!=0&&(n.periodic=!0),(t.value&4)!=0&&(n.rational=!0),(t.value&8)!=0&&(n.planar=!0),(t.value&16)!=0&&(n.planar=!0,n.linear=!0);break;case 71:n.degreeOfSplineCurve=t.value;break;case 72:n.numberOfKnots=t.value;break;case 73:n.numberOfControlPoints=t.value;break;case 74:n.numberOfFitPoints=t.value;break;case 210:n.normalVector=Ve(e);break;default:st(n,t,e);break}t=e.next()}return n}};var Cr=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.startPoint=Ve(e);break;case 11:n.endPoint=Ve(e);break;case 40:n.textHeight=t.value;break;case 41:n.xScale=t.value;break;case 50:n.rotation=t.value;break;case 1:n.text=t.value;break;case 72:n.halign=t.value;break;case 73:n.valign=t.value;break;default:st(n,t,e);break}t=e.next()}return n}};var tt=rd(Au());tt.default.setLevel("error");function v_(i){i.registerEntityHandler(fr),i.registerEntityHandler(pr),i.registerEntityHandler(mr),i.registerEntityHandler(gr),i.registerEntityHandler(_r),i.registerEntityHandler(xr),i.registerEntityHandler(yr),i.registerEntityHandler(vr),i.registerEntityHandler(br),i.registerEntityHandler(Sr),i.registerEntityHandler(Mr),i.registerEntityHandler(wr),i.registerEntityHandler(Tr),i.registerEntityHandler(Ar),i.registerEntityHandler(Cr)}var ds=class{constructor(){this._entityHandlers={},v_(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",n=this;return new Promise((s,r)=>{e.on("data",o=>{t+=o}),e.on("end",()=>{try{s(n._parse(t))}catch(o){r(o)}}),e.on("error",o=>{r(o)})})}_parse(e){let t={},n=0,s=e.split(/\r\n|\r|\n/g),r=new dr(s);if(!r.hasNext())throw Error("Empty file");let o=this,a;function l(){for(a=r.next();!r.isEOF();)if(a.code===0&&a.value==="SECTION"){if(a=r.next(),a.code!==2){console.error("Unexpected code %s after 0:SECTION",Cu(a)),a=r.next();continue}a.value==="HEADER"?(tt.default.debug("> HEADER"),t.header=c(),tt.default.debug("<")):a.value==="BLOCKS"?(tt.default.debug("> BLOCKS"),t.blocks=u(),tt.default.debug("<")):a.value==="ENTITIES"?(tt.default.debug("> ENTITIES"),t.entities=R(!1),tt.default.debug("<")):a.value==="TABLES"?(tt.default.debug("> TABLES"),t.tables=h(),tt.default.debug("<")):a.value==="EOF"?tt.default.debug("EOF"):tt.default.warn("Skipping section '%s'",a.value)}else a=r.next()}function c(){let v=null,M=null,x={};for(a=r.next();;){if(Cn(a,0,"ENDSEC")){v&&(x[v]=M);break}else a.code===9?(v&&(x[v]=M),v=a.value):a.code===10?M={x:a.value}:a.code===20?M.y=a.value:a.code===30?M.z=a.value:M=a.value;a=r.next()}return a=r.next(),x}function u(){let v={};for(a=r.next();a.value!=="EOF"&&!Cn(a,0,"ENDSEC");)if(Cn(a,0,"BLOCK")){tt.default.debug("block {");let M=d();tt.default.debug("}"),E(M),M.name?v[M.name]=M:tt.default.error('block with handle "'+M.handle+'" is missing a name.')}else Si(a),a=r.next();return v}function d(){let v={};for(a=r.next();a.value!=="EOF";){switch(a.code){case 1:v.xrefPath=a.value,a=r.next();break;case 2:v.name=a.value,a=r.next();break;case 3:v.name2=a.value,a=r.next();break;case 5:v.handle=a.value,a=r.next();break;case 8:v.layer=a.value,a=r.next();break;case 10:v.position=y(a),a=r.next();break;case 67:v.paperSpace=!!(a.value&&a.value==1),a=r.next();break;case 70:a.value!=0&&(v.type=a.value),a=r.next();break;case 100:a=r.next();break;case 330:v.ownerHandle=a.value,a=r.next();break;case 0:if(a.value=="ENDBLK")break;v.entities=R(!0);break;default:Si(a),a=r.next()}if(Cn(a,0,"ENDBLK")){a=r.next();break}}return v}function h(){let v={};for(a=r.next();a.value!=="EOF"&&!Cn(a,0,"ENDSEC");)Cn(a,0,"TABLE")?(a=r.next(),C[a.value]?(tt.default.debug(a.value+" Table {"),v[C[a.value].tableName]=g(a),tt.default.debug("}")):tt.default.debug("Unhandled Table "+a.value)):a=r.next();return a=r.next(),v}let m="ENDTAB";function g(v){let M=C[v.value],x={},w=0;for(a=r.next();!Cn(a,0,m);)switch(a.code){case 5:x.handle=a.value,a=r.next();break;case 330:x.ownerHandle=a.value,a=r.next();break;case 100:a.value==="AcDbSymbolTable"||Si(a),a=r.next();break;case 70:w=a.value,a=r.next();break;case 0:a.value===M.dxfSymbolName?x[M.tableRecordsProperty]=M.parseTableRecords():(Si(a),a=r.next());break;default:Si(a),a=r.next()}let A=x[M.tableRecordsProperty];if(A){let I=(()=>{if(A.constructor===Array)return A.length;if(typeof A=="object")return Object.keys(A).length})();w!==I&&tt.default.warn("Parsed "+I+" "+M.dxfSymbolName+"'s but expected "+w)}return a=r.next(),x}function S(){let v=[],M={};for(tt.default.debug("ViewPort {"),a=r.next();!Cn(a,0,m);)switch(a.code){case 2:M.name=a.value,a=r.next();break;case 10:M.lowerLeftCorner=y(a),a=r.next();break;case 11:M.upperRightCorner=y(a),a=r.next();break;case 12:M.center=y(a),a=r.next();break;case 13:M.snapBasePoint=y(a),a=r.next();break;case 14:M.snapSpacing=y(a),a=r.next();break;case 15:M.gridSpacing=y(a),a=r.next();break;case 16:M.viewDirectionFromTarget=y(a),a=r.next();break;case 17:M.viewTarget=y(a),a=r.next();break;case 42:M.lensLength=a.value,a=r.next();break;case 43:M.frontClippingPlane=a.value,a=r.next();break;case 44:M.backClippingPlane=a.value,a=r.next();break;case 45:M.viewHeight=a.value,a=r.next();break;case 50:M.snapRotationAngle=a.value,a=r.next();break;case 51:M.viewTwistAngle=a.value,a=r.next();break;case 79:M.orthographicType=a.value,a=r.next();break;case 110:M.ucsOrigin=y(a),a=r.next();break;case 111:M.ucsXAxis=y(a),a=r.next();break;case 112:M.ucsYAxis=y(a),a=r.next();break;case 110:M.ucsOrigin=y(a),a=r.next();break;case 281:M.renderMode=a.value,a=r.next();break;case 281:M.defaultLightingType=a.value,a=r.next();break;case 292:M.defaultLightingOn=a.value,a=r.next();break;case 330:M.ownerHandle=a.value,a=r.next();break;case 63:case 421:case 431:M.ambientColor=a.value,a=r.next();break;case 0:a.value==="VPORT"&&(tt.default.debug("}"),v.push(M),tt.default.debug("ViewPort {"),M={},a=r.next());break;default:Si(a),a=r.next();break}return tt.default.debug("}"),v.push(M),v}function f(){let v={},M={},x=0,w;for(tt.default.debug("LType {"),a=r.next();!Cn(a,0,"ENDTAB");)switch(a.code){case 2:M.name=a.value,w=a.value,a=r.next();break;case 3:M.description=a.value,a=r.next();break;case 73:x=a.value,x>0&&(M.pattern=[]),a=r.next();break;case 40:M.patternLength=a.value,a=r.next();break;case 49:M.pattern.push(a.value),a=r.next();break;case 0:tt.default.debug("}"),x>0&&x!==M.pattern.length&&tt.default.warn("lengths do not match on LTYPE pattern"),v[w]=M,M={},tt.default.debug("LType {"),a=r.next();break;default:a=r.next()}return tt.default.debug("}"),v[w]=M,v}function p(){let v={},M={},x;for(tt.default.debug("Layer {"),a=r.next();!Cn(a,0,"ENDTAB");)switch(a.code){case 2:M.name=a.value,x=a.value,a=r.next();break;case 62:M.visible=a.value>=0,M.colorIndex=Math.abs(a.value),M.color=b_(M.colorIndex),a=r.next();break;case 70:M.frozen=(a.value&1)!=0||(a.value&2)!=0,a=r.next();break;case 0:a.value==="LAYER"&&(tt.default.debug("}"),v[x]=M,tt.default.debug("Layer {"),M={},x=void 0,a=r.next());break;default:Si(a),a=r.next();break}return tt.default.debug("}"),v[x]=M,v}let C={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:S},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:f},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:p}};function R(v){let M=[],x=v?"ENDBLK":"ENDSEC";for(v||(a=r.next());;)if(a.code===0){if(a.value===x)break;let w=o._entityHandlers[a.value];if(w!=null){tt.default.debug(a.value+" {");let A=w.parseEntity(r,a);a=r.lastReadGroup,tt.default.debug("}"),E(A),M.push(A)}else{tt.default.warn("Unhandled entity "+a.value),a=r.next();continue}}else a=r.next();return x=="ENDSEC"&&(a=r.next()),M}function y(v){let M={},x=v.code;if(M.x=v.value,x+=10,v=r.next(),v.code!=x)throw new Error("Expected code for point value to be "+x+" but got "+v.code+".");return M.y=v.value,x+=10,v=r.next(),v.code!=x?(r.rewind(),M):(M.z=v.value,M)}function E(v){if(!v)throw new TypeError("entity cannot be undefined or null");v.handle||(v.handle=n++)}return l(),t}};function Cn(i,e,t){return i.code===e&&i.value===t}function Si(i){tt.default.debug("unhandled group "+Cu(i))}function Cu(i){return i.code+":"+i.value}function b_(i){return ko[i]}var Ru=ds;var S_=[["racks",/rack|shelf|shelv|pallet|stowage|货架|货位|托盘/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|通道|走道|输送/],["zones",/zone|area|region|区|区域|库区/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|小车|叉车|穿梭|堆垛|提升|转台/]];function mc(i){let t=(String(i&&i.layer||"")+" "+String(i&&i.block||"")).toLowerCase();for(let n of S_)if(n[1].test(t))return n[0];return null}function Rn(i){if(i===null||typeof i!="object"||typeof i.x!="number")return null;let e={x:i.x,y:typeof i.y=="number"?i.y:0};return typeof i.z=="number"&&(e.z=i.z),e}function Rr(i){return(Array.isArray(i)?i:[]).map(Rn).filter(e=>e!==null)}function Lu(i){let e={type:i.type,layer:i.layer||"0"};switch(i.handle!==void 0&&(e.handle=String(i.handle)),i.type){case"LINE":e.vertices=Rr(i.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=Rr(i.vertices),e.closed=i.shape===!0,typeof i.width=="number"&&(e.width=i.width);break;case"ARC":e.center=Rn(i.center),e.radius=i.radius,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"CIRCLE":e.center=Rn(i.center),e.radius=i.radius;break;case"ELLIPSE":e.center=Rn(i.center),e.majorAxisEndPoint=Rn(i.majorAxisEndPoint),e.axisRatio=i.axisRatio,e.startAngle=i.startAngle,e.endAngle=i.endAngle;break;case"TEXT":e.text=typeof i.text=="string"?i.text:"",e.position=Rn(i.startPoint),typeof i.textHeight=="number"&&(e.height=i.textHeight),typeof i.rotation=="number"&&(e.rotation=i.rotation);break;case"MTEXT":e.text=typeof i.text=="string"?i.text:"",e.position=Rn(i.position),typeof i.height=="number"&&(e.height=i.height);break;case"INSERT":e.block=typeof i.name=="string"?i.name:null,e.position=Rn(i.position),typeof i.rotation=="number"&&(e.rotation=i.rotation),typeof i.xScale=="number"&&i.xScale!==1&&(e.xScale=i.xScale),typeof i.yScale=="number"&&i.yScale!==1&&(e.yScale=i.yScale);break;case"POINT":e.position=Rn(i.position);break;case"SOLID":e.points=Rr(i.points);break;case"SPLINE":e.controlPoints=Rr(i.controlPoints),e.fitPoints=Rr(i.fitPoints);break;default:break}return e}function M_(i){let e=i&&i.tables&&i.tables.layer&&i.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function E_(i){let e=i&&i.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:Rn(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}var Du={racks:"\u8D27\u67B6",aisles:"\u901A\u9053",zones:"\u533A\u57DF",agvs:"AGV"},w_=new Set(["TEXT","MTEXT","DIMENSION","HATCH","ATTDEF","ATTRIB","LEADER","MLINE"]),T_=/dim|标注|note|text|hatch|边框|图框|frame|border|title/i;function Pu(i){let e=i.handle!=null?String(i.handle):null;switch(i.type){case"LINE":{let s=i.vertices||[];if(s.length>=2)return{type:"line",coords:[s[0].x,s[0].y,s[1].x,s[1].y],handle:e};break}case"LWPOLYLINE":case"POLYLINE":{let s=[];for(let r of i.vertices||[])s.push(r.x,r.y);if(s.length>=4)return{type:"polyline",coords:s,closed:i.closed===!0,handle:e};break}case"ARC":return{type:"arc",coords:[i.center.x,i.center.y,i.radius||0,i.startAngle||0,i.endAngle||0],handle:e};case"CIRCLE":return{type:"circle",coords:[i.center.x,i.center.y,i.radius||0],handle:e};case"TEXT":case"MTEXT":return{type:"text",coords:[i.position?i.position.x:0,i.position?i.position.y:0],text:i.text||"",handle:e};case"INSERT":return{type:"insert",coords:[i.position?i.position.x:0,i.position?i.position.y:0],blockName:i.block||null,rotation:i.rotation||0,handle:e};case"POINT":return{type:"point",coords:[i.position?i.position.x:0,i.position?i.position.y:0],handle:e};default:break}let t=[];for(let s of i.vertices||[])t.push(s.x,s.y);if(t.length>=4)return{type:"polyline",coords:t,closed:i.closed===!0,handle:e};let n=i.position||i.center||i.vertices&&i.vertices[0]||{x:0,y:0};return{type:"point",coords:[n.x||0,n.y||0],handle:e}}function Nu(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let r of i){let o=r.coords||[];if(r.type==="arc"||r.type==="circle"){let a=o[0],l=o[1],c=o[2]||0;e=Math.min(e,a-c),n=Math.max(n,a+c),t=Math.min(t,l-c),s=Math.max(s,l+c);continue}for(let a=0;a+1<o.length;a+=2)e=Math.min(e,o[a]),n=Math.max(n,o[a]),t=Math.min(t,o[a+1]),s=Math.max(s,o[a+1])}return e===1/0?null:{minX:e,minY:t,maxX:n,maxY:s}}function Iu(i,e,t,n,s,r,o,a){let l=Nu(n)||{minX:0,minY:0,maxX:0,maxY:0},c=s?s.x:(l.minX+l.maxX)/2,u=s?s.y:(l.minY+l.maxY)/2,d=null,h=1/0,m=Math.max(l.maxX-l.minX,l.maxY-l.minY,1)+5;for(let S of a){let f=S&&S.position;if(!f||!S.text)continue;let p=Math.max(l.minX-f.x,0,f.x-l.maxX),C=Math.max(l.minY-f.y,0,f.y-l.maxY),R=p*p+C*C;R<h&&R<=m*m&&(h=R,d=String(S.text))}let g=mc({layer:e,block:t});return{device_id:i,id:i,type:g&&Du[g]||e||"0",layer:e||"0",blockName:t||null,name:d?d.replace(/[{}\\]/g,"").slice(0,60):null,bounding_box:{min:[l.minX,l.minY,0],max:[l.maxX,l.maxY,0]},center:[c,u,0],rotation:r||0,scale:o||{x:1,y:1},entityCount:n.length,handles:n.map(S=>S.handle).filter(S=>S!=null),geometry_group:n}}function A_(i,e){let t=i.filter(u=>u.type==="TEXT"||u.type==="MTEXT"),n=e&&e.blocks||{},s=[],r=0,o=()=>"device_"+ ++r,a=[],l=[];for(let u of i)w_.has(u.type)||T_.test(String(u.layer||""))||(u.type==="INSERT"?a.push(u):l.push(u));for(let u of a){let d=n[u.block],h=(d&&d.entities||[]).map(Lu).map(Pu).filter(Boolean);h.length===0&&(h=[{type:"point",coords:[0,0],handle:u.handle!=null?String(u.handle):null}]),s.push(Iu(o(),u.layer,u.block||null,h,u.position||{x:0,y:0},u.rotation||0,{x:u.xScale||1,y:u.yScale||1},t))}let c=[];for(let u of l){let d=Pu(u);if(!d)continue;let h=Nu([d]);h&&c.push({entry:d,layer:u.layer||"0",minX:h.minX,minY:h.minY,maxX:h.maxX,maxY:h.maxY})}if(c.length>0){let u=1/0,d=1/0,h=-1/0,m=-1/0;for(let v of c)u=Math.min(u,v.minX),d=Math.min(d,v.minY),h=Math.max(h,v.maxX),m=Math.max(m,v.maxY);let g=Math.max(h-u,m-d,1),S=g>5e3?10:g*.005,f=c.map((v,M)=>M),p=v=>{for(;f[v]!==v;)f[v]=f[f[v]],v=f[v];return v},C=(v,M)=>{let x=p(v),w=p(M);x!==w&&(f[w]=x)},R=Math.max(S*5,g/100),y=new Map;c.forEach((v,M)=>{let x=Math.floor((v.minX-S)/R),w=Math.floor((v.maxX+S)/R),A=Math.floor((v.minY-S)/R),I=Math.floor((v.maxY+S)/R);for(let U=x;U<=w;U++)for(let G=A;G<=I;G++){let D=U+","+G;for(let X of y.get(D)||[]){let $=c[X];v.minX-S<=$.maxX&&$.minX-S<=v.maxX&&v.minY-S<=$.maxY&&$.minY-S<=v.maxY&&C(M,X)}y.has(D)||y.set(D,[]),y.get(D).push(M)}});let E=new Map;c.forEach((v,M)=>{let x=p(M);E.has(x)||E.set(x,[]),E.get(x).push(v)});for(let v of E.values()){let M={};for(let w of v)M[w.layer]=(M[w.layer]||0)+1;let x=Object.keys(M).sort((w,A)=>M[A]-M[w])[0]||"0";s.push(Iu(o(),x,null,v.map(w=>w.entry),null,0,{x:1,y:1},t))}}return s}function C_(i,e,t){let s=[],r=[],o=[],a=[],l=[],c=!1,u={racks:s,aisles:r,zones:o,agvs:a},d={racks:0,aisles:0,zones:0,agvs:0},h=0;for(let M of i.entities||[]){if(l.length>=5e4){c=!0;break}let x=Lu(M);l.push(x);let w=mc(x);if(w===null){x.type!=="TEXT"&&x.type!=="MTEXT"&&(h+=1);continue}d[w]+=1,u[w].push(Object.assign({id:w.slice(0,-1)+"-"+d[w]},x))}let m={},g={},S=1/0,f=1/0,p=-1/0,C=-1/0;for(let M of l){m[M.layer]=(m[M.layer]||0)+1,g[M.type]=(g[M.type]||0)+1;let x=w=>{w&&(S=Math.min(S,w.x),f=Math.min(f,w.y),p=Math.max(p,w.x),C=Math.max(C,w.y))};x(M.position),x(M.center);for(let w of M.vertices||[])x(w);for(let w of(M.controlPoints||[]).concat(M.fitPoints||[],M.points||[]))x(w)}let R=S<1/0?{width:p-S,height:C-f}:null,y=M_(i).map(M=>Object.assign({},M,{count:m[M.name]||0}));for(let M of Object.keys(m))y.some(x=>x.name===M)||y.push({name:M,color:null,colorIndex:null,visible:!0,frozen:!1,count:m[M]});let E=R?Math.max(R.width,R.height):100,v=A_(l,i);return{racks:s,aisles:r,zones:o,agvs:a,entities:l,devices:v,layers:y,meta:{source:e,format:t,blocks:E_(i),entityCount:l.length,unclassified:h,truncated:c,byType:g,span:R}}}function Vo(i,e,t){let n;try{n=new Ru().parseSync(i)}catch(s){throw new Error("DXF \u89E3\u6790\u5931\u8D25: "+(s&&s.message?s.message:String(s)))}if(n===null||typeof n!="object"||!Array.isArray(n.entities))throw new Error("DXF \u89E3\u6790\u5931\u8D25: \u89E3\u6790\u5668\u672A\u8FD4\u56DE\u5B9E\u4F53\u8868");return C_(n,e,t||"dxf")}function Uu(i){let e=i.devices||[],t=new Map;for(let u of e){let d=u.layer||"0",h=t.get(d);if(!h){let g=mc({layer:u.layer,block:u.blockName});h={key:d,category:g&&Du[g]||d,ids:[],widths:[],depths:[],texts:new Set,geometry:new Set,blocks:new Set},t.set(d,h)}h.ids.push(String(u.device_id||u.id||""));let m=u.bounding_box;m&&(h.widths.push(Math.abs(m.max[0]-m.min[0])),h.depths.push(Math.abs(m.max[1]-m.min[1]))),u.name&&h.texts.add(u.name),u.blockName&&h.blocks.add(u.blockName);for(let g of u.geometry_group||[])h.geometry.add(g.type)}let n=u=>{if(u.length===0)return 0;let d=u.slice().sort((m,g)=>m-g),h=Math.floor(d.length/2);return d.length%2?d[h]:(d[h-1]+d[h])/2},s=u=>Math.round(u*10)/10,r=u=>{let d=u.map(f=>Number(String(f).replace(/^device_/,""))).filter(f=>Number.isFinite(f)).sort((f,p)=>f-p),h=[],m=null,g=null,S=()=>{m!==null&&(h.push(m===g?"device_"+m:"device_"+m+"..device_"+g),m=null)};for(let f of d){if(m===null){m=f,g=f;continue}if(f===g+1){g=f;continue}S(),m=f,g=f}return S(),h.join(", ")},o=[],a=[];for(let u of t.values()){let d=n(u.widths),h=n(u.depths);o.push({key:u.key,category:u.category,count:u.ids.length,ids:r(u.ids),bbox_typical:[s(d),s(h)],texts:Array.from(u.texts).slice(0,5),geometry:Array.from(u.geometry),block_names:Array.from(u.blocks)});let m=Math.max(d*h,1e-6);for(let g of e){if((g.layer||"0")!==u.key)continue;let S=g.bounding_box,f=S?Math.abs(S.max[0]-S.min[0]):0,p=S?Math.abs(S.max[1]-S.min[1]):0,C=f*p,R=!!g.name,y=C>0&&(C<m*.2||C>m*5);(R||y)&&a.length<50&&a.push({device_id:g.device_id||g.id,key:u.key,why:[R?"named":null,y?"size-outlier":null].filter(Boolean).join("+"),size:[s(f),s(p)],texts:g.name?[g.name]:[]})}}o.sort((u,d)=>d.count-u.count);let l=i.meta&&i.meta.span||null,c=l?Math.max(l.width,l.height):0;return{manifest_version:1,generated_by:"dsh-cad-scene",source:i.meta&&i.meta.source||null,plan:{span:l?[Math.round(l.width),Math.round(l.height)]:null,unit_guess:c>5e3?"large-span (likely mm)":"small plan (unit-less)"},groups:o,anomalies:a}}var z=require("react/jsx-runtime"),R_=["slots"],P_={racks:16347926,aisles:9741240,zones:2278750,agvs:15680580},zu={racks:"\u8D27\u67B6",aisles:"\u901A\u9053",zones:"\u533A\u57DF",agvs:"AGV"};var gc={racks:[],aisles:[],zones:[],agvs:[],entities:[],layers:[]},Fu=[6333946,16347926,3462041,16020150,10980346,16436245,2282478,16478597,4906624,8490232,16622767,3718648,16628340,12616956,8843180,16557477];function I_(i){let e=String(i||"0"),t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return Fu[t%Fu.length]}var L_=[[/crane|elevat|lift|hoist|stacker|货架|堆垛|提升/,11],[/platform|conveyor|belt|roller|输送|转台/,1.5],[/shuttle|vehicle|agv|amr|rgv|trolley|小车|叉车|穿梭/,.8],[/rack|shelf|shelv|pallet|托盘/,6]];function Ou(i){let e=String(i||"").toLowerCase();for(let t of L_)if(t[0].test(e))return t[1];return 1}function Hn(i,e,t){let s=(Array.isArray(i.layers)?i.layers:[]).find(r=>r&&r.name===e);return s&&typeof s.color=="number"&&s.color>0?s.color:I_(e)}function Vu({scene:i,selected:e,onSelect:t,hiddenCats:n,hiddenLayers:s}){let r=(0,nt.useRef)(null),o=(0,nt.useRef)([]);return(0,nt.useEffect)(()=>{let a=r.current;if(!a)return;let l=a.clientWidth||640,c=Math.max(a.clientHeight||0,320),u=new No({antialias:!0});u.setPixelRatio(window.devicePixelRatio||1),u.setSize(l,c),a.appendChild(u.domElement);let d=new Ds;d.background=new ze(988970);let h=new Ot(50,l/c,.1,1e4),m=new Bo(h,u.domElement);m.enableDamping=!0,m.autoRotate=!0,m.autoRotateSpeed=.8,d.add(new Ks(16777215,.55)),d.add(new qs(12571903,725536,.5));let g=new Fn,S=[],f=1/0,p=1/0,C=-1/0,R=-1/0,y=fe=>{!fe||typeof fe.x!="number"||(f=Math.min(f,fe.x),p=Math.min(p,fe.y),C=Math.max(C,fe.x),R=Math.max(R,fe.y))};for(let fe of["racks","aisles","zones","agvs"])for(let Be of i[fe]||[]){y(Be.position),y(Be.center);for(let Se of Be.vertices||[])y(Se)}for(let fe of i.entities||[]){y(fe.position),y(fe.center);for(let Be of fe.vertices||[])y(Be)}let v=(f===1/0?100:Math.max(C-f,R-p,40))/100,M=s||{},x=(i.devices||[]).filter(fe=>fe&&!M[fe.layer]),w=new Map,A=[];for(let fe of x)fe.blockName?(w.has(fe.blockName)||w.set(fe.blockName,[]),w.get(fe.blockName).push(fe)):A.push(fe);let I=e||new Set,U=(fe,Be,Se,Ge,Xe,mt,Ke,je,P)=>{fe.push(Se,0,-Ge,Xe,0,-mt,Xe,Ke,-mt,Se,0,-Ge,Xe,Ke,-mt,Se,Ke,-Ge),Be.push(P.r,P.g,P.b,P.r,P.g,P.b,je.r,je.g,je.b,P.r,P.g,P.b,je.r,je.g,je.b,je.r,je.g,je.b)};for(let[fe,Be]of w){let Se=new zs(new ei(1,1,1),new es,Be.length),Ge=new at,Xe=new Gt,mt=new F(0,1,0),Ke=new F,je=new F;Be.forEach((P,lt)=>{let We=P.bounding_box,T=We?Math.max(We.max[0]-We.min[0],.1):1,_=We?Math.max(We.max[1]-We.min[1],.1):1,B=Math.max(T*(P.scale.x||1),v*.2),k=Math.max(_*(P.scale.y||1),v*.2),Y=Ou(P.layer)*v;Xe.setFromAxisAngle(mt,-((P.rotation||0)*Math.PI)/180);let se=P.center||[0,0,0];je.set(se[0],Y/2,-se[1]),Ke.set(B,Y,k),Ge.compose(je,Xe,Ke),Se.setMatrixAt(lt,Ge),Se.setColorAt(lt,new ze(I.has(P.id)?16436245:Hn(i,P.layer)))}),Se.instanceMatrix.needsUpdate=!0,Se.instanceColor&&(Se.instanceColor.needsUpdate=!0),Se.userData.instanceDevices=Be,Se.userData.recolor=P=>{Be.forEach((lt,We)=>{Se.setColorAt(We,new ze(P&&P.has(lt.id)?16436245:Hn(i,lt.layer)))}),Se.instanceColor&&(Se.instanceColor.needsUpdate=!0)},g.add(Se),S.push(Se)}let G=new Map;for(let fe of A)G.has(fe.layer)||G.set(fe.layer,[]),G.get(fe.layer).push(fe);for(let[fe,Be]of G){let Se=Ou(fe)*v,Ge=[],Xe=[],mt=[],Ke=0;for(let lt of Be){let We=Ke,T=new ze(I.has(lt.id)?16436245:Hn(i,lt.layer)),_=T.clone().multiplyScalar(.22);for(let B of lt.geometry_group||[]){let k=B.coords||[];if(B.type==="line"&&k.length>=4)U(Ge,Xe,k[0],k[1],k[2],k[3],Se,T,_),Ke+=2;else if(B.type==="polyline")for(let Y=0;Y+3<k.length;Y+=2)U(Ge,Xe,k[Y],k[Y+1],k[Y+2],k[Y+3],Se,T,_),Ke+=2;else if(B.type==="arc"||B.type==="circle"){let Y=k[0],se=k[1],le=k[2]||0,Q=B.type==="circle"?0:k[3]||0,te=B.type==="circle"?Math.PI*2:k[4]||0,ue=Y+le*Math.cos(Q),Te=se+le*Math.sin(Q);for(let pe=1;pe<=24;pe++){let de=Q+(te-Q)*pe/24,Ae=Y+le*Math.cos(de),De=se+le*Math.sin(de);U(Ge,Xe,ue,Te,Ae,De,Se,T,_),Ke+=2,ue=Ae,Te=De}}}mt.push({device:lt,start:We,end:Ke})}if(Ge.length===0)continue;let je=new Bt;je.setAttribute("position",new St(Ge,3)),je.setAttribute("color",new St(Xe,3));let P=new Lt(je,new jn({vertexColors:!0,side:an}));P.userData.deviceRanges=mt,P.userData.recolor=lt=>{let We=P.geometry.getAttribute("color"),T=We.array;for(let _ of mt){let B=lt&&lt.has(_.device.id),k=new ze(B?16436245:Hn(i,_.device.layer)),Y=k.clone().multiplyScalar(.22),se=_.start*9,le=(_.end-_.start)/2;for(let Q=0;Q<le;Q++)T[se++]=Y.r,T[se++]=Y.g,T[se++]=Y.b,T[se++]=Y.r,T[se++]=Y.g,T[se++]=Y.b,T[se++]=k.r,T[se++]=k.g,T[se++]=k.b,T[se++]=Y.r,T[se++]=Y.g,T[se++]=Y.b,T[se++]=k.r,T[se++]=k.g,T[se++]=k.b,T[se++]=k.r,T[se++]=k.g,T[se++]=k.b}We.needsUpdate=!0},g.add(P),S.push(P)}d.add(g),o.current=S;let D=f===1/0?new en(new F(-20,0,-20),new F(20,1,20)):new en(new F(f,0,-R),new F(C,12*v,-p)),X=f===1/0,$=X?new F(0,0,0):D.getCenter(new F),j=X?new F(40,0,40):D.getSize(new F),ne=Math.max(j.x,j.z,j.y,40);d.fog=new Ls(988970,ne*1.5,ne*5),h.near=Math.max(ne*.001,.01),h.far=Math.max(ne*30,1e3),h.updateProjectionMatrix();let O=new Lt(new _i(ne*3,ne*3),new es({color:1317931,roughness:1}));O.rotation.x=-Math.PI/2,O.position.set($.x,-.02*v,$.z),d.add(O);let W=new js(ne*3,30,3359061,1976635);W.position.set($.x,0,$.z),d.add(W);let K=new F($.x+ne*.8,ne*1.5,$.z-ne*.6),oe=new Lt(new Xs(Math.max(ne*.06,1.5),24,24),new jn({color:16770723}));oe.position.copy(K),d.add(oe);let ae=document.createElement("canvas");ae.width=64,ae.height=64;let ce=ae.getContext("2d"),Fe=ce.createRadialGradient(32,32,4,32,32,32);Fe.addColorStop(0,"rgba(255,236,179,0.95)"),Fe.addColorStop(.4,"rgba(255,220,150,0.35)"),Fe.addColorStop(1,"rgba(255,220,150,0)"),ce.fillStyle=Fe,ce.fillRect(0,0,64,64);let Ne=new Os(new $i({map:new Gs(ae),transparent:!0,depthWrite:!1}));Ne.scale.setScalar(Math.max(ne*.5,8)),Ne.position.copy(K),d.add(Ne);let Z=new Js(16773848,1.2);Z.position.copy(K),Z.target.position.copy($),d.add(Z),d.add(Z.target),h.position.set($.x+ne*1,ne*.55,$.z+ne*1),m.target.copy($),m.update();let q=new $s;q.params.Line.threshold=1.5;let ie=new Le,Re=fe=>{let Be=u.domElement.getBoundingClientRect();ie.x=(fe.clientX-Be.left)/Be.width*2-1,ie.y=-((fe.clientY-Be.top)/Be.height)*2+1,q.setFromCamera(ie,h);let Se=q.intersectObjects(S,!0);if(Se.length>0){let Ge=Se[0],Xe=Ge.object;if(Xe.isInstancedMesh&&Xe.userData.instanceDevices&&Xe.userData.instanceDevices[Ge.instanceId])t({item:null,category:null,device:Xe.userData.instanceDevices[Ge.instanceId]});else if(Xe.userData.deviceRanges&&Ge.faceIndex!=null){let mt=Xe.userData.deviceRanges.find(Ke=>Ge.faceIndex>=Ke.start&&Ge.faceIndex<Ke.end);t({item:null,category:null,device:mt?mt.device:null})}else Xe.userData.device?t({item:null,category:null,device:Xe.userData.device}):Xe.userData.item?t({item:Xe.userData.item,category:Xe.userData.category||null}):t(null)}else t(null)},he=()=>{m.autoRotate=!1,u.domElement.removeEventListener("pointerdown",he)};u.domElement.addEventListener("pointerdown",he),u.domElement.addEventListener("click",Re);let Ue=new ResizeObserver(()=>{let fe=a.clientWidth||l,Be=Math.max(a.clientHeight||0,320);h.aspect=fe/Be,h.updateProjectionMatrix(),u.setSize(fe,Be)});Ue.observe(a);let rt=0,qe=()=>{rt=requestAnimationFrame(qe),m.update(),u.render(d,h)};return qe(),()=>{cancelAnimationFrame(rt),Ue.disconnect(),u.domElement.removeEventListener("click",Re),m.dispose(),d.traverse(fe=>{if(fe.geometry&&fe.geometry.dispose(),fe.material){let Be=Array.isArray(fe.material)?fe.material:[fe.material];for(let Se of Be)Se.map&&Se.map.dispose(),Se.dispose()}}),u.dispose(),u.domElement.parentNode===a&&a.removeChild(u.domElement),o.current=[]}},[i,n,s]),(0,nt.useEffect)(()=>{for(let a of o.current)a.userData&&typeof a.userData.recolor=="function"&&a.userData.recolor(e)},[e]),(0,z.jsx)("div",{ref:r,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}async function D_(i){let e=new Uint8Array(await i.arrayBuffer()),t="",n=32768;for(let s=0;s<e.length;s+=n)t+=String.fromCharCode.apply(null,e.subarray(s,s+n));return btoa(t)}function N_(i,e,t,n){return new Promise((s,r)=>{let o=typeof n=="function"?n:()=>{};if(typeof Worker>"u"){o("\u89E3\u6790\u4E2D \xB7 \u4E3B\u7EBF\u7A0B\u56DE\u9000");try{s(Vo(e,i,t))}catch(u){r(u)}return}let a="",l=null;try{a=URL.createObjectURL(new Blob([`(()=>{var ke=Object.create;var re=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var ge=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,we=Object.prototype.hasOwnProperty;var Pe=(a,e)=>()=>{try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Le=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ge(e))!we.call(a,l)&&l!==t&&re(a,l,{get:()=>e[l],enumerable:!(n=xe(e,l))||n.enumerable});return a};var Te=(a,e,t)=>(t=a!=null?ke(Ee(a)):{},Le(e||!a||!a.__esModule?re(t,"default",{value:a,enumerable:!0}):t,a));var ue=Pe((ce,se)=>{(function(a,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof se=="object"&&se.exports?se.exports=e():a.log=e()})(ce,function(){"use strict";var a=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],l={},s=null;function y(h,p){var u=h[p];if(typeof u.bind=="function")return u.bind(h);try{return Function.prototype.bind.call(u,h)}catch{return function(){return Function.prototype.apply.apply(u,[h,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function k(h){return h==="debug"&&(h="log"),typeof console===e?!1:h==="trace"&&t?o:console[h]!==void 0?y(console,h):console.log!==void 0?y(console,"log"):a}function E(){for(var h=this.getLevel(),p=0;p<n.length;p++){var u=n[p];this[u]=p<h?a:this.methodFactory(u,h,this.name)}if(this.log=this.debug,typeof console===e&&h<this.levels.SILENT)return"No console available for logging"}function x(h){return function(){typeof console!==e&&(E.call(this),this[h].apply(this,arguments))}}function L(h,p,u){return k(h)||x.apply(this,arguments)}function w(h,p){var u=this,I,N,P,v="loglevel";typeof h=="string"?v+=":"+h:typeof h=="symbol"&&(v=void 0);function A(b){var T=(n[b]||"silent").toUpperCase();if(!(typeof window===e||!v)){try{window.localStorage[v]=T;return}catch{}try{window.document.cookie=encodeURIComponent(v)+"="+T+";"}catch{}}}function r(){var b;if(!(typeof window===e||!v)){try{b=window.localStorage[v]}catch{}if(typeof b===e)try{var T=window.document.cookie,D=encodeURIComponent(v),_=T.indexOf(D+"=");_!==-1&&(b=/^([^;]+)/.exec(T.slice(_+D.length+1))[1])}catch{}return u.levels[b]===void 0&&(b=void 0),b}}function i(){if(!(typeof window===e||!v)){try{window.localStorage.removeItem(v)}catch{}try{window.document.cookie=encodeURIComponent(v)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function c(b){var T=b;if(typeof T=="string"&&u.levels[T.toUpperCase()]!==void 0&&(T=u.levels[T.toUpperCase()]),typeof T=="number"&&T>=0&&T<=u.levels.SILENT)return T;throw new TypeError("log.setLevel() called with invalid level: "+b)}u.name=h,u.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},u.methodFactory=p||L,u.getLevel=function(){return P??N??I},u.setLevel=function(b,T){return P=c(b),T!==!1&&A(P),E.call(u)},u.setDefaultLevel=function(b){N=c(b),r()||u.setLevel(b,!1)},u.resetLevel=function(){P=null,i(),E.call(u)},u.enableAll=function(b){u.setLevel(u.levels.TRACE,b)},u.disableAll=function(b){u.setLevel(u.levels.SILENT,b)},u.rebuild=function(){if(s!==u&&(I=c(s.getLevel())),E.call(u),s===u)for(var b in l)l[b].rebuild()},I=c(s?s.getLevel():"WARN");var d=r();d!=null&&(P=c(d)),E.call(u)}s=new w,s.getLogger=function(p){if(typeof p!="symbol"&&typeof p!="string"||p==="")throw new TypeError("You must supply a name when creating a logger.");var u=l[p];return u||(u=l[p]=new w(p,s.methodFactory)),u};var S=typeof window!==e?window.log:void 0;return s.noConflict=function(){return typeof window!==e&&window.log===s&&(window.log=S),s},s.getLoggers=function(){return l},s.default=s,s})});var Y=class{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=le(e.code,this._data[this._pointer].trim()),this._pointer++,e.code===0&&e.value==="EOF"&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);let e={code:parseInt(this._data[this._pointer])};return e.value=le(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-e*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}};function le(a,e){return a<=9?e:a>=10&&a<=59?parseFloat(e):a>=60&&a<=99?parseInt(e):a>=100&&a<=109?e:a>=110&&a<=149?parseFloat(e):a>=160&&a<=179?parseInt(e):a>=210&&a<=239?parseFloat(e):a>=270&&a<=289?parseInt(e):a>=290&&a<=299?Se(e):a>=300&&a<=369?e:a>=370&&a<=389?parseInt(e):a>=390&&a<=399?e:a>=400&&a<=409?parseInt(e):a>=410&&a<=419?e:a>=420&&a<=429?parseInt(e):a>=430&&a<=439?e:a>=440&&a<=459?parseInt(e):a>=460&&a<=469?parseFloat(e):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?e:a>=1010&&a<=1059?parseFloat(e):a>=1060&&a<=1071?parseInt(e):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:e}),e)}function Se(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}var oe=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function Ie(a){return oe[a]}function f(a){let e={};a.rewind();let t=a.next(),n=t.code;if(e.x=t.value,n+=10,t=a.next(),t.code!=n)throw new Error("Expected code for point value to be "+n+" but got "+t.code+".");return e.y=t.value,n+=10,t=a.next(),t.code!=n?(a.rewind(),e):(e.z=t.value,e)}function g(a,e,t){switch(e.code){case 0:a.type=e.value;break;case 5:a.handle=e.value;break;case 6:a.lineType=e.value;break;case 8:a.layer=e.value;break;case 48:a.lineTypeScale=e.value;break;case 60:a.visible=e.value===0;break;case 62:a.colorIndex=e.value,a.color=Ie(Math.abs(e.value));break;case 67:a.inPaperSpace=e.value!==0;break;case 100:break;case 101:for(;e.code!=0;)e=t.next();t.rewind();break;case 330:a.ownerHandle=e.value;break;case 347:a.materialObjectHandle=e.value;break;case 370:a.lineweight=e.value;break;case 420:a.color=e.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(e.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=e.value;break;default:return!1}return!0}var H=class{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 10:n.vertices=Ne(e,t),t=e.lastReadGroup;break;default:g(n,t,e);break}t=e.next()}return n}};function Ne(a,e){var t=[],n=!1,l=!1,s=4;for(let o=0;o<=s;o++){for(var y={};!a.isEOF()&&!(e.code===0||l);){switch(e.code){case 10:case 11:case 12:case 13:if(n){l=!0;continue}y.x=e.value,n=!0;break;case 20:case 21:case 22:case 23:y.y=e.value;break;case 30:case 31:case 32:case 33:y.z=e.value;break;default:return t}e=a.next()}t.push(y),n=!1,l=!1}return a.rewind(),t}var V=class{constructor(){this.ForEntityName="ARC"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=f(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:n.endAngle=Math.PI/180*t.value,n.angleLength=n.endAngle-n.startAngle;break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var z=class{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,t){var n={type:t.value,scale:1,textStyle:"STANDARD"};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 1:n.text=t.value;break;case 2:n.tag=t.value;break;case 3:n.prompt=t.value;break;case 7:n.textStyle=t.value;break;case 10:n.startPoint=f(e);break;case 11:n.endPoint=f(e);break;case 39:n.thickness=t.value;break;case 40:n.textHeight=t.value;break;case 41:n.scale=t.value;break;case 50:n.rotation=t.value;break;case 51:n.obliqueAngle=t.value;break;case 70:n.invisible=!!(t.value&1),n.constant=!!(t.value&2),n.verificationRequired=!!(t.value&4),n.preset=!!(t.value&8);break;case 71:n.backwards=!!(t.value&2),n.mirrored=!!(t.value&4);break;case 72:n.horizontalJustification=t.value;break;case 73:n.fieldLength=t.value;break;case 74:n.verticalJustification=t.value;break;case 100:break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var B=class{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=f(e);break;case 40:n.radius=t.value;break;case 50:n.startAngle=Math.PI/180*t.value;break;case 51:let l=Math.PI/180*t.value;l<n.startAngle?n.angleLength=l+2*Math.PI-n.startAngle:n.angleLength=l-n.startAngle,n.endAngle=l;break;default:g(n,t,e);break}t=e.next()}return n}};var U=class{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.block=t.value;break;case 10:n.anchorPoint=f(e);break;case 11:n.middleOfText=f(e);break;case 12:n.insertionPoint=f(e);break;case 13:n.linearOrAngularPoint1=f(e);break;case 14:n.linearOrAngularPoint2=f(e);break;case 15:n.diameterOrRadiusPoint=f(e);break;case 16:n.arcPoint=f(e);break;case 70:n.dimensionType=t.value;break;case 71:n.attachmentPoint=t.value;break;case 42:n.actualMeasurement=t.value;break;case 1:n.text=t.value;break;case 50:n.angle=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var j=class{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.center=f(e);break;case 11:n.majorAxisEndPoint=f(e);break;case 40:n.axisRatio=t.value;break;case 41:n.startAngle=t.value;break;case 42:n.endAngle=t.value;break;case 2:n.name=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var W=class{constructor(){this.ForEntityName="INSERT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 2:n.name=t.value;break;case 41:n.xScale=t.value;break;case 42:n.yScale=t.value;break;case 43:n.zScale=t.value;break;case 10:n.position=f(e);break;case 50:n.rotation=t.value;break;case 70:n.columnCount=t.value;break;case 71:n.rowCount=t.value;break;case 44:n.columnSpacing=t.value;break;case 45:n.rowSpacing=t.value;break;case 210:n.extrusionDirection=f(e);break;default:g(n,t,e);break}t=e.next()}return n}};var G=class{constructor(){this.ForEntityName="LINE"}parseEntity(e,t){let n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.vertices.unshift(f(e));break;case 11:n.vertices.push(f(e));break;case 210:n.extrusionDirection=f(e);break;case 100:break;default:g(n,t,e);break}t=e.next()}return n}};var K=class{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,t){let n={type:t.value,vertices:[]},l=0;for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 38:n.elevation=t.value;break;case 39:n.depth=t.value;break;case 70:n.shape=(t.value&1)===1,n.hasContinuousLinetypePattern=(t.value&128)===128;break;case 90:l=t.value;break;case 10:n.vertices=Ce(l,e);break;case 43:t.value!==0&&(n.width=t.value);break;case 210:n.extrusionDirectionX=t.value;break;case 220:n.extrusionDirectionY=t.value;break;case 230:n.extrusionDirectionZ=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};function Ce(a,e){if(!a||a<=0)throw Error("n must be greater than 0 verticies");let t=[],n=!1,l=!1,s=e.lastReadGroup;for(let y=0;y<a;y++){let o={};for(;!e.isEOF()&&!(s.code===0||l);){switch(s.code){case 10:if(n){l=!0;continue}o.x=s.value,n=!0;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:o.startWidth=s.value;break;case 41:o.endWidth=s.value;break;case 42:s.value!=0&&(o.bulge=s.value);break;default:return e.rewind(),n&&t.push(o),e.rewind(),t}s=e.next()}t.push(o),n=!1,l=!1}return e.rewind(),t}var q=class{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 3:n.text?n.text+=t.value:n.text=t.value;break;case 1:n.text?n.text+=t.value:n.text=t.value;break;case 10:n.position=f(e);break;case 11:n.directionVector=f(e);break;case 40:n.height=t.value;break;case 41:n.width=t.value;break;case 50:n.rotation=t.value;break;case 71:n.attachmentPoint=t.value;break;case 72:n.drawingDirection=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var J=class{constructor(){this.ForEntityName="POINT"}parseEntity(e,t){let l={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:l.position=f(e);break;case 39:l.thickness=t.value;break;case 210:l.extrusionDirection=f(e);break;case 100:break;default:g(l,t,e);break}t=e.next()}return l}};var Z=class{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,t){var n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.x=t.value;break;case 20:n.y=t.value;break;case 30:n.z=t.value;break;case 40:break;case 41:break;case 42:t.value!=0&&(n.bulge=t.value);break;case 70:n.curveFittingVertex=(t.value&1)!==0,n.curveFitTangent=(t.value&2)!==0,n.splineVertex=(t.value&8)!==0,n.splineControlPoint=(t.value&16)!==0,n.threeDPolylineVertex=(t.value&32)!==0,n.threeDPolylineMesh=(t.value&64)!==0,n.polyfaceMeshVertex=(t.value&128)!==0;break;case 50:break;case 71:n.faceA=t.value;break;case 72:n.faceB=t.value;break;case 73:n.faceC=t.value;break;case 74:n.faceD=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var Q=class{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,t){var n={type:t.value,vertices:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:break;case 20:break;case 30:break;case 39:n.thickness=t.value;break;case 40:break;case 41:break;case 70:n.shape=(t.value&1)!==0,n.includesCurveFitVertices=(t.value&2)!==0,n.includesSplineFitVertices=(t.value&4)!==0,n.is3dPolyline=(t.value&8)!==0,n.is3dPolygonMesh=(t.value&16)!==0,n.is3dPolygonMeshClosed=(t.value&32)!==0,n.isPolyfaceMesh=(t.value&64)!==0,n.hasContinuousLinetypePattern=(t.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:n.extrusionDirection=f(e);break;default:g(n,t,e);break}t=e.next()}return n.vertices=Ae(e,t),n}};function Ae(a,e){let t=new Z,n=[];for(;!a.isEOF();)if(e.code===0){if(e.value==="VERTEX")n.push(t.parseEntity(a,e)),e=a.lastReadGroup;else if(e.value==="SEQEND"){Oe(a,e);break}}return n}function Oe(a,e){let t={type:e.value};for(e=a.next();!a.isEOF()&&e.code!=0;)g(t,e,a),e=a.next();return t}var $=class{constructor(){this.ForEntityName="SOLID"}parseEntity(e,t){let n={type:t.value,points:[]};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.points[0]=f(e);break;case 11:n.points[1]=f(e);break;case 12:n.points[2]=f(e);break;case 13:n.points[3]=f(e);break;case 210:n.extrusionDirection=f(e);break;default:g(n,t,e);break}t=e.next()}return n}};var ee=class{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.controlPoints||(n.controlPoints=[]),n.controlPoints.push(f(e));break;case 11:n.fitPoints||(n.fitPoints=[]),n.fitPoints.push(f(e));break;case 12:n.startTangent=f(e);break;case 13:n.endTangent=f(e);break;case 40:n.knotValues||(n.knotValues=[]),n.knotValues.push(t.value);break;case 70:(t.value&1)!=0&&(n.closed=!0),(t.value&2)!=0&&(n.periodic=!0),(t.value&4)!=0&&(n.rational=!0),(t.value&8)!=0&&(n.planar=!0),(t.value&16)!=0&&(n.planar=!0,n.linear=!0);break;case 71:n.degreeOfSplineCurve=t.value;break;case 72:n.numberOfKnots=t.value;break;case 73:n.numberOfControlPoints=t.value;break;case 74:n.numberOfFitPoints=t.value;break;case 210:n.normalVector=f(e);break;default:g(n,t,e);break}t=e.next()}return n}};var te=class{constructor(){this.ForEntityName="TEXT"}parseEntity(e,t){let n={type:t.value};for(t=e.next();!e.isEOF()&&t.code!==0;){switch(t.code){case 10:n.startPoint=f(e);break;case 11:n.endPoint=f(e);break;case 40:n.textHeight=t.value;break;case 41:n.xScale=t.value;break;case 50:n.rotation=t.value;break;case 1:n.text=t.value;break;case 72:n.halign=t.value;break;case 73:n.valign=t.value;break;default:g(n,t,e);break}t=e.next()}return n}};var m=Te(ue());m.default.setLevel("error");function Fe(a){a.registerEntityHandler(H),a.registerEntityHandler(V),a.registerEntityHandler(z),a.registerEntityHandler(B),a.registerEntityHandler(U),a.registerEntityHandler(j),a.registerEntityHandler(W),a.registerEntityHandler(G),a.registerEntityHandler(K),a.registerEntityHandler(q),a.registerEntityHandler(J),a.registerEntityHandler(Q),a.registerEntityHandler($),a.registerEntityHandler(ee),a.registerEntityHandler(te)}var X=class{constructor(){this._entityHandlers={},Fe(this)}parse(e){return typeof e=="string"?this._parse(e):(console.error("Cannot read dxf source of type \`"+typeof e),null)}registerEntityHandler(e){let t=new e;this._entityHandlers[t.ForEntityName]=t}parseSync(e){return this.parse(e)}parseStream(e){let t="",n=this;return new Promise((l,s)=>{e.on("data",y=>{t+=y}),e.on("end",()=>{try{l(n._parse(t))}catch(y){s(y)}}),e.on("error",y=>{s(y)})})}_parse(e){let t={},n=0,l=e.split(/\\r\\n|\\r|\\n/g),s=new Y(l);if(!s.hasNext())throw Error("Empty file");let y=this,o;function k(){for(o=s.next();!s.isEOF();)if(o.code===0&&o.value==="SECTION"){if(o=s.next(),o.code!==2){console.error("Unexpected code %s after 0:SECTION",fe(o)),o=s.next();continue}o.value==="HEADER"?(m.default.debug("> HEADER"),t.header=E(),m.default.debug("<")):o.value==="BLOCKS"?(m.default.debug("> BLOCKS"),t.blocks=x(),m.default.debug("<")):o.value==="ENTITIES"?(m.default.debug("> ENTITIES"),t.entities=P(!1),m.default.debug("<")):o.value==="TABLES"?(m.default.debug("> TABLES"),t.tables=w(),m.default.debug("<")):o.value==="EOF"?m.default.debug("EOF"):m.default.warn("Skipping section '%s'",o.value)}else o=s.next()}function E(){let r=null,i=null,c={};for(o=s.next();;){if(O(o,0,"ENDSEC")){r&&(c[r]=i);break}else o.code===9?(r&&(c[r]=i),r=o.value):o.code===10?i={x:o.value}:o.code===20?i.y=o.value:o.code===30?i.z=o.value:i=o.value;o=s.next()}return o=s.next(),c}function x(){let r={};for(o=s.next();o.value!=="EOF"&&!O(o,0,"ENDSEC");)if(O(o,0,"BLOCK")){m.default.debug("block {");let i=L();m.default.debug("}"),A(i),i.name?r[i.name]=i:m.default.error('block with handle "'+i.handle+'" is missing a name.')}else M(o),o=s.next();return r}function L(){let r={};for(o=s.next();o.value!=="EOF";){switch(o.code){case 1:r.xrefPath=o.value,o=s.next();break;case 2:r.name=o.value,o=s.next();break;case 3:r.name2=o.value,o=s.next();break;case 5:r.handle=o.value,o=s.next();break;case 8:r.layer=o.value,o=s.next();break;case 10:r.position=v(o),o=s.next();break;case 67:r.paperSpace=!!(o.value&&o.value==1),o=s.next();break;case 70:o.value!=0&&(r.type=o.value),o=s.next();break;case 100:o=s.next();break;case 330:r.ownerHandle=o.value,o=s.next();break;case 0:if(o.value=="ENDBLK")break;r.entities=P(!0);break;default:M(o),o=s.next()}if(O(o,0,"ENDBLK")){o=s.next();break}}return r}function w(){let r={};for(o=s.next();o.value!=="EOF"&&!O(o,0,"ENDSEC");)O(o,0,"TABLE")?(o=s.next(),N[o.value]?(m.default.debug(o.value+" Table {"),r[N[o.value].tableName]=h(o),m.default.debug("}")):m.default.debug("Unhandled Table "+o.value)):o=s.next();return o=s.next(),r}let S="ENDTAB";function h(r){let i=N[r.value],c={},d=0;for(o=s.next();!O(o,0,S);)switch(o.code){case 5:c.handle=o.value,o=s.next();break;case 330:c.ownerHandle=o.value,o=s.next();break;case 100:o.value==="AcDbSymbolTable"||M(o),o=s.next();break;case 70:d=o.value,o=s.next();break;case 0:o.value===i.dxfSymbolName?c[i.tableRecordsProperty]=i.parseTableRecords():(M(o),o=s.next());break;default:M(o),o=s.next()}let b=c[i.tableRecordsProperty];if(b){let T=(()=>{if(b.constructor===Array)return b.length;if(typeof b=="object")return Object.keys(b).length})();d!==T&&m.default.warn("Parsed "+T+" "+i.dxfSymbolName+"'s but expected "+d)}return o=s.next(),c}function p(){let r=[],i={};for(m.default.debug("ViewPort {"),o=s.next();!O(o,0,S);)switch(o.code){case 2:i.name=o.value,o=s.next();break;case 10:i.lowerLeftCorner=v(o),o=s.next();break;case 11:i.upperRightCorner=v(o),o=s.next();break;case 12:i.center=v(o),o=s.next();break;case 13:i.snapBasePoint=v(o),o=s.next();break;case 14:i.snapSpacing=v(o),o=s.next();break;case 15:i.gridSpacing=v(o),o=s.next();break;case 16:i.viewDirectionFromTarget=v(o),o=s.next();break;case 17:i.viewTarget=v(o),o=s.next();break;case 42:i.lensLength=o.value,o=s.next();break;case 43:i.frontClippingPlane=o.value,o=s.next();break;case 44:i.backClippingPlane=o.value,o=s.next();break;case 45:i.viewHeight=o.value,o=s.next();break;case 50:i.snapRotationAngle=o.value,o=s.next();break;case 51:i.viewTwistAngle=o.value,o=s.next();break;case 79:i.orthographicType=o.value,o=s.next();break;case 110:i.ucsOrigin=v(o),o=s.next();break;case 111:i.ucsXAxis=v(o),o=s.next();break;case 112:i.ucsYAxis=v(o),o=s.next();break;case 110:i.ucsOrigin=v(o),o=s.next();break;case 281:i.renderMode=o.value,o=s.next();break;case 281:i.defaultLightingType=o.value,o=s.next();break;case 292:i.defaultLightingOn=o.value,o=s.next();break;case 330:i.ownerHandle=o.value,o=s.next();break;case 63:case 421:case 431:i.ambientColor=o.value,o=s.next();break;case 0:o.value==="VPORT"&&(m.default.debug("}"),r.push(i),m.default.debug("ViewPort {"),i={},o=s.next());break;default:M(o),o=s.next();break}return m.default.debug("}"),r.push(i),r}function u(){let r={},i={},c=0,d;for(m.default.debug("LType {"),o=s.next();!O(o,0,"ENDTAB");)switch(o.code){case 2:i.name=o.value,d=o.value,o=s.next();break;case 3:i.description=o.value,o=s.next();break;case 73:c=o.value,c>0&&(i.pattern=[]),o=s.next();break;case 40:i.patternLength=o.value,o=s.next();break;case 49:i.pattern.push(o.value),o=s.next();break;case 0:m.default.debug("}"),c>0&&c!==i.pattern.length&&m.default.warn("lengths do not match on LTYPE pattern"),r[d]=i,i={},m.default.debug("LType {"),o=s.next();break;default:o=s.next()}return m.default.debug("}"),r[d]=i,r}function I(){let r={},i={},c;for(m.default.debug("Layer {"),o=s.next();!O(o,0,"ENDTAB");)switch(o.code){case 2:i.name=o.value,c=o.value,o=s.next();break;case 62:i.visible=o.value>=0,i.colorIndex=Math.abs(o.value),i.color=De(i.colorIndex),o=s.next();break;case 70:i.frozen=(o.value&1)!=0||(o.value&2)!=0,o=s.next();break;case 0:o.value==="LAYER"&&(m.default.debug("}"),r[c]=i,m.default.debug("Layer {"),i={},c=void 0,o=s.next());break;default:M(o),o=s.next();break}return m.default.debug("}"),r[c]=i,r}let N={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:p},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:u},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:I}};function P(r){let i=[],c=r?"ENDBLK":"ENDSEC";for(r||(o=s.next());;)if(o.code===0){if(o.value===c)break;let d=y._entityHandlers[o.value];if(d!=null){m.default.debug(o.value+" {");let b=d.parseEntity(s,o);o=s.lastReadGroup,m.default.debug("}"),A(b),i.push(b)}else{m.default.warn("Unhandled entity "+o.value),o=s.next();continue}}else o=s.next();return c=="ENDSEC"&&(o=s.next()),i}function v(r){let i={},c=r.code;if(i.x=r.value,c+=10,r=s.next(),r.code!=c)throw new Error("Expected code for point value to be "+c+" but got "+r.code+".");return i.y=r.value,c+=10,r=s.next(),r.code!=c?(s.rewind(),i):(i.z=r.value,i)}function A(r){if(!r)throw new TypeError("entity cannot be undefined or null");r.handle||(r.handle=n++)}return k(),t}};function O(a,e,t){return a.code===e&&a.value===t}function M(a){m.default.debug("unhandled group "+fe(a))}function fe(a){return a.code+":"+a.value}function De(a){return oe[a]}var pe=X;var Me=[["racks",/rack|shelf|shelv|pallet|stowage|\u8D27\u67B6|\u8D27\u4F4D|\u6258\u76D8/],["aisles",/aisle|lane|corridor|conveyor|belt|roller|\u901A\u9053|\u8D70\u9053|\u8F93\u9001/],["zones",/zone|area|region|\u533A|\u533A\u57DF|\u5E93\u533A/],["agvs",/agv|amr|rgv|vehicle|shuttle|trolley|crane|elevat|lift|hoist|platform|\u5C0F\u8F66|\u53C9\u8F66|\u7A7F\u68AD|\u5806\u579B|\u63D0\u5347|\u8F6C\u53F0/]];function be(a){let t=(String(a&&a.layer||"")+" "+String(a&&a.block||"")).toLowerCase();for(let n of Me)if(n[1].test(t))return n[0];return null}function F(a){if(a===null||typeof a!="object"||typeof a.x!="number")return null;let e={x:a.x,y:typeof a.y=="number"?a.y:0};return typeof a.z=="number"&&(e.z=a.z),e}function ae(a){return(Array.isArray(a)?a:[]).map(F).filter(e=>e!==null)}function me(a){let e={type:a.type,layer:a.layer||"0"};switch(a.handle!==void 0&&(e.handle=String(a.handle)),a.type){case"LINE":e.vertices=ae(a.vertices);break;case"LWPOLYLINE":case"POLYLINE":case"3DFACE":e.vertices=ae(a.vertices),e.closed=a.shape===!0,typeof a.width=="number"&&(e.width=a.width);break;case"ARC":e.center=F(a.center),e.radius=a.radius,e.startAngle=a.startAngle,e.endAngle=a.endAngle;break;case"CIRCLE":e.center=F(a.center),e.radius=a.radius;break;case"ELLIPSE":e.center=F(a.center),e.majorAxisEndPoint=F(a.majorAxisEndPoint),e.axisRatio=a.axisRatio,e.startAngle=a.startAngle,e.endAngle=a.endAngle;break;case"TEXT":e.text=typeof a.text=="string"?a.text:"",e.position=F(a.startPoint),typeof a.textHeight=="number"&&(e.height=a.textHeight),typeof a.rotation=="number"&&(e.rotation=a.rotation);break;case"MTEXT":e.text=typeof a.text=="string"?a.text:"",e.position=F(a.position),typeof a.height=="number"&&(e.height=a.height);break;case"INSERT":e.block=typeof a.name=="string"?a.name:null,e.position=F(a.position),typeof a.rotation=="number"&&(e.rotation=a.rotation),typeof a.xScale=="number"&&a.xScale!==1&&(e.xScale=a.xScale),typeof a.yScale=="number"&&a.yScale!==1&&(e.yScale=a.yScale);break;case"POINT":e.position=F(a.position);break;case"SOLID":e.points=ae(a.points);break;case"SPLINE":e.controlPoints=ae(a.controlPoints),e.fitPoints=ae(a.fitPoints);break;default:break}return e}function _e(a){let e=a&&a.tables&&a.tables.layer&&a.tables.layer.layers;return e===null||typeof e!="object"?[]:Object.values(e).map(t=>({name:typeof t.name=="string"?t.name:"0",color:typeof t.color=="number"?t.color:null,colorIndex:typeof t.colorIndex=="number"?t.colorIndex:null,visible:t.visible!==!1,frozen:t.frozen===!0}))}function Re(a){let e=a&&a.blocks;return e===null||typeof e!="object"?[]:Object.values(e).filter(t=>typeof t.name=="string"&&!t.name.startsWith("*")).map(t=>({name:t.name,position:F(t.position),entityCount:Array.isArray(t.entities)?t.entities.length:0}))}var Xe={racks:"\\u8D27\\u67B6",aisles:"\\u901A\\u9053",zones:"\\u533A\\u57DF",agvs:"AGV"},Ye=new Set(["TEXT","MTEXT","DIMENSION","HATCH","ATTDEF","ATTRIB","LEADER","MLINE"]),He=/dim|\u6807\u6CE8|note|text|hatch|\u8FB9\u6846|\u56FE\u6846|frame|border|title/i;function de(a){let e=a.handle!=null?String(a.handle):null;switch(a.type){case"LINE":{let l=a.vertices||[];if(l.length>=2)return{type:"line",coords:[l[0].x,l[0].y,l[1].x,l[1].y],handle:e};break}case"LWPOLYLINE":case"POLYLINE":{let l=[];for(let s of a.vertices||[])l.push(s.x,s.y);if(l.length>=4)return{type:"polyline",coords:l,closed:a.closed===!0,handle:e};break}case"ARC":return{type:"arc",coords:[a.center.x,a.center.y,a.radius||0,a.startAngle||0,a.endAngle||0],handle:e};case"CIRCLE":return{type:"circle",coords:[a.center.x,a.center.y,a.radius||0],handle:e};case"TEXT":case"MTEXT":return{type:"text",coords:[a.position?a.position.x:0,a.position?a.position.y:0],text:a.text||"",handle:e};case"INSERT":return{type:"insert",coords:[a.position?a.position.x:0,a.position?a.position.y:0],blockName:a.block||null,rotation:a.rotation||0,handle:e};case"POINT":return{type:"point",coords:[a.position?a.position.x:0,a.position?a.position.y:0],handle:e};default:break}let t=[];for(let l of a.vertices||[])t.push(l.x,l.y);if(t.length>=4)return{type:"polyline",coords:t,closed:a.closed===!0,handle:e};let n=a.position||a.center||a.vertices&&a.vertices[0]||{x:0,y:0};return{type:"point",coords:[n.x||0,n.y||0],handle:e}}function ye(a){let e=1/0,t=1/0,n=-1/0,l=-1/0;for(let s of a){let y=s.coords||[];if(s.type==="arc"||s.type==="circle"){let o=y[0],k=y[1],E=y[2]||0;e=Math.min(e,o-E),n=Math.max(n,o+E),t=Math.min(t,k-E),l=Math.max(l,k+E);continue}for(let o=0;o+1<y.length;o+=2)e=Math.min(e,y[o]),n=Math.max(n,y[o]),t=Math.min(t,y[o+1]),l=Math.max(l,y[o+1])}return e===1/0?null:{minX:e,minY:t,maxX:n,maxY:l}}function he(a,e,t,n,l,s,y,o){let k=ye(n)||{minX:0,minY:0,maxX:0,maxY:0},E=l?l.x:(k.minX+k.maxX)/2,x=l?l.y:(k.minY+k.maxY)/2,L=null,w=1/0,S=Math.max(k.maxX-k.minX,k.maxY-k.minY,1)+5;for(let p of o){let u=p&&p.position;if(!u||!p.text)continue;let I=Math.max(k.minX-u.x,0,u.x-k.maxX),N=Math.max(k.minY-u.y,0,u.y-k.maxY),P=I*I+N*N;P<w&&P<=S*S&&(w=P,L=String(p.text))}let h=be({layer:e,block:t});return{device_id:a,id:a,type:h&&Xe[h]||e||"0",layer:e||"0",blockName:t||null,name:L?L.replace(/[{}\\\\]/g,"").slice(0,60):null,bounding_box:{min:[k.minX,k.minY,0],max:[k.maxX,k.maxY,0]},center:[E,x,0],rotation:s||0,scale:y||{x:1,y:1},entityCount:n.length,handles:n.map(p=>p.handle).filter(p=>p!=null),geometry_group:n}}function Ve(a,e){let t=a.filter(x=>x.type==="TEXT"||x.type==="MTEXT"),n=e&&e.blocks||{},l=[],s=0,y=()=>"device_"+ ++s,o=[],k=[];for(let x of a)Ye.has(x.type)||He.test(String(x.layer||""))||(x.type==="INSERT"?o.push(x):k.push(x));for(let x of o){let L=n[x.block],w=(L&&L.entities||[]).map(me).map(de).filter(Boolean);w.length===0&&(w=[{type:"point",coords:[0,0],handle:x.handle!=null?String(x.handle):null}]),l.push(he(y(),x.layer,x.block||null,w,x.position||{x:0,y:0},x.rotation||0,{x:x.xScale||1,y:x.yScale||1},t))}let E=[];for(let x of k){let L=de(x);if(!L)continue;let w=ye([L]);w&&E.push({entry:L,layer:x.layer||"0",minX:w.minX,minY:w.minY,maxX:w.maxX,maxY:w.maxY})}if(E.length>0){let x=1/0,L=1/0,w=-1/0,S=-1/0;for(let r of E)x=Math.min(x,r.minX),L=Math.min(L,r.minY),w=Math.max(w,r.maxX),S=Math.max(S,r.maxY);let h=Math.max(w-x,S-L,1),p=h>5e3?10:h*.005,u=E.map((r,i)=>i),I=r=>{for(;u[r]!==r;)u[r]=u[u[r]],r=u[r];return r},N=(r,i)=>{let c=I(r),d=I(i);c!==d&&(u[d]=c)},P=Math.max(p*5,h/100),v=new Map;E.forEach((r,i)=>{let c=Math.floor((r.minX-p)/P),d=Math.floor((r.maxX+p)/P),b=Math.floor((r.minY-p)/P),T=Math.floor((r.maxY+p)/P);for(let D=c;D<=d;D++)for(let _=b;_<=T;_++){let R=D+","+_;for(let ie of v.get(R)||[]){let ne=E[ie];r.minX-p<=ne.maxX&&ne.minX-p<=r.maxX&&r.minY-p<=ne.maxY&&ne.minY-p<=r.maxY&&N(i,ie)}v.has(R)||v.set(R,[]),v.get(R).push(i)}});let A=new Map;E.forEach((r,i)=>{let c=I(i);A.has(c)||A.set(c,[]),A.get(c).push(r)});for(let r of A.values()){let i={};for(let d of r)i[d.layer]=(i[d.layer]||0)+1;let c=Object.keys(i).sort((d,b)=>i[b]-i[d])[0]||"0";l.push(he(y(),c,null,r.map(d=>d.entry),null,0,{x:1,y:1},t))}}return l}function ze(a,e,t){let l=[],s=[],y=[],o=[],k=[],E=!1,x={racks:l,aisles:s,zones:y,agvs:o},L={racks:0,aisles:0,zones:0,agvs:0},w=0;for(let i of a.entities||[]){if(k.length>=5e4){E=!0;break}let c=me(i);k.push(c);let d=be(c);if(d===null){c.type!=="TEXT"&&c.type!=="MTEXT"&&(w+=1);continue}L[d]+=1,x[d].push(Object.assign({id:d.slice(0,-1)+"-"+L[d]},c))}let S={},h={},p=1/0,u=1/0,I=-1/0,N=-1/0;for(let i of k){S[i.layer]=(S[i.layer]||0)+1,h[i.type]=(h[i.type]||0)+1;let c=d=>{d&&(p=Math.min(p,d.x),u=Math.min(u,d.y),I=Math.max(I,d.x),N=Math.max(N,d.y))};c(i.position),c(i.center);for(let d of i.vertices||[])c(d);for(let d of(i.controlPoints||[]).concat(i.fitPoints||[],i.points||[]))c(d)}let P=p<1/0?{width:I-p,height:N-u}:null,v=_e(a).map(i=>Object.assign({},i,{count:S[i.name]||0}));for(let i of Object.keys(S))v.some(c=>c.name===i)||v.push({name:i,color:null,colorIndex:null,visible:!0,frozen:!1,count:S[i]});let A=P?Math.max(P.width,P.height):100,r=Ve(k,a);return{racks:l,aisles:s,zones:y,agvs:o,entities:k,devices:r,layers:v,meta:{source:e,format:t,blocks:Re(a),entityCount:k.length,unclassified:w,truncated:E,byType:h,span:P}}}function ve(a,e,t){let n;try{n=new pe().parseSync(a)}catch(l){throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: "+(l&&l.message?l.message:String(l)))}if(n===null||typeof n!="object"||!Array.isArray(n.entities))throw new Error("DXF \\u89E3\\u6790\\u5931\\u8D25: \\u89E3\\u6790\\u5668\\u672A\\u8FD4\\u56DE\\u5B9E\\u4F53\\u8868");return ze(n,e,t||"dxf")}self.onmessage=a=>{let e=a.data||{};try{self.postMessage({phase:"\\u89E3\\u6790\\u4E2D \\xB7 \\u56FE\\u5143\\u626B\\u63CF"});let t=ve(String(e.content||""),e.name||"drawing.dxf",e.format||"dxf");self.postMessage({done:!0,scene:t})}catch(t){self.postMessage({done:!0,error:String(t&&t.message||t)})}};})();
`],{type:"text/javascript"})),l=new Worker(a)}catch{try{s(Vo(e,i,t))}catch(d){r(d)}return}let c=()=>{l.terminate(),URL.revokeObjectURL(a)};l.onmessage=u=>{let d=u.data||{};if(d.phase){o(d.phase);return}c(),d.error?r(new Error(d.error)):s(d.scene)},l.onerror=()=>{c();try{s(Vo(e,i,t))}catch(u){r(u)}},l.postMessage({name:i,content:e,format:t})})}async function U_(i,e){let t=typeof e=="function"?e:()=>{};if(/\.(dwg|step|stp)$/i.test(i.name)){t("\u4E0A\u4F20\u4E2D \xB7 Host \u8F6C\u6362\u89E3\u6790");let r=await fetch("/api/cad-scene-builder/parse",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:i.name,content:await D_(i)})}),o=await r.text(),a=null;try{a=JSON.parse(o)}catch{throw new Error("\u89E3\u6790\u670D\u52A1\u8FD4\u56DE\u4E86\u975E JSON \u54CD\u5E94 (HTTP "+r.status+")\uFF1A"+String(o).slice(0,100)+"\uFF08\u8DEF\u7531\u672A\u751F\u6548\u65F6\u8BF7\u91CD\u542F dsh web\uFF09")}if(!r.ok||!a||!a.scene)throw new Error(a&&a.error||"\u89E3\u6790\u670D\u52A1\u9519\u8BEF (HTTP "+r.status+")");return{scene:a.scene,download:a.download||null}}let n=await i.text();return{scene:await N_(i.name,n,"dxf",t),download:null}}var ot={wrap:{display:"flex",gap:12,height:"100%",minHeight:0,padding:12,boxSizing:"border-box"},col:{flex:1,display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0},colLeft:{flex:"0 0 33%",maxWidth:"33%",display:"flex",flexDirection:"column",gap:10,minWidth:0,minHeight:0,overflowY:"auto",paddingRight:2},title:{margin:0,fontSize:14},drop:{border:"2px dashed rgba(148,163,184,0.4)",borderRadius:10,padding:24,textAlign:"center",fontSize:13,opacity:.9,cursor:"pointer"},btn:{padding:"6px 18px",borderRadius:8,border:"none",cursor:"pointer",background:"#2563eb",color:"#fff",fontSize:13},info:{fontSize:12,lineHeight:1.7,padding:"8px 10px",borderRadius:8,background:"rgba(148,163,184,0.08)",border:"1px solid rgba(148,163,184,0.2)"},label:{opacity:.6,marginRight:6},hint:{fontSize:12,opacity:.55},pre:{fontSize:11,whiteSpace:"pre-wrap",wordBreak:"break-all",maxHeight:240,overflow:"auto"},summary:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",fontSize:12,opacity:.9},chip:{display:"inline-flex",alignItems:"center",gap:4,padding:"1px 8px",borderRadius:999,border:"1px solid rgba(148,163,184,0.35)"},dot:i=>({width:8,height:8,borderRadius:4,background:i})},F_=`
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
`;function O_(){if(typeof document>"u"||document.getElementById("dsh-cad-scene-import-styles"))return;let i=document.createElement("style");i.id="dsh-cad-scene-import-styles",i.textContent=F_,document.head.appendChild(i)}function fs(i){return"#"+(i>>>0).toString(16).padStart(6,"0")}var Go=class extends nt.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error("[dsh-cad-scene] render error",e)}render(){return this.state.error?(0,z.jsxs)("div",{style:{padding:24,color:"#f87171",fontSize:13},children:["dsh-cad-scene \u6E32\u67D3\u51FA\u9519\uFF1A",String(this.state.error&&this.state.error.message||this.state.error)]}):this.props.children}};function Hu(i,e){if(!i||e==null)return null;let t=String(e);for(let n of i.devices||[])if((n.handles||[]).some(s=>String(s)===t))return n;return null}function Gu(i){if(!i)return null;let e=new Set;if(i.item&&(e.add(i.item.id),i.item.handle!=null&&e.add(String(i.item.handle))),i.device){e.add(i.device.id);for(let t of i.device.handles||[])e.add(String(t))}return e.size>0?e:null}function Wu({scene:i,selection:e}){if(!e||!e.item&&!e.device)return(0,z.jsx)("div",{style:ot.info,children:"\u70B9\u51FB\u573A\u666F\u4E2D\u7684\u5B9E\u4F53\u6216\u8BBE\u5907\u6E05\u5355\u6761\u76EE\u67E5\u770B\u8BE6\u60C5"});let t=e.device,n=e.item,s=e.category,r=Array.isArray(i.layers)?i.layers:[],o=n?n.layer:t?t.layer:null,a=r.find(u=>u&&u.name===o)||null,l=(Array.isArray(i.entities)?i.entities:[]).filter(u=>u&&(u.type==="TEXT"||u.type==="MTEXT")&&u.layer===o&&u.text).slice(0,6),c=n&&(n.position||n.center||Array.isArray(n.vertices)&&n.vertices[0])||null;return(0,z.jsxs)("div",{style:ot.info,children:[t?(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u8BBE\u5907"}),(0,z.jsx)("strong",{children:t.name||t.id}),t.name?" \xB7 "+t.id:""]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u7C7B\u578B"}),t.type,t.blockName?" \xB7 \u5757 "+t.blockName:""]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u56FE\u5C42"}),t.layer]}),t.bounding_box?(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u5C3A\u5BF8"}),Math.round((t.bounding_box.max[0]-t.bounding_box.min[0])*10)/10," \xD7 ",Math.round((t.bounding_box.max[1]-t.bounding_box.min[1])*10)/10]}):null,(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u56FE\u5143"}),t.entityCount," \u4E2A"]})]}):null,n?(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u5B9E\u4F53"}),(0,z.jsx)("strong",{children:n.id})," \xB7 ",n.type,s?` \xB7 ${zu[s]}`:""]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u56FE\u5C42"}),n.layer,a?(0,z.jsxs)("span",{style:{marginLeft:8,opacity:.8},children:[a.visible===!1?"\u9690\u85CF":"\u53EF\u89C1",a.frozen?" \xB7 \u51BB\u7ED3":""]}):null]}),n.block?(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u5757\u5F15\u7528"}),n.block]}):null,c?(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u4F4D\u7F6E"}),"(",Math.round(c.x*100)/100,", ",Math.round(c.y*100)/100,")"]}):null,n.text?(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u6587\u672C"}),n.text]}):null]}):null,l.length>0?(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u540C\u5C42\u6587\u672C"}),l.map((u,d)=>(0,z.jsx)("div",{style:{paddingLeft:12},children:u.text},d))]}):null]})}function B_({scene:i}){let e=i.meta||{};return(0,z.jsxs)("div",{style:ot.summary,children:[(0,z.jsx)("span",{children:e.source||"CAD scene"}),e.format?(0,z.jsx)("span",{style:{opacity:.6},children:e.format}):null,["racks","aisles","zones","agvs"].map(t=>(0,z.jsxs)("span",{style:ot.chip,children:[(0,z.jsx)("span",{style:ot.dot(fs(P_[t]))}),zu[t]," ",(i[t]||[]).length||(e.summary&&e.summary.classified?e.summary.classified[t]:0)]},t)),typeof e.entityCount=="number"?(0,z.jsxs)("span",{style:{opacity:.6},children:["\u5B9E\u4F53 ",e.entityCount]}):null,e.truncated?(0,z.jsx)("span",{style:{opacity:.6},children:"(\u5DF2\u622A\u65AD)"}):null]})}function Bu(i){try{let e=localStorage.getItem("dsh-cad-scene:groups"),t=e?JSON.parse(e):{};return t[i]&&typeof t[i]=="object"?t[i]:{}}catch{return{}}}function k_(i,e){try{let t=localStorage.getItem("dsh-cad-scene:groups"),n=t?JSON.parse(t):{};n[i]=e,localStorage.setItem("dsh-cad-scene:groups",JSON.stringify(n))}catch{}}function z_({scene:i,hiddenLayers:e,onToggleLayer:t}){let n=String(i.meta&&i.meta.source||"")+"|"+(i.entities||[]).length,[s,r]=(0,nt.useState)(()=>Bu(n)),[o,a]=(0,nt.useState)(null),[l,c]=(0,nt.useState)("");(0,nt.useEffect)(()=>{r(Bu(n)),a(null),c("")},[n]);let u=(y,E)=>{let v=Object.assign({},s),M=String(E||"").trim();M===""||M===y?delete v[y]:v[y]=M,r(v),k_(n,v),a(null),c("")},d={};for(let y of i.entities||[])d[y.layer]=(d[y.layer]||0)+1;let h={};for(let y of i.layers||[])h[y.name]=y;let m=Object.keys(d);for(let y of i.layers||[])d[y.name]===void 0&&m.push(y.name);let g={};for(let y of m){let E=s[y]||y;g[E]||(g[E]={name:E,layers:[],count:0,color:fs(Hn(i,y))}),g[E].layers.push(y),g[E].count+=d[y]||0}let S=Object.keys(g).map(y=>g[y]).sort((y,E)=>E.count-y.count),f=Object.keys(g).sort(),p=y=>{let E=y.layers.some(v=>!e[v]);for(let v of y.layers)E!==!!e[v]&&t(v)},C=y=>(0,z.jsxs)("div",{className:"cad-p-edit",onClick:E=>E.stopPropagation(),children:[(0,z.jsx)("input",{list:"cad-p-group-options",value:l,placeholder:"\u5408\u5E76\u5230\u7EC4\u540D\uFF08\u7559\u7A7A=\u72EC\u7ACB\uFF09",onChange:E=>c(E.target.value),onKeyDown:E=>{E.key==="Enter"&&u(y,l)},autoFocus:!0}),(0,z.jsx)("datalist",{id:"cad-p-group-options",children:f.map(E=>(0,z.jsx)("option",{value:E},E))}),(0,z.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>u(y,l),children:"\u2713"}),(0,z.jsx)("button",{type:"button",className:"cad-p-mini",onClick:()=>a(null),children:"\u2715"})]}),R=(y,E)=>{let v=h[y];return(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{className:E?"cad-p-layer cad-p-gm":"cad-p-layer","data-off":e[y]?"true":"false",onClick:()=>t(y),children:[(0,z.jsx)("span",{className:"cad-p-dot",style:{background:fs(Hn(i,y))}}),(0,z.jsx)("span",{className:"nm",children:y}),v&&v.visible===!1?(0,z.jsx)("span",{className:"cad-p-badge",children:"\u9690\u85CF"}):null,v&&v.frozen?(0,z.jsx)("span",{className:"cad-p-badge",children:"\u51BB\u7ED3"}):null,(0,z.jsx)("span",{className:"cnt",children:d[y]||0}),(0,z.jsx)("button",{type:"button",className:"cad-p-mini",onClick:M=>{M.stopPropagation(),c(s[y]&&s[y]!==y?s[y]:""),a(o===y?null:y)},children:"\u270E"})]}),o===y?C(y):null]},y)};return(0,z.jsxs)("div",{className:"cad-p-card",children:[(0,z.jsxs)("h4",{children:["\u56FE\u4F8B \xB7 \u6309\u89E3\u6790\u5185\u5BB9\u751F\u6210\uFF08",S.length," \u7EC4 \xB7 \u270E \u53EF\u5408\u5E76/\u547D\u540D\uFF09"]}),(0,z.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:300},children:[S.map(y=>{if(y.layers.length===1)return R(y.layers[0],!1);let E=y.layers.every(v=>!!e[v]);return(0,z.jsxs)("div",{children:[(0,z.jsxs)("div",{className:"cad-p-layer","data-off":E?"true":"false",onClick:()=>p(y),children:[(0,z.jsx)("span",{className:"cad-p-dot",style:{background:y.color}}),(0,z.jsx)("span",{className:"nm",children:(0,z.jsx)("b",{children:y.name})}),(0,z.jsx)("span",{className:"cnt",children:y.count})]}),y.layers.map(v=>R(v,!0))]},y.name)}),S.length===0?(0,z.jsx)("div",{style:{opacity:.6},children:"\u65E0\u56FE\u5C42\u5185\u5BB9"}):null]})]})}var Ho=["#60a5fa","#f97316","#34d399","#f472b6","#a78bfa","#facc15","#22d3ee","#fb7185","#94a3b8"];function V_({scene:i,selection:e,onSelect:t}){let[n,s]=(0,nt.useState)(""),r=i.devices||[],o=n.trim().toLowerCase(),a=o===""?r:r.filter(c=>String(c.name||"").toLowerCase().includes(o)||String(c.id).includes(o)||String(c.layer).toLowerCase().includes(o)),l=a.slice(0,300);return(0,z.jsxs)("div",{className:"cad-p-card",children:[(0,z.jsxs)("h4",{children:["\u8BBE\u5907\u6E05\u5355 \xB7 ",r.length," \u53F0\uFF08\u70B9\u51FB\u9009\u4E2D\u6574\u53F0\uFF09"]}),(0,z.jsx)("input",{className:"cad-p-edit-input",placeholder:"\u641C\u7D22 \u540D\u79F0/\u7F16\u53F7/\u56FE\u5C42\u2026",value:n,onChange:c=>s(c.target.value)}),(0,z.jsxs)("div",{className:"cad-p-layers",style:{maxHeight:260,marginTop:6},children:[l.map(c=>{let u=e&&e.device&&e.device.id===c.id;return(0,z.jsxs)("div",{className:"cad-p-layer","data-sel":u?"true":"false",onClick:()=>t(c),children:[(0,z.jsx)("span",{className:"cad-p-dot",style:{background:fs(Hn(i,c.layer))}}),(0,z.jsx)("span",{className:"nm",children:c.name||c.id}),(0,z.jsx)("span",{className:"cnt",children:c.entityCount})]},c.id)}),a.length===0?(0,z.jsx)("div",{style:{opacity:.6},children:"\u65E0\u5339\u914D\u8BBE\u5907"}):null,a.length>l.length?(0,z.jsxs)("div",{style:{opacity:.6,padding:"2px 6px"},children:["\u2026\u8FD8\u6709 ",a.length-l.length," \u53F0\uFF08\u7F29\u5C0F\u641C\u7D22\u8303\u56F4\uFF09"]}):null]})]})}function H_({scene:i}){let e=i.meta||{},t={},n=1/0,s=1/0,r=-1/0,o=-1/0,a=d=>{d&&(n=Math.min(n,d.x),s=Math.min(s,d.y),r=Math.max(r,d.x),o=Math.max(o,d.y))};for(let d of i.entities||[]){t[d.type]=(t[d.type]||0)+1,a(d.position),a(d.center);for(let h of d.vertices||[])a(h);for(let h of(d.controlPoints||[]).concat(d.fitPoints||[],d.points||[]))a(h)}let l=n<1/0?{w:r-n,h:o-s}:null,c=Object.entries(t).sort((d,h)=>h[1]-d[1]),u=c.reduce((d,h)=>d+h[1],0)||1;return(0,z.jsxs)("div",{className:"cad-p-card",children:[(0,z.jsx)("h4",{children:"\u56FE\u7EB8\u7EDF\u8BA1"}),(0,z.jsxs)("div",{className:"cad-p-row",children:[(0,z.jsx)("span",{className:"k",children:"\u5B9E\u4F53\u603B\u6570"}),(0,z.jsx)("b",{children:e.entityCount!==void 0?e.entityCount:(i.entities||[]).length})]}),(0,z.jsxs)("div",{className:"cad-p-row",children:[(0,z.jsx)("span",{className:"k",children:"\u8BBE\u5907\u6570"}),(0,z.jsx)("b",{children:(i.devices||[]).length})]}),e.truncated?(0,z.jsx)("div",{className:"cad-p-logline cad-p-warn",children:"\u26A0 \u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD"}):null,(0,z.jsx)("div",{className:"cad-p-bar",children:c.map((d,h)=>(0,z.jsx)("span",{style:{width:d[1]/u*100+"%",background:Ho[h%Ho.length]}},d[0]))}),(0,z.jsx)("div",{className:"cad-p-types",children:c.map((d,h)=>(0,z.jsxs)("span",{className:"cad-p-type",children:[(0,z.jsx)("i",{style:{color:Ho[h%Ho.length],fontStyle:"normal"},children:"\u25A0"})," ",d[0],"\xD7",d[1]]},d[0]))}),l?(0,z.jsxs)("div",{className:"cad-p-row",style:{marginTop:6},children:[(0,z.jsx)("span",{className:"k",children:"\u56FE\u5E45\u8303\u56F4"}),(0,z.jsxs)("b",{children:[Math.round(l.w*10)/10," \xD7 ",Math.round(l.h*10)/10]})]}):null,(0,z.jsxs)("div",{className:"cad-p-row",children:[(0,z.jsx)("span",{className:"k",children:"\u5757\u5B9A\u4E49"}),(0,z.jsx)("b",{children:(e.blocks||[]).length})]})]})}var G_=new Set(["INSERT","LINE","LWPOLYLINE","POLYLINE","ARC","CIRCLE","TEXT","MTEXT","POINT"]);function W_({scene:i}){let[e,t]=(0,nt.useState)(!1),n=i.meta||{},s={};for(let c of i.entities||[])G_.has(c.type)||(s[c.type]=(s[c.type]||0)+1);let r=[],o=String(n.format||"dxf");r.push({kind:"info",text:"\u89E3\u6790\u683C\u5F0F: "+o+(o.indexOf("dwg")===0?"\uFF08\u7ECF\u5916\u90E8\u8F6C\u6362\u5668\uFF09":"\uFF08\u6D4F\u89C8\u5668\u5185\u89E3\u6790\uFF09")}),n.truncated&&r.push({kind:"warn",text:"\u5B9E\u4F53\u8D85\u4E0A\u9650\u5DF2\u622A\u65AD\uFF0C\u4EC5\u4FDD\u7559\u524D "+(i.entities||[]).length+" \u4E2A"}),n.unclassified>0&&r.push({kind:"warn",text:"\u672A\u5206\u7C7B\u5B9E\u4F53 "+n.unclassified+" \u4E2A\uFF08\u672A\u5339\u914D\u5206\u7C7B\u8BCD\u8868\uFF0C\u5DF2\u6309\u56FE\u5C42\u8272\u7ED8\u5236\uFF09"});let a=Object.entries(s);a.length>0&&r.push({kind:"warn",text:"\u4E24\u4FA7\u89C6\u56FE\u5747\u672A\u7ED8\u5236: "+a.map(c=>c[0]+"\xD7"+c[1]).join("\u3001")}),r.push({kind:"info",text:"\u56FE\u5C42 "+(i.layers||[]).length+" \u4E2A \xB7 \u5757\u5B9A\u4E49 "+(n.blocks||[]).length+" \u4E2A"}),n.source&&r.push({kind:"info",text:n.source});let l=r.filter(c=>c.kind==="warn").length;return(0,z.jsxs)("div",{className:"cad-p-card cad-p-log","data-open":e?"true":"false",children:[(0,z.jsxs)("div",{className:"cad-p-log-toggle",onClick:()=>t(!e),children:[(0,z.jsx)("span",{className:"chev",children:"\u25B6"}),(0,z.jsx)("h4",{style:{margin:0,flex:1},children:"\u89E3\u6790\u65E5\u5FD7"}),(0,z.jsx)("span",{className:"cnt",children:l>0?l+" \u9879\u63D0\u793A":"\u6B63\u5E38"})]}),e?(0,z.jsx)("div",{style:{marginTop:8},children:r.map((c,u)=>(0,z.jsxs)("div",{className:"cad-p-logline"+(c.kind==="warn"?" cad-p-warn":""),children:[(0,z.jsx)("span",{children:c.kind==="warn"?"\u26A0":"\u2139"}),(0,z.jsx)("span",{children:c.text})]},u))}):null]})}function X_(i,e,t){let n=i.type;if(n==="LINE"||n==="LWPOLYLINE"||n==="POLYLINE"){let s=(i.vertices||[]).filter(r=>r&&typeof r.x=="number");return s.length<2?null:{item:i,category:e,color:t,kind:"poly",pts:i.closed&&s.length>2?s.concat([s[0]]):s}}return n==="CIRCLE"&&i.center?{item:i,category:e,color:t,kind:"circle",c:i.center,r:i.radius||1}:n==="ARC"&&i.center?{item:i,category:e,color:t,kind:"arc",c:i.center,r:i.radius||1,a0:i.startAngle||0,a1:i.endAngle!=null?i.endAngle:Math.PI}:i.position?{item:i,category:e,color:t,kind:"mark",p:i.position}:null}function Y_({scene:i,selected:e,onSelect:t,hiddenCats:n,hiddenLayers:s}){let r=(0,nt.useRef)(null),o=(0,nt.useRef)([]),a=(0,nt.useRef)([]),l=(0,nt.useRef)({s:1,tx:0,ty:0}),c=(0,nt.useRef)(null);return(0,nt.useEffect)(()=>{let u=r.current;if(!u)return;let d=document.createElement("canvas");d.style.width="100%",d.style.height="100%",d.style.display="block",d.style.background="#0b1220",d.style.cursor="crosshair",d.style.touchAction="none",u.appendChild(d);let h=d.getContext("2d"),m=n||{},g=s||{},S=[],f=[],p={};for(let O of["racks","aisles","zones","agvs"])for(let W of i[O]||[])W.handle!=null&&(p[W.handle]={item:W,category:O});let C=0;for(let O of i.entities||[]){if(g[O.layer])continue;let W=O.handle!=null?p[O.handle]:null;if(W&&m[W.category])continue;let K=W?W.item:Object.assign({id:"ent-"+ ++C},O),oe=W?W.category:null,ae=fs(Hn(i,O.layer)),ce=X_(K,oe,ae);ce&&S.push(ce)}let R=0;for(let O of i.entities||[])(O.type==="TEXT"||O.type==="MTEXT")&&!g[O.layer]&&O.text&&(R+=1,f.push({item:Object.assign({id:"text-"+R},O),category:null,p:O.position||{x:0,y:0},text:O.text,color:fs(Hn(i,O.layer))}));o.current=S,a.current=f;let y=l.current,E=window.devicePixelRatio||1,v=()=>{let O=1/0,W=1/0,K=-1/0,oe=-1/0,ae=q=>{q&&(O=Math.min(O,q.x),W=Math.min(W,q.y),K=Math.max(K,q.x),oe=Math.max(oe,q.y))};for(let q of S)q.kind==="poly"?q.pts.forEach(ae):q.kind==="circle"||q.kind==="arc"?(ae({x:q.c.x-q.r,y:q.c.y-q.r}),ae({x:q.c.x+q.r,y:q.c.y+q.r})):ae(q.p);for(let q of f)ae(q.p);O===1/0&&(O=-20,W=-20,K=20,oe=20);let ce=d.clientWidth||600,Fe=d.clientHeight||360,Ne=36,Z=Math.min((ce-Ne*2)/Math.max(K-O,1),(Fe-Ne*2)/Math.max(oe-W,1));y.s=Z>0?Z:1,y.tx=ce/2-(O+K)/2*y.s,y.ty=Fe/2+(W+oe)/2*y.s},M=()=>{let O=d.clientWidth||600,W=d.clientHeight||360,K=y.s,oe=ie=>ie*K+y.tx,ae=ie=>y.ty-ie*K;h.setTransform(E,0,0,E,0,0),h.clearRect(0,0,O,W);let ce=10;for(;ce*K<26;)ce*=5;for(;ce*K>130;)ce/=5;h.lineWidth=1,h.strokeStyle="rgba(148,163,184,0.08)";let Fe=Math.floor((0-y.tx)/K/ce)*ce,Ne=Math.ceil((O-y.tx)/K/ce)*ce,Z=Math.floor((y.ty-W)/K/ce)*ce,q=Math.ceil(y.ty/K/ce)*ce;h.beginPath();for(let ie=Fe;ie<=Ne;ie+=ce)h.moveTo(oe(ie),0),h.lineTo(oe(ie),W);for(let ie=Z;ie<=q;ie+=ce)h.moveTo(0,ae(ie)),h.lineTo(O,ae(ie));h.stroke(),h.strokeStyle="rgba(248,113,113,0.45)",h.beginPath(),h.moveTo(0,ae(0)),h.lineTo(O,ae(0)),h.stroke(),h.strokeStyle="rgba(52,211,153,0.45)",h.beginPath(),h.moveTo(oe(0),0),h.lineTo(oe(0),W),h.stroke();for(let ie of S){let Re=e&&ie.item&&(e.has(ie.item.id)||ie.item.handle!=null&&e.has(String(ie.item.handle)));if(h.strokeStyle=Re?"#facc15":ie.color,h.fillStyle=h.strokeStyle,h.lineWidth=Re?2.6:1.4,Re?(h.shadowColor="rgba(250,204,21,0.8)",h.shadowBlur=8):h.shadowBlur=0,ie.kind==="poly")h.beginPath(),ie.pts.forEach((he,Ue)=>{Ue===0?h.moveTo(oe(he.x),ae(he.y)):h.lineTo(oe(he.x),ae(he.y))}),h.stroke();else if(ie.kind==="circle")h.beginPath(),h.arc(oe(ie.c.x),ae(ie.c.y),Math.max(ie.r*K,.5),0,Math.PI*2),h.stroke();else if(ie.kind==="arc")h.beginPath(),h.arc(oe(ie.c.x),ae(ie.c.y),Math.max(ie.r*K,.5),-ie.a1,-ie.a0,!1),h.stroke();else if(ie.kind==="mark"){let he=oe(ie.p.x),Ue=ae(ie.p.y),rt=5;h.beginPath(),h.moveTo(he-rt,Ue),h.lineTo(he+rt,Ue),h.moveTo(he,Ue-rt),h.lineTo(he,Ue+rt),h.stroke(),h.beginPath(),h.arc(he,Ue,2.2,0,Math.PI*2),h.stroke()}}h.shadowBlur=0,h.font="12px ui-monospace, Consolas, monospace";for(let ie of f)h.fillStyle=e&&e.has(ie.item.id)?"#facc15":ie.color,h.fillText(String(ie.text).slice(0,48),oe(ie.p.x),ae(ie.p.y))},x=()=>{let O=d.clientWidth||600,W=d.clientHeight||360;d.width=Math.max(O*E,1),d.height=Math.max(W*E,1),c.current!==i&&(v(),c.current=i),M()},w=new ResizeObserver(x);w.observe(u),x();let A=(O,W,K,oe)=>{let ae=mx(K.x),ce=my(K.y),Fe=mx(oe.x),Ne=my(oe.y),Z=Fe-ae,q=Ne-ce,ie=Z*Z+q*q,Re=ie===0?0:Math.max(0,Math.min(1,((O-ae)*Z+(W-ce)*q)/ie));return Math.hypot(O-(ae+Re*Z),W-(ce+Re*q))},I=(O,W)=>{let K=y.s,oe=6;for(let ae=f.length-1;ae>=0;ae--){let ce=f[ae];if(Math.abs(mx(ce.p.x)-O)<44&&Math.abs(my(ce.p.y)-W)<9)return{item:ce.item,category:null}}for(let ae=S.length-1;ae>=0;ae--){let ce=S[ae],Fe=!1;if(ce.kind==="poly"){for(let Ne=0;Ne+1<ce.pts.length;Ne++)if(A(O,W,ce.pts[Ne],ce.pts[Ne+1])<oe){Fe=!0;break}}else if(ce.kind==="circle"){let Ne=Math.hypot(O-mx(ce.c.x),W-my(ce.c.y));Fe=Math.abs(Ne-ce.r*K)<oe||Ne<ce.r*K}else if(ce.kind==="arc"){let Ne=O-mx(ce.c.x),Z=W-my(ce.c.y),q=Math.hypot(Ne,Z),ie=Math.atan2(-Z,Ne);ie<0&&(ie+=Math.PI*2);let Re=ce.a0%(Math.PI*2);Re<0&&(Re+=Math.PI*2);let he=ce.a1%(Math.PI*2);he<0&&(he+=Math.PI*2);let Ue=he-Re;Ue<=0&&(Ue+=Math.PI*2);let rt=ie-Re;rt<0&&(rt+=Math.PI*2),Fe=Math.abs(q-ce.r*K)<oe&&rt<=Ue}else ce.kind==="mark"&&(Fe=Math.hypot(O-mx(ce.p.x),W-my(ce.p.y))<oe+4);if(Fe)return{item:ce.item,category:ce.category}}return null},U=null,G=!1,D=O=>{O.preventDefault();let W=d.getBoundingClientRect(),K=O.clientX-W.left,oe=O.clientY-W.top,ae=O.deltaY>0?1/1.12:1.12,ce=Math.max(1e-4,y.s*ae);y.tx=K-(K-y.tx)*(ce/y.s),y.ty=oe-(oe-y.ty)*(ce/y.s),y.s=ce,M()},X=O=>{U={x:O.clientX,y:O.clientY,tx:y.tx,ty:y.ty},G=!1},$=O=>{if(!U)return;let W=O.clientX-U.x,K=O.clientY-U.y;(Math.abs(W)>2||Math.abs(K)>2)&&(G=!0),y.tx=U.tx+W,y.ty=U.ty+K,M()},j=()=>{U=null},ne=O=>{if(G)return;let W=d.getBoundingClientRect();t(I(O.clientX-W.left,O.clientY-W.top))};return d.addEventListener("wheel",D,{passive:!1}),d.addEventListener("mousedown",X),d.addEventListener("mousemove",$),d.addEventListener("mouseup",j),d.addEventListener("mouseleave",j),d.addEventListener("click",ne),()=>{w.disconnect(),d.removeEventListener("wheel",D),d.removeEventListener("mousedown",X),d.removeEventListener("mousemove",$),d.removeEventListener("mouseup",j),d.removeEventListener("mouseleave",j),d.removeEventListener("click",ne),d.parentNode===u&&u.removeChild(d)}},[i,n,s,e]),(0,z.jsx)("div",{ref:r,style:{flex:1,minHeight:320,borderRadius:8,overflow:"hidden",lineHeight:0}})}function q_(){let[i,e]=(0,nt.useState)(null),t=(0,nt.useRef)(null),n=(0,nt.useRef)(null),[s,r]=(0,nt.useState)(null),[o,a]=(0,nt.useState)(!1),[l,c]=(0,nt.useState)(null),[u,d]=(0,nt.useState)(!1),[h,m]=(0,nt.useState)({}),[g,S]=(0,nt.useState)(null),[f,p]=(0,nt.useState)(!1);(0,nt.useEffect)(()=>{O_()},[]);let C=A=>m(I=>Object.assign({},I,{[A]:!I[A]})),R=A=>{if(!A){c(null);return}let I=A.device||(A.item&&A.item.handle!=null?Hu(s,A.item.handle):null);c({item:A.item||null,category:A.category||null,device:I})},y=A=>c({item:null,category:null,device:A}),E=Gu(l),v=A=>{A&&(t.current=A,r(null),c(null),m({}),S(null),e({name:A.name,size:A.size,status:"ready",error:null}))},M=async()=>{let A=t.current;if(!(!A||o)){a(!0),e(I=>Object.assign({},I,{status:"parsing",error:null}));try{let I=await U_(A,U=>e(G=>Object.assign({},G,{phase:U})));r(I.scene),S(I.download||null),e(U=>Object.assign({},U,{status:"done"}))}catch(I){e(U=>Object.assign({},U,{status:"error",error:String(I&&I.message||I)}))}finally{a(!1)}}},x=u?"drag":o?"parsing":i?i.status==="done"?"done":i.status==="error"?"error":"ready":"idle",w=i?i.status==="ready"?"\u5F85\u89E3\u6790":i.status==="parsing"?i.phase||"\u89E3\u6790\u4E2D\u2026":i.status==="done"?"\u89E3\u6790\u5B8C\u6210":"\u89E3\u6790\u5931\u8D25":"\u5C1A\u672A\u9009\u62E9\u6587\u4EF6";return(0,z.jsxs)("div",{style:ot.wrap,children:[(0,z.jsxs)("div",{style:ot.colLeft,children:[(0,z.jsx)("h3",{style:ot.title,children:"CAD \u6587\u4EF6\u5BFC\u5165\u533A"}),(0,z.jsxs)("div",{className:"cad-im-portal","data-state":x,onClick:()=>{n.current&&n.current.click()},onDragEnter:A=>{A.preventDefault(),d(!0)},onDragOver:A=>A.preventDefault(),onDragLeave:A=>{A.preventDefault(),d(!1)},onDrop:A=>{A.preventDefault(),d(!1),v(A.dataTransfer&&A.dataTransfer.files&&A.dataTransfer.files[0])},children:[(0,z.jsx)("div",{className:"cad-im-grid"}),(0,z.jsx)("span",{className:"cad-im-corner tl"}),(0,z.jsx)("span",{className:"cad-im-corner tr"}),(0,z.jsx)("span",{className:"cad-im-corner bl"}),(0,z.jsx)("span",{className:"cad-im-corner br"}),(0,z.jsx)("div",{className:"cad-im-scan"}),(0,z.jsx)("span",{className:"cad-im-cross",style:{top:18,left:30,animationDelay:"0.2s"}}),(0,z.jsx)("span",{className:"cad-im-cross",style:{top:26,right:36,animationDelay:"0.9s"}}),(0,z.jsx)("span",{className:"cad-im-cross",style:{bottom:22,left:44,animationDelay:"1.6s"}}),(0,z.jsxs)("div",{className:"cad-im-stage",children:[(0,z.jsxs)("svg",{className:"cad-im-icon",viewBox:"0 0 64 64","aria-hidden":"true",children:[(0,z.jsx)("path",{d:"M14 6h26l10 10v42H14z",fill:"rgba(30,58,138,.55)",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,z.jsx)("path",{d:"M40 6v10h10",fill:"none",stroke:"#38bdf8",strokeWidth:"2",strokeLinejoin:"round"}),(0,z.jsx)("circle",{cx:"31",cy:"36",r:"8.5",fill:"none",stroke:"#7dd3fc",strokeWidth:"2"}),(0,z.jsx)("path",{d:"M31 22.5v6M31 43.5v6M17.5 36h6M38.5 36h6",stroke:"#7dd3fc",strokeWidth:"2",strokeLinecap:"round"})]}),i&&i.status==="done"?(0,z.jsxs)("svg",{className:"cad-im-check",viewBox:"0 0 48 48",children:[(0,z.jsx)("circle",{cx:"24",cy:"24",r:"21"}),(0,z.jsx)("path",{d:"M13 25l7.5 7.5L35 16"})]}):null]}),(0,z.jsx)("div",{className:"cad-im-title",children:u?"\u677E\u624B\uFF0C\u5F00\u59CB\u89E3\u6790\u56FE\u7EB8":"\u62D6\u62FD CAD \u56FE\u7EB8\u5230\u6B64\u5904"}),(0,z.jsx)("div",{className:"cad-im-sub",children:u?"\u652F\u6301 .dwg / .dxf / .step":"\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6 \xB7 \u89E3\u6790\u540E\u5B9E\u4F53\u53E0\u52A0\u5230\u53F3\u4FA7 3D \u573A\u666F"}),i?(0,z.jsxs)("div",{className:"cad-im-chip",children:[i.name," \xB7 ",(i.size/1024).toFixed(1)," KB"]}):null,(0,z.jsx)("input",{ref:n,type:"file",accept:".dwg,.dxf,.step,.stp",style:{display:"none"},onChange:A=>{v(A.target.files&&A.target.files[0]),A.target.value=""}})]}),i?(0,z.jsxs)("div",{style:ot.info,children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u6587\u4EF6"}),i.name]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u5927\u5C0F"}),(i.size/1024).toFixed(1)," KB"]}),(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:"\u72B6\u6001"}),w]}),i.error?(0,z.jsx)("div",{style:{color:"#f87171"},children:i.error}):null]}):null,(0,z.jsxs)("div",{style:{display:"flex",gap:8},children:[(0,z.jsx)("button",{type:"button",className:"cad-im-btn","data-busy":o?"true":"false",disabled:!i||o,onClick:M,children:o?"\u89E3\u6790\u4E2D\u2026":"\u89E3\u6790"}),g?(0,z.jsx)("button",{type:"button",className:"cad-im-btn cad-im-dl",onClick:()=>{let A=document.createElement("a");A.href=g.url,A.download=g.name,document.body.appendChild(A),A.click(),setTimeout(()=>A.remove(),2e3)},children:"\u2B07 \u4E0B\u8F7D DXF"}):null,s?(0,z.jsx)("button",{type:"button",className:"cad-im-btn",onClick:()=>{let A=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),I=URL.createObjectURL(A),U=document.createElement("a");U.href=I,U.download=String(s.meta&&s.meta.source||"scene").replace(/\.[^.]+$/,"")+".scene.json",document.body.appendChild(U),U.click(),setTimeout(()=>{U.remove(),URL.revokeObjectURL(I)},2e3)},children:"\u2B07 \u4E0B\u8F7D JSON"}):null,s?(0,z.jsx)("button",{type:"button",className:"cad-im-btn",onClick:()=>{let A=new Blob([JSON.stringify(Uu(s),null,2)],{type:"application/json"}),I=URL.createObjectURL(A),U=document.createElement("a");U.href=I,U.download=String(s.meta&&s.meta.source||"scene").replace(/\.[^.]+$/,"")+".digest.json",document.body.appendChild(U),U.click(),setTimeout(()=>{U.remove(),URL.revokeObjectURL(I)},2e3)},children:"\u2B07 digest \u6458\u8981"}):null]}),s?(0,z.jsx)(z_,{scene:s,hiddenLayers:h,onToggleLayer:C}):null,s?(0,z.jsx)(V_,{scene:s,selection:l,onSelect:y}):null,s?(0,z.jsx)(H_,{scene:s}):null,s?(0,z.jsx)(W_,{scene:s}):null]}),(0,z.jsxs)("div",{style:ot.col,children:[(0,z.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,z.jsx)("h3",{style:Object.assign({},ot.title,{flex:1}),children:f?"CAD \u56FE\u7EB8 \xB7 2D \u4FEF\u89C6":"Three.js 3D \u573A\u666F\u663E\u793A\u533A"}),(0,z.jsxs)("div",{className:"cad-v-toggle",children:[(0,z.jsx)("button",{type:"button",className:"cad-v-btn","data-on":f?"false":"true",onClick:()=>p(!1),children:"3D \u573A\u666F"}),(0,z.jsx)("button",{type:"button",className:"cad-v-btn","data-on":f?"true":"false",onClick:()=>p(!0),children:"CAD \u56FE\u7EB8"})]})]}),(0,z.jsxs)("div",{style:{position:"relative",flex:1,minHeight:0,display:"flex"},children:[f?(0,z.jsx)(Y_,{scene:s||gc,selected:E,onSelect:R,hiddenLayers:h}):(0,z.jsx)(Vu,{scene:s||gc,selected:E,onSelect:R,hiddenLayers:h}),s?null:(0,z.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:12,pointerEvents:"none",fontSize:12,opacity:.7},children:f?"\u89E3\u6790\u540E\u5728\u6B64\u67E5\u770B CAD \u56FE\u7EB8\uFF08\u6EDA\u8F6E\u7F29\u653E\u3001\u62D6\u62FD\u5E73\u79FB\uFF0C\u70B9\u51FB\u56FE\u5143\u67E5\u770B\u8BE6\u60C5\uFF09":"\u89E3\u6790\u540E\u5B9E\u4F53\u5C06\u53E0\u52A0\u5230\u573A\u666F\u4E2D\uFF08\u5DE6\u952E\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001\u53F3\u952E\u5E73\u79FB\uFF0C\u70B9\u51FB\u5B9E\u4F53\u67E5\u770B\u8BE6\u60C5\uFF09"})]}),(0,z.jsx)(Wu,{scene:s||gc,selection:l})]})]})}function Z_(i){return(0,z.jsx)(Go,{children:(0,z.jsx)(q_,{...i})})}function ku(i){let e=i&&i.content||[];for(let t of e)if(t&&t.type==="text"&&typeof t.text=="string")return t.text;return""}function J_(i){if(!i||i.kind!=="tool-result"||i.isError)return null;for(let e of i.content||[])if(!(!e||e.type!=="text"||typeof e.text!="string"))try{let t=JSON.parse(e.text);if(t&&Array.isArray(t.racks)&&Array.isArray(t.aisles)&&Array.isArray(t.zones))return t}catch{}return null}function K_(i){let e=i&&i.block,t=(0,nt.useMemo)(()=>J_(e),[e]),[n,s]=(0,nt.useState)(null);return!e||e.kind!=="tool-result"?(0,z.jsx)("div",{style:ot.info,children:"\u6B63\u5728\u89E3\u6790 CAD \u56FE\u7EB8\u2026"}):e.isError?(0,z.jsxs)("div",{style:ot.info,children:["\u89E3\u6790\u5931\u8D25\uFF1A",ku(e)]}):t?(0,z.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,padding:"4px 0"},children:[(0,z.jsx)(B_,{scene:t}),t.meta&&t.meta.summary&&(t.entities||[]).length===0?(0,z.jsxs)("div",{style:ot.info,children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("b",{children:"\u6458\u8981\u6A21\u5F0F"}),"\uFF08detail: 'full' \u8FD4\u56DE\u5168\u91CF\u5B9E\u4F53\uFF09"]}),Object.entries(t.meta.summary.byType||{}).map(r=>(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:r[0]}),r[1]]},r[0])),(t.layers||[]).slice(0,24).map(r=>(0,z.jsxs)("div",{children:[(0,z.jsx)("span",{style:ot.label,children:r.name}),r.count]},r.name))]}):(0,z.jsx)("div",{style:{height:380,display:"flex"},children:(0,z.jsx)(Vu,{scene:t,selected:Gu(n),onSelect:r=>s(r?{item:r.item||null,category:r.category||null,device:r.device||(r.item&&r.item.handle!=null?Hu(t,r.item.handle):null)}:null)})}),(0,z.jsx)(Wu,{scene:t,selection:n})]}):(0,z.jsx)("pre",{style:ot.pre,children:ku(e)})}function $_(i){return(0,z.jsx)(Go,{children:(0,z.jsx)(K_,{...i})})}function j_(i){let e=i&&typeof i.size=="number"?i.size:18;return(0,z.jsx)("span",{style:{fontSize:e,lineHeight:1},children:"\u{1F4D0}"})}function Q_(i){i.slots.inject("sidebar.panellist",()=>i.slots.register({name:"sidebar.panellist",id:"cad-scene-builder",label:"3d\u89E3\u6790",order:100},j_)),i.slots.inject("main",()=>i.slots.register({name:"main",key:"cad-scene-builder"},Z_)),i.slots.inject("tool.call.toolview",()=>i.slots.register({name:"tool.call.toolview",key:"parse_cad_to_scene"},$_))}
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
