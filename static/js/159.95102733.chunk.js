"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[159],{3922:(e,t,s)=>{s.d(t,{r:()=>r});var i=s(2791),n=s(9658),o=s(184);const r=i.forwardRef((function(e,t){return(0,o.jsx)(n.Z,{elevation:6,ref:t,variant:"filled",...e})}))},159:(e,t,s)=>{s.r(t),s.d(t,{default:()=>de});var i=s(2791),n=s(9230),o=s(9164),r=s(890),a=s(4721),c=s(4420),l=s(697),d=s(5527),x=s(5351),h=s(3922),p=s(2169),u=s(9095),j=s(2739),g=s(2003),m=s(6828),Z=s(184);const v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"1px solid #000",boxShadow:24,p:4,borderRadius:"25px"},f=e=>{let{item:t}=e;const[s,n]=(0,i.useState)(!1),o=()=>n(!1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.Z,{component:"img",image:"".concat("/shop","/Images/Store/").concat(t.description,".jpg"),alt:t.title,sx:{margin:"0 auto",width:"85%",height:"370px",objectFit:"contain",cursor:"pointer"},onClick:()=>n(!0)}),s&&(0,Z.jsx)(u.Z,{open:s,onClose:o,closeAfterTransition:!0,slots:{backdrop:j.Z},slotProps:{backdrop:{timeout:500}},children:(0,Z.jsx)(g.Z,{in:s,children:(0,Z.jsxs)(l.Z,{sx:v,children:[(0,Z.jsx)(m.P,{onClose:o}),(0,Z.jsxs)(l.Z,{textAlign:"center",children:[(0,Z.jsx)(r.Z,{variant:"h6",sx:{mt:2,mb:2},children:t.title}),(0,Z.jsx)("img",{style:{width:"300px",height:"350px"},src:"".concat("/shop","/Images/Store/").concat(t.description,".jpg"),alt:"".concat(t.description)})]})]})})})]})};var C=s(9504),b=s(68),k=s(4518),w=s(8825),S=s(8946),y=s(22);const P=e=>{let{item:t}=e;return(0,Z.jsxs)(C.Z,{sx:{height:"75px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,Z.jsx)(r.Z,{variant:"h6",color:"text.secondary",children:t.title}),(0,Z.jsxs)(r.Z,{variant:"h5",color:"text.primary",children:[t.price," \u20ac"]}),(0,Z.jsx)(l.Z,{sx:{m:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.isStock?(0,Z.jsx)(b.Z,{title:(0,w.t)("inStockTip"),arrow:!0,placement:"right",children:(0,Z.jsxs)(k.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"outlined",color:"success",sx:{height:"30px",cursor:"default",borderRadius:"25px"},children:[(0,w.t)("inStock"),(0,Z.jsx)(S.Z,{sx:{ml:1}})]})}):(0,Z.jsx)(b.Z,{title:(0,w.t)("outOfStockTip"),arrow:!0,placement:"right",children:(0,Z.jsxs)(k.Z,{disableRipple:!0,disableTouchRipple:!0,variant:"contained",color:"error",sx:{height:"30px",cursor:"default",borderRadius:"25px"},children:[(0,w.t)("outOfStock"),(0,Z.jsx)(y.Z,{sx:{ml:1}})]})})})]})};var F=s(690),I=s(4361),O=s(2363),R=s(4454),T=s(1428),L=s(9265),W=s(3377);const A={inputProps:{"aria-label":"Checkbox demo"}},M={height:"30px",width:"140px",marginTop:"5px",marginLeft:"5px",borderRadius:"25px"},B=e=>{let{item:t,toggleFavorite:s,setOpenFavorite:n,setOpenCart:o}=e;const{addItem:r,disableCartButton:a,disabledButtons:c}=(0,W.j)(),[d,x]=(0,i.useState)(!1),h=()=>x((e=>!e));return(0,Z.jsxs)(O.Z,{disableSpacing:!0,sx:{display:"flex",justifyContent:"space-around",mt:2},children:[(0,Z.jsx)(b.Z,{title:(0,w.t)("addToFavorites"),arrow:!0,children:(0,Z.jsxs)(k.Z,{color:"secondary",variant:"outlined",onClick:()=>{s(t.id),h(),d||n(!0)},sx:M,children:[(0,w.t)("favorite"),(0,Z.jsx)(R.Z,{sx:{marginLeft:"-8px"},...A,icon:(0,Z.jsx)(F.Z,{color:"secondary",sx:{marginRight:"-10px"}}),checkedIcon:(0,Z.jsx)(I.Z,{color:"secondary",sx:{marginRight:"-10px"}}),checked:d})]})}),c[t.id]?(0,Z.jsxs)(k.Z,{variant:"contained",color:"success",sx:M,children:[(0,w.t)("added"),(0,Z.jsx)(l.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,Z.jsx)(T.Z,{})})]}):t.isStock?(0,Z.jsx)(b.Z,{title:(0,w.t)("addToCart"),arrow:!0,children:(0,Z.jsxs)(k.Z,{variant:"contained",color:"info",onClick:()=>{o(!0),r(t),a(t.id,!0)},sx:M,children:[(0,w.t)("add"),(0,Z.jsx)(l.Z,{sx:{paddingLeft:"3px",paddingTop:"8px"},children:(0,Z.jsx)(L.Z,{})})]})}):(0,Z.jsxs)(k.Z,{variant:"outlined",color:"success",disabled:!0,sx:M,children:[(0,w.t)("add"),(0,Z.jsx)(l.Z,{sx:{paddingLeft:"2px",paddingTop:"3px"},children:(0,Z.jsx)(T.Z,{})})]})]})},H=e=>{let{item:t,toggleFavorite:s}=e;const{t:o}=(0,n.$G)(),[r,a]=(0,i.useState)(!1),[c,l]=(0,i.useState)(!1),[p]=(0,i.useState)(void 0);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(d.Z,{sx:{m:1,mt:5,position:"relative",width:"280px",transition:"box-shadow 0.3s","&:hover":{boxShadow:e=>e.shadows[8]}},children:[(0,Z.jsx)(f,{item:t}),(0,Z.jsx)(P,{item:t}),(0,Z.jsx)(B,{item:t,toggleFavorite:s,setOpenFavorite:l,setOpenCart:a})]},t.id),c&&(0,Z.jsx)(x.Z,{open:c,autoHideDuration:1e3,onClose:()=>l(!1),TransitionComponent:p,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(h.r,{onClose:()=>l(!1),severity:"success",children:o("AddedToFavorites")})},p?p.name:""),r&&(0,Z.jsx)(x.Z,{open:r,autoHideDuration:1e3,onClose:()=>a(!1),TransitionComponent:p,sx:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(h.r,{onClose:()=>a(!1),severity:"success",children:o("addedToCart")})},p?p.name:"")]})};var _=s(4989),G=s(1419),N=s(765);const $="ShowOnly_showOnlyBlock__4rwZA",D="ShowOnly_radioBtn__oxA+T",q=e=>{let{setProducts:t,originalProducts:s,selectedOption:i,handleCheckboxChange:o}=e;const{t:a}=(0,n.$G)(),c={color:"#0288d1","&.Mui-checked":{color:"#0288d1"}};return(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(r.Z,{variant:"h6",align:"center",children:a("showOnly")}),(0,Z.jsxs)(N.Z,{row:!0,name:"position",className:$,children:[(0,Z.jsx)(_.Z,{value:"InStock",className:D,control:(0,Z.jsx)(G.Z,{sx:c,onClick:()=>{const e=s.filter((e=>e.isStock));t(e)},checked:"InStock"===i,onChange:()=>o("InStock")}),label:a("InStock")}),(0,Z.jsx)(_.Z,{value:"Phones",className:D,control:(0,Z.jsx)(G.Z,{sx:c,onClick:()=>{const e=[0,3,5,8,10,11,12,14,18,20,26,28],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Phones"===i,onChange:()=>o("Phones")}),label:a("Phones")}),(0,Z.jsx)(_.Z,{value:"Watches",className:D,control:(0,Z.jsx)(G.Z,{sx:c,onClick:()=>{const e=[1,4,7,9,15,17,22,24,29],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Watches"===i,onChange:()=>o("Watches")}),label:a("Watches")}),(0,Z.jsx)(_.Z,{value:"Headphones",className:D,control:(0,Z.jsx)(G.Z,{sx:c,onClick:()=>{const e=[2,6,13,16,19,21,23,25,27],i=s.filter((t=>e.includes(t.id)));t(i)},checked:"Headphones"===i,onChange:()=>o("Headphones")}),label:a("Headphones")})]})]})};var E=s(6934),z=s(2065),J=s(4834),K=s(4663),Q=s(5403),U=s(8096),V=s(4613),X=s(9749),Y=s(3786);const ee=e=>{let{products:t,setProducts:s,filterFavorites:o}=e;const{t:r}=(0,n.$G)(),[a,c]=(0,i.useState)("");return(0,Z.jsxs)(U.Z,{sx:{minWidth:160,m:1,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"gray"}}},children:[(0,Z.jsx)(V.Z,{sx:{color:"inherit"},children:r("filter")}),(0,Z.jsxs)(X.Z,{value:a,onChange:e=>c(e.target.value),autoWidth:!0,label:r("filter"),sx:{color:"inherit"},children:[(0,Z.jsx)(Y.Z,{value:10,onClick:()=>{const e=[...t].sort(((e,t)=>e.price-t.price));s(e)},children:r("priceAscending")}),(0,Z.jsx)(Y.Z,{value:21,onClick:()=>{const e=[...t].sort(((e,t)=>t.price-e.price));s(e)},children:r("priceDescending")}),(0,Z.jsx)(Y.Z,{value:22,onClick:o,children:r("favoritesFirst")})]})]})},te=(0,E.ZP)("div")((e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,z.Fq)(t.palette.common.white,.25),"&:hover":{backgroundColor:(0,z.Fq)(t.palette.common.white,.35)},width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(1),width:"auto"}}})),se=(0,E.ZP)("div")((e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ie=(0,E.ZP)(J.ZP)((e=>{let{theme:t}=e;return{color:"inherit",outline:"1px solid gray",borderRadius:"4px",height:"53px",width:"100%","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),[t.breakpoints.up("sm")]:{width:"25ch","&:focus":{width:"40ch"}}}}})),ne=e=>{let{setProducts:t,products:s,setSearch:i,filterFavorites:o,noFilters:a,setSelectedOption:c}=e;const{t:l}=(0,n.$G)();return(0,Z.jsxs)(K.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,Z.jsx)(r.Z,{variant:"h6",children:l("sortBy")}),(0,Z.jsx)(ee,{products:s,setProducts:t,filterFavorites:o}),(0,Z.jsxs)(te,{children:[(0,Z.jsx)(se,{children:(0,Z.jsx)(Q.Z,{})}),(0,Z.jsx)(ie,{placeholder:l("search"),onChange:e=>i(e.target.value)})]}),(0,Z.jsx)(k.Z,{variant:"contained",color:"info",onClick:()=>{a(),c("")},sx:{m:1,borderRadius:"25px"},children:l("noFilters")})]})};var oe=s(6580);const re=e=>{let{noFilters:t,setSelectedOption:s}=e;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(l.Z,{sx:{textAlign:"center",mt:5,p:1},children:[(0,Z.jsx)(r.Z,{variant:"h6",color:"error",sx:{mt:2},children:(0,w.t)("noFavorites")}),(0,Z.jsx)(oe.Z,{color:"error"})]}),(0,Z.jsxs)(l.Z,{sx:{textAlign:"center"},children:[(0,Z.jsx)(r.Z,{variant:"h6",children:(0,w.t)("continueShopping")}),(0,Z.jsx)(k.Z,{variant:"contained",sx:{mt:2,borderRadius:"25px"},onClick:()=>{t(),s("")},color:"info",children:(0,w.t)("here")})]})]})};var ae=s(7246);const ce=e=>{let{products:t,productsPerPage:s,handlePage:i}=e;return(0,Z.jsx)(l.Z,{sx:{m:5,display:"flex",justifyContent:"center","& .MuiPaginationItem-page, & .MuiPaginationItem-previous, & .MuiPaginationItem-next":{color:"#c0c0c0"},"& .MuiPaginationItem-icon":{color:"#0288d1"}},children:(0,Z.jsx)(ae.Z,{count:Math.ceil(t.length/s),color:"primary",onChange:(e,t)=>i(t)})})},le=()=>{const e=(0,c.v9)((e=>e.shopPage)),[t,s]=(0,i.useState)([...e]),[n]=(0,i.useState)([...e]),[o,r]=(0,i.useState)(!1),[a,d]=(0,i.useState)(""),[x,h]=(0,i.useState)(""),[p]=(0,i.useState)(10),[u,j]=(0,i.useState)(1),g=u*p,m=g-p,v=t.filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))).slice(m,g),f=()=>{s(n),r(!1)},C=e=>{s((t=>t.map((t=>t.id===e?{...t,isFavorite:!t.isFavorite}:t))))};return(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(ne,{setProducts:s,products:t,setSearch:d,filterFavorites:()=>{const e=t.filter((e=>e.isFavorite));e.length>0?(s(e),r(!1)):(s(e),r(!0))},noFilters:f,setSelectedOption:h}),(0,Z.jsx)(q,{setProducts:s,originalProducts:n,selectedOption:x,handleCheckboxChange:e=>{h(x===e?"":e)}}),(0,Z.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:v.map(((e,t)=>(0,Z.jsx)(H,{item:e,index:t,toggleFavorite:C},e.id)))}),(0,Z.jsx)(ce,{products:t,productsPerPage:p,handlePage:e=>{j(e),window.scroll({top:0,left:0,behavior:"smooth"})}}),o&&(0,Z.jsx)(re,{noFilters:f,setSelectedOption:h})]})},de=()=>{const{t:e}=(0,n.$G)();return i.useEffect((()=>{window.scroll(0,0)}),[]),(0,Z.jsxs)(o.Z,{maxWidth:"xl",children:[(0,Z.jsx)(r.Z,{variant:"h5",align:"center",sx:{mt:3},children:e("storePage")}),(0,Z.jsx)(a.Z,{sx:{m:2},color:"lightgray"}),(0,Z.jsx)(le,{})]})}}}]);
//# sourceMappingURL=159.95102733.chunk.js.map