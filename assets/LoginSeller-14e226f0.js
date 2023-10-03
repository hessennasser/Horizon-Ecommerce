import{g as b,u as w,r as i,f as N,j as e,k as v,l as y,m as S,L,Q as l,a as k,b as C}from"./index-41a87d18.js";import{B as E}from"./styles-0b245a9d.js";import{G as F}from"./GoogleSignInButton-db6b14dd.js";import"./horizon-logo-035e306d.js";const q=()=>{const c=b(),{i18n:a}=w(),[r,x]=i.useState(!1),[d,s]=i.useState(!1),p=localStorage.getItem("sellerLogged"),{whatsApp:f}=i.useContext(N);if(p){c("/dashboard");return}const h=t=>{t.preventDefault();const u=t.target.email.value,n=t.target.password.value,j={email:u,password:n};if(s(!0),!n||!u){l.error(a.language==="en"?"please fill all fields":"برجاء ملئ جميع الحقول"),s(!1);return}if(n.length<6){l.error(a.language==="en"?"password must be at least 6 characters":"كلمة المرور يجب ان تكون علي الاقل 6 احرف"),s(!1);return}k.post(`${C}/vendor/auth/login`,j).then(o=>{l.success("Logged in");const m=o.data.user;m.token=o.data.access_token,localStorage.clear(),localStorage.setItem("sellerToken",JSON.stringify(m.token)),localStorage.setItem("sellerLogged",!0),c("/dashboard"),s(!1)}).catch(o=>{l.error(a.language==="en"?"the email or password is incorrect":"البريد الالكتروني او كلمة المرور غير صحيحه"),s(!1)})},g=()=>{x(!r)};return e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(E,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="en"?"Log in as a Seller":"سجل دخولك كبائع"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="en"?"For a unique selling experience":"لتجربة بيع مميزه"}),e.jsxs("form",{id:"customer-login-form",className:"flex flex-col gap-4 w-full",onSubmit:h,children:[e.jsx("input",{placeholder:a.language==="ar"?"البريد الاللكتروني":"Email",type:"email",name:"email",id:"email"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:r?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),r?e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g}):e.jsx(y,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:g})]}),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=20${f.number}`,target:"_blank",children:e.jsx("span",{className:"flex justify-end text-red-600",children:a.language==="en"?"Forget Password? contact with support":"هل نسيت كلمة المرور؟ تواصل مع الدعم"})}),e.jsx("button",{className:"w-full",type:"submit",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(S,{"aria-label":"loading...",color:"purple"}),e.jsx("span",{className:"pl-3",children:"Loading..."})]}):a.language==="ar"?"تسجيل الدخول ":"Sign in"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(F,{role:"seller"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"ليس لديك حساب؟ ":"Don't have an account?",e.jsx(L,{to:"/seller-signup",className:"text-secondColor font-bold",children:a.language==="ar"?"اشترك معنا":"Signup"})]})]})})]})})};export{q as default};
