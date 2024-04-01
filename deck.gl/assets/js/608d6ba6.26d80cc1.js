"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),g=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=g(a),u=l,m=c["".concat(o,".").concat(u)]||c[u]||p[u]||i;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,n[1]=s;for(var g=2;g<i;g++)n[g]=a[g];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=a(83117),l=(a(67294),a(3905));const i={},n="Introduction",s={unversionedId:"README",id:"README",title:"Introduction",description:"These docs are for",source:"@site/../docs/README.md",sourceDirName:".",slug:"/",permalink:"/deck.gl/docs/",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What's New",permalink:"/deck.gl/docs/whats-new"}},o={},g=[{value:"Flavors",id:"flavors",level:2},{value:"Script Tag",id:"script-tag",level:3},{value:"NPM Module",id:"npm-module",level:3},{value:"Pure JS",id:"pure-js",level:4},{value:"React",id:"react",level:4},{value:"Python",id:"python",level:3},{value:"Third-Party Bindings",id:"third-party-bindings",level:3},{value:"Ecosystem",id:"ecosystem",level:2},{value:"Learning deck.gl",id:"learning-deckgl",level:2},{value:"Learning Reactive UI Programming",id:"learning-reactive-ui-programming",level:3},{value:"Understanding WebGL2/WebGPU",id:"understanding-webgl2webgpu",level:3}],d={toc:g},c="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",{align:"center"},"These docs are for",(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.8-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.8-brightgreen.svg?style=flat-square"})),"Looking for an old version?",(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.7-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.7-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.6-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.6-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.5-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.5-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.4-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.4-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.3-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.3-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.2-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.2-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.1-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.1-brightgreen.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/8.0-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v8.0-green.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/7.3-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v7.3-green.svg?style=flat-square"})),(0,l.kt)("a",{href:"https://github.com/visgl/deck.gl/blob/6.4-release/docs/README.md"},(0,l.kt)("img",{src:"https://img.shields.io/badge/deck.gl-v6.4-green.svg?style=flat-square"}))),(0,l.kt)("p",null,"deck.gl is designed to simplify high-performance, WebGL2/WebGPU based visualization of large data sets. Users can quickly get impressive visual results with minimal effort by composing existing layers, or leverage deck.gl's extensible architecture to address custom needs."),(0,l.kt)("p",null,"deck.gl maps ",(0,l.kt)("strong",{parentName:"p"},"data")," (usually an array of JSON objects) into a stack of visual ",(0,l.kt)("strong",{parentName:"p"},"layers")," - e.g. icons, polygons, texts; and look at them with ",(0,l.kt)("strong",{parentName:"p"},"views"),": e.g. map, first-person, orthographic."),(0,l.kt)("p",null,"deck.gl handles a number of challenges out of the box:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Performant rendering and updating of large data sets"),(0,l.kt)("li",{parentName:"ul"},"Interactive event handling such as picking, highlighting and filtering"),(0,l.kt)("li",{parentName:"ul"},"Cartographic projections and integration with major basemap providers including Mapbox, Google Maps and ESRI"),(0,l.kt)("li",{parentName:"ul"},"A catalog of proven, well-tested layers")),(0,l.kt)("p",null,"Deck.gl is designed to be highly customizable. All layers come with flexible APIs to allow programmatic control of each aspect of the rendering. All core classes such are easily extendable by the users to address custom use cases."),(0,l.kt)("h2",{id:"flavors"},"Flavors"),(0,l.kt)("h3",{id:"script-tag"},"Script Tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@latest/dist.min.js"><\/script>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/get-started/using-standalone#using-the-scripting-api"},"Get started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/scripting"},"Full examples"))),(0,l.kt)("h3",{id:"npm-module"},"NPM Module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n")),(0,l.kt)("h4",{id:"pure-js"},"Pure JS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/get-started/using-standalone"},"Get started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js"},"Full examples"))),(0,l.kt)("h4",{id:"react"},"React"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/get-started/using-with-react"},"Get started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/react"},"Full examples"))),(0,l.kt)("h3",{id:"python"},"Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pydeck\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pydeck.gl/installation.html"},"Get started")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pydeck.gl/"},"Examples"))),(0,l.kt)("h3",{id:"third-party-bindings"},"Third-Party Bindings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/danmarshall/deckgl-typings"},"deckgl-typings")," (Typescript)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://symbolixau.github.io/mapdeck/articles/mapdeck.html"},"mapdeck")," (R)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/SandDance/tree/master/packages/vega-deck.gl"},"vega-deck.gl")," (",(0,l.kt)("a",{parentName:"li",href:"https://vega.github.io/"},"Vega"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://earthengine-layers.com/"},"earthengine-layers")," (",(0,l.kt)("a",{parentName:"li",href:"https://earthengine.google.com/"},"Google Earth Engine"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/UnfoldedInc/deck.gl-native"},"deck.gl-native")," (C++)")),(0,l.kt)("h2",{id:"ecosystem"},"Ecosystem"),(0,l.kt)("p",null,"deck.gl is one of the main frameworks in the ",(0,l.kt)("a",{parentName:"p",href:"http://vis.gl"},"vis.gl")," framework suite."),(0,l.kt)("p",null,"deck.gl is developed in parallel with a number of companion modules, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://luma.gl/"},"luma.gl")," - A general purpose WebGL2/WebGPU library designed to be interoperable both with the raw browser APIs and (as far as possible) with other WebGL2/WebGPU libraries. In particular, luma.gl does not claim ownership of the WebGL2/WebGPU context, and can work with any supplied context, including contexts created by the application or other libraries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://loaders.gl"},"loaders.gl")," - a suite of framework-independent loaders for file formats focused on visualization of big data, including point clouds, 3D geometries, images, geospatial formats as well as tabular data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://visgl.github.io/react-map-gl/"},"react-map-gl")," - A React wrapper around Mapbox GL which works seamlessly with deck.gl. There are two integration modes to choose from depending on which features you need, see ",(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/developer-guide/base-maps/using-with-mapbox#react-map-gl"},"Using With Mapbox")," for details."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nebula.gl/"},"nebula.gl")," - A high-performance feature editing framework for deck.gl.")),(0,l.kt)("h2",{id:"learning-deckgl"},"Learning deck.gl"),(0,l.kt)("p",null,"How you approach learning deck.gl will depend on your previous knowledge and how you want to use it."),(0,l.kt)("p",null,"Getting familiar with the various layers and their props, and reading the basic articles in the deck.gl developer guide should of course be one of the first steps."),(0,l.kt)("p",null,"Exploring the deck.gl examples is a good starting point."),(0,l.kt)("p",null,"In-depth tutorials for how to develop deck.gl applications are available on the ",(0,l.kt)("a",{parentName:"p",href:"http://vis.academy/"},"Vis Academy")," website."),(0,l.kt)("p",null,"And our ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/vis-gl"},"blog")," contains a lot of additional information that might be helpful."),(0,l.kt)("p",null,"But where to go after that?"),(0,l.kt)("h3",{id:"learning-reactive-ui-programming"},"Learning Reactive UI Programming"),(0,l.kt)("p",null,'deck.gl is designed according to functional UI programming principles, popularized by frameworks like React. The key to writing good, performant deck.gl applications and layers lies in knowing how to minimize updates and redundant calculations, understanding concepts like "shallow equality" etc. This is critical when using deck.gl with React, but can still be helpful to understand when using deck.gl in non-React contexts.'),(0,l.kt)("p",null,"There is an impressive amount of information (documentation, blog posts, educational videos, etc.) on the reactive programming paradigm in relation to modern web frameworks such as React, Flux and Redux. Where to start depends mostly on your application architecture choices. Exploring such information will take you beyond what we can cover in the basic deck.gl developer guide article on Updates."),(0,l.kt)("h3",{id:"understanding-webgl2webgpu"},"Understanding WebGL2/WebGPU"),(0,l.kt)("p",null,"Knowledge of WebGL2 or WebGPU is only needed if you want to create custom layers in deck.gl. Note that while trying out a new ambitious rendering approach for a new layer will likely require deeper knowledge, it is often possible to modify or extend existing deck.gl layers (including modifying the shader code) with a surprisingly limited amount of WebGL2/WebGPU knowledge."),(0,l.kt)("p",null,"There are many web resources for learning WebGL2/WebGPU. ",(0,l.kt)("a",{parentName:"p",href:"https://luma.gl/"},"luma.gl")," can be a good start."))}p.isMDXComponent=!0}}]);