import{u as p,r as x,l as b,j as s,L as u,V as N}from"./index-a67b738b.js";const y=({background:l,id:r,title:a,total_price:m,price:t,quantity:$,image:g,category:n,allProducts:f})=>{var o,d,c,i;const{i18n:e}=p(),[h,v]=x.useState(!1),{addToCart:j}=x.useContext(b);return s.jsxs("div",{loading:"lazy",className:`product-card flex flex-col items-start justify-between min-h-[430px] relative bg-${l} ${l?"py-3 px-2":""}`,children:[s.jsx("div",{className:"img-holder flex items-center justify-center w-full",children:s.jsx("img",{loading:"lazy",className:"product-img object-contain h-44",src:`https://admin.horriizon.com/public/assets/${g}`,alt:e.language==="ar"?a==null?void 0:a.ar:a==null?void 0:a.en})}),s.jsxs("div",{className:`flex flex-col gap-2 w-full p-2  justify-end ${e.language==="ar"?"text-end":"text-start"}`,children:[s.jsxs("div",{className:`info flex flex-col gap-3 ${f&&"text-start"}`,children:[s.jsx(u,{to:`/product/${r}`,children:s.jsx("h3",{className:"product-name text-md font-bold",children:e.language==="ar"?(o=a==null?void 0:a.ar)==null?void 0:o.substring(0,50):(d=a==null?void 0:a.en)==null?void 0:d.substring(0,50)})}),n?s.jsx(u,{to:`/categories/${n.id}`,children:s.jsx("h4",{className:"vendor-name text-sm text-gray-400",children:e.language==="ar"?(c=n.title)==null?void 0:c.ar:(i=n.title)==null?void 0:i.en})}):""]}),s.jsxs("div",{className:"details h-full flex flex-col items-start justify-end gap-5 flex-1 w-full mt-1",children:[s.jsx("div",{className:"prices",children:s.jsx("span",{className:"text-secondColor font-bold mr-4",children:m||`${e.language==="ar"?`جنية ${t}`:`${t} EGY`} `||"0 EGY"})}),s.jsxs("button",{disabled:h,onClick:()=>{j(r)},"aria-label":"add to cart",className:"cart-icon hover:bg-mainColor duration-200 flex items-center justify-center gap-2 bg-secondColor text-white text-sm p-2 rounded-md w-full",children:[e.language==="en"?"Add to cart":"اضف الي السله"," ",s.jsx(N,{})]})]})]})]})};export{y as S};
