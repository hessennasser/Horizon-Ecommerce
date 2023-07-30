import{c as q,u as F,r as t,A as G,j as e,L as R,Q as l,a as A,b as I}from"./index-1b1fbdea.js";import{B as _,c as B}from"./circle-1-7fc73d9e.js";import{a as h,b as v}from"./index.esm-95b404d8.js";import{S as O}from"./Tooltip-e821002b.js";import"./index-1564c90a.js";import{S as T}from"./react-select.esm-1dab8bac.js";import"./horizon-logo-035e306d.js";import"./iconBase-fc49644a.js";import"./index.esm-2991245d.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-d46845ff.js";import"./toConsumableArray-74536a67.js";const ae=()=>{const c=q(),{i18n:a}=F(),[o,j]=t.useState(!1),[n,w]=t.useState(!1),[g,r]=t.useState(!1),b=localStorage.getItem("sellerLogged"),[N,y]=t.useState(""),{governorates:u,getGovernorates:S}=t.useContext(G),P=u.map(s=>({value:s.id,label:s.title.en})),C=u.map(s=>({value:s.id,label:s.title.ar}));if(b)return c("/profile"),null;const $=s=>{s.preventDefault();const L=s.target.fullName.value,E=s.target.email.value,i=s.target.phone.value,p=s.target.password.value,f=s.target.confirmPassword.value,k={name:L,email:E,phone:i,password:p,password_confirmation:f,governorate_id:N,cash_number:i};if(!/^(?:01)(?:0|1|2|5)[0-9]{8}$/.test(i)){l.error(a.language==="en"?"Invalid Egyptian phone number":"رقم هاتف مصري غير صالح"),r(!1);return}if(r(!0),p!==f){l.error(a.language==="en"?"passwords do not match":"كلمات المرور غير متطابقه"),r(!1);return}A.post(`${I}/vendor/auth/register`,k).then(x=>{l.success(a.language==="en"?"you have successfully registered":"تم التسجيل بنجاح"),setTimeout(()=>{c("/seller-login")},2e3),r(!1)}).catch(x=>{console.log(x),l.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),r(!1)}),r(!1)},d=()=>{j(!o)},m=()=>{w(!n)};return t.useEffect(()=>{S()},[]),e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(_,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsxs("div",{className:"relative mb-7",children:[e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"قم بالتسجيل كبائع":"Sign Up as a Seller"}),e.jsx("img",{className:`absolute w-2/3 hidden md:block ${a.language==="en"?"-top-16 -right-11":"-top-8 -left-20"}`,src:B,alt:"horizon"})]}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="ar"?"لجعل تجربتك افضل":"For Your better experience"}),e.jsxs("form",{id:"seller-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:$,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الإلكتروني":"Email",type:"email",name:"Phone",id:"email",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone",required:!0}),e.jsx(T,{name:"governorate",id:"governorate",className:"w-full",onChange:s=>y(s.value),options:a.language==="en"?P:C,placeholder:a.language==="ar"?"اختر المحافظة":"Select Governorate",isRtl:a.language==="ar",isSearchable:!0,required:!0}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:o?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),o?e.jsx(h,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d}):e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:n?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),n?e.jsx(h,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m}):e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:g,children:g?e.jsxs(e.Fragment,{children:[e.jsx(O,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:a.language==="ar"?"جاري التحميل...":"Loading..."})]}):a.language==="ar"?"سجل":"Sign up"})]}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب؟":"Already have an account?"," ",e.jsx(R,{to:"/seller-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{ae as default};
