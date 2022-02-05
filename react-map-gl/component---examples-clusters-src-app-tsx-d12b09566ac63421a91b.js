(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{h3ZS:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p})),r.d(t,"renderToDom",(function(){return d}));var n=r("q1tI"),a=r("i8i4"),c=r("bzer");function o(){return n.createElement("div",{className:"control-panel"},n.createElement("h3",null,"Create and Style Clusters"),n.createElement("p",null,"Use Mapbox GL JS' built-in functions to visualize points as clusters."),n.createElement("div",{className:"source-link"},n.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/6.0-release/examples/clusters",target:"_new"},"View Code ↗")))}var l=n.memo(o),i={id:"clusters",type:"circle",source:"earthquakes",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#51bbd6",100,"#f1f075",750,"#f28cb1"],"circle-radius":["step",["get","point_count"],20,100,30,750,40]}},s={id:"cluster-count",type:"symbol",source:"earthquakes",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}},u={id:"unclustered-point",type:"circle",source:"earthquakes",filter:["!",["has","point_count"]],paint:{"circle-color":"#11b4da","circle-radius":4,"circle-stroke-width":1,"circle-stroke-color":"#fff"}};function p(){var e=Object(n.useRef)(null);return n.createElement(n.Fragment,null,n.createElement(c.Map,{initialViewState:{latitude:40.67,longitude:-103.59,zoom:3},mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxAccessToken:"",interactiveLayerIds:[i.id],onClick:function(t){var r=t.features[0],n=r.properties.cluster_id;e.current.getSource("earthquakes").getClusterExpansionZoom(n,(function(t,n){t||e.current.easeTo({center:r.geometry.coordinates,zoom:n,duration:500})}))},ref:e},n.createElement(c.Source,{id:"earthquakes",type:"geojson",data:"https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",cluster:!0,clusterMaxZoom:14,clusterRadius:50},n.createElement(c.Layer,i),n.createElement(c.Layer,s),n.createElement(c.Layer,u))),n.createElement(l,null))}function d(e){Object(a.render)(n.createElement(p,null),e)}}}]);