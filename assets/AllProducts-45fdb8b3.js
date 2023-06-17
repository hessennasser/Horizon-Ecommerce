import{p as _,r as l,A as Q,u as $,j as s}from"./index-8f24bfbb.js";import{S as q,a as P,b as y}from"./SingleProductCard-d4081db6.js";import{S as B}from"./index-59495baf.js";import"./index.esm-63923160.js";import"./iconBase-bc1bbad3.js";import"./toConsumableArray-d8972eef.js";import"./index-fe151fe8.js";const V=({})=>{_().id;const{products:n,categories:w}=l.useContext(Q),g=Math.min(...n.map(e=>e.price))===1/0?0:Math.min(...n.map(e=>e.price)),h=Math.max(...n.map(e=>e.price))===-1/0?1e4:Math.max(...n.map(e=>e.price)),[r,v]=l.useState([g,h]),{i18n:i}=$(),[x,T]=l.useState(!0),[d,S]=l.useState(""),[a,p]=l.useState([]),[c,f]=l.useState(1),o=8,[u,k]=l.useState([]);l.useEffect(()=>{f(1)},[d,r,a]),l.useEffect(()=>{const e=n.filter(t=>{const R=t.title.en.toLowerCase(),L=t.title.ar.toLowerCase(),C=d.toLowerCase(),N=t.price,E=t.category_id,F=R.includes(C)||L.includes(C),I=N>=r[0]&&N<=r[1],O=a.length===0||a.includes(E);return F&&I&&O});k(e)},[n,d,r,a]);const b=c*o,M=b-o,j=u.slice(M,b),m=e=>{f(e)},A=e=>{a.includes(e)?p(a.filter(t=>t!==e)):p([...a,e])};return s.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("div",{className:`md:w-1/4 bg-white rounded-lg p-4 md:sticky top-0 h-fit overflow-y-auto shadow-lg flex flex-col gap-5 ${!x&&""}`,children:[s.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:i.language==="en"?"filter":"تصفية"}),s.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:s.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:d,placeholder:i.language==="en"?"search":"ابحث",onChange:e=>S(e.target.value)})}),s.jsxs("div",{className:"w-full border-b border-gray-400 pb-4",children:[s.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[i.language==="en"?"Price Range":"سعر المنتج ",": ",r[0]," - ",r[1]]}),s.jsx(B,{range:!0,id:"priceRange",className:"mt-4",min:g,max:h,step:10,value:r,onChange:e=>v(e)})]}),s.jsxs("div",{className:"w-full",children:[s.jsxs("h4",{className:"mb-2 text-secondColor font-bold",children:[i.language==="en"?"Categories":"التصنيفات ",":"]}),s.jsx("ul",{children:w.map(e=>s.jsx("li",{children:s.jsxs("label",{htmlFor:e.id,className:"flex items-center gap-4",children:[s.jsx("input",{type:"checkbox",id:e.id,className:"border-solid border-mainColor",checked:a.includes(e.id),onChange:()=>A(e.id)}),i.language==="en"?e.title.en:e.title.ar]})},e.id))})]})]}),s.jsxs("div",{className:"md:w-3/4 p-4 ",children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:j.length>0?j.map(e=>s.jsx(q,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e.images[0].path,category:e.category},e.id)):s.jsx("p",{children:"No products found."})}),u.length>o&&s.jsx("nav",{className:"mt-4 flex justify-center",children:s.jsxs("ul",{className:"pagination flex items-center gap-3",children:[c>1&&s.jsx("li",{className:"page-item text-blue-500",children:s.jsx("button",{className:"page-link w-full h-full py-2 px-2 text-2xl",onClick:()=>m(c-1),children:i.language==="en"?s.jsx(P,{}):s.jsx(y,{})})}),Array.from({length:Math.ceil(u.length/o)},(e,t)=>s.jsx("li",{className:`page-item bg-gray-600 hover:bg-gray-800 text-white rounded-md  ${c===t+1?"active bg-secondColor":""}`,children:s.jsx("button",{className:"page-link w-full h-full py-2 px-4",onClick:()=>m(t+1),children:t+1})},t)),c<Math.ceil(u.length/o)&&s.jsx("li",{className:"page-item text-blue-500",children:s.jsx("button",{className:"page-link w-full h-full py-2 px-2 text-2xl",onClick:()=>m(c+1),children:i.language==="en"?s.jsx(y,{}):s.jsx(P,{})})})]})})]})]})})};export{V as default};
