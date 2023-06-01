"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[6701],{4046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>_,default:()=>L,frontMatter:()=>b,metadata:()=>x,toc:()=>S});var n=r(7462),o=r(3366),a=r(7294),i=r(3905),s=(r(745),r(945)),l={parks:/park/,buildings:/building/,roads:/bridge|road|tunnel/,labels:/label|place|poi/};function u(e){var t=e.name,r=e.value,n=e.onChange;return a.createElement("div",{key:t,className:"input"},a.createElement("label",null,t),a.createElement("input",{type:"checkbox",checked:r,onChange:function(e){return n(t,e.target.checked)}}))}function c(e){var t=(0,a.useState)({parks:!0,buildings:!0,roads:!0,labels:!0}),r=t[0],n=t[1];(0,a.useEffect)((function(){e.onChange((function(e){return function(e,t){for(var r in e)if(e[r]&&l[r].test(t))return!0;return!1}(r,e)}))}),[r]);var o=function(e,t){var o;n(Object.assign({},r,((o={})[e]=t,o)))};return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Custom Cursor"),a.createElement("p",null,"Customize the cursor based on interactivity."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/custom-cursor",target:"_new"},"View Code \u2197")),a.createElement("hr",null),a.createElement("p",null,"Clickable layers"),Object.keys(l).map((function(e){return a.createElement(u,{key:e,name:e,value:r[e],onChange:o})})))}const p=a.memo(c);var d=r(2853),f=r(8539),m=r.n(f),v="",y={longitude:-122.48,latitude:37.78,zoom:15.5,bearing:0,pitch:0};function h(){var e=(0,a.useState)("auto"),t=e[0],r=e[1],n=(0,a.useState)(["nonexist"]),o=n[0],i=n[1],l=(0,a.useCallback)((function(e){i(d.layers.map((function(e){return e.id})).filter(e))}),[]),u=(0,a.useCallback)((function(e){var t=e.features&&e.features[0];t&&window.alert("Clicked layer "+t.layer.id)}),[]),c=(0,a.useCallback)((function(){return r("pointer")}),[]),f=(0,a.useCallback)((function(){return r("auto")}),[]);return a.createElement(a.Fragment,null,a.createElement(s.ZP,{mapLib:m(),initialViewState:y,mapStyle:d,onClick:u,onMouseEnter:c,onMouseLeave:f,cursor:t,interactiveLayerIds:o,mapboxAccessToken:v}),a.createElement(p,{onChange:l}))}var g=["components"],b={},_="Custom Cursor",x={unversionedId:"custom-cursor",id:"custom-cursor",title:"Custom Cursor",description:"",source:"@site/src/examples/custom-cursor.mdx",sourceDirName:".",slug:"/custom-cursor",permalink:"/react-map-gl/examples/custom-cursor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Markers, Popups and Controls",permalink:"/react-map-gl/examples/controls"},next:{title:"Draggable Marker",permalink:"/react-map-gl/examples/draggable-markers"}},w={},S=[],E={toc:S},k="wrapper";function L(e){var t=e.components,r=(0,o.Z)(e,g);return(0,i.kt)(k,(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-cursor"},"Custom Cursor"),(0,i.kt)(h,{mdxType:"App"}))}L.isMDXComponent=!0},945:(e,t,r)=>{r.d(t,{ot:()=>Y,$j:()=>ee,mh:()=>q,D5:()=>J,Jx:()=>Q,Pv:()=>K,GI:()=>X,jf:()=>te,Hw:()=>H,ZP:()=>re,PE:()=>R});var n=r(7294),o=n.createContext(null);var a=r(1202);function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function s(e,t){var r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){var o=e.center;e.center=new o.constructor(r.longitude,r.latitude),n=n||o!==e.center}if("zoom"in r){var a=e.zoom;e.zoom=r.zoom,n=n||a!==e.zoom}if("bearing"in r){var i=e.bearing;e.bearing=r.bearing,n=n||i!==e.bearing}if("pitch"in r){var s=e.pitch;e.pitch=r.pitch,n=n||s!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}var l=r(7855),u=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function c(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,r={},n=(0,l.Z)(e.layers);!(t=n()).done;){var o=t.value;r[o.id]=o}var a=e.layers.map((function(e){var t=null;"interactive"in e&&delete(t=Object.assign({},e)).interactive;var n=r[e.ref];if(n){delete(t=t||Object.assign({},e)).ref;for(var o,a=(0,l.Z)(u);!(o=a()).done;){var i=o.value;i in n&&(t[i]=n[i])}}return t||e}));return Object.assign({},e,{layers:a})}function p(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!p(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0,i=n;a<i.length;a++){var s=i[a];if(!t.hasOwnProperty(s))return!1;if(!p(e[s],t[s]))return!1}return!0}return!1}var d={version:8,sources:{},layers:[]},f={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},m={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},v={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},y=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],g=function(){function e(e,t,r){var n=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=n.props[v[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||n._updateHover(e);var t=n.props[f[e.type]];t&&(n.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=n._hoveredFeatures||n._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!n._internalUpdate){var t=n.props[m[e.type]];t&&t(e)}e.type in n._deferredEvents&&(n._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);var n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,r){var n=e.savedMaps.pop();if(!n)return null;var o=n.map,a=o.getContainer();for(r.className=a.className;a.childNodes.length>0;)r.appendChild(a.childNodes[0]);o._container=r;var i=o._resizeObserver;i&&(i.disconnect(),i.observe(r)),n.setProps(Object.assign({},t,{styleDiffing:!1})),o.resize();var s=t.initialViewState;return s&&(s.bounds?o.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):n._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),o._update(),n},t._initialize=function(e){var t=this,r=this.props,n=r.mapStyle,o=void 0===n?d:n,a=Object.assign({},r,r.initialViewState,{accessToken:r.mapboxAccessToken||b()||null,container:e,style:c(o)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),r.gl){var s=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=s,r.gl}}var l=new this._MapClass(a);i.padding&&l.setPadding(i.padding),r.cursor&&(l.getCanvas().style.cursor=r.cursor),this._createShadowTransform(l);var u=l._render;l._render=function(e){t._inRender=!0,u.call(l,e),t._inRender=!1};var p=l._renderTaskQueue.run;l._renderTaskQueue.run=function(e){p.call(l._renderTaskQueue,e),t._onBeforeRepaint()},l.on("render",(function(){return t._onAfterRepaint()}));var y=l.fire;for(var h in l.fire=this._fireEvent.bind(this,y),l.on("resize",(function(){t._renderTransform.resize(l.transform.width,l.transform.height)})),l.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),l.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),f)l.on(h,this._onPointerEvent);for(var g in m)l.on(g,this._onCameraEvent);for(var _ in v)l.on(_,this._onEvent);this._map=l},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,r,n=(t=e.transform,(r=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,r);e.painter.transform=n,this._renderTransform=n},t._updateSize=function(e){var t=e.viewState;if(t){var r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,l=n.bearing,u=r.isMoving();u&&(n.cameraElevationReference="sea");var c=s(n,Object.assign({},i(r.transform),e));if(u&&(n.cameraElevationReference="ground"),c&&t){var p=this._deferredEvents;p.move=!0,p.zoom||(p.zoom=o!==n.zoom),p.rotate||(p.rotate=l!==n.bearing),p.pitch||(p.pitch=a!==n.pitch)}return u||s(r.transform,e),c},t._updateSettings=function(e,t){for(var r=this._map,n=!1,o=0,a=y;o<a.length;o++){var i=a[o];if(i in e&&!p(e[i],t[i])){n=!0;var s=r["set"+i[0].toUpperCase()+i.slice(1)];null==s||s(e[i])}}return n},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var r=e.mapStyle,n=void 0===r?d:r,o=e.styleDiffing,a={diff:void 0===o||o};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(c(n),a),!0}return!1},t._updateStyleComponents=function(e,t){var r=this._map,n=!1;return r.isStyleLoaded()&&("light"in e&&r.setLight&&!p(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&r.setFog&&!p(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&r.setTerrain&&!p(e.terrain,t.terrain)&&(e.terrain&&!r.getSource(e.terrain.source)||(n=!0,r.setTerrain(e.terrain)))),n},t._updateHandlers=function(e,t){for(var r=this._map,n=!1,o=0,a=h;o<a.length;o++){var i,s,l=a[o],u=null==(i=e[l])||i;p(u,null==(s=t[l])||s)||(n=!0,u?r[l].enable(u):r[l].disable())}return n},t._queryRenderedFeatures=function(e){var t=this._map,r=this.props.interactiveLayerIds,n=void 0===r?[]:r;try{return t.queryRenderedFeatures(e,{layers:n.filter(t.getLayer.bind(t))})}catch(o){return[]}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var r,n=e.type,o=(null==(r=this._hoveredFeatures)?void 0:r.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=n}else this._hoveredFeatures=null},t._fireEvent=function(e,t,r){var n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in m&&("object"==typeof t&&(t.viewState=i(o)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&t.fire(r);this._internalUpdate=!1;var n=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=n}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function b(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoieGlhb2ppY2hlbiIsImEiOiJja2tyNG5zNjQwNHl4Mm9xYjQxem5yYXh2In0.paOW5xnztNAXDTfOJsmVWA"}catch(r){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}g.savedMaps=[];var _=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function x(e){if(!e)return null;for(var t,r=e.map,n={getMap:function(){return r},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(t){var n=r.transform;r.transform=e.transform;var o=r.project(t);return r.transform=n,o},unproject:function(t){var n=r.transform;r.transform=e.transform;var o=r.unproject(t);return r.transform=n,o},queryTerrainElevation:function(t,n){var o=r.transform;r.transform=e.transform;var a=r.queryTerrainElevation(t,n);return r.transform=o,a}},o=(0,l.Z)(function(e){var t=new Set,r=e;for(;r;){for(var n,o=(0,l.Z)(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}r=Object.getPrototypeOf(r)}return Array.from(t)}(r));!(t=o()).done;){var a=t.value;a in n||_.includes(a)||(n[a]=r[a].bind(r))}return n}const w="undefined"!=typeof document?n.useLayoutEffect:n.useEffect;var S=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var E=n.createContext(null);function k(e,t,r){var a=(0,n.useContext)(o),i=(0,n.useState)(null),s=i[0],u=i[1],c=(0,n.useRef)(),p=(0,n.useRef)({mapLib:null,map:null}).current;(0,n.useEffect)((function(){var t,n=e.mapLib,o=!0;return Promise.resolve(n||r).then((function(r){if(o){if(!r)throw new Error("Invalid mapLib");var n="Map"in r?r:r.default;if(!n.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var r,n=(0,l.Z)(S);!(r=n()).done;){var o=r.value;o in t&&(e[o]=t[o])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(n,e),n.supported&&!n.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=g.reuse(e,c.current)),t||(t=new g(n.Map,e,c.current)),p.map=x(t),p.mapLib=n,u(t),null==a||a.onMapMount(p.map,e.id)}})).catch((function(t){var r=e.onError;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){o=!1,t&&(null==a||a.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),w((function(){s&&s.setProps(e)})),(0,n.useImperativeHandle)(t,(function(){return p.map}),[s]);var d=(0,n.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return n.createElement("div",{id:e.id,ref:c,style:d},s&&n.createElement(E.Provider,{value:p},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}var L=r(3935),C=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function M(e,t){if(e&&t){var r=e.style;for(var n in t){var o=t[n];Number.isFinite(o)&&!C.test(n)?r[n]=o+"px":r[n]=o}}}function P(e){var t=(0,n.useContext)(E),r=t.map,o=t.mapLib,a=(0,n.useRef)({props:e});a.current.props=e;var i=(0,n.useMemo)((function(){var t=!1;n.Children.forEach(e.children,(function(e){e&&(t=!0)}));var r=Object.assign({},e,{element:t?document.createElement("div"):null}),s=new o.Marker(r);return s.setLngLat([e.longitude,e.latitude]),s.getElement().addEventListener("click",(function(e){null==a.current.props.onClick||a.current.props.onClick({type:"click",target:s,originalEvent:e})})),s.on("dragstart",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragStart||a.current.props.onDragStart(t)})),s.on("drag",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDrag||a.current.props.onDrag(t)})),s.on("dragend",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragEnd||a.current.props.onDragEnd(t)})),s}),[]);(0,n.useEffect)((function(){return i.addTo(r.getMap()),function(){i.remove()}}),[]);var s,l,u,c,p,d,f=e.longitude,m=e.latitude,v=e.offset,y=e.style,h=e.draggable,g=void 0!==h&&h,b=e.popup,_=void 0===b?null:b,x=e.rotation,w=void 0===x?0:x,S=e.rotationAlignment,k=void 0===S?"auto":S,C=e.pitchAlignment,P=void 0===C?"auto":C;return(0,n.useEffect)((function(){M(i.getElement(),y)}),[y]),i.getLngLat().lng===f&&i.getLngLat().lat===m||i.setLngLat([f,m]),v&&(s=i.getOffset(),l=v,u=Array.isArray(s)?s[0]:s?s.x:0,c=Array.isArray(s)?s[1]:s?s.y:0,p=Array.isArray(l)?l[0]:l?l.x:0,d=Array.isArray(l)?l[1]:l?l.y:0,u!==p||c!==d)&&i.setOffset(v),i.isDraggable()!==g&&i.setDraggable(g),i.getRotation()!==w&&i.setRotation(w),i.getRotationAlignment()!==k&&i.setRotationAlignment(k),i.getPitchAlignment()!==P&&i.setPitchAlignment(P),i.getPopup()!==_&&i.setPopup(_),(0,L.createPortal)(e.children,i.getElement())}const z=(0,n.memo)(P);function j(e){return new Set(e?e.trim().split(/\s+/):[])}function O(e){var t=(0,n.useContext)(E),r=t.map,o=t.mapLib,a=(0,n.useMemo)((function(){return document.createElement("div")}),[]),i=(0,n.useRef)({props:e});i.current.props=e;var s=(0,n.useMemo)((function(){var t=Object.assign({},e),r=new o.Popup(t);return r.setLngLat([e.longitude,e.latitude]),r.once("open",(function(e){null==i.current.props.onOpen||i.current.props.onOpen(e)})),r}),[]);if((0,n.useEffect)((function(){var e=function(e){null==i.current.props.onClose||i.current.props.onClose(e)};return s.on("close",e),s.setDOMContent(a).addTo(r.getMap()),function(){s.off("close",e),s.isOpen()&&s.remove()}}),[]),(0,n.useEffect)((function(){M(s.getElement(),e.style)}),[e.style]),s.isOpen()&&(s.getLngLat().lng===e.longitude&&s.getLngLat().lat===e.latitude||s.setLngLat([e.longitude,e.latitude]),e.offset&&!p(s.options.offset,e.offset)&&s.setOffset(e.offset),s.options.anchor===e.anchor&&s.options.maxWidth===e.maxWidth||(s.options.anchor=e.anchor,s.setMaxWidth(e.maxWidth)),s.options.className!==e.className)){for(var u,c=j(s.options.className),d=j(e.className),f=(0,l.Z)(c);!(u=f()).done;){var m=u.value;d.has(m)||s.removeClassName(m)}for(var v,y=(0,l.Z)(d);!(v=y()).done;){var h=v.value;c.has(h)||s.addClassName(h)}s.options.className=e.className}return(0,L.createPortal)(e.children,a)}const T=(0,n.memo)(O);const R=function(e,t,r,o){var a=(0,n.useContext)(E),i=(0,n.useMemo)((function(){return e(a)}),[]);return(0,n.useEffect)((function(){var e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,s="function"==typeof r?r:"function"==typeof t?t:null,l=a.map;return l.hasControl(i)||(l.addControl(i,null==e?void 0:e.position),n&&n(a)),function(){s&&s(a),l.hasControl(i)&&l.removeControl(i)}}),[]),i};function A(e){var t=R((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,n.useEffect)((function(){M(t._controlContainer,e.style)}),[e.style]),null}const I=(0,n.memo)(A);function Z(e,t){var r=(0,n.useRef)({props:e}),o=R((function(t){var n=new t.mapLib.GeolocateControl(e),o=n._setupUI;return n._setupUI=function(e){n._container.hasChildNodes()||o(e)},n.on("geolocate",(function(e){null==r.current.props.onGeolocate||r.current.props.onGeolocate(e)})),n.on("error",(function(e){null==r.current.props.onError||r.current.props.onError(e)})),n.on("outofmaxbounds",(function(e){null==r.current.props.onOutOfMaxBounds||r.current.props.onOutOfMaxBounds(e)})),n.on("trackuserlocationstart",(function(e){null==r.current.props.onTrackUserLocationStart||r.current.props.onTrackUserLocationStart(e)})),n.on("trackuserlocationend",(function(e){null==r.current.props.onTrackUserLocationEnd||r.current.props.onTrackUserLocationEnd(e)})),n}),{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,(function(){return o}),[]),(0,n.useEffect)((function(){M(o._container,e.style)}),[e.style]),null}const U=(0,n.memo)((0,n.forwardRef)(Z));function D(e){var t=R((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,n.useEffect)((function(){M(t._container,e.style)}),[e.style]),null}const N=(0,n.memo)(D);function F(e){var t=R((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),r=(0,n.useRef)(e),o=r.current;r.current=e;var a=e.style;return void 0!==e.maxWidth&&e.maxWidth!==o.maxWidth&&(t.options.maxWidth=e.maxWidth),void 0!==e.unit&&e.unit!==o.unit&&t.setUnit(e.unit),(0,n.useEffect)((function(){M(t._container,a)}),[a]),null}const B=(0,n.memo)(F);function $(e,t){if(!e)throw new Error(t)}var W=0;const H=function(e){var t=(0,n.useContext)(E).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-source-"+W++}),[]);(0,n.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return o((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var r,n=null==(r=t.getStyle())?void 0:r.layers;if(n)for(var o,i=(0,l.Z)(n);!(o=i()).done;){var s=o.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var i=t&&t.style&&t.getSource(a);return i?function(e,t,r){$(t.id===r.id,"source id changed"),$(t.type===r.type,"source type changed");var n="",o=0;for(var a in t)"children"===a||"id"===a||p(r[a],t[a])||(n=a,o++);if(o){var i=t.type;if("geojson"===i)e.setData(t.data);else if("image"===i)e.updateImage({url:t.url,coordinates:t.coordinates});else if("setCoordinates"in e&&1===o&&"coordinates"===n)e.setCoordinates(t.coordinates);else if("setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+n)}}(i,e,r.current):i=function(e,t,r){if(e.style&&e.style._loaded){var n=Object.assign({},r);return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,a,e),r.current=e,i&&n.Children.map(e.children,(function(e){return e&&(0,n.cloneElement)(e,{source:a})}))||null};var V=0;const q=function(e){var t=(0,n.useContext)(E).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-layer-"+V++}),[]);if((0,n.useEffect)((function(){if(t){var e=function(){return o((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,r,n){if($(r.id===n.id,"layer id changed"),$(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,i=r.paint,s=void 0===i?{}:i,l=r.filter,u=r.minzoom,c=r.maxzoom,d=r.beforeId;if(d!==n.beforeId&&e.moveLayer(t,d),a!==n.layout){var f=n.layout||{};for(var m in a)p(a[m],f[m])||e.setLayoutProperty(t,m,a[m]);for(var v in f)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(s!==n.paint){var y=n.paint||{};for(var h in s)p(s[h],y[h])||e.setPaintProperty(t,h,s[h]);for(var g in y)s.hasOwnProperty(g)||e.setPaintProperty(t,g,void 0)}p(l,n.filter)||e.setFilter(t,l),u===n.minzoom&&c===n.maxzoom||e.setLayerZoomRange(t,u,c)}}(t,a,e,r.current)}catch(i){console.warn(i)}else!function(e,t,r){if(e.style&&e.style._loaded&&(!("source"in r)||e.getSource(r.source))){var n=Object.assign({},r,{id:t});delete n.beforeId,e.addLayer(n,r.beforeId)}}(t,a,e);return r.current=e,null};var G=Promise.resolve().then(r.t.bind(r,8539,23)),J=n.forwardRef((function(e,t){return k(e,t,G)})),Q=z,X=T,Y=I,K=N,ee=U,te=B;const re=J},2853:e=>{e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')}}]);