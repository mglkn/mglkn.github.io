parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OAcZ":[function(require,module,exports) {

},{}],"IT7S":[function(require,module,exports) {

},{"normalize.css":"OAcZ","./static\\fonts\\OpenSans-Regular.woff":[["OpenSans-Regular.4a0d6e28.woff","B8Ui"],"B8Ui"],"./static\\fonts\\OpenSans-Regular.ttf":[["OpenSans-Regular.daa9d641.ttf","teVF"],"teVF"],"./static\\fonts\\OpenSans-Regular.svg":[["OpenSans-Regular.726bfb9a.svg","AkBh"],"AkBh"],"./static\\fonts\\OpenSans-Bold.woff":[["OpenSans-Bold.22ed96b9.woff","mZYH"],"mZYH"],"./static\\fonts\\OpenSans-Bold.ttf":[["OpenSans-Bold.5fec49aa.ttf","w7b6"],"w7b6"],"./static\\fonts\\OpenSans-Bold.svg":[["OpenSans-Bold.c8b21183.svg","BLsY"],"BLsY"],"./static\\fonts\\Montserrat-Regular.woff":[["Montserrat-Regular.c9c6d0fb.woff","kIoT"],"kIoT"],"./static\\fonts\\Montserrat-Regular.ttf":[["Montserrat-Regular.4a781d87.ttf","naIs"],"naIs"],"./static\\fonts\\Montserrat-Regular.svg":[["Montserrat-Regular.9625f403.svg","SPFs"],"SPFs"],"./static\\fonts\\Montserrat-Bold.woff":[["Montserrat-Bold.1b481772.woff","ipop"],"ipop"],"./static\\fonts\\Montserrat-Bold.ttf":[["Montserrat-Bold.21325ae9.ttf","TYsj"],"TYsj"],"./static\\fonts\\Montserrat-Bold.svg":[["Montserrat-Bold.6ea60992.svg","FteA"],"FteA"]}],"HoGv":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"iHEi":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"GWTZ":[function(require,module,exports) {

},{"./img\\expand_more_down.svg":[["expand_more_down.ba3c61a1.svg","RJDl"],"RJDl"],"./img\\close.svg":[["close.d6aaccd9.svg","CBb5"],"CBb5"],"./img\\menu.svg":[["menu.d885ef5c.svg","TyIU"],"TyIU"]}],"QNEt":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".top-bar__switch-button"),t=document.querySelector(".top-bar");e.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("top-bar_close")}),t.classList.toggle("top-bar_close")}require("../buttons"),require("../top_bar_user"),require("./style.scss"),e();
},{"../buttons":"HoGv","../top_bar_user":"iHEi","./style.scss":"GWTZ"}],"XtTv":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"ehM5":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"hu7l":[function(require,module,exports) {
"use strict";require("./style.scss"),require("../footer_bottom");
},{"./style.scss":"OAcZ","../footer_bottom":"ehM5"}],"kaIB":[function(require,module,exports) {
"use strict";require("../text_field"),require("./footer_middle"),require("./footer_bottom"),require("./style.scss");
},{"../text_field":"XtTv","./footer_middle":"hu7l","./footer_bottom":"ehM5","./style.scss":"OAcZ"}],"gEtg":[function(require,module,exports) {
"use strict";function e(e,r){if(!e)return[];for(var t=[],u=!1,n=0;n<e.length;n++){var l=r[e[n]];if(u&&l&&(l=null,u=!1),l)l.regexp&&t.push(l);else{if(!u&&"\\"===e[n]){u=!0;continue}u=!1,t.push({char:e[n],next:null})}}return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"hptw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={USER:1,CHAR:2,MASK:3};
},{}],"WZ3O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("../constants/charTypesEnum.js"),t=a(e);function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var a=e.data,r=e.input,l=void 0===r?"":r,u=e.selection,h=e.mask,n=e.maskChar,s=e.maskString,c=[],f="",p=0,d=0,i=0,o=0;h[p];){var y=a.length>d?a[d]:null,g=h[p],v=null;if(u.start<=p&&i<l.length&&(v=l.slice(i)),g.char&&(v&&v[0]===g.char?i++:(y&&(y.char===g.char||y.type!==t.default.USER)||l)&&d++,c.push({char:g.char,type:t.default.CHAR}),v&&o++,f+=g.char),g.regexp){var R=null;if(v){for(var S=0;!g.regexp.test(v[S])&&v.length>S;)S++,i++;v.length>S&&(i++,o++,d++,R=v[S],c.push({char:R,type:t.default.USER}),f+=R)}if(!R){if(y&&y.type===t.default.CHAR&&a.length>d+1){d++;continue}y&&y.type===t.default.USER&&g.regexp.test(y.char)?(c.push({char:y.char,type:t.default.USER}),f+=y.char,d++):(R=s?s[p]:n,c.push({char:R,type:t.default.MASK}),a.length>p&&d++,f+=R)}}p++}for(var E=u.start+o,m=c.length-1,x=0;m>=0&&c[m].type!==t.default.USER;)c[m].type===t.default.MASK&&(x=0),c[m].type===t.default.CHAR&&x++,m--;m+=x;for(var A="",U=0;U<=m;U++)A+=c[U].char;return{value:c,visibleValue:A,maskedValue:f,selection:{start:E,end:E}}}
},{"../constants/charTypesEnum.js":"hptw"}],"FH4R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=require("../constants/charTypesEnum"),e=r(t);function r(t){return t&&t.__esModule?t:{default:t}}function n(t){var r=t.value,n=t.selection,a=t.reformat,s=(t.mask,t.maskChar),u=t.maskString;if(n.end<n.start){var c=n.end;n.end=n.start,n.start=c}return n.start===n.end?r:r.length>n.start?r.slice(0,n.start).concat(function(){if(a)return"";if(u){for(var t=[],r=n.start;r<n.end;r++)t.push({char:u[r],type:e.default.MASK});return t}return function(t){for(var r=[],n=0;n<t;n++)r.push({char:s,type:e.default.MASK});return r}(n.end-n.start)}(),r.slice(n.end,r.length)):r}
},{"../constants/charTypesEnum":"hptw"}],"zV9P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createInput=exports.defaults=void 0;var e=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),t=require("./functions/defineMaskList"),s=o(t),a=require("./functions/inputValue"),i=o(a),r=require("./functions/removeSelectedRange"),n=o(r),l=require("./constants/charTypesEnum"),u=o(l);function o(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var m=function(){function t(e){var a=e.value,i=e.mask,r=e.reformat,n=e.maskFormat,l=e.maskChar,u=e.maskString;if(h(this,t),u&&u.length!==i.length)throw new Error("maskString must have same length as mask");if(l.length>1)throw new Error("maskChar must have only 1 char");this._maskString=u,this._maskChar=l,this._reformat=r,this.selection={start:0,end:0},this.setMaskFormat(n),this._mask=(0,s.default)(i,this._maskFormat),this.setValue(a)}return e(t,[{key:"setMaskFormat",value:function(e){this._maskFormat=e.reduce(function(e,t){return e[t.str]=t,e},{})}},{key:"input",value:function(e){var t=this._value,s=void 0;this._reformat?s=this._reformat({data:t,input:e,selection:this.selection}):(t=(0,n.default)({value:t,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString}),this.selection.end=this.selection.start,s=(0,i.default)({data:t,input:e,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})),this._value=s.value,this._maskedValue=s.maskedValue,this._visibleValue=s.visibleValue,this.setSelection(s.selection)}},{key:"setSelection",value:function(e){var t=e.start,s=e.end;this.selection={start:t,end:s}}},{key:"getSelection",value:function(){return{start:this.selection.start,end:this.selection.end}}},{key:"backspace",value:function(){this.removePreviosOrSelected()}},{key:"paste",value:function(e){this.input(e)}},{key:"setMask",value:function(e){this._mask=(0,s.default)(e,this._maskFormat),this.setValue(this._value)}},{key:"getState",value:function(){return{value:this.getValue(),maskedValue:this.getMaskedValue(),visibleValue:this.getVisibleValue(),selection:this.getSelection()}}},{key:"getValue",value:function(){return this._value}},{key:"setReformat",value:function(e){this._reformat=e,this.setValue(this._value)}},{key:"getMaskedValue",value:function(){return this._maskedValue}},{key:"getVisibleValue",value:function(){return this._visibleValue}},{key:"setMaskChar",value:function(e){if(e.length>1)throw new Error("maskChar must have only 1 char");this._maskChar=e,this.setValue(this._value)}},{key:"setMaskString",value:function(e){if(e&&e.length!==this._mask.length)throw new Error("maskString must have same length as mask");this._maskString=e,this.setValue(this._value)}},{key:"removePreviosOrSelected",value:function(){this.selection.start===this.selection.end&&(this.selection.start=this.selection.end-1,this.selection.start<0&&(this.selection.start=0)),this.input("")}},{key:"removeNextOrSelected",value:function(){this.selection.start===this.selection.end&&this.selection.end++,this.input("")}},{key:"setValue",value:function(e){var t=void 0;if(this._reformat)t=this._reformat({data:e,selection:this.selection});else{var s=e;if(!Array.isArray(s)){s=[];for(var a=0;a<e.length;a++)s.push({char:e[a],type:u.default.USER})}t=(0,i.default)({data:s,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})}this._value=t.value,this._maskedValue=t.maskedValue,this._visibleValue=t.visibleValue,this.setSelection(t.selection)}}]),t}(),c=exports.defaults={maskFormat:[{str:"0",regexp:/[0-9]/},{str:"*",regexp:/./},{str:"a",regexp:/[a-zA-Z]/}],maskChar:"",showMask:!1,removeSelectedRange:n.default},k=exports.createInput=function(e){var t=e.value,s=e.maskString,a=e.mask,i=e.reformat,r=e.maskFormat,n=void 0===r?c.maskFormat:r,l=e.maskChar,u=void 0===l?c.maskChar:l,o=i,h=a;return o||h?o&&(h=null):o=function(e){return e},new m({value:t,mask:h,reformat:o,maskFormat:n,maskChar:u,maskString:s})};
},{"./functions/defineMaskList":"gEtg","./functions/inputValue":"WZ3O","./functions/removeSelectedRange":"FH4R","./constants/charTypesEnum":"hptw"}],"bkcY":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,n=arguments[3];!function(){"use strict";function e(t,n,e,o){var r="removeEventListener",i=function(){t[r](n,e)};return t.addEventListener?(t.addEventListener(n,e,o),i):t.attachEvent?(n="on"+n,t.attachEvent(n,e),r="detachEvent",i):t.on?(t.on(n,e),r="off",i):void 0}e.define=function(t,n){return function(e,o,r,i){return e[t](o,r,i),function(){e[n](o,r)}}},"object"==typeof exports?module.exports=e:"function"==typeof t&&t.amd?t(e):n.subscribeEvent=e}();
},{}],"mEFW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),t=require("input-core"),s=require("subscribe-event"),n=a(s);function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i={BACKSPACE:8,DELETE:46},r=function(){function s(e,n){var a=this,r=n.mask,u=void 0===r?t.defaults.mask:r,h=n.value,l=void 0===h?"":h,p=n.reformat,c=n.maskString,m=n.maskChar,k=void 0===m?t.defaults.maskChar:m,f=n.maskFormat,g=void 0===f?t.defaults.maskFormat:f,w=n.showMask,S=n.alwaysShowMask,d=n.onChange;o(this,s),this.showValue=function(){a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.element.value=a.input.getMaskedValue():a.element.value=a.input.getVisibleValue()},this.setSelection=function(){if(a.canSetSelection){var e=a.input.getSelection();a.element.setSelectionRange(e.start,e.end),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,0)})(function(){return a.element.setSelectionRange(e.start,e.end)})}},this.onPaste=function(e){e.preventDefault(),a.getSelection(),a.input.paste(e.clipboardData.getData("Text")),a.showValue(),setTimeout(a.setSelection,0),a.props.onChange&&a.props.onChange(e)},this.onChange=function(e){var t=void 0;t=a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.input.getMaskedValue():a.input.getVisibleValue(),e.target.value!==t&&(a.getSelection(),a.input.setValue(e.target.value),a.showValue(),setTimeout(a.setSelection,0)),a.props.onChange&&a.props.onChange(e)},this.onKeyPress=function(e){e.metaKey||e.altKey||e.ctrlKey||"Enter"===e.key||(e.preventDefault(),a.getSelection(),a.input.input(e.key||e.data||String.fromCharCode(e.which)),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onKeyDown=function(e){e.which===i.BACKSPACE&&(e.preventDefault(),a.getSelection(),a.input.removePreviosOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e)),e.which===i.DELETE&&(e.preventDefault(),a.getSelection(),a.input.removeNextOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onFocus=function(){a.canSetSelection=!0},this.onBlur=function(){a.canSetSelection=!1},this.input=this.input=(0,t.createInput)({value:l,reformat:p,maskString:c,maskChar:k,mask:u,maskFormat:g}),this.props={mask:u,value:l,reformat:p,maskChar:k,maskFormat:g,maskString:c,showMask:w,alwaysShowMask:S,onChange:d},this.showMask=S||w,this.element=e,this.showValue(),this.subscribe()}return e(s,[{key:"getSelection",value:function(){this.input.setSelection({start:this.element.selectionStart,end:this.element.selectionEnd})}},{key:"subscribe",value:function(){this.unsubscribe={onPaste:(0,n.default)(this.element,"paste",this.onPaste),onKeyDown:(0,n.default)(this.element,"keydown",this.onKeyDown),onKeyPress:(0,n.default)(this.element,this.keyPressPropName(),this.onKeyPress),onChange:(0,n.default)(this.element,"change",this.onChange),onFocus:(0,n.default)(this.element,"focus",this.onFocus),onBlur:(0,n.default)(this.element,"blur",this.onBlur)}}},{key:"keyPressPropName",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent.match(/Android/i)?"beforeinput":"keypress"}},{key:"setProps",value:function(e){var t=e.mask,s=e.value,n=e.reformat,a=e.maskString,o=e.maskChar,i=e.maskFormat,r=e.showMask,u=e.alwaysShowMask,h=e.onChange,l=!1;this.props.onChange!==h&&(this.props.onChange=h),this.props.alwaysShowMask===u&&this.props.showMask===r||(this.showMask=u||r,this.props.alwaysShowMask=u,this.props.showMask=r,l=!0),i&&i!==this.props.maskFormat&&(this.input.setMaskFormat(i),this.props.maskFormat=i,l=!0),t!==this.props.mask&&(this.input.setMask(t),this.props.mask=t,l=!0),a!==this.props.maskString&&(this.input.setMaskString(a),this.props.maskString=a,l=!0),o!==this.props.maskChar&&(this.input.setMaskChar(o),this.props.maskChar=o,l=!0),n!==this.props.reformat&&(this.input.setReformat(n),this.props.reformat=n,l=!0),s!==this.props.value&&(this.input.setValue(s),this.props.value=s,l=!0),l&&(this.showValue(),this.setSelection())}},{key:"destroy",value:function(){this.unsubscribe.onPaste(),this.unsubscribe.onKeyDown(),this.unsubscribe.onKeyPress(),this.unsubscribe.onChange(),this.unsubscribe.onFocus(),this.unsubscribe.onBlur()}}]),s}();exports.default=r;
},{"input-core":"zV9P","subscribe-event":"bkcY"}],"A9C4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u,require("../text_field");var e=t(require("mask-input"));function t(e){return e&&e.__esModule?e:{default:e}}function u(t){new e.default(document.querySelector(".".concat(t," input")),{mask:"00.00.0000"})}
},{"../text_field":"XtTv","mask-input":"mEFW"}],"FCu7":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"bEp9":[function(require,module,exports) {
"use strict";require("./style.scss");
},{"./style.scss":"OAcZ"}],"BoAb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("../masked_text_field"));function r(e){return e&&e.__esModule?e:{default:e}}function t(){(0,e.default)("id-register-from-birthday");document.querySelector(".register-form__form").addEventListener("submit",function(e){e.stopPropagation(),e.preventDefault(),console.log("register form submit")})}require("../buttons"),require("../radio_button"),require("../toggle"),require("../text_field"),require("./style.scss");
},{"../masked_text_field":"A9C4","../buttons":"HoGv","../radio_button":"FCu7","../toggle":"bEp9","../text_field":"XtTv","./style.scss":"OAcZ"}],"GiJP":[function(require,module,exports) {

},{"./..\\..\\static\\img\\auth_bg.png":[["auth_bg.138b6b82.png","hE95"],"hE95"]}],"ixYr":[function(require,module,exports) {
"use strict";require("../../root.scss"),require("../../components/top_bar"),require("../../components/footer");var e=r(require("../../components/register_form"));function r(e){return e&&e.__esModule?e:{default:e}}require("./style.scss"),(0,e.default)();
},{"../../root.scss":"IT7S","../../components/top_bar":"QNEt","../../components/footer":"kaIB","../../components/register_form":"BoAb","./style.scss":"GiJP"}]},{},["ixYr"], null)
//# sourceMappingURL=/../build/register.8b11f957.js.map