import{u as C,j as e,c as H,L,F as K,r as t,_ as S,e as D,f as X,O as ee,B as se,b as te}from"./index-5edf5ab7.js";import{S as ae,P as ne,N as re,a as le}from"./pagination-e56feb1c.js";const oe=({id:l,openEditModal:d,openDeleteModal:c,openOrderModal:a,category:u,title:s,images:o,price:p,quantity:g,start_date:x,setDeleteProductId:h,setEditProductId:y,setOrderId:N})=>{var i,b;const{i18n:n}=C();return e.jsxs("div",{className:"bg-white p-3 rounded-lg shadow-md",children:[e.jsx("div",{className:"img-holder flex justify-center items-center",children:e.jsx(ae,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,modules:[ne,re],className:"mySwiper",style:{direction:"ltr"},children:o.map(j=>e.jsx(le,{children:e.jsx("img",{className:"w-32 h-32 mx-auto mb-5 object-contain",src:`https://admin.horriizon.com/public/${j.path}`,alt:n.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})},j.id))})}),e.jsxs("div",{className:"info grid gap-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Category :":"التصنيف"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?`${(i=u.title)==null?void 0:i.en.substr(0,10)}..`:`${(b=u.title)==null?void 0:b.ar.substr(0,10)}..`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Product Name :":"الاسم"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?`${s==null?void 0:s.en.substr(0,15)}...`:`${s==null?void 0:s.ar.substr(0,15)}...`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Price :":"السعر"}),e.jsx("p",{className:"font-bold",children:p})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Quantity :":"الكمية"}),e.jsx("p",{className:"font-bold",children:g})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"End Date :":"تاريخ الانتهاء"}),e.jsx("p",{className:"font-bold",children:x})]})]}),e.jsxs("div",{className:"grid gap-2 mt-2",children:[e.jsxs("button",{type:"button",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-blue-800 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{a(l)},children:[e.jsx(H,{}),n.language==="en"?"Show Orders":"الإطلاع علي الطلبات"]}),e.jsxs("div",{className:"buttons-holder grid grid-cols-2 gap-2 items-end",children:[e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md transition-all hover:bg-mainColor hover:text-white hover:border-white duration-200 hover:brightness-110",onClick:()=>{d(),y(l)},children:n.language==="en"?"Edit":"تعديل"}),e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md transition-all hover:bg-mainColor hover:text-white hover:border-white duration-200 hover:brightness-110",onClick:()=>{c(),h(l)},children:n.language==="en"?"Delete":"حذف"})]}),e.jsx(L,{to:"/packages",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-blue-800 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",children:n.language==="en"?"Sell Faster 🚀":"بيع اسرع 🚀"})]})]})};const de=({setOrderModal:l,productOrders:d,isLoading:c})=>{console.log(d);const{i18n:a}=C(),u=s=>{const o=parseInt(s),g=(h=>{switch(h){case 0:return a.language==="en"?"Prepared":"قيد التحضير";case 1:return a.language==="en"?"Prepared":"قيد التحضير";case 2:return a.language==="en"?"At the Store":"قيد التخزين";case 3:return a.language==="en"?"At the Delivery Stage":"قيد مرحلة التوصيل";case 4:return a.language==="en"?"Delivered":"تم التوصيل";default:return""}})(o),x=o===0||o===1?"blue":o===2?"green":o===3?"purple":o===4?"teal":"black";return e.jsx("span",{style:{backgroundColor:x},className:"text-white p-2 rounded-xl shadow-lg",children:g})};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:a.language==="en"?"Orders":"اوردر"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{l(!1)},children:e.jsx(K,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:c?e.jsx("p",{className:"text-center",children:"Loading orders..."}):(d==null?void 0:d.length)>0?e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Number":"ترتيب"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"user ID":"معرف المستخدم"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Order ID":"رقم الطلب"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Quantity":"الكمية"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Total Price":"السعر الكلي"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Status":"الحالة"})]})}),e.jsx("tbody",{children:d==null?void 0:d.map((s,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:o+1}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.user_id}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.id}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.quantity}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.total_price}),e.jsx("td",{className:"border min-w-[220px] px-4 py-3 flex justify-center items-center",children:u(s.status)})]},s.id))})]})}):e.jsx("p",{className:"text-center",children:"No orders found for this product."})})]})]})})},ie=t.lazy(()=>S(()=>import("./AddModal-125e8c10.js"),["assets/AddModal-125e8c10.js","assets/index-5edf5ab7.js","assets/index-f22f14ac.css","assets/react-select.esm-11196136.js","assets/toConsumableArray-51e2cfaf.js","assets/emotion-unitless.esm-475d8cc4.js"])),ce=t.lazy(()=>S(()=>import("./EditModal-57f7f21f.js"),["assets/EditModal-57f7f21f.js","assets/index-5edf5ab7.js","assets/index-f22f14ac.css","assets/react-select.esm-11196136.js","assets/toConsumableArray-51e2cfaf.js","assets/emotion-unitless.esm-475d8cc4.js"])),ue=t.lazy(()=>S(()=>import("./DeleteModal-a600291e.js"),["assets/DeleteModal-a600291e.js","assets/index-5edf5ab7.js","assets/index-f22f14ac.css"])),he=()=>{const{i18n:l}=C(),{mainRequest:d}=t.useContext(D),c=localStorage.getItem("sellerLogged"),a=JSON.parse(localStorage.getItem("sellerToken")),u=X();if(!c){u("/seller-login");return}const[s,o]=t.useState(!1),[p,g]=t.useState(!1),[x,h]=t.useState(!1),[y,N]=t.useState(!1),[n,i]=t.useState([]),[b,j]=t.useState(null),[O,T]=t.useState(null),[P,$]=t.useState([]),[v,I]=t.useState(null),[_,m]=t.useState(!1),[z,R]=t.useState(!1),w=()=>{o(!0)},V=()=>{g(!0)},B=()=>{h(!0)},q=r=>{I(r),N(!0)},{getAllCategories:F,categories:E,getSellerProducts:f}=t.useContext(D),k=E.map(r=>({value:r.id,label:r.title.en})),A=E.map(r=>({value:r.id,label:r.title.ar})),Q=async()=>{m(!0);try{const r=await d.post(`${te}/vendor/order/orderByProductId/${v}`,{token:a});$(r.data.data),console.log(r.data)}catch(r){console.log(r),R(r)}finally{m(!1)}};return t.useEffect(()=>{f(i,m),F()},[c]),t.useEffect(()=>{v&&Q(),console.log(P)},[v]),_?e.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:l.language==="en"?"Loading...":"جاري التحميل..."}),e.jsx(ee,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})]}):z?e.jsx("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[40dvh]",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:l.language==="en"?"There Is An Error While Loading ZYour Products!":"يوجد خطأ ما اثناء تحميل منتجاتك، برجاء إعادة المحاوله مرة اخرى!!"}),e.jsx("button",{type:"button",onClick:w,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]})}):e.jsxs("div",{className:"container py-10",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between",children:[e.jsx(se,{}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx(L,{to:"/orders",className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:l.language==="en"?"Show Orders":"الطلبات"}),e.jsx("button",{type:"button",onClick:w,className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]})]}),n.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl::grid-cols-5 gap-5",children:n.map(r=>{const{id:M,category:Y,title:J,images:U,price:W,quantity:Z,start_date:G}=r;return e.jsx(oe,{openEditModal:V,openDeleteModal:B,openOrderModal:q,setOrderId:I,id:M,title:J,images:U,category:Y,price:W,quantity:Z,start_date:G,setDeleteProductId:j,setEditProductId:T},M)})}):e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[40dvh]",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:l.language==="en"?"You have not added any products yet!":"انت لم تقم باضافة اي منتجات بعد!"}),e.jsx("button",{type:"button",onClick:w,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]}),s&&e.jsx(ie,{getSellerProducts:f,setAllProducts:i,setIsLoading:m,addModal:s,setAddModal:o,encategoriesOptions:k,arcategoriesOptions:A}),p&&e.jsx(ce,{getSellerProducts:f,setAllProducts:i,setIsLoading:m,editModal:p,setEditModal:g,encategoriesOptions:k,arcategoriesOptions:A,productId:O}),x&&e.jsx(ue,{getSellerProducts:f,setAllProducts:i,setIsLoading:m,deleteModal:x,setDeleteModal:h,productId:b}),y&&e.jsx(de,{setOrderModal:N,productOrders:P,isLoading:_})]})};export{he as default};
