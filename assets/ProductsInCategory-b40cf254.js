import{r as l,f as h,a2 as c,u as j,j as a,d as P,a as S,b}from"./index-41a87d18.js";import{S as d}from"./SingleProductCard-263e0d18.js";/* empty css              */import{S as N,P as p,N as v,a as C}from"./pagination-d39579de.js";import{A as B}from"./autoplay-87602fa1.js";const I=()=>{var o,m,x;l.useContext(h);const t=c().id,[s,f]=l.useState({}),[w,r]=l.useState(!1);l.useEffect(()=>{(async()=>{r(!0);try{const n=await S(`${b}/categorySections/${t}`);console.log(n),f(n.data.data[0])}catch(n){console.log(n)}finally{r(!1)}})()},[t]);const{i18n:y}=j();return w?a.jsx(P,{}):a.jsxs("div",{className:"flex flex-col container py-5 min-h-[300px] relative",children:[a.jsx("h2",{className:"font-bold text-xl mb-4",children:y.language==="en"?(o=s==null?void 0:s.title)==null?void 0:o.en:(m=s==null?void 0:s.title)==null?void 0:m.ar}),a.jsx("div",{className:"flex flex-col gap-5",children:(x=s==null?void 0:s.sections)==null?void 0:x.map(i=>{var n,g;return console.log(s),a.jsxs("div",{className:"py-4 px-2 ",children:[a.jsx("h2",{className:"mb-4 text-lg font-bold text-center",children:i.title}),a.jsx(N,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1,reverseDirection:!0},navigation:!0,modules:[p,v,B],className:"mySwiper",style:{direction:"ltr"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},440:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:5,spaceBetween:20}},children:(n=i==null?void 0:i.products)==null?void 0:n.map(e=>a.jsx(C,{children:a.jsx(d,{id:e==null?void 0:e.id,image:e.images[0].path,title:e==null?void 0:e.title,quantity:e==null?void 0:e.quantity,price:e==null?void 0:e.price,category:e==null?void 0:e.category,total_price:e==null?void 0:e.total_price,background:"white"})},e.id))}),(g=i==null?void 0:i.products)==null?void 0:g.map(e=>{console.log(e)})]})})})]})};export{I as default};
