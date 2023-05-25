"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[7944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||n;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],p={},l="About Mapbox Tokens",s={unversionedId:"get-started/mapbox-tokens",id:"get-started/mapbox-tokens",title:"About Mapbox Tokens",description:"react-map-gl itself is open source and free. It provides a React wrapper for mapbox-gl or derived projects.",source:"@site/../docs/get-started/mapbox-tokens.md",sourceDirName:"get-started",slug:"/get-started/mapbox-tokens",permalink:"/react-map-gl/docs/get-started/mapbox-tokens",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/get-started/mapbox-tokens.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Get Started",permalink:"/react-map-gl/docs/get-started/"},next:{title:"State Management",permalink:"/react-map-gl/docs/get-started/state-management"}},u={},m=[{value:"Display Maps Without A Mapbox Token",id:"display-maps-without-a-mapbox-token",level:2}],c={toc:m},d="wrapper";function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-mapbox-tokens"},"About Mapbox Tokens"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"react-map-gl")," itself is open source and free. It provides a React wrapper for ",(0,n.kt)("inlineCode",{parentName:"p"},"mapbox-gl")," or derived projects.\nDepending on which Mapbox GL JS version (or fork) you use, you may need a Mapbox token. You will need a Mapbox token if you use:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mapbox/mapbox-gl-js/releases/tag/v2.0.0"},"mapbox-gl@>=2.0.0")," and above - requires a mapbox access token in order to access the map renderer, and generates billable events regardlesss of whether you are displaying your own maps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mapbox-gl@1.x")," or ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/maplibre/maplibre-gl-js"},"maplibre-gl"),' - requires an access token only if you load the map styles and tiles from Mapbox\'s data service. See "Display Maps Without A Mapbox Token" section below for using non-Mapbox tiles.')),(0,n.kt)("p",null,"To get a Mapbox token, you will need to register on ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapbox.com"},"their website"),". The token will be used to identify you and start serving up map tiles. The service is free until a certain level of traffic is exceeded."),(0,n.kt)("p",null,"There are several ways to provide a token to your app, as showcased in some of the example folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a ",(0,n.kt)("inlineCode",{parentName:"li"},"mapboxAccessToken")," prop to the map component"),(0,n.kt)("li",{parentName:"ul"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"MapboxAccessToken")," environment variable (or set ",(0,n.kt)("inlineCode",{parentName:"li"},"REACT_APP_MAPBOX_ACCESS_TOKEN")," if you are using Create React App)"),(0,n.kt)("li",{parentName:"ul"},"Provide it in the URL, e.g ",(0,n.kt)("inlineCode",{parentName:"li"},"?access_token=TOKEN"))),(0,n.kt)("p",null,"We recommend using an environment variable to minimize leaking risks. See ",(0,n.kt)("a",{parentName:"p",href:"/react-map-gl/docs/get-started/tips-and-tricks#securing-mapbox-token"},"securing Mapbox token")," for examples."),(0,n.kt)("h2",{id:"display-maps-without-a-mapbox-token"},"Display Maps Without A Mapbox Token"),(0,n.kt)("p",null,"It is possible to use the map component without the Mapbox service, if you use another tile source (for example, if you host your own map tiles). Note that this is no longer allowed using mapbox-gl v2.0 and above. The options are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Stay on ",(0,n.kt)("inlineCode",{parentName:"li"},"mapbox-gl@1.x"),". react-map-gl plans to continue supporting this release in the foreseeable future, however, this version will not include any of the latest features of the map renderer, nor get any future updates from Mapbox."),(0,n.kt)("li",{parentName:"ul"},"Use a community fork of mapbox-gl, for example ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/maplibre-gl"},"maplibre-gl"),". See ",(0,n.kt)("a",{parentName:"li",href:"/react-map-gl/docs/get-started/#using-with-a-mapbox-gl-fork"},"using with a mapbox-gl fork")," for how to configure your project.")),(0,n.kt)("p",null,"To use your own map service, you will need a custom Mapbox GL style that points to your own ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapbox.com/mapbox-gl-js/style-spec/"},"vector tile source"),", and pass it to ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"mapStyle")," prop. This custom style must match the schema of your tile source."),(0,n.kt)("p",null,"Open source tile schemas include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://tilezen.readthedocs.io/en/latest/layers/"},"TileZen schema")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://openmaptiles.org/schema/"},"OpenMapTiles schema "))),(0,n.kt)("p",null,"Some useful resources for creating your own map service:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mapbox.com/developers/vector-tiles/"},"Mapbox Vector Tile Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mapbox/awesome-vector-tiles"},"Open source tools"))),(0,n.kt)("p",null,"If you are using a third party service that requires header based authentication, you can do this by defining a function to pass to ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," using the ",(0,n.kt)("inlineCode",{parentName:"p"},"transformRequest")," prop."),(0,n.kt)("p",null,"An example function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const transformRequest = (url, resourceType) => {\n  if (resourceType === 'Tile' && url.match('yourTileSource.com')) {\n    return {\n      url: url,\n      headers: { 'Authorization': 'Bearer ' + yourAuthToken }\n    }\n  }\n}\n")))}f.isMDXComponent=!0}}]);