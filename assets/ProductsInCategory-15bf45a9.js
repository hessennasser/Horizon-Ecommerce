import{r as s,A as E,d as L,u as F,j as t}from"./index-07f41fe7.js";import{S as Q}from"./SingleProductCard-767a10fa.js";import{c as P,d as b}from"./index.esm-8b2159e9.js";import{S as _}from"./index-e63ab2e9.js";import"./index.esm-5edd7585.js";import"./iconBase-1692c05c.js";import"./toConsumableArray-8cfbb2bf.js";import"./index-d1bd9d3c.js";const H=()=>{const{getProductsForCategory:C}=s.useContext(E),u=L().id,[l,N]=s.useState([]);s.useEffect(()=>{C(u,N)},[u]);const m=Math.min(...l.map(e=>e.price))===1/0?0:Math.min(...l.map(e=>e.price)),x=Math.max(...l.map(e=>e.price))===-1/0?1e4:Math.max(...l.map(e=>e.price)),[r,w]=s.useState([m,x]),{i18n:i}=F(),[o,v]=s.useState(""),[c,h]=s.useState(1),n=8,[d,S]=s.useState([]);s.useEffect(()=>{h(1)},[o,r]),s.useEffect(()=>{const e=l.filter(a=>{const I=a.title.en.toLowerCase(),M=a.title.ar.toLowerCase(),j=o.toLowerCase(),y=a.price,R=I.includes(j)||M.includes(j),A=y>=r[0]&&y<=r[1];return R&&A});S(e)},[l,o,r]);const p=c*n,k=p-n,f=d.slice(k,p),g=e=>{h(e)};return t.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:t.jsxs("div",{className:"flex flex-col sm:flex-row",children:[t.jsxs("div",{className:"md:w-1/4 bg-white rounded-lg p-4 md:sticky top-0 h-fit overflow-y-auto shadow-lg flex flex-col gap-5",children:[t.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:i.language==="en"?"filter":"تصفية"}),t.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:t.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:o,placeholder:i.language==="en"?"search":"ابحث",onChange:e=>v(e.target.value)})}),t.jsxs("div",{className:"w-full ",children:[t.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[i.language==="en"?"Price Range":"سعر المنتج ",": ",r[0]," - ",r[1]]}),t.jsx(_,{range:!0,id:"priceRange",className:"mt-4",min:m,max:x,step:10,value:r,onChange:e=>w(e)})]})]}),t.jsxs("div",{className:"md:w-3/4 p-4",children:[t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:f.length>0?f.map(e=>t.jsx(Q,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e.images[0].path,category:e.category},e.id)):t.jsx("p",{children:"No products found."})}),d.length>n&&t.jsx("nav",{className:"mt-4 flex justify-center",children:t.jsxs("ul",{className:"pagination flex items-center gap-3",children:[c>1&&t.jsx("li",{className:"page-item text-blue-500",children:t.jsx("button",{className:"page-link w-full h-full py-2 px-2 text-2xl",onClick:()=>g(c-1),children:i.language==="en"?t.jsx(P,{}):t.jsx(b,{})})}),Array.from({length:Math.ceil(d.length/n)},(e,a)=>t.jsx("li",{className:`page-item bg-gray-600 hover:bg-gray-800 text-white rounded-md  ${c===a+1?"active bg-secondColor":""}`,children:t.jsx("button",{className:"page-link w-full h-full py-2 px-4",onClick:()=>g(a+1),children:a+1})},a)),c<Math.ceil(d.length/n)&&t.jsx("li",{className:"page-item text-blue-500",children:t.jsx("button",{className:"page-link w-full h-full py-2 px-2 text-2xl",onClick:()=>g(c+1),children:i.language==="en"?t.jsx(b,{}):t.jsx(P,{})})})]})})]})]})})};export{H as default};
