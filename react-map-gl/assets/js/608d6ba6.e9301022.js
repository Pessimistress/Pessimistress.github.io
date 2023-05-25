"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[2930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=n,u=c["".concat(p,".").concat(d)]||c[d]||h[d]||o;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={},p="Introduction",l={unversionedId:"README",id:"README",title:"Introduction",description:"These docs are for",source:"@site/../docs/README.md",sourceDirName:".",slug:"/",permalink:"/react-map-gl/docs/",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"What's new",permalink:"/react-map-gl/docs/whats-new"}},m={},c=[{value:"Design Philosophy",id:"design-philosophy",level:2},{value:"Limitations",id:"limitations",level:2}],h={toc:c},d="wrapper";function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",{align:"center"},"These docs are for",(0,o.kt)("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/docs"},(0,o.kt)("img",{src:"https://img.shields.io/badge/v7.0-brightgreen.svg?style=flat-square"})),"Looking for an old version?",(0,o.kt)("a",{href:"https://github.com/visgl/react-map-gl/tree/6.1-release/docs"},(0,o.kt)("img",{src:"https://img.shields.io/badge/v6.1-brightgreen.svg?style=flat-square"})),(0,o.kt)("a",{href:"https://github.com/visgl/react-map-gl/tree/5.3-release/docs"},(0,o.kt)("img",{src:"https://img.shields.io/badge/v5.3-brightgreen.svg?style=flat-square"}))),(0,o.kt)("p",null,"react-map-gl is a suite of ",(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/react/"},"React")," components for\nMapbox GL JS-compatible libraries."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Library"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/MapLibre/maplibre-gl-js"},"MapLibre")),(0,o.kt)("td",{parentName:"tr",align:null},"An open fork of mapbox-gl v1, that can be used without a mapbox token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/mapbox/mapbox-gl-js"},"Mapbox GL JS v1")),(0,o.kt)("td",{parentName:"tr",align:null},"The previous version of mapbox GL JS. This version is free open source and can be used with non-mapbox basemaps without a mapbox token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/mapbox/mapbox-gl-js"},"Mapbox GL JS v2")),(0,o.kt)("td",{parentName:"tr",align:null},"The latest version of Mapbox GL JS. Note that version 2 is not free open source, and a mapbox token is required and billable events are generated even if you do not use mapbox hosted basemaps.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Other mapbox-gl forks"),(0,o.kt)("td",{parentName:"tr",align:null},"It may be possible to use react-map-gl with other mapbox forks, but this is not a supported use case. Minor PRs to enable other forks to be used may be accepted.")))),(0,o.kt)("p",null,"For basemaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can load map data from Mapbox's own service."),(0,o.kt)("li",{parentName:"ul"},"You can create and host your own map data using one of the many ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mapbox/awesome-vector-tiles"},"open source tools"),".")),(0,o.kt)("p",null,"New to react-map-gl? ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/get-started/"},"Get Started")),(0,o.kt)("p",null,"Want to contribute? See our ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/contributing"},"Developer Guide")),(0,o.kt)("h2",{id:"design-philosophy"},"Design Philosophy"),(0,o.kt)("p",null,"react-map-gl was first created by Uber's Visualization team, where Mapbox was used as a component to build powerful web tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://kepler.gl"},"geospatial analytics")," and ",(0,o.kt)("a",{parentName:"p",href:"https://avs.auto/"},"self-driving data visualization"),". To manage the complexity of these applications, we fully embrace React and reactive programming."),(0,o.kt)("p",null,"The stock mapbox-gl APIs are ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Imperative_programming"},"imperative"),". That is, you instruct the map to do something (for example, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto"},"map.flyTo"),"), and it will execute the command at its own pace."),(0,o.kt)("p",null,"This does not scale when we have many components that need to synchronize with each other. We sometimes render two maps side by side, and when the user interacts with one, update both cameras. We draw React UI outside of the map container, that moves with the camera. We also render WebGL graphic overlays on top of the map, most notably with ",(0,o.kt)("a",{parentName:"p",href:"https://deck.gl"},"deck.gl"),". In these use cases, in order for all components to synchronize correctly, they must have their shared states managed by React. We might store the ",(0,o.kt)("strong",{parentName:"p"},"source of truth")," in a parent component state, or Redux store, or hooks, and let it propagate down to the map as well as its peers. "),(0,o.kt)("p",null,"Ultimately, in the spirit of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reactive_programming"},"reactive programming paradigm"),", data always flows ",(0,o.kt)("strong",{parentName:"p"},"down"),". As long as the map manages its own state, as mapbox-gl is designed to do, we risk the components going out of sync."),(0,o.kt)("p",null,"react-map-gl creates a fully reactive wrapper for mapbox-gl. The ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map"},"Map")," component can be fully ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forms.html#controlled-components"},"controlled"),", that is, the map's camera would never deviate from the props that it's assigned. Read more about this core behavior in ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/get-started/state-management"},"state management"),"."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"In v7.0, react-map-gl was fully rewritten to better align its API with the underlying Mapbox GL JS library. Wherever the reactive usage patterns permits, the wrapper's props and methods are 1:1 mappings to their native API equivelants."),(0,o.kt)("p",null,"It is possible to call the native methods directly from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," instance obtained via ",(0,o.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map#gemap"},"getMap"),". However, doing so may result in the map's state to deviate from its props. For example, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"map.setMaxZoom")," directly will cause the map's constraint settings to differ from the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxZoom")," prop. Generally speaking, calling a native method is disencouraged if the same thing can be achieved through the React interface. If a third-party plugin does so, then it may lead to some unexpected behaviors."))}u.isMDXComponent=!0}}]);