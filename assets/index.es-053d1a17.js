import{t as k,r as i}from"./index-acb0ca69.js";import{u as Lo}from"./emotion-unitless.esm-475d8cc4.js";var W=function(){return W=Object.assign||function(t){for(var n,o=1,r=arguments.length;o<r;o++){n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},W.apply(this,arguments)};function ut(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,a;o<r;o++)(a||!(o in t))&&(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))}var j="-ms-",Ue="-moz-",A="-webkit-",Fn="comm",mt="rule",zt="decl",zo="@import",Mn="@keyframes",Wo="@layer",Bo=Math.abs,Wt=String.fromCharCode,At=Object.assign;function Go(e,t){return L(e,0)^45?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}function Nn(e){return e.trim()}function ge(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function it(e,t){return e.indexOf(t)}function L(e,t){return e.charCodeAt(t)|0}function Te(e,t,n){return e.slice(t,n)}function le(e){return e.length}function Ln(e){return e.length}function Ve(e,t){return t.push(e),e}function Yo(e,t){return e.map(t).join("")}function hn(e,t){return e.filter(function(n){return!ge(n,t)})}var bt=1,Fe=1,zn=0,X=0,F=0,We="";function wt(e,t,n,o,r,a,s,c){return{value:e,root:t,parent:n,type:o,props:r,children:a,line:bt,column:Fe,length:s,return:"",siblings:c}}function ye(e,t){return At(wt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function je(e){for(;e.root;)e=ye(e.root,{children:[e]});Ve(e,e.siblings)}function Vo(){return F}function Uo(){return F=X>0?L(We,--X):0,Fe--,F===10&&(Fe=1,bt--),F}function ne(){return F=X<zn?L(We,X++):0,Fe++,F===10&&(Fe=1,bt++),F}function Oe(){return L(We,X)}function st(){return X}function yt(e,t){return Te(We,e,t)}function _t(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ko(e){return bt=Fe=1,zn=le(We=e),X=0,[]}function qo(e){return We="",e}function $t(e){return Nn(yt(X-1,jt(e===91?e+2:e===40?e+1:e)))}function Qo(e){for(;(F=Oe())&&F<33;)ne();return _t(e)>2||_t(F)>3?"":" "}function Zo(e,t){for(;--t&&ne()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return yt(e,st()+(t<6&&Oe()==32&&ne()==32))}function jt(e){for(;ne();)switch(F){case e:return X;case 34:case 39:e!==34&&e!==39&&jt(F);break;case 40:e===41&&jt(e);break;case 92:ne();break}return X}function Xo(e,t){for(;ne()&&e+F!==47+10;)if(e+F===42+42&&Oe()===47)break;return"/*"+yt(t,X-1)+"*"+Wt(e===47?e:ne())}function Jo(e){for(;!_t(Oe());)ne();return yt(e,X)}function er(e){return qo(lt("",null,null,null,[""],e=Ko(e),0,[0],e))}function lt(e,t,n,o,r,a,s,c,d){for(var g=0,u=0,p=s,v=0,h=0,b=0,E=1,$=1,C=1,m=0,w="",O=r,S=a,D=o,f=w;$;)switch(b=m,m=ne()){case 40:if(b!=108&&L(f,p-1)==58){it(f+=R($t(m),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:f+=$t(m);break;case 9:case 10:case 13:case 32:f+=Qo(b);break;case 92:f+=Zo(st()-1,7);continue;case 47:switch(Oe()){case 42:case 47:Ve(tr(Xo(ne(),st()),t,n,d),d);break;default:f+="/"}break;case 123*E:c[g++]=le(f)*C;case 125*E:case 59:case 0:switch(m){case 0:case 125:$=0;case 59+u:C==-1&&(f=R(f,/\f/g,"")),h>0&&le(f)-p&&Ve(h>32?bn(f+";",o,n,p-1,d):bn(R(f," ","")+";",o,n,p-2,d),d);break;case 59:f+=";";default:if(Ve(D=mn(f,t,n,g,u,r,c,w,O=[],S=[],p,a),a),m===123)if(u===0)lt(f,t,D,D,O,a,p,c,S);else switch(v===99&&L(f,3)===110?100:v){case 100:case 108:case 109:case 115:lt(e,D,D,o&&Ve(mn(e,D,D,0,0,r,c,w,r,O=[],p,S),S),r,S,p,c,o?O:S);break;default:lt(f,D,D,D,[""],S,0,c,S)}}g=u=h=0,E=C=1,w=f="",p=s;break;case 58:p=1+le(f),h=b;default:if(E<1){if(m==123)--E;else if(m==125&&E++==0&&Uo()==125)continue}switch(f+=Wt(m),m*E){case 38:C=u>0?1:(f+="\f",-1);break;case 44:c[g++]=(le(f)-1)*C,C=1;break;case 64:Oe()===45&&(f+=$t(ne())),v=Oe(),u=p=le(w=f+=Jo(st())),m++;break;case 45:b===45&&le(f)==2&&(E=0)}}return a}function mn(e,t,n,o,r,a,s,c,d,g,u,p){for(var v=r-1,h=r===0?a:[""],b=Ln(h),E=0,$=0,C=0;E<o;++E)for(var m=0,w=Te(e,v+1,v=Bo($=s[E])),O=e;m<b;++m)(O=Nn($>0?h[m]+" "+w:R(w,/&\f/g,h[m])))&&(d[C++]=O);return wt(e,t,n,r===0?mt:c,d,g,u,p)}function tr(e,t,n,o){return wt(e,t,n,Fn,Wt(Vo()),Te(e,2,-2),0,o)}function bn(e,t,n,o,r){return wt(e,t,n,zt,Te(e,0,o),Te(e,o+1,-1),o,r)}function Wn(e,t,n){switch(Go(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return Ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+Ue+e+j+e+e;case 5936:switch(L(e,t+11)){case 114:return A+e+j+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+j+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+j+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+j+e+e;case 6165:return A+e+j+"flex-"+e+e;case 5187:return A+e+R(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return A+e+j+"flex-item-"+R(e,/flex-|-self/g,"")+(ge(e,/flex-|baseline/)?"":j+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return A+e+j+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+j+R(e,"shrink","negative")+e;case 5292:return A+e+j+R(e,"basis","preferred-size")+e;case 6060:return A+"box-"+R(e,"-grow","")+A+e+j+R(e,"grow","positive")+e;case 4554:return A+R(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!ge(e,/flex-|baseline/))return j+"grid-column-align"+Te(e,t)+e;break;case 2592:case 3360:return j+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(o,r){return t=r,ge(o.props,/grid-\w+-end/)})?~it(e+(n=n[t].value),"span")?e:j+R(e,"-start","")+e+j+"grid-row-span:"+(~it(n,"span")?ge(n,/\d+/):+ge(n,/\d+/)-+ge(e,/\d+/))+";":j+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(o){return ge(o.props,/grid-\w+-start/)})?e:j+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(le(e)-1-t>6)switch(L(e,t+1)){case 109:if(L(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Ue+(L(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~it(e,"stretch")?Wn(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,r,a,s,c,d,g){return j+r+":"+a+g+(s?j+r+"-span:"+(c?d:+d-+a)+g:"")+e});case 4949:if(L(e,t+6)===121)return R(e,":",":"+A)+e;break;case 6444:switch(L(e,L(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(L(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+j+"$2box$3")+e;case 100:return R(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function pt(e,t){for(var n="",o=0;o<e.length;o++)n+=t(e[o],o,e,t)||"";return n}function nr(e,t,n,o){switch(e.type){case Wo:if(e.children.length)break;case zo:case zt:return e.return=e.return||e.value;case Fn:return"";case Mn:return e.return=e.value+"{"+pt(e.children,o)+"}";case mt:if(!le(e.value=e.props.join(",")))return""}return le(n=pt(e.children,o))?e.return=e.value+"{"+n+"}":""}function or(e){var t=Ln(e);return function(n,o,r,a){for(var s="",c=0;c<t;c++)s+=e[c](n,o,r,a)||"";return s}}function rr(e){return function(t){t.root||(t=t.return)&&e(t)}}function ar(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case zt:e.return=Wn(e.value,e.length,n);return;case Mn:return pt([ye(e,{value:R(e.value,"@","@"+A)})],o);case mt:if(e.length)return Yo(n=e.props,function(r){switch(ge(r,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":je(ye(e,{props:[R(r,/:(read-\w+)/,":"+Ue+"$1")]})),je(ye(e,{props:[r]})),At(e,{props:hn(n,o)});break;case"::placeholder":je(ye(e,{props:[R(r,/:(plac\w+)/,":"+A+"input-$1")]})),je(ye(e,{props:[R(r,/:(plac\w+)/,":"+Ue+"$1")]})),je(ye(e,{props:[R(r,/:(plac\w+)/,j+"input-$1")]})),je(ye(e,{props:[r]})),At(e,{props:hn(n,o)});break}return""})}}var Me=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Bt=typeof window<"u"&&"HTMLElement"in window,ir=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xt=Object.freeze([]),Ne=Object.freeze({});function sr(e,t,n){return n===void 0&&(n=Ne),e.theme!==n.theme&&e.theme||t||n.theme}var Bn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cr=/(^-|-$)/g;function wn(e){return e.replace(lr,"-").replace(cr,"")}var dr=/(a)(d)/gi,yn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ht(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yn(t%52)+n;return(yn(t%52)+n).replace(dr,"$1-$2")}var Ot,He=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gn=function(e){return He(5381,e)};function ur(e){return Ht(Gn(e)>>>0)}function pr(e){return e.displayName||e.name||"Component"}function kt(e){return typeof e=="string"&&!0}var Yn=typeof Symbol=="function"&&Symbol.for,Vn=Yn?Symbol.for("react.memo"):60115,gr=Yn?Symbol.for("react.forward_ref"):60112,fr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mr=((Ot={})[gr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot[Vn]=Un,Ot);function xn(e){return("type"in(t=e)&&t.type.$$typeof)===Vn?Un:"$$typeof"in e?mr[e.$$typeof]:fr;var t}var br=Object.defineProperty,wr=Object.getOwnPropertyNames,vn=Object.getOwnPropertySymbols,yr=Object.getOwnPropertyDescriptor,xr=Object.getPrototypeOf,Cn=Object.prototype;function Kn(e,t,n){if(typeof t!="string"){if(Cn){var o=xr(t);o&&o!==Cn&&Kn(e,o,n)}var r=wr(t);vn&&(r=r.concat(vn(t)));for(var a=xn(e),s=xn(t),c=0;c<r.length;++c){var d=r[c];if(!(d in hr||n&&n[d]||s&&d in s||a&&d in a)){var g=yr(t,d);try{br(e,d,g)}catch{}}}}return e}function Pe(e){return typeof e=="function"}function Gt(e){return typeof e=="object"&&"styledComponentId"in e}function $e(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Sn(e,t){if(e.length===0)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function Qe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tt(e,t,n){if(n===void 0&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=Tt(e[o],t[o]);else if(Qe(t))for(var o in t)e[o]=Tt(e[o],t[o]);return e}function Yt(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var vr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,o=0;o<t;o++)n+=this.groupSizes[o];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var o=this.groupSizes,r=o.length,a=r;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=r;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(c,n[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],o=this.indexOfGroup(t),r=o+n;this.groupSizes[t]=0;for(var a=o;a<r;a++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var o=this.groupSizes[t],r=this.indexOfGroup(t),a=r+o,s=r;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),ct=new Map,gt=new Map,Pt=1,ot=function(e){if(ct.has(e))return ct.get(e);for(;gt.has(Pt);)Pt++;var t=Pt++;return ct.set(e,t),gt.set(t,e),t},Cr=function(e,t){ct.set(e,t),gt.set(t,e)},Sr="style[".concat(Me,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Rr=new RegExp("^".concat(Me,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Er=function(e,t,n){for(var o,r=n.split(","),a=0,s=r.length;a<s;a++)(o=r[a])&&e.registerName(t,o)},$r=function(e,t){for(var n,o=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],a=0,s=o.length;a<s;a++){var c=o[a].trim();if(c){var d=c.match(Rr);if(d){var g=0|parseInt(d[1],10),u=d[2];g!==0&&(Cr(u,g),Er(e,u,d[3]),e.getTag().insertRules(g,r)),r.length=0}else r.push(c)}}};function Or(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qn=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(c){var d=Array.from(c.querySelectorAll("style[".concat(Me,"]")));return d[d.length-1]}(n),a=r!==void 0?r.nextSibling:null;o.setAttribute(Me,"active"),o.setAttribute("data-styled-version","6.0.7");var s=Or();return s&&o.setAttribute("nonce",s),n.insertBefore(o,a),o},kr=function(){function e(t){this.element=qn(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,r=0,a=o.length;r<a;r++){var s=o[r];if(s.ownerNode===n)return s}throw De(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Pr=function(){function e(t){this.element=qn(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Dr=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rn=Bt,Ir={isServer:!Bt,useCSSOMInjection:!ir},Qn=function(){function e(t,n,o){t===void 0&&(t=Ne),n===void 0&&(n={});var r=this;this.options=W(W({},Ir),t),this.gs=n,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Bt&&Rn&&(Rn=!1,function(a){for(var s=document.querySelectorAll(Sr),c=0,d=s.length;c<d;c++){var g=s[c];g&&g.getAttribute(Me)!=="active"&&($r(a,g),g.parentNode&&g.parentNode.removeChild(g))}}(this)),Yt(this,function(){return function(a){for(var s=a.getTag(),c=s.length,d="",g=function(p){var v=function(C){return gt.get(C)}(p);if(v===void 0)return"continue";var h=a.names.get(v),b=s.getGroup(p);if(h===void 0||b.length===0)return"continue";var E="".concat(Me,".g").concat(p,'[id="').concat(v,'"]'),$="";h!==void 0&&h.forEach(function(C){C.length>0&&($+="".concat(C,","))}),d+="".concat(b).concat(E,'{content:"').concat($,'"}').concat(`/*!sc*/
`)},u=0;u<c;u++)g(u);return d}(r)})}return e.registerId=function(t){return ot(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(W(W({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var o=n.useCSSOMInjection,r=n.target;return n.isServer?new Dr(r):o?new kr(r):new Pr(r)}(this.options),new vr(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ot(t),this.names.has(t))this.names.get(t).add(n);else{var o=new Set;o.add(n),this.names.set(t,o)}},e.prototype.insertRules=function(t,n,o){this.registerName(t,n),this.getTag().insertRules(ot(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ot(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ar=/&/g,_r=/^\s*\/\/.*$/gm;function Zn(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Zn(n.children,t)),n})}function jr(e){var t,n,o,r=e===void 0?Ne:e,a=r.options,s=a===void 0?Ne:a,c=r.plugins,d=c===void 0?xt:c,g=function(v,h,b){return b===n||b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):v},u=d.slice();u.push(function(v){v.type===mt&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(Ar,n).replace(o,g))}),s.prefix&&u.push(ar),u.push(nr);var p=function(v,h,b,E){h===void 0&&(h=""),b===void 0&&(b=""),E===void 0&&(E="&"),t=E,n=h,o=new RegExp("\\".concat(n,"\\b"),"g");var $=v.replace(_r,""),C=er(b||h?"".concat(b," ").concat(h," { ").concat($," }"):$);s.namespace&&(C=Zn(C,s.namespace));var m=[];return pt(C,or(u.concat(rr(function(w){return m.push(w)})))),m};return p.hash=d.length?d.reduce(function(v,h){return h.name||De(15),He(v,h.name)},5381).toString():"",p}var Hr=new Qn,Ft=jr(),Xn=k.createContext({shouldForwardProp:void 0,styleSheet:Hr,stylis:Ft});Xn.Consumer;k.createContext(void 0);function En(){return i.useContext(Xn)}var Tr=function(){function e(t,n){var o=this;this.inject=function(r,a){a===void 0&&(a=Ft);var s=o.name+a.hash;r.hasNameForId(o.id,s)||r.insertRules(o.id,s,a(o.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Yt(this,function(){throw De(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ft),this.name+t.hash},e}(),Fr=function(e){return e>="A"&&e<="Z"};function $n(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(n===1&&o==="-"&&e[0]==="-")return e;Fr(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var Jn=function(e){return e==null||e===!1||e===""},eo=function(e){var t,n,o=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!Jn(a)&&(Array.isArray(a)&&a.isCss||Pe(a)?o.push("".concat($n(r),":"),a,";"):Qe(a)?o.push.apply(o,ut(ut(["".concat(r," {")],eo(a),!1),["}"],!1)):o.push("".concat($n(r),": ").concat((t=r,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Lo||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function ke(e,t,n,o){if(Jn(e))return[];if(Gt(e))return[".".concat(e.styledComponentId)];if(Pe(e)){if(!Pe(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var r=e(t);return ke(r,t,n,o)}var a;return e instanceof Tr?n?(e.inject(n,o),[e.getName(o)]):[e]:Qe(e)?eo(e):Array.isArray(e)?Array.prototype.concat.apply(xt,e.map(function(s){return ke(s,t,n,o)})):[e.toString()]}function Mr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pe(n)&&!Gt(n))return!1}return!0}var Nr=Gn("6.0.7"),Lr=function(){function e(t,n,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Mr(t),this.componentId=n,this.baseHash=He(Nr,n),this.baseStyle=o,Qn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,o){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=$e(r,this.staticRulesId);else{var a=Sn(ke(this.rules,t,n,o)),s=Ht(He(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var c=o(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,c)}r=$e(r,s),this.staticRulesId=s}else{for(var d=He(this.baseHash,o.hash),g="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")g+=p;else if(p){var v=Sn(ke(p,t,n,o));d=He(d,v),g+=v}}if(g){var h=Ht(d>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,o(g,".".concat(h),void 0,this.componentId)),r=$e(r,h)}}return r},e}(),ft=k.createContext(void 0);ft.Consumer;function zr(e){var t=k.useContext(ft),n=i.useMemo(function(){return function(o,r){if(!o)throw De(14);if(Pe(o)){var a=o(r);return a}if(Array.isArray(o)||typeof o!="object")throw De(8);return r?W(W({},r),o):o}(e.theme,t)},[e.theme,t]);return e.children?k.createElement(ft.Provider,{value:n},e.children):null}var Dt={};function Wr(e,t,n){var o=Gt(e),r=e,a=!kt(e),s=t.attrs,c=s===void 0?xt:s,d=t.componentId,g=d===void 0?function(w,O){var S=typeof w!="string"?"sc":wn(w);Dt[S]=(Dt[S]||0)+1;var D="".concat(S,"-").concat(ur("6.0.7"+S+Dt[S]));return O?"".concat(O,"-").concat(D):D}(t.displayName,t.parentComponentId):d,u=t.displayName;u===void 0&&function(w){return kt(w)?"styled.".concat(w):"Styled(".concat(pr(w),")")}(e);var p=t.displayName&&t.componentId?"".concat(wn(t.displayName),"-").concat(t.componentId):t.componentId||g,v=o&&r.attrs?r.attrs.concat(c).filter(Boolean):c,h=t.shouldForwardProp;if(o&&r.shouldForwardProp){var b=r.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;h=function(w,O){return b(w,O)&&E(w,O)}}else h=b}var $=new Lr(n,p,o?r.componentStyle:void 0);function C(w,O){return function(S,D,f){var _=S.attrs,oe=S.componentStyle,B=S.defaultProps,q=S.foldedComponentIds,re=S.styledComponentId,H=S.target,fe=k.useContext(ft),ve=En(),ae=S.shouldForwardProp||ve.shouldForwardProp,G=function(de,Y,ue){for(var K,J=W(W({},Y),{className:void 0,theme:ue}),Ce=0;Ce<de.length;Ce+=1){var pe=Pe(K=de[Ce])?K(J):K;for(var Z in pe)J[Z]=Z==="className"?$e(J[Z],pe[Z]):Z==="style"?W(W({},J[Z]),pe[Z]):pe[Z]}return Y.className&&(J.className=$e(J.className,Y.className)),J}(_,D,sr(D,fe,B)||Ne),he=G.as||H,ce={};for(var Q in G)G[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?ce.as=G.forwardedAs:ae&&!ae(Q,he)||(ce[Q]=G[Q]));var Ie=function(de,Y){var ue=En(),K=de.generateAndInjectStyles(Y,ue.styleSheet,ue.stylis);return K}(oe,G),U=$e(q,re);return Ie&&(U+=" "+Ie),G.className&&(U+=" "+G.className),ce[kt(he)&&!Bn.has(he)?"class":"className"]=U,ce.ref=f,i.createElement(he,ce)}(m,w,O)}var m=k.forwardRef(C);return m.attrs=v,m.componentStyle=$,m.shouldForwardProp=h,m.foldedComponentIds=o?$e(r.foldedComponentIds,r.styledComponentId):"",m.styledComponentId=p,m.target=o?r.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=o?function(O){for(var S=[],D=1;D<arguments.length;D++)S[D-1]=arguments[D];for(var f=0,_=S;f<_.length;f++)Tt(O,_[f],!0);return O}({},r.defaultProps,w):w}}),Yt(m,function(){return".".concat(m.styledComponentId)}),a&&Kn(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function On(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var kn=function(e){return Object.assign(e,{isCss:!0})};function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Pe(e)||Qe(e)){var o=e;return kn(ke(On(xt,ut([o],t,!0))))}var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ke(r):kn(ke(On(r,t)))}function Mt(e,t,n){if(n===void 0&&(n=Ne),!t)throw De(1,t);var o=function(r){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,N.apply(void 0,ut([r],a,!1)))};return o.attrs=function(r){return Mt(e,t,W(W({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},o.withConfig=function(r){return Mt(e,t,W(W({},n),r))},o}var to=function(e){return Mt(Wr,e)},P=to;Bn.forEach(function(e){P[e]=to(e)});var xe;function Le(e,t){return e[t]}function Nt(e,t){return t.split(".").reduce((n,o)=>{const r=o.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let a=0;a<r.length;a++)return n[r[a]][r[a+1]];return n[o]},e)}function Br(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function Gr(e=[],t,n="id"){const o=e.slice(),r=Le(t,n);return r?o.splice(o.findIndex(a=>Le(a,n)===r),1):o.splice(o.findIndex(a=>a===t),1),o}function Pn(e){return e.map((t,n)=>{const o=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(o.id=n+1),o})}function Ke(e,t){return Math.ceil(e/t)}function It(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(xe||(xe={}));const M=()=>null;function no(e,t=[],n=[]){let o={},r=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(o=a.style||{},a.classNames&&(r=[...r,...a.classNames]),typeof a.style=="function"&&(o=a.style(e)||{}))}),{style:o,classNames:r.join(" ")}}function dt(e,t=[],n="id"){const o=Le(e,n);return o?t.some(r=>Le(r,n)===o):t.some(r=>r===e)}function rt(e,t){return t?e.findIndex(n=>qe(n.id,t)):-1}function qe(e,t){return e==t}function Yr(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:o,rows:r,rowCount:a,mergeSelections:s}=t,c=!e.allSelected,d=!e.toggleOnSelectedRowsChange;if(s){const g=c?[...e.selectedRows,...r.filter(u=>!dt(u,e.selectedRows,o))]:e.selectedRows.filter(u=>!dt(u,r,o));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:g.length,selectedRows:g,toggleOnSelectedRowsChange:d})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?r:[],toggleOnSelectedRowsChange:d})}case"SELECT_SINGLE_ROW":{const{keyField:o,row:r,isSelected:a,rowCount:s,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:Gr(e.selectedRows,r,o),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Br(e.selectedRows,r),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:o,selectedRows:r,totalRows:a,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...r.filter(d=>!dt(d,e.selectedRows,o))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===a,selectedRows:r,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:o}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:o})}case"SORT_CHANGE":{const{sortDirection:o,selectedColumn:r,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:o,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:o,paginationServer:r,visibleOnly:a,persistSelectedOnPageChange:s}=t,c=r&&s,d=r&&!s||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:o}),c&&{allSelected:!1}),d&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:o,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:o})}}}const Vr=N`
	pointer-events: none;
	opacity: 0.4;
`,Ur=P.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&Vr};
	${({theme:e})=>e.table.style};
`,Kr=N`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,qr=P.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&Kr};
	${({theme:e})=>e.head.style};
`,Qr=P.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,oo=(e,...t)=>N`
		@media screen and (max-width: ${599}px) {
			${N(e,...t)}
		}
	`,Zr=(e,...t)=>N`
		@media screen and (max-width: ${959}px) {
			${N(e,...t)}
		}
	`,Xr=(e,...t)=>N`
		@media screen and (max-width: ${1280}px) {
			${N(e,...t)}
		}
	`,Jr=e=>(t,...n)=>N`
				@media screen and (max-width: ${e}px) {
					${N(t,...n)}
				}
			`,Be=P.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,ro=P(Be)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&N`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&oo`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&Zr`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Xr`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Jr(e)`
    display: none;
  `};
`,ea=N`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,ta=P(ro).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&ea};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var na=i.memo(function({id:e,column:t,row:n,rowIndex:o,dataTag:r,isDragging:a,onDragStart:s,onDragOver:c,onDragEnd:d,onDragEnter:g,onDragLeave:u}){const{style:p,classNames:v}=no(n,t.conditionalCellStyles,["rdt_TableCell"]);return i.createElement(ta,{id:e,"data-column-id":t.id,role:"cell",className:v,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:p,isDragging:a,onDragStart:s,onDragOver:c,onDragEnd:d,onDragEnter:g,onDragLeave:u},!t.cell&&i.createElement("div",{"data-tag":r},function(h,b,E,$){if(!b)return null;if(typeof b!="string"&&typeof b!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return E&&typeof E=="function"?E(h,$):b&&typeof b=="function"?b(h,$):Nt(h,b)}(n,t.selector,t.format,o)),t.cell&&t.cell(n,o,t,e))}),ao=i.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:o=!1,checked:r=!1,disabled:a=!1,onClick:s=M}){const c=t,d=c!=="input"?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),g=i.useMemo(()=>function(u,...p){let v;return Object.keys(u).map(h=>u[h]).forEach((h,b)=>{typeof h=="function"&&(v=Object.assign(Object.assign({},u),{[Object.keys(u)[b]]:h(...p)}))}),v||u}(n,o),[n,o]);return i.createElement(c,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=o)},style:d,onClick:a?M:s,name:e,"aria-label":e,checked:r,disabled:a},g,{onChange:M}))});const oa=P(Be)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function ra({name:e,keyField:t,row:n,rowCount:o,selected:r,selectableRowsComponent:a,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:d,onSelectedRow:g}){const u=!(!d||!d(n));return i.createElement(oa,{onClick:p=>p.stopPropagation(),className:"rdt_TableCell",noPadding:!0},i.createElement(ao,{name:e,component:a,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{g({type:"SELECT_SINGLE_ROW",row:n,isSelected:r,keyField:t,rowCount:o,singleSelect:c})},disabled:u}))}const aa=P.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function ia({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:o,row:r,onToggled:a}){const s=t?n.expanded:n.collapsed;return i.createElement(aa,{"aria-disabled":e,onClick:()=>a&&a(r),"data-testid":`expander-button-${o}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const sa=P(Be)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function la({row:e,expanded:t=!1,expandableIcon:n,id:o,onToggled:r,disabled:a=!1}){return i.createElement(sa,{onClick:s=>s.stopPropagation(),noPadding:!0},i.createElement(ia,{id:o,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:r}))}const ca=P.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var da=i.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:o,extendedClassNames:r}){const a=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return i.createElement(ca,{className:a,extendedRowStyle:o},i.createElement(t,Object.assign({data:e},n)))}),ht,Lt,Dn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(ht||(ht={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Lt||(Lt={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Dn||(Dn={}));const ua=N`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,pa=N`
	&:hover {
		cursor: pointer;
	}
`,ga=P.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&ua};
	${({pointerOnHover:e})=>e&&pa};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function fa({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:o=!1,dense:r=!1,expandableIcon:a,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:d,expandableRowsHideExpander:g,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:p=!1,highlightOnHover:v=!1,id:h,expandableInheritConditionalStyles:b,keyField:E,onRowClicked:$=M,onRowDoubleClicked:C=M,onRowMouseEnter:m=M,onRowMouseLeave:w=M,onRowExpandToggled:O=M,onSelectedRow:S=M,pointerOnHover:D=!1,row:f,rowCount:_,rowIndex:oe,selectableRowDisabled:B=null,selectableRows:q=!1,selectableRowsComponent:re,selectableRowsComponentProps:H,selectableRowsHighlight:fe=!1,selectableRowsSingle:ve=!1,selected:ae,striped:G=!1,draggingColumnId:he,onDragStart:ce,onDragOver:Q,onDragEnd:Ie,onDragEnter:U,onDragLeave:de}){const[Y,ue]=i.useState(n);i.useEffect(()=>{ue(n)},[n]);const K=i.useCallback(()=>{ue(!Y),O(!Y,f)},[Y,O,f]),J=D||s&&(u||p),Ce=i.useCallback(T=>{T.target&&T.target.getAttribute("data-tag")==="allowRowEvents"&&($(f,T),!o&&s&&u&&K())},[o,u,s,K,$,f]),pe=i.useCallback(T=>{T.target&&T.target.getAttribute("data-tag")==="allowRowEvents"&&(C(f,T),!o&&s&&p&&K())},[o,p,s,K,C,f]),Z=i.useCallback(T=>{m(f,T)},[m,f]),me=i.useCallback(T=>{w(f,T)},[w,f]),Se=Le(f,E),{style:Xe,classNames:Je}=no(f,t,["rdt_TableRow"]),vt=fe&&ae,Ct=b?Xe:{},St=G&&oe%2==0;return i.createElement(i.Fragment,null,i.createElement(ga,{id:`row-${h}`,role:"row",striped:St,highlightOnHover:v,pointerOnHover:!o&&J,dense:r,onClick:Ce,onDoubleClick:pe,onMouseEnter:Z,onMouseLeave:me,className:Je,selected:vt,style:Xe},q&&i.createElement(ra,{name:`select-row-${Se}`,keyField:E,row:f,rowCount:_,selected:ae,selectableRowsComponent:re,selectableRowsComponentProps:H,selectableRowDisabled:B,selectableRowsSingle:ve,onSelectedRow:S}),s&&!g&&i.createElement(la,{id:Se,expandableIcon:a,expanded:Y,row:f,onToggled:K,disabled:o}),e.map(T=>T.omit?null:i.createElement(na,{id:`cell-${T.id}-${Se}`,key:`cell-${T.id}-${Se}`,dataTag:T.ignoreRowClick||T.button?null:"allowRowEvents",column:T,row:f,rowIndex:oe,isDragging:qe(he,T.id),onDragStart:ce,onDragOver:Q,onDragEnd:Ie,onDragEnter:U,onDragLeave:de}))),s&&Y&&i.createElement(da,{key:`expander-${Se}`,data:f,extendedRowStyle:Ct,extendedClassNames:Je,ExpanderComponent:c,expanderComponentProps:d}))}const ha=P.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,ma=({sortActive:e,sortDirection:t})=>k.createElement(ha,{sortActive:e,sortDirection:t},"▲"),ba=P(ro)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,wa=N`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&N`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ya=P.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&wa};
`,xa=P.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var va=i.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:o={},sortDirection:r,sortIcon:a,sortServer:s,pagination:c,paginationServer:d,persistSelectedOnSort:g,selectableRowsVisibleOnly:u,onSort:p,onDragStart:v,onDragOver:h,onDragEnd:b,onDragEnter:E,onDragLeave:$}){i.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[C,m]=i.useState(!1),w=i.useRef(null);if(i.useEffect(()=>{w.current&&m(w.current.scrollWidth>w.current.clientWidth)},[C]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let H=r;qe(o.id,e.id)&&(H=r===xe.ASC?xe.DESC:xe.ASC),p({type:"SORT_CHANGE",sortDirection:H,selectedColumn:e,clearSelectedOnSort:c&&d&&!g||s||u})},S=H=>i.createElement(ma,{sortActive:H,sortDirection:r}),D=()=>i.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},a),f=!(!e.sortable||!qe(o.id,e.id)),_=!e.sortable||t,oe=e.sortable&&!a&&!e.right,B=e.sortable&&!a&&e.right,q=e.sortable&&a&&!e.right,re=e.sortable&&a&&e.right;return i.createElement(ba,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:qe(e.id,n),onDragStart:v,onDragOver:h,onDragEnd:b,onDragEnter:E,onDragLeave:$},e.name&&i.createElement(ya,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:_?void 0:O,onKeyPress:_?void 0:H=>{H.key==="Enter"&&O()},sortActive:!_&&f,disabled:_},!_&&re&&D(),!_&&B&&S(f),typeof e.name=="string"?i.createElement(xa,{title:C?e.name:void 0,ref:w,"data-column-id":e.id},e.name):e.name,!_&&q&&D(),!_&&oe&&S(f)))});const Ca=P(Be)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Sa({headCell:e=!0,rowData:t,keyField:n,allSelected:o,mergeSelections:r,selectedRows:a,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:d,onSelectAllRows:g}){const u=a.length>0&&!o,p=d?t.filter(b=>!d(b)):t,v=p.length===0,h=Math.min(t.length,p.length);return i.createElement(Ca,{className:"rdt_TableCol",headCell:e,noPadding:!0},i.createElement(ao,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{g({type:"SELECT_ALL_ROWS",rows:p,rowCount:h,mergeSelections:r,keyField:n})},checked:o,indeterminate:u,disabled:v}))}function io(e=ht.AUTO){const t=typeof window=="object",[n,o]=i.useState(!1);return i.useEffect(()=>{if(t)if(e!=="auto")o(e==="rtl");else{const r=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||s.dir==="rtl";o(r&&c)}},[e,t]),n}const Ra=P.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Ea=P.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,In=P.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function $a({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:o,direction:r}){const a=io(r),s=o>0;return n?i.createElement(In,{visible:s},i.cloneElement(n,{selectedCount:o})):i.createElement(In,{visible:s,rtl:a},i.createElement(Ra,null,((c,d,g)=>{if(d===0)return null;const u=d===1?c.singular:c.plural;return g?`${d} ${c.message||""} ${u}`:`${d} ${u} ${c.message||""}`})(e,o,a)),i.createElement(Ea,null,t))}const Oa=P.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,ka=P.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Pa=P.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Da=({title:e,actions:t=null,contextMessage:n,contextActions:o,contextComponent:r,selectedCount:a,direction:s,showMenu:c=!0})=>i.createElement(Oa,{className:"rdt_TableHeader",role:"heading","aria-level":1},i.createElement(ka,null,e),t&&i.createElement(Pa,null,t),c&&i.createElement($a,{contextMessage:n,contextActions:o,contextComponent:r,direction:s,selectedCount:a}));function so(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}const Ia={left:"flex-start",right:"flex-end",center:"center"},Aa=P.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>Ia[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,_a=e=>{var{align:t="right",wrapContent:n=!0}=e,o=so(e,["align","wrapContent"]);return i.createElement(Aa,Object.assign({align:t,wrapContent:n},o))},ja=P.div`
	display: flex;
	flex-direction: column;
`,Ha=P.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&N`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&N`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,An=P.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Ta=P.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Fa=P(Be)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Ma=P.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Na=()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},k.createElement("path",{d:"M7 10l5 5 5-5z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),La=P.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,za=P.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Wa=e=>{var{defaultValue:t,onChange:n}=e,o=so(e,["defaultValue","onChange"]);return i.createElement(za,null,i.createElement(La,Object.assign({onChange:n,defaultValue:t},o)),i.createElement(Na,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return k.createElement("div",null,"To add an expander pass in a component instance via ",k.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:k.createElement(()=>k.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),k.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:k.createElement(()=>k.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),k.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:k.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:k.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Lt.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:k.createElement(()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),k.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:k.createElement(()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),k.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:k.createElement(()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:k.createElement(()=>k.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},k.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),k.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:ht.AUTO,onChangePage:M,onChangeRowsPerPage:M,onRowClicked:M,onRowDoubleClicked:M,onRowMouseEnter:M,onRowMouseLeave:M,onRowExpandToggled:M,onSelectedRowsChange:M,onSort:M,onColumnOrderChange:M},Ba={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},Ga=P.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,at=P.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,Ya=P.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${oo`
    width: 100%;
    justify-content: space-around;
  `};
`,lo=P.span`
	flex-shrink: 1;
	user-select: none;
`,Va=P(lo)`
	margin: 0 24px;
`,Ua=P(lo)`
	margin: 0 4px;
`;var Ka=i.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:o=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:a=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:d=l.paginationIconPrevious,paginationComponentOptions:g=l.paginationComponentOptions,onChangeRowsPerPage:u=l.onChangeRowsPerPage,onChangePage:p=l.onChangePage}){const v=(()=>{const H=typeof window=="object";function fe(){return{width:H?window.innerWidth:void 0,height:H?window.innerHeight:void 0}}const[ve,ae]=i.useState(fe);return i.useEffect(()=>{if(!H)return()=>null;function G(){ae(fe())}return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]),ve})(),h=io(o),b=v.width&&v.width>599,E=Ke(t,e),$=n*e,C=$-e+1,m=n===1,w=n===E,O=Object.assign(Object.assign({},Ba),g),S=n===E?`${C}-${t} ${O.rangeSeparatorText} ${t}`:`${C}-${$} ${O.rangeSeparatorText} ${t}`,D=i.useCallback(()=>p(n-1),[n,p]),f=i.useCallback(()=>p(n+1),[n,p]),_=i.useCallback(()=>p(1),[p]),oe=i.useCallback(()=>p(Ke(t,e)),[p,t,e]),B=i.useCallback(H=>u(Number(H.target.value),n),[n,u]),q=r.map(H=>i.createElement("option",{key:H,value:H},H));O.selectAllRowsItem&&q.push(i.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const re=i.createElement(Wa,{onChange:B,defaultValue:e,"aria-label":O.rowsPerPageText},q);return i.createElement(Ga,{className:"rdt_Pagination"},!O.noRowsPerPage&&b&&i.createElement(i.Fragment,null,i.createElement(Ua,null,O.rowsPerPageText),re),b&&i.createElement(Va,null,S),i.createElement(Ya,null,i.createElement(at,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":m,onClick:_,disabled:m,isRTL:h},s),i.createElement(at,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":m,onClick:D,disabled:m,isRTL:h},d),!b&&re,i.createElement(at,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":w,onClick:f,disabled:w,isRTL:h},c),i.createElement(at,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":w,onClick:oe,disabled:w,isRTL:h},a)))});const Ee=(e,t)=>{const n=i.useRef(!0);i.useEffect(()=>{n.current?n.current=!1:e()},t)};var qa=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(o){return o.$$typeof===Qa}(t)}(e)},Qa=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Ze(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ze((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Za(e,t,n){return e.concat(t).map(function(o){return Ze(o,n)})}function _n(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function jn(e,t){try{return t in e}catch{return!1}}function Xa(e,t,n){var o={};return n.isMergeableObject(e)&&_n(e).forEach(function(r){o[r]=Ze(e[r],n)}),_n(t).forEach(function(r){(function(a,s){return jn(a,s)&&!(Object.hasOwnProperty.call(a,s)&&Object.propertyIsEnumerable.call(a,s))})(e,r)||(jn(e,r)&&n.isMergeableObject(t[r])?o[r]=function(a,s){if(!s.customMerge)return ze;var c=s.customMerge(a);return typeof c=="function"?c:ze}(r,n)(e[r],t[r],n):o[r]=Ze(t[r],n))}),o}function ze(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Za,n.isMergeableObject=n.isMergeableObject||qa,n.cloneUnlessOtherwiseSpecified=Ze;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):Xa(e,t,n):Ze(t,n)}ze.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,o){return ze(n,o,t)},{})};var Ja=ze;const Hn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Tn={default:Hn,light:Hn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function ei(e,t,n,o){const[r,a]=i.useState(()=>Pn(e)),[s,c]=i.useState(""),d=i.useRef("");Ee(()=>{a(Pn(e))},[e]);const g=i.useCallback($=>{var C,m,w;const{attributes:O}=$.target,S=(C=O.getNamedItem("data-column-id"))===null||C===void 0?void 0:C.value;S&&(d.current=((w=(m=r[rt(r,S)])===null||m===void 0?void 0:m.id)===null||w===void 0?void 0:w.toString())||"",c(d.current))},[r]),u=i.useCallback($=>{var C;const{attributes:m}=$.target,w=(C=m.getNamedItem("data-column-id"))===null||C===void 0?void 0:C.value;if(w&&d.current&&w!==d.current){const O=rt(r,d.current),S=rt(r,w),D=[...r];D[O]=r[S],D[S]=r[O],a(D),t(D)}},[t,r]),p=i.useCallback($=>{$.preventDefault()},[]),v=i.useCallback($=>{$.preventDefault()},[]),h=i.useCallback($=>{$.preventDefault(),d.current="",c("")},[]),b=function($=!1){return $?xe.ASC:xe.DESC}(o),E=i.useMemo(()=>r[rt(r,n==null?void 0:n.toString())]||{},[n,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:g,handleDragEnter:u,handleDragOver:p,handleDragLeave:v,handleDragEnd:h,defaultSortDirection:b,defaultSortColumn:E}}var ri=i.memo(function(e){const{data:t=l.data,columns:n=l.columns,title:o=l.title,actions:r=l.actions,keyField:a=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:d=l.pointerOnHover,dense:g=l.dense,selectableRows:u=l.selectableRows,selectableRowsSingle:p=l.selectableRowsSingle,selectableRowsHighlight:v=l.selectableRowsHighlight,selectableRowsNoSelectAll:h=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:b=l.selectableRowsVisibleOnly,selectableRowSelected:E=l.selectableRowSelected,selectableRowDisabled:$=l.selectableRowDisabled,selectableRowsComponent:C=l.selectableRowsComponent,selectableRowsComponentProps:m=l.selectableRowsComponentProps,onRowExpandToggled:w=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:S=l.expandableIcon,onChangeRowsPerPage:D=l.onChangeRowsPerPage,onChangePage:f=l.onChangePage,paginationServer:_=l.paginationServer,paginationServerOptions:oe=l.paginationServerOptions,paginationTotalRows:B=l.paginationTotalRows,paginationDefaultPage:q=l.paginationDefaultPage,paginationResetDefaultPage:re=l.paginationResetDefaultPage,paginationPerPage:H=l.paginationPerPage,paginationRowsPerPageOptions:fe=l.paginationRowsPerPageOptions,paginationIconLastPage:ve=l.paginationIconLastPage,paginationIconFirstPage:ae=l.paginationIconFirstPage,paginationIconNext:G=l.paginationIconNext,paginationIconPrevious:he=l.paginationIconPrevious,paginationComponent:ce=l.paginationComponent,paginationComponentOptions:Q=l.paginationComponentOptions,responsive:Ie=l.responsive,progressPending:U=l.progressPending,progressComponent:de=l.progressComponent,persistTableHead:Y=l.persistTableHead,noDataComponent:ue=l.noDataComponent,disabled:K=l.disabled,noTableHead:J=l.noTableHead,noHeader:Ce=l.noHeader,fixedHeader:pe=l.fixedHeader,fixedHeaderScrollHeight:Z=l.fixedHeaderScrollHeight,pagination:me=l.pagination,subHeader:Se=l.subHeader,subHeaderAlign:Xe=l.subHeaderAlign,subHeaderWrap:Je=l.subHeaderWrap,subHeaderComponent:vt=l.subHeaderComponent,noContextMenu:Ct=l.noContextMenu,contextMessage:St=l.contextMessage,contextActions:T=l.contextActions,contextComponent:co=l.contextComponent,expandableRows:et=l.expandableRows,onRowClicked:Vt=l.onRowClicked,onRowDoubleClicked:Ut=l.onRowDoubleClicked,onRowMouseEnter:Kt=l.onRowMouseEnter,onRowMouseLeave:qt=l.onRowMouseLeave,sortIcon:uo=l.sortIcon,onSort:po=l.onSort,sortFunction:Qt=l.sortFunction,sortServer:Rt=l.sortServer,expandableRowsComponent:go=l.expandableRowsComponent,expandableRowsComponentProps:fo=l.expandableRowsComponentProps,expandableRowDisabled:Zt=l.expandableRowDisabled,expandableRowsHideExpander:Xt=l.expandableRowsHideExpander,expandOnRowClicked:ho=l.expandOnRowClicked,expandOnRowDoubleClicked:mo=l.expandOnRowDoubleClicked,expandableRowExpanded:Jt=l.expandableRowExpanded,expandableInheritConditionalStyles:bo=l.expandableInheritConditionalStyles,defaultSortFieldId:wo=l.defaultSortFieldId,defaultSortAsc:yo=l.defaultSortAsc,clearSelectedRows:en=l.clearSelectedRows,conditionalRowStyles:xo=l.conditionalRowStyles,theme:tn=l.theme,customStyles:nn=l.customStyles,direction:Ge=l.direction,onColumnOrderChange:vo=l.onColumnOrderChange,className:Co}=e,{tableColumns:on,draggingColumnId:rn,handleDragStart:an,handleDragEnter:sn,handleDragOver:ln,handleDragLeave:cn,handleDragEnd:dn,defaultSortDirection:So,defaultSortColumn:Ro}=ei(n,vo,wo,yo),[{rowsPerPage:be,currentPage:ee,selectedRows:Et,allSelected:un,selectedCount:pn,selectedColumn:ie,sortDirection:Ae,toggleOnSelectedRowsChange:Eo},Re]=i.useReducer(Yr,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:Ro,toggleOnSelectedRowsChange:!1,sortDirection:So,currentPage:q,rowsPerPage:H,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:gn=!1,persistSelectedOnPageChange:tt=!1}=oe,fn=!(!_||!tt&&!gn),$o=me&&!U&&t.length>0,Oo=ce||Ka,ko=i.useMemo(()=>((x={},I="default",V="default")=>{const te=Tn[I]?I:V;return Ja({table:{style:{color:(y=Tn[te]).text.primary,backgroundColor:y.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:y.text.primary,backgroundColor:y.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:y.background.default,minHeight:"52px"}},head:{style:{color:y.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:y.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:y.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:y.context.background,fontSize:"18px",fontWeight:400,color:y.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:y.text.primary,backgroundColor:y.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:y.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:y.selected.text,backgroundColor:y.selected.default,borderBottomColor:y.background.default}},highlightOnHoverStyle:{color:y.highlightOnHover.text,backgroundColor:y.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:y.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:y.background.default},stripedStyle:{color:y.striped.text,backgroundColor:y.striped.default}},expanderRow:{style:{color:y.text.primary,backgroundColor:y.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:y.button.default,fill:y.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:y.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:y.button.hover},"&:focus":{outline:"none",backgroundColor:y.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:y.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:y.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:y.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:y.button.default,fill:y.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:y.button.disabled,fill:y.button.disabled},"&:hover:not(:disabled)":{backgroundColor:y.button.hover},"&:focus":{outline:"none",backgroundColor:y.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:y.text.primary,backgroundColor:y.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:y.text.primary,backgroundColor:y.background.default}}},x);var y})(nn,tn),[nn,tn]),Po=i.useMemo(()=>Object.assign({},Ge!=="auto"&&{dir:Ge}),[Ge]),z=i.useMemo(()=>{if(Rt)return t;if(ie!=null&&ie.sortFunction&&typeof ie.sortFunction=="function"){const x=ie.sortFunction,I=Ae===xe.ASC?x:(V,te)=>-1*x(V,te);return[...t].sort(I)}return function(x,I,V,te){return I?te&&typeof te=="function"?te(x.slice(0),I,V):x.slice(0).sort((y,nt)=>{let we,se;if(typeof I=="string"?(we=Nt(y,I),se=Nt(nt,I)):(we=I(y),se=I(nt)),V==="asc"){if(we<se)return-1;if(we>se)return 1}if(V==="desc"){if(we>se)return-1;if(we<se)return 1}return 0}):x}(t,ie==null?void 0:ie.selector,Ae,Qt)},[Rt,ie,Ae,t,Qt]),Ye=i.useMemo(()=>{if(me&&!_){const x=ee*be,I=x-be;return z.slice(I,x)}return z},[ee,me,_,be,z]),Do=i.useCallback(x=>{Re(x)},[]),Io=i.useCallback(x=>{Re(x)},[]),Ao=i.useCallback(x=>{Re(x)},[]),_o=i.useCallback((x,I)=>Vt(x,I),[Vt]),jo=i.useCallback((x,I)=>Ut(x,I),[Ut]),Ho=i.useCallback((x,I)=>Kt(x,I),[Kt]),To=i.useCallback((x,I)=>qt(x,I),[qt]),_e=i.useCallback(x=>Re({type:"CHANGE_PAGE",page:x,paginationServer:_,visibleOnly:b,persistSelectedOnPageChange:tt}),[_,tt,b]),Fo=i.useCallback(x=>{const I=Ke(B||Ye.length,x),V=It(ee,I);_||_e(V),Re({type:"CHANGE_ROWS_PER_PAGE",page:V,rowsPerPage:x})},[ee,_e,_,B,Ye.length]);if(me&&!_&&z.length>0&&Ye.length===0){const x=Ke(z.length,be),I=It(ee,x);_e(I)}Ee(()=>{O({allSelected:un,selectedCount:pn,selectedRows:Et.slice(0)})},[Eo]),Ee(()=>{po(ie,Ae,z.slice(0))},[ie,Ae]),Ee(()=>{f(ee,B||z.length)},[ee]),Ee(()=>{D(be,ee)},[be]),Ee(()=>{_e(q)},[q,re]),Ee(()=>{if(me&&_&&B>0){const x=Ke(B,be),I=It(ee,x);ee!==I&&_e(I)}},[B]),i.useEffect(()=>{Re({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:en})},[p,en]),i.useEffect(()=>{if(!E)return;const x=z.filter(V=>E(V)),I=p?x.slice(0,1):x;Re({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:I,totalRows:z.length,mergeSelections:fn})},[t,E]);const Mo=b?Ye:z,No=tt||p||h;return i.createElement(zr,{theme:ko},!Ce&&(!!o||!!r)&&i.createElement(Da,{title:o,actions:r,showMenu:!Ct,selectedCount:pn,direction:Ge,contextActions:T,contextComponent:co,contextMessage:St}),Se&&i.createElement(_a,{align:Xe,wrapContent:Je},vt),i.createElement(Ha,Object.assign({responsive:Ie,fixedHeader:pe,fixedHeaderScrollHeight:Z,className:Co},Po),i.createElement(Ta,null,U&&!Y&&i.createElement(An,null,de),i.createElement(Ur,{disabled:K,className:"rdt_Table",role:"table"},!J&&(!!Y||z.length>0&&!U)&&i.createElement(qr,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:pe},i.createElement(Qr,{className:"rdt_TableHeadRow",role:"row",dense:g},u&&(No?i.createElement(Be,{style:{flex:"0 0 48px"}}):i.createElement(Sa,{allSelected:un,selectedRows:Et,selectableRowsComponent:C,selectableRowsComponentProps:m,selectableRowDisabled:$,rowData:Mo,keyField:a,mergeSelections:fn,onSelectAllRows:Io})),et&&!Xt&&i.createElement(Fa,null),on.map(x=>i.createElement(va,{key:x.id,column:x,selectedColumn:ie,disabled:U||z.length===0,pagination:me,paginationServer:_,persistSelectedOnSort:gn,selectableRowsVisibleOnly:b,sortDirection:Ae,sortIcon:uo,sortServer:Rt,onSort:Do,onDragStart:an,onDragOver:ln,onDragEnd:dn,onDragEnter:sn,onDragLeave:cn,draggingColumnId:rn})))),!z.length&&!U&&i.createElement(Ma,null,ue),U&&Y&&i.createElement(An,null,de),!U&&z.length>0&&i.createElement(ja,{className:"rdt_TableBody",role:"rowgroup"},Ye.map((x,I)=>{const V=Le(x,a),te=function(se=""){return typeof se!="number"&&(!se||se.length===0)}(V)?I:V,y=dt(x,Et,a),nt=!!(et&&Jt&&Jt(x)),we=!!(et&&Zt&&Zt(x));return i.createElement(fa,{id:te,key:te,keyField:a,"data-row-id":te,columns:on,row:x,rowCount:z.length,rowIndex:I,selectableRows:u,expandableRows:et,expandableIcon:S,highlightOnHover:c,pointerOnHover:d,dense:g,expandOnRowClicked:ho,expandOnRowDoubleClicked:mo,expandableRowsComponent:go,expandableRowsComponentProps:fo,expandableRowsHideExpander:Xt,defaultExpanderDisabled:we,defaultExpanded:nt,expandableInheritConditionalStyles:bo,conditionalRowStyles:xo,selected:y,selectableRowsHighlight:v,selectableRowsComponent:C,selectableRowsComponentProps:m,selectableRowDisabled:$,selectableRowsSingle:p,striped:s,onRowExpandToggled:w,onRowClicked:_o,onRowDoubleClicked:jo,onRowMouseEnter:Ho,onRowMouseLeave:To,onSelectedRow:Ao,draggingColumnId:rn,onDragStart:an,onDragOver:ln,onDragEnd:dn,onDragEnter:sn,onDragLeave:cn})}))))),$o&&i.createElement("div",null,i.createElement(Oo,{onChangePage:_e,onChangeRowsPerPage:Fo,rowCount:B||z.length,currentPage:ee,rowsPerPage:be,direction:Ge,paginationRowsPerPageOptions:fe,paginationIconLastPage:ve,paginationIconFirstPage:ae,paginationIconNext:G,paginationIconPrevious:he,paginationComponentOptions:Q})))});export{ri as Q};
