import{n as S,u as C,r as n,j as e,o as P,L,a as k,b as F,Q as d}from"./index-f1bf5b72.js";import{B as $,c as E}from"./circle-1-7f75c795.js";import{F as g,a as p}from"./index.esm-0e1b9449.js";import{S as O}from"./Tooltip-50befccd.js";import"./index-40912fba.js";import"./horizon-logo-035e306d.js";import"./iconBase-8d4922f9.js";import"./index.esm-5065e961.js";import"./index.esm-fc592206.js";const J=()=>{const i=S(),{i18n:a}=C(),[r,f]=n.useState(!1),[t,x]=n.useState(!1),[c,l]=n.useState(!1);if(localStorage.getItem("userLogged")){i("/profile");return}const h=s=>{s.preventDefault();const j=s.target.fullName.value,w=s.target.email.value,N=s.target.phone.value,b=s.target.password.value,v=s.target.confirmPassword.value,y={name:j,email:w,phone:N,password:b,password_confirmation:v};l(!0),k.post(`${F}/auth/register`,y).then(o=>{d.success(o.data.message),setTimeout(()=>{i("/customer-login")},2e3),l(!1)}).catch(o=>{d.error(JSON.parse(o.response.data).phone[0]),l(!1)})},u=()=>{f(!r)},m=()=>{x(!t)};return e.jsxs("div",{className:"bg-mainColor",children:[e.jsx(P,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:a.language==="ar",pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx($,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsxs("div",{className:"relative mb-7",children:[e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"سجل معنا كمستخدم":"Sign Up as a Customer"}),e.jsx("img",{className:`absolute w-2/3 hidden md:block ${a.language==="en"?"-top-16 -right-11":"-top-12 -left-9"}`,src:E,alt:"horizon"})]}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="ar"?"لتجربة أفضل":"For Your better experience"}),e.jsxs("form",{id:"customer-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:h,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:r?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),r?e.jsx(g,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:u}):e.jsx(p,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:u})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:t?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),t?e.jsx(g,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m}):e.jsx(p,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(O,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:a.language==="ar"?"جارٍ التحميل...":"Loading..."})]}):a.language==="ar"?"اشترك":"Sign up"})]}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب بالفعل؟":"Already have an account?"," ",e.jsx(L,{to:"/customer-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})]})};export{J as default};
