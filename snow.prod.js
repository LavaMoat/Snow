(function(){"use strict";(()=>{var e={586:(e,t,n)=>{const r=n(228),{getFramesArray:o,getFrameTag:c}=n(648),{getOnload:i,setOnload:s,removeAttribute:u,addEventListener:a}=n(14);function l(e){if(!c(e))return;a(e,"load",(function(){r(e)}));const t=i(e);t&&(s(e,null),u(e,"onload"),s(e,t))}e.exports=function(e){for(let t=0;t<e.length;t++){const n=e[t],r=o(n,!0);for(let e=0;e<r.length;e++)l(r[e])}}},750:e=>{e.exports=function(e){e&&e.contentWindow}},832:(e,t,n)=>{const{Object:r,Function:o}=n(14),{isTagFramable:c}=n(648),{error:i,ERR_EXTENDING_FRAMABLES_BLOCKED:s}=n(312);e.exports=function(e){const t=r.getOwnPropertyDescriptor(e.CustomElementRegistry.prototype,"define");t.configurable=t.writable=!0;const n=t.value;var u;t.value=(u=n,function(e,t,n){let r=n;if(n){const t=n.extends;c(t+"")&&i(s,e,n)&&(r=void 0)}return o.prototype.call.call(u,this,e,t,r)}),r.defineProperty(e.CustomElementRegistry.prototype,"define",t)}},228:(e,t,n)=>{const r=n(851),o=n(750),{shadows:c,toArray:i,getFramesArray:s,getContentWindowOfFrame:u,getOwnerWindowOfNode:a}=n(648),{Object:l,getFrameElement:p}=n(14),{forEachOpened:f}=n(134);function d(e,t){let n=-1;for(;e[++n];){if(r(e[n],e,l))continue;if(p(e[n])===t)return e[n];const o=d(e[n],t);if(o)return o}for(let n=0;n<c.length;n++){const r=c[n];if(a(r)!==e)continue;const o=s(r,!1);for(let e=0;e<o.length;e++){const n=o[e],r=u(n);if(n===t)return r;const c=d(r,t);if(c)return c}}return null}function m(e,t){const n=d(e,t);return n&&function(e){top.SNOW_WINDOW(e)}(n),!!n}e.exports=function(e){e=i(e);for(let t=0;t<e.length;t++){const n=e[t];"object"==typeof n&&null!==n&&(o(n),m(top,n)||f(m,n))}}},328:(e,t,n)=>{const{getFramesArray:r}=n(648),{Array:o,stringToLowerCase:c,split:i,getAttribute:s,setAttribute:u,getChildElementCount:a,createElement:l,getInnerHTML:p,setInnerHTML:f,remove:d,Element:m}=n(14),{warn:g,WARN_DECLARATIVE_SHADOWS:y}=n(312),w=m.prototype.querySelectorAll;function O(e,t){let n="top."+(e?"SNOW_FRAME":"SNOW_WINDOW")+"(this);";return t&&(n="<script>"+n+"document.currentScript.remove();<\/script>"),n}function E(e){let t=s(e,"onload");return!!t&&(t=O(!0,!1)+t,u(e,"onload",t),!0)}function h(e){let t=s(e,"src")||"";const[n,r]=i(t,":");return"javascript"===c(n)&&(t="javascript:"+O(!1,!1)+r,u(e,"src",t),!0)}function v(e){let t=s(e,"srcdoc");if(t){t=O(!1,!0)+t;const n=new o(t);return D(n,!0),u(e,"srcdoc",n[0]),!0}return!1}function D(e,t){for(let c=0;c<e.length;c++){const i=l(document,"html");if(f(i,e[c]),!a(i))continue;let s=!1;if(t){const e=l(document,"script");e.textContent=O(!1,!1),i.insertBefore(e,i.firstChild),s=!0}const u=w.call(i,"template[shadowroot]");for(let t=0;t<u.length;t++)n=u[t],o=e[c],g(y,n,o),d(n),s=!0;const m=r(i,!1);for(let e=0;e<m.length;e++){const t=m[e];s=E(t)||s,s=h(t)||s,s=v(t)||s}s&&(e[c]=p(i))}var n,o}e.exports={handleHTML:D}},352:(e,t,n)=>{const r=n(228),o=n(716),c=n(832),i=n(583),s=n(278),u=n(459),a=n(58),{hookShadowDOM:l}=n(373),{Object:p,Array:f,push:d,addEventListener:m,getFrameElement:g}=n(14),{isMarked:y,mark:w}=n(111),{error:O,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:E,ERR_MARK_NEW_WINDOW_FAILED:h}=n(312);function v(e,t){const n=p.create(null);n.value=t,p.defineProperty(top,e,n)}function D(e){try{const t=!y(e);return t&&w(e),t}catch(t){O(h,e,t)}return D(e)}function _(e,t){if(D(e)){!function(e){!function(e){const t=g(e);m(t,"load",(function(){r(t)}))}(e),o(e),c(e),i(e),s(e),u(e,"load"),a(e),l(e)}(e);for(let t=0;t<b.length;t++)if(b[t](e))return}t&&t(e)}const b=new f;e.exports=function(e){"function"!=typeof e&&O(E,e)||(b.length||(v("SNOW_WINDOW",(function(e){_(e)})),v("SNOW_FRAME",(function(e){r(e)}))),d(b,e),_(top,e))}},58:(e,t,n)=>{const{protectShadows:r}=n(373),o=n(586),{getFramesArray:c,shadows:i}=n(648),{getParentElement:s,slice:u,Object:a,Function:l}=n(14),{handleHTML:p}=n(328),f=n(228),d={DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]};function m(e,t){return function(){const n=u(arguments),a=s(this)||this;!function(e){o(e),o(i),p(e,t)}(n);const d=l.prototype.apply.call(e,this,n);return function(e,t){const n=c(t,!1);f(n),f(e),r(!0)}(n,a),d}}e.exports=function(e){for(const t in d){const n=d[t];for(let r=0;r<n.length;r++){const o=n[r],c=a.getOwnPropertyDescriptor(e[t].prototype,o);if(!c)continue;const i=c.set?"set":"value";c[i]=m(c[i],"srcdoc"===o),c.configurable=!0,"value"===i&&(c.writable=!0),a.defineProperty(e[t].prototype,o,c)}}}},459:(e,t,n)=>{const r=n(228),{removeEventListener:o,addEventListener:c,slice:i,Map:s,Object:u}=n(14),a=new s;function l(e,t){return function(n,o,s){let u=o;return n===t&&(a.has(o)||a.set(o,(function(){r(this);const e=i(arguments);!function(e,t,n){t&&(t.handleEvent?t.handleEvent.apply(t,n):t.apply(e,n))}(this,o,e)})),u=a.get(o)),c(this||e,n,u,s)}}function p(e,t){return function(n,r,c){let i=r;return n===t&&(i=a.get(r),a.delete(r)),o(this||e,n,i,c)}}e.exports=function(e,t){u.defineProperty(e.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:l(e,t)}),u.defineProperty(e.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:p(e,t)})}},312:(e,t,n)=>{const{console:r}=n(14);e.exports={warn:function(e,t,n){let o;switch(e){case 5:const e=t,c=n;o=!1,r.warn("SNOW:","removing html string representing a declarative shadow:",e,"\n",`"${c}"`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");break;case 3:const i=t,s=n;o=!0,r.warn("SNOW:",o?"":"NOT",'blocking open attempt to "javascript:" url:',i,"by window: ",s,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");break;case 2:const u=t,a=n;o=!0,r.warn("SNOW:","blocking access to property:",`"${u}"`,"of opened window: ",a,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".")}return o},error:function(e,t,n){let o;switch(e){case 7:const e=t,c=n;o=!0,r.error("SNOW:",`calling "URL.createObjectURL()" on a "${e}" object is forbidden under snow protection:`,c,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/43#issuecomment-1434063891",".","\n");break;case 6:const i=t,s=n;o=!0,r.error("SNOW:",`"${i}"`,"extending attempt","of framable elements such as provided",s,"is blocked to prevent bypass",".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".","\n");break;case 1:const u=t,a=n;o=!0,r.error("SNOW:","failed to mark new window:",u,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","\n","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","\n","error caught:","\n",a);break;case 4:const l=t;o=!0,r.error("SNOW:",'first argument must be of type "function", instead got:',l,".","\n","therefore, snow bailed and is not applied to the page until this is fixed.")}return o},ERR_MARK_NEW_WINDOW_FAILED:1,WARN_OPEN_API_LIMITED:2,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:3,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:4,WARN_DECLARATIVE_SHADOWS:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:7}},111:(e,t,n)=>{const{Map:r,Object:o,Array:c}=n(14),i=new c,s=new r;e.exports={isMarked:function(e){if(!s.has(e))return!1;const t=o.getOwnPropertyDescriptor(e,"SNOW_ID");if(!t||!o.hasOwnProperty.call(t,"value"))return!1;if("function"!=typeof t.value)return!1;const n=s.get(e);return t.value(i)===n},mark:function(e){const t=new c,n=o.create(null);n.value=e=>e===i&&t,o.defineProperty(e,"SNOW_ID",n),s.set(e,t)}}},14:e=>{e.exports=function(e){const t=function(e){const{EventTarget:t}=e;return function(e,n){const r=e.document.createElement("iframe");(e.document.head||e.document.documentElement).appendChild(r);const o=function(e){const{console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:l,DocumentFragment:p,Blob:f,ShadowRoot:d,Object:m,Reflect:g,Array:y,Element:w,HTMLElement:O,HTMLTemplateElement:E,HTMLIFrameElement:h,HTMLFrameElement:v,HTMLObjectElement:D}=e,_={console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:l,DocumentFragment:p,Blob:f,ShadowRoot:d,Object:m,Reflect:g,Array:y,Element:w,HTMLElement:O,HTMLTemplateElement:E,EventTarget:t,HTMLIFrameElement:h,HTMLFrameElement:v,HTMLObjectElement:D};return _.document={createElement:e.document.createElement},_}(r.contentWindow);return r.parentElement.removeChild(r),o}(e)}(e),{console:n,Proxy:r,Function:o,String:c,Map:i,Node:s,Document:u,DocumentFragment:a,Blob:l,ShadowRoot:p,Object:f,Reflect:d,Array:m,Element:g,HTMLElement:y,HTMLTemplateElement:w,EventTarget:O,HTMLIFrameElement:E,HTMLFrameElement:h,HTMLObjectElement:v}=t;return f.assign(t,{iframeContentWindow:f.getOwnPropertyDescriptor(E.prototype,"contentWindow").get,frameContentWindow:f.getOwnPropertyDescriptor(h.prototype,"contentWindow").get,objectContentWindow:f.getOwnPropertyDescriptor(v.prototype,"contentWindow").get,createElement:f.getOwnPropertyDescriptor(u.prototype,"createElement").value,slice:f.getOwnPropertyDescriptor(m.prototype,"slice").value,push:f.getOwnPropertyDescriptor(m.prototype,"push").value,split:f.getOwnPropertyDescriptor(c.prototype,"split").value,nodeType:f.getOwnPropertyDescriptor(s.prototype,"nodeType").get,tagName:f.getOwnPropertyDescriptor(g.prototype,"tagName").get,getInnerHTML:f.getOwnPropertyDescriptor(g.prototype,"innerHTML").get,setInnerHTML:f.getOwnPropertyDescriptor(g.prototype,"innerHTML").set,toString:f.getOwnPropertyDescriptor(f.prototype,"toString").value,getOnload:f.getOwnPropertyDescriptor(y.prototype,"onload").get,setOnload:f.getOwnPropertyDescriptor(y.prototype,"onload").set,getAttribute:f.getOwnPropertyDescriptor(g.prototype,"getAttribute").value,setAttribute:f.getOwnPropertyDescriptor(g.prototype,"setAttribute").value,removeAttribute:f.getOwnPropertyDescriptor(g.prototype,"removeAttribute").value,remove:f.getOwnPropertyDescriptor(g.prototype,"remove").value,addEventListener:f.getOwnPropertyDescriptor(O.prototype,"addEventListener").value,removeEventListener:f.getOwnPropertyDescriptor(O.prototype,"removeEventListener").value,getChildElementCount:f.getOwnPropertyDescriptor(g.prototype,"childElementCount").get,getFrameElement:f.getOwnPropertyDescriptor(e,"frameElement").get,getParentElement:f.getOwnPropertyDescriptor(s.prototype,"parentElement").get,getOwnerDocument:f.getOwnPropertyDescriptor(s.prototype,"ownerDocument").get,getDefaultView:f.getOwnPropertyDescriptor(u.prototype,"defaultView").get,getBlobFileType:f.getOwnPropertyDescriptor(l.prototype,"type").get}),{console:n,Proxy:r,Object:f,Reflect:d,Function:o,Node:s,Element:g,Document:u,DocumentFragment:a,Blob:l,ShadowRoot:p,Array:m,Map:i,getContentWindow:function(e,n){switch(n){case"IFRAME":return t.iframeContentWindow.call(e);case"FRAME":return t.frameContentWindow.call(e);case"OBJECT":return t.objectContentWindow.call(e);default:return null}},stringToLowerCase:function(e){return t.String.prototype.toLowerCase.call(e)},stringStartsWith:function(e,n){return t.String.prototype.startsWith.call(e,n)},parse:function(e,n){return t.JSON.parse(e,n)},stringify:function(e,n,r){return t.JSON.stringify(e,n,r)},slice:function(e,n,r){return t.slice.call(e,n,r)},push:function(e,n){return t.push.call(e,n)},split:function(e,n){return t.split.call(e,n)},nodeType:function(e){return t.nodeType.call(e)},tagName:function(e){return t.tagName.call(e)},toString:function(e){return t.toString.call(e)},getOnload:function(e){return t.getOnload.call(e)},setOnload:function(e,n){return t.setOnload.call(e,n)},remove:function(e){return t.remove.call(e)},removeAttribute:function(e,n){return t.removeAttribute.call(e,n)},getAttribute:function(e,n){return t.getAttribute.call(e,n)},setAttribute:function(e,n,r){return t.setAttribute.call(e,n,r)},addEventListener:function(e,n,r,o){return t.addEventListener.call(e,n,r,o)},removeEventListener:function(e,n,r,o){return t.removeEventListener.call(e,n,r,o)},createElement:function(e,n,r){return t.createElement.call(e,n,r)},getInnerHTML:function(e){return t.getInnerHTML.call(e)},setInnerHTML:function(e,n){return t.setInnerHTML.call(e,n)},getChildElementCount:function(e){return t.getChildElementCount.call(e)},getFrameElement:function(e){return t.Function.prototype.call.call(t.getFrameElement,e)},getParentElement:function(e){return t.getParentElement.call(e)},getOwnerDocument:function(e){return t.getOwnerDocument.call(e)},getDefaultView:function(e){return t.getDefaultView.call(e)},getBlobFileType:function(e){return t.getBlobFileType.call(e)}}}(top)},583:(e,t,n)=>{const{stringToLowerCase:r,stringStartsWith:o,slice:c,Function:i,Object:s}=n(14),{warn:u,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:a}=n(312),{proxy:l,getProxyByOpened:p}=n(134);function f(e){const t=s.getOwnPropertyDescriptor(e.MessageEvent.prototype,"source"),n=t.get;t.get=function(){const e=n.call(this);return p(e)||e},s.defineProperty(e.MessageEvent.prototype,"source",t)}function d(e,t,n){return n(e),function(){const n=c(arguments),s=n[0]+"",p=n[1],f=n[2];if(o(r(s),"javascript")&&u(a,s,e))return null;const d=i.prototype.call.call(t,this,s,p,f);return d?l(d):null}}e.exports=function(e){e.open=d(e,e.open,f),e.document.open=d(e,e.document.open,f)}},134:(e,t,n)=>{const{Object:r,Proxy:o,Reflect:c,Map:i}=n(14),{warn:s,WARN_OPEN_API_LIMITED:u}=n(312),a=new i;function l(e){return a.get(e)}e.exports={proxy:function(e){const t=new r(null);if(r.defineProperty(t,"closed",{get:function(){return e.closed}}),r.defineProperty(t,"close",{value:function(){return e.close()}}),r.defineProperty(t,"focus",{value:function(){return e.focus()}}),r.defineProperty(t,"postMessage",{value:function(t,n,r){return e.postMessage(t,n,r)}}),!a.has(e)){top.SNOW_WINDOW(e);const n=new o(t,{get:function(t,n){let r=c.get(t,n);return c.has(t,n)||c.has(e,n)&&(s(u,n,e)||(r=c.get(e,n))),r},set:function(){}});a.set(e,n)}return l(e)},getProxyByOpened:l,forEachOpened:function(e,t){for(const n of a.keys())e(n,t)}}},278:(e,t,n)=>{const{Object:r,slice:o,Function:c}=n(14),{proxy:i}=n(134);function s(e,t){const n=r.getOwnPropertyDescriptor(e[t].prototype,"window"),o=n.get;n.get=function(){return i(o.call(this))},r.defineProperty(e[t].prototype,"window",n)}e.exports=function(e){e?.documentPictureInPicture?.requestWindow&&(e.documentPictureInPicture.requestWindow=function(e,t,n){return n(e,"DocumentPictureInPictureEvent"),n(e,"DocumentPictureInPicture"),async function(){const e=o(arguments),n=await c.prototype.apply.call(t,this,e);return n?i(n):null}}(e,e.documentPictureInPicture.requestWindow,s))}},373:(e,t,n)=>{const r=n(228),{getFramesArray:o,shadows:c}=n(648),{Object:i,Function:s}=n(14);function u(e){for(let t=0;t<c.length;t++){const n=c[t];if(e&&!n.isConnected)continue;const i=o(n,!1);r(i)}}e.exports={hookShadowDOM:function(e){const t=i.getOwnPropertyDescriptor(e.Element.prototype,"attachShadow");t.configurable=t.writable=!0;const n=t.value;var r;t.value=(r=n,function(e){const t=s.prototype.call.call(r,this,e);return c.push(t),u(!0),t}),i.defineProperty(e.Element.prototype,"attachShadow",t)},protectShadows:u}},716:(e,t,n)=>{const{Object:r,Array:o,getBlobFileType:c}=n(14),{error:i,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:s}=n(312),u="KIND",a="TYPE",l="Blob",p="File",f="MediaSource",d=new o,m=new o("text/javascript");function g(e,t){return function(n,o){const i=new e(n,o);return r.defineProperty(i,u,{value:t}),t!==l&&t!==p||r.defineProperty(i,a,{value:c(i)}),d.push(i),i}}e.exports=function(e){!function(e){const t=e.URL.createObjectURL;r.defineProperty(e.URL,"createObjectURL",{value:function(e){if(!d.includes(e)&&i(s,"unknown",e))return;const n=e[u];if(n===l||n===p){const t=e[a];if((!t||!m.includes(t))&&i(s,n,e))return}return t(e)}})}(e),function(e){const t=e[l],n=g(t,l);function o(e,t){return n(e,t)}r.setPrototypeOf(t.prototype,o.prototype),e[l]=o}(e),function(e){const t=e[p],n=g(t,p);function o(e,t){return n(e,t)}r.setPrototypeOf(t.prototype,o.prototype),e[p]=o}(e),function(e){const t=e[f],n=g(t,f);function o(e,t){return n(e,t)}r.setPrototypeOf(o,t),e[f]=o}(e)}},648:(e,t,n)=>{const{tagName:r,nodeType:o,slice:c,Array:i,parse:s,stringify:u,Node:a,Document:l,DocumentFragment:p,Element:f,ShadowRoot:d,getContentWindow:m,getDefaultView:g,getOwnerDocument:y,stringToLowerCase:w}=n(14),O=new i;function E(e){return O.includes(e)}function h(e){const t=w(e);return"iframe"===t||"frame"===t||"object"===t||"embed"===t}function v(e){if(!e||"object"!=typeof e)return null;if(o(e)!==f.prototype.ELEMENT_NODE)return null;if(E(e))return null;const t=r(e);return h(t)?t:null}function D(e){return i.isArray(e)||(e=new i(e)),e}function _(e,t){let n=!1;for(let r=0;r<t.length;r++)e.includes(t[r])||(e.push(t[r]),n=!0);return n}e.exports={toArray:D,isTagFramable:h,getOwnerWindowOfNode:function(e){return g(y(e))},getContentWindowOfFrame:function(e){return m(e,v(e))},getFramesArray:function(e,t){const n=new i;if(null===e||"object"!=typeof e)return n;if("string"==typeof s(u(r=e,((e,t)=>e||r!==t?"":t)))||!function(e){if(E(e))return!0;const t=o(e);return t===f.prototype.ELEMENT_NODE||t===f.prototype.DOCUMENT_FRAGMENT_NODE||t===f.prototype.DOCUMENT_NODE}(e))return n;var r;const m=function(e){if(E(e))return d;switch(o(e)){case a.prototype.DOCUMENT_NODE:return l;case a.prototype.DOCUMENT_FRAGMENT_NODE:return p;default:return f}}(e).prototype.querySelectorAll.call(e,"iframe,frame,object,embed");return _(n,c(m)),t&&_(n,D(e)),n},getFrameTag:v,shadows:O}},626:e=>{e.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(e,t,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:c}=n(626);function i(e,t){const n=t(e);return n===n.window}function s(e,t,n){return null===n.getPrototypeOf.call(t,e)}e.exports=function(e,t=window,n=window.Object){if(!i(t,n))throw new Error(o);if(!i(e,n))throw new Error(r);if(s(window,t,n))throw new Error(c);return s(e,t,n)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e,t=n(352),r=n.n(t);e=top,Object.defineProperty(e,"SNOW",{value:r()})})()})();}())