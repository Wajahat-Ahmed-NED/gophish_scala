(this.webpackJsonpCyberOpsBox=this.webpackJsonpCyberOpsBox||[]).push([[8],{1005:function(e,t,a){"use strict";a.r(t);var o=a(6),c=a(8),n=a(0),i=a.n(n),l=a(835),r=a(909),s=a(916),d=a(186),b=a(932),u=a(904),j=a(995),m=a(838),p=a(242),O=a.n(p),h=a(955),v=a.n(h),f=a(71),g=a(109),x=a.n(g),y=a(74),C=a(1),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:450,bgcolor:"rgb(36, 41, 57)",color:"white !important",boxShadow:24,p:4,overflowX:"hidden",overflowY:"auto"};t.default=function(){var e=i.a.useState(!1),t=Object(c.a)(e,2),a=t[0],p=t[1],h=i.a.useState(!1),g=Object(c.a)(h,2),w=g[0],S=g[1],U=i.a.useState(""),I=Object(c.a)(U,2),B=I[0],M=I[1],N=i.a.useState(""),V=Object(c.a)(N,2),z=V[0],R=V[1],F=i.a.useState(""),G=Object(c.a)(F,2),A=G[0],D=G[1],L=i.a.useState([]),P=Object(c.a)(L,2),T=P[0],E=P[1],H=i.a.useState([]),W=Object(c.a)(H,2),J=W[0],_=W[1],X=function(){p(!1),S(!1),M(""),R(""),D("")},Y=function(){p(!1)},q=function(){Object(y.B)().then((function(e){console.log(e.data),E(e.data)})).catch((function(e){console.log(e)}))};Object(n.useEffect)((function(){q()}),[]);return Object(C.jsxs)(f.a,{title:"Sample Card",style:{color:"black "},children:[Object(C.jsx)(l.a,{variant:"contained",onClick:function(){p(!0)},children:"Add User"}),Object(C.jsx)(r.a,{open:a,onClose:X,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(C.jsx)(s.a,{sx:k,children:Object(C.jsxs)(s.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(C.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"UserName"}),Object(C.jsx)(b.a,{id:"outlined-basic",label:"Enter UserName",variant:"outlined",style:{color:"black"},color:"primary",size:"small",onChange:function(e){return M(e.target.value)}}),Object(C.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Password"}),Object(C.jsx)(b.a,{id:"outlined-basic",label:"Password",style:{color:"black"},size:"small",type:"password",variant:"outlined",onChange:function(e){return R(e.target.value)}}),Object(C.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Role"}),Object(C.jsxs)(u.a,{labelId:"demo-select-small",id:"demo-select-small",value:A,style:{backgroundColor:"rgb(36, 41, 57)"},label:"Role",size:"small",onChange:function(e){return D(e.target.value)},children:[Object(C.jsx)(j.a,{value:"user",style:{color:"black"},children:"User"}),Object(C.jsx)(j.a,{value:"admin",style:{color:"black"},children:"Admin"})]}),Object(C.jsx)(l.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:function(){if(p(!1),""===B||""===z||""===A)x.a.fire("Invalid Data","Fill all fields!","error"),p(!0);else{var e={username:B,password:z,role:A};Object(y.g)(e).then((function(e){console.log(e),x.a.fire({icon:"success",title:"Success!",text:"User created successfully!",showConfirmButton:!0,timer:1500}),q(),X()})).catch((function(e){console.log(e),Y(),x.a.fire("Failed",e.response.data.message,"error")}))}},fullWidth:!0,children:"Add"})]})})}),Object(C.jsxs)("table",{className:"table table-hover mt-4",children:[Object(C.jsx)("thead",{className:"thead-dark",children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:"ID"}),Object(C.jsx)("td",{children:"UserName"}),Object(C.jsx)("td",{children:"UserType"}),Object(C.jsx)("td",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:T.length>0&&(null===T||void 0===T?void 0:T.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:e.id}),Object(C.jsx)("td",{children:e.username}),Object(C.jsx)("td",{children:e.role.name}),Object(C.jsxs)("td",{children:[Object(C.jsx)(m.a,{onClick:function(){return function(e){S(!0),M(null===e||void 0===e?void 0:e.username),D(null===e||void 0===e?void 0:e.role.slug),_(e)}(e)},children:Object(C.jsx)(v.a,{color:"success"})}),Object(C.jsx)(m.a,{onClick:function(){return function(e){Object(y.m)(e).then((function(e){console.log(e),x.a.fire({icon:"success",title:"Success!",text:"User deleted successfully!",showConfirmButton:!0,timer:2e3}),q()})).catch((function(e){console.log(e),x.a.fire("Failed",e.response.data.message,"error")}))}(null===e||void 0===e?void 0:e.id)},children:Object(C.jsx)(O.a,{color:"error"})})]})]},t)})))})]}),Object(C.jsx)(r.a,{open:w,onClose:X,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(C.jsx)(s.a,{sx:k,children:Object(C.jsxs)(s.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(C.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"UserName"}),Object(C.jsx)(b.a,{id:"outlined-basic",label:"Enter UserName",variant:"outlined",style:{color:"black"},color:"primary",size:"small",value:B,onChange:function(e){return M(e.target.value)}}),Object(C.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Role"}),Object(C.jsxs)(u.a,{labelId:"demo-select-small",id:"demo-select-small",value:A,style:{backgroundColor:"rgb(36, 41, 57)"},label:"Role",size:"small",onChange:function(e){return D(e.target.value)},children:[Object(C.jsx)(j.a,{value:"user",style:{color:"black"},children:"User"}),Object(C.jsx)(j.a,{value:"admin",style:{color:"black"},children:"Admin"})]}),Object(C.jsx)(l.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:function(){if(S(!1),""===B||""===A)x.a.fire("Invalid Data","Fill all fields!","error"),p(!0);else{var e=Object(o.a)(Object(o.a)({},J),{},{username:B,role:A});Object(y.r)(e,null===J||void 0===J?void 0:J.id).then((function(e){console.log(e),x.a.fire({icon:"success",title:"Success!",text:"User Updated successfully!",showConfirmButton:!0,timer:1500}),q(),X()})).catch((function(e){console.log(e),Y(),x.a.fire("Failed",e.response.data.message,"error")}))}},fullWidth:!0,children:"Update"})]})})})]})}},955:function(e,t,a){"use strict";var o=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(36)),n=a(1),i=(0,c.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},995:function(e,t,a){"use strict";var o=a(3),c=a(4),n=a(2),i=a(0),l=a(7),r=a(237),s=a(820),d=a(5),b=a(10),u=a(59),j=a(906),m=a(75),p=a(20),O=a(347),h=a(348),v=a(183),f=a(143),g=a(185);function x(e){return Object(f.a)("MuiMenuItem",e)}var y=Object(g.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=a(1),k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=Object(d.a)(j.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,c=e.ownerState;return Object(n.a)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!c.disableGutters&&{paddingLeft:16,paddingRight:16},c.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(o.a)(t,"&.".concat(y.selected),Object(o.a)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(o.a)(t,"&.".concat(y.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(s.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),Object(o.a)(t,"&.".concat(y.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(o.a)(t,"&.".concat(y.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),Object(o.a)(t,"& + .".concat(O.a.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),Object(o.a)(t,"& + .".concat(O.a.inset),{marginLeft:52}),Object(o.a)(t,"& .".concat(v.a.root),{marginTop:0,marginBottom:0}),Object(o.a)(t,"& .".concat(v.a.inset),{paddingLeft:36}),Object(o.a)(t,"& .".concat(h.a.root),{minWidth:36}),t),!c.dense&&Object(o.a)({},a.breakpoints.up("sm"),{minHeight:"auto"}),c.dense&&Object(n.a)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,Object(o.a)({},"& .".concat(h.a.root," svg"),{fontSize:"1.25rem"})))})),S=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiMenuItem"}),o=a.autoFocus,s=void 0!==o&&o,d=a.component,j=void 0===d?"li":d,O=a.dense,h=void 0!==O&&O,v=a.divider,f=void 0!==v&&v,g=a.disableGutters,y=void 0!==g&&g,S=a.focusVisibleClassName,U=a.role,I=void 0===U?"menuitem":U,B=a.tabIndex,M=Object(c.a)(a,k),N=i.useContext(u.a),V={dense:h||N.dense||!1,disableGutters:y},z=i.useRef(null);Object(m.a)((function(){s&&z.current&&z.current.focus()}),[s]);var R,F=Object(n.a)({},a,{dense:V.dense,divider:f,disableGutters:y}),G=function(e){var t=e.disabled,a=e.dense,o=e.divider,c=e.disableGutters,i=e.selected,l=e.classes,s={root:["root",a&&"dense",t&&"disabled",!c&&"gutters",o&&"divider",i&&"selected"]},d=Object(r.a)(s,x,l);return Object(n.a)({},l,d)}(a),A=Object(p.a)(z,t);return a.disabled||(R=void 0!==B?B:-1),Object(C.jsx)(u.a.Provider,{value:V,children:Object(C.jsx)(w,Object(n.a)({ref:A,role:I,tabIndex:R,component:j,focusVisibleClassName:Object(l.a)(G.focusVisible,S)},M,{ownerState:F,classes:G}))})}));t.a=S}}]);
//# sourceMappingURL=8.053a23d9.chunk.js.map