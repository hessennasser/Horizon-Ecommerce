import{u as f,r as h,e as b,j as e,L as n,F as N,E as w,I as C,J as k}from"./index-f346a097.js";import{l as v}from"./horizon-logo-035e306d.js";const L=({isSidebarOpen:r,toggleSidebar:o})=>{const{i18n:l,t:d}=f(),{categories:x,userName:c}=h.useContext(b),g=localStorage.getItem("userLogged"),j=localStorage.getItem("sellerLogged"),[i,m]=h.useState([]),u=s=>{i.includes(s)?m(i.filter(t=>t!==s)):m([...i,s])},p=s=>x.filter(t=>t.parent===s);return e.jsxs("aside",{className:`sidebar ${r?"show-sidebar":!1}`,children:[e.jsxs("div",{className:"sidebar-header bg-mainColor text-white",children:[e.jsx(n,{to:"/",children:e.jsx("img",{src:v,alt:"",className:"w-16 md:w-24 mx-auto mb-4"})}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("button",{"aria-label":"close sidebar",className:"close-btn",onClick:o,children:e.jsx(N,{})}),g||j?e.jsx(e.Fragment,{children:e.jsx("h3",{className:"text-sm md:text-lg",children:l.language==="en"?`Welcome Back.${c}`:`مرحباً بعودتك، ${c}`})}):e.jsxs(e.Fragment,{children:[e.jsx(n,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:d("mainHeader.signUpSellerBtn")})}),e.jsx(n,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:d("mainHeader.signUpCustomerBtn")})})]})]})]}),e.jsxs("div",{className:"flex flex-col text-start  overflow-x-hidden",children:[e.jsx("h3",{className:"text-center bg-secondColor text-white py-3 text-lg",children:l.language==="en"?"Shop from different categories":"تسوق من الفئات المختلفه"}),e.jsx("ul",{className:"links overflow-y-auto overflow-x-hidden",children:x.map(s=>{if(s.parent===null){const t=p(s.id);return t.length>0?e.jsxs("li",{className:"link font-bold",children:[e.jsxs("button",{className:"flex items-center justify-between w-full text-md capitalize py-4 px-8 text-mainColor",onClick:()=>u(s.id),children:[l.language==="en"?s.title.en:s.title.ar,e.jsx("span",{children:i.includes(s.id)?e.jsx(w,{}):l.language==="en"?e.jsx(C,{}):e.jsx(k,{})})]}),t.length>0&&i.includes(s.id)&&e.jsxs("ul",{children:[t.slice(0,5).map(a=>e.jsx("li",{className:"link child",onClick:()=>{r&&o(!1)},children:e.jsx(n,{to:`/categories/${a.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${l.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} `,children:l.language==="en"?a.title.en:a.title.ar})},a.id)),e.jsx("li",{className:"link child show-more-link text-secondColor underline",children:e.jsx(n,{to:`/all-categories/${s.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${l.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} border-secondColor `,children:l.language==="en"?"Show More":"عرض المزيد"})})]})]},s.id):e.jsx("li",{className:"link font-bold",onClick:()=>{r&&o(!1)},children:e.jsx(n,{to:`/categories/${s==null?void 0:s.id}`,className:"flex items-center justify-between w-full text-md capitalize py-4 px-8 text-mainColor",onClick:()=>u(s.id),children:l.language==="en"?s.title.en:s.title.ar})},s.id)}return null})})]})]})};export{L as default};