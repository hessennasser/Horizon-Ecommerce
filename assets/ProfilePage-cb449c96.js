import{q as Y,u as J,j as e,r as t,n as G,A as Z,a as F,b as O,Q as l}from"./index-f1bf5b72.js";import{F as ee,a as se}from"./index.esm-0e1b9449.js";import{j as L}from"./index.esm-3b9f2c0c.js";import{a as ae}from"./index.esm-7865122d.js";import{B as y,S as B}from"./Tooltip-50befccd.js";import"./index-40912fba.js";import{H as te}from"./index.esm-5065e961.js";import"./iconBase-8d4922f9.js";import"./index.esm-fc592206.js";const le=()=>{const u=Y().pathname.split("/").filter(c=>c!==""),{t:U,i18n:d}=J();return e.jsxs(y,{className:"breadcrumb","aria-label":"breadcrumb",children:[e.jsx(y.Item,{href:"/",icon:te,children:e.jsx("p",{children:d.language==="ar"?"الصفحه الرئيسه":"Home"})}),u.map((c,s)=>e.jsx(y.Item,{href:`/${u.slice(0,s+1).join("/")}`,children:c==="profile"?d.language==="ar"?"الملف الشخصي":"Profile":c},s))]})},fe=()=>{const r=JSON.parse(localStorage.getItem("userInfo")),u=localStorage.getItem("userLogged");JSON.parse(localStorage.getItem("userToken"));const[U,d]=t.useState({}),c=G(),{i18n:s}=J(),{getUserInfo:N,logout:Q}=t.useContext(Z);if(!u)return c("/customer-login"),null;const[H,S]=t.useState(!1),[$,v]=t.useState(!1),[g,A]=t.useState(!1),[n,m]=t.useState(!1),[C,f]=t.useState(!1),[p,D]=t.useState(r.name),[h,z]=t.useState(r.email),[x,W]=t.useState(r.phone),[w,X]=t.useState(""),[j,V]=t.useState(""),P=()=>{A(!g)},k=()=>{m(!n),f(!1)},E=()=>{f(!C),m(!1)},_=a=>{D(a.target.value)},q=a=>{z(a.target.value)},K=a=>{W(a.target.value)},M=a=>{X(a.target.value)},R=a=>{V(a.target.value)},I=async a=>{a.preventDefault(),S(!0);try{const o=JSON.parse(localStorage.getItem("userToken")),b={token:o,name:p,email:h,phone:x},i=await F.post(`${O}/auth/user-update`,b);i.status===200||i.status===201?l.success("The profile updated successfully"):i.status===401?l.error("There is an error, please try again later"):l.error("There is an error, please try again later"),N(o,d)}catch{l.error("There is an error, please try again later")}finally{S(!1),m(!1)}},T=async a=>{if(a.preventDefault(),!w){l.info(s.language==="en"?"please enter new password":"ادخل كلمة المرور الجديده");return}if(!j){l.info(s.language==="en"?"please enter confirmation password":"ادخل تاكيد كلمة المرور");return}v(!0);try{const o=JSON.parse(localStorage.getItem("userToken")),b={token:o,name:p,phone:x,email:h,password:w,password_confirmation:j},i=await F.post(`${O}/auth/user-update`,b);i.status===200||i.status===201?l.success("The password updated successfully"):i.status===401?l.error("There is an error, please try again later"):l.error("There is an error, please try again later"),N(o,d)}catch{l.error("There is an error, please try again later")}finally{v(!1),f(!1)}};return e.jsxs("div",{className:"container py-10",children:[e.jsx("div",{className:"mb-10",children:e.jsx(le,{})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 my-5",children:[e.jsxs("div",{className:"user-info col-span-3 md:col-span-1 bg-white p-3 shadow-lg rounded-md h-fit",children:[e.jsx("div",{className:"img-holder relative -top-10 overflow-hidden w-32 h-32 bg-[#F28423] rounded-[50%] mx-auto",children:e.jsx("img",{src:r.image||"https://lh3.googleusercontent.com/Xsvl-X4MBLASFz1ha2-zl_LV3Hj4-f1sy73yWwg3QcDiJ-WKWmkQajdiolJ5Sv4oF4QtnQiuBwUsBJQsSEspLYszs1UFXf-rUhIx-00T",className:"h-full w-full",alt:r.name})}),e.jsxs("div",{className:"info flex flex-col justify-center items-center gap-3",children:[e.jsx("h3",{children:r.name}),e.jsx("h3",{className:"text-sm md:text-md",children:r.email})]}),e.jsxs("div",{className:"actions mt-10 flex flex-col justify-center items-center gap-3",children:[e.jsxs("button",{className:"flex items-center gap-2",onClick:k,children:[e.jsx(L,{})," ",s.language==="en"?"Edit Profile":"تعديل بياناتك"]}),e.jsxs("button",{className:"flex items-center gap-2",onClick:E,children:[e.jsx(L,{})," ",s.language==="en"?"Edit Password":"تغيير كلمة المرور"]}),e.jsxs("button",{onClick:Q,className:"flex items-center gap-2",children:[e.jsx(ae,{}),s.language==="en"?"Logout":"تسجيل الخروج"]})]})]}),e.jsxs("div",{className:"col-span-3 md:col-span-2 bg-white p-3 shadow-lg rounded-md",children:[e.jsx("h2",{className:"text-xl font-medium",children:s.language==="ar"?"الملف الشخصي":"Profile"}),e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:I,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"name",children:s.language==="ar"?"الاسم":"Full Name"}),e.jsx("input",{className:"w-full bg-gray-300",id:"name",type:"text",value:p,readOnly:!n,onChange:a=>{n&&_(a)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"phone",children:s.language==="ar"?"رقم الهاتف":"Phone"}),e.jsx("input",{className:"w-full bg-gray-300",id:"phone",type:"tel",value:x,readOnly:!n,onChange:a=>{n&&K(a)}})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col",children:[e.jsx("label",{htmlFor:"email",children:s.language==="ar"?"البريد الالكتروني":"Email"}),e.jsx("input",{className:"w-full bg-gray-300",id:"email",type:"email",value:h,readOnly:!n,onChange:a=>{n&&q(a)}})]}),n&&e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:I,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:H?e.jsx(B,{"aria-label":"loading...",color:"purple"}):s.language==="ar"?"حفظ التعديلات":"Save Changes"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:k,children:s.language==="ar"?"الغاء":"Cancel"})]})]}),C&&e.jsxs("form",{className:"flex flex-col gap-5 items-center my-5",onSubmit:T,children:[e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"new-password",children:s.language==="ar"?"كلمة المرور الجديده":"New Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"new-password",type:g?"text":"password",value:w,onChange:M}),g?e.jsx(ee,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:P}):e.jsx(se,{className:`absolute ${s.language==="en"?"right-3":"left-3"} top-1/2 transform translate-y-1/2 cursor-pointer`,onClick:P})]}),e.jsxs("div",{className:"flex w-full gap-2 justify-between flex-col relative",children:[e.jsx("label",{htmlFor:"confirm-password",children:s.language==="ar"?"اعد كتابة كلمة المرور":"Confirm Password"}),e.jsx("input",{className:"w-full bg-gray-300",id:"confirm-password",type:g?"text":"password",value:j,onChange:R})]}),e.jsxs("div",{className:"w-full grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:T,className:"m-0 bg-secondColor py-2 rounded-xl text-white",type:"submit",children:$?e.jsx(B,{"aria-label":"loading...",color:"purple"}):s.language==="ar"?"حفظ كلمة المرور":"Uptade Password"}),e.jsx("button",{className:"py-2 rounded-xl border border-secondColor text-secondColor",type:"button",onClick:E,children:s.language==="ar"?"الغاء":"Cancel"})]})]})]})]})]})};export{fe as default};
