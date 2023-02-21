"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||k[u]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={},o="Adding Interactivity",r={unversionedId:"developer-guide/interactivity",id:"developer-guide/interactivity",title:"Adding Interactivity",description:"Controlling the Camera",source:"@site/../docs/developer-guide/interactivity.md",sourceDirName:"developer-guide",slug:"/developer-guide/interactivity",permalink:"/docs/developer-guide/interactivity",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/interactivity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Layers",permalink:"/docs/developer-guide/using-layers"},next:{title:"Coordinate Systems",permalink:"/docs/developer-guide/coordinate-systems"}},c={},p=[{value:"Controlling the Camera",id:"controlling-the-camera",level:2},{value:"Reset Camera Position",id:"reset-camera-position",level:3},{value:"Add Constraints to View State",id:"add-constraints-to-view-state",level:3},{value:"Externally Manage View State",id:"externally-manage-view-state",level:3},{value:"Advanced View Controls",id:"advanced-view-controls",level:3},{value:"Picking",id:"picking",level:2},{value:"What can be Picked?",id:"what-can-be-picked",level:3},{value:"Enabling Picking",id:"enabling-picking",level:3},{value:"The Picking Info Object",id:"the-picking-info-object",level:3},{value:"Example: Display a Tooltip for Hovered Object",id:"example-display-a-tooltip-for-hovered-object",level:3},{value:"Using the Built-In Tooltip",id:"using-the-built-in-tooltip",level:4},{value:"Using React",id:"using-react",level:4},{value:"Calling the Picking Engine Directly",id:"calling-the-picking-engine-directly",level:3},{value:"Under The Hood",id:"under-the-hood",level:3},{value:"Built-in Events",id:"built-in-events",level:2},{value:"Behavior of Built-in Event Handling",id:"behavior-of-built-in-event-handling",level:3}],s={toc:p},d="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-interactivity"},"Adding Interactivity"),(0,i.kt)("h2",{id:"controlling-the-camera"},"Controlling the Camera"),(0,i.kt)("p",null,"Out of the box, deck.gl offers viewport controllers that map keyboard, mouse or touch input to camera state change. The easiest way to enable pan/zoom/rotate of the visualization is to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller")," prop on ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeckGL>")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," along with an ",(0,i.kt)("inlineCode",{parentName:"p"},"initialViewState")," object that defines the initial camera settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck} from '@deck.gl/core';\n\nnew Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 12,\n    pitch: 0,\n    bearing: 0\n  },\n  controller: true,\n  layers: []\n});\n")),(0,i.kt)("p",null,"You can also selectively enable/disable certain controller features:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  controller: {doubleClickZoom: false, touchRotate: true}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/controller"},"Controller")," for all options."),(0,i.kt)("h3",{id:"reset-camera-position"},"Reset Camera Position"),(0,i.kt)("p",null,"An application can reset the camera state by supplying a new ",(0,i.kt)("inlineCode",{parentName:"p"},"initialViewState")," object at any time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck} from '@deck.gl/core';\n\nconst deckgl = new Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 12\n  },\n  controller: true,\n  layers: []\n});\n\nbutton.onclick = gotoNYC;\n\n// Jump to New York City\nfunction goToNYC() {\n  deckgl.setProps({\n    initialViewState: {\n      longitude: -70.4,\n      latitude: 40.7,\n      zoom: 12\n    }\n  })\n}\n")),(0,i.kt)("p",null,"To add a transition animation, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer-guide/view-state-transitions"},"view state transitions"),"."),(0,i.kt)("h3",{id:"add-constraints-to-view-state"},"Add Constraints to View State"),(0,i.kt)("p",null,"An application can optionally supply the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#onviewstatechange"},"onViewStateChange")," callback and manipulate the view state before it is used. The following example constrains the map in a bounding box:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck} from '@deck.gl/core';\n\nconst LONGITUDE_RANGE = [-123, -122];\nconst LATITUDE_RANGE = [37, 38];\n\nnew Deck({\n  initialViewState: {\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 12\n  },\n  controller: true,\n  onViewStateChange: ({viewState}) => {\n    viewState.longitude = Math.min(LONGITUDE_RANGE[1], Math.max(LONGITUDE_RANGE[0], viewState.longitude));\n    viewState.latitude = Math.min(LATITUDE_RANGE[1], Math.max(LATITUDE_RANGE[0], viewState.latitude));\n    return viewState;\n  }\n});\n")),(0,i.kt)("h3",{id:"externally-manage-view-state"},"Externally Manage View State"),(0,i.kt)("p",null,"For more flexibility you can maintain the view state yourself and pass it in to deck.gl via the ",(0,i.kt)("inlineCode",{parentName:"p"},"viewState")," parameter. This essentially makes ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"<DeckGL>")," a stateless component, and allows you to share the view state between multiple components, e.g. via a Redux store."),(0,i.kt)("p",null,"Note: Do not combine ",(0,i.kt)("inlineCode",{parentName:"p"},"initialViewState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"viewState")," props. ",(0,i.kt)("inlineCode",{parentName:"p"},"viewState")," will always overwrite any internal state."),(0,i.kt)("p",null,"The following example demonstrates how to do this with React:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React, {useState} from 'react';\nimport DeckGL from '@deck.gl/react';\n\nfunction App() {\n  const [viewState, setViewState] = useState({\n    longitude: -122.4,\n    latitude: 37.8,\n    zoom: 12\n  });\n\n  const layers = [\n    //...\n  ];\n  return (\n    <DeckGL\n        viewState={viewState}\n        onViewStateChange={e => setViewState(e.viewState)}\n        controller={true}\n        layers={layers}>\n    </DeckGL>\n  );\n}\n")),(0,i.kt)("h3",{id:"advanced-view-controls"},"Advanced View Controls"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alternative views such as OrbitView, FirstPersonView, and using multiple views such as VR, minimap: ",(0,i.kt)("a",{parentName:"li",href:"/docs/developer-guide/views"},"Views and Projections")),(0,i.kt)("li",{parentName:"ul"},"Implement a custom controller: ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/controller"},"Controller"))),(0,i.kt)("h2",{id:"picking"},"Picking"),(0,i.kt)("p",null,"deck.gl includes a powerful picking engine that enables the application to precisely determine what object and layer is rendered on a certain pixel on the screen. This picking engine can either be called directly by an application (which is then typically implementing its own event handling), or it can be called automatically by the basic built-in event handling in deck.gl"),(0,i.kt)("h3",{id:"what-can-be-picked"},"What can be Picked?"),(0,i.kt)("p",null,'The "picking engine" identifies which object in which layer is at the given coordinates. While usually intuitive, what constitutes a pickable "object" is defined by each layer. Typically, it corresponds to one of the data entries that is passed in via ',(0,i.kt)("inlineCode",{parentName:"p"},"prop.data"),". For example, in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/layers/scatterplot-layer"},"Scatterplot Layer"),", an object is an element in the ",(0,i.kt)("inlineCode",{parentName:"p"},"props.data")," array that is used to render one circle. In ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/layers/geojson-layer"},"GeoJson Layer"),", an object is a GeoJSON feature in the ",(0,i.kt)("inlineCode",{parentName:"p"},"props.data")," feature collection that is used to render one point, path or polygon."),(0,i.kt)("h3",{id:"enabling-picking"},"Enabling Picking"),(0,i.kt)("p",null,"Picking can be enabled or disabled on a layer-by-layer basis. To enable picking on a layer, set its ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/layer#pickable"},(0,i.kt)("inlineCode",{parentName:"a"},"pickable"))," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,i.kt)("h3",{id:"the-picking-info-object"},"The Picking Info Object"),(0,i.kt)("p",null,'The picking engine returns "picking info" objects which contains a variety of fields describing what layer and object was picked.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"layer")),(0,i.kt)("td",{parentName:"tr",align:null},"The layer that the picked object belongs to. Only layers with the ",(0,i.kt)("inlineCode",{parentName:"td"},"pickable")," prop set to true can be picked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the object in the layer that was picked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"The object that was picked. This is typically an entry in the layer's ",(0,i.kt)("inlineCode",{parentName:"td"},"props.data")," array, but can vary from layer to layer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"x")),(0,i.kt)("td",{parentName:"tr",align:null},"Mouse position x relative to the viewport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"y")),(0,i.kt)("td",{parentName:"tr",align:null},"Mouse position y relative to the viewport.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"coordinate")),(0,i.kt)("td",{parentName:"tr",align:null},"Mouse position in geospatial coordinates. Only applies if ",(0,i.kt)("inlineCode",{parentName:"td"},"layer.props.coordinateSystem")," is a geospatial mode such as ",(0,i.kt)("inlineCode",{parentName:"td"},"COORDINATE_SYSTEM.LNGLAT"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"viewport")),(0,i.kt)("td",{parentName:"tr",align:null},"The viewport that the picked object belongs to.")))),(0,i.kt)("p",null,"Remarks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specific deck.gl Layers may add additional fields to the picking ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," object. Check the documentation of each layer."),(0,i.kt)("li",{parentName:"ul"},"Limitation when using multiple views: ",(0,i.kt)("inlineCode",{parentName:"li"},"viewport")," could potentially be misidentified if two views that contain the picked layer also overlap with each other and do not clear the background.")),(0,i.kt)("h3",{id:"example-display-a-tooltip-for-hovered-object"},"Example: Display a Tooltip for Hovered Object"),(0,i.kt)("h4",{id:"using-the-built-in-tooltip"},"Using the Built-In Tooltip"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," automatically renders a tooltip if the ",(0,i.kt)("inlineCode",{parentName:"p"},"getTooltip")," callback is supplied:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Deck} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst deck = new Deck({\n  canvas: 'deck-canvas',\n  initialViewState: {longitude: -122.45, latitude: 37.78, zoom: 12},\n  controller: true,\n  layers: [\n    new ScatterplotLayer({\n      data: [\n        {position: [-122.45, 37.78], message: 'Hover over me'}\n      ],\n      getPosition: d => d.position,\n      getRadius: 1000,\n      getFillColor: [255, 255, 0],\n      // Enable picking\n      pickable: true\n    })\n  ],\n  getTooltip: ({object}) => object && object.message\n});\n")),(0,i.kt)("p",null,"It receives a picking info object and returns the content of the tooltip. To custom the tooltip further, return an object instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  getTooltip: ({object}) => object && {\n    html: `<h2>${object.name}</h2><div>${object.message}</div>`,\n    style: {\n      backgroundColor: '#f00',\n      fontSize: '0.8em'\n    }\n  }\n")),(0,i.kt)("p",null,"For a range of options, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck#gettooltip"},"getTooltip")," documentation."),(0,i.kt)("h4",{id:"using-react"},"Using React"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React, {useState} from 'react';\nimport {DeckGL, ScatterplotLayer} from 'deck.gl';\n\nconst data = [\n  {position: [-122.45, 37.78], message: 'Hover over me'}\n];\n\nfunction App() {\n  const [hoverInfo, setHoverInfo] = useState;\n\n  const layers = [\n    new ScatterplotLayer({\n      data,\n      getPosition: d => d.position,\n      getRadius: 1000,\n      getFillColor: [255, 255, 0],\n      // Enable picking\n      pickable: true,\n      // Update app state\n      onHover: info => setHoverInfo(info)\n    })\n  ];\n\n  return (\n    <DeckGL initialViewState={{longitude: -122.45, latitude: 27.78, zoom: 12}}\n        controller={true}\n        layers={layers} >\n      {hoverInfo.object && (\n        <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: hoverInfo.x, top: hoverInfo.y}}>\n          { hoverInfo.object.message }\n        </div>\n      )}\n    </DeckGL>\n  );\n}\n")),(0,i.kt)("h3",{id:"calling-the-picking-engine-directly"},"Calling the Picking Engine Directly"),(0,i.kt)("p",null,"The picking engine is exposed through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck"},(0,i.kt)("inlineCode",{parentName:"a"},"Deck.pickObject"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/deck"},(0,i.kt)("inlineCode",{parentName:"a"},"Deck.pickObjects"))," methods. These methods allow you to query what layers and objects within those layers are under a specific point or within a specified rectangle. They return ",(0,i.kt)("inlineCode",{parentName:"p"},"Picking Info")," objects as described below."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pickObject"),' allows an application to define its own event handling. When it comes to how to actually do event handling in a browser, there are many options. In a React application, perhaps the simplest is to just use React\'s "synthetic" event handling together with ',(0,i.kt)("inlineCode",{parentName:"p"},"pickObject"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React, {useRef, useCallback} from 'react';\n\nfunction App() {\n  const deckRef = useRef(null);\n\n  const onClick = useCallback(event => {\n    const pickInfo = deckRef.current.pickObject({\n      x: event.clientX,\n      y: event.clientY,\n      radius: 1\n    });\n    console.log(pickInfo.coordinate);\n  }, [])\n\n  return (\n    <div onClick={onClick}>\n      <DeckGL ref={deckRef} ... />\n    </div>\n  );\n}\n")),(0,i.kt)("p",null,"Also note that by directly calling ",(0,i.kt)("inlineCode",{parentName:"p"},"queryObject"),", integrating deck.gl into an existing application often becomes easier since you don't have to change the application's existing approach to event handling."),(0,i.kt)("h3",{id:"under-the-hood"},"Under The Hood"),(0,i.kt)("p",null,"If you are using the core layers, all has been taken care of."),(0,i.kt)("p",null,"If you are implementing a custom layer, read more about\n",(0,i.kt)("a",{parentName:"p",href:"/docs/developer-guide/custom-layers/picking"},"how picking is implemented"),"."),(0,i.kt)("h2",{id:"built-in-events"},"Built-in Events"),(0,i.kt)("p",null,"For applications that have basic event handling needs, deck.gl has built-in support for handling selected pointer events. When the application registers callbacks, deck.gl automatically tracks these events, runs the picking engine and calls application callbacks with a single parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," which contains the resulting picking info object."),(0,i.kt)("p",null,"The following event handlers are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onHover")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onClick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDragStart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDrag")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDragEnd"))),(0,i.kt)("p",null,"A event handler function is called with two parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," that contains the object being interacted with, and ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," that contains the pointer event."),(0,i.kt)("p",null,"There are two ways to subscribe to the built-in picking event handling:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specify callbacks for each pickable layer by passing ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/layer#interaction-properties"},"event handler props"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new ScatterplotLayer({\n    ...\n    pickable: true,\n    onHover: (info, event) => console.log('Hovered:', info, event),\n    onClick: (info, event) => console.log('Clicked:', info, event)\n});\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specify callbacks for all pickable layers by setting ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/react/deckgl#event-callbacks"},"event handler props")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"DeckGL")," canvas:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<DeckGL\n    ...\n    onHover={this._onHover}\n    onClick={this._onClick}\n/>\n")),(0,i.kt)("h3",{id:"behavior-of-built-in-event-handling"},"Behavior of Built-in Event Handling"),(0,i.kt)("p",null,"Picking events are triggered based on ",(0,i.kt)("em",{parentName:"p"},"pickable objects"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"click")," event is triggered every time the pointer clicked on an object in a pickable layer."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"hover")," event is triggered every time the hovered object of a pickable layer changes.")),(0,i.kt)("p",null,"When an event is fired, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onHover")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," callback of the affected layer is called first. If the callback returns a truthy value, the event is marked as handled. Otherwise, the event will bubble up to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeckGL")," canvas and be visible to its ",(0,i.kt)("inlineCode",{parentName:"p"},"onHover")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," callbacks."))}k.isMDXComponent=!0}}]);