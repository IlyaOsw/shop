"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[152],{3619:(e,t,r)=>{r.d(t,{Z:()=>m});var s=r(2791),o=r(4518),n=r(7391),i=r(5289),a=r(7123),l=r(9157),c=r(1691),d=r(5661),h=r(3796),x=r(9230),p=r(697),u=r(68),j=r(184);function m(){const{t:e}=(0,x.$G)(),[t,r]=s.useState(!1),m=()=>{r(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.Z,{title:e("share2"),arrow:!0,children:(0,j.jsxs)(o.Z,{variant:"outlined",onClick:()=>{r(!0)},children:[(0,j.jsx)(h.Z,{}),(0,j.jsx)(p.Z,{sx:{marginLeft:"5px"},children:e("share")})]})}),(0,j.jsxs)(i.Z,{open:t,onClose:m,PaperProps:{component:"form",onSubmit:e=>{e.preventDefault();const t=new FormData(e.currentTarget),r=Object.fromEntries(t.entries()).email;console.log(r),m()}},children:[(0,j.jsxs)(d.Z,{children:[" ",e("share2")]}),(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(c.Z,{children:e("shareText")}),(0,j.jsx)(n.Z,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:e("emailAddress"),type:"email",fullWidth:!0,variant:"standard"})]}),(0,j.jsxs)(a.Z,{children:[(0,j.jsx)(o.Z,{onClick:m,children:e("cancel")}),(0,j.jsx)(o.Z,{type:"submit",children:e("share2")})]})]})]})}},1152:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var s=r(2791),o=r(890),n=r(9164),i=r(697),a=r(5527),l=r(6934),c=r(533),d=r(184);const h=[{url:"".concat("/shop","/Images/News/news1.jpg"),title:"Breakfast",width:"32.7%"},{url:"".concat("/shop","/Images/News/news2.jpg"),title:"Burgers",width:"32.7%"},{url:"".concat("/shop","/Images/News/news3.jpg"),title:"Camera",width:"32.7%"}],x=(0,l.ZP)(c.Z)((e=>{let{theme:t}=e;return{position:"relative",height:450,[t.breakpoints.down("sm")]:{width:"100% !important",height:250},"&:hover, &.Mui-focusVisible":{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}}})),p=(0,l.ZP)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),u=(0,l.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.palette.common.white}})),j=(0,l.ZP)("span")((e=>{let{theme:t}=e;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:0,transition:t.transitions.create("opacity")}}));function m(){return(0,d.jsx)(i.Z,{sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%",justifyContent:"center"},children:h.map((e=>(0,d.jsxs)(x,{focusRipple:!0,sx:{m:.5},style:{width:e.width},children:[(0,d.jsx)(p,{style:{backgroundImage:"url(".concat(e.url,")")}}),(0,d.jsx)(j,{className:"MuiImageBackdrop-root"}),(0,d.jsx)(u,{})]},e.title)))})}var Z=r(9230),v=r(7621),g=r(2169),f=r(9504),w=r(4518),b=r(2363),k=r(4721),y=r(3619),C=r(2898),M=r(2430),z=r(2811),S=r(68),I=r(6125),P=r(4454),V=r(5806),T=r(786);const L={inputProps:{"aria-label":"Checkbox demo"}},N=e=>{let{id:t,title:r,body:n,likes:a,dislikes:l,additionalText1:c,additionalText2:h}=e;const{t:x}=(0,Z.$G)(),[p,u]=s.useState(!1),[j,m]=(0,s.useState)(a),[N,A]=(0,s.useState)(l),[B,D]=(0,s.useState)(!1),[F,H]=(0,s.useState)(!1),[W,G]=(0,s.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(v.Z,{sx:{position:" relative",mb:2},children:[(0,d.jsx)(g.Z,{component:"img",alt:"News post",height:"500",image:"".concat("/shop","/Images/News/Posts/").concat(t,".jpg")}),(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(o.Z,{gutterBottom:!0,variant:"h5",component:"div",children:r}),(0,d.jsxs)(o.Z,{variant:"body2",color:"text.secondary",children:[n,n]})]}),(0,d.jsxs)(i.Z,{sx:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:[(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(w.Z,{variant:"outlined",color:"info",children:j}),(0,d.jsx)(S.Z,{title:x("like"),arrow:!0,children:(0,d.jsx)(P.Z,{onClick:()=>{W?(m((e=>e-1)),D(!1)):(m((e=>e+1)),D(!0)),G((e=>!e))},disabled:F,...L,icon:(0,d.jsx)(M.Z,{fontSize:"large",color:"info"}),checkedIcon:(0,d.jsx)(T.Z,{fontSize:"large",color:"info"})})}),(0,d.jsx)(S.Z,{title:x("dislike"),arrow:!0,children:(0,d.jsx)(P.Z,{onClick:()=>{W?(A((e=>e-1)),H(!1)):(A((e=>e+1)),H(!0)),G((e=>!e))},disabled:B,...L,icon:(0,d.jsx)(z.Z,{fontSize:"large",color:"error"}),checkedIcon:(0,d.jsx)(V.Z,{fontSize:"large",color:"error"})})}),(0,d.jsx)(w.Z,{variant:"outlined",color:"error",children:N})]}),(0,d.jsx)(I.Z,{in:p,timeout:"auto",unmountOnExit:!0,children:(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(o.Z,{paragraph:!0,color:"text.secondary",children:c}),(0,d.jsx)(o.Z,{paragraph:!0,color:"text.secondary",children:h})]})}),(0,d.jsxs)(b.Z,{children:[(0,d.jsx)(y.Z,{}),(0,d.jsx)(i.Z,{onClick:()=>{u(!p)},"aria-expanded":p,"aria-label":"show more",children:p?(0,d.jsx)(S.Z,{title:x("close"),arrow:!0,children:(0,d.jsxs)(w.Z,{variant:"outlined",color:"secondary",sx:{marginLeft:"5px"},children:[(0,d.jsx)(C.Z,{}),x("close")]})}):(0,d.jsx)(S.Z,{title:x("learnMore"),arrow:!0,children:(0,d.jsxs)(w.Z,{variant:"outlined",color:"secondary",sx:{marginLeft:"5px"},children:[(0,d.jsx)(C.Z,{}),x("learnMore")]})})})]})]})]}),(0,d.jsx)(k.Z,{sx:{m:5},children:(0,d.jsx)(o.Z,{variant:"subtitle1",color:"text.secondary",children:x("next")})})]})};var A=r(4420);const B=()=>{const{t:e}=(0,Z.$G)(),t=(0,A.v9)((e=>e.news)),[r,o]=(0,s.useState)(3),n=t.slice(0,r);return(0,d.jsxs)(d.Fragment,{children:[n.map((e=>(0,d.jsx)(N,{...e},e.id))),(0,d.jsx)(i.Z,{sx:{display:"flex",justifyContent:"center",margin:"50px"},children:r<t.length&&(0,d.jsx)(S.Z,{title:e("showMorePosts"),arrow:!0,children:(0,d.jsx)(w.Z,{variant:"contained",onClick:()=>{o((e=>e+3))},children:e("showMorePosts")})})})]})},D=s.memo((()=>{const{t:e}=(0,Z.$G)();return(0,d.jsxs)(n.Z,{maxWidth:"xl",children:[(0,d.jsx)(o.Z,{variant:"h5",textAlign:"center",sx:{m:3},children:e("newsTitle")}),(0,d.jsx)(i.Z,{children:(0,d.jsx)(m,{})}),(0,d.jsx)(i.Z,{sx:{position:"relative",margin:"50px auto"},children:(0,d.jsx)(a.Z,{elevation:4,children:(0,d.jsx)(o.Z,{variant:"h6",color:"text.secondary",sx:{p:2},children:e("newsDesc")})})}),(0,d.jsx)(B,{})]})}))},2898:(e,t,r)=>{var s=r(4836);t.Z=void 0;var o=s(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.Z=i},5806:(e,t,r)=>{var s=r(4836);t.Z=void 0;var o=s(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt");t.Z=i},2811:(e,t,r)=>{var s=r(4836);t.Z=void 0;var o=s(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"m10.89 18.28.57-2.89c.12-.59-.04-1.2-.42-1.66-.38-.46-.94-.73-1.54-.73H4v-1.08L6.57 6h8.09c.18 0 .34.16.34.34v7.84l-4.11 4.1M10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22zm10-7h2V4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1z"}),"ThumbDownOffAlt");t.Z=i},786:(e,t,r)=>{var s=r(4836);t.Z=void 0;var o=s(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.Z=i},2430:(e,t,r)=>{var s=r(4836);t.Z=void 0;var o=s(r(5649)),n=r(184),i=(0,o.default)((0,n.jsx)("path",{d:"m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"}),"ThumbUpOffAlt");t.Z=i}}]);
//# sourceMappingURL=152.1d5e5cd9.chunk.js.map