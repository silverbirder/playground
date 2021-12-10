/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class e{constructor(t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=n.get(this.cssText);return t&&void 0===i&&(n.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(n)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const o=window.trustedTypes,l=o?o.emptyScript:"",u=window.reactiveElementPolyfillSupport,h={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let n=t;switch(i){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},c=(t,i)=>i!==t&&(i==i||t==t),a={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:c};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,n)=>{const e=this._$Eh(n,i);void 0!==e&&(this._$Eu.set(e,n),t.push(e))})),t}static createProperty(t,i=a){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,n,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,n){return{get(){return this[i]},set(e){const s=this[t];this[i]=e,this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||a}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)i.unshift(s(t))}else void 0!==t&&i.push(s(t));return i}static _$Eh(t,i){const n=i.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,n;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const n=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{t?i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),e=window.litNonce;void 0!==e&&n.setAttribute("nonce",e),n.textContent=t.cssText,i.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$ES(t,i,n=a){var e,s;const r=this.constructor._$Eh(t,n);if(void 0!==r&&!0===n.reflect){const o=(null!==(s=null===(e=n.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==s?s:h.toAttribute)(i,n.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,i){var n,e,s;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),l=t.converter,u=null!==(s=null!==(e=null===(n=l)||void 0===n?void 0:n.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=o,this[o]=u(i,t.type),this._$Ei=null}}requestUpdate(t,i,n){let e=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,n))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(n)):this._$EU()}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var d;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.0.2");const v=globalThis.trustedTypes,p=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,m=`<${w}>`,b=document,g=(t="")=>b.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,k=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,_=/"/g,C=/^(?:script|style|textarea)$/i,x=(t=>(i,...n)=>({_$litType$:t,strings:i,values:n}))(1),M=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),R=new WeakMap,W=b.createTreeWalker(b,129,null,!1);class O{constructor({strings:t,_$litType$:i},n){let e;this.parts=[];let s=0,r=0;const o=t.length-1,l=this.parts,[u,h]=((t,i)=>{const n=t.length-1,e=[];let s,r=2===i?"<svg>":"",o=$;for(let i=0;i<n;i++){const n=t[i];let l,u,h=-1,c=0;for(;c<n.length&&(o.lastIndex=c,u=o.exec(n),null!==u);)c=o.lastIndex,o===$?"!--"===u[1]?o=U:void 0!==u[1]?o=k:void 0!==u[2]?(C.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=E):void 0!==u[3]&&(o=E):o===E?">"===u[0]?(o=null!=s?s:$,h=-1):void 0===u[1]?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=void 0===u[3]?E:'"'===u[3]?_:T):o===_||o===T?o=E:o===U||o===k?o=$:(o=E,s=void 0);const a=o===E&&t[i+1].startsWith("/>")?" ":"";r+=o===$?n+m:h>=0?(e.push(l),n.slice(0,h)+"$lit$"+n.slice(h)+y+a):n+y+(-2===h?(e.push(void 0),i):a)}const l=r+(t[n]||"<?>")+(2===i?"</svg>":"");return[void 0!==p?p.createHTML(l):l,e]})(t,i);if(this.el=O.createElement(u,n),W.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=W.nextNode())&&l.length<o;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const n=h[r++];if(t.push(i),void 0!==n){const t=e.getAttribute(n.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(n);l.push({type:1,index:s,name:i[2],strings:t,ctor:"."===i[1]?B:"?"===i[1]?P:"@"===i[1]?z:I})}else l.push({type:6,index:s})}for(const i of t)e.removeAttribute(i)}if(C.test(e.tagName)){const t=e.textContent.split(y),i=t.length-1;if(i>0){e.textContent=v?v.emptyScript:"";for(let n=0;n<i;n++)e.append(t[n],g()),W.nextNode(),l.push({type:2,index:++s});e.append(t[i],g())}}}else if(8===e.nodeType)if(e.data===w)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=e.data.indexOf(y,t+1));)l.push({type:7,index:s}),t+=y.length-1}s++}}static createElement(t,i){const n=b.createElement("template");return n.innerHTML=t,n}}function q(t,i,n=t,e){var s,r,o,l;if(i===M)return i;let u=void 0!==e?null===(s=n._$Cl)||void 0===s?void 0:s[e]:n._$Cu;const h=A(i)?void 0:i._$litDirective$;return(null==u?void 0:u.constructor)!==h&&(null===(r=null==u?void 0:u._$AO)||void 0===r||r.call(u,!1),void 0===h?u=void 0:(u=new h(t),u._$AT(t,n,e)),void 0!==e?(null!==(o=(l=n)._$Cl)&&void 0!==o?o:l._$Cl=[])[e]=u:n._$Cu=u),void 0!==u&&(i=q(t,u._$AS(t,i.values),u,e)),i}class L{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:n},parts:e}=this._$AD,s=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:b).importNode(n,!0);W.currentNode=s;let r=W.nextNode(),o=0,l=0,u=e[0];for(;void 0!==u;){if(o===u.index){let i;2===u.type?i=new N(r,r.nextSibling,this,t):1===u.type?i=new u.ctor(r,u.name,u.strings,this,t):6===u.type&&(i=new G(r,this,t)),this.v.push(i),u=e[++l]}o!==(null==u?void 0:u.index)&&(r=W.nextNode(),o++)}return s}m(t){let i=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class N{constructor(t,i,n,e){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=e,this._$Cg=null===(s=null==e?void 0:e.isConnected)||void 0===s||s}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=q(this,t,i),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return S(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(b.createTextNode(t)),this._$AH=t}T(t){var i;const{values:n,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=O.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===s)this._$AH.m(n);else{const t=new L(s,this),i=t.p(this.options);t.m(n),this.S(i),this._$AH=t}}_$AC(t){let i=R.get(t.strings);return void 0===i&&R.set(t.strings,i=new O(t)),i}M(t){S(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,e=0;for(const s of t)e===i.length?i.push(n=new N(this.A(g()),this.A(g()),this,this.options)):n=i[e],n._$AI(s),e++;e<i.length&&(this._$AR(n&&n._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class I{constructor(t,i,n,e,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,n,e){const s=this.strings;let r=!1;if(void 0===s)t=q(this,t,i,0),r=!A(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const e=t;let o,l;for(t=s[0],o=0;o<s.length-1;o++)l=q(this,e[n+o],i,o),l===M&&(l=this._$AH[o]),r||(r=!A(l)||l!==this._$AH[o]),l===j?t=j:t!==j&&(t+=(null!=l?l:"")+s[o+1]),this._$AH[o]=l}r&&!e&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends I{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}const H=v?v.emptyScript:"";class P extends I{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class z extends I{constructor(t,i,n,e,s){super(t,i,n,e,s),this.type=5}_$AI(t,i=this){var n;if((t=null!==(n=q(this,t,i,0))&&void 0!==n?n:j)===M)return;const e=this._$AH,s=t===j&&e!==j||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==j&&(e===j||s);s&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const D=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,X;null==D||D(O,N),(null!==(d=globalThis.litHtmlVersions)&&void 0!==d?d:globalThis.litHtmlVersions=[]).push("2.0.2");class J extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const n=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=n.firstChild),n}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,n)=>{var e,s;const r=null!==(e=null==n?void 0:n.renderBefore)&&void 0!==e?e:i;let o=r._$litPart$;if(void 0===o){const t=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;r._$litPart$=o=new N(i.insertBefore(g(),t),t,void 0,null!=n?n:{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}J.finalized=!0,J._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:J});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:J}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(n){n.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(n){n.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(t){return(i,n)=>void 0!==n?((t,i,n)=>{i.constructor.createProperty(n,t)})(t,i,n):Z(t,i)
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var Q=function(t,i,n,e){for(var s,r=arguments.length,o=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,n):e,l=t.length-1;l>=0;l--)(s=t[l])&&(o=(r<3?s(o):r>3?s(i,n,o):s(i,n))||o);return r>3&&o&&Object.defineProperty(i,n,o),o};let Y=class extends J{constructor(){super(...arguments),this.name="World",this.count=0}render(){return x`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};Y.styles=((t,...n)=>{const s=1===t.length?t[0]:n.reduce(((i,n,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[e+1]),t[0]);return new e(s,i)})`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,Q([V()],Y.prototype,"name",void 0),Q([V({type:Number})],Y.prototype,"count",void 0),Y=Q([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:n,elements:e}=i;return{kind:n,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("my-element")],Y);var tt,it,nt,et,st,rt,ot,lt,ut,ht,ct,at,ft,dt,vt,pt,yt,wt,mt,bt,gt,At,St,$t,Ut,kt,Et,Tt,_t,Ct,xt,Mt,jt,Rt,Wt,Ot,qt,Lt,Nt,It="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"function"==typeof require;let Bt;if(It)try{Bt=require("path")}catch(tt){}function Ht(t){throw new Error("wasm abort"+(t?": "+(t.stack||t):""))}"undefined"!=typeof module&&(tt=module,module=void 0),(it={preRun:[],postRun:[],print:console.log.bind(console),printErr:console.error.bind(console)}).ready=new Promise((t=>{it.onRuntimeInitialized=()=>{t({})}})),It&&Bt&&(it.locateFile=function(t){return Bt.join(__dirname,t)}),it.print;let Pt=it.printErr;for(et in nt={},it=void 0!==it?it:{})it.hasOwnProperty(et)&&(nt[et]=it[et]);for(et in st="object"==typeof window,rt="function"==typeof importScripts,ot="","object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node?(ot=rt?require("path").dirname(ot)+"/":__dirname+"/",lt=function(t,i){return ct||(ct=require("fs")),at||(at=require("path")),t=at.normalize(t),ct.readFileSync(t,i?null:"utf8")},ht=function(t){var i=lt(t,!0);return i.buffer||(i=new Uint8Array(i)),i.buffer,i},ut=function(t,i,n){ct||(ct=require("fs")),at||(at=require("path")),t=at.normalize(t),ct.readFile(t,(function(t,e){t?n(t):i(e.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),"undefined"!=typeof module&&(module.exports=it),it.inspect=function(){return"[Emscripten Module object]"}):(st||rt)&&(rt?ot=self.location.href:"undefined"!=typeof document&&document.currentScript&&(ot=document.currentScript.src),ot=0!==ot.indexOf("blob:")?ot.substr(0,ot.lastIndexOf("/")+1):"",lt=function(t){var i=new XMLHttpRequest;return i.open("GET",t,!1),i.send(null),i.responseText},rt&&(ht=function(t){var i=new XMLHttpRequest;return i.open("GET",t,!1),i.responseType="arraybuffer",i.send(null),new Uint8Array(i.response)}),ut=function(t,i,n){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){200==e.status||0==e.status&&e.response?i(e.response):n()},e.onerror=n,e.send(null)}),nt)nt.hasOwnProperty(et)&&(it[et]=nt[et]);function zt(t){dt.delete(At.get(t)),ft.push(t)}function Gt(t,i){return function(t,i){var n,e,s,r;if(!dt)for(dt=new WeakMap,n=0;n<At.length;n++)(e=At.get(n))&&dt.set(e,n);if(dt.has(t))return dt.get(t);s=function(){if(ft.length)return ft.pop();try{At.grow(1)}catch(t){if(!(t instanceof RangeError))throw t;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return At.length-1}();try{At.set(s,t)}catch(n){if(!(n instanceof TypeError))throw n;r=function(t,i){var n,e,s,r,o,l,u,h,c;if("function"==typeof WebAssembly.Function){for(n={i:"i32",j:"i64",f:"f32",d:"f64"},e={parameters:[],results:"v"==i[0]?[]:[n[i[0]]]},s=1;s<i.length;++s)e.parameters.push(n[i[s]]);return new WebAssembly.Function(e,t)}for(r=[1,0,1,96],o=i.slice(0,1),l=i.slice(1),u={i:127,j:126,f:125,d:124},r.push(l.length),s=0;s<l.length;++s)r.push(u[l[s]]);return"v"==o?r.push(0):r=r.concat([1,u[o]]),r[1]=r.length-2,h=new Uint8Array([0,97,115,109,1,0,0,0].concat(r,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0])),c=new WebAssembly.Module(h),new WebAssembly.Instance(c,{e:{f:t}}).exports.f}(t,i),At.set(s,r)}return dt.set(t,s),s}(t,i)}function Dt(t){wt=t,it.HEAP8=new Int8Array(t),it.HEAP16=new Int16Array(t),it.HEAP32=bt=new Int32Array(t),it.HEAPU8=mt=new Uint8Array(t),it.HEAPU16=new Uint16Array(t),it.HEAPU32=gt=new Uint32Array(t),it.HEAPF32=new Float32Array(t),it.HEAPF64=new Float64Array(t)}function Ft(t){return t.startsWith(_t)}function Xt(t){return t.startsWith("file://")}function Jt(t){try{if(t==Ct&&vt)return new Uint8Array(vt);if(ht)return ht(t);throw"both async and sync fetching of the wasm failed"}catch(t){Ht(t)}}function Kt(t){for(var i,n;t.length>0;)"function"!=typeof(i=t.shift())?"number"==typeof(n=i.func)?void 0===i.arg?At.get(n)():At.get(n)(i.arg):n(void 0===i.arg?null:i.arg):i(it)}function Zt(t){try{return pt.grow(t-wt.byteLength+65535>>>16),Dt(pt.buffer),1}catch(t){}}function Vt(t){function i(){Lt||(Lt=!0,it.calledRun=!0,yt||(Kt($t),it.onRuntimeInitialized&&it.onRuntimeInitialized(),function(){if(it.postRun)for("function"==typeof it.postRun&&(it.postRun=[it.postRun]);it.postRun.length;)t=it.postRun.shift(),Ut.unshift(t);var t;Kt(Ut)}()))}kt>0||(function(){if(it.preRun)for("function"==typeof it.preRun&&(it.preRun=[it.preRun]);it.preRun.length;)t=it.preRun.shift(),St.unshift(t);var t;Kt(St)}(),kt>0||(it.setStatus?(it.setStatus("Running..."),setTimeout((function(){setTimeout((function(){it.setStatus("")}),1),i()}),1)):i()))}if(nt=null,it.arguments&&it.arguments,it.thisProgram&&it.thisProgram,it.quit&&it.quit,ft=[],it.wasmBinary&&(vt=it.wasmBinary),it.noExitRuntime,"object"!=typeof WebAssembly&&Ht("no native wasm support detected"),yt=!1,it.INITIAL_MEMORY,St=[],$t=[],Ut=[],kt=0,Et=null,Tt=null,it.preloadedImages={},it.preloadedAudios={},_t="data:application/octet-stream;base64,",Ft(Ct="markdown.wasm")||(Nt=Ct,Ct=it.locateFile?it.locateFile(Nt,ot):ot+Nt),xt={a:function(t){var i,n,e,s=mt.length;if((t>>>=0)>2147483648)return!1;for(i=1;i<=4;i*=2)if(n=s*(1+.2/i),n=Math.min(n,t+100663296),Zt(Math.min(2147483648,((e=Math.max(t,n))%65536>0&&(e+=65536-e%65536),e))))return!0;return!1}},function(){var t={a:xt};function i(t,i){var n,e=t.exports;it.asm=e,Dt((pt=it.asm.b).buffer),At=it.asm.i,n=it.asm.c,$t.unshift(n),function(t){if(kt--,it.monitorRunDependencies&&it.monitorRunDependencies(kt),0==kt&&(null!==Et&&(clearInterval(Et),Et=null),Tt)){var i=Tt;Tt=null,i()}}()}function n(t){i(t.instance)}function e(i){return function(){if(!vt&&(st||rt)){if("function"==typeof fetch&&!Xt(Ct))return fetch(Ct,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+Ct+"'";return t.arrayBuffer()})).catch((function(){return Jt(Ct)}));if(ut)return new Promise((function(t,i){ut(Ct,(function(i){t(new Uint8Array(i))}),i)}))}return Promise.resolve().then((function(){return Jt(Ct)}))}().then((function(i){return WebAssembly.instantiate(i,t)})).then(i,(function(t){Pt("failed to asynchronously prepare wasm: "+t),Ht(t)}))}if(kt++,it.monitorRunDependencies&&it.monitorRunDependencies(kt),it.instantiateWasm)try{return it.instantiateWasm(t,i)}catch(t){return Pt("Module.instantiateWasm callback failed with error: "+t),!1}vt||"function"!=typeof WebAssembly.instantiateStreaming||Ft(Ct)||Xt(Ct)||"function"!=typeof fetch?e(n):fetch(Ct,{credentials:"same-origin"}).then((function(i){return WebAssembly.instantiateStreaming(i,t).then(n,(function(t){return Pt("wasm streaming compile failed: "+t),Pt("falling back to ArrayBuffer instantiation"),e(n)}))}))}(),it.t=function(){return(it.t=it.asm.c).apply(null,arguments)},Mt=it._wrealloc=function(){return(Mt=it._wrealloc=it.asm.d).apply(null,arguments)},jt=it._wfree=function(){return(jt=it._wfree=it.asm.e).apply(null,arguments)},Rt=it._WErrGetCode=function(){return(Rt=it._WErrGetCode=it.asm.f).apply(null,arguments)},Wt=it._WErrGetMsg=function(){return(Wt=it._WErrGetMsg=it.asm.g).apply(null,arguments)},Ot=it._WErrClear=function(){return(Ot=it._WErrClear=it.asm.h).apply(null,arguments)},qt=it._parseUTF8=function(){return(qt=it._parseUTF8=it.asm.j).apply(null,arguments)},it.addFunction=Gt,it.removeFunction=zt,Tt=function t(){Lt||Vt(),Lt||(Tt=t)},it.run=Vt,it.preInit)for("function"==typeof it.preInit&&(it.preInit=[it.preInit]);it.preInit.length>0;)it.preInit.pop()();Vt(),it.inspect=()=>"[asm]",void 0!==tt&&(module=tt,tt=void 0);class Qt extends Error{constructor(t,i,n,e){super(i,n||"wasm",e||0),this.name="WError",this.code=t}}function Yt(t,i){const n=Mt(0,i);return mt.set(t,n),n}let ti=0;it.postRun.push((()=>{ti=Mt(0,4)}));const ii="undefined"!=typeof TextEncoder?(()=>{const t=new TextEncoder("utf-8"),i=new TextDecoder("utf-8");return{encode:i=>t.encode(i),decode:t=>i.decode(t)}})():"undefined"!=typeof Buffer?{encode:t=>new Uint8Array(Buffer.from(t,"utf-8")),decode:t=>Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8")}:{encode:t=>{let i=[];for(let n=0,e=t.length;n!=e;++n)i[n]=255&t.charCodeAt(n);return new Uint8Array(i)},decode:t=>String(t)},ni=it.ready,ei=2823,si=1,ri=2,oi=4;function li(t){return"string"==typeof t?ii.encode(t):t instanceof Uint8Array?t:new Uint8Array(t)}ni.then((async()=>{const t=await(await fetch("./sample.md")).text();document.body.innerHTML=function(t,i){let n=void 0===(i=i||{}).parseFlags?ei:i.parseFlags,e=i.allowJSURIs?oi:0;switch(i.format){case"xhtml":e|=si|ri;break;case"html":case void 0:case null:case"":e|=si;break;default:throw new Error(`invalid format "${i.format}"`)}let s=i.onCodeBlock?(r=i.onCodeBlock,Gt((function(t,i,n,e,s){try{const o=i>0?ii.decode(mt.subarray(t,t+i)):"",l=mt.subarray(n,n+e);let u;l.toString=()=>u||(u=ii.decode(l));let h=null;if(null===(h=r(o,l))||void 0===h)return-1;let c=li(h);if(c.length>0){const t=Yt(c,c.length);gt[s>>2]=t}return c.length}catch(t){return console.error(`error in markdown onCodeBlock callback: ${t.stack||t}`),-1}}),"iiiiii")):0;var r;let o=li(t),l=function(t){let i=t(ti),n=bt[ti>>2];if(0==n)return null;let e=mt.subarray(n,n+i);return e.heapAddr=n,e}((t=>function(t,i){const n=function(t){return t instanceof Uint8Array?t:new Uint8Array(t)}(t),e=n.length,s=Yt(n,e),r=i(s,e);return function(t){jt(t)}(s),r}(o,((i,r)=>qt(i,r,n,e,t,s)))));return i.onCodeBlock&&zt(s),function(){let t=function(){let t=Rt();if(0!=t){let i=Wt(),n=0!=i?UTF8ArrayToString(mt,i):"";return Ot(),new Qt(t,n)}}();if(t)throw t}(),i.bytes||i.asMemoryView?l:ii.decode(l)}(t)}));export{Y as MyElement};