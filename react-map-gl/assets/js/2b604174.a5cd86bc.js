"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[5186],{6866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>w,default:()=>C,frontMatter:()=>y,metadata:()=>b,toc:()=>x});var o=n(7462),r=n(3366),a=n(7294),i=n(3905),s=(n(745),n(945)),u=n(8539),l=n.n(u);function c(){return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Marker, Popup, NavigationControl and FullscreenControl "),a.createElement("p",null,"Map showing top 20 most populated cities of the United States. Click on a marker to learn more."),a.createElement("p",null,"Data source:"," ",a.createElement("a",{href:"https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population"},"Wikipedia")),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/controls",target:"_new"},"View Code \u2197")))}const p=a.memo(c);var d={cursor:"pointer",fill:"#d00",stroke:"none"};function m(e){var t=e.size,n=void 0===t?20:t;return a.createElement("svg",{height:n,viewBox:"0 0 24 24",style:d},a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"}))}const f=a.memo(m);var g=n(7971),h="";function v(){var e=(0,a.useState)(null),t=e[0],n=e[1],o=(0,a.useMemo)((function(){return g.map((function(e,t){return a.createElement(s.Jx,{key:"marker-"+t,longitude:e.longitude,latitude:e.latitude,anchor:"bottom",onClick:function(t){t.originalEvent.stopPropagation(),n(e)}},a.createElement(f,null))}))}),[]);return a.createElement(a.Fragment,null,a.createElement(s.ZP,{initialViewState:{latitude:40,longitude:-100,zoom:3.5,bearing:0,pitch:0},mapLib:l(),mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxAccessToken:h},a.createElement(s.$j,{position:"top-left"}),a.createElement(s.ot,{position:"top-left"}),a.createElement(s.Pv,{position:"top-left"}),a.createElement(s.jf,null),o,t&&a.createElement(s.GI,{anchor:"top",longitude:Number(t.longitude),latitude:Number(t.latitude),onClose:function(){return n(null)}},a.createElement("div",null,t.city,", ",t.state," |"," ",a.createElement("a",{target:"_new",href:"http://en.wikipedia.org/w/index.php?title=Special:Search&search="+t.city+", "+t.state},"Wikipedia")),a.createElement("img",{width:"100%",src:t.image}))),a.createElement(p,null))}var _=["components"],y={},w="Markers, Popups and Controls",b={unversionedId:"controls",id:"controls",title:"Markers, Popups and Controls",description:"",source:"@site/src/examples/controls.mdx",sourceDirName:".",slug:"/controls",permalink:"/react-map-gl/examples/controls",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Dynamic Styling",permalink:"/react-map-gl/examples/layers"},next:{title:"Custom Cursor",permalink:"/react-map-gl/examples/custom-cursor"}},k={},x=[],S={toc:x},E="wrapper";function C(e){var t=e.components,n=(0,r.Z)(e,_);return(0,i.kt)(E,(0,o.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markers-popups-and-controls"},"Markers, Popups and Controls"),(0,i.kt)(v,{mdxType:"App"}))}C.isMDXComponent=!0},945:(e,t,n)=>{n.d(t,{ot:()=>$,$j:()=>ee,mh:()=>V,D5:()=>Q,Jx:()=>X,Pv:()=>K,GI:()=>Y,jf:()=>te,Hw:()=>B,ZP:()=>ne,PE:()=>D});var o=n(7294),r=o.createContext(null);var a=n(1202);function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function s(e,t){var n=t.viewState||t,o=!1;if("longitude"in n&&"latitude"in n){var r=e.center;e.center=new r.constructor(n.longitude,n.latitude),o=o||r!==e.center}if("zoom"in n){var a=e.zoom;e.zoom=n.zoom,o=o||a!==e.zoom}if("bearing"in n){var i=e.bearing;e.bearing=n.bearing,o=o||i!==e.bearing}if("pitch"in n){var s=e.pitch;e.pitch=n.pitch,o=o||s!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(o=!0,e.padding=n.padding),o}var u=n(7855),l=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function c(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,n={},o=(0,u.Z)(e.layers);!(t=o()).done;){var r=t.value;n[r.id]=r}var a=e.layers.map((function(e){var t=null;"interactive"in e&&delete(t=Object.assign({},e)).interactive;var o=n[e.ref];if(o){delete(t=t||Object.assign({},e)).ref;for(var r,a=(0,u.Z)(l);!(r=a()).done;){var i=r.value;i in o&&(t[i]=o[i])}}return t||e}));return Object.assign({},e,{layers:a})}function p(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!p(e[n],t[n]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var o=Object.keys(e),r=Object.keys(t);if(o.length!==r.length)return!1;for(var a=0,i=o;a<i.length;a++){var s=i[a];if(!t.hasOwnProperty(s))return!1;if(!p(e[s],t[s]))return!1}return!0}return!1}var d={version:8,sources:{},layers:[]},m={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},f={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},g={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},h=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],v=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],_=function(){function e(e,t,n){var o=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=o.props[g[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||o._updateHover(e);var t=o.props[m[e.type]];t&&(o.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=o._hoveredFeatures||o._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!o._internalUpdate){var t=o.props[f[e.type]];t&&t(e)}e.type in o._deferredEvents&&(o._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(n)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var n=this._updateSettings(e,t);n&&this._createShadowTransform(this._map);var o=this._updateSize(e),r=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(n||o||r&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,n){var o=e.savedMaps.pop();if(!o)return null;var r=o.map,a=r.getContainer();for(n.className=a.className;a.childNodes.length>0;)n.appendChild(a.childNodes[0]);r._container=n;var i=r._resizeObserver;i&&(i.disconnect(),i.observe(n)),o.setProps(Object.assign({},t,{styleDiffing:!1})),r.resize();var s=t.initialViewState;return s&&(s.bounds?r.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):o._updateViewState(s,!1)),r.isStyleLoaded()?r.fire("load"):r.once("styledata",(function(){return r.fire("load")})),r._update(),o},t._initialize=function(e){var t=this,n=this.props,o=n.mapStyle,r=void 0===o?d:o,a=Object.assign({},n,n.initialViewState,{accessToken:n.mapboxAccessToken||y()||null,container:e,style:c(r)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),n.gl){var s=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=s,n.gl}}var u=new this._MapClass(a);i.padding&&u.setPadding(i.padding),n.cursor&&(u.getCanvas().style.cursor=n.cursor),this._createShadowTransform(u);var l=u._render;u._render=function(e){t._inRender=!0,l.call(u,e),t._inRender=!1};var p=u._renderTaskQueue.run;u._renderTaskQueue.run=function(e){p.call(u._renderTaskQueue,e),t._onBeforeRepaint()},u.on("render",(function(){return t._onAfterRepaint()}));var h=u.fire;for(var v in u.fire=this._fireEvent.bind(this,h),u.on("resize",(function(){t._renderTransform.resize(u.transform.width,u.transform.height)})),u.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),u.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),m)u.on(v,this._onPointerEvent);for(var _ in f)u.on(_,this._onCameraEvent);for(var w in g)u.on(w,this._onEvent);this._map=u},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,n,o=(t=e.transform,(n=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,n);e.painter.transform=o,this._renderTransform=o},t._updateSize=function(e){var t=e.viewState;if(t){var n=this._map;if(t.width!==n.transform.width||t.height!==n.transform.height)return n.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var n=this._map,o=this._renderTransform,r=o.zoom,a=o.pitch,u=o.bearing,l=n.isMoving();l&&(o.cameraElevationReference="sea");var c=s(o,Object.assign({},i(n.transform),e));if(l&&(o.cameraElevationReference="ground"),c&&t){var p=this._deferredEvents;p.move=!0,p.zoom||(p.zoom=r!==o.zoom),p.rotate||(p.rotate=u!==o.bearing),p.pitch||(p.pitch=a!==o.pitch)}return l||s(n.transform,e),c},t._updateSettings=function(e,t){for(var n=this._map,o=!1,r=0,a=h;r<a.length;r++){var i=a[r];if(i in e&&!p(e[i],t[i])){o=!0;var s=n["set"+i[0].toUpperCase()+i.slice(1)];null==s||s(e[i])}}return o},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var n=e.mapStyle,o=void 0===n?d:n,r=e.styleDiffing,a={diff:void 0===r||r};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(c(o),a),!0}return!1},t._updateStyleComponents=function(e,t){var n=this._map,o=!1;return n.isStyleLoaded()&&("light"in e&&n.setLight&&!p(e.light,t.light)&&(o=!0,n.setLight(e.light)),"fog"in e&&n.setFog&&!p(e.fog,t.fog)&&(o=!0,n.setFog(e.fog)),"terrain"in e&&n.setTerrain&&!p(e.terrain,t.terrain)&&(e.terrain&&!n.getSource(e.terrain.source)||(o=!0,n.setTerrain(e.terrain)))),o},t._updateHandlers=function(e,t){for(var n=this._map,o=!1,r=0,a=v;r<a.length;r++){var i,s,u=a[r],l=null==(i=e[u])||i;p(l,null==(s=t[u])||s)||(o=!0,l?n[u].enable(l):n[u].disable())}return o},t._queryRenderedFeatures=function(e){var t=this._map,n=this.props.interactiveLayerIds,o=void 0===n?[]:n;try{return t.queryRenderedFeatures(e,{layers:o.filter(t.getLayer.bind(t))})}catch(r){return[]}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var n,o=e.type,r=(null==(n=this._hoveredFeatures)?void 0:n.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&r&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!r&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=o}else this._hoveredFeatures=null},t._fireEvent=function(e,t,n){var o=this._map,r=o.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in f&&("object"==typeof t&&(t.viewState=i(r)),this._map.isMoving())?(o.transform=this._renderTransform,e.call(o,t,n),o.transform=r,o):(e.call(o,t,n),o)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var n in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[n]&&t.fire(n);this._internalUpdate=!1;var o=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=o}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function y(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoieGlhb2ppY2hlbiIsImEiOiJja2tyNG5zNjQwNHl4Mm9xYjQxem5yYXh2In0.paOW5xnztNAXDTfOJsmVWA"}catch(n){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(o){}return e}_.savedMaps=[];var w=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function b(e){if(!e)return null;for(var t,n=e.map,o={getMap:function(){return n},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(t){var o=n.transform;n.transform=e.transform;var r=n.project(t);return n.transform=o,r},unproject:function(t){var o=n.transform;n.transform=e.transform;var r=n.unproject(t);return n.transform=o,r},queryTerrainElevation:function(t,o){var r=n.transform;n.transform=e.transform;var a=n.queryTerrainElevation(t,o);return n.transform=r,a}},r=(0,u.Z)(function(e){var t=new Set,n=e;for(;n;){for(var o,r=(0,u.Z)(Object.getOwnPropertyNames(n));!(o=r()).done;){var a=o.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}n=Object.getPrototypeOf(n)}return Array.from(t)}(n));!(t=r()).done;){var a=t.value;a in o||w.includes(a)||(o[a]=n[a].bind(n))}return o}const k="undefined"!=typeof document?o.useLayoutEffect:o.useEffect;var x=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var S=o.createContext(null);function E(e,t,n){var a=(0,o.useContext)(r),i=(0,o.useState)(null),s=i[0],l=i[1],c=(0,o.useRef)(),p=(0,o.useRef)({mapLib:null,map:null}).current;(0,o.useEffect)((function(){var t,o=e.mapLib,r=!0;return Promise.resolve(o||n).then((function(n){if(r){if(!n)throw new Error("Invalid mapLib");var o="Map"in n?n:n.default;if(!o.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var n,o=(0,u.Z)(x);!(n=o()).done;){var r=n.value;r in t&&(e[r]=t[r])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(o,e),o.supported&&!o.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=_.reuse(e,c.current)),t||(t=new _(o.Map,e,c.current)),p.map=b(t),p.mapLib=o,l(t),null==a||a.onMapMount(p.map,e.id)}})).catch((function(t){var n=e.onError;n?n({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){r=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),k((function(){s&&s.setProps(e)})),(0,o.useImperativeHandle)(t,(function(){return p.map}),[s]);var d=(0,o.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return o.createElement("div",{id:e.id,ref:c,style:d},s&&o.createElement(S.Provider,{value:p},o.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var C=n(3935),L=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function P(e,t){if(e&&t){var n=e.style;for(var o in t){var r=t[o];Number.isFinite(r)&&!L.test(o)?n[o]=r+"px":n[o]=r}}}function M(e){var t=(0,o.useContext)(S),n=t.map,r=t.mapLib,a=(0,o.useRef)({props:e});a.current.props=e;var i=(0,o.useMemo)((function(){var t=!1;o.Children.forEach(e.children,(function(e){e&&(t=!0)}));var n=Object.assign({},e,{element:t?document.createElement("div"):null}),s=new r.Marker(n);return s.setLngLat([e.longitude,e.latitude]),s.getElement().addEventListener("click",(function(e){null==a.current.props.onClick||a.current.props.onClick({type:"click",target:s,originalEvent:e})})),s.on("dragstart",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragStart||a.current.props.onDragStart(t)})),s.on("drag",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDrag||a.current.props.onDrag(t)})),s.on("dragend",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragEnd||a.current.props.onDragEnd(t)})),s}),[]);(0,o.useEffect)((function(){return i.addTo(n.getMap()),function(){i.remove()}}),[]);var s,u,l,c,p,d,m=e.longitude,f=e.latitude,g=e.offset,h=e.style,v=e.draggable,_=void 0!==v&&v,y=e.popup,w=void 0===y?null:y,b=e.rotation,k=void 0===b?0:b,x=e.rotationAlignment,E=void 0===x?"auto":x,L=e.pitchAlignment,M=void 0===L?"auto":L;return(0,o.useEffect)((function(){P(i.getElement(),h)}),[h]),i.getLngLat().lng===m&&i.getLngLat().lat===f||i.setLngLat([m,f]),g&&(s=i.getOffset(),u=g,l=Array.isArray(s)?s[0]:s?s.x:0,c=Array.isArray(s)?s[1]:s?s.y:0,p=Array.isArray(u)?u[0]:u?u.x:0,d=Array.isArray(u)?u[1]:u?u.y:0,l!==p||c!==d)&&i.setOffset(g),i.isDraggable()!==_&&i.setDraggable(_),i.getRotation()!==k&&i.setRotation(k),i.getRotationAlignment()!==E&&i.setRotationAlignment(E),i.getPitchAlignment()!==M&&i.setPitchAlignment(M),i.getPopup()!==w&&i.setPopup(w),(0,C.createPortal)(e.children,i.getElement())}const j=(0,o.memo)(M);function T(e){return new Set(e?e.trim().split(/\s+/):[])}function A(e){var t=(0,o.useContext)(S),n=t.map,r=t.mapLib,a=(0,o.useMemo)((function(){return document.createElement("div")}),[]),i=(0,o.useRef)({props:e});i.current.props=e;var s=(0,o.useMemo)((function(){var t=Object.assign({},e),n=new r.Popup(t);return n.setLngLat([e.longitude,e.latitude]),n.once("open",(function(e){null==i.current.props.onOpen||i.current.props.onOpen(e)})),n}),[]);if((0,o.useEffect)((function(){var e=function(e){null==i.current.props.onClose||i.current.props.onClose(e)};return s.on("close",e),s.setDOMContent(a).addTo(n.getMap()),function(){s.off("close",e),s.isOpen()&&s.remove()}}),[]),(0,o.useEffect)((function(){P(s.getElement(),e.style)}),[e.style]),s.isOpen()&&(s.getLngLat().lng===e.longitude&&s.getLngLat().lat===e.latitude||s.setLngLat([e.longitude,e.latitude]),e.offset&&!p(s.options.offset,e.offset)&&s.setOffset(e.offset),s.options.anchor===e.anchor&&s.options.maxWidth===e.maxWidth||(s.options.anchor=e.anchor,s.setMaxWidth(e.maxWidth)),s.options.className!==e.className)){for(var l,c=T(s.options.className),d=T(e.className),m=(0,u.Z)(c);!(l=m()).done;){var f=l.value;d.has(f)||s.removeClassName(f)}for(var g,h=(0,u.Z)(d);!(g=h()).done;){var v=g.value;c.has(v)||s.addClassName(v)}s.options.className=e.className}return(0,C.createPortal)(e.children,a)}const z=(0,o.memo)(A);const D=function(e,t,n,r){var a=(0,o.useContext)(S),i=(0,o.useMemo)((function(){return e(a)}),[]);return(0,o.useEffect)((function(){var e=r||n||t,o="function"==typeof t&&"function"==typeof n?t:null,s="function"==typeof n?n:"function"==typeof t?t:null,u=a.map;return u.hasControl(i)||(u.addControl(i,null==e?void 0:e.position),o&&o(a)),function(){s&&s(a),u.hasControl(i)&&u.removeControl(i)}}),[]),i};function O(e){var t=D((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,o.useEffect)((function(){P(t._controlContainer,e.style)}),[e.style]),null}const R=(0,o.memo)(O);function N(e,t){var n=(0,o.useRef)({props:e}),r=D((function(t){var o=new t.mapLib.GeolocateControl(e),r=o._setupUI;return o._setupUI=function(e){o._container.hasChildNodes()||r(e)},o.on("geolocate",(function(e){null==n.current.props.onGeolocate||n.current.props.onGeolocate(e)})),o.on("error",(function(e){null==n.current.props.onError||n.current.props.onError(e)})),o.on("outofmaxbounds",(function(e){null==n.current.props.onOutOfMaxBounds||n.current.props.onOutOfMaxBounds(e)})),o.on("trackuserlocationstart",(function(e){null==n.current.props.onTrackUserLocationStart||n.current.props.onTrackUserLocationStart(e)})),o.on("trackuserlocationend",(function(e){null==n.current.props.onTrackUserLocationEnd||n.current.props.onTrackUserLocationEnd(e)})),o}),{position:e.position});return n.current.props=e,(0,o.useImperativeHandle)(t,(function(){return r}),[]),(0,o.useEffect)((function(){P(r._container,e.style)}),[e.style]),null}const I=(0,o.memo)((0,o.forwardRef)(N));function F(e){var t=D((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,o.useEffect)((function(){P(t._container,e.style)}),[e.style]),null}const Z=(0,o.memo)(F);function U(e){var t=D((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),n=(0,o.useRef)(e),r=n.current;n.current=e;var a=e.style;return void 0!==e.maxWidth&&e.maxWidth!==r.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==r.unit&&t.setUnit(e.unit),(0,o.useEffect)((function(){P(t._container,a)}),[a]),null}const W=(0,o.memo)(U);function J(e,t){if(!e)throw new Error(t)}var G=0;const B=function(e){var t=(0,o.useContext)(S).map.getMap(),n=(0,o.useRef)(e),r=(0,o.useState)(0)[1],a=(0,o.useMemo)((function(){return e.id||"jsx-source-"+G++}),[]);(0,o.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return r((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var n,o=null==(n=t.getStyle())?void 0:n.layers;if(o)for(var r,i=(0,u.Z)(o);!(r=i()).done;){var s=r.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var i=t&&t.style&&t.getSource(a);return i?function(e,t,n){J(t.id===n.id,"source id changed"),J(t.type===n.type,"source type changed");var o="",r=0;for(var a in t)"children"===a||"id"===a||p(n[a],t[a])||(o=a,r++);if(r){var i=t.type;if("geojson"===i)e.setData(t.data);else if("image"===i)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===r&&"coordinates"===o)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(o){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+o)}}(i,e,n.current):i=function(e,t,n){if(e.style&&e.style._loaded){var o=Object.assign({},n);return delete o.id,delete o.children,e.addSource(t,o),e.getSource(t)}return null}(t,a,e),n.current=e,i&&o.Children.map(e.children,(function(e){return e&&(0,o.cloneElement)(e,{source:a})}))||null};var H=0;const V=function(e){var t=(0,o.useContext)(S).map.getMap(),n=(0,o.useRef)(e),r=(0,o.useState)(0)[1],a=(0,o.useMemo)((function(){return e.id||"jsx-layer-"+H++}),[]);if((0,o.useEffect)((function(){if(t){var e=function(){return r((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,n,o){if(J(n.id===o.id,"layer id changed"),J(n.type===o.type,"layer type changed"),"custom"!==n.type&&"custom"!==o.type){var r=n.layout,a=void 0===r?{}:r,i=n.paint,s=void 0===i?{}:i,u=n.filter,l=n.minzoom,c=n.maxzoom,d=n.beforeId;if(d!==o.beforeId&&e.moveLayer(t,d),a!==o.layout){var m=o.layout||{};for(var f in a)p(a[f],m[f])||e.setLayoutProperty(t,f,a[f]);for(var g in m)a.hasOwnProperty(g)||e.setLayoutProperty(t,g,void 0)}if(s!==o.paint){var h=o.paint||{};for(var v in s)p(s[v],h[v])||e.setPaintProperty(t,v,s[v]);for(var _ in h)s.hasOwnProperty(_)||e.setPaintProperty(t,_,void 0)}p(u,o.filter)||e.setFilter(t,u),l===o.minzoom&&c===o.maxzoom||e.setLayerZoomRange(t,l,c)}}(t,a,e,n.current)}catch(i){console.warn(i)}else!function(e,t,n){if(e.style&&e.style._loaded&&(!("source"in n)||e.getSource(n.source))){var o=Object.assign({},n,{id:t});delete o.beforeId,e.addLayer(o,n.beforeId)}}(t,a,e);return n.current=e,null};var q=Promise.resolve().then(n.t.bind(n,8539,23)),Q=o.forwardRef((function(e,t){return E(e,t,q)})),X=j,Y=z,$=R,K=Z,ee=I,te=W;const ne=Q},7971:e=>{e.exports=JSON.parse('[{"city":"New York","population":"8,175,133","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","state":"New York","latitude":40.6643,"longitude":-73.9385},{"city":"Los Angeles","population":"3,792,621","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg","state":"California","latitude":34.0194,"longitude":-118.4108},{"city":"Chicago","population":"2,695,598","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg","state":"Illinois","latitude":41.8376,"longitude":-87.6818},{"city":"Houston","population":"2,100,263","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","state":"Texas","latitude":29.7805,"longitude":-95.3863},{"city":"Phoenix","population":"1,445,632","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg","state":"Arizona","latitude":33.5722,"longitude":-112.088},{"city":"Philadelphia","population":"1,526,006","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg","state":"Pennsylvania","latitude":40.0094,"longitude":-75.1333},{"city":"San Antonio","population":"1,327,407","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG","state":"Texas","latitude":29.4724,"longitude":-98.5251},{"city":"San Diego","population":"1,307,402","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg","state":"California","latitude":32.8153,"longitude":-117.135},{"city":"Dallas","population":"1,197,816","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg","state":"Texas","latitude":32.7757,"longitude":-96.7967},{"city":"San Jose","population":"945,942","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG","state":"California","latitude":37.2969,"longitude":-121.8193},{"city":"Austin","population":"790,390","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG","state":"Texas","latitude":30.3072,"longitude":-97.756},{"city":"Jacksonville","population":"821,784","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg","state":"Florida","latitude":30.337,"longitude":-81.6613},{"city":"San Francisco","population":"805,235","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg","state":"California","latitude":37.7751,"longitude":-122.4193},{"city":"Columbus","population":"787,033","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg","state":"Ohio","latitude":39.9848,"longitude":-82.985},{"city":"Indianapolis","population":"820,445","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG","state":"Indiana","latitude":39.7767,"longitude":-86.1459},{"city":"Fort Worth","population":"741,206","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg","state":"Texas","latitude":32.7795,"longitude":-97.3463},{"city":"Charlotte","population":"731,424","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg","state":"North Carolina","latitude":35.2087,"longitude":-80.8307},{"city":"Seattle","population":"608,660","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg","state":"Washington","latitude":47.6205,"longitude":-122.3509},{"city":"Denver","population":"600,158","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG","state":"Colorado","latitude":39.7618,"longitude":-104.8806},{"city":"El Paso","population":"649,121","image":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg","state":"Texas","latitude":31.8484,"longitude":-106.427}]')}}]);