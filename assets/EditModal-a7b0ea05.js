import{u as I,r,l as E,j as e,i as b,Q as f}from"./index-dacabe2e.js";import{L as o,F as $,T as d,S as z}from"./Tooltip-b3c3c2f6.js";import{S as A}from"./react-select.esm-e8a44d3c.js";import{F as L}from"./index.esm-affce43c.js";import"./index.esm-6122411f.js";import"./floating-ui.dom-9d44cd4e.js";import"./toConsumableArray-4c8650a4.js";import"./emotion-unitless.esm-475d8cc4.js";const V=({productId:m,editModal:R,setEditModal:u,setSelectedGovernorate:B,encategoriesOptions:N,arcategoriesOptions:_,getSellerProducts:C,setAllProducts:w,setIsLoading:F})=>{const{i18n:s}=I(),{mainRequest:h}=r.useContext(E),y=JSON.parse(localStorage.getItem("sellerToken")),[l,k]=r.useState(null),[S,q]=r.useState(null),P=async()=>{try{const a=await h.post(`${b}/vendor/products/get`,{token:y,id:m}),{data:c}=a;k(c.data)}catch(a){console.log(a)}};r.useEffect(()=>{P()},[m]);const[t,i]=r.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:""});r.useEffect(()=>{l&&(q(l.images[0].path),i({image:null,title_en:l.title.en,title_ar:l.title.ar,category:l.category,quantity:l.quantity,price:l.price,start_date:l.start_date}))},[l,m]);const[g,D]=r.useState(null),[v,p]=r.useState(!1),j=async(a,c,n)=>{p(!0);try{const x=await h.post(`${b}/vendor/products/${n}/update`,a,{headers:{accept:"application/json","Content-Type":"multipart/form-data",Authorization:`Bearer ${y}`}});console.log(x.data),f.success(s.language==="en"?"The product has been updated":"تم تعديل المنتج بنجاح")}catch(x){console.log(x),f.error(s.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{p(!1),c(!1),C(w,F)}},T=()=>{if(g){const a=new FileReader;a.onloadend=()=>{const c=new Blob([a.result],{type:g.type}),n=new FormData;n.append("images",c),n.append("title_en",t.title_en),n.append("title_ar",t.title_ar),n.append("category_id",t.category.value||l.category.id),n.append("quantity",t.quantity),n.append("price",t.price),n.append("start_date",t.start_date),j(n,c,p)},a.readAsArrayBuffer(g)}else{const a=new FormData;a.append("title_en",t.title_en),a.append("title_ar",t.title_ar),a.append("category_id",t.category.value||l.category.id),a.append("quantity",t.quantity),a.append("price",t.price),a.append("start_date",t.start_date),a.append("images",t.image),j(a,p,u)}};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:s.language==="en"?"Edit Product":"تعديل المنتج"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{u(!1)},children:e.jsx(L,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:e.jsxs("div",{className:"space-y-6 grid grid-cols-2 gap-3 w-full",children:[e.jsxs("div",{className:"col-span-2",children:[l&&e.jsx("div",{className:"mb-2 flex items-center justify-center",children:e.jsx("img",{src:`https://admin.horriizon.com/public/assets/${S}`,alt:s.language==="en"?t.title_en:t.title_ar,className:"w-32 h-32"})}),e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"image",value:s.language==="en"?"Image ":"الصوره "})}),e.jsx($,{id:"image",onChange:a=>D(a.target.files[0])})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"title_en",value:s.language==="en"?"Product Name English ":"اسم المنتج بالانجليزية "})}),e.jsx(d,{id:"title_en",type:"text",value:t.title_en,onChange:a=>i({...t,title_en:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"title_ar",value:s.language==="en"?"Product Name Arabic ":"اسم المنتج بالعربية "})}),e.jsx(d,{id:"title_ar",type:"text",value:t.title_ar,onChange:a=>i({...t,title_ar:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"category",value:s.language==="en"?"Product Category ":"تصنيف المنتج "})}),e.jsx(A,{name:"category",id:"category",className:"w-full",options:s.language==="en"?N:_,placeholder:s.language==="en"?"Product Category":"تصنيف المنتج",isRtl:s.language==="ar",isSearchable:!0,value:t.category,onChange:a=>i({...t,category:a})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"quantity",value:s.language==="en"?"Quantity ":" الكمية"})}),e.jsx(d,{id:"quantity",type:"number",value:t.quantity,onChange:a=>i({...t,quantity:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"Price",value:s.language==="en"?"Price ":" السعر"})}),e.jsx(d,{id:"Price",type:"number",value:t.price,onChange:a=>i({...t,price:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"expiry-date",value:s.language==="en"?"Expiry date ":"تاريخ الانتهاء "})}),e.jsx(d,{id:"expiry-date",type:"date",value:t.start_date,onChange:a=>i({...t,start_date:a.target.value})})]})]})}),e.jsxs("div",{className:" sticky z-10 bottom-0 left-0 right-0 bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:T,disabled:v,children:v?e.jsx(z,{"aria-label":"loading...",color:"purple"}):s.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{u(!1)},children:s.language==="en"?"Cancel":"الغاء"})]})]})]})})};export{V as default};
