"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return r?a.createElement(h,c(c({ref:t},p),{},{components:r})):a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},c="CameraLight (Experimental)",o={unversionedId:"api-reference/core/camera-light",id:"api-reference/core/camera-light",title:"CameraLight (Experimental)",description:"CameraLight is a special point light source which always emits from the camera position.",source:"@site/../docs/api-reference/core/camera-light.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/camera-light",permalink:"/deck.gl/docs/api-reference/core/camera-light",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/camera-light.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DirectionalLight",permalink:"/deck.gl/docs/api-reference/core/directional-light"},next:{title:"SunLight (Experimental)",permalink:"/deck.gl/docs/api-reference/core/sun-light"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"constructor",id:"constructor",level:2},{value:"Source",id:"source",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cameralight-experimental"},"CameraLight (Experimental)"),(0,n.kt)("p",null,"CameraLight is a special ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/point-light"},"point light")," source which always emits from the camera position."),(0,n.kt)("div",{align:"center"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/camera-light.gif"}),(0,n.kt)("p",null,(0,n.kt)("i",null,"Two spheres with camera light")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Create an camera light source."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {_CameraLight as CameraLight} from '@deck.gl/core';\n\nnew CameraLight({\n  color: [255, 255, 255],\n  intensity: 1\n});\n")),(0,n.kt)("h2",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"The constructor for the ",(0,n.kt)("inlineCode",{parentName:"p"},"CameraLight")," class. Use this to create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"CameraLight"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const cameraLight = new CameraLight({color, intensity});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color")," - (",(0,n.kt)("em",{parentName:"li"},"array"),")  RGB color of camera light source, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"intensity")," - (",(0,n.kt)("em",{parentName:"li"},"number"),") Strength of camera light source, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/core/src/effects/lighting/camera-light.ts"},"/modules/core/src/effects/lighting/camera-light.ts")))}u.isMDXComponent=!0}}]);