import{f as I,u as R,r as l,e as T,j as e,S as A,h as v,k as y,L as d,l as B,Q as t,a as O,b as _}from"./index-5a69e1c4.js";import{B as U}from"./styles-97e82112.js";import{G as V}from"./GoogleSignInButton-0d8cb5b3.js";import"./horizon-logo-035e306d.js";const K=()=>{const g=I(),{i18n:a}=R(),[n,b]=l.useState(!1),[o,w]=l.useState(!1),[u,r]=l.useState(!1),N=localStorage.getItem("sellerLogged"),[S,P]=l.useState(""),[i,C]=l.useState(!1),{governorates:m,getGovernorates:k}=l.useContext(T),F=m.map(s=>({value:s.id,label:s.title.en})),$=m.map(s=>({value:s.id,label:s.title.ar}));if(N)return g("/profile"),null;const q=s=>{s.preventDefault(),r(!0);const E=s.target.fullName.value,L=s.target.email.value,c=s.target.phone.value,h=s.target.password.value,f=s.target.confirmPassword.value,G={name:E,email:L,phone:c,password:h,password_confirmation:f,governorate_id:S,cash_number:c};if(!/^(?:01)(?:0|1|2|5)[0-9]{8}$/.test(c)){t.error(a.language==="en"?"Invalid Egyptian phone number":"رقم هاتف مصري غير صالح"),r(!1);return}if(h!==f){t.error(a.language==="en"?"passwords do not match":"كلمات المرور غير متطابقه"),r(!1);return}if(!i){t.error(a.language==="en"?"Please agree to our policies":"برجاء الموافقة على سياساتنا"),r(!1);return}O.post(`${_}/vendor/auth/register`,G).then(j=>{t.success(a.language==="en"?"you have successfully registered":"تم التسجيل بنجاح"),setTimeout(()=>{g("/seller-login")},2e3),r(!1)}).catch(j=>{console.log(j),t.error(a.language==="en"?"theres is an error, please try again":"يوجد خطأ، برجاء المحاوله مره اخره"),r(!1)}),r(!1)},p=()=>{b(!n)},x=()=>{w(!o)};return l.useEffect(()=>{k()},[]),e.jsx("div",{className:"bg-mainColor",children:e.jsxs("div",{className:"min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-5",children:[e.jsx(U,{}),e.jsx("div",{className:`bg-white ${a.language==="en"?"md:rounded-l-xl":"md:rounded-r-xl"} flex flex-col items-center justify-center py-20`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center w-2/3",children:[e.jsx("div",{className:"relative mb-7",children:e.jsx("h2",{className:"font-bold text-2xl text-center sm:text-3xl",children:a.language==="ar"?"قم بالتسجيل كبائع":"Sign Up as a Seller"})}),e.jsx("p",{className:"mb-2 text-secondColor",children:a.language==="en"?"For a unique selling experience":"لتجربة بيع مميزه"}),e.jsxs("form",{id:"seller-signup-form",className:"flex flex-col gap-4 w-full",onSubmit:q,children:[e.jsx("input",{placeholder:a.language==="ar"?"الاسم الكامل":"Full Name",type:"text",name:"fullName",id:"fullName",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"البريد الإلكتروني":"Email",type:"email",name:"Phone",id:"email",required:!0}),e.jsx("input",{placeholder:a.language==="ar"?"رقم الهاتف":"Phone",type:"tel",name:"phone",id:"phone",required:!0}),e.jsx(A,{name:"governorate",id:"governorate",className:"w-full",onChange:s=>P(s.value),options:a.language==="en"?F:$,placeholder:a.language==="ar"?"اختر المحافظة":"Select Governorate",isRtl:a.language==="ar",isSearchable:!0,required:!0}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"كلمة المرور":"Password",type:n?"text":"password",name:"password",id:"password",className:"w-full",required:!0}),n?e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:p}):e.jsx(y,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:p})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{placeholder:a.language==="ar"?"تأكيد كلمة المرور":"Confirm Password",type:o?"text":"password",name:"confirmPassword",id:"confirmPassword",className:"w-full",required:!0}),o?e.jsx(v,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:x}):e.jsx(y,{className:`absolute ${a.language==="en"?"right-3":"left-3"} top-1/2 transform -translate-y-1/2 cursor-pointer`,onClick:x})]}),e.jsxs("div",{className:"w-full flex items-center gap-3",children:[e.jsx("input",{type:"checkbox",id:"policyCheckbox",name:"policyCheckbox",style:{border:"1px solid gray"},checked:i,onChange:()=>C(!i)}),e.jsx("label",{htmlFor:"policyCheckbox",children:a.language==="en"?e.jsxs(e.Fragment,{children:["I have read and agree to ",e.jsx(d,{to:"/privacy",className:"text-secondColor underline",children:"the Privacy Policy"})]}):e.jsxs(e.Fragment,{children:["لقد قرأت ووافقت على ",e.jsx(d,{to:"/privacy",className:"text-secondColor underline",children:"سياسة الخصوصية"})]})})]}),e.jsx("button",{className:"w-full",type:"submit",disabled:u,children:u?e.jsx(e.Fragment,{children:e.jsx(B,{"aria-label":"loading...",color:"purple"})}):a.language==="ar"?"سجل":"Sign up"})]}),e.jsxs("div",{className:"flex items-center justify-center my-5 w-full",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:a.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsx(V,{role:"seller"}),e.jsxs("p",{className:"mt-4 text-lg",children:[a.language==="ar"?"هل لديك حساب؟":"Already have an account?"," ",e.jsx(d,{to:"/seller-login",className:"text-secondColor font-bold",children:a.language==="ar"?"تسجيل الدخول":"Login"})]})]})})]})})};export{K as default};
