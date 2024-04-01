"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const i={},l="QuadbinTileLayer",o={unversionedId:"api-reference/carto/quadbin-tile-layer",id:"api-reference/carto/quadbin-tile-layer",title:"QuadbinTileLayer",description:"QuadbinTileLayer is a layer for visualizing tiled data described using the Quadbin Spatial Index.",source:"@site/../docs/api-reference/carto/quadbin-tile-layer.md",sourceDirName:"api-reference/carto",slug:"/api-reference/carto/quadbin-tile-layer",permalink:"/deck.gl/docs/api-reference/carto/quadbin-tile-layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/quadbin-tile-layer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"H3TileLayer",permalink:"/deck.gl/docs/api-reference/carto/h3-tile-layer"},next:{title:"RasterTileLayer (Experimental)",permalink:"/deck.gl/docs/api-reference/carto/raster-tile-layer"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>data</code> (TilejsonResult)",id:"data",level:4},{value:"Data Accessors",id:"data-accessors",level:3},{value:"<code>getQuadbin</code> (Accessor&lt;BigInt&gt;, optional)",id:"getquadbin",level:4},{value:"Source",id:"source",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quadbintilelayer"},"QuadbinTileLayer"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"QuadbinTileLayer")," is a layer for visualizing tiled data described using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.carto.com/data-and-analysis/analytics-toolbox-for-bigquery/key-concepts/spatial-indexes#quadbin"},"Quadbin Spatial Index"),". "),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import DeckGL from '@deck.gl/react';\nimport {QuadbinTileLayer, quadbinTilesetSource} from '@deck.gl/carto';\n\nfunction App({viewState}) {\n  const data = quadbinTilesetSource({\n    accessToken: 'XXX',\n    connectionName: 'carto_dw',\n    tableName: 'carto-demo-data.demo_tilesets.quadbin'\n  });\n\n  const layer = new QuadbinTileLayer({\n    data,\n    getFillColor: d => d.properties.color\n  })\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To install the dependencies from NPM:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/carto\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {QuadbinTileLayer} from '@deck.gl/carto';\nnew QuadbinTileLayer({});\n")),(0,n.kt)("p",null,"To use pre-bundled scripts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/geo-layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"new deck.carto.QuadbinTileLayer({});\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("p",null,"Inherits all properties from ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/geo-layers/quadkey-layer"},(0,n.kt)("inlineCode",{parentName:"a"},"QuadkeyLayer"))," and ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/geo-layers/tile-layer"},(0,n.kt)("inlineCode",{parentName:"a"},"TileLayer")),", with exceptions indicated below."),(0,n.kt)("h4",{id:"data"},(0,n.kt)("inlineCode",{parentName:"h4"},"data")," (TilejsonResult)"),(0,n.kt)("p",null,"Required. A valid ",(0,n.kt)("inlineCode",{parentName:"p"},"TilejsonResult")," object."),(0,n.kt)("p",null,"Use one of the following ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/carto/data-sources"},"Data Sources")," to fetch this from the CARTO API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#quadbintablesource"},"quadbinTableSource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#quadbinquerysource"},"quadbinQuerySource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./data-sources#quadbintilesetsource"},"quadbinTilesetSource"))),(0,n.kt)("h3",{id:"data-accessors"},"Data Accessors"),(0,n.kt)("h4",{id:"getquadbin"},(0,n.kt)("inlineCode",{parentName:"h4"},"getQuadbin")," (",(0,n.kt)("a",{parentName:"h4",href:"/deck.gl/docs/developer-guide/using-layers#accessors"},"Accessor","<","BigInt",">"),", optional)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note that the ",(0,n.kt)("a",{parentName:"em",href:"../geo-layers/quadkey-layer#getquadkey"},(0,n.kt)("inlineCode",{parentName:"a"},"getQuadkey")," accessor")," is replaced with ",(0,n.kt)("inlineCode",{parentName:"em"},"getQuadbin")),"."),(0,n.kt)("p",null,"Called for each data object to retrieve the quadbin bigint identifier."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"default: ",(0,n.kt)("inlineCode",{parentName:"li"},"object => object.quadbin"))),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/carto/src/layers/quadbin-tile-layer.ts"},"modules/carto/src/layers/quadbin-tile-layer.ts")))}u.isMDXComponent=!0}}]);