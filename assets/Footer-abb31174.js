import{G as n,u as c,j as s,L as i,r as o,e as x,K as d,M as m}from"./index-f346a097.js";import{a as g}from"./index.esm-cdece9f4.js";import{l as h}from"./horizon-logo-035e306d.js";function j(l){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}},{tag:"path",attr:{d:"M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375-.028-.028c-3.905-3.905-3.905-10.237 0-14.142 3.904-3.905 10.236-3.905 14.141 0ZM5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024.002.002 5.378 5.378a.859.859 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489Z"}}]})(l)}const p=()=>{const{i18n:l,t:e}=c(),a=e("mainHeader.pages"),t=localStorage.getItem("sellerLogged");return s.jsxs("div",{className:"flex gap-5 justify-between sm:items-center flex-col sm:flex-row pt-5",children:[s.jsx("ul",{className:"links flex-col md:flex-row flex gap-3",children:a.map(r=>!t&&r.id===a.length?null:s.jsx("li",{children:s.jsx(i,{to:r.link,children:r.name})},r.id))}),s.jsxs("p",{className:"text-gray-400",children:["Copyright © ",new Date().getFullYear()," • ",s.jsx(i,{to:"/",className:"text-white",children:"Horizon"})," • All rights reserved."]})]})},v=()=>{var a,t;const{i18n:l}=c(),{websiteInfo:e}=o.useContext(x);return s.jsx("footer",{className:"bg-mainColor py-10 text-white",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"py-10 grid gap-5 grid-cols-1 sm:grid-cols-3 border-y border-y-gray-700",children:[s.jsx(i,{to:"/",className:"flex items-center justify-start",children:s.jsx("img",{className:"mx-auto w-52",src:h,alt:"horizon"})}),s.jsxs("div",{className:"col-span-2 grid ",children:[s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[s.jsxs("div",{className:"flex items-center gap-2 col-span-2",children:[s.jsx(j,{}),s.jsx("p",{className:"text-sm",children:l.language==="en"?(a=e==null?void 0:e.address)==null?void 0:a.en:(t=e==null?void 0:e.address)==null?void 0:t.ar})]}),s.jsxs("div",{className:"flex items-center gap-2 col-span-2 sm:col-span-1",children:[s.jsx(g,{}),s.jsx("p",{className:"text-sm",children:e==null?void 0:e.phone})]})]}),s.jsxs("div",{className:"mt-5 flex justify-between",children:[s.jsx("p",{className:"text-gray-400 mx-3",children:"Social Media"}),s.jsxs("div",{className:"flex-1 flex gap-3 text-2xl items-center justify-center",children:[s.jsx("a",{href:e.facebook,target:"_blank","aria-label":"facebook",children:s.jsx(d,{})}),s.jsx("a",{href:e.instagram,target:"_blank","aria-label":"instagram",children:s.jsx(m,{})})]})]})]})]}),s.jsx(p,{})]})})};export{v as default};
