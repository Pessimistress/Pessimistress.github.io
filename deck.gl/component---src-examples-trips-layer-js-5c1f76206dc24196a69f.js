(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{e0jh:function(e,t,a){"use strict";a.r(t);var r=a("zLVn"),n=a("dI71"),l=a("q1tI"),i=a.n(l),s=a("lxDd"),c=a("Lw+3"),o=a("v9TO"),p=a("CtqP"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.renderInfo=function(e){return i.a.createElement("div",null,i.a.createElement("p",null,"Trips are taken from June 16, 2016 21:00 to 21:30"),i.a.createElement("p",null,"Trip data source: ",i.a.createElement("a",{href:"http://www.nyc.gov/html/tlc/html/about/trip_record_data.shtml"},"NYC Taxi & Limousine Commission Trip Records")),i.a.createElement("p",null,"Building data source: ",i.a.createElement("a",{href:"http://openstreetmap.org"},"OpenStreetMap")," via ",i.a.createElement("a",{href:"https://mapzen.com/"},"Mapzen Vector Tiles API")),i.a.createElement("div",{className:"layout"},i.a.createElement("div",{className:"stat col-1-2"},"No. of Trips",i.a.createElement("b",null,Object(c.b)(e.trips||0))),i.a.createElement("div",{className:"stat col-1-2"},"No. of Buildings",i.a.createElement("b",null,Object(c.b)(e.buildings||0)))),i.a.createElement("div",{className:"layout"},i.a.createElement("div",{className:"stat col-1-2"},"Vertices",i.a.createElement("b",null,Object(c.b)((e.vertices||0)+3*(e.triangles||0))))))},t.prototype.render=function(){var e=this.props,t=e.data,a=e.params,n=Object(r.a)(e,["data","params"]);return i.a.createElement(o.a,Object.assign({},n,{trips:t&&t[0],buildings:t&&t[1],animationSpeed:.5,trailLength:a.trail.value}))},t}(l.Component);m.title="Yellow Cab Vs. Green Cab Trips in Manhattan",m.data=[{url:s.a+"/trips-data.txt",worker:"/workers/trips-data-decoder.js?loop=1800&trail=180"},{url:s.a+"/building-data.txt",worker:"/workers/building-data-decoder.js"}],m.code=s.b+"/examples/website/trips",m.parameters={trail:{displayName:"Trail",type:"range",value:180,step:1,min:10,max:200}},m.mapStyle=s.c.DARK,t.default=Object(p.a)(m)}}]);