(this.webpackJsonpbike=this.webpackJsonpbike||[]).push([[0],{24:function(t,e,n){t.exports=n.p+"static/media/Preloader_2.a8c98ef9.gif"},31:function(t,e,n){t.exports=n(62)},36:function(t,e,n){},37:function(t,e,n){t.exports=n.p+"static/media/logo.ee7cd8ed.svg"},38:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(36),n(37),n(38),n(3)),u=n.n(c),s=n(6),l=n(22),p=n(9),d=n.n(p),f=n(7),v="station/GET_LIST",m={loading:!1,data:null,error:null};var g=n(25),k=n(24),b=n.n(k),h=window.kakao;function w(t){var e=t.stations;return Object(a.useEffect)((function(){for(var t=document.getElementById("map"),n={center:new h.maps.LatLng(37.524,126.987284),level:8},a=new h.maps.Map(t,n),r=[],i=0;i<e.length;i++)r[i]={title:e[i].stationName,latlng:new h.maps.LatLng(e[i].stationLatitude,e[i].stationLongitude),stationId:e[i].stationId,rackTotCnt:e[i].rackTotCnt,parkingBikeTotCnt:e[i].parkingBikeTotCnt};for(var o=function(t){var e=new h.maps.Size(24,24),n=new h.maps.MarkerImage("https://cdn.pixabay.com/photo/2019/10/13/22/00/bike-4547306_640.png",e),i=new h.maps.Marker({map:a,position:r[t].latlng,title:r[t].title,image:n,clickable:!0}),o='<div style="padding:10px;">\uc774\ub984:'.concat(r[t].title," </br> \ucd1d\uac70\uce58\ub300:").concat(r[t].rackTotCnt,"</br>\uc774\uc6a9\uac00\ub2a5\ub300\uc218:").concat(r[t].parkingBikeTotCnt," </div>"),c=new h.maps.InfoWindow({content:o,removable:!0});h.maps.event.addListener(i,"click",(function(){c.open(a,i)}))},c=0;c<r.length;c++)o(c)}),[]),r.a.createElement("div",{id:"map",style:{width:"100vw",height:"100vh"}})}function E(){var t=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n"]);return E=function(){return t},t}var T=g.a.div(E(),b.a);function y(){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://openapi.seoul.go.kr:8088/7856574d457968673934516650706d/json/bikeList/1/1000/");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("http://openapi.seoul.go.kr:8088/7856574d457968673934516650706d/json/bikeList/1001/2000/");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){var t=Object(f.b)(),e=Object(f.c)((function(t){return t.station})),n=e.loading,i=e.data,o=e.data2,c=e.error;if(Object(a.useEffect)((function(){var e,n;t((e=y,n=j,function(){var t=Object(s.a)(u.a.mark((function t(a){var r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:v}),t.prev=1,t.next=4,e();case 4:return r=t.sent,t.next=7,n();case 7:i=t.sent,a({type:"station/GET_LIST_SUCCESS",data:r,data2:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:"station/GET_LIST_ERROR",error:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[t]),n)return r.a.createElement(T,null);if(c)return r.a.createElement("div",null,"123123");if(!i||!o)return r.a.createElement("div",null,"222");var l=i.rentBikeStatus.row,p=o.rentBikeStatus.row,d=l.concat(p);return r.a.createElement("div",null,r.a.createElement(w,{stations:d}))}var x=function(){return r.a.createElement("div",null,r.a.createElement(O,null))},I=n(2),_=n(29),C=n(30),B=Object(I.combineReducers)({station:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return{loading:!0,data:null,error:null};case"station/GET_LIST_SUCCESS":return{loading:!1,data:e.data,data2:e.data2,error:null};case"station/GET_LIST_ERROR":return{loading:!1,data:null,error:e.error};default:return t}}}),R=Object(I.createStore)(B,Object(_.composeWithDevTools)(Object(I.applyMiddleware)(C.a)));o.a.render(r.a.createElement(f.a,{store:R},r.a.createElement(x,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1083199d.chunk.js.map