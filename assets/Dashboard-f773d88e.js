import{u as C,j as e,r as t,_ as b,c as T,A as z,D as V}from"./index-7e5f059a.js";import{B}from"./Breadcrumbs-3b1e41f9.js";import{a as q}from"./index.esm-ee3778af.js";import"./Tooltip-882b8fe9.js";import"./index-88530db2.js";import"./index.esm-15916565.js";import"./iconBase-cfc4fc52.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-f39c121c.js";const F=({id:a,openEditModal:l,openDeleteModal:j,category:d,title:s,image:c,price:i,quantity:g,end_date:p,setDeleteProductId:m,setEditProductId:o})=>{var u,x;const{i18n:n}=C();return e.jsxs("div",{className:"grid gap-2 bg-white p-3 rounded-lg shadow-md",children:[e.jsx("div",{className:"img-holder  flex justify-center items-center",children:e.jsx("img",{className:"w-32 object-contain",src:`https://admin.horriizon.com/public/assets/${c}`,alt:n.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})}),e.jsxs("div",{className:"info grid gap-y-3",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Category :"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?(u=d.title)==null?void 0:u.en:(x=d.title)==null?void 0:x.ar})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Product Name :"}),e.jsx("p",{className:"font-bold",children:n.language==="en"?s==null?void 0:s.en:s==null?void 0:s.ar})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Price :"}),e.jsx("p",{className:"font-bold",children:i})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"Quantity :"}),e.jsx("p",{className:"font-bold",children:g})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("span",{children:"End Date :"}),e.jsx("p",{className:"font-bold",children:p})]})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("button",{type:"button",className:"flex items-center gap-2 text-secondColor text-sm",children:["Show Orders ",e.jsx(q,{})]}),e.jsxs("div",{className:"buttons-holder grid grid-cols-2 gap-2 items-end",children:[e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 bg-secondColor py-1 px-4 rounded-md hover:brightness-110 text-white",onClick:()=>{l(),o(a)},children:"Edit"}),e.jsx("button",{type:"button",className:"flex items-center justify-center gap-2 border border-secondColor text-secondColor py-1 px-4 rounded-md hover:brightness-110",onClick:()=>{j(),m(a)},children:"Delete"})]})]})]})};const J=t.lazy(()=>b(()=>import("./AddModal-76e5f546.js"),["assets/AddModal-76e5f546.js","assets/index-7e5f059a.js","assets/index-2b77c243.css","assets/Tooltip-882b8fe9.js","assets/index-88530db2.js","assets/index.esm-15916565.js","assets/iconBase-cfc4fc52.js","assets/floating-ui.dom.browser.min-b2afe59a.js","assets/index.esm-f39c121c.js","assets/react-select.esm-f7fccc00.js","assets/toConsumableArray-a7f4ebb6.js","assets/index.esm-d5f2e9cc.js"])),Q=t.lazy(()=>b(()=>import("./EditModal-65a01520.js"),["assets/EditModal-65a01520.js","assets/index-7e5f059a.js","assets/index-2b77c243.css","assets/Tooltip-882b8fe9.js","assets/index-88530db2.js","assets/index.esm-15916565.js","assets/iconBase-cfc4fc52.js","assets/floating-ui.dom.browser.min-b2afe59a.js","assets/index.esm-f39c121c.js","assets/react-select.esm-f7fccc00.js","assets/toConsumableArray-a7f4ebb6.js","assets/index.esm-d5f2e9cc.js"])),Y=t.lazy(()=>b(()=>import("./DeleteModal-c86c669b.js"),["assets/DeleteModal-c86c669b.js","assets/index-7e5f059a.js","assets/index-2b77c243.css","assets/Tooltip-882b8fe9.js","assets/index-88530db2.js","assets/index.esm-15916565.js","assets/iconBase-cfc4fc52.js","assets/floating-ui.dom.browser.min-b2afe59a.js","assets/index.esm-f39c121c.js"])),se=()=>{const{i18n:a}=C(),l=localStorage.getItem("sellerLogged");JSON.parse(localStorage.getItem("sellerToken"));const j=T();if(!l){j("/seller-login");return}const[d,s]=t.useState(!1),[c,i]=t.useState(!1),[g,p]=t.useState(!1),[m,o]=t.useState([]),[n,u]=t.useState(null),[x,A]=t.useState(null),[E,P]=t.useState(!1),f=()=>{s(!0)},w=()=>{i(!0)},S=()=>{p(!0)},{getAllCategories:D,categories:N,getSellerProducts:h}=t.useContext(z),y=N.map(r=>({value:r.id,label:r.title.en})),v=N.map(r=>({value:r.id,label:r.title.ar}));return t.useEffect(()=>{h(o,P),D()},[l]),e.jsx(e.Fragment,{children:E?e.jsxs("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:[e.jsx("h2",{className:"text-xl font-bold",children:a.language==="en"?"Loading...":"جاري التحميل..."}),e.jsx(V,{visible:!0,height:"160",width:"160",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})]}):e.jsxs("div",{className:"container py-10",children:[e.jsxs("div",{className:"mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between",children:[e.jsx(B,{}),e.jsx("button",{type:"button",onClick:f,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white",children:a.language==="en"?"Add Product":"اضافة منتج جديد"})]}),m.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl::grid-cols-5 gap-5",children:m.map(r=>{const{id:_,category:I,title:M,images:L,price:O,quantity:k,end_date:R}=r;return e.jsx(F,{openEditModal:w,openDeleteModal:S,id:_,title:M,image:L[0].path,category:I,price:O,quantity:k,end_date:R,setDeleteProductId:u,setEditProductId:A},_)})}):e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("h1",{className:"text-2xl font-bold text-red-600",children:a.language==="en"?"You have not added any products yet!":"انت لم تقم باضافة اي منتجات بعد!"}),e.jsx("button",{type:"button",onClick:f,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-white mt-5",children:a.language==="en"?"Add Product":"اضافة منتج جديد"})]}),d&&e.jsx(J,{getSellerProducts:h,setAllProducts:o,addModal:d,setAddModal:s,encategoriesOptions:y,arcategoriesOptions:v}),c&&e.jsx(Q,{getSellerProducts:h,setAllProducts:o,editModal:c,setEditModal:i,encategoriesOptions:y,arcategoriesOptions:v,productId:x}),g&&e.jsx(Y,{getSellerProducts:h,setAllProducts:o,deleteModal:g,setDeleteModal:p,productId:n})]})})};export{se as default};
