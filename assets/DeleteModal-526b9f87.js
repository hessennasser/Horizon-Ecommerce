import{u as y,r as l,l as f,j as e,i as h,Q as n}from"./index-dacabe2e.js";import{M as t,a as c}from"./Tooltip-b3c3c2f6.js";import{m as j}from"./index.esm-6122411f.js";import"./floating-ui.dom-9d44cd4e.js";import"./index.esm-affce43c.js";const C=({deleteModal:a,setDeleteModal:s,productId:u,getSellerProducts:i,setAllProducts:d,setIsLoading:m})=>{const{i18n:o}=y(),x=JSON.parse(localStorage.getItem("sellerToken")),{mainRequest:g}=l.useContext(f),p=async()=>{try{const r=await g.post(`${h}/vendor/products/${u}/delete`,{token:x});n.success(o.language==="en"?"the product successfully delete":"تم حذف المنتج ")}catch(r){console.log(r),n.error(o.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره")}finally{s(!1),i(d,m),document.body.style.overflow="auto"}};return l.useEffect(()=>{document.body.style.overflow="auto"},[a]),e.jsxs(t,{className:"z-[10000] modal",show:a,size:"md",popup:!0,onClose:()=>{s(!1),document.body.style.overflow="auto"},children:[e.jsx(t.Header,{}),e.jsx(t.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(j,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:o.language==="en"?"Are you sure you want to delete this product?":"هل انت متاكد انك تريد حذف هذا المنتج؟"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(c,{color:"failure",onClick:p,children:o.language==="en"?"Yes, I'm sure":"نعم، انا متاكد"}),e.jsx(c,{color:"gray",onClick:()=>{document.body.style.overflow="auto",s(!1)},children:o.language==="en"?"No, cancel":"لا، الغاء"})]})]})})]})};export{C as default};
