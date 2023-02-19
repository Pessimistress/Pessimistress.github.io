"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="Subclassed Layers",s={unversionedId:"developer-guide/custom-layers/subclassed-layers",id:"developer-guide/custom-layers/subclassed-layers",title:"Subclassed Layers",description:"deck.gl layers are designed to be easy to extend in order to add features.",source:"@site/../docs/developer-guide/custom-layers/subclassed-layers.md",sourceDirName:"developer-guide/custom-layers",slug:"/developer-guide/custom-layers/subclassed-layers",permalink:"/deck.gl/docs/developer-guide/custom-layers/subclassed-layers",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/custom-layers/subclassed-layers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composite Layers",permalink:"/deck.gl/docs/developer-guide/custom-layers/composite-layers"},next:{title:"Primitive Layers",permalink:"/deck.gl/docs/developer-guide/custom-layers/primitive-layers"}},l={},d=[{value:"Overriding Attribute Calculation",id:"overriding-attribute-calculation",level:2},{value:"Overriding Shaders",id:"overriding-shaders",level:2},{value:"Defining Additional Uniforms",id:"defining-additional-uniforms",level:2},{value:"Defining Additional Attributes",id:"defining-additional-attributes",level:2},{value:"Layer Extensions",id:"layer-extensions",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subclassed-layers"},"Subclassed Layers"),(0,a.kt)("p",null,"deck.gl layers are designed to be easy to extend in order to add features.\nSubclassing allows redefining both layer life cycle methods as well as\nthe vertex and/or fragment shaders."),(0,a.kt)("p",null,"If a small feature is missing from a layer, subclassing can often be a\ngood technique to add it."),(0,a.kt)("h2",{id:"overriding-attribute-calculation"},"Overriding Attribute Calculation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Example to add per-segment color to PathLayer\nimport {PathLayer} from '@deck.gl/layers';\nimport GL from '@luma.gl/constants';\n\n// Allow accessor: `getColor` (Function, optional)\n// Returns an color (array of numbers, RGBA) or array of colors (array of arrays).\nexport default class MultiColorPathLayer extends PathLayer {\n  initializeState() {\n    super.initializeState();\n    this.getAttributeManager().addInstanced({\n      instanceColors: {\n        size: 4,\n        type: GL.UNSIGNED_BYTE,\n        normalized: true,\n        update: this.calculateColors\n      }\n    })\n  }\n\n  calculateColors(attribute) {\n    const {data, getPath, getColor} = this.props;\n    const {value} = attribute;\n\n    let i = 0;\n\n    for (const object of data) {\n      const path = getPath(object);\n      const color = getColor(object);\n      if (Array.isArray(color[0])) {\n        if (color.length !== path.length) {\n          throw new Error(`PathLayer getColor() returned a color array, but the number of\n           colors returned doesn't match the number of segments in the path`);\n        }\n        color.forEach((segmentColor) => {\n          value[i++] = segmentColor[0];\n          value[i++] = segmentColor[1];\n          value[i++] = segmentColor[2];\n          value[i++] = isNaN(segmentColor[3]) ? 255 : segmentColor[3];\n        });\n      } else {\n        for (let ptIndex = 1; ptIndex < path.length; ptIndex++) {\n          value[i++] = color[0];\n          value[i++] = color[1];\n          value[i++] = color[2];\n          value[i++] = isNaN(color[3]) ? 255 : color[3];\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/visgl/deck.gl/pull/336"},"Courtesy")," of ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/dcposch"},"@dcposch"),".")),(0,a.kt)("h2",{id:"overriding-shaders"},"Overriding Shaders"),(0,a.kt)("p",null,"You can replace the shaders used in a layer by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"getShaders()"),"\nmethod. Every core layer calls this method during initialization. It\nreturns the shaders and modules used by the layer in an object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vs"),": string, GLSL source of the vertex shader"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs"),": string, GLSL source of the fragment shader"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modules"),": Array, list of shader modules to be used"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inject"),": Object, map from injection points to custom GLSL code to be injected")),(0,a.kt)("p",null,"Read about ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders"},"writing your own shaders"),"."),(0,a.kt)("p",null,"When you are implementing your own custom layers, and want to change the shaders\nit is encouraged that you also define a ",(0,a.kt)("inlineCode",{parentName:"p"},"getShaders()")," function and selectively\noverwrite required shader(s) with custom shaders.\nThis makes it much easier for others to subclass your layer and make small\nchanges to the shaders."),(0,a.kt)("p",null,"Note: When overwriting ",(0,a.kt)("inlineCode",{parentName:"p"},"getShaders()")," you should pass down any unmodified shader(s)\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," as is. See code example below."),(0,a.kt)("h2",{id:"defining-additional-uniforms"},"Defining Additional Uniforms"),(0,a.kt)("p",null,"The best way to pass additional uniforms to your custom shader is to override\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"draw()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/// rounded-rectangle-layer.js\n// Example to draw rounded rectangles instead of circles in ScatterplotLayer\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport customFragmentShader from './rounded-rectangle-layer-fragment';\n\nexport default RoundedRectangleLayer extends ScatterplotLayer {\n\n  draw({uniforms}) {\n    super.draw({\n      uniforms:\n        {\n        ...uniforms,\n        cornerRadius: this.props.cornerRadius\n        }\n    })\n  }\n\n  getShaders() {\n    // use object.assign to make sure we don't overwrite existing fields like `vs`, `modules`...\n    return Object.assign({}, super.getShaders(), {\n      fs: customFragmentShader\n    });\n  }\n}\n\nRoundedRectangleLayer.defaultProps = {\n  // cornerRadius: the amount of rounding at the rectangle corners\n  // 0 - rectangle. 1 - circle.\n  cornerRadius: 0.1\n}\n")),(0,a.kt)("p",null,"Modified fragment shader that uses this uniform (learn more in ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders"},"writing your own shaders"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/// rounded-rectangle-layer-fragment.js\n// This is copied and adapted from scatterplot-layer-fragment.glsl.js\n// Modifications are annotated\nexport default `\\\n#define SHADER_NAME rounded-rectangle-layer-fragment-shader\n\nprecision highp float;\n\nuniform float cornerRadius;\n\nvarying vec4 vFillColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  /* Calculate the cutoff radius for the rounded corners */\n  float threshold = sqrt(2.0) * (1.0 - cornerRadius) + 1.0 * cornerRadius;\n  if (distToCenter <= threshold) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n`;\n")),(0,a.kt)("h2",{id:"defining-additional-attributes"},"Defining Additional Attributes"),(0,a.kt)("p",null,"During initialization, you may define additional attributes by accessing the\nlayer's ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/attribute-management"},"attribute manager"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// my-point-cloud-layer.js\n// Example to add per-point size to point cloud layer\nimport {PointCloudLayer} from 'deck.gl';\nimport vertexShader from 'my-point-cloud-layer-vertex';\n\nexport default MyPointCloudLayer extends PointCloudLayer {\n\n  initializeState() {\n    super.initializeState();\n\n    this.state.attributeManager.addInstanced({\n      instanceRadiusPixels: {size: 1, accessor: 'getRadius'}\n    });\n  }\n\n  getShaders() {\n    return Object.assign({}, super.getShaders(), {\n      vs: vertexShader,\n    });\n  }\n}\n\nMyPointCloudLayer.defaultProps = {\n  // returns point radius in pixels\n  getRadius: {type: 'accessor', value: 1}\n};\n")),(0,a.kt)("p",null,"Modified vertex shader that uses this attribute (learn more in ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders"},"writing your own shaders"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// my-point-cloud-layer-vertex.js\n// This is copied and adapted from point-cloud-layer-vertext.glsl.js\n// Modifications are annotated\nexport default `\\\n#define SHADER_NAME point-cloud-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 instanceNormals;\nattribute vec4 instanceColors;\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute vec3 instancePickingColors;\n\n/* New attribute */\nattribute flat instanceRadiusPixels;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n  unitPosition = positions.xy;\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), position_commonspace);\n  /* replaced uniform 'radiusPixels' with 'instanceRadiusPixels' */\n  gl_Position.xy += project_pixel_size_to_clipspace(positions.xy * instanceRadiusPixels);\n\n  vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project_uCameraPosition, position_commonspace.xyz, project_normal(instanceNormals));\n\n  vColor = vec4(lightColor, instanceColors.a * opacity) / 255.0;\n\n  picking_setPickingColor(instancePickingColors);\n}\n`;\n")),(0,a.kt)("h2",{id:"layer-extensions"},"Layer Extensions"),(0,a.kt)("p",null,"Sometimes we need to subclass multiple layers to add similar functionalities.\n",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/extensions/overview"},"Layer extension")," is a way to generalize, reuse, and share subclassed layer code. ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/custom-layers/layer-extensions"},"Read on")," about how to package up a subclassed layer code into a layer extension."))}p.isMDXComponent=!0}}]);