"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||r;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},l="DataFilterExtension",o={unversionedId:"api-reference/extensions/data-filter-extension",id:"api-reference/extensions/data-filter-extension",title:"DataFilterExtension",description:"The DataFilterExtension adds GPU-based data filtering functionalities to layers. It allows the layer to show/hide objects based on user-defined properties. This extension provides a significantly more performant alternative to filtering the data array on the CPU.",source:"@site/../docs/api-reference/extensions/data-filter-extension.md",sourceDirName:"api-reference/extensions",slug:"/api-reference/extensions/data-filter-extension",permalink:"/deck.gl/docs/api-reference/extensions/data-filter-extension",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/data-filter-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollisionFilterExtension",permalink:"/deck.gl/docs/api-reference/extensions/collision-filter-extension"},next:{title:"FillStyleExtension",permalink:"/deck.gl/docs/api-reference/extensions/fill-style-extension"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"<code>getFilterValue</code> (Function)",id:"getfiltervalue",level:5},{value:"<code>filterRange</code> (Array)",id:"filterrange",level:5},{value:"<code>filterSoftRange</code> (Array, optional)",id:"filtersoftrange",level:5},{value:"<code>filterTransformSize</code> (Boolean, optional)",id:"filtertransformsize",level:5},{value:"<code>filterTransformColor</code> (Boolean, optional)",id:"filtertransformcolor",level:5},{value:"<code>filterEnabled</code> (Boolean, optional)",id:"filterenabled",level:5},{value:"<code>onFilteredItemsChange</code> (Function, optional)",id:"onfiltereditemschange",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Filter precision",id:"filter-precision",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Always supported:",id:"always-supported",level:3},{value:"Supported only when aggregation is performed on GPU:",id:"supported-only-when-aggregation-is-performed-on-gpu",level:3},{value:"Not supported:",id:"not-supported",level:3},{value:"Source",id:"source",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datafilterextension"},"DataFilterExtension"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFilterExtension")," adds GPU-based data filtering functionalities to layers. It allows the layer to show/hide objects based on user-defined properties. This extension provides a significantly more performant alternative to filtering the data array on the CPU."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note: This extension does not work with all deck.gl layers. See "limitations" below.')),(0,a.kt)("div",{style:{position:"relative",height:450}}),(0,a.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,a.kt)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl DataFilterExtension",src:"https://codepen.io/vis-gl/embed/oNYbBMO?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,a.kt)("a",{href:"https://codepen.io/vis-gl/pen/oNYbBMO"},"deck.gl DataFilterExtension")," by vis.gl (",(0,a.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,a.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {GeoJsonLayer} from '@deck.gl/layers';\nimport {DataFilterExtension} from '@deck.gl/extensions';\n\nconst layer = new GeoJsonLayer({\n  id: 'geojson-layer',\n  data: GEOJSON,\n\n  // props from GeoJsonLayer\n  getFillColor: [160, 160, 180],\n  getLineColor: [0, 0, 0],\n  getLineWidth: 10,\n\n  // props added by DataFilterExtension\n  getFilterValue: f => f.properties.timeOfDay,  // in seconds\n  filterRange: [43200, 46800],  // 12:00 - 13:00\n\n  // Define extensions\n  extensions: [new DataFilterExtension({filterSize: 1})]\n});\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install the dependencies from NPM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/extensions\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {DataFilterExtension} from '@deck.gl/extensions';\nnew DataFilterExtension({});\n")),(0,a.kt)("p",null,"To use pre-bundled scripts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^7.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^7.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^7.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^7.0.0/dist.min.js"><\/script>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new deck.DataFilterExtension({});\n")),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new DataFilterExtension({filterSize, fp64});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filterSize")," (Number) - the size of the filter (number of columns to filter by). The data filter can show/hide data based on 1-4 numeric properties of each object. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fp64")," (Boolean) - if ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", use 64-bit precision instead of 32-bit. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),'. See the "remarks" section below for use cases and limitations.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"countItems")," (Boolean) - if ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", reports the number of filtered objects with the ",(0,a.kt)("inlineCode",{parentName:"li"},"onFilteredItemsChange")," callback. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"layer-properties"},"Layer Properties"),(0,a.kt)("p",null,"When added to a layer via the ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions")," prop, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFilterExtension")," adds the following properties to the layer:"),(0,a.kt)("h5",{id:"getfiltervalue"},(0,a.kt)("inlineCode",{parentName:"h5"},"getFilterValue")," (",(0,a.kt)("a",{parentName:"h5",href:"/deck.gl/docs/developer-guide/using-layers#accessors"},"Function"),")"),(0,a.kt)("p",null,"Called to retrieve the value for each object that it will be filtered by. Returns either a number (if ",(0,a.kt)("inlineCode",{parentName:"p"},"filterSize: 1"),") or an array."),(0,a.kt)("p",null,"For example, consider data in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {"timestamp": 0.1, "coordinates": [-122.45, 37.78], "speed": 13.3},\n  ...\n]\n')),(0,a.kt)("p",null,"To filter by timestamp:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ScatterplotLayer({\n  data,\n  getPosition: d => d.coordinates,\n  getFilterValue: d => d.timestamp,\n  filterRange: [0, 1],\n  extensions: [new DataFilterExtension({filterSize: 1})]\n})\n")),(0,a.kt)("p",null,"To filter by both timestamp and speed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ScatterplotLayer({\n  data,\n  getPosition: d => d.coordinates,\n  getFilterValue: d => [d.timestamp, d.speed],\n  filterRange: [[0, 1], [10, 20]],\n  extensions: [new DataFilterExtension({filterSize: 2})]\n})\n")),(0,a.kt)("p",null,"Note that all filtered values are uploaded as 32-bit floating numbers, so certain values e.g. raw unix epoch time may not be accurately represented. You may test the validity of a timestamp by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.fround(t)")," to check if there would be any loss of precision."),(0,a.kt)("h5",{id:"filterrange"},(0,a.kt)("inlineCode",{parentName:"h5"},"filterRange")," (Array)"),(0,a.kt)("p",null,"The bounds which defines whether an object should be rendered. If an object's filtered value is within the bounds, the object will be rendered; otherwise it will be hidden. This prop can be updated on user input or animation with very little cost."),(0,a.kt)("p",null,"Format:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filterSize")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"[min, max]")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filterSize")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"[[min0, max0], [min1, max1], ...]")," for each filtered property, respectively.")),(0,a.kt)("h5",{id:"filtersoftrange"},(0,a.kt)("inlineCode",{parentName:"h5"},"filterSoftRange")," (Array, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"))),(0,a.kt)("p",null,"If specified, objects will be faded in/out instead of abruptly shown/hidden. When the filtered value is outside of the bounds defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"filterSoftRange")," but still within the bounds defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"filterRange"),', the object will be rendered as "faded." See ',(0,a.kt)("inlineCode",{parentName:"p"},"filterTransformSize")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filterTransformColor")," for additional control over this behavior."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new ScatterplotLayer({\n  data,\n  getPosition: d => d.coordinates,\n  getFilterValue: d => d.timestamp,\n  filterRange: [0, 1],\n  filterSoftRange: [0.2, 0.8],\n  filterTransformSize: true,\n  filterTransformColor: true,\n  extensions: [new DataFilterExtension({filterSize: 1})]\n})\n")),(0,a.kt)("p",null,"Format:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filterSize")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"[softMin, softMax]")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filterSize")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"2")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"4"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"[[softMin0, softMax0], [softMin1, softMax1], ...]")," for each filtered property, respectively.")),(0,a.kt)("h5",{id:"filtertransformsize"},(0,a.kt)("inlineCode",{parentName:"h5"},"filterTransformSize")," (Boolean, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,'When an object is "faded", manipulate its size so that it appears smaller or thinner. Only works if ',(0,a.kt)("inlineCode",{parentName:"p"},"filterSoftRange")," is specified."),(0,a.kt)("h5",{id:"filtertransformcolor"},(0,a.kt)("inlineCode",{parentName:"h5"},"filterTransformColor")," (Boolean, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,'When an object is "faded", manipulate its opacity so that it appears more translucent. Only works if ',(0,a.kt)("inlineCode",{parentName:"p"},"filterSoftRange")," is specified."),(0,a.kt)("h5",{id:"filterenabled"},(0,a.kt)("inlineCode",{parentName:"h5"},"filterEnabled")," (Boolean, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"))),(0,a.kt)("p",null,"Enable/disable the data filter. If the data filter is disabled, all objects are rendered."),(0,a.kt)("h5",{id:"onfiltereditemschange"},(0,a.kt)("inlineCode",{parentName:"h5"},"onFilteredItemsChange")," (Function, optional)"),(0,a.kt)("p",null,"Only used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"countItems")," option is enabled. Called with the following arguments when the filter changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," (Object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," (String) - the id of the source layer. Note when this prop is specified on a ",(0,a.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/composite-layer"},"CompositeLayer"),", such as ",(0,a.kt)("inlineCode",{parentName:"li"},"GeoJsonLayer"),", the callback is called once by each sub layer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"count")," (Number) - the number of data objects that pass the filter.")))),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("h3",{id:"filter-precision"},"Filter precision"),(0,a.kt)("p",null,"By default, both the filter values and the filter range are uploaded to the GPU as 32-bit floats. When using very large filter values, most commonly Epoch timestamps, 32-bit float representation could lead to an error margin of >1 minute. Enabling 64-bit precision by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"fp64: true")," would allow the filter range to be evaluated more accurately. However, 64-bit support requires one extra attribute slot, which increases the risk of exceeding the hardware limit on vertex attributes. Depending on the layer that the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFilterExtension")," is used with, it may interfere with the layer's ability to use other extensions."),(0,a.kt)("p",null,'If this becomes an issue, an alternative technique is to transform each filter value by subtracting a fixed "origin" value, thus making the numbers smaller:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"getFilterValue: d => d.timestamp - ORIGIN_TS,\nfilterRange: [rangeStart - ORIGIN_TS, rangeEnd - ORIGIN_TS]\n")),(0,a.kt)("p",null,"32-bit floats can accurately represent each second within ~190 days (",(0,a.kt)("inlineCode",{parentName:"p"},"2^24"),"). Unless the filter values require both a large span and fine granularity, 32-bit floats should be sufficient."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Given data filtering happens on GPU, not all layers of ",(0,a.kt)("inlineCode",{parentName:"p"},"@deck.gl/aggregation-layers")," module, support this feature."),(0,a.kt)("h3",{id:"always-supported"},"Always supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HeatMapLayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GPUGridLayer"))),(0,a.kt)("h3",{id:"supported-only-when-aggregation-is-performed-on-gpu"},"Supported only when aggregation is performed on GPU:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ScreenGridlayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ContourLayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GridLayer"))),(0,a.kt)("h3",{id:"not-supported"},"Not supported:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CPUGridLayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HexagonLayer"))),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/extensions/src/data-filter"},"modules/extensions/src/data-filter")))}c.isMDXComponent=!0}}]);