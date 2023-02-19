"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9383],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1314:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(87462),r=(i(67294),i(3905));const a={},o="Viewports",s={unversionedId:"developer-guide/viewports",id:"developer-guide/viewports",title:"Viewports",description:"If you are new to deck.gl's View and Viewport classes it is suggested that you start by reading up on Views before learning about Viewports. Most applications start by using View classes.",source:"@site/../docs/developer-guide/viewports.md",sourceDirName:"developer-guide",slug:"/developer-guide/viewports",permalink:"/deck.gl/docs/developer-guide/viewports",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/viewports.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Viewports",id:"viewports-1",level:2},{value:"Overview of Viewports",id:"overview-of-viewports",level:2},{value:"About Geospatial Positioning",id:"about-geospatial-positioning",level:2},{value:"Viewport Positioning",id:"viewport-positioning",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewports"},"Viewports"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are new to deck.gl's ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes it is suggested that you start by reading up on ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/views"},(0,r.kt)("inlineCode",{parentName:"a"},"Views"))," before learning about ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewports"),". Most applications start by using ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," classes.")),(0,r.kt)("h2",{id:"viewports-1"},"Viewports"),(0,r.kt)("p",null,"deck.gl provides a hierarchy of ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes. Unless an application needs to project or unproject coordinates in JavaScript, they typically do not directly create ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes. Instead, ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes are created under the hood based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," class descriptors."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes are focused on mathematical operations such as coordinate projection/unprojection and calculation of projection matrices and GLSL uniforms."),(0,r.kt)("p",null,"As mentioned, the basic ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport"),' class is a generic geospatially enabled version of the typical 3D "camera" class you would find in most 3D/WebGL/OpenGL library, holding ',(0,r.kt)("inlineCode",{parentName:"p"},"view")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," matrices and other uniforms needed by the WebGL vertex shaders."),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," class can certainly be used directly if you need and are able to calculate your own projection matrices. it is often preferable to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," subclass that takes higher level parameters, such as camera position and viewing direction, or map coordinates, rather than working directly with matrices."),(0,r.kt)("p",null,"In addition to generating WebGL uniforms, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," class also offers JavaScript functions to project and unproject as well as getting local distance scales."),(0,r.kt)("h2",{id:"overview-of-viewports"},"Overview of Viewports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Viewport Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/deck.gl/docs/api-reference/core/viewport"},(0,r.kt)("inlineCode",{parentName:"a"},"Viewport"))),(0,r.kt)("td",{parentName:"tr",align:null},"The base viewport has to be supplied view and projection matrices. It is typically only instantiated directly if the application needs to work with viewports that have been supplied from external sources, such as the ",(0,r.kt)("inlineCode",{parentName:"td"},"WebVR")," API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/deck.gl/docs/api-reference/core/web-mercator-viewport"},(0,r.kt)("inlineCode",{parentName:"a"},"WebMercatorViewport"))),(0,r.kt)("td",{parentName:"tr",align:null},"While all ",(0,r.kt)("inlineCode",{parentName:"td"},"Viewport")," subclasses are geospatially enabled, this class renders from a perspective that matches a typical top-down map and is designed to synchronize perfectly with a mapbox-gl base map (even in 3D enabled perspective mode).")))),(0,r.kt)("h2",{id:"about-geospatial-positioning"},"About Geospatial Positioning"),(0,r.kt)("p",null,"A special property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," classes that set them apart from a typical OpenGL Camera class is that it has the necessary plumbing to support non-linear Web Mercator projection."),(0,r.kt)("p",null,'Like many things in deck.gl, Viewports can be positioned using a lng/lat "anchor" and a meter offset. See the article about coordinate systems for more information about this setup.'),(0,r.kt)("h2",{id:"viewport-positioning"},"Viewport Positioning"),(0,r.kt)("p",null,"Viewports allow the application to specify the position and extent of the viewport (i.e. the target rendering area on the screen). Viewport positions are specified in CSS coordinates (top left, non-retina, these coordinates are different from WebGL coordinates, see remarks below). It is expected that CSS coordinates are most natural to work with, as the rest of the UI layout with other HTML components is done in the CSS coordinate system."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x,y coordinates")," - Viewports allow specification of x,y coordinates in the viewport in addition to width and height. These are only used for positioning (and not for calculation of intrinsic viewport parameters).")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"About viewport position and size coordinates: Internally, ",(0,r.kt)("inlineCode",{parentName:"li"},"gl.viewport")," uses bottom-left, retina coordinates and normal CSS layout uses top left, non-retina coordinates. Translating between the two is surprisingly fiddly since both y coordinates and heights need to be stacked, and ",(0,r.kt)("inlineCode",{parentName:"li"},"devicePixelRatio")," has to be matched to application settings, so having this translation taken care of by deck.gl was an explicit design goal."),(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"project"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"unproject")," JavaScript functions, the default pixel coordinate system of the viewport is defined with the origin in the top left, where the positive x-axis goes right, and the positive y-axis goes down. That is, the top left corner is ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 0]")," and the bottom right corner is ",(0,r.kt)("inlineCode",{parentName:"li"},"[width - 1, height - 1]"),". The functions have a flag that can reverse this convention."),(0,r.kt)("li",{parentName:"ul"},"Non-pixel projection matrices are bottom-left."),(0,r.kt)("li",{parentName:"ul"},'Mercator coordinates are specified in "lng-lat" format ',"[lng, lat, z]"," format (which naturally corresponds to ","[x, y, z]",")."),(0,r.kt)("li",{parentName:"ul"},"It is possible to query the WebMercatorViewport for a meters per pixel scale. Note that that distance scales are latitude dependent under web mercator projection (see ",(0,r.kt)("a",{parentName:"li",href:"http://wiki.openstreetmap.org/wiki/Zoom_levels"},"http://wiki.openstreetmap.org/wiki/Zoom_levels")," for more details), so scaling will depend on the viewport center and any linear scale factor should only be expected to be locally correct.")))}u.isMDXComponent=!0}}]);