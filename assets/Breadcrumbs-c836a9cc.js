import{e as i,u as n,j as a}from"./index-473a0862.js";import{B as e}from"./Tooltip-0ce6ecf7.js";import{H as c}from"./index.esm-ebc16cab.js";const h=()=>{const o=i().pathname.split("/").filter(r=>r!==""),{t:l,i18n:s}=n();return a.jsxs(e,{className:"breadcrumb","aria-label":"breadcrumb",children:[a.jsx(e.Item,{href:"/",icon:c,children:a.jsx("p",{children:s.language==="ar"?"الصفحه الرئيسه":"Home"})}),o.map((r,t)=>a.jsx(e.Item,{href:`/${o.slice(0,t+1).join("/")}`,children:r==="profile"?s.language==="ar"?"الملف الشخصي":"Profile":r},t))]})};export{h as B};
