/*! For license information please see CodeBlock.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={1527:(e,t,n)=>{n.d(t,{A:()=>r}),n(1078);class r{static get isReadOnlySupported(){return!0}static get displayInToolbox(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>',title:"Raw HTML"}}constructor({data:e,config:t,api:n,readOnly:o}){this.api=n,this.readOnly=o,this.placeholder=t.placeholder||r.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-rawtool",textarea:"ce-rawtool__textarea"},this.data={html:e.html||""},this.textarea=null,this.resizeDebounce=null}render(){const e=document.createElement("div");return this.textarea=document.createElement("textarea"),e.classList.add(this.CSS.baseClass,this.CSS.wrapper),this.textarea.classList.add(this.CSS.textarea,this.CSS.input),this.textarea.textContent=this.data.html,this.textarea.placeholder=this.placeholder,this.readOnly?this.textarea.disabled=!0:this.textarea.addEventListener("input",(()=>{this.onInput()})),e.appendChild(this.textarea),setTimeout((()=>{this.resize()}),100),e}save(e){return{html:e.querySelector("textarea").value}}static get DEFAULT_PLACEHOLDER(){return"Enter HTML code"}static get sanitize(){return{html:!0}}onInput(){this.resizeDebounce&&clearTimeout(this.resizeDebounce),this.resizeDebounce=setTimeout((()=>{this.resize()}),200)}resize(){this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px"}}},4284:(e,t,n)=>{n.d(t,{default:()=>j});var r=n(1527),o=(n(1078),n(5072)),i=n.n(o),a=n(7825),c=n.n(a),l=n(7659),u=n.n(l),s=n(5056),f=n.n(s),p=n(540),d=n.n(p),v=n(1113),h=n.n(v),y=n(501),m={};function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function w(e){var t=function(e){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}function x(e,t,n){return t=C(t),function(e,t){if(t&&("object"==b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,S()?Reflect.construct(t,n||[],C(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(null,arguments)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}m.styleTagTransform=h(),m.setAttributes=f(),m.insert=u().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=d(),i()(y.A,m),y.A&&y.A.locals&&y.A.locals;var j=function(e){function t(e){var n,r=e.data,o=e.config,i=e.api,a=e.readOnly;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,t,[{data:r,config:o,api:i,readOnly:a}])).editor=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(t,e),n=t,r=[{key:"render",value:function(){var e,n,r,o=(e=t,n=this,"function"==typeof(r=O(C(1&3?e.prototype:e),"render",n))?function(e){return r.apply(n,e)}:r)([]);return this.editor=this.transformTextareaToAce(),this.editor.on("focus",(function(){o.classList.add("ce-rawtool-focus")})),this.editor.on("blur",(function(){o.classList.remove("ce-rawtool-focus")})),o}},{key:"save",value:function(e){return{html:e.querySelector("textarea.ce-rawtool__textarea").value}}},{key:"transformTextareaToAce",value:function(){var e=$(this.textarea),t=$("<div>",{position:"absolute",width:"100%",class:"aceInsideEditorJs"}).insertAfter(e);e.css("display","none");var n=ace.edit(t[0]);return n.renderer.setShowGutter(!1),n.getSession().setValue(e.val()||""),n.getSession().setMode("ace/mode/twig"),n.setFontSize("16px"),n.container.style.lineHeight="1.5em",n.renderer.updateFontSize(),n.setOptions({maxLines:1/0}),n.session.setTabSize(2),n.getSession().on("change",(function(){e&&e.val(n.getSession().getValue()||"")})),n.renderer.setScrollMargin(10,10),n.focus(),setTimeout((function(){n.focus()}),1),n.commands.removeCommand("find"),n}}],o=[{key:"conversionConfig",get:function(){return{export:"html",import:"html"}}},{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">\n    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>\n</svg>',title:"Raw"}}}],r&&g(n.prototype,r),o&&g(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,o}(r.A)},3511:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),o=n.n(r),i=n(6314),a=n.n(i)()(o());a.push([e.id,".ce-rawtool__textarea {\n  min-height: 200px;\n  resize: vertical;\n  border-radius: 8px;\n  border: 0;\n  background-color: #1e2128;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 12px;\n  line-height: 1.6;\n  letter-spacing: -0.2px;\n  color: #a1a7b6;\n  overscroll-behavior: contain;\n}\n",""]);const c=a},501:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),o=n.n(r),i=n(6314),a=n.n(i)()(o());a.push([e.id,".aceFsBtn {\n  display: none;\n  color: black;\n}\n@media screen and (min-width: 1200px) {\n  .ce-rawtool-focus {\n    width: calc(100vw - 220px - 28vw);\n  }\n}\n\nselect.CodeBlock_language {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n",""]);const c=a},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},1601:e=>{e.exports=function(e){return e[1]}},1078:(e,t,n)=>{var r=n(5072),o=n.n(r),i=n(7825),a=n.n(i),c=n(7659),l=n.n(c),u=n(5056),s=n.n(u),f=n(540),p=n.n(f),d=n(1113),v=n.n(d),h=n(3511),y={};y.styleTagTransform=v(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),o()(h.A,y),h.A&&h.A.locals&&h.A.locals},5072:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],u=r.base?l[0]+r.base:l[0],s=i[u]||0,f="".concat(u," ").concat(s);i[u]=s+1;var p=n(f),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var v=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:v,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=r(e,o),u=0;u<i.length;u++){var s=n(i[u]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},7659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}n.d(r,{default:()=>g}),n(1527);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,n=[{key:"element",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);for(var a in Array.isArray(n)?(t=o.classList).add.apply(t,i(n)):n&&o.classList.add(n),r)o.setAttribute(a,r[a]);return o}},{key:"input",value:function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=e.element("div",n,{contentEditable:!t.readOnly});return i.dataset.placeholder=t.api.i18n.t(r),o&&(i.textContent=o),i}},{key:"option",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=document.createElement("option");for(var i in o.text=n||t,o.value=t,r)o.setAttribute(i,r[i]);e.add(o)}},{key:"options",value:function(t,n){n.forEach((function(n){return e.option(t,n)}))}},{key:"fileButtons",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.element("div",["flex","cdx-input-labeled-preview","cdx-input-labeled","cdx-input","cdx-input-editable"].concat(i(n))),o=e.element("div",[t.api.styles.button]);if(o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>\n '+t.api.i18n.t("Select"),o.addEventListener("click",(function(e){return t.onSelectFile(t,e)})),r.appendChild(o),t.onUploadFile){var a=e.element("div",[t.api.styles.button]);a.innerHTML="".concat('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>\n'," ").concat(t.api.i18n.t("Upload")),a.style.marginLeft="-2px",a.addEventListener("click",(function(e){return t.onUploadFile(t,e)})),r.appendChild(a)}return r}},{key:"switchInput",value:function(t,n){var r=e.element("div","editor-switch"),o=e.element("input",null,{type:"checkbox",id:t}),i=e.element("label","label-default",{for:t}),a=e.element("label","",{for:t});return a.innerHTML=n,r.append(o,i,a),r}}],null&&c(t.prototype,null),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e){if("object"!=s(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}function d(e,t,n){return t=m(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,v()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function h(e,t,n,r){var o=y(m(1&r?e.prototype:e),t,n);return 2&r&&"function"==typeof o?function(e){return o.apply(n,e)}:o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(null,arguments)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var g=function(e){function t(e){var n,r=e.data,o=e.config,i=e.api,a=e.readOnly;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,t,[{data:r,config:o,api:i,readOnly:a}])).data={html:r.html||"",language:r.language||"html"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),n=t,o=[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">\n    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>\n</svg>',title:"Raw"}}}],(r=[{key:"render",value:function(){var e=this,n=h(t,"render",this,3)([]),r=u.element("select","CodeBlock_language");return u.options(r,["html","javascript","php"]),r.value=this.data.language,r.addEventListener("change",(function(t){e.editor.getSession().setMode("ace/mode/"+t.target.value),e.data.language=t.target.value})),n.appendChild(r),n}},{key:"transformTextareaToAce",value:function(){return this.editor=h(t,"transformTextareaToAce",this,3)([]),this.editor.renderer.setShowGutter(!0),this.editor}},{key:"save",value:function(e){return this.data={html:e.querySelector("textarea.ce-rawtool__textarea").value,language:this.data.language},console.log(this.data),this.data}}])&&f(n.prototype,r),o&&f(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,o}(n(4284).default);return r.default})()));