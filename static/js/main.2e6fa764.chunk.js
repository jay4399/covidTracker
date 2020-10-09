(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),u=a(6),s=a.n(u),i=a(9),l=a(72),d=a(73),p=a(85),f=a(86),m=a(31),v=a(42),h=a(32),b=a.n(h),y="https://covid19.mathdro.id/api",C=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y,t&&(a="".concat(y,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(75),x=a.n(E),O=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(m.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"COVID-19 Data for ".concat(u)}}}):null,b=p[0]?r.a.createElement(v.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:x.a.container},u?h:b)},j=a(229),w=a(228),k=a(76),D=a.n(k),N=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.a,{className:D.a.formControl},r.a.createElement(w.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},I=a(225),S=a(230),U=a(226),V=a(227),T=a(81),A=a.n(T),P=a(82),z=a.n(P),B=a(83),G=a.n(B),J=function(e){var t=e.className,a=e.cardTitle,n=e.value,c=e.lastUpdate,o=e.cardSubtitle;return r.a.createElement(I.a,{item:!0,xs:12,md:3,component:S.a,className:z()(G.a.card,t)},r.a.createElement(U.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},a),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(A.a,{start:0,end:n,duration:2.75,separator:","})),r.a.createElement(V.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(V.a,{variant:"body2",component:"p"},o)))},L=a(22),M=a.n(L),Q=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:M.a.container},r.a.createElement(I.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(J,{className:M.a.infected,cardTitle:"Infected",value:a.value,lastUpdate:o,cardSubtitle:"Number of active cases from COVID-19."}),r.a.createElement(J,{className:M.a.recovered,cardTitle:"Recovered",value:n.value,lastUpdate:o,cardSubtitle:"Number of recoveries from COVID-19."}),r.a.createElement(J,{className:M.a.deaths,cardTitle:"Deaths",value:c.value,lastUpdate:o,cardSubtitle:"Number of deaths caused by COVID-19."}))):"Loading..."},R=a(44),q=a.n(R),Y=a(84),F=a.n(Y),H=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:q.a.container},r.a.createElement("img",{className:q.a.image,src:F.a,alt:"COVID-19"}),r.a.createElement(Q,{data:t}),r.a.createElement(N,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(H,null),document.getElementById("root"))},22:function(e,t,a){e.exports={container:"Cards_container__3bjn6",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},44:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},75:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},76:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},83:function(e,t,a){e.exports={card:"Card_card__LmsGV"}},84:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.2e6fa764.chunk.js.map