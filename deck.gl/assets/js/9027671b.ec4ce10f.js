"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?i.createElement(g,r(r({ref:t},p),{},{components:n})):i.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(83117),a=(n(67294),n(3905)),o=n(86193);const r={},l=void 0,c={unversionedId:"index",id:"index",title:"index",description:"/images/examples/${item.docId || item.label.toLowerCase()}.jpg} />",source:"@site/src/examples/index.mdx",sourceDirName:".",slug:"/",permalink:"/deck.gl/examples/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",next:{title:"ArcLayer",permalink:"/deck.gl/examples/arc-layer"}},s={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.h6,{getThumbnail:e=>"/images/examples/"+(e.docId||e.label.toLowerCase())+".jpg",mdxType:"ExamplesIndex"}))}u.isMDXComponent=!0},86193:(e,t,n)=>{n.d(t,{h6:()=>L,SK:()=>F,D2:()=>N});var i=n(67294),a=n(19521),o=n(83117);const r=e=>"@media screen and (max-width: 480px)",l=a.ZP.div.withConfig({displayName:"styled__PanelContainer",componentId:"sc-oqnqzc-0"})(["font-size:14px;position:absolute;top:0;right:0;width:344px;background:var(--ifm-background-surface-color);box-shadow:var(--ifm-global-shadow-lw);margin:24px;padding:10px 24px;max-height:96%;overflow-x:hidden;overflow-y:auto;overflow-y:overlay;outline:none;z-index:1;","{width:auto;left:0;}"],r),c=a.ZP.div.withConfig({displayName:"styled__PanelExpander",componentId:"sc-oqnqzc-1"})(["display:none;width:16px;height:16px;font-family:serif;font-size:0.8em;text-align:center;line-height:16px;border-radius:50%;background:",";color:",";","{display:block;}"],(e=>e.$expanded?"none":"var(--ifm-color-gray-900)"),(e=>e.$expanded?"var(--ifm-color-black)":"var(--ifm-color-white)"),r),s=a.ZP.div.withConfig({displayName:"styled__PanelTitle",componentId:"sc-oqnqzc-2"})(["display:flex;align-items:center;justify-content:space-between;font:bold 1.25em var(--ifm-font-family-base);margin:8px 0;","{cursor:pointer;}"],r),p=a.ZP.div.withConfig({displayName:"styled__PanelContent",componentId:"sc-oqnqzc-3"})(["div > *{vertical-align:middle;white-space:nowrap;}div > label{display:inline-block;width:40%;margin-right:10%;color:var(--ifm-color-content-secondary);margin-top:2px;margin-bottom:2px;}div > input,div > a,div > button,div > select{font:normal 11px/16px var(--ifm-font-family-base);line-height:20px;text-transform:none;text-overflow:ellipsis;overflow:hidden;display:inline-block;padding:0 4px;width:50%;height:20px;text-align:left;}div > button{color:initial;}div > button:disabled{color:var(--ifm-color-gray-300);cursor:default;background:var(--ifm-color-gray-300);}div > input{border:solid 1px var(--ifm-color-gray-300);&:disabled{background:var(--ifm-color-white);}&[type='checkbox']{height:auto;}}p{margin-bottom:12px;white-space:initial;}","{display:",";}"],r,(e=>e.$expanded?"block":"none")),d=a.ZP.a.withConfig({displayName:"styled__SourceLink",componentId:"sc-oqnqzc-4"})(["display:block;text-align:right;margin-top:8px;font:bold 12px/20px var(--ifm-font-family-base);color:var(--ifm-color-content-secondary);","{display:",";}"],r,(e=>e.$expanded?"block":"none")),m=a.ZP.div.withConfig({displayName:"input__InputContainer",componentId:"sc-1myx0c6-0"})(["position:relative;width:100%;&:last-child{margin-bottom:20px;}> *{vertical-align:middle;white-space:nowrap;}label{display:inline-block;width:40%;margin-right:10%;margin-top:2px;margin-bottom:2px;}input,a,button{background:var(--ifm-background-surface-color);font-size:0.9em;text-transform:none;text-overflow:ellipsis;overflow:hidden;display:inline-block;padding:0 4px;margin:0;width:50%;height:20px;line-height:1.833;text-align:left;}button{color:initial;}button:disabled{color:var(--ifm-color-gray-500);cursor:default;background:var(--ifm-color-gray-300);}input{border:solid 1px var(--ifm-color-gray-500);&:disabled{background:var(--ifm-color-gray-300);}&[type='checkbox']{height:auto;}}.tooltip{left:50%;top:24px;opacity:0;pointer-events:none;transition:opacity 200ms;}&:hover .tooltip{opacity:1;}"]);function u(e){let{name:t,min:n,max:a,step:o,displayName:r,displayValue:l,onChange:c}=e;const s=(0,i.useCallback)((e=>{const{value:i}=e.target;let o=Number(i);void 0!==n&&(o=Math.max(n,o)),void 0!==a&&(o=Math.min(a,o)),c(t,o)}),[n,a,c]);return i.createElement(m,null,i.createElement("label",null,r),i.createElement("div",{className:"tooltip"},r,": ",String(l)),i.createElement("input",{type:"range",min:n,max:a,value:l,step:o,onChange:s}))}function g(e){let{name:t,value:n,displayName:a,displayValue:o,onChange:r}=e;const l=(0,i.useCallback)((e=>{const n=e.target.checked;r(t,n)}),[r]);return i.createElement(m,null,i.createElement("label",null,a),i.createElement("div",{className:"tooltip"},a,": ",String(o)),i.createElement("input",{type:"checkbox",checked:n,onChange:l}))}function f(e){const{name:t,onChange:n,displayName:a,altValue:r,displayValue:l,...c}=e,s=(0,i.useCallback)((e=>{n(t,e.target.value)}),[n]),p=(0,i.useCallback)((()=>{n(t,r)}),[r,n]),d=c;switch(e.type){case"link":return i.createElement(m,null,i.createElement("label",null,a),i.createElement("a",{href:l,target:"_new"},l));case"function":case"json":const t=Boolean(r);return i.createElement(m,null,i.createElement("label",null,a),i.createElement("button",{type:"text",disabled:!t,onClick:p},l));case"select":return i.createElement(m,null,i.createElement("label",null,a),i.createElement("select",{onChange:s,value:l},e.options.map(((e,t)=>i.createElement("option",{key:t,value:e},e)))));case"checkbox":return i.createElement(g,e);case"range":return i.createElement(u,e);default:return i.createElement(m,null,i.createElement("label",null,a),i.createElement("div",{className:"tooltip"},a,": ",String(l)),i.createElement("input",(0,o.Z)({},d,{value:l,onChange:s})))}}const h=a.ZP.div.withConfig({displayName:"spinner__SpinnerContainer",componentId:"sc-ok6n2c-0"})(["height:18px;line-height:18px;font-size:10px;> div{white-space:nowrap;left:0;bottom:0;position:absolute;height:18px;padding-left:20px;transition:width 0.5s;}.spinner--fill{background:$primary;color:$white;overflow:hidden;}.spinner--text{color:$black-40;}&.done{height:0 !important;line-height:0;font-size:0;transition:height 0.5s 1s;> div{height:0 !important;transition:height 0.5s 1s;}}"]);function y(e){let{meta:t}=e;if(!Number.isFinite(t.progress)&&!Number.isFinite(t.progressAlt))return null;const n=(t.progress||0)+(t.progressAlt||0),a=Math.round(1e3*n)/10,o="Loading... "+a+"%";return i.createElement(h,{className:n>=1?"done":""},i.createElement("div",{className:"spinner--text"},o),i.createElement("div",{className:"spinner--fill",style:{width:a+"%"}},o))}const x=a.ZP.div.withConfig({displayName:"info-panel__InfoPanelContent",componentId:"sc-1qy2onu-0"})(["hr{margin:12px -24px;}a{text-decoration:none;display:inline;color:var(--ifm-color-primary);}p{margin-bottom:16px;}.legend{display:inline-block;width:12px;height:12px;}.stat{text-transform:uppercase;font-size:0.833em;b{display:block;font-size:3em;font-weight:bold;line-height:1.833;}}hr{border:none;background:var(--ifm-color-gray-400);height:1px;}.layout{display:table;width:100%;> *{display:table-cell !important;}.col-1-3{width:33.33%;}.col-1-2{width:50%;}.text-right{text-align:right;}.text-center{text-align:center;}}"]);function b(e){let{title:t,children:n,sourceLink:a}=e;const[o,r]=(0,i.useState)(!1);return i.createElement(l,null,i.createElement(s,{onClick:()=>r(!o)},i.createElement("div",null,t),i.createElement(c,{$expanded:o},o?"\u2715":"i")),i.createElement(p,{$expanded:o},n),i.createElement(d,{$expanded:o,href:a,target:"_new"},"View Code \u2197"))}function v(e){let{title:t,sourceLink:n,params:a,meta:r,children:l,updateParam:c}=e;return i.createElement(b,{title:t,sourceLink:n},i.createElement(x,null,l,Object.keys(a).length>0&&i.createElement("hr",null),Object.keys(a).sort().map(((e,t)=>i.createElement(f,(0,o.Z)({key:t+"-"+e,name:e},a[e],{onChange:c}))))),i.createElement(y,{meta:r}))}var w=n(99126),k=n(49616),E=n(27260),C=n(44996);const _=a.ZP.div.withConfig({displayName:"make-example__DemoContainer",componentId:"sc-is6oih-0"})(["height:100%;.tooltip,.deck-tooltip{position:absolute;padding:4px 12px;background:rgba(0,0,0,0.8);color:var(--ifm-color-white);max-width:300px;font-size:12px;z-index:9;pointer-events:none;white-space:nowrap;}"]),P=a.ZP.div.withConfig({displayName:"make-example__MapTip",componentId:"sc-is6oih-1"})(["position:absolute;right:12px;bottom:20px;color:var(--ifm-color-white);mix-blend-mode:difference;font-size:14px;@media screen and (max-width:480px){display:none;}"]);function N(e,t){let{isInteractive:n=!0,style:a}=void 0===t?{}:t;const{parameters:o={},mapStyle:r}=e,l=Object.keys(o).reduce(((e,t)=>(e[t]=(0,k.aw)(o[t]),e)),{}),c=Array.isArray(e.data)?e.data.map((e=>null)):null;return function(){const[t,o]=(0,i.useState)(c),[s,p]=(0,i.useState)(l),[d,m]=(0,i.useState)({}),u=(0,C.Z)("/"),g=(0,i.useCallback)((e=>{const t=Object.keys(e).reduce(((t,n)=>(t[n]=(0,k.aw)(e[n]),t)),{});p((e=>({...e,...t})))}),[]),f=(0,i.useCallback)((e=>{m((t=>({...t,...e})))}),[]);(0,i.useEffect)((()=>{let t=e.data;if(!t)return;const n=Array.isArray(t);n||(t=[t]);for(let e=0;e<t.length;e++){const{url:i,worker:a}=t[e];(0,w.m)((0,w.V)(u,i),a&&(0,w.V)(u,a),((t,i)=>{o(n?n=>{const i=n.slice();return i[e]=t,i}:t),i&&m((e=>({...e,...i})))}))}}),[]);return i.createElement(_,{style:a},i.createElement(e,{data:t,mapStyle:r||E.Sr.BLANK,params:s,useParam:g,onStateChange:f}),n&&i.createElement(v,{title:e.title,params:s,meta:d,updateParam:(e,t)=>{const n=s[e];n&&p({...s,[e]:(0,k.aw)({...n,value:t})})},sourceLink:e.code},e.renderInfo(d)),n&&r&&i.createElement(P,null,"Hold down shift to rotate"))}}var I=n(1116);const j=a.ZP.div.withConfig({displayName:"styled__ExampleHeader",componentId:"sc-1dgi8sb-0"})(["font:bold 20px/28px var(--ifm-font-family-base);color:var(--ifm-color-content-secondary);margin:0 20px;border-bottom:1px solid 20px;display:inline-block;padding:20px 20px 4px 0;"]),O=a.ZP.main.withConfig({displayName:"styled__MainExamples",componentId:"sc-1dgi8sb-1"})(["padding:16px 0;"]),Z=a.ZP.main.withConfig({displayName:"styled__ExamplesGroup",componentId:"sc-1dgi8sb-2"})(["display:flex;flex-wrap:wrap;padding:16px;"]),S=a.ZP.a.withConfig({displayName:"styled__ExampleCard",componentId:"sc-1dgi8sb-3"})(["cursor:pointer;text-decoration:none;width:50%;max-width:240px;line-height:0;outline:none;padding:4px;position:relative;img{transition-property:filter;transition-duration:var(--ifm-transition-slow);transition-timing-function:var(--ifm-transition-timing-default);}&:hover{box-shadow:var(--ifm-global-shadow-md);}&:hover img{filter:contrast(0.2);}","{width:33%;min-width:200px;}@media screen and (max-width:632px){width:50%;}"],r),T=a.ZP.div.withConfig({displayName:"styled__ExampleTitle",componentId:"sc-1dgi8sb-4"})(["position:absolute;display:flex;justify-content:center;flex-direction:column;color:var(--ifm-color-white);font-size:1.5em;text-align:center;line-height:initial;width:90%;height:90%;top:5%;left:5%;border:solid 1px var(--ifm-color-white);opacity:0;transition-property:opacity;transition-duration:var(--ifm-transition-slow);transition-timing-function:var(--ifm-transition-timing-default);&:hover{opacity:1;}"]);function z(e,t){let{label:n,items:a}=e;return[i.createElement(j,{key:n+"-header"},n),i.createElement(Z,{key:n},a.map((e=>function(e,t){const n=(0,C.Z)(t(e)),{label:a,href:o}=e;return i.createElement(S,{key:a,href:o},i.createElement("img",{width:"100%",src:n,alt:a}),i.createElement(T,null,i.createElement("span",null,a)))}(e,t))))]}function L(e){let{getThumbnail:t}=e;const n=(0,I.V)();return i.createElement(O,null,n.items.map((e=>"category"===e.type?z(e,t):null)))}var A=n(52263);const $=a.ZP.section.withConfig({displayName:"styled__Banner",componentId:"sc-exnbu5-0"})(["position:relative;height:30rem;background:var(--ifm-color-gray-400);color:var(--ifm-color-gray-900);z-index:0;","{height:80vh;}"],r),V=a.ZP.div.withConfig({displayName:"styled__Container",componentId:"sc-exnbu5-1"})(["position:relative;padding:2rem;max-width:80rem;width:100%;height:100%;margin:0;"]),M=(0,a.ZP)(V).withConfig({displayName:"styled__BannerContainer",componentId:"sc-exnbu5-2"})(["position:absolute;bottom:0;height:auto;padding-left:4rem;z-index:0;pointer-events:none;"]),q=a.ZP.div.withConfig({displayName:"styled__HeroExampleContainer",componentId:"sc-exnbu5-3"})(["position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;"]),D=(a.ZP.section.withConfig({displayName:"styled__Section",componentId:"sc-exnbu5-4"})(["&:nth-child(2n + 1){background:var(--ifm-color-gray-300);}"]),a.ZP.h1.withConfig({displayName:"styled__ProjectName",componentId:"sc-exnbu5-5"})(["font-size:5em;line-height:1;text-transform:uppercase;letter-spacing:4px;font-weight:700;margin:0;margin-bottom:16px;"])),B=a.ZP.a.withConfig({displayName:"styled__GetStartedLink",componentId:"sc-exnbu5-6"})(["pointer-events:all;font-size:12px;line-height:44px;letter-spacing:2px;font-weight:bold;margin:24px 0;padding:0 4rem;pointer-events:all;display:inline-block;text-decoration:none;transition:background-color 250ms ease-in,color 250ms ease-in;border:solid 2px var(--ifm-color-primary);color:var(--ifm-color-gray-900);border-image:linear-gradient( to right,var(--ifm-color-gray-700) 0%,var(--ifm-color-gray-400) 100% );border-image-slice:2;&:visited{color:var(--ifm-color-gray-900);}&:active{color:var(--ifm-color-white);}&:hover{color:var(--ifm-color-white);background-color:var(--ifm-color-primary);}"]);function F(e){let{HeroExample:t,children:n}=e;const{siteConfig:a}=(0,A.Z)();return i.createElement(i.Fragment,null,i.createElement($,null,i.createElement(q,null,t&&i.createElement(t,null)),i.createElement(M,null,i.createElement(D,null,a.title),i.createElement("p",null,a.tagline),i.createElement(B,{href:"./docs/get-started/getting-started"},"GET STARTED"))),n)}},27260:(e,t,n)=>{n.d(t,{IM:()=>a,Sr:()=>i,fL:()=>o});const i={LIGHT:"https://deck.gl/mapstyle/deck-light.json",LIGHT_LABEL:"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",DARK:"https://deck.gl/mapstyle/deck-dark.json",BLANK:{version:8,sources:{},layers:[]}},a="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website",o="https://github.com/visgl/deck.gl/tree/master"},99126:(e,t,n)=>{n.d(t,{V:()=>l,m:()=>r});var i=n(64641);const a={};function o(e,t){let n=0;a[e]&&a[e].terminate();const i=new Worker(e);a[e]=i;let o=[];i.onmessage=e=>{const{action:n,data:a,meta:r}=e.data;"end"===n?i.terminate():"add"===n&&a&&a.length&&(o=o.concat(a),t(o,r))},this.onProgress=e=>{const{responseText:t}=e.target,a=t.lastIndexOf("\n")+1;i.postMessage({event:"progress",text:t.slice(n,a)}),n=a},this.onLoad=e=>{const{responseText:t}=e;i.postMessage({event:"load",text:t.slice(n)})}}function r(e,t,n){if(t){const a=(0,i.WY)(e),r=new o(t,((e,t)=>{n(e,t)}));a.on("progress",r.onProgress).on("load",r.onLoad).get()}else/\.(json|geojson)$/.test(e)?(0,i.AV)(e,((e,t)=>{e||n(t,{})})):(0,i.fL)(e,((e,t)=>{e||n(t,{})}))}function l(e,t){return t.match(/^\w+:\/\//)?t:e.replace(/\/$/,"")+"/"+t.replace(/^\//,"")}},49616:(e,t,n)=>{n.d(t,{Xq:()=>o,aw:()=>a});var i=n(32462);const a=e=>{if("function"===e.type){let t=String(e.value);if(Array.isArray(e.value)&&(t="["+t+"]"),"function"==typeof e.value)return t=t.replace(/^function (\w+)?\((\w*?)\)/,"$2 =>"),t=t.replace(/^function (\w+)?(\(.*?\))/,"$2 =>"),t=t.replace(/\{\s*return\s*(.*?);?\s*\}$/,"$1"),{...e,displayValue:t};if(!e.altType)return{...e,displayValue:t};e.type=e.altType}if("json"===e.type)return{...e,displayValue:JSON.stringify(e.value)};if("color"===e.type){const n=function(e){if(!e)return[255,255,255,0];if(Array.isArray(e))return e.slice(0,4);const t=(0,i.B8)(e);return[t.r,t.g,t.b,255]}(e.value);return{...e,value:n,displayValue:(t=n,t.slice(0,3).reduce(((e,t)=>e+(t<16?"0":"")+t.toString(16)),"#"))}}var t;return{...e,displayValue:String(e.value)}},o=e=>e?e<1e3?e.toString():(e/=1e3)<1e3?e.toFixed(1)+"K":(e/=1e3).toFixed(1)+"M":0}}]);