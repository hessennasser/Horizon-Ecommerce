import{u as b,r as d,e as C,j as e,ai as r,aj as N,ak as i,b as g,Q as s}from"./index-8e120a52.js";const T=({deleteModal:l,setDeleteModal:a,productId:n,getSellerProducts:m,setAllProducts:y,setIsLoading:f,cartItem:v,page:p})=>{const{i18n:t}=b(),c=JSON.parse(localStorage.getItem("sellerToken")),x=JSON.parse(localStorage.getItem("userToken")),{mainRequest:u,getTotalPriceInCart:h}=d.useContext(C),j=async()=>{try{const o=await u.post(`${g}/vendor/products/${n}/delete`,{token:c});s.success(t.language==="en"?"the product successfully delete":"تم حذف المنتج ")}catch(o){console.log(o),s.error(t.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره")}finally{a(!1),m(y,f),document.body.style.overflow="auto"}},k=async o=>{try{const w=await u.post(`${g}/cart/delete_product/${o}`,{token:x});s.success(t.language==="en"?"the product successfully delete from cart":"تم حذف المنتج من عربة التسوق"),h()}catch{s.error(t.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره")}finally{a(!1),p==="pay"&&window.location.reload()}};return d.useEffect(()=>{document.body.style.overflow="auto"},[l]),e.jsxs(r,{className:"z-[10000] modal",show:l,size:"md",popup:!0,onClose:()=>{a(!1),document.body.style.overflow="auto"},children:[e.jsx(r.Header,{}),e.jsx(r.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(N,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:t.language==="en"?"Are you sure you want to delete this product?":"هل انت متاكد انك تريد حذف هذا المنتج؟"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(i,{color:"failure",onClick:()=>{if(c){j(),console.log("deleted from dashboard");return}k(n),console.log("deleted from cart")},children:t.language==="en"?"Yes, I'm sure":"نعم، انا متاكد"}),e.jsx(i,{color:"gray",onClick:()=>{document.body.style.overflow="auto",a(!1)},children:t.language==="en"?"No, cancel":"لا، الغاء"})]})]})})]})};export{T as default};