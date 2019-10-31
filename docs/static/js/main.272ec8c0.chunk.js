(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=[{category:"symbols",id:"01",data:[{name:"clear",id:"01",symbol:"CLS"},{name:"divide",id:"02",symbol:"/"},{name:"multiply",id:"03",symbol:"*"},{name:"add",id:"04",symbol:"+"},{name:"subtract",id:"05",symbol:"-"},{name:"equals",id:"06",symbol:"="},{name:"decimal",id:"07",symbol:"."}]},{category:"numbers",id:"02",data:[{name:"zero",id:"08",symbol:"0"},{name:"one",id:"09",symbol:"1"},{name:"two",id:"10",symbol:"2"},{name:"three",id:"11",symbol:"3"},{name:"four",id:"12",symbol:"4"},{name:"five",id:"13",symbol:"5"},{name:"six",id:"14",symbol:"6"},{name:"seven",id:"15",symbol:"7"},{name:"eight",id:"16",symbol:"8"},{name:"nine",id:"17",symbol:"9"}]}]},21:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(13),s=t(0),r=t.n(s),c=t(2),i=t(7),o=t(5),u=t.n(o),m=t(8),b=t(9),y=t(11),p=t(10),d=t(12),O=function(e){return r.a.createElement("div",{id:"display"},e.partialDisplay)},f=function(e){return r.a.createElement("div",{id:"mini-display"},e.totalDisplay)},D=function(e){function a(){return Object(m.a)(this,a),Object(y.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"display-container"},r.a.createElement(f,{totalDisplay:this.props.totalDisplay}),r.a.createElement(O,{partialDisplay:this.props.partialDisplay}))}}]),a}(s.Component),h=Object(c.b)(function(e,a){return{partialDisplay:e.partialDisplay,totalDisplay:e.totalDisplay}})(D),E=Object(c.b)(function(e,a){return{totalDisplay:e.totalDisplay}},{collectData:function(e){return{type:"COLLECT_DATA",payload:{operationData:e}}},clearData:function(){return{type:"CLEAR"}},operation:function(e){return{type:"OPERATION"}}})(function(e){return r.a.createElement("button",{className:"",id:e.symbol.name,onClick:function(a){switch(e.symbol.symbol){case"CLS":e.clearData();break;case"=":e.operation();break;default:e.collectData(e.symbol.symbol)}}},e.symbol.symbol)}),j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(y.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).numbersToRender=t.props.numbers.map(function(e){return r.a.createElement(E,{symbol:e,key:e.id})}),t.symbolsToRender=t.props.symbols.map(function(e){return r.a.createElement(E,{symbol:e,key:e.id})}),t}return Object(d.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"numpad-container"},this.numbersToRender,this.symbolsToRender)}}]),a}(s.Component),g=Object(c.b)(function(e,a){return{numbers:e.numbers,symbols:e.symbols}})(j),v=function(e){return r.a.createElement("div",{id:"App",className:"app"},r.a.createElement("div",{className:"calculator-container"},r.a.createElement(h,null),r.a.createElement(g,null)))},N=t(17),k=document.getElementById("root"),w={symbols:N[0].data,numbers:N[1].data,partialDisplay:0,totalDisplay:"",symbolsArray:[],result:null},T=Object(i.b)(function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"CLEAR":e=Object(l.a)({},t,{totalDisplay:"",partialDisplay:0,symbolsArray:[],result:null});break;case"OPERATION":for(var r,c,i=t.totalDisplay,o=[],u=[],m=[],b="",y=0;y<i.length;y++)switch(i[y]){case"+":case"-":case"*":case"/":"-"===i[y]?0===y?b="-":(o=[].concat(Object(n.a)(o),[Number(b)]),u=[].concat(Object(n.a)(u),[Number(b)]),b="-",m=[].concat(Object(n.a)(m),["+"])):(o=[].concat(Object(n.a)(o),[Number(b)]),u=[].concat(Object(n.a)(u),[Number(b)]),b="",o=[].concat(Object(n.a)(o),[i[y]]),m=[].concat(Object(n.a)(m),[i[y]]));break;default:b+=i[y]}o=[].concat(Object(n.a)(o),[Number(b)]),u=[].concat(Object(n.a)(u),[Number(b)]);for(var p=null;null===p;)m.includes("*")||m.includes("/")?(2===u.length?m.includes("*")?p=u.reduce(function(e,a){return e*a}):m.includes("/")&&(p=u.reduce(function(e,a){return e/a})):-1!==m.indexOf("*")?(c=u[r=m.indexOf("*")]*u[r+1],m.splice(r,1),u.splice(r,2,c)):-1!==m.indexOf("/")&&(c=u[r=m.indexOf("/")]/u[r+1],m.splice(r,1),u.splice(r,2,c)),m.indexOf("*")):p=u.reduce(function(e,a){return e+a});var d=String(p),O=d.indexOf(".");-1!==O&&(d.length<=O+5||(d=d.substring(0,O+5))),p=Number(d),e={totalDisplay:t.totalDisplay+"="+p,partialDisplay:p,result:p};break;case"COLLECT_DATA":a=s.payload.operationData;var f=t.totalDisplay,D=t.partialDisplay,h=t.totalDisplay.length-1;switch(a){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":null!==t.result?(f="",f+=a,D=a):0===f.length?(D=a,f+=a):"+"===f[h]||"*"===f[h]||"-"===f[h]||"/"===f[h]?1===f.length?(D+=a,f+=a):(D=a,f+=a):"0"===f[h]?D.includes(".")?(D+=a,f+=a):D.length>=2?(D+=a,f+=a):(f=f.substring(0,h),D=a,f+=a):(console.log("Here"),D=String(D),D+=a,f+=a);break;case"*":case"/":case"+":null!==t.result?(f=t.result+a,D=a):0===f.length?(f="",D=0):"+"===f[h]||"*"===f[h]||"/"===f[h]||"-"===f[h]?1===f.length||(D=a,f=f.slice(0,-1),f+=a):"."===f[h]?(D=String(D),D=a,f+="0"+a):(D=a,f+=a);break;case"-":null!==t.result?(f=t.result+a,D=a):0===f.length?(f=a,D=a):"+"===f[h]||"*"===f[h]||"/"===f[h]||"-"===f[h]?(D=a,f=f.slice(0,-1),f+=a):(D=a,f+=a);break;case".":0===f.length?(f="0.",D="0."):"+"===f[h]||"*"===f[h]||"/"===f[h]||"-"===f[h]?(f+="0.",D="0."):"."===f[h]||(D=String(D)).includes(".")||(D+=a,f+=a)}e=Object(l.a)({},t,{partialDisplay:D,totalDisplay:f,result:null});break;default:e=Object(l.a)({},t)}return e},w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());u.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(v,null)),k)}},[[21,1,2]]]);
//# sourceMappingURL=main.272ec8c0.chunk.js.map