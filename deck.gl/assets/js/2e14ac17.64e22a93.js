"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},90601:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="OrthographicView",l={unversionedId:"api-reference/core/orthographic-view",id:"api-reference/core/orthographic-view",title:"OrthographicView",description:"The OrthographicView class is a subclass of View that creates a top-down view of the XY plane. It is usually used for rendering 2D charts in non-geospatial use cases.",source:"@site/../docs/api-reference/core/orthographic-view.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/orthographic-view",permalink:"/docs/api-reference/core/orthographic-view",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/orthographic-view.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FirstPersonView",permalink:"/docs/api-reference/core/first-person-view"},next:{title:"OrbitView",permalink:"/docs/api-reference/core/orbit-view"}},p={},c=[{value:"Constructor",id:"constructor",level:2},{value:"<code>flipY</code> (Boolean)",id:"flipy",level:5},{value:"<code>near</code> (Number, optional)",id:"near",level:5},{value:"<code>far</code> (Number, optional)",id:"far",level:5},{value:"View State",id:"view-state",level:2},{value:"Controller",id:"controller",level:2},{value:"Source",id:"source",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"orthographicview"},"OrthographicView"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OrthographicView")," class is a subclass of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/view"},"View")," that creates a top-down view of the XY plane. It is usually used for rendering 2D charts in non-geospatial use cases."),(0,o.kt)("p",null,"It's recommended that you read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-guide/views"},"Views and Projections guide")," before using this class."),(0,o.kt)("div",{style:{position:"relative",height:450}}),(0,o.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,o.kt)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl OrthographicView",src:"https://codepen.io/vis-gl/embed/YzpXqzv?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,o.kt)("a",{href:"https://codepen.io/vis-gl/pen/YzpXqzv"},"deck.gl OrthographicView")," by vis.gl (",(0,o.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,o.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {OrthographicView} from '@deck.gl/core';\nconst view = new OrthographicView({id, ...});\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OrthographicView")," takes the same parameters as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/view"},"View")," superclass constructor, plus the following:"),(0,o.kt)("h5",{id:"flipy"},(0,o.kt)("inlineCode",{parentName:"h5"},"flipY")," (Boolean)"),(0,o.kt)("p",null,"Whether to use top-left coordinates (",(0,o.kt)("inlineCode",{parentName:"p"},"true"),") or bottom-left coordinates (",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). Default ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h5",{id:"near"},(0,o.kt)("inlineCode",{parentName:"h5"},"near")," (Number, optional)"),(0,o.kt)("p",null,"Distance of near clipping plane. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1"),"."),(0,o.kt)("h5",{id:"far"},(0,o.kt)("inlineCode",{parentName:"h5"},"far")," (Number, optional)"),(0,o.kt)("p",null,"Distance of far clipping plane. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,o.kt)("h2",{id:"view-state"},"View State"),(0,o.kt)("p",null,"To render, ",(0,o.kt)("inlineCode",{parentName:"p"},"OrthographicView")," needs to be used together with a ",(0,o.kt)("inlineCode",{parentName:"p"},"viewState")," with the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," (Number","[3]",", optional) - The world position at the center of the viewport. Default ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 0, 0]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zoom")," (Number|Number","[2]",", optional) - The zoom level of the viewport. ",(0,o.kt)("inlineCode",{parentName:"li"},"zoom: 0")," maps one unit distance to one pixel on screen, and increasing ",(0,o.kt)("inlineCode",{parentName:"li"},"zoom")," by ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," scales the same object to twice as large. To apply independent zoom levels to the X and Y axes, supply an array ",(0,o.kt)("inlineCode",{parentName:"li"},"[zoomX, zoomY]"),". Default ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"minZoom")," (Number, optional) - The min zoom level of the viewport. Default ",(0,o.kt)("inlineCode",{parentName:"li"},"-Infinity"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxZoom")," (Number, optional) - The max zoom level of the viewport. Default ",(0,o.kt)("inlineCode",{parentName:"li"},"Infinity"),".")),(0,o.kt)("h2",{id:"controller"},"Controller"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"OrthographicView")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"OrthographicController")," to handle interactivity. To enable the controller, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const view = new OrthographicView({id: '2d-scene', controller: true});\n")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/orthographic-controller"},"OrthographicController")," documentation for a full list of supported options."),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/blob/master/modules/core/src/views/orthographic-view.ts"},"modules/core/src/views/orthographic-view.ts")))}d.isMDXComponent=!0}}]);