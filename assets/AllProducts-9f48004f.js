import{r as a,e as _,u as D,j as s,d as T,a as B,b as U}from"./index-2061328e.js";import{S as $}from"./SingleProductCard-63bb132b.js";import{S as z}from"./Slider-c191e35c.js";/* empty css              */const O=({})=>{const{products:u,categories:C}=a.useContext(_),[o,w]=a.useState([]),[m,S]=a.useState([]),[h,y]=a.useState(0),[x,N]=a.useState(1e4),[i,v]=a.useState([h,x]),[g,A]=a.useState(""),{i18n:n}=D(),[r,f]=a.useState([]),[p,M]=a.useState([]),[b,d]=a.useState(!1),E=e=>{r.includes(e)?f(r.filter(t=>t!==e)):f([...r,e])},L=async()=>{d(!0);try{const e=await B.get(`${U}/allProduct`),{data:t}=e;w(t.data),d(!1)}catch(e){console.log(e),d(!1)}d(!1)};a.useEffect(()=>{L()},[]),a.useEffect(()=>{if(o.length>0&&u.length>0){const e=[...o,...u];S(e),y(Math.min(...e.map(t=>t.price))),N(Math.max(...e.map(t=>t.price))+200)}},[o,u]);const R=e=>{const t=[],l=new Set;for(const c of e)l.has(c.id)||(t.push(c),l.add(c.id));return t};return a.useEffect(()=>{const t=R(m).filter(l=>{const c=l.title.en.toLowerCase(),q=l.title.ar.toLowerCase(),P=g.toLowerCase(),j=l.price,k=l.category_id,I=c.includes(P)||q.includes(P),F=j>=i[0]&&j<=i[1],Q=r.length===0||r.includes(k);return I&&F&&Q});M(t)},[m,o,g,i,r]),m.filter(e=>!o.some(t=>t.id===e.id)),console.log(b),b?s.jsx(T,{}):s.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("div",{className:"md:w-1/4 bg-white rounded-lg p-4 md:sticky md:top-44 h-fit overflow-y-auto shadow-lg flex flex-col gap-5",children:[s.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:n.language==="en"?"filter":"تصفية"}),s.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:s.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:g,placeholder:n.language==="en"?"search":"ابحث",onChange:e=>A(e.target.value)})}),s.jsxs("div",{className:"w-full border-b border-gray-400 pb-4",children:[s.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[n.language==="en"?"Price Range":"سعر المنتج ",": ",i[0]," - ",i[1]]}),s.jsx(z,{range:!0,id:"priceRange",className:"mt-4",min:h,max:x,step:10,value:i,onChange:e=>v(e)})]}),s.jsxs("div",{className:"w-full",children:[s.jsxs("h4",{className:"mb-2 text-secondColor font-bold",children:[n.language==="en"?"Categories":"التصنيفات ",":"]}),s.jsx("ul",{children:C.map(e=>s.jsx("li",{children:s.jsxs("label",{htmlFor:e.id,className:"flex items-center gap-4",children:[s.jsx("input",{type:"checkbox",id:e.id,className:"border-solid border-mainColor",checked:r.includes(e.id),onChange:()=>E(e.id)}),n.language==="en"?e.title.en:e.title.ar]})},e.id))})]})]}),s.jsx("div",{className:"md:w-3/4 p-4",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:p.length>0?p.map(e=>s.jsx($,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e!=null&&e.images?e.images[0].path:null,category:e.category},e.id)):s.jsx("p",{children:"No products found."})})})]})})};export{O as default};