(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513000ac"],{"11cf":function(t,e,a){"use strict";a("2f9d")},2520:function(t,e,a){"use strict";a("fb81")},"2f9d":function(t,e,a){},4886:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mx-auto my-8 px-4 lg:px-8"},[a("div",{staticClass:"text-[28px] font-bold tracking-[.3px]"},[t._v("Oto Paspas Fiyatları")]),a("div",{staticClass:"flex items-center h-12 mb-8"},[a("Breadcrumb",{staticClass:"flex-1",attrs:{road:t.breadcrumb}}),a("Dropdown",{attrs:{options:t.sorting.list},model:{value:t.sorting.active,callback:function(e){t.$set(t.sorting,"active",e)},expression:"sorting.active"}})],1),a("div",{class:{"grid lg:grid-cols-[230px,1fr] gap-5":t.sidebar}},[t.sidebar?a("div",{staticClass:"border border-gray-100 rounded-lg w-full h-[1000px]"}):t._e(),a("div",{staticClass:"w-full"},[a("div",{staticClass:"grid gap-x-5 gap-y-6 grid-cols-1 sm:grid-cols-2",class:[t.sidebar?"md:grid-cols-3":"md:grid-cols-4"]},[t._l(t.products,(function(t){return[a("Product",{attrs:{data:t}})]}))],2),a("Pagination",{staticClass:"mt-12",attrs:{"list-product-count":t.products.length,"total-product-count":t.products.length}})],1)])])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center"},[t._l(t.road,(function(e,s){return[e.link?a("router-link",{staticClass:"text-[12px] font-bold text-gray-400 hover:text-gray-500 transition-colors mr-1",attrs:{to:e.link}},[t._v(" "+t._s(e.title)+" ")]):a("div",{staticClass:"text-[12px] font-bold text-gray-400"},[t._v(t._s(e.title))]),s!==t.road.length-1?a("svg",{staticClass:"stroke-current text-gray-200 h-3 w-3 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[a("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M9 5l7 7-7 7"}})]):t._e()]}))],2)},r=[],l={props:{road:{type:Array,required:!0}}},o=l,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card group flex flex-col rounded-lg cursor-pointer transition-all !duration-300 h-100",attrs:{to:t.data.link,tag:"div"}},[a("div",{on:{mouseleave:function(e){t.activeImage=0}}},[a("div",{staticClass:"px-3 pt-4 mb-3 text-xs text-center text-gray-600 line-clamp-2 leading-[18px]"},[t._v(t._s(t.data.name))]),a("div",{staticClass:"pt-[100%] w-full relative"},[t.data.images.length>1?[a("div",{staticClass:"absolute top-0 bottom-0 left-0 ring-0 h-full w-full z-20 flex"},t._l(t.data.images,(function(e,s){return a("div",{staticClass:"flex-1 h-full",on:{mouseenter:function(e){t.activeImage=s}}})})),0),a("div",{staticClass:"absolute bottom-[-6px] left-0 ring-0 z-10 w-full hidden group-hover:flex justify-center items-center h-[6px]"},t._l(t.data.images,(function(e,s){return a("div",{staticClass:"w-3 h-[2px] bg-gray-300 mx-0.5 transition-width !duration-500 rounded-full",class:{"!w-6":s===t.activeImage}})})),0)]:t._e(),a("div",{staticClass:"absolute top-0 bottom-0 left-0 ring-0 h-full w-full z-10 overflow-hidden bg-gray-200"},[t._l(t.data.images,(function(e,s){return[s===t.activeImage?a("img",{staticClass:"h-full w-full object-cover object-center",class:{"transition-transform !duration-300 transform group-hover:scale-105":1===t.data.images.length},attrs:{src:e,alt:t.data.name}}):t._e()]}))],2)],2),a("div",{staticClass:"p-4 pt-0 mt-3 relative z-40"},[a("div",{staticClass:"h-[84px]"},[a("div",{staticClass:"text-green-400 text-[10px] leading-4 h-4 font-bold"},["ExtraDiscount"===t.data.priceInfo.discountType?[t._v("Sepette "),a("span",{staticClass:"text-xs"},[t._v("%"+t._s(t.data.priceInfo.discountRate))]),t._v(" indirimli fiyat")]:t._e()],2),a("div",{staticClass:"text-[18px] leading-5 font-bold tracking-[-.3px]",class:{"text-green-400":"ExtraDiscount"===t.data.priceInfo.discountType}},[t._v(" "+t._s(t.data.priceInfo.price)+" "),a("span",{staticClass:"text-sm"},[t._v("TL")])]),a("div",{staticClass:"flex mt-1"},[a("s",{staticClass:"text-gray-400 block text-sm leading-4"},[t._v(t._s(t.data.priceInfo.originalPrice)+" "),a("span",{staticClass:"tracking-[-.3px]"},[t._v("TL")])]),"Discount"===t.data.priceInfo.discountType?a("span",{staticClass:"text-red-500 ml-1 leading-4 tracking-[-.14px] font-bold text-xs"},[t._v("%"+t._s(t.data.priceInfo.discountRate))]):t._e()]),a("div",{staticClass:"mt-2 text-xs flex items-center h-5"},[a("svg",{staticClass:"mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12"}},[a("path",{attrs:{fill:"#F69F29",d:"M11.777 4.364c-.109-.293-.389-.489-.702-.49H8.03c-.106 0-.2-.066-.236-.167L6.702.611C6.592.318 6.313.124 6 .124c-.313 0-.593.194-.702.487l-.003.008-1.09 3.088c-.035.1-.13.167-.236.167H.925c-.316 0-.598.198-.705.494-.108.297-.019.63.224.832l2.591 2.15c.08.066.11.174.078.272l-1.089 3.265c-.103.31.006.65.27.843.264.193.622.192.885-.001l2.673-1.96c.088-.064.208-.064.295 0l2.672 1.96c.264.193.622.194.886.002.265-.193.374-.534.27-.844L8.887 7.619c-.033-.097-.002-.205.077-.271l2.597-2.153c.24-.204.326-.536.216-.83z"}})]),a("div",{staticClass:"leading-5 font-semibold"},[t._v("4,4")]),a("div",{staticClass:"w-[3px] h-[3px] rounded-full bg-gray-300 mx-1 block"}),a("div",{staticClass:"flex"},[a("span",{staticClass:"font-bold mr-0.5"},[t._v("63")]),a("span",[t._v("Değerlendirme")])])])]),a("router-link",{staticClass:"bottom-4 left-0 right-0 px-4 w-full pt-1.5 absolute transition-all !duration-100 invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-white",class:t.data.button.class,attrs:{tag:"button",to:t.data.button.link}},[a("button",{staticClass:"btn btn-primary h-[40px] text-sm"},[t._v(t._s(t.data.button.text))])])],1)])])},g=[],f={props:{data:{type:Object|Array,required:!0}},data:function(){return{activeImage:0}}},v=f,x=(a("2520"),Object(c["a"])(v,p,g,!1,null,"eccab544",null)),m=x.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeMenu,expression:"closeMenu"}],staticClass:"dropdown relative"},[a("button",{staticClass:"dropdown__button bg-white rounded-lg h-[46px] border border-gray-200 px-4 flex items-center outline-none focus:outline-none transition-colors !duration-300 select-none",class:{"text-orange-500":null!==t.value},on:{click:t.toggleMenu}},[a("span",{staticClass:"mr-2 text-sm font-semibold tracking-tight"},[t._v("Sıralama")]),a("svg",{staticClass:"fill-current text-gray-700 transition-all !duration-300 transform",class:{"text-orange-500":null!==t.value,"rotate-180":t.isOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"}},[a("g",{attrs:{"fill-rule":"evenodd"}},[a("path",{attrs:{d:"M.262 0h20v20h-20z",fill:"transparent"}}),a("path",{attrs:{d:"M8.352 8.333c-.617 0-1.01.082-1.18.244-.254.244-.325.853 0 1.179l2.5 2.5a.836.836 0 001.18 0l2.5-2.5c.325-.326.259-.935 0-1.179-.174-.162-.567-.244-1.18-.244h-3.82z"}})])])]),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dropdown__list absolute mt-2 right-0 bg-white rounded-lg z-10 min-w-[260px] p-2"},[null!==t.value?a("li",{staticClass:"flex items-center h-12 px-4 hover:bg-gray-100 bg-opacity-80 rounded-lg transition-colors duration-300 cursor-pointer hover:text-orange-500 font-medium select-none",on:{click:function(e){return t.selectOption(null)}}},[t._v("Varsayılan")]):t._e(),t._l(t.options,(function(e,s){return a("li",{staticClass:"flex items-center h-12 px-4 hover:bg-gray-100 bg-opacity-80 rounded-lg transition-colors duration-300 cursor-pointer hover:text-orange-500 font-medium select-none",class:{"text-orange-500 !bg-orange-100":t.value===s},on:{click:function(e){return t.selectOption(s)}}},[a("span",{staticClass:"flex-1"},[t._v(t._s(e))]),t.value===s?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"}},[a("path",{attrs:{fill:"#FF6000",d:"M13.18 1.427L5.133 12.925a.176.176 0 01-.141.076.172.172 0 01-.142-.07L2.8 10.2a1 1 0 00-1.6 1.2l2.048 2.73a2.168 2.168 0 001.776.87 2.17 2.17 0 001.748-.93l8.047-11.497a.999.999 0 10-1.638-1.146z","fill-rule":"evenodd"}})]):t._e()])}))],2)])},b=[],w=a("c7db"),C={mixins:[w["mixin"]],props:{value:{required:!0},options:{type:Array|Object,required:!0}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen},closeMenu:function(){this.isOpen=!1},selectOption:function(t){this.closeMenu(),this.$emit("input",t)}},data:function(){return{isOpen:!1}}},_=C,y=(a("11cf"),Object(c["a"])(_,h,b,!1,null,"0b767dd8",null)),k=y.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col justify-center items-center"},[a("div",{staticClass:"mb-4 text-sm text-gray-500"},[t._v("Toplam "+t._s(t.listProductCount)+" / "+t._s(t.totalProductCount>=1e4?"10000+":t.totalProductCount)+" ürün")]),a("div",{staticClass:"w-64 h-2 rounded-full bg-gray-200 overflow-hidden"},[a("div",{staticClass:"rounded-full bg-gray-700 h-full min-w-[10px] transition-all !duration-300",style:{width:100*t.listProductCount/t.totalProductCount+"%"}})])])},P=[],j=(a("a9e3"),{props:{listProductCount:Number,totalProductCount:Number,loaded:{type:Boolean,default:!0}}}),I=j,M=Object(c["a"])(I,O,P,!1,null,"fedc944c",null),z=M.exports,A={components:{Breadcrumb:d,Pagination:z,Dropdown:k,Product:m},data:function(){return{sidebar:!0,breadcrumb:[{title:"Ana Sayfa",link:"/"},{title:"Yapı Market Bahçe Oto",link:"/"},{title:"Oto Aksesuarları",link:"/"},{title:"Oto Aksesuar Ürünleri",link:"/"},{title:"Oto Paspasları"}],sorting:{active:null,list:["En Çok Satanlar","Değerlendirme Sayısı","Artan Fiyat","Azalan Fiyat","En Yeniler","Ürün Puanı"]},products:[{link:"/product",name:"Burç Havuzlu Paspas 3D Siyah 5 Parça Üniversal Tüm Araçlar Için Uyumlu",images:["https://productimages.hepsiburada.net/s/26/550/10161158815794.jpg","https://productimages.hepsiburada.net/s/26/550/10161158783026.jpg","https://productimages.hepsiburada.net/s/26/550/10161158848562.jpg"],priceInfo:{price:55.19,originalPrice:59.99,discountRate:8,discountType:"ExtraDiscount"},review:{count:60,rating:4.8},button:{link:"/",text:"Şimdi Satın Al",class:""}}]}}},E=A,D=Object(c["a"])(E,s,i,!1,null,"bc32625a",null);e["default"]=D.exports},fb81:function(t,e,a){}}]);
//# sourceMappingURL=chunk-513000ac.5884377b.js.map