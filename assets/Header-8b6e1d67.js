import{G as B,r as t,l as S,u as N,j as e,L as x,o as f,p as j,q as R,s as xe,O as V,v as ue,w as he,x as fe,i as Q}from"./index-dacabe2e.js";import{T as je,D as E}from"./Tooltip-b3c3c2f6.js";import{l as pe}from"./horizon-logo-035e306d.js";import{c as be,d as P,F as Ne,e as ve}from"./index.esm-affce43c.js";import{a as we}from"./index.esm-e1826d43.js";import{B as ye}from"./index.esm-cb8d90cc.js";import{u as y}from"./user-image-placeholder-50f80e46.js";import"./index.esm-6122411f.js";import"./floating-ui.dom-9d44cd4e.js";function Se(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(i)}function Ce(i){return B({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"}}]})(i)}function Me(i){return B({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"}}]})(i)}const Le=({image:i,name:r})=>{const{logout:o}=t.useContext(S),{i18n:l}=N(),n=localStorage.getItem("sellerLogged");return e.jsx("div",{className:`submenu z-[10000] absolute rounded-lg shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] p-8 ${l.language==="en"?"right-2":"left-2"} top-12 text-black`,children:e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex items-center gap-5 pb-4 border-b border-b-gray-300",children:[e.jsx("img",{src:i||"https://lh3.googleusercontent.com/Xsvl-X4MBLASFz1ha2-zl_LV3Hj4-f1sy73yWwg3QcDiJ-WKWmkQajdiolJ5Sv4oF4QtnQiuBwUsBJQsSEspLYszs1UFXf-rUhIx-00T",className:"w-12 h-12 bg-secondColor rounded-full",alt:r}),e.jsx("p",{className:"font-bold",children:r})]}),e.jsxs("div",{className:"flex flex-col gap-3 pb-4 border-b border-b-gray-300",children:[e.jsxs(x,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(be,{})," ",l.language==="en"?"My account":"حسابي"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]}),n&&e.jsxs(x,{to:"/dashboard",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Me,{})," ",l.language==="en"?"Dashbaord":"لوحة التحكم"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]}),n?e.jsxs(x,{to:"/orders",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{})," ",l.language==="en"?"My Orders":"الطلبات"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]}):e.jsxs(x,{to:"/payments",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{})," ",l.language==="en"?"Payments":"المدفوعات"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]}),e.jsxs(x,{to:"/profile",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(xe,{})," ",l.language==="en"?"Settings":"الاعدادات"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(x,{to:"/contact-us",className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(we,{})," ",l.language==="en"?"Support":"الدعم"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]}),e.jsxs("button",{onClick:o,className:"flex items-center justify-between font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ye,{})," ",l.language==="en"?"Logout":"تسجيل الخروج"]}),l.language==="en"?e.jsx(f,{}):e.jsx(j,{})]})]})]})})},ke=({setNotificationsNumber:i,notifications:r,notificationLoading:o,notificationError:l})=>{const{i18n:n}=N();return e.jsxs("div",{className:`submenu z-[10000] absolute rounded-lg shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] p-8 ${n.language==="en"?"right-2":"left-2"} top-12 text-black`,children:[e.jsx("div",{className:"mb-2 pb-2 border-b",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{className:"mt-1 mb-0 text-sm font-semibold",children:"Notifications"}),e.jsx("div",{className:"ms-auto",children:e.jsx("button",{type:"button",className:"text-sm text-gray-600",children:"Mark all as read"})})]})}),e.jsxs("div",{className:"notifications-body overflow-y-auto max-h-[50dvh]",children:[o&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx(V,{color:"#0d6efd",height:50,width:50})}),!o&&l&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:n.language==="en"?"Error loading notifications":"يوجد خطأ، حاول مره اخري"})}),!l&&!o&&r.length>0?r==null?void 0:r.map((a,c)=>e.jsx("div",{className:"mb-2 flex  justify-between border-b pb-2",dir:"ltr",children:e.jsxs("p",{className:"text-sm font-medium text-gray-900 mx-2 w-fit",children:[`${c+1} - `,a.title]})},a.id)):e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:n.language==="en"?"No notifications yet":"لا يوجد اشعارات بعد"})})]})]})},Ie=({setMessagesNumber:i,messages:r,messageLoading:o,messageError:l})=>{const{i18n:n}=N();return e.jsxs("div",{className:`submenu z-[10000] absolute rounded-lg shadow-lg bg-white w-[340px] max-w-[90%] sm:max-w-[340px] p-8 ${n.language==="en"?"right-2":"left-2"} top-12 text-black`,children:[e.jsx("div",{className:"mb-2 pb-2 border-b",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h6",{className:"mt-1 mb-0 text-sm font-semibold",children:"messages"}),e.jsx("div",{className:"ms-auto",children:e.jsx("button",{type:"button",className:"text-sm text-gray-600",children:"Mark all as read"})})]})}),e.jsxs("div",{className:"messages-body overflow-y-auto max-h-[50dvh]",children:[o&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx(V,{color:"#0d6efd",height:50,width:50})}),!o&&l&&e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:n.language==="en"?"Error loading messages":"يوجد خطأ، حاول مره اخري"})}),!l&&!o&&r.length>0?r==null?void 0:r.map((a,c)=>e.jsx("div",{className:"mb-2 flex  justify-between border-b pb-2",dir:"ltr",children:e.jsxs("p",{className:"text-sm font-medium text-gray-900 mx-2 w-fit",children:[`${c+1} - `,a.title]})},a.id)):e.jsx("div",{className:"flex justify-center items-center h-32",children:e.jsx("p",{className:"text-red-500",children:n.language==="en"?"No messages yet":"لا يوجد رسائل بعد"})})]})]})},ze=()=>{const{t:i,i18n:r}=N(),[o,l]=t.useState([]),n=JSON.parse(localStorage.getItem("userToken")),a=localStorage.getItem("userLogged"),c=JSON.parse(localStorage.getItem("sellerToken")),m=localStorage.getItem("sellerLogged"),{products:p,getCartItems:g,getTotalPriceInCart:D,total:C,mainRequest:O}=t.useContext(S),{showSubMenu:v,setShowSubMenu:w,notificationMenu:M,setNotificationMenu:L,messagesMenu:k,setMessagesMenu:$}=t.useContext(S),[b,G]=t.useState(""),[I,z]=t.useState([]),F=t.useRef(null),J=s=>{s.stopPropagation(),w(!v),L(!1)},q=s=>{s.stopPropagation(),L(!M),w(!1),$(!1)},W=s=>{s.stopPropagation(),$(!k),L(!1),w(!1)},[A,X]=t.useState(0),[Y,K]=t.useState([]),[_,H]=t.useState(!1),[Z,ee]=t.useState(!1),se=async()=>{H(!0);try{const s=await O.post(`${Q}/vendorNotifications`,{token:c}),{data:d}=s;K(d.data),console.log(d.data.length),X(d.data.length)}catch(s){console.log(s),ee(!0)}finally{H(!1)}};t.useEffect(()=>{m&&se()},[c,M===!0]);const[T,te]=t.useState(0),[ae,le]=t.useState([]),[ne,U]=t.useState(!1),[re,ie]=t.useState(!1),oe=async()=>{U(!0);try{const s=await O.post(`${Q}/vendorMessages`,{token:c}),{data:d}=s;le(d.data),console.log(d.data.length),te(d.data.length)}catch(s){console.log(s),ie(!0)}finally{U(!1)}};t.useEffect(()=>{m&&oe()},[c,k]),t.useEffect(()=>{a&&n&&(D(),g(n,l))},[a,n,m,c,C]),t.useEffect(()=>{if(b.trim()!==""&&p){const s=p.filter(d=>d.title.en.toLowerCase().includes(b.toLowerCase())||d.title.ar.toLowerCase().includes(b.toLowerCase()));z(s)}else z([])},[b,p]),t.useEffect(()=>{const s=d=>{v&&!d.target.closest(".sub-menu")&&w(!1),F.current&&!d.target.closest(".search-results")&&z([])};return window.addEventListener("click",s),()=>{window.removeEventListener("click",s)}},[v]);const[u,ce]=t.useState({}),[h,de]=t.useState({}),{getUserInfo:me,getSellerInfo:ge}=t.useContext(S);return t.useEffect(()=>{a&&me(n,ce)},[m,c,a,n,C]),t.useEffect(()=>{m&&ge(c,de)},[m,c,a,n,C]),e.jsxs("div",{className:"main-header flex items-center justify-between gap-5 flex-col md:flex-row",children:[e.jsxs("div",{className:"flex items-center gap-3 w-full flex-1",children:[e.jsx(x,{to:"/home",className:"flex items-center",children:e.jsx("img",{className:"w-16 md:w-24",src:pe,alt:"horizon"})}),e.jsxs("div",{className:"flex-1 w-full text-xs search-holder relative",children:[e.jsx(je,{id:"search",type:"text",rightIcon:ue,placeholder:i("mainHeader.placeholder"),required:!1,value:b,onChange:s=>G(s.target.value),autoComplete:"off"}),I.length>0&&e.jsx("div",{ref:F,className:"search-results px-4 absolute top-12 left-0 w-full max-h-[300px] overflow-y-auto bg-white z-[10000] rounded-lg shadow-md text-secondColor",children:I.length>0?I.map(s=>e.jsx(x,{to:`/product/${s.id}`,children:e.jsxs("div",{className:"search-result-item flex items-center justify-between gap-5 border-b py-1",children:[e.jsx("img",{src:`https://admin.horriizon.com/public/assets/${s.images[0].path}`,alt:r.language==="en"?s.title.en:s.title.ar,className:"w-20"}),e.jsx("h4",{children:r.language==="en"?s.title.en:s.title.ar})]})},s.id)):e.jsx("div",{className:"py-5",children:e.jsx("h4",{className:"no-search-result text-lg text-center text-red-800 capitalize",children:r.language==="en"?"there is no search result to your search words":"لا توجد نتيجه مطابقه لكلمات البحث"})})})]})]}),e.jsx("div",{className:"buttons-holder md:w-fit flex justify-evenly gap-3",children:a||m?e.jsxs("div",{className:"flex items-center justify-center gap-4 relative w-full",children:[a&&e.jsx(x,{to:"/cart",children:e.jsxs("div",{className:"relative p-2",children:[e.jsx(he,{className:"text-xl"}),e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:a?(o==null?void 0:o.length)||0:null})]})}),m&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{button:!0,className:"relative p-2",onClick:W,children:[e.jsx(fe,{className:"text-2xl"}),T>0&&e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:T||0})]}),e.jsxs("button",{className:"relative p-2",onClick:q,children:[e.jsx(Ce,{className:"text-2xl"}),A>0&&e.jsx("span",{className:"text-lg absolute -top-4 -right-2 grid place-content-center w-7 h-7 rounded-full bg-white text-secondColor",children:A||0})]})]}),k&&e.jsx(Ie,{messages:ae,messageLoading:ne,messageError:re}),M&&e.jsx(ke,{notifications:Y,notificationLoading:_,notificationError:Z}),e.jsxs("button",{className:"flex items-center gap-2",onClick:J,children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("img",{src:a?u.image?`https://admin.horriizon.com/public/assets/${u.image}`:y:h.image?`https://admin.horriizon.com/public/assets/${h.image}`:y,className:"w-12 h-12 bg-secondColor rounded-full",alt:a?u.name:h.name}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("p",{children:a?u.name:h.name}),m&&e.jsxs("p",{children:["total"," EGY"]})]})]}),e.jsx(Se,{className:"text-xl"})]}),v&&e.jsx(Le,{name:a?u.name:h.name,image:a?u.image?`https://admin.horriizon.com/public/assets/${u.image}`:y:h.image?`https://admin.horriizon.com/public/assets/${h.image}`:y})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{to:"seller-signup",children:e.jsx("button",{type:"button",className:"bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:i("mainHeader.signUpSallerBtn")})}),e.jsx(x,{to:"customer-signup",children:e.jsx("button",{type:"button",className:"border p-2 rounded-lg hover:brightness-110 text-xs md:text-sm",children:i("mainHeader.signUpCustomerBtn")})})]})})]})},Ee=({toggleSidebar:i})=>{const[r,o]=t.useState(!1),l=localStorage.getItem("sellerLogged"),n=()=>{o(!r)},{i18n:a,t:c}=N(),m=g=>{a.changeLanguage(g),localStorage.setItem("language",g)};t.useEffect(()=>{const g=localStorage.getItem("language");g&&a.changeLanguage(g)},[]);const p=c("mainHeader.pages");return e.jsxs("nav",{className:"container w-full max-w-[100%] py-3 mt-3 bg-[#44406AEB] flex items-center justify-between gap-3 overflow-hidden",children:[e.jsx("div",{className:"bg-mainColor p-2 rounded-lg hover:brightness-125 flex items-center",onClick:i,children:e.jsxs("button",{className:"flex gap-2 items-center","aria-label":a.language==="en"?"categories":"الفئات",children:[e.jsx(P,{})," ",a.language==="en"?"categories":"الفئات"]})}),e.jsxs("ul",{className:`flex items-center gap-5 absolute duration-300 -top-full md:relative md:top-0 transition-all ${r?"openMenuHeader":""}`,children:[e.jsx("button",{type:"button",className:"md:hidden absolute top-5 right-1/2 translate-x-1/2 text-xl bg-secondColor p-2",onClick:n,"aria-label":a.language==="en"?"languge":"الللغه",children:e.jsx(Ne,{})}),p.map(g=>!l&&g.id===5?null:e.jsx("li",{children:e.jsx(x,{to:g.link,children:g.name})},g.id))]}),e.jsx("button",{type:"button",className:"md:hidden","aria-label":a.language==="en"?"menu":"القائمه",onClick:n,children:e.jsx(P,{})}),e.jsx("div",{className:"lang-toggler",children:e.jsxs(E,{label:e.jsx(ve,{}),"aria-label":"languge",children:[e.jsx(E.Item,{onClick:()=>m("en"),children:"English"}),e.jsx(E.Item,{onClick:()=>m("ar"),children:"Arabic"})]})})]})};const Qe=({toggleSidebar:i})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"bg-mainColor text-white pt-3 z-[100] sticky top-0",children:[e.jsx("div",{className:"px-5 min-w-[95%] pt-2",children:e.jsx(ze,{})}),e.jsx(Ee,{toggleSidebar:i})]})});export{Qe as default};
