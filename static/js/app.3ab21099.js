(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],f=0,u=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({caregiver:"caregiver",ins:"ins","vis~website":"vis~website",vis:"vis",website:"website"}[t]||t)+"."+{caregiver:"6f2730ae",ins:"dfe88a10","vis~website":"a7b6e5b3",vis:"b24c6ec6",website:"3e5a587d"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={caregiver:1,ins:1,vis:1,website:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({caregiver:"caregiver",ins:"ins","vis~website":"vis~website",vis:"vis",website:"website"}[t]||t)+"."+{caregiver:"83cad55d",ins:"34e94692","vis~website":"31d6cfe0",vis:"0beb6cca",website:"fcabd769"}[t]+".css",i=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===a||f===i))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],f=c.getAttribute("data-href");if(f===a||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=o(t);var u=new Error;c=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=f;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"160a":function(t,e,n){"use strict";n("6944")},4260:function(t,e,n){t.exports=n.p+"img/reallogo.3826b34a.jpeg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],s={},o=s,l=(n("034f"),n("2877")),c=Object(l["a"])(o,r,i,!1,null,null,null),f=c.exports,u=n("5c96"),d=n.n(u),h=(n("0fae"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("topnav",{attrs:{degree:t.degree},on:{showlog:t.showlog}}),t.logshow?t._e():n("div",{staticClass:"mongolia",on:{click:t.showlog}}),n("log-box",{directives:[{name:"show",rawName:"v-show",value:!t.logshow,expression:"!logshow"}]}),n("div",{staticClass:"router"},[n("keep-alive",{attrs:{include:"website"}},[n("router-view")],1)],1)],1)},v=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"topnav"}},[n("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("path",{ref:"ssvg",attrs:{"stroke-dasharray":"1000 1000","stroke-dashoffset":"32890",stroke:"red",fill:"none","stroke-width":"1",d:"M5 25 L155 25 L158 10 L162 40 L165 25 L180 25 L181.5 20 L183 38 L189 2 L192 25 L200 25 L203 10 L206 40 L212 3 L215 25 L250 25 L253 10 L256 35 L259 25 L300 25 L303 20 L306 30 L309 15 L316 40 L319 5 L322 25 L410 25 L413 10 L416 40 L419 25 L590 25 L593 10 L596 45 L599 25 L602 25 L606 5 L609 35 L612 25 L617 10 L620 25 L630 25 L633 5 L636 45 L639 25 L680 25 L683 5 L686 45 L689 10 L692 40 L698 20 L701 25 L785 25 L788 10 L792 40 L795 25 L810 25 L811.5 20 L813 38 L819 2 L822 25 L830 25 L833 10 L836 40 L842 3 L845 25 L1000 25 L1003 10 L1006 40 L1009 25 L1012 25 L1016 5 L1019 48 L1022 25 L1100 25 L1103 5 L1106 45 L1109 10 L1112 40 L1118 20 L1121 25 L1124 10 L1127 40 L1130 25 L1136 25 L1139 5 L1142 25 L2000 25"}})]),t._m(0),n("h2",[t._v("Elders Engagement Management")]),n("div",{staticClass:"login",on:{click:t.log}},[n("h4",[t._v("Log In")])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("4260"),width:"110",height:"50"}})])}],L={props:["degree"],data:function(){return{}},methods:{log:function(){}},watch:{degree:function(){this.$refs.menu.style.transform="rotate(".concat(this.degree,"deg)")}},mounted:function(){}},w=L,b=(n("160a"),Object(l["a"])(w,g,m,!1,null,"ad7f13a2",null)),y=b.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"logbox",staticClass:"logbox"},[n("h3",[t._v("Login")]),n("el-input",{staticClass:"account",attrs:{placeholder:t.meth,"auto-complete":"new-password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.btnlogin(e)}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("el-input",{staticClass:"password",attrs:{placeholder:"password","show-password":"","auto-complete":"new-password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.btnlogin(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("el-button",{staticClass:"login",attrs:{type:"primary",loading:t.loading},on:{click:t.btnlogin}},[t._v("Log In")]),n("div",{staticClass:"bttm"},[n("el-button",{staticStyle:{float:"left",fontsize:"12px"},attrs:{type:"text"},on:{click:t.reg}},[t._v("Sign Up")]),n("el-button",{staticStyle:{color:"#bdc1c8",float:"right",fontsize:"12px"},attrs:{type:"text"}},[t._v("Forget password")])],1)],1)},M=[],k={data:function(){return{account:"",meth:"username",password:"",loading:!1}},methods:{btnlogin:function(){},reg:function(){}},computed:{}},x=k,_=(n("6c69"),Object(l["a"])(x,z,M,!1,null,"100d531a",null)),C=_.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("ul",[n("li",{on:{click:function(e){return t.skip("")}}},[n("svg",{staticClass:"icon",attrs:{t:"1616392800501",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2887",width:"32",height:"32"}},[n("path",{attrs:{d:"M376.568 639.914c-4.412 0-8.072-3.576-8.072-7.996 0-4.418 3.498-7.994 7.916-7.994h0.156a7.994 7.994 0 1 1 0 15.99zM408.546 639.914c-4.412 0-8.072-3.576-8.072-7.996 0-4.418 3.498-7.994 7.916-7.994h0.156a7.992 7.992 0 0 1 7.996 7.994 7.992 7.992 0 0 1-7.996 7.996zM344.588 639.914c-4.412 0-8.072-3.576-8.072-7.996 0-4.418 3.498-7.994 7.916-7.994h0.156a7.992 7.992 0 0 1 7.996 7.994 7.99 7.99 0 0 1-7.996 7.996zM512.476 240.182c-4.412 0-8.072-3.576-8.072-7.994s3.498-7.994 7.916-7.994h0.156c4.418 0 7.994 3.576 7.994 7.994s-3.576 7.994-7.994 7.994z","p-id":"2888",fill:"#ffffff"}}),n("path",{attrs:{d:"M935.714 767.828H88.286a7.99 7.99 0 0 1-7.996-7.996V232.188c0-13.226 10.758-23.984 23.984-23.984h815.454c13.224 0 23.984 10.758 23.984 23.984v527.644a7.994 7.994 0 0 1-7.998 7.996zM96.28 751.838h831.44V232.188a8.01 8.01 0 0 0-7.994-7.994H104.274a8.004 8.004 0 0 0-7.994 7.994v519.65z","p-id":"2889",fill:"#ffffff"}}),n("path",{attrs:{d:"M999.672 815.796H24.328c-13.226 0-23.984-10.76-23.984-23.984v-31.98a7.99 7.99 0 0 1 7.994-7.994h1007.324a7.988 7.988 0 0 1 7.994 7.994v31.98c0 13.226-10.758 23.984-23.984 23.984zM16.334 767.828v23.984a8.006 8.006 0 0 0 7.996 7.994h975.344a8.012 8.012 0 0 0 7.996-7.994v-23.984H16.334zM903.738 735.85H120.264a7.99 7.99 0 0 1-7.996-7.994v-479.68a7.992 7.992 0 0 1 7.996-7.996h783.474a7.99 7.99 0 0 1 7.994 7.996v479.678a7.99 7.99 0 0 1-7.994 7.996z m-775.48-15.99h767.484V256.172H128.258V719.86z","p-id":"2890",fill:"#ffffff"}}),n("path",{attrs:{d:"M583.952 783.816h-143.902a7.99 7.99 0 0 1-7.996-7.994 7.99 7.99 0 0 1 7.996-7.994h143.902a7.988 7.988 0 0 1 7.994 7.994 7.988 7.988 0 0 1-7.994 7.994zM551.972 655.902H200.208a7.988 7.988 0 0 1-7.994-7.994V328.124a7.99 7.99 0 0 1 7.994-7.994h351.764a7.99 7.99 0 0 1 7.996 7.994v319.786a7.988 7.988 0 0 1-7.996 7.992z m-343.768-15.988h335.774V336.118H208.204v303.796z","p-id":"2891",fill:"#ffffff"}}),n("path",{attrs:{d:"M519.994 623.924H232.188c-4.418 0-7.994-3.576-7.994-7.994s3.576-7.994 7.994-7.994h287.806c4.42 0 7.994 3.576 7.994 7.994s-3.574 7.994-7.994 7.994zM280.164 480.022a8.008 8.008 0 0 1-6.152-2.874 7.996 7.996 0 0 1 1.022-11.258l95.936-79.948a8 8 0 0 1 11.266 1.016 7.996 7.996 0 0 1-1.024 11.258l-95.936 79.946a7.952 7.952 0 0 1-5.112 1.86z","p-id":"2892",fill:"#ffffff"}}),n("path",{attrs:{d:"M472.02 480.022a7.96 7.96 0 0 1-5.114-1.858l-95.936-79.946a7.996 7.996 0 0 1-1.022-11.258 8.004 8.004 0 0 1 11.266-1.016l95.936 79.948a7.998 7.998 0 0 1 1.024 11.258 8.026 8.026 0 0 1-6.154 2.872zM312.134 559.966a7.99 7.99 0 0 1-7.996-7.994v-63.958a7.99 7.99 0 0 1 7.996-7.994 7.99 7.99 0 0 1 7.994 7.994v63.958a7.99 7.99 0 0 1-7.994 7.994z","p-id":"2893",fill:"#ffffff"}}),n("path",{attrs:{d:"M440.048 559.966h-127.914c-4.42 0-7.996-3.576-7.996-7.994s3.576-7.994 7.996-7.994h127.914c4.418 0 7.994 3.576 7.994 7.994s-3.576 7.994-7.994 7.994z","p-id":"2894",fill:"#ffffff"}}),n("path",{attrs:{d:"M440.048 559.966a7.99 7.99 0 0 1-7.996-7.994v-63.958a7.99 7.99 0 0 1 7.996-7.994 7.99 7.99 0 0 1 7.994 7.994v63.958a7.99 7.99 0 0 1-7.994 7.994zM376.092 559.966a7.99 7.99 0 0 1-7.996-7.994v-31.978a7.99 7.99 0 0 1 7.996-7.994 7.988 7.988 0 0 1 7.994 7.994v31.978a7.99 7.99 0 0 1-7.994 7.994zM312.134 453.382a7.99 7.99 0 0 1-7.996-7.994v-21.33a7.99 7.99 0 0 1 7.996-7.994 7.99 7.99 0 0 1 7.994 7.994v21.33a7.99 7.99 0 0 1-7.994 7.994zM248.178 559.966a7.99 7.99 0 0 1-7.996-7.994v-15.988a7.99 7.99 0 0 1 7.996-7.996 7.99 7.99 0 0 1 7.994 7.996v15.988a7.99 7.99 0 0 1-7.994 7.994zM280.156 559.966a7.99 7.99 0 0 1-7.996-7.994v-15.988a7.99 7.99 0 0 1 7.996-7.996 7.99 7.99 0 0 1 7.994 7.996v15.988a7.99 7.99 0 0 1-7.994 7.994zM472.028 559.966a7.99 7.99 0 0 1-7.996-7.994v-15.988a7.99 7.99 0 0 1 7.996-7.996 7.99 7.99 0 0 1 7.994 7.996v15.988a7.99 7.99 0 0 1-7.994 7.994zM504.006 559.966a7.99 7.99 0 0 1-7.996-7.994v-15.988a7.99 7.99 0 0 1 7.996-7.996 7.99 7.99 0 0 1 7.994 7.996v15.988a7.99 7.99 0 0 1-7.994 7.994z","p-id":"2895",fill:"#ffffff"}}),n("path",{attrs:{d:"M823.792 368.096H631.92c-4.42 0-7.994-3.576-7.994-7.994s3.574-7.994 7.994-7.994h191.872c4.418 0 7.994 3.576 7.994 7.994s-3.578 7.994-7.994 7.994z","p-id":"2896",fill:"#ffffff"}}),n("path",{attrs:{d:"M823.792 416.064H631.92c-4.42 0-7.994-3.576-7.994-7.996s3.574-7.996 7.994-7.996h191.872c4.418 0 7.994 3.576 7.994 7.996s-3.578 7.996-7.994 7.996z","p-id":"2897",fill:"#ffffff"}}),n("path",{attrs:{d:"M823.792 464.032H631.92c-4.42 0-7.994-3.576-7.994-7.994s3.574-7.994 7.994-7.994h191.872c4.418 0 7.994 3.576 7.994 7.994s-3.578 7.994-7.994 7.994z","p-id":"2898",fill:"#ffffff"}}),n("path",{attrs:{d:"M727.856 527.988H631.92c-4.42 0-7.994-3.574-7.994-7.994S627.5 512 631.92 512h95.936c4.418 0 7.994 3.574 7.994 7.994s-3.576 7.994-7.994 7.994z","p-id":"2899",fill:"#ffffff"}}),n("path",{attrs:{d:"M823.792 623.924H631.92a7.988 7.988 0 0 1-7.994-7.994v-31.978a7.988 7.988 0 0 1 7.994-7.994h191.872a7.988 7.988 0 0 1 7.994 7.994v31.978a7.992 7.992 0 0 1-7.994 7.994z m-183.878-15.988h175.882v-15.99h-175.882v15.99z","p-id":"2900",fill:"#ffffff"}})]),n("h4",[t._v("Website")])]),n("li",{on:{click:function(e){return t.skip("vis")}}},[n("svg",{staticClass:"icon",attrs:{t:"1616393760283",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4025",width:"28",height:"28"}},[n("path",{attrs:{d:"M692.158536 494.852299l238.334064-208.574305A44.799636 44.799636 0 0 1 1004.795996 320.00572v511.99584a172.798596 172.798596 0 0 1-172.798596 172.798596H192.0026A172.798596 172.798596 0 0 1 19.204004 832.00156V608.00338a44.799636 44.799636 0 0 1 53.567565-43.903643l140.990854 28.159771L421.952732 443.524716a44.799636 44.799636 0 0 1 36.9277-7.039942l233.278104 58.367525zM108.803276 832.00156A83.199324 83.199324 0 0 0 192.0026 915.200884h639.9948a83.199324 83.199324 0 0 0 83.199324-83.199324V418.756918l-181.694524 158.974708a44.799636 44.799636 0 0 1-40.319672 9.727921l-235.966083-59.007521-207.166317 148.030798a44.799636 44.799636 0 0 1-34.815717 7.423939L108.803276 662.658936V832.00156z",fill:"#ffffff","p-id":"4026"}}),n("path",{attrs:{d:"M638.398973 381.57322a63.99948 63.99948 0 0 0 60.159511-13.759888l287.99766-255.997921a63.99948 63.99948 0 0 0-85.119308-95.615223L639.806962 248.838298l-190.142456-54.399558a63.99948 63.99948 0 0 0-54.783554 9.471923L194.882577 346.757503 95.555384 321.925704a63.99948 63.99948 0 0 0-31.103748 124.158992l127.99896 31.99974a63.99948 63.99948 0 0 0 52.735572-9.983919l198.910384-142.078846 194.302421 55.551549z",fill:"#ffffff","p-id":"4027"}})]),n("h4",[t._v("Charts")])]),n("li",{on:{click:function(e){return t.skip("ins")}}},[n("svg",{staticClass:"icon",attrs:{t:"1616393867235",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6004",width:"32",height:"32"}},[n("path",{attrs:{d:"M284.672 893.5936H106.0352a24.2688 24.2688 0 0 1-24.2176-22.6304l-15.36-213.504-52.5312-26.3168a24.1664 24.1664 0 0 1-13.4144-21.7088V479.5392a121.856 121.856 0 0 1 121.8048-121.8048h129.8944c46.7456 0 90.0096 27.392 110.08 69.7344a24.3712 24.3712 0 1 1-44.032 20.8896 73.4208 73.4208 0 0 0-66.048-41.8816H122.3168c-40.2944 0-73.1136 32.768-73.1136 73.0624v114.8928l51.456 25.7536c7.68 3.84 12.8 11.4688 13.4144 20.0704l14.592 204.5952H284.672a24.32 24.32 0 1 1 0 48.7424zM187.2384 309.0432a121.856 121.856 0 0 1-121.8048-121.8048 121.856 121.856 0 0 1 121.856-121.8048 121.856 121.856 0 0 1 121.7536 121.856 121.856 121.856 0 0 1-121.8048 121.7536z m0-194.8672c-40.2944 0-73.0624 32.768-73.0624 73.0624s32.768 73.0624 73.0624 73.0624 73.0624-32.768 73.0624-73.0624-32.768-73.0624-73.0624-73.0624zM918.016 893.5936H739.328a24.32 24.32 0 1 1 0-48.7424h156.0064l14.592-204.6976a24.32 24.32 0 0 1 13.4144-20.0704l51.456-25.7536V479.5392c0-40.2944-32.768-73.0624-73.1136-73.0624h-129.8944c-28.1088 0-53.9648 16.384-66.048 41.8816a24.3712 24.3712 0 1 1-44.032-20.8896 122.5216 122.5216 0 0 1 110.08-69.7344h129.8944a121.856 121.856 0 0 1 121.856 121.8048v129.8944c0 9.216-5.2224 17.664-13.568 21.8112l-52.4288 26.1632-15.2576 213.504a24.4736 24.4736 0 0 1-24.32 22.6816zM836.7616 309.0432a121.856 121.856 0 0 1-121.8048-121.8048 121.856 121.856 0 0 1 121.8048-121.8048 121.856 121.856 0 0 1 121.8048 121.856 121.856 121.856 0 0 1-121.856 121.7536z m0-194.8672c-40.2944 0-73.0624 32.768-73.0624 73.0624s32.768 73.0624 73.0624 73.0624 73.0624-32.768 73.0624-73.0624-32.768-73.0624-73.0624-73.0624z","p-id":"6005",fill:"#ffffff"}}),n("path",{attrs:{d:"M609.4336 1023.488H414.5664a24.4224 24.4224 0 0 1-24.3712-22.8352l-15.0016-241.152-62.8224-12.544a24.32 24.32 0 0 1-19.5584-23.8592V512A154.4704 154.4704 0 0 1 446.976 357.7344h129.9456A154.4704 154.4704 0 0 1 731.136 512v211.0976c0 11.5712-8.192 21.6064-19.5584 23.8592l-62.8224 12.544-15.0016 241.152a24.4224 24.4224 0 0 1-24.3712 22.8352z m-172.032-48.6912h149.0944l14.848-237.0048a24.32 24.32 0 0 1 19.456-22.3232l61.5936-12.288V512a105.728 105.728 0 0 0-105.5232-105.5232H446.976A105.728 105.728 0 0 0 341.504 512v191.0784l61.5936 12.288a24.1664 24.1664 0 0 1 19.456 22.3232l14.848 237.056zM512 309.0432a154.4704 154.4704 0 0 1-154.2656-154.2656A154.4704 154.4704 0 0 1 512 0.512a154.4704 154.4704 0 0 1 154.2656 154.2656A154.4704 154.4704 0 0 1 512 309.0432zM512 49.152a105.728 105.728 0 0 0-105.5232 105.5744c0 58.1632 47.36 105.5232 105.5232 105.5232a105.728 105.728 0 0 0 105.5232-105.5232A105.728 105.728 0 0 0 512 49.152z","p-id":"6006",fill:"#ffffff"}})]),n("h4",[t._v("Team")])])])])},O=[],E={methods:{skip:function(t){this.$emit("showmenu"),this.$router.push("/".concat(t))}}},j=E,A=(n("7add"),Object(l["a"])(j,H,O,!1,null,"0b2a455e",null)),S=A.exports,V={data:function(){return{logshow:!0,menushow:!1,degree:0}},methods:{showlog:function(){this.logshow=!this.logshow,this.menushow=!1}},components:{topnav:y,"log-box":C,"menu-box":S}},P=V,$=(n("d4b5"),Object(l["a"])(P,p,v,!1,null,"63df9f58",null)),T=$.exports;a["default"].use(h["a"]);var B=[{path:"/",name:"Home",component:T,children:[{path:"/",name:"website",component:function(){return Promise.all([n.e("vis~website"),n.e("website")]).then(n.bind(null,"d31c"))}},{path:"/vis",name:"vis",component:function(){return Promise.all([n.e("vis~website"),n.e("vis")]).then(n.bind(null,"70e9"))}},{path:"/ins",name:"ins",component:function(){return n.e("ins").then(n.bind(null,"6d0c"))}}]},{path:"/c",name:"Caregiver",component:function(){return n.e("caregiver").then(n.bind(null,"b893"))}}],N=new h["a"]({routes:B}),I=N,q=n("2f62");a["default"].use(q["a"]);var D=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].use(d.a),a["default"].config.productionTip=!1,new a["default"]({router:I,store:D,render:function(t){return t(f)}}).$mount("#app")},6912:function(t,e,n){},6944:function(t,e,n){},"6c69":function(t,e,n){"use strict";n("6912")},"7add":function(t,e,n){"use strict";n("9e5d")},"85ec":function(t,e,n){},"9e5d":function(t,e,n){},d4b5:function(t,e,n){"use strict";n("f02d")},f02d:function(t,e,n){}});
//# sourceMappingURL=app.3ab21099.js.map