(function(t){function e(e){for(var i,a,r=e[0],u=e[1],d=e[2],o=0,s=[];o<r.length;o++)a=r[o],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&s.push(l[a][0]),l[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);b&&b(e);while(s.length)s.shift()();return n.push.apply(n,d||[]),c()}function c(){for(var t,e=0;e<n.length;e++){for(var c=n[e],i=!0,r=1;r<c.length;r++){var u=c[r];0!==l[u]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=c[0]))}return t}var i={},l={app:0},n=[];function a(e){if(i[e])return i[e].exports;var c=i[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=t,a.c=i,a.d=function(t,e,c){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(c,i,function(e){return t[e]}.bind(null,i));return c},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var b=u;n.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"2bff":function(t,e,c){"use strict";c("75fc")},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var i=c("7a23"),l=(c("d3b7"),c("ddb0"),{class:"main-content"}),n={class:"coll"},a={class:"categories"},r={class:"filtres"},u={class:"filtres__item"},d=Object(i["d"])("p",{class:"filtres__title"},"регионы",-1),b={value:"Все регионы"},o=Object(i["e"])('<div class="filtres__item"><p class="filtres__title">Статистика кластеров</p><select><option>Все</option><option>Брянская область</option><option>Белгородская область</option><option>Владимирская область</option></select></div><div class="filtres__item"><p class="filtres__title">Статистика внутренней рекламы</p><select><option>Все</option><option>Брянская область</option><option>Белгородская область</option><option>Владимирская область</option></select></div>',2),s={class:"cart"},O={class:"grapf__item grapf__item_figure"},j=Object(i["d"])("td",{style:{width:"152px"}},null,-1);function f(t,e,c,f,v,p){var h=Object(i["m"])("rubrics");return Object(i["i"])(),Object(i["c"])("div",l,[Object(i["d"])("div",n,[Object(i["g"])(h,{onCurrentHeading:p.headingOn},null,8,["onCurrentHeading"]),Object(i["d"])("div",a,[Object(i["d"])("div",r,[Object(i["d"])("div",u,[d,Object(i["d"])("select",b,[(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(v.regions,(function(t,e){return Object(i["i"])(),Object(i["c"])("option",{key:e},Object(i["n"])(t.title),1)})),128))])]),o]),Object(i["f"])(" "+Object(i["n"])(v.title)+" ",1),Object(i["d"])("div",s,[(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(v.cart,(function(t,e){return Object(i["i"])(),Object(i["c"])("div",{class:"cart__graph",key:e},[Object(i["f"])(Object(i["n"])(t.value)+" ",1),Object(i["d"])("div",O,[Object(i["d"])("div",{class:"figure",style:Object(i["h"])({height:"".concat(t.value/50,"%")})},null,4)]),Object(i["f"])(" "+Object(i["n"])(t.date),1)])})),128))]),Object(i["d"])("table",null,[Object(i["d"])("tbody",null,[Object(i["d"])("tr",null,[j,(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(v.table[0].values,(function(t,e){return Object(i["i"])(),Object(i["c"])("td",{key:e},Object(i["n"])(t.date),1)})),128))])])]),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(v.table,(function(t,e){return Object(i["i"])(),Object(i["c"])("table",{key:e},[Object(i["d"])("tbody",null,[Object(i["d"])("tr",null,[Object(i["d"])("td",null,Object(i["n"])(t.title),1),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.values,(function(t,e){return Object(i["i"])(),Object(i["c"])("td",{key:e},Object(i["n"])(t.value),1)})),128))]),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.childs,(function(t,e){return Object(i["i"])(),Object(i["c"])("tr",{key:e},[Object(i["d"])("td",null,Object(i["n"])(t.title),1),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.values,(function(t,e){return Object(i["i"])(),Object(i["c"])("td",{key:e},Object(i["n"])(t.value),1)})),128))])})),128)),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.childs,(function(t,e){return Object(i["i"])(),Object(i["c"])("tr",{key:e},[(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.childsT,(function(t,e){return Object(i["i"])(),Object(i["c"])("td",{key:e},Object(i["n"])(t.title),1)})),128)),(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(t.childsT.values,(function(t,e){return Object(i["i"])(),Object(i["c"])("td",{key:e},Object(i["n"])(t.values.value),1)})),128))])})),128))])])})),128))])])])}var v={class:"rubric-statistic"};function p(t,e,c,l,n,a){return Object(i["i"])(),Object(i["c"])("div",v,[Object(i["d"])("ul",{class:"rubrics",onClick:e[0]||(e[0]=function(){return a.rubric&&a.rubric.apply(a,arguments)})},[(Object(i["i"])(!0),Object(i["c"])(i["a"],null,Object(i["l"])(n.rubrics,(function(t,e){return Object(i["i"])(),Object(i["c"])("li",{key:e,class:"rubrics__li rubrics__li_all","data-rubric":"all",ref:"myInput"},Object(i["n"])(t.title),513)})),128))])])}var h=[{title:"Все рубрики",id:1},{title:"Материалы",id:2},{title:"Оборудование",id:3},{title:"Потребительские товары",id:4},{title:"Продовольствие, сельское хозяйство",id:5},{title:"Строительство и ремонт",id:6},{title:"Транспорт",id:7}],_=h,y={data:function(){return{heading:"",rubrics:_}},methods:{rubric:function(t){this.heading=t.target.innerHTML,this.$emit("current-heading",this.heading)}}},g=(c("2bff"),c("6b0d")),m=c.n(g);const k=m()(y,[["render",p],["__scopeId","data-v-bdc665b4"]]);var P=k,U={regions_list:[{title:"Все регионы",id:1},{title:"Казахстан",id:2},{title:"Беларусь",id:2},{title:"Поволжье",id:2},{title:"Приуралье",id:2},{title:"Северо-Запад",id:2},{title:"Дальний Восток",id:2},{title:"Сибирь",id:2},{title:"УрФО",id:2},{title:"Центр",id:2},{title:"Юг",id:2}],clasters_list:[{title:"Name1",id:1},{title:"Name2",id:2}],ad_statistics_list:[{title:"Name1",id:1},{title:"Name2",id:2}],chart:[{date:"2021-01",value:2e3},{date:"2021-02",value:5e3},{date:"2021-03",value:2e3},{date:"2021-04",value:1e3},{date:"2021-05",value:500}],table:[{title:"GROUP NAME 1",total:9800,values:[{date:"2021-01",value:1500},{date:"2021-02",value:5100},{date:"2021-03",value:6100},{date:"2021-04",value:3400}],childs:[{title:"SUB GROUP NAME 1",total:3600,values:[{date:"2021-01",value:250},{date:"2021-02",value:510}],childsT:[{title:"SUB SUB GROUP NAME 1",total:3600,values:[{date:"2021-01",value:260},{date:"2021-02",value:610}]}]}]},{title:"GROUP NAME 2",total:9800,values:[{date:"2021-01",value:1500},{date:"2021-02",value:5100},{date:"2021-03",value:6100},{date:"2021-04",value:3400}],childs:[{title:"SUB GROUP NAME 2",total:3600,values:[{date:"2021-01",value:260},{date:"2021-02",value:610}],childsT:[{title:"SUB SUB GROUP NAME 2",total:3600,values:[{date:"2021-01",value:260},{date:"2021-02",value:610}]}]}]}]},w=U,M={name:"App",components:{rubrics:P},data:function(){return{title:"",regions:w.regions_list,table:w.table,cart:w.chart}},methods:{headingOn:function(t){this.title=t}}};c("7245");const S=m()(M,[["render",f]]);var N=S;c("f5df1");Object(i["b"])(N).mount("#app")},7245:function(t,e,c){"use strict";c("97da")},"75fc":function(t,e,c){},"97da":function(t,e,c){}});
//# sourceMappingURL=app.e70850af.js.map