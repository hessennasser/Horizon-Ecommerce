import{r,j as t}from"./index-473a0862.js";import{f as s}from"./index.esm-53258c13.js";import"./iconBase-6a04ef27.js";function d(){const[n,o]=r.useState(!1),e=()=>{window.scrollY>200?o(!0):o(!1)};r.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[]);const l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return t.jsx(t.Fragment,{children:t.jsx("button",{onClick:l,"data-toggle":"back-to-top","aria-label":"Scroll To Top",className:`fixed rounded-full z-10 end-5 h-14 w-14 text-center bg-secondColor bg-opacity-70 text-2xl grid place-content-center text-white justify-center items-center transition-all duration-300 animate-bounce ${n?"bottom-10":"-bottom-18"} backdrop-blur-lg`,children:t.jsx(s,{})})})}export{d as default};
