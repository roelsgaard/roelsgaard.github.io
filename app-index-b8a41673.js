/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,d=-1,p=0;const{strings:u,values:{length:m}}=t;for(;p<m;){const t=o.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=u[p],n=h.exec(e)[2],r=n.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const o=i.split(s);this.parts.push({type:"attribute",index:d,name:n,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,i=e.split(s),o=i.length-1;for(let e=0;e<o;e++){let n,s=i[e];if(""===s)n=c();else{const t=h.exec(s);null!==t&&a(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}r.insertBefore(n,t),this.parts.push({type:"node",index:++d})}""===i[o]?(r.insertBefore(c(),t),n.push(t)):t.data=i[o],p+=o}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&d!==l||(d++,e.insertBefore(c(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(n.push(t),d--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,133,null,!1);let s=u(r),o=r[s],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,s=u(r,s),o=r[s]}c.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},u=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),g={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,o=0,a=0,c=i.nextNode();for(;o<r.length;)if(s=r[o],l(s)){for(;a<s.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=n.pop(),c=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${r} `;class b{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],o=t.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===t.indexOf("--\x3e",o+1);const a=h.exec(t);e+=null===a?t+(n?w:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class C{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let r="";for(let i=0;i<e;i++){r+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(x(t)||!S(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const n=new y(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new E(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class k extends C{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends P{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class O{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const R=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(t){let e=U.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},U.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r);return n=e.keyString.get(i),void 0===n&&(n=new o(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const U=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const B=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,r){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}if("@"===i)return[new O(t,e.slice(1),r.eventContext)];if("?"===i)return[new A(t,e.slice(1),n)];return new C(t,e,n).parts}handleTextExpression(t){return new E(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const j=(t,...e)=>new b(t,e,"html",B)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const L=t=>e=>{const n=M(e.type,t);let i=U.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},U.set(n,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const a=e.strings.join(r);if(s=i.keyString.get(a),void 0===s){const n=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,t),s=new o(e,n),i.keyString.set(a,s)}return i.stringsArray.set(e.strings,s),s},F=["html","svg"],z=new Set,D=(t,e,n)=>{z.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{F.forEach(e=>{const n=U.get(M(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),d(t,n)})})})(t);const a=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const s=document.createTreeWalker(r,133,null,!1);let o=u(i),a=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===n&&(a=p(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=u(i,o);return}o=u(i,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),d(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),q={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:H};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=q){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdateInternal(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||q}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=H){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||W,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||W.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=q){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let r=!0;if(void 0!==t){const i=this.constructor;n=n||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const K=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Z(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Y(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class X{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new X(n,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const et={};class nt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),G)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==et&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return et}}nt.finalized=!0,nt.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,s=V.has(e),o=I&&11===e.nodeType&&!!e.host,a=o&&!z.has(i),l=a?document.createDocumentFragment():e;if(((t,e,r)=>{let i=V.get(e);void 0===i&&(n(e,e.firstChild),V.set(e,i=new E(Object.assign({templateFactory:$},r))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:L(i)},r)),a){const t=V.get(l);V.delete(l);const r=t.value instanceof y?t.value.template:void 0;D(i,l,r),n(e,e.firstChild),e.appendChild(l),V.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const rt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,it=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},st=`{{lit-${String(Math.random()).slice(2)}}}`,ot=`\x3c!--${st}--\x3e`,at=new RegExp(`${st}|${ot}`);class lt{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],i=document.createTreeWalker(e.content,133,null,!1);let s=0,o=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=i.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)ct(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=l[a],n=pt.exec(e)[2],r=n.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const s=i.split(at);this.parts.push({type:"attribute",index:o,name:n,strings:s}),a+=s.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(st)>=0){const r=t.parentNode,i=e.split(at),s=i.length-1;for(let e=0;e<s;e++){let n,s=i[e];if(""===s)n=dt();else{const t=pt.exec(s);null!==t&&ct(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}r.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===i[s]?(r.insertBefore(dt(),t),n.push(t)):t.data=i[s],a+=s}}else if(8===t.nodeType)if(t.data===st){const e=t.parentNode;null!==t.previousSibling&&o!==s||(o++,e.insertBefore(dt(),t)),s=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(st,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const ct=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},ht=t=>-1!==t.index,dt=()=>document.createComment(""),pt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ut(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,133,null,!1);let s=ft(r),o=r[s],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,s=ft(r,s),o=r[s]}c.forEach(t=>t.parentNode.removeChild(t))}const mt=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},ft=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(ht(e))return n}return-1},gt=new WeakMap,_t=t=>"function"==typeof t&&gt.has(t),yt={},vt={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class wt{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=rt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,s=0,o=0,a=r.nextNode();for(;s<n.length;)if(i=n[s],ht(i)){for(;o<i.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=e.pop(),a=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return rt&&(document.adoptNode(t),customElements.upgrade(t)),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const bt=` ${st} `;class xt{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const s=pt.exec(t);e+=null===s?t+(n?bt:ot):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+st}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const St=t=>null===t||!("object"==typeof t||"function"==typeof t),Ct=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Pt{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Et(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(St(t)||!Ct(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Et{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===yt||St(t)&&t===this.value||(this.value=t,_t(t)||(this.committer.dirty=!0))}commit(){for(;_t(this.value);){const t=this.value;this.value=yt,t(this)}this.value!==yt&&this.committer.commit()}}class At{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(dt()),this.endNode=t.appendChild(dt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=dt()),t.__insert(this.endNode=dt())}insertAfterPart(t){t.__insert(this.startNode=dt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}const t=this.__pendingValue;t!==yt&&(St(t)?t!==this.value&&this.__commitText(t):t instanceof xt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Ct(t)?this.__commitIterable(t):t===vt?(this.value=vt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof wt&&this.value.template===e)this.value.update(t.values);else{const n=new wt(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new At(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){it(this.startNode.parentNode,t.nextSibling,this.endNode)}}class kt{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}if(this.__pendingValue===yt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=yt}}class Nt extends Pt{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Tt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Tt extends Et{}let Ot=!1;(()=>{try{const t={get capture(){return Ot=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Rt{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}if(this.__pendingValue===yt)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=$t(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=yt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $t=t=>t&&(Ot?{capture:t.capture,passive:t.passive,once:t.once}:t.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function Ut(t){let e=Vt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Vt.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(st);return n=e.keyString.get(r),void 0===n&&(n=new lt(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const Vt=new Map,Bt=new WeakMap,jt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,r){const i=e[0];return"."===i?new Nt(t,e.slice(1),n).parts:"@"===i?[new Rt(t,e.slice(1),r.eventContext)]:"?"===i?[new kt(t,e.slice(1),n)]:new Pt(t,e,n).parts}handleTextExpression(t){return new At(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Mt=(t,...e)=>new xt(t,e,"html",jt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,It=(t,e)=>`${t}--${e}`;let Lt=!0;void 0===window.ShadyCSS?Lt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Lt=!1);const Ft=t=>e=>{const n=It(e.type,t);let r=Vt.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Vt.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(st);if(i=r.keyString.get(s),void 0===i){const n=e.getTemplateElement();Lt&&window.ShadyCSS.prepareTemplateDom(n,t),i=new lt(e,n),r.keyString.set(s,i)}return r.stringsArray.set(e.strings,i),i},zt=["html","svg"],Dt=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const Wt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Ht=(t,e)=>e!==t&&(e==e||t==t),qt={attribute:!0,type:String,converter:Wt,reflect:!1,hasChanged:Ht};class Jt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=qt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||qt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Ht){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||Wt,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||Wt.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=qt){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,i=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Jt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Kt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Yt(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Kt(t,e)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const Zt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol();class Gt{constructor(t,e){if(e!==Qt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Zt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Xt=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof Gt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new Gt(n,Qt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class ee extends Jt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Zt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==te&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return te}}ee.finalized=!0,ee.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=Bt.has(e),s=Lt&&11===e.nodeType&&!!e.host,o=s&&!Dt.has(r),a=o?document.createDocumentFragment():e;if(((t,e,n)=>{let r=Bt.get(e);void 0===r&&(it(e,e.firstChild),Bt.set(e,r=new At(Object.assign({templateFactory:Ut},n))),r.appendInto(e)),r.setValue(t),r.commit()})(t,a,Object.assign({templateFactory:Ft(r)},n)),o){const t=Bt.get(a);Bt.delete(a);((t,e,n)=>{Dt.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(r,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{zt.forEach(e=>{const n=Vt.get(It(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),ut(t,n)})})})(t);const a=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const s=document.createTreeWalker(r,133,null,!1);let o=ft(i),a=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===n&&(a=mt(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=ft(i,o);return}o=ft(i,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),ut(n,t)}})(r,a,t.value instanceof wt?t.value.template:void 0),it(e,e.firstChild),e.appendChild(a),Bt.set(e,t)}!i&&s&&window.ShadyCSS.styleElement(e.host)};var ne=function(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};let re=class extends ee{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",t=>this.handleInstallPromptEvent(t)),document.addEventListener("keyup",t=>{"Escape"===t.key&&this.cancel()})}static get styles(){return Xt`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(t){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(t){this.deferredprompt=t,this.hasprompt=!0,t.preventDefault()}checkManifest(t){t.icons&&t.icons[0]?t.name?t.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const t=await fetch(this.manifestpath),e=await t.json();if(this.manifestdata=e,this.manifestdata)return this.checkManifest(this.manifestdata),e}catch(t){return null}}scrollToLeft(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:-t.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:t.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let t=new CustomEvent("show");this.dispatchEvent(t)}closePrompt(){this.openmodal=!1;let t=new CustomEvent("hide");this.dispatchEvent(t)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let t=new CustomEvent("show");if(this.dispatchEvent(t),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((t,e)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let n=new CustomEvent("hide");this.dispatchEvent(n),t()})}render(){return Mt`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?Mt`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?Mt`<div id="installModalWrapper">${this.openmodal?Mt`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?Mt`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(t=>Mt`<li>${t}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?Mt`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(t=>Mt`<div><img alt="App Screenshot" src="${t.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?Mt`<p id="iosText">${this.iosinstallinfotext}</p>`:Mt`<div id="buttonsContainer">${this.deferredprompt?Mt`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:Mt`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};ne([Yt({type:String})],re.prototype,"manifestpath",void 0),ne([Yt({type:String})],re.prototype,"iconpath",void 0),ne([Yt({type:Object})],re.prototype,"manifestdata",void 0),ne([Yt({type:Boolean})],re.prototype,"openmodal",void 0),ne([Yt({type:Boolean})],re.prototype,"showopen",void 0),ne([Yt({type:Boolean})],re.prototype,"isSupportingBrowser",void 0),ne([Yt({type:Boolean})],re.prototype,"isIOS",void 0),ne([Yt({type:Boolean})],re.prototype,"installed",void 0),ne([Yt({type:Boolean})],re.prototype,"hasprompt",void 0),ne([Yt({type:Boolean})],re.prototype,"usecustom",void 0),ne([Yt({type:Array})],re.prototype,"relatedApps",void 0),ne([Yt({type:String})],re.prototype,"explainer",void 0),ne([Yt({type:String})],re.prototype,"featuresheader",void 0),ne([Yt({type:String})],re.prototype,"descriptionheader",void 0),ne([Yt({type:String})],re.prototype,"installbuttontext",void 0),ne([Yt({type:String})],re.prototype,"cancelbuttontext",void 0),ne([Yt({type:String})],re.prototype,"iosinstallinfotext",void 0),ne([Yt()],re.prototype,"deferredprompt",void 0),re=ne([("pwa-install",t=>"function"==typeof t?((t,e)=>(window.customElements.define("pwa-install",e),e))(0,t):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(t){window.customElements.define("pwa-install",t)}}})(0,t))],re);let ie=class extends nt{constructor(){super(),this.message="Welcome!!"}static get styles(){return tt`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media (min-width: 1200px) {
        #welcomeCard,
        #infoCard {
          width: 40%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fast-card {
          --background-color: white;
        }
      }
    `}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return j`
      <div>
        <div id="welcomeBar">
          <fast-card id="welcomeCard">
            <h2>${this.message}</h2>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <fast-anchor
                href="https://github.com/pwa-builder/pwa-starter/blob/master/README.md"
                appearance="hypertext"
                >README</fast-anchor
              >.
            </p>

            <p>
              Welcome to the
              <fast-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fast-anchor
              >
              pwa-starter! Be sure to head back to
              <fast-anchor href="https://pwabuilder.com" appearance="hypertext"
                >PWABuilder</fast-anchor
              >
              when you are ready to ship this PWA to the Microsoft, Google Play
              and Samsung Galaxy stores!
            </p>

            ${"share"in navigator?j`<fast-button appearance="primary" @click="${this.share}"
                  >Share this Starter!</fast-button
                >`:null}
          </fast-card>

          <fast-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <fast-anchor
                  href="https://www.typescriptlang.org/"
                  appearance="hypertext"
                  >TypeScript</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://lit-element.polymer-project.org/"
                  appearance="hypertext"
                  >lit-element</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://www.fast.design/docs/components/getting-started"
                  appearance="hypertext"
                  >FAST Components</fast-anchor
                >
              </li>

              <li>
                <fast-anchor
                  href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  appearance="hypertext"
                  >Vaadin Router</fast-anchor
                >
              </li>
            </ul>
          </fast-card>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}};function se(t){return t=t||[],Array.isArray(t)?t:[t]}function oe(t){return"[Vaadin.Router] "+t}t([Z()],ie.prototype,"message",void 0),ie=t([K("app-home")],ie);const ae=["module","nomodule"];function le(t){if(!t.match(/.+\.[m]?js$/))throw new Error(oe(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function ce(t){if(!t||!fe(t.path))throw new Error(oe('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,n=["component","redirect","bundle"];if(!(me(t.action)||Array.isArray(t.children)||me(t.children)||ue(e)||n.some(e=>fe(t[e]))))throw new Error(oe(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(fe(e))le(e);else{if(!ae.some(t=>t in e))throw new Error(oe('Expected route bundle to include either "nomodule" or "module" keys, or both'));ae.forEach(t=>t in e&&le(e[t]))}t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(oe(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function he(t){se(t).forEach(t=>ce(t))}function de(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),"module"===e?n.setAttribute("type","module"):"nomodule"===e&&n.setAttribute("nomodule",""),n.async=!0),new Promise((t,e)=>{n.onreadystatechange=n.onload=e=>{n.__dynamicImportLoaded=!0,t(e)},n.onerror=t=>{n.parentNode&&n.parentNode.removeChild(n),e(t)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&t()})}function pe(t,e){return!window.dispatchEvent(new CustomEvent("vaadin-router-"+t,{cancelable:"go"===t,detail:e}))}function ue(t){return"object"==typeof t&&!!t}function me(t){return"function"==typeof t}function fe(t){return"string"==typeof t}function ge(t){const e=new Error(oe(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const _e=new class{};function ye(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const n=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<n.length;t++){const r=n[t];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){e=r;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;if((e.origin||function(t){const e=t.port,n=t.protocol;return`${n}//${"http:"===n&&"80"===e||"https:"===n&&"443"===e?t.hostname:t.host}`}(e))!==window.location.origin)return;const{pathname:r,search:i,hash:s}=e;pe("go",{pathname:r,search:i,hash:s})&&t.preventDefault()}const ve={activate(){window.document.addEventListener("click",ye)},inactivate(){window.document.removeEventListener("click",ye)}};function we(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:n,hash:r}=window.location;pe("go",{pathname:e,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!me(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const be={activate(){window.addEventListener("popstate",we)},inactivate(){window.removeEventListener("popstate",we)}};var xe=Ue,Se=ke,Ce=function(t,e){return Ne(ke(t,e))},Pe=Ne,Ee=$e,Ae=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ke(t,e){for(var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/",l=e&&e.delimiters||"./",c=!1;null!==(n=Ae.exec(t));){var h=n[0],d=n[1],p=n.index;if(o+=t.slice(s,p),s=p+h.length,d)o+=d[1],c=!0;else{var u="",m=t[s],f=n[2],g=n[3],_=n[4],y=n[5];if(!c&&o.length){var v=o.length-1;l.indexOf(o[v])>-1&&(u=o[v],o=o.slice(0,v))}o&&(r.push(o),o="",c=!1);var w=""!==u&&void 0!==m&&m!==u,b="+"===y||"*"===y,x="?"===y||"*"===y,S=u||a,C=g||_;r.push({name:f||i++,prefix:u,delimiter:S,optional:x,repeat:b,partial:w,pattern:C?Oe(C):"[^"+Te(S)+"]+?"})}}return(o||s<t.length)&&r.push(o+t.substr(s)),r}function Ne(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var i="",s=r&&r.encode||encodeURIComponent,o=0;o<t.length;o++){var a=t[o];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=s(c[h],a),!e[o].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(l=s(String(c),a),!e[o].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');i+=a.prefix+l}}else i+=a}return i}}function Te(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Oe(t){return t.replace(/([=!:$/()])/g,"\\$1")}function Re(t){return t&&t.sensitive?"":"i"}function $e(t,e,n){for(var r=(n=n||{}).strict,i=!1!==n.start,s=!1!==n.end,o=Te(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(Te).concat("$").join("|"),c=i?"^":"",h=0===t.length,d=0;d<t.length;d++){var p=t[d];if("string"==typeof p)c+=Te(p),h=d===t.length-1&&a.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+Te(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?c+=Te(p.prefix)+"("+u+")?":c+="(?:"+Te(p.prefix)+"("+u+"))?":c+=Te(p.prefix)+"("+u+")"}}return s?(r||(c+="(?:"+o+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+o+"(?="+l+"))?"),h||(c+="(?="+o+"|"+l+")")),new RegExp(c,Re(n))}function Ue(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Ue(t[i],e,n).source);return new RegExp("(?:"+r.join("|")+")",Re(n))}(t,e,n):function(t,e,n){return $e(ke(t,n),e,n)}(t,e,n)}xe.parse=Se,xe.compile=Ce,xe.tokensToFunction=Pe,xe.tokensToRegExp=Ee;const{hasOwnProperty:Ve}=Object.prototype,Be=new Map;function je(t){try{return decodeURIComponent(t)}catch(e){return t}}function Me(t,e,n,r,i){let s,o,a=0,l=t.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(t===c)return{done:!0};const h=t.__children=t.__children||t.children;if(!s&&(s=function(t,e,n,r,i){const s=`${t}|${n=!!n}`;let o=Be.get(s);if(!o){const e=[];o={keys:e,pattern:xe(t,e,{end:n,strict:""===t})},Be.set(s,o)}const a=o.pattern.exec(e);if(!a)return null;const l=Object.assign({},i);for(let t=1;t<a.length;t++){const e=o.keys[t-1],n=e.name,r=a[t];void 0===r&&Ve.call(l,n)||(e.repeat?l[n]=r?r.split(e.delimiter).map(je):[]:l[n]=r?je(r):r)}return{path:a[0],keys:(r||[]).concat(o.keys),params:l}}(l,e,!h,r,i),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;a<h.length;){if(!o){const r=h[a];r.parent=t;let i=s.path.length;i>0&&"/"===e.charAt(i)&&(i+=1),o=Me(r,e.substr(i),n,s.keys,s.params)}const r=o.next(c);if(!r.done)return{done:!1,value:r.value};o=null,a++}return{done:!0}}}}function Ie(t){if(me(t.route.action))return t.route.action(t)}Be.set("|false",{keys:[],pattern:/(?:)/});class Le{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||Ie,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){he(t);const e=[...se(t)];this.root.__children=e}addRoutes(t){return he(t),this.root.__children.push(...se(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,fe(t)?{pathname:t}:t),n=Me(this.root,this.__normalizePathname(e.pathname),this.baseUrl),r=this.resolveRoute;let i=null,s=null,o=e;function a(t,l=i.value.route,c){const h=null===c&&i.value.route;return i=s||n.next(h),s=null,t||!i.done&&function(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}(l,i.value.route)?i.done?Promise.reject(ge(e)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},e,i.value),function(t,e){const{route:n,path:r}=e;if(n&&!n.__synthetic){const e={path:r,route:n};if(t.chain){if(n.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==n.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(o,i.value),Promise.resolve(r(o)).then(e=>null!=e&&e!==_e?(o.result=e.result||e,o):a(t,l,e))):(s=i,Promise.resolve(_e))}return e.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}(o);if(t?console.warn(e):t=new Error(e),t.context=t.context||o,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return o.result=this.errorHandler(t),o;throw t})}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,e).href;return n.slice(0,e.length)===e?n.slice(e.length):void 0}}Le.pathToRegexp=xe;const{pathToRegexp:Fe}=Le,ze=new Map;function De(t,e){const n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function We(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function He(t,e={}){if(!(t instanceof Le))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let s=De(n,r);if(!s&&(n.clear(),function t(e,n,r){const i=n.name||n.component;if(i&&(e.has(i)?e.get(i).push(n):e.set(i,[n])),Array.isArray(r))for(let i=0;i<r.length;i++){const s=r[i];s.parent=n,t(e,s,s.__children||s.children)}}(n,t.root,t.root.__children),s=De(n,r),!s))throw new Error(`Route "${r}" not found`);let o=ze.get(s.fullPath);if(!o){let t=We(s),e=s.parent;for(;e;){const n=We(e);n&&(t=n.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const n=Fe.parse(t),r=Fe.tokensToFunction(n),i=Object.create(null);for(let t=0;t<n.length;t++)fe(n[t])||(i[n[t].name]=!0);o={toPath:r,keys:i},ze.set(t,o),s.fullPath=t}let a=o.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const t={},n=Object.keys(i);for(let e=0;e<n.length;e++){const r=n[e];o.keys[r]||(t[r]=i[r])}const r=e.stringifyQueryParams(t);r&&(a+="?"===r.charAt(0)?r:"?"+r)}return a}}let qe=[];function Je(t){qe.forEach(t=>t.inactivate()),t.forEach(t=>t.activate()),qe=t}function Ke(t,e){return t.classList.add(e),new Promise(n=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const r=t.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;t.setAttribute("style","position: absolute; "+i),((t,e)=>{const n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)})(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}function Ye(t){return null!=t}function Ze({pathname:t="",search:e="",hash:n="",chain:r=[],params:i={},redirectFrom:s,resolver:o},a){const l=r.map(t=>t.route);return{baseUrl:o&&o.baseUrl||"",pathname:t,search:e,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:i,redirectFrom:s,getUrl:(t={})=>en(rn.pathToRegexp.compile(nn(l))(Object.assign({},i,t)),o)}}function Qe(t,e){const n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function Ge(t,e,n){if(me(t))return t.apply(n,e)}function Xe(t,e,n){return r=>r&&(r.cancel||r.redirect)?r:n?Ge(n[t],e,n):void 0}function tn(t){if(t&&t.length){const e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function en(t,e){const n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function nn(t){return t.map(t=>t.path).reduce((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t,"")}class rn extends Le{constructor(t,e){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Le.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const i=rn.NavigationTrigger;rn.setTriggers.apply(rn,Object.keys(i).map(t=>i[t])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=Ze({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let n=Promise.resolve();me(e.children)&&(n=n.then(()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t))).then(t=>{Ye(t)||me(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!ue(t))throw new Error(oe(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const n=se(t);for(let t=0;t<n.length;t++)ce(n[t]),e.__children.push(n[t])}(t,e)}));const r={redirect:e=>Qe(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return n.then(()=>{if(this.__isLatestRender(t))return Ge(e.action,[t,r],e)}).then(t=>{return Ye(t)&&(t instanceof HTMLElement||t.redirect||t===_e)?t:fe(e.redirect)?r.redirect(e.redirect):e.bundle?(n=e.bundle,fe(n)?de(n):Promise.race(ae.filter(t=>t in n).map(t=>de(n[t],t)))).then(()=>{},()=>{throw new Error(oe(`Bundle not found: ${e.bundle}. Check if the file name is correct`))}):void 0;var n}).then(t=>Ye(t)?t:fe(e.component)?r.component(e.component):void 0)}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},fe(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(r).then(t=>this.__fullyResolveChain(t)).then(t=>{if(this.__isLatestRender(t)){const r=this.__previousContext;if(t===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Ze(t),e&&this.__updateBrowserHistory(t,1===n),pe("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,r),this.__previousContext=t,this.location;this.__addAppearingContent(t,r);const i=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,r),i.then(()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location})}}).catch(t=>{if(n===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(r),tn(this.__outlet&&this.__outlet.children),this.location=Ze(Object.assign(r,{resolver:this})),pe("error",Object.assign({router:this,error:t},r)),t}),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then(n=>{const r=n!==e?n:t,i=en(nn(n.chain),n.resolver)===n.pathname,s=(t,e=t.route,n)=>t.next(void 0,e,n).then(n=>null===n||n===_e?i?t:null!==e.parent?s(t,e.parent,n):n:n);return s(n).then(t=>{if(null===t||t===_e)throw ge(r);return t&&t!==_e&&t!==n?this.__fullyResolveChain(r,t):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=Ze(t);const n=t.chain.map(t=>t.route).indexOf(t.route);t.chain[n].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then(t=>this.__findComponentContextAfterAllRedirects(t)):e instanceof Error?Promise.reject(e):Promise.reject(new Error(oe(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},n=e.chain||[],r=t.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),o=e=>Qe(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let e=0;e<Math.min(n.length,r.length)&&(n[e].route===r[e].route&&(n[e].path===r[e].path||n[e].element===r[e].element)&&this.__isReusableElement(n[e].element,r[e].element));e=++t.__divergedChainIndex);if(t.__skipAttach=r.length===n.length&&t.__divergedChainIndex==r.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=r.length-1;e>=0;e--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[e]);for(let e=0;e<r.length;e++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:o},r[e]),n[e].element.location=Ze(t,n[e].route)}else for(let e=n.length-1;e>=t.__divergedChainIndex;e--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[e])}if(!t.__skipAttach)for(let e=0;e<r.length;e++)e<t.__divergedChainIndex?e<n.length&&n[e].element&&(n[e].element.location=Ze(t,n[e].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:o},r[e]),r[e].element&&(r[e].element.location=Ze(t,r[e].route)));return i.then(e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,e,n,r){const i=Ze(e);return t.then(t=>{if(this.__isLatestRender(e)){return Xe("onBeforeLeave",[i,n,this],r.element)(t)}}).then(t=>{if(!(t||{}).redirect)return t})}__runOnBeforeEnterCallbacks(t,e,n,r){const i=Ze(e,r.route);return t.then(t=>{if(this.__isLatestRender(e)){return Xe("onBeforeEnter",[i,n,this],r.element)(t)}})}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,n){if(e>256)throw new Error(oe("Too many redirects when rendering "+t.from));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(oe(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:n=""},r){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,t+e+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let n=this.__outlet;for(let r=0;r<t.__divergedChainIndex;r++){const i=e&&e.chain[r].element;if(i){if(i.parentNode!==n)break;t.chain[r].element=i,n=i}}return n}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(e=>this.__addedByRouter.get(e)&&e!==t.result);let r=n;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const i=t.chain[e].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&tn(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(tn(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let n=e.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const r=e.chain[n].element;if(r)try{const n=Ze(t);Ge(r.onAfterLeave,[n,{},e.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&tn(r.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const n=t.chain[e].element||{},r=Ze(t,t.chain[e].route);Ge(n.onAfterEnter,[r,{},t.resolver],n)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=t.chain;let s;for(let t=i.length;t>0;t--)if(i[t-1].route.animate){s=i[t-1].route.animate;break}if(e&&n&&s){const t=ue(s)&&s.leave||"leaving",i=ue(s)&&s.enter||"entering";r.push(Ke(e,t)),r.push(Ke(n,i))}return Promise.all(r).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:n,hash:r}=t?t.detail:window.location;fe(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:n,hash:r},!0))}static setTriggers(...t){Je(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=He(this)),en(this.__urlForName(t,e),this)}urlForPath(t,e){return en(rn.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:n,hash:r}=fe(t)?this.__createUrl(t,"http://a"):t;return pe("go",{pathname:e,search:n,hash:r})}}const sn=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,on=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function an(t,e){if("function"!=typeof t)return;const n=sn.exec(t.toString());if(n)try{t=new Function(n[1])}catch(t){}return t(e)}window.Vaadin=window.Vaadin||{};const ln=function(t,e){if(window.Vaadin.developmentMode)return an(t,e)};function cn(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(on?!(on&&Object.keys(on).map(t=>on[t]).filter(t=>t.productionMode).length>0):!an((function(){return!0})))}catch(t){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.2"}),ln(cn),rn.NavigationTrigger={POPSTATE:be,CLICK:ve};var hn={app:{name:"AppyFace"},facebook:{apiVersion:"v10.0",groupId:"917384122338972",accessToken:"EAAIrqc5xnUEBAOU9q2YxMLIbriZA6MfvghHAaajZCpuKnuyj5mWp1fpkgeilEfSTIdzAPRLKitRTmJDQrc3yyF77J82OWIuIbxXnnZCbXuRYRDDVGmVFX4Ng3MWDtHO5WYfnMpUcB5BBOu3SZC7KIdU2WIkkiWnf1tsZAYdbKeQZDZD"}};let dn=class extends nt{constructor(){super(),this.title=hn.app.name}static get styles(){return tt`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav fast-anchor {
        margin-left: 10px;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }
      }
    `}render(){return j`
      <header>
        <h1>${this.title}</h1>
        <img src="../../../assets/logo.png" height="130px" />
        <nav>
          <fast-anchor href="./" appearance="button">Home</fast-anchor>
          <fast-anchor href="./feed" appearance="button">Feed</fast-anchor>
        </nav>
      </header>
    `}};t([Z({type:String})],dn.prototype,"title",void 0),dn=t([K("app-header")],dn);let pn=class extends nt{static get styles(){return tt`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new rn(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"",animate:!0,children:[{path:"/",component:"app-home"},{path:"/feed",component:"app-feed",action:async()=>{await import("./app-feed-7feb8c03-a4875cfe.js")},children:[{path:"/:id",component:"app-feed-post",action:async()=>{await import("./app-feed-post-3b6eadc9-c4174d09.js")}}]}]}])}render(){return j`
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};pn=t([K("app-index")],pn);export{pn as A,nt as L,t as _,K as a,hn as b,tt as c,j as h,Z as p};
