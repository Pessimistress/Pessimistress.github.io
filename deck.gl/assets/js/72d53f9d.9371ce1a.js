"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[92],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="CartoLayer",o={unversionedId:"api-reference/carto/carto-layer",id:"api-reference/carto/carto-layer",title:"CartoLayer",description:"CartoLayer is the layer to visualize data using the CARTO Maps API.",source:"@site/../docs/api-reference/carto/carto-layer.md",sourceDirName:"api-reference/carto",slug:"/api-reference/carto/carto-layer",permalink:"/deck.gl/docs/api-reference/carto/carto-layer",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/carto-layer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fetchMap",permalink:"/deck.gl/docs/api-reference/carto/fetch-map"},next:{title:"BASEMAP",permalink:"/deck.gl/docs/api-reference/carto/basemap"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Geometry data",id:"geometry-data",level:3},{value:"Spatial index data",id:"spatial-index-data",level:3},{value:"Installation",id:"installation",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>data</code> (String)",id:"data",level:5},{value:"<code>type</code> (String)",id:"type",level:5},{value:"<code>connection</code> (String, optional)",id:"connection",level:5},{value:"<code>formatTiles</code> (String, optional)",id:"formattiles",level:5},{value:"<code>geoColumn</code> (String, optional)",id:"geocolumn",level:5},{value:"<code>columns</code> (Array, optional)",id:"columns",level:5},{value:"<code>uniqueIdProperty</code> (String, optional)",id:"uniqueidproperty",level:5},{value:"<code>credentials</code> (Object, optional)",id:"credentials",level:5},{value:"<code>headers</code> (Object, optional)",id:"headers",level:5},{value:"<code>aggregationExp</code> (String, optional)",id:"aggregationexp",level:5},{value:"<code>aggregationResLevel</code> (Number, optional)",id:"aggregationreslevel",level:5},{value:"<code>queryParameters</code> (Depends on provider, optional)",id:"queryparameters",level:5},{value:"Callbacks",id:"callbacks",level:3},{value:"<code>onDataLoad</code> (Function, optional)",id:"ondataload",level:4},{value:"<code>onDataError</code> (Function, optional)",id:"ondataerror",level:5},{value:"Source",id:"source",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cartolayer"},"CartoLayer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CartoLayer")," is the layer to visualize data using the CARTO Maps API."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"geometry-data"},"Geometry data"),(0,r.kt)("p",null,"By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"CartoLayer")," expects the data to be described using longitude & latitude. Tiled data will be used, with the format depending on ",(0,r.kt)("inlineCode",{parentName:"p"},"formatTiles"),".\nA ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/geo-layers/mvt-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"MVTLayer"))," will be created and all properties will be inherited."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import DeckGL from '@deck.gl/react';\nimport {CartoLayer, setDefaultCredentials, MAP_TYPES, API_VERSIONS} from '@deck.gl/carto';\n\nsetDefaultCredentials({\n  accessToken: 'XXX'\n  apiBaseUrl: 'https://gcp-us-east1.api.carto.com' // Default value (optional)\n});\n\nfunction App({viewState}) {\n  const layer = new CartoLayer({\n    type: MAP_TYPES.QUERY,\n    connection: 'bigquery',\n    data: 'SELECT * FROM cartobq.testtables.points_10k',\n    pointRadiusMinPixels: 2,\n    getLineColor: [0, 0, 0, 200],\n    getFillColor: [238, 77, 90],\n    lineWidthMinPixels: 1\n  })\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n")),(0,r.kt)("h3",{id:"spatial-index-data"},"Spatial index data"),(0,r.kt)("p",null,"The CARTO platform supports storing data using a spatial index. The ",(0,r.kt)("inlineCode",{parentName:"p"},"geoColumn")," prop is used to specify a database column that contains geographic data. When ",(0,r.kt)("inlineCode",{parentName:"p"},"geoColumn")," has one of the following values, the data will be interpreted as a spatial index:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h3")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.carto.com/analytics-toolbox-bigquery/overview/spatial-indexes/#h3"},"H3")," indexing system will be used"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quadbin")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.carto.com/analytics-toolbox-bigquery/overview/spatial-indexes/#quadbin"},"Quadbin")," indexing system will be used")),(0,r.kt)("p",null,"Tiled data will be used, with the layer created depending on the spatial index used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h3")," ",(0,r.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/h3-hexagon-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"H3HexagonLayer"))," will be created and all properties will be inherited."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quadbin")," ",(0,r.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/quadkey-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"QuadkeyLayer"))," will be created and all properties will be inherited. ",(0,r.kt)("em",{parentName:"li"},"Note the ",(0,r.kt)("inlineCode",{parentName:"em"},"getQuadkey")," accessor is replaced with ",(0,r.kt)("inlineCode",{parentName:"em"},"getQuadbin")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import DeckGL from '@deck.gl/react';\nimport {CartoLayer, setDefaultCredentials, MAP_TYPES, API_VERSIONS} from '@deck.gl/carto';\n\nsetDefaultCredentials({\n  accessToken: 'XXX'\n  apiBaseUrl: 'https://gcp-us-east1.api.carto.com' // Default value (optional)\n});\n\nfunction App({viewState}) {\n  const layer = new CartoLayer({\n    type: MAP_TYPES.TABLE,\n    connection: 'bigquery',\n    data: 'cartobq.testtables.h3',\n    geoColumn: 'h3',\n    aggregationExp: 'AVG(population) as population',\n    getFillColor: [238, 77, 90],\n    getElevation: d => d.properties.population\n  })\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the dependencies from NPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/carto\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {CartoLayer} from '@deck.gl/carto';\nnew CartoLayer({});\n")),(0,r.kt)("p",null,"To use pre-bundled scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^8.7.0/dist.min.js"><\/script>\n\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/geo-layers@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^8.7.0/dist.min.js"><\/script>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new deck.carto.CartoLayer({});\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"In all cases the properties of ",(0,r.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/geo-layers/tile-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"TileLayer"))," will be inherited."),(0,r.kt)("p",null,"Depending on the datasource, additional properties will be inherited from the created sublayer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"h3")," spatial index: ",(0,r.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/h3-hexagon-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"H3HexagonLayer")),"."),(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"quadbin")," spatial index: ",(0,r.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/quadkey-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"QuadkeyLayer")),". ",(0,r.kt)("em",{parentName:"li"},"Note the ",(0,r.kt)("inlineCode",{parentName:"em"},"getQuadkey")," accessor is replaced with ",(0,r.kt)("inlineCode",{parentName:"em"},"getQuadbin")),"."),(0,r.kt)("li",{parentName:"ul"},"Otherwise (longitude/latitude): ",(0,r.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/geo-layers/mvt-layer"},(0,r.kt)("inlineCode",{parentName:"a"},"MVTLayer")),".")),(0,r.kt)("h5",{id:"data"},(0,r.kt)("inlineCode",{parentName:"h5"},"data")," (String)"),(0,r.kt)("p",null,"Required. Either a SQL query or a name of dataset/tileset."),(0,r.kt)("h5",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h5"},"type")," (String)"),(0,r.kt)("p",null,"Required. Data type. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAP_TYPES.QUERY"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," is a SQL query."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAP_TYPES.TILESET"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," is a tileset name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAP_TYPES.TABLE"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," is a dataset name. Only supported with API v3.")),(0,r.kt)("h5",{id:"connection"},(0,r.kt)("inlineCode",{parentName:"h5"},"connection")," (String, optional)"),(0,r.kt)("p",null,"Required when ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"API_VERSIONS.V3"),"."),(0,r.kt)("p",null,"Name of the connection registered in the CARTO workspace."),(0,r.kt)("h5",{id:"formattiles"},(0,r.kt)("inlineCode",{parentName:"h5"},"formatTiles")," (String, optional)"),(0,r.kt)("p",null,"Only supported when ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"API_VERSIONS.V3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMATS.TILEJSON"),". Use to override the default tile data format. Possible values are: ",(0,r.kt)("inlineCode",{parentName:"p"},"TILE_FORMATS.BINARY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TILE_FORMATS.GEOJSON")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TILE_FORMATS.MVT"),"."),(0,r.kt)("h5",{id:"geocolumn"},(0,r.kt)("inlineCode",{parentName:"h5"},"geoColumn")," (String, optional)"),(0,r.kt)("p",null,"Only supported when ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"MAP_TYPES.TABLE"),"."),(0,r.kt)("p",null,"Name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"geo_column")," in the CARTO platform. Use this override the default column ('geom'), from which the geometry information should be fetched."),(0,r.kt)("h5",{id:"columns"},(0,r.kt)("inlineCode",{parentName:"h5"},"columns")," (Array, optional)"),(0,r.kt)("p",null,"Only supported when ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"MAP_TYPES.TABLE"),"."),(0,r.kt)("p",null,"Names of columns to fetch. By default, all columns are fetched."),(0,r.kt)("h5",{id:"uniqueidproperty"},(0,r.kt)("inlineCode",{parentName:"h5"},"uniqueIdProperty")," (String, optional)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"cartodb_id"))),(0,r.kt)("p",null,"A string pointing to a unique attribute at the result of the query. A unique attribute is needed for highlighting with vector tiles when a feature is split across two or more tiles."),(0,r.kt)("h5",{id:"credentials"},(0,r.kt)("inlineCode",{parentName:"h5"},"credentials")," (Object, optional)"),(0,r.kt)("p",null,"Overrides the configuration to connect with CARTO. Check the parameters ",(0,r.kt)("a",{parentName:"p",href:"overview#carto-credentials"},"here"),"."),(0,r.kt)("h5",{id:"headers"},(0,r.kt)("inlineCode",{parentName:"h5"},"headers")," (Object, optional)"),(0,r.kt)("p",null,"Custom headers to include in the map instantiation request."),(0,r.kt)("h5",{id:"aggregationexp"},(0,r.kt)("inlineCode",{parentName:"h5"},"aggregationExp")," (String, optional)"),(0,r.kt)("p",null,"Aggregation SQL expression. Only used for spatial index datasets."),(0,r.kt)("h5",{id:"aggregationreslevel"},(0,r.kt)("inlineCode",{parentName:"h5"},"aggregationResLevel")," (Number, optional)"),(0,r.kt)("p",null,"Aggregation resolution level. Only used for spatial index datasets, defaults to 6 for quadbins, 4 for h3."),(0,r.kt)("h5",{id:"queryparameters"},(0,r.kt)("inlineCode",{parentName:"h5"},"queryParameters")," (Depends on provider, optional)"),(0,r.kt)("p",null,"Use it to parametrize SQL queries. The format depends on the source's provider, some examples:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://node-postgres.com/features/queries"},"PostgreSQL and Redshift"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=$1`\n     queryParameters: ['alasarr']\n})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/parameterized-queries#node.js"},"BigQuery positional"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=?`,\n     queryParameters: ['alasarr']\n})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/parameterized-queries#node.js"},"BigQuery named parameters"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=@username`,\n     queryParameters: { username: 'alasarr' }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/nodejs-driver-use.html#binding-statement-parameters"},"Snowflake positional")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=?`,\n     queryParameters: ['alasarr']\n})\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=:1`,\n     queryParameters: ['alasarr']\n})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/markdirish/node-odbc#bindparameters-callback"},"Databricks ODBC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const layer = new CartoLayer({\n     data: `select * from users where username=?`,\n     queryParameters: ['alasarr']\n})\n")),(0,r.kt)("h3",{id:"callbacks"},"Callbacks"),(0,r.kt)("h4",{id:"ondataload"},(0,r.kt)("inlineCode",{parentName:"h4"},"onDataLoad")," (Function, optional)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onDataLoad")," is called when the request to the CARTO Maps API was completed successfully."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"data => {}"))),(0,r.kt)("p",null,"Receives arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," (Object) - Data received from CARTO Maps API")),(0,r.kt)("h5",{id:"ondataerror"},(0,r.kt)("inlineCode",{parentName:"h5"},"onDataError")," (Function, optional)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onDataError")," is called when the request to the CARTO Maps API failed. By default the Error is thrown."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("p",null,"Receives arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Error"),")")),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/carto/src/layers/carto-layer.ts"},"modules/carto/src/layers/carto-layer.ts")))}u.isMDXComponent=!0}}]);