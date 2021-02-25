try{self["workbox:core:6.0.2"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),n=e=>e||a(s.precache),r=e=>e||a(s.runtime);function i(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.0.2"]&&_()}catch(e){}function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class h{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let l;async function u(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=s?s(r):r,o=function(){if(void 0===l){const e=new Response("");if("body"in e)try{new Response(e.body),l=!0}catch(e){l=!1}l=!1}return l}()?n.body:await n.blob();return new Response(o,i)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class f{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const p=new Set;try{self["workbox:strategies:6.0.2"]&&_()}catch(e){}function w(e){return"string"==typeof e?new Request(e):e}class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}fetch(e){return this.waitUntil((async()=>{const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}})())}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}cacheMatch(e){return this.waitUntil((async()=>{const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s})())}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise(e=>setTimeout(e,n)));const r=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp("^"+location.origin),""))});var i;const o=await this._ensureResponseSafeToCache(s);if(!o)return;const{cacheName:c,matchOptions:h}=this._strategy,l=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===d(t.url,s))return e.match(t,a)}(l,r.clone(),["__WB_REVISION__"],h):null;try{await l.put(r,u?o.clone():o)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:f,newResponse:o.clone(),request:r,event:this.event})}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=w(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}const g={cacheWillUpdate:async({response:e})=>e.redirected?await u(e):e};class m extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new y(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,s,a){await e.runCallbacks("handlerWillStart",{event:a,request:s});let n=void 0;try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=n(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(g)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return a=await s.fetch(e),a}async _handleInstall(e,s){const a=await s.fetchAndCachePut(e);let n=Boolean(a);if(a&&a.status>=400&&!this._usesCustomCacheableResponseLogic()&&(n=!1),!n)throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_usesCustomCacheableResponseLogic(){return this.plugins.some(e=>e.cacheWillUpdate&&e!==g)}}class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:n(e),plugins:[...t,new h({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return i(e,async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return i(e,async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params={cacheKey:s,...t.params},this.strategy.handle(t))}}let v;const C=()=>(v||(v=new R),v);try{self["workbox:routing:6.0.2"]&&_()}catch(e){}const U=e=>e&&"object"==typeof e?e:{handle:e};class L{constructor(e,t,s="GET"){this.handler=U(t),this.match=e,this.method=s}}class b extends L{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class q{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:s,request:e,event:t,params:n})}catch(e){c=Promise.reject(e)}return c instanceof Promise&&this._catchHandler&&(c=c.catch(a=>this._catchHandler.handle({url:s,request:e,event:t}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this._routes.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(s,1)}}let k;class T extends L{constructor(e,t){super(({request:s})=>{const a=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(e);if(t)return{cacheKey:t}}},e.strategy)}}function K(e){const s=C();!function(e,s,a){let n;if("string"==typeof e){const t=new URL(e,location.href);n=new L(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)n=new b(e,s,a);else if("function"==typeof e)n=new L(e,s,a);else{if(!(e instanceof L))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}(k||(k=new q,k.addFetchListener(),k.addCacheListener()),k).registerRoute(n)}(new T(s,e))}self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()});try{(function(e){C().precache(e)})([{"revision":"70e87a6d28adfae9e62930e903c422f8","url":"styles/global.css"},{"revision":"9b5fdf6470327b54ede3294574fd3596","url":"assets/100.png"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/1024.png"},{"revision":"b259b43d48bf427fbad7dbc41fb160df","url":"assets/114.png"},{"revision":"496c21878ad5844e80eca6822ed38345","url":"assets/120.png"},{"revision":"0b6bc0a3b34d99067a12965279cd6ed0","url":"assets/128.png"},{"revision":"cb1e73a28785143ce902305b0fcef565","url":"assets/144.png"},{"revision":"b55d05e6ba2d67dadd571ceab23f00b7","url":"assets/152.png"},{"revision":"a725163b80def9fbc3cce5a50f26661a","url":"assets/16.png"},{"revision":"f16e9d7ede2fe37715e7bb4b19554cc2","url":"assets/167.png"},{"revision":"4cb5b93480008876e534f23c7f56f29b","url":"assets/172.png"},{"revision":"6b007105000e3e37ea4477d6bba81311","url":"assets/180.png"},{"revision":"854c4b4d4eec5c95aadb934e678039e6","url":"assets/196.png"},{"revision":"cbb38e0231dbea25efab0615f70823b1","url":"assets/20.png"},{"revision":"a32d392721b980085332d93d5949fe1d","url":"assets/216.png"},{"revision":"06eae8496975d3bdb4d9f61a3691128d","url":"assets/256.png"},{"revision":"c4254f7b571aa554d84f5aa2333af196","url":"assets/29.png"},{"revision":"eda5ca38e8296be8759db76d0bf55399","url":"assets/32.png"},{"revision":"3d6b4067c9ad08d33da2694dae072f2a","url":"assets/40.png"},{"revision":"16719961c9a4baf63e86f9e9720618a6","url":"assets/48.png"},{"revision":"aba49a04af020e0b23153bc099c936c6","url":"assets/50.png"},{"revision":"2bd23ef68e0aabb4a5c8ed7bac23b3f7","url":"assets/512.png"},{"revision":"04d748c9e5250620217e69b072506e33","url":"assets/55.png"},{"revision":"c7e6d8419c8e7e4b002577c79600b7bd","url":"assets/57.png"},{"revision":"05eefb517b2633b50493eb9b7344db39","url":"assets/58.png"},{"revision":"2aaa18e07735148aaa9508c1a3c71c3b","url":"assets/60.png"},{"revision":"ea2256b1e062b358c08e463ae3328ee7","url":"assets/64.png"},{"revision":"8d3dd8ac5cbe733bbac5e7f3e62285a4","url":"assets/72.png"},{"revision":"d454a6ca0e5d22fcb2a493bce24a6294","url":"assets/76.png"},{"revision":"24c02ad83eeea957456dcc15b5794a6b","url":"assets/80.png"},{"revision":"d4ddbe5abe8329d37f821bb60dcede2e","url":"assets/87.png"},{"revision":"d5414ecb460067c7de64193598053db6","url":"assets/88.png"},{"revision":"71f2736848067e75fadcf83729207f58","url":"assets/android/mipmap-hdpi/ic_launcher.png"},{"revision":"eced4fdf1bdf37a4ece80d94d582e672","url":"assets/android/mipmap-mdpi/ic_launcher.png"},{"revision":"bfff9c90c5e231892ea3f807e95d7d0b","url":"assets/android/mipmap-xhdpi/ic_launcher.png"},{"revision":"cc9dbcdff7b3e16ab27371c4206c968c","url":"assets/android/mipmap-xxhdpi/ic_launcher.png"},{"revision":"7142f48e15ec022067c9ef61488dc6e6","url":"assets/android/mipmap-xxxhdpi/ic_launcher.png"},{"revision":"9b5fdf6470327b54ede3294574fd3596","url":"assets/AppIcon.appiconset/100.png"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/AppIcon.appiconset/1024.png"},{"revision":"b259b43d48bf427fbad7dbc41fb160df","url":"assets/AppIcon.appiconset/114.png"},{"revision":"496c21878ad5844e80eca6822ed38345","url":"assets/AppIcon.appiconset/120.png"},{"revision":"0b6bc0a3b34d99067a12965279cd6ed0","url":"assets/AppIcon.appiconset/128.png"},{"revision":"cb1e73a28785143ce902305b0fcef565","url":"assets/AppIcon.appiconset/144.png"},{"revision":"b55d05e6ba2d67dadd571ceab23f00b7","url":"assets/AppIcon.appiconset/152.png"},{"revision":"a725163b80def9fbc3cce5a50f26661a","url":"assets/AppIcon.appiconset/16.png"},{"revision":"f16e9d7ede2fe37715e7bb4b19554cc2","url":"assets/AppIcon.appiconset/167.png"},{"revision":"4cb5b93480008876e534f23c7f56f29b","url":"assets/AppIcon.appiconset/172.png"},{"revision":"6b007105000e3e37ea4477d6bba81311","url":"assets/AppIcon.appiconset/180.png"},{"revision":"854c4b4d4eec5c95aadb934e678039e6","url":"assets/AppIcon.appiconset/196.png"},{"revision":"cbb38e0231dbea25efab0615f70823b1","url":"assets/AppIcon.appiconset/20.png"},{"revision":"a32d392721b980085332d93d5949fe1d","url":"assets/AppIcon.appiconset/216.png"},{"revision":"06eae8496975d3bdb4d9f61a3691128d","url":"assets/AppIcon.appiconset/256.png"},{"revision":"c4254f7b571aa554d84f5aa2333af196","url":"assets/AppIcon.appiconset/29.png"},{"revision":"eda5ca38e8296be8759db76d0bf55399","url":"assets/AppIcon.appiconset/32.png"},{"revision":"3d6b4067c9ad08d33da2694dae072f2a","url":"assets/AppIcon.appiconset/40.png"},{"revision":"16719961c9a4baf63e86f9e9720618a6","url":"assets/AppIcon.appiconset/48.png"},{"revision":"aba49a04af020e0b23153bc099c936c6","url":"assets/AppIcon.appiconset/50.png"},{"revision":"2bd23ef68e0aabb4a5c8ed7bac23b3f7","url":"assets/AppIcon.appiconset/512.png"},{"revision":"04d748c9e5250620217e69b072506e33","url":"assets/AppIcon.appiconset/55.png"},{"revision":"c7e6d8419c8e7e4b002577c79600b7bd","url":"assets/AppIcon.appiconset/57.png"},{"revision":"05eefb517b2633b50493eb9b7344db39","url":"assets/AppIcon.appiconset/58.png"},{"revision":"2aaa18e07735148aaa9508c1a3c71c3b","url":"assets/AppIcon.appiconset/60.png"},{"revision":"ea2256b1e062b358c08e463ae3328ee7","url":"assets/AppIcon.appiconset/64.png"},{"revision":"8d3dd8ac5cbe733bbac5e7f3e62285a4","url":"assets/AppIcon.appiconset/72.png"},{"revision":"d454a6ca0e5d22fcb2a493bce24a6294","url":"assets/AppIcon.appiconset/76.png"},{"revision":"24c02ad83eeea957456dcc15b5794a6b","url":"assets/AppIcon.appiconset/80.png"},{"revision":"d4ddbe5abe8329d37f821bb60dcede2e","url":"assets/AppIcon.appiconset/87.png"},{"revision":"d5414ecb460067c7de64193598053db6","url":"assets/AppIcon.appiconset/88.png"},{"revision":"b0acb7355194b055decf0c9d45619bc7","url":"assets/AppIcon.appiconset/Contents.json"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/appstore.png"},{"revision":"9b5fdf6470327b54ede3294574fd3596","url":"assets/Assets.xcassets/AppIcon.appiconset/100.png"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/Assets.xcassets/AppIcon.appiconset/1024.png"},{"revision":"b259b43d48bf427fbad7dbc41fb160df","url":"assets/Assets.xcassets/AppIcon.appiconset/114.png"},{"revision":"496c21878ad5844e80eca6822ed38345","url":"assets/Assets.xcassets/AppIcon.appiconset/120.png"},{"revision":"0b6bc0a3b34d99067a12965279cd6ed0","url":"assets/Assets.xcassets/AppIcon.appiconset/128.png"},{"revision":"cb1e73a28785143ce902305b0fcef565","url":"assets/Assets.xcassets/AppIcon.appiconset/144.png"},{"revision":"b55d05e6ba2d67dadd571ceab23f00b7","url":"assets/Assets.xcassets/AppIcon.appiconset/152.png"},{"revision":"a725163b80def9fbc3cce5a50f26661a","url":"assets/Assets.xcassets/AppIcon.appiconset/16.png"},{"revision":"f16e9d7ede2fe37715e7bb4b19554cc2","url":"assets/Assets.xcassets/AppIcon.appiconset/167.png"},{"revision":"4cb5b93480008876e534f23c7f56f29b","url":"assets/Assets.xcassets/AppIcon.appiconset/172.png"},{"revision":"6b007105000e3e37ea4477d6bba81311","url":"assets/Assets.xcassets/AppIcon.appiconset/180.png"},{"revision":"854c4b4d4eec5c95aadb934e678039e6","url":"assets/Assets.xcassets/AppIcon.appiconset/196.png"},{"revision":"cbb38e0231dbea25efab0615f70823b1","url":"assets/Assets.xcassets/AppIcon.appiconset/20.png"},{"revision":"a32d392721b980085332d93d5949fe1d","url":"assets/Assets.xcassets/AppIcon.appiconset/216.png"},{"revision":"06eae8496975d3bdb4d9f61a3691128d","url":"assets/Assets.xcassets/AppIcon.appiconset/256.png"},{"revision":"c4254f7b571aa554d84f5aa2333af196","url":"assets/Assets.xcassets/AppIcon.appiconset/29.png"},{"revision":"eda5ca38e8296be8759db76d0bf55399","url":"assets/Assets.xcassets/AppIcon.appiconset/32.png"},{"revision":"3d6b4067c9ad08d33da2694dae072f2a","url":"assets/Assets.xcassets/AppIcon.appiconset/40.png"},{"revision":"16719961c9a4baf63e86f9e9720618a6","url":"assets/Assets.xcassets/AppIcon.appiconset/48.png"},{"revision":"aba49a04af020e0b23153bc099c936c6","url":"assets/Assets.xcassets/AppIcon.appiconset/50.png"},{"revision":"2bd23ef68e0aabb4a5c8ed7bac23b3f7","url":"assets/Assets.xcassets/AppIcon.appiconset/512.png"},{"revision":"04d748c9e5250620217e69b072506e33","url":"assets/Assets.xcassets/AppIcon.appiconset/55.png"},{"revision":"c7e6d8419c8e7e4b002577c79600b7bd","url":"assets/Assets.xcassets/AppIcon.appiconset/57.png"},{"revision":"05eefb517b2633b50493eb9b7344db39","url":"assets/Assets.xcassets/AppIcon.appiconset/58.png"},{"revision":"2aaa18e07735148aaa9508c1a3c71c3b","url":"assets/Assets.xcassets/AppIcon.appiconset/60.png"},{"revision":"ea2256b1e062b358c08e463ae3328ee7","url":"assets/Assets.xcassets/AppIcon.appiconset/64.png"},{"revision":"8d3dd8ac5cbe733bbac5e7f3e62285a4","url":"assets/Assets.xcassets/AppIcon.appiconset/72.png"},{"revision":"d454a6ca0e5d22fcb2a493bce24a6294","url":"assets/Assets.xcassets/AppIcon.appiconset/76.png"},{"revision":"24c02ad83eeea957456dcc15b5794a6b","url":"assets/Assets.xcassets/AppIcon.appiconset/80.png"},{"revision":"d4ddbe5abe8329d37f821bb60dcede2e","url":"assets/Assets.xcassets/AppIcon.appiconset/87.png"},{"revision":"d5414ecb460067c7de64193598053db6","url":"assets/Assets.xcassets/AppIcon.appiconset/88.png"},{"revision":"b0acb7355194b055decf0c9d45619bc7","url":"assets/Assets.xcassets/AppIcon.appiconset/Contents.json"},{"revision":"b0acb7355194b055decf0c9d45619bc7","url":"assets/Contents.json"},{"revision":"7142f48e15ec022067c9ef61488dc6e6","url":"assets/ic_launcher.png"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icon_512.png"},{"revision":"71f2736848067e75fadcf83729207f58","url":"assets/icons/android/mipmap-hdpi/ic_launcher.png"},{"revision":"eced4fdf1bdf37a4ece80d94d582e672","url":"assets/icons/android/mipmap-mdpi/ic_launcher.png"},{"revision":"bfff9c90c5e231892ea3f807e95d7d0b","url":"assets/icons/android/mipmap-xhdpi/ic_launcher.png"},{"revision":"cc9dbcdff7b3e16ab27371c4206c968c","url":"assets/icons/android/mipmap-xxhdpi/ic_launcher.png"},{"revision":"7142f48e15ec022067c9ef61488dc6e6","url":"assets/icons/android/mipmap-xxxhdpi/ic_launcher.png"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/icons/appstore.png"},{"revision":"9b5fdf6470327b54ede3294574fd3596","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/100.png"},{"revision":"22957b49faf6a33ee24af5ca4a3503e4","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/1024.png"},{"revision":"b259b43d48bf427fbad7dbc41fb160df","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/114.png"},{"revision":"496c21878ad5844e80eca6822ed38345","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/120.png"},{"revision":"0b6bc0a3b34d99067a12965279cd6ed0","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/128.png"},{"revision":"cb1e73a28785143ce902305b0fcef565","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/144.png"},{"revision":"b55d05e6ba2d67dadd571ceab23f00b7","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/152.png"},{"revision":"a725163b80def9fbc3cce5a50f26661a","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/16.png"},{"revision":"f16e9d7ede2fe37715e7bb4b19554cc2","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/167.png"},{"revision":"4cb5b93480008876e534f23c7f56f29b","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/172.png"},{"revision":"6b007105000e3e37ea4477d6bba81311","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/180.png"},{"revision":"854c4b4d4eec5c95aadb934e678039e6","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/196.png"},{"revision":"cbb38e0231dbea25efab0615f70823b1","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/20.png"},{"revision":"a32d392721b980085332d93d5949fe1d","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/216.png"},{"revision":"06eae8496975d3bdb4d9f61a3691128d","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/256.png"},{"revision":"c4254f7b571aa554d84f5aa2333af196","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/29.png"},{"revision":"eda5ca38e8296be8759db76d0bf55399","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/32.png"},{"revision":"3d6b4067c9ad08d33da2694dae072f2a","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/40.png"},{"revision":"16719961c9a4baf63e86f9e9720618a6","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/48.png"},{"revision":"aba49a04af020e0b23153bc099c936c6","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/50.png"},{"revision":"2bd23ef68e0aabb4a5c8ed7bac23b3f7","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/512.png"},{"revision":"04d748c9e5250620217e69b072506e33","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/55.png"},{"revision":"c7e6d8419c8e7e4b002577c79600b7bd","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/57.png"},{"revision":"05eefb517b2633b50493eb9b7344db39","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/58.png"},{"revision":"2aaa18e07735148aaa9508c1a3c71c3b","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/60.png"},{"revision":"ea2256b1e062b358c08e463ae3328ee7","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/64.png"},{"revision":"8d3dd8ac5cbe733bbac5e7f3e62285a4","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/72.png"},{"revision":"d454a6ca0e5d22fcb2a493bce24a6294","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/76.png"},{"revision":"24c02ad83eeea957456dcc15b5794a6b","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/80.png"},{"revision":"d4ddbe5abe8329d37f821bb60dcede2e","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/87.png"},{"revision":"d5414ecb460067c7de64193598053db6","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/88.png"},{"revision":"b0acb7355194b055decf0c9d45619bc7","url":"assets/icons/Assets.xcassets/AppIcon.appiconset/Contents.json"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icons/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icons/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icons/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icons/icon_512.png"},{"revision":"f148f0f3f2ff697298e6fea9ed7444fa","url":"assets/icons/playstore.png"},{"revision":"cd10ec0be4be4b10195986d075904542","url":"assets/intro.png"},{"revision":"b161fb8b8de12151480c8cf0fc43541d","url":"assets/logo.png"},{"revision":"71f2736848067e75fadcf83729207f58","url":"assets/mipmap-hdpi/ic_launcher.png"},{"revision":"eced4fdf1bdf37a4ece80d94d582e672","url":"assets/mipmap-mdpi/ic_launcher.png"},{"revision":"bfff9c90c5e231892ea3f807e95d7d0b","url":"assets/mipmap-xhdpi/ic_launcher.png"},{"revision":"cc9dbcdff7b3e16ab27371c4206c968c","url":"assets/mipmap-xxhdpi/ic_launcher.png"},{"revision":"7142f48e15ec022067c9ef61488dc6e6","url":"assets/mipmap-xxxhdpi/ic_launcher.png"},{"revision":"f148f0f3f2ff697298e6fea9ed7444fa","url":"assets/playstore.png"},{"revision":"cd10ec0be4be4b10195986d075904542","url":"assets/readme/intro.png"},{"revision":"808ac8889e4c17f3f83fd9235f1aa28d","url":"assets/screen.png"},{"revision":"808ac8889e4c17f3f83fd9235f1aa28d","url":"assets/screenshots/screen.png"},{"revision":"3f4429e4a249c9e13a54198da54a25cf","url":"manifest.json"}]),K(x)}catch(e){console.info("if you are in development mode this error is expected: ",e)}var x;
