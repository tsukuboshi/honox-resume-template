var Sr=Object.defineProperty;var Jt=e=>{throw TypeError(e)};var wr=(e,t,n)=>t in e?Sr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>wr(e,typeof t!="symbol"?t+"":t,n),bt=(e,t,n)=>t.has(e)||Jt("Cannot "+n);var u=(e,t,n)=>(bt(e,t,"read from private field"),n?n.call(e):t.get(e)),C=(e,t,n)=>t.has(e)?Jt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),v=(e,t,n,r)=>(bt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),k=(e,t,n)=>(bt(e,t,"access private method"),n);var Qt=(e,t,n,r)=>({set _(s){v(e,t,s,n)},get _(){return u(e,t,r)}});import{AsyncLocalStorage as Ar}from"node:async_hooks";function xr(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Pt="__COMPOSED_HANDLER",kn=e=>e.length>1,Rn=e=>e[Pt]?Rn(e[Pt]):e,Cr=e=>e.name||(kn(e)?"[middleware]":"[handler]"),Er=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=Rn(r);return{path:t,method:n,name:Cr(s),isMiddleware:kn(s)}}),kr=(e,t)=>{const n=xr(),r={};let s=0,o=0;Er(e).filter(({isMiddleware:a})=>!a).map(a=>{const i=`${a.method}-${a.path}`;if((r[i]||(r[i]=[])).push(a),!(r[i].length>1))return s=Math.max(s,a.method.length),o=Math.max(o,a.path.length),{method:a.method,path:a.path,routes:r[i]}}).forEach(a=>{if(!a)return;const{method:i,path:l,routes:c}=a,d=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${d} ${" ".repeat(s-i.length)} ${l}`)})};const Rr=e=>(e.status(404),e.render("404 Not Found")),Or=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),jr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Pr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"}));var On={Stringify:1},H=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Ir=/[&<>'"]/,jn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const a=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??a)n+=o;else{const i=[n];de(o,i),n=i[0]}}return H(n,t)},de=(e,t)=>{const n=e.search(Ir);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Pn=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:On.Stringify,buffer:n,context:r})),n[0]},In=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(i=>i({phase:t,buffer:s,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>In(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},Dr=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let a=0,i=o.length;a<i;a++){const l=o[a];if(typeof l=="string")de(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const c=l.toString();c instanceof Promise?n.unshift("",c):n[0]+=c}else l instanceof Promise?n.unshift("",l):de(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?H(Pn(H(n[0],n.callbacks))):H(n[0]):jn(n,n.callbacks)},Ht=Symbol("RENDERER"),It=Symbol("ERROR_HANDLER"),O=Symbol("STASH"),Dn=Symbol("INTERNAL"),_r=Symbol("MEMO"),ft=Symbol("PERMALINK"),Zt=e=>(e[Dn]=!0,e),_n=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Zt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Zt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[It]=o=>{throw e.pop(),o},s},Nn=e=>{const t=[e],n=_n(t);return n.values=t,n.Provider=n,De.push(n),n},De=[],Bt=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Mn("",{},r.children):r.children).toString():""}finally{t.pop()}return s instanceof Promise?s.then(o=>H(o,o.callbacks)):H(s)};return n.values=t,n.Provider=n,n[Ht]=_n(t),De.push(n),n},xe=e=>e.values.at(-1),st={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Dt={},ot="data-precedence",Xe=e=>Array.isArray(e)?e:[e],Xt=new WeakMap,Yt=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const a=Xt.get(o)||{};Xt.set(o,a);const i=a[e]||(a[e]=[]);let l=!1;const c=st[e];if(c.length>0){e:for(const[,d]of i)for(const h of c)if(((d==null?void 0:d[h])??null)===(n==null?void 0:n[h])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):c.length>0?i.push([t,n,r]):i.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let d;if(r===void 0)d=i.map(([h])=>h);else{const h=[];d=i.map(([f,,g])=>{let b=h.indexOf(g);return b===-1&&(h.push(g),b=h.length-1),[f,b]}).sort((f,g)=>f[1]-g[1]).map(([f])=>f)}d.forEach(h=>{s[0]=s[0].replaceAll(h,"")}),s[0]=s[0].replace(/(?=<\/head>)/,d.join(""))}},Ye=(e,t,n)=>H(new K(e,n,Xe(t??[])).toString()),et=(e,t,n,r)=>{if("itemProp"in n)return Ye(e,t,n);let{precedence:s,blocking:o,...a}=n;s=r?s??"":void 0,r&&(a[ot]=s);const i=new K(e,a,Xe(t||[])).toString();return i instanceof Promise?i.then(l=>H(i,[...l.callbacks||[],Yt(e,l,a,s)])):H(i,[Yt(e,i,a,s)])},Nr=({children:e,...t})=>{const n=zt();if(n){const r=xe(n);if(r==="svg"||r==="head")return new K("title",t,Xe(e??[]))}return et("title",e,t,!1)},Tr=({children:e,...t})=>{const n=zt();return["src","async"].some(r=>!t[r])||n&&xe(n)==="head"?Ye("script",e,t):et("script",e,t,!1)},$r=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,et("style",e,t,!0)):Ye("style",e,t),Lr=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Ye("link",e,t):et("link",e,t,"precedence"in t),Mr=({children:e,...t})=>{const n=zt();return n&&xe(n)==="head"?Ye("meta",e,t):et("meta",e,t,!1)},Tn=(e,{children:t,...n})=>new K(e,n,Xe(t??[])),Wr=e=>(typeof e.action=="function"&&(e.action=ft in e.action?e.action[ft]:void 0),Tn("form",e)),$n=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=ft in t.formAction?t.formAction[ft]:void 0),Tn(e,t)),Fr=e=>$n("input",e),Hr=e=>$n("button",e);const yt=Object.freeze(Object.defineProperty({__proto__:null,button:Hr,form:Wr,input:Fr,link:Lr,meta:Mr,script:Tr,style:$r,title:Nr},Symbol.toStringTag,{value:"Module"}));var Br=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),pt=e=>Br.get(e)||e,Ln=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},ze=void 0,zt=()=>ze,zr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,Gr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Ur=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Gt=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")de(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof K?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):Gt(s,t)}}},K=class{constructor(e,t,n){w(this,"tag");w(this,"props");w(this,"key");w(this,"children");w(this,"isEscaped",!0);w(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Pn(H(e[0],e.callbacks)).toString():e[0]:jn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=ze&&xe(ze)==="svg"?o=>zr(pt(o)):o=>pt(o);for(let[o,a]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof a=="object"){let i="";Ln(a,(l,c)=>{c!=null&&(i+=`${i?";":""}${l}:${c}`)}),e[0]+=' style="',de(i,e),e[0]+='"'}else if(typeof a=="string")e[0]+=` ${o}="`,de(a,e),e[0]+='"';else if(a!=null)if(typeof a=="number"||a.isEscaped)e[0]+=` ${o}="${a}"`;else if(typeof a=="boolean"&&Ur.includes(o))a&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";r=[H(a.__html)]}else if(a instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',a);else if(typeof a=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${t}'.`}else e[0]+=` ${o}="`,de(a.toString(),e),e[0]+='"'}if(Gr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Gt(r,e),e[0]+=`</${t}>`}},St=class extends K{toStringToBuffer(e){const{children:t}=this,n=this.tag.call(null,{...this.props,children:t.length<=1?t[0]:t});if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(De.length===0)e.unshift("",n);else{const r=De.map(s=>[s,s.values.at(-1)]);e.unshift("",n.then(s=>(s instanceof K&&(s.localContexts=r),s)))}else n instanceof K?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...n.callbacks))):de(n,e)}},Mn=class extends K{toStringToBuffer(e){Gt(this.children,e)}},_t=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=at(e,t,n);return s.key=r,s},en=!1,at=(e,t,n)=>{if(!en){for(const r in Dt)yt[r][Ht]=Dt[r];en=!0}return typeof e=="function"?new St(e,t,n):yt[e]?new St(yt[e],t,n):e==="svg"||e==="head"?(ze||(ze=Bt("")),new K(e,t,[new St(ze,{value:e},n)])):new K(e,t,n)},ue=({children:e})=>new Mn("",{children:e},Array.isArray(e)?e:e?[e]:[]),Kr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=at(e,t,[]);else{const s=t.children;r=Array.isArray(s)?at(e,t,s):at(e,t,[s])}return r.key=n,r}var Ge="_hp",Vr={Change:"Input",DoubleClick:"DblClick"},qr={svg:"2000/svg",math:"1998/Math/MathML"},_e=[],Nt=new WeakMap,Ne=void 0,Jr=()=>Ne,Q=e=>"t"in e,wt={onClick:["click",!1]},tn=e=>{if(!e.startsWith("on"))return;if(wt[e])return wt[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return wt[e]=[(Vr[n]||n).toLowerCase(),!!r]}},nn=(e,t)=>Ne&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,Qr=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=pt(s);const a=tn(s);if(a){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(a[0],n[s],a[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(a[0],o,a[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let i;typeof o=="function"?i=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,i=()=>o.current=null),Nt.set(e,i)}else if(s==="style"){const i=e.style;typeof o=="string"?i.cssText=o:(i.cssText="",o!=null&&Ln(o,i.setProperty.bind(i)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const i=nn(e,s);o==null||o===!1?e.removeAttribute(i):o===!0?e.setAttribute(i,""):typeof o=="string"||typeof o=="number"?e.setAttribute(i,o):e.setAttribute(i,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=pt(s);const a=tn(s);a?e.removeEventListener(a[0],o,a[1]):s==="ref"?(r=Nt.get(e))==null||r():e.removeAttribute(nn(e,s))}}},Zr=(e,t)=>{t[O][0]=0,_e.push([e,t]);const n=t.tag[Ht]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{_e.pop()}},Wn=(e,t,n,r,s)=>{var o,a;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((a=e[O][1][Fe])==null||a.forEach(i=>s.push(i))),e.vC.forEach(i=>{var l;if(Q(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const c=n.length;if(Wn(i,t,n,r,s),i.s){for(let d=c;d<n.length;d++)n[d].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},Xr=e=>{for(;;e=e.tag===Ge||!e.vC||!e.pP?e.nN:e.vC[0]){if(!e)return null;if(e.tag!==Ge&&e.e)return e.e}},Fn=e=>{var t,n,r,s,o,a;Q(e)||((n=(t=e[O])==null?void 0:t[1][Fe])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Nt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(i=>i.p=2)),(o=e.vC)==null||o.forEach(Fn)),e.p||((a=e.e)==null||a.remove(),delete e.e),typeof e.tag=="function"&&(Me.delete(e),it.delete(e),delete e[O][3],e.a=!0)},Hn=(e,t,n)=>{e.c=t,Bn(e,t,n)},rn=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},sn=Symbol(),Bn=(e,t,n)=>{var c;const r=[],s=[],o=[];Wn(e,t,r,s,o),s.forEach(Fn);const a=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!a.length)i=0;else{const d=rn(a,Xr(e.nN));d!==void 0?(l=a[d],i=d):i=rn(a,(c=r.find(h=>h.tag!==Ge&&h.e))==null?void 0:c.e)??-1,i===-1&&(n=!0)}for(let d=0,h=r.length;d<h;d++,i++){const f=r[d];let g;if(f.s&&f.e)g=f.e,f.s=!1;else{const b=n||!f.e;Q(f)?(f.e&&f.d&&(f.e.textContent=f.t),f.d=!1,g=f.e||(f.e=document.createTextNode(f.t))):(g=f.e||(f.e=f.n?document.createElementNS(f.n,f.tag):document.createElement(f.tag)),Qr(g,f.props,f.pP),Bn(f,g,b))}f.tag===Ge?i--:n?g.parentNode||t.appendChild(g):a[i]!==g&&a[i-1]!==g&&(a[i+1]===g?t.appendChild(a[i]):t.insertBefore(g,l||a[i]||null))}if(e.pP&&delete e.pP,o.length){const d=[],h=[];o.forEach(([,f,,g,b])=>{f&&d.push(f),g&&h.push(g),b==null||b()}),d.forEach(f=>f()),h.length&&requestAnimationFrame(()=>{h.forEach(f=>f())})}},Yr=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),it=new WeakMap,Tt=(e,t,n)=>{var o,a,i,l,c,d;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?Zr(e,t):Xe(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][It]&&(s=n[0][It],e[5].push([e,s,t]));const h=r?[...t.pC]:t.vC?[...t.vC]:void 0,f=[];let g;for(let b=0;b<n.length;b++){Array.isArray(n[b])&&n.splice(b,1,...n[b].flat());let m=es(n[b]);if(m){typeof m.tag=="function"&&!m.tag[Dn]&&(De.length>0&&(m[O][2]=De.map(S=>[S,S.values.at(-1)])),(a=e[5])!=null&&a.length&&(m[O][3]=e[5].at(-1)));let y;if(h&&h.length){const S=h.findIndex(Q(m)?A=>Q(A):m.key!==void 0?A=>A.key===m.key&&A.tag===m.tag:A=>A.tag===m.tag);S!==-1&&(y=h[S],h.splice(S,1))}if(y)if(Q(m))y.t!==m.t&&(y.t=m.t,y.d=!0),m=y;else{const S=y.pP=y.props;if(y.props=m.props,y.f||(y.f=m.f||t.f),typeof m.tag=="function"){const A=y[O][2];y[O][2]=m[O][2]||[],y[O][3]=m[O][3],!y.f&&((y.o||y)===m.o||(l=(i=y.tag)[_r])!=null&&l.call(i,S,y.props))&&Yr(A,y[O][2])&&(y.s=!0)}m=y}else if(!Q(m)&&Ne){const S=xe(Ne);S&&(m.n=S)}if(!Q(m)&&!m.s&&(Tt(e,m),delete m.f),f.push(m),g&&!g.s&&!m.s)for(let S=g;S&&!Q(S);S=(c=S.vC)==null?void 0:c.at(-1))S.nN=m;g=m}}t.vR=r?[...t.vC,...h||[]]:h||[],t.vC=f,r&&delete t.pC}catch(h){if(t.f=!0,h===sn){if(s)return;throw h}const[f,g,b]=((d=t[O])==null?void 0:d[3])||[];if(g){const m=()=>lt([0,!1,e[2]],b),y=it.get(b)||[];y.push(m),it.set(b,y);const S=g(h,()=>{const A=it.get(b);if(A){const x=A.indexOf(m);if(x!==-1)return A.splice(x,1),m()}});if(S){if(e[0]===1)e[1]=!0;else if(Tt(e,b,[S]),(g.length===1||e!==f)&&b.c){Hn(b,b.c,!1);return}throw sn}}throw h}finally{s&&e[5].pop()}},es=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[O]=[0,[]];else{const t=qr[e.tag];t&&(Ne||(Ne=Nn("")),e.props.children=[{tag:Ne,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},on=(e,t)=>{var n,r;(n=t[O][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{Tt(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[O][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&Hn(t,t.c,!1)},Me=new WeakMap,an=[],lt=async(e,t)=>{e[5]||(e[5]=[]);const n=Me.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if(Me.set(t,[r,()=>{e[2]?e[2](e,t,o=>{on(o,t)}).then(()=>r(t)):(on(e,t),r(t))}]),an.length)an.at(-1).add(t);else{await Promise.resolve();const o=Me.get(t);o&&(Me.delete(t),o[1]())}return s},ts=(e,t,n)=>({tag:Ge,props:{children:e},key:n,e:t,p:1}),At=0,Fe=1,xt=2,Ct=3,Et=new WeakMap,Ut=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),ns=void 0,ln=[],Ue=e=>{var a;const t=()=>typeof e=="function"?e():e,n=_e.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(a=r[O][1])[At]||(a[At]=[]),o=r[O][0]++;return s[o]||(s[o]=[t(),i=>{const l=ns,c=s[o];if(typeof i=="function"&&(i=i(c[0])),!Object.is(i,c[0]))if(c[0]=i,ln.length){const[d,h]=ln.at(-1);Promise.all([d===3?r:lt([d,!1,l],r),h]).then(([f])=>{if(!f||!(d===2||d===3))return;const g=f.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===f.vC&&lt([d===3?1:0,!1,l],f)})})})}else lt([0,!1,l],r)}])},rs=(e,t,n)=>{var c;const r=_e.at(-1);if(!r)return;const[,s]=r,o=(c=s[O][1])[Fe]||(c[Fe]=[]),a=s[O][0]++,[i,,l]=o[a]||(o[a]=[]);if(Ut(i,n)){l&&l();const d=()=>{h[e]=void 0,h[2]=t()},h=[n,void 0,void 0,void 0,void 0];h[e]=d,o[a]=h}},cn=(e,t)=>rs(3,e,t),Kt=(e,t)=>{var i;const n=_e.at(-1);if(!n)return e;const[,r]=n,s=(i=r[O][1])[xt]||(i[xt]=[]),o=r[O][0]++,a=s[o];return Ut(a==null?void 0:a[1],t)?s[o]=[e,t]:e=s[o][0],e},ss=e=>{const t=Et.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>Et.set(e,[n]),n=>Et.set(e,[void 0,n])),e},os=(e,t)=>{var i;const n=_e.at(-1);if(!n)return e();const[,r]=n,s=(i=r[O][1])[Ct]||(i[Ct]=[]),o=r[O][0]++,a=s[o];return Ut(a==null?void 0:a[1],t)&&(s[o]=[e(),t]),s[o][0]},as=Nn({pending:!1,data:null,method:null,action:null}),un=new Set,is=e=>{un.add(e),e.finally(()=>un.delete(e))},Vt=(e,t)=>os(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),Ce=Object.create(null),nt=Object.create(null),tt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:a,onError:i,precedence:l,blocking:c,...d}=t,h=null,f=!1;const g=st[e];let b;if(g.length>0){const A=o.querySelectorAll(e);e:for(const x of A)for(const E of st[e])if(x.getAttribute(E)===t[E]){h=x;break e}if(!h){const x=g.reduce((E,R)=>t[R]===void 0?E:`${E}-${R}-${t[R]}`,e);f=!nt[x],h=nt[x]||(nt[x]=(()=>{const E=document.createElement(e);for(const R of g)t[R]!==void 0&&E.setAttribute(R,t[R]),t.rel&&E.setAttribute("rel",t.rel);return E})())}}else b=o.querySelectorAll(e);l=r?l??"":void 0,r&&(d[ot]=l);const m=Kt(A=>{if(g.length>0){let x=!1;for(const E of o.querySelectorAll(e)){if(x&&E.getAttribute(ot)!==l){o.insertBefore(A,E);return}E.getAttribute(ot)===l&&(x=!0)}o.appendChild(A)}else if(b){let x=!1;for(const E of b)if(E===A){x=!0;break}x||o.insertBefore(A,o.contains(b[0])?b[0]:o.querySelector(e)),b=void 0}},[l]),y=Vt(t.ref,A=>{var R;const x=g[0];if(n===2&&(A.innerHTML=""),(f||b)&&m(A),!i&&!a)return;let E=Ce[R=A.getAttribute(x)]||(Ce[R]=new Promise((V,q)=>{A.addEventListener("load",V),A.addEventListener("error",q)}));a&&(E=E.then(a)),i&&(E=E.catch(i)),E.catch(()=>{})});if(s&&c==="render"){const A=st[e][0];if(t[A]){const x=t[A],E=Ce[x]||(Ce[x]=new Promise((R,V)=>{m(h),h.addEventListener("load",R),h.addEventListener("error",V)}));ss(E)}}const S={tag:e,type:e,props:{...d,ref:y},ref:y};return S.p=n,h&&(S.e=h),ts(S,o)},ls=e=>{const t=Jr(),n=t&&xe(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:tt("title",e,void 0,!1,!1)},cs=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:tt("script",e,1,!1,!0),us=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,tt("style",e,2,!0,!0)),ds=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:tt("link",e,1,"precedence"in e,!0),hs=e=>tt("meta",e,void 0,!1,!1),zn=Symbol(),fs=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ue([null,!1]),o=Kt(async c=>{const d=c.isTrusted?t:c.detail[zn];if(typeof d!="function")return;c.preventDefault();const h=new FormData(c.target);s([h,!0]);const f=d(h);f instanceof Promise&&(is(f),await f),s([null,!0])},[]),a=Vt(e.ref,c=>(c.addEventListener("submit",o),()=>{c.removeEventListener("submit",o)})),[i,l]=r;return r[1]=!1,{tag:as,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:a},type:"form",ref:a}},f:l}},Gn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Kt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[zn]:t}}))},[]);n.ref=Vt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},ps=e=>Gn("input",e),ms=e=>Gn("button",e);Object.assign(Dt,{title:ls,script:cs,style:us,link:ds,meta:hs,form:fs,input:ps,button:ms});new TextEncoder;var gs=Bt(null),vs=(e,t,n,r)=>(s,o)=>{const a="<!DOCTYPE html>",i=n?_t(c=>n(c,e),{Layout:t,...o},s):s,l=Dr`${H(a)}${_t(gs.Provider,{value:e},i)}`;return e.html(l)},bs=(e,t)=>function(r,s){const o=r.getLayout()??ue;return e&&r.setLayout(a=>e({...a,Layout:o},r)),r.setRenderer(vs(r,o,e)),s()};const ys=bs(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(Oo,{href:"/app/style.css",rel:"stylesheet"}),p(Ro,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),Ss=Object.freeze(Object.defineProperty({__proto__:null,default:ys},Symbol.toStringTag,{value:"Module"}));function Un(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ws(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Un(r))return!0}return!1}function As(e,t){if(!ws(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const a=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(a,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const c=l[2];if(!Un(c))return i;const d=i.match(o.usernameRegex),h=d?d[1]:"";if(h){const f=encodeURIComponent(`${o.name}-@${h}`),g=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${f}-${b}?style=flat&logo=${g}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}else{const f=encodeURIComponent(o.name),g=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${f}-${b}?style=flat&logo=${g}`;return`<a href="${c}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}function ke(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,'<code class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200">$1</code>')}function xs(e){const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const s=t[r].trim();if(s==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(s.startsWith("- ")){let a=s.substring(2).replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');a=ke(a),n+=`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">•</span><span>${a}</span></li>`,r++;continue}if(s.includes("|")&&t[r+1]&&t[r+1].includes("---")){const o=s.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',o.forEach(i=>{let l=i.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');l=ke(l),n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${l}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{let c=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');c=ke(c),n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${c}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>",r--}else{let i=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');i=ke(i),n+=i+"<br>"}}else if(s){let o=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>');o=ke(o),n+=o+"<br>"}else n+="<br>";r++}return n}function Cs(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,a="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),a="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),a="docswell-iframe"),`<iframe class="${a}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function Es(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function ks(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:680px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Rs(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const a=o.match(/^(#+)\s+(.+)/);if(a){r&&n.push(r);const i=a[1].length;let l=a[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}function Te(e,t){if(!e.trim())return"";let n=Es(e);return n=Cs(n),n=ks(n),n=As(n),n=ke(n),xs(n)}const Os="component-name",js="component-export",Ps="data-serialized-props",Is="data-hono-template",he="__importing_islands",$t=Symbol(),Lt=Symbol(),kt=Bt({[$t]:!1,[Lt]:!1}),Kn=e=>Array.isArray(e)?e.some(Kn):typeof e=="object"&&Kr(e),qt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const i in r){const l=r[i];Kn(l)?s[i]=l:o[i]=l}const a=xe(kt);return a[Lt]||!a[$t]?p("honox-island",{[Os]:e,[js]:t||void 0,[Ps]:JSON.stringify(o),children:[p(kt.Provider,{value:{...a,[$t]:!0},children:p(n,{...r})}),Object.entries(s).map(([i,l])=>_t("template",{[Is]:i,key:i},p(kt.Provider,{value:{...a,[Lt]:!0},children:l})))]}):p(n,{...r})},Ds=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ue(r),a=n===4?"text-lg font-semibold text-gray-800":n===3?"text-xl font-semibold text-gray-800":n===2?"text-2xl font-bold text-gray-900":"text-3xl font-bold text-gray-900";return n!==4?p("div",{className:"mb-6",children:[p("h2",{className:a+" mb-4",dangerouslySetInnerHTML:{__html:e}}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:Te(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p("button",{onClick:()=>o(!s),className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${s?"rotate-90":""}`,children:"▶"}),p("span",{className:a,dangerouslySetInnerHTML:{__html:e}})]}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(t)}})})]})},_s=function(e){return p(qt,{componentName:"/app/islands/ToggleSection.tsx",Component:Ds,props:e})},Ns=function({section:e,subsections:t}){const[n,r]=Ue({}),[s,o]=Ue(!1);cn(()=>{const c={};t.forEach(d=>{c[d.id]=!1}),r(c)},[t]);const a=c=>{r(d=>({...d,[c]:!d[c]}))},i=()=>{const c=!s,d={};t.forEach(h=>{d[h.id]=c}),r(d),o(c)};return cn(()=>{const c=Object.values(n).filter(Boolean).length;o(c===t.length&&t.length>0)},[n,t.length]),p("div",{className:"mb-8",children:[p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}}),t.length>0&&p("button",{onClick:i,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${s?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:s?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${s?"rotate-180":""}`,children:"▼"})]})]}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:Te(e.content,e.title)}}),t.map(c=>{const d=n[c.id]||!1;return p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{onClick:()=>a(c.id),className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${d?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:c.title}})]}),d&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(c.content,c.title)}})})]},c.id)})]})},Ts=function(e){return p(qt,{componentName:"/app/islands/SectionWithBulkToggle.tsx",Component:Ns,props:e})},$s=function(){const[e,t]=Ue(null),n=async r=>{t(r);try{const s=r==="markdown"?"README.md":"README.pdf",o=`/${s}`,a=document.createElement("a");a.href=o,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p("button",{onClick:()=>n("markdown"),disabled:e==="markdown",className:"flex items-center justify-center gap-2 px-6 py-3 bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px]",children:e==="markdown"?p(ue,{children:[p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),p("span",{children:"ダウンロード中..."})]}):p(ue,{children:[p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})}),p("span",{children:"Markdownをダウンロード"})]})}),p("button",{onClick:()=>n("pdf"),disabled:e==="pdf",className:"flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px]",children:e==="pdf"?p(ue,{children:[p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),p("span",{children:"ダウンロード中..."})]}):p(ue,{children:[p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),p("span",{children:"PDFをダウンロード"})]})})]})},Ls=function(e){return p(qt,{componentName:"/app/islands/DownloadButtons.tsx",Component:$s,props:e})},Ms=`## 基本情報

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
`;function Ws(){const e=Rs(Ms),n=(r=>{const s=[];let o=null,a=[];return r.forEach(i=>{!i.title&&i.level===0?s.push({type:"intro",section:i}):i.level===1||i.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i})):i.level===3?(o&&s.push({type:"h3-group",section:o,subsections:a}),o=i,a=[]):i.level===4&&o?a.push(i):(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i}))}),o&&s.push({type:"h3-group",section:o,subsections:a}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Ls,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${Te(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Ts,{section:r.section,subsections:r.subsections},r.section.id);{const o=Te(r.section.content);return p(_s,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:p("p",{children:"Built with HonoX on Cloudflare Workers"})})]})})}const Fs=!0,Hs=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:Fs,default:Ws},Symbol.toStringTag,{value:"Module"}));var dn=(e,t,n)=>(r,s)=>{let o=-1;return a(0);async function a(i){if(i<=o)throw new Error("next() called multiple times");o=i;let l,c=!1,d;if(e[i]?(d=e[i][0][0],r.req.routeIndex=i):d=i===e.length&&s||void 0,d)try{l=await d(r,()=>a(i+1))}catch(h){if(h instanceof Error&&t)r.error=h,l=await t(h,r),c=!0;else throw h}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||c)&&(r.res=l),r}},Bs=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof Yn?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?zs(e,{all:n,dot:r}):{}};async function zs(e,t){const n=await e.formData();return n?Gs(n,t):{}}function Gs(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?Us(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(Ks(n,r,s),delete n[r])}),n}var Us=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n},Ks=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,a)=>{a===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Vn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Vs=e=>{const{groups:t,path:n}=qs(e),r=Vn(n);return Js(r,t)},qs=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},Js=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},rt={},hn=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return rt[r]||(n[2]?rt[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:rt[r]=[e,n[1],!0]),rt[r]}return null},qn=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},Qs=e=>qn(e,decodeURI),Jn=e=>{const t=e.url,n=t.indexOf("/",8);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),a=t.slice(n,o===-1?void 0:o);return Qs(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(s===63)break}return t.slice(n,r)},Zs=e=>{const t=Jn(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},Re=(e,t,...n)=>(n.length&&(t=Re(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Qn=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,a)=>a.indexOf(s)===o)},Rt=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Xn(e):e):e,Zn=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let a=e.indexOf(`?${t}`,8);for(a===-1&&(a=e.indexOf(`&${t}`,8));a!==-1;){const i=e.charCodeAt(a+t.length+1);if(i===61){const l=a+t.length+2,c=e.indexOf("&",l);return Rt(e.slice(l,c===-1?void 0:c))}else if(i==38||isNaN(i))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let i=e.indexOf("=",o);i>a&&a!==-1&&(i=-1);let l=e.slice(o+1,i===-1?a===-1?void 0:a:i);if(r&&(l=Rt(l)),o=a,l==="")continue;let c;i===-1?c="":(c=e.slice(i+1,a===-1?void 0:a),r&&(c=Rt(c))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(c)):s[l]??(s[l]=c)}return t?s[t]:s},Xs=Zn,Ys=(e,t)=>Zn(e,t,!0),Xn=decodeURIComponent,fn=e=>qn(e,Xn),Oe,B,ne,er,tr,Mt,oe,vn,Yn=(vn=class{constructor(e,t="/",n=[[]]){C(this,ne);w(this,"raw");C(this,Oe);C(this,B);w(this,"routeIndex",0);w(this,"path");w(this,"bodyCache",{});C(this,oe,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,v(this,B,n),v(this,Oe,{})}param(e){return e?k(this,ne,er).call(this,e):k(this,ne,tr).call(this)}query(e){return Xs(this.url,e)}queries(e){return Ys(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Bs(this,e))}json(){return u(this,oe).call(this,"json")}text(){return u(this,oe).call(this,"text")}arrayBuffer(){return u(this,oe).call(this,"arrayBuffer")}blob(){return u(this,oe).call(this,"blob")}formData(){return u(this,oe).call(this,"formData")}addValidatedData(e,t){u(this,Oe)[e]=t}valid(e){return u(this,Oe)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return u(this,B)[0].map(([[,e]])=>e)}get routePath(){return u(this,B)[0].map(([[,e]])=>e)[this.routeIndex].path}},Oe=new WeakMap,B=new WeakMap,ne=new WeakSet,er=function(e){const t=u(this,B)[0][this.routeIndex][1][e],n=k(this,ne,Mt).call(this,t);return n?/\%/.test(n)?fn(n):n:void 0},tr=function(){const e={},t=Object.keys(u(this,B)[0][this.routeIndex][1]);for(const n of t){const r=k(this,ne,Mt).call(this,u(this,B)[0][this.routeIndex][1][n]);r&&typeof r=="string"&&(e[n]=/\%/.test(r)?fn(r):r)}return e},Mt=function(e){return u(this,B)[1]?u(this,B)[1][e]:e},oe=new WeakMap,vn),eo="text/plain; charset=UTF-8",Ot=(e,t={})=>{for(const n of Object.keys(t))e.set(n,t[n]);return e},Ke,Ve,Z,be,X,P,I,M,Y,qe,je,Pe,Je,Qe,L,F,bn,to=(bn=class{constructor(e,t){C(this,L);C(this,Ke);C(this,Ve);w(this,"env",{});C(this,Z);w(this,"finalized",!1);w(this,"error");C(this,be,200);C(this,X);C(this,P);C(this,I);C(this,M);C(this,Y,!0);C(this,qe);C(this,je);C(this,Pe);C(this,Je);C(this,Qe);w(this,"render",(...e)=>(u(this,je)??v(this,je,t=>this.html(t)),u(this,je).call(this,...e)));w(this,"setLayout",e=>v(this,qe,e));w(this,"getLayout",()=>u(this,qe));w(this,"setRenderer",e=>{v(this,je,e)});w(this,"header",(e,t,n)=>{if(this.finalized&&v(this,M,new Response(u(this,M).body,u(this,M))),t===void 0){u(this,P)?u(this,P).delete(e):u(this,I)&&delete u(this,I)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}n!=null&&n.append?(u(this,P)||(v(this,Y,!1),v(this,P,new Headers(u(this,I))),v(this,I,{})),u(this,P).append(e,t)):u(this,P)?u(this,P).set(e,t):(u(this,I)??v(this,I,{}),u(this,I)[e.toLowerCase()]=t),this.finalized&&(n!=null&&n.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});w(this,"status",e=>{v(this,Y,!1),v(this,be,e)});w(this,"set",(e,t)=>{u(this,Z)??v(this,Z,new Map),u(this,Z).set(e,t)});w(this,"get",e=>u(this,Z)?u(this,Z).get(e):void 0);w(this,"newResponse",(...e)=>k(this,L,F).call(this,...e));w(this,"body",(e,t,n)=>typeof t=="number"?k(this,L,F).call(this,e,t,n):k(this,L,F).call(this,e,t));w(this,"text",(e,t,n)=>{if(!u(this,I)){if(u(this,Y)&&!n&&!t)return new Response(e);v(this,I,{})}return u(this,I)["content-type"]=eo,typeof t=="number"?k(this,L,F).call(this,e,t,n):k(this,L,F).call(this,e,t)});w(this,"json",(e,t,n)=>{const r=JSON.stringify(e);return u(this,I)??v(this,I,{}),u(this,I)["content-type"]="application/json",typeof t=="number"?k(this,L,F).call(this,r,t,n):k(this,L,F).call(this,r,t)});w(this,"html",(e,t,n)=>(u(this,I)??v(this,I,{}),u(this,I)["content-type"]="text/html; charset=UTF-8",typeof e=="object"?In(e,On.Stringify,!1,{}).then(r=>typeof t=="number"?k(this,L,F).call(this,r,t,n):k(this,L,F).call(this,r,t)):typeof t=="number"?k(this,L,F).call(this,e,t,n):k(this,L,F).call(this,e,t)));w(this,"redirect",(e,t)=>(u(this,P)??v(this,P,new Headers),u(this,P).set("Location",String(e)),this.newResponse(null,t??302)));w(this,"notFound",()=>(u(this,Pe)??v(this,Pe,()=>new Response),u(this,Pe).call(this,this)));v(this,Ke,e),t&&(v(this,X,t.executionCtx),this.env=t.env,v(this,Pe,t.notFoundHandler),v(this,Qe,t.path),v(this,Je,t.matchResult))}get req(){return u(this,Ve)??v(this,Ve,new Yn(u(this,Ke),u(this,Qe),u(this,Je))),u(this,Ve)}get event(){if(u(this,X)&&"respondWith"in u(this,X))return u(this,X);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,X))return u(this,X);throw Error("This context has no ExecutionContext")}get res(){return v(this,Y,!1),u(this,M)||v(this,M,new Response("404 Not Found",{status:404}))}set res(e){if(v(this,Y,!1),u(this,M)&&e){e=new Response(e.body,e);for(const[t,n]of u(this,M).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=u(this,M).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}v(this,M,e),this.finalized=!0}get var(){return u(this,Z)?Object.fromEntries(u(this,Z)):{}}},Ke=new WeakMap,Ve=new WeakMap,Z=new WeakMap,be=new WeakMap,X=new WeakMap,P=new WeakMap,I=new WeakMap,M=new WeakMap,Y=new WeakMap,qe=new WeakMap,je=new WeakMap,Pe=new WeakMap,Je=new WeakMap,Qe=new WeakMap,L=new WeakSet,F=function(e,t,n){if(u(this,Y)&&!n&&!t&&u(this,be)===200)return new Response(e,{headers:u(this,I)});if(t&&typeof t!="number"){const s=new Headers(t.headers);u(this,P)&&u(this,P).forEach((a,i)=>{i==="set-cookie"?s.append(i,a):s.set(i,a)});const o=Ot(s,u(this,I));return new Response(e,{headers:o,status:t.status??u(this,be)})}const r=typeof t=="number"?t:u(this,be);u(this,I)??v(this,I,{}),u(this,P)??v(this,P,new Headers),Ot(u(this,P),u(this,I)),u(this,M)&&(u(this,M).headers.forEach((s,o)=>{var a,i;o==="set-cookie"?(a=u(this,P))==null||a.append(o,s):(i=u(this,P))==null||i.set(o,s)}),Ot(u(this,P),u(this,I))),n??(n={});for(const[s,o]of Object.entries(n))if(typeof o=="string")u(this,P).set(s,o);else{u(this,P).delete(s);for(const a of o)u(this,P).append(s,a)}return new Response(e,{status:r,headers:u(this,P)})},bn),D="ALL",no="all",ro=["get","post","put","delete","options","patch"],nr="Can not add a route since the matcher is already built.",rr=class extends Error{},so=e=>e.text("404 Not Found",404),pn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},z,_,or,G,ge,ct,ut,yn,sr=(yn=class{constructor(t={}){C(this,_);w(this,"get");w(this,"post");w(this,"put");w(this,"delete");w(this,"options");w(this,"patch");w(this,"all");w(this,"on");w(this,"use");w(this,"router");w(this,"getPath");w(this,"_basePath","/");C(this,z,"/");w(this,"routes",[]);C(this,G,so);w(this,"errorHandler",pn);w(this,"onError",t=>(this.errorHandler=t,this));w(this,"notFound",t=>(v(this,G,t),this));w(this,"fetch",(t,...n)=>k(this,_,ut).call(this,t,n[1],n[0],t.method));w(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${Re("/",t)}`,n),r,s)));w(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,_,ut).call(this,t.request,t,void 0,t.request.method))})});[...ro,no].forEach(o=>{this[o]=(a,...i)=>(typeof a=="string"?v(this,z,a):k(this,_,ge).call(this,o,u(this,z),a),i.forEach(l=>{k(this,_,ge).call(this,o,u(this,z),l)}),this)}),this.on=(o,a,...i)=>{for(const l of[a].flat()){v(this,z,l);for(const c of[o].flat())i.map(d=>{k(this,_,ge).call(this,c.toUpperCase(),u(this,z),d)})}return this},this.use=(o,...a)=>(typeof o=="string"?v(this,z,o):(v(this,z,"*"),a.unshift(o)),a.forEach(i=>{k(this,_,ge).call(this,D,u(this,z),i)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??Jn:Zs}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var a;let o;n.errorHandler===pn?o=s.handler:(o=async(i,l)=>(await dn([],n.errorHandler)(i,()=>s.handler(i,l))).res,o[Pt]=s.handler),k(a=r,_,ge).call(a,s.method,s.path,o)}),this}basePath(t){const n=k(this,_,or).call(this);return n._basePath=Re(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const a=o?l=>{const c=o(l);return Array.isArray(c)?c:[c]}:l=>{let c;try{c=l.executionCtx}catch{}return[l.env,c]};s||(s=(()=>{const l=Re(this._basePath,t),c=l==="/"?0:l.length;return d=>{const h=new URL(d.url);return h.pathname=h.pathname.slice(c)||"/",new Request(h,d)}})());const i=async(l,c)=>{const d=await n(s(l.req.raw),...a(l));if(d)return d;await c()};return k(this,_,ge).call(this,D,Re(t,"*"),i),this}},z=new WeakMap,_=new WeakSet,or=function(){const t=new sr({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,v(t,G,u(this,G)),t.routes=this.routes,t},G=new WeakMap,ge=function(t,n,r){t=t.toUpperCase(),n=Re(this._basePath,n);const s={path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},ct=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},ut=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,_,ut).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(s,o),i=new to(t,{path:o,matchResult:a,env:r,executionCtx:n,notFoundHandler:u(this,G)});if(a[0].length===1){let c;try{c=a[0][0][0][0](i,async()=>{i.res=await u(this,G).call(this,i)})}catch(d){return k(this,_,ct).call(this,d,i)}return c instanceof Promise?c.then(d=>d||(i.finalized?i.res:u(this,G).call(this,i))).catch(d=>k(this,_,ct).call(this,d,i)):c??u(this,G).call(this,i)}const l=dn(a[0],this.errorHandler,u(this,G));return(async()=>{try{const c=await l(i);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return k(this,_,ct).call(this,c,i)}})()},yn),mt="[^/]+",He=".*",Be="(?:|/.*)",We=Symbol(),oo=new Set(".\\+*[^]$()");function ao(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===He||e===Be?1:t===He||t===Be?-1:e===mt?1:t===mt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ye,Se,U,Sn,Wt=(Sn=class{constructor(){C(this,ye);C(this,Se);C(this,U,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(u(this,ye)!==void 0)throw We;if(o)return;v(this,ye,n);return}const[a,...i]=t,l=a==="*"?i.length===0?["","",He]:["","",mt]:a==="/*"?["","",Be]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(l){const d=l[1];let h=l[2]||mt;if(d&&l[2]&&(h=h.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(h)))throw We;if(c=u(this,U)[h],!c){if(Object.keys(u(this,U)).some(f=>f!==He&&f!==Be))throw We;if(o)return;c=u(this,U)[h]=new Wt,d!==""&&v(c,Se,s.varIndex++)}!o&&d!==""&&r.push([d,u(c,Se)])}else if(c=u(this,U)[a],!c){if(Object.keys(u(this,U)).some(d=>d.length>1&&d!==He&&d!==Be))throw We;if(o)return;c=u(this,U)[a]=new Wt}c.insert(i,n,r,s,o)}buildRegExpStr(){const n=Object.keys(u(this,U)).sort(ao).map(r=>{const s=u(this,U)[r];return(typeof u(s,Se)=="number"?`(${r})@${u(s,Se)}`:oo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof u(this,ye)=="number"&&n.unshift(`#${u(this,ye)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},ye=new WeakMap,Se=new WeakMap,U=new WeakMap,Sn),gt,Ze,wn,io=(wn=class{constructor(){C(this,gt,{varIndex:0});C(this,Ze,new Wt)}insert(e,t,n){const r=[],s=[];for(let a=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const c=`@\\${a}`;return s[a]=[c,l],a++,i=!0,c}),!i)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(i)!==-1){o[l]=o[l].replace(i,s[a][1]);break}}return u(this,Ze).insert(o,t,r,u(this,gt),n),r}buildRegExp(){let e=u(this,Ze).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,a)=>o!==void 0?(n[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),n,r]}},gt=new WeakMap,Ze=new WeakMap,wn),ar=[],lo=[/^$/,[],Object.create(null)],dt=Object.create(null);function ir(e){return dt[e]??(dt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function co(){dt=Object.create(null)}function uo(e){var c;const t=new io,n=[];if(e.length===0)return lo;const r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,h],[f,g])=>d?1:f?-1:h.length-g.length),s=Object.create(null);for(let d=0,h=-1,f=r.length;d<f;d++){const[g,b,m]=r[d];g?s[b]=[m.map(([S])=>[S,Object.create(null)]),ar]:h++;let y;try{y=t.insert(b,h,g)}catch(S){throw S===We?new rr(b):S}g||(n[h]=m.map(([S,A])=>{const x=Object.create(null);for(A-=1;A>=0;A--){const[E,R]=y[A];x[E]=R}return[S,x]}))}const[o,a,i]=t.buildRegExp();for(let d=0,h=n.length;d<h;d++)for(let f=0,g=n[d].length;f<g;f++){const b=(c=n[d][f])==null?void 0:c[1];if(!b)continue;const m=Object.keys(b);for(let y=0,S=m.length;y<S;y++)b[m[y]]=i[b[m[y]]]}const l=[];for(const d in a)l[d]=n[a[d]];return[o,l,s]}function Ee(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(ir(n).test(t))return[...e[n]]}}var ae,ie,$e,lr,cr,An,ho=(An=class{constructor(){C(this,$e);w(this,"name","RegExpRouter");C(this,ae);C(this,ie);v(this,ae,{[D]:Object.create(null)}),v(this,ie,{[D]:Object.create(null)})}add(e,t,n){var i;const r=u(this,ae),s=u(this,ie);if(!r||!s)throw new Error(nr);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[D]).forEach(c=>{l[e][c]=[...l[D][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=ir(t);e===D?Object.keys(r).forEach(c=>{var d;(d=r[c])[t]||(d[t]=Ee(r[c],t)||Ee(r[D],t)||[])}):(i=r[e])[t]||(i[t]=Ee(r[e],t)||Ee(r[D],t)||[]),Object.keys(r).forEach(c=>{(e===D||e===c)&&Object.keys(r[c]).forEach(d=>{l.test(d)&&r[c][d].push([n,o])})}),Object.keys(s).forEach(c=>{(e===D||e===c)&&Object.keys(s[c]).forEach(d=>l.test(d)&&s[c][d].push([n,o]))});return}const a=Qn(t)||[t];for(let l=0,c=a.length;l<c;l++){const d=a[l];Object.keys(s).forEach(h=>{var f;(e===D||e===h)&&((f=s[h])[d]||(f[d]=[...Ee(r[h],d)||Ee(r[D],d)||[]]),s[h][d].push([n,o-c+l+1]))})}}match(e,t){co();const n=k(this,$e,lr).call(this);return this.match=(r,s)=>{const o=n[r]||n[D],a=o[2][s];if(a)return a;const i=s.match(o[0]);if(!i)return[[],ar];const l=i.indexOf("",1);return[o[1][l],i]},this.match(e,t)}},ae=new WeakMap,ie=new WeakMap,$e=new WeakSet,lr=function(){const e=Object.create(null);return Object.keys(u(this,ie)).concat(Object.keys(u(this,ae))).forEach(t=>{e[t]||(e[t]=k(this,$e,cr).call(this,t))}),v(this,ae,v(this,ie,void 0)),e},cr=function(e){const t=[];let n=e===D;return[u(this,ae),u(this,ie)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==D&&t.push(...Object.keys(r[D]).map(o=>[o,r[D][o]]))}),n?uo(t):null},An),le,ee,xn,fo=(xn=class{constructor(e){w(this,"name","SmartRouter");C(this,le,[]);C(this,ee,[]);v(this,le,e.routers)}add(e,t,n){if(!u(this,ee))throw new Error(nr);u(this,ee).push([e,t,n])}match(e,t){if(!u(this,ee))throw new Error("Fatal error");const n=u(this,le),r=u(this,ee),s=n.length;let o=0,a;for(;o<s;o++){const i=n[o];try{for(let l=0,c=r.length;l<c;l++)i.add(...r[l]);a=i.match(e,t)}catch(l){if(l instanceof rr)continue;throw l}this.match=i.match.bind(i),v(this,le,[i]),v(this,ee,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(u(this,ee)||u(this,le).length!==1)throw new Error("No active router has been determined yet.");return u(this,le)[0]}},le=new WeakMap,ee=new WeakMap,xn),Le=Object.create(null),ce,$,we,Ie,T,te,ve,Cn,ur=(Cn=class{constructor(e,t,n){C(this,te);C(this,ce);C(this,$);C(this,we);C(this,Ie,0);C(this,T,Le);if(v(this,$,n||Object.create(null)),v(this,ce,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},v(this,ce,[r])}v(this,we,[])}insert(e,t,n){v(this,Ie,++Qt(this,Ie)._);let r=this;const s=Vs(t),o=[];for(let l=0,c=s.length;l<c;l++){const d=s[l],h=s[l+1],f=hn(d,h),g=Array.isArray(f)?f[0]:d;if(Object.keys(u(r,$)).includes(g)){r=u(r,$)[g];const b=hn(d,h);b&&o.push(b[1]);continue}u(r,$)[g]=new ur,f&&(u(r,we).push(f),o.push(f[1])),r=u(r,$)[g]}const a=Object.create(null),i={handler:n,possibleKeys:o.filter((l,c,d)=>d.indexOf(l)===c),score:u(this,Ie)};return a[e]=i,u(r,ce).push(a),r}search(e,t){var i;const n=[];v(this,T,Le);let s=[this];const o=Vn(t),a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l],h=l===c-1,f=[];for(let g=0,b=s.length;g<b;g++){const m=s[g],y=u(m,$)[d];y&&(v(y,T,u(m,T)),h?(u(y,$)["*"]&&n.push(...k(this,te,ve).call(this,u(y,$)["*"],e,u(m,T))),n.push(...k(this,te,ve).call(this,y,e,u(m,T)))):f.push(y));for(let S=0,A=u(m,we).length;S<A;S++){const x=u(m,we)[S],E=u(m,T)===Le?{}:{...u(m,T)};if(x==="*"){const j=u(m,$)["*"];j&&(n.push(...k(this,te,ve).call(this,j,e,u(m,T))),v(j,T,E),f.push(j));continue}if(d==="")continue;const[R,V,q]=x,W=u(m,$)[R],vt=o.slice(l).join("/");if(q instanceof RegExp){const j=q.exec(vt);if(j){if(E[V]=j[0],n.push(...k(this,te,ve).call(this,W,e,u(m,T),E)),Object.keys(u(W,$)).length){v(W,T,E);const N=((i=j[0].match(/\//))==null?void 0:i.length)??0;(a[N]||(a[N]=[])).push(W)}continue}}(q===!0||q.test(d))&&(E[V]=d,h?(n.push(...k(this,te,ve).call(this,W,e,E,u(m,T))),u(W,$)["*"]&&n.push(...k(this,te,ve).call(this,u(W,$)["*"],e,E,u(m,T)))):(v(W,T,E),f.push(W)))}}s=f.concat(a.shift()??[])}return n.length>1&&n.sort((l,c)=>l.score-c.score),[n.map(({handler:l,params:c})=>[l,c])]}},ce=new WeakMap,$=new WeakMap,we=new WeakMap,Ie=new WeakMap,T=new WeakMap,te=new WeakSet,ve=function(e,t,n,r){const s=[];for(let o=0,a=u(e,ce).length;o<a;o++){const i=u(e,ce)[o],l=i[t]||i[D],c={};if(l!==void 0&&(l.params=Object.create(null),s.push(l),n!==Le||r&&r!==Le))for(let d=0,h=l.possibleKeys.length;d<h;d++){const f=l.possibleKeys[d],g=c[l.score];l.params[f]=r!=null&&r[f]&&!g?r[f]:n[f]??(r==null?void 0:r[f]),c[l.score]=!0}}return s},Cn),Ae,En,po=(En=class{constructor(){w(this,"name","TrieRouter");C(this,Ae);v(this,Ae,new ur)}add(e,t,n){const r=Qn(t);if(r){for(let s=0,o=r.length;s<o;s++)u(this,Ae).insert(e,r[s],n);return}u(this,Ae).insert(e,t,n)}match(e,t){return u(this,Ae).search(e,t)}},Ae=new WeakMap,En),ht=class extends sr{constructor(e={}){super(e),this.router=e.router??new fo({routers:[new ho,new po]})}},mo=e=>e;const dr=new Ar,mn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),jt=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),a=s.join("/");t[a]||(t[a]={}),o&&(t[a][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[a])=>o[0]==="["&&a[0]!=="["?1:o[0]!=="["&&a[0]==="["?-1:o.localeCompare(a));t[n]=Object.fromEntries(s)}return t},go=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),vo=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},hr="_404.tsx",bo="_error.tsx",yo=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],So=e=>{const t=e.root,n=new RegExp(`^${t}`),r=y=>mn(y.replace(n,"")),s=new ht;s.use(async function(S,A){await dr.run(S,()=>A())});const o=e.NOT_FOUND,a=jt(o),i=e.ERROR,l=jt(i),c=e.RENDERER,d=vo(c),h=e.MIDDLEWARE,f=e.ROUTES,g=go(jt(f)),b=(y,S)=>{let A=S[y]??[];const x=R=>(A=S[R.join("/")],A||(R.pop(),R.length&&x(R)),A??[]),E=y.split("/");return A=x(E),A.sort((R,V)=>R.split("/").length-V.split("/").length),A},m={};for(const y of g)for(const[S,A]of Object.entries(y)){const x=new ht;let E=!1;const R=wo(S,a);R&&x.use(async(j,N)=>{if(await N(),j.res.status===404){const fe=await R(j),J=new Response(fe.body,{status:404,headers:fe.headers});j.res=J}}),b(S,d).map(j=>{const N=c[j];N[he]&&(E=!0);const J=N.default;J&&x.all("*",J)});const q=Object.keys(h).find(j=>{const N=S.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(N+"/_middleware.tsx?").test(j)});if(q){const j=h[q];j.default&&x.use(...j.default)}for(const[j,N]of Object.entries(A)){const fe=N[he],J=mo(async function(se,yr){se.set(he,fe?!0:E),await yr()}),re=N.default,pe=mn(j);re&&"fetch"in re&&(x.use(J),x.route(pe,re));for(const me of yo){const se=N[me];se&&(x.on(me,pe,J),x.on(me,pe,...se))}re&&Array.isArray(re)&&(x.get(pe,J),x.get(pe,...re)),typeof re=="function"&&(x.get(pe,J),x.get(pe,async me=>{const se=await re(me);return se instanceof Response?se:me.render(se,N)}))}const W=xo(S,l);W&&(m[S]=W);for(const[j,N]of Object.entries(m))new RegExp(`^${j}`).test(S)&&N&&x.onError(N);let vt=r(S);s.route(vt,x)}for(const y of g.reverse()){const S=Object.entries(y)[0][0],A=new ht;Ao(A,S,a);const x=r(S);s.route(x,A)}return s};function wo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[hr];if(s)return s.default}}function Ao(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[hr];if(o){const a=o.default;o[he]&&e.use("*",(l,c)=>(l.set(he,!0),c())),e.get("*",l=>(l.status(404),a(l)))}}}function xo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[bo];if(s){const o=s.default;if(o)return async(i,l)=>{const c=s[he];return c&&l.set(he,c),l.status(500),o(i,l)}}}}const Co=e=>So({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":Or}),ERROR:Object.assign({"/app/routes/_error.tsx":Pr}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":Ss}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":Hs})}),Eo=({children:e})=>{const t=dr.getStore();if(!t)throw new Error("No context found");return p(ue,{children:t.get(he)&&e})},ko={"_honox-island-nQihQER5.js":{file:"static/honox-island-nQihQER5.js",name:"honox-island",imports:["app/client.ts"]},"_index-Bf94iodv.js":{file:"static/index-Bf94iodv.js",name:"index"},"app/client.ts":{file:"static/client-Cp7i5qbC.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/DownloadButtons.tsx","app/islands/SectionWithBulkToggle.tsx","app/islands/ToggleSection.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/DownloadButtons.tsx":{file:"static/DownloadButtons-CQRmDF1y.js",name:"DownloadButtons",src:"app/islands/DownloadButtons.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-nQihQER5.js"]},"app/islands/SectionWithBulkToggle.tsx":{file:"static/SectionWithBulkToggle-5Ek0tqNc.js",name:"SectionWithBulkToggle",src:"app/islands/SectionWithBulkToggle.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-nQihQER5.js","_index-Bf94iodv.js"]},"app/islands/ToggleSection.tsx":{file:"static/ToggleSection-BT9VFQ1F.js",name:"ToggleSection",src:"app/islands/ToggleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-nQihQER5.js","_index-Bf94iodv.js"]},"app/style.css":{file:"static/style-CenHVMQq.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-DbaiRJMF.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},fr=Object.freeze(Object.defineProperty({__proto__:null,default:ko},Symbol.toStringTag,{value:"Module"})),pr=e=>e.endsWith("/")?e:e+"/",Ro=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":fr});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Eo,{children:p("script",{type:"module",async:!!e.async,src:`${pr("/honox-resume/")}${r.file}`,nonce:e.nonce})})}return p(ue,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},Oo=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":fr});for(const[,a]of Object.entries(o))if(a.default){r=a.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${pr("/honox-resume/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p(ue,{})}else return p("link",{href:t,...s});return p("link",{...s})},mr=Co();kr(mr);const Ft=new ht,gr=Object.assign({"/app/server.ts":mr});let vr=!1;for(const[,e]of Object.entries(gr))e&&(Ft.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ft.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),vr=!0);if(!vr)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const br={},gn=new Set;for(const[e,t]of Object.entries(gr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(gn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);gn.add(n),br[n]=r}const _o={...br,fetch:Ft.fetch};export{_o as default};
