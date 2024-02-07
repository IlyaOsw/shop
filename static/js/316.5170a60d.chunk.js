"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[316],{2316:(e,i,t)=>{t.r(i),t.d(i,{default:()=>K});var s=t(2791),n=t(9230),r=t(9164),a=t(890),o=t(4721),l=t(4420),d=t(6934),c=t(2065),x=t(4834),p=t(4395),h=t(4663),u=t(8096),j=t(4925),m=t(9749),g=t(3786),Z=t(697),f=t(5403),v=t(5527),b=t(4518),C=t(7621),w=t(2363),k=t(9504),y=t(2169),S=t(4454),T=t(5351),F=t(9658),I=t(5931),R=t(68),P=t(9265),L=t(7488),W=t(7237),A=t(1428),D=t(8946),G=t(22),$=t(3377),q=t(184);function B(e){return(0,q.jsx)(I.Z,{...e,direction:"up"})}const H={inputProps:{"aria-label":"Checkbox demo"}},O=s.forwardRef((function(e,i){return(0,q.jsx)(F.Z,{elevation:6,ref:i,variant:"filled",...e})})),E=s.memo((e=>{let{item:i,toggleFavorite:t}=e;const{t:r}=(0,n.$G)(),{addItem:o}=(0,$.j)(),[,l]=s.useState(!1),[d,c]=s.useState(!1),[x,p]=s.useState(!1),[h,u]=s.useState(!1),[j,m]=s.useState(!1),[g,f]=s.useState(void 0),F=e=>()=>{f((()=>e)),l(!0)},I={height:"30px",width:"140px",marginTop:"5px"};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(v.Z,{elevation:3,sx:{mt:10},children:(0,q.jsxs)(C.Z,{sx:{position:"relative",maxWidth:"305px"},children:[(0,q.jsx)(y.Z,{component:"img",image:"".concat("/shop","/Images/Store/").concat(i.description,".jpg"),alt:"Phone",sx:{width:"100%",height:"400px",objectFit:"contain"}}),(0,q.jsxs)(k.Z,{sx:{height:"85px"},children:[(0,q.jsx)(a.Z,{variant:"h6",color:"text.secondary",children:i.title}),(0,q.jsxs)(a.Z,{variant:"h5",color:"text.primary",children:[i.price," \u20ac"]})]}),(0,q.jsx)(Z.Z,{sx:{m:1.5},children:i.isStock?(0,q.jsx)(R.Z,{title:r("inStockTip"),arrow:!0,placement:"right",children:(0,q.jsxs)(b.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"outlined",color:"success",sx:{height:"30px",cursor:"default",borderRadius:"15px"},children:[r("inStock"),(0,q.jsx)(D.Z,{sx:{ml:1}})]})}):(0,q.jsx)(R.Z,{title:r("outOfStockTip"),arrow:!0,placement:"right",children:(0,q.jsxs)(b.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"contained",color:"error",sx:{height:"30px",cursor:"default",borderRadius:"15px"},children:[r("outOfStock"),(0,q.jsx)(G.Z,{sx:{ml:1}})]})})}),(0,q.jsxs)(w.Z,{disableSpacing:!0,sx:{display:"flex",justifyContent:"space-around",alignItems:"flex-end"},children:[(0,q.jsx)(R.Z,{title:r("addToFavorites"),arrow:!0,children:(0,q.jsxs)(b.Z,{color:"secondary",variant:"outlined",onClick:()=>{j||(p(!0),F(B)),t(i.id),m((e=>!e))},sx:I,children:[r("favorite"),(0,q.jsx)(S.Z,{sx:{marginLeft:"-5px"},...H,icon:(0,q.jsx)(L.Z,{color:"secondary"}),checkedIcon:(0,q.jsx)(W.Z,{color:"secondary"}),checked:j})]})}),h?(0,q.jsxs)(b.Z,{variant:"contained",color:"success","aria-label":"add to shopping cart",sx:I,children:[r("added"),(0,q.jsx)(Z.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,q.jsx)(A.Z,{})})]}):i.isStock?(0,q.jsx)(R.Z,{title:r("addToCart"),arrow:!0,children:(0,q.jsxs)(b.Z,{variant:"contained",color:"info","aria-label":"add to shopping cart",onClick:()=>{F(B),c(!0),o(i),u(!0)},sx:I,children:[r("add"),(0,q.jsx)(Z.Z,{sx:{paddingLeft:"3px",paddingTop:"8px"},children:(0,q.jsx)(P.Z,{})})]})}):(0,q.jsxs)(b.Z,{variant:"outlined",color:"success",disabled:!0,"aria-label":"add to shopping cart",sx:I,children:[r("add"),(0,q.jsx)(Z.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,q.jsx)(A.Z,{})})]})]})]},i.id)}),x&&(0,q.jsx)(T.Z,{open:x,autoHideDuration:2e3,onClose:()=>p(!1),TransitionComponent:g,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,q.jsx)(O,{onClose:()=>p(!1),severity:"success",children:r("AddedToFavorites")})},g?g.name:""),d&&(0,q.jsx)(T.Z,{open:d,autoHideDuration:2e3,onClose:()=>c(!1),TransitionComponent:g,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,q.jsx)(O,{onClose:()=>c(!1),severity:"success",children:r("addedToCart")})},g?g.name:"")]})})),M=(0,d.ZP)("div")((e=>{let{theme:i}=e;return{position:"relative",borderRadius:i.shape.borderRadius,backgroundColor:(0,c.Fq)(i.palette.common.white,.15),"&:hover":{backgroundColor:(0,c.Fq)(i.palette.common.white,.25)},width:"100%",[i.breakpoints.up("sm")]:{marginLeft:i.spacing(1),width:"auto"}}})),N=(0,d.ZP)("div")((e=>{let{theme:i}=e;return{padding:i.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),z=(0,d.ZP)(x.ZP)((e=>{let{theme:i}=e;return{color:"inherit",outline:"1px solid gray",borderRadius:"4px",height:"53px",width:"100%","& .MuiInputBase-input":{padding:i.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(i.spacing(4),")"),transition:i.transitions.create("width"),[i.breakpoints.up("sm")]:{width:"25ch","&:focus":{width:"40ch"}}}}})),J=s.memo((()=>{const{t:e}=(0,n.$G)(),i=(0,l.v9)((e=>e.shopPage)),[t,r]=s.useState([...i]),[o,d]=s.useState(""),[c,x]=s.useState(""),v=[...t].filter((e=>e.title.toLowerCase().includes(c.toLowerCase()))),b=e=>{r((i=>i.map((i=>i.id===e?{...i,isFavorite:!i.isFavorite}:i))))};return(0,q.jsxs)("div",{children:[(0,q.jsx)(p.Z,{position:"relative",color:"default",children:(0,q.jsxs)(h.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,q.jsx)(a.Z,{variant:"h6",sx:{p:1},children:e("sortBy")}),(0,q.jsxs)(u.Z,{sx:{margin:"0px 20px",minWidth:200},children:[(0,q.jsx)(j.Z,{id:"demo-simple-select-autowidth-label",children:e("filter")}),(0,q.jsxs)(m.Z,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:o,onChange:e=>d(e.target.value),autoWidth:!0,label:e("filter"),children:[(0,q.jsx)(g.Z,{value:"No filters",onClick:()=>r(i),children:(0,q.jsxs)("em",{children:[e("noFilters")," "]})}),(0,q.jsx)(g.Z,{value:10,onClick:()=>{const e=[...t].sort(((e,i)=>e.price-i.price));r(e)},children:e("priceAscending")}),(0,q.jsx)(g.Z,{value:21,onClick:()=>{const e=[...t].sort(((e,i)=>i.price-e.price));r(e)},children:e("priceDescending")}),(0,q.jsx)(g.Z,{value:22,onClick:()=>{const e=[...t].filter((e=>e.isFavorite));r(e)},children:e("favoritesFirst")})]})]}),(0,q.jsxs)(M,{sx:{m:1},onChange:e=>x(e.target.value),children:[(0,q.jsx)(N,{children:(0,q.jsx)(f.Z,{})}),(0,q.jsx)(z,{placeholder:e("search"),inputProps:{"aria-label":"search"}})]})]})}),(0,q.jsx)(Z.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:v.map(((e,i)=>(0,q.jsx)(E,{item:e,index:i,toggleFavorite:b},e.id)))})]})})),K=()=>{const{t:e}=(0,n.$G)();return(0,q.jsxs)(r.Z,{maxWidth:"xl",sx:{mb:10},children:[(0,q.jsx)(a.Z,{variant:"h5",textAlign:"center",sx:{m:3,letterSpacing:"1px"},children:e("storePage")}),(0,q.jsx)(o.Z,{sx:{m:2}}),(0,q.jsx)(J,{})]})}}}]);
//# sourceMappingURL=316.5170a60d.chunk.js.map