(self.webpackChunk=self.webpackChunk||[]).push([[627,90],{90:e=>{!function(t,n){var i=function(e,t,n){"use strict";var i,a;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in a=e.lazySizesConfig||e.lazysizesConfig||{},n)t in a||(a[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var r,o,s,l,d,c,u,f,g,v,m,y,h,z,p,b,A,E,L,C,_,w,M,N,x,k,T,W,S,B,F,R,H,O,D,I,P,$,U,q,j,G,J,K,Q=t.documentElement,V=e.HTMLPictureElement,X="addEventListener",Y=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,ne=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],ae={},re=Array.prototype.forEach,oe=function(e,t){return ae[t]||(ae[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),ae[t].test(e.getAttribute("class")||"")&&ae[t]},se=function(e,t){oe(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},le=function(e,t){var n;(n=oe(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},de=function(e,t,n){var i=n?X:"removeEventListener";n&&de(e,t),ie.forEach((function(n){e[i](n,t)}))},ce=function(e,n,a,r,o){var s=t.createEvent("Event");return a||(a={}),a.instance=i,s.initEvent(n,!r,!o),s.detail=a,e.dispatchEvent(s),s},ue=function(t,n){var i;!V&&(i=e.picturefill||a.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},ge=function(e,t,n){for(n=n||e.offsetWidth;n<a.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ve=(j=[],G=q=[],(K=function(e,n){$&&!n?e.apply(this,arguments):(G.push(e),U||(U=!0,(t.hidden?Z:ee)(J)))})._lsFlush=J=function(){var e=G;for(G=q.length?j:q,$=!0,U=!1;e.length;)e.shift()();$=!1},K),me=function(e,t){return t?function(){ve(e)}:function(){var t=this,n=arguments;ve((function(){e.apply(t,n)}))}},ye=function(e){var t,i,a=function(){t=null,e()},r=function(){var e=n.now()-i;e<99?Z(r,99-e):(te||a)(a)};return function(){i=n.now(),t||(t=Z(r,99))}},he=(A=/^img$/i,E=/^iframe$/i,L="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,C=0,_=0,w=-1,M=function(e){_--,(!e||_<0||!e.target)&&(_=0)},N=function(e){return null==b&&(b="hidden"==fe(t.body,"visibility")),b||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},x=function(e,n){var i,a=e,r=N(e);for(y-=n,p+=n,h-=n,z+=n;r&&(a=a.offsetParent)&&a!=t.body&&a!=Q;)(r=(fe(a,"opacity")||1)>0)&&"visible"!=fe(a,"overflow")&&(i=a.getBoundingClientRect(),r=z>i.left&&h<i.right&&p>i.top-1&&y<i.bottom+1);return r},T=function(e){var t,i=0,r=a.throttleDelay,o=a.ricTimeout,s=function(){t=!1,i=n.now(),e()},l=te&&o>49?function(){te(s,{timeout:o}),o!==a.ricTimeout&&(o=a.ricTimeout)}:me((function(){Z(s)}),!0);return function(e){var a;(e=!0===e)&&(o=33),t||(t=!0,(a=r-(n.now()-i))<0&&(a=0),e||a<9?l():Z(l,a))}}(k=function(){var e,n,r,o,s,l,u,g,A,E,M,k,T=i.elements;if((f=a.loadMode)&&_<8&&(e=T.length)){for(n=0,w++;n<e;n++)if(T[n]&&!T[n]._lazyRace)if(!L||i.prematureUnveil&&i.prematureUnveil(T[n]))O(T[n]);else if((g=T[n].getAttribute("data-expand"))&&(l=1*g)||(l=C),E||(E=!a.expand||a.expand<1?Q.clientHeight>500&&Q.clientWidth>500?500:370:a.expand,i._defEx=E,M=E*a.expFactor,k=a.hFac,b=null,C<M&&_<1&&w>2&&f>2&&!t.hidden?(C=M,w=0):C=f>1&&w>1&&_<6?E:0),A!==l&&(v=innerWidth+l*k,m=innerHeight+l,u=-1*l,A=l),r=T[n].getBoundingClientRect(),(p=r.bottom)>=u&&(y=r.top)<=m&&(z=r.right)>=u*k&&(h=r.left)<=v&&(p||z||h||y)&&(a.loadHidden||N(T[n]))&&(c&&_<3&&!g&&(f<3||w<4)||x(T[n],l))){if(O(T[n]),s=!0,_>9)break}else!s&&c&&!o&&_<4&&w<4&&f>2&&(d[0]||a.preloadAfterLoad)&&(d[0]||!g&&(p||z||h||y||"auto"!=T[n].getAttribute(a.sizesAttr)))&&(o=d[0]||T[n]);o&&!s&&O(o)}}),S=me(W=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(M(e),se(t,a.loadedClass),le(t,a.loadingClass),de(t,B),ce(t,"lazyloaded"))}),B=function(e){S({target:e.target})},F=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},R=function(e){var t,n=e.getAttribute(a.srcsetAttr);(t=a.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},H=me((function(e,t,n,i,r){var o,s,l,d,c,f;(c=ce(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?se(e,a.autosizesClass):e.setAttribute("sizes",i)),s=e.getAttribute(a.srcsetAttr),o=e.getAttribute(a.srcAttr),r&&(d=(l=e.parentNode)&&ne.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(s||o||d),c={target:e},se(e,a.loadingClass),f&&(clearTimeout(u),u=Z(M,2500),de(e,B,!0)),d&&re.call(l.getElementsByTagName("source"),R),s?e.setAttribute("srcset",s):o&&!d&&(E.test(e.nodeName)?F(e,o):e.src=o),r&&(s||d)&&ue(e,{src:o})),e._lazyRace&&delete e._lazyRace,le(e,a.lazyClass),ve((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&se(e,"ls-is-cached"),W(c),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&_--}),!0)})),O=function(e){if(!e._lazyRace){var t,n=A.test(e.nodeName),i=n&&(e.getAttribute(a.sizesAttr)||e.getAttribute("sizes")),r="auto"==i;(!r&&c||!n||!e.getAttribute("src")&&!e.srcset||e.complete||oe(e,a.errorClass)||!oe(e,a.lazyClass))&&(t=ce(e,"lazyunveilread").detail,r&&ze.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,_++,H(e,t,r,i,n))}},D=ye((function(){a.loadMode=3,T()})),P=function(){c||(n.now()-g<999?Z(P,999):(c=!0,a.loadMode=3,T(),Y("scroll",I,!0)))},{_:function(){g=n.now(),i.elements=t.getElementsByClassName(a.lazyClass),d=t.getElementsByClassName(a.lazyClass+" "+a.preloadClass),Y("scroll",T,!0),Y("resize",T,!0),Y("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+a.loadingClass);n.length&&n.forEach&&ee((function(){n.forEach((function(e){e.complete&&O(e)}))}))}})),e.MutationObserver?new MutationObserver(T).observe(Q,{childList:!0,subtree:!0,attributes:!0}):(Q.addEventListener("DOMNodeInserted",T,!0),Q.addEventListener("DOMAttrModified",T,!0),setInterval(T,999)),Y("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,T,!0)})),/d$|^c/.test(t.readyState)?P():(Y("load",P),t.addEventListener("DOMContentLoaded",T),Z(P,2e4)),i.elements.length?(k(),ve._lsFlush()):T()},checkElems:T,unveil:O,_aLSL:I=function(){3==a.loadMode&&(a.loadMode=2),D()}}),ze=(o=me((function(e,t,n,i){var a,r,o;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),ne.test(t.nodeName||""))for(r=0,o=(a=t.getElementsByTagName("source")).length;r<o;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||ue(e,n.detail)})),s=function(e,t,n){var i,a=e.parentNode;a&&(n=ge(e,a,n),(i=ce(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&o(e,a,i,n))},{_:function(){r=t.getElementsByClassName(a.autosizesClass),Y("resize",l)},checkElems:l=ye((function(){var e,t=r.length;if(t)for(e=0;e<t;e++)s(r[e])})),updateElem:s}),pe=function(){!pe.i&&t.getElementsByClassName&&(pe.i=!0,ze._(),he._())};return Z((function(){a.init&&pe()})),i={cfg:a,autoSizer:ze,loader:he,init:pe,uP:ue,aC:se,rC:le,hC:oe,fire:ce,gW:ge,rAF:ve}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},627:(e,t,n)=>{var i,a,r;!function(o,s){s=s.bind(null,o,o.document),e.exports?s(n(90)):(a=[n(90)],void 0===(r="function"==typeof(i=s)?i.apply(t,a):i)||(e.exports=r))}(window,(function(e,t,n){"use strict";var i="loading"in HTMLImageElement.prototype,a="loading"in HTMLIFrameElement.prototype,r=!1,o=n.prematureUnveil,s=n.cfg,l={focus:1,mouseover:1,click:1,load:1,transitionend:1,animationend:1,scroll:1,resize:1};s.nativeLoading||(s.nativeLoading={}),e.addEventListener&&e.MutationObserver&&(i||a)&&(n.prematureUnveil=function(d){return r||(r||(r=!0,i&&a&&s.nativeLoading.disableListeners&&(!0===s.nativeLoading.disableListeners&&(s.nativeLoading.setLoadingAttribute=!0),c=n.loader,u=c.checkElems,f=function(){setTimeout((function(){e.removeEventListener("scroll",c._aLSL,!0)}),1e3)},(g="object"==typeof s.nativeLoading.disableListeners?s.nativeLoading.disableListeners:l).scroll&&(e.addEventListener("load",f),f(),e.removeEventListener("scroll",u,!0)),g.resize&&e.removeEventListener("resize",u,!0),Object.keys(g).forEach((function(e){g[e]&&t.removeEventListener(e,u,!0)}))),s.nativeLoading.setLoadingAttribute&&e.addEventListener("lazybeforeunveil",(function(e){var t=e.target;"loading"in t&&!t.getAttribute("loading")&&t.setAttribute("loading","lazy")}),!0))),!(!("loading"in d)||!s.nativeLoading.setLoadingAttribute&&!d.getAttribute("loading")||"auto"==d.getAttribute("data-sizes")&&!d.offsetWidth)||(o?o(d):void 0);var c,u,f,g})}))}}]);
//# sourceMappingURL=627.6c8a632b0e0ab81399f4.js.map