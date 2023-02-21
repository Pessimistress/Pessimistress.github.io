"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7045],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),l=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,m=d["".concat(g,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o="AggregationLayer",s={unversionedId:"api-reference/aggregation-layers/aggregation-layer",id:"api-reference/aggregation-layers/aggregation-layer",title:"AggregationLayer",description:"All of the layers in @deck.gl/aggregation-layers module perform some sort of data aggregation. All these layers perform aggregation with different parameters (CPU vs GPU, aggregation to rectangular bins vs hexagon bins, world space vs screen space, aggregation of single weight vs multiple weights etc).",source:"@site/../docs/api-reference/aggregation-layers/aggregation-layer.md",sourceDirName:"api-reference/aggregation-layers",slug:"/api-reference/aggregation-layers/aggregation-layer",permalink:"/deck.gl/docs/api-reference/aggregation-layers/aggregation-layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/aggregation-layers/aggregation-layer.md",tags:[],version:"current",frontMatter:{}},g={},l=[{value:"Integration with <code>AttributeManager</code>",id:"integration-with-attributemanager",level:2},{value:"updateState()",id:"updatestate",level:2},{value:"Checking if aggregation is dirty",id:"checking-if-aggregation-is-dirty",level:2},{value:"Dimensions",id:"dimensions",level:3},{value:"isAggregationDirty()",id:"isaggregationdirty",level:3},{value:"isAttributeChanged()",id:"isattributechanged",level:3}],p={toc:l},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aggregationlayer"},"AggregationLayer"),(0,r.kt)("p",null,"All of the layers in ",(0,r.kt)("inlineCode",{parentName:"p"},"@deck.gl/aggregation-layers")," module perform some sort of data aggregation. All these layers perform aggregation with different parameters (CPU vs GPU, aggregation to rectangular bins vs hexagon bins, world space vs screen space, aggregation of single weight vs multiple weights etc)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GridAggregationLayer")," perform most of the common tasks for aggregation with flexibility of customizations. This document describes what ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLayer")," does and how to use it in other aggregation layers."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLayer")," is subclassed form ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeLayer")," and all layers in ",(0,r.kt)("inlineCode",{parentName:"p"},"@deck.gl/aggregation-layers")," are subclassed from this Layer."),(0,r.kt)("h2",{id:"integration-with-attributemanager"},"Integration with ",(0,r.kt)("inlineCode",{parentName:"h2"},"AttributeManager")),(0,r.kt)("p",null,"This layer creates ",(0,r.kt)("inlineCode",{parentName:"p"},"AttributeManager")," and makes it available for its subclasses. Any aggregation layer can add attributes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AttributeManager")," and retrieve them using ",(0,r.kt)("inlineCode",{parentName:"p"},"getAttributes")," method. This enables using ",(0,r.kt)("inlineCode",{parentName:"p"},"AttributeManager"),"'s features and optimization for using attributes. Also manual iteration of ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," prop can be removed and attributes can be directly set on GPU aggregation models or accessed directly for CPU aggregation."),(0,r.kt)("p",null,"Example: Adding attributes to an aggregation layer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const attributeManager = this.getAttributeManager();\nattributeManager.add({\n  positions: {size: 3, accessor: 'getPosition'},\n  color: {size: 3, accessor: 'getColorWeight'},\n  elevation: {size: 3, accessor: 'getElevationWeight'}\n});\n")),(0,r.kt)("h2",{id:"updatestate"},"updateState()"),(0,r.kt)("p",null,"During update state, Subclasses of ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLayer")," must first call 'super.updateState()', which calls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"updateShaders(shaders)")," : Subclasses can override this if they need to update shaders, for example, when performing GPU aggregation, aggregation shaders must be merged with argument of this function  to correctly apply ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_updateAttributes"),": This checks and updates attributes based on updated props."))),(0,r.kt)("h2",{id:"checking-if-aggregation-is-dirty"},"Checking if aggregation is dirty"),(0,r.kt)("h3",{id:"dimensions"},"Dimensions"),(0,r.kt)("p",null,"Typical aggregation, involves :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Group the input data points into bins"),(0,r.kt)("li",{parentName:"ol"},"Compute the aggregated value for each bin")),(0,r.kt)("p",null,"For example, when ",(0,r.kt)("inlineCode",{parentName:"p"},"cellSize")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is changed, layer needs to perform both ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," steps, when a parameter affecting a bin's value is changed (like ",(0,r.kt)("inlineCode",{parentName:"p"},"getWeight")," accessor), layer only need to perform step ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,"When doing CPU Aggregation, both above steps are performed individually. But for GPU aggregation, both are merged into single render call."),(0,r.kt)("p",null,"To support what state is dirty, constructor takes ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensions")," object, which contains, several keyed dimensions. It must contain ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," dimension that defines, when re-aggregation needs to be performed."),(0,r.kt)("h3",{id:"isaggregationdirty"},"isAggregationDirty()"),(0,r.kt)("p",null,"This helper can be used if a dimension is changed. Sublayers can defined custom dimensions and call this method to check if a dimension is changed."),(0,r.kt)("h3",{id:"isattributechanged"},"isAttributeChanged()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AggregationLayer")," tracks what attributes are changed in each update cycle. Super classes can use ",(0,r.kt)("inlineCode",{parentName:"p"},"isAttributeChanged()")," method to check if a specific attribute is changed or any attribute is changed."))}c.isMDXComponent=!0}}]);