import{u as w,r as d,f as b,j as e,aj as r,ak as C,al as i,b as g,Q as o}from"./index-41a87d18.js";const I=({deleteModal:l,setDeleteModal:s,productId:n,getSellerProducts:m,setAllProducts:y,setIsLoading:f,cartItem:N})=>{const{i18n:t}=w(),c=JSON.parse(localStorage.getItem("sellerToken")),x=JSON.parse(localStorage.getItem("userToken")),{mainRequest:u,getTotalPriceInCart:p}=d.useContext(b),h=async()=>{try{const a=await u.post(`${g}/vendor/products/${n}/delete`,{token:c});o.success(t.language==="en"?"the product successfully delete":"تم حذف المنتج ")}catch(a){console.log(a),o.error(t.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره")}finally{s(!1),m(y,f),document.body.style.overflow="auto"}},j=async a=>{try{const k=await u.post(`${g}/cart/delete_product/${a}`,{token:x});o.success(t.language==="en"?"the product successfully delete from cart":"تم حذف المنتج من عربة التسوق"),p()}catch{o.error(t.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره")}finally{s(!1)}};return d.useEffect(()=>{document.body.style.overflow="auto"},[l]),e.jsxs(r,{className:"z-[10000] modal",show:l,size:"md",popup:!0,onClose:()=>{s(!1),document.body.style.overflow="auto"},children:[e.jsx(r.Header,{}),e.jsx(r.Body,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(C,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:t.language==="en"?"Are you sure you want to delete this product?":"هل انت متاكد انك تريد حذف هذا المنتج؟"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(i,{color:"failure",onClick:()=>{if(c){h(),console.log("deleted from dashboard");return}j(n),console.log("deleted from cart")},children:t.language==="en"?"Yes, I'm sure":"نعم، انا متاكد"}),e.jsx(i,{color:"gray",onClick:()=>{document.body.style.overflow="auto",s(!1)},children:t.language==="en"?"No, cancel":"لا، الغاء"})]})]})})]})};export{I as default};
