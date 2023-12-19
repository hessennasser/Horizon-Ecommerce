import{u as b,r as d,e as N,j as e,L as a,F as w,E as C,I as k,J as v}from"./index-809b93ef.js";import{l as L}from"./horizon-logo-035e306d.js";const F=({isSidebarOpen:n,toggleSidebar:i})=>{const{i18n:l,t:x}=b(),{categories:m,userName:u}=d.useContext(N),g=localStorage.getItem("userLogged"),j=localStorage.getItem("sellerLogged"),c=d.useRef(),[r,h]=d.useState([]),f=s=>{r.includes(s)?h(r.filter(t=>t!==s)):h([...r,s])};d.useEffect(()=>{const s=t=>{n&&c.current&&!c.current.contains(t.target)&&t.target.tagName!=="NAV"&&!t.target.closest("nav")&&i(!1)};return n&&document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[n,i]);const p=s=>m.filter(t=>t.parent===s);return e.jsxs("aside",{ref:c,className:`sidebar ${n?"show-sidebar":!1}`,children:[e.jsxs("div",{className:"sidebar-header bg-mainColor text-white",children:[e.jsx(a,{to:"/",children:e.jsx("img",{src:L,alt:"",className:"w-16 md:w-24 mx-auto mb-4"})}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("button",{"aria-label":"close sidebar",className:"close-btn",onClick:i,children:e.jsx(w,{})}),g||j?e.jsx(e.Fragment,{children:e.jsx("h3",{className:"text-sm md:text-lg",children:l.language==="en"?`Welcome Back.${u}`:`مرحباً بعودتك، ${u}`})}):e.jsxs(e.Fragment,{children:[e.jsx(a,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:x("mainHeader.signUpSellerBtn")})}),e.jsx(a,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:x("mainHeader.signUpCustomerBtn")})})]})]})]}),e.jsxs("div",{className:"flex flex-col text-start  overflow-x-hidden",children:[e.jsx("h3",{className:"text-center bg-secondColor text-white py-3 text-lg",children:l.language==="en"?"Shop from different categories":"تسوق من الفئات المختلفه"}),e.jsx("ul",{className:"links overflow-y-auto overflow-x-hidden",children:m.map(s=>{if(s.parent===null){const t=p(s.id);return t.length>0?e.jsxs("li",{className:"link font-bold",children:[e.jsxs("button",{className:"flex items-center justify-between w-full text-md capitalize py-4 px-8 text-mainColor",onClick:()=>f(s.id),children:[l.language==="en"?s.title.en:s.title.ar,e.jsx("span",{children:r.includes(s.id)?e.jsx(C,{}):l.language==="en"?e.jsx(k,{}):e.jsx(v,{})})]}),t.length>0&&r.includes(s.id)&&e.jsxs("ul",{children:[t.slice(0,5).map(o=>e.jsx("li",{className:"link child",onClick:()=>{n&&i(!1)},children:e.jsx(a,{to:`/categories/${o.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${l.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} `,children:l.language==="en"?o.title.en:o.title.ar})},o.id)),e.jsx("li",{className:"link child show-more-link text-secondColor underline",children:e.jsx(a,{to:`/all-categories/${s.id}`,className:`flex items-center text-md capitalize py-2 px-6 ${l.language==="en"?"translate-x-14 border-l-2":"-translate-x-14 border-r-2"} border-secondColor `,children:l.language==="en"?"Show More":"عرض المزيد"})})]})]},s.id):e.jsx("li",{className:"link font-bold",onClick:()=>{n&&i(!1)},children:e.jsx(a,{to:`/categories/${s==null?void 0:s.id}`,className:"flex items-center justify-between w-full text-md capitalize py-4 px-8 text-mainColor",onClick:()=>f(s.id),children:l.language==="en"?s.title.en:s.title.ar})},s.id)}return null})})]})]})};export{F as default};