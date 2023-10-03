import{a2 as Q,g as T,u as U,r,f as z,j as e,O as W,L as H,l as J,a8 as K,a9 as M,aa as X,a as P,b as u}from"./index-9ac8252e.js";/* empty css              */import{S as F,P as E,N as $,a as q}from"./pagination-72d4b097.js";import{A as Z}from"./autoplay-10579cb3.js";import{S as ee}from"./SingleProductCard-03255bab.js";const re=()=>{var w,C,k;const{id:n}=Q(),B=T(),{i18n:s}=U(),{addToCart:p,mainRequest:D,chosenDelivery:h,handleDeliveryChange:j}=r.useContext(z),[o,x]=r.useState(1),[f,O]=r.useState({}),[V,y]=r.useState(!1);console.log(f);const{images:g,title:t,price:b,quantity:i,start_date:L,total_price:R,fake_visitor:v,visitor:A,category:c,category_id:m,stars:N=5,small_description:l}=f,G=async()=>{y(!0);try{const[a,S]=await Promise.all([P.post(`${u}/product?id=${n}`),P.post(`${u}/product_visitor`,{id:n})]),_=a.data.data;O(_)}catch(a){console.log(a)}finally{y(!1)}};r.useEffect(()=>{G()},[n]);const[d,I]=r.useState([]),Y=async()=>{try{const a=await D(`${u}/productWithCategory/${m}`),{data:S}=a;I(S.data)}catch(a){console.log(a)}};return r.useEffect(()=>{Y()},[m,n]),e.jsx(e.Fragment,{children:V?e.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:s.language==="en"?"Loading...":"جاري التحميل..."}),e.jsx(W,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})]}):e.jsxs("div",{className:"container py-10",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 mb-10",children:[g&&g.length>0&&e.jsx("div",{className:"img-holder p-5 col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-center rounded-lg",children:e.jsx(F,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,modules:[E,$],className:"mySwiper",style:{direction:"ltr"},children:g.map(a=>e.jsx(q,{children:e.jsx("img",{className:"w-full h-full max-h-[300px] object-contain",src:`https://admin.horriizon.com/public/${a.path}`,alt:s.language==="en"?t==null?void 0:t.en:t==null?void 0:t.ar})},a.id))})}),e.jsxs("div",{className:"product-details grid grid-cols-1 gap-5 p-5 rounded-lg",children:[e.jsx("h2",{className:"text-2xl font-bold text-secondColor",children:s.language==="en"?t==null?void 0:t.en:t==null?void 0:t.ar}),l&&e.jsx("h3",{className:"text-lg font-bold underline",children:s.language==="en"?l==null?void 0:l.en:l==null?void 0:l.ar}),e.jsx(H,{to:`/categories/${m}`,children:e.jsx("h3",{className:"text-lg font-bold underline",children:s.language==="en"?(w=c==null?void 0:c.title)==null?void 0:w.en:(C=c==null?void 0:c.title)==null?void 0:C.ar})}),e.jsxs("div",{className:"flex gap-5 items-center font-bold",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(J,{})," ",v||A," ",s.language==="en"?"Visitor":"زائر"]}),N&&e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(K,{className:"text-yellow-400"})," ",N]})]}),e.jsx("h3",{className:"text-3xl font-bold text-secondColor",children:R||`${s.language==="ar"?`جنية ${b}`:`${b} EGY`} `||"0 EGY"}),i>1&&e.jsxs("p",{className:"text-2xl font-bold text-secondColor flex items-center",children:[s.language==="en"?"in stock :":"الكميه المتاحه :",e.jsx("span",{className:"text-black mx-2",children:i})]}),e.jsxs("div",{className:"flex justify-between text-gray-400 py-5 border-y",children:[e.jsx("p",{children:s.language==="en"?"Expiration date":"تاريخ الانتهاء"}),e.jsx("p",{className:"border w-3/5 text-center px-6 py-1",children:L})]}),e.jsx("div",{className:"actions grid grid-cols-1 justify-items-center items-center gap-3",children:parseInt(i)>1?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full flex justify-between text-gray-400  border-b",children:[e.jsx("p",{children:s.language==="en"?"Quntaty":"الكمية"}),e.jsxs("div",{children:[e.jsx("button",{className:"quantity-button py-2 px-3 text-xl font-medium",onClick:()=>{o!==1&&x(a=>a-1)},children:"-"}),e.jsx("input",{type:"number",name:"quantity",min:1,max:i,id:"quantity",className:"border-none focus:outline-none bg-transparent w-20 text-center",value:o,onChange:a=>{a.target.value>i||x(parseInt(a.target.value))}}),e.jsx("button",{className:"quantity-button py-2 px-3 text-xl font-medium",onClick:()=>{o!==i&&x(a=>a+1)},children:"+"})]})]}),e.jsxs("div",{className:"quantity-control flex items-center gap-5",children:[e.jsxs("button",{onClick:()=>{p(n,o)},className:"m-0 text-sm text-center flex items-center justify-center gap-2 px-5 py-2 rounded-md border border-black text-black duration-200 hover:bg-secondColor hover:text-white",type:"button",children:[e.jsx(M,{})," ",s.language==="en"?"Add to Cart":"أضف الي عربة التسوق"]}),e.jsxs("button",{onClick:()=>{p(n,o),setTimeout(()=>{B("/checkout")},3e3)},className:"m-0 text-sm text-center flex items-center justify-center gap-2 px-5 py-2 rounded-md border bg-secondColor text-white hover:brightness-125",type:"button",children:[e.jsx(X,{})," ",s.language==="en"?"Buy Now":"إشتري الان"]})]})]}):e.jsx("button",{disabled:!0,"aria-label":"out of stock",className:" duration-200 flex items-center justify-center gap-2 bg-red-500 text-white text-sm p-2 rounded-md w-full",children:118n.language==="en"?"Out Of Stock":"غير متوفر"})})]}),e.jsxs("div",{className:"col-span-1 md:col-span-1 bg-white p-5 rounded-md h-fit",children:[e.jsx("h2",{className:"text-lg font-medium mb-5 text-center",children:s.language==="en"?"Choose Delivery package":"اختر طريقة التسليم"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-2 border-secondColor p-1 px-3 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{htmlFor:"package-1",className:"flex items-center gap-3",children:[e.jsx("input",{type:"radio",name:"delivery",id:"package-1",value:"Fast delivery",checked:h==="Fast delivery",onChange:j,className:"bg-mainColor"}),s.language==="en"?"Fast delivery":"توصيل سريع"]}),e.jsx("span",{children:s.language==="en"?"4 day":"4 أيام"})]}),e.jsx("span",{className:"text-secondColor",children:"40 EGY"})]}),e.jsxs("div",{className:"flex items-center justify-between border-2 border-secondColor p-1 px-3 rounded-lg",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("label",{htmlFor:"package-2",className:"flex items-center gap-3",children:[e.jsx("input",{type:"radio",name:"delivery",id:"package-2",value:"Standard delivery",checked:h==="Standard delivery",onChange:j,className:"bg-mainColor"}),s.language==="en"?"Standard delivery":"توصيل عادي"]}),e.jsx("span",{children:s.language==="en"?"7 day":"7 أيام"})]}),e.jsx("span",{className:"text-secondColor",children:"20 EGY"})]})]})]})]}),d.length>1&&e.jsxs("div",{className:"swiper-container",children:[e.jsx("h2",{className:"text-2xl mb-5 text-secondColor font-bold",children:s.language==="en"?"Related Products":"منتجات مشابهه"}),e.jsx(F,{slidesPerView:1,spaceBetween:30,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1,reverseDirection:!0},navigation:!0,modules:[E,$,Z],className:"mySwiper",style:{direction:"ltr"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},440:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:20},1200:{slidesPerView:5,spaceBetween:20}},children:(k=d==null?void 0:d.filter(a=>(a==null?void 0:a.id)!=n))==null?void 0:k.map(a=>e.jsx(q,{children:e.jsx(ee,{id:a==null?void 0:a.id,title:a==null?void 0:a.title,quantity:a.quantity,price:a==null?void 0:a.price,image:a==null?void 0:a.images[0].path,category:a.category,total_price:a.total_price,background:"white"})},a.id))})]})]})})};export{re as default};