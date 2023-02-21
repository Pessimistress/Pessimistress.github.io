"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={},i="SolidPolygonLayer",r={unversionedId:"api-reference/layers/solid-polygon-layer",id:"api-reference/layers/solid-polygon-layer",title:"SolidPolygonLayer",description:"The SolidPolygonLayer renders filled and/or extruded polygons.",source:"@site/../docs/api-reference/layers/solid-polygon-layer.md",sourceDirName:"api-reference/layers",slug:"/api-reference/layers/solid-polygon-layer",permalink:"/docs/api-reference/layers/solid-polygon-layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/layers/solid-polygon-layer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleMeshLayer",permalink:"/docs/api-reference/mesh-layers/simple-mesh-layer"},next:{title:"TerrainLayer",permalink:"/docs/api-reference/geo-layers/terrain-layer"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Properties",id:"properties",level:2},{value:"Render Options",id:"render-options",level:3},{value:"<code>filled</code> (Boolean, optional)",id:"filled",level:5},{value:"<code>extruded</code> (Boolean, optional)",id:"extruded",level:5},{value:"<code>wireframe</code> (Boolean, optional)",id:"wireframe",level:5},{value:"<code>elevationScale</code> (Number, optional) transition-enabled",id:"elevationscale",level:5},{value:"<code>material</code> (Object, optional)",id:"material",level:5},{value:"<code>_normalize</code> (Object, optional)",id:"_normalize",level:5},{value:"<code>_windingOrder</code> (String, optional)",id:"_windingorder",level:5},{value:"<code>_full3d</code> (Boolean, optional)",id:"_full3d",level:5},{value:"Data Accessors",id:"data-accessors",level:3},{value:"<code>getPolygon</code> (Function, optional) transition-enabled",id:"getpolygon",level:5},{value:"<code>getFillColor</code> (Function|Array, optional) transition-enabled",id:"getfillcolor",level:5},{value:"<code>getLineColor</code> (Function|Array, optional) transition-enabled",id:"getlinecolor",level:5},{value:"<code>getElevation</code> (Function|Number, optional) transition-enabled",id:"getelevation",level:5},{value:"Use binary attributes",id:"use-binary-attributes",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Source",id:"source",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"solidpolygonlayer"},"SolidPolygonLayer"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SolidPolygonLayer")," renders filled and/or extruded polygons."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import DeckGL from '@deck.gl/react';\nimport {SolidPolygonLayer} from '@deck.gl/layers';\n\nfunction App({data, viewState}) {\n  const layer = new SolidPolygonLayer({\n    /*\n     * Data format:\n     * [\n     *   {polygon: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]},   // Simple polygon (array of coords)\n     *   {polygon: [                                            // Complex polygon with one hole\n     *     [[0, 0], [0, 2], [2, 2], [2, 0], [0, 0]],            // (array of array of coords)\n     *     [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]\n     *   ]}\n     * ]\n     */\n    data,\n    getPolygon: d => d.polygon,\n    getColor: [255, 0, 0],\n    extruded: false\n  });\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To install the dependencies from NPM:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {SolidPolygonLayer} from '@deck.gl/layers';\nnew SolidPolygonLayer({});\n")),(0,l.kt)("p",null,"To use pre-bundled scripts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^8.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^8.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^8.0.0/dist.min.js"><\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new deck.SolidPolygonLayer({});\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("p",null,"Inherits from all ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/layer"},"Base Layer")," properties."),(0,l.kt)("h3",{id:"render-options"},"Render Options"),(0,l.kt)("h5",{id:"filled"},(0,l.kt)("inlineCode",{parentName:"h5"},"filled")," (Boolean, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"Whether to fill the polygons (based on the color provided by the\n",(0,l.kt)("inlineCode",{parentName:"p"},"getFillColor")," accessor."),(0,l.kt)("h5",{id:"extruded"},(0,l.kt)("inlineCode",{parentName:"h5"},"extruded")," (Boolean, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"Whether to extrude the polygons (based on the elevations provided by the\n",(0,l.kt)("inlineCode",{parentName:"p"},"getElevation")," accessor. If set to false, all polygons will be flat, this\ngenerates less geometry and is faster than simply returning ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"getElevation"),"."),(0,l.kt)("h5",{id:"wireframe"},(0,l.kt)("inlineCode",{parentName:"h5"},"wireframe")," (Boolean, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,'Whether to generate a line wireframe of the polygon. The outline will have\n"horizontal" lines closing the top and bottom polygons and a vertical line\n(a "strut") for each vertex on the polygon.'),(0,l.kt)("h5",{id:"elevationscale"},(0,l.kt)("inlineCode",{parentName:"h5"},"elevationScale")," (Number, optional) ",(0,l.kt)("img",{parentName:"h5",src:"https://img.shields.io/badge/transition-enabled-green.svg?style=flat-square%22",alt:"transition-enabled"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"))),(0,l.kt)("p",null,"Elevation multiplier. The final elevation is calculated by\n",(0,l.kt)("inlineCode",{parentName:"p"},"elevationScale * getElevation(d)"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"elevationScale")," is a handy property to scale\nall elevation without updating the data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Remarks:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"These lines are rendered with ",(0,l.kt)("inlineCode",{parentName:"li"},"GL.LINE")," and will thus always be 1 pixel wide."),(0,l.kt)("li",{parentName:"ul"},"Wireframe and solid extrusions are exclusive, you'll need to create two layers\nwith the same data if you want a combined rendering effect.")),(0,l.kt)("h5",{id:"material"},(0,l.kt)("inlineCode",{parentName:"h5"},"material")," (Object, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"This is an object that contains material props for ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/lighting-effect"},"lighting effect")," applied on extruded polygons.\nCheck ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/using-lighting#constructing-a-material-instance"},"the lighting guide")," for configurable settings."),(0,l.kt)("h5",{id:"_normalize"},(0,l.kt)("inlineCode",{parentName:"h5"},"_normalize")," (Object, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This prop is experimental")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", will skip normalizing the coordinates returned by ",(0,l.kt)("inlineCode",{parentName:"p"},"getPolygon"),". Disabling normalization improves performance during data update, but makes the layer prone to error in case the data is malformed. It is only recommended when you use this layer with preprocessed static data or validation on the backend."),(0,l.kt)("p",null,"When normalization is disabled, polygons must be specified in the format of flat array or ",(0,l.kt)("inlineCode",{parentName:"p"},"{positions, holeIndices}"),". Rings must be closed (i.e. the first and last vertices must be identical). The winding order of rings must be consistent with that defined by ",(0,l.kt)("inlineCode",{parentName:"p"},"_windingOrder"),". See ",(0,l.kt)("inlineCode",{parentName:"p"},"getPolygon")," below for details."),(0,l.kt)("h5",{id:"_windingorder"},(0,l.kt)("inlineCode",{parentName:"h5"},"_windingOrder")," (String, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'CW'"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This prop is experimental")),(0,l.kt)("p",null,"This prop is only effective with ",(0,l.kt)("inlineCode",{parentName:"p"},"_normalize: false"),". It specifies the winding order of rings in the polygon data, one of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'CW'"),": outer-ring is clockwise, and holes are counter-clockwise"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'CCW'"),": outer-ring is counter-clockwise, and holes are clockwise")),(0,l.kt)("p",null,"The proper value depends on the source of your data. Most geometry formats ",(0,l.kt)("a",{parentName:"p",href:"https://gis.stackexchange.com/a/147971"},"enforce a specific winding order"),". Incorrectly set winding order will cause an extruded polygon's surfaces to be flipped, affecting culling and the lighting effect."),(0,l.kt)("h5",{id:"_full3d"},(0,l.kt)("inlineCode",{parentName:"h5"},"_full3d")," (Boolean, optional)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: This prop is experimental")),(0,l.kt)("p",null,"When true, polygon tesselation will be performed on the plane with the largest area, instead of the xy plane."),(0,l.kt)("p",null,"Remarks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only use this if you experience issues rendering features that only change on the z axis."),(0,l.kt)("li",{parentName:"ul"},"This prop is only effective with ",(0,l.kt)("inlineCode",{parentName:"li"},"XYZ")," data.")),(0,l.kt)("h3",{id:"data-accessors"},"Data Accessors"),(0,l.kt)("h5",{id:"getpolygon"},(0,l.kt)("inlineCode",{parentName:"h5"},"getPolygon")," (",(0,l.kt)("a",{parentName:"h5",href:"/docs/developer-guide/using-layers#accessors"},"Function"),", optional) ",(0,l.kt)("img",{parentName:"h5",src:"https://img.shields.io/badge/transition-enabled-green.svg?style=flat-square%22",alt:"transition-enabled"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"object => object.polygon"))),(0,l.kt)("p",null,"This accessor returns the polygon corresponding to an object in the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," stream."),(0,l.kt)("p",null,"A polygon can be one of the following formats:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An array of points (",(0,l.kt)("inlineCode",{parentName:"li"},"[x, y, z]"),') - a.k.a. a "ring".'),(0,l.kt)("li",{parentName:"ul"},"An array of rings. The first ring is the exterior boundary and the following rings are the holes. Compatible with the GeoJSON ",(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1.6"},"Polygon")," specification."),(0,l.kt)("li",{parentName:"ul"},"A flat array or ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray"},"TypedArray")," of numbers, in the shape of ",(0,l.kt)("inlineCode",{parentName:"li"},"[x0, y0, z0, x1, y1, z1, ...]"),", is equivalent to a single ring. By default, each coordinate is assumed to contain 3 consecutive numbers. If each coordinate contains only two numbers (x, y), set the ",(0,l.kt)("inlineCode",{parentName:"li"},"positionFormat")," prop of the layer to ",(0,l.kt)("inlineCode",{parentName:"li"},"XY"),"."),(0,l.kt)("li",{parentName:"ul"},"An object of shape ",(0,l.kt)("inlineCode",{parentName:"li"},"{positions, holeIndices}"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"positions")," (Array|TypedArray) - a flat array of coordinates. By default, each coordinate is assumed to contain 3 consecutive numbers. If each coordinate contains only two numbers (x, y), set the ",(0,l.kt)("inlineCode",{parentName:"li"},"positionFormat")," prop of the layer to ",(0,l.kt)("inlineCode",{parentName:"li"},"XY"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"holeIndices")," (Array) - the starting index of each hole in the ",(0,l.kt)("inlineCode",{parentName:"li"},"positions")," array. The first ring is the exterior boundary and the successive rings are the holes.")))),(0,l.kt)("h5",{id:"getfillcolor"},(0,l.kt)("inlineCode",{parentName:"h5"},"getFillColor")," (",(0,l.kt)("a",{parentName:"h5",href:"/docs/developer-guide/using-layers#accessors"},"Function"),"|Array, optional) ",(0,l.kt)("img",{parentName:"h5",src:"https://img.shields.io/badge/transition-enabled-green.svg?style=flat-square%22",alt:"transition-enabled"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 255]"))),(0,l.kt)("p",null,"The rgba color is in the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"[r, g, b, [a]]"),". Each channel is a number between 0-255 and ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," is 255 if not supplied."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If an array is provided, it is used as the fill color for all polygons."),(0,l.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each polygon to retrieve its fill color.")),(0,l.kt)("h5",{id:"getlinecolor"},(0,l.kt)("inlineCode",{parentName:"h5"},"getLineColor")," (",(0,l.kt)("a",{parentName:"h5",href:"/docs/developer-guide/using-layers#accessors"},"Function"),"|Array, optional) ",(0,l.kt)("img",{parentName:"h5",src:"https://img.shields.io/badge/transition-enabled-green.svg?style=flat-square%22",alt:"transition-enabled"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, 0, 0, 255]"))),(0,l.kt)("p",null,"The rgba color is in the format of ",(0,l.kt)("inlineCode",{parentName:"p"},"[r, g, b, [a]]"),". Each channel is a number between 0-255 and ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," is 255 if not supplied.\nOnly applies if ",(0,l.kt)("inlineCode",{parentName:"p"},"extruded: true"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If an array is provided, it is used as the stroke color for all polygons."),(0,l.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its stroke color.")),(0,l.kt)("h5",{id:"getelevation"},(0,l.kt)("inlineCode",{parentName:"h5"},"getElevation")," (",(0,l.kt)("a",{parentName:"h5",href:"/docs/developer-guide/using-layers#accessors"},"Function"),"|Number, optional) ",(0,l.kt)("img",{parentName:"h5",src:"https://img.shields.io/badge/transition-enabled-green.svg?style=flat-square%22",alt:"transition-enabled"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1000"))),(0,l.kt)("p",null,"The elevation to extrude each polygon with.\nIf a cartographic projection mode is used, height will be interpreted as meters,\notherwise will be in unit coordinates.\nOnly applies if ",(0,l.kt)("inlineCode",{parentName:"p"},"extruded: true"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If a number is provided, it is used as the elevation for all polygons."),(0,l.kt)("li",{parentName:"ul"},"If a function is provided, it is called on each object to retrieve its elevation.")),(0,l.kt)("h2",{id:"use-binary-attributes"},"Use binary attributes"),(0,l.kt)("p",null,"This section is about the special requirements when ",(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/performance#supply-attributes-directly"},"supplying attributes directly")," to a ",(0,l.kt)("inlineCode",{parentName:"p"},"SolidPolygonLayer"),"."),(0,l.kt)("p",null,"Because each polygon has a different number of vertices, when ",(0,l.kt)("inlineCode",{parentName:"p"},"data.attributes.getPolygon")," is supplied, the layer also requires an array ",(0,l.kt)("inlineCode",{parentName:"p"},"data.startIndices")," that describes the vertex index at the start of each polygon. For example, if there are 3 polygons of 3, 4, and 5 vertices each (including the end vertex that overlaps with the first vertex to close the loop), ",(0,l.kt)("inlineCode",{parentName:"p"},"startIndices")," should be ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 3, 7, 12]"),". ",(0,l.kt)("em",{parentName:"p"},"Polygons with holes are not supported when using precalculated attributes.")),(0,l.kt)("p",null,"Additionally, all other attributes (",(0,l.kt)("inlineCode",{parentName:"p"},"getFillColor"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getElevation"),", etc.), if supplied, must contain the same layout (number of vertices) as the ",(0,l.kt)("inlineCode",{parentName:"p"},"getPolygon")," buffer."),(0,l.kt)("p",null,"To truly realize the performance gain from using binary data, the app likely wants to skip all data processing in this layer. Specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"_normalize")," prop to skip normalization."),(0,l.kt)("p",null,"Example use case:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// USE PLAIN JSON OBJECTS\nconst POLYGON_DATA = [\n  {\n     contour: [[-122.4, 37.7], [-122.4, 37.8], [-122.5, 37.8], [-122.5, 37.7], [-122.4, 37.7]],\n     population: 26599\n  },\n  ...\n];\n\nnew SolidPolygonLayer({\n  data: POLYGON_DATA,\n  getPolygon: d => d.contour,\n  getElevation: d => d.population,\n  getFillColor: [0, 100, 60, 160]\n})\n")),(0,l.kt)("p",null,"Convert to using binary attributes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// USE BINARY\n// Flatten the polygon vertices\n// [-122.4, 37.7, -122.4, 37.8, -122.5, 37.8, -122.5, 37.7, -122.4, 37.7, ...]\nconst positions = new Float64Array(POLYGON_DATA.map(d => d.contour).flat(2));\n// The color attribute must supply one color for each vertex\n// [255, 0, 0, 255, 0, 0, 255, 0, 0, ...]\nconst elevations = new Uint8Array(POLYGON_DATA.map(d => d.contour.map(_ => d.population)).flat());\n// The "layout" that tells PathLayer where each path starts\nconst startIndices = new Uint16Array(POLYGON_DATA.reduce((acc, d) => {\n  const lastIndex = acc[acc.length - 1];\n  acc.push(lastIndex + d.contour.length);\n  return acc;\n}, [0]));\n\nnew SolidPolygonLayer({\n  data: {\n    length: POLYGON_DATA.length,\n    startIndices: startIndices, // this is required to render the paths correctly!\n    attributes: {\n      getPolygon: {value: positions, size: 2},\n      getElevation: {value: elevations, size: 1}\n    }\n  },\n  _normalize: false, // this instructs the layer to skip normalization and use the binary as-is\n  getFillColor: [0, 100, 60, 160]\n})\n')),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This layer only renders filled polygons. If you need to render polygon\noutlines, use the ",(0,l.kt)("a",{parentName:"li",href:"/docs/api-reference/layers/path-layer"},(0,l.kt)("inlineCode",{parentName:"a"},"PathLayer"))),(0,l.kt)("li",{parentName:"ul"},"Polygons are always closed, i.e. there is an implicit line segment between\nthe first and last vertices, when those vertices are not equal."),(0,l.kt)("li",{parentName:"ul"},"The specification of complex polygons intentionally follows the GeoJson\nconventions for representing polygons with holes.")),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/layers/src/solid-polygon-layer"},"modules/layers/src/solid-polygon-layer")))}u.isMDXComponent=!0}}]);