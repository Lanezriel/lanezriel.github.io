var qh=Object.defineProperty;var Yh=(r,e,t)=>e in r?qh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var So=(r,e,t)=>(Yh(r,typeof e!="symbol"?e+"":e,t),t);import{_ as wo}from"../chunks/preload-helper.a4192956.js";import{s as ct,n as pe,o as Uc,h as Kh,b as Zh,i as Ki,j as Lr,k as Jh,l as Ao,r as Qh}from"../chunks/scheduler.f1d6b102.js";import{S as ht,i as ut,g as Je,h as Qe,j as Me,f as re,k,a as qe,s as mt,z as Kt,c as gt,y as _e,A as Zn,B as Ie,C as Ue,D as Rr,d as Ft,t as zt,q as Eo,r as Xt,u as Qt,v as qt,p as eu,w as Yt,b as tu,E as nu,l as To,x as _n}from"../chunks/index.b2d7bbe1.js";import{t as iu}from"../chunks/index.f7d11c3e.js";const su=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ru(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Nc(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],o=e[s];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);r[s]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="151",au=0,Co=1,ou=2,Oc=1,Fc=2,Ts=3,zn=0,kt=1,Sn=2,ei=0,ji=1,Pr=2,Lo=3,Ro=4,lu=5,Gi=100,cu=101,hu=102,Po=103,Do=104,uu=200,du=201,fu=202,pu=203,zc=204,Bc=205,mu=206,gu=207,vu=208,_u=209,xu=210,yu=0,Mu=1,bu=2,La=3,Su=4,wu=5,Au=6,Eu=7,kc=0,Tu=1,Cu=2,Fn=0,Lu=1,Ru=2,Vc=3,Pu=4,Du=5,Hc=300,Zi=301,Ji=302,Ra=303,Pa=304,Nr=306,Qi=1e3,tn=1001,Dr=1002,wt=1003,Da=1004,Er=1005,Bt=1006,Gc=1007,_i=1008,xi=1009,Iu=1010,Uu=1011,Wc=1012,Nu=1013,di=1014,Qn=1015,Ns=1016,Ou=1017,Fu=1018,Xi=1020,zu=1021,nn=1023,Bu=1024,ku=1025,gi=1026,es=1027,Vu=1028,Hu=1029,Gu=1030,Wu=1031,$u=1033,Wr=33776,$r=33777,jr=33778,Xr=33779,Io=35840,Uo=35841,No=35842,Oo=35843,ju=36196,Fo=37492,zo=37496,Bo=37808,ko=37809,Vo=37810,Ho=37811,Go=37812,Wo=37813,$o=37814,jo=37815,Xo=37816,qo=37817,Yo=37818,Ko=37819,Zo=37820,Jo=37821,qr=36492,Xu=36283,Qo=36284,el=36285,tl=36286,Os=2300,ts=2301,Yr=2302,nl=2400,il=2401,sl=2402,qu=2500,Yu=0,$c=1,Ia=2,yi=3e3,Ze=3001,Ku=3200,Zu=3201,jc=0,Ju=1,yn="srgb",Fs="srgb-linear",Xc="display-p3",Kr=7680,Qu=519,Ua=35044,rl="300 es",Na=1035;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const Ls=Math.PI/180,ns=180/Math.PI;function pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[r&255]+Tt[r>>8&255]+Tt[r>>16&255]+Tt[r>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function qa(r,e){return(r%e+e)%e}function ed(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function td(r,e,t){return r!==e?(t-r)/(e-r):0}function Rs(r,e,t){return(1-t)*r+t*e}function nd(r,e,t,n){return Rs(r,e,1-Math.exp(-t*n))}function id(r,e=1){return e-Math.abs(qa(r,e*2)-e)}function sd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ad(r,e){return r+Math.floor(Math.random()*(e-r+1))}function od(r,e){return r+Math.random()*(e-r)}function ld(r){return r*(.5-Math.random())}function cd(r){r!==void 0&&(al=r);let e=al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hd(r){return r*Ls}function ud(r){return r*ns}function Oa(r){return(r&r-1)===0&&r!==0}function qc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fi={DEG2RAD:Ls,RAD2DEG:ns,generateUUID:pn,clamp:Lt,euclideanModulo:qa,mapLinear:ed,inverseLerp:td,lerp:Rs,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:ad,randFloat:od,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:Oa,ceilPowerOfTwo:qc,floorPowerOfTwo:Yc,setQuaternionFromProperEuler:dd,normalize:st,denormalize:On};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],y=i[1],x=i[4],v=i[7],S=i[2],E=i[5],L=i[8];return s[0]=a*_+o*y+l*S,s[3]=a*m+o*x+l*E,s[6]=a*d+o*v+l*L,s[1]=c*_+h*y+u*S,s[4]=c*m+h*x+u*E,s[7]=c*d+h*v+u*L,s[2]=f*_+p*y+g*S,s[5]=f*m+p*x+g*E,s[8]=f*d+p*v+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new Ge;function Kc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const fd=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pd=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function md(r){return r.convertSRGBToLinear().applyMatrix3(pd)}function gd(r){return r.applyMatrix3(fd).convertLinearToSRGB()}const vd={[Fs]:r=>r,[yn]:r=>r.convertSRGBToLinear(),[Xc]:md},_d={[Fs]:r=>r,[yn]:r=>r.convertLinearToSRGB(),[Xc]:gd},Wt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Fs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=vd[e],i=_d[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ai;class Zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=zs("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jc{constructor(e=null){this.isSource=!0,this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qr(i[a].image)):s.push(Qr(i[a]))}else s=Qr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class Et extends cs{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=tn,i=tn,s=Bt,a=_i,o=nn,l=xi,c=Et.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=pn(),this.name="",this.source=new Jc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Hc;Et.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(p+1)/2,S=(d+1)/2,E=(h+f)/4,L=(u+_)/4,R=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=L/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=R/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=R/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends cs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yd extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,d*y);m=Math.sin(m*E)/S,o=Math.sin(o*E)/S}const v=o*y;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+h*-o-u*-a,this.y=h*l+f*-a+u*-s-c*-o,this.z=u*l+f*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new I,ol=new Vn;class Hn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Rn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else i.boundingBox===null&&i.computeBoundingBox(),Ei.copy(i.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Js.subVectors(this.max,gs),Ti.subVectors(e.a,gs),Ci.subVectors(e.b,gs),Li.subVectors(e.c,gs),$n.subVectors(Ci,Ti),jn.subVectors(Li,Ci),ri.subVectors(Ti,Li);let t=[0,-$n.z,$n.y,0,-jn.z,jn.y,0,-ri.z,ri.y,$n.z,0,-$n.x,jn.z,0,-jn.x,ri.z,0,-ri.x,-$n.y,$n.x,0,-jn.y,jn.x,0,-ri.y,ri.x,0];return!ta(t,Ti,Ci,Li,Js)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Ti,Ci,Li,Js))?!1:(Qs.crossVectors($n,jn),t=[Qs.x,Qs.y,Qs.z],ta(t,Ti,Ci,Li,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Ei=new Hn,Ti=new I,Ci=new I,Li=new I,$n=new I,jn=new I,ri=new I,gs=new I,Js=new I,Qs=new I,ai=new I;function ta(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Md=new Hn,vs=new I,na=new I;class Gn{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(na)),this.expandByPoint(vs.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new I,ia=new I,er=new I,Xn=new I,sa=new I,tr=new I,ra=new I;class Ya{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ia.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=Xn.dot(this.direction),l=-Xn.dot(er),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ia).addScaledVector(er,f),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,s){sa.subVectors(t,e),tr.subVectors(n,e),ra.crossVectors(sa,tr);let a=this.direction.dot(ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(tr.crossVectors(Xn,tr));if(l<0)return null;const c=o*this.direction.dot(sa.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(ra);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bd,e,Sd)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),qn.crossVectors(n,$t),qn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),qn.crossVectors(n,$t)),qn.normalize(),nr.crossVectors($t,qn),i[0]=qn.x,i[4]=nr.x,i[8]=$t.x,i[1]=qn.y,i[5]=nr.y,i[9]=$t.y,i[2]=qn.z,i[6]=nr.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],x=n[7],v=n[11],S=n[15],E=i[0],L=i[4],R=i[8],M=i[12],A=i[1],F=i[5],j=i[9],D=i[13],U=i[2],z=i[6],te=i[10],J=i[14],W=i[3],Q=i[7],ne=i[11],ge=i[15];return s[0]=a*E+o*A+l*U+c*W,s[4]=a*L+o*F+l*z+c*Q,s[8]=a*R+o*j+l*te+c*ne,s[12]=a*M+o*D+l*J+c*ge,s[1]=h*E+u*A+f*U+p*W,s[5]=h*L+u*F+f*z+p*Q,s[9]=h*R+u*j+f*te+p*ne,s[13]=h*M+u*D+f*J+p*ge,s[2]=g*E+_*A+m*U+d*W,s[6]=g*L+_*F+m*z+d*Q,s[10]=g*R+_*j+m*te+d*ne,s[14]=g*M+_*D+m*J+d*ge,s[3]=y*E+x*A+v*U+S*W,s[7]=y*L+x*F+v*z+S*Q,s[11]=y*R+x*j+v*te+S*ne,s[15]=y*M+x*D+v*J+S*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+t*l*p-t*c*f+s*a*f-i*a*p+i*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,S=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,E=t*y+n*x+i*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=y*L,e[1]=(_*f*s-u*m*s-_*i*p+n*m*p+u*i*d-n*f*d)*L,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*L,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*p-n*l*p)*L,e[4]=x*L,e[5]=(h*m*s-g*f*s+g*i*p-t*m*p-h*i*d+t*f*d)*L,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*d-t*l*d)*L,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*p+t*l*p)*L,e[8]=v*L,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*d-t*u*d)*L,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*L,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*L,e[12]=S*L,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*L,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*L,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,g=s*u,_=a*h,m=a*u,d=o*u,y=l*c,x=l*h,v=l*u,S=n.x,E=n.y,L=n.z;return i[0]=(1-(_+d))*S,i[1]=(p+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(f+d))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+x)*L,i[9]=(m-y)*L,i[10]=(1-(f+_))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const a=Ri.set(i[4],i[5],i[6]).length(),o=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),f=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*l,f=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new I,cn=new ze,bd=new I(0,0,0),Sd=new I(1,1,1),qn=new I,nr=new I,$t=new I,ll=new ze,cl=new Vn;class Ws{constructor(e=0,t=0,n=0,i=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wd=0;const hl=new I,Pi=new Vn,Dn=new ze,ir=new I,_s=new I,Ad=new I,Ed=new Vn,ul=new I(1,0,0),dl=new I(0,1,0),fl=new I(0,0,1),Td={type:"added"},pl={type:"removed"};class vt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new I,t=new Ws,n=new Vn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ge}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(_s,ir,this.up):Dn.lookAt(ir,_s,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new I(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,In=new I,aa=new I,Un=new I,Di=new I,Ii=new I,ml=new I,oa=new I,la=new I,ca=new I;let sr=!1;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),In.subVectors(n,t),aa.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(In),l=hn.dot(aa),c=In.dot(In),h=In.dot(aa),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,i,s,a,o,l){return sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sr=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Un),l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),In.subVectors(e,t),hn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return sr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),sr=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Di.subVectors(i,n),Ii.subVectors(s,n),oa.subVectors(e,n);const l=Di.dot(oa),c=Ii.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,i);const h=Di.dot(la),u=Ii.dot(la);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Di,a);ca.subVectors(e,s);const p=Di.dot(ca),g=Ii.dot(ca);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ii,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ml.subVectors(s,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(ml,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cd=0;class wn extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=ji,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zc,this.blendDst=Bc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},rr={h:0,s:0,l:0};function ha(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Wt.workingColorSpace){if(e=qa(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ha(a,s,e+1/3),this.g=ha(a,s,e),this.b=ha(a,s,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Wt.fromWorkingColorSpace(Ct.copy(this),e),Lt(Ct.r*255,0,255)<<16^Lt(Ct.g*255,0,255)<<8^Lt(Ct.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,s=Ct.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=yn){Wt.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(rr);const n=Rs(un.h,rr.h,t),i=Rs(un.s,rr.s,t),s=Rs(un.l,rr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ne;Ne.NAMES=th;class pi extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,ar=new Ke;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ua,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nh extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ih extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ld=0;const Jt=new ze,ua=new vt,Ui=new I,jt=new Hn,xs=new Hn,St=new I;class mn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?ih:nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(jt.min,xs.min),jt.expandByPoint(St),St.addVectors(jt.max,xs.max),jt.expandByPoint(St)):(jt.expandByPoint(xs.min),jt.expandByPoint(xs.max))}jt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),St.add(Ui)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new I,h[A]=new I;const u=new I,f=new I,p=new I,g=new Ke,_=new Ke,m=new Ke,d=new I,y=new I;function x(A,F,j){u.fromArray(i,A*3),f.fromArray(i,F*3),p.fromArray(i,j*3),g.fromArray(a,A*2),_.fromArray(a,F*2),m.fromArray(a,j*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const D=1/(_.x*m.y-m.x*_.y);isFinite(D)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(D),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(D),c[A].add(d),c[F].add(d),c[j].add(d),h[A].add(y),h[F].add(y),h[j].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let A=0,F=v.length;A<F;++A){const j=v[A],D=j.start,U=j.count;for(let z=D,te=D+U;z<te;z+=3)x(n[z+0],n[z+1],n[z+2])}const S=new I,E=new I,L=new I,R=new I;function M(A){L.fromArray(s,A*3),R.copy(L);const F=c[A];S.copy(F),S.sub(L.multiplyScalar(L.dot(F))).normalize(),E.crossVectors(R,F);const D=E.dot(h[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=D}for(let A=0,F=v.length;A<F;++A){const j=v[A],D=j.start,U=j.count;for(let z=D,te=D+U;z<te;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new ze,xn=new Ya,or=new Gn,vl=new I,Ni=new I,Oi=new I,Fi=new I,da=new I,lr=new I,cr=new Ke,hr=new Ke,ur=new Ke,_l=new I,xl=new I,yl=new I,dr=new I,fr=new I;class Nt extends vt{constructor(e=new mn,t=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){lr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(da.fromBufferAttribute(u,e),a?lr.addScaledVector(da,h):lr.addScaledVector(da.sub(t),h))}t.add(lr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),xn.copy(e.ray).recast(e.near),or.containsPoint(xn.origin)===!1&&(xn.intersectSphere(or,vl)===null||xn.origin.distanceToSquared(vl)>(e.far-e.near)**2))||(gl.copy(s).invert(),xn.copy(e.ray).applyMatrix4(gl),n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=i[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=x;v<S;v+=3){const E=o.getX(v),L=o.getX(v+1),R=o.getX(v+2);a=pr(this,d,e,xn,c,h,u,E,L,R),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);a=pr(this,i,e,xn,c,h,u,y,x,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=i[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=x;v<S;v+=3){const E=v,L=v+1,R=v+2;a=pr(this,d,e,xn,c,h,u,E,L,R),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,x=m+1,v=m+2;a=pr(this,i,e,xn,c,h,u,y,x,v),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Rd(r,e,t,n,i,s,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===zn,o),l===null)return null;fr.copy(o),fr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:r}}function pr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ni),r.getVertexPosition(l,Oi),r.getVertexPosition(c,Fi);const h=Rd(r,e,t,n,Ni,Oi,Fi,dr);if(h){i&&(cr.fromBufferAttribute(i,o),hr.fromBufferAttribute(i,l),ur.fromBufferAttribute(i,c),h.uv=dn.getInterpolation(dr,Ni,Oi,Fi,cr,hr,ur,new Ke)),s&&(cr.fromBufferAttribute(s,o),hr.fromBufferAttribute(s,l),ur.fromBufferAttribute(s,c),h.uv2=dn.getInterpolation(dr,Ni,Oi,Fi,cr,hr,ur,new Ke)),a&&(_l.fromBufferAttribute(a,o),xl.fromBufferAttribute(a,l),yl.fromBufferAttribute(a,c),h.normal=dn.getInterpolation(dr,Ni,Oi,Fi,_l,xl,yl,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new I,materialIndex:0};dn.getNormal(Ni,Oi,Fi,u.normal),h.face=u}return h}class hs extends mn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function g(_,m,d,y,x,v,S,E,L,R,M){const A=v/L,F=S/R,j=v/2,D=S/2,U=E/2,z=L+1,te=R+1;let J=0,W=0;const Q=new I;for(let ne=0;ne<te;ne++){const ge=ne*F-D;for(let ce=0;ce<z;ce++){const V=ce*A-j;Q[_]=V*y,Q[m]=ge*x,Q[d]=U,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[d]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ce/L),u.push(1-ne/R),J+=1}}for(let ne=0;ne<R;ne++)for(let ge=0;ge<L;ge++){const ce=f+ge+z*ne,V=f+ge+z*(ne+1),Y=f+(ge+1)+z*(ne+1),oe=f+(ge+1)+z*ne;l.push(ce,V,oe),l.push(V,Y,oe),W+=6}o.addGroup(p,W,M),p+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function Pd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sh(r){return r.getRenderTarget()===null&&r.outputEncoding===Ze?yn:Fs}const Dd={clone:is,merge:It};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let rh=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ut extends rh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,Bi=1;class Nd extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ut(zi,Bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ut(zi,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ut(zi,Bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ut(zi,Bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ut(zi,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ut(zi,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Fn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ka extends Et{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Od extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:ei});s.uniforms.tEquirect.value=t;const a=new Nt(i,s),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=Bt),new Nd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const fa=new I,Fd=new I,zd=new Ge;class li{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fa.subVectors(n,t).cross(Fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Gn,mr=new I;class Za{constructor(e=new li,t=new li,n=new li,i=new li,s=new li,a=new li){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],p=n[9],g=n[10],_=n[11],m=n[12],d=n[13],y=n[14],x=n[15];return t[0].setComponents(o-i,u-l,_-f,x-m).normalize(),t[1].setComponents(o+i,u+l,_+f,x+m).normalize(),t[2].setComponents(o+s,u+c,_+p,x+d).normalize(),t[3].setComponents(o-s,u-c,_-p,x-d).normalize(),t[4].setComponents(o-a,u-h,_-g,x-y).normalize(),t[5].setComponents(o+a,u+h,_+g,x+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(mr.x=i.normal.x>0?e.max.x:e.min.x,mr.y=i.normal.y>0?e.max.y:e.min.y,mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ah(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class $s extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const y=d*f-a;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const x=y+c*d,v=y+c*(d+1),S=y+1+c*(d+1),E=y+1+c*d;p.push(x,v,E),p.push(v,S,E)}this.setIndex(p),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}var kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd="vec3 transformed = vec3( position );",Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,af=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Rf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,If=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ff=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Mp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dp=`#ifdef USE_UV
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
#endif`,Ip=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,Up=`#ifdef USE_UV
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Zp=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,tm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,om=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:kd,alphamap_pars_fragment:Vd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:$d,begin_vertex:jd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:rf,common:af,cube_uv_reflection_fragment:of,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:hf,emissivemap_fragment:uf,emissivemap_pars_fragment:df,encodings_fragment:ff,encodings_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:gf,envmap_pars_fragment:vf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Rf,envmap_vertex:xf,fog_vertex:yf,fog_pars_vertex:Mf,fog_fragment:bf,fog_pars_fragment:Sf,gradientmap_pars_fragment:wf,lightmap_fragment:Af,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Lf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Df,lights_phong_fragment:If,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Of,lights_fragment_begin:Ff,lights_fragment_maps:zf,lights_fragment_end:Bf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Wf,map_pars_fragment:$f,map_particle_fragment:jf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphcolor_vertex:Kf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,output_fragment:hp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:xp,shadowmap_vertex:yp,shadowmask_pars_fragment:Mp,skinbase_vertex:bp,skinning_pars_vertex:Sp,skinning_vertex:wp,skinnormal_vertex:Ap,specularmap_fragment:Ep,specularmap_pars_fragment:Tp,tonemapping_fragment:Cp,tonemapping_pars_fragment:Lp,transmission_fragment:Rp,transmission_pars_fragment:Pp,uv_pars_fragment:Dp,uv_pars_vertex:Ip,uv_vertex:Up,worldpos_vertex:Np,background_vert:Op,background_frag:Fp,backgroundCube_vert:zp,backgroundCube_frag:Bp,cube_vert:kp,cube_frag:Vp,depth_vert:Hp,depth_frag:Gp,distanceRGBA_vert:Wp,distanceRGBA_frag:$p,equirect_vert:jp,equirect_frag:Xp,linedashed_vert:qp,linedashed_frag:Yp,meshbasic_vert:Kp,meshbasic_frag:Zp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},Mn={basic:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:It([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:It([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:It([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:It([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:It([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:It([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:It([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:It([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:It([ue.common,ue.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:It([ue.lights,ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Mn.physical={uniforms:It([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const gr={r:0,b:0,g:0};function gm(r,e,t,n,i,s,a){const o=new Ne(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x));const v=r.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Nr)?(h===void 0&&(h=new Nt(new hs(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:is(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=x.encoding!==Ze,(u!==x||f!==x.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Nt(new $s(2,2),new Bn({name:"BackgroundMaterial",uniforms:is(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.encoding!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(gr,sh(r)),n.buffers.color.setClear(gr.r,gr.g,gr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function vm(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function u(U,z,te,J,W){let Q=!1;if(a){const ne=_(J,te,z);c!==ne&&(c=ne,p(c.object)),Q=d(U,J,te,W),Q&&y(U,J,te,W)}else{const ne=z.wireframe===!0;(c.geometry!==J.id||c.program!==te.id||c.wireframe!==ne)&&(c.geometry=J.id,c.program=te.id,c.wireframe=ne,Q=!0)}W!==null&&t.update(W,34963),(Q||h)&&(h=!1,R(U,z,te,J),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,z,te){const J=te.wireframe===!0;let W=o[U.id];W===void 0&&(W={},o[U.id]=W);let Q=W[z.id];Q===void 0&&(Q={},W[z.id]=Q);let ne=Q[J];return ne===void 0&&(ne=m(f()),Q[J]=ne),ne}function m(U){const z=[],te=[],J=[];for(let W=0;W<i;W++)z[W]=0,te[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:te,attributeDivisors:J,object:U,attributes:{},index:null}}function d(U,z,te,J){const W=c.attributes,Q=z.attributes;let ne=0;const ge=te.getAttributes();for(const ce in ge)if(ge[ce].location>=0){const Y=W[ce];let oe=Q[ce];if(oe===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;ne++}return c.attributesNum!==ne||c.index!==J}function y(U,z,te,J){const W={},Q=z.attributes;let ne=0;const ge=te.getAttributes();for(const ce in ge)if(ge[ce].location>=0){let Y=Q[ce];Y===void 0&&(ce==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),ce==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),W[ce]=oe,ne++}c.attributes=W,c.attributesNum=ne,c.index=J}function x(){const U=c.newAttributes;for(let z=0,te=U.length;z<te;z++)U[z]=0}function v(U){S(U,0)}function S(U,z){const te=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;te[U]=1,J[U]===0&&(r.enableVertexAttribArray(U),J[U]=1),W[U]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),W[U]=z)}function E(){const U=c.newAttributes,z=c.enabledAttributes;for(let te=0,J=z.length;te<J;te++)z[te]!==U[te]&&(r.disableVertexAttribArray(te),z[te]=0)}function L(U,z,te,J,W,Q){n.isWebGL2===!0&&(te===5124||te===5125)?r.vertexAttribIPointer(U,z,te,W,Q):r.vertexAttribPointer(U,z,te,J,W,Q)}function R(U,z,te,J){if(n.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=J.attributes,Q=te.getAttributes(),ne=z.defaultAttributeValues;for(const ge in Q){const ce=Q[ge];if(ce.location>=0){let V=W[ge];if(V===void 0&&(ge==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),ge==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const Y=V.normalized,oe=V.itemSize,le=t.get(V);if(le===void 0)continue;const B=le.buffer,we=le.type,H=le.bytesPerElement;if(V.isInterleavedBufferAttribute){const ee=V.data,me=ee.stride,Be=V.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<ce.locationSize;ye++)S(ce.location+ye,ee.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<ce.locationSize;ye++)v(ce.location+ye);r.bindBuffer(34962,B);for(let ye=0;ye<ce.locationSize;ye++)L(ce.location+ye,oe/ce.locationSize,we,Y,me*H,(Be+oe/ce.locationSize*ye)*H)}else{if(V.isInstancedBufferAttribute){for(let ee=0;ee<ce.locationSize;ee++)S(ce.location+ee,V.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ee=0;ee<ce.locationSize;ee++)v(ce.location+ee);r.bindBuffer(34962,B);for(let ee=0;ee<ce.locationSize;ee++)L(ce.location+ee,oe/ce.locationSize,we,Y,oe*H,oe/ce.locationSize*ee*H)}}else if(ne!==void 0){const Y=ne[ge];if(Y!==void 0)switch(Y.length){case 2:r.vertexAttrib2fv(ce.location,Y);break;case 3:r.vertexAttrib3fv(ce.location,Y);break;case 4:r.vertexAttrib4fv(ce.location,Y);break;default:r.vertexAttrib1fv(ce.location,Y)}}}}E()}function M(){j();for(const U in o){const z=o[U];for(const te in z){const J=z[te];for(const W in J)g(J[W].object),delete J[W];delete z[te]}delete o[U]}}function A(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const te in z){const J=z[te];for(const W in J)g(J[W].object),delete J[W];delete z[te]}delete o[U.id]}function F(U){for(const z in o){const te=o[z];if(te[U.id]===void 0)continue;const J=te[U.id];for(const W in J)g(J[W].object),delete J[W];delete te[U.id]}}function j(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:j,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:v,disableUnusedAttributes:E}}function _m(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function xm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),_=r.getParameter(34921),m=r.getParameter(36347),d=r.getParameter(36348),y=r.getParameter(36349),x=f>0,v=a||e.has("OES_texture_float"),S=x&&v,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:E}}function ym(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new li,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:n,x=y*4;let v=d.clippingState||null;l.value=v,v=h(g,f,x,p);for(let S=0;S!==x;++S)v[S]=t[S];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mm(r){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=Zi:o===Pa&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ra||o===Pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Od(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ja extends rh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Ml=[.125,.215,.35,.446,.526,.582],ui=20,pa=new Ja,bl=new Ne;let ma=null;const ci=(1+Math.sqrt(5))/2,ki=1/ci,Sl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ci,ki),new I(0,ci,-ki),new I(ki,0,ci),new I(-ki,0,ci),new I(ci,ki,0),new I(-ci,ki,0)];class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma),e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ns,format:nn,encoding:yi,depthBuffer:!1},i=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(s)),this._blurMaterial=Sm(s,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i){const o=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bl),h.toneMapping=Fn,h.autoClear=!1;const p=new pi({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Nt(new hs,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(bl),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;vr(i,y*x,d>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sl[(i-1)%Sl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const d=[];let y=0;for(let L=0;L<ui;++L){const R=L/_,M=Math.exp(-R*R/2);d.push(M),L===0?y+=M:L<m&&(y+=2*M)}for(let L=0;L<d.length;L++)d[L]=d[L]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-$i?i-x+$i:0),E=4*(this._cubeSize-v);vr(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(u,pa)}}function bm(r){const e=[],t=[],n=[];let i=r;const s=r-$i+1+Ml.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-$i?l=Ml[a-r+$i-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let E=0;E<p;E++){const L=E%3*2/3-1,R=E>2?0:-1,M=[L,R,0,L+2/3,R,0,L+2/3,R+1,0,L,R,0,L+2/3,R+1,0,L,R+1,0];y.set(M,_*g*E),x.set(f,m*g*E);const A=[E,E,E,E,E,E];v.set(A,d*g*E)}const S=new mn;S.setAttribute("position",new Ot(y,_)),S.setAttribute("uv",new Ot(x,m)),S.setAttribute("faceIndex",new Ot(v,d)),e.push(S),i>$i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(r,e,t){const n=new Mi(r,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sm(r,e,t){const n=new Float32Array(ui),i=new I(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function El(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Tl(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function wm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Pa,h=l===Zi||l===Ji;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new wl(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new wl(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Am(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Em(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],34962)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){const S=y[x+0],E=y[x+1],L=y[x+2];f.push(S,E,E,L,L,S)}}else{const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const S=x+0,E=x+1,L=x+2;f.push(S,E,E,L,L,S)}}const m=new(Kc(f)?ih:nh)(f,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tm(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){r.drawElements(s,p,o,f*l),t.update(p,s,1)}function u(f,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,f*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function Cm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lm(r,e){return r[0]-e[0]}function Rm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Pm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let U=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let R=0;y===!0&&(R=1),x===!0&&(R=2),v===!0&&(R=3);let M=h.attributes.position.count*R,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*A*4*g),j=new Qc(F,M,A,g);j.type=Qn,j.needsUpdate=!0;const D=R*4;for(let z=0;z<g;z++){const te=S[z],J=E[z],W=L[z],Q=M*A*4*z;for(let ne=0;ne<te.count;ne++){const ge=ne*D;y===!0&&(a.fromBufferAttribute(te,ne),F[Q+ge+0]=a.x,F[Q+ge+1]=a.y,F[Q+ge+2]=a.z,F[Q+ge+3]=0),x===!0&&(a.fromBufferAttribute(J,ne),F[Q+ge+4]=a.x,F[Q+ge+5]=a.y,F[Q+ge+6]=a.z,F[Q+ge+7]=0),v===!0&&(a.fromBufferAttribute(W,ne),F[Q+ge+8]=a.x,F[Q+ge+9]=a.y,F[Q+ge+10]=a.z,F[Q+ge+11]=W.itemSize===4?a.w:1)}}_={count:g,texture:j,size:new Ke(M,A)},s.set(h,_),h.addEventListener("dispose",U)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",d),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<p;x++){const v=g[x];v[0]=x,v[1]=f[x]}g.sort(Rm);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Lm);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const v=o[x],S=v[0],E=v[1];S!==Number.MAX_SAFE_INTEGER&&E?(_&&h.getAttribute("morphTarget"+x)!==_[S]&&h.setAttribute("morphTarget"+x,_[S]),m&&h.getAttribute("morphNormal"+x)!==m[S]&&h.setAttribute("morphNormal"+x,m[S]),i[x]=E,d+=E):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dm(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const oh=new Et,lh=new Qc,ch=new yd,hh=new Ka,Cl=[],Ll=[],Rl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function us(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Cl[i];if(s===void 0&&(s=new Float32Array(i),Cl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Or(r,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Im(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Um(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function Nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function Fm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Dl.set(n),r.uniformMatrix2fv(this.addr,!1,Dl),Mt(t,n)}}function zm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Pl.set(n),r.uniformMatrix3fv(this.addr,!1,Pl),Mt(t,n)}}function Bm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Rl.set(n),r.uniformMatrix4fv(this.addr,!1,Rl),Mt(t,n)}}function km(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function Gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function Wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function Xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function qm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||oh,i)}function Ym(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ch,i)}function Km(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hh,i)}function Zm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lh,i)}function Jm(r){switch(r){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return $m;case 36295:return jm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Zm}}function Qm(r,e){r.uniform1fv(this.addr,e)}function e0(r,e){const t=us(e,this.size,2);r.uniform2fv(this.addr,t)}function t0(r,e){const t=us(e,this.size,3);r.uniform3fv(this.addr,t)}function n0(r,e){const t=us(e,this.size,4);r.uniform4fv(this.addr,t)}function i0(r,e){const t=us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function s0(r,e){const t=us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r0(r,e){const t=us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function a0(r,e){r.uniform1iv(this.addr,e)}function o0(r,e){r.uniform2iv(this.addr,e)}function l0(r,e){r.uniform3iv(this.addr,e)}function c0(r,e){r.uniform4iv(this.addr,e)}function h0(r,e){r.uniform1uiv(this.addr,e)}function u0(r,e){r.uniform2uiv(this.addr,e)}function d0(r,e){r.uniform3uiv(this.addr,e)}function f0(r,e){r.uniform4uiv(this.addr,e)}function p0(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||oh,s[a])}function m0(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ch,s[a])}function g0(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hh,s[a])}function v0(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);yt(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lh,s[a])}function _0(r){switch(r){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jm(t.type)}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_0(t.type)}}class M0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Il(r,e){r.seq.push(e),r.map[e.id]=e}function b0(r,e,t){const n=r.name,i=n.length;for(ga.lastIndex=0;;){const s=ga.exec(n),a=ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Il(t,c===void 0?new x0(o,r,e):new y0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new M0(o),Il(t,u)),t=u}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);b0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ul(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let S0=0;function w0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function A0(r){switch(r){case yi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Nl(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+w0(r.getShaderSource(e),a)}else return i}function E0(r,e){const t=A0(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function T0(r,e){let t;switch(e){case Lu:t="Linear";break;case Ru:t="Reinhard";break;case Vc:t="OptimizedCineon";break;case Pu:t="ACESFilmic";break;case Du:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function L0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R0(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cs(r){return r!==""}function Ol(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(r){return r.replace(P0,D0)}function D0(r,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fa(t)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(r){return r.replace(I0,U0)}function U0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ts&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zi:case Ji:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function z0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case Tu:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function B0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function k0(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=N0(t),c=O0(t),h=F0(t),u=z0(t),f=B0(t),p=t.isWebGL2?"":C0(t),g=L0(s),_=i.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Cs).join(`
`),d.length>0&&(d+=`
`)):(m=[Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),d=[p,Bl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,E0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Fa(a),a=Ol(a,t),a=Fl(a,t),o=Fa(o),o=Ol(o,t),o=Fl(o,t),a=zl(a),o=zl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+a,v=y+d+o,S=Ul(i,35633,x),E=Ul(i,35632,v);if(i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),A=i.getShaderInfoLog(S).trim(),F=i.getShaderInfoLog(E).trim();let j=!0,D=!0;if(i.getProgramParameter(_,35714)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,E);else{const U=Nl(i,S,"vertex"),z=Nl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+M+`
`+U+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||F==="")&&(D=!1);D&&(this.diagnostics={runnable:j,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:F,prefix:d}})}i.deleteShader(S),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Tr(i,_)),L};let R;return this.getAttributes=function(){return R===void 0&&(R=R0(i,_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let V0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new G0(e),t.set(e,n)),n}}class G0{constructor(e){this.id=V0++,this.code=e,this.usedTimes=0}}function W0(r,e,t,n,i,s,a){const o=new eh,l=new H0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===1?"uv2":"uv"}function m(M,A,F,j,D){const U=j.fog,z=D.geometry,te=M.isMeshStandardMaterial?j.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),W=J&&J.mapping===Nr?J.image.height:null,Q=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=ne!==void 0?ne.length:0;let ce=0;z.morphAttributes.position!==void 0&&(ce=1),z.morphAttributes.normal!==void 0&&(ce=2),z.morphAttributes.color!==void 0&&(ce=3);let V,Y,oe,le;if(Q){const fe=Mn[Q];V=fe.vertexShader,Y=fe.fragmentShader}else V=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const B=r.getRenderTarget(),we=D.isInstancedMesh===!0,H=!!M.map,ee=!!M.matcap,me=!!J,Be=!!M.aoMap,ye=!!M.lightMap,Pe=!!M.bumpMap,at=!!M.normalMap,ot=!!M.displacementMap,Xe=!!M.emissiveMap,dt=!!M.metalnessMap,We=!!M.roughnessMap,Ye=M.clearcoat>0,ft=M.iridescence>0,T=M.sheen>0,b=M.transmission>0,$=Ye&&!!M.clearcoatMap,se=Ye&&!!M.clearcoatNormalMap,ae=Ye&&!!M.clearcoatRoughnessMap,de=ft&&!!M.iridescenceMap,Ce=ft&&!!M.iridescenceThicknessMap,ve=T&&!!M.sheenColorMap,q=T&&!!M.sheenRoughnessMap,Se=!!M.specularMap,Ee=!!M.specularColorMap,Le=!!M.specularIntensityMap,P=b&&!!M.transmissionMap,K=b&&!!M.thicknessMap,he=!!M.gradientMap,be=!!M.alphaMap,Ae=M.alphaTest>0,C=!!M.extensions,G=!!z.attributes.uv2;return{isWebGL2:h,shaderID:Q,shaderName:M.type,vertexShader:V,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:we,instancingColor:we&&D.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?r.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:yi,map:H,matcap:ee,envMap:me,envMapMode:me&&J.mapping,envMapCubeUVHeight:W,aoMap:Be,lightMap:ye,bumpMap:Pe,normalMap:at,displacementMap:f&&ot,emissiveMap:Xe,normalMapObjectSpace:at&&M.normalMapType===Ju,normalMapTangentSpace:at&&M.normalMapType===jc,decodeVideoTexture:H&&M.map.isVideoTexture===!0&&M.map.encoding===Ze,metalnessMap:dt,roughnessMap:We,clearcoat:Ye,clearcoatMap:$,clearcoatNormalMap:se,clearcoatRoughnessMap:ae,iridescence:ft,iridescenceMap:de,iridescenceThicknessMap:Ce,sheen:T,sheenColorMap:ve,sheenRoughnessMap:q,specularMap:Se,specularColorMap:Ee,specularIntensityMap:Le,transmission:b,transmissionMap:P,thicknessMap:K,gradientMap:he,opaque:M.transparent===!1&&M.blending===ji,alphaMap:be,alphaTest:Ae,combine:M.combine,mapUv:H&&_(M.map.channel),aoMapUv:Be&&_(M.aoMap.channel),lightMapUv:ye&&_(M.lightMap.channel),bumpMapUv:Pe&&_(M.bumpMap.channel),normalMapUv:at&&_(M.normalMap.channel),displacementMapUv:ot&&_(M.displacementMap.channel),emissiveMapUv:Xe&&_(M.emissiveMap.channel),metalnessMapUv:dt&&_(M.metalnessMap.channel),roughnessMapUv:We&&_(M.roughnessMap.channel),clearcoatMapUv:$&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:q&&_(M.sheenRoughnessMap.channel),specularMapUv:Se&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:Le&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:K&&_(M.thicknessMap.channel),alphaMapUv:be&&_(M.alphaMap.channel),vertexTangents:at&&!!z.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:G,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(H||be),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Fn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Sn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:C&&M.extensions.derivatives===!0,extensionFragDepth:C&&M.extensions.fragDepth===!0,extensionDrawBuffers:C&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)A.push(F),A.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(y(A,M),x(A,M),A.push(r.outputEncoding)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputEncoding),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function x(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUvs2&&o.enable(13),A.vertexTangents&&o.enable(14),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.decodeVideoTexture&&o.enable(17),A.opaque&&o.enable(18),A.pointsUvs&&o.enable(19),M.push(o.mask)}function v(M){const A=g[M.type];let F;if(A){const j=Mn[A];F=Dd.clone(j.uniforms)}else F=M.uniforms;return F}function S(M,A){let F;for(let j=0,D=c.length;j<D;j++){const U=c[j];if(U.cacheKey===A){F=U,++F.usedTimes;break}}return F===void 0&&(F=new k0(r,A,M,s),c.push(F)),F}function E(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function L(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:R}}function $0(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function j0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,g,_,m){let d=r[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||j0),n.length>1&&n.sort(f||kl),i.length>1&&i.sort(f||kl)}function h(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function X0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Vl,r.set(n,[a])):i>=s.length?(a=new Vl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function q0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ne};break;case"SpotLight":t={position:new I,direction:new I,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Y0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let K0=0;function Z0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function J0(r,e){const t=new q0,n=Y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new I);const s=new I,a=new ze,o=new ze;function l(h,u){let f=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,v=0,S=0,E=0,L=0,R=0;h.sort(Z0);const M=u===!0?Math.PI:1;for(let F=0,j=h.length;F<j;F++){const D=h[F],U=D.color,z=D.intensity,te=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*z*M,p+=U.g*z*M,g+=U.b*z*M;else if(D.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],z);else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const Q=D.shadow,ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[_]=ne,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=W,_++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(z*M),W.distance=te,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[d]=W;const Q=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[d]=Q.matrix,D.castShadow){const ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[d]=ne,i.spotShadowMap[d]=J,E++}d++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=W,y++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*M),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Q=D.shadow,ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(z*M),W.groundColor.copy(D.groundColor).multiplyScalar(z*M),i.hemi[x]=W,x++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const A=i.hash;(A.directionalLength!==_||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==v||A.numPointShadows!==S||A.numSpotShadows!==E||A.numSpotMaps!==L)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,A.directionalLength=_,A.pointLength=m,A.spotLength=d,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=v,A.numPointShadows=S,A.numSpotShadows=E,A.numSpotMaps=L,i.version=K0++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const v=h[y];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),f++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(v.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Hl(r,e){const t=new J0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q0(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Hl(r,e),t.set(s,[l])):a>=o.length?(l=new Hl(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class eg extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sg(r,e,t){let n=new Za;const i=new Ke,s=new Ke,a=new rt,o=new eg({depthPacking:Zu}),l=new tg,c={},h=t.maxTextureSize,u={[zn]:kt,[kt]:zn,[Sn]:Sn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc,this.render=function(v,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const L=r.getRenderTarget(),R=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),A=r.state;A.setBlending(ei),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let F=0,j=v.length;F<j;F++){const D=v[F],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const z=U.getFrameExtents();if(i.multiply(z),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null){const J=this.type!==Ts?{minFilter:wt,magFilter:wt}:{};U.map=new Mi(i.x,i.y,J),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const te=U.getViewportCount();for(let J=0;J<te;J++){const W=U.getViewport(J);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),A.viewport(a),U.updateMatrices(D,J),n=U.getFrustum(),x(S,E,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Ts&&d(U,E),U.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,R,M)};function d(v,S){const E=e.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Mi(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(S,null,E,f,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(S,null,E,p,_,null)}function y(v,S,E,L){let R=null;const M=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(M!==void 0)R=M;else if(R=E.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const A=R.uuid,F=S.uuid;let j=c[A];j===void 0&&(j={},c[A]=j);let D=j[F];D===void 0&&(D=R.clone(),j[F]=D),R=D}if(R.visible=S.visible,R.wireframe=S.wireframe,L===Ts?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:u[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const A=r.properties.get(R);A.light=E}return R}function x(v,S,E,L,R){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Ts)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const F=e.update(v),j=v.material;if(Array.isArray(j)){const D=F.groups;for(let U=0,z=D.length;U<z;U++){const te=D[U],J=j[te.materialIndex];if(J&&J.visible){const W=y(v,J,L,R);r.renderBufferDirect(E,null,F,W,v,te)}}}else if(j.visible){const D=y(v,j,L,R);r.renderBufferDirect(E,null,F,D,v,null)}}const A=v.children;for(let F=0,j=A.length;F<j;F++)x(A[F],S,E,L,R)}}function rg(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const G=new rt;let ie=null;const fe=new rt(0,0,0,0);return{setMask:function(xe){ie!==xe&&!C&&(r.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){C=xe},setClear:function(xe,et,nt,pt,gn){gn===!0&&(xe*=pt,et*=pt,nt*=pt),G.set(xe,et,nt,pt),fe.equals(G)===!1&&(r.clearColor(xe,et,nt,pt),fe.copy(G))},reset:function(){C=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let C=!1,G=null,ie=null,fe=null;return{setTest:function(xe){xe?B(2929):we(2929)},setMask:function(xe){G!==xe&&!C&&(r.depthMask(xe),G=xe)},setFunc:function(xe){if(ie!==xe){switch(xe){case yu:r.depthFunc(512);break;case Mu:r.depthFunc(519);break;case bu:r.depthFunc(513);break;case La:r.depthFunc(515);break;case Su:r.depthFunc(514);break;case wu:r.depthFunc(518);break;case Au:r.depthFunc(516);break;case Eu:r.depthFunc(517);break;default:r.depthFunc(515)}ie=xe}},setLocked:function(xe){C=xe},setClear:function(xe){fe!==xe&&(r.clearDepth(xe),fe=xe)},reset:function(){C=!1,G=null,ie=null,fe=null}}}function a(){let C=!1,G=null,ie=null,fe=null,xe=null,et=null,nt=null,pt=null,gn=null;return{setTest:function(lt){C||(lt?B(2960):we(2960))},setMask:function(lt){G!==lt&&!C&&(r.stencilMask(lt),G=lt)},setFunc:function(lt,At,vn){(ie!==lt||fe!==At||xe!==vn)&&(r.stencilFunc(lt,At,vn),ie=lt,fe=At,xe=vn)},setOp:function(lt,At,vn){(et!==lt||nt!==At||pt!==vn)&&(r.stencilOp(lt,At,vn),et=lt,nt=At,pt=vn)},setLocked:function(lt){C=lt},setClear:function(lt){gn!==lt&&(r.clearStencil(lt),gn=lt)},reset:function(){C=!1,G=null,ie=null,fe=null,xe=null,et=null,nt=null,pt=null,gn=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,S=null,E=null,L=null,R=null,M=!1,A=null,F=null,j=null,D=null,U=null;const z=r.getParameter(35661);let te=!1,J=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),te=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),te=J>=2);let Q=null,ne={};const ge=r.getParameter(3088),ce=r.getParameter(2978),V=new rt().fromArray(ge),Y=new rt().fromArray(ce);function oe(C,G,ie){const fe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(C,xe),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let et=0;et<ie;et++)r.texImage2D(G+et,0,6408,1,1,0,6408,5121,fe);return xe}const le={};le[3553]=oe(3553,3553,1),le[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(La),ot(!1),Xe(Co),B(2884),Pe(ei);function B(C){f[C]!==!0&&(r.enable(C),f[C]=!0)}function we(C){f[C]!==!1&&(r.disable(C),f[C]=!1)}function H(C,G){return p[C]!==G?(r.bindFramebuffer(C,G),p[C]=G,n&&(C===36009&&(p[36160]=G),C===36160&&(p[36009]=G)),!0):!1}function ee(C,G){let ie=_,fe=!1;if(C)if(ie=g.get(G),ie===void 0&&(ie=[],g.set(G,ie)),C.isWebGLMultipleRenderTargets){const xe=C.texture;if(ie.length!==xe.length||ie[0]!==36064){for(let et=0,nt=xe.length;et<nt;et++)ie[et]=36064+et;ie.length=xe.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function me(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const Be={[Gi]:32774,[cu]:32778,[hu]:32779};if(n)Be[Po]=32775,Be[Do]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Be[Po]=C.MIN_EXT,Be[Do]=C.MAX_EXT)}const ye={[uu]:0,[du]:1,[fu]:768,[zc]:770,[xu]:776,[vu]:774,[mu]:772,[pu]:769,[Bc]:771,[_u]:775,[gu]:773};function Pe(C,G,ie,fe,xe,et,nt,pt){if(C===ei){d===!0&&(we(3042),d=!1);return}if(d===!1&&(B(3042),d=!0),C!==lu){if(C!==y||pt!==M){if((x!==Gi||E!==Gi)&&(r.blendEquation(32774),x=Gi,E=Gi),pt)switch(C){case ji:r.blendFuncSeparate(1,771,1,771);break;case Pr:r.blendFunc(1,1);break;case Lo:r.blendFuncSeparate(0,769,0,1);break;case Ro:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ji:r.blendFuncSeparate(770,771,1,771);break;case Pr:r.blendFunc(770,1);break;case Lo:r.blendFuncSeparate(0,769,0,1);break;case Ro:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}v=null,S=null,L=null,R=null,y=C,M=pt}return}xe=xe||G,et=et||ie,nt=nt||fe,(G!==x||xe!==E)&&(r.blendEquationSeparate(Be[G],Be[xe]),x=G,E=xe),(ie!==v||fe!==S||et!==L||nt!==R)&&(r.blendFuncSeparate(ye[ie],ye[fe],ye[et],ye[nt]),v=ie,S=fe,L=et,R=nt),y=C,M=!1}function at(C,G){C.side===Sn?we(2884):B(2884);let ie=C.side===kt;G&&(ie=!ie),ot(ie),C.blending===ji&&C.transparent===!1?Pe(ei):Pe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const fe=C.stencilWrite;c.setTest(fe),fe&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),We(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?B(32926):we(32926)}function ot(C){A!==C&&(C?r.frontFace(2304):r.frontFace(2305),A=C)}function Xe(C){C!==au?(B(2884),C!==F&&(C===Co?r.cullFace(1029):C===ou?r.cullFace(1028):r.cullFace(1032))):we(2884),F=C}function dt(C){C!==j&&(te&&r.lineWidth(C),j=C)}function We(C,G,ie){C?(B(32823),(D!==G||U!==ie)&&(r.polygonOffset(G,ie),D=G,U=ie)):we(32823)}function Ye(C){C?B(3089):we(3089)}function ft(C){C===void 0&&(C=33984+z-1),Q!==C&&(r.activeTexture(C),Q=C)}function T(C,G,ie){ie===void 0&&(Q===null?ie=33984+z-1:ie=Q);let fe=ne[ie];fe===void 0&&(fe={type:void 0,texture:void 0},ne[ie]=fe),(fe.type!==C||fe.texture!==G)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(C,G||le[C]),fe.type=C,fe.texture=G)}function b(){const C=ne[Q];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function P(C){V.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),V.copy(C))}function K(C){Y.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Y.copy(C))}function he(C,G){let ie=u.get(G);ie===void 0&&(ie=new WeakMap,u.set(G,ie));let fe=ie.get(C);fe===void 0&&(fe=r.getUniformBlockIndex(G,C.name),ie.set(C,fe))}function be(C,G){const fe=u.get(G).get(C);h.get(G)!==fe&&(r.uniformBlockBinding(G,fe,C.__bindingPointIndex),h.set(G,fe))}function Ae(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Q=null,ne={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,S=null,E=null,L=null,R=null,M=!1,A=null,F=null,j=null,D=null,U=null,V.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:B,disable:we,bindFramebuffer:H,drawBuffers:ee,useProgram:me,setBlending:Pe,setMaterial:at,setFlipSided:ot,setCullFace:Xe,setLineWidth:dt,setPolygonOffset:We,setScissorTest:Ye,activeTexture:ft,bindTexture:T,unbindTexture:b,compressedTexImage2D:$,compressedTexImage3D:se,texImage2D:Ee,texImage3D:Le,updateUBOMapping:he,uniformBlockBinding:be,texStorage2D:q,texStorage3D:Se,texSubImage2D:ae,texSubImage3D:de,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ve,scissor:P,viewport:K,reset:Ae}}function ag(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,b){return d?new OffscreenCanvas(T,b):zs("canvas")}function x(T,b,$,se){let ae=1;if((T.width>se||T.height>se)&&(ae=se/Math.max(T.width,T.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=b?Yc:Math.floor,Ce=de(ae*T.width),ve=de(ae*T.height);_===void 0&&(_=y(Ce,ve));const q=$?y(Ce,ve):_;return q.width=Ce,q.height=ve,q.getContext("2d").drawImage(T,0,0,Ce,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ce+"x"+ve+")."),q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Oa(T.width)&&Oa(T.height)}function S(T){return o?!1:T.wrapS!==tn||T.wrapT!==tn||T.minFilter!==wt&&T.minFilter!==Bt}function E(T,b){return T.generateMipmaps&&b&&T.minFilter!==wt&&T.minFilter!==Bt}function L(T){r.generateMipmap(T)}function R(T,b,$,se,ae=!1){if(o===!1)return b;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=b;return b===6403&&($===5126&&(de=33326),$===5131&&(de=33325),$===5121&&(de=33321)),b===33319&&($===5126&&(de=33328),$===5131&&(de=33327),$===5121&&(de=33323)),b===6408&&($===5126&&(de=34836),$===5131&&(de=34842),$===5121&&(de=se===Ze&&ae===!1?35907:32856),$===32819&&(de=32854),$===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function M(T,b,$){return E(T,$)===!0||T.isFramebufferTexture&&T.minFilter!==wt&&T.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){return T===wt||T===Da||T===Er?9728:9729}function F(T){const b=T.target;b.removeEventListener("dispose",F),D(b),b.isVideoTexture&&g.delete(b)}function j(T){const b=T.target;b.removeEventListener("dispose",j),z(b)}function D(T){const b=n.get(T);if(b.__webglInit===void 0)return;const $=T.source,se=m.get($);if(se){const ae=se[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&U(T),Object.keys(se).length===0&&m.delete($)}n.remove(T)}function U(T){const b=n.get(T);r.deleteTexture(b.__webglTexture);const $=T.source,se=m.get($);delete se[b.__cacheKey],a.memory.textures--}function z(T){const b=T.texture,$=n.get(T),se=n.get(b);if(se.__webglTexture!==void 0&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)r.deleteFramebuffer($.__webglFramebuffer[ae]),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[ae]);else{if(r.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ae=0;ae<$.__webglColorRenderbuffer.length;ae++)$.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[ae]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ae=0,de=b.length;ae<de;ae++){const Ce=n.get(b[ae]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(b[ae])}n.remove(b),n.remove(T)}let te=0;function J(){te=0}function W(){const T=te;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),te+=1,T}function Q(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function ne(T,b){const $=n.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.version>0&&$.__version!==T.version){const se=T.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we($,T,b);return}}t.bindTexture(3553,$.__webglTexture,33984+b)}function ge(T,b){const $=n.get(T);if(T.version>0&&$.__version!==T.version){we($,T,b);return}t.bindTexture(35866,$.__webglTexture,33984+b)}function ce(T,b){const $=n.get(T);if(T.version>0&&$.__version!==T.version){we($,T,b);return}t.bindTexture(32879,$.__webglTexture,33984+b)}function V(T,b){const $=n.get(T);if(T.version>0&&$.__version!==T.version){H($,T,b);return}t.bindTexture(34067,$.__webglTexture,33984+b)}const Y={[Qi]:10497,[tn]:33071,[Dr]:33648},oe={[wt]:9728,[Da]:9984,[Er]:9986,[Bt]:9729,[Gc]:9985,[_i]:9987};function le(T,b,$){if($?(r.texParameteri(T,10242,Y[b.wrapS]),r.texParameteri(T,10243,Y[b.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,Y[b.wrapR]),r.texParameteri(T,10240,oe[b.magFilter]),r.texParameteri(T,10241,oe[b.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(b.wrapS!==tn||b.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,A(b.magFilter)),r.texParameteri(T,10241,A(b.minFilter)),b.minFilter!==wt&&b.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wt||b.minFilter!==Er&&b.minFilter!==_i||b.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(T,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function B(T,b){let $=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",F));const se=b.source;let ae=m.get(se);ae===void 0&&(ae={},m.set(se,ae));const de=Q(b);if(de!==T.__cacheKey){ae[de]===void 0&&(ae[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),ae[de].usedTimes++;const Ce=ae[T.__cacheKey];Ce!==void 0&&(ae[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&U(b)),T.__cacheKey=de,T.__webglTexture=ae[de].texture}return $}function we(T,b,$){let se=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=35866),b.isData3DTexture&&(se=32879);const ae=B(T,b),de=b.source;t.bindTexture(se,T.__webglTexture,33984+$);const Ce=n.get(de);if(de.version!==Ce.__version||ae===!0){t.activeTexture(33984+$),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const ve=S(b)&&v(b.image)===!1;let q=x(b.image,ve,!1,h);q=ft(b,q);const Se=v(q)||o,Ee=s.convert(b.format,b.encoding);let Le=s.convert(b.type),P=R(b.internalFormat,Ee,Le,b.encoding,b.isVideoTexture);le(se,b,Se);let K;const he=b.mipmaps,be=o&&b.isVideoTexture!==!0,Ae=Ce.__version===void 0||ae===!0,C=M(b,q,Se);if(b.isDepthTexture)P=6402,o?b.type===Qn?P=36012:b.type===di?P=33190:b.type===Xi?P=35056:P=33189:b.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===gi&&P===6402&&b.type!==Wc&&b.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=di,Le=s.convert(b.type)),b.format===es&&P===6402&&(P=34041,b.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Xi,Le=s.convert(b.type))),Ae&&(be?t.texStorage2D(3553,1,P,q.width,q.height):t.texImage2D(3553,0,P,q.width,q.height,0,Ee,Le,null));else if(b.isDataTexture)if(he.length>0&&Se){be&&Ae&&t.texStorage2D(3553,C,P,he[0].width,he[0].height);for(let G=0,ie=he.length;G<ie;G++)K=he[G],be?t.texSubImage2D(3553,G,0,0,K.width,K.height,Ee,Le,K.data):t.texImage2D(3553,G,P,K.width,K.height,0,Ee,Le,K.data);b.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(3553,C,P,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Ee,Le,q.data)):t.texImage2D(3553,0,P,q.width,q.height,0,Ee,Le,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){be&&Ae&&t.texStorage3D(35866,C,P,he[0].width,he[0].height,q.depth);for(let G=0,ie=he.length;G<ie;G++)K=he[G],b.format!==nn?Ee!==null?be?t.compressedTexSubImage3D(35866,G,0,0,0,K.width,K.height,q.depth,Ee,K.data,0,0):t.compressedTexImage3D(35866,G,P,K.width,K.height,q.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage3D(35866,G,0,0,0,K.width,K.height,q.depth,Ee,Le,K.data):t.texImage3D(35866,G,P,K.width,K.height,q.depth,0,Ee,Le,K.data)}else{be&&Ae&&t.texStorage2D(3553,C,P,he[0].width,he[0].height);for(let G=0,ie=he.length;G<ie;G++)K=he[G],b.format!==nn?Ee!==null?be?t.compressedTexSubImage2D(3553,G,0,0,K.width,K.height,Ee,K.data):t.compressedTexImage2D(3553,G,P,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,G,0,0,K.width,K.height,Ee,Le,K.data):t.texImage2D(3553,G,P,K.width,K.height,0,Ee,Le,K.data)}else if(b.isDataArrayTexture)be?(Ae&&t.texStorage3D(35866,C,P,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Ee,Le,q.data)):t.texImage3D(35866,0,P,q.width,q.height,q.depth,0,Ee,Le,q.data);else if(b.isData3DTexture)be?(Ae&&t.texStorage3D(32879,C,P,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Ee,Le,q.data)):t.texImage3D(32879,0,P,q.width,q.height,q.depth,0,Ee,Le,q.data);else if(b.isFramebufferTexture){if(Ae)if(be)t.texStorage2D(3553,C,P,q.width,q.height);else{let G=q.width,ie=q.height;for(let fe=0;fe<C;fe++)t.texImage2D(3553,fe,P,G,ie,0,Ee,Le,null),G>>=1,ie>>=1}}else if(he.length>0&&Se){be&&Ae&&t.texStorage2D(3553,C,P,he[0].width,he[0].height);for(let G=0,ie=he.length;G<ie;G++)K=he[G],be?t.texSubImage2D(3553,G,0,0,Ee,Le,K):t.texImage2D(3553,G,P,Ee,Le,K);b.generateMipmaps=!1}else be?(Ae&&t.texStorage2D(3553,C,P,q.width,q.height),t.texSubImage2D(3553,0,0,0,Ee,Le,q)):t.texImage2D(3553,0,P,Ee,Le,q);E(b,Se)&&L(se),Ce.__version=de.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function H(T,b,$){if(b.image.length!==6)return;const se=B(T,b),ae=b.source;t.bindTexture(34067,T.__webglTexture,33984+$);const de=n.get(ae);if(ae.version!==de.__version||se===!0){t.activeTexture(33984+$),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,q=[];for(let G=0;G<6;G++)!Ce&&!ve?q[G]=x(b.image[G],!1,!0,c):q[G]=ve?b.image[G].image:b.image[G],q[G]=ft(b,q[G]);const Se=q[0],Ee=v(Se)||o,Le=s.convert(b.format,b.encoding),P=s.convert(b.type),K=R(b.internalFormat,Le,P,b.encoding),he=o&&b.isVideoTexture!==!0,be=de.__version===void 0||se===!0;let Ae=M(b,Se,Ee);le(34067,b,Ee);let C;if(Ce){he&&be&&t.texStorage2D(34067,Ae,K,Se.width,Se.height);for(let G=0;G<6;G++){C=q[G].mipmaps;for(let ie=0;ie<C.length;ie++){const fe=C[ie];b.format!==nn?Le!==null?he?t.compressedTexSubImage2D(34069+G,ie,0,0,fe.width,fe.height,Le,fe.data):t.compressedTexImage2D(34069+G,ie,K,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?t.texSubImage2D(34069+G,ie,0,0,fe.width,fe.height,Le,P,fe.data):t.texImage2D(34069+G,ie,K,fe.width,fe.height,0,Le,P,fe.data)}}}else{C=b.mipmaps,he&&be&&(C.length>0&&Ae++,t.texStorage2D(34067,Ae,K,q[0].width,q[0].height));for(let G=0;G<6;G++)if(ve){he?t.texSubImage2D(34069+G,0,0,0,q[G].width,q[G].height,Le,P,q[G].data):t.texImage2D(34069+G,0,K,q[G].width,q[G].height,0,Le,P,q[G].data);for(let ie=0;ie<C.length;ie++){const xe=C[ie].image[G].image;he?t.texSubImage2D(34069+G,ie+1,0,0,xe.width,xe.height,Le,P,xe.data):t.texImage2D(34069+G,ie+1,K,xe.width,xe.height,0,Le,P,xe.data)}}else{he?t.texSubImage2D(34069+G,0,0,0,Le,P,q[G]):t.texImage2D(34069+G,0,K,Le,P,q[G]);for(let ie=0;ie<C.length;ie++){const fe=C[ie];he?t.texSubImage2D(34069+G,ie+1,0,0,Le,P,fe.image[G]):t.texImage2D(34069+G,ie+1,K,Le,P,fe.image[G])}}}E(b,Ee)&&L(34067),de.__version=ae.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ee(T,b,$,se,ae){const de=s.convert($.format,$.encoding),Ce=s.convert($.type),ve=R($.internalFormat,de,Ce,$.encoding);n.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,ve,b.width,b.height,b.depth,0,de,Ce,null):t.texImage2D(ae,0,ve,b.width,b.height,0,de,Ce,null)),t.bindFramebuffer(36160,T),We(b)?f.framebufferTexture2DMultisampleEXT(36160,se,ae,n.get($).__webglTexture,0,dt(b)):(ae===3553||ae>=34069&&ae<=34074)&&r.framebufferTexture2D(36160,se,ae,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(T,b,$){if(r.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let se=33189;if($||We(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Qn?se=36012:ae.type===di&&(se=33190));const de=dt(b);We(b)?f.renderbufferStorageMultisampleEXT(36161,de,se,b.width,b.height):r.renderbufferStorageMultisample(36161,de,se,b.width,b.height)}else r.renderbufferStorage(36161,se,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){const se=dt(b);$&&We(b)===!1?r.renderbufferStorageMultisample(36161,se,35056,b.width,b.height):We(b)?f.renderbufferStorageMultisampleEXT(36161,se,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<se.length;ae++){const de=se[ae],Ce=s.convert(de.format,de.encoding),ve=s.convert(de.type),q=R(de.internalFormat,Ce,ve,de.encoding),Se=dt(b);$&&We(b)===!1?r.renderbufferStorageMultisample(36161,Se,q,b.width,b.height):We(b)?f.renderbufferStorageMultisampleEXT(36161,Se,q,b.width,b.height):r.renderbufferStorage(36161,q,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function Be(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ne(b.depthTexture,0);const se=n.get(b.depthTexture).__webglTexture,ae=dt(b);if(b.depthTexture.format===gi)We(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,ae):r.framebufferTexture2D(36160,36096,3553,se,0);else if(b.depthTexture.format===es)We(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,ae):r.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function ye(T){const b=n.get(T),$=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Be(b.__webglFramebuffer,T)}else if($){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=r.createRenderbuffer(),me(b.__webglDepthbuffer[se],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),me(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Pe(T,b,$){const se=n.get(T);b!==void 0&&ee(se.__webglFramebuffer,T,T.texture,36064,3553),$!==void 0&&ye(T)}function at(T){const b=T.texture,$=n.get(T),se=n.get(b);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=b.version,a.memory.textures++);const ae=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,Ce=v(T)||o;if(ae){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)$.__webglFramebuffer[ve]=r.createFramebuffer()}else{if($.__webglFramebuffer=r.createFramebuffer(),de)if(i.drawBuffers){const ve=T.texture;for(let q=0,Se=ve.length;q<Se;q++){const Ee=n.get(ve[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&We(T)===!1){const ve=de?b:[b];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let q=0;q<ve.length;q++){const Se=ve[q];$.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,$.__webglColorRenderbuffer[q]);const Ee=s.convert(Se.format,Se.encoding),Le=s.convert(Se.type),P=R(Se.internalFormat,Ee,Le,Se.encoding,T.isXRRenderTarget===!0),K=dt(T);r.renderbufferStorageMultisample(36161,K,P,T.width,T.height),r.framebufferRenderbuffer(36160,36064+q,36161,$.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),T.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),me($.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,se.__webglTexture),le(34067,b,Ce);for(let ve=0;ve<6;ve++)ee($.__webglFramebuffer[ve],T,b,36064,34069+ve);E(b,Ce)&&L(34067),t.unbindTexture()}else if(de){const ve=T.texture;for(let q=0,Se=ve.length;q<Se;q++){const Ee=ve[q],Le=n.get(Ee);t.bindTexture(3553,Le.__webglTexture),le(3553,Ee,Ce),ee($.__webglFramebuffer,T,Ee,36064+q,3553),E(Ee,Ce)&&L(3553)}t.unbindTexture()}else{let ve=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ve=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,se.__webglTexture),le(ve,b,Ce),ee($.__webglFramebuffer,T,b,36064,ve),E(b,Ce)&&L(ve),t.unbindTexture()}T.depthBuffer&&ye(T)}function ot(T){const b=v(T)||o,$=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let se=0,ae=$.length;se<ae;se++){const de=$[se];if(E(de,b)){const Ce=T.isWebGLCubeRenderTarget?34067:3553,ve=n.get(de).__webglTexture;t.bindTexture(Ce,ve),L(Ce),t.unbindTexture()}}}function Xe(T){if(o&&T.samples>0&&We(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],$=T.width,se=T.height;let ae=16384;const de=[],Ce=T.stencilBuffer?33306:36096,ve=n.get(T),q=T.isWebGLMultipleRenderTargets===!0;if(q)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,ve.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){de.push(36064+Se),T.depthBuffer&&de.push(Ce);const Ee=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(ae|=256),T.stencilBuffer&&(ae|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,ve.__webglColorRenderbuffer[Se]),Ee===!0&&(r.invalidateFramebuffer(36008,[Ce]),r.invalidateFramebuffer(36009,[Ce])),q){const Le=n.get(b[Se]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Le,0)}r.blitFramebuffer(0,0,$,se,0,0,$,se,ae,9728),p&&r.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Se,36161,ve.__webglColorRenderbuffer[Se]);const Ee=n.get(b[Se]).__webglTexture;t.bindFramebuffer(36160,ve.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Se,3553,Ee,0)}t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function dt(T){return Math.min(u,T.samples)}function We(T){const b=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ye(T){const b=a.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function ft(T,b){const $=T.encoding,se=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Na||$!==yi&&($===Ze?o===!1?e.has("EXT_sRGB")===!0&&se===nn?(T.format=Na,T.minFilter=Bt,T.generateMipmaps=!1):b=Zc.sRGBToLinear(b):(se!==nn||ae!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),b}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=ne,this.setTexture2DArray=ge,this.setTexture3D=ce,this.setTextureCube=V,this.rebindTextures=Pe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=We}function og(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===xi)return 5121;if(s===Ou)return 32819;if(s===Fu)return 32820;if(s===Iu)return 5120;if(s===Uu)return 5122;if(s===Wc)return 5123;if(s===Nu)return 5124;if(s===di)return 5125;if(s===Qn)return 5126;if(s===Ns)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zu)return 6406;if(s===nn)return 6408;if(s===Bu)return 6409;if(s===ku)return 6410;if(s===gi)return 6402;if(s===es)return 34041;if(s===Na)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vu)return 6403;if(s===Hu)return 36244;if(s===Gu)return 33319;if(s===Wu)return 33320;if(s===$u)return 36249;if(s===Wr||s===$r||s===jr||s===Xr)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Io||s===Uo||s===No||s===Oo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===No)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ju)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fo||s===zo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fo)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bo||s===ko||s===Vo||s===Ho||s===Go||s===Wo||s===$o||s===jo||s===Xo||s===qo||s===Yo||s===Ko||s===Zo||s===Jo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Bo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ko)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ho)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Go)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$o)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ko)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jo)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===qr)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xu||s===Qo||s===el||s===tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===qr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===el)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lg extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hg extends Et{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:gi,h!==gi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=di),n===void 0&&h===es&&(n=Xi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class ug extends cs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],x=[],v=new Set,S=new Map,E=new Ut;E.layers.enable(1),E.viewport=new rt;const L=new Ut;L.layers.enable(2),L.viewport=new rt;const R=[E,L],M=new lg;M.layers.enable(1),M.layers.enable(2);let A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=y[V];return Y===void 0&&(Y=new va,y[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=y[V];return Y===void 0&&(Y=new va,y[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=y[V];return Y===void 0&&(Y=new va,y[V]=Y),Y.getHandSpace()};function j(V){const Y=x.indexOf(V.inputSource);if(Y===-1)return;const oe=y[Y];oe!==void 0&&oe.dispatchEvent({type:V.type,data:V.inputSource})}function D(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",U);for(let V=0;V<y.length;V++){const Y=x[V];Y!==null&&(x[V]=null,y[V].disconnect(Y))}A=null,F=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",D),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:p}),d=new Mi(p.framebufferWidth,p.framebufferHeight,{format:nn,type:xi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let Y=null,oe=null,le=null;_.depth&&(le=_.stencil?35056:33190,Y=_.stencil?es:gi,oe=_.stencil?Xi:di);const B={colorFormat:32856,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(B),i.updateRenderState({layers:[f]}),d=new Mi(f.textureWidth,f.textureHeight,{format:nn,type:xi,depthTexture:new hg(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(V){for(let Y=0;Y<V.removed.length;Y++){const oe=V.removed[Y],le=x.indexOf(oe);le>=0&&(x[le]=null,y[le].disconnect(oe))}for(let Y=0;Y<V.added.length;Y++){const oe=V.added[Y];let le=x.indexOf(oe);if(le===-1){for(let we=0;we<y.length;we++)if(we>=x.length){x.push(oe),le=we;break}else if(x[we]===null){x[we]=oe,le=we;break}if(le===-1)break}const B=y[le];B&&B.connect(oe)}}const z=new I,te=new I;function J(V,Y,oe){z.setFromMatrixPosition(Y.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);const le=z.distanceTo(te),B=Y.projectionMatrix.elements,we=oe.projectionMatrix.elements,H=B[14]/(B[10]-1),ee=B[14]/(B[10]+1),me=(B[9]+1)/B[5],Be=(B[9]-1)/B[5],ye=(B[8]-1)/B[0],Pe=(we[8]+1)/we[0],at=H*ye,ot=H*Pe,Xe=le/(-ye+Pe),dt=Xe*-ye;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(Xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const We=H+Xe,Ye=ee+Xe,ft=at-dt,T=ot+(le-dt),b=me*ee/Ye*We,$=Be*ee/Ye*We;V.projectionMatrix.makePerspective(ft,T,b,$,We,Ye),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=L.near=E.near=V.near,M.far=L.far=E.far=V.far,(A!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,F=M.far);const Y=V.parent,oe=M.cameras;W(M,Y);for(let le=0;le<oe.length;le++)W(oe[le],Y);oe.length===2?J(M,E,L):M.projectionMatrix.copy(E.projectionMatrix),Q(V,M,Y)};function Q(V,Y,oe){oe===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const le=V.children;for(let B=0,we=le.length;B<we;B++)le[B].updateMatrixWorld(!0);V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ns*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return v};let ne=null;function ge(V,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let le=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let B=0;B<oe.length;B++){const we=oe[B];let H=null;if(p!==null)H=p.getViewport(we);else{const me=u.getViewSubImage(f,we);H=me.viewport,B===0&&(e.setRenderTargetTextures(d,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(d))}let ee=R[B];ee===void 0&&(ee=new Ut,ee.layers.enable(B),ee.viewport=new rt,R[B]=ee),ee.matrix.fromArray(we.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(we.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(H.x,H.y,H.width,H.height),B===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(ee)}}for(let oe=0;oe<y.length;oe++){const le=x[oe],B=y[oe];le!==null&&B!==void 0&&B.update(le,Y,c||a)}if(ne&&ne(V,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let oe=null;for(const le of v)Y.detectedPlanes.has(le)||(oe===null&&(oe=[]),oe.push(le));if(oe!==null)for(const le of oe)v.delete(le),S.delete(le),n.dispatchEvent({type:"planeremoved",data:le});for(const le of Y.detectedPlanes)if(!v.has(le))v.add(le),S.set(le,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:le});else{const B=S.get(le);le.lastChangedTime>B&&(S.set(le,le.lastChangedTime),n.dispatchEvent({type:"planechanged",data:le}))}}g=null}const ce=new ah;ce.setAnimationLoop(ge),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}}function dg(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,sh(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(y,S);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function h(y){const x=u();y.__bindingPointIndex=x;const v=r.createBuffer(),S=y.__size,E=y.usage;return r.bindBuffer(35345,v),r.bufferData(35345,S,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,S=y.__cache;r.bindBuffer(35345,x);for(let E=0,L=v.length;E<L;E++){const R=v[E];if(p(R,E,S)===!0){const M=R.__offset,A=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let j=0;j<A.length;j++){const D=A[j],U=_(D);typeof D=="number"?(R.__data[0]=D,r.bufferSubData(35345,M+F,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=D.elements[0],R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=D.elements[0],R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=D.elements[0]):(D.toArray(R.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,R.__data)}}r.bindBuffer(35345,null)}function p(y,x,v){const S=y.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const E=Array.isArray(S)?S:[S],L=[];for(let R=0;R<E.length;R++)L.push(E[R].clone());v[x]=L}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const E=Array.isArray(v[x])?v[x]:[v[x]],L=Array.isArray(S)?S:[S];for(let R=0;R<E.length;R++){const M=E[R];if(M.equals(L[R])===!1)return M.copy(L[R]),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const S=16;let E=0;for(let L=0,R=x.length;L<R;L++){const M=x[L],A={boundary:0,storage:0},F=Array.isArray(M.value)?M.value:[M.value];for(let j=0,D=F.length;j<D;j++){const U=F[j],z=_(U);A.boundary+=z.boundary,A.storage+=z.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,L>0){E=v%S;const j=S-E;E!==0&&j-A.boundary<0&&(v+=S-E,M.__offset=v)}v+=A.storage}return E=v%S,E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}function pg(){const r=zs("canvas");return r.style.display="block",r}class uh{constructor(e={}){const{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yi,this.useLegacyLights=!0,this.toneMapping=Fn,this.toneMappingExposure=1;const d=this;let y=!1,x=0,v=0,S=null,E=-1,L=null;const R=new rt,M=new rt;let A=null,F=t.width,j=t.height,D=1,U=null,z=null;const te=new rt(0,0,F,j),J=new rt(0,0,F,j);let W=!1;const Q=new Za;let ne=!1,ge=!1,ce=null;const V=new ze,Y=new I,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return S===null?D:1}let B=n;function we(w,O){for(let X=0;X<w.length;X++){const N=w[X],Z=t.getContext(N,O);if(Z!==null)return Z}return null}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),B=we(O,w),B===null)throw we(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let H,ee,me,Be,ye,Pe,at,ot,Xe,dt,We,Ye,ft,T,b,$,se,ae,de,Ce,ve,q,Se,Ee;function Le(){H=new Am(B),ee=new xm(B,H,e),H.init(ee),q=new og(B,H,ee),me=new rg(B,H,ee),Be=new Cm,ye=new $0,Pe=new ag(B,H,me,ye,ee,q,Be),at=new Mm(d),ot=new wm(d),Xe=new Bd(B,ee),Se=new vm(B,H,Xe,ee),dt=new Em(B,Xe,Be,Se),We=new Dm(B,dt,Xe,Be),de=new Pm(B,ee,Pe),$=new ym(ye),Ye=new W0(d,at,ot,H,ee,Se,$),ft=new dg(d,ye),T=new X0,b=new Q0(H,ee),ae=new gm(d,at,ot,me,We,f,l),se=new sg(d,We,ee),Ee=new fg(B,Be,ee,me),Ce=new _m(B,H,Be,ee),ve=new Tm(B,H,Be,ee),Be.programs=Ye.programs,d.capabilities=ee,d.extensions=H,d.properties=ye,d.renderLists=T,d.shadowMap=se,d.state=me,d.info=Be}Le();const P=new ug(d,B);this.xr=P,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=H.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=H.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(F,j,!1))},this.getSize=function(w){return w.set(F,j)},this.setSize=function(w,O,X=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,j=O,t.width=Math.floor(w*D),t.height=Math.floor(O*D),X===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(F*D,j*D).floor()},this.setDrawingBufferSize=function(w,O,X){F=w,j=O,D=X,t.width=Math.floor(w*X),t.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,O,X,N){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,O,X,N),me.viewport(R.copy(te).multiplyScalar(D).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,O,X,N){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,O,X,N),me.scissor(M.copy(J).multiplyScalar(D).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){me.setScissorTest(W=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(w=!0,O=!0,X=!0){let N=0;w&&(N|=16384),O&&(N|=256),X&&(N|=1024),B.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",be,!1),T.dispose(),b.dispose(),ye.dispose(),at.dispose(),ot.dispose(),We.dispose(),Se.dispose(),Ee.dispose(),Ye.dispose(),P.dispose(),P.removeEventListener("sessionstart",xe),P.removeEventListener("sessionend",et),ce&&(ce.dispose(),ce=null),nt.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Be.autoReset,O=se.enabled,X=se.autoUpdate,N=se.needsUpdate,Z=se.type;Le(),Be.autoReset=w,se.enabled=O,se.autoUpdate=X,se.needsUpdate=N,se.type=Z}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){const O=w.target;O.removeEventListener("dispose",Ae),C(O)}function C(w){G(w),ye.remove(w)}function G(w){const O=ye.get(w).programs;O!==void 0&&(O.forEach(function(X){Ye.releaseProgram(X)}),w.isShaderMaterial&&Ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,N,Z,Te){O===null&&(O=oe);const Re=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Wh(w,O,X,N,Z);me.setMaterial(N,Re);let Oe=X.index,ke=1;N.wireframe===!0&&(Oe=dt.getWireframeAttribute(X),ke=2);const Ve=X.drawRange,He=X.attributes.position;let it=Ve.start*ke,Rt=(Ve.start+Ve.count)*ke;Te!==null&&(it=Math.max(it,Te.start*ke),Rt=Math.min(Rt,(Te.start+Te.count)*ke)),Oe!==null?(it=Math.max(it,0),Rt=Math.min(Rt,Oe.count)):He!=null&&(it=Math.max(it,0),Rt=Math.min(Rt,He.count));const ln=Rt-it;if(ln<0||ln===1/0)return;Se.setup(Z,N,De,X,Oe);let ni,_t=Ce;if(Oe!==null&&(ni=Xe.get(Oe),_t=ve,_t.setIndex(ni)),Z.isMesh)N.wireframe===!0?(me.setLineWidth(N.wireframeLinewidth*le()),_t.setMode(1)):_t.setMode(4);else if(Z.isLine){let $e=N.linewidth;$e===void 0&&($e=1),me.setLineWidth($e*le()),Z.isLineSegments?_t.setMode(1):Z.isLineLoop?_t.setMode(2):_t.setMode(3)}else Z.isPoints?_t.setMode(0):Z.isSprite&&_t.setMode(4);if(Z.isInstancedMesh)_t.renderInstances(it,ln,Z.count);else if(X.isInstancedBufferGeometry){const $e=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,kr=Math.min(X.instanceCount,$e);_t.renderInstances(it,ln,kr)}else _t.render(it,ln)},this.compile=function(w,O){function X(N,Z,Te){N.transparent===!0&&N.side===Sn&&N.forceSinglePass===!1?(N.side=kt,N.needsUpdate=!0,Zs(N,Z,Te),N.side=zn,N.needsUpdate=!0,Zs(N,Z,Te),N.side=Sn):Zs(N,Z,Te)}g=b.get(w),g.init(),m.push(g),w.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights(d.useLegacyLights),w.traverse(function(N){const Z=N.material;if(Z)if(Array.isArray(Z))for(let Te=0;Te<Z.length;Te++){const Re=Z[Te];X(Re,w,N)}else X(Z,w,N)}),m.pop(),g=null};let ie=null;function fe(w){ie&&ie(w)}function xe(){nt.stop()}function et(){nt.start()}const nt=new ah;nt.setAnimationLoop(fe),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(w){ie=w,P.setAnimationLoop(w),w===null?nt.stop():nt.start()},P.addEventListener("sessionstart",xe),P.addEventListener("sessionend",et),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,O,S),g=b.get(w,m.length),g.init(),m.push(g),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(V),ge=this.localClippingEnabled,ne=$.init(this.clippingPlanes,ge),p=T.get(w,_.length),p.init(),_.push(p),pt(w,O,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(U,z),ne===!0&&$.beginShadows();const X=g.state.shadowsArray;if(se.render(X,w,O),ne===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(p,w),g.setupLights(d.useLegacyLights),O.isArrayCamera){const N=O.cameras;for(let Z=0,Te=N.length;Z<Te;Z++){const Re=N[Z];gn(p,w,Re,Re.viewport)}}else gn(p,w,O);S!==null&&(Pe.updateMultisampleRenderTarget(S),Pe.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(d,w,O),Se.resetDefaultState(),E=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function pt(w,O,X,N){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){N&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const Re=We.update(w),De=w.material;De.visible&&p.push(w,Re,De,X,Y.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Be.render.frame&&(w.skeleton.update(),w.skeleton.frame=Be.render.frame),!w.frustumCulled||Q.intersectsObject(w))){N&&Y.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);const Re=We.update(w),De=w.material;if(Array.isArray(De)){const Oe=Re.groups;for(let ke=0,Ve=Oe.length;ke<Ve;ke++){const He=Oe[ke],it=De[He.materialIndex];it&&it.visible&&p.push(w,Re,it,X,Y.z,He)}}else De.visible&&p.push(w,Re,De,X,Y.z,null)}}const Te=w.children;for(let Re=0,De=Te.length;Re<De;Re++)pt(Te[Re],O,X,N)}function gn(w,O,X,N){const Z=w.opaque,Te=w.transmissive,Re=w.transparent;g.setupLightsView(X),ne===!0&&$.setGlobalState(d.clippingPlanes,X),Te.length>0&&lt(Z,Te,O,X),N&&me.viewport(R.copy(N)),Z.length>0&&At(Z,O,X),Te.length>0&&At(Te,O,X),Re.length>0&&At(Re,O,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function lt(w,O,X,N){if(ce===null){const De=ee.isWebGL2;ce=new Mi(1024,1024,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?Ns:xi,minFilter:_i,samples:De&&o===!0?4:0})}const Z=d.getRenderTarget();d.setRenderTarget(ce),d.clear();const Te=d.toneMapping;d.toneMapping=Fn,At(w,X,N),Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce);let Re=!1;for(let De=0,Oe=O.length;De<Oe;De++){const ke=O[De],Ve=ke.object,He=ke.geometry,it=ke.material,Rt=ke.group;if(it.side===Sn&&Ve.layers.test(N.layers)){const ln=it.side;it.side=kt,it.needsUpdate=!0,vn(Ve,X,N,He,it,Rt),it.side=ln,it.needsUpdate=!0,Re=!0}}Re===!0&&(Pe.updateMultisampleRenderTarget(ce),Pe.updateRenderTargetMipmap(ce)),d.setRenderTarget(Z),d.toneMapping=Te}function At(w,O,X){const N=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Te=w.length;Z<Te;Z++){const Re=w[Z],De=Re.object,Oe=Re.geometry,ke=N===null?Re.material:N,Ve=Re.group;De.layers.test(X.layers)&&vn(De,O,X,Oe,ke,Ve)}}function vn(w,O,X,N,Z,Te){w.onBeforeRender(d,O,X,N,Z,Te),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(d,O,X,N,w,Te),Z.transparent===!0&&Z.side===Sn&&Z.forceSinglePass===!1?(Z.side=kt,Z.needsUpdate=!0,d.renderBufferDirect(X,O,N,Z,w,Te),Z.side=zn,Z.needsUpdate=!0,d.renderBufferDirect(X,O,N,Z,w,Te),Z.side=Sn):d.renderBufferDirect(X,O,N,Z,w,Te),w.onAfterRender(d,O,X,N,Z,Te)}function Zs(w,O,X){O.isScene!==!0&&(O=oe);const N=ye.get(w),Z=g.state.lights,Te=g.state.shadowsArray,Re=Z.state.version,De=Ye.getParameters(w,Z.state,Te,O,X),Oe=Ye.getProgramCacheKey(De);let ke=N.programs;N.environment=w.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(w.isMeshStandardMaterial?ot:at).get(w.envMap||N.environment),ke===void 0&&(w.addEventListener("dispose",Ae),ke=new Map,N.programs=ke);let Ve=ke.get(Oe);if(Ve!==void 0){if(N.currentProgram===Ve&&N.lightsStateVersion===Re)return yo(w,De),Ve}else De.uniforms=Ye.getUniforms(w),w.onBuild(X,De,d),w.onBeforeCompile(De,d),Ve=Ye.acquireProgram(De,Oe),ke.set(Oe,Ve),N.uniforms=De.uniforms;const He=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=$.uniform),yo(w,De),N.needsLights=jh(w),N.lightsStateVersion=Re,N.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix);const it=Ve.getUniforms(),Rt=Tr.seqWithValue(it.seq,He);return N.currentProgram=Ve,N.uniformsList=Rt,Ve}function yo(w,O){const X=ye.get(w);X.outputEncoding=O.outputEncoding,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Wh(w,O,X,N,Z){O.isScene!==!0&&(O=oe),Pe.resetTextureUnits();const Te=O.fog,Re=N.isMeshStandardMaterial?O.environment:null,De=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:yi,Oe=(N.isMeshStandardMaterial?ot:at).get(N.envMap||Re),ke=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!N.normalMap&&!!X.attributes.tangent,He=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,Rt=!!X.morphAttributes.color,ln=N.toneMapped?d.toneMapping:Fn,ni=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=ni!==void 0?ni.length:0,$e=ye.get(N),kr=g.state.lights;if(ne===!0&&(ge===!0||w!==L)){const Gt=w===L&&N.id===E;$.setState(N,w,Gt)}let bt=!1;N.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==kr.state.version||$e.outputEncoding!==De||Z.isInstancedMesh&&$e.instancing===!1||!Z.isInstancedMesh&&$e.instancing===!0||Z.isSkinnedMesh&&$e.skinning===!1||!Z.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Oe||N.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==$.numPlanes||$e.numIntersection!==$.numIntersection)||$e.vertexAlphas!==ke||$e.vertexTangents!==Ve||$e.morphTargets!==He||$e.morphNormals!==it||$e.morphColors!==Rt||$e.toneMapping!==ln||ee.isWebGL2===!0&&$e.morphTargetsCount!==_t)&&(bt=!0):(bt=!0,$e.__version=N.version);let ii=$e.currentProgram;bt===!0&&(ii=Zs(N,O,Z));let Mo=!1,ms=!1,Vr=!1;const Pt=ii.getUniforms(),si=$e.uniforms;if(me.useProgram(ii.program)&&(Mo=!0,ms=!0,Vr=!0),N.id!==E&&(E=N.id,ms=!0),Mo||L!==w){if(Pt.setValue(B,"projectionMatrix",w.projectionMatrix),ee.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),L!==w&&(L=w,ms=!0,Vr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Gt=Pt.map.cameraPosition;Gt!==void 0&&Gt.setValue(B,Y.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||Z.isSkinnedMesh)&&Pt.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(Z.isSkinnedMesh){Pt.setOptional(B,Z,"bindMatrix"),Pt.setOptional(B,Z,"bindMatrixInverse");const Gt=Z.skeleton;Gt&&(ee.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Pt.setValue(B,"boneTexture",Gt.boneTexture,Pe),Pt.setValue(B,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hr=X.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&ee.isWebGL2===!0)&&de.update(Z,X,ii),(ms||$e.receiveShadow!==Z.receiveShadow)&&($e.receiveShadow=Z.receiveShadow,Pt.setValue(B,"receiveShadow",Z.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(si.envMap.value=Oe,si.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ms&&(Pt.setValue(B,"toneMappingExposure",d.toneMappingExposure),$e.needsLights&&$h(si,Vr),Te&&N.fog===!0&&ft.refreshFogUniforms(si,Te),ft.refreshMaterialUniforms(si,N,D,j,ce),Tr.upload(B,$e.uniformsList,si,Pe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Tr.upload(B,$e.uniformsList,si,Pe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Pt.setValue(B,"center",Z.center),Pt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(B,"normalMatrix",Z.normalMatrix),Pt.setValue(B,"modelMatrix",Z.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Gt=N.uniformsGroups;for(let Gr=0,Xh=Gt.length;Gr<Xh;Gr++)if(ee.isWebGL2){const bo=Gt[Gr];Ee.update(bo,ii),Ee.bind(bo,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function $h(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,O,X){ye.get(w.texture).__webglTexture=O,ye.get(w.depthTexture).__webglTexture=X;const N=ye.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const X=ye.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){S=w,x=O,v=X;let N=!0,Z=null,Te=!1,Re=!1;if(w){const Oe=ye.get(w);Oe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),N=!1):Oe.__webglFramebuffer===void 0?Pe.setupRenderTarget(w):Oe.__hasExternalTextures&&Pe.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);const Ve=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Z=Ve[O],Te=!0):ee.isWebGL2&&w.samples>0&&Pe.useMultisampledRTT(w)===!1?Z=ye.get(w).__webglMultisampledFramebuffer:Z=Ve,R.copy(w.viewport),M.copy(w.scissor),A=w.scissorTest}else R.copy(te).multiplyScalar(D).floor(),M.copy(J).multiplyScalar(D).floor(),A=W;if(me.bindFramebuffer(36160,Z)&&ee.drawBuffers&&N&&me.drawBuffers(w,Z),me.viewport(R),me.scissor(M),me.setScissorTest(A),Te){const Oe=ye.get(w.texture);B.framebufferTexture2D(36160,36064,34069+O,Oe.__webglTexture,X)}else if(Re){const Oe=ye.get(w.texture),ke=O||0;B.framebufferTextureLayer(36160,36064,Oe.__webglTexture,X||0,ke)}E=-1},this.readRenderTargetPixels=function(w,O,X,N,Z,Te,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){me.bindFramebuffer(36160,De);try{const Oe=w.texture,ke=Oe.format,Ve=Oe.type;if(ke!==nn&&q.convert(ke)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ve===Ns&&(H.has("EXT_color_buffer_half_float")||ee.isWebGL2&&H.has("EXT_color_buffer_float"));if(Ve!==xi&&q.convert(Ve)!==B.getParameter(35738)&&!(Ve===Qn&&(ee.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-N&&X>=0&&X<=w.height-Z&&B.readPixels(O,X,N,Z,q.convert(ke),q.convert(Ve),Te)}finally{const Oe=S!==null?ye.get(S).__webglFramebuffer:null;me.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(w,O,X=0){const N=Math.pow(2,-X),Z=Math.floor(O.image.width*N),Te=Math.floor(O.image.height*N);Pe.setTexture2D(O,0),B.copyTexSubImage2D(3553,X,0,0,w.x,w.y,Z,Te),me.unbindTexture()},this.copyTextureToTexture=function(w,O,X,N=0){const Z=O.image.width,Te=O.image.height,Re=q.convert(X.format),De=q.convert(X.type);Pe.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),O.isDataTexture?B.texSubImage2D(3553,N,w.x,w.y,Z,Te,Re,De,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(3553,N,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):B.texSubImage2D(3553,N,w.x,w.y,Re,De,O.image),N===0&&X.generateMipmaps&&B.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X,N,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,Oe=q.convert(N.format),ke=q.convert(N.type);let Ve;if(N.isData3DTexture)Pe.setTexture3D(N,0),Ve=32879;else if(N.isDataArrayTexture)Pe.setTexture2DArray(N,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,N.flipY),B.pixelStorei(37441,N.premultiplyAlpha),B.pixelStorei(3317,N.unpackAlignment);const He=B.getParameter(3314),it=B.getParameter(32878),Rt=B.getParameter(3316),ln=B.getParameter(3315),ni=B.getParameter(32877),_t=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,_t.width),B.pixelStorei(32878,_t.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Ve,Z,O.x,O.y,O.z,Te,Re,De,Oe,ke,_t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ve,Z,O.x,O.y,O.z,Te,Re,De,Oe,_t.data)):B.texSubImage3D(Ve,Z,O.x,O.y,O.z,Te,Re,De,Oe,ke,_t),B.pixelStorei(3314,He),B.pixelStorei(32878,it),B.pixelStorei(3316,Rt),B.pixelStorei(3315,ln),B.pixelStorei(32877,ni),Z===0&&N.generateMipmaps&&B.generateMipmap(Ve),me.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Pe.setTextureCube(w,0):w.isData3DTexture?Pe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Pe.setTexture2DArray(w,0):Pe.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){x=0,v=0,S=null,me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class mg extends uh{}mg.prototype.isWebGL1Renderer=!0;class gg extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ua,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new I;class eo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gl=new I,Wl=new rt,$l=new rt,_g=new I,jl=new ze,Vi=new I;class xg extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vi),this.boundingBox.expandByPoint(Vi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vi),this.boundingSphere.expandByPoint(Vi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wl.fromBufferAttribute(i.attributes.skinIndex,e),$l.fromBufferAttribute(i.attributes.skinWeight,e),Gl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=$l.getComponent(s);if(a!==0){const o=Wl.getComponent(s);jl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_g.copy(Gl).applyMatrix4(jl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dh extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yg extends Et{constructor(e=null,t=1,n=1,i,s,a,o,l,c=wt,h=wt,u,f){super(null,a,o,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new ze,Mg=new ze;class to{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Mg;Xl.multiplyMatrices(o,t[s]),Xl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new to(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=qc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yg(t,e,e,nn,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new dh),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ql extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new ze,Yl=new ze,_r=[],Kl=new Hn,bg=new ze,ys=new Nt,Ms=new Gn;class no extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Kl.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Ms.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Hi),Yl.multiplyMatrices(n,Hi),ys.matrixWorld=Yl,ys.raycast(e,_r);for(let a=0,o=_r.length;a<o;a++){const l=_r[a];l.instanceId=s,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new I,Jl=new I,Ql=new ze,_a=new Ya,xr=new Gn;class io extends vt{constructor(e=new mn,t=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zl.fromBufferAttribute(t,i-1),Jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,e.ray.intersectsSphere(xr)===!1)return;Ql.copy(i).invert(),_a.copy(e.ray).applyMatrix4(Ql);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=d,v=y-1;x<v;x+=p){const S=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,E),_a.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=d,v=y-1;x<v;x+=p){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),_a.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ec=new I,tc=new I;class Sg extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(tc);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wg extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ph extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new ze,za=new Ya,yr=new Gn,Mr=new I;class Ag extends vt{constructor(e=new mn,t=new ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(i),yr.radius+=s,e.ray.intersectsSphere(yr)===!1)return;nc.copy(i).invert(),za.copy(e.ray).applyMatrix4(nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Mr.fromBufferAttribute(u,m),ic(Mr,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Mr.fromBufferAttribute(u,g),ic(Mr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ic(r,e,t,n,i,s,a){const o=za.distanceSqToPoint(r);if(o<t){const l=new I;za.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class so extends mn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let v=0;d===0&&a===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+v,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const x=h[d][y+1],v=h[d][y],S=h[d+1][y],E=h[d+1][y+1];(d!==0||a>0)&&p.push(x,v,E),(d!==n-1||l<Math.PI)&&p.push(v,S,E)}this.setIndex(p),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends js{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Yn(r,e,t){return mh(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function br(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function mh(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Eg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function gh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Xs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tg extends Xs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:s=e,o=2*t-n;break;case sl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case il:a=e,l=2*n-t;break;case sl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let S=0;S!==o;++S)s[S]=d*a[h+S]+y*a[c+S]+x*a[l+S]+v*a[u+S];return s}}class Cg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class Lg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=br(t,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:br(e.times,Array),values:br(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case Yr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return Yr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Yn(n,s,a),this.values=Yn(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&mh(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Yn(this.times),t=Yn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Yr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Yn(e,0,a),this.values=Yn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Yn(this.times,0),t=Yn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ts;class ds extends Cn{}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Os;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends Cn{}vh.prototype.ValueTypeName="color";class Bs extends Cn{}Bs.prototype.ValueTypeName="number";class Rg extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Vn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class bi extends Cn{InterpolantFactoryMethodLinear(e){return new Rg(this.times,this.values,this.getValueSize(),e)}}bi.prototype.ValueTypeName="quaternion";bi.prototype.DefaultInterpolation=ts;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Cn{}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Os;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Cn{}ks.prototype.ValueTypeName="vector";class Pg{constructor(e,t=-1,n,i=qu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ig(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Eg(l);l=sc(l,1,h),c=sc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Bs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,_){if(p.length!==0){const m=[],d=[];gh(p,m,d,g),m.length!==0&&_.push(new u(f,m,d))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),d.push(x.morphTarget===_?1:0)}i.push(new Bs(".morphTargetInfluence["+_+"]",m,d))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(ks,p+".position",f,"pos",i),n(bi,p+".quaternion",f,"rot",i),n(ks,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return vh;case"quaternion":return bi;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ig(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dg(r.type);if(r.times===void 0){const t=[],n=[];gh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ss={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ug{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ng=new Ug;class ps{constructor(e){this.manager=e!==void 0?e:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Nn={};class Og extends Error{constructor(e,t){super(e),this.response=t}}class _h extends ps{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ss.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Nn[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){y();function y(){u.read().then(({done:x,value:v})=>{if(x)d.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let E=0,L=h.length;E<L;E++){const R=h[E];R.onProgress&&R.onProgress(S)}d.enqueue(v),y()}})}}});return new Response(m)}else throw new Og(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ss.add(e,c);const h=Nn[e];delete Nn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Nn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Nn[e];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xh extends ps{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ss.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=zs("img");function l(){h(),ss.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Fg extends ps{constructor(e){super(e)}load(e,t,n,i){const s=new Ka,a=new xh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class yh extends ps{constructor(e){super(e)}load(e,t,n,i){const s=new Et,a=new xh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ro extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const xa=new ze,rc=new I,ac=new I;class ao{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zg extends ao{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bg extends ro{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new zg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oc=new ze,bs=new I,ya=new I;class kg extends ao{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class oo extends ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vg extends ao{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hg extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ba{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Gg extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ss.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ss.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const lo="\\[\\]\\.:\\/",Wg=new RegExp("["+lo+"]","g"),co="[^"+lo+"]",$g="[^"+lo.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",co),Xg=/(WCOD+)?/.source.replace("WCOD",$g),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",co),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",co),Kg=new RegExp("^"+jg+Xg+qg+Yg+"$"),Zg=["material","materials","bones","map"];class Jg{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(e){const t=Kg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Jg;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class An{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),An.nextNameID=An.nextNameID||0,this.$name.id=`lil-gui-name-${++An.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Qg extends An{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ka(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const e1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ka,toHexString:ka},Vs={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},t1={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=Vs.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Vs.toHexString(i)}},n1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Vs.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Vs.toHexString(i)}},i1=[e1,Vs,t1,n1];function s1(r){return i1.find(e=>e.match(r))}class r1 extends An{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=s1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ka(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ma extends An{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class a1 extends An{constructor(e,t,n,i,s,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._stepExplicit&&(d=this._snap(d)),this.setValue(this._clamp(d)))},t=d=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+d),this.$input.value=this.getValue())},n=d=>{d.code==="Enter"&&this.$input.blur(),d.code==="ArrowUp"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d))),d.code==="ArrowDown"&&(d.preventDefault(),t(this._step*this._arrowKeyMultiplier(d)*-1))},i=d=>{this._inputFocused&&(d.preventDefault(),t(this._step*this._normalizeMouseWheel(d)))};let s=!1,a,o,l,c,h;const u=5,f=d=>{a=d.clientX,o=l=d.clientY,s=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",g)},p=d=>{if(s){const y=d.clientX-a,x=d.clientY-o;Math.abs(x)>u?(d.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&g()}if(!s){const y=d.clientY-l;h-=y*this._step*this._arrowKeyMultiplier(d),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=d.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",g)},_=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,y,x,v,S)=>(d-y)/(x-y)*(S-v)+v,t=d=>{const y=this.$slider.getBoundingClientRect();let x=e(d,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=d=>{t(d.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),a=!1},h=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):c(d),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=d=>{if(a){const y=d.touches[0].clientX-o,x=d.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(d):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else d.preventDefault(),t(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const x=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class o1 extends An{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const a=document.createElement("option");a.innerHTML=s,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class l1 extends An{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const c1=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function h1(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let lc=!1;class ho{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!lc&&o&&(h1(c1),lc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,i,s){if(Object(n)===n)return new o1(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new a1(this,e,t,n,i,s);case"boolean":return new Qg(this,e,t);case"string":return new l1(this,e,t);case"function":return new Ma(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new r1(this,e,t,n)}addFolder(e){const t=new ho({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Ma||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ma)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var u1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function d1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mh={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(u1,function(){var t=function(){function n(p){return a.appendChild(p.dom),p}function i(p){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===p?"block":"none";s=p}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),i(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=n(new t.Panel("FPS","#0ff","#002")),u=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:a,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(u.update(p-o,200),p>l+1e3&&(h.update(1e3*c/(p-l),100),l=p,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:a,setMode:i}};return t.Panel=function(n,i,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,f=3*c,p=2*c,g=3*c,_=15*c,m=74*c,d=30*c,y=document.createElement("canvas");y.width=h,y.height=u,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,h,u),x.fillStyle=i,x.fillText(n,f,p),x.fillRect(g,_,m,d),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,_,m,d),{dom:y,update:function(v,S){a=Math.min(a,v),o=Math.max(o,v),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,h,_),x.fillStyle=i,x.fillText(l(v)+" "+n+" ("+l(a)+"-"+l(o)+")",f,p),x.drawImage(y,g+c,_,m-c,d,g,_,m-c,d),x.fillRect(g+m-c,_,c,d),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+m-c,_,c,l((1-v/S)*d))}}},t})})(Mh);var f1=Mh.exports;const p1=d1(f1);class m1{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new ho,this.stats=new p1,this.stats.showPanel(0),document.body.appendChild(this.stats.dom))}}class Fr{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][i.value]instanceof Array&&(delete this.callbacks[s][i.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][s.value]instanceof Array&&this.callbacks[a][s.value].forEach(function(o){o.apply(this,i)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(a){a.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class g1 extends Fr{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(devicePixelRatio,2),this.trigger("resize")})}}class v1 extends Fr{constructor(){super();So(this,"eventHandler",t=>{const n=t.type==="touchmove"?t.touches[0].clientX:t.clientX,i=t.type==="touchmove"?t.touches[0].clientY:t.clientY;this.vector.set(n/this.sizes.width*2-1,-(i/this.sizes.height*2-1),1),this.vector.unproject(this.camera.instance),this.vector.sub(this.camera.instance.position).normalize();let s=-this.camera.instance.position.z/this.vector.z;this.position.copy(this.camera.instance.position).add(this.vector.multiplyScalar(s)),this.trigger("mousemove")});this.experience=new Wn,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.vector=new I,this.position=new I,window.addEventListener("mousemove",this.eventHandler),window.addEventListener("touchmove",this.eventHandler)}destroy(){window.removeEventListener("mousemove",this.eventHandler),window.removeEventListener("touchmove",this.eventHandler)}}class _1 extends Fr{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}function cc(r,e){if(e===Yu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ia||e===$c){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ia)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class x1 extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new w1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new I1(t)}),this.register(function(t){return new E1(t)}),this.register(function(t){return new T1(t)}),this.register(function(t){return new C1(t)}),this.register(function(t){return new L1(t)}),this.register(function(t){return new S1(t)}),this.register(function(t){return new R1(t)}),this.register(function(t){return new A1(t)}),this.register(function(t){return new M1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new N1(t)})}load(e,t,n,i){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Ba.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new _h(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bh){try{a[je.KHR_BINARY_GLTF]=new O1(e)}catch(u){i&&i(u);return}s=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Y1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new b1;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new F1(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new z1;break;case je.KHR_MESH_QUANTIZATION:a[u]=new B1;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function y1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class M1{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oo(h),c.distance=u;break;case"spot":c=new Bg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class b1{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return pi}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ze))}return Promise.all(i)}}class S1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class w1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(o,o)}return Promise.all(s)}}class A1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class E1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ze)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class T1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class C1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne(o[0],o[1],o[2]),Promise.all(s)}}class L1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class R1{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ze)),Promise.all(s)}}class P1{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class D1{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I1{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class U1{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}}class N1{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(const g of u){const _=new ze,m=new I,d=new Vn,y=new I(1,1,1),x=new no(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,d,y));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const bh="glTF",Ss=12,hc={JSON:1313821514,BIN:5130562};class O1{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ss,s=new DataView(e,Ss);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===hc.JSON){const c=new Uint8Array(e,Ss+a,o);this.content=n.decode(c)}else if(l===hc.BIN){const c=Ss+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class F1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Va[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Va[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],p=Yi[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const g=f.attributes[p],_=l[p];_!==void 0&&(g.normalized=_)}u(f)},o,c)})})}}class z1{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class B1{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Sh extends Xs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,g=e*c,_=g-c,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+u;for(let v=0;v!==o;v++){const S=a[_+v+o],E=a[_+v+l]*h,L=a[g+v+o],R=a[g+v]*h;s[v]=y*S+x*E+m*L+d*R}return s}}const k1=new Vn;class V1 extends Sh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return k1.fromArray(s).normalize().toArray(s),s}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uc={9728:wt,9729:Bt,9984:Da,9985:Gc,9986:Er,9987:_i},dc={33071:tn,33648:Dr,10497:Qi},ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Va={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},H1={CUBICSPLINE:void 0,LINEAR:ts,STEP:Os},Sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function G1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new js({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),r.DefaultMaterial}function ws(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function W1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function $1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j1(r){const e=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+fc(e.attributes):t=r.indices+":"+fc(r.attributes)+":"+r.mode,t}function fc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ha(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function X1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const q1=new ze;class Y1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new yh(this.options.manager):this.textureLoader=new Gg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _h(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};ws(s,o,i),Jn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ba.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ba[i.type],o=Yi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ot(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ba[i.type],c=Yi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const d=Math.floor(f/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,d*p,i.count*p/h),x=new vg(_,p/h),t.cache.add(y,x)),m=new eo(x,l,f%p/h,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new Ot(_,l,g);if(i.sparse!==void 0){const d=ba.SCALAR,y=Yi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new y(a[1],x,i.sparse.count*d),E=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized));for(let L=0,R=S.length;L<R;L++){const M=S[L];if(m.setX(M,E[L*l]),l>=2&&m.setY(M,E[L*l+1]),l>=3&&m.setZ(M,E[L*l+2]),l>=4&&m.setW(M,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return h.magFilter=uc[f.magFilter]||Bt,h.minFilter=uc[f.minFilter]||_i,h.wrapS=dc[f.wrapS]||Qi,h.wrapT=dc[f.wrapT]||Qi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,f(m)}),t.load(Ba.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||X1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.encoding=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ph,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fh,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return js}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ze)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Sn);const h=s.alphaMode||Sa.OPAQUE;if(h===Sa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Sa.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==pi&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ke(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&a!==pi&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==pi&&(o.emissive=new Ne().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==pi&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ze)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),Jn(u,s),t.associations.set(u,{materials:e}),s.extensions&&ws(i,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return pc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=j1(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=pc(new mn,c,t),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?G1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=a[p];let d;const y=c[p];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new xg(_,y):new Nt(_,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===en.TRIANGLE_STRIP?d.geometry=cc(d.geometry,$c):m.mode===en.TRIANGLE_FAN&&(d.geometry=cc(d.geometry,Ia));else if(m.mode===en.LINES)d=new Sg(_,y);else if(m.mode===en.LINE_STRIP)d=new io(_,y);else if(m.mode===en.LINE_LOOP)d=new wg(_,y);else if(m.mode===en.POINTS)d=new Ag(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&$1(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Jn(d,s),m.extensions&&ws(i,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const f=new mi;t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(fi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ja(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const f=new ze;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new to(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],a=[],o=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){const f=n.channels[h],p=n.samplers[f.sampler],g=f.target,_=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,d=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(s.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),l.push(p),c.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],f=h[1],p=h[2],g=h[3],_=h[4],m=[];for(let d=0,y=u.length;d<y;d++){const x=u[d],v=f[d],S=p[d],E=g[d],L=_[d];if(x===void 0)continue;x.updateMatrix();let R;switch(Kn[L.path]){case Kn.weights:R=Bs;break;case Kn.rotation:R=bi;break;case Kn.position:case Kn.scale:default:R=ks;break}const M=x.name?x.name:x.uuid,A=E.interpolation!==void 0?H1[E.interpolation]:ts,F=[];Kn[L.path]===Kn.weights?x.traverse(function(D){D.morphTargetInfluences&&F.push(D.name?D.name:D.uuid)}):F.push(M);let j=S.array;if(S.normalized){const D=Ha(j.constructor),U=new Float32Array(j.length);for(let z=0,te=j.length;z<te;z++)U[z]=j[z]*D;j=U}for(let D=0,U=F.length;D<U;D++){const z=new R(F[D]+"."+Kn[L.path],v.array,j,A);E.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(J){const W=this instanceof bi?V1:Sh;return new W(this.times,this.values,this.getValueSize()/3,J)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(z)}}return new Pg(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,q1)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new dh:c.length>1?h=new mi:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Jn(h,s),s.extensions&&ws(n,h,s),s.matrix!==void 0){const u=new ze;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new mi;n.name&&(s.name=i.createUniqueName(n.name)),Jn(s,n),n.extensions&&ws(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,p]of i.associations)(f instanceof wn||f instanceof Et)&&u.set(f,p);return h.traverse(f=>{const p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=c(s),s})}}function K1(r,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=Ha(Yi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=Ha(Yi[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function pc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=Va[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Jn(r,e),K1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?W1(r,e.targets,t):r})}class Z1 extends Fr{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new x1,this.loaders.textureLoader=new yh,this.loaders.cubeTextureLoader=new Fg}startLoading(){this.sources.forEach(e=>{e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}class J1{constructor(){this.experience=new Wn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance()}setInstance(){this.instance=new Ut(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(0,0,8),this.scene.add(this.instance)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){}}class Q1{constructor(){this.experience=new Wn,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new uh({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.useLegacyLights=!0,this.instance.outputEncoding=Ze,this.instance.toneMapping=Vc,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Fc,this.instance.setClearColor(0,0),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}const ev=[],wh=`
varying vec2 vUv;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
}
`,Ah=`
uniform vec3 uColor;

varying vec2 vUv;

void main() {
    float distanceToCenter = distance(vUv, vec2(0.5));
    float strength = pow(1.0 - distanceToCenter, 10.0);

    gl_FragColor = vec4(uColor, strength);
}
`;class mc{constructor(){this.experience=new Wn,this.sizes=this.experience.sizes,this.time=this.experience.time,this.cursor=this.experience.cursor,this.scene=this.experience.scene,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("cursorLight")),this.setPlaneGeometry(),this.setPlaneMaterial(),this.setLight(),this.setPlane()}setPlaneGeometry(){this.planeGeometry=new $s(1,1,1,1)}setPlaneMaterial(){this.planeMaterial=new Bn({uniforms:{uColor:{value:new Ne(12583167)}},blending:Pr,transparent:!0,vertexShader:wh,fragmentShader:Ah})}setLight(){this.light=new oo(3145983,1.5,3,2.5),this.light.castShadow=!0,this.debug.active&&(this.debugFolder.addColor(this.light,"color"),this.debugFolder.add(this.light,"intensity").min(0).max(1e3).step(.01),this.debugFolder.add(this.light,"distance").min(0).max(1e3).step(.01),this.debugFolder.add(this.light,"decay").min(0).max(100).step(.1))}setPlane(){this.plane=new Nt(this.planeGeometry,this.planeMaterial),this.plane.add(this.light),this.plane.scale.set(.5,.5,.5),setTimeout(()=>{this.scene.add(this.plane)},3e3)}update(){if(this.time.elapsed<5e3){const e=(this.time.elapsed*.001-3)*.5,t=fi.lerp(0,.5,e);this.plane.scale.set(t,t,t);const n=fi.lerp(0,1.5,e);this.light.intensity=n}this.plane.position.copy(this.cursor.position)}destroy(){this.planeGeometry.dispose(),this.planeMaterial.dispose(),this.light.dispose(),this.scene.remove(this.plane)}}class tv{constructor(){this.experience=new Wn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setGeometry(),this.setTexture(),this.setMaterial(),this.setMesh()}setGeometry(){this.geometry=new hs(1,1,1)}setTexture(){this.textures={}}setMaterial(){this.material=new js}setMesh(){this.count=10,this.mesh=new no(this.geometry,this.material,this.count),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);for(let e=0;e<this.count;e++){const t=new I((Math.random()-.5)*10,(Math.random()-.5)*5,Math.random()*.5-1.5),n=Math.random(),i=new I(n,n,n),s=new Vn;s.setFromEuler(new Ws((Math.random()-.5)*Math.PI*2,(Math.random()-.5)*Math.PI*2,0));const a=new ze;a.makeRotationFromQuaternion(s),a.setPosition(t),a.scale(i),this.mesh.setMatrixAt(e,a)}}}class nv{constructor(){this.experience=new Wn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setGeometry(),this.setTexture(),this.setMaterial(),this.setMesh()}setGeometry(){this.geometry=new so(1,16,16)}setTexture(){this.textures={}}setMaterial(){this.material=new js}setMesh(){this.count=10,this.mesh=new no(this.geometry,this.material,this.count),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);for(let e=0;e<this.count;e++){const t=new I((Math.random()-.5)*10,(Math.random()-.5)*5,Math.random()*.5-1.5),n=Math.random()*.5,i=new I(n,n,n),s=new ze;s.setPosition(t),s.scale(i),this.mesh.setMatrixAt(e,s)}}}class iv{constructor(){this.experience=new Wn,this.sizes=this.experience.sizes,this.time=this.experience.time,this.cursor=this.experience.cursor,this.scene=this.experience.scene,this.start=18,this.setPlaneGeometry(),this.setPlaneMaterial(),this.setLight(),this.setPlane()}getRandomColor(){const e=Math.floor(Math.random()*360),t=30+Math.floor(Math.random()*20);return`hsl(${e}, 50%, ${t}%)`}setPlaneGeometry(){this.planeGeometry=new $s(1,1,1,1)}setPlaneMaterial(){this.planeMaterial=new Bn({uniforms:{uColor:{value:new Ne(12583167)}},blending:Pr,transparent:!0,vertexShader:wh,fragmentShader:Ah})}setLight(){this.light=new oo(3145983,3,4,2),this.light.castShadow=!0}setPlane(){this.plane=new Nt(this.planeGeometry,this.planeMaterial),this.plane.add(this.light),setInterval(()=>{this.start=this.time.elapsed;const e=new Ne(this.getRandomColor());this.light.color=e,this.planeMaterial.uniforms.uColor.value=e,this.plane.scale.set(.75,.75,.75);const t=this.sizes.width>600?8:2.5,n=this.sizes.width>600?4:5,i=new I((Math.random()-.5)*t,(Math.random()-.5)*n,Math.random()*.1-.2);this.plane.position.set(...i),this.scene.add(this.plane),setTimeout(()=>{this.scene.remove(this.plane)},2e3)},3e3)}update(){const e=this.time.elapsed-this.start,t=e*.001;if(e<1250){const n=fi.lerp(0,1,t);this.plane.scale.set(n,n,n);const i=fi.lerp(0,.25,t);this.light.intensity=i}else{const n=fi.lerp(1.3,0,t-1.25);this.plane.scale.set(n,n,n);const i=fi.lerp(.325,0,t-1.25);this.light.intensity=i}}}class sv{constructor(){this.experience=new Wn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.sizes.width>600&&(this.cursorLight=new mc),this.randomLights=new iv,this.cubes=new tv,this.spheres=new nv}resize(){this.sizes.width>600?this.cursorLight||(this.cursorLight=new mc):this.cursorLight&&(this.cursorLight.destroy(),this.cursorLight=void 0)}update(){this.cursorLight&&this.cursorLight.update(),this.randomLights.update()}}let Sr=null;class Wn{constructor(e){if(Sr)return Sr;Sr=this,window.experience=this,this.canvas=e,this.debug=new m1,this.sizes=new g1,this.time=new _1,this.scene=new gg,this.resources=new Z1(ev),this.camera=new J1,this.renderer=new Q1,this.cursor=new v1,this.world=new sv,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize(),this.world.resize()}update(){this.debug.active&&this.debug.stats.begin(),this.camera.update(),this.world.update(),this.renderer.update(),this.debug.active&&this.debug.stats.end()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.cursor.off("mousemove"),this.cursor.destroy(),this.scene.traverse(e=>{e instanceof Nt&&(e.geometry.dispose(),Object.keys(e.material).forEach(t=>{const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}))}),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy(),Sr=null}}function rv(r){let e;return{c(){e=Je("canvas"),this.h()},l(t){e=Qe(t,"CANVAS",{class:!0}),Me(e).forEach(re),this.h()},h(){k(e,"class","svelte-1sqbi9h")},m(t,n){qe(t,e,n),r[1](e)},p:pe,i:pe,o:pe,d(t){t&&re(e),r[1](null)}}}function av(r,e,t){let n,i;Uc(()=>{i=new Wn(n)}),Kh(()=>{i&&(i.destroy(),i=null)});function s(a){Zh[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,s]}class ov extends ht{constructor(e){super(),ut(this,e,av,rv,ct,{})}}function lv(r){let e;return{c(){e=Je("div"),this.h()},l(t){e=Qe(t,"DIV",{id:!0,class:!0}),Me(e).forEach(re),this.h()},h(){k(e,"id","scroll-icon"),k(e,"class","svelte-iywvak")},m(t,n){qe(t,e,n)},p:pe,i:pe,o:pe,d(t){t&&re(e)}}}class cv extends ht{constructor(e){super(),ut(this,e,null,lv,ct,{})}}const hv=(r="",e="",t="",n=3e3)=>{iu.set({visible:!0,title:r,content:e,type:t,duration:n})};function uv(r){let e,t,n="Who am I?",i,s,a,o="Hey there!",l,c,h="I'm Dimitri, a Fullstack developer who really apreciates the Frontend part, the UX/UI and 3D.",u,f,p="I like to create beautiful UI with nice UX.",g,_,m="Wanna know more?",d,y,x="Come along",v,S,E="3D SCENE PLACEHOLDER",L,R;return{c(){e=Je("section"),t=Je("h2"),t.textContent=n,i=mt(),s=Je("div"),a=Je("p"),a.textContent=o,l=mt(),c=Je("p"),c.textContent=h,u=mt(),f=Je("p"),f.textContent=p,g=mt(),_=Je("p"),_.textContent=m,d=mt(),y=Je("button"),y.textContent=x,v=mt(),S=Je("div"),S.textContent=E,this.h()},l(M){e=Qe(M,"SECTION",{id:!0,class:!0});var A=Me(e);t=Qe(A,"H2",{class:!0,"data-svelte-h":!0}),Kt(t)!=="svelte-hf2mtz"&&(t.textContent=n),i=gt(A),s=Qe(A,"DIV",{class:!0});var F=Me(s);a=Qe(F,"P",{"data-svelte-h":!0}),Kt(a)!=="svelte-2ilusp"&&(a.textContent=o),l=gt(F),c=Qe(F,"P",{"data-svelte-h":!0}),Kt(c)!=="svelte-1mmwx6k"&&(c.textContent=h),u=gt(F),f=Qe(F,"P",{"data-svelte-h":!0}),Kt(f)!=="svelte-1243p4k"&&(f.textContent=p),g=gt(F),_=Qe(F,"P",{"data-svelte-h":!0}),Kt(_)!=="svelte-lk9u1c"&&(_.textContent=m),d=gt(F),y=Qe(F,"BUTTON",{class:!0,"data-svelte-h":!0}),Kt(y)!=="svelte-glqjrl"&&(y.textContent=x),F.forEach(re),v=gt(A),S=Qe(A,"DIV",{class:!0,"data-svelte-h":!0}),Kt(S)!=="svelte-qd41xj"&&(S.textContent=E),A.forEach(re),this.h()},h(){k(t,"class","hidden"),k(y,"class","svelte-1txh5u8"),k(s,"class","content svelte-1txh5u8"),k(S,"class","scene svelte-1txh5u8"),k(e,"id","who-am-i"),k(e,"class","home-section primary svelte-1txh5u8")},m(M,A){qe(M,e,A),_e(e,t),_e(e,i),_e(e,s),_e(s,a),_e(s,l),_e(s,c),_e(s,u),_e(s,f),_e(s,g),_e(s,_),_e(s,d),_e(s,y),_e(e,v),_e(e,S),L||(R=Zn(y,"click",r[0]),L=!0)},p:pe,i:pe,o:pe,d(M){M&&re(e),L=!1,R()}}}function dv(r){function e(){hv("Still under construction","The link is not yet ready. Please wait for a future version to be released.","danger",2500)}return[e]}class fv extends ht{constructor(e){super(),ut(this,e,dv,uv,ct,{})}}var Vt="top",an="bottom",on="right",Ht="left",uo="auto",qs=[Vt,an,on,Ht],rs="start",Hs="end",pv="clippingParents",Eh="viewport",As="popper",mv="reference",gc=qs.reduce(function(r,e){return r.concat([e+"-"+rs,e+"-"+Hs])},[]),Th=[].concat(qs,[uo]).reduce(function(r,e){return r.concat([e,e+"-"+rs,e+"-"+Hs])},[]),gv="beforeRead",vv="read",_v="afterRead",xv="beforeMain",yv="main",Mv="afterMain",bv="beforeWrite",Sv="write",wv="afterWrite",Av=[gv,vv,_v,xv,yv,Mv,bv,Sv,wv];function Tn(r){return r?(r.nodeName||"").toLowerCase():null}function Zt(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var e=r.ownerDocument;return e&&e.defaultView||window}return r}function Si(r){var e=Zt(r).Element;return r instanceof e||r instanceof Element}function rn(r){var e=Zt(r).HTMLElement;return r instanceof e||r instanceof HTMLElement}function fo(r){if(typeof ShadowRoot>"u")return!1;var e=Zt(r).ShadowRoot;return r instanceof e||r instanceof ShadowRoot}function Ev(r){var e=r.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!rn(s)||!Tn(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(a){var o=i[a];o===!1?s.removeAttribute(a):s.setAttribute(a,o===!0?"":o)}))})}function Tv(r){var e=r.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},a=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),o=a.reduce(function(l,c){return l[c]="",l},{});!rn(i)||!Tn(i)||(Object.assign(i.style,o),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const Ch={name:"applyStyles",enabled:!0,phase:"write",fn:Ev,effect:Tv,requires:["computeStyles"]};function En(r){return r.split("-")[0]}var vi=Math.max,Ir=Math.min,as=Math.round;function Ga(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Lh(){return!/^((?!chrome|android).)*safari/i.test(Ga())}function os(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=r.getBoundingClientRect(),i=1,s=1;e&&rn(r)&&(i=r.offsetWidth>0&&as(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&as(n.height)/r.offsetHeight||1);var a=Si(r)?Zt(r):window,o=a.visualViewport,l=!Lh()&&t,c=(n.left+(l&&o?o.offsetLeft:0))/i,h=(n.top+(l&&o?o.offsetTop:0))/s,u=n.width/i,f=n.height/s;return{width:u,height:f,top:h,right:c+u,bottom:h+f,left:c,x:c,y:h}}function po(r){var e=os(r),t=r.offsetWidth,n=r.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:r.offsetLeft,y:r.offsetTop,width:t,height:n}}function Rh(r,e){var t=e.getRootNode&&e.getRootNode();if(r.contains(e))return!0;if(t&&fo(t)){var n=e;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function kn(r){return Zt(r).getComputedStyle(r)}function Cv(r){return["table","td","th"].indexOf(Tn(r))>=0}function ti(r){return((Si(r)?r.ownerDocument:r.document)||window.document).documentElement}function zr(r){return Tn(r)==="html"?r:r.assignedSlot||r.parentNode||(fo(r)?r.host:null)||ti(r)}function vc(r){return!rn(r)||kn(r).position==="fixed"?null:r.offsetParent}function Lv(r){var e=/firefox/i.test(Ga()),t=/Trident/i.test(Ga());if(t&&rn(r)){var n=kn(r);if(n.position==="fixed")return null}var i=zr(r);for(fo(i)&&(i=i.host);rn(i)&&["html","body"].indexOf(Tn(i))<0;){var s=kn(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function Ys(r){for(var e=Zt(r),t=vc(r);t&&Cv(t)&&kn(t).position==="static";)t=vc(t);return t&&(Tn(t)==="html"||Tn(t)==="body"&&kn(t).position==="static")?e:t||Lv(r)||e}function mo(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function Ps(r,e,t){return vi(r,Ir(e,t))}function Rv(r,e,t){var n=Ps(r,e,t);return n>t?t:n}function Ph(){return{top:0,right:0,bottom:0,left:0}}function Dh(r){return Object.assign({},Ph(),r)}function Ih(r,e){return e.reduce(function(t,n){return t[n]=r,t},{})}var Pv=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Dh(typeof e!="number"?e:Ih(e,qs))};function Dv(r){var e,t=r.state,n=r.name,i=r.options,s=t.elements.arrow,a=t.modifiersData.popperOffsets,o=En(t.placement),l=mo(o),c=[Ht,on].indexOf(o)>=0,h=c?"height":"width";if(!(!s||!a)){var u=Pv(i.padding,t),f=po(s),p=l==="y"?Vt:Ht,g=l==="y"?an:on,_=t.rects.reference[h]+t.rects.reference[l]-a[l]-t.rects.popper[h],m=a[l]-t.rects.reference[l],d=Ys(s),y=d?l==="y"?d.clientHeight||0:d.clientWidth||0:0,x=_/2-m/2,v=u[p],S=y-f[h]-u[g],E=y/2-f[h]/2+x,L=Ps(v,E,S),R=l;t.modifiersData[n]=(e={},e[R]=L,e.centerOffset=L-E,e)}}function Iv(r){var e=r.state,t=r.options,n=t.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||Rh(e.elements.popper,i)&&(e.elements.arrow=i))}const Uv={name:"arrow",enabled:!0,phase:"main",fn:Dv,effect:Iv,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ls(r){return r.split("-")[1]}var Nv={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ov(r,e){var t=r.x,n=r.y,i=e.devicePixelRatio||1;return{x:as(t*i)/i||0,y:as(n*i)/i||0}}function _c(r){var e,t=r.popper,n=r.popperRect,i=r.placement,s=r.variation,a=r.offsets,o=r.position,l=r.gpuAcceleration,c=r.adaptive,h=r.roundOffsets,u=r.isFixed,f=a.x,p=f===void 0?0:f,g=a.y,_=g===void 0?0:g,m=typeof h=="function"?h({x:p,y:_}):{x:p,y:_};p=m.x,_=m.y;var d=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),x=Ht,v=Vt,S=window;if(c){var E=Ys(t),L="clientHeight",R="clientWidth";if(E===Zt(t)&&(E=ti(t),kn(E).position!=="static"&&o==="absolute"&&(L="scrollHeight",R="scrollWidth")),E=E,i===Vt||(i===Ht||i===on)&&s===Hs){v=an;var M=u&&E===S&&S.visualViewport?S.visualViewport.height:E[L];_-=M-n.height,_*=l?1:-1}if(i===Ht||(i===Vt||i===an)&&s===Hs){x=on;var A=u&&E===S&&S.visualViewport?S.visualViewport.width:E[R];p-=A-n.width,p*=l?1:-1}}var F=Object.assign({position:o},c&&Nv),j=h===!0?Ov({x:p,y:_},Zt(t)):{x:p,y:_};if(p=j.x,_=j.y,l){var D;return Object.assign({},F,(D={},D[v]=y?"0":"",D[x]=d?"0":"",D.transform=(S.devicePixelRatio||1)<=1?"translate("+p+"px, "+_+"px)":"translate3d("+p+"px, "+_+"px, 0)",D))}return Object.assign({},F,(e={},e[v]=y?_+"px":"",e[x]=d?p+"px":"",e.transform="",e))}function Fv(r){var e=r.state,t=r.options,n=t.gpuAcceleration,i=n===void 0?!0:n,s=t.adaptive,a=s===void 0?!0:s,o=t.roundOffsets,l=o===void 0?!0:o,c={placement:En(e.placement),variation:ls(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,_c(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,_c(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const zv={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Fv,data:{}};var wr={passive:!0};function Bv(r){var e=r.state,t=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,a=n.resize,o=a===void 0?!0:a,l=Zt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(h){h.addEventListener("scroll",t.update,wr)}),o&&l.addEventListener("resize",t.update,wr),function(){s&&c.forEach(function(h){h.removeEventListener("scroll",t.update,wr)}),o&&l.removeEventListener("resize",t.update,wr)}}const kv={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bv,data:{}};var Vv={left:"right",right:"left",bottom:"top",top:"bottom"};function Cr(r){return r.replace(/left|right|bottom|top/g,function(e){return Vv[e]})}var Hv={start:"end",end:"start"};function xc(r){return r.replace(/start|end/g,function(e){return Hv[e]})}function go(r){var e=Zt(r),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function vo(r){return os(ti(r)).left+go(r).scrollLeft}function Gv(r,e){var t=Zt(r),n=ti(r),i=t.visualViewport,s=n.clientWidth,a=n.clientHeight,o=0,l=0;if(i){s=i.width,a=i.height;var c=Lh();(c||!c&&e==="fixed")&&(o=i.offsetLeft,l=i.offsetTop)}return{width:s,height:a,x:o+vo(r),y:l}}function Wv(r){var e,t=ti(r),n=go(r),i=(e=r.ownerDocument)==null?void 0:e.body,s=vi(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=vi(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-n.scrollLeft+vo(r),l=-n.scrollTop;return kn(i||t).direction==="rtl"&&(o+=vi(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:a,x:o,y:l}}function _o(r){var e=kn(r),t=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+n)}function Uh(r){return["html","body","#document"].indexOf(Tn(r))>=0?r.ownerDocument.body:rn(r)&&_o(r)?r:Uh(zr(r))}function Ds(r,e){var t;e===void 0&&(e=[]);var n=Uh(r),i=n===((t=r.ownerDocument)==null?void 0:t.body),s=Zt(n),a=i?[s].concat(s.visualViewport||[],_o(n)?n:[]):n,o=e.concat(a);return i?o:o.concat(Ds(zr(a)))}function Wa(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function $v(r,e){var t=os(r,!1,e==="fixed");return t.top=t.top+r.clientTop,t.left=t.left+r.clientLeft,t.bottom=t.top+r.clientHeight,t.right=t.left+r.clientWidth,t.width=r.clientWidth,t.height=r.clientHeight,t.x=t.left,t.y=t.top,t}function yc(r,e,t){return e===Eh?Wa(Gv(r,t)):Si(e)?$v(e,t):Wa(Wv(ti(r)))}function jv(r){var e=Ds(zr(r)),t=["absolute","fixed"].indexOf(kn(r).position)>=0,n=t&&rn(r)?Ys(r):r;return Si(n)?e.filter(function(i){return Si(i)&&Rh(i,n)&&Tn(i)!=="body"}):[]}function Xv(r,e,t,n){var i=e==="clippingParents"?jv(r):[].concat(e),s=[].concat(i,[t]),a=s[0],o=s.reduce(function(l,c){var h=yc(r,c,n);return l.top=vi(h.top,l.top),l.right=Ir(h.right,l.right),l.bottom=Ir(h.bottom,l.bottom),l.left=vi(h.left,l.left),l},yc(r,a,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Nh(r){var e=r.reference,t=r.element,n=r.placement,i=n?En(n):null,s=n?ls(n):null,a=e.x+e.width/2-t.width/2,o=e.y+e.height/2-t.height/2,l;switch(i){case Vt:l={x:a,y:e.y-t.height};break;case an:l={x:a,y:e.y+e.height};break;case on:l={x:e.x+e.width,y:o};break;case Ht:l={x:e.x-t.width,y:o};break;default:l={x:e.x,y:e.y}}var c=i?mo(i):null;if(c!=null){var h=c==="y"?"height":"width";switch(s){case rs:l[c]=l[c]-(e[h]/2-t[h]/2);break;case Hs:l[c]=l[c]+(e[h]/2-t[h]/2);break}}return l}function Gs(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=n===void 0?r.placement:n,s=t.strategy,a=s===void 0?r.strategy:s,o=t.boundary,l=o===void 0?pv:o,c=t.rootBoundary,h=c===void 0?Eh:c,u=t.elementContext,f=u===void 0?As:u,p=t.altBoundary,g=p===void 0?!1:p,_=t.padding,m=_===void 0?0:_,d=Dh(typeof m!="number"?m:Ih(m,qs)),y=f===As?mv:As,x=r.rects.popper,v=r.elements[g?y:f],S=Xv(Si(v)?v:v.contextElement||ti(r.elements.popper),l,h,a),E=os(r.elements.reference),L=Nh({reference:E,element:x,strategy:"absolute",placement:i}),R=Wa(Object.assign({},x,L)),M=f===As?R:E,A={top:S.top-M.top+d.top,bottom:M.bottom-S.bottom+d.bottom,left:S.left-M.left+d.left,right:M.right-S.right+d.right},F=r.modifiersData.offset;if(f===As&&F){var j=F[i];Object.keys(A).forEach(function(D){var U=[on,an].indexOf(D)>=0?1:-1,z=[Vt,an].indexOf(D)>=0?"y":"x";A[D]+=j[z]*U})}return A}function qv(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=t.boundary,s=t.rootBoundary,a=t.padding,o=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?Th:l,h=ls(n),u=h?o?gc:gc.filter(function(g){return ls(g)===h}):qs,f=u.filter(function(g){return c.indexOf(g)>=0});f.length===0&&(f=u);var p=f.reduce(function(g,_){return g[_]=Gs(r,{placement:_,boundary:i,rootBoundary:s,padding:a})[En(_)],g},{});return Object.keys(p).sort(function(g,_){return p[g]-p[_]})}function Yv(r){if(En(r)===uo)return[];var e=Cr(r);return[xc(r),e,xc(e)]}function Kv(r){var e=r.state,t=r.options,n=r.name;if(!e.modifiersData[n]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,a=t.altAxis,o=a===void 0?!0:a,l=t.fallbackPlacements,c=t.padding,h=t.boundary,u=t.rootBoundary,f=t.altBoundary,p=t.flipVariations,g=p===void 0?!0:p,_=t.allowedAutoPlacements,m=e.options.placement,d=En(m),y=d===m,x=l||(y||!g?[Cr(m)]:Yv(m)),v=[m].concat(x).reduce(function(Y,oe){return Y.concat(En(oe)===uo?qv(e,{placement:oe,boundary:h,rootBoundary:u,padding:c,flipVariations:g,allowedAutoPlacements:_}):oe)},[]),S=e.rects.reference,E=e.rects.popper,L=new Map,R=!0,M=v[0],A=0;A<v.length;A++){var F=v[A],j=En(F),D=ls(F)===rs,U=[Vt,an].indexOf(j)>=0,z=U?"width":"height",te=Gs(e,{placement:F,boundary:h,rootBoundary:u,altBoundary:f,padding:c}),J=U?D?on:Ht:D?an:Vt;S[z]>E[z]&&(J=Cr(J));var W=Cr(J),Q=[];if(s&&Q.push(te[j]<=0),o&&Q.push(te[J]<=0,te[W]<=0),Q.every(function(Y){return Y})){M=F,R=!1;break}L.set(F,Q)}if(R)for(var ne=g?3:1,ge=function(oe){var le=v.find(function(B){var we=L.get(B);if(we)return we.slice(0,oe).every(function(H){return H})});if(le)return M=le,"break"},ce=ne;ce>0;ce--){var V=ge(ce);if(V==="break")break}e.placement!==M&&(e.modifiersData[n]._skip=!0,e.placement=M,e.reset=!0)}}const Zv={name:"flip",enabled:!0,phase:"main",fn:Kv,requiresIfExists:["offset"],data:{_skip:!1}};function Mc(r,e,t){return t===void 0&&(t={x:0,y:0}),{top:r.top-e.height-t.y,right:r.right-e.width+t.x,bottom:r.bottom-e.height+t.y,left:r.left-e.width-t.x}}function bc(r){return[Vt,on,an,Ht].some(function(e){return r[e]>=0})}function Jv(r){var e=r.state,t=r.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,a=Gs(e,{elementContext:"reference"}),o=Gs(e,{altBoundary:!0}),l=Mc(a,n),c=Mc(o,i,s),h=bc(l),u=bc(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":u})}const Qv={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Jv};function e3(r,e,t){var n=En(r),i=[Ht,Vt].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:r})):t,a=s[0],o=s[1];return a=a||0,o=(o||0)*i,[Ht,on].indexOf(n)>=0?{x:o,y:a}:{x:a,y:o}}function t3(r){var e=r.state,t=r.options,n=r.name,i=t.offset,s=i===void 0?[0,0]:i,a=Th.reduce(function(h,u){return h[u]=e3(u,e.rects,s),h},{}),o=a[e.placement],l=o.x,c=o.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=a}const n3={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:t3};function i3(r){var e=r.state,t=r.name;e.modifiersData[t]=Nh({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const s3={name:"popperOffsets",enabled:!0,phase:"read",fn:i3,data:{}};function r3(r){return r==="x"?"y":"x"}function a3(r){var e=r.state,t=r.options,n=r.name,i=t.mainAxis,s=i===void 0?!0:i,a=t.altAxis,o=a===void 0?!1:a,l=t.boundary,c=t.rootBoundary,h=t.altBoundary,u=t.padding,f=t.tether,p=f===void 0?!0:f,g=t.tetherOffset,_=g===void 0?0:g,m=Gs(e,{boundary:l,rootBoundary:c,padding:u,altBoundary:h}),d=En(e.placement),y=ls(e.placement),x=!y,v=mo(d),S=r3(v),E=e.modifiersData.popperOffsets,L=e.rects.reference,R=e.rects.popper,M=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,A=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),F=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(E){if(s){var D,U=v==="y"?Vt:Ht,z=v==="y"?an:on,te=v==="y"?"height":"width",J=E[v],W=J+m[U],Q=J-m[z],ne=p?-R[te]/2:0,ge=y===rs?L[te]:R[te],ce=y===rs?-R[te]:-L[te],V=e.elements.arrow,Y=p&&V?po(V):{width:0,height:0},oe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ph(),le=oe[U],B=oe[z],we=Ps(0,L[te],Y[te]),H=x?L[te]/2-ne-we-le-A.mainAxis:ge-we-le-A.mainAxis,ee=x?-L[te]/2+ne+we+B+A.mainAxis:ce+we+B+A.mainAxis,me=e.elements.arrow&&Ys(e.elements.arrow),Be=me?v==="y"?me.clientTop||0:me.clientLeft||0:0,ye=(D=F==null?void 0:F[v])!=null?D:0,Pe=J+H-ye-Be,at=J+ee-ye,ot=Ps(p?Ir(W,Pe):W,J,p?vi(Q,at):Q);E[v]=ot,j[v]=ot-J}if(o){var Xe,dt=v==="x"?Vt:Ht,We=v==="x"?an:on,Ye=E[S],ft=S==="y"?"height":"width",T=Ye+m[dt],b=Ye-m[We],$=[Vt,Ht].indexOf(d)!==-1,se=(Xe=F==null?void 0:F[S])!=null?Xe:0,ae=$?T:Ye-L[ft]-R[ft]-se+A.altAxis,de=$?Ye+L[ft]+R[ft]-se-A.altAxis:b,Ce=p&&$?Rv(ae,Ye,de):Ps(p?ae:T,Ye,p?de:b);E[S]=Ce,j[S]=Ce-Ye}e.modifiersData[n]=j}}const o3={name:"preventOverflow",enabled:!0,phase:"main",fn:a3,requiresIfExists:["offset"]};function l3(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function c3(r){return r===Zt(r)||!rn(r)?go(r):l3(r)}function h3(r){var e=r.getBoundingClientRect(),t=as(e.width)/r.offsetWidth||1,n=as(e.height)/r.offsetHeight||1;return t!==1||n!==1}function u3(r,e,t){t===void 0&&(t=!1);var n=rn(e),i=rn(e)&&h3(e),s=ti(e),a=os(r,i,t),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Tn(e)!=="body"||_o(s))&&(o=c3(e)),rn(e)?(l=os(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=vo(s))),{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function d3(r){var e=new Map,t=new Set,n=[];r.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(o){if(!t.has(o)){var l=e.get(o);l&&i(l)}}),n.push(s)}return r.forEach(function(s){t.has(s.name)||i(s)}),n}function f3(r){var e=d3(r);return Av.reduce(function(t,n){return t.concat(e.filter(function(i){return i.phase===n}))},[])}function p3(r){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(r())})})),e}}function m3(r){var e=r.reduce(function(t,n){var i=t[n.name];return t[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var Sc={placement:"bottom",modifiers:[],strategy:"absolute"};function wc(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function g3(r){r===void 0&&(r={});var e=r,t=e.defaultModifiers,n=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?Sc:i;return function(o,l,c){c===void 0&&(c=s);var h={placement:"bottom",orderedModifiers:[],options:Object.assign({},Sc,s),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},u=[],f=!1,p={state:h,setOptions:function(d){var y=typeof d=="function"?d(h.options):d;_(),h.options=Object.assign({},s,h.options,y),h.scrollParents={reference:Si(o)?Ds(o):o.contextElement?Ds(o.contextElement):[],popper:Ds(l)};var x=f3(m3([].concat(n,h.options.modifiers)));return h.orderedModifiers=x.filter(function(v){return v.enabled}),g(),p.update()},forceUpdate:function(){if(!f){var d=h.elements,y=d.reference,x=d.popper;if(wc(y,x)){h.rects={reference:u3(y,Ys(x),h.options.strategy==="fixed"),popper:po(x)},h.reset=!1,h.placement=h.options.placement,h.orderedModifiers.forEach(function(A){return h.modifiersData[A.name]=Object.assign({},A.data)});for(var v=0;v<h.orderedModifiers.length;v++){if(h.reset===!0){h.reset=!1,v=-1;continue}var S=h.orderedModifiers[v],E=S.fn,L=S.options,R=L===void 0?{}:L,M=S.name;typeof E=="function"&&(h=E({state:h,options:R,name:M,instance:p})||h)}}}},update:p3(function(){return new Promise(function(m){p.forceUpdate(),m(h)})}),destroy:function(){_(),f=!0}};if(!wc(o,l))return p;p.setOptions(c).then(function(m){!f&&c.onFirstUpdate&&c.onFirstUpdate(m)});function g(){h.orderedModifiers.forEach(function(m){var d=m.name,y=m.options,x=y===void 0?{}:y,v=m.effect;if(typeof v=="function"){var S=v({state:h,name:d,instance:p,options:x}),E=function(){};u.push(S||E)}})}function _(){u.forEach(function(m){return m()}),u=[]}return p}}var v3=[kv,s3,zv,Ch,n3,Zv,o3,Uv,Qv],_3=g3({defaultModifiers:v3}),x3="tippy-box",Oh="tippy-content",y3="tippy-backdrop",Fh="tippy-arrow",zh="tippy-svg-arrow",hi={passive:!0,capture:!0},Bh=function(){return document.body};function wa(r,e,t){if(Array.isArray(r)){var n=r[e];return n??(Array.isArray(t)?t[e]:t)}return r}function xo(r,e){var t={}.toString.call(r);return t.indexOf("[object")===0&&t.indexOf(e+"]")>-1}function kh(r,e){return typeof r=="function"?r.apply(void 0,e):r}function Ac(r,e){if(e===0)return r;var t;return function(n){clearTimeout(t),t=setTimeout(function(){r(n)},e)}}function M3(r){return r.split(/\s+/).filter(Boolean)}function Wi(r){return[].concat(r)}function Ec(r,e){r.indexOf(e)===-1&&r.push(e)}function b3(r){return r.filter(function(e,t){return r.indexOf(e)===t})}function S3(r){return r.split("-")[0]}function Ur(r){return[].slice.call(r)}function Tc(r){return Object.keys(r).reduce(function(e,t){return r[t]!==void 0&&(e[t]=r[t]),e},{})}function Is(){return document.createElement("div")}function Br(r){return["Element","Fragment"].some(function(e){return xo(r,e)})}function w3(r){return xo(r,"NodeList")}function A3(r){return xo(r,"MouseEvent")}function E3(r){return!!(r&&r._tippy&&r._tippy.reference===r)}function T3(r){return Br(r)?[r]:w3(r)?Ur(r):Array.isArray(r)?r:Ur(document.querySelectorAll(r))}function Aa(r,e){r.forEach(function(t){t&&(t.style.transitionDuration=e+"ms")})}function Cc(r,e){r.forEach(function(t){t&&t.setAttribute("data-state",e)})}function C3(r){var e,t=Wi(r),n=t[0];return n!=null&&(e=n.ownerDocument)!=null&&e.body?n.ownerDocument:document}function L3(r,e){var t=e.clientX,n=e.clientY;return r.every(function(i){var s=i.popperRect,a=i.popperState,o=i.props,l=o.interactiveBorder,c=S3(a.placement),h=a.modifiersData.offset;if(!h)return!0;var u=c==="bottom"?h.top.y:0,f=c==="top"?h.bottom.y:0,p=c==="right"?h.left.x:0,g=c==="left"?h.right.x:0,_=s.top-n+u>l,m=n-s.bottom-f>l,d=s.left-t+p>l,y=t-s.right-g>l;return _||m||d||y})}function Ea(r,e,t){var n=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(i){r[n](i,t)})}function Lc(r,e){for(var t=e;t;){var n;if(r.contains(t))return!0;t=t.getRootNode==null||(n=t.getRootNode())==null?void 0:n.host}return!1}var bn={isTouch:!1},Rc=0;function R3(){bn.isTouch||(bn.isTouch=!0,window.performance&&document.addEventListener("mousemove",Vh))}function Vh(){var r=performance.now();r-Rc<20&&(bn.isTouch=!1,document.removeEventListener("mousemove",Vh)),Rc=r}function P3(){var r=document.activeElement;if(E3(r)){var e=r._tippy;r.blur&&!e.state.isVisible&&r.blur()}}function D3(){document.addEventListener("touchstart",R3,hi),window.addEventListener("blur",P3)}var I3=typeof window<"u"&&typeof document<"u",U3=I3?!!window.msCrypto:!1,N3={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},O3={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},fn=Object.assign({appendTo:Bh,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},N3,O3),F3=Object.keys(fn),z3=function(e){var t=Object.keys(e);t.forEach(function(n){fn[n]=e[n]})};function Hh(r){var e=r.plugins||[],t=e.reduce(function(n,i){var s=i.name,a=i.defaultValue;if(s){var o;n[s]=r[s]!==void 0?r[s]:(o=fn[s])!=null?o:a}return n},{});return Object.assign({},r,t)}function B3(r,e){var t=e?Object.keys(Hh(Object.assign({},fn,{plugins:e}))):F3,n=t.reduce(function(i,s){var a=(r.getAttribute("data-tippy-"+s)||"").trim();if(!a)return i;if(s==="content")i[s]=a;else try{i[s]=JSON.parse(a)}catch{i[s]=a}return i},{});return n}function Pc(r,e){var t=Object.assign({},e,{content:kh(e.content,[r])},e.ignoreAttributes?{}:B3(r,e.plugins));return t.aria=Object.assign({},fn.aria,t.aria),t.aria={expanded:t.aria.expanded==="auto"?e.interactive:t.aria.expanded,content:t.aria.content==="auto"?e.interactive?null:"describedby":t.aria.content},t}var k3=function(){return"innerHTML"};function $a(r,e){r[k3()]=e}function Dc(r){var e=Is();return r===!0?e.className=Fh:(e.className=zh,Br(r)?e.appendChild(r):$a(e,r)),e}function Ic(r,e){Br(e.content)?($a(r,""),r.appendChild(e.content)):typeof e.content!="function"&&(e.allowHTML?$a(r,e.content):r.textContent=e.content)}function ja(r){var e=r.firstElementChild,t=Ur(e.children);return{box:e,content:t.find(function(n){return n.classList.contains(Oh)}),arrow:t.find(function(n){return n.classList.contains(Fh)||n.classList.contains(zh)}),backdrop:t.find(function(n){return n.classList.contains(y3)})}}function Gh(r){var e=Is(),t=Is();t.className=x3,t.setAttribute("data-state","hidden"),t.setAttribute("tabindex","-1");var n=Is();n.className=Oh,n.setAttribute("data-state","hidden"),Ic(n,r.props),e.appendChild(t),t.appendChild(n),i(r.props,r.props);function i(s,a){var o=ja(e),l=o.box,c=o.content,h=o.arrow;a.theme?l.setAttribute("data-theme",a.theme):l.removeAttribute("data-theme"),typeof a.animation=="string"?l.setAttribute("data-animation",a.animation):l.removeAttribute("data-animation"),a.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth=typeof a.maxWidth=="number"?a.maxWidth+"px":a.maxWidth,a.role?l.setAttribute("role",a.role):l.removeAttribute("role"),(s.content!==a.content||s.allowHTML!==a.allowHTML)&&Ic(c,r.props),a.arrow?h?s.arrow!==a.arrow&&(l.removeChild(h),l.appendChild(Dc(a.arrow))):l.appendChild(Dc(a.arrow)):h&&l.removeChild(h)}return{popper:e,onUpdate:i}}Gh.$$tippy=!0;var V3=1,Ar=[],Ta=[];function H3(r,e){var t=Pc(r,Object.assign({},fn,Hh(Tc(e)))),n,i,s,a=!1,o=!1,l=!1,c=!1,h,u,f,p=[],g=Ac(Pe,t.interactiveDebounce),_,m=V3++,d=null,y=b3(t.plugins),x={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},v={id:m,reference:r,popper:Is(),popperInstance:d,props:t,state:x,plugins:y,clearDelayTimeouts:ae,setProps:de,setContent:Ce,show:ve,hide:q,hideWithInteractivity:Se,enable:$,disable:se,unmount:Ee,destroy:Le};if(!t.render)return v;var S=t.render(v),E=S.popper,L=S.onUpdate;E.setAttribute("data-tippy-root",""),E.id="tippy-"+v.id,v.popper=E,r._tippy=v,E._tippy=v;var R=y.map(function(P){return P.fn(v)}),M=r.hasAttribute("aria-expanded");return me(),ne(),J(),W("onCreate",[v]),t.showOnCreate&&T(),E.addEventListener("mouseenter",function(){v.props.interactive&&v.state.isVisible&&v.clearDelayTimeouts()}),E.addEventListener("mouseleave",function(){v.props.interactive&&v.props.trigger.indexOf("mouseenter")>=0&&U().addEventListener("mousemove",g)}),v;function A(){var P=v.props.touch;return Array.isArray(P)?P:[P,0]}function F(){return A()[0]==="hold"}function j(){var P;return!!((P=v.props.render)!=null&&P.$$tippy)}function D(){return _||r}function U(){var P=D().parentNode;return P?C3(P):document}function z(){return ja(E)}function te(P){return v.state.isMounted&&!v.state.isVisible||bn.isTouch||h&&h.type==="focus"?0:wa(v.props.delay,P?0:1,fn.delay)}function J(P){P===void 0&&(P=!1),E.style.pointerEvents=v.props.interactive&&!P?"":"none",E.style.zIndex=""+v.props.zIndex}function W(P,K,he){if(he===void 0&&(he=!0),R.forEach(function(Ae){Ae[P]&&Ae[P].apply(Ae,K)}),he){var be;(be=v.props)[P].apply(be,K)}}function Q(){var P=v.props.aria;if(P.content){var K="aria-"+P.content,he=E.id,be=Wi(v.props.triggerTarget||r);be.forEach(function(Ae){var C=Ae.getAttribute(K);if(v.state.isVisible)Ae.setAttribute(K,C?C+" "+he:he);else{var G=C&&C.replace(he,"").trim();G?Ae.setAttribute(K,G):Ae.removeAttribute(K)}})}}function ne(){if(!(M||!v.props.aria.expanded)){var P=Wi(v.props.triggerTarget||r);P.forEach(function(K){v.props.interactive?K.setAttribute("aria-expanded",v.state.isVisible&&K===D()?"true":"false"):K.removeAttribute("aria-expanded")})}}function ge(){U().removeEventListener("mousemove",g),Ar=Ar.filter(function(P){return P!==g})}function ce(P){if(!(bn.isTouch&&(l||P.type==="mousedown"))){var K=P.composedPath&&P.composedPath()[0]||P.target;if(!(v.props.interactive&&Lc(E,K))){if(Wi(v.props.triggerTarget||r).some(function(he){return Lc(he,K)})){if(bn.isTouch||v.state.isVisible&&v.props.trigger.indexOf("click")>=0)return}else W("onClickOutside",[v,P]);v.props.hideOnClick===!0&&(v.clearDelayTimeouts(),v.hide(),o=!0,setTimeout(function(){o=!1}),v.state.isMounted||le())}}}function V(){l=!0}function Y(){l=!1}function oe(){var P=U();P.addEventListener("mousedown",ce,!0),P.addEventListener("touchend",ce,hi),P.addEventListener("touchstart",Y,hi),P.addEventListener("touchmove",V,hi)}function le(){var P=U();P.removeEventListener("mousedown",ce,!0),P.removeEventListener("touchend",ce,hi),P.removeEventListener("touchstart",Y,hi),P.removeEventListener("touchmove",V,hi)}function B(P,K){H(P,function(){!v.state.isVisible&&E.parentNode&&E.parentNode.contains(E)&&K()})}function we(P,K){H(P,K)}function H(P,K){var he=z().box;function be(Ae){Ae.target===he&&(Ea(he,"remove",be),K())}if(P===0)return K();Ea(he,"remove",u),Ea(he,"add",be),u=be}function ee(P,K,he){he===void 0&&(he=!1);var be=Wi(v.props.triggerTarget||r);be.forEach(function(Ae){Ae.addEventListener(P,K,he),p.push({node:Ae,eventType:P,handler:K,options:he})})}function me(){F()&&(ee("touchstart",ye,{passive:!0}),ee("touchend",at,{passive:!0})),M3(v.props.trigger).forEach(function(P){if(P!=="manual")switch(ee(P,ye),P){case"mouseenter":ee("mouseleave",at);break;case"focus":ee(U3?"focusout":"blur",ot);break;case"focusin":ee("focusout",ot);break}})}function Be(){p.forEach(function(P){var K=P.node,he=P.eventType,be=P.handler,Ae=P.options;K.removeEventListener(he,be,Ae)}),p=[]}function ye(P){var K,he=!1;if(!(!v.state.isEnabled||Xe(P)||o)){var be=((K=h)==null?void 0:K.type)==="focus";h=P,_=P.currentTarget,ne(),!v.state.isVisible&&A3(P)&&Ar.forEach(function(Ae){return Ae(P)}),P.type==="click"&&(v.props.trigger.indexOf("mouseenter")<0||a)&&v.props.hideOnClick!==!1&&v.state.isVisible?he=!0:T(P),P.type==="click"&&(a=!he),he&&!be&&b(P)}}function Pe(P){var K=P.target,he=D().contains(K)||E.contains(K);if(!(P.type==="mousemove"&&he)){var be=ft().concat(E).map(function(Ae){var C,G=Ae._tippy,ie=(C=G.popperInstance)==null?void 0:C.state;return ie?{popperRect:Ae.getBoundingClientRect(),popperState:ie,props:t}:null}).filter(Boolean);L3(be,P)&&(ge(),b(P))}}function at(P){var K=Xe(P)||v.props.trigger.indexOf("click")>=0&&a;if(!K){if(v.props.interactive){v.hideWithInteractivity(P);return}b(P)}}function ot(P){v.props.trigger.indexOf("focusin")<0&&P.target!==D()||v.props.interactive&&P.relatedTarget&&E.contains(P.relatedTarget)||b(P)}function Xe(P){return bn.isTouch?F()!==P.type.indexOf("touch")>=0:!1}function dt(){We();var P=v.props,K=P.popperOptions,he=P.placement,be=P.offset,Ae=P.getReferenceClientRect,C=P.moveTransition,G=j()?ja(E).arrow:null,ie=Ae?{getBoundingClientRect:Ae,contextElement:Ae.contextElement||D()}:r,fe={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(nt){var pt=nt.state;if(j()){var gn=z(),lt=gn.box;["placement","reference-hidden","escaped"].forEach(function(At){At==="placement"?lt.setAttribute("data-placement",pt.placement):pt.attributes.popper["data-popper-"+At]?lt.setAttribute("data-"+At,""):lt.removeAttribute("data-"+At)}),pt.attributes.popper={}}}},xe=[{name:"offset",options:{offset:be}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!C}},fe];j()&&G&&xe.push({name:"arrow",options:{element:G,padding:3}}),xe.push.apply(xe,(K==null?void 0:K.modifiers)||[]),v.popperInstance=_3(ie,E,Object.assign({},K,{placement:he,onFirstUpdate:f,modifiers:xe}))}function We(){v.popperInstance&&(v.popperInstance.destroy(),v.popperInstance=null)}function Ye(){var P=v.props.appendTo,K,he=D();v.props.interactive&&P===Bh||P==="parent"?K=he.parentNode:K=kh(P,[he]),K.contains(E)||K.appendChild(E),v.state.isMounted=!0,dt()}function ft(){return Ur(E.querySelectorAll("[data-tippy-root]"))}function T(P){v.clearDelayTimeouts(),P&&W("onTrigger",[v,P]),oe();var K=te(!0),he=A(),be=he[0],Ae=he[1];bn.isTouch&&be==="hold"&&Ae&&(K=Ae),K?n=setTimeout(function(){v.show()},K):v.show()}function b(P){if(v.clearDelayTimeouts(),W("onUntrigger",[v,P]),!v.state.isVisible){le();return}if(!(v.props.trigger.indexOf("mouseenter")>=0&&v.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(P.type)>=0&&a)){var K=te(!1);K?i=setTimeout(function(){v.state.isVisible&&v.hide()},K):s=requestAnimationFrame(function(){v.hide()})}}function $(){v.state.isEnabled=!0}function se(){v.hide(),v.state.isEnabled=!1}function ae(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(s)}function de(P){if(!v.state.isDestroyed){W("onBeforeUpdate",[v,P]),Be();var K=v.props,he=Pc(r,Object.assign({},K,Tc(P),{ignoreAttributes:!0}));v.props=he,me(),K.interactiveDebounce!==he.interactiveDebounce&&(ge(),g=Ac(Pe,he.interactiveDebounce)),K.triggerTarget&&!he.triggerTarget?Wi(K.triggerTarget).forEach(function(be){be.removeAttribute("aria-expanded")}):he.triggerTarget&&r.removeAttribute("aria-expanded"),ne(),J(),L&&L(K,he),v.popperInstance&&(dt(),ft().forEach(function(be){requestAnimationFrame(be._tippy.popperInstance.forceUpdate)})),W("onAfterUpdate",[v,P])}}function Ce(P){v.setProps({content:P})}function ve(){var P=v.state.isVisible,K=v.state.isDestroyed,he=!v.state.isEnabled,be=bn.isTouch&&!v.props.touch,Ae=wa(v.props.duration,0,fn.duration);if(!(P||K||he||be)&&!D().hasAttribute("disabled")&&(W("onShow",[v],!1),v.props.onShow(v)!==!1)){if(v.state.isVisible=!0,j()&&(E.style.visibility="visible"),J(),oe(),v.state.isMounted||(E.style.transition="none"),j()){var C=z(),G=C.box,ie=C.content;Aa([G,ie],0)}f=function(){var xe;if(!(!v.state.isVisible||c)){if(c=!0,E.offsetHeight,E.style.transition=v.props.moveTransition,j()&&v.props.animation){var et=z(),nt=et.box,pt=et.content;Aa([nt,pt],Ae),Cc([nt,pt],"visible")}Q(),ne(),Ec(Ta,v),(xe=v.popperInstance)==null||xe.forceUpdate(),W("onMount",[v]),v.props.animation&&j()&&we(Ae,function(){v.state.isShown=!0,W("onShown",[v])})}},Ye()}}function q(){var P=!v.state.isVisible,K=v.state.isDestroyed,he=!v.state.isEnabled,be=wa(v.props.duration,1,fn.duration);if(!(P||K||he)&&(W("onHide",[v],!1),v.props.onHide(v)!==!1)){if(v.state.isVisible=!1,v.state.isShown=!1,c=!1,a=!1,j()&&(E.style.visibility="hidden"),ge(),le(),J(!0),j()){var Ae=z(),C=Ae.box,G=Ae.content;v.props.animation&&(Aa([C,G],be),Cc([C,G],"hidden"))}Q(),ne(),v.props.animation?j()&&B(be,v.unmount):v.unmount()}}function Se(P){U().addEventListener("mousemove",g),Ec(Ar,g),g(P)}function Ee(){v.state.isVisible&&v.hide(),v.state.isMounted&&(We(),ft().forEach(function(P){P._tippy.unmount()}),E.parentNode&&E.parentNode.removeChild(E),Ta=Ta.filter(function(P){return P!==v}),v.state.isMounted=!1,W("onHidden",[v]))}function Le(){v.state.isDestroyed||(v.clearDelayTimeouts(),v.unmount(),Be(),delete r._tippy,v.state.isDestroyed=!0,W("onDestroy",[v]))}}function Ks(r,e){e===void 0&&(e={});var t=fn.plugins.concat(e.plugins||[]);D3();var n=Object.assign({},e,{plugins:t}),i=T3(r),s=i.reduce(function(a,o){var l=o&&H3(o,n);return l&&a.push(l),a},[]);return Br(r)?s[0]:s}Ks.defaultProps=fn;Ks.setDefaultProps=z3;Ks.currentInput=bn;Object.assign({},Ch,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});Ks.setDefaultProps({render:Gh});const G3=(r,e={})=>{const t=r.getAttribute("aria-label"),n=e.content||r.title||t;t||r.setAttribute("aria-label",n),r.title="";const i=Ks(r,{content:n,...e});return{update:s=>i.setProps({content:n,...s}),destroy:()=>i.destroy()}};function W3(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","m9.032 2l10.005 112.093l44.896 12.401l45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471l-3.233 36.119l-.238 2.27L64 102.609v.002l-.034.018l-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class $3 extends ht{constructor(e){super(),ut(this,e,null,W3,ct,{})}}function j3(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","m8.76 1l10.055 112.883l45.118 12.58l45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605l.01.203l-.014.467v-.004l-2.378 26.294l-.262 2.336L64 101.607v.001l-.022.019l-28.311-7.888L33.75 72h13.883l.985 11.054l15.386 4.17l-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043l-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041l-.63-7.131L29.401 23h69.281l-.331 3.862z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class X3 extends ht{constructor(e){super(),ut(this,e,null,j3,ct,{})}}function q3(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 0 0-.43-.44l-.53-.38l-.17-.12l-5.57-4l-.19-.14l-.71-.5a3.5 3.5 0 0 0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09c-10.65-17.92-11.86-32.28-4.73-54.28c1.27-3.83.09-6.36-3.71-8c-7.64-3.25-18.1-1.59-25.52.37c-3.46.9-5.54 2.86-6.2 5.83c-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38c1.13-3.34.24-5.56-2.89-7.22c-8.74-4.51-21.85-1.41-27.07.13c-6.62 1.93-13.72 19.82-21.65 41.24c-2 5.39-3.72 10-4.75 12.15c-2.45 5-4.79 10.7-7.27 16.75c-5.6 13.69-11.91 29.1-20.93 38.78c-3.28-7.25 1.88-18.68 6.89-29.77c5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 0 0-8.33-4.32a13.26 13.26 0 0 0-6.15 1c.67-5.65.7-10.11-.95-15.5c-2.36-7.69-8.49-12-16.93-11.77c-19.22.56-35.48 14.88-45.75 26.8c-6.84 8-22 14.1-35.31 19.45c-5.26 2.23-10.26 4.23-14.43 6.23c-6.65-5.62-15.1-11.29-24-17.28c-25-16.78-53.33-35.81-54.31-61.61c-1.4-38.11 42-65.14 79.88-84.43c28.71-14.6 53.67-24.28 76.31-29.57c31.8-7.43 58.66-5.93 79.82 4.44c11.58 5.67 17 18 13.56 30.68c-9 32.95-46.29 55.53-78.18 65.69c-19.21 6.12-35.56 8.68-50 7.84c-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 0 0-3.2-1.8l-.29-.07a3.21 3.21 0 0 0-3.19 1c-1.3 1.55-.84 4-.37 5.24c6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0 0 18.78 1.79c44.21 0 100.62-25.49 121.34-46.48c14.13-14.3 24.42-29 28.68-54.35c4.45-26.55-13.55-45-31.89-53.5c-44.57-20.57-95.19-12.44-129.81-2c-40.5 12.21-82.4 34.41-114.94 60.93c-40.12 32.67-54.62 63-43.12 90.25c11.81 27.93 40.61 45.4 68.46 62.3c9 5.45 17.56 10.64 25.27 16c-2.32 1.13-4.69 2.28-7.1 3.43c-23.38 11.33-49.9 24.08-64.61 45.15c-10.68 15.35-12.68 30.63-5.94 45.42c3.6 7.87 10 13.21 18.89 15.87A50 50 0 0 0 53 432c17.31 0 36.36-7 46.73-13.47c18.32-11.5 30.19-26.94 35.29-45.89c4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36c3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55c-.24 6.3.06 12.68 2.21 18.09c1.93 4.87 5.11 8.1 9.21 9.34c4.36 1.33 9.47.21 14.39-3.15c22.17-15.17 37.33-51.58 49.51-80.85c1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0 0 12.5 31.07c1.18 2.14 1.08 3.08-.52 4.84c-2.41 2.64-5.77 5.83-9.33 9.21c-10.78 10.23-24.2 23-26 34.23c-.7 4.5 2.4 8.6 7.21 9.53c14.47 2.88 31.9-1.33 46.64-11.25c13.4-9 18.44-21.55 15-37.19c-3.33-15.06 4.27-33.76 22.59-55.62c3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 0 0 5.58 9.22a14.22 14.22 0 0 0 11.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5c11.7 4 20.09 10.57 24.93 19.64c6.09 11.41 2.8 21.94-9.29 29.65c-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 0 0 1 2.23c1.4 1.15 5.72 3.15 15.49-3c9-5.65 14.28-13.34 15.63-23a39 39 0 0 0-.01-8.01Zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38c-8.26 6.66-17.23 10.75-25.25 11.53c-5.6.54-9.67-.22-12.09-2.27c-1.81-1.53-2.78-3.82-3-7c-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 0 1 1.78 17.59Zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35c-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69c6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 0 1 1.34-.19a1.58 1.58 0 0 1 1 .27a1.64 1.64 0 0 1 .19 1.33Zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58Zm67.37-14.91a14.07 14.07 0 0 1-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09c2.33 9.46-2.44 19.46-12.07 24.7Z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 512 512")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class Y3 extends ht{constructor(e){super(),ut(this,e,null,q3,ct,{})}}function K3(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401c-6.271 1.44-12.269.619-16.731-2.059c-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071c1.214 2.034 2.261 3.474 4.319 4.485c2.022.69 6.461 1.131 8.175-2.427c1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152c.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176c-1.916-2.165-3.117-3.296-4.26-5.795c4.819-2.772 4.819-2.772 9.508-5.485c2.547 3.915 4.902 6.068 9.139 6.949c5.748.702 11.531-1.273 10.234-7.378c-1.333-4.986-11.77-6.199-18.873-11.531c-7.211-4.843-8.901-16.611-2.975-23.335c1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355c.904.916 1.642 1.904 3.022 4.045c-3.772 2.404-3.76 2.381-9.163 5.879c-1.154-2.486-3.069-4.046-5.093-4.724c-3.142-.952-7.104.083-7.926 3.403c-.285 1.023-.226 1.975.227 3.665c1.273 2.903 5.545 4.165 9.377 5.926c11.031 4.474 14.756 9.271 15.672 14.981c.882 4.916-.213 8.105-.38 8.581z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class Z3 extends ht{constructor(e){super(),ut(this,e,null,K3,ct,{})}}function J3(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 0 0-15.418 22.938a35.543 35.543 0 0 0 3.566 23.102a33.01 33.01 0 0 0-5.066 12.793a36.517 36.517 0 0 0 6.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0 0 15.355-22.938a35.44 35.44 0 0 0-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 0 1-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832l.54-1.75l1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375l-.122 1.067c-.105 1.48.332 3.144 1.188 4.414c1.75 2.52 4.793 3.73 7.727 2.937c.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106c.328-1.773-.106-3.585-1.066-5.02c-1.774-2.46-4.793-3.565-7.727-2.831c-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 0 1-3.75-16.586a20.643 20.643 0 0 1 9.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668c9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 0 1 3.043 19.398l-.543 1.77l-1.539-1.062a39.399 39.399 0 0 0-11.727-5.875l-1.066-.313l.106-1.066c.105-1.563-.332-3.207-1.188-4.48c-1.754-2.52-4.793-3.583-7.727-2.833c-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144c-.312 1.707.106 3.582 1.066 4.957c1.708 2.524 4.81 3.586 7.688 2.832c.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707c9.668-2.52 19.75 1.274 25.394 9.438c3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 0 1-9.332 13.874L61.23 109.97a25.82 25.82 0 0 1-6.187 2.707zm0 0"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class Q3 extends ht{constructor(e){super(),ut(this,e,null,J3,ct,{})}}function e2(r){let e,t,n=[{xmlns:"http://www.w3.org/2000/svg"},{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"},r[0]],i={};for(let s=0;s<n.length;s+=1)i=Ki(i,n[s]);return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(s){e=Ue(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var a=Me(e);t=Ue(a,"path",{fill:!0,d:!0}),Me(t).forEach(re),a.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M24 1.61h-9.94L12 5.16L9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"),Rr(e,i)},m(s,a){qe(s,e,a),_e(e,t)},p(s,[a]){Rr(e,i=Nc(n,[{xmlns:"http://www.w3.org/2000/svg"},{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"},a&1&&s[0]]))},i:pe,o:pe,d(s){s&&re(e)}}}function t2(r,e,t){return r.$$set=n=>{t(0,e=Ki(Ki({},e),Lr(n)))},e=Lr(e),[e]}class n2 extends ht{constructor(e){super(),ut(this,e,t2,e2,ct,{})}}function i2(r){let e,t,n,i,s,a;return{c(){e=Ie("svg"),t=Ie("g"),n=Ie("path"),i=Ie("path"),s=Ie("path"),a=Ie("path"),this.h()},l(o){e=Ue(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var l=Me(e);t=Ue(l,"g",{fill:!0});var c=Me(t);n=Ue(c,"path",{d:!0}),Me(n).forEach(re),i=Ue(c,"path",{d:!0}),Me(i).forEach(re),s=Ue(c,"path",{d:!0}),Me(s).forEach(re),a=Ue(c,"path",{d:!0}),Me(a).forEach(re),c.forEach(re),l.forEach(re),this.h()},h(){k(n,"d","M16.219 15.762a1.129 1.129 0 0 0-1.076 1.399l24.394 98.742a1.129 1.129 0 0 0 1.879.544l73.386-70.59a1.129 1.129 0 0 0-.47-1.899L16.55 15.806a1.129 1.129 0 0 0-.331-.044zm1.584 2.754l94.024 27.07l-70.566 67.877l-23.458-94.947z"),k(i,"d","M65.137 29.84a1.129 1.129 0 0 0-.807.315L27.654 65.46a1.129 1.129 0 0 0 .471 1.898L76.984 81.44a1.129 1.129 0 0 0 1.409-1.355L66.21 30.698a1.129 1.129 0 0 0-1.073-.858zm-.651 3.3l11.248 45.59l-45.104-13l33.856-32.59z"),k(s,"d","M46.914 47.313a1.129 1.129 0 0 0-1.076 1.399l6.054 24.531a1.129 1.129 0 0 0 1.88.543l18.222-17.563a1.129 1.129 0 0 0-.472-1.898l-24.277-6.968a1.129 1.129 0 0 0-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z"),k(a,"d","M40.902 22.809a1.129 1.129 0 0 0-.807.316L21.873 40.687a1.129 1.129 0 0 0 .472 1.898l24.273 6.969a1.129 1.129 0 0 0 1.408-1.356l-6.051-24.53a1.129 1.129 0 0 0-1.073-.86zm-.65 3.3l5.114 20.736l-20.517-5.89l15.403-14.847zm49.201 10.684a1.129 1.129 0 0 0-.806.316L70.423 54.67a1.129 1.129 0 0 0 .472 1.899l24.274 6.968a1.129 1.129 0 0 0 1.408-1.356l-6.05-24.53a1.129 1.129 0 0 0-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 0 0-.74.315L33.982 89.742a1.129 1.129 0 0 0 .472 1.898l24.278 6.968a1.129 1.129 0 0 0 1.407-1.355l-6.055-24.531a1.129 1.129 0 0 0-1.14-.858zm-.582 3.3l5.118 20.737l-20.522-5.89l15.404-14.846z"),k(t,"fill","currentColor"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(o,l){qe(o,e,l),_e(e,t),_e(t,n),_e(t,i),_e(t,s),_e(t,a)},p:pe,i:pe,o:pe,d(o){o&&re(e)}}}class s2 extends ht{constructor(e){super(),ut(this,e,null,i2,ct,{})}}function r2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176c-5.014-.835-10.195-1.215-15.187-1.191c-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811c-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545c0-3.079 2.451-5.581 5.478-5.581c3.015 0 5.479 2.502 5.479 5.581c-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834c9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66c3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547c0 3.076-2.451 5.579-5.479 5.579c-3.015 0-5.478-2.502-5.478-5.579c0-3.068 2.463-5.547 5.478-5.547z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class a2 extends ht{constructor(e){super(),ut(this,e,null,r2,ct,{})}}function o2(r){let e,t,n,i;return{c(){e=Ie("svg"),t=Ie("g"),n=Ie("path"),i=Ie("path"),this.h()},l(s){e=Ue(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var a=Me(e);t=Ue(a,"g",{fill:!0});var o=Me(t);n=Ue(o,"path",{d:!0}),Me(n).forEach(re),i=Ue(o,"path",{d:!0}),Me(i).forEach(re),o.forEach(re),a.forEach(re),this.h()},h(){k(n,"d","M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855c-25.551-.001-38.87-11.551-38.87-33.705c0-21.338 14.135-35.2 36.015-35.2c3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086c-10.6 0-16.717 6.523-16.717 17.939c0 11.145 5.845 17.26 16.582 17.26c2.309 0 4.212-.136 7.202-.542z"),k(i,"d","M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666c-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14c2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"),k(t,"fill","currentColor"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(s,a){qe(s,e,a),_e(e,t),_e(t,n),_e(t,i)},p:pe,i:pe,o:pe,d(s){s&&re(e)}}}class l2 extends ht{constructor(e){super(),ut(this,e,null,o2,ct,{})}}function c2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M12.061 28.416a.139.139 0 0 0-.125.139v2.744c0 .147.01.333.027.56c.008.096.014.15.022.229c-.11-.125-.208-.257-.344-.361c-.22-.174-.48-.31-.777-.41a3.256 3.256 0 0 0-1.041-.151c-.933 0-1.703.32-2.272.953c-.573.634-.85 1.561-.85 2.762c0 1.188.27 2.105.83 2.73c.561.621 1.331.934 2.272.934c.401 0 .752-.049 1.055-.15a.139.139 0 0 0 .002 0a2.61 2.61 0 0 0 .783-.424c.153-.122.264-.267.38-.409l.126.743a.139.139 0 0 0 .137.115h.879a.139.139 0 0 0 .138-.139v-9.726a.139.139 0 0 0-.138-.14h-1.09a.139.139 0 0 0-.014 0zm4.129.313a.835.835 0 0 0-.565.203c-.16.14-.232.36-.232.617c0 .254.073.47.23.615c.153.135.35.205.567.205c.208 0 .4-.07.55-.203c.167-.143.245-.362.245-.617c0-.259-.078-.48-.246-.62a.818.818 0 0 0-.55-.2zm21.768 2.296c-.593 0-1.104.094-1.533.288c-.43.193-.765.48-.994.853c-.23.371-.342.818-.342 1.33c0 .486.121.921.369 1.295a.139.139 0 0 0 .002.002c.203.297.472.508.775.668c-.215.144-.4.294-.527.457a1.197 1.197 0 0 0-.246.742c0 .245.077.47.226.66a.139.139 0 0 0 .002.002c.08.097.17.18.266.252c-.384.12-.723.288-.969.547a1.705 1.705 0 0 0-.465 1.195c0 .644.288 1.168.832 1.522v.002c.545.359 1.302.527 2.264.527c1.241 0 2.203-.202 2.885-.627c.681-.425 1.037-1.063 1.037-1.861c0-.632-.231-1.143-.686-1.48h-.002c-.449-.338-1.08-.497-1.882-.497h-1.268a2.82 2.82 0 0 1-.555-.047a.696.696 0 0 1-.308-.142c-.054-.052-.08-.113-.08-.217a.59.59 0 0 1 .133-.387a1.46 1.46 0 0 1 .423-.32c.196.028.39.047.578.047c.872 0 1.576-.208 2.092-.633c.516-.429.78-1.022.78-1.738c0-.294-.047-.566-.141-.813c-.062-.163-.153-.29-.238-.423l1.123-.133a.139.139 0 0 0 .123-.137v-.67a.139.139 0 0 0-.139-.139h-2.457a2.446 2.446 0 0 0-.299-.06a3.57 3.57 0 0 0-.388-.045a4.004 4.004 0 0 0-.39-.02h-.001zm-15.918.026a5.24 5.24 0 0 0-1.361.174a6.337 6.337 0 0 0-1.143.416a.139.139 0 0 0-.066.177l.334.79a.139.139 0 0 0 .187.07c.3-.14.617-.26.953-.362c.328-.1.674-.15 1.037-.15c.464 0 .802.11 1.037.32c.225.2.354.57.354 1.14v.286l-1.107.045c-1.178.034-2.067.234-2.67.623c-.603.388-.918.97-.918 1.691c0 .474.102.878.312 1.202a.139.139 0 0 0 0 .002c.212.317.502.557.861.713a.139.139 0 0 0 .002 0c.362.154.77.23 1.223.23c.425 0 .788-.042 1.09-.13a.139.139 0 0 0 .002 0a2.56 2.56 0 0 0 .805-.405a.139.139 0 0 0 .002-.002a4 4 0 0 0 .503-.504l.168.805a.139.139 0 0 0 .135.111h.795a.139.139 0 0 0 .139-.139v-4.658c0-.828-.216-1.461-.67-1.861c-.452-.398-1.126-.584-2.004-.584zm8.375.115a3.36 3.36 0 0 0-.965.137a2.745 2.745 0 0 0-.836.394c-.181.125-.333.28-.469.45l-.123-.739a.139.139 0 0 0-.136-.117h-.881a.139.139 0 0 0-.139.139v6.851a.139.139 0 0 0 .139.139h1.092a.139.139 0 0 0 .138-.139v-3.588c0-.798.159-1.39.457-1.785c.291-.385.799-.59 1.57-.59c.542 0 .917.135 1.155.383a.139.139 0 0 0 .002 0c.243.25.373.637.373 1.186v4.394a.139.139 0 0 0 .14.139h1.077a.139.139 0 0 0 .138-.139v-4.463c0-.902-.225-1.585-.7-2.015c-.472-.43-1.157-.637-2.032-.637zm15.529.014c-.706 0-1.325.143-1.848.435a2.918 2.918 0 0 0-1.199 1.266c-.28.549-.416 1.208-.416 1.974c0 .576.08 1.096.244 1.555c.168.457.404.849.707 1.168c.307.318.67.563 1.086.733a.139.139 0 0 0 .002 0c.42.165.88.248 1.377.248c.53 0 1.012-.083 1.438-.248a3.03 3.03 0 0 0 1.1-.733c.303-.32.536-.712.694-1.17c.16-.459.237-.977.237-1.552c0-.764-.141-1.422-.43-1.971a2.994 2.994 0 0 0-1.203-1.27c-.514-.292-1.113-.435-1.79-.435zm-30.326.111a.139.139 0 0 0-.125.139v7.959c0 .396-.09.636-.229.756c-.155.134-.357.205-.63.205a2.5 2.5 0 0 1-.45-.036a.139.139 0 0 0-.004-.001a2.667 2.667 0 0 1-.392-.088a.139.139 0 0 0-.18.132v.844a.139.139 0 0 0 .094.131c.13.045.282.081.453.111c.178.036.38.053.61.053c.462 0 .854-.08 1.17-.254c.312-.171.55-.425.702-.75v-.002c.151-.318.223-.694.223-1.127V31.43a.139.139 0 0 0-.139-.139h-1.09a.139.139 0 0 0-.013 0zm22.3.781c.499 0 .852.12 1.087.348a.139.139 0 0 0 .002.002c.233.222.357.56.357 1.049c0 .454-.12.774-.351.994c-.23.218-.582.336-1.08.336c-.481 0-.829-.117-1.069-.338c-.24-.221-.363-.533-.363-.973c0-.484.124-.827.36-1.058c.24-.237.583-.36 1.058-.36zm-27.944.235c.774 0 1.267.217 1.539.636c.285.434.437 1.077.437 1.932v.187c0 .803-.158 1.39-.45 1.772c-.287.374-.78.57-1.526.57c-.643 0-1.092-.207-1.398-.629c-.305-.425-.467-1.045-.467-1.869c0-.828.165-1.465.476-1.922a.139.139 0 0 0 0-.002c.309-.456.753-.675 1.389-.675zm35.943.025c.488 0 .873.103 1.164.3c.295.201.513.482.658.86a.139.139 0 0 0 0 .002c.146.376.22.829.22 1.361c0 .538-.076.999-.222 1.383c-.144.382-.362.669-.662.873a.139.139 0 0 0-.002 0c-.292.202-.67.307-1.148.307c-.483 0-.865-.105-1.156-.307c-.296-.204-.514-.49-.659-.873c-.145-.384-.22-.845-.22-1.383c0-.813.168-1.433.49-1.873l.002-.001c.322-.433.816-.649 1.535-.649zm-22.557 2.59v.486c0 .647-.188 1.104-.56 1.412c-.38.315-.868.475-1.483.475c-.39 0-.688-.087-.908-.252c-.213-.16-.319-.396-.319-.758c0-.412.155-.705.49-.93c.327-.218.941-.361 1.827-.394l.953-.04zm13.988 3.226h1.248c.361 0 .663.025.904.073a.139.139 0 0 0 .004 0c.234.042.394.124.5.234c.1.109.16.277.16.53a.931.931 0 0 1-.258.667a.139.139 0 0 0-.001.004c-.17.19-.44.344-.817.451a.139.139 0 0 0 0 .002c-.371.112-.853.168-1.44.168c-.593 0-1.037-.097-1.333-.273a.139.139 0 0 0 0-.002c-.295-.172-.424-.393-.424-.723c0-.257.057-.462.166-.623c.115-.163.274-.285.494-.373c.22-.088.486-.135.797-.135zm27 3.471v4.291H61.55v-.348H40.186v.348H21.823a23.605 23.605 0 0 0-3.773-.377H6.25v5.412h.029v12.707h-.03v1.284H.5v.416h5.75v3.351h.03v15.855h6.127v-.42h13.127v8.54h.418v-8.54h2.435c.807.937 1.863 1.998 3.26 2.88l.203.126l4.862-2.562l3.894-.024H61.55v-.42h2.799v3.045h.416v-3.045h6.594c2.328.509 4.75.71 6.394.647c1.18 0 2.982-.153 4.907-.647h1.482v.069h.11l.099.097l.098-.097h.109v-.069h18.674v4.154h.418v-4.154h2.103v.42h6.127v-.42h10.617a.07.07 0 0 0 .07-.07V65.35h4.934v-.416h-4.933V50.89h.322v-5.303h-11.01v-.023h-6.127v.023H84.586c-1.176-.284-2.358-.466-3.52-.476c-.099-.001-.198 0-.296.002c-1.267.02-3.744.028-6.221.796h-9.785v-4.29h-.416zm-41.875 4.43h3.06v1.01c-.94-.438-1.97-.767-3.06-1.01zm3.478 0h14.234v4.484L34.17 56.54h-1.86v-1.55h-.138v3.238h.138v-1.55h1.721l-2.935 2.932c.16-.694.254-1.428.254-2.21v-.764c0-3.888-1.481-6.675-3.899-8.453a11.015 11.015 0 0 0-1.5-.906V46.05zm35.6 0h2.797v5.463a1.4 1.4 0 0 0-.843 2.324l-6.579 3.738l-6.884-6.662h11.51V46.05zm3.213 0h9.346c-.338.118-.677.248-1.01.398c-2.907 1.316-5.463 4.042-5.463 9.246c0 1.878.539 3.537 1.412 4.996l-.76.735h-3.525v-7.152c.288-.043.568-.154.79-.375a1.41 1.41 0 0 0 0-1.993a1.4 1.4 0 0 0-.79-.392v-5.463zm13.77 0h3.97c.466.058.94.154 1.413.256l-3.398 3.287c-1.283-.05-3.006.131-4.524.931c-1.642.866-2.996 2.51-2.996 5.17v.014l.002.012c.02.33.083.66.166.986l-3.523 3.41a8.798 8.798 0 0 1-1.174-4.422c0-4.939 2.282-7.27 4.975-8.488c1.71-.774 3.552-1.042 5.09-1.156zm5.547.287l.06.012v3.861c-1.149-.293-2.314-.542-3.296-.613c-.04-.003-.09 0-.131-.002l3.367-3.258zm-76.898.031h10.85c2.866.065 5.444.587 7.502 1.631v7.133c-.453-1.96-1.754-3.222-3.154-3.947c-1.733-.898-3.577-1.073-4.338-1.073h-6.469v.656l-4.39-4.4zm33.836.028h3.313L41.019 49.7v-3.306zm3.51 0h.107V64.56l-.66.375H41.02v-2.678h.002V50.08h-.002v-.182l3.51-3.504zm.525 0h.121l3.81 3.685H45.48v12.178h3.207l-3.633 2.065V46.395zm.319 0h15.346v3.685H49.182l-3.809-3.685zm61.215.002h4.459v.023h10.914l-3.631 3.639h-7.283v7.298l-4.46 4.47v-11.77h-2.937V46.42h2.938v-.024zm-22.03.023h.134l4.076 4.068l-.364 1.067c-.887-.352-2.33-.837-3.845-1.244V46.42zm.33 0h18.345v3.639H88.915l-.096.283l-3.93-3.922zm-77.804.045l4.49 4.5v13.52h5.057c2.126 0 4.362-.312 6.113-1.366a6.37 6.37 0 0 0 .568-.391l2.203 2.207H7.083v-.45h.032V50.112h-.032v-3.647zm114.97.055v3.539h-3.531l3.53-3.54zm-96.105 1.693c.351.198.69.407 1.006.639c2.218 1.631 3.56 4.103 3.56 7.783v.763a8.606 8.606 0 0 1-.719 3.504l-3.847 3.844V48.213zm53.914 2.201a8.7 8.7 0 0 1 .918.012c.942.068 2.156.34 3.357.654v12.502a30.889 30.889 0 0 0-2.008-.873h-.002a35.947 35.947 0 0 1-2.857-1.242v-3.443a2.56 2.56 0 0 0 0-5.117v-.005h-.139v.004a2.56 2.56 0 0 0 0 5.117v3.374c-.265-.133-.53-.264-.798-.41c-1.495-.814-2.973-1.854-3.711-2.944a5.455 5.455 0 0 1-.725-1.856l5.965-5.773zm-.213.016l-5.775 5.588c-.017-.113-.038-.225-.045-.336c.004-2.38 1.114-3.663 2.55-4.42c1.03-.543 2.235-.773 3.27-.832zm-39.467.3v.182h.002v10.512h-.002v3.512H27.716c.404-.336.789-.698 1.144-1.09a9.441 9.441 0 0 0 2.168-3.974l3.198-3.194h4.646v1.549h.139v-3.238h-.139v1.55h-4.508l5.819-5.808zm49.324.16h13.72v13.845L89.47 50.999l.037-.108zm14.139 0h2.103v11.772l-2.103 2.107V50.89zm8.23 0h5.62l-2.915 2.92v-1.615h1.55v-.138h-3.24v.138h1.552v1.754l-2.567 2.573V50.89zm5.817 0h4.732v14.046h-7.844V54.008l3.112-3.117zm-71.383.022h3.53l6.958 6.735l-6.646 3.777H46.31V50.912zm-33.906.033h5.635c.62 0 2.403.175 3.955.979c1.551.804 2.886 2.158 2.886 4.71v.764c0 2.284-.803 3.71-2.05 4.653l-.887-.889a4.739 4.739 0 0 0 1.965-3.834a4.753 4.753 0 0 0-4.688-4.748v-.01l-.068.002h-.004l-.07.004l-.065.004v4.113l.076-.007a.645.645 0 1 1 .063 1.287c-.021 0-.042 0-.063-.002l-.076-.008v.264l-6.61-6.623v-.659zm77.018.202l13.807 13.785v.003h-16.67a17.84 17.84 0 0 0-2.004-1.144V51.187c1.653.454 3.219.986 3.937 1.293l.414.176l.516-1.51zm-25.076.523v2.46a1.236 1.236 0 0 1-.69-.331a1.27 1.27 0 0 1 0-1.797c.195-.194.438-.29.69-.332zm.416.002c.25.042.495.136.69.33a1.27 1.27 0 0 1 0 1.797a1.24 1.24 0 0 1-.69.332v-2.459zm-52.357.129l6.61 6.623v3.654l.066.002l.07.002h.002c.996 0 1.92-.306 2.684-.83l.876.879c-.131.094-.262.189-.402.273c-1.541.929-3.641 1.248-5.683 1.248h-4.223V51.8zm6.748.91a4.618 4.618 0 0 1 4.617 4.617a4.6 4.6 0 0 1-1.924 3.737l-2.693-2.7v-.254a.785.785 0 1 0 0-1.568v-3.832zm59.98.334v4.84a2.42 2.42 0 0 1 0-4.84zm.139 0a2.42 2.42 0 0 1 0 4.84v-4.84zm-15.662.9c.211.192.47.282.736.323v7.156h-3.444l-2.107-2.04l4.815-5.439zm-.354.19l-4.56 5.154l-1.668-1.615l6.228-3.54zm51.187.014v10.787h-2.566v-8.217l2.566-2.57zm-41.238 2.709a6.44 6.44 0 0 0 .715 1.632l.004.006l.004.008c.882 1.307 2.456 2.37 4.007 3.215c.406.22.807.423 1.198.611v2.606H64.86l2.767-2.678h3.577l-.559-.682a10.487 10.487 0 0 1-.936-1.334l3.497-3.385zm37.838.697v7.38h-4.459v-2.911l4.459-4.47zm-54.141.191l1.701 1.647l-1.797 2.03h-6.375l6.471-3.677zm-37.75.817l2.586 2.591a4.59 4.59 0 0 1-2.586.79v-3.381zm6.379.562v5.633l-2.111-2.115c1.025-.818 1.785-1.977 2.11-3.518zm33.172.365l1.998 1.934h-3.71l1.712-1.934zm10.414 1.325c.128.207.263.41.404.609h-1.033l.629-.61zm-39.488.455a8.941 8.941 0 0 1-1.385 2.017c-.567.626-1.23 1.163-1.931 1.649h-.356l3.672-3.666zm19.336.988h7.103L53.7 64.936h-8.648v-.454l3.914-2.224zm7.289 0h5.309l2.767 2.678H53.885l2.37-2.678zm5.51 0h2.582v2.498l-2.582-2.498zm2.998 0h2.664l-2.664 2.578v-2.578zm14.51.135a37.98 37.98 0 0 0 2.556 1.093a28.22 28.22 0 0 1 2.31 1.03v.42h-4.866v-2.543zm26.479.466v2.077h-2.072l2.072-2.077zm-61.117 1.862v.215h-.38l.38-.215zm39.922.004c.138.073.279.134.416.21h-.416v-.21zm-77.475.627h18.262l-.451.45c-.578.305-1.168.583-1.766.81l-.48.181c.164.253.326.508.49.762l-2.65 2.648l-1.456-2.367l-7.459.021v11.244l-4.459 4.452V67.87h-.03v-2.52zm20.074 0h13.029v1.423h.002v.313l-7.867 4.473l-5.758-5.77c.205-.135.395-.293.594-.44zm13.86 0h2.225l-2.222 1.263v-.673h-.002v-.59zm2.507 0h1.111v9.83l-3.615 4.086V66.776l2.504-1.424zm1.529 0h8.28l-.522.59h-7.332v8.287l-.426.48v-9.357zm8.465 0h10.713l-.61.59H52.994l.522-.59zm11.445 0h14.172v1.664c-.802-.335-1.61-.662-2.315-.985l-.111-.05l-.082-.04H65.57l-.61-.59zm14.31 0h4.868v4.463a9.861 9.861 0 0 0-1.328-.993c-1.106-.697-2.331-1.241-3.54-1.748v-1.722zm5.284 0h1.121a12.722 12.722 0 0 1 2.149 1.66c1.706 1.663 2.902 3.905 2.902 7.191c0 2.085-.572 3.717-1.49 5.006l-1.885 1.889c-.55.41-1.134.773-1.75 1.082c-.343.171-.693.327-1.047.469v-4.336c.981-.93 1.643-2.265 1.643-4.11c0-1.654-.66-2.942-1.643-3.972v-4.88zm2.59 0h15.922l-8.381 8.398h-2.031v-1.549h-.139v3.239h.139v-1.551h1.892l-3.482 3.488a9.965 9.965 0 0 0 .494-3.174c0-3.492-1.313-5.995-3.152-7.787a12.645 12.645 0 0 0-1.262-1.064zm16.502 0h.004l2.1 2.095V84h-2.106l.002-10.11h1.03v1.55h.14v-3.238h-.14v1.549h-1.03v-8.399zm.199 0h1.904v1.9l-1.904-1.9zm2.738 0h4.46v7.185l-4.46-4.451v-2.734zm5.293 0h2.567v10.58l-2.567-2.563v-8.017zm2.705 0h7.844V83.9l-7.844-7.83V65.35zm-49.82.002l.608.587h-.608v-.587zm-39.23.005v.084c-.063.038-.129.073-.193.11l.193-.194zm77.697.026v8.365h-8.347l8.347-8.365zm-38.883.047v.51h-.527l.527-.51zm-37.906.431l5.754 5.768l-2.52 1.432l.038.06a43.722 43.722 0 0 0 4.342 6.098l-2.403.012l-5.7-8.858V66.15c.162-.096.33-.183.49-.286zm-.908.53v3.332l-1.635-2.54c.554-.228 1.099-.5 1.635-.792zm20.78.382h5.759l-5.76 6.51v-6.51zm5.945 0h10.502l-4.004 3.875v-2.818h1.548v-.139h-3.238v.14h1.55v2.95l-8.487 8.215H46.31v-5.504l5.946-6.719zm10.7 0h1.39V84h-2.8v-5.002h-11.22l8.289-8.021v6.924h-1.551v.138h3.238v-.138h-1.549v-7.057l4.203-4.068zm1.805 0h1.469l13.047 12.623c-.529.045-1.05.073-1.537.073h-.002c-3.087.019-6.718-1.293-9.818-2.328l-.55-.184v5.883l.245.111c.946.432 2.038.773 3.166 1.047h-6.02V66.775zm1.67 0H76.44l.031.014c.832.38 1.752.75 2.662 1.135v3.695h-.005a2.562 2.562 0 1 0 2.563 2.563a2.563 2.563 0 0 0-2.419-2.557v-3.642c1.085.462 2.16.954 3.096 1.544c.686.433 1.287.909 1.771 1.454v6.603c-.381.386-.83.701-1.334.953c-.992.496-2.185.73-3.347.842L66.433 66.775zm-26.246.473V79.23l-.215-.002l-7.55-7.566l7.765-4.414zm-16.973.426c.776 1.198 1.545 2.4 2.319 3.6v7.142l-4.973-8.092l2.654-2.65zm83.371.607l4.46 4.452v10.992h-4.46V68.282zm-88.02.389l1.313 2.137l-7.473 7.463v-9.582l6.16-.018zm1.389 2.26l5.578 9.076V84H12.404v-5.533l7.549-7.537zm64.602.58c.51.747.808 1.621.808 2.693c0 1.25-.304 2.176-.808 2.889V71.51zm-52.26.223l7.478 7.496l-3.168-.02l-2.369.012a43.474 43.474 0 0 1-4.369-6.108l2.428-1.38zm46.832.025h.006v4.846h-.006a2.423 2.423 0 1 1 0-4.846zm.144.008a2.42 2.42 0 0 1 0 4.832v-4.832zm-53.322.156c1.75 2.716 3.5 5.43 5.248 8.146l3.586-.017a40.277 40.277 0 0 0 2.983 2.996l.05.047l.047-.053l2.633-2.976h.113l3.65 3.66H40.6l-4.099.025l-.475.25h-6.648c-.737-.799-1.294-1.546-1.668-2.04l-1.76-2.864v-7.174zm85.928 1.644l2.567 2.563v6.977h-1.551v.138h3.238v-.138h-1.549v-6.838L122.327 84h-10.45V73.566zm-17.135.323h8.487v10.11H84.653l.869-.87c.15-.07.304-.129.453-.203c2.123-1.063 4.04-2.743 4.977-5.239l3.79-3.799zm-49.266.549v5.392h3.791l-4.025 3.895h-.191v-8.807l.425-.48zm-.843.953v8.334h-.176l-3.65-3.658l.21.001v-.591l3.616-4.086zm23.57 2.726c2.969 1.002 6.407 2.205 9.54 2.186c.718 0 1.511-.045 2.313-.149l3.08 2.98c-2.097.624-4.15.817-5.396.817h-.016c-2.357.091-6.681-.44-9.521-1.658v-4.176zm15.936.553v4.129c-.283.104-.565.204-.848.291l-3.055-2.955c1.008-.143 2.026-.394 2.942-.852c.34-.17.658-.38.96-.613zm-72.568.63v4.425H7.139l4.432-4.424zm37.896.53h11.246v3.895h-15.27l4.024-3.895zm-12.863.213l3.709.022l-2.504 2.83a40.153 40.153 0 0 1-2.836-2.844l1.63-.008zm-10.654.643l1.072 1.744l.012.015c.278.37.712.938 1.234 1.555H25.95v-3.314zm59.217 2.601l-.612.614v-.366c.205-.077.408-.16.612-.248zm-1.028.399v.224l-.17-.164c.057-.019.114-.04.17-.06zm-.316.113l.209.201h-.885c.225-.064.45-.127.676-.201zm-54.305.34h6.244l-3.867 2.039c-.95-.627-1.724-1.347-2.377-2.04zm25.947 5.373c-.507 0-.945.087-1.31.27a1.866 1.866 0 0 0-.844.863c-.193.385-.284.871-.284 1.46v.352l-1.171.317a.139.139 0 0 0-.102.132v.5a.139.139 0 0 0 .139.139h1.134v5.9a.139.139 0 0 0 .14.14h1.089a.139.139 0 0 0 .139-.14v-5.9h1.654a.139.139 0 0 0 .139-.139v-.812a.139.139 0 0 0-.14-.139h-1.653v-.361c0-.53.1-.9.267-1.115c.173-.222.43-.334.817-.334c.182 0 .36.019.533.058a.139.139 0 0 0 .004.002c.184.037.348.077.492.121a.139.139 0 0 0 .172-.088l.283-.818a.139.139 0 0 0-.088-.178a5.17 5.17 0 0 0-.627-.16a3.98 3.98 0 0 0-.783-.07zm61.094.068a.139.139 0 0 0-.125.139v9.726a.139.139 0 0 0 .139.14h1.084a.139.139 0 0 0 .138-.14v-2.418l.715-.625l2.451 3.13a.139.139 0 0 0 .11.052h1.314a.139.139 0 0 0 .11-.225l-3.032-3.83l2.81-2.838a.139.139 0 0 0-.099-.236h-1.281a.139.139 0 0 0-.098.041l-2.39 2.426a.139.139 0 0 0-.002.002c-.126.132-.279.306-.46.52a.139.139 0 0 0-.001 0l-.182.218l.014-.271a.139.139 0 0 0 0-.002c.013-.244.021-.449.021-.62v-5.05a.139.139 0 0 0-.138-.139h-1.084a.139.139 0 0 0-.014 0zm-29.904 2.621c-.665 0-1.253.153-1.754.46a3.077 3.077 0 0 0-1.156 1.308c-.27.56-.4 1.219-.4 1.973c0 .771.145 1.434.443 1.98a3.01 3.01 0 0 0 1.252 1.244a.139.139 0 0 0 .002 0c.539.279 1.167.416 1.877.416c.492 0 .92-.036 1.287-.11c.369-.072.74-.187 1.111-.345a.139.139 0 0 0 .084-.129v-.912a.139.139 0 0 0-.191-.129c-.37.152-.727.267-1.069.344c-.337.076-.73.115-1.177.115c-.714 0-1.244-.199-1.622-.59c-.352-.364-.545-.895-.58-1.601h4.823a.139.139 0 0 0 .138-.139v-.644c0-.639-.12-1.203-.363-1.688a2.697 2.697 0 0 0-1.058-1.144c-.463-.273-1.014-.407-1.647-.407v-.002zm18.799 0c-.706 0-1.325.145-1.848.438a2.918 2.918 0 0 0-1.199 1.265c-.28.55-.416 1.208-.416 1.975c0 .576.082 1.095.246 1.555c.168.457.402.847.705 1.166a.139.139 0 0 0 .002.002c.307.318.669.563 1.084.732a.139.139 0 0 0 .002 0c.42.165.882.248 1.379.248c.53 0 1.01-.082 1.435-.248c.43-.17.799-.415 1.102-.734c.304-.32.535-.71.693-1.168c.16-.46.239-.978.239-1.553c0-.763-.142-1.422-.43-1.97a2.998 2.998 0 0 0-1.205-1.27c-.514-.293-1.113-.436-1.79-.436v-.002zm-39.098.014a5.24 5.24 0 0 0-1.361.174a6.337 6.337 0 0 0-1.143.416a.139.139 0 0 0-.066.178l.336.789a.139.139 0 0 0 .185.07c.3-.139.617-.259.953-.361c.328-.1.674-.15 1.037-.15c.464 0 .802.11 1.037.32c.225.199.356.57.356 1.14v.285l-1.11.045c-1.177.034-2.066.234-2.67.623c-.602.388-.917.97-.917 1.692c0 .474.102.878.312 1.2a.139.139 0 0 0 0 .003c.212.317.502.557.861.713a.139.139 0 0 0 .002 0c.362.154.77.23 1.223.23c.425 0 .788-.042 1.09-.13a.139.139 0 0 0 .002 0a2.55 2.55 0 0 0 .805-.405a.139.139 0 0 0 .001-.002c.177-.138.34-.319.504-.504l.168.805a.139.139 0 0 0 .135.111h.795a.139.139 0 0 0 .139-.139V94.66c0-.828-.216-1.461-.67-1.861c-.452-.398-1.126-.584-2.004-.584zm-5.162.115a2.4 2.4 0 0 0-.988.2c-.29.131-.548.31-.77.535c-.147.145-.259.317-.377.484l-.09-.967a.139.139 0 0 0-.138-.127h-.907a.139.139 0 0 0-.138.139v6.851a.139.139 0 0 0 .138.14h1.096a.139.139 0 0 0 .139-.14V95.77c0-.34.053-.643.156-.912a.139.139 0 0 0 0-.002c.104-.277.245-.508.424-.698a.139.139 0 0 0 .002-.002c.18-.195.385-.34.62-.441a.139.139 0 0 0 .003 0a1.89 1.89 0 0 1 .765-.156a3.408 3.408 0 0 1 .768.09a.139.139 0 0 0 .17-.116l.139-.963a.139.139 0 0 0-.11-.156a3.663 3.663 0 0 0-.437-.058a4.467 4.467 0 0 0-.465-.026zm13.273 0c-.32 0-.623.043-.908.131a2.551 2.551 0 0 0-.778.39a2.212 2.212 0 0 0-.427.434l-.122-.715a.139.139 0 0 0-.136-.115h-.881a.139.139 0 0 0-.139.139v6.851a.139.139 0 0 0 .139.14h1.09a.139.139 0 0 0 .138-.14V95.82c0-.526.064-.963.184-1.31v-.002c.123-.347.312-.596.574-.766c.26-.168.615-.26 1.074-.26c.32 0 .574.06.766.17a.139.139 0 0 0 .002.002c.197.107.34.263.44.485a.139.139 0 0 0 0 .002c.102.222.158.51.158.867v4.438a.139.139 0 0 0 .138.138h1.084a.139.139 0 0 0 .139-.138v-3.832c0-.727.154-1.257.441-1.606c.284-.345.74-.525 1.41-.525c.47 0 .793.127 1.012.373a.139.139 0 0 0 .002.002c.223.24.346.617.346 1.15v4.438a.139.139 0 0 0 .139.138h1.076a.139.139 0 0 0 .138-.138v-4.489c0-.892-.205-1.566-.644-1.994h-.002c-.435-.428-1.073-.633-1.889-.633c-.508 0-.981.102-1.412.307h-.002a2.32 2.32 0 0 0-.931.814c-.181-.347-.435-.632-.784-.812c-.392-.209-.872-.309-1.435-.309zm39.352 0a2.4 2.4 0 0 0-1.76.735c-.146.145-.257.317-.375.484l-.092-.967a.139.139 0 0 0-.138-.127h-.907a.139.139 0 0 0-.138.139v6.851a.139.139 0 0 0 .138.14h1.098a.139.139 0 0 0 .139-.14V95.77c0-.34.051-.643.154-.912a.139.139 0 0 0 0-.002c.104-.277.247-.508.426-.698a.139.139 0 0 0 0-.002a1.89 1.89 0 0 1 1.389-.598a3.408 3.408 0 0 1 .767.09a.139.139 0 0 0 .172-.115l.138-.963a.139.139 0 0 0-.11-.156a3.627 3.627 0 0 0-.436-.058h-.002a4.43 4.43 0 0 0-.463-.026zm-22.947.125a.139.139 0 0 0-.133.178l1.984 6.852a.139.139 0 0 0 .133.1h1.229a.139.139 0 0 0 .13-.095l1.34-3.966v-.002a8.55 8.55 0 0 0 .166-.514c.048-.17.094-.334.133-.488v-.004a7.43 7.43 0 0 0 .076-.287l.075.287a.139.139 0 0 0 .002.006l.138.474a.139.139 0 0 0 0 .004l.166.502l1.28 3.986a.139.139 0 0 0 .132.096h1.268a.139.139 0 0 0 .133-.1l1.99-6.851a.139.139 0 0 0-.133-.178H99.87a.139.139 0 0 0-.133.102l-1.05 3.783c-.07.259-.14.513-.206.764a.139.139 0 0 0 0 .002c-.06.242-.11.464-.158.668a15.685 15.685 0 0 0-.178-.63v-.001a15.821 15.821 0 0 0-.191-.627v-.002l-1.281-3.963a.139.139 0 0 0-.131-.096h-1.176a.139.139 0 0 0-.133.096l-1.326 3.969a16.63 16.63 0 0 0-.285.973a.139.139 0 0 0 0 .001l-.078.32l-.008-.037a10.87 10.87 0 0 0-.164-.69v-.003a26.794 26.794 0 0 0-.197-.744l-1.04-3.783a.139.139 0 0 0-.132-.102h-1.131zm-4.23.875c.391 0 .7.084.935.24c.239.156.415.37.533.66a.139.139 0 0 0 0 .004a2.6 2.6 0 0 1 .18.881h-3.485c.08-.544.255-.98.545-1.285c.32-.334.738-.5 1.291-.5zm18.786.026c.488 0 .871.103 1.162.3c.296.2.514.482.659.86a.139.139 0 0 0 0 .002c.145.376.22.828.22 1.361c0 .537-.075.998-.22 1.383a1.774 1.774 0 0 1-.664.87a.139.139 0 0 0-.002.003c-.292.202-.67.306-1.149.306c-.483 0-.864-.105-1.156-.306c-.296-.204-.513-.491-.658-.873c-.146-.385-.22-.846-.22-1.383c0-.814.169-1.434.491-1.873v-.002c.322-.432.818-.648 1.537-.648zm-37.752 2.73v.486c0 .648-.188 1.104-.56 1.413c-.38.314-.868.474-1.483.474c-.39 0-.686-.086-.906-.252c-.212-.16-.32-.395-.32-.758c0-.412.155-.705.49-.93c.327-.218.94-.361 1.826-.394l.953-.039z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class h2 extends ht{constructor(e){super(),ut(this,e,null,c2,ct,{})}}function u2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,"fill-rule":!0,d:!0,"clip-rule":!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"fill-rule","evenodd"),k(t,"d","M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958c-1.032-.047-2.08.061-3.109.192c-1.243.158-2.471.438-3.711.623c-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064c1.159-2.348 2.151-4.781 3.176-7.194c1.696-3.998 3.051-8.12 4.173-12.309c1.075-4.011 1.995-8.066 2.284-12.227c.116-1.662.196-3.331.187-4.995c-.008-1.327-.151-2.656-.284-3.979c-.15-1.516-.608-2.953-1.242-4.336c-.836-1.822-2.132-3.317-3.496-4.737c-1.092-1.137-2.293-2.173-3.484-3.208c-1.698-1.477-3.607-2.656-5.59-3.703a32.18 32.18 0 0 0-7.09-2.75c-1.493-.381-3.02-.664-4.532-.966c-.544-.11-1.089-.337-1.633-.337H85.086c-.37 0-.737.191-1.11.233c-2.452.273-4.875.735-7.228 1.464c-.88.273-1.684.101-2.52.024c-.641-.059-1.271-.231-1.912-.263c-2.442-.122-4.887-.301-7.328-.275c-2.339.024-4.654.409-6.918 1.052c-1.895.538-3.749 1.195-5.447 2.191c-.727.426-1.303.346-2.055.129c-2.527-.729-5.072-1.414-7.639-1.989c-1.6-.358-3.245-.536-4.879-.707a57.214 57.214 0 0 0-4.718-.294c-1.538-.033-3.087-.032-4.618.104a30.16 30.16 0 0 0-7.158 1.513a23.813 23.813 0 0 0-7.086 3.865c-2.167 1.715-3.905 3.809-5.303 6.2c-1.473 2.523-2.483 5.224-3.111 8.061c-.34 1.537-.555 3.117-.788 4.678c-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356c.139 1.089.262 2.187.446 3.268c.291 1.711.636 3.417.988 5.117a324.86 324.86 0 0 0 1.546 7.111c.396 1.72.847 3.43 1.319 5.131c.721 2.598 1.431 5.201 2.246 7.77c.757 2.387 1.624 4.74 2.484 7.093c1.191 3.255 2.617 6.405 4.327 9.424c1.479 2.614 3.169 5.062 5.436 7.076c1.494 1.327 3.157 2.347 5.093 2.857c1.521.4 3.067.448 4.624.129a10.979 10.979 0 0 0 4.824-2.311c.163-.134.342-.236.535.01c.735.931 1.719 1.552 2.748 2.089c2.777 1.448 5.803 1.882 8.877 2.059c.744.043 1.496-.064 2.246-.085c1.461-.04 2.881-.325 4.278-.729c.732-.212 1.447-.481 2.192-.732c.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901c.151 1.627.299 3.255.493 4.877c.135 1.118.275 2.245.538 3.336a38.176 38.176 0 0 0 2.158 6.428a13.81 13.81 0 0 0 3.9 5.185c2.22 1.836 4.822 2.619 7.632 2.764c1.162.061 2.357.004 3.501-.204a49.01 49.01 0 0 0 5.387-1.275c3.591-1.084 6.695-2.956 9.014-5.981c1.32-1.724 2.404-3.589 3.1-5.648c.574-1.701 1.115-3.419 1.545-5.16c.34-1.372.508-2.787.715-4.188c.137-.927.219-1.863.305-2.797c.14-1.517.283-3.033.384-4.553c.07-1.058.067-2.121.109-3.181c.013-.323.065-.644.095-.966c.028-.298.178-.401.482-.396c1.071.016 2.144.044 3.212-.004c1.197-.054 2.405-.105 3.583-.303a56.542 56.542 0 0 0 4.99-1.067c1.943-.508 3.725-1.418 5.44-2.455c1.998-1.207 3.819-2.623 5.297-4.447c1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369c-2.869 3.163-6.468 5.082-10.585 6.027c-1.564.358-3.178.544-4.779.692a32.093 32.093 0 0 1-4.114.097c-1.006-.038-2.004-.268-3.032-.416c-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564c-.146 1.151-.328 2.298-.481 3.449c-.143 1.072-.248 2.149-.407 3.219c-.245 1.64-.479 3.284-.799 4.911c-.384 1.945-.973 3.829-1.934 5.583c-1.172 2.141-2.834 3.772-4.949 4.98c-2.18 1.246-4.563 1.894-6.979 2.436c-1.71.384-3.472.447-5.204.291c-3.004-.272-5.568-1.557-7.506-3.886c-1.85-2.223-3.102-4.771-3.55-7.655a63.102 63.102 0 0 1-.491-4.136a108.067 108.067 0 0 1-.299-4.62a250.203 250.203 0 0 1-.197-5.871c-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2a12.392 12.392 0 0 1-4.798 1.353c-1.318.1-2.653.191-3.965.086c-2.151-.173-4.3-.51-6.226-1.569c-.781-.43-1.596-.953-2.134-1.64c-1.29-1.646-.672-3.726 1.273-4.727c1.344-.693 2.811-.982 4.268-1.319a44.368 44.368 0 0 0 3.761-1.029c1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151c-1.439-.136-2.812-.532-4.125-1.114c-1.124-.497-1.141-.551-1.965.343c-1.376 1.494-2.714 3.023-4.062 4.542c-.992 1.117-1.978 2.241-2.965 3.361c-.978 1.108-1.894 2.279-2.947 3.31c-1.564 1.531-3.449 2.452-5.698 2.348c-1.443-.066-2.764-.572-3.952-1.399c-2.452-1.708-4.104-4.097-5.608-6.606c-1.927-3.215-3.406-6.64-4.672-10.159c-.876-2.432-1.756-4.866-2.521-7.333c-.831-2.681-1.56-5.396-2.277-8.11a157.373 157.373 0 0 1-1.482-6.182a216.117 216.117 0 0 1-1.464-7.079c-.298-1.599-.471-3.221-.712-4.831c-.325-2.17-.385-4.36-.267-6.539c.105-1.963.387-3.921.667-5.871c.388-2.698 1.277-5.244 2.556-7.648c.783-1.473 1.755-2.812 2.879-4.056c1.845-2.042 4.078-3.518 6.562-4.626c1.736-.774 3.57-1.24 5.439-1.604c2.774-.54 5.573-.519 8.373-.461c1.224.025 2.443.248 3.666.369c2.633.262 5.214.816 7.762 1.5c1.857.498 3.676 1.143 5.518 1.703c.185.056.456.051.607-.048c2.496-1.629 5.224-2.704 8.125-3.319c1.101-.233 2.237-.335 3.363-.407c1.369-.087 2.749-.167 4.115-.088c1.642.094 3.276.336 4.908.56c.792.108 1.565.383 2.359.458c.38.036.783-.242 1.185-.335c2.049-.473 4.089-1 6.156-1.374c1.539-.278 3.111-.409 4.676-.499c1.745-.1 3.503-.173 5.247-.089a36.66 36.66 0 0 1 6.555.923c2.677.623 5.245 1.528 7.686 2.784c1.824.938 3.558 2.026 5.119 3.364c1.023.878 2.07 1.745 2.994 2.723c1.14 1.206 2.303 2.413 3.018 3.958c.538 1.165.922 2.371 1.028 3.647c.132 1.586.292 3.178.277 4.766c-.014 1.519-.221 3.037-.368 4.552c-.334 3.454-1.085 6.833-1.997 10.167a116.972 116.972 0 0 1-2.589 8.17c-.879 2.481-1.893 4.917-2.918 7.343a80.07 80.07 0 0 1-2.458 5.303c-1.677 3.286-3.421 6.538-5.438 9.633c-.348.535-.678 1.083-1.018 1.629c.88.594 1.877.803 2.881.911c.955.104 1.929.166 2.883.095c1.527-.113 3.049-.331 4.567-.544c1.504-.21 2.978-.638 4.522-.525c1.542.112 2.645 1.284 2.54 2.729zm-22.013-3.353c-.655-.846-1.323-1.682-1.964-2.538c-1.006-1.344-1.729-2.845-2.455-4.353c-.688-1.429-1.532-2.782-2.257-4.195c-1.265-2.465-2.553-4.922-3.718-7.435c-1.465-3.157-2.62-6.426-2.984-9.923c-.154-1.48-.193-2.958.106-4.424c.479-2.341 1.702-4.172 3.758-5.428c1.907-1.165 4.032-1.541 6.209-1.659c1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457c-1.346-2.512-3.068-4.777-4.986-6.877c-1.421-1.555-2.96-2.998-4.646-4.273c-1.658-1.255-3.405-2.376-5.269-3.293c-2.223-1.093-4.538-1.938-6.967-2.477c-2.334-.518-4.683-.835-7.077-.861c-2.042-.022-4.071.07-6.06.531c-3.002.695-5.748 1.931-8.137 3.933a21.143 21.143 0 0 0-3.517 3.77c-1.196 1.643-2.161 3.417-2.986 5.277c-1.132 2.552-1.909 5.208-2.44 7.938c-.266 1.361-.474 2.734-.686 4.106c-.074.48-.08.971-.123 1.521c.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149c1.416.043 2.771.323 4.03.943c2.415 1.191 3.828 3.216 4.442 5.779c.424 1.769.714 3.573.996 5.372c.221 1.405.447 2.825.473 4.242c.037 2.071-.068 4.146-.181 6.216a17.386 17.386 0 0 1-1.08 5.146c-1.12 2.993-2.368 5.937-3.534 8.913c-.385.983-.681 2.001-1.045 3.082c.562 0 1.018-.004 1.474.002c.178.003.36.008.532.049c1.34.316 2.502.923 3.455 1.954c1.271 1.372 1.938 2.973 1.972 4.826c.019 1.027-.089 2.057-.084 3.084c.021 4.786.057 9.572.097 14.357c.007.782.046 1.565.102 2.346c.117 1.635.235 3.271.395 4.902c.112 1.157.268 2.312.451 3.461c.259 1.628 1 3.077 1.841 4.462c.724 1.191 1.665 2.203 2.905 2.901c2.107 1.186 4.376 1.285 6.663.848c1.545-.295 3.062-.769 4.562-1.258a10.128 10.128 0 0 0 3.937-2.354c1.051-1.019 1.797-2.261 2.3-3.632c.976-2.659 1.28-5.459 1.684-8.237c.151-1.04.282-2.083.42-3.125c.157-1.186.316-2.371.468-3.556c.112-.883.214-1.768.322-2.651c.154-1.268.317-2.535.464-3.804c.113-.981.209-1.966.309-2.949c.129-1.256.268-2.512.379-3.77c.086-.955.051-1.927.22-2.864c.311-1.718 1.123-3.18 2.646-4.125c.637-.395 1.356-.655 2.063-.989l-.12-.186zm-57.597-7.052a17.526 17.526 0 0 1-1.354-5.622c-.128-1.825.089-3.643.276-5.46c.182-1.76.333-3.528.386-5.296c.088-2.906-.108-5.808-.247-8.712c-.084-1.729.117-3.479.271-5.212c.139-1.561.312-3.126.607-4.664c.495-2.581 1.152-5.125 2.086-7.591c.887-2.338 1.906-4.615 3.345-6.665c.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358c-1.729-.179-3.464-.284-5.198-.387c-.532-.032-1.072.04-1.606.091c-1.322.126-2.66.176-3.961.424c-2.214.421-4.338 1.129-6.305 2.282c-1.766 1.035-3.249 2.373-4.491 3.978c-1.372 1.772-2.295 3.776-2.958 5.913c-.783 2.521-1.156 5.115-1.257 7.733c-.088 2.295-.132 4.603.264 6.889c.295 1.702.492 3.422.817 5.117c.443 2.311.918 4.617 1.467 6.904c.785 3.274 1.569 6.553 2.499 9.787c.89 3.099 1.894 6.17 2.982 9.204c.89 2.476 1.919 4.906 3.003 7.304c.706 1.562 1.561 3.065 2.457 4.528c.953 1.553 2.037 3.027 3.508 4.154c1.856 1.423 3.293 1.644 5.179.083c.808-.669 1.491-1.495 2.194-2.282c1.117-1.25 2.195-2.534 3.307-3.788c1.416-1.598 2.85-3.179 4.273-4.769c.301-.336.59-.682.883-1.022l-.484-.425a17.695 17.695 0 0 1-4.095-5.931zm53.688-47.569a61.488 61.488 0 0 1 3.309 4.204c2 2.809 3.598 5.842 4.775 9.087c.521 1.43.937 2.874.751 4.439c-.129 1.096-.118 2.208-.215 3.31c-.081.917-.226 1.829-.345 2.743c-.178 1.378-.436 2.752-.513 4.136c-.073 1.317.003 2.648.086 3.968c.084 1.341.265 2.676.388 4.015c.139 1.518.326 3.036.369 4.557c.035 1.249-.076 2.506-.185 3.753c-.13 1.502-.511 2.956-1.079 4.351c-.399.982-.876 1.934-1.327 2.917l.181.192l.275.213l.277-.496a93.621 93.621 0 0 0 6.222-11.493a186.333 186.333 0 0 0 3.287-7.766c1.624-4.064 2.909-8.242 3.903-12.503c.446-1.913.787-3.855 1.09-5.797c.236-1.518.433-3.054.477-4.586c.047-1.625-.043-3.263-.193-4.884c-.112-1.224-.414-2.456-1.181-3.451c-1.233-1.602-2.564-3.134-4.201-4.346c-1.378-1.021-2.751-2.068-4.23-2.927c-2.345-1.36-4.883-2.266-7.535-2.883c-2.588-.603-5.21-.863-7.849-.918c-1.556-.033-3.119.134-4.672.28c-1.407.132-2.805.357-4.222.543c1.52.855 3.019 1.615 4.433 2.511c2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959c1.028-2.394 1.59-4.916 1.777-7.506c.093-1.277.067-2.57.004-3.851a44.628 44.628 0 0 0-.392-4.259c-.266-1.801-.569-3.603-.995-5.371c-.462-1.913-1.627-3.245-3.623-3.736c-1.216-.299-2.424-.287-3.653-.093c-3.002.473-5.75 1.579-8.31 3.199c-.515.326-.798.589-.709 1.328c.188 1.565.229 3.155.222 4.735c-.01 2.236-.105 4.472-.19 6.707c-.028.728-.133 1.452-.211 2.177c-.12 1.11-.351 2.219-.344 3.327c.007 1.142.124 2.311.401 3.417c.88 3.507 2.744 6.377 5.799 8.402c1.879 1.245 3.958 1.873 6.24 1.992c.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867c.227-.08.461-.165.697-.188c.324-.032.654-.008.982-.008c1.182.006 2.319.171 3.295.923c.626.482.794 1.122.389 1.779c-.575.932-1.452 1.4-2.529 1.49c-1.697.141-2.888-.65-3.594-2.129zm47.04-.308c.136-1.124.245-2.251.384-3.375c.056-.452-.182-.574-.561-.585c-1.192-.033-2.384-.075-3.576-.097c-1.344-.024-2.652.192-3.896.703c-1.38.568-2.431 1.478-2.86 2.98a9.042 9.042 0 0 0-.293 3.41a20.11 20.11 0 0 0 1.193 5.176c.834 2.221 1.707 4.441 2.75 6.569c1.413 2.881 3.012 5.67 4.513 8.507c.401.757.738 1.547 1.156 2.431a13.783 13.783 0 0 0 1.351-5.622c.041-1.61-.088-3.227-.182-4.838c-.059-.986-.198-1.966-.294-2.95c-.134-1.371-.337-2.741-.368-4.115c-.031-1.397.068-2.802.188-4.197c.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116c-1.145.188-2.148-.235-2.894-1.148c-.531-.65-.328-1.42.468-1.859c.914-.506 1.919-.634 3.104-.711c.322.059.807.108 1.268.24c.669.189.916.692.672 1.362zm-35.422 37.66c-.655-.535-1.521-.566-2.144.021c-.773.73-1.453 1.565-2.133 2.388c-.785.951-1.521 1.94-2.534 2.677c-1.474 1.071-3.192 1.515-4.919 1.935c-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56c2.1.665 4.236.996 6.455.808c1.602-.136 3.128-.485 4.574-1.171c1.99-.943 3.521-2.437 4.823-4.175c.218-.29.317-.719.343-1.093c.089-1.321-.582-2.303-1.55-3.093zm51.751.526c-1.69.181-3.382.373-5.077.47c-.818.047-1.648-.109-2.474-.176c-1.385-.112-2.737-.42-3.908-1.16c-.678-.427-1.241-.475-1.961-.233c-1.028.346-1.867.872-2.115 1.986c-.169.753-.23 1.533-.298 2.304c-.013.136.157.386.287.42c.793.209 1.59.456 2.401.529c.996.09 2.01.061 3.013.011c1.083-.054 2.173-.124 3.24-.304c2.515-.422 4.948-1.11 7.109-2.536c.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z"),k(t,"clip-rule","evenodd"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class d2 extends ht{constructor(e){super(),ut(this,e,null,u2,ct,{})}}function f2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 0 1 2.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.677 9.677 0 0 1-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.779 3.777 3.779 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-4.088-9.905-.311-13.683c.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111c-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333L3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 128 128")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class p2 extends ht{constructor(e){super(),ut(this,e,null,f2,ct,{})}}function m2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938a3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757a8.227 8.227 0 0 0 2.787 2.001a8.947 8.947 0 0 0 3.66.76a8.964 8.964 0 0 0 3.657-.772a8.285 8.285 0 0 0 2.785-2.01a7.428 7.428 0 0 0 1.592-2.762a6.964 6.964 0 0 0 .25-3.074a7.123 7.123 0 0 0-1.016-2.779a7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622a4.282 4.282 0 0 1 .282-3.519a4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706a4.236 4.236 0 0 1-.239 1.811a4.54 4.54 0 0 1-1.035 1.626"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 24 24")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class g2 extends ht{constructor(e){super(),ut(this,e,null,m2,ct,{})}}const v2=[{name:"HTML 5",icon:$3},{name:"CSS 3",icon:X3},{name:"Sass (Scss)",icon:Y3},{name:"JavaScript",icon:Z3},{name:"Svelte / SvelteKit",icon:Q3},{name:"Vue",icon:n2},{name:"Three.js",icon:s2},{name:"Python",icon:a2},{name:"Django",icon:l2},{name:"Django REST Framework",icon:h2},{name:"PostgreSQL",icon:d2},{name:"Git",icon:p2},{name:"Blender",icon:g2}];function _2(r,e,t){const n=r.slice();return n[0]=e[t],n}function x2(r,e){let t,n,i,s,a,o;var l=e[0].icon;function c(h,u){return{}}return l&&(n=Eo(l,c())),{key:r,first:null,c(){t=Je("div"),n&&Xt(n.$$.fragment),i=mt(),this.h()},l(h){t=Qe(h,"DIV",{});var u=Me(t);n&&Qt(n.$$.fragment,u),i=gt(u),u.forEach(re),this.h()},h(){this.first=t},m(h,u){qe(h,t,u),n&&qt(n,t,null),_e(t,i),s=!0,a||(o=Jh(G3.call(null,t,{content:e[0].name,animation:"scale"})),a=!0)},p(h,u){if(e=h,l!==(l=e[0].icon)){if(n){eu();const f=n;zt(f.$$.fragment,1,0,()=>{Yt(f,1)}),tu()}l?(n=Eo(l,c()),Xt(n.$$.fragment),Ft(n.$$.fragment,1),qt(n,t,i)):n=null}},i(h){s||(n&&Ft(n.$$.fragment,h),s=!0)},o(h){n&&zt(n.$$.fragment,h),s=!1},d(h){h&&re(t),n&&Yt(n),a=!1,o()}}}function y2(r){let e,t,n="3D SCENE PLACEHOLDER",i,s,a,o="Technologies I use the most",l,c,h=[],u=new Map,f,p=ru(v2);const g=_=>_[0].name;for(let _=0;_<p.length;_+=1){let m=_2(r,p,_),d=g(m);u.set(d,h[_]=x2(d,m))}return{c(){e=Je("section"),t=Je("div"),t.textContent=n,i=mt(),s=Je("div"),a=Je("h2"),a.textContent=o,l=mt(),c=Je("div");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){e=Qe(_,"SECTION",{id:!0,class:!0});var m=Me(e);t=Qe(m,"DIV",{class:!0,"data-svelte-h":!0}),Kt(t)!=="svelte-qd41xj"&&(t.textContent=n),i=gt(m),s=Qe(m,"DIV",{class:!0});var d=Me(s);a=Qe(d,"H2",{"data-svelte-h":!0}),Kt(a)!=="svelte-kt7pe6"&&(a.textContent=o),l=gt(d),c=Qe(d,"DIV",{class:!0});var y=Me(c);for(let x=0;x<h.length;x+=1)h[x].l(y);y.forEach(re),d.forEach(re),m.forEach(re),this.h()},h(){k(t,"class","scene svelte-lclmvw"),k(c,"class","technologies svelte-lclmvw"),k(s,"class","content svelte-lclmvw"),k(e,"id","knowledge"),k(e,"class","home-section primary-alt svelte-lclmvw")},m(_,m){qe(_,e,m),_e(e,t),_e(e,i),_e(e,s),_e(s,a),_e(s,l),_e(s,c);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(c,null);f=!0},p:pe,i(_){if(!f){for(let m=0;m<p.length;m+=1)Ft(h[m]);f=!0}},o(_){for(let m=0;m<h.length;m+=1)zt(h[m]);f=!1},d(_){_&&re(e);for(let m=0;m<h.length;m+=1)h[m].d()}}}class M2 extends ht{constructor(e){super(),ut(this,e,null,y2,ct,{})}}function b2(r){let e,t="<h2>Experience</h2>";return{c(){e=Je("section"),e.innerHTML=t,this.h()},l(n){e=Qe(n,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),Kt(e)!=="svelte-i9fw9h"&&(e.innerHTML=t),this.h()},h(){k(e,"id","experience"),k(e,"class","home-section primary")},m(n,i){qe(n,e,i)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class S2 extends ht{constructor(e){super(),ut(this,e,null,b2,ct,{})}}function w2(r){let e,t="<h2>Contact</h2>";return{c(){e=Je("section"),e.innerHTML=t,this.h()},l(n){e=Qe(n,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),Kt(e)!=="svelte-1toqk7b"&&(e.innerHTML=t),this.h()},h(){k(e,"id","contact"),k(e,"class","home-section primary-alt")},m(n,i){qe(n,e,i)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class A2 extends ht{constructor(e){super(),ut(this,e,null,w2,ct,{})}}function E2(r){let e,t,n=[{xmlns:"http://www.w3.org/2000/svg"},{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"},r[0]],i={};for(let s=0;s<n.length;s+=1)i=Ki(i,n[s]);return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(s){e=Ue(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var a=Me(e);t=Ue(a,"path",{fill:!0,d:!0}),Me(t).forEach(re),a.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"),Rr(e,i)},m(s,a){qe(s,e,a),_e(e,t)},p(s,[a]){Rr(e,i=Nc(n,[{xmlns:"http://www.w3.org/2000/svg"},{width:"1em"},{height:"1em"},{viewBox:"0 0 24 24"},a&1&&s[0]]))},i:pe,o:pe,d(s){s&&re(e)}}}function T2(r,e,t){return r.$$set=n=>{t(0,e=Ki(Ki({},e),Lr(n)))},e=Lr(e),[e]}class C2 extends ht{constructor(e){super(),ut(this,e,T2,E2,ct,{})}}function L2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 24 24")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class R2 extends ht{constructor(e){super(),ut(this,e,null,L2,ct,{})}}function P2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M13 8.58c.78 0 1.44.61 1.44 1.42s-.66 1.44-1.44 1.44s-1.42-.66-1.42-1.44s.61-1.42 1.42-1.42M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m3 7c0-.16 0-.25-.06-.39l.89-.66c.05-.04.09-.18.05-.28l-.8-1.36c-.05-.09-.19-.14-.28-.09l-.99.42c-.18-.19-.42-.33-.65-.42L14 6.19c-.03-.14-.08-.19-.22-.19h-1.59c-.1 0-.19.05-.19.19l-.14 1.03c-.23.09-.47.23-.66.42l-1.03-.42c-.09-.05-.17 0-.23.09l-.8 1.36c-.05.14-.05.24.05.28l.84.66c0 .14-.03.28-.03.39c0 .13.03.27.03.41l-.84.65c-.1.05-.1.14-.05.24l.8 1.4c.06.1.14.1.23.1l.99-.43c.23.19.42.29.7.38l.14 1.08c0 .09.09.17.19.17h1.59c.14 0 .19-.08.22-.17l.16-1.08c.23-.09.47-.19.65-.37l.99.42c.09 0 .23 0 .28-.1l.8-1.4c.04-.1 0-.19-.05-.24l-.83-.65V10Z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 24 24")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class D2 extends ht{constructor(e){super(),ut(this,e,null,P2,ct,{})}}function I2(r){let e,t;return{c(){e=Ie("svg"),t=Ie("path"),this.h()},l(n){e=Ue(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var i=Me(e);t=Ue(i,"path",{fill:!0,d:!0}),Me(t).forEach(re),i.forEach(re),this.h()},h(){k(t,"fill","currentColor"),k(t,"d","M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2h4Z"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 24 24")},m(n,i){qe(n,e,i),_e(e,t)},p:pe,i:pe,o:pe,d(n){n&&re(e)}}}class U2 extends ht{constructor(e){super(),ut(this,e,null,I2,ct,{})}}function N2(r){let e,t,n,i;return{c(){e=Ie("svg"),t=Ie("g"),n=Ie("path"),i=Ie("path"),this.h()},l(s){e=Ue(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var a=Me(e);t=Ue(a,"g",{fill:!0});var o=Me(t);n=Ue(o,"path",{d:!0}),Me(n).forEach(re),i=Ue(o,"path",{d:!0}),Me(i).forEach(re),o.forEach(re),a.forEach(re),this.h()},h(){k(n,"d","M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"),k(i,"d","M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"),k(t,"fill","currentColor"),k(e,"xmlns","http://www.w3.org/2000/svg"),k(e,"width","32"),k(e,"height","32"),k(e,"viewBox","0 0 24 24")},m(s,a){qe(s,e,a),_e(e,t),_e(t,n),_e(t,i)},p:pe,i:pe,o:pe,d(s){s&&re(e)}}}class O2 extends ht{constructor(e){super(),ut(this,e,null,N2,ct,{})}}const{document:Ca,window:Us}=su;function F2(r){let e=!1,t=()=>{e=!1},n,i,s,a,o,l,c,h,u,f,p,g,_,m,d,y,x,v,S,E,L,R,M,A,F,j="Dimitri Delbrouck",D,U,z="Frontend experience developer",te,J,W,Q,ne,ge,ce,V,Y,oe,le,B,we;return Ao(r[4]),Ao(r[5]),h=new C2({}),p=new R2({}),m=new D2({}),x=new U2({}),E=new O2({}),M=new ov({}),J=new cv({}),Q=new fv({}),ge=new M2({}),V=new S2({}),oe=new A2({}),{c(){i=Je("meta"),s=mt(),a=Je("div"),o=Je("div"),l=mt(),c=Je("button"),Xt(h.$$.fragment),u=mt(),f=Je("button"),Xt(p.$$.fragment),g=mt(),_=Je("button"),Xt(m.$$.fragment),d=mt(),y=Je("button"),Xt(x.$$.fragment),v=mt(),S=Je("button"),Xt(E.$$.fragment),L=mt(),R=Je("section"),Xt(M.$$.fragment),A=mt(),F=Je("h1"),F.textContent=j,D=mt(),U=Je("h2"),U.textContent=z,te=mt(),Xt(J.$$.fragment),W=mt(),Xt(Q.$$.fragment),ne=mt(),Xt(ge.$$.fragment),ce=mt(),Xt(V.$$.fragment),Y=mt(),Xt(oe.$$.fragment),this.h()},l(H){const ee=nu("svelte-ft27hp",Ca.head);i=Qe(ee,"META",{name:!0,content:!0}),ee.forEach(re),s=gt(H),a=Qe(H,"DIV",{id:!0,class:!0});var me=Me(a);o=Qe(me,"DIV",{class:!0,style:!0}),Me(o).forEach(re),l=gt(me),c=Qe(me,"BUTTON",{class:!0});var Be=Me(c);Qt(h.$$.fragment,Be),Be.forEach(re),u=gt(me),f=Qe(me,"BUTTON",{class:!0});var ye=Me(f);Qt(p.$$.fragment,ye),ye.forEach(re),g=gt(me),_=Qe(me,"BUTTON",{class:!0});var Pe=Me(_);Qt(m.$$.fragment,Pe),Pe.forEach(re),d=gt(me),y=Qe(me,"BUTTON",{class:!0});var at=Me(y);Qt(x.$$.fragment,at),at.forEach(re),v=gt(me),S=Qe(me,"BUTTON",{class:!0});var ot=Me(S);Qt(E.$$.fragment,ot),ot.forEach(re),me.forEach(re),L=gt(H),R=Qe(H,"SECTION",{class:!0});var Xe=Me(R);Qt(M.$$.fragment,Xe),A=gt(Xe),F=Qe(Xe,"H1",{class:!0,"data-svelte-h":!0}),Kt(F)!=="svelte-1d1tan9"&&(F.textContent=j),D=gt(Xe),U=Qe(Xe,"H2",{class:!0,"data-svelte-h":!0}),Kt(U)!=="svelte-1cwi7f4"&&(U.textContent=z),te=gt(Xe),Qt(J.$$.fragment,Xe),Xe.forEach(re),W=gt(H),Qt(Q.$$.fragment,H),ne=gt(H),Qt(ge.$$.fragment,H),ce=gt(H),Qt(V.$$.fragment,H),Y=gt(H),Qt(oe.$$.fragment,H),this.h()},h(){Ca.title="Dimitri Delbrouck - Frontend experience developer",k(i,"name","description"),k(i,"content","Dimitri Delbrouck - Frontend experience developer"),k(o,"class","slider svelte-m8qwwp"),To(o,"top",r[3]+"%"),k(c,"class","sections-list-item svelte-m8qwwp"),_n(c,"active",r[0]<r[1]-r[2]),k(f,"class","sections-list-item svelte-m8qwwp"),_n(f,"active",r[0]>=r[1]-r[2]&&r[0]<r[1]*2-r[2]),k(_,"class","sections-list-item svelte-m8qwwp"),_n(_,"active",r[0]>=r[1]*2-r[2]&&r[0]<r[1]*3-r[2]),k(y,"class","sections-list-item svelte-m8qwwp"),_n(y,"active",r[0]>=r[1]*3-r[2]&&r[0]<r[1]*4-r[2]),k(S,"class","sections-list-item svelte-m8qwwp"),_n(S,"active",r[0]>=r[1]*4-r[2]),k(a,"id","sections-list"),k(a,"class","svelte-m8qwwp"),k(F,"class","svelte-m8qwwp"),k(U,"class","svelte-m8qwwp"),k(R,"class","home-section title-wrapper svelte-m8qwwp")},m(H,ee){_e(Ca.head,i),qe(H,s,ee),qe(H,a,ee),_e(a,o),_e(a,l),_e(a,c),qt(h,c,null),_e(a,u),_e(a,f),qt(p,f,null),_e(a,g),_e(a,_),qt(m,_,null),_e(a,d),_e(a,y),qt(x,y,null),_e(a,v),_e(a,S),qt(E,S,null),qe(H,L,ee),qe(H,R,ee),qt(M,R,null),_e(R,A),_e(R,F),_e(R,D),_e(R,U),_e(R,te),qt(J,R,null),qe(H,W,ee),qt(Q,H,ee),qe(H,ne,ee),qt(ge,H,ee),qe(H,ce,ee),qt(V,H,ee),qe(H,Y,ee),qt(oe,H,ee),le=!0,B||(we=[Zn(Us,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),r[4]()}),Zn(Us,"resize",r[5]),Zn(c,"click",r[6]),Zn(f,"click",r[7]),Zn(_,"click",r[8]),Zn(y,"click",r[9]),Zn(S,"click",r[10])],B=!0)},p(H,[ee]){ee&1&&!e&&(e=!0,clearTimeout(n),scrollTo(Us.pageXOffset,H[0]),n=setTimeout(t,100)),(!le||ee&8)&&To(o,"top",H[3]+"%"),(!le||ee&7)&&_n(c,"active",H[0]<H[1]-H[2]),(!le||ee&7)&&_n(f,"active",H[0]>=H[1]-H[2]&&H[0]<H[1]*2-H[2]),(!le||ee&7)&&_n(_,"active",H[0]>=H[1]*2-H[2]&&H[0]<H[1]*3-H[2]),(!le||ee&7)&&_n(y,"active",H[0]>=H[1]*3-H[2]&&H[0]<H[1]*4-H[2]),(!le||ee&7)&&_n(S,"active",H[0]>=H[1]*4-H[2])},i(H){le||(Ft(h.$$.fragment,H),Ft(p.$$.fragment,H),Ft(m.$$.fragment,H),Ft(x.$$.fragment,H),Ft(E.$$.fragment,H),Ft(M.$$.fragment,H),Ft(J.$$.fragment,H),Ft(Q.$$.fragment,H),Ft(ge.$$.fragment,H),Ft(V.$$.fragment,H),Ft(oe.$$.fragment,H),le=!0)},o(H){zt(h.$$.fragment,H),zt(p.$$.fragment,H),zt(m.$$.fragment,H),zt(x.$$.fragment,H),zt(E.$$.fragment,H),zt(M.$$.fragment,H),zt(J.$$.fragment,H),zt(Q.$$.fragment,H),zt(ge.$$.fragment,H),zt(V.$$.fragment,H),zt(oe.$$.fragment,H),le=!1},d(H){H&&(re(s),re(a),re(L),re(R),re(W),re(ne),re(ce),re(Y)),re(i),Yt(h),Yt(p),Yt(m),Yt(x),Yt(E),Yt(M),Yt(J),Yt(Q,H),Yt(ge,H),Yt(V,H),Yt(oe,H),B=!1,Qh(we)}}}function Es(r){if(r==="#top"){window.scrollTo({top:0,behavior:"smooth"});return}document.querySelector(r).scrollIntoView({behavior:"smooth"})}function z2(r,e,t){let n,i,s,a;Uc(async()=>{const{gsap:g}=await wo(()=>import("../chunks/index.e199721a.js"),[],import.meta.url),{ScrollTrigger:_}=await wo(()=>import("../chunks/ScrollTrigger.6c1fce72.js"),[],import.meta.url);g.registerPlugin(_),g.timeline({scrollTrigger:{trigger:".title-wrapper",start:"0%",end:"100%",pin:!0,pinSpacing:!1}}),g.timeline({scrollTrigger:{trigger:"#who-am-i",scrub:!0,start:"-100%",end:"-25%"}}).fromTo("#who-am-i",{opacity:0,filter:"blur(20px)"},{opacity:1,filter:"blur(0px)"})});function o(){t(0,s=Us.pageYOffset)}function l(){t(1,a=Us.innerHeight)}const c=()=>Es("#top"),h=()=>Es("#who-am-i"),u=()=>Es("#knowledge"),f=()=>Es("#experience"),p=()=>Es("#contact");return r.$$.update=()=>{r.$$.dirty&1&&t(3,n=s/document.body.scrollHeight*100),r.$$.dirty&2&&t(2,i=a/2)},[s,a,i,n,o,l,c,h,u,f,p]}class $2 extends ht{constructor(e){super(),ut(this,e,z2,F2,ct,{})}}export{$2 as component};
