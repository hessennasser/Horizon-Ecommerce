import{u as P,j as e,n as w,r,A as I}from"./index-f1bf5b72.js";import{k}from"./index.esm-5065e961.js";/* empty css              */import"./iconBase-8d4922f9.js";const S=({title:o,price:l,quantity:x,image:n})=>{const{i18n:s}=P();return e.jsxs("div",{className:"flex justify-between gap-3 border border-gray-300 py-3 px-2 rounded-md shadow-sm",children:[e.jsx("img",{className:"w-20 h-20 object-cover",src:n,alt:s.language==="en"?o.en:o.ar}),e.jsxs("div",{className:"grid flex-1 gap-5",children:[e.jsx("h3",{className:"font-medium",children:s.language==="en"?o.en:o.ar}),e.jsxs("p",{className:"text-gray-500",children:[s.language==="en"?"Quantity : ":"الكمية : ",e.jsx("span",{children:1})]})]}),e.jsx("span",{className:"text-secondColor font-bold",children:`${s.language==="ar"?`جنية ${l}`:`${l} EGY`}`})]})},T=()=>{var g;const o=w(),[l,x]=r.useState([]),n=(g=JSON.parse(localStorage.getItem("userInfo")))==null?void 0:g.id,s=JSON.parse(localStorage.getItem("userToken")),c=localStorage.getItem("userLogged");if(!c){o("/customer-login");return}const[t,d]=r.useState({firstName:"",lastName:"",phoneNumber:"",selectedPaymentMethod:"",photo:null}),{getCartItems:j,getTotalPriceInCart:f,total:p}=r.useContext(I),u=r.useRef(null),i=a=>{d({...t,[a.target.name]:a.target.value})},m=a=>{d({...t,selectedPaymentMethod:a.target.value})},N=a=>{const h=a.target.files[0];d({...t,photo:h})},b=()=>{u.current.click()},y=()=>{d({...t,photo:null})};return console.log(t),r.useEffect(()=>{c&&s&&n&&(f(),j(s,x))},[c,n,s,p]),e.jsx("div",{className:"container py-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"grid gap-3 lg:sticky top-0 h-fit",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Personal Details"}),e.jsx("p",{className:"text-gray-500",children:"Complete personal details to continue the payment"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsx("input",{placeholder:"First Name",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"firstName",value:t.firstName,onChange:i}),e.jsx("input",{placeholder:"Last Name",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"lastName",value:t.lastName,onChange:i}),e.jsx("input",{placeholder:"Phone Number",className:"rounded-lg border-gray-300 shadow-md",type:"number",name:"phoneNumber",value:t.phoneNumber,onChange:i})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Payment Method"}),e.jsx("p",{className:"text-gray-500",children:"Select the number for payment of your item"})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"method-1",children:"01200000000"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"method-1",value:"100",checked:t.selectedPaymentMethod==="method-1",onChange:m})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"method-2",children:"01200000000"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"method-2",value:"101",checked:t.selectedPaymentMethod==="method-2",onChange:m})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"method-3",children:"01200000000"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"method-3",value:"102",checked:t.selectedPaymentMethod==="method-3",onChange:m})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Transfer data"}),e.jsx("p",{className:"text-gray-500",children:"Select the image for the conversion"})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"w-2/3 bg-[#F8F8FF] text-center border-dashed border-2 rounded-lg border-gray-300 p-4",children:[t.photo?e.jsxs("div",{children:[e.jsx("img",{src:URL.createObjectURL(t.photo),alt:"Transfer photo",className:"w-20 h-20 mx-auto mb-2"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor",children:"Photo Selected"}),e.jsxs("div",{className:"flex justify-center mt-2",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:b,children:"Update Photo"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:y,children:"Delete Photo"})]})]}):e.jsxs("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:[e.jsx(k,{className:"text-[4rem]"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:"Select Photo"})]}),e.jsx("input",{ref:u,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:N}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Supported formats: JPEG, PNG"})]})})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Current Order"}),e.jsx("p",{className:"text-gray-500",children:"The sum of all total payments for goods there"})]}),l.map(a=>{const{id:h,title:v,images:M,price:C}=a;return e.jsx(S,{title:v,price:C,image:"https://admin.horriizon.com/images/products/o84PkIKuqtN8hfL7BpGMWtOrg9uzqZ4H7D6yXK1L.jpg"},h)}),e.jsxs("div",{className:"flex justify-between items-center font-medium py-4 border-b border-dotted border-b-2",children:[e.jsx("h6",{children:"Subtotal"}),e.jsxs("p",{children:[p," EGY"]})]}),e.jsx("button",{className:"bg-secondColor text-white text-xl py-2 px-4 rounded-md",children:'Pay "total price"  EGY'})]})]})})};export{T as default};