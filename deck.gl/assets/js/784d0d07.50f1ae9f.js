"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[693],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,u=d["".concat(o,".").concat(k)]||d[k]||m[k]||i;return t?n.createElement(u,p(p({ref:r},s),{},{components:t})):n.createElement(u,p({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=k;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},75504:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={},p="DeckRenderer",l={unversionedId:"api-reference/arcgis/deck-renderer",id:"api-reference/arcgis/deck-renderer",title:"DeckRenderer",description:"This class is an experimental implementation of the ArcGIS ExternalRenderer interface and can be added to 3D views of maps created with the ArcGIS",source:"@site/../docs/api-reference/arcgis/deck-renderer.md",sourceDirName:"api-reference/arcgis",slug:"/api-reference/arcgis/deck-renderer",permalink:"/deck.gl/docs/api-reference/arcgis/deck-renderer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/arcgis/deck-renderer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeckLayer",permalink:"/deck.gl/docs/api-reference/arcgis/deck-layer"},next:{title:"loadArcGISModules",permalink:"/deck.gl/docs/api-reference/arcgis/load-arcgis-modules"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Members",id:"members",level:2},{value:"<code>deck</code>",id:"deck",level:5}],s={toc:c},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deckrenderer"},"DeckRenderer"),(0,a.kt)("p",null,"This class is an experimental implementation of the ArcGIS ",(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-3d-externalRenderers.html#ExternalRenderer"},"ExternalRenderer")," interface and can be added to 3D views of maps created with the ArcGIS\nAPI for JavaScript."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {DeckRenderer} from '@deck.gl/arcgis';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport ArcGISMap from '@arcgis/core/Map';\nimport SceneView from '@arcgis/core/views/SceneView';\nimport * as externalRenderers from '@arcgis/core/views/3d/externalRenderers';\n\nconst sceneView = new SceneView({\n  container: 'viewDiv',\n  map: new ArcGISMap({\n    basemap: 'dark-gray-vector'\n  }),\n  camera: {\n    position: {x: -74, y: 40.65, z: 5000},\n    heading: 180,\n    tilt: 30\n  },\n  viewingMode: 'local'\n});\n\nconst renderer = new DeckRenderer(sceneView, {\n  layers: [\n    new ScatterplotLayer({\n      data: [\n        {position: [0.119, 52.205]}\n      ],\n      getPosition: d => d.position,\n      getColor: [255, 0, 0],\n      radiusMinPixels: 20\n    })\n  ]\n});\n\nexternalRenderers.add(sceneView, renderer);\n")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new DeckRenderer(sceneView, props)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sceneView")," (",(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html"},"SceneView"),") - the view to use this renderer with. ",(0,a.kt)("inlineCode",{parentName:"p"},"viewingMode")," must be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"'local'"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"props")," (Object) - forwarded to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deck")," instance. The following ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/deck"},"Deck")," props are supported:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"layers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"layerFilter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"parameters"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"effects"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"pickingRadius"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onBeforeRender"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onAfterRender"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onClick"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onHover"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onDragStart"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onDrag"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onDragEnd"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"onError"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"debug"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"drawPickingColors"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getCursor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"getTooltip")))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("h5",{id:"deck"},(0,a.kt)("inlineCode",{parentName:"h5"},"deck")),(0,a.kt)("p",null,"An ArcGIS ",(0,a.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Accessor.html"},"Accessor")," that stores Deck props. The props can be updated after the layer construction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Update deck layers\nlayer.deck.layers = [...]);\n\n// Update multiple deck props\nlayer.deck.set({\n  layers: [...],\n  pickingRadius: 5,\n  ...\n});\n")))}m.isMDXComponent=!0}}]);