(function(){"use strict";(()=>{var e={586:(e,t,n)=>{const r=n(228),{getFramesArray:o,getFrameTag:c}=n(648),{getOnload:i,setOnload:s,removeAttribute:a,addEventListener:u}=n(14);function l(e){if(!c(e))return;u(e,"load",(function(){r(e)}));const t=i(e);t&&(s(e,null),a(e,"onload"),s(e,t))}e.exports=function(e){for(let t=0;t<e.length;t++){const n=e[t],r=o(n,!0);for(let e=0;e<r.length;e++)l(r[e])}}},750:e=>{e.exports=function(e){e&&e.contentWindow}},832:(e,t,n)=>{const{Object:r,Function:o}=n(14),{isTagFramable:c}=n(648),{error:i,ERR_EXTENDING_FRAMABLES_BLOCKED:s}=n(312);e.exports=function(e){const t=r.getOwnPropertyDescriptor(e.CustomElementRegistry.prototype,"define");t.configurable=t.writable=!0;const n=t.value;var a;t.value=(a=n,function(e,t,n){let r=n;if(n){const t=n.extends;c(t+"")&&i(s,e,n)&&(r=void 0)}return o.prototype.call.call(a,this,e,t,r)}),r.defineProperty(e.CustomElementRegistry.prototype,"define",t)}},228:(e,t,n)=>{const r=n(851),o=n(750),{shadows:c,toArray:i,getFramesArray:s,getContentWindowOfFrame:a,getOwnerWindowOfNode:u}=n(648),{Object:l,getFrameElement:p}=n(14),{forEachOpened:f}=n(134);function d(e,t){let n=-1;for(;e[++n];){if(r(e[n],e,l))continue;if(p(e[n])===t)return e[n];const o=d(e[n],t);if(o)return o}for(let n=0;n<c.length;n++){const r=c[n];if(u(r)!==e)continue;const o=s(r,!1);for(let e=0;e<o.length;e++){const n=o[e],r=a(n);if(n===t)return r;const c=d(r,t);if(c)return c}}return null}function m(e,t){const n=d(e,t);return n&&function(e){top.SNOW_WINDOW(e)}(n),!!n}e.exports=function(e){e=i(e);for(let t=0;t<e.length;t++){const n=e[t];o(n),"object"==typeof n&&null!==n&&(m(top,n)||f(m,n))}}},328:(e,t,n)=>{const{getFramesArray:r}=n(648),{Array:o,stringToLowerCase:c,split:i,getAttribute:s,setAttribute:a,getChildElementCount:u,createElement:l,getInnerHTML:p,setInnerHTML:f,remove:d,Element:m}=n(14),{warn:g,WARN_DECLARATIVE_SHADOWS:y}=n(312),w=m.prototype.querySelectorAll;function O(e,t){let n="top."+(e?"SNOW_FRAME":"SNOW_WINDOW")+"(this);";return t&&(n="<script>"+n+"document.currentScript.remove();<\/script>"),n}function E(e){let t=s(e,"onload");return!!t&&(t=O(!0,!1)+t,a(e,"onload",t),!0)}function h(e){let t=s(e,"src")||"";const[n,r]=i(t,":");return"javascript"===c(n)&&(t="javascript:"+O(!1,!1)+r,a(e,"src",t),!0)}function v(e){let t=s(e,"srcdoc");if(t){t=O(!1,!0)+t;const n=new o(t);return _(n,!0),a(e,"srcdoc",n[0]),!0}return!1}function _(e,t){for(let c=0;c<e.length;c++){const i=l(document,"html");if(f(i,e[c]),!u(i))continue;let s=!1;if(t){const e=l(document,"script");e.textContent=O(!1,!1),i.insertBefore(e,i.firstChild),s=!0}const a=w.call(i,"template[shadowroot]");for(let t=0;t<a.length;t++)n=a[t],o=e[c],g(y,n,o),d(n),s=!0;const m=r(i,!1);for(let e=0;e<m.length;e++){const t=m[e];s=E(t)||s,s=h(t)||s,s=v(t)||s}s&&(e[c]=p(i))}var n,o}e.exports={handleHTML:_}},352:(e,t,n)=>{const r=n(228),o=n(716),c=n(832),i=n(583),s=n(278),a=n(459),u=n(58),{hookShadowDOM:l}=n(373),{Object:p,Array:f,push:d,addEventListener:m,getFrameElement:g}=n(14),{isMarked:y,mark:w}=n(111),{error:O,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:E,ERR_MARK_NEW_WINDOW_FAILED:h}=n(312);function v(e,t){const n=p.create(null);n.value=t,p.defineProperty(top,e,n)}function _(e){try{const t=!y(e);return t&&w(e),t}catch(t){O(h,e,t)}return _(e)}function D(e,t){if(_(e)){!function(e){!function(e){const t=g(e);m(t,"load",(function(){r(t)}))}(e),o(e),c(e),i(e),s(e),a(e,"load"),u(e),l(e)}(e);for(let t=0;t<N.length;t++)if(N[t](e))return}t&&t(e)}const N=new f;e.exports=function(e){"function"!=typeof e&&O(E,e)||(N.length||(v("SNOW_WINDOW",(function(e){D(e)})),v("SNOW_FRAME",(function(e){r(e)}))),d(N,e),D(top,e))}},58:(e,t,n)=>{const{protectShadows:r}=n(373),o=n(586),{getFramesArray:c,shadows:i}=n(648),{getParentElement:s,slice:a,Object:u,Function:l}=n(14),{handleHTML:p}=n(328),f=n(228),d={DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]};function m(e,t){return function(){const n=a(arguments),u=s(this)||this;!function(e){o(e),o(i),p(e,t)}(n);const d=l.prototype.apply.call(e,this,n);return function(e,t){const n=c(t,!1);f(n),f(e),r(!0)}(n,u),d}}e.exports=function(e){for(const t in d){const n=d[t];for(let r=0;r<n.length;r++){const o=n[r],c=u.getOwnPropertyDescriptor(e[t].prototype,o);if(!c)continue;const i=c.set?"set":"value";c[i]=m(c[i],"srcdoc"===o),c.configurable=!0,"value"===i&&(c.writable=!0),u.defineProperty(e[t].prototype,o,c)}}}},459:(e,t,n)=>{const r=n(228),{removeEventListener:o,addEventListener:c,slice:i,Map:s,Object:a}=n(14),u=new s;function l(e,t){return function(n,o,s){let a=o;return n===t&&(u.has(o)||u.set(o,(function(){r(this);const e=i(arguments);!function(e,t,n){t&&(t.handleEvent?t.handleEvent.apply(t,n):t.apply(e,n))}(this,o,e)})),a=u.get(o)),c(this||e,n,a,s)}}function p(e,t){return function(n,r,c){let i=r;return n===t&&(i=u.get(r),u.delete(r)),o(this||e,n,i,c)}}e.exports=function(e,t){a.defineProperty(e.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:l(e,t)}),a.defineProperty(e.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:p(e,t)})}},312:(e,t,n)=>{const{console:r}=n(14);e.exports={warn:function(e,t,n){let o;switch(e){case 5:const e=t,c=n;o=!1,r.warn("SNOW:","removing html string representing a declarative shadow:",e,"\n",`"${c}"`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");break;case 3:const i=t,s=n;o=!0,r.warn("SNOW:",o?"":"NOT",'blocking open attempt to "javascript:" url:',i,"by window: ",s,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");break;case 2:const a=t,u=n;o=!0,r.warn("SNOW:","blocking access to property:",`"${a}"`,"of opened window: ",u,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".")}return o},error:function(e,t,n){let o;switch(e){case 7:const e=t,c=n;o=!0,r.error("SNOW:",`calling "URL.createObjectURL()" on a "${e}" object is forbidden under snow protection:`,c,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/43#issuecomment-1434063891",".","\n");break;case 6:const i=t,s=n;o=!0,r.error("SNOW:",`"${i}"`,"extending attempt","of framable elements such as provided",s,"is blocked to prevent bypass",".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".","\n");break;case 1:const a=t,u=n;o=!0,r.error("SNOW:","failed to mark new window:",a,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","\n","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","\n","error caught:","\n",u);break;case 4:const l=t;o=!0,r.error("SNOW:",'first argument must be of type "function", instead got:',l,".","\n","therefore, snow bailed and is not applied to the page until this is fixed.")}return o},ERR_MARK_NEW_WINDOW_FAILED:1,WARN_OPEN_API_LIMITED:2,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:3,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:4,WARN_DECLARATIVE_SHADOWS:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:7}},111:(e,t,n)=>{const{Map:r,Object:o,Array:c}=n(14),i=new c,s=new r;e.exports={isMarked:function(e){if(!s.has(e))return!1;const t=o.getOwnPropertyDescriptor(e,"SNOW_ID");if(!t||!o.hasOwnProperty.call(t,"value"))return!1;if("function"!=typeof t.value)return!1;const n=s.get(e);return t.value(i)===n},mark:function(e){const t=new c,n=o.create(null);n.value=e=>e===i&&t,o.defineProperty(e,"SNOW_ID",n),s.set(e,t)}}},14:e=>{e.exports=function(e){const t=function(e){const{EventTarget:t}=e;return function(e,n){const r=e.document.createElement("iframe");(e.document.head||e.document.documentElement).appendChild(r);const o=function(e){const{console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:a,Node:u,Document:l,DocumentFragment:p,ShadowRoot:f,Object:d,Reflect:m,Array:g,Element:y,HTMLElement:w,HTMLTemplateElement:O,HTMLIFrameElement:E,HTMLFrameElement:h,HTMLObjectElement:v}=e,_={console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:a,Node:u,Document:l,DocumentFragment:p,ShadowRoot:f,Object:d,Reflect:m,Array:g,Element:y,HTMLElement:w,HTMLTemplateElement:O,EventTarget:t,HTMLIFrameElement:E,HTMLFrameElement:h,HTMLObjectElement:v};return _.document={createElement:e.document.createElement},_}(r.contentWindow);return r.parentElement.removeChild(r),o}(e)}(e),{console:n,Proxy:r,Function:o,String:c,Map:i,Node:s,Document:a,DocumentFragment:u,ShadowRoot:l,Object:p,Reflect:f,Array:d,Element:m,HTMLElement:g,HTMLTemplateElement:y,EventTarget:w,HTMLIFrameElement:O,HTMLFrameElement:E,HTMLObjectElement:h}=t;return p.assign(t,{iframeContentWindow:p.getOwnPropertyDescriptor(O.prototype,"contentWindow").get,frameContentWindow:p.getOwnPropertyDescriptor(E.prototype,"contentWindow").get,objectContentWindow:p.getOwnPropertyDescriptor(h.prototype,"contentWindow").get,createElement:p.getOwnPropertyDescriptor(a.prototype,"createElement").value,slice:p.getOwnPropertyDescriptor(d.prototype,"slice").value,push:p.getOwnPropertyDescriptor(d.prototype,"push").value,split:p.getOwnPropertyDescriptor(c.prototype,"split").value,nodeType:p.getOwnPropertyDescriptor(s.prototype,"nodeType").get,tagName:p.getOwnPropertyDescriptor(m.prototype,"tagName").get,getInnerHTML:p.getOwnPropertyDescriptor(m.prototype,"innerHTML").get,setInnerHTML:p.getOwnPropertyDescriptor(m.prototype,"innerHTML").set,toString:p.getOwnPropertyDescriptor(p.prototype,"toString").value,getOnload:p.getOwnPropertyDescriptor(g.prototype,"onload").get,setOnload:p.getOwnPropertyDescriptor(g.prototype,"onload").set,getAttribute:p.getOwnPropertyDescriptor(m.prototype,"getAttribute").value,setAttribute:p.getOwnPropertyDescriptor(m.prototype,"setAttribute").value,removeAttribute:p.getOwnPropertyDescriptor(m.prototype,"removeAttribute").value,remove:p.getOwnPropertyDescriptor(m.prototype,"remove").value,addEventListener:p.getOwnPropertyDescriptor(w.prototype,"addEventListener").value,removeEventListener:p.getOwnPropertyDescriptor(w.prototype,"removeEventListener").value,getChildElementCount:p.getOwnPropertyDescriptor(m.prototype,"childElementCount").get,getFrameElement:p.getOwnPropertyDescriptor(e,"frameElement").get,getParentElement:p.getOwnPropertyDescriptor(s.prototype,"parentElement").get,getOwnerDocument:p.getOwnPropertyDescriptor(s.prototype,"ownerDocument").get,getDefaultView:p.getOwnPropertyDescriptor(a.prototype,"defaultView").get}),{console:n,Proxy:r,Object:p,Reflect:f,Function:o,Node:s,Element:m,Document:a,DocumentFragment:u,ShadowRoot:l,Array:d,Map:i,getContentWindow:function(e,n){switch(n){case"IFRAME":return t.iframeContentWindow.call(e);case"FRAME":return t.frameContentWindow.call(e);case"OBJECT":return t.objectContentWindow.call(e);default:return null}},stringToLowerCase:function(e){return t.String.prototype.toLowerCase.call(e)},stringStartsWith:function(e,n){return t.String.prototype.startsWith.call(e,n)},parse:function(e,n){return t.JSON.parse(e,n)},stringify:function(e,n,r){return t.JSON.stringify(e,n,r)},slice:function(e,n,r){return t.slice.call(e,n,r)},push:function(e,n){return t.push.call(e,n)},split:function(e,n){return t.split.call(e,n)},nodeType:function(e){return t.nodeType.call(e)},tagName:function(e){return t.tagName.call(e)},toString:function(e){return t.toString.call(e)},getOnload:function(e){return t.getOnload.call(e)},setOnload:function(e,n){return t.setOnload.call(e,n)},remove:function(e){return t.remove.call(e)},removeAttribute:function(e,n){return t.removeAttribute.call(e,n)},getAttribute:function(e,n){return t.getAttribute.call(e,n)},setAttribute:function(e,n,r){return t.setAttribute.call(e,n,r)},addEventListener:function(e,n,r,o){return t.addEventListener.call(e,n,r,o)},removeEventListener:function(e,n,r,o){return t.removeEventListener.call(e,n,r,o)},createElement:function(e,n,r){return t.createElement.call(e,n,r)},getInnerHTML:function(e){return t.getInnerHTML.call(e)},setInnerHTML:function(e,n){return t.setInnerHTML.call(e,n)},getChildElementCount:function(e){return t.getChildElementCount.call(e)},getFrameElement:function(e){return t.Function.prototype.call.call(t.getFrameElement,e)},getParentElement:function(e){return t.getParentElement.call(e)},getOwnerDocument:function(e){return t.getOwnerDocument.call(e)},getDefaultView:function(e){return t.getDefaultView.call(e)}}}(top)},583:(e,t,n)=>{const{stringToLowerCase:r,stringStartsWith:o,slice:c,Function:i,Object:s}=n(14),{warn:a,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:u}=n(312),{proxy:l,getProxyByOpened:p}=n(134);function f(e){const t=s.getOwnPropertyDescriptor(e.MessageEvent.prototype,"source"),n=t.get;t.get=function(){const e=n.call(this);return p(e)||e},s.defineProperty(e.MessageEvent.prototype,"source",t)}function d(e,t,n){return n(e),function(){const n=c(arguments),s=n[0]+"",p=n[1],f=n[2];if(o(r(s),"javascript")&&a(u,s,e))return null;const d=i.prototype.call.call(t,this,s,p,f);return d?l(d):null}}e.exports=function(e){e.open=d(e,e.open,f),e.document.open=d(e,e.document.open,f)}},134:(e,t,n)=>{const{Object:r,Proxy:o,Reflect:c,Map:i}=n(14),{warn:s,WARN_OPEN_API_LIMITED:a}=n(312),u=new i;function l(e){return u.get(e)}e.exports={proxy:function(e){const t=new r(null);if(r.defineProperty(t,"closed",{get:function(){return e.closed}}),r.defineProperty(t,"close",{value:function(){return e.close()}}),r.defineProperty(t,"focus",{value:function(){return e.focus()}}),r.defineProperty(t,"postMessage",{value:function(t,n,r){return e.postMessage(t,n,r)}}),!u.has(e)){top.SNOW_WINDOW(e);const n=new o(t,{get:function(t,n){let r=c.get(t,n);return c.has(t,n)||c.has(e,n)&&(s(a,n,e)||(r=c.get(e,n))),r},set:function(){}});u.set(e,n)}return l(e)},getProxyByOpened:l,forEachOpened:function(e,t){for(const n of u.keys())e(n,t)}}},278:(e,t,n)=>{const{Object:r,slice:o,Function:c}=n(14),{proxy:i}=n(134);function s(e,t){const n=r.getOwnPropertyDescriptor(e[t].prototype,"window"),o=n.get;n.get=function(){return i(o.call(this))},r.defineProperty(e[t].prototype,"window",n)}e.exports=function(e){e?.documentPictureInPicture?.requestWindow&&(e.documentPictureInPicture.requestWindow=function(e,t,n){return n(e,"DocumentPictureInPictureEvent"),n(e,"DocumentPictureInPicture"),async function(){const e=o(arguments),n=await c.prototype.apply.call(t,this,e);return n?i(n):null}}(e,e.documentPictureInPicture.requestWindow,s))}},373:(e,t,n)=>{const r=n(228),{getFramesArray:o,shadows:c}=n(648),{Object:i,Function:s}=n(14);function a(e){for(let t=0;t<c.length;t++){const n=c[t];if(e&&!n.isConnected)continue;const i=o(n,!1);r(i)}}e.exports={hookShadowDOM:function(e){const t=i.getOwnPropertyDescriptor(e.Element.prototype,"attachShadow");t.configurable=t.writable=!0;const n=t.value;var r;t.value=(r=n,function(e){const t=s.prototype.call.call(r,this,e);return c.push(t),a(!0),t}),i.defineProperty(e.Element.prototype,"attachShadow",t)},protectShadows:a}},716:(e,t,n)=>{const{Object:r}=n(14),{error:o,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:c}=n(312),i="Blob",s="File";function a(e,t){const n=e[t];return function(e,o,c){const i=new n(e,o,c);return r.defineProperty(i,t,{value:!0}),i}}e.exports=function(e){var t;r.defineProperty(e.URL,"createObjectURL",{value:(t=e.URL.createObjectURL,function(e){const n=e[i]?i:e[s]?s:null;if(!n||!o(c,n,e))return t(e)})}),e[i]=a(e,i),e[s]=a(e,s)}},648:(e,t,n)=>{const{tagName:r,nodeType:o,slice:c,Array:i,parse:s,stringify:a,Node:u,Document:l,DocumentFragment:p,Element:f,ShadowRoot:d,getContentWindow:m,getDefaultView:g,getOwnerDocument:y,stringToLowerCase:w}=n(14),O=new i;function E(e){return O.includes(e)}function h(e){const t=w(e);return"iframe"===t||"frame"===t||"object"===t||"embed"===t}function v(e){if(!e||"object"!=typeof e)return null;if(o(e)!==f.prototype.ELEMENT_NODE)return null;if(E(e))return null;const t=r(e);return h(t)?t:null}function _(e){return i.isArray(e)||(e=new i(e)),e}function D(e,t){let n=!1;for(let r=0;r<t.length;r++)e.includes(t[r])||(e.push(t[r]),n=!0);return n}e.exports={toArray:_,isTagFramable:h,getOwnerWindowOfNode:function(e){return g(y(e))},getContentWindowOfFrame:function(e){return m(e,v(e))},getFramesArray:function(e,t){const n=new i;if(null===e||"object"!=typeof e)return n;if("string"==typeof s(a(r=e,((e,t)=>e||r!==t?"":t)))||!function(e){if(E(e))return!0;const t=o(e);return t===f.prototype.ELEMENT_NODE||t===f.prototype.DOCUMENT_FRAGMENT_NODE||t===f.prototype.DOCUMENT_NODE}(e))return n;var r;const m=function(e){if(E(e))return d;switch(o(e)){case u.prototype.DOCUMENT_NODE:return l;case u.prototype.DOCUMENT_FRAGMENT_NODE:return p;default:return f}}(e).prototype.querySelectorAll.call(e,"iframe,frame,object,embed");return D(n,c(m)),t&&D(n,_(e)),n},getFrameTag:v,shadows:O}},626:e=>{e.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(e,t,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:c}=n(626);function i(e,t){const n=t(e);return n===n.window}function s(e,t,n){return null===n.getPrototypeOf.call(t,e)}e.exports=function(e,t=window,n=window.Object){if(!i(t,n))throw new Error(o);if(!i(e,n))throw new Error(r);if(s(window,t,n))throw new Error(c);return s(e,t,n)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=n(352),r=n.n(t);e=top,Object.defineProperty(e,"SNOW",{value:r()})})()})();}())