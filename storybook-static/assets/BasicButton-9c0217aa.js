import{r as x}from"./index-ffb6278f.js";import{g as h}from"./_commonjsHelpers-725317a4.js";var l={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x,b=Symbol.for("react.element"),R=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,g=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,o){var t,n={},a=null,c=null;o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)O.call(r,t)&&!P.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:b,type:e,key:a,ref:c,props:n,_owner:g.current}}p.Fragment=R;p.jsx=u;p.jsxs=u;l.exports=p;var i=l.exports;const I=i.Fragment,E=i.jsx,W=i.jsxs;var y={exports:{}},j="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S=j,k=S;function f(){}function _(){}_.resetWarningCache=f;var C=function(){function e(t,n,a,c,N,T){if(T!==k){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function r(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:_,resetWarningCache:f};return o.PropTypes=o,o};y.exports=C();var F=y.exports;const s=h(F),d=({backgroundColor:e,primary:r,size:o,...t})=>{const n=r?"component-craftsman--primary":"component-craftsman--secondary";return E("button",{type:"button",...t,style:e&&{backgroundColor:e},className:["component-craftsman-button",`component-craftsman--${o}`,n].join(" "),children:t.label})};d.propTypes={primary:s.bool,backgroundColor:s.string,size:s.oneOf(["small","medium","large"]),label:s.string.isRequired,onClick:s.func};d.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};export{d as B,I as F,s as P,E as a,W as j};
