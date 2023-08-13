import{r as i,R as D,j as O,a as M,b as R}from"./index-473a0862.js";function H(o={}){const{nonce:n,onScriptLoadSuccess:c,onScriptLoadError:l}=o,[s,u]=i.useState(!1),t=i.useRef(c);t.current=c;const a=i.useRef(l);return a.current=l,i.useEffect(()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=n,e.onload=()=>{var r;u(!0),(r=t.current)===null||r===void 0||r.call(t)},e.onerror=()=>{var r;u(!1),(r=a.current)===null||r===void 0||r.call(a)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[n]),s}const U=i.createContext(null);function J({clientId:o,nonce:n,onScriptLoadSuccess:c,onScriptLoadError:l,children:s}){const u=H({nonce:n,onScriptLoadSuccess:c,onScriptLoadError:l}),t=i.useMemo(()=>({clientId:o,scriptLoadedSuccessfully:u}),[o,u]);return D.createElement(U.Provider,{value:t},s)}function P(){const o=i.useContext(U);if(!o)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return o}function V(o){var n;return(n=o==null?void 0:o.clientId)!==null&&n!==void 0?n:o==null?void 0:o.client_id}const $={large:40,medium:32,small:20};function q({onSuccess:o,onError:n,useOneTap:c,promptMomentNotification:l,type:s="standard",theme:u="outline",size:t="large",text:a,shape:e,logo_alignment:r,width:y,locale:I,click_listener:k,containerProps:g,...B}){const G=i.useRef(null),{clientId:C,scriptLoadedSuccessfully:j}=P(),A=i.useRef(o);A.current=o;const m=i.useRef(n);m.current=n;const N=i.useRef(l);return N.current=l,i.useEffect(()=>{var w,_,S,h,x,L,b,E,p;if(j)return(S=(_=(w=window==null?void 0:window.google)===null||w===void 0?void 0:w.accounts)===null||_===void 0?void 0:_.id)===null||S===void 0||S.initialize({client_id:C,callback:d=>{var v;if(!(d!=null&&d.credential))return(v=m.current)===null||v===void 0?void 0:v.call(m);const{credential:f,select_by:F}=d;A.current({credential:f,clientId:V(d),select_by:F})},...B}),(L=(x=(h=window==null?void 0:window.google)===null||h===void 0?void 0:h.accounts)===null||x===void 0?void 0:x.id)===null||L===void 0||L.renderButton(G.current,{type:s,theme:u,size:t,text:a,shape:e,logo_alignment:r,width:y,locale:I,click_listener:k}),c&&((p=(E=(b=window==null?void 0:window.google)===null||b===void 0?void 0:b.accounts)===null||E===void 0?void 0:E.id)===null||p===void 0||p.prompt(N.current)),()=>{var d,v,f;c&&((f=(v=(d=window==null?void 0:window.google)===null||d===void 0?void 0:d.accounts)===null||v===void 0?void 0:v.id)===null||f===void 0||f.cancel())}},[C,j,c,s,u,t,a,e,r,y,I]),D.createElement("div",{...g,ref:G,style:{height:$[t],...g==null?void 0:g.style}})}const Q=({role:o})=>{const n=l=>{if(console.log("Login Successful:",l),l.credential&&l.clientId){const{credential:s,clientId:u}=l,t=JSON.parse(atob(s.split(".")[1]));if(console.log("User Profile Data:",t),o==="user"){const a={firstName:t.given_name,lastName:t.family_name,email:t.email,providerId:t.sub};M.post(`${R}/user/socialite`,a).then(e=>{console.log("User data sent successfully:",e.data)}).catch(e=>{console.error("Error sending user data:",e)})}}else console.log("Login data structure is not as expected:",l)},c=()=>{console.log("Login Failed")};return O.jsx(J,{clientId:"289535605481-6vot6d8uosg3aakd7utugpe3vemh5gv1.apps.googleusercontent.com",children:O.jsx(q,{className:"bg-red-500",onSuccess:n,onError:c,auto_select:!0})})};export{Q as G};
