import{r as s,f as r,g as l,j as t,B as n}from"./index-14fe7ceb.js";import{S as o}from"./SingleProductCard-88d3d9ba.js";const m=()=>{const{weeklyOffersProducts:e}=s.useContext(r),i=l();if(!e){i("/home");return}return t.jsxs("div",{className:"container py-10",children:[t.jsx(n,{}),t.jsx("div",{className:"content grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",children:(e==null?void 0:e.length)>0&&e.map(a=>t.jsx(o,{allProducts:!0,background:"white",productDetails:a,id:a.id,title:a.title,total_price:a.total_price,price:a.price,quantity:a.quantity,image:a.images[0].path,category:a.category},a.id))})]})};export{m as default};
