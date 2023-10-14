import{u as J,j as e,g as re,r as o,f as oe,O as B,a4 as de,S as ce,Q as p,b as H}from"./index-14fe7ceb.js";/* empty css              */const ie=({title:f,price:a,productTotalPrice:c,quantity:j,image:i})=>{const{i18n:g}=J();return e.jsxs("div",{className:"flex justify-between gap-3 border border-gray-300 py-3 px-2 rounded-md shadow-sm",children:[e.jsx("img",{className:"w-20 h-20 object-cover",src:i,alt:g.language==="en"?f.en:f.ar}),e.jsxs("div",{className:"grid flex-1 gap-5",children:[e.jsx("h3",{className:"font-medium",children:g.language==="en"?f.en:f.ar}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("p",{className:"text-gray-500",children:[g.language==="en"?"Quantity : ":"الكمية : ",e.jsx("span",{children:j})]}),e.jsx("span",{children:"*"}),e.jsxs("p",{className:"text-gray-500",children:[g.language==="en"?"Price : ":"السعر : ",e.jsx("span",{children:a})]})]})]}),e.jsx("span",{className:"text-secondColor font-bold",children:`${g.language==="ar"?`جنية ${c}`:`${c} EGY`}`})]})},he=()=>{var R,U,A;const f=re(),{i18n:a}=J(),[c,j]=o.useState([]),i=JSON.parse(localStorage.getItem("userToken")),g=localStorage.getItem("userLogged"),[n,Q]=o.useState({});if(!g)return f("/customer-login"),null;const[E,W]=o.useState(""),[l,C]=o.useState({firstName:((R=n==null?void 0:n.name)==null?void 0:R.split(" ")[0])||"",lastName:((U=n==null?void 0:n.name)==null?void 0:U.split(" ").slice(1).join(" "))||"",phoneNumber:(n==null?void 0:n.phone)||"",email:(n==null?void 0:n.email)||"",address:"",apartment:"",floor:"",street:"",building:"",selectedPaymentMethod:"vodafone-cash",notes:""}),[w,q]=o.useState(null),[v,K]=o.useState(null),{getCartItems:P,getTotalPriceInCart:k,total:u,governorates:M,getGovernorates:V,mainRequest:D,setCartItems:X,getUserInfo:Z,chosenDelivery:y,websiteInfo:d,handleDeliveryChange:_}=o.useContext(oe),O=o.useRef(null),m=s=>{C({...l,[s.target.name]:s.target.value})},G=s=>{C({...l,selectedPaymentMethod:s.target.value})},I=s=>{const t=s.target.files[0];q(t)},ee=()=>{O.current.click()},ae=()=>{q(null)},[T,x]=o.useState(!1),$=async s=>{s.preventDefault();const t={...l,governorate_id:E.value,city:E.label,token:i},N=/^(010|011|012|015)[0-9]{8}$/;if(l.selectedPaymentMethod==="vodafone-cash"&&!v){p.info(a.language==="en"?"Please enter your cash number":"من فضلك أدخل رقم المحفظة الالكترونية"),x(!1);return}if(l.selectedPaymentMethod==="vodafone-cash"&&!N.test(v)){p.info(a.language==="en"?"Wallet number should be 11 digits and start with 010, 011, 012, or 015.":"يجب أن يتكون رقم المحفظة من 11 رقمًا ويبدأ بـ 010 أو 011 أو 012 أو 015.");return}if(!N.test(t.phoneNumber)){p.info(a.language==="en"?"Phone number should be 11 digits and start with 010, 011, 012, or 015.":"يجب أن يتكون رقم الهاتف من 11 رقمًا ويبدأ بـ 010 أو 011 أو 012 أو 015.");return}x(!0);const r=new FormData;if(r.append("token",t.token),r.append("first_name",t.firstName),r.append("last_name",t.lastName),r.append("phone",t.phoneNumber),r.append("email",t.email),r.append("address",t.address),r.append("apartment",t.apartment),r.append("floor",t.floor),r.append("street",t.street),r.append("building",t.building),r.append("governorate_id",t.governorate_id),r.append("city",t.city),r.append("notes",t.notes),r.append("payment_method",t.selectedPaymentMethod==="cash-on-delivery"?0:1),r.append("vodafone_cash_number",v),r.append("charging",y==="Fast delivery"?"fast":"normal"),r.append("photo",w),!Object.values(t).every(h=>h)&&t.selectedPaymentMethod!=="cash-on-delivery"){p.info(a.language==="en"?"Please fill all fields":"من فضلك ادخل جميع البيانات"),x(!1);return}const S=["vodafone_cash_number","photo"];if(t.selectedPaymentMethod==="cash-on-delivery"&&!Object.entries(t).filter(([h,z])=>!S.includes(h)).every(([h,z])=>z)){p.info(a.language==="en"?"Please fill all fields":"من فضلك ادخل جميع البيانات"),x(!1);return}try{const h=await D.post(`${H}/payment`,r);p.success(a.language==="en"?"Your Oreder Succsesfly Done":"تم ارسال طلبك بنجاح"),f("/"),x(!1)}catch(h){console.log(h),p.error(a.language==="en"?"Something went wrong":"حدث خطأ ما, من فضلك حاول مرة اخري"),x(!1)}finally{x(!1),k(),P(i,X)}};o.useEffect(()=>{g&&i&&(k(),P(i,j))},[g,i,u]),o.useEffect(()=>{var s,t;g&&Z(i,Q),C({...l,firstName:((s=n==null?void 0:n.name)==null?void 0:s.split(" ")[0])||"",lastName:((t=n==null?void 0:n.name)==null?void 0:t.split(" ").slice(1).join(" "))||"",phoneNumber:n.phone,email:n.email})},[g,i,n.name]);const se=M.map(s=>({value:s.id,label:s.title.en})),te=M.map(s=>({value:s.id,label:s.title.ar}));o.useEffect(()=>{V()},[]);const[ge,ne]=o.useState(0),[b,Y]=o.useState(0),[F,le]=o.useState("");o.useEffect(()=>{(()=>{ne(u+b)})()},[c,b,y]);const L=async s=>{if(s.preventDefault(),!F){p.info(a.language==="en"?"Enter the coupon":"قم بإدخال القسيمه");return}try{const t=await D.post(`${H}/coupon/${F}`,{token:i});console.log(t),t.data==="Coupon Not Found"&&p.info(a.language==="en"?"Coupon Not Found":"لم يتم العثور على القسيمة")}catch(t){p.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),console.log(t)}k(),P(i,j,x)};return o.useEffect(()=>{y==="Fast delivery"?Y(Math.floor(d==null?void 0:d.fast_charging)):y==="Standard delivery"&&Y(Math.floor(d==null?void 0:d.normal_charging))},[y,d]),T?e.jsx("div",{className:"container py-10 flex flex-col gap-5 items-center justify-center",children:e.jsx(B,{visible:!0,height:"160",width:"160",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})}):e.jsxs("div",{className:"container py-10",children:[T&&e.jsx("div",{className:"fixed top-0 left-0 w-full h-full bg-[#F4F4F4] bg-opagovernorate_id-60 z-50",children:e.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:e.jsx(B,{visible:!0,height:"260",width:"260",ariaLabel:"Oval-loading",wrapperStyle:{},wrapperClass:"Oval-wrapper",color:"#125ed4",secondaryColor:"#060047"})})}),e.jsxs("form",{onSubmit:$,className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"grid gap-3 lg:sticky top-0 right-0 h-fit",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:a.language==="en"?"Payment Method":"طريقة الدفع"}),e.jsx("p",{className:"text-gray-500",children:a.language==="en"?"Choose the appropriate payment method for you and complete the information":"اختر طريقة الدفع المناسبه لك واكمل البيانات"})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"vodafone-cash",children:a.language==="en"?"E-Pay":"المحافظ الالكترونية"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"vodafone-cash",value:"vodafone-cash",checked:l.selectedPaymentMethod==="vodafone-cash",onChange:G})]}),e.jsxs("div",{className:"flex justify-between items-center rounded-lg border border-gray-500 p-2",children:[e.jsx("label",{className:"flex-1 cursor-pointer",htmlFor:"cash-on-delivery",children:a.language==="en"?"Paiement when recieving":"الدفع عند الاستلام"}),e.jsx("input",{className:"cursor-pointer",type:"radio",name:"selectedPaymentMethod",id:"cash-on-delivery",value:"cash-on-delivery",checked:l.selectedPaymentMethod==="cash-on-delivery",onChange:G})]})]}),l.selectedPaymentMethod!=="cash-on-delivery"&&e.jsxs("div",{className:"flex flex-col gap-3 mt-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:a.language==="en"?"Transfer data":"بيانات الدفع"}),e.jsx("p",{className:"text-gray-500",children:a.language==="en"?"Enter the required data below and make sure the image is clear":"ادخل البيانات المطلوبه بالاسفل وتأكد من وضوح الصوره"})]}),e.jsxs("div",{className:"flex items-center flex-col gap-2 justify-center",children:[e.jsxs("div",{className:"w-full flex gap-2 flex-col",children:[e.jsx("label",{htmlFor:"cashNumber",className:"my-2 text-xl font-bold",children:a.language==="en"?"Enter the wallet number":"أدخل رقم المحفظة"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم المفظة الالكترونية":"Cash Number",className:"rounded-lg border-gray-300 shadow-md",type:"tel",id:"cashNumber",name:"cashNumber",value:v,onChange:s=>{K(s.target.value)},required:!0})]}),e.jsx("label",{htmlFor:"photoInput",className:"w-full my-2 text-xl font-bold",children:a.language==="en"?"Transfer receipt":"إيصال التحويل"}),e.jsxs("div",{className:"w-2/3 bg-[#F8F8FF] text-center border-dashed border-2 rounded-lg border-gray-300 p-4",children:[w?e.jsxs("div",{children:[e.jsx("img",{src:URL.createObjectURL(w),alt:"Transfer photo",className:"w-20 h-20 mx-auto mb-2"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor",children:"Photo Selected"}),e.jsxs("div",{className:"flex justify-center mt-2",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:ee,children:"Update Photo"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:ae,children:"Delete Photo"})]})]}):e.jsxs("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center cursor-pointer",children:[e.jsx(de,{className:"text-[4rem]"}),e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:"Select Photo"})]}),e.jsx("input",{ref:O,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:I,required:l.selectedPaymentMethod!=="cash-on-delivery"}),e.jsxs("p",{className:"text-gray-500 mt-2",children:[a.language==="en"?"Supported formats":"الإمتدادات المدعومه",": JPEG, PNG"]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:a.language==="en"?"Personal Details":"البيانات الشخصية"}),e.jsx("p",{className:"text-gray-500",children:a.language==="en"?"Complete personal details to continue the payment":"أكمل التفاصيل الشخصية لمواصلة الدفع"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsx("input",{placeholder:a.language==="en"?"First Name":"الاسم الاول",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"firstName",value:l.firstName,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Last Name":"الاسم الاخير",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"lastName",value:l.lastName,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Phone Number":"رقم الهاتف",className:"rounded-lg border-gray-300 shadow-md",type:"tel",name:"phoneNumber",value:l.phoneNumber,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="en"?"Email":"البريد الالكتروني",className:"rounded-lg border-gray-300 shadow-md",type:"email",name:"email",value:l.email,onChange:m,required:!0}),e.jsx(ce,{name:"governorate",id:"governorate",className:"rounded-lg border-gray-300 shadow-md col-span-2",onChange:s=>W(s),options:a.language==="en"?se:te,placeholder:a.language==="ar"?"ادخل محافظتك":"enter your Governorate",isRtl:a.language==="ar",isSearchable:!0,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"عنوانك":"Address",className:"rounded-lg border-gray-300 shadow-md col-span-2",type:"text",name:"address",value:l.address,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشارع":"Street",className:"rounded-lg border-gray-300 shadow-md col-span-2",type:"text",name:"street",value:l.street,onChange:m,required:!0}),e.jsxs("div",{className:"grid col-span-2 grid-cols-3 gap-2",children:[e.jsx("input",{placeholder:a.language==="ar"?"المبنى":"Building",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"building",value:l.building,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشقة":"floor",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"floor",value:l.floor,onChange:m,required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"الشقة":"Apartment",className:"rounded-lg border-gray-300 shadow-md",type:"text",name:"apartment",value:l.apartment,onChange:m,required:!0})]}),e.jsx("textarea",{name:"notes",id:"notes",value:l.notes,onChange:m,placeholder:a.language==="en"?"enter short note":"اترك ملاحظة",className:"rounded-lg border-gray-300 shadow-md col-span-2 resize-y min-h-[5rem] max-h-[10rem]"})]})]}),e.jsxs("div",{className:"lg:sticky top-44 left-0 h-fit",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h2",{className:"text-lg font-medium mb-5",children:a.language==="en"?"Choose Delivery package":"اختر طريقة التسليم"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between border-2 border-secondColor p-1 px-3 rounded-lg",children:[e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs("label",{htmlFor:"package-1",className:"flex items-center gap-3",children:[e.jsx("input",{type:"radio",name:"delivery",id:"package-1",value:"Fast delivery",checked:y==="Fast delivery",onChange:_,className:"bg-mainColor"}),a.language==="en"?"Fast delivery":"توصيل سريع"]})}),e.jsxs("span",{className:"text-secondColor",children:[d==null?void 0:d.fast_charging," EGY"]})]}),e.jsxs("div",{className:"flex items-center justify-between border-2 border-secondColor p-1 px-3 rounded-lg",children:[e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs("label",{htmlFor:"package-2",className:"flex items-center gap-3",children:[e.jsx("input",{type:"radio",name:"delivery",id:"package-2",value:"Standard delivery",checked:y==="Standard delivery",onChange:_,className:"bg-mainColor"}),a.language==="en"?"Standard delivery":"توصيل عادي"]})}),e.jsxs("span",{className:"text-secondColor",children:[d==null?void 0:d.normal_charging," EGY"]})]})]})]}),e.jsxs("form",{className:`coupon-form relative mb-3 overflow-hidden flex flex-col items-start gap-6 bg-[#F4DBE8] py-4 px-6 rounded-lg shadow-md ${u<c[0]?"before:absolute before:inset-0 before:bg-gray-400 before:bg-opacity-50":""}`,onSubmit:s=>L(s),children:[e.jsx("label",{htmlFor:"coupon",className:"font-bold",children:a.language==="en"?"Have a Coupon?":"هل لديك قسيمة؟"}),e.jsx("input",{disabled:u<c[0],className:"w-full rounded-lg",placeholder:a.language==="en"?"add your coupon":"أضف قسيمتك",type:"text",name:"coupon",id:"coupon",value:F,onChange:s=>le(s.target.value)}),e.jsx("button",{disabled:u<c[0],onClick:s=>L(s),className:"m-0 px-5 bg-secondColor py-2 rounded-md text-white hover:brightness-110",type:"submit",children:a.language==="en"?"Apply Coupon":"تطبيق القسيمة"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-mainColor font-bold text-lg",children:a.language==="en"?"Current Order":"الطلب الحالي"}),e.jsx("p",{className:"text-gray-500",children:a.language==="en"?"The sum of all total payments for your current order":"مجموع المدفوعات الإجمالية لطلبك الحالي"})]}),(A=c[1])==null?void 0:A.map(s=>{const{id:t,title:N,images:r,price:S,quantity_of_cart:h}=s;return e.jsx(ie,{quantity:h.quantity,title:N,price:S,productTotalPrice:h.total,image:`https://admin.horriizon.com/public/${r[0].path}`},t)}),u<c[0]&&e.jsxs("div",{className:"flex justify-between items-center gap-6 text-red-500 line-through",children:[e.jsx("h3",{className:"",children:a.language==="en"?"Total products Price":"مجموع المنتجات"}),e.jsxs("p",{className:"flex-1 text-end",children:[c[0]," EGY"]})]}),u<c[0]&&e.jsxs("div",{className:"flex justify-between items-center gap-6",children:[e.jsx("h3",{className:"",children:a.language==="en"?"Discount":"خصم"}),e.jsxs("p",{className:"flex-1 text-end",children:["-",c[0]-u," EGY"]})]}),b&&e.jsxs("div",{className:"flex justify-between items-center gap-6",children:[e.jsx("h3",{className:"",children:a.language==="en"?"Delevary":"سعر التوصيل"}),e.jsxs("p",{className:"flex-1 text-end",children:[b," EGY"]})]}),e.jsxs("div",{className:"flex justify-between items-center gap-6",children:[e.jsx("h3",{className:"",children:a.language==="en"?"Total":"المجموع الكلي"}),e.jsxs("p",{className:"flex-1 text-end",children:[u+b," EGY"]})]}),e.jsxs("button",{type:"submit",className:"bg-secondColor text-white text-xl py-2 px-4 rounded-md",onClick:$,children:[a.language==="en"?"Pay":"إدفع"," ",u+b," EGY"]})]})]})]})]})};export{he as default};
