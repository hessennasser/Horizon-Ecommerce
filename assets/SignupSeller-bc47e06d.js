import{f as G,u as k,r as t,e as F,j as e,g as h,h as v,S as R,L as I,Q as l,a as B,b as O}from"./index-5edf5ab7.js";import{B as _}from"./styles-a8b91137.js";import{S as A}from"./react-select.esm-11196136.js";import{G as T}from"./GoogleSignInButton-eac537f2.js";import"./horizon-logo-035e306d.js";import"./toConsumableArray-51e2cfaf.js";import"./emotion-unitless.esm-475d8cc4.js";const K=()=>{const c=G(),{i18n:a}=k(),[n,j]=t.useState(!1),[o,w]=t.useState(!1),[g,r]=t.useState(!1),N=localStorage.getItem("sellerLogged"),[b,y]=t.useState(""),{governorates:u,getGovernorates:S}=t.useContext(F),P=u.map(s=>({value:s.id,label:s.title.en})),C=u.map(s=>({value:s.id,label:s.title.ar}));if(N)return c("/profile"),null;const L=s=>{s.preventDefault();const $=s.target.fullName.value,E=s.target.email.value,i=s.target.phone.value,p=s.target.password.value,f=s.target.confirmPassword.value,q={name:$,email:E,phone:i,password:p,password_confirmation:f,governorate_id:b,cash_number:i};if(!/^(?:01)(?:0|1|2|5)[0-9]{8}$/.test(i)){l.error(a.language==="en"?"Invalid Egyptian phone number":"رقم هاتف مصري غير صالح"),r(!1);return}if(r(!0),p!==f){l.error(a.language==="en"?"passwords do not match":"كلمات المرور غير متطابقه"),r(!1);return}B.post(`${O}/vendor/auth/register`,q).then(x=>{l.success(a.language==="en"?"you have successfully registered":"تم التسجيل بنجاح"),setTimeout(()=>{c("/seller-login")},2e3),r(!1)}).catch(x=>{console.log(x),l.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),r(!1)}),r(!1)},d=()=>{j(!n)},m=()=>{w(!o)};return t.useEffect(()=>{S()},[]),e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(_,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"قم بالتسجيل كبائع":"Sign Up as a Seller"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="ar"?"لجعل تجربتك افضل":"For Your better experience"}),e.jsxs("form",{id:"seller-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:L,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الإلكتروني":"Email",type:"email",name:"Phone",id:"email",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone",required:!0}),e.jsx(A,{name:"governorate",id:"governorate",className:"w-full",onChange:s=>y(s.value),options:a.language==="en"?P:C,placeholder:a.language==="ar"?"اختر المحافظة":"Select Governorate",isRtl:a.language==="ar",isSearchable:!0,required:!0}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:n?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),n?e.jsx(h,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d}):e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:o?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),o?e.jsx(h,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m}):e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:g,children:g?e.jsxs(e.Fragment,{children:[e.jsx(R,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:a.language==="ar"?"جاري التحميل...":"Loading..."})]}):a.language==="ar"?"سجل":"Sign up"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(T,{role:"seller"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب؟":"Already have an account?"," ",e.jsx(I,{to:"/seller-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{K as default};