import{f as j,u as b,r as m,j as e,g as w,h as N,L as x,S as y,Q as r,a as v,b as S}from"./index-910228ac.js";import{B as L}from"./styles-83fe15bb.js";import{G as k}from"./GoogleSignInButton-43cb3676.js";import"./horizon-logo-035e306d.js";const $=()=>{const i=j(),{i18n:s}=b(),[l,p]=m.useState(!1),[c,a]=m.useState(!1);if(localStorage.getItem("userLogged")){i("/profile");return}const f=t=>{t.preventDefault();const g=t.target.email.value,o=t.target.password.value,h={email:g,password:o};if(a(!0),!o||!g){r.error(s.language==="en"?"please fill all fields":"برجاء ملئ جميع الحقول"),a(!1);return}if(o.length<6){r.error(s.language==="en"?"password must be at least 6 characters":"كلمة المرور يجب ان تكون علي الاقل 6 احرف"),a(!1);return}v.post(`${S}/auth/login`,h).then(n=>{r.success(s.language==="en"?"You are logged in successfully":"تم تسجيل الدخول بنجاح");const u=n.data.user;u.token=n.data.access_token,localStorage.clear(),localStorage.setItem("userToken",JSON.stringify(u.token)),localStorage.setItem("userLogged",!0),i("/home"),a(!1)}).catch(n=>{r.error(s.language==="en"?"the email or password is incorrect":"البريد الالكتروني او كلمة المرور غير صحيحه"),a(!1)})},d=()=>{p(!l)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(L,{}),e.jsx("div",{className:`bg-white ${s.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:s.language==="en"?"Log in as a Customer":"سجل دخولك كمستخدم"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:s.language==="en"?"For Your better experience":"لجعل تجربتك افضل"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:f,children:[e.jsx("input",{placeholder:s.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:s.language==="ar"?"كلمة المرور":"Password",type:l?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),l?e.jsx(w,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d}):e.jsx(N,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d})]}),e.jsx(x,{to:"/forget-password",children:e.jsx("span",{className:"flex justify-end text-red-600",children:s.language==="en"?"Forget Password ?":"هل نسيت كلمة المرور؟"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(y,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):s.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:s.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(k,{role:"user"}),e.jsxs("p",{className:"mt-4 text-lg",children:[s.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsxs(x,{to:"/customer-signup",className:"text-secondColor font-bold",children:[" ",s.language==="ar"?"اشترك معنا":"Signup"]})]})]})})]})})};export{$ as default};
