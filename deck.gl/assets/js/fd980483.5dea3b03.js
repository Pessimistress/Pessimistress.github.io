"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},o="Tips and Tricks",l={unversionedId:"developer-guide/tips-and-tricks",id:"developer-guide/tips-and-tricks",title:"Tips and Tricks",description:"Rendering Tips",source:"@site/../docs/developer-guide/tips-and-tricks.md",sourceDirName:"developer-guide",slug:"/developer-guide/tips-and-tricks",permalink:"/docs/developer-guide/tips-and-tricks",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/tips-and-tricks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About 64-bit Layers",permalink:"/docs/developer-guide/fp64"},next:{title:"Building Apps",permalink:"/docs/developer-guide/building-apps"}},s={},p=[{value:"Rendering Tips",id:"rendering-tips",level:2},{value:"Per Layer Control of WebGL parameters",id:"per-layer-control-of-webgl-parameters",level:3},{value:"z-fighting and Depth Testing",id:"z-fighting-and-depth-testing",level:3},{value:"Browser Blending Modes",id:"browser-blending-modes",level:3},{value:"Optimization for Mobile",id:"optimization-for-mobile",level:2},{value:"Experimental Memory Usage Controls",id:"experimental-memory-usage-controls",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,a.kt)("h2",{id:"rendering-tips"},"Rendering Tips"),(0,a.kt)("h3",{id:"per-layer-control-of-webgl-parameters"},"Per Layer Control of WebGL parameters"),(0,a.kt)("p",null,"The base ",(0,a.kt)("inlineCode",{parentName:"p"},"Layer")," class (which is inherited by all layers) supports a ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," property that allows applications to specify the state of WebGL parameters such as blending mode, depth testing etc. This can provide signigicant extra control over rendering."),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," prop leverages the luma.gl v4 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/visgl/luma.gl/blob/8.5-release/modules/gltools/docs/api-reference/parameter-setting.md"},"setParameters")," API, which allows all WebGL parameters to be specified as keys in a single parameter object."),(0,a.kt)("h3",{id:"z-fighting-and-depth-testing"},"z-fighting and Depth Testing"),(0,a.kt)("p",null,'A common problem faced by 3D application developers is known as "z fighting". It relates to multiple objects being drawn at the same depth in the 3D scene, and due to rounding artifacts in the so called z buffer the GPU cannot accurately determine whether a pixel has already been drawn in a specific place.'),(0,a.kt)("p",null,"If you are not using 3D extrusions, the easiest way to get rid of z fighting is typically just to turn off depth testing. It can be done globally or per-layer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ...Layer({\n  ...,\n  parameters: {\n    depthTest: false\n  }\n});\n")),(0,a.kt)("p",null,"Also, if the z-fighting occurs between layers (rather than between elements within a single layers), deck.gl offers a slightly more sophisticated ",(0,a.kt)("inlineCode",{parentName:"p"},"polygonOffset")," property."),(0,a.kt)("h3",{id:"browser-blending-modes"},"Browser Blending Modes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Occasionally, the default blending in the browser does not give ideal results. In that case you may want to test the tips in this section.")),(0,a.kt)("p",null,"To understand why browser blending modes can matter, consider that deck.gl renders in a separate transparent div on top of the map div, so the final composition of the image a user see on the monitor is controlled by the browser according to CSS settings instead of the WebGL settings."),(0,a.kt)("p",null,"One way to control this blending effect is by specifying the CSS property ",(0,a.kt)("inlineCode",{parentName:"p"},"mix-blend-mode")," in modern browsers to be ",(0,a.kt)("inlineCode",{parentName:"p"},"multiply"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".overlays canvas {\n  mix-blend-mode: multiply;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"multiply")," blend mode usually gives the expected results, as it only darkens. This blend mode keeps the overlay colors, but lets map legends underneath remain black and legible."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," that there is a caveat with setting ",(0,a.kt)("inlineCode",{parentName:"p"},"mix-blend-mode"),", as it can affect other peer HTML elements, especially other map children (perhaps controls or legends that are being rendered on top of the map).\nIf this is an issue, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"isolation")," CSS prop on the ",(0,a.kt)("inlineCode",{parentName:"p"},"DeckGL")," parent element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".deckgl-parent-class {\n  isolation: 'isolate';\n}\n")),(0,a.kt)("h2",{id:"optimization-for-mobile"},"Optimization for Mobile"),(0,a.kt)("h3",{id:"experimental-memory-usage-controls"},"Experimental Memory Usage Controls"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Deck")," class supports the following experimental props to aggressively reduce memory usage on memory-restricted devices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/deck#_pickable"},"_pickable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/deck#_typedArrayManagerProps"},"_typedArrayManagerProps"))),(0,a.kt)("p",null,"The app can sacrifice certain features and/or runtime performance in exchange for a smaller memory footprint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Deck({\n  // ...\n  _pickable: false,\n  _typedArrayManagerProps: isMobile ? {overAlloc: 1, poolSize: 0} : null\n})\n")))}m.isMDXComponent=!0}}]);