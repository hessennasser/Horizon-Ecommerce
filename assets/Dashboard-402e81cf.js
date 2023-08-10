import{u as v,j as e,k as G,r as t,_ as w,l as A,m as H,O as K,L as W,i as X}from"./index-002dfc07.js";import{B as Z}from"./Breadcrumbs-1ebddfab.js";import{F as ee}from"./index.esm-7cafafd4.js";import"./Tooltip-58ce1c3c.js";import"./index.esm-af0c5918.js";import"./floating-ui.dom-9d44cd4e.js";const se=({id:n,openEditModal:l,openDeleteModal:i,openOrderModal:o,category:c,title:s,image:r,price:h,quantity:x,start_date:m,setDeleteProductId:p,setEditProductId:f,setOrderId:y})=>{var d,j;const{i18n:g}=v();return e.jsxs("div",{className:"grid gap-2 bg-white p-3 rounded-lg shadow-md",children:[e.jsx("div",{className:"img-holder  flex justify-center items-center",children:e.jsx("img",{className:"w-32 object-contain",src:`https://admin.horriizon.com/public/assets/${r}`,alt:g.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})}),e.jsxs("div",{className:"info grid gap-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Category :"}),e.jsx("p",{className:"font-bold",children:g.language==="en"?(d=c.title)==null?void 0:d.en:(j=c.title)==null?void 0:j.ar})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Product Name :"}),e.jsx("p",{className:"font-bold",children:g.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Price :"}),e.jsx("p",{className:"font-bold",children:h})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Quantity :"}),e.jsx("p",{className:"font-bold",children:x})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"End Date :"}),e.jsx("p",{className:"font-bold",children:m})]})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("button",{type:"button",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-blue-800 duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{o(n)},children:["Show Orders ",e.jsx(G,{})]}),e.jsxs("div",{className:"buttons-holder grid grid-cols-2 gap-2 items-end",children:[e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 bg-secondColor hover:bg-mainColor duration-200 py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{l(),f(n)},children:"Edit"}),e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md transition-all hover:bg-mainColor hover:text-white hover:border-white duration-200 hover:brightness-110",onClick:()=>{i(),p(n)},children:"Delete"})]})]})]})};const te=({setOrderModal:n,productOrders:l,isLoading:i})=>{console.log(l);const{i18n:o}=v(),c=s=>{const r=parseInt(s),x=(p=>{switch(p){case 0:return o.language==="en"?"Under Revision":"قيد المراجعة";case 1:return o.language==="en"?"Prepared":"قيد التحضير";case 2:return o.language==="en"?"At the Store":"قيد التخزين";case 3:return o.language==="en"?"At the Delivery Stage":"قيد مرحلة التوصيل";case 4:return o.language==="en"?"Delivered":"تم التوصيل";default:return""}})(r),m=r===0?"orange":r===1?"blue":r===2?"green":r===3?"purple":r===4?"teal":"black";return e.jsx("span",{style:{backgroundColor:m},className:"text-white p-2 rounded-xl shadow-lg",children:x})};return e.jsx("div",{className:"fixed z-[10000] inset-0 overflow-y-auto",children:e.jsxs("div",{className:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500 bg-opacity-90"})}),e.jsxs("div",{className:"modal-app relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full",children:[e.jsxs("div",{className:"sticky z-10 top-0 left-0 right-0 bg-white px-4 py-2 shadow-md flex justify-between",children:[e.jsx("h3",{className:"text-xl font-medium text-secondColor",children:o.language==="en"?"Orders":"اوردر"}),e.jsx("button",{className:"border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{n(!1)},children:e.jsx(ee,{})})]}),e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center",children:i?e.jsx("p",{className:"text-center",children:"Loading orders..."}):(l==null?void 0:l.length)>0?e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"Number"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"user ID"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"Order ID"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"Quantity"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"Total Price"}),e.jsx("th",{className:"border min-w-[120px] px-4 py-3",children:"Status"})]})}),e.jsx("tbody",{children:l==null?void 0:l.map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:r+1}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.user_id}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.id}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.quantity}),e.jsx("td",{className:"border min-w-[120px] px-4 py-3",children:s.total_price}),e.jsx("td",{className:"border min-w-[220px] px-4 py-3 flex justify-center items-center",children:c(s.status)})]},s.id))})]})}):e.jsx("p",{className:"text-center",children:"No orders found for this product."})})]})]})})},ae=t.lazy(()=>w(()=>import("./AddModal-a8dba973.js"),["assets/AddModal-a8dba973.js","assets/index-002dfc07.js","assets/index-7d6b17df.css","assets/Tooltip-58ce1c3c.js","assets/index.esm-af0c5918.js","assets/floating-ui.dom-9d44cd4e.js","assets/index.esm-7cafafd4.js","assets/react-select.esm-db852d79.js","assets/toConsumableArray-5ac788ac.js","assets/emotion-unitless.esm-475d8cc4.js"])),re=t.lazy(()=>w(()=>import("./EditModal-dfd41706.js"),["assets/EditModal-dfd41706.js","assets/index-002dfc07.js","assets/index-7d6b17df.css","assets/Tooltip-58ce1c3c.js","assets/index.esm-af0c5918.js","assets/floating-ui.dom-9d44cd4e.js","assets/index.esm-7cafafd4.js","assets/react-select.esm-db852d79.js","assets/toConsumableArray-5ac788ac.js","assets/emotion-unitless.esm-475d8cc4.js"])),ne=t.lazy(()=>w(()=>import("./DeleteModal-e1e8f814.js"),["assets/DeleteModal-e1e8f814.js","assets/index-002dfc07.js","assets/index-7d6b17df.css","assets/Tooltip-58ce1c3c.js","assets/index.esm-af0c5918.js","assets/floating-ui.dom-9d44cd4e.js","assets/index.esm-7cafafd4.js"])),me=()=>{const{i18n:n}=v(),{mainRequest:l}=t.useContext(A),i=localStorage.getItem("sellerLogged"),o=JSON.parse(localStorage.getItem("sellerToken")),c=H();if(!i){c("/seller-login");return}const[s,r]=t.useState(!1),[h,x]=t.useState(!1),[m,p]=t.useState(!1),[f,y]=t.useState(!1),[g,d]=t.useState([]),[j,D]=t.useState(null),[O,L]=t.useState(null),[C,T]=t.useState([]),[N,S]=t.useState(null),[_,u]=t.useState(!1),P=()=>{r(!0)},R=()=>{x(!0)},z=()=>{p(!0)},V=a=>{S(a),y(!0)},{getAllCategories:q,categories:I,getSellerProducts:b}=t.useContext(A),E=I.map(a=>({value:a.id,label:a.title.en})),M=I.map(a=>({value:a.id,label:a.title.ar})),B=async()=>{u(!0);try{const a=await l.post(`${X}/vendor/order/orderByProductId/${N}`,{token:o});T(a.data.data),console.log(a.data)}catch(a){console.log(a)}finally{u(!1)}};return t.useEffect(()=>{b(d,u),q()},[i]),t.useEffect(()=>{N&&B(),console.log(C)},[N]),e.jsx(e.Fragment,{children:_?e.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:n.language==="en"?"Loading...":"جاري التحميل..."}),e.jsx(K,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper"})]}):e.jsxs("div",{className:"container py-10",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between",children:[e.jsx(Z,{}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx(W,{to:"/orders",className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:n.language==="en"?"Show Orders":"الطلبات"}),e.jsx("button",{type:"button",onClick:P,className:"bg-secondColor hover:bg-mainColor duration-200 py-2 px-4 rounded-lg hover:brightness-110 text-white",children:n.language==="en"?"Add Product":"اضافة منتج جديد"})]})]}),g.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl::grid-cols-5 gap-5",children:g.map(a=>{const{id:k,category:F,title:$,images:Q,price:U,quantity:J,start_date:Y}=a;return e.jsx(se,{openEditModal:R,openDeleteModal:z,openOrderModal:V,setOrderId:S,id:k,title:$,image:Q[0].path,category:F,price:U,quantity:J,start_date:Y,setDeleteProductId:D,setEditProductId:L},k)})}):e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[40dvh]",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:n.language==="en"?"You have not added any products yet!":"انت لم تقم باضافة اي منتجات بعد!"}),e.jsx("button",{type:"button",onClick:P,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:n.language==="en"?"Add Product":"اضافة منتج جديد"})]}),s&&e.jsx(ae,{getSellerProducts:b,setAllProducts:d,setIsLoading:u,addModal:s,setAddModal:r,encategoriesOptions:E,arcategoriesOptions:M}),h&&e.jsx(re,{getSellerProducts:b,setAllProducts:d,setIsLoading:u,editModal:h,setEditModal:x,encategoriesOptions:E,arcategoriesOptions:M,productId:O}),m&&e.jsx(ne,{getSellerProducts:b,setAllProducts:d,setIsLoading:u,deleteModal:m,setDeleteModal:p,productId:j}),f&&e.jsx(te,{setOrderModal:y,productOrders:C,isLoading:_})]})})};export{me as default};