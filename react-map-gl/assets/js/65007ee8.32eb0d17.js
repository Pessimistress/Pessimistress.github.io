"use strict";(self.webpackChunkreact_map_gl_website=self.webpackChunkreact_map_gl_website||[]).push([[1528],{3975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>_,contentTitle:()=>h,default:()=>L,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var n=r(7462),o=r(3366),a=r(7294),i=r(3905),s=(r(745),r(5359)),u=r(8539),c=r.n(u);function l(e){return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"3D Terrain"),a.createElement("p",null,"Add 3D terrain and sky to a map."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/7.0-release/examples/terrain",target:"_new"},"View Code \u2197")))}const p=a.memo(l);var d="",f={id:"sky",type:"sky",paint:{"sky-type":"atmosphere","sky-atmosphere-sun":[0,0],"sky-atmosphere-sun-intensity":15}};function m(){return a.createElement(a.Fragment,null,a.createElement(s.ZP,{mapLib:c(),initialViewState:{latitude:32.6141,longitude:-114.34411,zoom:14,bearing:80,pitch:80},maxPitch:85,mapStyle:"mapbox://styles/mapbox/satellite-v9",mapboxAccessToken:d,terrain:{source:"mapbox-dem",exaggeration:1.5}},a.createElement(s.Hw,{id:"mapbox-dem",type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),a.createElement(s.mh,f)),a.createElement(p,null))}var v=["components"],g={},h="Terrain",y={unversionedId:"terrain",id:"terrain",title:"Terrain",description:"",source:"@site/src/examples/terrain.mdx",sourceDirName:".",slug:"/terrain",permalink:"/react-map-gl/examples/terrain",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"examplesSidebar",previous:{title:"Draw Polygon",permalink:"/react-map-gl/examples/draw-polygon"},next:{title:"Geocoder",permalink:"/react-map-gl/examples/geocoder"}},_={},b=[],E={toc:b},x="wrapper";function L(e){var t=e.components,r=(0,o.Z)(e,v);return(0,i.kt)(x,(0,n.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terrain"},"Terrain"),(0,i.kt)(m,{mdxType:"App"}))}L.isMDXComponent=!0},5359:(e,t,r)=>{r.d(t,{ot:()=>D,$j:()=>F,mh:()=>Q,D5:()=>C,Jx:()=>R,Pv:()=>B,GI:()=>j,jf:()=>H,Hw:()=>G,ZP:()=>C,PE:()=>A});var n=r(7294),o=n.createContext(null);var a=r(1202);function i(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function s(e,t){var r=t.viewState||t,n=!1;if("longitude"in r&&"latitude"in r){var o=e.center;e.center=new o.constructor(r.longitude,r.latitude),n=n||o!==e.center}if("zoom"in r){var a=e.zoom;e.zoom=r.zoom,n=n||a!==e.zoom}if("bearing"in r){var i=e.bearing;e.bearing=r.bearing,n=n||i!==e.bearing}if("pitch"in r){var s=e.pitch;e.pitch=r.pitch,n=n||s!==e.pitch}return r.padding&&!e.isPaddingEqual(r.padding)&&(n=!0,e.padding=r.padding),n}var u=r(7855),c=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function l(e){if(!e)return null;if("string"==typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;for(var t,r={},n=(0,u.Z)(e.layers);!(t=n()).done;){var o=t.value;r[o.id]=o}var a=e.layers.map((function(e){var t=r[e.ref],n=null;if("interactive"in e&&delete(n=Object.assign({},e)).interactive,t){delete(n=n||Object.assign({},e)).ref;for(var o,a=(0,u.Z)(c);!(o=a()).done;){var i=o.value;i in t&&(n[i]=t[i])}}return n||e}));return Object.assign({},e,{layers:a})}function p(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!p(e[r],t[r]))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0,i=n;a<i.length;a++){var s=i[a];if(!t.hasOwnProperty(s))return!1;if(!p(e[s],t[s]))return!1}return!0}return!1}var d={version:8,sources:{},layers:[]},f={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},m={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},v={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},g=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"],y=function(){function e(e,t,r){var n=this;this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=function(e){var t=n.props[v[e.type]];t?t(e):"error"===e.type&&console.error(e.error)},this._onPointerEvent=function(e){"mousemove"!==e.type&&"mouseout"!==e.type||n._updateHover(e);var t=n.props[f[e.type]];t&&(n.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type&&(e.features=n._hoveredFeatures||n._queryRenderedFeatures(e.point)),t(e),delete e.features)},this._onCameraEvent=function(e){if(!n._internalUpdate){var t=n.props[m[e.type]];t&&t(e)}e.type in n._deferredEvents&&(n._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(r)}var t=e.prototype;return t.setProps=function(e){var t=this.props;this.props=e;var r=this._updateSettings(e,t);r&&this._createShadowTransform(this._map);var n=this._updateSize(e),o=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(r||n||o&&!this._map.isMoving())&&this.redraw()},e.reuse=function(t,r){var n=e.savedMaps.pop();if(!n)return null;var o=n.map,a=o.getContainer();for(r.className=a.className;a.childNodes.length>0;)r.appendChild(a.childNodes[0]);o._container=r;var i=o._resizeObserver;i&&(i.disconnect(),i.observe(r)),n.setProps(Object.assign({},t,{styleDiffing:!1})),o.resize();var s=t.initialViewState;return s&&(s.bounds?o.fitBounds(s.bounds,Object.assign({},s.fitBoundsOptions,{duration:0})):n._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",(function(){return o.fire("load")})),o._update(),n},t._initialize=function(e){var t=this,r=this.props,n=r.mapStyle,o=void 0===n?d:n,a=Object.assign({},r,r.initialViewState,{accessToken:r.mapboxAccessToken||_()||null,container:e,style:l(o)}),i=a.initialViewState||a.viewState||a;if(Object.assign(a,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),r.gl){var s=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(){return HTMLCanvasElement.prototype.getContext=s,r.gl}}var u=new this._MapClass(a);i.padding&&u.setPadding(i.padding),r.cursor&&(u.getCanvas().style.cursor=r.cursor),this._createShadowTransform(u);var c=u._render;u._render=function(e){t._inRender=!0,c.call(u,e),t._inRender=!1};var p=u._renderTaskQueue.run;u._renderTaskQueue.run=function(e){p.call(u._renderTaskQueue,e),t._onBeforeRepaint()},u.on("render",(function(){return t._onAfterRepaint()}));var g=u.fire;for(var h in u.fire=this._fireEvent.bind(this,g),u.on("resize",(function(){t._renderTransform.resize(u.transform.width,u.transform.height)})),u.on("styledata",(function(){return t._updateStyleComponents(t.props,{})})),u.on("sourcedata",(function(){return t._updateStyleComponents(t.props,{})})),f)u.on(h,this._onPointerEvent);for(var y in m)u.on(y,this._onCameraEvent);for(var b in v)u.on(b,this._onEvent);this._map=u},t.recycle=function(){var t=this.map.getContainer().querySelector("[mapboxgl-children]");null==t||t.remove(),e.savedMaps.push(this)},t.destroy=function(){this._map.remove()},t.redraw=function(){var e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())},t._createShadowTransform=function(e){var t,r,n=(t=e.transform,(r=t.clone()).pixelsToGLUnits=t.pixelsToGLUnits,r);e.painter.transform=n,this._renderTransform=n},t._updateSize=function(e){var t=e.viewState;if(t){var r=this._map;if(t.width!==r.transform.width||t.height!==r.transform.height)return r.resize(),!0}return!1},t._updateViewState=function(e,t){if(this._internalUpdate)return!1;var r=this._map,n=this._renderTransform,o=n.zoom,a=n.pitch,u=n.bearing,c=r.isMoving();c&&(n.cameraElevationReference="sea");var l=s(n,Object.assign({},i(r.transform),e));if(c&&(n.cameraElevationReference="ground"),l&&t){var p=this._deferredEvents;p.move=!0,p.zoom||(p.zoom=o!==n.zoom),p.rotate||(p.rotate=u!==n.bearing),p.pitch||(p.pitch=a!==n.pitch)}return c||s(r.transform,e),l},t._updateSettings=function(e,t){for(var r=this._map,n=!1,o=0,a=g;o<a.length;o++){var i=a[o];i in e&&!p(e[i],t[i])&&(n=!0,r["set"+i[0].toUpperCase()+i.slice(1)](e[i]))}return n},t._updateStyle=function(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){var r=e.mapStyle,n=void 0===r?d:r,o=e.styleDiffing,a={diff:void 0===o||o};return"localIdeographFontFamily"in e&&(a.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(l(n),a),!0}return!1},t._updateStyleComponents=function(e,t){var r=this._map,n=!1;return r.style.loaded()&&("light"in e&&!p(e.light,t.light)&&(n=!0,r.setLight(e.light)),"fog"in e&&!p(e.fog,t.fog)&&(n=!0,r.setFog(e.fog)),"terrain"in e&&!p(e.terrain,t.terrain)&&(e.terrain&&!r.getSource(e.terrain.source)||(n=!0,r.setTerrain(e.terrain)))),n},t._updateHandlers=function(e,t){for(var r=this._map,n=!1,o=0,a=h;o<a.length;o++){var i,s,u=a[o],c=null==(i=e[u])||i;p(c,null==(s=t[u])||s)||(n=!0,c?r[u].enable(c):r[u].disable())}return n},t._queryRenderedFeatures=function(e){var t=this._map,r=this.props.interactiveLayerIds,n=void 0===r?[]:r;try{return t.queryRenderedFeatures(e,{layers:n.filter(t.getLayer.bind(t))})}catch(o){return[]}},t._updateHover=function(e){var t=this.props;if(t.interactiveLayerIds&&(t.onMouseMove||t.onMouseEnter||t.onMouseLeave)){var r,n=e.type,o=(null==(r=this._hoveredFeatures)?void 0:r.length)>0,a=this._queryRenderedFeatures(e.point),i=a.length>0;!i&&o&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!o&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=n}else this._hoveredFeatures=null},t._fireEvent=function(e,t,r){var n=this._map,o=n.transform,a="string"==typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in m&&("object"==typeof t&&(t.viewState=i(o)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,r),n.transform=o,n):(e.call(n,t,r),n)},t._onBeforeRepaint=function(){var e=this,t=this._map;for(var r in this._internalUpdate=!0,this._deferredEvents)this._deferredEvents[r]&&t.fire(r);this._internalUpdate=!1;var n=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=function(){e._map.transform=n}},(0,a.Z)(e,[{key:"map",get:function(){return this._map}},{key:"transform",get:function(){return this._renderTransform}}]),e}();function _(){var e=null;if("undefined"!=typeof location){var t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||"pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pwY3owbGFxMDVwNTNxcXdwMms2OWtzbiJ9.1PPVl0VLUQgqrosrI2nUhg"}catch(r){}try{e=e||process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(n){}return e}y.savedMaps=[];var b=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function E(e,t){if(!e)return null;for(var r,n=e.map,o={getMap:function(){return n},getCenter:function(){return e.transform.center},getZoom:function(){return e.transform.zoom},getBearing:function(){return e.transform.bearing},getPitch:function(){return e.transform.pitch},getPadding:function(){return e.transform.padding},getBounds:function(){return e.transform.getBounds()},project:function(r){return e.transform.locationPoint(t.LngLat.convert(r))},unproject:function(r){return e.transform.pointLocation(t.Point.convert(r))},queryTerrainElevation:function(t,r){var o=n.transform;n.transform=e.transform;var a=n.queryTerrainElevation(t,r);return n.transform=o,a}},a=(0,u.Z)(function(e){var t=new Set,r=e;for(;r;){for(var n,o=(0,u.Z)(Object.getOwnPropertyNames(r));!(n=o()).done;){var a=n.value;"_"!==a[0]&&"function"==typeof e[a]&&"fire"!==a&&"setEventedParent"!==a&&t.add(a)}r=Object.getPrototypeOf(r)}return Array.from(t)}(n));!(r=a()).done;){var i=r.value;i in o||b.includes(i)||(o[i]=n[i].bind(n))}return o}const x="undefined"!=typeof document?n.useLayoutEffect:n.useEffect;var L=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];var S=n.createContext(null);function w(e,t){var r=(0,n.useContext)(o),a=(0,n.useState)(null),i=a[0],s=a[1],c=(0,n.useRef)(),l=(0,n.useRef)({mapLib:null,map:null}).current;(0,n.useEffect)((function(){var t,n=e.mapLib,o=!0;return Promise.resolve(n).then((function(n){if(o){if(!n)throw new Error("Invalid mapLib");var a="Map"in n?n:n.default;if(!a.Map)throw new Error("Invalid mapLib");if(function(e,t){for(var r,n=(0,u.Z)(L);!(r=n()).done;){var o=r.value;o in t&&(e[o]=t[o])}var a=t.RTLTextPlugin,i=void 0===a?"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js":a;i&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(i,(function(e){e&&console.error(e)}),!1)}(a,e),a.supported&&!a.supported(e))throw new Error("Map is not supported by this browser");e.reuseMaps&&(t=y.reuse(e,c.current)),t||(t=new y(a.Map,e,c.current)),l.map=E(t,a),l.mapLib=a,s(t),null==r||r.onMapMount(l.map,e.id)}})).catch((function(t){var r=e.onError;r?r({type:"error",target:null,originalEvent:null,error:t}):console.error(t)})),function(){o=!1,t&&(null==r||r.onMapUnmount(e.id),e.reuseMaps?t.recycle():t.destroy())}}),[]),x((function(){i&&i.setProps(e)})),(0,n.useImperativeHandle)(t,(function(){return l.map}),[i]);var p=(0,n.useMemo)((function(){return Object.assign({position:"relative",width:"100%",height:"100%"},e.style)}),[e.style]);return n.createElement("div",{id:e.id,ref:c,style:p},i&&n.createElement(S.Provider,{value:l},n.createElement("div",{"mapboxgl-children":"",style:{height:"100%"}},e.children)))}const C=(0,n.forwardRef)(w);var M=r(3935),P=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function T(e,t){if(e&&t){var r=e.style;for(var n in t){var o=t[n];Number.isFinite(o)&&!P.test(n)?r[n]=o+"px":r[n]=o}}}function k(e){var t=(0,n.useContext)(S),r=t.map,o=t.mapLib,a=(0,n.useRef)({props:e});a.current.props=e;var i=(0,n.useMemo)((function(){var t=!1;n.Children.forEach(e.children,(function(e){e&&(t=!0)}));var r=Object.assign({},e,{element:t?document.createElement("div"):null}),s=new o.Marker(r).setLngLat([e.longitude,e.latitude]);return s.getElement().addEventListener("click",(function(e){null==a.current.props.onClick||a.current.props.onClick({type:"click",target:s,originalEvent:e})})),s.on("dragstart",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragStart||a.current.props.onDragStart(t)})),s.on("drag",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDrag||a.current.props.onDrag(t)})),s.on("dragend",(function(e){var t=e;t.lngLat=i.getLngLat(),null==a.current.props.onDragEnd||a.current.props.onDragEnd(t)})),s}),[]);(0,n.useEffect)((function(){return i.addTo(r.getMap()),function(){i.remove()}}),[]);var s,u,c,l,p,d,f=e.longitude,m=e.latitude,v=e.offset,g=e.style,h=e.draggable,y=void 0!==h&&h,_=e.popup,b=void 0===_?null:_,E=e.rotation,x=void 0===E?0:E,L=e.rotationAlignment,w=void 0===L?"auto":L,C=e.pitchAlignment,P=void 0===C?"auto":C;return(0,n.useEffect)((function(){T(i.getElement(),g)}),[g]),i.getLngLat().lng===f&&i.getLngLat().lat===m||i.setLngLat([f,m]),v&&(s=i.getOffset(),u=v,c=Array.isArray(s)?s[0]:s?s.x:0,l=Array.isArray(s)?s[1]:s?s.y:0,p=Array.isArray(u)?u[0]:u?u.x:0,d=Array.isArray(u)?u[1]:u?u.y:0,c!==p||l!==d)&&i.setOffset(v),i.isDraggable()!==y&&i.setDraggable(y),i.getRotation()!==x&&i.setRotation(x),i.getRotationAlignment()!==w&&i.setRotationAlignment(w),i.getPitchAlignment()!==P&&i.setPitchAlignment(P),i.getPopup()!==b&&i.setPopup(b),(0,M.createPortal)(e.children,i.getElement())}const R=n.memo(k);function z(e){return new Set(e?e.trim().split(/\s+/):[])}function O(e){var t=(0,n.useContext)(S),r=t.map,o=t.mapLib,a=(0,n.useMemo)((function(){return document.createElement("div")}),[]),i=(0,n.useRef)({props:e});i.current.props=e;var s=(0,n.useMemo)((function(){var t=Object.assign({},e),r=new o.Popup(t).setLngLat([e.longitude,e.latitude]);return r.once("open",(function(e){null==i.current.props.onOpen||i.current.props.onOpen(e)})),r}),[]);if((0,n.useEffect)((function(){var e=function(e){null==i.current.props.onClose||i.current.props.onClose(e)};return s.on("close",e),s.setDOMContent(a).addTo(r.getMap()),function(){s.off("close",e),s.isOpen()&&s.remove()}}),[]),(0,n.useEffect)((function(){T(s.getElement(),e.style)}),[e.style]),s.isOpen()&&(s.getLngLat().lng===e.longitude&&s.getLngLat().lat===e.latitude||s.setLngLat([e.longitude,e.latitude]),e.offset&&!p(s.options.offset,e.offset)&&s.setOffset(e.offset),s.options.anchor===e.anchor&&s.options.maxWidth===e.maxWidth||(s.options.anchor=e.anchor,s.setMaxWidth(e.maxWidth)),s.options.className!==e.className)){for(var c,l=z(s.options.className),d=z(e.className),f=(0,u.Z)(l);!(c=f()).done;){var m=c.value;d.has(m)||s.removeClassName(m)}for(var v,g=(0,u.Z)(d);!(v=g()).done;){var h=v.value;l.has(h)||s.addClassName(h)}s.options.className=e.className}return(0,M.createPortal)(e.children,a)}const j=n.memo(O);const A=function(e,t,r,o){var a=(0,n.useContext)(S),i=(0,n.useMemo)((function(){return e(a)}),[]);return(0,n.useEffect)((function(){var e=o||r||t,n="function"==typeof t&&"function"==typeof r?t:null,s="function"==typeof r?r:"function"==typeof t?t:null,u=a.map;return u.hasControl(i)||(u.addControl(i,null==e?void 0:e.position),n&&n(a)),function(){s&&s(a),u.hasControl(i)&&u.removeControl(i)}}),[]),i};function Z(e){var t=A((function(t){return new t.mapLib.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})}),{position:e.position});return(0,n.useEffect)((function(){T(t._controlContainer,e.style)}),[e.style]),null}const D=n.memo(Z);function I(e,t){var r=(0,n.useRef)({props:e}),o=A((function(t){var n=new t.mapLib.GeolocateControl(e),o=n._setupUI;return n._setupUI=function(e){n._container.hasChildNodes()||o(e)},n.on("geolocate",(function(e){null==r.current.props.onGeolocate||r.current.props.onGeolocate(e)})),n.on("error",(function(e){null==r.current.props.onError||r.current.props.onError(e)})),n.on("outofmaxbounds",(function(e){null==r.current.props.onOutOfMaxBounds||r.current.props.onOutOfMaxBounds(e)})),n.on("trackuserlocationstart",(function(e){null==r.current.props.onTrackUserLocationStart||r.current.props.onTrackUserLocationStart(e)})),n.on("trackuserlocationend",(function(e){null==r.current.props.onTrackUserLocationEnd||r.current.props.onTrackUserLocationEnd(e)})),n}),{position:e.position});return r.current.props=e,(0,n.useImperativeHandle)(t,(function(){return{trigger:function(){return o.trigger()}}}),[]),(0,n.useEffect)((function(){T(o._container,e.style)}),[e.style]),null}var U=(0,n.forwardRef)(I);const F=n.memo(U);function N(e){var t=A((function(t){return new t.mapLib.NavigationControl(e)}),{position:e.position});return(0,n.useEffect)((function(){T(t._container,e.style)}),[e.style]),null}const B=n.memo(N);function W(e){var t=A((function(t){return new t.mapLib.ScaleControl(e)}),{position:e.position}),r=e.style,o=e.unit,a=void 0===o?"metric":o,i=e.maxWidth,s=void 0===i?100:i;return t.options.unit===a&&t.options.maxWidth===s||(t.options.maxWidth=s,t.setUnit(a)),(0,n.useEffect)((function(){T(t._container,r)}),[r]),null}const H=n.memo(W);function V(e,t){if(!e)throw new Error(t)}var q=0;const G=function(e){var t=(0,n.useContext)(S).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-source-"+q++}),[]);(0,n.useEffect)((function(){if(t){var e=function(){return setTimeout((function(){return o((function(e){return e+1}))}),0)};return t.on("styledata",e),e(),function(){if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(a)){var r,n=null==(r=t.getStyle())?void 0:r.layers;if(n)for(var o,i=(0,u.Z)(n);!(o=i()).done;){var s=o.value;s.source===a&&t.removeLayer(s.id)}t.removeSource(a)}}}}),[t]);var i=t&&t.style&&t.getSource(a);return i?function(e,t,r){V(t.id===r.id,"source id changed"),V(t.type===r.type,"source type changed");var n="",o=0;for(var a in t)"children"===a||"id"===a||p(r[a],t[a])||(n=a,o++);if(o){var i=t.type;if("geojson"===i)e.setData(t.data);else if("image"===i)e.updateImage({url:t.url,coordinates:t.coordinates});else if("canvas"!==i&&"video"!==i||1!==o||"coordinates"!==n)if("vector"===i&&"setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn("Unable to update <Source> prop: "+n);else e.setCoordinates(t.coordinates)}}(i,e,r.current):i=function(e,t,r){if(e.style&&e.style._loaded){var n=Object.assign({},r);return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,a,e),r.current=e,i&&n.Children.map(e.children,(function(e){return e&&(0,n.cloneElement)(e,{source:a})}))||null};var J=0;const Q=function(e){var t=(0,n.useContext)(S).map.getMap(),r=(0,n.useRef)(e),o=(0,n.useState)(0)[1],a=(0,n.useMemo)((function(){return e.id||"jsx-layer-"+J++}),[]);if((0,n.useEffect)((function(){if(t){var e=function(){return o((function(e){return e+1}))};return t.on("styledata",e),e(),function(){t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(a)&&t.removeLayer(a)}}}),[t]),t&&t.style&&t.getLayer(a))try{!function(e,t,r,n){if(V(r.id===n.id,"layer id changed"),V(r.type===n.type,"layer type changed"),"custom"!==r.type&&"custom"!==n.type){var o=r.layout,a=void 0===o?{}:o,i=r.paint,s=void 0===i?{}:i,u=r.filter,c=r.minzoom,l=r.maxzoom,d=r.beforeId;if(d!==n.beforeId&&e.moveLayer(t,d),a!==n.layout){var f=n.layout||{};for(var m in a)p(a[m],f[m])||e.setLayoutProperty(t,m,a[m]);for(var v in f)a.hasOwnProperty(v)||e.setLayoutProperty(t,v,void 0)}if(s!==n.paint){var g=n.paint||{};for(var h in s)p(s[h],g[h])||e.setPaintProperty(t,h,s[h]);for(var y in g)s.hasOwnProperty(y)||e.setPaintProperty(t,y,void 0)}p(u,n.filter)||e.setFilter(t,u),c===n.minzoom&&l===n.maxzoom||e.setLayerZoomRange(t,c,l)}}(t,a,e,r.current)}catch(i){console.warn(i)}else!function(e,t,r){if(e.style&&e.style._loaded&&(!("source"in r)||e.getSource(r.source))){var n=Object.assign({},r,{id:t});delete n.beforeId,e.addLayer(n,r.beforeId)}}(t,a,e);return r.current=e,null}}}]);