import{u as L,j as e,m as W,r as l,l as X,O as Z,Q as x,i as ee}from"./index-002dfc07.js";import{k as ae}from"./index.esm-af0c5918.js";import{S as te}from"./react-select.esm-db852d79.js";import"./toConsumableArray-5ac788ac.js";import"./emotion-unitless.esm-475d8cc4.js";import"./floating-ui.dom-9d44cd4e.js";const se=({title:u,price:a,productTotalPrice:f,quantity:v,image:d})=>{const{i18n:o}=L();return e.jsxs("div",{className:"flex justify-between gap-3 border border-gray-300 py-3 px-2 rounded-md shadow-sm",children:[e.jsx("img",{className:"w-20 h-20 object-cover",src:d,alt:o.language==="en"?u.en:u.ar}),e.jsxs("div",{className:"grid flex-1 gap-5",children:[e.jsx("h3",{className:"font-medium",children:o.language==="en"?u.en:u.ar}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("p",{className:"text-gray-500",children:[o.language==="en"?"Quantity : ":"الكمية : ",e.jsx("span",{children:v})]}),e.jsx("span",{children:"*"}),e.jsxs("p",{className:"text-gray-500",children:[o.language==="en"?"Price : ":"السعر : ",e.jsx("span",{children:a})]})]})]}),e.jsx("span",{className:"text-secondColor font-bold",children:`${o.language==="ar"?`جنية ${f}`:`${f} EGY`}`})]})},ie=()=>{const u=W(),{i18n:a}=L(),[f,v]=l.useState([]),d=JSON.parse(localStorage.getItem("userToken")),o=localStorage.getItem("userLogged"),[c,k]=l.useState({}),[h,q]=l.useState(c==null?void 0:c.name),[y,E]=l.useState(c==null?void 0:c.email),[b,M]=l.useState(c==null?void 0:c.phone);if(!o)return u("/customer-login"),null;const[N,U]=l.useState(""),[s,j]=l.useState({firstName:h,lastName:h,phoneNumber:b,email:y,address:"",apartment:"",floor:"",street:"",building:"",selectedPaymentMethod:"vodafone-cash",notes:""}),[C,F]=l.useState(null),[P,$]=l.useState(null),{getCartItems:O,getTotalPriceInCart:_,total:w,governorates:D,getGovernorates:Y,mainRequest:z,setCartItems:A,getUserInfo:I}=l.useContext(X),G=l.useRef(null),i=r=>{j({...s,[r.target.name]:r.target.value})},R=r=>{j({...s,selectedPaymentMethod:r.target.value})},J=r=>{const t=r.target.files[0];F(t)},Q=()=>{G.current.click()},B=()=>{F(null)},[H,p]=l.useState(!1),T=async r=>{if(r.preventDefault(),p(!0),s.selectedPaymentMethod!=="cash-on-delivery"&&!P){x.info(a.language==="en"?"Please enter your cash number":"من فضلك أدخل رقم المحفظة الالكترونية"),p(!1);return}const t={...s,governorate_id:N.value,city:N.label,token:d};console.log(N);const n=new FormData;if(n.append("token",t.token),n.append("first_name",t.firstName),n.append("last_name",t.lastName),n.append("phone",t.phoneNumber),n.append("email",t.email),n.append("address",t.address),n.append("apartment",t.apartment),n.append("floor",t.floor),n.append("street",t.street),n.append("building",t.building),n.append("governorate_id",t.governorate_id),n.append("city",t.city),n.append("notes",t.notes),n.append("payment_method",t.selectedPaymentMethod==="cash-on-delivery"?0:1),n.append("vodafone_cash_number",P),n.append("photo",C),console.log(N),!Object.values(t).every(m=>m)&&t.selectedPaymentMethod!=="cash-on-delivery"){x.info(a.language==="en"?"Please fill all fields":"من فضلك ادخل جميع البيانات"),p(!1);return}const S=["vodafone_cash_number","photo"];if(t.selectedPaymentMethod==="cash-on-delivery"&&!Object.entries(t).filter(([m,g])=>!S.includes(m)).every(([m,g])=>g)){x.info(a.language==="en"?"Please fill all fields":"من فضلك ادخل جميع البيانات"),p(!1);return}try{const m=await z.post(`${ee}/payment`,n);x.success(a.language==="en"?"Your Oreder Succsesfly Done":"تم ارسال طلبك بنجاح"),u("/")}catch(m){console.log(m),x.error(a.language==="en"?"Something went wrong":"حدث خطأ ما, من فضلك حاول مرة اخري")}finally{p(!1),_(),O(d,A)}};l.useEffect(()=>{o&&d&&(_(),O(d,v))},[o,d,w]),l.useEffect(()=>{o&&I(d,k,q,E,M),j({...s,firstName:h,lastName:h,phoneNumber:b,email:y}),console.log(c),console.log(s)},[o,d]),l.useEffect(()=>{o&&I(d,k,q,E,M)},[o,d]),l.useEffect(()=>{j({...s,firstName:h,lastName:h,phoneNumber:b,email:y})},[h,y,b]);const K=D.map(r=>({value:r.id,label:r.title.en})),V=D.map(r=>({value:r.id,label:r.title.ar}));return l.useEffect(()=>{Y()},[]),e.jsxs("div",{className:"container py-10",children:[H&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-[#F4F4F4] bg-opagovernorate_id-60 z-50",children:e.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(Z,{visible:!0,height:"260",width:"260",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper"})})}),e.jsxs("form",{onSubmit:T,className:"grid grid-cols-1 lg:grid-cols-2 gap-6 relative",children:[e.jsxs("div",{className:"grid gap-3 lg:sticky top-0 h-fit",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Payment Method"}),e.jsx("p",{className:"text-gray-500",children:"Select the number for payment of your item"})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"vodafone-cash",children:a.language==="en"?"vodafone Cash":"فودافون كاش"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"vodafone-cash",value:"vodafone-cash",checked:s.selectedPaymentMethod==="vodafone-cash",onChange:R})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"cash-on-delivery",children:a.language==="en"?"Cash on Delivery":"الدفع عند الاستلام"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"cash-on-delivery",value:"cash-on-delivery",checked:s.selectedPaymentMethod==="cash-on-delivery",onChange:R})]})]}),s.selectedPaymentMethod!=="cash-on-delivery"&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Transfer data"}),e.jsx("p",{className:"text-gray-500",children:"Select the image for the conversion"})]}),e.jsxs("div",{className:"flex items-center flex-col gap-2 justify-center",children:[e.jsxs("div",{className:"w-full flex gap-2 flex-col",children:[e.jsx("label",{htmlFor:"cashNumber",children:"Enter Your Cash Number"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم المفظة الالكترونية":"Cash Number",className:"rounded-lg border-gray-300 shadow-md",type:"tel",id:"cashNumber",name:"cashNumber",value:P,onChange:r=>{$(r.target.value)},required:!0})]}),e.jsxs("div",{className:"w-2/3 bg-[#F8F8FF] text-center border-dashed border-2 rounded-lg border-gray-300 p-4",children:[C?e.jsxs("div",{children:[e.jsx("img",{src:URL.createObjectURL(C),alt:"Transfer photo",className:"w-20 h-20 mx-auto mb-2"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor",children:"Photo Selected"}),e.jsxs("div",{className:"flex justify-center mt-2",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:Q,children:"Update Photo"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:B,children:"Delete Photo"})]})]}):e.jsxs("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:[e.jsx(ae,{className:"text-[4rem]"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:"Select Photo"})]}),e.jsx("input",{ref:G,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:J,required:s.selectedPaymentMethod!=="cash-on-delivery"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"Supported formats: JPEG, PNG"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Personal Details"}),e.jsx("p",{className:"text-gray-500",children:"Complete personal details to continue the payment"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsx("input",{placeholder:a.language==="en"?"First Name":"الاسم الاول",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"firstName",value:s.firstName,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Last Name":"الاسم الاخير",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"lastName",value:s.lastName,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Phone Number":"رقم الهاتف",className:"rounded-lg border-gray-300 shadow-md",type:"tel",name:"phoneNumber",value:s.phoneNumber,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Email":"البريد الالكتروني",className:"rounded-lg border-gray-300 shadow-md",type:"email",name:"email",value:s.email,onChange:i,required:!0}),e.jsx(te,{name:"governorate",id:"governorate",className:"rounded-lg border-gray-300 shadow-md col-span-2",onChange:r=>U(r),options:a.language==="en"?K:V,placeholder:a.language==="ar"?"ادخل محافظتك":"enter your Governorate",isRtl:a.language==="ar",isSearchable:!0,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"عنوانك":"Address",className:"rounded-lg border-gray-300 shadow-md col-span-2",type:"text",name:"address",value:s.address,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشارع":"Street",className:"rounded-lg border-gray-300 shadow-md col-span-2",type:"text",name:"street",value:s.street,onChange:i,required:!0}),e.jsxs("div",{className:"grid col-span-2 grid-cols-3 gap-2",children:[e.jsx("input",{placeholder:a.language==="ar"?"المبنى":"Building",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"building",value:s.building,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشقة":"floor",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"floor",value:s.floor,onChange:i,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشقة":"Apartment",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"apartment",value:s.apartment,onChange:i,required:!0})]}),e.jsx("textarea",{name:"notes",id:"notes",value:s.notes,onChange:i,placeholder:a.language==="en"?"enter short note":"اترك ملاحظة",className:"rounded-lg border-gray-300 shadow-md col-span-2 resize-y min-h-[5rem] max-h-[10rem]"})]})]}),e.jsxs("div",{className:"flex flex-col gap-3 sticky top-44 left-0 h-fit",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:"Current Order"}),e.jsx("p",{className:"text-gray-500",children:"The sum of all total payments for goods there"})]}),f.map(r=>{const{id:t,title:n,images:S,price:m,quantity_of_cart:g}=r;return e.jsx(se,{quantity:g.quantity,title:n,price:m,productTotalPrice:g.total,image:`https://admin.horriizon.com/public/assets/${S[0].path}`},t)}),e.jsxs("div",{className:"flex justify-between items-center font-medium py-4 border-dotted border-b-2",children:[e.jsx("h6",{children:"Subtotal"}),e.jsxs("p",{children:[w," EGY"]})]}),e.jsxs("button",{type:"submit",className:"bg-secondColor text-white text-xl py-2 px-4 rounded-md",onClick:T,children:["Pay ",w," EGY"]})]})]})]})};export{ie as default};
