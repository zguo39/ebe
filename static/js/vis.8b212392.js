(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vis"],{"0cb2":function(e,t,r){var n=r("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,l,o,u){var f=r+e.length,d=l.length,p=s;return void 0!==o&&(o=n(o),p=c),i.call(u,p,(function(n,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":c=o[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>d){var u=a(s/10);return 0===u?n:u<=d?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):n}c=l[s-1]}return void 0===c?"":c}))}},1276:function(e,t,r){"use strict";var n=r("d784"),a=r("44e7"),i=r("825a"),c=r("1d80"),s=r("4840"),l=r("8aa5"),o=r("50c4"),u=r("14c3"),f=r("9263"),d=r("d039"),p=[].push,v=Math.min,h=4294967295,g=!d((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(c(this)),i=void 0===r?h:r>>>0;if(0===i)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,i);var s,l,o,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,g=new RegExp(e.source,d+"g");while(s=f.call(g,n)){if(l=g.lastIndex,l>v&&(u.push(n.slice(v,s.index)),s.length>1&&s.index<n.length&&p.apply(u,s.slice(1)),o=s[0].length,v=l,u.length>=i))break;g.lastIndex===s.index&&g.lastIndex++}return v===n.length?!o&&g.test("")||u.push(""):u.push(n.slice(v)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=c(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,a,r):n.call(String(a),t,r)},function(e,a){var c=r(n,e,this,a,n!==t);if(c.done)return c.value;var f=i(e),d=String(this),p=s(f,RegExp),m=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),b=new p(g?f:"^(?:"+f.source+")",x),E=void 0===a?h:a>>>0;if(0===E)return[];if(0===d.length)return null===u(b,d)?[d]:[];var w=0,R=0,y=[];while(R<d.length){b.lastIndex=g?R:0;var S,_=u(b,g?d:d.slice(R));if(null===_||(S=v(o(b.lastIndex+(g?0:R)),d.length))===w)R=l(d,R,m);else{if(y.push(d.slice(w,R)),y.length===E)return y;for(var I=1;I<=_.length-1;I++)if(y.push(_[I]),y.length===E)return y;R=w=S}}return y.push(d.slice(w)),y}]}),!g)},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"21e6":function(e,t,r){"use strict";r("afc6")},"44e7":function(e,t,r){var n=r("861d"),a=r("c6b6"),i=r("b622"),c=i("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),c=r("a691"),s=r("1d80"),l=r("8aa5"),o=r("0cb2"),u=r("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(r,n){var a=s(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!v&&h||"string"===typeof n&&-1===n.indexOf(g)){var s=r(t,e,this,n);if(s.done)return s.value}var m=a(e),x=String(this),b="function"===typeof n;b||(n=String(n));var E=m.global;if(E){var w=m.unicode;m.lastIndex=0}var R=[];while(1){var y=u(m,x);if(null===y)break;if(R.push(y),!E)break;var S=String(y[0]);""===S&&(m.lastIndex=l(x,i(m.lastIndex),w))}for(var _="",I=0,C=0;C<R.length;C++){y=R[C];for(var $=String(y[0]),A=f(d(c(y.index),x.length),0),O=[],k=1;k<y.length;k++)O.push(p(y[k]));var T=y.groups;if(b){var P=[$].concat(O,A,x);void 0!==T&&P.push(T);var j=String(n.apply(void 0,P))}else j=o($,x,A,O,T,n);A>=I&&(_+=x.slice(I,A)+j,I=A+$.length)}return _+x.slice(I)}]}))},"70e9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overall"},[r("div",{staticClass:"back",on:{click:e.back}},[r("svg",{staticClass:"icon",attrs:{t:"1616995826666",viewBox:"0 0 1354 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4717",width:"32",height:"32"}},[r("path",{attrs:{d:"M1091.899077 395.0592C1171.771077 442.683077 1269.76 571.092677 1310.530954 725.700923c40.770954 154.592492 34.028308 293.037292 34.028308 293.037292s-52.791138-85.244062-74.200616-115.129107c-21.393723-29.9008-111.584492-141.248985-251.557415-205.776739-139.988677-64.543508-373.9648-53.0432-373.9648-53.0432v268.729108L0 456.767015 644.836431 0v271.202462s154.907569 11.657846 235.882338 28.435692c136.381046 28.246646 211.180308 95.421046 211.180308 95.421046z",fill:"#1296db","p-id":"4718"}})])]),e.showbread?r("el-breadcrumb",{staticClass:"bread",attrs:{separator:"|"}},[r("el-breadcrumb-item",{staticClass:"bread-item",nativeOn:{click:function(t){return e.pass(0)}}},[r("a",{ref:"m0",staticStyle:{color:"red"},attrs:{href:"javascript:void(0)"}},[e._v("70-74")])]),r("el-breadcrumb-item",{staticClass:"bread-item",nativeOn:{click:function(t){return e.pass(1)}}},[r("a",{ref:"m1",attrs:{href:"javascript:void(0)"}},[e._v("75-79")])]),r("el-breadcrumb-item",{staticClass:"bread-item"},[r("a",{ref:"m2",attrs:{href:"javascript:void(0)"}},[e._v("80-84")])]),r("el-breadcrumb-item",{staticClass:"bread-item"},[r("a",{ref:"m3",attrs:{href:"javascript:void(0)"}},[e._v("85-89")])]),r("el-breadcrumb-item",{staticClass:"bread-item"},[r("a",{ref:"m4",attrs:{href:"javascript:void(0)"}},[e._v("90+")])]),r("el-breadcrumb-item")],1):e._e(),r("el-carousel",{attrs:{"indicator-position":"outside",autoplay:!1,height:"500px"}},[r("ausmap",{attrs:{range:e.range}})],1)],1)},a=[],i=(r("159b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"apd",staticClass:"main"})}),c=[],s=r("1da1"),l=(r("96cf"),r("1276"),r("ac1f"),r("5319"),r("b0c0"),r("313e")),o=r("8137"),u=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=l["a"](t),a.showLoading(),e.next=4,Object(o["e"])();case 4:c=e.sent,console.log(c),c=c[n],a.hideLoading(),l["b"]("AUS",r),i={title:{text:"Population by Age Group",subtext:"Age Group: ".concat(c.A),left:"right"},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2,formatter:function(e){var t=(e.value+"").split(".");return t=t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,"),e.name+"<br/>Population: "+t}},visualMap:{left:"right",min:3e3,max:4e5,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},text:["High","Low"],calculable:!0},toolbox:{show:!0,left:"left",top:"top"},series:[{name:"AUS",type:"map",roam:!0,map:"AUS",label:{show:!0},emphasis:{label:{show:!0}},data:[{name:"New South Wales",value:c.B},{name:"Victoria",value:c.C},{name:"Queensland",value:c.D},{name:"South Australia",value:c.F},{name:"Western Australia",value:c.E},{name:"Tasmania",value:c.G},{name:"Northern Territory",value:c.I},{name:"Australian Capital Territory",value:c.H}]}]},a.setOption(i),i&&a.setOption(i);case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),f={data:function(){return{}},props:["range"],created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["a"])();case 2:r=t.sent,e.redraw(e.$refs.apd,r,e.range);case 4:case"end":return t.stop()}}),t)})))()},methods:{redraw:function(e,t,r){u(e,t,r)}},mounted:function(){},watch:{range:function(e,t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["a"])();case 2:a=n.sent,e!==t&&r.redraw(r.$refs.apd,a,e);case 4:case"end":return n.stop()}}),n)})))()}}},d=f,p=(r("21e6"),r("2877")),v=Object(p["a"])(d,i,c,!1,null,"ea6f73d0",null),h=v.exports,g={name:"vis",data:function(){return{showbread:!0,range:0,m:[0,1,2,3,4]}},methods:{pass:function(e){var t=this;this.m.forEach((function(r){r!==e&&(t.$refs["m"+r].style.color="#303133")})),this.$refs["m"+e].style.color="red",this.range=e},back:function(){this.$router.push("/")}},components:{ausmap:h}},m=g,x=(r("b644"),Object(p["a"])(m,n,a,!1,null,"6e657d84",null));t["default"]=x.exports},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,c=String.prototype.replace,s=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||o;f&&(s=function(e){var t,r,a,s,f=this,d=o&&f.sticky,p=n.call(f),v=f.source,h=0,g=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),r=new RegExp("^(?:"+v+")",p)),u&&(r=new RegExp("^"+v+"$(?!\\s)",p)),l&&(t=f.lastIndex),a=i.call(d?r:f,g),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:l&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&c.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},afc6:function(e,t,r){},b644:function(e,t,r){"use strict";r("fe0e")},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),c=r("9263"),s=r("9112"),l=i("species"),o=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var v=i(e),h=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=h&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!h||!g||"replace"===e&&(!o||!u||d)||"split"===e&&!p){var m=/./[v],x=r(v,""[e],(function(e,t,r,n,a){return t.exec===c?h&&!a?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],E=x[1];n(String.prototype,e,b),n(RegExp.prototype,v,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&s(RegExp.prototype[v],"sham",!0)}},fe0e:function(e,t,r){}}]);
//# sourceMappingURL=vis.8b212392.js.map