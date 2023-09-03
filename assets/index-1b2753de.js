import{B as bt,C as Pe,r as a,D as W,E as Z}from"./index-90b8ff94.js";import{_ as nt,a as at,b as q,c as te}from"./toConsumableArray-efda5d7e.js";var ut={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var c=[],i=0;i<arguments.length;i++){var n=arguments[i];if(n){var o=typeof n;if(o==="string"||o==="number")c.push(n);else if(Array.isArray(n)){if(n.length){var h=r.apply(null,n);h&&c.push(h)}}else if(o==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){c.push(n.toString());continue}for(var m in n)t.call(n,m)&&n[m]&&c.push(m)}}}return c.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(ut);var Rt=ut.exports;const Re=bt(Rt);var Ie={},Nt=function(t){};function _t(e,t){}function Ot(e,t){}function Tt(){Ie={}}function it(e,t,r){!t&&!Ie[r]&&(e(!1,r),Ie[r]=!0)}function Ae(e,t){it(_t,e,t)}function xt(e,t){it(Ot,e,t)}Ae.preMessage=Nt;Ae.resetWarned=Tt;Ae.noteOnce=xt;function At(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=new Set;function i(n,o){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,m=c.has(n);if(Ae(!m,"Warning: There may be circular references"),m)return!1;if(n===o)return!0;if(r&&h>1)return!1;c.add(n);var y=h+1;if(Array.isArray(n)){if(!Array.isArray(o)||n.length!==o.length)return!1;for(var M=0;M<n.length;M++)if(!i(n[M],o[M],y))return!1;return!0}if(n&&o&&Pe(n)==="object"&&Pe(o)==="object"){var g=Object.keys(n);return g.length!==Object.keys(o).length?!1:g.every(function(E){return i(n[E],o[E],y)})}return!1}return i(e,t)}function Je(e){var t=a.useRef();t.current=e;var r=a.useCallback(function(){for(var c,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(c=t.current)===null||c===void 0?void 0:c.call.apply(c,[t].concat(n))},[]);return r}function Lt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var pe=Lt()?a.useLayoutEffect:a.useEffect,kt=function(t,r){var c=a.useRef(!0);pe(function(){return t(c.current)},r),pe(function(){return c.current=!1,function(){c.current=!0}},[])},et=function(t,r){kt(function(c){if(!c)return t()},r)};function tt(e){var t=a.useRef(!1),r=a.useState(e),c=W(r,2),i=c[0],n=c[1];a.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function o(h,m){m&&t.current||n(h)}return[i,o]}function Ue(e){return e!==void 0}function Ft(e,t){var r=t||{},c=r.defaultValue,i=r.value,n=r.onChange,o=r.postState,h=tt(function(){return Ue(i)?i:Ue(c)?typeof c=="function"?c():c:typeof e=="function"?e():e}),m=W(h,2),y=m[0],M=m[1],g=i!==void 0?i:y,E=o?o(g):g,f=Je(n),v=tt([g]),d=W(v,2),s=d[0],b=d[1];et(function(){var C=s[0];y!==C&&f(y,C)},[s]),et(function(){Ue(i)||M(i)},[i]);var u=Je(function(C,I){M(C,I),b([g],I)});return[E,u]}var l={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var r=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||r>=l.F1&&r<=l.F12)return!1;switch(r){case l.ALT:case l.CAPS_LOCK:case l.CONTEXT_MENU:case l.CTRL:case l.DOWN:case l.END:case l.ESC:case l.HOME:case l.INSERT:case l.LEFT:case l.MAC_FF_META:case l.META:case l.NUMLOCK:case l.NUM_CENTER:case l.PAGE_DOWN:case l.PAGE_UP:case l.PAUSE:case l.PRINT_SCREEN:case l.RIGHT:case l.SHIFT:case l.UP:case l.WIN_KEY:case l.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=l.ZERO&&t<=l.NINE||t>=l.NUM_ZERO&&t<=l.NUM_MULTIPLY||t>=l.A&&t<=l.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case l.SPACE:case l.QUESTION_MARK:case l.NUM_PLUS:case l.NUM_MINUS:case l.NUM_PERIOD:case l.NUM_DIVISION:case l.SEMICOLON:case l.DASH:case l.EQUALS:case l.COMMA:case l.PERIOD:case l.SLASH:case l.APOSTROPHE:case l.SINGLE_QUOTE:case l.OPEN_SQUARE_BRACKET:case l.BACKSLASH:case l.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},oe=a.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0});function we(e,t,r){return(e-t)/(r-t)}function De(e,t,r,c){var i=we(t,r,c),n={};switch(e){case"rtl":n.right="".concat(i*100,"%"),n.transform="translateX(50%)";break;case"btt":n.bottom="".concat(i*100,"%"),n.transform="translateY(50%)";break;case"ttb":n.top="".concat(i*100,"%"),n.transform="translateY(-50%)";break;default:n.left="".concat(i*100,"%"),n.transform="translateX(-50%)";break}return n}function me(e,t){return Array.isArray(e)?e[t]:e}var Ut=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],Pt=a.forwardRef(function(e,t){var r,c,i=e.prefixCls,n=e.value,o=e.valueIndex,h=e.onStartMove,m=e.style,y=e.render,M=e.dragging,g=e.onOffsetChange,E=nt(e,Ut),f=a.useContext(oe),v=f.min,d=f.max,s=f.direction,b=f.disabled,u=f.keyboard,C=f.range,I=f.tabIndex,L=f.ariaLabelForHandle,O=f.ariaLabelledByForHandle,F=f.ariaValueTextFormatterForHandle,K="".concat(i,"-handle"),_=function(w){b||h(w,o)},R=function(w){if(!b&&u){var T=null;switch(w.which||w.keyCode){case l.LEFT:T=s==="ltr"||s==="btt"?-1:1;break;case l.RIGHT:T=s==="ltr"||s==="btt"?1:-1;break;case l.UP:T=s!=="ttb"?1:-1;break;case l.DOWN:T=s!=="ttb"?-1:1;break;case l.HOME:T="min";break;case l.END:T="max";break;case l.PAGE_UP:T=2;break;case l.PAGE_DOWN:T=-2;break}T!==null&&(w.preventDefault(),g(T,o))}},B=De(s,n,v,d),H=a.createElement("div",at({ref:t,className:Re(K,(r={},Z(r,"".concat(K,"-").concat(o+1),C),Z(r,"".concat(K,"-dragging"),M),r)),style:q(q({},B),m),onMouseDown:_,onTouchStart:_,onKeyDown:R,tabIndex:b?null:me(I,o),role:"slider","aria-valuemin":v,"aria-valuemax":d,"aria-valuenow":n,"aria-disabled":b,"aria-label":me(L,o),"aria-labelledby":me(O,o),"aria-valuetext":(c=me(F,o))===null||c===void 0?void 0:c(n),"aria-orientation":s==="ltr"||s==="rtl"?"horizontal":"vertical"},E));return y&&(H=y(H,{index:o,prefixCls:i,value:n,dragging:M})),H}),It=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],wt=a.forwardRef(function(e,t){var r=e.prefixCls,c=e.style,i=e.onStartMove,n=e.onOffsetChange,o=e.values,h=e.handleRender,m=e.draggingIndex,y=nt(e,It),M=a.useRef({});return a.useImperativeHandle(t,function(){return{focus:function(E){var f;(f=M.current[E])===null||f===void 0||f.focus()}}}),a.createElement(a.Fragment,null,o.map(function(g,E){return a.createElement(Pt,at({ref:function(v){v?M.current[E]=v:delete M.current[E]},dragging:m===E,prefixCls:r,style:me(c,E),key:E,value:g,valueIndex:E,onStartMove:i,onOffsetChange:n,render:h},y))}))});function rt(e){var t="touches"in e?e.touches[0]:e;return{pageX:t.pageX,pageY:t.pageY}}function Dt(e,t,r,c,i,n,o,h,m){var y=a.useState(null),M=W(y,2),g=M[0],E=M[1],f=a.useState(-1),v=W(f,2),d=v[0],s=v[1],b=a.useState(r),u=W(b,2),C=u[0],I=u[1],L=a.useState(r),O=W(L,2),F=O[0],K=O[1],_=a.useRef(null),R=a.useRef(null);a.useEffect(function(){d===-1&&I(r)},[r,d]),a.useEffect(function(){return function(){document.removeEventListener("mousemove",_.current),document.removeEventListener("mouseup",R.current),document.removeEventListener("touchmove",_.current),document.removeEventListener("touchend",R.current)}},[]);var B=function(A,U){C.some(function(D,z){return D!==A[z]})&&(U!==void 0&&E(U),I(A),o(A))},H=function(A,U){if(A===-1){var D=F[0],z=F[F.length-1],ge=c-D,Ee=i-z,$=U*(i-c);$=Math.max($,ge),$=Math.min($,Ee);var re=n(D+$);$=re-D;var ne=F.map(function(se){return se+$});B(ne)}else{var V=(i-c)*U,ae=te(C);ae[A]=F[A];var le=m(ae,V,A,"dist");B(le.values,le.value)}},X=a.useRef(H);X.current=H;var w=function(A,U){A.stopPropagation();var D=r[U];s(U),E(D),K(r);var z=rt(A),ge=z.pageX,Ee=z.pageY,$=function(V){V.preventDefault();var ae=rt(V),le=ae.pageX,se=ae.pageY,he=le-ge,Se=se-Ee,Ce=e.current.getBoundingClientRect(),Me=Ce.width,J=Ce.height,j;switch(t){case"btt":j=-Se/J;break;case"ttb":j=Se/J;break;case"rtl":j=-he/Me;break;default:j=he/Me}X.current(U,j)},re=function ne(V){V.preventDefault(),document.removeEventListener("mouseup",ne),document.removeEventListener("mousemove",$),document.removeEventListener("touchend",ne),document.removeEventListener("touchmove",$),_.current=null,R.current=null,s(-1),h()};document.addEventListener("mouseup",re),document.addEventListener("mousemove",$),document.addEventListener("touchend",re),document.addEventListener("touchmove",$),_.current=$,R.current=re},T=a.useMemo(function(){var G=te(r).sort(function(U,D){return U-D}),A=te(C).sort(function(U,D){return U-D});return G.every(function(U,D){return U===A[D]})?C:r},[r,C]);return[d,g,T,w]}function Ht(e){var t,r=e.prefixCls,c=e.style,i=e.start,n=e.end,o=e.index,h=e.onStartMove,m=a.useContext(oe),y=m.direction,M=m.min,g=m.max,E=m.disabled,f=m.range,v="".concat(r,"-track"),d=we(i,M,g),s=we(n,M,g),b=function(I){!E&&h&&h(I,-1)},u={};switch(y){case"rtl":u.right="".concat(d*100,"%"),u.width="".concat(s*100-d*100,"%");break;case"btt":u.bottom="".concat(d*100,"%"),u.height="".concat(s*100-d*100,"%");break;case"ttb":u.top="".concat(d*100,"%"),u.height="".concat(s*100-d*100,"%");break;default:u.left="".concat(d*100,"%"),u.width="".concat(s*100-d*100,"%")}return a.createElement("div",{className:Re(v,(t={},Z(t,"".concat(v,"-").concat(o+1),f),Z(t,"".concat(r,"-track-draggable"),h),t)),style:q(q({},u),c),onMouseDown:b,onTouchStart:b})}function $t(e){var t=e.prefixCls,r=e.style,c=e.values,i=e.startPoint,n=e.onStartMove,o=a.useContext(oe),h=o.included,m=o.range,y=o.min,M=a.useMemo(function(){if(!m){if(c.length===0)return[];var g=i??y,E=c[0];return[{start:Math.min(g,E),end:Math.max(g,E)}]}for(var f=[],v=0;v<c.length-1;v+=1)f.push({start:c[v],end:c[v+1]});return f},[c,m,i,y]);return h?M.map(function(g,E){var f=g.start,v=g.end;return a.createElement(Ht,{index:E,prefixCls:t,style:me(r,E),start:f,end:v,key:E,onStartMove:n})}):null}function Kt(e){var t=e.prefixCls,r=e.style,c=e.children,i=e.value,n=e.onClick,o=a.useContext(oe),h=o.min,m=o.max,y=o.direction,M=o.includedStart,g=o.includedEnd,E=o.included,f="".concat(t,"-text"),v=De(y,i,h,m);return a.createElement("span",{className:Re(f,Z({},"".concat(f,"-active"),E&&M<=i&&i<=g)),style:q(q({},v),r),onMouseDown:function(s){s.stopPropagation()},onClick:function(){n(i)}},c)}function Bt(e){var t=e.prefixCls,r=e.marks,c=e.onClick,i="".concat(t,"-mark");return r.length?a.createElement("div",{className:i},r.map(function(n){var o=n.value,h=n.style,m=n.label;return a.createElement(Kt,{key:o,prefixCls:i,style:h,value:o,onClick:c},m)})):null}function Wt(e){var t=e.prefixCls,r=e.value,c=e.style,i=e.activeStyle,n=a.useContext(oe),o=n.min,h=n.max,m=n.direction,y=n.included,M=n.includedStart,g=n.includedEnd,E="".concat(t,"-dot"),f=y&&M<=r&&r<=g,v=q(q({},De(m,r,o,h)),typeof c=="function"?c(r):c);return f&&(v=q(q({},v),typeof i=="function"?i(r):i)),a.createElement("span",{className:Re(E,Z({},"".concat(E,"-active"),f)),style:v})}function Yt(e){var t=e.prefixCls,r=e.marks,c=e.dots,i=e.style,n=e.activeStyle,o=a.useContext(oe),h=o.min,m=o.max,y=o.step,M=a.useMemo(function(){var g=new Set;if(r.forEach(function(f){g.add(f.value)}),c&&y!==null)for(var E=h;E<=m;)g.add(E),E+=y;return Array.from(g)},[h,m,y,c,r]);return a.createElement("div",{className:"".concat(t,"-step")},M.map(function(g){return a.createElement(Wt,{prefixCls:t,key:g,value:g,style:i,activeStyle:n})}))}function Gt(e,t,r,c,i,n){var o=a.useCallback(function(f){var v=isFinite(f)?f:e;return v=Math.min(t,f),v=Math.max(e,v),v},[e,t]),h=a.useCallback(function(f){if(r!==null){var v=e+Math.round((o(f)-e)/r)*r,d=function(C){return(String(C).split(".")[1]||"").length},s=Math.max(d(r),d(t),d(e)),b=Number(v.toFixed(s));return e<=b&&b<=t?b:null}return null},[r,e,t,o]),m=a.useCallback(function(f){var v=o(f),d=c.map(function(u){return u.value});r!==null&&d.push(h(f)),d.push(e,t);var s=d[0],b=t-e;return d.forEach(function(u){var C=Math.abs(v-u);C<=b&&(s=u,b=C)}),s},[e,t,c,r,o,h]),y=function f(v,d,s){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof d=="number"){var u,C=v[s],I=C+d,L=[];c.forEach(function(R){L.push(R.value)}),L.push(e,t),L.push(h(C));var O=d>0?1:-1;b==="unit"?L.push(h(C+O*r)):L.push(h(I)),L=L.filter(function(R){return R!==null}).filter(function(R){return d<0?R<=C:R>=C}),b==="unit"&&(L=L.filter(function(R){return R!==C}));var F=b==="unit"?C:I;u=L[0];var K=Math.abs(u-F);if(L.forEach(function(R){var B=Math.abs(R-F);B<K&&(u=R,K=B)}),u===void 0)return d<0?e:t;if(b==="dist")return u;if(Math.abs(d)>1){var _=te(v);return _[s]=u,f(_,d-O,s,b)}return u}else{if(d==="min")return e;if(d==="max")return t}},M=function(v,d,s){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",u=v[s],C=y(v,d,s,b);return{value:C,changed:C!==u}},g=function(v){return n===null&&v===0||typeof n=="number"&&v<n},E=function(v,d,s){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",u=v.map(m),C=u[s],I=y(u,d,s,b);if(u[s]=I,i===!1){var L=n||0;s>0&&u[s-1]!==C&&(u[s]=Math.max(u[s],u[s-1]+L)),s<u.length-1&&u[s+1]!==C&&(u[s]=Math.min(u[s],u[s+1]-L))}else if(typeof n=="number"||n===null){for(var O=s+1;O<u.length;O+=1)for(var F=!0;g(u[O]-u[O-1])&&F;){var K=M(u,1,O);u[O]=K.value,F=K.changed}for(var _=s;_>0;_-=1)for(var R=!0;g(u[_]-u[_-1])&&R;){var B=M(u,-1,_-1);u[_-1]=B.value,R=B.changed}for(var H=u.length-1;H>0;H-=1)for(var X=!0;g(u[H]-u[H-1])&&X;){var w=M(u,-1,H-1);u[H-1]=w.value,X=w.changed}for(var T=0;T<u.length-1;T+=1)for(var G=!0;g(u[T+1]-u[T])&&G;){var A=M(u,1,T+1);u[T+1]=A.value,G=A.changed}}return{value:u[s],values:u}};return[m,E]}var jt=a.forwardRef(function(e,t){var r,c=e.prefixCls,i=c===void 0?"rc-slider":c,n=e.className,o=e.style,h=e.disabled,m=h===void 0?!1:h,y=e.keyboard,M=y===void 0?!0:y,g=e.autoFocus,E=e.onFocus,f=e.onBlur,v=e.min,d=v===void 0?0:v,s=e.max,b=s===void 0?100:s,u=e.step,C=u===void 0?1:u,I=e.value,L=e.defaultValue,O=e.range,F=e.count,K=e.onChange,_=e.onBeforeChange,R=e.onAfterChange,B=e.allowCross,H=B===void 0?!0:B,X=e.pushable,w=X===void 0?!1:X,T=e.draggableTrack,G=e.reverse,A=e.vertical,U=e.included,D=U===void 0?!0:U,z=e.startPoint,ge=e.trackStyle,Ee=e.handleStyle,$=e.railStyle,re=e.dotStyle,ne=e.activeDotStyle,V=e.marks,ae=e.dots,le=e.handleRender,se=e.tabIndex,he=se===void 0?0:se,Se=e.ariaLabelForHandle,Ce=e.ariaLabelledByForHandle,Me=e.ariaValueTextFormatterForHandle,J=a.useRef(),j=a.useRef(),Ne=a.useMemo(function(){return A?G?"ttb":"btt":G?"rtl":"ltr"},[G,A]),Y=a.useMemo(function(){return isFinite(d)?d:0},[d]),fe=a.useMemo(function(){return isFinite(b)?b:100},[b]),ue=a.useMemo(function(){return C!==null&&C<=0?1:C},[C]),ct=a.useMemo(function(){return typeof w=="boolean"?w?ue:!1:w>=0?w:!1},[w,ue]),_e=a.useMemo(function(){var k=Object.keys(V||{});return k.map(function(N){var S=V[N],P={value:Number(N)};return S&&Pe(S)==="object"&&!a.isValidElement(S)&&("label"in S||"style"in S)?(P.style=S.style,P.label=S.label):P.label=S,P}).filter(function(N){var S=N.label;return S||typeof S=="number"}).sort(function(N,S){return N.value-S.value})},[V]),ot=Gt(Y,fe,ue,_e,H,ct),He=W(ot,2),Oe=He[0],$e=He[1],lt=Ft(L,{value:I}),Ke=W(lt,2),p=Ke[0],st=Ke[1],Q=a.useMemo(function(){var k=p==null?[]:Array.isArray(p)?p:[p],N=W(k,1),S=N[0],P=S===void 0?Y:S,x=p===null?[]:[P];if(O){if(x=te(k),F||p===void 0){var de=F>=0?F+1:2;for(x=x.slice(0,de);x.length<de;){var ce;x.push((ce=x[x.length-1])!==null&&ce!==void 0?ce:Y)}}x.sort(function(ee,ye){return ee-ye})}return x.forEach(function(ee,ye){x[ye]=Oe(ee)}),x},[p,O,Y,F,Oe]),Te=a.useRef(Q);Te.current=Q;var ie=function(N){return O?N:N[0]},Le=function(N){var S=te(N).sort(function(P,x){return P-x});K&&!At(S,Te.current,!0)&&K(ie(S)),st(S)},Be=function(N){if(!m){var S=0,P=fe-Y;Q.forEach(function(de,ce){var ee=Math.abs(N-de);ee<=P&&(P=ee,S=ce)});var x=te(Q);x[S]=N,O&&!Q.length&&F===void 0&&x.push(N),_==null||_(ie(x)),Le(x),R==null||R(ie(x))}},ft=function(N){N.preventDefault();var S=j.current.getBoundingClientRect(),P=S.width,x=S.height,de=S.left,ce=S.top,ee=S.bottom,ye=S.right,qe=N.clientX,ze=N.clientY,be;switch(Ne){case"btt":be=(ee-ze)/x;break;case"ttb":be=(ze-ce)/x;break;case"rtl":be=(ye-qe)/P;break;default:be=(qe-de)/P}var yt=Y+be*(fe-Y);Be(Oe(yt))},vt=a.useState(null),We=W(vt,2),ke=We[0],Ye=We[1],dt=function(N,S){if(!m){var P=$e(Q,N,S);_==null||_(ie(Q)),Le(P.values),R==null||R(ie(P.values)),Ye(P.value)}};a.useEffect(function(){if(ke!==null){var k=Q.indexOf(ke);k>=0&&J.current.focus(k)}Ye(null)},[ke]);var mt=a.useMemo(function(){return T&&ue===null?!1:T},[T,ue]),gt=function(){R==null||R(ie(Te.current))},Et=Dt(j,Ne,Q,Y,fe,Oe,Le,gt,$e),xe=W(Et,4),Ge=xe[0],ht=xe[1],Fe=xe[2],St=xe[3],Xe=function(N,S){St(N,S),_==null||_(ie(Te.current))},Ve=Ge!==-1;a.useEffect(function(){if(!Ve){var k=Q.lastIndexOf(ht);J.current.focus(k)}},[Ve]);var ve=a.useMemo(function(){return te(Fe).sort(function(k,N){return k-N})},[Fe]),Ct=a.useMemo(function(){return O?[ve[0],ve[ve.length-1]]:[Y,ve[0]]},[ve,O,Y]),je=W(Ct,2),Qe=je[0],Ze=je[1];a.useImperativeHandle(t,function(){return{focus:function(){J.current.focus(0)},blur:function(){var N=document,S=N.activeElement;j.current.contains(S)&&(S==null||S.blur())}}}),a.useEffect(function(){g&&J.current.focus(0)},[]);var Mt=a.useMemo(function(){return{min:Y,max:fe,direction:Ne,disabled:m,keyboard:M,step:ue,included:D,includedStart:Qe,includedEnd:Ze,range:O,tabIndex:he,ariaLabelForHandle:Se,ariaLabelledByForHandle:Ce,ariaValueTextFormatterForHandle:Me}},[Y,fe,Ne,m,M,ue,D,Qe,Ze,O,he,Se,Ce,Me]);return a.createElement(oe.Provider,{value:Mt},a.createElement("div",{ref:j,className:Re(i,n,(r={},Z(r,"".concat(i,"-disabled"),m),Z(r,"".concat(i,"-vertical"),A),Z(r,"".concat(i,"-horizontal"),!A),Z(r,"".concat(i,"-with-marks"),_e.length),r)),style:o,onMouseDown:ft},a.createElement("div",{className:"".concat(i,"-rail"),style:$}),a.createElement($t,{prefixCls:i,style:ge,values:ve,startPoint:z,onStartMove:mt?Xe:null}),a.createElement(Yt,{prefixCls:i,marks:_e,dots:ae,style:re,activeStyle:ne}),a.createElement(wt,{ref:J,prefixCls:i,style:Ee,values:Fe,draggingIndex:Ge,onStartMove:Xe,onOffsetChange:dt,onFocus:E,onBlur:f,handleRender:le}),a.createElement(Bt,{prefixCls:i,marks:_e,onClick:Be})))});export{jt as S};