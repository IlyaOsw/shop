"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[769],{3619:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(2791),a=r(4518),s=r(9312),n=r(5289),i=r(7123),l=r(9157),c=r(1691),d=r(5661),h=r(3796),p=r(9230),u=r(184);function m(){const{t:e}=(0,p.$G)(),[t,r]=o.useState(!1),m=()=>{r(!1)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a.Z,{variant:"outlined",onClick:()=>{r(!0)},children:[(0,u.jsx)(h.Z,{}),e("share")]}),(0,u.jsxs)(n.Z,{open:t,onClose:m,PaperProps:{component:"form",onSubmit:e=>{e.preventDefault();const t=new FormData(e.currentTarget),r=Object.fromEntries(t.entries()).email;console.log(r),m()}},children:[(0,u.jsxs)(d.Z,{children:[" ",e("share2")]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(c.Z,{children:e("shareText")}),(0,u.jsx)(s.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:e("emailAddress"),type:"email",fullWidth:!0,variant:"standard"})]}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(a.Z,{onClick:m,children:e("cancel")}),(0,u.jsx)(a.Z,{type:"submit",children:e("share2")})]})]})]})}},2769:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var o=r(2791),a=r(697),s=r(5294),n=r(3366),i=r(7462),l=r(3733),c=r(4419),d=r(6934),h=r(1402),p=r(9201),u=r(184);const m=(0,p.Z)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var x=r(5878),v=r(1217);function g(e){return(0,v.Z)("MuiAvatar",e)}(0,x.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),j=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,d.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const y=o.forwardRef((function(e,t){const r=(0,h.Z)({props:e,name:"MuiAvatar"}),{alt:a,children:s,className:d,component:p="div",imgProps:m,sizes:x,src:v,srcSet:y,variant:w="circular"}=r,z=(0,n.Z)(r,f);let k=null;const M=function(e){let{crossOrigin:t,referrerPolicy:r,src:a,srcSet:s}=e;const[n,i]=o.useState(!1);return o.useEffect((()=>{if(!a&&!s)return;i(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&i("loaded")},o.onerror=()=>{e&&i("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=a,s&&(o.srcset=s),()=>{e=!1}}),[t,r,a,s]),n}((0,i.Z)({},m,{src:v,srcSet:y})),S=v||y,C=S&&"error"!==M,P=(0,i.Z)({},r,{colorDefault:!C,component:p,variant:w}),R=(e=>{const{classes:t,variant:r,colorDefault:o}=e,a={root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(a,g,t)})(P);return k=C?(0,u.jsx)(j,(0,i.Z)({alt:a,srcSet:y,src:v,sizes:x,ownerState:P,className:R.img},m)):null!=s?s:S&&a?a[0]:(0,u.jsx)(b,{ownerState:P,className:R.fallback}),(0,u.jsx)(Z,(0,i.Z)({as:p,ownerState:P,className:(0,l.Z)(R.root,d),ref:t},z,{children:k}))}));var w=r(6043),z=r(7621),k=r(2363),M=r(9504),S=r(890),C=r(1398),P=r(6213),R=r(4866),I=r(6730),H=r(2888),A=r(3619),B=r(9230);const F=(0,d.ZP)(w.Z)((e=>{let{theme:t}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));function O(e){let t,r=0;for(t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r);let o="#";for(t=0;t<3;t+=1){o+="00".concat((r>>8*t&255).toString(16)).slice(-2)}return o}function V(e){return{sx:{bgcolor:O(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}}const D=e=>{let{user:t}=e;const{t:r}=(0,B.$G)();return(0,u.jsx)(a.Z,{children:(0,u.jsxs)(z.Z,{sx:{width:"300px",height:"450px",marginBottom:"20px",position:"relative"},children:[(0,u.jsxs)(M.Z,{children:[(0,u.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[t.id%2===0?(0,u.jsx)(F,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,u.jsx)(y,{...V(t.name)})}):(0,u.jsx)(y,{...V(t.name)}),(0,u.jsx)(S.Z,{variant:"h5",sx:{p:2},children:t.name})]}),(0,u.jsxs)(S.Z,{variant:"h6",color:"text.secondary",children:[(0,u.jsxs)(a.Z,{sx:{p:.5},children:[(0,u.jsx)(C.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),r("email"),": ",t.email]}),(0,u.jsxs)(a.Z,{sx:{p:.5},children:[(0,u.jsx)(P.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),r("phone"),": ",t.phone]}),(0,u.jsxs)(a.Z,{sx:{p:.5},children:[(0,u.jsx)(R.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),r("city"),": ",t.address.city]}),(0,u.jsxs)(a.Z,{sx:{p:.5},children:[(0,u.jsx)(I.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),r("website"),": ",t.website]}),(0,u.jsxs)(a.Z,{sx:{p:.5},children:[(0,u.jsx)(H.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),r("company"),": ",t.company.name]})]})]}),(0,u.jsx)(k.Z,{sx:{position:"absolute",right:"5%",bottom:"1%"},children:(0,u.jsx)(A.Z,{})})]})},t.id)},T=()=>{const[e,t]=(0,o.useState)([]);return(0,o.useEffect)((()=>{(async()=>{const e=await s.Z.get("https://jsonplaceholder.typicode.com/users");t(e.data)})()}),[]),(0,u.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",mt:5},children:e.filter((e=>e.id<=5)).map((e=>(0,u.jsx)(D,{user:e},e.id)))})};var N=r(5527),G=r(533);const W=[{url:"".concat("/shop","/Images/Clients/clientsImage.jpg"),title:"Breakfast",width:"100%"}],q=(0,d.ZP)(G.Z)((e=>{let{theme:t}=e;return{position:"relative",height:600,[t.breakpoints.down("sm")]:{width:"100% !important",height:250},"&:hover, &.Mui-focusVisible":{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}}})),E=(0,d.ZP)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),L=(0,d.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.common.white}})),$=(0,d.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:0,transition:t.transitions.create("opacity")}}));function J(){return(0,u.jsx)(a.Z,{sx:{display:"flex",minWidth:300,width:"50%"},children:W.map((e=>(0,u.jsxs)(q,{focusRipple:!0,sx:{m:.5},style:{width:e.width},children:[(0,u.jsx)(E,{style:{backgroundImage:"url(".concat(e.url,")")}}),(0,u.jsx)($,{className:"MuiImageBackdrop-root"}),(0,u.jsx)(L,{})]},e.title)))})}const K=o.memo((()=>{const{t:e}=(0,B.$G)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S.Z,{variant:"h4",textAlign:"center",sx:{m:3,letterSpacing:"1px"},children:e("clientsTitle")}),(0,u.jsxs)(a.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"},children:[(0,u.jsxs)(a.Z,{sx:{position:"relative",width:"50vh"},children:[(0,u.jsx)(N.Z,{elevation:4,children:(0,u.jsx)(S.Z,{variant:"h5",sx:{p:1},children:e("clientsSubTitle")})}),(0,u.jsx)(N.Z,{elevation:4,children:(0,u.jsx)(S.Z,{variant:"h5",sx:{p:1,m:2},children:e("clientsSubTitle2")})})]}),(0,u.jsx)(J,{})]}),(0,u.jsx)(T,{})]})}))},6730:(e,t,r)=>{var o=r(4836);t.Z=void 0;var a=o(r(5649)),s=r(184),n=(0,a.default)((0,s.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosOutlined");t.Z=n},2888:(e,t,r)=>{var o=r(4836);t.Z=void 0;var a=o(r(5649)),s=r(184),n=(0,a.default)((0,s.jsx)("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}),"BusinessOutlined");t.Z=n},4866:(e,t,r)=>{var o=r(4836);t.Z=void 0;var a=o(r(5649)),s=r(184),n=(0,a.default)((0,s.jsx)("path",{d:"M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"}),"FmdGoodOutlined");t.Z=n},1398:(e,t,r)=>{var o=r(4836);t.Z=void 0;var a=o(r(5649)),s=r(184),n=(0,a.default)((0,s.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutlineOutlined");t.Z=n},6213:(e,t,r)=>{var o=r(4836);t.Z=void 0;var a=o(r(5649)),s=r(184),n=(0,a.default)((0,s.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM18 11l5-5-5-5v3h-4v4h4z"}),"PhoneForwardedOutlined");t.Z=n}}]);
//# sourceMappingURL=769.1058843e.chunk.js.map