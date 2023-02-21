"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={},a="PointLight",l={unversionedId:"api-reference/core/point-light",id:"api-reference/core/point-light",title:"PointLight",description:"Create a point light source which emits from a point in all directions.Point lights attenuation is not available. At most 5 directional lights can be supported.",source:"@site/../docs/api-reference/core/point-light.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/point-light",permalink:"/deck.gl/docs/api-reference/core/point-light",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/point-light.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AmbientLight",permalink:"/deck.gl/docs/api-reference/core/ambient-light"},next:{title:"DirectionalLight",permalink:"/deck.gl/docs/api-reference/core/directional-light"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Source",id:"source",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pointlight"},"PointLight"),(0,i.kt)("p",null,"Create a point light source which emits from a point in all directions.Point lights attenuation is not available. At most 5 directional lights can be supported."),(0,i.kt)("div",{align:"center"},(0,i.kt)("div",null,(0,i.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/point-light.gif"}),(0,i.kt)("p",null,(0,i.kt)("i",null,"Two spheres with point light")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create a point light source with color, intensity and position."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pointLight= new PointLight({\n  color: [128, 128, 0],\n  intensity: 2.0,\n  position: [0, 0, 200]\n});\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"The constructor for the ",(0,i.kt)("inlineCode",{parentName:"p"},"PointLight")," class. Use this to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"PointLight"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pointLight = new PointLight({color, intensity, position});\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," - (",(0,i.kt)("em",{parentName:"li"},"array"),",)  RGB color of point light source, default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intensity")," - (",(0,i.kt)("em",{parentName:"li"},"number"),") Strength of point light source, default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"position")," - (",(0,i.kt)("em",{parentName:"li"},"array"),",)  Location of point light source, default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"[0, 0, 1]"),".The coordinate system of the position depends on the current ",(0,i.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/deck#views"},"view"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"[longitude, latitude, altitude]")," in geospatial views and world position in non-geospatial views.")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/core/src/effects/lighting/point-light.ts"},"/modules/core/src/effects/lighting/point-light.ts")))}d.isMDXComponent=!0}}]);