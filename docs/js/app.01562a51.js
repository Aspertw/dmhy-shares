(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"345a":function(t,e,n){"use strict";var r=n("ad74"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Push",[n("program-menu",{on:{selected:t.changeProgram}})],1),n("main",{attrs:{id:"page-wrap"}},[n("section",{staticClass:"hero is-fullheight is-dark has-text-centered"},[t.contentSrc?n("content-frame",{staticStyle:{height:"calc(100vh - 22px)"},attrs:{src:t.contentSrc}}):n("div",{staticClass:"hero-body",staticStyle:{"justify-content":"center"}},[n("h3",{staticClass:"title is-3 has-text-grey-light"},[t._v("\n                    左邊選單選擇新番名稱\n                ")])]),t._m(0)],1)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-head has-background-black-ter has-text-grey-light",staticStyle:{height:"22px","font-size":".7em"}},[n("a",{attrs:{href:"https://github.com/Aspertw/dmhy-shares",target:"_blank"}},[t._v("\n                    Source Code by Asper\n                ")])])}],i=(n("a481"),n("db0f")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-frame"},[n("iframe",{attrs:{src:t.src,frameborder:"0"}})])},s=[],u={props:{src:{type:String,required:!0}}},l=u,f=(n("345a"),n("2877")),p=Object(f["a"])(l,c,s,!1,null,null,null);p.options.__file="ContentFrame.vue";var d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},[n("h3",[t._v("花園週番")]),n("div",{staticClass:"menu"},[n("ul",{staticClass:"menu-list"},t._l(t.dayNames,function(e,r){return n("li",{key:r},[n("a",{class:{"has-background-grey":t.activeDayNo==r},on:{click:function(e){e.stopPropagation(),t.activeDayNo=r}}},[t._v("\n                    "+t._s(e)+"\n                ")]),n("ul",{class:{"is-hidden":t.activeDayNo!=r}},[n("li",t._l(t.weekPrograms[r],function(e,r){return n("a",{key:r,class:{"is-active":t.activeProgram==e},on:{click:function(n){t.activeProgram=e}}},[t._v("\n                            "+t._s(e)+"\n                        ")])}))])])}))])])},v=[],m=n("5c2a"),g=n.n(m),y=(new Date).getDay(),b={data:function(){return{weekPrograms:g.a,dayNames:["週日","週一","週二","週三","週四","週五","週六"],activeProgram:null,activeDayNo:y}},watch:{activeProgram:function(){this.activeProgram&&this.$emit("selected",this.activeProgram)}}},_=b,P=(n("d4a4"),Object(f["a"])(_,h,v,!1,null,null,null));P.options.__file="ProgramMenu.vue";var w=P.exports,k="http://share.dmhy.org/topics/list?keyword=",S={name:"app",components:{Push:i["Push"],ContentFrame:d,ProgramMenu:w},created:function(){"https:"==location.protocol&&(location.href=location.href.replace("https:","http:"))},data:function(){return{keyword:null}},computed:{contentSrc:function(){return this.keyword?k+this.keyword:null}},methods:{changeProgram:function(t){this.keyword=t}}},x=S,O=(n("034f"),Object(f["a"])(x,a,o,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;n("92c6"),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c2a":function(t,e){t.exports={0:["Double Decker","魔導少年","尤利西斯 貞德與鍊金騎士","書店裡的骷髏店員本田","風舞高中弓道部"],1:["東離劍遊記","關於我轉生變成史萊姆這檔事","宇宙戰艦提拉米斯","黃金神威","蒼天之拳"],2:["強風吹拂","東京喰種","Conception"],3:["在天空與海洋之間","RErideD","青春豬頭少年","我喜歡的妹妹不是妹妹","只要別西卜大小姐喜歡就好","Ingress"],4:["殭屍樂園","學園 BASARA","BAKUMATSU","梅露可物語","魔偶馬戲團","百萬亞瑟王"],5:["隔壁的吸血鬼美眉","終將成為妳","魔法禁書目錄","火之丸相撲","錢進球場","狐狸之聲","我家的女僕有夠煩！","我讓最想被擁抱的男人給威脅了","JOJO 的奇妙冒險 黃金之風","寄宿學校的茱麗葉","來自繽紛世界的明日","閃亂神樂"],6:["逆轉裁判","Radiant","刀劍神域","SSSS.GRIDMAN","哥布林殺手"]}},"64a9":function(t,e,n){},"89e1":function(t,e,n){},ad74:function(t,e,n){},d4a4:function(t,e,n){"use strict";var r=n("89e1"),a=n.n(r);a.a}});
//# sourceMappingURL=app.01562a51.js.map