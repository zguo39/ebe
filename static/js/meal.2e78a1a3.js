(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["meal"],{"007d":function(e,t,n){e.exports=n.p+"img/lonemeal.078482e9.jpg"},"0481":function(e,t,n){"use strict";var r=n("23e7"),i=n("a2bf"),a=n("7b0b"),o=n("50c4"),s=n("a691"),l=n("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=o(t.length),r=l(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:s(e)),r}})},"0ad2":function(e,t,n){},1148:function(e,t,n){"use strict";var r=n("a691"),i=n("1d80");e.exports="".repeat||function(e){var t=String(i(this)),n="",a=r(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),m=n("d039"),f=[].push,g=Math.min,h=4294967295,p=!m((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(o(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var s,l,c,u=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,p=new RegExp(e.source,m+"g");while(s=d.call(p,r)){if(l=p.lastIndex,l>g&&(u.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&f.apply(u,s.slice(1)),c=s[0].length,g=l,u.length>=a))break;p.lastIndex===s.index&&p.lastIndex++}return g===r.length?!c&&p.test("")||u.push(""):u.push(r.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var o=n(r,e,this,i,r!==t);if(o.done)return o.value;var d=a(e),m=String(this),f=s(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"y":"g"),y=new f(p?d:"^(?:"+d.source+")",v),x=void 0===i?h:i>>>0;if(0===x)return[];if(0===m.length)return null===u(y,m)?[m]:[];var C=0,w=0,k=[];while(w<m.length){y.lastIndex=p?w:0;var E,F=u(y,p?m:m.slice(w));if(null===F||(E=g(c(y.lastIndex+(p?0:w)),m.length))===C)w=l(m,w,b);else{if(k.push(m.slice(C,w)),k.length===x)return k;for(var I=1;I<=F.length-1;I++)if(k.push(F[I]),k.length===x)return k;w=C=E}}return k.push(m.slice(C)),k}]}),!p)},"14d2":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro"},[e._m(0),e._m(1),n("h3",{staticClass:"sheading",staticStyle:{"text-align":"center",margin:"60px 0 20px"}},[e._v(" Add the food you eat in one day ")]),n("el-steps",{attrs:{active:e.active,"align-center":"","finish-status":"success"}},[n("el-step",{attrs:{title:"Step 1",description:"Please enter your age and gender, then submit to see your Recommended Daily Nutrient Intake"}}),n("el-step",{attrs:{title:"Step 2",description:"Please select the relevant foot category"}}),n("el-step",{attrs:{title:"Step 3",description:"Please select the quantity of food you are eating"}}),n("el-step",{attrs:{title:"Step 4",description:"Get your recommendation!"}})],1),n("section",{staticClass:"relate"},[n("div",{staticClass:"form"},[n("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm",attrs:{model:e.numberValidateForm,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"Gender",required:""}},[n("el-radio-group",{attrs:{size:"medium"},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[n("el-radio",{attrs:{border:"",label:"Female"}}),n("el-radio",{attrs:{border:"",label:"Male"}})],1)],1),n("el-form-item",{attrs:{label:"Age",prop:"age",rules:[{required:!0,message:"Age is required"},{type:"number",message:"Number Please"}]}},[n("el-input",{attrs:{type:"age",autocomplete:"off"},model:{value:e.numberValidateForm.age,callback:function(t){e.$set(e.numberValidateForm,"age",e._n(t))},expression:"numberValidateForm.age"}})],1),n("el-form-item",[n("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("numberValidateForm")}}},[e._v("Show required energy intake")])],1)],1)],1),n("div",{staticClass:"cross"},[n("cate",{attrs:{value:e.value},on:{update:e.updateDate,step2:function(t){e.active=2}}})],1)]),n("h3",{staticClass:"sheading",staticStyle:{"text-align":"center",margin:"40px 0 20px",color:"red"}},[e._v(" Nutrient Contents ")]),n("div",{staticClass:"els"},[n("el-switch",{attrs:{"active-text":"","inactive-text":"Vegeterian"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),n("section",{staticClass:"foodtable"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.result,height:"350",stripe:!0,"header-cell-style":{color:"#333",fontFamily:"MicrosoftYaHeiUI",fontSize:"14px",fontWeight:900},"empty-text":"Please follow the instruction"}},[n("el-table-column",{attrs:{fixed:"",prop:"Nutrients",label:"Nutrients",width:"250"}}),n("el-table-column",{attrs:{align:"center",fixed:"",prop:"Your Energy Count",label:"Your Energy Count",width:"200"}}),n("el-table-column",{attrs:{align:"center",prop:"Daily Requirement",label:"Daily Requirement",width:"200"}}),n("el-table-column",{attrs:{label:"Energy Meter",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("el-progress",{attrs:{percentage:Math.round(parseInt(e.row["Your Energy Count"])/parseInt(e.row["Daily Requirement"])*100)>100?100:Math.round(parseInt(e.row["Your Energy Count"])/parseInt(e.row["Daily Requirement"])*100)}})]}}])}),n("el-table-column",{attrs:{label:"Recommendations",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{placement:"left",width:"400",trigger:"click"},on:{hide:e.hide}},[n("el-table",{attrs:{data:e.recommendform,height:"300"}},[n("el-table-column",{attrs:{property:"Recommendations",label:"Recommendations",width:"360"}})],1),n("el-button",{attrs:{slot:"reference",type:"text",size:"small"},on:{click:function(n){return e.recommend(t.row)}},slot:"reference"},[e._v("Healthier Alternatives")])],1)]}}])})],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imgframe"},[r("img",{attrs:{src:n("007d"),width:"600",height:"400"}}),r("p",{staticClass:"pb"},[e._v(" The worlds of food and social interaction are inextricably linked. Food is often shared and acts as a means of communicating with others: sharing meals, cooking for loved ones, or feasting together during festivals. Furthermore, isolation, limited access to food, and changes in regular daily routines can all pose nutritional challenges. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"line"}),n("div",[e._v("Healthy Meals")]),n("div",{staticClass:"line"})])}],a=n("1da1"),o=(n("96cf"),n("159b"),n("b64b"),n("99af"),n("1276"),n("ac1f"),n("b680"),n("8137")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"transfer"},[n("div",{staticClass:"cateBox"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"search-box",attrs:{type:"text",name:"focus",required:"",placeholder:"Search..."},domProps:{value:e.term},on:{input:function(t){t.target.composing||(e.term=t.target.value)}}}),n("div",{ref:"leftbox",staticClass:"cg disabled"},[n("el-checkbox-group",{on:{change:e.curtick},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.curList,(function(e){return n("el-checkbox",{key:e,attrs:{label:e}})})),1)],1)]),n("div",{staticClass:"detail"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foodterm,expression:"foodterm"}],staticClass:"search-box2",attrs:{type:"text",name:"focus",required:"",placeholder:"Search..."},domProps:{value:e.foodterm},on:{input:function(t){t.target.composing||(e.foodterm=t.target.value)}}}),n("div",{ref:"rightbox",staticClass:"cg disabled"},[n("el-table",{staticStyle:{width:"97%"},attrs:{data:e.curfood,height:"215","header-cell-style":{color:"#333",fontFamily:"MicrosoftYaHeiUI",fontSize:"14px",fontWeight:900},stripe:!0,"row-style":{height:"0px"},"cell-style":{padding:"0px"}}},[n("el-table-column",{attrs:{prop:"Food Name",label:"Food Name",width:"320"}}),n("el-table-column",{attrs:{label:"Quantity(*100g)",width:"145"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input-number",{attrs:{min:0,size:"mini"},on:{change:function(n,r){e.changeNum(n,r,t.row)}},model:{value:t.row.quantity,callback:function(n){e.$set(t.row,"quantity",n)},expression:"scope.row.quantity"}})]}}])})],1)],1)])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h3box"},[n("h3",{staticClass:"title"},[e._v("Food Category")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h3box"},[n("h3",{staticClass:"title",staticStyle:{color:"#fb4839"}},[e._v("Food Item")])])}],c=(n("4de4"),n("a434"),n("a15b"),n("0481"),{created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["b"])();case 2:e.categoryList=t.sent,e.curList=e.categoryList;case 4:case"end":return t.stop()}}),t)})))()},props:["value"],data:function(){return{curList:[],categoryList:[],checkList:[],term:"",foodterm:"",mock:[],curfood:[],num4:0,inlist:[]}},watch:{value:function(e){1==e&&(this.$refs.leftbox.classList.remove("disabled"),this.$refs.rightbox.classList.remove("disabled"))},term:function(e,t){var n=e.length;e!==t&&0!==n?this.curList=this.categoryList.filter((function(t){return t.toLowerCase().substring(0,n)===e})):0==n&&(this.curList=this.categoryList)},foodterm:function(e,t){var n=e.length;e!==t&&0!==n?(console.log(e),this.curfood=this.mock.filter((function(t){return-1!==t["Food Name"].toLowerCase().indexOf(e)}))):0==n&&(this.curfood=this.mock)}},methods:{curtick:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.$emit("step2"),r=[],!(e.length<1)){n.next=7;break}return t.mock=[],t.curfood=[],t.inlist=[],n.abrupt("return");case 7:if(!(e.length<t.inlist.length)){n.next=15;break}return console.log("OK"),r=e.concat(t.inlist),r=r.filter((function(e){return r.indexOf(e)==r.lastIndexOf(e)})),t.inlist.splice(t.inlist.indexOf(r[0]),1),t.mock=t.mock.filter((function(e){return e["Food Category"]!==r[0]})),t.curfood=t.mock,n.abrupt("return");case 15:return e.length>t.inlist.length&&(r=e.concat(t.inlist),r=r.filter((function(e){return r.indexOf(e)==r.lastIndexOf(e)})),t.inlist.push(r[0])),r=r.join(","),n.next=19,Object(o["f"])(r);case 19:i=n.sent,i=i.data,i.forEach((function(e){var t=e[0]["Food Category"];localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(e))})),i=i.flat(),t.mock=t.mock.concat(i),t.curfood=t.mock;case 25:case"end":return n.stop()}}),n)})))()},changeNum:function(e,t,n){e<t?this.$emit("update",n,"neg"):this.$emit("update",n,"pos")}}}),u=c,d=(n("3164"),n("2877")),m=Object(d["a"])(u,s,l,!1,null,"2a27ac95",null),f=m.exports,g={"Protein in g":"Protein","Vitamin A in ug":"Vitamin A","Vitamin C in mg":"Vitamin C","Calcium in mg":"Calcium","Folate in ug":"Folate (Vitamin B9)","Potassium in mg":"Potassium"},h={data:function(){return{value1:!1,active:0,title:"",dialogTableVisible:!1,recommendform:[],food:"",value:!1,gender:"Female",numberValidateForm:{age:""},result:[],target:{"Protein in g":0,"Vitamin A in ug":0,"Vitamin C in mg":0,"Calcium in mg":0,"Folate in ug":0,"Potassium in mg":0},showtarget:!1}},components:{cate:f},methods:{send:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["e"])(e.numberValidateForm.age,e.gender);case 2:n=t.sent,e.target=n.data[0],e.result=[],r=[],Object.keys(e.target).forEach((function(t){r.push({Nutrients:t,"Your Energy Count":0,"Daily Requirement":"".concat(e.target[t]).concat(t.split(" ").pop(),"/day"),Recommendations:0})})),e.result=r,e.active=1,e.value=!0;case 10:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.open4("Age is required"),!1;t.numberValidateForm.age<60?t.open4("Age must be over 59"):t.numberValidateForm.age>110?t.open4("Age must be under 110"):(t.send(),t.open1())}))},open4:function(e){this.$notify.error({title:"Error",message:e,offset:150,position:"top-left"})},open1:function(){this.$notify({title:"Success",message:"Submited",type:"success"})},updateDate:function(e,t){this.active=3,"pos"==t?this.result.forEach((function(t){switch(t["Nutrients"]){case"Protein in g":t["Your Energy Count"]=(e["Protein in g"]+parseInt(t["Your Energy Count"])).toFixed(1)+"g/day";break;case"Vitamin A in ug":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])+e["Vitamin A retinol equivalents in ug"]).toFixed(1)+"ug/day";break;case"Vitamin C in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])+e["Vitamin C in mg"]).toFixed(1)+"mg/day";break;case"Folate in ug":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])+e["Folate natural in ug"]).toFixed(1)+"ug/day";break;case"Calcium in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])+e["Calcium (Ca) in mg"]).toFixed(1)+"mg/day";break;case"Potassium in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])+e["Potassium (K) in mg"]).toFixed(1)+"mg/day";break}})):this.result.forEach((function(t){switch(t["Nutrients"]){case"Protein in g":var n=(parseInt(t["Your Energy Count"])-e["Protein in g"]).toFixed(1);t["Your Energy Count"]=(n<0?0:n)+"g/day";break;case"Vitamin A in ug":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])-e["Vitamin A retinol equivalents in ug"]).toFixed(1)+"ug/day";break;case"Vitamin C in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])-e["Vitamin C in mg"]).toFixed(1)+"mg/day";break;case"Folate in ug":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])-e["Folate natural in ug"]).toFixed(1)+"ug/day";break;case"Calcium in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])-e["Calcium (Ca) in mg"]).toFixed(1)+"mg/day";break;case"Potassium in mg":t["Your Energy Count"]=(parseInt(t["Your Energy Count"])-e["Potassium (K) in mg"]).toFixed(1)+"mg/day";break}}))},recommend:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.active=4,r=g[e["Nutrients"]],!t.value1){n.next=10;break}return console.log(t.value1),n.next=6,Object(o["d"])("veg",r);case 6:i=n.sent,t.recommendform=i,n.next=14;break;case 10:return n.next=12,Object(o["d"])("non",r);case 12:a=n.sent,t.recommendform=a;case 14:case"end":return n.stop()}}),n)})))()},hide:function(){this.recommendform=[]}}},p=h,b=(n("cacd"),Object(d["a"])(p,r,i,!1,null,"547efb9c",null));t["default"]=b.exports},3164:function(e,t,n){"use strict";n("8cc7")},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"8cc7":function(e,t,n){},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),o=n("a640"),s=[].join,l=i!=Object,c=o("join",",");r({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},a2bf:function(e,t,n){"use strict";var r=n("e8b5"),i=n("50c4"),a=n("0366"),o=function(e,t,n,s,l,c,u,d){var m,f=l,g=0,h=!!u&&a(u,d,3);while(g<s){if(g in n){if(m=h?h(n[g],g,t):n[g],c>0&&r(m))f=o(e,t,m,i(m.length),f,c-1)-1;else{if(f>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[f]=m}f++}g++}return f};e.exports=o},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),a=n("a691"),o=n("50c4"),s=n("7b0b"),l=n("65f0"),c=n("8418"),u=n("1dde"),d=u("splice"),m=Math.max,f=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,u,d,p,b,v=s(this),y=o(v.length),x=i(e,y),C=arguments.length;if(0===C?n=r=0:1===C?(n=0,r=y-x):(n=C-2,r=f(m(a(t),0),y-x)),y+n-r>g)throw TypeError(h);for(u=l(v,r),d=0;d<r;d++)p=x+d,p in v&&c(u,d,v[p]);if(u.length=r,n<r){for(d=x;d<y-r;d++)p=d+r,b=d+n,p in v?v[b]=v[p]:delete v[b];for(d=y;d>y-r+n;d--)delete v[d-1]}else if(n>r)for(d=y-r;d>x;d--)p=d+r-1,b=d+n-1,p in v?v[b]=v[p]:delete v[b];for(d=0;d<n;d++)v[d+x]=arguments[d+2];return v.length=y-r+n,u}})},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),o=n("d039"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return a(i(e))}})},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("a691"),a=n("408a"),o=n("1148"),s=n("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},m=function(e,t,n){var r=-1,i=n;while(++r<6)i+=t*e[r],e[r]=i%1e7,i=c(i/1e7)},f=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=c(r/t),r=r%t*1e7},g=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+o.call("0",7-r.length)+r}return n},h=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,n,r,s,l=a(this),c=i(e),h=[0,0,0,0,0,0],p="",b="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=d(l*u(2,69,1))-69,n=t<0?l*u(2,-t,1):l/u(2,t,1),n*=4503599627370496,t=52-t,t>0){m(h,0,n),r=c;while(r>=7)m(h,1e7,0),r-=7;m(h,u(10,r,1),0),r=t-1;while(r>=23)f(h,1<<23),r-=23;f(h,1<<r),m(h,1,1),f(h,2),b=g(h)}else m(h,0,n),m(h,1<<-t,0),b=g(h)+o.call("0",c);return c>0?(s=b.length,b=p+(s<=c?"0."+o.call("0",c-s)+b:b.slice(0,s-c)+"."+b.slice(s-c))):b=p+b,b}})},cacd:function(e,t,n){"use strict";n("0ad2")}}]);
//# sourceMappingURL=meal.2e78a1a3.js.map