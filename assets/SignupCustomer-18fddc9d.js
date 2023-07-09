import{c as S,u as C,r as n,j as e,L as P,a as L,b as $,Q as u}from"./index-bc21261c.js";import{B as k,c as F}from"./circle-1-006a5f80.js";import{F as g,a as p}from"./index.esm-bd8d9546.js";import{S as E}from"./Tooltip-bf302bd0.js";import"./index-bb40b1d3.js";import"./horizon-logo-035e306d.js";import"./iconBase-1272fafd.js";import"./index.esm-633d94ac.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-580b6c09.js";const Q=()=>{const i=S(),{i18n:a}=C(),[r,x]=n.useState(!1),[t,f]=n.useState(!1),[c,l]=n.useState(!1);if(localStorage.getItem("userLogged")){i("/profile");return}const h=s=>{s.preventDefault();const j=s.target.fullName.value,w=s.target.email.value,N=s.target.phone.value,b=s.target.password.value,v=s.target.confirmPassword.value,y={name:j,email:w,phone:N,password:b,password_confirmation:v};l(!0),L.post(`${$}/auth/register`,y).then(o=>{u.success(o.data.message),setTimeout(()=>{i("/customer-login")},2e3),l(!1)}).catch(o=>{u.error(JSON.parse(o.response.data).phone[0]),l(!1)})},m=()=>{x(!r)},d=()=>{f(!t)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(k,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsxs("div",{className:"relative mb-7",children:[e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"سجل معنا كمستخدم":"Sign Up as a Customer"}),e.jsx("img",{className:`absolute w-2/3 hidden md:block ${a.language==="en"?"-top-16 -right-11":"-top-12 -left-9"}`,src:F,alt:"horizon"})]}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="ar"?"لتجربة أفضل":"For Your better experience"}),e.jsxs("form",{id:"customer-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:h,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:r?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),r?e.jsx(g,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m}):e.jsx(p,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:t?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),t?e.jsx(g,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d}):e.jsx(p,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(E,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:a.language==="ar"?"جارٍ التحميل...":"Loading..."})]}):a.language==="ar"?"اشترك":"Sign up"})]}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب بالفعل؟":"Already have an account?"," ",e.jsx(P,{to:"/customer-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{Q as default};