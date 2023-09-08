import{g as P,u as S,r as o,j as e,k as x,l as f,m as C,L,Q as t,a as $,b as k}from"./index-dc16dc37.js";import{B as E}from"./styles-0d5915be.js";import{G as F}from"./GoogleSignInButton-2cd1454e.js";import"./horizon-logo-035e306d.js";const U=()=>{const i=P(),{i18n:a}=S(),[l,h]=o.useState(!1),[n,j]=o.useState(!1),[c,r]=o.useState(!1);if(localStorage.getItem("userLogged")){i("/profile");return}const w=s=>{s.preventDefault();const N=s.target.fullName.value,y=s.target.email.value,d=s.target.phone.value,m=s.target.password.value,p=s.target.confirmPassword.value,b={name:N,email:y,phone:d,password:m,password_confirmation:p};if(!/^(?:01)(?:0|1|2|5)[0-9]{8}$/.test(d)){t.error(a.language==="en"?"Invalid Egyptian phone number":"رقم هاتف مصري غير صالح"),r(!1);return}if(r(!0),m!==p){t.error(a.language==="en"?"passwords do not match":"كلمات المرور غير متطابقه"),r(!1);return}$.post(`${k}/auth/register`,b).then(v=>{t.success(a.language==="en"?"You have successfully registered":"لقد تم تسجيلك بنجاح"),setTimeout(()=>{i("/customer-login")},2e3),r(!1)}).catch(v=>{t.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),r(!1)})},u=()=>{h(!l)},g=()=>{j(!n)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(E,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"سجل معنا كمستخدم":"Sign Up as a Customer"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="en"?"For better purchasing experience":"لتجربة شراء افضل"}),e.jsxs("form",{id:"customer-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:w,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:l?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),l?e.jsx(x,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:u}):e.jsx(f,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:u})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:n?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),n?e.jsx(x,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g}):e.jsx(f,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(C,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:a.language==="ar"?"جارٍ التحميل...":"Loading..."})]}):a.language==="ar"?"اشترك":"Sign up"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(F,{role:"user"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب بالفعل؟":"Already have an account?"," ",e.jsx(L,{to:"/customer-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{U as default};
