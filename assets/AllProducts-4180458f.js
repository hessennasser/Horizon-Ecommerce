import{r as l,f as I,u as L,j as s,a as F,b as Q}from"./index-9ac8252e.js";import{S as _}from"./SingleProductCard-03255bab.js";import{S as $}from"./Slider-68743100.js";/* empty css              */const z=({})=>{const{products:t,categories:P}=l.useContext(I),[c,j]=l.useState([]),[m,C]=l.useState([]),u=Math.min(...t==null?void 0:t.map(e=>e.price))===1/0?0:Math.min(...t==null?void 0:t.map(e=>e.price)),h=Math.max(...t==null?void 0:t.map(e=>e.price))===-1/0?1e4:Math.max(...t==null?void 0:t.map(e=>e.price)),[i,y]=l.useState([u,h]),[o,w]=l.useState(""),[g,q]=l.useState(!0),{i18n:n}=L(),[r,x]=l.useState([]),[f,N]=l.useState([]),S=e=>{r.includes(e)?x(r.filter(a=>a!==e)):x([...r,e])},v=async()=>{try{const e=await F.get(`${Q}/allProduct`),{data:a}=e;j(a.data),console.log(a.data)}catch(e){console.log(e)}};return l.useEffect(()=>{v()},[]),l.useEffect(()=>{const e=[...c,...t];C(e)},[c,t]),l.useEffect(()=>{const e=m.filter(a=>!c.some(d=>d.id===a.id)).filter(a=>{const d=a.title.en.toLowerCase(),A=a.title.ar.toLowerCase(),p=o.toLowerCase(),b=a.price,M=a.category_id,E=d.includes(p)||A.includes(p),R=b>=i[0]&&b<=i[1],k=r.length===0||r.includes(M);return E&&R&&k});N(e)},[m,c,o,i,r]),s.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("div",{className:`md:w-1/4 bg-white rounded-lg p-4 md:sticky md:top-44 h-fit overflow-y-auto shadow-lg flex flex-col gap-5 ${!g&&""}`,children:[s.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:n.language==="en"?"filter":"تصفية"}),s.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:s.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:o,placeholder:n.language==="en"?"search":"ابحث",onChange:e=>w(e.target.value)})}),s.jsxs("div",{className:"w-full border-b border-gray-400 pb-4",children:[s.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[n.language==="en"?"Price Range":"سعر المنتج ",": ",i[0]," - ",i[1]]}),s.jsx($,{range:!0,id:"priceRange",className:"mt-4",min:u,max:h,step:10,value:i,onChange:e=>y(e)})]}),s.jsxs("div",{className:"w-full",children:[s.jsxs("h4",{className:"mb-2 text-secondColor font-bold",children:[n.language==="en"?"Categories":"التصنيفات ",":"]}),s.jsx("ul",{children:P.map(e=>s.jsx("li",{children:s.jsxs("label",{htmlFor:e.id,className:"flex items-center gap-4",children:[s.jsx("input",{type:"checkbox",id:e.id,className:"border-solid border-mainColor",checked:r.includes(e.id),onChange:()=>S(e.id)}),n.language==="en"?e.title.en:e.title.ar]})},e.id))})]})]}),s.jsx("div",{className:"md:w-3/4 p-4 ",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:f.length>0?f.map(e=>s.jsx(_,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e.images[0].path,category:e.category},e.id)):s.jsx("p",{children:"No products found."})})})]})})};export{z as default};
