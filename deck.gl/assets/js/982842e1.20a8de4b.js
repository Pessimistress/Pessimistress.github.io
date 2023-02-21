"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="Animations and Transitions",s={unversionedId:"developer-guide/animations-and-transitions",id:"developer-guide/animations-and-transitions",title:"Animations and Transitions",description:"This document was recently added and is still being finalized",source:"@site/../docs/developer-guide/animations-and-transitions.md",sourceDirName:"developer-guide",slug:"/developer-guide/animations-and-transitions",permalink:"/deck.gl/docs/developer-guide/animations-and-transitions",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/animations-and-transitions.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Animation",id:"animation",level:2},{value:"Drawing Constantly vs. When Needed",id:"drawing-constantly-vs-when-needed",level:3},{value:"Property Animation",id:"property-animation",level:3},{value:"Advantages of Property Animation",id:"advantages-of-property-animation",level:3},{value:"Transitions",id:"transitions",level:2},{value:"View State Transitions",id:"view-state-transitions",level:3},{value:"TransitionInterpolators",id:"transitioninterpolators",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animations-and-transitions"},"Animations and Transitions"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document was recently added and is still being finalized")),(0,i.kt)("p",null,"deck.gl provides several ways to implement animation and transitions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Camera Transitions")," - (aka View State Transitions) when changing the view state, deck.gl can move the camera smoothly between the initial and final view state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer Transitions")," - (aka Attribute Transitions)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Property Animation")," -")),(0,i.kt)("h2",{id:"animation"},"Animation"),(0,i.kt)("h3",{id:"drawing-constantly-vs-when-needed"},"Drawing Constantly vs. When Needed"),(0,i.kt)("p",null,"While some 3D applications such as games often keep drawing to screen at a high frame rate, deck.gl avoids this by default. When not animating, deck.gl is optimized to only render to the screen when something changes (a layer's data or props, the viewState etc). This keeps the GPU and CPU load low and minimizes power consumption."),(0,i.kt)("p",null,"However when animating properties, deck.gl needs to update the screen frequently. This does consume more power and can cause fans to spin up etc. However, even when animating deck.gl does not draw to the screen when the application's browser tab is not active."),(0,i.kt)("h3",{id:"property-animation"},"Property Animation"),(0,i.kt)("p",null,'Layer properties are divided into two categories. Accessors (that control "attributes" and only update when data changes or update triggers fire) and non-accessors that update every time the layer is rendered.'),(0,i.kt)("p",null,"Property animation refers to assigning functions as values to non-accessor layer props. The functions will be called every render frame, potentially generating new values every frame at 60 FPS."),(0,i.kt)("h3",{id:"advantages-of-property-animation"},"Advantages of Property Animation"),(0,i.kt)("p",null,'While it is certainly possible to implement deck.gl animation by supplying a "freshly minted" list of layers to the deck.gl component every frame, e.g. using ',(0,i.kt)("inlineCode",{parentName:"p"},"Deck.setProps({layers: [new ...Layer(...), ...]})"),", this approach has a performance penalty as both your application logic and deck.gl's layer matching system must kick into gear each render frame."),(0,i.kt)("p",null,"By setting property animation functions, properties will be evaluated by the underlying render loop system with considerably less overhead, both deck.gl and your application will essentially remain undisturbed as the layer properties are updated inside a tight inner animation loop."),(0,i.kt)("h2",{id:"transitions"},"Transitions"),(0,i.kt)("p",null,"Transitions in deck.gl are short animations that are triggered when deck.gl detects a change of some property. Instead of immediately redrawing based on the new view value, deck.gl draws a number of frames, automatically interpolating the value over time."),(0,i.kt)("h3",{id:"view-state-transitions"},"View State Transitions"),(0,i.kt)("p",null,"View state transitions provide smooth and visually appealing camera transitions when view states change. View state transitions are initiated by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck.viewState")," prop."),(0,i.kt)("p",null,"Following fields of ",(0,i.kt)("inlineCode",{parentName:"p"},"viewState")," can be used to achieve viewport transitions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transitionDuration")," (Number, optional, default: 0) - Transition duration in milliseconds, default value 0, implies no transition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transitionEasing")," (Function, optional, default: ",(0,i.kt)("inlineCode",{parentName:"li"},"t => t"),') - Easing function that can be used to achieve effects like "Ease-In-Cubic", "Ease-Out-Cubic", etc. Default value performs Linear easing. (list of sample easing functions: ',(0,i.kt)("a",{parentName:"li",href:"http://easings.net/"},"http://easings.net/"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transitionInterpolator")," (Object, optional, default: ",(0,i.kt)("inlineCode",{parentName:"li"},"LinearInterpolator"),") - An interpolator object that defines the transition behavior between two viewports, deck.gl provides ",(0,i.kt)("inlineCode",{parentName:"li"},"LinearInterpolator")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FlyToInterpolator"),". Default value, ",(0,i.kt)("inlineCode",{parentName:"li"},"LinearInterpolator"),", performs linear interpolation on ",(0,i.kt)("inlineCode",{parentName:"li"},"ViewState")," fields. ",(0,i.kt)("inlineCode",{parentName:"li"},"FlyToInterpolator")," animates ",(0,i.kt)("inlineCode",{parentName:"li"},"ViewStates")," similar to MapBox ",(0,i.kt)("inlineCode",{parentName:"li"},"flyTo")," API and applicable for ",(0,i.kt)("inlineCode",{parentName:"li"},"MapState"),", this is pretty useful when camera center changes by long distance. But a user can provide any custom implementation for this object using ",(0,i.kt)("inlineCode",{parentName:"li"},"TrasitionInterpolator")," base class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transitionInterruption")," (TRANSITION_EVENTS (Number), optional, default: BREAK) - This field controls how to process a new ",(0,i.kt)("inlineCode",{parentName:"li"},"ViewState")," change that occurs while performing an existing transition. This field has no impact once transition is complete. Here is the list of all possible values with resulting behavior.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"TRANSITION_EVENTS"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BREAK"),(0,i.kt)("td",{parentName:"tr",align:null},"Current transition will stop at the current state and next ",(0,i.kt)("inlineCode",{parentName:"td"},"ViewState")," update is processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SNAP_TO_END"),(0,i.kt)("td",{parentName:"tr",align:null},"Current transition will skip remaining transition steps and ",(0,i.kt)("inlineCode",{parentName:"td"},"ViewState")," is updated to final value, transition is stopped and next ",(0,i.kt)("inlineCode",{parentName:"td"},"ViewState")," update is processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IGNORE"),(0,i.kt)("td",{parentName:"tr",align:null},"Any ",(0,i.kt)("inlineCode",{parentName:"td"},"ViewState")," update is ignored until current transition is complete, this also includes ",(0,i.kt)("inlineCode",{parentName:"td"},"ViewState")," changes due to user interaction.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onTransitionStart")," (Functional, optional) - Callback fires when requested transition starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onTransitionInterrupt")," (Functional, optional) - Callback fires when transition is interrupted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onTransitionEnd")," (Functional, optional) - Callback fires when transition ends.")),(0,i.kt)("h3",{id:"transitioninterpolators"},"TransitionInterpolators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LinearInterpolator")," -  Performs linear interpolation between two ViewStates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FlyToInterpolator")," - This class is designed to perform ",(0,i.kt)("inlineCode",{parentName:"li"},"flyTo")," style interpolation between two ",(0,i.kt)("inlineCode",{parentName:"li"},"MapState")," objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TransitionInterpolator")," - Base interpolator class that provides common functionality required to interpolate between two ViewState props. This class can be subclassed to implement any custom interpolation:")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Sample code that provides ",(0,i.kt)("inlineCode",{parentName:"p"},"flyTo")," style transition to move camera from current location to NewYork city."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      viewState: {\n        latitude: 37.7751,\n        longitude: -122.4193,\n        zoom: 11,\n        bearing: 0,\n        pitch: 0,\n        width: 500,\n        height: 500\n      }\n    };\n    this._onViewStateChange = this._onViewStateChange.bind(this);\n  }\n\n  _goToNYC() {\n    this.setState({\n      viewState: {\n        ...this.state.viewState,\n        longitude: -74.1,\n        latitude: 40.7,\n        zoom: 14,\n        pitch: 0,\n        bearing: 0,\n        transitionDuration: 8000,\n        transitionInterpolator: new FlyToInterpolator()\n      }\n    });\n  }\n\n  _onViewStateChange({viewState}) {\n    this.setState({viewState});\n  }\n\n  render() {\n    const {viewState} = this.state;\n\n    return (\n      <div>\n        <DeckGL\n          viewState={viewState}\n          controller={MapController}\n          onViewStateChange={this._onViewStateChange}\n        >\n          <StaticMap\n            // props\n            ...\n          />\n        </DeckGL>\n\n        <button onClick={this._goToNYC}>New York City</button>\n      </div>\n    );\n  }\n}\n")),(0,i.kt)("p",null,"Sample code to get continuous rotations along vertical axis until user interrupts by rotating the map by mouse interaction. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"LinearInterpolator")," and restricts transitions for ",(0,i.kt)("inlineCode",{parentName:"p"},"bearing")," prop. Continuous transitions are achieved by triggering new transitions using ",(0,i.kt)("inlineCode",{parentName:"p"},"onTranstionEnd")," callback."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const transitionInterpolator = new LinearInterpolator(['bearing']);\n\nconst INITIAL_VIEW_STATE = {\n  // set to required initial view state\n...\n};\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.rotationStep = 0;\n    this.state = {\n      viewState: INITIAL_VIEW_STATE\n    };\n\n    this._onLoad = this._onLoad.bind(this);\n    this._onViewStateChange = this._onViewStateChange.bind(this);\n    this._rotateCamera = this._rotateCamera.bind(this);\n  }\n\n  _onLoad() {\n    this._rotateCamera();\n  }\n\n  _onViewStateChange({viewState}) {\n    this.setState({viewState});\n  }\n\n  _rotateCamera() {\n    // change bearing by 120 degrees.\n    const bearing = this.state.viewState.bearing + 120;\n    this.setState({\n      viewState: {\n        ...this.state.viewState,\n        bearing,\n        transitionDuration: 1000,\n        transitionInterpolator,\n        onTransitionEnd: this._rotateCamera\n      }\n    });\n  }\n\n  _renderLayers() {\n    // render any deck.gl layers\n    ...\n  }\n\n  render() {\n    const {viewState} = this.state;\n    return (\n      <DeckGL\n        layers={this._renderLayers()}\n        viewState={viewState}\n        onLoad={this._onLoad}\n        onViewStateChange={this._onViewStateChange}\n        controller={true}\n      >\n        <StaticMap\n          // props\n          ...\n        />\n      </DeckGL>\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);