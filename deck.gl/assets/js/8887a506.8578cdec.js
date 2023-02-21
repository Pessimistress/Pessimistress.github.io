"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="About 64-bit Layers",l={unversionedId:"developer-guide/fp64",id:"developer-guide/fp64",title:"About 64-bit Layers",description:"deck.gl can leverage high precision GPU floating point using emulated 64-bit floating point. For supported layers (look for the 64-bit icon in the docs), 64-bit shaders are used when the fp64 prop is set to true.",source:"@site/../docs/developer-guide/fp64.md",sourceDirName:"developer-guide",slug:"/developer-guide/fp64",permalink:"/deck.gl/docs/developer-guide/fp64",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/fp64.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Optimization",permalink:"/deck.gl/docs/developer-guide/performance"},next:{title:"Tips and Tricks",permalink:"/deck.gl/docs/developer-guide/tips-and-tricks"}},s={},p=[{value:"Precision",id:"precision",level:2},{value:"Performance Implications",id:"performance-implications",level:2},{value:"Other Considerations",id:"other-considerations",level:2},{value:"References",id:"references",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-64-bit-layers"},"About 64-bit Layers"),(0,a.kt)("p",null,"deck.gl can leverage high precision GPU floating point using emulated 64-bit floating point. For supported layers (look for the 64-bit icon in the docs), 64-bit shaders are used when the ",(0,a.kt)("inlineCode",{parentName:"p"},"fp64")," prop is set to true."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With the improved precision 32 bit projection mode in deck.gl 6.1, the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"fp64")," is no longer required to achieve sub-centimeter precision. The new 32 bit projection mode has much better performance. This makes the ",(0,a.kt)("inlineCode",{parentName:"p"},"fp64")," mode more of a niche technology that demonstrates how to use 64 bit calculations should you need to use them in your own applications.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("div",null,(0,a.kt)("img",{src:"https://raw.github.com/visgl/deck.gl-data/master/images/docs/fp64-mandelbrot.gif"}),(0,a.kt)("p",null,(0,a.kt)("i",null,"32-bit vs 64-bit Mandelbrot Set Zoom")))),(0,a.kt)("center",null,"Mandelbrot set rendered on GPU using native 32-bit (left) floating point shaders and emulated 64-bit (right) floating point shaders provided by deck.gl."),(0,a.kt)("h2",{id:"precision"},"Precision"),(0,a.kt)("p",null,"With 64-bit floating point support in shader, deck.gl layers is able to visualize data with very high dynamic range. Points covering a whole city and accurate down to sub-centimeter level can be processed and rendered to canvas on-the-fly."),(0,a.kt)("p",null,"Since WebGL does not support 64-bit floating point, deck.gl uses two 32-bit native floating point number to extend and preserve significant digits and uses algorithms similar to those used in many multiple precision math libraries to achieve the precision close to what IEEE-754 double precision floating point numbers provide."),(0,a.kt)("p",null,"Generally speaking, this mechanism provide 46 significant digits in mantissa (48 overall) within the normal range of 32-bit single precision float point numbers. This transfers to ~ ",(0,a.kt)("inlineCode",{parentName:"p"},"1x10^-15")," relative error within ~ ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2x10^-38")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1.7x10^+38"),"."),(0,a.kt)("p",null,"The error bound as tested on 2015 MacBook Pro with AMD Radeon R9 M370X GPU:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Error"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Addition"),(0,a.kt)("td",{parentName:"tr",align:null},"< 1 ulp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,a.kt)("td",{parentName:"tr",align:null},"< 1 ulp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,a.kt)("td",{parentName:"tr",align:null},"~1.5 ulps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Division"),(0,a.kt)("td",{parentName:"tr",align:null},"~2 ulps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Square root"),(0,a.kt)("td",{parentName:"tr",align:null},"~2.6 ulps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Exponential"),(0,a.kt)("td",{parentName:"tr",align:null},"~2.6 ulps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logarithm"),(0,a.kt)("td",{parentName:"tr",align:null},"~11.6 ulps")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Trigonometry"),(0,a.kt)("td",{parentName:"tr",align:null},"~5 ulps")))),(0,a.kt)("p",null,"Note: ",(0,a.kt)("inlineCode",{parentName:"p"},"ulp")," = ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unit_in_the_last_place"},"unit of least precision")),(0,a.kt)("h2",{id:"performance-implications"},"Performance Implications"),(0,a.kt)("p",null,"Since the 64-bit floating point maths are emulated using the multiple precision arithmetics, it costs more GPU cycles than native 32-bit\nmath (the shader execution time alone is about 10x slower). However, since 64-bit floating point maths are usually only required in vertex shader, the overall performance impact is usually less than 10x."),(0,a.kt)("p",null,"There will be a memory impact too, in that all vertex attributes and uniform that uses 64-bit maths require double storage space in JavaScript. Same as mentioned above, since a layer usually has some attributes that do not require 64-bit maths, the total memory impact is normally significantly less than 2x."),(0,a.kt)("p",null,"Shaders are more complex and can take time to compile on some systems, notably Windows."),(0,a.kt)("p",null,"For more information regarding the performance of 64-bit layers, please check the performance benchmark layers in the layer-browser example in deck.gl repo."),(0,a.kt)("h2",{id:"other-considerations"},"Other Considerations"),(0,a.kt)("p",null,"64-bit shaders push the GPU drivers quite a bit, and workarounds are needed to prevent GPU drivers from optimizing away critical parts of the code. The fp64 shader module has been tested on a range of GPUs and drivers however every now and then we encounter a new driver that needs special treatment."),(0,a.kt)("p",null,"If you mainly deploy into a know set of clients that you can test in advance, this is not a big issue, however if you expect your applications to work across a large set of devices you may want to stay with 32-bit calculations."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://crd-legacy.lbl.gov/~dhbailey/mpdist"},"http://crd-legacy.lbl.gov/~dhbailey/mpdist")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gmplib.org"},"https://gmplib.org"))))}u.isMDXComponent=!0}}]);