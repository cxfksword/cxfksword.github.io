(()=>{var T=function(e){return new Promise(t=>{var r=document.createElement("script");r.src=e,r.onload=()=>{t()},document.head.appendChild(r)})},P=function(e){return new Promise(t=>{var r=document.createElement("link");r.href=e,r.type="text/css",r.rel="stylesheet",r.onload=()=>{t()},document.head.appendChild(r)})};var I=function(e){for(var t=function(s){for(var i=s.childNodes,n=i.length,p=[],l,h,c,d,m=0;m<n;m++)l=i[m],l.nodeType===1&&(h=l.children[0],c=h.getAttribute("data-size").split("x"),d={src:h.getAttribute("href"),w:parseInt(c[0],10),h:parseInt(c[1],10)},l.children.length>1&&(d.title=l.children[1].innerHTML),h.children.length>0&&(d.msrc=h.children[0].getAttribute("src")),d.el=l,p.push(d));return p},r=function s(i,n){return i&&(n(i)?i:s(i.parentNode,n))},o=function(s){s=s||window.event,s.preventDefault?s.preventDefault():s.returnValue=!1;var i=s.target||s.srcElement,n=r(i,function(v){return v.tagName&&v.tagName.toUpperCase()==="FIGURE"});if(!!n){for(var p=n.parentNode,l=n.parentNode.childNodes,h=l.length,c=0,d,m=0;m<h;m++)if(l[m].nodeType===1){if(l[m]===n){d=c;break}c++}return d>=0&&y(d,p),!1}},a=function(){var s=window.location.hash.substring(1),i={};if(s.length<5)return i;for(var n=s.split("&"),p=0;p<n.length;p++)if(!!n[p]){var l=n[p].split("=");l.length<2||(i[l[0]]=l[1])}return i.gid&&(i.gid=parseInt(i.gid,10)),i},y=function(s,i,n,p){var l=document.querySelectorAll(".pswp")[0],h,c,d;if(d=t(i),c={galleryUID:i.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(v){var L=d[v].el.getElementsByTagName("img")[0],N=window.pageYOffset||document.documentElement.scrollTop,x=L.getBoundingClientRect();return{x:x.left,y:x.top+N,w:x.width}}},p)if(c.galleryPIDs){for(var m=0;m<d.length;m++)if(d[m].pid==s){c.index=m;break}}else c.index=parseInt(s,10)-1;else c.index=parseInt(s,10);isNaN(c.index)||(n&&(c.showAnimationDuration=0),h=new PhotoSwipe(l,PhotoSwipeUI_Default,d,c),h.init())},u=document.querySelectorAll(e),f=0,w=u.length;f<w;f++)u[f].setAttribute("data-pswp-uid",f+1),u[f].onclick=o;var b=a();b.pid&&b.gid&&y(b.pid,u[b.gid-1],!0,!0)};function k(e){let t=document.createElement("div");t.className="gallery";let r=e[0].parentNode,o=e[0];r.insertBefore(t,o);for(let a=0;a<e.length;++a){let y=e[a].querySelector("img").width,u=e[a].querySelector("img").height;e[a].style.flexGrow=`${y*100/u}`,e[a].style.flexBasis=`${y*240/u}px`,t.appendChild(e[a])}}function M(){let e=[T("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js"),T("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js"),P("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css"),P("https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css")];return Promise.all(e)}function E(e){let t=document.querySelector(e).querySelectorAll("figure");if(t.length){let r=[t[0]];for(let o=1;o<t.length;++o)t[o].previousElementSibling===r[r.length-1]?r.push(t[o]):(k(r),r=[t[o]]);r.length>0&&k(r),M().then(()=>{document.querySelector(".pswp").style.removeProperty("display"),I(`${e} .gallery`)})}}var g={};if(localStorage.hasOwnProperty("StackColorsCache"))try{g=JSON.parse(localStorage.getItem("StackColorsCache"))}catch(e){g={}}async function S(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!g.hasOwnProperty(e)||g[e].hash!==t){let o=await Vibrant.from(r).getPalette();g[e]={hash:t,Vibrant:{hex:o.Vibrant.hex,rgb:o.Vibrant.rgb,bodyTextColor:o.Vibrant.bodyTextColor},DarkMuted:{hex:o.DarkMuted.hex,rgb:o.DarkMuted.rgb,bodyTextColor:o.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(g))}return g[e]}var A=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},H=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>window.getComputedStyle(e).display==="none"?H(e,t):A(e,t);function C(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),q(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}var D={init:()=>{C(),document.querySelector(".article-content")&&E(".article-content"),document.querySelectorAll(".color-tag").forEach(async t=>{let r=t.getAttribute("data-image"),o=t.getAttribute("data-key"),a=t.getAttribute("data-hash"),y=await S(o,a,r);t.style.color=y.Vibrant.bodyTextColor,t.style.background=y.Vibrant.hex});let e=document.querySelector(".article-list--tile");e&&new IntersectionObserver(async(r,o)=>{r.forEach(a=>{if(!a.isIntersecting)return;o.unobserve(a.target),a.target.querySelectorAll("article.has-image").forEach(async u=>{let f=u.querySelector("img"),w=f.src,b=f.getAttribute("data-key"),s=f.getAttribute("data-hash"),i=u.querySelector(".article-details"),n=await S(b,s,w);i.style.background=`
                        linear-gradient(0deg, 
                            rgba(${n.DarkMuted.rgb[0]}, ${n.DarkMuted.rgb[1]}, ${n.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${n.Vibrant.rgb[0]}, ${n.Vibrant.rgb[1]}, ${n.Vibrant.rgb[2]}, 0.75) 100%)`})})}).observe(e)},alert:(e,t=5e3,r=500)=>{let o=document.createElement("div");o.innerHTML=e,o.className="alert",o.style.visibility="hidden",document.body.appendChild(o),o.style.transform=`translateY(${o.clientHeight+50}px)`,o.style.transition=`transform ${r/1e3}s ease`,setTimeout(()=>{o.style.removeProperty("visibility"),o.style.transform="translateY(0)"},r),setTimeout(()=>{o.style.transform=`translateY(${o.clientHeight+50}px)`},r+t),setTimeout(()=>{o.remove()},2*r+t)}};window.addEventListener("load",()=>{setTimeout(function(){D.init()},0)});window.Stack=D;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
