!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["npm/weex-droplet-ui/example/search/index"]=t():e["npm/weex-droplet-ui/example/search/index"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=165)}({1:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},10:function(e,t){e.exports={"icon-font":{fontFamily:"dropletUiIconfont",color:"#666666",fontSize:"32"}}},12:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("text",{staticClass:["icon-font"],style:e.iconStyle},[e._v(e._s(e.Icon[e.name]))])},staticRenderFns:[]}},142:function(e,t,n){var o,r,s=[];s.push(n(214)),o=n(192);var c=n(239);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-bed1eed8",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=o},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(142),r=function(e){return e&&e.__esModule?e:{default:e}}(o);r.default.el="#root",t.default=new Vue(r.default)},17:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(22);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{searchContent1:"",searchContent2:""}},methods:{},components:{WxSearch:r.default}}},214:function(e,t){e.exports={result:{width:"750",height:"40"},"m-b-20":{marginBottom:"20"},f32:{fontSize:"32"}}},22:function(e,t,n){var o,r,s=[];s.push(n(30)),o=n(26);var c=n(34);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-ce8f844e",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=o},239:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("wx-search",{model:{value:e.searchContent1,callback:function(t){e.searchContent1=t},expression:"searchContent1"}}),n("div",{staticClass:["result","m-b-20"]},[n("text",{staticClass:["f32"]},[e._v(e._s(e.searchContent1))])]),n("wx-search",{attrs:{placeholder:"请输入",autofocus:!0,bgColor:"#4676FF",innerBgColor:"#fff",cancelColor:"#fff"},model:{value:e.searchContent2,callback:function(t){e.searchContent2=t},expression:"searchContent2"}}),n("div",{staticClass:["result","m-b-20"]},[n("text",{staticClass:["f32"]},[e._v(e._s(e.searchContent2))])])],1)},staticRenderFns:[]}},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={props:{value:{type:String},autofocus:{type:Boolean,default:!1},bgColor:{type:String,default:"#d9d9d9"},placeholder:{type:String,default:"搜索"},cancelColor:{type:String,default:"#4d4d4d"},innerBgColor:{type:String,default:"#fff"}},data:function(){return{searchStyle:{},showCancel:!1,iconSearchStyle:{"font-size":"32px",color:"#ccc",height:"33px",width:"44px","margin-top":"5px"}}},created:function(){this.setStyle()},methods:{setStyle:function(){this.searchStyle=Object.assign({},{"background-color":this.bgColor}),this.cancelStyle=Object.assign({},{color:this.cancelColor}),this.innerStyle=Object.assign({},{"background-color":this.innerBgColor})},input:function(e){this.$emit("input",e.value)},focus:function(){this.showCancel=!0},handleClickCancel:function(){this.showCancel=!1,this.$emit("input",""),this.$refs.searchInput.blur()}},mounted:function(){this.autofocus&&this.$refs.searchInput.focus()},components:{WxIcon:r.default}}},30:function(e,t){e.exports={"wx-search":{display:"flex",flexDirection:"row",width:"750",height:"88",paddingTop:"16",paddingRight:"20",paddingBottom:"16",paddingLeft:"20"},"wx-search-inner":{display:"flex",flexDirection:"row",backgroundColor:"#ffffff",paddingTop:"8",paddingRight:"12",paddingBottom:"8",paddingLeft:"12",borderRadius:"4",height:"56"},"search-input":{height:"38",width:"642"},focus:{width:"542"},cancel:{width:"100",height:"56",paddingLeft:"20",justifyContent:"center",alignItems:"center"},f32:{fontSize:"32"}}},34:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wx-search"],style:e.searchStyle},[n("div",{staticClass:["wx-search-inner"],style:e.innerStyle},[n("wx-icon",{attrs:{name:"search",styles:e.iconSearchStyle}}),n("input",{ref:"searchInput",staticClass:["search-input"],class:[e.showCancel?"focus":""],style:{"background-color":e.innerBgColor},attrs:{type:"text",placeholder:e.placeholder,value:e.value},on:{input:e.input,focus:e.focus}})],1),n("div",{staticClass:["cancel"],on:{click:e.handleClickCancel}},[e.showCancel?n("text",{staticClass:["f32"],style:e.cancelStyle},[e._v("取消")]):e._e()])])},staticRenderFns:[]}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={roundclose:"",success:"",search:"",enter:"",back:""}},7:function(e,t,n){var o,r,s=[];s.push(n(10)),o=n(9);var c=n(12);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-dc895e2c",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=o},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=function(e){return e&&e.__esModule?e:{default:e}}(o),s=weex.requireModule("dom");t.default={props:{name:{type:String,default:"success"},styles:{type:Object,default:function(){return{}}}},data:function(){return{iconStyle:{},Icon:r.default}},beforeCreate:function(){s.addRule("fontFace",{fontFamily:"dropletUiIconfont",src:"url('https://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')"})},created:function(){this.setStyle()},methods:{setStyle:function(){this.iconStyle=Object.assign({},this.styles)}}}}})});