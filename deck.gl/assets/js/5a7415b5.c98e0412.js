"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(83117),i=(t(67294),t(3905));const o={},l="ClipExtension",a={unversionedId:"api-reference/extensions/clip-extension",id:"api-reference/extensions/clip-extension",title:"ClipExtension",description:"The ClipExtension adds support for clipping rendered layers by rectangular bounds.",source:"@site/../docs/api-reference/extensions/clip-extension.md",sourceDirName:"api-reference/extensions",slug:"/api-reference/extensions/clip-extension",permalink:"/deck.gl/docs/api-reference/extensions/clip-extension",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/clip-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BrushingExtension",permalink:"/deck.gl/docs/api-reference/extensions/brushing-extension"},next:{title:"CollisionFilterExtension",permalink:"/deck.gl/docs/api-reference/extensions/collision-filter-extension"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"<code>clipBounds</code> (number4)",id:"clipbounds",level:4},{value:"<code>clipByInstance</code> (boolean, optional)",id:"clipbyinstance",level:4},{value:"Source",id:"source",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clipextension"},"ClipExtension"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ClipExtension")," adds support for clipping rendered layers by rectangular bounds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {GeoJsonLayer} from '@deck.gl/layers';\nimport {ClipExtension} from '@deck.gl/extensions';\n\nconst layer = new GeoJsonLayer({\n  // Natural Earth countries dataset includes Antarctica, which renders stretched further to south in MapView with viewState normalization disabled\n  data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson',\n  // clip rendered layer by Mercator bounds\n  extensions: [new ClipExtension()],\n  clipBounds: [-180, -85.051129, 180, 85.051129],\n});\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the dependencies from NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/extensions\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {ClipExtension} from '@deck.gl/extensions';\nnew ClipExtension();\n")),(0,i.kt)("p",null,"To use pre-bundled scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^9.0.0/dist.min.js"><\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new deck.ClipExtension();\n")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new ClipExtension();\n")),(0,i.kt)("h2",{id:"layer-properties"},"Layer Properties"),(0,i.kt)("p",null,"When added to a layer via the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," prop, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClipExtension")," adds the following properties to the layer:"),(0,i.kt)("h4",{id:"clipbounds"},(0,i.kt)("inlineCode",{parentName:"h4"},"clipBounds")," (number","[4]",")"),(0,i.kt)("p",null,"Rectangular bounds to be used for clipping the rendered region."),(0,i.kt)("p",null,"Supported format: ",(0,i.kt)("inlineCode",{parentName:"p"},"[left, bottom, right, top]")),(0,i.kt)("h4",{id:"clipbyinstance"},(0,i.kt)("inlineCode",{parentName:"h4"},"clipByInstance")," (boolean, optional)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clipByInstance")," controls whether an object is clipped by its anchor (e.g. icon, point) or by its geometry (e.g. path, polygon). If not specified, it is deduced from whether there is an attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"instancePositions"),". This behavior can be overridden if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the anchor attribute goes by some other name"),(0,i.kt)("li",{parentName:"ul"},"to clip an anchored layer by geometry, like the text layer")),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/extensions/src/clip"},"modules/extensions/src/clip")))}u.isMDXComponent=!0}}]);