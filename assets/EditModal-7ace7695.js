import{r,f as P,u as M,j as e,F as U,ah as B,b as _,Q as h,af as u,T as v,S as J,m as O}from"./index-a3ee0e6e.js";const Q=({productId:o,productData:m,getProductData:g,setIsLoading:x,getSellerProducts:N,setAllProducts:w,setLoadingAllProducts:y})=>{const{mainRequest:b}=r.useContext(P),f=JSON.parse(localStorage.getItem("sellerToken")),[n,C]=r.useState(null),{i18n:c}=M(),k=async i=>{x(!0);try{const l=new FormData;l.append("token",f),l.append("product_id",o),l.append("image",i);const t=await b.post(`${_}/product/image/create`,l,{headers:{"Content-Type":"multipart/form-data"}});g(),h.success(c.language==="en"?"The product has been updated":"تم تعديل المنتج بنجاح")}catch{h.error(c.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{x(!1),N(w,y)}},T=i=>{const l=i.target.files[0];l&&(C(l),k(l))},S=()=>{document.getElementById("image").click()},s=async i=>{x(!0);try{const l=await b.post(`${_}/product/image/delete`,{token:f,id:i});g(),h.success(c.language==="en"?"The product has been updated":"تم تعديل المنتج بنجاح")}catch{h.error(c.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{x(!1),N(w,y)}};return e.jsx("div",{className:"space-y-6 grid grid-cols-2 grid-rows-2 gap-3 w-full",children:m&&m.images.length>0&&e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 justify-center",children:[m.images.map((i,l)=>e.jsxs("div",{className:"relative p-2 border-2 min-h-[228px] ",children:[e.jsx("img",{src:`https://admin.horriizon.com/public/${i.path}`,alt:`Image ${l}`,className:"object-contain"}),m.images.length>1&&e.jsx("button",{className:"absolute top-0 right-0 text-red-600 p-1 bg-white rounded-full hover:bg-red-100",onClick:()=>s(i.id),children:e.jsx(U,{})})]},l)),m.images.length<4&&e.jsxs("button",{className:" min-h-[228px] flex items-center justify-center rounded-md border-dotted border-2 border-secondColor hover:bg-gray-300",onClick:S,children:[e.jsx(B,{}),e.jsx("input",{type:"file",id:"image",accept:"image/*",hidden:!0,onChange:T})]})]})})})},H=({productId:o,editModal:m,setEditModal:g,setSelectedGovernorate:x,encategoriesOptions:N,arcategoriesOptions:w,getSellerProducts:y,setAllProducts:b,setIsLoading:f})=>{const{i18n:n}=M(),{mainRequest:C}=r.useContext(P),c=JSON.parse(localStorage.getItem("sellerToken")),[k,T]=r.useState(!1),S=()=>{T(!0)},[s,i]=r.useState(null),l=async()=>{try{const a=await C.post(`${_}/vendor/products/get`,{token:c,id:o}),{data:p}=a;i(p.data)}catch(a){console.log(a)}};r.useEffect(()=>{l()},[o]);const[t,d]=r.useState({image:null,title_en:"",title_ar:"",category:null,quantity:"",price:"",start_date:""});r.useEffect(()=>{s&&d({image:null,title_en:s.title.en,title_ar:s.title.ar,category:s.category,quantity:s.quantity,price:s.price,start_date:s.start_date})},[s,o]);const[E,F]=r.useState(!1),z=async(a,p,q)=>{F(!0);try{const j=await C.post(`${_}/vendor/products/${q}/update`,a,{headers:{accept:"application/json","Content-Type":"multipart/form-data",Authorization:`Bearer ${c}`}});console.log(j.data),h.success(n.language==="en"?"The product has been updated":"تم تعديل المنتج بنجاح")}catch(j){console.log(j),h.error(n.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{F(!1),p(!1),y(b,f)}},D=()=>{const a=new FormData;a.append("title_en",t.title_en),a.append("title_ar",t.title_ar),a.append("category_id",t.category.value||s.category.id),a.append("quantity",t.quantity),a.append("price",t.price),a.append("start_date",t.start_date),a.append("images",t.image),z(a,g,o)},[$,I]=r.useState(!0),R=()=>{if(!(s!=null&&s.update_time))I(!0);else{const a=new Date(s.update_time),q=new Date-a,j=48*60*60*1e3;q>j?I(!0):I(!1)}};return r.useEffect(()=>{R()}),e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:n.language==="en"?"Edit Product":"تعديل المنتج"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{g(!1)},children:e.jsx(U,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center flex-1",children:k?e.jsx(Q,{productId:o,productData:s,getProductData:l,setIsLoading:F,getSellerProducts:y,setAllProducts:b,setLoadingAllProducts:f}):e.jsxs("div",{className:"space-y-6 grid grid-cols-2 gap-3 w-full flex-1",children:[e.jsxs("div",{className:"col-span-2",children:[s&&s.images.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:s.images.map((a,p)=>e.jsx("img",{src:`https://admin.horriizon.com/public/${a.path}`,alt:`Image ${p}`,className:"h-20 w-20 object-contain"}))}),e.jsx("div",{className:"mb-2 block"}),e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 w-full bg-green-500 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{S()},children:n.language==="en"?"Edit Images":"تعديل الصور "})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"title_en",value:n.language==="en"?"Product Name English ":"اسم المنتج بالانجليزية "})}),e.jsx(v,{id:"title_en",type:"text",value:t.title_en,onChange:a=>d({...t,title_en:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"title_ar",value:n.language==="en"?"Product Name Arabic ":"اسم المنتج بالعربية "})}),e.jsx(v,{id:"title_ar",type:"text",value:t.title_ar,onChange:a=>d({...t,title_ar:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"category",value:n.language==="en"?"Product Category ":"تصنيف المنتج "})}),e.jsx(J,{name:"category",id:"category",className:"w-full",options:n.language==="en"?N:w,placeholder:n.language==="en"?"Product Category":"تصنيف المنتج",isRtl:n.language==="ar",isSearchable:!0,value:t.category,onChange:a=>d({...t,category:a})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"quantity",value:n.language==="en"?"Quantity ":" الكمية"})}),e.jsx(v,{id:"quantity",type:"number",min:1,value:t.quantity,onChange:a=>d({...t,quantity:a.target.value})})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"Price",value:n.language==="en"?"Price ":" السعر"})}),e.jsx(v,{id:"Price",type:"number",min:1,value:t.price,disabled:!$,onChange:a=>d({...t,price:a.target.value})})]}),e.jsxs("div",{className:"col-span-2",children:[!$&&e.jsx("p",{className:"mb-4 text-red-400",children:n.language==="en"?"You cannot modify the price until 48 hours have passed since the last modification you made":"لا يمكنك تعديل السعر الا بعد مرور 48 ساعه علي اخر تعديل قمت به"}),e.jsx("div",{className:"mb-2 block",children:e.jsx(u,{htmlFor:"expiry-date",value:n.language==="en"?"Expiry date ":"تاريخ الانتهاء "})}),e.jsx(v,{id:"expiry-date",type:"date",value:t.start_date,onChange:a=>d({...t,start_date:a.target.value})})]})]})}),e.jsxs("div",{className:" bg-gray-50 px-4 py-3 shadow-md flex items-center gap-2",children:[e.jsx("button",{className:"bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white mx-2",onClick:D,disabled:E,children:E?e.jsx(O,{"aria-label":"loading...",color:"purple"}):n.language==="en"?"Save":"حفظ"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{g(!1)},children:n.language==="en"?"Cancel":"الغاء"})]})]})]})})};export{H as default};
