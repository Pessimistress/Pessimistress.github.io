"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),g=s,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(83117),s=(r(67294),r(3905));const a={},o="Testing",i={unversionedId:"developer-guide/testing",id:"developer-guide/testing",title:"Testing",description:"Testing WebGL2/WebGPU code is much harder than testing regular JavaScript. GPU and browser dependent commands may not run under Node. Rendering behavior differs cross platforms and hardware. Since it draws into a canvas, there is also no precisely verifiable output.",source:"@site/../docs/developer-guide/testing.md",sourceDirName:"developer-guide",slug:"/developer-guide/testing",permalink:"/deck.gl/docs/developer-guide/testing",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/deck.gl/docs/developer-guide/debugging"},next:{title:"Using with ArcGIS",permalink:"/deck.gl/docs/developer-guide/base-maps/using-with-arcgis"}},l={},d=[{value:"Unit Tests for deck.gl Layers",id:"unit-tests-for-deckgl-layers",level:2},{value:"Example",id:"example",level:3},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Example",id:"example-1",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Testing WebGL2/WebGPU code is much harder than testing regular JavaScript. GPU and browser dependent commands may not run under Node. Rendering behavior differs cross platforms and hardware. Since it draws into a canvas, there is also no precisely verifiable output."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/test-utils/overview"},"@deck.gl/test-utils")," module is used to ensure the quality and stability of the deck.gl framework. It is also available for those who need to test their own custom layers and/or deck.gl applications."),(0,s.kt)("h2",{id:"unit-tests-for-deckgl-layers"},"Unit Tests for deck.gl Layers"),(0,s.kt)("p",null,"Lifecycle test functions are designed to allow for integration with different unit test frameworks. Some of the details depend on the test framework you are using. deck.gl itself uses ",(0,s.kt)("inlineCode",{parentName:"p"},"tape")," so the tests in the deck.gl repository contain extensive examples of ",(0,s.kt)("inlineCode",{parentName:"p"},"tape")," integration, but it should also be straightforward to integrate with other unit testing frameworks."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Using ",(0,s.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/test-utils/test-layer"},"testLayer")," util to instantiate a layer and test a series of prop updates:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import test from 'tape-promise/tape';\nimport {testLayer} from '@deck.gl/test-utils';\nimport {GeoJsonLayer} from '@deck.gl/layers';\n\ntest('GeoJsonLayer#tests', t => {\n  testLayer({Layer: GeoJsonLayer, testCases: [\n    // Test case 1\n    {\n      props: {data: []}\n    },\n    // Test case 2\n    {\n      props: {\n        data: SAMPLE_GEOJSON\n      },\n      assert({layer, oldState}) {\n        t.ok(layer.state.features !== oldState.features, 'should update features');\n        t.is(subLayers.length, 2, 'should render 2 subLayers');\n      }\n    },\n    // Test case 3\n    {\n      updateProps: {\n        // will be merged with the previous props\n        lineWidthScale: 3\n      },\n      assert({subLayers}) {\n        const pathLayer = subLayers.find(layer => layer.id.endsWith('linestrings'));\n        t.is(pathLayer.props.widthScale, 3, 'widthScale is passed to sub layer');\n      }\n    }\n  ]});\n\n  t.end();\n});\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/test-utils/generate-layer-tests"},"generateLayerTests")," utility automatically generates a series of test cases for ",(0,s.kt)("inlineCode",{parentName:"p"},"testLayers")," based on the layer class' default props. It is useful for checking the conformance of a layer class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import test from 'tape-promise/tape';\nimport {testLayer, generateLayerTests} from '@deck.gl/test-utils';\nimport {GeoJsonLayer} from '@deck.gl/layers';\n\ntest('GeoJsonLayer#tests', t => {\n  \n  const testCases = generateLayerTests({\n    Layer: GeoJsonLayer,\n    sampleProps: {\n      data: SAMPLE_GEOJSON\n    },\n    assert: ({layer, subLayers}) => {\n      t.ok(layer.state.features, 'should update features');\n      t.is(subLayers.length, layer.props.stroked ? 2 : 1, 'correct number of sublayers');\n    }\n  });\n\n  testLayer({Layer: GeoJsonLayer, testCases});\n\n  t.end();\n});\n")),(0,s.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,s.kt)("p",null,"While unit tests are good at capturing issues in layer initialization and prop updates, they do not guarantee that the layer will be correctly rendered to screen. Some issues in e.g. the GPU shaders can only be spotted in an integration test."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@deck.gl/test-utils")," module offers a ",(0,s.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/test-utils/snapshot-test-runner"},"SnapshotTestRunner")," that works with the ",(0,s.kt)("a",{parentName:"p",href:"https://uber-web.github.io/probe.gl"},"probe.gl")," library's ",(0,s.kt)("a",{parentName:"p",href:"https://uber-web.github.io/probe.gl/docs/api-reference/test-utils/browser-test-driver"},(0,s.kt)("inlineCode",{parentName:"a"},"BrowserTestDriver"))," class to perform this task. Together, they enable the following scenario:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"start a controlled Chromium browser instance"),(0,s.kt)("li",{parentName:"ul"},"start a server (we use a webpack-dev-server) that bundles a test script."),(0,s.kt)("li",{parentName:"ul"},"the test script renders a set of tests (described below), compares the output against golden images and report the result back to the Node process"),(0,s.kt)("li",{parentName:"ul"},"closes down all processes and browser tabs."),(0,s.kt)("li",{parentName:"ul"},"the node process exists with a ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," (success) or ",(0,s.kt)("inlineCode",{parentName:"li"},"1")," if any test failed.")),(0,s.kt)("h3",{id:"example-1"},"Example"),(0,s.kt)("p",null,"In your node.js start script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// This is the script that runs in Node.js and starts the browser\nconst {BrowserTestDriver} = require('@probe.gl/test-utils');\nnew BrowserTestDriver().run({\n  server: {\n    // Bundles and serves the browser script\n    command: 'webpack-dev-server',\n    arguments: ['--env.render-test']\n  },\n  headless: true\n});\n")),(0,s.kt)("p",null,"In your script that is run on the browser:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const {SnapshotTestRunner} = require('@deck.gl/test-utils');\nconst {ScatterplotLayer} = require('@deck.gl/layers');\n\nconst TEST_CASES = [\n  {\n    name: 'ScatterplotLayer',\n    // `Deck` props\n    viewState: {\n      longitude: -122.4,\n      latitude: 37.8,\n      zoom: 12,\n      pitch: 20\n    },\n    layers: [\n      new ScatterplotLayer({\n        id: 'circles',\n        data: './data/scatterplot.json',\n        getPosition: d => d.position,\n        getRadius: d => d.size,\n        getFillColor: [255, 0, 0]\n      })\n    ],\n    // `done` must be called when ready for screenshot and compare\n    onAfterRender: ({layers, done}) => {\n      if (layers[0].props.data.length) {\n        // data is loaded\n        done();\n      }\n    },\n    // Target rendering result\n    goldenImage: './test/render/golden-images/scatterplot.png'\n  }\n];\n\nnew TestRender({width: 800, height: 600})\n  .add(TEST_CASES)\n  .run({\n    onTestFail: window.browserTestDriver_fail\n  })\n  .then(window.browserTestDriver_finish);\n")))}u.isMDXComponent=!0}}]);