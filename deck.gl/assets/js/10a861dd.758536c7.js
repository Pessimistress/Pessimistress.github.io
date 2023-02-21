"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8013],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(i),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return i?n.createElement(k,r(r({ref:t},d),{},{components:i})):n.createElement(k,r({ref:t},d))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},42203:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const l={},r="View Class",o={unversionedId:"api-reference/core/view",id:"api-reference/core/view",title:"View Class",description:"For detailed explanations and code examples about deck.gl's views system, visit the Views and Projections article.",source:"@site/../docs/api-reference/core/view.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/view",permalink:"/deck.gl/docs/api-reference/core/view",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/view.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WebMercatorViewport",permalink:"/deck.gl/docs/api-reference/core/web-mercator-viewport"},next:{title:"MapView",permalink:"/deck.gl/docs/api-reference/core/map-view"}},p={},s=[{value:"Constructor",id:"constructor",level:2},{value:"<code>id</code> (String, optional)",id:"id",level:5},{value:"<code>x</code> (String|Number, optional)",id:"x",level:5},{value:"<code>y</code> (String|Number, optional)",id:"y",level:5},{value:"<code>width</code> (String|Number, optional)",id:"width",level:5},{value:"<code>height</code> (String|Number, optional)",id:"height",level:5},{value:"<code>padding</code> (Object, optional)",id:"padding",level:5},{value:"<code>controller</code> (Function|Boolean|Object, optional)",id:"controller",level:5},{value:"<code>viewState</code> (String|Object, optional)",id:"viewstate",level:5},{value:"<code>clear</code> (Boolean|Object, optional)",id:"clear",level:5},{value:"Methods",id:"methods",level:2},{value:"<code>equals</code>",id:"equals",level:5},{value:"<code>makeViewport</code>",id:"makeviewport",level:5},{value:"<code>getDimensions</code>",id:"getdimensions",level:5},{value:"Remarks",id:"remarks",level:2},{value:"Source",id:"source",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"view-class"},"View Class"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For detailed explanations and code examples about deck.gl's views system, visit the ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/views"},"Views and Projections")," article.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," class and its subclasses are used to specify where and how your deck.gl layers should be rendered. Applications typically instantiate at least one ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," subclass."),(0,a.kt)("p",null,"Views allow you to specify:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unique ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,a.kt)("li",{parentName:"ul"},"The position and extent of the view on the canvas: ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"width"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"height"),"."),(0,a.kt)("li",{parentName:"ul"},"Certain camera parameters specifying how your data should be projected into this view, e.g. field of view, near/far planes, perspective vs. orthographic, etc."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/controller"},"controller")," to be used for this view. A controller listens to pointer events and touch gestures, and translates user input into changes in the view state. If enabled, the camera becomes interactive.")),(0,a.kt)("p",null,"deck.gl offers a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," classes that package the camera and controller logic that you need to visualize and interact with your data. You may choose one or multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," classes based on the type of data (e.g. geospatial, 2D chart) and the desired perspective (top down, first-person, etc)."),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const view = new View({id, x, y, width, height, ...});\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("h5",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h5"},"id")," (String, optional)"),(0,a.kt)("p",null,"A unique id of the view. In a multi-view use case, this is important for matching view states and place contents into this view."),(0,a.kt)("h5",{id:"x"},(0,a.kt)("inlineCode",{parentName:"h5"},"x")," (String|Number, optional)"),(0,a.kt)("p",null,"A relative (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'50%'"),") or absolute position. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h5",{id:"y"},(0,a.kt)("inlineCode",{parentName:"h5"},"y")," (String|Number, optional)"),(0,a.kt)("p",null,"A relative (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'50%'"),") or absolute position. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h5",{id:"width"},(0,a.kt)("inlineCode",{parentName:"h5"},"width")," (String|Number, optional)"),(0,a.kt)("p",null,"A relative (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'50%'"),") or absolute extent. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"'100%'"),"."),(0,a.kt)("h5",{id:"height"},(0,a.kt)("inlineCode",{parentName:"h5"},"height")," (String|Number, optional)"),(0,a.kt)("p",null,"A relative (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'50%'"),") or absolute extent. Default ",(0,a.kt)("inlineCode",{parentName:"p"},"'100%'"),"."),(0,a.kt)("h5",{id:"padding"},(0,a.kt)("inlineCode",{parentName:"h5"},"padding")," (Object, optional)"),(0,a.kt)("p",null,"Padding around the viewport, in the shape of ",(0,a.kt)("inlineCode",{parentName:"p"},"{left, right, top, bottom}")," where each value is either a relative (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"'50%'"),') or absolute pixels. This can be used to move the "look at"/target/vanishing point away from the center of the viewport rectangle.'),(0,a.kt)("h5",{id:"controller"},(0,a.kt)("inlineCode",{parentName:"h5"},"controller")," (Function|Boolean|Object, optional)"),(0,a.kt)("p",null,"Options for viewport interactivity."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),": this view is not interactive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": initiates the default controller with default options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Controller")," class (not instance): initiates the provided controller with default options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Object"),": controller options. This will be merged with the default controller options.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controller.type"),": the controller class"),(0,a.kt)("li",{parentName:"ul"},"For other options, consult the documentation of ",(0,a.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/controller"},"Controller"),".")))),(0,a.kt)("p",null,"Default ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h5",{id:"viewstate"},(0,a.kt)("inlineCode",{parentName:"h5"},"viewState")," (String|Object, optional)"),(0,a.kt)("p",null,"The optional ",(0,a.kt)("inlineCode",{parentName:"p"},"viewState")," property enables a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," to specify, select or select-and-modify its view state."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"viewState")," is an overloaded property that can take either just a view state id string, or an object specifying view state parameters and optionally a view state id string:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," (default): Will select a view state based on ",(0,a.kt)("inlineCode",{parentName:"li"},"view.id"),", falling back to using the first view state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String"),": Will attempt to match the indicated \tview state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Object")," (with ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," field): if the object contains an ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," field which matches a dynamic view state, the remaining fields in ",(0,a.kt)("inlineCode",{parentName:"li"},"View.viewState")," will extend (be merged into a copy of) the selected dynamic view state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Object")," (with no ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," field): If no ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," is provided, the ",(0,a.kt)("inlineCode",{parentName:"li"},"View.viewState")," object will be used directly as the view state, essentially representing a fixed or constant view state.")),(0,a.kt)("p",null,"Note that specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"viewState")," as an object with an ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field effectively allows the View to modify a dynamic view state by overriding some of its fields. This is useful in multiview situations where it enables having one view that fixes some parameters (eg. zoom, pitch and bearing to show an overview map)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"viewState")," property is intended to support a number of use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sharing view states between multiple views - If a ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," id is different from the designed view state's id."),(0,a.kt)("li",{parentName:"ul"},"specify a complete, constant (fixed) view state directly in the view"),(0,a.kt)("li",{parentName:"ul"},"Overriding a partial set of view state properties from a selected view state.")),(0,a.kt)("h5",{id:"clear"},(0,a.kt)("inlineCode",{parentName:"h5"},"clear")," (Boolean|Object, optional)"),(0,a.kt)("p",null,"Clears the contents (pixels) of the viewport. The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," prop is passed as an argument to luma.gl's ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," function. If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," clears color and depth buffers. If an object, behaviour is controlled by the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"color")," (Boolean or Array) - if not ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", clears all active color buffers with either the provided color or the currently set clear color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"depth")," (Boolean)  - if ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", clears the depth buffer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stencil")," (Boolean) - if ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," clears the stencil buffer.")),(0,a.kt)("p",null,"Note that deck.gl always clears the screen before each render, and clearing, while cheap, is not totally free. This means that viewports should only specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," property if they need additional clearing, e.g. because they are rendering on top of another viewport, or want to have a different background color etc."),(0,a.kt)("p",null,"Default ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Note: most applications just create Views with the appropriate props and do not need to call the following View methods directly."),(0,a.kt)("h5",{id:"equals"},(0,a.kt)("inlineCode",{parentName:"h5"},"equals")),(0,a.kt)("p",null,"Returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if deck.gl can determine that the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," instance is identical (equivalent) with this view."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"view.equals(otherView)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"otherView")," (",(0,a.kt)("inlineCode",{parentName:"li"},"View"),") - Another view instance to compare with.")),(0,a.kt)("p",null,"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," - the given view is identical to the current one.")),(0,a.kt)("p",null,"Note: For speed, deck.gl uses shallow equality. This means that a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," does not guarantee that the views are not equivalent."),(0,a.kt)("h5",{id:"makeviewport"},(0,a.kt)("inlineCode",{parentName:"h5"},"makeViewport")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"view.makeViewport({width, height, viewState})\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - Dimension in pixels of the target viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - Dimension in pixels of the target viewport."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewState")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Object"),") - ",(0,a.kt)("a",{parentName:"li",href:"/deck.gl/docs/developer-guide/views"},"view state")," compatible with the current ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," subclass in use. Note that any prop provided to the ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," constructor will override that inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"viewState"),".")),(0,a.kt)("p",null,"Returns a ",(0,a.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/viewport"},"Viewport")," using the viewport type, props in the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," and provided dimensions and view state."),(0,a.kt)("h5",{id:"getdimensions"},(0,a.kt)("inlineCode",{parentName:"h5"},"getDimensions")),(0,a.kt)("p",null,"Returns the actual pixel position and size that this ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),' will occupy in a given "canvas" size.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {x, y, width, height} = view.getDimensions({width, height});\n")),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),') - Dimension in CSS pixels of the deck.gl "canvas".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),') - Dimension in CSS pixels of the deck.gl "canvas".')),(0,a.kt)("p",null,"Returns an object containing the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - x position in CSS pixels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - y position in CSS pixels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - width in CSS pixels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"height")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),") - height in CSS pixels")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"View")," class and its subclasses are perhaps best thought of as geospatially enabled counterparts of the typical ",(0,a.kt)("inlineCode",{parentName:"li"},"Camera")," classes found in most 3D libraries.")),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/blob/master/modules/core/src/views/view.ts"},"modules/core/src/views/view.ts")))}u.isMDXComponent=!0}}]);