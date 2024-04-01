"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1863],{3905:(t,e,i)=>{i.d(e,{Zo:()=>a,kt:()=>d});var o=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var h=o.createContext({}),l=function(t){var e=o.useContext(h),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},a=function(t){var e=l(t.components);return o.createElement(h.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,h=t.parentName,a=c(t,["components","mdxType","originalType","parentName"]),u=l(i),g=n,d=u["".concat(h,".").concat(g)]||u[g]||p[g]||r;return i?o.createElement(d,s(s({ref:e},a),{},{components:i})):o.createElement(d,s({ref:e},a))}));function d(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,s=new Array(r);s[0]=g;var c={};for(var h in e)hasOwnProperty.call(e,h)&&(c[h]=e[h]);c.originalType=t,c[u]="string"==typeof t?t:n,s[1]=c;for(var l=2;l<r;l++)s[l]=i[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}g.displayName="MDXCreateElement"},20745:(t,e,i)=>{var o=i(73935);e.s=o.createRoot,o.hydrateRoot},24808:(t,e,i)=>{i.d(e,{D5:()=>s});var o=i(67294),n=i(83156);i(9547),i(38826),i(81255),i(37442),i(4432),i(6415),i(90552),i(33855),i(46176),i(38824),i(31592);const r=i.e(4613).then(i.t.bind(i,24613,23)),s=o.forwardRef((function(t,e){return(0,n.Z)(t,e,r)}))},41708:(t,e,i)=>{i.d(e,{Z:()=>r});var o=i(60326),n=i(67532);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:e={},indices:i=null,vertexCount:r=null}=t;this.id=t.id||(0,o.h)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[o,s]of Object.entries(e)){const t=ArrayBuffer.isView(s)?{value:s}:s;(0,n.h)(ArrayBuffer.isView(t.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||t.size||(t.size=3),"indices"===o?((0,n.h)(!this.indices),this.indices=t):this.attributes[o]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const o of Object.values(t)){const{value:t,size:e,constant:n}=o;!n&&t&&e>=1&&(i=Math.min(i,t.length/e))}return(0,n.h)(Number.isFinite(i)),i}}},35300:(t,e,i)=>{i.d(e,{q:()=>n});const o=new Float32Array([0,1,1,1]),n={name:"picking",vs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nout vec4 picking_vRGBcolor_Avalid;\nvec3 picking_normalizeColor(vec3 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nvec4 picking_normalizeColor(vec4 color) {\nreturn picking.useFloatColors > 0.5 ? color : color / 255.0;\n}\nbool picking_isColorZero(vec3 color) {\nreturn dot(color, vec3(1.0)) < 0.00001;\n}\nbool picking_isColorValid(vec3 color) {\nreturn dot(color, vec3(1.0)) > 0.00001;\n}\nbool isVertexHighlighted(vec3 vertexColor) {\nvec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);\nreturn\nbool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));\n}\nvoid picking_setPickingColor(vec3 pickingColor) {\npickingColor = picking_normalizeColor(pickingColor);\nif (bool(picking.isActive)) {\npicking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));\n     if (!bool(picking.isAttribute)) {\n        picking_vRGBcolor_Avalid.rgb = pickingColor;\n     }\n} else {\npicking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));\n}\n}\nvoid picking_setPickingAttribute(float value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.r = value;\n}\n}\nvoid picking_setPickingAttribute(vec2 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rg = value;\n}\n}\nvoid picking_setPickingAttribute(vec3 value) {\nif (bool(picking.isAttribute)) {\npicking_vRGBcolor_Avalid.rgb = value;\n}\n}\n",fs:"uniform pickingUniforms {\nfloat isActive;\nfloat isAttribute;\nfloat isHighlightActive;\nfloat useFloatColors;\nvec3 highlightedObjectColor;\nvec4 highlightColor;\n} picking;\nin vec4 picking_vRGBcolor_Avalid;\nvec4 picking_filterHighlightColor(vec4 color) {\nif (picking.isActive > 0.5) {\nreturn color;\n}\nbool selected = bool(picking_vRGBcolor_Avalid.a);\nif (selected) {\nfloat highLightAlpha = picking.highlightColor.a;\nfloat blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);\nfloat highLightRatio = highLightAlpha / blendedAlpha;\nvec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);\nreturn vec4(blendedRGB, blendedAlpha);\n} else {\nreturn color;\n}\n}\nvec4 picking_filterPickingColor(vec4 color) {\nif (bool(picking.isActive)) {\nif (picking_vRGBcolor_Avalid.a == 0.0) {\ndiscard;\n}\nreturn picking_vRGBcolor_Avalid;\n}\nreturn color;\n}\nvec4 picking_filterColor(vec4 color) {\nvec4 highlightColor = picking_filterHighlightColor(color);\nreturn picking_filterPickingColor(highlightColor);\n}\n",uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:o},getUniforms:function(t={},e){const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},14488:(t,e,i)=>{i.d(e,{Z:()=>v});const o=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];class n{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");const[e,i]=new Uint8Array(t,0,2);if(219!==e)throw new Error("Data does not appear to be in a KDBush format.");const r=i>>4;if(1!==r)throw new Error(`Got v${r} data when expected v1.`);const s=o[15&i];if(!s)throw new Error("Unrecognized array type.");const[c]=new Uint16Array(t,2,1),[h]=new Uint32Array(t,4,1);return new n(h,c,s,t)}constructor(t,e=64,i=Float64Array,n){if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`);this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=i,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;const r=o.indexOf(this.ArrayType),s=2*t*this.ArrayType.BYTES_PER_ELEMENT,c=t*this.IndexArrayType.BYTES_PER_ELEMENT,h=(8-c%8)%8;if(r<0)throw new Error(`Unexpected typed array class: ${i}.`);n&&n instanceof ArrayBuffer?(this.data=n,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+c+h,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+s+c+h),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+c+h,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+r]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t)}add(t,e){const i=this._pos>>1;return this.ids[i]=i,this.coords[this._pos++]=t,this.coords[this._pos++]=e,i}finish(){const t=this._pos>>1;if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`);return r(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,i,o){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:n,coords:r,nodeSize:s}=this,c=[0,n.length-1,0],h=[];for(;c.length;){const l=c.pop()||0,a=c.pop()||0,u=c.pop()||0;if(a-u<=s){for(let s=u;s<=a;s++){const c=r[2*s],l=r[2*s+1];c>=t&&c<=i&&l>=e&&l<=o&&h.push(n[s])}continue}const p=u+a>>1,g=r[2*p],d=r[2*p+1];g>=t&&g<=i&&d>=e&&d<=o&&h.push(n[p]),(0===l?t<=g:e<=d)&&(c.push(u),c.push(p-1),c.push(1-l)),(0===l?i>=g:o>=d)&&(c.push(p+1),c.push(a),c.push(1-l))}return h}within(t,e,i){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");const{ids:o,coords:n,nodeSize:r}=this,s=[0,o.length-1,0],c=[],h=i*i;for(;s.length;){const a=s.pop()||0,u=s.pop()||0,p=s.pop()||0;if(u-p<=r){for(let i=p;i<=u;i++)l(n[2*i],n[2*i+1],t,e)<=h&&c.push(o[i]);continue}const g=p+u>>1,d=n[2*g],f=n[2*g+1];l(d,f,t,e)<=h&&c.push(o[g]),(0===a?t-i<=d:e-i<=f)&&(s.push(p),s.push(g-1),s.push(1-a)),(0===a?t+i>=d:e+i>=f)&&(s.push(g+1),s.push(u),s.push(1-a))}return c}}function r(t,e,i,o,n,c){if(n-o<=i)return;const h=o+n>>1;s(t,e,h,o,n,c),r(t,e,i,o,h-1,1-c),r(t,e,i,h+1,n,1-c)}function s(t,e,i,o,n,r){for(;n>o;){if(n-o>600){const c=n-o+1,h=i-o+1,l=Math.log(c),a=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*a*(c-a)/c)*(h-c/2<0?-1:1);s(t,e,i,Math.max(o,Math.floor(i-h*a/c+u)),Math.min(n,Math.floor(i+(c-h)*a/c+u)),r)}const h=e[2*i+r];let l=o,a=n;for(c(t,e,o,i),e[2*n+r]>h&&c(t,e,o,n);l<a;){for(c(t,e,l,a),l++,a--;e[2*l+r]<h;)l++;for(;e[2*a+r]>h;)a--}e[2*o+r]===h?c(t,e,o,a):(a++,c(t,e,a,n)),a<=i&&(o=a+1),i<=a&&(n=a-1)}}function c(t,e,i,o){h(t,i,o),h(e,2*i,2*o),h(e,2*i+1,2*o+1)}function h(t,e,i){const o=t[e];t[e]=t[i],t[i]=o}function l(t,e,i,o){const n=t-i,r=e-o;return n*n+r*r}const a={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},u=Math.fround||(p=new Float32Array(1),t=>(p[0]=+t,p[0]));var p;const g=3,d=5,f=6;class v{constructor(t){this.options=Object.assign(Object.create(a),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){const{log:e,minZoom:i,maxZoom:o}=this.options;e&&console.time("total time");const n=`prepare ${t.length} points`;e&&console.time(n),this.points=t;const r=[];for(let c=0;c<t.length;c++){const e=t[c];if(!e.geometry)continue;const[i,o]=e.geometry.coordinates,n=u(b(i)),s=u(A(o));r.push(n,s,1/0,c,-1,1),this.options.reduce&&r.push(0)}let s=this.trees[o+1]=this._createTree(r);e&&console.timeEnd(n);for(let c=o;c>=i;c--){const t=+Date.now();s=this.trees[c]=this._createTree(this._cluster(s,c)),e&&console.log("z%d: %d clusters in %dms",c,s.numItems,+Date.now()-t)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let i=((t[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[1]));let n=180===t[2]?180:((t[2]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)i=-180,n=180;else if(i>n){const t=this.getClusters([i,o,180,r],e),s=this.getClusters([-180,o,n,r],e);return t.concat(s)}const s=this.trees[this._limitZoom(e)],c=s.range(b(i),A(r),b(n),A(o)),h=s.data,l=[];for(const a of c){const t=this.stride*a;l.push(h[t+d]>1?m(h,t,this.clusterProps):this.points[h[t+g]])}return l}getChildren(t){const e=this._getOriginId(t),i=this._getOriginZoom(t),o="No cluster with the specified id.",n=this.trees[i];if(!n)throw new Error(o);const r=n.data;if(e*this.stride>=r.length)throw new Error(o);const s=this.options.radius/(this.options.extent*Math.pow(2,i-1)),c=r[e*this.stride],h=r[e*this.stride+1],l=n.within(c,h,s),a=[];for(const u of l){const e=u*this.stride;r[e+4]===t&&a.push(r[e+d]>1?m(r,e,this.clusterProps):this.points[r[e+g]])}if(0===a.length)throw new Error(o);return a}getLeaves(t,e,i){e=e||10,i=i||0;const o=[];return this._appendLeaves(o,t,e,i,0),o}getTile(t,e,i){const o=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:r,radius:s}=this.options,c=s/r,h=(i-c)/n,l=(i+1+c)/n,a={features:[]};return this._addTileFeatures(o.range((e-c)/n,h,(e+1+c)/n,l),o.data,e,i,n,a),0===e&&this._addTileFeatures(o.range(1-c/n,h,1,l),o.data,n,i,n,a),e===n-1&&this._addTileFeatures(o.range(0,h,c/n,l),o.data,-1,i,n,a),a.features.length?a:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const i=this.getChildren(t);if(e++,1!==i.length)break;t=i[0].properties.cluster_id}return e}_appendLeaves(t,e,i,o,n){const r=this.getChildren(e);for(const s of r){const e=s.properties;if(e&&e.cluster?n+e.point_count<=o?n+=e.point_count:n=this._appendLeaves(t,e.cluster_id,i,o,n):n<o?n++:t.push(s),t.length===i)break}return n}_createTree(t){const e=new n(t.length/this.stride|0,this.options.nodeSize,Float32Array);for(let i=0;i<t.length;i+=this.stride)e.add(t[i],t[i+1]);return e.finish(),e.data=t,e}_addTileFeatures(t,e,i,o,n,r){for(const s of t){const t=s*this.stride,c=e[t+d]>1;let h,l,a;if(c)h=y(e,t,this.clusterProps),l=e[t],a=e[t+1];else{const i=this.points[e[t+g]];h=i.properties;const[o,n]=i.geometry.coordinates;l=b(o),a=A(n)}const u={type:1,geometry:[[Math.round(this.options.extent*(l*n-i)),Math.round(this.options.extent*(a*n-o))]],tags:h};let p;p=c||this.options.generateId?e[t+g]:this.points[e[t+g]].id,void 0!==p&&(u.id=p),r.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const{radius:i,extent:o,reduce:n,minPoints:r}=this.options,s=i/(o*Math.pow(2,e)),c=t.data,h=[],l=this.stride;for(let a=0;a<c.length;a+=l){if(c[a+2]<=e)continue;c[a+2]=e;const i=c[a],o=c[a+1],u=t.within(c[a],c[a+1],s),p=c[a+d];let g=p;for(const t of u){const i=t*l;c[i+2]>e&&(g+=c[i+d])}if(g>p&&g>=r){let t,r=i*p,s=o*p,f=-1;const v=((a/l|0)<<5)+(e+1)+this.points.length;for(const i of u){const o=i*l;if(c[o+2]<=e)continue;c[o+2]=e;const h=c[o+d];r+=c[o]*h,s+=c[o+1]*h,c[o+4]=v,n&&(t||(t=this._map(c,a,!0),f=this.clusterProps.length,this.clusterProps.push(t)),n(t,this._map(c,o)))}c[a+4]=v,h.push(r/g,s/g,1/0,v,-1,g),n&&h.push(f)}else{for(let t=0;t<l;t++)h.push(c[a+t]);if(g>1)for(const t of u){const i=t*l;if(!(c[i+2]<=e)){c[i+2]=e;for(let t=0;t<l;t++)h.push(c[i+t])}}}}return h}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,i){if(t[e+d]>1){const o=this.clusterProps[t[e+f]];return i?Object.assign({},o):o}const o=this.points[t[e+g]].properties,n=this.options.map(o);return i&&n===o?Object.assign({},n):n}}function m(t,e,i){return{type:"Feature",id:t[e+g],properties:y(t,e,i),geometry:{type:"Point",coordinates:[(o=t[e],360*(o-.5)),_(t[e+1])]}};var o}function y(t,e,i){const o=t[e+d],n=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?Math.round(o/100)/10+"k":o,r=t[e+f],s=-1===r?{}:Object.assign({},i[r]);return Object.assign(s,{cluster:!0,cluster_id:t[e+g],point_count:o,point_count_abbreviated:n})}function b(t){return t/360+.5}function A(t){const e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return i<0?0:i>1?1:i}function _(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}}}]);