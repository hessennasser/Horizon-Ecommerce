import{r as c,m as ye,u as Ne,l as ve,j as e,M as I,n as ne,o as te,h as A,i as G,Q as u}from"./index-976ff227.js";import{B as oe}from"./index.esm-ed24859a.js";import{B as re}from"./Breadcrumbs-9534b937.js";import{S as w}from"./Tooltip-c7ee67cf.js";import{S as Ce}from"./react-select.esm-bf507dad.js";import{u as ie}from"./user-image-placeholder-50f80e46.js";import"./index.esm-0732819f.js";import"./floating-ui.dom-9d44cd4e.js";import"./toConsumableArray-e01a232e.js";import"./emotion-unitless.esm-475d8cc4.js";const Ue=()=>{const o=localStorage.getItem("userLogged"),g=JSON.parse(localStorage.getItem("userToken")),[n,v]=c.useState({}),C=localStorage.getItem("sellerLogged"),m=JSON.parse(localStorage.getItem("sellerToken")),[l,P]=c.useState({}),ce=ye(),{i18n:a}=Ne(),{getUserInfo:S,getSellerInfo:de,logout:J,governorates:U,getGovernorates:ue}=c.useContext(ve);if(!o&&!C)return ce("/customer-login"),null;const[M,q]=c.useState(!1),[Q,L]=c.useState(!1),[f,ge]=c.useState(!1),[t,R]=c.useState(!1),[D,k]=c.useState(!1),[h,d]=c.useState(o?n==null?void 0:n.name:l==null?void 0:l.name),[p,j]=c.useState(o?n==null?void 0:n.email:l==null?void 0:l.email),[x,b]=c.useState(o?n==null?void 0:n.phone:l==null?void 0:l.phone),[E,me]=c.useState(l==null?void 0:l.cash_number),[y,he]=c.useState(""),[N,pe]=c.useState(""),[xe,fe]=c.useState(""),F=()=>{ge(!f)},O=()=>{R(!t),k(!1)},T=()=>{k(!D),R(!1)},V=s=>{d(s.target.value)},B=s=>{j(s.target.value)},H=s=>{b(s.target.value)},je=s=>{me(s.target.value)},K=s=>{he(s.target.value)},W=s=>{pe(s.target.value)},_=async s=>{s.preventDefault(),q(!0);try{const r={token:o?g:m,name:o?h||n.name:h||l.name,email:o?p||n.email:p||l.email,phone:o?x||n.phone:x||l.phone,governorate_id:t?xe:l.governorate_id,cash_number:E},z=await A.post(`${G}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,r);u.success(a.language==="en"?"The profile updated successfully":"تم تحديث الملف الشخصي بنجاح")}catch{u.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{q(!1),R(!1),o?S(g,v,d,j,b):getSallerInfo(m,P,d,j,b)}},$=async s=>{if(s.preventDefault(),!y){u.info(a.language==="en"?"please enter new password":"ادخل كلمة المرور الجديده");return}if(!N){u.info(a.language==="en"?"please enter confirmation password":"ادخل تاكيد كلمة المرور");return}if(y!==N){u.info(a.language==="en"?"password and confirmation password not match":"كلمة المرور وتاكيد كلمة المرور غير متطابقين");return}L(!0);try{const r={token:o?g:m,name:o?h||n.name:h||l.name,email:o?p||n.email:p||l.email,phone:o?x||n.phone:x||l.phone,governorate_id:l.governorate_id,cash_number:E,password:y,password_confirmation:N},z=await A.post(`${G}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,r);u.success("The password updated successfully")}catch{u.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{L(!1),k(!1),o?S(g,v,d,j,b):getSallerInfo(m,P,d)}},X=c.useRef(null),[i,Y]=c.useState(null),[Z,ee]=c.useState(!1),ae=s=>{const r=s.target.files[0];Y({...i,photo:r})},se=async s=>{s.preventDefault(),ee(!0);const r={token:o?g:m,image:i.photo,name:o?h||n.name:h||l.name,email:o?p||n.email:p||l.email,phone:o?x||n.phone:x||l.phone,governorate_id:l.governorate_id,cash_number:E};try{const z=await A.post(`${G}${o?"/auth/user-update":"/vendor/auth/vendor-update"}`,r,{headers:{"Content-Type":"multipart/form-data"}});u.success(a.language==="en"?"The photo updated successfully":"تم تحديث الصورة بنجاح")}catch{u.error(a.language==="en"?"There is an error, please try again later":"يوجد خطأ ما، الرجاء المحاولة مره اخري")}finally{L(!1),k(!1),ee(!1),o?S(g,v,d,j,b):getSallerInfo(m,P,d)}},le=()=>{Y({...i,photo:null})};c.useEffect(()=>{o&&S(g,v,d,j,b)},[o,g]),c.useEffect(()=>{C&&de(m,P,d,j,b)},[C,m]);const be=U.map(s=>({value:s.id,label:s.title.en})),we=U.map(s=>({value:s.id,label:s.title.ar}));if(c.useEffect(()=>{ue()},[]),o)return e.jsxs("div",{className:"container py-10",children:[e.jsx("div",{className:"mb-10",children:e.jsx(re,{})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 my-5",children:[e.jsxs("div",{className:"user-info col-span-3 md:col-span-1 bg-white p-3 shadow-lg rounded-md h-fit",children:[Z?e.jsx("div",{className:"mb-3 flex items-ce justify-center py-3",children:e.jsx(w,{"aria-label":"loading...",color:"purple"})}):e.jsxs("div",{className:"grid mb-3",children:[i!=null&&i.photo?e.jsx(e.Fragment,{children:e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:URL.createObjectURL(i==null?void 0:i.photo),alt:"Transfer photo",className:"h-full w-full"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:n.image?`https://admin.horriizon.com/public/${n.image}`:ie,className:"h-full w-full",alt:n.name})}),e.jsx("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:a.language==="en"?"Upload New Image":"تحديث الصورة"})}),e.jsx("input",{ref:X,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:ae})]}),(i==null?void 0:i.photo)&&e.jsx("div",{children:e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:se,children:a.language==="en"?"Save":"حفظ"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:le,children:a.language==="en"?"Close":"اغلاق"})]})})]}),e.jsxs("div",{className:"info flex flex-col justify-center items-center gap-3",children:[e.jsx("h3",{children:n.name}),e.jsx("h3",{className:"text-sm md:text-md",children:n.email})]}),e.jsxs("div",{className:"actions mt-10 flex flex-col justify-center items-center gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2",onClick:O,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Profile":"تعديل بياناتك"]}),e.jsxs("button",{className:"flex items-center gap-2",onClick:T,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Password":"تغيير كلمة المرور"]}),e.jsxs("button",{onClick:J,className:"flex items-center gap-2",children:[e.jsx(oe,{}),a.language==="en"?"Logout":"تسجيل الخروج"]})]})]}),e.jsxs("div",{className:"col-span-3 md:col-span-2 bg-white p-3 shadow-lg rounded-md h-fit",children:[e.jsx("h2",{className:"text-xl font-medium",children:a.language==="ar"?"الملف الشخصي":"Profile"}),e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:_,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"name",children:a.language==="ar"?"الاسم":"Full Name"}),e.jsx("input",{className:"w-full bg-gray-300",id:"name",type:"text",value:t?h:n.name,readOnly:!t,onChange:s=>{t&&V(s)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"phone",children:a.language==="ar"?"رقم الهاتف":"Phone"}),e.jsx("input",{className:"w-full bg-gray-300",id:"phone",type:"tel",value:t?x:n.phone,readOnly:!t,onChange:s=>{t&&H(s)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"البريد الالكتروني":"Email"}),e.jsx("input",{className:"w-full bg-gray-300",id:"email",type:"email",value:t?p:n.email,readOnly:!t,onChange:s=>{t&&B(s)}})]}),t&&e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:_,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:M?e.jsx(w,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ التعديلات":"Save Changes"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:O,children:a.language==="ar"?"الغاء":"Cancel"})]})]}),D&&e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:$,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"new-password",children:a.language==="ar"?"كلمة المرور الجديده":"New Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"new-password",type:f?"text":"password",value:y,onChange:K}),f?e.jsx(ne,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:F}):e.jsx(te,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:F})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"confirm-password",children:a.language==="ar"?"اعد كتابة كلمة المرور":"Confirm Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"confirm-password",type:f?"text":"password",value:N,onChange:W})]}),e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:$,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:Q?e.jsx(w,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ كلمة المرور":"Uptade Password"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:T,children:a.language==="ar"?"الغاء":"Cancel"})]})]})]})]})]});if(C){const s=U.find(r=>r.id===l.governorate_id);return e.jsxs("div",{className:"container py-10",children:[e.jsx("div",{className:"mb-10",children:e.jsx(re,{})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 my-5",children:[e.jsxs("div",{className:"user-info col-span-3 md:col-span-1 bg-white p-3 shadow-lg rounded-md h-fit",children:[Z?e.jsx("div",{className:"mb-3 flex items-ce justify-center py-3",children:e.jsx(w,{"aria-label":"loading...",color:"purple"})}):e.jsxs("div",{className:"grid mb-3",children:[i!=null&&i.photo?e.jsx(e.Fragment,{children:e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:URL.createObjectURL(i==null?void 0:i.photo),alt:"Transfer photo",className:"h-full w-full"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-secondColor text-white grid place-content-center rounded-[50%] mx-auto",children:e.jsx("img",{src:n.image?`https://admin.horriizon.com/images/${n.image}`:ie,className:"h-full w-full",alt:n.name})}),e.jsx("label",{htmlFor:"photoInput",className:"flex flex-col items-center justify-center",children:e.jsx("span",{className:"text-secondColor font-bold border-b border-b-secondColor cursor-pointer",children:a.language==="en"?"Upload New Image":"تحديث الصورة"})}),e.jsx("input",{ref:X,id:"photoInput",type:"file",accept:".jpg,.jpeg,.png",className:"hidden",onChange:ae})]}),(i==null?void 0:i.photo)&&e.jsx("div",{children:e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{type:"button",className:"bg-mainColor text-white py-1 px-2 rounded-lg mr-2",onClick:se,children:a.language==="en"?"Save":"حفظ"}),e.jsx("button",{type:"button",className:"bg-red-500 text-white py-1 px-2 rounded-lg",onClick:le,children:a.language==="en"?"Close":"اغلاق"})]})})]}),e.jsxs("div",{className:"info flex flex-col justify-center items-center gap-3",children:[e.jsx("h3",{children:l.name}),e.jsx("h3",{className:"text-sm md:text-md",children:l.email})]}),e.jsxs("div",{className:"actions mt-10 flex flex-col justify-center items-center gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2",onClick:O,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Profile":"تعديل بياناتك"]}),e.jsxs("button",{className:"flex items-center gap-2",onClick:T,children:[e.jsx(I,{})," ",a.language==="en"?"Edit Password":"تغيير كلمة المرور"]}),e.jsxs("button",{onClick:J,className:"flex items-center gap-2",children:[e.jsx(oe,{}),a.language==="en"?"Logout":"تسجيل الخروج"]})]})]}),e.jsxs("div",{className:"col-span-3 md:col-span-2 bg-white p-3 shadow-lg rounded-md h-fit",children:[e.jsx("h2",{className:"text-xl font-medium",children:a.language==="ar"?"الملف الشخصي":"Profile"}),e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:_,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"name",children:a.language==="ar"?"الاسم":"Full Name"}),e.jsx("input",{className:"w-full bg-gray-300",id:"name",type:"text",value:t?h:l.name,readOnly:!t,onChange:r=>{t&&V(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"phone",children:a.language==="ar"?"رقم الهاتف":"Phone"}),e.jsx("input",{className:"w-full bg-gray-300",id:"phone",type:"tel",value:t?x:l.phone,readOnly:!t,onChange:r=>{t&&H(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"البريد الالكتروني":"Email"}),e.jsx("input",{className:"w-full bg-gray-300",id:"email",type:"email",value:t?p:l.email,readOnly:!t,onChange:r=>{t&&B(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"cashNumber",children:a.language==="ar"?"رقم المحفظة الالكترونية":"Cash Number"}),e.jsx("input",{className:"w-full bg-gray-300",id:"cashNumber",type:"tel",value:t?E:l.cash_number,readOnly:!t,onChange:r=>{t&&je(r)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:a.language==="ar"?"المحافظة":"Governorate"}),t?e.jsx(Ce,{name:"governorate",id:"governorate",className:"rounded-lg border-gray-300 shadow-md col-span-2",onChange:r=>fe(r.value),options:a.language==="en"?be:we,placeholder:a.language==="ar"?"ادخل محافظتك":"enter your Governorate",isRtl:a.language==="ar",readOnly:!t,isSearchable:!0,required:!0}):e.jsx("input",{className:"w-full bg-gray-300",id:"governorate",type:"text",value:a.language==="en"?s==null?void 0:s.title.en:s==null?void 0:s.title.ar,readOnly:!t,onChange:r=>{t&&B(r)}})]}),t&&e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:_,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:M?e.jsx(w,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ التعديلات":"Save Changes"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:O,children:a.language==="ar"?"الغاء":"Cancel"})]})]}),D&&e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:$,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"new-password",children:a.language==="ar"?"كلمة المرور الجديده":"New Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"new-password",type:f?"text":"password",value:y,onChange:K}),f?e.jsx(ne,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:F}):e.jsx(te,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:F})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"confirm-password",children:a.language==="ar"?"اعد كتابة كلمة المرور":"Confirm Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"confirm-password",type:f?"text":"password",value:N,onChange:W})]}),e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:$,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:Q?e.jsx(w,{"aria-label":"loading...",color:"purple"}):a.language==="ar"?"حفظ كلمة المرور":"Uptade Password"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:T,children:a.language==="ar"?"الغاء":"Cancel"})]})]})]})]})]})}};export{Ue as default};
