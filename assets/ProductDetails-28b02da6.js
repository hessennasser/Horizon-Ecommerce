import{p as g,u as m,r,A as y,j as e,a as h,b}from"./index-099e58b2.js";import{h as j}from"./index.esm-e7e633cd.js";import{d as f}from"./index.esm-291f8467.js";/* empty css              */import"./iconBase-5269505b.js";const $=()=>{const{id:l}=g(),{i18n:a}=m(),{addToCart:o,getProductsForCategory:N}=r.useContext(y),[i,c]=r.useState(1),[t,q]=r.useState({id:2,title:{en:"‎Mercury pressure device - red box - back to two‎",ar:"جهاز ضغط زئبقي - علبة حمراء - البك تو"},start_date:"2023-07-01",end_date:"2023-06-26",quantity:44,price:250,total_price:null,status:1,percentage:null,category_id:3,vendor_id:2,created_at:"2023-06-16T20:09:02.000000Z",updated_at:"2023-06-16T20:55:33.000000Z",category:{id:3,title:{en:"Pressure gauges",ar:"اجهزة قياس الضغط"},image:"categories/QZl0DvxR5ppek0rBw5hWV8LGRG2SAMAlWk0elXSk.jpg",created_at:"2023-06-16T20:08:19.000000Z",updated_at:"2023-06-16T20:08:19.000000Z"},images:[{id:2,path:"products/o84PkIKuqtN8hfL7BpGMWtOrg9uzqZ4H7D6yXK1L.jpg",product_id:2,created_at:"2023-06-16T20:09:02.000000Z",updated_at:"2023-06-16T20:09:02.000000Z"}]});r.useState([]);const d=async()=>{try{const s=await h(`${b}/productWithCategory/${l}`),{data:n}=s}catch(s){console.log(s)}},u=()=>{i!==t.quantity&&c(s=>s+1)},x=()=>{i!==1&&c(s=>s-1)},p=s=>{const n=parseInt(s.target.value);isNaN(n)||n<1||n>t.quantity||c(n)};return console.log(t),r.useEffect(()=>{d()},[l,t.category_id]),e.jsx("div",{className:"container py-10",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",children:[e.jsx("div",{className:"img-holder p-5 bg-gray-200 flex items-center justify-center rounded-lg shadow-md",children:e.jsx("img",{src:`https://admin.horriizon.com/images/${t.images[0].path}`,alt:a.language==="en"?t.title.en:t.title.ar})}),e.jsxs("div",{className:"product-details flex flex-col col-span-2 gap-5 px-5",children:[e.jsx("h2",{className:"text-xl font-bold",children:a.language==="en"?t.title.en:t.title.ar}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx("div",{className:"flex gap-3",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"text-[#FFC831]"}),"5.0 (10)"]})}),e.jsx("p",{children:a.language==="en"?`quantity in stock : ${t.quantity}`:`الكميه المتاحه : ${t.quantity}`})]}),e.jsx("h3",{className:"2xl font-bold",children:t.total_price||`${a.language==="ar"?`جنية ${t.price}`:`${t.price} EGY`} `||"0 EGY"}),e.jsx("p",{className:"text-xl text-secondColor",children:a.language==="en"?`in stock : ${t.quantity}`:`الكميه المتاحه : ${t.quantity}`}),e.jsxs("div",{className:"flex justify-between ",children:[e.jsx("p",{children:a.language==="en"?"in stock":"الكميه المتاحه"}),e.jsx("p",{children:t.quantity})]}),e.jsxs("div",{className:"flex justify-between text-gray-400 py-5 border-y",children:[e.jsx("p",{children:a.language==="en"?"Expiration date":"تاريخ الانتهاء"}),e.jsx("p",{className:"border w-3/5 text-center px-6 py-1",children:t.end_date})]}),e.jsxs("div",{className:"flex justify-between items-center text-gray-400 pb-5 border-b",children:[e.jsx("label",{className:"font-bold",htmlFor:"quantity",children:a.language==="en"?"Quantity":"الكمية"}),e.jsxs("div",{className:"quantity-control flex items-center",children:[e.jsx("button",{className:"quantity-button text-black bg-gray-300 mx-2 px-2 font-bold text-2xl",onClick:x,children:"-"}),e.jsx("input",{type:"number",name:"quantity",min:1,id:"quantity",className:"border-none focus:outline-none bg-transparent w-20 text-center",value:i,onChange:p}),e.jsx("button",{className:"quantity-button text-black bg-gray-300 mx-2 px-2 font-bold text-2xl",onClick:u,children:"+"}),e.jsx("button",{className:"text-secondColor text-sm border border-secondColor px-2 py-1",children:a.language==="en"?"Update Quantity":"تحديث الكميه"})]})]}),e.jsxs("div",{className:"actoins grid grid-cols-2 gap-3",children:[e.jsx("button",{className:"m-0 text-sm text-center px-5 bg-secondColor py-2 rounded-md text-white",type:"button",children:a.language==="en"?"Buy Now":"اشتري الان"}),e.jsxs("button",{onClick:()=>{o(l)},className:"m-0 text-sm text-center flex items-center justify-center gap-2 px-5 py-2 rounded-md border border-black text-black",type:"button",children:[e.jsx(f,{})," ",a.language==="en"?"Add to Cart":"أضف الي عربة التسوق"]})]})]})]})})};export{$ as default};
