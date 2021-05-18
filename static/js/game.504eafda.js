(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{2298:function(t,e,s){},2532:function(t,e,s){"use strict";var a=s("23e7"),i=s("5a34"),r=s("1d80"),n=s("ab13");a({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(r(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},4448:function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-intro"},[s("header",{staticClass:"bg"},[s("p",{staticClass:"subtitle"},[t._v(" Use our website to get a recommendation of games based on your specific interests and preferences! ")]),s("div",{staticStyle:{width:"50%",display:"flex","justify-content":"center","align-items":"center"}},[s("div",{staticStyle:{margin:"0 20px","font-size":"20px",color:"white","font-weight":"700"}}),s("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"Game Type..."},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchbtn(e)}},model:{value:t.gameterm,callback:function(e){t.gameterm=e},expression:"gameterm"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchbtn},slot:"append"})],1)],1)]),s("div",{staticClass:"bread"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home/book"}}},[t._v("Books")]),s("el-breadcrumb-item",{attrs:{to:{path:"/home/music"}}},[t._v("Music")]),s("el-breadcrumb-item",{attrs:{to:{path:"/home/game"}}},[t._v("Games")]),s("el-breadcrumb-item",[s("a",{attrs:{href:"#"}})])],1)],1),s("div",{staticClass:"filter"}),s("div",{staticClass:"game"},[s("div",{staticClass:"title"},[s("div",{staticClass:"side"}),s("div",{staticClass:"rightside"},[s("div",{staticClass:"subject"},[t._v(t._s(t.title))]),s("div",{staticClass:"all",on:{click:t.getall}},[s("svg",{staticClass:"icon",attrs:{t:"1618477092984",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2085",width:"20",height:"20"}},[s("path",{attrs:{d:"M773.888 843.9296a30.72 30.72 0 0 1-20.1728-53.9136 369.32608 369.32608 0 0 0 127.5392-279.1936c0-203.6224-165.6832-369.3056-369.3056-369.3056-19.968 0-40.0384 1.5872-59.5968 4.7616a30.70464 30.70464 0 1 1-9.8304-60.6208c22.784-3.6864 46.1824-5.5808 69.4272-5.5808 237.5168 0 430.7456 193.2288 430.7456 430.7456 0 125.0304-54.2208 243.6608-148.736 325.632a30.55104 30.55104 0 0 1-20.0704 7.4752zM512 941.5168c-237.5168 0-430.7456-193.2288-430.7456-430.7456 0-116.9408 46.08-226.3552 129.6896-308.0704a30.6688 30.6688 0 0 1 43.4176 0.512 30.6688 30.6688 0 0 1-0.512 43.4176c-71.6288 70.0928-111.1552 163.9424-111.1552 264.192 0 203.6224 165.6832 369.3056 369.3056 369.3056 26.9824 0 53.8624-2.9184 79.9232-8.6528 16.5888-3.6352 32.9728 6.8096 36.608 23.3984s-6.8096 32.9728-23.3984 36.608a436.0192 436.0192 0 0 1-93.1328 10.0352z",fill:"#303135","p-id":"2086"}}),s("path",{attrs:{d:"M263.5776 384.6656c-16.9472 0-30.72-13.7728-30.72-30.72V240.5376H111.9744c-16.9472 0-30.72-13.7728-30.72-30.72s13.7728-30.72 30.72-30.72h151.6032c16.9472 0 30.72 13.7728 30.72 30.72v144.128c0 16.9472-13.7216 30.72-30.72 30.72zM912.0256 847.872h-152.9856c-16.9472 0-30.72-13.7728-30.72-30.72v-149.6576c0-16.9472 13.7728-30.72 30.72-30.72s30.72 13.7728 30.72 30.72v118.9376h122.2656c16.9472 0 30.72 13.7728 30.72 30.72s-13.7728 30.72-30.72 30.72z",fill:"#FF623E","p-id":"2087"}})]),t._v(t._s(t.get))]),s("div",{staticClass:"sl"},[s("el-slider",{attrs:{range:"","show-stops":"",step:10,max:150},on:{change:t.costchange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),s("div",{staticStyle:{float:"right","margin-top":"8px","margin-right":"20px","font-size":"20px"}},[t._v(" Cost Range in $AUD (0-150): ")])])]),s("div",{ref:"list",staticClass:"gamelist"},t._l(t.show,(function(e){return s("div",{key:e.game_id,staticClass:"slide"},[s("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover",content:e.Description}},[s("div",{staticClass:"image",attrs:{slot:"reference"},slot:"reference"},[s("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e["Image URL"].trim()}},[s("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" loading"),s("span",{staticClass:"dot"},[t._v("...")])])])],1)]),s("h2",[t._v(t._s(e.Name))]),s("p",{staticStyle:{color:"gray"}},[t._v(t._s(e.Category))]),s("p",{staticStyle:{color:"white"}},[t._v("A$"+t._s(e["Cost in AUD"]))]),s("div",{staticClass:"tags"},[s("a",{attrs:{href:e["Shopping URL"],target:"__blank"}},[t._v("Get Game")])]),s("div",{staticClass:"btn",on:{click:function(s){return t.addtocart(e)}}},[t.$store.state.games[e.Name]?s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"Delete from Plan",placement:"bottom"}},[s("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""}})],1)],1):s("div",[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Add to Plan",placement:"top"}},[s("el-button",{attrs:{type:"warning",icon:"el-icon-star-off",circle:""}})],1)],1)])],1)})),0)])])},r=[],n=s("1da1"),c=(s("96cf"),s("159b"),s("caad"),s("2532"),s("4de4"),s("a9e3"),s("8137")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro"},[s("div",{staticClass:"box"},[s("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[s("el-checkbox-button",{attrs:{label:"Arthiritis"}}),s("el-checkbox-button",{attrs:{label:"Joint pain"}}),s("el-checkbox-button",{attrs:{label:"Muscle loss with aging"}}),s("el-checkbox-button",{attrs:{label:"Obesity"}}),s("el-checkbox-button",{attrs:{label:"Osteoporosis"}})],1),s("div",{staticClass:"btn"},[s("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.submit}},[t._v("search")])],1)],1),s("div",{staticStyle:{padding:"20px",background:"#fff"}},[s("el-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.result,(function(e,a){return s("el-collapse-item",{key:a,attrs:{title:e["Exercise Name"],name:a+1}},[s("h1",[t._v(t._s(e["Exercise Name"]))]),s("p",[t._v(t._s(e["Description"]))]),s("h3",{staticStyle:{color:"red"}},[t._v(t._s(e["Exercise Precautions"]))]),s("div",{staticClass:"video"},[s("iframe",{attrs:{src:e["Youtube Link"],frameborder:"0",allowfullscreen:"",width:"630",height:"300"}})])])})),1)],1)])},l=[],u={data:function(){return{result:"",checkList:[],activeName:"1"}},methods:{getValue:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["e"])(t.checkList);case 2:s=e.sent,t.result=s,console.log(t.result);case 5:case"end":return e.stop()}}),e)})))()},submit:function(){this.getValue()}},created:function(){},watch:{}},f=u,h=(s("a7f1"),s("2877")),d=Object(h["a"])(f,o,l,!1,null,"7acb574b",null),m=d.exports,p={components:{dv:m},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])();case 2:return a=e.sent,t.show=a,e.next=6,Object(c["c"])();case 6:t.category=e.sent,t.category.forEach((function(e,s){t.list.push(e.category),t.cate.push({value:e.category,id:s})}));case 8:case"end":return e.stop()}}),e)})))()},methods:{searchbtn:function(){var t=this;if(this.list.includes(this.gameterm))return this.title=this.gameterm,void(this.show=a.filter((function(e){return e.Category==t.gameterm&&e["Cost in AUD"]<=t.value[1]&&e["Cost in AUD"]>=t.value[0]})))},querySearch:function(t,e){var s=this.cate,a=t?s.filter(this.createFilter(t)):s;e(a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},getall:function(){"More Games"==this.get?(this.$refs.list.style.height="100%",this.get="Less Games",$("html,body").animate({scrollTop:1e3},"slow")):(this.$refs.list.style.height="800px",this.get="More Games")},addtocart:function(t){var e=this;this.$store.state.games[t.Name]?this.$confirm("Are you sure to delete from plan?",{confirmButtonText:"Yes",cancelButtonText:"Cancel",type:"warning"}).then((function(){e.$store.commit("modgame",t),e.open5()})).catch((function(){})):(this.open3(),this.$store.commit("modgame",t))},costchange:function(){var t=this;""!==this.select?this.show=a.filter((function(e){return e.Category==t.category[Number(t.select)].category&&e["Cost in AUD"]<=t.value[1]&&e["Cost in AUD"]>=t.value[0]})):this.show=a.filter((function(e){return e["Cost in AUD"]<=t.value[1]&&e["Cost in AUD"]>=t.value[0]}))},open3:function(){this.$notify({title:"Success!",message:"Game successfully added to your wishlist",type:"success",offset:200})},open5:function(){this.$notify.error({title:"Gone!",message:"Game successfully deleted from your wishlist",offset:200})}},data:function(){return{show:[],value:[0,150],select:"",category:[],title:"Games You Might Like",get:"More Games",gameterm:"",cate:[],list:[]}},watch:{}},g=p,v=(s("fcbc"),Object(h["a"])(g,i,r,!1,null,"59662e26",null));e["default"]=v.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),i=s("5899"),r="["+i+"]",n=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),o=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(c,"")),s}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5a34":function(t,e,s){var a=s("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"60fb":function(t,e,s){},7156:function(t,e,s){var a=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var r,n;return i&&"function"==typeof(r=e.constructor)&&r!==s&&a(n=r.prototype)&&n!==s.prototype&&i(t,n),t}},a7f1:function(t,e,s){"use strict";s("2298")},a9e3:function(t,e,s){"use strict";var a=s("83ab"),i=s("da84"),r=s("94ca"),n=s("6eeb"),c=s("5135"),o=s("c6b6"),l=s("7156"),u=s("c04e"),f=s("d039"),h=s("7c73"),d=s("241c").f,m=s("06cf").f,p=s("9bf2").f,g=s("58a8").trim,v="Number",b=i[v],y=b.prototype,w=o(h(y))==v,x=function(t){var e,s,a,i,r,n,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(r=l.slice(2),n=r.length,c=0;c<n;c++)if(o=r.charCodeAt(c),o<48||o>i)return NaN;return parseInt(r,a)}return+l};if(r(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var C,_=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof _&&(w?f((function(){y.valueOf.call(s)})):o(s)!=v)?l(new b(x(e)),s,_):x(e)},k=a?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;k.length>N;N++)c(b,C=k[N])&&!c(_,C)&&p(_,C,m(b,C));_.prototype=y,y.constructor=_,n(i,v,_)}},ab13:function(t,e,s){var a=s("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},fcbc:function(t,e,s){"use strict";s("60fb")}}]);
//# sourceMappingURL=game.504eafda.js.map