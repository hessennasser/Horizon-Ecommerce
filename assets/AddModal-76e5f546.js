import{u as R,r as c,A as z,j as e,Q as x,F as B,b as L}from"./index-7e5f059a.js";import{L as r,F as $,T as o,S as Q}from"./Tooltip-882b8fe9.js";import"./index-88530db2.js";import{S as G}from"./react-select.esm-f7fccc00.js";import{d as J}from"./index.esm-d5f2e9cc.js";import"./index.esm-15916565.js";import"./iconBase-cfc4fc52.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-f39c121c.js";import"./toConsumableArray-a7f4ebb6.js";const se=({addModal:O,setAddModal:u,setSelectedGovernorate:U,encategoriesOptions:y,arcategoriesOptions:f,getSellerProducts:N,setAllProducts:_})=>{const{i18n:s}=R(),{mainRequest:C,removeBackground:w}=c.useContext(z),h=JSON.parse(localStorage.getItem("sellerToken")),k=async({title_ar:t,title_en:p,start_date:i,end_date:P,category:g,quantity:T,price:I,image:A},b,j,E,D)=>{try{console.log("Removing image background...");const d=await w(A);console.log(d),console.log("Image background removed successfully.");const l=new B;l.append("token",h),l.append("title_ar",t),l.append("title_en",p),l.append("category_id",g==null?void 0:g.value),l.append("quantity",T),l.append("price",I),l.append("start_date",i),l.append("end_date",P),l.append("images",d),console.log("Sending the request...");const H=await C.post(`${L}/vendor/products/create`,l,{headers:{accept:"application/json","Content-Type":"multipart/form-data",Authorization:`Bearer ${h}`}});console.log("Request completed successfully."),x.success(s.language==="en"?"The product has been uploaded":"تم رفع المنتج بنجاح"),b(!1),j(!1),E(D)}catch(d){console.log(d),x.error(s.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري"),b(!1),j(!1)}},[a,n]=c.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",end_date:"",start_date:""}),[m,q]=c.useState(null),[v,F]=c.useState(!1),S=()=>{if(!m||!a.title_en||!a.title_ar||!a.category||!a.quantity||!a.price||!a.start_date||!a.end_date){x.error(s.language==="en"?"Please enter all required fields":"برجاء إدخال جميع الحقول المطلوبة");return}const t=new FileReader;t.onloadend=()=>{const p=new Blob([t.result],{type:m.type}),i={...a,image:p};console.log(i),k(i,F,u,N,_)},t.readAsArrayBuffer(m)};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:s.language==="en"?"Add Product":"اضافة منتج جديد"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{u(!1)},children:e.jsx(J,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:e.jsxs("div",{className:"space-y-6 w-full grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"image",value:s.language==="en"?"Image *":"الصوره *"})}),e.jsx($,{id:"image",required:!0,onChange:t=>q(t.target.files[0])})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"title_en",value:s.language==="en"?"Product Name English *":"اسم المنتج بالانجليزية *"})}),e.jsx(o,{id:"title_en",type:"text",required:!0,value:a.title_en,onChange:t=>n({...a,title_en:t.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"title_ar",value:s.language==="en"?"Product Name Arabic *":"اسم المنتج بالعربية *"})}),e.jsx(o,{id:"title_ar",type:"text",required:!0,value:a.title_ar,onChange:t=>n({...a,title_ar:t.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"category",value:s.language==="en"?"Product Category *":"تصنيف المنتج *"})}),e.jsx(G,{name:"category",id:"category",className:"w-full",options:s.language==="en"?y:f,placeholder:s.language==="en"?"Product Category":"تصنيف المنتج",isRtl:s.language==="ar",isSearchable:!0,required:!0,value:a.category,onChange:t=>n({...a,category:t})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"quantity",value:s.language==="en"?"Quantity *":"* الكمية"})}),e.jsx(o,{id:"quantity",type:"number",required:!0,value:a.quantity,onChange:t=>n({...a,quantity:t.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"Price",value:s.language==="en"?"Price *":" *السعر"})}),e.jsx(o,{id:"Price",type:"number",required:!0,value:a.price,onChange:t=>n({...a,price:t.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"start-expired",value:s.language==="en"?"Start Expired *":"تاريخ الانتاج *"})}),e.jsx(o,{id:"start-expired",type:"date",required:!0,value:a.start_date,onChange:t=>n({...a,start_date:t.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(r,{htmlFor:"end-expired",value:s.language==="en"?"End Expired *":"تاريخ الانتهاء *"})}),e.jsx(o,{id:"end-expired",type:"date",required:!0,value:a.end_date,onChange:t=>n({...a,end_date:t.target.value})})]})]})}),e.jsxs("div",{className:" sticky z-10 bottom-0 left-0 right-0 bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:S,disabled:v,children:v?e.jsx(Q,{"aria-label":"loading...",color:"purple"}):s.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{u(!1)},children:s.language==="en"?"Cancel":"الغاء"}),e.jsx("span",{className:"text-xs text-red-600 font-bold",children:s.language==="en"?"Please Enter All Data*":"برجاء ادخال جميع البيانات المطلوبه*"})]})]})]})})};export{se as default};
