var xr=Object.defineProperty;var Zt=e=>{throw TypeError(e)};var kr=(e,t,n)=>t in e?xr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>kr(e,typeof t!="symbol"?t+"":t,n),bt=(e,t,n)=>t.has(e)||Zt("Cannot "+n);var c=(e,t,n)=>(bt(e,t,"read from private field"),n?n.call(e):t.get(e)),E=(e,t,n)=>t.has(e)?Zt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),v=(e,t,n,r)=>(bt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),k=(e,t,n)=>(bt(e,t,"access private method"),n);var Xt=(e,t,n,r)=>({set _(s){v(e,t,s,n)},get _(){return c(e,t,r)}});import{AsyncLocalStorage as Rr}from"node:async_hooks";function Or(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}var Pt="__COMPOSED_HANDLER",Dn=e=>e.length>1,In=e=>e[Pt]?In(e[Pt]):e,Dr=e=>e.name||(Dn(e)?"[middleware]":"[handler]"),Ir=e=>e.routes.map(({path:t,method:n,handler:r})=>{const s=In(r);return{path:t,method:n,name:Dr(s),isMiddleware:Dn(s)}}),Pr=(e,t)=>{const n=Or(),r={};let s=0,o=0;Ir(e).filter(({isMiddleware:a})=>!a).map(a=>{const i=`${a.method}-${a.path}`;if((r[i]||(r[i]=[])).push(a),!(r[i].length>1))return s=Math.max(s,a.method.length),o=Math.max(o,a.path.length),{method:a.method,path:a.path,routes:r[i]}}).forEach(a=>{if(!a)return;const{method:i,path:l,routes:u}=a,d=n?`\x1B[32m${i}\x1B[0m`:i;console.log(`${d} ${" ".repeat(s-i.length)} ${l}`)})};const jr=e=>(e.status(404),e.render("404 Not Found")),Lr=Object.freeze(Object.defineProperty({__proto__:null,default:jr},Symbol.toStringTag,{value:"Module"})),Tr=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e.message),t.status(500),t.render("Internal Server Error")),Nr=Object.freeze(Object.defineProperty({__proto__:null,default:Tr},Symbol.toStringTag,{value:"Module"}));var Pn={Stringify:1},H=(e,t)=>{const n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},_r=/[&<>'"]/,jn=async(e,t)=>{let n="";t||(t=[]);const r=await Promise.all(e);for(let s=r.length-1;n+=r[s],s--,!(s<0);s--){let o=r[s];typeof o=="object"&&t.push(...o.callbacks||[]);const a=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??a)n+=o;else{const i=[n];ue(o,i),n=i[0]}}return H(n,t)},ue=(e,t)=>{const n=e.search(_r);if(n===-1){t[0]+=e;return}let r,s,o=0;for(s=n;s<e.length;s++){switch(e.charCodeAt(s)){case 34:r="&quot;";break;case 39:r="&#39;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t[0]+=e.substring(o,s)+r,o=s+1}t[0]+=e.substring(o,s)},Ln=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const n=[e],r={};return t.forEach(s=>s({phase:Pn.Stringify,buffer:n,context:r})),n[0]},Tn=async(e,t,n,r,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(s?s[0]+=e:s=[e],Promise.all(o.map(i=>i({phase:t,buffer:s,context:r}))).then(i=>Promise.all(i.filter(Boolean).map(l=>Tn(l,t,!1,r,s))).then(()=>s[0]))):Promise.resolve(e)},$r=(e,...t)=>{const n=[""];for(let r=0,s=e.length-1;r<s;r++){n[0]+=e[r];const o=Array.isArray(t[r])?t[r].flat(1/0):[t[r]];for(let a=0,i=o.length;a<i;a++){const l=o[a];if(typeof l=="string")ue(l,n);else if(typeof l=="number")n[0]+=l;else{if(typeof l=="boolean"||l===null||l===void 0)continue;if(typeof l=="object"&&l.isEscaped)if(l.callbacks)n.unshift("",l);else{const u=l.toString();u instanceof Promise?n.unshift("",u):n[0]+=u}else l instanceof Promise?n.unshift("",l):ue(l.toString(),n)}}}return n[0]+=e.at(-1),n.length===1?"callbacks"in n?H(Ln(H(n[0],n.callbacks))):H(n[0]):jn(n,n.callbacks)},Bt=Symbol("RENDERER"),jt=Symbol("ERROR_HANDLER"),O=Symbol("STASH"),Nn=Symbol("INTERNAL"),Mr=Symbol("MEMO"),ht=Symbol("PERMALINK"),Qt=e=>(e[Nn]=!0,e),_n=e=>({value:t,children:n})=>{if(!n)return;const r={children:[{tag:Qt(()=>{e.push(t)}),props:{}}]};Array.isArray(n)?r.children.push(...n.flat()):r.children.push(n),r.children.push({tag:Qt(()=>{e.pop()}),props:{}});const s={tag:"",props:r,type:""};return s[jt]=o=>{throw e.pop(),o},s},$n=e=>{const t=[e],n=_n(t);return n.values=t,n.Provider=n,Ie.push(n),n},Ie=[],Gt=e=>{const t=[e],n=r=>{t.push(r.value);let s;try{s=r.children?(Array.isArray(r.children)?new Hn("",{},r.children):r.children).toString():""}finally{t.pop()}return s instanceof Promise?s.then(o=>H(o,o.callbacks)):H(s)};return n.values=t,n.Provider=n,n[Bt]=_n(t),Ie.push(n),n},Ae=e=>e.values.at(-1),st={title:[],script:["src"],style:["data-href"],link:["href"],meta:["name","httpEquiv","charset","itemProp"]},Lt={},ot="data-precedence",Qe=e=>Array.isArray(e)?e:[e],Yt=new WeakMap,en=(e,t,n,r)=>({buffer:s,context:o})=>{if(!s)return;const a=Yt.get(o)||{};Yt.set(o,a);const i=a[e]||(a[e]=[]);let l=!1;const u=st[e];if(u.length>0){e:for(const[,d]of i)for(const f of u)if(((d==null?void 0:d[f])??null)===(n==null?void 0:n[f])){l=!0;break e}}if(l?s[0]=s[0].replaceAll(t,""):u.length>0?i.push([t,n,r]):i.unshift([t,n,r]),s[0].indexOf("</head>")!==-1){let d;if(r===void 0)d=i.map(([f])=>f);else{const f=[];d=i.map(([h,,g])=>{let b=f.indexOf(g);return b===-1&&(f.push(g),b=f.length-1),[h,b]}).sort((h,g)=>h[1]-g[1]).map(([h])=>h)}d.forEach(f=>{s[0]=s[0].replaceAll(f,"")}),s[0]=s[0].replace(/(?=<\/head>)/,d.join(""))}},Ye=(e,t,n)=>H(new K(e,n,Qe(t??[])).toString()),et=(e,t,n,r)=>{if("itemProp"in n)return Ye(e,t,n);let{precedence:s,blocking:o,...a}=n;s=r?s??"":void 0,r&&(a[ot]=s);const i=new K(e,a,Qe(t||[])).toString();return i instanceof Promise?i.then(l=>H(i,[...l.callbacks||[],en(e,l,a,s)])):H(i,[en(e,i,a,s)])},Wr=({children:e,...t})=>{const n=zt();if(n){const r=Ae(n);if(r==="svg"||r==="head")return new K("title",t,Qe(e??[]))}return et("title",e,t,!1)},Fr=({children:e,...t})=>{const n=zt();return["src","async"].some(r=>!t[r])||n&&Ae(n)==="head"?Ye("script",e,t):et("script",e,t,!1)},Hr=({children:e,...t})=>["href","precedence"].every(n=>n in t)?(t["data-href"]=t.href,delete t.href,et("style",e,t,!0)):Ye("style",e,t),Br=({children:e,...t})=>["onLoad","onError"].some(n=>n in t)||t.rel==="stylesheet"&&(!("precedence"in t)||"disabled"in t)?Ye("link",e,t):et("link",e,t,"precedence"in t),Gr=({children:e,...t})=>{const n=zt();return n&&Ae(n)==="head"?Ye("meta",e,t):et("meta",e,t,!1)},Mn=(e,{children:t,...n})=>new K(e,n,Qe(t??[])),zr=e=>(typeof e.action=="function"&&(e.action=ht in e.action?e.action[ht]:void 0),Mn("form",e)),Wn=(e,t)=>(typeof t.formAction=="function"&&(t.formAction=ht in t.formAction?t.formAction[ht]:void 0),Mn(e,t)),Ur=e=>Wn("input",e),Kr=e=>Wn("button",e);const yt=Object.freeze(Object.defineProperty({__proto__:null,button:Kr,form:zr,input:Ur,link:Br,meta:Gr,script:Fr,style:Hr,title:Wr},Symbol.toStringTag,{value:"Module"}));var Jr=new Map([["className","class"],["htmlFor","for"],["crossOrigin","crossorigin"],["httpEquiv","http-equiv"],["itemProp","itemprop"],["fetchPriority","fetchpriority"],["noModule","nomodule"],["formAction","formaction"]]),pt=e=>Jr.get(e)||e,Fn=(e,t)=>{for(const[n,r]of Object.entries(e)){const s=n[0]==="-"||!/[A-Z]/.test(n)?n:n.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`);t(s,r==null?null:typeof r=="number"?s.match(/^(?:a|border-im|column(?:-c|s)|flex(?:$|-[^b])|grid-(?:ar|[^a])|font-w|li|or|sca|st|ta|wido|z)|ty$/)?`${r}`:`${r}px`:r)}},Ge=void 0,zt=()=>Ge,Vr=e=>/[A-Z]/.test(e)&&e.match(/^(?:al|basel|clip(?:Path|Rule)$|co|do|fill|fl|fo|gl|let|lig|i|marker[EMS]|o|pai|pointe|sh|st[or]|text[^L]|tr|u|ve|w)/)?e.replace(/([A-Z])/g,"-$1").toLowerCase():e,qr=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],Zr=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","defer","disabled","download","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ut=(e,t)=>{for(let n=0,r=e.length;n<r;n++){const s=e[n];if(typeof s=="string")ue(s,t);else{if(typeof s=="boolean"||s===null||s===void 0)continue;s instanceof K?s.toStringToBuffer(t):typeof s=="number"||s.isEscaped?t[0]+=s:s instanceof Promise?t.unshift("",s):Ut(s,t)}}},K=class{constructor(e,t,n){w(this,"tag");w(this,"props");w(this,"key");w(this,"children");w(this,"isEscaped",!0);w(this,"localContexts");this.tag=e,this.props=t,this.children=n}get type(){return this.tag}get ref(){return this.props.ref||null}toString(){var t,n;const e=[""];(t=this.localContexts)==null||t.forEach(([r,s])=>{r.values.push(s)});try{this.toStringToBuffer(e)}finally{(n=this.localContexts)==null||n.forEach(([r])=>{r.values.pop()})}return e.length===1?"callbacks"in e?Ln(H(e[0],e.callbacks)).toString():e[0]:jn(e,e.callbacks)}toStringToBuffer(e){const t=this.tag,n=this.props;let{children:r}=this;e[0]+=`<${t}`;const s=Ge&&Ae(Ge)==="svg"?o=>Vr(pt(o)):o=>pt(o);for(let[o,a]of Object.entries(n))if(o=s(o),o!=="children"){if(o==="style"&&typeof a=="object"){let i="";Fn(a,(l,u)=>{u!=null&&(i+=`${i?";":""}${l}:${u}`)}),e[0]+=' style="',ue(i,e),e[0]+='"'}else if(typeof a=="string")e[0]+=` ${o}="`,ue(a,e),e[0]+='"';else if(a!=null)if(typeof a=="number"||a.isEscaped)e[0]+=` ${o}="${a}"`;else if(typeof a=="boolean"&&Zr.includes(o))a&&(e[0]+=` ${o}=""`);else if(o==="dangerouslySetInnerHTML"){if(r.length>0)throw"Can only set one of `children` or `props.dangerouslySetInnerHTML`.";r=[H(a.__html)]}else if(a instanceof Promise)e[0]+=` ${o}="`,e.unshift('"',a);else if(typeof a=="function"){if(!o.startsWith("on"))throw`Invalid prop '${o}' of type 'function' supplied to '${t}'.`}else e[0]+=` ${o}="`,ue(a.toString(),e),e[0]+='"'}if(qr.includes(t)&&r.length===0){e[0]+="/>";return}e[0]+=">",Ut(r,e),e[0]+=`</${t}>`}},St=class extends K{toStringToBuffer(e){const{children:t}=this,n=this.tag.call(null,{...this.props,children:t.length<=1?t[0]:t});if(!(typeof n=="boolean"||n==null))if(n instanceof Promise)if(Ie.length===0)e.unshift("",n);else{const r=Ie.map(s=>[s,s.values.at(-1)]);e.unshift("",n.then(s=>(s instanceof K&&(s.localContexts=r),s)))}else n instanceof K?n.toStringToBuffer(e):typeof n=="number"||n.isEscaped?(e[0]+=n,n.callbacks&&(e.callbacks||(e.callbacks=[]),e.callbacks.push(...n.callbacks))):ue(n,e)}},Hn=class extends K{toStringToBuffer(e){Ut(this.children,e)}},Tt=(e,t,...n)=>{t??(t={}),n.length&&(t.children=n.length===1?n[0]:n);const r=t.key;delete t.key;const s=at(e,t,n);return s.key=r,s},tn=!1,at=(e,t,n)=>{if(!tn){for(const r in Lt)yt[r][Bt]=Lt[r];tn=!0}return typeof e=="function"?new St(e,t,n):yt[e]?new St(yt[e],t,n):e==="svg"||e==="head"?(Ge||(Ge=Gt("")),new K(e,t,[new St(Ge,{value:e},n)])):new K(e,t,n)},Pe=({children:e})=>new Hn("",{children:e},Array.isArray(e)?e:e?[e]:[]),Xr=e=>!!(e&&typeof e=="object"&&"tag"in e&&"props"in e);function p(e,t,n){let r;if(!t||!("children"in t))r=at(e,t,[]);else{const s=t.children;r=Array.isArray(s)?at(e,t,s):at(e,t,[s])}return r.key=n,r}var ze="_hp",Qr={Change:"Input",DoubleClick:"DblClick"},Yr={svg:"2000/svg",math:"1998/Math/MathML"},je=[],Nt=new WeakMap,Le=void 0,es=()=>Le,Z=e=>"t"in e,wt={onClick:["click",!1]},nn=e=>{if(!e.startsWith("on"))return;if(wt[e])return wt[e];const t=e.match(/^on([A-Z][a-zA-Z]+?(?:PointerCapture)?)(Capture)?$/);if(t){const[,n,r]=t;return wt[e]=[(Qr[n]||n).toLowerCase(),!!r]}},rn=(e,t)=>Le&&e instanceof SVGElement&&/[A-Z]/.test(t)&&(t in e.style||t.match(/^(?:o|pai|str|u|ve)/))?t.replace(/([A-Z])/g,"-$1").toLowerCase():t,ts=(e,t,n)=>{var r;t||(t={});for(let s in t){const o=t[s];if(s!=="children"&&(!n||n[s]!==o)){s=pt(s);const a=nn(s);if(a){if((n==null?void 0:n[s])!==o&&(n&&e.removeEventListener(a[0],n[s],a[1]),o!=null)){if(typeof o!="function")throw new Error(`Event handler for "${s}" is not a function`);e.addEventListener(a[0],o,a[1])}}else if(s==="dangerouslySetInnerHTML"&&o)e.innerHTML=o.__html;else if(s==="ref"){let i;typeof o=="function"?i=o(e)||(()=>o(null)):o&&"current"in o&&(o.current=e,i=()=>o.current=null),Nt.set(e,i)}else if(s==="style"){const i=e.style;typeof o=="string"?i.cssText=o:(i.cssText="",o!=null&&Fn(o,i.setProperty.bind(i)))}else{if(s==="value"){const l=e.nodeName;if(l==="INPUT"||l==="TEXTAREA"||l==="SELECT"){if(e.value=o==null||o===!1?null:o,l==="TEXTAREA"){e.textContent=o;continue}else if(l==="SELECT"){e.selectedIndex===-1&&(e.selectedIndex=0);continue}}}else(s==="checked"&&e.nodeName==="INPUT"||s==="selected"&&e.nodeName==="OPTION")&&(e[s]=o);const i=rn(e,s);o==null||o===!1?e.removeAttribute(i):o===!0?e.setAttribute(i,""):typeof o=="string"||typeof o=="number"?e.setAttribute(i,o):e.setAttribute(i,o.toString())}}}if(n)for(let s in n){const o=n[s];if(s!=="children"&&!(s in t)){s=pt(s);const a=nn(s);a?e.removeEventListener(a[0],o,a[1]):s==="ref"?(r=Nt.get(e))==null||r():e.removeAttribute(rn(e,s))}}},ns=(e,t)=>{t[O][0]=0,je.push([e,t]);const n=t.tag[Bt]||t.tag,r=n.defaultProps?{...n.defaultProps,...t.props}:t.props;try{return[n.call(null,r)]}finally{je.pop()}},Bn=(e,t,n,r,s)=>{var o,a;(o=e.vR)!=null&&o.length&&(r.push(...e.vR),delete e.vR),typeof e.tag=="function"&&((a=e[O][1][Fe])==null||a.forEach(i=>s.push(i))),e.vC.forEach(i=>{var l;if(Z(i))n.push(i);else if(typeof i.tag=="function"||i.tag===""){i.c=t;const u=n.length;if(Bn(i,t,n,r,s),i.s){for(let d=u;d<n.length;d++)n[d].s=!0;i.s=!1}}else n.push(i),(l=i.vR)!=null&&l.length&&(r.push(...i.vR),delete i.vR)})},rs=e=>{for(;;e=e.tag===ze||!e.vC||!e.pP?e.nN:e.vC[0]){if(!e)return null;if(e.tag!==ze&&e.e)return e.e}},Gn=e=>{var t,n,r,s,o,a;Z(e)||((n=(t=e[O])==null?void 0:t[1][Fe])==null||n.forEach(i=>{var l;return(l=i[2])==null?void 0:l.call(i)}),(r=Nt.get(e.e))==null||r(),e.p===2&&((s=e.vC)==null||s.forEach(i=>i.p=2)),(o=e.vC)==null||o.forEach(Gn)),e.p||((a=e.e)==null||a.remove(),delete e.e),typeof e.tag=="function"&&($e.delete(e),it.delete(e),delete e[O][3],e.a=!0)},zn=(e,t,n)=>{e.c=t,Un(e,t,n)},sn=(e,t)=>{if(t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n}},on=Symbol(),Un=(e,t,n)=>{var u;const r=[],s=[],o=[];Bn(e,t,r,s,o),s.forEach(Gn);const a=n?void 0:t.childNodes;let i,l=null;if(n)i=-1;else if(!a.length)i=0;else{const d=sn(a,rs(e.nN));d!==void 0?(l=a[d],i=d):i=sn(a,(u=r.find(f=>f.tag!==ze&&f.e))==null?void 0:u.e)??-1,i===-1&&(n=!0)}for(let d=0,f=r.length;d<f;d++,i++){const h=r[d];let g;if(h.s&&h.e)g=h.e,h.s=!1;else{const b=n||!h.e;Z(h)?(h.e&&h.d&&(h.e.textContent=h.t),h.d=!1,g=h.e||(h.e=document.createTextNode(h.t))):(g=h.e||(h.e=h.n?document.createElementNS(h.n,h.tag):document.createElement(h.tag)),ts(g,h.props,h.pP),Un(h,g,b))}h.tag===ze?i--:n?g.parentNode||t.appendChild(g):a[i]!==g&&a[i-1]!==g&&(a[i+1]===g?t.appendChild(a[i]):t.insertBefore(g,l||a[i]||null))}if(e.pP&&delete e.pP,o.length){const d=[],f=[];o.forEach(([,h,,g,b])=>{h&&d.push(h),g&&f.push(g),b==null||b()}),d.forEach(h=>h()),f.length&&requestAnimationFrame(()=>{f.forEach(h=>h())})}},ss=(e,t)=>!!(e&&e.length===t.length&&e.every((n,r)=>n[1]===t[r][1])),it=new WeakMap,_t=(e,t,n)=>{var o,a,i,l,u,d;const r=!n&&t.pC;n&&(t.pC||(t.pC=t.vC));let s;try{n||(n=typeof t.tag=="function"?ns(e,t):Qe(t.props.children)),((o=n[0])==null?void 0:o.tag)===""&&n[0][jt]&&(s=n[0][jt],e[5].push([e,s,t]));const f=r?[...t.pC]:t.vC?[...t.vC]:void 0,h=[];let g;for(let b=0;b<n.length;b++){Array.isArray(n[b])&&n.splice(b,1,...n[b].flat());let m=os(n[b]);if(m){typeof m.tag=="function"&&!m.tag[Nn]&&(Ie.length>0&&(m[O][2]=Ie.map(S=>[S,S.values.at(-1)])),(a=e[5])!=null&&a.length&&(m[O][3]=e[5].at(-1)));let y;if(f&&f.length){const S=f.findIndex(Z(m)?A=>Z(A):m.key!==void 0?A=>A.key===m.key&&A.tag===m.tag:A=>A.tag===m.tag);S!==-1&&(y=f[S],f.splice(S,1))}if(y)if(Z(m))y.t!==m.t&&(y.t=m.t,y.d=!0),m=y;else{const S=y.pP=y.props;if(y.props=m.props,y.f||(y.f=m.f||t.f),typeof m.tag=="function"){const A=y[O][2];y[O][2]=m[O][2]||[],y[O][3]=m[O][3],!y.f&&((y.o||y)===m.o||(l=(i=y.tag)[Mr])!=null&&l.call(i,S,y.props))&&ss(A,y[O][2])&&(y.s=!0)}m=y}else if(!Z(m)&&Le){const S=Ae(Le);S&&(m.n=S)}if(!Z(m)&&!m.s&&(_t(e,m),delete m.f),h.push(m),g&&!g.s&&!m.s)for(let S=g;S&&!Z(S);S=(u=S.vC)==null?void 0:u.at(-1))S.nN=m;g=m}}t.vR=r?[...t.vC,...f||[]]:f||[],t.vC=h,r&&delete t.pC}catch(f){if(t.f=!0,f===on){if(s)return;throw f}const[h,g,b]=((d=t[O])==null?void 0:d[3])||[];if(g){const m=()=>lt([0,!1,e[2]],b),y=it.get(b)||[];y.push(m),it.set(b,y);const S=g(f,()=>{const A=it.get(b);if(A){const C=A.indexOf(m);if(C!==-1)return A.splice(C,1),m()}});if(S){if(e[0]===1)e[1]=!0;else if(_t(e,b,[S]),(g.length===1||e!==h)&&b.c){zn(b,b.c,!1);return}throw on}}throw f}finally{s&&e[5].pop()}},os=e=>{if(!(e==null||typeof e=="boolean")){if(typeof e=="string"||typeof e=="number")return{t:e.toString(),d:!0};if("vR"in e&&(e={tag:e.tag,props:e.props,key:e.key,f:e.f,type:e.tag,ref:e.props.ref,o:e.o||e}),typeof e.tag=="function")e[O]=[0,[]];else{const t=Yr[e.tag];t&&(Le||(Le=$n("")),e.props.children=[{tag:Le,props:{value:e.n=`http://www.w3.org/${t}`,children:e.props.children}}])}return e}},an=(e,t)=>{var n,r;(n=t[O][2])==null||n.forEach(([s,o])=>{s.values.push(o)});try{_t(e,t,void 0)}catch{return}if(t.a){delete t.a;return}(r=t[O][2])==null||r.forEach(([s])=>{s.values.pop()}),(e[0]!==1||!e[1])&&zn(t,t.c,!1)},$e=new WeakMap,ln=[],lt=async(e,t)=>{e[5]||(e[5]=[]);const n=$e.get(t);n&&n[0](void 0);let r;const s=new Promise(o=>r=o);if($e.set(t,[r,()=>{e[2]?e[2](e,t,o=>{an(o,t)}).then(()=>r(t)):(an(e,t),r(t))}]),ln.length)ln.at(-1).add(t);else{await Promise.resolve();const o=$e.get(t);o&&($e.delete(t),o[1]())}return s},as=(e,t,n)=>({tag:ze,props:{children:e},key:n,e:t,p:1}),At=0,Fe=1,Ct=2,Et=3,xt=new WeakMap,Kt=(e,t)=>!e||!t||e.length!==t.length||t.some((n,r)=>n!==e[r]),is=void 0,cn=[],Ue=e=>{var a;const t=()=>typeof e=="function"?e():e,n=je.at(-1);if(!n)return[t(),()=>{}];const[,r]=n,s=(a=r[O][1])[At]||(a[At]=[]),o=r[O][0]++;return s[o]||(s[o]=[t(),i=>{const l=is,u=s[o];if(typeof i=="function"&&(i=i(u[0])),!Object.is(i,u[0]))if(u[0]=i,cn.length){const[d,f]=cn.at(-1);Promise.all([d===3?r:lt([d,!1,l],r),f]).then(([h])=>{if(!h||!(d===2||d===3))return;const g=h.vC;requestAnimationFrame(()=>{setTimeout(()=>{g===h.vC&&lt([d===3?1:0,!1,l],h)})})})}else lt([0,!1,l],r)}])},ls=(e,t,n)=>{var u;const r=je.at(-1);if(!r)return;const[,s]=r,o=(u=s[O][1])[Fe]||(u[Fe]=[]),a=s[O][0]++,[i,,l]=o[a]||(o[a]=[]);if(Kt(i,n)){l&&l();const d=()=>{f[e]=void 0,f[2]=t()},f=[n,void 0,void 0,void 0,void 0];f[e]=d,o[a]=f}},un=(e,t)=>ls(3,e,t),Jt=(e,t)=>{var i;const n=je.at(-1);if(!n)return e;const[,r]=n,s=(i=r[O][1])[Ct]||(i[Ct]=[]),o=r[O][0]++,a=s[o];return Kt(a==null?void 0:a[1],t)?s[o]=[e,t]:e=s[o][0],e},cs=e=>{const t=xt.get(e);if(t){if(t.length===2)throw t[1];return t[0]}throw e.then(n=>xt.set(e,[n]),n=>xt.set(e,[void 0,n])),e},us=(e,t)=>{var i;const n=je.at(-1);if(!n)return e();const[,r]=n,s=(i=r[O][1])[Et]||(i[Et]=[]),o=r[O][0]++,a=s[o];return Kt(a==null?void 0:a[1],t)&&(s[o]=[e(),t]),s[o][0]},ds=$n({pending:!1,data:null,method:null,action:null}),dn=new Set,fs=e=>{dn.add(e),e.finally(()=>dn.delete(e))},Vt=(e,t)=>us(()=>n=>{let r;e&&(typeof e=="function"?r=e(n)||(()=>{e(null)}):e&&"current"in e&&(e.current=n,r=()=>{e.current=null}));const s=t(n);return()=>{s==null||s(),r==null||r()}},[e]),Ce=Object.create(null),nt=Object.create(null),tt=(e,t,n,r,s)=>{if(t!=null&&t.itemProp)return{tag:e,props:t,type:e,ref:t.ref};const o=document.head;let{onLoad:a,onError:i,precedence:l,blocking:u,...d}=t,f=null,h=!1;const g=st[e];let b;if(g.length>0){const A=o.querySelectorAll(e);e:for(const C of A)for(const x of st[e])if(C.getAttribute(x)===t[x]){f=C;break e}if(!f){const C=g.reduce((x,R)=>t[R]===void 0?x:`${x}-${R}-${t[R]}`,e);h=!nt[C],f=nt[C]||(nt[C]=(()=>{const x=document.createElement(e);for(const R of g)t[R]!==void 0&&x.setAttribute(R,t[R]),t.rel&&x.setAttribute("rel",t.rel);return x})())}}else b=o.querySelectorAll(e);l=r?l??"":void 0,r&&(d[ot]=l);const m=Jt(A=>{if(g.length>0){let C=!1;for(const x of o.querySelectorAll(e)){if(C&&x.getAttribute(ot)!==l){o.insertBefore(A,x);return}x.getAttribute(ot)===l&&(C=!0)}o.appendChild(A)}else if(b){let C=!1;for(const x of b)if(x===A){C=!0;break}C||o.insertBefore(A,o.contains(b[0])?b[0]:o.querySelector(e)),b=void 0}},[l]),y=Vt(t.ref,A=>{var R;const C=g[0];if(n===2&&(A.innerHTML=""),(h||b)&&m(A),!i&&!a)return;let x=Ce[R=A.getAttribute(C)]||(Ce[R]=new Promise((J,V)=>{A.addEventListener("load",J),A.addEventListener("error",V)}));a&&(x=x.then(a)),i&&(x=x.catch(i)),x.catch(()=>{})});if(s&&u==="render"){const A=st[e][0];if(t[A]){const C=t[A],x=Ce[C]||(Ce[C]=new Promise((R,J)=>{m(f),f.addEventListener("load",R),f.addEventListener("error",J)}));cs(x)}}const S={tag:e,type:e,props:{...d,ref:y},ref:y};return S.p=n,f&&(S.e=f),as(S,o)},hs=e=>{const t=es(),n=t&&Ae(t);return n!=null&&n.endsWith("svg")?{tag:"title",props:e,type:"title",ref:e.ref}:tt("title",e,void 0,!1,!1)},ps=e=>!e||["src","async"].some(t=>!e[t])?{tag:"script",props:e,type:"script",ref:e.ref}:tt("script",e,1,!1,!0),ms=e=>!e||!["href","precedence"].every(t=>t in e)?{tag:"style",props:e,type:"style",ref:e.ref}:(e["data-href"]=e.href,delete e.href,tt("style",e,2,!0,!0)),gs=e=>!e||["onLoad","onError"].some(t=>t in e)||e.rel==="stylesheet"&&(!("precedence"in e)||"disabled"in e)?{tag:"link",props:e,type:"link",ref:e.ref}:tt("link",e,1,"precedence"in e,!0),vs=e=>tt("meta",e,void 0,!1,!1),Kn=Symbol(),bs=e=>{const{action:t,...n}=e;typeof t!="function"&&(n.action=t);const[r,s]=Ue([null,!1]),o=Jt(async u=>{const d=u.isTrusted?t:u.detail[Kn];if(typeof d!="function")return;u.preventDefault();const f=new FormData(u.target);s([f,!0]);const h=d(f);h instanceof Promise&&(fs(h),await h),s([null,!0])},[]),a=Vt(e.ref,u=>(u.addEventListener("submit",o),()=>{u.removeEventListener("submit",o)})),[i,l]=r;return r[1]=!1,{tag:ds,props:{value:{pending:i!==null,data:i,method:i?"post":null,action:i?t:null},children:{tag:"form",props:{...n,ref:a},type:"form",ref:a}},f:l}},Jn=(e,{formAction:t,...n})=>{if(typeof t=="function"){const r=Jt(s=>{s.preventDefault(),s.currentTarget.form.dispatchEvent(new CustomEvent("submit",{detail:{[Kn]:t}}))},[]);n.ref=Vt(n.ref,s=>(s.addEventListener("click",r),()=>{s.removeEventListener("click",r)}))}return{tag:e,props:n,type:e,ref:n.ref}},ys=e=>Jn("input",e),Ss=e=>Jn("button",e);Object.assign(Lt,{title:hs,script:ps,style:ms,link:gs,meta:vs,form:bs,input:ys,button:Ss});new TextEncoder;var ws=Gt(null),As=(e,t,n,r)=>(s,o)=>{const a="<!DOCTYPE html>",i=n?Tt(u=>n(u,e),{Layout:t,...o},s):s,l=$r`${H(a)}${Tt(ws.Provider,{value:e},i)}`;return e.html(l)},Cs=(e,t)=>function(r,s){const o=r.getLayout()??Pe;return e&&r.setLayout(a=>e({...a,Layout:o},r)),r.setRenderer(As(r,o,e)),s()};const Es=Cs(({children:e})=>p("html",{lang:"en",children:[p("head",{children:[p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{href:"/favicon.ico",rel:"icon"}),p(Go,{href:"/app/style.css",rel:"stylesheet"}),p(Bo,{src:"/app/client.ts",async:!0})]}),p("body",{children:e})]})),xs=Object.freeze(Object.defineProperty({__proto__:null,default:Es},Symbol.toStringTag,{value:"Module"}));function Vn(e){return[/github\.com\/[^\/]+\/[^\/]+/,/qiita\.com\/[^\/]+\/items/,/qiita\.com\/tags/,/zenn\.dev\/[^\/]+\/articles/,/zenn\.dev\/[^\/]+\/books/,/zenn\.dev\/topics/,/dev\.classmethod\.jp\/articles/,/speakerdeck\.com\/[^\/]+\/[^\/]+/,/x\.com\/[^\/]+\/status/,/x\.com\/search/,/docswell\.com\/slide/].some(r=>r.test(e))?!1:[/https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,/https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,/https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,/https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/].some(r=>r.test(e))}function ks(e){const t=/\[([^\]]+)\]\(([^)]+)\)/g;let n;for(;(n=t.exec(e))!==null;){const r=n[2];if(Vn(r))return!0}return!1}function Rs(e,t){if(!ks(e))return e;const n={"dev.classmethod.jp":{name:"DevelopersIO",logo:"amazonaws",color:"orange",usernameRegex:/dev\.classmethod\.jp\/author\/([^\/\s\)]+)/},"github.com":{name:"GitHub",logo:"github",color:"black",usernameRegex:/github\.com\/([^\/\s\)]+)/},"zenn.dev":{name:"Zenn",logo:"zenn",color:"blue",usernameRegex:/zenn\.dev\/([^\/\s\)]+)/},"speakerdeck.com":{name:"Speaker--Deck",logo:"speakerdeck",color:"green",usernameRegex:/speakerdeck\.com\/([^\/\s\)]+)/},"x.com":{name:"X",logo:"x",color:"black",usernameRegex:/x\.com\/([^\/\s\)]+)/},"qiita.com":{name:"Qiita",logo:"qiita",color:"brightgreen",usernameRegex:/qiita\.com\/([^\/\s\)]+)/},"www.docswell.com":{name:"Docswell",logo:"readthedocs",color:"blue",usernameRegex:/www\.docswell\.com\/user\/([^\/\s\)]+)/}};let r=e;return Object.entries(n).forEach(([s,o])=>{const a=new RegExp(`\\[([^\\]]+)\\]\\(https?://${s.replace(/\./g,"\\.")}[^\\)]*\\)`,"g");r=r.replace(a,i=>{try{const l=i.match(/\[([^\]]+)\]\(([^)]+)\)/);if(!l)return i;const u=l[2];if(!Vn(u))return i;const d=i.match(o.usernameRegex),f=d?d[1]:"";if(f){const h=encodeURIComponent(`${o.name}-@${f}`),g=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${h}-${b}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}else{const h=encodeURIComponent(o.name),g=encodeURIComponent(o.logo),b=encodeURIComponent(o.color),m=`https://img.shields.io/badge/${h}-${b}?style=flat&logo=${g}`;return`<a href="${u}" target="_blank" rel="noopener"><img src="${m}" alt="${o.name}" /></a>`}}catch(l){return console.warn("Error converting account link:",l),i}})}),r}const Os="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200",kt=/^\d+\.\s/;function Ds(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fn(e,t){return`<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${t}</span><span>${Me(e)}</span></li>`}function qn(e){return e.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold">$1</strong>').replace(new RegExp("(?<!\\*)\\*([^*]+)\\*(?!\\*)","g"),'<em class="italic">$1</em>').replace(/`([^`]+)`/g,`<code class="${Os}">$1</code>`)}function Me(e){return qn(e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'))}function Is(e){var s;const t=e.trim().split(`
`);let n="",r=0;for(;r<t.length;){const o=t[r].trim();if(o==="---"){n+='<hr class="my-6 border-t border-gray-200">',r++;continue}if(o.startsWith("```")){let a="";for(r++;r<t.length;){const l=t[r];if(l.trim()==="```"||l.trim().startsWith("```"))break;a+=l+`
`,r++}const i=Ds(a.trim());n+=`<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${i}</code></pre></div>`,r<t.length&&r++;continue}if(o.startsWith("> ")){let a="";for(;r<t.length&&t[r].trim().startsWith("> ");)a+=t[r].trim().substring(2)+" ",r++;n+=`<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${Me(a.trim())}</p></blockquote>`;continue}if(kt.test(o)){let a=1;for(;r<t.length&&kt.test(t[r].trim());){const i=t[r].trim().replace(kt,"");n+=fn(i,`${a}.`),a++,r++}continue}if(o.startsWith("- ")){const a=o.substring(2);n+=fn(a,"•"),r++;continue}if(o.includes("|")&&((s=t[r+1])!=null&&s.includes("---"))){const a=o.split("|").map(i=>i.trim()).filter(i=>i);if(t[r+1].includes("---")){for(n+='<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>',a.forEach(i=>{n+=`<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${Me(i)}</th>`}),n+='</tr></thead><tbody class="divide-y divide-gray-200">',r+=2;r<t.length&&t[r].trim().includes("|");){const i=t[r].trim().split("|").map(l=>l.trim()).filter(l=>l);i.length>0&&(n+='<tr class="hover:bg-gray-50">',i.forEach(l=>{n+=`<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${Me(l)}</td>`}),n+="</tr>"),r++}n+="</tbody></table></div>";continue}}o?n+=Me(o)+"<br>":n+="<br>",r++}return n}function Ps(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;return e.replace(t,(n,r,s)=>{let o=r,a="";return s.includes("speakerdeck.com")?(o=r.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i,""),a="speakerdeck-iframe"):s.includes("docswell.com")&&(o=r.replace(/\s*\|\s*ドクセル\s*$/i,""),a="docswell-iframe"),`<iframe class="${a}" frameborder="0" src="${s}" title="${o}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`})}function js(e){const t=/- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,n=/\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g,r="width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";let s=e.replace(t,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);return s=s.replace(n,(o,a,i)=>`<iframe style="${r}" src="${i}" title="${a}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`),s}function Ls(e){const t=/- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;return e.replace(t,(n,r,s)=>`<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${r}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(s)}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`)}function Te(e,t){if(!e.trim())return"";let n=js(e);return n=Ps(n),n=Ls(n),n=Rs(n),n=Is(n),qn(n)}function Ts(e){const t=e.split(`
`),n=[];let r=null,s=0;for(const o of t){const a=o.match(/^(#+)\s+(.+)/);if(a){r&&n.push(r);const i=a[1].length;let l=a[2];l=l.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'),r={title:l,content:"",level:i,id:`section-${++s}`}}else r?r.content+=o+`
`:n.length===0&&(r={title:"",content:o+`
`,level:0,id:"intro"})}return r&&n.push(r),n}const Ns="component-name",_s="component-export",$s="data-serialized-props",Ms="data-hono-template",de="__importing_islands",$t=Symbol(),Mt=Symbol(),Rt=Gt({[$t]:!1,[Mt]:!1}),Zn=e=>Array.isArray(e)?e.some(Zn):typeof e=="object"&&Xr(e),qt=({componentName:e,componentExport:t,Component:n,props:r})=>{const s={},o={};for(const i in r){const l=r[i];Zn(l)?s[i]=l:o[i]=l}const a=Ae(Rt);return a[Mt]||!a[$t]?p("honox-island",{[Ns]:e,[_s]:t||void 0,[$s]:JSON.stringify(o),children:[p(Rt.Provider,{value:{...a,[$t]:!0},children:p(n,{...r})}),Object.entries(s).map(([i,l])=>Tt("template",{[Ms]:i,key:i},p(Rt.Provider,{value:{...a,[Mt]:!0},children:l})))]}):p(n,{...r})},Xn=({title:e,level:t,className:n})=>{const s=`${(o=>{switch(o){case 2:return"text-2xl font-bold text-gray-800";case 3:return"text-xl font-semibold text-blue-900";case 4:return"text-lg font-semibold text-gray-800";default:return"text-3xl font-bold text-gray-900"}})(t)} ${n||""}`;return p("h2",{className:s,dangerouslySetInnerHTML:{__html:e}})},Ws=({title:e,level:t,isOpen:n,onClick:r})=>p("button",{onClick:r,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${n?"rotate-90":""}`,children:"▶"}),p(Xn,{title:e,level:t})]}),Fs=function({title:e,content:t,level:n,defaultOpen:r=!1}){const[s,o]=Ue(r);return n!==4?p("div",{className:"mb-6",children:[p(Xn,{title:e,level:n,className:"mb-4"}),p("div",{className:"prose max-w-none",dangerouslySetInnerHTML:{__html:Te(t)}})]}):p("div",{className:"mb-6 border border-gray-200 rounded-lg",children:[p(Ws,{title:e,level:n,isOpen:s,onClick:()=>o(!s)}),s&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(t)}})})]})},Hs=function(e){return p(qt,{componentName:"/app/islands/CollapsibleSection.tsx",Component:Fs,props:e})},Bs=e=>{const[t,n]=Ue({}),[r,s]=Ue(!1);return un(()=>{const i={};e.forEach(l=>{i[l.id]=!1}),n(i)},[e]),un(()=>{const i=Object.values(t).filter(Boolean).length;s(i===e.length&&e.length>0)},[t,e.length]),{toggleStates:t,allOpen:r,handleToggle:i=>{n(l=>({...l,[i]:!l[i]}))},handleBulkToggle:()=>{const i=!r,l={};e.forEach(u=>{l[u.id]=i}),n(l),s(i)}}},Gs=({allOpen:e,onClick:t})=>p("button",{onClick:t,className:`px-3 py-1 text-sm rounded-md transition-colors flex items-center gap-2 ${e?"bg-red-100 hover:bg-red-200 text-red-700":"bg-blue-100 hover:bg-blue-200 text-blue-700"}`,children:[p("span",{className:"text-xs",children:e?"全て閉じる":"全て開く"}),p("span",{className:`transform transition-transform ${e?"rotate-180":""}`,children:"▼"})]}),zs=({title:e,hasSubsections:t,allOpen:n,onBulkToggle:r})=>p("div",{className:"flex items-center justify-between mb-4",children:[p("h3",{className:"text-xl font-semibold text-blue-900",dangerouslySetInnerHTML:{__html:e}}),t&&p(Gs,{allOpen:n,onClick:r})]}),Us=({subsection:e,isOpen:t,onToggle:n})=>p("div",{className:"mb-4 border border-gray-200 rounded-lg",children:[p("button",{onClick:n,className:"flex items-center gap-3 w-full text-left p-4 hover:bg-gray-50 transition-colors rounded-lg",children:[p("span",{className:`transform transition-transform text-gray-500 ${t?"rotate-90":""}`,children:"▶"}),p("span",{className:"text-lg font-semibold text-gray-800",dangerouslySetInnerHTML:{__html:e.title}})]}),t&&p("div",{className:"px-4 pb-4 border-t border-gray-100",children:p("div",{className:"prose max-w-none pt-3",dangerouslySetInnerHTML:{__html:Te(e.content,e.title)}})})]}),Ks=function({section:e,subsections:t}){const{toggleStates:n,allOpen:r,handleToggle:s,handleBulkToggle:o}=Bs(t);return p("div",{className:"mb-8",children:[p(zs,{title:e.title,hasSubsections:t.length>0,allOpen:r,onBulkToggle:o}),e.content.trim()&&p("div",{className:"prose max-w-none mb-6",dangerouslySetInnerHTML:{__html:Te(e.content,e.title)}}),t.map(a=>p(Us,{subsection:a,isOpen:n[a.id]||!1,onToggle:()=>s(a.id)},a.id))]})},Js=function(e){return p(qt,{componentName:"/app/islands/SectionGroup.tsx",Component:Ks,props:e})},Vs=()=>p("svg",{className:"animate-spin h-4 w-4",fill:"none",viewBox:"0 0 24 24",children:[p("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),qs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"})}),Zs=()=>p("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:p("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})}),hn=({type:e,isLoading:t,onClick:n})=>{const r=e==="pdf";return p("button",{onClick:n,disabled:t,className:`flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px] ${r?"bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300":"bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300"}`,children:t?p(Pe,{children:[p(Vs,{}),p("span",{children:"ダウンロード中..."})]}):p(Pe,{children:[r?p(Zs,{}):p(qs,{}),p("span",{children:r?"PDFをダウンロード":"Markdownをダウンロード"})]})})},Xs=function(){const[e,t]=Ue(null),n=async r=>{t(r);try{const s=r==="markdown"?"README.md":"README.pdf",o=`/honox-resume-template/${s}`,a=document.createElement("a");a.href=o,a.download=s,document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(s){console.error("Download failed:",s)}finally{t(null)}};return p("div",{className:"flex flex-col sm:flex-row gap-3 items-center justify-center mb-8",children:[p(hn,{type:"markdown",isLoading:e==="markdown",onClick:()=>n("markdown")}),p(hn,{type:"pdf",isLoading:e==="pdf",onClick:()=>n("pdf")})]})},Qs=function(e){return p(qt,{componentName:"/app/islands/DownloadSection.tsx",Component:Xs,props:e})},Ys=`## 基本情報

### プロフィール

|項目|値|
|---|---|
|ハンドルネーム|つくぼし|
|最終学歴|早稲田大学 商学部卒|
|主要職種|クラウドインフラエンジニア|

### アカウント

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi)
- [Zenn](https://zenn.dev/tsukuboshi)
- [Github](https://github.com/tsukuboshi)
- [SpeakerDeck](https://speakerdeck.com/tsukuboshi)
- [X](https://x.com/tsukuboshi0755)

## 業務スキル

### クラウドインフラ設計

\`\`\`txt
クラウドインフラの設計を専門としており、特にAWS のアーキテクチャ設計・構築が一番得意です。  
モノリシック、マイクロサービス、静的ウェブサイトホスティング、CICD パイプライン、マルチアカウント、イベント駆動といった様々なパターンの設計・構築経験があります。  
AWS アーキテクチャを構築するにあたり、CloudFormation、Terraform、CDK といった IaC の開発経験も多数あります。  
\`\`\`

### 生成AIの専門知識

\`\`\`txt
LLMが流行し始めた頃から生成 AI、RAG、及び AI エージェントの分野に特化し、様々な情報を発信してきました。  
生成 AI を活用したチャットボットアプリの自社開発や導入支援に携わった経験があります。
さらに、生成 AI インフラに特化した社内チームのリーダーを務めていたり、生成 AI コンピテンシーの取得に貢献した経験もあります。  
\`\`\`

### サーバレス開発

\`\`\`txt
インフラ側のみならずアプリ側の問題にも幅広く対応できるエンジニアになりたいという思いから、サーバレスのアプリケーション開発経験も積極的に積んできました。  
アーキテクチャとしては、主に Lambda や ECS Fargate、Cloud Run 上でのサーバレスアプリケーションを設計・開発してきています。  
言語としては主に Python 及び TypeScript を使用したバックエンド開発経験があります。    
\`\`\`

### プロジェクトマネジメント

\`\`\`txt
プロジェクトマネージャーを務めることが多く、チームマネジメント及び顧客折衝の経験が豊富です。  
小規模チームで(3 - 5 人程度)でリーダーを務めた事が多数あります。  
プロジェクトを成功に導くため、メンバーのモチベーション向上や業務効率化に繋がるような仕組みづくりを大切にしています。  
\`\`\`

### アウトプット活動

\`\`\`txt
多くの方と技術の面白さを語り合いたい思いから、ブログ執筆や勉強会登壇、個人開発等のアウトプット活動に積極的に取り組んできました。   
DevelopersIO、Zennなどで100本以上の技術記事を執筆すると共に、技術雑誌への寄稿実績もあり、AWSや生成AIを中心に発信しています。
またJAWS-UGを主とした勉強会への登壇も20回以上実施しており、様々な形態での発信を心がけています。  
\`\`\`

## 技術スキル

実業務で使用した技術のみ列挙します。

### AWS

\`IAM\` \`VPC\` \`ELB(ALB・NLB)\` \`EC2\` \`EFS\` \`RDS(MySQL・Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`Route 53\` \`ACM\` \`WAF\` \`ECS(Fargate)\` \`App Runner\` \`ECR\` \`API Gateway\` \`Lambda(Node.js・Python)\` \`DynamoDB\` \`Step Functions\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`SQS\` \`SNS\` \`Data Firehose\` \`EventBridge\` \`CloudWatch (Alarm・Logs)\` \`Security Hub\` \`GuardDuty\` \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`DevOps Guru\` \`Bedrock\` \`Kendra\`

### Google Cloud

\`Cloud Run\` \`Alloy DB\`

### IaC

\`Terraform\` \`CloudFormation\` \`SAM\` \`CDK\`

### OS

\`Linux\` \`Windows\`

### Programming Language / Framework

\`Python\` \`TypeScript\` \`Node.js\` \`Fastify\` \`Prisma\`

### SaaS

\`GitHub\` \`GitHub Actions\`

## 保有称号

### 表彰

|表彰名|対象年度|
|---|---|
|Japan AWS Top Engineer|2024/2025|
|AWS Community Builder|2024/2025|

### 資格

|資格名|取得日|
|---|---|
|AWS DOP|2023/6/15|
|AWS SAP|2022/8/3|
|LPIC-2|2021/6/28|
|ORACLE MASTER Silver Oracle Database 12c|2021/3/29|
|基本情報 技術者試験|2019/11/20|

## 経歴

### 株式会社ゼスト(業務委託：2025/3 -2025/6、正社員：2025/7 - 2025/8)

#### 業務要約

**役割**：バックエンドエンジニア

**プロジェクト一覧**

- 介護事業者向けZEST SCHEDULE開発
- 関係者向けZEST SCHEDULE ADMIN開発

**業務内容**

1. フロントエンドのNext.jsと技術スタックを統一し開発チーム全体の開発チーム全体の保守性向上のためTypeScript/Fastify/Prismaを用いて介護事業者向けスケジューリングシステムのRESTful APIを設計・開発し、どのエンジニアでも比較的運用しやすいバックエンド基盤を構築
2. 社内のインフラ運用担当者が少なかったため、Cloud Runを活用したコンテナデプロイやAlloy DBでのSQLオペレーションも兼任し、フルスタックな開発運用体制に貢献

**使用技術**

- 言語・フレームワーク：\`TypeScript\` \`Node.js\` \`Fastify\` \`Prisma\`
- Google Cloudサービス：\`Cloud Run\` \`Alloy DB\`
- SaaS：\`GitHub\` \`GitHub Actions\`

### クラスメソッド株式会社(正社員：2022/3 - 2025/6)

参画したプロジェクトが多いため、以下で主要なもののみ個別で記載します。

#### SaaSログ連携・保管コンテナシステム設計構築 (2024/9 - 2025/6)

**概要**：SaaS から出力されるログを定期的に AWS にアップロードし、監査で使用するためのログ形式に加工するコンテナインフラ/アプリを設計・構築・開発

**役割**：プロジェクトマネージャー(3名チーム)/バックエンドエンジニア

**業務内容**

1. 3名チームのリーダーとして技術選定から実装までの全工程を主導し、メンバーの技術レベルに応じたタスク配分と週次定例による進捗管理を実施
2. タイムアウト制限を回避しつつ運用負荷を最小限にするためECS Fargateをインフラ/アプリの両面で設計・構築し、SaaSログの定期取得と加工処理を自動化
3. マルチテナント環境での設定差分管理のためCloudFormation/SAMでIaC化し、パラメータファイルによる環境別デプロイを実現
4. ログ欠損による業務影響を防ぐためStep Functionsの自動リトライ機構とCloudWatch Alarmsによる監視を設計・構築し、障害時の自動復旧を確立

**使用技術**

- AWS サービス：\`VPC\` \`ECR\` \`ECS(Fargate)\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`EventBridge\` \`Step Functions\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\`

#### AI-Starter内製開発(2024/1 - 2025/6)

**概要**：生成AIを活用した自社SaaSチャットボットアプリ基盤を設計・開発

**役割**：生成AIエンジニア/インフラエンジニア

**参考URL**：[生成AI環境構築サービス「AI\\-Starter」 \\| サービス \\| クラスメソッド株式会社](https://classmethod.jp/services/generative-ai/ai-starter/)

**業務内容**

1. React.jsアプリと技術スタックを統一し保守性を向上させるためCDK（TypeScript）でIaCを刷新
2. 運用負荷削減のためApp Runner/DynamoDB/Bedrock/Kendra/S3/Secrets Managerを用いたサーバレスアーキテクチャを設計・構築
3. 要件に応じた構成パターンの提供を実現するためCDKのコンストラクト分割を実装すると共に、デプロイ作業を効率化するためCDKメタデータ削除及びパラメータ最適化がされたCloudFormationを生成する標準化されたデプロイ手法を確立
4. 障害発生時の迅速な対応のためCloudWatch Alarmにて5xxエラー時及びメトリクスフィルターを用いたエラーログ出力時のアラートを定義し、SNS/ChatbotでSlackに通知される仕組みを実装


**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### AIチャットボット設計構築 (2024/9 - 2025/3)

**概要**：生成 AI を活用したOSSである[GenU](https://github.com/aws-samples/generative-ai-use-cases)を用いたチャットボットを構築  

**役割**：プロジェクトマネージャー(3名チーム)/生成AIエンジニア

**業務内容**

1. 3名体制のチームを統括し、顧客要件定義から技術選定、リソース配分、進捗管理まで一貫してマネジメント
2. お客様の業務内容に適した生成AIユースケース選定のためGenUを提案し、セキュリティ要件を満たすためBedrock Knowledge BaseのRAGシステムをCDKで実装
3. 社内文書に含まれる図表も検索対象にする必要からAdvanced Parsing機能を有効化し、テキストだけでなく視覚的情報も含めた高精度な回答生成を実現
4. 知識レベルの異なる関係者への説明のため生成AI基礎からKendraとの技術比較、検索精度評価のRAGASやBedrock Guardrailの活用方法まで幅広く技術QAに対応

**使用技術**

- AWS サービス：\`WAF\` \`DynamoDB\` \`Secrets Manager\` \`Lambda(Node.js)\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CDK(Typescript)\`

#### 社内生成AIインフラチーム活動(2024/1 - 2025/6)

**概要**：生成 AI 関連の案件に対応する体制作りのため、生成 AI に特化したインフラを専門に部署を跨いだ交流を促進する活動を主導

**役割**：チームリーダー(5名チーム)/生成AIエンジニア

**参考URL**：[40社の支援実績によりAWSの「生成AIコンピテンシー」を取得 \\| クラスメソッド株式会社](https://classmethod.jp/news/250619-generative-ai-competency/)

**業務内容**

1. 5名チームのリーダーとして生成AIインフラチームを立ち上げ、メンバーの自主性を重視した運営方針で各自の得意分野での専門性向上を促進
2. 部門間の連携不足解消のため定期交流会を主導し、成功事例の共有とナレッジベース構築により効率的な業務フローを整備
3. 部門内の生成AI知識格差を解消するために定期的なブログ作成/勉強会を企画するとともに、生成AIに関する各種QA対応を積極的に実施
4. AWSコンピテンシー取得要件を満たすため生成AI案件のドキュメント整備と監査対応準備を部門横断で実施し、コンピテンシー取得に貢献

#### RAG システム設計構築 (2023/11 - 2024/3)

**概要**：生成 AI を活用したチャットボットアプリで使用する、社内ドキュメントを検索するための RAG システムを設計・構築

**役割**：生成AIエンジニア/インフラエンジニア

**業務内容**

1. 運用負荷を最小化するため当時まだ実績の少なかったBedrock/Kendra/S3のフルマネージドサービスを組み合わせたサーバレスRAGアーキテクチャを設計・構築
2. インフラ担当者不足に対応するためApp Runnerのオートスケーリングを活用し、NWやOSの運用が不要なAIチャットボット基盤を確立

**使用技術**

- AWS サービス：\`WAF\` \`App Runner\` \`Bedrock\` \`Kendra\` \`S3\`
- IaC： \`CloudFormation\`

#### AWSマルチアカウント管理支援通知集約システム内製開発(2023/8 - 2024/2)

**概要**：複数の AWS アカウントに対する通知設定を一括で付与できる、通知集約システムを構築

**役割**：インフラエンジニア

**参考URL**：[AWSマルチアカウント管理支援 \\| クラスメソッド株式会社](https://classmethod.jp/aws/services/multi-account/)

**業務内容**

1. 複数アカウントのセキュリティアラート見逃しを防ぐためSecurity Hub/GuardDutyの通知をEventBridge経由で集約し、Step Functionsで一元管理する構成を実装
2. アカウント追加の度に手動設定する運用負荷を削減するためCDK(TypeScript)でマルチアカウント対応のIaC実装を行い、パラメータ化による効率的なデプロイを実現

**使用技術**

- AWS サービス：\`Security Hub\` \`GuardDuty\` \`Step Functions\` \`EventBridge\`
- IaC： \`CDK(Typescript)\`

#### SaaSログ連携・保管サーバレスシステム設計構築(2023/5 - 2024/6)

**概要**：SaaS から出力されるログを定期的に AWS にアップロードし、監査で使用するためのログ形式に加工するサーバレスインフラ/アプリ及びCICDシステムを設計・構築・開発

**役割**：プロジェクトマネージャー(3名チーム)/バックエンドエンジニア

**業務内容**

1. 3名チームのリーダーとして要件定義から運用移管まで一貫して管理し、週次定例による品質管理とドキュメント整備による技術伝承を実施
2. サーバレス構成で運用負荷を最小化するためLambdaをインフラ/アプリの両面で設計・構築し、SaaSログの定期取得と加工処理を自動化
3. 長期的な保守性確保のためPycodeStyle準拠のコーディング規約を策定し、pytestによる品質担保とloggingモジュールによる障害時の原因特定を容易化
4. 複数メンバーでの並行開発を効率化するためGitHub Pull requests/Wiki/Actionsで開発プロセスを標準化し、自動テスト/デプロイでリリース品質を向上

**使用技術**

- AWS サービス：\`EventBridge\` \`Lambda(Python)\` \`SQS\` \`SNS\` \`S3\` \`CloudWatch (Alarm・Logs)\` \`DevOps Guru\`
- IaC： \`CloudFormation\` \`SAM\`
- SaaS： \`GitHub\` \`GitHub Actions\`

#### 認証システム用コンテナ基盤技術支援(2022/11 - 2023/6)

**概要**：顧客情報利用のための認証システムにおけるアプリケーションのコンテナ化に伴うインフラ基盤を設計・構築  

**役割**：プロジェクトマネージャー(5名チーム)/インフラエンジニア

**業務内容**

1. 5名チームのリーダーとして顧客との週次定例を主導し、技術的課題の早期発見と解決策の提案により計画通りのプロジェクト完遂を達成
2. アクセス数に応じたスケーリングの要求に対しECS Fargateを設計・構築し、PHPログの用途別振り分けのためFireLensによるログルーティングを実装
3. CI/CD未経験の顧客のためCodePipelineのローリングアップデートとブルー・グリーンの比較検証を実施し、シンプルな構成を重視してローリングアップデートを設計・構築
4. 社内ネットワーク限定アクセスとTLS暗号化要件を満たすため、API Gateway/NLB/ECSのプライベート統合にCloudFront/WAFを組み合わせたセキュアな認証基盤を実現

**使用技術**

- AWS サービス： \`VPC\` \`ELB(ALB・NLB)\` \`ECS\` \`EFS\` \`RDS(Aurora)\` \`ElastiCache(Redis)\` \`S3\` \`CloudFront\` \`WAF\` \`ECS(Fargate)\` \`ECR\` \`API Gateway\` \`CodeCommit\` \`CodeBuild\` \`CodeDeploy\` \`CodePipeline\` \`EventBridge\`
- IaC： \`CloudFormation\`

#### 基幹システム用マルチアカウント基盤技術支援 (2022/7 - 2024/3)

**概要**：部門・プロジェクト単位での権限/環境の分離やガバナンス統一に必要な、社内システム用のマルチアカウント管理基盤の設計・構築に伴う技術支援を実施。

**役割**：プロジェクトマネージャー(3名チーム)/インフラエンジニア

**業務内容**

1. 3名チームのリーダーとして顧客要件のヒアリングと技術課題の整理を実施し、定期的な進捗報告と課題解決策の提案により円滑なプロジェクト推進を実現
2. 部門・プロジェクト単位での権限分離要求に対しControl Tower/Organizationsの設計支援を実施し、セキュリティとガバナンスを統一した管理基盤を実現
3. 各部門が安全にリソース作成できる仕組みのためService Catalogでの標準テンプレート作成を支援し、承認済みリソースのみ展開可能な環境を確立
4. 複数アカウントのログ分析効率化のためWAF/Data Firehose/CloudWatch Logsによる集約基盤の設計支援を行い、インシデント調査時間の短縮を実現

**使用技術**

- AWS サービス： \`Control Tower\` \`Organizations\` \`Identity Center\` \`Service Catalog\` \`WAF\` \`Data Firehose\` \`CloudWatch (Logs)\`
- IaC： \`CloudFormation\`
- SaaS： \`GitHub\`

#### ECサイト用AWS環境構築(2022/6 - 2022/7)

**概要**：新規 EC サイトにおけるランディングページに必要な静的ウェブサイトホスティング基盤を設計・構築

**役割**：インフラエンジニア

**業務内容**

1. 3週間の短納期要求に対しインフラ構築を高速化するためTerraformでIaC化し、CloudFront/S3による高可用性の静的ホスティング基盤を設計・構築
2. 公開前のランディングページ保護のためCloudFront Functions(Node.js)によるBasic認証を開発し、開発段階での不正アクセスを防止
3. 企業ブランディング確立のためRoute 53/ACMでカスタムドメインとHTTPS配信を設定し、信頼性の高いWebサイト環境を実現

**使用技術**

- AWS サービス：\`IAM\` \`CloudFront\` \`S3\` \`Lambda(Node.js)\` \`Route 53\` \`ACM\`
- IaC： \`Terraform\`

#### CMSインフラ用AWS環境構築(2022/5 - 2022/8)

**概要**：動画サイト構築 CMS 新規導入のためのウェブサイト基盤を設計・構築

**役割**：インフラエンジニア

**業務内容**

1. 2週間の短納期と環境別構成要求に対応するためTerraformでIaC化し、ALB/EC2/RDS/ElastiCacheのCMS基盤を迅速に設計・構築
2. 検証・本番環境の差異による不具合を防ぐためTerraform Moduleで共通部分を抽出し、パラメータのみの変更で環境差分を吸収
3. 夜間のトラフィック減少に着目しLambda/EventBridgeでRDSインスタンスタイプの定期切り替えを自動化し、ランニングコストを削減

**使用技術**

- AWS サービス：\`IAM\` \`VPC\` \`ELB(ALB)\` \`EC2\` \`RDS(MySQL)\` \`ElastiCache(Redis)\` \`S3\` \`Route 53\` \`ACM\` \`Lambda(Python)\`
- IaC： \`Terraform\`

### 兼松エレクトロニクス株式会社(正社員：2019/4 - 2022/2)

#### 業務要約

**役割**：インフラエンジニア  

**プロジェクト一覧**

- 基幹システム用vSphere基盤更改(2021/10 - 2022/2): Oracle19c DBサーバの設計・構築
- 情報システム用vSphere基盤更改(2021/10 - 2021/12): RHEL8・Apache2.4環境の構築
- 基幹システム用z/VM基盤更改(2021/6 - 2021/12): SLES12 SP5へのバージョンアップ
- 基幹システム用VIOS基盤更改(2021/1 - 2021/7): WAS9.0.5 APサーバの設計・構築
- 社内コンテナ検証チーム活動(2020/6 - 2022/1): Kubernetes・OpenShift検証環境構築

**業務内容**

1. 基幹システムの老朽化対応のためVMware vSphere/zVM/VIOS上での更改を担当し、Oracle19c/RHEL8/SLES12/WAS9.0.5の設計・構築により安定稼働を継続
2. 社内のコンテナ技術導入推進のためDocker/Kubernetes/OpenShiftの検証チームに参加し、従来の仮想化環境からの移行検討と技術標準の策定に貢献

**使用技術**: Linux(RHEL/SLES), VMware vSphere, Oracle, WebSphere, Apache, Docker, Kubernetes, OpenShift

## 業務外活動

### 個人開発

以下では開発した自作リポジトリの内、主要なものを記載します。

|リポジトリ名|言語・フレームワーク|概要|
|---|---|---|
|[dotfiles](https://github.com/tsukuboshi/dotfiles)|\`Bash\`|自身の PC セットアップ用の dotfiles|
|[honox-resume-template](https://github.com/tsukuboshi/honox-resume-template)|\`TypeScript\` \`HonoX\` \`Vite\`|Markdown職務経歴書をWebサイトとPDFに変換し自動デプロイするテンプレート|
|[sam-notify-aws-billing](https://github.com/tsukuboshi/sam-notify-aws-billing)|\`SAM\` \`Python\`|AWS 利用料金を通知するサーバレスシステムコード|
|[sam-ai-cloud-engineer](https://github.com/tsukuboshi/sam-ai-cloud-engineer)|\`SAM\` \`Python\`|Amazon Bedrock を活用し構成図を CloudFormation テンプレートとパラメータシートに変換するサーバレスシステムコード|
|[nextjs-mastra-mcp-with-aws](https://github.com/tsukuboshi/nextjs-mastra-mcp-with-aws)|\`CDK\` \`TypeScript\`|AWS とMastraで実装したMCP Serverを呼び出すAIエージェント|
|[gas-count-schedule-time](https://github.com/tsukuboshi/gas-count-schedule-time)|\`Apps Script\` \`TypeScript\`|Googleカレンダーの予定から色ごとに工数をカウントし集計するアプリコード|
|[sam-bedrock-kb-aurora-rag](https://github.com/tsukuboshi/sam-bedrock-kb-aurora-rag)|\`SAM\` \`Python\`|Amazon Aurora と Amazon Bedrock Knowledge Bases を用いた RAG システムデプロイするためのコード|
|[terraform-microservices-template](https://github.com/tsukuboshi/terraform-microservices-template)|\`Terraform\`|AWS を用いたマイクロサービス構成用 Terraform テンプレート|

### ブログ投稿

#### DevelopersIO

2022/3から2025/6までに、100本以上の記事を作成していました。代表的な記事は以下の通りです。

- [AWS入門ブログリレー2024〜Amazon Bedrock編〜](https://dev.classmethod.jp/articles/introduction-2024-aws-bedrock/)
- [CloudFormation一撃で作るAWS料金通知ツール(Email/Slack/LINE対応)](https://dev.classmethod.jp/articles/notify-aws-billing-for-cloudformaiton/)
- [Knowledge Bases for Amazon Bedrock (with OpenSearch Serverless)をSAMで実装してみた](https://dev.classmethod.jp/articles/sam-knowledge-base-for-bedrock-with-oss/)
- [S3にアップロードしたAWS構成図をCloudFormationに変換するシステムを作ってみた](https://dev.classmethod.jp/articles/bedrock-claude-convert-diagram-to-cfn/)
- [Kendraのアクセスコントロール設定をEntra IDのOpen ID Connectを用いて有効化してみた](https://dev.classmethod.jp/articles/kendra-sharepoint-entraid-oidc/)
- [AWSの構成図をChatGPT(GPT-4V)に読み込ませてIaCコードを生成してみた](https://dev.classmethod.jp/articles/chatgpt-convert-aws-diagram-to-iac/)
- [ECSとCodePipelineのブルー/グリーンデプロイ構成をCDKで実装してみた](https://dev.classmethod.jp/articles/cdk-ecr-ecs-bluegreen-deployment/)
- [FireLens(Fluent Bit)におけるログルーティングの仕組みについて調査してみた](https://dev.classmethod.jp/articles/ecs_firelens_tag/)
- [TerraformでCloudFront Functionsを環境ごとに有効化/無効化してみた](https://dev.classmethod.jp/articles/cloudfront-functions-per-env-terraform/)

#### Zenn

2023/5から現在まで投稿している主要のブログサイトになります。代表的な記事は以下の通りです。

- [Macの環境をdotfilesでセットアップしてみた改](https://zenn.dev/tsukuboshi/articles/6e82aef942d9af)
- [Google Calenderの予定をTypeScriptを用いて色別で工数集計してみた](https://zenn.dev/tsukuboshi/articles/31c95d863d8896)
- [MCP Serverを呼び出すAIエージェントをMastra、Next.js、AWS CDKで実装してみた](https://zenn.dev/tsukuboshi/articles/nextjs-mastra-mcp-with-aws)
- [Markdownで書いた職務経歴書を良い感じのWebサイトとPDFに自動変換するツールを作ってみた](https://zenn.dev/tsukuboshi/articles/honox-resume)
- [Claude Codeとghコマンドで作るカスタムスラッシュコマンドn選](https://zenn.dev/tsukuboshi/articles/claude-code-custom-slash-commands)

### イベント登壇

#### [Mita.ts #5](https://mitats.connpass.com/event/340678/)：Mastraに入門してみた 〜AWS CDKを添えて〜

- [Mastraに入門してみた 〜AWS CDKを添えて〜 - Speaker Deck](https://speakerdeck.com/player/c5f37701df3a4d46a3f4ea1e55d2223a)

#### [Classmethod AI Talks(CATs) #14](https://cats.doorkeeper.jp/events/180830)：AWSエンジニアに捧ぐLangChainの歩き方

- [AWSエンジニアに捧ぐLangChainの歩き方 - Speaker Deck](https://speakerdeck.com/player/8c6afd2c50c34c189d72892eebf4c2ae)
- [AWSエンジニアに捧ぐLangChainの歩き方 - YouTube](https://www.youtube.com/embed/AJKS7i67Sxg?si=sFiaMmE_17lAaWO8)

#### [Toranomon Tech Hub #2](https://toranomon-tech-hub.connpass.com/event/337629/)：世界の中心でApp Runnerを叫ぶ  〜Aurora DSQLを添えて〜

- [世界の中心でApp Runnerを叫ぶ  〜Aurora DSQLを添えて〜 - Speaker Deck](https://speakerdeck.com/player/46b7da3d0de64407bdaf9f1226040a21)

#### [JAWS FESTA 2024 in 広島](https://jawsfesta2024.jaws-ug.jp/)：Amplify Gen 2ではじめる 生成AIアプリ開発入門

- [Amplify Gen 2ではじめる 生成AIアプリ開発入門 - Speaker Deck](https://speakerdeck.com/player/98e6569af2b24e4ebff41b46dc4d253a)

#### [Classmethod Odyssey](https://classmethod.connpass.com/event/322685/)：AWSで構築するパターン別RAG構成解説

- [AWSで構築するパターン別RAG構成解説 - Speaker Deck](https://speakerdeck.com/player/2707682b444841d19d18771759abc78e)
- [AWSで実現するRAG構成！Retrieverの種類と最適なインフラパターン解説 - YouTube](https://www.youtube.com/embed/QPhGs0iwBR8?si=_DFt38cwSZKl0bvf)

#### [Bedrock Claude Night 2](https://jawsug-ai.connpass.com/event/319748/)：AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた

- [AWS構成図からCloudFormationとパラメータシートを自動生成するシステムを作ってみた - Speaker Deck](https://speakerdeck.com/player/1464a901f9fb4e2e89fda1fa85ab6471)

#### [JAWS-UG東京 ランチタイムLT会 #11](https://jawsug.connpass.com/event/316451/)：5分で分かる(かもしれない)Vector engine for OpenSearch Serverless

- [5分で分かる(かもしれない)Vector engine for OpenSearch Serverless - Speaker Deck](https://speakerdeck.com/player/aaa0830e33354ea6a63b8322be7e08bf)

#### [JAWS-UG朝会 #55](https://jawsug-asa.connpass.com/event/301827/)：君はApplication Composerというサービスを知っているか

- [君はApplication Composerというサービスを知っているか - Speaker Deck](https://speakerdeck.com/player/209b17ab0ec7448da834f4df887d0652)

#### [JAWS-UG CDK支部 #12](https://jawsug-cdk.connpass.com/event/307989/)：CDKをCloudFormationテンプレートとして利用する際の注意点n選

- [CDKをCloudFormationテンプレートとして利用する際の注意点n選 - Speaker Deck](https://speakerdeck.com/player/eb548fa38dd745969c32ccc138cced66)

#### [JAWS-UG朝会 #51](https://jawsug-asa.connpass.com/event/291917/)：インフラエンジニアのためのLambda実践入門

- [インフラエンジニアのためのLambda実践入門 - Speaker Deck](https://speakerdeck.com/player/f541cbd494e941558827ec87039ebfe4)

#### [DevelopersIO 2023](https://event.classmethod.jp/developers-io/2023)：AWSとGitHubを用いたパターン別CI/CD構成解説

- [AWSとGitHubを用いたパターン別CI/CD構成解説 - Speaker Deck](https://speakerdeck.com/player/13ed26fb607a41d598f64b0b899dd0da)
- [AWS基盤でのCI/CD構成を徹底解説！CodeシリーズとGitHubの使い分けも解消 - YouTube](https://www.youtube.com/embed/nJ-eEgfbjG8?si=CiEVatkJa5fNdYqC)

#### [JAWS-UG朝会 #39](https://jawsug-asa.connpass.com/event/255874/)：(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる

- [(今更ながら)AWSのコンテナサービスについてざっくりまとめてみる - Speaker Deck](https://speakerdeck.com/player/bac50c7f2ab44ab5a94c80f82883334b)

#### [JAWS-UG CLI専門支部 #273R](https://jawsug-cli.connpass.com/event/253108/)：LambdaとLine Messaging APIで湯婆婆botを作ってみた

- [LambdaとLine Messaging APIで湯婆婆botを作ってみた - Speaker Deck](https://speakerdeck.com/player/9c9d25fecd894b9b845063e50662b5ea)

#### [DevelopersIO 2022](https://dev.classmethod.jp/news/devio-2022/)：AWS初心者に捧ぐコスト可視化のススメ

- [AWS初心者に捧ぐコスト可視化のススメ - Speaker Deck](https://speakerdeck.com/player/6864a287e4074215b7f179716df7a0b4)
- [AWS初心者に捧ぐコスト可視化のススメ - YouTube](https://www.youtube.com/embed/KWBxZIyDUJY?si=LkuNB641YEB0DF5M)

#### [AKIBA.AWS ONLINE #08](https://dev.classmethod.jp/news/akiba-aws-220523/)：それ、t2.micro選んで大丈夫？

- [それ、t2.micro選んで大丈夫？ - Speaker Deck](https://speakerdeck.com/player/d12345c2b1f94f7fb6626de0d7b81211)

#### [JAWS-UG CLI専門支部 #256M](https://jawsug-cli.connpass.com/event/243629/)：CLI専門支部に参加したらAWSエンジニアに転職できた件について

- [CLI専門支部に参加したらAWSエンジニアに転職できた件について - Speaker Deck](https://speakerdeck.com/player/19623bacacf44d4d8567255085941c1b)

### 特筆事項

#### Software Design 2024年11月号寄稿

**概要**：「第1特集 新世代の開発スタイル はじめてのAI駆動開発」内の「第4章：Infrastructure as Codeで生成AIを活用するアーキテクチャ図⇔IaCコードの変換も自由自在」を寄稿

**参考URL**：[Software Design 2024年11月号 \\| 技術評論社](https://gihyo.jp/magazine/SD/archive/2024/202411)

#### JAWS-UG 茨城運営

**概要**：JAWS-UG茨城の初期メンバーとして2024/11からの立ち上げに貢献し、運営メンバーとして活動中

**参考URL**：[JAWS\\-UG 茨城 \\- connpass](https://jawsug-ibaraki.connpass.com/)
`;function eo(){const e=Ts(Ys),n=(r=>{const s=[];let o=null,a=[];return r.forEach(i=>{!i.title&&i.level===0?s.push({type:"intro",section:i}):i.level===1||i.level===2?(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i})):i.level===3?(o&&s.push({type:"h3-group",section:o,subsections:a}),o=i,a=[]):i.level===4&&o?a.push(i):(o&&(s.push({type:"h3-group",section:o,subsections:a}),o=null,a=[]),s.push({type:"regular",section:i}))}),o&&s.push({type:"h3-group",section:o,subsections:a}),s})(e);return p("div",{className:"min-h-screen bg-gray-50",children:p("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[p("header",{className:"text-center mb-12",children:[p("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"職務経歴書"}),p(Qs,{})]}),p("main",{className:"bg-white rounded-lg shadow-lg p-8",children:n.map((r,s)=>{if(r.type==="intro")return p("div",{className:"mb-8",dangerouslySetInnerHTML:{__html:`<p class="mb-4">${Te(r.section.content)}</p>`}},r.section.id);if(r.type==="h3-group")return p(Js,{section:r.section,subsections:r.subsections||[]},r.section.id);{const o=Te(r.section.content);return p(Hs,{title:r.section.title,content:o,level:r.section.level,defaultOpen:r.section.level<=2},r.section.id)}})}),p("footer",{className:"text-center mt-12 text-gray-500",children:p("p",{children:"Built with HonoX on GitHub Pages"})})]})})}const to=!0,no=Object.freeze(Object.defineProperty({__proto__:null,__importing_islands:to,default:eo},Symbol.toStringTag,{value:"Module"}));var pn=(e,t,n)=>(r,s)=>{let o=-1;return a(0);async function a(i){if(i<=o)throw new Error("next() called multiple times");o=i;let l,u=!1,d;if(e[i]?(d=e[i][0][0],r.req.routeIndex=i):d=i===e.length&&s||void 0,d)try{l=await d(r,()=>a(i+1))}catch(f){if(f instanceof Error&&t)r.error=f,l=await t(f,r),u=!0;else throw f}else r.finalized===!1&&n&&(l=await n(r));return l&&(r.finalized===!1||u)&&(r.res=l),r}},ro=async(e,t=Object.create(null))=>{const{all:n=!1,dot:r=!1}=t,o=(e instanceof sr?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?so(e,{all:n,dot:r}):{}};async function so(e,t){const n=await e.formData();return n?oo(n,t):{}}function oo(e,t){const n=Object.create(null);return e.forEach((r,s)=>{t.all||s.endsWith("[]")?ao(n,s,r):n[s]=r}),t.dot&&Object.entries(n).forEach(([r,s])=>{r.includes(".")&&(io(n,r,s),delete n[r])}),n}var ao=(e,t,n)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]:e[t]=n},io=(e,t,n)=>{let r=e;const s=t.split(".");s.forEach((o,a)=>{a===s.length-1?r[o]=n:((!r[o]||typeof r[o]!="object"||Array.isArray(r[o])||r[o]instanceof File)&&(r[o]=Object.create(null)),r=r[o])})},Qn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},lo=e=>{const{groups:t,path:n}=co(e),r=Qn(n);return uo(r,t)},co=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(n,r)=>{const s=`@${r}`;return t.push([s,n]),s}),{groups:t,path:e}},uo=(e,t)=>{for(let n=t.length-1;n>=0;n--){const[r]=t[n];for(let s=e.length-1;s>=0;s--)if(e[s].includes(r)){e[s]=e[s].replace(r,t[n][1]);break}}return e},rt={},mn=(e,t)=>{if(e==="*")return"*";const n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){const r=`${e}#${t}`;return rt[r]||(n[2]?rt[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,n[1],new RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],new RegExp(`^${n[2]}$`)]:rt[r]=[e,n[1],!0]),rt[r]}return null},Yn=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,n=>{try{return t(n)}catch{return n}})}},fo=e=>Yn(e,decodeURI),er=e=>{const t=e.url,n=t.indexOf("/",8);let r=n;for(;r<t.length;r++){const s=t.charCodeAt(r);if(s===37){const o=t.indexOf("?",r),a=t.slice(n,o===-1?void 0:o);return fo(a.includes("%25")?a.replace(/%25/g,"%2525"):a)}else if(s===63)break}return t.slice(n,r)},ho=e=>{const t=er(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},xe=(e,t,...n)=>(n.length&&(t=xe(t,...n)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),tr=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),n=[];let r="";return t.forEach(s=>{if(s!==""&&!/\:/.test(s))r+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){n.length===0&&r===""?n.push("/"):n.push(r);const o=s.replace("?","");r+="/"+o,n.push(r)}else r+="/"+s}),n.filter((s,o,a)=>a.indexOf(s)===o)},Ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?rr(e):e):e,nr=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let a=e.indexOf(`?${t}`,8);for(a===-1&&(a=e.indexOf(`&${t}`,8));a!==-1;){const i=e.charCodeAt(a+t.length+1);if(i===61){const l=a+t.length+2,u=e.indexOf("&",l);return Ot(e.slice(l,u===-1?void 0:u))}else if(i==38||isNaN(i))return"";a=e.indexOf(`&${t}`,a+1)}if(r=/[%+]/.test(e),!r)return}const s={};r??(r=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const a=e.indexOf("&",o+1);let i=e.indexOf("=",o);i>a&&a!==-1&&(i=-1);let l=e.slice(o+1,i===-1?a===-1?void 0:a:i);if(r&&(l=Ot(l)),o=a,l==="")continue;let u;i===-1?u="":(u=e.slice(i+1,a===-1?void 0:a),r&&(u=Ot(u))),n?(s[l]&&Array.isArray(s[l])||(s[l]=[]),s[l].push(u)):s[l]??(s[l]=u)}return t?s[t]:s},po=nr,mo=(e,t)=>nr(e,t,!0),rr=decodeURIComponent,gn=e=>Yn(e,rr),ke,B,ne,or,ar,Wt,oe,Sn,sr=(Sn=class{constructor(e,t="/",n=[[]]){E(this,ne);w(this,"raw");E(this,ke);E(this,B);w(this,"routeIndex",0);w(this,"path");w(this,"bodyCache",{});E(this,oe,e=>{const{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;const s=Object.keys(t)[0];return s?t[s].then(o=>(s==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=n[e]()});this.raw=e,this.path=t,v(this,B,n),v(this,ke,{})}param(e){return e?k(this,ne,or).call(this,e):k(this,ne,ar).call(this)}query(e){return po(this.url,e)}queries(e){return mo(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((n,r)=>{t[r]=n}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await ro(this,e))}json(){return c(this,oe).call(this,"json")}text(){return c(this,oe).call(this,"text")}arrayBuffer(){return c(this,oe).call(this,"arrayBuffer")}blob(){return c(this,oe).call(this,"blob")}formData(){return c(this,oe).call(this,"formData")}addValidatedData(e,t){c(this,ke)[e]=t}valid(e){return c(this,ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return c(this,B)[0].map(([[,e]])=>e)}get routePath(){return c(this,B)[0].map(([[,e]])=>e)[this.routeIndex].path}},ke=new WeakMap,B=new WeakMap,ne=new WeakSet,or=function(e){const t=c(this,B)[0][this.routeIndex][1][e],n=k(this,ne,Wt).call(this,t);return n?/\%/.test(n)?gn(n):n:void 0},ar=function(){const e={},t=Object.keys(c(this,B)[0][this.routeIndex][1]);for(const n of t){const r=k(this,ne,Wt).call(this,c(this,B)[0][this.routeIndex][1][n]);r&&typeof r=="string"&&(e[n]=/\%/.test(r)?gn(r):r)}return e},Wt=function(e){return c(this,B)[1]?c(this,B)[1][e]:e},oe=new WeakMap,Sn),go="text/plain; charset=UTF-8",Dt=(e,t={})=>{for(const n of Object.keys(t))e.set(n,t[n]);return e},Ke,Je,X,ve,Q,I,P,M,Y,Ve,Re,Oe,qe,Ze,$,F,wn,vo=(wn=class{constructor(e,t){E(this,$);E(this,Ke);E(this,Je);w(this,"env",{});E(this,X);w(this,"finalized",!1);w(this,"error");E(this,ve,200);E(this,Q);E(this,I);E(this,P);E(this,M);E(this,Y,!0);E(this,Ve);E(this,Re);E(this,Oe);E(this,qe);E(this,Ze);w(this,"render",(...e)=>(c(this,Re)??v(this,Re,t=>this.html(t)),c(this,Re).call(this,...e)));w(this,"setLayout",e=>v(this,Ve,e));w(this,"getLayout",()=>c(this,Ve));w(this,"setRenderer",e=>{v(this,Re,e)});w(this,"header",(e,t,n)=>{if(this.finalized&&v(this,M,new Response(c(this,M).body,c(this,M))),t===void 0){c(this,I)?c(this,I).delete(e):c(this,P)&&delete c(this,P)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}n!=null&&n.append?(c(this,I)||(v(this,Y,!1),v(this,I,new Headers(c(this,P))),v(this,P,{})),c(this,I).append(e,t)):c(this,I)?c(this,I).set(e,t):(c(this,P)??v(this,P,{}),c(this,P)[e.toLowerCase()]=t),this.finalized&&(n!=null&&n.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});w(this,"status",e=>{v(this,Y,!1),v(this,ve,e)});w(this,"set",(e,t)=>{c(this,X)??v(this,X,new Map),c(this,X).set(e,t)});w(this,"get",e=>c(this,X)?c(this,X).get(e):void 0);w(this,"newResponse",(...e)=>k(this,$,F).call(this,...e));w(this,"body",(e,t,n)=>typeof t=="number"?k(this,$,F).call(this,e,t,n):k(this,$,F).call(this,e,t));w(this,"text",(e,t,n)=>{if(!c(this,P)){if(c(this,Y)&&!n&&!t)return new Response(e);v(this,P,{})}return c(this,P)["content-type"]=go,typeof t=="number"?k(this,$,F).call(this,e,t,n):k(this,$,F).call(this,e,t)});w(this,"json",(e,t,n)=>{const r=JSON.stringify(e);return c(this,P)??v(this,P,{}),c(this,P)["content-type"]="application/json",typeof t=="number"?k(this,$,F).call(this,r,t,n):k(this,$,F).call(this,r,t)});w(this,"html",(e,t,n)=>(c(this,P)??v(this,P,{}),c(this,P)["content-type"]="text/html; charset=UTF-8",typeof e=="object"?Tn(e,Pn.Stringify,!1,{}).then(r=>typeof t=="number"?k(this,$,F).call(this,r,t,n):k(this,$,F).call(this,r,t)):typeof t=="number"?k(this,$,F).call(this,e,t,n):k(this,$,F).call(this,e,t)));w(this,"redirect",(e,t)=>(c(this,I)??v(this,I,new Headers),c(this,I).set("Location",String(e)),this.newResponse(null,t??302)));w(this,"notFound",()=>(c(this,Oe)??v(this,Oe,()=>new Response),c(this,Oe).call(this,this)));v(this,Ke,e),t&&(v(this,Q,t.executionCtx),this.env=t.env,v(this,Oe,t.notFoundHandler),v(this,Ze,t.path),v(this,qe,t.matchResult))}get req(){return c(this,Je)??v(this,Je,new sr(c(this,Ke),c(this,Ze),c(this,qe))),c(this,Je)}get event(){if(c(this,Q)&&"respondWith"in c(this,Q))return c(this,Q);throw Error("This context has no FetchEvent")}get executionCtx(){if(c(this,Q))return c(this,Q);throw Error("This context has no ExecutionContext")}get res(){return v(this,Y,!1),c(this,M)||v(this,M,new Response("404 Not Found",{status:404}))}set res(e){if(v(this,Y,!1),c(this,M)&&e){e=new Response(e.body,e);for(const[t,n]of c(this,M).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=c(this,M).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of r)e.headers.append("set-cookie",s)}else e.headers.set(t,n)}v(this,M,e),this.finalized=!0}get var(){return c(this,X)?Object.fromEntries(c(this,X)):{}}},Ke=new WeakMap,Je=new WeakMap,X=new WeakMap,ve=new WeakMap,Q=new WeakMap,I=new WeakMap,P=new WeakMap,M=new WeakMap,Y=new WeakMap,Ve=new WeakMap,Re=new WeakMap,Oe=new WeakMap,qe=new WeakMap,Ze=new WeakMap,$=new WeakSet,F=function(e,t,n){if(c(this,Y)&&!n&&!t&&c(this,ve)===200)return new Response(e,{headers:c(this,P)});if(t&&typeof t!="number"){const s=new Headers(t.headers);c(this,I)&&c(this,I).forEach((a,i)=>{i==="set-cookie"?s.append(i,a):s.set(i,a)});const o=Dt(s,c(this,P));return new Response(e,{headers:o,status:t.status??c(this,ve)})}const r=typeof t=="number"?t:c(this,ve);c(this,P)??v(this,P,{}),c(this,I)??v(this,I,new Headers),Dt(c(this,I),c(this,P)),c(this,M)&&(c(this,M).headers.forEach((s,o)=>{var a,i;o==="set-cookie"?(a=c(this,I))==null||a.append(o,s):(i=c(this,I))==null||i.set(o,s)}),Dt(c(this,I),c(this,P))),n??(n={});for(const[s,o]of Object.entries(n))if(typeof o=="string")c(this,I).set(s,o);else{c(this,I).delete(s);for(const a of o)c(this,I).append(s,a)}return new Response(e,{status:r,headers:c(this,I)})},wn),j="ALL",bo="all",yo=["get","post","put","delete","options","patch"],ir="Can not add a route since the matcher is already built.",lr=class extends Error{},So=e=>e.text("404 Not Found",404),vn=(e,t)=>{if("getResponse"in e){const n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text("Internal Server Error",500)},G,L,ur,z,me,ct,ut,An,cr=(An=class{constructor(t={}){E(this,L);w(this,"get");w(this,"post");w(this,"put");w(this,"delete");w(this,"options");w(this,"patch");w(this,"all");w(this,"on");w(this,"use");w(this,"router");w(this,"getPath");w(this,"_basePath","/");E(this,G,"/");w(this,"routes",[]);E(this,z,So);w(this,"errorHandler",vn);w(this,"onError",t=>(this.errorHandler=t,this));w(this,"notFound",t=>(v(this,z,t),this));w(this,"fetch",(t,...n)=>k(this,L,ut).call(this,t,n[1],n[0],t.method));w(this,"request",(t,n,r,s)=>t instanceof Request?this.fetch(n?new Request(t,n):t,r,s):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${xe("/",t)}`,n),r,s)));w(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(k(this,L,ut).call(this,t.request,t,void 0,t.request.method))})});[...yo,bo].forEach(o=>{this[o]=(a,...i)=>(typeof a=="string"?v(this,G,a):k(this,L,me).call(this,o,c(this,G),a),i.forEach(l=>{k(this,L,me).call(this,o,c(this,G),l)}),this)}),this.on=(o,a,...i)=>{for(const l of[a].flat()){v(this,G,l);for(const u of[o].flat())i.map(d=>{k(this,L,me).call(this,u.toUpperCase(),c(this,G),d)})}return this},this.use=(o,...a)=>(typeof o=="string"?v(this,G,o):(v(this,G,"*"),a.unshift(o)),a.forEach(i=>{k(this,L,me).call(this,j,c(this,G),i)}),this);const{strict:r,...s}=t;Object.assign(this,s),this.getPath=r??!0?t.getPath??er:ho}route(t,n){const r=this.basePath(t);return n.routes.map(s=>{var a;let o;n.errorHandler===vn?o=s.handler:(o=async(i,l)=>(await pn([],n.errorHandler)(i,()=>s.handler(i,l))).res,o[Pt]=s.handler),k(a=r,L,me).call(a,s.method,s.path,o)}),this}basePath(t){const n=k(this,L,ur).call(this);return n._basePath=xe(this._basePath,t),n}mount(t,n,r){let s,o;r&&(typeof r=="function"?o=r:(o=r.optionHandler,r.replaceRequest===!1?s=l=>l:s=r.replaceRequest));const a=o?l=>{const u=o(l);return Array.isArray(u)?u:[u]}:l=>{let u;try{u=l.executionCtx}catch{}return[l.env,u]};s||(s=(()=>{const l=xe(this._basePath,t),u=l==="/"?0:l.length;return d=>{const f=new URL(d.url);return f.pathname=f.pathname.slice(u)||"/",new Request(f,d)}})());const i=async(l,u)=>{const d=await n(s(l.req.raw),...a(l));if(d)return d;await u()};return k(this,L,me).call(this,j,xe(t,"*"),i),this}},G=new WeakMap,L=new WeakSet,ur=function(){const t=new cr({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,v(t,z,c(this,z)),t.routes=this.routes,t},z=new WeakMap,me=function(t,n,r){t=t.toUpperCase(),n=xe(this._basePath,n);const s={path:n,method:t,handler:r};this.router.add(t,n,[r,s]),this.routes.push(s)},ct=function(t,n){if(t instanceof Error)return this.errorHandler(t,n);throw t},ut=function(t,n,r,s){if(s==="HEAD")return(async()=>new Response(null,await k(this,L,ut).call(this,t,n,r,"GET")))();const o=this.getPath(t,{env:r}),a=this.router.match(s,o),i=new vo(t,{path:o,matchResult:a,env:r,executionCtx:n,notFoundHandler:c(this,z)});if(a[0].length===1){let u;try{u=a[0][0][0][0](i,async()=>{i.res=await c(this,z).call(this,i)})}catch(d){return k(this,L,ct).call(this,d,i)}return u instanceof Promise?u.then(d=>d||(i.finalized?i.res:c(this,z).call(this,i))).catch(d=>k(this,L,ct).call(this,d,i)):u??c(this,z).call(this,i)}const l=pn(a[0],this.errorHandler,c(this,z));return(async()=>{try{const u=await l(i);if(!u.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return u.res}catch(u){return k(this,L,ct).call(this,u,i)}})()},An),mt="[^/]+",He=".*",Be="(?:|/.*)",We=Symbol(),wo=new Set(".\\+*[^]$()");function Ao(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===He||e===Be?1:t===He||t===Be?-1:e===mt?1:t===mt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var be,ye,U,Cn,Ft=(Cn=class{constructor(){E(this,be);E(this,ye);E(this,U,Object.create(null))}insert(t,n,r,s,o){if(t.length===0){if(c(this,be)!==void 0)throw We;if(o)return;v(this,be,n);return}const[a,...i]=t,l=a==="*"?i.length===0?["","",He]:["","",mt]:a==="/*"?["","",Be]:a.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let u;if(l){const d=l[1];let f=l[2]||mt;if(d&&l[2]&&(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f)))throw We;if(u=c(this,U)[f],!u){if(Object.keys(c(this,U)).some(h=>h!==He&&h!==Be))throw We;if(o)return;u=c(this,U)[f]=new Ft,d!==""&&v(u,ye,s.varIndex++)}!o&&d!==""&&r.push([d,c(u,ye)])}else if(u=c(this,U)[a],!u){if(Object.keys(c(this,U)).some(d=>d.length>1&&d!==He&&d!==Be))throw We;if(o)return;u=c(this,U)[a]=new Ft}u.insert(i,n,r,s,o)}buildRegExpStr(){const n=Object.keys(c(this,U)).sort(Ao).map(r=>{const s=c(this,U)[r];return(typeof c(s,ye)=="number"?`(${r})@${c(s,ye)}`:wo.has(r)?`\\${r}`:r)+s.buildRegExpStr()});return typeof c(this,be)=="number"&&n.unshift(`#${c(this,be)}`),n.length===0?"":n.length===1?n[0]:"(?:"+n.join("|")+")"}},be=new WeakMap,ye=new WeakMap,U=new WeakMap,Cn),gt,Xe,En,Co=(En=class{constructor(){E(this,gt,{varIndex:0});E(this,Xe,new Ft)}insert(e,t,n){const r=[],s=[];for(let a=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const u=`@\\${a}`;return s[a]=[u,l],a++,i=!0,u}),!i)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let a=s.length-1;a>=0;a--){const[i]=s[a];for(let l=o.length-1;l>=0;l--)if(o[l].indexOf(i)!==-1){o[l]=o[l].replace(i,s[a][1]);break}}return c(this,Xe).insert(o,t,r,c(this,gt),n),r}buildRegExp(){let e=c(this,Xe).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,o,a)=>o!==void 0?(n[++t]=Number(o),"$()"):(a!==void 0&&(r[Number(a)]=++t),"")),[new RegExp(`^${e}`),n,r]}},gt=new WeakMap,Xe=new WeakMap,En),dr=[],Eo=[/^$/,[],Object.create(null)],dt=Object.create(null);function fr(e){return dt[e]??(dt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,n)=>n?`\\${n}`:"(?:|/.*)")}$`))}function xo(){dt=Object.create(null)}function ko(e){var u;const t=new Co,n=[];if(e.length===0)return Eo;const r=e.map(d=>[!/\*|\/:/.test(d[0]),...d]).sort(([d,f],[h,g])=>d?1:h?-1:f.length-g.length),s=Object.create(null);for(let d=0,f=-1,h=r.length;d<h;d++){const[g,b,m]=r[d];g?s[b]=[m.map(([S])=>[S,Object.create(null)]),dr]:f++;let y;try{y=t.insert(b,f,g)}catch(S){throw S===We?new lr(b):S}g||(n[f]=m.map(([S,A])=>{const C=Object.create(null);for(A-=1;A>=0;A--){const[x,R]=y[A];C[x]=R}return[S,C]}))}const[o,a,i]=t.buildRegExp();for(let d=0,f=n.length;d<f;d++)for(let h=0,g=n[d].length;h<g;h++){const b=(u=n[d][h])==null?void 0:u[1];if(!b)continue;const m=Object.keys(b);for(let y=0,S=m.length;y<S;y++)b[m[y]]=i[b[m[y]]]}const l=[];for(const d in a)l[d]=n[a[d]];return[o,l,s]}function Ee(e,t){if(e){for(const n of Object.keys(e).sort((r,s)=>s.length-r.length))if(fr(n).test(t))return[...e[n]]}}var ae,ie,Ne,hr,pr,xn,Ro=(xn=class{constructor(){E(this,Ne);w(this,"name","RegExpRouter");E(this,ae);E(this,ie);v(this,ae,{[j]:Object.create(null)}),v(this,ie,{[j]:Object.create(null)})}add(e,t,n){var i;const r=c(this,ae),s=c(this,ie);if(!r||!s)throw new Error(ir);r[e]||[r,s].forEach(l=>{l[e]=Object.create(null),Object.keys(l[j]).forEach(u=>{l[e][u]=[...l[j][u]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=fr(t);e===j?Object.keys(r).forEach(u=>{var d;(d=r[u])[t]||(d[t]=Ee(r[u],t)||Ee(r[j],t)||[])}):(i=r[e])[t]||(i[t]=Ee(r[e],t)||Ee(r[j],t)||[]),Object.keys(r).forEach(u=>{(e===j||e===u)&&Object.keys(r[u]).forEach(d=>{l.test(d)&&r[u][d].push([n,o])})}),Object.keys(s).forEach(u=>{(e===j||e===u)&&Object.keys(s[u]).forEach(d=>l.test(d)&&s[u][d].push([n,o]))});return}const a=tr(t)||[t];for(let l=0,u=a.length;l<u;l++){const d=a[l];Object.keys(s).forEach(f=>{var h;(e===j||e===f)&&((h=s[f])[d]||(h[d]=[...Ee(r[f],d)||Ee(r[j],d)||[]]),s[f][d].push([n,o-u+l+1]))})}}match(e,t){xo();const n=k(this,Ne,hr).call(this);return this.match=(r,s)=>{const o=n[r]||n[j],a=o[2][s];if(a)return a;const i=s.match(o[0]);if(!i)return[[],dr];const l=i.indexOf("",1);return[o[1][l],i]},this.match(e,t)}},ae=new WeakMap,ie=new WeakMap,Ne=new WeakSet,hr=function(){const e=Object.create(null);return Object.keys(c(this,ie)).concat(Object.keys(c(this,ae))).forEach(t=>{e[t]||(e[t]=k(this,Ne,pr).call(this,t))}),v(this,ae,v(this,ie,void 0)),e},pr=function(e){const t=[];let n=e===j;return[c(this,ae),c(this,ie)].forEach(r=>{const s=r[e]?Object.keys(r[e]).map(o=>[o,r[e][o]]):[];s.length!==0?(n||(n=!0),t.push(...s)):e!==j&&t.push(...Object.keys(r[j]).map(o=>[o,r[j][o]]))}),n?ko(t):null},xn),le,ee,kn,Oo=(kn=class{constructor(e){w(this,"name","SmartRouter");E(this,le,[]);E(this,ee,[]);v(this,le,e.routers)}add(e,t,n){if(!c(this,ee))throw new Error(ir);c(this,ee).push([e,t,n])}match(e,t){if(!c(this,ee))throw new Error("Fatal error");const n=c(this,le),r=c(this,ee),s=n.length;let o=0,a;for(;o<s;o++){const i=n[o];try{for(let l=0,u=r.length;l<u;l++)i.add(...r[l]);a=i.match(e,t)}catch(l){if(l instanceof lr)continue;throw l}this.match=i.match.bind(i),v(this,le,[i]),v(this,ee,void 0);break}if(o===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,a}get activeRouter(){if(c(this,ee)||c(this,le).length!==1)throw new Error("No active router has been determined yet.");return c(this,le)[0]}},le=new WeakMap,ee=new WeakMap,kn),_e=Object.create(null),ce,_,Se,De,N,te,ge,Rn,mr=(Rn=class{constructor(e,t,n){E(this,te);E(this,ce);E(this,_);E(this,Se);E(this,De,0);E(this,N,_e);if(v(this,_,n||Object.create(null)),v(this,ce,[]),e&&t){const r=Object.create(null);r[e]={handler:t,possibleKeys:[],score:0},v(this,ce,[r])}v(this,Se,[])}insert(e,t,n){v(this,De,++Xt(this,De)._);let r=this;const s=lo(t),o=[];for(let l=0,u=s.length;l<u;l++){const d=s[l],f=s[l+1],h=mn(d,f),g=Array.isArray(h)?h[0]:d;if(Object.keys(c(r,_)).includes(g)){r=c(r,_)[g];const b=mn(d,f);b&&o.push(b[1]);continue}c(r,_)[g]=new mr,h&&(c(r,Se).push(h),o.push(h[1])),r=c(r,_)[g]}const a=Object.create(null),i={handler:n,possibleKeys:o.filter((l,u,d)=>d.indexOf(l)===u),score:c(this,De)};return a[e]=i,c(r,ce).push(a),r}search(e,t){var i;const n=[];v(this,N,_e);let s=[this];const o=Qn(t),a=[];for(let l=0,u=o.length;l<u;l++){const d=o[l],f=l===u-1,h=[];for(let g=0,b=s.length;g<b;g++){const m=s[g],y=c(m,_)[d];y&&(v(y,N,c(m,N)),f?(c(y,_)["*"]&&n.push(...k(this,te,ge).call(this,c(y,_)["*"],e,c(m,N))),n.push(...k(this,te,ge).call(this,y,e,c(m,N)))):h.push(y));for(let S=0,A=c(m,Se).length;S<A;S++){const C=c(m,Se)[S],x=c(m,N)===_e?{}:{...c(m,N)};if(C==="*"){const D=c(m,_)["*"];D&&(n.push(...k(this,te,ge).call(this,D,e,c(m,N))),v(D,N,x),h.push(D));continue}if(d==="")continue;const[R,J,V]=C,W=c(m,_)[R],vt=o.slice(l).join("/");if(V instanceof RegExp){const D=V.exec(vt);if(D){if(x[J]=D[0],n.push(...k(this,te,ge).call(this,W,e,c(m,N),x)),Object.keys(c(W,_)).length){v(W,N,x);const T=((i=D[0].match(/\//))==null?void 0:i.length)??0;(a[T]||(a[T]=[])).push(W)}continue}}(V===!0||V.test(d))&&(x[J]=d,f?(n.push(...k(this,te,ge).call(this,W,e,x,c(m,N))),c(W,_)["*"]&&n.push(...k(this,te,ge).call(this,c(W,_)["*"],e,x,c(m,N)))):(v(W,N,x),h.push(W)))}}s=h.concat(a.shift()??[])}return n.length>1&&n.sort((l,u)=>l.score-u.score),[n.map(({handler:l,params:u})=>[l,u])]}},ce=new WeakMap,_=new WeakMap,Se=new WeakMap,De=new WeakMap,N=new WeakMap,te=new WeakSet,ge=function(e,t,n,r){const s=[];for(let o=0,a=c(e,ce).length;o<a;o++){const i=c(e,ce)[o],l=i[t]||i[j],u={};if(l!==void 0&&(l.params=Object.create(null),s.push(l),n!==_e||r&&r!==_e))for(let d=0,f=l.possibleKeys.length;d<f;d++){const h=l.possibleKeys[d],g=u[l.score];l.params[h]=r!=null&&r[h]&&!g?r[h]:n[h]??(r==null?void 0:r[h]),u[l.score]=!0}}return s},Rn),we,On,Do=(On=class{constructor(){w(this,"name","TrieRouter");E(this,we);v(this,we,new mr)}add(e,t,n){const r=tr(t);if(r){for(let s=0,o=r.length;s<o;s++)c(this,we).insert(e,r[s],n);return}c(this,we).insert(e,t,n)}match(e,t){return c(this,we).search(e,t)}},we=new WeakMap,On),ft=class extends cr{constructor(e={}){super(e),this.router=e.router??new Oo({routers:[new Ro,new Do]})}},Io=e=>e;const gr=new Rr,bn=e=>(e=e.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\((.+?)\)/g,"").replace(/\[(.+?)\]/g,":$1").replace(/\/\//g,"/"),/^\//.test(e)?e:"/"+e),It=e=>{const t={};for(const[n,r]of Object.entries(e)){const s=n.split("/"),o=s.pop(),a=s.join("/");t[a]||(t[a]={}),o&&(t[a][o]=r)}for(const[n,r]of Object.entries(t)){const s=Object.entries(r).sort(([o],[a])=>o[0]==="["&&a[0]!=="["?1:o[0]!=="["&&a[0]==="["?-1:o.localeCompare(a));t[n]=Object.fromEntries(s)}return t},Po=e=>Object.keys(e).sort((n,r)=>{const s=n.split("/").length,o=r.split("/").length;return s-o||r.localeCompare(n)}).map(n=>({[n]:e[n]})),jo=e=>{const t={};for(const r of Object.keys(e)){const s=r.split("/");s.pop();const o=s.join("/");t[o]||(t[o]=[]),t[o].includes(r)||t[o].push(r)}const n=Object.keys(t).sort((r,s)=>s.length-r.length);for(const r of n)for(const s of n)if(s.startsWith(r)&&s!==r){const o=new Set([...t[s],...t[r]]);t[s]=[...o]}return t},vr="_404.tsx",Lo="_error.tsx",To=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],No=e=>{const t=e.root,n=new RegExp(`^${t}`),r=y=>bn(y.replace(n,"")),s=new ft;s.use(async function(S,A){await gr.run(S,()=>A())});const o=e.NOT_FOUND,a=It(o),i=e.ERROR,l=It(i),u=e.RENDERER,d=jo(u),f=e.MIDDLEWARE,h=e.ROUTES,g=Po(It(h)),b=(y,S)=>{let A=S[y]??[];const C=R=>(A=S[R.join("/")],A||(R.pop(),R.length&&C(R)),A??[]),x=y.split("/");return A=C(x),A.sort((R,J)=>R.split("/").length-J.split("/").length),A},m={};for(const y of g)for(const[S,A]of Object.entries(y)){const C=new ft;let x=!1;const R=_o(S,a);R&&C.use(async(D,T)=>{if(await T(),D.res.status===404){const fe=await R(D),q=new Response(fe.body,{status:404,headers:fe.headers});D.res=q}}),b(S,d).map(D=>{const T=u[D];T[de]&&(x=!0);const q=T.default;q&&C.all("*",q)});const V=Object.keys(f).find(D=>{const T=S.replaceAll("[","\\[").replaceAll("]","\\]").replaceAll("(","\\(").replaceAll(")","\\)");return new RegExp(T+"/_middleware.tsx?").test(D)});if(V){const D=f[V];D.default&&C.use(...D.default)}for(const[D,T]of Object.entries(A)){const fe=T[de],q=Io(async function(se,Er){se.set(de,fe?!0:x),await Er()}),re=T.default,he=bn(D);re&&"fetch"in re&&(C.use(q),C.route(he,re));for(const pe of To){const se=T[pe];se&&(C.on(pe,he,q),C.on(pe,he,...se))}re&&Array.isArray(re)&&(C.get(he,q),C.get(he,...re)),typeof re=="function"&&(C.get(he,q),C.get(he,async pe=>{const se=await re(pe);return se instanceof Response?se:pe.render(se,T)}))}const W=Mo(S,l);W&&(m[S]=W);for(const[D,T]of Object.entries(m))new RegExp(`^${D}`).test(S)&&T&&C.onError(T);let vt=r(S);s.route(vt,C)}for(const y of g.reverse()){const S=Object.entries(y)[0][0],A=new ft;$o(A,S,a);const C=r(S);s.route(C,A)}return s};function _o(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[vr];if(s)return s.default}}function $o(e,t,n){for(const[r,s]of Object.entries(n))if(t===r){const o=s[vr];if(o){const a=o.default;o[de]&&e.use("*",(l,u)=>(l.set(de,!0),u())),e.get("*",l=>(l.status(404),a(l)))}}}function Mo(e,t){for(const[n,r]of Object.entries(t))if(e===n){const s=r[Lo];if(s){const o=s.default;if(o)return async(i,l)=>{const u=s[de];return u&&l.set(de,u),l.status(500),o(i,l)}}}}const Wo=e=>No({root:"/app/routes",NOT_FOUND:Object.assign({"/app/routes/_404.tsx":Lr}),ERROR:Object.assign({"/app/routes/_error.tsx":Nr}),RENDERER:Object.assign({"/app/routes/_renderer.tsx":xs}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({"/app/routes/index.tsx":no})}),Fo=({children:e})=>{const t=gr.getStore();if(!t)throw new Error("No context found");return p(Pe,{children:t.get(de)&&e})},Ho={"_honox-island-0Lm4JOhJ.js":{file:"static/honox-island-0Lm4JOhJ.js",name:"honox-island",imports:["app/client.ts"]},"_index-BJLlL6Rz.js":{file:"static/index-BJLlL6Rz.js",name:"index"},"app/client.ts":{file:"static/client-D8A9XoET.js",name:"client",src:"app/client.ts",isEntry:!0,dynamicImports:["app/islands/CollapsibleSection.tsx","app/islands/DownloadSection.tsx","app/islands/SectionGroup.tsx","node_modules/honox/dist/client/runtime.js","node_modules/honox/dist/client/runtime.js"]},"app/islands/CollapsibleSection.tsx":{file:"static/CollapsibleSection-B4ZbUkJt.js",name:"CollapsibleSection",src:"app/islands/CollapsibleSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-0Lm4JOhJ.js","_index-BJLlL6Rz.js"]},"app/islands/DownloadSection.tsx":{file:"static/DownloadSection-B4ax2wN0.js",name:"DownloadSection",src:"app/islands/DownloadSection.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-0Lm4JOhJ.js"]},"app/islands/SectionGroup.tsx":{file:"static/SectionGroup-uW_hRWAy.js",name:"SectionGroup",src:"app/islands/SectionGroup.tsx",isDynamicEntry:!0,imports:["app/client.ts","_honox-island-0Lm4JOhJ.js","_index-BJLlL6Rz.js"]},"app/style.css":{file:"static/style-CgR-KQJI.css",src:"app/style.css",isEntry:!0},"node_modules/honox/dist/client/runtime.js":{file:"static/runtime-DRpvLmA3.js",name:"runtime",src:"node_modules/honox/dist/client/runtime.js",isDynamicEntry:!0,imports:["app/client.ts"]}},br=Object.freeze(Object.defineProperty({__proto__:null,default:Ho},Symbol.toStringTag,{value:"Module"})),yr=e=>e.endsWith("/")?e:e+"/",Bo=e=>{const t=e.src;if(e.prod??!0){let n=e.manifest;if(!n){const r=Object.assign({"/dist/.vite/manifest.json":br});for(const[,s]of Object.entries(r))if(s.default){n=s.default;break}}if(n){const r=n[t.replace(/^\//,"")];if(r)return p(Fo,{children:p("script",{type:"module",async:!!e.async,src:`${yr("/honox-resume-template/")}${r.file}`,nonce:e.nonce})})}return p(Pe,{})}else return p("script",{type:"module",async:!!e.async,src:t,nonce:e.nonce})},Go=e=>{let{href:t,prod:n,manifest:r,...s}=e;if(t)if(n??!0){if(!r){const o=Object.assign({"/dist/.vite/manifest.json":br});for(const[,a]of Object.entries(o))if(a.default){r=a.default;break}}if(r){const o=r[t.replace(/^\//,"")];if(o)return t.startsWith("/")?p("link",{href:`${yr("/honox-resume-template/")}${o.file}`,...s}):p("link",{href:o.file,...s})}return p(Pe,{})}else return p("link",{href:t,...s});return p("link",{...s})},Sr=Wo();Pr(Sr);const Ht=new ft,wr=Object.assign({"/app/server.ts":Sr});let Ar=!1;for(const[,e]of Object.entries(wr))e&&(Ht.all("*",t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ht.notFound(t=>{let n;try{n=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,n)}),Ar=!0);if(!Ar)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");const Cr={},yn=new Set;for(const[e,t]of Object.entries(wr))for(const[n,r]of Object.entries(t))if(n!=="fetch"){if(yn.has(n))throw new Error(`Handler "${n}" is defined in multiple entry files. Please ensure each handler (except fetch) is defined only once.`);yn.add(n),Cr[n]=r}const Vo={...Cr,fetch:Ht.fetch};export{Vo as default};
