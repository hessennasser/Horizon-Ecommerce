import{G as q,r as n,e as v,u as w,j as e,L as c,m as re,n as p,o as b,p as ie,q as A,s as oe,O as _,t as F,f as ce,T as de,v as xe,w as me,x as P,y as ge,z as J,F as ue,N as he,D as B,C as fe}from"./index-809b93ef.js";import{l as je}from"./horizon-logo-035e306d.js";import{M as pe}from"./index.esm-b6df5c56.js";import{B as be}from"./index.esm-c60fea52.js";import{u as I}from"./user-image-placeholder-58dea756.js";function Ne(i){return q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(i)}function ve(i){return q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"}}]})(i)}const we=({image:i,name:r})=>{const{logout:d}=n.useContext(v),{i18n:t}=w(),o=localStorage.getItem("sellerLogged");return e.jsx("div",{className:`submenu z-[10000] absolute rounded-lg shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] p-8 ${t.language==="en"?"right-2":"left-2"} top-12 text-black`,children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex items-center gap-5 pb-4 border-b border-b-gray-300",children:[e.jsx("img",{src:i||"https://lh3.googleusercontent.com/Xsvl-X4MBLASFz1ha2-zl_LV3Hj4-f1sy73yWwg3QcDiJ-WKWmkQajdiolJ5Sv4oF4QtnQiuBwUsBJQsSEspLYszs1UFXf-rUhIx-00T",className:"w-12 h-12 bg-secondColor rounded-full",alt:r}),e.jsx("p",{className:"font-bold",children:r})]}),e.jsxs("div",{className:"flex flex-col gap-3 pb-4 border-b border-b-gray-300",children:[e.jsxs(c,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(re,{})," ",t.language==="en"?"My account":"حسابي"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]}),o&&e.jsxs(c,{to:"/dashboard",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ie,{})," ",t.language==="en"?"Dashbaord":"لوحة التحكم"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]}),o?e.jsxs(c,{to:"/orders",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{})," ",t.language==="en"?"My Orders":"الطلبات"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]}):e.jsxs(c,{to:"/payments",className:"flex items-center justify-between font-medium",children:[o?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{})," ",t.language==="en"?"Payments":"المدفوعات"]}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{})," ",t.language==="en"?"purchases":"المشتريات"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]}),e.jsxs(c,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(oe,{})," ",t.language==="en"?"Settings":"الاعدادات"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(c,{to:"/contact-us",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(pe,{})," ",t.language==="en"?"Support":"الدعم"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]}),e.jsxs("button",{onClick:d,className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(be,{})," ",t.language==="en"?"Logout":"تسجيل الخروج"]}),t.language==="en"?e.jsx(p,{}):e.jsx(b,{})]})]})]})})},ye=({ref:i})=>{const{notifications:r,notificationLoading:d,notificationError:t,readAllNotifications:o}=n.useContext(v),{i18n:s}=w();return e.jsxs("div",{ref:i,className:`notifications submenu z-[10000] absolute rounded-lg overflow-hidden shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] ${s.language==="en"?"right-2":"left-2"} top-12 text-black`,children:[e.jsx("div",{className:"px-8 py-2 border-b",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{className:"font-semibold",children:"Notifications"}),e.jsx("div",{className:"ms-auto",children:e.jsx("button",{type:"button",onClick:()=>{o()},className:"text-sm text-gray-600",children:"Mark all as read"})})]})}),e.jsxs("div",{className:"notifications-body overflow-y-auto max-h-[50dvh] ",children:[d&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx(_,{height:50,width:50,color:"#125ed4",secondaryColor:"#060047"})}),!d&&t&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:s.language==="en"?"Error loading notifications":"يوجد خطأ، حاول مره اخري"})}),!t&&!d&&r.length>0?r==null?void 0:r.slice().reverse().slice(0,3).map((a,h)=>e.jsxs("div",{class:"relative flex items-center bg-white hover:bg-blue-400/10 px-8 py-2",children:[e.jsx("div",{class:"me-3 h-10 w-10 grid items-center justify-center bg-primary brround box-shadow-primary",children:e.jsx(F,{className:"text-2xl"})}),e.jsxs("div",{class:"w-full",children:[e.jsx("h5",{class:"notification-label mb-1",children:a.title}),e.jsx("div",{class:"flex items-center justify-end w-full",children:a.read_at===null&&e.jsx("span",{class:" absolute bottom-2 end-2 bg-secondColor text-white text-xs p-1 rounded-lg",children:"New"})})]})]},a.id)):e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:s.language==="en"?"No notifications yet":"لا يوجد اشعارات بعد"})})]}),e.jsx(c,{to:"/all-notifications",className:"block w-full py-2 border-t dropdown-item text-center text-gray-600 bg-secondColor/20 hover:bg-secondColor/40 duration-150",children:"View all Notification"})]})},Ce=()=>{const{messages:i,messageLoading:r,messageError:d,readAllMessages:t}=n.useContext(v),{i18n:o}=w();return e.jsxs("div",{className:`messages submenu z-[10000] absolute rounded-lg overflow-hidden shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] ${o.language==="en"?"right-2":"left-2"} top-12 text-black`,children:[e.jsx("div",{className:"px-8 py-2 border-b",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{className:"font-semibold",children:"messages"}),e.jsx("div",{className:"ms-auto",children:e.jsx("button",{type:"button",onClick:t,className:"text-sm text-gray-600",children:"Mark all as read"})})]})}),e.jsxs("div",{className:"messages-body overflow-y-auto max-h-[50dvh]",children:[r&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx(_,{height:50,width:50,color:"#125ed4",secondaryColor:"#060047"})}),!r&&d&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:o.language==="en"?"Error loading messages":"يوجد خطأ، حاول مره اخري"})}),!d&&!r&&i.length>0?i.slice().reverse().slice(0,3).map((s,a)=>s!=null&&s.title.includes("New Order")?e.jsxs(c,{to:"/orders",className:"relative flex items-center text-green-500 bg-white hover:bg-blue-400/10 px-8 py-2",children:[e.jsx("div",{className:"me-3 h-10 w-10 grid items-center justify-center bg-primary brround box-shadow-primary",children:e.jsx(F,{className:"text-2xl"})}),e.jsxs("div",{className:"w-full",children:[e.jsx("h5",{className:"notification-label mb-1",children:s.title}),e.jsx("div",{className:"flex items-center justify-end w-full",children:s.read_at===null&&e.jsx("span",{className:" absolute bottom-2 end-2 bg-secondColor text-white text-xs p-1 rounded-lg",children:"New"})})]})]},s.id):e.jsxs("div",{className:"relative flex items-center bg-white hover:bg-blue-400/10 px-8 py-2",children:[e.jsx("div",{className:"me-3 h-10 w-10 grid items-center justify-center bg-primary brround box-shadow-primary",children:e.jsx(F,{className:"text-2xl"})}),e.jsxs("div",{className:"w-full",children:[e.jsx("h5",{className:"notification-label mb-1",children:s.title}),e.jsx("div",{className:"flex items-center justify-end w-full",children:s.read_at===null&&e.jsx("span",{className:" absolute bottom-2 end-2 bg-secondColor text-white text-xs p-1 rounded-lg",children:"New"})})]})]},s.id)):e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:o.language==="en"?"No messages yet":"لا يوجد رسائل بعد"})})]}),e.jsx(c,{to:"/all-messages",className:"block w-full py-2 border-t dropdown-item text-center text-gray-600 bg-secondColor/20 hover:bg-secondColor/40 duration-150",children:"View all messages"})]})},Se=()=>{var G;const i=ce(),{t:r,i18n:d}=w(),[t,o]=n.useState([]),s=JSON.parse(localStorage.getItem("userToken")),a=localStorage.getItem("userLogged"),h=JSON.parse(localStorage.getItem("sellerToken")),m=localStorage.getItem("sellerLogged"),{categories:N,getCartItems:x,getTotalPriceInCart:E,total:z,sellerTotal:W,mainRequest:Le}=n.useContext(v),{showSubMenu:y,setShowSubMenu:C,notificationMenu:R,setNotificationMenu:S,messagesMenu:H,setMessagesMenu:k,showSearchResult:X,setShowSearchResult:L,searchQuery:T,setSearchQuery:$,setUserName:Y,messagesNumber:M,notificationsNumber:U}=n.useContext(v),[f,Q]=n.useState(""),[V,K]=n.useState([]),O=n.useRef(null),Z=n.useRef(null),ee=l=>{l.stopPropagation(),C(!y),S(!1),k(!1)},se=l=>{l.stopPropagation(),S(!R),C(!1),k(!1)},D=l=>{l.stopPropagation(),k(!H),S(!1),C(!1)};n.useEffect(()=>{a&&s&&(E(),x(s,o))},[a,s,m,h,z]),n.useEffect(()=>{if((f==null?void 0:f.length)>0)L(!0);else{L(!1);return}if(f.trim()!==""&&N){const l=N.filter(j=>j.title.en.toLowerCase().includes(f.toLowerCase())||j.title.ar.toLowerCase().includes(f.toLowerCase()));K(l)}else L(!1)},[f,N]),n.useEffect(()=>{const l=j=>{j.target.closest(".main-header")||(y&&!j.target.closest(".sub-menu")&&C(!1),j.target.closest(".submenu")||(S(!1),k(!1)),O.current&&!j.target.closest(".search-results")&&L(!1))};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},[y,O]);const[g,te]=n.useState({}),[u,ae]=n.useState({}),{getUserInfo:le,getSellerInfo:ne}=n.useContext(v);return n.useEffect(()=>{a&&le(s,te)},[m,h,a,s,z]),n.useEffect(()=>{m&&ne(h,ae)},[m,h,a,s,z]),n.useEffect(()=>{Y(a?g.name:u.name)}),e.jsxs("div",{className:"main-header flex items-center justify-between gap-5 flex-col md:flex-row",children:[e.jsxs("div",{className:"flex items-center gap-3 w-full flex-1",children:[e.jsx(c,{to:"/home",className:"flex items-center",children:e.jsx("img",{className:"w-16 md:w-24",src:je,alt:"horizon"})}),e.jsxs("form",{onSubmit:l=>{l.preventDefault(),Q(l.target.value||""),$(l.target.value||""),i(`/search?q=${T}`)},className:"flex-1 w-full text-xs search-holder relative",children:[e.jsx(de,{id:"search",type:"text",rightIcon:xe,placeholder:r("mainHeader.placeholder"),required:!1,value:T,onChange:l=>{Q(l.target.value||""),$(l.target.value||"")},autoComplete:"off"}),X&&e.jsx("div",{ref:O,className:"search-results px-4 absolute top-12 left-0 w-full max-h-[300px] overflow-y-auto bg-white z-[10000] rounded-lg shadow-md text-secondColor",children:V.length>0&&V.map(l=>e.jsx(c,{to:`/categories/${l.id}`,className:"h-10 flex items-center border-b",children:e.jsx("div",{className:"search-result-item flex items-center justify-between gap-5 py-1",children:e.jsx("h4",{children:d.language==="en"?l.title.en:l.title.ar})})},l.id))})]})]}),e.jsx("div",{className:"buttons-holder md:w-fit flex justify-evenly gap-3",children:a||m?e.jsxs("div",{className:"flex items-center justify-center gap-4 relative w-full",children:[a&&e.jsx(c,{to:"/cart",children:e.jsxs("div",{className:"relative p-2",children:[e.jsx(me,{className:"text-xl"}),e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:a?((G=t[1])==null?void 0:G.length)||0:null})]})}),m&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{button:!0,className:"relative p-2",onClick:D,children:[e.jsx(P,{className:"text-2xl"}),M>0&&e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:M||0})]}),e.jsxs("button",{className:"relative p-2",onClick:se,children:[e.jsx(ve,{className:"text-2xl"}),U>0&&e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:U||0})]})]}),a&&e.jsxs("button",{button:!0,className:"relative p-2",onClick:D,children:[e.jsx(P,{className:"text-2xl"}),M>0&&e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:M||0})]}),H&&e.jsx(Ce,{}),R&&e.jsx(ye,{ref:Z}),e.jsxs("button",{className:"flex items-center gap-2",onClick:ee,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:a?g.image?`https://admin.horriizon.com/public/${g.image}`:I:u.image?`https://admin.horriizon.com/public/${u.image}`:I,className:"w-12 h-12 bg-secondColor rounded-full",alt:a?g.name:u.name}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:a?g.name:u.name}),m&&e.jsxs("p",{children:[W," EGY"]})]})]}),e.jsx(Ne,{className:"text-xl"})]}),y&&e.jsx(we,{name:a?g.name:u.name,image:a?g.image?`https://admin.horriizon.com/public/${g.image}`:I:u.image?`https://admin.horriizon.com/public/${u.image}`:I})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:r("mainHeader.signUpSellerBtn")})}),e.jsx(c,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:r("mainHeader.signUpCustomerBtn")})})]})})]})},ke=({toggleSidebar:i})=>{const[r,d]=n.useState(!1),t=localStorage.getItem("sellerLogged"),o=()=>{d(!r)},{i18n:s,t:a}=w(),h=ge(),m=x=>{s.changeLanguage(x),localStorage.setItem("language",x)};n.useEffect(()=>{const x=localStorage.getItem("language");x&&s.changeLanguage(x)},[]);const N=a("mainHeader.pages");return e.jsxs("nav",{className:"container w-full max-w-[100%] py-3 mt-3 bg-[#44406AEB] flex items-center justify-between gap-3 overflow-hidden",children:[e.jsx("div",{className:"bg-mainColor p-2 rounded-lg hover:brightness-125 flex items-center",onClick:i,children:e.jsxs("button",{className:"flex gap-2 items-center","aria-label":s.language==="en"?"categories":"الفئات",children:[e.jsx(J,{})," ",s.language==="en"?"categories":"الفئات"]})}),e.jsxs("ul",{className:`flex items-center gap-5 absolute duration-300 -top-full lg:relative lg:top-0 transition-all ${r?"openMenuHeader":""}`,children:[e.jsx("button",{type:"button",className:"lg:hidden absolute top-5 right-1/2 translate-x-1/2 text-xl bg-secondColor p-2",onClick:o,"aria-label":s.language==="en"?"language":"اللغة",children:e.jsx(ue,{})}),N.map(x=>!t&&x.id===N.length?null:(h.pathname,x.link,e.jsx("li",{children:e.jsx(he,{onClick:()=>d(!1),to:x.link,className:({isActive:E})=>E?"border-b border-[#0096ff] text-[#0096ff]":"",children:x.name})},x.id)))]}),e.jsx("button",{type:"button",className:"lg:hidden","aria-label":s.language==="en"?"menu":"القائمة",onClick:o,children:e.jsx(J,{})}),e.jsx("div",{className:"lang-toggler",children:e.jsxs(B,{label:e.jsx(fe,{}),"aria-label":"language",children:[e.jsx(B.Item,{onClick:()=>m("en"),children:"English"}),e.jsx(B.Item,{onClick:()=>m("ar"),children:"Arabic"})]})})]})};const Ae=({toggleSidebar:i})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-mainColor text-white pt-3 z-[100] sticky top-0",children:[e.jsx("div",{className:"px-5 min-w-[95%] pt-2",children:e.jsx(Se,{})}),e.jsx(ke,{toggleSidebar:i})]})});export{Ae as default};