var de=Object.defineProperty;var ue=(o,e,t)=>e in o?de(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var D=(o,e,t)=>(ue(o,typeof e!="symbol"?e+"":e,t),t),W=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var c=(o,e,t)=>(W(o,e,"read from private field"),t?t.call(o):e.get(o)),g=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)},m=(o,e,t,n)=>(W(o,e,"write to private field"),n?n.call(o,t):e.set(o,t),t);import"https://cdn.plot.ly/plotly-2.20.0.min.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const x=[],N=[];function he(o,e){e.add(o),o.dependencies.add(e)}function me(o){for(const e of o.dependencies)e.delete(o);o.dependencies.clear()}function B(o,e){const t=r=>{me(n),x.push(n);try{o(r)}finally{x.pop()}};e||(e=o.name);const n={name:e,execute:t,dependencies:new Set};return t(),!0}function J(o,e={}){const t=new Set,n=new Set,r=e.name,s=()=>{const l=x[x.length-1];return l&&(!t.has(l)&&e.onSubscriptionAdded&&e.onSubscriptionAdded(l.name),he(l,t)),o},i=(...l)=>{if(r){const d=N[x.length-1];d&&d!==r&&!n.has(d)&&(n.add(d),e.onDependencyAdded&&e.onDependencyAdded(d));const u=x[x.length-1];u&&r!==u.name&&!t.has(u)&&e.onDependencyAdded&&e.onDependencyAdded(u.name)}N.push(r),Array.from(t).forEach(d=>{d.execute(...l)}),N.pop()};return{get:s,set:l=>(i(o=l),o),run:i,subscriptions:t}}function pe(o,e={}){const t=J(void 0,e),n=(...i)=>t.set(o(...i));let r=!1;const s=()=>{r||(r=!0,B(n,e.name))};return e.defer||s(),e.operators?{...t,run:n,initialize:s}:t.get}function fe(o){return typeof o=="function"?"/Function("+o.toString()+")/":o}const K=o=>{if(typeof o=="string"&&o.startsWith("/Function(")&&o.endsWith(")/")){let e=o.substring(10,o.length-2);return e[0]!=="("&&e.slice(0,8)!=="function"&&e.slice(0,5)!=="class"&&(e=`function ${e}`),(0,eval)("("+e+")")}return o},ge=o=>JSON.parse(o,(e,t)=>K(t));function ye(o){var t;return typeof o=="function"?o.prototype?(t=Object.getOwnPropertyDescriptor(o,"prototype"))!=null&&t.writable?"function":"class":o.constructor.name==="AsyncFunction"?"async":"arrow":""}const M={},U=["Object","Array","Map","Set"];function q(o){var t;var e=[];if(o)do{const n=(t=o.constructor)==null?void 0:t.name,r=U.includes(n);U.includes(n)&&(M[n]||(M[n]=[...Object.getOwnPropertyNames(globalThis[n].prototype)])),Object.getOwnPropertyNames(o).forEach(function(s){s!=="constructor"&&(r&&M[n].includes(s)||e.indexOf(s)===-1&&e.push(s))})}while(o=Object.getPrototypeOf(o));return e}var S,E,p,b,P,v,L,z,$;const C=class{constructor(e={}){g(this,S,void 0);g(this,E,void 0);g(this,p,void 0);g(this,b,void 0);g(this,P,void 0);g(this,v,void 0);g(this,L,void 0);g(this,z,void 0);g(this,$,void 0);m(this,S,{}),m(this,E,{}),m(this,p,{}),m(this,b,{}),this.nodes={},this.ignore=[],this.onSubscriptionAdded=()=>{},m(this,P,(n,r)=>{let s=n,i=r;if(c(this,p).base&&(s=`${c(this,p).base}.${n}`,i=`${c(this,p).base}.${r}`),c(this,S)[n]||(c(this,S)[n]=new Set),c(this,S)[n].add(r),c(this,v).call(this,n)){for(const a in c(this,S))c(this,S)[a].has(n)&&c(this,P).call(this,a,r);return}c(this,v).call(this,r)||(c(this,E)[n]||(c(this,E)[n]=new Set),c(this,E)[n].has(r)||(c(this,E)[n].add(r),this.onSubscriptionAdded(s,i)))}),this.export=({json:n=!1}={})=>{const r={};for(const s in this.nodes)c(this,b)[s]instanceof C?r[s]=c(this,b)[s].export({json:n}):r[s]=typeof c(this,b)[s]=="function"?c(this,b)[s]:this.nodes[s],n&&(r[s]=fe(r[s]));return r},m(this,v,n=>n[0]==="$"),m(this,L,(n,r)=>{const s=typeof n=="string",i=s?n:r,a=s?r:n,l={...c(this,p),base:c(this,p).base?`${c(this,p).base}.${i}`:i},d=new C(l);c(this,b)[i]=d,d.load(a);const u={};for(const h in d.nodes)c(this,$).call(this,h,{get:()=>d.nodes[h],set:w=>d.nodes[h]=w},u);return s&&c(this,$).call(this,i,{get:()=>u}),u}),this.toJSON=()=>this.export({json:!0}),m(this,z,(n,r,s)=>pe((...i)=>n.call(this.nodes,...i),{...s,operators:!0,name:r,onDependencyAdded:i=>c(this,P).call(this,i,r)})),m(this,$,(n,r,s=this.nodes)=>(Object.defineProperty(s,n,{...r,enumerable:!0,configurable:!1}),r)),m(this,p,{...e}),Object.keys(c(this,p)).forEach(n=>{Object.defineProperty(this,n,{get:()=>c(this,p)[n],set:r=>c(this,p)[n]=r})})}get subscriptions(){const e=Object.entries(c(this,b)).filter(([n,r])=>r instanceof C),t={...c(this,E)};return e.forEach(([n,r])=>t[n]=r.subscriptions),t}add(e,t,n={}){if(!this.ignore.includes(t))if(typeof e=="object"){this.load(e);return}else{const r=e;c(this,b)[r]=t;let s={};const i=ye(t);if(i==="class"){const a=t,l=(...d)=>c(this,L).call(this,new a(...d),r);s.get=()=>l}else if(i){let a;const l=h=>a=c(this,z).call(this,h,r,n);a=l(t);const d=()=>a.get(),u=(...h)=>{const w=h.length;return w===1&&h[0]===void 0?d():w?a.run(...h):d()};s.get=()=>u,s.set=l,s.initialize=a.initialize}else{const a=J(t,{onSubscriptionAdded:l=>c(this,P).call(this,r,l)});s.get=()=>a.get(),s.set=a.set}return c(this,v).call(this,r)||(c(this,E)[r]=new Set),c(this,$).call(this,r,s)}}load(e={}){const t=typeof e=="string"?ge(e):e;return q(t).sort((r,s)=>c(this,v).call(this,r)&&!c(this,v).call(this,s)?1:!c(this,v).call(this,r)&&c(this,v).call(this,s)?-1:0).forEach(r=>{const s=t[r];s&&typeof s=="object"&&!Array.isArray(s)?c(this,L).call(this,r,s):this.add(r,K(s))}),!0}};let V=C;S=new WeakMap,E=new WeakMap,p=new WeakMap,b=new WeakMap,P=new WeakMap,v=new WeakMap,L=new WeakMap,z=new WeakMap,$=new WeakMap;var y,T;class O extends HTMLElement{constructor(t={}){super();g(this,y,void 0);g(this,T,void 0);m(this,T,!1),this.initialize=()=>{if(c(this,T))return;const n=[];q(this).forEach(s=>{if(s==="constructor"||s==="connectedCallback"||s in HTMLElement.prototype)return;if(s in c(this,y).nodes)c(this,y).nodes[s]=this[s];else{const a=c(this,y).add(s,this[s],{defer:!0});a&&n.push(a)}});for(let s in c(this,y).nodes)Object.defineProperty(this,s,{get:()=>c(this,y).nodes[s],set:i=>c(this,y).nodes[s]=i});n.forEach(s=>s.initialize?s.initialize():void 0),m(this,T,!0)},t instanceof V?m(this,y,t):(m(this,y,new V({ignore:[this.initialize]})),c(this,y).load(t))}connectedCallback(){this.initialize();let t=this.render()??[];Array.isArray(t)||(t=[t]),t.forEach(n=>{const r=n instanceof HTMLElement;n=r?n:n.bind(this);let s;B(()=>{const i=r?n:n();i!==s&&(s?s.replaceWith(i):this.append(i),s=i)})})}render(){return[]}}y=new WeakMap,T=new WeakMap;customElements.define("commonwealth-element",O);class Q extends O{constructor(t){super(t);D(this,"body",document.createElement("div"));this.style.display="grid",this.style.gridTemplateColumns="1fr",this.style.gridTemplateRows="auto 1fr",this.style.height="100%"}nav(){const t=document.createElement("nav"),n=document.createElement("h2");n.innerText=this.header;const s=new URLSearchParams(window.location.search).get("page"),i=document.createElement("div"),a=this.pages.map(({label:l,element:d},u)=>{const h=document.createElement("a");h.style.marginLeft="15px",h.href="javascript:undefined",h.innerText=l;const w=l.toLowerCase();return h.onclick=()=>{const I=this.body.children[0];I?I.replaceWith(d):this.body.append(d),window.history.pushState({},"",`?page=${w}`)},u===0&&(n.onclick=h.onclick),w===s&&h.click(),h});return s||a[0].click(),i.append(...a),t.append(n,i),t}render(){return[this.nav,this.body]}}let be="page-component";customElements.define(be,Q);class X extends O{constructor(e){super(e),this.initialize(),this.style.touchAction="manipulation",this.addEventListener("click",()=>this.onClick(!0))}onClick(e){return this.grade}text(){const e=document.createElement("div");return e.textContent=this.grade,e}render(){return[this.text]}}let ve="button-component";customElements.define(ve,X);var we=new Date().getTimezoneOffset()*6e4;const A=o=>{if(!o)return[];let e=localStorage.getItem(o)||[];return Array.isArray(e)?e:JSON.parse(e)},Ee=()=>Array.from({length:localStorage.length},(o,e)=>localStorage.key(e)),Y=o=>{console.error("REMOVE!"),localStorage.removeItem(o)},Z=(o,e)=>localStorage.setItem(o,e),Se=o=>localStorage.getItem(o),F=(o,e)=>{localStorage.setItem(o,JSON.stringify(e))},k=()=>new Date(Date.now()-we).toISOString().split("T")[0],j=()=>A(k()),xe=o=>{const e=document.createElement("li"),t=document.createElement("small");t.innerText=o.timestamp;const n=document.createElement("b");return n.innerText=o.value,e.append(n,t),e.style.cursor="delete",e};function ee({entries:o,onDelete:e}){const t=document.createElement("ul");t.innerHTML="";let n=[];return o.forEach((r,s)=>{const i=xe(r),a=document.createElement("button");a.innerHTML="Delete",a.style.marginLeft="10px",a.onclick=()=>{const l=n.reduce((u,h)=>(h<s&&u++,u),0),d=o.splice(s-l,1);n.push(s),i.remove(),e(s,d,o)},i.appendChild(a),t.appendChild(i)}),t}class te extends O{constructor(t){super(t);D(this,"get",A);D(this,"latest",j());this.latest=j(),this.initialize()}add(t,n){if(t&&n){let r=A(t);r.push({value:n,timestamp:new Date().toLocaleTimeString("en-US")}),F(t,r),this.latest=j()}}addToday(t){this.add(k(),t)}list(t=[]){return ee({entries:t,onDelete:(r,s,i)=>{const a=k();i.length?F(a,i):Y(a),this.latest=j()}})}$latestList(){this.list(this.latest)}render(){return[this.list]}}let Pe="climb-history";customElements.define(Pe,te);const _=o=>o.map(n=>parseInt(n.value.slice(1))).reduce((n,r)=>n+r+1,0),ne=o=>o.reduce((e,t)=>e+parseInt(t.value.slice(1)),0)/o.length,$e="hsl(12, 100%, 69%)",Oe="hsl(334, 37%, 59%)",Ae="hsl(334, 37%, 54%)",Le="hsl(356,87%,70%)",Te="hsl(356,87%,65%)",Ve="hsl(195,56%,40%)",De="hsl(195,56%,35%)",Ce="hsl(169,100%,27%)",ze="hsl(169,100%,22%)",Ie="hsl(45,99%,49%)",je="hsl(45,99%,44%)",ke="hsl(0, 0%, 40%)",Re="hsl(0, 0%, 35%)",Ne="hsl(0, 0%, 30%)",Me="hsl(0, 0%, 25%)",Fe="hsl(0, 0%, 20%)",He="hsl(0, 0%, 15%)",_e="hsl(0, 0%, 10%)",H=Object.freeze(Object.defineProperty({__proto__:null,V0:$e,V1:Oe,V10:je,V11:ke,V12:Re,V13:Ne,V14:Me,V15:Fe,V16:He,V17:_e,V2:Ae,V3:Le,V4:Te,V5:Ve,V6:De,V7:Ce,V8:ze,V9:Ie},Symbol.toStringTag,{value:"Module"})),Ge="7",R=()=>Se("gradeRange")||Ge,We=o=>Z("gradeRange",o),f=new V;f.add("latest",[]);f.add("score",function(){return _(this.latest)});f.add("range",R());f.nodes;class se extends O{constructor(t){super(t);D(this,"history",new te);this.initialize()}buttons(t=R()){const n=document.createElement("div");n.classList.add("grades");const s=Array.from({length:parseInt(t)+1},(l,d)=>`V${d}`).map((l,d)=>{const u=new X({grade:l});u.classList.add("grade",l),u.setAttribute("tabindex",`${d}`);const h=H[l],I=parseInt(H[l].split(",")[2].slice(0,-2).trim())<=60?"white":"black";return u.style.setProperty("--accent-color",h),u.style.setProperty("--text-color",I),Array.from({length:10},()=>`${Math.floor(30+70*Math.random())}%`).forEach((ae,le)=>{u.style.setProperty(`--random-percent-${le}`,ae)}),u}),i=new V;let a=!1;return s.forEach(l=>{i.add(`${l.grade}Clicked`,()=>{const d=l.onClick();a&&this.history.addToday(d)})}),a=!0,n.append(...s),n}score(t=[]){this.history.list(t);const n=document.createElement("div");n.classList.add("score");const r=document.createElement("h2"),s=document.createElement("small");n.append(r,s);const i=_(t);return r.innerText=i,s.innerText=t.length?`${t.length} Climbs @ V${ne(t).toFixed(2)}`:"No Climbs Recorded",n}section(){const t=document.createElement("section"),n=this.buttons();return t.append(n,this.history),t}render(){return[this.score,this.section]}}let Ue="score-page";customElements.define(Ue,se);const Be="justclimb",Je="0.0.1",Ke="https://github.com/garrettmflynn/justclimb.me.git",qe="Garrett Flynn <garrettmflynn@gmail.com>",Qe="AGPL-3.0-or-later",Xe={start:"npm run dev",dev:"vite",build:"vite build",lint:"eslint ."},Ye={"@typescript-eslint/eslint-plugin":"^5.43.0",eslint:"^8.0.1","eslint-config-standard-with-typescript":"^34.0.1","eslint-plugin-import":"^2.25.2","eslint-plugin-n":"^15.0.0","eslint-plugin-promise":"^6.0.0",typescript:"*",vite:"^4.2.1"},Ze={name:Be,version:Je,private:!0,repository:Ke,author:qe,license:Qe,scripts:Xe,devDependencies:Ye};class re extends O{constructor(e){super(e),this.initialize(),We(R())}onRangeUpdate(e){return e}range(){let e=document.createElement("div");e.classList.add("slider");const t=document.createElement("small"),n=document.createElement("input");return n.type="range",n.min="0",n.max="17",n.oninput=()=>t.innerHTML=n.value,n.onchange=()=>this.onRangeUpdate(parseInt(n.value)),t.innerHTML=n.value=R(),e.append(n,t),e}version(){const e=document.createElement("small");return e.classList.add("version"),e.innerText=Ze.version,e}section(){const e=document.createElement("section");return e.append(this.range(),this.version()),e}render(){return this.section()}}let et="settings-page";customElements.define(et,re);class oe extends O{constructor(e){super(e),this.initialize()}dates(){return Ee().filter(e=>{try{const t=new Date(e);return t instanceof Date&&!isNaN(t)}catch{}}).sort((e,t)=>new Date(t)-new Date(e))}getSplit(e=!1){const t=e?[...this.dates()].reverse():this.dates(),n=t.map(i=>A(i));let r=[],s=n.map((i,a)=>{const l={};return i.forEach(d=>{r.includes(d.value)||r.push(d.value),d.value in l?l[d.value]++:l[d.value]=1}),l},{});return{dates:t,grades:r,split:s}}score(){const e=[...this.dates()].reverse(),t=e.map(d=>A(d)),n=t.map(_),r=t.map(d=>d.reduce((u,h)=>u+parseInt(h.value.slice(1)),0)/d.length),s={x:e,y:n,name:"Total Score",mode:"lines",line:{color:"black",width:2}},i={x:e,y:r,name:"Average Difficulty",yaxis:"y2",mode:"lines",line:{color:"darkgray",width:1}};var a={type:"scatter",mode:"lines",title:"Score Overview",xaxis:{type:"category"},yaxis:{rangemode:"tozero"},yaxis2:{overlaying:"y",side:"right",rangemode:"tozero"}};const l=document.createElement("div");return setTimeout(()=>Plotly.newPlot(l,[s,i],a,{responsive:!0}),10),l}grades(){const{grades:e,split:t,dates:n}=this.getSplit(!0),r=e.sort((a,l)=>parseInt(a.slice(1))-parseInt(l.slice(1))).map(a=>({x:n,y:t.map(l=>l[a]||0),name:a,marker:{color:H[a]},type:"bar"}));var s={barmode:"stack",title:"Grade Breakdown",xaxis:{type:"category"},yaxis:{title:"# of Climbs"}};const i=document.createElement("div");return setTimeout(()=>Plotly.newPlot(i,r,s,{responsive:!0}),10),i}onDelete(e,t=[]){return e?(t.length?F(e,t):Y(e),{date:e,entries:t}):{}}list(){const e=this.dates(),t=document.createElement("div");return t.append(...e.map(n=>{const r=A(n),s=document.createElement("div"),i=document.createElement("h3");i.style.marginBottom="0px",i.innerText=n;const a=document.createElement("small"),l=ne(r);a.innerText=r.length?`${r.length} climbs @ V${l.toFixed(1)}`:"No Climbs";const d=ee({entries:r,onDelete:(u,h,w)=>this.onDelete(n,w)});return s.append(i,a,d),s})),t}render(){return[this.score,this.grades,this.list]}}let tt="history-page";customElements.define(tt,oe);const G=new se,ie=new re,ce=new oe,nt=new Q({header:"JustClimb",pages:[{label:"Score",element:G},{label:"History",element:ce},{label:"Settings",element:ie}]});document.body.append(nt);f.add("scorePage",G);f.add("historyPage",ce);f.add("settingsPage",ie);f.add("$latestScoreView",function(){this.scorePage.score(this.latest)});f.add("$latestHistoryView",function(){this.historyPage.list(this.latest)});f.add("$historyScoreGlobal",function(){this.latest=G.history.latest});f.add("$rangeSliderGlobalRange",function(){this.range=this.settingsPage.onRangeUpdate()});f.add("$rangeLocalStorage",function(){this.range&&Z("gradeRange",this.range)});f.add("$rangeButtonsView",function(){this.range&&this.scorePage.buttons(this.range)});f.add("$onDeleteHistoryViewAndGlobal",function(){const o=k(),{date:e,entries:t}=this.historyPage.onDelete();e&&t&&(e===o&&(this.latest=t),this.historyPage.grades(!0),this.historyPage.score(!0))});if("serviceWorker"in navigator){const o=`${window.location.origin}/${window.location.pathname}/serviceWorker.js`;window.addEventListener("load",function(){navigator.serviceWorker.register(o).then(e=>console.log("service worker registered")).catch(e=>console.log("service worker not registered",e))})}
