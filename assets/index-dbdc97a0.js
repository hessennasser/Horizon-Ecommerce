import{_ as Ct,h as Ot,i as _t,l as we,r as u,m as B,n as p}from"./index-013aa8e1.js";import{c as Oe}from"./index-ae7c5030.js";function Rt(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function ut(e,t){if(e==null)return{};var r=Rt(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Nt(e){if(Array.isArray(e))return Ct(e)}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(e){return Nt(e)||Ot(e)||_t(e)||Tt()}var Ie={},At=function(t){};function Pt(e,t){}function kt(e,t){}function Lt(){Ie={}}function it(e,t,r){!t&&!Ie[r]&&(e(!1,r),Ie[r]=!0)}function ke(e,t){it(Pt,e,t)}function xt(e,t){it(kt,e,t)}ke.preMessage=At;ke.resetWarned=Lt;ke.noteOnce=xt;function Ft(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=new Set;function a(i,c){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,m=n.has(i);if(ke(!m,"Warning: There may be circular references"),m)return!1;if(i===c)return!0;if(r&&y>1)return!1;n.add(i);var M=y+1;if(Array.isArray(i)){if(!Array.isArray(c)||i.length!==c.length)return!1;for(var b=0;b<i.length;b++)if(!a(i[b],c[b],M))return!1;return!0}if(i&&c&&we(i)==="object"&&we(c)==="object"){var g=Object.keys(i);return g.length!==Object.keys(c).length?!1:g.every(function(h){return a(i[h],c[h],M)})}return!1}return a(e,t)}function Je(e){var t=u.useRef();t.current=e;var r=u.useCallback(function(){for(var n,a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=t.current)===null||n===void 0?void 0:n.call.apply(n,[t].concat(i))},[]);return r}function Ut(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var et=Ut()?u.useLayoutEffect:u.useEffect,wt=function(t,r){var n=u.useRef(!0);et(function(){return t(n.current)},r),et(function(){return n.current=!1,function(){n.current=!0}},[])},tt=function(t,r){wt(function(n){if(!n)return t()},r)};function rt(e){var t=u.useRef(!1),r=u.useState(e),n=B(r,2),a=n[0],i=n[1];u.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function c(y,m){m&&t.current||i(y)}return[a,c]}function Ue(e){return e!==void 0}function It(e,t){var r=t||{},n=r.defaultValue,a=r.value,i=r.onChange,c=r.postState,y=rt(function(){return Ue(a)?a:Ue(n)?typeof n=="function"?n():n:typeof e=="function"?e():e}),m=B(y,2),M=m[0],b=m[1],g=a!==void 0?a:M,h=c?c(g):g,f=Je(i),v=rt([g]),d=B(v,2),s=d[0],C=d[1];tt(function(){var S=s[0];M!==S&&f(M,S)},[s]),tt(function(){Ue(a)||b(a)},[a]);var o=Je(function(S,w){b(S,w),C([g],w)});return[h,o]}function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pe.apply(this,arguments)}function nt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nt(Object(r),!0).forEach(function(n){p(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var l={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var r=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||r>=l.F1&&r<=l.F12)return!1;switch(r){case l.ALT:case l.CAPS_LOCK:case l.CONTEXT_MENU:case l.CTRL:case l.DOWN:case l.END:case l.ESC:case l.HOME:case l.INSERT:case l.LEFT:case l.MAC_FF_META:case l.META:case l.NUMLOCK:case l.NUM_CENTER:case l.PAGE_DOWN:case l.PAGE_UP:case l.PAUSE:case l.PRINT_SCREEN:case l.RIGHT:case l.SHIFT:case l.UP:case l.WIN_KEY:case l.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=l.ZERO&&t<=l.NINE||t>=l.NUM_ZERO&&t<=l.NUM_MULTIPLY||t>=l.A&&t<=l.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case l.SPACE:case l.QUESTION_MARK:case l.NUM_PLUS:case l.NUM_MINUS:case l.NUM_PERIOD:case l.NUM_DIVISION:case l.SEMICOLON:case l.DASH:case l.EQUALS:case l.COMMA:case l.PERIOD:case l.SLASH:case l.APOSTROPHE:case l.SINGLE_QUOTE:case l.OPEN_SQUARE_BRACKET:case l.BACKSLASH:case l.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},ce=u.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function De(e,t,r){return(e-t)/(r-t)}function He(e,t,r,n){var a=De(t,r,n),i={};switch(e){case"rtl":i.right="".concat(a*100,"%"),i.transform="translateX(50%)";break;case"btt":i.bottom="".concat(a*100,"%"),i.transform="translateY(50%)";break;case"ttb":i.top="".concat(a*100,"%"),i.transform="translateY(-50%)";break;default:i.left="".concat(a*100,"%"),i.transform="translateX(-50%)";break}return i}function ge(e,t){return Array.isArray(e)?e[t]:e}var Dt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],Ht=u.forwardRef(function(e,t){var r,n,a=e.prefixCls,i=e.value,c=e.valueIndex,y=e.onStartMove,m=e.style,M=e.render,b=e.dragging,g=e.onOffsetChange,h=ut(e,Dt),f=u.useContext(ce),v=f.min,d=f.max,s=f.direction,C=f.disabled,o=f.keyboard,S=f.range,w=f.tabIndex,k=f.ariaLabelForHandle,N=f.ariaLabelledByForHandle,x=f.ariaValueTextFormatterForHandle,K="".concat(a,"-handle"),R=function(I){C||y(I,c)},O=function(I){if(!C&&o){var T=null;switch(I.which||I.keyCode){case l.LEFT:T=s==="ltr"||s==="btt"?-1:1;break;case l.RIGHT:T=s==="ltr"||s==="btt"?1:-1;break;case l.UP:T=s!=="ttb"?1:-1;break;case l.DOWN:T=s!=="ttb"?-1:1;break;case l.HOME:T="min";break;case l.END:T="max";break;case l.PAGE_UP:T=2;break;case l.PAGE_DOWN:T=-2;break}T!==null&&(I.preventDefault(),g(T,c))}},j=He(s,i,v,d),H=u.createElement("div",Pe({ref:t,className:Oe(K,(r={},p(r,"".concat(K,"-").concat(c+1),S),p(r,"".concat(K,"-dragging"),b),r)),style:Z(Z({},j),m),onMouseDown:R,onTouchStart:R,onKeyDown:O,tabIndex:C?null:ge(w,c),role:"slider","aria-valuemin":v,"aria-valuemax":d,"aria-valuenow":i,"aria-disabled":C,"aria-label":ge(k,c),"aria-labelledby":ge(N,c),"aria-valuetext":(n=ge(x,c))===null||n===void 0?void 0:n(i),"aria-orientation":s==="ltr"||s==="rtl"?"horizontal":"vertical"},h));return M&&(H=M(H,{index:c,prefixCls:a,value:i,dragging:b})),H}),$t=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],Kt=u.forwardRef(function(e,t){var r=e.prefixCls,n=e.style,a=e.onStartMove,i=e.onOffsetChange,c=e.values,y=e.handleRender,m=e.draggingIndex,M=ut(e,$t),b=u.useRef({});return u.useImperativeHandle(t,function(){return{focus:function(h){var f;(f=b.current[h])===null||f===void 0||f.focus()}}}),u.createElement(u.Fragment,null,c.map(function(g,h){return u.createElement(Ht,Pe({ref:function(v){v?b.current[h]=v:delete b.current[h]},dragging:m===h,prefixCls:r,style:ge(n,h),key:h,value:g,valueIndex:h,onStartMove:a,onOffsetChange:i,render:y},M))}))});function at(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function jt(e,t,r,n,a,i,c,y,m){var M=u.useState(null),b=B(M,2),g=b[0],h=b[1],f=u.useState(-1),v=B(f,2),d=v[0],s=v[1],C=u.useState(r),o=B(C,2),S=o[0],w=o[1],k=u.useState(r),N=B(k,2),x=N[0],K=N[1],R=u.useRef(null),O=u.useRef(null);u.useEffect(function(){d===-1&&w(r)},[r,d]),u.useEffect(function(){return function(){document.removeEventListener("mousemove",R.current),document.removeEventListener("mouseup",O.current),document.removeEventListener("touchmove",R.current),document.removeEventListener("touchend",O.current)}},[]);var j=function(P,F){S.some(function(D,q){return D!==P[q]})&&(F!==void 0&&h(F),w(P),c(P))},H=function(P,F){if(P===-1){var D=x[0],q=x[x.length-1],me=n-D,he=a-q,$=F*(a-n);$=Math.max($,me),$=Math.min($,he);var re=i(D+$);$=re-D;var ne=x.map(function(se){return se+$});j(ne)}else{var X=(a-n)*F,ae=te(S);ae[P]=x[P];var le=m(ae,X,P,"dist");j(le.values,le.value)}},G=u.useRef(H);G.current=H;var I=function(P,F){P.stopPropagation();var D=r[F];s(F),h(D),K(r);var q=at(P),me=q.pageX,he=q.pageY,$=function(X){X.preventDefault();var ae=at(X),le=ae.pageX,se=ae.pageY,Ee=le-me,Se=se-he,ye=e.current.getBoundingClientRect(),be=ye.width,z=ye.height,V;switch(t){case"btt":V=-Se/z;break;case"ttb":V=Se/z;break;case"rtl":V=-Ee/be;break;default:V=Ee/be}G.current(F,V)},re=function ne(X){X.preventDefault(),document.removeEventListener("mouseup",ne),document.removeEventListener("mousemove",$),document.removeEventListener("touchend",ne),document.removeEventListener("touchmove",$),R.current=null,O.current=null,s(-1),y()};document.addEventListener("mouseup",re),document.addEventListener("mousemove",$),document.addEventListener("touchend",re),document.addEventListener("touchmove",$),R.current=$,O.current=re},T=u.useMemo(function(){var Y=te(r).sort(function(F,D){return F-D}),P=te(S).sort(function(F,D){return F-D});return Y.every(function(F,D){return F===P[D]})?S:r},[r,S]);return[d,g,T,I]}function Bt(e){var t,r=e.prefixCls,n=e.style,a=e.start,i=e.end,c=e.index,y=e.onStartMove,m=u.useContext(ce),M=m.direction,b=m.min,g=m.max,h=m.disabled,f=m.range,v="".concat(r,"-track"),d=De(a,b,g),s=De(i,b,g),C=function(w){!h&&y&&y(w,-1)},o={};switch(M){case"rtl":o.right="".concat(d*100,"%"),o.width="".concat(s*100-d*100,"%");break;case"btt":o.bottom="".concat(d*100,"%"),o.height="".concat(s*100-d*100,"%");break;case"ttb":o.top="".concat(d*100,"%"),o.height="".concat(s*100-d*100,"%");break;default:o.left="".concat(d*100,"%"),o.width="".concat(s*100-d*100,"%")}return u.createElement("div",{className:Oe(v,(t={},p(t,"".concat(v,"-").concat(c+1),f),p(t,"".concat(r,"-track-draggable"),y),t)),style:Z(Z({},o),n),onMouseDown:C,onTouchStart:C})}function Wt(e){var t=e.prefixCls,r=e.style,n=e.values,a=e.startPoint,i=e.onStartMove,c=u.useContext(ce),y=c.included,m=c.range,M=c.min,b=u.useMemo(function(){if(!m){if(n.length===0)return[];var g=a??M,h=n[0];return[{start:Math.min(g,h),end:Math.max(g,h)}]}for(var f=[],v=0;v<n.length-1;v+=1)f.push({start:n[v],end:n[v+1]});return f},[n,m,a,M]);return y?b.map(function(g,h){var f=g.start,v=g.end;return u.createElement(Bt,{index:h,prefixCls:t,style:ge(r,h),start:f,end:v,key:h,onStartMove:i})}):null}function Yt(e){var t=e.prefixCls,r=e.style,n=e.children,a=e.value,i=e.onClick,c=u.useContext(ce),y=c.min,m=c.max,M=c.direction,b=c.includedStart,g=c.includedEnd,h=c.included,f="".concat(t,"-text"),v=He(M,a,y,m);return u.createElement("span",{className:Oe(f,p({},"".concat(f,"-active"),h&&b<=a&&a<=g)),style:Z(Z({},v),r),onMouseDown:function(s){s.stopPropagation()},onClick:function(){i(a)}},n)}function pt(e){var t=e.prefixCls,r=e.marks,n=e.onClick,a="".concat(t,"-mark");return r.length?u.createElement("div",{className:a},r.map(function(i){var c=i.value,y=i.style,m=i.label;return u.createElement(Yt,{key:c,prefixCls:a,style:y,value:c,onClick:n},m)})):null}function Gt(e){var t=e.prefixCls,r=e.value,n=e.style,a=e.activeStyle,i=u.useContext(ce),c=i.min,y=i.max,m=i.direction,M=i.included,b=i.includedStart,g=i.includedEnd,h="".concat(t,"-dot"),f=M&&b<=r&&r<=g,v=Z(Z({},He(m,r,c,y)),typeof n=="function"?n(r):n);return f&&(v=Z(Z({},v),typeof a=="function"?a(r):a)),u.createElement("span",{className:Oe(h,p({},"".concat(h,"-active"),f)),style:v})}function Xt(e){var t=e.prefixCls,r=e.marks,n=e.dots,a=e.style,i=e.activeStyle,c=u.useContext(ce),y=c.min,m=c.max,M=c.step,b=u.useMemo(function(){var g=new Set;if(r.forEach(function(f){g.add(f.value)}),n&&M!==null)for(var h=y;h<=m;)g.add(h),h+=M;return Array.from(g)},[y,m,M,n,r]);return u.createElement("div",{className:"".concat(t,"-step")},b.map(function(g){return u.createElement(Gt,{prefixCls:t,key:g,value:g,style:a,activeStyle:i})}))}function Vt(e,t,r,n,a,i){var c=u.useCallback(function(f){var v=isFinite(f)?f:e;return v=Math.min(t,f),v=Math.max(e,v),v},[e,t]),y=u.useCallback(function(f){if(r!==null){var v=e+Math.round((c(f)-e)/r)*r,d=function(S){return(String(S).split(".")[1]||"").length},s=Math.max(d(r),d(t),d(e)),C=Number(v.toFixed(s));return e<=C&&C<=t?C:null}return null},[r,e,t,c]),m=u.useCallback(function(f){var v=c(f),d=n.map(function(o){return o.value});r!==null&&d.push(y(f)),d.push(e,t);var s=d[0],C=t-e;return d.forEach(function(o){var S=Math.abs(v-o);S<=C&&(s=o,C=S)}),s},[e,t,n,r,c,y]),M=function f(v,d,s){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof d=="number"){var o,S=v[s],w=S+d,k=[];n.forEach(function(O){k.push(O.value)}),k.push(e,t),k.push(y(S));var N=d>0?1:-1;C==="unit"?k.push(y(S+N*r)):k.push(y(w)),k=k.filter(function(O){return O!==null}).filter(function(O){return d<0?O<=S:O>=S}),C==="unit"&&(k=k.filter(function(O){return O!==S}));var x=C==="unit"?S:w;o=k[0];var K=Math.abs(o-x);if(k.forEach(function(O){var j=Math.abs(O-x);j<K&&(o=O,K=j)}),o===void 0)return d<0?e:t;if(C==="dist")return o;if(Math.abs(d)>1){var R=te(v);return R[s]=o,f(R,d-N,s,C)}return o}else{if(d==="min")return e;if(d==="max")return t}},b=function(v,d,s){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",o=v[s],S=M(v,d,s,C);return{value:S,changed:S!==o}},g=function(v){return i===null&&v===0||typeof i=="number"&&v<i},h=function(v,d,s){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",o=v.map(m),S=o[s],w=M(o,d,s,C);if(o[s]=w,a===!1){var k=i||0;s>0&&o[s-1]!==S&&(o[s]=Math.max(o[s],o[s-1]+k)),s<o.length-1&&o[s+1]!==S&&(o[s]=Math.min(o[s],o[s+1]-k))}else if(typeof i=="number"||i===null){for(var N=s+1;N<o.length;N+=1)for(var x=!0;g(o[N]-o[N-1])&&x;){var K=b(o,1,N);o[N]=K.value,x=K.changed}for(var R=s;R>0;R-=1)for(var O=!0;g(o[R]-o[R-1])&&O;){var j=b(o,-1,R-1);o[R-1]=j.value,O=j.changed}for(var H=o.length-1;H>0;H-=1)for(var G=!0;g(o[H]-o[H-1])&&G;){var I=b(o,-1,H-1);o[H-1]=I.value,G=I.changed}for(var T=0;T<o.length-1;T+=1)for(var Y=!0;g(o[T+1]-o[T])&&Y;){var P=b(o,1,T+1);o[T+1]=P.value,Y=P.changed}}return{value:o[s],values:o}};return[m,h]}var qt=u.forwardRef(function(e,t){var r,n=e.prefixCls,a=n===void 0?"rc-slider":n,i=e.className,c=e.style,y=e.disabled,m=y===void 0?!1:y,M=e.keyboard,b=M===void 0?!0:M,g=e.autoFocus,h=e.onFocus,f=e.onBlur,v=e.min,d=v===void 0?0:v,s=e.max,C=s===void 0?100:s,o=e.step,S=o===void 0?1:o,w=e.value,k=e.defaultValue,N=e.range,x=e.count,K=e.onChange,R=e.onBeforeChange,O=e.onAfterChange,j=e.allowCross,H=j===void 0?!0:j,G=e.pushable,I=G===void 0?!1:G,T=e.draggableTrack,Y=e.reverse,P=e.vertical,F=e.included,D=F===void 0?!0:F,q=e.startPoint,me=e.trackStyle,he=e.handleStyle,$=e.railStyle,re=e.dotStyle,ne=e.activeDotStyle,X=e.marks,ae=e.dots,le=e.handleRender,se=e.tabIndex,Ee=se===void 0?0:se,Se=e.ariaLabelForHandle,ye=e.ariaLabelledByForHandle,be=e.ariaValueTextFormatterForHandle,z=u.useRef(),V=u.useRef(),_e=u.useMemo(function(){return P?Y?"ttb":"btt":Y?"rtl":"ltr"},[Y,P]),W=u.useMemo(function(){return isFinite(d)?d:0},[d]),fe=u.useMemo(function(){return isFinite(C)?C:100},[C]),ue=u.useMemo(function(){return S!==null&&S<=0?1:S},[S]),ot=u.useMemo(function(){return typeof I=="boolean"?I?ue:!1:I>=0?I:!1},[I,ue]),Re=u.useMemo(function(){var L=Object.keys(X||{});return L.map(function(_){var E=X[_],U={value:Number(_)};return E&&we(E)==="object"&&!u.isValidElement(E)&&("label"in E||"style"in E)?(U.style=E.style,U.label=E.label):U.label=E,U}).filter(function(_){var E=_.label;return E||typeof E=="number"}).sort(function(_,E){return _.value-E.value})},[X]),ct=Vt(W,fe,ue,Re,H,ot),$e=B(ct,2),Ne=$e[0],Ke=$e[1],lt=It(k,{value:w}),je=B(lt,2),J=je[0],st=je[1],Q=u.useMemo(function(){var L=J==null?[]:Array.isArray(J)?J:[J],_=B(L,1),E=_[0],U=E===void 0?W:E,A=J===null?[]:[U];if(N){if(A=te(L),x||J===void 0){var de=x>=0?x+1:2;for(A=A.slice(0,de);A.length<de;){var oe;A.push((oe=A[A.length-1])!==null&&oe!==void 0?oe:W)}}A.sort(function(ee,Me){return ee-Me})}return A.forEach(function(ee,Me){A[Me]=Ne(ee)}),A},[J,N,W,x,Ne]),Te=u.useRef(Q);Te.current=Q;var ie=function(_){return N?_:_[0]},Le=function(_){var E=te(_).sort(function(U,A){return U-A});K&&!Ft(E,Te.current,!0)&&K(ie(E)),st(E)},Be=function(_){if(!m){var E=0,U=fe-W;Q.forEach(function(de,oe){var ee=Math.abs(_-de);ee<=U&&(U=ee,E=oe)});var A=te(Q);A[E]=_,N&&!Q.length&&x===void 0&&A.push(_),R==null||R(ie(A)),Le(A),O==null||O(ie(A))}},ft=function(_){_.preventDefault();var E=V.current.getBoundingClientRect(),U=E.width,A=E.height,de=E.left,oe=E.top,ee=E.bottom,Me=E.right,qe=_.clientX,ze=_.clientY,Ce;switch(_e){case"btt":Ce=(ee-ze)/A;break;case"ttb":Ce=(ze-oe)/A;break;case"rtl":Ce=(Me-qe)/U;break;default:Ce=(qe-de)/U}var Mt=W+Ce*(fe-W);Be(Ne(Mt))},vt=u.useState(null),We=B(vt,2),xe=We[0],Ye=We[1],dt=function(_,E){if(!m){var U=Ke(Q,_,E);R==null||R(ie(Q)),Le(U.values),O==null||O(ie(U.values)),Ye(U.value)}};u.useEffect(function(){if(xe!==null){var L=Q.indexOf(xe);L>=0&&z.current.focus(L)}Ye(null)},[xe]);var gt=u.useMemo(function(){return T&&ue===null?!1:T},[T,ue]),mt=function(){O==null||O(ie(Te.current))},ht=jt(V,_e,Q,W,fe,Ne,Le,mt,Ke),Ae=B(ht,4),pe=Ae[0],Et=Ae[1],Fe=Ae[2],St=Ae[3],Ge=function(_,E){St(_,E),R==null||R(ie(Te.current))},Xe=pe!==-1;u.useEffect(function(){if(!Xe){var L=Q.lastIndexOf(Et);z.current.focus(L)}},[Xe]);var ve=u.useMemo(function(){return te(Fe).sort(function(L,_){return L-_})},[Fe]),yt=u.useMemo(function(){return N?[ve[0],ve[ve.length-1]]:[W,ve[0]]},[ve,N,W]),Ve=B(yt,2),Qe=Ve[0],Ze=Ve[1];u.useImperativeHandle(t,function(){return{focus:function(){z.current.focus(0)},blur:function(){var _=document,E=_.activeElement;V.current.contains(E)&&(E==null||E.blur())}}}),u.useEffect(function(){g&&z.current.focus(0)},[]);var bt=u.useMemo(function(){return{min:W,max:fe,direction:_e,disabled:m,keyboard:b,step:ue,included:D,includedStart:Qe,includedEnd:Ze,range:N,tabIndex:Ee,ariaLabelForHandle:Se,ariaLabelledByForHandle:ye,ariaValueTextFormatterForHandle:be}},[W,fe,_e,m,b,ue,D,Qe,Ze,N,Ee,Se,ye,be]);return u.createElement(ce.Provider,{value:bt},u.createElement("div",{ref:V,className:Oe(a,i,(r={},p(r,"".concat(a,"-disabled"),m),p(r,"".concat(a,"-vertical"),P),p(r,"".concat(a,"-horizontal"),!P),p(r,"".concat(a,"-with-marks"),Re.length),r)),style:c,onMouseDown:ft},u.createElement("div",{className:"".concat(a,"-rail"),style:$}),u.createElement(Wt,{prefixCls:a,style:me,values:ve,startPoint:q,onStartMove:gt?Ge:null}),u.createElement(Xt,{prefixCls:a,marks:Re,dots:ae,style:re,activeStyle:ne}),u.createElement(Kt,{ref:z,prefixCls:a,style:he,values:Fe,draggingIndex:pe,onStartMove:Ge,onOffsetChange:dt,onFocus:h,onBlur:f,handleRender:le}),u.createElement(pt,{prefixCls:a,marks:Re,onClick:Be})))});export{qt as S};
