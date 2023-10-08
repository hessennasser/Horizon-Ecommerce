import{u as b,r as x,f,j as e,L as a,F as N,J as w,K as C,M as k}from"./index-a3ee0e6e.js";import{l as v}from"./horizon-logo-035e306d.js";const S=({isSidebarOpen:m,toggleSidebar:u})=>{const{i18n:t,t:i}=b(),{categories:o,userName:d}=x.useContext(f),g=localStorage.getItem("userLogged"),h=localStorage.getItem("sellerLogged"),[n,c]=x.useState([]),p=s=>{n.includes(s)?c(n.filter(l=>l!==s)):c([...n,s])},j=s=>o.filter(l=>l.parent===s);return e.jsxs("aside",{className:`sidebar ${m?"show-sidebar":!1}`,children:[e.jsxs("div",{className:"sidebar-header bg-mainColor text-white",children:[e.jsx(a,{to:"/",children:e.jsx("img",{src:v,alt:"",className:"w-16 md:w-24 mx-auto mb-4"})}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("button",{"aria-label":"close sidebar",className:"close-btn",onClick:u,children:e.jsx(N,{})}),g||h?e.jsx(e.Fragment,{children:e.jsx("h3",{className:"text-sm md:text-lg",children:t.language==="en"?`Welcome Back.${d}`:`مرحباً بعودتك، ${d}`})}):e.jsxs(e.Fragment,{children:[e.jsx(a,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:i("mainHeader.signUpSellerBtn")})}),e.jsx(a,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:i("mainHeader.signUpCustomerBtn")})})]})]})]}),e.jsxs("div",{className:"flex flex-col text-start  overflow-x-hidden",children:[e.jsx("h3",{className:"text-center bg-secondColor text-white py-3 text-lg",children:t.language==="en"?"Shop from different categories":"تسوق من الفئات المختلفه"}),e.jsx("ul",{className:"links overflow-y-auto overflow-x-hidden",children:o.map(s=>{if(s.parent===null){const l=j(s.id);return e.jsxs("li",{className:"link font-bold",children:[e.jsxs("button",{className:"flex items-center justify-between w-full text-md capitalize py-4 px-8 text-mainColor",onClick:()=>p(s.id),children:[t.language==="en"?s.title.en:s.title.ar,e.jsx("span",{children:n.includes(s.id)?e.jsx(w,{}):t.language==="en"?e.jsx(C,{}):e.jsx(k,{})})]}),l.length>0&&n.includes(s.id)&&e.jsxs("ul",{children:[l.slice(0,5).map(r=>e.jsx("li",{className:"link child",children:e.jsx(a,{to:`/categories/${r.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${t.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} `,children:t.language==="en"?r.title.en:r.title.ar})},r.id)),e.jsx("li",{className:"link child text-secondColor underline",children:e.jsx(a,{to:`/all-categories/${s.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${t.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} border-secondColor `,children:t.language==="en"?"Show More":"عرض المزيد"})})]})]},s.id)}return null})})]})]})};export{S as default};
