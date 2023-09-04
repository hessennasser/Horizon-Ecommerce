import{u as P,j as e,c as X,L as T,F as ee,r as t,_ as I,f as O,g as se,O as te,B as ae,b as ne}from"./index-93c60b67.js";import{S as re,P as le,N as oe,a as de}from"./pagination-2a8bba32.js";const ie=({id:l,openEditModal:d,openDeleteModal:i,openOrderModal:a,category:c,title:s,images:o,price:m,quantity:g,start_date:u,setDeleteProductId:x,setEditProductId:w,fake_visitor:p,visitor:j,setOrderId:b})=>{var f,y;const{i18n:n}=P();return e.jsxs("div",{className:"bg-white p-3 rounded-lg shadow-md",children:[e.jsx("div",{className:"img-holder flex justify-center items-center",children:e.jsx(re,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,modules:[le,oe],className:"mySwiper",style:{direction:"ltr"},children:o.map(v=>e.jsx(de,{children:e.jsx("img",{className:"w-32 h-32 mx-auto mb-5 object-contain",src:`https://admin.horriizon.com/public/${v.path}`,alt:n.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})},v.id))})}),e.jsxs("div",{className:"info grid gap-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Category :":"التصنيف:"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?`${(f=c.title)==null?void 0:f.en.substr(0,10)}..`:`${(y=c.title)==null?void 0:y.ar.substr(0,10)}..`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Product Name :":"الاسم:"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?`${s==null?void 0:s.en.substr(0,15)}...`:`${s==null?void 0:s.ar.substr(0,15)}...`})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Price :":"السعر:"}),e.jsx("p",{className:"font-bold",children:m})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Quantity :":"الكمية:"}),e.jsx("p",{className:"font-bold",children:g})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"End Date :":"تاريخ الانتهاء:"}),e.jsx("p",{className:"font-bold",children:u})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:n.language==="en"?"Visits":"الزيارات:"}),e.jsx("p",{className:"font-bold",children:p||j||0})]})]}),e.jsxs("div",{className:"grid gap-2 mt-2",children:[e.jsxs("button",{type:"button",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-blue-800 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{a(l)},children:[e.jsx(X,{}),n.language==="en"?"Show Orders":"الإطلاع علي الطلبات"]}),e.jsxs("div",{className:"buttons-holder grid grid-cols-2 gap-2 items-end",children:[e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md transition-all hover:bg-mainColor hover:text-white hover:border-white duration-200 hover:brightness-110",onClick:()=>{d(),w(l)},children:n.language==="en"?"Edit":"تعديل"}),e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md transition-all hover:bg-mainColor hover:text-white hover:border-white duration-200 hover:brightness-110",onClick:()=>{i(),x(l)},children:n.language==="en"?"Delete":"حذف"})]}),e.jsx(T,{to:"/packages",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-blue-800 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",children:n.language==="en"?"Sell Faster 🚀":"بيع اسرع 🚀"})]})]})};const ce=({setOrderModal:l,productOrders:d,isLoading:i})=>{console.log(d);const{i18n:a}=P(),c=s=>{const o=parseInt(s),g=(x=>{switch(x){case 0:return a.language==="en"?"Prepared":"قيد التحضير";case 1:return a.language==="en"?"Prepared":"قيد التحضير";case 2:return a.language==="en"?"At the Store":"قيد التخزين";case 3:return a.language==="en"?"At the Delivery Stage":"قيد مرحلة التوصيل";case 4:return a.language==="en"?"Delivered":"تم التوصيل";default:return""}})(o),u=o===0||o===1?"blue":o===2?"green":o===3?"purple":o===4?"teal":"black";return e.jsx("span",{style:{backgroundColor:u},className:"text-white p-2 rounded-xl shadow-lg",children:g})};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:a.language==="en"?"Orders":"اوردر"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{l(!1)},children:e.jsx(ee,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:i?e.jsx("p",{className:"text-center",children:"Loading orders..."}):(d==null?void 0:d.length)>0?e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Number":"ترتيب"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Order ID":"رقم الطلب"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Quantity":"الكمية"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Total Price":"السعر الكلي"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:a.language==="en"?"Status":"الحالة"})]})}),e.jsx("tbody",{children:d==null?void 0:d.map((s,o)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:o+1}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.id}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.quantity}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.total_price}),e.jsx("td",{className:"border min-w-[220px] px-4 py-3 flex justify-center items-center",children:c(s.product.status)})]},s.id))})]})}):e.jsx("p",{className:"text-center",children:"No orders found for this product."})})]})]})})},ge=t.lazy(()=>I(()=>import("./AddModal-c5b8af62.js"),["assets/AddModal-c5b8af62.js","assets/index-93c60b67.js","assets/index-71552e69.css"])),ue=t.lazy(()=>I(()=>import("./EditModal-9f2c582f.js"),["assets/EditModal-9f2c582f.js","assets/index-93c60b67.js","assets/index-71552e69.css"])),xe=t.lazy(()=>I(()=>import("./DeleteModal-da86a6f3.js"),["assets/DeleteModal-da86a6f3.js","assets/index-93c60b67.js","assets/index-71552e69.css"])),pe=()=>{const{i18n:l}=P(),{mainRequest:d}=t.useContext(O),i=localStorage.getItem("sellerLogged"),a=JSON.parse(localStorage.getItem("sellerToken")),c=se();if(!i){c("/seller-login");return}const[s,o]=t.useState(!1),[m,g]=t.useState(!1),[u,x]=t.useState(!1),[w,p]=t.useState(!1),[j,b]=t.useState([]),[n,f]=t.useState(null),[y,v]=t.useState(null),[_,$]=t.useState([]),[C,E]=t.useState(null),[k,h]=t.useState(!1),[z,R]=t.useState(!1),S=()=>{o(!0)},V=()=>{g(!0)},B=()=>{x(!0)},q=r=>{E(r),p(!0)},{getAllCategories:F,categories:A,getSellerProducts:N}=t.useContext(O),M=A.map(r=>({value:r.id,label:r.title.en})),D=A.map(r=>({value:r.id,label:r.title.ar})),Q=async()=>{h(!0);try{const r=await d.post(`${ne}/vendor/order/orderByProductId/${C}`,{token:a});$(r.data.data),console.log(r.data)}catch(r){console.log(r),R(r)}finally{h(!1)}};return t.useEffect(()=>{N(b,h),F()},[i]),t.useEffect(()=>{C&&Q(),console.log(_)},[C]),k?e.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:l.language==="en"?"Loading...":"جاري التحميل..."}),e.jsx(te,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})]}):z?e.jsx("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[40dvh]",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:l.language==="en"?"There Is An Error While Loading ZYour Products!":"يوجد خطأ ما اثناء تحميل منتجاتك، برجاء إعادة المحاوله مرة اخرى!!"}),e.jsx("button",{type:"button",onClick:S,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]})}):e.jsxs("div",{className:"container py-10",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between",children:[e.jsx(ae,{}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx(T,{to:"/orders",className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:l.language==="en"?"Show Orders":"الطلبات"}),e.jsx("button",{type:"button",onClick:S,className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]})]}),j.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl::grid-cols-5 gap-5",children:j.map(r=>{const{id:L,category:Y,title:J,images:U,price:W,quantity:Z,start_date:G,fake_visitor:H,visitor:K}=r;return e.jsx(ie,{fake_visitor:H,visitor:K,openEditModal:V,openDeleteModal:B,openOrderModal:q,setOrderId:E,id:L,title:J,images:U,category:Y,price:W,quantity:Z,start_date:G,setDeleteProductId:f,setEditProductId:v},L)})}):e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[40dvh]",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:l.language==="en"?"You have not added any products yet!":"انت لم تقم باضافة اي منتجات بعد!"}),e.jsx("button",{type:"button",onClick:S,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:l.language==="en"?"Add Product":"اضافة منتج جديد"})]}),s&&e.jsx(ge,{getSellerProducts:N,setAllProducts:b,setIsLoading:h,addModal:s,setAddModal:o,encategoriesOptions:M,arcategoriesOptions:D}),m&&e.jsx(ue,{getSellerProducts:N,setAllProducts:b,setIsLoading:h,editModal:m,setEditModal:g,encategoriesOptions:M,arcategoriesOptions:D,productId:y}),u&&e.jsx(xe,{getSellerProducts:N,setAllProducts:b,setIsLoading:h,deleteModal:u,setDeleteModal:x,productId:n}),w&&e.jsx(ce,{setOrderModal:p,productOrders:_,isLoading:k})]})};export{pe as default};
