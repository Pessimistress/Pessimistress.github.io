"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const a={},o="DirectionalLight",l={unversionedId:"api-reference/core/directional-light",id:"api-reference/core/directional-light",title:"DirectionalLight",description:'Create a directional light source which emits from a specific direction.A directional light can be considered "infinitely" far away (like the Sun) and does not attenuate with distance. At most 5 directional lights can be supported.',source:"@site/../docs/api-reference/core/directional-light.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/directional-light",permalink:"/docs/api-reference/core/directional-light",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/directional-light.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PointLight",permalink:"/docs/api-reference/core/point-light"},next:{title:"CameraLight (Experimental)",permalink:"/docs/api-reference/core/camera-light"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor",id:"constructor",level:3},{value:"Source",id:"source",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"directionallight"},"DirectionalLight"),(0,n.kt)("p",null,'Create a directional light source which emits from a specific direction.A directional light can be considered "infinitely" far away (like the Sun) and does not attenuate with distance. At most 5 directional lights can be supported.'),(0,n.kt)("div",{align:"center"},(0,n.kt)("div",null,(0,n.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/directional-light.gif"}),(0,n.kt)("p",null,(0,n.kt)("i",null,"Two spheres with directional light")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Create a directional light source with color, intensity and direction."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const directionalLight= new DirectionalLight({\n  color: [128, 128, 0],\n  intensity: 2.0,\n  direction: [0, -100, -100]\n});\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"The constructor for the ",(0,n.kt)("inlineCode",{parentName:"p"},"DirectionalLight")," class. Use this to create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"DirectionalLight"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const directionalLight = new DirectionalLight({color, intensity, direction});\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"color")," - (",(0,n.kt)("em",{parentName:"li"},"array"),",)  RGB color of directional light source, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"intensity")," - (",(0,n.kt)("em",{parentName:"li"},"number"),") Strength of directional light source, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"direction")," - (",(0,n.kt)("em",{parentName:"li"},"array"),",)  3D vector specifies the direction the light comes from, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"[0, 0, -1]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_shadow")," - (",(0,n.kt)("em",{parentName:"li"},"boolean"),", optional) Enable experimental shadow effect, default value is ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/core/src/effects/lighting/directional-light.ts"},"/modules/core/src/effects/lighting/directional-light.ts")))}u.isMDXComponent=!0}}]);