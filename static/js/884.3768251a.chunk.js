"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[884],{4200:(e,t,s)=>{s.d(t,{T:()=>m});var n=s(2791),r=s(9230),a=s(697),i=s(4518),l=s(5289),c=s(7123),o=s(9157),x=s(1691),d=s(5661),h=s(7391),p=s(68),j=s(3796),Z=s(184);const m=()=>{const{t:e}=(0,r.$G)(),[t,s]=n.useState(!1),m=()=>s(!1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.Z,{title:e("share2"),arrow:!0,children:(0,Z.jsxs)(i.Z,{variant:"contained",color:"info",onClick:()=>s(!0),sx:{borderRadius:"20px"},children:[(0,Z.jsx)(j.Z,{}),(0,Z.jsx)(a.Z,{sx:{marginLeft:"5px"},children:e("share")})]})}),(0,Z.jsxs)(l.Z,{open:t,onClose:m,PaperProps:{component:"form",onSubmit:e=>{e.preventDefault(),m()}},children:[(0,Z.jsxs)(d.Z,{children:[" ",e("share2")]}),(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(x.Z,{children:e("shareText")}),(0,Z.jsx)(h.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:e("emailAddress"),type:"email",fullWidth:!0,variant:"standard"})]}),(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(i.Z,{onClick:m,children:e("cancel")}),(0,Z.jsx)(i.Z,{type:"submit",children:e("share2")})]})]})]})}},4884:(e,t,s)=>{s.r(t),s.d(t,{default:()=>q});var n=s(2791),r=s(9230),a=s(9164),i=s(890),l=s(4721),c=s(697),o=s(9212),x=s(184);const d=()=>{const[e,t]=(0,n.useState)(new Date);return(0,n.useEffect)((()=>{const e=setInterval((()=>t(new Date)),1e3);return()=>{clearInterval(e)}}),[]),(0,x.jsxs)(c.Z,{sx:{display:"flex",justifyContent:"center",margin:"75px auto"},children:[(0,x.jsx)(o.Z,{color:"info",fontSize:"large"}),(0,x.jsx)(i.Z,{color:"#0288d1",sx:{mt:.5,ml:1,fontSize:"18px"},children:e.toLocaleTimeString()})]})};var h=s(4420),p=s(9504),j=s(3044),Z=s(2363),m=s(1398),g=s(6213),u=s(4866),f=s(6730),b=s(2888),v=s(4200);const y={marginRight:"7px",marginBottom:"-4px"},w=e=>{let{user:t}=e;return(0,x.jsxs)(c.Z,{sx:{height:"400px"},children:[(0,x.jsx)(l.Z,{color:"lightgray"}),(0,x.jsxs)(p.Z,{children:[(0,x.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,x.jsx)(j.Z,{sx:{width:56,height:56},src:"".concat("/shop","/Images/ClientAvatars/").concat(t.avatar,".jpg")}),(0,x.jsx)(i.Z,{variant:"h5",sx:{p:2},children:t.name})]}),(0,x.jsxs)(i.Z,{variant:"h6",children:[(0,x.jsxs)(c.Z,{sx:{p:.75},children:[(0,x.jsx)(m.Z,{color:"info",style:y}),t.email]}),(0,x.jsxs)(c.Z,{sx:{p:.75},children:[(0,x.jsx)(g.Z,{color:"info",style:y}),t.phone]}),(0,x.jsxs)(c.Z,{sx:{p:.75},children:[(0,x.jsx)(u.Z,{color:"info",style:y}),t.city]}),(0,x.jsxs)(c.Z,{sx:{p:.75},children:[(0,x.jsx)(f.Z,{color:"info",style:y}),t.website]}),(0,x.jsxs)(c.Z,{sx:{p:.75},children:[(0,x.jsx)(b.Z,{color:"info",style:y}),t.company]})]})]}),(0,x.jsx)(Z.Z,{sx:{ml:2},children:(0,x.jsx)(v.T,{})})]},t.id)},S=()=>{const e=(0,h.v9)((e=>e.clients));return(0,x.jsx)(c.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:e.map((e=>(0,x.jsx)(w,{user:e},e.id)))})};var k=s(5527);const C=()=>(0,x.jsx)(k.Z,{elevation:6,sx:{mt:5,position:"relative",height:"500px"},children:(0,x.jsx)("img",{src:"".concat("/shop","/Images/Clients/clientsImage.jpg"),alt:"clientsImage",style:{maxHeight:"500px",width:"100%"}})});var I=s(6934),T=s(3875),D=s(4512),A=s(5825),W=s(7122),L=s(2151),P=s(9460),R=s(6856),z=s(3285);const G=(0,I.ZP)(R.Z)((e=>{let{theme:t}=e;return{["&.".concat(z.Z.alternativeLabel)]:{top:22},["&.".concat(z.Z.active)]:{["& .".concat(z.Z.line)]:{backgroundImage:"linear-gradient(95deg, #0288d1 0%, #8e24aa 100%)"}},["&.".concat(z.Z.completed)]:{["& .".concat(z.Z.line)]:{backgroundImage:"linear-gradient(95deg, #0288d1 0%, #8e24aa 100%)"}},["& .".concat(z.Z.line)]:{height:3,border:0,backgroundColor:"dark"===t.palette.mode?t.palette.grey[800]:"#eaeaf0",borderRadius:1}}})),$=(0,I.ZP)("div")((e=>{let{theme:t,ownerState:s}=e;return{backgroundColor:"dark"===t.palette.mode?t.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...s.active&&{backgroundImage:"linear-gradient(95deg, #0288d1 0%, #8e24aa 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...s.completed&&{backgroundImage:"linear-gradient(95deg, #0288d1 0%, #8e24aa 100%)"}}})),E=e=>{const{active:t,completed:s,className:n}=e,r={1:(0,x.jsx)(L.Z,{}),2:(0,x.jsx)(W.Z,{}),3:(0,x.jsx)(P.Z,{})};return(0,x.jsx)($,{ownerState:{completed:s,active:t},className:n,children:r[String(e.icon)]})},F=[{id:0,label:"stepperDescription1"},{id:1,label:"stepperDescription2"},{id:2,label:"stepperDescription3"}],N=()=>{const{t:e}=(0,r.$G)();return(0,x.jsxs)(c.Z,{sx:{mb:10},children:[(0,x.jsx)(i.Z,{variant:"h5",sx:{textAlign:"center",mt:5,mb:5},children:e("stepperTitle")}),(0,x.jsx)(T.Z,{alternativeLabel:!0,activeStep:2,connector:(0,x.jsx)(G,{}),children:F.map((t=>(0,x.jsx)(D.Z,{children:(0,x.jsx)(A.Z,{StepIconComponent:E,children:(0,x.jsx)(i.Z,{color:"#a6a6a6",children:e(t.label)})})},t.id)))})]})},q=()=>{const{t:e}=(0,r.$G)();return n.useEffect((()=>{window.scroll(0,0)}),[]),(0,x.jsxs)(a.Z,{maxWidth:"xl",children:[(0,x.jsx)(i.Z,{variant:"h5",textAlign:"center",sx:{m:3},children:e("clientsTitle")}),(0,x.jsx)(l.Z,{sx:{m:2},color:"lightgray"}),(0,x.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"},children:[(0,x.jsxs)(c.Z,{sx:{maxWidth:"500px",textAlign:"center"},children:[(0,x.jsx)(i.Z,{children:e("clientsSubTitle")}),(0,x.jsx)(i.Z,{sx:{mt:5,mb:5},children:e("clientsSubTitle2")}),(0,x.jsx)(i.Z,{children:e("clientsSubTitle3")})]}),(0,x.jsx)(C,{})]}),(0,x.jsx)(d,{}),(0,x.jsx)(N,{}),(0,x.jsx)(S,{})]})}}}]);
//# sourceMappingURL=884.3768251a.chunk.js.map