(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vis"],{"0eac":function(e,t,a){"use strict";a("f444")},5127:function(e,t,a){},"70e9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"menu"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{ref:"first",attrs:{label:"70-74",name:"first"}}),a("el-tab-pane",{ref:"second",attrs:{label:"75-79",name:"second"}}),a("el-tab-pane",{ref:"third",attrs:{label:"80-84",name:"third"}}),a("el-tab-pane",{ref:"fourth",attrs:{label:"85-89",name:"fourth"}}),a("el-tab-pane",{ref:"fifth",attrs:{label:"90+",name:"fifth"}})],1)],1),e._m(0),a("div",{staticClass:"overall"},[a("ausmap",{attrs:{range:e.range}})],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"decs"},[e._v(" This interactive map of Australia shows the total population in each state of the country based on age interval, specifically for what we classify as 'elders'. We can see the most populous states of the country, New South Wales and Victoria, have a high elderly population and this was deadly during the most significant waves of Covid-19 throughout the country. "),a("br"),a("br"),e._v("Furthermore, it means our solution will be critical in these two states as Australia certainly has an ageing population which will be put under the microscope if there are further epidemics or pandemics to come in the future.' ")])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"apd",staticClass:"main"})},i=[],o=a("1da1"),c=(a("96cf"),a("1276"),a("ac1f"),a("5319"),a("b0c0"),a("313e")),l=a("8137"),u=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=c["a"](t),r.showLoading(),e.next=4,Object(l["k"])();case 4:i=e.sent,i=i[n],r.hideLoading(),c["b"]("AUS",a),s={title:{text:"Population by Age Group",subtext:"Age Group: ".concat(i.A),left:"right"},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2,formatter:function(e){var t=(e.value+"").split(".");return t=t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,"),e.name+"<br/>Population: "+t}},visualMap:{left:"right",min:3e3,max:4e5,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},text:["High","Low"],calculable:!0},toolbox:{show:!0,left:"left",top:"top"},series:[{name:"AUS",type:"map",roam:!0,map:"AUS",label:{show:!0},emphasis:{label:{show:!0}},data:[{name:"New South Wales",value:i.B},{name:"Victoria",value:i.C},{name:"Queensland",value:i.D},{name:"South Australia",value:i.F},{name:"Western Australia",value:i.E},{name:"Tasmania",value:i.G},{name:"Northern Territory",value:i.I},{name:"Australian Capital Territory",value:i.H}]}]},r.setOption(s),s&&r.setOption(s);case 11:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f={data:function(){return{}},props:["range"],created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["a"])();case 2:a=t.sent,e.redraw(e.$refs.apd,a,e.range);case 4:case"end":return t.stop()}}),t)})))()},methods:{redraw:function(e,t,a){u(e,t,a)}},mounted:function(){},watch:{range:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(l["a"])();case 2:r=n.sent,e!==t&&a.redraw(a.$refs.apd,r,e);case 4:case"end":return n.stop()}}),n)})))()}}},h=f,p=(a("cec5"),a("2877")),d=Object(p["a"])(h,s,i,!1,null,"8042404e",null),m=d.exports,b={name:"vis",data:function(){return{showbread:!0,range:0,activeName:"first"}},methods:{pass:function(e){this.range=e},handleClick:function(e,t){switch(console.log(t.target.innerText),t.target.innerText){case"70-74":this.pass(0);break;case"75-79":this.pass(1);break;case"80-84":this.pass(2);break;case"85-89":this.pass(3);break;case"90+":this.pass(4);break}}},components:{ausmap:m}},v=b,w=(a("0eac"),Object(p["a"])(v,n,r,!1,null,"4e4d8222",null));t["default"]=w.exports},cec5:function(e,t,a){"use strict";a("5127")},f444:function(e,t,a){}}]);
//# sourceMappingURL=vis.efc61ec7.js.map