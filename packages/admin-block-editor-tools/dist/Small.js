!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var s in n)("object"==typeof exports?exports:t)[s]=n[s]}}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{default:()=>n});class n{button;tag="SMALL";api;iconClasses;constructor(t){this.api=t.api,this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static isInline=!0;render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML="Aa",this.button}surround(t){if(!t)return;const e=this.api.selection.findParentTag(this.tag);e?this.unwrap(e):this.wrap(t)}wrap(t){const e=document.createElement(this.tag);e.appendChild(t.extractContents()),t.insertNode(e),this.api.selection.expandToTag(e)}unwrap(t){this.api.selection.expandToTag(t);const e=window.getSelection();if(!e)return;const n=e.getRangeAt(0);if(!n)return;const s=n.extractContents();s&&(t.parentNode?.removeChild(t),n.insertNode(s),e.removeAllRanges(),e.addRange(n))}checkState(){const t=this.api.selection.findParentTag(this.tag);return this.button?.classList.toggle(this.iconClasses.active,!!t),!!t}static get sanitize(){return{u:{}}}}return e.default})()));