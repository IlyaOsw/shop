"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[509],{4509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var i=n(2791),l=n(9230),s=n(9164),a=n(890),r=n(4721),o=n(697),c=n(8825),d=n(7621),x=n(5527),h=n(6647),p=n(9504),j=n(2169),u=n(184);const m=[{id:0,label:"Card1",description:"cardInfo1"},{id:1,label:"Card2",description:"cardInfo2"}],Z=()=>(0,u.jsx)(u.Fragment,{children:m.map((e=>(0,u.jsxs)(x.Z,{elevation:3,sx:{mt:3},children:[(0,u.jsx)(d.Z,{sx:{position:"relative",maxWidth:"640px"},children:(0,u.jsxs)(h.Z,{children:[(0,u.jsx)(j.Z,{component:"img",height:"500",src:"".concat("/shop","/Images/MainPageImages/").concat(e.label,".jpg"),alt:"green iguana"}),(0,u.jsxs)(p.Z,{children:[(0,u.jsx)(a.Z,{gutterBottom:!0,variant:"h5",component:"div",children:(0,c.t)(e.label)}),(0,u.jsx)(a.Z,{variant:"body2",color:"text.secondary",children:(0,c.t)(e.description)})]})]})})," "]},e.id)))});var g=n(3967),b=n(5193),f=n(4395),v=n(5228),y=n(3896),I=n(7488),S=n(2430),C=n(7486),w=n(2094);function T(e){const{children:t,value:n,index:i,...l}=e;return(0,u.jsx)("div",{role:"tabpanel",hidden:n!==i,id:"full-width-tabpanel-".concat(i),"aria-labelledby":"full-width-tab-".concat(i),...l,children:n===i&&(0,u.jsx)(o.Z,{sx:{p:3},children:(0,u.jsx)(o.Z,{children:t})})})}function G(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}const A=()=>{const{t:e}=(0,l.$G)(),t=(0,g.Z)(),[n,r]=i.useState(0),c=(0,b.Z)(t.breakpoints.down("lg")),d=[(0,u.jsx)(I.Z,{fontSize:"large",color:"secondary"}),(0,u.jsx)(S.Z,{fontSize:"large",color:"secondary"}),(0,u.jsx)(C.Z,{fontSize:"large",color:"secondary"})];return(0,u.jsx)(s.Z,{children:(0,u.jsxs)(o.Z,{sx:{position:"relative"},children:[(0,u.jsx)(a.Z,{variant:"h5",sx:{textAlign:"center",m:4},children:e("whyWe")}),(0,u.jsx)(f.Z,{position:"static",color:"inherit",children:(0,u.jsxs)(v.Z,{value:n,onChange:(e,t)=>{r(t)},indicatorColor:"secondary",variant:"fullWidth","aria-label":"full width tabs example",orientation:c?"vertical":"horizontal",children:[(0,u.jsx)(y.Z,{label:e("chooseTitle1"),...G(0)}),(0,u.jsx)(y.Z,{label:e("chooseTitle2"),...G(1)}),(0,u.jsx)(y.Z,{label:e("chooseTitle3"),...G(2)})]})}),(0,u.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:[{id:0,label:"choose1"},{id:1,label:"choose2"},{id:2,label:"choose3"}].map(((i,l)=>(0,u.jsxs)(T,{value:n,index:l,dir:t.direction,children:[(0,u.jsx)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:d[l]}),(0,u.jsx)(a.Z,{variant:"body2",sx:{maxWidth:"400px",textAlign:"center",mt:1},children:e(i.label)}),(0,u.jsx)(o.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(w.Z,{fontSize:"large",color:"secondary"})})]},i.id)))})]})})};var O=n(6934),$=n(748),W=n(6580),E=n(6256),L=n(4665),N=n(1559),k=n(4988);const F=(0,O.ZP)($.Z)((e=>{let{theme:t}=e;return{"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:t.palette.action.active}}})),P={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},z={1:{icon:(0,u.jsx)(W.Z,{color:"error"}),label:"Very Dissatisfied"},2:{icon:(0,u.jsx)(E.Z,{color:"error"}),label:"Dissatisfied"},3:{icon:(0,u.jsx)(L.Z,{color:"warning"}),label:"Neutral"},4:{icon:(0,u.jsx)(N.Z,{color:"success"}),label:"Satisfied"},5:{icon:(0,u.jsx)(k.Z,{color:"success"}),label:"Very Satisfied"}};function M(e){const{value:t,...n}=e;return(0,u.jsx)("span",{...n,children:z[t].icon})}function _(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(P[e])}function V(){const{t:e}=(0,l.$G)(),[t,n]=i.useState(4),[s,r]=i.useState(-1);return(0,u.jsxs)(o.Z,{sx:{margin:"50px"},textAlign:"center",children:[(0,u.jsx)(a.Z,{variant:"h5",sx:{paddingBottom:"20px"},children:e("feedback")}),(0,u.jsx)(F,{name:"highlight-selected-only",value:t,defaultValue:5,IconContainerComponent:M,getLabelText:_,highlightSelectedOnly:!0,onChange:(e,t)=>{n(t)},onChangeActive:(e,t)=>{r(t)}}),null!==t&&(0,u.jsx)(o.Z,{children:P[-1!==s?s:t]})]})}var B=n(31);const U=e=>{let{item:t}=e;const{t:n}=(0,l.$G)();return(0,u.jsxs)(o.Z,{sx:{textAlign:"start",maxWidth:"300px",padding:"10px"},children:[(0,u.jsx)(w.Z,{}),(0,u.jsx)(a.Z,{variant:"h6",sx:{paddingBottom:"5px"},children:n(t.label)}),(0,u.jsx)(a.Z,{variant:"body2",children:n(t.description)})]},t.id)},D=[{id:0,label:B.Gm.TITLE1,description:B._$.INFO1},{id:1,label:B.Gm.TITLE2,description:B._$.INFO2},{id:2,label:B.Gm.TITLE3,description:B._$.INFO3},{id:3,label:B.Gm.TITLE4,description:B._$.INFO4}],R=()=>(0,u.jsx)(o.Z,{sx:{display:"flex",flexWrap:"wrap"},children:D.map((e=>(0,u.jsx)(U,{item:e},e.id)))}),X=()=>{const{t:e}=(0,l.$G)();return(0,u.jsxs)(s.Z,{maxWidth:"xl",sx:{textAlign:"center",position:"relative"},children:[(0,u.jsx)(a.Z,{variant:"h5",sx:{mt:5},children:e("about")}),(0,u.jsx)(o.Z,{sx:{display:"flex",mt:5,justifyContent:"space-around",alignItems:"center",color:"inherit"},children:(0,u.jsx)(R,{item:{id:0,label:B.Gm.TITLE1,description:B._$.INFO1}})})]})},Y=[{id:0,label:B.n3.SAMSUNG},{id:1,label:B.n3.APPLE},{id:2,label:B.n3.LENOVO},{id:3,label:B.n3.XIAOMI},{id:4,label:B.n3.SONY},{id:5,label:B.n3.ASUS}],q=()=>{const{t:e}=(0,l.$G)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{variant:"h5",sx:{textAlign:"center"},children:e("ourPartners")}),(0,u.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",margin:"20px 0px",position:"relative"},children:Y.map((e=>(0,u.jsx)("img",{style:{height:"70px",width:"130px",marginTop:"30px"},src:"".concat("/shop","/Images/Logos/").concat(e.label,".svg"),alt:e.label},e.id)))})]})},H=i.memo((()=>{const{t:e}=(0,l.$G)();return(0,u.jsxs)(s.Z,{maxWidth:"xl",children:[(0,u.jsx)(a.Z,{variant:"h5",sx:{m:3,textAlign:"center"},children:e("welcome")}),(0,u.jsx)(r.Z,{sx:{m:2}}),(0,u.jsx)(o.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:(0,u.jsx)(Z,{})}),(0,u.jsx)(A,{}),(0,u.jsx)(q,{}),(0,u.jsx)(X,{}),(0,u.jsx)(V,{})]})}))}}]);
//# sourceMappingURL=509.e40621a1.chunk.js.map