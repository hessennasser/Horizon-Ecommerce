import{u as o,r as n,A as c,j as s,L as a}from"./index-07f41fe7.js";import{d as x}from"./index.esm-57f0aeb1.js";import"./iconBase-1692c05c.js";const d="/assets/horizon-logo-black-d732a755.png";const j=({isSidebarOpen:t,toggleSidebar:i})=>{const{i18n:l}=o(),{categories:r}=n.useContext(c);return s.jsxs("aside",{className:`sidebar ${t?"show-sidebar":!1}`,children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx(a,{to:"/home",children:s.jsx("img",{src:d,alt:"horizon",className:"logo"})}),s.jsx("button",{"aria-label":"close sidebar",className:"close-btn",onClick:i,children:s.jsx(x,{})})]}),s.jsxs("div",{className:"flex flex-col text-start",children:[s.jsx("h3",{className:"text-center bg-mainColor text-white py-3 text-lg",children:"Categories"}),s.jsx("ul",{className:"links",children:r.map(e=>s.jsx("li",{className:"link flex justify-start items-center",children:s.jsx(a,{to:`/categories/${e.id}`,className:"flex items-center text-md capitalize py-4 px-6 hover:px-10 duration-300",children:l.language==="en"?e.title.en:e.title.ar})},e.id))})]})]})};export{j as default};
