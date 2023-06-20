(function(){"use strict";if (typeof SNOW === "function") return;(()=>{var t={586:(t,e,n)=>{const r=n(228),{getFramesArray:o,getFrameTag:c}=n(648),{getOnload:i,setOnload:s,removeAttribute:u,addEventListener:a}=n(14);function p(t){if(!c(t))return;a(t,"load",(function(){r(t)}));const e=i(t);e&&(s(t,null),u(t,"onload"),s(t,e))}t.exports=function(t){for(let e=0;e<t.length;e++){const n=t[e],r=o(n,!0);for(let t=0;t<r.length;t++)p(r[t])}}},750:(t,e,n)=>{const{Object:r}=n(14);t.exports=function(t){t&&r.getOwnPropertyDescriptor(t,"")}},407:t=>{const e=Object.getOwnPropertyDescriptor(window,"length").get.bind(window),n=Object.getOwnPropertyDescriptor(Document.prototype,"createElement").value.bind(document),r=Object.getOwnPropertyDescriptor(Node.prototype,"appendChild").value.bind(document.documentElement),o=Object.getOwnPropertyDescriptor(Node.prototype,"removeChild").value.bind(document.documentElement),c="BLOCKED BY SNOW:\nCreating URL objects is not allowed under Snow protection within Web Workers.\nIf this prevents your application from running correctly, please visit/report at https://github.com/LavaMoat/snow/pull/89#issuecomment-1589359673.\nLearn more at https://github.com/LavaMoat/snow/pull/89";t.exports={runInNewRealm:function(t){const c=e(),i=n("IFRAME");r(i);const s=t(window[c]);return o(i),s},BLOCKED_BLOB_URL:URL.createObjectURL(new Blob([c],{type:"text/plain"})),BLOCKED_BLOB_MSG:c}},832:(t,e,n)=>{const{Object:r,Function:o}=n(14),{isTagFramable:c}=n(648),{error:i,ERR_EXTENDING_FRAMABLES_BLOCKED:s}=n(312);t.exports=function(t){const e=r.getOwnPropertyDescriptor(t.CustomElementRegistry.prototype,"define");e.configurable=e.writable=!0;const n=e.value;var u;e.value=(u=n,function(t,e,n){let r=n;if(n){const e=n.extends;c(e+"")&&i(s,t,n)&&(r=void 0)}return o.prototype.call.call(u,this,t,e,r)}),r.defineProperty(t.CustomElementRegistry.prototype,"define",e)}},228:(t,e,n)=>{const r=n(851),o=n(750),{shadows:c,toArray:i,getFramesArray:s,getContentWindowOfFrame:u,getOwnerWindowOfNode:a}=n(648),{Object:p,getFrameElement:l}=n(14),{forEachOpened:f}=n(134);function d(t,e){let n=-1;for(;t[++n];){if(r(t[n],t,p))continue;if(l(t[n])===e)return t[n];const o=d(t[n],e);if(o)return o}for(let n=0;n<c.length;n++){const r=c[n];if(a(r)!==t)continue;const o=s(r,!1);for(let t=0;t<o.length;t++){const n=o[t],r=u(n);if(n===e)return r;const c=d(r,e);if(c)return c}}return null}function g(t,e){const n=d(t,e);return n&&function(t){top.SNOW_WINDOW(t)}(n),!!n}t.exports=function(t){t=i(t);for(let e=0;e<t.length;e++){const n=t[e];"object"==typeof n&&null!==n&&(o(n),g(top,n)||f(g,n))}}},328:(t,e,n)=>{const{getFramesArray:r}=n(648),{Array:o,stringToLowerCase:c,split:i,getAttribute:s,setAttribute:u,getChildElementCount:a,document:p,getInnerHTML:l,setInnerHTML:f,remove:d,Element:g}=n(14),{warn:m,WARN_DECLARATIVE_SHADOWS:y,WARN_SRCDOC_WITH_CSP_BLOCKED:O}=n(312),w=g.prototype.querySelectorAll;function E(t,e){let n="top."+(t?"SNOW_FRAME":"SNOW_WINDOW")+"(this);";return e&&(n="<script>"+n+"document.currentScript.remove();<\/script>"),n}function v(t){let e=s(t,"onload");return!!e&&(e=E(!0,!1)+e,u(t,"onload",e),!0)}function h(t){let e=s(t,"src")||"";const[n,r]=i(e,":");return"javascript"===c(n)&&(e="javascript:"+E(!1,!1)+r,u(t,"src",e),!0)}function b(t){let e=s(t,"srcdoc");if(e){e=E(!1,!0)+e;const n=new o(e);return L(n,!0),u(t,"srcdoc",n[0]),!0}return!1}function D(t){const e=w.call(t,"meta");for(let t=0;t<e.length;t++){const n=e[t];for(let t=0;t<n.attributes.length;t++){const e=n.attributes[t];if("content-security-policy"===e.value.toLowerCase())return e}}}function L(t,e){for(let c=0;c<t.length;c++){const i=p.createElement("html");if(f(i,t[c]),!a(i))continue;let s=!1;if(e){const e=D(i);if(e&&m(O,t[c],e)){t[c]="";continue}const n=p.createElement("script");n.textContent=E(!1,!1),i.insertBefore(n,i.firstChild),s=!0}const u=w.call(i,"template[shadowroot]");for(let e=0;e<u.length;e++)n=u[e],o=t[c],m(y,n,o),d(n),s=!0;const g=r(i,!1);for(let t=0;t<g.length;t++){const e=g[t];s=v(e)||s,s=h(e)||s,s=b(e)||s}s&&(t[c]=l(i))}var n,o}t.exports={handleHTML:L}},352:(t,e,n)=>{const r=n(228),o=n(716),c=n(832),i=n(583),s=n(278),u=n(459),a=n(58),p=n(744),l=n(294),{hookShadowDOM:f}=n(373),{Array:d,push:g,addEventListener:m,getFrameElement:y}=n(14),{makeWindowUtilSetter:O}=n(648),{isMarked:w,mark:E}=n(111),{error:v,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:h,ERR_MARK_NEW_WINDOW_FAILED:b}=n(312),D=O("SNOW_WINDOW",(function(t){R(t)})),L=O("SNOW_FRAME",(function(t){r(t)})),_=O("SNOW",T);function P(t){try{const e=!w(t);return e&&E(t),e}catch(e){v(b,t,e)}return P(t)}function R(t,e){if(P(t)){!function(t){_(t),function(t){const e=y(t);m(e,"load",(function(){r(e)}))}(t),o(t),c(t),i(t),s(t),u(t,"load"),a(t),f(t),l(t),p(t)}(t);for(let e=0;e<N.length;e++)if(N[e](t))return}e&&e(t)}const N=new d;function T(t){"function"!=typeof t&&v(h,t)||(D(top),L(top),g(N,t),R(top,t))}t.exports=T},58:(t,e,n)=>{const{protectShadows:r}=n(373),o=n(586),{getFramesArray:c,shadows:i}=n(648),{getParentElement:s,getCommonAncestorContainer:u,slice:a,Object:p,Function:l}=n(14),{handleHTML:f}=n(328),d=n(228),g={Range:["insertNode"],DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]};function m(t,e,n){return function(){const p=a(arguments),g=e?u(this):s(this)||this;!function(t){o(t),o(i),f(t,n)}(p);const m=l.prototype.apply.call(t,this,p);return function(t,e){const n=c(e,!1);d(n),d(t),r(!0)}(p,g),m}}t.exports=function(t){for(const e in g){const n=g[e];for(let r=0;r<n.length;r++){const o=n[r],c=p.getOwnPropertyDescriptor(t[e].prototype,o);if(!c)continue;const i=c.set?"set":"value";c[i]=m(c[i],"Range"===e,"srcdoc"===o),c.configurable=!0,"value"===i&&(c.writable=!0),p.defineProperty(t[e].prototype,o,c)}}}},459:(t,e,n)=>{const r=n(228),{removeEventListener:o,addEventListener:c,slice:i,Map:s,Object:u}=n(14),a=new s;function p(t,e){return function(n,o,s){let u=o;return n===e&&(a.has(o)||a.set(o,(function(){r(this);const t=i(arguments);!function(t,e,n){e&&(e.handleEvent?e.handleEvent.apply(e,n):e.apply(t,n))}(this,o,t)})),u=a.get(o)),c(this||t,n,u,s)}}function l(t,e){return function(n,r,c){let i=r;return n===e&&(i=a.get(r),a.delete(r)),o(this||t,n,i,c)}}t.exports=function(t,e){u.defineProperty(t.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:p(t,e)}),u.defineProperty(t.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:l(t,e)})}},312:t=>{const{console:e}=top;t.exports={warn:function(t,n,r){let o;switch(t){case 5:const t=n,c=r;o=!1,e.warn("SNOW:","removing html string representing a declarative shadow:",t,"\n",`"${c}"`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");break;case 3:const i=n,s=r;o=!0,e.warn("SNOW:",o?"":"NOT",'blocking open attempt to "javascript:" url:',i,"by window: ",s,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");break;case 2:const u=n,a=r;o=!0,e.warn("SNOW:","blocking access to property:",`"${u}"`,"of opened window: ",a,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".");break;case 8:const p=n,l=r;o=!0,e.warn("SNOW:","blocking srcdoc (below) for trying to inject a static meta csp tag: ",l,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/???",".","\n","srcdoc content: ","\n",`"${p}"`)}return o},error:function(t,n,r,o){let c;switch(t){case 7:const t=n,i=r,s=o;c=!0,e.error("SNOW:",`${i} object:`,t,`of type "${s}" is not allowed and therefore is blocked`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/87#issuecomment-1586868353",".","\n");break;case 6:const u=n,a=r;c=!0,e.error("SNOW:",`"${u}"`,"extending attempt","of framable elements such as provided",a,"is blocked to prevent bypass",".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".","\n");break;case 1:const p=n,l=r;c=!0,e.error("SNOW:","failed to mark new window:",p,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","\n","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","\n","error caught:","\n",l);break;case 4:const f=n;c=!0,e.error("SNOW:",'first argument must be of type "function", instead got:',f,".","\n","therefore, snow bailed and is not applied to the page until this is fixed.")}return c},ERR_MARK_NEW_WINDOW_FAILED:1,WARN_OPEN_API_LIMITED:2,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:3,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:4,WARN_DECLARATIVE_SHADOWS:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6,ERR_BLOB_FILE_URL_OBJECT_TYPE_FORBIDDEN:7,WARN_SRCDOC_WITH_CSP_BLOCKED:8}},111:(t,e,n)=>{const{Map:r,Object:o,Array:c}=n(14),i=new c,s=new r;t.exports={isMarked:function(t){if(!s.has(t))return!1;const e=o.getOwnPropertyDescriptor(t,"SNOW_ID");if(!e||!o.hasOwnProperty.call(e,"value"))return!1;if("function"!=typeof e.value)return!1;const n=s.get(t);return e.value(i)===n},mark:function(t){const e=new c,n=o.create(null);n.value=t=>t===i&&e,o.defineProperty(t,"SNOW_ID",n),s.set(t,e)}}},14:(t,e,n)=>{const{runInNewRealm:r}=n(407);t.exports=function(t){const e=function(t){const{EventTarget:e}=t;return r((function(t){const{URL:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:p,DocumentFragment:l,Blob:f,ShadowRoot:d,Object:g,Reflect:m,Array:y,Element:O,HTMLElement:w,Range:E,HTMLIFrameElement:v,HTMLFrameElement:h,HTMLObjectElement:b}=t,D={URL:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:p,DocumentFragment:l,Blob:f,ShadowRoot:d,Object:g,Reflect:m,Array:y,Element:O,HTMLElement:w,Range:E,EventTarget:e,HTMLIFrameElement:v,HTMLFrameElement:h,HTMLObjectElement:b};return D.document={createElement:t.document.createElement.bind(t.document)},D}))}(t),{document:n,URL:o,Proxy:c,Function:i,String:s,Map:u,Node:a,Document:p,DocumentFragment:l,Blob:f,ShadowRoot:d,Object:g,Reflect:m,Array:y,Element:O,HTMLElement:w,Range:E,EventTarget:v,HTMLIFrameElement:h,HTMLFrameElement:b,HTMLObjectElement:D}=e;return g.assign(e,{iframeContentWindow:g.getOwnPropertyDescriptor(h.prototype,"contentWindow").get,frameContentWindow:g.getOwnPropertyDescriptor(b.prototype,"contentWindow").get,objectContentWindow:g.getOwnPropertyDescriptor(D.prototype,"contentWindow").get,createElement:g.getOwnPropertyDescriptor(p.prototype,"createElement").value,slice:g.getOwnPropertyDescriptor(y.prototype,"slice").value,push:g.getOwnPropertyDescriptor(y.prototype,"push").value,split:g.getOwnPropertyDescriptor(s.prototype,"split").value,nodeType:g.getOwnPropertyDescriptor(a.prototype,"nodeType").get,tagName:g.getOwnPropertyDescriptor(O.prototype,"tagName").get,getInnerHTML:g.getOwnPropertyDescriptor(O.prototype,"innerHTML").get,setInnerHTML:g.getOwnPropertyDescriptor(O.prototype,"innerHTML").set,toString:g.getOwnPropertyDescriptor(g.prototype,"toString").value,getOnload:g.getOwnPropertyDescriptor(w.prototype,"onload").get,setOnload:g.getOwnPropertyDescriptor(w.prototype,"onload").set,getAttribute:g.getOwnPropertyDescriptor(O.prototype,"getAttribute").value,setAttribute:g.getOwnPropertyDescriptor(O.prototype,"setAttribute").value,removeAttribute:g.getOwnPropertyDescriptor(O.prototype,"removeAttribute").value,remove:g.getOwnPropertyDescriptor(O.prototype,"remove").value,addEventListener:g.getOwnPropertyDescriptor(v.prototype,"addEventListener").value,removeEventListener:g.getOwnPropertyDescriptor(v.prototype,"removeEventListener").value,getChildElementCount:g.getOwnPropertyDescriptor(O.prototype,"childElementCount").get,getFrameElement:g.getOwnPropertyDescriptor(t,"frameElement").get,getParentElement:g.getOwnPropertyDescriptor(a.prototype,"parentElement").get,getOwnerDocument:g.getOwnPropertyDescriptor(a.prototype,"ownerDocument").get,getDefaultView:g.getOwnPropertyDescriptor(p.prototype,"defaultView").get,getBlobFileType:g.getOwnPropertyDescriptor(f.prototype,"type").get,createObjectURL:g.getOwnPropertyDescriptor(o,"createObjectURL").value,revokeObjectURL:g.getOwnPropertyDescriptor(o,"revokeObjectURL").value,getCommonAncestorContainer:g.getOwnPropertyDescriptor(E.prototype,"commonAncestorContainer").get}),{document:n,Proxy:c,Object:g,Reflect:m,Function:i,Node:a,Element:O,Document:p,DocumentFragment:l,Blob:f,ShadowRoot:d,Array:y,Map:u,getContentWindow:function(t,n){switch(n){case"IFRAME":return e.iframeContentWindow.call(t);case"FRAME":return e.frameContentWindow.call(t);case"OBJECT":return e.objectContentWindow.call(t);default:return null}},stringToLowerCase:function(t){return e.String.prototype.toLowerCase.call(t)},stringStartsWith:function(t,n){return e.String.prototype.startsWith.call(t,n)},parse:function(t,n){return e.JSON.parse(t,n)},stringify:function(t,n,r){return e.JSON.stringify(t,n,r)},slice:function(t,n,r){return e.slice.call(t,n,r)},push:function(t,n){return e.push.call(t,n)},split:function(t,n){return e.split.call(t,n)},nodeType:function(t){return e.nodeType.call(t)},tagName:function(t){return e.tagName.call(t)},toString:function(t){return e.toString.call(t)},getOnload:function(t){return e.getOnload.call(t)},setOnload:function(t,n){return e.setOnload.call(t,n)},remove:function(t){return e.remove.call(t)},removeAttribute:function(t,n){return e.removeAttribute.call(t,n)},getAttribute:function(t,n){return e.getAttribute.call(t,n)},setAttribute:function(t,n,r){return e.setAttribute.call(t,n,r)},addEventListener:function(t,n,r,o){return e.addEventListener.call(t,n,r,o)},removeEventListener:function(t,n,r,o){return e.removeEventListener.call(t,n,r,o)},createElement:function(t,n,r){return e.createElement.call(t,n,r)},getInnerHTML:function(t){return e.getInnerHTML.call(t)},setInnerHTML:function(t,n){return e.setInnerHTML.call(t,n)},getChildElementCount:function(t){return e.getChildElementCount.call(t)},getFrameElement:function(t){return e.Function.prototype.call.call(e.getFrameElement,t)},getParentElement:function(t){return e.getParentElement.call(t)},getOwnerDocument:function(t){return e.getOwnerDocument.call(t)},getDefaultView:function(t){return e.getDefaultView.call(t)},getBlobFileType:function(t){return e.getBlobFileType.call(t)},createObjectURL:function(t){return e.createObjectURL(t)},revokeObjectURL:function(t){return e.revokeObjectURL(t)},getCommonAncestorContainer:function(t){return e.getCommonAncestorContainer.call(t)}}}(top)},583:(t,e,n)=>{const{stringToLowerCase:r,stringStartsWith:o,slice:c,Function:i,Object:s}=n(14),{warn:u,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:a}=n(312),{proxy:p,getProxyByOpened:l}=n(134);function f(t){const e=s.getOwnPropertyDescriptor(t.MessageEvent.prototype,"source"),n=e.get;e.get=function(){const t=n.call(this);return l(t)||t},s.defineProperty(t.MessageEvent.prototype,"source",e)}function d(t,e,n){return n(t),function(){const n=c(arguments),s=n[0]+"",l=n[1],f=n[2];if(o(r(s),"javascript")&&u(a,s,t))return null;const d=i.prototype.call.call(e,this,s,l,f);return d?p(d):null}}t.exports=function(t){t.open=d(t,t.open,f),t.document.open=d(t,t.document.open,f)}},134:(t,e,n)=>{const{Object:r,Proxy:o,Reflect:c,Map:i}=n(14),{warn:s,WARN_OPEN_API_LIMITED:u}=n(312),a=new i;function p(t){return a.get(t)}t.exports={proxy:function(t){const e=new r(null);if(r.defineProperty(e,"closed",{get:function(){return t.closed}}),r.defineProperty(e,"close",{value:function(){return t.close()}}),r.defineProperty(e,"focus",{value:function(){return t.focus()}}),r.defineProperty(e,"postMessage",{value:function(e,n,r){return t.postMessage(e,n,r)}}),!a.has(t)){top.SNOW_WINDOW(t);const n=new o(e,{get:function(e,n){let r=c.get(e,n);return c.has(e,n)||c.has(t,n)&&(s(u,n,t)||(r=c.get(t,n))),r},set:function(){}});a.set(t,n)}return p(t)},getProxyByOpened:p,forEachOpened:function(t,e){for(const n of a.keys())t(n,e)}}},278:(t,e,n)=>{const{Object:r,slice:o,Function:c}=n(14),{proxy:i}=n(134);function s(t,e){const n=r.getOwnPropertyDescriptor(t[e].prototype,"window"),o=n.get;n.get=function(){return i(o.call(this))},r.defineProperty(t[e].prototype,"window",n)}t.exports=function(t){t?.documentPictureInPicture?.requestWindow&&(t.documentPictureInPicture.requestWindow=function(t,e,n){return n(t,"DocumentPictureInPictureEvent"),n(t,"DocumentPictureInPicture"),async function(){const t=o(arguments),n=await c.prototype.apply.call(e,this,t);return n?i(n):null}}(t,t.documentPictureInPicture.requestWindow,s))}},373:(t,e,n)=>{const r=n(228),{getFramesArray:o,shadows:c}=n(648),{Object:i,Function:s}=n(14);function u(t){for(let e=0;e<c.length;e++){const n=c[e];if(t&&!n.isConnected)continue;const i=o(n,!1);r(i)}}t.exports={hookShadowDOM:function(t){const e=i.getOwnPropertyDescriptor(t.Element.prototype,"attachShadow");e.configurable=e.writable=!0;const n=e.value;var r;e.value=(r=n,function(t){const e=s.prototype.call.call(r,this,t);return c.push(e),u(!0),e}),i.defineProperty(t.Element.prototype,"attachShadow",e)},protectShadows:u}},294:(t,e,n)=>{const{trustedHTMLs:r}=n(648),{Object:o,Function:c}=n(14);t.exports=function(t){if("undefined"==typeof TrustedTypePolicy)return;const e=o.getOwnPropertyDescriptor(TrustedTypePolicy.prototype,"createHTML");e.configurable=e.writable=!0;const n=e.value;var i;e.value=(i=n,function(t,e){const n=c.prototype.call.call(i,this,t,e);return r.push(n),n}),o.defineProperty(TrustedTypePolicy.prototype,"createHTML",e)}},716:(t,e,n)=>{const{BLOCKED_BLOB_URL:r}=n(407),{Object:o,Array:c,getBlobFileType:i}=n(14),{error:s,ERR_BLOB_FILE_URL_OBJECT_TYPE_FORBIDDEN:u}=n(312),a="KIND",p="TYPE",l="Blob",f="File",d="MediaSource",g=new c,m=new c("text/javascript","text/css","application/javascript","application/css","image/jpeg","image/jpg","image/png","audio/ogg; codecs=opus","video/mp4","application/pdf","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");function y(t,e){return function(n,r){const c=new t(n,r);return o.defineProperty(c,a,{value:e}),e!==l&&e!==f||o.defineProperty(c,p,{value:i(c)}),g.push(c),c}}t.exports=function(t){(function(t){const e=t.URL.createObjectURL;o.defineProperty(t.URL,"createObjectURL",{value:function(t){return function(t){return g.includes(t)}(t)&&function(t){const e=t[a];if(e!==l&&e!==f)return!1;const n=t[p];return!m.includes(n)&&s(u,t,e,n)}(t)?r:e(t)}})})(t),function(t){const e=t[l],n=y(e,l);function r(t,e){return n(t,e)}o.setPrototypeOf(e.prototype,r.prototype),t[l]=r,o.defineProperty(e.prototype,"constructor",{value:r})}(t),function(t){const e=t[f],n=y(e,f);function r(t,e){return n(t,e)}o.setPrototypeOf(e.prototype,r.prototype),t[f]=r,o.defineProperty(e.prototype,"constructor",{value:r})}(t),function(t){const e=t[d],n=y(e,d);function r(t,e){return n(t,e)}o.setPrototypeOf(r,e),t[d]=r,o.defineProperty(e.prototype,"constructor",{value:r})}(t)}},648:(t,e,n)=>{const{tagName:r,nodeType:o,slice:c,Array:i,parse:s,stringify:u,Node:a,Document:p,DocumentFragment:l,Element:f,ShadowRoot:d,getContentWindow:g,getDefaultView:m,getOwnerDocument:y,stringToLowerCase:O,Object:w}=n(14),E=new i,v=new i;function h(t){return E.includes(t)}function b(t){const e=O(t);return"iframe"===e||"frame"===e||"object"===e||"embed"===e}function D(t){if(!t||"object"!=typeof t)return null;if(o(t)!==f.prototype.ELEMENT_NODE)return null;if(h(t))return null;const e=r(t);return b(e)?e:null}function L(t){return i.isArray(t)||(t=new i(t)),t}function _(t,e){let n=!1;for(let r=0;r<e.length;r++)t.includes(e[r])||(t.push(e[r]),n=!0);return n}t.exports={makeWindowUtilSetter:function(t,e){const n=w.create(null);return n.value=e,function(e){w.defineProperty(e,t,n)}},toArray:L,isTagFramable:b,getOwnerWindowOfNode:function(t){return m(y(t))},getContentWindowOfFrame:function(t){return g(t,D(t))},getFramesArray:function(t,e){const n=new i;if(null===t||"object"!=typeof t)return n;if(r=t,v.includes(r)||!function(t){if(h(t))return!0;const e=o(t);return e===f.prototype.ELEMENT_NODE||e===f.prototype.DOCUMENT_FRAGMENT_NODE||e===f.prototype.DOCUMENT_NODE}(t))return n;var r;const s=function(t){if(h(t))return d;switch(o(t)){case a.prototype.DOCUMENT_NODE:return p;case a.prototype.DOCUMENT_FRAGMENT_NODE:return l;default:return f}}(t).prototype.querySelectorAll.call(t,"iframe,frame,object,embed");return _(n,c(s)),e&&_(n,L(t)),n},getFrameTag:D,shadows:E,trustedHTMLs:v}},744:(t,e,n)=>{const{BLOCKED_BLOB_URL:r,BLOCKED_BLOB_MSG:o,runInNewRealm:c}=n(407),{Map:i,toString:s,stringStartsWith:u,createObjectURL:a,revokeObjectURL:p,Blob:l}=n(14),f=new i;t.exports=function(t){!function(t){t.URL.revokeObjectURL=function(t){const e=f.get(t);return e&&(p(e),f.delete(e)),p(t)}}(t),function(t){const e=t.Worker;t.Worker=function(t,n){const i="string"==typeof t?t:s(t);return u(i,"blob")?new e(function(t){if(!f.has(t)){const e=function(t){return c((function(e){let n;const r=new e.XMLHttpRequest;return r.open("GET",t,!1),r.onreadystatechange=function(){4===r.readyState&&200===r.status&&(n=r.responseText)},r.send(),n}))}(t),n=`(function() {\n                Object.defineProperty(URL, 'createObjectURL', {value:() => {\n                    console.log(\`${o}\`);\n                    return '${r}';\n                }})\n            }());\n            \n            `+e;f.set(t,a(new l([n],{type:"text/javascript"})))}return f.get(t)}(i),n):new e(i,n)}}(t)}},626:t=>{t.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(t,e,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:c}=n(626);function i(t,e){const n=e(t);return n===n.window}function s(t,e,n){return null===n.getPrototypeOf.call(e,t)}t.exports=function(t,e=window,n=window.Object){if(!i(e,n))throw new Error(o);if(!i(t,n))throw new Error(r);if(s(window,e,n))throw new Error(c);return s(t,e,n)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e=n(352),r=n.n(e);t=top,Object.defineProperty(t,"SNOW",{value:r()})})()})();}())