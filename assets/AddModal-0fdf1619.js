import{u as E,r as g,e as L,j as e,F as w,ae as d,af as A,Q as p,ag as B,T as m,S as $,l as U,ah as z,b as O}from"./index-dc3c069d.js";const Y=({addModal:Q,setAddModal:x,setSelectedGovernorate:G,encategoriesOptions:C,arcategoriesOptions:_,getSellerProducts:v,setAllProducts:y,setIsLoading:q})=>{const{i18n:t}=E(),{mainRequest:F}=g.useContext(L),I=JSON.parse(localStorage.getItem("sellerToken")),T=async({title_ar:s,title_en:l,start_date:i,category:n,quantity:h,price:b,images:j},k,D)=>{k(!0);try{const o=new z;o.append("token",I),o.append("title_ar",s),o.append("title_en",l),o.append("category_id",n==null?void 0:n.value),o.append("quantity",h),o.append("price",b),o.append("start_date",i);for(let u=0;u<j.length;u++)o.append(`images[${u}]`,j[u],j[u].name);const J=await F.post(`${O}/vendor/products/create`,o,{headers:{accept:"application/json","Content-Type":"multipart/form-data"}});p.success(t.language==="en"?"The product has been uploaded":"تم رفع المنتج بنجاح"),v(y)}catch(o){console.log(o),p.error(t.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مرة أخرى")}finally{k(!1),D(!1),v(y,q)}},[a,c]=g.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:""}),[r,f]=g.useState([]),[N,P]=g.useState(!1),R=()=>{if(!r||r.length===0||!a.title_ar||!a.category||!a.quantity||!a.price||!a.start_date){p.error(t.language==="en"?"Please enter all required fields":"برجاء إدخال جميع الحقول المطلوبة");return}const s=[],l=[];for(let i=0;i<(r==null?void 0:r.length);i++){const n=new FileReader;s.push(new Promise(h=>{n.onloadend=()=>{const b=new Blob([n.result],{type:r[i].type});l.push(b),h()}})),n.readAsArrayBuffer(r[i])}Promise.all(s).then(()=>{var n;const i={...a,title_en:((n=a.title_en)==null?void 0:n.trim())||a.title_ar.trim(),images:l};T(i,P,x)})},S=s=>{const l=[...r];l.splice(s,1),f(l)};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:t.language==="en"?"Add Product":"اضافة منتج جديد"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{x(!1)},children:e.jsx(w,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center flex-1",children:e.jsxs("div",{className:"space-y-6 w-full grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"image",value:t.language==="en"?"Image *":"الصوره *"})}),e.jsx(A,{id:"image",required:!0,multiple:!0,accept:"image/*",onChange:s=>{const l=s.target.files,i=[...r];for(let n=0;n<l.length;n++){if(i.length>=4){p.error(t.language==="en"?"You can only upload up to 4 photos":"يمكنك تحميل ما يصل إلى 4 صور فقط");break}i.push(l[n])}f(i)}}),r.length<1&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]}),r.length>0&&e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center",children:[r.length<4&&e.jsx("button",{className:"h-20 w-20 flex items-center justify-center rounded-md border-dotted border-2 border-secondColor hover:bg-gray-300",onClick:()=>{document.getElementById("image").click()},children:e.jsx(B,{})}),r.map((s,l)=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:URL.createObjectURL(s),alt:`Image ${l}`,className:"h-20 w-20 object-contain rounded-md"}),e.jsx("button",{className:"absolute top-0 right-0 text-red-600 p-1 bg-white rounded-full hover:bg-red-100",onClick:()=>S(l),children:e.jsx(w,{})})]},l))]})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_en",value:t.language==="en"?"Product Name English":"اسم المنتج بالانجليزية"})}),e.jsx(m,{id:"title_en",type:"text",value:a.title_en,onChange:s=>c({...a,title_en:s.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"title_ar",value:t.language==="en"?"Product Name Arabic *":"اسم المنتج بالعربية *"})}),e.jsx(m,{id:"title_ar",type:"text",required:!0,value:a.title_ar,onChange:s=>c({...a,title_ar:s.target.value})}),a.title_ar.length<1&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"category",value:t.language==="en"?"Product Category *":"تصنيف المنتج *"})}),e.jsx($,{name:"category",id:"category",className:"w-full",options:t.language==="en"?C:_,placeholder:t.language==="en"?"Product Category":"تصنيف المنتج",isRtl:t.language==="ar",isSearchable:!0,required:!0,value:a.category,onChange:s=>c({...a,category:s})}),!a.category&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"quantity",value:t.language==="en"?"Quantity *":"* الكمية"})}),e.jsx(m,{id:"quantity",type:"number",min:1,required:!0,value:a.quantity,onChange:s=>c({...a,quantity:s.target.value})}),a.quantity<1&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"Price",value:t.language==="en"?"Price *":" *السعر"})}),e.jsx(m,{id:"Price",type:"number",min:1,required:!0,value:a.price,onChange:s=>c({...a,price:s.target.value})}),a.price<1&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"expiry-date",value:t.language==="en"?"Expiry date *":"تاريخ الانتهاء *"})}),e.jsx(m,{id:"expiry-date",type:"date",required:!0,value:a.start_date,onChange:s=>c({...a,start_date:s.target.value})}),!a.start_date&&e.jsx("span",{className:"text-xs text-red-600 font-bold mt-2 block",children:t.language==="en"?"This Field Is Requeued":"هذا الحقل مطلوب"})]})]})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:R,disabled:N,children:N?e.jsx(U,{"aria-label":"loading...",color:"purple"}):t.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{x(!1)},children:t.language==="en"?"Cancel":"الغاء"})]})]})]})})};export{Y as default};
