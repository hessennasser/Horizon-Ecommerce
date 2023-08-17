import{u as E,r as p,e as L,j as e,F as C,Q as g,P as A,S as B,b as $}from"./index-90b8ff94.js";import{L as d,F as z,T as u,S as U}from"./Tooltip-a3eae287.js";import{S as O}from"./react-select.esm-c0722918.js";import"./index.esm-cd81285c.js";import"./floating-ui.dom-9d44cd4e.js";import"./toConsumableArray-efda5d7e.js";import"./emotion-unitless.esm-475d8cc4.js";const ee=({addModal:Q,setAddModal:h,setSelectedGovernorate:G,encategoriesOptions:_,arcategoriesOptions:k,getSellerProducts:v,setAllProducts:y,setIsLoading:F})=>{const{i18n:s}=E(),{mainRequest:q,removeBackground:J}=p.useContext(L),P=JSON.parse(localStorage.getItem("sellerToken")),S=async({title_ar:a,title_en:l,start_date:i,category:r,quantity:x,price:b,images:j},w,D)=>{w(!0);try{const o=new B;o.append("token",P),o.append("title_ar",a),o.append("title_en",l),o.append("category_id",r==null?void 0:r.value),o.append("quantity",x),o.append("price",b),o.append("start_date",i);for(let m=0;m<j.length;m++)o.append(`images[${m}]`,j[m],j[m].name);const M=await q.post(`${$}/vendor/products/create`,o,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}});g.success(s.language==="en"?"The product has been uploaded":"تم رفع المنتج بنجاح"),v(y)}catch(o){console.log(o),g.error(s.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مرة أخرى")}finally{w(!1),D(!1),v(y,F)}},[t,c]=p.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:""}),[n,f]=p.useState([]),[N,I]=p.useState(!1),T=()=>{if(!n||n.length===0||!t.title_ar||!t.category||!t.quantity||!t.price||!t.start_date){g.error(s.language==="en"?"Please enter all required fields":"برجاء إدخال جميع الحقول المطلوبة");return}const a=[],l=[];for(let i=0;i<(n==null?void 0:n.length);i++){const r=new FileReader;a.push(new Promise(x=>{r.onloadend=()=>{const b=new Blob([r.result],{type:n[i].type});l.push(b),x()}})),r.readAsArrayBuffer(n[i])}Promise.all(a).then(()=>{var r;const i={...t,title_en:((r=t.title_en)==null?void 0:r.trim())||t.title_ar.trim(),images:l};S(i,I,h)})},R=a=>{const l=[...n];l.splice(a,1),f(l)};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:s.language==="en"?"Add Product":"اضافة منتج جديد"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{h(!1)},children:e.jsx(C,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:e.jsxs("div",{className:"space-y-6 w-full grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"image",value:s.language==="en"?"Image *":"الصوره *"})}),e.jsx(z,{id:"image",required:!0,multiple:!0,accept:"image/*",onChange:a=>{const l=a.target.files,i=[...n];for(let r=0;r<l.length;r++){if(i.length>=4){g.error(s.language==="en"?"You can only upload up to 4 photos":"يمكنك تحميل ما يصل إلى 4 صور فقط");break}i.push(l[r])}f(i)}})]}),e.jsx("div",{className:"col-span-2",children:n.length>0&&e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[n.length<4&&e.jsx("button",{className:"h-20 w-20 flex items-center justify-center rounded-md border-dotted border-2 border-secondColor hover:bg-gray-300",onClick:()=>{document.getElementById("image").click()},children:e.jsx(A,{})}),n.map((a,l)=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:URL.createObjectURL(a),alt:`Image ${l}`,className:"h-20 w-20 object-contain rounded-md"}),e.jsx("button",{className:"absolute top-0 right-0 text-red-600 p-1 bg-white rounded-full hover:bg-red-100",onClick:()=>R(l),children:e.jsx(C,{})})]},l))]})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_en",value:s.language==="en"?"Product Name English":"اسم المنتج بالانجليزية"})}),e.jsx(u,{id:"title_en",type:"text",value:t.title_en,onChange:a=>c({...t,title_en:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_ar",value:s.language==="en"?"Product Name Arabic *":"اسم المنتج بالعربية *"})}),e.jsx(u,{id:"title_ar",type:"text",required:!0,value:t.title_ar,onChange:a=>c({...t,title_ar:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"category",value:s.language==="en"?"Product Category *":"تصنيف المنتج *"})}),e.jsx(O,{name:"category",id:"category",className:"w-full",options:s.language==="en"?_:k,placeholder:s.language==="en"?"Product Category":"تصنيف المنتج",isRtl:s.language==="ar",isSearchable:!0,required:!0,value:t.category,onChange:a=>c({...t,category:a})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"quantity",value:s.language==="en"?"Quantity *":"* الكمية"})}),e.jsx(u,{id:"quantity",type:"number",min:1,required:!0,value:t.quantity,onChange:a=>c({...t,quantity:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"Price",value:s.language==="en"?"Price *":" *السعر"})}),e.jsx(u,{id:"Price",type:"number",min:1,required:!0,value:t.price,onChange:a=>c({...t,price:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"expiry-date",value:s.language==="en"?"Expiry date *":"تاريخ الانتهاء *"})}),e.jsx(u,{id:"expiry-date",type:"date",required:!0,value:t.start_date,onChange:a=>c({...t,start_date:a.target.value})})]})]})}),e.jsxs("div",{className:" sticky z-10 bottom-0 left-0 right-0 bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:T,disabled:N,children:N?e.jsx(U,{"aria-label":"loading...",color:"purple"}):s.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{h(!1)},children:s.language==="en"?"Cancel":"الغاء"}),e.jsx("span",{className:"text-xs text-red-600 font-bold",children:s.language==="en"?"Please Enter All Data*":"برجاء ادخال جميع البيانات المطلوبه*"})]})]})]})})};export{ee as default};
