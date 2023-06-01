"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[5109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||n;return r?a.createElement(f,l(l({ref:t},s),{},{components:r})):a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),o=r(6010);const n={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(n.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>C});var a=r(7462),o=r(7294),n=r(6010),l=r(2466),i=r(6550),c=r(1980),u=r(7392),s=r(12);function p(e){return function(e){var t,r;return null!=(t=null==(r=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,r=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,n=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,c._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(n.location.search);t.set(l,e),n.replace(Object.assign({},n.location,{search:t.toString()}))}}),[l,n])]}function v(e){var t,r,a,n,l=e.defaultValue,i=e.queryString,c=void 0!==i&&i,u=e.groupId,p=m(e),v=(0,o.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:p})})),b=v[0],h=v[1],g=f({queryString:c,groupId:u}),k=g[0],y=g[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,s.Nk)(t),a=r[0],n=r[1],[a,(0,o.useCallback)((function(e){t&&n.set(e)}),[t,n])]),N=C[0],E=C[1],w=function(){var e=null!=k?k:N;return d({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){w&&h(w)}),[w]),{selectedValue:b,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),y(e),E(e)}),[y,E,p]),tabValues:p}}var b=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,i=e.selectedValue,c=e.selectValue,u=e.tabValues,s=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=s.indexOf(t),a=u[r].value;a!==i&&(p(t),c(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,o=s.indexOf(e.currentTarget)+1;r=null!=(a=s[o])?a:s[0];break;case"ArrowLeft":var n,l=s.indexOf(e.currentTarget)-1;r=null!=(n=s[l])?n:s[s.length-1]}null==(t=r)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:m},l,{className:(0,n.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function k(e){var t=e.lazy,r=e.children,a=e.selectedValue,n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=n.find((function(e){return e.props.value===a}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=v(e);return o.createElement("div",{className:(0,n.Z)("tabs-container",h.tabList)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function C(e){var t=(0,b.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},4696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),l=r(4866),i=r(5162),c=["components"],u={},s="GeolocateControl",p={unversionedId:"api-reference/geolocate-control",id:"api-reference/geolocate-control",title:"GeolocateControl",description:"React component that wraps the base library's GeolocateControl class (Mapbox | Maplibre).",source:"@site/../docs/api-reference/geolocate-control.md",sourceDirName:"api-reference",slug:"/api-reference/geolocate-control",permalink:"/react-map-gl/docs/api-reference/geolocate-control",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/geolocate-control.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FullscreenControl",permalink:"/react-map-gl/docs/api-reference/fullscreen-control"},next:{title:"Layer",permalink:"/react-map-gl/docs/api-reference/layer"}},m={},d=[{value:"Reference",id:"reference",level:2},{value:"Properties",id:"properties",level:2},{value:"Reactive Properties",id:"reactive-properties",level:3},{value:"<code>style</code>: CSSProperties",id:"style",level:4},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>onGeolocate</code>: (evt: GeolocateResultEvent) =&gt; void",id:"ongeolocate",level:4},{value:"<code>onError</code>: (evt: GeolocateErrorEvent) =&gt; void",id:"onerror",level:4},{value:"<code>onOutOfMaxBounds</code>: (evt: GeolocateResultEvent) =&gt; void",id:"onoutofmaxbounds",level:4},{value:"<code>onTrackUserLocationStart</code>: (evt: GeolocateEvent) =&gt; void",id:"ontrackuserlocationstart",level:4},{value:"<code>onTrackUserLocationEnd</code>: (evt: GeolocateEvent) =&gt; void",id:"ontrackuserlocationend",level:4},{value:"Other Properties",id:"other-properties",level:3},{value:"<code>position</code>: &#39;top-right&#39; | &#39;top-left&#39; | &#39;bottom-right&#39; | &#39;bottom-left&#39;",id:"position",level:4},{value:"Source",id:"source",level:2}],f={toc:d},v="wrapper";function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,n.kt)(v,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"geolocatecontrol"},"GeolocateControl"),(0,n.kt)("p",null,"React component that wraps the base library's ",(0,n.kt)("inlineCode",{parentName:"p"},"GeolocateControl")," class (",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol"},"Mapbox")," | ",(0,n.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js-docs/api/markers/#geolocatecontrol"},"Maplibre"),")."),(0,n.kt)(l.Z,{groupId:"map-library",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"mapbox",label:"Mapbox",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Map, {GeolocateControl} from 'react-map-gl';\n\nfunction App() {\n  return <Map\n    mapboxAccessToken=\"<Mapbox access token>\"\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle=\"mapbox://styles/mapbox/streets-v9\"\n  >\n    <GeolocateControl />\n  </Map>;\n}\n"))),(0,n.kt)(i.Z,{value:"maplibre",label:"Maplibre",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Map, {GeolocateControl} from 'react-map-gl/maplibre';\n\nfunction App() {\n  return <Map\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle=\"https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key\"\n  >\n    <GeolocateControl />\n  </Map>;\n}\n")))),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"The underlying native ",(0,n.kt)("inlineCode",{parentName:"p"},"GeolocateControl")," instance is accessible via a ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html#creating-refs"},"React ref")," hook.\nYou may use it to call any imperative methods:"),(0,n.kt)(l.Z,{groupId:"map-library",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"mapbox",label:"Mapbox",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport {useRef, useEffect} from 'react';\nimport Map, {GeolocateControl} from 'react-map-gl';\nimport type mapboxgl from 'mapbox-gl';\n\nfunction App() {\n  const geoControlRef = useRef<mapboxgl.GeolocateControl>();\n\n  useEffect(() => {\n    // Activate as soon as the control is loaded\n    geoControlRef.current?.trigger();\n  }, [geoControlRef.current]);\n\n  return <Map>\n    <GeolocateControl ref={geoControlRef} />\n  </Map>;\n}\n"))),(0,n.kt)(i.Z,{value:"maplibre",label:"Maplibre",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport {useRef, useEffect} from 'react';\nimport Map, {GeolocateControl} from 'react-map-gl/maplibre';\nimport type maplibregl from 'maplibre-gl';\n\nfunction App() {\n  const geoControlRef = useRef<maplibregl.GeolocateControl>();\n\n  useEffect(() => {\n    // Activate as soon as the control is loaded\n    geoControlRef.current?.trigger();\n  }, [geoControlRef.current]);\n\n  return <Map>\n    <GeolocateControl ref={geoControlRef} />\n  </Map>;\n}\n")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"reactive-properties"},"Reactive Properties"),(0,n.kt)("h4",{id:"style"},(0,n.kt)("inlineCode",{parentName:"h4"},"style"),": CSSProperties"),(0,n.kt)("p",null,"CSS style override that applies to the control's container."),(0,n.kt)("h3",{id:"callbacks"},"Callbacks"),(0,n.kt)("h4",{id:"ongeolocate"},(0,n.kt)("inlineCode",{parentName:"h4"},"onGeolocate"),": (evt: ",(0,n.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#geolocateresultevent"},"GeolocateResultEvent"),") => void"),(0,n.kt)("p",null,"Called on each Geolocation API position update that returned as success."),(0,n.kt)("h4",{id:"onerror"},(0,n.kt)("inlineCode",{parentName:"h4"},"onError"),": (evt: ",(0,n.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#geolocateerrorevent"},"GeolocateErrorEvent"),") => void"),(0,n.kt)("p",null,"Called on each Geolocation API position update that returned as an error."),(0,n.kt)("h4",{id:"onoutofmaxbounds"},(0,n.kt)("inlineCode",{parentName:"h4"},"onOutOfMaxBounds"),": (evt: ",(0,n.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#geolocateresultevent"},"GeolocateResultEvent"),") => void"),(0,n.kt)("p",null,"Called on each Geolocation API position update that returned as success but user position is out of map ",(0,n.kt)("inlineCode",{parentName:"p"},"maxBounds"),"."),(0,n.kt)("h4",{id:"ontrackuserlocationstart"},(0,n.kt)("inlineCode",{parentName:"h4"},"onTrackUserLocationStart"),": (evt: ",(0,n.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#geolocateevent"},"GeolocateEvent"),") => void"),(0,n.kt)("p",null,"Called when the GeolocateControl changes to the active lock state."),(0,n.kt)("h4",{id:"ontrackuserlocationend"},(0,n.kt)("inlineCode",{parentName:"h4"},"onTrackUserLocationEnd"),": (evt: ",(0,n.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#geolocateevent"},"GeolocateEvent"),") => void"),(0,n.kt)("p",null,"Called when the GeolocateControl changes to the background state."),(0,n.kt)("h3",{id:"other-properties"},"Other Properties"),(0,n.kt)("p",null,"The properties in this section are not reactive. They are only used when the component first mounts."),(0,n.kt)("p",null,"Any options supported by the ",(0,n.kt)("inlineCode",{parentName:"p"},"GeolocateControl")," class (",(0,n.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol"},"Mapbox")," | ",(0,n.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js-docs/api/markers/#geolocatecontrol"},"Maplibre"),"), such as"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"positionOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fitBoundsOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trackUserLocation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"showAccuracyCircle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"showUserLocation"))),(0,n.kt)("p",null,"Plus the following:"),(0,n.kt)("h4",{id:"position"},(0,n.kt)("inlineCode",{parentName:"h4"},"position"),": 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'"),(0,n.kt)("p",null,"Default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'bottom-right'")),(0,n.kt)("p",null,"Placement of the control relative to the map."),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/src/components/geolocate-control.ts"},"geolocate-control.ts")))}b.isMDXComponent=!0}}]);