(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{47:function(e,t){},49:function(e,t){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c(25),s=c.n(a),n=c(10),i=c.n(n),j=c(12),l=c(26),d=c(27),o=c(28),b=c(34),h=c(31),O=c(29),x=c(30),u=c(32),p=c(33),f=c(0),k=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(f.jsxs)("nav",{children:[Object(f.jsx)("div",{className:"meeseks",onClick:function(){return a(!c)},children:c?Object(f.jsx)(p.a,{}):Object(f.jsxs)("svg",{viewBox:"0 0 500 200",children:[Object(f.jsx)("circle",{id:"eye-1",cx:"200",cy:"50",r:"28",fill:"black"}),Object(f.jsx)("circle",{id:"eye-e",cx:"280",cy:"50",r:"30",fill:"black"}),Object(f.jsx)("circle",{cx:"200",cy:"40",r:"4",fill:"white"}),Object(f.jsx)("circle",{cx:"280",cy:"40",r:"5",fill:"white"}),Object(f.jsx)("path",{d:"M150 130 C 170 170, 330 170, 350 110",stroke:"black","stroke-width":"8",fill:"transparent"}),Object(f.jsx)("path",{d:"M150 100 C 100 130, 140 180, 150 180",stroke:"black","stroke-width":"5",fill:"transparent"}),Object(f.jsx)("path",{d:"M350 90 C 400 100, 360 150, 340 160",stroke:"black","stroke-width":"5",fill:"transparent"}),Object(f.jsx)("path",{d:"M220 180 C 220 190, 280 190, 280 175",stroke:"black","stroke-width":"5",fill:"transparent"}),Object(f.jsx)("path",{d:"M170 20 C 170 0, 210 5, 225 8",stroke:"black","stroke-width":"5",fill:"transparent"}),Object(f.jsx)("path",{id:"eyebrow-2",d:"M260 5 C 280 0, 300 0, 320 20",stroke:"black","stroke-width":"5",fill:"transparent"})]})}),Object(f.jsxs)("ul",{className:"nav-links ".concat(c?"active":""),children:[Object(f.jsx)("li",{className:"".concat(c?"open":""),children:Object(f.jsx)("a",{href:"https://github.com/angelmgl/rick-and-morty/",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(f.jsx)("li",{className:"".concat(c?"open":""),children:Object(f.jsx)("a",{href:"https://twitter.com/angelmgljpr/",target:"_blank",rel:"noreferrer",children:"See more"})})]})]})},m=c.p+"static/media/rick-and-morty.5b11b123.png",v=function(e){return Object(f.jsx)("header",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:"logo",src:m,alt:"Rick and Morty"}),Object(f.jsx)(k,{})]})})},g=function(e){var t=e.name,c=e.image,r=e.status,a=e.specie,s=e.gender;return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)("div",{className:"card-header",children:[Object(f.jsx)("div",{className:"status",style:{backgroundColor:"Alive"===r?"#0f0":"#f00"}}),Object(f.jsx)("img",{src:c,alt:t})]}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsxs)("p",{children:["Specie: ",a]}),Object(f.jsxs)("p",{children:["Gender: ",s]})]})]})},y=function(e){return Object(f.jsxs)("div",{className:"lds-grid",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})},w=(c(64),c(65),function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(d.a)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={characters:[],loading:!0,page:1},e.fetchCharacters=function(){var t=Object(l.a)(i.a.mark((function t(c){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(O.getCharacter)({page:c});case 3:r=t.sent,e.setState(Object(j.a)(Object(j.a)({},e.state),{},{loading:!1,characters:[].concat(e.state.characters,r.results),page:e.state.page+1})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.fetchCharacters(this.state.page)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{}),Object(f.jsx)(x.a,{dataLength:this.state.characters.length,next:function(){return e.fetchCharacters(e.state.page)},hasMore:!0,loader:Object(f.jsx)(y,{}),children:Object(f.jsx)("section",{className:"container",children:this.state.characters.map((function(e){return Object(f.jsx)(g,{name:e.name,image:e.image,status:e.status,specie:e.species,gender:e.gender},e.id)}))})})]})}}]),c}(r.Component)),C=document.getElementById("root");s.a.render(Object(f.jsx)(w,{}),C)}},[[66,1,2]]]);
//# sourceMappingURL=main.37e6e110.chunk.js.map