!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={7289:(e,t,n)=>{n.d(t,{default:()=>j});var r=n(5072),o=n.n(r),i=n(7825),a=n.n(i),c=n(7659),u=n.n(c),s=n(5056),l=n.n(s),f=n(540),p=n.n(f),d=n(1113),v=n.n(d),y=n(9160),m={};m.styleTagTransform=v(),m.setAttributes=l(),m.insert=u().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p();o()(y.A,m);y.A&&y.A.locals&&y.A.locals;function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function O(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==b(t)?t:t+""}var j=function(){return e=function e(t){var n=t.api,r=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.wrapper=null,this.editorInstance={},this.html=void 0===r.html?"":r.html},t=[{key:"render",value:function(){var e=this;this.wrapper=document.createElement("div"),this.wrapper.classList.add("editorjs-monaco-wrapper");var t=document.createElement("div");t.classList.add("editorjs-monaco-editor"),t.style.height="100%",this.wrapper.appendChild(t);var n=window.monaco,r=window.monacoHelper;this.editorInstance=n.editor.create(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:this.html,language:"twig"},r.defaultSettings));var o=new r(this.editorInstance);return o.updateHeight(this.wrapper),this.editorInstance.onDidChangeModelContent((function(){o.updateHeight(e.wrapper),o.autocloseTag()})),this.wrapper}},{key:"save",value:function(){return this.html=this.editorInstance.getValue(),{html:this.html}}}],n=[{key:"enableLineBreaks",get:function(){return!0}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">\n    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>\n</svg>',title:"Raw"}}}],t&&w(e.prototype,t),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n}()},8322:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),o=n.n(r),i=n(6314),a=n.n(i)()(o());a.push([e.id,".ce-rawtool__textarea {\n  min-height: 200px;\n  resize: vertical;\n  border-radius: 8px;\n  border: 0;\n  background-color: #1e2128;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 12px;\n  line-height: 1.6;\n  letter-spacing: -0.2px;\n  color: #a1a7b6;\n  overscroll-behavior: contain;\n}\n",""]);const c=a},9160:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(1601),o=n.n(r),i=n(6314),a=n.n(i)()(o());a.push([e.id,".monaco-editor .margin {\n  display: none !important;\n}\n.monaco-editor .decorationsOverviewRuler {\n  display: none !important;\n}\n\n.monaco-editor {\n  z-index: 1;\n  --vscode-editor-background: #f3f4f6 !important;\n  --vscode-focusBorder: #f3f4f6 !important;\n}\n\n.monaco-editor .overflow-guard {\n  z-index: 1;\n}\n\n.my-content-that-overlays-editor {\n  z-index: 2;\n}\n\n.monaco-editor .overflowingContentWidget {\n  z-index: 3;\n}\n\n.editorjs-monaco-wrapper {\n  margin: 0.6em 0;\n  padding: 0.4em 0;\n  background-color: #f3f4f6;\n  border-radius: 5px;\n}\n",""]);const c=a},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},1601:e=>{e.exports=function(e){return e[1]}},5072:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var v=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:v,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},7659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};n.d(r,{default:()=>S});var o=n(5072),i=n.n(o),a=n(7825),c=n.n(a),u=n(7659),s=n.n(u),l=n(5056),f=n.n(l),p=n(540),d=n.n(p),v=n(1113),y=n.n(v),m=n(8322),b={};b.styleTagTransform=y(),b.setAttributes=f(),b.insert=s().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=d();i()(m.A,b);m.A&&m.A.locals&&m.A.locals;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function w(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==h(t)?t:t+""}function O(e,t,n){return t=x(t),function(e,t){if(t&&("object"==h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,j()?Reflect.construct(t,n||[],x(e).constructor):t.apply(e,n))}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),n=t,r&&g(n.prototype,r),o&&g(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r,o}(n(7289).default);return r=r.default})()));