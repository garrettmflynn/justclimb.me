var ee=Object.defineProperty;var te=(r,t,n)=>t in r?ee(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var T=(r,t,n)=>(te(r,typeof t!="symbol"?t+"":t,n),n),k=(r,t,n)=>{if(!t.has(r))throw TypeError("Cannot "+n)};var o=(r,t,n)=>(k(r,t,"read from private field"),n?n.call(r):t.get(r)),f=(r,t,n)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,n)},h=(r,t,n,s)=>(k(r,t,"write to private field"),s?s.call(r,n):t.set(r,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const w=[],D=[];function ne(r,t){t.add(r),r.dependencies.add(t)}function se(r){for(const t of r.dependencies)t.delete(r);r.dependencies.clear()}function K(r,t){const n=e=>{se(s),w.push(s);try{r(e)}finally{w.pop()}};t||(t=r.name);const s={name:t,execute:n,dependencies:new Set};return n(),!0}function U(r,t={}){const n=new Set,s=new Set,e=t.name,i=()=>{const l=w[w.length-1];return l&&(!n.has(l)&&t.onSubscriptionAdded&&t.onSubscriptionAdded(l.name),ne(l,n)),r},c=(...l)=>{if(e){const u=D[w.length-1];u&&u!==e&&!s.has(u)&&(s.add(u),t.onDependencyAdded&&t.onDependencyAdded(u));const d=w[w.length-1];d&&e!==d.name&&!n.has(d)&&t.onDependencyAdded&&t.onDependencyAdded(d.name)}D.push(e),Array.from(n).forEach(u=>{u.execute(...l)}),D.pop()};return{get:i,set:l=>(c(r=l),r),run:c,subscriptions:n}}function re(r,t={}){const n=U(void 0,t),s=(...e)=>n.set(r(...e));return K(s,t.name),t.operators?{...n,run:s}:n.get}function ie(r){return typeof r=="function"?"/Function("+r.toString()+")/":r}const G=r=>{if(typeof r=="string"&&r.startsWith("/Function(")&&r.endsWith(")/")){let t=r.substring(10,r.length-2);return t[0]!=="("&&t.slice(0,8)!=="function"&&t.slice(0,5)!=="class"&&(t=`function ${t}`),(0,eval)("("+t+")")}return r},oe=r=>JSON.parse(r,(t,n)=>G(n));function ce(r){var n;return typeof r=="function"?r.prototype?(n=Object.getOwnPropertyDescriptor(r,"prototype"))!=null&&n.writable?"function":"class":r.constructor.name==="AsyncFunction"?"async":"arrow":""}const H={},J=["Object","Array","Map","Set"];function R(r){var n;var t=[];if(r)do{const s=(n=r.constructor)==null?void 0:n.name,e=J.includes(s);J.includes(s)&&(H[s]||(H[s]=[...Object.getOwnPropertyNames(globalThis[s].prototype)])),Object.getOwnPropertyNames(r).forEach(function(i){i!=="constructor"&&(e&&H[s].includes(i)||t.indexOf(i)===-1&&t.push(i))})}while(r=Object.getPrototypeOf(r));return t}var S,E,m,y,x,b,P,v,O;const C=class{constructor(t={}){f(this,S,void 0);f(this,E,void 0);f(this,m,void 0);f(this,y,void 0);f(this,x,void 0);f(this,b,void 0);f(this,P,void 0);f(this,v,void 0);f(this,O,void 0);h(this,S,{}),h(this,E,{}),h(this,m,{}),h(this,y,{}),this.nodes={},this.ignore=[],this.onSubscriptionAdded=()=>{},h(this,x,(s,e)=>{let i=s,c=e;if(o(this,m).base&&(i=`${o(this,m).base}.${s}`,c=`${o(this,m).base}.${e}`),o(this,S)[s]||(o(this,S)[s]=new Set),o(this,S)[s].add(e),o(this,b).call(this,s)){for(const a in o(this,S))o(this,S)[a].has(s)&&o(this,x).call(this,a,e);return}o(this,b).call(this,e)||(o(this,E)[s]||(o(this,E)[s]=new Set),o(this,E)[s].has(e)||(o(this,E)[s].add(e),this.onSubscriptionAdded(i,c)))}),this.export=({json:s=!1}={})=>{const e={};for(const i in this.nodes)o(this,y)[i]instanceof C?e[i]=o(this,y)[i].export({json:s}):e[i]=typeof o(this,y)[i]=="function"?o(this,y)[i]:this.nodes[i],s&&(e[i]=ie(e[i]));return e},h(this,b,s=>s[0]==="$"),h(this,P,(s,e)=>{const i=typeof s=="string",c=i?s:e,a=i?e:s,l={...o(this,m),base:o(this,m).base?`${o(this,m).base}.${c}`:c},u=new C(l);o(this,y)[c]=u,u.load(a);const d={};for(const p in u.nodes)o(this,O).call(this,p,{get:()=>u.nodes[p],set:j=>u.nodes[p]=j},d);return i&&o(this,O).call(this,c,{get:()=>d}),d}),this.toJSON=()=>this.export({json:!0}),h(this,v,(s,e)=>re((...i)=>s.call(this.nodes,...i),{operators:!0,name:e,onDependencyAdded:i=>o(this,x).call(this,i,e)})),h(this,O,(s,e,i=this.nodes)=>(Object.defineProperty(i,s,{...e,enumerable:!0,configurable:!1}),e)),h(this,m,{...t}),Object.keys(o(this,m)).forEach(s=>{Object.defineProperty(this,s,{get:()=>o(this,m)[s],set:e=>o(this,m)[s]=e})})}get subscriptions(){const t=Object.entries(o(this,y)).filter(([s,e])=>e instanceof C),n={...o(this,E)};return t.forEach(([s,e])=>n[s]=e.subscriptions),n}add(t,n){if(!this.ignore.includes(n)){if(typeof t=="object")return this.load(t);{const s=t;o(this,y)[s]=n;let e={};const i=ce(n);if(i==="class"){const c=n,a=(...l)=>o(this,P).call(this,new c(...l),s);e.get=()=>a}else if(i){let c;const a=d=>c=o(this,v).call(this,d,s);a(n);const l=()=>c.get(),u=(...d)=>{const p=d.length;return p===1&&d[0]===void 0?l():p?c.run(...d):l()};e.get=()=>u,e.set=a}else{const c=U(n,{onSubscriptionAdded:a=>o(this,x).call(this,s,a)});e.get=()=>c.get(),e.set=c.set}return o(this,b).call(this,s)||(o(this,E)[s]=new Set),o(this,O).call(this,s,e)}}}load(t={}){const n=typeof t=="string"?oe(t):t;return R(n).sort((e,i)=>o(this,b).call(this,e)&&!o(this,b).call(this,i)?1:!o(this,b).call(this,e)&&o(this,b).call(this,i)?-1:0).forEach(e=>{const i=n[e];i&&typeof i=="object"&&!Array.isArray(i)?o(this,P).call(this,e,i):this.add(e,G(i))}),!0}};let L=C;S=new WeakMap,E=new WeakMap,m=new WeakMap,y=new WeakMap,x=new WeakMap,b=new WeakMap,P=new WeakMap,v=new WeakMap,O=new WeakMap;var g,$;class A extends HTMLElement{constructor(n={}){super();f(this,g,void 0);f(this,$,void 0);h(this,$,!1),this.initialize=()=>{if(o(this,$))return;R(this).forEach(e=>{if(e==="constructor"||e==="connectedCallback"||e in HTMLElement.prototype)return;e in o(this,g).nodes?o(this,g).nodes[e]=this[e]:o(this,g).add(e,this[e])});for(let e in o(this,g).nodes)Object.defineProperty(this,e,{get:()=>o(this,g).nodes[e],set:i=>o(this,g).nodes[e]=i});h(this,$,!0)},n instanceof L?h(this,g,n):(h(this,g,new L({ignore:[this.initialize]})),o(this,g).load(n))}connectedCallback(){this.initialize();let n=this.render()??[];Array.isArray(n)||(n=[n]),n.forEach(s=>{s=s.bind(this);let e;K(()=>{const i=s();i!==e&&(e?e.replaceWith(i):this.append(i),e=i)})})}render(){return[]}}g=new WeakMap,$=new WeakMap;customElements.define("commonwealth-element",A);var I;class V extends A{constructor(n){super(n);f(this,I,document.createElement("section"));T(this,"body",()=>o(this,I))}nav(){const n=document.createElement("nav"),s=document.createElement("h2");s.innerText=this.header;const e=window.location.pathname.split("/").filter(a=>a)[0].replaceAll("#",""),i=document.createElement("div"),c=this.pages.map(({label:a,element:l},u)=>{const d=document.createElement("a");d.style.marginLeft="15px",d.href="#",d.innerText=a;const p=a.toLowerCase();return d.onclick=()=>{const j=this.body(),M=j.children[0];M?M.replaceWith(l):j.append(l),window.history.pushState({},null,p)},u===0&&(s.onclick=d.onclick),p===e&&d.click(),d});return e||c[0].click(),i.append(...c),n.append(s,i),n}render(){return[this.nav,this.body]}}I=new WeakMap;let le="page-component";customElements.define(le,V);class q extends A{constructor(t){super(t),this.initialize()}onClick(t){return this.grade}button(){const t=document.createElement("button");return t.classList.add("grade"),t.textContent=this.grade,t.addEventListener("click",()=>this.onClick(!0)),t}render(){return[this.button]}}let ae="button-component";customElements.define(ae,q);const Y=r=>{const t=document.createElement("li"),n=document.createElement("small");n.innerText=r.timestamp;const s=document.createElement("b");return s.innerText=r.value,t.append(s,n),t.style.cursor="delete",t},F=r=>{if(!r)return[];let t=localStorage.getItem(r)||[];return Array.isArray(t)?t:JSON.parse(t)},W=(r,t)=>{localStorage.setItem(r,JSON.stringify(t))},z=()=>new Date().toISOString().split("T")[0],B=()=>F(z());class _ extends A{constructor(n){super(n);T(this,"get",F);T(this,"latest",[]);this.latest=B()}add(n,s){if(n&&s){let e=F(n);e.push({value:s,timestamp:new Date().toLocaleTimeString("en-US")}),W(n,e),this.list(!0)}}addToday(n){this.add(z(),n)}list(n){const s=document.createElement("ul"),e=this.latest=B();return s.innerHTML="",e.forEach((i,c)=>{const a=Y(i),l=document.createElement("button");l.innerHTML="Delete",l.style.marginLeft="10px",l.onclick=()=>{e.splice(c,1),W(z(),e),this.list(!0)},a.appendChild(l),s.appendChild(a)}),s}render(){return[this.list]}}let de="climb-history";customElements.define(de,_);var N;class Q extends A{constructor(n){super(n);f(this,N,new _);T(this,"history",()=>o(this,N));T(this,"buttons",()=>{const n=document.createElement("div");n.style.textAlign="center";const e=Array.from({length:18},(l,u)=>`V${u}`).map(l=>new q({grade:l})),i=new L;let c=!1;const a=this.history();return e.forEach(l=>{i.add(`${l.grade}Clicked`,()=>{const u=l.onClick();c&&a.addToday(u)})}),c=!0,n.append(...e),n});o(this,N).initialize()}score(){const n=document.createElement("h3");n.style.fontSize="100px",n.style.margin="0",n.style.marginBottom="20px",n.style.textAlign="center";const i=this.history().latest.map(c=>parseInt(c.value.slice(1))).reduce((c,a)=>c+a+1,0);return n.innerText=`${i}`,n}render(){return[this.score,this.buttons,this.history]}}N=new WeakMap;let ue="score-page";customElements.define(ue,Q);class X extends A{constructor(t){super(t)}clear(){const t=document.createElement("button");return t.innerText="Clear All History (MAKE SURE YOU WANT THIS)",t.onclick=()=>{localStorage.clear(),window.location.reload()},t}render(){return[this.clear]}}let he="settings-page";customElements.define(he,X);class Z extends A{constructor(t){super(t)}list(){const t=Array.from({length:localStorage.length},(s,e)=>localStorage.key(e)),n=document.createElement("div");return n.append(...t.map(s=>{const e=F(s),i=document.createElement("div"),c=document.createElement("h3");c.style.marginBottom="0px",c.innerText=s;const a=document.createElement("small"),l=e.reduce((d,p)=>d+parseInt(p.value.slice(1)),0)/e.length;a.innerText=`${e.length} climbs @ V${l.toFixed(1)}`;const u=document.createElement("ul");return e.forEach(d=>{const p=Y(d);u.append(p)}),i.append(c,a,u),i})),n}render(){return[this.list]}}let fe="history-page";customElements.define(fe,Z);const me=new Q,pe=new X,ge=new Z,ye=new V({header:"JustClimb",pages:[{label:"Score",element:me},{label:"History",element:ge},{label:"Settings",element:pe}]});document.body.append(ye);
