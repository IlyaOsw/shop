"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[998],{6095:(e,t,n)=>{n.d(t,{B:()=>h});var i=n(9095),l=n(697),o=n(890),s=n(4518),r=n(8825),a=n(2791),c=n(9388),d=n(184);const x={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:4,textAlign:"center"},h=()=>{const[e,t]=a.useState(!0),n=()=>t(!1);return(0,d.jsx)(i.Z,{open:e,onClose:n,children:(0,d.jsxs)(l.Z,{sx:x,children:[(0,d.jsx)(c.Z,{fontSize:"large",color:"error"}),(0,d.jsx)(o.Z,{variant:"h6",color:"red",children:(0,r.t)("noEmptyField")}),(0,d.jsx)(s.Z,{variant:"contained",onClick:n,sx:{mt:3,borderRadius:"25px"},children:(0,r.t)("close")})]})})}},3922:(e,t,n)=>{n.d(t,{r:()=>s});var i=n(2791),l=n(9658),o=n(184);const s=i.forwardRef((function(e,t){return(0,o.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})}))},3998:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var i=n(2791),l=n(9230),o=n(9164),s=n(890),r=n(4721),a=n(697),c=n(8825),d=n(7621),x=n(5527),h=n(6647),p=n(9504),u=n(2169),m=n(184);const j=[{id:0,label:"Card1",description:"cardInfo1"},{id:1,label:"Card2",description:"cardInfo2"}],g=()=>(0,m.jsx)(m.Fragment,{children:j.map((e=>(0,m.jsx)(x.Z,{elevation:3,sx:{mt:3},children:(0,m.jsx)(d.Z,{sx:{position:"relative",maxWidth:"640px"},children:(0,m.jsxs)(h.Z,{children:[(0,m.jsx)(u.Z,{component:"img",height:"500",src:"".concat("/shop","/Images/MainPageImages/").concat(e.label,".jpg"),alt:"green iguana"}),(0,m.jsxs)(p.Z,{children:[(0,m.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"div",children:(0,c.t)(e.label)}),(0,m.jsx)(s.Z,{variant:"body2",color:"text.secondary",children:(0,c.t)(e.description)})]})]})})},e.id)))});var Z=n(3967),b=n(5193),f=n(9684),v=n(3896),y=n(7488),C=n(2430),I=n(7486);function S(e){const{children:t,value:n,index:i,...l}=e;return(0,m.jsx)("div",{role:"tabpanel",hidden:n!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i),...l,children:n===i&&(0,m.jsx)(a.Z,{sx:{p:3},children:(0,m.jsx)(a.Z,{children:t})})})}const w=()=>{const{t:e}=(0,l.$G)(),t=(0,Z.Z)(),[n,c]=i.useState(0),d=(0,b.Z)(t.breakpoints.down("lg")),x=[(0,m.jsx)(y.Z,{fontSize:"large",color:"primary"}),(0,m.jsx)(C.Z,{fontSize:"large",color:"primary"}),(0,m.jsx)(I.Z,{fontSize:"large",color:"primary"})];return(0,m.jsx)(o.Z,{children:(0,m.jsxs)(a.Z,{sx:{position:"relative",mt:10},children:[(0,m.jsx)(s.Z,{variant:"h5",sx:{textAlign:"center"},children:e("whyWe")}),(0,m.jsx)(r.Z,{sx:{m:2},color:"lightgray"}),(0,m.jsxs)(f.Z,{value:n,onChange:(e,t)=>{c(t)},variant:"fullWidth",orientation:d?"vertical":"horizontal",children:[(0,m.jsx)(v.Z,{label:e("chooseTitle1"),sx:{color:t.palette.info.light}}),(0,m.jsx)(v.Z,{label:e("chooseTitle2"),sx:{color:t.palette.info.light}}),(0,m.jsx)(v.Z,{label:e("chooseTitle3"),sx:{color:t.palette.info.light}})]}),(0,m.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[{id:0,label:"choose1"},{id:1,label:"choose2"},{id:2,label:"choose3"}].map(((i,l)=>(0,m.jsxs)(S,{value:n,index:l,dir:t.direction,children:[(0,m.jsx)(s.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:x[l]}),(0,m.jsx)(s.Z,{variant:"body2",sx:{maxWidth:"400px",height:"200px",textAlign:"center",mt:2},children:e(i.label)})]},i.id)))})]})})};var T=n(6934),G=n(4599),O=n(6580),A=n(6256),E=n(4665),$=n(1559),k=n(4988),L=n(68),F=n(4518),M=n(5351),N=n(3922),W=n(6095),P=n(7391);const B=(0,n(3457).Z)(P.Z)({"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#1976d2"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#1976d2"}}),z=e=>{let{commentContent:t,setCommentContent:n}=e;return(0,m.jsx)(a.Z,{children:(0,m.jsx)(B,{value:t,onChange:e=>n(e.target.value),id:"outlined-multiline-static",label:"Comment",multiline:!0,rows:5,variant:"outlined",InputLabelProps:{style:{color:"#1976d2"}},InputProps:{style:{color:"#a6a6a6"}}})})},V=()=>{const{t:e}=(0,l.$G)(),[t,n]=i.useState(""),[o,r]=i.useState(!1),[c,d]=i.useState(!1),[,x]=i.useState(!1),[h]=i.useState(void 0);return(0,m.jsxs)(a.Z,{component:"form",sx:{"& .MuiTextField-root":{mt:3,mb:3,width:"33ch"}},noValidate:!0,autoComplete:"off",children:[(0,m.jsx)(s.Z,{sx:{mt:3},children:e("leaveComment")}),(0,m.jsx)(z,{commentContent:t,setCommentContent:n}),(0,m.jsx)(L.Z,{title:e("sendComment"),arrow:!0,children:(0,m.jsx)(F.Z,{variant:"contained",onClick:()=>{0===t.trim().length?(d(!0),x(!0)):(n(""),r(!0),d(!1))},sx:{borderRadius:"25px"},children:e("send")})}),c&&(0,m.jsx)(W.B,{}),o&&(0,m.jsx)(M.Z,{open:o,autoHideDuration:2e3,onClose:()=>r(!1),TransitionComponent:h,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)(N.r,{onClose:()=>r(!1),children:e("commentSended")})},h?h.name:"")]})},_=(0,T.ZP)(G.Z)((e=>{let{theme:t}=e;return{"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:t.palette.grey[400]}}})),R={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},D={1:{icon:(0,m.jsx)(O.Z,{color:"error"}),label:"Very Dissatisfied"},2:{icon:(0,m.jsx)(A.Z,{color:"error"}),label:"Dissatisfied"},3:{icon:(0,m.jsx)(E.Z,{color:"warning"}),label:"Neutral"},4:{icon:(0,m.jsx)($.Z,{color:"success"}),label:"Satisfied"},5:{icon:(0,m.jsx)(k.Z,{color:"success"}),label:"Very Satisfied"}},H=e=>{const{value:t,...n}=e;return(0,m.jsx)("span",{...n,children:D[t].icon})},U=e=>"".concat(e," Star").concat(1!==e?"s":"",", ").concat(R[e]);function Y(){const{t:e}=(0,l.$G)(),[t,n]=i.useState(5),[o,r]=i.useState(-1),[c,d]=i.useState(!1);return(0,m.jsxs)(a.Z,{sx:{mt:10,mb:5,textAlign:"center"},children:[(0,m.jsx)(s.Z,{variant:"h5",sx:{paddingBottom:"20px"},children:e("feedback")}),(0,m.jsx)(_,{name:"highlight-selected-only",value:t,defaultValue:5,IconContainerComponent:H,getLabelText:U,highlightSelectedOnly:!0,onChange:(e,t)=>{n(t)},onChangeActive:(e,t)=>{r(t)},onClick:()=>{window.scroll({left:0,top:document.body.scrollHeight,behavior:"smooth"}),d(!0)}}),null!==t&&(0,m.jsx)(a.Z,{children:R[-1!==o?o:t]}),c&&(0,m.jsx)(V,{})]})}var q=n(31),J=n(2094);const K=e=>{let{item:t}=e;const{t:n}=(0,l.$G)();return(0,m.jsxs)(a.Z,{sx:{textAlign:"start",maxWidth:"300px",padding:"10px"},children:[(0,m.jsx)(J.Z,{}),(0,m.jsx)(s.Z,{variant:"h6",sx:{paddingBottom:"5px"},children:n(t.label)}),(0,m.jsx)(s.Z,{variant:"body2",children:n(t.description)})]},t.id)},Q=[{id:0,label:q.Gm.TITLE1,description:q._$.INFO1},{id:1,label:q.Gm.TITLE2,description:q._$.INFO2},{id:2,label:q.Gm.TITLE3,description:q._$.INFO3},{id:3,label:q.Gm.TITLE4,description:q._$.INFO4}],X=()=>(0,m.jsx)(a.Z,{sx:{display:"flex",flexWrap:"wrap"},children:Q.map((e=>(0,m.jsx)(K,{item:e},e.id)))}),ee=()=>{const{t:e}=(0,l.$G)();return(0,m.jsxs)(a.Z,{sx:{textAlign:"center",position:"relative"},children:[(0,m.jsx)(s.Z,{variant:"h5",sx:{mt:10},children:e("about")}),(0,m.jsx)(a.Z,{sx:{display:"flex",mt:5,justifyContent:"space-around"},children:(0,m.jsx)(X,{item:{id:0,label:q.Gm.TITLE1,description:q._$.INFO1}})})]})},te=[{id:0,label:q.n3.SAMSUNG},{id:1,label:q.n3.GIGABYTE},{id:2,label:q.n3.LENOVO},{id:3,label:q.n3.INTEL},{id:4,label:q.n3.PHILIPS},{id:5,label:q.n3.ASUS}],ne=()=>{const{t:e}=(0,l.$G)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s.Z,{variant:"h5",sx:{textAlign:"center"},children:e("ourPartners")}),(0,m.jsx)(r.Z,{sx:{m:2},color:"lightgray"}),(0,m.jsx)(a.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"20px 0px",position:"relative"},children:te.map((e=>(0,m.jsx)("img",{style:{height:"70px",width:"130px",marginTop:"30px"},src:"".concat("/shop","/Images/Logos/").concat(e.label,".svg"),alt:e.label},e.id)))})]})},ie=i.memo((()=>{const{t:e}=(0,l.$G)();return i.useEffect((()=>{window.scroll(0,0)}),[]),(0,m.jsxs)(o.Z,{maxWidth:"xl",children:[(0,m.jsx)(s.Z,{variant:"h5",sx:{m:3,textAlign:"center"},children:e("welcome")}),(0,m.jsx)(r.Z,{sx:{m:2},color:"lightgray"}),(0,m.jsx)(a.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:(0,m.jsx)(g,{})}),(0,m.jsx)(w,{}),(0,m.jsx)(ne,{}),(0,m.jsx)(ee,{}),(0,m.jsx)(Y,{})]})}))}}]);
//# sourceMappingURL=998.084b29a6.chunk.js.map