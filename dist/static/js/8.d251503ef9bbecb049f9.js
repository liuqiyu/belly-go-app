webpackJsonp([8],{"5lmY":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{Atopbar:e("TazC").a},data:function(){return{form:{username:"",password:""}}},methods:{submit:function(){var t=this;this.$store.dispatch("login",this.form).then(function(){t.$router.go(-1)}).catch(function(){})},goBack:function(){this.$router.go(-1)}}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("Atopbar",[e("div",{attrs:{slot:"left"},slot:"left"}),t._v(" "),e("div",{attrs:{slot:"right"},slot:"right"},[e("a",{staticClass:"iconfont icon-error",on:{click:t.goBack}})])]),t._v(" "),e("div",{staticClass:"l-body"},[e("div",{staticClass:"form"},[e("div",{staticClass:"f-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"l-input",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.form.username},on:{input:function(s){s.target.composing||t.$set(t.form,"username",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"f-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"l-input",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"f-item"},[e("mt-button",{staticStyle:{width:"100%"},attrs:{size:"small",type:"primary"},on:{click:t.submit}},[t._v("登录")])],1),t._v(" "),e("div",{staticClass:"f-item help"},[e("router-link",{attrs:{to:"/register"}},[t._v("立即注册")]),t._v(" "),e("span",[t._v("忘记密码？")])],1)])]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"l-other-login"},[s("h3",[this._v("其他登录")]),this._v(" "),s("div",{staticClass:"other"},[s("div",{staticClass:"other-item"},[this._v("1")]),this._v(" "),s("div",{staticClass:"other-item"},[this._v("2")]),this._v(" "),s("div",{staticClass:"other-item"},[this._v("3")])])])}]};var o=e("VU/8")(i,a,!1,function(t){e("60ht")},"data-v-75002ec4",null);s.default=o.exports},"60ht":function(t,s){}});