(self.webpackChunkclient=self.webpackChunkclient||[]).push([[986,576],{4950:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(9439),r=n(2791),o=n(5405),i=n(1845),a=n(7689),c=n(1087),l=n(7488),u=n(4418),d=n(8882),f=n(6949),p=n(9496),h=n(184),m=(0,r.memo)((function(e){var t=e.todayPosts,n=(0,o.aC)().role,m=(0,o.CG)((function(e){return e.auth})).isAuth,v=(0,o.CG)((function(e){return e.tags})).tags,x=(0,o.TL)(),b=(0,a.s0)(),j=(0,r.useState)(!1),y=(0,s.Z)(j,2),g=y[0],N=y[1],w=function(e){m?b(e):N(!0)};return(0,r.useEffect)((function(){x((0,f.$)())}),[x]),(0,h.jsxs)("div",{className:"latestWrapper",children:[(0,h.jsx)(d.Z,{showModal:g,setShowModal:N}),(0,h.jsxs)("div",{className:"createItemButtons",children:[(0,h.jsx)("div",{className:"createNewPostBtn",children:(0,h.jsx)(u.Z,{text:"T\u1ea1o b\xe0i vi\u1ebft",type:"button",handleClick:function(){return w("/create")}})}),"admin"===n&&(0,h.jsx)("div",{className:"createNewPostBtn",children:(0,h.jsx)(u.Z,{text:"T\u1ea1o th\u1ebb",type:"button",handleClick:function(){return w("/create-tag")}})})]}),(0,h.jsxs)("div",{className:"latestList",children:[(0,h.jsx)("div",{className:"latestTitle",children:(0,h.jsx)("h3",{children:"M\u1edbi nh\u1ea5t"})}),(0,h.jsx)("div",{className:"latestItems",children:(0,h.jsx)("ul",{children:t.length>0&&t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:(0,i.mr)(e.dateAndTimePublish)}),(0,h.jsx)(c.rU,{to:"/posts/".concat(e.id),className:"latestLink",children:(0,h.jsx)("h5",{children:e.title})}),(0,h.jsx)("div",{className:"latestPostReactions",children:(0,h.jsxs)("div",{className:"latestPostReactionItem",children:[(0,h.jsx)(l.Z,{className:"latestPostReactionIconLike"}),(0,h.jsx)("span",{children:e.userLikes.length})]})})]},e.id)}))})})]}),(0,h.jsxs)("div",{className:"tagsRecommendations",children:[(0,h.jsx)("h3",{children:"Th\u1ebb b\xe0i vi\u1ebft"}),(0,h.jsx)("div",{className:"postTags",children:(null===v||void 0===v?void 0:v.length)>0&&v.map((function(e){return(0,h.jsx)(p.Z,{tag:e},e.id)}))})]})]})}))},7576:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});n(2791);var s=n(4418),r=n(1087),o=n(5405),i=n(184),a=function(){return(0,o.ZQ)("Not found"),(0,i.jsxs)("div",{className:"notFound",children:[(0,i.jsx)("h1",{children:"Page not found"}),(0,i.jsx)(r.rU,{to:"/",className:"link",children:(0,i.jsx)(s.Z,{text:"Return to home"})})]})}},3986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(1413),r=n(4165),o=n(5861),i=n(9439),a=n(2791),c=n(4950),l=n(7317),u=n(7689),d=n(1087),f=n(1845),p=n(184),h=function(e){var t=e.comment;return(0,p.jsxs)("div",{className:"comment",children:[(0,p.jsx)("img",{src:t.user.profilePicture,alt:"avatar"}),(0,p.jsxs)("div",{className:"commentAuthor",children:[(0,p.jsxs)("span",{className:"commentAuthorName",children:[t.user.firstName," ",t.user.lastName," \u2022 ",(0,p.jsx)("span",{className:"commentDate",children:(0,f.p6)(t.dateAndTimePublish)})]}),(0,p.jsx)("div",{className:"commentText",children:t.text})]})]})},m=n(4418),v=n(5405),x=n(8931),b=function(e){var t=e.addComment,n=e.postId,s=(0,v.CG)((function(e){return e.auth})),c=s.user,l=s.isAuth,u=(0,a.useState)(""),d=(0,i.Z)(u,2),f=d[0],h=d[1],b=(0,a.useState)(""),j=(0,i.Z)(b,2),y=j[0],g=j[1],N=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.length>15)){e.next=15;break}return g(""),h(""),e.prev=3,e.next=6,x.Z.createComment(f,n,c.id);case 6:s=e.sent,t(s.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),g(e.t0.response.data.message);case 13:e.next=16;break;case 15:g("Comment must contain at least 15 characters");case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"commentForm",children:[y&&(0,p.jsx)("div",{className:"commentValidationError",children:y}),(0,p.jsx)("textarea",{value:f,disabled:!l,onChange:function(e){return h(e.target.value)},placeholder:l?"":"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 b\xecnh lu\u1eadn",className:"commentFormArea"}),(0,p.jsx)("div",{className:"sendButton",children:(0,p.jsx)(m.Z,{disabled:!l,handleClick:N,text:"G\u1eedi"})})]})},j=n(7488),y=n(3164),g=n(7237),N=n(8882),w=n(3959),Z=n(7576),k=n(9049),P=n(4889),T=n(9496),C=function(){var e,t=(0,a.useState)([]),n=(0,i.Z)(t,2),m=n[0],C=n[1],E=(0,a.useState)({}),O=(0,i.Z)(E,2),_=O[0],I=O[1],L=(0,a.useState)(""),A=(0,i.Z)(L,2),M=A[0],R=A[1],S=(0,v.CG)((function(e){return e.posts})).todayPosts,D=(0,v.CG)((function(e){return e.auth})),B=D.user,H=D.isAuth,z=(0,a.useState)(!1),U=(0,i.Z)(z,2),W=U[0],G=U[1],F=(0,u.UO)().postId;(0,v.ZQ)(_.title),(0,a.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.getById(Number(F));case 3:if(t=e.sent,0!==S.length){e.next=9;break}return e.next=7,x.Z.getPosts("latest");case 7:n=e.sent,C(n.data.slice(0,5));case 9:I(t.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),R(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[F,S.length]);var q=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=3;break}return G(!0),e.abrupt("return");case 3:return e.prev=3,e.next=6,x.Z.likePost(B.id,_.id);case 6:t=e.sent,I((function(e){return(0,s.Z)((0,s.Z)({},e),{},{userLikes:e.userLikes.concat([t.data])})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("Error liking post",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return M?(0,p.jsx)(Z.default,{}):0===Object.keys(_).length?(0,p.jsx)(k.Z,{}):(0,p.jsxs)("div",{className:"postWrapper",children:[(0,p.jsx)(N.Z,{showModal:W,setShowModal:G}),(0,p.jsxs)("div",{className:"postInner",children:[(0,p.jsxs)("div",{className:"postDescription",children:[(0,p.jsx)("img",{src:"".concat(_.postImage),alt:"postPicture"}),(0,p.jsx)(d.rU,{to:"/",className:"link",children:(0,p.jsxs)("button",{className:"back",children:[(0,p.jsx)(l.Z,{className:"backIcon"}),(0,p.jsx)("span",{children:"Trang ch\u1ee7"})]})}),(0,p.jsxs)("div",{className:"postInfo",children:[(0,p.jsxs)("div",{className:"postInfoWrapper",children:[(0,p.jsxs)("div",{className:"author",children:[(0,p.jsx)(w.ZP,{children:(0,p.jsx)("img",{src:null===_||void 0===_?void 0:_.user.profilePicture,alt:"postPicture"})}),(0,p.jsxs)("div",{className:"authorDetails",children:[(0,p.jsxs)("span",{className:"name",children:[null===_||void 0===_||null===(e=_.user)||void 0===e?void 0:e.firstName," ",_.user.lastName]}),(0,p.jsx)("span",{className:"date",children:(0,f.p6)(_.dateAndTimePublish)})]})]}),(null===B||void 0===B?void 0:B.id)===_.user.id&&(0,p.jsx)(P.Z,{postPage:!0,post:_})]}),(0,p.jsx)("h1",{children:_.title})]}),(0,p.jsx)("div",{className:"postPageTags",children:_.tags.map((function(e){return(0,p.jsx)(T.Z,{tag:e},e.id)}))}),(0,p.jsx)("div",{className:"postText",dangerouslySetInnerHTML:{__html:_.text.replace(/\n/g,"<br />")}}),(0,p.jsxs)("div",{className:"postActionsInfo",children:[(0,p.jsxs)("div",{className:"postLike",children:[_.userLikes.find((function(e){return e.user.id===B.id}))?(0,p.jsx)(g.Z,{className:"liked"}):(0,p.jsx)(j.Z,{onClick:q,className:"postActionsIcon like"}),(0,p.jsx)("span",{children:_.userLikes.length})]}),(0,p.jsxs)("div",{className:"postLike",children:[(0,p.jsx)(y.Z,{className:"postActionsIcon"}),(0,p.jsx)("span",{children:_.comments.length})]})]})]}),(0,p.jsxs)("div",{className:"postComments",children:[(0,p.jsx)("h2",{children:"B\xecnh lu\u1eadn"}),(0,p.jsx)(b,{addComment:function(e){I((function(t){return(0,s.Z)((0,s.Z)({},t),{},{comments:[e].concat(t.comments)})}))},postId:_.id}),(0,p.jsx)("div",{className:"commentsList",children:_.comments.length>0?_.comments.map((function(e){return(0,p.jsx)(h,{comment:e},e.id)})):(0,p.jsx)("div",{className:"noComments",children:"No comments "})})]})]}),(0,p.jsx)(c.Z,{todayPosts:S.length>0?S:m})]})}},7237:function(e,t,n){"use strict";var s=n(4836);t.Z=void 0;var r=s(n(5649)),o=n(184),i=(0,r.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=i},7317:function(e,t,n){"use strict";var s=n(4836);t.Z=void 0;var r=s(n(5649)),o=n(184),i=(0,r.default)((0,o.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=i},888:function(e,t,n){"use strict";var s=n(9047);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3959:function(e,t,n){"use strict";var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=n(2791),o=d(r),i=d(n(2007)),a=n(214),c=d(n(6172)),l=d(n(3287)),u=d(n(9054));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,v=0,x=0,b=0,j="data-lazyload-listened",y=[],g=[],N=!1;try{var w=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,w)}catch(I){}var Z=!!N&&{capture:!1,passive:!0},k=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,c.default)(t),s=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,s=void 0,r=void 0,o=void 0,i=void 0;try{var a=t.getBoundingClientRect();s=a.top,r=a.left,o=a.height,i=a.width}catch(I){s=m,r=v,o=b,i=x}var c=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,u=Math.max(s,0),d=Math.max(r,0),f=Math.min(c,s+o)-u,p=Math.min(l,r+i)-d,h=void 0,j=void 0,y=void 0,g=void 0;try{var N=n.getBoundingClientRect();h=N.top,j=N.left,y=N.height,g=N.width}catch(I){h=m,j=v,y=b,g=x}var w=h-u,Z=j-d,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return w-k[0]<=f&&w+y+k[1]>=0&&Z-k[0]<=p&&Z+g+k[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,s=void 0;try{var r=t.getBoundingClientRect();n=r.top,s=r.height}catch(I){n=m,s=b}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=o&&n+s+i[1]>=0}(e);s?e.visible||(e.props.once&&g.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},P=function(){g.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),g=[]},T=function(){for(var e=0;e<y.length;++e){var t=y[e];k(t)}P()},C=void 0,E=null,O=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),s(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===C||"debounce"===C&&void 0===this.props.debounce;if(n&&((0,a.off)(e,"scroll",E,Z),(0,a.off)(window,"resize",E,Z),E=null),E||(void 0!==this.props.debounce?(E=(0,l.default)(T,"number"===typeof this.props.debounce?this.props.debounce:300),C="debounce"):void 0!==this.props.throttle?(E=(0,u.default)(T,"number"===typeof this.props.throttle?this.props.throttle:300),C="throttle"):E=T),this.props.overflow){var s=(0,c.default)(this.ref);if(s&&"function"===typeof s.getAttribute){var r=+s.getAttribute(j)+1;1===r&&s.addEventListener("scroll",E,Z),s.setAttribute(j,r)}}else if(0===y.length||n){var o=this.props,i=o.scroll,d=o.resize;i&&(0,a.on)(e,"scroll",E,Z),d&&(0,a.on)(window,"resize",E,Z)}y.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",E,Z),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!==typeof window&&((0,a.off)(window,"resize",E,Z),(0,a.off)(window,"scroll",E,Z))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,s=e.placeholder,r=e.className,i=e.classNamePrefix,a=e.style;return o.default.createElement("div",{className:i+"-wrapper "+r,ref:this.setRef,style:a},this.visible?n:s||o.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(r.Component);O.propTypes={className:i.default.string,classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool,style:i.default.object},O.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var _=function(e){return e.displayName||e.name||"Component"};t.ZP=O},3287:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var s=void 0,r=void 0,o=void 0,i=void 0,a=void 0,c=function c(){var l=+new Date-i;l<t&&l>=0?s=setTimeout(c,t-l):(s=null,n||(a=e.apply(o,r),s||(o=null,r=null)))};return function(){o=this,r=arguments,i=+new Date;var l=n&&!s;return s||(s=setTimeout(c,t)),l&&(a=e.apply(o,r),o=null,r=null),a}}},214:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,s){s=s||!1,e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,s){s=s||!1,e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n)}},6172:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,s=e;s;){if(!s.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(s),o=r.position,i=r.overflow,a=r["overflow-x"],c=r["overflow-y"];if("static"===o&&t)s=s.parentNode;else{if(n.test(i)&&n.test(a)&&n.test(c))return s;s=s.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},9054:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var s,r;return t||(t=250),function(){var o=n||this,i=+new Date,a=arguments;s&&i<s+t?(clearTimeout(r),r=setTimeout((function(){s=i,e.apply(o,a)}),t)):(s=i,e.apply(o,a))}}}}]);
//# sourceMappingURL=986.fb9cb546.chunk.js.map