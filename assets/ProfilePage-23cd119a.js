import{r as i,g as ve,u as Ce,f as Pe,j as e,d as Se,B as oe,m as j,a1 as I,k as re,l as ie,S as ke,Q as d,a as q,b as M}from"./index-1a8cb212.js";import{B as ce}from"./index.esm-3c627aa9.js";import{u as de}from"./user-image-placeholder-58dea756.js";const $e=()=>{const o=localStorage.getItem("userLogged"),m=JSON.parse(localStorage.getItem("userToken")),[n,v]=i.useState({}),[ue,C]=i.useState(!1),b=localStorage.getItem("sellerLogged"),h=JSON.parse(localStorage.getItem("sellerToken")),[l,P]=i.useState({}),ge=ve(),{i18n:a}=Ce(),{getUserInfo:S,getSellerInfo:k,logout:Q,governorates:R,getGovernorates:me}=i.useContext(Pe);if(!o&&!b)return ge("/customer-login"),null;const[V,E]=i.useState(!1),[W,D]=i.useState(!1),[f,he]=i.useState(!1),[t,B]=i.useState(!1),[z,F]=i.useState(!1),[p,g]=i.useState(o?n==null?void 0:n.name:l==null?void 0:l.name),[x,A]=i.useState(o?n==null?void 0:n.email:l==null?void 0:l.email),[u,G]=i.useState(o?n==null?void 0:n.phone:l==null?void 0:l.phone),[O,pe]=i.useState(l==null?void 0:l.cash_number),[w,xe]=i.useState(""),[y,fe]=i.useState(""),[je,be]=i.useState(""),T=()=>{he(!f)},$=()=>{B(!t),F(!1)},L=()=>{F(!z),B(!1)},H=s=>{g(s.target.value)},J=s=>{A(s.target.value)},K=s=>{G(s.target.value)},we=s=>{pe(s.target.value)},X=s=>{xe(s.target.value)},Y=s=>{fe(s.target.value)},_=async s=>{s.preventDefault(),E(!0);const r=/^(010|011|012|015)[0-9]{8}$/;if(!r.test(o?u||n.phone:u||l.phone)){d.info(a.language==="en"?"Phone number should be 11 digits and start with 010, 011, 012, or 015.":"يجب أن يتكون رقم الهاتف من 11 رقمًا ويبدأ بـ 010 أو 011 أو 012 أو 015."),E(!1);return}if(b&&!r.test(l.cashNumber)){d.info(a.language==="en"?"Wallet number should be 11 digits and start with 010, 011, 012, or 015.":"يجب أن يتكون رقم المحفظة من 11 رقمًا ويبدأ بـ 010 أو 011 أو 012 أو 015."),E(!1);return}try{const N={token:o?m:h,name:o?p||n.name:p||l.name,email:o?x||n.email:x||l.email,phone:o?u||n.phone:u||l.phone,governorate_id:je||l.governorate_id,cash_number:O},Ee=await q.post(`${M}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,N);d.success(a.language==="en"?"The profile updated successfully":"تم تحديث الملف الشخصي بنجاح")}catch{d.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{E(!1),B(!1),o?S(m,v,C,g):k(h,P,C,g)}},U=async s=>{if(s.preventDefault(),!w){d.info(a.language==="en"?"please enter new password":"ادخل كلمة المرور الجديده");return}if(!y){d.info(a.language==="en"?"please enter confirmation password":"ادخل تاكيد كلمة المرور");return}if(w!==y){d.info(a.language==="en"?"password and confirmation password not match":"كلمة المرور وتاكيد كلمة المرور غير متطابقين");return}D(!0);try{const r={token:o?m:h,name:o?p||n.name:p||l.name,email:o?x||n.email:x||l.email,phone:o?u||n.phone:u||l.phone,governorate_id:l.governorate_id,cash_number:O,password:w,password_confirmation:y},N=await q.post(`${M}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,r);d.success("The password updated successfully")}catch{d.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{D(!1),F(!1),o?S(m,v,g,A,G):k(h,P,g)}},Z=i.useRef(null),[c,ee]=i.useState(null),[ae,se]=i.useState(!1),le=s=>{const r=s.target.files[0];ee({...c,photo:r})},ne=async s=>{s.preventDefault(),se(!0);const r={token:o?m:h,image:c.photo,name:o?p||n.name:p||l.name,email:o?x||n.email:x||l.email,phone:o?u||n.phone:u||l.phone,governorate_id:l.governorate_id,cash_number:O};try{const N=await q.post(`${M}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,r,{headers:{"Content-Type":"multipart/form-data"}});d.success(a.language==="en"?"The photo updated successfully":"تم تحديث الصورة بنجاح")}catch{d.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{D(!1),F(!1),se(!1),o?S(m,v,g,A,G):k(h,P,g)}},te=()=>{ee({...c,photo:null})};i.useEffect(()=>{o&&S(m,v,C,g)},[o,m]),i.useEffect(()=>{b&&k(h,P,C,g)},[b,h]);const ye=R.map(s=>({value:s.id,label:s.title.en})),Ne=R.map(s=>({value:s.id,label:s.title.ar}));if(i.useEffect(()=>{me()},[]),ue)return e.jsx(Se,{});if(o)return e.jsxs("div",{className:"container py-10",children:[e.jsx("div",{className:"mb-10",children:e.jsx(oe,{})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 my-5",children:[e.jsxs("div",{className:"user-info col-span-3 md:col-span-1 bg-white p-3 shadow-lg rounded-md h-fit",children:[ae?e.jsx("div",{className:"mb-3 flex items-ce justify-center py-3",children:e.jsx(j,{"aria-label":"loading...",color:"purple"})}):e.jsxs("div",{className:"grid mb-3",children:[c!=null&&c.photo?e.jsx(e.Fragment,{children:e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:URL.createObjectURL(c==null?void 0:c.photo),alt:"Transfer photo",className:"h-full w-full"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:n.image?`https://admin.horriizon.com/public/${n.image}`:de,className:"h-full w-full",alt:n.name})}),e.jsx("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:a.language==="en"?"Upload New Image":"تحديث الصورة"})}),e.jsx("input",{ref:Z,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:le})]}),(c==null?void 0:c.photo)&&e.jsx("div",{children:e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:ne,children:a.language==="en"?"Save":"حفظ"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:te,children:a.language==="en"?"Close":"اغلاق"})]})})]}),e.jsxs("div",{className:"info flex flex-col justify-center items-center gap-3",children:[e.jsx("h3",{children:n.name}),e.jsx("h3",{className:"text-sm md:text-md",children:n.email})]}),e.jsxs("div",{className:"actions mt-10 flex flex-col justify-center items-center gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2",onClick:$,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Profile":"تعديل بياناتك"]}),e.jsxs("button",{className:"flex items-center gap-2",onClick:L,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Password":"تغيير كلمة المرور"]}),e.jsxs("button",{onClick:Q,className:"flex items-center gap-2",children:[e.jsx(ce,{}),a.language==="en"?"Logout":"تسجيل الخروج"]})]})]}),e.jsxs("div",{className:"col-span-3 md:col-span-2 bg-white p-3 shadow-lg rounded-md h-fit",children:[e.jsx("h2",{className:"text-xl font-medium",children:a.language==="ar"?"الملف الشخصي":"Profile"}),e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:_,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"name",children:a.language==="ar"?"الاسم":"Full Name"}),e.jsx("input",{className:"w-full bg-gray-300",id:"name",type:"text",value:t?p:n.name,readOnly:!t,onChange:s=>{t&&H(s)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"phone",children:a.language==="ar"?"رقم الهاتف":"Phone"}),e.jsx("input",{className:"w-full bg-gray-300",id:"phone",type:"tel",value:t?u:n.phone,readOnly:!t,onChange:s=>{t&&K(s)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"البريد الالكتروني":"Email"}),e.jsx("input",{className:"w-full bg-gray-300",id:"email",type:"email",value:t?x:n.email,readOnly:!t,onChange:s=>{t&&J(s)}})]}),t&&e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:_,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:V?e.jsx(j,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ التعديلات":"Save Changes"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:$,children:a.language==="ar"?"الغاء":"Cancel"})]})]}),z&&e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:U,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"new-password",children:a.language==="ar"?"كلمة المرور الجديده":"New Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"new-password",type:f?"text":"password",value:w,onChange:X}),f?e.jsx(re,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:T}):e.jsx(ie,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:T})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"confirm-password",children:a.language==="ar"?"اعد كتابة كلمة المرور":"Confirm Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"confirm-password",type:f?"text":"password",value:y,onChange:Y})]}),e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:U,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:W?e.jsx(j,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ كلمة المرور":"Uptade Password"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:L,children:a.language==="ar"?"الغاء":"Cancel"})]})]})]})]})]});if(b){const s=R.find(r=>r.id===l.governorate_id);return e.jsxs("div",{className:"container py-10",children:[e.jsx("div",{className:"mb-10",children:e.jsx(oe,{})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 my-5",children:[e.jsxs("div",{className:"user-info col-span-3 md:col-span-1 bg-white p-3 shadow-lg rounded-md h-fit",children:[ae?e.jsx("div",{className:"mb-3 flex items-ce justify-center py-3",children:e.jsx(j,{"aria-label":"loading...",color:"purple"})}):e.jsxs("div",{className:"grid mb-3",children:[c!=null&&c.photo?e.jsx(e.Fragment,{children:e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:URL.createObjectURL(c==null?void 0:c.photo),alt:"Transfer photo",className:"h-full w-full"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:l.image?`https://admin.horriizon.com/public/${l.image}`:de,className:"h-full w-full",alt:n.name})}),e.jsx("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:a.language==="en"?"Upload New Image":"تحديث الصورة"})}),e.jsx("input",{ref:Z,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:le})]}),(c==null?void 0:c.photo)&&e.jsx("div",{children:e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:ne,children:a.language==="en"?"Save":"حفظ"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:te,children:a.language==="en"?"Close":"اغلاق"})]})})]}),e.jsxs("div",{className:"info flex flex-col justify-center items-center gap-3",children:[e.jsx("h3",{children:l.name}),e.jsx("h3",{className:"text-sm md:text-md",children:l.email})]}),e.jsxs("div",{className:"actions mt-10 flex flex-col justify-center items-center gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2",onClick:$,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Profile":"تعديل بياناتك"]}),e.jsxs("button",{className:"flex items-center gap-2",onClick:L,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Password":"تغيير كلمة المرور"]}),e.jsxs("button",{onClick:Q,className:"flex items-center gap-2",children:[e.jsx(ce,{}),a.language==="en"?"Logout":"تسجيل الخروج"]})]})]}),e.jsxs("div",{className:"col-span-3 md:col-span-2 bg-white p-3 shadow-lg rounded-md h-fit",children:[e.jsx("h2",{className:"text-xl font-medium",children:a.language==="ar"?"الملف الشخصي":"Profile"}),e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:_,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"name",children:a.language==="ar"?"الاسم":"Full Name"}),e.jsx("input",{className:"w-full bg-gray-300",id:"name",type:"text",value:t?p:l.name,readOnly:!t,onChange:r=>{t&&H(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"phone",children:a.language==="ar"?"رقم الهاتف":"Phone"}),e.jsx("input",{className:"w-full bg-gray-300",id:"phone",type:"tel",value:t?u:l.phone,readOnly:!t,onChange:r=>{t&&K(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"البريد الالكتروني":"Email"}),e.jsx("input",{className:"w-full bg-gray-300",id:"email",type:"email",value:t?x:l.email,readOnly:!t,onChange:r=>{t&&J(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"cashNumber",children:a.language==="ar"?"رقم المحفظة الالكترونية":"Cash Number"}),e.jsx("input",{className:"w-full bg-gray-300",id:"cashNumber",type:"tel",value:t?O:l.cash_number,readOnly:!t,onChange:r=>{t&&we(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"المحافظة":"Governorate"}),t?e.jsx(ke,{name:"governorate",id:"governorate",className:"rounded-lg border-gray-300 shadow-md col-span-2",onChange:r=>be(r.value),options:a.language==="en"?ye:Ne,placeholder:a.language==="ar"?"ادخل محافظتك":"enter your Governorate",isRtl:a.language==="ar",readOnly:!t,isSearchable:!0,required:!0}):e.jsx("input",{className:"w-full bg-gray-300",id:"governorate",type:"text",value:a.language==="en"?s==null?void 0:s.title.en:s==null?void 0:s.title.ar,readOnly:!t,onChange:r=>{t&&J(r)}})]}),t&&e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:_,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:V?e.jsx(j,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ التعديلات":"Save Changes"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:$,children:a.language==="ar"?"الغاء":"Cancel"})]})]}),z&&e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:U,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"new-password",children:a.language==="ar"?"كلمة المرور الجديده":"New Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"new-password",type:f?"text":"password",value:w,onChange:X}),f?e.jsx(re,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:T}):e.jsx(ie,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:T})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"confirm-password",children:a.language==="ar"?"اعد كتابة كلمة المرور":"Confirm Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"confirm-password",type:f?"text":"password",value:y,onChange:Y})]}),e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:U,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:W?e.jsx(j,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ كلمة المرور":"Uptade Password"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:L,children:a.language==="ar"?"الغاء":"Cancel"})]})]})]})]})]})}};export{$e as default};
