!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=38)}({0:function(t,n,i){"use strict";i.d(n,"a",(function(){return c}));var o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>\n',r='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>\n';function s(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,i,a;return n=t,a=[{key:"element",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);for(var r in Array.isArray(n)?(t=o.classList).add.apply(t,s(n)):n&&o.classList.add(n),i)o.setAttribute(r,i[r]);return o}},{key:"input",value:function(e,n,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=t.element("div",n,{contentEditable:!e.readOnly});return r.dataset.placeholder=e.api.i18n.t(i),o&&(r.textContent=o),r}},{key:"option",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=document.createElement("option");i.text=n||t,i.value=t,e.add(i)}},{key:"options",value:function(e,n){n.forEach((function(n){return t.option(e,n)}))}},{key:"fileButtons",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=t.element("div",["flex","cdx-input-labeled-preview","cdx-input-labeled","cdx-input","cdx-input-editable"].concat(s(n))),a=t.element("div",[e.api.styles.button]);if(a.innerHTML=o+" "+e.api.i18n.t("Select"),a.addEventListener("click",(function(t){return e.onSelectFile(e,t)})),i.appendChild(a),e.onUploadFile){var l=t.element("div",[e.api.styles.button]);l.innerHTML="".concat(r," ").concat(e.api.i18n.t("Upload")),l.style.marginLeft="-2px",l.addEventListener("click",(function(t){return e.onUploadFile(e,t)})),i.appendChild(l)}return i}}],(i=[{key:"createPaginateCheckbox",value:function(){var n=t.element("div",["checkbox","cdx-checkbox"]),i=e.element("label");return i.textContent="Paginate",this.nodes.paginateCheckbox=document.createElement("input"),this.nodes.paginateCheckbox.type="checkbox",this.nodes.paginateCheckbox.value=this._data.display||0,n.appendChild(this.nodes.paginateCheckbox),n.appendChild(i),n}}])&&l(n.prototype,i),a&&l(n,a),t}()},2:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(h)):s.push({identifier:u,updater:v(h,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function v(e,t){var n,i,o;if(t.singleton){var r=g++;n=f||(f=c(t)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=c(t),i=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=r}}}},28:function(e,t,n){(t=n(3)(!1)).push([e.i,".ce-inline-tool-hyperlink-wrapper {\n    outline: none;\n    border: 0;\n    border-radius: 0 0 4px 4px;\n    margin: 0;\n    font-size: 13px;\n    padding: 10px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: none;\n    font-weight: 500;\n    border-top: 1px solid rgba(201,201,204,.48);\n}\n\n.ce-inline-tool-hyperlink-wrapper.ce-inline-tool-hyperlink-wrapper--showed {\n    display: block;\n}\n\n.ce-inline-tool-hyperlink--input,\n.ce-inline-tool-hyperlink--select-target,\n.ce-inline-tool-hyperlink--select-rel {\n    border: 1px solid rgba(201,201,204,.48);\n    -webkit-box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\n    box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\n    border-radius: 5px;\n    padding: 5px 8px;\n    margin-bottom: 10px;\n    outline: none;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.ce-inline-tool-hyperlink--select-target,\n.ce-inline-tool-hyperlink--select-rel {\n    width: 48%;\n    display: inline-block;\n}\n.ce-inline-tool-hyperlink--select-target {\n    margin-right: 2%;\n}\n.ce-inline-tool-hyperlink--select-rel {\n    margin-left: 2%;\n}\n\n.ce-inline-tool-hyperlink--button {\n    display: block;\n    width: 100%;\n    background-color: #34c38f;\n    color: #fff;\n    padding: 7px 0;\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n",""]),e.exports=t},29:function(e,t,n){var i=n(2),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},3:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},30:function(e,t,n){(t=n(3)(!1)).push([e.i,".ce-inline-tool-hyperlink--select-target,\n.ce-inline-tool-hyperlink--select-rel {\n    width: 31%;\n    margin-right: 1%;\n    background: #fff;\n}\n\n.ce-inline-tool-hyperlink--select-rel {\n    margin-left: 1%;\n}\n\n.ninja {\n    text-decoration: none !important;\n    color: inherit !important;\n    border-bottom: 1px dotted #333;\n}\n\n.link-btn {\n    padding: 6px 12px;\n    margin-bottom: 0;\n    border-radius: 3px;\n    border: 1px solid transparent;\n    cursor: pointer;\n    color: #fff;\n    background-color: #3c8dbc;\n    border-color: #367fa9;\n    outline: none;\n    text-decoration: none !important;\n}\n\n.link-btn:hover {\n    color: #fff !important;\n}\n",""]),e.exports=t},38:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));class i{constructor(){this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}isElement(e){return e&&"object"==typeof e&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}isContentEditable(e){return"true"===e.contentEditable}isNativeInput(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}canSetCaret(e){let t=!0;if(this.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=this.isContentEditable(e);return t}CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}anchorNode(){const e=window.getSelection();return e?e.anchorNode:null}anchorElement(){const e=window.getSelection();if(!e)return null;const t=e.anchorNode;return t?this.isElement(t)?t:t.parentElement:null}anchorOffset(){const e=window.getSelection();return e?e.anchorOffset:null}isCollapsed(){const e=window.getSelection();return e?e.isCollapsed:null}isAtEditor(){const e=i.get();let t=e.anchorNode||e.focusNode;t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);let n=null;return t&&(n=t.closest("."+i.CSS.editorZone)),n&&n.nodeType===Node.ELEMENT_NODE}isSelectionExists(){return!!i.get().anchorNode}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static get rect(){let e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return n;if(t=window.getSelection(),null===t.rangeCount||isNaN(t.rangeCount))return n;if(0===t.rangeCount)return n;if(e=t.getRangeAt(0).cloneRange(),e.getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){const t=document.createElement("span");if(t.getBoundingClientRect){t.appendChild(document.createTextNode("​")),e.insertNode(t),n=t.getBoundingClientRect();const i=t.parentNode;i.removeChild(t),i.normalize()}}return n}static get text(){return window.getSelection?window.getSelection().toString():""}get(){return window.getSelection()}setCursor(e,t=0){const n=document.createRange(),i=window.getSelection();if(this.isNativeInput(e)){if(!this.canSetCaret(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),i.removeAllRanges(),i.addRange(n),n.getBoundingClientRect()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=i.range}restore(){if(!this.savedSelectionRange)return;const e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}findParentTag(e,t=null,n=10){const i=window.getSelection();let o=null;if(!i||!i.anchorNode||!i.focusNode)return null;return[i.anchorNode,i.focusNode].forEach(i=>{let r=n;for(;r>0&&i.parentNode&&(i.tagName!==e||(o=i,t&&i.classList&&!i.classList.contains(t)&&(o=null),!o));)i=i.parentNode,r--}),o}expandToTag(e){const t=window.getSelection();t.removeAllRanges();const n=document.createRange();n.selectNodeContents(e),t.addRange(n)}}n(9);class o{constructor({data:e,config:t,api:n,readOnly:o}){this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.tooltip=n.tooltip,this.i18n=n.i18n,this.config=t,this.selection=new i,this.commandLink="createLink",this.commandUnlink="unlink",this.CSS={wrapper:"ce-inline-tool-hyperlink-wrapper",wrapperShowed:"ce-inline-tool-hyperlink-wrapper--showed",button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-hyperlink--input",selectTarget:"ce-inline-tool-hyperlink--select-target",selectRel:"ce-inline-tool-hyperlink--select-rel",buttonSave:"ce-inline-tool-hyperlink--button"},this.targetAttributes=this.config.availableTargets||["_blank","_self","_parent","_top"],this.relAttributes=this.config.availableRels||["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"],this.nodes={button:null,wrapper:null,input:null,selectTarget:null,selectRel:null,buttonSave:null},this.inputOpened=!1}render(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(this.iconSvg("link",14,10)),this.nodes.button.appendChild(this.iconSvg("unlink",15,11)),this.nodes.button}renderActions(){let e;for(this.nodes.wrapper=document.createElement("div"),this.nodes.wrapper.classList.add(this.CSS.wrapper),this.nodes.input=document.createElement("input"),this.nodes.input.placeholder="https://...",this.nodes.input.classList.add(this.CSS.input),this.nodes.selectTarget=document.createElement("select"),this.nodes.selectTarget.classList.add(this.CSS.selectTarget),this.addOption(this.nodes.selectTarget,this.i18n.t("Select target"),""),e=0;e<this.targetAttributes.length;e++)this.addOption(this.nodes.selectTarget,this.targetAttributes[e],this.targetAttributes[e]);for(this.config.target&&(0===this.targetAttributes.length&&this.addOption(this.nodes.selectTarget,this.config.target,this.config.target),this.nodes.selectTarget.value=this.config.target),this.nodes.selectRel=document.createElement("select"),this.nodes.selectRel.classList.add(this.CSS.selectRel),this.addOption(this.nodes.selectRel,this.i18n.t("Select rel"),""),e=0;e<this.relAttributes.length;e++)this.addOption(this.nodes.selectRel,this.relAttributes[e],this.relAttributes[e]);return this.config.rel&&(0===this.relAttributes.length&&this.addOption(this.nodes.selectTarget,this.config.rel,this.config.rel),this.nodes.selectRel.value=this.config.rel),this.nodes.buttonSave=document.createElement("button"),this.nodes.buttonSave.type="button",this.nodes.buttonSave.classList.add(this.CSS.buttonSave),this.nodes.buttonSave.innerHTML=this.i18n.t("Save"),this.nodes.buttonSave.addEventListener("click",e=>{this.savePressed(e)}),this.nodes.wrapper.appendChild(this.nodes.input),this.targetAttributes&&this.targetAttributes.length>0&&this.nodes.wrapper.appendChild(this.nodes.selectTarget),this.relAttributes&&this.relAttributes.length>0&&this.nodes.wrapper.appendChild(this.nodes.selectRel),this.nodes.wrapper.appendChild(this.nodes.buttonSave),this.nodes.wrapper}surround(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());const e=this.selection.findParentTag("A");if(e)return this.selection.expandToTag(e),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}get shortcut(){return this.config.shortcut||"CMD+L"}get title(){return"Hyperlink"}static get isInline(){return!0}static get sanitize(){return{a:{href:!0,target:!0,rel:!0}}}checkState(e=null){const t=this.selection.findParentTag("A");if(t){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();const e=t.getAttribute("href"),n=t.getAttribute("target"),i=t.getAttribute("rel");this.nodes.input.value=e||"",this.nodes.selectTarget.value=n||"",this.nodes.selectRel.value=i||"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!t}clear(){this.closeActions()}toggleActions(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}openActions(e=!1){this.nodes.wrapper.classList.add(this.CSS.wrapperShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}closeActions(e=!0){if(this.selection.isFakeBackgroundEnabled){const e=new i;e.save(),this.selection.restore(),this.selection.removeFakeBackground(),e.restore()}this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed),this.nodes.input.value="",this.nodes.selectTarget.value="",this.nodes.selectRel.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}savePressed(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();let t=this.nodes.input.value||"",n=this.nodes.selectTarget.value||"",i=this.nodes.selectRel.value||"";if(t.trim()||(this.selection.restore(),this.unlink(),e.preventDefault(),this.closeActions()),this.config.validate&&!0==!!this.config.validate&&!this.validateURL(t))return this.tooltip.show(this.nodes.input,"The URL is not valid.",{placement:"top"}),void setTimeout(()=>{this.tooltip.hide()},1e3);t=this.prepareLink(t),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(t,n,i),this.selection.collapseToEnd(),this.inlineToolbar.close()}validateURL(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}prepareLink(e){return e=e.trim(),e=this.addProtocol(e)}addProtocol(e){if(/^(\w+):(\/\/)?/.test(e))return e;const t=/^\/[^/\s]/.test(e),n="#"===e.substring(0,1),i=/^\/\/[^/\s]/.test(e);return t||n||i||(e="http://"+e),e}insertLink(e,t="",n=""){let i=this.selection.findParentTag("A");i?this.selection.expandToTag(i):(document.execCommand(this.commandLink,!1,e),i=this.selection.findParentTag("A")),i&&(t?i.target=t:i.removeAttribute("target"),n?i.rel=n:i.removeAttribute("rel"))}unlink(){document.execCommand(this.commandUnlink)}iconSvg(e,t=14,n=14){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.classList.add("icon","icon--"+e),i.setAttribute("width",t+"px"),i.setAttribute("height",n+"px"),i.innerHTML=`<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${e}"></use>`,i}addOption(e,t,n=null){let i=document.createElement("option");i.text=t,i.value=n,e.add(i)}}n(29),n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,e);var t,n,i,o=c(r);function r(e){var t,n=e.data,i=e.config,s=e.api,a=e.readOnly;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),i.shortcut="CMD+K",(t=o.call(this,{data:n,config:i,api:s,readOnly:a})).avalaibleDesign=t.config.avalaibleDesign||[["btn","link-btn"],["invisible","ninja"]],t}return t=r,i=[{key:"sanitize",get:function(){return{a:{href:!0,target:!0,rel:!0,class:!0}}}}],(n=[{key:"renderActions",value:function(){var e=this;a(d(r.prototype),"renderActions",this).call(this),this.nodes.wrapper.getElementsByClassName("ce-inline-tool-hyperlink--button")[0].remove(),this.nodes.selectDesign=document.createElement("select"),this.nodes.selectDesign.classList.add(this.CSS.selectRel),this.addOption(this.nodes.selectDesign,this.i18n.t("Select design"),"");for(var t=0;t<this.avalaibleDesign.length;t++)this.addOption(this.nodes.selectDesign,this.avalaibleDesign[t][0],this.avalaibleDesign[t][1]);return this.config.design&&(this.nodes.selectDesign.value=this.config.design),this.nodes.wrapper.appendChild(this.nodes.selectDesign),this.createSaveBtn(),this.nodes.wrapper.appendChild(this.nodes.buttonSave),this.nodes.wrapper.addEventListener("change",(function(t){e.save(t)})),this.nodes.wrapper}},{key:"createSaveBtn",value:function(){this.initSelection=null,this.nodes.buttonSave=null,this.nodes.buttonSave=document.createElement("div")}},{key:"checkState",value:function(){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var t=e.getAttribute("href"),n=e.getAttribute("target"),i=e.getAttribute("rel"),o=e.getAttribute("class");this.nodes.input.value=t||"",this.nodes.selectTarget.value=n||"",this.nodes.selectRel.value=i||"",this.nodes.selectDesign.value=o||"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"save",value:function(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();var t=this.nodes.input.value||"",n=this.nodes.selectTarget.value||"",i=this.nodes.selectRel.value||"",o=this.nodes.selectDesign.value||"";if(!t.trim())return console.log("unlink"),this.selection.restore(),void this.unlink();this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(t,n,i,o)}},{key:"addProtocol",value:function(e){if(/^(\w+):(\/\/)?/.test(e))return e;var t=/^\/[^/\s]?/.test(e),n="#"===e.substring(0,1),i=/^\/\/[^/\s]/.test(e);return t||n||i||(e="http://"+e),e}},{key:"insertLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=this.initSelection?this.initSelection:this.selection.findParentTag("A");return o?(this.selection.expandToTag(o),o.href=e):(document.execCommand(this.commandLink,!1,e),o=this.selection.findParentTag("A"),this.initSelection=o),o&&(t?o.target=t:o.removeAttribute("target"),n?o.rel=n:o.removeAttribute("rel"),i?o.className=i:o.removeAttribute("class")),o}}])&&s(t.prototype,n),i&&s(t,i),r}(o)},9:function(e,t,n){var i=n(2),o=n(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}}}).default}));