"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(83117),i=(r(67294),r(3905));const o={},a="OrbitView",l={unversionedId:"api-reference/core/orbit-view",id:"api-reference/core/orbit-view",title:"OrbitView",description:"The OrbitView class is a subclass of View that creates a 3D camera that rotates around a target position. It is usually used for the examination of a 3D scene in non-geospatial use cases.",source:"@site/../docs/api-reference/core/orbit-view.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/orbit-view",permalink:"/deck.gl/docs/api-reference/core/orbit-view",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/orbit-view.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OrthographicView",permalink:"/deck.gl/docs/api-reference/core/orthographic-view"},next:{title:"Controller",permalink:"/deck.gl/docs/api-reference/core/controller"}},p={},c=[{value:"Constructor",id:"constructor",level:2},{value:"<code>orbitAxis</code> (string, optional)",id:"orbitaxis",level:4},{value:"<code>projectionMatrix</code> (number16, optional)",id:"projectionmatrix",level:4},{value:"<code>fovy</code> (number, optional)",id:"fovy",level:4},{value:"<code>near</code> (number, optional)",id:"near",level:4},{value:"<code>far</code> (number, optional)",id:"far",level:4},{value:"<code>orthographic</code> (boolean)",id:"orthographic",level:4},{value:"View State",id:"view-state",level:2},{value:"Controller",id:"controller",level:2},{value:"Source",id:"source",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"orbitview"},"OrbitView"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OrbitView")," class is a subclass of ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/view"},"View")," that creates a 3D camera that rotates around a target position. It is usually used for the examination of a 3D scene in non-geospatial use cases."),(0,i.kt)("p",null,"It's recommended that you read the ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/views"},"Views and Projections guide")," before using this class."),(0,i.kt)("div",{style:{position:"relative",height:450}}),(0,i.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,i.kt)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl OrbitView",src:"https://codepen.io/vis-gl/embed/gOLprOZ?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,i.kt)("a",{href:"https://codepen.io/vis-gl/pen/gOLprOZ"},"deck.gl OrbitView")," by vis.gl (",(0,i.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,i.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {OrbitView} from '@deck.gl/core';\nconst view = new OrbitView({id, ...});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OrbitView")," takes the same parameters as the ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/view"},"View")," superclass constructor, plus the following:"),(0,i.kt)("h4",{id:"orbitaxis"},(0,i.kt)("inlineCode",{parentName:"h4"},"orbitAxis")," (string, optional)"),(0,i.kt)("p",null,"Axis with 360 degrees rotating freedom, either ",(0,i.kt)("inlineCode",{parentName:"p"},"'Y'")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"'Z'"),", default to ",(0,i.kt)("inlineCode",{parentName:"p"},"'Z'"),"."),(0,i.kt)("h4",{id:"projectionmatrix"},(0,i.kt)("inlineCode",{parentName:"h4"},"projectionMatrix")," (number","[16]",", optional)"),(0,i.kt)("p",null,"Projection matrix."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"projectionMatrix")," is not supplied, the ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," class will build a projection matrix from the following parameters:"),(0,i.kt)("h4",{id:"fovy"},(0,i.kt)("inlineCode",{parentName:"h4"},"fovy")," (number, optional)"),(0,i.kt)("p",null,"Field of view covered by camera, in the perspective case. In degrees. Default ",(0,i.kt)("inlineCode",{parentName:"p"},"50"),"."),(0,i.kt)("h4",{id:"near"},(0,i.kt)("inlineCode",{parentName:"h4"},"near")," (number, optional)"),(0,i.kt)("p",null,"Distance of near clipping plane. Default ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1"),"."),(0,i.kt)("h4",{id:"far"},(0,i.kt)("inlineCode",{parentName:"h4"},"far")," (number, optional)"),(0,i.kt)("p",null,"Distance of far clipping plane. Default ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,i.kt)("h4",{id:"orthographic"},(0,i.kt)("inlineCode",{parentName:"h4"},"orthographic")," (boolean)"),(0,i.kt)("p",null,"Whether to create an orthographic or perspective projection matrix. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (perspective projection)."),(0,i.kt)("h2",{id:"view-state"},"View State"),(0,i.kt)("p",null,"To render, ",(0,i.kt)("inlineCode",{parentName:"p"},"OrbitView")," needs to be used together with a ",(0,i.kt)("inlineCode",{parentName:"p"},"viewState")," with the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target")," (number","[3]",", optional) - The world position at the center of the viewport. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"[0, 0, 0]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rotationOrbit")," (number, optional) - Rotating angle around orbit axis. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rotationX")," (number, optional) - Rotating angle around X axis. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zoom")," (number, optional) - The zoom level of the viewport. ",(0,i.kt)("inlineCode",{parentName:"li"},"zoom: 0")," maps one unit distance to one pixel on screen, and increasing ",(0,i.kt)("inlineCode",{parentName:"li"},"zoom")," by ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," scales the same object to twice as large. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minZoom")," (number, optional) - The min zoom level of the viewport. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"-Infinity"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxZoom")," (number, optional) - The max zoom level of the viewport. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minRotationX")," (number, optional) - The min rotating angle around X axis. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"-90"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxRotationX")," (number, optional) - The max rotating angle around X axis. Default ",(0,i.kt)("inlineCode",{parentName:"li"},"90"),".")),(0,i.kt)("h2",{id:"controller"},"Controller"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"OrbitView")," uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"OrbitController")," to handle interactivity. To enable the controller, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const view = new OrbitView({id: '3d-scene', controller: true});\n")),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/orbit-controller"},"OrbitController")," documentation for a full list of supported options."),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/blob/master/modules/core/src/views/orbit-view.ts"},"modules/core/src/views/orbit-view.ts")))}u.isMDXComponent=!0}}]);