import{u as c,r,j as e}from"./index-473a0862.js";import{g as d}from"./index.esm-53258c13.js";import{F as u}from"./index.esm-8cb06f60.js";import"./iconBase-6a04ef27.js";const h=()=>{const{i18n:t}=c(),[l,s]=r.useState(!1),a=()=>{window.scrollY>200?s(!0):(s(!1),n(!1))};r.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]);const[o,n]=r.useState(!1),i=()=>{n(!o)};return e.jsxs(e.Fragment,{children:[o&&e.jsxs("div",{className:"w-[300px] sticky bottom-28 start-2 sm:start-8 z-[10000] bg-white mb-20 rtl overflow-hidden flex flex-col border rounded border-green-500",children:[e.jsx("div",{className:"bg-mainColor py-10 px-5 box-border text-white text-center",children:t.language==="en"?"Contact us By Whatsapp":"تواصل معنا من خلال واتساب"}),e.jsx("div",{className:"py-10 px-5 box-border text-gray-85 text-center",children:t.language==="en"?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem animi velit, soluta nesciunt eveniet iusto sint facere laudantium voluptatem.":"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها."}),e.jsx("a",{href:"https://api.whatsapp.com/send?phone=",target:"_blank",rel:"noopener noreferrer",className:"block box-border text-white bg-secondColor text-center cursor-pointer w-fit px-5 mx-auto my-10 rounded-full no-underline",children:t.language==="en"?"Contact Us":"تواصل معنا"})]}),e.jsx("button",{onClick:i,"data-toggle":"back-to-top","aria-label":"Scroll To Top",className:`fixed rounded-full z-10 start-5 h-14 w-14 text-center bg-secondColor bg-opacity-70 text-2xl grid place-content-center text-white justify-center items-center transition-all duration-300 animate-bounce ${l?"bottom-10":"-bottom-18"} backdrop-blur-lg`,children:o?e.jsx(u,{}):e.jsx(d,{})})]})};export{h as default};
