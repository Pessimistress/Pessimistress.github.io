"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=i,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="SunLight (Experimental)",l={unversionedId:"api-reference/core/sun-light",id:"api-reference/core/sun-light",title:"SunLight (Experimental)",description:"SunLight is a directional light source simulating the sun. Sun position calculations are based on article and inspired by SunCalc.",source:"@site/../docs/api-reference/core/sun-light.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/sun-light",permalink:"/docs/api-reference/core/sun-light",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/sun-light.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CameraLight (Experimental)",permalink:"/docs/api-reference/core/camera-light"},next:{title:"@deck.gl/arcgis",permalink:"/docs/api-reference/arcgis/overview"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"constructor",id:"constructor",level:2},{value:"Source",id:"source",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sunlight-experimental"},"SunLight (Experimental)"),(0,i.kt)("p",null,"SunLight is a directional light source simulating the sun. Sun position calculations are based on ",(0,i.kt)("a",{parentName:"p",href:"http://aa.quae.nl/en/reken/zonpositie.html"},"article")," and inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/suncalc"},"SunCalc"),". "),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create a sun light source."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {_SunLight as SunLight} from '@deck.gl/core';\n\nnew SunLight({\n  timestamp: 1554927200000, \n  color: [255, 0, 0],\n  intensity: 1\n});\n")),(0,i.kt)("h2",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"The constructor for the ",(0,i.kt)("inlineCode",{parentName:"p"},"SunLight")," class. Use this to create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"SunLight"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const sunLight = new SunLight({timestamp, color, intensity});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," - (",(0,i.kt)("em",{parentName:"li"},"number"),") - Unix timestamp in milliseconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," - (",(0,i.kt)("em",{parentName:"li"},"array"),")  RGB color of sun light source, default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"[255, 255, 255]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intensity")," - (",(0,i.kt)("em",{parentName:"li"},"number"),") Strength of sun light source, default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/core/src/effects/lighting/sun-light.ts"},"/modules/core/src/effects/lighting/sun-light.ts")))}m.isMDXComponent=!0}}]);