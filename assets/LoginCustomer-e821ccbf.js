import{m as j,u as w,r as m,j as e,n as N,o as b,L as x,Q as r,h as S,i as v}from"./index-eb7a8296.js";import{B as y}from"./styles-bc4f3c94.js";import{S as L}from"./Tooltip-925eeecd.js";import"./horizon-logo-035e306d.js";import"./index.esm-68e80ad7.js";import"./floating-ui.dom-9d44cd4e.js";const B=()=>{const i=j(),{i18n:s}=w(),[t,p]=m.useState(!1),[c,a]=m.useState(!1);if(localStorage.getItem("userLogged")){i("/profile");return}const f=l=>{l.preventDefault();const d=l.target.email.value,o=l.target.password.value,h={email:d,password:o};if(a(!0),!o||!d){r.error(s.language==="en"?"please fill all fields":"برجاء ملئ جميع الحقول"),a(!1);return}if(o.length<6){r.error(s.language==="en"?"password must be at least 6 characters":"كلمة المرور يجب ان تكون علي الاقل 6 احرف"),a(!1);return}S.post(`${v}/auth/login`,h).then(n=>{r.success(s.language==="en"?"You are logged in successfully":"تم تسجيل الدخول بنجاح");const u=n.data.user;u.token=n.data.access_token,localStorage.clear(),localStorage.setItem("userToken",JSON.stringify(u.token)),localStorage.setItem("userLogged",!0),i("/home"),a(!1)}).catch(n=>{r.error(s.language==="en"?"the email or password is incorrect":"البريد الالكتروني او كلمة المرور غير صحيحه"),a(!1)})},g=()=>{p(!t)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(y,{}),e.jsx("div",{className:`bg-white ${s.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:s.language==="en"?"Log in as a Customer":"سجل دخولك كمستخدم"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:s.language==="en"?"For Your better experience":"لجعل تجربتك افضل"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:f,children:[e.jsx("input",{placeholder:s.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:s.language==="ar"?"كلمة المرور":"Password",type:t?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),t?e.jsx(N,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g}):e.jsx(b,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g})]}),e.jsx(x,{to:"/forget-password",children:e.jsx("span",{className:"flex justify-end text-red-600",children:s.language==="en"?"Forget Password ?":"هل نسيت كلمة المرور؟"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(L,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):s.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("p",{className:"mt-4 text-lg",children:[s.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsxs(x,{to:"/customer-signup",className:"text-secondColor font-bold",children:[" ",s.language==="ar"?"اشترك معنا":"Signup"]})]})]})})]})})};export{B as default};
