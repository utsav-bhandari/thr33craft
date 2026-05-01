(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const Mc=Hl();document.body.appendChild(Mc);function zl(i,e){const t=()=>{const n=window.innerWidth,r=window.innerHeight;i.aspect=n/r,i.updateProjectionMatrix(),e.setSize(n,r)};window.addEventListener("resize",Vl(t,300)),document.body.style.margin="0",document.body.appendChild(e.domElement),t()}function Vl(i,e){let t;return()=>{t!==void 0&&window.clearTimeout(t),t=window.setTimeout(()=>{i()},e)}}function Hl(){const i=document.createElement("div");return i.classList.add("loading-world-message"),i.classList.add("pixel-corners"),i.textContent="Please wait, Loading World...",i}function Pn(i,e){return(i%e+e)%e}function cs(i,e){const t=document.getElementById(i);if(!(t instanceof e))throw new Error(`Missing required DOM element: #${i}`);return t}const Uo="thr33craft.terrain-settings",Hi={seed:12345,noiseScale:.015,surfaceSampleY:0,baseHeight:64,heightVariation:28,topsoilDepth:4,beachBand:3,sandDepth:5,snowStartHeight:80,seaLevel:48,spawnClearance:6};function yc(i){return{...Hi,...i}}function Gl(){if(typeof window>"u")return{...Hi};const i=window.localStorage.getItem(Uo);if(!i)return{...Hi};try{return yc(JSON.parse(i))}catch{return window.localStorage.removeItem(Uo),{...Hi}}}const xt=Gl();function Ec(){return{...Hi}}function Ac(i){const e=yc(i);Object.assign(xt,e),typeof window<"u"&&window.localStorage.setItem(Uo,JSON.stringify(e))}function Wl(){Ac(Ec())}const Xl=[0,xt.baseHeight+xt.heightVariation+xt.spawnClearance,0],Gi=9,La={UP:" ",DOWN:"c",FORWARD:"w",BACKWARD:"s",LEFT:"a",RIGHT:"d",SPRINT:"shift",MENU:"f",INVENTORY:"e",HUD_TOGGLE:"h",REMOVE_HOTBAR_ITEM:"q",BREAK_BLOCK:"mouse-left",PICK_BLOCK:"mouse-middle",PLACE_BLOCK:"mouse-right",ROTATE_BLOCK:"r",HOTBAR_SLOT_1:"1",HOTBAR_SLOT_2:"2",HOTBAR_SLOT_3:"3",HOTBAR_SLOT_4:"4",HOTBAR_SLOT_5:"5",HOTBAR_SLOT_6:"6",HOTBAR_SLOT_7:"7",HOTBAR_SLOT_8:"8",HOTBAR_SLOT_9:"9"},Tc="/",$l={source:"static",staticTextureSheetUrl:`${Tc}/images/block-texture-sheet.png`,showDownloadButton:!1,downloadFileName:"block-texture-sheet.png",columns:16,iconSize:64,chunkSize:20,renderScale:Math.min(window.devicePixelRatio||1,2)},Cc={source:"static",staticTextureAtlasUrl:`${Tc}/images/block-texture-atlas.png`,showDownloadButton:!1,downloadFileName:"block-texture-atlas.png"},ql={playerParams:{speed:10,height:1.85,width:.6},keysPreset:La,inventoryHtmlElm:cs("inventory",HTMLDivElement),menuHtmlElm:cs("menu",HTMLDivElement),inventoryBlockTextureSheetParams:$l,blockTextureAtlasParams:Cc},Zr={padding:1e-4,headClearance:.1,maxDeltaTime:.05},No={maxReach:6,breakRepeatMs:140,placeRepeatMs:140},Yl=128,Kl=16,jl=.5,Zl=1.5;function Ar(){return Yl}function Jl(i,e){return Math.max(1,Math.floor(i/Kl)+e)}function Ql(i){return i*jl}function ed(i){return i*Zl}const kt={WORLD_BOTTOM_Y:0,CHUNK_PADDING:0,CHUNK_LOAD_INTERVAL:10,PLAYER_STARTING_POSITION:Xl,get RENDER_DISTANCE(){return Jl(Ar(),this.CHUNK_PADDING)}},ls={backgroundColor:8433151,fog:{enabled:!0,color:12178170,near:Ql(Ar()),far:ed(Ar())},axesHelper:{enabled:!0,size:128},camera:{fov:70,aspect:1,near:.1,far:Ar(),position:[...kt.PLAYER_STARTING_POSITION],lookAt:[0,1.85,10]},ambientLight:{enabled:!0,color:15658734,intensity:3},renderer:{antialias:!0,pixelRatio:window.devicePixelRatio}},td={keyPreset:La,player:{blockName:"redstone_block",spawnPosition:[...kt.PLAYER_STARTING_POSITION]},actions:{menu:"MENU",inventory:"INVENTORY",hud:"HUD_TOGGLE"}};const Da="182",nd=0,ds=1,id=2,Tr=1,rd=2,Bi=3,In=0,Dt=1,gn=2,kn=0,bi=1,us=2,hs=3,fs=4,od=5,Wn=100,ad=101,sd=102,cd=103,ld=104,dd=200,ud=201,hd=202,fd=203,Fo=204,Oo=205,pd=206,md=207,_d=208,bd=209,gd=210,kd=211,xd=212,vd=213,wd=214,Bo=0,zo=1,Vo=2,ki=3,Ho=4,Go=5,Wo=6,Xo=7,Rc=0,Sd=1,Md=2,sn=0,Pc=1,Lc=2,Dc=3,Ic=4,Uc=5,Nc=6,Fc=7,Oc=300,Kn=301,xi=302,$o=303,qo=304,zr=306,Yo=1e3,Bt=1001,Ko=1002,ut=1003,yd=1004,tr=1005,yt=1006,Jr=1007,$n=1008,Ot=1009,Bc=1010,zc=1011,Wi=1012,Ia=1013,dn=1014,jt=1015,vn=1016,Ua=1017,Na=1018,Xi=1020,Vc=35902,Hc=35899,Gc=1021,Wc=1022,Zt=1023,wn=1026,qn=1027,Fa=1028,Oa=1029,vi=1030,Ba=1031,za=1033,Cr=33776,Rr=33777,Pr=33778,Lr=33779,jo=35840,Zo=35841,Jo=35842,Qo=35843,ea=36196,ta=37492,na=37496,ia=37488,ra=37489,oa=37490,aa=37491,sa=37808,ca=37809,la=37810,da=37811,ua=37812,ha=37813,fa=37814,pa=37815,ma=37816,_a=37817,ba=37818,ga=37819,ka=37820,xa=37821,va=36492,wa=36494,Sa=36495,Ma=36283,ya=36284,Ea=36285,Aa=36286,Ed=3200,Xc=0,Ad=1,Rn="",Tt="srgb",wi="srgb-linear",Nr="linear",Ze="srgb",Qn=7680,ps=519,Td=512,Cd=513,Rd=514,Va=515,Pd=516,Ld=517,Ha=518,Dd=519,ms=35044,_s="300 es",on=2e3,Fr=2001;function $c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $i(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Id(){const i=$i("canvas");return i.style.display="block",i}const bs={};function gs(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ae(...i){const e="THREE."+i.shift();console.warn(e,...i)}function We(...i){const e="THREE."+i.shift();console.error(e,...i)}function qi(...i){const e=i.join(" ");e in bs||(bs[e]=!0,Ae(...i))}function Ud(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,Ta=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function Nd(i,e){return(i%e+e)%e}function Qr(i,e,t){return(1-t)*i+t*e}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*r+e.x,this.y=o*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,a,s){let c=n[r+0],l=n[r+1],d=n[r+2],h=n[r+3],f=o[a+0],m=o[a+1],b=o[a+2],g=o[a+3];if(s<=0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(s>=1){e[t+0]=f,e[t+1]=m,e[t+2]=b,e[t+3]=g;return}if(h!==g||c!==f||l!==m||d!==b){let p=c*f+l*m+d*b+h*g;p<0&&(f=-f,m=-m,b=-b,g=-g,p=-p);let u=1-s;if(p<.9995){const v=Math.acos(p),M=Math.sin(v);u=Math.sin(u*v)/M,s=Math.sin(s*v)/M,c=c*u+f*s,l=l*u+m*s,d=d*u+b*s,h=h*u+g*s}else{c=c*u+f*s,l=l*u+m*s,d=d*u+b*s,h=h*u+g*s;const v=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=v,l*=v,d*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,o,a){const s=n[r],c=n[r+1],l=n[r+2],d=n[r+3],h=o[a],f=o[a+1],m=o[a+2],b=o[a+3];return e[t]=s*b+d*h+c*m-l*f,e[t+1]=c*b+d*f+l*h-s*m,e[t+2]=l*b+d*m+s*f-c*h,e[t+3]=d*b-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,c=Math.sin,l=s(n/2),d=s(r/2),h=s(o/2),f=c(n/2),m=c(r/2),b=c(o/2);switch(a){case"XYZ":this._x=f*d*h+l*m*b,this._y=l*m*h-f*d*b,this._z=l*d*b+f*m*h,this._w=l*d*h-f*m*b;break;case"YXZ":this._x=f*d*h+l*m*b,this._y=l*m*h-f*d*b,this._z=l*d*b-f*m*h,this._w=l*d*h+f*m*b;break;case"ZXY":this._x=f*d*h-l*m*b,this._y=l*m*h+f*d*b,this._z=l*d*b+f*m*h,this._w=l*d*h-f*m*b;break;case"ZYX":this._x=f*d*h-l*m*b,this._y=l*m*h+f*d*b,this._z=l*d*b-f*m*h,this._w=l*d*h+f*m*b;break;case"YZX":this._x=f*d*h+l*m*b,this._y=l*m*h+f*d*b,this._z=l*d*b-f*m*h,this._w=l*d*h-f*m*b;break;case"XZY":this._x=f*d*h-l*m*b,this._y=l*m*h-f*d*b,this._z=l*d*b+f*m*h,this._w=l*d*h+f*m*b;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],a=t[1],s=t[5],c=t[9],l=t[2],d=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-c)*m,this._y=(o-l)*m,this._z=(a-r)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(o-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-r)/m,this._x=(o+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,a=e._w,s=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*s+r*l-o*c,this._y=r*d+a*c+o*s-n*l,this._z=o*d+a*l+n*c-r*s,this._w=a*d-n*s-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,o=e._z,a=e._w,s=this.dot(e);s<0&&(n=-n,r=-r,o=-o,a=-a,s=-s);let c=1-t;if(s<.9995){const l=Math.acos(s),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ks.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ks.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,a=e.y,s=e.z,c=e.w,l=2*(a*r-s*n),d=2*(s*t-o*r),h=2*(o*n-a*t);return this.x=t+c*l+a*h-s*d,this.y=n+c*d+s*l-o*h,this.z=r+c*h+o*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,a=t.x,s=t.y,c=t.z;return this.x=r*c-o*s,this.y=o*a-n*c,this.z=n*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new U,ks=new Mi;class Re{constructor(e,t,n,r,o,a,s,c,l){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,s,c,l)}set(e,t,n,r,o,a,s,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=s,d[3]=t,d[4]=o,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],d=n[4],h=n[7],f=n[2],m=n[5],b=n[8],g=r[0],p=r[3],u=r[6],v=r[1],M=r[4],y=r[7],E=r[2],A=r[5],T=r[8];return o[0]=a*g+s*v+c*E,o[3]=a*p+s*M+c*A,o[6]=a*u+s*y+c*T,o[1]=l*g+d*v+h*E,o[4]=l*p+d*M+h*A,o[7]=l*u+d*y+h*T,o[2]=f*g+m*v+b*E,o[5]=f*p+m*M+b*A,o[8]=f*u+m*y+b*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*s*l-n*o*d+n*s*c+r*o*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=d*a-s*l,f=s*c-d*o,m=l*o-a*c,b=t*h+n*f+r*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/b;return e[0]=h*g,e[1]=(r*l-d*n)*g,e[2]=(s*n-r*a)*g,e[3]=f*g,e[4]=(d*t-r*c)*g,e[5]=(r*o-s*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,a,s){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*a+l*s)+a+e,-r*l,r*c,-r*(-l*a+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new Re,xs=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vs=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===Ze&&(r.r=xn(r.r),r.g=xn(r.g),r.b=xn(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?Nr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Nr,toXYZ:xs,fromXYZ:vs,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:xs,fromXYZ:vs,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const Ve=Fd();function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class Od{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ei===void 0&&(ei=$i("canvas")),ei.width=e.width,ei.height=e.height;const r=ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$i("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=xn(o[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bd=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(no(r[a].image)):o.push(no(r[a]))}else o=no(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let zd=0;const io=new U;class vt extends jn{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Bt,r=Bt,o=yt,a=$n,s=Zt,c=Ot,l=vt.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ji(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=Oc;vt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const c=e.elements,l=c[0],d=c[4],h=c[8],f=c[1],m=c[5],b=c[9],g=c[2],p=c[6],u=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(b-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(b+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(m+1)/2,E=(u+1)/2,A=(d+f)/4,T=(h+g)/4,I=(b+p)/4;return M>y&&M>E?M<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(M),r=A/n,o=T/n):y>E?y<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),n=A/r,o=I/r):E<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),n=T/o,r=I/o),this.set(n,r,o,t),this}let v=Math.sqrt((p-b)*(p-b)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-b)/v,this.y=(h-g)/v,this.z=(f-d)/v,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:n.depth},o=new vt(r);this.textures=[];const a=n.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Vd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qc extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(o,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),ir.subVectors(this.max,Ri),ti.subVectors(e.a,Ri),ni.subVectors(e.b,Ri),ii.subVectors(e.c,Ri),Mn.subVectors(ni,ti),yn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!ro(t,ti,ni,ii,ir)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,ti,ni,ii,ir))?!1:(rr.crossVectors(Mn,yn),t=[rr.x,rr.y,rr.z],ro(t,ti,ni,ii,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fn=[new U,new U,new U,new U,new U,new U,new U,new U],qt=new U,nr=new Zn,ti=new U,ni=new U,ii=new U,Mn=new U,yn=new U,Fn=new U,Ri=new U,ir=new U,rr=new U,On=new U;function ro(i,e,t,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){On.fromArray(i,o);const s=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=e.dot(On),l=t.dot(On),d=n.dot(On);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>s)return!1}return!0}const Gd=new Zn,Pi=new U,oo=new U;class yi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(oo)),this.expandByPoint(Pi.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new U,ao=new U,or=new U,En=new U,so=new U,ar=new U,co=new U;class Yc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ao.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),En.copy(this.origin).sub(ao);const o=e.distanceTo(t)*.5,a=-this.direction.dot(or),s=En.dot(this.direction),c=-En.dot(or),l=En.lengthSq(),d=Math.abs(1-a*a);let h,f,m,b;if(d>0)if(h=a*c-s,f=a*s-c,b=o*d,h>=0)if(f>=-b)if(f<=b){const g=1/d;h*=g,f*=g,m=h*(h+a*f+2*s)+f*(a*h+f+2*c)+l}else f=o,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f=-o,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-b?(h=Math.max(0,-(-a*o+s)),f=h>0?-o:Math.min(Math.max(-o,-c),o),m=-h*h+f*(f+2*c)+l):f<=b?(h=0,f=Math.min(Math.max(-o,-c),o),m=f*(f+2*c)+l):(h=Math.max(0,-(a*o+s)),f=h>0?o:Math.min(Math.max(-o,-c),o),m=-h*h+f*(f+2*c)+l);else f=a>0?-o:o,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ao).addScaledVector(or,f),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=n-a,c=n+a;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,a,s,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(o=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,o){so.subVectors(t,e),ar.subVectors(n,e),co.crossVectors(so,ar);let a=this.direction.dot(co),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=s*this.direction.dot(ar.crossVectors(En,ar));if(c<0)return null;const l=s*this.direction.dot(so.cross(En));if(l<0||c+l>a)return null;const d=-s*En.dot(co);return d<0?null:this.at(d/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,r,o,a,s,c,l,d,h,f,m,b,g,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,s,c,l,d,h,f,m,b,g,p)}set(e,t,n,r,o,a,s,c,l,d,h,f,m,b,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=o,u[5]=a,u[9]=s,u[13]=c,u[2]=l,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=b,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ri.setFromMatrixColumn(e,0).length(),o=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=a*d,m=a*h,b=s*d,g=s*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=m+b*l,t[5]=f-g*l,t[9]=-s*c,t[2]=g-f*l,t[6]=b+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,m=c*h,b=l*d,g=l*h;t[0]=f+g*s,t[4]=b*s-m,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-s,t[2]=m*s-b,t[6]=g+f*s,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,m=c*h,b=l*d,g=l*h;t[0]=f-g*s,t[4]=-a*h,t[8]=b+m*s,t[1]=m+b*s,t[5]=a*d,t[9]=g-f*s,t[2]=-a*l,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,m=a*h,b=s*d,g=s*h;t[0]=c*d,t[4]=b*l-m,t[8]=f*l+g,t[1]=c*h,t[5]=g*l+f,t[9]=m*l-b,t[2]=-l,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,b=s*c,g=s*l;t[0]=c*d,t[4]=g-f*h,t[8]=b*h+m,t[1]=h,t[5]=a*d,t[9]=-s*d,t[2]=-l*d,t[6]=m*h+b,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*c,m=a*l,b=s*c,g=s*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=f*h+g,t[5]=a*d,t[9]=m*h-b,t[2]=b*h-m,t[6]=s*d,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Xd)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),An.crossVectors(n,Nt),An.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),An.crossVectors(n,Nt)),An.normalize(),sr.crossVectors(Nt,An),r[0]=An.x,r[4]=sr.x,r[8]=Nt.x,r[1]=An.y,r[5]=sr.y,r[9]=Nt.y,r[2]=An.z,r[6]=sr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],d=n[1],h=n[5],f=n[9],m=n[13],b=n[2],g=n[6],p=n[10],u=n[14],v=n[3],M=n[7],y=n[11],E=n[15],A=r[0],T=r[4],I=r[8],k=r[12],w=r[1],P=r[5],z=r[9],F=r[13],V=r[2],$=r[6],H=r[10],W=r[14],j=r[3],de=r[7],ae=r[11],ue=r[15];return o[0]=a*A+s*w+c*V+l*j,o[4]=a*T+s*P+c*$+l*de,o[8]=a*I+s*z+c*H+l*ae,o[12]=a*k+s*F+c*W+l*ue,o[1]=d*A+h*w+f*V+m*j,o[5]=d*T+h*P+f*$+m*de,o[9]=d*I+h*z+f*H+m*ae,o[13]=d*k+h*F+f*W+m*ue,o[2]=b*A+g*w+p*V+u*j,o[6]=b*T+g*P+p*$+u*de,o[10]=b*I+g*z+p*H+u*ae,o[14]=b*k+g*F+p*W+u*ue,o[3]=v*A+M*w+y*V+E*j,o[7]=v*T+M*P+y*$+E*de,o[11]=v*I+M*z+y*H+E*ae,o[15]=v*k+M*F+y*W+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],a=e[1],s=e[5],c=e[9],l=e[13],d=e[2],h=e[6],f=e[10],m=e[14],b=e[3],g=e[7],p=e[11],u=e[15],v=c*m-l*f,M=s*m-l*h,y=s*f-c*h,E=a*m-l*d,A=a*f-c*d,T=a*h-s*d;return t*(g*v-p*M+u*y)-n*(b*v-p*E+u*A)+r*(b*M-g*E+u*T)-o*(b*y-g*A+p*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],c=e[6],l=e[7],d=e[8],h=e[9],f=e[10],m=e[11],b=e[12],g=e[13],p=e[14],u=e[15],v=h*p*l-g*f*l+g*c*m-s*p*m-h*c*u+s*f*u,M=b*f*l-d*p*l-b*c*m+a*p*m+d*c*u-a*f*u,y=d*g*l-b*h*l+b*s*m-a*g*m-d*s*u+a*h*u,E=b*h*c-d*g*c-b*s*f+a*g*f+d*s*p-a*h*p,A=t*v+n*M+r*y+o*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(g*f*o-h*p*o-g*r*m+n*p*m+h*r*u-n*f*u)*T,e[2]=(s*p*o-g*c*o+g*r*l-n*p*l-s*r*u+n*c*u)*T,e[3]=(h*c*o-s*f*o-h*r*l+n*f*l+s*r*m-n*c*m)*T,e[4]=M*T,e[5]=(d*p*o-b*f*o+b*r*m-t*p*m-d*r*u+t*f*u)*T,e[6]=(b*c*o-a*p*o-b*r*l+t*p*l+a*r*u-t*c*u)*T,e[7]=(a*f*o-d*c*o+d*r*l-t*f*l-a*r*m+t*c*m)*T,e[8]=y*T,e[9]=(b*h*o-d*g*o-b*n*m+t*g*m+d*n*u-t*h*u)*T,e[10]=(a*g*o-b*s*o+b*n*l-t*g*l-a*n*u+t*s*u)*T,e[11]=(d*s*o-a*h*o-d*n*l+t*h*l+a*n*m-t*s*m)*T,e[12]=E*T,e[13]=(d*g*r-b*h*r+b*n*f-t*g*f-d*n*p+t*h*p)*T,e[14]=(b*s*r-a*g*r-b*n*c+t*g*c+a*n*p-t*s*p)*T,e[15]=(a*h*r-d*s*r+d*n*c-t*h*c-a*n*f+t*s*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,a=e.x,s=e.y,c=e.z,l=o*a,d=o*s;return this.set(l*a+n,l*s-r*c,l*c+r*s,0,l*s+r*c,d*s+n,d*c-r*a,0,l*c-r*s,d*c+r*a,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,a){return this.set(1,n,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,a=t._y,s=t._z,c=t._w,l=o+o,d=a+a,h=s+s,f=o*l,m=o*d,b=o*h,g=a*d,p=a*h,u=s*h,v=c*l,M=c*d,y=c*h,E=n.x,A=n.y,T=n.z;return r[0]=(1-(g+u))*E,r[1]=(m+y)*E,r[2]=(b-M)*E,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(f+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(b+M)*T,r[9]=(p-v)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let o=ri.set(r[0],r[1],r[2]).length();const a=ri.set(r[4],r[5],r[6]).length(),s=ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),Yt.copy(this);const l=1/o,d=1/a,h=1/s;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=d,Yt.elements[5]*=d,Yt.elements[6]*=d,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=o,n.y=a,n.z=s,this}makePerspective(e,t,n,r,o,a,s=on,c=!1){const l=this.elements,d=2*o/(t-e),h=2*o/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let b,g;if(c)b=o/(a-o),g=a*o/(a-o);else if(s===on)b=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Fr)b=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,a,s=on,c=!1){const l=this.elements,d=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let b,g;if(c)b=1/(a-o),g=a/(a-o);else if(s===on)b=-2/(a-o),g=-(a+o)/(a-o);else if(s===Fr)b=-1/(a-o),g=-o/(a-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new U,Yt=new tt,Wd=new U(0,0,0),Xd=new U(1,1,1),An=new U,sr=new U,Nt=new U,ws=new tt,Ss=new Mi;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],c=r[1],l=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Oe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ws.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ws,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ss.setFromEuler(this),this.setFromQuaternion(Ss,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const Ms=new U,oi=new Mi,mn=new tt,cr=new U,Li=new U,qd=new U,Yd=new Mi,ys=new U(1,0,0),Es=new U(0,1,0),As=new U(0,0,1),Ts={type:"added"},Kd={type:"removed"},ai={type:"childadded",child:null},lo={type:"childremoved",child:null};class wt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Qt,n=new Mi,r=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Re}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(ys,e)}rotateY(e){return this.rotateOnAxis(Es,e)}rotateZ(e){return this.rotateOnAxis(As,e)}translateOnAxis(e,t){return Ms.copy(e).applyQuaternion(this.quaternion),this.position.add(Ms.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ys,e)}translateY(e){return this.translateOnAxis(Es,e)}translateZ(e){return this.translateOnAxis(As,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Li,cr,this.up):mn.lookAt(cr,Li,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(mn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ts),ai.child=e,this.dispatchEvent(ai),ai.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ts),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(s=>({...s})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(o(e.materials,this.material[c]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(o(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),b=a(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),b.length>0&&(n.nodes=b)}return n.object=r,n;function a(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new U,_n=new U,uo=new U,bn=new U,si=new U,ci=new U,Cs=new U,ho=new U,fo=new U,po=new U,mo=new lt,_o=new lt,bo=new lt;class $t{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Kt.subVectors(r,t),_n.subVectors(n,t),uo.subVectors(e,t);const a=Kt.dot(Kt),s=Kt.dot(_n),c=Kt.dot(uo),l=_n.dot(_n),d=_n.dot(uo),h=a*l-s*s;if(h===0)return o.set(0,0,0),null;const f=1/h,m=(l*c-s*d)*f,b=(a*d-s*c)*f;return o.set(1-m-b,b,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,r,o,a,s,c){return this.getBarycoord(e,t,n,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(s,bn.z),c)}static getInterpolatedAttribute(e,t,n,r,o,a){return mo.setScalar(0),_o.setScalar(0),bo.setScalar(0),mo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mo,o.x),a.addScaledVector(_o,o.y),a.addScaledVector(bo,o.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),_n.subVectors(e,t),Kt.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Kt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let a,s;si.subVectors(r,n),ci.subVectors(o,n),ho.subVectors(e,n);const c=si.dot(ho),l=ci.dot(ho);if(c<=0&&l<=0)return t.copy(n);fo.subVectors(e,r);const d=si.dot(fo),h=ci.dot(fo);if(d>=0&&h<=d)return t.copy(r);const f=c*h-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(si,a);po.subVectors(e,o);const m=si.dot(po),b=ci.dot(po);if(b>=0&&m<=b)return t.copy(o);const g=m*l-c*b;if(g<=0&&l>=0&&b<=0)return s=l/(l-b),t.copy(n).addScaledVector(ci,s);const p=d*b-m*h;if(p<=0&&h-d>=0&&m-b>=0)return Cs.subVectors(o,r),s=(h-d)/(h-d+(m-b)),t.copy(r).addScaledVector(Cs,s);const u=1/(p+g+f);return a=g*u,s=f*u,t.copy(n).addScaledVector(si,a).addScaledVector(ci,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=Nd(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=go(a,o,e+1/3),this.g=go(a,o,e),this.b=go(a,o,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function n(o){o!==void 0&&parseFloat(o)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ve.workingToColorSpace(Mt.copy(this),e),Math.round(Oe(Mt.r*255,0,255))*65536+Math.round(Oe(Mt.g*255,0,255))*256+Math.round(Oe(Mt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,o=Mt.b,a=Math.max(n,r,o),s=Math.min(n,r,o);let c,l;const d=(s+a)/2;if(s===a)c=0,l=0;else{const h=a-s;switch(l=d<=.5?h/(a+s):h/(2-a-s),a){case n:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-n)/h+2;break;case o:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Tt){Ve.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(lr);const n=Qr(Tn.h,lr.h,t),r=Qr(Tn.s,lr.s,t),o=Qr(Tn.l,lr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Be;Be.NAMES=jc;let jd=0;class Ei extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=bi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ps&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const s in o){const c=o[s];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wa extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new U,dr=new $e;let Zd=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ms,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ms&&(e.usage=this.usage),e}}class Zc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jd=0;const Gt=new tt,ko=new wt,li=new U,Ft=new Zn,Di=new Zn,gt=new U;class Vt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Jc:Zc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Re().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];Ft.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(Ft.min,Di.min),Ft.expandByPoint(gt),gt.addVectors(Ft.max,Di.max),Ft.expandByPoint(gt)):(Ft.expandByPoint(Di.min),Ft.expandByPoint(Di.max))}Ft.getCenter(n);let r=0;for(let o=0,a=e.count;o<a;o++)gt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],c=this.morphTargetsRelative;for(let l=0,d=s.count;l<d;l++)gt.fromBufferAttribute(s,l),c&&(li.fromBufferAttribute(e,l),gt.add(li)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),s=[],c=[];for(let I=0;I<n.count;I++)s[I]=new U,c[I]=new U;const l=new U,d=new U,h=new U,f=new $e,m=new $e,b=new $e,g=new U,p=new U;function u(I,k,w){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,k),h.fromBufferAttribute(n,w),f.fromBufferAttribute(o,I),m.fromBufferAttribute(o,k),b.fromBufferAttribute(o,w),d.sub(l),h.sub(l),m.sub(f),b.sub(f);const P=1/(m.x*b.y-b.x*m.y);isFinite(P)&&(g.copy(d).multiplyScalar(b.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-b.x).multiplyScalar(P),s[I].add(g),s[k].add(g),s[w].add(g),c[I].add(p),c[k].add(p),c[w].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,k=v.length;I<k;++I){const w=v[I],P=w.start,z=w.count;for(let F=P,V=P+z;F<V;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new U,y=new U,E=new U,A=new U;function T(I){E.fromBufferAttribute(r,I),A.copy(E);const k=s[I];M.copy(k),M.sub(E.multiplyScalar(E.dot(k))).normalize(),y.crossVectors(A,k);const P=y.dot(c[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,k=v.length;I<k;++I){const w=v[I],P=w.start,z=w.count;for(let F=P,V=P+z;F<V;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new U,o=new U,a=new U,s=new U,c=new U,l=new U,d=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const b=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),s.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),s.add(d),c.add(d),l.add(d),n.setXYZ(b,s.x,s.y,s.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,o),h.subVectors(r,o),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(s,c){const l=s.array,d=s.itemSize,h=s.normalized,f=new l.constructor(c.length*d);let m=0,b=0;for(let g=0,p=c.length;g<p;g++){s.isInterleavedBufferAttribute?m=c[g]*s.data.stride+s.offset:m=c[g]*d;for(let u=0;u<d;u++)f[b++]=l[m++]}return new Jt(f,d,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,n);t.setAttribute(s,l)}const o=this.morphAttributes;for(const s in o){const c=[],l=o[s];for(let d=0,h=l.length;d<h;d++){const f=l[d],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const o=e.morphAttributes;for(const l in o){const d=[],h=o[l];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rs=new tt,Bn=new Yc,ur=new yi,Ps=new U,hr=new U,fr=new U,pr=new U,xo=new U,mr=new U,Ls=new U,_r=new U;class zt extends wt{constructor(e=new Vt,t=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){mr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const d=s[c],h=o[c];d!==0&&(xo.fromBufferAttribute(h,e),a?mr.addScaledVector(xo,d):mr.addScaledVector(xo.sub(t),d))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(o),Bn.copy(e.ray).recast(e.near),!(ur.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ur,Ps)===null||Bn.origin.distanceToSquared(Ps)>(e.far-e.near)**2))&&(Rs.copy(o).invert(),Bn.copy(e.ray).applyMatrix4(Rs),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let r;const o=this.geometry,a=this.material,s=o.index,c=o.attributes.position,l=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,f=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){const p=f[b],u=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,E=M;y<E;y+=3){const A=s.getX(y),T=s.getX(y+1),I=s.getX(y+2);r=br(this,u,e,n,l,d,h,A,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const b=Math.max(0,m.start),g=Math.min(s.count,m.start+m.count);for(let p=b,u=g;p<u;p+=3){const v=s.getX(p),M=s.getX(p+1),y=s.getX(p+2);r=br(this,a,e,n,l,d,h,v,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,g=f.length;b<g;b++){const p=f[b],u=a[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,E=M;y<E;y+=3){const A=y,T=y+1,I=y+2;r=br(this,u,e,n,l,d,h,A,T,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const b=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=b,u=g;p<u;p+=3){const v=p,M=p+1,y=p+2;r=br(this,a,e,n,l,d,h,v,M,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Qd(i,e,t,n,r,o,a,s){let c;if(e.side===Dt?c=n.intersectTriangle(a,o,r,!0,s):c=n.intersectTriangle(r,o,a,e.side===In,s),c===null)return null;_r.copy(s),_r.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:i}}function br(i,e,t,n,r,o,a,s,c,l){i.getVertexPosition(s,hr),i.getVertexPosition(c,fr),i.getVertexPosition(l,pr);const d=Qd(i,e,t,n,hr,fr,pr,Ls);if(d){const h=new U;$t.getBarycoord(Ls,hr,fr,pr,h),r&&(d.uv=$t.getInterpolatedAttribute(r,s,c,l,h,new $e)),o&&(d.uv1=$t.getInterpolatedAttribute(o,s,c,l,h,new $e)),a&&(d.normal=$t.getInterpolatedAttribute(a,s,c,l,h,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:s,b:c,c:l,normal:new U,materialIndex:0};$t.getNormal(hr,fr,pr,f.normal),d.face=f,d.barycoord=h}return d}class Sn extends Vt{constructor(e=1,t=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],l=[],d=[],h=[];let f=0,m=0;b("z","y","x",-1,-1,n,t,e,a,o,0),b("z","y","x",1,-1,n,t,-e,a,o,1),b("x","z","y",1,1,e,n,t,r,a,2),b("x","z","y",1,-1,e,n,-t,r,a,3),b("x","y","z",1,-1,e,t,n,r,o,4),b("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function b(g,p,u,v,M,y,E,A,T,I,k){const w=y/T,P=E/I,z=y/2,F=E/2,V=A/2,$=T+1,H=I+1;let W=0,j=0;const de=new U;for(let ae=0;ae<H;ae++){const ue=ae*P-F;for(let Ue=0;Ue<$;Ue++){const Le=Ue*w-z;de[g]=Le*v,de[p]=ue*M,de[u]=V,l.push(de.x,de.y,de.z),de[g]=0,de[p]=0,de[u]=A>0?1:-1,d.push(de.x,de.y,de.z),h.push(Ue/T),h.push(1-ae/I),W+=1}}for(let ae=0;ae<I;ae++)for(let ue=0;ue<T;ue++){const Ue=f+ue+$*ae,Le=f+ue+$*(ae+1),at=f+(ue+1)+$*(ae+1),ot=f+(ue+1)+$*ae;c.push(Ue,Le,ot),c.push(Le,at,ot),j+=6}s.addGroup(m,j,k),m+=j,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const tu={clone:Si,merge:At};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class el extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new U,Ds=new $e,Is=new $e;class Xt extends el{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Ds,Is),t.subVectors(Is,Ds)}setViewOffset(e,t,n,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;o+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,ui=1;class ru extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(di,ui,e,t);r.layers=this.layers,this.add(r);const o=new Xt(di,ui,e,t);o.layers=this.layers,this.add(o);const a=new Xt(di,ui,e,t);a.layers=this.layers,this.add(a);const s=new Xt(di,ui,e,t);s.layers=this.layers,this.add(s);const c=new Xt(di,ui,e,t);c.layers=this.layers,this.add(c);const l=new Xt(di,ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,a,s,c]=t;for(const l of t)this.remove(l);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,c,l,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,m),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class tl extends vt{constructor(e=[],t=Kn,n,r,o,a,s,c,l,d){super(e,t,n,r,o,a,s,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nl extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sn(5,5,5),o=new un({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:kn});o.uniforms.tEquirect.value=t;const a=new zt(r,o),s=t.minFilter;return t.minFilter===$n&&(t.minFilter=yt),new ru(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(o)}}class zi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ou={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),u=this._getHandJoint(l,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,b=.005;l.inputState.pinching&&f>m+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new Xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class il extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rl extends vt{constructor(e=null,t=1,n=1,r,o,a,s,c,l=ut,d=ut,h,f){super(null,a,s,c,l,d,r,o,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us extends Jt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hi=new tt,Ns=new tt,gr=[],Fs=new Zn,au=new tt,Ii=new zt,Ui=new yi;class su extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,au)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),Fs.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(Fs)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),Ui.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,a=e*o+1;for(let s=0;s<n.length;s++)n[s]=r[a+s]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),e.ray.intersectsSphere(Ui)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,hi),Ns.multiplyMatrices(n,hi),Ii.matrixWorld=Ns,Ii.raycast(e,gr);for(let a=0,s=gr.length;a<s;a++){const c=gr[a];c.instanceId=o,c.object=this,t.push(c)}gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rl(new Float32Array(r*this.count),r,this.count,Fa,jt));const o=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const s=this.geometry.morphTargetsRelative?1:1-a,c=r*e;o[c]=s,o.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new U,cu=new U,lu=new Re;class Gn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wo.subVectors(n,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lu.getNormalMatrix(e),r=this.coplanarPoint(wo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new yi,du=new $e(.5,.5),kr=new U;class $a{constructor(e=new Gn,t=new Gn,n=new Gn,r=new Gn,o=new Gn,a=new Gn){this.planes=[e,t,n,r,o,a]}set(e,t,n,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on,n=!1){const r=this.planes,o=e.elements,a=o[0],s=o[1],c=o[2],l=o[3],d=o[4],h=o[5],f=o[6],m=o[7],b=o[8],g=o[9],p=o[10],u=o[11],v=o[12],M=o[13],y=o[14],E=o[15];if(r[0].setComponents(l-a,m-d,u-b,E-v).normalize(),r[1].setComponents(l+a,m+d,u+b,E+v).normalize(),r[2].setComponents(l+s,m+h,u+g,E+M).normalize(),r[3].setComponents(l-s,m-h,u-g,E-M).normalize(),n)r[4].setComponents(c,f,p,y).normalize(),r[5].setComponents(l-c,m-f,u-p,E-y).normalize();else if(r[4].setComponents(l-c,m-f,u-p,E-y).normalize(),t===on)r[5].setComponents(l+c,m+f,u+p,E+y).normalize();else if(t===Fr)r[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=du.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(kr.x=r.normal.x>0?e.max.x:e.min.x,kr.y=r.normal.y>0?e.max.y:e.min.y,kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zi extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Or=new U,Br=new U,Os=new tt,Ni=new Yc,xr=new yi,So=new U,Bs=new U;class uu extends wt{constructor(e=new Vt,t=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Or.fromBufferAttribute(t,r-1),Br.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new Ct(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),xr.radius+=o,e.ray.intersectsSphere(xr)===!1)return;Os.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Os);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let g=m,p=b-1;g<p;g+=l){const u=d.getX(g),v=d.getX(g+1),M=vr(this,e,Ni,c,u,v,g);M&&t.push(M)}if(this.isLineLoop){const g=d.getX(b-1),p=d.getX(m),u=vr(this,e,Ni,c,g,p,b-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let g=m,p=b-1;g<p;g+=l){const u=vr(this,e,Ni,c,g,g+1,g);u&&t.push(u)}if(this.isLineLoop){const g=vr(this,e,Ni,c,b-1,m,b-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function vr(i,e,t,n,r,o,a){const s=i.geometry.attributes.position;if(Or.fromBufferAttribute(s,r),Br.fromBufferAttribute(s,o),t.distanceSqToSegment(Or,Br,So,Bs)>n)return;So.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(So);if(!(l<e.near||l>e.far))return{distance:l,point:Bs.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const zs=new U,Vs=new U;class Vr extends uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)zs.fromBufferAttribute(t,r),Vs.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zs.distanceTo(Vs);e.setAttribute("lineDistance",new Ct(n,1))}else Ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hu extends vt{constructor(e,t,n,r,o,a,s,c,l){super(e,t,n,r,o,a,s,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi extends vt{constructor(e,t,n=dn,r,o,a,s=ut,c=ut,l,d=wn,h=1){if(d!==wn&&d!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,o,a,s,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fu extends Yi{constructor(e,t=dn,n=Kn,r,o,a=ut,s=ut,c,l=wn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,r,o,a,s,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ol extends vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const wr=new U,Sr=new U,Mo=new U,Mr=new $t;class al extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Dr*t),a=e.getIndex(),s=e.getAttribute("position"),c=a?a.count:s.count,l=[0,0,0],d=["a","b","c"],h=new Array(3),f={},m=[];for(let b=0;b<c;b+=3){a?(l[0]=a.getX(b),l[1]=a.getX(b+1),l[2]=a.getX(b+2)):(l[0]=b,l[1]=b+1,l[2]=b+2);const{a:g,b:p,c:u}=Mr;if(g.fromBufferAttribute(s,l[0]),p.fromBufferAttribute(s,l[1]),u.fromBufferAttribute(s,l[2]),Mr.getNormal(Mo),h[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const M=(v+1)%3,y=h[v],E=h[M],A=Mr[d[v]],T=Mr[d[M]],I=`${y}_${E}`,k=`${E}_${y}`;k in f&&f[k]?(Mo.dot(f[k].normal)<=o&&(m.push(A.x,A.y,A.z),m.push(T.x,T.y,T.z)),f[k]=null):I in f||(f[I]={index0:l[v],index1:l[M],normal:Mo.clone()})}}for(const b in f)if(f[b]){const{index0:g,index1:p}=f[b];wr.fromBufferAttribute(s,g),Sr.fromBufferAttribute(s,p),m.push(wr.x,wr.y,wr.z),m.push(Sr.x,Sr.y,Sr.z)}this.setAttribute("position",new Ct(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hr extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,d=c+1,h=e/s,f=t/c,m=[],b=[],g=[],p=[];for(let u=0;u<d;u++){const v=u*f-a;for(let M=0;M<l;M++){const y=M*h-o;b.push(y,-v,0),g.push(0,0,1),p.push(M/s),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<s;v++){const M=v+l*u,y=v+l*(u+1),E=v+1+l*(u+1),A=v+1+l*u;m.push(M,y,A),m.push(y,E,A)}this.setIndex(m),this.setAttribute("position",new Ct(b,3)),this.setAttribute("normal",new Ct(g,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class pu extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qa extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mu extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _u extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bu{constructor(e,t,n){const r=this;let o=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){s++,o===!1&&r.onStart!==void 0&&r.onStart(d,a,s),o=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],b=l[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gu=new bu;class Ya{constructor(e){this.manager=e!==void 0?e:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi=new WeakMap;class sl extends Ya{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=yo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0);else{let h=fi.get(a);h===void 0&&(h=[],fi.set(a,h)),h.push({onLoad:t,onError:r})}return a}const s=$i("img");function c(){d(),t&&t(this);const h=fi.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onLoad&&m.onLoad(this)}fi.delete(this),o.manager.itemEnd(e)}function l(h){d(),r&&r(h),yo.remove(`image:${e}`);const f=fi.get(this)||[];for(let m=0;m<f.length;m++){const b=f[m];b.onError&&b.onError(h)}fi.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),yo.add(`image:${e}`,s),o.manager.itemStart(e),s.src=e,s}}class ku extends Ya{constructor(e){super(e)}load(e,t,n,r){const o=new vt,a=new sl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class cl extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Eo=new tt,Hs=new U,Gs=new U;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Ot,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hs),Gs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gs),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gr extends el{constructor(e=-1,t=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,a=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,a=o+l*this.view.width,s-=d*this.view.offsetY,c=s-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vu extends xu{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wu extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new vu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Su extends cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mu extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yu extends Vr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Vt;r.setAttribute("position",new Ct(t,3)),r.setAttribute("color",new Ct(n,3));const o=new Zi({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new Be,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Eu extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ws(i,e,t,n){const r=Au(n);switch(t){case Gc:return i*e;case Fa:return i*e/r.components*r.byteLength;case Oa:return i*e/r.components*r.byteLength;case vi:return i*e*2/r.components*r.byteLength;case Ba:return i*e*2/r.components*r.byteLength;case Wc:return i*e*3/r.components*r.byteLength;case Zt:return i*e*4/r.components*r.byteLength;case za:return i*e*4/r.components*r.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case jo:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case ea:case ta:case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case va:case wa:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ma:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ea:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Au(i){switch(i){case Ot:case Bc:return{byteLength:1,components:1};case Wi:case zc:case vn:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case dn:case Ia:case jt:return{byteLength:4,components:1};case Vc:case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);function ll(){let i=null,e=!1,t=null,n=null;function r(o,a){t(o,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Tu(i){const e=new WeakMap;function t(s,c){const l=s.array,d=s.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),s.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:h}}function n(s,c,l){const d=c.array,h=c.updateRanges;if(i.bindBuffer(l,s),h.length===0)i.bufferSubData(l,0,d);else{h.sort((m,b)=>m.start-b.start);let f=0;for(let m=1;m<h.length;m++){const b=h[f],g=h[m];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++f,h[f]=g)}h.length=f+1;for(let m=0,b=h.length;m<b;m++){const g=h[m];i.bufferSubData(l,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const c=e.get(s);c&&(i.deleteBuffer(c.buffer),e.delete(s))}function a(s,c){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const l=e.get(s);if(l===void 0)e.set(s,t(s,c));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,c),l.version=s.version}}return{get:r,remove:o,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ju=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ah=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ch=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
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
}`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,vh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
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
#endif`,Ah=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,Th=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oh=`#if defined( USE_POINTS_UV )
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
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`#ifdef USE_MORPHTARGETS
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
#endif`,Xh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Ff=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
void main () {
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,Kf=`#define NORMAL
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
}`,jf=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:Cu,alphahash_pars_fragment:Ru,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Iu,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Ku,color_pars_vertex:ju,color_vertex:Zu,common:Ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:eh,displacementmap_pars_vertex:th,displacementmap_vertex:nh,emissivemap_fragment:ih,emissivemap_pars_fragment:rh,colorspace_fragment:oh,colorspace_pars_fragment:ah,envmap_fragment:sh,envmap_common_pars_fragment:ch,envmap_pars_fragment:lh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:vh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:fh,fog_fragment:ph,fog_pars_fragment:mh,gradientmap_pars_fragment:_h,lightmap_pars_fragment:bh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:kh,lights_pars_begin:xh,lights_toon_fragment:wh,lights_toon_pars_fragment:Sh,lights_phong_fragment:Mh,lights_phong_pars_fragment:yh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Ah,lights_fragment_begin:Th,lights_fragment_maps:Ch,lights_fragment_end:Rh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Dh,logdepthbuf_vertex:Ih,map_fragment:Uh,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphinstance_vertex:Vh,morphcolor_vertex:Hh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Wh,morphtarget_vertex:Xh,normal_fragment_begin:$h,normal_fragment_maps:qh,normal_pars_fragment:Yh,normal_pars_vertex:Kh,normal_vertex:jh,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:rf,premultiplied_alpha_fragment:of,project_vertex:af,dithering_fragment:sf,dithering_pars_fragment:cf,roughnessmap_fragment:lf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:hf,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:_f,skinning_vertex:bf,skinnormal_vertex:gf,specularmap_fragment:kf,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:wf,transmission_fragment:Sf,transmission_pars_fragment:Mf,uv_pars_fragment:yf,uv_pars_vertex:Ef,uv_vertex:Af,worldpos_vertex:Tf,background_vert:Cf,background_frag:Rf,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:If,depth_vert:Uf,depth_frag:Nf,distance_vert:Ff,distance_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:$f,meshmatcap_vert:qf,meshmatcap_frag:Yf,meshnormal_vert:Kf,meshnormal_frag:jf,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:rp,shadow_vert:op,shadow_frag:ap,sprite_vert:sp,sprite_frag:cp},se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},nn={basic:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:At([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:At([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:At([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Be(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:At([se.points,se.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:At([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:At([se.common,se.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:At([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:At([se.sprite,se.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:At([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:At([se.lights,se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};nn.physical={uniforms:At([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const yr={r:0,b:0,g:0},Vn=new Qt,lp=new tt;function dp(i,e,t,n,r,o,a){const s=new Be(0);let c=o===!0?0:1,l,d,h=null,f=0,m=null;function b(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function g(M){let y=!1;const E=b(M);E===null?u(s,c):E&&E.isColor&&(u(E,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){const E=b(y);E&&(E.isCubeTexture||E.mapping===zr)?(d===void 0&&(d=new zt(new Sn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Si(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Vn.copy(y.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(Vn)),d.material.toneMapped=Ve.getTransfer(E.colorSpace)!==Ze,(h!==E||f!==E.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=E,f=E.version,m=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new zt(new Hr(2,2),new un({name:"BackgroundMaterial",uniforms:Si(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,y){M.getRGB(yr,Qc(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,y,a)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,y=1){s.set(M),c=y,u(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(s,c)},render:g,addToRenderList:p,dispose:v}}function up(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let o=r,a=!1;function s(w,P,z,F,V){let $=!1;const H=h(F,z,P);o!==H&&(o=H,l(o.object)),$=m(w,F,z,V),$&&b(w,F,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(w,P,z,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function h(w,P,z){const F=z.wireframe===!0;let V=n[w.id];V===void 0&&(V={},n[w.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let H=$[F];return H===void 0&&(H=f(c()),$[F]=H),H}function f(w){const P=[],z=[],F=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:w,attributes:{},index:null}}function m(w,P,z,F){const V=o.attributes,$=P.attributes;let H=0;const W=z.getAttributes();for(const j in W)if(W[j].location>=0){const ae=V[j];let ue=$[j];if(ue===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ae===void 0||ae.attribute!==ue||ue&&ae.data!==ue.data)return!0;H++}return o.attributesNum!==H||o.index!==F}function b(w,P,z,F){const V={},$=P.attributes;let H=0;const W=z.getAttributes();for(const j in W)if(W[j].location>=0){let ae=$[j];ae===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const ue={};ue.attribute=ae,ae&&ae.data&&(ue.data=ae.data),V[j]=ue,H++}o.attributes=V,o.attributesNum=H,o.index=F}function g(){const w=o.newAttributes;for(let P=0,z=w.length;P<z;P++)w[P]=0}function p(w){u(w,0)}function u(w,P){const z=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;z[w]=1,F[w]===0&&(i.enableVertexAttribArray(w),F[w]=1),V[w]!==P&&(i.vertexAttribDivisor(w,P),V[w]=P)}function v(){const w=o.newAttributes,P=o.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==w[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function M(w,P,z,F,V,$,H){H===!0?i.vertexAttribIPointer(w,P,z,V,$):i.vertexAttribPointer(w,P,z,F,V,$)}function y(w,P,z,F){g();const V=F.attributes,$=z.getAttributes(),H=P.defaultAttributeValues;for(const W in $){const j=$[W];if(j.location>=0){let de=V[W];if(de===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const ae=de.normalized,ue=de.itemSize,Ue=e.get(de);if(Ue===void 0)continue;const Le=Ue.buffer,at=Ue.type,ot=Ue.bytesPerElement,q=at===i.INT||at===i.UNSIGNED_INT||de.gpuType===Ia;if(de.isInterleavedBufferAttribute){const Z=de.data,pe=Z.stride,Ce=de.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<j.locationSize;be++)u(j.location+be,Z.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<j.locationSize;be++)p(j.location+be);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let be=0;be<j.locationSize;be++)M(j.location+be,ue/j.locationSize,at,ae,pe*ot,(Ce+ue/j.locationSize*be)*ot,q)}else{if(de.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)u(j.location+Z,de.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Z=0;Z<j.locationSize;Z++)p(j.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Z=0;Z<j.locationSize;Z++)M(j.location+Z,ue/j.locationSize,at,ae,ue*ot,ue/j.locationSize*Z*ot,q)}}else if(H!==void 0){const ae=H[W];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(j.location,ae);break;case 3:i.vertexAttrib3fv(j.location,ae);break;case 4:i.vertexAttrib4fv(j.location,ae);break;default:i.vertexAttrib1fv(j.location,ae)}}}}v()}function E(){I();for(const w in n){const P=n[w];for(const z in P){const F=P[z];for(const V in F)d(F[V].object),delete F[V];delete P[z]}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const P=n[w.id];for(const z in P){const F=P[z];for(const V in F)d(F[V].object),delete F[V];delete P[z]}delete n[w.id]}function T(w){for(const P in n){const z=n[P];if(z[w.id]===void 0)continue;const F=z[w.id];for(const V in F)d(F[V].object),delete F[V];delete z[w.id]}}function I(){k(),a=!0,o!==r&&(o=r,l(o.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:I,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function hp(i,e,t){let n;function r(l){n=l}function o(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,h){h!==0&&(i.drawArraysInstanced(n,l,d,h),t.update(d,n,h))}function s(l,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,h);let m=0;for(let b=0;b<h;b++)m+=d[b];t.update(m,n,1)}function c(l,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let b=0;b<l.length;b++)a(l[b],d[b],f[b]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,h);let b=0;for(let g=0;g<h;g++)b+=d[g]*f[g];t.update(b,n,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function fp(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Zt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const I=T===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ot&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jt&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ae("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:E,samples:A}}function pp(i){const e=this;let t=null,n=0,r=!1,o=!1;const a=new Gn,s=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,m){const b=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!r||b===null||b.length===0||o&&!p)o?d(null):l();else{const v=o?0:n,M=v*4;let y=u.clippingState||null;c.value=y,y=d(b,f,M,m);for(let E=0;E!==M;++E)y[E]=t[E];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,m,b){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=c.value,b!==!0||p===null){const u=m+g*4,v=f.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let M=0,y=m;M!==g;++M,y+=4)a.copy(h[M]).applyMatrix4(v,s),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function mp(i){let e=new WeakMap;function t(a,s){return s===$o?a.mapping=Kn:s===qo&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){const s=a.mapping;if(s===$o||s===qo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new nl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ln=4,Xs=[.125,.215,.35,.446,.526,.582],Xn=20,_p=256,Fi=new Gr,$s=new Be;let Ao=null,To=0,Co=0,Ro=!1;const bp=new U;class qs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,o={}){const{size:a=256,position:s=bp}=o;Ao=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=js(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ks(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,To,Co),this._renderer.xr.enabled=Ro,e.scissorTest=!1,pi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kn||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:vn,format:Zt,colorSpace:wi,depthBuffer:!1},r=Ys(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ys(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gp(o)),this._blurMaterial=xp(o,e,t),this._ggxMaterial=kp(o,e,t)}return r}_compileMaterial(e){const t=new zt(new Vt,e);this._renderer.compile(t,Fi)}_sceneToCubeUV(e,t,n,r,o){const c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor($s),h.toneMapping=sn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Sn,new Wa({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let u=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,u=!0):(p.color.copy($s),u=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+d[M],o.y,o.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+d[M],o.z)):(c.up.set(0,l[M],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+d[M]));const E=this._cubeSize;pi(r,y*E,M>2?E:0,E,E),h.setRenderTarget(r),u&&h.render(g,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Kn||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=js()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ks());const o=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=o;const s=o.uniforms;s.envMap.value=e;const c=this._cubeSize;pi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,o=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[n];s.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-d*d),f=0+l*1.25,m=h*f,{_lodMax:b}=this,g=this._sizeLods[n],p=3*g*(n>b-Ln?n-b+Ln:0),u=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=b-t,pi(o,p,u,3*g,2*g),r.setRenderTarget(o),r.render(s,Fi),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=b-n,pi(e,p,u,3*g,2*g),r.setRenderTarget(e),r.render(s,Fi)}_blur(e,t,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",o),this._halfBlur(a,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),g=o/b,p=isFinite(o)?1+Math.floor(d*g):Xn;p>Xn&&Ae(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const u=[];let v=0;for(let T=0;T<Xn;++T){const I=T/g,k=Math.exp(-I*I/2);u.push(k),T===0?v+=k:T<p&&(v+=2*k)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:M}=this;f.dTheta.value=b,f.mipInt.value=M-n;const y=this._sizeLods[r],E=3*y*(r>M-Ln?r-M+Ln:0),A=4*(this._cubeSize-y);pi(t,E,A,3*y,2*y),c.setRenderTarget(t),c.render(h,Fi)}}function gp(i){const e=[],t=[],n=[];let r=i;const o=i-Ln+1+Xs.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);e.push(s);let c=1/s;a>i-Ln?c=Xs[a-i+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(s-2),d=-l,h=1+l,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,b=6,g=3,p=2,u=1,v=new Float32Array(g*b*m),M=new Float32Array(p*b*m),y=new Float32Array(u*b*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,I=A>2?0:-1,k=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(k,g*b*A),M.set(f,p*b*A);const w=[A,A,A,A,A,A];y.set(w,u*b*A)}const E=new Vt;E.setAttribute("position",new Jt(v,g)),E.setAttribute("uv",new Jt(M,p)),E.setAttribute("faceIndex",new Jt(y,u)),n.push(new zt(E,null)),r>Ln&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ys(i,e,t){const n=new cn(i,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kp(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_p,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xp(i,e,t){const n=new Float32Array(Xn),r=new U(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ks(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function js(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wr(){return`

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
	`}function vp(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===$o||c===qo,d=c===Kn||c===xi;if(l||d){let h=e.get(s);const f=h!==void 0?h.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new qs(i)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),h.texture;if(h!==void 0)return h.texture;{const m=s.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new qs(i)),h=l?t.fromEquirectangular(s):t.fromCubemap(s),h.texture.pmremVersion=s.pmremVersion,e.set(s,h),s.addEventListener("dispose",o),h.texture):null}}}return s}function r(s){let c=0;const l=6;for(let d=0;d<l;d++)s[d]!==void 0&&c++;return c===l}function o(s){const c=s.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&qi("WebGLRenderer: "+n+" extension not supported."),r}}}function Sp(i,e,t,n){const r={},o=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const b in f.attributes)e.remove(f.attributes[b]);f.removeEventListener("dispose",a),delete r[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,b=h.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let M=0,y=v.length;M<y;M+=3){const E=v[M+0],A=v[M+1],T=v[M+2];f.push(E,A,A,T,T,E)}}else if(b!==void 0){const v=b.array;g=b.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const E=M+0,A=M+1,T=M+2;f.push(E,A,A,T,T,E)}}else return;const p=new($c(f)?Jc:Zc)(f,1);p.version=g;const u=o.get(h);u&&e.remove(u),o.set(h,p)}function d(h){const f=o.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return o.get(h)}return{get:s,update:c,getWireframeAttribute:d}}function Mp(i,e,t){let n;function r(f){n=f}let o,a;function s(f){o=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,o,f*a),t.update(m,n,1)}function l(f,m,b){b!==0&&(i.drawElementsInstanced(n,m,o,f*a,b),t.update(m,n,b))}function d(f,m,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,b);let p=0;for(let u=0;u<b;u++)p+=m[u];t.update(p,n,1)}function h(f,m,b,g){if(b===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/a,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,o,f,0,g,0,b);let u=0;for(let v=0;v<b;v++)u+=m[v]*g[v];t.update(u,n,1)}}this.setMode=r,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function yp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,s){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=s*(o/3);break;case i.LINES:t.lines+=s*(o/2);break;case i.LINE_STRIP:t.lines+=s*(o-1);break;case i.LINE_LOOP:t.lines+=s*o;break;case i.POINTS:t.points+=s*o;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ep(i,e,t){const n=new WeakMap,r=new lt;function o(a,s,c){const l=a.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(s);if(f===void 0||f.count!==h){let k=function(){T.dispose(),n.delete(s),s.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();const m=s.morphAttributes.position!==void 0,b=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,p=s.morphAttributes.position||[],u=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let M=0;m===!0&&(M=1),b===!0&&(M=2),g===!0&&(M=3);let y=s.attributes.position.count*M,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*E*4*h),T=new qc(A,y,E,h);T.type=jt,T.needsUpdate=!0;const I=M*4;for(let w=0;w<h;w++){const P=p[w],z=u[w],F=v[w],V=y*E*4*w;for(let $=0;$<P.count;$++){const H=$*I;m===!0&&(r.fromBufferAttribute(P,$),A[V+H+0]=r.x,A[V+H+1]=r.y,A[V+H+2]=r.z,A[V+H+3]=0),b===!0&&(r.fromBufferAttribute(z,$),A[V+H+4]=r.x,A[V+H+5]=r.y,A[V+H+6]=r.z,A[V+H+7]=0),g===!0&&(r.fromBufferAttribute(F,$),A[V+H+8]=r.x,A[V+H+9]=r.y,A[V+H+10]=r.z,A[V+H+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new $e(y,E)},n.set(s,f),s.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const b=s.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Ap(i,e,t,n){let r=new WeakMap;function o(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:a}}const Tp={[Pc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Ic]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function Cp(i,e,t,n,r){const o=new cn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new cn(e,t,{type:vn,depthBuffer:!1,stencilBuffer:!1}),s=new Vt;s.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute("uv",new Ct([0,2,0,0,2,0],2));const c=new pu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new zt(s,c),d=new Gr(-1,1,1,-1,0,1);let h=null,f=null,m=!1,b,g=null,p=[],u=!1;this.setSize=function(v,M){o.setSize(v,M),a.setSize(v,M);for(let y=0;y<p.length;y++){const E=p[y];E.setSize&&E.setSize(v,M)}},this.setEffects=function(v){p=v,u=p.length>0&&p[0].isRenderPass===!0;const M=o.width,y=o.height;for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(M,y)}},this.begin=function(v,M){if(m||v.toneMapping===sn&&p.length===0)return!1;if(g=M,M!==null){const y=M.width,E=M.height;(o.width!==y||o.height!==E)&&this.setSize(y,E)}return u===!1&&v.setRenderTarget(o),b=v.toneMapping,v.toneMapping=sn,!0},this.hasRenderPass=function(){return u},this.end=function(v,M){v.toneMapping=b,m=!0;let y=o,E=a;for(let A=0;A<p.length;A++){const T=p[A];if(T.enabled!==!1&&(T.render(v,E,y,M),T.needsSwap!==!1)){const I=y;y=E,E=I}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,c.defines={},Ve.getTransfer(h)===Ze&&(c.defines.SRGB_TRANSFER="");const A=Tp[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(g),v.render(l,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a.dispose(),s.dispose(),c.dispose()}}const dl=new vt,Ca=new Yi(1,1),ul=new qc,hl=new Hd,fl=new tl,Zs=[],Js=[],Qs=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Zs[r];if(o===void 0&&(o=new Float32Array(r),Zs[r]=o),e!==0){n.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,i[a].toArray(o,s)}return o}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=Js[e];t===void 0&&(t=new Int32Array(e),Js[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),_t(t,n)}}function Up(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),_t(t,n)}}function Np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Qs.set(n),i.uniformMatrix4fv(this.addr,!1,Qs),_t(t,n)}}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function Xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Ca.compareFunction=t.isReversedDepthBuffer()?Ha:Va,o=Ca):o=dl,t.setTexture2D(e||o,r)}function $p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hl,r)}function qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fl,r)}function Yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ul,r)}function Kp(i){switch(i){case 5126:return Rp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function jp(i,e){i.uniform1fv(this.addr,e)}function Zp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function Jp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function Qp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function em(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tm(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nm(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function im(i,e){i.uniform1iv(this.addr,e)}function rm(i,e){i.uniform2iv(this.addr,e)}function om(i,e){i.uniform3iv(this.addr,e)}function am(i,e){i.uniform4iv(this.addr,e)}function sm(i,e){i.uniform1uiv(this.addr,e)}function cm(i,e){i.uniform2uiv(this.addr,e)}function lm(i,e){i.uniform3uiv(this.addr,e)}function dm(i,e){i.uniform4uiv(this.addr,e)}function um(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ca:a=dl;for(let s=0;s!==r;++s)t.setTexture2D(e[s]||a,o[s])}function hm(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hl,o[a])}function fm(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fl,o[a])}function pm(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);mt(n,o)||(i.uniform1iv(this.addr,o),_t(n,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ul,o[a])}function mm(i){switch(i){case 5126:return jp;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return sm;case 36294:return cm;case 36295:return lm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function nc(i,e){i.seq.push(e),i.map[e.id]=e}function km(i,e,t){const n=i.name,r=n.length;for(Po.lastIndex=0;;){const o=Po.exec(n),a=Po.lastIndex;let s=o[1];const c=o[2]==="]",l=o[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===r){nc(t,l===void 0?new _m(s,i,e):new bm(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new gm(s),nc(t,h)),t=h}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),c=e.getUniformLocation(t,s.name);km(s,c,this)}const r=[],o=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):o.push(a);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ic(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xm=37297;let vm=0;function wm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}const rc=new Re;function Sm(i){Ve._getMatrix(rc,Ve.workingColorSpace,i);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case Nr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+wm(i.getShaderSource(e),s)}else return o}function Mm(i,e){const t=Sm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ym={[Pc]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[Ic]:"ACESFilmic",[Nc]:"AgX",[Fc]:"Neutral",[Uc]:"Custom"};function Em(i,e){const t=ym[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new U;function Am(){Ve.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function Cm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),a=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:s}}return t}function Vi(i){return i!==""}function ac(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(Pm,Dm)}const Lm=new Map;function Dm(i,e){let t=Pe[e];if(t===void 0){const n=Lm.get(e);if(n!==void 0)t=Pe[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ra(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(i){return i.replace(Im,Um)}function Um(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function lc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Nm={[Tr]:"SHADOWMAP_TYPE_PCF",[Bi]:"SHADOWMAP_TYPE_VSM"};function Fm(i){return Nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Om={[Kn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE_UV"};function Bm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Om[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const zm={[xi]:"ENVMAP_MODE_REFRACTION"};function Vm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Hm={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[Md]:"ENVMAP_BLENDING_ADD"};function Gm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hm[i.combine]||"ENVMAP_BLENDING_NONE"}function Wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xm(i,e,t,n){const r=i.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=Fm(t),l=Bm(t),d=Vm(t),h=Gm(t),f=Wm(t),m=Tm(t),b=Cm(o),g=r.createProgram();let p,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Vi).join(`
`),u.length>0&&(u+=`
`)):(p=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),u=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==sn?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=Ra(a),a=ac(a,t),a=sc(a,t),s=Ra(s),s=ac(s,t),s=sc(s,t),a=cc(a),s=cc(s),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===_s?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=v+p+a,y=v+u+s,E=ic(r,r.VERTEX_SHADER,M),A=ic(r,r.FRAGMENT_SHADER,y);r.attachShader(g,E),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(P){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(g)||"",F=r.getShaderInfoLog(E)||"",V=r.getShaderInfoLog(A)||"",$=z.trim(),H=F.trim(),W=V.trim();let j=!0,de=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,A);else{const ae=oc(r,E,"vertex"),ue=oc(r,A,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+ae+`
`+ue)}else $!==""?Ae("WebGLProgram: Program Info Log:",$):(H===""||W==="")&&(de=!1);de&&(P.diagnostics={runnable:j,programLog:$,vertexShader:{log:H,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(E),r.deleteShader(A),I=new Ir(r,g),k=Rm(r,g)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,xm)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let $m=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function Km(i,e,t,n,r,o,a){const s=new Kc,c=new qm,l=new Set,d=[],h=new Map,f=r.logarithmicDepthBuffer;let m=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(k){return l.add(k),k===0?"uv":`uv${k}`}function p(k,w,P,z,F){const V=z.fog,$=F.geometry,H=k.isMeshStandardMaterial?z.environment:null,W=(k.isMeshStandardMaterial?t:e).get(k.envMap||H),j=W&&W.mapping===zr?W.image.height:null,de=b[k.type];k.precision!==null&&(m=r.getMaxPrecision(k.precision),m!==k.precision&&Ae("WebGLProgram.getParameters:",k.precision,"not supported, using",m,"instead."));const ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=ae!==void 0?ae.length:0;let Ue=0;$.morphAttributes.position!==void 0&&(Ue=1),$.morphAttributes.normal!==void 0&&(Ue=2),$.morphAttributes.color!==void 0&&(Ue=3);let Le,at,ot,q;if(de){const Ke=nn[de];Le=Ke.vertexShader,at=Ke.fragmentShader}else Le=k.vertexShader,at=k.fragmentShader,c.update(k),ot=c.getVertexShaderID(k),q=c.getFragmentShaderID(k);const Z=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,He=!!k.map,bt=!!k.matcap,ze=!!W,Ye=!!k.aoMap,Qe=!!k.lightMap,De=!!k.bumpMap,ht=!!k.normalMap,C=!!k.displacementMap,ft=!!k.emissiveMap,qe=!!k.metalnessMap,nt=!!k.roughnessMap,ke=k.anisotropy>0,S=k.clearcoat>0,_=k.dispersion>0,L=k.iridescence>0,X=k.sheen>0,K=k.transmission>0,G=ke&&!!k.anisotropyMap,ve=S&&!!k.clearcoatMap,ne=S&&!!k.clearcoatNormalMap,ge=S&&!!k.clearcoatRoughnessMap,Ee=L&&!!k.iridescenceMap,Q=L&&!!k.iridescenceThicknessMap,re=X&&!!k.sheenColorMap,_e=X&&!!k.sheenRoughnessMap,xe=!!k.specularMap,ie=!!k.specularColorMap,Ie=!!k.specularIntensityMap,R=K&&!!k.transmissionMap,le=K&&!!k.thicknessMap,ee=!!k.gradientMap,he=!!k.alphaMap,J=k.alphaTest>0,Y=!!k.alphaHash,te=!!k.extensions;let Te=sn;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Te=i.toneMapping);const it={shaderID:de,shaderType:k.type,shaderName:k.name,vertexShader:Le,fragmentShader:at,defines:k.defines,customVertexShaderID:ot,customFragmentShaderID:q,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:m,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:wi,alphaToCoverage:!!k.alphaToCoverage,map:He,matcap:bt,envMap:ze,envMapMode:ze&&W.mapping,envMapCubeUVHeight:j,aoMap:Ye,lightMap:Qe,bumpMap:De,normalMap:ht,displacementMap:C,emissiveMap:ft,normalMapObjectSpace:ht&&k.normalMapType===Ad,normalMapTangentSpace:ht&&k.normalMapType===Xc,metalnessMap:qe,roughnessMap:nt,anisotropy:ke,anisotropyMap:G,clearcoat:S,clearcoatMap:ve,clearcoatNormalMap:ne,clearcoatRoughnessMap:ge,dispersion:_,iridescence:L,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:re,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:ie,specularIntensityMap:Ie,transmission:K,transmissionMap:R,thicknessMap:le,gradientMap:ee,opaque:k.transparent===!1&&k.blending===bi&&k.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:Y,combine:k.combine,mapUv:He&&g(k.map.channel),aoMapUv:Ye&&g(k.aoMap.channel),lightMapUv:Qe&&g(k.lightMap.channel),bumpMapUv:De&&g(k.bumpMap.channel),normalMapUv:ht&&g(k.normalMap.channel),displacementMapUv:C&&g(k.displacementMap.channel),emissiveMapUv:ft&&g(k.emissiveMap.channel),metalnessMapUv:qe&&g(k.metalnessMap.channel),roughnessMapUv:nt&&g(k.roughnessMap.channel),anisotropyMapUv:G&&g(k.anisotropyMap.channel),clearcoatMapUv:ve&&g(k.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&g(k.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(k.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(k.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(k.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(k.sheenRoughnessMap.channel),specularMapUv:xe&&g(k.specularMap.channel),specularColorMapUv:ie&&g(k.specularColorMap.channel),specularIntensityMapUv:Ie&&g(k.specularIntensityMap.channel),transmissionMapUv:R&&g(k.transmissionMap.channel),thicknessMapUv:le&&g(k.thicknessMap.channel),alphaMapUv:he&&g(k.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ht||ke),vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(He||he),fog:!!V,useFog:k.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:k.flatShading===!0&&k.wireframe===!1,sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:k.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:He&&k.map.isVideoTexture===!0&&Ve.getTransfer(k.map.colorSpace)===Ze,decodeVideoTextureEmissive:ft&&k.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(k.emissiveMap.colorSpace)===Ze,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===gn,flipSided:k.side===Dt,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:te&&k.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&k.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function u(k){const w=[];if(k.shaderID?w.push(k.shaderID):(w.push(k.customVertexShaderID),w.push(k.customFragmentShaderID)),k.defines!==void 0)for(const P in k.defines)w.push(P),w.push(k.defines[P]);return k.isRawShaderMaterial===!1&&(v(w,k),M(w,k),w.push(i.outputColorSpace)),w.push(k.customProgramCacheKey),w.join()}function v(k,w){k.push(w.precision),k.push(w.outputColorSpace),k.push(w.envMapMode),k.push(w.envMapCubeUVHeight),k.push(w.mapUv),k.push(w.alphaMapUv),k.push(w.lightMapUv),k.push(w.aoMapUv),k.push(w.bumpMapUv),k.push(w.normalMapUv),k.push(w.displacementMapUv),k.push(w.emissiveMapUv),k.push(w.metalnessMapUv),k.push(w.roughnessMapUv),k.push(w.anisotropyMapUv),k.push(w.clearcoatMapUv),k.push(w.clearcoatNormalMapUv),k.push(w.clearcoatRoughnessMapUv),k.push(w.iridescenceMapUv),k.push(w.iridescenceThicknessMapUv),k.push(w.sheenColorMapUv),k.push(w.sheenRoughnessMapUv),k.push(w.specularMapUv),k.push(w.specularColorMapUv),k.push(w.specularIntensityMapUv),k.push(w.transmissionMapUv),k.push(w.thicknessMapUv),k.push(w.combine),k.push(w.fogExp2),k.push(w.sizeAttenuation),k.push(w.morphTargetsCount),k.push(w.morphAttributeCount),k.push(w.numDirLights),k.push(w.numPointLights),k.push(w.numSpotLights),k.push(w.numSpotLightMaps),k.push(w.numHemiLights),k.push(w.numRectAreaLights),k.push(w.numDirLightShadows),k.push(w.numPointLightShadows),k.push(w.numSpotLightShadows),k.push(w.numSpotLightShadowsWithMaps),k.push(w.numLightProbes),k.push(w.shadowMapType),k.push(w.toneMapping),k.push(w.numClippingPlanes),k.push(w.numClipIntersection),k.push(w.depthPacking)}function M(k,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),k.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),k.push(s.mask)}function y(k){const w=b[k.type];let P;if(w){const z=nn[w];P=tu.clone(z.uniforms)}else P=k.uniforms;return P}function E(k,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new Xm(i,w,k,o),d.push(P),h.set(w,P)),P}function A(k){if(--k.usedTimes===0){const w=d.indexOf(k);d[w]=d[d.length-1],d.pop(),h.delete(k.cacheKey),k.destroy()}}function T(k){c.remove(k)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:I}}function jm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function n(a){i.delete(a)}function r(a,s,c){i.get(a)[s]=c}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function Zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uc(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,b,g,p){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:b,renderOrder:h.renderOrder,z:g,group:p},i[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=b,u.renderOrder=h.renderOrder,u.z=g,u.group=p),e++,u}function s(h,f,m,b,g,p){const u=a(h,f,m,b,g,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(h,f,m,b,g,p){const u=a(h,f,m,b,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,f){t.length>1&&t.sort(h||Zm),n.length>1&&n.sort(f||dc),r.length>1&&r.sort(f||dc)}function d(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:s,unshift:c,finish:d,sort:l}}function Jm(){let i=new WeakMap;function e(n,r){const o=i.get(n);let a;return o===void 0?(a=new uc,i.set(n,[a])):r>=o.length?(a=new uc,o.push(a)):a=o[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new Qm,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,o=new tt,a=new tt;function s(l){let d=0,h=0,f=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,b=0,g=0,p=0,u=0,v=0,M=0,y=0,E=0,A=0,T=0;l.sort(n_);for(let k=0,w=l.length;k<w;k++){const P=l[k],z=P.color,F=P.intensity,V=P.distance;let $=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=z.r*F,h+=z.g*F,f+=z.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);T++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,v++}n.directional[m]=H,m++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[g]=H;const W=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,W.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=W.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=$,y++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(z).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const W=P.shadow,j=t.get(P);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,n.pointShadow[b]=j,n.pointShadowMap[b]=$,n.pointShadowMatrix[b]=P.shadow.matrix,M++}n.point[b]=H,b++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[u]=H,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==b||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==v||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==E||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=b,n.hemi.length=u,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,I.directionalLength=m,I.pointLength=b,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=v,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=E,I.numLightProbes=T,n.version=t_++)}function c(l,d){let h=0,f=0,m=0,b=0,g=0;const p=d.matrixWorldInverse;for(let u=0,v=l.length;u<v;u++){const M=l[u];if(M.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(M.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const y=n.rectArea[b];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:s,setupView:c,state:n}}function hc(i){const e=new i_(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function s(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:s,setupLightsView:c,pushLight:o,pushShadow:a}}function r_(i){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new hc(i),e.set(r,[s])):o>=a.length?(s=new hc(i),a.push(s)):s=a[o],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`,s_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],c_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],fc=new tt,Oi=new U,Lo=new U;function l_(i,e,t){let n=new $a;const r=new $e,o=new $e,a=new lt,s=new mu,c=new _u,l={},d=t.maxTextureSize,h={[In]:Dt,[Dt]:In,[gn]:gn},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:o_,fragmentShader:a_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const b=new Vt;b.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(b,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let u=this.type;this.render=function(A,T,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===rd&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Tr);const k=i.getRenderTarget(),w=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(kn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=u!==this.type;F&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach($=>$.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,$=A.length;V<$;V++){const H=A[V],W=H.shadow;if(W===void 0){Ae("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const j=W.getFrameExtents();if(r.multiply(j),o.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/j.x),r.x=o.x*j.x,W.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/j.y),r.y=o.y*j.y,W.mapSize.y=o.y)),W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Bi){if(H.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new cn(r.x,r.y,{format:vi,type:vn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new Yi(r.x,r.y,jt),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=wn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ut,W.map.depthTexture.magFilter=ut}else{H.isPointLight?(W.map=new nl(r.x),W.map.depthTexture=new fu(r.x,dn)):(W.map=new cn(r.x,r.y),W.map.depthTexture=new Yi(r.x,r.y,dn)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=wn;const ae=i.state.buffers.depth.getReversed();this.type===Tr?(W.map.depthTexture.compareFunction=ae?Ha:Va,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ut,W.map.depthTexture.magFilter=ut)}W.camera.updateProjectionMatrix()}const de=W.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<de;ae++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(W.map),i.clear());const ue=W.getViewport(ae);a.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),z.viewport(a)}if(H.isPointLight){const ue=W.camera,Ue=W.matrix,Le=H.distance||ue.far;Le!==ue.far&&(ue.far=Le,ue.updateProjectionMatrix()),Oi.setFromMatrixPosition(H.matrixWorld),ue.position.copy(Oi),Lo.copy(ue.position),Lo.add(s_[ae]),ue.up.copy(c_[ae]),ue.lookAt(Lo),ue.updateMatrixWorld(),Ue.makeTranslation(-Oi.x,-Oi.y,-Oi.z),fc.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),W._frustum.setFromProjectionMatrix(fc,ue.coordinateSystem,ue.reversedDepth)}else W.updateMatrices(H);n=W.getFrustum(),y(T,I,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===Bi&&v(W,I),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(k,w,P)};function v(A,T){const I=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(r.x,r.y,{format:vi,type:vn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,I,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,I,m,g,null)}function M(A,T,I,k){let w=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)w=P;else if(w=I.isPointLight===!0?c:s,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const z=w.uuid,F=T.uuid;let V=l[z];V===void 0&&(V={},l[z]=V);let $=V[F];$===void 0&&($=w.clone(),V[F]=$,T.addEventListener("dispose",E)),w=$}if(w.visible=T.visible,w.wireframe=T.wireframe,k===Bi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=i.properties.get(w);z.light=I}return w}function y(A,T,I,k,w){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const F=e.update(A),V=A.material;if(Array.isArray(V)){const $=F.groups;for(let H=0,W=$.length;H<W;H++){const j=$[H],de=V[j.materialIndex];if(de&&de.visible){const ae=M(A,de,k,w);A.onBeforeShadow(i,A,T,I,F,ae,j),i.renderBufferDirect(I,null,F,ae,A,j),A.onAfterShadow(i,A,T,I,F,ae,j)}}}else if(V.visible){const $=M(A,V,k,w);A.onBeforeShadow(i,A,T,I,F,$,null),i.renderBufferDirect(I,null,F,$,A,null),A.onAfterShadow(i,A,T,I,F,$,null)}}const z=A.children;for(let F=0,V=z.length;F<V;F++)y(z[F],T,I,k,w)}function E(A){A.target.removeEventListener("dispose",E);for(const I in l){const k=l[I],w=A.target.uuid;w in k&&(k[w].dispose(),delete k[w])}}}const d_={[Bo]:zo,[Vo]:Wo,[Ho]:Xo,[ki]:Go,[zo]:Bo,[Wo]:Vo,[Xo]:Ho,[Go]:ki};function u_(i,e){function t(){let R=!1;const le=new lt;let ee=null;const he=new lt(0,0,0,0);return{setMask:function(J){ee!==J&&!R&&(i.colorMask(J,J,J,J),ee=J)},setLocked:function(J){R=J},setClear:function(J,Y,te,Te,it){it===!0&&(J*=Te,Y*=Te,te*=Te),le.set(J,Y,te,Te),he.equals(le)===!1&&(i.clearColor(J,Y,te,Te),he.copy(le))},reset:function(){R=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let R=!1,le=!1,ee=null,he=null,J=null;return{setReversed:function(Y){if(le!==Y){const te=e.get("EXT_clip_control");Y?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),le=Y;const Te=J;J=null,this.setClear(Te)}},getReversed:function(){return le},setTest:function(Y){Y?Z(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Y){ee!==Y&&!R&&(i.depthMask(Y),ee=Y)},setFunc:function(Y){if(le&&(Y=d_[Y]),he!==Y){switch(Y){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Y}},setLocked:function(Y){R=Y},setClear:function(Y){J!==Y&&(le&&(Y=1-Y),i.clearDepth(Y),J=Y)},reset:function(){R=!1,ee=null,he=null,J=null,le=!1}}}function r(){let R=!1,le=null,ee=null,he=null,J=null,Y=null,te=null,Te=null,it=null;return{setTest:function(Ke){R||(Ke?Z(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!R&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,en,hn){(ee!==Ke||he!==en||J!==hn)&&(i.stencilFunc(Ke,en,hn),ee=Ke,he=en,J=hn)},setOp:function(Ke,en,hn){(Y!==Ke||te!==en||Te!==hn)&&(i.stencilOp(Ke,en,hn),Y=Ke,te=en,Te=hn)},setLocked:function(Ke){R=Ke},setClear:function(Ke){it!==Ke&&(i.clearStencil(Ke),it=Ke)},reset:function(){R=!1,le=null,ee=null,he=null,J=null,Y=null,te=null,Te=null,it=null}}}const o=new t,a=new n,s=new r,c=new WeakMap,l=new WeakMap;let d={},h={},f=new WeakMap,m=[],b=null,g=!1,p=null,u=null,v=null,M=null,y=null,E=null,A=null,T=new Be(0,0,0),I=0,k=!1,w=null,P=null,z=null,F=null,V=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=W>=2);let de=null,ae={};const ue=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Le=new lt().fromArray(ue),at=new lt().fromArray(Ue);function ot(R,le,ee,he){const J=new Uint8Array(4),Y=i.createTexture();i.bindTexture(R,Y),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<ee;te++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(le+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Y}const q={};q[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ki),De(!1),ht(ds),Z(i.CULL_FACE),Ye(kn);function Z(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function pe(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Ce(R,le){return h[R]!==le?(i.bindFramebuffer(R,le),h[R]=le,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function be(R,le){let ee=m,he=!1;if(R){ee=f.get(le),ee===void 0&&(ee=[],f.set(le,ee));const J=R.textures;if(ee.length!==J.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,te=J.length;Y<te;Y++)ee[Y]=i.COLOR_ATTACHMENT0+Y;ee.length=J.length,he=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,he=!0);he&&i.drawBuffers(ee)}function He(R){return b!==R?(i.useProgram(R),b=R,!0):!1}const bt={[Wn]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[sd]:i.FUNC_REVERSE_SUBTRACT};bt[cd]=i.MIN,bt[ld]=i.MAX;const ze={[dd]:i.ZERO,[ud]:i.ONE,[hd]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[gd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[kd]:i.CONSTANT_COLOR,[xd]:i.ONE_MINUS_CONSTANT_COLOR,[vd]:i.CONSTANT_ALPHA,[wd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(R,le,ee,he,J,Y,te,Te,it,Ke){if(R===kn){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),R!==od){if(R!==p||Ke!==k){if((u!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),u=Wn,y=Wn),Ke)switch(R){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.ONE,i.ONE);break;case hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",R);break}else switch(R){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hs:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fs:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",R);break}v=null,M=null,E=null,A=null,T.set(0,0,0),I=0,p=R,k=Ke}return}J=J||le,Y=Y||ee,te=te||he,(le!==u||J!==y)&&(i.blendEquationSeparate(bt[le],bt[J]),u=le,y=J),(ee!==v||he!==M||Y!==E||te!==A)&&(i.blendFuncSeparate(ze[ee],ze[he],ze[Y],ze[te]),v=ee,M=he,E=Y,A=te),(Te.equals(T)===!1||it!==I)&&(i.blendColor(Te.r,Te.g,Te.b,it),T.copy(Te),I=it),p=R,k=!1}function Qe(R,le){R.side===gn?pe(i.CULL_FACE):Z(i.CULL_FACE);let ee=R.side===Dt;le&&(ee=!ee),De(ee),R.blending===bi&&R.transparent===!1?Ye(kn):Ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),o.setMask(R.colorWrite);const he=R.stencilWrite;s.setTest(he),he&&(s.setMask(R.stencilWriteMask),s.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),s.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(R){w!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),w=R)}function ht(R){R!==nd?(Z(i.CULL_FACE),R!==P&&(R===ds?i.cullFace(i.BACK):R===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),P=R}function C(R){R!==z&&(H&&i.lineWidth(R),z=R)}function ft(R,le,ee){R?(Z(i.POLYGON_OFFSET_FILL),(F!==le||V!==ee)&&(i.polygonOffset(le,ee),F=le,V=ee)):pe(i.POLYGON_OFFSET_FILL)}function qe(R){R?Z(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function nt(R){R===void 0&&(R=i.TEXTURE0+$-1),de!==R&&(i.activeTexture(R),de=R)}function ke(R,le,ee){ee===void 0&&(de===null?ee=i.TEXTURE0+$-1:ee=de);let he=ae[ee];he===void 0&&(he={type:void 0,texture:void 0},ae[ee]=he),(he.type!==R||he.texture!==le)&&(de!==ee&&(i.activeTexture(ee),de=ee),i.bindTexture(R,le||q[R]),he.type=R,he.texture=le)}function S(){const R=ae[de];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function X(){try{i.texSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function K(){try{i.texSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function ne(){try{i.texStorage2D(...arguments)}catch(R){We("WebGLState:",R)}}function ge(){try{i.texStorage3D(...arguments)}catch(R){We("WebGLState:",R)}}function Ee(){try{i.texImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function Q(){try{i.texImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function re(R){Le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Le.copy(R))}function _e(R){at.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),at.copy(R))}function xe(R,le){let ee=l.get(le);ee===void 0&&(ee=new WeakMap,l.set(le,ee));let he=ee.get(R);he===void 0&&(he=i.getUniformBlockIndex(le,R.name),ee.set(R,he))}function ie(R,le){const he=l.get(le).get(R);c.get(le)!==he&&(i.uniformBlockBinding(le,he,R.__bindingPointIndex),c.set(le,he))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},de=null,ae={},h={},f=new WeakMap,m=[],b=null,g=!1,p=null,u=null,v=null,M=null,y=null,E=null,A=null,T=new Be(0,0,0),I=0,k=!1,w=null,P=null,z=null,F=null,V=null,Le.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),s.reset()}return{buffers:{color:o,depth:a,stencil:s},enable:Z,disable:pe,bindFramebuffer:Ce,drawBuffers:be,useProgram:He,setBlending:Ye,setMaterial:Qe,setFlipSided:De,setCullFace:ht,setLineWidth:C,setPolygonOffset:ft,setScissorTest:qe,activeTexture:nt,bindTexture:ke,unbindTexture:S,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:Ee,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:ie,texStorage2D:ne,texStorage3D:ge,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:ve,scissor:re,viewport:_e,reset:Ie}}function h_(i,e,t,n,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(S,_){return m?new OffscreenCanvas(S,_):$i("canvas")}function g(S,_,L){let X=1;const K=ke(S);if((K.width>L||K.height>L)&&(X=L/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const G=Math.floor(X*K.width),ve=Math.floor(X*K.height);h===void 0&&(h=b(G,ve));const ne=_?b(G,ve):h;return ne.width=G,ne.height=ve,ne.getContext("2d").drawImage(S,0,0,G,ve),Ae("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+ve+")."),ne}else return"data"in S&&Ae("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){i.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(S,_,L,X,K=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let G=_;if(_===i.RED&&(L===i.FLOAT&&(G=i.R32F),L===i.HALF_FLOAT&&(G=i.R16F),L===i.UNSIGNED_BYTE&&(G=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.R8UI),L===i.UNSIGNED_SHORT&&(G=i.R16UI),L===i.UNSIGNED_INT&&(G=i.R32UI),L===i.BYTE&&(G=i.R8I),L===i.SHORT&&(G=i.R16I),L===i.INT&&(G=i.R32I)),_===i.RG&&(L===i.FLOAT&&(G=i.RG32F),L===i.HALF_FLOAT&&(G=i.RG16F),L===i.UNSIGNED_BYTE&&(G=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RG8UI),L===i.UNSIGNED_SHORT&&(G=i.RG16UI),L===i.UNSIGNED_INT&&(G=i.RG32UI),L===i.BYTE&&(G=i.RG8I),L===i.SHORT&&(G=i.RG16I),L===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGB8UI),L===i.UNSIGNED_SHORT&&(G=i.RGB16UI),L===i.UNSIGNED_INT&&(G=i.RGB32UI),L===i.BYTE&&(G=i.RGB8I),L===i.SHORT&&(G=i.RGB16I),L===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),L===i.UNSIGNED_INT&&(G=i.RGBA32UI),L===i.BYTE&&(G=i.RGBA8I),L===i.SHORT&&(G=i.RGBA16I),L===i.INT&&(G=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),_===i.RGBA){const ve=K?Nr:Ve.getTransfer(X);L===i.FLOAT&&(G=i.RGBA32F),L===i.HALF_FLOAT&&(G=i.RGBA16F),L===i.UNSIGNED_BYTE&&(G=ve===Ze?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(S,_){let L;return S?_===null||_===dn||_===Xi?L=i.DEPTH24_STENCIL8:_===jt?L=i.DEPTH32F_STENCIL8:_===Wi&&(L=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===dn||_===Xi?L=i.DEPTH_COMPONENT24:_===jt?L=i.DEPTH_COMPONENT32F:_===Wi&&(L=i.DEPTH_COMPONENT16),L}function E(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==ut&&S.minFilter!==yt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){const _=S.target;_.removeEventListener("dispose",A),I(_),_.isVideoTexture&&d.delete(_)}function T(S){const _=S.target;_.removeEventListener("dispose",T),w(_)}function I(S){const _=n.get(S);if(_.__webglInit===void 0)return;const L=S.source,X=f.get(L);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&k(S),Object.keys(X).length===0&&f.delete(L)}n.remove(S)}function k(S){const _=n.get(S);i.deleteTexture(_.__webglTexture);const L=S.source,X=f.get(L);delete X[_.__cacheKey],a.memory.textures--}function w(S){const _=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[X][K]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=S.textures;for(let X=0,K=L.length;X<K;X++){const G=n.get(L[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(L[X])}n.remove(S)}let P=0;function z(){P=0}function F(){const S=P;return S>=r.maxTextures&&Ae("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function V(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function $(S,_){const L=n.get(S);if(S.isVideoTexture&&qe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){const X=S.image;if(X===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{q(L,S,_);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function H(S,_){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){q(L,S,_);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function W(S,_){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){q(L,S,_);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function j(S,_){const L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){Z(L,S,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const de={[Yo]:i.REPEAT,[Bt]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ae={[ut]:i.NEAREST,[yd]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ue={[Td]:i.NEVER,[Dd]:i.ALWAYS,[Cd]:i.LESS,[Va]:i.LEQUAL,[Rd]:i.EQUAL,[Ha]:i.GEQUAL,[Pd]:i.GREATER,[Ld]:i.NOTEQUAL};function Ue(S,_){if(_.type===jt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yt||_.magFilter===Jr||_.magFilter===tr||_.magFilter===$n||_.minFilter===yt||_.minFilter===Jr||_.minFilter===tr||_.minFilter===$n)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,de[_.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,de[_.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,de[_.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ut||_.minFilter!==tr&&_.minFilter!==$n||_.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Le(S,_){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));const X=_.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const G=V(_);if(G!==S.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),K[G].usedTimes++;const ve=K[S.__cacheKey];ve!==void 0&&(K[S.__cacheKey].usedTimes--,ve.usedTimes===0&&k(_)),S.__cacheKey=G,S.__webglTexture=K[G].texture}return L}function at(S,_,L){return Math.floor(Math.floor(S/L)/_)}function ot(S,_,L,X){const G=S.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,X,_.data);else{G.sort((Q,re)=>Q.start-re.start);let ve=0;for(let Q=1;Q<G.length;Q++){const re=G[ve],_e=G[Q],xe=re.start+re.count,ie=at(_e.start,_.width,4),Ie=at(re.start,_.width,4);_e.start<=xe+1&&ie===Ie&&at(_e.start+_e.count-1,_.width,4)===ie?re.count=Math.max(re.count,_e.start+_e.count-re.start):(++ve,G[ve]=_e)}G.length=ve+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),ge=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,re=G.length;Q<re;Q++){const _e=G[Q],xe=Math.floor(_e.start/4),ie=Math.ceil(_e.count/4),Ie=xe%_.width,R=Math.floor(xe/_.width),le=ie,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ie,R,le,ee,L,X,_.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function q(S,_,L){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const K=Le(S,_),G=_.source;t.bindTexture(X,S.__webglTexture,i.TEXTURE0+L);const ve=n.get(G);if(G.version!==ve.__version||K===!0){t.activeTexture(i.TEXTURE0+L);const ne=Ve.getPrimaries(Ve.workingColorSpace),ge=_.colorSpace===Rn?null:Ve.getPrimaries(_.colorSpace),Ee=_.colorSpace===Rn||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=g(_.image,!1,r.maxTextureSize);Q=nt(_,Q);const re=o.convert(_.format,_.colorSpace),_e=o.convert(_.type);let xe=M(_.internalFormat,re,_e,_.colorSpace,_.isVideoTexture);Ue(X,_);let ie;const Ie=_.mipmaps,R=_.isVideoTexture!==!0,le=ve.__version===void 0||K===!0,ee=G.dataReady,he=E(_,Q);if(_.isDepthTexture)xe=y(_.format===qn,_.type),le&&(R?t.texStorage2D(i.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,re,_e,null));else if(_.isDataTexture)if(Ie.length>0){R&&le&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let J=0,Y=Ie.length;J<Y;J++)ie=Ie[J],R?ee&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):t.texImage2D(i.TEXTURE_2D,J,xe,ie.width,ie.height,0,re,_e,ie.data);_.generateMipmaps=!1}else R?(le&&t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height),ee&&ot(_,Q,re,_e)):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,re,_e,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){R&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Ie[0].width,Ie[0].height,Q.depth);for(let J=0,Y=Ie.length;J<Y;J++)if(ie=Ie[J],_.format!==Zt)if(re!==null)if(R){if(ee)if(_.layerUpdates.size>0){const te=Ws(ie.width,ie.height,_.format,_.type);for(const Te of _.layerUpdates){const it=ie.data.subarray(Te*te/ie.data.BYTES_PER_ELEMENT,(Te+1)*te/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Te,ie.width,ie.height,1,re,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,xe,ie.width,ie.height,Q.depth,0,ie.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ie.width,ie.height,Q.depth,re,_e,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,xe,ie.width,ie.height,Q.depth,0,re,_e,ie.data)}else{R&&le&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ie[0].width,Ie[0].height);for(let J=0,Y=Ie.length;J<Y;J++)ie=Ie[J],_.format!==Zt?re!==null?R?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ie.width,ie.height,re,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,J,xe,ie.width,ie.height,0,ie.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?ee&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ie.width,ie.height,re,_e,ie.data):t.texImage2D(i.TEXTURE_2D,J,xe,ie.width,ie.height,0,re,_e,ie.data)}else if(_.isDataArrayTexture)if(R){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Q.width,Q.height,Q.depth),ee)if(_.layerUpdates.size>0){const J=Ws(Q.width,Q.height,_.format,_.type);for(const Y of _.layerUpdates){const te=Q.data.subarray(Y*J/Q.data.BYTES_PER_ELEMENT,(Y+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,re,_e,te)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(_.isData3DTexture)R?(le&&t.texStorage3D(i.TEXTURE_3D,he,xe,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,re,_e,Q.data)):t.texImage3D(i.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,re,_e,Q.data);else if(_.isFramebufferTexture){if(le)if(R)t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height);else{let J=Q.width,Y=Q.height;for(let te=0;te<he;te++)t.texImage2D(i.TEXTURE_2D,te,xe,J,Y,0,re,_e,null),J>>=1,Y>>=1}}else if(Ie.length>0){if(R&&le){const J=ke(Ie[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,J.width,J.height)}for(let J=0,Y=Ie.length;J<Y;J++)ie=Ie[J],R?ee&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re,_e,ie):t.texImage2D(i.TEXTURE_2D,J,xe,re,_e,ie);_.generateMipmaps=!1}else if(R){if(le){const J=ke(Q);t.texStorage2D(i.TEXTURE_2D,he,xe,J.width,J.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,_e,Q)}else t.texImage2D(i.TEXTURE_2D,0,xe,re,_e,Q);p(_)&&u(X),ve.__version=G.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Z(S,_,L){if(_.image.length!==6)return;const X=Le(S,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);const G=n.get(K);if(K.version!==G.__version||X===!0){t.activeTexture(i.TEXTURE0+L);const ve=Ve.getPrimaries(Ve.workingColorSpace),ne=_.colorSpace===Rn?null:Ve.getPrimaries(_.colorSpace),ge=_.colorSpace===Rn||ve===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,re=[];for(let Y=0;Y<6;Y++)!Ee&&!Q?re[Y]=g(_.image[Y],!0,r.maxCubemapSize):re[Y]=Q?_.image[Y].image:_.image[Y],re[Y]=nt(_,re[Y]);const _e=re[0],xe=o.convert(_.format,_.colorSpace),ie=o.convert(_.type),Ie=M(_.internalFormat,xe,ie,_.colorSpace),R=_.isVideoTexture!==!0,le=G.__version===void 0||X===!0,ee=K.dataReady;let he=E(_,_e);Ue(i.TEXTURE_CUBE_MAP,_);let J;if(Ee){R&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ie,_e.width,_e.height);for(let Y=0;Y<6;Y++){J=re[Y].mipmaps;for(let te=0;te<J.length;te++){const Te=J[te];_.format!==Zt?xe!==null?R?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,Ie,Te.width,Te.height,0,Te.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,0,0,Te.width,Te.height,xe,ie,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,Ie,Te.width,Te.height,0,xe,ie,Te.data)}}}else{if(J=_.mipmaps,R&&le){J.length>0&&he++;const Y=ke(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ie,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){R?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,re[Y].width,re[Y].height,xe,ie,re[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,re[Y].width,re[Y].height,0,xe,ie,re[Y].data);for(let te=0;te<J.length;te++){const it=J[te].image[Y].image;R?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,0,0,it.width,it.height,xe,ie,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,Ie,it.width,it.height,0,xe,ie,it.data)}}else{R?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,ie,re[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ie,xe,ie,re[Y]);for(let te=0;te<J.length;te++){const Te=J[te];R?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,0,0,xe,ie,Te.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,Ie,xe,ie,Te.image[Y])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function pe(S,_,L,X,K,G){const ve=o.convert(L.format,L.colorSpace),ne=o.convert(L.type),ge=M(L.internalFormat,ve,ne,L.colorSpace),Ee=n.get(_),Q=n.get(L);if(Q.__renderTarget=_,!Ee.__hasExternalTextures){const re=Math.max(1,_.width>>G),_e=Math.max(1,_.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,ge,re,_e,_.depth,0,ve,ne,null):t.texImage2D(K,G,ge,re,_e,0,ve,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ft(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Q.__webglTexture,0,C(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Q.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(S,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,G=y(_.stencilBuffer,K),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),G,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,S)}else{const X=_.textures;for(let K=0;K<X.length;K++){const G=X[K],ve=o.convert(G.format,G.colorSpace),ne=o.convert(G.type),ge=M(G.internalFormat,ve,ne,G.colorSpace);ft(_)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),ge,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),ge,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ge,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(S,_,L){const X=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ee=o.convert(_.depthTexture.format),Q=o.convert(_.depthTexture.type);let re;_.depthTexture.format===wn?re=i.DEPTH_COMPONENT24:_.depthTexture.format===qn&&(re=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,re,_.width,_.height,0,Ee,Q,null)}}else $(_.depthTexture,0);const G=K.__webglTexture,ve=C(_),ne=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,ge=_.depthTexture.format===qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===wn)ft(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ne,G,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ne,G,0);else if(_.depthTexture.format===qn)ft(_)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ne,G,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ne,G,0);else throw new Error("Unknown depthTexture format")}function He(S){const _=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let X=0;X<6;X++)be(_.__webglFramebuffer[X],S,X);else{const X=S.texture.mipmaps;X&&X.length>0?be(_.__webglFramebuffer[0],S,0):be(_.__webglFramebuffer,S,0)}else if(L){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Ce(_.__webglDepthbuffer[X],S,!1);else{const K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else{const X=S.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ce(_.__webglDepthbuffer,S,!1);else{const K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(S,_,L){const X=n.get(S);_!==void 0&&pe(X.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&He(S)}function ze(S){const _=S.texture,L=n.get(S),X=n.get(_);S.addEventListener("dispose",T);const K=S.textures,G=S.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),G){L.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[ne]=[];for(let ge=0;ge<_.mipmaps.length;ge++)L.__webglFramebuffer[ne][ge]=i.createFramebuffer()}else L.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)L.__webglFramebuffer[ne]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ne=0,ge=K.length;ne<ge;ne++){const Ee=n.get(K[ne]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&ft(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const ge=K[ne];L.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const Ee=o.convert(ge.format,ge.colorSpace),Q=o.convert(ge.type),re=M(ge.internalFormat,Ee,Q,ge.colorSpace,S.isXRRenderTarget===!0),_e=C(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,re,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)pe(L.__webglFramebuffer[ne][ge],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge);else pe(L.__webglFramebuffer[ne],S,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ne=0,ge=K.length;ne<ge;ne++){const Ee=K[ne],Q=n.get(Ee);let re=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Q.__webglTexture),Ue(re,Ee),pe(L.__webglFramebuffer,S,Ee,i.COLOR_ATTACHMENT0+ne,re,0),p(Ee)&&u(re)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ne=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),Ue(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)pe(L.__webglFramebuffer[ge],S,_,i.COLOR_ATTACHMENT0,ne,ge);else pe(L.__webglFramebuffer,S,_,i.COLOR_ATTACHMENT0,ne,0);p(_)&&u(ne),t.unbindTexture()}S.depthBuffer&&He(S)}function Ye(S){const _=S.textures;for(let L=0,X=_.length;L<X;L++){const K=_[L];if(p(K)){const G=v(S),ve=n.get(K).__webglTexture;t.bindTexture(G,ve),u(G),t.unbindTexture()}}}const Qe=[],De=[];function ht(S){if(S.samples>0){if(ft(S)===!1){const _=S.textures,L=S.width,X=S.height;let K=i.COLOR_BUFFER_BIT;const G=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(S),ne=_.length>1;if(ne)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const ge=S.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const Q=n.get(_[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,L,X,0,0,L,X,K,i.NEAREST),c===!0&&(Qe.length=0,De.length=0,Qe.push(i.COLOR_ATTACHMENT0+Ee),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Qe.push(G),De.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const Q=n.get(_[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const _=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C(S){return Math.min(r.maxSamples,S.samples)}function ft(S){const _=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(S){const _=a.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function nt(S,_){const L=S.colorSpace,X=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==wi&&L!==Rn&&(Ve.getTransfer(L)===Ze?(X!==Zt||K!==Ot)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",L)),_}function ke(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=bt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function f_(i,e){function t(n,r=Rn){let o;const a=Ve.getTransfer(r);if(n===Ot)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===Zt)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===qn)return i.DEPTH_STENCIL;if(n===Fa)return i.RED;if(n===Oa)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Lr)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Cr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Cr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Zo||n===Jo||n===Qo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===jo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na||n===ia||n===ra||n===oa||n===aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ea||n===ta)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===na)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===ia)return o.COMPRESSED_R11_EAC;if(n===ra)return o.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return o.COMPRESSED_RG11_EAC;if(n===aa)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===ca||n===la||n===da||n===ua||n===ha||n===fa||n===pa||n===ma||n===_a||n===ba||n===ga||n===ka||n===xa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===sa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===wa||n===Sa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===va)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ma||n===ya||n===Ea||n===Aa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ma)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
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

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new un({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends jn{constructor(e,t){super();const n=this;let r=null,o=1,a=null,s="local-floor",c=1,l=null,d=null,h=null,f=null,m=null,b=null;const g=typeof XRWebGLBinding<"u",p=new __,u={},v=t.getContextAttributes();let M=null,y=null;const E=[],A=[],T=new $e;let I=null;const k=new Xt;k.viewport=new lt;const w=new Xt;w.viewport=new lt;const P=[k,w],z=new Mu;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=E[q];return Z===void 0&&(Z=new vo,E[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=E[q];return Z===void 0&&(Z=new vo,E[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=E[q];return Z===void 0&&(Z=new vo,E[q]=Z),Z.getHandSpace()};function $(q){const Z=A.indexOf(q.inputSource);if(Z===-1)return;const pe=E[Z];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",W);for(let q=0;q<E.length;q++){const Z=A[q];Z!==null&&(A[q]=null,E[q].disconnect(Z))}F=null,V=null,p.reset();for(const q in u)delete u[q];e.setRenderTarget(M),m=null,f=null,h=null,r=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",H),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?qn:wn,Ce=v.stencil?Xi:dn);const He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};h=this.getBinding(),f=h.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new cn(f.textureWidth,f.textureHeight,{format:Zt,type:Ot,depthTexture:new Yi(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new cn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Ot,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(s),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(q){for(let Z=0;Z<q.removed.length;Z++){const pe=q.removed[Z],Ce=A.indexOf(pe);Ce>=0&&(A[Ce]=null,E[Ce].disconnect(pe))}for(let Z=0;Z<q.added.length;Z++){const pe=q.added[Z];let Ce=A.indexOf(pe);if(Ce===-1){for(let He=0;He<E.length;He++)if(He>=A.length){A.push(pe),Ce=He;break}else if(A[He]===null){A[He]=pe,Ce=He;break}if(Ce===-1)break}const be=E[Ce];be&&be.connect(pe)}}const j=new U,de=new U;function ae(q,Z,pe){j.setFromMatrixPosition(Z.matrixWorld),de.setFromMatrixPosition(pe.matrixWorld);const Ce=j.distanceTo(de),be=Z.projectionMatrix.elements,He=pe.projectionMatrix.elements,bt=be[14]/(be[10]-1),ze=be[14]/(be[10]+1),Ye=(be[9]+1)/be[5],Qe=(be[9]-1)/be[5],De=(be[8]-1)/be[0],ht=(He[8]+1)/He[0],C=bt*De,ft=bt*ht,qe=Ce/(-De+ht),nt=qe*-De;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ke=bt+qe,S=ze+qe,_=C-nt,L=ft+(Ce-nt),X=Ye*ze/S*ke,K=Qe*ze/S*ke;q.projectionMatrix.makePerspective(_,L,X,K,ke,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ue(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Z=q.near,pe=q.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),z.near=w.near=k.near=Z,z.far=w.far=k.far=pe,(F!==z.near||V!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,V=z.far),z.layers.mask=q.layers.mask|6,k.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const Ce=q.parent,be=z.cameras;ue(z,Ce);for(let He=0;He<be.length;He++)ue(be[He],Ce);be.length===2?ae(z,k,w):z.projectionMatrix.copy(k.projectionMatrix),Ue(q,z,Ce)};function Ue(q,Z,pe){pe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ta*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(q){return u[q]};let Le=null;function at(q,Z){if(d=Z.getViewerPose(l||a),b=Z,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ce=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,Ce=!0);for(let ze=0;ze<pe.length;ze++){const Ye=pe[ze];let Qe=null;if(m!==null)Qe=m.getViewport(Ye);else{const ht=h.getViewSubImage(f,Ye);Qe=ht.viewport,ze===0&&(e.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(y))}let De=P[ze];De===void 0&&(De=new Xt,De.layers.enable(ze),De.viewport=new lt,P[ze]=De),De.matrix.fromArray(Ye.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ye.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ze===0&&(z.matrix.copy(De.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ce===!0&&z.cameras.push(De)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const ze=h.getDepthInformation(pe[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(be&&be.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let ze=0;ze<pe.length;ze++){const Ye=pe[ze].camera;if(Ye){let Qe=u[Ye];Qe||(Qe=new ol,u[Ye]=Qe);const De=h.getCameraImage(Ye);Qe.sourceTexture=De}}}}for(let pe=0;pe<E.length;pe++){const Ce=A[pe],be=E[pe];Ce!==null&&be!==void 0&&be.update(Ce,Z,l||a)}Le&&Le(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),b=null}const ot=new ll;ot.setAnimationLoop(at),this.setAnimationLoop=function(q){Le=q},this.dispose=function(){}}}const Hn=new Qt,g_=new tt;function k_(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Qc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,M,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(p,u):u.isMeshToonMaterial?(o(p,u),h(p,u)):u.isMeshPhongMaterial?(o(p,u),d(p,u)):u.isMeshStandardMaterial?(o(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(o(p,u),b(p,u)):u.isMeshDepthMaterial?o(p,u):u.isMeshDistanceMaterial?(o(p,u),g(p,u)):u.isMeshNormalMaterial?o(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?c(p,u,v,M):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Dt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Dt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,Hn.copy(y),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(Hn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,v,M){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=M*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Dt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function b(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x_(i,e,t,n){let r={},o={},a=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function l(v,M){let y=r[v.id];y===void 0&&(b(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const E=M.program;n.updateUBOMapping(v,E);const A=e.render.frame;o[v.id]!==A&&(f(v),o[v.id]=A)}function d(v){const M=h();v.__bindingPointIndex=M;const y=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function h(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=r[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,T=y.length;A<T;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let k=0,w=I.length;k<w;k++){const P=I[k];if(m(P,A,k,E)===!0){const z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<F.length;$++){const H=F[$],W=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,M,y,E){const A=v.value,T=M+"_"+y;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const I=E[T];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[T]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function b(v){const M=v.uniforms;let y=0;const E=16;for(let T=0,I=M.length;T<I;T++){const k=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,P=k.length;w<P;w++){const z=k[w],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,$=F.length;V<$;V++){const H=F[V],W=g(H),j=y%E,de=j%W.boundary,ae=j+de;y+=de,ae!==0&&E-ae<W.storage&&(y+=E-ae),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=W.storage}}}const A=y%E;return A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function g(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function u(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},o={}}return{bind:c,update:l,dispose:u}}const v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tn=null;function w_(){return tn===null&&(tn=new rl(v_,16,16,vi,vn),tn.name="DFG_LUT",tn.minFilter=yt,tn.magFilter=yt,tn.wrapS=Bt,tn.wrapT=Bt,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}class pl{constructor(e={}){const{canvas:t=Id(),context:n=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Ot}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=a;const g=m,p=new Set([za,Ba,Oa]),u=new Set([Ot,dn,Wi,Xi,Ua,Na]),v=new Uint32Array(4),M=new Int32Array(4);let y=null,E=null;const A=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let w=!1;this._outputColorSpace=Tt;let P=0,z=0,F=null,V=-1,$=null;const H=new lt,W=new lt;let j=null;const de=new Be(0);let ae=0,ue=t.width,Ue=t.height,Le=1,at=null,ot=null;const q=new lt(0,0,ue,Ue),Z=new lt(0,0,ue,Ue);let pe=!1;const Ce=new $a;let be=!1,He=!1;const bt=new tt,ze=new U,Ye=new lt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ht(){return F===null?Le:1}let C=n;function ft(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),C===null){const D="webgl2";if(C=ft(D,x),C===null)throw ft(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw We("WebGLRenderer: "+x.message),x}let qe,nt,ke,S,_,L,X,K,G,ve,ne,ge,Ee,Q,re,_e,xe,ie,Ie,R,le,ee,he,J;function Y(){qe=new wp(C),qe.init(),ee=new f_(C,qe),nt=new fp(C,qe,e,ee),ke=new u_(C,qe),nt.reversedDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),S=new yp(C),_=new jm,L=new h_(C,qe,ke,_,nt,ee,S),X=new mp(k),K=new vp(k),G=new Tu(C),he=new up(C,G),ve=new Sp(C,G,S,he),ne=new Ap(C,ve,G,S),Ie=new Ep(C,nt,L),_e=new pp(_),ge=new Km(k,X,K,qe,nt,he,_e),Ee=new k_(k,_),Q=new Jm,re=new r_(qe),ie=new dp(k,X,K,ke,ne,b,c),xe=new l_(k,ne,nt),J=new x_(C,S,nt,ke),R=new hp(C,qe,S),le=new Mp(C,qe,S),S.programs=ge.programs,k.capabilities=nt,k.extensions=qe,k.properties=_,k.renderLists=Q,k.shadowMap=xe,k.state=ke,k.info=S}Y(),g!==Ot&&(I=new Cp(g,t.width,t.height,r,o));const te=new b_(k,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=qe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=qe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(x){x!==void 0&&(Le=x,this.setSize(ue,Ue,!1))},this.getSize=function(x){return x.set(ue,Ue)},this.setSize=function(x,D,B=!0){if(te.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=x,Ue=D,t.width=Math.floor(x*Le),t.height=Math.floor(D*Le),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(ue*Le,Ue*Le).floor()},this.setDrawingBufferSize=function(x,D,B){ue=x,Ue=D,Le=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(g===Ot){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(H)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,D,B,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,D,B,O),ke.viewport(H.copy(q).multiplyScalar(Le).round())},this.getScissor=function(x){return x.copy(Z)},this.setScissor=function(x,D,B,O){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,D,B,O),ke.scissor(W.copy(Z).multiplyScalar(Le).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(x){ke.setScissorTest(pe=x)},this.setOpaqueSort=function(x){at=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,B=!0){let O=0;if(x){let N=!1;if(F!==null){const oe=F.texture.format;N=p.has(oe)}if(N){const oe=F.texture.type,fe=u.has(oe),ce=ie.getClearColor(),me=ie.getClearAlpha(),we=ce.r,ye=ce.g,Se=ce.b;fe?(v[0]=we,v[1]=ye,v[2]=Se,v[3]=me,C.clearBufferuiv(C.COLOR,0,v)):(M[0]=we,M[1]=ye,M[2]=Se,M[3]=me,C.clearBufferiv(C.COLOR,0,M))}else O|=C.COLOR_BUFFER_BIT}D&&(O|=C.DEPTH_BUFFER_BIT),B&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ie.dispose(),Q.dispose(),re.dispose(),_.dispose(),X.dispose(),K.dispose(),ne.dispose(),he.dispose(),J.dispose(),ge.dispose(),te.dispose(),te.removeEventListener("sessionstart",ts),te.removeEventListener("sessionend",ns),Un.stop()};function Te(x){x.preventDefault(),gs("WebGLRenderer: Context Lost."),w=!0}function it(){gs("WebGLRenderer: Context Restored."),w=!1;const x=S.autoReset,D=xe.enabled,B=xe.autoUpdate,O=xe.needsUpdate,N=xe.type;Y(),S.autoReset=x,xe.enabled=D,xe.autoUpdate=B,xe.needsUpdate=O,xe.type=N}function Ke(x){We("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function en(x){const D=x.target;D.removeEventListener("dispose",en),hn(D)}function hn(x){Ll(x),_.remove(x)}function Ll(x){const D=_.get(x).programs;D!==void 0&&(D.forEach(function(B){ge.releaseProgram(B)}),x.isShaderMaterial&&ge.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,O,N,oe){D===null&&(D=Qe);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ce=Il(x,D,B,O,N);ke.setMaterial(O,fe);let me=B.index,we=1;if(O.wireframe===!0){if(me=ve.getWireframeAttribute(B),me===void 0)return;we=2}const ye=B.drawRange,Se=B.attributes.position;let Ne=ye.start*we,Je=(ye.start+ye.count)*we;oe!==null&&(Ne=Math.max(Ne,oe.start*we),Je=Math.min(Je,(oe.start+oe.count)*we)),me!==null?(Ne=Math.max(Ne,0),Je=Math.min(Je,me.count)):Se!=null&&(Ne=Math.max(Ne,0),Je=Math.min(Je,Se.count));const st=Je-Ne;if(st<0||st===1/0)return;he.setup(N,O,ce,B,me);let ct,et=R;if(me!==null&&(ct=G.get(me),et=le,et.setIndex(ct)),N.isMesh)O.wireframe===!0?(ke.setLineWidth(O.wireframeLinewidth*ht()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(N.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),ke.setLineWidth(Me*ht()),N.isLineSegments?et.setMode(C.LINES):N.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else N.isPoints?et.setMode(C.POINTS):N.isSprite&&et.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,je=N._multiDrawCounts,Ge=N._multiDrawCount,It=me?G.get(me).bytesPerElement:1,Jn=_.get(O).currentProgram.getUniforms();for(let Ut=0;Ut<Ge;Ut++)Jn.setValue(C,"_gl_DrawID",Ut),et.render(Me[Ut]/It,je[Ut])}else if(N.isInstancedMesh)et.renderInstances(Ne,st,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,je=Math.min(B.instanceCount,Me);et.renderInstances(Ne,st,je)}else et.render(Ne,st)};function es(x,D,B){x.transparent===!0&&x.side===gn&&x.forceSinglePass===!1?(x.side=Dt,x.needsUpdate=!0,er(x,D,B),x.side=In,x.needsUpdate=!0,er(x,D,B),x.side=gn):er(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),E=re.get(B),E.init(D),T.push(E),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(E.pushLight(N),N.castShadow&&E.pushShadow(N))}),E.setupLights();const O=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ce=oe[fe];es(ce,B,N),O.add(ce)}else es(oe,B,N),O.add(oe)}),E=T.pop(),O},this.compileAsync=function(x,D,B=null){const O=this.compile(x,D,B);return new Promise(N=>{function oe(){if(O.forEach(function(fe){_.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){N(x);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Yr=null;function Dl(x){Yr&&Yr(x)}function ts(){Un.stop()}function ns(){Un.start()}const Un=new ll;Un.setAnimationLoop(Dl),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(x){Yr=x,te.setAnimationLoop(x),x===null?Un.stop():Un.start()},te.addEventListener("sessionstart",ts),te.addEventListener("sessionend",ns),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const B=te.enabled===!0&&te.isPresenting===!0,O=I!==null&&(F===null||B)&&I.begin(k,F);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),x.isScene===!0&&x.onBeforeRender(k,x,D,F),E=re.get(x,T.length),E.init(D),T.push(E),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ce.setFromProjectionMatrix(bt,on,D.reversedDepth),He=this.localClippingEnabled,be=_e.init(this.clippingPlanes,He),y=Q.get(x,A.length),y.init(),A.push(y),te.enabled===!0&&te.isPresenting===!0){const fe=k.xr.getDepthSensingMesh();fe!==null&&Kr(fe,D,-1/0,k.sortObjects)}Kr(x,D,0,k.sortObjects),y.finish(),k.sortObjects===!0&&y.sort(at,ot),De=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,De&&ie.addToRenderList(y,x),this.info.render.frame++,be===!0&&_e.beginShadows();const N=E.state.shadowsArray;if(xe.render(N,x,D),be===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&I.hasRenderPass())===!1){const fe=y.opaque,ce=y.transmissive;if(E.setupLights(),D.isArrayCamera){const me=D.cameras;if(ce.length>0)for(let we=0,ye=me.length;we<ye;we++){const Se=me[we];rs(fe,ce,x,Se)}De&&ie.render(x);for(let we=0,ye=me.length;we<ye;we++){const Se=me[we];is(y,x,Se,Se.viewport)}}else ce.length>0&&rs(fe,ce,x,D),De&&ie.render(x),is(y,x,D)}F!==null&&z===0&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),O&&I.end(k),x.isScene===!0&&x.onAfterRender(k,x,D),he.resetDefaultState(),V=-1,$=null,T.pop(),T.length>0?(E=T[T.length-1],be===!0&&_e.setGlobalState(k.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Kr(x,D,B,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ce.intersectsSprite(x)){O&&Ye.setFromMatrixPosition(x.matrixWorld).applyMatrix4(bt);const fe=ne.update(x),ce=x.material;ce.visible&&y.push(x,fe,ce,B,Ye.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ce.intersectsObject(x))){const fe=ne.update(x),ce=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ye.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(x.matrixWorld).applyMatrix4(bt)),Array.isArray(ce)){const me=fe.groups;for(let we=0,ye=me.length;we<ye;we++){const Se=me[we],Ne=ce[Se.materialIndex];Ne&&Ne.visible&&y.push(x,fe,Ne,B,Ye.z,Se)}}else ce.visible&&y.push(x,fe,ce,B,Ye.z,null)}}const oe=x.children;for(let fe=0,ce=oe.length;fe<ce;fe++)Kr(oe[fe],D,B,O)}function is(x,D,B,O){const{opaque:N,transmissive:oe,transparent:fe}=x;E.setupLightsView(B),be===!0&&_e.setGlobalState(k.clippingPlanes,B),O&&ke.viewport(H.copy(O)),N.length>0&&Qi(N,D,B),oe.length>0&&Qi(oe,D,B),fe.length>0&&Qi(fe,D,B),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rs(x,D,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Ne=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new cn(1,1,{generateMipmaps:!0,type:Ne?vn:Ot,minFilter:$n,samples:nt.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const oe=E.state.transmissionRenderTarget[O.id],fe=O.viewport||H;oe.setSize(fe.z*k.transmissionResolutionScale,fe.w*k.transmissionResolutionScale);const ce=k.getRenderTarget(),me=k.getActiveCubeFace(),we=k.getActiveMipmapLevel();k.setRenderTarget(oe),k.getClearColor(de),ae=k.getClearAlpha(),ae<1&&k.setClearColor(16777215,.5),k.clear(),De&&ie.render(B);const ye=k.toneMapping;k.toneMapping=sn;const Se=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),be===!0&&_e.setGlobalState(k.clippingPlanes,O),Qi(x,B,O),L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Je=0,st=D.length;Je<st;Je++){const ct=D[Je],{object:et,geometry:Me,material:je,group:Ge}=ct;if(je.side===gn&&et.layers.test(O.layers)){const It=je.side;je.side=Dt,je.needsUpdate=!0,os(et,B,O,Me,je,Ge),je.side=It,je.needsUpdate=!0,Ne=!0}}Ne===!0&&(L.updateMultisampleRenderTarget(oe),L.updateRenderTargetMipmap(oe))}k.setRenderTarget(ce,me,we),k.setClearColor(de,ae),Se!==void 0&&(O.viewport=Se),k.toneMapping=ye}function Qi(x,D,B){const O=D.isScene===!0?D.overrideMaterial:null;for(let N=0,oe=x.length;N<oe;N++){const fe=x[N],{object:ce,geometry:me,group:we}=fe;let ye=fe.material;ye.allowOverride===!0&&O!==null&&(ye=O),ce.layers.test(B.layers)&&os(ce,D,B,me,ye,we)}}function os(x,D,B,O,N,oe){x.onBeforeRender(k,D,B,O,N,oe),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(k,D,B,O,x,oe),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,k.renderBufferDirect(B,D,O,N,x,oe),N.side=In,N.needsUpdate=!0,k.renderBufferDirect(B,D,O,N,x,oe),N.side=gn):k.renderBufferDirect(B,D,O,N,x,oe),x.onAfterRender(k,D,B,O,N,oe)}function er(x,D,B){D.isScene!==!0&&(D=Qe);const O=_.get(x),N=E.state.lights,oe=E.state.shadowsArray,fe=N.state.version,ce=ge.getParameters(x,N.state,oe,D,B),me=ge.getProgramCacheKey(ce);let we=O.programs;O.environment=x.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(x.isMeshStandardMaterial?K:X).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,we===void 0&&(x.addEventListener("dispose",en),we=new Map,O.programs=we);let ye=we.get(me);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===fe)return ss(x,ce),ye}else ce.uniforms=ge.getUniforms(x),x.onBeforeCompile(ce,k),ye=ge.acquireProgram(ce,me),we.set(me,ye),O.uniforms=ce.uniforms;const Se=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=_e.uniform),ss(x,ce),O.needsLights=Nl(x),O.lightsStateVersion=fe,O.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function as(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ir.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function ss(x,D){const B=_.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Il(x,D,B,O,N){D.isScene!==!0&&(D=Qe),L.resetTextureUnits();const oe=D.fog,fe=O.isMeshStandardMaterial?D.environment:null,ce=F===null?k.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wi,me=(O.isMeshStandardMaterial?K:X).get(O.envMap||fe),we=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ye=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!B.morphAttributes.position,Ne=!!B.morphAttributes.normal,Je=!!B.morphAttributes.color;let st=sn;O.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(st=k.toneMapping);const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=ct!==void 0?ct.length:0,Me=_.get(O),je=E.state.lights;if(be===!0&&(He===!0||x!==$)){const Et=x===$&&O.id===V;_e.setState(O,x,Et)}let Ge=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==je.state.version||Me.outputColorSpace!==ce||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==me||O.fog===!0&&Me.fog!==oe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==_e.numPlanes||Me.numIntersection!==_e.numIntersection)||Me.vertexAlphas!==we||Me.vertexTangents!==ye||Me.morphTargets!==Se||Me.morphNormals!==Ne||Me.morphColors!==Je||Me.toneMapping!==st||Me.morphTargetsCount!==et)&&(Ge=!0):(Ge=!0,Me.__version=O.version);let It=Me.currentProgram;Ge===!0&&(It=er(O,D,N));let Jn=!1,Ut=!1,Ti=!1;const rt=It.getUniforms(),Rt=Me.uniforms;if(ke.useProgram(It.program)&&(Jn=!0,Ut=!0,Ti=!0),O.id!==V&&(V=O.id,Ut=!0),Jn||$!==x){ke.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),rt.setValue(C,"projectionMatrix",x.projectionMatrix),rt.setValue(C,"viewMatrix",x.matrixWorldInverse);const Pt=rt.map.cameraPosition;Pt!==void 0&&Pt.setValue(C,ze.setFromMatrixPosition(x.matrixWorld)),nt.logarithmicDepthBuffer&&rt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&rt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),$!==x&&($=x,Ut=!0,Ti=!0)}if(Me.needsLights&&(je.state.directionalShadowMap.length>0&&rt.setValue(C,"directionalShadowMap",je.state.directionalShadowMap,L),je.state.spotShadowMap.length>0&&rt.setValue(C,"spotShadowMap",je.state.spotShadowMap,L),je.state.pointShadowMap.length>0&&rt.setValue(C,"pointShadowMap",je.state.pointShadowMap,L)),N.isSkinnedMesh){rt.setOptional(C,N,"bindMatrix"),rt.setOptional(C,N,"bindMatrixInverse");const Et=N.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),rt.setValue(C,"boneTexture",Et.boneTexture,L))}N.isBatchedMesh&&(rt.setOptional(C,N,"batchingTexture"),rt.setValue(C,"batchingTexture",N._matricesTexture,L),rt.setOptional(C,N,"batchingIdTexture"),rt.setValue(C,"batchingIdTexture",N._indirectTexture,L),rt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(C,"batchingColorTexture",N._colorsTexture,L));const Ht=B.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Ie.update(N,B,It),(Ut||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,rt.setValue(C,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Rt.envMap.value=me,Rt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Rt.envMapIntensity.value=D.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=w_()),Ut&&(rt.setValue(C,"toneMappingExposure",k.toneMappingExposure),Me.needsLights&&Ul(Rt,Ti),oe&&O.fog===!0&&Ee.refreshFogUniforms(Rt,oe),Ee.refreshMaterialUniforms(Rt,O,Le,Ue,E.state.transmissionRenderTarget[x.id]),Ir.upload(C,as(Me),Rt,L)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ir.upload(C,as(Me),Rt,L),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&rt.setValue(C,"center",N.center),rt.setValue(C,"modelViewMatrix",N.modelViewMatrix),rt.setValue(C,"normalMatrix",N.normalMatrix),rt.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Et=O.uniformsGroups;for(let Pt=0,jr=Et.length;Pt<jr;Pt++){const Nn=Et[Pt];J.update(Nn,It),J.bind(Nn,It)}}return It}function Ul(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Nl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,D,B){const O=_.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_.get(x.texture).__webglTexture=D,_.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const B=_.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};const Fl=C.createFramebuffer();this.setRenderTarget=function(x,D=0,B=0){F=x,P=D,z=B;let O=null,N=!1,oe=!1;if(x){const ce=_.get(x);if(ce.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(C.FRAMEBUFFER,ce.__webglFramebuffer),H.copy(x.viewport),W.copy(x.scissor),j=x.scissorTest,ke.viewport(H),ke.scissor(W),ke.setScissorTest(j),V=-1;return}else if(ce.__webglFramebuffer===void 0)L.setupRenderTarget(x);else if(ce.__hasExternalTextures)L.rebindTextures(x,_.get(x.texture).__webglTexture,_.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ye=x.depthTexture;if(ce.__boundDepthTexture!==ye){if(ye!==null&&_.has(ye)&&(x.width!==ye.image.width||x.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(x)}}const me=x.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(oe=!0);const we=_.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[D])?O=we[D][B]:O=we[D],N=!0):x.samples>0&&L.useMultisampledRTT(x)===!1?O=_.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[B]:O=we,H.copy(x.viewport),W.copy(x.scissor),j=x.scissorTest}else H.copy(q).multiplyScalar(Le).floor(),W.copy(Z).multiplyScalar(Le).floor(),j=pe;if(B!==0&&(O=Fl),ke.bindFramebuffer(C.FRAMEBUFFER,O)&&ke.drawBuffers(x,O),ke.viewport(H),ke.scissor(W),ke.setScissorTest(j),N){const ce=_.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,ce.__webglTexture,B)}else if(oe){const ce=D;for(let me=0;me<x.textures.length;me++){const we=_.get(x.textures[me]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+me,we.__webglTexture,B,ce)}}else if(x!==null&&B!==0){const ce=_.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ce.__webglTexture,B)}V=-1},this.readRenderTargetPixels=function(x,D,B,O,N,oe,fe,ce=0){if(!(x&&x.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=_.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ke.bindFramebuffer(C.FRAMEBUFFER,me);try{const we=x.textures[ce],ye=we.format,Se=we.type;if(!nt.textureFormatReadable(ye)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Se)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&B>=0&&B<=x.height-N&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ce),C.readPixels(D,B,O,N,ee.convert(ye),ee.convert(Se),oe))}finally{const we=F!==null?_.get(F).__webglFramebuffer:null;ke.bindFramebuffer(C.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,O,N,oe,fe,ce=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=_.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(D>=0&&D<=x.width-O&&B>=0&&B<=x.height-N){ke.bindFramebuffer(C.FRAMEBUFFER,me);const we=x.textures[ce],ye=we.format,Se=we.type;if(!nt.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ne),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ce),C.readPixels(D,B,O,N,ee.convert(ye),ee.convert(Se),0);const Je=F!==null?_.get(F).__webglFramebuffer:null;ke.bindFramebuffer(C.FRAMEBUFFER,Je);const st=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ud(C,st,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ne),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Ne),C.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,B=0){const O=Math.pow(2,-B),N=Math.floor(x.image.width*O),oe=Math.floor(x.image.height*O),fe=D!==null?D.x:0,ce=D!==null?D.y:0;L.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,fe,ce,N,oe),ke.unbindTexture()};const Ol=C.createFramebuffer(),Bl=C.createFramebuffer();this.copyTextureToTexture=function(x,D,B=null,O=null,N=0,oe=null){oe===null&&(N!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=N,N=0):oe=0);let fe,ce,me,we,ye,Se,Ne,Je,st;const ct=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(B!==null)fe=B.max.x-B.min.x,ce=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,we=B.min.x,ye=B.min.y,Se=B.isBox3?B.min.z:0;else{const Ht=Math.pow(2,-N);fe=Math.floor(ct.width*Ht),ce=Math.floor(ct.height*Ht),x.isDataArrayTexture?me=ct.depth:x.isData3DTexture?me=Math.floor(ct.depth*Ht):me=1,we=0,ye=0,Se=0}O!==null?(Ne=O.x,Je=O.y,st=O.z):(Ne=0,Je=0,st=0);const et=ee.convert(D.format),Me=ee.convert(D.type);let je;D.isData3DTexture?(L.setTexture3D(D,0),je=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(L.setTexture2DArray(D,0),je=C.TEXTURE_2D_ARRAY):(L.setTexture2D(D,0),je=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Ge=C.getParameter(C.UNPACK_ROW_LENGTH),It=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Jn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ut=C.getParameter(C.UNPACK_SKIP_ROWS),Ti=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,ye),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);const rt=x.isDataArrayTexture||x.isData3DTexture,Rt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Ht=_.get(x),Et=_.get(D),Pt=_.get(Ht.__renderTarget),jr=_.get(Et.__renderTarget);ke.bindFramebuffer(C.READ_FRAMEBUFFER,Pt.__webglFramebuffer),ke.bindFramebuffer(C.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Nn=0;Nn<me;Nn++)rt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(x).__webglTexture,N,Se+Nn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(D).__webglTexture,oe,st+Nn)),C.blitFramebuffer(we,ye,fe,ce,Ne,Je,fe,ce,C.DEPTH_BUFFER_BIT,C.NEAREST);ke.bindFramebuffer(C.READ_FRAMEBUFFER,null),ke.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||_.has(x)){const Ht=_.get(x),Et=_.get(D);ke.bindFramebuffer(C.READ_FRAMEBUFFER,Ol),ke.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bl);for(let Pt=0;Pt<me;Pt++)rt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,N,Se+Pt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ht.__webglTexture,N),Rt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,oe,st+Pt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,oe),N!==0?C.blitFramebuffer(we,ye,fe,ce,Ne,Je,fe,ce,C.COLOR_BUFFER_BIT,C.NEAREST):Rt?C.copyTexSubImage3D(je,oe,Ne,Je,st+Pt,we,ye,fe,ce):C.copyTexSubImage2D(je,oe,Ne,Je,we,ye,fe,ce);ke.bindFramebuffer(C.READ_FRAMEBUFFER,null),ke.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Rt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(je,oe,Ne,Je,st,fe,ce,me,et,Me,ct.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(je,oe,Ne,Je,st,fe,ce,me,et,ct.data):C.texSubImage3D(je,oe,Ne,Je,st,fe,ce,me,et,Me,ct):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,Ne,Je,fe,ce,et,Me,ct.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,Ne,Je,ct.width,ct.height,et,ct.data):C.texSubImage2D(C.TEXTURE_2D,oe,Ne,Je,fe,ce,et,Me,ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,It),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Jn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ti),oe===0&&D.generateMipmaps&&C.generateMipmap(je),ke.unbindTexture()},this.initRenderTarget=function(x){_.get(x).__webglFramebuffer===void 0&&L.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?L.setTextureCube(x,0):x.isData3DTexture?L.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?L.setTexture2DArray(x,0):L.setTexture2D(x,0),ke.unbindTexture()},this.resetState=function(){P=0,z=0,F=null,ke.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const mi=new Qt(0,0,0,"YXZ"),_i=new U,S_={type:"change"},M_={type:"lock"},y_={type:"unlock"},pc=.002,mc=Math.PI/2;class E_ extends Eu{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=A_.bind(this),this._onPointerlockChange=T_.bind(this),this._onPointerlockError=C_.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;_i.setFromMatrixColumn(t.matrix,0),_i.crossVectors(t.up,_i),t.position.addScaledVector(_i,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;_i.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(_i,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function A_(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;mi.setFromQuaternion(e.quaternion),mi.y-=i.movementX*pc*this.pointerSpeed,mi.x-=i.movementY*pc*this.pointerSpeed,mi.x=Math.max(mc-this.maxPolarAngle,Math.min(mc-this.minPolarAngle,mi.x)),e.quaternion.setFromEuler(mi),this.dispatchEvent(S_)}function T_(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(M_),this.isLocked=!0):(this.dispatchEvent(y_),this.isLocked=!1)}function C_(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function R_(i,e){i.fromArray(e)}function P_(i={}){const{backgroundColor:e=8433151,fog:t={},axesHelper:n={},camera:r={},ambientLight:o={},renderer:a={}}=i,{enabled:s=!0,size:c=100}=n,{fov:l=70,aspect:d=1,near:h=1,far:f=100,position:m=kt.PLAYER_STARTING_POSITION,lookAt:b=[0,0,0]}=r,{enabled:g=!0,color:p=16777215,intensity:u=1}=o,{enabled:v=!1,color:M=e,near:y=32,far:E=f}=t,{antialias:A=!0,pixelRatio:T=window.devicePixelRatio}=a,I=new il;s&&I.add(new yu(c)),I.background=new Be(e),v&&(I.fog=new Xa(M,y,E));const k=new pl({antialias:A});k.setPixelRatio(T);const w=new Xt(l,d,h,f);R_(w.position,m),w.lookAt(b[0],b[1],b[2]),I.add(w),g&&I.add(new Su(p,u));const P=new E_(w,k.domElement);return{scene:I,renderer:k,camera:w,pointerControls:P}}class ln{constructor(e,t,n,r,o="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),ln.nextNameID=ln.nextNameID||0,this.$name.id=`lil-gui-name-${++ln.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class L_ extends ln{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pa(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const D_={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Pa,toHexString:Pa},Ki={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},I_={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Ki.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ki.toHexString(r)}},U_={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Ki.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const r=i*n<<16^e*n<<8^t*n<<0;return Ki.toHexString(r)}},N_=[D_,Ki,I_,U_];function F_(i){return N_.find(e=>e.match(i))}class O_ extends ln{constructor(e,t,n,r){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=F_(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Pa(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Do extends ln{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class B_ extends ln{constructor(e,t,n,r,o,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(o);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+v),this.$input.value=this.getValue())},r=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},o=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let a=!1,s,c,l,d,h;const f=5,m=v=>{s=v.clientX,c=l=v.clientY,a=!0,d=this.getValue(),h=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",g)},b=v=>{if(a){const M=v.clientX-s,y=v.clientY-c;Math.abs(y)>f?(v.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>f&&g()}if(!a){const M=v.clientY-l;h-=M*this._step*this._arrowKeyMultiplier(v),d+h>this._max?h=this._max-d:d+h<this._min&&(h=this._min-d),this._snapClampSetValue(d+h)}l=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",o,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(u,v,M,y,E)=>(u-v)/(M-v)*(E-y)+y,t=u=>{const v=this.$slider.getBoundingClientRect();let M=e(u,v.left,v.right,this._min,this._max);this._snapClampSetValue(M)},n=u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",o)},r=u=>{t(u.clientX)},o=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",o)};let a=!1,s,c;const l=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),a=!1},d=u=>{u.touches.length>1||(this._hasScrollBar?(s=u.touches[0].clientX,c=u.touches[0].clientY,a=!0):l(u),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=u=>{if(a){const v=u.touches[0].clientX-s,M=u.touches[0].clientY-c;Math.abs(v)>Math.abs(M)?l(u):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else u.preventDefault(),t(u.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),b=400;let g;const p=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const M=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,b)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class z_ extends ln{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class V_ extends ln{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const H_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
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
  background: var(--background-color);
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
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
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
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
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
.lil-gui .controller.boolean {
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
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
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

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
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
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
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
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function G_(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let _c=!1;class Ka{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:o="Controls",closeFolders:a=!1,injectStyles:s=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!_c&&s&&(G_(H_),_c=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,t,n,r,o){if(Object(n)===n)return new z_(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new B_(this,e,t,n,r,o);case"boolean":return new L_(this,e,t);case"string":return new V_(this,e,t);case"function":return new Do(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new O_(this,e,t,n)}addFolder(e){const t=new Ka({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Do||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Do)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class W_{keyMap;keyStore;constructor(e,t){this.keyMap=e,this.keyStore=t}isPressed(e){const t=this.keyMap.getKey(e);return typeof t=="string"?this.keyStore.hasPressedKey(t):!1}}class X_{keys;constructor(){this.keys=new Map}init(e){Object.keys(e).forEach(t=>{this.keys.set(t,e[t])})}setKey(e,t){this.keys.set(e,t)}getKey(e){return this.keys.get(e)}}class $_{curPressedKeys;constructor(){this.curPressedKeys=new Set}hasPressedKey(e){return this.curPressedKeys.has(e)}addPressedKey(e){this.curPressedKeys.add(e)}removePressedKey(e){this.curPressedKeys.delete(e)}clear(){this.curPressedKeys.clear()}}class q_{player;inputManager;camera;constructor(e,t,n){this.player=e,this.inputManager=t,this.camera=n}}class Y_ extends q_{chunkLoader;collisionEnabled=!0;candidatePosition=new U;occupiedBlockRange={minX:0,maxX:0,minY:0,maxY:0,minZ:0,maxZ:0};constructor(e,t,n,r){super(e,t,n),this.chunkLoader=r}setCollisionEnabled(e){this.collisionEnabled=e}isCollisionEnabled(){return this.collisionEnabled}getDirection(){let e=0,t=0,n=0;this.inputManager.isPressed("UP")&&(t+=1),this.inputManager.isPressed("DOWN")&&(t-=1),this.inputManager.isPressed("FORWARD")&&(n+=1),this.inputManager.isPressed("BACKWARD")&&(n-=1),this.inputManager.isPressed("LEFT")&&(e-=1),this.inputManager.isPressed("RIGHT")&&(e+=1);const r=new U;this.camera.getWorldDirection(r),r.y=0,r.normalize();const o=new U;o.crossVectors(r,new U(0,1,0)).normalize();const a=new U;return a.addScaledVector(r,n),a.addScaledVector(o,e),a.lengthSq()>0&&a.normalize(),{dx:a.x,dy:t,dz:a.z}}getPosition(){return this.player.position}occupiesBlock(e,t,n){const r=this.getOccupiedBlockRange(this.player.position);return e>=r.minX&&e<=r.maxX&&t>=r.minY&&t<=r.maxY&&n>=r.minZ&&n<=r.maxZ}updatePlayer(e){const t=Math.min(e,Zr.maxDeltaTime),{dx:n,dy:r,dz:o}=this.getDirection(),a=this.inputManager.isPressed("SPRINT")?1.5:1,s=new U(n*this.player.speed*a,r*this.player.speed*a,o*this.player.speed*a);this.collisionEnabled?this.moveWithCollisions(s,20,t):this.player.move(s,20,t),this.camera.position.copy(this.player.position)}moveWithCollisions(e,t,n){this.player.velocity.lerp(e,Math.min(1,t*n)),this.moveAlongAxis("x",this.player.velocity.x*n),this.moveAlongAxis("y",this.player.velocity.y*n),this.moveAlongAxis("z",this.player.velocity.z*n)}moveAlongAxis(e,t){if(t===0)return;const n=this.candidatePosition.copy(this.player.position);if(n[e]+=t,this.collidesAt(n)){this.player.velocity[e]=0;return}this.player.position[e]=n[e]}collidesAt(e){const t=this.getOccupiedBlockRange(e);if(t.minY<kt.WORLD_BOTTOM_Y)return!0;for(let n=t.minX;n<=t.maxX;n+=1)for(let r=t.minY;r<=t.maxY;r+=1)for(let o=t.minZ;o<=t.maxZ;o+=1)if(this.chunkLoader.isVoxelSolidWorld(n,r,o))return!0;return!1}getOccupiedBlockRange(e){const t=Zr.padding,n=this.player.width/2,r=this.occupiedBlockRange;return r.minX=Math.floor(e.x-n+t),r.maxX=Math.floor(e.x+n-t),r.minY=Math.floor(e.y-this.player.height+t),r.maxY=Math.floor(e.y+Zr.headClearance),r.minZ=Math.floor(e.z-n+t),r.maxZ=Math.floor(e.z+n-t),r}}class K_{inputManager;playerController;constructor(e,t){this.inputManager=e,this.playerController=t}animate(e,t,n,r){}}class dt{constructor(e){this.yIndex=e,this.yIndex=e,this.size=Fe.size,this.voxels=new Uint16Array(this.size*dt.height*this.size),this.rotations=new Uint8Array(this.size*dt.height*this.size),this.dirty=!0}yIndex;static height=16;size;voxels;rotations;dirty;index(e,t,n){return e+this.size*(n+this.size*t)}getVoxelId(e,t,n){return this.voxels[this.index(e,t,n)]}getVoxelRotation(e,t,n){return this.rotations[this.index(e,t,n)]??0}setVoxel(e,t,n,r){const o=this.index(e,t,n);this.voxels[o]=r,this.rotations[o]=0,this.dirty=!0}setVoxelRotation(e,t,n,r){this.rotations[this.index(e,t,n)]=j_(r),this.dirty=!0}markDirty(){this.dirty=!0}}function j_(i){return(i%4+4)%4}class Fe{constructor(e,t){this.chunkX=e,this.chunkZ=t,this.chunkX=e,this.chunkZ=t,this.container=new zi,this.container.position.set(this.getWorldX(),0,this.getWorldZ()),this.isDataGenerated=!1,this.isModified=!1,this.subchunks=[],this.subchunkCount=Fe.height/dt.height;for(let n=0;n<this.subchunkCount;n++)this.subchunks[n]=new dt(n)}chunkX;chunkZ;static size=16;static height=128;container;isDataGenerated;isModified;subchunks;subchunkCount;static worldToChunkCoords(e,t){const n=Math.floor(e/Fe.size),r=Math.floor(t/Fe.size);return{chunkX:n,chunkZ:r}}getSubchunk(e){const t=Math.floor(e/dt.height);return this.subchunks[t]}getWorldX(){return this.chunkX*Fe.size}getWorldZ(){return this.chunkZ*Fe.size}getKey(){return`${this.chunkX},${this.chunkZ}`}}const rn=0,Z_=1,J_=2,Q_=3,Wt=4,ml=12,_l=310,eb=322,tb={id:1,transparent:!1,textures:{down:"minecraft:block/dirt",up:"minecraft:block/dirt",north:"minecraft:block/dirt",south:"minecraft:block/dirt",west:"minecraft:block/dirt",east:"minecraft:block/dirt",particle:"minecraft:block/dirt"}},nb={id:2,transparent:!1,textures:{down:"minecraft:block/stone",up:"minecraft:block/stone",north:"minecraft:block/stone",south:"minecraft:block/stone",west:"minecraft:block/stone",east:"minecraft:block/stone",particle:"minecraft:block/stone"}},ib={id:3,transparent:!1,textures:{down:"block/dirt",up:"block/grass_block_top",north:"block/grass_block_side",south:"block/grass_block_side",west:"block/grass_block_side",east:"block/grass_block_side",particle:"block/dirt"}},rb={id:4,transparent:!0,translucent:!0,textures:{down:"minecraft:block/water_still",up:"minecraft:block/water_still",north:"minecraft:block/water_still",south:"minecraft:block/water_still",west:"minecraft:block/water_still",east:"minecraft:block/water_still",particle:"minecraft:block/water_still"}},ob={id:5,transparent:!1,textures:{down:"minecraft:block/ancient_debris_top",up:"minecraft:block/ancient_debris_top",north:"minecraft:block/ancient_debris_side",south:"minecraft:block/ancient_debris_side",west:"minecraft:block/ancient_debris_side",east:"minecraft:block/ancient_debris_side",particle:"minecraft:block/ancient_debris_side"}},ab={id:6,transparent:!1,textures:{down:"minecraft:block/andesite",up:"minecraft:block/andesite",north:"minecraft:block/andesite",south:"minecraft:block/andesite",west:"minecraft:block/andesite",east:"minecraft:block/andesite",particle:"minecraft:block/andesite"}},sb={id:7,transparent:!0,textures:{down:"minecraft:block/azalea_leaves",up:"minecraft:block/azalea_leaves",north:"minecraft:block/azalea_leaves",south:"minecraft:block/azalea_leaves",west:"minecraft:block/azalea_leaves",east:"minecraft:block/azalea_leaves",particle:"minecraft:block/azalea_leaves"}},cb={id:8,transparent:!1,textures:{down:"minecraft:block/bamboo_block_top",up:"minecraft:block/bamboo_block_top",north:"minecraft:block/bamboo_block",south:"minecraft:block/bamboo_block",west:"minecraft:block/bamboo_block",east:"minecraft:block/bamboo_block",particle:"minecraft:block/bamboo_block"}},lb={id:9,transparent:!1,textures:{down:"minecraft:block/bamboo_mosaic",up:"minecraft:block/bamboo_mosaic",north:"minecraft:block/bamboo_mosaic",south:"minecraft:block/bamboo_mosaic",west:"minecraft:block/bamboo_mosaic",east:"minecraft:block/bamboo_mosaic",particle:"minecraft:block/bamboo_mosaic"}},db={id:10,transparent:!1,textures:{down:"minecraft:block/bamboo_planks",up:"minecraft:block/bamboo_planks",north:"minecraft:block/bamboo_planks",south:"minecraft:block/bamboo_planks",west:"minecraft:block/bamboo_planks",east:"minecraft:block/bamboo_planks",particle:"minecraft:block/bamboo_planks"}},ub={id:11,transparent:!1,textures:{down:"minecraft:block/basalt_top",up:"minecraft:block/basalt_top",north:"minecraft:block/basalt_side",south:"minecraft:block/basalt_side",west:"minecraft:block/basalt_side",east:"minecraft:block/basalt_side",particle:"minecraft:block/basalt_side"}},hb={id:12,transparent:!1,textures:{down:"minecraft:block/bedrock",up:"minecraft:block/bedrock",north:"minecraft:block/bedrock",south:"minecraft:block/bedrock",west:"minecraft:block/bedrock",east:"minecraft:block/bedrock",particle:"minecraft:block/bedrock"}},fb={id:13,transparent:!1,textures:{down:"minecraft:block/birch_log_top",up:"minecraft:block/birch_log_top",north:"minecraft:block/birch_log",south:"minecraft:block/birch_log",west:"minecraft:block/birch_log",east:"minecraft:block/birch_log",particle:"minecraft:block/birch_log"}},pb={id:14,transparent:!1,textures:{down:"minecraft:block/birch_log_top",up:"minecraft:block/birch_log_top",north:"minecraft:block/birch_log",south:"minecraft:block/birch_log",west:"minecraft:block/birch_log",east:"minecraft:block/birch_log",particle:"minecraft:block/birch_log"}},mb={id:15,transparent:!1,textures:{down:"minecraft:block/birch_planks",up:"minecraft:block/birch_planks",north:"minecraft:block/birch_planks",south:"minecraft:block/birch_planks",west:"minecraft:block/birch_planks",east:"minecraft:block/birch_planks",particle:"minecraft:block/birch_planks"}},_b={id:16,transparent:!1,textures:{down:"minecraft:block/birch_log",up:"minecraft:block/birch_log",north:"minecraft:block/birch_log",south:"minecraft:block/birch_log",west:"minecraft:block/birch_log",east:"minecraft:block/birch_log",particle:"minecraft:block/birch_log"}},bb={id:17,transparent:!1,textures:{down:"minecraft:block/blackstone_top",up:"minecraft:block/blackstone_top",north:"minecraft:block/blackstone",south:"minecraft:block/blackstone",west:"minecraft:block/blackstone",east:"minecraft:block/blackstone",particle:"minecraft:block/blackstone"}},gb={id:18,transparent:!1,textures:{down:"minecraft:block/black_concrete",up:"minecraft:block/black_concrete",north:"minecraft:block/black_concrete",south:"minecraft:block/black_concrete",west:"minecraft:block/black_concrete",east:"minecraft:block/black_concrete",particle:"minecraft:block/black_concrete"}},kb={id:19,transparent:!1,textures:{down:"minecraft:block/black_concrete_powder",up:"minecraft:block/black_concrete_powder",north:"minecraft:block/black_concrete_powder",south:"minecraft:block/black_concrete_powder",west:"minecraft:block/black_concrete_powder",east:"minecraft:block/black_concrete_powder",particle:"minecraft:block/black_concrete_powder"}},xb={id:20,transparent:!0,translucent:!0,textures:{down:"minecraft:block/black_stained_glass",up:"minecraft:block/black_stained_glass",north:"minecraft:block/black_stained_glass",south:"minecraft:block/black_stained_glass",west:"minecraft:block/black_stained_glass",east:"minecraft:block/black_stained_glass",particle:"minecraft:block/black_stained_glass"}},vb={id:21,transparent:!1,textures:{down:"minecraft:block/black_terracotta",up:"minecraft:block/black_terracotta",north:"minecraft:block/black_terracotta",south:"minecraft:block/black_terracotta",west:"minecraft:block/black_terracotta",east:"minecraft:block/black_terracotta",particle:"minecraft:block/black_terracotta"}},wb={id:22,transparent:!1,textures:{down:"minecraft:block/black_wool",up:"minecraft:block/black_wool",north:"minecraft:block/black_wool",south:"minecraft:block/black_wool",west:"minecraft:block/black_wool",east:"minecraft:block/black_wool",particle:"minecraft:block/black_wool"}},Sb={id:23,transparent:!1,textures:{down:"minecraft:block/blast_furnace_top",up:"minecraft:block/blast_furnace_top",north:"minecraft:block/blast_furnace_front",south:"minecraft:block/blast_furnace_side",west:"minecraft:block/blast_furnace_side",east:"minecraft:block/blast_furnace_side",particle:"minecraft:block/blast_furnace_front"}},Mb={id:24,transparent:!1,textures:{down:"minecraft:block/blast_furnace_top",up:"minecraft:block/blast_furnace_top",north:"minecraft:block/blast_furnace_front_on",south:"minecraft:block/blast_furnace_side",west:"minecraft:block/blast_furnace_side",east:"minecraft:block/blast_furnace_side",particle:"minecraft:block/blast_furnace_front_on"}},yb={id:25,transparent:!1,textures:{down:"minecraft:block/blue_concrete",up:"minecraft:block/blue_concrete",north:"minecraft:block/blue_concrete",south:"minecraft:block/blue_concrete",west:"minecraft:block/blue_concrete",east:"minecraft:block/blue_concrete",particle:"minecraft:block/blue_concrete"}},Eb={id:26,transparent:!1,textures:{down:"minecraft:block/blue_concrete_powder",up:"minecraft:block/blue_concrete_powder",north:"minecraft:block/blue_concrete_powder",south:"minecraft:block/blue_concrete_powder",west:"minecraft:block/blue_concrete_powder",east:"minecraft:block/blue_concrete_powder",particle:"minecraft:block/blue_concrete_powder"}},Ab={id:27,transparent:!1,textures:{down:"minecraft:block/blue_ice",up:"minecraft:block/blue_ice",north:"minecraft:block/blue_ice",south:"minecraft:block/blue_ice",west:"minecraft:block/blue_ice",east:"minecraft:block/blue_ice",particle:"minecraft:block/blue_ice"}},Tb={id:28,transparent:!0,translucent:!0,textures:{down:"minecraft:block/blue_stained_glass",up:"minecraft:block/blue_stained_glass",north:"minecraft:block/blue_stained_glass",south:"minecraft:block/blue_stained_glass",west:"minecraft:block/blue_stained_glass",east:"minecraft:block/blue_stained_glass",particle:"minecraft:block/blue_stained_glass"}},Cb={id:29,transparent:!1,textures:{down:"minecraft:block/blue_terracotta",up:"minecraft:block/blue_terracotta",north:"minecraft:block/blue_terracotta",south:"minecraft:block/blue_terracotta",west:"minecraft:block/blue_terracotta",east:"minecraft:block/blue_terracotta",particle:"minecraft:block/blue_terracotta"}},Rb={id:30,transparent:!1,textures:{down:"minecraft:block/blue_wool",up:"minecraft:block/blue_wool",north:"minecraft:block/blue_wool",south:"minecraft:block/blue_wool",west:"minecraft:block/blue_wool",east:"minecraft:block/blue_wool",particle:"minecraft:block/blue_wool"}},Pb={id:31,transparent:!1,textures:{down:"minecraft:block/bone_block_top",up:"minecraft:block/bone_block_top",north:"minecraft:block/bone_block_side",south:"minecraft:block/bone_block_side",west:"minecraft:block/bone_block_side",east:"minecraft:block/bone_block_side",particle:"minecraft:block/bone_block_side"}},Lb={id:32,transparent:!1,textures:{down:"minecraft:block/oak_planks",up:"minecraft:block/oak_planks",north:"minecraft:block/bookshelf",south:"minecraft:block/bookshelf",west:"minecraft:block/bookshelf",east:"minecraft:block/bookshelf",particle:"minecraft:block/bookshelf"}},Db={id:33,transparent:!1,textures:{down:"minecraft:block/brain_coral_block",up:"minecraft:block/brain_coral_block",north:"minecraft:block/brain_coral_block",south:"minecraft:block/brain_coral_block",west:"minecraft:block/brain_coral_block",east:"minecraft:block/brain_coral_block",particle:"minecraft:block/brain_coral_block"}},Ib={id:34,transparent:!1,textures:{down:"minecraft:block/bricks",up:"minecraft:block/bricks",north:"minecraft:block/bricks",south:"minecraft:block/bricks",west:"minecraft:block/bricks",east:"minecraft:block/bricks",particle:"minecraft:block/bricks"}},Ub={id:35,transparent:!1,textures:{down:"minecraft:block/brown_concrete",up:"minecraft:block/brown_concrete",north:"minecraft:block/brown_concrete",south:"minecraft:block/brown_concrete",west:"minecraft:block/brown_concrete",east:"minecraft:block/brown_concrete",particle:"minecraft:block/brown_concrete"}},Nb={id:36,transparent:!1,textures:{down:"minecraft:block/brown_concrete_powder",up:"minecraft:block/brown_concrete_powder",north:"minecraft:block/brown_concrete_powder",south:"minecraft:block/brown_concrete_powder",west:"minecraft:block/brown_concrete_powder",east:"minecraft:block/brown_concrete_powder",particle:"minecraft:block/brown_concrete_powder"}},Fb={id:37,transparent:!1,textures:{down:"minecraft:block/brown_mushroom_block",up:"minecraft:block/brown_mushroom_block",north:"minecraft:block/brown_mushroom_block",south:"minecraft:block/brown_mushroom_block",west:"minecraft:block/brown_mushroom_block",east:"minecraft:block/brown_mushroom_block",particle:"minecraft:block/brown_mushroom_block"}},Ob={id:38,transparent:!0,translucent:!0,textures:{down:"minecraft:block/brown_stained_glass",up:"minecraft:block/brown_stained_glass",north:"minecraft:block/brown_stained_glass",south:"minecraft:block/brown_stained_glass",west:"minecraft:block/brown_stained_glass",east:"minecraft:block/brown_stained_glass",particle:"minecraft:block/brown_stained_glass"}},Bb={id:39,transparent:!1,textures:{down:"minecraft:block/brown_terracotta",up:"minecraft:block/brown_terracotta",north:"minecraft:block/brown_terracotta",south:"minecraft:block/brown_terracotta",west:"minecraft:block/brown_terracotta",east:"minecraft:block/brown_terracotta",particle:"minecraft:block/brown_terracotta"}},zb={id:40,transparent:!1,textures:{down:"minecraft:block/brown_wool",up:"minecraft:block/brown_wool",north:"minecraft:block/brown_wool",south:"minecraft:block/brown_wool",west:"minecraft:block/brown_wool",east:"minecraft:block/brown_wool",particle:"minecraft:block/brown_wool"}},Vb={id:41,transparent:!1,textures:{down:"minecraft:block/bubble_coral_block",up:"minecraft:block/bubble_coral_block",north:"minecraft:block/bubble_coral_block",south:"minecraft:block/bubble_coral_block",west:"minecraft:block/bubble_coral_block",east:"minecraft:block/bubble_coral_block",particle:"minecraft:block/bubble_coral_block"}},Hb={id:42,transparent:!1,textures:{down:"minecraft:block/budding_amethyst",up:"minecraft:block/budding_amethyst",north:"minecraft:block/budding_amethyst",south:"minecraft:block/budding_amethyst",west:"minecraft:block/budding_amethyst",east:"minecraft:block/budding_amethyst",particle:"minecraft:block/budding_amethyst"}},Gb={id:43,transparent:!1,textures:{down:"minecraft:block/calcite",up:"minecraft:block/calcite",north:"minecraft:block/calcite",south:"minecraft:block/calcite",west:"minecraft:block/calcite",east:"minecraft:block/calcite",particle:"minecraft:block/calcite"}},Wb={id:44,transparent:!1,textures:{down:"minecraft:block/dark_oak_planks",up:"minecraft:block/cartography_table_top",north:"minecraft:block/cartography_table_side3",south:"minecraft:block/cartography_table_side1",west:"minecraft:block/cartography_table_side2",east:"minecraft:block/cartography_table_side3",particle:"minecraft:block/cartography_table_side3"}},Xb={id:45,transparent:!1,textures:{down:"minecraft:block/pumpkin_top",up:"minecraft:block/pumpkin_top",north:"minecraft:block/carved_pumpkin",south:"minecraft:block/pumpkin_side",west:"minecraft:block/pumpkin_side",east:"minecraft:block/pumpkin_side",particle:"minecraft:block/carved_pumpkin"}},$b={id:46,transparent:!1,textures:{down:"minecraft:block/cherry_log_top",up:"minecraft:block/cherry_log_top",north:"minecraft:block/cherry_log",south:"minecraft:block/cherry_log",west:"minecraft:block/cherry_log",east:"minecraft:block/cherry_log",particle:"minecraft:block/cherry_log"}},qb={id:47,transparent:!1,textures:{down:"minecraft:block/cherry_planks",up:"minecraft:block/cherry_planks",north:"minecraft:block/cherry_planks",south:"minecraft:block/cherry_planks",west:"minecraft:block/cherry_planks",east:"minecraft:block/cherry_planks",particle:"minecraft:block/cherry_planks"}},Yb={id:48,transparent:!1,textures:{down:"minecraft:block/cherry_log",up:"minecraft:block/cherry_log",north:"minecraft:block/cherry_log",south:"minecraft:block/cherry_log",west:"minecraft:block/cherry_log",east:"minecraft:block/cherry_log",particle:"minecraft:block/cherry_log"}},Kb={id:49,transparent:!1,textures:{north:"block/chiseled_bookshelf_empty",east:"block/chiseled_bookshelf_side",south:"block/chiseled_bookshelf_side",west:"block/chiseled_bookshelf_side",up:"block/chiseled_bookshelf_top",down:"block/chiseled_bookshelf_top",particle:"block/chiseled_bookshelf_top"}},jb={id:50,transparent:!1,textures:{down:"minecraft:block/chiseled_copper",up:"minecraft:block/chiseled_copper",north:"minecraft:block/chiseled_copper",south:"minecraft:block/chiseled_copper",west:"minecraft:block/chiseled_copper",east:"minecraft:block/chiseled_copper",particle:"minecraft:block/chiseled_copper"}},Zb={id:51,transparent:!1,textures:{down:"minecraft:block/chiseled_deepslate",up:"minecraft:block/chiseled_deepslate",north:"minecraft:block/chiseled_deepslate",south:"minecraft:block/chiseled_deepslate",west:"minecraft:block/chiseled_deepslate",east:"minecraft:block/chiseled_deepslate",particle:"minecraft:block/chiseled_deepslate"}},Jb={id:52,transparent:!1,textures:{down:"minecraft:block/chiseled_nether_bricks",up:"minecraft:block/chiseled_nether_bricks",north:"minecraft:block/chiseled_nether_bricks",south:"minecraft:block/chiseled_nether_bricks",west:"minecraft:block/chiseled_nether_bricks",east:"minecraft:block/chiseled_nether_bricks",particle:"minecraft:block/chiseled_nether_bricks"}},Qb={id:53,transparent:!1,textures:{down:"minecraft:block/chiseled_polished_blackstone",up:"minecraft:block/chiseled_polished_blackstone",north:"minecraft:block/chiseled_polished_blackstone",south:"minecraft:block/chiseled_polished_blackstone",west:"minecraft:block/chiseled_polished_blackstone",east:"minecraft:block/chiseled_polished_blackstone",particle:"minecraft:block/chiseled_polished_blackstone"}},eg={id:54,transparent:!1,textures:{down:"minecraft:block/chiseled_quartz_block_top",up:"minecraft:block/chiseled_quartz_block_top",north:"minecraft:block/chiseled_quartz_block",south:"minecraft:block/chiseled_quartz_block",west:"minecraft:block/chiseled_quartz_block",east:"minecraft:block/chiseled_quartz_block",particle:"minecraft:block/chiseled_quartz_block"}},tg={id:55,transparent:!1,textures:{down:"minecraft:block/red_sandstone_top",up:"minecraft:block/red_sandstone_top",north:"minecraft:block/chiseled_red_sandstone",south:"minecraft:block/chiseled_red_sandstone",west:"minecraft:block/chiseled_red_sandstone",east:"minecraft:block/chiseled_red_sandstone",particle:"minecraft:block/chiseled_red_sandstone"}},ng={id:56,transparent:!1,textures:{down:"minecraft:block/chiseled_resin_bricks",up:"minecraft:block/chiseled_resin_bricks",north:"minecraft:block/chiseled_resin_bricks",south:"minecraft:block/chiseled_resin_bricks",west:"minecraft:block/chiseled_resin_bricks",east:"minecraft:block/chiseled_resin_bricks",particle:"minecraft:block/chiseled_resin_bricks"}},ig={id:57,transparent:!1,textures:{down:"minecraft:block/sandstone_top",up:"minecraft:block/sandstone_top",north:"minecraft:block/chiseled_sandstone",south:"minecraft:block/chiseled_sandstone",west:"minecraft:block/chiseled_sandstone",east:"minecraft:block/chiseled_sandstone",particle:"minecraft:block/chiseled_sandstone"}},rg={id:58,transparent:!1,textures:{down:"minecraft:block/chiseled_stone_bricks",up:"minecraft:block/chiseled_stone_bricks",north:"minecraft:block/chiseled_stone_bricks",south:"minecraft:block/chiseled_stone_bricks",west:"minecraft:block/chiseled_stone_bricks",east:"minecraft:block/chiseled_stone_bricks",particle:"minecraft:block/chiseled_stone_bricks"}},og={id:59,transparent:!1,textures:{down:"minecraft:block/chiseled_tuff_top",up:"minecraft:block/chiseled_tuff_top",north:"minecraft:block/chiseled_tuff",south:"minecraft:block/chiseled_tuff",west:"minecraft:block/chiseled_tuff",east:"minecraft:block/chiseled_tuff",particle:"minecraft:block/chiseled_tuff"}},ag={id:60,transparent:!1,textures:{down:"minecraft:block/chiseled_tuff_bricks_top",up:"minecraft:block/chiseled_tuff_bricks_top",north:"minecraft:block/chiseled_tuff_bricks",south:"minecraft:block/chiseled_tuff_bricks",west:"minecraft:block/chiseled_tuff_bricks",east:"minecraft:block/chiseled_tuff_bricks",particle:"minecraft:block/chiseled_tuff_bricks"}},sg={id:61,transparent:!1,textures:{down:"minecraft:block/clay",up:"minecraft:block/clay",north:"minecraft:block/clay",south:"minecraft:block/clay",west:"minecraft:block/clay",east:"minecraft:block/clay",particle:"minecraft:block/clay"}},cg={id:62,transparent:!1,textures:{down:"minecraft:block/coal_block",up:"minecraft:block/coal_block",north:"minecraft:block/coal_block",south:"minecraft:block/coal_block",west:"minecraft:block/coal_block",east:"minecraft:block/coal_block",particle:"minecraft:block/coal_block"}},lg={id:63,transparent:!1,textures:{down:"minecraft:block/coal_ore",up:"minecraft:block/coal_ore",north:"minecraft:block/coal_ore",south:"minecraft:block/coal_ore",west:"minecraft:block/coal_ore",east:"minecraft:block/coal_ore",particle:"minecraft:block/coal_ore"}},dg={id:64,transparent:!1,textures:{down:"minecraft:block/coarse_dirt",up:"minecraft:block/coarse_dirt",north:"minecraft:block/coarse_dirt",south:"minecraft:block/coarse_dirt",west:"minecraft:block/coarse_dirt",east:"minecraft:block/coarse_dirt",particle:"minecraft:block/coarse_dirt"}},ug={id:65,transparent:!1,textures:{down:"minecraft:block/cobbled_deepslate",up:"minecraft:block/cobbled_deepslate",north:"minecraft:block/cobbled_deepslate",south:"minecraft:block/cobbled_deepslate",west:"minecraft:block/cobbled_deepslate",east:"minecraft:block/cobbled_deepslate",particle:"minecraft:block/cobbled_deepslate"}},hg={id:66,transparent:!1,textures:{down:"minecraft:block/cobblestone",up:"minecraft:block/cobblestone",north:"minecraft:block/cobblestone",south:"minecraft:block/cobblestone",west:"minecraft:block/cobblestone",east:"minecraft:block/cobblestone",particle:"minecraft:block/cobblestone"}},fg={id:67,transparent:!1,textures:{down:"minecraft:block/copper_block",up:"minecraft:block/copper_block",north:"minecraft:block/copper_block",south:"minecraft:block/copper_block",west:"minecraft:block/copper_block",east:"minecraft:block/copper_block",particle:"minecraft:block/copper_block"}},pg={id:68,transparent:!1,textures:{down:"minecraft:block/copper_bulb",up:"minecraft:block/copper_bulb",north:"minecraft:block/copper_bulb",south:"minecraft:block/copper_bulb",west:"minecraft:block/copper_bulb",east:"minecraft:block/copper_bulb",particle:"minecraft:block/copper_bulb"}},mg={id:69,transparent:!1,textures:{down:"minecraft:block/copper_bulb_lit",up:"minecraft:block/copper_bulb_lit",north:"minecraft:block/copper_bulb_lit",south:"minecraft:block/copper_bulb_lit",west:"minecraft:block/copper_bulb_lit",east:"minecraft:block/copper_bulb_lit",particle:"minecraft:block/copper_bulb_lit"}},_g={id:70,transparent:!1,textures:{down:"minecraft:block/copper_bulb_lit_powered",up:"minecraft:block/copper_bulb_lit_powered",north:"minecraft:block/copper_bulb_lit_powered",south:"minecraft:block/copper_bulb_lit_powered",west:"minecraft:block/copper_bulb_lit_powered",east:"minecraft:block/copper_bulb_lit_powered",particle:"minecraft:block/copper_bulb_lit_powered"}},bg={id:71,transparent:!1,textures:{down:"minecraft:block/copper_bulb_powered",up:"minecraft:block/copper_bulb_powered",north:"minecraft:block/copper_bulb_powered",south:"minecraft:block/copper_bulb_powered",west:"minecraft:block/copper_bulb_powered",east:"minecraft:block/copper_bulb_powered",particle:"minecraft:block/copper_bulb_powered"}},gg={id:72,transparent:!1,textures:{down:"minecraft:block/copper_grate",up:"minecraft:block/copper_grate",north:"minecraft:block/copper_grate",south:"minecraft:block/copper_grate",west:"minecraft:block/copper_grate",east:"minecraft:block/copper_grate",particle:"minecraft:block/copper_grate"}},kg={id:73,transparent:!1,textures:{down:"minecraft:block/copper_ore",up:"minecraft:block/copper_ore",north:"minecraft:block/copper_ore",south:"minecraft:block/copper_ore",west:"minecraft:block/copper_ore",east:"minecraft:block/copper_ore",particle:"minecraft:block/copper_ore"}},xg={id:74,transparent:!1,textures:{down:"minecraft:block/cracked_deepslate_bricks",up:"minecraft:block/cracked_deepslate_bricks",north:"minecraft:block/cracked_deepslate_bricks",south:"minecraft:block/cracked_deepslate_bricks",west:"minecraft:block/cracked_deepslate_bricks",east:"minecraft:block/cracked_deepslate_bricks",particle:"minecraft:block/cracked_deepslate_bricks"}},vg={id:75,transparent:!1,textures:{down:"minecraft:block/cracked_deepslate_tiles",up:"minecraft:block/cracked_deepslate_tiles",north:"minecraft:block/cracked_deepslate_tiles",south:"minecraft:block/cracked_deepslate_tiles",west:"minecraft:block/cracked_deepslate_tiles",east:"minecraft:block/cracked_deepslate_tiles",particle:"minecraft:block/cracked_deepslate_tiles"}},wg={id:76,transparent:!1,textures:{down:"minecraft:block/cracked_nether_bricks",up:"minecraft:block/cracked_nether_bricks",north:"minecraft:block/cracked_nether_bricks",south:"minecraft:block/cracked_nether_bricks",west:"minecraft:block/cracked_nether_bricks",east:"minecraft:block/cracked_nether_bricks",particle:"minecraft:block/cracked_nether_bricks"}},Sg={id:77,transparent:!1,textures:{down:"minecraft:block/cracked_polished_blackstone_bricks",up:"minecraft:block/cracked_polished_blackstone_bricks",north:"minecraft:block/cracked_polished_blackstone_bricks",south:"minecraft:block/cracked_polished_blackstone_bricks",west:"minecraft:block/cracked_polished_blackstone_bricks",east:"minecraft:block/cracked_polished_blackstone_bricks",particle:"minecraft:block/cracked_polished_blackstone_bricks"}},Mg={id:78,transparent:!1,textures:{down:"minecraft:block/cracked_stone_bricks",up:"minecraft:block/cracked_stone_bricks",north:"minecraft:block/cracked_stone_bricks",south:"minecraft:block/cracked_stone_bricks",west:"minecraft:block/cracked_stone_bricks",east:"minecraft:block/cracked_stone_bricks",particle:"minecraft:block/cracked_stone_bricks"}},yg={id:79,transparent:!1,textures:{down:"block/crafter_bottom",up:"block/crafter_top",north:"block/crafter_north",south:"block/crafter_south",west:"block/crafter_west",east:"block/crafter_east",particle:"block/crafter_north"}},Eg={id:80,transparent:!1,textures:{down:"minecraft:block/oak_planks",up:"minecraft:block/crafting_table_top",north:"minecraft:block/crafting_table_front",south:"minecraft:block/crafting_table_side",west:"minecraft:block/crafting_table_front",east:"minecraft:block/crafting_table_side",particle:"minecraft:block/crafting_table_front"}},Ag={id:81,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top",up:"minecraft:block/creaking_heart_top",north:"minecraft:block/creaking_heart",south:"minecraft:block/creaking_heart",west:"minecraft:block/creaking_heart",east:"minecraft:block/creaking_heart",particle:"minecraft:block/creaking_heart"}},Tg={id:82,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top_awake",up:"minecraft:block/creaking_heart_top_awake",north:"minecraft:block/creaking_heart_awake",south:"minecraft:block/creaking_heart_awake",west:"minecraft:block/creaking_heart_awake",east:"minecraft:block/creaking_heart_awake",particle:"minecraft:block/creaking_heart_awake"}},Cg={id:83,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top_awake",up:"minecraft:block/creaking_heart_top_awake",north:"minecraft:block/creaking_heart_awake",south:"minecraft:block/creaking_heart_awake",west:"minecraft:block/creaking_heart_awake",east:"minecraft:block/creaking_heart_awake",particle:"minecraft:block/creaking_heart_awake"}},Rg={id:84,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top_dormant",up:"minecraft:block/creaking_heart_top_dormant",north:"minecraft:block/creaking_heart_dormant",south:"minecraft:block/creaking_heart_dormant",west:"minecraft:block/creaking_heart_dormant",east:"minecraft:block/creaking_heart_dormant",particle:"minecraft:block/creaking_heart_dormant"}},Pg={id:85,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top_dormant",up:"minecraft:block/creaking_heart_top_dormant",north:"minecraft:block/creaking_heart_dormant",south:"minecraft:block/creaking_heart_dormant",west:"minecraft:block/creaking_heart_dormant",east:"minecraft:block/creaking_heart_dormant",particle:"minecraft:block/creaking_heart_dormant"}},Lg={id:86,transparent:!1,textures:{down:"minecraft:block/creaking_heart_top",up:"minecraft:block/creaking_heart_top",north:"minecraft:block/creaking_heart",south:"minecraft:block/creaking_heart",west:"minecraft:block/creaking_heart",east:"minecraft:block/creaking_heart",particle:"minecraft:block/creaking_heart"}},Dg={id:87,transparent:!1,textures:{down:"minecraft:block/crimson_stem",up:"minecraft:block/crimson_stem",north:"minecraft:block/crimson_stem",south:"minecraft:block/crimson_stem",west:"minecraft:block/crimson_stem",east:"minecraft:block/crimson_stem",particle:"minecraft:block/crimson_stem"}},Ig={id:88,transparent:!1,textures:{down:"minecraft:block/crimson_planks",up:"minecraft:block/crimson_planks",north:"minecraft:block/crimson_planks",south:"minecraft:block/crimson_planks",west:"minecraft:block/crimson_planks",east:"minecraft:block/crimson_planks",particle:"minecraft:block/crimson_planks"}},Ug={id:89,transparent:!1,textures:{down:"minecraft:block/crimson_stem_top",up:"minecraft:block/crimson_stem_top",north:"minecraft:block/crimson_stem",south:"minecraft:block/crimson_stem",west:"minecraft:block/crimson_stem",east:"minecraft:block/crimson_stem",particle:"minecraft:block/crimson_stem"}},Ng={id:90,transparent:!1,textures:{down:"minecraft:block/crying_obsidian",up:"minecraft:block/crying_obsidian",north:"minecraft:block/crying_obsidian",south:"minecraft:block/crying_obsidian",west:"minecraft:block/crying_obsidian",east:"minecraft:block/crying_obsidian",particle:"minecraft:block/crying_obsidian"}},Fg={id:91,transparent:!1,textures:{down:"minecraft:block/cut_copper",up:"minecraft:block/cut_copper",north:"minecraft:block/cut_copper",south:"minecraft:block/cut_copper",west:"minecraft:block/cut_copper",east:"minecraft:block/cut_copper",particle:"minecraft:block/cut_copper"}},Og={id:92,transparent:!1,textures:{down:"minecraft:block/red_sandstone_top",up:"minecraft:block/red_sandstone_top",north:"minecraft:block/cut_red_sandstone",south:"minecraft:block/cut_red_sandstone",west:"minecraft:block/cut_red_sandstone",east:"minecraft:block/cut_red_sandstone",particle:"minecraft:block/cut_red_sandstone"}},Bg={id:93,transparent:!1,textures:{down:"minecraft:block/sandstone_top",up:"minecraft:block/sandstone_top",north:"minecraft:block/cut_sandstone",south:"minecraft:block/cut_sandstone",west:"minecraft:block/cut_sandstone",east:"minecraft:block/cut_sandstone",particle:"minecraft:block/cut_sandstone"}},zg={id:94,transparent:!1,textures:{down:"minecraft:block/cyan_concrete",up:"minecraft:block/cyan_concrete",north:"minecraft:block/cyan_concrete",south:"minecraft:block/cyan_concrete",west:"minecraft:block/cyan_concrete",east:"minecraft:block/cyan_concrete",particle:"minecraft:block/cyan_concrete"}},Vg={id:95,transparent:!1,textures:{down:"minecraft:block/cyan_concrete_powder",up:"minecraft:block/cyan_concrete_powder",north:"minecraft:block/cyan_concrete_powder",south:"minecraft:block/cyan_concrete_powder",west:"minecraft:block/cyan_concrete_powder",east:"minecraft:block/cyan_concrete_powder",particle:"minecraft:block/cyan_concrete_powder"}},Hg={id:96,transparent:!0,translucent:!0,textures:{down:"minecraft:block/cyan_stained_glass",up:"minecraft:block/cyan_stained_glass",north:"minecraft:block/cyan_stained_glass",south:"minecraft:block/cyan_stained_glass",west:"minecraft:block/cyan_stained_glass",east:"minecraft:block/cyan_stained_glass",particle:"minecraft:block/cyan_stained_glass"}},Gg={id:97,transparent:!1,textures:{down:"minecraft:block/cyan_terracotta",up:"minecraft:block/cyan_terracotta",north:"minecraft:block/cyan_terracotta",south:"minecraft:block/cyan_terracotta",west:"minecraft:block/cyan_terracotta",east:"minecraft:block/cyan_terracotta",particle:"minecraft:block/cyan_terracotta"}},Wg={id:98,transparent:!1,textures:{down:"minecraft:block/cyan_wool",up:"minecraft:block/cyan_wool",north:"minecraft:block/cyan_wool",south:"minecraft:block/cyan_wool",west:"minecraft:block/cyan_wool",east:"minecraft:block/cyan_wool",particle:"minecraft:block/cyan_wool"}},Xg={id:99,transparent:!1,textures:{down:"minecraft:block/dark_oak_log_top",up:"minecraft:block/dark_oak_log_top",north:"minecraft:block/dark_oak_log",south:"minecraft:block/dark_oak_log",west:"minecraft:block/dark_oak_log",east:"minecraft:block/dark_oak_log",particle:"minecraft:block/dark_oak_log"}},$g={id:100,transparent:!1,textures:{down:"minecraft:block/dark_oak_log_top",up:"minecraft:block/dark_oak_log_top",north:"minecraft:block/dark_oak_log",south:"minecraft:block/dark_oak_log",west:"minecraft:block/dark_oak_log",east:"minecraft:block/dark_oak_log",particle:"minecraft:block/dark_oak_log"}},qg={id:101,transparent:!1,textures:{down:"minecraft:block/dark_oak_planks",up:"minecraft:block/dark_oak_planks",north:"minecraft:block/dark_oak_planks",south:"minecraft:block/dark_oak_planks",west:"minecraft:block/dark_oak_planks",east:"minecraft:block/dark_oak_planks",particle:"minecraft:block/dark_oak_planks"}},Yg={id:102,transparent:!1,textures:{down:"minecraft:block/dark_oak_log",up:"minecraft:block/dark_oak_log",north:"minecraft:block/dark_oak_log",south:"minecraft:block/dark_oak_log",west:"minecraft:block/dark_oak_log",east:"minecraft:block/dark_oak_log",particle:"minecraft:block/dark_oak_log"}},Kg={id:103,transparent:!1,textures:{down:"minecraft:block/dark_prismarine",up:"minecraft:block/dark_prismarine",north:"minecraft:block/dark_prismarine",south:"minecraft:block/dark_prismarine",west:"minecraft:block/dark_prismarine",east:"minecraft:block/dark_prismarine",particle:"minecraft:block/dark_prismarine"}},jg={id:104,transparent:!1,textures:{down:"minecraft:block/dead_brain_coral_block",up:"minecraft:block/dead_brain_coral_block",north:"minecraft:block/dead_brain_coral_block",south:"minecraft:block/dead_brain_coral_block",west:"minecraft:block/dead_brain_coral_block",east:"minecraft:block/dead_brain_coral_block",particle:"minecraft:block/dead_brain_coral_block"}},Zg={id:105,transparent:!1,textures:{down:"minecraft:block/dead_bubble_coral_block",up:"minecraft:block/dead_bubble_coral_block",north:"minecraft:block/dead_bubble_coral_block",south:"minecraft:block/dead_bubble_coral_block",west:"minecraft:block/dead_bubble_coral_block",east:"minecraft:block/dead_bubble_coral_block",particle:"minecraft:block/dead_bubble_coral_block"}},Jg={id:106,transparent:!1,textures:{down:"minecraft:block/dead_fire_coral_block",up:"minecraft:block/dead_fire_coral_block",north:"minecraft:block/dead_fire_coral_block",south:"minecraft:block/dead_fire_coral_block",west:"minecraft:block/dead_fire_coral_block",east:"minecraft:block/dead_fire_coral_block",particle:"minecraft:block/dead_fire_coral_block"}},Qg={id:107,transparent:!1,textures:{down:"minecraft:block/dead_horn_coral_block",up:"minecraft:block/dead_horn_coral_block",north:"minecraft:block/dead_horn_coral_block",south:"minecraft:block/dead_horn_coral_block",west:"minecraft:block/dead_horn_coral_block",east:"minecraft:block/dead_horn_coral_block",particle:"minecraft:block/dead_horn_coral_block"}},ek={id:108,transparent:!1,textures:{down:"minecraft:block/dead_tube_coral_block",up:"minecraft:block/dead_tube_coral_block",north:"minecraft:block/dead_tube_coral_block",south:"minecraft:block/dead_tube_coral_block",west:"minecraft:block/dead_tube_coral_block",east:"minecraft:block/dead_tube_coral_block",particle:"minecraft:block/dead_tube_coral_block"}},tk={id:109,transparent:!1,textures:{down:"minecraft:block/deepslate_top",up:"minecraft:block/deepslate_top",north:"minecraft:block/deepslate",south:"minecraft:block/deepslate",west:"minecraft:block/deepslate",east:"minecraft:block/deepslate",particle:"minecraft:block/deepslate"}},nk={id:110,transparent:!1,textures:{down:"minecraft:block/deepslate_bricks",up:"minecraft:block/deepslate_bricks",north:"minecraft:block/deepslate_bricks",south:"minecraft:block/deepslate_bricks",west:"minecraft:block/deepslate_bricks",east:"minecraft:block/deepslate_bricks",particle:"minecraft:block/deepslate_bricks"}},ik={id:111,transparent:!1,textures:{down:"minecraft:block/deepslate_coal_ore",up:"minecraft:block/deepslate_coal_ore",north:"minecraft:block/deepslate_coal_ore",south:"minecraft:block/deepslate_coal_ore",west:"minecraft:block/deepslate_coal_ore",east:"minecraft:block/deepslate_coal_ore",particle:"minecraft:block/deepslate_coal_ore"}},rk={id:112,transparent:!1,textures:{down:"minecraft:block/deepslate_copper_ore",up:"minecraft:block/deepslate_copper_ore",north:"minecraft:block/deepslate_copper_ore",south:"minecraft:block/deepslate_copper_ore",west:"minecraft:block/deepslate_copper_ore",east:"minecraft:block/deepslate_copper_ore",particle:"minecraft:block/deepslate_copper_ore"}},ok={id:113,transparent:!1,textures:{down:"minecraft:block/deepslate_diamond_ore",up:"minecraft:block/deepslate_diamond_ore",north:"minecraft:block/deepslate_diamond_ore",south:"minecraft:block/deepslate_diamond_ore",west:"minecraft:block/deepslate_diamond_ore",east:"minecraft:block/deepslate_diamond_ore",particle:"minecraft:block/deepslate_diamond_ore"}},ak={id:114,transparent:!1,textures:{down:"minecraft:block/deepslate_emerald_ore",up:"minecraft:block/deepslate_emerald_ore",north:"minecraft:block/deepslate_emerald_ore",south:"minecraft:block/deepslate_emerald_ore",west:"minecraft:block/deepslate_emerald_ore",east:"minecraft:block/deepslate_emerald_ore",particle:"minecraft:block/deepslate_emerald_ore"}},sk={id:115,transparent:!1,textures:{down:"minecraft:block/deepslate_gold_ore",up:"minecraft:block/deepslate_gold_ore",north:"minecraft:block/deepslate_gold_ore",south:"minecraft:block/deepslate_gold_ore",west:"minecraft:block/deepslate_gold_ore",east:"minecraft:block/deepslate_gold_ore",particle:"minecraft:block/deepslate_gold_ore"}},ck={id:116,transparent:!1,textures:{down:"minecraft:block/deepslate_iron_ore",up:"minecraft:block/deepslate_iron_ore",north:"minecraft:block/deepslate_iron_ore",south:"minecraft:block/deepslate_iron_ore",west:"minecraft:block/deepslate_iron_ore",east:"minecraft:block/deepslate_iron_ore",particle:"minecraft:block/deepslate_iron_ore"}},lk={id:117,transparent:!1,textures:{down:"minecraft:block/deepslate_lapis_ore",up:"minecraft:block/deepslate_lapis_ore",north:"minecraft:block/deepslate_lapis_ore",south:"minecraft:block/deepslate_lapis_ore",west:"minecraft:block/deepslate_lapis_ore",east:"minecraft:block/deepslate_lapis_ore",particle:"minecraft:block/deepslate_lapis_ore"}},dk={id:118,transparent:!1,textures:{down:"minecraft:block/deepslate_redstone_ore",up:"minecraft:block/deepslate_redstone_ore",north:"minecraft:block/deepslate_redstone_ore",south:"minecraft:block/deepslate_redstone_ore",west:"minecraft:block/deepslate_redstone_ore",east:"minecraft:block/deepslate_redstone_ore",particle:"minecraft:block/deepslate_redstone_ore"}},uk={id:119,transparent:!1,textures:{down:"minecraft:block/deepslate_tiles",up:"minecraft:block/deepslate_tiles",north:"minecraft:block/deepslate_tiles",south:"minecraft:block/deepslate_tiles",west:"minecraft:block/deepslate_tiles",east:"minecraft:block/deepslate_tiles",particle:"minecraft:block/deepslate_tiles"}},hk={id:120,transparent:!1,textures:{down:"minecraft:block/diamond_block",up:"minecraft:block/diamond_block",north:"minecraft:block/diamond_block",south:"minecraft:block/diamond_block",west:"minecraft:block/diamond_block",east:"minecraft:block/diamond_block",particle:"minecraft:block/diamond_block"}},fk={id:121,transparent:!1,textures:{down:"minecraft:block/diamond_ore",up:"minecraft:block/diamond_ore",north:"minecraft:block/diamond_ore",south:"minecraft:block/diamond_ore",west:"minecraft:block/diamond_ore",east:"minecraft:block/diamond_ore",particle:"minecraft:block/diamond_ore"}},pk={id:122,transparent:!1,textures:{down:"minecraft:block/diorite",up:"minecraft:block/diorite",north:"minecraft:block/diorite",south:"minecraft:block/diorite",west:"minecraft:block/diorite",east:"minecraft:block/diorite",particle:"minecraft:block/diorite"}},mk={id:123,transparent:!1,textures:{down:"minecraft:block/acacia_log_top",up:"minecraft:block/acacia_log_top",north:"minecraft:block/acacia_log",south:"minecraft:block/acacia_log",west:"minecraft:block/acacia_log",east:"minecraft:block/acacia_log",particle:"minecraft:block/acacia_log"}},_k={id:124,transparent:!1,textures:{down:"minecraft:block/furnace_top",up:"minecraft:block/furnace_top",north:"minecraft:block/dispenser_front",south:"minecraft:block/furnace_side",west:"minecraft:block/furnace_side",east:"minecraft:block/furnace_side",particle:"minecraft:block/dispenser_front"}},bk={id:125,transparent:!1,textures:{down:"block/dried_kelp_bottom",up:"block/dried_kelp_top",north:"block/dried_kelp_side",south:"block/dried_kelp_side",west:"block/dried_kelp_side",east:"block/dried_kelp_side",particle:"block/dried_kelp_side"}},gk={id:126,transparent:!1,textures:{down:"minecraft:block/dripstone_block",up:"minecraft:block/dripstone_block",north:"minecraft:block/dripstone_block",south:"minecraft:block/dripstone_block",west:"minecraft:block/dripstone_block",east:"minecraft:block/dripstone_block",particle:"minecraft:block/dripstone_block"}},kk={id:127,transparent:!1,textures:{down:"minecraft:block/furnace_top",up:"minecraft:block/furnace_top",north:"minecraft:block/dropper_front",south:"minecraft:block/furnace_side",west:"minecraft:block/furnace_side",east:"minecraft:block/furnace_side",particle:"minecraft:block/dropper_front"}},xk={id:128,transparent:!1,textures:{down:"minecraft:block/emerald_block",up:"minecraft:block/emerald_block",north:"minecraft:block/emerald_block",south:"minecraft:block/emerald_block",west:"minecraft:block/emerald_block",east:"minecraft:block/emerald_block",particle:"minecraft:block/emerald_block"}},vk={id:129,transparent:!1,textures:{down:"minecraft:block/emerald_ore",up:"minecraft:block/emerald_ore",north:"minecraft:block/emerald_ore",south:"minecraft:block/emerald_ore",west:"minecraft:block/emerald_ore",east:"minecraft:block/emerald_ore",particle:"minecraft:block/emerald_ore"}},wk={id:130,transparent:!1,textures:{down:"minecraft:block/end_stone",up:"minecraft:block/end_stone",north:"minecraft:block/end_stone",south:"minecraft:block/end_stone",west:"minecraft:block/end_stone",east:"minecraft:block/end_stone",particle:"minecraft:block/end_stone"}},Sk={id:131,transparent:!1,textures:{down:"minecraft:block/end_stone_bricks",up:"minecraft:block/end_stone_bricks",north:"minecraft:block/end_stone_bricks",south:"minecraft:block/end_stone_bricks",west:"minecraft:block/end_stone_bricks",east:"minecraft:block/end_stone_bricks",particle:"minecraft:block/end_stone_bricks"}},Mk={id:132,transparent:!1,textures:{down:"minecraft:block/exposed_chiseled_copper",up:"minecraft:block/exposed_chiseled_copper",north:"minecraft:block/exposed_chiseled_copper",south:"minecraft:block/exposed_chiseled_copper",west:"minecraft:block/exposed_chiseled_copper",east:"minecraft:block/exposed_chiseled_copper",particle:"minecraft:block/exposed_chiseled_copper"}},yk={id:133,transparent:!1,textures:{down:"minecraft:block/exposed_copper",up:"minecraft:block/exposed_copper",north:"minecraft:block/exposed_copper",south:"minecraft:block/exposed_copper",west:"minecraft:block/exposed_copper",east:"minecraft:block/exposed_copper",particle:"minecraft:block/exposed_copper"}},Ek={id:134,transparent:!1,textures:{down:"minecraft:block/exposed_copper_bulb",up:"minecraft:block/exposed_copper_bulb",north:"minecraft:block/exposed_copper_bulb",south:"minecraft:block/exposed_copper_bulb",west:"minecraft:block/exposed_copper_bulb",east:"minecraft:block/exposed_copper_bulb",particle:"minecraft:block/exposed_copper_bulb"}},Ak={id:135,transparent:!1,textures:{down:"minecraft:block/exposed_copper_bulb_lit",up:"minecraft:block/exposed_copper_bulb_lit",north:"minecraft:block/exposed_copper_bulb_lit",south:"minecraft:block/exposed_copper_bulb_lit",west:"minecraft:block/exposed_copper_bulb_lit",east:"minecraft:block/exposed_copper_bulb_lit",particle:"minecraft:block/exposed_copper_bulb_lit"}},Tk={id:136,transparent:!1,textures:{down:"minecraft:block/exposed_copper_bulb_lit_powered",up:"minecraft:block/exposed_copper_bulb_lit_powered",north:"minecraft:block/exposed_copper_bulb_lit_powered",south:"minecraft:block/exposed_copper_bulb_lit_powered",west:"minecraft:block/exposed_copper_bulb_lit_powered",east:"minecraft:block/exposed_copper_bulb_lit_powered",particle:"minecraft:block/exposed_copper_bulb_lit_powered"}},Ck={id:137,transparent:!1,textures:{down:"minecraft:block/exposed_copper_bulb_powered",up:"minecraft:block/exposed_copper_bulb_powered",north:"minecraft:block/exposed_copper_bulb_powered",south:"minecraft:block/exposed_copper_bulb_powered",west:"minecraft:block/exposed_copper_bulb_powered",east:"minecraft:block/exposed_copper_bulb_powered",particle:"minecraft:block/exposed_copper_bulb_powered"}},Rk={id:138,transparent:!1,textures:{down:"minecraft:block/exposed_copper_grate",up:"minecraft:block/exposed_copper_grate",north:"minecraft:block/exposed_copper_grate",south:"minecraft:block/exposed_copper_grate",west:"minecraft:block/exposed_copper_grate",east:"minecraft:block/exposed_copper_grate",particle:"minecraft:block/exposed_copper_grate"}},Pk={id:139,transparent:!1,textures:{down:"minecraft:block/exposed_cut_copper",up:"minecraft:block/exposed_cut_copper",north:"minecraft:block/exposed_cut_copper",south:"minecraft:block/exposed_cut_copper",west:"minecraft:block/exposed_cut_copper",east:"minecraft:block/exposed_cut_copper",particle:"minecraft:block/exposed_cut_copper"}},Lk={id:140,transparent:!1,textures:{down:"minecraft:block/fire_coral_block",up:"minecraft:block/fire_coral_block",north:"minecraft:block/fire_coral_block",south:"minecraft:block/fire_coral_block",west:"minecraft:block/fire_coral_block",east:"minecraft:block/fire_coral_block",particle:"minecraft:block/fire_coral_block"}},Dk={id:141,transparent:!1,textures:{down:"minecraft:block/birch_planks",up:"minecraft:block/fletching_table_top",north:"minecraft:block/fletching_table_front",south:"minecraft:block/fletching_table_front",west:"minecraft:block/fletching_table_side",east:"minecraft:block/fletching_table_side",particle:"minecraft:block/fletching_table_front"}},Ik={id:142,transparent:!0,textures:{down:"minecraft:block/acacia_leaves",up:"minecraft:block/acacia_leaves",north:"minecraft:block/acacia_leaves",south:"minecraft:block/acacia_leaves",west:"minecraft:block/acacia_leaves",east:"minecraft:block/acacia_leaves",particle:"minecraft:block/acacia_leaves"}},Uk={id:143,transparent:!0,textures:{down:"minecraft:block/flowering_azalea_leaves",up:"minecraft:block/flowering_azalea_leaves",north:"minecraft:block/flowering_azalea_leaves",south:"minecraft:block/flowering_azalea_leaves",west:"minecraft:block/flowering_azalea_leaves",east:"minecraft:block/flowering_azalea_leaves",particle:"minecraft:block/flowering_azalea_leaves"}},Nk={id:144,transparent:!0,textures:{down:"minecraft:block/birch_leaves",up:"minecraft:block/birch_leaves",north:"minecraft:block/birch_leaves",south:"minecraft:block/birch_leaves",west:"minecraft:block/birch_leaves",east:"minecraft:block/birch_leaves",particle:"minecraft:block/birch_leaves"}},Fk={id:145,transparent:!0,textures:{down:"minecraft:block/cherry_leaves",up:"minecraft:block/cherry_leaves",north:"minecraft:block/cherry_leaves",south:"minecraft:block/cherry_leaves",west:"minecraft:block/cherry_leaves",east:"minecraft:block/cherry_leaves",particle:"minecraft:block/cherry_leaves"}},Ok={id:146,transparent:!0,textures:{down:"minecraft:block/dark_oak_leaves",up:"minecraft:block/dark_oak_leaves",north:"minecraft:block/dark_oak_leaves",south:"minecraft:block/dark_oak_leaves",west:"minecraft:block/dark_oak_leaves",east:"minecraft:block/dark_oak_leaves",particle:"minecraft:block/dark_oak_leaves"}},Bk={id:147,transparent:!0,textures:{down:"minecraft:block/jungle_leaves",up:"minecraft:block/jungle_leaves",north:"minecraft:block/jungle_leaves",south:"minecraft:block/jungle_leaves",west:"minecraft:block/jungle_leaves",east:"minecraft:block/jungle_leaves",particle:"minecraft:block/jungle_leaves"}},zk={id:148,transparent:!0,textures:{down:"minecraft:block/mangrove_leaves",up:"minecraft:block/mangrove_leaves",north:"minecraft:block/mangrove_leaves",south:"minecraft:block/mangrove_leaves",west:"minecraft:block/mangrove_leaves",east:"minecraft:block/mangrove_leaves",particle:"minecraft:block/mangrove_leaves"}},Vk={id:149,transparent:!0,textures:{down:"minecraft:block/oak_leaves",up:"minecraft:block/oak_leaves",north:"minecraft:block/oak_leaves",south:"minecraft:block/oak_leaves",west:"minecraft:block/oak_leaves",east:"minecraft:block/oak_leaves",particle:"minecraft:block/oak_leaves"}},Hk={id:150,transparent:!0,textures:{down:"minecraft:block/pale_oak_leaves",up:"minecraft:block/pale_oak_leaves",north:"minecraft:block/pale_oak_leaves",south:"minecraft:block/pale_oak_leaves",west:"minecraft:block/pale_oak_leaves",east:"minecraft:block/pale_oak_leaves",particle:"minecraft:block/pale_oak_leaves"}},Gk={id:151,transparent:!0,textures:{down:"minecraft:block/spruce_leaves",up:"minecraft:block/spruce_leaves",north:"minecraft:block/spruce_leaves",south:"minecraft:block/spruce_leaves",west:"minecraft:block/spruce_leaves",east:"minecraft:block/spruce_leaves",particle:"minecraft:block/spruce_leaves"}},Wk={id:152,transparent:!1,textures:{down:"minecraft:block/frosted_ice_0",up:"minecraft:block/frosted_ice_0",north:"minecraft:block/frosted_ice_0",south:"minecraft:block/frosted_ice_0",west:"minecraft:block/frosted_ice_0",east:"minecraft:block/frosted_ice_0",particle:"minecraft:block/frosted_ice_0"}},Xk={id:153,transparent:!1,textures:{down:"minecraft:block/frosted_ice_1",up:"minecraft:block/frosted_ice_1",north:"minecraft:block/frosted_ice_1",south:"minecraft:block/frosted_ice_1",west:"minecraft:block/frosted_ice_1",east:"minecraft:block/frosted_ice_1",particle:"minecraft:block/frosted_ice_1"}},$k={id:154,transparent:!1,textures:{down:"minecraft:block/frosted_ice_2",up:"minecraft:block/frosted_ice_2",north:"minecraft:block/frosted_ice_2",south:"minecraft:block/frosted_ice_2",west:"minecraft:block/frosted_ice_2",east:"minecraft:block/frosted_ice_2",particle:"minecraft:block/frosted_ice_2"}},qk={id:155,transparent:!1,textures:{down:"minecraft:block/frosted_ice_3",up:"minecraft:block/frosted_ice_3",north:"minecraft:block/frosted_ice_3",south:"minecraft:block/frosted_ice_3",west:"minecraft:block/frosted_ice_3",east:"minecraft:block/frosted_ice_3",particle:"minecraft:block/frosted_ice_3"}},Yk={id:156,transparent:!1,textures:{down:"minecraft:block/furnace_top",up:"minecraft:block/furnace_top",north:"minecraft:block/furnace_front",south:"minecraft:block/furnace_side",west:"minecraft:block/furnace_side",east:"minecraft:block/furnace_side",particle:"minecraft:block/furnace_front"}},Kk={id:157,transparent:!1,textures:{down:"minecraft:block/furnace_top",up:"minecraft:block/furnace_top",north:"minecraft:block/furnace_front_on",south:"minecraft:block/furnace_side",west:"minecraft:block/furnace_side",east:"minecraft:block/furnace_side",particle:"minecraft:block/furnace_front_on"}},jk={id:158,transparent:!1,textures:{down:"minecraft:block/gilded_blackstone",up:"minecraft:block/gilded_blackstone",north:"minecraft:block/gilded_blackstone",south:"minecraft:block/gilded_blackstone",west:"minecraft:block/gilded_blackstone",east:"minecraft:block/gilded_blackstone",particle:"minecraft:block/gilded_blackstone"}},Zk={id:159,transparent:!0,translucent:!0,textures:{down:"minecraft:block/glass",up:"minecraft:block/glass",north:"minecraft:block/glass",south:"minecraft:block/glass",west:"minecraft:block/glass",east:"minecraft:block/glass",particle:"minecraft:block/glass"}},Jk={id:160,transparent:!1,textures:{down:"minecraft:block/glowstone",up:"minecraft:block/glowstone",north:"minecraft:block/glowstone",south:"minecraft:block/glowstone",west:"minecraft:block/glowstone",east:"minecraft:block/glowstone",particle:"minecraft:block/glowstone"}},Qk={id:161,transparent:!1,textures:{down:"minecraft:block/gold_block",up:"minecraft:block/gold_block",north:"minecraft:block/gold_block",south:"minecraft:block/gold_block",west:"minecraft:block/gold_block",east:"minecraft:block/gold_block",particle:"minecraft:block/gold_block"}},ex={id:162,transparent:!1,textures:{down:"minecraft:block/gold_ore",up:"minecraft:block/gold_ore",north:"minecraft:block/gold_ore",south:"minecraft:block/gold_ore",west:"minecraft:block/gold_ore",east:"minecraft:block/gold_ore",particle:"minecraft:block/gold_ore"}},tx={id:163,transparent:!1,textures:{down:"minecraft:block/granite",up:"minecraft:block/granite",north:"minecraft:block/granite",south:"minecraft:block/granite",west:"minecraft:block/granite",east:"minecraft:block/granite",particle:"minecraft:block/granite"}},nx={id:164,transparent:!1,textures:{down:"minecraft:block/acacia_log",up:"minecraft:block/acacia_log",north:"minecraft:block/acacia_log",south:"minecraft:block/acacia_log",west:"minecraft:block/acacia_log",east:"minecraft:block/acacia_log",particle:"minecraft:block/acacia_log"}},ix={id:165,transparent:!1,textures:{down:"minecraft:block/gravel",up:"minecraft:block/gravel",north:"minecraft:block/gravel",south:"minecraft:block/gravel",west:"minecraft:block/gravel",east:"minecraft:block/gravel",particle:"minecraft:block/gravel"}},rx={id:166,transparent:!1,textures:{down:"minecraft:block/gray_concrete",up:"minecraft:block/gray_concrete",north:"minecraft:block/gray_concrete",south:"minecraft:block/gray_concrete",west:"minecraft:block/gray_concrete",east:"minecraft:block/gray_concrete",particle:"minecraft:block/gray_concrete"}},ox={id:167,transparent:!1,textures:{down:"minecraft:block/gray_concrete_powder",up:"minecraft:block/gray_concrete_powder",north:"minecraft:block/gray_concrete_powder",south:"minecraft:block/gray_concrete_powder",west:"minecraft:block/gray_concrete_powder",east:"minecraft:block/gray_concrete_powder",particle:"minecraft:block/gray_concrete_powder"}},ax={id:168,transparent:!0,translucent:!0,textures:{down:"minecraft:block/gray_stained_glass",up:"minecraft:block/gray_stained_glass",north:"minecraft:block/gray_stained_glass",south:"minecraft:block/gray_stained_glass",west:"minecraft:block/gray_stained_glass",east:"minecraft:block/gray_stained_glass",particle:"minecraft:block/gray_stained_glass"}},sx={id:169,transparent:!1,textures:{down:"minecraft:block/gray_terracotta",up:"minecraft:block/gray_terracotta",north:"minecraft:block/gray_terracotta",south:"minecraft:block/gray_terracotta",west:"minecraft:block/gray_terracotta",east:"minecraft:block/gray_terracotta",particle:"minecraft:block/gray_terracotta"}},cx={id:170,transparent:!1,textures:{down:"minecraft:block/gray_wool",up:"minecraft:block/gray_wool",north:"minecraft:block/gray_wool",south:"minecraft:block/gray_wool",west:"minecraft:block/gray_wool",east:"minecraft:block/gray_wool",particle:"minecraft:block/gray_wool"}},lx={id:171,transparent:!1,textures:{down:"minecraft:block/green_concrete",up:"minecraft:block/green_concrete",north:"minecraft:block/green_concrete",south:"minecraft:block/green_concrete",west:"minecraft:block/green_concrete",east:"minecraft:block/green_concrete",particle:"minecraft:block/green_concrete"}},dx={id:172,transparent:!1,textures:{down:"minecraft:block/green_concrete_powder",up:"minecraft:block/green_concrete_powder",north:"minecraft:block/green_concrete_powder",south:"minecraft:block/green_concrete_powder",west:"minecraft:block/green_concrete_powder",east:"minecraft:block/green_concrete_powder",particle:"minecraft:block/green_concrete_powder"}},ux={id:173,transparent:!0,translucent:!0,textures:{down:"minecraft:block/green_stained_glass",up:"minecraft:block/green_stained_glass",north:"minecraft:block/green_stained_glass",south:"minecraft:block/green_stained_glass",west:"minecraft:block/green_stained_glass",east:"minecraft:block/green_stained_glass",particle:"minecraft:block/green_stained_glass"}},hx={id:174,transparent:!1,textures:{down:"minecraft:block/green_terracotta",up:"minecraft:block/green_terracotta",north:"minecraft:block/green_terracotta",south:"minecraft:block/green_terracotta",west:"minecraft:block/green_terracotta",east:"minecraft:block/green_terracotta",particle:"minecraft:block/green_terracotta"}},fx={id:175,transparent:!1,textures:{down:"minecraft:block/green_wool",up:"minecraft:block/green_wool",north:"minecraft:block/green_wool",south:"minecraft:block/green_wool",west:"minecraft:block/green_wool",east:"minecraft:block/green_wool",particle:"minecraft:block/green_wool"}},px={id:176,transparent:!1,textures:{down:"minecraft:block/hay_block_top",up:"minecraft:block/hay_block_top",north:"minecraft:block/hay_block_side",south:"minecraft:block/hay_block_side",west:"minecraft:block/hay_block_side",east:"minecraft:block/hay_block_side",particle:"minecraft:block/hay_block_side"}},mx={id:177,transparent:!1,textures:{down:"minecraft:block/hay_block_top",up:"minecraft:block/hay_block_top",north:"minecraft:block/hay_block_side",south:"minecraft:block/hay_block_side",west:"minecraft:block/hay_block_side",east:"minecraft:block/hay_block_side",particle:"minecraft:block/hay_block_side"}},_x={id:178,transparent:!1,textures:{down:"minecraft:block/honeycomb_block",up:"minecraft:block/honeycomb_block",north:"minecraft:block/honeycomb_block",south:"minecraft:block/honeycomb_block",west:"minecraft:block/honeycomb_block",east:"minecraft:block/honeycomb_block",particle:"minecraft:block/honeycomb_block"}},bx={id:179,transparent:!1,textures:{down:"block/honey_block_bottom",up:"block/honey_block_bottom",north:"block/honey_block_bottom",south:"block/honey_block_bottom",west:"block/honey_block_bottom",east:"block/honey_block_bottom",particle:"block/honey_block_top"}},gx={id:180,transparent:!1,textures:{down:"minecraft:block/horn_coral_block",up:"minecraft:block/horn_coral_block",north:"minecraft:block/horn_coral_block",south:"minecraft:block/horn_coral_block",west:"minecraft:block/horn_coral_block",east:"minecraft:block/horn_coral_block",particle:"minecraft:block/horn_coral_block"}},kx={id:181,transparent:!0,textures:{down:"minecraft:block/ice",up:"minecraft:block/ice",north:"minecraft:block/ice",south:"minecraft:block/ice",west:"minecraft:block/ice",east:"minecraft:block/ice",particle:"minecraft:block/ice"}},xx={id:182,transparent:!1,textures:{down:"minecraft:block/iron_block",up:"minecraft:block/iron_block",north:"minecraft:block/iron_block",south:"minecraft:block/iron_block",west:"minecraft:block/iron_block",east:"minecraft:block/iron_block",particle:"minecraft:block/iron_block"}},vx={id:183,transparent:!1,textures:{down:"minecraft:block/iron_ore",up:"minecraft:block/iron_ore",north:"minecraft:block/iron_ore",south:"minecraft:block/iron_ore",west:"minecraft:block/iron_ore",east:"minecraft:block/iron_ore",particle:"minecraft:block/iron_ore"}},wx={id:184,transparent:!1,textures:{down:"minecraft:block/pumpkin_top",up:"minecraft:block/pumpkin_top",north:"minecraft:block/jack_o_lantern",south:"minecraft:block/pumpkin_side",west:"minecraft:block/pumpkin_side",east:"minecraft:block/pumpkin_side",particle:"minecraft:block/jack_o_lantern"}},Sx={id:185,transparent:!1,textures:{down:"minecraft:block/jigsaw_side",up:"minecraft:block/jigsaw_lock",north:"minecraft:block/jigsaw_top",south:"minecraft:block/jigsaw_bottom",west:"minecraft:block/jigsaw_side",east:"minecraft:block/jigsaw_side",particle:"minecraft:block/jigsaw_top"}},Mx={id:186,transparent:!1,textures:{down:"minecraft:block/jukebox_side",up:"minecraft:block/jukebox_top",north:"minecraft:block/jukebox_side",south:"minecraft:block/jukebox_side",west:"minecraft:block/jukebox_side",east:"minecraft:block/jukebox_side",particle:"minecraft:block/jukebox_side"}},yx={id:187,transparent:!1,textures:{down:"minecraft:block/jungle_log_top",up:"minecraft:block/jungle_log_top",north:"minecraft:block/jungle_log",south:"minecraft:block/jungle_log",west:"minecraft:block/jungle_log",east:"minecraft:block/jungle_log",particle:"minecraft:block/jungle_log"}},Ex={id:188,transparent:!1,textures:{down:"minecraft:block/jungle_log_top",up:"minecraft:block/jungle_log_top",north:"minecraft:block/jungle_log",south:"minecraft:block/jungle_log",west:"minecraft:block/jungle_log",east:"minecraft:block/jungle_log",particle:"minecraft:block/jungle_log"}},Ax={id:189,transparent:!1,textures:{down:"minecraft:block/jungle_planks",up:"minecraft:block/jungle_planks",north:"minecraft:block/jungle_planks",south:"minecraft:block/jungle_planks",west:"minecraft:block/jungle_planks",east:"minecraft:block/jungle_planks",particle:"minecraft:block/jungle_planks"}},Tx={id:190,transparent:!1,textures:{down:"minecraft:block/jungle_log",up:"minecraft:block/jungle_log",north:"minecraft:block/jungle_log",south:"minecraft:block/jungle_log",west:"minecraft:block/jungle_log",east:"minecraft:block/jungle_log",particle:"minecraft:block/jungle_log"}},Cx={id:191,transparent:!1,textures:{down:"minecraft:block/lapis_block",up:"minecraft:block/lapis_block",north:"minecraft:block/lapis_block",south:"minecraft:block/lapis_block",west:"minecraft:block/lapis_block",east:"minecraft:block/lapis_block",particle:"minecraft:block/lapis_block"}},Rx={id:192,transparent:!1,textures:{down:"minecraft:block/lapis_ore",up:"minecraft:block/lapis_ore",north:"minecraft:block/lapis_ore",south:"minecraft:block/lapis_ore",west:"minecraft:block/lapis_ore",east:"minecraft:block/lapis_ore",particle:"minecraft:block/lapis_ore"}},Px={id:193,transparent:!1,textures:{down:"minecraft:block/light_blue_concrete",up:"minecraft:block/light_blue_concrete",north:"minecraft:block/light_blue_concrete",south:"minecraft:block/light_blue_concrete",west:"minecraft:block/light_blue_concrete",east:"minecraft:block/light_blue_concrete",particle:"minecraft:block/light_blue_concrete"}},Lx={id:194,transparent:!1,textures:{down:"minecraft:block/light_blue_concrete_powder",up:"minecraft:block/light_blue_concrete_powder",north:"minecraft:block/light_blue_concrete_powder",south:"minecraft:block/light_blue_concrete_powder",west:"minecraft:block/light_blue_concrete_powder",east:"minecraft:block/light_blue_concrete_powder",particle:"minecraft:block/light_blue_concrete_powder"}},Dx={id:195,transparent:!0,translucent:!0,textures:{down:"minecraft:block/light_blue_stained_glass",up:"minecraft:block/light_blue_stained_glass",north:"minecraft:block/light_blue_stained_glass",south:"minecraft:block/light_blue_stained_glass",west:"minecraft:block/light_blue_stained_glass",east:"minecraft:block/light_blue_stained_glass",particle:"minecraft:block/light_blue_stained_glass"}},Ix={id:196,transparent:!1,textures:{down:"minecraft:block/light_blue_terracotta",up:"minecraft:block/light_blue_terracotta",north:"minecraft:block/light_blue_terracotta",south:"minecraft:block/light_blue_terracotta",west:"minecraft:block/light_blue_terracotta",east:"minecraft:block/light_blue_terracotta",particle:"minecraft:block/light_blue_terracotta"}},Ux={id:197,transparent:!1,textures:{down:"minecraft:block/light_blue_wool",up:"minecraft:block/light_blue_wool",north:"minecraft:block/light_blue_wool",south:"minecraft:block/light_blue_wool",west:"minecraft:block/light_blue_wool",east:"minecraft:block/light_blue_wool",particle:"minecraft:block/light_blue_wool"}},Nx={id:198,transparent:!1,textures:{down:"minecraft:block/light_gray_concrete",up:"minecraft:block/light_gray_concrete",north:"minecraft:block/light_gray_concrete",south:"minecraft:block/light_gray_concrete",west:"minecraft:block/light_gray_concrete",east:"minecraft:block/light_gray_concrete",particle:"minecraft:block/light_gray_concrete"}},Fx={id:199,transparent:!1,textures:{down:"minecraft:block/light_gray_concrete_powder",up:"minecraft:block/light_gray_concrete_powder",north:"minecraft:block/light_gray_concrete_powder",south:"minecraft:block/light_gray_concrete_powder",west:"minecraft:block/light_gray_concrete_powder",east:"minecraft:block/light_gray_concrete_powder",particle:"minecraft:block/light_gray_concrete_powder"}},Ox={id:200,transparent:!0,translucent:!0,textures:{down:"minecraft:block/light_gray_stained_glass",up:"minecraft:block/light_gray_stained_glass",north:"minecraft:block/light_gray_stained_glass",south:"minecraft:block/light_gray_stained_glass",west:"minecraft:block/light_gray_stained_glass",east:"minecraft:block/light_gray_stained_glass",particle:"minecraft:block/light_gray_stained_glass"}},Bx={id:201,transparent:!1,textures:{down:"minecraft:block/light_gray_terracotta",up:"minecraft:block/light_gray_terracotta",north:"minecraft:block/light_gray_terracotta",south:"minecraft:block/light_gray_terracotta",west:"minecraft:block/light_gray_terracotta",east:"minecraft:block/light_gray_terracotta",particle:"minecraft:block/light_gray_terracotta"}},zx={id:202,transparent:!1,textures:{down:"minecraft:block/light_gray_wool",up:"minecraft:block/light_gray_wool",north:"minecraft:block/light_gray_wool",south:"minecraft:block/light_gray_wool",west:"minecraft:block/light_gray_wool",east:"minecraft:block/light_gray_wool",particle:"minecraft:block/light_gray_wool"}},Vx={id:203,transparent:!1,textures:{down:"minecraft:block/lime_concrete",up:"minecraft:block/lime_concrete",north:"minecraft:block/lime_concrete",south:"minecraft:block/lime_concrete",west:"minecraft:block/lime_concrete",east:"minecraft:block/lime_concrete",particle:"minecraft:block/lime_concrete"}},Hx={id:204,transparent:!1,textures:{down:"minecraft:block/lime_concrete_powder",up:"minecraft:block/lime_concrete_powder",north:"minecraft:block/lime_concrete_powder",south:"minecraft:block/lime_concrete_powder",west:"minecraft:block/lime_concrete_powder",east:"minecraft:block/lime_concrete_powder",particle:"minecraft:block/lime_concrete_powder"}},Gx={id:205,transparent:!0,translucent:!0,textures:{down:"minecraft:block/lime_stained_glass",up:"minecraft:block/lime_stained_glass",north:"minecraft:block/lime_stained_glass",south:"minecraft:block/lime_stained_glass",west:"minecraft:block/lime_stained_glass",east:"minecraft:block/lime_stained_glass",particle:"minecraft:block/lime_stained_glass"}},Wx={id:206,transparent:!1,textures:{down:"minecraft:block/lime_terracotta",up:"minecraft:block/lime_terracotta",north:"minecraft:block/lime_terracotta",south:"minecraft:block/lime_terracotta",west:"minecraft:block/lime_terracotta",east:"minecraft:block/lime_terracotta",particle:"minecraft:block/lime_terracotta"}},Xx={id:207,transparent:!1,textures:{down:"minecraft:block/lime_wool",up:"minecraft:block/lime_wool",north:"minecraft:block/lime_wool",south:"minecraft:block/lime_wool",west:"minecraft:block/lime_wool",east:"minecraft:block/lime_wool",particle:"minecraft:block/lime_wool"}},$x={id:208,transparent:!1,textures:{down:"minecraft:block/lodestone_top",up:"minecraft:block/lodestone_top",north:"minecraft:block/lodestone_side",south:"minecraft:block/lodestone_side",west:"minecraft:block/lodestone_side",east:"minecraft:block/lodestone_side",particle:"minecraft:block/lodestone_side"}},qx={id:209,transparent:!1,textures:{down:"minecraft:block/magenta_concrete",up:"minecraft:block/magenta_concrete",north:"minecraft:block/magenta_concrete",south:"minecraft:block/magenta_concrete",west:"minecraft:block/magenta_concrete",east:"minecraft:block/magenta_concrete",particle:"minecraft:block/magenta_concrete"}},Yx={id:210,transparent:!1,textures:{down:"minecraft:block/magenta_concrete_powder",up:"minecraft:block/magenta_concrete_powder",north:"minecraft:block/magenta_concrete_powder",south:"minecraft:block/magenta_concrete_powder",west:"minecraft:block/magenta_concrete_powder",east:"minecraft:block/magenta_concrete_powder",particle:"minecraft:block/magenta_concrete_powder"}},Kx={id:211,transparent:!0,translucent:!0,textures:{down:"minecraft:block/magenta_stained_glass",up:"minecraft:block/magenta_stained_glass",north:"minecraft:block/magenta_stained_glass",south:"minecraft:block/magenta_stained_glass",west:"minecraft:block/magenta_stained_glass",east:"minecraft:block/magenta_stained_glass",particle:"minecraft:block/magenta_stained_glass"}},jx={id:212,transparent:!1,textures:{down:"minecraft:block/magenta_terracotta",up:"minecraft:block/magenta_terracotta",north:"minecraft:block/magenta_terracotta",south:"minecraft:block/magenta_terracotta",west:"minecraft:block/magenta_terracotta",east:"minecraft:block/magenta_terracotta",particle:"minecraft:block/magenta_terracotta"}},Zx={id:213,transparent:!1,textures:{down:"minecraft:block/magenta_wool",up:"minecraft:block/magenta_wool",north:"minecraft:block/magenta_wool",south:"minecraft:block/magenta_wool",west:"minecraft:block/magenta_wool",east:"minecraft:block/magenta_wool",particle:"minecraft:block/magenta_wool"}},Jx={id:214,transparent:!1,textures:{down:"minecraft:block/magma",up:"minecraft:block/magma",north:"minecraft:block/magma",south:"minecraft:block/magma",west:"minecraft:block/magma",east:"minecraft:block/magma",particle:"minecraft:block/magma"}},Qx={id:215,transparent:!1,textures:{down:"minecraft:block/mangrove_log_top",up:"minecraft:block/mangrove_log_top",north:"minecraft:block/mangrove_log",south:"minecraft:block/mangrove_log",west:"minecraft:block/mangrove_log",east:"minecraft:block/mangrove_log",particle:"minecraft:block/mangrove_log"}},e0={id:216,transparent:!1,textures:{down:"minecraft:block/mangrove_log_top",up:"minecraft:block/mangrove_log_top",north:"minecraft:block/mangrove_log",south:"minecraft:block/mangrove_log",west:"minecraft:block/mangrove_log",east:"minecraft:block/mangrove_log",particle:"minecraft:block/mangrove_log"}},t0={id:217,transparent:!1,textures:{down:"minecraft:block/mangrove_planks",up:"minecraft:block/mangrove_planks",north:"minecraft:block/mangrove_planks",south:"minecraft:block/mangrove_planks",west:"minecraft:block/mangrove_planks",east:"minecraft:block/mangrove_planks",particle:"minecraft:block/mangrove_planks"}},n0={id:218,transparent:!1,textures:{down:"minecraft:block/mangrove_log",up:"minecraft:block/mangrove_log",north:"minecraft:block/mangrove_log",south:"minecraft:block/mangrove_log",west:"minecraft:block/mangrove_log",east:"minecraft:block/mangrove_log",particle:"minecraft:block/mangrove_log"}},i0={id:219,transparent:!1,textures:{down:"minecraft:block/melon_top",up:"minecraft:block/melon_top",north:"minecraft:block/melon_side",south:"minecraft:block/melon_side",west:"minecraft:block/melon_side",east:"minecraft:block/melon_side",particle:"minecraft:block/melon_side"}},r0={id:220,transparent:!1,textures:{down:"minecraft:block/mossy_cobblestone",up:"minecraft:block/mossy_cobblestone",north:"minecraft:block/mossy_cobblestone",south:"minecraft:block/mossy_cobblestone",west:"minecraft:block/mossy_cobblestone",east:"minecraft:block/mossy_cobblestone",particle:"minecraft:block/mossy_cobblestone"}},o0={id:221,transparent:!1,textures:{down:"minecraft:block/mossy_stone_bricks",up:"minecraft:block/mossy_stone_bricks",north:"minecraft:block/mossy_stone_bricks",south:"minecraft:block/mossy_stone_bricks",west:"minecraft:block/mossy_stone_bricks",east:"minecraft:block/mossy_stone_bricks",particle:"minecraft:block/mossy_stone_bricks"}},a0={id:222,transparent:!1,textures:{down:"minecraft:block/moss_block",up:"minecraft:block/moss_block",north:"minecraft:block/moss_block",south:"minecraft:block/moss_block",west:"minecraft:block/moss_block",east:"minecraft:block/moss_block",particle:"minecraft:block/moss_block"}},s0={id:223,transparent:!1,textures:{down:"minecraft:block/mud",up:"minecraft:block/mud",north:"minecraft:block/mud",south:"minecraft:block/mud",west:"minecraft:block/mud",east:"minecraft:block/mud",particle:"minecraft:block/mud"}},c0={id:224,transparent:!1,textures:{down:"minecraft:block/muddy_mangrove_roots_top",up:"minecraft:block/muddy_mangrove_roots_top",north:"minecraft:block/muddy_mangrove_roots_side",south:"minecraft:block/muddy_mangrove_roots_side",west:"minecraft:block/muddy_mangrove_roots_side",east:"minecraft:block/muddy_mangrove_roots_side",particle:"minecraft:block/muddy_mangrove_roots_side"}},l0={id:225,transparent:!1,textures:{down:"minecraft:block/mud_bricks",up:"minecraft:block/mud_bricks",north:"minecraft:block/mud_bricks",south:"minecraft:block/mud_bricks",west:"minecraft:block/mud_bricks",east:"minecraft:block/mud_bricks",particle:"minecraft:block/mud_bricks"}},d0={id:226,transparent:!1,textures:{down:"minecraft:block/mushroom_stem",up:"minecraft:block/mushroom_stem",north:"minecraft:block/mushroom_stem",south:"minecraft:block/mushroom_stem",west:"minecraft:block/mushroom_stem",east:"minecraft:block/mushroom_stem",particle:"minecraft:block/mushroom_stem"}},u0={id:227,transparent:!1,textures:{down:"minecraft:block/netherite_block",up:"minecraft:block/netherite_block",north:"minecraft:block/netherite_block",south:"minecraft:block/netherite_block",west:"minecraft:block/netherite_block",east:"minecraft:block/netherite_block",particle:"minecraft:block/netherite_block"}},h0={id:228,transparent:!1,textures:{down:"minecraft:block/netherrack",up:"minecraft:block/netherrack",north:"minecraft:block/netherrack",south:"minecraft:block/netherrack",west:"minecraft:block/netherrack",east:"minecraft:block/netherrack",particle:"minecraft:block/netherrack"}},f0={id:229,transparent:!1,textures:{down:"minecraft:block/nether_bricks",up:"minecraft:block/nether_bricks",north:"minecraft:block/nether_bricks",south:"minecraft:block/nether_bricks",west:"minecraft:block/nether_bricks",east:"minecraft:block/nether_bricks",particle:"minecraft:block/nether_bricks"}},p0={id:230,transparent:!1,textures:{down:"minecraft:block/nether_gold_ore",up:"minecraft:block/nether_gold_ore",north:"minecraft:block/nether_gold_ore",south:"minecraft:block/nether_gold_ore",west:"minecraft:block/nether_gold_ore",east:"minecraft:block/nether_gold_ore",particle:"minecraft:block/nether_gold_ore"}},m0={id:231,transparent:!1,textures:{down:"minecraft:block/nether_quartz_ore",up:"minecraft:block/nether_quartz_ore",north:"minecraft:block/nether_quartz_ore",south:"minecraft:block/nether_quartz_ore",west:"minecraft:block/nether_quartz_ore",east:"minecraft:block/nether_quartz_ore",particle:"minecraft:block/nether_quartz_ore"}},_0={id:232,transparent:!1,textures:{down:"minecraft:block/nether_wart_block",up:"minecraft:block/nether_wart_block",north:"minecraft:block/nether_wart_block",south:"minecraft:block/nether_wart_block",west:"minecraft:block/nether_wart_block",east:"minecraft:block/nether_wart_block",particle:"minecraft:block/nether_wart_block"}},b0={id:233,transparent:!1,textures:{down:"minecraft:block/note_block",up:"minecraft:block/note_block",north:"minecraft:block/note_block",south:"minecraft:block/note_block",west:"minecraft:block/note_block",east:"minecraft:block/note_block",particle:"minecraft:block/note_block"}},g0={id:234,transparent:!1,textures:{down:"minecraft:block/oak_log_top",up:"minecraft:block/oak_log_top",north:"minecraft:block/oak_log",south:"minecraft:block/oak_log",west:"minecraft:block/oak_log",east:"minecraft:block/oak_log",particle:"minecraft:block/oak_log"}},k0={id:235,transparent:!1,textures:{down:"minecraft:block/oak_log_top",up:"minecraft:block/oak_log_top",north:"minecraft:block/oak_log",south:"minecraft:block/oak_log",west:"minecraft:block/oak_log",east:"minecraft:block/oak_log",particle:"minecraft:block/oak_log"}},x0={id:236,transparent:!1,textures:{down:"minecraft:block/oak_planks",up:"minecraft:block/oak_planks",north:"minecraft:block/oak_planks",south:"minecraft:block/oak_planks",west:"minecraft:block/oak_planks",east:"minecraft:block/oak_planks",particle:"minecraft:block/oak_planks"}},v0={id:237,transparent:!1,textures:{down:"minecraft:block/oak_log",up:"minecraft:block/oak_log",north:"minecraft:block/oak_log",south:"minecraft:block/oak_log",west:"minecraft:block/oak_log",east:"minecraft:block/oak_log",particle:"minecraft:block/oak_log"}},w0={id:238,transparent:!1,textures:{down:"block/observer_top",up:"block/observer_top",north:"block/observer_front",south:"block/observer_back",west:"block/observer_side",east:"block/observer_side",particle:"block/observer_front"}},S0={id:239,transparent:!1,textures:{down:"minecraft:block/obsidian",up:"minecraft:block/obsidian",north:"minecraft:block/obsidian",south:"minecraft:block/obsidian",west:"minecraft:block/obsidian",east:"minecraft:block/obsidian",particle:"minecraft:block/obsidian"}},M0={id:240,transparent:!1,textures:{down:"minecraft:block/ochre_froglight_top",up:"minecraft:block/ochre_froglight_top",north:"minecraft:block/ochre_froglight_side",south:"minecraft:block/ochre_froglight_side",west:"minecraft:block/ochre_froglight_side",east:"minecraft:block/ochre_froglight_side",particle:"minecraft:block/ochre_froglight_side"}},y0={id:241,transparent:!1,textures:{down:"minecraft:block/ochre_froglight_top",up:"minecraft:block/ochre_froglight_top",north:"minecraft:block/ochre_froglight_side",south:"minecraft:block/ochre_froglight_side",west:"minecraft:block/ochre_froglight_side",east:"minecraft:block/ochre_froglight_side",particle:"minecraft:block/ochre_froglight_side"}},E0={id:242,transparent:!1,textures:{down:"minecraft:block/orange_concrete",up:"minecraft:block/orange_concrete",north:"minecraft:block/orange_concrete",south:"minecraft:block/orange_concrete",west:"minecraft:block/orange_concrete",east:"minecraft:block/orange_concrete",particle:"minecraft:block/orange_concrete"}},A0={id:243,transparent:!1,textures:{down:"minecraft:block/orange_concrete_powder",up:"minecraft:block/orange_concrete_powder",north:"minecraft:block/orange_concrete_powder",south:"minecraft:block/orange_concrete_powder",west:"minecraft:block/orange_concrete_powder",east:"minecraft:block/orange_concrete_powder",particle:"minecraft:block/orange_concrete_powder"}},T0={id:244,transparent:!0,translucent:!0,textures:{down:"minecraft:block/orange_stained_glass",up:"minecraft:block/orange_stained_glass",north:"minecraft:block/orange_stained_glass",south:"minecraft:block/orange_stained_glass",west:"minecraft:block/orange_stained_glass",east:"minecraft:block/orange_stained_glass",particle:"minecraft:block/orange_stained_glass"}},C0={id:245,transparent:!1,textures:{down:"minecraft:block/orange_terracotta",up:"minecraft:block/orange_terracotta",north:"minecraft:block/orange_terracotta",south:"minecraft:block/orange_terracotta",west:"minecraft:block/orange_terracotta",east:"minecraft:block/orange_terracotta",particle:"minecraft:block/orange_terracotta"}},R0={id:246,transparent:!1,textures:{down:"minecraft:block/orange_wool",up:"minecraft:block/orange_wool",north:"minecraft:block/orange_wool",south:"minecraft:block/orange_wool",west:"minecraft:block/orange_wool",east:"minecraft:block/orange_wool",particle:"minecraft:block/orange_wool"}},P0={id:247,transparent:!1,textures:{down:"minecraft:block/oxidized_chiseled_copper",up:"minecraft:block/oxidized_chiseled_copper",north:"minecraft:block/oxidized_chiseled_copper",south:"minecraft:block/oxidized_chiseled_copper",west:"minecraft:block/oxidized_chiseled_copper",east:"minecraft:block/oxidized_chiseled_copper",particle:"minecraft:block/oxidized_chiseled_copper"}},L0={id:248,transparent:!1,textures:{down:"minecraft:block/oxidized_copper",up:"minecraft:block/oxidized_copper",north:"minecraft:block/oxidized_copper",south:"minecraft:block/oxidized_copper",west:"minecraft:block/oxidized_copper",east:"minecraft:block/oxidized_copper",particle:"minecraft:block/oxidized_copper"}},D0={id:249,transparent:!1,textures:{down:"minecraft:block/oxidized_copper_bulb",up:"minecraft:block/oxidized_copper_bulb",north:"minecraft:block/oxidized_copper_bulb",south:"minecraft:block/oxidized_copper_bulb",west:"minecraft:block/oxidized_copper_bulb",east:"minecraft:block/oxidized_copper_bulb",particle:"minecraft:block/oxidized_copper_bulb"}},I0={id:250,transparent:!1,textures:{down:"minecraft:block/oxidized_copper_bulb_lit",up:"minecraft:block/oxidized_copper_bulb_lit",north:"minecraft:block/oxidized_copper_bulb_lit",south:"minecraft:block/oxidized_copper_bulb_lit",west:"minecraft:block/oxidized_copper_bulb_lit",east:"minecraft:block/oxidized_copper_bulb_lit",particle:"minecraft:block/oxidized_copper_bulb_lit"}},U0={id:251,transparent:!1,textures:{down:"minecraft:block/oxidized_copper_bulb_lit_powered",up:"minecraft:block/oxidized_copper_bulb_lit_powered",north:"minecraft:block/oxidized_copper_bulb_lit_powered",south:"minecraft:block/oxidized_copper_bulb_lit_powered",west:"minecraft:block/oxidized_copper_bulb_lit_powered",east:"minecraft:block/oxidized_copper_bulb_lit_powered",particle:"minecraft:block/oxidized_copper_bulb_lit_powered"}},N0={id:252,transparent:!1,textures:{down:"minecraft:block/oxidized_copper_bulb_powered",up:"minecraft:block/oxidized_copper_bulb_powered",north:"minecraft:block/oxidized_copper_bulb_powered",south:"minecraft:block/oxidized_copper_bulb_powered",west:"minecraft:block/oxidized_copper_bulb_powered",east:"minecraft:block/oxidized_copper_bulb_powered",particle:"minecraft:block/oxidized_copper_bulb_powered"}},F0={id:253,transparent:!1,textures:{down:"minecraft:block/oxidized_copper_grate",up:"minecraft:block/oxidized_copper_grate",north:"minecraft:block/oxidized_copper_grate",south:"minecraft:block/oxidized_copper_grate",west:"minecraft:block/oxidized_copper_grate",east:"minecraft:block/oxidized_copper_grate",particle:"minecraft:block/oxidized_copper_grate"}},O0={id:254,transparent:!1,textures:{down:"minecraft:block/oxidized_cut_copper",up:"minecraft:block/oxidized_cut_copper",north:"minecraft:block/oxidized_cut_copper",south:"minecraft:block/oxidized_cut_copper",west:"minecraft:block/oxidized_cut_copper",east:"minecraft:block/oxidized_cut_copper",particle:"minecraft:block/oxidized_cut_copper"}},B0={id:255,transparent:!0,textures:{down:"minecraft:block/packed_ice",up:"minecraft:block/packed_ice",north:"minecraft:block/packed_ice",south:"minecraft:block/packed_ice",west:"minecraft:block/packed_ice",east:"minecraft:block/packed_ice",particle:"minecraft:block/packed_ice"}},z0={id:256,transparent:!1,textures:{down:"minecraft:block/packed_mud",up:"minecraft:block/packed_mud",north:"minecraft:block/packed_mud",south:"minecraft:block/packed_mud",west:"minecraft:block/packed_mud",east:"minecraft:block/packed_mud",particle:"minecraft:block/packed_mud"}},V0={id:257,transparent:!1,textures:{down:"minecraft:block/pale_moss_block",up:"minecraft:block/pale_moss_block",north:"minecraft:block/pale_moss_block",south:"minecraft:block/pale_moss_block",west:"minecraft:block/pale_moss_block",east:"minecraft:block/pale_moss_block",particle:"minecraft:block/pale_moss_block"}},H0={id:258,transparent:!1,textures:{down:"minecraft:block/pale_oak_log_top",up:"minecraft:block/pale_oak_log_top",north:"minecraft:block/pale_oak_log",south:"minecraft:block/pale_oak_log",west:"minecraft:block/pale_oak_log",east:"minecraft:block/pale_oak_log",particle:"minecraft:block/pale_oak_log"}},G0={id:259,transparent:!1,textures:{down:"minecraft:block/pale_oak_log_top",up:"minecraft:block/pale_oak_log_top",north:"minecraft:block/pale_oak_log",south:"minecraft:block/pale_oak_log",west:"minecraft:block/pale_oak_log",east:"minecraft:block/pale_oak_log",particle:"minecraft:block/pale_oak_log"}},W0={id:260,transparent:!1,textures:{down:"minecraft:block/pale_oak_planks",up:"minecraft:block/pale_oak_planks",north:"minecraft:block/pale_oak_planks",south:"minecraft:block/pale_oak_planks",west:"minecraft:block/pale_oak_planks",east:"minecraft:block/pale_oak_planks",particle:"minecraft:block/pale_oak_planks"}},X0={id:261,transparent:!1,textures:{down:"minecraft:block/pale_oak_log",up:"minecraft:block/pale_oak_log",north:"minecraft:block/pale_oak_log",south:"minecraft:block/pale_oak_log",west:"minecraft:block/pale_oak_log",east:"minecraft:block/pale_oak_log",particle:"minecraft:block/pale_oak_log"}},$0={id:262,transparent:!1,textures:{down:"minecraft:block/pearlescent_froglight_top",up:"minecraft:block/pearlescent_froglight_top",north:"minecraft:block/pearlescent_froglight_side",south:"minecraft:block/pearlescent_froglight_side",west:"minecraft:block/pearlescent_froglight_side",east:"minecraft:block/pearlescent_froglight_side",particle:"minecraft:block/pearlescent_froglight_side"}},q0={id:263,transparent:!1,textures:{down:"minecraft:block/pearlescent_froglight_top",up:"minecraft:block/pearlescent_froglight_top",north:"minecraft:block/pearlescent_froglight_side",south:"minecraft:block/pearlescent_froglight_side",west:"minecraft:block/pearlescent_froglight_side",east:"minecraft:block/pearlescent_froglight_side",particle:"minecraft:block/pearlescent_froglight_side"}},Y0={id:264,transparent:!1,textures:{down:"minecraft:block/pink_concrete",up:"minecraft:block/pink_concrete",north:"minecraft:block/pink_concrete",south:"minecraft:block/pink_concrete",west:"minecraft:block/pink_concrete",east:"minecraft:block/pink_concrete",particle:"minecraft:block/pink_concrete"}},K0={id:265,transparent:!1,textures:{down:"minecraft:block/pink_concrete_powder",up:"minecraft:block/pink_concrete_powder",north:"minecraft:block/pink_concrete_powder",south:"minecraft:block/pink_concrete_powder",west:"minecraft:block/pink_concrete_powder",east:"minecraft:block/pink_concrete_powder",particle:"minecraft:block/pink_concrete_powder"}},j0={id:266,transparent:!0,translucent:!0,textures:{down:"minecraft:block/pink_stained_glass",up:"minecraft:block/pink_stained_glass",north:"minecraft:block/pink_stained_glass",south:"minecraft:block/pink_stained_glass",west:"minecraft:block/pink_stained_glass",east:"minecraft:block/pink_stained_glass",particle:"minecraft:block/pink_stained_glass"}},Z0={id:267,transparent:!1,textures:{down:"minecraft:block/pink_terracotta",up:"minecraft:block/pink_terracotta",north:"minecraft:block/pink_terracotta",south:"minecraft:block/pink_terracotta",west:"minecraft:block/pink_terracotta",east:"minecraft:block/pink_terracotta",particle:"minecraft:block/pink_terracotta"}},J0={id:268,transparent:!1,textures:{down:"minecraft:block/pink_wool",up:"minecraft:block/pink_wool",north:"minecraft:block/pink_wool",south:"minecraft:block/pink_wool",west:"minecraft:block/pink_wool",east:"minecraft:block/pink_wool",particle:"minecraft:block/pink_wool"}},Q0={id:269,transparent:!1,textures:{down:"minecraft:block/polished_andesite",up:"minecraft:block/polished_andesite",north:"minecraft:block/polished_andesite",south:"minecraft:block/polished_andesite",west:"minecraft:block/polished_andesite",east:"minecraft:block/polished_andesite",particle:"minecraft:block/polished_andesite"}},ev={id:270,transparent:!1,textures:{down:"minecraft:block/polished_basalt_top",up:"minecraft:block/polished_basalt_top",north:"minecraft:block/polished_basalt_side",south:"minecraft:block/polished_basalt_side",west:"minecraft:block/polished_basalt_side",east:"minecraft:block/polished_basalt_side",particle:"minecraft:block/polished_basalt_side"}},tv={id:271,transparent:!1,textures:{down:"minecraft:block/polished_blackstone",up:"minecraft:block/polished_blackstone",north:"minecraft:block/polished_blackstone",south:"minecraft:block/polished_blackstone",west:"minecraft:block/polished_blackstone",east:"minecraft:block/polished_blackstone",particle:"minecraft:block/polished_blackstone"}},nv={id:272,transparent:!1,textures:{down:"minecraft:block/polished_blackstone_bricks",up:"minecraft:block/polished_blackstone_bricks",north:"minecraft:block/polished_blackstone_bricks",south:"minecraft:block/polished_blackstone_bricks",west:"minecraft:block/polished_blackstone_bricks",east:"minecraft:block/polished_blackstone_bricks",particle:"minecraft:block/polished_blackstone_bricks"}},iv={id:273,transparent:!1,textures:{down:"minecraft:block/polished_deepslate",up:"minecraft:block/polished_deepslate",north:"minecraft:block/polished_deepslate",south:"minecraft:block/polished_deepslate",west:"minecraft:block/polished_deepslate",east:"minecraft:block/polished_deepslate",particle:"minecraft:block/polished_deepslate"}},rv={id:274,transparent:!1,textures:{down:"minecraft:block/polished_diorite",up:"minecraft:block/polished_diorite",north:"minecraft:block/polished_diorite",south:"minecraft:block/polished_diorite",west:"minecraft:block/polished_diorite",east:"minecraft:block/polished_diorite",particle:"minecraft:block/polished_diorite"}},ov={id:275,transparent:!1,textures:{down:"minecraft:block/polished_granite",up:"minecraft:block/polished_granite",north:"minecraft:block/polished_granite",south:"minecraft:block/polished_granite",west:"minecraft:block/polished_granite",east:"minecraft:block/polished_granite",particle:"minecraft:block/polished_granite"}},av={id:276,transparent:!1,textures:{down:"minecraft:block/polished_tuff",up:"minecraft:block/polished_tuff",north:"minecraft:block/polished_tuff",south:"minecraft:block/polished_tuff",west:"minecraft:block/polished_tuff",east:"minecraft:block/polished_tuff",particle:"minecraft:block/polished_tuff"}},sv={id:277,transparent:!1,textures:{down:"minecraft:block/prismarine",up:"minecraft:block/prismarine",north:"minecraft:block/prismarine",south:"minecraft:block/prismarine",west:"minecraft:block/prismarine",east:"minecraft:block/prismarine",particle:"minecraft:block/prismarine"}},cv={id:278,transparent:!1,textures:{down:"minecraft:block/prismarine_bricks",up:"minecraft:block/prismarine_bricks",north:"minecraft:block/prismarine_bricks",south:"minecraft:block/prismarine_bricks",west:"minecraft:block/prismarine_bricks",east:"minecraft:block/prismarine_bricks",particle:"minecraft:block/prismarine_bricks"}},lv={id:279,transparent:!1,textures:{down:"block/pumpkin_top",up:"block/pumpkin_top",north:"block/pumpkin_side",south:"block/pumpkin_side",west:"block/pumpkin_side",east:"block/pumpkin_side",particle:"block/pumpkin_side"}},dv={id:280,transparent:!1,textures:{down:"minecraft:block/purple_concrete",up:"minecraft:block/purple_concrete",north:"minecraft:block/purple_concrete",south:"minecraft:block/purple_concrete",west:"minecraft:block/purple_concrete",east:"minecraft:block/purple_concrete",particle:"minecraft:block/purple_concrete"}},uv={id:281,transparent:!1,textures:{down:"minecraft:block/purple_concrete_powder",up:"minecraft:block/purple_concrete_powder",north:"minecraft:block/purple_concrete_powder",south:"minecraft:block/purple_concrete_powder",west:"minecraft:block/purple_concrete_powder",east:"minecraft:block/purple_concrete_powder",particle:"minecraft:block/purple_concrete_powder"}},hv={id:282,transparent:!0,translucent:!0,textures:{down:"minecraft:block/purple_stained_glass",up:"minecraft:block/purple_stained_glass",north:"minecraft:block/purple_stained_glass",south:"minecraft:block/purple_stained_glass",west:"minecraft:block/purple_stained_glass",east:"minecraft:block/purple_stained_glass",particle:"minecraft:block/purple_stained_glass"}},fv={id:283,transparent:!1,textures:{down:"minecraft:block/purple_terracotta",up:"minecraft:block/purple_terracotta",north:"minecraft:block/purple_terracotta",south:"minecraft:block/purple_terracotta",west:"minecraft:block/purple_terracotta",east:"minecraft:block/purple_terracotta",particle:"minecraft:block/purple_terracotta"}},pv={id:284,transparent:!1,textures:{down:"minecraft:block/purple_wool",up:"minecraft:block/purple_wool",north:"minecraft:block/purple_wool",south:"minecraft:block/purple_wool",west:"minecraft:block/purple_wool",east:"minecraft:block/purple_wool",particle:"minecraft:block/purple_wool"}},mv={id:285,transparent:!1,textures:{down:"minecraft:block/purpur_block",up:"minecraft:block/purpur_block",north:"minecraft:block/purpur_block",south:"minecraft:block/purpur_block",west:"minecraft:block/purpur_block",east:"minecraft:block/purpur_block",particle:"minecraft:block/purpur_block"}},_v={id:286,transparent:!1,textures:{down:"minecraft:block/purpur_pillar_top",up:"minecraft:block/purpur_pillar_top",north:"minecraft:block/purpur_pillar",south:"minecraft:block/purpur_pillar",west:"minecraft:block/purpur_pillar",east:"minecraft:block/purpur_pillar",particle:"minecraft:block/purpur_pillar"}},bv={id:287,transparent:!1,textures:{down:"minecraft:block/purpur_pillar_top",up:"minecraft:block/purpur_pillar_top",north:"minecraft:block/purpur_pillar",south:"minecraft:block/purpur_pillar",west:"minecraft:block/purpur_pillar",east:"minecraft:block/purpur_pillar",particle:"minecraft:block/purpur_pillar"}},gv={id:288,transparent:!1,textures:{down:"minecraft:block/quartz_block_top",up:"minecraft:block/quartz_block_top",north:"minecraft:block/quartz_block_side",south:"minecraft:block/quartz_block_side",west:"minecraft:block/quartz_block_side",east:"minecraft:block/quartz_block_side",particle:"minecraft:block/quartz_block_side"}},kv={id:289,transparent:!1,textures:{down:"minecraft:block/quartz_bricks",up:"minecraft:block/quartz_bricks",north:"minecraft:block/quartz_bricks",south:"minecraft:block/quartz_bricks",west:"minecraft:block/quartz_bricks",east:"minecraft:block/quartz_bricks",particle:"minecraft:block/quartz_bricks"}},xv={id:290,transparent:!1,textures:{down:"minecraft:block/quartz_pillar_top",up:"minecraft:block/quartz_pillar_top",north:"minecraft:block/quartz_pillar",south:"minecraft:block/quartz_pillar",west:"minecraft:block/quartz_pillar",east:"minecraft:block/quartz_pillar",particle:"minecraft:block/quartz_pillar"}},vv={id:291,transparent:!1,textures:{down:"minecraft:block/quartz_pillar_top",up:"minecraft:block/quartz_pillar_top",north:"minecraft:block/quartz_pillar",south:"minecraft:block/quartz_pillar",west:"minecraft:block/quartz_pillar",east:"minecraft:block/quartz_pillar",particle:"minecraft:block/quartz_pillar"}},wv={id:292,transparent:!1,textures:{down:"minecraft:block/raw_copper_block",up:"minecraft:block/raw_copper_block",north:"minecraft:block/raw_copper_block",south:"minecraft:block/raw_copper_block",west:"minecraft:block/raw_copper_block",east:"minecraft:block/raw_copper_block",particle:"minecraft:block/raw_copper_block"}},Sv={id:293,transparent:!1,textures:{down:"minecraft:block/raw_gold_block",up:"minecraft:block/raw_gold_block",north:"minecraft:block/raw_gold_block",south:"minecraft:block/raw_gold_block",west:"minecraft:block/raw_gold_block",east:"minecraft:block/raw_gold_block",particle:"minecraft:block/raw_gold_block"}},Mv={id:294,transparent:!1,textures:{down:"minecraft:block/raw_iron_block",up:"minecraft:block/raw_iron_block",north:"minecraft:block/raw_iron_block",south:"minecraft:block/raw_iron_block",west:"minecraft:block/raw_iron_block",east:"minecraft:block/raw_iron_block",particle:"minecraft:block/raw_iron_block"}},yv={id:295,transparent:!1,textures:{down:"minecraft:block/redstone_block",up:"minecraft:block/redstone_block",north:"minecraft:block/redstone_block",south:"minecraft:block/redstone_block",west:"minecraft:block/redstone_block",east:"minecraft:block/redstone_block",particle:"minecraft:block/redstone_block"}},Ev={id:296,transparent:!1,textures:{down:"minecraft:block/redstone_lamp",up:"minecraft:block/redstone_lamp",north:"minecraft:block/redstone_lamp",south:"minecraft:block/redstone_lamp",west:"minecraft:block/redstone_lamp",east:"minecraft:block/redstone_lamp",particle:"minecraft:block/redstone_lamp"}},Av={id:297,transparent:!1,textures:{down:"minecraft:block/redstone_lamp_on",up:"minecraft:block/redstone_lamp_on",north:"minecraft:block/redstone_lamp_on",south:"minecraft:block/redstone_lamp_on",west:"minecraft:block/redstone_lamp_on",east:"minecraft:block/redstone_lamp_on",particle:"minecraft:block/redstone_lamp_on"}},Tv={id:298,transparent:!1,textures:{down:"minecraft:block/redstone_ore",up:"minecraft:block/redstone_ore",north:"minecraft:block/redstone_ore",south:"minecraft:block/redstone_ore",west:"minecraft:block/redstone_ore",east:"minecraft:block/redstone_ore",particle:"minecraft:block/redstone_ore"}},Cv={id:299,transparent:!1,textures:{down:"minecraft:block/red_concrete",up:"minecraft:block/red_concrete",north:"minecraft:block/red_concrete",south:"minecraft:block/red_concrete",west:"minecraft:block/red_concrete",east:"minecraft:block/red_concrete",particle:"minecraft:block/red_concrete"}},Rv={id:300,transparent:!1,textures:{down:"minecraft:block/red_concrete_powder",up:"minecraft:block/red_concrete_powder",north:"minecraft:block/red_concrete_powder",south:"minecraft:block/red_concrete_powder",west:"minecraft:block/red_concrete_powder",east:"minecraft:block/red_concrete_powder",particle:"minecraft:block/red_concrete_powder"}},Pv={id:301,transparent:!1,textures:{down:"minecraft:block/red_mushroom_block",up:"minecraft:block/red_mushroom_block",north:"minecraft:block/red_mushroom_block",south:"minecraft:block/red_mushroom_block",west:"minecraft:block/red_mushroom_block",east:"minecraft:block/red_mushroom_block",particle:"minecraft:block/red_mushroom_block"}},Lv={id:302,transparent:!1,textures:{down:"minecraft:block/red_nether_bricks",up:"minecraft:block/red_nether_bricks",north:"minecraft:block/red_nether_bricks",south:"minecraft:block/red_nether_bricks",west:"minecraft:block/red_nether_bricks",east:"minecraft:block/red_nether_bricks",particle:"minecraft:block/red_nether_bricks"}},Dv={id:303,transparent:!1,textures:{down:"minecraft:block/red_sand",up:"minecraft:block/red_sand",north:"minecraft:block/red_sand",south:"minecraft:block/red_sand",west:"minecraft:block/red_sand",east:"minecraft:block/red_sand",particle:"minecraft:block/red_sand"}},Iv={id:304,transparent:!0,translucent:!0,textures:{down:"minecraft:block/red_stained_glass",up:"minecraft:block/red_stained_glass",north:"minecraft:block/red_stained_glass",south:"minecraft:block/red_stained_glass",west:"minecraft:block/red_stained_glass",east:"minecraft:block/red_stained_glass",particle:"minecraft:block/red_stained_glass"}},Uv={id:305,transparent:!1,textures:{down:"minecraft:block/red_terracotta",up:"minecraft:block/red_terracotta",north:"minecraft:block/red_terracotta",south:"minecraft:block/red_terracotta",west:"minecraft:block/red_terracotta",east:"minecraft:block/red_terracotta",particle:"minecraft:block/red_terracotta"}},Nv={id:306,transparent:!1,textures:{down:"minecraft:block/red_wool",up:"minecraft:block/red_wool",north:"minecraft:block/red_wool",south:"minecraft:block/red_wool",west:"minecraft:block/red_wool",east:"minecraft:block/red_wool",particle:"minecraft:block/red_wool"}},Fv={id:307,transparent:!1,textures:{down:"minecraft:block/resin_block",up:"minecraft:block/resin_block",north:"minecraft:block/resin_block",south:"minecraft:block/resin_block",west:"minecraft:block/resin_block",east:"minecraft:block/resin_block",particle:"minecraft:block/resin_block"}},Ov={id:308,transparent:!1,textures:{down:"minecraft:block/resin_bricks",up:"minecraft:block/resin_bricks",north:"minecraft:block/resin_bricks",south:"minecraft:block/resin_bricks",west:"minecraft:block/resin_bricks",east:"minecraft:block/resin_bricks",particle:"minecraft:block/resin_bricks"}},Bv={id:309,transparent:!1,textures:{down:"minecraft:block/rooted_dirt",up:"minecraft:block/rooted_dirt",north:"minecraft:block/rooted_dirt",south:"minecraft:block/rooted_dirt",west:"minecraft:block/rooted_dirt",east:"minecraft:block/rooted_dirt",particle:"minecraft:block/rooted_dirt"}},zv={id:310,transparent:!1,textures:{down:"minecraft:block/sand",up:"minecraft:block/sand",north:"minecraft:block/sand",south:"minecraft:block/sand",west:"minecraft:block/sand",east:"minecraft:block/sand",particle:"minecraft:block/sand"}},Vv={id:311,transparent:!1,textures:{down:"minecraft:block/sculk",up:"minecraft:block/sculk",north:"minecraft:block/sculk",south:"minecraft:block/sculk",west:"minecraft:block/sculk",east:"minecraft:block/sculk",particle:"minecraft:block/sculk"}},Hv={id:312,transparent:!1,textures:{down:"minecraft:block/sea_lantern",up:"minecraft:block/sea_lantern",north:"minecraft:block/sea_lantern",south:"minecraft:block/sea_lantern",west:"minecraft:block/sea_lantern",east:"minecraft:block/sea_lantern",particle:"minecraft:block/sea_lantern"}},Gv={id:313,transparent:!1,textures:{down:"minecraft:block/shroomlight",up:"minecraft:block/shroomlight",north:"minecraft:block/shroomlight",south:"minecraft:block/shroomlight",west:"minecraft:block/shroomlight",east:"minecraft:block/shroomlight",particle:"minecraft:block/shroomlight"}},Wv={id:314,transparent:!1,textures:{down:"block/slime_block",up:"block/slime_block",north:"block/slime_block",south:"block/slime_block",west:"block/slime_block",east:"block/slime_block",particle:"block/slime_block"}},Xv={id:315,transparent:!1,textures:{down:"minecraft:block/smithing_table_bottom",up:"minecraft:block/smithing_table_top",north:"minecraft:block/smithing_table_front",south:"minecraft:block/smithing_table_front",west:"minecraft:block/smithing_table_side",east:"minecraft:block/smithing_table_side",particle:"minecraft:block/smithing_table_front"}},$v={id:316,transparent:!1,textures:{down:"minecraft:block/smooth_basalt",up:"minecraft:block/smooth_basalt",north:"minecraft:block/smooth_basalt",south:"minecraft:block/smooth_basalt",west:"minecraft:block/smooth_basalt",east:"minecraft:block/smooth_basalt",particle:"minecraft:block/smooth_basalt"}},qv={id:317,transparent:!1,textures:{down:"minecraft:block/quartz_block_bottom",up:"minecraft:block/quartz_block_bottom",north:"minecraft:block/quartz_block_bottom",south:"minecraft:block/quartz_block_bottom",west:"minecraft:block/quartz_block_bottom",east:"minecraft:block/quartz_block_bottom",particle:"minecraft:block/quartz_block_bottom"}},Yv={id:318,transparent:!1,textures:{down:"minecraft:block/red_sandstone_top",up:"minecraft:block/red_sandstone_top",north:"minecraft:block/red_sandstone_top",south:"minecraft:block/red_sandstone_top",west:"minecraft:block/red_sandstone_top",east:"minecraft:block/red_sandstone_top",particle:"minecraft:block/red_sandstone_top"}},Kv={id:319,transparent:!1,textures:{down:"minecraft:block/sandstone_top",up:"minecraft:block/sandstone_top",north:"minecraft:block/sandstone_top",south:"minecraft:block/sandstone_top",west:"minecraft:block/sandstone_top",east:"minecraft:block/sandstone_top",particle:"minecraft:block/sandstone_top"}},jv={id:320,transparent:!1,textures:{down:"minecraft:block/smooth_stone",up:"minecraft:block/smooth_stone",north:"minecraft:block/smooth_stone",south:"minecraft:block/smooth_stone",west:"minecraft:block/smooth_stone",east:"minecraft:block/smooth_stone",particle:"minecraft:block/smooth_stone"}},Zv={id:321,transparent:!1,textures:{down:"minecraft:block/smooth_stone",up:"minecraft:block/smooth_stone",north:"minecraft:block/smooth_stone_slab_side",south:"minecraft:block/smooth_stone_slab_side",west:"minecraft:block/smooth_stone_slab_side",east:"minecraft:block/smooth_stone_slab_side",particle:"minecraft:block/smooth_stone_slab_side"}},Jv={id:322,transparent:!1,textures:{down:"minecraft:block/snow",up:"minecraft:block/snow",north:"minecraft:block/snow",south:"minecraft:block/snow",west:"minecraft:block/snow",east:"minecraft:block/snow",particle:"minecraft:block/snow"}},Qv={id:323,transparent:!1,textures:{down:"minecraft:block/soul_sand",up:"minecraft:block/soul_sand",north:"minecraft:block/soul_sand",south:"minecraft:block/soul_sand",west:"minecraft:block/soul_sand",east:"minecraft:block/soul_sand",particle:"minecraft:block/soul_sand"}},ew={id:324,transparent:!1,textures:{down:"minecraft:block/soul_soil",up:"minecraft:block/soul_soil",north:"minecraft:block/soul_soil",south:"minecraft:block/soul_soil",west:"minecraft:block/soul_soil",east:"minecraft:block/soul_soil",particle:"minecraft:block/soul_soil"}},tw={id:325,transparent:!1,textures:{down:"minecraft:block/sponge",up:"minecraft:block/sponge",north:"minecraft:block/sponge",south:"minecraft:block/sponge",west:"minecraft:block/sponge",east:"minecraft:block/sponge",particle:"minecraft:block/sponge"}},nw={id:326,transparent:!1,textures:{down:"minecraft:block/spruce_log_top",up:"minecraft:block/spruce_log_top",north:"minecraft:block/spruce_log",south:"minecraft:block/spruce_log",west:"minecraft:block/spruce_log",east:"minecraft:block/spruce_log",particle:"minecraft:block/spruce_log"}},iw={id:327,transparent:!1,textures:{down:"minecraft:block/spruce_log_top",up:"minecraft:block/spruce_log_top",north:"minecraft:block/spruce_log",south:"minecraft:block/spruce_log",west:"minecraft:block/spruce_log",east:"minecraft:block/spruce_log",particle:"minecraft:block/spruce_log"}},rw={id:328,transparent:!1,textures:{down:"minecraft:block/spruce_planks",up:"minecraft:block/spruce_planks",north:"minecraft:block/spruce_planks",south:"minecraft:block/spruce_planks",west:"minecraft:block/spruce_planks",east:"minecraft:block/spruce_planks",particle:"minecraft:block/spruce_planks"}},ow={id:329,transparent:!1,textures:{down:"minecraft:block/spruce_log",up:"minecraft:block/spruce_log",north:"minecraft:block/spruce_log",south:"minecraft:block/spruce_log",west:"minecraft:block/spruce_log",east:"minecraft:block/spruce_log",particle:"minecraft:block/spruce_log"}},aw={id:330,transparent:!1,textures:{down:"minecraft:block/acacia_planks",up:"minecraft:block/acacia_planks",north:"minecraft:block/acacia_planks",south:"minecraft:block/acacia_planks",west:"minecraft:block/acacia_planks",east:"minecraft:block/acacia_planks",particle:"minecraft:block/acacia_planks"}},sw={id:331,transparent:!1,textures:{down:"minecraft:block/stone_bricks",up:"minecraft:block/stone_bricks",north:"minecraft:block/stone_bricks",south:"minecraft:block/stone_bricks",west:"minecraft:block/stone_bricks",east:"minecraft:block/stone_bricks",particle:"minecraft:block/stone_bricks"}},cw={id:332,transparent:!1,textures:{down:"minecraft:block/stripped_acacia_log_top",up:"minecraft:block/stripped_acacia_log_top",north:"minecraft:block/stripped_acacia_log",south:"minecraft:block/stripped_acacia_log",west:"minecraft:block/stripped_acacia_log",east:"minecraft:block/stripped_acacia_log",particle:"minecraft:block/stripped_acacia_log"}},lw={id:333,transparent:!1,textures:{down:"minecraft:block/stripped_acacia_log_top",up:"minecraft:block/stripped_acacia_log_top",north:"minecraft:block/stripped_acacia_log",south:"minecraft:block/stripped_acacia_log",west:"minecraft:block/stripped_acacia_log",east:"minecraft:block/stripped_acacia_log",particle:"minecraft:block/stripped_acacia_log"}},dw={id:334,transparent:!1,textures:{down:"minecraft:block/stripped_acacia_log",up:"minecraft:block/stripped_acacia_log",north:"minecraft:block/stripped_acacia_log",south:"minecraft:block/stripped_acacia_log",west:"minecraft:block/stripped_acacia_log",east:"minecraft:block/stripped_acacia_log",particle:"minecraft:block/stripped_acacia_log"}},uw={id:335,transparent:!1,textures:{down:"minecraft:block/stripped_bamboo_block_top",up:"minecraft:block/stripped_bamboo_block_top",north:"minecraft:block/stripped_bamboo_block",south:"minecraft:block/stripped_bamboo_block",west:"minecraft:block/stripped_bamboo_block",east:"minecraft:block/stripped_bamboo_block",particle:"minecraft:block/stripped_bamboo_block"}},hw={id:336,transparent:!1,textures:{down:"minecraft:block/stripped_birch_log_top",up:"minecraft:block/stripped_birch_log_top",north:"minecraft:block/stripped_birch_log",south:"minecraft:block/stripped_birch_log",west:"minecraft:block/stripped_birch_log",east:"minecraft:block/stripped_birch_log",particle:"minecraft:block/stripped_birch_log"}},fw={id:337,transparent:!1,textures:{down:"minecraft:block/stripped_birch_log_top",up:"minecraft:block/stripped_birch_log_top",north:"minecraft:block/stripped_birch_log",south:"minecraft:block/stripped_birch_log",west:"minecraft:block/stripped_birch_log",east:"minecraft:block/stripped_birch_log",particle:"minecraft:block/stripped_birch_log"}},pw={id:338,transparent:!1,textures:{down:"minecraft:block/stripped_birch_log",up:"minecraft:block/stripped_birch_log",north:"minecraft:block/stripped_birch_log",south:"minecraft:block/stripped_birch_log",west:"minecraft:block/stripped_birch_log",east:"minecraft:block/stripped_birch_log",particle:"minecraft:block/stripped_birch_log"}},mw={id:339,transparent:!1,textures:{down:"minecraft:block/stripped_cherry_log_top",up:"minecraft:block/stripped_cherry_log_top",north:"minecraft:block/stripped_cherry_log",south:"minecraft:block/stripped_cherry_log",west:"minecraft:block/stripped_cherry_log",east:"minecraft:block/stripped_cherry_log",particle:"minecraft:block/stripped_cherry_log"}},_w={id:340,transparent:!1,textures:{down:"minecraft:block/stripped_cherry_log",up:"minecraft:block/stripped_cherry_log",north:"minecraft:block/stripped_cherry_log",south:"minecraft:block/stripped_cherry_log",west:"minecraft:block/stripped_cherry_log",east:"minecraft:block/stripped_cherry_log",particle:"minecraft:block/stripped_cherry_log"}},bw={id:341,transparent:!1,textures:{down:"minecraft:block/stripped_crimson_stem",up:"minecraft:block/stripped_crimson_stem",north:"minecraft:block/stripped_crimson_stem",south:"minecraft:block/stripped_crimson_stem",west:"minecraft:block/stripped_crimson_stem",east:"minecraft:block/stripped_crimson_stem",particle:"minecraft:block/stripped_crimson_stem"}},gw={id:342,transparent:!1,textures:{down:"minecraft:block/stripped_crimson_stem_top",up:"minecraft:block/stripped_crimson_stem_top",north:"minecraft:block/stripped_crimson_stem",south:"minecraft:block/stripped_crimson_stem",west:"minecraft:block/stripped_crimson_stem",east:"minecraft:block/stripped_crimson_stem",particle:"minecraft:block/stripped_crimson_stem"}},kw={id:343,transparent:!1,textures:{down:"minecraft:block/stripped_dark_oak_log_top",up:"minecraft:block/stripped_dark_oak_log_top",north:"minecraft:block/stripped_dark_oak_log",south:"minecraft:block/stripped_dark_oak_log",west:"minecraft:block/stripped_dark_oak_log",east:"minecraft:block/stripped_dark_oak_log",particle:"minecraft:block/stripped_dark_oak_log"}},xw={id:344,transparent:!1,textures:{down:"minecraft:block/stripped_dark_oak_log_top",up:"minecraft:block/stripped_dark_oak_log_top",north:"minecraft:block/stripped_dark_oak_log",south:"minecraft:block/stripped_dark_oak_log",west:"minecraft:block/stripped_dark_oak_log",east:"minecraft:block/stripped_dark_oak_log",particle:"minecraft:block/stripped_dark_oak_log"}},vw={id:345,transparent:!1,textures:{down:"minecraft:block/stripped_dark_oak_log",up:"minecraft:block/stripped_dark_oak_log",north:"minecraft:block/stripped_dark_oak_log",south:"minecraft:block/stripped_dark_oak_log",west:"minecraft:block/stripped_dark_oak_log",east:"minecraft:block/stripped_dark_oak_log",particle:"minecraft:block/stripped_dark_oak_log"}},ww={id:346,transparent:!1,textures:{down:"minecraft:block/stripped_jungle_log_top",up:"minecraft:block/stripped_jungle_log_top",north:"minecraft:block/stripped_jungle_log",south:"minecraft:block/stripped_jungle_log",west:"minecraft:block/stripped_jungle_log",east:"minecraft:block/stripped_jungle_log",particle:"minecraft:block/stripped_jungle_log"}},Sw={id:347,transparent:!1,textures:{down:"minecraft:block/stripped_jungle_log_top",up:"minecraft:block/stripped_jungle_log_top",north:"minecraft:block/stripped_jungle_log",south:"minecraft:block/stripped_jungle_log",west:"minecraft:block/stripped_jungle_log",east:"minecraft:block/stripped_jungle_log",particle:"minecraft:block/stripped_jungle_log"}},Mw={id:348,transparent:!1,textures:{down:"minecraft:block/stripped_jungle_log",up:"minecraft:block/stripped_jungle_log",north:"minecraft:block/stripped_jungle_log",south:"minecraft:block/stripped_jungle_log",west:"minecraft:block/stripped_jungle_log",east:"minecraft:block/stripped_jungle_log",particle:"minecraft:block/stripped_jungle_log"}},yw={id:349,transparent:!1,textures:{down:"minecraft:block/stripped_mangrove_log_top",up:"minecraft:block/stripped_mangrove_log_top",north:"minecraft:block/stripped_mangrove_log",south:"minecraft:block/stripped_mangrove_log",west:"minecraft:block/stripped_mangrove_log",east:"minecraft:block/stripped_mangrove_log",particle:"minecraft:block/stripped_mangrove_log"}},Ew={id:350,transparent:!1,textures:{down:"minecraft:block/stripped_mangrove_log_top",up:"minecraft:block/stripped_mangrove_log_top",north:"minecraft:block/stripped_mangrove_log",south:"minecraft:block/stripped_mangrove_log",west:"minecraft:block/stripped_mangrove_log",east:"minecraft:block/stripped_mangrove_log",particle:"minecraft:block/stripped_mangrove_log"}},Aw={id:351,transparent:!1,textures:{down:"minecraft:block/stripped_mangrove_log",up:"minecraft:block/stripped_mangrove_log",north:"minecraft:block/stripped_mangrove_log",south:"minecraft:block/stripped_mangrove_log",west:"minecraft:block/stripped_mangrove_log",east:"minecraft:block/stripped_mangrove_log",particle:"minecraft:block/stripped_mangrove_log"}},Tw={id:352,transparent:!1,textures:{down:"minecraft:block/stripped_oak_log_top",up:"minecraft:block/stripped_oak_log_top",north:"minecraft:block/stripped_oak_log",south:"minecraft:block/stripped_oak_log",west:"minecraft:block/stripped_oak_log",east:"minecraft:block/stripped_oak_log",particle:"minecraft:block/stripped_oak_log"}},Cw={id:353,transparent:!1,textures:{down:"minecraft:block/stripped_oak_log_top",up:"minecraft:block/stripped_oak_log_top",north:"minecraft:block/stripped_oak_log",south:"minecraft:block/stripped_oak_log",west:"minecraft:block/stripped_oak_log",east:"minecraft:block/stripped_oak_log",particle:"minecraft:block/stripped_oak_log"}},Rw={id:354,transparent:!1,textures:{down:"minecraft:block/stripped_oak_log",up:"minecraft:block/stripped_oak_log",north:"minecraft:block/stripped_oak_log",south:"minecraft:block/stripped_oak_log",west:"minecraft:block/stripped_oak_log",east:"minecraft:block/stripped_oak_log",particle:"minecraft:block/stripped_oak_log"}},Pw={id:355,transparent:!1,textures:{down:"minecraft:block/stripped_pale_oak_log_top",up:"minecraft:block/stripped_pale_oak_log_top",north:"minecraft:block/stripped_pale_oak_log",south:"minecraft:block/stripped_pale_oak_log",west:"minecraft:block/stripped_pale_oak_log",east:"minecraft:block/stripped_pale_oak_log",particle:"minecraft:block/stripped_pale_oak_log"}},Lw={id:356,transparent:!1,textures:{down:"minecraft:block/stripped_pale_oak_log_top",up:"minecraft:block/stripped_pale_oak_log_top",north:"minecraft:block/stripped_pale_oak_log",south:"minecraft:block/stripped_pale_oak_log",west:"minecraft:block/stripped_pale_oak_log",east:"minecraft:block/stripped_pale_oak_log",particle:"minecraft:block/stripped_pale_oak_log"}},Dw={id:357,transparent:!1,textures:{down:"minecraft:block/stripped_pale_oak_log",up:"minecraft:block/stripped_pale_oak_log",north:"minecraft:block/stripped_pale_oak_log",south:"minecraft:block/stripped_pale_oak_log",west:"minecraft:block/stripped_pale_oak_log",east:"minecraft:block/stripped_pale_oak_log",particle:"minecraft:block/stripped_pale_oak_log"}},Iw={id:358,transparent:!1,textures:{down:"minecraft:block/stripped_spruce_log_top",up:"minecraft:block/stripped_spruce_log_top",north:"minecraft:block/stripped_spruce_log",south:"minecraft:block/stripped_spruce_log",west:"minecraft:block/stripped_spruce_log",east:"minecraft:block/stripped_spruce_log",particle:"minecraft:block/stripped_spruce_log"}},Uw={id:359,transparent:!1,textures:{down:"minecraft:block/stripped_spruce_log_top",up:"minecraft:block/stripped_spruce_log_top",north:"minecraft:block/stripped_spruce_log",south:"minecraft:block/stripped_spruce_log",west:"minecraft:block/stripped_spruce_log",east:"minecraft:block/stripped_spruce_log",particle:"minecraft:block/stripped_spruce_log"}},Nw={id:360,transparent:!1,textures:{down:"minecraft:block/stripped_spruce_log",up:"minecraft:block/stripped_spruce_log",north:"minecraft:block/stripped_spruce_log",south:"minecraft:block/stripped_spruce_log",west:"minecraft:block/stripped_spruce_log",east:"minecraft:block/stripped_spruce_log",particle:"minecraft:block/stripped_spruce_log"}},Fw={id:361,transparent:!1,textures:{down:"minecraft:block/stripped_warped_stem",up:"minecraft:block/stripped_warped_stem",north:"minecraft:block/stripped_warped_stem",south:"minecraft:block/stripped_warped_stem",west:"minecraft:block/stripped_warped_stem",east:"minecraft:block/stripped_warped_stem",particle:"minecraft:block/stripped_warped_stem"}},Ow={id:362,transparent:!1,textures:{down:"minecraft:block/stripped_warped_stem_top",up:"minecraft:block/stripped_warped_stem_top",north:"minecraft:block/stripped_warped_stem",south:"minecraft:block/stripped_warped_stem",west:"minecraft:block/stripped_warped_stem",east:"minecraft:block/stripped_warped_stem",particle:"minecraft:block/stripped_warped_stem"}},Bw={id:363,transparent:!1,textures:{down:"minecraft:block/structure_block",up:"minecraft:block/structure_block",north:"minecraft:block/structure_block",south:"minecraft:block/structure_block",west:"minecraft:block/structure_block",east:"minecraft:block/structure_block",particle:"minecraft:block/structure_block"}},zw={id:364,transparent:!1,textures:{down:"minecraft:block/structure_block_corner",up:"minecraft:block/structure_block_corner",north:"minecraft:block/structure_block_corner",south:"minecraft:block/structure_block_corner",west:"minecraft:block/structure_block_corner",east:"minecraft:block/structure_block_corner",particle:"minecraft:block/structure_block_corner"}},Vw={id:365,transparent:!1,textures:{down:"minecraft:block/structure_block_data",up:"minecraft:block/structure_block_data",north:"minecraft:block/structure_block_data",south:"minecraft:block/structure_block_data",west:"minecraft:block/structure_block_data",east:"minecraft:block/structure_block_data",particle:"minecraft:block/structure_block_data"}},Hw={id:366,transparent:!1,textures:{down:"minecraft:block/structure_block_load",up:"minecraft:block/structure_block_load",north:"minecraft:block/structure_block_load",south:"minecraft:block/structure_block_load",west:"minecraft:block/structure_block_load",east:"minecraft:block/structure_block_load",particle:"minecraft:block/structure_block_load"}},Gw={id:367,transparent:!1,textures:{down:"minecraft:block/structure_block_save",up:"minecraft:block/structure_block_save",north:"minecraft:block/structure_block_save",south:"minecraft:block/structure_block_save",west:"minecraft:block/structure_block_save",east:"minecraft:block/structure_block_save",particle:"minecraft:block/structure_block_save"}},Ww={id:368,transparent:!1,textures:{down:"minecraft:block/suspicious_gravel_0",up:"minecraft:block/suspicious_gravel_0",north:"minecraft:block/suspicious_gravel_0",south:"minecraft:block/suspicious_gravel_0",west:"minecraft:block/suspicious_gravel_0",east:"minecraft:block/suspicious_gravel_0",particle:"minecraft:block/suspicious_gravel_0"}},Xw={id:369,transparent:!1,textures:{down:"minecraft:block/suspicious_gravel_1",up:"minecraft:block/suspicious_gravel_1",north:"minecraft:block/suspicious_gravel_1",south:"minecraft:block/suspicious_gravel_1",west:"minecraft:block/suspicious_gravel_1",east:"minecraft:block/suspicious_gravel_1",particle:"minecraft:block/suspicious_gravel_1"}},$w={id:370,transparent:!1,textures:{down:"minecraft:block/suspicious_gravel_2",up:"minecraft:block/suspicious_gravel_2",north:"minecraft:block/suspicious_gravel_2",south:"minecraft:block/suspicious_gravel_2",west:"minecraft:block/suspicious_gravel_2",east:"minecraft:block/suspicious_gravel_2",particle:"minecraft:block/suspicious_gravel_2"}},qw={id:371,transparent:!1,textures:{down:"minecraft:block/suspicious_gravel_3",up:"minecraft:block/suspicious_gravel_3",north:"minecraft:block/suspicious_gravel_3",south:"minecraft:block/suspicious_gravel_3",west:"minecraft:block/suspicious_gravel_3",east:"minecraft:block/suspicious_gravel_3",particle:"minecraft:block/suspicious_gravel_3"}},Yw={id:372,transparent:!1,textures:{down:"minecraft:block/suspicious_sand_0",up:"minecraft:block/suspicious_sand_0",north:"minecraft:block/suspicious_sand_0",south:"minecraft:block/suspicious_sand_0",west:"minecraft:block/suspicious_sand_0",east:"minecraft:block/suspicious_sand_0",particle:"minecraft:block/suspicious_sand_0"}},Kw={id:373,transparent:!1,textures:{down:"minecraft:block/suspicious_sand_1",up:"minecraft:block/suspicious_sand_1",north:"minecraft:block/suspicious_sand_1",south:"minecraft:block/suspicious_sand_1",west:"minecraft:block/suspicious_sand_1",east:"minecraft:block/suspicious_sand_1",particle:"minecraft:block/suspicious_sand_1"}},jw={id:374,transparent:!1,textures:{down:"minecraft:block/suspicious_sand_2",up:"minecraft:block/suspicious_sand_2",north:"minecraft:block/suspicious_sand_2",south:"minecraft:block/suspicious_sand_2",west:"minecraft:block/suspicious_sand_2",east:"minecraft:block/suspicious_sand_2",particle:"minecraft:block/suspicious_sand_2"}},Zw={id:375,transparent:!1,textures:{down:"minecraft:block/suspicious_sand_3",up:"minecraft:block/suspicious_sand_3",north:"minecraft:block/suspicious_sand_3",south:"minecraft:block/suspicious_sand_3",west:"minecraft:block/suspicious_sand_3",east:"minecraft:block/suspicious_sand_3",particle:"minecraft:block/suspicious_sand_3"}},Jw={id:376,transparent:!1,textures:{down:"minecraft:block/target_top",up:"minecraft:block/target_top",north:"minecraft:block/target_side",south:"minecraft:block/target_side",west:"minecraft:block/target_side",east:"minecraft:block/target_side",particle:"minecraft:block/target_side"}},Qw={id:377,transparent:!1,textures:{down:"minecraft:block/terracotta",up:"minecraft:block/terracotta",north:"minecraft:block/terracotta",south:"minecraft:block/terracotta",west:"minecraft:block/terracotta",east:"minecraft:block/terracotta",particle:"minecraft:block/terracotta"}},eS={id:378,transparent:!1,textures:{down:"minecraft:block/test_block_accept",up:"minecraft:block/test_block_accept",north:"minecraft:block/test_block_accept",south:"minecraft:block/test_block_accept",west:"minecraft:block/test_block_accept",east:"minecraft:block/test_block_accept",particle:"minecraft:block/test_block_accept"}},tS={id:379,transparent:!1,textures:{down:"minecraft:block/test_block_fail",up:"minecraft:block/test_block_fail",north:"minecraft:block/test_block_fail",south:"minecraft:block/test_block_fail",west:"minecraft:block/test_block_fail",east:"minecraft:block/test_block_fail",particle:"minecraft:block/test_block_fail"}},nS={id:380,transparent:!1,textures:{down:"minecraft:block/test_block_log",up:"minecraft:block/test_block_log",north:"minecraft:block/test_block_log",south:"minecraft:block/test_block_log",west:"minecraft:block/test_block_log",east:"minecraft:block/test_block_log",particle:"minecraft:block/test_block_log"}},iS={id:381,transparent:!1,textures:{down:"minecraft:block/test_block_start",up:"minecraft:block/test_block_start",north:"minecraft:block/test_block_start",south:"minecraft:block/test_block_start",west:"minecraft:block/test_block_start",east:"minecraft:block/test_block_start",particle:"minecraft:block/test_block_start"}},rS={id:382,transparent:!1,textures:{down:"minecraft:block/test_instance_block",up:"minecraft:block/test_instance_block",north:"minecraft:block/test_instance_block",south:"minecraft:block/test_instance_block",west:"minecraft:block/test_instance_block",east:"minecraft:block/test_instance_block",particle:"minecraft:block/test_instance_block"}},oS={id:383,transparent:!0,translucent:!0,textures:{down:"minecraft:block/tinted_glass",up:"minecraft:block/tinted_glass",north:"minecraft:block/tinted_glass",south:"minecraft:block/tinted_glass",west:"minecraft:block/tinted_glass",east:"minecraft:block/tinted_glass",particle:"minecraft:block/tinted_glass"}},aS={id:384,transparent:!1,textures:{down:"minecraft:block/tube_coral_block",up:"minecraft:block/tube_coral_block",north:"minecraft:block/tube_coral_block",south:"minecraft:block/tube_coral_block",west:"minecraft:block/tube_coral_block",east:"minecraft:block/tube_coral_block",particle:"minecraft:block/tube_coral_block"}},sS={id:385,transparent:!1,textures:{down:"minecraft:block/tuff",up:"minecraft:block/tuff",north:"minecraft:block/tuff",south:"minecraft:block/tuff",west:"minecraft:block/tuff",east:"minecraft:block/tuff",particle:"minecraft:block/tuff"}},cS={id:386,transparent:!1,textures:{down:"minecraft:block/tuff_bricks",up:"minecraft:block/tuff_bricks",north:"minecraft:block/tuff_bricks",south:"minecraft:block/tuff_bricks",west:"minecraft:block/tuff_bricks",east:"minecraft:block/tuff_bricks",particle:"minecraft:block/tuff_bricks"}},lS={id:387,transparent:!1,textures:{down:"minecraft:block/verdant_froglight_top",up:"minecraft:block/verdant_froglight_top",north:"minecraft:block/verdant_froglight_side",south:"minecraft:block/verdant_froglight_side",west:"minecraft:block/verdant_froglight_side",east:"minecraft:block/verdant_froglight_side",particle:"minecraft:block/verdant_froglight_side"}},dS={id:388,transparent:!1,textures:{down:"minecraft:block/verdant_froglight_top",up:"minecraft:block/verdant_froglight_top",north:"minecraft:block/verdant_froglight_side",south:"minecraft:block/verdant_froglight_side",west:"minecraft:block/verdant_froglight_side",east:"minecraft:block/verdant_froglight_side",particle:"minecraft:block/verdant_froglight_side"}},uS={id:389,transparent:!1,textures:{down:"minecraft:block/warped_stem",up:"minecraft:block/warped_stem",north:"minecraft:block/warped_stem",south:"minecraft:block/warped_stem",west:"minecraft:block/warped_stem",east:"minecraft:block/warped_stem",particle:"minecraft:block/warped_stem"}},hS={id:390,transparent:!1,textures:{down:"minecraft:block/warped_planks",up:"minecraft:block/warped_planks",north:"minecraft:block/warped_planks",south:"minecraft:block/warped_planks",west:"minecraft:block/warped_planks",east:"minecraft:block/warped_planks",particle:"minecraft:block/warped_planks"}},fS={id:391,transparent:!1,textures:{down:"minecraft:block/warped_stem_top",up:"minecraft:block/warped_stem_top",north:"minecraft:block/warped_stem",south:"minecraft:block/warped_stem",west:"minecraft:block/warped_stem",east:"minecraft:block/warped_stem",particle:"minecraft:block/warped_stem"}},pS={id:392,transparent:!1,textures:{down:"minecraft:block/warped_wart_block",up:"minecraft:block/warped_wart_block",north:"minecraft:block/warped_wart_block",south:"minecraft:block/warped_wart_block",west:"minecraft:block/warped_wart_block",east:"minecraft:block/warped_wart_block",particle:"minecraft:block/warped_wart_block"}},mS={id:393,transparent:!1,textures:{down:"minecraft:block/weathered_chiseled_copper",up:"minecraft:block/weathered_chiseled_copper",north:"minecraft:block/weathered_chiseled_copper",south:"minecraft:block/weathered_chiseled_copper",west:"minecraft:block/weathered_chiseled_copper",east:"minecraft:block/weathered_chiseled_copper",particle:"minecraft:block/weathered_chiseled_copper"}},_S={id:394,transparent:!1,textures:{down:"minecraft:block/weathered_copper",up:"minecraft:block/weathered_copper",north:"minecraft:block/weathered_copper",south:"minecraft:block/weathered_copper",west:"minecraft:block/weathered_copper",east:"minecraft:block/weathered_copper",particle:"minecraft:block/weathered_copper"}},bS={id:395,transparent:!1,textures:{down:"minecraft:block/weathered_copper_bulb",up:"minecraft:block/weathered_copper_bulb",north:"minecraft:block/weathered_copper_bulb",south:"minecraft:block/weathered_copper_bulb",west:"minecraft:block/weathered_copper_bulb",east:"minecraft:block/weathered_copper_bulb",particle:"minecraft:block/weathered_copper_bulb"}},gS={id:396,transparent:!1,textures:{down:"minecraft:block/weathered_copper_bulb_lit",up:"minecraft:block/weathered_copper_bulb_lit",north:"minecraft:block/weathered_copper_bulb_lit",south:"minecraft:block/weathered_copper_bulb_lit",west:"minecraft:block/weathered_copper_bulb_lit",east:"minecraft:block/weathered_copper_bulb_lit",particle:"minecraft:block/weathered_copper_bulb_lit"}},kS={id:397,transparent:!1,textures:{down:"minecraft:block/weathered_copper_bulb_lit_powered",up:"minecraft:block/weathered_copper_bulb_lit_powered",north:"minecraft:block/weathered_copper_bulb_lit_powered",south:"minecraft:block/weathered_copper_bulb_lit_powered",west:"minecraft:block/weathered_copper_bulb_lit_powered",east:"minecraft:block/weathered_copper_bulb_lit_powered",particle:"minecraft:block/weathered_copper_bulb_lit_powered"}},xS={id:398,transparent:!1,textures:{down:"minecraft:block/weathered_copper_bulb_powered",up:"minecraft:block/weathered_copper_bulb_powered",north:"minecraft:block/weathered_copper_bulb_powered",south:"minecraft:block/weathered_copper_bulb_powered",west:"minecraft:block/weathered_copper_bulb_powered",east:"minecraft:block/weathered_copper_bulb_powered",particle:"minecraft:block/weathered_copper_bulb_powered"}},vS={id:399,transparent:!1,textures:{down:"minecraft:block/weathered_copper_grate",up:"minecraft:block/weathered_copper_grate",north:"minecraft:block/weathered_copper_grate",south:"minecraft:block/weathered_copper_grate",west:"minecraft:block/weathered_copper_grate",east:"minecraft:block/weathered_copper_grate",particle:"minecraft:block/weathered_copper_grate"}},wS={id:400,transparent:!1,textures:{down:"minecraft:block/weathered_cut_copper",up:"minecraft:block/weathered_cut_copper",north:"minecraft:block/weathered_cut_copper",south:"minecraft:block/weathered_cut_copper",west:"minecraft:block/weathered_cut_copper",east:"minecraft:block/weathered_cut_copper",particle:"minecraft:block/weathered_cut_copper"}},SS={id:401,transparent:!1,textures:{down:"minecraft:block/wet_sponge",up:"minecraft:block/wet_sponge",north:"minecraft:block/wet_sponge",south:"minecraft:block/wet_sponge",west:"minecraft:block/wet_sponge",east:"minecraft:block/wet_sponge",particle:"minecraft:block/wet_sponge"}},MS={id:402,transparent:!1,textures:{down:"minecraft:block/white_concrete",up:"minecraft:block/white_concrete",north:"minecraft:block/white_concrete",south:"minecraft:block/white_concrete",west:"minecraft:block/white_concrete",east:"minecraft:block/white_concrete",particle:"minecraft:block/white_concrete"}},yS={id:403,transparent:!1,textures:{down:"minecraft:block/white_concrete_powder",up:"minecraft:block/white_concrete_powder",north:"minecraft:block/white_concrete_powder",south:"minecraft:block/white_concrete_powder",west:"minecraft:block/white_concrete_powder",east:"minecraft:block/white_concrete_powder",particle:"minecraft:block/white_concrete_powder"}},ES={id:404,transparent:!0,translucent:!0,textures:{down:"minecraft:block/white_stained_glass",up:"minecraft:block/white_stained_glass",north:"minecraft:block/white_stained_glass",south:"minecraft:block/white_stained_glass",west:"minecraft:block/white_stained_glass",east:"minecraft:block/white_stained_glass",particle:"minecraft:block/white_stained_glass"}},AS={id:405,transparent:!1,textures:{down:"minecraft:block/white_terracotta",up:"minecraft:block/white_terracotta",north:"minecraft:block/white_terracotta",south:"minecraft:block/white_terracotta",west:"minecraft:block/white_terracotta",east:"minecraft:block/white_terracotta",particle:"minecraft:block/white_terracotta"}},TS={id:406,transparent:!1,textures:{down:"minecraft:block/white_wool",up:"minecraft:block/white_wool",north:"minecraft:block/white_wool",south:"minecraft:block/white_wool",west:"minecraft:block/white_wool",east:"minecraft:block/white_wool",particle:"minecraft:block/white_wool"}},CS={id:407,transparent:!1,textures:{down:"minecraft:block/yellow_concrete",up:"minecraft:block/yellow_concrete",north:"minecraft:block/yellow_concrete",south:"minecraft:block/yellow_concrete",west:"minecraft:block/yellow_concrete",east:"minecraft:block/yellow_concrete",particle:"minecraft:block/yellow_concrete"}},RS={id:408,transparent:!1,textures:{down:"minecraft:block/yellow_concrete_powder",up:"minecraft:block/yellow_concrete_powder",north:"minecraft:block/yellow_concrete_powder",south:"minecraft:block/yellow_concrete_powder",west:"minecraft:block/yellow_concrete_powder",east:"minecraft:block/yellow_concrete_powder",particle:"minecraft:block/yellow_concrete_powder"}},PS={id:409,transparent:!0,translucent:!0,textures:{down:"minecraft:block/yellow_stained_glass",up:"minecraft:block/yellow_stained_glass",north:"minecraft:block/yellow_stained_glass",south:"minecraft:block/yellow_stained_glass",west:"minecraft:block/yellow_stained_glass",east:"minecraft:block/yellow_stained_glass",particle:"minecraft:block/yellow_stained_glass"}},LS={id:410,transparent:!1,textures:{down:"minecraft:block/yellow_terracotta",up:"minecraft:block/yellow_terracotta",north:"minecraft:block/yellow_terracotta",south:"minecraft:block/yellow_terracotta",west:"minecraft:block/yellow_terracotta",east:"minecraft:block/yellow_terracotta",particle:"minecraft:block/yellow_terracotta"}},DS={id:411,transparent:!1,textures:{down:"minecraft:block/yellow_wool",up:"minecraft:block/yellow_wool",north:"minecraft:block/yellow_wool",south:"minecraft:block/yellow_wool",west:"minecraft:block/yellow_wool",east:"minecraft:block/yellow_wool",particle:"minecraft:block/yellow_wool"}},IS={id:412,transparent:!1,textures:{down:"minecraft:block/amethyst_block",up:"minecraft:block/amethyst_block",north:"minecraft:block/amethyst_block",south:"minecraft:block/amethyst_block",west:"minecraft:block/amethyst_block",east:"minecraft:block/amethyst_block",particle:"minecraft:block/amethyst_block"}},US={dirt:tb,stone:nb,grass_block:ib,water:rb,ancient_debris:ob,andesite:ab,azalea_leaves:sb,bamboo_block:cb,bamboo_mosaic:lb,bamboo_planks:db,basalt:ub,bedrock:hb,birch_log:fb,birch_log_horizontal:pb,birch_planks:mb,birch_wood:_b,blackstone:bb,black_concrete:gb,black_concrete_powder:kb,black_stained_glass:xb,black_terracotta:vb,black_wool:wb,blast_furnace:Sb,blast_furnace_on:Mb,blue_concrete:yb,blue_concrete_powder:Eb,blue_ice:Ab,blue_stained_glass:Tb,blue_terracotta:Cb,blue_wool:Rb,bone_block:Pb,bookshelf:Lb,brain_coral_block:Db,bricks:Ib,brown_concrete:Ub,brown_concrete_powder:Nb,brown_mushroom_block_inventory:Fb,brown_stained_glass:Ob,brown_terracotta:Bb,brown_wool:zb,bubble_coral_block:Vb,budding_amethyst:Hb,calcite:Gb,cartography_table:Wb,carved_pumpkin:Xb,cherry_log:$b,cherry_planks:qb,cherry_wood:Yb,chiseled_bookshelf_inventory:Kb,chiseled_copper:jb,chiseled_deepslate:Zb,chiseled_nether_bricks:Jb,chiseled_polished_blackstone:Qb,chiseled_quartz_block:eg,chiseled_red_sandstone:tg,chiseled_resin_bricks:ng,chiseled_sandstone:ig,chiseled_stone_bricks:rg,chiseled_tuff:og,chiseled_tuff_bricks:ag,clay:sg,coal_block:cg,coal_ore:lg,coarse_dirt:dg,cobbled_deepslate:ug,cobblestone:hg,copper_block:fg,copper_bulb:pg,copper_bulb_lit:mg,copper_bulb_lit_powered:_g,copper_bulb_powered:bg,copper_grate:gg,copper_ore:kg,cracked_deepslate_bricks:xg,cracked_deepslate_tiles:vg,cracked_nether_bricks:wg,cracked_polished_blackstone_bricks:Sg,cracked_stone_bricks:Mg,crafter:yg,crafting_table:Eg,creaking_heart:Ag,creaking_heart_awake:Tg,creaking_heart_awake_horizontal:Cg,creaking_heart_dormant:Rg,creaking_heart_dormant_horizontal:Pg,creaking_heart_horizontal:Lg,crimson_hyphae:Dg,crimson_planks:Ig,crimson_stem:Ug,crying_obsidian:Ng,cut_copper:Fg,cut_red_sandstone:Og,cut_sandstone:Bg,cyan_concrete:zg,cyan_concrete_powder:Vg,cyan_stained_glass:Hg,cyan_terracotta:Gg,cyan_wool:Wg,dark_oak_log:Xg,dark_oak_log_horizontal:$g,dark_oak_planks:qg,dark_oak_wood:Yg,dark_prismarine:Kg,dead_brain_coral_block:jg,dead_bubble_coral_block:Zg,dead_fire_coral_block:Jg,dead_horn_coral_block:Qg,dead_tube_coral_block:ek,deepslate:tk,deepslate_bricks:nk,deepslate_coal_ore:ik,deepslate_copper_ore:rk,deepslate_diamond_ore:ok,deepslate_emerald_ore:ak,deepslate_gold_ore:sk,deepslate_iron_ore:ck,deepslate_lapis_ore:lk,deepslate_redstone_ore:dk,deepslate_tiles:uk,diamond_block:hk,diamond_ore:fk,diorite:pk,acacia_log:mk,dispenser:_k,dried_kelp_block:bk,dripstone_block:gk,dropper:kk,emerald_block:xk,emerald_ore:vk,end_stone:wk,end_stone_bricks:Sk,exposed_chiseled_copper:Mk,exposed_copper:yk,exposed_copper_bulb:Ek,exposed_copper_bulb_lit:Ak,exposed_copper_bulb_lit_powered:Tk,exposed_copper_bulb_powered:Ck,exposed_copper_grate:Rk,exposed_cut_copper:Pk,fire_coral_block:Lk,fletching_table:Dk,acacia_leaves:Ik,flowering_azalea_leaves:Uk,birch_leaves:Nk,cherry_leaves:Fk,dark_oak_leaves:Ok,jungle_leaves:Bk,mangrove_leaves:zk,oak_leaves:Vk,pale_oak_leaves:Hk,spruce_leaves:Gk,frosted_ice_0:Wk,frosted_ice_1:Xk,frosted_ice_2:$k,frosted_ice_3:qk,furnace:Yk,furnace_on:Kk,gilded_blackstone:jk,glass:Zk,glowstone:Jk,gold_block:Qk,gold_ore:ex,granite:tx,acacia_wood:nx,gravel:ix,gray_concrete:rx,gray_concrete_powder:ox,gray_stained_glass:ax,gray_terracotta:sx,gray_wool:cx,green_concrete:lx,green_concrete_powder:dx,green_stained_glass:ux,green_terracotta:hx,green_wool:fx,hay_block:px,hay_block_horizontal:mx,honeycomb_block:_x,honey_block:bx,horn_coral_block:gx,ice:kx,iron_block:xx,iron_ore:vx,jack_o_lantern:wx,jigsaw:Sx,jukebox:Mx,jungle_log:yx,jungle_log_horizontal:Ex,jungle_planks:Ax,jungle_wood:Tx,lapis_block:Cx,lapis_ore:Rx,light_blue_concrete:Px,light_blue_concrete_powder:Lx,light_blue_stained_glass:Dx,light_blue_terracotta:Ix,light_blue_wool:Ux,light_gray_concrete:Nx,light_gray_concrete_powder:Fx,light_gray_stained_glass:Ox,light_gray_terracotta:Bx,light_gray_wool:zx,lime_concrete:Vx,lime_concrete_powder:Hx,lime_stained_glass:Gx,lime_terracotta:Wx,lime_wool:Xx,lodestone:$x,magenta_concrete:qx,magenta_concrete_powder:Yx,magenta_stained_glass:Kx,magenta_terracotta:jx,magenta_wool:Zx,magma_block:Jx,mangrove_log:Qx,mangrove_log_horizontal:e0,mangrove_planks:t0,mangrove_wood:n0,melon:i0,mossy_cobblestone:r0,mossy_stone_bricks:o0,moss_block:a0,mud:s0,muddy_mangrove_roots:c0,mud_bricks:l0,mushroom_stem_inventory:d0,netherite_block:u0,netherrack:h0,nether_bricks:f0,nether_gold_ore:p0,nether_quartz_ore:m0,nether_wart_block:_0,note_block:b0,oak_log:g0,oak_log_horizontal:k0,oak_planks:x0,oak_wood:v0,observer:w0,obsidian:S0,ochre_froglight:M0,ochre_froglight_horizontal:y0,orange_concrete:E0,orange_concrete_powder:A0,orange_stained_glass:T0,orange_terracotta:C0,orange_wool:R0,oxidized_chiseled_copper:P0,oxidized_copper:L0,oxidized_copper_bulb:D0,oxidized_copper_bulb_lit:I0,oxidized_copper_bulb_lit_powered:U0,oxidized_copper_bulb_powered:N0,oxidized_copper_grate:F0,oxidized_cut_copper:O0,packed_ice:B0,packed_mud:z0,pale_moss_block:V0,pale_oak_log:H0,pale_oak_log_horizontal:G0,pale_oak_planks:W0,pale_oak_wood:X0,pearlescent_froglight:$0,pearlescent_froglight_horizontal:q0,pink_concrete:Y0,pink_concrete_powder:K0,pink_stained_glass:j0,pink_terracotta:Z0,pink_wool:J0,polished_andesite:Q0,polished_basalt:ev,polished_blackstone:tv,polished_blackstone_bricks:nv,polished_deepslate:iv,polished_diorite:rv,polished_granite:ov,polished_tuff:av,prismarine:sv,prismarine_bricks:cv,pumpkin:lv,purple_concrete:dv,purple_concrete_powder:uv,purple_stained_glass:hv,purple_terracotta:fv,purple_wool:pv,purpur_block:mv,purpur_pillar:_v,purpur_pillar_horizontal:bv,quartz_block:gv,quartz_bricks:kv,quartz_pillar:xv,quartz_pillar_horizontal:vv,raw_copper_block:wv,raw_gold_block:Sv,raw_iron_block:Mv,redstone_block:yv,redstone_lamp:Ev,redstone_lamp_on:Av,redstone_ore:Tv,red_concrete:Cv,red_concrete_powder:Rv,red_mushroom_block_inventory:Pv,red_nether_bricks:Lv,red_sand:Dv,red_stained_glass:Iv,red_terracotta:Uv,red_wool:Nv,resin_block:Fv,resin_bricks:Ov,rooted_dirt:Bv,sand:zv,sculk:Vv,sea_lantern:Hv,shroomlight:Gv,slime_block:Wv,smithing_table:Xv,smooth_basalt:$v,smooth_quartz:qv,smooth_red_sandstone:Yv,smooth_sandstone:Kv,smooth_stone:jv,smooth_stone_slab_double:Zv,snow_block:Jv,soul_sand:Qv,soul_soil:ew,sponge:tw,spruce_log:nw,spruce_log_horizontal:iw,spruce_planks:rw,spruce_wood:ow,acacia_planks:aw,stone_bricks:sw,stripped_acacia_log:cw,stripped_acacia_log_horizontal:lw,stripped_acacia_wood:dw,stripped_bamboo_block:uw,stripped_birch_log:hw,stripped_birch_log_horizontal:fw,stripped_birch_wood:pw,stripped_cherry_log:mw,stripped_cherry_wood:_w,stripped_crimson_hyphae:bw,stripped_crimson_stem:gw,stripped_dark_oak_log:kw,stripped_dark_oak_log_horizontal:xw,stripped_dark_oak_wood:vw,stripped_jungle_log:ww,stripped_jungle_log_horizontal:Sw,stripped_jungle_wood:Mw,stripped_mangrove_log:yw,stripped_mangrove_log_horizontal:Ew,stripped_mangrove_wood:Aw,stripped_oak_log:Tw,stripped_oak_log_horizontal:Cw,stripped_oak_wood:Rw,stripped_pale_oak_log:Pw,stripped_pale_oak_log_horizontal:Lw,stripped_pale_oak_wood:Dw,stripped_spruce_log:Iw,stripped_spruce_log_horizontal:Uw,stripped_spruce_wood:Nw,stripped_warped_hyphae:Fw,stripped_warped_stem:Ow,structure_block:Bw,structure_block_corner:zw,structure_block_data:Vw,structure_block_load:Hw,structure_block_save:Gw,suspicious_gravel_0:Ww,suspicious_gravel_1:Xw,suspicious_gravel_2:$w,suspicious_gravel_3:qw,suspicious_sand_0:Yw,suspicious_sand_1:Kw,suspicious_sand_2:jw,suspicious_sand_3:Zw,target:Jw,terracotta:Qw,test_block_accept:eS,test_block_fail:tS,test_block_log:nS,test_block_start:iS,test_instance_block:rS,tinted_glass:oS,tube_coral_block:aS,tuff:sS,tuff_bricks:cS,verdant_froglight:lS,verdant_froglight_horizontal:dS,warped_hyphae:uS,warped_planks:hS,warped_stem:fS,warped_wart_block:pS,weathered_chiseled_copper:mS,weathered_copper:_S,weathered_copper_bulb:bS,weathered_copper_bulb_lit:gS,weathered_copper_bulb_lit_powered:kS,weathered_copper_bulb_powered:xS,weathered_copper_grate:vS,weathered_cut_copper:wS,wet_sponge:SS,white_concrete:MS,white_concrete_powder:yS,white_stained_glass:ES,white_terracotta:AS,white_wool:TS,yellow_concrete:CS,yellow_concrete_powder:RS,yellow_stained_glass:PS,yellow_terracotta:LS,yellow_wool:DS,amethyst_block:IS},ja="air",Za=US;zS(Za);const $r=new Map,Ji=new Map;gl({id:rn,name:ja,transparent:!0,textures:{}});Object.entries(Za).forEach(([i,e])=>{gl({...e,name:i})});const NS=OS();function FS(){return[...Ji.entries()].sort(([i],[e])=>i-e).map(([,i])=>i.name)}function OS(){return FS().filter(i=>i!==ja)}function BS(i){const e=typeof i=="string"?i:Ji.get(i).name;return $r.get(e).transparent}function bl(i){const e=typeof i=="string"?i:Ji.get(i).name;return $r.get(e).translucent===!0}function gl(i){$r.set(i.name,i),Ji.set(i.id,i)}function kl(i){return $r.get(i).id}function xl(i){return Ji.get(i).name}function zS(i){Object.values(i).map(t=>t.id).sort((t,n)=>t-n).forEach((t,n)=>{const r=n+1;if(t!==r)throw new Error(`Expected blocks.json ids to be sequential starting at 1. Found ${t}, expected ${r}.`)})}class VS{constructor(e,t,n,r){this.inputManager=e,this.playerController=t,this.chunkLoader=n,this.blockTargetingSystem=r}inputManager;playerController;chunkLoader;blockTargetingSystem;lastBreakTime=Number.NEGATIVE_INFINITY;lastPlaceTime=Number.NEGATIVE_INFINITY;wasRotatePressed=!1;update(e){const t=this.inputManager.isPressed("ROTATE_BLOCK");let n=!1;return!this.wasRotatePressed&&t&&this.rotateHoveredBlock()&&(n=!0),this.wasRotatePressed=t,this.inputManager.isPressed("BREAK_BLOCK")&&e-this.lastBreakTime>=No.breakRepeatMs&&this.breakHoveredBlock()&&(this.lastBreakTime=e,n=!0),this.inputManager.isPressed("PLACE_BLOCK")&&e-this.lastPlaceTime>=No.placeRepeatMs&&this.placeSelectedBlock()&&(this.lastPlaceTime=e,n=!0),n}suspend(){this.wasRotatePressed=!1}rotateHoveredBlock(){const e=this.blockTargetingSystem.getHoveredBlock();return e?this.chunkLoader.rotateVoxelWorld(e.blockX,e.blockY,e.blockZ):!1}breakHoveredBlock(){const e=this.blockTargetingSystem.getHoveredBlock();return e?(this.chunkLoader.setVoxelWorld(e.blockX,e.blockY,e.blockZ,rn),!0):!1}placeSelectedBlock(){const e=this.blockTargetingSystem.getHoveredBlock();if(!e||e.normalX===0&&e.normalY===0&&e.normalZ===0)return!1;const t=this.playerController.player.getSelectedBlockName();if(!t)return!1;const n=e.blockX+e.normalX,r=e.blockY+e.normalY,o=e.blockZ+e.normalZ;if(r<kt.WORLD_BOTTOM_Y||r>=Fe.height)return!1;const a=this.chunkLoader.getVoxelIdWorld(n,r,o);return a===null||a!==rn||this.playerController.occupiesBlock(n,r,o)?!1:(this.chunkLoader.setVoxelWorld(n,r,o,kl(t)),!0)}}function HS(i,e,t,n){const r=Math.hypot(e.x,e.y,e.z);if(r===0)return null;const o=e.x/r,a=e.y/r,s=e.z/r;let c=Math.floor(i.x),l=Math.floor(i.y),d=Math.floor(i.z);const h=Math.sign(o),f=Math.sign(a),m=Math.sign(s),b=h===0?Number.POSITIVE_INFINITY:Math.abs(1/o),g=f===0?Number.POSITIVE_INFINITY:Math.abs(1/a),p=m===0?Number.POSITIVE_INFINITY:Math.abs(1/s);let u=h===0?Number.POSITIVE_INFINITY:Ur(i.x,o),v=f===0?Number.POSITIVE_INFINITY:Ur(i.y,a),M=m===0?Number.POSITIVE_INFINITY:Ur(i.z,s),y=0,E=0,A=0,T=0;for(;T<=t;){const I=n(c,l,d);if(I===null)return null;if(I!==rn)return{blockX:c,blockY:l,blockZ:d,blockId:I,normalX:y,normalY:E,normalZ:A};if(u<=v&&u<=M){T=u,c+=h,u+=b,y=-h,E=0,A=0;continue}if(v<=M){T=v,l+=f,v+=g,y=0,E=-f,A=0;continue}T=M,d+=m,M+=p,y=0,E=0,A=-m}return null}function Ur(i,e){return e<0?Ur(-i,-e):(1-(i-Math.floor(i)))/e}class GS{playerController;chunkLoader;lookDirection=new U;blockOutlineGeometry=new al(new Sn(1,1,1));blockOutlineMaterial=new Zi({color:16767053,depthTest:!0,depthWrite:!1,transparent:!0,opacity:.95});blockOutline=null;hoveredBlock=null;constructor(e,t){this.playerController=e,this.chunkLoader=t}getHoveredBlock(){return this.hoveredBlock}getHoveredBlockId(){return this.hoveredBlock?.blockId??null}update(e){const t=this.ensureBlockOutline(e),n=this.playerController.camera;if(n.getWorldDirection(this.lookDirection),this.hoveredBlock=HS(n.position,this.lookDirection,No.maxReach,(r,o,a)=>this.chunkLoader.getVoxelIdWorld(r,o,a)),!this.hoveredBlock){t.visible=!1;return}t.position.set(this.hoveredBlock.blockX+.5,this.hoveredBlock.blockY+.5,this.hoveredBlock.blockZ+.5),t.visible=!0}clear(){this.hoveredBlock=null,this.blockOutline&&(this.blockOutline.visible=!1)}ensureBlockOutline(e){if(this.blockOutline)return this.blockOutline;const t=new Vr(this.blockOutlineGeometry,this.blockOutlineMaterial);return t.renderOrder=1e3,t.visible=!1,e.add(t),this.blockOutline=t,t}}class WS extends K_{uiHandler;lastFrameTime;chunkLoader;hudSystem;blockTargetingSystem;blockInteractionSystem;constructor(e,t,n,r,o){super(e,n),this.uiHandler=t,this.lastFrameTime=null,this.chunkLoader=r,this.hudSystem=o,this.blockTargetingSystem=new GS(n,r),this.blockInteractionSystem=new VS(e,n,r,this.blockTargetingSystem)}toggleHUD(){this.hudSystem.toggle(),this.chunkLoader.toggleChunkWireframes()}getHoveredBlockId(){return this.blockTargetingSystem.getHoveredBlockId()}worldUpdate(e,t){this.playerController.updatePlayer(t),this.chunkLoader.updateWorldChunks(e,this.playerController.getPosition())}animate(e,t,n,r){const o=this.lastFrameTime===null?0:(e-this.lastFrameTime)/1e3;this.lastFrameTime=e;const a=this.playerController.getPosition();this.hudSystem.update({playerPosition:a,deltaTime:o,loadedChunkCount:this.chunkLoader.getLoadedChunkCount(),cachedChunkCount:this.chunkLoader.getCachedChunkCount(),pointerLocked:this.uiHandler.isPointerLocked(),uiOpen:this.uiHandler.isUIOpen()}),this.isGameplayActive()?(this.worldUpdate(n,o),this.blockTargetingSystem.update(n),this.blockInteractionSystem.update(e)&&this.blockTargetingSystem.update(n)):(this.blockInteractionSystem.suspend(),this.blockTargetingSystem.clear()),t.render(n,r)}isGameplayActive(){return this.uiHandler.isPointerLocked()&&!this.uiHandler.isUIOpen()}}const an=16,Yn="__missing__",bc=["east","west","up","down","north","south"],XS=new sl,$S=new ku,Io=new Map;function vl(i){return typeof i!="string"||i.length===0?Yn:i.split("/").pop()??Yn}async function qS({blocks:i}){const{atlasLayout:e,blockFaceUvs:t,textureKeys:n}=wl(i),r=document.createElement("canvas");r.width=e.size,r.height=e.size;const o=r.getContext("2d");if(!o)throw new Error("Could not create block texture atlas canvas context.");o.imageSmoothingEnabled=!1;for(let c=0;c<n.length;c+=1){const l=n[c],d=Sl(c,e);if(l===Yn)gc(o,d.x,d.y);else{const h=await tM(l);h?nM(o,h,d.x,d.y):gc(o,d.x,d.y)}}const a=new hu(r);a.colorSpace=Tt,a.magFilter=ut,a.minFilter=ut,a.wrapS=Bt,a.wrapT=Bt,a.generateMipmaps=!1,a.needsUpdate=!0;const s=r.toDataURL("image/png");return{atlasTexture:a,atlasTextureUrl:s,atlasCanvas:r,blockFaceUvs:t}}async function YS({blocks:i,textureAtlasUrl:e}){const{atlasLayout:t,blockFaceUvs:n}=wl(i),r=await new Promise((a,s)=>{$S.load(e,a,void 0,s)});r.colorSpace=Tt,r.magFilter=ut,r.minFilter=ut,r.wrapS=Bt,r.wrapT=Bt,r.generateMipmaps=!1,r.needsUpdate=!0;const o=r.image;if(o?.width!==void 0&&o?.height!==void 0&&(o.width!==t.size||o.height!==t.size))throw new Error(`Block texture atlas dimensions mismatch. Expected ${t.size}x${t.size}, received ${o.width}x${o.height}.`);return{atlasTexture:r,atlasTextureUrl:e,blockFaceUvs:n}}async function KS({blocks:i,params:e={}}){const{source:t="static",staticTextureAtlasUrl:n="/images/block-texture-atlas.png"}=e;return t==="generated"?qS({blocks:i}):YS({blocks:i,textureAtlasUrl:n})}function jS(i){const e=new Sn(1,1,1),t=e.getAttribute("uv");return i.forEach((n,r)=>{const o=r*4;for(let a=0;a<4;a+=1){const s=o+a;t.setXY(s,kc(n.minU,n.maxU,t.getX(s)),kc(n.minV,n.maxV,t.getY(s)))}}),t.needsUpdate=!0,e}function ZS(i,e){const t=new Set([Yn]);return Object.values(i).forEach(n=>{const r=n.textures??{};e.forEach(o=>{t.add(vl(r[o]))})}),[...t].sort((n,r)=>n===Yn?-1:r===Yn?1:n.localeCompare(r))}function wl(i){const e=ZS(i,bc),t=JS(e.length),n=new Map;e.forEach((a,s)=>{const c=Sl(s,t);n.set(a,QS({column:c.column,row:c.row,tilesPerSide:t.tilesPerSide}))});const r=n.get(Yn);if(!r)throw new Error("Missing atlas UV rect was not generated.");const o=new Map;return Object.entries(i).forEach(([a,s])=>{const c=s.textures??{},l=bc.map(d=>{const h=vl(c[d]);return n.get(h)??r});o.set(a,l)}),{atlasLayout:t,atlasUvsByTextureKey:n,blockFaceUvs:o,textureKeys:e}}function JS(i){const e=Math.max(1,Math.ceil(Math.sqrt(i))),t=eM(e);return{tilesPerSide:t,size:t*an}}function Sl(i,e){const t=i%e.tilesPerSide,n=Math.floor(i/e.tilesPerSide);return{column:t,row:n,x:t*an,y:n*an}}function QS({column:i,row:e,tilesPerSide:t}){const n=1/t;return{minU:i*n,maxU:(i+1)*n,minV:1-(e+1)*n,maxV:1-e*n}}function eM(i){return 2**Math.ceil(Math.log2(i))}async function tM(i){if(Io.has(i))return Io.get(i)??null;const e="/",t=await new Promise(n=>{XS.load(`${e}/blocks/${i}.png`,r=>n(r),void 0,()=>n(null))});return Io.set(i,t),t}function nM(i,e,t,n){const r=Math.min(an,e.naturalWidth||e.width),o=Math.min(an,e.naturalHeight||e.height);i.drawImage(e,0,0,r,o,t,n,an,an)}function gc(i,e,t){const n=an/2;i.fillStyle="#ff00ff",i.fillRect(e,t,an,an),i.fillStyle="#111111",i.fillRect(e,t,n,n),i.fillRect(e+n,t+n,n,n)}function kc(i,e,t){return i+(e-i)*t}function Xe(...i){console.log("[DEBUG]",...i)}const xc=new Map,vc=new Map,wc=new Map,Sc=new Map;Xe("Fetching block texture atlas");const Dn=await KS({blocks:Za,params:Cc});Xe("Block texture atlas fetched");async function iM(i){Xe("Creating block mesh",i);const e=new zt(Ja(i),Qa());return Xe("Block mesh created",i),e}function Ja(i,e){const t=typeof i=="number"?xl(i):i,n=Sc.get(t);if(n)return n;const r=Dn.blockFaceUvs.get(t);if(!r)throw new Error(`Block atlas UVs for "${t}" not found`);const o=jS(r);return Sc.set(t,o),o}function Qa(i=Dn.atlasTexture){const e=xc.get(i);if(e)return e;const t=new qa({map:i,alphaTest:.5,depthWrite:!0});return xc.set(i,t),t}function Ml(i=Dn.atlasTexture){const e=vc.get(i);if(e)return e;const t=new qa({map:i,transparent:!0,opacity:.7,depthWrite:!1});return vc.set(i,t),t}function yl(i=Dn.atlasTexture){const e=wc.get(i);if(e)return e;const t=new qa({map:i,transparent:!0,opacity:.2,depthWrite:!1});return wc.set(i,t),t}class rM{mesh;constructor(e){this.mesh=e}}class oM extends rM{speed;position;velocity;height;width;hotbarSlots;activeHotbarSlotIndex;constructor(e,t){super(e),this.speed=t.speed??7,this.position=this.mesh.position,this.velocity=new U,this.height=t.height??1.85,this.width=t.width??.6,this.hotbarSlots=Array.from({length:Gi},()=>null),this.activeHotbarSlotIndex=0}selectHotbarSlot(e){e<0||e>=this.hotbarSlots.length||(this.activeHotbarSlotIndex=e)}assignHotbarItem(e){const t=this.hotbarSlots.findIndex(o=>o?.id===e.id);if(t!==-1)return this.hotbarSlots[t]={...e},{slotIndex:t,mode:"existing"};const n=this.hotbarSlots.findIndex(o=>o===null),r=n!==-1?n:this.activeHotbarSlotIndex;return this.hotbarSlots[r]={...e},{slotIndex:r,mode:n!==-1?"empty":"replaced"}}clearActiveHotbarItem(){const e=this.hotbarSlots[this.activeHotbarSlotIndex];return e?(this.hotbarSlots[this.activeHotbarSlotIndex]=null,e):null}getSelectedBlockName(){return this.hotbarSlots[this.activeHotbarSlotIndex]?.id??null}getHotbarSnapshot(){return{slots:[...this.hotbarSlots],activeSlotIndex:this.activeHotbarSlotIndex}}move(e,t,n){this.velocity.lerp(e,Math.min(1,t*n)),this.position.addScaledVector(this.velocity,n)}}class qr{htmlElement;events;constructor(e){this.htmlElement=e,this.events=new EventTarget}show(){this.htmlElement.classList.remove("hidden")}hide(){this.htmlElement.classList.add("hidden")}on(e,t,n){return typeof t!="function"?()=>{}:(this.events.addEventListener(e,t,n),()=>{this.events.removeEventListener(e,t,n)})}off(e,t,n){typeof t=="function"&&this.events.removeEventListener(e,t,n)}emit(e,t){return this.events.dispatchEvent(new CustomEvent(e,{detail:t}))}}class El extends qr{constructor(e){super(e),this.close()}close(){super.hide()}open(){super.show()}isVisible(){return!this.htmlElement.classList.contains("hidden")}}class aM{inputManager;ptrControls;activeUI;containedElements;constructor(e,t){this.inputManager=e,this.ptrControls=t,this.activeUI=null,this.containedElements=new Set}onActiveUIChange(e){}isUIOpen(){return this.activeUI!==null}isActiveUI(e){return this.activeUI===e}closeActiveUI(){this.activeUI!==null&&(this.activeUI.close(),this.activeUI=null,this.lockPointer(),this.onActiveUIChange(this.activeUI))}closeUI(e){this.isActiveUI(e)&&this.closeActiveUI()}setActiveUI(e){if(this.activeUI===null){this.activeUI=e,this.activeUI.open(),this.unlockPointer(),this.onActiveUIChange(this.activeUI);return}this.activeUI.close(),this.activeUI=e,this.activeUI.open(),this.unlockPointer(),this.onActiveUIChange(this.activeUI)}lockPointer(){this.ptrControls.lock()}unlockPointer(){this.ptrControls.unlock()}isPointerLocked(){return this.ptrControls.isLocked}registerContainedElement(e){this.containedElements.add(e)}unregisterContainedElement(e){this.containedElements.delete(e)}isPointInsideActiveUI(e,t){if(this.activeUI&&this.isPointInsideElement(this.activeUI.htmlElement,e,t))return!0;for(const n of this.containedElements)if(this.isPointInsideElement(n,e,t))return!0;return!1}isTargetInsideActiveUI(e){if(!(e instanceof Node))return!1;if(this.activeUI?.htmlElement.contains(e))return!0;for(const t of this.containedElements)if(t.contains(e))return!0;return!1}isPointInsideElement(e,t,n){const r=e.getBoundingClientRect();return t>=r.left&&t<=r.right&&n>=r.top&&n<=r.bottom}}class sM extends aM{modals;modalListeners;constructor(e,t){super(e,t),this.modals=new Map,this.modalListeners=new Map,this.onActiveUIChange(this.activeUI)}onActiveUIChange(e){document.body.classList.toggle("ui-open",e!==null)}registerModal(e,t){return this.modalListeners.get(e)?.(),this.modals.set(e,t),this.modalListeners.set(e,t.on("close-request",()=>{this.isActiveUI(t)&&this.closeUI(t)})),t}closeModal(e){const t=this.getModal(e);this.isActiveUI(t)&&(Xe(`Closing modal: ${e}`),this.closeUI(t))}openModal(e){const t=this.getModal(e);Xe(`Opening modal: ${e}`),this.setActiveUI(t)}toggleModal(e){const t=this.getModal(e);if(this.isActiveUI(t)){Xe(`Closing modal: ${e}`),this.closeUI(t);return}Xe(`Opening modal: ${e}`),this.setActiveUI(t)}getModal(e){if(!this.modals.has(e))throw new Error(`No modal registered with name: ${e}`);return this.modals.get(e)}}function Al(i,e,t){const n=Math.max(1,e),r=Math.ceil(i/n),o=n*t,a=r*t;return{columns:n,rows:r,logicalWidth:o,logicalHeight:a,backgroundSize:`${o}px ${a}px`}}function Tl(i,e,t,n){const r={};return i.forEach((o,a)=>{const s=a%e,c=Math.floor(a/e),l=s*t,d=c*t;r[o]={id:o,backgroundPosition:`-${l}px -${d}px`,backgroundSize:n}}),r}async function cM(i,e={}){const t=e.columns??16,n=e.iconSize??64,r=e.chunkSize??20,o=e.renderScale??Math.min(window.devicePixelRatio||1,2),a=e.onProgress,s=Al(i.length,t,n),c=document.createElement("canvas");c.width=s.logicalWidth*o,c.height=s.logicalHeight*o;const l=c.getContext("2d");if(!l)throw new Error("Could not create the block texture sheet canvas context.");l.imageSmoothingEnabled=!0,l.clearRect(0,0,c.width,c.height);const d=new pl({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});d.setPixelRatio(o),d.outputColorSpace=Tt,d.setSize(n,n,!1),d.setClearColor(0,0);const h=new il,f=new Gr(-1.15,1.15,1.15,-1.15,.1,10);f.position.set(-2.6,1.8,2.6),f.lookAt(0,0,0),f.updateProjectionMatrix();const m=new wu(16777215,3);m.position.set(-5,10,1),m.lookAt(0,0,0),h.add(m);const b=new Sn(1,1,1),g=new Wa({transparent:!0,opacity:0}),p=new zt(b,g);h.add(p);const u=Tl(i,s.columns,n,s.backgroundSize),v=i.length;Xe("Starting texture sheet generation",{totalBlocks:v,columns:t,iconSize:n,chunkSize:r,renderScale:o}),a?.({completed:0,total:v});for(let y=0;y<i.length;y+=1){const E=i[y];Xe("Generating texture sheet block",{index:y,blockName:E});const A=Ja(E),T=kl(E)===Wt?yl(Dn.atlasTexture):bl(E)?Ml(Dn.atlasTexture):Qa(Dn.atlasTexture);p.geometry=A,p.material=T,d.clear(),d.render(h,f);const I=y%s.columns,k=Math.floor(y/s.columns),w=I*n,P=k*n;l.drawImage(d.domElement,w*o,P*o),a?.({completed:y+1,total:v}),(y+1)%r===0&&await lM()}p.material=g,p.geometry=b,b.dispose(),g.dispose(),d.dispose();const M=c.toDataURL("image/png");return{sheetCanvas:c,sheetUrl:M,textureSheetUrl:M,iconSize:n,items:i.map(y=>({...u[y],textureSheetUrl:M})),metadata:u}}function lM(){return new Promise(i=>{requestAnimationFrame(()=>i())})}class dM extends qr{slots;tooltipElement;constructor(){const e=document.createElement("div");e.className="inventory-grid hidden",super(e),this.slots=[],this.tooltipElement=document.createElement("div"),this.tooltipElement.className="inventory-tooltip inventory-tooltip-hidden tooltip-corners",(document.body??document.documentElement).appendChild(this.tooltipElement)}hide(){this.hideTooltip(),super.hide()}hideTooltip(){this.tooltipElement.classList.remove("inventory-tooltip-visible"),this.tooltipElement.classList.add("inventory-tooltip-hidden")}setTextureSheet(e){this.slots=e.items.filter(t=>t.id!==ja).map(t=>this.createSlot(t)),this.htmlElement.replaceChildren(...this.slots),this.show()}applyFilter(e){const t=e.trim().toLowerCase();let n=0;return this.slots.forEach(r=>{const a=(r.dataset.name??"").includes(t);r.classList.toggle("hidden",!a),a&&(n+=1)}),{query:t,totalCount:this.slots.length,visibleCount:n}}createSlot(e){const t=document.createElement("button");t.type="button",t.className="inventory-slot";const n=Cl(e.id),r={id:e.id,label:n,textureSheetUrl:e.textureSheetUrl,backgroundPosition:e.backgroundPosition,backgroundSize:e.backgroundSize};t.setAttribute("aria-label",n),t.dataset.name=n.toLowerCase(),t.dataset.blockId=e.id;const o=s=>{this.tooltipElement.textContent=n,this.tooltipElement.classList.remove("inventory-tooltip-hidden"),this.tooltipElement.classList.add("inventory-tooltip-visible"),this.positionTooltip(s)};t.addEventListener("mouseenter",o),t.addEventListener("pointermove",o),t.addEventListener("mouseleave",()=>this.hideTooltip()),t.addEventListener("blur",()=>this.hideTooltip()),t.addEventListener("click",()=>{this.hideTooltip(),this.emit("blockselect",r)});const a=document.createElement("span");return a.className="inventory-icon",a.style.backgroundImage=`url(${e.textureSheetUrl})`,a.style.backgroundPosition=e.backgroundPosition,a.style.backgroundSize=e.backgroundSize,t.append(a),t}positionTooltip(e){const t=this.tooltipElement,n=14,r=window.innerWidth,o=window.innerHeight,a=t.getBoundingClientRect();let s=e.clientX+n,c=e.clientY-a.height-n;s+a.width+n>r&&(s=Math.max(n,e.clientX-a.width-n)),c<n&&(c=e.clientY+n),c+a.height+n>o&&(c=Math.max(n,o-a.height-n)),s+a.width+n>r&&(s=Math.max(n,r-a.width-n)),t.style.left=`${s}px`,t.style.top=`${c}px`}}function Cl(i){return i.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}class uM extends qr{inputElement;constructor(){const e=document.createElement("div");e.className="inventory-search-container",super(e),this.inputElement=document.createElement("input"),this.inputElement.autocorrect=!1,this.inputElement.type="search",this.inputElement.className="inventory-search",this.inputElement.setAttribute("aria-label","Search inventory blocks"),this.inputElement.id="inventory-search-input";const t=document.createElement("label");t.textContent="Search Blocks:",t.className="inventory-search-label",t.setAttribute("for","inventory-search-input"),this.htmlElement.append(t),this.inputElement.addEventListener("input",()=>{this.emit("querychange",{query:this.inputElement.value})}),this.htmlElement.append(this.inputElement)}clear(){this.inputElement.value=""}setDisabled(e){this.inputElement.disabled=e}}class hM{status;search;grid;downloadButtons;constructor({status:e,search:t,grid:n,downloadButtons:r}){this.status=e,this.search=t,this.grid=n,this.downloadButtons=r}showLoading(e){this.resetUnavailableView(e,"default")}showError(e){this.resetUnavailableView(e,"error")}showTextureSheet(e){this.grid.setTextureSheet(e),this.status.setMessage(this.getLoadedMessage(e.items.length),"success"),this.search.setDisabled(!1),this.setDownloadButtonsDisabled(!1),this.search.clear()}showFilterResult({query:e,totalCount:t,visibleCount:n}){this.status.setMessage(e?`${n} of ${t} blocks`:this.getLoadedMessage(t),"success")}showActionResult(e){this.status.setMessage(e,"success")}resetToLoadedState(e){this.grid.setTextureSheet(e),this.search.clear(),this.search.setDisabled(!1),this.setDownloadButtonsDisabled(!1),this.status.setMessage(this.getLoadedMessage(e.items.length),"success")}resetUnavailableView(e,t){this.status.setMessage(e,t),this.grid.hide(),this.search.setDisabled(!0),this.setDownloadButtonsDisabled(!0)}setDownloadButtonsDisabled(e){this.downloadButtons.forEach(t=>{if(e){t.setAttribute("disabled","true");return}t.removeAttribute("disabled")})}getLoadedMessage(e){return`${e} blocks loaded`}}class fM{htmlElement;constructor(e){this.htmlElement=e??document.createElement("p"),this.htmlElement.className="inventory-status"}setMessage(e,t="default"){this.htmlElement.textContent=e,this.htmlElement.classList.toggle("error",t==="error"),this.htmlElement.classList.toggle("success",t==="success")}}class pM extends El{textureSheetDownloadFileName;textureAtlasDownloadFileName;textureSheet;textureAtlasUrl;statusComponent;headerElement;actionsElement;closeButton;downloadButton;atlasDownloadButton;searchComponent;gridComponent;stateController;constructor(e,t={}){super(e);const{showDownloadButton:n=!1,downloadFileName:r="block-texture-sheet.png"}=t.textureSheet??{},{showDownloadButton:o=!1,downloadFileName:a="block-texture-atlas.png"}=t.textureAtlas??{};this.textureSheetDownloadFileName=r,this.textureAtlasDownloadFileName=a,this.textureSheet=null,this.textureAtlasUrl=null,this.headerElement=document.createElement("div"),this.headerElement.className="inventory-header",this.actionsElement=document.createElement("div"),this.actionsElement.className="inventory-actions",this.closeButton=document.createElement("button"),this.closeButton.type="button",this.closeButton.className="inventory-action-button inventory-close-button",this.closeButton.setAttribute("aria-label","Close inventory"),this.closeButton.addEventListener("click",()=>{this.emit("close-request")}),this.downloadButton=null,n&&(this.downloadButton=document.createElement("button"),this.downloadButton.type="button",this.downloadButton.className="inventory-action-button",this.downloadButton.textContent="Download Texture Sheet",this.downloadButton.setAttribute("aria-label","Download block texture sheet"),this.downloadButton.disabled=!0,this.downloadButton.addEventListener("click",()=>{this.downloadTextureSheet()})),this.atlasDownloadButton=null,o&&(this.atlasDownloadButton=document.createElement("button"),this.atlasDownloadButton.type="button",this.atlasDownloadButton.className="inventory-action-button",this.atlasDownloadButton.textContent="Download Texture Atlas",this.atlasDownloadButton.setAttribute("aria-label","Download block texture atlas"),this.atlasDownloadButton.disabled=!0,this.atlasDownloadButton.addEventListener("click",()=>{this.downloadTextureAtlas()})),this.searchComponent=new uM,this.searchComponent.on("querychange",s=>{if(!(s instanceof CustomEvent))return;const c=s.detail;this.applyFilter(c?.query??"")}),this.gridComponent=new dM,this.gridComponent.on("blockselect",s=>{if(!(s instanceof CustomEvent))return;const c=s.detail;c&&this.emit("blockselect",c)}),this.statusComponent=new fM,this.stateController=new hM({status:this.statusComponent,search:this.searchComponent,grid:this.gridComponent,downloadButtons:[this.downloadButton,this.atlasDownloadButton].filter(s=>s!==null)}),this.actionsElement.append(this.searchComponent.htmlElement,...this.downloadButton?[this.downloadButton]:[],...this.atlasDownloadButton?[this.atlasDownloadButton]:[]),this.headerElement.append(this.statusComponent.htmlElement,this.closeButton),this.htmlElement.replaceChildren(this.headerElement,this.actionsElement,this.gridComponent.htmlElement),this.setLoadingState("Loading block texture sheet...")}setLoadingState(e){this.textureSheet=null,this.stateController.showLoading(e)}setErrorState(e){this.textureSheet=null,this.stateController.showError(e)}close(){super.close(),this.gridComponent?.hideTooltip(),this.textureSheet&&this.stateController.resetToLoadedState(this.textureSheet)}setGridTextureSheet(e){this.textureSheet=e,this.stateController.showTextureSheet(e),this.applyFilter("")}setTextureAtlasDownloadUrl(e){this.textureAtlasUrl=e,this.atlasDownloadButton?.removeAttribute("disabled")}applyFilter(e){const{query:t,totalCount:n,visibleCount:r}=this.gridComponent.applyFilter(e);this.stateController.showFilterResult({query:t,totalCount:n,visibleCount:r})}showSelectionFeedback(e){this.stateController.showActionResult(e)}downloadTextureSheet(){const e=this.textureSheet?.textureSheetUrl;e&&this.downloadUrl(e,this.textureSheetDownloadFileName)}downloadTextureAtlas(){this.textureAtlasUrl&&this.downloadUrl(this.textureAtlasUrl,this.textureAtlasDownloadFileName)}downloadUrl(e,t){const n=document.createElement("a");n.href=e,n.download=t,document.body.append(n),n.click(),n.remove()}}async function mM(i,e={}){const t=e.textureSheetUrl??"/images/block-texture-sheet.png",n=e.columns??16,r=e.iconSize??64,o=await _M(t),a=Al(i.length,n,r),s=Tl(i,a.columns,r,a.backgroundSize);return{textureSheetUrl:t,textureSheetImage:o,iconSize:r,items:i.map(c=>({...s[c],textureSheetUrl:t})),metadata:s}}function _M(i){return Xe("Loading block texture sheet",i),new Promise((e,t)=>{const n=new Image;n.addEventListener("load",()=>{Xe("Block texture sheet loaded",i),e(n)},{once:!0}),n.addEventListener("error",()=>{t(new Error(`Failed to load block texture sheet image: ${i}`))},{once:!0}),n.src=i})}function bM({inputManager:i,pointerControls:e,gameParams:t}){const n=new sM(i,e),r=n.registerModal("menu",new El(t.menuHtmlElm)),o=n.registerModal("inventory",new pM(t.inventoryHtmlElm,{textureSheet:t.inventoryBlockTextureSheetParams,textureAtlas:t.blockTextureAtlasParams}));return n.openModal("menu"),Xe("Menu modal opened and inventory initialization started"),document.getElementById("reset-world")?.addEventListener("click",()=>window.location.reload()),gM(o,t.inventoryBlockTextureSheetParams),{uiHandler:n,menu:r,inventory:o}}async function gM(i,e={}){try{const{source:t="static",staticTextureSheetUrl:n="/images/block-texture-sheet.png",columns:r=16,iconSize:o=64,chunkSize:a=20,renderScale:s}=e,c=NS;Xe("Initializing inventory UI",{source:t,staticTextureSheetUrl:n,columns:r,iconSize:o});const l=t==="generated"?await kM(i,c,{columns:r,iconSize:o,chunkSize:a,renderScale:s}):await xM(i,c,{textureSheetUrl:n,columns:r,iconSize:o});Xe("Inventory texture sheet loaded",{source:t,blockCount:c.length}),i.setGridTextureSheet(l),i.setTextureAtlasDownloadUrl(Dn.atlasTextureUrl)}catch(t){console.error(t),i.setErrorState("Failed to load block texture sheet.")}}function kM(i,e,t){return i.setLoadingState(`Generating block texture sheet... 0/${e.length} blocks`),cM(e,{...t,onProgress:({completed:n,total:r})=>{i.setLoadingState(`Generating block texture sheet... ${n}/${r} blocks`)}})}async function xM(i,e,t){return i.setLoadingState(`Loading block texture sheet... ${e.length} blocks`),mM(e,t)}class vM extends qr{selectedBlockLabel;slots;icons;numberBadges;constructor(e){const t=document.createElement("div");t.className="hotbar-overlay",t.setAttribute("aria-label","Player hotbar"),super(t),this.selectedBlockLabel=document.createElement("div"),this.selectedBlockLabel.className="hotbar-selected-block hidden",this.slots=[],this.icons=[],this.numberBadges=[];for(let n=0;n<e;n+=1){const r=document.createElement("div");r.className="hotbar-slot",r.setAttribute("role","listitem");const o=document.createElement("span");o.className="hotbar-slot-number",o.textContent=String(n+1);const a=document.createElement("span");a.className="hotbar-icon hotbar-icon-empty",a.setAttribute("aria-hidden","true"),r.append(a,o),this.slots.push(r),this.icons.push(a),this.numberBadges.push(o)}this.htmlElement.setAttribute("role","list"),this.htmlElement.replaceChildren(this.selectedBlockLabel,...this.slots)}render(e){const t=e.slots[e.activeSlotIndex];t?(this.selectedBlockLabel.textContent=t.label,this.selectedBlockLabel.classList.remove("hidden")):(this.selectedBlockLabel.textContent="",this.selectedBlockLabel.classList.add("hidden")),e.slots.forEach((n,r)=>{this.renderSlot(r,n,r===e.activeSlotIndex)})}renderSlot(e,t,n){const r=this.slots[e],o=this.icons[e];if(r.classList.toggle("hotbar-slot-active",n),!t){o.classList.add("hotbar-icon-empty"),o.style.backgroundImage="",o.style.backgroundPosition="",o.style.backgroundSize="",r.title=`Slot ${e+1}`,r.setAttribute("aria-label",`Slot ${e+1}, empty`);return}o.classList.remove("hotbar-icon-empty"),o.style.backgroundImage=`url(${t.textureSheetUrl})`,o.style.backgroundPosition=t.backgroundPosition,o.style.backgroundSize=t.backgroundSize,r.title=t.label,r.setAttribute("aria-label",`Slot ${e+1}, ${t.label}${n?", selected":""}`)}}class wM{constructor(e){this.chunkManager=e}chunkManager;subchunkMeshes=new Map;instancePosition=new U;instanceRotation=new Mi;instanceScale=new U(1,1,1);yAxis=new U(0,1,0);rebuildChunkMeshes(e){for(const t of e.subchunks)this.rebuildSubchunkMesh(e,t)}freeChunkMeshes(e){for(const t of e.subchunks){const n=this.subchunkMeshes.get(t);if(!n){t.dirty=!0;continue}for(const r of n.values())e.container.remove(r),r.dispose();n.clear(),this.subchunkMeshes.delete(t),t.dirty=!0}}rebuildSubchunkMesh(e,t){if(!t.dirty)return;const n=this.subchunkMeshes.get(t);if(n){for(const h of n.values())e.container.remove(h),h.dispose();n.clear()}const r=new Map,o=t.yIndex*dt.height,a=e.getWorldX(),s=e.getWorldZ();for(let h=0;h<Fe.size;h++)for(let f=0;f<dt.height;f++)for(let m=0;m<Fe.size;m++){const b=t.getVoxelId(h,f,m);if(b===rn)continue;const g=a+h,p=o+f,u=s+m;b===Wt&&this.isWaterHidden(g,p,u)||b!==Wt&&this.isHidden(g,p,u)||(r.has(b)||r.set(b,[]),r.get(b).push([h,f,m,t.getVoxelRotation(h,f,m)]))}const c=t.yIndex*dt.height,l=new tt,d=new Map;r.forEach((h,f)=>{const m=Ja(f),b=bl(f),g=f===Wt?yl():b?Ml():Qa(),p=new su(m,g,h.length);b&&(p.renderOrder=1),p.position.set(0,c,0),h.forEach((u,v)=>{this.instancePosition.set(u[0]+.5,u[1]+.5,u[2]+.5),this.instanceRotation.setFromAxisAngle(this.yAxis,u[3]*-(Math.PI/2)),l.compose(this.instancePosition,this.instanceRotation,this.instanceScale),p.setMatrixAt(v,l)}),p.instanceMatrix.needsUpdate=!0,e.container.add(p),d.set(f,p)}),this.subchunkMeshes.set(t,d),t.dirty=!1}isHidden(e,t,n){return this.chunkManager.isVoxelOpaqueForMeshing(e,t+1,n)&&this.chunkManager.isVoxelOpaqueForMeshing(e,t-1,n)&&this.chunkManager.isVoxelOpaqueForMeshing(e+1,t,n)&&this.chunkManager.isVoxelOpaqueForMeshing(e-1,t,n)&&this.chunkManager.isVoxelOpaqueForMeshing(e,t,n+1)&&this.chunkManager.isVoxelOpaqueForMeshing(e,t,n-1)}isWaterHidden(e,t,n){return this.chunkManager.getVoxelIdWorld(e,t+1,n)===Wt&&this.chunkManager.getVoxelIdWorld(e,t-1,n)===Wt&&this.chunkManager.getVoxelIdWorld(e+1,t,n)===Wt&&this.chunkManager.getVoxelIdWorld(e-1,t,n)===Wt&&this.chunkManager.getVoxelIdWorld(e,t,n+1)===Wt&&this.chunkManager.getVoxelIdWorld(e,t,n-1)===Wt}}class SM{PRIME_X=0x5205402b9270c86fn;PRIME_Y=0x598cd327003817b5n;PRIME_Z=0x5bcc226e9fa0bacbn;HASH_MULTIPLIER=0x53a3f72deec546f5n;SEED_FLIP_3D=-0x52d547b2e96ed629n;ROOT3OVER3=.577350269189626;RSQUARED_3D=3/4;N_GRADS_3D=256;NORMALIZER_3D=.2781926117527186;gradients3D;seed;constructor(e=0){this.seed=BigInt(Math.trunc(e)),this.gradients3D=this.initGradients()}noise3ImproveXZ(e,t,n){const r=e+n,o=r*-.211324865405187,a=t*this.ROOT3OVER3,s=e+o+a,c=n+o+a,l=r*-this.ROOT3OVER3+a;return this.noise3UnrotatedBase(this.seed,s,l,c)}initGradients(){const e=[2.22474487139,2.22474487139,-1,0,2.22474487139,2.22474487139,1,0,3.0862664687972017,1.1721513422464978,0,0,1.1721513422464978,3.0862664687972017,0,0,-2.22474487139,2.22474487139,-1,0,-2.22474487139,2.22474487139,1,0,-1.1721513422464978,3.0862664687972017,0,0,-3.0862664687972017,1.1721513422464978,0,0,2.22474487139,-2.22474487139,-1,0,2.22474487139,-2.22474487139,1,0,3.0862664687972017,-1.1721513422464978,0,0,1.1721513422464978,-3.0862664687972017,0,0,-2.22474487139,-2.22474487139,-1,0,-2.22474487139,-2.22474487139,1,0,-1.1721513422464978,-3.0862664687972017,0,0,-3.0862664687972017,-1.1721513422464978,0,0,2.22474487139,-1,2.22474487139,0,2.22474487139,1,2.22474487139,0,-2.22474487139,-1,2.22474487139,0,-2.22474487139,1,2.22474487139,0,2.22474487139,-1,-2.22474487139,0,2.22474487139,1,-2.22474487139,0,-2.22474487139,-1,-2.22474487139,0,-2.22474487139,1,-2.22474487139,0];for(let n=0;n<e.length;n++)e[n]/=this.NORMALIZER_3D;const t=new Float32Array(this.N_GRADS_3D*4);for(let n=0;n<t.length;n++)t[n]=e[n%e.length];return t}fastFloor(e){return Math.floor(e)}gradient(e,t,n,r,o,a,s){const c=BigInt.asUintN(64,(e^t^n^r)*this.HASH_MULTIPLIER),l=Number(BigInt.asUintN(32,c))&this.N_GRADS_3D-1<<2;return this.gradients3D[l]*o+this.gradients3D[l+1]*a+this.gradients3D[l+2]*s}noise3UnrotatedBase(e,t,n,r){const o=this.fastFloor(t),a=this.fastFloor(n),s=this.fastFloor(r),c=t-o,l=n-a,d=r-s,h=BigInt(o)*this.PRIME_X,f=BigInt(a)*this.PRIME_Y,m=BigInt(s)*this.PRIME_Z,b=e^this.SEED_FLIP_3D,g=c>.5?1:-1,p=l>.5?1:-1,u=d>.5?1:-1,v=c-(g===1?.5:-.5),M=l-(p===1?.5:-.5),y=d-(u===1?.5:-.5),E=this.RSQUARED_3D-v*v-M*M-y*y;let A=E>0?Math.pow(E,4)*this.gradient(e,h,f,m,v,M,y):0;const T=c-.5,I=l-.5,k=d-.5,w=this.RSQUARED_3D-T*T-I*I-k*k;return A+=w>0?Math.pow(w,4)*this.gradient(b,h+this.PRIME_X,f+this.PRIME_Y,m+this.PRIME_Z,T,I,k):0,A}}const MM=new SM(xt.seed);function yM(i){return Math.max(kt.WORLD_BOTTOM_Y+1,Math.min(Fe.height-1,i))}function EM(i,e){const t=MM.noise3ImproveXZ(i*xt.noiseScale,xt.surfaceSampleY,e*xt.noiseScale),n=Math.max(-1,Math.min(1,t));return yM(Math.round(xt.baseHeight+n*xt.heightVariation))}function Rl(i){return i<=xt.seaLevel+xt.beachBand}function AM(i){return i>=xt.snowStartHeight}function TM(i){return AM(i)?eb:Rl(i)?_l:Q_}function CM(i,e){return Rl(e)&&e-i<=xt.sandDepth?_l:e-i<=xt.topsoilDepth?Z_:J_}function RM(i,e){return i===kt.WORLD_BOTTOM_Y?ml:i===e?TM(e):CM(i,e)}function PM(i,e){const t=i.getWorldX(),n=i.getWorldZ();for(let r=0;r<Fe.size;r++)for(let o=0;o<Fe.size;o++){const a=t+r,s=n+o,c=EM(a,s),l=Math.min(Fe.height-1,Math.max(c,xt.seaLevel));for(let d=kt.WORLD_BOTTOM_Y;d<=l;d++){const h=d<=c?RM(d,c):Wt;e.setVoxelInChunk(i,r,d,o,h,!1)}}}class LM{worldChunksMap=new Map;meshManager;constructor(){this.meshManager=new wM(this)}getOrCreateChunk(e,t){const n=this.getChunkKey(e,t),r=this.worldChunksMap.get(n);if(r)return r;const o=new Fe(e,t);return this.worldChunksMap.set(n,o),o}getChunkIfExists(e,t){return this.worldChunksMap.get(this.getChunkKey(e,t))??null}getNeighborChunk(e,t,n){const r=this.getChunkKey(e.chunkX+t,e.chunkZ+n);return this.worldChunksMap.get(r)??null}deleteChunk(e){this.worldChunksMap.delete(e.getKey())}ensureChunkGenerated(e){return e.isDataGenerated?[]:(PM(e,this),e.isDataGenerated=!0,this.markGeneratedNeighborChunksDirty(e))}setVoxelInChunk(e,t,n,r,o,a){const s=e.getSubchunk(n),c=n%dt.height;s.setVoxel(t,c,r,o),this.markNeighborSubchunksDirtyForEdgeVoxel(e,s.yIndex,t,c,r),a&&(e.isModified=!0)}setVoxelWorld(e,t,n,r){const{chunkX:o,chunkZ:a}=Fe.worldToChunkCoords(e,n),s=this.getOrCreateChunk(o,a),c=Pn(e,Fe.size),l=Pn(n,Fe.size);return this.setVoxelInChunk(s,c,t,l,r,s.isDataGenerated),this.collectChunksNeedingMeshRebuild(s,c,l)}getVoxelIdWorld(e,t,n){return this.tryGetVoxelIdWorld(e,t,n)}rotateVoxelWorld(e,t,n){const r=this.tryGetVoxelRefWorld(e,t,n);if(!r)return!1;const{chunk:o,subchunk:a,localX:s,localY:c,localZ:l}=r;return a.getVoxelId(s,c,l)===rn?!1:(a.setVoxelRotation(s,c,l,a.getVoxelRotation(s,c,l)+1),o.isDataGenerated&&(o.isModified=!0),!0)}isVoxelSolidWorld(e,t,n){if(t<kt.WORLD_BOTTOM_Y)return!0;const r=this.tryGetVoxelIdWorld(e,t,n);return r!==null&&r!==rn&&r!==Wt}isVoxelSolidForMeshing(e,t,n){if(t<kt.WORLD_BOTTOM_Y)return!0;const r=this.tryGetVoxelIdWorld(e,t,n);return r===null?!0:r!==rn}isVoxelOpaqueForMeshing(e,t,n){if(t<kt.WORLD_BOTTOM_Y)return!0;const r=this.tryGetVoxelIdWorld(e,t,n);return r===null?!0:r!==rn&&!BS(r)}rebuildChunkMeshes(e){this.meshManager.rebuildChunkMeshes(e)}freeChunkMeshes(e){this.meshManager.freeChunkMeshes(e)}getChunkCount(){return this.worldChunksMap.size}tryGetVoxelIdWorld(e,t,n){if(t<kt.WORLD_BOTTOM_Y||t>=Fe.height)return rn;const r=this.tryGetVoxelRefWorld(e,t,n);return r?r.subchunk.getVoxelId(r.localX,r.localY,r.localZ):null}tryGetVoxelRefWorld(e,t,n){if(t<kt.WORLD_BOTTOM_Y||t>=Fe.height)return null;const{chunkX:r,chunkZ:o}=Fe.worldToChunkCoords(e,n),a=this.worldChunksMap.get(this.getChunkKey(r,o));if(!a||!a.isDataGenerated)return null;const s=Pn(e,Fe.size),c=Pn(n,Fe.size),l=a.getSubchunk(t),d=t%dt.height;return{chunk:a,subchunk:l,localX:s,localY:d,localZ:c}}markNeighborSubchunksDirtyForEdgeVoxel(e,t,n,r,o){n===0&&this.getNeighborChunk(e,-1,0)?.getSubchunk(t*dt.height).markDirty(),n===Fe.size-1&&this.getNeighborChunk(e,1,0)?.getSubchunk(t*dt.height).markDirty(),o===0&&this.getNeighborChunk(e,0,-1)?.getSubchunk(t*dt.height).markDirty(),o===Fe.size-1&&this.getNeighborChunk(e,0,1)?.getSubchunk(t*dt.height).markDirty(),r===0&&t>0&&e.getSubchunk((t-1)*dt.height).markDirty(),r===dt.height-1&&t<e.subchunkCount-1&&e.getSubchunk((t+1)*dt.height).markDirty()}collectChunksNeedingMeshRebuild(e,t,n){const r=new Set;return e.isDataGenerated&&r.add(e),t===0&&this.addGeneratedNeighborChunk(r,e,-1,0),t===Fe.size-1&&this.addGeneratedNeighborChunk(r,e,1,0),n===0&&this.addGeneratedNeighborChunk(r,e,0,-1),n===Fe.size-1&&this.addGeneratedNeighborChunk(r,e,0,1),Array.from(r)}addGeneratedNeighborChunk(e,t,n,r){const o=this.getNeighborChunk(t,n,r);o?.isDataGenerated&&e.add(o)}markGeneratedNeighborChunksDirty(e){const t=[this.getNeighborChunk(e,-1,0),this.getNeighborChunk(e,1,0),this.getNeighborChunk(e,0,-1),this.getNeighborChunk(e,0,1)].filter(n=>n?.isDataGenerated===!0);for(const n of t)this.markAllSubchunksDirty(n);return t}markAllSubchunksDirty(e){for(const t of e.subchunks)t.markDirty()}getChunkKey(e,t){return`${e},${t}`}}class DM{constructor(e){this.chunkManager=e}chunkManager;activeChunkKeys=new Set;buildQueue=[];refreshVisibleChunks(e,t,n,r){const o=this.collectChunkKeysWithinRadius(t,n,r),a=[];for(const s of this.activeChunkKeys){if(o.has(s))continue;const{chunkX:c,chunkZ:l}=this.parseChunkKey(s),d=this.chunkManager.getChunkIfExists(c,l);d&&a.push(d)}return this.activeChunkKeys=o,this.buildQueue=this.getChunkCoordsWithinRadiusSorted(t,n,r).filter(({chunkX:s,chunkZ:c})=>{const l=this.chunkManager.getChunkIfExists(s,c);return!l||l.container.parent!==e}),a}dequeueChunkToBuild(){return this.buildQueue.shift()}getLoadedChunkCount(){return this.activeChunkKeys.size}collectChunkKeysWithinRadius(e,t,n){const r=new Set;for(let o=e-n;o<=e+n;o++)for(let a=t-n;a<=t+n;a++)r.add(this.getChunkKey(o,a));return r}getChunkCoordsWithinRadiusSorted(e,t,n){return Array.from(this.activeChunkKeys,o=>this.parseChunkKey(o)).filter(({chunkX:o,chunkZ:a})=>this.getChunkDistance(o,a,e,t)<=n).sort((o,a)=>{const s=this.getChunkDistance(o.chunkX,o.chunkZ,e,t),c=this.getChunkDistance(a.chunkX,a.chunkZ,e,t);return s-c})}getChunkDistance(e,t,n,r){return Math.max(Math.abs(e-n),Math.abs(t-r))}getChunkKey(e,t){return`${e},${t}`}parseChunkKey(e){const[t,n]=e.split(",").map(r=>Number.parseInt(r,10));return{chunkX:t,chunkZ:n}}}function IM(){const i=[],e=Fe.size,t=Fe.height,n=dt.height,r=t/n;for(let c=0;c<=e;c++)i.push(0,0,c,e,0,c),i.push(c,0,0,c,0,e),i.push(0,t,c,e,t,c),i.push(c,t,0,c,t,e);for(let c=0;c<=e;c++)i.push(c,0,0,c,t,0),i.push(c,0,e,c,t,e),i.push(0,0,c,0,t,c),i.push(e,0,c,e,t,c);for(let c=1;c<r;c++){const l=c*n;for(let d=0;d<=e;d++)i.push(d,l,0,d,l,e);for(let d=0;d<=e;d++)i.push(0,l,d,e,l,d)}for(let c=0;c<=t;c++)i.push(0,c,0,e,c,0),i.push(0,c,e,e,c,e),i.push(0,c,0,0,c,e),i.push(e,c,0,e,c,e);const o=new Vt;o.setAttribute("position",new Ct(i,3));const a=new Zi({color:16711680,transparent:!0,opacity:.55,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Vr(o,a);return s.renderOrder=999,s.visible=!1,s}function UM(i,e,t){i.position.set(e*Fe.size,0,t*Fe.size)}class NM{wireframeVisible=!1;wireframe;currentChunkKey=null;constructor(){this.wireframe=IM()}attachChunk(e,t){t.container.parent!==e&&e.add(t.container)}removeChunk(e,t){e.remove(t.container)}toggleChunkWireframes(){this.setWireframeVisibility(!this.wireframeVisible)}setWireframeVisibility(e){this.wireframeVisible=e,this.wireframe.visible=e}updateCurrentChunkWireframe(e,t,n){if(!this.wireframeVisible)return;const r=`${t},${n}`;this.currentChunkKey!==r&&(this.currentChunkKey=r,UM(this.wireframe,t,n),this.wireframe.parent!==e&&e.add(this.wireframe))}}class FM{chunkManager;loadPlanner;sceneController;pendingChunkRefreshKeys=new Set;pendingChunkRefreshQueue=[];framesSinceLastLoad=kt.CHUNK_LOAD_INTERVAL;constructor(){this.chunkManager=new LM,this.loadPlanner=new DM(this.chunkManager),this.sceneController=new NM}updateWorldChunks(e,t){const{chunkX:n,chunkZ:r}=Fe.worldToChunkCoords(t.x,t.z);this.shouldRefreshVisibleChunks()?(this.refreshVisibleChunks(e,n,r),this.framesSinceLastLoad=0):this.framesSinceLastLoad++,this.processBuildQueue(e),this.sceneController.updateCurrentChunkWireframe(e,n,r)}shouldRefreshVisibleChunks(){return this.framesSinceLastLoad>=kt.CHUNK_LOAD_INTERVAL}refreshVisibleChunks(e,t,n){const r=kt.RENDER_DISTANCE,o=this.loadPlanner.refreshVisibleChunks(e,t,n,r);this.purgeUnmodifiedChunksOutsideRadius(e,o)}processBuildQueue(e){const t=this.loadPlanner.dequeueChunkToBuild();if(!t){this.processPendingChunkRefresh();return}const n=this.chunkManager.getOrCreateChunk(t.chunkX,t.chunkZ),r=this.chunkManager.ensureChunkGenerated(n);this.chunkManager.rebuildChunkMeshes(n),this.enqueueChunkRefreshes(r),this.sceneController.attachChunk(e,n)}purgeUnmodifiedChunksOutsideRadius(e,t){for(const n of t)this.sceneController.removeChunk(e,n),this.chunkManager.freeChunkMeshes(n),n.isModified||this.chunkManager.deleteChunk(n),this.pendingChunkRefreshKeys.delete(n.getKey())}enqueueChunkRefreshes(e){for(const t of e){const n=t.getKey();this.pendingChunkRefreshKeys.has(n)||(this.pendingChunkRefreshKeys.add(n),this.pendingChunkRefreshQueue.push(n))}}processPendingChunkRefresh(){const e=this.pendingChunkRefreshQueue.shift();if(!e)return;this.pendingChunkRefreshKeys.delete(e);const[t,n]=e.split(",").map(o=>Number.parseInt(o,10)),r=this.chunkManager.getChunkIfExists(t,n);r?.isDataGenerated&&this.chunkManager.rebuildChunkMeshes(r)}setVoxelWorld(e,t,n,r){const o=this.chunkManager.setVoxelWorld(e,t,n,r);for(const a of o)this.chunkManager.rebuildChunkMeshes(a)}isVoxelSolidWorld(e,t,n){return this.chunkManager.isVoxelSolidWorld(e,t,n)}getVoxelIdWorld(e,t,n){return this.chunkManager.getVoxelIdWorld(e,t,n)}rotateVoxelWorld(e,t,n){if(!this.chunkManager.rotateVoxelWorld(e,t,n))return!1;const{chunkX:o,chunkZ:a}=Fe.worldToChunkCoords(e,n),s=this.chunkManager.getChunkIfExists(o,a);return s?(this.chunkManager.rebuildChunkMeshes(s),!0):!1}getLoadedChunkCount(){return this.loadPlanner.getLoadedChunkCount()}getCachedChunkCount(){return this.chunkManager.getChunkCount()}toggleChunkWireframes(){this.sceneController.toggleChunkWireframes()}setWireframeVisibility(e){this.sceneController.setWireframeVisibility(e)}}class OM{htmlElement;visible;smoothedFps;toggleElements;constructor(){this.htmlElement=document.createElement("div"),this.htmlElement.className="hud gameplay",document.body.appendChild(this.htmlElement),this.visible=!1,this.smoothedFps=0,this.toggleElements=[]}registerToggleElement(e){this.toggleElements.push(e),this.syncElementVisibility(e)}toggle(){this.visible=!this.visible,this.syncVisibility()}update(e){const{playerPosition:t,deltaTime:n}=e,r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z),s=Math.floor(r/Fe.size),c=Math.floor(a/Fe.size),l=Math.floor(o/dt.height),d=Pn(r,Fe.size),h=Pn(o,Fe.height),f=Pn(a,Fe.size),m=Pn(o,dt.height),b=n*1e3,g=n>0?1/n:0;this.smoothedFps=this.smoothedFps===0?g:this.smoothedFps*.9+g*.1,this.htmlElement.textContent=[`FPS: ${this.formatNumber(this.smoothedFps,1)} | Frame: ${this.formatNumber(b,2)} ms`,`World: (${this.formatNumber(t.x,2)}, ${this.formatNumber(t.y,2)}, ${this.formatNumber(t.z,2)})`,`Block: (${r}, ${o}, ${a})`,`Chunk: (${s}, ${c}) | Local: (${d}, ${h}, ${f})`,`Subchunk: (${s}, ${l}, ${c}) | Local Y: ${m}`,`Loaded Chunks: ${e.loadedChunkCount} | Cached Chunks: ${e.cachedChunkCount}`,`Render Distance: ${kt.RENDER_DISTANCE} | Pointer: ${e.pointerLocked?"locked":"free"} | UI: ${e.uiOpen?"open":"closed"}`].join(`
`),this.syncVisibility()}syncVisibility(){this.htmlElement.classList.toggle("hidden",!this.visible),this.toggleElements.forEach(e=>{this.syncElementVisibility(e)})}syncElementVisibility(e){e.classList.toggle("hidden",!this.visible)}formatNumber(e,t){return Number.isFinite(e)?e.toFixed(t):"0.00"}}async function BM({scene:i,camera:e,pointerControls:t,gameParams:n,options:r={}}){const{keyPreset:o=n.keysPreset??La,player:a={},actions:s={}}=r,{blockName:c="redstone_block",spawnPosition:l=kt.PLAYER_STARTING_POSITION,params:d=n.playerParams}=a,{menu:h="MENU",inventory:f="INVENTORY",hud:m="HUD_TOGGLE"}=s,b=new X_;b.init(o);const g=new $_,p=new W_(b,g);Xe("Creating player mesh",c);const u=await iM(c);Xe("Player mesh created",{blockName:c}),u.position.set(...l),i.add(u);const v=new oM(u,d),M=new FM,y=new Y_(v,p,e,M),E=new OM,{uiHandler:A,inventory:T}=bM({inputManager:p,pointerControls:t,gameParams:n});GM(i,M,E,y,A);const I=new vM(Gi);document.body.appendChild(I.htmlElement),A.registerContainedElement(I.htmlElement),I.render(v.getHotbarSnapshot());const k=new WS(p,A,y,M,E),w=F=>{const V=v.assignHotbarItem(F);I.render(v.getHotbarSnapshot()),T.showSelectionFeedback(zM(F.label,V,v)),Xe("Hotbar item assigned",{blockId:F.id,slot:V.slotIndex+1,mode:V.mode,selectedBlock:v.getSelectedBlockName()})},P=F=>{const V=xl(F),$=T.textureSheet?.metadata[V],H=T.textureSheet?.textureSheetUrl;return!$||!H?null:{id:V,label:Cl(V),textureSheetUrl:H,backgroundPosition:$.backgroundPosition,backgroundSize:$.backgroundSize}},z=()=>{const F=v.clearActiveHotbarItem();if(I.render(v.getHotbarSnapshot()),!F){T.showSelectionFeedback("Active hotbar slot is already empty");return}T.showSelectionFeedback(`Removed ${F.label} from hotbar slot ${v.activeHotbarSlotIndex+1}`),Xe("Hotbar item removed",{blockId:F.id,slot:v.activeHotbarSlotIndex+1})};return Xe("UI initialized"),T.on("blockselect",F=>{if(!(F instanceof CustomEvent))return;const V=F.detail;V&&w(V)}),VM({system:k,player:v,hotbar:I,keyStore:g,uiHandler:A,assignHotbarItem:w,removeActiveHotbarItem:z,getInventorySelectionDetailForBlock:P,menuAction:h,inventoryAction:f,hudAction:m}),{player:v,system:k,uiHandler:A,inputManager:p,keyStore:g}}function zM(i,e,t){const n=e.slotIndex+1;return e.mode==="existing"?`${i} is already in hotbar slot ${n}`:e.mode==="replaced"?`Replaced active slot ${t.activeHotbarSlotIndex+1} with ${i}`:`Added ${i} to hotbar slot ${n}`}function VM({system:i,player:e,hotbar:t,keyStore:n,uiHandler:r,assignHotbarItem:o,removeActiveHotbarItem:a,getInventorySelectionDetailForBlock:s,menuAction:c,inventoryAction:l,hudAction:d}){const h=(g,p)=>{const u=v=>{Pl(v)||p(v.key.toLowerCase(),v)};document.addEventListener(g,u)},f=HM(),m=g=>g===0?"mouse-left":g===1?"mouse-middle":g===2?"mouse-right":null,b=g=>{e.selectHotbarSlot(g),t.render(e.getHotbarSnapshot()),Xe("Hotbar slot selected",{slot:g+1,selectedBlock:e.getSelectedBlockName()})};h("keydown",g=>{Xe(g,"pressed"),n.addPressedKey(g)}),h("keyup",g=>{Xe(g,"released"),n.removePressedKey(g)}),h("keydown",(g,p)=>{!p.repeat&&i.inputManager.isPressed(c)&&r.toggleModal("menu")}),h("keydown",(g,p)=>{!p.repeat&&i.inputManager.isPressed(l)&&r.toggleModal("inventory")}),h("keydown",(g,p)=>{!p.repeat&&i.inputManager.isPressed(d)&&i.toggleHUD()}),h("keydown",(g,p)=>{p.repeat||r.isUIOpen()||!r.isPointerLocked()||i.inputManager.isPressed("REMOVE_HOTBAR_ITEM")&&(p.preventDefault(),a())}),h("keydown",(g,p)=>{if(!p.repeat){for(let u=0;u<Gi;u+=1)if(i.inputManager.isPressed(`HOTBAR_SLOT_${u+1}`)){b(u);return}}}),document.addEventListener("wheel",g=>{if(r.isUIOpen()||!r.isPointerLocked()||g.deltaY===0)return;g.preventDefault();const p=g.deltaY<0?-1:1,u=(e.activeHotbarSlotIndex+p+Gi)%Gi;b(u)},{passive:!1}),document.addEventListener("pointerdown",g=>{const p=m(g.button);if(!p||(g.button===1&&g.preventDefault(),!r.isPointerLocked()||r.isUIOpen())||(n.addPressedKey(p),g.button!==1))return;const u=i.getHoveredBlockId();if(u===null)return;const v=s(u);v&&o(v)}),document.addEventListener("pointerup",g=>{const p=m(g.button);p&&n.removePressedKey(p)}),document.addEventListener("click",g=>{r.isTargetInsideActiveUI(g.target)||g instanceof MouseEvent&&r.isPointInsideActiveUI(g.clientX,g.clientY)||r.isPointerLocked()||(r.closeActiveUI(),r.lockPointer())}),window.addEventListener("blur",()=>{Xe("Window blurred, clearing key store"),n.clear(),f.classList.add("visible")}),window.addEventListener("focus",()=>{Xe("Window focused"),setTimeout(()=>{f.classList.remove("visible")},400)}),document.addEventListener("contextmenu",g=>{g.preventDefault()}),document.addEventListener("auxclick",g=>{g.button===1&&g.preventDefault()})}function HM(){const i=document.createElement("div");return i.className="focus-window-message",i.textContent="Window out of focus",document.body.appendChild(i),i}function Pl(i){const e=i.target;return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}function GM(i,e,t,n,r){const o=new al(new Sn(1,1,1)),a=new Zi({color:16767053}),s=()=>new Vr(o,a),c={x:0,y:30,z:0,collisionEnabled:n.isCollisionEnabled(),placeDebugBlock(){const{x:b,y:g,z:p}=c;e.setVoxelWorld(b,g,p,ml);const u=s();u.position.set(b+.5,g+.5,p+.5),i.add(u),Xe(`Origin alignment debug marker placed at world cell (${b}, ${g}, ${p})`)},clearDebugBlock(){const{x:b,y:g,z:p}=c;e.setVoxelWorld(b,g,p,0),Xe(`Cleared block at world cell (${b}, ${g}, ${p})`)}},l=s();l.position.set(c.x+.5,c.y+.5,c.z+.5),i.add(l);const d={...Ec(),...xt,applyTerrainSettings(){Ac({seed:d.seed,noiseScale:d.noiseScale,surfaceSampleY:d.surfaceSampleY,baseHeight:d.baseHeight,heightVariation:d.heightVariation,topsoilDepth:d.topsoilDepth,beachBand:d.beachBand,sandDepth:d.sandDepth,snowStartHeight:d.snowStartHeight,seaLevel:d.seaLevel,spawnClearance:d.spawnClearance}),window.location.reload()},resetTerrainSettings(){Wl(),window.location.reload()}},h=new Ka({title:"Debug Controls"});t.registerToggleElement(h.domElement),r.registerContainedElement(h.domElement);const f=h.addFolder("Debug Placement");f.add(c,"x").name("World X").step(1).onChange(b=>{l.position.x=b+.5}),f.add(c,"y").name("World Y").step(1).onChange(b=>{l.position.y=b+.5}),f.add(c,"z").name("World Z").step(1).onChange(b=>{l.position.z=b+.5}),f.add(c,"collisionEnabled").name("Player Collision").onChange(b=>{n.setCollisionEnabled(b),Xe(`Player collision ${b?"enabled":"disabled"}`)}),f.add(c,"placeDebugBlock").name("Place Debug Block"),f.add(c,"clearDebugBlock").name("Set To Air"),f.open();const m=h.addFolder("Terrain Generation");m.add(d,"seed").name("Seed").step(1),m.add(d,"noiseScale").name("Noise Scale").min(.001).max(.25).step(.001),m.add(d,"surfaceSampleY").name("Noise Sample Y").min(-128).max(128).step(.5),m.add(d,"baseHeight").name("Base Height").min(1).max(96).step(1),m.add(d,"heightVariation").name("Height Range").min(0).max(48).step(1),m.add(d,"topsoilDepth").name("Topsoil Depth").min(1).max(12).step(1),m.add(d,"beachBand").name("Beach Band").min(0).max(8).step(1),m.add(d,"sandDepth").name("Sand Depth").min(1).max(8).step(1),m.add(d,"snowStartHeight").name("Snow Line").min(0).max(127).step(1),m.add(d,"seaLevel").name("Sea Level").min(0).max(127).step(1),m.add(d,"spawnClearance").name("Spawn Clearance").min(2).max(24).step(1),m.add(d,"applyTerrainSettings").name("Apply + Reload"),m.add(d,"resetTerrainSettings").name("Reset Terrain"),document.addEventListener("keydown",b=>{b.repeat||Pl(b)||b.key.toLowerCase()==="p"&&c.placeDebugBlock()})}async function WM(){Xe("Bootstrapping game...");const{scene:i,renderer:e,camera:t,pointerControls:n}=P_(ls);Xe("Scene initialized",ls);const{system:r}=await BM({scene:i,camera:t,pointerControls:n,gameParams:ql,options:td});Xe("System initialized",{system:r}),Mc.remove(),globalThis.system=r,globalThis.scene=i,e.setAnimationLoop(o=>{r.animate(o,e,i,t)}),Xe("Render loop started"),zl(t,e)}await WM();
