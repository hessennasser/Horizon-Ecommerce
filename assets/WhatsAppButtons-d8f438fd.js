import{u as b,r as o,j as e,F as f,a as h,b as m}from"./index-90b8ff94.js";import{g}from"./index.esm-89a6a78b.js";const y=()=>{const{i18n:r}=b(),[i,a]=o.useState(!1),l=()=>{window.scrollY>200?a(!0):(a(!1),c(!1))};o.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]);const[s,c]=o.useState(!1),d=()=>{c(!s)},[t,p]=o.useState({}),u=async()=>{try{const n=await h(`${m}/whatsapp`),{data:x}=n;p(x.data)}catch(n){console.log(n)}};return o.useEffect(()=>{u()},[]),e.jsxs(e.Fragment,{children:[s&&e.jsxs("div",{className:"w-[300px] sticky bottom-28 start-2 sm:start-8 z-[10000] bg-white mb-20 rtl overflow-hidden flex flex-col border rounded border-green-500",children:[e.jsx("div",{className:"bg-mainColor py-10 px-5 box-border text-white text-center",children:r.language==="en"?t.title.en:t.title.ar}),e.jsx("div",{className:"py-10 px-5 box-border text-gray-85 text-center",children:r.language==="en"?t.description.en:t.description.ar}),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=20${t.number}`,target:"_blank",rel:"noopener noreferrer",className:"block box-border text-white bg-secondColor text-center cursor-pointer w-fit px-5 mx-auto my-10 rounded-full no-underline",children:r.language==="en"?t.button.en:t.button.ar})]}),e.jsx("button",{onClick:d,"data-toggle":"back-to-top","aria-label":"Scroll To Top",className:`z-[10000000000000000] fixed rounded-full start-5 h-14 w-14 text-center bg-secondColor bg-opacity-70 text-2xl grid place-content-center text-white justify-center items-center transition-all duration-300 animate-bounce ${i?"bottom-10":"-bottom-18"} backdrop-blur-lg`,children:s?e.jsx(f,{}):e.jsx(g,{})})]})};export{y as default};
