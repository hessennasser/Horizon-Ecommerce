import{r,e as F,u as Q,j as s,a as _,b as D}from"./index-dc3c069d.js";import{S as T}from"./SingleProductCard-66be7ff8.js";import{S as B}from"./Slider-137ea012.js";/* empty css              */const H=({})=>{const{products:d,categories:P}=r.useContext(F),[c,j]=r.useState([]),[u,C]=r.useState([]),[h,w]=r.useState(0),[g,y]=r.useState(1e4),[i,N]=r.useState([h,g]),[m,S]=r.useState(""),{i18n:n}=Q(),[a,x]=r.useState([]),[f,v]=r.useState([]),A=e=>{a.includes(e)?x(a.filter(t=>t!==e)):x([...a,e])},M=async()=>{try{const e=await _.get(`${D}/allProduct`),{data:t}=e;j(t.data)}catch(e){console.log(e)}};r.useEffect(()=>{M()},[]),r.useEffect(()=>{if(c.length>0&&d.length>0){const e=[...c,...d];C(e),w(Math.min(...e.map(t=>t.price))),y(Math.max(...e.map(t=>t.price))+200)}},[c,d]);const E=e=>{const t=[],l=new Set;for(const o of e)l.has(o.id)||(t.push(o),l.add(o.id));return t};return r.useEffect(()=>{const t=E(u).filter(l=>{const o=l.title.en.toLowerCase(),R=l.title.ar.toLowerCase(),p=m.toLowerCase(),b=l.price,q=l.category_id,k=o.includes(p)||R.includes(p),I=b>=i[0]&&b<=i[1],L=a.length===0||a.includes(q);return k&&I&&L});v(t)},[u,c,m,i,a]),u.filter(e=>!c.some(t=>t.id===e.id)),s.jsx("div",{className:"flex flex-col container py-5 min-h-screen relative",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("div",{className:"md:w-1/4 bg-white rounded-lg p-4 md:sticky md:top-44 h-fit overflow-y-auto shadow-lg flex flex-col gap-5",children:[s.jsx("h3",{className:"font-bold text-lg border-b border-gray-400 pb-4",children:n.language==="en"?"filter":"تصفية"}),s.jsx("div",{className:"w-full border-b border-gray-400 pb-4",children:s.jsx("input",{className:"w-full border border-gray-200 border-solid h-8",type:"text",name:"searchInAllProducts",id:"searchInAllProducts",value:m,placeholder:n.language==="en"?"search":"ابحث",onChange:e=>S(e.target.value)})}),s.jsxs("div",{className:"w-full border-b border-gray-400 pb-4",children:[s.jsxs("label",{className:"text-secondColor font-bold",htmlFor:"priceRange",children:[n.language==="en"?"Price Range":"سعر المنتج ",": ",i[0]," - ",i[1]]}),s.jsx(B,{range:!0,id:"priceRange",className:"mt-4",min:h,max:g,step:10,value:i,onChange:e=>N(e)})]}),s.jsxs("div",{className:"w-full",children:[s.jsxs("h4",{className:"mb-2 text-secondColor font-bold",children:[n.language==="en"?"Categories":"التصنيفات ",":"]}),s.jsx("ul",{children:P.map(e=>s.jsx("li",{children:s.jsxs("label",{htmlFor:e.id,className:"flex items-center gap-4",children:[s.jsx("input",{type:"checkbox",id:e.id,className:"border-solid border-mainColor",checked:a.includes(e.id),onChange:()=>A(e.id)}),n.language==="en"?e.title.en:e.title.ar]})},e.id))})]})]}),s.jsx("div",{className:"md:w-3/4 p-4",children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4",children:f.length>0?f.map(e=>s.jsx(T,{allProducts:!0,background:"white",productDetails:e,id:e.id,title:e.title,total_price:e.total_price,price:e.price,quantity:e.quantity,image:e!=null&&e.images?e.images[0].path:null,category:e.category},e.id)):s.jsx("p",{children:"No products found."})})})]})})};export{H as default};
