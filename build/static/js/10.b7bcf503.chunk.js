(this["webpackJsonpAdmin Panel"]=this["webpackJsonpAdmin Panel"]||[]).push([[10],{1019:function(e,t,n){"use strict";n.r(t);var a=n(46),i=n(124),r=n(239),s=n(186),c=n(21),o=n(8),l=n(15),d=n.n(l),u=n(0),j=n(376),m=n(377),b=n(240),x=n(839),h=n(838),p=n(935),O=n(916),f=n(836),g=n(835),v=n(891),L=n(178),w=n(337),y=n(27),k=n(897),W=n.p+"static/media/google.a025da87.svg",S=n.p+"static/media/twitter.3e49f642.svg",C=n.p+"static/media/facebook.eb4c069b.svg",B=n(1),H=function(){var e=Object(y.a)(),t=Object(k.a)(e.breakpoints.down("sm")),n=function(){var e=Object(c.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(c.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(r.a,{direction:"row",spacing:t?1:2,justifyContent:t?"space-around":"space-between",sx:{"& .MuiButton-startIcon":{mr:t?0:1,ml:t?0:-.5}},children:[Object(B.jsx)(g.a,{variant:"outlined",color:"secondary",fullWidth:!t,startIcon:Object(B.jsx)("img",{src:W,alt:"Google"}),onClick:n,children:!t&&"Google"}),Object(B.jsx)(g.a,{variant:"outlined",color:"secondary",fullWidth:!t,startIcon:Object(B.jsx)("img",{src:S,alt:"Twitter"}),onClick:a,children:!t&&"Twitter"}),Object(B.jsx)(g.a,{variant:"outlined",color:"secondary",fullWidth:!t,startIcon:Object(B.jsx)("img",{src:C,alt:"Facebook"}),onClick:i,children:!t&&"Facebook"})]})},M=n(169),G=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t},P=n(840),R=n(841),F=function(){var e=Object(u.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],y=Object(u.useState)(!1),k=Object(o.a)(y,2),W=k[0],S=k[1],C=function(){S(!W)},F=function(e){e.preventDefault()},E=function(e){var t,n=G(e);l((t=n)<2?{label:"Poor",color:"error.main"}:t<3?{label:"Weak",color:"warning.main"}:t<4?{label:"Normal",color:"warning.dark"}:t<5?{label:"Good",color:"success.main"}:t<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"})};return Object(u.useEffect)((function(){E("")}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(w.a,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:L.a().shape({firstname:L.b().max(255).required("First Name is required"),lastname:L.b().max(255).required("Last Name is required"),email:L.b().email("Must be a valid email").max(255).required("Email is required"),password:L.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(c.a)(d.a.mark((function e(t,n){var a,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,r=n.setSubmitting;try{i({success:!1}),r(!1)}catch(t){console.error(t),i({success:!1}),a({submit:t.message}),r(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,c=e.handleBlur,o=e.handleChange,l=e.handleSubmit,d=e.isSubmitting,u=e.touched,L=e.values;return Object(B.jsx)("form",{noValidate:!0,onSubmit:l,children:Object(B.jsxs)(i.a,{container:!0,spacing:3,children:[Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsxs)(r.a,{spacing:1,children:[Object(B.jsx)(j.a,{htmlFor:"firstname-signup",children:"First Name*"}),Object(B.jsx)(m.a,{id:"firstname-login",type:"firstname",value:L.firstname,name:"firstname",onBlur:c,onChange:o,placeholder:"John",fullWidth:!0,error:Boolean(u.firstname&&t.firstname)}),u.firstname&&t.firstname&&Object(B.jsx)(b.a,{error:!0,id:"helper-text-firstname-signup",children:t.firstname})]})}),Object(B.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(B.jsxs)(r.a,{spacing:1,children:[Object(B.jsx)(j.a,{htmlFor:"lastname-signup",children:"Last Name*"}),Object(B.jsx)(m.a,{fullWidth:!0,error:Boolean(u.lastname&&t.lastname),id:"lastname-signup",type:"lastname",value:L.lastname,name:"lastname",onBlur:c,onChange:o,placeholder:"Doe",inputProps:{}}),u.lastname&&t.lastname&&Object(B.jsx)(b.a,{error:!0,id:"helper-text-lastname-signup",children:t.lastname})]})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsxs)(r.a,{spacing:1,children:[Object(B.jsx)(j.a,{htmlFor:"company-signup",children:"Company"}),Object(B.jsx)(m.a,{fullWidth:!0,error:Boolean(u.company&&t.company),id:"company-signup",value:L.company,name:"company",onBlur:c,onChange:o,placeholder:"Demo Inc.",inputProps:{}}),u.company&&t.company&&Object(B.jsx)(b.a,{error:!0,id:"helper-text-company-signup",children:t.company})]})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsxs)(r.a,{spacing:1,children:[Object(B.jsx)(j.a,{htmlFor:"email-signup",children:"Email Address*"}),Object(B.jsx)(m.a,{fullWidth:!0,error:Boolean(u.email&&t.email),id:"email-login",type:"email",value:L.email,name:"email",onBlur:c,onChange:o,placeholder:"demo@company.com",inputProps:{}}),u.email&&t.email&&Object(B.jsx)(b.a,{error:!0,id:"helper-text-email-signup",children:t.email})]})}),Object(B.jsxs)(i.a,{item:!0,xs:12,children:[Object(B.jsxs)(r.a,{spacing:1,children:[Object(B.jsx)(j.a,{htmlFor:"password-signup",children:"Password"}),Object(B.jsx)(m.a,{fullWidth:!0,error:Boolean(u.password&&t.password),id:"password-signup",type:W?"text":"password",value:L.password,name:"password",onBlur:c,onChange:function(e){o(e),E(e.target.value)},endAdornment:Object(B.jsx)(x.a,{position:"end",children:Object(B.jsx)(h.a,{"aria-label":"toggle password visibility",onClick:C,onMouseDown:F,edge:"end",size:"large",children:W?Object(B.jsx)(P.a,{}):Object(B.jsx)(R.a,{})})}),placeholder:"******",inputProps:{}}),u.password&&t.password&&Object(B.jsx)(b.a,{error:!0,id:"helper-text-password-signup",children:t.password})]}),Object(B.jsx)(p.a,{fullWidth:!0,sx:{mt:2},children:Object(B.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",children:[Object(B.jsx)(i.a,{item:!0,children:Object(B.jsx)(O.a,{sx:{bgcolor:null===n||void 0===n?void 0:n.color,width:85,height:8,borderRadius:"7px"}})}),Object(B.jsx)(i.a,{item:!0,children:Object(B.jsx)(s.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===n||void 0===n?void 0:n.label})})]})})]}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsxs)(s.a,{variant:"body2",children:["By Signing up, you agree to our \xa0",Object(B.jsx)(f.a,{variant:"subtitle2",component:a.b,to:"#",children:"Terms of Service"}),"\xa0 and \xa0",Object(B.jsx)(f.a,{variant:"subtitle2",component:a.b,to:"#",children:"Privacy Policy"})]})}),t.submit&&Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsx)(b.a,{error:!0,children:t.submit})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsx)(M.a,{children:Object(B.jsx)(g.a,{disableElevation:!0,disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsx)(v.a,{children:Object(B.jsx)(s.a,{variant:"caption",children:"Sign up with"})})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsx)(H,{})})]})})}})})},E=n(962);t.default=function(){return Object(B.jsx)(E.a,{children:Object(B.jsxs)(i.a,{container:!0,spacing:3,children:[Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsxs)(r.a,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[Object(B.jsx)(s.a,{variant:"h3",children:"Sign up"}),Object(B.jsx)(s.a,{component:a.b,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),Object(B.jsx)(i.a,{item:!0,xs:12,children:Object(B.jsx)(F,{})})]})})}},962:function(e,t,n){"use strict";var a=n(916),i=n(124),r=n(6),s=n(47),c=n(71),o=n(1),l=["children"],d=function(e){var t=e.children,n=Object(s.a)(e,l);return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{border:!1,boxShadow:!0,shadow:function(e){return e.customShadows.z1},children:Object(o.jsx)(a.a,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:t})}))},u=n(250),j=n(897),m=n(3),b=n(4),x=n(2),h=n(0),p=n(7),O=n(374),f=n(143),g=n(237),v=n(822),L=n(227),w=Object(L.a)(),y=n(834),k=["className","component","disableGutters","fixed","maxWidth","classes"],W=Object(y.a)(),S=w("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat(Object(O.a)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),C=function(e){return Object(v.a)({props:e,name:"MuiContainer",defaultTheme:W})},B=function(e,t){var n=e.classes,a=e.fixed,i=e.disableGutters,r=e.maxWidth,s={root:["root",r&&"maxWidth".concat(Object(O.a)(String(r))),a&&"fixed",i&&"disableGutters"]};return Object(g.a)(s,(function(e){return Object(f.a)(t,e)}),n)};var H=n(9),M=n(5),G=n(10),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?S:t,a=e.useThemeProps,i=void 0===a?C:a,r=e.componentName,s=void 0===r?"MuiContainer":r,c=n((function(e){var t=e.theme,n=e.ownerState;return Object(x.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&Object(m.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,i=t.breakpoints.values[a];return 0!==i&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return Object(x.a)({},"xs"===n.maxWidth&&Object(m.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&Object(m.a)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),l=h.forwardRef((function(e,t){var n=i(e),a=n.className,r=n.component,l=void 0===r?"div":r,d=n.disableGutters,u=void 0!==d&&d,j=n.fixed,m=void 0!==j&&j,h=n.maxWidth,O=void 0===h?"lg":h,f=Object(b.a)(n,k),g=Object(x.a)({},n,{component:l,disableGutters:u,fixed:m,maxWidth:O}),v=B(g,s);return Object(o.jsx)(c,Object(x.a)({as:l,ownerState:g,className:Object(p.a)(v.root,a),ref:t},f))}));return l}({createStyledComponent:Object(M.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat(Object(H.a)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return Object(G.a)({props:e,name:"MuiContainer"})}}),R=P,F=n(239),E=function(){var e=Object(j.a)((function(e){return e.breakpoints.down("sm")}));return Object(o.jsx)(R,{maxWidth:"xl",children:Object(o.jsx)(F.a,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit"})})},I=n(27),N=function(){var e=Object(I.a)();return Object(o.jsx)(a.a,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0},children:Object(o.jsxs)("svg",{width:"100%",height:"calc(100vh - 175px)",viewBox:"0 0 405 809",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("path",{d:"M-358.39 358.707L-293.914 294.23L-293.846 294.163H-172.545L-220.81 342.428L-233.272 354.889L-282.697 404.314L-276.575 410.453L0.316589 687.328L283.33 404.314L233.888 354.889L230.407 351.391L173.178 294.163H294.48L294.547 294.23L345.082 344.765L404.631 404.314L0.316589 808.629L-403.998 404.314L-358.39 358.707ZM0.316589 0L233.938 233.622H112.637L0.316589 121.301L-112.004 233.622H-233.305L0.316589 0Z",fill:e.palette.primary.light}),Object(o.jsx)("path",{d:"M-516.39 358.707L-451.914 294.23L-451.846 294.163H-330.545L-378.81 342.428L-391.272 354.889L-440.697 404.314L-434.575 410.453L-157.683 687.328L125.33 404.314L75.8879 354.889L72.4068 351.391L15.1785 294.163H136.48L136.547 294.23L187.082 344.765L246.631 404.314L-157.683 808.629L-561.998 404.314L-516.39 358.707ZM-157.683 0L75.9383 233.622H-45.3627L-157.683 121.301L-270.004 233.622H-391.305L-157.683 0Z",fill:e.palette.success.light,opacity:"0.6"}),Object(o.jsx)("path",{d:"M-647.386 358.707L-582.91 294.23L-582.842 294.163H-461.541L-509.806 342.428L-522.268 354.889L-571.693 404.314L-565.571 410.453L-288.68 687.328L-5.66624 404.314L-55.1082 354.889L-58.5893 351.391L-115.818 294.163H5.48342L5.5507 294.23L56.0858 344.765L115.635 404.314L-288.68 808.629L-692.994 404.314L-647.386 358.707ZM-288.68 0L-55.0578 233.622H-176.359L-288.68 121.301L-401 233.622H-522.301L-288.68 0Z",fill:e.palette.error.lighter,opacity:"1"})]})})};t.a=function(e){var t=e.children;return Object(o.jsxs)(a.a,{sx:{minHeight:"100vh"},children:[Object(o.jsx)(N,{}),Object(o.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(o.jsx)(i.a,{item:!0,xs:12,sx:{ml:3,mt:3},children:Object(o.jsx)(u.a,{})}),Object(o.jsx)(i.a,{item:!0,xs:12,children:Object(o.jsx)(i.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:Object(o.jsx)(i.a,{item:!0,children:Object(o.jsx)(d,{children:t})})})}),Object(o.jsx)(i.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(o.jsx)(E,{})})]})]})}}}]);
//# sourceMappingURL=10.b7bcf503.chunk.js.map