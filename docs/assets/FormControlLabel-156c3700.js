import{g as w,a as M,s as R,l as $,_ as p,r as x,u as E,b as U,ac as A,ad as D,T as v,j as d,c as F,S as I,d as W}from"./index-8f417ae8.js";function z(e){return M("MuiFormControlLabel",e)}const B=w("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),t=B,H=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],G=e=>{const{classes:o,disabled:l,labelPlacement:n,error:a,required:r}=e,m={root:["root",l&&"disabled",`labelPlacement${$(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return W(m,z,o)},J=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:l}=e;return[{[`& .${t.label}`]:o.label},o.root,o[`labelPlacement${$(l.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),K=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${t.error}`]:{color:(e.vars||e).palette.error.main}})),O=x.forwardRef(function(o,l){var n,a;const r=E({props:o,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:q,label:j,labelPlacement:S="end",required:h,slotProps:T={}}=r,N=U(r,H),b=A(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=h??i.props.required,L={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(L[c]=r[c])});const _=D({props:r,muiFormControl:b,states:["error"]}),f=p({},r,{disabled:y,labelPlacement:S,required:u,error:_.error}),g=G(f),C=(a=T.typography)!=null?a:k.typography;let s=j;return s!=null&&s.type!==v&&!q&&(s=d.jsx(v,p({component:"span"},C,{className:F(g.label,C==null?void 0:C.className),children:s}))),d.jsxs(J,p({className:F(g.root,m),ownerState:f,ref:l},N,{children:[x.cloneElement(i,L),u?d.jsxs(I,{direction:"row",alignItems:"center",children:[s,d.jsxs(K,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))}),V=O;export{V as F};
