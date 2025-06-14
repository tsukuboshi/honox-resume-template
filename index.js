var wr=Object.defineProperty;var Jt=e=>{throw TypeError(e)};var Ar=(e,t,n)=>t in e?wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>Ar(e,typeof t!="symbol"?t+"":t,n),bt=(e,t,n)=>t.has(e)||Jt("Cannot "+n);var u=(e,t,n)=>(bt(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>t.has(e)?Jt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),g=(e,t,n,r)=>(bt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),k=(e,t,n)=>(bt(e,t,"access private method"),n);var Vt=(e,t,n,r)=>({set _(s){g(e,t,s,n)},get _(){return u(e,t,r)}});import{AsyncLocalStorage as Er}from"node:async_hooks";function Cr(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Pt="__COMPOSED_HANDLER",kn=e=>e.length>1,Rn=e=>e[Pt]?Rn(e[Pt]):e,xr=e=>e.name||(kn(e)?"[middleware]":"[handler]"),kr=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=Rn(r);return{path:t,method:n,name:xr(s),isMiddleware:kn(s)}}),Rr=(e,t)=>{const n=Cr(),r={};let s=0,o=0;kr(e).filter(({isMiddleware:a})=>!a).map(a=>{const i=`${a.method}-${a.path}`;if((r[i]||(r[i]=[])).push(a),!(r[i].length>1))return s=Math.max(s,a.method.length),o=Math.max(o,a.path.length),{method:a.method,path:a.path,routes:r[i]}}).forEach(a=>{if(!a)return;const{method:i,path:l,routes:c}=a,f=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${f} ${" ".repeat(s-i.length)} ${l}`)})};const Or=e=>(e.status(404),e.render("404 Not Found")),jr=Object.freeze(Object.defineProperty({__proto__:null,default:Or},Symbol.toStringTag,{value:"Module"})),Pr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Ir=Object.freeze(Object.defineProperty({__proto__:null,default:Pr},Symbol.toStringTag,{value:"Module"}));var On={Stringify:1},B=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},_r=/[&<>'"]/,jn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const a=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??a)n+=o;else{const i=[n];ue(o,i),n=i[0]}}return B(n,t)},ue=(e,t)=>{const n=e.search(_r);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Pn=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:On.Stringify,buffer:n,context:r})),n[0]},In=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(i=>i({phase:t,buffer:s,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>In(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Tr=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let a=0,i=o.length;a<i;a++){const l=o[a];if(typeof l=="string")ue(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const c=l.toString();c instanceof Promise?n.unshift("",c):n[0]+=c}else l instanceof Promise?n.unshift("",l):ue(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?B(Pn(B(n[0],n.callbacks))):B(n[0]):jn(n,n.callbacks)},Bt=Symbol("RENDERER"),It=Symbol("ERROR_HANDLER"),O=Symbol("STASH"),_n=Symbol("INTERNAL"),Dr=Symbol("MEMO"),ft=Symbol("PERMALINK"),Zt=e=>(e[_n]=!0,e),Tn=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Zt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Zt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[It]=o=>{throw e.pop(),o},s},Dn=e=>{const t=[e],n=Tn(t);return n.values=t,n.Provider=n,Ie.push(n),n},Ie=[],Ht=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Mn("",{},r.children):r.children).toString():""}finally{t.pop()}return s instanceof Promise?s.then(o=>B(o,o.callbacks)):B(s)};return n.values=t,n.Provider=n,n[Bt]=Tn(t),Ie.push(n),n},Ae=e=>e.values.at(-1),nt={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},_t={},rt="data-precedence",Ze=e=>Array.isArray(e)?e:[e],Xt=new WeakMap,Qt=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const a=Xt.get(o)||{};Xt.set(o,a);const i=a[e]||(a[e]=[]);let l=!1;const c=nt[e];if(c.length>0){e:for(const[,f]of i)for(const h of c)if(((f==null?void 0:f[h])??null)===(n==null?void 0:n[h])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):c.length>0?i.push([t,n,r]):i.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let f;if(r===void 0)f=i.map(([h])=>h);else{const h=[];f=i.map(([d,,m])=>{let b=h.indexOf(m);return b===-1&&(h.push(m),b=h.length-1),[d,b]}).sort((d,m)=>d[1]-m[1]).map(([d])=>d)}f.forEach(h=>{s[0]=s[0].replaceAll(h,"")}),s[0]=s[0].replace(/(?=<\/head>)/,f.join(""))}},Xe=(e,t,n)=>B(new K(e,n,Ze(t??[])).toString()),Qe=(e,t,n,r)=>{if("itemProp"in n)return Xe(e,t,n);let{precedence:s,blocking:o,...a}=n;s=r?s??"":void 0,r&&(a[rt]=s);const i=new K(e,a,Ze(t||[])).toString();return i instanceof Promise?i.then(l=>B(i,[...l.callbacks||[],Qt(e,l,a,s)])):B(i,[Qt(e,i,a,s)])},$r=({children:e,...t})=>{const n=Gt();if(n){const r=Ae(n);if(r==="svg"||r==="head")return new K("title",t,Ze(e??[]))}return Qe("title",e,t,!1)},Lr=({children:e,...t})=>{const n=Gt();return["src","async"].some(r=>!t[r])||n&&Ae(n)==="head"?Xe("script",e,t):Qe("script",e,t,!1)},Nr=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,Qe("style",e,t,!0)):Xe("style",e,t),Mr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Xe("link",e,t):Qe("link",e,t,"precedence"in t),Wr=({children:e,...t})=>{const n=Gt();return n&&Ae(n)==="head"?Xe("meta",e,t):Qe("meta",e,t,!1)},$n=(e,{children:t,...n})=>new K(e,n,Ze(t??[])),Fr=e=>(typeof e.action=="function"&&(e.action=ft in e.action?e.action[ft]:void 0),$n("form",e)),Ln=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=ft in t.formAction?t.formAction[ft]:void 0),$n(e,t)),Br=e=>Ln("input",e),Hr=e=>Ln("button",e);const yt=Object.freeze(Object.defineProperty({__proto__:null,button:Hr,form:Fr,input:Br,link:Mr,meta:Wr,script:Lr,style:Nr,title:$r},Symbol.toStringTag,{value:"Module"}));var Gr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),ht=e=>Gr.get(e)||e,Nn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},He=void 0,Gt=()=>He,zr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Ur=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Kr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],zt=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ue(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof K?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):zt(s,t)}}},K=class{constructor(e,t,n){w(this,"tag");w(this,"props");w(this,"key");w(this,"children");w(this,"isEscaped",!0);w(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Pn(B(e[0],e.callbacks)).toString():e[0]:jn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=He&&Ae(He)==="svg"?o=>zr(ht(o)):o=>ht(o);for(let[o,a]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof a=="object"){let i="";Nn(a,(l,c)=>{c!=null&&(i+=`${i?";":""}${l}:${c}`)}),e[0]+=' style="',ue(i,e),e[0]+='"'}else if(typeof a=="string")e[0]+=` ${o}="`,ue(a,e),e[0]+='"';else if(a!=null)if(typeof a=="number"||a.isEscaped)e[0]+=` ${o}="${a}"`;else if(typeof a=="boolean"&&Kr.includes(o))a&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";r=[B(a.__html)]}else if(a instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',a);else if(typeof a=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${t}'.`}else e[0]+=` ${o}="`,ue(a.toString(),e),e[0]+='"'}if(Ur.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",zt(r,e),e[0]+=`</${t}>`}},St=class extends K{toStringToBuffer(e){const{children:t}=this,n=this.tag.call(null,{...this.props,children:t.length<=1?t[0]:t});if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(Ie.length===0)e.unshift("",n);else{const r=Ie.map(s=>[s,s.values.at(-1)]);e.unshift("",n.then(s=>(s instanceof K&&(s.localContexts=r),s)))}else n instanceof K?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...n.callbacks))):ue(n,e)}},Mn=class extends K{toStringToBuffer(e){zt(this.children,e)}},Tt=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=st(e,t,n);return s.key=r,s},Yt=!1,st=(e,t,n)=>{if(!Yt){for(const r in _t)yt[r][Bt]=_t[r];Yt=!0}return typeof e=="function"?new St(e,t,n):yt[e]?new St(yt[e],t,n):e==="svg"||e==="head"?(He||(He=Ht("")),new K(e,t,[new St(He,{value:e},n)])):new K(e,t,n)},gt=({children:e})=>new Mn("",{children:e},Array.isArray(e)?e:e?[e]:[]),qr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function v(e,t,n){let r;if(!t||!("children"in t))r=st(e,t,[]);else{const s=t.children;r=Array.isArray(s)?st(e,t,s):st(e,t,[s])}return r.key=n,r}var Ge="_hp",Jr={Change:"Input",DoubleClick:"DblClick"},Vr={svg:"2000/svg",math:"1998/Math/MathML"},_e=[],Dt=new WeakMap,Te=void 0,Zr=()=>Te,Z=e=>"t"in e,wt={onClick:["click",!1]},en=e=>{if(!e.startsWith("on"))return;if(wt[e])return wt[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return wt[e]=[(Jr[n]||n).toLowerCase(),!!r]}},tn=(e,t)=>Te&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,Xr=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=ht(s);const a=en(s);if(a){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(a[0],n[s],a[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(a[0],o,a[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let i;typeof o=="function"?i=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,i=()=>o.current=null),Dt.set(e,i)}else if(s==="style"){const i=e.style;typeof o=="string"?i.cssText=o:(i.cssText="",o!=null&&Nn(o,i.setProperty.bind(i)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const i=tn(e,s);o==null||o===!1?e.removeAttribute(i):o===!0?e.setAttribute(i,""):typeof o=="string"||typeof o=="number"?e.setAttribute(i,o):e.setAttribute(i,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=ht(s);const a=en(s);a?e.removeEventListener(a[0],o,a[1]):s==="ref"?(r=Dt.get(e))==null||r():e.removeAttribute(tn(e,s))}}},Qr=(e,t)=>{t[O][0]=0,_e.push([e,t]);const n=t.tag[Bt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{_e.pop()}},Wn=(e,t,n,r,s)=>{var o,a;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((a=e[O][1][We])==null||a.forEach(i=>s.push(i))),e.vC.forEach(i=>{var l;if(Z(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const c=n.length;if(Wn(i,t,n,r,s),i.s){for(let f=c;f<n.length;f++)n[f].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},Yr=e=>{for(;;e=e.tag===Ge||!e.vC||!e.pP?e.nN:e.vC[0]){if(!e)return null;if(e.tag!==Ge&&e.e)return e.e}},Fn=e=>{var t,n,r,s,o,a;Z(e)||((n=(t=e[O])==null?void 0:t[1][We])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Dt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(i=>i.p=2)),(o=e.vC)==null||o.forEach(Fn)),e.p||((a=e.e)==null||a.remove(),delete e.e),typeof e.tag=="function"&&(Ne.delete(e),ot.delete(e),delete e[O][3],e.a=!0)},Bn=(e,t,n)=>{e.c=t,Hn(e,t,n)},nn=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},rn=Symbol(),Hn=(e,t,n)=>{var c;const r=[],s=[],o=[];Wn(e,t,r,s,o),s.forEach(Fn);const a=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!a.length)i=0;else{const f=nn(a,Yr(e.nN));f!==void 0?(l=a[f],i=f):i=nn(a,(c=r.find(h=>h.tag!==Ge&&h.e))==null?void 0:c.e)??-1,i===-1&&(n=!0)}for(let f=0,h=r.length;f<h;f++,i++){const d=r[f];let m;if(d.s&&d.e)m=d.e,d.s=!1;else{const b=n||!d.e;Z(d)?(d.e&&d.d&&(d.e.textContent=d.t),d.d=!1,m=d.e||(d.e=document.createTextNode(d.t))):(m=d.e||(d.e=d.n?document.createElementNS(d.n,d.tag):document.createElement(d.tag)),Xr(m,d.props,d.pP),Hn(d,m,b))}d.tag===Ge?i--:n?m.parentNode||t.appendChild(m):a[i]!==m&&a[i-1]!==m&&(a[i+1]===m?t.appendChild(a[i]):t.insertBefore(m,l||a[i]||null))}if(e.pP&&delete e.pP,o.length){const f=[],h=[];o.forEach(([,d,,m,b])=>{d&&f.push(d),m&&h.push(m),b==null||b()}),f.forEach(d=>d()),h.length&&requestAnimationFrame(()=>{h.forEach(d=>d())})}},es=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),ot=new WeakMap,$t=(e,t,n)=>{var o,a,i,l,c,f;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?Qr(e,t):Ze(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][It]&&(s=n[0][It],e[5].push([e,s,t]));const h=r?[...t.pC]:t.vC?[...t.vC]:void 0,d=[];let m;for(let b=0;b<n.length;b++){Array.isArray(n[b])&&n.splice(b,1,...n[b].flat());let p=ts(n[b]);if(p){typeof p.tag=="function"&&!p.tag[_n]&&(Ie.length>0&&(p[O][2]=Ie.map(S=>[S,S.values.at(-1)])),(a=e[5])!=null&&a.length&&(p[O][3]=e[5].at(-1)));let y;if(h&&h.length){const S=h.findIndex(Z(p)?A=>Z(A):p.key!==void 0?A=>A.key===p.key&&A.tag===p.tag:A=>A.tag===p.tag);S!==-1&&(y=h[S],h.splice(S,1))}if(y)if(Z(p))y.t!==p.t&&(y.t=p.t,y.d=!0),p=y;else{const S=y.pP=y.props;if(y.props=p.props,y.f||(y.f=p.f||t.f),typeof p.tag=="function"){const A=y[O][2];y[O][2]=p[O][2]||[],y[O][3]=p[O][3],!y.f&&((y.o||y)===p.o||(l=(i=y.tag)[Dr])!=null&&l.call(i,S,y.props))&&es(A,y[O][2])&&(y.s=!0)}p=y}else if(!Z(p)&&Te){const S=Ae(Te);S&&(p.n=S)}if(!Z(p)&&!p.s&&($t(e,p),delete p.f),d.push(p),m&&!m.s&&!p.s)for(let S=m;S&&!Z(S);S=(c=S.vC)==null?void 0:c.at(-1))S.nN=p;m=p}}t.vR=r?[...t.vC,...h||[]]:h||[],t.vC=d,r&&delete t.pC}catch(h){if(t.f=!0,h===rn){if(s)return;throw h}const[d,m,b]=((f=t[O])==null?void 0:f[3])||[];if(m){const p=()=>at([0,!1,e[2]],b),y=ot.get(b)||[];y.push(p),ot.set(b,y);const S=m(h,()=>{const A=ot.get(b);if(A){const E=A.indexOf(p);if(E!==-1)return A.splice(E,1),p()}});if(S){if(e[0]===1)e[1]=!0;else if($t(e,b,[S]),(m.length===1||e!==d)&&b.c){Bn(b,b.c,!1);return}throw rn}}throw h}finally{s&&e[5].pop()}},ts=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[O]=[0,[]];else{const t=Vr[e.tag];t&&(Te||(Te=Dn("")),e.props.children=[{tag:Te,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},sn=(e,t)=>{var n,r;(n=t[O][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{$t(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[O][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Bn(t,t.c,!1)},Ne=new WeakMap,on=[],at=async(e,t)=>{e[5]||(e[5]=[]);const n=Ne.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(Ne.set(t,[r,()=>{e[2]?e[2](e,t,o=>{sn(o,t)}).then(()=>r(t)):(sn(e,t),r(t))}]),on.length)on.at(-1).add(t);else{await Promise.resolve();const o=Ne.get(t);o&&(Ne.delete(t),o[1]())}return s},ns=(e,t,n)=>({tag:Ge,props:{children:e},key:n,e:t,p:1}),At=0,We=1,Et=2,Ct=3,xt=new WeakMap,Ut=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),rs=void 0,an=[],dt=e=>{var a;const t=()=>typeof e=="function"?e():e,n=_e.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(a=r[O][1])[At]||(a[At]=[]),o=r[O][0]++;return s[o]||(s[o]=[t(),i=>{const l=rs,c=s[o];if(typeof i=="function"&&(i=i(c[0])),!Object.is(i,c[0]))if(c[0]=i,an.length){const[f,h]=an.at(-1);Promise.all([f===3?r:at([f,!1,l],r),h]).then(([d])=>{if(!d||!(f===2||f===3))return;const m=d.vC;requestAnimationFrame(()=>{setTimeout(()=>{m===d.vC&&at([f===3?1:0,!1,l],d)})})})}else at([0,!1,l],r)}])},ss=(e,t,n)=>{var c;const r=_e.at(-1);if(!r)return;const[,s]=r,o=(c=s[O][1])[We]||(c[We]=[]),a=s[O][0]++,[i,,l]=o[a]||(o[a]=[]);if(Ut(i,n)){l&&l();const f=()=>{h[e]=void 0,h[2]=t()},h=[n,void 0,void 0,void 0,void 0];h[e]=f,o[a]=h}},ln=(e,t)=>ss(3,e,t),Kt=(e,t)=>{var i;const n=_e.at(-1);if(!n)return e;const[,r]=n,s=(i=r[O][1])[Et]||(i[Et]=[]),o=r[O][0]++,a=s[o];return Ut(a==null?void 0:a[1],t)?s[o]=[e,t]:e=s[o][0],e},os=e=>{const t=xt.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>xt.set(e,[n]),n=>xt.set(e,[void 0,n])),e},as=(e,t)=>{var i;const n=_e.at(-1);if(!n)return e();const[,r]=n,s=(i=r[O][1])[Ct]||(i[Ct]=[]),o=r[O][0]++,a=s[o];return Ut(a==null?void 0:a[1],t)&&(s[o]=[e(),t]),s[o][0]},is=Dn({pending:!1,data:null,method:null,action:null}),cn=new Set,ls=e=>{cn.add(e),e.finally(()=>cn.delete(e))},qt=(e,t)=>as(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),Ee=Object.create(null),et=Object.create(null),Ye=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:a,onError:i,precedence:l,blocking:c,...f}=t,h=null,d=!1;const m=nt[e];let b;if(m.length>0){const A=o.querySelectorAll(e);e:for(const E of A)for(const x of nt[e])if(E.getAttribute(x)===t[x]){h=E;break e}if(!h){const E=m.reduce((x,R)=>t[R]===void 0?x:`${x}-${R}-${t[R]}`,e);d=!et[E],h=et[E]||(et[E]=(()=>{const x=document.createElement(e);for(const R of m)t[R]!==void 0&&x.setAttribute(R,t[R]),t.rel&&x.setAttribute("rel",t.rel);return x})())}}else b=o.querySelectorAll(e);l=r?l??"":void 0,r&&(f[rt]=l);const p=Kt(A=>{if(m.length>0){let E=!1;for(const x of o.querySelectorAll(e)){if(E&&x.getAttribute(rt)!==l){o.insertBefore(A,x);return}x.getAttribute(rt)===l&&(E=!0)}o.appendChild(A)}else if(b){let E=!1;for(const x of b)if(x===A){E=!0;break}E||o.insertBefore(A,o.contains(b[0])?b[0]:o.querySelector(e)),b=void 0}},[l]),y=qt(t.ref,A=>{var R;const E=m[0];if(n===2&&(A.innerHTML=""),(d||b)&&p(A),!i&&!a)return;let x=Ee[R=A.getAttribute(E)]||(Ee[R]=new Promise((q,J)=>{A.addEventListener("load",q),A.addEventListener("error",J)}));a&&(x=x.then(a)),i&&(x=x.catch(i)),x.catch(()=>{})});if(s&&c==="render"){const A=nt[e][0];if(t[A]){const E=t[A],x=Ee[E]||(Ee[E]=new Promise((R,q)=>{p(h),h.addEventListener("load",R),h.addEventListener("error",q)}));os(x)}}const S={tag:e,type:e,props:{...f,ref:y},ref:y};return S.p=n,h&&(S.e=h),ns(S,o)},cs=e=>{const t=Zr(),n=t&&Ae(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:Ye("title",e,void 0,!1,!1)},us=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:Ye("script",e,1,!1,!0),fs=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,Ye("style",e,2,!0,!0)),hs=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:Ye("link",e,1,"precedence"in e,!0),ds=e=>Ye("meta",e,void 0,!1,!1),Gn=Symbol(),ps=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=dt([null,!1]),o=Kt(async c=>{const f=c.isTrusted?t:c.detail[Gn];if(typeof f!="function")return;c.preventDefault();const h=new FormData(c.target);s([h,!0]);const d=f(h);d instanceof Promise&&(ls(d),await d),s([null,!0])},[]),a=qt(e.ref,c=>(c.addEventListener("submit",o),()=>{c.removeEventListener("submit",o)})),[i,l]=r;return r[1]=!1,{tag:is,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:a},type:"form",ref:a}},f:l}},zn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Kt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Gn]:t}}))},[]);n.ref=qt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},ms=e=>zn("input",e),gs=e=>zn("button",e);Object.assign(_t,{title:cs,script:us,style:fs,link:hs,meta:ds,form:ps,input:ms,button:gs});new TextEncoder;var vs=Ht(null),bs=(e,t,n,r)=>(s,o)=>{const a="<!DOCTYPE html>",i=n?Tt(c=>n(c,e),{Layout:t,...o},s):s,l=Tr`${B(a)}${Tt(vs.Provider,{value:e},i)}`;return e.html(l)},ys=(e,t)=>function(r,s){const o=r.getLayout()??gt;return e&&r.setLayout(a=>e({...a,Layout:o},r)),r.setRenderer(bs(r,o,e)),s()};const Ss=ys(({children:e})=>v("html",{lang:"en",children:[v("head",{children:[v("meta",{charset:"utf-8"}),v("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),v(mn,{href:"/favicon.ico",rel:"icon"}),v(mn,{href:"/app/style.css",rel:"stylesheet"}),v(ko,{src:"/app/client.ts",async:!0})]}),v("body",{children:e})]})),ws=Object.freeze(Object.defineProperty({__proto__:null,default:Ss},Symbol.toStringTag,{value:"Module"}));function As(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const a=o.match(/^(#+)\s+(.+)/);if(a){r&&n.push(r);const i=a[1].length;let l=a[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}function xe(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,'<code class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200">$1</code>')}function Es(e){const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const s=t[r].trim();if(s==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(s.startsWith("- ")){let a=s.substring(2).replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');a=xe(a),n+=`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">•</span><span>${a}</span></li>`,r++;continue}if(s.includes("|")&&t[r+1]&&t[r+1].includes("---")){const o=s.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',o.forEach(i=>{let l=i.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');l=xe(l),n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${l}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{let c=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');c=xe(c),n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${c}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>",r--}else{let i=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');i=xe(i),n+=i+"<br>"}}else if(s){let o=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');o=xe(o),n+=o+"<br>"}else n+="<br>";r++}return n}function Cs(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,a="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),a="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),a="docswell-iframe"),`<iframe class="${a}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function xs(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:680px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Un(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ks(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Un(r))return!0}return!1}function Rs(e,t){if(!ks(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const a=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(a,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const c=l[2];if(!Un(c))return i;const f=i.match(o.usernameRegex),h=f?f[1]:"";if(h){const d=encodeURIComponent(`${o.name}-@${h}`),m=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),p=`https://img.shields.io/badge/${d}-${b}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${p}" alt="${o.name}" /></a>`}else{const d=encodeURIComponent(o.name),m=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),p=`https://img.shields.io/badge/${d}-${b}?style=flat&logo=${m}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${p}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}function Os(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function De(e,t){if(!e.trim())return"";let n=Os(e);return n=Cs(n),n=xs(n),n=Rs(n),n=xe(n),Es(n)}const js="component-name",Ps="component-export",Is="data-serialized-props",_s="data-hono-template",fe="__importing_islands",Lt=Symbol(),Nt=Symbol(),kt=Ht({[Lt]:!1,[Nt]:!1}),Kn=e=>Array.isArray(e)?e.some(Kn):typeof e=="object"&&qr(e),qn=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const i in r){const l=r[i];Kn(l)?s[i]=l:o[i]=l}const a=Ae(kt);return a[Nt]||!a[Lt]?v("honox-island",{[js]:e,[Ps]:t||void 0,[Is]:JSON.stringify(o),children:[v(kt.Provider,{value:{...a,[Lt]:!0},children:v(n,{...r})}),Object.entries(s).map(([i,l])=>Tt("template",{[_s]:i,key:i},v(kt.Provider,{value:{...a,[Nt]:!0},children:l})))]}):v(n,{...r})},Ts=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=dt(r),a=n===4?"text-lg font-semibold text-gray-800":n===3?"text-xl font-semibold text-gray-800":n===2?"text-2xl font-bold text-gray-900":"text-3xl font-bold text-gray-900";return n!==4?v("div",{className:"mb-6",children:[v("h2",{className:a+" mb-4",dangerouslySetInnerHTML:{__html:e}}),v("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:De(t)}})]}):v("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[v("button",{onClick:()=>o(!s),className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[v("span",{className:`transform transition-transform text-gray-500 ${s?"rotate-90":""}`,children:"▶"}),v("span",{className:a,dangerouslySetInnerHTML:{__html:e}})]}),s&&v("div",{className:"px-4 pb-4 border-t border-gray-100",children:v("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:De(t)}})})]})},Ds=function(e){return v(qn,{componentName:"/app/islands/ToggleSection.tsx",Component:Ts,props:e})},$s=function({section:e,subsections:t}){const[n,r]=dt({}),[s,o]=dt(!1);ln(()=>{const c={};t.forEach(f=>{c[f.id]=!1}),r(c)},[t]);const a=c=>{r(f=>({...f,[c]:!f[c]}))},i=()=>{const c=!s,f={};t.forEach(h=>{f[h.id]=c}),r(f),o(c)};return ln(()=>{const c=Object.values(n).filter(Boolean).length;o(c===t.length&&t.length>0)},[n,t.length]),v("div",{className:"mb-8",children:[v("div",{className:"flex items-center justify-between mb-4",children:[v("h3",{className:"text-xl font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}}),t.length>0&&v("button",{onClick:i,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${s?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[v("span",{className:"text-xs",children:s?"全て閉じる":"全て開く"}),v("span",{className:`transform transition-transform ${s?"rotate-180":""}`,children:"▼"})]})]}),e.content.trim()&&v("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:De(e.content,e.title)}}),t.map(c=>{const f=n[c.id]||!1;return v("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[v("button",{onClick:()=>a(c.id),className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[v("span",{className:`transform transition-transform text-gray-500 ${f?"rotate-90":""}`,children:"▶"}),v("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:c.title}})]}),f&&v("div",{className:"px-4 pb-4 border-t border-gray-100",children:v("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:De(c.content,c.title)}})})]},c.id)})]})},Ls=function(e){return v(qn,{componentName:"/app/islands/SectionWithBulkToggle.tsx",Component:$s,props:e})},Ns=`## 基本情報

### プロフィール

|項目|値|
|---|---|
|ハンドルネーム|つくぼし|
|最終学歴|早稲田大学 商学部卒|
|経験職種|ソリューションアーキテクト/バックエンドエンジニア/プロジェクトマネージャー|

### アカウント

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi)
- [Zenn](https://zenn.dev/tsukuboshi)
- [Qiita](https://qiita.com/kuraboshi)
- [Github](https://github.com/tsukuboshi)
- [SpeakerDeck](https://speakerdeck.com/tsukuboshi)
- [Docswell](https://www.docswell.com/user/tsukuboshi)
- [X](https://x.com/tsukuboshi0755)

## 業務スキル

### クラウドアーキテクチャ設計

現在は AWS を業務で一番用いています。  
モノリシック、静的ウェブサイトホスティング、マイクロサービス、CICD パイプライン、マルチアカウント、サーバレスといった様々なアーキテクチャの設計・構築経験があります。  
AWS アーキテクチャを構築するにあたり、CloudFormation、Terraform、CDK といった IaC の開発経験も多数あります。

### サーバレスバックエンド開発

クラウドインフラのみならず、サーバレスアーキテクチャ上のバックエンド開発経験も持ち合わせているためフルスタックな活躍が可能です。  
アーキテクチャとしては、主に Lambda や ECS Fargate 上での開発経験があります。
特に Python 及び TypeScript を用いたバックエンド開発が得意です。

### 生成AIの専門知識

最近は生成 AI、RAG、及び AI エージェントの技術支援に特化し、様々な情報を発信しています。  
生成 AI を活用したチャットボットアプリの自社開発や導入支援に携わった経験があります。
さらに、生成 AI インフラに特化した社内チームのリーダーを務めていた経験もあります。

### プロジェクトマネジメント

プロジェクトマネージャーを務めることが多く、チームマネジメント及び顧客折衝の経験が豊富です。  
小規模チームで（3 - 5 人程度）でリーダーを務めたことが多数あります。  
プロジェクトを成功に導くため、メンバーのモチベーション管理や業務効率化にも力を入れています。

## 技術スキル

実業務で使用した技術のみ列挙します。

### AWS

\`IAM\` \`VPC\` \`ELB(ALB・NLB)\` \`EC2\` \`EFS\` \`RDS(MySQL・Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`Route 53\` \`ACM\` \`WAF\` \`ECS(Fargate)\` \`App Runner\` \`ECR\` \`API Gateway\` \`Lambda(Node.js・Python)\` \`DynamoDB\` \`Step Functions\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`SQS\` \`SNS\` \`Data Firehose\` \`EventBridge\` \`CloudWatch (Alarm・Logs)\` \`Security Hub\` \`GuardDuty\` \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`DevOps Guru\` \`Bedrock\` \`Kendra\`

### IaC

\`Terraform\` \`CloudFormation\` \`SAM\` \`CDK\`

### OS

\`Linux\` \`Windows\`

### Programming Language

\`Python\` \`JavaScript\` \`TypeScript\`

### SaaS

\`GitHub\` \`GitHub Actions\`

## 保有称号

### 表彰

|表彰名|対象年度|
|---|---|
|Japan AWS Top Engineer|2024|
|AWS Community Builder|2024|

### 資格

|資格名|取得日|
|---|---|
|AWS DOP|2023/6/15|
|AWS SOA|2023/2/15|
|AWS SAP|2022/8/3|
|AWS DVA|2022/3/24|
|AWS SAA|2021/11/11|
|AWS CLF|2021/7/21|
|LPIC-2|2021/6/28|
|ORACLE MASTER Silver Oracle Database 12c|2021/3/29|
|基本情報 技術者試験|2019/11/20|

## 経歴

### [クラスメソッド株式会社](https://classmethod.jp/)（2022/3 - 2025/6）

クラウドエンジニアとして、主に AWS アーキテクチャの設計/構築を担当しました。  
PJ に応じて、IaC(CloudFormation/Terraform/CDK)や Serverless(Lambda)を用いたコード開発も実施しています。  

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### AIチャットボット設計構築 （2024/9 - 2025/3)

**概要**

- 生成 AI を活用したチャットボットアプリを構築。

**担当**

- プリセールス
- 顧客折衝
- システム設計
- システム構築
- システム運用保守

**業務内容**

- 設計書作成
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`WAF\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### SaaSログ連携・保管コンテナシステム設計構築 （2024/9 - 2025/3)

**概要**

- SaaS から出力されるログを定期的に AWS にアップロードし、特定用途で使用するためのログ形式に加工するコンテナアプリケーションを構築。

**担当**

- プリセールス
- 顧客折衝
- アプリケーション設計
- アプリケーション構築
- アプリケーション運用保守

**業務内容**

- 設計書作成
- アプリケーションコード開発
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`VPC\` \`ECR\` \`ECS(Fargate)\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`EventBridge\` \`Step Functions\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\`

#### [AI-Starter](https://classmethod.jp/services/generative-ai/ai-starter/)内製開発（2024/1 - 2025/6)

**概要**

- 生成 AI を活用したチャットボットアプリの開発

**担当**

- チャットボットアプリ基盤設計
- チャットボットアプリ基盤開発

**業務内容**

- 設計書作成
- IaC コード開発
- デプロイ手順整備

**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### 社内生成AIインフラチーム活動（2024/1 - 2024/8)

**概要**

- 生成 AI 関連の案件に対応する体制作りのため、生成 AI に特化したインフラを専門に部署を跨いだ交流を促進する活動を実施

**担当**

- リーダー

**業務内容**

- 勉強会開催
- 案件対応推進
- 部署連携促進
- 検証環境整備

**使用技術**

- AWS サービス：\`Amazon Bedrock\` \`Amazon Kendra\` \`Amazon S3\` \`AWS App Runner\` \`Amazon DynamoDB\` \`AWS WAF\`

#### RAG システム設計構築 （2023/11 - 2024/3)

**概要**

- 生成 AI を活用したチャットボットアプリで使用する、社内ドキュメントを検索するための RAG システムを構築

**担当**

- RAG システム設計
- RAG システム構築
- RAG システム試験

**業務内容**

- 設計書作成
- IaC コード開発
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CloudFormation\`

#### [AWSマルチアカウント管理支援](https://classmethod.jp/aws/services/multi-account/)通知集約システム内製開発(2023/8 - 2024/2)

**概要**

- 複数の AWS アカウントに対する通知設定を一括で付与できる、通知集約システムを構築。

**担当**

- 通知集約システム基盤設計
- 通知集約システム基盤開発

**業務内容**

- IaC コード開発
- デプロイ手順整備

**使用技術**

- AWS サービス：\`Security Hub\` \`GuardDuty\` \`Step Functions\` \`EventBridge\`
- IaC： \`CDK(Typescript)\`

#### SaaSログ連携・保管サーバレスシステム設計構築（2023/5 - 2024/6)

**概要**

- SaaS から出力されるログを定期的に AWS にアップロードし、特定用途で使用するためのログ形式に加工するサーバレスアプリケーションを構築。

**担当**

- プリセールス
- 顧客折衝
- アプリケーション設計
- アプリケーション構築
- アプリケーション運用保守
- CICD システム設計
- CICD システム構築
- CICD システム運用保守

**業務内容**

- 設計書作成
- アプリケーションコード開発
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`EventBridge\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`DevOps Guru\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\` \`GitHub Actions\`

#### 認証システム用コンテナ基盤技術支援（2022/11 - 2023/6)

**概要**

- 顧客情報利用のための認証システムにおいて稼働が必要な、アプリケーションのコンテナ化に伴う技術支援を実施。

**担当**

- チームマネジメント（5 人）
- 顧客折衝
- コンテナ基盤設計
- コンテナ基盤構築
- コンテナ基盤試験
- CICD システム設計
- CICD システム構築
- CICD システム試験

**業務内容**

- 要件定義
- 設計書作成
- IaC コード開発
- 構築作業
- 動作確認試験
- 技術質問対応

**使用技術**

- AWS サービス： \`VPC\` \`ELB(ALB・NLB)\` \`ECS\` \`EFS\` \`RDS(Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`WAF\` \`ECS(Fargate)\` \`ECR\` \`API Gateway\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`EventBridge\`
- IaC： \`CloudFormation\`

#### 基幹システム用マルチアカウント基盤技術支援 (2022/7 - 2023/3)

**概要**

- 部門・プロジェクト単位での権限/環境の分離や、一元的に統一されたガバナンスの確保が必要な、社内システム用のマルチアカウント管理基盤の設計/構築に伴う技術支援を実施。

**担当**

- AWS 基盤設計/構築に伴う技術支援

**業務内容**

- 設計に必要な情報提供
- 構築に必要な動作検証
- IaC コード開発
- 技術質問対応

**使用技術**

- AWS サービス： \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`WAF\` \`Data Firehose\` \`CloudWatch (Logs)\`
- IaC： \`CloudFormation\`
- SaaS： \`GitHub\`

#### Webサイト用RDSインスタンスタイプ自動変更システム構築（2022/7 - 2022/8)

**概要**

- Web サイトリニューアルに伴い、RDS インスタンスタイプを定期的に自動変更するためのサーバレスアプリケーションを構築。

**担当**

- プリセールス
- 顧客折衝
- サーバレスアプリケーション設計
- サーバレスアプリケーション構築
- サーバレスアプリケーション試験

**業務内容**

- 設計書作成
- アプリケーションコード開発
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`EventBridge\` \`Lambda(Python)\` \`SNS\`

#### ECサイト用AWS環境構築（2022/6 - 2022/7)

**概要**

- 新規 EC サイトにおけるランディングページに必要な静的ウェブサイトホスティング基盤を構築。

**担当**

- チームマネジメント（3 人）
- 顧客折衝
- インフラ基盤設計
- 静的ウェブサイトホスティング基盤構築
- 静的ウェブサイトホスティング基盤試験

**業務内容**

- 要件定義
- 設計書作成
- IaC コード開発
- 構築作業
- 動作確認試験
- 技術質問対応

**使用技術**

- AWS サービス：\`IAM\` \`CloudFront\` \`S3\` \`Lambda(Node.js)\` \`Route 53\` \`ACM\`
- IaC： \`Terraform\`

#### CMSインフラ用AWS環境構築（2022/5 - 2022/8)

**概要**

- 動画サイト構築 CMS 新規導入のためのウェブサイト基盤を構築。

**担当**

- 顧客折衝
- ウェブサイト基盤設計
- ウェブサイト基盤構築

**業務内容**

- 設計書作成
- IaC コード開発
- 構築作業
- 動作確認試験

**使用技術**

- AWS サービス：\`IAM\` \`VPC\` \`ELB(ALB)\` \`EC2\` \`RDS(MySQL)\` \`ElastiCache(Redis)\` \`S3\` \`Route 53\` \`ACM\`
- IaC： \`Terraform\`

### [兼松エレクトロニクス株式会社](https://www.kel.co.jp/)（2019/4 - 2022/2)

インフラエンジニアとして、主にオンプレミスにおける Linux サーバの設計/構築を担当しました。  
またコンテナ技術（Docker/Kubernetes)の検証も実施しています。

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### 基幹システム用vSphere基盤更改（2021/10 - 2022/2)

**概要**

- 基幹システムで稼働している OS / ミドルウェア の EOL が切れるため、インフラ基盤の更改を実施

**担当**

- DB サーバ設計
- DB サーバ構築

**業務内容**

- 設計書作成
- 構築作業
- 動作確認試験

**使用技術**

- ミドルウェア：\`Oracle19c\`

#### 情報システム用vSphere基盤更改（2021/10 - 2021/12)

**概要**

- 会社で利用している情報システムの老朽化にともない、新システムのインフラ構築及び既存環境からのデータ移行を実施

**担当**

- OS / Web サーバ設計
- OS / Web サーバ構築

**業務内容**

- 設計書作成
- 構築作業
- 動作確認試験

**使用技術**

- OS：\`RHEL8\`
- ミドルウェア：\`Apache 2.4\`

#### 基幹システム用z/VM基盤更改（2021/6 - 2021/12)

**概要**

- 基幹システムで稼働している OS が EOL を迎えるため、システム全体のバージョンアップを実施

**担当**

- OS 設計
- OS 構築

**業務内容**

- 設計書作成
- 構築作業
- 動作確認試験

**使用技術**

- OS：\`SLES12 SP5\`

#### 基幹システム用VIOS基盤更改 (2021/1 - 2021/7)

**概要**

- 基幹システムで稼働している OS / ミドルウェア が EOL を迎えるため、インフラ基盤（H/W, S/W)の 更改を実施

**担当**

- AP サーバ設計
- AP サーバ構築

**業務内容**

- 設計書作成
- 構築作業
- 動作確認試験

**使用技術**

- ミドルウェア：\`WAS9.0.5\`

#### 社内コンテナ検証チーム活動 (2020/6 - 2022/1)

**概要**

- DX 推進に関連した新ビジネスを確立するべく、コンテナ技術の検証を実施。自身はコンテナ検証/環境構築を担当

**担当**

- コンテナ基盤 構築

**業務内容**

- 検証
- 構築作業

**使用技術**

- ミドルウェア： \`Docker\` \`Kubernetes\` \`Openshift\`

## 業務外活動

### 個人開発

以下では開発した自作リポジトリの内、主要なものを記載します。

|リポジトリ名|言語|概要|
|---|---|---|
|[dotfiles](https://github.com/tsukuboshi/dotfiles)|\`Bash\`|自身の PC セットアップ用の dotfiles|
|[sam-notify-aws-billing](https://github.com/tsukuboshi/sam-notify-aws-billing)|\`SAM\` \`Python\`|AWS 利用料金を通知するサーバレスシステムコード|
|[sam-ai-cloud-engineer](https://github.com/tsukuboshi/sam-ai-cloud-engineer)|\`SAM\` \`Python\`|Amazon Bedrock を活用し構成図を CloudFormation テンプレートとパラメータシートに変換するサーバレスシステムコード|
|[gas-count-schedule-time](https://github.com/tsukuboshi/gas-count-schedule-time)|\`Apps Script\` \`TypeScript\`|Googleカレンダーの予定から色ごとに工数をカウントし集計するアプリコード|
|[sam-bedrock-kendra-rag](https://github.com/tsukuboshi/sam-bedrock-kendra-rag)|\`SAM\` \`Python\`|Amazon Kendra と Amazon Bedrock を用いた RAG システムデプロイするためのコード|
|[sam-bedrock-kb-aurora-rag](https://github.com/tsukuboshi/sam-bedrock-kb-aurora-rag)|\`SAM\` \`Python\`|Amazon Aurora と Amazon Bedrock Knowledge Bases を用いた RAG システムデプロイするためのコード|
|[terraform-microservices-template](https://github.com/tsukuboshi/terraform-microservices-template)|\`Terraform\`|AWS を用いたマイクロサービス構成用 Terraform テンプレート|
|[cdk-microservices-bluegreendeployment-template](https://github.com/tsukuboshi/cdk-microservices-bluegreendeployment-template)|\`CDK\` \`TypeScript\`|AWS を用いた マイクロサービス構成用 CDK テンプレート|

### ブログ投稿

以下では投稿したブログの内、主要なものを記載します。  

#### DevelopersIO

2022/3から2025/6までに、100本以上の記事を作成していました。代表的な記事は以下の通りです。

- [AWS入門ブログリレー2024〜Amazon Bedrock編〜](https://dev.classmethod.jp/articles/introduction-2024-aws-bedrock/)
- [CloudFormation一撃で作るAWS料金通知ツール(Email/Slack/LINE対応)](https://dev.classmethod.jp/articles/notify-aws-billing-for-cloudformaiton/)
- [Knowledge Bases for Amazon Bedrock \\(with OpenSearch Serverless\\)をSAMで実装してみた](https://dev.classmethod.jp/articles/sam-knowledge-base-for-bedrock-with-oss/)
- [S3にアップロードしたAWS構成図をCloudFormationに変換するシステムを作ってみた](https://dev.classmethod.jp/articles/bedrock-claude-convert-diagram-to-cfn/)
- [Kendraのアクセスコントロール設定をEntra IDのOpen ID Connectを用いて有効化してみた](https://dev.classmethod.jp/articles/kendra-sharepoint-entraid-oidc/)
- [AWSの構成図をChatGPT\\(GPT\\-4V\\)に読み込ませてIaCコードを生成してみた](https://dev.classmethod.jp/articles/chatgpt-convert-aws-diagram-to-iac/)
- [ECSとCodePipelineのブルー/グリーンデプロイ構成をCDKで実装してみた](https://dev.classmethod.jp/articles/cdk-ecr-ecs-bluegreen-deployment/)
- [AuroraとRDSの違いを一覧表でまとめてみた](https://dev.classmethod.jp/articles/aurora-or-rds-by-table/)
- [FireLens\\(Fluent Bit\\)におけるログルーティングの仕組みについて調査してみた](https://dev.classmethod.jp/articles/ecs_firelens_tag/)
- [TerraformでCloudFront Functionsを環境ごとに有効化/無効化してみた](https://dev.classmethod.jp/articles/cloudfront-functions-per-env-terraform/)

#### Zenn

2023/5から現在まで投稿している主要のブログサイトになります。代表的な記事は以下の通りです。

- [Macの環境をdotfilesでセットアップしてみた改](https://zenn.dev/tsukuboshi/articles/6e82aef942d9af)
- [Google Calenderの予定をTypeScriptを用いて色別で工数集計してみた](https://zenn.dev/tsukuboshi/articles/31c95d863d8896)
- [GmailをTypeScriptとLINE Messaging APIを用いてLINEに自動転送してみた](https://zenn.dev/tsukuboshi/articles/gas-gmail-to-line)
- [MCP Serverを呼び出すAIエージェントをMastra、Next.js、AWS CDKで実装してみた](https://zenn.dev/tsukuboshi/articles/nextjs-mastra-mcp-with-aws)

#### Qiita

- [【備忘録】Kubernetesの仕組みを整理する \\#kubernetes \\- Qiita](https://qiita.com/kuraboshi/items/036ba1b5cf67cb8a6dcd)

### イベント登壇

以下では登壇したイベントの内、主要な資料及び動画を記載します。

#### [Amazon Bedrock GenUハンズオン #1](https://classmethod.connpass.com/event/346442/)：生成AI解説資料

**資料**

- [Amazon Bedrock GenUハンズオン座学資料 #1 GenU環境で生成AIを体験してみよう](https://www.docswell.com/slide/ZXE8GN/embed)

#### [Amazon Bedrock GenUハンズオン #2](https://classmethod.connpass.com/event/346443/)：RAG解説資料

**資料**

- [Amazon Bedrock GenUハンズオン座学資料 #2 GenU環境でRAGを体験してみよう](https://www.docswell.com/slide/5DNR34/embed)

#### [Classmethod AI Talks(CATs) 〜生成AI 新年LT大会〜](https://cats.doorkeeper.jp/events/180830)：AWSエンジニアに捧ぐLangChainの歩き方

**資料**

- [AWSエンジニアに捧ぐLangChainの歩き方 - Speaker Deck](https://speakerdeck.com/player/8c6afd2c50c34c189d72892eebf4c2ae)

**動画**

- [AWSエンジニアに捧ぐLangChainの歩き方 - YouTube](https://www.youtube.com/embed/AJKS7i67Sxg?si=sFiaMmE_17lAaWO8)

#### [JAWS FESTA 2024 in 広島](https://jawsfesta2024.jaws-ug.jp/)：Amplify Gen 2ではじめる 生成AIアプリ開発入門

**資料**

- [Amplify Gen 2ではじめる 生成AIアプリ開発入門 - Speaker Deck](https://speakerdeck.com/player/98e6569af2b24e4ebff41b46dc4d253a)

#### [Classmethod Odyssey](https://classmethod.connpass.com/event/322685/)：AWSで構築するパターン別RAG構成解説

**資料**

- [AWSで構築するパターン別RAG構成解説 - Speaker Deck](https://speakerdeck.com/player/2707682b444841d19d18771759abc78e)

**動画**

- [AWSで実現するRAG構成！Retrieverの種類と最適なインフラパターン解説 - YouTube](https://www.youtube.com/embed/QPhGs0iwBR8?si=_DFt38cwSZKl0bvf)

#### [Bedrock Claude Night 2](https://jawsug-ai.connpass.com/event/319748/)：AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた

**資料**

- [AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた](https://speakerdeck.com/player/1464a901f9fb4e2e89fda1fa85ab6471)

#### [JAWS-UG東京 ランチタイムLT会 #11](https://jawsug.connpass.com/event/316451/)：5分で分かる(かもしれない)Vector engine for OpenSearch Serverless

**資料**

- [5分で分かる(かもしれない)Vector engine for OpenSearch Serverless](https://speakerdeck.com/player/aaa0830e33354ea6a63b8322be7e08bf)

#### [JAWS-UG朝会 #55](https://jawsug-asa.connpass.com/event/301827/)：君はApplication Composerというサービスを知っているか

**資料**

- [君はApplication Composerというサービスを知っているか](https://speakerdeck.com/player/209b17ab0ec7448da834f4df887d0652)

#### [JAWS-UG CDK支部 #12](https://jawsug-cdk.connpass.com/event/307989/)：CDKをCloudFormationテンプレートとして利用する際の注意点n選

**資料**

- [CDKをCloudFormationテンプレートとして利用する際の注意点n選](https://speakerdeck.com/player/eb548fa38dd745969c32ccc138cced66)

#### [JAWS-UG朝会 #51](https://jawsug-asa.connpass.com/event/291917/)：インフラエンジニアのためのLambda実践入門

**資料**

- [インフラエンジニアのためのLambda実践入門](https://speakerdeck.com/player/f541cbd494e941558827ec87039ebfe4)

#### [DevelopersIO 2023](https://event.classmethod.jp/developers-io/2023)：AWSとGitHubを用いたパターン別CI/CD構成解説

**資料**

- [AWSとGitHubを用いたパターン別CI/CD構成解説](https://speakerdeck.com/player/13ed26fb607a41d598f64b0b899dd0da)

**動画**

- [AWS基盤でのCI/CD構成を徹底解説！CodeシリーズとGitHubの使い分けも解消 - YouTube](https://www.youtube.com/embed/nJ-eEgfbjG8?si=CiEVatkJa5fNdYqC)

#### [JAWS-UG朝会 #39](https://jawsug-asa.connpass.com/event/255874/)：(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる

- [(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる](https://speakerdeck.com/player/bac50c7f2ab44ab5a94c80f82883334b)

#### [JAWS-UG CLI専門支部 #273R](https://jawsug-cli.connpass.com/event/253108/)：LambdaとLine Messaging APIで湯婆婆botを作ってみた

**資料**

- [LambdaとLine Messaging APIで湯婆婆botを作ってみた](https://speakerdeck.com/player/9c9d25fecd894b9b845063e50662b5ea)

#### [DevelopersIO 2022](https://dev.classmethod.jp/news/devio-2022/)：AWS初心者に捧ぐコスト可視化のススメ

**資料**

- [AWS初心者に捧ぐコスト可視化のススメ](https://speakerdeck.com/player/6864a287e4074215b7f179716df7a0b4)

**動画**

- [AWS初心者に捧ぐコスト可視化のススメ - YouTube](https://www.youtube.com/embed/KWBxZIyDUJY?si=LkuNB641YEB0DF5M)

#### [AKIBA.AWS ONLINE #08](https://dev.classmethod.jp/news/akiba-aws-220523/)：それ、t2.micro選んで大丈夫？

**資料**

- [それ、t2.micro選んで大丈夫？](https://speakerdeck.com/player/d12345c2b1f94f7fb6626de0d7b81211)

#### [JAWS-UG CLI専門支部 #256M](https://jawsug-cli.connpass.com/event/243629/)：CLI専門支部に参加したらAWSエンジニアに転職できた件について

**資料**

- [CLI専門支部に参加したらAWSエンジニアに転職できた件について](https://speakerdeck.com/player/19623bacacf44d4d8567255085941c1b)

### その他

以下では特記するべき経歴について記載します。  

#### [Software Design 2024年11月号](https://gihyo.jp/magazine/SD/archive/2024/202411)寄稿

「第1特集 新世代の開発スタイル はじめてのAI駆動開発」における「第4章：Infrastructure as Codeで生成AIを活用するアーキテクチャ図⇔IaCコードの変換も自由自在」を担当

#### [JAWS-UG 茨城](https://jawsug-ibaraki.connpass.com/)運営

JAWS-UG茨城の初期メンバーとして2024/11からの立ち上げに貢献し、運営メンバーとして活動中
`;function Ms(){const e=As(Ns),n=(r=>{const s=[];let o=null,a=[];return r.forEach(i=>{!i.title&&i.level===0?s.push({type:"intro",section:i}):i.level===1||i.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i})):i.level===3?(o&&s.push({type:"h3-group",section:o,subsections:a}),o=i,a=[]):i.level===4&&o?a.push(i):(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i}))}),o&&s.push({type:"h3-group",section:o,subsections:a}),s})(e);return v("div",{className:"min-h-screen bg-gray-50",children:v("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[v("header",{className:"text-center mb-12",children:v("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"})}),v("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return v("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${De(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return v(Ls,{section:r.section,subsections:r.subsections},r.section.id);{const o=De(r.section.content);return v(Ds,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),v("footer",{className:"text-center mt-12 text-gray-500",children:v("p",{children:"Built with HonoX on Cloudflare Workers"})})]})})}const Ws=!0,Fs=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:Ws,default:Ms},Symbol.toStringTag,{value:"Module"}));var un=(e,t,n)=>(r,s)=>{let o=-1;return a(0);async function a(i){if(i<=o)throw new Error("next() called multiple times");o=i;let l,c=!1,f;if(e[i]?(f=e[i][0][0],r.req.routeIndex=i):f=i===e.length&&s||void 0,f)try{l=await f(r,()=>a(i+1))}catch(h){if(h instanceof Error&&t)r.error=h,l=await t(h,r),c=!0;else throw h}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},Bs=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof er?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?Hs(e,{all:n,dot:r}):{}};async function Hs(e,t){const n=await e.formData();return n?Gs(n,t):{}}function Gs(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?zs(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(Us(n,r,s),delete n[r])}),n}var zs=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n},Us=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,a)=>{a===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Jn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ks=e=>{const{groups:t,path:n}=qs(e),r=Jn(n);return Js(r,t)},qs=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},Js=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},tt={},fn=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return tt[r]||(n[2]?tt[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:tt[r]=[e,n[1],!0]),tt[r]}return null},Vn=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},Vs=e=>Vn(e,decodeURI),Zn=e=>{const t=e.url,n=t.indexOf("/",8);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),a=t.slice(n,o===-1?void 0:o);return Vs(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(s===63)break}return t.slice(n,r)},Zs=e=>{const t=Zn(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ke=(e,t,...n)=>(n.length&&(t=ke(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Xn=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,a)=>a.indexOf(s)===o)},Rt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Yn(e):e):e,Qn=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let a=e.indexOf(`?${t}`,8);for(a===-1&&(a=e.indexOf(`&${t}`,8));a!==-1;){const i=e.charCodeAt(a+t.length+1);if(i===61){const l=a+t.length+2,c=e.indexOf("&",l);return Rt(e.slice(l,c===-1?void 0:c))}else if(i==38||isNaN(i))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let i=e.indexOf("=",o);i>a&&a!==-1&&(i=-1);let l=e.slice(o+1,i===-1?a===-1?void 0:a:i);if(r&&(l=Rt(l)),o=a,l==="")continue;let c;i===-1?c="":(c=e.slice(i+1,a===-1?void 0:a),r&&(c=Rt(c))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(c)):s[l]??(s[l]=c)}return t?s[t]:s},Xs=Qn,Qs=(e,t)=>Qn(e,t,!0),Yn=decodeURIComponent,hn=e=>Vn(e,Yn),Re,H,ne,tr,nr,Mt,oe,vn,er=(vn=class{constructor(e,t="/",n=[[]]){C(this,ne);w(this,"raw");C(this,Re);C(this,H);w(this,"routeIndex",0);w(this,"path");w(this,"bodyCache",{});C(this,oe,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,g(this,H,n),g(this,Re,{})}param(e){return e?k(this,ne,tr).call(this,e):k(this,ne,nr).call(this)}query(e){return Xs(this.url,e)}queries(e){return Qs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Bs(this,e))}json(){return u(this,oe).call(this,"json")}text(){return u(this,oe).call(this,"text")}arrayBuffer(){return u(this,oe).call(this,"arrayBuffer")}blob(){return u(this,oe).call(this,"blob")}formData(){return u(this,oe).call(this,"formData")}addValidatedData(e,t){u(this,Re)[e]=t}valid(e){return u(this,Re)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return u(this,H)[0].map(([[,e]])=>e)}get routePath(){return u(this,H)[0].map(([[,e]])=>e)[this.routeIndex].path}},Re=new WeakMap,H=new WeakMap,ne=new WeakSet,tr=function(e){const t=u(this,H)[0][this.routeIndex][1][e],n=k(this,ne,Mt).call(this,t);return n?/\%/.test(n)?hn(n):n:void 0},nr=function(){const e={},t=Object.keys(u(this,H)[0][this.routeIndex][1]);for(const n of t){const r=k(this,ne,Mt).call(this,u(this,H)[0][this.routeIndex][1][n]);r&&typeof r=="string"&&(e[n]=/\%/.test(r)?hn(r):r)}return e},Mt=function(e){return u(this,H)[1]?u(this,H)[1][e]:e},oe=new WeakMap,vn),Ys="text/plain; charset=UTF-8",Ot=(e,t={})=>{for(const n of Object.keys(t))e.set(n,t[n]);return e},ze,Ue,X,ve,Q,P,I,M,Y,Ke,Oe,je,qe,Je,N,F,bn,eo=(bn=class{constructor(e,t){C(this,N);C(this,ze);C(this,Ue);w(this,"env",{});C(this,X);w(this,"finalized",!1);w(this,"error");C(this,ve,200);C(this,Q);C(this,P);C(this,I);C(this,M);C(this,Y,!0);C(this,Ke);C(this,Oe);C(this,je);C(this,qe);C(this,Je);w(this,"render",(...e)=>(u(this,Oe)??g(this,Oe,t=>this.html(t)),u(this,Oe).call(this,...e)));w(this,"setLayout",e=>g(this,Ke,e));w(this,"getLayout",()=>u(this,Ke));w(this,"setRenderer",e=>{g(this,Oe,e)});w(this,"header",(e,t,n)=>{if(this.finalized&&g(this,M,new Response(u(this,M).body,u(this,M))),t===void 0){u(this,P)?u(this,P).delete(e):u(this,I)&&delete u(this,I)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}n!=null&&n.append?(u(this,P)||(g(this,Y,!1),g(this,P,new Headers(u(this,I))),g(this,I,{})),u(this,P).append(e,t)):u(this,P)?u(this,P).set(e,t):(u(this,I)??g(this,I,{}),u(this,I)[e.toLowerCase()]=t),this.finalized&&(n!=null&&n.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});w(this,"status",e=>{g(this,Y,!1),g(this,ve,e)});w(this,"set",(e,t)=>{u(this,X)??g(this,X,new Map),u(this,X).set(e,t)});w(this,"get",e=>u(this,X)?u(this,X).get(e):void 0);w(this,"newResponse",(...e)=>k(this,N,F).call(this,...e));w(this,"body",(e,t,n)=>typeof t=="number"?k(this,N,F).call(this,e,t,n):k(this,N,F).call(this,e,t));w(this,"text",(e,t,n)=>{if(!u(this,I)){if(u(this,Y)&&!n&&!t)return new Response(e);g(this,I,{})}return u(this,I)["content-type"]=Ys,typeof t=="number"?k(this,N,F).call(this,e,t,n):k(this,N,F).call(this,e,t)});w(this,"json",(e,t,n)=>{const r=JSON.stringify(e);return u(this,I)??g(this,I,{}),u(this,I)["content-type"]="application/json",typeof t=="number"?k(this,N,F).call(this,r,t,n):k(this,N,F).call(this,r,t)});w(this,"html",(e,t,n)=>(u(this,I)??g(this,I,{}),u(this,I)["content-type"]="text/html; charset=UTF-8",typeof e=="object"?In(e,On.Stringify,!1,{}).then(r=>typeof t=="number"?k(this,N,F).call(this,r,t,n):k(this,N,F).call(this,r,t)):typeof t=="number"?k(this,N,F).call(this,e,t,n):k(this,N,F).call(this,e,t)));w(this,"redirect",(e,t)=>(u(this,P)??g(this,P,new Headers),u(this,P).set("Location",String(e)),this.newResponse(null,t??302)));w(this,"notFound",()=>(u(this,je)??g(this,je,()=>new Response),u(this,je).call(this,this)));g(this,ze,e),t&&(g(this,Q,t.executionCtx),this.env=t.env,g(this,je,t.notFoundHandler),g(this,Je,t.path),g(this,qe,t.matchResult))}get req(){return u(this,Ue)??g(this,Ue,new er(u(this,ze),u(this,Je),u(this,qe))),u(this,Ue)}get event(){if(u(this,Q)&&"respondWith"in u(this,Q))return u(this,Q);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,Q))return u(this,Q);throw Error("This context has no ExecutionContext")}get res(){return g(this,Y,!1),u(this,M)||g(this,M,new Response("404 Not Found",{status:404}))}set res(e){if(g(this,Y,!1),u(this,M)&&e){e=new Response(e.body,e);for(const[t,n]of u(this,M).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=u(this,M).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}g(this,M,e),this.finalized=!0}get var(){return u(this,X)?Object.fromEntries(u(this,X)):{}}},ze=new WeakMap,Ue=new WeakMap,X=new WeakMap,ve=new WeakMap,Q=new WeakMap,P=new WeakMap,I=new WeakMap,M=new WeakMap,Y=new WeakMap,Ke=new WeakMap,Oe=new WeakMap,je=new WeakMap,qe=new WeakMap,Je=new WeakMap,N=new WeakSet,F=function(e,t,n){if(u(this,Y)&&!n&&!t&&u(this,ve)===200)return new Response(e,{headers:u(this,I)});if(t&&typeof t!="number"){const s=new Headers(t.headers);u(this,P)&&u(this,P).forEach((a,i)=>{i==="set-cookie"?s.append(i,a):s.set(i,a)});const o=Ot(s,u(this,I));return new Response(e,{headers:o,status:t.status??u(this,ve)})}const r=typeof t=="number"?t:u(this,ve);u(this,I)??g(this,I,{}),u(this,P)??g(this,P,new Headers),Ot(u(this,P),u(this,I)),u(this,M)&&(u(this,M).headers.forEach((s,o)=>{var a,i;o==="set-cookie"?(a=u(this,P))==null||a.append(o,s):(i=u(this,P))==null||i.set(o,s)}),Ot(u(this,P),u(this,I))),n??(n={});for(const[s,o]of Object.entries(n))if(typeof o=="string")u(this,P).set(s,o);else{u(this,P).delete(s);for(const a of o)u(this,P).append(s,a)}return new Response(e,{status:r,headers:u(this,P)})},bn),_="ALL",to="all",no=["get","post","put","delete","options","patch"],rr="Can not add a route since the matcher is already built.",sr=class extends Error{},ro=e=>e.text("404 Not Found",404),dn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},G,T,ar,z,me,it,lt,yn,or=(yn=class{constructor(t={}){C(this,T);w(this,"get");w(this,"post");w(this,"put");w(this,"delete");w(this,"options");w(this,"patch");w(this,"all");w(this,"on");w(this,"use");w(this,"router");w(this,"getPath");w(this,"_basePath","/");C(this,G,"/");w(this,"routes",[]);C(this,z,ro);w(this,"errorHandler",dn);w(this,"onError",t=>(this.errorHandler=t,this));w(this,"notFound",t=>(g(this,z,t),this));w(this,"fetch",(t,...n)=>k(this,T,lt).call(this,t,n[1],n[0],t.method));w(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ke("/",t)}`,n),r,s)));w(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,T,lt).call(this,t.request,t,void 0,t.request.method))})});[...no,to].forEach(o=>{this[o]=(a,...i)=>(typeof a=="string"?g(this,G,a):k(this,T,me).call(this,o,u(this,G),a),i.forEach(l=>{k(this,T,me).call(this,o,u(this,G),l)}),this)}),this.on=(o,a,...i)=>{for(const l of[a].flat()){g(this,G,l);for(const c of[o].flat())i.map(f=>{k(this,T,me).call(this,c.toUpperCase(),u(this,G),f)})}return this},this.use=(o,...a)=>(typeof o=="string"?g(this,G,o):(g(this,G,"*"),a.unshift(o)),a.forEach(i=>{k(this,T,me).call(this,_,u(this,G),i)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??Zn:Zs}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var a;let o;n.errorHandler===dn?o=s.handler:(o=async(i,l)=>(await un([],n.errorHandler)(i,()=>s.handler(i,l))).res,o[Pt]=s.handler),k(a=r,T,me).call(a,s.method,s.path,o)}),this}basePath(t){const n=k(this,T,ar).call(this);return n._basePath=ke(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const a=o?l=>{const c=o(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};s||(s=(()=>{const l=ke(this._basePath,t),c=l==="/"?0:l.length;return f=>{const h=new URL(f.url);return h.pathname=h.pathname.slice(c)||"/",new Request(h,f)}})());const i=async(l,c)=>{const f=await n(s(l.req.raw),...a(l));if(f)return f;await c()};return k(this,T,me).call(this,_,ke(t,"*"),i),this}},G=new WeakMap,T=new WeakSet,ar=function(){const t=new or({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,g(t,z,u(this,z)),t.routes=this.routes,t},z=new WeakMap,me=function(t,n,r){t=t.toUpperCase(),n=ke(this._basePath,n);const s={path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},it=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},lt=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,T,lt).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(s,o),i=new eo(t,{path:o,matchResult:a,env:r,executionCtx:n,notFoundHandler:u(this,z)});if(a[0].length===1){let c;try{c=a[0][0][0][0](i,async()=>{i.res=await u(this,z).call(this,i)})}catch(f){return k(this,T,it).call(this,f,i)}return c instanceof Promise?c.then(f=>f||(i.finalized?i.res:u(this,z).call(this,i))).catch(f=>k(this,T,it).call(this,f,i)):c??u(this,z).call(this,i)}const l=un(a[0],this.errorHandler,u(this,z));return(async()=>{try{const c=await l(i);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return k(this,T,it).call(this,c,i)}})()},yn),pt="[^/]+",Fe=".*",Be="(?:|/.*)",Me=Symbol(),so=new Set(".\\+*[^]$()");function oo(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Fe||e===Be?1:t===Fe||t===Be?-1:e===pt?1:t===pt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var be,ye,U,Sn,Wt=(Sn=class{constructor(){C(this,be);C(this,ye);C(this,U,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(u(this,be)!==void 0)throw Me;if(o)return;g(this,be,n);return}const[a,...i]=t,l=a==="*"?i.length===0?["","",Fe]:["","",pt]:a==="/*"?["","",Be]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const f=l[1];let h=l[2]||pt;if(f&&l[2]&&(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h)))throw Me;if(c=u(this,U)[h],!c){if(Object.keys(u(this,U)).some(d=>d!==Fe&&d!==Be))throw Me;if(o)return;c=u(this,U)[h]=new Wt,f!==""&&g(c,ye,s.varIndex++)}!o&&f!==""&&r.push([f,u(c,ye)])}else if(c=u(this,U)[a],!c){if(Object.keys(u(this,U)).some(f=>f.length>1&&f!==Fe&&f!==Be))throw Me;if(o)return;c=u(this,U)[a]=new Wt}c.insert(i,n,r,s,o)}buildRegExpStr(){const n=Object.keys(u(this,U)).sort(oo).map(r=>{const s=u(this,U)[r];return(typeof u(s,ye)=="number"?`(${r})@${u(s,ye)}`:so.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof u(this,be)=="number"&&n.unshift(`#${u(this,be)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},be=new WeakMap,ye=new WeakMap,U=new WeakMap,Sn),mt,Ve,wn,ao=(wn=class{constructor(){C(this,mt,{varIndex:0});C(this,Ve,new Wt)}insert(e,t,n){const r=[],s=[];for(let a=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return s[a]=[c,l],a++,i=!0,c}),!i)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(i)!==-1){o[l]=o[l].replace(i,s[a][1]);break}}return u(this,Ve).insert(o,t,r,u(this,mt),n),r}buildRegExp(){let e=u(this,Ve).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,a)=>o!==void 0?(n[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),n,r]}},mt=new WeakMap,Ve=new WeakMap,wn),ir=[],io=[/^$/,[],Object.create(null)],ct=Object.create(null);function lr(e){return ct[e]??(ct[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function lo(){ct=Object.create(null)}function co(e){var c;const t=new ao,n=[];if(e.length===0)return io;const r=e.map(f=>[!/\*|\/:/.test(f[0]),...f]).sort(([f,h],[d,m])=>f?1:d?-1:h.length-m.length),s=Object.create(null);for(let f=0,h=-1,d=r.length;f<d;f++){const[m,b,p]=r[f];m?s[b]=[p.map(([S])=>[S,Object.create(null)]),ir]:h++;let y;try{y=t.insert(b,h,m)}catch(S){throw S===Me?new sr(b):S}m||(n[h]=p.map(([S,A])=>{const E=Object.create(null);for(A-=1;A>=0;A--){const[x,R]=y[A];E[x]=R}return[S,E]}))}const[o,a,i]=t.buildRegExp();for(let f=0,h=n.length;f<h;f++)for(let d=0,m=n[f].length;d<m;d++){const b=(c=n[f][d])==null?void 0:c[1];if(!b)continue;const p=Object.keys(b);for(let y=0,S=p.length;y<S;y++)b[p[y]]=i[b[p[y]]]}const l=[];for(const f in a)l[f]=n[a[f]];return[o,l,s]}function Ce(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(lr(n).test(t))return[...e[n]]}}var ae,ie,$e,cr,ur,An,uo=(An=class{constructor(){C(this,$e);w(this,"name","RegExpRouter");C(this,ae);C(this,ie);g(this,ae,{[_]:Object.create(null)}),g(this,ie,{[_]:Object.create(null)})}add(e,t,n){var i;const r=u(this,ae),s=u(this,ie);if(!r||!s)throw new Error(rr);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[_]).forEach(c=>{l[e][c]=[...l[_][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=lr(t);e===_?Object.keys(r).forEach(c=>{var f;(f=r[c])[t]||(f[t]=Ce(r[c],t)||Ce(r[_],t)||[])}):(i=r[e])[t]||(i[t]=Ce(r[e],t)||Ce(r[_],t)||[]),Object.keys(r).forEach(c=>{(e===_||e===c)&&Object.keys(r[c]).forEach(f=>{l.test(f)&&r[c][f].push([n,o])})}),Object.keys(s).forEach(c=>{(e===_||e===c)&&Object.keys(s[c]).forEach(f=>l.test(f)&&s[c][f].push([n,o]))});return}const a=Xn(t)||[t];for(let l=0,c=a.length;l<c;l++){const f=a[l];Object.keys(s).forEach(h=>{var d;(e===_||e===h)&&((d=s[h])[f]||(d[f]=[...Ce(r[h],f)||Ce(r[_],f)||[]]),s[h][f].push([n,o-c+l+1]))})}}match(e,t){lo();const n=k(this,$e,cr).call(this);return this.match=(r,s)=>{const o=n[r]||n[_],a=o[2][s];if(a)return a;const i=s.match(o[0]);if(!i)return[[],ir];const l=i.indexOf("",1);return[o[1][l],i]},this.match(e,t)}},ae=new WeakMap,ie=new WeakMap,$e=new WeakSet,cr=function(){const e=Object.create(null);return Object.keys(u(this,ie)).concat(Object.keys(u(this,ae))).forEach(t=>{e[t]||(e[t]=k(this,$e,ur).call(this,t))}),g(this,ae,g(this,ie,void 0)),e},ur=function(e){const t=[];let n=e===_;return[u(this,ae),u(this,ie)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==_&&t.push(...Object.keys(r[_]).map(o=>[o,r[_][o]]))}),n?co(t):null},An),le,ee,En,fo=(En=class{constructor(e){w(this,"name","SmartRouter");C(this,le,[]);C(this,ee,[]);g(this,le,e.routers)}add(e,t,n){if(!u(this,ee))throw new Error(rr);u(this,ee).push([e,t,n])}match(e,t){if(!u(this,ee))throw new Error("Fatal error");const n=u(this,le),r=u(this,ee),s=n.length;let o=0,a;for(;o<s;o++){const i=n[o];try{for(let l=0,c=r.length;l<c;l++)i.add(...r[l]);a=i.match(e,t)}catch(l){if(l instanceof sr)continue;throw l}this.match=i.match.bind(i),g(this,le,[i]),g(this,ee,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(u(this,ee)||u(this,le).length!==1)throw new Error("No active router has been determined yet.");return u(this,le)[0]}},le=new WeakMap,ee=new WeakMap,En),Le=Object.create(null),ce,L,Se,Pe,$,te,ge,Cn,fr=(Cn=class{constructor(e,t,n){C(this,te);C(this,ce);C(this,L);C(this,Se);C(this,Pe,0);C(this,$,Le);if(g(this,L,n||Object.create(null)),g(this,ce,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},g(this,ce,[r])}g(this,Se,[])}insert(e,t,n){g(this,Pe,++Vt(this,Pe)._);let r=this;const s=Ks(t),o=[];for(let l=0,c=s.length;l<c;l++){const f=s[l],h=s[l+1],d=fn(f,h),m=Array.isArray(d)?d[0]:f;if(Object.keys(u(r,L)).includes(m)){r=u(r,L)[m];const b=fn(f,h);b&&o.push(b[1]);continue}u(r,L)[m]=new fr,d&&(u(r,Se).push(d),o.push(d[1])),r=u(r,L)[m]}const a=Object.create(null),i={handler:n,possibleKeys:o.filter((l,c,f)=>f.indexOf(l)===c),score:u(this,Pe)};return a[e]=i,u(r,ce).push(a),r}search(e,t){var i;const n=[];g(this,$,Le);let s=[this];const o=Jn(t),a=[];for(let l=0,c=o.length;l<c;l++){const f=o[l],h=l===c-1,d=[];for(let m=0,b=s.length;m<b;m++){const p=s[m],y=u(p,L)[f];y&&(g(y,$,u(p,$)),h?(u(y,L)["*"]&&n.push(...k(this,te,ge).call(this,u(y,L)["*"],e,u(p,$))),n.push(...k(this,te,ge).call(this,y,e,u(p,$)))):d.push(y));for(let S=0,A=u(p,Se).length;S<A;S++){const E=u(p,Se)[S],x=u(p,$)===Le?{}:{...u(p,$)};if(E==="*"){const j=u(p,L)["*"];j&&(n.push(...k(this,te,ge).call(this,j,e,u(p,$))),g(j,$,x),d.push(j));continue}if(f==="")continue;const[R,q,J]=E,W=u(p,L)[R],vt=o.slice(l).join("/");if(J instanceof RegExp){const j=J.exec(vt);if(j){if(x[q]=j[0],n.push(...k(this,te,ge).call(this,W,e,u(p,$),x)),Object.keys(u(W,L)).length){g(W,$,x);const D=((i=j[0].match(/\//))==null?void 0:i.length)??0;(a[D]||(a[D]=[])).push(W)}continue}}(J===!0||J.test(f))&&(x[q]=f,h?(n.push(...k(this,te,ge).call(this,W,e,x,u(p,$))),u(W,L)["*"]&&n.push(...k(this,te,ge).call(this,u(W,L)["*"],e,x,u(p,$)))):(g(W,$,x),d.push(W)))}}s=d.concat(a.shift()??[])}return n.length>1&&n.sort((l,c)=>l.score-c.score),[n.map(({handler:l,params:c})=>[l,c])]}},ce=new WeakMap,L=new WeakMap,Se=new WeakMap,Pe=new WeakMap,$=new WeakMap,te=new WeakSet,ge=function(e,t,n,r){const s=[];for(let o=0,a=u(e,ce).length;o<a;o++){const i=u(e,ce)[o],l=i[t]||i[_],c={};if(l!==void 0&&(l.params=Object.create(null),s.push(l),n!==Le||r&&r!==Le))for(let f=0,h=l.possibleKeys.length;f<h;f++){const d=l.possibleKeys[f],m=c[l.score];l.params[d]=r!=null&&r[d]&&!m?r[d]:n[d]??(r==null?void 0:r[d]),c[l.score]=!0}}return s},Cn),we,xn,ho=(xn=class{constructor(){w(this,"name","TrieRouter");C(this,we);g(this,we,new fr)}add(e,t,n){const r=Xn(t);if(r){for(let s=0,o=r.length;s<o;s++)u(this,we).insert(e,r[s],n);return}u(this,we).insert(e,t,n)}match(e,t){return u(this,we).search(e,t)}},we=new WeakMap,xn),ut=class extends or{constructor(e={}){super(e),this.router=e.router??new fo({routers:[new uo,new ho]})}},po=e=>e;const hr=new Er,pn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),jt=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),a=s.join("/");t[a]||(t[a]={}),o&&(t[a][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[a])=>o[0]==="["&&a[0]!=="["?1:o[0]!=="["&&a[0]==="["?-1:o.localeCompare(a));t[n]=Object.fromEntries(s)}return t},mo=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),go=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},dr="_404.tsx",vo="_error.tsx",bo=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],yo=e=>{const t=e.root,n=new RegExp(`^${t}`),r=y=>pn(y.replace(n,"")),s=new ut;s.use(async function(S,A){await hr.run(S,()=>A())});const o=e.NOT_FOUND,a=jt(o),i=e.ERROR,l=jt(i),c=e.RENDERER,f=go(c),h=e.MIDDLEWARE,d=e.ROUTES,m=mo(jt(d)),b=(y,S)=>{let A=S[y]??[];const E=R=>(A=S[R.join("/")],A||(R.pop(),R.length&&E(R)),A??[]),x=y.split("/");return A=E(x),A.sort((R,q)=>R.split("/").length-q.split("/").length),A},p={};for(const y of m)for(const[S,A]of Object.entries(y)){const E=new ut;let x=!1;const R=So(S,a);R&&E.use(async(j,D)=>{if(await D(),j.res.status===404){const he=await R(j),V=new Response(he.body,{status:404,headers:he.headers});j.res=V}}),b(S,f).map(j=>{const D=c[j];D[fe]&&(x=!0);const V=D.default;V&&E.all("*",V)});const J=Object.keys(h).find(j=>{const D=S.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(D+"/_middleware.tsx?").test(j)});if(J){const j=h[J];j.default&&E.use(...j.default)}for(const[j,D]of Object.entries(A)){const he=D[fe],V=po(async function(se,Sr){se.set(fe,he?!0:x),await Sr()}),re=D.default,de=pn(j);re&&"fetch"in re&&(E.use(V),E.route(de,re));for(const pe of bo){const se=D[pe];se&&(E.on(pe,de,V),E.on(pe,de,...se))}re&&Array.isArray(re)&&(E.get(de,V),E.get(de,...re)),typeof re=="function"&&(E.get(de,V),E.get(de,async pe=>{const se=await re(pe);return se instanceof Response?se:pe.render(se,D)}))}const W=Ao(S,l);W&&(p[S]=W);for(const[j,D]of Object.entries(p))new RegExp(`^${j}`).test(S)&&D&&E.onError(D);let vt=r(S);s.route(vt,E)}for(const y of m.reverse()){const S=Object.entries(y)[0][0],A=new ut;wo(A,S,a);const E=r(S);s.route(E,A)}return s};function So(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[dr];if(s)return s.default}}function wo(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[dr];if(o){const a=o.default;o[fe]&&e.use("*",(l,c)=>(l.set(fe,!0),c())),e.get("*",l=>(l.status(404),a(l)))}}}function Ao(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[vo];if(s){const o=s.default;if(o)return async(i,l)=>{const c=s[fe];return c&&l.set(fe,c),l.status(500),o(i,l)}}}}const Eo=e=>yo({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":jr}),ERROR:Object.assign({"/app/routes/_error.tsx":Ir}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":ws}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":Fs})}),Co=({children:e})=>{const t=hr.getStore();if(!t)throw new Error("No context found");return v(gt,{children:t.get(fe)&&e})},xo={"_markdown-simple-Dh92syBv.js":{file:"static/markdown-simple-Dh92syBv.js",name:"markdown-simple",imports:["app/client.ts"]},"app/client.ts":{file:"static/client-CGmGXK1t.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/SectionWithBulkToggle.tsx","app/islands/ToggleSection.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/SectionWithBulkToggle.tsx":{file:"static/SectionWithBulkToggle-BJmd3Ghe.js",name:"SectionWithBulkToggle",src:"app/islands/SectionWithBulkToggle.tsx",isDynamicEntry:!0,imports:["app/client.ts","_markdown-simple-Dh92syBv.js"]},"app/islands/ToggleSection.tsx":{file:"static/ToggleSection-BYaXoRJS.js",name:"ToggleSection",src:"app/islands/ToggleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_markdown-simple-Dh92syBv.js"]},"app/style.css":{file:"static/style-D61bCfX-.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-CJB_lj2U.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},pr=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),mr=e=>e.endsWith("/")?e:e+"/",ko=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":pr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return v(Co,{children:v("script",{type:"module",async:!!e.async,src:`${mr("/honox-resume/")}${r.file}`,nonce:e.nonce})})}return v(gt,{})}else return v("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},mn=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":pr});for(const[,a]of Object.entries(o))if(a.default){r=a.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?v("link",{href:`${mr("/honox-resume/")}${o.file}`,...s}):v("link",{href:o.file,...s})}return v(gt,{})}else return v("link",{href:t,...s});return v("link",{...s})},gr=Eo();Rr(gr);const Ft=new ut,vr=Object.assign({"/app/server.ts":gr});let br=!1;for(const[,e]of Object.entries(vr))e&&(Ft.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ft.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),br=!0);if(!br)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const yr={},gn=new Set;for(const[e,t]of Object.entries(vr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(gn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);gn.add(n),yr[n]=r}const Io={...yr,fetch:Ft.fetch};export{Io as default};
