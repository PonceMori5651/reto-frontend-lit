(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const z=globalThis,K=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),et=new WeakMap;let wt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&et.set(e,t))}return t}toString(){return this.cssText}};const Tt=r=>new wt(typeof r=="string"?r:r+"",void 0,Y),y=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new wt(e,r,Y)},Ut=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},st=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Tt(e)})(r):r;const{is:zt,defineProperty:Ht,getOwnPropertyDescriptor:Rt,getOwnPropertyNames:Lt,getOwnPropertySymbols:It,getPrototypeOf:jt}=Object,L=globalThis,it=L.trustedTypes,Dt=it?it.emptyScript:"",Bt=L.reactiveElementPolyfillSupport,O=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Dt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Ct=(r,t)=>!zt(r,t),rt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ht(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Rt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const l=i?.call(this);o?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,s=[...Lt(e),...It(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:q;this._$Em=i;const l=n.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){const n=this.constructor;if(i===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Ct)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:n}=o,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[O("elementProperties")]=new Map,E[O("finalized")]=new Map,Bt?.({ReactiveElement:E}),(L.reactiveElementVersions??=[]).push("2.1.2");const G=globalThis,ot=r=>r,H=G.trustedTypes,nt=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,xt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+b,Vt=`<${Et}>`,C=document,M=()=>C.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",J=Array.isArray,Wt=r=>J(r)||typeof r?.[Symbol.iterator]=="function",D=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,lt=/>/g,_=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,ct=/"/g,St=/^(?:script|style|textarea|title)$/i,qt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=qt(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),dt=new WeakMap,w=C.createTreeWalker(C,129);function Pt(r,t){if(!J(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}const Kt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let l=0;l<e;l++){const a=r[l];let c,u,h=-1,d=0;for(;d<a.length&&(n.lastIndex=d,u=n.exec(a),u!==null);)d=n.lastIndex,n===k?u[1]==="!--"?n=at:u[1]!==void 0?n=lt:u[2]!==void 0?(St.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=_):u[3]!==void 0&&(n=_):n===_?u[0]===">"?(n=i??k,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?_:u[3]==='"'?ct:ht):n===ct||n===ht?n=_:n===at||n===lt?n=k:(n=_,i=void 0);const p=n===_&&r[l+1].startsWith("/>")?" ":"";o+=n===k?a+Vt:h>=0?(s.push(c),a.slice(0,h)+xt+a.slice(h)+b+p):a+b+(h===-2?l:p)}return[Pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,u]=Kt(t,e);if(this.el=U.createElement(c,s),w.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=w.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(xt)){const d=u[n++],p=i.getAttribute(h).split(b),m=/([.?@])?(.*)/.exec(d);a.push({type:1,index:o,name:m[2],strings:p,ctor:m[1]==="."?Gt:m[1]==="?"?Jt:m[1]==="@"?Qt:I}),i.removeAttribute(h)}else h.startsWith(b)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(St.test(i.tagName)){const h=i.textContent.split(b),d=h.length-1;if(d>0){i.textContent=H?H.emptyScript:"";for(let p=0;p<d;p++)i.append(h[p],M()),w.nextNode(),a.push({type:2,index:++o});i.append(h[d],M())}}}else if(i.nodeType===8)if(i.data===Et)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){const s=C.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){if(t===x)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=T(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class Yt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);w.currentNode=i;let o=w.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new P(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Zt(o,this,t)),this._$AV.push(c),a=s[++l]}n!==a?.index&&(o=w.nextNode(),n++)}return w.currentNode=C,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),T(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(Pt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new Yt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new U(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new P(this.O(M()),this.O(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=ot(t).nextSibling;ot(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=S(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=S(this,l[s+a],e,a),c===x&&(c=this._$AH[a]),n||=!T(c)||c!==this._$AH[a],c===g?t=g:t!==g&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Gt extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Jt extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Qt extends I{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??g)===x)return;const s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Zt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Xt={I:P},te=G.litHtmlPolyfillSupport;te?.(U,P),(G.litHtmlVersions??=[]).push("3.3.2");const ee=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new P(t.insertBefore(M(),o),o,void 0,e??{})}return i._$AI(r),i};const Q=globalThis;let $=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ee(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});const se=Q.litElementPolyfillSupport;se?.({LitElement:$});(Q.litElementVersions??=[]).push("4.2.2");class ie extends ${static get properties(){return{title:{type:String},iterable:{type:Array}}}constructor(){super(),this.iterable=[]}static styles=[y`
            :host {
                display: block;
                text-align: center;
            }

            .title {
                font-size: 1.4rem;
                font-weight: 600;
                color: #111827;
                margin-top: 4rem;
                display: inline-block;
                margin-right: 20px;
            }

            .select-wrapper {
                position: relative;
                width: 260px;
                display: inline-block;
            }

            .select-wrapper select {
                width: 100%;
                padding: 0.6rem 2.4rem 0.6rem 0.8rem;
                font-size: 0.95rem;
                color: #111827;
                background-color: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 8px;

                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;

                cursor: pointer;
                transition: border-color 0.15s ease, box-shadow 0.15s ease;
            }

            .select-wrapper::after {
                content: "▾";
                position: absolute;
                right: 0.8rem;
                top: 50%;
                transform: translateY(-50%);
                pointer-events: none;
                color: #6b7280;
            }

            .select-wrapper select:focus {
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
            }

            .select-wrapper option[disabled] {
                color: #9ca3af;
            }
        `];selectChange(t){const e=t.target.value;this.selected=e,this.dispatchEvent(new CustomEvent("continent-selected",{detail:e,bubbles:!0,composed:!0}))}render(){return f`
            <h1 class="title">${this.title}</h1>
            <div class="select-wrapper">
                <select
                @change=${this.selectChange}>
                    <option value="" disabled selected>Selecciona un país</option>
                    ${this.iterable.map(t=>f`
                        <option value=${t.toLowerCase()}>
                            ${t}
                        </option>
                        `)}
                </select>
            </div>
        `}}customElements.define("title-filter",ie);async function re(r){return await(await fetch(`https://restcountries.com/v3.1/region/${r}`)).json()}function Z(r){let t=localStorage.getItem(r);if(t)try{return JSON.parse(t)}catch{return[]}return[]}function kt(r,t){localStorage.setItem(r,JSON.stringify(t))}const oe="favorite-countries";class ne extends ${static get properties(){return{countries:{type:Array},loading:{type:Boolean},continent:{type:Array},selectedCountry:{type:String},view:{type:String},favorites:{type:Array}}}constructor(){super(),this.countries=[],this.favorites=[],this.selectedCountry="",this.view="countries",this.loading=!0,this.continent=["Europe","America","Asia","Africa"]}static styles=[y`
            :host {
                display: block;
            }

            .title_nav {
                display: flex;
                justify-content: space-between;
                padding: 16px 32px;
                background-color: #ffffff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }

            .title_nav strong {
                font-size: 1.25rem;
                font-weight: 600;
            }

            .title_nav nav ul {
                list-style-type: none;
                display: flex;
                gap: 25px;
            }

            .title_nav nav ul li {
                color: #6b7280;
                cursor: pointer;
            }

            .title_nav nav ul li:hover {
                color: #2563eb;
            }
            .top {
                background-color: #111827;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                font-size: 0.85rem;
            }

            .top span {
                color: #fff;
                
            }

            .top a {
                text-decoration: none;
                color: #fff;
                cursor: pointer;
                opacity: 0.8;
            }

            .top a:hover {
                opacity: 1;
            }
        `];connectedCallback(){super.connectedCallback(),this.loadCountries()}selectedContinent(t){this.selectedCountry=t.detail,this.loadCountries(this.selectedCountry)}async loadCountries(t){if(!t){this.loading=!1;return}this.countries=await re(t),this.favorites=Z(oe),this.loading=!1}showCountries(){this.view="countries"}showFavorites(){this.view="favorites"}onFavoritesChanged(t){this.favorites=t.detail.favorites}getFavoriteCountries(){return this.countries.filter(t=>this.favorites.includes(t.cca3))}render(){return f`
            <div>
                <div class="top">
                    <span>🌎 Países de América · API restcountries</span>
                    <a href="https://poncemori5651.github.io/angular-peliculas/#/" target="_blank">GitHub (Último proyecto con Angular)</a>
                </div>
                <div class="title_nav">
                    <strong>🌍Reto FrontEnd</strong>
                    <nav>
                        <ul>
                            <li @click=${this.showCountries}>Inicio</li>
                            <li @click=${this.showFavorites}>Favoritos</li>
                        </ul>
                    </nav>
                </div>
            </div>
            ${this.loading?f`<app-loader .active=${this.loading}></app-loader>`:f`
            <title-filter 
            title="Países de: " 
            .iterable=${this.continent}
            @continent-selected=${this.selectedContinent}
            ></title-filter>
            ${this.view==="countries"?f`
                <country-list 
                .countries=${this.countries}
                .pageSize=${12}
                @favorites-changed=${this.onFavoritesChanged}
                ></country-list>
            `:f`
                <favorite-list 
                .favoritesComplete=${this.getFavoriteCountries()}
                .pageSize=${12}
                @favorites-changed=${this.onFavoritesChanged}
                ></favorite-list>
                `}
            `}
        `}}customElements.define("app-root",ne);class ae extends ${static get properties(){return{active:{type:Boolean}}}constructor(){super(),this.active=!0}static styles=[y`
            :host {
                display: block;
            }
            .overlay {
            position: fixed;
            inset: 0;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            }

            .spinner {
            width: 50px;
            height: 50px;
            border: 6px solid #ddd;
            border-top-color: #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            }

            @keyframes spin {
            to {
                transform: rotate(360deg);
                }
            }
        `];render(){return f`
            ${this.active?f`
                <div class="overlay">
                    <div class="spinner"></div>
                </div>
                `:f``}
                `}}customElements.define("app-loader",ae);class le extends ${static get properties(){return{country:{type:Object},isFavorite:{type:Boolean}}}constructor(){super(),this.country={},this.isFavorite=!1}static styles=[y`
            :host {
                display: block;
                animation: fadeIn 300ms ease-out;
            }

            .card {
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.08);
                overflow: hidden;
                transition: transform 0.2s ease;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }

            .card:hover {
                transform: translateY(-4px);
            }

            img {
                width: 150px;
                height: 120px;
                object-fit: cover;
            }

            .content {
                padding: 12px;
            }

            h3 {
                margin: 0 0 8px;
                font-size: 1rem;
            }

            p {
                margin: 4px 0;
                font-size: 0.85rem;
                color: #555;
            }

            button {
                margin-top: 8px;
                width: 50%;
                padding: 6px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                font-size: 0.85rem;
                background: var(--primary, #1e90ff);
                color: white;
            }

            button.fav {
                background: crimson;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

        `];markFavorite(){this.isFavorite=!this.isFavorite,this.dispatchEvent(new CustomEvent("favorite-mark",{detail:{country:this.country,favorite:this.isFavorite},bubbles:!0,composed:!0}))}render(){return this.country?.name?f`
        <div class="card">
            <img
            src="${this.country.flags?.png}"
            alt="Bandera de ${this.country.name.common}"
            />

            <div class="content">
                <h3>${this.country.name.common}</h3>

                <p><strong>Población:</strong>
                    ${this.country.population?.toLocaleString()}
                </p>

                <p><strong>Capital:</strong>
                    ${this.country.capital?.[0]||"—"}
                </p>
            </div>
            <button
                class="${this.isFavorite?"fav":""}"
                @click=${this.markFavorite}
            >${this.isFavorite?"Quitar favorito":"Agregar favorito"}
            </button>
        </div>
        `:null}}customElements.define("country-card",le);const X={CHILD:2},Nt=r=>(...t)=>({_$litDirective$:r,values:t});let Ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:he}=Xt,pt=r=>r,ce=r=>r.strings===void 0,ut=()=>document.createComment(""),N=(r,t,e)=>{const s=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){const o=s.insertBefore(ut(),i),n=s.insertBefore(ut(),i);e=new he(o,n,r,r.options)}else{const o=e._$AB.nextSibling,n=e._$AM,l=n!==r;if(l){let a;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(a=r._$AU)!==n._$AU&&e._$AP(a)}if(o!==i||l){let a=e._$AA;for(;a!==o;){const c=pt(a).nextSibling;pt(s).insertBefore(a,i),a=c}}}return e},A=(r,t,e=r)=>(r._$AI(t,e),r),de={},pe=(r,t=de)=>r._$AH=t,ue=r=>r._$AH,B=r=>{r._$AR(),r._$AA.remove()};const ft=(r,t,e)=>{const s=new Map;for(let i=t;i<=e;i++)s.set(r[i],i);return s},Ft=Nt(class extends Ot{constructor(r){if(super(r),r.type!==X.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const i=[],o=[];let n=0;for(const l of r)i[n]=s?s(l,n):n,o[n]=e(l,n),n++;return{values:o,keys:i}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,s]){const i=ue(r),{values:o,keys:n}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=n,o;const l=this.ut??=[],a=[];let c,u,h=0,d=i.length-1,p=0,m=o.length-1;for(;h<=d&&p<=m;)if(i[h]===null)h++;else if(i[d]===null)d--;else if(l[h]===n[p])a[p]=A(i[h],o[p]),h++,p++;else if(l[d]===n[m])a[m]=A(i[d],o[m]),d--,m--;else if(l[h]===n[m])a[m]=A(i[h],o[m]),N(r,a[m+1],i[h]),h++,m--;else if(l[d]===n[p])a[p]=A(i[d],o[p]),N(r,i[h],i[d]),d--,p++;else if(c===void 0&&(c=ft(n,p,m),u=ft(l,h,d)),c.has(l[h]))if(c.has(l[d])){const v=u.get(n[p]),j=v!==void 0?i[v]:null;if(j===null){const tt=N(r,i[h]);A(tt,o[p]),a[p]=tt}else a[p]=A(j,o[p]),N(r,i[h],j),i[v]=null;p++}else B(i[d]),d--;else B(i[h]),h++;for(;p<=m;){const v=N(r,a[m+1]);A(v,o[p]),a[p++]=v}for(;h<=d;){const v=i[h++];v!==null&&B(v)}return this.ut=n,pe(r,a),x}}),gt="favorite-countries";class fe extends ${static get properties(){return{countries:{type:Array},countriesFilter:{type:Array},favorites:{type:Array},searchTerm:{type:String},page:{type:Number},pageSize:{type:Number}}}constructor(){super(),this.countries=[],this.countriesFilter=[],this.searchTerm="",this.favorites=[],this.page=1,this.pageSize=12}connectedCallback(){super.connectedCallback(),this.favorites=Z(gt),this.addEventListener("search-change",t=>{this.searchTerm=t.detail.toLowerCase(),this.page=1,this.applyFilters()})}static styles=[y`
            :host {
                display: block;
                margin: 80px 200px;
            }

            h2 {
                margin-bottom: 16px;
                font-size: 1.8rem;
                text-align: center;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }
        `];willUpdate(t){t.has("countries")&&(this.page=1,this.applyFilters())}applyFilters(){let t=[...this.countries];this.searchTerm&&(t=t.filter(e=>e.name.common.toLowerCase().includes(this.searchTerm))),this.countriesFilter=t}onFavoriteMark(t){const{country:e,favorite:s}=t.detail,i=e.cca3;s?this.favorites.includes(i)||(this.favorites=[...this.favorites,i]):this.favorites=this.favorites.filter(o=>o!==i),kt(gt,this.favorites),this.dispatchEvent(new CustomEvent("favorites-changed",{detail:{favorites:this.favorites,source:"country-list"},bubbles:!0,composed:!0}))}totalPages(){return Math.ceil(this.countriesFilter.length/this.pageSize)}get paginatedCountries(){const t=(this.page-1)*this.pageSize;return this.countriesFilter.slice(t,t+this.pageSize)}onPageChanged(t){this.page=t.detail.page}render(){return f`
        <h2>Todos los países (por Continente)</h2>
        <country-search></country-search>
        ${this.countriesFilter.length?f`
        <div class="grid">
            ${Ft(this.paginatedCountries,t=>t.cca3,t=>f`
            <country-card
                .country=${t}
                .isFavorite=${this.favorites.includes(t.cca3)}
                @favorite-mark=${this.onFavoriteMark}
            ></country-card>
            `)}
        </div>
        <pagination-controls
            .page=${this.page}
            .totalPages=${this.totalPages()}
            @page-changed=${this.onPageChanged}
        ></pagination-controls>
        `:f`
        <empty-state
          title="No hay países"
          description="Seleccione el continente para mostrar los países"
          icon="✘">
        ></empty-state>`}
        `}}customElements.define("country-list",fe);const F=(r,t)=>{const e=r._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),F(s,t);return!0},R=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while(e?.size===0)},Mt=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),$e(t)}};function ge(r){this._$AN!==void 0?(R(this),this._$AM=r,Mt(this)):this._$AM=r}function me(r,t=!1,e=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)F(s[o],!1),R(s[o]);else s!=null&&(F(s,!1),R(s));else F(this,r)}const $e=r=>{r.type==X.CHILD&&(r._$AP??=me,r._$AQ??=ge)};class ve extends Ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(F(this,t),R(this))}setValue(t){if(ce(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const ye=new WeakMap;let mt=0;const V=new Map,$t=new WeakSet,vt=()=>new Promise(r=>requestAnimationFrame(r)),yt=(r,t)=>{const e=r-t;return e===0?void 0:e},bt=(r,t)=>{const e=r/t;return e===1?void 0:e},W={left:(r,t)=>{const e=yt(r,t);return{value:e,transform:e==null||isNaN(e)?void 0:`translateX(${e}px)`}},top:(r,t)=>{const e=yt(r,t);return{value:e,transform:e==null||isNaN(e)?void 0:`translateY(${e}px)`}},width:(r,t)=>{let e;t===0&&(t=1,e={width:"1px"});const s=bt(r,t);return{value:s,overrideFrom:e,transform:s==null||isNaN(s)?void 0:`scaleX(${s})`}},height:(r,t)=>{let e;t===0&&(t=1,e={height:"1px"});const s=bt(r,t);return{value:s,overrideFrom:e,transform:s==null||isNaN(s)?void 0:`scaleY(${s})`}}},be={duration:333,easing:"ease-in-out"},_e=["left","top","width","height","opacity","color","background"],_t=new WeakMap;class Ae extends ve{constructor(t){if(super(t),this.t=!1,this.i=null,this.o=null,this.h=!0,this.shouldLog=!1,t.type===X.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){this.resolveFinished?.(),this.finished=new Promise(t=>{this.l=t})}async resolveFinished(){this.l?.(),this.l=void 0}render(t){return g}getController(){return ye.get(this.u)}isDisabled(){return this.options.disabled||this.getController()?.disabled}update(t,[e]){const s=this.u===void 0;return s&&(this.u=t.options?.host,this.u.addController(this),this.u.updateComplete.then(i=>this.t=!0),this.element=t.element,_t.set(this.element,this)),this.optionsOrCallback=e,(s||typeof e!="function")&&this.m(e),this.render(e)}m(t){t=t??{};const e=this.getController();e!==void 0&&((t={...e.defaultOptions,...t}).keyframeOptions={...e.defaultOptions.keyframeOptions,...t.keyframeOptions}),t.properties??=_e,this.options=t}p(){const t={},e=this.element.getBoundingClientRect(),s=getComputedStyle(this.element);return this.options.properties.forEach(i=>{const o=e[i]??(W[i]?void 0:s[i]),n=Number(o);t[i]=isNaN(n)?o+"":n}),t}v(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((s,i)=>{if(Array.isArray(s)){if(Array.isArray(i)&&i.length===s.length&&s.every((o,n)=>o===i[n]))return!1}else if(i===s)return!1;return!0})(t,this._)),this.h=this.t&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.h&&(this._=Array.isArray(t)?Array.from(t):t),this.h}hostUpdate(){typeof this.optionsOrCallback=="function"&&this.m(this.optionsOrCallback()),this.v()&&(this.A=this.p(),this.i=this.i??this.element.parentNode,this.o=this.element.nextSibling)}async hostUpdated(){if(!this.h||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await vt;const e=this.P(),s=this.V(this.options.keyframeOptions,e),i=this.p();if(this.A!==void 0){const{from:o,to:n}=this.O(this.A,i,e);this.log("measured",[this.A,i,o,n]),t=this.calculateKeyframes(o,n)}else{const o=V.get(this.options.inId);if(o){V.delete(this.options.inId);const{from:n,to:l}=this.O(o,i,e);t=this.calculateKeyframes(n,l),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,mt++,t.forEach(a=>a.zIndex=mt)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,s)}resetStyles(){this.j!==void 0&&(this.element.setAttribute("style",this.j??""),this.j=void 0)}commitStyles(){this.j=this.element.getAttribute("style"),this.webAnimation?.commitStyles(),this.webAnimation?.cancel()}reconnected(){}async disconnected(){if(!this.h||(this.options.id!==void 0&&V.set(this.options.id,this.A),this.options.out===void 0))return;if(this.prepare(),await vt(),this.i?.isConnected){const e=this.o&&this.o.parentNode===this.i?this.o:null;if(this.i.insertBefore(this.element,e),this.options.stabilizeOut){const s=this.p();this.log("stabilizing out");const i=this.A.left-s.left,o=this.A.top-s.top;getComputedStyle(this.element).position!=="static"||i===0&&o===0||(this.element.style.position="relative"),i!==0&&(this.element.style.left=i+"px"),o!==0&&(this.element.style.top=o+"px")}}const t=this.V(this.options.keyframeOptions);await this.animate(this.options.out,t),this.element.remove()}prepare(){this.createFinished()}start(){this.options.onStart?.(this)}didFinish(t){t&&this.options.onComplete?.(this),this.A=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}P(){const t=[];for(let e=this.element.parentNode;e;e=e?.parentNode){const s=_t.get(e);s&&!s.isDisabled()&&s&&t.push(s)}return t}get isHostRendered(){const t=$t.has(this.u);return t||this.u.updateComplete.then(()=>{$t.add(this.u)}),t}V(t,e=this.P()){const s={...be};return e.forEach(i=>Object.assign(s,i.options.keyframeOptions)),Object.assign(s,t),s}O(t,e,s){t={...t},e={...e};const i=s.map(l=>l.animatingProperties).filter(l=>l!==void 0);let o=1,n=1;return i.length>0&&(i.forEach(l=>{l.width&&(o/=l.width),l.height&&(n/=l.height)}),t.left!==void 0&&e.left!==void 0&&(t.left=o*t.left,e.left=o*e.left),t.top!==void 0&&e.top!==void 0&&(t.top=n*t.top,e.top=n*e.top)),{from:t,to:e}}calculateKeyframes(t,e,s=!1){const i={},o={};let n=!1;const l={};for(const a in e){const c=t[a],u=e[a];if(a in W){const h=W[a];if(c===void 0||u===void 0)continue;const d=h(c,u);d.transform!==void 0&&(l[a]=d.value,n=!0,i.transform=`${i.transform??""} ${d.transform}`,d.overrideFrom!==void 0&&Object.assign(i,d.overrideFrom))}else c!==u&&c!==void 0&&u!==void 0&&(n=!0,i[a]=c,o[a]=u)}return i.transformOrigin=o.transformOrigin=s?"center center":"top left",this.animatingProperties=l,n?[i,o]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let s=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,e]),s=!0,this.webAnimation=this.element.animate(t,e);const i=this.getController();i?.add(this);try{await this.webAnimation.finished}catch{}i?.remove(this)}return this.didFinish(s),s}isAnimating(){return this.webAnimation?.playState==="running"||this.webAnimation?.pending}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}const we=Nt(Ae),At="favorite-countries";class Ce extends ${static get properties(){return{favorites:{type:Array},favoritesComplete:{type:Array},favoritesFilter:{type:Array},searchTerm:{type:String},page:{type:Number},pageSize:{type:Number}}}constructor(){super(),this.favorites=[],this.favoritesComplete=[],this.favoritesFilter=[],this.searchTerm="",this.page=1,this.pageSize=12}connectedCallback(){super.connectedCallback(),this.favorites=Z(At),this.addEventListener("search-change",t=>{this.searchTerm=t.detail.toLowerCase(),this.page=1,this.applyFilters()})}static styles=[y`
            :host {
                display: block;
                margin: 80px 200px;
            }
            h2 {
                margin-bottom: 16px;
                font-size: 1.8rem;
                text-align: center;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }
        `];willUpdate(t){t.has("favoritesComplete")&&(this.page=1,this.applyFilters())}applyFilters(){let t=[...this.favoritesComplete];this.searchTerm&&(t=t.filter(e=>e.name.common.toLowerCase().includes(this.searchTerm))),this.favoritesFilter=t}onFavoriteMark(t){const{country:e,favorite:s}=t.detail,i=e.cca3;s&&!this.favorites.includes(i)&&(this.favorites=[...this.favorites,i]),s||(this.favorites=this.favorites.filter(o=>o!==i)),kt(At,this.favorites),this.dispatchEvent(new CustomEvent("favorites-changed",{detail:{favorites:this.favorites,source:"favorite-list"},bubbles:!0,composed:!0}))}totalPages(){return Math.ceil(this.favoritesFilter.length/this.pageSize)}get paginatedFavorites(){const t=(this.page-1)*this.pageSize;return this.favoritesFilter.slice(t,t+this.pageSize)}onPageChanged(t){this.page=t.detail.page}render(){return f`
            <h2>⭐ Países favoritos</h2>
            <country-search></country-search>
            ${this.favoritesFilter.length?f`            
            <div class="grid">
            ${Ft(this.paginatedFavorites,t=>t.cca3,t=>f`
                <country-card
                    ${we()}
                    .country=${t}
                    .isFavorite=${!0}
                    @favorite-mark=${this.onFavoriteMark}
                ></country-card>
                `)}
            </div>
            <pagination-controls
                .page=${this.page}
                .totalPages=${this.totalPages()}
                @page-changed=${this.onPageChanged}
            ></pagination-controls>
            `:f`
                <empty-state
                    title="No hay favoritos"
                    description="Agrega países a favoritos para verlos aquí"
                    icon="✘">
                ></empty-state>
            `}
        `}}customElements.define("favorite-list",Ce);class xe extends ${static get properties(){return{title:{type:String},description:{type:String},icon:{type:String}}}constructor(){super(),this.title="No hay información",this.description="No se encontraron datos para mostrar",this.icon="✘"}static styles=[y`
            :host {
                display: block;
            }
            .container {
                padding: 2rem;
                text-align: center;
                color: #6b7280;
            }

            .icon {
                font-size: 3rem;
                margin-bottom: 1rem;
            }

            h2 {
                margin: 0;
                font-size: 1.25rem;
                color: #374151;
            }

            p {
                margin-top: 0.5rem;
                font-size: 0.95rem;
            }
        `];render(){return f`
        <div class="container">
            <div class="icon">${this.icon}</div>
            <h2>${this.title}</h2>
            <p>${this.description}</p>
        </div>
        `}}customElements.define("empty-state",xe);class Ee extends ${static get properties(){return{value:{type:String}}}constructor(){super(),this.value=""}static styles=[y`
            :host {
                display: block;
                max-width: 400px;
                margin: 1rem auto;
            }
            .search-container {
                display: flex;
                gap: 0.5rem;
            }

            input {
                flex: 1;
                padding: 0.75rem 1rem;
                font-size: 1rem;
                border-radius: 8px;
                border: 1px solid #ccc;
                outline: none;
            }

            input:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
            }

            button {
                padding: 0 1rem;
                border-radius: 8px;
                border: none;
                background-color: #ef4444;
                color: white;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s ease, transform 0.1s ease;
            }

            button:hover {
                background-color: #dc2626;
            }

            button:active {
                transform: scale(0.95);
            }

            button:disabled {
                background-color: #fca5a5;
                cursor: not-allowed;
            }
        `];onInput(t){const e=t.target.value;this.value=e,this.dispatchEvent(new CustomEvent("search-change",{detail:this.value,bubbles:!0,composed:!0}))}clear(){this.value="",this.dispatchEvent(new CustomEvent("search-change",{detail:"",bubbles:!0,composed:!0}))}render(){return f`
        <div class="search-container">
            <input
                type="text"
                placeholder="Buscar país..."
                .value=${this.value}
                @input=${this.onInput}
            />
            <button
                @click=${this.clear}
                ?disabled=${!this.value}
            >
                Limpiar
            </button>
        </div>
        `}}customElements.define("country-search",Ee);class Se extends ${static get properties(){return{page:{type:Number},totalPages:{type:Number}}}constructor(){super(),this.page=1,this.totalPages=1}static styles=[y`
            :host {
                display: flex;
                justify-content: center;
                margin: 24px 0;
            }
            .pagination {
                display: flex;
                gap: 8px;
                align-items: center;
            }

            button {
                padding: 6px 12px;
                border: none;
                border-radius: 6px;
                background: #eee;
                cursor: pointer;
            }

            button:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }

            .active {
                background: #1e90ff;
                color: white;
                font-weight: bold;
            }
        `];changePage(t){t<1||t>this.totalPages||this.dispatchEvent(new CustomEvent("page-changed",{detail:{page:t},bubbles:!0,composed:!0}))}render(){return f`
        <div class="pagination">
            <button
            ?disabled=${this.page===1}
            @click=${()=>this.changePage(this.page-1)}
            >
            ◀
            </button>

            ${Array.from({length:this.totalPages},(t,e)=>{const s=e+1;return f`
                <button
                class=${this.page===s?"active":""}
                @click=${()=>this.changePage(s)}
                >
                ${s}
                </button>
            `})}

            <button
            ?disabled=${this.page===this.totalPages}
            @click=${()=>this.changePage(this.page+1)}
            >
            ▶
            </button>
        </div>
        `}}customElements.define("pagination-controls",Se);
