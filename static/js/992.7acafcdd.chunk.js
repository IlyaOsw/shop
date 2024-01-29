"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[992],{8992:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var i=n(2791),l=n(9164),o=n(890),a=n(4721),r=n(697),s=n(7621),c=n(9504),d=n(2169),x=n(6647),h=n(8825),u=n(184),j=function(e){return e.CARD1="Card1",e.CARD2="Card2",e}(j||{});const p=[{id:0,label:j.CARD1,description:"cardInfo1"},{id:1,label:j.CARD2,description:"cardInfo2"}];function b(){return(0,u.jsx)(u.Fragment,{children:p.map((e=>(0,u.jsx)(s.Z,{sx:{zIndex:"1",m:.5,maxWidth:"710px"},children:(0,u.jsxs)(x.Z,{children:[(0,u.jsx)(d.Z,{component:"img",height:"500",src:"".concat("/shop","/Images/MainPageImages/").concat(e.label,".jpg"),alt:"green iguana"}),(0,u.jsxs)(c.Z,{children:[(0,u.jsx)(o.Z,{gutterBottom:!0,variant:"h5",component:"div",children:(0,h.t)(e.label)}),(0,u.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:(0,h.t)(e.description)})]})]})},e.id)))})}var Z=n(5228),f=n(3896),g=n(3967),m=n(5193),I=n(7488),v=n(2430),y=n(7486),T=n(9230),C=n(4395),w=n(2094);function S(e){const{children:t,value:n,index:i,...l}=e;return(0,u.jsx)("div",{role:"tabpanel",hidden:n!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i),...l,children:n===i&&(0,u.jsx)(r.Z,{sx:{p:3},children:(0,u.jsx)(r.Z,{children:t})})})}function A(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}const E=i.memo((()=>{const{t:e}=(0,T.$G)(),t=(0,g.Z)(),[n,a]=i.useState(0),s=(0,m.Z)(t.breakpoints.down("lg")),c=[(0,u.jsx)(I.Z,{fontSize:"large",color:"secondary"}),(0,u.jsx)(v.Z,{fontSize:"large",color:"secondary"}),(0,u.jsx)(y.Z,{fontSize:"large",color:"secondary"})];return(0,u.jsx)(l.Z,{children:(0,u.jsxs)(r.Z,{sx:{bgcolor:"background.paper",position:"relative"},children:[(0,u.jsx)(o.Z,{variant:"h5",sx:{textAlign:"center",m:4},children:e("whyWe")}),(0,u.jsx)(C.Z,{position:"static",color:"inherit",children:(0,u.jsxs)(Z.Z,{value:n,onChange:(e,t)=>{a(t)},indicatorColor:"secondary",variant:"fullWidth","aria-label":"full width tabs example",orientation:s?"vertical":"horizontal",children:[(0,u.jsx)(f.Z,{label:e("chooseTitle1"),...A(0)}),(0,u.jsx)(f.Z,{label:e("chooseTitle2"),...A(1)}),(0,u.jsx)(f.Z,{label:e("chooseTitle3"),...A(2)})]})}),(0,u.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[{id:0,label:"choose1"},{id:1,label:"choose2"},{id:2,label:"choose3"}].map(((i,l)=>(0,u.jsxs)(S,{value:n,index:l,dir:t.direction,children:[(0,u.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:c[l]}),(0,u.jsx)(o.Z,{variant:"body2",color:"text.secondary",sx:{maxWidth:"400px",textAlign:"center",mt:1},children:e(i.label)}),(0,u.jsx)(r.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(w.Z,{fontSize:"large",color:"secondary"})})]},i.id)))})]})})}));var O=n(6934),F=n(748),L=n(6580),N=n(6256),W=n(4665),k=n(1559),z=n(4988);const D=(0,O.ZP)(F.Z)((e=>{let{theme:t}=e;return{"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:t.palette.action.disabled}}})),G={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},R={1:{icon:(0,u.jsx)(L.Z,{color:"error"}),label:"Very Dissatisfied"},2:{icon:(0,u.jsx)(N.Z,{color:"error"}),label:"Dissatisfied"},3:{icon:(0,u.jsx)(W.Z,{color:"warning"}),label:"Neutral"},4:{icon:(0,u.jsx)(k.Z,{color:"success"}),label:"Satisfied"},5:{icon:(0,u.jsx)(z.Z,{color:"success"}),label:"Very Satisfied"}};function $(e){const{value:t,...n}=e;return(0,u.jsx)("span",{...n,children:R[t].icon})}function B(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(G[e])}function M(){const{t:e}=(0,T.$G)(),[t,n]=i.useState(4),[l,a]=i.useState(-1);return(0,u.jsxs)(r.Z,{sx:{margin:"50px"},textAlign:"center",children:[(0,u.jsx)(o.Z,{variant:"h5",sx:{paddingBottom:"20px"},children:e("feedback")}),(0,u.jsx)(D,{name:"highlight-selected-only",value:t,defaultValue:5,IconContainerComponent:$,getLabelText:B,highlightSelectedOnly:!0,onChange:(e,t)=>{n(t)},onChangeActive:(e,t)=>{a(t)}}),null!==t&&(0,u.jsx)(r.Z,{children:G[-1!==l?l:t]})]})}var P=function(e){return e.TITLE1="aboutTitle1",e.TITLE2="aboutTitle2",e.TITLE3="aboutTitle3",e.TITLE4="aboutTitle4",e}(P||{}),V=function(e){return e.INFO1="aboutInfo1",e.INFO2="aboutInfo2",e.INFO3="aboutInfo3",e.INFO4="aboutInfo4",e}(V||{});const U=[{id:0,label:P.TITLE1,description:V.INFO1},{id:1,label:P.TITLE2,description:V.INFO2},{id:2,label:P.TITLE3,description:V.INFO3},{id:3,label:P.TITLE4,description:V.INFO4}],q=()=>{const{t:e}=(0,T.$G)();return(0,u.jsx)(r.Z,{sx:{display:"flex",flexWrap:"wrap"},children:U.map((t=>(0,u.jsxs)(r.Z,{sx:{textAlign:"start",maxWidth:"350px",padding:"5px"},children:[(0,u.jsx)(w.Z,{}),(0,u.jsx)(o.Z,{variant:"h6",sx:{paddingBottom:"5px"},children:e(t.label)}),(0,u.jsx)(o.Z,{variant:"body1",color:"text.secondary",children:e(t.description)})]},t.id)))})},H=()=>{const{t:e}=(0,T.$G)();return(0,u.jsxs)(l.Z,{maxWidth:"xl",sx:{textAlign:"center",position:"relative"},children:[(0,u.jsx)(o.Z,{variant:"h5",sx:{pt:"20px"},children:e("about")}),(0,u.jsx)(q,{})]})};var J=n(5527);const K=i.memo((()=>{const{t:e}=(0,T.$G)();return(0,u.jsxs)(l.Z,{maxWidth:"xl",children:[(0,u.jsx)(o.Z,{variant:"h5",sx:{m:3,textAlign:"center"},children:e("welcome")}),(0,u.jsx)(a.Z,{sx:{m:2}}),(0,u.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:(0,u.jsx)(b,{})}),(0,u.jsx)(r.Z,{children:(0,u.jsx)(E,{})}),(0,u.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",mt:5,position:"relative"},children:(0,u.jsx)(J.Z,{elevation:4,children:(0,u.jsx)(H,{})})}),(0,u.jsx)(M,{})]})}))}}]);
//# sourceMappingURL=992.7acafcdd.chunk.js.map