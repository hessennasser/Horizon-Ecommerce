import{g as b,u as w,r as i,f as N,j as e,k as y,l as v,m as S,L,Q as t,a as k,b as C}from"./index-e55d0a2a.js";import{B as E}from"./styles-efaa2237.js";import{G as F}from"./GoogleSignInButton-136561bc.js";import"./horizon-logo-035e306d.js";const A=()=>{const c=b(),{i18n:s}=w(),[r,p]=i.useState(!1),[d,a]=i.useState(!1),x=localStorage.getItem("userLogged"),{whatsApp:f}=i.useContext(N);if(x){c("/profile");return}const h=l=>{l.preventDefault();const u=l.target.email.value,n=l.target.password.value,j={email:u,password:n};if(a(!0),!n||!u){t.error(s.language==="en"?"please fill all fields":"برجاء ملئ جميع الحقول"),a(!1);return}if(n.length<6){t.error(s.language==="en"?"password must be at least 6 characters":"كلمة المرور يجب ان تكون علي الاقل 6 احرف"),a(!1);return}k.post(`${C}/auth/login`,j).then(o=>{t.success(s.language==="en"?"You are logged in successfully":"تم تسجيل الدخول بنجاح");const m=o.data.user;m.token=o.data.access_token,localStorage.clear(),localStorage.setItem("userToken",JSON.stringify(m.token)),localStorage.setItem("userLogged",!0),c("/home"),a(!1)}).catch(o=>{t.error(s.language==="en"?"the email or password is incorrect":"البريد الالكتروني او كلمة المرور غير صحيحه"),a(!1)})},g=()=>{p(!r)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(E,{}),e.jsx("div",{className:`bg-white ${s.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:s.language==="en"?"Log in as a Customer":"سجل دخولك كمستخدم"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:s.language==="en"?"For better purchasing experience":"لتجربة شراء افضل"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:h,children:[e.jsx("input",{placeholder:s.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:s.language==="ar"?"كلمة المرور":"Password",type:r?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),r?e.jsx(y,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g}):e.jsx(v,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g})]}),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=20${f.number}`,target:"_blank",children:e.jsx("span",{className:"flex justify-end text-red-600",children:s.language==="en"?"Forget Password? contact with support":"هل نسيت كلمة المرور؟ تواصل مع الدعم"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(S,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):s.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:s.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(F,{role:"user"}),e.jsxs("p",{className:"mt-4 text-lg",children:[s.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsxs(L,{to:"/customer-signup",className:"text-secondColor font-bold",children:[" ",s.language==="ar"?"اشترك معنا":"Signup"]})]})]})})]})})};export{A as default};
