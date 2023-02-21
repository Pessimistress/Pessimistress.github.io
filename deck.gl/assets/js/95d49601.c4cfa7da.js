"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},l="Creating Layer Extensions",i={unversionedId:"developer-guide/custom-layers/layer-extensions",id:"developer-guide/custom-layers/layer-extensions",title:"Creating Layer Extensions",description:"It's recommended that you read subclassing layers before proceeding",source:"@site/../docs/developer-guide/custom-layers/layer-extensions.md",sourceDirName:"developer-guide/custom-layers",slug:"/developer-guide/custom-layers/layer-extensions",permalink:"/deck.gl/docs/developer-guide/custom-layers/layer-extensions",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/custom-layers/layer-extensions.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Example: Subclassing Is Not Enough",id:"example-subclassing-is-not-enough",level:2},{value:"LayerExtension Interface",id:"layerextension-interface",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>getShaders</code>",id:"getshaders",level:5},{value:"<code>initializeState</code>",id:"initializestate",level:5},{value:"<code>updateState</code>",id:"updatestate",level:5},{value:"<code>draw</code>",id:"draw",level:5},{value:"<code>finalizeState</code>",id:"finalizestate",level:5},{value:"<code>getSubLayerProps</code>",id:"getsublayerprops",level:5},{value:"Example: Layer Extension",id:"example-layer-extension",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-layer-extensions"},"Creating Layer Extensions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It's recommended that you read ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/subclassed-layers"},"subclassing layers")," before proceeding")),(0,r.kt)("p",null,"Sometimes we need to modify several deck.gl layers to add similar functionalities. If we create custom layer classes for each one of them, it will require multiple files that contain more or less the same code. ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/extensions/overview"},"Layer extension")," is a way to generalize, reuse, and share subclassed layer code."),(0,r.kt)("h2",{id:"example-subclassing-is-not-enough"},"Example: Subclassing Is Not Enough"),(0,r.kt)("p",null,"Consider a hypothetical use case: in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ScatterplotLayer"),", we inject a piece of custom code into the fragment shader to highlight every object that is red."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {ScatterplotLayer} from '@deck.gl/layers';\n\nclass FilteredScatterplotLayer extends ScatterplotLayer {\n  getShaders() {\n    return {\n      ...super.getShaders(),\n      inject: {\n        // Declare custom uniform\n        'fs:#decl': 'uniform bool highlightRed;',\n        // Standard injection hook - see \"Writing Shaders\"\n        'fs:DECKGL_FILTER_COLOR': `\n          if (highlightRed) {\n            if (color.r / max(color.g, 0.001) > 2. && color.r / max(color.b, 0.001) > 2.) {\n              // is red\n              color = vec4(1.0, 0.0, 0.0, 1.0);\n            } else {\n              discard;\n            }\n          }\n        `\n      }\n    };\n  }\n\n  updateState({props, oldProps, changeFlags}) {\n    super.updateState({props, oldProps, changeFlags});\n\n    if (props.highlightRed !== oldProps.highlightRed) {\n      // Set the custom uniform\n      this.state.model.setUniforms({\n        highlightRed: props.highlightRed\n      });\n    }\n  }\n}\n\nnew FilteredScatterplotLayer({...});\n")),(0,r.kt)("p",null,"If we want to do the same for ",(0,r.kt)("inlineCode",{parentName:"p"},"GeoJsonLayer"),", it becomes more complicated. We will need to subclass all of ",(0,r.kt)("inlineCode",{parentName:"p"},"ScatterplotLayer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SolidPolygonLayer"),", then tell the ",(0,r.kt)("inlineCode",{parentName:"p"},"GeoJsonLayer")," to use our custom classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {ScatterplotLayer, PathLayer, SolidPolygonLayer} from '@deck.gl/layers';\n\nclass FilteredScatterplotLayer extends ScatterplotLayer {\n  // same code\n}\nclass FilteredPathLayer extends PathLayer {\n  // same code\n}\nclass FilteredSolidPolygonLayer extends SolidPolygonLayer {\n  // same code\n}\n\nnew GeoJsonLayer({\n  ...\n  _subLayerProps: {\n    points: {type: FilteredScatterplotLayer},\n    linestrings: {type: FilteredPathLayer},\n    'polygons-stroke': {type: FilteredPathLayer},\n    'polygons-fill': {type: FilteredSolidPolygonLayer}\n  }\n});\n")),(0,r.kt)("p",null,"We end up with copying and pasting a lot of code."),(0,r.kt)("p",null,"The same functionality can be achieved by creating a layer extension. When we give an extension to a composite layer such as ",(0,r.kt)("inlineCode",{parentName:"p"},"GeoJsonLayer"),", it's automatically passed down to all its sublayers, including ",(0,r.kt)("inlineCode",{parentName:"p"},"ScatterplotLayer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PathLayer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SolidPolygonLayer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {LayerExtension} from '@deck.gl/core';\n\nclass RedFilter extends LayerExtension {\n  // TODO - This is our reusable code\n}\n\nnew GeoJsonLayer({\n  ...\n  extensions: [new RedFilter()]\n});\n")),(0,r.kt)("p",null,"Now we can implement the red filter once and only once in the custom extension, and use it everywhere!"),(0,r.kt)("h2",{id:"layerextension-interface"},"LayerExtension Interface"),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class RedFilter extends LayerExtension {}\n\nconst extension = new RedFilter({color: [1, 1, 0]});\nconsole.log(extension.opts);\n")),(0,r.kt)("p",null,"The base layer extension constructor optionally takes one argument ",(0,r.kt)("inlineCode",{parentName:"p"},"opts")," and stores it in ",(0,r.kt)("inlineCode",{parentName:"p"},"this.opts"),". This object will be accessible to lifecycle methods via ",(0,r.kt)("inlineCode",{parentName:"p"},"extension.opts"),". Additional properties can also be attached to the extension instance in the constructor for future use."),(0,r.kt)("p",null,"Note that if two extension instances are of the same class and have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"opts")," object, they are considered equal during layer updates. Creating a new extension instance with different options can potentially lead to the layers that use this extension to recompile their shaders, which may be an expensive operation. ",(0,r.kt)("inlineCode",{parentName:"p"},"opts")," is generally only used for options that require shader updates."),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("p",null,"When a layer extension is used, it injects itself into a layer. This means that you can implement most of the ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/layer-lifecycle"},"layer lifecycle methods")," as part of the extension, and they will be executed in addition to the layer's own."),(0,r.kt)("h5",{id:"getshaders"},(0,r.kt)("inlineCode",{parentName:"h5"},"getShaders")),(0,r.kt)("p",null,"Called to retrieve the ",(0,r.kt)("em",{parentName:"p"},"additional")," shader parameters. Returns an object that will be merged with the layer's own ",(0,r.kt)("inlineCode",{parentName:"p"},"getShaders")," result before sending to luma.gl's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/visgl/luma.gl/blob/8.5-release/modules/shadertools/docs/api-reference/assemble-shaders.md"},"shader assembly"),". See ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders"},"writing shaders")," for deck.gl-specific modules and hooks."),(0,r.kt)("p",null,"When this method is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," points to the layer."),(0,r.kt)("p",null,"Receives one argument:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h5",{id:"initializestate"},(0,r.kt)("inlineCode",{parentName:"h5"},"initializeState")),(0,r.kt)("p",null,"Called after the layer's own ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeState"),"."),(0,r.kt)("p",null,"When this method is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," points to the layer."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")," - same context object passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"layer.initializeState"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h5",{id:"updatestate"},(0,r.kt)("inlineCode",{parentName:"h5"},"updateState")),(0,r.kt)("p",null,"Called after the layer's own ",(0,r.kt)("inlineCode",{parentName:"p"},"updateState"),"."),(0,r.kt)("p",null,"When this method is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," points to the layer."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - same object passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"layer.updateState"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h5",{id:"draw"},(0,r.kt)("inlineCode",{parentName:"h5"},"draw")),(0,r.kt)("p",null,"Called before the layer's own ",(0,r.kt)("inlineCode",{parentName:"p"},"draw"),"."),(0,r.kt)("p",null,"When this method is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," points to the layer."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - same object passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"layer.draw"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h5",{id:"finalizestate"},(0,r.kt)("inlineCode",{parentName:"h5"},"finalizeState")),(0,r.kt)("p",null,"Called after the layer's own ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeState"),"."),(0,r.kt)("p",null,"When this method is executed, ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," points to the layer."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h5",{id:"getsublayerprops"},(0,r.kt)("inlineCode",{parentName:"h5"},"getSubLayerProps")),(0,r.kt)("p",null,"Called by composite layers to retrieve the ",(0,r.kt)("em",{parentName:"p"},"additional")," props that should be passed to its sublayers. Normally, a composite layer only passes through props that it recognizes. If an extension adds new props to a layer, then it is responsible of collecting these props by implementing this method."),(0,r.kt)("p",null,"Arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extension")," - the source extension instance.")),(0,r.kt)("h2",{id:"example-layer-extension"},"Example: Layer Extension"),(0,r.kt)("p",null,"Back to our example use case. We can implement the red filter with the following code that works with all deck.gl layers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {LayerExtension} from '@deck.gl/core';\n\nclass RedFilter extends LayerExtension {\n  getShaders() {\n    return {\n      inject: {\n        // Declare custom uniform\n        'fs:#decl': 'uniform bool highlightRed;',\n        // Standard injection hook - see \"Writing Shaders\"\n        'fs:DECKGL_FILTER_COLOR': `\n          if (highlightRed) {\n            if (color.r / max(color.g, 0.001) > 2. && color.r / max(color.b, 0.001) > 2.) {\n              // is red\n              color = vec4(1.0, 0.0, 0.0, 1.0);\n            } else {\n              discard;\n            }\n          }\n        `\n      }\n    };\n  }\n\n  updateState(params) {\n    const {highlightRed = true} = params.props;\n    for (const model of this.getModels()) {\n      model.setUniforms({highlightRed});\n    }\n  }\n\n  getSubLayerProps() {\n    const {highlightRed = true} = params.props;\n    return {\n      highlightRed\n    };\n  }\n}\n\nnew GeoJsonLayer({\n  ...\n  extensions: [new RedFilter()]\n});\n")),(0,r.kt)("p",null,"This example is on ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/vis-gl/pen/bXpNpK"},"codepen"),"."))}u.isMDXComponent=!0}}]);