(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["meal"],{"14d2":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",[e._v(" age: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number"},domProps:{value:e.age},on:{input:function(n){n.target.composing||(e.age=n.target.value)}}})]),t("div",[e._v(" gender: "),t("el-radio",{attrs:{label:"1"},model:{value:e.gender,callback:function(n){e.gender=n},expression:"gender"}},[e._v("Male")]),t("el-radio",{attrs:{label:"2"},model:{value:e.gender,callback:function(n){e.gender=n},expression:"gender"}},[e._v("Female")])],1),t("div",[e._v(" food: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.food,expression:"food"}],attrs:{type:"text"},domProps:{value:e.food},on:{input:function(n){n.target.composing||(e.food=n.target.value)}}})]),t("button",{on:{click:e.send}},[e._v("submit")]),t("div",[e._v(" "+e._s(e.result)+" ")])])},o=[],r=t("1da1"),d=(t("96cf"),t("8137")),s={data:function(){return{food:"",gender:"",age:"",result:""}},methods:{send:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.food,e.age,e.gender),n.next=3,Object(d["c"])(e.age,e.gender,e.food);case 3:t=n.sent,e.result=t.data||t,console.log(t.data);case 6:case"end":return n.stop()}}),n)})))()}}},l=s,i=t("2877"),u=Object(i["a"])(l,a,o,!1,null,"213519cd",null);n["default"]=u.exports}}]);
//# sourceMappingURL=meal.8690faac.js.map