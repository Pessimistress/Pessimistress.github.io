"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5682],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>k});var t=a(67294);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){l(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,l=function(e,r){if(null==e)return{};var a,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(l[a]=e[a]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=s(a),d=l,k=y["".concat(c,".").concat(d)]||y[d]||g[d]||n;return a?t.createElement(k,i(i({ref:r},p),{},{components:a})):t.createElement(k,i({ref:r},p))}));function k(e,r){var a=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[y]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36959:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var t=a(83117),l=(a(67294),a(3905));const n={},i="Layer Catalog Overview",o={unversionedId:"api-reference/layers/README",id:"api-reference/layers/README",title:"Layer Catalog Overview",description:"For first-time deck.gl developers, it is helpful to read the following pages before jumping into the layer catalog:",source:"@site/../docs/api-reference/layers/README.md",sourceDirName:"api-reference/layers",slug:"/api-reference/layers/",permalink:"/deck.gl/docs/api-reference/layers/",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/layers/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Widget Class",permalink:"/deck.gl/docs/api-reference/core/widget"},next:{title:"Layer Class",permalink:"/deck.gl/docs/api-reference/core/layer"}},c={},s=[{value:"Core Layers",id:"core-layers",level:2},{value:"Aggregation Layers",id:"aggregation-layers",level:2},{value:"Geo Layers",id:"geo-layers",level:2},{value:"Mesh Layers",id:"mesh-layers",level:2}],p={toc:s},y="wrapper";function g(e){let{components:r,...a}=e;return(0,l.kt)(y,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"layer-catalog-overview"},"Layer Catalog Overview"),(0,l.kt)("p",null,"For first-time deck.gl developers, it is helpful to read the following pages before jumping into the layer catalog:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/developer-guide/using-layers"},"Guide to using deck.gl layers"),": general concepts and frequently asked questions"),(0,l.kt)("li",{parentName:"ul"},"All deck.gl layers inherit from either the ",(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/layer"},(0,l.kt)("inlineCode",{parentName:"a"},"Layer"))," or the ",(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/composite-layer"},(0,l.kt)("inlineCode",{parentName:"a"},"CompositeLayer"))," base classes, and the props of those layers are available to all layers unless otherwise documented. The base class props are not repeated in individual layer documentation.")),(0,l.kt)("h2",{id:"core-layers"},"Core Layers"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@deck.gl/layers"},"Core Layers")," are a group of generic-purpose layers, intended to represent the building blocks for all data visualizations."),(0,l.kt)("p",null,"The core layers are the most stable and supported deck.gl layers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/arc-layer"},"ArcLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/bitmap-layer"},"BitmapLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/column-layer"},"ColumnLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/geojson-layer"},"GeoJsonLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/grid-cell-layer"},"GridCellLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/icon-layer"},"IconLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/line-layer"},"LineLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/path-layer"},"PathLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/point-cloud-layer"},"PointCloudLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/polygon-layer"},"PolygonLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/scatterplot-layer"},"ScatterplotLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/solid-polygon-layer"},"SolidPolygonLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/layers/text-layer"},"TextLayer"))),(0,l.kt)("h2",{id:"aggregation-layers"},"Aggregation Layers"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@deck.gl/aggregation-layers"},"Aggregation Layers")," are layers that aggregate the input data and visualize them in alternative representations, such as grid and hexagon binning, contour, and heatmap."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/contour-layer"},"ContourLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/grid-layer"},"GridLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/gpu-grid-layer"},"GPUGridLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/cpu-grid-layer"},"CPUGridLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/heatmap-layer"},"HeatmapLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/hexagon-layer"},"HexagonLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/aggregation-layers/screen-grid-layer"},"ScreenGridLayer"))),(0,l.kt)("h2",{id:"geo-layers"},"Geo Layers"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@deck.gl/geo-layers"},"Geo Layers")," collects layers that specifically target geospatial visualization use cases, including support for map tiles, popular geospatial indexing systems, GIS formats, etc."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/geohash-layer"},"GeohashLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/great-circle-layer"},"GreatCircleLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/h3-cluster-layer"},"H3ClusterLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/h3-hexagon-layer"},"H3HexagonLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/mvt-layer"},"MVTLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/quadkey-layer"},"QuadkeyLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/s2-layer"},"S2Layer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/terrain-layer"},"TerrainLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/tile-layer"},"TileLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/tile-3d-layer"},"Tile3DLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/trips-layer"},"TripsLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/wms-layer"},"WMSLayer"))),(0,l.kt)("h2",{id:"mesh-layers"},"Mesh Layers"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@deck.gl/mesh-layers"},"Mesh Layers")," visualize 3D models, with experimental support for scenegraph in the glTF format."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/mesh-layers/simple-mesh-layer"},"SimpleMeshLayer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/mesh-layers/scenegraph-layer"},"ScenegraphLayer"))))}g.isMDXComponent=!0}}]);