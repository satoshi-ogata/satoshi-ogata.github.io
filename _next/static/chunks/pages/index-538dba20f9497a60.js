(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1656)}])},1656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(7294),s=function(e){var t=e.currentPage,n=e.items,i=e.isOverlayActive;return(0,r.jsx)(r.Fragment,{children:!i&&(0,r.jsx)("span",{className:"swiper-pagination",children:"".concat(t+1," / ").concat(n.length)})})},a=function(e){var t=e.item;return(0,r.jsxs)("aside",{className:"left-side",children:[(0,r.jsxs)("section",{className:"main-wrapper",children:[(0,r.jsx)("h1",{className:"main-header",children:t.title}),(0,r.jsx)("div",{className:"main-description",children:t.subTitle})]}),(0,r.jsxs)("section",{className:"main-content",children:[(0,r.jsx)("h1",{className:"main-header",children:"\u74b0\u5883\u30fb\u8a00\u8a9e"}),(0,r.jsx)("div",{className:"main-description",children:t.stack}),(0,r.jsx)("h1",{className:"main-header",children:"\u81ea\u8eab\u306e\u62c5\u5f53"}),(0,r.jsx)("div",{className:"main-description",children:t.description})]})]})},c=function(e){e.item;return(0,r.jsx)("main",{className:"center",children:(0,r.jsxs)("div",{className:"right-side__img",children:[(0,r.jsx)("img",{className:"bottle-bg",src:"https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/Beach_1920.jpg?v=1029210661698833530",alt:""}),(0,r.jsx)("img",{className:"bottle-img",src:"https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514"})]})})},l=function(e){var t=e.currentPage,n=e.items[t],s=(0,i.useRef)();return(0,i.useEffect)((function(){var e;null===(e=s.current)||void 0===e||e.classList.add("swiper-slide-active")}),[t]),(0,r.jsxs)("div",{ref:s,className:"main swiper-slide",children:[(0,r.jsx)(a,{item:n}),(0,r.jsx)(c,{item:n})]},n.id)},o=function(){return(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",value:-1,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})},u=function(){return(0,r.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",value:1,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})},d=function(e){var t=e.items,n=e.currentPage,i=e.setCurrentPage,s=e.isOverlayActive,a=function(e){var r=n+ +e.target.getAttribute("value");r<0||t.length<=r||i(r)};return(0,r.jsx)(r.Fragment,{children:!s&&(0,r.jsxs)("div",{className:"button-wrapper",children:[(0,r.jsx)("div",{className:"button-container",onClick:a,children:(0,r.jsx)("span",{className:"swiper-button swiper-prev-button",children:(0,r.jsx)(o,{})})}),(0,r.jsx)("div",{className:"button-container",onClick:a,children:(0,r.jsx)("span",{className:"swiper-button swiper-next-button",children:(0,r.jsx)(u,{})})})]})})},v=function(){return(0,r.jsx)("span",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{d:"M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"})})})},h=function(e){var t=e.isOverlayActive,n=e.setOverlayActive;return(0,r.jsxs)("header",{className:"header ".concat(t?"header-in-overlay":""),children:[(0,r.jsx)("span",{children:"Satoshi Ogata - Portfolio Site"}),(0,r.jsx)("nav",{className:"header-icons",onClick:function(){n(!t)},children:(0,r.jsx)(v,{})})]})},m=function(e){var t=e.isOverlayActive,n=e.children;return(0,r.jsx)("div",{className:"overlay ".concat(t&&"overlay-active"),children:n})};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}var x=function(e){var t=e.overlay,n=e.OverlayContent,i=e.children;return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(h,j({},t)),i,(0,r.jsx)(m,j({},t,{children:t.isOverlayActive&&(0,r.jsx)(n,{})}))]})},f=function(e){var t=e.isOverlayActive,n=e.children;return(0,r.jsx)("div",{className:"mySwiper ".concat(t&&"mySwiper-inactive"),children:(0,r.jsx)("section",{className:"main-wrapper swiper-wrapper",children:n})})},g=[{id:1,title:"SaaS CRM\u7ba1\u7406\u753b\u9762/toC\u30a2\u30d7\u30ea\u753b\u9762\u958b\u767a",subTitle:"\u4e3b\u306b\u98f2\u98df\u3084\u5c0f\u58f2\u5e97\u7b49\u306e\u4e8b\u696d\u8005\u5411\u3051\u306b\u3001\u30b9\u30bf\u30f3\u30d7\u30ab\u30fc\u30c9\u306a\u3069\u306eCRM\u8ca9\u4fc3\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3059\u308bSaaS\u3092\u63d0\u4f9b\u3002toC\u5411\u3051\u306b\u3001\u6c7a\u6e08\u30b5\u30fc\u30d3\u30b9\u306e\u5229\u7528\u8005\u304c\u30af\u30fc\u30dd\u30f3\u3084\u7279\u5178\u3092\u5229\u7528\u3067\u304d\u308b\u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u3092\u884c\u3063\u305f\u3002",stack:"React/Redux, Java Spring, AWS",description:"\u753b\u9762\u30c7\u30b6\u30a4\u30f3\u3092\u3082\u3068\u306b\u753b\u9762\u9805\u76ee\u5b9a\u7fa9\u3092\u4f5c\u6210\u3001\u30c7\u30b6\u30a4\u30ca\u30fc\uff0f\u4f01\u753b\u3068\u51fa\u6765\u4e0a\u304c\u3063\u305f\u30c7\u30b6\u30a4\u30f3\u306b\u5bfe\u3057\u3066\u306eUI\u306e\u8abf\u6574\u3001apiI/F\u8a2d\u8a08\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u8a2d\u8a08\u3001\u958b\u767a\u74b0\u5883\u69cb\u7bc9\u3092\u884c\u3063\u3066\u3044\u308b\u3002\u4e8b\u696d\u8005\u5411\u3051\u8ca9\u4fc3\u30c4\u30fc\u30eb\u753b\u9762\u306fReact/Redux\u3001\u6c7a\u6e08\u30b5\u30fc\u30d3\u30b9\u5229\u7528\u8005\u304c\u5229\u7528\u3059\u308b\u30a2\u30d7\u30ea\u306f\u30a2\u30d7\u30ea\u5185\u306ewebview\u753b\u9762\u3092React\u3067\u958b\u767a\u4e88\u5b9a\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u5074\u306e\u30ea\u30fc\u30c0\u30fc\u3068\u3044\u3046\u30dd\u30b8\u30b7\u30e7\u30f3\u3067\u3082\u3042\u308b\u306e\u3067\u3001PL\u3068\u9023\u643a\u3057\u3066\u5fc5\u8981\u306a\u5de5\u6570\u306e\u5272\u308a\u51fa\u3057\u3001\u30c1\u30b1\u30c3\u30c8(JIRA)\u4f5c\u6210\u3084\u30e1\u30f3\u30d0\u30fc\u3078\u306e\u30d5\u30a9\u30ed\u30fc\u3082\u884c\u3063\u3066\u3044\u308b\u3002"},{id:2,title:"SaaS CRM\u7ba1\u7406\u753b\u9762\u65b0\u898f\u958b\u767a",subTitle:"\u98f2\u98df\u5e97\u7b49\u306e\u4e8b\u696d\u8005\u5411\u3051\u306bCRM\u306e\u4e00\u74b0\u3068\u3057\u3066\u8ca9\u4fc3\u30c4\u30fc\u30eb\u7fa4\u3092\u63d0\u4f9b\u3002\u03b2\u7248\u3068\u3057\u3066\u7ba1\u7406\u753b\u9762\u3092\u63d0\u4f9b\u3002",stack:"React/Redux, Java Spring, AWS",description:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306e\u8a73\u7d30\u8a2d\u8a08\u301c\u5b9f\u88c5\u301c\u5358\u4f53\u30c6\u30b9\u30c8\u65b0\u898f\u958b\u767a\u3060\u3063\u305f\u306e\u3067\u3001\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u8a2d\u8a08\u624b\u6cd5\u3084\u74b0\u5883\u69cb\u7bc9\u306e\u77e5\u8b58\u304c\u5f97\u3089\u308c\u305f\u3002"},{id:3,title:"\u533b\u7642\u696d\u754c toC\u6cbb\u7642\u30a2\u30d7\u30ea\u958b\u767a",subTitle:"\u30c7\u30d0\u30a4\u30b9\u3068\u9023\u643a\u3057\u305f\u6cbb\u7642\u30a2\u30d7\u30ea\u306e\u63d0\u4f9b",stack:"React Native, GraphQL",description:"React Native\u3067\u306e\u30a2\u30d7\u30ea\u753b\u9762\u958b\u767a\u3002\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u767b\u9332\u3001\u8a8d\u8a3c\u753b\u9762\u3084\u3001\u5229\u7528\u8005\u304c\u8a08\u6e2c\u30c7\u30d0\u30a4\u30b9\u3067\u8a08\u6e2c\u3057\u305f\u5fc3\u62cd\u6570\u306a\u3069\u306e\u30c7\u30fc\u30bf\u3092\u30b0\u30e9\u30d5\u3067\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306b\u8868\u793a\u3059\u308b\u753b\u9762\u3092\u4f5c\u6210\u3057\u305f\u3002"},{id:4,title:"\u7269\u6d41\u696d\u754c \u696d\u52d9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",subTitle:"\u58f2\u639b\u91d1\u30c7\u30fc\u30bf\u306e\u7ba1\u7406\u753b\u9762\u306e\u63d0\u4f9b",stack:"Java Struts, OracleDB",description:"Java Struts\u3092\u4f7f\u7528\u3057\u3066\u306eJSP\u753b\u9762\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u306e\u5b9f\u88c5\u3092\u884c\u3046\u3002"},{id:5,title:"\u516c\u5171 \u56f3\u66f8\u9928\u696d\u52d9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",subTitle:"\u56f3\u66f8\u9928\u3067\u4fdd\u6709\u3059\u308b\u6240\u8535\u56f3\u66f8\u306e\u8cb8\u501f\u3068\u7ba1\u7406\u3092\u884c\u3046\u696d\u52d9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u63d0\u4f9b",stack:"React/Redux, Java Spring, Linux",description:"React\u3067\u306e\u753b\u9762\u30ea\u30d7\u30ec\u30fc\u30b9\u3092\u4e3b\u306b\u884c\u3046\u3002\u4ed6\u3001\u975e\u6a5f\u80fd\u8981\u4ef6\u306e\u30c6\u30b9\u30c8\u3068\u3057\u3066 Selenium\u3092\u7528\u3044\u305fE2E\u30c6\u30b9\u30c8\u306e\u5b9f\u65bd\u3001\u30c4\u30fc\u30eb\u958b\u767a(python)\u3001\u30c6\u30b9\u30bf\u30fc\u3068\u3057\u3066\u30c6\u30b9\u30c8\u696d\u52d9\u3092\u884c\u3046\u3002"},{id:6,title:"\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8",subTitle:"https://github.com/satoshi-ogata/satoshi-ogata.github.io",stack:"Next.js, Sass",description:"\u3053\u306e\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059\u3002"}];function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}var N=function(e){var t=e.handler,n=e.items,i=e.OverlayContent,a=t.swiper,c=t.overlay;return(0,r.jsxs)(x,{overlay:c,OverlayContent:i,children:[(0,r.jsx)(f,w({},c,{children:(0,r.jsx)(l,{currentPage:a.currentPage,items:n})})),(0,r.jsx)(d,w({},a,c,{items:n})),(0,r.jsx)(s,w({currentPage:a.currentPage},c,{items:n}))]})},y=function(){var e=(0,i.useState)(0),t=e[0],n=e[1],s=(0,i.useState)(!1),a={handler:{swiper:{currentPage:t,setCurrentPage:n},overlay:{isOverlayActive:s[0],setOverlayActive:s[1]}},items:g,OverlayContent:function(){return(0,r.jsxs)("section",{className:"about",children:[(0,r.jsx)("img",{className:"about-img",src:"/me.jpg",alt:"Picture of the author"}),(0,r.jsx)("div",{className:"about-header",children:"SATOSHI OGATA"}),(0,r.jsx)("div",{className:"about-content",children:"FRONTEND WEB DEVELOPER"}),(0,r.jsx)("div",{className:"about-detail",children:"2018\u5e74\u3088\u308aweb\u958b\u767a\u8005\u3068\u3057\u3066\u50cd\u304d\u59cb\u3081\u308b\u3002\nReact\u3092\u4f7f\u3063\u305fSPA\u3067\u306e\u753b\u9762\u958b\u767a\u3092\u5f97\u610f\u5206\u91ce\u3068\u3057\u3066\u3001\u696d\u52d9\u7cfb\u30b7\u30b9\u30c6\u30e0\u3001toBSaaS\u958b\u767a\u3001toC\u5411\u3051\u30a2\u30d7\u30ea\u3084webview\u306e\u958b\u767a\u3092\u884c\u3046\u3002UI\u306e\u4f7f\u3044\u3084\u3059\u3055\u3092\u8003\u3048\u308b\u306e\u304c\u597d\u304d\u3002 \n\u524d\u8077\u306f\u82f1\u8a9e\u6559\u5e2b\u3002"}),(0,r.jsx)("div",{className:"about-fooder",children:"s.ogata.72@gmail.com"})]})}};return(0,r.jsx)(N,w({},a))}}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);