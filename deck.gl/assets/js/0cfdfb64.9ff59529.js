"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},87184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="DeckGL (React Component)",l={unversionedId:"api-reference/react/deckgl",id:"api-reference/react/deckgl",title:"DeckGL (React Component)",description:"DeckGL is the main interface to deck.gl for React applications. DeckGL is a React component that takes a list of deck.gl layer instances and a view state, and renders those layers on a transparent canvas that can be used as an overlay over other components like maps.",source:"@site/../docs/api-reference/react/deckgl.md",sourceDirName:"api-reference/react",slug:"/api-reference/react/deckgl",permalink:"/docs/api-reference/react/deckgl",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/react/deckgl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MapboxOverlay",permalink:"/docs/api-reference/mapbox/mapbox-overlay"},next:{title:"@deck.gl/test-utils",permalink:"/docs/api-reference/test-utils/overview"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"React Context",id:"react-context",level:3},{value:"<code>ContextProvider</code> (React.Component, optional)",id:"contextprovider",level:5},{value:"Children",id:"children",level:3},{value:"JSX layers",id:"jsx-layers",level:4},{value:"JSX views",id:"jsx-views",level:4},{value:"Position Children in Views",id:"position-children-in-views",level:4},{value:"Render callbacks",id:"render-callbacks",level:4},{value:"Methods",id:"methods",level:2},{value:"Source",id:"source",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deckgl-react-component"},"DeckGL (React Component)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," is the main interface to deck.gl for React applications. ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," is a React component that takes a list of deck.gl layer instances and a view state, and renders those layers on a transparent canvas that can be used as an overlay over other components like maps."),(0,i.kt)("p",null,"Make sure to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/using-with-react"},"Using deck.gl with React")," article."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," class is a React wrapper of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck"},"Deck")," JavaScript class which exposes essentially the same props. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," class should not be used directly in React applications."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Basic usage\nimport DeckGL from '@deck.gl/react';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst App = (data) => (\n  <DeckGL\n    longitude={-122.45}\n    latitude={37.78}\n    zoom={12}\n    layers={[new ScatterplotLayer({data})]} />\n);\n")),(0,i.kt)("p",null,"Like any React component, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," can accept child components. Child components are often maps (e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"StaticMap")," component from react-map-gl), but can be any React components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import DeckGL from '@deck.gl/react';\nimport {StaticMap} from 'react-map-gl';\n\nconst App = (data) => (\n  <DeckGL\n    initialViewState={{longitude: -122.45, latitude: 37.78, zoom: 12}}\n    controller={true}\n    layers={[new ScatterplotLayer({data})]}\n  >\n    <StaticMap\n      mapStyle=\"mapbox://styles/mapbox/dark-v9\"\n      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />\n  </DeckGL>\n);\n\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," accepts all ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#properties"},"Deck")," properties, with these additional semantics:"),(0,i.kt)("h3",{id:"react-context"},"React Context"),(0,i.kt)("h5",{id:"contextprovider"},(0,i.kt)("inlineCode",{parentName:"h5"},"ContextProvider")," (React.Component, optional)"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#contextprovider"},"Context.Provider")," component. If supplied, will be rendered as the ancestor to all children. The passed through context contains the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewport")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/viewport"},"Viewport"),") - the current viewport"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"container")," (DOMElement) - the DOM element containing the deck canvas"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventManager")," (",(0,i.kt)("a",{parentName:"li",href:"https://uber-web.github.io/mjolnir.js/docs/api-reference/event-manager"},"EventManager"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"/// Example using react-map-gl v6 controls with deck.gl\n/// To use react-map-gl v7, see https://deck.gl/docs/api-reference/mapbox/mapbox-overlay\nimport DeckGL from '@deck.gl/react';\nimport {_MapContext as MapContext, NavigationControl} from 'react-map-gl';\n\n<DeckGL ... ContextProvider={MapContext.Provider}>\n  <div style={NAVIGATION_CONTROL_STYLES}>\n    <NavigationControl />\n  </div>\n</DeckGL>\n")),(0,i.kt)("h3",{id:"children"},"Children"),(0,i.kt)("p",null,"The following semantics of the standard React ",(0,i.kt)("inlineCode",{parentName:"p"},"children")," property are considered experimental."),(0,i.kt)("h4",{id:"jsx-layers"},"JSX layers"),(0,i.kt)("p",null,"It is possible to use JSX syntax to create deck.gl layers as React children of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," React components, instead of providing them as ES6 class instances to the ",(0,i.kt)("inlineCode",{parentName:"p"},"layers")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'  <DeckGL {...viewState}>\n    <LineLayer id="line-layer" data={data} />\n  <DeckGL />\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Caveat: The JSX layer syntax is limited in that it only works when the layers are direct children of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," component. deck.gl layers are not true React components and cannot be rendered independently by React, and the JSX support depends on deck.gl intercepting the JSX generated child elements before React tries to render them.")),(0,i.kt)("h4",{id:"jsx-views"},"JSX views"),(0,i.kt)("p",null,"It is possible to use JSX syntax to create deck.gl views as React children of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," React components, instead of providing them as ES6 class instances to the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'  <DeckGL initialViewState={...viewState} layers={layers} >\n    <MapView id="map" width="50%" controller={true} >\n      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />\n    </MapView>\n    <FirstPersonView width="50%" x="50%" fovy={50} />\n  <DeckGL />\n')),(0,i.kt)("p",null,"If a certain view id is used in both JSX views and the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," prop, the view instance in the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," prop has priority."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  const views = [\n    new MapView({id: 'map', width: '50%', controller: true}),\n    new FirstPersonView({width: '50%', x: '50%', fovy: 50})\n  ];\n\n  <DeckGL initialViewState={...viewState} layers={layers} views={views} >\n    <View id=\"map\">\n      <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />\n    </View>\n  <DeckGL />\n")),(0,i.kt)("h4",{id:"position-children-in-views"},"Position Children in Views"),(0,i.kt)("p",null,"To make it easy to use React components in combination with deck.gl views (e.g. to place a base map under a view, or add a label on top of a view), deck.gl can make such components automatically adjust as that view is added, removed or resized."),(0,i.kt)("p",null,"Each child element of ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," is positioned inside a view. All children of a view is wrapped in a DOM container that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is offset to be relative to the deck.gl view that it corresponds to."),(0,i.kt)("li",{parentName:"ul"},"is resized to match the extent of the deck.gl view with the corresponding view id."),(0,i.kt)("li",{parentName:"ul"},"is hidden if the view id is missing from ",(0,i.kt)("inlineCode",{parentName:"li"},"DeckGL"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"views")," prop.")),(0,i.kt)("p",null,"The containing view of each element is determined as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the element is a direct child of ",(0,i.kt)("inlineCode",{parentName:"li"},"DeckGL"),", it is positioned inside the default (first) view."),(0,i.kt)("li",{parentName:"ul"},"If the element is nested under a ",(0,i.kt)("inlineCode",{parentName:"li"},"<View id={id}>")," tag, it is positioned inside the view corresponding to the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," prop. ")),(0,i.kt)("h4",{id:"render-callbacks"},"Render callbacks"),(0,i.kt)("p",null,"You may supply a function as a child to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"View")," node (see ",(0,i.kt)("strong",{parentName:"p"},"JSX views"),"). The function will be called to retrieve the React children when the viewport updates."),(0,i.kt)("p",null,"The following arguments are passed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," - the left offset of the current view, in pixels"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," - the top offset of the current view, in pixels"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," - the width of the current view, in pixels"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")," - the height of the current view, in pixels"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewState")," - the view state of the current view"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"viewport")," - the ",(0,i.kt)("inlineCode",{parentName:"li"},"Viewport")," instance of the current view")),(0,i.kt)("p",null,"This is useful when you need to specify custom rendering logic for a child:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"  <DeckGL {...viewState}>\n    {({x, y, width, height, viewState, viewport}) => (\n      <Marker\n        project={viewport.project}\n        longitude={-122.45}\n        latitude={37.8}\n        width={24}\n        height={24} />\n    )}\n  <DeckGL />\n")),(0,i.kt)("p",null,"Additional Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The DeckGL components own ",(0,i.kt)("inlineCode",{parentName:"li"},"canvas")," element is added last to the child list, to sit on top of all the base components, however Z index can be used to override this."),(0,i.kt)("li",{parentName:"ul"},"Child repositioning is done with CSS styling on a wrapper div."),(0,i.kt)("li",{parentName:"ul"},"Children that do not belong to any ",(0,i.kt)("inlineCode",{parentName:"li"},"<View>")," tag and are functions are called with the properties of the default view."),(0,i.kt)("li",{parentName:"ul"},"Children that do not belong to any ",(0,i.kt)("inlineCode",{parentName:"li"},"<View>")," tag and are valid React elements are rendered as is.")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"All ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#methods"},"Deck")," methods are available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," component, but not all of them can be explicitly called. For example, to rerender your component, you can pass updated props to ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," component directly, while you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"setProps")," with new props in ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck"),". "),(0,i.kt)("p",null,"The public methods you can call explicitly list below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pickObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pickMultipleObjects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pickObjects"))),(0,i.kt)("p",null,"We do recommend you to use the pure JavaScript version of deck.gl if you are more comfortable with an imperative programming style (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"deck.setProps()"),")."),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/blob/master/modules/react/src/deckgl.ts"},"modules/react/src/deckgl.ts")))}m.isMDXComponent=!0}}]);