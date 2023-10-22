import{f as F,u as L,r as t,j as e,h as f,k as j,L as c,l as $,Q as l,a as E,b as I}from"./index-8e120a52.js";import{B as R}from"./styles-9f712683.js";import{G as T}from"./GoogleSignInButton-9957efd0.js";import"./horizon-logo-035e306d.js";const V=()=>{const d=F(),{i18n:a}=L(),[n,y]=t.useState(!1),[o,w]=t.useState(!1),[u,s]=t.useState(!1),b=localStorage.getItem("userLogged"),[i,N]=t.useState(!1);if(b){d("/profile");return}const v=r=>{r.preventDefault(),s(!0);const P=r.target.fullName.value,C=r.target.email.value,p=r.target.phone.value,x=r.target.password.value,h=r.target.confirmPassword.value,S={name:P,email:C,phone:p,password:x,password_confirmation:h};if(!/^(?:01)(?:0|1|2|5)[0-9]{8}$/.test(p)){l.error(a.language==="en"?"Invalid Egyptian phone number":"رقم هاتف مصري غير صالح"),s(!1);return}if(x!==h){l.error(a.language==="en"?"passwords do not match":"كلمات المرور غير متطابقه"),s(!1);return}if(!i){l.error(a.language==="en"?"Please agree to our policies":"برجاء الموافقة على سياساتنا"),s(!1);return}E.post(`${I}/auth/register`,S).then(k=>{l.success(a.language==="en"?"You have successfully registered":"لقد تم تسجيلك بنجاح"),setTimeout(()=>{d("/customer-login")},2e3),s(!1)}).catch(k=>{l.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),s(!1)})},g=()=>{y(!n)},m=()=>{w(!o)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(R,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"سجل معنا كمستخدم":"Sign Up as a Customer"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="en"?"For better purchasing experience":"لتجربة شراء افضل"}),e.jsxs("form",{id:"customer-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:v,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:n?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),n?e.jsx(f,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g}):e.jsx(j,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:o?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),o?e.jsx(f,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m}):e.jsx(j,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:m})]}),e.jsxs("div",{className:"w-full flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",id:"policyCheckbox",name:"policyCheckbox",style:{border:"1px solid gray"},checked:i,onChange:()=>N(!i)}),e.jsx("label",{htmlFor:"policyCheckbox",children:a.language==="en"?e.jsxs(e.Fragment,{children:["I have read and agree to ",e.jsx(c,{to:"/privacy",className:"text-secondColor underline",children:"the Privacy Policy"})]}):e.jsxs(e.Fragment,{children:["لقد قرأت ووافقت على ",e.jsx(c,{to:"/privacy",className:"text-secondColor underline",children:"سياسة الخصوصية"})]})})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:u,children:u?e.jsx(e.Fragment,{children:e.jsx($,{"aria-label":"loading...",color:"purple"})}):a.language==="ar"?"اشترك":"Sign up"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(T,{role:"user"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب بالفعل؟":"Already have an account?"," ",e.jsx(c,{to:"/customer-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{V as default};
