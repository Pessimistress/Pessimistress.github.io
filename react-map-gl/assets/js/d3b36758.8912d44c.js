"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[6671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=p,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:p,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(7462),p=n(3366),r=(n(7294),n(3905)),a=["components"],l={},i="Popup",c={unversionedId:"api-reference/popup",id:"api-reference/popup",title:"Popup",description:"Properties",source:"@site/../docs/api-reference/popup.md",sourceDirName:"api-reference",slug:"/api-reference/popup",permalink:"/react-map-gl/docs/api-reference/popup",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/popup.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"NavigationControl",permalink:"/react-map-gl/docs/api-reference/navigation-control"},next:{title:"ScaleControl",permalink:"/react-map-gl/docs/api-reference/scale-control"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Render options",id:"render-options",level:3},{value:"<code>anchor</code>: &#39;center&#39; | &#39;left&#39; | &#39;right&#39; | &#39;top&#39; | &#39;bottom&#39; | &#39;top-left&#39; | &#39;top-right&#39; | &#39;bottom-left&#39; | &#39;bottom-right&#39; | undefined",id:"anchor",level:4},{value:"<code>className</code>: string",id:"classname",level:4},{value:"<code>closeButton</code>: boolean",id:"closebutton",level:4},{value:"<code>closeOnClick</code>: boolean",id:"closeonclick",level:4},{value:"<code>closeOnMove</code>: boolean",id:"closeonmove",level:4},{value:"<code>focusAfterOpen</code>: boolean",id:"focusafteropen",level:4},{value:"<code>offset</code>: number | PointLike | Record&lt;string, PointLike&gt;",id:"offset",level:4},{value:"<code>maxWidth</code>: string",id:"maxwidth",level:4},{value:"<code>style</code>: CSSProperties",id:"style",level:4},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>onOpen</code>: (evt: PopupEvent) =&gt; void",id:"onopen",level:4},{value:"<code>onClose</code>: (evt: PopupEvent) =&gt; void",id:"onclose",level:4},{value:"Source",id:"source",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,p.Z)(e,a);return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"popup"},"Popup"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"React component that wraps ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/api/markers/#popup"},"Popup"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport Map, {Popup} from 'react-map-gl';\n\nfunction App() {\n  const [showPopup, setShowPopup] = React.useState(true);\n\n  return <Map\n    mapLib={import('mapbox-gl')}\n    initialViewState={{\n      longitude: -100,\n      latitude: 40,\n      zoom: 3.5\n    }}\n    mapStyle=\"mapbox://styles/mapbox/streets-v9\"\n  >\n    {showPopup && (\n      <Popup longitude={-100} latitude={40}\n        anchor=\"bottom\"\n        onClose={() => setShowPopup(false)}>\n        You are here\n      </Popup>)}\n  </Map>;\n}\n")),(0,r.kt)("h3",{id:"render-options"},"Render options"),(0,r.kt)("h4",{id:"anchor"},(0,r.kt)("inlineCode",{parentName:"h4"},"anchor"),": 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined"),(0,r.kt)("p",null,"A string indicating the part of the popup that should be positioned closest to the coordinate, set via ",(0,r.kt)("inlineCode",{parentName:"p"},"longitude")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"latitude"),".\nIf unset, the anchor will be dynamically set to ensure the popup falls within the map container with a preference for ",(0,r.kt)("inlineCode",{parentName:"p"},"'bottom'"),"."),(0,r.kt)("h4",{id:"classname"},(0,r.kt)("inlineCode",{parentName:"h4"},"className"),": string"),(0,r.kt)("p",null,"Space-separated CSS class names to add to popup container."),(0,r.kt)("h4",{id:"closebutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"closeButton"),": boolean"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", a close button will appear in the top right corner of the popup."),(0,r.kt)("h4",{id:"closeonclick"},(0,r.kt)("inlineCode",{parentName:"h4"},"closeOnClick"),": boolean"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the popup will close when the map is clicked."),(0,r.kt)("h4",{id:"closeonmove"},(0,r.kt)("inlineCode",{parentName:"h4"},"closeOnMove"),": boolean"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the popup will closed when the map moves."),(0,r.kt)("h4",{id:"focusafteropen"},(0,r.kt)("inlineCode",{parentName:"h4"},"focusAfterOpen"),": boolean"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the popup will try to focus the first focusable element inside the popup."),(0,r.kt)("h4",{id:"offset"},(0,r.kt)("inlineCode",{parentName:"h4"},"offset"),": number | ",(0,r.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#pointlike"},"PointLike")," | Record\\<string, ",(0,r.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#pointlike"},"PointLike"),">"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("p",null,"A pixel offset applied to the popup's location specified as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a single number specifying a distance from the popup's location"),(0,r.kt)("li",{parentName:"ul"},"a PointLike specifying a constant offset"),(0,r.kt)("li",{parentName:"ul"},"an object of Points specifing an offset for each anchor position.")),(0,r.kt)("p",null,"Negative offsets indicate left and up."),(0,r.kt)("h4",{id:"maxwidth"},(0,r.kt)("inlineCode",{parentName:"h4"},"maxWidth"),": string"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"240px")),(0,r.kt)("p",null,"A string that sets the CSS property of the popup's maximum width."),(0,r.kt)("h4",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h4"},"style"),": CSSProperties"),(0,r.kt)("p",null,"CSS style override that applies to the popup's container."),(0,r.kt)("h3",{id:"callbacks"},"Callbacks"),(0,r.kt)("h4",{id:"onopen"},(0,r.kt)("inlineCode",{parentName:"h4"},"onOpen"),": (evt: ",(0,r.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#popupevent"},"PopupEvent"),") => void"),(0,r.kt)("p",null,"Called when the popup is opened."),(0,r.kt)("h4",{id:"onclose"},(0,r.kt)("inlineCode",{parentName:"h4"},"onClose"),": (evt: ",(0,r.kt)("a",{parentName:"h4",href:"/react-map-gl/docs/api-reference/types#popupevent"},"PopupEvent"),") => void"),(0,r.kt)("p",null,"Called when the popup is closed by the user clicking on the close button or outside (if ",(0,r.kt)("inlineCode",{parentName:"p"},"closeOnClick: true"),")."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/tree/7.0-release/src/components/popup.ts"},"popup.ts")))}f.isMDXComponent=!0}}]);