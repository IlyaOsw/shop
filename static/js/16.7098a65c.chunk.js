"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[16],{3619:(e,s,n)=>{n.d(s,{Z:()=>p});var t=n(2791),r=n(4518),a=n(9312),i=n(5289),c=n(7123),l=n(9157),o=n(1691),d=n(5661),x=n(3796),h=n(9230),m=n(184);function p(){const{t:e}=(0,h.$G)(),[s,n]=t.useState(!1),p=()=>{n(!1)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.Z,{variant:"outlined",onClick:()=>{n(!0)},children:[(0,m.jsx)(x.Z,{}),e("share")]}),(0,m.jsxs)(i.Z,{open:s,onClose:p,PaperProps:{component:"form",onSubmit:e=>{e.preventDefault();const s=new FormData(e.currentTarget),n=Object.fromEntries(s.entries()).email;console.log(n),p()}},children:[(0,m.jsxs)(d.Z,{children:[" ",e("share2")]}),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(o.Z,{children:e("shareText")}),(0,m.jsx)(a.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:e("emailAddress"),type:"email",fullWidth:!0,variant:"standard"})]}),(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(r.Z,{onClick:p,children:e("cancel")}),(0,m.jsx)(r.Z,{type:"submit",children:e("share2")})]})]})]})}},2016:(e,s,n)=>{n.r(s),n.d(s,{default:()=>S});var t=n(2791);const r="Clients_clients__Cg97z";var a=n(697),i=n(5294),c=n(3044),l=n(6934),o=n(6043);const d={clientInfo:"ClientInfo_clientInfo__osLD0",card:"ClientInfo_card__fZciW",clientName:"ClientInfo_clientName__pwu-I",share:"ClientInfo_share__LPdZ9"};var x=n(7621),h=n(2363),m=n(9504),p=n(890),j=n(1398),Z=n(6213),u=n(4866),g=n(6730),f=n(2888),y=n(3619),v=n(9230),b=n(184);const _=(0,l.ZP)(o.Z)((e=>{let{theme:s}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(s.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));function C(e){let s,n=0;for(s=0;s<e.length;s+=1)n=e.charCodeAt(s)+((n<<5)-n);let t="#";for(s=0;s<3;s+=1){t+="00".concat((n>>8*s&255).toString(16)).slice(-2)}return t}function N(e){return{sx:{bgcolor:C(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}}const k=e=>{let{user:s}=e;const{t:n}=(0,v.$G)();return(0,b.jsx)(a.Z,{className:d.clientInfo,children:(0,b.jsxs)(x.Z,{className:d.card,children:[(0,b.jsxs)(m.Z,{children:[(0,b.jsxs)(a.Z,{className:d.clientName,children:[s.id%2===0?(0,b.jsx)(_,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:(0,b.jsx)(c.Z,{...N(s.name),className:d.avatar})}):(0,b.jsx)(c.Z,{...N(s.name),className:d.avatar}),(0,b.jsx)(p.Z,{variant:"h5",sx:{p:2},children:s.name})]}),(0,b.jsxs)(p.Z,{variant:"h6",color:"text.secondary",children:[(0,b.jsxs)(a.Z,{sx:{p:.5},children:[(0,b.jsx)(j.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),n("email"),": ",s.email]}),(0,b.jsxs)(a.Z,{sx:{p:.5},children:[(0,b.jsx)(Z.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),n("phone"),": ",s.phone]}),(0,b.jsxs)(a.Z,{sx:{p:.5},children:[(0,b.jsx)(u.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),n("city"),": ",s.address.city]}),(0,b.jsxs)(a.Z,{sx:{p:.5},children:[(0,b.jsx)(g.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),n("website"),": ",s.website]}),(0,b.jsxs)(a.Z,{sx:{p:.5},children:[(0,b.jsx)(f.Z,{color:"secondary",style:{marginRight:"5px",marginBottom:"-3px"}}),n("company"),": ",s.company.name]})]})]}),(0,b.jsx)(h.Z,{className:d.share,children:(0,b.jsx)(y.Z,{})})]})},s.id)},w=()=>{const[e,s]=(0,t.useState)([]);return(0,t.useEffect)((()=>{(async()=>{const e=await i.Z.get("https://jsonplaceholder.typicode.com/users");s(e.data)})()}),[]),(0,b.jsx)(a.Z,{className:r,children:e.map((e=>(0,b.jsx)(k,{user:e},e.id)))})};var I=n(5527);const S=()=>{const{t:e}=(0,v.$G)();return(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(p.Z,{variant:"h4",textAlign:"center",sx:{m:3,letterSpacing:"1px"},children:e("clientsTitle")}),(0,b.jsx)(a.Z,{sx:{display:"flex",position:"relative",m:2},children:(0,b.jsx)(I.Z,{elevation:4,children:(0,b.jsx)(p.Z,{variant:"h5",textAlign:"center",sx:{m:3},children:e("clientsSubTitle")})})}),(0,b.jsx)(w,{}),(0,b.jsx)(a.Z,{sx:{display:"flex",position:"relative",m:2},children:(0,b.jsx)(I.Z,{elevation:4,children:(0,b.jsx)(p.Z,{variant:"h5",textAlign:"center",sx:{m:3},children:e("clientsDescription")})})})]})}}}]);
//# sourceMappingURL=16.7098a65c.chunk.js.map