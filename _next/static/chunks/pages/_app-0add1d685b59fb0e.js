(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3477)}])},3412:function(e,t){"use strict";var r,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return f}});let n="refresh",o="navigate",a="restore",s="server-patch",i="prefetch",c="fast-refresh",u="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(l=r||(r={})).AUTO="auto",l.FULL="full",l.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function l(e,t,r,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return l}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let l=r(8754),n=r(5893),o=l._(r(7294)),a=r(7950),s=r(7387),i=r(6982),c=r(6921),u=r(7727),f=r(1973),d=r(6216),p=r(1722),h=r(6504),x=r(634),m=r(3412),b=new Set;function g(e,t,r,l,n,o){if(o||(0,s.isLocalURL)(t)){if(!l.bypassPrefetchedCheck){let n=t+"%"+r+"%"+(void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0);if(b.has(n))return;b.add(n)}Promise.resolve(o?e.prefetch(t,n):e.prefetch(t,r,l)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let j=o.default.forwardRef(function(e,t){let r,l;let{href:i,as:b,children:j,prefetch:y=null,passHref:_,replace:w,shallow:N,scroll:k,locale:O,onClick:C,onMouseEnter:E,onTouchStart:P,legacyBehavior:T=!1,...R}=e;r=j,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let M=o.default.useContext(f.RouterContext),A=o.default.useContext(d.AppRouterContext),I=null!=M?M:A,S=!M,L=!1!==y,F=null===y?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:H,as:U}=o.default.useMemo(()=>{if(!M){let e=v(i);return{href:e,as:b?v(b):e}}let[e,t]=(0,a.resolveHref)(M,i,!0);return{href:e,as:b?(0,a.resolveHref)(M,b):t||e}},[M,i,b]),D=o.default.useRef(H),K=o.default.useRef(U);T&&(l=o.default.Children.only(r));let V=T?l&&"object"==typeof l&&l.ref:t,[G,X,q]=(0,p.useIntersection)({rootMargin:"200px"}),z=o.default.useCallback(e=>{(K.current!==U||D.current!==H)&&(q(),K.current=U,D.current=H),G(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[U,V,H,q,G]);o.default.useEffect(()=>{I&&X&&L&&g(I,H,U,{locale:O},{kind:F},S)},[U,H,X,O,L,null==M?void 0:M.locale,I,S,F]);let B={ref:z,onClick(e){T||"function"!=typeof C||C(e),T&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,l,n,a,i,c,u){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[n?"replace":"push"](r,l,{shallow:a,locale:c,scroll:e}):t[n?"replace":"push"](l||r,{scroll:e})};u?o.default.startTransition(d):d()}(e,I,H,U,w,N,k,O,S)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),I&&(L||!S)&&g(I,H,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:F},S)},onTouchStart(e){T||"function"!=typeof P||P(e),T&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),I&&(L||!S)&&g(I,H,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:F},S)}};if((0,c.isAbsoluteUrl)(U))B.href=U;else if(!T||_||"a"===l.type&&!("href"in l.props)){let e=void 0!==O?O:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);B.href=t||(0,x.addBasePath)((0,u.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return T?o.default.cloneElement(l,B):(0,n.jsx)("a",{...R,...B,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let l=r(7294),n=r(9126),o="function"==typeof IntersectionObserver,a=new Map,s=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!o,[u,f]=(0,l.useState)(!1),d=(0,l.useRef)(null),p=(0,l.useCallback)(e=>{d.current=e},[]);return(0,l.useEffect)(()=>{if(o){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:l,observer:n,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===r.root&&e.margin===r.margin);if(l&&(t=a.get(l)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},s.push(r),a.set(r,t),t}(r);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),a.delete(l);let e=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,n.requestIdleCallback)(()=>f(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,u,d.current]),[p,u,(0,l.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3477:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var l=r(5893),n=r(7326),o=r.n(n);r(9166);var a=r(7294),s=r(1664),i=r.n(s),c=r(1163);let u=(0,a.memo)(()=>{let e=(0,c.useRouter)();return(0,l.jsxs)("header",{className:"bg-white w-full h-auto flex items-center flex-row flex-wrap justify-center p-5 gap-5 md:gap-52",children:[(0,l.jsxs)("h1",{className:"font-extrabold text-black text-xl text-ellipsis relative group cursor-pointer select-none",children:["Hector Silva",(0,l.jsx)("div",{className:"h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"})]}),(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{className:"text-black flex flex-row flex-wrap gap-5 font-semibold select-none",children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsxs)("li",{className:"group relative ".concat("/"===e.pathname?"text-black border-b-red-600":"text-gray-400 hover:text-black"),children:["Projects",(0,l.jsx)("div",{className:"h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"})]})}),(0,l.jsx)(i(),{href:"/about",children:(0,l.jsxs)("li",{className:"group relative ".concat("/about"===e.pathname?"text-black border-b-red-600":"text-gray-400 hover:text-black"),children:["About me",(0,l.jsx)("div",{className:"h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"})]})}),(0,l.jsx)("a",{target:"_blank",href:"assets/me.pdf",children:(0,l.jsxs)("li",{className:"group relative border-b-4 border-transparent hover:border-b-red-600 text-gray-400 hover:text-black transition",children:["Resume",(0,l.jsx)("div",{className:"h-1 w-0 bg-red-600 transition-all absolute duration-300 group-hover:w-full"})]})})]})})]})}),f=(0,a.memo)(()=>(0,l.jsxs)("footer",{className:"select-none bg-gray-100 w-full h-auto flex flex-col items-center flex-row flex-wrap justify-center p-10 gap-3",children:[(0,l.jsxs)("div",{className:"flex flex-col relative group",children:[(0,l.jsx)("span",{className:"text-3xl font-bold text-indigo-600 uppercase",children:"\uD83C\uDF10 Social media"}),(0,l.jsx)("div",{className:"transition-all duration-300 w-full h-4 bg-indigo-600 opacity-20 absolute top-5 group-hover:top-7"})]}),(0,l.jsxs)("div",{className:"flex flex-row flex-wrap justify-center gap-4",children:[(0,l.jsx)("li",{className:"flex items-center justify-center m-0 cursor-pointer",children:(0,l.jsx)("a",{target:"_blank",href:"https://www.instagram.com/hect_sv/",children:(0,l.jsx)("img",{src:"assets/instagram.png",className:"hover:scale-110 transition-all rounded-full",width:35,alt:"Instagram"})})}),(0,l.jsx)("li",{className:"flex items-center justify-center m-0 cursor-pointer",children:(0,l.jsx)("a",{target:"_blank",href:"https://www.facebook.com/hectddos103/",children:(0,l.jsx)("img",{src:"assets/facebook.png",className:"hover:scale-110 transition-all rounded-full",width:35,alt:"Facebook"})})}),(0,l.jsx)("li",{className:"flex items-center justify-center m-0 cursor-pointer",children:(0,l.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/hector-rodrigues-da-silva-4073b3191/",children:(0,l.jsx)("img",{src:"assets/in.png",className:"hover:scale-110 transition-all rounded-full",width:35,alt:"LinkedIn"})})}),(0,l.jsx)("li",{className:"flex items-center justify-center m-0 cursor-pointer",children:(0,l.jsx)("a",{target:"_blank",href:"https://github.com/HectorFront",children:(0,l.jsx)("img",{src:"assets/github.png",className:"hover:scale-110 transition-all rounded-full",width:35,alt:"GitHub"})})})]}),(0,l.jsxs)("p",{children:["Development by ",(0,l.jsx)("span",{className:"font-extrabold text-transparent bg-gradient-to-l from-red-600 to-indigo-600 bg-clip-text",children:"Hector Silva"})]})]})),d=()=>(0,l.jsxs)("div",{className:"w-full bg-gray-100 border-b-8 border-gray-200 p-10 flex flex-col gap-5 items-center justify-center",children:[(0,l.jsx)("h3",{className:"uppercase text-indigo-500 font-extrabold text-xl",children:"check out others pages"}),(0,l.jsxs)("div",{className:"flex flex-row flex-wrap gap-5 text-gray-700 font-extrabold",children:[(0,l.jsx)(i(),{href:"/",children:(0,l.jsxs)("div",{className:"hover:text-yellow-500 cursor-pointer flex flex-row items-center",children:[(0,l.jsx)("div",{className:"text-xl mr-2 text-yellow-500",children:"➛"})," Projects"]})}),(0,l.jsx)(i(),{href:"/about",children:(0,l.jsxs)("div",{className:"hover:text-yellow-500 cursor-pointer flex flex-row items-center",children:[(0,l.jsx)("div",{className:"text-xl mr-2 text-yellow-500",children:"➛"})," About me"]})}),(0,l.jsx)(i(),{href:"/assets/me.pdf",children:(0,l.jsxs)("div",{className:"hover:text-yellow-500 cursor-pointer flex flex-row items-center",children:[(0,l.jsx)("div",{className:"text-xl mr-2 text-yellow-500",children:"➛"})," Resume"]})})]})]});function p(e){let{Component:t,pageProps:r}=e;return(0,l.jsxs)("div",{className:"".concat(o().className),children:[(0,l.jsx)(u,{}),(0,l.jsxs)("div",{className:"animate-fade",children:[(0,l.jsx)(t,{...r}),(0,l.jsx)(d,{}),(0,l.jsx)(f,{})]})]})}},9166:function(){},7326:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},1664:function(e,t,r){e.exports=r(3480)},1163:function(e,t,r){e.exports=r(3035)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(3035)}),_N_E=e.O()}]);