import{r as a,A as v,u as I,j as e,L as o}from"./index-a8b0e88a.js";import{T as Q,D as L}from"./Tooltip-183ac651.js";import"./index-65b96108.js";import{b as x,c as h,d as R,e as D}from"./index.esm-68b9c075.js";import{l as G}from"./horizon-logo-035e306d.js";import{a as M,b as J}from"./index.esm-73724143.js";import{G as B}from"./iconBase-00662f4b.js";import{b as P,c as E,d as W,e as X}from"./index.esm-3fcdc6ab.js";import{a as V}from"./index.esm-21554dba.js";import{B as Y}from"./index.esm-9f5e348f.js";import{u as w}from"./user-image-placeholder-50f80e46.js";import"./index.esm-9f6b29de.js";import"./floating-ui.dom.browser.min-b2afe59a.js";import"./index.esm-2fb740e7.js";function q(n){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(n)}function K(n){return B({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"}}]})(n)}const _=({image:n,name:c})=>{const{logout:m}=a.useContext(v),{i18n:t}=I(),r=localStorage.getItem("sellerLogged");return e.jsx("div",{className:`submenu z-[10000] absolute rounded-lg shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] p-8 ${t.language==="en"?"right-2":"left-2"} top-12 text-black`,children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex items-center gap-5 pb-4 border-b border-b-gray-300",children:[e.jsx("img",{src:n||"https://lh3.googleusercontent.com/Xsvl-X4MBLASFz1ha2-zl_LV3Hj4-f1sy73yWwg3QcDiJ-WKWmkQajdiolJ5Sv4oF4QtnQiuBwUsBJQsSEspLYszs1UFXf-rUhIx-00T",className:"w-12 h-12 bg-secondColor rounded-full",alt:c}),e.jsx("p",{className:"font-bold",children:c})]}),e.jsxs("div",{className:"flex flex-col gap-3 pb-4 border-b border-b-gray-300",children:[e.jsxs(o,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{})," ",t.language==="en"?"My account":"حسابي"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]}),r&&e.jsxs(o,{to:"/dashboard",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(K,{})," ",t.language==="en"?"Dashbaord":"لوحة التحكم"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]}),r?e.jsxs(o,{to:"/orders",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{})," ",t.language==="en"?"My Orders":"الطلبات"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]}):e.jsxs(o,{to:"/payments",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{})," ",t.language==="en"?"Payments":"المدفوعات"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]}),e.jsxs(o,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{})," ",t.language==="en"?"Settings":"الاعدادات"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(o,{to:"/contact-us",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(V,{})," ",t.language==="en"?"Support":"الدعم"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]}),e.jsxs("button",{onClick:m,className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{})," ",t.language==="en"?"Logout":"تسجيل الخروج"]}),t.language==="en"?e.jsx(x,{}):e.jsx(h,{})]})]})]})})},Z=()=>{const{t:n,i18n:c}=I(),[m,t]=a.useState([]),r=JSON.parse(localStorage.getItem("userToken")),s=localStorage.getItem("userLogged"),f=JSON.parse(localStorage.getItem("sellerToken")),d=localStorage.getItem("sellerLogged"),{products:p,getCartItems:i,getTotalPriceInCart:A,total:S}=a.useContext(v),{showSubMenu:N,setShowSubMenu:k}=a.useContext(v),[j,F]=a.useState(""),[C,y]=a.useState([]),z=a.useRef(null),H=l=>{l.stopPropagation(),k(!N)};a.useEffect(()=>{s&&r&&(A(),i(r,t))},[s,r,d,f,S]),a.useEffect(()=>{if(j.trim()!==""&&p){const l=p.filter(b=>b.title.en.toLowerCase().includes(j.toLowerCase())||b.title.ar.toLowerCase().includes(j.toLowerCase()));y(l)}else y([])},[j,p]),a.useEffect(()=>{const l=b=>{N&&!b.target.closest(".sub-menu")&&k(!1),z.current&&!b.target.closest(".search-results")&&y([])};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[N]);const[g,O]=a.useState({}),[u,T]=a.useState({}),{getUserInfo:U,getSallerInfo:$}=a.useContext(v);return a.useEffect(()=>{s&&U(r,O)},[d,f,s,r,S]),a.useEffect(()=>{d&&$(f,T)},[d,f,s,r,S]),e.jsxs("div",{className:"main-header flex items-center justify-between gap-5 flex-col md:flex-row",children:[e.jsxs("div",{className:"flex items-center gap-3 w-full flex-1",children:[e.jsx(o,{to:"/home",className:"flex items-center",children:e.jsx("img",{className:"w-16 md:w-24",src:G,alt:"horizon"})}),e.jsxs("div",{className:"flex-1 w-full text-xs search-holder relative",children:[e.jsx(Q,{id:"search",type:"text",rightIcon:D,placeholder:n("mainHeader.placeholder"),required:!1,value:j,onChange:l=>F(l.target.value),autoComplete:"off"}),C.length>0&&e.jsx("div",{ref:z,className:"search-results px-4 absolute top-12 left-0 w-full max-h-[300px] overflow-y-auto bg-white z-[10000] rounded-lg shadow-md text-secondColor",children:C.length>0?C.map(l=>e.jsx(o,{to:`/product/${l.id}`,children:e.jsxs("div",{className:"search-result-item flex items-center justify-between gap-5 border-b py-1",children:[e.jsx("img",{src:`https://admin.horriizon.com/public/assets/${l.images[0].path}`,alt:c.language==="en"?l.title.en:l.title.ar,className:"w-20"}),e.jsx("h4",{children:c.language==="en"?l.title.en:l.title.ar})]})},l.id)):e.jsx("div",{className:"py-5",children:e.jsx("h4",{className:"no-search-result text-lg text-center text-red-800 capitalize",children:c.language==="en"?"there is no search result to your search words":"لا توجد نتيجه مطابقه لكلمات البحث"})})})]})]}),e.jsx("div",{className:"buttons-holder md:w-fit flex justify-evenly gap-3",children:s||d?e.jsxs("div",{className:"flex items-center justify-center gap-4 relative w-full",children:[s&&e.jsx(o,{to:"/cart",children:e.jsxs("div",{className:"relative p-2",children:[e.jsx(J,{className:"text-xl"}),e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:s?(m==null?void 0:m.length)||0:null})]})}),e.jsxs("button",{className:"flex items-center gap-2",onClick:H,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:s?g.image?`https://admin.horriizon.com/public/assets/${g.image}`:w:u.image?`https://admin.horriizon.com/public/assets/${u.image}`:w,className:"w-12 h-12 bg-secondColor rounded-full",alt:s?g.name:u.name}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:s?g.name:u.name}),d&&e.jsxs("p",{children:["total"," EGY"]})]})]}),e.jsx(q,{className:"text-xl"})]}),N&&e.jsx(_,{name:s?g.name:u.name,image:s?g.image?`https://admin.horriizon.com/public/assets/${g.image}`:w:u.image?`https://admin.horriizon.com/public/assets/${u.image}`:w})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:n("mainHeader.signUpSallerBtn")})}),e.jsx(o,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:n("mainHeader.signUpCustomerBtn")})})]})})]})},ee=({toggleSidebar:n})=>{const[c,m]=a.useState(!1),t=localStorage.getItem("sellerLogged"),r=()=>{m(!c)},{i18n:s,t:f}=I(),d=i=>{s.changeLanguage(i),localStorage.setItem("language",i)};a.useEffect(()=>{const i=localStorage.getItem("language");i&&s.changeLanguage(i)},[]);const p=f("mainHeader.pages");return e.jsxs("nav",{className:"container w-full max-w-[100%] py-3 mt-3 bg-[#44406AEB] flex items-center justify-between gap-3 overflow-hidden",children:[e.jsx("div",{className:"bg-mainColor p-2 rounded-lg hover:brightness-125 flex items-center",onClick:n,children:e.jsxs("button",{className:"flex gap-2 items-center","aria-label":s.language==="en"?"categories":"الفئات",children:[e.jsx(E,{})," ",s.language==="en"?"categories":"الفئات"]})}),e.jsxs("ul",{className:`flex items-center gap-5 absolute duration-300 -top-full md:relative md:top-0 transition-all ${c?"openMenuHeader":""}`,children:[e.jsx("button",{type:"button",className:"md:hidden absolute top-5 right-1/2 translate-x-1/2 text-xl bg-secondColor p-2",onClick:r,"aria-label":s.language==="en"?"languge":"الللغه",children:e.jsx(W,{})}),p.map(i=>!t&&i.id===5?null:e.jsx("li",{children:e.jsx(o,{to:i.link,children:i.name})},i.id))]}),e.jsx("button",{type:"button",className:"md:hidden","aria-label":s.language==="en"?"menu":"القائمه",onClick:r,children:e.jsx(E,{})}),e.jsx("div",{className:"lang-toggler",children:e.jsxs(L,{label:e.jsx(X,{}),"aria-label":"languge",children:[e.jsx(L.Item,{onClick:()=>d("en"),children:"English"}),e.jsx(L.Item,{onClick:()=>d("ar"),children:"Arabic"})]})})]})};const he=({toggleSidebar:n})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-mainColor text-white pt-3 z-[100] sticky top-0",children:[e.jsx("div",{className:"px-5 min-w-[95%] pt-2",children:e.jsx(Z,{})}),e.jsx(ee,{toggleSidebar:n})]})});export{he as default};
