(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7316:function(t){t.exports=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}},6255:function(t,n,e){"use strict";var a=e(3038),r=e(319),o=e(5318);var i=o(e(7316)),c=o(e(7154)),u=o(e(7294)),s=o(e(7947)),l=e(7239),f=e(5655),d=e(5749);var _=new Map([["imgix",function(t){var n=t.root,e=t.src,a=t.width,r=t.quality,o=["auto=format","fit=max","w="+a],i="";r&&o.push("q="+r);o.length&&(i="?"+o.join("&"));return"".concat(n).concat(E(e)).concat(i)}],["cloudinary",function(t){var n=t.root,e=t.src,a=t.width,r=t.quality,o=["f_auto","c_limit","w_"+a,"q_"+(r||"auto")].join(",")+"/";return"".concat(n).concat(o).concat(E(e))}],["akamai",function(t){var n=t.root,e=t.src,a=t.width;return"".concat(n).concat(E(e),"?imwidth=").concat(a)}],["default",function(t){var n=t.root,e=t.src,a=t.width,r=t.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(e),"&w=").concat(a,"&q=").concat(r||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||f.imageConfigDefault,m=h.deviceSizes,v=h.imageSizes,p=h.loader,g=h.path,w=(h.domains,h.enableBlurryPlaceholder),b=[].concat(r(m),r(v));function N(t){var n=t.src,e=t.unoptimized,a=t.layout,o=t.width,i=t.quality,c=t.sizes,u=t.loader;if(e)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,n,e){if(e&&("fill"===n||"responsive"===n)){for(var a,o=/(^|\s)(1?\d?\d)vw/g,i=[];a=o.exec(e);a)i.push(parseInt(a[2]));if(i.length){var c=.01*Math.min.apply(Math,i);return{widths:b.filter((function(t){return t>=m[0]*c})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:m,kind:"w"}:{widths:r(new Set([t,2*t].map((function(t){return b.find((function(n){return n>=t}))||b[b.length-1]})))),kind:"x"}}(o,a,c),l=s.widths,f=s.kind,d=l.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:l.map((function(t,e){return"".concat(u({src:n,quality:i,width:t})," ").concat("w"===f?t:e+1).concat(f)})).join(", "),src:u({src:n,quality:i,width:l[d]})}}function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var n=_.get(p);if(n)return n((0,c.default)({root:g},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(p))}function E(t){return"/"===t[0]?t.slice(1):t}m.sort((function(t,n){return t-n})),b.sort((function(t,n){return t-n}))},7239:function(t,n){"use strict";n.__esModule=!0,n.toBase64=function(t){return window.btoa(t)}},5191:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(1858),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("div",{className:o().contactcontainer},n)}},264:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(8742),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("button",{className:o().ctabtn},n)}},9590:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(3473),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("footer",{className:o().footer},n)}},2116:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(8283),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("button",{className:o().ghostbtn},n)}},3999:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(1219),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("div",{className:o().herobanner},n)}},5508:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(1263),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("nav",{className:o().menu},n)}},4264:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var a=e(7294),r=e(4468),o=e.n(r),i=a.createElement;function c(t){var n=t.children;return i("nav",{className:o().navigation},n)}},4268:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var a=e(7294),r=e(4264),o=e(5508),i=e(1664),c=e(367),u=e.n(c),s=(e(3999),e(2116),e(264),e(9590)),l=e(9008),f=e(5191),d=(e(5675),a.createElement);function _(){return d(a.Fragment,null,d(l.default,null,d("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),d("title",null,"Mathias K\xf8nye")),d(r.default,null,d(i.default,{href:"/"},d("a",{className:u().anchorLogo},d("h1",{className:u().brand},"Mathias Portfolio")))),d("div",{className:u().wrapperMenu},d(o.default,null,d("div",null,d(i.default,{href:"/posts/first-post"},d("a",null,d("h2",{className:u().navtext},"My Work ",d("i",{className:"fas fa-angle-right"}))))),d("div",null,d(i.default,{href:"/about"},d("a",null,d("h2",{className:u().navtext},"About ",d("i",{className:"fas fa-angle-right"}))))),d("div",null,d(i.default,{href:"/contact"},d("a",null,d("h2",{className:u().navtext},"Contact ",d("i",{className:"fas fa-angle-right"}))))))),d("div",{className:u().smoothTrans},d("div",{className:u().wrapper},d(f.default,null,d("div",{className:u().contactBg},d("h2",{className:u().contactH1},"LETS TALK!"),d("h3",null,"For any questions or inquiries, please contact me on my phone number or shoot me a message through email. Thank you."),d("hr",null),d("h4",null,d("i",{className:"fas fa-phone"})," Phone: +47 988 79 983"),d("h4",null,d("i",{className:"fas fa-envelope"})," E-mail: mathiaskonye@gmail.com")),d("div",{className:u().contactBg},d("div",{className:u().responsiveImage}))))),d(s.default,null,d("h4",{className:u().footerText},"Mathias Portfolio\u2122"),d("h4",null,d(i.default,{href:"/posts/first-post"},d("a",{className:u().icons},d("i",{className:"fab fa-github-square"})))," ",d(i.default,{href:"/posts/first-post"},d("a",{className:u().icons},d("i",{className:"fas fa-envelope"}))))))}},3269:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return e(4268)}])},1858:function(t){t.exports={contactcontainer:"contactcontainer_contactcontainer__36fL5"}},8742:function(t){t.exports={ctabtn:"ctabtn_ctabtn__qSkDK"}},3473:function(t){t.exports={footer:"footer_footer__-jMcb"}},8283:function(t){t.exports={ghostbtn:"ghostbtn_ghostbtn__2wPiT"}},1219:function(t){t.exports={herobanner:"herobanner_herobanner__3RGWZ"}},1263:function(t){t.exports={menu:"menu_menu__2MdRV"}},4468:function(t){t.exports={navigation:"navbar_navigation__23wIN"}},367:function(t){t.exports={btnContainer:"utils_btnContainer__3R6Xk",navtext:"utils_navtext__25rcw",brand:"utils_brand__36W6H",anchorLogo:"utils_anchorLogo__LCzfI",bgColor:"utils_bgColor__3bl0x",contactBg:"utils_contactBg__2yQWb",headerHomeImage:"utils_headerHomeImage__1vYxq",wrapperMenu:"utils_wrapperMenu__q9SKo",wrapper:"utils_wrapper__3I9d_",responsiveImage:"utils_responsiveImage__2FXr6",contactH1:"utils_contactH1__2rNaL",icons:"utils_icons__1ocIs",marginTop:"utils_marginTop__29h2u",bgAbout:"utils_bgAbout__3V723",footerText:"utils_footerText__wGRjC",smoothTrans:"utils_smoothTrans__1T5nq",transition:"utils_transition__EVVCx"}},5655:function(t,n){"use strict";n.__esModule=!0,n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(t,n,e){e(6255)}},function(t){t.O(0,[996,888,774,179],(function(){return n=3269,t(t.s=n);var n}));var n=t.O();_N_E=n}]);