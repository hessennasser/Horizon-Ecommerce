import{g as i,u as n,j as a}from"./index-a8b0e88a.js";import{B as e}from"./Tooltip-183ac651.js";import"./index-65b96108.js";import{H as m}from"./index.esm-9f6b29de.js";const b=()=>{const o=i().pathname.split("/").filter(r=>r!==""),{t:l,i18n:s}=n();return a.jsxs(e,{className:"breadcrumb","aria-label":"breadcrumb",children:[a.jsx(e.Item,{href:"/",icon:m,children:a.jsx("p",{children:s.language==="ar"?"الصفحه الرئيسه":"Home"})}),o.map((r,t)=>a.jsx(e.Item,{href:`/${o.slice(0,t+1).join("/")}`,children:r==="profile"?s.language==="ar"?"الملف الشخصي":"Profile":r},t))]})};export{b as B};
