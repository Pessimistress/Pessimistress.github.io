"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[9255],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=i,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={},p="Upgrade Guide",d={unversionedId:"upgrade-guide",id:"upgrade-guide",title:"Upgrade Guide",description:"Upgrading to v8.0",source:"@site/../docs/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/react-map-gl/docs/upgrade-guide",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/upgrade-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"What's new",permalink:"/react-map-gl/docs/whats-new"},next:{title:"Contributing",permalink:"/react-map-gl/docs/contributing"}},m={},s=[{value:"Upgrading to v8.0",id:"upgrading-to-v80",level:2},{value:"Upgrading to v7.0",id:"upgrading-to-v70",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Module exports",id:"module-exports",level:3},{value:"Map",id:"map",level:3},{value:"Other components",id:"other-components",level:3},{value:"Upgrading to v5.3/v6.1",id:"upgrading-to-v53v61",level:2},{value:"Upgrading to v6",id:"upgrading-to-v6",level:2},{value:"Upgrading to v4",id:"upgrading-to-v4",level:2},{value:"Upgrading to v3.2",id:"upgrading-to-v32",level:2},{value:"Upgrading to v3",id:"upgrading-to-v3",level:2},{value:"Version Requirements",id:"version-requirements",level:3},{value:"MapGL Component",id:"mapgl-component",level:3},{value:"<code>onChangeViewport</code> callback now includes <code>width</code> and <code>height</code>.",id:"onchangeviewport-callback-now-includes-width-and-height",level:4},{value:"Overlays",id:"overlays",level:3},{value:"<code>fitBounds</code> utility function",id:"fitbounds-utility-function",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Upgrading to v2",id:"upgrading-to-v2",level:2},{value:"Upgrading to v1",id:"upgrading-to-v1",level:2}],u={toc:s},c="wrapper";function k(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-guide"},"Upgrade Guide"),(0,r.kt)("h2",{id:"upgrading-to-v80"},"Upgrading to v8.0"),(0,r.kt)("p",null,"In v8.0, ",(0,r.kt)("inlineCode",{parentName:"p"},"react-map-gl")," no long require any vender-specific base map library as dependency. As a result, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," component's ",(0,r.kt)("inlineCode",{parentName:"p"},"mapLib")," prop must be provided. Users who use the package with ",(0,r.kt)("inlineCode",{parentName:"p"},"mapbox-gl")," now need to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"mapLib")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Map mapLib={import('mapbox-gl')} ...>\n")),(0,r.kt)("p",null,"For additional options and examples, see ",(0,r.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map#maplib"},"mapLib")," documentation."),(0,r.kt)("h2",{id:"upgrading-to-v70"},"Upgrading to v7.0"),(0,r.kt)("p",null,"v7 is a complete rewrite of the library. It is redesigned to be fast, lightweight, fully typed, to behave the same and expose the same APIs as the wrapped map library, and to provide the maximum compatibility with third-party plugins. To take advantages of these new features, you need to make some changes to your code that was previously depending on react-map-gl v5 and v6."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using react-map-gl controls (",(0,r.kt)("inlineCode",{parentName:"p"},"Marker"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Popup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NavigationControl")," etc.) with deck.gl's ",(0,r.kt)("inlineCode",{parentName:"p"},"ContextProvider"),", do not upgrade to this version. The old approach no longer works with v7. We are moving the support for this use case to a new project that does not depend on mapbox.")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"mapbox-gl")," (or a compatible fork) to your package.json. ",(0,r.kt)("inlineCode",{parentName:"li"},"react-map-gl")," no longer lists a specific map renderer in its dependencies, so you are free to use it with Mapbox v1, v2 or Maplibre."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewport-mercator-project")," (an alias of ",(0,r.kt)("inlineCode",{parentName:"li"},"@math.gl/web-mercator"),") is no longer a dependency. You can still install the library on the side as a utility for viewport-related math, but it's no longer required.")),(0,r.kt)("h3",{id:"module-exports"},"Module exports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InteractiveMap")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"StaticMap")," are removed. Instead, import ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setRTLTextPlugin")," is removed. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Map")," component's ",(0,r.kt)("inlineCode",{parentName:"li"},"RTLTextPlugin")," prop (default enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MapController")," is removed.  v7.0 has removed its own implementation of user input handling in favor of the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mapbox.com/mapbox-gl-js/api/handlers/"},"native handlers"),". If you are using a custom implementation of ",(0,r.kt)("inlineCode",{parentName:"li"},"MapController"),", check if the native handlers offer options to address your application's needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MapContext")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"useMapControl")," are removed. Check out the new API ",(0,r.kt)("a",{parentName:"li",href:"/react-map-gl/docs/api-reference/use-map"},"useMap")," and ",(0,r.kt)("a",{parentName:"li",href:"/react-map-gl/docs/api-reference/use-control"},"useControl"),"."),(0,r.kt)("li",{parentName:"ul"},"The overlay components (",(0,r.kt)("inlineCode",{parentName:"li"},"HTMLOverlay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CanvasOverlay")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SVGOverlay"),") are removed. Check out ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/custom-overlay"},"this example")," for implementing similar controls in your own application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LinearInterpolator")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FlyToInterpolator")," are removed. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"map.easeTo()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"map.flyTo()")," instead, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/viewport-animation"},"this example"),".")),(0,r.kt)("h3",{id:"map"},"Map"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/react-map-gl/docs/api-reference/map"},"documentation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed props for better consistency with the wrapped library:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapboxApiAccessToken")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"mapboxAccessToken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapboxApiUrl")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"baseApiUrl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"preventStyleDiffing")," (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),") is replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"styleDiffing")," (default ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapStyle")," should be explicitly specified. The default value has changed from ",(0,r.kt)("inlineCode",{parentName:"li"},'"mapbox://styles/mapbox/light-v9"')," to an empty style."),(0,r.kt)("li",{parentName:"ul"},"The following props are removed and apps should use ",(0,r.kt)("inlineCode",{parentName:"li"},"style")," instead:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"width")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"visible")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onViewportChange"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"onViewStateChange")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"onInteractionStateChange")," are removed. You can either use ",(0,r.kt)("inlineCode",{parentName:"li"},"Map")," as an uncontrolled component with the new ",(0,r.kt)("inlineCode",{parentName:"li"},"initialViewState")," prop, or if you need to manage the camera state externally (e.g. in Redux), use the ",(0,r.kt)("inlineCode",{parentName:"li"},"onMove")," callback instead. See examples in ",(0,r.kt)("a",{parentName:"li",href:"/react-map-gl/docs/get-started/state-management"},"state management"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transition*")," props are removed. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"map.easeTo()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"map.flyTo()")," instead, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/viewport-animation"},"this example"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapOptions")," is removed. Almost all of the options for the native ",(0,r.kt)("inlineCode",{parentName:"li"},"Map")," class are exposed as props. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onHover")," is removed. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"onMouseMove")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"onMouseEnter"),"."),(0,r.kt)("li",{parentName:"ul"},"The event argument is changed for all interaction callbacks. See documentation for details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getCursor")," is removed as part of the effort to get ",(0,r.kt)("inlineCode",{parentName:"li"},"Map")," behave the same as the native component. To set the cursor, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"cursor")," prop. Follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/custom-cursor"},"this example")," to change cursor on hover."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"touchAction")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"eventRecognizerOptions")," are removed. Check out the ",(0,r.kt)("inlineCode",{parentName:"li"},"cooperativeGestures")," prop.")),(0,r.kt)("h3",{id:"other-components"},"Other components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"capture*")," props are removed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*label")," props are removed. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"locale")," prop."),(0,r.kt)("li",{parentName:"ul"},"All map controls' props are now strictly aligned with their mapbox-gl counterparts. In heading this direction, we are able to remove a significant amount of custom code and have the components behave more predictably for developers switching from the native library. If your application is relying on an old feature that is no longer supported, please open a topic on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/discussions"},"Discussion")," so we can review on a case-by-case basis.")),(0,r.kt)("h2",{id:"upgrading-to-v53v61"},"Upgrading to v5.3/v6.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MapContext")," is now an official API. The experimental ",(0,r.kt)("inlineCode",{parentName:"li"},"_MapContext")," export will be removed in a future release."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-virtualized-auto-sizer")," is no longer a dependency."),(0,r.kt)("li",{parentName:"ul"},"Inertia has been enabled by default on the map controller. To revert to the behavior in previous versions, set the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/visgl/react-map-gl/tree/6.1-release/docs/api-reference/interactive-map.md#interaction-options"},"interaction options"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const CONTROLLER_OPTS = {\n  dragPan: {inertia: 0},\n  dragRotate: {inertia: 0},\n  touchZoom: {inertia: 0}\n};\n\n<MapGL {...CONTROLLER_OPTS} ... />\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Source")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Layer")," components no longer expose imperative methods via ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," as part of the migration to functional components. This is to comply with the pattern recommended by the latest React.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you used to call ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceRef.getSource()"),", it can be replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"mapRef().getMap().getSource(sourceId)"),"."),(0,r.kt)("li",{parentName:"ul"},"If you used to call ",(0,r.kt)("inlineCode",{parentName:"li"},"layerRef.getLayer()"),", it can be replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"mapRef().getMap().getLayer(layerId)"),".")))),(0,r.kt)("h2",{id:"upgrading-to-v6"},"Upgrading to v6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A valid Mapbox access token is always required."),(0,r.kt)("li",{parentName:"ul"},"The default value of ",(0,r.kt)("inlineCode",{parentName:"li"},"InteractiveMap"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"maxPitch")," prop is changed to ",(0,r.kt)("inlineCode",{parentName:"li"},"85")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"60"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapbox-gl")," v2 introduced a breaking change to the build system. Transpiling it may result in a crash in the production build with the message ",(0,r.kt)("inlineCode",{parentName:"li"},"m is not defined"),". Find solutions in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mapbox/mapbox-gl-js/issues/10173"},"this thread"),".")),(0,r.kt)("h2",{id:"upgrading-to-v4"},"Upgrading to v4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onChangeViewport")," is removed, use ",(0,r.kt)("inlineCode",{parentName:"li"},"onViewportChange")," instead"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Immutable.js")," is no longer a dependency"),(0,r.kt)("li",{parentName:"ul"},"Export ",(0,r.kt)("inlineCode",{parentName:"li"},"experimental.MapControls")," is removed, use ",(0,r.kt)("inlineCode",{parentName:"li"},"MapController")," instead"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InteractiveMap"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"mapControls")," prop is renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"controller")),(0,r.kt)("li",{parentName:"ul"},"Removed support for the deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"interactive")," property on the layer styles. Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"interactiveLayerIds")," prop to specify which layers are clickable.")),(0,r.kt)("h2",{id:"upgrading-to-v32"},"Upgrading to v3.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The latest mapbox-gl release requires stylesheet to be included at all times. See ",(0,r.kt)("a",{parentName:"li",href:"/react-map-gl/docs/get-started/"},"Get Started")," for information about styling."),(0,r.kt)("li",{parentName:"ul"},"Immutable.js is no longer a hard dependency and will be removed in the next major release. If you are importing immutable in your application, it is recommended that you explicitly list it in the application's dependencies.")),(0,r.kt)("h2",{id:"upgrading-to-v3"},"Upgrading to v3"),(0,r.kt)("p",null,"v3 is a major upgrade of react-map-gl. While we have tried to gently deprecated any changed or removed features, a few breaking changes could not be avoided."),(0,r.kt)("h3",{id:"version-requirements"},"Version Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Node Version Requirement")," for ",(0,r.kt)("strong",{parentName:"li"},"building")," react-map-gl is now ",(0,r.kt)("strong",{parentName:"li"},">=v6.4.0"),". Using prebuilt react-map-gl does ",(0,r.kt)("strong",{parentName:"li"},"NOT")," has this limitation. This is introduced by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mapbox/mapbox-gl-js/releases/tag/v0.38.0"},"Mapbox GL JS v0.38.0"))),(0,r.kt)("h3",{id:"mapgl-component"},"MapGL Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Two Map Components")," - v3 now splits the Map component into two React components: ",(0,r.kt)("inlineCode",{parentName:"li"},"StaticMap")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"InteractiveMap"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"InteractiveMap")," is the default export, and designed to be as compatible as possible with the v2 default component.")),(0,r.kt)("h4",{id:"onchangeviewport-callback-now-includes-width-and-height"},(0,r.kt)("inlineCode",{parentName:"h4"},"onChangeViewport")," callback now includes ",(0,r.kt)("inlineCode",{parentName:"h4"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"h4"},"height"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," parameter passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChangeViewport")," callback now includes ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height"),". Application code that composed the ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," may have to be updated. Please double check your render code if you relied on this behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// BAD: 'width' and 'height' below will be overridden by what's in the 'viewport' object\n<ReactMapGL width={500} height={400} {...viewport} />\n// GOOD: 'width' and 'height' below will override the values in 'viewport'\n<ReactMapGL {...viewport} width={500} height={400} />\n")),(0,r.kt)("h3",{id:"overlays"},"Overlays"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Some Overlays Moved to Examples")," -  Some less frequently used overlays (",(0,r.kt)("inlineCode",{parentName:"li"},"DraggablePointsOverlay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ChoroplethOverlay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ScatterplotOverlay"),"), have been moved to examples. Most users are now using mapbox styles or deck.gl layers and removing these overlays reduces the size of the react-map-gl library for the majority of users that don't need them. If you still use them, simply copy the overlay source file(s) into your application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Overlays must be Children of the Map")," - Overlays ",(0,r.kt)("strong",{parentName:"li"},"must")," now be rendered as children of the main ",(0,r.kt)("inlineCode",{parentName:"li"},"react-map-gl")," component to automatically sync with the map viewport.")),(0,r.kt)("h3",{id:"fitbounds-utility-function"},(0,r.kt)("inlineCode",{parentName:"h3"},"fitBounds")," utility function"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fitBounds")," utility has been moved to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uber-web/math.gl"},"math.gl")," library. The function can now be called as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import WebMercatorViewport from 'viewport-mercator-project';\nconst viewport = new WebMercatorViewport({width: 600, height: 400});\nconst bound = viewport.fitBounds(\n  [[-73.9876, 40.7661], [-72.9876, 41.7661]],\n  {padding: 20, offset: [0, -40]}\n);\n// => bounds: instance of WebMercatorViewport\n// {longitude: -73.48760000000007, latitude: 41.268014439447484, zoom: 7.209231188444142}\n")),(0,r.kt)("h3",{id:"deprecations"},"Deprecations"),(0,r.kt)("p",null,"We have started to deprecate a few React props. In all the cases below, the old ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," will still work (you'll get a warning in the console), but they will likely be removed in the next major version of react-map-gl so you should start using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," as soon as possible."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"New Prop"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onChangeViewport(<viewport>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onViewportChange(<viewport>)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onHoverFeatures(<features>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onHover(<event>)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onClickFeatures(<features>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onClick(<event>)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perspectiveEnabled [default: false]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dragRotate [default: true]"))))),(0,r.kt)("h2",{id:"upgrading-to-v2"},"Upgrading to v2"),(0,r.kt)("p",null,"v2 is API compatible with v1, however if you are still using ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," of react-map-gl, make sure that you first upgrade:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," version to ",(0,r.kt)("inlineCode",{parentName:"li"},"v4")," or higher"),(0,r.kt)("li",{parentName:"ul"},"Your ",(0,r.kt)("inlineCode",{parentName:"li"},"react")," version to ",(0,r.kt)("inlineCode",{parentName:"li"},"15.4")," or higher.")),(0,r.kt)("p",null,"Background: ",(0,r.kt)("inlineCode",{parentName:"p"},"mapbox-gl")," 0.31.0 introduced a hard dependency on Node >= v4."),(0,r.kt)("h2",{id:"upgrading-to-v1"},"Upgrading to v1"),(0,r.kt)("p",null,"(Upgrading from 0.6.x)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Importing Overlays")," - The map overlay components (",(0,r.kt)("inlineCode",{parentName:"li"},"HTMLOverlay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CanvasOverlay"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SVGOverlay")," etc) are now named exports. They previously had to be imported via their relative source paths:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// v1.0\nimport MapGL, {SVGOverlay} from 'react-map-gl';\n\n// v0.6\nimport MapGL from 'react-map-gl';\nimport SVGOverlay from 'react-map-gl/src/api-reference/svg-overlay';.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Map State")," - The map state reported by ",(0,r.kt)("inlineCode",{parentName:"li"},"onViewportChanged")," will now contain additional state fields (tracking not only ",(0,r.kt)("inlineCode",{parentName:"li"},"pitch")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bearing")," needed for perspective mode, but also transient information about how the projection is being changed by the user).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This information must be passed back to the react-map-gl component in the next render."),(0,r.kt)("li",{parentName:"ul"},"To simplify and future proof applications, it is recommended to simply save the entire ",(0,r.kt)("inlineCode",{parentName:"li"},"mapState")," in your app store whenever it changes and then pass it back to the component rather than trying to keep track of individual fields (like ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"latitude")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"zoom"),").")))))}k.isMDXComponent=!0}}]);