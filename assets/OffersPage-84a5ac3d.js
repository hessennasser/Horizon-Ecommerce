import{r as s,e as r,f as l,j as t,B as n}from"./index-809b93ef.js";import{S as o}from"./SingleProductCard-0aef5c35.js";const m=()=>{const{offersProducts:a}=s.useContext(r),i=l();if(!a){i("/home");return}return t.jsxs("div",{className:"container py-10",children:[t.jsx(n,{}),t.jsx("div",{className:"content grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",children:(a==null?void 0:a.length)>0&&a.map(e=>t.jsx(o,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e.images[0].path,category:e.category},e.id))})]})};export{m as default};
