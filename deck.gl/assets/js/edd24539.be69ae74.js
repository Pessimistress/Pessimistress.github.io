"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const l={},r="CollideExtension",a={unversionedId:"api-reference/extensions/collide-extension",id:"api-reference/extensions/collide-extension",title:"CollideExtension",description:"The CollideExtension allows layers to hide features which overlap with other features. An example is a dense ScatterplotLayer with many points which overlap: by using this extension points that collide with others are hidden such that only one of the colliding points is shown. The collisions are computed on the GPU in realtime, allowing the collisions to be updated smoothly on every frame.",source:"@site/../docs/api-reference/extensions/collide-extension.md",sourceDirName:"api-reference/extensions",slug:"/api-reference/extensions/collide-extension",permalink:"/deck.gl/docs/api-reference/extensions/collide-extension",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/collide-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClipExtension",permalink:"/deck.gl/docs/api-reference/extensions/clip-extension"},next:{title:"DataFilterExtension",permalink:"/deck.gl/docs/api-reference/extensions/data-filter-extension"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"<code>collideEnabled</code> (Boolean, optional)",id:"collideenabled",level:5},{value:"<code>collideGroup</code> (string, optional)",id:"collidegroup",level:5},{value:"<code>collideTestProps</code> (Object, optional)",id:"collidetestprops",level:5},{value:"<code>getCollidePriority</code> (Function, optional)",id:"getcollidepriority",level:5},{value:"Limitations",id:"limitations",level:2},{value:"Source",id:"source",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"collideextension"},"CollideExtension"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CollideExtension")," allows layers to hide features which overlap with other features. An example is a dense ",(0,i.kt)("inlineCode",{parentName:"p"},"ScatterplotLayer")," with many points which overlap: by using this extension points that collide with others are hidden such that only one of the colliding points is shown. The collisions are computed on the GPU in realtime, allowing the collisions to be updated smoothly on every frame."),(0,i.kt)("p",null,"To use this extension on a layer, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"CollideExtension")," to the layer's ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," prop."),(0,i.kt)("div",{style:{position:"relative",height:450}}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {ScatterplotLayer} from '@deck.gl/layers';\nimport {CollideExtension} from '@deck.gl/extensions';\n\nconst layer = new ScatterplotLayer({\n  id: 'points',\n  data: points,\n  extensions: [new CollideExtension()],\n  getPosition: d => d.COORDINATES,\n  getRadius: 10,\n  radiusUnits: 'pixels'\n})\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the dependencies from NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/extensions\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {CollideExtension} from '@deck.gl/extensions';\nnew CollideExtension();\n")),(0,i.kt)("p",null,"To use pre-bundled scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^8.9.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^8.9.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^8.9.0/dist.min.js"><\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new deck.CollideExtension();\n")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new CollideExtension();\n")),(0,i.kt)("h2",{id:"layer-properties"},"Layer Properties"),(0,i.kt)("p",null,"When added to a layer via the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," prop, the ",(0,i.kt)("inlineCode",{parentName:"p"},"CollideExtension")," adds the following properties to the layer:"),(0,i.kt)("h5",{id:"collideenabled"},(0,i.kt)("inlineCode",{parentName:"h5"},"collideEnabled")," (Boolean, optional)"),(0,i.kt)("p",null,"Enable/disable collisions. If collisions are disabled, all objects are rendered. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h5",{id:"collidegroup"},(0,i.kt)("inlineCode",{parentName:"h5"},"collideGroup")," (string, optional)"),(0,i.kt)("p",null,"Collision group this layer belongs to. If it is not set, the 'default' collision group is used. Two (or more) layers that share the same ",(0,i.kt)("inlineCode",{parentName:"p"},"collideGroup")," will be considered together when calculating collisions."),(0,i.kt)("p",null,"For example, here the icon and text features will avoid colliding with each other, but permits collisions with the scatterplot features."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const layers = [\n  new ScatterplotLayer({\n    ...,\n    extensions: [new CollideExtension()],\n    collideGroup: 'visualization'\n  }),\n  new IconLayer({\n    ...,\n    extensions: [new CollideExtension()],\n    collideGroup: 'legend'\n  }),\n  new TextLayer({\n    ...,\n    extensions: [new CollideExtension()],\n    collideGroup: 'legend'\n  })\n];\n")),(0,i.kt)("h5",{id:"collidetestprops"},(0,i.kt)("inlineCode",{parentName:"h5"},"collideTestProps")," (Object, optional)"),(0,i.kt)("p",null,"Props to override when computing collisions. A common use case is to increase the size of the features when computing collisions to provide greater spacing between visible features. For the ",(0,i.kt)("inlineCode",{parentName:"p"},"ScatterplotLayer")," this would be done by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"collideTestProps: {radiusScale: 2}\n")),(0,i.kt)("h5",{id:"getcollidepriority"},(0,i.kt)("inlineCode",{parentName:"h5"},"getCollidePriority")," (",(0,i.kt)("a",{parentName:"h5",href:"/deck.gl/docs/developer-guide/using-layers#accessors"},"Function"),", optional)"),(0,i.kt)("p",null,"The collision priority of each object. Features with higher values are shown preferentially.\nThe priority is a number in the range -1000 -> 1000, values outside will be clamped. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a number is provided, it is used for all objects in the layer."),(0,i.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its priority.")),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accessors are not supported in ",(0,i.kt)("inlineCode",{parentName:"li"},"collideTestProps")),(0,i.kt)("li",{parentName:"ul"},"Given that collisions is performed on the GPU, the layers of ",(0,i.kt)("inlineCode",{parentName:"li"},"@deck.gl/aggregation-layers")," module that does aggregation on the CPU, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"CPUGridLayer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HexagonLayer"),", are not supported."),(0,i.kt)("li",{parentName:"ul"},"The collision is point-in-polygon, specifically is computed by comparing the anchor point of a feature with the rasterized screen-space areas of other features. While good for realtime applications, generally this will not give the same results as a full collision test would.")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/8.9-release/modules/extensions/src/collide"},"modules/extensions/src/collide")))}u.isMDXComponent=!0}}]);