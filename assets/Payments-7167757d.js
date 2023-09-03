import{r as n,e as w,u as T,f as A,j as t,B as m,b as C}from"./index-5edf5ab7.js";import{L as I}from"./Loading-d4c5511c.js";import{Q as O}from"./index.es-fe4b9f11.js";import"./emotion-unitless.esm-475d8cc4.js";const R=()=>{const{mainRequest:p}=n.useContext(w),{i18n:s}=T(),[l,x]=n.useState([]),[b,u]=n.useState(!1),[f,o]=n.useState([]),c=localStorage.getItem("userLogged"),i=JSON.parse(localStorage.getItem("userToken")),h=A();if(!c)return h("/customer-login"),null;const y=async()=>{u(!0);try{const e=await p.post(`${C}/userOrder`,{token:i});x(e.data.data),o(e.data.data),console.log(e)}catch(e){console.log(e)}finally{u(!1)}};n.useEffect(()=>{y(),console.log(l)},[c,i]);const d=e=>{const r=parseInt(e),a=(N=>{switch(N){case 0:return s.language==="en"?"Prepared":"قيد التحضير";case 1:return s.language==="en"?"Prepared":"قيد التحضير";case 2:return s.language==="en"?"At the Store":"قيد التخزين";case 3:return s.language==="en"?"At the Delivery Stage":"قيد مرحلة التوصيل";case 4:return s.language==="en"?"Delivered":"تم التوصيل";default:return""}})(r),D=r===0||r===1?"blue":r===2?"green":r===3?"purple":r===4?"teal":"black";return t.jsx("span",{style:{backgroundColor:D},className:"text-white p-2 rounded-xl shadow-lg",children:a})},S=[{name:"Order ID",selector:"id",sortable:!0},{name:"Product ID",selector:"product_id",sortable:!0},{name:"Product Name",selector:"product.title.en",sortable:!0},{name:"Product Price",selector:"product.price",sortable:!0},{name:"Quantity",selector:"quantity",sortable:!0},{name:"Total Price",selector:"total_price",sortable:!0},{name:"Date",selector:"date",sortable:!0},{name:s.language==="en"?"Status":"الحالة",selector:"status",sortable:!0,cell:e=>d(e.status)}],j=[{name:"رقم الطلب",selector:"id",sortable:!0},{name:"رقم المنتج",selector:"product_id",sortable:!0},{name:"اسم المنتج",selector:"product.title.ar",sortable:!0},{name:"سعر المنتج",selector:"product.price",sortable:!0},{name:"الكمية",selector:"quantity",sortable:!0},{name:"السعر الكلي",selector:"total_price",sortable:!0},{name:"التاريخ",selector:"date",sortable:!0},{name:s.language==="en"?"Status":"الحالة",selector:"status",sortable:!0,cell:e=>d(e.status)}],P=s.language==="en"?S:j,v=e=>{const r=e.target.value;if(r.trim()==="")o(allOrders);else{const g=l.filter(a=>a.id.toString().includes(r)||a.product_id.toString().includes(r)||a.product.title.en.toString().includes(r)||a.product.title.ar.toString().includes(r));o(g)}};return b?t.jsx(I,{}):t.jsx("div",{className:"container py-10 min-h-[40dvh]",children:(l==null?void 0:l.length)>0?t.jsxs("div",{children:[t.jsx("div",{className:"mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between",children:t.jsx(m,{})}),t.jsx("input",{type:"text",placeholder:"Search by Order ID, Product ID Or Product Title ...",onChange:v,className:"px-4 py-2 w-full mb-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"}),t.jsx(O,{columns:P,data:f,className:"order-table"})]}):t.jsxs(t.Fragment,{children:[t.jsx(m,{}),t.jsx("div",{className:"flex flex-col items-center justify-center",children:t.jsx("h1",{className:"text-2xl font-bold text-red-600",children:s.language==="en"?"You Don't Have Any Orders Yet!":"ليس لديك اي طلبات بعد"})})]})})};export{R as default};