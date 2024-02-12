"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[250],{4250:(e,t,s)=>{s.r(t),s.d(t,{default:()=>se});var i=s(2791),n=s(9230),o=s(9164),r=s(890),a=s(4721),l=s(4420),c=s(697),d=s(5527),x=s(4518),h=s(6580),p=s(8825),u=s(7621),j=s(2363),m=s(9504),g=s(2169),Z=s(4454),f=s(5351),v=s(9658),C=s(5931),k=s(68),b=s(9265),S=s(7488),w=s(7237),y=s(1428),F=s(8946),P=s(22),I=s(3377),T=s(184);function O(e){return(0,T.jsx)(C.Z,{...e,direction:"up"})}const R={inputProps:{"aria-label":"Checkbox demo"}},W=i.forwardRef((function(e,t){return(0,T.jsx)(v.Z,{elevation:6,ref:t,variant:"filled",...e})})),L=i.memo((e=>{let{item:t,toggleFavorite:s}=e;const{t:o}=(0,n.$G)(),{addItem:a}=(0,I.j)(),[,l]=i.useState(!1),[h,p]=i.useState(!1),[v,C]=i.useState(!1),[L,A]=i.useState(!1),[H,_]=i.useState(!1),[N,B]=i.useState(void 0),D=e=>()=>{B((()=>e)),l(!0)},G={height:"30px",width:"140px",marginTop:"5px"};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d.Z,{elevation:3,sx:{m:2,mt:5},children:(0,T.jsxs)(u.Z,{sx:{position:"relative",maxWidth:"250px"},children:[(0,T.jsx)(g.Z,{component:"img",image:"".concat("/shop","/Images/Store/").concat(t.description,".jpg"),alt:t.title,sx:{margin:"0 auto",width:"90%",height:"350px",objectFit:"contain"}}),(0,T.jsxs)(m.Z,{sx:{height:"55px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,T.jsx)(r.Z,{variant:"h6",color:"text.secondary",children:t.title}),(0,T.jsxs)(r.Z,{variant:"h5",color:"text.primary",children:[t.price," \u20ac"]})]}),(0,T.jsx)(c.Z,{sx:{m:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.isStock?(0,T.jsx)(k.Z,{title:o("inStockTip"),arrow:!0,placement:"right",children:(0,T.jsxs)(x.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"outlined",color:"success",sx:{height:"30px",cursor:"default",borderRadius:"15px"},children:[o("inStock"),(0,T.jsx)(F.Z,{sx:{ml:1}})]})}):(0,T.jsx)(k.Z,{title:o("outOfStockTip"),arrow:!0,placement:"right",children:(0,T.jsxs)(x.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"contained",color:"error",sx:{height:"30px",cursor:"default",borderRadius:"15px"},children:[o("outOfStock"),(0,T.jsx)(P.Z,{sx:{ml:1}})]})})}),(0,T.jsxs)(j.Z,{disableSpacing:!0,sx:{display:"flex",justifyContent:"space-around",alignItems:"flex-end"},children:[(0,T.jsx)(k.Z,{title:o("addToFavorites"),arrow:!0,children:(0,T.jsxs)(x.Z,{color:"secondary",variant:"outlined",onClick:()=>{H||(C(!0),D(O)),s(t.id),_((e=>!e))},sx:G,children:[o("favorite"),(0,T.jsx)(Z.Z,{sx:{marginLeft:"-5px"},...R,icon:(0,T.jsx)(S.Z,{color:"secondary"}),checkedIcon:(0,T.jsx)(w.Z,{color:"secondary"}),checked:H})]})}),L?(0,T.jsxs)(x.Z,{variant:"contained",color:"success","aria-label":"add to shopping cart",sx:G,children:[o("added"),(0,T.jsx)(c.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,T.jsx)(y.Z,{})})]}):t.isStock?(0,T.jsx)(k.Z,{title:o("addToCart"),arrow:!0,children:(0,T.jsxs)(x.Z,{variant:"contained",color:"info","aria-label":"add to shopping cart",onClick:()=>{D(O),p(!0),a(t),A(!0)},sx:G,children:[o("add"),(0,T.jsx)(c.Z,{sx:{paddingLeft:"3px",paddingTop:"8px"},children:(0,T.jsx)(b.Z,{})})]})}):(0,T.jsxs)(x.Z,{variant:"outlined",color:"success",disabled:!0,"aria-label":"add to shopping cart",sx:G,children:[o("add"),(0,T.jsx)(c.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,T.jsx)(y.Z,{})})]})]})]},t.id)}),v&&(0,T.jsx)(f.Z,{open:v,autoHideDuration:2e3,onClose:()=>C(!1),TransitionComponent:N,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(W,{onClose:()=>C(!1),severity:"success",children:o("AddedToFavorites")})},N?N.name:""),h&&(0,T.jsx)(f.Z,{open:h,autoHideDuration:2e3,onClose:()=>p(!1),TransitionComponent:N,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,T.jsx)(W,{onClose:()=>p(!1),severity:"success",children:o("addedToCart")})},N?N.name:"")]})}));var A=s(5523),H=s(1419),_=s(765);const N="ShowOnly_showOnlyBlock__fMpxL",B="ShowOnly_radioBtn__YQbSA",D=e=>{let{setProducts:t,originalProducts:s,selectedOption:i,handleCheckboxChange:o}=e;const{t:a}=(0,n.$G)(),l={color:"#0288d1","&.Mui-checked":{color:"#0288d1"}};return(0,T.jsxs)(c.Z,{sx:{mt:2},children:[(0,T.jsx)(r.Z,{variant:"h6",sx:{textAlign:"center"},children:a("showOnly")}),(0,T.jsxs)(_.Z,{row:!0,"aria-labelledby":"demo-form-control-label-placement",name:"position",className:N,children:[(0,T.jsx)(A.Z,{value:"InStock",className:B,control:(0,T.jsx)(H.Z,{sx:l,onClick:()=>{const e=s.filter((e=>e.isStock));t(e)},checked:"InStock"===i,onChange:()=>o("InStock")}),label:a("InStock")}),(0,T.jsx)(A.Z,{value:"Phones",className:B,control:(0,T.jsx)(H.Z,{sx:l,onClick:()=>{const e=[0,3,5,8,10,11,12,14,18],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Phones"===i,onChange:()=>o("Phones")}),label:a("Phones")}),(0,T.jsx)(A.Z,{value:"Watches",className:B,control:(0,T.jsx)(H.Z,{sx:l,onClick:()=>{const e=[1,4,7,9,15,17],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Watches"===i,onChange:()=>o("Watches")}),label:a("Watches")}),(0,T.jsx)(A.Z,{value:"Headphones",className:B,control:(0,T.jsx)(H.Z,{sx:l,onClick:()=>{const e=[2,6,13,16,19],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Headphones"===i,onChange:()=>o("Headphones")}),label:a("Headphones")})]})]})};var G=s(6934),$=s(2065),M=s(4834),q=s(4395),E=s(4663),Q=s(8096),Y=s(4925),z=s(9749),J=s(3786),K=s(5403);const U=(0,G.ZP)("div")((e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,$.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,$.Fq)(t.palette.common.white,.25)},width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(1),width:"auto"}}})),V=(0,G.ZP)("div")((e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),X=(0,G.ZP)(M.ZP)((e=>{let{theme:t}=e;return{color:"inherit",outline:"1px solid gray",borderRadius:"4px",height:"53px",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),[t.breakpoints.up("sm")]:{width:"25ch","&:focus":{width:"40ch"}}}}})),ee=e=>{let{setProducts:t,products:s,setSearch:o,filterFavorites:a,noFilters:l,setSelectedOption:c}=e;const{t:d}=(0,n.$G)(),[h,p]=i.useState("");return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(q.Z,{position:"relative",color:"inherit",sx:{width:"fit-content",margin:"0 auto"},children:(0,T.jsxs)(E.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,T.jsx)(r.Z,{variant:"h6",color:"#555555",sx:{p:1},children:d("sortBy")}),(0,T.jsxs)(Q.Z,{sx:{minWidth:180},children:[(0,T.jsx)(Y.Z,{id:"demo-simple-select-autowidth-label",children:d("filter")}),(0,T.jsxs)(z.Z,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:h,onChange:e=>p(e.target.value),autoWidth:!0,label:d("filter"),children:[(0,T.jsx)(J.Z,{value:10,onClick:()=>{const e=[...s].sort(((e,t)=>e.price-t.price));t(e)},children:d("priceAscending")}),(0,T.jsx)(J.Z,{value:21,onClick:()=>{const e=[...s].sort(((e,t)=>t.price-e.price));t(e)},children:d("priceDescending")}),(0,T.jsx)(J.Z,{value:22,onClick:a,children:d("favoritesFirst")})]})]}),(0,T.jsxs)(U,{sx:{m:1},children:[(0,T.jsx)(V,{children:(0,T.jsx)(K.Z,{})}),(0,T.jsx)(X,{placeholder:d("search"),inputProps:{"aria-label":"search"},onChange:e=>o(e.target.value)})]}),(0,T.jsx)(x.Z,{variant:"contained",color:"info",onClick:()=>{l(),c("")},sx:{m:1},children:d("noFilters")})]})})})},te=i.memo((()=>{const e=(0,l.v9)((e=>e.shopPage)),[t,s]=i.useState([...e]),[n]=i.useState([...e]),[o,a]=i.useState(!1),[u,j]=i.useState(""),[m,g]=i.useState(""),Z=()=>{s(n),a(!1)},f=t.filter((e=>e.title.toLowerCase().includes(u.toLowerCase()))),v=e=>{s((t=>t.map((t=>t.id===e?{...t,isFavorite:!t.isFavorite}:t))))};return(0,T.jsxs)(c.Z,{children:[(0,T.jsx)(ee,{setProducts:s,products:t,setSearch:j,filterFavorites:()=>{const e=t.filter((e=>e.isFavorite));e.length>0?(s(e),a(!1)):(s(e),a(!0))},noFilters:Z,setSelectedOption:g}),(0,T.jsx)(D,{setProducts:s,originalProducts:n,selectedOption:m,handleCheckboxChange:e=>{g(m===e?"":e)}}),(0,T.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:f.map(((e,t)=>(0,T.jsx)(L,{item:e,index:t,toggleFavorite:v},e.id)))}),o&&(0,T.jsx)(c.Z,{sx:{height:"100vh",position:"relative"},children:(0,T.jsxs)(d.Z,{elevation:4,children:[(0,T.jsxs)(c.Z,{sx:{textAlign:"center",mt:5,p:1},children:[(0,T.jsx)(r.Z,{variant:"h5",color:"error",sx:{mt:2},children:(0,p.t)("noFavorites")}),(0,T.jsx)(h.Z,{color:"error"})]}),(0,T.jsx)(c.Z,{sx:{textAlign:"center",p:1},children:(0,T.jsxs)(r.Z,{variant:"h6",color:"text.secondary",children:[(0,p.t)("continueShopping"),(0,T.jsx)(c.Z,{children:(0,T.jsx)(x.Z,{variant:"contained",sx:{mt:2},onClick:()=>{Z(),g("")},color:"info",children:(0,p.t)("here")})})]})})]})})]})})),se=()=>{const{t:e}=(0,n.$G)();return(0,T.jsxs)(o.Z,{maxWidth:"xl",sx:{mb:10},children:[(0,T.jsx)(r.Z,{variant:"h5",textAlign:"center",sx:{m:3,letterSpacing:"1px"},children:e("storePage")}),(0,T.jsx)(a.Z,{sx:{m:2}}),(0,T.jsx)(te,{})]})}}}]);
//# sourceMappingURL=250.48fc1aa5.chunk.js.map