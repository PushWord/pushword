!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=37)}({2:function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(p)):s.push({identifier:d,updater:g(p,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=l(t)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=l(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=c(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=o}}}},3:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},33:function(e,t,n){var r=n(2),i=n(34);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},34:function(e,t,n){(t=n(3)(!1)).push([e.i,'.cdx-nested-list {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  counter-reset: item;\n  list-style: none;\n}\n\n  .cdx-nested-list__item {\n    line-height: 1.6em;\n    display: flex;\n    margin: 2px 0;\n  }\n\n  .cdx-nested-list__item [contenteditable]{\n      outline: none;\n    }\n\n  .cdx-nested-list__item-body {\n      flex-grow: 2;\n    }\n\n  .cdx-nested-list__item-content,\n    .cdx-nested-list__item-children {\n      flex-basis: 100%;\n    }\n\n  .cdx-nested-list__item-content {\n      word-break: break-word;\n      white-space: pre-wrap;\n    }\n\n  .cdx-nested-list__item-children {}\n\n  .cdx-nested-list__item::before {\n      counter-increment: item;\n      margin-right: 5px;\n      white-space: nowrap;\n    }\n\n  .cdx-nested-list--ordered > .cdx-nested-list__item::before {\n    content: counters(item, ".") ". ";\n  }\n\n  .cdx-nested-list--unordered > .cdx-nested-list__item::before {\n    content: "•";\n  }\n\n  .cdx-nested-list__settings {\n    display: flex;\n  }\n\n  .cdx-nested-list__settings .cdx-settings-button {\n      width: 50%;\n    }\n',""]),e.exports=t},37:function(e,t,n){"use strict";function r(e,t=null,n={}){const r=document.createElement(e);Array.isArray(t)?r.classList.add(...t):t&&r.classList.add(t);for(const e in n)r[e]=n[e];return r}function i(e){const t=r("div");return t.appendChild(e),t.innerHTML}function o(e){let t;return e.nodeType!==Node.ELEMENT_NODE?t=e.textContent:(t=e.innerHTML,t=t.replaceAll("<br>","")),0===t.trim().length}n.r(t),n.d(t,"default",(function(){return m}));class s{constructor(){this.savedFakeCaret=void 0}save(){const e=s.range,t=r("span");t.hidden=!0,e.insertNode(t),this.savedFakeCaret=t}restore(){if(!this.savedFakeCaret)return;const e=window.getSelection(),t=new Range;t.setStartAfter(this.savedFakeCaret),t.setEndAfter(this.savedFakeCaret),e.removeAllRanges(),e.addRange(t),setTimeout(()=>{this.savedFakeCaret.remove()},150)}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static extractFragmentFromCaretPositionTillTheEnd(){const e=window.getSelection();if(!e.rangeCount)return;const t=e.getRangeAt(0);let n=t.startContainer;n.nodeType!==Node.ELEMENT_NODE&&(n=n.parentNode);const r=n.closest("[contenteditable]");t.deleteContents();const i=t.cloneRange();return i.selectNodeContents(r),i.setStart(t.endContainer,t.endOffset),i.extractContents()}static focus(e,t=!0){const n=document.createRange(),r=window.getSelection();n.selectNodeContents(e),n.collapse(t),r.removeAllRanges(),r.addRange(n)}static isAtStart(){const e=window.getSelection();if(e.focusOffset>0)return!1;const t=e.focusNode;return s.getHigherLevelSiblings(t,"left").every(e=>o(e))}static getHigherLevelSiblings(e,t="left"){let n=e;const r=[];for(;n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;const i="left"===t?"previousSibling":"nextSibling";for(;n[i];)n=n[i],r.push(n);return r}}n(33);class a{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',title:"List"}}constructor({data:e,config:t,api:n,readOnly:r}){this.nodes={wrapper:null},this.api=n,this.readOnly=r,this.config=t,this.settings=[{name:"unordered",title:this.api.i18n.t("Unordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',default:!1},{name:"ordered",title:this.api.i18n.t("Ordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',default:!0}],this.defaultListStyle="ordered";const i={style:this.defaultListStyle,items:[]};this.data=e&&Object.keys(e).length?e:i,this.caret=new s}render(){return this.nodes.wrapper=this.makeListWrapper(this.data.style,[this.CSS.baseBlock]),this.data.items.length?this.appendItems(this.data.items,this.nodes.wrapper):this.appendItems([{content:"",items:[]}],this.nodes.wrapper),this.readOnly||this.nodes.wrapper.addEventListener("keydown",e=>{switch(e.key){case"Enter":this.enterPressed(e);break;case"Backspace":this.backspace(e);break;case"Tab":e.shiftKey?this.shiftTab(e):this.addTab(e)}},!1),this.nodes.wrapper}renderSettings(){const e=r("div",[this.CSS.settingsWrapper],{});return this.settings.forEach(t=>{const n=r("div",this.CSS.settingsButton,{innerHTML:t.icon});n.addEventListener("click",()=>{this.listStyle=t.name;const e=n.parentNode.querySelectorAll("."+this.CSS.settingsButton);Array.from(e).forEach(e=>e.classList.remove(this.CSS.settingsButtonActive)),n.classList.toggle(this.CSS.settingsButtonActive)}),this.api.tooltip.onHover(n,t.title,{placement:"top",hidingDelay:500}),this.data.style===t.name&&n.classList.add(this.CSS.settingsButtonActive),e.appendChild(n)}),e}appendItems(e,t){e.forEach(e=>{const n=this.createItem(e.content,e.items);t.appendChild(n)})}createItem(e,t=[]){const n=r("li",this.CSS.item),i=r("div",this.CSS.itemBody),o=r("div",this.CSS.itemContent,{innerHTML:e,contentEditable:!this.readOnly});return i.appendChild(o),n.appendChild(i),t&&t.length>0&&this.addChildrenList(n,t),n}save(){const e=t=>Array.from(t.querySelectorAll(":scope > ."+this.CSS.item)).map(t=>{const n=t.querySelector("."+this.CSS.itemChildren);return{content:this.getItemContent(t),items:n?e(n):[]}});return{style:this.data.style,items:e(this.nodes.wrapper)}}addChildrenList(e,t){const n=e.querySelector("."+this.CSS.itemBody),r=this.makeListWrapper(void 0,[this.CSS.itemChildren]);this.appendItems(t,r),n.appendChild(r)}makeListWrapper(e=this.listStyle,t=[]){const n="ordered"===e?"ol":"ul",i="ordered"===e?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered;return t.push(i),r(n,[this.CSS.wrapper,...t])}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-nested-list",wrapperOrdered:"cdx-nested-list--ordered",wrapperUnordered:"cdx-nested-list--unordered",item:"cdx-nested-list__item",itemBody:"cdx-nested-list__item-body",itemContent:"cdx-nested-list__item-content",itemChildren:"cdx-nested-list__item-children",settingsWrapper:"cdx-nested-list__settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}get listStyle(){return this.data.style||this.defaultListStyle}set listStyle(e){const t=Array.from(this.nodes.wrapper.querySelectorAll("."+this.CSS.wrapper));t.push(this.nodes.wrapper),t.forEach(t=>{t.classList.toggle(this.CSS.wrapperUnordered,"unordered"===e),t.classList.toggle(this.CSS.wrapperOrdered,"ordered"===e)}),this.data.style=e}get currentItem(){let e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest("."+this.CSS.item)}enterPressed(e){const t=this.currentItem;e.stopPropagation(),e.preventDefault();const n=0===this.getItemContent(t).trim().length,r=t.parentNode===this.nodes.wrapper,o=null===t.nextElementSibling;if(r&&o&&n)return void this.getOutOfList();if(o&&n)return void this.unshiftItem();const a=i(s.extractFragmentFromCaretPositionTillTheEnd()),c=t.querySelector("."+this.CSS.itemChildren),l=this.createItem(a,void 0);c&&Array.from(c.querySelectorAll("."+this.CSS.item)).length>0?c.prepend(l):t.after(l),this.focusItem(l)}unshiftItem(){const e=this.currentItem,t=e.parentNode.closest("."+this.CSS.item);if(!t)return;this.caret.save(),t.after(e),this.caret.restore();const n=t.querySelector("."+this.CSS.itemChildren);0===n.children.length&&n.remove()}getItemContent(e){const t=e.querySelector("."+this.CSS.itemContent);return o(t)?"":t.innerHTML}focusItem(e,t=!0){const n=e.querySelector("."+this.CSS.itemContent);s.focus(n,t)}getOutOfList(){this.currentItem.remove(),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex())}backspace(e){if(!s.isAtStart())return;e.preventDefault();const t=this.currentItem,n=t.previousSibling,r=t.parentNode.closest("."+this.CSS.item);if(!n&&!r)return;let o;if(e.stopPropagation(),n){const e=n.querySelectorAll("."+this.CSS.item);o=Array.from(e).pop()||n}else o=r;const a=i(s.extractFragmentFromCaretPositionTillTheEnd()),c=o.querySelector("."+this.CSS.itemContent);s.focus(c,!1),this.caret.save(),c.insertAdjacentHTML("beforeend",a);let l=t.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);l=Array.from(l),l=l.filter(e=>e.parentNode.closest("."+this.CSS.item)===t),l.reverse().forEach(e=>{n?o.after(e):t.after(e)}),t.remove(),this.caret.restore()}addTab(e){e.stopPropagation(),e.preventDefault();const t=this.currentItem,n=t.previousSibling;if(!n)return;const r=n.querySelector("."+this.CSS.itemChildren);if(this.caret.save(),r)r.appendChild(t);else{const e=this.makeListWrapper(void 0,[this.CSS.itemChildren]),r=n.querySelector("."+this.CSS.itemBody);e.appendChild(t),r.appendChild(e)}this.caret.restore()}shiftTab(e){e.stopPropagation(),e.preventDefault(),this.unshiftItem()}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,e);var t,n,r,i=p(o);function o(){return l(this,o),i.apply(this,arguments)}return t=o,r=[{key:"conversionConfig",get:function(){return{export:function(e){return console.log(e.items),o.itemsToText(e.items)},import:function(e){return{items:[{content:e,items:[]}],style:"unordered"}}}}},{key:"itemsToText",value:function(e){var t="",n="";return e.forEach((function(e){t+=(t?", ":"")+e.content,e.items&&(n=o.itemsToText(e.items))&&(t+=(t?", ":"")+n)})),console.log(t),t}}],(n=null)&&d(t.prototype,n),r&&d(t,r),o}(a)}}).default}));