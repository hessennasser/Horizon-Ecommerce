import{C as R,r as l,f as q,u as k,j as s}from"./index-1d469259.js";import{S as A}from"./Slider-171c9154.js";/* empty css              */import{S as E}from"./SingleProductCard-6d2b0d14.js";const $=({})=>{const p=R(),f=new URLSearchParams(p.search).get("q")||"",{products:a,categories:b,searchQuery:n,setSearchQuery:j}=l.useContext(q),o=Math.min(...a.map(e=>e.price))===1/0?0:Math.min(...a.map(e=>e.price)),d=Math.max(...a.map(e=>e.price))===-1/0?1e4:Math.max(...a.map(e=>e.price)),[r,C]=l.useState([o,d]),{i18n:c}=k(),[m,F]=l.useState(!0),[t,h]=l.useState([]),[u,P]=l.useState([]);l.useEffect(()=>{const e=a.filter(i=>{const N=i.title.en.toLowerCase(),y=i.title.ar.toLowerCase(),g=f.toLocaleLowerCase()||(n==null?void 0:n.toLowerCase()),x=i.price,S=i.category_id,v=N.includes(g)||y.includes(g),L=x>=r[0]&&x<=r[1],M=t.length===0||t.includes(S);return v&&L&&M});P(e)},[a,n,r,t]);const w=e=>{t.includes(e)?h(t.filter(i=>i!==e)):h([...t,e])};return s.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("div",{className:`md:w-1/4 bg-white rounded-lg p-4 md:sticky md:top-44 h-fit overflow-y-auto shadow-lg flex flex-col gap-5 ${!m&&""}`,children:[s.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:c.language==="en"?"filter":"تصفية"}),s.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:s.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:n,placeholder:c.language==="en"?"search":"ابحث",onChange:e=>j(e.target.value)})}),s.jsxs("div",{className:"w-full border-b border-gray-400 pb-4",children:[s.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[c.language==="en"?"Price Range":"سعر المنتج ",": ",r[0]," - ",r[1]]}),s.jsx(A,{range:!0,id:"priceRange",className:"mt-4",min:o,max:d,step:10,value:r,onChange:e=>C(e)})]}),s.jsxs("div",{className:"w-full",children:[s.jsxs("h4",{className:"mb-2 text-secondColor font-bold",children:[c.language==="en"?"Categories":"التصنيفات ",":"]}),s.jsx("ul",{children:b.map(e=>s.jsx("li",{children:s.jsxs("label",{htmlFor:e.id,className:"flex items-center gap-4",children:[s.jsx("input",{type:"checkbox",id:e.id,className:"border-solid border-mainColor",checked:t.includes(e.id),onChange:()=>w(e.id)}),c.language==="en"?e.title.en:e.title.ar]})},e.id))})]})]}),s.jsx("div",{className:"md:w-3/4 p-4 ",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:u.length>0?u.map(e=>s.jsx(E,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e.images[0].path,category:e.category},e.id)):s.jsx("p",{children:"No products found."})})})]})})};export{$ as default};
