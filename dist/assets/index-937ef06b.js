var le=Object.defineProperty;var de=(r,e,n)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var P=(r,e,n)=>(de(r,typeof e!="symbol"?e+"":e,n),n),R=(r,e,n)=>{if(!e.has(r))throw TypeError("Cannot "+n)};var i=(r,e,n)=>(R(r,e,"read from private field"),n?n.call(r):e.get(r)),p=(r,e,n)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,n)},m=(r,e,n,s)=>(R(r,e,"write to private field"),s?s.call(r,n):e.set(r,n),n);import"https://cdn.plot.ly/plotly-2.20.0.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const S=[],z=[];function ue(r,e){e.add(r),r.dependencies.add(e)}function he(r){for(const e of r.dependencies)e.delete(r);r.dependencies.clear()}function _(r,e){const n=t=>{he(s),S.push(s);try{r(t)}finally{S.pop()}};e||(e=r.name);const s={name:e,execute:n,dependencies:new Set};return n(),!0}function G(r,e={}){const n=new Set,s=new Set,t=e.name,o=()=>{const l=S[S.length-1];return l&&(!n.has(l)&&e.onSubscriptionAdded&&e.onSubscriptionAdded(l.name),ue(l,n)),r},c=(...l)=>{if(t){const a=z[S.length-1];a&&a!==t&&!s.has(a)&&(s.add(a),e.onDependencyAdded&&e.onDependencyAdded(a));const u=S[S.length-1];u&&t!==u.name&&!n.has(u)&&e.onDependencyAdded&&e.onDependencyAdded(u.name)}z.push(t),Array.from(n).forEach(a=>{a.execute(...l)}),z.pop()};return{get:o,set:l=>(c(r=l),r),run:c,subscriptions:n}}function me(r,e={}){const n=G(void 0,e),s=(...t)=>n.set(r(...t));return _(s,e.name),e.operators?{...n,run:s}:n.get}function pe(r){return typeof r=="function"?"/Function("+r.toString()+")/":r}const U=r=>{if(typeof r=="string"&&r.startsWith("/Function(")&&r.endsWith(")/")){let e=r.substring(10,r.length-2);return e[0]!=="("&&e.slice(0,8)!=="function"&&e.slice(0,5)!=="class"&&(e=`function ${e}`),(0,eval)("("+e+")")}return r},fe=r=>JSON.parse(r,(e,n)=>U(n));function ge(r){var n;return typeof r=="function"?r.prototype?(n=Object.getOwnPropertyDescriptor(r,"prototype"))!=null&&n.writable?"function":"class":r.constructor.name==="AsyncFunction"?"async":"arrow":""}const M={},B=["Object","Array","Map","Set"];function q(r){var n;var e=[];if(r)do{const s=(n=r.constructor)==null?void 0:n.name,t=B.includes(s);B.includes(s)&&(M[s]||(M[s]=[...Object.getOwnPropertyNames(globalThis[s].prototype)])),Object.getOwnPropertyNames(r).forEach(function(o){o!=="constructor"&&(t&&M[s].includes(o)||e.indexOf(o)===-1&&e.push(o))})}while(r=Object.getPrototypeOf(r));return e}var w,E,f,y,x,b,T,I,v;const V=class{constructor(e={}){p(this,w,void 0);p(this,E,void 0);p(this,f,void 0);p(this,y,void 0);p(this,x,void 0);p(this,b,void 0);p(this,T,void 0);p(this,I,void 0);p(this,v,void 0);m(this,w,{}),m(this,E,{}),m(this,f,{}),m(this,y,{}),this.nodes={},this.ignore=[],this.onSubscriptionAdded=()=>{},m(this,x,(s,t)=>{let o=s,c=t;if(i(this,f).base&&(o=`${i(this,f).base}.${s}`,c=`${i(this,f).base}.${t}`),i(this,w)[s]||(i(this,w)[s]=new Set),i(this,w)[s].add(t),i(this,b).call(this,s)){for(const d in i(this,w))i(this,w)[d].has(s)&&i(this,x).call(this,d,t);return}i(this,b).call(this,t)||(i(this,E)[s]||(i(this,E)[s]=new Set),i(this,E)[s].has(t)||(i(this,E)[s].add(t),this.onSubscriptionAdded(o,c)))}),this.export=({json:s=!1}={})=>{const t={};for(const o in this.nodes)i(this,y)[o]instanceof V?t[o]=i(this,y)[o].export({json:s}):t[o]=typeof i(this,y)[o]=="function"?i(this,y)[o]:this.nodes[o],s&&(t[o]=pe(t[o]));return t},m(this,b,s=>s[0]==="$"),m(this,T,(s,t)=>{const o=typeof s=="string",c=o?s:t,d=o?t:s,l={...i(this,f),base:i(this,f).base?`${i(this,f).base}.${c}`:c},a=new V(l);i(this,y)[c]=a,a.load(d);const u={};for(const h in a.nodes)i(this,v).call(this,h,{get:()=>a.nodes[h],set:$=>a.nodes[h]=$},u);return o&&i(this,v).call(this,c,{get:()=>u}),u}),this.toJSON=()=>this.export({json:!0}),m(this,I,(s,t)=>me((...o)=>s.call(this.nodes,...o),{operators:!0,name:t,onDependencyAdded:o=>i(this,x).call(this,o,t)})),m(this,v,(s,t,o=this.nodes)=>(Object.defineProperty(o,s,{...t,enumerable:!0,configurable:!1}),t)),m(this,f,{...e}),Object.keys(i(this,f)).forEach(s=>{Object.defineProperty(this,s,{get:()=>i(this,f)[s],set:t=>i(this,f)[s]=t})})}get subscriptions(){const e=Object.entries(i(this,y)).filter(([s,t])=>t instanceof V),n={...i(this,E)};return e.forEach(([s,t])=>n[s]=t.subscriptions),n}add(e,n){if(!this.ignore.includes(n)){if(typeof e=="object")return this.load(e);{const s=e;i(this,y)[s]=n;let t={};const o=ge(n);if(o==="class"){const c=n,d=(...l)=>i(this,T).call(this,new c(...l),s);t.get=()=>d}else if(o){let c;const d=u=>c=i(this,I).call(this,u,s);d(n);const l=()=>c.get(),a=(...u)=>{const h=u.length;return h===1&&u[0]===void 0?l():h?c.run(...u):l()};t.get=()=>a,t.set=d}else{const c=G(n,{onSubscriptionAdded:d=>i(this,x).call(this,s,d)});t.get=()=>c.get(),t.set=c.set}return i(this,b).call(this,s)||(i(this,E)[s]=new Set),i(this,v).call(this,s,t)}}}load(e={}){const n=typeof e=="string"?fe(e):e;return q(n).sort((t,o)=>i(this,b).call(this,t)&&!i(this,b).call(this,o)?1:!i(this,b).call(this,t)&&i(this,b).call(this,o)?-1:0).forEach(t=>{const o=n[t];o&&typeof o=="object"&&!Array.isArray(o)?i(this,T).call(this,t,o):this.add(t,U(o))}),!0}};let C=V;w=new WeakMap,E=new WeakMap,f=new WeakMap,y=new WeakMap,x=new WeakMap,b=new WeakMap,T=new WeakMap,I=new WeakMap,v=new WeakMap;var g,L;class O extends HTMLElement{constructor(n={}){super();p(this,g,void 0);p(this,L,void 0);m(this,L,!1),this.initialize=()=>{if(i(this,L))return;q(this).forEach(t=>{if(t==="constructor"||t==="connectedCallback"||t in HTMLElement.prototype)return;t in i(this,g).nodes?i(this,g).nodes[t]=this[t]:i(this,g).add(t,this[t])});for(let t in i(this,g).nodes)Object.defineProperty(this,t,{get:()=>i(this,g).nodes[t],set:o=>i(this,g).nodes[t]=o});m(this,L,!0)},n instanceof C?m(this,g,n):(m(this,g,new C({ignore:[this.initialize]})),i(this,g).load(n))}connectedCallback(){this.initialize();let n=this.render()??[];Array.isArray(n)||(n=[n]),n.forEach(s=>{s=s.bind(this);let t;_(()=>{const o=s();o!==t&&(t?t.replaceWith(o):this.append(o),t=o)})})}render(){return[]}}g=new WeakMap,L=new WeakMap;customElements.define("commonwealth-element",O);var k;class Y extends O{constructor(n){super(n);p(this,k,document.createElement("section"));P(this,"body",()=>i(this,k))}nav(){const n=document.createElement("nav"),s=document.createElement("h2");s.innerText=this.header;const o=new URLSearchParams(window.location.search).get("page"),c=document.createElement("div"),d=this.pages.map(({label:l,element:a},u)=>{const h=document.createElement("a");h.style.marginLeft="15px",h.href="javascript:undefined",h.innerText=l;const $=l.toLowerCase();return h.onclick=()=>{const j=this.body(),N=j.children[0];N?N.replaceWith(a):j.append(a),window.history.pushState({},"",`?page=${$}`)},u===0&&(s.onclick=h.onclick),$===o&&h.click(),h});return o||d[0].click(),c.append(...d),n.append(s,c),n}render(){return[this.nav,this.body]}}k=new WeakMap;let ye="page-component";customElements.define(ye,Y);class Q extends O{constructor(e){super(e),this.initialize(),this.style.touchAction="manipulation",this.addEventListener("click",()=>this.onClick(!0))}onClick(e){return this.grade}text(){const e=document.createElement("div");return e.textContent=this.grade,e}render(){return[this.text]}}let be="button-component";customElements.define(be,Q);const X=r=>{const e=document.createElement("li"),n=document.createElement("small");n.innerText=r.timestamp;const s=document.createElement("b");return s.innerText=r.value,e.append(s,n),e.style.cursor="delete",e};var Ee=new Date().getTimezoneOffset()*6e4;const A=r=>{if(!r)return[];let e=localStorage.getItem(r)||[];return Array.isArray(e)?e:JSON.parse(e)},we=()=>Array.from({length:localStorage.length},(r,e)=>localStorage.key(e)),Se=r=>localStorage.clear(),Z=(r,e)=>localStorage.setItem(r,e),ee=r=>localStorage.getItem(r),J=(r,e)=>{localStorage.setItem(r,JSON.stringify(e))},H=()=>new Date(Date.now()-Ee).toISOString().split("T")[0],K=()=>A(H());class te extends O{constructor(n){super(n);P(this,"get",A);P(this,"latest",[]);this.latest=K()}add(n,s){if(n&&s){let t=A(n);t.push({value:s,timestamp:new Date().toLocaleTimeString("en-US")}),J(n,t),this.list(!0)}}addToday(n){this.add(H(),n)}list(n){const s=document.createElement("ul"),t=this.latest=K();return s.innerHTML="",t.forEach((o,c)=>{const d=X(o),l=document.createElement("button");l.innerHTML="Delete",l.style.marginLeft="10px",l.onclick=()=>{t.splice(c,1),J(H(),t),this.list(!0)},d.appendChild(l),s.appendChild(d)}),s}render(){return[this.list]}}let xe="climb-history";customElements.define(xe,te);const ne=r=>r.map(s=>parseInt(s.value.slice(1))).reduce((s,t)=>s+t+1,0),se="7",W=()=>ee("gradeRange")||se,ve=r=>Z("gradeRange",r);class re extends O{constructor(e){super(e),ve(W())}range(){let e=document.createElement("div");e.classList.add("slider");const n=document.createElement("small"),s=document.createElement("input");return s.type="range",s.min="0",s.max="17",s.oninput=()=>{n.innerHTML=s.value,Z("gradeRange",s.value)},s.onchange=()=>window.location.reload(),n.innerHTML=s.value=W(),e.append(s,n),e}clear(){const e=document.createElement("button");return e.innerText="Clear All History (MAKE SURE YOU WANT THIS)",e.onclick=()=>{Se(),window.location.reload()},e}render(){return[this.clear,this.range]}}let Oe="settings-page";customElements.define(Oe,re);const Pe="hsl(322, 80%, 60%)",Ae="hsl(322, 0%, 94%)",Te="hsl(322, 0%, 94%)",Le="hsl(60, 80%, 60%)",$e="hsl(60, 80%, 60%)",Ve="hsl(237, 80%, 60%)",Ce="hsl(237, 80%, 60%)",Ie="hsl(114, 80%, 60%)",De="hsl(114, 80%, 60%)",je="hsl(0, 80%, 60%)",ke="hsl(17, 80%, 60%)",Ne="hsl(0, 0%, 40%)",ze="hsl(0, 0%, 35%)",Me="hsl(0, 0%, 30%)",He="hsl(0, 0%, 25%)",Fe="hsl(0, 0%, 20%)",Re="hsl(0, 0%, 15%)",Be="hsl(0, 0%, 10%)",F=Object.freeze(Object.defineProperty({__proto__:null,V0:Pe,V1:Ae,V10:ke,V11:Ne,V12:ze,V13:Me,V14:He,V15:Fe,V16:Re,V17:Be,V2:Te,V3:Le,V4:$e,V5:Ve,V6:Ce,V7:Ie,V8:De,V9:je},Symbol.toStringTag,{value:"Module"}));var D;class oe extends O{constructor(n){super(n);p(this,D,new te);P(this,"history",()=>i(this,D));P(this,"buttons",()=>{let n=ee("gradeRange")||se;const s=document.createElement("div");s.classList.add("grades");const o=Array.from({length:parseInt(n)+1},(a,u)=>`V${u}`).map(a=>{const u=new Q({grade:a});u.classList.add("grade",a);const h=F[a],j=parseInt(F[a].split(",")[2].slice(0,-2).trim())<=60?"white":"black";return u.style.setProperty("--accent-color",h),u.style.setProperty("--text-color",j),Array.from({length:10},()=>`${Math.floor(30+70*Math.random())}%`).forEach((ce,ae)=>{u.style.setProperty(`--random-percent-${ae}`,ce)}),u}),c=new C;let d=!1;const l=this.history();return o.forEach(a=>{c.add(`${a.grade}Clicked`,()=>{const u=a.onClick();d&&l.addToday(u)})}),d=!0,s.append(...o),s});i(this,D).initialize()}score(){const n=document.createElement("h3");n.style.fontSize="100px",n.style.margin="0",n.style.marginBottom="20px",n.style.textAlign="center";const s=this.history(),t=ne(s.latest);return n.innerText=`${t}`,n}render(){return[this.score,this.buttons,this.history]}}D=new WeakMap;let Je="score-page";customElements.define(Je,oe);class ie extends O{constructor(e){super(e)}dates(){return we().filter(e=>{try{const n=new Date(e);return n instanceof Date&&!isNaN(n)}catch{}}).sort((e,n)=>new Date(n)-new Date(e))}getSplit(e=!1){const n=e?[...this.dates()].reverse():this.dates(),s=n.map(c=>A(c));let t=[],o=s.map((c,d)=>{const l={};return c.forEach(a=>{t.includes(a.value)||t.push(a.value),a.value in l?l[a.value]++:l[a.value]=1}),l},{});return{dates:n,grades:t,split:o}}score(){const e=[...this.dates()].reverse(),n=e.map(a=>A(a)),s=n.map(ne),t=n.map(a=>a.reduce((u,h)=>u+parseInt(h.value.slice(1)),0)/a.length),o={x:e,y:s,name:"Total Score",mode:"lines",line:{color:"black",width:2}},c={x:e,y:t,name:"Average Difficulty",yaxis:"y2",mode:"lines",line:{color:"darkgray",width:1}};var d={type:"scatter",mode:"lines",title:"Score Overview",xaxis:{type:"category"},yaxis:{rangemode:"tozero"},yaxis2:{overlaying:"y",side:"right",rangemode:"tozero"}};const l=document.createElement("div");return setTimeout(()=>Plotly.newPlot(l,[o,c],d,{responsive:!0}),10),l}grades(){const{grades:e,split:n,dates:s}=this.getSplit(!0),t=e.sort((d,l)=>parseInt(d.slice(1))-parseInt(l.slice(1))).map(d=>({x:s,y:n.map(l=>l[d]||0),name:d,marker:{color:F[d]},type:"bar"}));var o={barmode:"stack",title:"Grade Breakdown",xaxis:{type:"category"},yaxis:{title:"# of Climbs"}};const c=document.createElement("div");return setTimeout(()=>Plotly.newPlot(c,t,o,{responsive:!0}),10),c}list(){const e=this.dates(),n=document.createElement("div");return n.append(...e.map(s=>{const t=A(s),o=document.createElement("div"),c=document.createElement("h3");c.style.marginBottom="0px",c.innerText=s;const d=document.createElement("small"),l=t.reduce((u,h)=>u+parseInt(h.value.slice(1)),0)/t.length;d.innerText=`${t.length} climbs @ V${l.toFixed(1)}`;const a=document.createElement("ul");return t.forEach(u=>{const h=X(u);a.append(h)}),o.append(c,d,a),o})),n}render(){return[this.score,this.grades,this.list]}}let Ke="history-page";customElements.define(Ke,ie);const We=new oe,_e=new re,Ge=new ie,Ue=new Y({header:"JustClimb",pages:[{label:"Score",element:We},{label:"History",element:Ge},{label:"Settings",element:_e}]});document.body.append(Ue);
