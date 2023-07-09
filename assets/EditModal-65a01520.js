import{u as R,r as i,A as B,j as e,b as _,Q as N}from"./index-7e5f059a.js";import{L as o,F as L,T as c,S as O}from"./Tooltip-882b8fe9.js";import"./index-88530db2.js";import{S as Q}from"./react-select.esm-f7fccc00.js";import{d as G}from"./index.esm-d5f2e9cc.js";import"./index.esm-15916565.js";import"./iconBase-cfc4fc52.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-f39c121c.js";import"./toConsumableArray-a7f4ebb6.js";const te=({productId:m,editModal:J,setEditModal:p,setSelectedGovernorate:U,encategoriesOptions:C,arcategoriesOptions:w,getSellerProducts:x,setAllProducts:h})=>{const{i18n:s}=R(),{mainRequest:y,removeBackground:k}=i.useContext(B),v=JSON.parse(localStorage.getItem("sellerToken")),[n,F]=i.useState(null),[S,q]=i.useState(null),P=async()=>{try{const a=await y.post(`${_}/vendor/products/get`,{token:v,id:m}),{data:d}=a;F(d.data)}catch(a){console.log(a)}};i.useEffect(()=>{P()},[m]);const[t,r]=i.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:"",end_date:""});i.useEffect(()=>{n&&(q(n.images[0].path),r({image:null,title_en:n.title.en,title_ar:n.title.ar,category:n.category,quantity:n.quantity,price:n.price,start_date:n.start_date,end_date:n.end_date}))},[n,m]);const[u,T]=i.useState(null),[b,j]=i.useState(!1),f=async(a,d,l,D,$,z,A)=>{console.log(a.get("images")),l(!0);try{console.log("Removing image background...");const g=await k(d);console.log(g),console.log("Image background removed successfully."),a.set("images",g);const I=await y.post(`${_}/vendor/products/${$}/update`,a,{headers:{accept:"application/json","Content-Type":"multipart/form-data",Authorization:`Bearer ${v}`}});console.log(I.data),N.success(s.language==="en"?"The product has been updated":"تم تعديل المنتج بنجاح"),l(!1),z(A)}catch(g){console.log(g),N.error(s.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري"),l(!1)}finally{D(!1)}},E=()=>{if(u){const a=new FileReader;a.onloadend=()=>{const d=new Blob([a.result],{type:u.type}),l=new FormData;l.append("images",d),l.append("title_en",t.title_en),l.append("title_ar",t.title_ar),l.append("category_id",t.category.value||n.category.id),l.append("quantity",t.quantity),l.append("price",t.price),l.append("start_date",t.start_date),l.append("end_date",t.end_date),f(l,d,j,p,m,x,h)},a.readAsArrayBuffer(u)}else{const a=new FormData;a.append("title_en",t.title_en),a.append("title_ar",t.title_ar),a.append("category_id",t.category.value||n.category.id),a.append("quantity",t.quantity),a.append("price",t.price),a.append("start_date",t.start_date),a.append("end_date",t.end_date),f(a,t.image,j,p,m,x,h)}};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:s.language==="en"?"Edit Product":"تعديل المنتج"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{p(!1)},children:e.jsx(G,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:e.jsxs("div",{className:"space-y-6 grid grid-cols-2 gap-3 w-full",children:[e.jsxs("div",{className:"col-span-2",children:[n&&e.jsx("div",{className:"mb-2 flex items-center justify-center",children:e.jsx("img",{src:`https://admin.horriizon.com/public/assets/${S}`,alt:s.language==="en"?t.title_en:t.title_ar,className:"w-32 h-32"})}),e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"image",value:s.language==="en"?"Image ":"الصوره "})}),e.jsx(L,{id:"image",onChange:a=>T(a.target.files[0])})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"title_en",value:s.language==="en"?"Product Name English ":"اسم المنتج بالانجليزية "})}),e.jsx(c,{id:"title_en",type:"text",value:t.title_en,onChange:a=>r({...t,title_en:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"title_ar",value:s.language==="en"?"Product Name Arabic ":"اسم المنتج بالعربية "})}),e.jsx(c,{id:"title_ar",type:"text",value:t.title_ar,onChange:a=>r({...t,title_ar:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"category",value:s.language==="en"?"Product Category ":"تصنيف المنتج "})}),e.jsx(Q,{name:"category",id:"category",className:"w-full",options:s.language==="en"?C:w,placeholder:s.language==="en"?"Product Category":"تصنيف المنتج",isRtl:s.language==="ar",isSearchable:!0,value:t.category,onChange:a=>r({...t,category:a})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"quantity",value:s.language==="en"?"Quantity ":" الكمية"})}),e.jsx(c,{id:"quantity",type:"number",value:t.quantity,onChange:a=>r({...t,quantity:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"Price",value:s.language==="en"?"Price ":" السعر"})}),e.jsx(c,{id:"Price",type:"number",value:t.price,onChange:a=>r({...t,price:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"start-expired",value:s.language==="en"?"Start Expired ":"تاريخ الانتاج "})}),e.jsx(c,{id:"start-expired",type:"date",value:t.start_date,onChange:a=>r({...t,start_date:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(o,{htmlFor:"end-expired",value:s.language==="en"?"End Expired ":"تاريخ الانتهاء "})}),e.jsx(c,{id:"end-expired",type:"date",value:t.end_date,onChange:a=>r({...t,end_date:a.target.value})})]})]})}),e.jsxs("div",{className:" sticky z-10 bottom-0 left-0 right-0 bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:E,disabled:b,children:b?e.jsx(O,{"aria-label":"loading...",color:"purple"}):s.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{p(!1)},children:s.language==="en"?"Cancel":"الغاء"})]})]})]})})};export{te as default};
