var z0=Object.defineProperty;var H0=(r,e,t)=>e in r?z0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ve=(r,e,t)=>H0(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ji(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Wm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eo={duration:.5,overwrite:!1,delay:0},Ad,cn,Dt,hi=1e8,Et=1/hi,Yu=Math.PI*2,V0=Yu/4,G0=0,Xm=Math.sqrt,W0=Math.cos,X0=Math.sin,on=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},or=function(e){return typeof e=="number"},Cd=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Rd=function(){return typeof window<"u"},ol=function(e){return Bt(e)||on(e)},qm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,ju=/(?:-?\.?\d|\.)+/gi,$m=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ym=/[+-]=-?[.\d]+/,jm=/[^,'"\[\]\s]+/gi,q0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Ri,Zu,Pd,ni={},fc={},Zm,Qm=function(e){return(fc=To(e,ni))&&Vn},Ld=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},Jm=function(e,t){return e&&(ni[e]=t)&&fc&&(fc[e]=t)||ni},Oa=function(){return 0},$0={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},Y0={suppressEvents:!0},Dd={},Pr=[],Qu={},Km,jn={},jc={},Cf=30,Zl=[],Id="",Od=function(e){var t=e[0],n,i;if(Vi(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zl.length;i--&&!Zl[i].targetTest(t););n=Zl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mg(e[i],n)))||e.splice(i,1);return e},ms=function(e){return e._gsap||Od(di(e))[0]._gsap},eg=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():Cd(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},po=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},j0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pc=function(){var e=Pr.length,t=Pr.slice(0),n,i;for(Qu={},Pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fd=function(e){return!!(e._initted||e._startAt||e.add)},tg=function(e,t,n,i){Pr.length&&!cn&&pc(),e.render(t,n,!!(cn&&t<0&&Fd(e))),Pr.length&&!cn&&pc()},ng=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jm).length<2?t:on(e)?e.trim():e},ig=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Z0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},To=function(e,t){for(var n in t)e[n]=t[n];return e},Rf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},mc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ma=function(e){var t=e.parent||Ot,n=e.keyframes?Z0(_n(e.keyframes)):ii;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Q0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},rg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Uc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},J0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ju=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(jl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},K0=function r(e){return!e||e._ts&&r(e.parent)},Pf=function(e){return e._repeat?Ao(e._tTime,e=e.duration()+e._rDelay)*e:0},Ao=function(e,t){var n=Math.floor(e=$t(e/t));return e&&n===e?n-1:n},gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kc=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Bc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kc(e),n._dirty||gs(n,e)),e},sg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gc(e.rawTime(),t),(!t._dur||Ja(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),gs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Di=function(e,t,n,i){return t.parent&&Fr(t),t._start=$t((or(n)?n:n||e!==Ot?li(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rg(e,t,"_first","_last",e._sort?"_start":0),Ku(t)||(e._recent=t),i||sg(e,t),e._ts<0&&Bc(e,e._tTime),e},og=function(e,t){return(ni.ScrollTrigger||Ld("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},ag=function(e,t,n,i,s){if(Ud(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Km!==Jn.frame)return Pr.push(e),e._lazy=[s,i],1},ev=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ku=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&ev(e)&&!(!e._initted&&Ku(e))||(e._ts<0||e._dp._ts<0)&&!Ku(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ja(0,e._tDur,t),u=Ao(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ao(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||cn||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&ag(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ju(e,t,n,!0),e._onUpdate&&!n&&ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fr(e,1),!n&&!cn&&(ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Co=function(e,t,n,i){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Bc(e,e._tTime=e._tDur*a),e.parent&&kc(e),n||gs(e.parent,e),e},Lf=function(e){return e instanceof Cn?gs(e):Co(e,e._dur)},iv={_start:0,endTime:Oa,totalDuration:Oa},li=function r(e,t,n){var i=e.labels,s=e._recent||iv,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ga=function(e,t,n){var i=or(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},zr=function(e,t){return e||e===0?t(e):t},Ja=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!on(e)||!(t=q0.exec(e))?"":t[1]},rv=function(e,t,n){return zr(n,function(i){return Ja(e,t,i)})},eh=[].slice,lg=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Ri},sv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||lg(i,1)?(s=n).push.apply(s,di(i)):n.push(i)})||n},di=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):on(e)&&!n&&(Zu||!Ro())?eh.call((t||Pd).querySelectorAll(e),0):_n(e)?sv(e,n):lg(e)?eh.call(e,0):e?[e]:[]},th=function(e){return e=di(e)[0]||Ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return di(t,n.querySelectorAll?n:n===e?Ia("Invalid scope")||Pd.createElement("div"):e)}},cg=function(e){return e.sort(function(){return .5-Math.random()})},ug=function(e){if(Bt(e))return e;var t=Vi(e)?e:{each:e},n=_s(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return on(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var p=(_||t).length,g=o[p],m,x,y,v,E,w,M,A,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,hi])[1],!b){for(M=-hi;M<(M=_[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(g=o[p]=[],m=l?Math.min(b,p)*u-.5:i%b,x=b===hi?0:l?p*h/b-.5:i/b|0,M=0,A=hi,w=0;w<p;w++)y=w%b-m,v=x-(w/b|0),g[w]=E=c?Math.abs(c==="y"?v:y):Xm(y*y+v*v),E>M&&(M=E),E<A&&(A=E);i==="random"&&cg(g),g.max=M-A,g.min=A,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),g.b=p<0?s-p:s,g.u=mn(t.amount||t.each)||0,n=n&&p<0?xg(n):n}return p=(g[d]-g.min)/g.max||0,$t(g.b+(n?n(p):p)*g.v)+g.u}},nh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(or(n)?0:mn(n))}},hg=function(e,t){var n=_n(e),i,s;return!n&&Vi(e)&&(i=n=e.radius||hi,e.values?(e=di(e.values),(s=!or(e[0]))&&(i*=i)):e=nh(e.increment)),zr(t,n?Bt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||or(o)?u:u+mn(o)}:nh(e))},dg=function(e,t,n,i){return zr(_n(e)?!t:n===!0?!!(n=0):!i,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ov=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},av=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},lv=function(e,t,n){return pg(e,t,0,1,n)},fg=function(e,t,n){return zr(n,function(i){return e[~~t(i)]})},cv=function r(e,t,n){var i=t-e;return _n(e)?fg(e,r(0,e.length),t):zr(n,function(s){return(i+(s-e)%i)%i+e})},uv=function r(e,t,n){var i=t-e,s=i*2;return _n(e)?fg(e,r(0,e.length-1),t):zr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Fa=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?jm:ju),n+=e.substr(t,i-t)+dg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},pg=function(e,t,n,i,s){var o=t-e,a=i-n;return zr(s,function(l){return n+((l-e)/o*a||0)})},hv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=on(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var p=Math.min(d,~~_);return u[p](_-p)},n=t}else i||(e=To(_n(e)?[]:{},e));if(!u){for(l in t)Nd.call(a,e,l,"get",t[l]);s=function(_){return zd(_,a)||(o?e.p:e)}}}return zr(n,s)},Df=function(e,t,n){var i=e.labels,s=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ei=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Pr.length&&pc(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},ra=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&ei(e,"onInterrupt"),e},ao,mg=[],gg=function(e){if(e)if(e=!e.name&&e.default||e,Rd()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:zd,add:Nd,kill:Av,modifier:Tv,rawVars:0},o={targetTest:0,get:0,getSetter:Bd,aliases:{},register:0};if(Ro(),e!==i){if(jn[t])return;ii(i,ii(mc(e,s),o)),To(i.prototype,To(s,mc(e,o))),jn[i.prop=t]=i,e.targetTest&&(Zl.push(i),Dd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jm(t,i),e.register&&e.register(Vn,i,kn)}else mg.push(e)},wt=255,sa={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Zc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},_g=function(e,t,n){var i=e?or(e)?[e>>16,e>>8&wt,e&wt]:0:sa.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])i=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ju),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Zc(l+1/3,s,o),i[1]=Zc(l,s,o),i[2]=Zc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match($m),n&&i.length<4&&(i[3]=1),i}else i=e.match(ju)||sa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},vg=function(e){var t=[],n=[],i=-1;return e.split(Lr).forEach(function(s){var o=s.match(oo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},If=function(e,t,n){var i="",s=(e+i).match(Lr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=_g(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=vg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Lr,"1").split(oo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Lr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Lr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),dv=/hsl[a]?\(/,yg=function(e){var t=e.join(" "),n;if(Lr.lastIndex=0,Lr.test(t))return n=dv.test(t),e[1]=If(e[1],n),e[0]=If(e[0],n,vg(e[1])),!0},Na,Jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function p(g){var m=r()-i,x=g===!0,y,v,E,w;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,y=E-o,(y>0||x)&&(w=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(p)),v)for(f=0;f<a.length;f++)a[f](E,d,w,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Zm&&(!Zu&&Rd()&&(Ri=Zu=window,Pd=Ri.document||{},ni.gsap=Vn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Vn.version),Qm(fc||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),mg.forEach(gg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Na=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Oa},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,m,x){var y=m?function(v,E,w,M){g(v,E,w,M),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),Ro(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h})(),Ro=function(){return!Na&&Jn.wake()},ht={},fv=/^[\d.\-M][\d.\-,\s]/,pv=/["']/g,mv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(pv,"").trim():+c,i=l.substr(a+1).trim();return t},gv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_v=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[mv(t[1])]:gv(e).split(",").map(ng)):ht._CE&&fv.test(e)?ht._CE("",e):n},xg=function(e){return function(t){return 1-e(1-t)}},Sg=function r(e,t){for(var n=e._first,i;n;)n instanceof Cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_s=function(e,t){return e&&(Bt(e)?e:ht[e]||_v(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Un(e,function(a){ht[a]=ni[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},bg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Yu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*X0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:bg(a);return s=Yu/s,l.config=function(c,u){return r(e,c,u)},l},Jc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:bg(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ds(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Ds("Elastic",Qc("in"),Qc("out"),Qc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ds("Circ",function(r){return-(Xm(1-r*r)-1)});Ds("Sine",function(r){return r===1?1:-W0(r*V0)+1});Ds("Back",Jc("in"),Jc("out"),Jc());ht.SteppedEase=ht.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((i*Ja(0,o,a)|0)+s)*n}}};Eo.ease=ht["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Id+=r+","+r+"Params,"});var Mg=function(e,t){this.id=G0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eg,this.set=t?t.getSetter:Bd},Ua=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Co(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Na||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Co(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bc(this,n),!s._dp||s.parent||sg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ao(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(Ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),kc(this),J0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Y0);var i=cn;return cn=n,Fd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Bt(n)?n:ig,a=function(){var c=i.then;i.then=null,Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ra(this)},r})();ii(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){Wm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Nn(n.sortChildren),Ot&&Di(n.parent||Ot,Ji(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&og(Ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ga(0,arguments,this),this},t.from=function(i,s,o){return ga(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ga(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,li(this,o),1),this},t.call=function(i,s,o){return Di(this,qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ma(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ma(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$t(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,p,g,m,x,y,v,E,w,M;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=$t(u%g),u===l?(p=this._repeat,d=c):(E=$t(u/g),p=~~E,p&&p===E&&(d=c,p--),d>c&&(d=c)),E=Ao(this._tTime,g),!a&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),w&&p&1&&(d=c-d,M=1),p!==E&&!this._lock){var A=w&&E&1,b=A===(w&&p&1);if(p<E&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(M?0:$t(p*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Sg(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=nv(this,$t(a),$t(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!E&&(ei(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-Et);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,o||cn&&Fd(f)),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=S?-Et:Et);break}}f=_}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Et)._zTime=d>=a?1:-1,this._ts))return this._start=v,kc(this),this.render(i,s,o);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(or(s)||(s=li(this,s,i)),!(i instanceof Ua)){if(_n(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(Bt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return on(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(i.parent===this&&Uc(this,i),i===this._recent&&(this._recent=this._last),gs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=qt.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,Di(this,a,li(this,i))},t.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Fr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)wr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=di(i),l=this._first,c=or(s),u;l;)l instanceof qt?j0(l._targets,a)&&(c?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=li(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=qt.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&Co(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ii({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Df(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Df(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return gs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Co(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(tg(Ot,gc(i,Ot)),Km=Jn.frame),Jn.frame>=Cf){Cf+=ti.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&ti.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e})(Ua);ii(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vv=function(e,t,n,i,s,o,a){var l=new kn(this._pt,e,t,0,1,Rg,null,s),c=0,u=0,h,d,f,_,p,g,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Fa(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(Yc)||[];h=Yc.exec(i);)_=h[0],p=i.substring(c,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?po(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=Yc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ym.test(i)||m)&&(l.e=0),this._pt=l,l},Nd=function(e,t,n,i,s,o,a,l,c,u){Bt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Bt(h)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Bt(h)?c?Mv:Ag:kd,_;if(on(i)&&(~i.indexOf("random(")&&(i=Fa(i)),i.charAt(1)==="="&&(_=po(d,i)+(mn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||ih)return!isNaN(d*i)&&i!==""?(_=new kn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Ev:Cg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Ld(t,i),vv.call(this,e,t,d,i,f,l||ti.stringFilter,c))},yv=function(e,t,n,i,s){if(Bt(e)&&(e=_a(e,s,t,n,i)),!Vi(e)||e.style&&e.nodeType||_n(e)||qm(e))return on(e)?_a(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=_a(e[a],s,t,n,i);return o},wg=function(e,t,n,i,s,o){var a,l,c,u;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:yv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ao))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},wr,ih,Ud=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,p=e._startAt,g=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=e._overwrite==="auto"&&!Ad,v=e.timeline,E,w,M,A,b,S,F,U,G,V,Y,X,q;if(v&&(!d||!s)&&(s="none"),e._ease=_s(s,Eo.ease),e._yEase=h?xg(_s(h===!0?s:h,Eo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(U=g[0]?ms(g[0]).harness:0,X=U&&i[U.prop],E=mc(i,Dd),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!f?p.render(-1,!0):p.revert(u&&_?jl:$0),p._lazy=0),o){if(Fr(e._startAt=qt.set(g,ii({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!f)&&e._startAt.revert(jl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!p){if(t&&(a=!1),M=ii({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Nn(l),immediateRender:a,stagger:0,parent:m},E),X&&(M[U.prop]=X),Fr(e._startAt=qt.set(g,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(jl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Nn(l)||l&&!_,w=0;w<g.length;w++){if(b=g[w],F=b._gsap||Od(g)[w]._gsap,e._ptLookup[w]=V={},Qu[F.id]&&Pr.length&&pc(),Y=x===g?w:x.indexOf(b),U&&(G=new U).init(b,X||E,e,Y,x)!==!1&&(e._pt=A=new kn(e._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){V[B]=A}),G.priority&&(S=1)),!U||X)for(M in E)jn[M]&&(G=wg(M,E,e,Y,b,x))?G.priority&&(S=1):V[M]=A=Nd.call(e,b,M,"get",E[M],Y,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),y&&e._pt&&(wr=e,Ot.killTweensOf(b,V,e.globalTime(t)),q=!e.parent,wr=0),e._pt&&l&&(Qu[F.id]=1)}S&&Pg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&v.render(hi,!0,!0)},xv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ih=1,e.vars[t]="+=0",Ud(e,a),ih=0,l?Ia(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+mn(h.e)),h.b&&(h.b=u.s+mn(h.b))},Sv=function(e,t){var n=e[0]?ms(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=To({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(_n(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},_a=function(e,t,n,i,s){return Bt(e)?e.call(t,n,i,s):on(e)&&~e.indexOf("random(")?Fa(e):e},Eg=Id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tg={};Un(Eg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Tg[r]=1});var qt=(function(r){Wm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ma(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Ot,y=(_n(n)||qm(n)?or(n[0]):"length"in i)?[n]:di(n),v,E,w,M,A,b,S,F;if(a._targets=y.length?Od(y):Ia("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ol(c)||ol(u)){if(i=a.vars,v=a.timeline=new Cn({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Ji(a),v._start=0,d||ol(c)||ol(u)){if(M=y.length,S=d&&ug(d),Vi(d))for(A in d)~Eg.indexOf(A)&&(F||(F={}),F[A]=d[A]);for(E=0;E<M;E++)w=mc(i,Tg),w.stagger=0,m&&(w.yoyoEase=m),F&&To(w,F),b=y[E],w.duration=+_a(c,Ji(a),E,b,y),w.delay=(+_a(u,Ji(a),E,b,y)||0)-a._delay,!d&&M===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(b,w,S?S(E,b,y):0),v._ease=ht.none;v.duration()?c=u=0:a.timeline=0}else if(_){ma(ii(v.vars.defaults,{ease:"none"})),v._ease=_s(_.ease||i.ease||"none");var U=0,G,V,Y;if(_n(_))_.forEach(function(X){return v.to(y,X,">")}),v.duration();else{w={};for(A in _)A==="ease"||A==="easeEach"||bv(A,_[A],w,_.easeEach);for(A in w)for(G=w[A].sort(function(X,q){return X.t-q.t}),U=0,E=0;E<G.length;E++)V=G[E],Y={ease:V.e,duration:(V.t-(E?G[E-1].t:0))/100*c},Y[A]=V.v,v.to(y,Y,U),U+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Ad&&(wr=Ji(a),Ot.killTweensOf(y),wr=0),Di(x,Ji(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===$t(x._time)&&Nn(h)&&K0(Ji(a))&&x.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),g&&og(Ji(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,d,f,_,p,g,m,x,y,v;if(!c)tv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,o);if(d=$t(h%p),h===l?(_=this._repeat,d=c):(g=$t(h/p),_=~~g,_&&_===g?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),g=Ao(this._tTime,p),d===a&&!o&&this._initted&&_===g)return this._tTime=h,this;_!==g&&(y&&this._yEase&&Sg(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render($t(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(ag(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!g&&(ei(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ju(this,i,s,o),ei(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ju(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Na||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ud(this,c),u=this._ease(c/this._dur),xv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Bc(this,0),this.parent||rg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,wr&&wr.vars.overwrite!==!0)._first||ra(this),this.parent&&o!==this.timeline.totalDuration()&&Co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?di(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,p,g,m;if((!s||s==="all")&&Q0(a,l))return s==="all"&&(this._pt=0),ra(this);for(h=this._op=this._op||[],s!=="all"&&(on(s)&&(p={},Un(s,function(x){return p[x]=1}),s=p),s=Sv(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,_=d,f={}):(f=h[m]=h[m]||{},_=s);for(p in _)g=d&&d[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Uc(this,g,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ga(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ga(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ot.killTweensOf(i,s,o)},e})(Ua);ii(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Cn,t=eh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var kd=function(e,t,n){return e[t]=n},Ag=function(e,t,n){return e[t](n)},Mv=function(e,t,n,i){return e[t](i.fp,n)},wv=function(e,t,n){return e.setAttribute(t,n)},Bd=function(e,t){return Bt(e[t])?Ag:Cd(e[t])&&e.setAttribute?wv:kd},Cg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ev=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Tv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Av=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Uc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Cv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},kn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cg,this.d=l||this,this.set=c||kd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Cv,this.m=n,this.mt=s,this.tween=i},r})();Un(Id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Dd[r]=1});ni.TweenMax=ni.TweenLite=qt;ni.TimelineLite=ni.TimelineMax=Cn;Ot=new Cn({sortChildren:!1,defaults:Eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=yg;var vs=[],Ql={},Rv=[],Of=0,Pv=0,Kc=function(e){return(Ql[e]||Rv).map(function(t){return t()})},rh=function(){var e=Date.now(),t=[];e-Of>2&&(Kc("matchMediaInit"),vs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Kc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Of=e,Kc("matchMedia"))},Lg=(function(){function r(t,n){this.selector=n&&th(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Pv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Bt(n)&&(s=i,i=n,n=Bt);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=th(s)),Dt=o,h=i.apply(o,arguments),Bt(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Bt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Lv=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Vi(n)||(n={matches:n});var o=new Lg(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(vs.indexOf(o)<0&&vs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(rh):l.addEventListener("change",rh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),_c={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return gg(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=di(e)[0]);var s=ms(e||{}).get,o=n?ig:ng;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=di(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=jn[t],a=ms(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ao._pt=0,h.init(e,n?u+n:u,ao,0,[e]),h.render(1,h),ao._pt&&zd(1,ao)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_s(e.ease,Eo.ease)),Rf(Eo,e||{})},config:function(e){return Rf(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!ni[a]&&Ia(t+" effect requires "+a+" plugin.")}),jc[t]=function(a,l,c){return n(di(a),ii(l||{},s),c)},o&&(Cn.prototype[t]=function(a,l,c){return this.add(jc[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=_s(t)},parseEase:function(e,t){return arguments.length?_s(e,t):ht},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Ot,n,0),n},context:function(e,t){return e?new Lg(e,t):Dt},matchMedia:function(e){return new Lv(e)},matchMediaRefresh:function(){return vs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||rh()},addEventListener:function(e,t){var n=Ql[e]||(Ql[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ql[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cv,wrapYoyo:uv,distribute:ug,random:dg,snap:hg,normalize:lv,getUnit:mn,clamp:rv,splitColor:_g,toArray:di,selector:th,mapRange:pg,pipe:ov,unitize:av,interpolate:hv,shuffle:cg},install:Qm,effects:jc,ticker:Jn,updateRoot:Cn.updateRoot,plugins:jn,globalTimeline:Ot,core:{PropTween:kn,globals:Jm,Tween:qt,Timeline:Cn,Animation:Ua,getCache:ms,_removeLinkedListItem:Uc,reverting:function(){return cn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Ad=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _c[r]=qt[r]});Jn.add(Cn.updateRoot);ao=_c.to({},{duration:0});var Dv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Iv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Dv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},eu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Iv(a,s)}}}},Vn=_c.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eu("roundProps",nh),eu("modifiers"),eu("snap",hg))||_c;qt.version=Cn.version=Vn.version="3.13.0";Zm=1;Rd()&&Ro();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ff,Er,mo,Hd,ls,Nf,Vd,Ov=function(){return typeof window<"u"},ar={},es=180/Math.PI,go=Math.PI/180,Ns=Math.atan2,Uf=1e8,Gd=/([A-Z])/g,Fv=/(left|right|width|margin|padding|x)/i,Nv=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Dg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ig=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zv=function(e,t,n){return e.style[t]=n},Hv=function(e,t,n){return e.style.setProperty(t,n)},Vv=function(e,t,n){return e._gsap[t]=n},Gv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Xv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",Bn=Ft+"Origin",qv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ki(i,a)}):this.tfm[e]=o.x?o[e]:Ki(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},Og=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$v=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Vd(),(!s||!s.isStart)&&!n[Ft]&&(Og(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fg=function(e,t){var n={target:e,props:[],revert:$v,save:qv};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ng,oh=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n&&n.style?n:Er.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Gd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Po(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),Po=function(e,t,n){var i=t||ls,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(kf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?kf[o]:"")+e},ah=function(){Ov()&&window.document&&(Ff=window,Er=Ff.document,mo=Er.documentElement,ls=oh("div")||{style:{}},oh("div"),Ft=Po(Ft),Bn=Ft+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ng=!!Po("perspective"),Vd=Vn.core.reverting,Hd=1)},Bf=function(e){var t=e.ownerSVGElement,n=oh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),mo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),mo.removeChild(n),s},zf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ug=function(e){var t,n;try{t=e.getBBox()}catch{t=Bf(e),n=1}return t&&(t.width||t.height)||n||(t=Bf(e)),t&&!t.width&&!t.x&&!t.y?{x:+zf(e,["x","cx","x1"])||0,y:+zf(e,["y","cy","y1"])||0,width:0,height:0}:t},kg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ug(e))},Ms=function(e,t){if(t){var n=e.style,i;t in ar&&t!==Bn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Gd,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,i,s,o){var a=new kn(e._pt,t,n,0,1,o?Ig:Dg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Hf={deg:1,rad:1,turn:1},Yv={grid:1,flex:1},Nr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,l=Fv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,p,g,m;if(i===o||!s||Hf[i]||Hf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&kg(e),(f||o==="%")&&(ar[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Ht(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Er||!p.appendChild)&&(p=Er.body),g=p._gsap,g&&f&&g.width&&l&&g.time===Jn.time&&!g.uncache)return Ht(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:Ms(e,t)}else(f||o==="%")&&!Yv[fi(p,"display")]&&(a.position=fi(e,"position")),p===e&&(a.position="static"),p.appendChild(ls),_=ls[u],p.removeChild(ls),a.position="absolute";return l&&f&&(g=ms(p),g.time=Jn.time,g.width=p[u]),Ht(d?_*s/h:_&&s?h/_*s:0)},Ki=function(e,t,n,i){var s;return Hd||ah(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(s=Ba(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yc(fi(e,Bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=vc[t]&&vc[t](e,t,n)||fi(e,t)||eg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Nr(e,t,s,n)+n:s},jv=function(e,t,n,i){if(!n||n==="none"){var s=Po(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,Rg),l=0,c=0,u,h,d,f,_,p,g,m,x,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=fi(e,t)||i,p?e.style[t]=p:Ms(e,t)),u=[n,i],yg(u),n=u[0],i=u[1],d=n.match(oo)||[],E=i.match(oo)||[],E.length){for(;h=oo.exec(i);)g=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(p=d[c++]||"")&&(f=parseFloat(p)||0,v=p.substr((f+"").length),g.charAt(1)==="="&&(g=po(f,g)+v),m=parseFloat(g),y=g.substr((m+"").length),l=oo.lastIndex-y.length,y||(y=y||ti.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=Nr(e,t,p,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Ig:Dg;return Ym.test(i)&&(a.e=0),this._pt=a,a},Vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vf[n]||n,t[1]=Vf[i]||i,t.join(" ")},Qv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ar[a]&&(l=1,a=a==="transformOrigin"?Bn:Ft),Ms(n,a);l&&(Ms(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ba(n,1),o.uncache=1,Og(i)))}},vc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,Qv);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ka=[1,0,0,1,0,0],Bg={},zg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gf=function(e){var t=fi(e,Ft);return zg(t)?ka:t.substr(7).match($m).map(Ht)},Wd=function(e,t){var n=e._gsap||ms(e),i=e.style,s=Gf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!e.offsetParent&&e!==mo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,mo.appendChild(e)),s=Gf(e),l?i.display=l:Ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lh=function(e,t,n,i,s,o){var a=e._gsap,l=s||Wd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],p=l[2],g=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,M,A,b;n?l!==ka&&(M=f*g-_*p)&&(A=v*(g/M)+E*(-p/M)+(p*x-g*m)/M,b=v*(-_/M)+E*(f/M)-(f*x-_*m)/M,v=A,E=b):(w=Ug(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(m=v-c,x=E-u,a.xOffset=h+(m*f+x*p)-m,a.yOffset=d+(m*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(Tr(o,a,"xOrigin",c,v),Tr(o,a,"yOrigin",u,E),Tr(o,a,"xOffset",h,a.xOffset),Tr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Ba=function(e,t){var n=e._gsap||new Mg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Bn)||"0",u,h,d,f,_,p,g,m,x,y,v,E,w,M,A,b,S,F,U,G,V,Y,X,q,B,re,I,ce,ye,we,N,O;return u=h=d=p=g=m=x=y=v=0,f=_=1,n.svg=!!(e.getCTM&&kg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),M=Wd(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),lh(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,M)),E=n.xOrigin||0,w=n.yOrigin||0,M!==ka&&(F=M[0],U=M[1],G=M[2],V=M[3],u=Y=M[4],h=X=M[5],M.length===6?(f=Math.sqrt(F*F+U*U),_=Math.sqrt(V*V+G*G),p=F||U?Ns(U,F)*es:0,x=G||V?Ns(G,V)*es+p:0,x&&(_*=Math.abs(Math.cos(x*go))),n.svg&&(u-=E-(E*F+w*G),h-=w-(E*U+w*V))):(O=M[6],we=M[7],I=M[8],ce=M[9],ye=M[10],N=M[11],u=M[12],h=M[13],d=M[14],A=Ns(O,ye),g=A*es,A&&(b=Math.cos(-A),S=Math.sin(-A),q=Y*b+I*S,B=X*b+ce*S,re=O*b+ye*S,I=Y*-S+I*b,ce=X*-S+ce*b,ye=O*-S+ye*b,N=we*-S+N*b,Y=q,X=B,O=re),A=Ns(-G,ye),m=A*es,A&&(b=Math.cos(-A),S=Math.sin(-A),q=F*b-I*S,B=U*b-ce*S,re=G*b-ye*S,N=V*S+N*b,F=q,U=B,G=re),A=Ns(U,F),p=A*es,A&&(b=Math.cos(A),S=Math.sin(A),q=F*b+U*S,B=Y*b+X*S,U=U*b-F*S,X=X*b-Y*S,F=q,Y=B),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,m=180-m),f=Ht(Math.sqrt(F*F+U*U+G*G)),_=Ht(Math.sqrt(X*X+O*O)),A=Ns(Y,X),x=Math.abs(A)>2e-4?A*es:0,v=N?1/(N<0?-N:N):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zg(fi(e,Ft)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ht(f),n.scaleY=Ht(_),n.rotation=Ht(p)+a,n.rotationX=Ht(g)+a,n.rotationY=Ht(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=yc(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?Kv:Ng?Hg:Jv,n.uncache=0,n},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},tu=function(e,t,n){var i=mn(t);return Ht(parseFloat(t)+parseFloat(Nr(e,"x",n+"px",i)))+i},Jv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hg(e,t)},Wr="0deg",Xo="0px",Xr=") ",Hg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,p=n.scaleY,g=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Wr||u!==Wr)){var w=parseFloat(u)*go,M=Math.sin(w),A=Math.cos(w),b;w=parseFloat(h)*go,b=Math.cos(w),o=tu(x,o,M*b*-y),a=tu(x,a,-Math.sin(w)*-y),l=tu(x,l,A*b*-y+y)}g!==Xo&&(v+="perspective("+g+Xr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==Xo||a!==Xo||l!==Xo)&&(v+=l!==Xo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Xr),c!==Wr&&(v+="rotate("+c+Xr),u!==Wr&&(v+="rotateY("+u+Xr),h!==Wr&&(v+="rotateX("+h+Xr),(d!==Wr||f!==Wr)&&(v+="skew("+d+", "+f+Xr),(_!==1||p!==1)&&(v+="scale("+_+", "+p+Xr),x.style[Ft]=v||"translate(0, 0)"},Kv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,p=n.yOrigin,g=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,w,M,A,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=go,c*=go,E=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(u*=go,b=Math.tan(c-u),b=Math.sqrt(1+b*b),M*=b,A*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=Ht(E),w=Ht(w),M=Ht(M),A=Ht(A)):(E=h,A=d,w=M=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Nr(f,"x",o,"px"),v=Nr(f,"y",a,"px")),(_||p||g||m)&&(y=Ht(y+_-(_*E+p*M)+g),v=Ht(v+p-(_*w+p*A)+m)),(i||s)&&(b=f.getBBox(),y=Ht(y+i/100*b.width),v=Ht(v+s/100*b.height)),b="matrix("+E+","+w+","+M+","+A+","+y+","+v+")",f.setAttribute("transform",b),x&&(f.style[Ft]=b)},ey=function(e,t,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Uf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Uf)%o-~~(c/o)*o)),e._pt=d=new kn(e._pt,t,n,i,c,Uv),d.e=u,d.u="deg",e._props.push(n),d},Wf=function(e,t){for(var n in t)e[n]=t[n];return e},ty=function(e,t,n){var i=Wf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Ba(n,1),Ms(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Ba(n,1),o[Ft]=c);for(l in ar)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=mn(c),_=mn(u),h=f!==_?Nr(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new kn(e._pt,a,l,h,d-h,sh),e._pt.u=_||0,e._props.push(l));Wf(a,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});vc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Ki(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,p){return f[_]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,f,h)}});var Vg={name:"css",register:ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,p,g,m,x,y,v,E,w,M,A;Hd||ah(),this.styles=this.styles||Fg(e),A=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(jn[p]&&wg(p,t,n,i,e,s)))){if(f=typeof u,_=vc[p],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Fa(u)),_)_(this,e,p,u,n)&&(M=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Lr.lastIndex=0,Lr.test(c)||(g=mn(c),m=mn(u)),m?g!==m&&(c=Nr(e,p,c,m)+m):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,p),o.push(p),A.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],on(c)&&~c.indexOf("random(")&&(c=Fa(c)),mn(c+"")||c==="auto"||(c+=ti.units[p]||mn(Ki(e,p))||""),(c+"").charAt(1)==="="&&(c=Ki(e,p))):c=Ki(e,p),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),p in Oi&&(p==="autoAlpha"&&(d===1&&Ki(e,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,a.visibility),Tr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Oi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in ar,y){if(this.styles.save(p),f==="string"&&u.substring(0,6)==="var(--"&&(u=fi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ba(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new kn(this._pt,a,Ft,0,1,E.renderTransform,E,0,-1),v.dep=1),p==="scale")this._pt=new kn(this._pt,E,"scaleY",E.scaleY,(x?po(E.scaleY,x+h):h)-E.scaleY||0,sh),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){A.push(Bn,0,a[Bn]),u=Zv(u),E.svg?lh(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Tr(this,E,"zOrigin",E.zOrigin,m),Tr(this,a,p,yc(c),yc(u)));continue}else if(p==="svgOrigin"){lh(e,u,1,w,0,this);continue}else if(p in Bg){ey(this,E,p,d,x?po(d,x+u):u);continue}else if(p==="smoothOrigin"){Tr(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){ty(this,u,e);continue}}else p in a||(p=Po(p)||p);if(y||(h||h===0)&&(d||d===0)&&!Nv.test(u)&&p in a)g=(c+"").substr((d+"").length),h||(h=0),m=mn(u)||(p in ti.units?ti.units[p]:g),g!==m&&(d=Nr(e,p,c,m)),this._pt=new kn(this._pt,y?E:a,p,d,(x?po(d,x+h):h)-d,!y&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Bv:sh),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=kv);else if(p in a)jv.call(this,e,p,c,x?x+u:u);else if(p in e)this.add(e,p,c||e[p],x?x+u:u,i,s);else if(p!=="parseTransform"){Ld(p,u);continue}y||(p in a?A.push(p,0,a[p]):typeof e[p]=="function"?A.push(p,2,e[p]()):A.push(p,1,c||e[p])),o.push(p)}}M&&Pg(this)},render:function(e,t){if(t.tween._time||!Vd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in ar&&t!==Bn&&(e._gsap.x||Ki(e,"x"))?n&&Nf===n?t==="scale"?Gv:Vv:(Nf=n||{})&&(t==="scale"?Wv:Xv):e.style&&!Cd(e.style[t])?zv:~t.indexOf("-")?Hv:Bd(e,t)},core:{_removeProperty:Ms,_getMatrix:Wd}};Vn.utils.checkPrefix=Po;Vn.core.getStyleSaver=Fg;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){ar[s]=1});Un(e,function(s){ti.units[s]="deg",Bg[s]=1}),Oi[i[13]]=r+","+e,Un(n,function(s){var o=s.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ti.units[r]="px"});Vn.registerPlugin(Vg);var We=Vn.registerPlugin(Vg)||Vn;We.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ny=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,iy=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,ry=Math.PI/180,al=Math.sin,ll=Math.cos,va=Math.abs,qo=Math.sqrt,sy=function(e){return typeof e=="number"},Xf=1e5,hr=function(e){return Math.round(e*Xf)/Xf||0};function oy(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+s,l[u+1]=h*t+d*i+o;return r._dirty=1,r}function ay(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=va(t),n=va(n);var c=i%360*ry,u=ll(c),h=al(c),d=Math.PI,f=d*2,_=(r-a)/2,p=(e-l)/2,g=u*_+h*p,m=-h*_+u*p,x=g*g,y=m*m,v=x/(t*t)+y/(n*n);v>1&&(t=qo(v)*t,n=qo(v)*n);var E=t*t,w=n*n,M=(E*w-E*y-w*x)/(E*y+w*x);M<0&&(M=0);var A=(s===o?-1:1)*qo(M),b=A*(t*m/n),S=A*-(n*g/t),F=(r+a)/2,U=(e+l)/2,G=F+(u*b-h*S),V=U+(h*b+u*S),Y=(g-b)/t,X=(m-S)/n,q=(-g-b)/t,B=(-m-S)/n,re=Y*Y+X*X,I=(X<0?-1:1)*Math.acos(Y/qo(re)),ce=(Y*B-X*q<0?-1:1)*Math.acos((Y*q+X*B)/qo(re*(q*q+B*B)));isNaN(ce)&&(ce=d),!o&&ce>0?ce-=f:o&&ce<0&&(ce+=f),I%=f,ce%=f;var ye=Math.ceil(va(ce)/(f/4)),we=[],N=ce/ye,O=4/3*al(N/2)/(1+ll(N/2)),L=u*t,R=h*t,K=h*-n,de=u*n,$;for($=0;$<ye;$++)i=I+$*N,g=ll(i),m=al(i),Y=ll(i+=N),X=al(i),we.push(g-O*m,m+O*g,Y+O*X,X-O*Y,Y,X);for($=0;$<we.length;$+=2)g=we[$],m=we[$+1],we[$]=g*L+m*K+G,we[$+1]=g*R+m*de+V;return we[$-2]=a,we[$-1]=l,we}}function ly(r){var e=(r+"").replace(iy,function(b){var S=+b;return S<1e-4&&S>-1e-4?0:S}).match(ny)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,d,f,_,p,g,m,x,y,v,E,w,M,A=function(S,F,U,G){x=(U-S)/3,y=(G-F)/3,p.push(S+x,F+y,U-x,G-y,U,G)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=f,isNaN(e[c])?(f=e[c].toUpperCase(),_=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],_&&(h+=n,d+=i),c||(g=h,m=d),f==="M")p&&(p.length<8?t.length-=1:a+=p.length),n=g=h,i=m=d,p=[h,d],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),_||(n=i=0),p.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")x=n,y=i,(E==="C"||E==="S")&&(x+=n-p[p.length-4],y+=i-p[p.length-3]),_||(n=i=0),p.push(x,y,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")x=n+(h-n)*s,y=i+(d-i)*s,_||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,p.push(x,y,n+(h-n)*s,i+(d-i)*s,n,i),c+=4;else if(f==="T")x=n-p[p.length-4],y=i-p[p.length-3],p.push(n+x,i+y,h+(n+x*1.5-h)*s,d+(i+y*1.5-d)*s,n=h,i=d),c+=2;else if(f==="H")A(n,i,n=h,i),c+=1;else if(f==="V")A(n,i,n,i=h+(_?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=g,d=m,p.closed=!0),(f==="L"||va(n-h)>.5||va(i-d)>.5)&&(A(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(w=e[c+4],M=e[c+5],x=e[c+6],y=e[c+7],u=7,w.length>1&&(w.length<3?(y=x,x=M,u--):(y=M,x=w.substr(2),u-=2),M=w.charAt(1),w=w.charAt(0)),v=ay(n,i,+e[c+1],+e[c+2],+e[c+3],+w,+M,(_?n:0)+x*1,(_?i:0)+y*1),c+=u,v)for(u=0;u<v.length;u++)p.push(v[u]);n=p[p.length-2],i=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):p[0]===p[c-2]&&p[1]===p[c-1]&&(p.closed=!0),t.totalPoints=a+c,t}function cy(r){sy(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+hr(o[0])+","+hr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=hr(o[s++])+","+hr(o[s++])+" "+hr(o[s++])+","+hr(o[s++])+" "+hr(o[s++])+","+hr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn,Gg,Wg=function(){return Fn||typeof window<"u"&&(Fn=window.gsap)&&Fn.registerPlugin&&Fn},qf=function(){Fn=Wg(),Fn?(Fn.registerEase("_CE",Is.create),Gg=1):console.warn("Please gsap.registerPlugin(CustomEase)")},uy=1e20,cl=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},hy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,dy=/[cLlsSaAhHvVtTqQ]/g,fy=function(e){var t=e.length,n=uy,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},py=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?fy(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},my=function r(e,t,n,i,s,o,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,_=(n+s)/2,p=(i+o)/2,g=(s+a)/2,m=(o+l)/2,x=(d+_)/2,y=(f+p)/2,v=(_+g)/2,E=(p+m)/2,w=(x+v)/2,M=(y+E)/2,A=a-e,b=l-t,S=Math.abs((n-a)*b-(i-l)*A),F=Math.abs((s-a)*b-(o-l)*A),U;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:w,y:M}),(S+F)*(S+F)>c*(A*A+b*b)&&(U=u.length,r(e,t,d,f,x,y,w,M,c,u,h),r(w,M,v,E,g,m,a,l,c,u,h+1+(u.length-U))),u},Is=(function(){function r(t,n,i){Gg||qf(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(hy),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,_,p,g,m,x,y;if(this.data=n,(dy.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=ly(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&py(s,i.height,i.originY),this.segment=s,_=2;_<h;_+=6)d={x:+s[_-2],y:+s[_-1]},f={x:+s[_+4],y:+s[_+5]},a.push(d,f),my(d.x,d.y,+s[_],+s[_+1],+s[_+2],+s[_+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,_=0;_<h;_++)m=a[_],x=a[_-1]||m,(m.x>x.x||x.y!==m.y&&x.x===m.x||m===x)&&m.x<=1?(x.cx=m.x-x.x,x.cy=m.y-x.y,x.n=m,x.nx=m.x,u&&_>1&&Math.abs(x.cy/x.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,_===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),h--);if(h=1/o+1|0,p=1/h,g=0,m=a[0],u){for(_=0;_<h;_++)y=_*p,m.nx<y&&(m=a[++g]),d=m.y+(y-m.x)/m.cx*m.cy,l[_]={x:y,cx:p,y:d,cy:0,nx:9},_&&(l[_-1].cy=d-l[_-1].y);g=a[a.length-1],l[h-1].cy=g.y-d,l[h-1].cx=g.x-l[l.length-1].x}else{for(_=0;_<h;_++)m.nx<_*p&&(m=a[++g]),l[_]=m;g<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(v){var E=l[v*h|0]||l[h-1];return E.nx<v&&(E=E.n),E.y+(v-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&Fn&&Fn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Fn=n,qf()},r.get=function(n){return Fn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Fn.utils.toArray(i.path)[0],u,h,d,f,_,p,g,m,x,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Fn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=cy(oy([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],g=Math.max(5,(i.precision||1)*200),f=1/g,g+=2,m=5/g,x=cl(a+f*s),y=cl(l+n(f)*-o),h=(y-l)/(x-a),d=2;d<g;d++)_=cl(a+d*f*s),p=cl(l+n(d*f)*-o),(Math.abs((p-y)/(_-x)-h)>m||d===g-1)&&(u.push(x,y),h=(p-y)/(_-x)),x=_,y=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();Is.version="3.13.0";Is.headless=!0;Wg()&&Fn.registerPlugin(Is);We.registerPlugin(Is);const gy=Is.create("cursorEase",".14,.8,.28,.99");let Lt=null,Dn=null,oa=null,ch=null;function _y(){document.addEventListener("DOMContentLoaded",function(){if(document.body.insertAdjacentHTML("afterbegin",'<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>'),Lt=document.querySelector(".cursor-element"),Dn=document.querySelector(".cursor-effect"),document.querySelector(".cursor-wrapper"),Lt==null||Lt.querySelector("span"),!Lt)return;We.set(Lt,{xPercent:-50,yPercent:-50});let e=!1;window.addEventListener("mousemove",t=>{oa={x:t.clientX,y:t.clientY},e||(e=!0,We.to(Lt,{opacity:1,duration:.8,delay:.4,overwrite:!0})),ch||(ch=requestAnimationFrame(vy))},{passive:!0})})}function vy(){ch=null,!(!oa||!Lt)&&(We.to(Lt,{duration:1.4,ease:gy,x:oa.x,y:oa.y,overwrite:"auto"}),oa=null)}_y();function Xd(){if(Lt||(Lt=document.querySelector(".cursor-element"),Dn=document.querySelector(".cursor-effect")),!Lt)return;if(window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches){Lt.classList.add("hidden");return}const r="a, button, code, input, select, textarea, span.email, svg.play, svg.pause",e=".skills-wrapper > div";document.body.addEventListener("mouseenter",t=>{const n=t.target;if(n.closest(".logo")&&Lt.classList.add("logo"),n.closest(e)){Lt.classList.add("hide");return}if(n.closest(r)){const i=n.closest(r);!i.classList.contains("active")&&!i.classList.contains("logo")&&(Lt.classList.add("active","hover"),Dn==null||Dn.classList.add("active","hover"))}},!0),document.body.addEventListener("mouseleave",t=>{const n=t.target,i=t.relatedTarget;if(n.closest(".logo")&&(!i||!i.closest(".logo"))&&Lt.classList.remove("logo"),n.closest(e)){(!i||!i.closest(e))&&Lt.classList.remove("hide");return}const s=n.closest(r);s&&(i?i.closest(r):null)!==s&&(Lt.classList.remove("active","hover"),Dn==null||Dn.classList.remove("active","hover"))},!0),document.body.addEventListener("mousedown",()=>{Lt.classList.add("mouse-down")},{passive:!0}),document.body.addEventListener("mouseup",()=>{Lt.classList.remove("mouse-down")},{passive:!0}),document.body.addEventListener("click",t=>{const i=t.target.closest("a:not(.active), button, input, select, textarea, span.email, svg.play, svg.pause");if(i){if(i.classList.contains("active")){t.preventDefault();return}Dn==null||Dn.classList.remove("active"),Lt.classList.add("clicked"),setTimeout(()=>{Lt.classList.remove("clicked");const s=document.querySelector(`${r.split(", ").map(o=>o+":hover").join(", ")}`);s&&!s.classList.contains("active")&&(Lt.classList.add("active","hover"),Dn==null||Dn.classList.add("active","hover"))},800)}})}function qd(){const r=document.createElement("style");r.textContent=`
    body::-webkit-scrollbar-thumb {
      opacity: 0.4;
    }
  `,document.head.appendChild(r),document.body.addEventListener("click",yy),document.querySelectorAll("nav a").forEach(e=>{e.addEventListener("click",function(t){this.classList.contains("resume")||this.classList.contains("active")||(this.classList.add("active"),document.querySelectorAll("nav a").forEach(n=>{n!==this&&n.classList.remove("active")}))})}),document.querySelectorAll(".skills-wrapper > div").forEach(e=>{e.addEventListener("mouseleave",function(){this.classList.add("leaving"),setTimeout(()=>{this.classList.remove("leaving")},600)})}),document.querySelectorAll(".email").forEach(e=>{e.addEventListener("click",function(){const t="adrainwolfe@gmail.com";navigator.clipboard.writeText(t).then(()=>{console.log("Email copied to clipboard:",t);const n=document.querySelector(".cursor-element");n&&(n.classList.add("copied"),setTimeout(()=>{n.classList.remove("copied")},2400))}).catch(n=>{console.error("Failed to copy email: ",n)})})}),xc()}function yy(r){if(r.button!==0)return;const e=r.target.closest("a");if(!e)return;if(e.id==="resume-nav-link"||e.classList.contains("resume")||e.getAttribute("href")&&e.getAttribute("href").includes("Resume")){console.log("Resume link clicked - letting browser handle it");return}if(e.hasAttribute("target")||e.getAttribute("href").startsWith("http")||e.getAttribute("href").includes("mailto:")||e.getAttribute("href").includes("tel:")||e.hasAttribute("download")||e.getAttribute("href").startsWith("#"))return;r.preventDefault();const t=e.getAttribute("href"),n=t==="/"||t==="/index.html"||t==="index.html";e.closest("nav")?(document.querySelectorAll("nav a:not(.active)").forEach(i=>{i.classList.add("on-change")}),!e.classList.contains("active")&&!n?(e.classList.add("active"),document.querySelectorAll("nav a").forEach(i=>{i!==e&&i.classList.remove("active")})):n&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),setTimeout(()=>{document.querySelectorAll("nav a.on-change").forEach(i=>{i.classList.remove("on-change")})},240)):(e.classList.contains("logo")||n)&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(i=>{i.classList.remove("active")}),console.log(`Barba navigating to: ${t}`),window.barba?window.barba.go(t):(console.warn("Barba not initialized yet, falling back to window.location"),window.location.href=t)}function xc(){document.querySelectorAll(".mobile-menu-toggle").forEach(e=>{e.removeEventListener("click",$f),e.addEventListener("click",$f)})}function $f(){document.body.classList.toggle("menu-active"),this.classList.toggle("active")}function xy(){const r=document.querySelector("header");function e(n){r.classList.contains("initialized")||(r.classList.add("initialized"),t.forEach(i=>r.removeEventListener(i,e)))}const t=["mouseenter","hover","touchstart"];t.forEach(n=>r.addEventListener(n,e))}let Jl=window.innerWidth,uh=window.innerHeight,Us="error: undetected";function Xg(){return uh>Jl&&document.body.classList.add("portrait"),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&document.documentElement.classList.add("touch-device"),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches?(Us="touch",document.documentElement.classList.add("touch-device"),Us):window.matchMedia("(any-pointer: fine)").matches&&window.matchMedia("(pointer: coarse)").matches?(Us="cursorTouch",Us):(Us="default",Us)}function qg(){if(Jl=window.innerWidth,uh=window.innerHeight,Jl<=1024){const r=document.getElementById("stage"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.insertBefore(e,r.firstChild),r&&t&&r.insertBefore(t,r.firstChild),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),xc()}else{const r=document.querySelector("header"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.appendChild(e),r&&t&&r.appendChild(t),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),xc()}return[Jl,uh]}var Sy="1.3.14";function $g(r,e,t){return Math.max(r,Math.min(e,t))}function by(r,e,t){return(1-t)*r+t*e}function My(r,e,t,n){return by(r,e,1-Math.exp(-t*n))}function wy(r,e){return(r%e+e)%e}var Ey=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=$g(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=My(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Ty(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Ay=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ty(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yg=class{constructor(){Ve(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Yf=100/6,dr={passive:!1},Cy=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Yg);Ve(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ve(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ve(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ve(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Yf:n===2?this.window.width:1,s=n===1?Yf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,dr),this.element.addEventListener("touchstart",this.onTouchStart,dr),this.element.addEventListener("touchmove",this.onTouchMove,dr),this.element.addEventListener("touchend",this.onTouchEnd,dr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,dr),this.element.removeEventListener("touchstart",this.onTouchStart,dr),this.element.removeEventListener("touchmove",this.onTouchMove,dr),this.element.removeEventListener("touchend",this.onTouchEnd,dr)}},jf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Ry=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:g,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"__rafID",null);Ve(this,"isTouching");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new Ey);Ve(this,"emitter",new Yg);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});Ve(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i;return n instanceof HTMLAnchorElement&&((i=n.getAttribute("href"))==null?void 0:i.includes("#"))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,i)}}});Ve(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ve(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>{var m,x,y;return g instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(g))||((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent"))||i&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-touch"))||s&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Sy,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=jf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:p,prevent:g,virtualScroll:m,overscroll:x,autoRaf:y,anchors:v,autoToggle:E,allowNestedScroll:w,__experimental__naiveDimensions:M},this.dimensions=new Ay(r,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Cy(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=$g(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=jf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const w=E.overflowX,M=E.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(M),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const E=e!==0,w=t!==0;E&&s&&a&&(_="x"),w&&o&&l&&(_="y")}if(!_)return!1;let p,g,m,x,y;if(_==="x")p=r.scrollLeft,g=c-h,m=e,x=s,y=a;else if(_==="y")p=r.scrollTop,g=u-d,m=t,x=o,y=l;else return!1;return(m>0?p<g:p>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?wy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Py(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ly(r,e,t){return e&&Py(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln,Kl,Kn,Ar,Cr,_o,jg,ts,ya,Zg,tr,Si,Qg,Jg=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},Kg=1,lo=[],ct=[],Bi=[],xa=Date.now,hh=function(e,t){return t},Dy=function(){var e=ya.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,Bi),ct=n,Bi=i,hh=function(o,a){return t[o](a)}},Dr=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},Sa=function(e){return!!~Zg.indexOf(e)},bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ul="scrollLeft",hl="scrollTop",dh=function(){return tr&&tr.isPressed||ct.cache++},Sc=function(e,t){var n=function i(s){if(s||s===0){Kg&&(Kn.history.scrollRestoration="manual");var o=tr&&tr.isPressed;s=i.v=Math.round(s)||(tr&&tr.iOS?1:0),e(s),i.cacheID=ct.cache,o&&hh("ss",s)}else(t||ct.cache!==i.cacheID||hh("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:ul,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sc(function(r){return arguments.length?Kn.scrollTo(r,Jt.sc()):Kn.pageXOffset||Ar[ul]||Cr[ul]||_o[ul]||0})},Jt={s:hl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Sc(function(r){return arguments.length?Kn.scrollTo(Rn.sc(),r):Kn.pageYOffset||Ar[hl]||Cr[hl]||_o[hl]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||ln.utils.toArray)(e)[0]||(typeof e=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Iy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ur=function(e,t){var n=t.s,i=t.sc;Sa(e)&&(e=Ar.scrollingElement||Cr);var s=ct.indexOf(e),o=i===Jt.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||bn(e,"scroll",dh);var a=ct[s+o],l=a||(ct[s+o]=Sc(Dr(e,n),!0)||(Sa(e)?i:Sc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ln.getProperty(e,"scrollBehavior")==="smooth"),l},fh=function(e,t,n){var i=e,s=e,o=xa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,p){var g=xa();p||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var p=a,g=s,m=xa();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-p)*1e3};return{update:u,reset:h,getVelocity:d}},$o=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},e_=function(){ya=ln.core.globals().ScrollTrigger,ya&&ya.core&&Dy()},t_=function(e){return ln=e||Jg(),!Kl&&ln&&typeof document<"u"&&document.body&&(Kn=window,Ar=document,Cr=Ar.documentElement,_o=Ar.body,Zg=[Kn,Ar,Cr,_o],ln.utils.clamp,Qg=ln.core.context||function(){},ts="onpointerenter"in _o?"pointer":"mouse",jg=Vt.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Si=Vt.eventTypes=("ontouchstart"in Cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Kg=0},500),e_(),Kl=1),Kl};Rn.op=Jt;ct.cache=0;var Vt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Kl||t_(ln)||console.warn("Please gsap.registerPlugin(Observer)"),ya||e_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,p=n.event,g=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,E=n.onRight,w=n.onLeft,M=n.onUp,A=n.onDown,b=n.onChangeX,S=n.onChangeY,F=n.onChange,U=n.onToggleX,G=n.onToggleY,V=n.onHover,Y=n.onHoverEnd,X=n.onMove,q=n.ignoreCheck,B=n.isNormalizer,re=n.onGestureStart,I=n.onGestureEnd,ce=n.onWheel,ye=n.onEnable,we=n.onDisable,N=n.onClick,O=n.scrollSpeed,L=n.capture,R=n.allowClicks,K=n.lockAxis,de=n.onLockAxis;this.target=a=In(a)||Cr,this.vars=n,f&&(f=ln.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,O=O||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(_o).lineHeight)||22);var $,me,ee,j,T,se,ne,z=this,H=0,k=0,he=n.passive||!u&&n.passive!==!1,D=Ur(a,Rn),C=Ur(a,Jt),te=D(),le=C(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Si[0]==="pointerdown",pe=Sa(a),Ee=a.ownerDocument||Ar,be=[0,0,0],Te=[0,0,0],$e=0,Se=function(){return $e=xa()},Me=function(ke,rt){return(z.event=ke)&&f&&Iy(ke.target,f)||rt&&fe&&ke.pointerType!=="touch"||q&&q(ke,rt)},Xe=function(){z._vx.reset(),z._vy.reset(),me.pause(),h&&h(z)},ze=function(){var ke=z.deltaX=Zf(be),rt=z.deltaY=Zf(Te),Pe=Math.abs(ke)>=i,et=Math.abs(rt)>=i;F&&(Pe||et)&&F(z,ke,rt,be,Te),Pe&&(E&&z.deltaX>0&&E(z),w&&z.deltaX<0&&w(z),b&&b(z),U&&z.deltaX<0!=H<0&&U(z),H=z.deltaX,be[0]=be[1]=be[2]=0),et&&(A&&z.deltaY>0&&A(z),M&&z.deltaY<0&&M(z),S&&S(z),G&&z.deltaY<0!=k<0&&G(z),k=z.deltaY,Te[0]=Te[1]=Te[2]=0),(j||ee)&&(X&&X(z),ee&&(g&&ee===1&&g(z),x&&x(z),ee=0),j=!1),se&&!(se=!1)&&de&&de(z),T&&(ce(z),T=!1),$=0},Oe=function(ke,rt,Pe){be[Pe]+=ke,Te[Pe]+=rt,z._vx.update(ke),z._vy.update(rt),c?$||($=requestAnimationFrame(ze)):ze()},it=function(ke,rt){K&&!ne&&(z.axis=ne=Math.abs(ke)>Math.abs(rt)?"x":"y",se=!0),ne!=="y"&&(be[2]+=ke,z._vx.update(ke,!0)),ne!=="x"&&(Te[2]+=rt,z._vy.update(rt,!0)),c?$||($=requestAnimationFrame(ze)):ze()},Ze=function(ke){if(!Me(ke,1)){ke=$o(ke,u);var rt=ke.clientX,Pe=ke.clientY,et=rt-z.x,Be=Pe-z.y,Je=z.isDragging;z.x=rt,z.y=Pe,(Je||(et||Be)&&(Math.abs(z.startX-rt)>=s||Math.abs(z.startY-Pe)>=s))&&(ee=Je?2:1,Je||(z.isDragging=!0),it(et,Be))}},dt=z.onPress=function(Ie){Me(Ie,1)||Ie&&Ie.button||(z.axis=ne=null,me.pause(),z.isPressed=!0,Ie=$o(Ie),H=k=0,z.startX=z.x=Ie.clientX,z.startY=z.y=Ie.clientY,z._vx.reset(),z._vy.reset(),bn(B?a:Ee,Si[1],Ze,he,!0),z.deltaX=z.deltaY=0,y&&y(z))},W=z.onRelease=function(Ie){if(!Me(Ie,1)){Sn(B?a:Ee,Si[1],Ze,!0);var ke=!isNaN(z.y-z.startY),rt=z.isDragging,Pe=rt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),et=$o(Ie);!Pe&&ke&&(z._vx.reset(),z._vy.reset(),u&&R&&ln.delayedCall(.08,function(){if(xa()-$e>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(Ee.createEvent){var Be=Ee.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Kn,1,et.screenX,et.screenY,et.clientX,et.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(Be)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&rt&&!B&&me.restart(!0),ee&&ze(),m&&rt&&m(z),v&&v(z,Pe)}},Ce=function(ke){return ke.touches&&ke.touches.length>1&&(z.isGesturing=!0)&&re(ke,z.isDragging)},ue=function(){return(z.isGesturing=!1)||I(z)},ge=function(ke){if(!Me(ke)){var rt=D(),Pe=C();Oe((rt-te)*O,(Pe-le)*O,1),te=rt,le=Pe,h&&me.restart(!0)}},Ae=function(ke){if(!Me(ke)){ke=$o(ke,u),ce&&(T=!0);var rt=(ke.deltaMode===1?l:ke.deltaMode===2?Kn.innerHeight:1)*_;Oe(ke.deltaX*rt,ke.deltaY*rt,0),h&&!B&&me.restart(!0)}},Re=function(ke){if(!Me(ke)){var rt=ke.clientX,Pe=ke.clientY,et=rt-z.x,Be=Pe-z.y;z.x=rt,z.y=Pe,j=!0,h&&me.restart(!0),(et||Be)&&it(et,Be)}},Qe=function(ke){z.event=ke,V(z)},ft=function(ke){z.event=ke,Y(z)},Ut=function(ke){return Me(ke)||$o(ke,u)&&N(z)};me=z._dc=ln.delayedCall(d||.25,Xe).pause(),z.deltaX=z.deltaY=0,z._vx=fh(0,50,!0),z._vy=fh(0,50,!0),z.scrollX=D,z.scrollY=C,z.isDragging=z.isGesturing=z.isPressed=!1,Qg(this),z.enable=function(Ie){return z.isEnabled||(bn(pe?Ee:a,"scroll",dh),o.indexOf("scroll")>=0&&bn(pe?Ee:a,"scroll",ge,he,L),o.indexOf("wheel")>=0&&bn(a,"wheel",Ae,he,L),(o.indexOf("touch")>=0&&jg||o.indexOf("pointer")>=0)&&(bn(a,Si[0],dt,he,L),bn(Ee,Si[2],W),bn(Ee,Si[3],W),R&&bn(a,"click",Se,!0,!0),N&&bn(a,"click",Ut),re&&bn(Ee,"gesturestart",Ce),I&&bn(Ee,"gestureend",ue),V&&bn(a,ts+"enter",Qe),Y&&bn(a,ts+"leave",ft),X&&bn(a,ts+"move",Re)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=j=ee=!1,z._vx.reset(),z._vy.reset(),te=D(),le=C(),Ie&&Ie.type&&dt(Ie),ye&&ye(z)),z},z.disable=function(){z.isEnabled&&(lo.filter(function(Ie){return Ie!==z&&Sa(Ie.target)}).length||Sn(pe?Ee:a,"scroll",dh),z.isPressed&&(z._vx.reset(),z._vy.reset(),Sn(B?a:Ee,Si[1],Ze,!0)),Sn(pe?Ee:a,"scroll",ge,L),Sn(a,"wheel",Ae,L),Sn(a,Si[0],dt,L),Sn(Ee,Si[2],W),Sn(Ee,Si[3],W),Sn(a,"click",Se,!0),Sn(a,"click",Ut),Sn(Ee,"gesturestart",Ce),Sn(Ee,"gestureend",ue),Sn(a,ts+"enter",Qe),Sn(a,ts+"leave",ft),Sn(a,ts+"move",Re),z.isEnabled=z.isPressed=z.isDragging=!1,we&&we(z))},z.kill=z.revert=function(){z.disable();var Ie=lo.indexOf(z);Ie>=0&&lo.splice(Ie,1),tr===z&&(tr=0)},lo.push(z),B&&Sa(a)&&(tr=z),z.enable(p)},Ly(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Vt.version="3.13.0";Vt.create=function(r){return new Vt(r)};Vt.register=t_;Vt.getAll=function(){return lo.slice()};Vt.getById=function(r){return lo.filter(function(e){return e.vars.id===r})[0]};Jg()&&ln.registerPlugin(Vt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,no,lt,At,Zn,yt,$d,bc,za,ba,aa,dl,dn,zc,ph,En,Qf,Jf,io,n_,nu,i_,wn,mh,r_,s_,yr,gh,Yd,vo,jd,Mc,_h,iu,fl=1,fn=Date.now,ru=fn(),mi=0,la=0,Kf=function(e,t,n){var i=Yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ep=function(e,t){return t&&(!Yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Oy=function r(){return la&&requestAnimationFrame(r)},tp=function(){return zc=1},np=function(){return zc=0},Pi=function(e){return e},ca=function(e){return Math.round(e*1e5)/1e5||0},o_=function(){return typeof window<"u"},a_=function(){return Ue||o_()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},ws=function(e){return!!~$d.indexOf(e)},l_=function(e){return(e==="Height"?jd:lt["inner"+e])||Zn["client"+e]||yt["client"+e]},c_=function(e){return Dr(e,"getBoundingClientRect")||(ws(e)?function(){return rc.width=lt.innerWidth,rc.height=jd,rc}:function(){return er(e)})},Fy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Dr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?l_(s):e["client"+s])||0}},Ny=function(e,t){return!t||~Bi.indexOf(e)?c_(e):function(){return rc}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Dr(e,n))?o()-c_(e)()[s]:ws(e)?(Zn[n]||yt[n])-l_(i):e[n]-e["offset"+i])},pl=function(e,t){for(var n=0;n<io.length;n+=3)(!t||~t.indexOf(io[n+1]))&&e(io[n],io[n+1],io[n+2])},Yn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},ua=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Yo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},su=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ks=Math.abs,u_="left",h_="top",Zd="right",Qd="bottom",ys="width",xs="height",Ma="Right",wa="Left",Ea="Top",Ta="Bottom",Xt="padding",ci="margin",Lo="Width",Jd="Height",Qt="px",ui=function(e){return lt.getComputedStyle(e)},Uy=function(e){var t=ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ip=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&ui(e)[ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},wc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},d_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ky=function(e){return function(t){return Ue.utils.snap(d_(e),t)}},Kd=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},By=function(e){return function(t,n){return Kd(d_(e))(t,n.direction)}},ml=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},gl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},rp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_l={toggleActions:"play",anticipatePin:0},Ec={top:0,left:0,center:.5,bottom:1,right:1},ec=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ec?Ec[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},vl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=At.createElement("div"),p=ws(n)||Dr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=p?yt:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&p?"fixed;":"absolute;"),(g||l||!p)&&(v+=(i===Jt?Zd:Qd)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],tc(_,0,i,x),_},tc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Lo]=1,s["border"+a+Lo]=0,s[n.p]=t+"px",Ue.set(e,s)},ot=[],vh={},Ha,sp=function(){return fn()-mi>34&&(Ha||(Ha=requestAnimationFrame(rr)))},Bs=function(){(!wn||!wn.isPressed||wn.startX>yt.clientWidth)&&(ct.cache++,wn?Ha||(Ha=requestAnimationFrame(rr)):rr(),mi||Ts("scrollStart"),mi=fn())},ou=function(){s_=lt.innerWidth,r_=lt.innerHeight},ha=function(e){ct.cache++,(e===!0||!dn&&!i_&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!mh||s_!==lt.innerWidth||Math.abs(lt.innerHeight-r_)>lt.innerHeight*.25))&&bc.restart(!0)},Es={},zy=[],f_=function r(){return nn(tt,"scrollEnd",r)||cs(!0)},Ts=function(e){return Es[e]&&Es[e].map(function(t){return t()})||zy},$n=[],p_=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},ef=function(e,t){var n;for(En=0;En<ot.length;En++)n=ot[En],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Mc=!0,t&&p_(t),t||Ts("revert")},m_=function(e,t){ct.cache++,(t||!Tn)&&ct.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(lt.history.scrollRestoration=Yd=e)},Tn,Ss=0,op,Hy=function(){if(op!==Ss){var e=op=Ss;requestAnimationFrame(function(){return e===Ss&&cs(!0)})}},g_=function(){yt.appendChild(vo),jd=!wn&&vo.offsetHeight||lt.innerHeight,yt.removeChild(vo)},ap=function(e){return za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},cs=function(e,t){if(Zn=At.documentElement,yt=At.body,$d=[lt,At,Zn,yt],mi&&!e&&!Mc){rn(tt,"scrollEnd",f_);return}g_(),Tn=tt.isRefreshing=!0,ct.forEach(function(i){return gn(i)&&++i.cacheID&&(i.rec=i())});var n=Ts("refreshInit");n_&&tt.sort(),t||ef(),ct.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Mc=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),_h=1,ap(!0),ot.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ap(!1),_h=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),m_(Yd,1),bc.pause(),Ss++,Tn=2,rr(2),ot.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=tt.isRefreshing=!1,Ts("refresh")},yh=0,nc=1,Aa,rr=function(e){if(e===2||!Tn&&!Mc){tt.isUpdating=!0,Aa&&Aa.update(0);var t=ot.length,n=fn(),i=n-ru>=50,s=t&&ot[0].scroll();if(nc=yh>s?-1:1,Tn||(yh=s),i&&(mi&&!zc&&n-mi>200&&(mi=0,Ts("scrollEnd")),aa=ru,ru=n),nc<0){for(En=t;En-- >0;)ot[En]&&ot[En].update(0,i);nc=1}else for(En=0;En<t;En++)ot[En]&&ot[En].update(0,i);tt.isUpdating=!1}Ha=0},xh=[u_,h_,Qd,Zd,ci+Ta,ci+Ma,ci+Ea,ci+wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ic=xh.concat([ys,xs,"boxSizing","max"+Lo,"max"+Jd,"position",ci,Xt,Xt+Ea,Xt+Ma,Xt+Ta,Xt+wa]),Vy=function(e,t,n){yo(n);var i=e._gsap;if(i.spacerIsNative)yo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},au=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xh.length,o=t.style,a=e.style,l;s--;)l=xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qd]=a[Zd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ys]=wc(e,Rn)+Qt,o[xs]=wc(e,Jt)+Qt,o[Xt]=a[ci]=a[h_]=a[u_]="0",yo(i),a[ys]=a["max"+Lo]=n[ys],a[xs]=a["max"+Jd]=n[xs],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Gy=/([A-Z])/g,yo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Gy,"-$1").toLowerCase())}},yl=function(e){for(var t=ic.length,n=e.style,i=[],s=0;s<t;s++)i.push(ic[s],n[ic[s]]);return i.t=e,i},Wy=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},rc={left:0,top:0},lp=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){gn(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ec("0"+e.substr(3),n):0));var p=f?f.time():0,g,m,x;if(f&&f.seek(0),isNaN(e)||(e=+e),ua(e))f&&(e=Ue.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&tc(a,n,i,!0);else{gn(t)&&(t=t(l));var y=(e||"0").split(" "),v,E,w,M;x=In(t,l)||yt,v=er(x)||{},(!v||!v.left&&!v.top)&&ui(x).display==="none"&&(M=x.style.display,x.style.display="block",v=er(x),M?x.style.display=M:x.style.removeProperty("display")),E=ec(y[0],v[i.d]),w=ec(y[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-w,a&&tc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var A=e+n,b=o._isStart;g="scroll"+i.d2,tc(o,A,i,b&&A>20||!b&&(h?Math.max(yt[g],Zn[g]):o.parentNode[g])<=A+1),h&&(c=er(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return f&&x&&(g=er(x),f.seek(d),m=er(x),f._caScrollDist=g[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(p),f?e:Math.round(e)},Xy=/(webkit|moz|length|cssText|inset)/i,cp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=ui(e);for(o in a)!+o&&!Xy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},__=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xl=function(e,t,n){var i={};i[t.p]="+="+n,Ue.set(e,i)},up=function(e,t){var n=Ur(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var p=__(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return p(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&rr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ue.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",n.wheelHandler),tt.isTouch&&rn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){no||r.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),gh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!la){this.update=this.refresh=this.kill=Pi;return}n=ip(Yn(n)||ua(n)||n.nodeType?{trigger:n}:n,_l);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,p=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,E=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,A=s.fastScrollEnd,b=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Jt,F=!h&&h!==0,U=In(n.scroller||lt),G=Ue.core.getCache(U),V=ws(U),Y=("pinType"in n?n.pinType:Dr(U,"pinType")||V&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=F&&n.toggleActions.split(" "),B="markers"in n?n.markers:_l.markers,re=V?0:parseFloat(ui(U)["border"+S.p2+Lo])||0,I=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ye=Fy(U,V,S),we=Ny(U,V),N=0,O=0,L=0,R=Ur(U,S),K,de,$,me,ee,j,T,se,ne,z,H,k,he,D,C,te,le,fe,pe,Ee,be,Te,$e,Se,Me,Xe,ze,Oe,it,Ze,dt,W,Ce,ue,ge,Ae,Re,Qe,ft;if(I._startClamp=I._endClamp=!1,I._dir=S,g*=45,I.scroller=U,I.scroll=M?M.time.bind(M):R,me=R(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(n_=1,n.refreshPriority===-9999&&(Aa=I)),G.tweenScroll=G.tweenScroll||{top:up(U,Jt),left:up(U,Rn)},I.tweenTo=K=G.tweenScroll[S.p],I.scrubDuration=function(Pe){Ce=ua(Pe)&&Pe,Ce?W?W.duration(Pe):W=Ue.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return m&&m(I)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),Ze=0,l||(l=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&Ue.set(V?[yt,Zn]:U,{scrollBehavior:"auto"}),ct.forEach(function(Pe){return gn(Pe)&&Pe.target===(V?At.scrollingElement||Zn:U)&&(Pe.smooth=!1)}),$=gn(v.snapTo)?v.snapTo:v.snapTo==="labels"?ky(i):v.snapTo==="labelsDirectional"?By(i):v.directional!==!1?function(Pe,et){return Kd(v.snapTo)(Pe,fn()-O<500?0:et.direction)}:Ue.utils.snap(v.snapTo),ue=v.duration||{min:.1,max:2},ue=ns(ue)?ba(ue.min,ue.max):ba(ue,ue),ge=Ue.delayedCall(v.delay||Ce/2||.1,function(){var Pe=R(),et=fn()-O<500,Be=K.tween;if((et||Math.abs(I.getVelocity())<10)&&!Be&&!zc&&N!==Pe){var Je=(Pe-j)/D,zt=i&&!F?i.totalProgress():Je,at=et?0:(zt-dt)/(fn()-aa)*1e3||0,Tt=Ue.utils.clamp(-Je,1-Je,ks(at/2)*at/.185),Yt=Je+(v.inertia===!1?0:Tt),bt,Mt,gt=v,Gn=gt.onStart,Rt=gt.onInterrupt,yn=gt.onComplete;if(bt=$(Yt,I),ua(bt)||(bt=Yt),Mt=Math.max(0,Math.round(j+bt*D)),Pe<=T&&Pe>=j&&Mt!==Pe){if(Be&&!Be._initted&&Be.data<=ks(Mt-Pe))return;v.inertia===!1&&(Tt=bt-Je),K(Mt,{duration:ue(ks(Math.max(ks(Yt-zt),ks(bt-zt))*.185/at/.05||0)),ease:v.ease||"power3",data:ks(Mt-Pe),onInterrupt:function(){return ge.restart(!0)&&Rt&&Rt(I)},onComplete:function(){I.update(),N=R(),i&&!F&&(W?W.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),Ze=dt=i&&!F?i.totalProgress():I.progress,x&&x(I),yn&&yn(I)}},Pe,Tt*D,Mt-Pe-Tt*D),Gn&&Gn(I,K.tween)}}else I.isActive&&N!==Pe&&ge.restart(!0)}).pause()),l&&(vh[l]=I),d=I.trigger=In(d||f!==!0&&f),ft=d&&d._gsap&&d._gsap.stRevert,ft&&(ft=ft(I)),f=f===!0?d:In(f),Yn(a)&&(a={targets:d,className:a}),f&&(_===!1||_===ci||(_=!_&&f.parentNode&&f.parentNode.style&&ui(f.parentNode).display==="flex"?!1:Xt),I.pin=f,de=Ue.core.getCache(f),de.spacer?C=de.pinState:(w&&(w=In(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),de.spacerIsNative=!!w,w&&(de.spacerState=yl(w))),de.spacer=fe=w||At.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),de.pinState=C=yl(f)),n.force3D!==!1&&Ue.set(f,{force3D:!0}),I.spacer=fe=de.spacer,it=ui(f),Se=it[_+S.os2],Ee=Ue.getProperty(f),be=Ue.quickSetter(f,S.a,Qt),au(f,fe,it),le=yl(f)),B){k=ns(B)?ip(B,rp):rp,z=vl("scroller-start",l,U,S,k,0),H=vl("scroller-end",l,U,S,k,0,z),pe=z["offset"+S.op.d2];var Ut=In(Dr(U,"content")||U);se=this.markerStart=vl("start",l,Ut,S,k,pe,0,M),ne=this.markerEnd=vl("end",l,Ut,S,k,pe,0,M),M&&(Qe=Ue.quickSetter([se,ne],S.a,Qt)),!Y&&!(Bi.length&&Dr(U,"fixedMarkers")===!0)&&(Uy(V?yt:U),Ue.set([z,H],{force3D:!0}),Xe=Ue.quickSetter(z,S.a,Qt),Oe=Ue.quickSetter(H,S.a,Qt))}if(M){var Ie=M.vars.onUpdate,ke=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){I.update(0,0,1),Ie&&Ie.apply(M,ke||[])})}if(I.previous=function(){return ot[ot.indexOf(I)-1]},I.next=function(){return ot[ot.indexOf(I)+1]},I.revert=function(Pe,et){if(!et)return I.kill(!0);var Be=Pe!==!1||!I.enabled,Je=dn;Be!==I.isReverted&&(Be&&(Ae=Math.max(R(),I.scroll.rec||0),L=I.progress,Re=i&&i.progress()),se&&[se,ne,z,H].forEach(function(zt){return zt.style.display=Be?"none":"block"}),Be&&(dn=I,I.update(Be)),f&&(!E||!I.isActive)&&(Be?Vy(f,fe,C):au(f,fe,ui(f),Me)),Be||I.update(Be),dn=Je,I.isReverted=Be)},I.refresh=function(Pe,et,Be,Je){if(!((dn||!I.enabled)&&!et)){if(f&&Pe&&mi){rn(r,"scrollEnd",f_);return}!Tn&&ce&&ce(I),dn=I,K.tween&&!Be&&(K.tween.kill(),K.tween=0),W&&W.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(nt){return nt.vars.immediateRender&&nt.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var zt=ye(),at=we(),Tt=M?M.duration():Fi(U,S),Yt=D<=.01||!D,bt=0,Mt=Je||0,gt=ns(Be)?Be.end:n.end,Gn=n.endTrigger||d,Rt=ns(Be)?Be.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),yn=I.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,I),ri=d&&Math.max(0,ot.indexOf(I))||0,jt=ri,Zt,P,Q,oe,ie,Z,xe,Le,Ne,Fe,Ge,je,He;for(B&&ns(Be)&&(je=Ue.getProperty(z,S.p),He=Ue.getProperty(H,S.p));jt-- >0;)Z=ot[jt],Z.end||Z.refresh(0,1)||(dn=I),xe=Z.pin,xe&&(xe===d||xe===f||xe===yn)&&!Z.isReverted&&(Fe||(Fe=[]),Fe.unshift(Z),Z.revert(!0,!0)),Z!==ot[jt]&&(ri--,jt--);for(gn(Rt)&&(Rt=Rt(I)),Rt=Kf(Rt,"start",I),j=lp(Rt,d,zt,S,R(),se,z,I,at,re,Y,Tt,M,I._startClamp&&"_startClamp")||(f?-.001:0),gn(gt)&&(gt=gt(I)),Yn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Yn(Rt)?Rt.split(" ")[0]:"")+gt:(bt=ec(gt.substr(2),zt),gt=Yn(Rt)?Rt:(M?Ue.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,j):j)+bt,Gn=d)),gt=Kf(gt,"end",I),T=Math.max(j,lp(gt||(Gn?"100% 0":Tt),Gn,zt,S,R()+bt,ne,H,I,at,re,Y,Tt,M,I._endClamp&&"_endClamp"))||-.001,bt=0,jt=ri;jt--;)Z=ot[jt],xe=Z.pin,xe&&Z.start-Z._pinPush<=j&&!M&&Z.end>0&&(Zt=Z.end-(I._startClamp?Math.max(0,Z.start):Z.start),(xe===d&&Z.start-Z._pinPush<j||xe===yn)&&isNaN(Rt)&&(bt+=Zt*(1-Z.progress)),xe===f&&(Mt+=Zt));if(j+=bt,T+=bt,I._startClamp&&(I._startClamp+=bt),I._endClamp&&!Tn&&(I._endClamp=T||-.001,T=Math.min(T,Fi(U,S))),D=T-j||(j-=.01)&&.001,Yt&&(L=Ue.utils.clamp(0,1,Ue.utils.normalize(j,T,Ae))),I._pinPush=Mt,se&&bt&&(Zt={},Zt[S.a]="+="+bt,yn&&(Zt[S.p]="-="+R()),Ue.set([se,ne],Zt)),f&&!(_h&&I.end>=Fi(U,S)))Zt=ui(f),oe=S===Jt,Q=R(),Te=parseFloat(Ee(S.a))+Mt,!Tt&&T>1&&(Ge=(V?At.scrollingElement||Zn:U).style,Ge={style:Ge,value:Ge["overflow"+S.a.toUpperCase()]},V&&ui(yt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ge.style["overflow"+S.a.toUpperCase()]="scroll")),au(f,fe,Zt),le=yl(f),P=er(f,!0),Le=Y&&Ur(U,oe?Rn:Jt)(),_?(Me=[_+S.os2,D+Mt+Qt],Me.t=fe,jt=_===Xt?wc(f,S)+D+Mt:0,jt&&(Me.push(S.d,jt+Qt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=jt+Qt)),yo(Me),yn&&ot.forEach(function(nt){nt.pin===yn&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),Y&&R(Ae)):(jt=wc(f,S),jt&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=jt+Qt)),Y&&(ie={top:P.top+(oe?Q-j:Le)+Qt,left:P.left+(oe?Le:Q-j)+Qt,boxSizing:"border-box",position:"fixed"},ie[ys]=ie["max"+Lo]=Math.ceil(P.width)+Qt,ie[xs]=ie["max"+Jd]=Math.ceil(P.height)+Qt,ie[ci]=ie[ci+Ea]=ie[ci+Ma]=ie[ci+Ta]=ie[ci+wa]="0",ie[Xt]=Zt[Xt],ie[Xt+Ea]=Zt[Xt+Ea],ie[Xt+Ma]=Zt[Xt+Ma],ie[Xt+Ta]=Zt[Xt+Ta],ie[Xt+wa]=Zt[Xt+wa],te=Wy(C,ie,E),Tn&&R(0)),i?(Ne=i._initted,nu(1),i.render(i.duration(),!0,!0),$e=Ee(S.a)-Te+D+Mt,ze=Math.abs(D-$e)>1,Y&&ze&&te.splice(te.length-2,2),i.render(0,!0,!0),Ne||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),nu(0)):$e=D,Ge&&(Ge.value?Ge.style["overflow"+S.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+S.a));else if(d&&R()&&!M)for(P=d.parentNode;P&&P!==yt;)P._pinOffset&&(j-=P._pinOffset,T-=P._pinOffset),P=P.parentNode;Fe&&Fe.forEach(function(nt){return nt.revert(!1,!0)}),I.start=j,I.end=T,me=ee=Tn?Ae:R(),!M&&!Tn&&(me<Ae&&R(Ae),I.scroll.rec=0),I.revert(!1,!0),O=fn(),ge&&(N=-1,ge.restart(!0)),dn=0,i&&F&&(i._initted||Re)&&i.progress()!==Re&&i.progress(Re||0,!0).render(i.time(),!0,!0),(Yt||L!==I.progress||M||p||i&&!i._initted)&&(i&&!F&&(i._initted||L||i.vars.immediateRender!==!1)&&i.totalProgress(M&&j<-.001&&!L?Ue.utils.normalize(j,T,0):L,!0),I.progress=Yt||(me-j)/D===L?0:L),f&&_&&(fe._pinOffset=Math.round(I.progress*$e)),W&&W.invalidate(),isNaN(je)||(je-=Ue.getProperty(z,S.p),He-=Ue.getProperty(H,S.p),xl(z,S,je),xl(se,S,je-(Je||0)),xl(H,S,He),xl(ne,S,He-(Je||0))),Yt&&!Tn&&I.update(),u&&!Tn&&!he&&(he=!0,u(I),he=!1)}},I.getVelocity=function(){return(R()-ee)/(fn()-aa)*1e3||0},I.endAnimation=function(){Yo(I.callbackAnimation),i&&(W?W.progress(1):i.paused()?F||Yo(i,I.direction<0,1):Yo(i,i.reversed()))},I.labelToScroll=function(Pe){return i&&i.labels&&(j||I.refresh()||j)+i.labels[Pe]/i.duration()*D||0},I.getTrailing=function(Pe){var et=ot.indexOf(I),Be=I.direction>0?ot.slice(0,et).reverse():ot.slice(et+1);return(Yn(Pe)?Be.filter(function(Je){return Je.vars.preventOverlaps===Pe}):Be).filter(function(Je){return I.direction>0?Je.end<=j:Je.start>=T})},I.update=function(Pe,et,Be){if(!(M&&!Be&&!Pe)){var Je=Tn===!0?Ae:I.scroll(),zt=Pe?0:(Je-j)/D,at=zt<0?0:zt>1?1:zt||0,Tt=I.progress,Yt,bt,Mt,gt,Gn,Rt,yn,ri;if(et&&(ee=me,me=M?R():Je,v&&(dt=Ze,Ze=i&&!F?i.totalProgress():at)),g&&f&&!dn&&!fl&&mi&&(!at&&j<Je+(Je-ee)/(fn()-aa)*g?at=1e-4:at===1&&T>Je+(Je-ee)/(fn()-aa)*g&&(at=.9999)),at!==Tt&&I.enabled){if(Yt=I.isActive=!!at&&at<1,bt=!!Tt&&Tt<1,Rt=Yt!==bt,Gn=Rt||!!at!=!!Tt,I.direction=at>Tt?1:-1,I.progress=at,Gn&&!dn&&(Mt=at&&!Tt?0:at===1?1:Tt===1?2:3,F&&(gt=!Rt&&q[Mt+1]!=="none"&&q[Mt+1]||q[Mt],ri=i&&(gt==="complete"||gt==="reset"||gt in i))),b&&(Rt||ri)&&(ri||h||!i)&&(gn(b)?b(I):I.getTrailing(b).forEach(function(Q){return Q.endAnimation()})),F||(W&&!dn&&!fl?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",at,i._tTime/i._tDur):(W.vars.totalProgress=at,W.invalidate().restart())):i&&i.totalProgress(at,!!(dn&&(O||Pe)))),f){if(Pe&&_&&(fe.style[_+S.os2]=Se),!Y)be(ca(Te+$e*at));else if(Gn){if(yn=!Pe&&at>Tt&&T+1>Je&&Je+1>=Fi(U,S),E)if(!Pe&&(Yt||yn)){var jt=er(f,!0),Zt=Je-j;cp(f,yt,jt.top+(S===Jt?Zt:0)+Qt,jt.left+(S===Jt?0:Zt)+Qt)}else cp(f,fe);yo(Yt||yn?te:le),ze&&at<1&&Yt||be(Te+(at===1&&!yn?$e:0))}}v&&!K.tween&&!dn&&!fl&&ge.restart(!0),a&&(Rt||y&&at&&(at<1||!iu))&&za(a.targets).forEach(function(Q){return Q.classList[Yt||y?"add":"remove"](a.className)}),o&&!F&&!Pe&&o(I),Gn&&!dn?(F&&(ri&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(I)),(Rt||!iu)&&(c&&Rt&&su(I,c),X[Mt]&&su(I,X[Mt]),y&&(at===1?I.kill(!1,1):X[Mt]=0),Rt||(Mt=at===1?1:3,X[Mt]&&su(I,X[Mt]))),A&&!Yt&&Math.abs(I.getVelocity())>(ua(A)?A:2500)&&(Yo(I.callbackAnimation),W?W.progress(1):Yo(i,gt==="reverse"?1:!at,1))):F&&o&&!dn&&o(I)}if(Oe){var P=M?Je/M.duration()*(M._caScrollDist||0):Je;Xe(P+(z._isFlipped?1:0)),Oe(P)}Qe&&Qe(-Je/M.duration()*(M._caScrollDist||0))}},I.enable=function(Pe,et){I.enabled||(I.enabled=!0,rn(U,"resize",ha),V||rn(U,"scroll",Bs),ce&&rn(r,"refreshInit",ce),Pe!==!1&&(I.progress=L=0,me=ee=N=R()),et!==!1&&I.refresh())},I.getTween=function(Pe){return Pe&&K?K.tween:W},I.setPositions=function(Pe,et,Be,Je){if(M){var zt=M.scrollTrigger,at=M.duration(),Tt=zt.end-zt.start;Pe=zt.start+Tt*Pe/at,et=zt.start+Tt*et/at}I.refresh(!1,!1,{start:ep(Pe,Be&&!!I._startClamp),end:ep(et,Be&&!!I._endClamp)},Je),I.update()},I.adjustPinSpacing=function(Pe){if(Me&&Pe){var et=Me.indexOf(S.d)+1;Me[et]=parseFloat(Me[et])+Pe+Qt,Me[1]=parseFloat(Me[1])+Pe+Qt,yo(Me)}},I.disable=function(Pe,et){if(I.enabled&&(Pe!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,et||W&&W.pause(),Ae=0,de&&(de.uncache=1),ce&&nn(r,"refreshInit",ce),ge&&(ge.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!V)){for(var Be=ot.length;Be--;)if(ot[Be].scroller===U&&ot[Be]!==I)return;nn(U,"resize",ha),V||nn(U,"scroll",Bs)}},I.kill=function(Pe,et){I.disable(Pe,et),W&&!et&&W.kill(),l&&delete vh[l];var Be=ot.indexOf(I);Be>=0&&ot.splice(Be,1),Be===En&&nc>0&&En--,Be=0,ot.forEach(function(Je){return Je.scroller===I.scroller&&(Be=1)}),Be||Tn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,Pe&&i.revert({kill:!1}),et||i.kill()),se&&[se,ne,z,H].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Aa===I&&(Aa=0),f&&(de&&(de.uncache=1),Be=0,ot.forEach(function(Je){return Je.pin===f&&Be++}),Be||(de.spacer=0)),n.onKill&&n.onKill(I)},ot.push(I),I.enable(!1,!1),ft&&ft(I),i&&i.add&&!D){var rt=I.update;I.update=function(){I.update=rt,ct.cache++,j||T||I.refresh()},Ue.delayedCall(.01,I.update),D=.01,j=T=0}else I.refresh();f&&Hy()},r.register=function(n){return no||(Ue=n||a_(),o_()&&window.document&&r.enable(),no=la),no},r.defaults=function(n){if(n)for(var i in n)_l[i]=n[i];return _l},r.disable=function(n,i){la=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(lt,"wheel",Bs),nn(At,"scroll",Bs),clearInterval(dl),nn(At,"touchcancel",Pi),nn(yt,"touchstart",Pi),ml(nn,At,"pointerdown,touchstart,mousedown",tp),ml(nn,At,"pointerup,touchend,mouseup",np),bc.kill(),pl(nn);for(var s=0;s<ct.length;s+=3)gl(nn,ct[s],ct[s+1]),gl(nn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,At=document,Zn=At.documentElement,yt=At.body,Ue&&(za=Ue.utils.toArray,ba=Ue.utils.clamp,gh=Ue.core.context||Pi,nu=Ue.core.suppressOverwrites||Pi,Yd=lt.history.scrollRestoration||"auto",yh=lt.pageYOffset||0,Ue.core.globals("ScrollTrigger",r),yt)){la=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",g_(),Oy(),Vt.register(Ue),r.isTouch=Vt.isTouch,yr=Vt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mh=Vt.isTouch===1,rn(lt,"wheel",Bs),$d=[lt,At,Zn,yt],Ue.matchMedia?(r.matchMedia=function(c){var u=Ue.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ue.addEventListener("matchMediaInit",function(){return ef()}),Ue.addEventListener("matchMediaRevert",function(){return p_()}),Ue.addEventListener("matchMedia",function(){cs(0,1),Ts("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return ou(),ou})):console.warn("Requires GSAP 3.11.0 or later"),ou(),rn(At,"scroll",Bs);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(yt),Jt.m=Math.round(a.top+Jt.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),dl=setInterval(sp,250),Ue.delayedCall(.5,function(){return fl=0}),rn(At,"touchcancel",Pi),rn(yt,"touchstart",Pi),ml(rn,At,"pointerdown,touchstart,mousedown",tp),ml(rn,At,"pointerup,touchend,mouseup",np),ph=Ue.utils.checkPrefix("transform"),ic.push(ph),no=fn(),bc=Ue.delayedCall(.2,cs).pause(),io=[At,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;At.hidden?(Qf=c,Jf=u):(Qf!==c||Jf!==u)&&ha()},At,"DOMContentLoaded",cs,lt,"load",cs,lt,"resize",ha],pl(rn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)gl(nn,ct[l],ct[l+1]),gl(nn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(iu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(dl)||(dl=i)&&setInterval(sp,i),"ignoreMobileResize"in n&&(mh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pl(nn)||pl(rn,n.autoRefreshEvents||"none"),i_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),o=ct.indexOf(s),a=ws(s);~o&&ct.splice(o,a?6:2),i&&(a?Bi.unshift(lt,i,yt,i,Zn,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Yn(n)?In(n):n).getBoundingClientRect(),a=o[s?ys:xs]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){Yn(n)&&(n=In(n));var o=n.getBoundingClientRect(),a=o[s?ys:xs],l=i==null?a/2:i in Ec?Ec[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Es.killAll||[];Es={},i.forEach(function(s){return s()})}},r})();tt.version="3.13.0";tt.saveStyles=function(r){return r?za(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),gh())}}):$n};tt.revert=function(r,e){return ef(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?ha(!0):(no||tt.register())&&cs(!0)};tt.update=function(r){return++ct.cache&&rr(r===!0?2:0)};tt.clearScrollMemory=m_;tt.maxScroll=function(r,e){return Fi(r,e?Rn:Jt)};tt.getScrollFunc=function(r,e){return Ur(In(r),e?Rn:Jt)};tt.getById=function(r){return vh[r]};tt.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!mi};tt.snapDirectional=Kd;tt.addEventListener=function(r,e){var t=Es[r]||(Es[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Es[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ue.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gn(s)&&(s=s(),rn(tt,"refresh",function(){return s=e.batchMax()})),za(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var hp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},lu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vt.isTouch?" pinch-zoom":""):"none",e===Zn&&r(yt,t)},Sl={auto:1,scroll:1},qy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sl[(l=ui(s)).overflowY]||Sl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ws(s)&&(Sl[(l=ui(s)).overflowY]||Sl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},v_=function(e,t,n,i){return Vt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&qy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(At,Vt.eventTypes[0],fp,!1,!0)},onDisable:function(){return nn(At,Vt.eventTypes[0],fp,!0)}})},$y=/(input|label|select|textarea)/i,dp,fp=function(e){var t=$y.test(e.target.tagName);(t||dp)&&(e._gsapAllow=!0,dp=t)},Yy=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=In(e.target)||Zn,u=Ue.core.globals().ScrollSmoother,h=u&&u.get(),d=yr&&(e.content&&In(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Ur(c,Jt),_=Ur(c,Rn),p=1,g=(Vt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,x=gn(i)?function(){return i(a)}:function(){return i||2.8},y,v,E=v_(c,e.type,!0,s),w=function(){return v=!1},M=Pi,A=Pi,b=function(){l=Fi(c,Jt),A=ba(yr?1:0,l),n&&(M=ba(0,Fi(c,Rn))),y=Ss},S=function(){d._gsap.y=ca(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(v){requestAnimationFrame(w);var B=ca(a.deltaY/2),re=A(f.v-B);if(d&&re!==f.v+f.offset){f.offset=re-f.v;var I=ca((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=ct.cache,rr()}return!0}f.offset&&S(),v=!0},U,G,V,Y,X=function(){b(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&Ue.set(d,{y:"+=0"}),e.ignoreCheck=function(q){return yr&&q.type==="touchmove"&&F()||p>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=p;p=ca((lt.visualViewport&&lt.visualViewport.scale||1)/g),U.pause(),q!==p&&lu(c,p>1.01?!0:n?!1:"x"),G=_(),V=f(),b(),y=Ss},e.onRelease=e.onGestureStart=function(q,B){if(f.offset&&S(),!B)Y.restart(!0);else{ct.cache++;var re=x(),I,ce;n&&(I=_(),ce=I+re*.05*-q.velocityX/.227,re*=hp(_,I,ce,Fi(c,Rn)),U.vars.scrollX=M(ce)),I=f(),ce=I+re*.05*-q.velocityY/.227,re*=hp(f,I,ce,Fi(c,Jt)),U.vars.scrollY=A(ce),U.invalidate().duration(re).play(.01),(yr&&U.vars.scrollY>=l||I>=l-1)&&Ue.to({},{onUpdate:X,duration:re})}o&&o(q)},e.onWheel=function(){U._ts&&U.pause(),fn()-m>1e3&&(y=0,m=fn())},e.onChange=function(q,B,re,I,ce){if(Ss!==y&&b(),B&&n&&_(M(I[2]===B?G+(q.startX-q.x):_()+B-I[1])),re){f.offset&&S();var ye=ce[2]===re,we=ye?V+q.startY-q.y:f()+re-ce[1],N=A(we);ye&&we!==N&&(V+=N-we),f(N)}(re||B)&&rr()},e.onEnable=function(){lu(c,n?!1:"x"),tt.addEventListener("refresh",X),rn(lt,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){lu(c,!0),nn(lt,"resize",X),tt.removeEventListener("refresh",X),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Vt(e),a.iOS=yr,yr&&!f()&&f(1),yr&&Ue.ticker.add(Pi),Y=a._dc,U=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:__(f,f(),function(){return U.pause()})},onUpdate:rr,onComplete:Y.vars.onComplete}),a};tt.sort=function(r){if(gn(r))return ot.sort(r);var e=lt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Vt(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return wn;if(r===!0&&wn)return wn.enable();if(r===!1){wn&&wn.kill(),wn=r;return}var e=r instanceof Vt?r:Yy(r);return wn&&wn.target===e.target&&wn.kill(),ws(e.target)&&(wn=e),e};tt.core={_getVelocityProp:fh,_inputObserver:v_,_scrollers:ct,_proxies:Bi,bridge:{ss:function(){mi||Ts("scrollStart"),mi=fn()},ref:function(){return dn}}};a_()&&Ue.registerPlugin(tt);let pn;function Hc(){We.registerPlugin(tt),window.ScrollTrigger=tt;const r=window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return document.documentElement.classList.add("lenis-smooth"),document.body.classList.add("lenis"),pn&&pn.destroy(),pn=new Ry({duration:r?1:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",smoothWheel:!0,wheelMultiplier:.8,smoothTouch:!1,infinite:!1}),window.lenis=pn,pn.on("scroll",tt.update),We.ticker.add(e=>{pn.raf(e*1e3)}),We.ticker.lagSmoothing(0),pn.on("scroll",({scroll:e})=>{e>5&&!document.querySelector("header").classList.contains("initialized")&&document.querySelector("header").classList.add("initialized")}),r&&setTimeout(()=>{window.scrollTo(0,0)},100),pn}function jy(){pn&&(pn.stop(),document.body.classList.add("lenis-stopped"))}function Zy(){pn&&(pn.start(),document.body.classList.remove("lenis-stopped"))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="174",Qy=0,pp=1,Jy=2,y_=1,Ky=2,Qi=3,kr=0,zn=1,Ii=2,Ir=0,xo=1,mp=2,gp=3,_p=4,ex=5,os=100,tx=101,nx=102,ix=103,rx=104,sx=200,ox=201,ax=202,lx=203,Sh=204,bh=205,cx=206,ux=207,hx=208,dx=209,fx=210,px=211,mx=212,gx=213,_x=214,Mh=0,wh=1,Eh=2,Do=3,Th=4,Ah=5,Ch=6,Rh=7,x_=0,vx=1,yx=2,Or=0,xx=1,Sx=2,bx=3,Mx=4,wx=5,Ex=6,Tx=7,S_=300,Io=301,Oo=302,Ph=303,Lh=304,Vc=306,Dh=1e3,us=1001,Ih=1002,wi=1003,Ax=1004,bl=1005,Ni=1006,cu=1007,Rr=1008,lr=1009,b_=1010,M_=1011,Va=1012,nf=1013,As=1014,nr=1015,Bo=1016,rf=1017,sf=1018,Fo=1020,w_=35902,E_=1021,T_=1022,Mi=1023,A_=1024,C_=1025,So=1026,No=1027,R_=1028,of=1029,P_=1030,af=1031,lf=1033,sc=33776,oc=33777,ac=33778,lc=33779,Oh=35840,Fh=35841,Nh=35842,Uh=35843,kh=36196,Bh=37492,zh=37496,Hh=37808,Vh=37809,Gh=37810,Wh=37811,Xh=37812,qh=37813,$h=37814,Yh=37815,jh=37816,Zh=37817,Qh=37818,Jh=37819,Kh=37820,ed=37821,cc=36492,td=36494,nd=36495,L_=36283,id=36284,rd=36285,sd=36286,Cx=3200,Rx=3201,D_=0,Px=1,Sr="",On="srgb",Uo="srgb-linear",Tc="linear",xt="srgb",zs=7680,vp=519,Lx=512,Dx=513,Ix=514,I_=515,Ox=516,Fx=517,Nx=518,Ux=519,yp=35044,xp="300 es",ir=2e3,Ac=2001;class zo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,od=180/Math.PI;function Ho(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function kx(r,e){return(r%e+e)%e}function hu(r,e,t){return(1-t)*r+t*e}function jo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ln(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],p=i[0],g=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],w=i[5],M=i[8];return s[0]=o*p+a*x+l*E,s[3]=o*g+a*y+l*w,s[6]=o*m+a*v+l*M,s[1]=c*p+u*x+h*E,s[4]=c*g+u*y+h*w,s[7]=c*m+u*v+h*M,s[2]=d*p+f*x+_*E,s[5]=d*g+f*y+_*w,s[8]=d*m+f*v+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(du.makeScale(e,t)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,t){return this.premultiply(du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const du=new Ke;function O_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bx(){const r=Ga("canvas");return r.style.display="block",r}const Sp={};function is(r){r in Sp||(Sp[r]=!0,console.warn(r))}function zx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Hx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mp=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const r={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=bo(i.r),i.g=bo(i.g),i.b=bo(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sr?Tc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Uo]:{primaries:e,whitePoint:n,transfer:Tc,toXYZ:bp,fromXYZ:Mp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:bp,fromXYZ:Mp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),r}const mt=Gx();function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hs;class Wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=Ga("canvas")),Hs.width=e.width,Hs.height=e.height;const n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xx=0;class cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(fu(i[o].image)):s.push(fu(i[o]))}else s=fu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function fu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class Hn extends zo{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,n=us,i=us,s=Ni,o=Rr,a=Mi,l=lr,c=Hn.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Ho(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=S_;Hn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,E=(m+1)/2,w=(u+d)/4,M=(h+p)/4,A=(_+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=M/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=A/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=A/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-p)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends zo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends $x{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class F_ extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wi,this.minFilter=wi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wi,this.minFilter=wi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==d||c!==f||u!==_){let g=1-a;const m=l*d+c*f+u*_+h*p,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,m*x);g=Math.sin(g*w)/E,a=Math.sin(a*w)/E}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,u=u*g+_*v,h=h*g+p*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new J,wp=new Ka;class Rs{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ml.copy(n.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),wl.subVectors(this.max,Zo),Vs.subVectors(e.a,Zo),Gs.subVectors(e.b,Zo),Ws.subVectors(e.c,Zo),fr.subVectors(Gs,Vs),pr.subVectors(Ws,Gs),qr.subVectors(Vs,Ws);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-qr.z,qr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,qr.z,0,-qr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-qr.y,qr.x,0];return!mu(t,Vs,Gs,Ws,wl)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,Vs,Gs,Ws,wl))?!1:(El.crossVectors(fr,pr),t=[El.x,El.y,El.z],mu(t,Vs,Gs,Ws,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new J,new J,new J,new J,new J,new J,new J,new J],vi=new J,Ml=new Rs,Vs=new J,Gs=new J,Ws=new J,fr=new J,pr=new J,qr=new J,Zo=new J,wl=new J,El=new J,$r=new J;function mu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){$r.fromArray(r,s);const a=i.x*Math.abs($r.x)+i.y*Math.abs($r.y)+i.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),u=n.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jx=new Rs,Qo=new J,gu=new J;class uf{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(gu)),this.expandByPoint(Qo.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new J,_u=new J,Tl=new J,mr=new J,vu=new J,Al=new J,yu=new J;class Zx{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_u.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(_u);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tl),a=mr.dot(this.direction),l=-mr.dot(Tl),c=mr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const p=1/u;h*=p,d*=p,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_u).addScaledVector(Tl,d),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){vu.subVectors(t,e),Al.subVectors(n,e),yu.crossVectors(vu,Al);let o=this.direction.dot(yu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(mr,Al));if(l<0)return null;const c=a*this.direction.dot(vu.cross(mr));if(c<0||l+c>o)return null;const u=-a*mr.dot(yu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d+p*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qx,e,Jx)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),gr.crossVectors(n,Xn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),gr.crossVectors(n,Xn)),gr.normalize(),Cl.crossVectors(Xn,gr),i[0]=gr.x,i[4]=Cl.x,i[8]=Xn.x,i[1]=gr.y,i[5]=Cl.y,i[9]=Xn.y,i[2]=gr.z,i[6]=Cl.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],p=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],w=i[0],M=i[4],A=i[8],b=i[12],S=i[1],F=i[5],U=i[9],G=i[13],V=i[2],Y=i[6],X=i[10],q=i[14],B=i[3],re=i[7],I=i[11],ce=i[15];return s[0]=o*w+a*S+l*V+c*B,s[4]=o*M+a*F+l*Y+c*re,s[8]=o*A+a*U+l*X+c*I,s[12]=o*b+a*G+l*q+c*ce,s[1]=u*w+h*S+d*V+f*B,s[5]=u*M+h*F+d*Y+f*re,s[9]=u*A+h*U+d*X+f*I,s[13]=u*b+h*G+d*q+f*ce,s[2]=_*w+p*S+g*V+m*B,s[6]=_*M+p*F+g*Y+m*re,s[10]=_*A+p*U+g*X+m*I,s[14]=_*b+p*G+g*q+m*ce,s[3]=x*w+y*S+v*V+E*B,s[7]=x*M+y*F+v*Y+E*re,s[11]=x*A+y*U+v*X+E*I,s[15]=x*b+y*G+v*q+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],p=e[7],g=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],p=e[13],g=e[14],m=e[15],x=h*g*c-p*d*c+p*l*f-a*g*f-h*l*m+a*d*m,y=_*d*c-u*g*c-_*l*f+o*g*f+u*l*m-o*d*m,v=u*p*c-_*h*c+_*a*f-o*p*f-u*a*m+o*h*m,E=_*h*l-u*p*l-_*a*d+o*p*d+u*a*g-o*h*g,w=t*x+n*y+i*v+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=x*M,e[1]=(p*d*s-h*g*s-p*i*f+n*g*f+h*i*m-n*d*m)*M,e[2]=(a*g*s-p*l*s+p*i*c-n*g*c-a*i*m+n*l*m)*M,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*M,e[4]=y*M,e[5]=(u*g*s-_*d*s+_*i*f-t*g*f-u*i*m+t*d*m)*M,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*m-t*l*m)*M,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*M,e[8]=v*M,e[9]=(_*h*s-u*p*s-_*n*f+t*p*f+u*n*m-t*h*m)*M,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*m+t*a*m)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*M,e[12]=E*M,e[13]=(u*p*i-_*h*i+_*n*d-t*p*d-u*n*g+t*h*g)*M,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*g-t*a*g)*M,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,p=o*u,g=o*h,m=a*h,x=l*c,y=l*u,v=l*h,E=n.x,w=n.y,M=n.z;return i[0]=(1-(p+m))*E,i[1]=(f+v)*E,i[2]=(_-y)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+m))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(_+y)*M,i[9]=(g-x)*M,i[10]=(1-(d+p))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xs.set(i[0],i[1],i[2]).length();const o=Xs.set(i[4],i[5],i[6]).length(),a=Xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);const c=1/s,u=1/o,h=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ir){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===ir)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ac)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ir){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let _,p;if(a===ir)_=(o+s)*h,p=-2*h;else if(a===Ac)_=s*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=p,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new J,yi=new It,Qx=new J(0,0,0),Jx=new J(1,1,1),gr=new J,Cl=new J,Xn=new J,Ep=new It,Tp=new Ka;class Gi{constructor(e=0,t=0,n=0,i=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kx=0;const Ap=new J,qs=new Ka,$i=new It,Rl=new J,Jo=new J,eS=new J,tS=new Ka,Cp=new J(1,0,0),Rp=new J(0,1,0),Pp=new J(0,0,1),Lp={type:"added"},nS={type:"removed"},$s={type:"childadded",child:null},xu={type:"childremoved",child:null};class vn extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new J,t=new Gi,n=new Ka,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new Ke}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rl.copy(e):Rl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Jo,Rl,this.up):$i.lookAt(Rl,Jo,this.up),this.quaternion.setFromRotationMatrix($i),i&&($i.extractRotation(i.matrixWorld),qs.setFromRotationMatrix($i),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lp),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nS),xu.child=e,this.dispatchEvent(xu),xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lp),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,eS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,tS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vn.DEFAULT_UP=new J(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new J,Yi=new J,Su=new J,ji=new J,Ys=new J,js=new J,Dp=new J,bu=new J,Mu=new J,wu=new J,Eu=new St,Tu=new St,Au=new St;class bi{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Yi.subVectors(n,t),Su.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(Yi),l=xi.dot(Su),c=Yi.dot(Yi),u=Yi.dot(Su),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Eu.setScalar(0),Tu.setScalar(0),Au.setScalar(0),Eu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,n),Au.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Eu,s.x),o.addScaledVector(Tu,s.y),o.addScaledVector(Au,s.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Yi.subVectors(e,t),xi.cross(Yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ys.subVectors(i,n),js.subVectors(s,n),bu.subVectors(e,n);const l=Ys.dot(bu),c=js.dot(bu);if(l<=0&&c<=0)return t.copy(n);Mu.subVectors(e,i);const u=Ys.dot(Mu),h=js.dot(Mu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ys,o);wu.subVectors(e,s);const f=Ys.dot(wu),_=js.dot(wu);if(_>=0&&f<=_)return t.copy(s);const p=f*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(js,a);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return Dp.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Dp,a);const m=1/(g+p+d);return o=p*m,a=d*m,t.copy(n).addScaledVector(Ys,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Cu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=kx(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const n=U_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(ut(hn.r*255,0,255))*65536+Math.round(ut(hn.g*255,0,255))*256+Math.round(ut(hn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=On){mt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Pl);const n=hu(_r.h,Pl.h,t),i=hu(_r.s,Pl.s,t),s=hu(_r.l,Pl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const hn=new qe;qe.NAMES=U_;let iS=0;class el extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=xo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=bh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==kr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sh&&(n.blendSrc=this.blendSrc),this.blendDst!==bh&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class k_ extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new J,Ll=new ve;let rS=0;class zi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yp,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),e}}class B_ extends zi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class z_ extends zi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends zi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sS=0;const ai=new It,Ru=new vn,Zs=new J,qn=new Rs,Ko=new Rs,tn=new J;class ur extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?z_:B_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(qn.min,Ko.min),qn.expandByPoint(tn),tn.addVectors(qn.max,Ko.max),qn.expandByPoint(tn)):(qn.expandByPoint(Ko.min),qn.expandByPoint(Ko.max))}qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),tn.add(Zs)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new J,l[A]=new J;const c=new J,u=new J,h=new J,d=new ve,f=new ve,_=new ve,p=new J,g=new J;function m(A,b,S){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const F=1/(f.x*_.y-_.x*f.y);isFinite(F)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(F),a[A].add(p),a[b].add(p),a[S].add(p),l[A].add(g),l[b].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,b=x.length;A<b;++A){const S=x[A],F=S.start,U=S.count;for(let G=F,V=F+U;G<V;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new J,v=new J,E=new J,w=new J;function M(A){E.fromBufferAttribute(i,A),w.copy(E);const b=a[A];y.copy(b),y.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(w,b);const F=v.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,F)}for(let A=0,b=x.length;A<b;++A){const S=x[A],F=S.start,U=S.count;for(let G=F,V=F+U;G<V;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,h=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),p=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new zi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new It,Yr=new Zx,Dl=new uf,Op=new J,Il=new J,Ol=new J,Fl=new J,Pu=new J,Nl=new J,Fp=new J,Ul=new J;class pi extends vn{constructor(e=new ur,t=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Pu.fromBufferAttribute(h,e),o?Nl.addScaledVector(Pu,u):Nl.addScaledVector(Pu.sub(t),u))}t.add(Nl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Dl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Dl,Op)===null||Yr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(Ip),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const w=a.getX(v),M=a.getX(v+1),A=a.getX(v+2);i=kl(this,m,e,n,c,u,h,w,M,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=kl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const w=v,M=v+1,A=v+2;i=kl(this,m,e,n,c,u,h,w,M,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=g,y=g+1,v=g+2;i=kl(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function oS(r,e,t,n,i,s,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===kr,a),l===null)return null;Ul.copy(a),Ul.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ul);return c<t.near||c>t.far?null:{distance:c,point:Ul.clone(),object:r}}function kl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Il),r.getVertexPosition(l,Ol),r.getVertexPosition(c,Fl);const u=oS(r,e,t,n,Il,Ol,Fl,Fp);if(u){const h=new J;bi.getBarycoord(Fp,Il,Ol,Fl,h),i&&(u.uv=bi.getInterpolatedAttribute(i,a,l,c,h,new ve)),s&&(u.uv1=bi.getInterpolatedAttribute(s,a,l,c,h,new ve)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,l,c,h,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new J,materialIndex:0};bi.getNormal(Il,Ol,Fl,d.normal),u.face=d,u.barycoord=h}return u}class tl extends ur{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(h,2));function _(p,g,m,x,y,v,E,w,M,A,b){const S=v/M,F=E/A,U=v/2,G=E/2,V=w/2,Y=M+1,X=A+1;let q=0,B=0;const re=new J;for(let I=0;I<X;I++){const ce=I*F-G;for(let ye=0;ye<Y;ye++){const we=ye*S-U;re[p]=we*x,re[g]=ce*y,re[m]=V,c.push(re.x,re.y,re.z),re[p]=0,re[g]=0,re[m]=w>0?1:-1,u.push(re.x,re.y,re.z),h.push(ye/M),h.push(1-I/A),q+=1}}for(let I=0;I<A;I++)for(let ce=0;ce<M;ce++){const ye=d+ce+Y*I,we=d+ce+Y*(I+1),N=d+(ce+1)+Y*(I+1),O=d+(ce+1)+Y*I;l.push(ye,we,O),l.push(we,N,O),B+=6}a.addGroup(f,B,b),f+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mn(r){const e={};for(let t=0;t<r.length;t++){const n=ko(r[t]);for(const i in n)e[i]=n[i]}return e}function aS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function H_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const lS={clone:ko,merge:Mn};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class V_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new J,Np=new ve,Up=new ve;class Qn extends V_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Up),t.subVectors(Up,Np)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uu*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class G_ extends vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(Qs,Js,e,t);i.layers=this.layers,this.add(i);const s=new Qn(Qs,Js,e,t);s.layers=this.layers,this.add(s);const o=new Qn(Qs,Js,e,t);o.layers=this.layers,this.add(o);const a=new Qn(Qs,Js,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Qs,Js,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Qs,Js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class hf extends Hn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Io,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W_ extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new tl(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Ir});s.uniforms.tEquirect.value=t;const o=new pi(i,s),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Ni),new G_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class da extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class X_ extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Du=new J,dS=new J,fS=new Ke;class rs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Du.subVectors(n,t).cross(dS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Du),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fS.getNormalMatrix(e),i=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new uf,Bl=new J;class df{constructor(e=new rs,t=new rs,n=new rs,i=new rs,s=new rs,o=new rs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],p=i[10],g=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,g-f,v-m).normalize(),n[1].setComponents(l+s,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+u,g+_,v+x).normalize(),n[3].setComponents(l-o,d-u,g-_,v-x).normalize(),n[4].setComponents(l-a,d-h,g-p,v-y).normalize(),t===ir)n[5].setComponents(l+a,d+h,g+p,v+y).normalize();else if(t===Ac)n[5].setComponents(a,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bl.x=i.normal.x>0?e.max.x:e.min.x,Bl.y=i.normal.y>0?e.max.y:e.min.y,Bl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends Hn{constructor(e,t,n,i,s,o,a,l,c,u=So){if(u!==So&&u!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===So&&(n=As),n===void 0&&u===No&&(n=Fo),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wi,this.minFilter=l!==void 0?l:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ve:new J);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new J,i=[],s=[],o=[],a=new J,l=new It;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new J)}s[0]=new J,o[0]=new J;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ff extends Wi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pS extends ff{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const zl=new J,Iu=new pf,Ou=new pf,Fu=new pf;class mS extends Wi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new J){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(zl.subVectors(i[0],i[1]).add(i[0]),c=zl);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(zl.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);p<1e-4&&(p=1),_<1e-4&&(_=p),g<1e-4&&(g=p),Iu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,p,g),Ou.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,p,g),Fu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,p,g)}else this.curveType==="catmullrom"&&(Iu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ou.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Fu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Iu.calc(l),Ou.calc(l),Fu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kp(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function gS(r,e){const t=1-r;return t*t*e}function _S(r,e){return 2*(1-r)*r*e}function vS(r,e){return r*r*e}function Ca(r,e,t,n){return gS(r,e)+_S(r,t)+vS(r,n)}function yS(r,e){const t=1-r;return t*t*t*e}function xS(r,e){const t=1-r;return 3*t*t*r*e}function SS(r,e){return 3*(1-r)*r*r*e}function bS(r,e){return r*r*r*e}function Ra(r,e,t,n,i){return yS(r,e)+xS(r,t)+SS(r,n)+bS(r,i)}class $_ extends Wi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(e,i.x,s.x,o.x,a.x),Ra(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class MS extends Wi{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(e,i.x,s.x,o.x,a.x),Ra(e,i.y,s.y,o.y,a.y),Ra(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y_ extends Wi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wS extends Wi{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j_ extends Wi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(e,i.x,s.x,o.x),Ca(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ES extends Wi{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(e,i.x,s.x,o.x),Ca(e,i.y,s.y,o.y),Ca(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(kp(a,l.x,c.x,u.x,h.x),kp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ve().fromArray(i))}return this}}var ad=Object.freeze({__proto__:null,ArcCurve:pS,CatmullRomCurve3:mS,CubicBezierCurve:$_,CubicBezierCurve3:MS,EllipseCurve:ff,LineCurve:Y_,LineCurve3:wS,QuadraticBezierCurve:j_,QuadraticBezierCurve3:ES,SplineCurve:Z_});class TS extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ad[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ad[i.type]().fromJSON(i))}return this}}class Mo extends TS{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Y_(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new j_(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new $_(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Z_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new ff(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pa extends Mo{constructor(e){super(e),this.uuid=Ho(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Mo().fromJSON(i))}return this}}class AS{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=Q_(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,d,f,_;if(i&&(o=DS(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let p=n;p<s;p+=n)d=e[p],f=e[p+1],d<l&&(l=d),f<c&&(c=f),d>u&&(u=d),f>h&&(h=f);_=Math.max(u-l,h-c),_=_!==0?32767/_:0}return Wa(o,a,n,l,c,_,0),a}}function Q_(r,e,t,n,i){let s,o;if(i===GS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Bp(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Bp(s,r[s],r[s+1],o);return o&&Gc(o,o.next)&&(qa(o),o=o.next),o}function Ps(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Gc(t,t.next)||Nt(t.prev,t,t.next)===0)){if(qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wa(r,e,t,n,i,s,o){if(!r)return;!o&&s&&US(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?RS(r,n,i,s):CS(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),qa(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=PS(Ps(r),e,t),Wa(r,e,t,n,i,s,2)):o===2&&LS(r,e,t,n,i,s):Wa(Ps(r),e,t,n,i,s,1);break}}}function CS(r){const e=r.prev,t=r,n=r.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&co(i,a,s,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function RS(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Nt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,p=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=ld(f,_,e,t,n),x=ld(p,g,e,t,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&co(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&co(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&co(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&co(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function PS(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Gc(i,s)&&J_(i,n,n.next,s)&&Xa(i,s)&&Xa(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),qa(n),qa(n.next),n=r=s),n=n.next}while(n!==r);return Ps(n)}function LS(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zS(o,a)){let l=K_(o,a);o=Ps(o,o.next),l=Ps(l,l.next),Wa(o,e,t,n,i,s,0),Wa(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function DS(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Q_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(BS(c));for(i.sort(IS),s=0;s<i.length;s++)t=OS(i[s],t);return t}function IS(r,e){return r.x-e.x}function OS(r,e){const t=FS(r,e);if(!t)return e;const n=K_(t,r);return Ps(n,n.next),Ps(t,t.next)}function FS(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&co(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Xa(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&NS(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function NS(r,e){return Nt(r.prev,r,e.prev)<0&&Nt(e.next,r,r.next)<0}function US(r,e,t,n){let i=r;do i.z===0&&(i.z=ld(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,kS(i)}function kS(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function ld(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function BS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function co(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function zS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!HS(r,e)&&(Xa(r,e)&&Xa(e,r)&&VS(r,e)&&(Nt(r.prev,r,e.prev)||Nt(r,e.prev,e))||Gc(r,e)&&Nt(r.prev,r,r.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Gc(r,e){return r.x===e.x&&r.y===e.y}function J_(r,e,t,n){const i=Vl(Nt(r,e,t)),s=Vl(Nt(r,e,n)),o=Vl(Nt(t,n,r)),a=Vl(Nt(t,n,e));return!!(i!==s&&o!==a||i===0&&Hl(r,t,e)||s===0&&Hl(r,n,e)||o===0&&Hl(t,r,n)||a===0&&Hl(t,e,n))}function Hl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Vl(r){return r>0?1:r<0?-1:0}function HS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&J_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Xa(r,e){return Nt(r.prev,r,r.next)<0?Nt(r,e,r.next)>=0&&Nt(r,r.prev,e)>=0:Nt(r,e,r.prev)<0||Nt(r,r.next,e)<0}function VS(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function K_(r,e){const t=new cd(r.i,r.x,r.y),n=new cd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bp(r,e,t,n){const i=new cd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function cd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class bs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];zp(e),Hp(n,e);let o=e.length;t.forEach(zp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hp(n,t[l]);const a=AS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function zp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Cc extends ur{constructor(e=new Pa([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gi(i,3)),this.setAttribute("uv",new gi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:WS;let y,v=!1,E,w,M,A;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,E=m.computeFrenetFrames(u,!1),w=new J,M=new J,A=new J),d||(g=0,f=0,_=0,p=0);const b=a.extractPoints(c);let S=b.shape;const F=b.holes;if(!bs.isClockWise(S)){S=S.reverse();for(let ee=0,j=F.length;ee<j;ee++){const T=F[ee];bs.isClockWise(T)&&(F[ee]=T.reverse())}}const G=bs.triangulateShape(S,F),V=S;for(let ee=0,j=F.length;ee<j;ee++){const T=F[ee];S=S.concat(T)}function Y(ee,j,T){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(j,T)}const X=S.length,q=G.length;function B(ee,j,T){let se,ne,z;const H=ee.x-j.x,k=ee.y-j.y,he=T.x-ee.x,D=T.y-ee.y,C=H*H+k*k,te=H*D-k*he;if(Math.abs(te)>Number.EPSILON){const le=Math.sqrt(C),fe=Math.sqrt(he*he+D*D),pe=j.x-k/le,Ee=j.y+H/le,be=T.x-D/fe,Te=T.y+he/fe,$e=((be-pe)*D-(Te-Ee)*he)/(H*D-k*he);se=pe+H*$e-ee.x,ne=Ee+k*$e-ee.y;const Se=se*se+ne*ne;if(Se<=2)return new ve(se,ne);z=Math.sqrt(Se/2)}else{let le=!1;H>Number.EPSILON?he>Number.EPSILON&&(le=!0):H<-Number.EPSILON?he<-Number.EPSILON&&(le=!0):Math.sign(k)===Math.sign(D)&&(le=!0),le?(se=-k,ne=H,z=Math.sqrt(C)):(se=H,ne=k,z=Math.sqrt(C/2))}return new ve(se/z,ne/z)}const re=[];for(let ee=0,j=V.length,T=j-1,se=ee+1;ee<j;ee++,T++,se++)T===j&&(T=0),se===j&&(se=0),re[ee]=B(V[ee],V[T],V[se]);const I=[];let ce,ye=re.concat();for(let ee=0,j=F.length;ee<j;ee++){const T=F[ee];ce=[];for(let se=0,ne=T.length,z=ne-1,H=se+1;se<ne;se++,z++,H++)z===ne&&(z=0),H===ne&&(H=0),ce[se]=B(T[se],T[z],T[H]);I.push(ce),ye=ye.concat(ce)}for(let ee=0;ee<g;ee++){const j=ee/g,T=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+p;for(let ne=0,z=V.length;ne<z;ne++){const H=Y(V[ne],re[ne],se);R(H.x,H.y,-T)}for(let ne=0,z=F.length;ne<z;ne++){const H=F[ne];ce=I[ne];for(let k=0,he=H.length;k<he;k++){const D=Y(H[k],ce[k],se);R(D.x,D.y,-T)}}}const we=_+p;for(let ee=0;ee<X;ee++){const j=d?Y(S[ee],ye[ee],we):S[ee];v?(M.copy(E.normals[0]).multiplyScalar(j.x),w.copy(E.binormals[0]).multiplyScalar(j.y),A.copy(y[0]).add(M).add(w),R(A.x,A.y,A.z)):R(j.x,j.y,0)}for(let ee=1;ee<=u;ee++)for(let j=0;j<X;j++){const T=d?Y(S[j],ye[j],we):S[j];v?(M.copy(E.normals[ee]).multiplyScalar(T.x),w.copy(E.binormals[ee]).multiplyScalar(T.y),A.copy(y[ee]).add(M).add(w),R(A.x,A.y,A.z)):R(T.x,T.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){const j=ee/g,T=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+p;for(let ne=0,z=V.length;ne<z;ne++){const H=Y(V[ne],re[ne],se);R(H.x,H.y,h+T)}for(let ne=0,z=F.length;ne<z;ne++){const H=F[ne];ce=I[ne];for(let k=0,he=H.length;k<he;k++){const D=Y(H[k],ce[k],se);v?R(D.x,D.y+y[u-1].y,y[u-1].x+T):R(D.x,D.y,h+T)}}}N(),O();function N(){const ee=i.length/3;if(d){let j=0,T=X*j;for(let se=0;se<q;se++){const ne=G[se];K(ne[2]+T,ne[1]+T,ne[0]+T)}j=u+g*2,T=X*j;for(let se=0;se<q;se++){const ne=G[se];K(ne[0]+T,ne[1]+T,ne[2]+T)}}else{for(let j=0;j<q;j++){const T=G[j];K(T[2],T[1],T[0])}for(let j=0;j<q;j++){const T=G[j];K(T[0]+X*u,T[1]+X*u,T[2]+X*u)}}n.addGroup(ee,i.length/3-ee,0)}function O(){const ee=i.length/3;let j=0;L(V,j),j+=V.length;for(let T=0,se=F.length;T<se;T++){const ne=F[T];L(ne,j),j+=ne.length}n.addGroup(ee,i.length/3-ee,1)}function L(ee,j){let T=ee.length;for(;--T>=0;){const se=T;let ne=T-1;ne<0&&(ne=ee.length-1);for(let z=0,H=u+g*2;z<H;z++){const k=X*z,he=X*(z+1),D=j+se+k,C=j+ne+k,te=j+ne+he,le=j+se+he;de(D,C,te,le)}}}function R(ee,j,T){l.push(ee),l.push(j),l.push(T)}function K(ee,j,T){$(ee),$(j),$(T);const se=i.length/3,ne=x.generateTopUV(n,i,se-3,se-2,se-1);me(ne[0]),me(ne[1]),me(ne[2])}function de(ee,j,T,se){$(ee),$(j),$(se),$(j),$(T),$(se);const ne=i.length/3,z=x.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);me(z[0]),me(z[1]),me(z[3]),me(z[1]),me(z[2]),me(z[3])}function $(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function me(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return XS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ad[i.type]().fromJSON(i)),new Cc(n,e.options)}}const WS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],_=e[i*3+2],p=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-h),new ve(d,1-_),new ve(p,1-m)]:[new ve(a,1-l),new ve(u,1-h),new ve(f,1-_),new ve(g,1-m)]}};function XS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nl extends ur{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],p=[],g=[];for(let m=0;m<u;m++){const x=m*d-o;for(let y=0;y<c;y++){const v=y*h-s;_.push(v,-x,0),p.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),w=x+1+c*m;f.push(y,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class qS extends el{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=D_,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends qS{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class YS extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jS extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ZS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const QS=new ZS;class il{constructor(e){this.manager=e!==void 0?e:QS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class JS extends Error{constructor(e,t){super(e),this.response=t}}class KS extends il{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let p=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:f});for(let w=0,M=u.length;w<M;w++){const A=u[w];A.onProgress&&A.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new JS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Rc.add(e,c);const u=Zi[e];delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eb extends il{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ga("img");function l(){u(),Rc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tb extends il{constructor(e){super(e)}load(e,t,n,i){const s=new hf;s.colorSpace=On;const o=new eb(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class mf extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nu=new It,Vp=new J,Gp=new J;class e0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),Gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gp),t.updateMatrixWorld(),Nu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wp=new It,ea=new J,Uu=new J;class nb extends e0{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),Uu.copy(n.position),Uu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uu),n.updateMatrixWorld(),i.makeTranslation(-ea.x,-ea.y,-ea.z),Wp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wp)}}class ib extends mf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gf extends V_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rb extends e0{constructor(){super(new gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new rb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sb extends mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ob extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qp(){return performance.now()}const $p=new ve;class lb{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$p.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$p).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Zr{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Mo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let y=0,v=m.length;y<v;y++){const E=m[y],w=new Pa;w.curves=E.curves,x.push(w)}return x}function n(m,x){const y=x.length;let v=!1;for(let E=y-1,w=0;w<y;E=w++){let M=x[E],A=x[w],b=A.x-M.x,S=A.y-M.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(M=x[w],b=-b,A=x[E],S=-S),m.y<M.y||m.y>A.y)continue;if(m.y===M.y){if(m.x===M.x)return!0}else{const F=S*(m.x-M.x)-b*(m.y-M.y);if(F===0)return!0;if(F<0)continue;v=!v}}else{if(m.y!==M.y)continue;if(A.x<=m.x&&m.x<=M.x||M.x<=m.x&&m.x<=A.x)return!0}}return v}const i=bs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Pa,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],_=0,p;d[_]=void 0,f[_]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new Pa,p},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,x=0;for(let y=0,v=d.length;y<v;y++)h[y]=[];for(let y=0,v=d.length;y<v;y++){const E=f[y];for(let w=0;w<E.length;w++){const M=E[w];let A=!0;for(let b=0;b<d.length;b++)n(M.p,d[b].p)&&(y!==b&&x++,A?(A=!1,h[b].push(M)):m=!0);A&&h[y].push(M)}}x>0&&m===!1&&(f=h)}let g;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),g=f[m];for(let y=0,v=g.length;y<v;y++)l.holes.push(g[y].h)}return c}}function Yp(r,e,t,n){const i=cb(n);switch(t){case E_:return r*e;case A_:return r*e;case C_:return r*e*2;case R_:return r*e/i.components*i.byteLength;case of:return r*e/i.components*i.byteLength;case P_:return r*e*2/i.components*i.byteLength;case af:return r*e*2/i.components*i.byteLength;case T_:return r*e*3/i.components*i.byteLength;case Mi:return r*e*4/i.components*i.byteLength;case lf:return r*e*4/i.components*i.byteLength;case sc:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:case Uh:return Math.max(r,16)*Math.max(e,8)/4;case Oh:case Nh:return Math.max(r,8)*Math.max(e,8)/2;case kh:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ed:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cc:case td:case nd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case L_:case id:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rd:case sd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cb(r){switch(r){case lr:case b_:return{byteLength:1,components:1};case Va:case M_:case Bo:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case As:case nf:case nr:return{byteLength:4,components:1};case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function t0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ub(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],p=h[f];p.start<=_.start+_.count+1?_.count=Math.max(_.count,p.start+p.count-_.start):(++d,h[d]=p)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const p=h[f];r.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ob=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:hb,alphahash_pars_fragment:db,alphamap_fragment:fb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:vb,batching_pars_vertex:yb,batching_vertex:xb,begin_vertex:Sb,beginnormal_vertex:bb,bsdfs:Mb,iridescence_fragment:wb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Rb,color_fragment:Pb,color_pars_fragment:Lb,color_pars_vertex:Db,color_vertex:Ib,common:Ob,cube_uv_reflection_fragment:Fb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Ub,displacementmap_vertex:kb,emissivemap_fragment:Bb,emissivemap_pars_fragment:zb,colorspace_fragment:Hb,colorspace_pars_fragment:Vb,envmap_fragment:Gb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Xb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:iM,envmap_vertex:$b,fog_vertex:Yb,fog_pars_vertex:jb,fog_fragment:Zb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Kb,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:aM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:hM,lights_fragment_end:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:yM,map_particle_pars_fragment:xM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:bM,morphinstance_vertex:MM,morphcolor_vertex:wM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:CM,normal_fragment_maps:RM,normal_pars_fragment:PM,normal_pars_vertex:LM,normal_vertex:DM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:UM,opaque_fragment:kM,packing:BM,premultiplied_alpha_fragment:zM,project_vertex:HM,dithering_fragment:VM,dithering_pars_fragment:GM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:$M,shadowmap_vertex:YM,shadowmask_pars_fragment:jM,skinbase_vertex:ZM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:KM,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:hw,backgroundCube_vert:dw,backgroundCube_frag:fw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:_w,distanceRGBA_vert:vw,distanceRGBA_frag:yw,equirect_vert:xw,equirect_frag:Sw,linedashed_vert:bw,linedashed_frag:Mw,meshbasic_vert:ww,meshbasic_frag:Ew,meshlambert_vert:Tw,meshlambert_frag:Aw,meshmatcap_vert:Cw,meshmatcap_frag:Rw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Iw,meshphysical_vert:Ow,meshphysical_frag:Fw,meshtoon_vert:Nw,meshtoon_frag:Uw,points_vert:kw,points_frag:Bw,shadow_vert:zw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},De={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Li={basic:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Mn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Mn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Mn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Mn([De.points,De.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Mn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Mn([De.common,De.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Mn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Mn([De.sprite,De.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Mn([De.common,De.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Mn([De.lights,De.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Li.physical={uniforms:Mn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Gl={r:0,b:0,g:0},Qr=new Gi,Ww=new It;function Xw(r,e,t,n,i,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function p(y){let v=!1;const E=_(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Vc)?(u===void 0&&(u=new pi(new tl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:ko(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Qr.copy(v.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(Qr)),u.material.toneMapped=mt.getTransfer(E.colorSpace)!==xt,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pi(new nl(2,2),new cr({name:"BackgroundMaterial",uniforms:ko(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Gl,H_(r)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:p,addToRenderList:g,dispose:x}}function qw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,F,U,G,V){let Y=!1;const X=h(G,U,F);s!==X&&(s=X,c(s.object)),Y=f(S,G,U,V),Y&&_(S,G,U,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(S,F,U,G),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,F,U){const G=U.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let Y=V[F.id];Y===void 0&&(Y={},V[F.id]=Y);let X=Y[G];return X===void 0&&(X=d(l()),Y[G]=X),X}function d(S){const F=[],U=[],G=[];for(let V=0;V<t;V++)F[V]=0,U[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,F,U,G){const V=s.attributes,Y=F.attributes;let X=0;const q=U.getAttributes();for(const B in q)if(q[B].location>=0){const I=V[B];let ce=Y[B];if(ce===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),I===void 0||I.attribute!==ce||ce&&I.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function _(S,F,U,G){const V={},Y=F.attributes;let X=0;const q=U.getAttributes();for(const B in q)if(q[B].location>=0){let I=Y[B];I===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));const ce={};ce.attribute=I,I&&I.data&&(ce.data=I.data),V[B]=ce,X++}s.attributes=V,s.attributesNum=X,s.index=G}function p(){const S=s.newAttributes;for(let F=0,U=S.length;F<U;F++)S[F]=0}function g(S){m(S,0)}function m(S,F){const U=s.newAttributes,G=s.enabledAttributes,V=s.attributeDivisors;U[S]=1,G[S]===0&&(r.enableVertexAttribArray(S),G[S]=1),V[S]!==F&&(r.vertexAttribDivisor(S,F),V[S]=F)}function x(){const S=s.newAttributes,F=s.enabledAttributes;for(let U=0,G=F.length;U<G;U++)F[U]!==S[U]&&(r.disableVertexAttribArray(U),F[U]=0)}function y(S,F,U,G,V,Y,X){X===!0?r.vertexAttribIPointer(S,F,U,V,Y):r.vertexAttribPointer(S,F,U,G,V,Y)}function v(S,F,U,G){p();const V=G.attributes,Y=U.getAttributes(),X=F.defaultAttributeValues;for(const q in Y){const B=Y[q];if(B.location>=0){let re=V[q];if(re===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const I=re.normalized,ce=re.itemSize,ye=e.get(re);if(ye===void 0)continue;const we=ye.buffer,N=ye.type,O=ye.bytesPerElement,L=N===r.INT||N===r.UNSIGNED_INT||re.gpuType===nf;if(re.isInterleavedBufferAttribute){const R=re.data,K=R.stride,de=re.offset;if(R.isInstancedInterleavedBuffer){for(let $=0;$<B.locationSize;$++)m(B.location+$,R.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let $=0;$<B.locationSize;$++)g(B.location+$);r.bindBuffer(r.ARRAY_BUFFER,we);for(let $=0;$<B.locationSize;$++)y(B.location+$,ce/B.locationSize,N,I,K*O,(de+ce/B.locationSize*$)*O,L)}else{if(re.isInstancedBufferAttribute){for(let R=0;R<B.locationSize;R++)m(B.location+R,re.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let R=0;R<B.locationSize;R++)g(B.location+R);r.bindBuffer(r.ARRAY_BUFFER,we);for(let R=0;R<B.locationSize;R++)y(B.location+R,ce/B.locationSize,N,I,ce*O,ce/B.locationSize*R*O,L)}}else if(X!==void 0){const I=X[q];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(B.location,I);break;case 3:r.vertexAttrib3fv(B.location,I);break;case 4:r.vertexAttrib4fv(B.location,I);break;default:r.vertexAttrib1fv(B.location,I)}}}}x()}function E(){A();for(const S in n){const F=n[S];for(const U in F){const G=F[U];for(const V in G)u(G[V].object),delete G[V];delete F[U]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const F=n[S.id];for(const U in F){const G=F[U];for(const V in G)u(G[V].object),delete G[V];delete F[U]}delete n[S.id]}function M(S){for(const F in n){const U=n[F];if(U[S.id]===void 0)continue;const G=U[S.id];for(const V in G)u(G[V].object),delete G[V];delete U[S.id]}}function A(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:p,enableAttribute:g,disableUnusedAttributes:x}}function $w(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let p=0;p<h;p++)_+=u[p]*d[p];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yw(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Mi&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==lr&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==nr&&!A)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function jw(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new rs,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(_,d,y,f);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const p=h!==null?h.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const m=f+p*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function Zw(r){let e=new WeakMap;function t(o,a){return a===Ph?o.mapping=Io:a===Lh&&(o.mapping=Oo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ph||a===Lh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new W_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const uo=4,jp=[.125,.215,.35,.446,.526,.582],as=20,ku=new gf,Zp=new qe;let Bu=null,zu=0,Hu=0,Vu=!1;const ss=(1+Math.sqrt(5))/2,Ks=1/ss,Qp=[new J(-ss,Ks,0),new J(ss,Ks,0),new J(-Ks,0,ss),new J(Ks,0,ss),new J(0,ss,-Ks),new J(0,ss,Ks),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Qw=new J;class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Qw}=s;Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,zu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Bo,format:Mi,colorSpace:Uo,depthBuffer:!1},i=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Kw(s,e,t)}return i}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,ku)}_sceneToCubeUV(e,t,n,i,s){const l=new Qn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zp),h.toneMapping=Or,h.autoClear=!1;const _=new k_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),p=new pi(new tl,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(Zp),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;Wl(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Io||e.mapping===Oo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ku)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qp[(i-s-1)%Qp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pi(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*as-1),p=s/_,g=isFinite(s)?1+Math.floor(u*p):as;g>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${as}`);const m=[];let x=0;for(let M=0;M<as;++M){const A=M/p,b=Math.exp(-A*A/2);m.push(b),M===0?x+=b:M<g&&(x+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-uo?i-y+uo:0),w=4*(this._cubeSize-v);Wl(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,ku)}}function Jw(r){const e=[],t=[],n=[];let i=r;const s=r-uo+1+jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-uo?l=jp[o-r+uo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,p=3,g=2,m=1,x=new Float32Array(p*_*f),y=new Float32Array(g*_*f),v=new Float32Array(m*_*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,A=w>2?0:-1,b=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(b,p*_*w),y.set(d,g*_*w);const S=[w,w,w,w,w,w];v.set(S,m*_*w)}const E=new ur;E.setAttribute("position",new zi(x,p)),E.setAttribute("uv",new zi(y,g)),E.setAttribute("faceIndex",new zi(v,m)),e.push(E),i>uo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kp(r,e,t){const n=new Cs(r,e,t);return n.texture.mapping=Vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kw(r,e,t){const n=new Float32Array(as),i=new J(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function em(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function tm(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function _f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ph||l===Lh,u=l===Io||l===Oo;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Jp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Jp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nE(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],w=x[y+1],M=x[y+2];d.push(E,w,w,M,M,E)}}else if(_!==void 0){const x=_.array;p=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,w=y+1,M=y+2;d.push(E,w,w,M,M,E)}}else return;const g=new(O_(d)?z_:B_)(d,1);g.version=p;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iE(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,n,1)}function h(d,f,_,p){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],p[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,p,0,_);let m=0;for(let x=0;x<_;x++)m+=f[x]*p[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sE(r,e,t){const n=new WeakMap,i=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*w*4*h),A=new F_(M,E,w,h);A.type=nr,A.needsUpdate=!0;const b=v*4;for(let F=0;F<h;F++){const U=m[F],G=x[F],V=y[F],Y=E*w*4*F;for(let X=0;X<U.count;X++){const q=X*b;_===!0&&(i.fromBufferAttribute(U,X),M[Y+q+0]=i.x,M[Y+q+1]=i.y,M[Y+q+2]=i.z,M[Y+q+3]=0),p===!0&&(i.fromBufferAttribute(G,X),M[Y+q+4]=i.x,M[Y+q+5]=i.y,M[Y+q+6]=i.z,M[Y+q+7]=0),g===!0&&(i.fromBufferAttribute(V,X),M[Y+q+8]=i.x,M[Y+q+9]=i.y,M[Y+q+10]=i.z,M[Y+q+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new ve(E,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const p=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function oE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const n0=new Hn,nm=new q_(1,1),i0=new F_,r0=new Yx,s0=new hf,im=[],rm=[],sm=new Float32Array(16),om=new Float32Array(9),am=new Float32Array(4);function Vo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=im[i];if(s===void 0&&(s=new Float32Array(i),im[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wc(r,e){let t=rm[e];t===void 0&&(t=new Int32Array(e),rm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function aE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function cE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function uE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function hE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Kt(t,n))return;am.set(n),r.uniformMatrix2fv(this.addr,!1,am),en(t,n)}}function dE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Kt(t,n))return;om.set(n),r.uniformMatrix3fv(this.addr,!1,om),en(t,n)}}function fE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Kt(t,n))return;sm.set(n),r.uniformMatrix4fv(this.addr,!1,sm),en(t,n)}}function pE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function _E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function vE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function xE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function bE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(nm.compareFunction=I_,s=nm):s=n0,t.setTexture2D(e||s,i)}function ME(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||r0,i)}function wE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||s0,i)}function EE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||i0,i)}function TE(r){switch(r){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return hE;case 35675:return dE;case 35676:return fE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return _E;case 5125:return vE;case 36294:return yE;case 36295:return xE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return EE}}function AE(r,e){r.uniform1fv(this.addr,e)}function CE(r,e){const t=Vo(e,this.size,2);r.uniform2fv(this.addr,t)}function RE(r,e){const t=Vo(e,this.size,3);r.uniform3fv(this.addr,t)}function PE(r,e){const t=Vo(e,this.size,4);r.uniform4fv(this.addr,t)}function LE(r,e){const t=Vo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function DE(r,e){const t=Vo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function IE(r,e){const t=Vo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OE(r,e){r.uniform1iv(this.addr,e)}function FE(r,e){r.uniform2iv(this.addr,e)}function NE(r,e){r.uniform3iv(this.addr,e)}function UE(r,e){r.uniform4iv(this.addr,e)}function kE(r,e){r.uniform1uiv(this.addr,e)}function BE(r,e){r.uniform2uiv(this.addr,e)}function zE(r,e){r.uniform3uiv(this.addr,e)}function HE(r,e){r.uniform4uiv(this.addr,e)}function VE(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||n0,s[o])}function GE(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||r0,s[o])}function WE(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||s0,s[o])}function XE(r,e,t){const n=this.cache,i=e.length,s=Wc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),en(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||i0,s[o])}function qE(r){switch(r){case 5126:return AE;case 35664:return CE;case 35665:return RE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return IE;case 5124:case 35670:return OE;case 35667:case 35671:return FE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return kE;case 36294:return BE;case 36295:return zE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}class $E{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TE(t.type)}}class YE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qE(t.type)}}class jE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function lm(r,e){r.seq.push(e),r.map[e.id]=e}function ZE(r,e,t){const n=r.name,i=n.length;for(Gu.lastIndex=0;;){const s=Gu.exec(n),o=Gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){lm(t,c===void 0?new $E(a,r,e):new YE(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new jE(a),lm(t,h)),t=h}}}class uc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ZE(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const QE=37297;let JE=0;function KE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const um=new Ke;function e1(r){mt._getMatrix(um,mt.workingColorSpace,r);const e=`mat3( ${um.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case Tc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function hm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+KE(r.getShaderSource(e),o)}else return i}function t1(r,e){const t=e1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n1(r,e){let t;switch(e){case xx:t="Linear";break;case Sx:t="Reinhard";break;case bx:t="Cineon";break;case Mx:t="ACESFilmic";break;case Ex:t="AgX";break;case Tx:t="Neutral";break;case wx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new J;function i1(){mt.getLuminanceCoefficients(Xl);const r=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function s1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function fa(r){return r!==""}function dm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(r){return r.replace(a1,c1)}const l1=new Map;function c1(r,e){let t=st[e];if(t===void 0){const n=l1.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ud(t)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(r){return r.replace(u1,h1)}function h1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function f1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Io:case Oo:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function m1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case vx:e="ENVMAP_BLENDING_MIX";break;case yx:e="ENVMAP_BLENDING_ADD";break}return e}function g1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=d1(t),c=f1(t),u=p1(t),h=m1(t),d=g1(t),f=r1(t),_=s1(s),p=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(g=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?st.tonemapping_pars_fragment:"",t.toneMapping!==Or?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,t1("linearToOutputTexel",t.outputColorSpace),i1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=ud(o),o=dm(o,t),o=fm(o,t),a=ud(a),a=dm(a,t),a=fm(a,t),o=pm(o),a=pm(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=cm(i,i.VERTEX_SHADER,y),w=cm(i,i.FRAGMENT_SHADER,v);i.attachShader(p,E),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function M(F){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(p).trim(),G=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(w).trim();let Y=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,E,w);else{const q=hm(i,E,"vertex"),B=hm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+U+`
`+q+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(G===""||V==="")&&(X=!1);X&&(F.diagnostics={runnable:Y,programLog:U,vertexShader:{log:G,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(E),i.deleteShader(w),A=new uc(i,p),b=o1(i,p)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(p,QE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=w,this}let v1=0;class y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function S1(r,e,t,n,i,s,o){const a=new N_,l=new y1,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,F,U,G){const V=U.fog,Y=G.geometry,X=b.isMeshStandardMaterial?U.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),B=q&&q.mapping===Vc?q.image.height:null,re=_[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=I!==void 0?I.length:0;let ye=0;Y.morphAttributes.position!==void 0&&(ye=1),Y.morphAttributes.normal!==void 0&&(ye=2),Y.morphAttributes.color!==void 0&&(ye=3);let we,N,O,L;if(re){const Ie=Li[re];we=Ie.vertexShader,N=Ie.fragmentShader}else we=b.vertexShader,N=b.fragmentShader,l.update(b),O=l.getVertexShaderID(b),L=l.getFragmentShaderID(b);const R=r.getRenderTarget(),K=r.state.buffers.depth.getReversed(),de=G.isInstancedMesh===!0,$=G.isBatchedMesh===!0,me=!!b.map,ee=!!b.matcap,j=!!q,T=!!b.aoMap,se=!!b.lightMap,ne=!!b.bumpMap,z=!!b.normalMap,H=!!b.displacementMap,k=!!b.emissiveMap,he=!!b.metalnessMap,D=!!b.roughnessMap,C=b.anisotropy>0,te=b.clearcoat>0,le=b.dispersion>0,fe=b.iridescence>0,pe=b.sheen>0,Ee=b.transmission>0,be=C&&!!b.anisotropyMap,Te=te&&!!b.clearcoatMap,$e=te&&!!b.clearcoatNormalMap,Se=te&&!!b.clearcoatRoughnessMap,Me=fe&&!!b.iridescenceMap,Xe=fe&&!!b.iridescenceThicknessMap,ze=pe&&!!b.sheenColorMap,Oe=pe&&!!b.sheenRoughnessMap,it=!!b.specularMap,Ze=!!b.specularColorMap,dt=!!b.specularIntensityMap,W=Ee&&!!b.transmissionMap,Ce=Ee&&!!b.thicknessMap,ue=!!b.gradientMap,ge=!!b.alphaMap,Ae=b.alphaTest>0,Re=!!b.alphaHash,Qe=!!b.extensions;let ft=Or;b.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Ut={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:N,defines:b.defines,customVertexShaderID:O,customFragmentShaderID:L,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:$,batchingColor:$&&G._colorsTexture!==null,instancing:de,instancingColor:de&&G.instanceColor!==null,instancingMorph:de&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:R===null?r.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Uo,alphaToCoverage:!!b.alphaToCoverage,map:me,matcap:ee,envMap:j,envMapMode:j&&q.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:se,bumpMap:ne,normalMap:z,displacementMap:d&&H,emissiveMap:k,normalMapObjectSpace:z&&b.normalMapType===Px,normalMapTangentSpace:z&&b.normalMapType===D_,metalnessMap:he,roughnessMap:D,anisotropy:C,anisotropyMap:be,clearcoat:te,clearcoatMap:Te,clearcoatNormalMap:$e,clearcoatRoughnessMap:Se,dispersion:le,iridescence:fe,iridescenceMap:Me,iridescenceThicknessMap:Xe,sheen:pe,sheenColorMap:ze,sheenRoughnessMap:Oe,specularMap:it,specularColorMap:Ze,specularIntensityMap:dt,transmission:Ee,transmissionMap:W,thicknessMap:Ce,gradientMap:ue,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ae,alphaHash:Re,combine:b.combine,mapUv:me&&p(b.map.channel),aoMapUv:T&&p(b.aoMap.channel),lightMapUv:se&&p(b.lightMap.channel),bumpMapUv:ne&&p(b.bumpMap.channel),normalMapUv:z&&p(b.normalMap.channel),displacementMapUv:H&&p(b.displacementMap.channel),emissiveMapUv:k&&p(b.emissiveMap.channel),metalnessMapUv:he&&p(b.metalnessMap.channel),roughnessMapUv:D&&p(b.roughnessMap.channel),anisotropyMapUv:be&&p(b.anisotropyMap.channel),clearcoatMapUv:Te&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(b.sheenRoughnessMap.channel),specularMapUv:it&&p(b.specularMap.channel),specularColorMapUv:Ze&&p(b.specularColorMap.channel),specularIntensityMapUv:dt&&p(b.specularIntensityMap.channel),transmissionMapUv:W&&p(b.transmissionMap.channel),thicknessMapUv:Ce&&p(b.thicknessMap.channel),alphaMapUv:ge&&p(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(me||ge),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:K,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:me&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:k&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ii,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&b.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)S.push(F),S.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=_[b.type];let F;if(S){const U=Li[S];F=lS.clone(U.uniforms)}else F=b.uniforms;return F}function E(b,S){let F;for(let U=0,G=u.length;U<G;U++){const V=u[U];if(V.cacheKey===S){F=V,++F.usedTimes;break}}return F===void 0&&(F=new _1(r,S,b,s),u.push(F)),F}function w(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function M(b){l.remove(b)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:A}}function b1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function M1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _m(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,p,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:p,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=p,m.group=g),e++,m}function a(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||M1),n.length>1&&n.sort(d||gm),i.length>1&&i.sort(d||gm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function w1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _m,r.set(n,[o])):i>=s.length?(o=new _m,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function E1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new qe};break;case"SpotLight":t={position:new J,direction:new J,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A1=0;function C1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function R1(r){const e=new E1,t=T1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,s=new It,o=new It;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,p=0,g=0,m=0,x=0,y=0,v=0,E=0,w=0,M=0;c.sort(C1);for(let b=0,S=c.length;b<S;b++){const F=c[b],U=F.color,G=F.intensity,V=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=U.r*G,h+=U.g*G,d+=U.b*G;else if(F.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(F.sh.coefficients[X],G);M++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,B=t.get(F);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=F.shadow.matrix,x++}n.directional[f]=X,f++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(U).multiplyScalar(G),X.distance=V,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,n.spot[p]=X;const q=F.shadow;if(F.map&&(n.spotLightMap[E]=F.map,E++,q.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[p]=q.matrix,F.castShadow){const B=t.get(F);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=Y,v++}p++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(U).multiplyScalar(G),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=X,g++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const q=F.shadow,B=t.get(F);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=F.shadow.matrix,y++}n.point[_]=X,_++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(G),X.groundColor.copy(F.groundColor).multiplyScalar(G),n.hemi[m]=X,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==p||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==E||A.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=M,A.directionalLength=f,A.pointLength=_,A.spotLength=p,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=E,A.numLightProbes=M,n.version=A1++)}function l(c,u){let h=0,d=0,f=0,_=0,p=0;const g=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function vm(r){const e=new R1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function P1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new vm(r),e.set(i,[a])):s>=o.length?(a=new vm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I1(r,e,t){let n=new df;const i=new ve,s=new ve,o=new St,a=new YS({depthPacking:Rx}),l=new jS,c={},u=t.maxTextureSize,h={[kr]:zn,[zn]:kr,[Ii]:Ii},d=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ur;_.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pi(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y_;let m=this.type;this.render=function(w,M,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ir),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=m!==Qi&&this.type===Qi,V=m===Qi&&this.type!==Qi;for(let Y=0,X=w.length;Y<X;Y++){const q=w[Y],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const re=B.getFrameExtents();if(i.multiply(re),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/re.x),i.x=s.x*re.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/re.y),i.y=s.y*re.y,B.mapSize.y=s.y)),B.map===null||G===!0||V===!0){const ce=this.type!==Qi?{minFilter:wi,magFilter:wi}:{};B.map!==null&&B.map.dispose(),B.map=new Cs(i.x,i.y,ce),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const I=B.getViewportCount();for(let ce=0;ce<I;ce++){const ye=B.getViewport(ce);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(o),B.updateMatrices(q,ce),n=B.getFrustum(),v(M,A,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===Qi&&x(B,A),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,S,F)};function x(w,M){const A=e.update(p);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cs(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,A,d,p,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,A,f,p,null)}function y(w,M,A,b){let S=null;const F=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)S=F;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=S.uuid,G=M.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let Y=V[G];Y===void 0&&(Y=S.clone(),V[G]=Y,M.addEventListener("dispose",E)),S=Y}if(S.visible=M.visible,S.wireframe=M.wireframe,b===Qi?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=A}return S}function v(w,M,A,b,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Qi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const G=e.update(w),V=w.material;if(Array.isArray(V)){const Y=G.groups;for(let X=0,q=Y.length;X<q;X++){const B=Y[X],re=V[B.materialIndex];if(re&&re.visible){const I=y(w,re,b,S);w.onBeforeShadow(r,w,M,A,G,I,B),r.renderBufferDirect(A,null,G,I,w,B),w.onAfterShadow(r,w,M,A,G,I,B)}}}else if(V.visible){const Y=y(w,V,b,S);w.onBeforeShadow(r,w,M,A,G,Y,null),r.renderBufferDirect(A,null,G,Y,w,null),w.onAfterShadow(r,w,M,A,G,Y,null)}}const U=w.children;for(let G=0,V=U.length;G<V;G++)v(U[G],M,A,b,S)}function E(w){w.target.removeEventListener("dispose",E);for(const A in c){const b=c[A],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const O1={[Mh]:wh,[Eh]:Ch,[Th]:Rh,[Do]:Ah,[wh]:Mh,[Ch]:Eh,[Rh]:Th,[Ah]:Do};function F1(r,e){function t(){let W=!1;const Ce=new St;let ue=null;const ge=new St(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!W&&(r.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Re,Qe,ft,Ut){Ut===!0&&(Ae*=ft,Re*=ft,Qe*=ft),Ce.set(Ae,Re,Qe,ft),ge.equals(Ce)===!1&&(r.clearColor(Ae,Re,Qe,ft),ge.copy(Ce))},reset:function(){W=!1,ue=null,ge.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,ue=null,ge=null,Ae=null;return{setReversed:function(Re){if(Ce!==Re){const Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const ft=Ae;Ae=null,this.setClear(ft)}Ce=Re},getReversed:function(){return Ce},setTest:function(Re){Re?R(r.DEPTH_TEST):K(r.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!W&&(r.depthMask(Re),ue=Re)},setFunc:function(Re){if(Ce&&(Re=O1[Re]),ge!==Re){switch(Re){case Mh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Eh:r.depthFunc(r.LESS);break;case Do:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case Ah:r.depthFunc(r.GEQUAL);break;case Ch:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Ae!==Re&&(Ce&&(Re=1-Re),r.clearDepth(Re),Ae=Re)},reset:function(){W=!1,ue=null,ge=null,Ae=null,Ce=!1}}}function i(){let W=!1,Ce=null,ue=null,ge=null,Ae=null,Re=null,Qe=null,ft=null,Ut=null;return{setTest:function(Ie){W||(Ie?R(r.STENCIL_TEST):K(r.STENCIL_TEST))},setMask:function(Ie){Ce!==Ie&&!W&&(r.stencilMask(Ie),Ce=Ie)},setFunc:function(Ie,ke,rt){(ue!==Ie||ge!==ke||Ae!==rt)&&(r.stencilFunc(Ie,ke,rt),ue=Ie,ge=ke,Ae=rt)},setOp:function(Ie,ke,rt){(Re!==Ie||Qe!==ke||ft!==rt)&&(r.stencilOp(Ie,ke,rt),Re=Ie,Qe=ke,ft=rt)},setLocked:function(Ie){W=Ie},setClear:function(Ie){Ut!==Ie&&(r.clearStencil(Ie),Ut=Ie)},reset:function(){W=!1,Ce=null,ue=null,ge=null,Ae=null,Re=null,Qe=null,ft=null,Ut=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,w=null,M=new qe(0,0,0),A=0,b=!1,S=null,F=null,U=null,G=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=q>=2);let re=null,I={};const ce=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),we=new St().fromArray(ce),N=new St().fromArray(ye);function O(W,Ce,ue,ge){const Ae=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ue;Qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Ce+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Re}const L={};L[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(r.DEPTH_TEST),o.setFunc(Do),ne(!1),z(pp),R(r.CULL_FACE),T(Ir);function R(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function K(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function de(W,Ce){return h[W]!==Ce?(r.bindFramebuffer(W,Ce),h[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $(W,Ce){let ue=f,ge=!1;if(W){ue=d.get(Ce),ue===void 0&&(ue=[],d.set(Ce,ue));const Ae=W.textures;if(ue.length!==Ae.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Qe=Ae.length;Re<Qe;Re++)ue[Re]=r.COLOR_ATTACHMENT0+Re;ue.length=Ae.length,ge=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ue)}function me(W){return _!==W?(r.useProgram(W),_=W,!0):!1}const ee={[os]:r.FUNC_ADD,[tx]:r.FUNC_SUBTRACT,[nx]:r.FUNC_REVERSE_SUBTRACT};ee[ix]=r.MIN,ee[rx]=r.MAX;const j={[sx]:r.ZERO,[ox]:r.ONE,[ax]:r.SRC_COLOR,[Sh]:r.SRC_ALPHA,[fx]:r.SRC_ALPHA_SATURATE,[hx]:r.DST_COLOR,[cx]:r.DST_ALPHA,[lx]:r.ONE_MINUS_SRC_COLOR,[bh]:r.ONE_MINUS_SRC_ALPHA,[dx]:r.ONE_MINUS_DST_COLOR,[ux]:r.ONE_MINUS_DST_ALPHA,[px]:r.CONSTANT_COLOR,[mx]:r.ONE_MINUS_CONSTANT_COLOR,[gx]:r.CONSTANT_ALPHA,[_x]:r.ONE_MINUS_CONSTANT_ALPHA};function T(W,Ce,ue,ge,Ae,Re,Qe,ft,Ut,Ie){if(W===Ir){p===!0&&(K(r.BLEND),p=!1);return}if(p===!1&&(R(r.BLEND),p=!0),W!==ex){if(W!==g||Ie!==b){if((m!==os||v!==os)&&(r.blendEquation(r.FUNC_ADD),m=os,v=os),Ie)switch(W){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mp:r.blendFunc(r.ONE,r.ONE);break;case gp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _p:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case gp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _p:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,y=null,E=null,w=null,M.set(0,0,0),A=0,g=W,b=Ie}return}Ae=Ae||Ce,Re=Re||ue,Qe=Qe||ge,(Ce!==m||Ae!==v)&&(r.blendEquationSeparate(ee[Ce],ee[Ae]),m=Ce,v=Ae),(ue!==x||ge!==y||Re!==E||Qe!==w)&&(r.blendFuncSeparate(j[ue],j[ge],j[Re],j[Qe]),x=ue,y=ge,E=Re,w=Qe),(ft.equals(M)===!1||Ut!==A)&&(r.blendColor(ft.r,ft.g,ft.b,Ut),M.copy(ft),A=Ut),g=W,b=!1}function se(W,Ce){W.side===Ii?K(r.CULL_FACE):R(r.CULL_FACE);let ue=W.side===zn;Ce&&(ue=!ue),ne(ue),W.blending===xo&&W.transparent===!1?T(Ir):T(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ge=W.stencilWrite;a.setTest(ge),ge&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?R(r.SAMPLE_ALPHA_TO_COVERAGE):K(r.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){S!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),S=W)}function z(W){W!==Qy?(R(r.CULL_FACE),W!==F&&(W===pp?r.cullFace(r.BACK):W===Jy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):K(r.CULL_FACE),F=W}function H(W){W!==U&&(X&&r.lineWidth(W),U=W)}function k(W,Ce,ue){W?(R(r.POLYGON_OFFSET_FILL),(G!==Ce||V!==ue)&&(r.polygonOffset(Ce,ue),G=Ce,V=ue)):K(r.POLYGON_OFFSET_FILL)}function he(W){W?R(r.SCISSOR_TEST):K(r.SCISSOR_TEST)}function D(W){W===void 0&&(W=r.TEXTURE0+Y-1),re!==W&&(r.activeTexture(W),re=W)}function C(W,Ce,ue){ue===void 0&&(re===null?ue=r.TEXTURE0+Y-1:ue=re);let ge=I[ue];ge===void 0&&(ge={type:void 0,texture:void 0},I[ue]=ge),(ge.type!==W||ge.texture!==Ce)&&(re!==ue&&(r.activeTexture(ue),re=ue),r.bindTexture(W,Ce||L[W]),ge.type=W,ge.texture=Ce)}function te(){const W=I[re];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function le(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(W){we.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function Oe(W){N.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),N.copy(W))}function it(W,Ce){let ue=c.get(Ce);ue===void 0&&(ue=new WeakMap,c.set(Ce,ue));let ge=ue.get(W);ge===void 0&&(ge=r.getUniformBlockIndex(Ce,W.name),ue.set(W,ge))}function Ze(W,Ce){const ge=c.get(Ce).get(W);l.get(Ce)!==ge&&(r.uniformBlockBinding(Ce,ge,W.__bindingPointIndex),l.set(Ce,ge))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},re=null,I={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,w=null,M=new qe(0,0,0),A=0,b=!1,S=null,F=null,U=null,G=null,V=null,we.set(0,0,r.canvas.width,r.canvas.height),N.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:R,disable:K,bindFramebuffer:de,drawBuffers:$,useProgram:me,setBlending:T,setMaterial:se,setFlipSided:ne,setCullFace:z,setLineWidth:H,setPolygonOffset:k,setScissorTest:he,activeTexture:D,bindTexture:C,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:Me,texImage3D:Xe,updateUBOMapping:it,uniformBlockBinding:Ze,texStorage2D:$e,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:be,compressedTexSubImage3D:Te,scissor:ze,viewport:Oe,reset:dt}}function N1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,C){return f?new OffscreenCanvas(D,C):Ga("canvas")}function p(D,C,te){let le=1;const fe=he(D);if((fe.width>te||fe.height>te)&&(le=te/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(le*fe.width),Ee=Math.floor(le*fe.height);h===void 0&&(h=_(pe,Ee));const be=C?_(pe,Ee):h;return be.width=pe,be.height=Ee,be.getContext("2d").drawImage(D,0,0,pe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+Ee+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(D,C,te,le,fe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=C;if(C===r.RED&&(te===r.FLOAT&&(pe=r.R32F),te===r.HALF_FLOAT&&(pe=r.R16F),te===r.UNSIGNED_BYTE&&(pe=r.R8)),C===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.R8UI),te===r.UNSIGNED_SHORT&&(pe=r.R16UI),te===r.UNSIGNED_INT&&(pe=r.R32UI),te===r.BYTE&&(pe=r.R8I),te===r.SHORT&&(pe=r.R16I),te===r.INT&&(pe=r.R32I)),C===r.RG&&(te===r.FLOAT&&(pe=r.RG32F),te===r.HALF_FLOAT&&(pe=r.RG16F),te===r.UNSIGNED_BYTE&&(pe=r.RG8)),C===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RG8UI),te===r.UNSIGNED_SHORT&&(pe=r.RG16UI),te===r.UNSIGNED_INT&&(pe=r.RG32UI),te===r.BYTE&&(pe=r.RG8I),te===r.SHORT&&(pe=r.RG16I),te===r.INT&&(pe=r.RG32I)),C===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),te===r.UNSIGNED_INT&&(pe=r.RGB32UI),te===r.BYTE&&(pe=r.RGB8I),te===r.SHORT&&(pe=r.RGB16I),te===r.INT&&(pe=r.RGB32I)),C===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),te===r.UNSIGNED_INT&&(pe=r.RGBA32UI),te===r.BYTE&&(pe=r.RGBA8I),te===r.SHORT&&(pe=r.RGBA16I),te===r.INT&&(pe=r.RGBA32I)),C===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),C===r.RGBA){const Ee=fe?Tc:mt.getTransfer(le);te===r.FLOAT&&(pe=r.RGBA32F),te===r.HALF_FLOAT&&(pe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(pe=Ee===xt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(D,C){let te;return D?C===null||C===As||C===Fo?te=r.DEPTH24_STENCIL8:C===nr?te=r.DEPTH32F_STENCIL8:C===Va&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===As||C===Fo?te=r.DEPTH_COMPONENT24:C===nr?te=r.DEPTH_COMPONENT32F:C===Va&&(te=r.DEPTH_COMPONENT16),te}function E(D,C){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==wi&&D.minFilter!==Ni?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function w(D){const C=D.target;C.removeEventListener("dispose",w),A(C),C.isVideoTexture&&u.delete(C)}function M(D){const C=D.target;C.removeEventListener("dispose",M),S(C)}function A(D){const C=n.get(D);if(C.__webglInit===void 0)return;const te=D.source,le=d.get(te);if(le){const fe=le[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(D),Object.keys(le).length===0&&d.delete(te)}n.remove(D)}function b(D){const C=n.get(D);r.deleteTexture(C.__webglTexture);const te=D.source,le=d.get(te);delete le[C.__cacheKey],o.memory.textures--}function S(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(C.__webglFramebuffer[le]))for(let fe=0;fe<C.__webglFramebuffer[le].length;fe++)r.deleteFramebuffer(C.__webglFramebuffer[le][fe]);else r.deleteFramebuffer(C.__webglFramebuffer[le]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[le])}else{if(Array.isArray(C.__webglFramebuffer))for(let le=0;le<C.__webglFramebuffer.length;le++)r.deleteFramebuffer(C.__webglFramebuffer[le]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let le=0;le<C.__webglColorRenderbuffer.length;le++)C.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[le]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const te=D.textures;for(let le=0,fe=te.length;le<fe;le++){const pe=n.get(te[le]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(te[le])}n.remove(D)}let F=0;function U(){F=0}function G(){const D=F;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),F+=1,D}function V(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function Y(D,C){const te=n.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(te,D,C);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+C)}function X(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){N(te,D,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+C)}function q(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){N(te,D,C);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+C)}function B(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){O(te,D,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+C)}const re={[Dh]:r.REPEAT,[us]:r.CLAMP_TO_EDGE,[Ih]:r.MIRRORED_REPEAT},I={[wi]:r.NEAREST,[Ax]:r.NEAREST_MIPMAP_NEAREST,[bl]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[cu]:r.LINEAR_MIPMAP_NEAREST,[Rr]:r.LINEAR_MIPMAP_LINEAR},ce={[Lx]:r.NEVER,[Ux]:r.ALWAYS,[Dx]:r.LESS,[I_]:r.LEQUAL,[Ix]:r.EQUAL,[Nx]:r.GEQUAL,[Ox]:r.GREATER,[Fx]:r.NOTEQUAL};function ye(D,C){if(C.type===nr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ni||C.magFilter===cu||C.magFilter===bl||C.magFilter===Rr||C.minFilter===Ni||C.minFilter===cu||C.minFilter===bl||C.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,re[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,re[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,re[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,I[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,I[C.minFilter]),C.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ce[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===wi||C.minFilter!==bl&&C.minFilter!==Rr||C.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function we(D,C){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",w));const le=C.source;let fe=d.get(le);fe===void 0&&(fe={},d.set(le,fe));const pe=V(C);if(pe!==D.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,te=!0),fe[pe].usedTimes++;const Ee=fe[D.__cacheKey];Ee!==void 0&&(fe[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(C)),D.__cacheKey=pe,D.__webglTexture=fe[pe].texture}return te}function N(D,C,te){let le=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(le=r.TEXTURE_3D);const fe=we(D,C),pe=C.source;t.bindTexture(le,D.__webglTexture,r.TEXTURE0+te);const Ee=n.get(pe);if(pe.version!==Ee.__version||fe===!0){t.activeTexture(r.TEXTURE0+te);const be=mt.getPrimaries(mt.workingColorSpace),Te=C.colorSpace===Sr?null:mt.getPrimaries(C.colorSpace),$e=C.colorSpace===Sr||be===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Se=p(C.image,!1,i.maxTextureSize);Se=k(C,Se);const Me=s.convert(C.format,C.colorSpace),Xe=s.convert(C.type);let ze=y(C.internalFormat,Me,Xe,C.colorSpace,C.isVideoTexture);ye(le,C);let Oe;const it=C.mipmaps,Ze=C.isVideoTexture!==!0,dt=Ee.__version===void 0||fe===!0,W=pe.dataReady,Ce=E(C,Se);if(C.isDepthTexture)ze=v(C.format===No,C.type),dt&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,ze,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Me,Xe,null));else if(C.isDataTexture)if(it.length>0){Ze&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Xe,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Me,Xe,Oe.data);C.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,Se.width,Se.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Me,Xe,Se.data)):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Me,Xe,Se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,it[0].width,it[0].height,Se.depth);for(let ue=0,ge=it.length;ue<ge;ue++)if(Oe=it[ue],C.format!==Mi)if(Me!==null)if(Ze){if(W)if(C.layerUpdates.size>0){const Ae=Yp(Oe.width,Oe.height,C.format,C.type);for(const Re of C.layerUpdates){const Qe=Oe.data.subarray(Re*Ae/Oe.data.BYTES_PER_ELEMENT,(Re+1)*Ae/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Re,Oe.width,Oe.height,1,Me,Qe)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Se.depth,Me,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,ze,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Se.depth,Me,Xe,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,ze,Oe.width,Oe.height,Se.depth,0,Me,Xe,Oe.data)}else{Ze&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],C.format!==Mi?Me!==null?Ze?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Xe,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Me,Xe,Oe.data)}else if(C.isDataArrayTexture)if(Ze){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,Se.width,Se.height,Se.depth),W)if(C.layerUpdates.size>0){const ue=Yp(Se.width,Se.height,C.format,C.type);for(const ge of C.layerUpdates){const Ae=Se.data.subarray(ge*ue/Se.data.BYTES_PER_ELEMENT,(ge+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Me,Xe,Ae)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Me,Xe,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Se.width,Se.height,Se.depth,0,Me,Xe,Se.data);else if(C.isData3DTexture)Ze?(dt&&t.texStorage3D(r.TEXTURE_3D,Ce,ze,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Me,Xe,Se.data)):t.texImage3D(r.TEXTURE_3D,0,ze,Se.width,Se.height,Se.depth,0,Me,Xe,Se.data);else if(C.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(r.TEXTURE_2D,Ce,ze,Se.width,Se.height);else{let ue=Se.width,ge=Se.height;for(let Ae=0;Ae<Ce;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,ze,ue,ge,0,Me,Xe,null),ue>>=1,ge>>=1}}else if(it.length>0){if(Ze&&dt){const ue=he(it[0]);t.texStorage2D(r.TEXTURE_2D,Ce,ze,ue.width,ue.height)}for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Me,Xe,Oe):t.texImage2D(r.TEXTURE_2D,ue,ze,Me,Xe,Oe);C.generateMipmaps=!1}else if(Ze){if(dt){const ue=he(Se);t.texStorage2D(r.TEXTURE_2D,Ce,ze,ue.width,ue.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Xe,Se)}else t.texImage2D(r.TEXTURE_2D,0,ze,Me,Xe,Se);g(C)&&m(le),Ee.__version=pe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function O(D,C,te){if(C.image.length!==6)return;const le=we(D,C),fe=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+te);const pe=n.get(fe);if(fe.version!==pe.__version||le===!0){t.activeTexture(r.TEXTURE0+te);const Ee=mt.getPrimaries(mt.workingColorSpace),be=C.colorSpace===Sr?null:mt.getPrimaries(C.colorSpace),Te=C.colorSpace===Sr||Ee===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const $e=C.isCompressedTexture||C.image[0].isCompressedTexture,Se=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let ge=0;ge<6;ge++)!$e&&!Se?Me[ge]=p(C.image[ge],!0,i.maxCubemapSize):Me[ge]=Se?C.image[ge].image:C.image[ge],Me[ge]=k(C,Me[ge]);const Xe=Me[0],ze=s.convert(C.format,C.colorSpace),Oe=s.convert(C.type),it=y(C.internalFormat,ze,Oe,C.colorSpace),Ze=C.isVideoTexture!==!0,dt=pe.__version===void 0||le===!0,W=fe.dataReady;let Ce=E(C,Xe);ye(r.TEXTURE_CUBE_MAP,C);let ue;if($e){Ze&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){ue=Me[ge].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Re=ue[Ae];C.format!==Mi?ze!==null?Ze?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,it,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,0,0,Re.width,Re.height,ze,Oe,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,it,Re.width,Re.height,0,ze,Oe,Re.data)}}}else{if(ue=C.mipmaps,Ze&&dt){ue.length>0&&Ce++;const ge=he(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Me[ge].width,Me[ge].height,ze,Oe,Me[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,Me[ge].width,Me[ge].height,0,ze,Oe,Me[ge].data);for(let Ae=0;Ae<ue.length;Ae++){const Qe=ue[Ae].image[ge].image;Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,0,0,Qe.width,Qe.height,ze,Oe,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,it,Qe.width,Qe.height,0,ze,Oe,Qe.data)}}else{Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Oe,Me[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,ze,Oe,Me[ge]);for(let Ae=0;Ae<ue.length;Ae++){const Re=ue[Ae];Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,0,0,ze,Oe,Re.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,it,ze,Oe,Re.image[ge])}}}g(C)&&m(r.TEXTURE_CUBE_MAP),pe.__version=fe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function L(D,C,te,le,fe,pe){const Ee=s.convert(te.format,te.colorSpace),be=s.convert(te.type),Te=y(te.internalFormat,Ee,be,te.colorSpace),$e=n.get(C),Se=n.get(te);if(Se.__renderTarget=C,!$e.__hasExternalTextures){const Me=Math.max(1,C.width>>pe),Xe=Math.max(1,C.height>>pe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,pe,Te,Me,Xe,C.depth,0,Ee,be,null):t.texImage2D(fe,pe,Te,Me,Xe,0,Ee,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,fe,Se.__webglTexture,0,ne(C)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,fe,Se.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function R(D,C,te){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer){const le=C.depthTexture,fe=le&&le.isDepthTexture?le.type:null,pe=v(C.stencilBuffer,fe),Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=ne(C);z(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,pe,C.width,C.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,pe,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,D)}else{const le=C.textures;for(let fe=0;fe<le.length;fe++){const pe=le[fe],Ee=s.convert(pe.format,pe.colorSpace),be=s.convert(pe.type),Te=y(pe.internalFormat,Ee,be,pe.colorSpace),$e=ne(C);te&&z(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Te,C.width,C.height):z(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Te,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Te,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function K(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(C.depthTexture);le.__renderTarget=C,(!le.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const fe=le.__webglTexture,pe=ne(C);if(C.depthTexture.format===So)z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(C.depthTexture.format===No)z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function de(D){const C=n.get(D),te=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),le){const fe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,le.removeEventListener("dispose",fe)};le.addEventListener("dispose",fe),C.__depthDisposeCallback=fe}C.__boundDepthTexture=le}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");K(C.__webglFramebuffer,D)}else if(te){C.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[le]),C.__webglDepthbuffer[le]===void 0)C.__webglDepthbuffer[le]=r.createRenderbuffer(),R(C.__webglDepthbuffer[le],D,!1);else{const fe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),R(C.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(D,C,te){const le=n.get(D);C!==void 0&&L(le.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&de(D)}function me(D){const C=D.texture,te=n.get(D),le=n.get(C);D.addEventListener("dispose",M);const fe=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ee=fe.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=C.version,o.memory.textures++),pe){te.__webglFramebuffer=[];for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer[be]=[];for(let Te=0;Te<C.mipmaps.length;Te++)te.__webglFramebuffer[be][Te]=r.createFramebuffer()}else te.__webglFramebuffer[be]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer=[];for(let be=0;be<C.mipmaps.length;be++)te.__webglFramebuffer[be]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let be=0,Te=fe.length;be<Te;be++){const $e=n.get(fe[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&z(D)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){const Te=fe[be];te.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[be]);const $e=s.convert(Te.format,Te.colorSpace),Se=s.convert(Te.type),Me=y(Te.internalFormat,$e,Se,Te.colorSpace,D.isXRRenderTarget===!0),Xe=ne(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Me,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,te.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),R(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),ye(r.TEXTURE_CUBE_MAP,C);for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)L(te.__webglFramebuffer[be][Te],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Te);else L(te.__webglFramebuffer[be],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(C)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let be=0,Te=fe.length;be<Te;be++){const $e=fe[be],Se=n.get($e);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ye(r.TEXTURE_2D,$e),L(te.__webglFramebuffer,D,$e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),g($e)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),ye(be,C),C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)L(te.__webglFramebuffer[Te],D,C,r.COLOR_ATTACHMENT0,be,Te);else L(te.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,be,0);g(C)&&m(be),t.unbindTexture()}D.depthBuffer&&de(D)}function ee(D){const C=D.textures;for(let te=0,le=C.length;te<le;te++){const fe=C[te];if(g(fe)){const pe=x(D),Ee=n.get(fe).__webglTexture;t.bindTexture(pe,Ee),m(pe),t.unbindTexture()}}}const j=[],T=[];function se(D){if(D.samples>0){if(z(D)===!1){const C=D.textures,te=D.width,le=D.height;let fe=r.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(D),be=C.length>1;if(be)for(let Te=0;Te<C.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<C.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const $e=n.get(C[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,te,le,0,0,te,le,fe,r.NEAREST),l===!0&&(j.length=0,T.length=0,j.push(r.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(j.push(pe),T.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,T)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Te=0;Te<C.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const $e=n.get(C[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function ne(D){return Math.min(i.maxSamples,D.samples)}function z(D){const C=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function H(D){const C=o.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function k(D,C){const te=D.colorSpace,le=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==Uo&&te!==Sr&&(mt.getTransfer(te)===xt?(le!==Mi||fe!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),C}function he(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=$,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=L,this.useMultisampledRTT=z}function U1(r,e){function t(n,i=Sr){let s;const o=mt.getTransfer(i);if(n===lr)return r.UNSIGNED_BYTE;if(n===rf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===w_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===b_)return r.BYTE;if(n===M_)return r.SHORT;if(n===Va)return r.UNSIGNED_SHORT;if(n===nf)return r.INT;if(n===As)return r.UNSIGNED_INT;if(n===nr)return r.FLOAT;if(n===Bo)return r.HALF_FLOAT;if(n===E_)return r.ALPHA;if(n===T_)return r.RGB;if(n===Mi)return r.RGBA;if(n===A_)return r.LUMINANCE;if(n===C_)return r.LUMINANCE_ALPHA;if(n===So)return r.DEPTH_COMPONENT;if(n===No)return r.DEPTH_STENCIL;if(n===R_)return r.RED;if(n===of)return r.RED_INTEGER;if(n===P_)return r.RG;if(n===af)return r.RG_INTEGER;if(n===lf)return r.RGBA_INTEGER;if(n===sc||n===oc||n===ac||n===lc)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Fh||n===Nh||n===Uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kh||n===Bh||n===zh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kh||n===Bh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===qh||n===$h||n===Yh||n===jh||n===Zh||n===Qh||n===Jh||n===Kh||n===ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ed)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===td||n===nd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===L_||n===id||n===rd||n===sd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===cc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Hn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cr({vertexShader:k1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new nl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H1 extends zo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const p=new z1,g=t.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new ve;let w=null;const M=new Qn;M.viewport=new St;const A=new Qn;A.viewport=new St;const b=[M,A],S=new ob;let F=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let O=y[N];return O===void 0&&(O=new Lu,y[N]=O),O.getTargetRaySpace()},this.getControllerGrip=function(N){let O=y[N];return O===void 0&&(O=new Lu,y[N]=O),O.getGripSpace()},this.getHand=function(N){let O=y[N];return O===void 0&&(O=new Lu,y[N]=O),O.getHandSpace()};function G(N){const O=v.indexOf(N.inputSource);if(O===-1)return;const L=y[O];L!==void 0&&(L.update(N.inputSource,N.frame,c||o),L.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let N=0;N<y.length;N++){const O=v[N];O!==null&&(v[N]=null,y[N].disconnect(O))}F=null,U=null,p.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,x=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,R=null,K=null;g.depth&&(K=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=g.stencil?No:So,R=g.stencil?Fo:As);const de={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Cs(d.textureWidth,d.textureHeight,{format:Mi,type:lr,depthTexture:new q_(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Cs(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(N){for(let O=0;O<N.removed.length;O++){const L=N.removed[O],R=v.indexOf(L);R>=0&&(v[R]=null,y[R].disconnect(L))}for(let O=0;O<N.added.length;O++){const L=N.added[O];let R=v.indexOf(L);if(R===-1){for(let de=0;de<y.length;de++)if(de>=v.length){v.push(L),R=de;break}else if(v[de]===null){v[de]=L,R=de;break}if(R===-1)break}const K=y[R];K&&K.connect(L)}}const X=new J,q=new J;function B(N,O,L){X.setFromMatrixPosition(O.matrixWorld),q.setFromMatrixPosition(L.matrixWorld);const R=X.distanceTo(q),K=O.projectionMatrix.elements,de=L.projectionMatrix.elements,$=K[14]/(K[10]-1),me=K[14]/(K[10]+1),ee=(K[9]+1)/K[5],j=(K[9]-1)/K[5],T=(K[8]-1)/K[0],se=(de[8]+1)/de[0],ne=$*T,z=$*se,H=R/(-T+se),k=H*-T;if(O.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(k),N.translateZ(H),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),K[10]===-1)N.projectionMatrix.copy(O.projectionMatrix),N.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const he=$+H,D=me+H,C=ne-k,te=z+(R-k),le=ee*me/D*he,fe=j*me/D*he;N.projectionMatrix.makePerspective(C,te,le,fe,he,D),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function re(N,O){O===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(O.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let O=N.near,L=N.far;p.texture!==null&&(p.depthNear>0&&(O=p.depthNear),p.depthFar>0&&(L=p.depthFar)),S.near=A.near=M.near=O,S.far=A.far=M.far=L,(F!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),F=S.near,U=S.far),M.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,S.layers.mask=M.layers.mask|A.layers.mask;const R=N.parent,K=S.cameras;re(S,R);for(let de=0;de<K.length;de++)re(K[de],R);K.length===2?B(S,M,A):S.projectionMatrix.copy(M.projectionMatrix),I(N,S,R)};function I(N,O,L){L===null?N.matrix.copy(O.matrixWorld):(N.matrix.copy(L.matrixWorld),N.matrix.invert(),N.matrix.multiply(O.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(O.projectionMatrix),N.projectionMatrixInverse.copy(O.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=od*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(S)};let ce=null;function ye(N,O){if(u=O.getViewerPose(c||o),_=O,u!==null){const L=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let R=!1;L.length!==S.cameras.length&&(S.cameras.length=0,R=!0);for(let $=0;$<L.length;$++){const me=L[$];let ee=null;if(f!==null)ee=f.getViewport(me);else{const T=h.getViewSubImage(d,me);ee=T.viewport,$===0&&(e.setRenderTargetTextures(x,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(x))}let j=b[$];j===void 0&&(j=new Qn,j.layers.enable($),j.viewport=new St,b[$]=j),j.matrix.fromArray(me.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(me.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),$===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),R===!0&&S.cameras.push(j)}const K=i.enabledFeatures;if(K&&K.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const $=h.getDepthInformation(L[0]);$&&$.isValid&&$.texture&&p.init(e,$,i.renderState)}}for(let L=0;L<y.length;L++){const R=v[L],K=y[L];R!==null&&K!==void 0&&K.update(R,O,c||o)}ce&&ce(N,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),_=null}const we=new t0;we.setAnimationLoop(ye),this.setAnimationLoop=function(N){ce=N},this.dispose=function(){}}}const Jr=new Gi,V1=new It;function G1(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,H_(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),p(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===zn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===zn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Jr.copy(v),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),g.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Jr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),E=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,M=v.length;w<M;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=A.length;b<S;b++){const F=A[b];if(f(F,w,b,E)===!0){const U=F.__offset,G=Array.isArray(F.value)?F.value:[F.value];let V=0;for(let Y=0;Y<G.length;Y++){const X=G[Y],q=p(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+V,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,E){const w=x.value,M=y+"_"+v;if(E[M]===void 0)return typeof w=="number"||typeof w=="boolean"?E[M]=w:E[M]=w.clone(),!0;{const A=E[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function _(x){const y=x.uniforms;let v=0;const E=16;for(let M=0,A=y.length;M<A;M++){const b=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,F=b.length;S<F;S++){const U=b[S],G=Array.isArray(U.value)?U.value:[U.value];for(let V=0,Y=G.length;V<Y;V++){const X=G[V],q=p(X),B=v%E,re=B%q.boundary,I=B+re;v+=re,I!==0&&E-I<q.storage&&(v+=E-I),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class o0{constructor(e={}){const{canvas:t=Bx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),p=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Or,this.toneMappingExposure=1;const v=this;let E=!1,w=0,M=0,A=null,b=-1,S=null;const F=new St,U=new St;let G=null;const V=new qe(0);let Y=0,X=t.width,q=t.height,B=1,re=null,I=null;const ce=new St(0,0,X,q),ye=new St(0,0,X,q);let we=!1;const N=new df;let O=!1,L=!1;this.transmissionResolutionScale=1;const R=new It,K=new It,de=new J,$=new St,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function j(){return A===null?B:1}let T=n;function se(P,Q){return t.getContext(P,Q)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Re,!1),T===null){const Q="webgl2";if(T=se(Q,P),T===null)throw se(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ne,z,H,k,he,D,C,te,le,fe,pe,Ee,be,Te,$e,Se,Me,Xe,ze,Oe,it,Ze,dt,W;function Ce(){ne=new tE(T),ne.init(),Ze=new U1(T,ne),z=new Yw(T,ne,e,Ze),H=new F1(T,ne),z.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),k=new rE(T),he=new b1,D=new N1(T,ne,H,he,z,Ze,k),C=new Zw(v),te=new eE(v),le=new ub(T),dt=new qw(T,le),fe=new nE(T,le,k,dt),pe=new oE(T,fe,le,k),ze=new sE(T,z,D),Se=new jw(he),Ee=new S1(v,C,te,ne,z,dt,Se),be=new G1(v,he),Te=new w1,$e=new P1(ne),Xe=new Xw(v,C,te,H,pe,f,l),Me=new I1(v,pe,z),W=new W1(T,k,z,H),Oe=new $w(T,ne,k),it=new iE(T,ne,k),k.programs=Ee.programs,v.capabilities=z,v.extensions=ne,v.properties=he,v.renderLists=Te,v.shadowMap=Me,v.state=H,v.info=k}Ce();const ue=new H1(v,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const P=ne.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ne.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(X,q,!1))},this.getSize=function(P){return P.set(X,q)},this.setSize=function(P,Q,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,q=Q,t.width=Math.floor(P*B),t.height=Math.floor(Q*B),oe===!0&&(t.style.width=P+"px",t.style.height=Q+"px"),this.setViewport(0,0,P,Q)},this.getDrawingBufferSize=function(P){return P.set(X*B,q*B).floor()},this.setDrawingBufferSize=function(P,Q,oe){X=P,q=Q,B=oe,t.width=Math.floor(P*oe),t.height=Math.floor(Q*oe),this.setViewport(0,0,P,Q)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(ce)},this.setViewport=function(P,Q,oe,ie){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,Q,oe,ie),H.viewport(F.copy(ce).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,Q,oe,ie){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,Q,oe,ie),H.scissor(U.copy(ye).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){H.setScissorTest(we=P)},this.setOpaqueSort=function(P){re=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(P=!0,Q=!0,oe=!0){let ie=0;if(P){let Z=!1;if(A!==null){const xe=A.texture.format;Z=xe===lf||xe===af||xe===of}if(Z){const xe=A.texture.type,Le=xe===lr||xe===As||xe===Va||xe===Fo||xe===rf||xe===sf,Ne=Xe.getClearColor(),Fe=Xe.getClearAlpha(),Ge=Ne.r,je=Ne.g,He=Ne.b;Le?(_[0]=Ge,_[1]=je,_[2]=He,_[3]=Fe,T.clearBufferuiv(T.COLOR,0,_)):(p[0]=Ge,p[1]=je,p[2]=He,p[3]=Fe,T.clearBufferiv(T.COLOR,0,p))}else ie|=T.COLOR_BUFFER_BIT}Q&&(ie|=T.DEPTH_BUFFER_BIT),oe&&(ie|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Xe.dispose(),Te.dispose(),$e.dispose(),he.dispose(),C.dispose(),te.dispose(),pe.dispose(),dt.dispose(),W.dispose(),Ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Pe),ue.removeEventListener("sessionend",et),Be.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=k.autoReset,Q=Me.enabled,oe=Me.autoUpdate,ie=Me.needsUpdate,Z=Me.type;Ce(),k.autoReset=P,Me.enabled=Q,Me.autoUpdate=oe,Me.needsUpdate=ie,Me.type=Z}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){const Q=P.target;Q.removeEventListener("dispose",Qe),ft(Q)}function ft(P){Ut(P),he.remove(P)}function Ut(P){const Q=he.get(P).programs;Q!==void 0&&(Q.forEach(function(oe){Ee.releaseProgram(oe)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,Q,oe,ie,Z,xe){Q===null&&(Q=me);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Gn(P,Q,oe,ie,Z);H.setMaterial(ie,Le);let Fe=oe.index,Ge=1;if(ie.wireframe===!0){if(Fe=fe.getWireframeAttribute(oe),Fe===void 0)return;Ge=2}const je=oe.drawRange,He=oe.attributes.position;let nt=je.start*Ge,_t=(je.start+je.count)*Ge;xe!==null&&(nt=Math.max(nt,xe.start*Ge),_t=Math.min(_t,(xe.start+xe.count)*Ge)),Fe!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Fe.count)):He!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,He.count));const Gt=_t-nt;if(Gt<0||Gt===1/0)return;dt.setup(Z,ie,Ne,oe,Fe);let kt,pt=Oe;if(Fe!==null&&(kt=le.get(Fe),pt=it,pt.setIndex(kt)),Z.isMesh)ie.wireframe===!0?(H.setLineWidth(ie.wireframeLinewidth*j()),pt.setMode(T.LINES)):pt.setMode(T.TRIANGLES);else if(Z.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),H.setLineWidth(Ye*j()),Z.isLineSegments?pt.setMode(T.LINES):Z.isLineLoop?pt.setMode(T.LINE_LOOP):pt.setMode(T.LINE_STRIP)}else Z.isPoints?pt.setMode(T.POINTS):Z.isSprite&&pt.setMode(T.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,an=Z._multiDrawCounts,vt=Z._multiDrawCount,_i=Fe?le.get(Fe).bytesPerElement:1,Fs=he.get(ie).currentProgram.getUniforms();for(let Wn=0;Wn<vt;Wn++)Fs.setValue(T,"_gl_DrawID",Wn),pt.render(Ye[Wn]/_i,an[Wn])}else if(Z.isInstancedMesh)pt.renderInstances(nt,Gt,Z.count);else if(oe.isInstancedBufferGeometry){const Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,an=Math.min(oe.instanceCount,Ye);pt.renderInstances(nt,Gt,an)}else pt.render(nt,Gt)};function Ie(P,Q,oe){P.transparent===!0&&P.side===Ii&&P.forceSinglePass===!1?(P.side=zn,P.needsUpdate=!0,bt(P,Q,oe),P.side=kr,P.needsUpdate=!0,bt(P,Q,oe),P.side=Ii):bt(P,Q,oe)}this.compile=function(P,Q,oe=null){oe===null&&(oe=P),m=$e.get(oe),m.init(Q),y.push(m),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),P!==oe&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const ie=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const xe=Z.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const Ne=xe[Le];Ie(Ne,oe,Z),ie.add(Ne)}else Ie(xe,oe,Z),ie.add(xe)}),m=y.pop(),ie},this.compileAsync=function(P,Q,oe=null){const ie=this.compile(P,Q,oe);return new Promise(Z=>{function xe(){if(ie.forEach(function(Le){he.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){Z(P);return}setTimeout(xe,10)}ne.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ke=null;function rt(P){ke&&ke(P)}function Pe(){Be.stop()}function et(){Be.start()}const Be=new t0;Be.setAnimationLoop(rt),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(P){ke=P,ue.setAnimationLoop(P),P===null?Be.stop():Be.start()},ue.addEventListener("sessionstart",Pe),ue.addEventListener("sessionend",et),this.render=function(P,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Q),Q=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,Q,A),m=$e.get(P,y.length),m.init(Q),y.push(m),K.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),N.setFromProjectionMatrix(K),L=this.localClippingEnabled,O=Se.init(this.clippingPlanes,L),g=Te.get(P,x.length),g.init(),x.push(g),ue.enabled===!0&&ue.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Je(xe,Q,-1/0,v.sortObjects)}Je(P,Q,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(re,I),ee=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ee&&Xe.addToRenderList(g,P),this.info.render.frame++,O===!0&&Se.beginShadows();const oe=m.state.shadowsArray;Me.render(oe,P,Q),O===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=g.opaque,Z=g.transmissive;if(m.setupLights(),Q.isArrayCamera){const xe=Q.cameras;if(Z.length>0)for(let Le=0,Ne=xe.length;Le<Ne;Le++){const Fe=xe[Le];at(ie,Z,P,Fe)}ee&&Xe.render(P);for(let Le=0,Ne=xe.length;Le<Ne;Le++){const Fe=xe[Le];zt(g,P,Fe,Fe.viewport)}}else Z.length>0&&at(ie,Z,P,Q),ee&&Xe.render(P),zt(g,P,Q);A!==null&&M===0&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(v,P,Q),dt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],O===!0&&Se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Je(P,Q,oe,ie){if(P.visible===!1)return;if(P.layers.test(Q.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Q);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||N.intersectsSprite(P)){ie&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Le=pe.update(P),Ne=P.material;Ne.visible&&g.push(P,Le,Ne,oe,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||N.intersectsObject(P))){const Le=pe.update(P),Ne=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$.copy(Le.boundingSphere.center)),$.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Ne)){const Fe=Le.groups;for(let Ge=0,je=Fe.length;Ge<je;Ge++){const He=Fe[Ge],nt=Ne[He.materialIndex];nt&&nt.visible&&g.push(P,Le,nt,oe,$.z,He)}}else Ne.visible&&g.push(P,Le,Ne,oe,$.z,null)}}const xe=P.children;for(let Le=0,Ne=xe.length;Le<Ne;Le++)Je(xe[Le],Q,oe,ie)}function zt(P,Q,oe,ie){const Z=P.opaque,xe=P.transmissive,Le=P.transparent;m.setupLightsView(oe),O===!0&&Se.setGlobalState(v.clippingPlanes,oe),ie&&H.viewport(F.copy(ie)),Z.length>0&&Tt(Z,Q,oe),xe.length>0&&Tt(xe,Q,oe),Le.length>0&&Tt(Le,Q,oe),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function at(P,Q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new Cs(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Bo:lr,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const xe=m.state.transmissionRenderTarget[ie.id],Le=ie.viewport||F;xe.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Xe.render(oe);const Fe=v.toneMapping;v.toneMapping=Or;const Ge=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),O===!0&&Se.setGlobalState(v.clippingPlanes,ie),Tt(P,oe,ie),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,nt=Q.length;He<nt;He++){const _t=Q[He],Gt=_t.object,kt=_t.geometry,pt=_t.material,Ye=_t.group;if(pt.side===Ii&&Gt.layers.test(ie.layers)){const an=pt.side;pt.side=zn,pt.needsUpdate=!0,Yt(Gt,oe,ie,kt,pt,Ye),pt.side=an,pt.needsUpdate=!0,je=!0}}je===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ne),v.setClearColor(V,Y),Ge!==void 0&&(ie.viewport=Ge),v.toneMapping=Fe}function Tt(P,Q,oe){const ie=Q.isScene===!0?Q.overrideMaterial:null;for(let Z=0,xe=P.length;Z<xe;Z++){const Le=P[Z],Ne=Le.object,Fe=Le.geometry,Ge=ie===null?Le.material:ie,je=Le.group;Ne.layers.test(oe.layers)&&Yt(Ne,Q,oe,Fe,Ge,je)}}function Yt(P,Q,oe,ie,Z,xe){P.onBeforeRender(v,Q,oe,ie,Z,xe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(v,Q,oe,ie,P,xe),Z.transparent===!0&&Z.side===Ii&&Z.forceSinglePass===!1?(Z.side=zn,Z.needsUpdate=!0,v.renderBufferDirect(oe,Q,ie,Z,P,xe),Z.side=kr,Z.needsUpdate=!0,v.renderBufferDirect(oe,Q,ie,Z,P,xe),Z.side=Ii):v.renderBufferDirect(oe,Q,ie,Z,P,xe),P.onAfterRender(v,Q,oe,ie,Z,xe)}function bt(P,Q,oe){Q.isScene!==!0&&(Q=me);const ie=he.get(P),Z=m.state.lights,xe=m.state.shadowsArray,Le=Z.state.version,Ne=Ee.getParameters(P,Z.state,xe,Q,oe),Fe=Ee.getProgramCacheKey(Ne);let Ge=ie.programs;ie.environment=P.isMeshStandardMaterial?Q.environment:null,ie.fog=Q.fog,ie.envMap=(P.isMeshStandardMaterial?te:C).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?Q.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",Qe),Ge=new Map,ie.programs=Ge);let je=Ge.get(Fe);if(je!==void 0){if(ie.currentProgram===je&&ie.lightsStateVersion===Le)return gt(P,Ne),je}else Ne.uniforms=Ee.getUniforms(P),P.onBeforeCompile(Ne,v),je=Ee.acquireProgram(Ne,Fe),Ge.set(Fe,je),ie.uniforms=Ne.uniforms;const He=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(He.clippingPlanes=Se.uniform),gt(P,Ne),ie.needsLights=yn(P),ie.lightsStateVersion=Le,ie.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix),ie.currentProgram=je,ie.uniformsList=null,je}function Mt(P){if(P.uniformsList===null){const Q=P.currentProgram.getUniforms();P.uniformsList=uc.seqWithValue(Q.seq,P.uniforms)}return P.uniformsList}function gt(P,Q){const oe=he.get(P);oe.outputColorSpace=Q.outputColorSpace,oe.batching=Q.batching,oe.batchingColor=Q.batchingColor,oe.instancing=Q.instancing,oe.instancingColor=Q.instancingColor,oe.instancingMorph=Q.instancingMorph,oe.skinning=Q.skinning,oe.morphTargets=Q.morphTargets,oe.morphNormals=Q.morphNormals,oe.morphColors=Q.morphColors,oe.morphTargetsCount=Q.morphTargetsCount,oe.numClippingPlanes=Q.numClippingPlanes,oe.numIntersection=Q.numClipIntersection,oe.vertexAlphas=Q.vertexAlphas,oe.vertexTangents=Q.vertexTangents,oe.toneMapping=Q.toneMapping}function Gn(P,Q,oe,ie,Z){Q.isScene!==!0&&(Q=me),D.resetTextureUnits();const xe=Q.fog,Le=ie.isMeshStandardMaterial?Q.environment:null,Ne=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Uo,Fe=(ie.isMeshStandardMaterial?te:C).get(ie.envMap||Le),Ge=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,je=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!oe.morphAttributes.position,nt=!!oe.morphAttributes.normal,_t=!!oe.morphAttributes.color;let Gt=Or;ie.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Gt=v.toneMapping);const kt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pt=kt!==void 0?kt.length:0,Ye=he.get(ie),an=m.state.lights;if(O===!0&&(L===!0||P!==S)){const xn=P===S&&ie.id===b;Se.setState(ie,P,xn)}let vt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==an.state.version||Ye.outputColorSpace!==Ne||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Fe||ie.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==je||Ye.morphTargets!==He||Ye.morphNormals!==nt||Ye.morphColors!==_t||Ye.toneMapping!==Gt||Ye.morphTargetsCount!==pt)&&(vt=!0):(vt=!0,Ye.__version=ie.version);let _i=Ye.currentProgram;vt===!0&&(_i=bt(ie,Q,Z));let Fs=!1,Wn=!1,Wo=!1;const Pt=_i.getUniforms(),si=Ye.uniforms;if(H.useProgram(_i.program)&&(Fs=!0,Wn=!0,Wo=!0),ie.id!==b&&(b=ie.id,Wn=!0),Fs||S!==P){H.buffers.depth.getReversed()?(R.copy(P.projectionMatrix),Hx(R),Vx(R),Pt.setValue(T,"projectionMatrix",R)):Pt.setValue(T,"projectionMatrix",P.projectionMatrix),Pt.setValue(T,"viewMatrix",P.matrixWorldInverse);const Pn=Pt.map.cameraPosition;Pn!==void 0&&Pn.setValue(T,de.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Pt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Wn=!0,Wo=!0)}if(Z.isSkinnedMesh){Pt.setOptional(T,Z,"bindMatrix"),Pt.setOptional(T,Z,"bindMatrixInverse");const xn=Z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Pt.setValue(T,"boneTexture",xn.boneTexture,D))}Z.isBatchedMesh&&(Pt.setOptional(T,Z,"batchingTexture"),Pt.setValue(T,"batchingTexture",Z._matricesTexture,D),Pt.setOptional(T,Z,"batchingIdTexture"),Pt.setValue(T,"batchingIdTexture",Z._indirectTexture,D),Pt.setOptional(T,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(T,"batchingColorTexture",Z._colorsTexture,D));const oi=oe.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&ze.update(Z,oe,_i),(Wn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Pt.setValue(T,"receiveShadow",Z.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(si.envMap.value=Fe,si.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Q.environment!==null&&(si.envMapIntensity.value=Q.environmentIntensity),Wn&&(Pt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Rt(si,Wo),xe&&ie.fog===!0&&be.refreshFogUniforms(si,xe),be.refreshMaterialUniforms(si,ie,B,q,m.state.transmissionRenderTarget[P.id]),uc.upload(T,Mt(Ye),si,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(uc.upload(T,Mt(Ye),si,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(T,"center",Z.center),Pt.setValue(T,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(T,"normalMatrix",Z.normalMatrix),Pt.setValue(T,"modelMatrix",Z.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const xn=ie.uniformsGroups;for(let Pn=0,$c=xn.length;Pn<$c;Pn++){const Gr=xn[Pn];W.update(Gr,_i),W.bind(Gr,_i)}}return _i}function Rt(P,Q){P.ambientLightColor.needsUpdate=Q,P.lightProbe.needsUpdate=Q,P.directionalLights.needsUpdate=Q,P.directionalLightShadows.needsUpdate=Q,P.pointLights.needsUpdate=Q,P.pointLightShadows.needsUpdate=Q,P.spotLights.needsUpdate=Q,P.spotLightShadows.needsUpdate=Q,P.rectAreaLights.needsUpdate=Q,P.hemisphereLights.needsUpdate=Q}function yn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,Q,oe){he.get(P.texture).__webglTexture=Q,he.get(P.depthTexture).__webglTexture=oe;const ie=he.get(P);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=oe===void 0,ie.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Q){const oe=he.get(P);oe.__webglFramebuffer=Q,oe.__useDefaultFramebuffer=Q===void 0};const ri=T.createFramebuffer();this.setRenderTarget=function(P,Q=0,oe=0){A=P,w=Q,M=oe;let ie=!0,Z=null,xe=!1,Le=!1;if(P){const Fe=he.get(P);if(Fe.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(T.FRAMEBUFFER,null),ie=!1;else if(Fe.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Fe.__hasExternalTextures)D.rebindTextures(P,he.get(P.texture).__webglTexture,he.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const He=P.depthTexture;if(Fe.__boundDepthTexture!==He){if(He!==null&&he.has(He)&&(P.width!==He.image.width||P.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const je=he.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[Q])?Z=je[Q][oe]:Z=je[Q],xe=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?Z=he.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?Z=je[oe]:Z=je,F.copy(P.viewport),U.copy(P.scissor),G=P.scissorTest}else F.copy(ce).multiplyScalar(B).floor(),U.copy(ye).multiplyScalar(B).floor(),G=we;if(oe!==0&&(Z=ri),H.bindFramebuffer(T.FRAMEBUFFER,Z)&&ie&&H.drawBuffers(P,Z),H.viewport(F),H.scissor(U),H.setScissorTest(G),xe){const Fe=he.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,oe)}else if(Le){const Fe=he.get(P.texture),Ge=Q;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Fe.__webglTexture,oe,Ge)}else if(P!==null&&oe!==0){const Fe=he.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Fe.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(P,Q,oe,ie,Z,xe,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){H.bindFramebuffer(T.FRAMEBUFFER,Ne);try{const Fe=P.texture,Ge=Fe.format,je=Fe.type;if(!z.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=P.width-ie&&oe>=0&&oe<=P.height-Z&&T.readPixels(Q,oe,ie,Z,Ze.convert(Ge),Ze.convert(je),xe)}finally{const Fe=A!==null?he.get(A).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(P,Q,oe,ie,Z,xe,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){const Fe=P.texture,Ge=Fe.format,je=Fe.type;if(!z.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=P.width-ie&&oe>=0&&oe<=P.height-Z){H.bindFramebuffer(T.FRAMEBUFFER,Ne);const He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,xe.byteLength,T.STREAM_READ),T.readPixels(Q,oe,ie,Z,Ze.convert(Ge),Ze.convert(je),0);const nt=A!==null?he.get(A).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,nt);const _t=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await zx(T,_t,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xe),T.deleteBuffer(He),T.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Q=null,oe=0){P.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,P=arguments[1]);const ie=Math.pow(2,-oe),Z=Math.floor(P.image.width*ie),xe=Math.floor(P.image.height*ie),Le=Q!==null?Q.x:0,Ne=Q!==null?Q.y:0;D.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,oe,0,0,Le,Ne,Z,xe),H.unbindTexture()};const jt=T.createFramebuffer(),Zt=T.createFramebuffer();this.copyTextureToTexture=function(P,Q,oe=null,ie=null,Z=0,xe=null){P.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,P=arguments[1],Q=arguments[2],xe=arguments[3]||0,oe=null),xe===null&&(Z!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Z,Z=0):xe=0);let Le,Ne,Fe,Ge,je,He,nt,_t,Gt;const kt=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,Fe=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,je=oe.min.y,He=oe.isBox3?oe.min.z:0;else{const oi=Math.pow(2,-Z);Le=Math.floor(kt.width*oi),Ne=Math.floor(kt.height*oi),P.isDataArrayTexture?Fe=kt.depth:P.isData3DTexture?Fe=Math.floor(kt.depth*oi):Fe=1,Ge=0,je=0,He=0}ie!==null?(nt=ie.x,_t=ie.y,Gt=ie.z):(nt=0,_t=0,Gt=0);const pt=Ze.convert(Q.format),Ye=Ze.convert(Q.type);let an;Q.isData3DTexture?(D.setTexture3D(Q,0),an=T.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(D.setTexture2DArray(Q,0),an=T.TEXTURE_2D_ARRAY):(D.setTexture2D(Q,0),an=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,Q.unpackAlignment);const vt=T.getParameter(T.UNPACK_ROW_LENGTH),_i=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Fs=T.getParameter(T.UNPACK_SKIP_PIXELS),Wn=T.getParameter(T.UNPACK_SKIP_ROWS),Wo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,kt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,kt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const Pt=P.isDataArrayTexture||P.isData3DTexture,si=Q.isDataArrayTexture||Q.isData3DTexture;if(P.isDepthTexture){const oi=he.get(P),xn=he.get(Q),Pn=he.get(oi.__renderTarget),$c=he.get(xn.__renderTarget);H.bindFramebuffer(T.READ_FRAMEBUFFER,Pn.__webglFramebuffer),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let Gr=0;Gr<Fe;Gr++)Pt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.get(P).__webglTexture,Z,He+Gr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.get(Q).__webglTexture,xe,Gt+Gr)),T.blitFramebuffer(Ge,je,Le,Ne,nt,_t,Le,Ne,T.DEPTH_BUFFER_BIT,T.NEAREST);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||he.has(P)){const oi=he.get(P),xn=he.get(Q);H.bindFramebuffer(T.READ_FRAMEBUFFER,jt),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,Zt);for(let Pn=0;Pn<Fe;Pn++)Pt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,oi.__webglTexture,Z,He+Pn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,oi.__webglTexture,Z),si?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xn.__webglTexture,xe,Gt+Pn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xn.__webglTexture,xe),Z!==0?T.blitFramebuffer(Ge,je,Le,Ne,nt,_t,Le,Ne,T.COLOR_BUFFER_BIT,T.NEAREST):si?T.copyTexSubImage3D(an,xe,nt,_t,Gt+Pn,Ge,je,Le,Ne):T.copyTexSubImage2D(an,xe,nt,_t,Ge,je,Le,Ne);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else si?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(an,xe,nt,_t,Gt,Le,Ne,Fe,pt,Ye,kt.data):Q.isCompressedArrayTexture?T.compressedTexSubImage3D(an,xe,nt,_t,Gt,Le,Ne,Fe,pt,kt.data):T.texSubImage3D(an,xe,nt,_t,Gt,Le,Ne,Fe,pt,Ye,kt):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ne,pt,Ye,kt.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,xe,nt,_t,kt.width,kt.height,pt,kt.data):T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ne,pt,Ye,kt);T.pixelStorei(T.UNPACK_ROW_LENGTH,vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,_i),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Fs),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Wo),xe===0&&Q.generateMipmaps&&T.generateMipmap(an),H.unbindTexture()},this.copyTextureToTexture3D=function(P,Q,oe=null,ie=null,Z=0){return P.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ie=arguments[1]||null,P=arguments[2],Q=arguments[3],Z=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Q,oe,ie,Z)},this.initRenderTarget=function(P){he.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),H.unbindTexture()},this.resetState=function(){w=0,M=0,A=null,H.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}var X1=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,q1=`vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float fbm(vec2 st, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        
        value += amplitude * snoise(st * frequency);
        frequency *= lacunarity;
        amplitude *= gain;
    }
    
    return value;
}

vec2 domainWarp(vec2 p, float time, float warpAmount, int warpOctaves) {
    
    
    float t1 = time * 0.05;
    float t2 = time * 0.03;
    
    vec2 q = vec2(
        sin(p.x * 0.5 + t1) + sin(p.y * 0.3 + t1 * 1.3),
        sin(p.x * 0.3 + t2) + sin(p.y * 0.5 + t2 * 0.7)
    ) * 0.5;
    
    return p + warpAmount * q;
}

float ridge(float n) {
    return 1.0 - abs(n);
}

float ridgedFbm(vec2 st, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        
        float n = ridge(snoise(st * frequency));
        value += amplitude * n;
        frequency *= lacunarity;
        amplitude *= gain;
    }
    
    return value;
}

float detailNoise(vec2 st, float time, float scale, float speed) {
    vec2 offset = vec2(time * speed * 0.05, time * speed * 0.03);
    return snoise((st + offset) * scale) * 0.5 + 0.5;
}

float fastHash(vec2 p) {
    
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 hash2(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p.yx + 19.19);
    return fract(vec2(p.x * p.y, p.x + p.y));
}

float filmGrain(vec2 st, float time, float size, float speed, float grainAspectRatio, float complexity, float frameHold) {
    
    float t = time * speed / max(1.0, frameHold);
    float frame = floor(t);
    float interp = fract(t);
    
    
    vec2 pos = st * size;
    pos.x *= grainAspectRatio;
    vec2 cell = floor(pos);
    vec2 cellFract = fract(pos);
    
    
    vec2 cellHash = hash2(cell);
    vec2 cellOffset = (cellHash - 0.5) * 0.3;
    vec2 adjustedCellFract = fract(cellFract + cellOffset);
    
    
    vec2 seed1 = cell + frame * 0.1 + cellHash.x * 10.0;
    vec2 seed2 = cell + (frame + 1.0) * 0.1 + cellHash.y * 10.0;
    
    
    float grain1 = fastHash(seed1);
    float grain2 = fastHash(seed2);
    
    
    
    float microGrain1 = fastHash(seed1 * 2.7 + adjustedCellFract * 3.1);
    float microGrain2 = fastHash(seed2 * 2.7 + adjustedCellFract * 3.1);
    
    
    float complexityBlend = min(complexity * 0.5, 0.5);
    grain1 = mix(grain1, (grain1 + microGrain1) * 0.5, complexityBlend);
    grain2 = mix(grain2, (grain2 + microGrain2) * 0.5, complexityBlend);
    
    
    float sparkle = fract(dot(adjustedCellFract, vec2(12.9898, 78.233)) * 43758.5453);
    sparkle = (sparkle - 0.5) * complexity * 0.2;
    grain1 += sparkle;
    grain2 += sparkle * 0.8;
    
    
    grain1 = clamp(grain1, 0.0, 1.0);
    grain2 = clamp(grain2, 0.0, 1.0);
    
    
    return mix(grain1, grain2, interp);
}

vec3 applyGrain(vec3 base, float grain, float intensity, int mode) {
    
    vec3 overlay = base * (1.0 + (grain - 0.5) * intensity * 0.5);
    vec3 multiply = base * mix(1.0, grain, intensity);
    vec3 add = base + (grain - 0.5) * intensity;
    vec3 screen = 1.0 - (1.0 - base) * (1.0 - grain * intensity);
    
    
    
    float isMode0 = 1.0 - min(float(mode), 1.0);  
    float isMode1 = step(0.5, float(mode)) * step(float(mode), 1.5);  
    float isMode2 = step(1.5, float(mode)) * step(float(mode), 2.5);  
    float isMode3 = step(2.5, float(mode));  
    
    return overlay * isMode0 + multiply * isMode1 + add * isMode2 + screen * isMode3;
}

uniform float u_time;
uniform float u_timeAbsolute;
uniform vec2 u_resolution;

uniform vec3 u_color1;          
uniform vec3 u_color2;          
uniform vec3 u_color3;          
uniform vec3 u_baseColor;       

uniform float u_zoom;           
uniform float u_noiseScale;     
uniform int u_octaves;          
uniform float u_lacunarity;     
uniform float u_gain;           
uniform float u_turbulence;     
uniform int u_warpOctaves;      
uniform float u_ridgeAmount;    
uniform float u_detailScale;    
uniform float u_detailAmount;   

uniform float u_speed;          
uniform float u_directionX;     
uniform float u_directionY;     

uniform float u_modulationSpeed;    
uniform float u_modulationIntensity; 
uniform float u_turbulenceModulation; 
uniform float u_zoomModulation;     
uniform float u_colorModulation;    
uniform float u_rotationModulation; 
uniform float u_noiseScaleModulation; 
uniform float u_gainModulation;       
uniform float u_colorSpreadModulation; 
uniform float u_colorShiftModulation;  

uniform float u_noiseScaleEffective;
uniform float u_gainEffective;
uniform float u_zoomEffective;
uniform float u_turbulenceEffective;
uniform vec2 u_directionEffective;
uniform float u_colorMix1Effective;
uniform float u_colorMix2Effective;
uniform float u_colorSpreadEffective;
uniform float u_colorShiftOffset;

uniform float u_circularMotionIntensity;  
uniform float u_evolutionSpeed;            
uniform float u_layerBlend;                
uniform float u_colorEvolutionSpeed;       

uniform float u_rippleFrequency;           
uniform float u_rippleStrength;            
uniform float u_quantizeStep;              
uniform float u_mirrorX;                   
uniform float u_mirrorY;                   

uniform float u_softness;       
uniform float u_contrast;       
uniform float u_brightness;     
uniform float u_exposure;       
uniform float u_blackLevel;     

uniform float u_colorMix1;      
uniform float u_colorMix2;      
uniform float u_colorSpread;    
uniform float u_colorSeparation; 
uniform float u_colorBands;     

uniform float u_grainIntensity; 
uniform float u_grainSpeed;     
uniform float u_grainSize;      
uniform int u_grainBlendMode;   
uniform float u_grainAspect;    
uniform float u_grainComplexity; 
uniform float u_grainFrameHold;  

varying vec2 vUv;

void main() {
    
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;
    
    
    st *= u_zoomEffective;
    
    
    if (u_mirrorX > 0.5) st.x = abs(st.x);
    if (u_mirrorY > 0.5) st.y = abs(st.y);
    
    
    if (u_rippleStrength > 0.001) {
        float rippleSpeed = u_time * 2.0;
        st.x += sin(st.y * u_rippleFrequency + rippleSpeed) * u_rippleStrength;
        st.y += cos(st.x * u_rippleFrequency + rippleSpeed * 0.8) * u_rippleStrength;
    }
    
    
    
    float timeFlow = u_time;
    vec2 circularMotion = vec2(
        sin(timeFlow * 0.3) * 0.5,
        cos(timeFlow * 0.23) * 0.5
    ) * u_circularMotionIntensity; 
    vec2 movement = u_directionEffective * timeFlow + circularMotion;
    st += movement;
    
    
    
    float evolution = timeFlow * u_evolutionSpeed; 
    vec2 evolvedSt = st + vec2(
        sin(evolution * 0.7) * 0.3,
        cos(evolution * 0.5) * 0.3
    );
    
    
    vec2 warpedPos = evolvedSt * u_noiseScaleEffective;
    if(u_turbulenceEffective > 0.01) {
        warpedPos = domainWarp(warpedPos, u_time * u_speed, u_turbulenceEffective, u_warpOctaves);
    }
    
    
    
    float noisePrimary = fbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
    
    
    float noiseSecondary = fbm(warpedPos * 1.7 + evolution * 0.5, max(1, u_octaves - 1), u_lacunarity, u_gainEffective);
    
    
    float noise = mix(noisePrimary, noiseSecondary, u_layerBlend);
    
    
    if(u_ridgeAmount > 0.01) {
        float ridgeNoise = ridgedFbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
        noise = mix(noise, ridgeNoise, u_ridgeAmount);
    }
    
    
    
    if(u_detailAmount > 0.01) {
        float detail = detailNoise(st, u_time, u_detailScale, 1.0);
        noise += detail * u_detailAmount;
    }
    
    
    noise = noise * 0.5 + 0.5;

    
    if (u_quantizeStep > 0.01) {
        float steps = mix(50.0, 2.0, u_quantizeStep); 
        noise = floor(noise * steps) / steps;
    }
    
    
    if (abs(u_contrast - 1.0) > 0.01) {
        noise = pow(noise, 1.0 / u_contrast);
    }
    
    
    noise = smoothstep(0.0 - u_softness, 1.0 + u_softness, noise);
    
    
    
    float colorNoise = noise;
    
    
    float colorEvolution = fract(evolution * u_colorEvolutionSpeed);
    colorNoise = mix(colorNoise, fract(colorNoise + colorEvolution * 0.2), 0.4);
    
    if (abs(u_colorSpreadEffective - 0.5) > 0.01) {
        colorNoise = pow(colorNoise, 1.0 / (1.0 + u_colorSpreadEffective));
    }
    
    
    colorNoise = fract(colorNoise + u_colorShiftOffset);
    
    
    
    vec3 baseGradient;
    float t1 = smoothstep(0.0, 0.5, colorNoise);
    float t2 = smoothstep(0.5, 1.0, colorNoise);
    
    
    vec3 color1to2 = mix(u_color1, u_color2, t1);
    vec3 color2to3 = mix(u_color2, u_color3, t2);
    baseGradient = mix(color1to2, color2to3, smoothstep(0.3, 0.7, colorNoise));
    vec3 colorBlend = mix(
        mix(u_color1, u_color2, u_colorMix1Effective),
        u_color3,
        u_colorMix2Effective
    );
    baseGradient = mix(baseGradient, colorBlend, 0.5);
    
    
    vec3 separatedColors = baseGradient;
    if (u_colorSeparation > 0.01) {
        
        
        float sepPower = mix(1.0, 3.5, u_colorSeparation);
        
        
        float zone1 = smoothstep(0.0, 0.35, colorNoise) * (1.0 - smoothstep(0.2, 0.45, colorNoise));
        float zone2 = smoothstep(0.3, 0.5, colorNoise) * (1.0 - smoothstep(0.5, 0.7, colorNoise));
        float zone3 = smoothstep(0.55, 0.75, colorNoise);
        
        
        zone1 = pow(zone1, 1.0 / sepPower);
        zone2 = pow(zone2, 1.0 / sepPower);
        zone3 = pow(zone3, 1.0 / sepPower);
        
        
        float totalWeight = zone1 + zone2 + zone3 + 0.001;
        zone1 /= totalWeight;
        zone2 /= totalWeight;
        zone3 /= totalWeight;
        
        
        separatedColors = u_color1 * zone1 + u_color2 * zone2 + u_color3 * zone3;
        
        
        separatedColors = mix(baseGradient, separatedColors, u_colorSeparation);
    }
    
    
    vec3 finalColor = separatedColors;
    if (u_colorBands > 0.01) {
        
        float bands = mix(3.0, 12.0, u_colorBands); 
        float bandedNoise = floor(colorNoise * bands) / bands;
        
        
        float bandSmooth = mix(0.15, 0.02, u_colorBands); 
        float smoothBandNoise = mix(colorNoise, bandedNoise, smoothstep(0.0, bandSmooth, u_colorBands));
        
        
        float bt1 = smoothstep(0.0, 0.5, smoothBandNoise);
        float bt2 = smoothstep(0.5, 1.0, smoothBandNoise);
        vec3 bandColor1to2 = mix(u_color1, u_color2, bt1);
        vec3 bandColor2to3 = mix(u_color2, u_color3, bt2);
        vec3 bandedGradient = mix(bandColor1to2, bandColor2to3, smoothstep(0.3, 0.7, smoothBandNoise));
        
        
        finalColor = mix(separatedColors, bandedGradient, u_colorBands);
    }
    
    
    finalColor = mix(u_baseColor, finalColor, smoothstep(0.0, 0.3, colorNoise));
    
    
    if (abs(u_brightness - 1.0) > 0.01) {
        finalColor *= u_brightness;
    }
    
    
    if(u_grainIntensity > 0.01) {
        float grainAspectRatio = mix(1.0, u_resolution.x / u_resolution.y, clamp(u_grainAspect, 0.0, 1.0));
        float grain = filmGrain(vUv, u_timeAbsolute, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity, u_grainFrameHold);
        finalColor = applyGrain(finalColor, grain, u_grainIntensity, u_grainBlendMode);
    }
    
    
    if (abs(u_exposure - 1.0) > 0.01) {
        finalColor *= u_exposure;
    }

    
    if (u_blackLevel > 0.001) {
        float luma = dot(finalColor, vec3(0.2126, 0.7152, 0.0722));
        float darkFactor = pow(clamp(1.0 - luma, 0.0, 1.0), 1.4);
        float attenuation = clamp(1.0 - u_blackLevel * darkFactor, 0.0, 1.0);
        finalColor *= attenuation;
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;class $1{constructor(e="viewport",t=null){if(this.container=document.getElementById(e),!this.container){console.error(`Container #${e} not found`);return}if(!this.isWebGLAvailable()){console.warn("WebGL not supported, falling back to CSS"),this.applyFallback();return}this.scene=null,this.camera=null,this.renderer=null,this.material=null,this.mesh=null,this.animationId=null,this.clock=new ab,this.performanceMonitor=t,this.qualityLevel="high",this.lastQualityChange=0,this.uniformsDirty={time:!0,modulation:!0,colors:!1,noise:!1,grain:!1},this._modulationCache={modTime:0,turbCycle:0,zoomCycle:0,angle:0,cosA:1,sinA:0,c1:.5,c2:.5,noiseCycle:0,gainCycle:0,spreadCycle:0,modNoiseScale:.5,modGain:.35,modZoom:.3,modTurbulence:.2,modDirX:.5,modDirY:.3,modColorMix1:.5,modColorMix2:.5,modColorSpread:.66,colorShift:0},this._lastModulationUpdate=0,this._modulationUpdateInterval=16,this.accumulatedTime=0,this.accumulatedModulationTime=0,this.accumulatedRotation=0,this.init()}isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}applyFallback(){this.container.style.background=`
      linear-gradient(135deg, 
        #ADFFF5 0%, 
        #DEC1FF 50%, 
        #9367FF 100%
      )
    `}init(){this.scene=new X_,this.camera=new gf(-1,1,1,-1,0,1),this.renderer=new o0({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1,precision:"highp"}),this.renderer.setPixelRatio(1),this.renderer.setSize(window.innerWidth,window.innerHeight);const e=this.renderer.domElement;e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="-1",e.style.pointerEvents="none",this.container.appendChild(e),this.material=new cr({vertexShader:X1,fragmentShader:q1,uniforms:{u_time:{value:0},u_timeAbsolute:{value:0},u_resolution:{value:new ve(this.renderer.domElement.width,this.renderer.domElement.height)},u_color1:{value:new qe(8454128)},u_color2:{value:new qe(5123034)},u_color3:{value:new qe(2150293)},u_baseColor:{value:new qe(3054335)},u_zoom:{value:.3},u_noiseScale:{value:.5},u_octaves:{value:2},u_lacunarity:{value:3},u_gain:{value:.35},u_turbulence:{value:.15},u_warpOctaves:{value:1},u_ridgeAmount:{value:0},u_detailScale:{value:1},u_detailAmount:{value:0},u_speed:{value:.08},u_directionX:{value:.5},u_directionY:{value:.3},u_modulationSpeed:{value:.28},u_modulationIntensity:{value:12},u_turbulenceModulation:{value:.24},u_zoomModulation:{value:0},u_colorModulation:{value:0},u_rotationModulation:{value:.01},u_softness:{value:.2},u_contrast:{value:.75},u_brightness:{value:1.25},u_exposure:{value:1},u_blackLevel:{value:0},u_colorMix1:{value:.5},u_colorMix2:{value:.5},u_colorSpread:{value:.66},u_colorSeparation:{value:.3},u_colorBands:{value:0},u_noiseScaleModulation:{value:0},u_gainModulation:{value:0},u_colorSpreadModulation:{value:0},u_colorShiftModulation:{value:0},u_noiseScaleEffective:{value:.5},u_gainEffective:{value:.35},u_zoomEffective:{value:.3},u_turbulenceEffective:{value:.2},u_directionEffective:{value:new ve(.5,.3)},u_colorMix1Effective:{value:.5},u_colorMix2Effective:{value:.5},u_colorSpreadEffective:{value:.66},u_colorShiftOffset:{value:0},u_circularMotionIntensity:{value:.3},u_evolutionSpeed:{value:.15},u_layerBlend:{value:.3},u_colorEvolutionSpeed:{value:.1},u_rippleFrequency:{value:0},u_rippleStrength:{value:0},u_quantizeStep:{value:0},u_mirrorX:{value:0},u_mirrorY:{value:0},u_grainIntensity:{value:.2},u_grainSpeed:{value:20},u_grainSize:{value:2100},u_grainBlendMode:{value:2},u_grainAspect:{value:1},u_grainComplexity:{value:1},u_grainFrameHold:{value:1}},transparent:!0}),this.baseQualitySettings={modulationIntensity:this.material.uniforms.u_modulationIntensity.value,colorModulation:this.material.uniforms.u_colorModulation.value,grainComplexity:this.material.uniforms.u_grainComplexity.value,grainIntensity:this.material.uniforms.u_grainIntensity.value},this.applyQualitySettings(this.qualityLevel),this.updateModulationUniforms(0);const t=new nl(2,2);this.mesh=new pi(t,this.material),this.scene.add(this.mesh),this.setupEventListeners(),this.setupTouchPrevention(),console.log("BackgroundRenderer initialized successfully")}setupEventListeners(){window.addEventListener("resize",this.handleResize.bind(this)),document.addEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}handleResize(){if(this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(1),this.material&&this.material.uniforms.u_resolution)){const e=this.renderer.domElement;this.material.uniforms.u_resolution.value.set(e.width,e.height)}}handleVisibilityChange(){document.hidden?this.pause():this.resume()}setupTouchPrevention(){const e=this.renderer.domElement;["touchstart","touchmove","touchend","touchcancel"].forEach(t=>{e.addEventListener(t,n=>{console.log("canvas preventDefault fired"),n.preventDefault()},{passive:!1})})}updateUniforms(){if(!this.material)return;const e=this.clock.getDelta(),t=this.material.uniforms.u_speed.value;this.accumulatedTime+=e*t,this.updateModulationUniforms(e),this.material.uniforms.u_time.value=this.accumulatedTime,this.material.uniforms.u_timeAbsolute.value=this.clock.getElapsedTime()}updateModulationUniforms(e){if(!this.material)return;const t=this.material.uniforms,n=this._modulationCache,i=performance.now(),s=i-this._lastModulationUpdate>=this._modulationUpdateInterval,o=t.u_modulationSpeed.value,a=t.u_modulationIntensity.value;if(this.accumulatedModulationTime+=e*o,o<1e-5){t.u_noiseScaleEffective.value=t.u_noiseScale.value,t.u_gainEffective.value=t.u_gain.value,t.u_zoomEffective.value=t.u_zoom.value,t.u_turbulenceEffective.value=t.u_turbulence.value,t.u_directionEffective.value.set(t.u_directionX.value,t.u_directionY.value),t.u_colorMix1Effective.value=t.u_colorMix1.value,t.u_colorMix2Effective.value=t.u_colorMix2.value,t.u_colorSpreadEffective.value=t.u_colorSpread.value,t.u_colorShiftOffset.value=0;return}if(s){this._lastModulationUpdate=i;const l=t.u_noiseScale.value,c=t.u_gain.value,u=t.u_zoom.value,h=t.u_turbulence.value,d=t.u_directionX.value,f=t.u_directionY.value,_=t.u_colorMix1.value,p=t.u_colorMix2.value,g=t.u_colorSpread.value;n.modTime=this.accumulatedModulationTime*.2,n.modTurbulence=h;const m=t.u_turbulenceModulation.value;if(m>.01){n.turbCycle=Math.sin(n.modTime*1.5)*.5+.5;const b=m*.8*a;n.modTurbulence=h+(n.turbCycle-.5)*b,n.modTurbulence<0&&(n.modTurbulence=0)}n.modZoom=u;const x=t.u_zoomModulation.value;if(x>.01){n.zoomCycle=Math.sin(n.modTime*.8)*.5+.5;const b=x*.2*a;n.modZoom=u*(1+(n.zoomCycle-.5)*b)}n.modDirX=d,n.modDirY=f;const y=t.u_rotationModulation.value;if(y>.01){const b=y*1.5*a,S=e*o*.2;this.accumulatedRotation+=S*b*.5,n.angle=this.accumulatedRotation,n.cosA=Math.cos(n.angle),n.sinA=Math.sin(n.angle),n.modDirX=d*n.cosA-f*n.sinA,n.modDirY=d*n.sinA+f*n.cosA}n.modColorMix1=_,n.modColorMix2=p;const v=t.u_colorModulation.value;if(v>.01){n.c1=Math.sin(n.modTime*1.1)*.5+.5,n.c2=Math.cos(n.modTime*.7)*.5+.5;const b=v*.8*a;n.modColorMix1=_+(n.c1-.5)*b,n.modColorMix2=p+(n.c2-.5)*b,n.modColorMix1<0&&(n.modColorMix1=0),n.modColorMix1>1&&(n.modColorMix1=1),n.modColorMix2<0&&(n.modColorMix2=0),n.modColorMix2>1&&(n.modColorMix2=1)}n.colorShift=0;const E=t.u_colorShiftModulation.value;E>.01&&(n.colorShift=Math.sin(n.modTime*.5)*E*.5*a),n.modNoiseScale=l;const w=t.u_noiseScaleModulation.value;if(w>.01){n.noiseCycle=Math.sin(n.modTime*.6)*.5+.5;const b=w*.2*a;n.modNoiseScale=l*(1+(n.noiseCycle-.5)*b)}n.modGain=c;const M=t.u_gainModulation.value;if(M>.01){n.gainCycle=Math.cos(n.modTime*.9)*.5+.5;const b=M*.3*a;n.modGain=c+(n.gainCycle-.5)*b,n.modGain<.1&&(n.modGain=.1),n.modGain>.9&&(n.modGain=.9)}n.modColorSpread=g;const A=t.u_colorSpreadModulation.value;if(A>.01){n.spreadCycle=Math.sin(n.modTime*.75)*.5+.5;const b=A*.3*a;n.modColorSpread=g+(n.spreadCycle-.5)*b,n.modColorSpread<0&&(n.modColorSpread=0),n.modColorSpread>1&&(n.modColorSpread=1)}}t.u_noiseScaleEffective.value=n.modNoiseScale,t.u_gainEffective.value=n.modGain,t.u_zoomEffective.value=n.modZoom,t.u_turbulenceEffective.value=n.modTurbulence,t.u_directionEffective.value.set(n.modDirX,n.modDirY),t.u_colorMix1Effective.value=n.modColorMix1,t.u_colorMix2Effective.value=n.modColorMix2,t.u_colorSpreadEffective.value=n.modColorSpread,t.u_colorShiftOffset.value=n.colorShift,this.qualityLevel==="high"&&this.baseQualitySettings&&(this.baseQualitySettings.modulationIntensity=a)}render(){!this.renderer||!this.scene||!this.camera||(this.updateUniforms(),this.renderer.render(this.scene,this.camera),this.performanceMonitor&&this.performanceMonitor.update(),this.animationId=requestAnimationFrame(this.render.bind(this)))}start(){if(!this.renderer){console.warn("Renderer not initialized, cannot start");return}console.log("Starting background renderer"),this.clock.start(),this.render()}pause(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}resume(){!this.animationId&&this.renderer&&this.render()}stop(){this.pause(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.material&&this.material.dispose(),this.mesh&&this.mesh.geometry&&this.mesh.geometry.dispose(),window.removeEventListener("resize",this.handleResize),document.removeEventListener("visibilitychange",this.handleVisibilityChange),console.log("BackgroundRenderer stopped and cleaned up")}getMaterial(){return this.material}getCanvas(){return this.renderer?this.renderer.domElement:null}setQuality(e){if(!["low","medium","high","ultra"].includes(e)){console.warn(`Invalid quality level: ${e}`);return}if(this.qualityLevel===e)return;const t=typeof performance<"u"?performance.now():Date.now();if(this.lastQualityChange&&t-this.lastQualityChange<2e3){console.log(`Quality change throttled to avoid rapid adjustments (current: ${this.qualityLevel})`);return}this.lastQualityChange=t,this.qualityLevel=e,console.log(`Background quality set to: ${e}`),this.renderer&&(this.renderer.setPixelRatio(1),this.renderer.setSize(window.innerWidth,window.innerHeight),console.log(`Pixel ratio locked to: 1.0 (quality: ${e})`)),this.applyQualitySettings(e),this.updateModulationUniforms(this.clock.getElapsedTime())}applyQualitySettings(e){if(!this.material)return;const t=this.material.uniforms;switch(e){case"low":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=0),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.5,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.7,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.55,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.85,t.u_grainIntensity.value)),t.u_grainFrameHold&&(t.u_grainFrameHold.value=1),console.log("Applied low quality: 2 octaves, 1 warp octave, no detail");break;case"medium":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=.05),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.7,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.8,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.75,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.95,t.u_grainIntensity.value)),t.u_grainFrameHold&&(t.u_grainFrameHold.value=1.5),console.log("Applied medium quality: 2 octaves, 1 warp octave, reduced detail");break;case"high":t.u_octaves&&(t.u_octaves.value=3),t.u_warpOctaves&&(t.u_warpOctaves.value=2),t.u_detailAmount&&(t.u_detailAmount.value=.1),t.u_modulationIntensity&&(t.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity),t.u_colorModulation&&(t.u_colorModulation.value=this.baseQualitySettings.colorModulation),t.u_grainComplexity&&(t.u_grainComplexity.value=this.baseQualitySettings.grainComplexity),t.u_grainIntensity&&(t.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),t.u_grainFrameHold&&(t.u_grainFrameHold.value=2),console.log("Applied high quality: 3 octaves, 2 warp octaves, optimized detail, grain hold 2.0");break;case"ultra":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=0),t.u_modulationIntensity&&(t.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity*.8),t.u_colorModulation&&(t.u_colorModulation.value=this.baseQualitySettings.colorModulation*.9),t.u_grainComplexity&&(t.u_grainComplexity.value=this.baseQualitySettings.grainComplexity*.85),t.u_grainIntensity&&(t.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),t.u_grainFrameHold&&(t.u_grainFrameHold.value=3),console.log("Applied ultra quality: 2 octaves, 1 warp octave, no detail, grain hold 3.0 (240fps optimized)");break}}getQuality(){return this.qualityLevel}getPerformanceMonitor(){return this.performanceMonitor}setTargetFps(e){this.frameRateController&&(this.frameRateController.setTargetFps(e),this.material&&this.material.uniforms.u_grainFrameHold&&(e>=240?this.material.uniforms.u_grainFrameHold.value=3:e>=165?this.material.uniforms.u_grainFrameHold.value=2.5:e>=120?this.material.uniforms.u_grainFrameHold.value=2:e>=90?this.material.uniforms.u_grainFrameHold.value=1.5:this.material.uniforms.u_grainFrameHold.value=1,console.log(`Grain frame hold set to ${this.material.uniforms.u_grainFrameHold.value} for ${e}fps target`)))}getTargetFps(){return this.frameRateController?this.frameRateController.getTargetFps():60}getFrameRateMetrics(){return this.frameRateController?this.frameRateController.getMetrics():null}setQualityUltra(){if(!this.material)return;const e=this.material.uniforms;e.u_octaves&&(e.u_octaves.value=2),e.u_warpOctaves&&(e.u_warpOctaves.value=1),e.u_detailAmount&&(e.u_detailAmount.value=0),e.u_modulationIntensity&&(e.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity*.8),e.u_colorModulation&&(e.u_colorModulation.value=this.baseQualitySettings.colorModulation*.9),e.u_grainComplexity&&(e.u_grainComplexity.value=this.baseQualitySettings.grainComplexity*.85),e.u_grainIntensity&&(e.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),e.u_grainFrameHold&&(e.u_grainFrameHold.value=3),this.renderer&&(this.renderer.setPixelRatio(1),this.renderer.setSize(window.innerWidth,window.innerHeight)),this.qualityLevel="ultra",console.log("Applied ultra quality: 2 octaves, 1 warp octave, grain hold 3.0 (240fps optimized)")}}class Y1{constructor(e){if(this.material=e,!this.material){console.error("ShaderController: No material provided");return}}updateUniform(e,t){if(!this.material||!this.material.uniforms[e]){console.warn(`Uniform ${e} not found`);return}t instanceof qe?this.material.uniforms[e].value.copy(t):typeof t=="object"&&t.r!==void 0?this.material.uniforms[e].value.setRGB(t.r,t.g,t.b):this.material.uniforms[e].value=t}updateUniforms(e){Object.keys(e).forEach(t=>{this.updateUniform(t,e[t])})}transitionTo(e,t=7){if(!this.material)return;const n=t>=1?"power1.inOut":"power2.inOut";Object.keys(e).forEach(i=>{const s=this.material.uniforms[i];if(!s){console.warn(`Uniform ${i} not found for transition`);return}const o=e[i];if(s.value instanceof qe){const a=new qe(o);We.to(s.value,{r:a.r,g:a.g,b:a.b,duration:t,ease:n})}else typeof s.value=="number"?We.to(s,{value:o,duration:t,ease:n}):s.value&&typeof s.value.x=="number"&&typeof s.value.y=="number"&&We.to(s.value,{x:o.x!==void 0?o.x:s.value.x,y:o.y!==void 0?o.y:s.value.y,duration:t,ease:n})})}getUniform(e){return!this.material||!this.material.uniforms[e]?null:this.material.uniforms[e].value}getAllUniforms(){if(!this.material)return{};const e={};return Object.keys(this.material.uniforms).forEach(t=>{e[t]=this.material.uniforms[t].value}),e}}const $a={default:{name:"Default Fog",description:"Soft, billowing fog with gentle movement",parameters:{u_zoom:.1,u_noiseScale:.5,u_octaves:1,u_lacunarity:1.8,u_gain:.5,u_turbulence:.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.08,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.28,u_modulationIntensity:12,u_turbulenceModulation:2,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.25,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:.2,u_grainSpeed:20,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1,u_circularMotionIntensity:.3,u_evolutionSpeed:.15,u_layerBlend:.3,u_colorEvolutionSpeed:.1,u_rippleFrequency:0,u_rippleStrength:0,u_quantizeStep:0,u_mirrorX:0,u_mirrorY:0}},dreamyFog:{name:"Dreamy Fog",description:"Very soft, ethereal fog with minimal detail",parameters:{u_zoom:.4,u_noiseScale:1.5,u_octaves:3,u_lacunarity:2,u_gain:.6,u_turbulence:.3,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:6,u_detailAmount:.1,u_speed:.15,u_directionX:.3,u_directionY:.4,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.7,u_contrast:.8,u_brightness:1.1,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.6,u_colorSpread:.7,u_colorSeparation:.6,u_colorBands:0,u_grainIntensity:.05,u_grainSpeed:.8,u_grainSize:120,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.2,u_evolutionSpeed:.1,u_layerBlend:.2,u_colorEvolutionSpeed:.05}},denseFog:{name:"Dense Fog",description:"Thick, heavy fog with more defined shapes",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.1,u_gain:.4,u_turbulence:.6,u_warpOctaves:2,u_ridgeAmount:.15,u_detailScale:10,u_detailAmount:.2,u_speed:.18,u_directionX:.4,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.35,u_contrast:1.2,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.4,u_colorSpread:.3,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.12,u_grainSpeed:1.2,u_grainSize:180,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6}},wispyClouds:{name:"Wispy Clouds",description:"Fast, streaky clouds with sharp edges",parameters:{u_zoom:.7,u_noiseScale:3,u_octaves:3,u_lacunarity:2.3,u_gain:.45,u_turbulence:.4,u_warpOctaves:2,u_ridgeAmount:.4,u_detailScale:12,u_detailAmount:.25,u_speed:.5,u_directionX:.8,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.25,u_contrast:1.3,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.4,u_colorSeparation:.65,u_colorBands:0,u_grainIntensity:.15,u_grainSpeed:2,u_grainSize:200,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},liquidFlow:{name:"Liquid Flow",description:"Liquid-like appearance with strong distortion",parameters:{u_zoom:.8,u_noiseScale:2.2,u_octaves:3,u_lacunarity:2.2,u_gain:.5,u_turbulence:1.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:9,u_detailAmount:.2,u_speed:.35,u_directionX:.6,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.4,u_contrast:1.1,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.6,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.06,u_grainSpeed:.8,u_grainSize:140,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},turbulent:{name:"Turbulent Energy",description:"Chaotic, energetic flow with high distortion",parameters:{u_zoom:1,u_noiseScale:2.8,u_octaves:3,u_lacunarity:2.4,u_gain:.45,u_turbulence:1.5,u_warpOctaves:2,u_ridgeAmount:.2,u_detailScale:15,u_detailAmount:.3,u_speed:.6,u_directionX:.7,u_directionY:.6,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.3,u_contrast:1.4,u_brightness:.98,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.6,u_colorSpread:.5,u_colorSeparation:.75,u_colorBands:0,u_grainIntensity:.18,u_grainSpeed:3,u_grainSize:220,u_grainBlendMode:2,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.7,u_evolutionSpeed:.4,u_layerBlend:.7,u_colorEvolutionSpeed:.3}},calmWaves:{name:"Calm Waves",description:"Gentle, wave-like undulations",parameters:{u_zoom:.3,u_noiseScale:1.8,u_octaves:3,u_lacunarity:2,u_gain:.55,u_turbulence:.7,u_warpOctaves:3,u_ridgeAmount:0,u_detailScale:7,u_detailAmount:.12,u_speed:.2,u_directionX:.2,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.6,u_contrast:.9,u_brightness:1.05,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.5,u_colorSpread:.65,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.04,u_grainSpeed:.6,u_grainSize:100,u_grainBlendMode:3,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.2,u_evolutionSpeed:.1,u_layerBlend:.2,u_colorEvolutionSpeed:.05}},mountainRidges:{name:"Mountain Ridges",description:"Sharp, ridge-like features",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.2,u_gain:.4,u_turbulence:.5,u_warpOctaves:2,u_ridgeAmount:.8,u_detailScale:10,u_detailAmount:.18,u_speed:.15,u_directionX:.3,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.2,u_contrast:1.5,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.45,u_colorMix2:.45,u_colorSpread:.35,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.1,u_grainSpeed:1,u_grainSize:160,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6,u_circularMotionIntensity:.3,u_evolutionSpeed:.12,u_layerBlend:.25,u_colorEvolutionSpeed:.08}},about:{name:"About Page",description:"Custom About Me background",parameters:{u_zoom:.9,u_noiseScale:.5,u_octaves:3,u_lacunarity:4,u_gain:.3,u_turbulence:.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:20,u_detailAmount:0,u_speed:.0248,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.086,u_modulationIntensity:5.32,u_turbulenceModulation:.32,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_colorSpread:1,u_colorSeparation:1,u_colorBands:1,u_colorShiftModulation:2,u_softness:.35,u_contrast:1.1,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_grainIntensity:.56,u_grainSpeed:20,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1}}};function j1(){return Object.keys($a)}class Z1{constructor(e){this.shaderController=e,this.currentPage=null,this.pageConfigs=this.initializePageConfigs()}initializePageConfigs(){const e=()=>({type:"custom",description:"Renderer base defaults",parameters:{u_zoom:.3,u_noiseScale:.5,u_octaves:3,u_lacunarity:3,u_gain:.35,u_turbulence:.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.08,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.4,u_modulationIntensity:12,u_turbulenceModulation:.24,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.25,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:.56,u_grainSpeed:30,u_grainSize:2100,u_grainBlendMode:2,u_grainAspect:1,u_grainComplexity:1,u_circularMotionIntensity:.3,u_evolutionSpeed:.15,u_layerBlend:.3,u_colorEvolutionSpeed:.1,u_rippleFrequency:0,u_rippleStrength:0,u_quantizeStep:0,u_mirrorX:0,u_mirrorY:0}});return{index:e(),about:{type:"preset",preset:"about",description:"About page - Faster, zoomed fog"},works:e(),contact:e(),labs:e(),resume:e(),scholastic:e(),jpplus:e(),rowmark:e(),aave:e(),ipi:e(),wabash:e(),"bright-future":e(),healpool:e(),rentaru:e(),default:e()}}getConfig(e){const t=this.pageConfigs[e]||this.pageConfigs.default,n=$a.default.parameters,i={u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity};if(t.type==="preset"){const s=$a[t.preset];return s?{...{...n,...s.parameters},...i}:(console.warn(`Preset "${t.preset}" not found, using default`),{...n})}else if(t.type==="custom")return{...{...n,...t.parameters},...i};return{...n}}transitionToPage(e,t=7){console.log(`ConfigManager: Transitioning to "${e}" page`);const n=this.getConfig(e),i={u_zoom:n.u_zoom,u_noiseScale:n.u_noiseScale,u_octaves:n.u_octaves,u_lacunarity:n.u_lacunarity,u_gain:n.u_gain,u_turbulence:n.u_turbulence,u_warpOctaves:n.u_warpOctaves,u_ridgeAmount:n.u_ridgeAmount,u_detailScale:n.u_detailScale,u_detailAmount:n.u_detailAmount,u_speed:n.u_speed,u_directionX:n.u_directionX,u_directionY:n.u_directionY,u_modulationSpeed:n.u_modulationSpeed,u_modulationIntensity:n.u_modulationIntensity,u_turbulenceModulation:n.u_turbulenceModulation,u_zoomModulation:n.u_zoomModulation,u_colorModulation:n.u_colorModulation,u_rotationModulation:n.u_rotationModulation,u_noiseScaleModulation:n.u_noiseScaleModulation,u_gainModulation:n.u_gainModulation,u_colorSpreadModulation:n.u_colorSpreadModulation,u_colorShiftModulation:n.u_colorShiftModulation,u_softness:n.u_softness,u_contrast:n.u_contrast,u_brightness:n.u_brightness,u_exposure:n.u_exposure,u_blackLevel:n.u_blackLevel,u_colorMix1:n.u_colorMix1,u_colorMix2:n.u_colorMix2,u_colorSpread:n.u_colorSpread,u_colorSeparation:n.u_colorSeparation,u_colorBands:n.u_colorBands,u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity,u_circularMotionIntensity:n.u_circularMotionIntensity,u_evolutionSpeed:n.u_evolutionSpeed,u_layerBlend:n.u_layerBlend,u_colorEvolutionSpeed:n.u_colorEvolutionSpeed,u_rippleFrequency:n.u_rippleFrequency,u_rippleStrength:n.u_rippleStrength,u_quantizeStep:n.u_quantizeStep,u_mirrorX:n.u_mirrorX,u_mirrorY:n.u_mirrorY};this.shaderController.transitionTo(i,t),this.currentPage=e,console.log(`ConfigManager: Applied "${e}" configuration`)}shouldTransition(e){if(!this.currentPage)return!0;const t=this.pageConfigs[this.currentPage]||this.pageConfigs.default,n=this.pageConfigs[e]||this.pageConfigs.default;return t.type==="preset"&&n.type==="preset"?t.preset!==n.preset:!0}setPageConfig(e,t){this.pageConfigs[e]=t,console.log(`ConfigManager: Updated config for "${e}"`)}getAllConfigs(){return{...this.pageConfigs}}getCurrentPage(){return this.currentPage}resetToDefault(e=4){this.transitionToPage("default",e)}}function Q1(r){return new Z1(r)}class J1{constructor(e=!1){this.enabled=e,this.fps=0,this.frameCount=0,this.lastTime=performance.now(),this.lastFpsUpdate=performance.now(),this.fpsHistory=[],this.maxHistoryLength=60,this.targetFps=60,this.lowFpsThreshold=30,this.statsElement=null,this.onLowPerformance=null,this.frameRateController=null,this.adaptiveQualityManager=null,this.renderer=null,this.enabled&&this.createStatsDisplay()}createStatsDisplay(){}update(){if(!this.enabled)return;const e=performance.now();if(this.frameCount++,e>=this.lastFpsUpdate+500){const t=e-this.lastFpsUpdate;this.fps=Math.round(this.frameCount*1e3/t),this.frameCount=0,this.lastFpsUpdate=e,this.fpsHistory.push(this.fps),this.fpsHistory.length>this.maxHistoryLength&&this.fpsHistory.shift(),this.fps<this.lowFpsThreshold&&this.onLowPerformance&&this.onLowPerformance(this.fps),this.updateDisplay()}}updateDisplay(){if(!this.statsElement||!this._statsDom)return;const e=this._statsDom,t=this.getAverageFps(),n=this.getMinFps();let i=60,s=this.fps,o=s>0?1e3/s:0,a=0;if(this.fpsHistory.length>1){const x=this.fpsHistory.reduce((E,w)=>E+w,0)/this.fpsHistory.length,y=this.fpsHistory.reduce((E,w)=>E+Math.pow(w-x,2),0)/this.fpsHistory.length,v=Math.sqrt(y);a=x>0?v/x*o:0}let l=60,c="high",u=!1,h=!1;if(this.adaptiveQualityManager){const x=this.adaptiveQualityManager.getStatus();l=x.detectedRefreshRate,i=l,c=x.currentQuality,u=x.canUpgrade,h=x.canDowngrade}let d=1,f=1;if(this.renderer){d=window.devicePixelRatio||1;const x=this.renderer.getMaterial();x&&x.uniforms.u_grainFrameHold&&(f=x.uniforms.u_grainFrameHold.value)}const _=(s/i*100).toFixed(0),p=s>=i*.95?"#0f0":s>=i*.85?"#ff0":"#f00";e.fpsMain.textContent=`FPS: ${s} / ${i} (${_}%)`,e.fpsMain.style.color=p,e.fpsDetail.textContent=`Avg: ${t} | Min: ${n} | Dropped: 0`,e.timing.textContent=`Frame: ${o.toFixed(2)}ms ±${a.toFixed(2)}ms`,e.timingTarget.textContent=`Target: ${(1e3/i).toFixed(2)}ms`,e.refresh.textContent=`Refresh: ${l}Hz`,e.pixelRatio.textContent=`Pixel Ratio: ${d.toFixed(2)}`,e.quality.textContent=`Tier: ${c.toUpperCase()}`,e.grain.textContent=`Grain Hold: ${f.toFixed(1)}x`;const g=u?"#0f0":"#555",m=h?"#f90":"#555";e.adaptive.innerHTML=`<span style="color: ${g};">▲ Upgrade</span> | <span style="color: ${m};">▼ Downgrade</span>`}getAverageFps(){if(this.fpsHistory.length===0)return 0;const e=this.fpsHistory.reduce((t,n)=>t+n,0);return Math.round(e/this.fpsHistory.length)}getMinFps(){return this.fpsHistory.length===0?0:Math.min(...this.fpsHistory)}getFps(){return this.fps}getMetrics(){return{currentFps:this.fps,averageFps:this.getAverageFps(),minFps:this.getMinFps(),isLowPerformance:this.fps<this.lowFpsThreshold}}setFrameRateController(e){this.frameRateController=e}setAdaptiveQualityManager(e){this.adaptiveQualityManager=e}setRenderer(e){this.renderer=e}enable(){this.enabled||(this.enabled=!0,this.createStatsDisplay(),console.log("PerformanceMonitor: Enabled"))}disable(){this.enabled&&(this.enabled=!1,this.statsElement&&(this.statsElement.remove(),this.statsElement=null),console.log("PerformanceMonitor: Disabled"))}toggle(){this.enabled?this.disable():this.enable()}isEnabled(){return this.enabled}setLowPerformanceCallback(e){this.onLowPerformance=e}reset(){this.fps=0,this.frameCount=0,this.fpsHistory=[],this.lastTime=performance.now(),this.lastFpsUpdate=performance.now()}destroy(){this.statsElement&&(this.statsElement.remove(),this.statsElement=null),this.enabled=!1,this.onLowPerformance=null}static isDev(){return window.location.hostname==="localhost"||window.location.search.includes("debug=true")||window.location.search.includes("stats=true")}}function K1(r=!1){return new J1(r)}class eT{constructor(){this.samples=[],this.maxSamples=120,this.detecting=!1,this.result=null}async detect(){return new Promise(e=>{this.samples=[],this.detecting=!0,this.result=null;let t=performance.now(),n=0;const i=s=>{if(!this.detecting)return;const o=s-t;n>0&&o>0&&o<100&&this.samples.push(o),t=s,n++,this.samples.length<this.maxSamples?requestAnimationFrame(i):(this.detecting=!1,this.result=this.analyzeFrameTimes(),e(this.result))};requestAnimationFrame(i)})}analyzeFrameTimes(){if(this.samples.length===0)return{refreshRate:60,confidence:0,frameTime:16.67};const e=[...this.samples].sort((d,f)=>d-f),t=e[Math.floor(e.length/2)],n=this.samples.reduce((d,f)=>d+f,0)/this.samples.length,i=this.samples.reduce((d,f)=>d+Math.pow(f-n,2),0)/this.samples.length,s=Math.sqrt(i),o=1e3/t,a=[{hz:240,minTime:3.8,maxTime:4.5},{hz:165,minTime:5.8,maxTime:6.3},{hz:144,minTime:6.6,maxTime:7.2},{hz:120,minTime:8,maxTime:8.7},{hz:90,minTime:10.8,maxTime:11.5},{hz:60,minTime:16,maxTime:17.5}];let l=60,c=16.67;for(const d of a)if(t>=d.minTime&&t<=d.maxTime){l=d.hz,c=1e3/d.hz;break}const h=Math.max(0,Math.min(1,1-s/2));return console.log(`RefreshRateDetector: Detected ${l}Hz (median: ${t.toFixed(2)}ms, stdDev: ${s.toFixed(2)}ms, confidence: ${(h*100).toFixed(0)}%)`),{refreshRate:l,confidence:h,frameTime:c,median:t,stdDev:s,rawHz:o}}async detectQuick(){const e=this.maxSamples;this.maxSamples=60;const t=await this.detect();return this.maxSamples=e,t}getLastResult(){return this.result||{refreshRate:60,confidence:0,frameTime:16.67}}isDetecting(){return this.detecting}cancel(){this.detecting=!1}}async function tT(r=!1){const e=new eT;return r?e.detectQuick():e.detect()}class nT{constructor(e,t){this.renderer=e,this.performanceMonitor=t,this.detectedRefreshRate=60,this.targetFps=60,this.currentQuality="high",this.fpsHistory=[],this.fpsHistoryMaxLength=120,this.lastQualityDowngrade=0,this.lastQualityUpgrade=0,this.downgradeThreshold=.85,this.severeDowngradeThreshold=.7,this.upgradeThreshold=1.15,this.downgradeCooldown=3e3,this.upgradeCooldown=1e4,this.qualityFpsCombinations=[{quality:"ultra",fps:240,minRefreshRate:240},{quality:"ultra",fps:165,minRefreshRate:165},{quality:"high",fps:165,minRefreshRate:165},{quality:"high",fps:120,minRefreshRate:120},{quality:"high",fps:90,minRefreshRate:90},{quality:"high",fps:60,minRefreshRate:60},{quality:"medium",fps:60,minRefreshRate:60},{quality:"low",fps:60,minRefreshRate:60}],this.currentCombinationIndex=5}async initialize(){console.log("AdaptiveQualityManager: Initializing...");try{const e=await tT();this.detectedRefreshRate=e.refreshRate,console.log(`AdaptiveQualityManager: Detected ${this.detectedRefreshRate}Hz display (confidence: ${(e.confidence*100).toFixed(0)}%)`)}catch{console.warn("AdaptiveQualityManager: Failed to detect refresh rate, defaulting to 60Hz"),this.detectedRefreshRate=60}this.selectInitialQualityFps(),this.applySettings(),this.startMonitoring(),console.log(`AdaptiveQualityManager: Initialized with ${this.currentQuality} quality at ${this.targetFps}fps`)}selectInitialQualityFps(){for(let e=0;e<this.qualityFpsCombinations.length;e++){const t=this.qualityFpsCombinations[e];if(this.detectedRefreshRate>=t.minRefreshRate){this.currentCombinationIndex=e,this.currentQuality=t.quality,this.targetFps=t.fps;break}}}applySettings(){this.renderer&&(this.currentQuality==="ultra"?this.renderer.setQualityUltra():this.renderer.setQuality(this.currentQuality),this.renderer.setTargetFps(this.targetFps),console.log(`AdaptiveQualityManager: Applied ${this.currentQuality} quality @ ${this.targetFps}fps`))}startMonitoring(){this._lastPerformanceCheck=0,this._performanceCheckInterval=500,this._monitoringActive=!0;const e=()=>{if(!this._monitoringActive)return;const t=performance.now();t-this._lastPerformanceCheck>=this._performanceCheckInterval&&(this._lastPerformanceCheck=t,this.checkPerformance()),requestAnimationFrame(e)};requestAnimationFrame(e)}stopMonitoring(){this._monitoringActive=!1}checkPerformance(){if(!this.performanceMonitor)return;const e=this.performanceMonitor.getFps();if(e<=0||(this.fpsHistory.push(e),this.fpsHistory.length>this.fpsHistoryMaxLength&&this.fpsHistory.shift(),this.fpsHistory.length<30))return;const n=this.fpsHistory.reduce((s,o)=>s+o,0)/this.fpsHistory.length/this.targetFps,i=performance.now();n<this.severeDowngradeThreshold?i-this.lastQualityDowngrade>1e3&&(this.downgradeQuality(),this.lastQualityDowngrade=i):n<this.downgradeThreshold?i-this.lastQualityDowngrade>this.downgradeCooldown&&(this.downgradeQuality(),this.lastQualityDowngrade=i):n>this.upgradeThreshold&&i-this.lastQualityUpgrade>this.upgradeCooldown&&i-this.lastQualityDowngrade>this.upgradeCooldown*2&&(this.upgradeQuality(),this.lastQualityUpgrade=i)}downgradeQuality(){if(this.currentCombinationIndex>=this.qualityFpsCombinations.length-1){console.log("AdaptiveQualityManager: Already at lowest quality/FPS");return}const e=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentCombinationIndex++;const t=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentQuality=t.quality,this.targetFps=t.fps,console.log(`AdaptiveQualityManager: Downgrading ${e.quality}@${e.fps}fps → ${t.quality}@${t.fps}fps`),this.applySettings(),this.fpsHistory=[]}upgradeQuality(){if(this.currentCombinationIndex<=0){console.log("AdaptiveQualityManager: Already at highest quality/FPS");return}const e=this.qualityFpsCombinations[this.currentCombinationIndex];this.currentCombinationIndex--;const t=this.qualityFpsCombinations[this.currentCombinationIndex];if(t.fps>this.detectedRefreshRate){console.log(`AdaptiveQualityManager: Cannot upgrade to ${t.fps}fps (display is ${this.detectedRefreshRate}Hz)`),this.currentCombinationIndex++;return}this.currentQuality=t.quality,this.targetFps=t.fps,console.log(`AdaptiveQualityManager: Upgrading ${e.quality}@${e.fps}fps → ${t.quality}@${t.fps}fps`),this.applySettings(),this.fpsHistory=[]}getStatus(){const e=this.fpsHistory.length>0?Math.round(this.fpsHistory.reduce((t,n)=>t+n,0)/this.fpsHistory.length):0;return{detectedRefreshRate:this.detectedRefreshRate,currentQuality:this.currentQuality,targetFps:this.targetFps,averageFps:e,canUpgrade:this.currentCombinationIndex>0,canDowngrade:this.currentCombinationIndex<this.qualityFpsCombinations.length-1}}manualSetQualityFps(e,t){this.currentQuality=e,this.targetFps=t,this.applySettings(),this.fpsHistory=[],console.log(`AdaptiveQualityManager: Manual override to ${e}@${t}fps`)}}function iT(r,e){return new nT(r,e)}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */let Go=class hc{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),hc.nextNameID=hc.nextNameID||0,this.$name.id=`lil-gui-name-${++hc.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},rT=class extends Go{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function hd(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const sT={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:hd,toHexString:hd},Ya={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},oT={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Ya.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ya.toHexString(i)}},aT={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Ya.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ya.toHexString(i)}},lT=[sT,Ya,oT,aT];function cT(r){return lT.find(e=>e.match(r))}let uT=class extends Go{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=cT(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=hd(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Wu=class extends Go{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},hT=class extends Go{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,h;const d=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",p)},_=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&p()}if(!o){const y=x.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(m,x,y,v,E)=>(m-x)/(y-x)*(E-v)+v,t=m=>{const x=this.$slider.getBoundingClientRect();let y=e(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const x=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let p;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},dT=class extends Go{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},fT=class extends Go{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};var pT=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function mT(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ym=!1,gT=class a0{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!ym&&a&&(mT(pT),ym=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new dT(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new hT(this,e,t,n,i,s);case"boolean":return new rT(this,e,t);case"string":return new fT(this,e,t);case"function":return new Wu(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new uT(this,e,t,n)}addFolder(e){const t=new a0({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Wu||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Wu)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};class xm{constructor(e){var t;if(this.backgroundManager=e,this.shaderController=e.getShaderController(),this.material=(t=e.getRenderer())==null?void 0:t.getMaterial(),!this.material){console.warn("DevGUI: Material not available");return}this.gui=null,this.folders={},this.params=this.createParamsProxy(),this.init()}static isDev(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("debug=true")}createParamsProxy(){const e=this.material.uniforms;return{highlightColor:"#"+e.u_color1.value.getHexString(),midtoneColor:"#"+e.u_color2.value.getHexString(),lowlightColor:"#"+e.u_color3.value.getHexString(),baseColor:"#"+e.u_baseColor.value.getHexString(),zoom:e.u_zoom.value,noiseScale:e.u_noiseScale.value,octaves:e.u_octaves.value,lacunarity:e.u_lacunarity.value,gain:e.u_gain.value,turbulence:e.u_turbulence.value,warpOctaves:e.u_warpOctaves.value,ridgeAmount:e.u_ridgeAmount.value,detailScale:e.u_detailScale.value,detailAmount:e.u_detailAmount.value,speed:e.u_speed.value,directionX:e.u_directionX.value,directionY:e.u_directionY.value,modulationSpeed:e.u_modulationSpeed.value,modulationIntensity:e.u_modulationIntensity.value,turbulenceModulation:e.u_turbulenceModulation.value,zoomModulation:e.u_zoomModulation.value,colorModulation:e.u_colorModulation.value,rotationModulation:e.u_rotationModulation.value,noiseScaleModulation:e.u_noiseScaleModulation.value,gainModulation:e.u_gainModulation.value,colorSpreadModulation:e.u_colorSpreadModulation.value,colorShiftModulation:e.u_colorShiftModulation.value,softness:e.u_softness.value,contrast:e.u_contrast.value,brightness:e.u_brightness.value,exposure:e.u_exposure.value,blackLevel:e.u_blackLevel.value,colorMix1:e.u_colorMix1.value,colorMix2:e.u_colorMix2.value,colorSpread:e.u_colorSpread.value,colorSeparation:e.u_colorSeparation.value,colorBands:e.u_colorBands.value,grainIntensity:e.u_grainIntensity.value,grainSpeed:e.u_grainSpeed.value,grainSize:e.u_grainSize.value,grainBlendMode:e.u_grainBlendMode.value,grainAspect:e.u_grainAspect.value,grainComplexity:e.u_grainComplexity.value,rippleFrequency:e.u_rippleFrequency?e.u_rippleFrequency.value:0,rippleStrength:e.u_rippleStrength?e.u_rippleStrength.value:0,quantizeStep:e.u_quantizeStep?e.u_quantizeStep.value:0,mirrorX:e.u_mirrorX?e.u_mirrorX.value>.5:!1,mirrorY:e.u_mirrorY?e.u_mirrorY.value>.5:!1}}init(){this.gui=new gT({title:"🎨 Background Shader Controls",width:320}),this.gui.domElement.style.position="fixed",this.gui.domElement.style.top="10px",this.gui.domElement.style.right="10px",this.gui.domElement.style.zIndex="10000",this.addColorsFolder(),this.addNoiseFolder(),this.addAnimationFolder(),this.addOrganicModulationFolder(),this.addArtisticFolder(),this.addFilmGrainFolder(),this.addVisualQualityFolder(),this.addColorMixingFolder(),this.addPresetsFolder(),this.addPageConfigsFolder(),this.addPerformanceFolder(),this.addUtilitiesFolder(),this.addKeyboardShortcut(),this.startLiveSync(),console.log('🎨 DevGUI initialized - Press "G" to toggle')}startLiveSync(){const e=()=>{this.gui&&!this.gui._hidden&&this.updateGUIFromUniforms(),requestAnimationFrame(e)};e()}addColorsFolder(){const e=this.gui.addFolder("🎨 Colors");this.folders.colors=e,e.addColor(this.params,"highlightColor").name("Highlight").onChange(t=>{this.shaderController.updateUniform("u_color1",new qe(t))}),e.addColor(this.params,"midtoneColor").name("Midtone").onChange(t=>{this.shaderController.updateUniform("u_color2",new qe(t))}),e.addColor(this.params,"lowlightColor").name("Lowlight").onChange(t=>{this.shaderController.updateUniform("u_color3",new qe(t))}),e.addColor(this.params,"baseColor").name("Base Color").onChange(t=>{this.shaderController.updateUniform("u_baseColor",new qe(t))}),e.close()}addNoiseFolder(){const e=this.gui.addFolder("🌫️ Noise Parameters");this.folders.noise=e,e.add(this.params,"zoom",.1,5,.1).name("Zoom").onChange(t=>{this.shaderController.updateUniform("u_zoom",t)}),e.add(this.params,"noiseScale",.5,10,.1).name("Noise Scale").onChange(t=>{this.shaderController.updateUniform("u_noiseScale",t)}),e.add(this.params,"octaves",1,8,1).name("Octaves").onChange(t=>{this.shaderController.updateUniform("u_octaves",t)}),e.add(this.params,"lacunarity",1,12,.1).name("Lacunarity").onChange(t=>{this.shaderController.updateUniform("u_lacunarity",t)}),e.add(this.params,"gain",.1,1,.05).name("Gain").onChange(t=>{this.shaderController.updateUniform("u_gain",t)}),e.add(this.params,"turbulence",0,2,.05).name("Turbulence").onChange(t=>{this.shaderController.updateUniform("u_turbulence",t)}),e.add(this.params,"warpOctaves",1,5,1).name("Warp Octaves").onChange(t=>{this.shaderController.updateUniform("u_warpOctaves",t)}),e.add(this.params,"ridgeAmount",0,1,.05).name("Ridge Amount").onChange(t=>{this.shaderController.updateUniform("u_ridgeAmount",t)}),e.add(this.params,"detailScale",1,20,.5).name("Detail Scale").onChange(t=>{this.shaderController.updateUniform("u_detailScale",t)}),e.add(this.params,"detailAmount",0,1,.05).name("Detail Amount").onChange(t=>{this.shaderController.updateUniform("u_detailAmount",t)}),e.close()}addAnimationFolder(){const e=this.gui.addFolder("⚡ Animation");this.folders.animation=e,e.add(this.params,"speed",1e-4,.25,1e-4).name("Speed").onChange(t=>{this.shaderController.updateUniform("u_speed",t)}),e.add(this.params,"directionX",-1,1,.05).name("Direction X").onChange(t=>{this.shaderController.updateUniform("u_directionX",t)}),e.add(this.params,"directionY",-1,1,.05).name("Direction Y").onChange(t=>{this.shaderController.updateUniform("u_directionY",t)}),e.close()}addOrganicModulationFolder(){const e=this.gui.addFolder("🌊 Organic Modulation");this.folders.organicModulation=e,e.add(this.params,"modulationSpeed",1e-4,1,1e-4).name("Global Speed").onChange(t=>{this.shaderController.updateUniform("u_modulationSpeed",t)}),e.add(this.params,"modulationIntensity",0,50,.01).name("Intensity").onChange(t=>{this.shaderController.updateUniform("u_modulationIntensity",t)}),e.add(this.params,"turbulenceModulation",0,10,.01).name("Turbulence Breathing").onChange(t=>{this.shaderController.updateUniform("u_turbulenceModulation",t)}),e.add(this.params,"zoomModulation",0,10,.01).name("Zoom Pulsing").onChange(t=>{this.shaderController.updateUniform("u_zoomModulation",t)}),e.add(this.params,"colorModulation",0,10,.01).name("Color Shifting").onChange(t=>{this.shaderController.updateUniform("u_colorModulation",t)}),e.add(this.params,"rotationModulation",0,10,.01).name("Flow Rotation").onChange(t=>{this.shaderController.updateUniform("u_rotationModulation",t)}),e.add(this.params,"noiseScaleModulation",0,10,.01).name("Noise Scale Pulse").onChange(t=>{this.shaderController.updateUniform("u_noiseScaleModulation",t)}),e.add(this.params,"gainModulation",0,10,.01).name("Gain Modulation").onChange(t=>{this.shaderController.updateUniform("u_gainModulation",t)}),e.add(this.params,"colorSpreadModulation",0,10,.01).name("Color Spread Flux").onChange(t=>{this.shaderController.updateUniform("u_colorSpreadModulation",t)}),e.add(this.params,"colorShiftModulation",0,10,.01).name("Palette Shift").onChange(t=>{this.shaderController.updateUniform("u_colorShiftModulation",t)}),e.close()}addArtisticFolder(){const e=this.gui.addFolder("🎭 Artistic Controls");this.folders.artistic=e,e.add(this.params,"rippleStrength",0,.5,.001).name("Ripple Strength").onChange(t=>{this.shaderController.updateUniform("u_rippleStrength",t)}),e.add(this.params,"rippleFrequency",0,50,.1).name("Ripple Freq").onChange(t=>{this.shaderController.updateUniform("u_rippleFrequency",t)}),e.add(this.params,"quantizeStep",0,1,.01).name("Topography Strength").onChange(t=>{this.shaderController.updateUniform("u_quantizeStep",t)}),e.add(this.params,"mirrorX").name("Mirror X").onChange(t=>{this.shaderController.updateUniform("u_mirrorX",t?1:0)}),e.add(this.params,"mirrorY").name("Mirror Y").onChange(t=>{this.shaderController.updateUniform("u_mirrorY",t?1:0)}),e.close()}addFilmGrainFolder(){const e=this.gui.addFolder("🎬 Film Grain");this.folders.filmGrain=e,e.add(this.params,"grainIntensity",0,1,.01).name("Intensity").onChange(t=>{this.shaderController.updateUniform("u_grainIntensity",t)}),e.add(this.params,"grainSpeed",0,100,.01).name("Speed").onChange(t=>{this.shaderController.updateUniform("u_grainSpeed",t)}),e.add(this.params,"grainSize",10,2500,1).name("Size").onChange(t=>{this.shaderController.updateUniform("u_grainSize",t)}),e.add(this.params,"grainBlendMode",{Overlay:0,Multiply:1,Add:2,Screen:3}).name("Blend Mode").onChange(t=>{this.shaderController.updateUniform("u_grainBlendMode",t)}),e.add(this.params,"grainAspect",0,1,.01).name("Square Amount").onChange(t=>{this.shaderController.updateUniform("u_grainAspect",t)}),e.add(this.params,"grainComplexity",0,1,.01).name("Complexity").onChange(t=>{this.shaderController.updateUniform("u_grainComplexity",t)}),e.close()}addVisualQualityFolder(){const e=this.gui.addFolder("✨ Visual Quality");this.folders.visualQuality=e,e.add(this.params,"softness",0,1,.01).name("Softness").onChange(t=>{this.shaderController.updateUniform("u_softness",t)}),e.add(this.params,"contrast",.5,2,.05).name("Contrast").onChange(t=>{this.shaderController.updateUniform("u_contrast",t)}),e.add(this.params,"brightness",.5,1.5,.05).name("Brightness").onChange(t=>{this.shaderController.updateUniform("u_brightness",t)}),e.add(this.params,"exposure",.5,2,.05).name("Exposure").onChange(t=>{this.shaderController.updateUniform("u_exposure",t)}),e.add(this.params,"blackLevel",0,1,.01).name("Black Level").onChange(t=>{this.shaderController.updateUniform("u_blackLevel",t)}),e.close()}addColorMixingFolder(){const e=this.gui.addFolder("🎨 Color Mixing");this.folders.colorMixing=e,e.add(this.params,"colorMix1",0,1,.01).name("Mix 1 (Hi/Mid)").onChange(t=>{this.shaderController.updateUniform("u_colorMix1",t)}),e.add(this.params,"colorMix2",0,1,.01).name("Mix 2 (Result/Low)").onChange(t=>{this.shaderController.updateUniform("u_colorMix2",t)}),e.add(this.params,"colorSpread",0,1,.01).name("Color Spread").onChange(t=>{this.shaderController.updateUniform("u_colorSpread",t)}),e.add(this.params,"colorSeparation",0,1,.01).name("Color Separation").onChange(t=>{this.shaderController.updateUniform("u_colorSeparation",t)}),e.add(this.params,"colorBands",0,1,.01).name("Color Bands").onChange(t=>{this.shaderController.updateUniform("u_colorBands",t)}),e.close()}addPresetsFolder(){const e=this.gui.addFolder("💾 Presets");this.folders.presets=e;const t=j1(),n={};t.forEach(i=>{const s=$a[i];n[s.name]=()=>{this.loadPreset(i)}}),Object.keys(n).forEach(i=>{e.add(n,i)}),e.close()}addPageConfigsFolder(){const e=this.gui.addFolder("📄 Page Configs");this.folders.pageConfigs=e;const t=this.backgroundManager.getConfigManager();if(!t){console.warn("ConfigManager not available");return}const n=t.getAllConfigs(),i=Object.keys(n).sort(),s={testPage:t.getCurrentPage()||"index"};e.add(s,"testPage",i).name("Test Page Config").onChange(c=>{console.log(`Testing page config: ${c}`),t.transitionToPage(c,.8),setTimeout(()=>{this.updateGUIFromUniforms()},850)});const o={current:t.getCurrentPage()||"none"},a=e.add(o,"current").name("Current Page").disable();setInterval(()=>{const c=t.getCurrentPage();c&&(o.current=c,a.updateDisplay())},500);const l={"Show All Configs":()=>{console.log("=== Page Configurations ==="),Object.entries(n).forEach(([c,u])=>{console.log(`${c}: ${u.description||u.type}`),u.type==="preset"&&console.log(`  - Uses preset: "${u.preset}"`)}),console.log("===========================")}};e.add(l,"Show All Configs"),e.close()}addPerformanceFolder(){const e=this.gui.addFolder("⚡ Performance");this.folders.performance=e;const t=this.backgroundManager.getPerformanceMonitor(),n=this.backgroundManager.getRenderer(),i={quality:n?n.getQuality():"high"};if(e.add(i,"quality",["low","medium","high"]).name("Quality Level").onChange(o=>{this.backgroundManager.setQuality(o)}),t){const o={fps:0,avgFps:0,minFps:0},a=e.add(o,"fps",0,120).name("Current FPS").disable().listen();e.add(o,"avgFps",0,120).name("Average FPS").disable().listen(),e.add(o,"minFps",0,120).name("Min FPS").disable().listen(),setInterval(()=>{const c=t.getMetrics();o.fps=c.currentFps,o.avgFps=c.averageFps,o.minFps=c.minFps;const u=a.domElement.querySelector("input");u&&(c.currentFps<30?u.style.color="#ff0000":c.currentFps<45?u.style.color="#ffff00":u.style.color="#00ff00")},500);const l={"Toggle Stats Overlay":()=>{t.toggle()},"Reset Stats":()=>{t.reset(),console.log("Performance stats reset")}};e.add(l,"Toggle Stats Overlay"),e.add(l,"Reset Stats")}const s={devicePixelRatio:window.devicePixelRatio.toFixed(2),rendererPixelRatio:n&&n.renderer?n.renderer.getPixelRatio().toFixed(2):"0"};e.add(s,"devicePixelRatio").name("Device Pixel Ratio").disable(),e.add(s,"rendererPixelRatio").name("Renderer Pixel Ratio").disable(),e.close()}addUtilitiesFolder(){const e=this.gui.addFolder("🛠️ Utilities");this.folders.utilities=e;const t={"Export Config":()=>this.exportConfig(),"Import Config":()=>this.importConfig(),"Reset to Default":()=>this.loadPreset("default"),"Copy Colors":()=>this.copyColors(),"Randomize Colors":()=>this.randomizeColors(),"Randomize Noise":()=>this.randomizeNoise(),"Randomize Color Mixing":()=>this.randomizeColorMixing()};Object.keys(t).forEach(n=>{e.add(t,n)}),e.open()}loadPreset(e){const t=$a[e];if(!t){console.warn(`Preset "${e}" not found`);return}console.log(`Loading preset: ${t.name}`);const n=t.parameters;this.shaderController.transitionTo({u_zoom:n.u_zoom,u_noiseScale:n.u_noiseScale,u_octaves:n.u_octaves,u_lacunarity:n.u_lacunarity,u_gain:n.u_gain,u_turbulence:n.u_turbulence,u_warpOctaves:n.u_warpOctaves,u_ridgeAmount:n.u_ridgeAmount,u_detailScale:n.u_detailScale,u_detailAmount:n.u_detailAmount,u_speed:n.u_speed,u_directionX:n.u_directionX,u_directionY:n.u_directionY,u_modulationSpeed:n.u_modulationSpeed,u_modulationIntensity:n.u_modulationIntensity,u_turbulenceModulation:n.u_turbulenceModulation,u_zoomModulation:n.u_zoomModulation,u_colorModulation:n.u_colorModulation,u_rotationModulation:n.u_rotationModulation,u_noiseScaleModulation:n.u_noiseScaleModulation,u_gainModulation:n.u_gainModulation,u_colorSpreadModulation:n.u_colorSpreadModulation,u_colorShiftModulation:n.u_colorShiftModulation,u_rippleFrequency:n.u_rippleFrequency||0,u_rippleStrength:n.u_rippleStrength||0,u_quantizeStep:n.u_quantizeStep||0,u_mirrorX:n.u_mirrorX||0,u_mirrorY:n.u_mirrorY||0,u_softness:n.u_softness,u_contrast:n.u_contrast,u_brightness:n.u_brightness,u_exposure:n.u_exposure,u_blackLevel:n.u_blackLevel,u_colorMix1:n.u_colorMix1,u_colorMix2:n.u_colorMix2,u_colorSpread:n.u_colorSpread,u_colorSeparation:n.u_colorSeparation,u_colorBands:n.u_colorBands,u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650)}updateGUIFromUniforms(){const e=this.material.uniforms;this.params.highlightColor="#"+e.u_color1.value.getHexString(),this.params.midtoneColor="#"+e.u_color2.value.getHexString(),this.params.lowlightColor="#"+e.u_color3.value.getHexString(),this.params.baseColor="#"+e.u_baseColor.value.getHexString(),this.params.zoom=e.u_zoom.value,this.params.noiseScale=e.u_noiseScale.value,this.params.octaves=e.u_octaves.value,this.params.lacunarity=e.u_lacunarity.value,this.params.gain=e.u_gain.value,this.params.turbulence=e.u_turbulence.value,this.params.warpOctaves=e.u_warpOctaves.value,this.params.ridgeAmount=e.u_ridgeAmount.value,this.params.detailScale=e.u_detailScale.value,this.params.detailAmount=e.u_detailAmount.value,this.params.speed=e.u_speed.value,this.params.directionX=e.u_directionX.value,this.params.directionY=e.u_directionY.value,this.params.modulationSpeed=e.u_modulationSpeed.value,this.params.modulationIntensity=e.u_modulationIntensity.value,this.params.turbulenceModulation=e.u_turbulenceModulation.value,this.params.zoomModulation=e.u_zoomModulation.value,this.params.colorModulation=e.u_colorModulation.value,this.params.rotationModulation=e.u_rotationModulation.value,this.params.noiseScaleModulation=e.u_noiseScaleModulation.value,this.params.gainModulation=e.u_gainModulation.value,this.params.colorSpreadModulation=e.u_colorSpreadModulation.value,this.params.colorShiftModulation=e.u_colorShiftModulation.value,this.params.rippleFrequency=e.u_rippleFrequency?e.u_rippleFrequency.value:0,this.params.rippleStrength=e.u_rippleStrength?e.u_rippleStrength.value:0,this.params.quantizeStep=e.u_quantizeStep?e.u_quantizeStep.value:0,this.params.mirrorX=e.u_mirrorX?e.u_mirrorX.value>.5:!1,this.params.mirrorY=e.u_mirrorY?e.u_mirrorY.value>.5:!1,this.params.softness=e.u_softness.value,this.params.contrast=e.u_contrast.value,this.params.brightness=e.u_brightness.value,this.params.exposure=e.u_exposure.value,this.params.blackLevel=e.u_blackLevel.value,this.params.colorMix1=e.u_colorMix1.value,this.params.colorMix2=e.u_colorMix2.value,this.params.colorSpread=e.u_colorSpread.value,this.params.colorSeparation=e.u_colorSeparation.value,this.params.colorBands=e.u_colorBands.value,this.params.grainIntensity=e.u_grainIntensity.value,this.params.grainSpeed=e.u_grainSpeed.value,this.params.grainSize=e.u_grainSize.value,this.params.grainBlendMode=e.u_grainBlendMode.value,this.params.grainAspect=e.u_grainAspect.value,this.params.grainComplexity=e.u_grainComplexity.value,this.gui.controllers.forEach(t=>t.updateDisplay()),Object.values(this.folders).forEach(t=>{t.controllers.forEach(n=>n.updateDisplay())})}exportConfig(){const e=this.material.uniforms,t={colors:{highlight:"#"+e.u_color1.value.getHexString(),midtone:"#"+e.u_color2.value.getHexString(),lowlight:"#"+e.u_color3.value.getHexString(),base:"#"+e.u_baseColor.value.getHexString()},noise:{zoom:e.u_zoom.value,noiseScale:e.u_noiseScale.value,octaves:e.u_octaves.value,lacunarity:e.u_lacunarity.value,gain:e.u_gain.value,turbulence:e.u_turbulence.value,warpOctaves:e.u_warpOctaves.value,ridgeAmount:e.u_ridgeAmount.value,detailScale:e.u_detailScale.value,detailAmount:e.u_detailAmount.value},animation:{speed:e.u_speed.value,directionX:e.u_directionX.value,directionY:e.u_directionY.value},filmGrain:{intensity:e.u_grainIntensity.value,speed:e.u_grainSpeed.value,size:e.u_grainSize.value,blendMode:e.u_grainBlendMode.value,aspect:e.u_grainAspect.value,complexity:e.u_grainComplexity.value},visual:{softness:e.u_softness.value,contrast:e.u_contrast.value,brightness:e.u_brightness.value,exposure:e.u_exposure.value,blackLevel:e.u_blackLevel.value,colorMix1:e.u_colorMix1.value,colorMix2:e.u_colorMix2.value,colorSpread:e.u_colorSpread.value}},n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Configuration exported to clipboard!"),alert("Configuration copied to clipboard!")}).catch(i=>{console.error("Failed to copy:",i),console.log("Configuration JSON:",n),alert("Check console for configuration JSON")})}importConfig(){const e=prompt("Paste configuration JSON:");if(e)try{const t=JSON.parse(e);t.colors&&(t.colors.highlight&&(this.shaderController.updateUniform("u_color1",new qe(t.colors.highlight)),this.params.highlightColor=t.colors.highlight),t.colors.midtone&&(this.shaderController.updateUniform("u_color2",new qe(t.colors.midtone)),this.params.midtoneColor=t.colors.midtone),t.colors.lowlight&&(this.shaderController.updateUniform("u_color3",new qe(t.colors.lowlight)),this.params.lowlightColor=t.colors.lowlight),t.colors.base&&(this.shaderController.updateUniform("u_baseColor",new qe(t.colors.base)),this.params.baseColor=t.colors.base));const n={...t.noise&&Object.keys(t.noise).reduce((i,s)=>(i["u_"+s]=t.noise[s],i),{}),...t.animation&&Object.keys(t.animation).reduce((i,s)=>(i["u_"+s]=t.animation[s],i),{}),...t.visual&&Object.keys(t.visual).reduce((i,s)=>(i["u_"+s]=t.visual[s],i),{}),...t.filmGrain&&{u_grainIntensity:t.filmGrain.intensity,u_grainSpeed:t.filmGrain.speed,u_grainSize:t.filmGrain.size,u_grainBlendMode:t.filmGrain.blendMode,...t.filmGrain.aspect!==void 0?{u_grainAspect:t.filmGrain.aspect}:{},...t.filmGrain.complexity!==void 0?{u_grainComplexity:t.filmGrain.complexity}:{}}};this.shaderController.updateUniforms(n),this.updateGUIFromUniforms(),console.log("✅ Configuration imported successfully!"),alert("Configuration imported!")}catch(t){console.error("Failed to import configuration:",t),alert("Invalid JSON format")}}copyColors(){const e=this.material.uniforms,t={highlight:"#"+e.u_color1.value.getHexString(),midtone:"#"+e.u_color2.value.getHexString(),lowlight:"#"+e.u_color3.value.getHexString(),base:"#"+e.u_baseColor.value.getHexString()},n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Colors copied!",t),alert("Colors copied to clipboard!")})}randomizeColors(){const e=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),t={highlight:e(),midtone:e(),lowlight:e(),base:e()};this.shaderController.transitionTo({u_color1:new qe(t.highlight),u_color2:new qe(t.midtone),u_color3:new qe(t.lowlight),u_baseColor:new qe(t.base)},.6),setTimeout(()=>{this.params.highlightColor=t.highlight,this.params.midtoneColor=t.midtone,this.params.lowlightColor=t.lowlight,this.params.baseColor=t.base,this.updateGUIFromUniforms()},650),console.log("🎨 Randomized colors:",t)}randomizeNoise(){const e={zoom:Math.random()*1.5+.2,noiseScale:Math.random()*4+.5,octaves:Math.floor(Math.random()*3)+2,lacunarity:Math.random()*2+1.5,gain:Math.random()*.6+.3,turbulence:Math.random()*1,warpOctaves:Math.floor(Math.random()*3)+1,ridgeAmount:Math.random()*.8,detailScale:Math.random()*8+4,detailAmount:Math.random()*.3};this.shaderController.transitionTo({u_zoom:e.zoom,u_noiseScale:e.noiseScale,u_octaves:e.octaves,u_lacunarity:e.lacunarity,u_gain:e.gain,u_turbulence:e.turbulence,u_warpOctaves:e.warpOctaves,u_ridgeAmount:e.ridgeAmount,u_detailScale:e.detailScale,u_detailAmount:e.detailAmount},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🌫️ Randomized noise:",e)}randomizeColorMixing(){const e={colorMix1:Math.random(),colorMix2:Math.random(),colorSpread:Math.random(),colorSeparation:Math.random()*.6+.4,colorBands:Math.random()*.5};this.shaderController.transitionTo({u_colorMix1:e.colorMix1,u_colorMix2:e.colorMix2,u_colorSpread:e.colorSpread,u_colorSeparation:e.colorSeparation,u_colorBands:e.colorBands},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🎨 Randomized color mixing:",e)}addKeyboardShortcut(){document.addEventListener("keydown",e=>{if(e.key==="g"||e.key==="G"){if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")return;this.gui._hidden?this.gui.show():this.gui.hide()}})}destroy(){this.gui&&(this.gui.destroy(),this.gui=null)}}function _T(r){return xm.isDev()?(console.log("DevGUI: Initializing..."),new xm(r)):(console.log("DevGUI: Not in development mode, skipping GUI"),null)}class vT{constructor(){this.renderer=null,this.shaderController=null,this.configManager=null,this.performanceMonitor=null,this.adaptiveQualityManager=null,this.devGUI=null,this.isInitialized=!1}init(e="viewport"){console.log("Initializing custom shader background...");const t=this.detectInitialPageNamespace();window.location.hostname==="localhost"||window.location.search.includes("debug=true"),this.performanceMonitor=K1(!0),this.renderer=new $1(e,this.performanceMonitor);const n=this.renderer.getMaterial();return n?(this.shaderController=new Y1(n),this.configManager=Q1(this.shaderController),t&&this.configManager&&(this.configManager.transitionToPage(t,0),console.log(`Applied initial background configuration for "${t}" page`)),this.adaptiveQualityManager=iT(this.renderer,this.performanceMonitor),this.performanceMonitor&&(this.performanceMonitor.setRenderer(this.renderer),this.performanceMonitor.setAdaptiveQualityManager(this.adaptiveQualityManager)),this.adaptiveQualityManager.initialize().then(()=>{console.log("AdaptiveQualityManager: System ready")}).catch(i=>{console.warn("AdaptiveQualityManager: Initialization failed, using defaults",i)}),this.isInitialized=!0,console.log("Background system initialized successfully")):console.warn("Background system initialization incomplete (fallback mode)"),this.renderer&&this.renderer.start(),this.devGUI=_T(this),this}detectInitialPageNamespace(){const e=document.querySelector("[data-barba='container']");if(e){const i=e.getAttribute("data-barba-namespace");if(i)return i}const t=document.querySelector("main > div");if(t){const i=t.dataset.barbaNamespace;if(i)return i}const n=window.location.pathname;if(n.includes("/about"))return"about";if(n.includes("/works"))return"works";if(n.includes("/contact"))return"contact";if(n.includes("/resume"))return"resume";if(n.includes("/lab"))return"labs";if(n.includes("/projects/")){const i=n.match(/\/projects\/([^\/]+)/);if(i)return i[1]}return"index"}fadeOut(e=.4){var n;const t=(n=this.renderer)==null?void 0:n.getCanvas();t&&(t.style.transition=`opacity ${e}s ease`,t.style.opacity="0")}fadeIn(e=.6,t=.66){var i;const n=(i=this.renderer)==null?void 0:i.getCanvas();n&&(n.style.transition=`opacity ${e}s ease`,n.style.opacity=t.toString())}transitionToPage(e,t=7){if(!this.configManager){console.warn("ConfigManager not initialized"),this.fadeIn(t);return}if(!this.configManager.shouldTransition(e)){console.log(`No transition needed for ${e} - same config`),this.fadeIn(t);return}this.configManager.transitionToPage(e,t),this.fadeIn(t)}getShaderController(){return this.shaderController}getRenderer(){return this.renderer}getConfigManager(){return this.configManager}getPerformanceMonitor(){return this.performanceMonitor}getDevGUI(){return this.devGUI}setQuality(e){this.renderer&&this.renderer.setQuality(e)}getQuality(){return this.renderer?this.renderer.getQuality():"high"}getAdaptiveQualityManager(){return this.adaptiveQualityManager}setTargetFps(e){this.renderer&&this.renderer.setTargetFps(e)}getTargetFps(){return this.renderer?this.renderer.getTargetFps():60}getFrameRateMetrics(){return this.renderer?this.renderer.getFrameRateMetrics():null}getAdaptiveStatus(){return this.adaptiveQualityManager?this.adaptiveQualityManager.getStatus():null}destroy(){this.devGUI&&this.devGUI.destroy(),this.renderer&&this.renderer.stop(),this.isInitialized=!1,console.log("Background system destroyed")}}const rl=new vT;typeof window<"u"&&(window.location.hostname==="localhost"||window.location.search.includes("debug=true"))&&(window.backgroundManager=rl,console.log("🎨 Background manager exposed to window.backgroundManager for debugging"),console.log("   Try: backgroundManager.setTargetFps(240)"),console.log("   Try: backgroundManager.getAdaptiveStatus()"),console.log("   Try: backgroundManager.getFrameRateMetrics()"));We.registerPlugin(tt);function yT(r){const e=r.getBoundingClientRect(),n=(window.innerHeight||document.documentElement.clientHeight)*.8;return e.top<=n}const wo=new Map;function vf(){console.log("Setting up unified sequential reveal system"),xT();const r=We.utils.toArray(".fade-reveal").filter(t=>t.tagName.toLowerCase()!=="nav");if(r.length===0){console.log("No fade-reveal elements found");return}console.log(`Found ${r.length} fade-reveal elements`),ST(r).forEach((t,n)=>{bT(t,n)})}function xT(){document.querySelectorAll(".splitting-rows").forEach(n=>{n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting-rows")}),document.querySelectorAll(".splitting, [data-splitting].scroll-reveal").forEach(n=>{n.classList.contains("splitting-rows")||(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting"))}),document.querySelectorAll("h1, h2, h3").forEach(n=>{!n.classList.contains("fade-reveal")&&!n.closest("nav")&&(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","heading"))})}function ST(r){const e=[];let t=[],n=-1/0;const i=200;return r.forEach(s=>{const o=s.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,l=o.top+a;l-n>i&&t.length>0?(e.push(t),t=[s]):t.push(s),n=l+o.height}),t.length>0&&e.push(t),e}function bT(r,e){const t=`group-${e}`;tt.create({trigger:r[0],start:"top 80%",end:"bottom 15%",onEnter:()=>Sm(r,t),onLeaveBack:()=>MT(r,t),markers:!1}),yT(r[0])&&Sm(r,t)}function Sm(r,e){wo.has(e)&&wo.get(e).kill(),console.log(`Starting sequential reveal for ${e} with ${r.length} elements`);const t=We.timeline();r.forEach((n,i)=>{const s=n.getAttribute("data-reveal-type")||"default",o=wT(s,i);s==="splitting-rows"?t.call(()=>{n.classList.add("reveal"),n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o):s==="splitting"?t.call(()=>{n.classList.add("reveal"),n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o):t.call(()=>{n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o),i<r.length-1&&t.set({},{},"-=0.1")}),wo.set(e,t)}function MT(r,e){wo.has(e)&&(wo.get(e).kill(),wo.delete(e)),r.forEach(t=>{t.classList.remove("active","reveal")})}function wT(r,e){const t=e*.15;switch(r){case"heading":return t*.8;case"splitting-rows":return t*1.2;default:return t}}function l0(){console.log("Setting up video autoplay on scroll");const r=We.utils.toArray("video");if(r.length===0){console.log("No video elements found");return}console.log(`Found ${r.length} video elements`),r.forEach((e,t)=>{tt.create({trigger:e,start:"top 90%",end:"bottom 10%",toggleClass:"in-viewport",onEnter:()=>{const n=e.currentTime;setTimeout(()=>{e.paused||e.ended?(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Started playing video[${t}]`)):n===e.currentTime&&(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Restarted stuck video[${t}]`))},1250)},markers:!1,once:!1})})}function c0(){console.log("Setting up auto-scroll containers");const r=We.utils.toArray(".auto-scroll");if(r.length===0){console.log("No auto-scroll containers found");return}console.log(`Found ${r.length} auto-scroll containers`),r.forEach((e,t)=>{const n=e.querySelector(".scroll-content");if(!n){console.warn(`Auto-scroll container ${t} is missing .scroll-content child element`);return}let i=n.clientHeight-e.clientHeight;if(i<=0){console.log(`Auto-scroll container ${t} has no scrollable content`);return}let s=We.to(n,{y:-i,duration:8,ease:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",paused:!0});tt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>{console.log(`Starting auto-scroll for container ${t}`),s.restart()},onEnterBack:()=>s.restart(),markers:!1})})}(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function ET(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function bm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Mm(r,e,t){return e&&bm(r.prototype,e),t&&bm(r,t),r}function TT(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function wm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Em(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wm(Object(t),!0).forEach(function(n){TT(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):wm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function u0(r,e){return CT(r)||PT(r,e)||h0(r,e)||DT()}function An(r){return AT(r)||RT(r)||h0(r)||LT()}function AT(r){if(Array.isArray(r))return dd(r)}function CT(r){if(Array.isArray(r))return r}function RT(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function PT(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return t}}function h0(r,e){if(r){if(typeof r=="string")return dd(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dd(r,e)}}function dd(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function LT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hs(r,e){return Object.getOwnPropertyNames(Object(r)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||i)},{})}function sl(r){return typeof r=="string"}function yf(r){return Array.isArray(r)}function ql(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=hs(r),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(sl(t)||yf(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(r.position)),e}function xf(r){var e=sl(r)||yf(r)?String(r):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Xc(r){return r!==null&&typeof r=="object"}function IT(r){return Xc(r)&&/^(1|3|11)$/.test(r.nodeType)}function OT(r){return typeof r=="number"&&r>-1&&r%1===0}function FT(r){return Xc(r)&&OT(r.length)}function Ls(r){return yf(r)?r:r==null?[]:FT(r)?Array.prototype.slice.call(r):[r]}function Tm(r){var e=r;return sl(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?e=document.getElementById(r.trim().slice(1)):e=document.querySelectorAll(r)),Ls(e).reduce(function(t,n){return[].concat(An(t),An(Ls(n).filter(IT)))},[])}var NT=Object.entries,Pc="_splittype",Ei={},UT=0;function Ui(r,e,t){if(!Xc(r))return console.warn("[data.set] owner is not an object"),null;var n=r[Pc]||(r[Pc]=++UT),i=Ei[n]||(Ei[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(Ei[n]=Em(Em({},i),e)):e!==void 0&&(i[e]=t),t}function ds(r,e){var t=Xc(r)?r[Pc]:null,n=t&&Ei[t]||{};return n}function d0(r){var e=r&&r[Pc];e&&(delete r[e],delete Ei[e])}function kT(){Object.keys(Ei).forEach(function(r){delete Ei[r]})}function BT(){NT(Ei).forEach(function(r){var e=u0(r,2),t=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(Ei[t]=null,delete Ei[t])})}function zT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=r?String(r):"";return t.trim().replace(/\s+/g," ").split(e)}var Sf="\\ud800-\\udfff",f0="\\u0300-\\u036f\\ufe20-\\ufe23",p0="\\u20d0-\\u20f0",m0="\\ufe0e\\ufe0f",HT="[".concat(Sf,"]"),fd="[".concat(f0).concat(p0,"]"),pd="\\ud83c[\\udffb-\\udfff]",VT="(?:".concat(fd,"|").concat(pd,")"),g0="[^".concat(Sf,"]"),_0="(?:\\ud83c[\\udde6-\\uddff]){2}",v0="[\\ud800-\\udbff][\\udc00-\\udfff]",y0="\\u200d",x0="".concat(VT,"?"),S0="[".concat(m0,"]?"),GT="(?:"+y0+"(?:"+[g0,_0,v0].join("|")+")"+S0+x0+")*",WT=S0+x0+GT,XT="(?:".concat(["".concat(g0).concat(fd,"?"),fd,_0,v0,HT].join("|"),`
)`),qT=RegExp("".concat(pd,"(?=").concat(pd,")|").concat(XT).concat(WT),"g"),$T=[y0,Sf,f0,p0,m0],YT=RegExp("[".concat($T.join(""),"]"));function jT(r){return r.split("")}function b0(r){return YT.test(r)}function ZT(r){return r.match(qT)||[]}function QT(r){return b0(r)?ZT(r):jT(r)}function JT(r){return r==null?"":String(r)}function KT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=JT(r),r&&sl(r)&&!e&&b0(r)?QT(r):r.split(e)}function md(r,e){var t=document.createElement(r);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=sl(i)?i.trim():i;s===null||s===""||(n==="children"?t.append.apply(t,An(Ls(s))):t.setAttribute(n,s))}),t}var bf={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function eA(r,e){e=hs(bf,e);var t=xf(e.types),n=e.tagName,i=r.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=zT(i).reduce(function(l,c,u,h){var d,f;return t.chars&&(f=KT(c).map(function(_){var p=md(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Ui(p,"isChar",!0),a=[].concat(An(a),[p]),p})),t.words||t.lines?(d=md(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?f:c}),Ui(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):f.forEach(function(_){s.appendChild(_)}),u<h.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:o,chars:a}}function M0(r,e){var t=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(r.nodeValue))return eA(r,e);var i=Ls(r.childNodes);if(i.length&&(Ui(r,"isSplit",!0),!ds(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,o=r.previousSibling,a=r.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";Ui(r,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,h){var d=M0(h,e),f=d.words,_=d.chars;return{words:[].concat(An(u.words),An(f)),chars:[].concat(An(u.chars),An(_))}},n)}function tA(r,e,t,n){if(!t.absolute)return{top:e?r.offsetTop:null};var i=r.offsetParent,s=u0(n,2),o=s[0],a=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var h=r.getBoundingClientRect(),d=h.width,f=h.height,_=h.x,p=h.y,g=p+a-c,m=_+o-l;return{width:d,height:f,top:g,left:m}}function w0(r){ds(r).isWord?(d0(r),r.replaceWith.apply(r,An(r.childNodes))):Ls(r.children).forEach(function(e){return w0(e)})}var nA=function(){return document.createDocumentFragment()};function iA(r,e,t){var n=xf(e.types),i=e.tagName,s=r.getElementsByTagName("*"),o=[],a=[],l=null,c,u,h,d=[],f=r.parentElement,_=r.nextElementSibling,p=nA(),g=window.getComputedStyle(r),m=g.textAlign,x=parseFloat(g.fontSize),y=x*.2;return e.absolute&&(h={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,Ui(r,{cssWidth:r.style.width,cssHeight:r.style.height})),Ls(s).forEach(function(v){var E=v.parentElement===r,w=tA(v,E,e,t),M=w.width,A=w.height,b=w.top,S=w.left;/^br$/i.test(v.nodeName)||(n.lines&&E&&((l===null||b-l>=y)&&(l=b,o.push(a=[])),a.push(v)),e.absolute&&Ui(v,{top:b,left:S,width:M,height:A}))}),f&&f.removeChild(r),n.lines&&(d=o.map(function(v){var E=md(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(m,"; width: 100%;")});Ui(E,"isLine",!0);var w={height:0,top:1e4};return p.appendChild(E),v.forEach(function(M,A,b){var S=ds(M),F=S.isWordEnd,U=S.top,G=S.height,V=b[A+1];w.height=Math.max(w.height,G),w.top=Math.min(w.top,U),E.appendChild(M),F&&ds(V).isWordStart&&E.append(" ")}),e.absolute&&Ui(E,{height:w.height,top:w.top}),E}),n.words||w0(p),r.replaceChildren(p)),e.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),Ls(s).forEach(function(v){var E=ds(v),w=E.isLine,M=E.top,A=E.left,b=E.width,S=E.height,F=ds(v.parentElement),U=!w&&F.isLine;v.style.top="".concat(U?M-F.top:M,"px"),v.style.left=w?"".concat(h.left,"px"):"".concat(A-(U?h.left:0),"px"),v.style.height="".concat(S,"px"),v.style.width=w?"".concat(h.width,"px"):"".concat(b,"px"),v.style.position="absolute"})),f&&(_?f.insertBefore(r,_):f.appendChild(r)),d}var eo=hs(bf,{}),Am=(function(){Mm(r,null,[{key:"clearData",value:function(){kT()}},{key:"setDefaults",value:function(t){return eo=hs(eo,ql(t)),bf}},{key:"revert",value:function(t){Tm(t).forEach(function(n){var i=ds(n),s=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",d0(n))})}},{key:"create",value:function(t,n){return new r(t,n)}},{key:"data",get:function(){return Ei}},{key:"defaults",get:function(){return eo},set:function(t){eo=hs(eo,ql(t))}}]);function r(e,t){ET(this,r),this.isSplit=!1,this.settings=hs(eo,ql(t)),this.elements=Tm(e),this.split()}return Mm(r,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(o){Ui(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=hs(this.settings,ql(t)));var s=xf(this.settings.types);s.none||(this.elements.forEach(function(o){Ui(o,"isRoot",!0);var a=M0(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(An(n.words),An(l)),n.chars=[].concat(An(n.chars),An(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=iA(o,n.settings,i);n.lines=[].concat(An(n.lines),An(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),BT())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r})();function gd(){console.log("Running splitText: centralizing all text splitting");function r(t){t.splitType&&t.splitType.revert(),t.querySelectorAll(".char").forEach(i=>{i.parentNode&&i.parentNode.removeChild(i)})}const e=document.querySelectorAll("[data-splitting], h1, h2");if(console.log(`Found ${e.length} elements for character splitting`),e.forEach(t=>{r(t);const n=t.classList.contains("title");n&&(t.setAttribute("data-position",t.style.position||""),t.setAttribute("data-display",t.style.display||""));const i=new Am(t,{types:"chars",tagName:"span"});t.splitType=i,i.chars&&i.chars.forEach((s,o)=>{s.setAttribute("data-char",s.textContent),s.setAttribute("data-index",o),s.style.color="transparent",s.style.visibility="visible",s.id||(s.id=`char-${Math.random().toString(36).substring(2,9)}`)}),n&&t.parentElement.classList.contains("titles-wrapper")&&(t.style.position="absolute",t.style.display="block")}),document.querySelector(".splitting-rows")){const t=document.querySelectorAll(".splitting-rows");console.log(`Found ${t.length} elements for line splitting`),t.forEach(n=>{r(n),n.classList.remove("reveal");const i=new Am(n,{types:"lines",tagName:"span",linesClass:"line"});n.splitType=i,i.lines&&i.lines.forEach((s,o)=>{s.setAttribute("data-line-index",o),s.style.opacity="0",setTimeout(()=>{s.style.opacity=""},50)})})}}function rA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var dc={exports:{}};/*!
 * circletype 2.3.0
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2018 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */var sA=dc.exports,Cm;function oA(){return Cm||(Cm=1,(function(r,e){(function(t,n){r.exports=n()})(typeof self<"u"?self:sA,function(){return(function(t){function n(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};return n.m=t,n.c=i,n.d=function(s,o,a){n.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},n.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(o,"a",o),o},n.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},n.p="",n(n.s=29)})([function(t,n,i){var s=i(24)("wks"),o=i(12),a=i(1).Symbol,l=typeof a=="function";(t.exports=function(c){return s[c]||(s[c]=l&&a[c]||(l?a:o)("Symbol."+c))}).store=s},function(t,n){var i=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=i)},function(t,n){var i=t.exports={version:"2.5.6"};typeof __e=="number"&&(__e=i)},function(t,n,i){var s=i(4),o=i(11);t.exports=i(6)?function(a,l,c){return s.f(a,l,o(1,c))}:function(a,l,c){return a[l]=c,a}},function(t,n,i){var s=i(5),o=i(34),a=i(35),l=Object.defineProperty;n.f=i(6)?Object.defineProperty:function(c,u,h){if(s(c),u=a(u,!0),s(h),o)try{return l(c,u,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported!");return"value"in h&&(c[u]=h.value),c}},function(t,n,i){var s=i(10);t.exports=function(o){if(!s(o))throw TypeError(o+" is not an object!");return o}},function(t,n,i){t.exports=!i(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(t,n){var i={}.hasOwnProperty;t.exports=function(s,o){return i.call(s,o)}},function(t,n){var i=Math.ceil,s=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?s:i)(o)}},function(t,n){t.exports=function(i){if(i==null)throw TypeError("Can't call method on  "+i);return i}},function(t,n){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},function(t,n){t.exports=function(i,s){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:s}}},function(t,n){var i=0,s=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+s).toString(36))}},function(t,n){t.exports={}},function(t,n,i){var s=i(24)("keys"),o=i(12);t.exports=function(a){return s[a]||(s[a]=o(a))}},function(t,n){t.exports=!1},function(t,n,i){var s=i(1),o=i(2),a=i(3),l=i(19),c=i(20),u=function(h,d,f){var _,p,g,m,x=h&u.F,y=h&u.G,v=h&u.S,E=h&u.P,w=h&u.B,M=y?s:v?s[d]||(s[d]={}):(s[d]||{}).prototype,A=y?o:o[d]||(o[d]={}),b=A.prototype||(A.prototype={});y&&(f=d);for(_ in f)p=!x&&M&&M[_]!==void 0,g=(p?M:f)[_],m=w&&p?c(g,s):E&&typeof g=="function"?c(Function.call,g):g,M&&l(M,_,g,h&u.U),A[_]!=g&&a(A,_,m),E&&b[_]!=g&&(b[_]=g)};s.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=function(i){try{return!!i()}catch{return!0}}},function(t,n,i){var s=i(10),o=i(1).document,a=s(o)&&s(o.createElement);t.exports=function(l){return a?o.createElement(l):{}}},function(t,n,i){var s=i(1),o=i(3),a=i(7),l=i(12)("src"),c=Function.toString,u=(""+c).split("toString");i(2).inspectSource=function(h){return c.call(h)},(t.exports=function(h,d,f,_){var p=typeof f=="function";p&&(a(f,"name")||o(f,"name",d)),h[d]!==f&&(p&&(a(f,l)||o(f,l,h[d]?""+h[d]:u.join(String(d)))),h===s?h[d]=f:_?h[d]?h[d]=f:o(h,d,f):(delete h[d],o(h,d,f)))})(Function.prototype,"toString",function(){return typeof this=="function"&&this[l]||c.call(this)})},function(t,n,i){var s=i(36);t.exports=function(o,a,l){if(s(o),a===void 0)return o;switch(l){case 1:return function(c){return o.call(a,c)};case 2:return function(c,u){return o.call(a,c,u)};case 3:return function(c,u,h){return o.call(a,c,u,h)}}return function(){return o.apply(a,arguments)}}},function(t,n,i){var s=i(42),o=i(9);t.exports=function(a){return s(o(a))}},function(t,n){var i={}.toString;t.exports=function(s){return i.call(s).slice(8,-1)}},function(t,n,i){var s=i(8),o=Math.min;t.exports=function(a){return a>0?o(s(a),9007199254740991):0}},function(t,n,i){var s=i(2),o=i(1),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(l,c){return a[l]||(a[l]=c!==void 0?c:{})})("versions",[]).push({version:s.version,mode:i(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,i){var s=i(4).f,o=i(7),a=i(0)("toStringTag");t.exports=function(l,c,u){l&&!o(l=u?l:l.prototype,a)&&s(l,a,{configurable:!0,value:c})}},function(t,n,i){var s=i(9);t.exports=function(o){return Object(s(o))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=Math.PI/180;n.default=function(o){return o*s}},function(t,n,i){i(30);var s=i(54),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);t.exports=o.default},function(t,n,i){i(31),i(47),t.exports=i(2).Array.from},function(t,n,i){var s=i(32)(!0);i(33)(String,"String",function(o){this._t=String(o),this._i=0},function(){var o,a=this._t,l=this._i;return l>=a.length?{value:void 0,done:!0}:(o=s(a,l),this._i+=o.length,{value:o,done:!1})})},function(t,n,i){var s=i(8),o=i(9);t.exports=function(a){return function(l,c){var u,h,d=String(o(l)),f=s(c),_=d.length;return f<0||f>=_?a?"":void 0:(u=d.charCodeAt(f),u<55296||u>56319||f+1===_||(h=d.charCodeAt(f+1))<56320||h>57343?a?d.charAt(f):u:a?d.slice(f,f+2):h-56320+(u-55296<<10)+65536)}}},function(t,n,i){var s=i(15),o=i(16),a=i(19),l=i(3),c=i(13),u=i(37),h=i(26),d=i(46),f=i(0)("iterator"),_=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(g,m,x,y,v,E,w){u(x,m,y);var M,A,b,S=function(re){if(!_&&re in V)return V[re];switch(re){case"keys":case"values":return function(){return new x(this,re)}}return function(){return new x(this,re)}},F=m+" Iterator",U=v=="values",G=!1,V=g.prototype,Y=V[f]||V["@@iterator"]||v&&V[v],X=Y||S(v),q=v?U?S("entries"):X:void 0,B=m=="Array"&&V.entries||Y;if(B&&(b=d(B.call(new g)))!==Object.prototype&&b.next&&(h(b,F,!0),s||typeof b[f]=="function"||l(b,f,p)),U&&Y&&Y.name!=="values"&&(G=!0,X=function(){return Y.call(this)}),s&&!w||!_&&!G&&V[f]||l(V,f,X),c[m]=X,c[F]=p,v)if(M={values:U?X:S("values"),keys:E?X:S("keys"),entries:q},w)for(A in M)A in V||a(V,A,M[A]);else o(o.P+o.F*(_||G),m,M);return M}},function(t,n,i){t.exports=!i(6)&&!i(17)(function(){return Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a!=7})},function(t,n,i){var s=i(10);t.exports=function(o,a){if(!s(o))return o;var l,c;if(a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o))||typeof(l=o.valueOf)=="function"&&!s(c=l.call(o))||!a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o)))return c;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i}},function(t,n,i){var s=i(38),o=i(11),a=i(26),l={};i(3)(l,i(0)("iterator"),function(){return this}),t.exports=function(c,u,h){c.prototype=s(l,{next:o(1,h)}),a(c,u+" Iterator")}},function(t,n,i){var s=i(5),o=i(39),a=i(25),l=i(14)("IE_PROTO"),c=function(){},u=function(){var h,d=i(18)("iframe"),f=a.length;for(d.style.display="none",i(45).appendChild(d),d.src="javascript:",h=d.contentWindow.document,h.open(),h.write("<script>document.F=Object<\/script>"),h.close(),u=h.F;f--;)delete u.prototype[a[f]];return u()};t.exports=Object.create||function(h,d){var f;return h!==null?(c.prototype=s(h),f=new c,c.prototype=null,f[l]=h):f=u(),d===void 0?f:o(f,d)}},function(t,n,i){var s=i(4),o=i(5),a=i(40);t.exports=i(6)?Object.defineProperties:function(l,c){o(l);for(var u,h=a(c),d=h.length,f=0;d>f;)s.f(l,u=h[f++],c[u]);return l}},function(t,n,i){var s=i(41),o=i(25);t.exports=Object.keys||function(a){return s(a,o)}},function(t,n,i){var s=i(7),o=i(21),a=i(43)(!1),l=i(14)("IE_PROTO");t.exports=function(c,u){var h,d=o(c),f=0,_=[];for(h in d)h!=l&&s(d,h)&&_.push(h);for(;u.length>f;)s(d,h=u[f++])&&(~a(_,h)||_.push(h));return _}},function(t,n,i){var s=i(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(o){return s(o)=="String"?o.split(""):Object(o)}},function(t,n,i){var s=i(21),o=i(23),a=i(44);t.exports=function(l){return function(c,u,h){var d,f=s(c),_=o(f.length),p=a(h,_);if(l&&u!=u){for(;_>p;)if((d=f[p++])!=d)return!0}else for(;_>p;p++)if((l||p in f)&&f[p]===u)return l||p||0;return!l&&-1}}},function(t,n,i){var s=i(8),o=Math.max,a=Math.min;t.exports=function(l,c){return l=s(l),l<0?o(l+c,0):a(l,c)}},function(t,n,i){var s=i(1).document;t.exports=s&&s.documentElement},function(t,n,i){var s=i(7),o=i(27),a=i(14)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(c){return c=o(c),s(c,a)?c[a]:typeof c.constructor=="function"&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?l:null}},function(t,n,i){var s=i(20),o=i(16),a=i(27),l=i(48),c=i(49),u=i(23),h=i(50),d=i(51);o(o.S+o.F*!i(53)(function(f){Array.from(f)}),"Array",{from:function(f){var _,p,g,m,x=a(f),y=typeof this=="function"?this:Array,v=arguments.length,E=v>1?arguments[1]:void 0,w=E!==void 0,M=0,A=d(x);if(w&&(E=s(E,v>2?arguments[2]:void 0,2)),A==null||y==Array&&c(A))for(_=u(x.length),p=new y(_);_>M;M++)h(p,M,w?E(x[M],M):x[M]);else for(m=A.call(x),p=new y;!(g=m.next()).done;M++)h(p,M,w?l(m,E,[g.value,M],!0):g.value);return p.length=M,p}})},function(t,n,i){var s=i(5);t.exports=function(o,a,l,c){try{return c?a(s(l)[0],l[1]):a(l)}catch(h){var u=o.return;throw u!==void 0&&s(u.call(o)),h}}},function(t,n,i){var s=i(13),o=i(0)("iterator"),a=Array.prototype;t.exports=function(l){return l!==void 0&&(s.Array===l||a[o]===l)}},function(t,n,i){var s=i(4),o=i(11);t.exports=function(a,l,c){l in a?s.f(a,l,o(0,c)):a[l]=c}},function(t,n,i){var s=i(52),o=i(0)("iterator"),a=i(13);t.exports=i(2).getIteratorMethod=function(l){if(l!=null)return l[o]||l["@@iterator"]||a[s(l)]}},function(t,n,i){var s=i(22),o=i(0)("toStringTag"),a=s((function(){return arguments})())=="Arguments",l=function(c,u){try{return c[u]}catch{}};t.exports=function(c){var u,h,d;return c===void 0?"Undefined":c===null?"Null":typeof(h=l(u=Object(c),o))=="string"?h:a?s(u):(d=s(u))=="Object"&&typeof u.callee=="function"?"Arguments":d}},function(t,n,i){var s=i(0)("iterator"),o=!1;try{var a=[7][s]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch{}t.exports=function(l,c){if(!c&&!o)return!1;var u=!1;try{var h=[7],d=h[s]();d.next=function(){return{done:u=!0}},h[s]=function(){return d},l(h)}catch{}return u}},function(t,n,i){function s(w){return w&&w.__esModule?w:{default:w}}function o(w,M){if(!(w instanceof M))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=(function(){function w(M,A){for(var b=0;b<A.length;b++){var S=A[b];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(M,S.key,S)}}return function(M,A,b){return A&&w(M.prototype,A),b&&w(M,b),M}})(),l=i(55),c=s(l),u=i(56),h=s(u),d=i(57),f=s(d),_=i(58),p=s(_),g=i(59),m=s(g),x=Math.PI,y=Math.max,v=Math.min,E=(function(){function w(M,A){o(this,w),this.element=M,this.originalHTML=this.element.innerHTML;var b=document.createElement("div"),S=document.createDocumentFragment();b.setAttribute("aria-label",M.innerText),b.style.position="relative",this.container=b,this._letters=(0,h.default)(M,A),this._letters.forEach(function(Y){return S.appendChild(Y)}),b.appendChild(S),this.element.innerHTML="",this.element.appendChild(b);var F=window.getComputedStyle(this.element),U=F.fontSize,G=F.lineHeight;this._fontSize=parseFloat(U),this._lineHeight=parseFloat(G)||this._fontSize,this._metrics=this._letters.map(c.default);var V=this._metrics.reduce(function(Y,X){return Y+X.width},0);this._minRadius=V/x/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}return a(w,[{key:"radius",value:function(M){return M!==void 0?(this._radius=y(this._minRadius,M),this._invalidate(),this):this._radius}},{key:"dir",value:function(M){return M!==void 0?(this._dir=M,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(M){return M!==void 0?(this._forceWidth=M,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(M){return M!==void 0?(this._forceHeight=M,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var M=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(function(){M._layout()}),this}},{key:"_layout",value:function(){var M=this,A=this._radius,b=this._dir,S=b===-1?-A+this._lineHeight:A,F="center "+S/this._fontSize+"em",U=A-this._lineHeight,G=(0,m.default)(this._metrics,U),V=G.rotations,Y=G.θ;if(this._letters.forEach(function(B,re){var I=B.style,ce=(-.5*Y+V[re])*b,ye=-.5*M._metrics[re].width/M._fontSize,we="translateX("+ye+"em) rotate("+ce+"deg)";I.position="absolute",I.bottom=b===-1?0:"auto",I.left="50%",I.transform=we,I.transformOrigin=F,I.webkitTransform=we,I.webkitTransformOrigin=F}),this._forceHeight){var X=Y>180?(0,f.default)(A,Y):(0,f.default)(U,Y)+this._lineHeight;this.container.style.height=X/this._fontSize+"em"}if(this._forceWidth){var q=(0,p.default)(A,v(180,Y));this.container.style.width=q/this._fontSize+"em"}return this}}]),w})();n.default=E},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(s){var o=s.getBoundingClientRect();return{height:o.height,left:o.left+window.pageXOffset,top:o.top+window.pageYOffset,width:o.width}}},function(t,n,i){function s(o){if(Array.isArray(o)){for(var a=0,l=Array(o.length);a<o.length;a++)l[a]=o[a];return l}return Array.from(o)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(o,a){var l=document.createElement("span"),c=o.innerText.trim();return(a?a(c):[].concat(s(c))).map(function(u){var h=l.cloneNode();return h.insertAdjacentHTML("afterbegin",u===" "?"&nbsp;":u),h})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a*(1-Math.cos((0,o.default)(l/2)))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return 2*a*Math.sin((0,o.default)(l/2))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(60),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a.reduce(function(c,u){var h=u.width,d=(0,o.default)(h/l);return{θ:c.θ+d,rotations:c.rotations.concat([c.θ+d/2])}},{θ:0,rotations:[]})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=180/Math.PI;n.default=function(o){return o*s}}])})})(dc)),dc.exports}var aA=oA();const lA=rA(aA);function Mf(r="unknown"){if(console.log(`rotateTitles called from ${r} at ${new Date().toISOString()}`),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running title rotation immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){if((r.match(/-retry/g)||[]).length>5){console.log("GIVING UP on title rotation after multiple retries");return}console.log("SKIPPING TITLE ROTATION - Transition still active, will retry later"),setTimeout(()=>Mf(r+"-retry"),100);return}console.log("RUNNING TITLE ROTATION - transition completed or initial load"),window.titleAnimationInterval&&(console.log(`Clearing existing titleAnimationInterval from ${r}`),clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null);const t=document.querySelectorAll("h2.titles-wrapper .title");if(!t||t.length===0){console.warn("No title elements found for rotation");return}t.forEach(a=>{a.style.position="absolute",a.style.display="block",a.classList.remove("active"),a.classList.add("hidden"),n(a.querySelectorAll(".char"))});function n(a){!a||a.length===0||a.forEach(l=>{l.classList.remove("reveal-char"),l.setAttribute("data-reset","true"),l.offsetWidth})}function i(a){return!a||a.length===0?null:(n(a),a.forEach((l,c)=>{setTimeout(()=>{l.removeAttribute("data-reset"),l.classList.add("reveal-char")},c*40)}),a[a.length-1])}const s=t[0];s&&(s.classList.remove("hidden"),s.classList.add("active"),s.offsetWidth,setTimeout(()=>{const a=s.querySelectorAll(".char");if(!a||a.length===0){o();return}const l=i(a);l?(l.addEventListener("animationend",function c(){o(),l.removeEventListener("animationend",c)}),setTimeout(()=>{window.titleAnimationInterval||o()},2e3)):o()},300));function o(){if(console.log("Starting title rotation"),window.titleAnimationInterval)return;const a=document.querySelectorAll("h2.titles-wrapper .title");let l=0;const c=()=>{const u=document.querySelectorAll("h2.titles-wrapper .title");if(!u||u.length===0){window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null);return}const h=document.querySelector("h2.titles-wrapper .title.active");h&&(h.classList.add("hidden"),h.classList.remove("active"),setTimeout(()=>{n(h.querySelectorAll(".char")),l=(l+1)%a.length;const d=a[l];d&&(d.style.position="absolute",d.style.display="block",n(d.querySelectorAll(".char")),setTimeout(()=>{d.classList.remove("hidden"),d.classList.add("active"),setTimeout(()=>{const f=d.querySelectorAll(".char");i(f)},300)},100))},400))};window.titleAnimationInterval=setInterval(()=>{c()},5e3)}}function Lc(){if(console.log("revealH1Characters called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running H1 animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING H1 ANIMATION - Transition still active, will retry later"),setTimeout(Lc,100);return}console.log("RUNNING H1 ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("h1");if(e.length===0){console.warn("No H1 elements found to animate");return}console.log(`Found ${e.length} H1 elements to animate`);const t=document.querySelector("#index")!==null;e.forEach(n=>{const i=n.querySelectorAll(".char");if(i.length>0)if(console.log(`Animating ${i.length} characters in H1`),i.forEach(s=>{s.classList.remove("reveal-char"),s.style.visibility="visible",s.style.color="transparent",s.offsetWidth}),n.style.opacity="1",n.style.pointerEvents="auto",t){console.log("Running homepage-specific H1 character animations"),i.forEach((o,a)=>{We.killTweensOf(o),o.classList.remove("reveal-char");const l=a<3?45*(a+1):45+a*35;setTimeout(()=>{o.classList.add("reveal-char"),o.offsetWidth},l)});const s=n.parentElement;s&&We.fromTo(s,{filter:"brightness(1.08)"},{filter:"brightness(1)",duration:.6,yoyo:!0,repeat:1,ease:"sine.inOut",onComplete:()=>We.set(s,{clearProps:"filter"})})}else i.forEach((s,o)=>{setTimeout(()=>{s.classList.add("reveal-char")},50+o*25)});else console.warn("H1 element doesn't have .char elements. Make sure splitText() was called first.")})}function Dc(){if(console.log("animateDataSplittingChars called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running data-splitting animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING DATA-SPLITTING ANIMATION - Transition still active, will retry later"),setTimeout(Dc,100);return}console.log("RUNNING DATA-SPLITTING ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("[data-splitting]:not(.titles-wrapper):not(.titles-wrapper *):not(h1):not(.splitting-rows)");if(e.length===0){console.log("No data-splitting elements found to animate");return}console.log(`Found ${e.length} data-splitting elements to animate`),e.forEach(t=>{const n=t.querySelectorAll(".char");n.length>0?(t.style.opacity="1",t.style.pointerEvents="auto",n.forEach((i,s)=>{i.classList.remove("reveal-char"),i.style.visibility="visible",i.style.color="transparent",i.offsetWidth,setTimeout(()=>{i.classList.add("reveal-char")},s*25)})):console.warn("Element with data-splitting doesn't have .char elements. Make sure splitText() was called first.")})}function E0(){setTimeout(()=>{const r=document.querySelector(".circular-text");r&&(new lA(r).radius(120),window.addEventListener("scroll",function(){r.style.transform=`rotate(${window.scrollY*-.15}deg)`}))},1e3)}function cA(){const r=document.getElementById("resume-nav-link");r&&(r.style.display="none");const e=document.querySelector('[data-project="scholastic"]');e&&(e.style.display="none")}function T0(){fetch("https://ipapi.co/json/").then(r=>r.json()).then(r=>{const e=r.region_code==="DC",t=r.region_code==="MD"&&["Montgomery","Prince George's"].includes(r.city)||r.region_code==="VA"&&["Arlington","Alexandria","Fairfax","Falls Church"].includes(r.city);(e||t)&&cA()}).catch(r=>console.error("Error:",r))}function uA(){document.querySelectorAll(".fade-in").forEach(e=>{e.addEventListener("animationend",()=>{e.classList.add("has-faded-in")},{once:!0})})}const hA=On;class Ic extends il{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new KS(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(N,O){if(N.nodeType!==1)return;const L=v(N);let R=!1,K=null;switch(N.nodeName){case"svg":O=_(N,O);break;case"style":s(N);break;case"g":O=_(N,O);break;case"path":O=_(N,O),N.hasAttribute("d")&&(K=i(N));break;case"rect":O=_(N,O),K=l(N);break;case"polygon":O=_(N,O),K=c(N);break;case"polyline":O=_(N,O),K=u(N);break;case"circle":O=_(N,O),K=h(N);break;case"ellipse":O=_(N,O),K=d(N);break;case"line":O=_(N,O),K=f(N);break;case"defs":R=!0;break;case"use":O=_(N,O);const me=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ee=N.viewportElement.getElementById(me);ee?n(ee,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+me);break}K&&(O.fill!==void 0&&O.fill!=="none"&&K.color.setStyle(O.fill,hA),w(K,ce),U.push(K),K.userData={node:N,style:O});const de=N.childNodes;for(let $=0;$<de.length;$++){const me=de[$];R&&me.nodeName!=="style"&&me.nodeName!=="defs"||n(me,O)}L&&(V.pop(),V.length>0?ce.copy(V[V.length-1]):ce.identity())}function i(N){const O=new Zr,L=new ve,R=new ve,K=new ve;let de=!0,$=!1;const me=N.getAttribute("d");if(me===""||me==="none")return null;const ee=me.match(/[a-df-z][^a-df-z]*/ig);for(let j=0,T=ee.length;j<T;j++){const se=ee[j],ne=se.charAt(0),z=se.slice(1).trim();de===!0&&($=!0,de=!1);let H;switch(ne){case"M":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x=H[k+0],L.y=H[k+1],R.x=L.x,R.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&K.copy(L);break;case"H":H=g(z);for(let k=0,he=H.length;k<he;k++)L.x=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"V":H=g(z);for(let k=0,he=H.length;k<he;k++)L.y=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"L":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x=H[k+0],L.y=H[k+1],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"C":H=g(z);for(let k=0,he=H.length;k<he;k+=6)O.bezierCurveTo(H[k+0],H[k+1],H[k+2],H[k+3],H[k+4],H[k+5]),R.x=H[k+2],R.y=H[k+3],L.x=H[k+4],L.y=H[k+5],k===0&&$===!0&&K.copy(L);break;case"S":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.bezierCurveTo(p(L.x,R.x),p(L.y,R.y),H[k+0],H[k+1],H[k+2],H[k+3]),R.x=H[k+0],R.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&K.copy(L);break;case"Q":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.quadraticCurveTo(H[k+0],H[k+1],H[k+2],H[k+3]),R.x=H[k+0],R.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&K.copy(L);break;case"T":H=g(z);for(let k=0,he=H.length;k<he;k+=2){const D=p(L.x,R.x),C=p(L.y,R.y);O.quadraticCurveTo(D,C,H[k+0],H[k+1]),R.x=D,R.y=C,L.x=H[k+0],L.y=H[k+1],k===0&&$===!0&&K.copy(L)}break;case"A":H=g(z,[3,4],7);for(let k=0,he=H.length;k<he;k+=7){if(H[k+5]==L.x&&H[k+6]==L.y)continue;const D=L.clone();L.x=H[k+5],L.y=H[k+6],R.x=L.x,R.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],D,L),k===0&&$===!0&&K.copy(L)}break;case"m":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x+=H[k+0],L.y+=H[k+1],R.x=L.x,R.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&K.copy(L);break;case"h":H=g(z);for(let k=0,he=H.length;k<he;k++)L.x+=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"v":H=g(z);for(let k=0,he=H.length;k<he;k++)L.y+=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"l":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x+=H[k+0],L.y+=H[k+1],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&K.copy(L);break;case"c":H=g(z);for(let k=0,he=H.length;k<he;k+=6)O.bezierCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3],L.x+H[k+4],L.y+H[k+5]),R.x=L.x+H[k+2],R.y=L.y+H[k+3],L.x+=H[k+4],L.y+=H[k+5],k===0&&$===!0&&K.copy(L);break;case"s":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.bezierCurveTo(p(L.x,R.x),p(L.y,R.y),L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),R.x=L.x+H[k+0],R.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&K.copy(L);break;case"q":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.quadraticCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),R.x=L.x+H[k+0],R.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&K.copy(L);break;case"t":H=g(z);for(let k=0,he=H.length;k<he;k+=2){const D=p(L.x,R.x),C=p(L.y,R.y);O.quadraticCurveTo(D,C,L.x+H[k+0],L.y+H[k+1]),R.x=D,R.y=C,L.x=L.x+H[k+0],L.y=L.y+H[k+1],k===0&&$===!0&&K.copy(L)}break;case"a":H=g(z,[3,4],7);for(let k=0,he=H.length;k<he;k+=7){if(H[k+5]==0&&H[k+6]==0)continue;const D=L.clone();L.x+=H[k+5],L.y+=H[k+6],R.x=L.x,R.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],D,L),k===0&&$===!0&&K.copy(L)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(L.copy(K),O.currentPath.currentPoint.copy(L),de=!0);break;default:console.warn(se)}$=!1}return O}function s(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let O=0;O<N.sheet.cssRules.length;O++){const L=N.sheet.cssRules[O];if(L.type!==1)continue;const R=L.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<R.length;K++){const de=Object.fromEntries(Object.entries(L.style).filter(([,$])=>$!==""));G[R[K]]=Object.assign(G[R[K]]||{},de)}}}function o(N,O,L,R,K,de,$,me){if(O==0||L==0){N.lineTo(me.x,me.y);return}R=R*Math.PI/180,O=Math.abs(O),L=Math.abs(L);const ee=($.x-me.x)/2,j=($.y-me.y)/2,T=Math.cos(R)*ee+Math.sin(R)*j,se=-Math.sin(R)*ee+Math.cos(R)*j;let ne=O*O,z=L*L;const H=T*T,k=se*se,he=H/ne+k/z;if(he>1){const $e=Math.sqrt(he);O=$e*O,L=$e*L,ne=O*O,z=L*L}const D=ne*k+z*H,C=(ne*z-D)/D;let te=Math.sqrt(Math.max(0,C));K===de&&(te=-te);const le=te*O*se/L,fe=-te*L*T/O,pe=Math.cos(R)*le-Math.sin(R)*fe+($.x+me.x)/2,Ee=Math.sin(R)*le+Math.cos(R)*fe+($.y+me.y)/2,be=a(1,0,(T-le)/O,(se-fe)/L),Te=a((T-le)/O,(se-fe)/L,(-T-le)/O,(-se-fe)/L)%(Math.PI*2);N.currentPath.absellipse(pe,Ee,O,L,be,be+Te,de===0,R)}function a(N,O,L,R){const K=N*L+O*R,de=Math.sqrt(N*N+O*O)*Math.sqrt(L*L+R*R);let $=Math.acos(Math.max(-1,Math.min(1,K/de)));return N*R-O*L<0&&($=-$),$}function l(N){const O=y(N.getAttribute("x")||0),L=y(N.getAttribute("y")||0),R=y(N.getAttribute("rx")||N.getAttribute("ry")||0),K=y(N.getAttribute("ry")||N.getAttribute("rx")||0),de=y(N.getAttribute("width")),$=y(N.getAttribute("height")),me=1-.551915024494,ee=new Zr;return ee.moveTo(O+R,L),ee.lineTo(O+de-R,L),(R!==0||K!==0)&&ee.bezierCurveTo(O+de-R*me,L,O+de,L+K*me,O+de,L+K),ee.lineTo(O+de,L+$-K),(R!==0||K!==0)&&ee.bezierCurveTo(O+de,L+$-K*me,O+de-R*me,L+$,O+de-R,L+$),ee.lineTo(O+R,L+$),(R!==0||K!==0)&&ee.bezierCurveTo(O+R*me,L+$,O,L+$-K*me,O,L+$-K),ee.lineTo(O,L+K),(R!==0||K!==0)&&ee.bezierCurveTo(O,L+K*me,O+R*me,L,O+R,L),ee}function c(N){function O(de,$,me){const ee=y($),j=y(me);K===0?R.moveTo(ee,j):R.lineTo(ee,j),K++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Zr;let K=0;return N.getAttribute("points").replace(L,O),R.currentPath.autoClose=!0,R}function u(N){function O(de,$,me){const ee=y($),j=y(me);K===0?R.moveTo(ee,j):R.lineTo(ee,j),K++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Zr;let K=0;return N.getAttribute("points").replace(L,O),R.currentPath.autoClose=!1,R}function h(N){const O=y(N.getAttribute("cx")||0),L=y(N.getAttribute("cy")||0),R=y(N.getAttribute("r")||0),K=new Mo;K.absarc(O,L,R,0,Math.PI*2);const de=new Zr;return de.subPaths.push(K),de}function d(N){const O=y(N.getAttribute("cx")||0),L=y(N.getAttribute("cy")||0),R=y(N.getAttribute("rx")||0),K=y(N.getAttribute("ry")||0),de=new Mo;de.absellipse(O,L,R,K,0,Math.PI*2);const $=new Zr;return $.subPaths.push(de),$}function f(N){const O=y(N.getAttribute("x1")||0),L=y(N.getAttribute("y1")||0),R=y(N.getAttribute("x2")||0),K=y(N.getAttribute("y2")||0),de=new Zr;return de.moveTo(O,L),de.lineTo(R,K),de.currentPath.autoClose=!1,de}function _(N,O){O=Object.assign({},O);let L={};if(N.hasAttribute("class")){const $=N.getAttribute("class").split(/\s/).filter(Boolean).map(me=>me.trim());for(let me=0;me<$.length;me++)L=Object.assign(L,G["."+$[me]])}N.hasAttribute("id")&&(L=Object.assign(L,G["#"+N.getAttribute("id")]));function R($,me,ee){ee===void 0&&(ee=function(T){return T.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),T}),N.hasAttribute($)&&(O[me]=ee(N.getAttribute($))),L[$]&&(O[me]=ee(L[$])),N.style&&N.style[$]!==""&&(O[me]=ee(N.style[$]))}function K($){return Math.max(0,Math.min(1,y($)))}function de($){return Math.max(0,y($))}return R("fill","fill"),R("fill-opacity","fillOpacity",K),R("fill-rule","fillRule"),R("opacity","opacity",K),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",K),R("stroke-width","strokeWidth",de),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",de),R("visibility","visibility"),O}function p(N,O){return N-(O-N)}function g(N,O,L){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,de=1,$=2,me=3;let ee=K,j=!0,T="",se="";const ne=[];function z(D,C,te){const le=new SyntaxError('Unexpected character "'+D+'" at index '+C+".");throw le.partial=te,le}function H(){T!==""&&(se===""?ne.push(Number(T)):ne.push(Number(T)*Math.pow(10,Number(se)))),T="",se=""}let k;const he=N.length;for(let D=0;D<he;D++){if(k=N[D],Array.isArray(O)&&O.includes(ne.length%L)&&R.FLAGS.test(k)){ee=de,T=k,H();continue}if(ee===K){if(R.WHITESPACE.test(k))continue;if(R.DIGIT.test(k)||R.SIGN.test(k)){ee=de,T=k;continue}if(R.POINT.test(k)){ee=$,T=k;continue}R.COMMA.test(k)&&(j&&z(k,D,ne),j=!0)}if(ee===de){if(R.DIGIT.test(k)){T+=k;continue}if(R.POINT.test(k)){T+=k,ee=$;continue}if(R.EXP.test(k)){ee=me;continue}R.SIGN.test(k)&&T.length===1&&R.SIGN.test(T[0])&&z(k,D,ne)}if(ee===$){if(R.DIGIT.test(k)){T+=k;continue}if(R.EXP.test(k)){ee=me;continue}R.POINT.test(k)&&T[T.length-1]==="."&&z(k,D,ne)}if(ee===me){if(R.DIGIT.test(k)){se+=k;continue}if(R.SIGN.test(k)){if(se===""){se+=k;continue}se.length===1&&R.SIGN.test(se)&&z(k,D,ne)}}R.WHITESPACE.test(k)?(H(),ee=K,j=!1):R.COMMA.test(k)?(H(),ee=K,j=!0):R.SIGN.test(k)?(H(),ee=de,T=k):R.POINT.test(k)?(H(),ee=$,T=k):z(k,D,ne)}return H(),ne}const m=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(N){let O="px";if(typeof N=="string"||N instanceof String)for(let R=0,K=m.length;R<K;R++){const de=m[R];if(N.endsWith(de)){O=de,N=N.substring(0,N.length-de.length);break}}let L;return O==="px"&&t.defaultUnit!=="px"?L=x.in[t.defaultUnit]/t.defaultDPI:(L=x[O][t.defaultUnit],L<0&&(L=x[O].in*t.defaultDPI)),L*parseFloat(N)}function v(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const O=E(N);return V.length>0&&O.premultiply(V[V.length-1]),ce.copy(O),V.push(O),O}function E(N){const O=new Ke,L=Y;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const R=y(N.getAttribute("x")),K=y(N.getAttribute("y"));O.translate(R,K)}if(N.hasAttribute("transform")){const R=N.getAttribute("transform").split(")");for(let K=R.length-1;K>=0;K--){const de=R[K].trim();if(de==="")continue;const $=de.indexOf("("),me=de.length;if($>0&&$<me){const ee=de.slice(0,$),j=g(de.slice($+1));switch(L.identity(),ee){case"translate":if(j.length>=1){const T=j[0];let se=0;j.length>=2&&(se=j[1]),L.translate(T,se)}break;case"rotate":if(j.length>=1){let T=0,se=0,ne=0;T=j[0]*Math.PI/180,j.length>=3&&(se=j[1],ne=j[2]),X.makeTranslation(-se,-ne),q.makeRotation(T),B.multiplyMatrices(q,X),X.makeTranslation(se,ne),L.multiplyMatrices(X,B)}break;case"scale":if(j.length>=1){const T=j[0];let se=T;j.length>=2&&(se=j[1]),L.scale(T,se)}break;case"skewX":j.length===1&&L.set(1,Math.tan(j[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":j.length===1&&L.set(1,0,0,Math.tan(j[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":j.length===6&&L.set(j[0],j[2],j[4],j[1],j[3],j[5],0,0,1);break}}O.premultiply(L)}}return O}function w(N,O){function L($){I.set($.x,$.y,1).applyMatrix3(O),$.set(I.x,I.y)}function R($){const me=$.xRadius,ee=$.yRadius,j=Math.cos($.aRotation),T=Math.sin($.aRotation),se=new J(me*j,me*T,0),ne=new J(-ee*T,ee*j,0),z=se.applyMatrix3(O),H=ne.applyMatrix3(O),k=Y.set(z.x,H.x,0,z.y,H.y,0,0,0,1),he=X.copy(k).invert(),te=q.copy(he).transpose().multiply(he).elements,le=F(te[0],te[1],te[4]),fe=Math.sqrt(le.rt1),pe=Math.sqrt(le.rt2);if($.xRadius=1/fe,$.yRadius=1/pe,$.aRotation=Math.atan2(le.sn,le.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const be=X.set(fe,0,0,0,pe,0,0,0,1),Te=q.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),$e=be.multiply(Te).multiply(k),Se=Me=>{const{x:Xe,y:ze}=new J(Math.cos(Me),Math.sin(Me),0).applyMatrix3($e);return Math.atan2(ze,Xe)};$.aStartAngle=Se($.aStartAngle),$.aEndAngle=Se($.aEndAngle),M(O)&&($.aClockwise=!$.aClockwise)}}function K($){const me=b(O),ee=S(O);$.xRadius*=me,$.yRadius*=ee;const j=me>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);$.aRotation+=j,M(O)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const de=N.subPaths;for(let $=0,me=de.length;$<me;$++){const j=de[$].curves;for(let T=0;T<j.length;T++){const se=j[T];se.isLineCurve?(L(se.v1),L(se.v2)):se.isCubicBezierCurve?(L(se.v0),L(se.v1),L(se.v2),L(se.v3)):se.isQuadraticBezierCurve?(L(se.v0),L(se.v1),L(se.v2)):se.isEllipseCurve&&(re.set(se.aX,se.aY),L(re),se.aX=re.x,se.aY=re.y,A(O)?R(se):K(se))}}}function M(N){const O=N.elements;return O[0]*O[4]-O[1]*O[3]<0}function A(N){const O=N.elements,L=O[0]*O[3]+O[1]*O[4];if(L===0)return!1;const R=b(N),K=S(N);return Math.abs(L/(R*K))>Number.EPSILON}function b(N){const O=N.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function S(N){const O=N.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function F(N,O,L){let R,K,de,$,me;const ee=N+L,j=N-L,T=Math.sqrt(j*j+4*O*O);return ee>0?(R=.5*(ee+T),me=1/R,K=N*me*L-O*me*O):ee<0?K=.5*(ee-T):(R=.5*T,K=-.5*T),j>0?de=j+T:de=j-T,Math.abs(de)>2*Math.abs(O)?(me=-2*O/de,$=1/Math.sqrt(1+me*me),de=me*$):Math.abs(O)===0?(de=1,$=0):(me=-.5*de/O,de=1/Math.sqrt(1+me*me),$=me*de),j>0&&(me=de,de=-$,$=me),{rt1:R,rt2:K,cs:de,sn:$}}const U=[],G={},V=[],Y=new Ke,X=new Ke,q=new Ke,B=new Ke,re=new ve,I=new J,ce=new Ke,ye=new DOMParser().parseFromString(e,"image/svg+xml");return n(ye.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:ye.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(p,g,m,x){const y=p.x,v=g.x,E=m.x,w=x.x,M=p.y,A=g.y,b=m.y,S=x.y,F=(w-E)*(M-b)-(S-b)*(y-E),U=(v-y)*(M-b)-(A-M)*(y-E),G=(S-b)*(v-y)-(w-E)*(A-M),V=F/G,Y=U/G;if(G===0&&F!==0||V<=0||V>=1||Y<0||Y>1)return null;if(F===0&&G===0){for(let X=0;X<2;X++)if(o(X===0?m:x,p,g),i.loc==n.ORIGIN){const q=X===0?m:x;return{x:q.x,y:q.y,t:i.t}}else if(i.loc==n.BETWEEN){const q=+(y+i.t*(v-y)).toPrecision(10),B=+(M+i.t*(A-M)).toPrecision(10);return{x:q,y:B,t:i.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?m:x,p,g),i.loc==n.ORIGIN){const re=B===0?m:x;return{x:re.x,y:re.y,t:i.t}}const X=+(y+V*(v-y)).toPrecision(10),q=+(M+V*(A-M)).toPrecision(10);return{x:X,y:q,t:V}}}function o(p,g,m){const x=m.x-g.x,y=m.y-g.y,v=p.x-g.x,E=p.y-g.y,w=x*E-v*y;if(p.x===g.x&&p.y===g.y){i.loc=n.ORIGIN,i.t=0;return}if(p.x===m.x&&p.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(w<-Number.EPSILON){i.loc=n.LEFT;return}if(w>Number.EPSILON){i.loc=n.RIGHT;return}if(x*v<0||y*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(x*x+y*y)<Math.sqrt(v*v+E*E)){i.loc=n.BEYOND;return}let M;x!==0?M=v/x:M=E/y,i.loc=n.BETWEEN,i.t=M}function a(p,g){const m=[],x=[];for(let y=1;y<p.length;y++){const v=p[y-1],E=p[y];for(let w=1;w<g.length;w++){const M=g[w-1],A=g[w],b=s(v,E,M,A);b!==null&&m.find(S=>S.t<=b.t+Number.EPSILON&&S.t>=b.t-Number.EPSILON)===void 0&&(m.push(b),x.push(new ve(b.x,b.y)))}}return x}function l(p,g,m){const x=new ve;g.getCenter(x);const y=[];return m.forEach(v=>{v.boundingBox.containsPoint(x)&&a(p,v.points).forEach(w=>{y.push({identifier:v.identifier,isCW:v.isCW,point:w})})}),y.sort((v,E)=>v.point.x-E.point.x),y}function c(p,g,m,x,y){(y==null||y==="")&&(y="nonzero");const v=new ve;p.boundingBox.getCenter(v);const E=[new ve(m,v.y),new ve(x,v.y)],w=l(E,p.boundingBox,g);w.sort((U,G)=>U.point.x-G.point.x);const M=[],A=[];w.forEach(U=>{U.identifier===p.identifier?M.push(U):A.push(U)});const b=M[0].point.x,S=[];let F=0;for(;F<A.length&&A[F].point.x<b;)S.length>0&&S[S.length-1]===A[F].identifier?S.pop():S.push(A[F].identifier),F++;if(S.push(p.identifier),y==="evenodd"){const U=S.length%2===0,G=S[S.length-2];return{identifier:p.identifier,isHole:U,for:G}}else if(y==="nonzero"){let U=!0,G=null,V=null;for(let Y=0;Y<S.length;Y++){const X=S[Y];U?(V=g[X].isCW,U=!1,G=X):V!==g[X].isCW&&(V=g[X].isCW,U=!0)}return{identifier:p.identifier,isHole:U,for:G}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,h=-999999999,d=e.subPaths.map(p=>{const g=p.getPoints();let m=-999999999,x=999999999,y=-999999999,v=999999999;for(let E=0;E<g.length;E++){const w=g[E];w.y>m&&(m=w.y),w.y<x&&(x=w.y),w.x>y&&(y=w.x),w.x<v&&(v=w.x)}return h<=y&&(h=y+1),u>=v&&(u=v-1),{curves:p.curves,points:g,isCW:bs.isClockWise(g),identifier:-1,boundingBox:new lb(new ve(v,x),new ve(y,m))}});d=d.filter(p=>p.points.length>1);for(let p=0;p<d.length;p++)d[p].identifier=p;const f=d.map(p=>c(p,d,u,h,e.userData?e.userData.style.fillRule:void 0)),_=[];return d.forEach(p=>{if(!f[p.identifier].isHole){const m=new Pa;m.curves=p.curves,f.filter(y=>y.isHole&&y.for===p.identifier).forEach(y=>{const v=d[y.identifier],E=new Mo;E.curves=v.curves,m.holes.push(E)}),_.push(m)}}),_}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(Ic.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new ur;return l.setAttribute("position",new gi(s,3)),l.setAttribute("normal",new gi(o,3)),l.setAttribute("uv",new gi(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new ve,u=new ve,h=new ve,d=new ve,f=new ve,_=new ve,p=new ve,g=new ve,m=new ve,x=new ve,y=new ve,v=new ve,E=new ve,w=new ve,M=new ve,A=new ve,b=new ve;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=j(e);const S=e.length;if(S<2)return 0;const F=e[0].equals(e[S-1]);let U,G=e[0],V;const Y=t.strokeWidth/2,X=1/(S-1);let q=0,B,re,I,ce,ye=!1,we=0,N=l*3,O=l*2;L(e[0],e[1],c).multiplyScalar(Y),g.copy(e[0]).sub(c),m.copy(e[0]).add(c),x.copy(g),y.copy(m);for(let T=1;T<S;T++){U=e[T],T===S-1?F?V=e[1]:V=void 0:V=e[T+1];const se=c;if(L(G,U,se),h.copy(se).multiplyScalar(Y),v.copy(U).sub(h),E.copy(U).add(h),B=q+X,re=!1,V!==void 0){L(U,V,u),h.copy(u).multiplyScalar(Y),w.copy(U).sub(h),M.copy(U).add(h),I=!0,h.subVectors(V,G),se.dot(h)<0&&(I=!1),T===1&&(ye=I),h.subVectors(V,U),h.normalize();const ne=Math.abs(se.dot(h));if(ne>Number.EPSILON){const z=Y/ne;h.multiplyScalar(-z),d.subVectors(U,G),f.copy(d).setLength(z).add(h),A.copy(f).negate();const H=f.length(),k=d.length();d.divideScalar(k),_.subVectors(V,U);const he=_.length();switch(_.divideScalar(he),d.dot(A)<k&&_.dot(A)<he&&(re=!0),b.copy(f).add(U),A.add(U),ce=!1,re?I?(M.copy(A),E.copy(A)):(w.copy(A),v.copy(A)):de(),t.strokeLineJoin){case"bevel":$(I,re,B);break;case"round":me(I,re),I?K(U,v,w,B,0):K(U,M,E,B,1);break;case"miter":case"miter-clip":default:const D=Y*t.strokeMiterLimit/H;if(D<1)if(t.strokeLineJoin!=="miter-clip"){$(I,re,B);break}else me(I,re),I?(_.subVectors(b,v).multiplyScalar(D).add(v),p.subVectors(b,w).multiplyScalar(D).add(w),R(v,B,0),R(_,B,0),R(U,B,.5),R(U,B,.5),R(_,B,0),R(p,B,0),R(U,B,.5),R(p,B,0),R(w,B,0)):(_.subVectors(b,E).multiplyScalar(D).add(E),p.subVectors(b,M).multiplyScalar(D).add(M),R(E,B,1),R(_,B,1),R(U,B,.5),R(U,B,.5),R(_,B,1),R(p,B,1),R(U,B,.5),R(p,B,1),R(M,B,1));else re?(I?(R(m,q,1),R(g,q,0),R(b,B,0),R(m,q,1),R(b,B,0),R(A,B,1)):(R(m,q,1),R(g,q,0),R(b,B,1),R(g,q,0),R(A,B,0),R(b,B,1)),I?w.copy(b):M.copy(b)):I?(R(v,B,0),R(b,B,0),R(U,B,.5),R(U,B,.5),R(b,B,0),R(w,B,0)):(R(E,B,1),R(b,B,1),R(U,B,.5),R(U,B,.5),R(b,B,1),R(M,B,1)),ce=!0;break}}else de()}else de();!F&&T===S-1&&ee(e[0],x,y,I,!0,q),q=B,G=U,g.copy(w),m.copy(M)}if(!F)ee(U,v,E,I,!1,B);else if(re&&s){let T=b,se=A;ye!==I&&(T=A,se=b),I?(ce||ye)&&(se.toArray(s,0),se.toArray(s,9),ce&&T.toArray(s,3)):(ce||!ye)&&(se.toArray(s,3),se.toArray(s,9),ce&&T.toArray(s,0))}return we;function L(T,se,ne){return ne.subVectors(se,T),ne.set(-ne.y,ne.x).normalize()}function R(T,se,ne){s&&(s[N]=T.x,s[N+1]=T.y,s[N+2]=0,o&&(o[N]=0,o[N+1]=0,o[N+2]=1),N+=3,a&&(a[O]=se,a[O+1]=ne,O+=2)),we+=3}function K(T,se,ne,z,H){c.copy(se).sub(T).normalize(),u.copy(ne).sub(T).normalize();let k=Math.PI;const he=c.dot(u);Math.abs(he)<1&&(k=Math.abs(Math.acos(he))),k/=n,h.copy(se);for(let D=0,C=n-1;D<C;D++)d.copy(h).rotateAround(T,k),R(h,z,H),R(d,z,H),R(T,z,.5),h.copy(d);R(d,z,H),R(ne,z,H),R(T,z,.5)}function de(){R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(E,B,1)}function $(T,se,ne){se?T?(R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(A,B,1),R(v,ne,0),R(w,ne,0),R(A,ne,.5)):(R(m,q,1),R(g,q,0),R(E,B,1),R(g,q,0),R(A,B,0),R(E,B,1),R(E,ne,1),R(A,ne,0),R(M,ne,1)):T?(R(v,ne,0),R(w,ne,0),R(U,ne,.5)):(R(E,ne,1),R(M,ne,0),R(U,ne,.5))}function me(T,se){se&&(T?(R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(A,B,1),R(v,q,0),R(U,B,.5),R(A,B,1),R(U,B,.5),R(w,q,0),R(A,B,1)):(R(m,q,1),R(g,q,0),R(E,B,1),R(g,q,0),R(A,B,0),R(E,B,1),R(E,q,1),R(A,B,0),R(U,B,.5),R(U,B,.5),R(A,B,0),R(M,q,1)))}function ee(T,se,ne,z,H,k){switch(t.strokeLineCap){case"round":H?K(T,ne,se,k,.5):K(T,se,ne,k,.5);break;case"square":if(H)c.subVectors(se,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T),z?(h.toArray(s,3),d.toArray(s,0),d.toArray(s,9)):(h.toArray(s,3),a[7]===1?d.toArray(s,9):h.toArray(s,9),d.toArray(s,0));else{c.subVectors(ne,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T);const he=s.length;z?(h.toArray(s,he-3),d.toArray(s,he-6),d.toArray(s,he-12)):(d.toArray(s,he-6),h.toArray(s,he-3),d.toArray(s,he-12))}break}}function j(T){let se=!1;for(let z=1,H=T.length-1;z<H;z++)if(T[z].distanceTo(T[z+1])<i){se=!0;break}if(!se)return T;const ne=[];ne.push(T[0]);for(let z=1,H=T.length-1;z<H;z++)T[z].distanceTo(T[z+1])>=i&&ne.push(T[z]);return ne.push(T[T.length-1]),ne}}}function dA(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function ho(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Rm=Array.prototype.forEach,ta=Array.prototype.slice,_e={BREAK:{},extend:function(e){return this.each(ta.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(ta.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=ta.call(arguments);return function(){for(var t=ta.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Rm&&e.forEach&&e.forEach===Rm)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():ta.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e})(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},fA=[{litmus:_e.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ho},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ho},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ho},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ho}}},{litmus:_e.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:_e.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:_e.isObject,conversions:{RGBA_OBJ:{read:function(e){return _e.isNumber(e.r)&&_e.isNumber(e.g)&&_e.isNumber(e.b)&&_e.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return _e.isNumber(e.r)&&_e.isNumber(e.g)&&_e.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return _e.isNumber(e.h)&&_e.isNumber(e.s)&&_e.isNumber(e.v)&&_e.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return _e.isNumber(e.h)&&_e.isNumber(e.s)&&_e.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],na=void 0,$l=void 0,_d=function(){$l=!1;var e=arguments.length>1?_e.toArray(arguments):arguments[0];return _e.each(fA,function(t){if(t.litmus(e))return _e.each(t.conversions,function(n,i){if(na=n.read(e),$l===!1&&na!==!1)return $l=na,na.conversionName=i,na.conversion=n,_e.BREAK}),_e.BREAK}),$l},Pm=void 0,Oc={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Pm=t*8)|e&~(255<<Pm)}},pA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ti=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ai=(function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}})(),Br=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Hr=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Vr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},sn=(function(){function r(){if(Ti(this,r),this.__state=_d.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ai(r,[{key:"toString",value:function(){return ho(this)}},{key:"toHexString",value:function(){return ho(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r})();function wf(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(sn.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(sn.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Ef(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(sn.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(sn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}sn.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Oc.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")_e.extend(r.__state,Oc.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};sn.recalculateHSV=function(r){var e=Oc.rgb_to_hsv(r.r,r.g,r.b);_e.extend(r.__state,{s:e.s,v:e.v}),_e.isNaN(e.h)?_e.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};sn.COMPONENTS=["r","g","b","h","s","v","hex","a"];wf(sn.prototype,"r",2);wf(sn.prototype,"g",1);wf(sn.prototype,"b",0);Ef(sn.prototype,"h");Ef(sn.prototype,"s");Ef(sn.prototype,"v");Object.defineProperty(sn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(sn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Oc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Os=(function(){function r(e,t){Ti(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ai(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r})(),mA={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},A0={};_e.each(mA,function(r,e){_e.each(r,function(t){A0[t]=e})});var gA=/(\d+(\.\d+)?)px/;function Ci(r){if(r==="0"||_e.isUndefined(r))return 0;var e=r.match(gA);return _e.isNull(e)?0:parseFloat(e[1])}var ae={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;_e.isUndefined(s)&&(s=!0),_e.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=A0[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;_e.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}_e.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),ae},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),ae},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ae},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return ae},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ci(t["border-left-width"])+Ci(t["border-right-width"])+Ci(t["padding-left"])+Ci(t["padding-right"])+Ci(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ci(t["border-top-width"])+Ci(t["border-bottom-width"])+Ci(t["padding-top"])+Ci(t["padding-bottom"])+Ci(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},C0=(function(r){Hr(e,r);function e(t,n){Ti(this,e);var i=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return ae.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ai(e,[{key:"setValue",value:function(n){var i=Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Os),_A=(function(r){Hr(e,r);function e(t,n,i){Ti(this,e);var s=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),_e.isArray(o)){var l={};_e.each(o,function(c){l[c]=c}),o=l}return _e.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),ae.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ai(e,[{key:"setValue",value:function(n){var i=Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return ae.isActive(this.__select)?this:(this.__select.value=this.getValue(),Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(Os),vA=(function(r){Hr(e,r);function e(t,n){Ti(this,e);var i=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),ae.bind(i.__input,"keyup",o),ae.bind(i.__input,"change",o),ae.bind(i.__input,"blur",a),ae.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ai(e,[{key:"updateDisplay",value:function(){return ae.isActive(this.__input)||(this.__input.value=this.getValue()),Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Os);function Lm(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var R0=(function(r){Hr(e,r);function e(t,n,i){Ti(this,e);var s=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,_e.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Lm(s.__impliedStep),s}return Ai(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Lm(n),this}}]),e})(Os);function yA(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Fc=(function(r){Hr(e,r);function e(t,n,i){Ti(this,e);var s=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var _=parseFloat(o.__input.value);_e.isNaN(_)||o.setValue(_)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(_){var p=a-_.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=_.clientY}function d(){ae.unbind(window,"mousemove",h),ae.unbind(window,"mouseup",d),c()}function f(_){ae.bind(window,"mousemove",h),ae.bind(window,"mouseup",d),a=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),ae.bind(s.__input,"change",l),ae.bind(s.__input,"blur",u),ae.bind(s.__input,"mousedown",f),ae.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ai(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():yA(this.getValue(),this.__precision),Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(R0);function Dm(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var vd=(function(r){Hr(e,r);function e(t,n,i,s,o){Ti(this,e);var a=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),ae.bind(a.__background,"mousedown",c),ae.bind(a.__background,"touchstart",d),ae.addClass(a.__background,"slider"),ae.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),ae.bind(window,"mousemove",u),ae.bind(window,"mouseup",h),u(p)}function u(p){p.preventDefault();var g=l.__background.getBoundingClientRect();return l.setValue(Dm(p.clientX,g.left,g.right,l.__min,l.__max)),!1}function h(){ae.unbind(window,"mousemove",u),ae.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(p){p.touches.length===1&&(ae.bind(window,"touchmove",f),ae.bind(window,"touchend",_),f(p))}function f(p){var g=p.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Dm(g,m.left,m.right,l.__min,l.__max))}function _(){ae.unbind(window,"touchmove",f),ae.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ai(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Br(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(R0),P0=(function(r){Hr(e,r);function e(t,n,i){Ti(this,e);var s=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,ae.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),ae.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ai(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(Os),yd=(function(r){Hr(e,r);function e(t,n){Ti(this,e);var i=Vr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new sn(i.getValue()),i.__temp=new sn(0);var s=i;i.domElement=document.createElement("div"),ae.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",ae.bind(i.__input,"keydown",function(p){p.keyCode===13&&h.call(this)}),ae.bind(i.__input,"blur",h),ae.bind(i.__selector,"mousedown",function(){ae.addClass(this,"drag").bind(window,"mouseup",function(){ae.removeClass(s.__selector,"drag")})}),ae.bind(i.__selector,"touchstart",function(){ae.addClass(this,"drag").bind(window,"touchend",function(){ae.removeClass(s.__selector,"drag")})});var o=document.createElement("div");_e.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),_e.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),_e.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),_e.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),_e.extend(o.style,{width:"100%",height:"100%",background:"none"}),Im(o,"top","rgba(0,0,0,0)","#000"),_e.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),SA(i.__hue_field),_e.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),ae.bind(i.__saturation_field,"mousedown",a),ae.bind(i.__saturation_field,"touchstart",a),ae.bind(i.__field_knob,"mousedown",a),ae.bind(i.__field_knob,"touchstart",a),ae.bind(i.__hue_field,"mousedown",l),ae.bind(i.__hue_field,"touchstart",l);function a(p){f(p),ae.bind(window,"mousemove",f),ae.bind(window,"touchmove",f),ae.bind(window,"mouseup",c),ae.bind(window,"touchend",c)}function l(p){_(p),ae.bind(window,"mousemove",_),ae.bind(window,"touchmove",_),ae.bind(window,"mouseup",u),ae.bind(window,"touchend",u)}function c(){ae.unbind(window,"mousemove",f),ae.unbind(window,"touchmove",f),ae.unbind(window,"mouseup",c),ae.unbind(window,"touchend",c),d()}function u(){ae.unbind(window,"mousemove",_),ae.unbind(window,"touchmove",_),ae.unbind(window,"mouseup",u),ae.unbind(window,"touchend",u),d()}function h(){var p=_d(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__saturation_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientX,y=m.clientY,v=(x-g.left)/(g.right-g.left),E=1-(y-g.top)/(g.bottom-g.top);return E>1?E=1:E<0&&(E=0),v>1?v=1:v<0&&(v=0),s.__color.v=E,s.__color.s=v,s.setValue(s.__color.toOriginal()),!1}function _(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__hue_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientY,y=1-(x-g.top)/(g.bottom-g.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ai(e,[{key:"updateDisplay",value:function(){var n=_d(this.getValue());if(n!==!1){var i=!1;_e.each(sn.COMPONENTS,function(a){if(!_e.isUndefined(n[a])&&!_e.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&_e.extend(this.__color.__state,n)}_e.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;_e.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Im(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),_e.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e})(Os),xA=["-moz-","-o-","-webkit-","-ms-",""];function Im(r,e,t,n){r.style.background="",_e.each(xA,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function SA(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var bA={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},MA=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,wA=function(e,t){var n=e[t];return _e.isArray(arguments[2])||_e.isObject(arguments[2])?new _A(e,t,arguments[2]):_e.isNumber(n)?_e.isNumber(arguments[2])&&_e.isNumber(arguments[3])?_e.isNumber(arguments[4])?new vd(e,t,arguments[2],arguments[3],arguments[4]):new vd(e,t,arguments[2],arguments[3]):_e.isNumber(arguments[4])?new Fc(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Fc(e,t,{min:arguments[2],max:arguments[3]}):_e.isString(n)?new vA(e,t):_e.isFunction(n)?new P0(e,t,""):_e.isBoolean(n)?new C0(e,t):null};function EA(r){setTimeout(r,1e3/60)}var TA=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||EA,AA=(function(){function r(){Ti(this,r),this.backgroundElement=document.createElement("div"),_e.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ae.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),_e.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ae.bind(this.backgroundElement,"click",function(){e.hide()})}return Ai(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),_e.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ae.unbind(t.domElement,"webkitTransitionEnd",i),ae.unbind(t.domElement,"transitionend",i),ae.unbind(t.domElement,"oTransitionEnd",i)};ae.bind(this.domElement,"webkitTransitionEnd",n),ae.bind(this.domElement,"transitionend",n),ae.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ae.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ae.getHeight(this.domElement)/2+"px"}}]),r})(),CA=dA(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);bA.inject(CA);var Om="dg",Fm=72,Nm=20,ja="Default",pa=(function(){try{return!!window.localStorage}catch{return!1}})(),La=void 0,Um=!0,ro=void 0,Xu=!1,L0=[],Ct=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ae.addClass(this.domElement,Om),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=_e.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=_e.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),_e.isUndefined(n.load)?n.load={preset:ja}:n.preset&&(n.load.preset=n.preset),_e.isUndefined(n.parent)&&n.hideable&&L0.push(this),n.resizable=_e.isUndefined(n.parent)&&n.resizable,n.autoPlace&&_e.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=pa&&localStorage.getItem(so(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,DA(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,bd(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?ae.addClass(t.__ul,r.CLASS_CLOSED):ae.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){pa&&(i=d,d?ae.bind(window,"unload",s):ae.unbind(window,"unload",s),localStorage.setItem(so(t,"isLocal"),d))}}}),_e.isUndefined(n.parent)){if(this.closed=n.closed||!1,ae.addClass(this.domElement,r.CLASS_MAIN),ae.makeSelectable(this.domElement,!1),pa&&i){t.useLocalStorage=!0;var a=localStorage.getItem(so(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,ae.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(ae.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ae.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ae.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);ae.addClass(l,"controller-name"),o=Tf(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};ae.addClass(this.__ul,r.CLASS_CLOSED),ae.addClass(o,"title"),ae.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(_e.isUndefined(n.parent)&&(Um&&(ro=document.createElement("div"),ae.addClass(ro,Om),ae.addClass(ro,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ro),Um=!1),ro.appendChild(this.domElement),ae.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||bd(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ae.bind(window,"resize",this.__resizeHandler),ae.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ae.bind(this.__ul,"transitionend",this.__resizeHandler),ae.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&LA(this),s=function(){pa&&localStorage.getItem(so(t,"isLocal"))==="true"&&localStorage.setItem(so(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,_e.defer(function(){h.width-=1})}n.parent||u()};Ct.toggleHide=function(){Xu=!Xu,_e.each(L0,function(r){r.domElement.style.display=Xu?"none":""})};Ct.CLASS_AUTO_PLACE="a";Ct.CLASS_AUTO_PLACE_CONTAINER="ac";Ct.CLASS_MAIN="main";Ct.CLASS_CONTROLLER_ROW="cr";Ct.CLASS_TOO_TALL="taller-than-window";Ct.CLASS_CLOSED="closed";Ct.CLASS_CLOSE_BUTTON="close-button";Ct.CLASS_CLOSE_TOP="close-top";Ct.CLASS_CLOSE_BOTTOM="close-bottom";Ct.CLASS_DRAG="drag";Ct.DEFAULT_WIDTH=245;Ct.TEXT_CLOSED="Close Controls";Ct.TEXT_OPEN="Open Controls";Ct._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Fm||r.keyCode===Fm)&&Ct.toggleHide()};ae.bind(window,"keydown",Ct._keydownHandler,!1);_e.extend(Ct.prototype,{add:function(e,t){return Da(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Da(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;_e.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ro.removeChild(this.domElement);var e=this;_e.each(this.__folders,function(t){e.removeFolder(t)}),ae.unbind(window,"keydown",Ct._keydownHandler,!1),km(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Ct(t);this.__folders[e]=n;var i=Tf(this,n.domElement);return ae.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],km(e);var t=this;_e.each(e.__folders,function(n){e.removeFolder(n)}),_e.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ae.getOffset(e.__ul).top,n=0;_e.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=ae.getHeight(i))}),window.innerHeight-t-Nm<n?(ae.addClass(e.domElement,Ct.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Nm+"px"):(ae.removeClass(e.domElement,Ct.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&_e.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:_e.debounce(function(){this.onResize()},50),remember:function(){if(_e.isUndefined(La)&&(La=new AA,La.domElement.innerHTML=MA),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;_e.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&PA(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&bd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Yl(this)),e.folders={},_e.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Yl(this),xd(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ja]=Yl(this,!0)),this.load.remembered[e]=Yl(this),this.preset=e,Sd(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){_e.each(this.__controllers,function(t){this.getRoot().load.remembered?D0(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),_e.each(this.__folders,function(t){t.revert(t)}),e||xd(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&I0(this.__listening)},updateDisplay:function(){_e.each(this.__controllers,function(e){e.updateDisplay()}),_e.each(this.__folders,function(e){e.updateDisplay()})}});function Tf(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function km(r){ae.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&ae.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function xd(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function RA(r,e,t){if(t.__li=e,t.__gui=r,_e.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Da(r,t.object,t.property,{before:a,factoryArgs:[_e.toArray(arguments)]})}if(_e.isArray(o)||_e.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Da(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof vd){var n=new Fc(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});_e.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),ae.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Fc){var i=function(o){if(_e.isNumber(t.__min)&&_e.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Da(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=_e.compose(i,t.min),t.max=_e.compose(i,t.max)}else t instanceof C0?(ae.bind(e,"click",function(){ae.fakeEvent(t.__checkbox,"click")}),ae.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof P0?(ae.bind(e,"click",function(){ae.fakeEvent(t.__button,"click")}),ae.bind(e,"mouseover",function(){ae.addClass(t.__button,"hover")}),ae.bind(e,"mouseout",function(){ae.removeClass(t.__button,"hover")})):t instanceof yd&&(ae.addClass(e,"color"),t.updateDisplay=_e.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=_e.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&xd(r.getRoot(),!0),s},t.setValue)}function D0(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[ja])o=s[ja];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Da(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new yd(e,t);else{var s=[e,t].concat(n.factoryArgs);i=wA.apply(r,s)}n.before instanceof Os&&(n.before=n.before.__li),D0(r,i),ae.addClass(i.domElement,"c");var o=document.createElement("span");ae.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Tf(r,a,n.before);return ae.addClass(l,Ct.CLASS_CONTROLLER_ROW),i instanceof yd?ae.addClass(l,"color"):ae.addClass(l,pA(i.getValue())),RA(r,l,i),r.__controllers.push(i),i}function so(r,e){return document.location.href+"."+e}function Sd(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Bm(r,e){e.style.display=r.useLocalStorage?"block":"none"}function PA(r){var e=r.__save_row=document.createElement("li");ae.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),ae.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ae.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ae.addClass(n,"button"),ae.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",ae.addClass(i,"button"),ae.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",ae.addClass(s,"button"),ae.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?_e.each(r.load.remembered,function(h,d){Sd(r,d,d===r.preset)}):Sd(r,ja,!1),ae.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),pa){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(so(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Bm(r,a),ae.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Bm(r,a)})}var u=document.getElementById("dg-new-constructor");ae.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&La.hide()}),ae.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),La.show(),u.focus(),u.select()}),ae.bind(n,"click",function(){r.save()}),ae.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),ae.bind(s,"click",function(){r.revert()})}function LA(r){var e=void 0;r.__resize_handle=document.createElement("div"),_e.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){ae.removeClass(r.__closeButton,Ct.CLASS_DRAG),ae.unbind(window,"mousemove",t),ae.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,ae.addClass(r.__closeButton,Ct.CLASS_DRAG),ae.bind(window,"mousemove",t),ae.bind(window,"mouseup",n),!1}ae.bind(r.__resize_handle,"mousedown",i),ae.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function bd(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Yl(r,e){var t={};return _e.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];_e.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function DA(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function I0(r){r.length!==0&&TA.call(window,function(){I0(r)}),_e.each(r,function(e){e.updateDisplay()})}var IA=Ct;function OA(){console.log("Initializing 3D extruded logo");let r=null;const e=document.querySelector("#loading-splash .logo-wrapper");if(!e){console.error("Logo wrapper not found");return}const t=186,n=71;let i=null;function s(){console.log("Setting up fallback SVG animation");const I=document.createElement("img");I.src="src/assets/logo/NewLogo.svg",I.alt="Logo",I.width=t,I.height=n,I.classList.add("fallback-animated"),e.appendChild(I);const ce=document.createElement("style");return ce.textContent=`
      .fallback-animated {
        animation: pulse 2s infinite ease-in-out;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,document.head.appendChild(ce),i=function(){e.contains(I)&&e.removeChild(I),document.head.contains(ce)&&document.head.removeChild(ce)},{dispose:()=>{i&&i()}}}let o;try{o=new o0({alpha:!0,antialias:!0,physicallyCorrectLights:!0}),o.setClearColor(0,0),console.log("WebGL renderer created successfully")}catch(I){return console.error("Failed to create WebGL renderer:",I),s()}const a=new X_,l=new tb().load(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="]);a.environment=l,a.background=null;const c=new Qn(40,t/n,.1,1e3);c.position.z=200;const u=new $S({color:16777215,metalness:.8,roughness:.365,transmission:.98,thickness:4,transparent:!0,opacity:.85,side:Ii,clearcoat:1,clearcoatRoughness:1,envMapIntensity:1.2,ior:2.25,premultipliedAlpha:!0}),h=new W_(256,{encoding:void 0,generateMipmaps:!0,minFilter:Rr});h.texture.type=Bo;const d=new G_(1,1e3,h);a.add(d),u.envMap=h.texture;const f=new da,_={depth:12,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:5};a.add(f);const p={camera:{positionZ:294,fov:20},logo:{scale:.8,rotationX:.3,rotationY:0,rotationZ:0,positionX:0,positionY:0,positionZ:0,extrudeDepth:16,bobbing:!0,bobbingSpeed:.5,bobbingAmount:9.3,rotationSpeed:0,oscillateX:!0,oscillateXSpeed:.85,oscillateXMin:-.23,oscillateXMax:.27,oscillateY:!0,oscillateYSpeed:.9,oscillateYMin:-.15,oscillateYMax:.45},colors:{material:"#ffffff",ambient:"#ffffff",directional:"#93d8ff",point:"#ffffff",back:"#aaaaff"},lighting:{ambientIntensity:.3,directionalIntensity:.8,pointIntensity:.7,backIntensity:.5},glass:{metalness:.8,roughness:.365,transmission:.98,thickness:4,opacity:.85,clearcoat:1,clearcoatRoughness:1,ior:2.25,envMapIntensity:1.2},resetCamera:function(){this.camera.positionZ=294,this.camera.fov=20,E()},resetLogo:function(){this.logo.scale=.8,this.logo.rotationX=.3,this.logo.rotationY=0,this.logo.rotationZ=0,this.logo.positionX=-22,this.logo.positionY=0,this.logo.positionZ=0,this.logo.rotationSpeed=0,this.logo.oscillateX=!0,this.logo.oscillateXSpeed=.5,this.logo.oscillateXMin=-.23,this.logo.oscillateXMax=.3,this.logo.oscillateY=!0,this.logo.oscillateYSpeed=.3,this.logo.oscillateYMin=-.1,this.logo.oscillateYMax=.15,w()},resetGlass:function(){this.glass.metalness=.8,this.glass.roughness=.365,this.glass.transmission=.98,this.glass.thickness=4,this.glass.opacity=.85,this.glass.clearcoat=1,this.glass.clearcoatRoughness=1,this.glass.ior=2.25,this.glass.envMapIntensity=1.2,A(),u.needsUpdate=!0,console.log("Glass material reset to:",this.glass)}};o.setSize(t,n),o.setPixelRatio(window.devicePixelRatio);const g=o.domElement;g.classList.add("extruded-logo"),g.style.width="100%",e.appendChild(g);const m=new sb(16777215,.3);a.add(m);const x=new Xp(9689343,.9);x.position.set(1,1,2).normalize(),a.add(x);const y=new ib(16777215,.8,500);y.position.set(50,50,100),a.add(y);const v=new Xp(11184895,.5);v.position.set(-1,-1,-1).normalize(),a.add(v);function E(){c.position.z=p.camera.positionZ,c.fov=p.camera.fov,c.updateProjectionMatrix()}function w(){f&&(f.scale.set(p.logo.scale,p.logo.scale,p.logo.scale),f.rotation.x=p.logo.rotationX,f.rotation.z=p.logo.rotationZ,f.position.x=p.logo.positionX,f.position.y=p.logo.positionY,f.position.z=p.logo.positionZ)}function M(){m.color.set(p.colors.ambient),m.intensity=p.lighting.ambientIntensity,x.color.set(p.colors.directional),x.intensity=p.lighting.directionalIntensity,y.color.set(p.colors.point),y.intensity=p.lighting.pointIntensity,v.color.set(p.colors.back),v.intensity=p.lighting.backIntensity,u.color.set(p.colors.material)}function A(){u.metalness=p.glass.metalness,u.roughness=p.glass.roughness,u.transmission=p.glass.transmission,u.thickness=p.glass.thickness,u.opacity=p.glass.opacity,u.clearcoat=p.glass.clearcoat,u.clearcoatRoughness=p.glass.clearcoatRoughness,u.ior=p.glass.ior,u.envMapIntensity=p.glass.envMapIntensity}function b(){console.log("Creating logo from direct path data");const I="M32.5 0L0 70.5H44V57.5H23L42.5 12.5L67.5 70.5H85L108.5 19.5L132 70.5H152.5L186 0H141.5V12.5H162L142.5 56.5L117.5 0H100L76.5 54.5L52.5 0H32.5Z";try{const ye=new Ic().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${I}"/></svg>`);if(console.log("SVG Parser result:",ye),ye&&ye.paths&&ye.paths.length>0){console.log(`Found ${ye.paths.length} paths in SVG`);const we=[];_.depth=p.logo.extrudeDepth,A(),ye.paths.forEach((L,R)=>{const K=L.toShapes(!0);console.log(`Path ${R} generated ${K.length} shapes`),K.forEach((de,$)=>{const me=new Cc(de,_);we.push(me);const ee=new pi(me,u);ee.scale.set(.9,-.9,.9),f.add(ee)})});const N=new Rs;f.traverse(L=>{L.isMesh&&(L.geometry.computeBoundingBox(),N.expandByObject(L))});const O=new J;N.getCenter(O),f.children.forEach(L=>{L.isMesh&&(L.position.x-=O.x,L.position.y-=O.y)}),w(),A(),U(),X()}else return console.error("Parsed SVG has no paths"),s()}catch(ce){return console.error("Error creating shape from path data:",ce),s()}}function S(I,ce=0){if(ce>=I.length)return console.error("Failed to load SVG from all paths, falling back to direct path data"),b();const ye=I[ce];console.log(`Trying to load SVG from: ${ye}`),fetch(ye).then(we=>{if(!we.ok)throw new Error(`Network response was not ok: ${we.statusText}`);return we.text()}).then(we=>{console.log("SVG content retrieved:",we.substring(0,200)+"...");const O=new Ic().parse(we);console.log("SVG parsed result:",O),O.paths&&O.paths.length>0?(console.log(`Loaded ${O.paths.length} paths successfully`),F(O)):(console.error("SVG was loaded but no paths were found, trying direct path data approach"),b())}).catch(we=>{console.warn(`Error loading/parsing SVG from ${ye}:`,we),S(I,ce+1)})}function F(I){if(!I.paths||I.paths.length===0)return console.error("No paths found in SVG data, trying direct path data approach"),b();console.log(`Processing SVG with ${I.paths.length} paths`);const ce=.9;if(_.depth=p.logo.extrudeDepth,A(),I.paths.forEach((N,O)=>{console.log(`Processing path ${O+1}/${I.paths.length}`);const L=N.toShapes(!0);if(!L||L.length===0){console.warn(`No shapes in path ${O+1}`);return}console.log(`Path ${O+1} has ${L.length} shapes`),L.forEach((R,K)=>{const de=new Cc(R,_),$=new pi(de,u);$.scale.set(ce,-ce,ce),f.add($),console.log(`Added shape ${K+1} for path ${O+1}`)})}),f.children.length===0)return console.error("No meshes were created from the SVG, trying direct path data approach"),b();console.log(`Created ${f.children.length} total meshes for the logo`);const ye=new Rs;f.traverse(N=>{N.isMesh&&(N.geometry.computeBoundingBox(),ye.expandByObject(N))});const we=new J;ye.getCenter(we),f.children.forEach(N=>{N.isMesh&&(N.position.x-=we.x,N.position.y-=we.y)}),w(),console.log("Applying initial glass material settings:",p.glass),A(),u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,U(),X()}function U(){try{r=new IA({autoPlace:!0});const I=document.createElement("style");I.textContent=`
        .dg.main {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10000;
          max-height: 100vh;
          overflow-y: auto;
        }
        .dg.main .close-button {
          position: sticky;
          top: 0;
        }
      `,document.head.appendChild(I);const ce=r.addFolder("Camera");ce.add(p.camera,"positionZ",50,500).onChange(E),ce.add(p.camera,"fov",20,80).onChange(E),ce.add(p,"resetCamera"),ce.open();const ye=r.addFolder("Logo");ye.add(p.logo,"scale",.5,2).onChange(w),ye.add(p.logo,"rotationX",-1,1).onChange(w),ye.add(p.logo,"rotationZ",-1,1).onChange(w),ye.add(p.logo,"positionX",-50,50).onChange(w),ye.add(p.logo,"positionY",-50,50).onChange(w),ye.add(p.logo,"positionZ",-50,50).onChange(w),ye.add(p.logo,"extrudeDepth",1,30).onChange(R=>{console.log("To apply extrude depth change, please refresh the page")}),ye.add(p.logo,"rotationSpeed",0,.02),ye.add(p.logo,"bobbing"),ye.add(p.logo,"bobbingSpeed",.1,5),ye.add(p.logo,"bobbingAmount",0,10);const we=ye.addFolder("X Rotation Oscillation");we.add(p.logo,"oscillateX"),we.add(p.logo,"oscillateXSpeed",.1,2),we.add(p.logo,"oscillateXMin",-1,0),we.add(p.logo,"oscillateXMax",0,1),we.open();const N=ye.addFolder("Y Rotation Oscillation");N.add(p.logo,"oscillateY"),N.add(p.logo,"oscillateYSpeed",.1,2),N.add(p.logo,"oscillateYMin",-1,0),N.add(p.logo,"oscillateYMax",0,1),N.open(),ye.add(p,"resetLogo"),ye.open();const O=r.addFolder("Glass Material");O.add(p.glass,"metalness",0,1).onChange(A),O.add(p.glass,"roughness",0,1).onChange(A),O.add(p.glass,"transmission",0,1).onChange(A),O.add(p.glass,"thickness",0,5).onChange(A),O.add(p.glass,"opacity",0,1).onChange(A),O.add(p.glass,"clearcoat",0,1).onChange(A),O.add(p.glass,"clearcoatRoughness",0,1).onChange(A),O.add(p.glass,"ior",1,2.333).step(.01).onChange(A),O.add(p.glass,"envMapIntensity",0,3).onChange(A),O.add(p,"resetGlass"),O.open();const L=r.addFolder("Colors & Lighting");L.addColor(p.colors,"material").onChange(M),L.addColor(p.colors,"ambient").onChange(M),L.addColor(p.colors,"directional").onChange(M),L.addColor(p.colors,"point").onChange(M),L.addColor(p.colors,"back").onChange(M),L.add(p.lighting,"ambientIntensity",0,1).onChange(M),L.add(p.lighting,"directionalIntensity",0,1).onChange(M),L.add(p.lighting,"pointIntensity",0,1).onChange(M),L.add(p.lighting,"backIntensity",0,1).onChange(M),p.exportSettings=function(){const R=JSON.stringify(p,null,2);console.log("Current settings:",R);const K=new Blob([R],{type:"application/json"}),de=URL.createObjectURL(K),$=document.createElement("a");$.href=de,$.download="logo3d-settings.json",$.click(),URL.revokeObjectURL(de)},r.add(p,"exportSettings").name("Export Settings")}catch(I){console.error("Failed to initialize GUI controls:",I)}}const G=["/src/assets/logo/NewLogo.svg","src/assets/logo/NewLogo.svg","../assets/logo/NewLogo.svg","/assets/logo/NewLogo.svg","assets/logo/NewLogo.svg"];u.envMapIntensity=p.glass.envMapIntensity,setTimeout(()=>{S(G)},100);let V=null;function Y(){if(!f||f.children.length===0)return;V=Date.now()*.001;const I=(p.logo.oscillateYMin+p.logo.oscillateYMax)/2,ce=(p.logo.oscillateXMin+p.logo.oscillateXMax)/2;f.rotation.y=I,f.rotation.x=ce,f.position.y=p.logo.positionY,y.position.x=0,y.position.z=80}function X(){if(requestAnimationFrame(X),f&&f.children.length>0){V===null&&Y();const I=10,we=(Date.now()*.001-V)%I/I;if(p.logo.oscillateY){const N=(Math.sin(we*Math.PI*2*p.logo.oscillateYSpeed)+1)/2,O=p.logo.oscillateYMax-p.logo.oscillateYMin;f.rotation.y=p.logo.oscillateYMin+N*O}else f.rotation.y+=p.logo.rotationSpeed;if(p.logo.oscillateX){const N=(Math.sin(we*Math.PI*2*p.logo.oscillateXSpeed)+1)/2,O=p.logo.oscillateXMax-p.logo.oscillateXMin;f.rotation.x=p.logo.oscillateXMin+N*O}else f.rotation.x=p.logo.rotationX;if(p.logo.bobbing){const N=Math.sin(we*Math.PI*2*p.logo.bobbingSpeed);f.position.y=N*p.logo.bobbingAmount+p.logo.positionY}y.position.x=Math.sin(we*Math.PI*2)*80,y.position.z=Math.cos(we*Math.PI*2)*80,Math.random()>.9&&(f.visible=!1,d.update(o,a),f.visible=!0),X.firstFrame&&(u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,X.firstFrame=!1,console.log("First animation frame - applied envMapIntensity:",p.glass.envMapIntensity),q())}o.render(a,c)}function q(){console.log("3D logo ready for display"),g&&g.classList.add("logo-animation-ready");const I=new CustomEvent("logo3d-ready");document.dispatchEvent(I)}X.firstFrame=!0;const B=()=>{const I=e.clientWidth,ce=e.clientHeight||I*(n/t);c.aspect=I/ce,c.updateProjectionMatrix(),o.setSize(I,ce)};B();const re=document.createElement("style");return re.textContent=`
    #loading-splash .logo-wrapper {
      width: 100%;
      height: auto;
      min-height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    #loading-splash .extruded-logo {
      max-width: 100%;
      max-height: 100%;
    }
  `,document.head.appendChild(re),window.addEventListener("resize",B),{dispose:()=>{console.log("Disposing 3D logo"),e&&g&&e.contains(g)&&e.removeChild(g),i&&i(),document.head.contains(re)&&document.head.removeChild(re),r&&r.destroy(),f&&f.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(ce=>ce.dispose()):I.material.dispose())}),window.removeEventListener("resize",B),o&&o.dispose()}}}async function FA(){console.log("Starting page preloading...");const r=["/index.html","/works.html","/about.html","/contact.html"],e=window.location.pathname,t=window.location.origin,n=r.filter(o=>{const a=o.replace("/index.html","/").replace(".html",""),l=e.replace("/index.html","/").replace(".html","");return a!==l}).map(async o=>{try{const a=new URL(o,t).href;console.log(`Preloading: ${a}`);const l=await fetch(a);if(l.ok){const c=await l.text(),u=document.createElement("div");u.innerHTML=c;const h=u.querySelector('[data-barba="container"]');if(h&&window.barba&&window.barba.cache){window.barba.cache.set(a,{html:c,container:h});const d=a.replace(".html","");d!==a&&window.barba.cache.set(d,{html:c,container:h}),console.log(`Successfully cached: ${o}`),h.querySelectorAll(".hero img, .hero-image img, [data-hero-image]").forEach(_=>{if(_.src||_.dataset.src){const p=_.src||_.dataset.src,g=new Image;g.src=p,console.log(`Preloading hero image: ${p}`)}})}return{path:o,status:"success"}}else if(l.status===404&&o==="/index.html"){console.log("Trying to load homepage at root path");const c=await fetch("/");if(c.ok){const u=await c.text();return window.barba&&window.barba.cache&&window.barba.cache.set(new URL("/",t).href,{html:u,container}),{path:"/",status:"success"}}}else return console.warn(`Failed to preload ${o}: ${l.status}`),{path:o,status:"failed"}}catch(a){return console.warn(`Error preloading ${o}:`,a),{path:o,status:"error",error:a}}}),i=await Promise.all(n),s=i.filter(o=>o.status==="success").length;return console.log(`Preloading complete: ${s}/${i.length} pages cached`),i}function NA(){window.animationController?(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0):(console.log("Initializing animation controller for loading screen"),window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,canRunAnimations(){return!0},queueAnimation(t,n="unnamed"){console.log(`Loading screen: running animation ${n} immediately`),t()},processPendingAnimations(){}}),qu(),UA();let r=null;var e=setInterval(function(){const t=document.querySelector(".load-bar-inner");if(t){clearInterval(e);const s=document.querySelector("#loading-splash");t.classList.add("loading"),r=OA();const o=FA();document.addEventListener("logo3d-ready",function l(){console.log("Logo3D ready event received"),document.removeEventListener("logo3d-ready",l);const c=document.querySelector("#loading-splash .logo-wrapper");c&&c.classList.add("logo-ready")});const a=document.createElement("style");a.textContent=`
        #loading-splash .logo-wrapper {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        #loading-splash .logo-wrapper.logo-ready {
          opacity: 1;
        }
      `,document.head.appendChild(a);var n=setInterval(function(){t.classList.contains("loading")&&(clearInterval(n),gd(),t.addEventListener("animationend",()=>{s.classList.add("loaded"),document.querySelectorAll("#loading-splash .char").forEach(c=>c.classList.add("reveal-char")),window.scrollTo(0,0),o.then(()=>{console.log("Page preloading finished, continuing with initialization"),setTimeout(function(){document.body.classList.add("loaded");const c=document.querySelector("[data-barba='container']"),u=document.querySelector("main .page"),h=u?u.children:[];T0(),qu();const d=We.timeline();d.set(c,{visibility:"visible",opacity:1,immediateRender:!0}),d.set(u,{opacity:0,immediateRender:!0}),h.length>0&&d.set(h,{opacity:0,immediateRender:!0}),d.call(()=>{uA()}),console.log("Loading screen: splitting text"),gd(),u&&We.set(u,{opacity:0,pointerEvents:"none"});const f="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal";h.length>0&&Array.from(h).forEach(p=>{p.matches(f)?We.set(p,{opacity:0,pointerEvents:"auto",visibility:"visible"}):We.set(p,{opacity:0,pointerEvents:"auto",visibility:"visible"})}),d.call(()=>{console.log("Loading screen: running H1 animations"),window.animationController&&(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0),window.barbaTransitionActive!==void 0&&(window.barbaTransitionActive=!1),u&&We.set(u,{opacity:1,pointerEvents:"auto"}),Lc()}),d.call(()=>{console.log("Loading screen: running data-splitting animations"),window.animationController&&(window.animationController.initialPageLoad=!0),Dc()},null,null,"+=0.2"),h.length>0&&d.call(()=>{const p=Array.from(h).filter(g=>!g.matches("h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal"));p.length>0&&We.to(p,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},null,null,"+=0.1"),d.call(()=>{console.log("Loading screen: running circle text effect"),E0()},null,null,"+=0.1"),document.querySelector("main .page#index")&&d.call(()=>{window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null),window.animationController&&(window.animationController.initialPageLoad=!0),console.log("Loading-screen: starting title rotation"),Mf("loading-screen.js")},null,null,"+=0.3"),d.call(()=>{console.log("Loading screen: setting up scroll animations"),vf(),l0(),c0(),Hc(),setTimeout(()=>{window.ScrollTrigger&&(window.ScrollTrigger.refresh(),console.log("Initial ScrollTrigger refresh after page load")),window.lenis&&(window.lenis.resize(),console.log("Initial Lenis resize after page load"))},200)},null,null,"+=0.2"),setTimeout(function(){document.body.classList.remove("loaded")},400)},400)})}))},50),i=setInterval(function(){s.classList.contains("loaded")&&(clearInterval(i),s.addEventListener("animationend",()=>{setTimeout(function(){r&&typeof r.dispose=="function"&&(r.dispose(),r=null),s.remove(),document.querySelectorAll("#loading-splash .char").forEach(c=>c.classList.remove("reveal-char")),qu(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(c=>{console.log("Final fix for missed splitting-rows element"),c.classList.add("reveal")}),window.animationController&&(console.log("Loading complete - setting initialPageLoad to false for future transitions"),window.animationController.initialPageLoad=!1)},500)}))},50)}},100)}function qu(){const r=document.querySelector("[data-barba='container']");r&&We.set(r,{visibility:"visible",opacity:1})}function UA(){var n;const r=document.querySelector("[data-barba='container']"),e=r?r.getAttribute("data-barba-namespace"):null;console.log("Loading-screen: initializing background for namespace:",e);const t=(n=rl.getRenderer())==null?void 0:n.getCanvas();t&&(t.style.opacity="0.66")}let zm=window.innerWidth;function kA(){let r;window.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(BA,400)})}function BA(){var e;window.innerWidth!==zm&&(document.body.classList.add("resizing"),zm=window.innerWidth,qg(),Xg(),Xd(),vf(),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches&&((e=document.querySelector(".cursor-element"))==null||e.classList.add("hidden"),document.documentElement.classList.add("touch-device")),setTimeout(function(){Hc(),document.body.classList.remove("resizing")},1e3))}function zA(){HA(),rl.init("viewport"),VA(),GA(),WA(),NA(),xc(),kA()}function HA(){const r=document.querySelector("[data-barba='container']");r&&(r.style.opacity="1",r.style.visibility="visible");const e=document.querySelector("main .page");if(e){e.style.opacity="1";const t=e.children;for(let n=0;n<t.length;n++)t[n].style.opacity="1"}}function VA(){qd(),xy(),document.getElementById("stage").style.display="block",document.getElementById("stage").style.background="none"}function GA(){Xg(),qg(),Xd(),Hc()}function WA(){var n,i,s;const r=document.querySelector("main > div");if(!r)return;const e=r.dataset.barbaNamespace;if(e){const o=rl.getConfigManager();o&&(console.log(`Setting initial background configuration for "${e}" page`),o.transitionToPage(e,0))}const t=r.querySelector(".page");if(t){We.set(t,{opacity:0,y:30});const o=t.children;o.length>0&&We.set(o,{opacity:0,y:30});const a=We.timeline({delay:.2});a.to(t,{opacity:1,y:0,duration:.4,ease:"power2.out"}),o.length>0&&a.to(o,{opacity:1,y:0,duration:.5,stagger:.08,ease:"power2.out"},"-=0.2")}e==="about"?(n=document.querySelector("nav a.about"))==null||n.classList.add("active"):e==="works"?(i=document.querySelector("nav a.works"))==null||i.classList.add("active"):e==="contact"&&((s=document.querySelector("nav a.contact"))==null||s.classList.add("active"))}function XA(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function Af(r,e,t){return e&&XA(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ki(){return ki=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},ki.apply(this,arguments)}function qc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Za(r,e)}function Md(r){return Md=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Md(r)}function Za(r,e){return Za=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Za(r,e)}function qA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wd(r,e,t){return wd=qA()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&Za(a,s.prototype),a},wd.apply(null,arguments)}function Ed(r){var e=typeof Map=="function"?new Map:void 0;return Ed=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return wd(t,arguments,Md(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Za(n,t)},Ed(r)}function $A(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var br,YA=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(br||(br={}));var Hm=br.off,fs=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Hm},r.setLevel=function(t){return Hm=br[t]};var e=r.prototype;return e.error=function(){this.i(console.error,br.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,br.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,br.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,br.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function to(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Vm(r){return r&&r.sensitive?"":"i"}var Hi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},ps=new((function(){function r(){this.o=Hi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),jA=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=ki({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=ki({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Hi.prefix+"-"+Hi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},Af(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),O0=new jA,Nc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=ps.toElement(n.html);i.namespace=ps.getNamespace(s),i.container=ps.getContainer(s),i.url=n.url,i.html=n.html,O0.update({ns:i.namespace});var o=ps.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},F0=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),Vm(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,d=c.start,f=d===void 0||d,_=c.end,p=_===void 0||_,g=c.encode,m=g===void 0?function(X){return X}:g,x=c.delimiter,y=x===void 0?"/#?":x,v=c.endsWith,E="[".concat(to(v===void 0?"":v),"]|$"),w="[".concat(to(y),"]"),M=f?"^":"",A=0,b=a;A<b.length;A++){var S=b[A];if(typeof S=="string")M+=to(m(S));else{var F=to(m(S.prefix)),U=to(m(S.suffix));if(S.pattern)if(l&&l.push(S),F||U)if(S.modifier==="+"||S.modifier==="*"){var G=S.modifier==="*"?"?":"";M+="(?:".concat(F,"((?:").concat(S.pattern,")(?:").concat(U).concat(F,"(?:").concat(S.pattern,"))*)").concat(U,")").concat(G)}else M+="(?:".concat(F,"(").concat(S.pattern,")").concat(U,")").concat(S.modifier);else M+=S.modifier==="+"||S.modifier==="*"?"((?:".concat(S.pattern,")").concat(S.modifier,")"):"(".concat(S.pattern,")").concat(S.modifier);else M+="(?:".concat(F).concat(U,")").concat(S.modifier)}}if(p)h||(M+="".concat(w,"?")),M+=c.endsWith?"(?=".concat(E,")"):"$";else{var V=a[a.length-1],Y=typeof V=="string"?w.indexOf(V[V.length-1])>-1:V===void 0;h||(M+="(?:".concat(w,"(?=").concat(E,"))?")),Y||(M+="(?=".concat(w,"|").concat(E,")"))}return new RegExp(M,Vm(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(U){for(var G=[],V=0;V<U.length;){var Y=U[V];if(Y!=="*"&&Y!=="+"&&Y!=="?")if(Y!=="\\")if(Y!=="{")if(Y!=="}")if(Y!==":")if(Y!=="(")G.push({type:"CHAR",index:V,value:U[V++]});else{var X=1,q="";if(U[re=V+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(re));for(;re<U.length;)if(U[re]!=="\\"){if(U[re]===")"){if(--X==0){re++;break}}else if(U[re]==="("&&(X++,U[re+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(re));q+=U[re++]}else q+=U[re++]+U[re++];if(X)throw new TypeError("Unbalanced pattern at ".concat(V));if(!q)throw new TypeError("Missing pattern at ".concat(V));G.push({type:"PATTERN",index:V,value:q}),V=re}else{for(var B="",re=V+1;re<U.length;){var I=U.charCodeAt(re);if(!(I>=48&&I<=57||I>=65&&I<=90||I>=97&&I<=122||I===95))break;B+=U[re++]}if(!B)throw new TypeError("Missing parameter name at ".concat(V));G.push({type:"NAME",index:V,value:B}),V=re}else G.push({type:"CLOSE",index:V,value:U[V++]});else G.push({type:"OPEN",index:V,value:U[V++]});else G.push({type:"ESCAPED_CHAR",index:V++,value:U[V++]});else G.push({type:"MODIFIER",index:V,value:U[V++]})}return G.push({type:"END",index:V,value:""}),G})(a),u=l.prefixes,h=u===void 0?"./":u,d="[^".concat(to(l.delimiter||"/#?"),"]+?"),f=[],_=0,p=0,g="",m=function(U){if(p<c.length&&c[p].type===U)return c[p++].value},x=function(U){var G=m(U);if(G!==void 0)return G;var V=c[p],Y=V.index;throw new TypeError("Unexpected ".concat(V.type," at ").concat(Y,", expected ").concat(U))},y=function(){for(var U,G="";U=m("CHAR")||m("ESCAPED_CHAR");)G+=U;return G};p<c.length;){var v=m("CHAR"),E=m("NAME"),w=m("PATTERN");if(E||w)h.indexOf(A=v||"")===-1&&(g+=A,A=""),g&&(f.push(g),g=""),f.push({name:E||_++,prefix:A,suffix:"",pattern:w||d,modifier:m("MODIFIER")||""});else{var M=v||m("ESCAPED_CHAR");if(M)g+=M;else if(g&&(f.push(g),g=""),m("OPEN")){var A=y(),b=m("NAME")||"",S=m("PATTERN")||"",F=y();x("CLOSE"),f.push({name:b||(S?_++:""),pattern:b&&!S?d:S,prefix:A,suffix:F,modifier:m("MODIFIER")||""})}else x("END")}}return f})(i,o),s,o)})(e,t,n)},ZA={__proto__:null,update:Nc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:F0},N0=function(){return window.location.origin},Qa=function(r){return r===void 0&&(r=window.location.href),Mr(r).port},Mr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(N0(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=U0(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},U0=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},Td=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},QA={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:N0,getPort:Qa,getPath:function(r){return r===void 0&&(r=window.location.href),Mr(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Mr(r).query):Mr(r).query},getHash:function(r){return Mr(r).hash},parse:Mr,parseQuery:U0,clean:Td};function JA(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:ki({href:l},Mr(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function KA(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function fo(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(KA(a)?a.then(s,o):s(a))});return i}}var xr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new fs("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}qc(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return fo(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(YA)),k0=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return F0(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Mr(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),eC=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}qc(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=ki({},this.T.get(n),i);return this.T.set(n,s),s},e})(k0),tC=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),nC=function(){return!window.history.pushState},iC=function(r){return!r.el||!r.href},rC=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},sC=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},oC=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},aC=function(r){var e=r.el;return e.port!==void 0&&Qa()!==Qa(e.href)},lC=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},cC=function(r){return r.el.hasAttribute(Hi.prefix+"-"+Hi.prevent)},uC=function(r){return!!r.el.closest("["+Hi.prefix+"-"+Hi.prevent+'="all"]')},hC=function(r){var e=r.href;return Td(e)===Td()&&Qa(e)===Qa()},dC=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}qc(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",nC),this.add("exists",iC),this.add("newTab",rC),this.add("blank",sC),this.add("corsDomain",oC),this.add("corsPort",aC),this.add("download",lC),this.add("preventSelf",cC),this.add("preventAll",uC),this.add("sameUrl",hC,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(k0),$u=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace($A(i),e),i.name="BarbaError",i}return qc(e,r),e})(Ed(Error)),fC=(function(){function r(t){t===void 0&&(t=[]),this.logger=new fs("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var f=!0,_={};return n.self&&d.name==="self"?(o.set(d,_),!0):(i.j.reverse().forEach(function(p){f&&(f=i.M(d,p,t,_),d.from&&d.to&&(f=i.M(d,p,t,_,"from")&&i.M(d,p,t,_,"to")),d.from&&!d.to&&(f=i.M(d,p,t,_,"from")),!d.from&&d.to&&(f=i.M(d,p,t,_,"to")))}),o.set(d,_),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,d=u,f=u,_=o?c[o]:c,p=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var g=Array.isArray(_[h])?_[h]:[_[h]];p[h]&&g.indexOf(p[h])!==-1&&(l=!0),g.indexOf(p[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[d])?_[d]:[_[d]];p[d]?(p[d].name&&m.indexOf(p[d].name)!==-1&&(l=!0),m.indexOf(p[d].name)===-1&&(a=!1)):a=!1;break;case"function":_[f](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function ia(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var pC=(function(){function r(t){t===void 0&&(t=[]),this.logger=new fs("@barba/core"),this.store=void 0,this.C=!1,this.store=new fC(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=ia(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(d){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=ia(function(){function d(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(g){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var p=(function(){if(u)return ia(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(y){if(l.H(y))throw new $u(y,"Transition error [sync]")});var g=function(y){return ia(function(){var v=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(v&&v.then)return v.then(function(){})},function(v){if(l.H(v))throw new $u(v,"Transition error [before/after/enter]")})},m=!1,x=ia(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Nc(s,n)]).then(function(y){return y[0]})).then(function(y){return m=y,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(y){if(l.H(y))throw new $u(y,"Transition error [before/after/leave]")});return x&&x.then?x.then(g):g()})();return p&&p.then?p.then(_):_()})}var f=(function(){if(u)return Promise.resolve(Nc(s,n)).then(function(){})})();return f&&f.then?f.then(d):d()},function(d){throw l.C=!1,d.name&&d.name==="BarbaError"?(l.logger.debug(d.label),l.logger.error(d.error),d):(l.logger.debug("Transition error [page]"),l.logger.error(d),d)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(d){return Promise.reject(d)}},e.once=function(t,n){try{return Promise.resolve(xr.do("once",t,n)).then(function(){return n.once?fo(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(xr.do("leave",t,n)).then(function(){return n.leave?fo(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(xr.do("enter",t,n)).then(function(){return n.enter?fo(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return ps.addContainer(t.next.container,n),xr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return ps.removeContainer(t.current.container),xr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(xr.do(t,n,i)).then(function(){return i[t]?fo(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},Af(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),mC=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){xr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?fo(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var gC={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Kr=new((function(){function r(){this.version="2.10.3",this.schemaPage=gC,this.Logger=fs,this.logger=new fs("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=xr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=ps,this.helpers=ZA,this.history=O0,this.request=JA,this.url=QA,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Hi:l,u=n.requestError,h=n.timeout,d=h===void 0?2e3:h,f=n.cacheIgnore,_=f!==void 0&&f,p=n.cacheFirstPage,g=p!==void 0&&p,m=n.prefetchIgnore,x=m!==void 0&&m,y=n.preventRunning,v=y!==void 0&&y,E=n.prevent,w=E===void 0?null:E,M=n.debug,A=n.logLevel;if(fs.setLevel((M!==void 0&&M)===!0?"debug":A===void 0?"off":A),this.logger.info(this.version),Object.keys(c).forEach(function(F){Hi[F]&&(Hi[F]=c[F])}),this.B=u,this.timeout=d,this.cacheIgnore=_,this.cacheFirstPage=g,this.prefetchIgnore=x,this.preventRunning=v,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var b=this.data.current;if(!b.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new eC(_),this.headers=new tC,this.prevent=new dC(x),this.transitions=new pC(s),this.views=new mC(a),w!==null){if(typeof w!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",w)}this.history.init(b.url.href,b.namespace),g&&this.cache.set(b.url.href,Promise.resolve({html:b.html,url:b.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(F){return F.init()});var S=this.data;S.trigger="barba",S.next=S.current,S.current=ki({},this.schemaPage),this.hooks.do("ready",S),this.once(S),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var d=(function(f,_){try{var p=(g=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:g,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var g;return p&&p.then?p.then(void 0,_):p})(0,function(){fs.getLevel()===0&&l.force(h.next.url.href)});if(d&&d.then)return d.then(function(){})})},l=this;if(l.data.next.url=ki({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Nc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:ki({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:ki({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Af(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());We.registerPlugin(Is);const B0={leave(r){return new Promise(e=>{We.killTweensOf(r),We.set(r,{visibility:"visible",opacity:1,pointerEvents:"none",immediateRender:!0}),We.to(r,{opacity:0,duration:.25,ease:"power1.out",onComplete:()=>{We.set(r,{visibility:"hidden",opacity:0}),e()}})})},enter(r){return new Promise(e=>{We.killTweensOf(r);const t=r.querySelector(".page"),n=t?Array.from(t.children):[];We.set(r,{opacity:0,y:0,visibility:"visible",pointerEvents:"none"}),t&&We.set(t,{opacity:0,visibility:"visible",pointerEvents:"none"}),n.length>0&&We.set(n,{opacity:0,visibility:"visible",pointerEvents:"none"}),We.timeline({defaults:{ease:"power2.out"},onComplete:()=>{t&&We.set(t,{pointerEvents:"auto"}),n.length>0&&We.set(n,{pointerEvents:"auto"}),We.set(r,{pointerEvents:"auto"}),e()}}).to(r,{opacity:1,duration:.28})})}};function _C(){window.barba=Kr,SC(),window.barbaTransitionActive=!1,window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,completeTransition(){this.transitionComplete=!0,this.transitionCompletedAt=Date.now(),console.log("TRANSITION MARKED COMPLETE at",this.transitionCompletedAt),setTimeout(()=>{this.processPendingAnimations()},100)},resetForTransition(){this.initialPageLoad=!1,this.transitionComplete=!1,this.transitionCompletedAt=0,this.pendingAnimations=[],console.log("TRANSITION RESET - animations will be queued until complete")},canRunAnimations(){return this.initialPageLoad?!0:this.transitionComplete?Date.now()-this.transitionCompletedAt>=80:!1},queueAnimation(e,t="unnamed"){console.log(`Queuing animation: ${t}`),this.canRunAnimations()?(console.log(`Running animation immediately: ${t}`),e()):(console.log(`Adding ${t} to pending queue`),this.pendingAnimations.push({fn:e,label:t}))},processPendingAnimations(){if(!this.canRunAnimations()){console.log("Cannot process animations yet - transition not complete");return}console.log(`Processing ${this.pendingAnimations.length} pending animations`),this.pendingAnimations.forEach((e,t)=>{setTimeout(()=>{console.log(`Running queued animation: ${e.label}`),e.fn()},t*50)}),this.pendingAnimations=[]}};const r=document.createElement("style");r.textContent=`
    body.barba-transition {
      overflow: hidden !important;
    }
  `,document.head.appendChild(r),Kr.hooks.before(e=>{console.log("Barba transition starting",e.trigger),document.body.classList.add("barba-transition"),e.next.container&&We.set(e.next.container,{opacity:0,visibility:"hidden"})}),Kr.hooks.beforeLeave(e=>{console.log("Barba beforeLeave: preparing transition"),We.set(e.current.container,{visibility:"visible",opacity:1})}),Kr.hooks.nextAdded(e=>{console.log("Barba nextAdded: preparing next container"),We.set(e.next.container,{opacity:0,visibility:"hidden"})}),Kr.hooks.beforeEnter(e=>{console.log("Barba beforeEnter: container added to DOM");const t=e.next.container.querySelector(".page");t&&We.set(t,{opacity:0,visibility:"visible",immediateRender:!0});const n=e.next.container.querySelectorAll(".page, .page > *");We.set(n,{opacity:0,pointerEvents:"none",immediateRender:!0}),e.current.container&&e.current.container.classList.add("barba-old-container")}),Kr.hooks.after(e=>{document.body.classList.remove("barba-transition"),e.next.container&&e.next.container.classList.remove("barba-container-next"),document.querySelectorAll(".barba-old-container").forEach(t=>{t.classList.remove("barba-old-container")}),T0()}),Kr.init({preventRunning:!0,transitions:[{name:"fade-transition",leave(e){return vC(e)},enter(e){return yC(e)},afterEnter(e){return xC(e)}}],views:[{namespace:"index",beforeEnter(){}},{namespace:"about",beforeEnter(){}},{namespace:"works",beforeEnter(){}},{namespace:"contact",beforeEnter(){}},{namespace:"labs",beforeEnter(){}},{namespace:"resume",beforeEnter(){}},{namespace:"scholastic",beforeEnter(){}},{namespace:"jpplus",beforeEnter(){}},{namespace:"rowmark",beforeEnter(){}},{namespace:"aave",beforeEnter(){}},{namespace:"ipi",beforeEnter(){}},{namespace:"wabash",beforeEnter(){}},{namespace:"bright-future",beforeEnter(){}},{namespace:"healpool",beforeEnter(){}},{namespace:"rentaru",beforeEnter(){}}]})}function vC(r){return new Promise(e=>{window.animationController.resetForTransition(),window.barbaTransitionActive=!0,document.body.classList.contains("menu-active")&&setTimeout(function(){document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(t=>{t.classList.remove("active")})},240),jy(),B0.leave(r.current.container).then(e)})}function yC(r){return new Promise(e=>{(()=>{pn&&(pn.stop(),pn.scrollTo(0,{immediate:!0,force:!0}),requestAnimationFrame(()=>pn.scrollTo(0,{immediate:!0,force:!0}))),window.scrollTo({top:0,left:0,behavior:"instant"}),document.documentElement.scrollTop=0,document.body.scrollTop=0})();const n=document.querySelector(".barba-old-container");n&&We.set(n,{visibility:"hidden",opacity:0,display:"none"}),window.barbaTransitionActive=!0,B0.enter(r.next.container).then(()=>{console.log("BARBA PAGE TRANSITION COMPLETE - Now safe to run animations");const i=r.next.namespace;console.log(`Applying background configuration for "${i}" page`),rl.transitionToPage(i,2),window.animationController.completeTransition(),window.barbaTransitionActive=!1,e()})})}function xC(r){console.log("Barba afterEnter: preparing animations"),document.querySelectorAll(".barba-old-container").forEach(l=>{We.set(l,{visibility:"hidden",opacity:0,display:"none"})}),Gm();const t=r.next.namespace==="index",i=r.next.container.querySelector(".page"),s=i?Array.from(i.children):[];i&&We.set(i,{opacity:1,pointerEvents:"auto"});const o="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal",a=[];return s.length>0&&s.forEach(l=>{l.matches(o)?We.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}):(We.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}),a.push(l))}),window.animationController.queueAnimation(()=>{console.log("Preparing text splitting"),gd()},"splitText-preparation"),a.length>0&&window.animationController.queueAnimation(()=>{We.to(a,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},"base-content-fade"),t?(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals (homepage focus)"),Lc()},"homepage-h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),Dc()},"data-splitting"),window.animationController.queueAnimation(()=>{console.log("Starting title rotation (homepage)"),Mf("barba-transition")},"title-rotation")):(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals"),Lc()},"h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),Dc()},"data-splitting")),window.animationController.queueAnimation(()=>{console.log("Setting up circle text"),E0()},"circle-text"),window.animationController.queueAnimation(()=>{console.log("Setting up scroll-based reveals"),vf(),l0(),c0()},"scroll-animations"),window.animationController.queueAnimation(()=>{console.log("Setting up page-specific event handlers"),qd(),Hc(),Zy(),console.log("Scroll re-enabled after animations"),setTimeout(()=>{window.ScrollTrigger&&(window.ScrollTrigger.refresh(),console.log("ScrollTrigger refreshed after transition")),window.lenis&&(window.lenis.resize(),console.log("Lenis resized after transition"))},100);const l=r.next.container.querySelectorAll("img"),c=Array.from(l).map(h=>h.complete?Promise.resolve():new Promise(d=>{h.addEventListener("load",d,{once:!0}),h.addEventListener("error",d,{once:!0})}));Promise.all(c).then(()=>{console.log("All images loaded, final scroll recalculation"),window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()});const u=r.next.container.querySelector(".page");if(u&&window.ResizeObserver){let h;const d=new ResizeObserver(f=>{clearTimeout(h),h=setTimeout(()=>{console.log("Content size changed, updating scroll calculations"),window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()},150)});d.observe(u),r.next.container._resizeObserver=d}Xd(),Gm(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(h=>{console.log("Final fix for missed splitting-rows element"),h.classList.add("reveal")})},"final-setup"),window.animationController.processPendingAnimations(),Promise.resolve()}function SC(){const r=new Set,e=i=>!(!i||!i.href||i.origin!==window.location.origin||i.href===window.location.href||i.hash&&i.href.replace(i.hash,"")===window.location.href.replace(window.location.hash,"")||r.has(i.href)),t=i=>{r.add(i),fetch(i,{credentials:"include"}).catch(()=>{r.delete(i)})},n=i=>{const s=i.target.closest("a[href]");e(s)&&(requestIdleCallback?requestIdleCallback(()=>t(s.href),{timeout:200}):setTimeout(()=>t(s.href),32))};["mouseover","focusin","touchstart"].forEach(i=>{document.addEventListener(i,n,{passive:!0})})}function Gm(){console.log("Barba transition: ensuring containers are visible");const r=document.querySelector("[data-barba='container']");r&&We.set(r,{visibility:"visible",opacity:1})}function bC(r){r.forEach(e=>{const t=document.createElement("video");t.preload="auto",t.src=e,t.oncanplaythrough=()=>{console.log(`Preloaded: ${e}`)}})}function MC(){if(document.querySelectorAll("video").length>0){let t=function(n){const i=n.closest(".large-video");!n.paused&&!n.ended?(i.classList.add("playing"),i.classList.remove("paused")):(i.classList.remove("playing"),i.classList.add("paused"))};var e=t;document.querySelectorAll("svg.pause").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused?i.play():i.pause(),t(i)})}),document.querySelectorAll("svg.play").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused&&i.play(),t(i)})})}}const wC="/assets/MagsHomepageArticlePage-Bo8PkPdc.mp4",EC="/assets/IssuePageCategoryPage2-DSNaO4kd.mp4",TC="/assets/MagsColorReel2-CasZpZHA.mp4",AC="/assets/MagsTypographyReel-B-XlzHXa.mp4";document.addEventListener("DOMContentLoaded",CC);function CC(){zA(),_C(),qd(),bC([wC,EC,TC,AC]),MC()}
