import{$ as A,g as D,u as F,r as i,f as I,j as t,O as L,l as T,a5 as G,a6 as Q,a as b,b as x}from"./index-dc16dc37.js";/* empty css              */import{S as j,P as w,N,a as v}from"./pagination-33efbe51.js";import{A as U}from"./autoplay-67b381e6.js";import{S as Y}from"./SingleProductCard-a3d79688.js";const M=()=>{var f;const{id:n}=A(),C=D(),{i18n:s}=F(),{addToCart:g,mainRequest:k}=i.useContext(I),[l,c]=i.useState(1),[P,S]=i.useState({}),[$,u]=i.useState(!1),{images:d,title:a,price:m,quantity:r,start_date:q,total_price:B,fake_visitor:p,visitor:E,category_id:h}=P,O=async()=>{u(!0);try{const[e,y]=await Promise.all([b.post(`${x}/product?id=${n}`),b.post(`${x}/product_visitor`,{id:n})]),R=e.data.data;S(R)}catch(e){console.log(e)}finally{u(!1)}};i.useEffect(()=>{O()},[n]);const[o,V]=i.useState([]),_=async()=>{try{const e=await k(`${x}/productWithCategory/${h}`),{data:y}=e;V(y.data)}catch(e){console.log(e)}};return i.useEffect(()=>{_()},[h,n]),t.jsx(t.Fragment,{children:$?t.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[t.jsx("h2",{className:"text-xl font-bold",children:s.language==="en"?"Loading...":"جاري التحميل..."}),t.jsx(L,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})]}):t.jsxs("div",{className:"container py-10",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10",children:[d&&d.length>0&&t.jsx("div",{className:"img-holder p-5 col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-center rounded-lg",children:t.jsx(j,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,modules:[w,N],className:"mySwiper",style:{direction:"ltr"},children:d.map(e=>t.jsx(v,{children:t.jsx("img",{className:"w-full object-contain",src:`https://admin.horriizon.com/public/${e.path}`,alt:s.language==="en"?a==null?void 0:a.en:a==null?void 0:a.ar})},e.id))})}),t.jsxs("div",{className:"product-details grid grid-cols-1 gap-5 p-5 md:col-span-2 bg-gray-200 rounded-lg shadow-lg",children:[t.jsx("h2",{className:"text-2xl font-bold",children:s.language==="en"?a==null?void 0:a.en:a==null?void 0:a.ar}),t.jsx("div",{className:"flex flex-col gap-5 font-bold",children:t.jsxs("p",{className:"flex items-center gap-2",children:[t.jsx(T,{})," ",p||E," ",s.language==="en"?"Visitor":"زائر"]})}),t.jsx("h3",{className:"text-3xl font-bold text-secondColor",children:B||`${s.language==="ar"?`جنية ${m}`:`${m} EGY`} `||"0 EGY"}),r>1&&t.jsxs("p",{className:"text-2xl font-bold text-secondColor flex items-center",children:[s.language==="en"?"in stock :":"الكميه المتاحه :",t.jsx("span",{className:"text-black mx-2",children:r})]}),t.jsxs("div",{className:"flex justify-between text-gray-400 py-5 border-y",children:[t.jsx("p",{children:s.language==="en"?"Expiration date":"تاريخ الانتهاء"}),t.jsx("p",{className:"border w-3/5 text-center px-6 py-1",children:q})]}),t.jsx("div",{className:"actoins grid grid-cols-1 justify-items-center items-center gap-3",children:parseInt(r)>1?t.jsxs("div",{className:"quantity-control flex items-center",children:[t.jsxs("button",{onClick:()=>{g(n,l)},className:"m-0 text-sm text-center flex items-center justify-center gap-2 px-5 py-2 rounded-md border border-black text-black duration-200 hover:bg-secondColor hover:text-white",type:"button",children:[t.jsx(G,{})," ",s.language==="en"?"Add to Cart":"أضف الي عربة التسوق"]}),t.jsx("button",{className:"quantity-button py-2 px-3 text-xl font-medium",onClick:()=>{l!==1&&c(e=>e-1)},children:"-"}),t.jsx("input",{type:"number",name:"quantity",min:1,max:r,id:"quantity",className:"border-none focus:outline-none bg-transparent w-20 text-center",value:l,onChange:e=>{e.target.value>r||c(parseInt(e.target.value))}}),t.jsx("button",{className:"quantity-button py-2 px-3 text-xl font-medium",onClick:()=>{l!==r&&c(e=>e+1)},children:"+"}),t.jsxs("button",{onClick:()=>{g(n,l),setTimeout(()=>{C("/checkout")},3e3)},className:"m-0 text-sm text-center flex items-center justify-center gap-2 px-5 py-2 rounded-md border bg-secondColor text-white hover:brightness-125",type:"button",children:[t.jsx(Q,{})," ",s.language==="en"?"Buy Now":"إشتري الان"]})]}):t.jsx("button",{disabled:!0,"aria-label":"out of stock",className:" duration-200 flex items-center justify-center gap-2 bg-red-500 text-white text-sm p-2 rounded-md w-full",children:118n.language==="en"?"Out Of Stock":"غير متوفر"})})]})]}),o.length>1&&t.jsxs("div",{className:"swiper-container",children:[t.jsx("h2",{className:"text-2xl mb-5 text-secondColor font-bold",children:s.language==="en"?"Related Products":"منتجات مشابهه"}),t.jsx(j,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1,reverseDirection:!0},navigation:!0,modules:[w,N,U],className:"mySwiper",style:{direction:"ltr"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},440:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:5,spaceBetween:20}},children:(f=o==null?void 0:o.filter(e=>(e==null?void 0:e.id)!=n))==null?void 0:f.map(e=>t.jsx(v,{children:t.jsx(Y,{id:e==null?void 0:e.id,title:e==null?void 0:e.title,quantity:e.quantity,price:e==null?void 0:e.price,image:e==null?void 0:e.images[0].path,category:e.category,total_price:e.total_price,background:"white"})},e.id))})]})]})})};export{M as default};
