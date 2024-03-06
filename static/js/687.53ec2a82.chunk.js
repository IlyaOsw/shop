"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[687],{6095:(e,t,o)=>{o.d(t,{B:()=>u});var n=o(9095),i=o(697),s=o(890),r=o(4518),l=o(2791),a=o(1964),c=o(9230),d=o(2739),x=o(2003),h=o(184);const p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:4,textAlign:"center",borderRadius:"25px"},u=()=>{const{t:e}=(0,c.$G)(),[t,o]=l.useState(!0),u=()=>o(!1);return(0,h.jsx)(n.Z,{open:t,onClose:u,closeAfterTransition:!0,slots:{backdrop:d.Z},slotProps:{backdrop:{timeout:500}},children:(0,h.jsx)(x.Z,{in:t,children:(0,h.jsxs)(i.Z,{sx:p,children:[(0,h.jsx)(a.Z,{fontSize:"large",color:"error"}),(0,h.jsx)(s.Z,{variant:"h6",color:"red",children:e("noEmptyField")}),(0,h.jsx)(r.Z,{variant:"contained",onClick:u,sx:{mt:2,borderRadius:"25px"},children:e("close")})]})})})}},3922:(e,t,o)=>{o.d(t,{r:()=>r});var n=o(2791),i=o(9658),s=o(184);const r=n.forwardRef((function(e,t){return(0,s.jsx)(i.Z,{elevation:6,ref:t,variant:"filled",...e})}))},7687:(e,t,o)=>{o.r(t),o.d(t,{default:()=>he});var n=o(2791),i=o(9230),s=o(9164),r=o(890),l=o(4721),a=o(697),c=o(8825),d=o(7621),x=o(5527),h=o(6647),p=o(9504),u=o(2169),m=o(1087),j=o(184);const g=[{id:0,label:"Card1",description:"cardInfo1"},{id:1,label:"Card2",description:"cardInfo2"}],b=()=>(0,j.jsx)(j.Fragment,{children:g.map((e=>(0,j.jsx)(x.Z,{elevation:3,sx:{mt:3},children:(0,j.jsx)(m.rU,{to:"/news",style:{textDecoration:"none",color:"inherit"},children:(0,j.jsx)(d.Z,{sx:{position:"relative",maxWidth:"730px"},children:(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(u.Z,{component:"img",height:"500",src:"".concat("/shop","/Images/MainPageImages/").concat(e.label,".jpg"),alt:e.label}),(0,j.jsxs)(p.Z,{children:[(0,j.jsx)(r.Z,{gutterBottom:!0,variant:"h5",children:(0,c.t)(e.label)}),(0,j.jsx)(r.Z,{variant:"body2",color:"text.secondary",children:(0,c.t)(e.description)})]})]})})})},e.id)))});var Z=o(3967),f=o(5193),v=o(9684),y=o(3896),I=o(7488),C=o(2430),w=o(7486);function S(e){const{children:t,value:o,index:n,...i}=e;return(0,j.jsx)("div",{role:"tabpanel",hidden:o!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n),...i,children:o===n&&(0,j.jsx)(a.Z,{sx:{p:3},children:(0,j.jsx)(a.Z,{children:t})})})}const k=()=>{const{t:e}=(0,i.$G)(),t=(0,Z.Z)(),[o,c]=n.useState(0),d=(0,f.Z)(t.breakpoints.down("lg")),x=[(0,j.jsx)(I.Z,{fontSize:"large",color:"primary"}),(0,j.jsx)(C.Z,{fontSize:"large",color:"primary"}),(0,j.jsx)(w.Z,{fontSize:"large",color:"primary"})];return(0,j.jsx)(s.Z,{children:(0,j.jsxs)(a.Z,{sx:{position:"relative",mt:10},children:[(0,j.jsx)(r.Z,{variant:"h5",sx:{textAlign:"center"},children:e("whyWe")}),(0,j.jsx)(l.Z,{sx:{m:2},color:"lightgray"}),(0,j.jsxs)(v.Z,{value:o,onChange:(e,t)=>{c(t)},variant:"fullWidth",orientation:d?"vertical":"horizontal",children:[(0,j.jsx)(y.Z,{label:e("chooseTitle1"),sx:{color:t.palette.info.light}}),(0,j.jsx)(y.Z,{label:e("chooseTitle2"),sx:{color:t.palette.info.light}}),(0,j.jsx)(y.Z,{label:e("chooseTitle3"),sx:{color:t.palette.info.light}})]}),(0,j.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[{id:0,label:"choose1"},{id:1,label:"choose2"},{id:2,label:"choose3"}].map(((n,i)=>(0,j.jsxs)(S,{value:o,index:i,dir:t.direction,children:[(0,j.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:x[i]}),(0,j.jsx)(r.Z,{variant:"body2",sx:{maxWidth:"400px",height:"200px",textAlign:"center",mt:2},children:e(n.label)})]},n.id)))})]})})};var P=o(6934),T=o(4599),M=o(6580),G=o(6256),O=o(4665),$=o(1559),A=o(4988),E=o(68),W=o(4518),L=o(5351),N=o(3922),F=o(6095),B=o(7391);const z=(0,o(3457).Z)(B.Z)({"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#1976d2"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#1976d2"}}),R=e=>{let{commentContent:t,setCommentContent:o}=e;return(0,j.jsx)(a.Z,{children:(0,j.jsx)(z,{value:t,onChange:e=>o(e.target.value),id:"outlined-multiline-static",label:"Comment",multiline:!0,rows:5,variant:"outlined",InputLabelProps:{style:{color:"#1976d2"}},InputProps:{style:{color:"#a6a6a6"}}})})},U=()=>{const{t:e}=(0,i.$G)(),[t,o]=n.useState(""),[s,l]=n.useState(!1),[c,d]=n.useState(!1),[,x]=n.useState(!1),[h]=n.useState(void 0);return(0,j.jsxs)(a.Z,{component:"form",sx:{"& .MuiTextField-root":{mt:3,mb:3,width:"33ch"}},noValidate:!0,autoComplete:"off",children:[(0,j.jsx)(r.Z,{sx:{mt:3},children:e("leaveComment")}),(0,j.jsx)(R,{commentContent:t,setCommentContent:o}),(0,j.jsx)(E.Z,{title:e("sendComment"),arrow:!0,children:(0,j.jsx)(W.Z,{variant:"contained",onClick:()=>{0===t.length?(d(!0),x(!0)):(o(""),l(!0),d(!1))},sx:{borderRadius:"25px"},children:e("send")})}),c&&(0,j.jsx)(F.B,{}),s&&(0,j.jsx)(L.Z,{open:s,autoHideDuration:2e3,onClose:()=>l(!1),TransitionComponent:h,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,j.jsx)(N.r,{onClose:()=>l(!1),children:e("commentSended")})},h?h.name:"")]})},V=(0,P.ZP)(T.Z)((e=>{let{theme:t}=e;return{"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:t.palette.grey[400]}}})),_={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},D={1:{icon:(0,j.jsx)(M.Z,{color:"error"}),label:"Very Dissatisfied"},2:{icon:(0,j.jsx)(G.Z,{color:"error"}),label:"Dissatisfied"},3:{icon:(0,j.jsx)(O.Z,{color:"warning"}),label:"Neutral"},4:{icon:(0,j.jsx)($.Z,{color:"success"}),label:"Satisfied"},5:{icon:(0,j.jsx)(A.Z,{color:"success"}),label:"Very Satisfied"}},H=e=>{const{value:t,...o}=e;return(0,j.jsx)("span",{...o,children:D[t].icon})},Y=e=>"".concat(e," Star").concat(1!==e?"s":"",", ").concat(_[e]),q=()=>{const{t:e}=(0,i.$G)(),[t,o]=n.useState(5),[s,l]=n.useState(-1),[c,d]=n.useState(!1);return(0,j.jsxs)(a.Z,{sx:{mt:10,mb:5,textAlign:"center"},children:[(0,j.jsx)(r.Z,{variant:"h5",sx:{paddingBottom:"20px"},children:e("feedback")}),(0,j.jsx)(V,{value:t,IconContainerComponent:H,getLabelText:Y,highlightSelectedOnly:!0,onChange:(e,t)=>{o(t)},onChangeActive:(e,t)=>{l(t)},onClick:()=>{window.scroll({left:0,top:document.body.scrollHeight,behavior:"smooth"}),d(!0)}}),null!==t&&(0,j.jsx)(a.Z,{children:_[-1!==s?s:t]}),c&&(0,j.jsx)(U,{})]})};var J=o(31),K=o(2094);const Q=e=>{let{item:t}=e;const{t:o}=(0,i.$G)();return(0,j.jsxs)(a.Z,{sx:{textAlign:"start",maxWidth:"300px",padding:"10px"},children:[(0,j.jsx)(K.Z,{}),(0,j.jsx)(r.Z,{variant:"h6",sx:{paddingBottom:"5px"},children:o(t.label)}),(0,j.jsx)(r.Z,{variant:"body2",children:o(t.description)})]},t.id)},X=[{id:0,label:J.Gm.TITLE1,description:J._$.INFO1},{id:1,label:J.Gm.TITLE2,description:J._$.INFO2},{id:2,label:J.Gm.TITLE3,description:J._$.INFO3},{id:3,label:J.Gm.TITLE4,description:J._$.INFO4}],ee=()=>(0,j.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap"},children:X.map((e=>(0,j.jsx)(Q,{item:e},e.id)))}),te=()=>{const{t:e}=(0,i.$G)();return(0,j.jsxs)(a.Z,{sx:{textAlign:"center",position:"relative"},children:[(0,j.jsx)(r.Z,{variant:"h5",sx:{mt:10},children:e("about")}),(0,j.jsx)(l.Z,{sx:{m:2},color:"lightgray"}),(0,j.jsx)(a.Z,{sx:{display:"flex",mt:5,justifyContent:"space-around"},children:(0,j.jsx)(ee,{item:{id:0,label:J.Gm.TITLE1,description:J._$.INFO1}})})]})},oe=[{id:0,label:J.n3.SAMSUNG},{id:1,label:J.n3.GIGABYTE},{id:2,label:J.n3.LENOVO},{id:3,label:J.n3.INTEL},{id:4,label:J.n3.PHILIPS},{id:5,label:J.n3.ASUS}],ne=()=>{const{t:e}=(0,i.$G)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{variant:"h5",sx:{textAlign:"center"},children:e("ourPartners")}),(0,j.jsx)(l.Z,{sx:{m:2},color:"lightgray"}),(0,j.jsx)(a.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"20px 0px",position:"relative"},children:oe.map((e=>(0,j.jsx)("img",{style:{height:"70px",width:"130px",marginTop:"30px"},src:"".concat("/shop","/Images/Logos/").concat(e.label,".svg"),alt:e.label},e.id)))})]})};var ie=o(533);const se=[{id:0,title:"Phones",url:"".concat("/shop","/Images/MainPageImages/Products/phones.jpg"),width:"33.5%"},{id:1,title:"Watches",url:"".concat("/shop","/Images/MainPageImages/Products/watches.jpg"),width:"33%"},{id:2,title:"Headphones",url:"".concat("/shop","/Images/MainPageImages/Products/headphones.jpg"),width:"33.5%"}],re=(0,P.ZP)(ie.Z)((e=>{let{theme:t}=e;return{position:"relative",height:400,[t.breakpoints.down("sm")]:{width:"100% !important",height:200},"&:hover, &.Mui-focusVisible":{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.1},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}}})),le=(0,P.ZP)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),ae=(0,P.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.common.white}})),ce=(0,P.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.2,transition:t.transitions.create("opacity")}})),de=(0,P.ZP)("span")((e=>{let{theme:t}=e;return{height:3,width:18,backgroundColor:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}})),xe=()=>{const{t:e}=(0,i.$G)();return(0,j.jsx)(x.Z,{elevation:6,sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%",mt:10,mb:5},children:se.map((t=>(0,j.jsxs)(re,{focusRipple:!0,style:{width:t.width},children:[(0,j.jsx)(le,{style:{backgroundImage:"url(".concat(t.url,")")}}),(0,j.jsx)(ce,{className:"MuiImageBackdrop-root"}),(0,j.jsx)(m.rU,{to:"/e-store",children:(0,j.jsx)(ae,{children:(0,j.jsxs)(r.Z,{component:"span",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:e=>"calc(".concat(e.spacing(1)," + 6px)")},children:[e(t.title),(0,j.jsx)(de,{className:"MuiImageMarked-root"})]})})})]},t.id)))})},he=n.memo((()=>{const{t:e}=(0,i.$G)();return n.useEffect((()=>{window.scroll(0,0)}),[]),(0,j.jsxs)(s.Z,{maxWidth:"xl",children:[(0,j.jsx)(r.Z,{variant:"h5",sx:{m:3,textAlign:"center"},children:e("welcome")}),(0,j.jsx)(l.Z,{sx:{m:2},color:"lightgray"}),(0,j.jsx)(a.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:(0,j.jsx)(b,{})}),(0,j.jsx)(k,{}),(0,j.jsx)(ne,{}),(0,j.jsx)(xe,{}),(0,j.jsx)(te,{}),(0,j.jsx)(q,{})]})}))}}]);
//# sourceMappingURL=687.53ec2a82.chunk.js.map