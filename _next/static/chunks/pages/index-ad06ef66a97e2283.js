(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1086:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(287)}])},8324:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});var r=n(2322),o=n(9097),u=n.n(o),i=n(9179),s=n(2991),a=n(4006);function c(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function f(){var t=c(["\n  width: 100%;\n  margin-bottom: 2.5rem;\n"]);return f=function(){return t},t}function l(){var t=c(["\n  color: ",";\n"]);return l=function(){return t},t}function d(){var t=c(["\n  width: 100%;\n  margin: 0;\n"]);return d=function(){return t},t}var v=function(t){var e=t.slug,n=t.title,o=t.subtitle,i=t.date,c=t.category,f=t.theme;return(0,r.jsxs)(h,{children:[(0,r.jsx)("h3",{children:(0,r.jsx)(u(),{href:"/".concat(e),passHref:!0,children:(0,r.jsx)(s.ZP,{underline:!0,css:{color:f.colors.text.value},children:n})})}),(0,r.jsx)(g,{theme:f,children:(0,r.jsx)(a.Z,{date:i,category:c})}),o&&(0,r.jsx)(m,{children:o})]})},h=i.Z.article(f()),g=i.Z.small(l(),(function(t){return t.theme.colors.accents6.value})),m=i.Z.p(d())},7298:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(2784),o=n(5632),u=function(t){var e=t.root,n=t.rootMargin,o=void 0===n?"0px":n,u=t.threshold,i=void 0===u?0:u,s=t.onIntersect,a=(0,r.useState)(null),c=a[0],f=a[1];return(0,r.useEffect)((function(){if(c){var t=new IntersectionObserver(s,{root:e,rootMargin:o,threshold:i});return t.observe(c),function(){return t.unobserve(c)}}}),[s,e,o,c,i]),{setTarget:f}};function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(a){s=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return u}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){sessionStorage.setItem(t,JSON.stringify(e))}var c=function(t){var e=t.fullElements,n=t.offset,i=(0,o.useRouter)(),c=(0,r.useMemo)((function(){return"isv-".concat(i.asPath)}),[i]),f=(0,r.useState)(e.slice(0,n)),l=f[0],d=f[1],v=(0,r.useState)(function(t){if("undefined"===typeof sessionStorage)return 1;var e=sessionStorage.getItem(t);return e?parseInt(e):(a(t,1),1)}(c)),h=v[0],g=v[1],m=(0,r.useState)(e.length<n),w=m[0],y=m[1],p=u({onIntersect:function(t){s(t,1)[0].isIntersecting&&g((function(t){return t+1}))}}).setTarget;return(0,r.useEffect)((function(){d(e.slice(0,n*h)),y(n*h>e.length)}),[e,h,n]),(0,r.useEffect)((function(){var t=function(){a(c,h)};return i.events.on("routeChangeStart",t),function(){return i.events.off("routeChangeStart",t)}}),[h,i,c]),{elements:l,setTarget:p,isEnded:w}}},3727:function(t,e,n){"use strict";var r=n(2784),o=n(5632);function u(t){var e={x:window.scrollX,y:window.scrollY};sessionStorage.setItem(t,JSON.stringify(e))}function i(t){var e=JSON.parse(sessionStorage.getItem(t));e&&setTimeout((function(){return window.scrollTo(e.x,e.y)}),0)}e.Z=function(){var t=(0,o.useRouter)();(0,r.useEffect)((function(){if("scrollRestoration"in window.history){var e=!1;window.history.scrollRestoration="manual",i(t.asPath);var n=function(e){u(t.asPath),delete e.returnValue},r=function(){u(t.asPath)},o=function(t){e&&(e=!1,i(t))};return window.addEventListener("beforeunload",n),t.events.on("routeChangeStart",r),t.events.on("routeChangeComplete",o),t.beforePopState((function(){return e=!0,!0})),function(){window.removeEventListener("beforeunload",n),t.events.off("routeChangeStart",r),t.events.off("routeChangeComplete",o),t.beforePopState((function(){return!0}))}}}),[t])}},287:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l}});var r=n(2322),o=n(3538),u=n(4123),i=n(2120),s=n(8324),a=n(2141),c=n(7298),f=n(3727);var l=!0;e.default=function(t){var e=t.allPosts,n=(0,o.Z)().theme;(0,f.Z)();var l=(0,c.Z)({fullElements:e,offset:12,rootMargin:"100px"}),d=l.setTarget,v=l.elements,h=l.isEnded;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(i.c,{}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("main",{children:[v.map((function(t){var e=t.slug,o=t.title,u=t.date,i=t.category,a=t.subtitle;return(0,r.jsx)(s.Z,{slug:e,title:o,subtitle:a,date:u,category:i,theme:n},e)})),!h&&(0,r.jsx)("div",{ref:d})]})]})}}},function(t){t.O(0,[433,774,888,179],(function(){return e=1086,t(t.s=e);var e}));var e=t.O();_N_E=e}]);