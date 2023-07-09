import{c as j,u as N,r as d,j as e,L as g,a as b,b as w,Q as m}from"./index-7e5f059a.js";import{B as S,c as v}from"./circle-1-0b5008e3.js";import{F as y,a as L}from"./index.esm-d5f2e9cc.js";import{S as k}from"./Tooltip-882b8fe9.js";import"./index-88530db2.js";import"./horizon-logo-035e306d.js";import"./iconBase-cfc4fc52.js";import"./index.esm-15916565.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-f39c121c.js";const J=()=>{const o=j(),{i18n:s}=N(),[t,u]=d.useState(!1),[n,r]=d.useState(!1);if(localStorage.getItem("userLogged")){o("/profile");return}const p=l=>{l.preventDefault();const x=l.target.email.value,f=l.target.password.value,h={email:x,password:f};r(!0),b.post(`${w}/auth/login`,h).then(a=>{m.success("Logged in");const c=a.data.user;c.token=a.data.access_token,localStorage.clear(),localStorage.setItem("userToken",JSON.stringify(c.token)),localStorage.setItem("userLogged",!0),o("/home"),r(!1)}).catch(a=>{m.error(a.response.data.error),r(!1)})},i=()=>{u(!t)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(S,{}),e.jsx("div",{className:`bg-white ${s.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsxs("div",{className:"relative mb-7",children:[e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:s.language==="en"?"Log in as a Customer":"سجل دخولك كمستخدم"}),e.jsx("img",{className:"absolute -top-14 -right-7 w-2/3 hidden md:block",src:v,alt:"horizon"})]}),e.jsx("p",{className:"mb-2 text-secondColor",children:s.language==="en"?"For Your better experience":"لجعل تجربتك افضل"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:p,children:[e.jsx("input",{placeholder:s.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:s.language==="ar"?"كلمة المرور":"Password",type:t?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),t?e.jsx(y,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:i}):e.jsx(L,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:i})]}),e.jsx(g,{to:"/forget-password",children:e.jsx("span",{className:"flex justify-end text-red-600",children:s.language==="en"?"Forget Password ?":"هل نسيت كلمة المرور؟"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(k,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):s.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("p",{className:"mt-4 text-lg",children:[s.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsxs(g,{to:"/customer-signup",className:"text-secondColor font-bold",children:[" ",s.language==="ar"?"اشترك معنا":"Signup"]})]})]})})]})})};export{J as default};
