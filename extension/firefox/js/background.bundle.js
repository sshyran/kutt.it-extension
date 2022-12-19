(()=>{var e={7757:(e,r,t)=>{e.exports=t(5666)},9669:(e,r,t)=>{e.exports=t(1609)},5448:(e,r,t)=>{"use strict";var n=t(4867),s=t(6026),o=t(4372),a=t(5327),i=t(4097),c=t(4109),u=t(7985),l=t(5061);e.exports=function(e){return new Promise((function(r,t){var g=e.data,m=e.headers;n.isFormData(g)&&delete m["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(p+":"+h)}var d=i(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),a(d,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};s(r,t,o),f=null}},f.onabort=function(){f&&(t(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){t(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var r="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(r=e.timeoutErrorMessage),t(l(r,e,"ECONNABORTED",f)),f=null},n.isStandardBrowserEnv()){var A=(e.withCredentials||u(d))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;A&&(m[e.xsrfHeaderName]=A)}if("setRequestHeader"in f&&n.forEach(m,(function(e,r){void 0===g&&"content-type"===r.toLowerCase()?delete m[r]:f.setRequestHeader(r,e)})),n.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(r){if("json"!==e.responseType)throw r}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),t(e),f=null)})),g||(g=null),f.send(g)}))}},1609:(e,r,t)=>{"use strict";var n=t(4867),s=t(1849),o=t(321),a=t(7185);function i(e){var r=new o(e),t=s(o.prototype.request,r);return n.extend(t,o.prototype,r),n.extend(t,r),t}var c=i(t(5655));c.Axios=o,c.create=function(e){return i(a(c.defaults,e))},c.Cancel=t(5263),c.CancelToken=t(4972),c.isCancel=t(6502),c.all=function(e){return Promise.all(e)},c.spread=t(8713),c.isAxiosError=t(6268),e.exports=c,e.exports.default=c},5263:e=>{"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},4972:(e,r,t)=>{"use strict";var n=t(5263);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var t=this;e((function(e){t.reason||(t.reason=new n(e),r(t.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(r){e=r})),cancel:e}},e.exports=s},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,r,t)=>{"use strict";var n=t(4867),s=t(5327),o=t(782),a=t(3572),i=t(7185);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){r.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){r.push(e.fulfilled,e.rejected)}));r.length;)t=t.then(r.shift(),r.shift());return t},c.prototype.getUri=function(e){return e=i(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(r,t){return this.request(i(t||{},{method:e,url:r,data:(t||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(r,t,n){return this.request(i(n||{},{method:e,url:r,data:t}))}})),e.exports=c},782:(e,r,t)=>{"use strict";var n=t(4867);function s(){this.handlers=[]}s.prototype.use=function(e,r){return this.handlers.push({fulfilled:e,rejected:r}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(r){null!==r&&e(r)}))},e.exports=s},4097:(e,r,t)=>{"use strict";var n=t(1793),s=t(7303);e.exports=function(e,r){return e&&!n(r)?s(e,r):r}},5061:(e,r,t)=>{"use strict";var n=t(481);e.exports=function(e,r,t,s,o){var a=new Error(e);return n(a,r,t,s,o)}},3572:(e,r,t)=>{"use strict";var n=t(4867),s=t(8527),o=t(6502),a=t(5655);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(r){delete e.headers[r]})),(e.adapter||a.adapter)(e).then((function(r){return i(e),r.data=s(r.data,r.headers,e.transformResponse),r}),(function(r){return o(r)||(i(e),r&&r.response&&(r.response.data=s(r.response.data,r.response.headers,e.transformResponse))),Promise.reject(r)}))}},481:e=>{"use strict";e.exports=function(e,r,t,n,s){return e.config=r,t&&(e.code=t),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7185:(e,r,t)=>{"use strict";var n=t(4867);e.exports=function(e,r){r=r||{};var t={},s=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,r){return n.isPlainObject(e)&&n.isPlainObject(r)?n.merge(e,r):n.isPlainObject(r)?n.merge({},r):n.isArray(r)?r.slice():r}function u(s){n.isUndefined(r[s])?n.isUndefined(e[s])||(t[s]=c(void 0,e[s])):t[s]=c(e[s],r[s])}n.forEach(s,(function(e){n.isUndefined(r[e])||(t[e]=c(void 0,r[e]))})),n.forEach(o,u),n.forEach(a,(function(s){n.isUndefined(r[s])?n.isUndefined(e[s])||(t[s]=c(void 0,e[s])):t[s]=c(void 0,r[s])})),n.forEach(i,(function(n){n in r?t[n]=c(e[n],r[n]):n in e&&(t[n]=c(void 0,e[n]))}));var l=s.concat(o).concat(a).concat(i),g=Object.keys(e).concat(Object.keys(r)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(g,u),t}},6026:(e,r,t)=>{"use strict";var n=t(5061);e.exports=function(e,r,t){var s=t.config.validateStatus;t.status&&s&&!s(t.status)?r(n("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},8527:(e,r,t)=>{"use strict";var n=t(4867);e.exports=function(e,r,t){return n.forEach(t,(function(t){e=t(e,r)})),e}},5655:(e,r,t)=>{"use strict";var n=t(4867),s=t(6016),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(i=t(5448)),i),transformRequest:[function(e,r){return s(r,"Accept"),s(r,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(r,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(o)})),e.exports=c},1849:e=>{"use strict";e.exports=function(e,r){return function(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];return e.apply(r,t)}}},5327:(e,r,t)=>{"use strict";var n=t(4867);function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,r,t){if(!r)return e;var o;if(t)o=t(r);else if(n.isURLSearchParams(r))o=r.toString();else{var a=[];n.forEach(r,(function(e,r){null!=e&&(n.isArray(e)?r+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(s(r)+"="+s(e))})))})),o=a.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7303:e=>{"use strict";e.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}},4372:(e,r,t)=>{"use strict";var n=t(4867);e.exports=n.isStandardBrowserEnv()?{write:function(e,r,t,s,o,a){var i=[];i.push(e+"="+encodeURIComponent(r)),n.isNumber(t)&&i.push("expires="+new Date(t).toGMTString()),n.isString(s)&&i.push("path="+s),n.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},7985:(e,r,t)=>{"use strict";var n=t(4867);e.exports=n.isStandardBrowserEnv()?function(){var e,r=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function s(e){var n=e;return r&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=s(window.location.href),function(r){var t=n.isString(r)?s(r):r;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},6016:(e,r,t)=>{"use strict";var n=t(4867);e.exports=function(e,r){n.forEach(e,(function(t,n){n!==r&&n.toUpperCase()===r.toUpperCase()&&(e[r]=t,delete e[n])}))}},4109:(e,r,t)=>{"use strict";var n=t(4867),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var r,t,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),r=n.trim(e.substr(0,o)).toLowerCase(),t=n.trim(e.substr(o+1)),r){if(a[r]&&s.indexOf(r)>=0)return;a[r]="set-cookie"===r?(a[r]?a[r]:[]).concat([t]):a[r]?a[r]+", "+t:t}})),a):a}},8713:e=>{"use strict";e.exports=function(e){return function(r){return e.apply(null,r)}}},4867:(e,r,t)=>{"use strict";var n=t(1849),s=Object.prototype.toString;function o(e){return"[object Array]"===s.call(e)}function a(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==s.call(e))return!1;var r=Object.getPrototypeOf(e);return null===r||r===Object.prototype}function u(e){return"[object Function]"===s.call(e)}function l(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var t=0,n=e.length;t<n;t++)r.call(null,e[t],t,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.call(null,e[s],s,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var r={};function t(t,n){c(r[n])&&c(t)?r[n]=e(r[n],t):c(t)?r[n]=e({},t):o(t)?r[n]=t.slice():r[n]=t}for(var n=0,s=arguments.length;n<s;n++)l(arguments[n],t);return r},extend:function(e,r,t){return l(r,(function(r,s){e[s]=t&&"function"==typeof r?n(r,t):r})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},3279:(e,r,t)=>{"use strict";t.d(r,{Cl:()=>s,H6:()=>c,aq:()=>n,ng:()=>o,x8:()=>a,zr:()=>i});const n="api.checkApiKey",s=8e3,o="api.shortenUrl",a=2e4,i="api.fetchUrlsHistory",c=15},5666:e=>{var r=function(e){"use strict";var r,t=Object.prototype,n=t.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",i=s.toStringTag||"@@toStringTag";function c(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{c({},"")}catch(e){c=function(e,r,t){return e[r]=t}}function u(e,r,t,n){var s=r&&r.prototype instanceof d?r:d,o=Object.create(s.prototype),a=new C(n||[]);return o._invoke=function(e,r,t){var n=g;return function(s,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===s)throw o;return T()}for(t.method=s,t.arg=o;;){var a=t.delegate;if(a){var i=O(a,t);if(i){if(i===h)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(n===g)throw n=p,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n=f;var c=l(e,r,t);if("normal"===c.type){if(n=t.done?p:m,c.arg===h)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(n=p,t.method="throw",t.arg=c.arg)}}}(e,t,a),o}function l(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var g="suspendedStart",m="suspendedYield",f="executing",p="completed",h={};function d(){}function A(){}function x(){}var y={};y[o]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(S([])));b&&b!==t&&n.call(b,o)&&(y=b);var w=x.prototype=d.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(r){c(e,r,(function(e){return this._invoke(r,e)}))}))}function k(e,r){function t(s,o,a,i){var c=l(e[s],e,o);if("throw"!==c.type){var u=c.arg,g=u.value;return g&&"object"==typeof g&&n.call(g,"__await")?r.resolve(g.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):r.resolve(g).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}var s;this._invoke=function(e,n){function o(){return new r((function(r,s){t(e,n,r,s)}))}return s=s?s.then(o,o):o()}}function O(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var s=l(n,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,h;var o=s.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function P(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,a=function t(){for(;++s<e.length;)if(n.call(e,s))return t.value=e[s],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return A.prototype=w.constructor=x,x.constructor=A,A.displayName=c(x,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===A||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(k.prototype),k.prototype[a]=function(){return this},e.AsyncIterator=k,e.async=function(r,t,n,s,o){void 0===o&&(o=Promise);var a=new k(u(r,t,n,s),o);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),c(w,i,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var r=[];for(var t in e)r.push(t);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function s(n,s){return i.type="throw",i.arg=e,t.next=n,s&&(t.method="next",t.arg=r),!!s}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return s("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return s(a.catchLoc,!0);if(this.prev<a.finallyLoc)return s(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return s(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return s(a.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),h},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),P(t),h}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var s=n.arg;P(t)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},9416:(e,r,t)=>{"use strict";r.browser=t(3337)},3337:function(e,r){var t,n,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[e],void 0===(s="function"==typeof(t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const o=e=>e&&"object"==typeof e&&"function"==typeof e.then,a=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},i=e=>1==e?"argument":"arguments",c=(e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${i(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${i(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,a({resolve:s,reject:o},r))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,o),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,a({resolve:s,reject:o},r))}))},u=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const g=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,o,a){if(o in n)return n[o];if(!(o in e))return;let i=e[o];if("function"==typeof i)if("function"==typeof r[o])i=u(e,e[o],r[o]);else if(l(t,o)){let r=c(o,t[o]);i=u(e,e[o],r)}else i=i.bind(e);else if("object"==typeof i&&null!==i&&(l(r,o)||l(t,o)))i=g(i,r[o],t[o]);else{if(!l(t,"*"))return Object.defineProperty(n,o,{configurable:!0,enumerable:!0,get:()=>e[o],set(r){e[o]=r}}),i;i=g(i,r[o],t["*"])}return n[o]=i,i},set:(r,t,s,o)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},o=Object.create(e);return new Proxy(o,s)},m=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}),f=new s((e=>"function"!=typeof e?e:function(r){const t=g(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}));let p=!1;const h=new s((e=>"function"!=typeof e?e:function(r,n,s){let a,i,c=!1,u=new Promise((e=>{a=function(r){p||(console.warn(t,(new Error).stack),p=!0),c=!0,e(r)}}));try{i=e(r,n,a)}catch(e){i=Promise.reject(e)}const l=!0!==i&&o(i);if(!0!==i&&!l&&!c)return!1;const g=e=>{e.then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return g(l?i:u),!0})),d=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},A=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${i(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${i(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=d.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},x={devtools:{network:{onRequestFinished:m(f)}},runtime:{onMessage:m(h),onMessageExternal:m(h),sendMessage:A.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:A.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},y={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":y},services:{"*":y},websites:{"*":y}},g(e,x,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?t.apply(r,n):t)||(e.exports=s)}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(7757),r=t.n(e),n=t(9416),s=t(9669),o=t.n(s),a=t(3279);const i=["apikey"];function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function m(e,r,t,n,s,o,a){try{var i=e[o](a),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,s)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var o=e.apply(r,t);function a(e){m(o,n,s,a,i,"next",e)}function i(e){m(o,n,s,a,i,"throw",e)}a(void 0)}))}}
/**
 *  kutt-extension
 *
 *  @author   abhijithvijayan <abhijithvijayan.in>
 *  @license  MIT License
 */let p,h;function d(){return(d=f(r().mark((function e(t){var n,s,c,l,m,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apiBody,s=t.hostUrl,e.prev=1,c=n.apikey,l=g(n,i),e.next=5,o()({method:"POST",timeout:a.x8,url:`${s}/api/v2/links`,headers:{"X-API-Key":c},data:u({},l)});case 5:return m=e.sent,f=m.data,e.abrupt("return",{error:!1,data:f});case 10:if(e.prev=10,e.t0=e.catch(1),!e.t0.response){e.next=19;break}if(401!==e.t0.response.status){e.next=15;break}return e.abrupt("return",{error:!0,message:"Error: Invalid API Key"});case 15:if(400!==e.t0.response.status||!Object.prototype.hasOwnProperty.call(e.t0.response.data,"error")){e.next=17;break}return e.abrupt("return",{error:!0,message:`Error: ${e.t0.response.data.error}`});case 17:if(404!==e.t0.response.status){e.next=19;break}return e.abrupt("return",{error:!0,message:"Error: This extension now uses API v2, please update your kutt.it instance."});case 19:if("ECONNABORTED"!==e.t0.code){e.next=21;break}return e.abrupt("return",{error:!0,message:"Error: Timed out"});case 21:return e.abrupt("return",{error:!0,message:"Error: Something went wrong"});case 22:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function A(e){let r=e.apikey,t=e.hostUrl;return o()({method:"GET",url:`${t}/api/v2/users`,timeout:a.Cl,headers:{"X-API-Key":r}})}function x(){return(x=f(r().mark((function e(t){var n,s,o,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apikey,s=t.hostUrl,e.prev=1,e.next=4,A({apikey:n,hostUrl:s});case 4:return o=e.sent,a=o.data,e.abrupt("return",{error:!1,data:a});case 9:if(e.prev=9,e.t0=e.catch(1),!e.t0.response){e.next=15;break}if(401!==e.t0.response.status){e.next=14;break}return e.abrupt("return",{error:!0,message:"Error: Invalid API Key"});case 14:return e.abrupt("return",{error:!0,message:"Error: Something went wrong."});case 15:if("ECONNABORTED"!==e.t0.code){e.next=17;break}return e.abrupt("return",{error:!0,message:"Error: Timed out"});case 17:return e.abrupt("return",{error:!0,message:"Error: Requesting to server failed."});case 18:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function y(){return(y=f(r().mark((function e(t){var n,s,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apikey,s=t.hostUrl,e.prev=1,e.next=4,o()({method:"GET",timeout:a.x8,url:`${s}/api/v2/links`,params:{limit:a.H6},headers:{"X-API-Key":n}});case 4:return i=e.sent,c=i.data,e.abrupt("return",{error:!1,data:c});case 9:if(e.prev=9,e.t0=e.catch(1),!e.t0.response){e.next=15;break}if(401!==e.t0.response.status){e.next=14;break}return e.abrupt("return",{error:!0,message:"Error: Invalid API Key"});case 14:return e.abrupt("return",{error:!0,message:"Error: Something went wrong."});case 15:if("ECONNABORTED"!==e.t0.code){e.next=17;break}return e.abrupt("return",{error:!0,message:"Error: Timed out"});case 17:return e.abrupt("return",{error:!0,message:"Error: Requesting to server failed."});case 18:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(e){e.hostDomain="kutt.it",e.hostUrl="https://kutt.it"}(p||(p={})),function(e){e.chrome="https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd/reviews",e.firefox="https://addons.mozilla.org/en-US/firefox/addon/kutt/reviews/"}(h||(h={})),n.browser.runtime.onMessage.addListener(((e,r)=>{switch(e.action){case a.aq:return function(e){return x.apply(this,arguments)}(e.params);case a.ng:return function(e){return d.apply(this,arguments)}(e.params);case a.zr:return function(e){return y.apply(this,arguments)}(e.params)}}))})()})();