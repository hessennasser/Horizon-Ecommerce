import{u as q,r as i,A as D,j as e,b as P}from"./index-bc21261c.js";import{L as d,F as E,T as o,S as T}from"./Tooltip-bf302bd0.js";import"./index-bb40b1d3.js";import{S as I}from"./react-select.esm-b3bfc495.js";import{d as z}from"./index.esm-bd8d9546.js";import"./index.esm-633d94ac.js";import"./iconBase-1272fafd.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-580b6c09.js";import"./toConsumableArray-cff1766e.js";const M=({productId:c,editModal:A,setEditModal:m,setSelectedGovernorate:L,encategoriesOptions:j,arcategoriesOptions:b,getSellerProducts:u,setAllProducts:x})=>{const{i18n:s}=q(),{editProduct:h,mainRequest:_}=i.useContext(D),f=JSON.parse(localStorage.getItem("sellerToken")),[n,N]=i.useState(null),[C,w]=i.useState(null),k=async()=>{try{const a=await _.post(`${P}/vendor/products/get`,{token:f,id:c}),{data:g}=a;N(g.data)}catch(a){console.log(a)}};i.useEffect(()=>{k()},[c]);const[t,r]=i.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:"",end_date:""});i.useEffect(()=>{n&&(w(n.images[0].path),r({image:null,title_en:n.title.en,title_ar:n.title.ar,category:n.category,quantity:n.quantity,price:n.price,start_date:n.start_date,end_date:n.end_date}))},[n,c]);const[p,F]=i.useState(null),[v,y]=i.useState(!1),S=()=>{if(p){const a=new FileReader;a.onloadend=()=>{const g=new Blob([a.result],{type:p.type}),l=new FormData;l.append("image",g),l.append("title_en",t.title_en),l.append("title_ar",t.title_ar),l.append("category_id",t.category.value||n.category.id),l.append("quantity",t.quantity),l.append("price",t.price),l.append("start_date",t.start_date),l.append("end_date",t.end_date),h(l,y,m,c,u,x)},a.readAsArrayBuffer(p)}else{const a=new FormData;a.append("title_en",t.title_en),a.append("title_ar",t.title_ar),a.append("category_id",t.category.value||n.category.id),a.append("quantity",t.quantity),a.append("price",t.price),a.append("start_date",t.start_date),a.append("end_date",t.end_date),h(a,y,m,c,u,x)}};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:s.language==="en"?"Edit Product":"تعديل المنتج"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{m(!1)},children:e.jsx(z,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:e.jsxs("div",{className:"space-y-6 grid grid-cols-2 gap-3 w-full",children:[e.jsxs("div",{className:"col-span-2",children:[n&&e.jsx("div",{className:"mb-2 flex items-center justify-center",children:e.jsx("img",{src:`https://admin.horriizon.com/images/${C}`,alt:s.language==="en"?t.title_en:t.title_ar,className:"w-32 h-32"})}),e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"image",value:s.language==="en"?"Image ":"الصوره "})}),e.jsx(E,{id:"image",onChange:a=>F(a.target.files[0])})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_en",value:s.language==="en"?"Product Name English ":"اسم المنتج بالانجليزية "})}),e.jsx(o,{id:"title_en",type:"text",value:t.title_en,onChange:a=>r({...t,title_en:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_ar",value:s.language==="en"?"Product Name Arabic ":"اسم المنتج بالعربية "})}),e.jsx(o,{id:"title_ar",type:"text",value:t.title_ar,onChange:a=>r({...t,title_ar:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"category",value:s.language==="en"?"Product Category ":"تصنيف المنتج "})}),e.jsx(I,{name:"category",id:"category",className:"w-full",options:s.language==="en"?j:b,placeholder:s.language==="en"?"Product Category":"تصنيف المنتج",isRtl:s.language==="ar",isSearchable:!0,value:t.category,onChange:a=>r({...t,category:a})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"quantity",value:s.language==="en"?"Quantity ":" الكمية"})}),e.jsx(o,{id:"quantity",type:"number",value:t.quantity,onChange:a=>r({...t,quantity:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"Price",value:s.language==="en"?"Price ":" السعر"})}),e.jsx(o,{id:"Price",type:"number",value:t.price,onChange:a=>r({...t,price:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"start-expired",value:s.language==="en"?"Start Expired ":"تاريخ الانتاج "})}),e.jsx(o,{id:"start-expired",type:"date",value:t.start_date,onChange:a=>r({...t,start_date:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"end-expired",value:s.language==="en"?"End Expired ":"تاريخ الانتهاء "})}),e.jsx(o,{id:"end-expired",type:"date",value:t.end_date,onChange:a=>r({...t,end_date:a.target.value})})]})]})}),e.jsxs("div",{className:" sticky z-10 bottom-0 left-0 right-0 bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:S,disabled:v,children:v?e.jsx(T,{"aria-label":"loading...",color:"purple"}):s.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{m(!1)},children:s.language==="en"?"Cancel":"الغاء"})]})]})]})})};export{M as default};
