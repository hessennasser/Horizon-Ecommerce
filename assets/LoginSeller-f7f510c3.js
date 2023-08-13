import{d as j,u as b,r as u,j as e,e as w,f as N,L as x,Q as r,a as S,b as v}from"./index-d1014b71.js";import{B as y}from"./styles-3a22774b.js";import{S as L}from"./Tooltip-5751ea5d.js";import{G as k}from"./GoogleSignInButton-2478d304.js";import"./horizon-logo-035e306d.js";import"./index.esm-60c4b5b5.js";import"./floating-ui.dom-9d44cd4e.js";const G=()=>{const i=j(),{i18n:a}=b(),[l,p]=u.useState(!1),[c,s]=u.useState(!1);if(localStorage.getItem("sellerLogged")){i("/dashboard");return}const f=t=>{t.preventDefault();const g=t.target.email.value,o=t.target.password.value,h={email:g,password:o};if(s(!0),!o||!g){r.error(a.language==="en"?"please fill all fields":"برجاء ملئ جميع الحقول"),s(!1);return}if(o.length<6){r.error(a.language==="en"?"password must be at least 6 characters":"كلمة المرور يجب ان تكون علي الاقل 6 احرف"),s(!1);return}S.post(`${v}/vendor/auth/login`,h).then(n=>{r.success("Logged in");const m=n.data.user;m.token=n.data.access_token,localStorage.clear(),localStorage.setItem("sellerToken",JSON.stringify(m.token)),localStorage.setItem("sellerLogged",!0),i("/dashboard"),s(!1)}).catch(n=>{r.error(a.language==="en"?"the email or password is incorrect":"البريد الالكتروني او كلمة المرور غير صحيحه"),s(!1)})},d=()=>{p(!l)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(y,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="en"?"Log in as a Seller":"سجل دخولك كبائع"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="en"?"For Your better experience":"لجعل تجربتك افضل"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:f,children:[e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:l?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),l?e.jsx(w,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d}):e.jsx(N,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:d})]}),e.jsx(x,{to:"/forget-password",children:e.jsx("span",{className:"flex justify-end text-red-600",children:a.language==="en"?"Forget Password ?":"هل نسيت كلمة المرور؟"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:c,children:c?e.jsxs(e.Fragment,{children:[e.jsx(L,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):a.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(k,{role:"user"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsx(x,{to:"/seller-signup",className:"text-secondColor font-bold",children:a.language==="ar"?"اشترك معنا":"Signup"})]})]})})]})})};export{G as default};
