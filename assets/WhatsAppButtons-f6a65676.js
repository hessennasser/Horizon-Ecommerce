import{u as d,r as o,e as x,j as e,F as p,ac as u}from"./index-dc3c069d.js";const h=()=>{const{i18n:n}=d(),[i,s]=o.useState(!1),{whatsApp:t}=o.useContext(x),a=()=>{window.scrollY>200?s(!0):(s(!1),l(!1))};o.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]);const[r,l]=o.useState(!1),c=()=>{l(!r)};return e.jsxs(e.Fragment,{children:[r&&e.jsxs("div",{className:"w-[300px] fixed bottom-10 start-4 sm:start-8 z-[10000] bg-white mb-20 rtl overflow-hidden flex flex-col border rounded border-green-500",children:[e.jsx("div",{className:"bg-mainColor py-10 px-5 box-border text-white text-center",children:n.language==="en"?t.title.en:t.title.ar}),e.jsx("div",{className:"py-10 px-5 box-border text-gray-85 text-center",children:n.language==="en"?t.description.en:t.description.ar}),e.jsx("a",{href:`https://api.whatsapp.com/send?phone=20${t.number}`,target:"_blank",rel:"noopener noreferrer",className:"block box-border text-white bg-secondColor text-center cursor-pointer w-fit px-5 mx-auto my-10 rounded-full no-underline",children:n.language==="en"?t.button.en:t.button.ar})]}),e.jsx("button",{onClick:c,"data-toggle":"back-to-top","aria-label":"Scroll To Top",className:`z-[10000000000000000] fixed rounded-full start-5 h-14 w-14 text-center bg-secondColor bg-opacity-70 text-2xl grid place-content-center text-white justify-center items-center transition-all duration-300 animate-bounce ${i?"bottom-10":"-bottom-18"} backdrop-blur-lg`,children:r?e.jsx(p,{}):e.jsx(u,{})})]})};export{h as default};
