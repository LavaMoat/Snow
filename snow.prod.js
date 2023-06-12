(function(){"use strict";(()=>{var t={586:(t,e,n)=>{const r=n(228),{getFramesArray:o,getFrameTag:c}=n(648),{getOnload:i,setOnload:s,removeAttribute:u,addEventListener:a}=n(14);function l(t){if(!c(t))return;a(t,"load",(function(){r(t)}));const e=i(t);e&&(s(t,null),u(t,"onload"),s(t,e))}t.exports=function(t){for(let e=0;e<t.length;e++){const n=t[e],r=o(n,!0);for(let t=0;t<r.length;t++)l(r[t])}}},750:t=>{t.exports=function(t){t&&t.contentWindow}},832:(t,e,n)=>{const{Object:r,Function:o}=n(14),{isTagFramable:c}=n(648),{error:i,ERR_EXTENDING_FRAMABLES_BLOCKED:s}=n(312);t.exports=function(t){const e=r.getOwnPropertyDescriptor(t.CustomElementRegistry.prototype,"define");e.configurable=e.writable=!0;const n=e.value;var u;e.value=(u=n,function(t,e,n){let r=n;if(n){const e=n.extends;c(e+"")&&i(s,t,n)&&(r=void 0)}return o.prototype.call.call(u,this,t,e,r)}),r.defineProperty(t.CustomElementRegistry.prototype,"define",e)}},228:(t,e,n)=>{const r=n(851),o=n(750),{shadows:c,toArray:i,getFramesArray:s,getContentWindowOfFrame:u,getOwnerWindowOfNode:a}=n(648),{Object:l,getFrameElement:p}=n(14),{forEachOpened:f}=n(134);function d(t,e){let n=-1;for(;t[++n];){if(r(t[n],t,l))continue;if(p(t[n])===e)return t[n];const o=d(t[n],e);if(o)return o}for(let n=0;n<c.length;n++){const r=c[n];if(a(r)!==t)continue;const o=s(r,!1);for(let t=0;t<o.length;t++){const n=o[t],r=u(n);if(n===e)return r;const c=d(r,e);if(c)return c}}return null}function m(t,e){const n=d(t,e);return n&&function(t){top.SNOW_WINDOW(t)}(n),!!n}t.exports=function(t){t=i(t);for(let e=0;e<t.length;e++){const n=t[e];"object"==typeof n&&null!==n&&(o(n),m(top,n)||f(m,n))}}},328:(t,e,n)=>{const{getFramesArray:r}=n(648),{Array:o,stringToLowerCase:c,split:i,getAttribute:s,setAttribute:u,getChildElementCount:a,createElement:l,getInnerHTML:p,setInnerHTML:f,remove:d,Element:m}=n(14),{warn:g,WARN_DECLARATIVE_SHADOWS:y}=n(312),w=m.prototype.querySelectorAll;function O(t,e){let n="top."+(t?"SNOW_FRAME":"SNOW_WINDOW")+"(this);";return e&&(n="<script>"+n+"document.currentScript.remove();<\/script>"),n}function E(t){let e=s(t,"onload");return!!e&&(e=O(!0,!1)+e,u(t,"onload",e),!0)}function h(t){let e=s(t,"src")||"";const[n,r]=i(e,":");return"javascript"===c(n)&&(e="javascript:"+O(!1,!1)+r,u(t,"src",e),!0)}function v(t){let e=s(t,"srcdoc");if(e){e=O(!1,!0)+e;const n=new o(e);return D(n,!0),u(t,"srcdoc",n[0]),!0}return!1}function D(t,e){for(let c=0;c<t.length;c++){const i=l(document,"html");if(f(i,t[c]),!a(i))continue;let s=!1;if(e){const t=l(document,"script");t.textContent=O(!1,!1),i.insertBefore(t,i.firstChild),s=!0}const u=w.call(i,"template[shadowroot]");for(let e=0;e<u.length;e++)n=u[e],o=t[c],g(y,n,o),d(n),s=!0;const m=r(i,!1);for(let t=0;t<m.length;t++){const e=m[t];s=E(e)||s,s=h(e)||s,s=v(e)||s}s&&(t[c]=p(i))}var n,o}t.exports={handleHTML:D}},352:(t,e,n)=>{const r=n(228),o=n(716),c=n(832),i=n(583),s=n(278),u=n(459),a=n(58),{hookShadowDOM:l}=n(373),{Object:p,Array:f,push:d,addEventListener:m,getFrameElement:g}=n(14),{isMarked:y,mark:w}=n(111),{error:O,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:E,ERR_MARK_NEW_WINDOW_FAILED:h}=n(312);function v(t,e){const n=p.create(null);n.value=e,p.defineProperty(top,t,n)}function D(t){try{const e=!y(t);return e&&w(t),e}catch(e){O(h,t,e)}return D(t)}function _(t,e){if(D(t)){!function(t){!function(t){const e=g(t);m(e,"load",(function(){r(e)}))}(t),o(t),c(t),i(t),s(t),u(t,"load"),a(t),l(t)}(t);for(let e=0;e<b.length;e++)if(b[e](t))return}e&&e(t)}const b=new f;t.exports=function(t){"function"!=typeof t&&O(E,t)||(b.length||(v("SNOW_WINDOW",(function(t){_(t)})),v("SNOW_FRAME",(function(t){r(t)}))),d(b,t),_(top,t))}},58:(t,e,n)=>{const{protectShadows:r}=n(373),o=n(586),{getFramesArray:c,shadows:i}=n(648),{getParentElement:s,slice:u,Object:a,Function:l}=n(14),{handleHTML:p}=n(328),f=n(228),d={DocumentFragment:["replaceChildren","append","prepend"],Document:["replaceChildren","append","prepend","write","writeln"],Node:["appendChild","insertBefore","replaceChild"],Element:["innerHTML","outerHTML","insertAdjacentHTML","replaceWith","insertAdjacentElement","append","before","prepend","after","replaceChildren"],ShadowRoot:["innerHTML"],HTMLIFrameElement:["srcdoc"]};function m(t,e){return function(){const n=u(arguments),a=s(this)||this;!function(t){o(t),o(i),p(t,e)}(n);const d=l.prototype.apply.call(t,this,n);return function(t,e){const n=c(e,!1);f(n),f(t),r(!0)}(n,a),d}}t.exports=function(t){for(const e in d){const n=d[e];for(let r=0;r<n.length;r++){const o=n[r],c=a.getOwnPropertyDescriptor(t[e].prototype,o);if(!c)continue;const i=c.set?"set":"value";c[i]=m(c[i],"srcdoc"===o),c.configurable=!0,"value"===i&&(c.writable=!0),a.defineProperty(t[e].prototype,o,c)}}}},459:(t,e,n)=>{const r=n(228),{removeEventListener:o,addEventListener:c,slice:i,Map:s,Object:u}=n(14),a=new s;function l(t,e){return function(n,o,s){let u=o;return n===e&&(a.has(o)||a.set(o,(function(){r(this);const t=i(arguments);!function(t,e,n){e&&(e.handleEvent?e.handleEvent.apply(e,n):e.apply(t,n))}(this,o,t)})),u=a.get(o)),c(this||t,n,u,s)}}function p(t,e){return function(n,r,c){let i=r;return n===e&&(i=a.get(r),a.delete(r)),o(this||t,n,i,c)}}t.exports=function(t,e){u.defineProperty(t.EventTarget.prototype,"addEventListener",{configurable:!0,writable:!0,value:l(t,e)}),u.defineProperty(t.EventTarget.prototype,"removeEventListener",{configurable:!0,writable:!0,value:p(t,e)})}},312:(t,e,n)=>{const{console:r}=n(14);t.exports={warn:function(t,e,n){let o;switch(t){case 5:const t=e,c=n;o=!1,r.warn("SNOW:","removing html string representing a declarative shadow:",t,"\n",`"${c}"`,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/32#issuecomment-1239273328",".");break;case 3:const i=e,s=n;o=!0,r.warn("SNOW:",o?"":"NOT",'blocking open attempt to "javascript:" url:',i,"by window: ",s,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/44#issuecomment-1369687802",".");break;case 2:const u=e,a=n;o=!0,r.warn("SNOW:","blocking access to property:",`"${u}"`,"of opened window: ",a,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/2#issuecomment-1239264255",".")}return o},error:function(t,e,n){let o;switch(t){case 7:const t=e,c=n;o=!0,r.error("SNOW:",`calling "URL.createObjectURL()" on a "${t}" object is forbidden under snow protection:`,c,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/43#issuecomment-1434063891",".","\n");break;case 6:const i=e,s=n;o=!0,r.error("SNOW:",`"${i}"`,"extending attempt","of framable elements such as provided",s,"is blocked to prevent bypass",".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/56#issuecomment-1374899809",".","\n");break;case 1:const u=e,a=n;o=!0,r.error("SNOW:","failed to mark new window:",u,".","\n","if this prevents your application from running correctly, please visit/report at","https://github.com/LavaMoat/snow/issues/33#issuecomment-1239280063",".","\n","in order to maintain a bulletproof defense mechanism, failing to mark a new window typically causes an infinite loop",".","\n","error caught:","\n",a);break;case 4:const l=e;o=!0,r.error("SNOW:",'first argument must be of type "function", instead got:',l,".","\n","therefore, snow bailed and is not applied to the page until this is fixed.")}return o},ERR_MARK_NEW_WINDOW_FAILED:1,WARN_OPEN_API_LIMITED:2,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:3,ERR_PROVIDED_CB_IS_NOT_A_FUNCTION:4,WARN_DECLARATIVE_SHADOWS:5,ERR_EXTENDING_FRAMABLES_BLOCKED:6,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:7}},111:(t,e,n)=>{const{Map:r,Object:o,Array:c}=n(14),i=new c,s=new r;t.exports={isMarked:function(t){if(!s.has(t))return!1;const e=o.getOwnPropertyDescriptor(t,"SNOW_ID");if(!e||!o.hasOwnProperty.call(e,"value"))return!1;if("function"!=typeof e.value)return!1;const n=s.get(t);return e.value(i)===n},mark:function(t){const e=new c,n=o.create(null);n.value=t=>t===i&&e,o.defineProperty(t,"SNOW_ID",n),s.set(t,e)}}},14:t=>{t.exports=function(t){const e=function(t){const{EventTarget:e}=t;return function(t,n){const r=t.document.createElement("iframe");(t.document.head||t.document.documentElement).appendChild(r);const o=function(t){const{console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:l,DocumentFragment:p,Blob:f,ShadowRoot:d,Object:m,Reflect:g,Array:y,Element:w,HTMLElement:O,HTMLTemplateElement:E,HTMLIFrameElement:h,HTMLFrameElement:v,HTMLObjectElement:D}=t,_={console:n,Proxy:r,JSON:o,Attr:c,String:i,Function:s,Map:u,Node:a,Document:l,DocumentFragment:p,Blob:f,ShadowRoot:d,Object:m,Reflect:g,Array:y,Element:w,HTMLElement:O,HTMLTemplateElement:E,EventTarget:e,HTMLIFrameElement:h,HTMLFrameElement:v,HTMLObjectElement:D};return _.document={createElement:t.document.createElement},_}(r.contentWindow);return r.parentElement.removeChild(r),o}(t)}(t),{console:n,Proxy:r,Function:o,String:c,Map:i,Node:s,Document:u,DocumentFragment:a,Blob:l,ShadowRoot:p,Object:f,Reflect:d,Array:m,Element:g,HTMLElement:y,HTMLTemplateElement:w,EventTarget:O,HTMLIFrameElement:E,HTMLFrameElement:h,HTMLObjectElement:v}=e;return f.assign(e,{iframeContentWindow:f.getOwnPropertyDescriptor(E.prototype,"contentWindow").get,frameContentWindow:f.getOwnPropertyDescriptor(h.prototype,"contentWindow").get,objectContentWindow:f.getOwnPropertyDescriptor(v.prototype,"contentWindow").get,createElement:f.getOwnPropertyDescriptor(u.prototype,"createElement").value,slice:f.getOwnPropertyDescriptor(m.prototype,"slice").value,push:f.getOwnPropertyDescriptor(m.prototype,"push").value,split:f.getOwnPropertyDescriptor(c.prototype,"split").value,nodeType:f.getOwnPropertyDescriptor(s.prototype,"nodeType").get,tagName:f.getOwnPropertyDescriptor(g.prototype,"tagName").get,getInnerHTML:f.getOwnPropertyDescriptor(g.prototype,"innerHTML").get,setInnerHTML:f.getOwnPropertyDescriptor(g.prototype,"innerHTML").set,toString:f.getOwnPropertyDescriptor(f.prototype,"toString").value,getOnload:f.getOwnPropertyDescriptor(y.prototype,"onload").get,setOnload:f.getOwnPropertyDescriptor(y.prototype,"onload").set,getAttribute:f.getOwnPropertyDescriptor(g.prototype,"getAttribute").value,setAttribute:f.getOwnPropertyDescriptor(g.prototype,"setAttribute").value,removeAttribute:f.getOwnPropertyDescriptor(g.prototype,"removeAttribute").value,remove:f.getOwnPropertyDescriptor(g.prototype,"remove").value,addEventListener:f.getOwnPropertyDescriptor(O.prototype,"addEventListener").value,removeEventListener:f.getOwnPropertyDescriptor(O.prototype,"removeEventListener").value,getChildElementCount:f.getOwnPropertyDescriptor(g.prototype,"childElementCount").get,getFrameElement:f.getOwnPropertyDescriptor(t,"frameElement").get,getParentElement:f.getOwnPropertyDescriptor(s.prototype,"parentElement").get,getOwnerDocument:f.getOwnPropertyDescriptor(s.prototype,"ownerDocument").get,getDefaultView:f.getOwnPropertyDescriptor(u.prototype,"defaultView").get,getBlobFileType:f.getOwnPropertyDescriptor(l.prototype,"type").get}),{console:n,Proxy:r,Object:f,Reflect:d,Function:o,Node:s,Element:g,Document:u,DocumentFragment:a,Blob:l,ShadowRoot:p,Array:m,Map:i,getContentWindow:function(t,n){switch(n){case"IFRAME":return e.iframeContentWindow.call(t);case"FRAME":return e.frameContentWindow.call(t);case"OBJECT":return e.objectContentWindow.call(t);default:return null}},stringToLowerCase:function(t){return e.String.prototype.toLowerCase.call(t)},stringStartsWith:function(t,n){return e.String.prototype.startsWith.call(t,n)},parse:function(t,n){return e.JSON.parse(t,n)},stringify:function(t,n,r){return e.JSON.stringify(t,n,r)},slice:function(t,n,r){return e.slice.call(t,n,r)},push:function(t,n){return e.push.call(t,n)},split:function(t,n){return e.split.call(t,n)},nodeType:function(t){return e.nodeType.call(t)},tagName:function(t){return e.tagName.call(t)},toString:function(t){return e.toString.call(t)},getOnload:function(t){return e.getOnload.call(t)},setOnload:function(t,n){return e.setOnload.call(t,n)},remove:function(t){return e.remove.call(t)},removeAttribute:function(t,n){return e.removeAttribute.call(t,n)},getAttribute:function(t,n){return e.getAttribute.call(t,n)},setAttribute:function(t,n,r){return e.setAttribute.call(t,n,r)},addEventListener:function(t,n,r,o){return e.addEventListener.call(t,n,r,o)},removeEventListener:function(t,n,r,o){return e.removeEventListener.call(t,n,r,o)},createElement:function(t,n,r){return e.createElement.call(t,n,r)},getInnerHTML:function(t){return e.getInnerHTML.call(t)},setInnerHTML:function(t,n){return e.setInnerHTML.call(t,n)},getChildElementCount:function(t){return e.getChildElementCount.call(t)},getFrameElement:function(t){return e.Function.prototype.call.call(e.getFrameElement,t)},getParentElement:function(t){return e.getParentElement.call(t)},getOwnerDocument:function(t){return e.getOwnerDocument.call(t)},getDefaultView:function(t){return e.getDefaultView.call(t)},getBlobFileType:function(t){return e.getBlobFileType.call(t)}}}(top)},583:(t,e,n)=>{const{stringToLowerCase:r,stringStartsWith:o,slice:c,Function:i,Object:s}=n(14),{warn:u,WARN_OPEN_API_URL_ARG_JAVASCRIPT_SCHEME:a}=n(312),{proxy:l,getProxyByOpened:p}=n(134);function f(t){const e=s.getOwnPropertyDescriptor(t.MessageEvent.prototype,"source"),n=e.get;e.get=function(){const t=n.call(this);return p(t)||t},s.defineProperty(t.MessageEvent.prototype,"source",e)}function d(t,e,n){return n(t),function(){const n=c(arguments),s=n[0]+"",p=n[1],f=n[2];if(o(r(s),"javascript")&&u(a,s,t))return null;const d=i.prototype.call.call(e,this,s,p,f);return d?l(d):null}}t.exports=function(t){t.open=d(t,t.open,f),t.document.open=d(t,t.document.open,f)}},134:(t,e,n)=>{const{Object:r,Proxy:o,Reflect:c,Map:i}=n(14),{warn:s,WARN_OPEN_API_LIMITED:u}=n(312),a=new i;function l(t){return a.get(t)}t.exports={proxy:function(t){const e=new r(null);if(r.defineProperty(e,"closed",{get:function(){return t.closed}}),r.defineProperty(e,"close",{value:function(){return t.close()}}),r.defineProperty(e,"focus",{value:function(){return t.focus()}}),r.defineProperty(e,"postMessage",{value:function(e,n,r){return t.postMessage(e,n,r)}}),!a.has(t)){top.SNOW_WINDOW(t);const n=new o(e,{get:function(e,n){let r=c.get(e,n);return c.has(e,n)||c.has(t,n)&&(s(u,n,t)||(r=c.get(t,n))),r},set:function(){}});a.set(t,n)}return l(t)},getProxyByOpened:l,forEachOpened:function(t,e){for(const n of a.keys())t(n,e)}}},278:(t,e,n)=>{const{Object:r,slice:o,Function:c}=n(14),{proxy:i}=n(134);function s(t,e){const n=r.getOwnPropertyDescriptor(t[e].prototype,"window"),o=n.get;n.get=function(){return i(o.call(this))},r.defineProperty(t[e].prototype,"window",n)}t.exports=function(t){t?.documentPictureInPicture?.requestWindow&&(t.documentPictureInPicture.requestWindow=function(t,e,n){return n(t,"DocumentPictureInPictureEvent"),n(t,"DocumentPictureInPicture"),async function(){const t=o(arguments),n=await c.prototype.apply.call(e,this,t);return n?i(n):null}}(t,t.documentPictureInPicture.requestWindow,s))}},373:(t,e,n)=>{const r=n(228),{getFramesArray:o,shadows:c}=n(648),{Object:i,Function:s}=n(14);function u(t){for(let e=0;e<c.length;e++){const n=c[e];if(t&&!n.isConnected)continue;const i=o(n,!1);r(i)}}t.exports={hookShadowDOM:function(t){const e=i.getOwnPropertyDescriptor(t.Element.prototype,"attachShadow");e.configurable=e.writable=!0;const n=e.value;var r;e.value=(r=n,function(t){const e=s.prototype.call.call(r,this,t);return c.push(e),u(!0),e}),i.defineProperty(t.Element.prototype,"attachShadow",e)},protectShadows:u}},716:(t,e,n)=>{const{Object:r,Array:o,getBlobFileType:c}=n(14),{error:i,ERR_BLOB_FILE_URL_OBJECT_FORBIDDEN:s}=n(312),u="KIND",a="TYPE",l="Blob",p="File",f="MediaSource",d=URL.createObjectURL(new Blob(["BLOCKED BY SNOW"],{type:"text/plain"})),m=new o,g=new o("text/javascript","text/css");function y(t,e){return function(n,o){const i=new t(n,o);return r.defineProperty(i,u,{value:e}),e!==l&&e!==p||r.defineProperty(i,a,{value:c(i)}),m.push(i),i}}t.exports=function(t){(function(t){const e=t.URL.createObjectURL;r.defineProperty(t.URL,"createObjectURL",{value:function(t){return function(t){const e=m.indexOf(t);return e>-1?(m.splice(e,1),!1):i(s,"unknown",t)}(t)||function(t){const e=t[u];if(e!==l&&e!==p)return!1;const n=t[a];return!g.includes(n)&&i(s,e,t)}(t)?d:e(t)}})})(t),function(t){const e=t[l],n=y(e,l);function o(t,e){return n(t,e)}r.setPrototypeOf(e.prototype,o.prototype),t[l]=o}(t),function(t){const e=t[p],n=y(e,p);function o(t,e){return n(t,e)}r.setPrototypeOf(e.prototype,o.prototype),t[p]=o}(t),function(t){const e=t[f],n=y(e,f);function o(t,e){return n(t,e)}r.setPrototypeOf(o,e),t[f]=o}(t)}},648:(t,e,n)=>{const{tagName:r,nodeType:o,slice:c,Array:i,parse:s,stringify:u,Node:a,Document:l,DocumentFragment:p,Element:f,ShadowRoot:d,getContentWindow:m,getDefaultView:g,getOwnerDocument:y,stringToLowerCase:w}=n(14),O=new i;function E(t){return O.includes(t)}function h(t){const e=w(t);return"iframe"===e||"frame"===e||"object"===e||"embed"===e}function v(t){if(!t||"object"!=typeof t)return null;if(o(t)!==f.prototype.ELEMENT_NODE)return null;if(E(t))return null;const e=r(t);return h(e)?e:null}function D(t){return i.isArray(t)||(t=new i(t)),t}function _(t,e){let n=!1;for(let r=0;r<e.length;r++)t.includes(e[r])||(t.push(e[r]),n=!0);return n}t.exports={toArray:D,isTagFramable:h,getOwnerWindowOfNode:function(t){return g(y(t))},getContentWindowOfFrame:function(t){return m(t,v(t))},getFramesArray:function(t,e){const n=new i;if(null===t||"object"!=typeof t)return n;if("string"==typeof s(u(r=t,((t,e)=>t||r!==e?"":e)))||!function(t){if(E(t))return!0;const e=o(t);return e===f.prototype.ELEMENT_NODE||e===f.prototype.DOCUMENT_FRAGMENT_NODE||e===f.prototype.DOCUMENT_NODE}(t))return n;var r;const m=function(t){if(E(t))return d;switch(o(t)){case a.prototype.DOCUMENT_NODE:return l;case a.prototype.DOCUMENT_FRAGMENT_NODE:return p;default:return f}}(t).prototype.querySelectorAll.call(t,"iframe,frame,object,embed");return _(n,c(m)),e&&_(n,D(t)),n},getFrameTag:v,shadows:O}},626:t=>{t.exports={SRC_IS_NOT_A_WINDOW:'provided argument "src" must be a proper window of instance Window',DST_IS_NOT_A_WINDOW:'provided argument "dst" must be a proper window of instance Window',SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:'provided argument "src" must be a window in the same origin as the current context window'}},851:(t,e,n)=>{const{DST_IS_NOT_A_WINDOW:r,SRC_IS_NOT_A_WINDOW:o,SRC_IS_NOT_SAME_ORIGIN_AS_WINDOW:c}=n(626);function i(t,e){const n=e(t);return n===n.window}function s(t,e,n){return null===n.getPrototypeOf.call(e,t)}t.exports=function(t,e=window,n=window.Object){if(!i(e,n))throw new Error(o);if(!i(t,n))throw new Error(r);if(s(window,e,n))throw new Error(c);return s(t,e,n)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t,e=n(352),r=n.n(e);t=top,Object.defineProperty(t,"SNOW",{value:r()})})()})();}())