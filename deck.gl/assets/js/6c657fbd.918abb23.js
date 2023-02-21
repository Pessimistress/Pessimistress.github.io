"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=p(r),h=i,f=g["".concat(c,".").concat(h)]||g[h]||d[h]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},l="LightingEffect",o={unversionedId:"api-reference/core/lighting-effect",id:"api-reference/core/lighting-effect",title:"LightingEffect",description:"The LightingEffect applies ambient, point and directional lighting to layers which support material property.",source:"@site/../docs/api-reference/core/lighting-effect.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/lighting-effect",permalink:"/deck.gl/docs/api-reference/core/lighting-effect",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/lighting-effect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TransitionInterpolator",permalink:"/deck.gl/docs/api-reference/core/transition-interpolator"},next:{title:"PostProcessEffect",permalink:"/deck.gl/docs/api-reference/core/post-process-effect"}},c={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Members",id:"members",level:2},{value:"Light Sources",id:"light-sources",level:3},{value:"<code>ambientLight</code> (Object, optional)",id:"ambientlight",level:5},{value:"<code>directionalLights</code> (Array, optional)",id:"directionallights",level:5},{value:"<code>pointLights</code> (Array, optional)",id:"pointlights",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Source",id:"source",level:2}],s={toc:p},g="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightingeffect"},"LightingEffect"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LightingEffect")," applies ambient, point and directional lighting to layers which support material property."),(0,i.kt)("div",{style:{position:"relative",height:450}}),(0,i.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,i.kt)("iframe",{height:"450",width:"100%",scrolling:"no",title:"deck.gl LightingEffect Demo",src:"https://codepen.io/vis-gl/embed/ZZwrZz/?height=450&theme-id=light&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,i.kt)("a",{href:"https://codepen.io/vis-gl/pen/ZZwrZz/"},"deck.gl LightingEffect Demo")," by vis.gl (",(0,i.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,i.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new LightingEffect({light0, light1, light2, ...});\n")),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lights"),"(Object) - a collection of light sources. Keys can be any arbitrary name and values.")),(0,i.kt)("h2",{id:"members"},"Members"),(0,i.kt)("h3",{id:"light-sources"},"Light Sources"),(0,i.kt)("h5",{id:"ambientlight"},(0,i.kt)("inlineCode",{parentName:"h5"},"ambientLight")," (Object, optional)"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/ambient-light"},"AmbientLight")," source which illuminates all the objects equally."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ambient light source with color = ",(0,i.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]")," and intensity = ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"))),(0,i.kt)("h5",{id:"directionallights"},(0,i.kt)("inlineCode",{parentName:"h5"},"directionalLights")," (Array, optional)"),(0,i.kt)("p",null,"Array of ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/directional-light"},"DirectionalLight")," source which emits from a specific directions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: two directional light sources")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Light Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Color"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Intensity"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Direction"),(0,i.kt)("th",{parentName:"tr",align:"center"},"_shadow"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[255, 255, 255]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[-1, -3, -1]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[255, 255, 255]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"[1, 8, -2.5]"),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For rendering experimental shadow effect, ",(0,i.kt)("inlineCode",{parentName:"li"},"_shadow")," prop of ",(0,i.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/directional-light"},"DirectionalLight")," must be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". The effect can be toggled on and off for a layer by setting layer's ",(0,i.kt)("inlineCode",{parentName:"li"},"shadowEnabled")," prop.")),(0,i.kt)("h5",{id:"pointlights"},(0,i.kt)("inlineCode",{parentName:"h5"},"pointLights")," (Array, optional)"),(0,i.kt)("p",null,"Array of ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/point-light"},"PointLight")," source which emits from a point in all directions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"))),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only one ambient light is supported."),(0,i.kt)("li",{parentName:"ul"},"Point light position uses the same coordinate system as view state.")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/core/src/effects/lighting/lighting-effect.ts"},"/modules/core/src/effects/lighting/lighting-effect.ts")))}d.isMDXComponent=!0}}]);