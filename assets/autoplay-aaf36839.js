import{g as D}from"./pagination-397198e2.js";function _(x){let{swiper:e,extendParams:C,on:o,emit:r,params:u}=x;e.autoplay={running:!1,paused:!1,timeLeft:0},C({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let p,E,L=u&&u.autoplay?u.autoplay.delay:3e3,c=u&&u.autoplay?u.autoplay.delay:3e3,n,d=new Date().getTime,w,g,y,h,b,s;function S(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",S),l())}const O=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?w=!0:w&&(c=n,w=!1);const t=e.autoplay.paused?n:d+c-new Date().getTime();e.autoplay.timeLeft=t,r("autoplayTimeLeft",t,t/L),E=requestAnimationFrame(()=>{O()})},N=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(a=>a.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},v=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(E),O();let i=typeof t>"u"?e.params.autoplay.delay:t;L=e.params.autoplay.delay,c=e.params.autoplay.delay;const a=N();!Number.isNaN(a)&&a>0&&typeof t>"u"&&(i=a,L=a,c=a),n=i;const f=e.params.speed,P=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(f,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,f,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(f,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,f,!0,!0),r("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{v()})))};return i>0?(clearTimeout(p),p=setTimeout(()=>{P()},i)):requestAnimationFrame(()=>{P()}),i},A=()=>{e.autoplay.running=!0,v(),r("autoplayStart")},T=()=>{e.autoplay.running=!1,clearTimeout(p),cancelAnimationFrame(E),r("autoplayStop")},m=(t,i)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(p),t||(s=!0);const a=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",S):l()};if(e.autoplay.paused=!0,i){b&&(n=e.params.autoplay.delay),b=!1,a();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),a())},l=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),s?(s=!1,v(n)):v(),e.autoplay.paused=!1,r("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const t=D();t.visibilityState==="hidden"&&(s=!0,m(!0)),t.visibilityState==="visible"&&l()},M=t=>{t.pointerType==="mouse"&&(s=!0,m(!0))},F=t=>{t.pointerType==="mouse"&&e.autoplay.paused&&l()},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",F))},B=()=>{e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",F)},j=()=>{D().addEventListener("visibilitychange",I)},R=()=>{D().removeEventListener("visibilitychange",I)};o("init",()=>{e.params.autoplay.enabled&&(q(),j(),d=new Date().getTime(),A())}),o("destroy",()=>{B(),R(),e.autoplay.running&&T()}),o("beforeTransitionStart",(t,i,a)=>{e.destroyed||!e.autoplay.running||(a||!e.params.autoplay.disableOnInteraction?m(!0,!0):T())}),o("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){T();return}g=!0,y=!1,s=!1,h=setTimeout(()=>{s=!0,y=!0,m(!0)},200)}}),o("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(h),clearTimeout(p),e.params.autoplay.disableOnInteraction){y=!1,g=!1;return}y&&e.params.cssMode&&l(),y=!1,g=!1}}),o("slideChange",()=>{e.destroyed||!e.autoplay.running||(b=!0)}),Object.assign(e.autoplay,{start:A,stop:T,pause:m,resume:l})}export{_ as A};
