(this["webpackJsonpannalise.ai-test"]=this["webpackJsonpannalise.ai-test"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var a,c,r,o,s,i,l,u,j,b,d,p,O,m,v=n(0),x=n.n(v),h=n(23),g=n.n(h),f=n(16),y=n(2),k=n(3),C=Object(y.b)(a||(a=Object(k.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]))),w={breakpoints:{xs:320,sm:600,md:960,lg:1280,xl:1920},responsive:{up:function(e){return"@media (min-width: ".concat(w.breakpoints[e],"px)")}}},S=w,N=n(15),P=n(4),q=Object(v.createContext)(""),_=Object(v.createContext)((function(){})),R=n(6),T=y.c.input(c||(c=Object(k.a)(["\n  padding: 5px;\n"]))),D=n(1),F=function(e){var t=Object.assign({},e);return Object(D.jsx)(T,Object(R.a)({},t))},G=n(29),$=y.c.button(r||(r=Object(k.a)(["\n  padding: 5px;\n"]))),E=["children"],M=function(e){var t=e.children,n=Object(G.a)(e,E);return Object(D.jsx)($,Object(R.a)(Object(R.a)({},n),{},{children:t}))},U=Object(y.c)(M)(o||(o=Object(k.a)(["\n  margin-left: 10px;\n"]))),B="name",H=function(){var e=Object(P.f)().push,t=Object(v.useContext)(_),n=Object(v.useCallback)((function(n){n.preventDefault();var a=new FormData(n.currentTarget).get(B);t(a),e("/images")}),[]);return Object(D.jsx)("div",{children:Object(D.jsxs)("form",{onSubmit:n,children:[Object(D.jsx)("label",{children:Object(D.jsx)(F,{name:B,required:!0,placeholder:"Type your ".concat(B,"...")})}),Object(D.jsx)(U,{children:"Let's go"})]})})},I=n(11),J=n.n(I),L=n(17),z=n(27),A=Object(z.a)({apiUrl:"".concat("https://annalise-ai-test.herokuapp.com","/unsplash-proxy")}),K=function(){var e=Object(v.useContext)(q);return Object(D.jsxs)("h3",{children:["Hello, ",e]})},Q=y.c.div(s||(s=Object(k.a)(["\n  &[aria-disabled='true'] {\n    cursor: not-allowed;\n  }\n\n  &[aria-disabled='true']:active {\n    pointer-events: none;\n  }\n"]))),V=Object(y.c)(M)(i||(i=Object(k.a)(["\n  margin-left: 10px;\n"]))),W=function(e){var t=e.onPrev,n=e.onNext,a=e.loading,c=void 0!==a&&a;return Object(D.jsxs)(Q,{"aria-disabled":c,children:[Object(D.jsx)(M,{onClick:t,disabled:!t,children:"Prev Page"}),Object(D.jsx)(V,{onClick:n,disabled:!n,children:"Next Page"})]})},X=y.c.div(l||(l=Object(k.a)(["\n  column-count: ",";\n  column-gap: ",";\n\n  > * {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    overflow: hidden;\n    break-inside: avoid;\n  }\n"])),(function(e){return e.$columnCount}),(function(e){var t=e.$columnGap;return"".concat(t,"px")})),Y=function(e){var t=e.children,n=e.columnCount,a=e.columnGap,c=void 0===a?10:a,r=e.className;return Object(D.jsx)(X,{$columnCount:n,$columnGap:c,className:r,children:t})},Z=y.c.img(u||(u=Object(k.a)(["\n  max-width: 100%;\n"]))),ee=function(e){var t=e.url,n=e.alt,a=e.className;return Object(D.jsx)("div",{className:a,children:Object(D.jsx)(Z,{src:t,alt:n})})},te=Object(y.c)(Y)(j||(j=Object(k.a)(["\n  column-count: 1;\n\n  ",";\n"])),(function(e){var t=e.columnCount,n=e.theme.responsive;return"\n    ".concat(n.up("sm")," {\n      column-count: ").concat(Math.floor(t/2),";\n    }\n    ").concat(n.up("md")," {\n      column-count: ").concat(t,";\n    }\n  ")})),ne=Object(y.c)(ee)(b||(b=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),10),ae=function(e){var t=e.data,n=e.loading,a=e.error,c=e.className,r=void 0===c?"":c;return n?Object(D.jsx)("div",{children:"Loading..."}):a?Object(D.jsx)("div",{children:"Error"}):t.length?Object(D.jsx)(te,{columnCount:4,columnGap:10,className:r,children:t.map((function(e){var t=e.id,n=e.alt_description,a=e.urls.small;return Object(D.jsx)(ne,{url:a,alt:n},t)}))}):Object(D.jsx)("div",{children:"There is no data"})},ce=Object(y.c)(F)(d||(d=Object(k.a)(["\n  margin-right: 10px;\n"]))),re=Object(y.c)(M)(p||(p=Object(k.a)(["\n  margin-left: 10px;\n"]))),oe=function(e){var t=e.name,n=e.onSubmit,a=e.onReset,c=e.className,r=void 0===c?"":c;return Object(D.jsxs)("form",{onSubmit:n,onReset:a,className:r,children:[Object(D.jsx)(ce,{name:t,required:!0,placeholder:"Type your query..."}),Object(D.jsx)(M,{type:"submit",children:"Search"}),Object(D.jsx)(re,{type:"reset",children:"Random!"})]})},se=Object(y.c)(oe)(O||(O=Object(k.a)(["\n  margin-bottom: 20px;\n"]))),ie={data:[],error:!1,meta:{page:1}},le="query",ue=Object(v.memo)(K),je=Object(v.memo)(se),be=function(){var e=Object(v.useState)(ie),t=Object(N.a)(e,2),n=t[0],a=t[1],c=Object(v.useState)(!0),r=Object(N.a)(c,2),o=r[0],s=r[1],i=n.data,l=n.error,u=n.meta,j=Object(v.useCallback)(Object(L.a)(J.a.mark((function e(){var t,n,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,A.photos.getRandom({count:10});case 4:if(t=e.sent,n=t.response,!(null===(c=t.errors)||void 0===c?void 0:c.length)){e.next=9;break}throw c;case 9:a(Object(R.a)(Object(R.a)({},ie),{},{data:n})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),a(Object(R.a)(Object(R.a)({},ie),{},{error:!0}));case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])}))),[]);Object(v.useEffect)((function(){j()}),[j]);var b=Object(v.useCallback)(function(){var e=Object(L.a)(J.a.mark((function e(t){var n,c,r,o;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData(t.currentTarget),c=n.get(le),s(!0),e.prev=4,e.next=7,A.search.getPhotos({query:c,page:1,perPage:10},{});case 7:r=e.sent,o=r.response,a({error:!1,data:null===o||void 0===o?void 0:o.results,meta:{total:null===o||void 0===o?void 0:o.total,total_pages:null===o||void 0===o?void 0:o.total_pages,page:1,query:c}}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),a(Object(R.a)(Object(R.a)({},ie),{},{error:!0})),console.error(e.t0);case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),d=Object(v.useCallback)(function(){var e=Object(L.a)(J.a.mark((function e(t){var n,c,r,o;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,n=u.query,c=u.page+t,e.next=6,A.search.getPhotos({query:n,page:c,perPage:10},{});case 6:r=e.sent,o=r.response,a({error:!1,data:null===o||void 0===o?void 0:o.results,meta:{total:null===o||void 0===o?void 0:o.total,total_pages:null===o||void 0===o?void 0:o.total_pages,page:c,query:n}}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),a(Object(R.a)(Object(R.a)({},ie),{},{error:!0})),console.error(e.t0);case 15:return e.prev=15,s(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,11,15,18]])})));return function(t){return e.apply(this,arguments)}}(),[u.query,u.page]),p=Object(v.useCallback)((function(){d(-1)}),[d]),O=Object(v.useCallback)((function(){d(1)}),[d]);return Object(D.jsxs)("div",{children:[Object(D.jsx)(ue,{}),Object(D.jsx)(je,{name:le,onSubmit:b,onReset:j}),u.query&&u.total?Object(D.jsx)(W,{loading:o,onPrev:u.page>1?p:void 0,onNext:u.page<(u.total_pages||0)?O:void 0}):null,Object(D.jsx)("p",{children:u.total?"Total: ".concat(u.total,". Pages: ").concat(u.page," / ").concat(u.total_pages):""}),Object(D.jsx)(ae,{loading:o,data:i,error:l})]})},de=y.c.div(m||(m=Object(k.a)(["\n  padding: 20px;\n\n  ","\n"])),(function(e){var t=e.theme.responsive;return"".concat(t.up("md")," {\n    padding: 40px;\n  }")})),pe=function(){var e=Object(v.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(D.jsx)(_.Provider,{value:a,children:Object(D.jsx)(q.Provider,{value:n,children:Object(D.jsx)(de,{children:Object(D.jsxs)(P.c,{children:[Object(D.jsx)(P.a,{exact:!0,path:"/",component:H}),n&&Object(D.jsx)(P.a,{exact:!0,path:"/images",component:be}),Object(D.jsx)(P.a,{path:"*",component:H})]})})})})};g.a.render(Object(D.jsxs)(x.a.StrictMode,{children:[Object(D.jsx)(f.a,{children:Object(D.jsx)(y.a,{theme:S,children:Object(D.jsx)(pe,{})})}),Object(D.jsx)(C,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.05faa716.chunk.js.map