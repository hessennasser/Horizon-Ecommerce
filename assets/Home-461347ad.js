import{u as v,r as f,j as e,a as O,b as _,L as j,A,c as M,d as z,H as oe,e as m,f as ae}from"./index-0fb98de6.js";import{S as V,N as J,a as H,P as ie}from"./pagination-397198e2.js";import{A as W}from"./autoplay-aaf36839.js";import{S as Q}from"./SingleProductCard-fe8f47ef.js";import{G as le}from"./GoogleSignInButton-2de6458a.js";const ce=()=>{const{i18n:s}=v(),[o,i]=f.useState([]),l=async()=>{try{const t=await O(`${_}/slider`),{data:n}=t;i(n.data)}catch(t){console.log(t)}};return f.useEffect(()=>{l()},[]),e.jsx("div",{className:"w-full select-none",children:e.jsx(V,{modules:[W,J],autoplay:{delay:3e3},navigation:!0,loop:!0,className:"heroSlider w-full",style:{direction:"ltr"},children:o.map(t=>e.jsx(H,{children:e.jsx("img",{className:"w-full h-[350px] object-cover",src:`https://admin.horriizon.com/public/${t.image}`,alt:`${s.language==="en"?t.title.en:t.title.ar}`})},t.id))})})},de="/assets/login-0f1e2bd2.gif",ue=()=>{const{i18n:s,t:o}=v();return e.jsxs("div",{className:`bg-white flex flex-col ${s.language==="ar"?"md:rounded-l-xl":"md:rounded-r-xl"} shadow-2xl overflow-hidden`,children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 flex-1",children:[e.jsx("img",{src:de,alt:"horizon"}),e.jsxs("h4",{className:"text-md font-bold text-center",children:[o("weeklyOffers.registerCard.header.0"),e.jsx("span",{className:"text-secondColor",children:o("weeklyOffers.registerCard.header.1")})]}),e.jsx(j,{className:"w-full flex items-center justify-center",to:"/seller-login",children:e.jsx("button",{type:"button",className:"w-2/3 border border-secondColor text-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm shadow-lg font-bold",children:o("weeklyOffers.registerCard.sugnInButtons.seller")})}),e.jsx(j,{className:"w-full flex items-center justify-center",to:"/customer-login",children:e.jsx("button",{type:"button",className:"w-2/3 bg-secondColor p-2 rounded-lg hover:brightness-110 text-xs md:text-sm shadow-lg text-white font-bold",children:o("weeklyOffers.registerCard.sugnInButtons.customer")})})]}),e.jsxs("div",{className:"flex items-center justify-center my-5",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:s.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsxs("p",{className:"text-center pb-5",children:[o("weeklyOffers.registerCard.footer.0"),e.jsx(j,{className:"text-secondColor font-bold",to:"/customer-signup",children:o("weeklyOffers.registerCard.footer.1")})]})]})},X=()=>{const{i18n:s}=v();return e.jsx("div",{className:"max-w-[98%] mx-auto py-10 text-center p-3 min-h-[300px]",children:e.jsx("h2",{className:"text-3xl text-red-500",children:s.language==="en"?"THere Is An Error!":"يوجد خطأ!"})})},U=({imageCard:s,getWeeklyOffers:o,products:i,setProducts:l,loading:t,error:n,titleEn:r,titleAr:a,link:c})=>{const{i18n:d,t:u}=v();return f.useEffect(()=>{o()},[]),t?e.jsxs("div",{className:"p-3 col-span-2 bg-[#F4F4F4]  shadow-2xl overflow-hidden",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-5 justify-between items-start mb-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-bold text-2xl mb-2",children:d.language==="en"?r:a}),e.jsx("p",{className:"w-full md:w-2/3 text-gray-800",children:u("weeklyOffers.descraption")})]}),e.jsxs(j,{to:c,className:"flex items-center gap-3 text-lg ",children:[u("weeklyOffers.allButton"),d.language==="ar"?e.jsx(A,{}):e.jsx(M,{})]})]}),e.jsx(z,{})]}):n?e.jsxs("div",{className:"p-3 col-span-2 bg-[#F4F4F4]  shadow-2xl overflow-hidden",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-5 justify-between items-start mb-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-bold text-2xl mb-2",children:d.language==="en"?r:a}),e.jsx("p",{className:"w-full md:w-2/3 text-gray-800",children:u("weeklyOffers.descraption")})]}),e.jsxs(j,{to:c,className:"flex items-center gap-3 text-lg ",children:[u("weeklyOffers.allButton"),d.language==="ar"?e.jsx(A,{}):e.jsx(M,{})]})]}),e.jsx(X,{})]}):e.jsxs("div",{className:"p-3 col-span-2 bg-[#F4F4F4]  shadow-2xl overflow-hidden",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-5 justify-between items-start mb-5",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"font-bold text-2xl mb-2",children:d.language==="en"?r:a}),e.jsx("p",{className:"w-full md:w-2/3 text-gray-800",children:u("weeklyOffers.descraption")})]}),e.jsxs(j,{to:c,className:"flex items-center gap-3 text-lg ",children:[u("weeklyOffers.allButton"),d.language==="ar"?e.jsx(A,{}):e.jsx(M,{})]})]}),e.jsx(V,{autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,slidesPerView:1,spaceBetween:10,modules:[J,W],breakpoints:{0:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:3,spaceBetween:20},960:{slidesPerView:4,spaceBetween:20},1600:{slidesPerView:5,spaceBetween:20}},className:"weekly-offers-swiper py-5",style:{direction:d.language==="ar"?"ltr":"initial"},children:i.map(g=>e.jsx(H,{children:e.jsx(Q,{productDetails:g,id:g.id,title:g.title,total_price:g.total_price,price:g.price,quantity:g.quantity,image:g.images[0].path,category:g.category})},g.id))})]})};function fe(){const{i18n:s}=v(),[o,i]=f.useState([]),l=async()=>{try{const t=await O.post(`${_}/section/lastProduct`),{data:n}=t;i(n.data)}catch(t){console.log(t)}};return f.useEffect(()=>{l()},[]),e.jsx("div",{className:`bg-white flex flex-wrap gap-5 p-4 ${s.language==="ar"?"md:rounded-r-xl":"md:rounded-l-xl"} shadow-2xl h-full overflow-hidden`,children:o.map(t=>e.jsx(j,{to:`/categories/${t.id}`,className:"w-[calc(50%-20px)]",children:e.jsx("img",{src:`https://admin.horriizon.com/public/${t.image}`,alt:s.language==="en"?t.title.en:t.title.ar,className:" h-full w-full rounded-lg shadow-lg"})},t.id))})}const ge=()=>{var a,c,d,u;const{i18n:s,t:o}=v(),[i,l]=f.useState([]),[t,n]=f.useState(!1),r=async()=>{n(!0);try{const g=await O(`${_}/add/login`),{data:w}=g;l(w.data)}catch(g){console.log(g)}finally{n(!1)}};return f.useEffect(()=>{r()},[]),e.jsx("div",{className:`bg-white flex flex-col items-center justify-center ${s.language==="ar"?"md:rounded-l-xl":"md:rounded-r-xl"} shadow-2xl overflow-hidden relative`,children:t?e.jsx(z,{}):i.length>=2&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex items-center justify-center",children:e.jsx("a",{href:(a=i[0])==null?void 0:a.link,target:"_self",children:e.jsx("img",{className:"p-5 w-56 h-56",src:`https://admin.horriizon.com/public/${(c=i[0])==null?void 0:c.image}`,alt:"Horizon"})})}),e.jsx("div",{className:"w-full h-[2px] bg-gray-500"}),e.jsx("div",{className:"w-full flex items-center justify-center",children:e.jsx("a",{href:(d=i[1])==null?void 0:d.link,target:"_self",children:e.jsx("img",{className:"p-5 w-56 h-56",src:`https://admin.horriizon.com/public/${(u=i[1])==null?void 0:u.image}`,alt:"Horizon"})})})]})})},G=({imageCard:s,isMarginTop:o,titleEn:i,titleAr:l})=>{const t=localStorage.getItem("userLogged"),n=localStorage.getItem("sellerLogged"),[r,a]=f.useState([]),[c,d]=f.useState(!1),[u,g]=f.useState(null),w=async()=>{d(!0);try{const h=await O.post(`${_}/section/weeklyOffers`),{data:S}=h;a(S.data),d(!1)}catch(h){g(h),d(!1)}},[y,x]=f.useState([]),[p,N]=f.useState(!1),[E,L]=f.useState(null),P=async()=>{N(!0);try{const h=await O.post(`${_}/section/offers`),{data:S}=h;x(S.data),N(!1)}catch(h){L(h),N(!1),console.log(h)}};return e.jsx("div",{className:`px-5 relative z-10 grid grid-cols-1 md:grid-cols-3 mt-10 ${o?"md:-translate-y-36":""} min-h-[400px]`,children:s?e.jsxs(e.Fragment,{children:[e.jsx(fe,{}),e.jsx(U,{titleEn:"Offers",titleAr:"أجدد العروض",getWeeklyOffers:P,loading:p,error:E,products:y,imageCard:!0,link:"/offers"})]}):e.jsxs(e.Fragment,{children:[e.jsx(U,{titleEn:"Weekly Offers",titleAr:"العروض الأسبوعية",getWeeklyOffers:w,loading:c,error:u,products:r,link:"/dally-offers"}),!t&&!n?e.jsx(ue,{}):e.jsx(ge,{})]})})};const R=({products:s,loading:o,error:i})=>{const{i18n:l,t}=v();return o?e.jsx(z,{}):i?e.jsx(X,{}):e.jsx("div",{className:"max-w-[98%] mx-auto py-10 select-none",children:e.jsx(V,{pagination:{dynamicBullets:!0,clickable:!0,reverseDirection:!0},modules:[ie,W],className:"productsSwiper w-full",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,reverseDirection:!0},spaceBetween:10,breakpoints:{0:{slidesPerView:1,spaceBetween:10},440:{slidesPerView:2,spaceBetween:20},660:{slidesPerView:3,spaceBetween:30},991:{slidesPerView:4,spaceBetween:30},1200:{slidesPerView:5,spaceBetween:20}},style:{direction:l.language==="ar"?"ltr":"initial"},children:s==null?void 0:s.map(n=>e.jsx(H,{children:e.jsx(Q,{background:"white",productDetails:n,id:n.id,title:n.title,total_price:n.total_price,price:n.price,quantity:n.quantity,image:n.images[0].path,category:n.category})},n.id))})})},me=()=>{var r,a,c,d;const{i18n:s}=v(),[o,i]=f.useState({}),[l,t]=f.useState(!1),n=async()=>{t(!0);try{const u=await O(`${_}/section/banner`),{data:g}=u.data;i(g)}catch(u){console.log(u)}};return f.useEffect(()=>{n()},[]),e.jsx("div",{className:"py-5 text-white bg-mainColor bg-gradient-to-r from-indigo-900 to-purple-900",children:e.jsxs("div",{className:"container grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"text col-span-2",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl font-bold",children:s.language==="en"?(r=o==null?void 0:o.title)==null?void 0:r.en:(a=o==null?void 0:o.title)==null?void 0:a.ar}),e.jsx("p",{className:"text-gray-100",children:s.language==="en"?(c=o==null?void 0:o.description)==null?void 0:c.en:(d=o==null?void 0:o.description)==null?void 0:d.ar})]}),e.jsxs("div",{className:"mt-5 flex flex-col items-start gap-3",children:[e.jsxs("p",{className:"text-[3.5rem] font-extrabold text-secondColor",children:[o==null?void 0:o.discount,"%",e.jsx("span",{className:"text-xs text-gray-100",children:"DSCNT"})]}),e.jsx(j,{to:o.link,className:"bg-secondColor py-2 px-4 rounded-lg hover:brightness-110 text-xs md:text-sm capitalize",children:s.language==="en"?"Get Discount Now":"احصل علي الخصم الان"})]})]}),e.jsx("div",{className:"img",children:e.jsx("img",{src:`https://admin.horriizon.com/public/${o==null?void 0:o.image}`,alt:"horizon"})})]})})},xe=({categories:s})=>{const{i18n:o}=v();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container py-10 flex flex-wrap gap-4 justify-center",children:s.slice(0,10).map(i=>e.jsx(oe,{category:i},i.id))}),e.jsx(j,{className:`block w-fit mb-5 mx-auto\r
             bg-secondColor text-white px-3 py-1 rounded-md text-lg hover:brightness-110`,to:"/all-categories",children:o.language==="en"?"All categories":"جميع الفئات"})]})};var pe={},T={},q={},I={},D={};Object.defineProperty(D,"__esModule",{value:!0});D.createScriptEle=void 0;const he=(s,o)=>new Promise(i=>{var l;const n=document.getElementsByTagName("script")[0];if(document.getElementById(s)){i(void 0);return}const r=document.createElement("script");if(r.id=s,r.src=o,r.onload=i,n)(l=n.parentNode)===null||l===void 0||l.insertBefore(r,n);else{const a=document.body.childNodes;document.body.insertBefore(r,a.item(a.length-1))}});D.createScriptEle=he;var Y={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.paramsToObject=s.objectToParams=s.isObject=void 0;const o=t=>Object.prototype.toString.call(t)==="[object Object]";s.isObject=o;const i=t=>!(0,s.isObject)(t)||Object.keys(t).length===0?"":"?"+Object.keys(t).map(n=>`${n}=${encodeURIComponent(t[n])}`).join("&");s.objectToParams=i;const l=t=>(t==null?void 0:t.replace(/^\?/,"").split("&").reduce((n,r)=>{if(!r)return n;const[a,c]=r.split("=");return Object.assign(Object.assign({},n),{[a]:decodeURIComponent(c)})},{}))||{};s.paramsToObject=l})(Y);var $={};Object.defineProperty($,"__esModule",{value:!0});$.isFacebookApp=void 0;const je=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera;return s.indexOf("FBAN")>-1||s.indexOf("FBAV")>-1||s.indexOf("Instagram")>-1};$.isFacebookApp=je;(function(s){var o=m&&m.__createBinding||(Object.create?function(l,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(l,r,a)}:function(l,t,n,r){r===void 0&&(r=n),l[r]=t[n]}),i=m&&m.__exportStar||function(l,t){for(var n in l)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&o(t,l,n)};Object.defineProperty(s,"__esModule",{value:!0}),i(D,s),i(Y,s),i($,s)})(I);(function(s){var o=m&&m.__awaiter||function(t,n,r,a){function c(d){return d instanceof r?d:new r(function(u){u(d)})}return new(r||(r=Promise))(function(d,u){function g(x){try{y(a.next(x))}catch(p){u(p)}}function w(x){try{y(a.throw(x))}catch(p){u(p)}}function y(x){x.done?d(x.value):c(x.value).then(g,w)}y((a=a.apply(t,n||[])).next())})},i=m&&m.__rest||function(t,n){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(r[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(t);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(r[a[c]]=t[a[c]]);return r};Object.defineProperty(s,"__esModule",{value:!0}),s.FacebookLoginClient=s.SDK_SCRIPT_ELE_ID=void 0;const l=I;s.SDK_SCRIPT_ELE_ID="facebook-jssdk",s.FacebookLoginClient={getFB:()=>window.FB?window.FB:(console.warn("FB not found"),null),getLoginStatus(t,n=!1){const r=this.getFB();if(!r){t({status:"unknown"});return}r.getLoginStatus(t,n)},getProfile(t,n){var r;(r=this.getFB())===null||r===void 0||r.api("me",n,t)},init(t){var n;(n=this.getFB())===null||n===void 0||n.init(t)},clear(){window.FB=null;const t=document.getElementById(s.SDK_SCRIPT_ELE_ID);t&&t.remove()},isRedirected(t){var n,r;const a=(0,l.paramsToObject)(window.location.search);return((n=a.state===(t==null?void 0:t.state))!==null&&n!==void 0?n:"facebookdirect")&&a[(r=t==null?void 0:t.response_type)!==null&&r!==void 0?r:""]!==void 0},loadSdk(t,n){return o(this,void 0,void 0,function*(){yield(0,l.createScriptEle)(s.SDK_SCRIPT_ELE_ID,`https://connect.facebook.net/${t}/sdk${n?"/xfbml.customerchat":""}.js`)})},redirectToDialog(t,n){var r=i(n,["ignoreSdkError"]);window.location.href=`https://www.facebook.com/dialog/oauth${(0,l.objectToParams)(Object.assign(Object.assign({},t),r))}`},login(t,n){var r,{ignoreSdkError:a}=n,c=i(n,["ignoreSdkError"]);try{(r=this.getFB())===null||r===void 0||r.login(t,c)}catch(d){if(a)return;throw d}},logout(t){this.getLoginStatus(n=>{var r;n.status==="connected"?(r=this.getFB())===null||r===void 0||r.logout(t):t()})}}})(q);var be=m&&m.__createBinding||(Object.create?function(s,o,i,l){l===void 0&&(l=i);var t=Object.getOwnPropertyDescriptor(o,i);(!t||("get"in t?!o.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(s,l,t)}:function(s,o,i,l){l===void 0&&(l=i),s[l]=o[i]}),we=m&&m.__setModuleDefault||(Object.create?function(s,o){Object.defineProperty(s,"default",{enumerable:!0,value:o})}:function(s,o){s.default=o}),ye=m&&m.__importStar||function(s){if(s&&s.__esModule)return s;var o={};if(s!=null)for(var i in s)i!=="default"&&Object.prototype.hasOwnProperty.call(s,i)&&be(o,s,i);return we(o,s),o},ve=m&&m.__awaiter||function(s,o,i,l){function t(n){return n instanceof i?n:new i(function(r){r(n)})}return new(i||(i=Promise))(function(n,r){function a(u){try{d(l.next(u))}catch(g){r(g)}}function c(u){try{d(l.throw(u))}catch(g){r(g)}}function d(u){u.done?n(u.value):t(u.value).then(a,c)}d((l=l.apply(s,o||[])).next())})};Object.defineProperty(T,"__esModule",{value:!0});const K=ye(f),B=q,Oe=I;function _e(s){var o,i;const{appId:l,language:t="en_US",scope:n="public_profile, email",fields:r="name,email,picture",onSuccess:a,onFail:c,onProfileSuccess:d,className:u,style:g,children:w="Login with Facebook",render:y,autoLoad:x=!1,useRedirect:p=!1,useCustomerChat:N=!1}=s,E=Object.assign(Object.assign({version:"v9.0",xfbml:!1,cookie:!1,localStorage:!0},s.initParams),{appId:l}),L=Object.assign(Object.assign({redirect_uri:typeof window<"u"?location.origin+location.pathname:"/",state:"facebookdirect",response_type:"code"},s.dialogParams),{client_id:l}),P=Object.assign(Object.assign({return_scopes:!1,ignoreSdkError:!1},s.loginOptions),{auth_nonce:typeof((o=s.loginOptions)===null||o===void 0?void 0:o.auth_nonce)=="function"?s.loginOptions.auth_nonce():(i=s.loginOptions)===null||i===void 0?void 0:i.auth_nonce,scope:n});(0,K.useEffect)(()=>{h()},[]);const h=()=>ve(this,void 0,void 0,function*(){yield B.FacebookLoginClient.loadSdk(t,N),window.fbAsyncInit=()=>{B.FacebookLoginClient.init(E);const k=B.FacebookLoginClient.isRedirected(L);if(k===!1&&x){C();return}k===!0&&p&&S()}}),S=()=>{B.FacebookLoginClient.login(k=>{if(!k.authResponse){c&&c({status:"loginCancelled"});return}a&&a(k.authResponse),d&&B.FacebookLoginClient.getProfile(d,{fields:r})},Object.assign(Object.assign({},P),{scope:n}))},C=()=>{if((0,Oe.isFacebookApp)()||p){B.FacebookLoginClient.redirectToDialog(L,P);return}if(!window.FB){c&&c({status:"facebookNotLoaded"});return}S()};return y?y({onClick:C,logout:B.FacebookLoginClient.logout}):K.default.createElement("button",{type:"button",onClick:C,className:u,style:g},w)}T.default=_e;var Z={},ee={};Object.defineProperty(ee,"__esModule",{value:!0});var te={};Object.defineProperty(te,"__esModule",{value:!0});var ne={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.LoginStatus=void 0,function(o){o.Connected="connected",o.NotAuthorized="not_authorized",o.Unknown="unknown"}(s.LoginStatus||(s.LoginStatus={}))})(ne);(function(s){var o=m&&m.__createBinding||(Object.create?function(l,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(l,r,a)}:function(l,t,n,r){r===void 0&&(r=n),l[r]=t[n]}),i=m&&m.__exportStar||function(l,t){for(var n in l)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&o(t,l,n)};Object.defineProperty(s,"__esModule",{value:!0}),i(ee,s),i(te,s),i(ne,s)})(Z);(function(s){var o=m&&m.__createBinding||(Object.create?function(n,r,a,c){c===void 0&&(c=a);var d=Object.getOwnPropertyDescriptor(r,a);(!d||("get"in d?!r.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(n,c,d)}:function(n,r,a,c){c===void 0&&(c=a),n[c]=r[a]}),i=m&&m.__exportStar||function(n,r){for(var a in n)a!=="default"&&!Object.prototype.hasOwnProperty.call(r,a)&&o(r,n,a)},l=m&&m.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(s,"__esModule",{value:!0});const t=l(T);i(I,s),i(Z,s),i(T,s),i(q,s),s.default=t.default})(pe);const Se=()=>{const{t:s,i18n:o}=v();return e.jsx("div",{className:"wrapper ",children:e.jsxs("div",{className:"grid grid-col-1 md:grid-cols-2 bg-[#125ed424]",children:[e.jsxs("div",{className:"text-mainColor flex flex-col justify-center items-center py-20",children:[e.jsx("h2",{className:"font-semibold text-3xl sm:text-[2rem] md:text-[3rem] mb-10",children:"Let's get started"}),e.jsx("p",{className:"px-10 text-gray-700",children:"We need some basic information about you so we can contact you about your booking ✌️"})]}),e.jsxs("div",{className:"bg-white py-20",children:[e.jsxs("div",{className:"auth-buttons-holder flex flex-col items-center gap-3",children:[e.jsx(j,{to:"/seller-login",className:"bg-secondColor w-48 text-white p-2 rounded-lg hover:brightness-110 text-xs md:text-sm text-center",children:s("weeklyOffers.registerCard.sugnInButtons.seller")}),e.jsx(j,{to:"/customer-login",type:"button",className:"border border-mainColor text-mainColor w-48 p-2 rounded-lg text-xs md:text-sm text-center",children:s("weeklyOffers.registerCard.sugnInButtons.customer")}),e.jsx(le,{})]}),e.jsxs("div",{className:"flex items-center justify-center my-5",children:[e.jsx("div",{className:"w-1/2 border-t border-gray-300"}),e.jsx("p",{className:"mx-4 text-gray-500 font-semibold uppercase",children:o.language==="en"?"OR":"أو"}),e.jsx("div",{className:"w-1/2 border-t border-gray-300"})]}),e.jsxs("p",{className:"text-center pb-5",children:[s("weeklyOffers.registerCard.footer.0"),e.jsx(j,{to:"/customer-signup",className:"text-secondColor font-bold",children:s("weeklyOffers.registerCard.footer.1")})]})]})]})})},Le=()=>{const{products:s,getAllCategories:o,categories:i}=f.useContext(ae),l=localStorage.getItem("userLogged"),t=localStorage.getItem("sellerLogged"),[n,r]=f.useState([]),[a,c]=f.useState(!1),[d,u]=f.useState(!1),g=async()=>{c(!0);try{const b=await O.post(`${_}/section/firstCategory`),{data:F}=b;r(F.data),c(!1)}catch(b){u(b),c(!1),console.log(weeklyError)}},[w,y]=f.useState([]),[x,p]=f.useState(!1),[N,E]=f.useState(!1),L=async()=>{p(!0);try{const b=await O.post(`${_}/section/lastCategory`),{data:F}=b;y(F.data),p(!1)}catch(b){E(b),p(!1)}},[P,h]=f.useState([]),[S,C]=f.useState(!1),[k,se]=f.useState(!1),re=async()=>{C(!0);try{const b=await O.post(`${_}/section/lastCategory`),{data:F}=b;h(F.data),C(!1)}catch(b){se(b),C(!1)}};return f.useEffect(()=>{o(),g(),L(),re()},[]),e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(G,{isMarginTop:!1}),n.length>1&&e.jsx(R,{products:n,loading:a,error:d}),e.jsx(G,{imageCard:!0}),w.length>1&&e.jsx(R,{products:w,loading:x,error:N}),e.jsx(me,{}),P.length>1&&e.jsx(R,{products:P,loading:S,error:k}),e.jsx(xe,{categories:i}),!l&&!t&&e.jsx(Se,{})]})};export{Le as default};
