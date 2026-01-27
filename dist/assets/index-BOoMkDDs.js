var U0=Object.defineProperty;var F0=(r,e,t)=>e in r?U0(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ve=(r,e,t)=>F0(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Zi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mo={duration:.5,overwrite:!1,delay:0},Md,ln,Lt,ci=1e8,Et=1/ci,Xu=Math.PI*2,k0=Xu/4,B0=0,Hm=Math.sqrt,z0=Math.cos,H0=Math.sin,sn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},rr=function(e){return typeof e=="number"},wd=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},On=function(e){return e!==!1},Ed=function(){return typeof window<"u"},nl=function(e){return kt(e)||sn(e)},Vm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,qu=/(?:-?\.?\d|\.)+/gi,Gm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wm=/[+-]=-?[.\d]+/,Xm=/[^,'"\[\]\s]+/gi,V0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ai,$u,Td,ei={},cc={},qm,$m=function(e){return(cc=wo(e,ei))&&zn},Ad=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pa=function(e,t){return!t&&console.warn(e)},Ym=function(e,t){return e&&(ei[e]=t)&&cc&&(cc[e]=t)||ei},La=function(){return 0},G0={suppressEvents:!0,isStart:!0,kill:!1},Xl={suppressEvents:!0,kill:!1},W0={suppressEvents:!0},Cd={},Cr=[],Yu={},jm,$n={},qc={},wf=30,ql=[],Rd="",Pd=function(e){var t=e[0],n,i;if(zi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ql.length;i--&&!ql[i].targetTest(t););n=ql[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yg(e[i],n)))||e.splice(i,1);return e},fs=function(e){return e._gsap||Pd(ui(e))[0]._gsap},Zm=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():wd(n)&&e.getAttribute&&e.getAttribute(t)||n},Nn=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},ho=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},X0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},uc=function(){var e=Cr.length,t=Cr.slice(0),n,i;for(Yu={},Cr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ld=function(e){return!!(e._initted||e._startAt||e.add)},Jm=function(e,t,n,i){Cr.length&&!ln&&uc(),e.render(t,n,!!(ln&&t<0&&Ld(e))),Cr.length&&!ln&&uc()},Km=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xm).length<2?t:sn(e)?e.trim():e},Qm=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},q0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wo=function(e,t){for(var n in t)e[n]=t[n];return e},Ef=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},hc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},da=function(e){var t=e.parent||It,n=e.keyframes?q0(gn(e.keyframes)):ti;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},eg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ic=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ir=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Y0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ju=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Xl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},j0=function r(e){return!e||e._ts&&r(e.parent)},Tf=function(e){return e._repeat?Eo(e._tTime,e=e.duration()+e._rDelay)*e:0},Eo=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Oc=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Nc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Oc(e),n._dirty||ps(n,e)),e},tg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dc(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},Pi=function(e,t,n,i){return t.parent&&Ir(t),t._start=qt((rr(n)?n:n||e!==It?oi(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eg(e,t,"_first","_last",e._sort?"_start":0),Zu(t)||(e._recent=t),i||tg(e,t),e._ts<0&&Nc(e,e._tTime),e},ng=function(e,t){return(ei.ScrollTrigger||Ad("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},ig=function(e,t,n,i,s){if(Id(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jm!==Zn.frame)return Cr.push(e),e._lazy=[s,i],1},Z0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},J0=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Z0(e)&&!(!e._initted&&Zu(e))||(e._ts<0||e._dp._ts<0)&&!Zu(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ja(0,e._tDur,t),u=Eo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Eo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ln||i||e._zTime===Et||!t&&e._zTime){if(!e._initted&&ig(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Et:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ju(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ir(e,1),!n&&!ln&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},K0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},To=function(e,t,n,i){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Nc(e,e._tTime=e._tDur*a),e.parent&&Oc(e),n||ps(e.parent,e),e},Af=function(e){return e instanceof An?ps(e):To(e,e._dur)},Q0={_start:0,endTime:La,totalDuration:La},oi=function r(e,t,n){var i=e.labels,s=e._recent||Q0,o=e.duration()>=ci?s.endTime(!1):e._dur,a,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},fa=function(e,t,n){var i=rr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Xt(t[0],o,t[s+1])},kr=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!sn(e)||!(t=V0.exec(e))?"":t[1]},ev=function(e,t,n){return kr(n,function(i){return ja(e,t,i)})},Ju=[].slice,rg=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ai},tv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return sn(i)&&!t||rg(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):sn(e)&&!n&&($u||!Ao())?Ju.call((t||Td).querySelectorAll(e),0):gn(e)?tv(e,n):rg(e)?Ju.call(e,0):e?[e]:[]},Ku=function(e){return e=ui(e)[0]||Pa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Pa("Invalid scope")||Td.createElement("div"):e)}},sg=function(e){return e.sort(function(){return .5-Math.random()})},og=function(e){if(kt(e))return e;var t=zi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var p=(_||t).length,g=o[p],m,x,y,v,E,w,M,A,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,ci])[1],!b){for(M=-ci;M<(M=_[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(g=o[p]=[],m=l?Math.min(b,p)*u-.5:i%b,x=b===ci?0:l?p*h/b-.5:i/b|0,M=0,A=ci,w=0;w<p;w++)y=w%b-m,v=x-(w/b|0),g[w]=E=c?Math.abs(c==="y"?v:y):Hm(y*y+v*v),E>M&&(M=E),E<A&&(A=E);i==="random"&&sg(g),g.max=M-A,g.min=A,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),g.b=p<0?s-p:s,g.u=pn(t.amount||t.each)||0,n=n&&p<0?gg(n):n}return p=(g[d]-g.min)/g.max||0,qt(g.b+(n?n(p):p)*g.v)+g.u}},Qu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(rr(n)?0:pn(n))}},ag=function(e,t){var n=gn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(s=!rr(e[0]))&&(i*=i)):e=Qu(e.increment)),kr(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ci,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||rr(o)?u:u+pn(o)}:Qu(e))},lg=function(e,t,n,i){return kr(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},iv=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},rv=function(e,t,n){return ug(e,t,0,1,n)},cg=function(e,t,n){return kr(n,function(i){return e[~~t(i)]})},sv=function r(e,t,n){var i=t-e;return gn(e)?cg(e,r(0,e.length),t):kr(n,function(s){return(i+(s-e)%i)%i+e})},ov=function r(e,t,n){var i=t-e,s=i*2;return gn(e)?cg(e,r(0,e.length-1),t):kr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Da=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Xm:qu),n+=e.substr(t,i-t)+lg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},ug=function(e,t,n,i,s){var o=t-e,a=i-n;return kr(s,function(l){return n+((l-e)/o*a||0)})},av=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=sn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var p=Math.min(d,~~_);return u[p](_-p)},n=t}else i||(e=wo(gn(e)?[]:{},e));if(!u){for(l in t)Dd.call(a,e,l,"get",t[l]);s=function(_){return Ud(_,a)||(o?e.p:e)}}}return kr(n,s)},Cf=function(e,t,n){var i=e.labels,s=ci,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],o=Lt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Cr.length&&uc(),a&&(Lt=a),u=l?s.apply(c,l):s.call(c),Lt=o,u},na=function(e){return Ir(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Kn(e,"onInterrupt"),e},so,hg=[],dg=function(e){if(e)if(e=!e.name&&e.default||e,Ed()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:La,render:Ud,add:Dd,kill:Mv,modifier:bv,rawVars:0},o={targetTest:0,get:0,getSetter:Nd,aliases:{},register:0};if(Ao(),e!==i){if($n[t])return;ti(i,ti(hc(e,s),o)),wo(i.prototype,wo(s,hc(e,o))),$n[i.prop=t]=i,e.targetTest&&(ql.push(i),Cd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ym(t,i),e.register&&e.register(zn,i,Un)}else hg.push(e)},wt=255,ia={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},$c=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},fg=function(e,t,n){var i=e?rr(e)?[e>>16,e>>8&wt,e&wt]:0:ia.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(qu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=$c(l+1/3,s,o),i[1]=$c(l,s,o),i[2]=$c(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Gm),n&&i.length<4&&(i[3]=1),i}else i=e.match(qu)||ia.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},pg=function(e){var t=[],n=[],i=-1;return e.split(Rr).forEach(function(s){var o=s.match(ro)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Rf=function(e,t,n){var i="",s=(e+i).match(Rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=fg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=pg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Rr,"1").split(ro),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),lv=/hsl[a]?\(/,mg=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=lv.test(t),e[1]=Rf(e[1],n),e[0]=Rf(e[0],n,pg(e[1])),!0},Ia,Zn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function p(g){var m=r()-i,x=g===!0,y,v,E,w;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,y=E-o,(y>0||x)&&(w=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(p)),v)for(f=0;f<a.length;f++)a[f](E,d,w,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){qm&&(!$u&&Ed()&&(Ai=$u=window,Td=Ai.document||{},ei.gsap=zn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(zn.version),$m(cc||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),hg.forEach(dg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ia=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=La},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,m,x){var y=m?function(v,E,w,M){g(v,E,w,M),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),Ao(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h})(),Ao=function(){return!Ia&&Zn.wake()},ht={},cv=/^[\d.\-M][\d.\-,\s]/,uv=/["']/g,hv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(uv,"").trim():+c,i=l.substr(a+1).trim();return t},dv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},fv=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hv(t[1])]:dv(e).split(",").map(Km)):ht._CE&&cv.test(e)?ht._CE("",e):n},gg=function(e){return function(t){return 1-e(1-t)}},_g=function r(e,t){for(var n=e._first,i;n;)n instanceof An?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(kt(e)?e:ht[e]||fv(e))||t},Ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Nn(e,function(a){ht[a]=ei[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},vg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Xu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*H0((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:vg(a);return s=Xu/s,l.config=function(c,u){return r(e,c,u)},l},jc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:vg(n);return i.config=function(s){return r(e,s)},i};Nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Ps("Elastic",Yc("in"),Yc("out"),Yc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ps("Circ",function(r){return-(Hm(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-z0(r*k0)+1});Ps("Back",jc("in"),jc("out"),jc());ht.SteppedEase=ht.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((i*ja(0,o,a)|0)+s)*n}}};Mo.ease=ht["quad.out"];Nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rd+=r+","+r+"Params,"});var yg=function(e,t){this.id=B0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zm,this.set=t?t.getSetter:Nd},Oa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,To(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Ia||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,To(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nc(this,n),!s._dp||s.parent||tg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Et||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Eo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Et?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Oc(this),Y0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=W0);var i=ln;return ln=n,Ld(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Af(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Af(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-Et),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Et)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=kt(n)?n:Qm,a=function(){var c=i.then;i.then=null,kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){na(this)},r})();ti(Oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var An=(function(r){zm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),It&&Pi(n.parent||It,Zi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ng(Zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return fa(0,arguments,this),this},t.from=function(i,s,o){return fa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return fa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,oi(this,o),1),this},t.call=function(i,s,o){return Pi(this,Xt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Xt(i,o,oi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,da(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,da(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,p,g,m,x,y,v,E,w,M;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=qt(u%g),u===l?(p=this._repeat,d=c):(E=qt(u/g),p=~~E,p&&p===E&&(d=c,p--),d>c&&(d=c)),E=Eo(this._tTime,g),!a&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),w&&p&1&&(d=c-d,M=1),p!==E&&!this._lock){var A=w&&E&1,b=A===(w&&p&1);if(p<E&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(M?0:qt(p*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;_g(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=K0(this,qt(a),qt(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!E&&(Kn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-Et);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,o||ln&&Ld(f)),d!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=S?-Et:Et);break}}f=_}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Et)._zTime=d>=a?1:-1,this._ts))return this._start=v,Oc(this),this.render(i,s,o);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ir(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(rr(s)||(s=oi(this,s,i)),!(i instanceof Oa)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(sn(i))return this.addLabel(i,s);if(kt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Xt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return sn(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&Ic(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Xt.delayedCall(0,s||La,o);return a.data="isPause",this._hasPause=1,Pi(this,a,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Ir(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)br!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ui(i),l=this._first,c=rr(s),u;l;)l instanceof Xt?X0(l._targets,a)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=oi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Xt.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&To(_,g,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Cf(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Cf(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ci,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;To(o,o===It&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(It._ts&&(Jm(It,dc(i,It)),jm=Zn.frame),Zn.frame>=wf){wf+=Qn.autoSleep||120;var s=It._first;if((!s||!s._ts)&&Qn.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(Oa);ti(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var pv=function(e,t,n,i,s,o,a){var l=new Un(this._pt,e,t,0,1,Eg,null,s),c=0,u=0,h,d,f,_,p,g,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Da(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(Xc)||[];h=Xc.exec(i);)_=h[0],p=i.substring(c,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?ho(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=Xc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wm.test(i)||m)&&(l.e=0),this._pt=l,l},Dd=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:kt(h)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=kt(h)?c?yv:Mg:Od,_;if(sn(i)&&(~i.indexOf("random(")&&(i=Da(i)),i.charAt(1)==="="&&(_=ho(d,i)+(pn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||eh)return!isNaN(d*i)&&i!==""?(_=new Un(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Sv:wg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Ad(t,i),pv.call(this,e,t,d,i,f,l||Qn.stringFilter,c))},mv=function(e,t,n,i,s){if(kt(e)&&(e=pa(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||gn(e)||Vm(e))return sn(e)?pa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,i);return o},xg=function(e,t,n,i,s,o){var a,l,c,u;if($n[e]&&(a=new $n[e]).init(s,a.rawVars?t[e]:mv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==so))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},br,eh,Id=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,p=e._startAt,g=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=e._overwrite==="auto"&&!Md,v=e.timeline,E,w,M,A,b,S,N,F,G,V,Y,X,q;if(v&&(!d||!s)&&(s="none"),e._ease=ms(s,Mo.ease),e._yEase=h?gg(ms(h===!0?s:h,Mo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(F=g[0]?fs(g[0]).harness:0,X=F&&i[F.prop],E=hc(i,Cd),p&&(p._zTime<0&&p.progress(1),t<0&&u&&a&&!f?p.render(-1,!0):p.revert(u&&_?Xl:G0),p._lazy=0),o){if(Ir(e._startAt=Xt.set(g,ti({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!f)&&e._startAt.revert(Xl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!p){if(t&&(a=!1),M=ti({overwrite:!1,data:"isFromStart",lazy:a&&!p&&On(l),immediateRender:a,stagger:0,parent:m},E),X&&(M[F.prop]=X),Ir(e._startAt=Xt.set(g,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Xl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&On(l)||l&&!_,w=0;w<g.length;w++){if(b=g[w],N=b._gsap||Pd(g)[w]._gsap,e._ptLookup[w]=V={},Yu[N.id]&&Cr.length&&uc(),Y=x===g?w:x.indexOf(b),F&&(G=new F).init(b,X||E,e,Y,x)!==!1&&(e._pt=A=new Un(e._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){V[B]=A}),G.priority&&(S=1)),!F||X)for(M in E)$n[M]&&(G=xg(M,E,e,Y,b,x))?G.priority&&(S=1):V[M]=A=Dd.call(e,b,M,"get",E[M],Y,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(b,e._op[w]),y&&e._pt&&(br=e,It.killTweensOf(b,V,e.globalTime(t)),q=!e.parent,br=0),e._pt&&l&&(Yu[N.id]=1)}S&&Tg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&v.render(ci,!0,!0)},gv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return eh=1,e.vars[t]="+=0",Id(e,a),eh=0,l?Pa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=zt(n)+pn(h.e)),h.b&&(h.b=u.s+pn(h.b))},_v=function(e,t){var n=e[0]?fs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=wo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},vv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):sn(e)&&~e.indexOf("random(")?Da(e):e},Sg=Rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bg={};Nn(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return bg[r]=1});var Xt=(function(r){zm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:da(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,x=i.parent||It,y=(gn(n)||Vm(n)?rr(n[0]):"length"in i)?[n]:ui(n),v,E,w,M,A,b,S,N;if(a._targets=y.length?Pd(y):Pa("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||nl(c)||nl(u)){if(i=a.vars,v=a.timeline=new An({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Zi(a),v._start=0,d||nl(c)||nl(u)){if(M=y.length,S=d&&og(d),zi(d))for(A in d)~Sg.indexOf(A)&&(N||(N={}),N[A]=d[A]);for(E=0;E<M;E++)w=hc(i,bg),w.stagger=0,m&&(w.yoyoEase=m),N&&wo(w,N),b=y[E],w.duration=+pa(c,Zi(a),E,b,y),w.delay=(+pa(u,Zi(a),E,b,y)||0)-a._delay,!d&&M===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(b,w,S?S(E,b,y):0),v._ease=ht.none;v.duration()?c=u=0:a.timeline=0}else if(_){da(ti(v.vars.defaults,{ease:"none"})),v._ease=ms(_.ease||i.ease||"none");var F=0,G,V,Y;if(gn(_))_.forEach(function(X){return v.to(y,X,">")}),v.duration();else{w={};for(A in _)A==="ease"||A==="easeEach"||vv(A,_[A],w,_.easeEach);for(A in w)for(G=w[A].sort(function(X,q){return X.t-q.t}),F=0,E=0;E<G.length;E++)V=G[E],Y={ease:V.e,duration:(V.t-(E?G[E-1].t:0))/100*c},Y[A]=V.v,v.to(y,Y,F),F+=Y.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Md&&(br=Zi(a),It.killTweensOf(y),br=0),Pi(x,Zi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===qt(x._time)&&On(h)&&j0(Zi(a))&&x.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-u)||0)),g&&ng(Zi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Et&&!u?l:i<Et?0:i,d,f,_,p,g,m,x,y,v;if(!c)J0(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,o);if(d=qt(h%p),h===l?(_=this._repeat,d=c):(g=qt(h/p),_=~~g,_&&_===g?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),g=Eo(this._tTime,p),d===a&&!o&&this._initted&&_===g)return this._tTime=h,this;_!==g&&(y&&this._yEase&&_g(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render(qt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(ig(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ju(this,i,s,o),Kn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ju(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ir(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ia||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Id(this,c),u=this._ease(c/this._dur),gv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(Nc(this,0),this.parent||eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,br&&br.vars.overwrite!==!0)._first||na(this),this.parent&&o!==this.timeline.totalDuration()&&To(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,p,g,m;if((!s||s==="all")&&$0(a,l))return s==="all"&&(this._pt=0),na(this);for(h=this._op=this._op||[],s!=="all"&&(sn(s)&&(p={},Nn(s,function(x){return p[x]=1}),s=p),s=_v(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,_=d,f={}):(f=h[m]=h[m]||{},_=s);for(p in _)g=d&&d[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Ic(this,g,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return fa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return fa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return It.killTweensOf(i,s,o)},e})(Oa);ti(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nn("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new An,t=Ju.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Od=function(e,t,n){return e[t]=n},Mg=function(e,t,n){return e[t](n)},yv=function(e,t,n,i){return e[t](i.fp,n)},xv=function(e,t,n){return e.setAttribute(t,n)},Nd=function(e,t){return kt(e[t])?Mg:wd(e[t])&&e.setAttribute?xv:Od},wg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Sv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Eg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ud=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Mv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ic(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Tg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||wg,this.d=l||this,this.set=c||Od,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wv,this.m=n,this.mt=s,this.tween=i},r})();Nn(Rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Cd[r]=1});ei.TweenMax=ei.TweenLite=Xt;ei.TimelineLite=ei.TimelineMax=An;It=new An({sortChildren:!1,defaults:Mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=mg;var gs=[],$l={},Ev=[],Pf=0,Tv=0,Zc=function(e){return($l[e]||Ev).map(function(t){return t()})},th=function(){var e=Date.now(),t=[];e-Pf>2&&(Zc("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Pf=e,Zc("matchMedia"))},Ag=(function(){function r(t,n){this.selector=n&&Ku(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Tv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=Lt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ku(s)),Lt=o,h=i.apply(o,arguments),kt(h)&&o._r.push(h),Lt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Av=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var o=new Ag(0,s||this.scope),a=o.conditions={},l,c,u;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ai.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(th):l.addEventListener("change",th)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),fc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dg(i)})},timeline:function(e){return new An(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=ui(e)[0]);var s=fs(e||{}).get,o=n?Qm:Km;return n==="native"&&(n=""),e&&(t?o(($n[t]&&$n[t].get||s)(e,t,n,i)):function(a,l,c){return o(($n[a]&&$n[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(u){return zn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=$n[t],a=fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;so._pt=0,h.init(e,n?u+n:u,so,0,[e]),h.render(1,h),so._pt&&Ud(1,so)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=zn.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Mo.ease)),Ef(Mo,e||{})},config:function(e){return Ef(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$n[a]&&!ei[a]&&Pa(t+" effect requires "+a+" plugin.")}),qc[t]=function(a,l,c){return n(ui(a),ti(l||{},s),c)},o&&(An.prototype[t]=function(a,l,c){return this.add(qc[t](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):ht},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new An(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(It,n,0),n},context:function(e,t){return e?new Ag(e,t):Lt},matchMedia:function(e){return new Av(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||th()},addEventListener:function(e,t){var n=$l[e]||($l[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$l[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sv,wrapYoyo:ov,distribute:og,random:lg,snap:ag,normalize:rv,getUnit:pn,clamp:ev,splitColor:fg,toArray:ui,selector:Ku,mapRange:ug,pipe:nv,unitize:iv,interpolate:av,shuffle:sg},install:$m,effects:qc,ticker:Zn,updateRoot:An.updateRoot,plugins:$n,globalTimeline:It,core:{PropTween:Un,globals:Ym,Tween:Xt,Timeline:An,Animation:Oa,getCache:fs,_removeLinkedListItem:Ic,reverting:function(){return ln},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Md=e}}};Nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fc[r]=Xt[r]});Zn.add(An.updateRoot);so=fc.to({},{duration:0});var Cv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Rv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Cv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Jc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(sn(s)&&(l={},Nn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Rv(a,s)}}}},zn=fc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jc("roundProps",Qu),Jc("modifiers"),Jc("snap",ag))||fc;Xt.version=An.version=zn.version="3.13.0";qm=1;Ed()&&Ao();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lf,Mr,fo,Fd,os,Df,kd,Pv=function(){return typeof window<"u"},sr={},Kr=180/Math.PI,po=Math.PI/180,Os=Math.atan2,If=1e8,Bd=/([A-Z])/g,Lv=/(left|right|width|margin|padding|x)/i,Dv=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ov=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uv=function(e,t,n){return e.style[t]=n},Fv=function(e,t,n){return e.style.setProperty(t,n)},kv=function(e,t,n){return e._gsap[t]=n},Bv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Hv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",Fn=Ot+"Origin",Vv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[e]=o.x?o[e]:Ji(i,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Pg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=kd(),(!s||!s.isStart)&&!n[Ot]&&(Pg(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lg=function(e,t){var n={target:e,props:[],revert:Gv,save:Vv};return e._gsap||zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Dg,ih=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},hi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Bd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Co(t)||t,1)||""},Of="O,Moz,ms,Ms,Webkit".split(","),Co=function(e,t,n){var i=t||os,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Of[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Of[o]:"")+e},rh=function(){Pv()&&window.document&&(Lf=window,Mr=Lf.document,fo=Mr.documentElement,os=ih("div")||{style:{}},ih("div"),Ot=Co(Ot),Fn=Ot+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dg=!!Co("perspective"),kd=zn.core.reverting,Fd=1)},Nf=function(e){var t=e.ownerSVGElement,n=ih("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fo.removeChild(n),s},Uf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ig=function(e){var t,n;try{t=e.getBBox()}catch{t=Nf(e),n=1}return t&&(t.width||t.height)||n||(t=Nf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Uf(e,["x","cx","x1"])||0,y:+Uf(e,["y","cy","y1"])||0,width:0,height:0}:t},Og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ig(e))},Ss=function(e,t){if(t){var n=e.style,i;t in sr&&t!==Fn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Bd,"-$1").toLowerCase())):n.removeAttribute(t)}},wr=function(e,t,n,i,s,o){var a=new Un(e._pt,t,n,0,1,o?Rg:Cg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Ff={deg:1,rad:1,turn:1},Wv={grid:1,flex:1},Or=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=os.style,l=Lv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,p,g,m;if(i===o||!s||Ff[i]||Ff[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&Og(e),(f||o==="%")&&(sr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],zt(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Mr||!p.appendChild)&&(p=Mr.body),g=p._gsap,g&&f&&g.width&&l&&g.time===Zn.time&&!g.uncache)return zt(s/g.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:Ss(e,t)}else(f||o==="%")&&!Wv[hi(p,"display")]&&(a.position=hi(e,"position")),p===e&&(a.position="static"),p.appendChild(os),_=os[u],p.removeChild(os),a.position="absolute";return l&&f&&(g=fs(p),g.time=Zn.time,g.width=p[u]),zt(d?_*s/h:_&&s?h/_*s:0)},Ji=function(e,t,n,i){var s;return Fd||rh(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),sr[t]&&t!=="transform"?(s=Ua(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:mc(hi(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pc[t]&&pc[t](e,t,n)||hi(e,t)||Zm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,n)+n:s},Xv=function(e,t,n,i){if(!n||n==="none"){var s=Co(t,e,1),o=s&&hi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var a=new Un(this._pt,e.style,t,0,1,Eg),l=0,c=0,u,h,d,f,_,p,g,m,x,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=hi(e,t)||i,p?e.style[t]=p:Ss(e,t)),u=[n,i],mg(u),n=u[0],i=u[1],d=n.match(ro)||[],E=i.match(ro)||[],E.length){for(;h=ro.exec(i);)g=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),g!==(p=d[c++]||"")&&(f=parseFloat(p)||0,v=p.substr((f+"").length),g.charAt(1)==="="&&(g=ho(f,g)+v),m=parseFloat(g),y=g.substr((m+"").length),l=ro.lastIndex-y.length,y||(y=y||Qn.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=Or(e,t,p,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Rg:Cg;return Wm.test(i)&&(a.e=0),this._pt=a,a},kf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kf[n]||n,t[1]=kf[i]||i,t.join(" ")},$v=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],sr[a]&&(l=1,a=a==="transformOrigin"?Fn:Ot),Ss(n,a);l&&(Ss(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ua(n,1),o.uncache=1,Pg(i)))}},pc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Un(e._pt,t,n,0,0,$v);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Na=[1,0,0,1,0,0],Ng={},Ug=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bf=function(e){var t=hi(e,Ot);return Ug(t)?Na:t.substr(7).match(Gm).map(zt)},zd=function(e,t){var n=e._gsap||fs(e),i=e.style,s=Bf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Na:s):(s===Na&&!e.offsetParent&&e!==fo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fo.appendChild(e)),s=Bf(e),l?i.display=l:Ss(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sh=function(e,t,n,i,s,o){var a=e._gsap,l=s||zd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],p=l[2],g=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,M,A,b;n?l!==Na&&(M=f*g-_*p)&&(A=v*(g/M)+E*(-p/M)+(p*x-g*m)/M,b=v*(-_/M)+E*(f/M)-(f*x-_*m)/M,v=A,E=b):(w=Ig(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&a.smooth?(m=v-c,x=E-u,a.xOffset=h+(m*f+x*p)-m,a.yOffset=d+(m*_+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(wr(o,a,"xOrigin",c,v),wr(o,a,"yOrigin",u,E),wr(o,a,"xOffset",h,a.xOffset),wr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Ua=function(e,t){var n=e._gsap||new yg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=hi(e,Fn)||"0",u,h,d,f,_,p,g,m,x,y,v,E,w,M,A,b,S,N,F,G,V,Y,X,q,B,ne,I,ce,ye,we,U,O;return u=h=d=p=g=m=x=y=v=0,f=_=1,n.svg=!!(e.getCTM&&Og(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),M=zd(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),sh(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,M)),E=n.xOrigin||0,w=n.yOrigin||0,M!==Na&&(N=M[0],F=M[1],G=M[2],V=M[3],u=Y=M[4],h=X=M[5],M.length===6?(f=Math.sqrt(N*N+F*F),_=Math.sqrt(V*V+G*G),p=N||F?Os(F,N)*Kr:0,x=G||V?Os(G,V)*Kr+p:0,x&&(_*=Math.abs(Math.cos(x*po))),n.svg&&(u-=E-(E*N+w*G),h-=w-(E*F+w*V))):(O=M[6],we=M[7],I=M[8],ce=M[9],ye=M[10],U=M[11],u=M[12],h=M[13],d=M[14],A=Os(O,ye),g=A*Kr,A&&(b=Math.cos(-A),S=Math.sin(-A),q=Y*b+I*S,B=X*b+ce*S,ne=O*b+ye*S,I=Y*-S+I*b,ce=X*-S+ce*b,ye=O*-S+ye*b,U=we*-S+U*b,Y=q,X=B,O=ne),A=Os(-G,ye),m=A*Kr,A&&(b=Math.cos(-A),S=Math.sin(-A),q=N*b-I*S,B=F*b-ce*S,ne=G*b-ye*S,U=V*S+U*b,N=q,F=B,G=ne),A=Os(F,N),p=A*Kr,A&&(b=Math.cos(A),S=Math.sin(A),q=N*b+F*S,B=Y*b+X*S,F=F*b-N*S,X=X*b-Y*S,N=q,Y=B),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,m=180-m),f=zt(Math.sqrt(N*N+F*F+G*G)),_=zt(Math.sqrt(X*X+O*O)),A=Os(Y,X),x=Math.abs(A)>2e-4?A*Kr:0,v=U?1/(U<0?-U:U):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ug(hi(e,Ot)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=zt(f),n.scaleY=zt(_),n.rotation=zt(p)+a,n.rotationX=zt(g)+a,n.rotationY=zt(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=mc(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?jv:Dg?Fg:Yv,n.uncache=0,n},mc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kc=function(e,t,n){var i=pn(t);return zt(parseFloat(t)+parseFloat(Or(e,"x",n+"px",i)))+i},Yv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fg(e,t)},Vr="0deg",Go="0px",Gr=") ",Fg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,p=n.scaleY,g=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Vr||u!==Vr)){var w=parseFloat(u)*po,M=Math.sin(w),A=Math.cos(w),b;w=parseFloat(h)*po,b=Math.cos(w),o=Kc(x,o,M*b*-y),a=Kc(x,a,-Math.sin(w)*-y),l=Kc(x,l,A*b*-y+y)}g!==Go&&(v+="perspective("+g+Gr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||o!==Go||a!==Go||l!==Go)&&(v+=l!==Go||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gr),c!==Vr&&(v+="rotate("+c+Gr),u!==Vr&&(v+="rotateY("+u+Gr),h!==Vr&&(v+="rotateX("+h+Gr),(d!==Vr||f!==Vr)&&(v+="skew("+d+", "+f+Gr),(_!==1||p!==1)&&(v+="scale("+_+", "+p+Gr),x.style[Ot]=v||"translate(0, 0)"},jv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,p=n.yOrigin,g=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,w,M,A,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=po,c*=po,E=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(u*=po,b=Math.tan(c-u),b=Math.sqrt(1+b*b),M*=b,A*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=zt(E),w=zt(w),M=zt(M),A=zt(A)):(E=h,A=d,w=M=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Or(f,"x",o,"px"),v=Or(f,"y",a,"px")),(_||p||g||m)&&(y=zt(y+_-(_*E+p*M)+g),v=zt(v+p-(_*w+p*A)+m)),(i||s)&&(b=f.getBBox(),y=zt(y+i/100*b.width),v=zt(v+s/100*b.height)),b="matrix("+E+","+w+","+M+","+A+","+y+","+v+")",f.setAttribute("transform",b),x&&(f.style[Ot]=b)},Zv=function(e,t,n,i,s){var o=360,a=sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Kr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*If)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*If)%o-~~(c/o)*o)),e._pt=d=new Un(e._pt,t,n,i,c,Iv),d.e=u,d.u="deg",e._props.push(n),d},zf=function(e,t){for(var n in t)e[n]=t[n];return e},Jv=function(e,t,n){var i=zf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Ua(n,1),Ss(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=Ua(n,1),o[Ot]=c);for(l in sr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=pn(c),_=pn(u),h=f!==_?Or(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Un(e._pt,a,l,h,d-h,nh),e._pt.u=_||0,e._props.push(l));zf(a,i)};Nn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});pc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Ji(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,p){return f[_]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,f,h)}});var kg={name:"css",register:rh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,p,g,m,x,y,v,E,w,M,A;Fd||rh(),this.styles=this.styles||Lg(e),A=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!($n[p]&&xg(p,t,n,i,e,s)))){if(f=typeof u,_=pc[p],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Da(u)),_)_(this,e,p,u,n)&&(M=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(g=pn(c),m=pn(u)),m?g!==m&&(c=Or(e,p,c,m)+m):g&&(u+=g),this.add(a,"setProperty",c,u,i,s,0,0,p),o.push(p),A.push(p,0,a[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],sn(c)&&~c.indexOf("random(")&&(c=Da(c)),pn(c+"")||c==="auto"||(c+=Qn.units[p]||pn(Ji(e,p))||""),(c+"").charAt(1)==="="&&(c=Ji(e,p))):c=Ji(e,p),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),p in Di&&(p==="autoAlpha"&&(d===1&&Ji(e,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,a.visibility),wr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Di[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in sr,y){if(this.styles.save(p),f==="string"&&u.substring(0,6)==="var(--"&&(u=hi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ua(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new Un(this._pt,a,Ot,0,1,E.renderTransform,E,0,-1),v.dep=1),p==="scale")this._pt=new Un(this._pt,E,"scaleY",E.scaleY,(x?ho(E.scaleY,x+h):h)-E.scaleY||0,nh),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){A.push(Fn,0,a[Fn]),u=qv(u),E.svg?sh(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&wr(this,E,"zOrigin",E.zOrigin,m),wr(this,a,p,mc(c),mc(u)));continue}else if(p==="svgOrigin"){sh(e,u,1,w,0,this);continue}else if(p in Ng){Zv(this,E,p,d,x?ho(d,x+u):u);continue}else if(p==="smoothOrigin"){wr(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){Jv(this,u,e);continue}}else p in a||(p=Co(p)||p);if(y||(h||h===0)&&(d||d===0)&&!Dv.test(u)&&p in a)g=(c+"").substr((d+"").length),h||(h=0),m=pn(u)||(p in Qn.units?Qn.units[p]:g),g!==m&&(d=Or(e,p,c,m)),this._pt=new Un(this._pt,y?E:a,p,d,(x?ho(d,x+h):h)-d,!y&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Nv:nh),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Ov);else if(p in a)Xv.call(this,e,p,c,x?x+u:u);else if(p in e)this.add(e,p,c||e[p],x?x+u:u,i,s);else if(p!=="parseTransform"){Ad(p,u);continue}y||(p in a?A.push(p,0,a[p]):typeof e[p]=="function"?A.push(p,2,e[p]()):A.push(p,1,c||e[p])),o.push(p)}}M&&Tg(this)},render:function(e,t){if(t.tween._time||!kd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in sr&&t!==Fn&&(e._gsap.x||Ji(e,"x"))?n&&Df===n?t==="scale"?Bv:kv:(Df=n||{})&&(t==="scale"?zv:Hv):e.style&&!wd(e.style[t])?Uv:~t.indexOf("-")?Fv:Nd(e,t)},core:{_removeProperty:Ss,_getMatrix:zd}};zn.utils.checkPrefix=Co;zn.core.getStyleSaver=Lg;(function(r,e,t,n){var i=Nn(r+","+e+","+t,function(s){sr[s]=1});Nn(e,function(s){Qn.units[s]="deg",Ng[s]=1}),Di[i[13]]=r+","+e,Nn(n,function(s){var o=s.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});zn.registerPlugin(kg);var We=zn.registerPlugin(kg)||zn;We.core.Tween;/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kv=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Qv=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,ey=Math.PI/180,il=Math.sin,rl=Math.cos,ma=Math.abs,Wo=Math.sqrt,ty=function(e){return typeof e=="number"},Hf=1e5,cr=function(e){return Math.round(e*Hf)/Hf||0};function ny(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,h,d;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],d=l[u+1],l[u]=h*e+d*n+s,l[u+1]=h*t+d*i+o;return r._dirty=1,r}function iy(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=ma(t),n=ma(n);var c=i%360*ey,u=rl(c),h=il(c),d=Math.PI,f=d*2,_=(r-a)/2,p=(e-l)/2,g=u*_+h*p,m=-h*_+u*p,x=g*g,y=m*m,v=x/(t*t)+y/(n*n);v>1&&(t=Wo(v)*t,n=Wo(v)*n);var E=t*t,w=n*n,M=(E*w-E*y-w*x)/(E*y+w*x);M<0&&(M=0);var A=(s===o?-1:1)*Wo(M),b=A*(t*m/n),S=A*-(n*g/t),N=(r+a)/2,F=(e+l)/2,G=N+(u*b-h*S),V=F+(h*b+u*S),Y=(g-b)/t,X=(m-S)/n,q=(-g-b)/t,B=(-m-S)/n,ne=Y*Y+X*X,I=(X<0?-1:1)*Math.acos(Y/Wo(ne)),ce=(Y*B-X*q<0?-1:1)*Math.acos((Y*q+X*B)/Wo(ne*(q*q+B*B)));isNaN(ce)&&(ce=d),!o&&ce>0?ce-=f:o&&ce<0&&(ce+=f),I%=f,ce%=f;var ye=Math.ceil(ma(ce)/(f/4)),we=[],U=ce/ye,O=4/3*il(U/2)/(1+rl(U/2)),L=u*t,R=h*t,Q=h*-n,de=u*n,$;for($=0;$<ye;$++)i=I+$*U,g=rl(i),m=il(i),Y=rl(i+=U),X=il(i),we.push(g-O*m,m+O*g,Y+O*X,X-O*Y,Y,X);for($=0;$<we.length;$+=2)g=we[$],m=we[$+1],we[$]=g*L+m*Q+G,we[$+1]=g*R+m*de+V;return we[$-2]=a,we[$-1]=l,we}}function ry(r){var e=(r+"").replace(Qv,function(b){var S=+b;return S<1e-4&&S>-1e-4?0:S}).match(Kv)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,h,d,f,_,p,g,m,x,y,v,E,w,M,A=function(S,N,F,G){x=(F-S)/3,y=(G-N)/3,p.push(S+x,N+y,F-x,G-y,F,G)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=f,isNaN(e[c])?(f=e[c].toUpperCase(),_=f!==e[c]):c--,h=+e[c+1],d=+e[c+2],_&&(h+=n,d+=i),c||(g=h,m=d),f==="M")p&&(p.length<8?t.length-=1:a+=p.length),n=g=h,i=m=d,p=[h,d],t.push(p),c+=2,f="L";else if(f==="C")p||(p=[0,0]),_||(n=i=0),p.push(h,d,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(f==="S")x=n,y=i,(E==="C"||E==="S")&&(x+=n-p[p.length-4],y+=i-p[p.length-3]),_||(n=i=0),p.push(x,y,h,d,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(f==="Q")x=n+(h-n)*s,y=i+(d-i)*s,_||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,p.push(x,y,n+(h-n)*s,i+(d-i)*s,n,i),c+=4;else if(f==="T")x=n-p[p.length-4],y=i-p[p.length-3],p.push(n+x,i+y,h+(n+x*1.5-h)*s,d+(i+y*1.5-d)*s,n=h,i=d),c+=2;else if(f==="H")A(n,i,n=h,i),c+=1;else if(f==="V")A(n,i,n,i=h+(_?i-n:0)),c+=1;else if(f==="L"||f==="Z")f==="Z"&&(h=g,d=m,p.closed=!0),(f==="L"||ma(n-h)>.5||ma(i-d)>.5)&&(A(n,i,h,d),f==="L"&&(c+=2)),n=h,i=d;else if(f==="A"){if(w=e[c+4],M=e[c+5],x=e[c+6],y=e[c+7],u=7,w.length>1&&(w.length<3?(y=x,x=M,u--):(y=M,x=w.substr(2),u-=2),M=w.charAt(1),w=w.charAt(0)),v=iy(n,i,+e[c+1],+e[c+2],+e[c+3],+w,+M,(_?n:0)+x*1,(_?i:0)+y*1),c+=u,v)for(u=0;u<v.length;u++)p.push(v[u]);n=p[p.length-2],i=p[p.length-1]}else console.log(l);return c=p.length,c<6?(t.pop(),c=0):p[0]===p[c-2]&&p[1]===p[c-1]&&(p.closed=!0),t.totalPoints=a+c,t}function sy(r){ty(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+cr(o[0])+","+cr(o[1])+" C",n=o.length,s=2;s<n;s++)e+=cr(o[s++])+","+cr(o[s++])+" "+cr(o[s++])+","+cr(o[s++])+" "+cr(o[s++])+","+cr(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In,Bg,zg=function(){return In||typeof window<"u"&&(In=window.gsap)&&In.registerPlugin&&In},Vf=function(){In=zg(),In?(In.registerEase("_CE",Ls.create),Bg=1):console.warn("Please gsap.registerPlugin(CustomEase)")},oy=1e20,sl=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},ay=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,ly=/[cLlsSaAhHvVtTqQ]/g,cy=function(e){var t=e.length,n=oy,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},uy=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?cy(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},hy=function r(e,t,n,i,s,o,a,l,c,u,h){var d=(e+n)/2,f=(t+i)/2,_=(n+s)/2,p=(i+o)/2,g=(s+a)/2,m=(o+l)/2,x=(d+_)/2,y=(f+p)/2,v=(_+g)/2,E=(p+m)/2,w=(x+v)/2,M=(y+E)/2,A=a-e,b=l-t,S=Math.abs((n-a)*b-(i-l)*A),N=Math.abs((s-a)*b-(o-l)*A),F;return u||(u=[{x:e,y:t},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:w,y:M}),(S+N)*(S+N)>c*(A*A+b*b)&&(F=u.length,r(e,t,d,f,x,y,w,M,c,u,h),r(w,M,v,E,g,m,a,l,c,u,h+1+(u.length-F))),u},Ls=(function(){function r(t,n,i){Bg||Vf(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(ay),o=1,a=[],l=[],c=i.precision||1,u=c<=1,h,d,f,_,p,g,m,x,y;if(this.data=n,(ly.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=ry(n)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&uy(s,i.height,i.originY),this.segment=s,_=2;_<h;_+=6)d={x:+s[_-2],y:+s[_-1]},f={x:+s[_+4],y:+s[_+5]},a.push(d,f),hy(d.x,d.y,+s[_],+s[_+1],+s[_+2],+s[_+3],f.x,f.y,1/(c*2e5),a,a.length-1);for(h=a.length,_=0;_<h;_++)m=a[_],x=a[_-1]||m,(m.x>x.x||x.y!==m.y&&x.x===m.x||m===x)&&m.x<=1?(x.cx=m.x-x.x,x.cy=m.y-x.y,x.n=m,x.nx=m.x,u&&_>1&&Math.abs(x.cy/x.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,_===h-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),h--);if(h=1/o+1|0,p=1/h,g=0,m=a[0],u){for(_=0;_<h;_++)y=_*p,m.nx<y&&(m=a[++g]),d=m.y+(y-m.x)/m.cx*m.cy,l[_]={x:y,cx:p,y:d,cy:0,nx:9},_&&(l[_-1].cy=d-l[_-1].y);g=a[a.length-1],l[h-1].cy=g.y-d,l[h-1].cx=g.x-l[l.length-1].x}else{for(_=0;_<h;_++)m.nx<_*p&&(m=a[++g]),l[_]=m;g<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(v){var E=l[v*h|0]||l[h-1];return E.nx<v&&(E=E.n),E.y+(v-E.x)/E.cx*E.cy},this.ease.custom=this,this.id&&In&&In.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){In=n,Vf()},r.get=function(n){return In.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=In.utils.toArray(i.path)[0],u,h,d,f,_,p,g,m,x,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=In.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=sy(ny([n.segment],s,0,0,-o,a,l));else{for(u=[a,l],g=Math.max(5,(i.precision||1)*200),f=1/g,g+=2,m=5/g,x=sl(a+f*s),y=sl(l+n(f)*-o),h=(y-l)/(x-a),d=2;d<g;d++)_=sl(a+d*f*s),p=sl(l+n(d*f)*-o),(Math.abs((p-y)/(_-x)-h)>m||d===g-1)&&(u.push(x,y),h=(p-y)/(_-x)),x=_,y=p;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();Ls.version="3.13.0";Ls.headless=!0;zg()&&In.registerPlugin(Ls);We.registerPlugin(Ls);function dy(){document.addEventListener("DOMContentLoaded",function(){document.body.insertAdjacentHTML("afterbegin",'<div class="cursor-element"><div class="cursor-wrapper"><div class="cursor-effect"></div><span></span></div></div>'),document.body.addEventListener("mousemove",function(){We.to(".cursor-element",{delay:.18,duration:.4}),We.to(".cursor-element",{delay:.4,opacity:1,duration:.8})});const e=document.querySelector(".cursor-element");We.set(e,{xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",t);function t(n){We.to(e,1.4,{ease:Ls.create("cubic",".14,.8,.28,.99"),x:n.clientX,y:n.clientY})}})}dy();function Hd(){var s;window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches&&((s=document.querySelector(".cursor-element"))==null||s.classList.add("hidden"));const r=document.querySelector(".logo"),e=document.querySelector(".cursor-element");r&&(r.addEventListener("mouseenter",function(){e==null||e.classList.add("logo")}),r.addEventListener("mouseleave",function(){e==null||e.classList.remove("logo")})),document.querySelectorAll("a, button, code, input, select, textarea, span.email, svg.play, svg.pause").forEach(o=>{o.addEventListener("mouseenter",function(){var a,l;this.classList.contains("active")||this.classList.contains("logo")||((a=document.querySelector(".cursor-effect"))==null||a.classList.add("active","hover"),(l=document.querySelector(".cursor-element"))==null||l.classList.add("active","hover"))}),o.addEventListener("mouseleave",function(){var a,l;(a=document.querySelector(".cursor-effect"))==null||a.classList.remove("active","hover"),(l=document.querySelector(".cursor-element"))==null||l.classList.remove("active","hover")}),o.addEventListener("click",function(){var a,l;(a=document.querySelector(".cursor-effect"))==null||a.classList.remove("active","hover"),(l=document.querySelector(".cursor-element"))==null||l.classList.remove("active","hover")})}),document.body.addEventListener("mousedown",function(){var o;(o=document.querySelector(".cursor-element"))==null||o.classList.add("mouse-down")}),document.body.addEventListener("mouseup",function(){var o;(o=document.querySelector(".cursor-element"))==null||o.classList.remove("mouse-down")}),document.querySelectorAll("a:not(.active), button, input, select, textarea, span.email, svg.play, svg.pause").forEach(o=>{o.addEventListener("click",function(){const a=document.querySelector(".cursor-effect"),l=document.querySelector(".cursor-element");a&&a.classList.remove("active"),l&&l.classList.add("clicked"),this.closest("nav a")?setTimeout(function(){var c;(c=document.querySelector(".cursor-element"))==null||c.classList.remove("clicked")},800):setTimeout(function(){var c,u;l&&l.classList.remove("clicked"),document.querySelector("a:hover, button:hover, input:hover, select:hover, textarea:hover, span.email:hover, svg.play:hover, svg.pause:hover")&&((c=document.querySelector(".cursor-effect"))==null||c.classList.add("active","hover"),(u=document.querySelector(".cursor-element"))==null||u.classList.add("active","hover"))},800)})}),document.querySelectorAll("a, button").forEach(o=>{o.addEventListener("click",function(a){if(this.classList.contains("active")){a.preventDefault();return}})}),document.querySelectorAll("a, button, code, input, select, textarea").forEach(o=>{o.addEventListener("mouseenter",function(){var a;this.classList.contains("active")||(a=document.querySelector(".cursor-effect"))==null||a.classList.add("active")}),o.addEventListener("mouseleave",function(){var a;(a=document.querySelector(".cursor-effect"))==null||a.classList.remove("active")}),o.addEventListener("click",function(){var a;(a=document.querySelector(".cursor-effect"))==null||a.classList.remove("active")})}),document.querySelectorAll(".skills-wrapper > div").forEach(o=>{o.addEventListener("mouseenter",function(){var a;(a=document.querySelector(".cursor-element"))==null||a.classList.add("hide")}),o.addEventListener("mouseleave",function(){var a;(a=document.querySelector(".cursor-element"))==null||a.classList.remove("hide")})})}function Vd(){const r=document.createElement("style");r.textContent=`
    body::-webkit-scrollbar-thumb {
      opacity: 0.4;
    }
  `,document.head.appendChild(r),document.body.addEventListener("click",fy),document.querySelectorAll("nav a").forEach(e=>{e.addEventListener("click",function(t){this.classList.contains("resume")||this.classList.contains("active")||(this.classList.add("active"),document.querySelectorAll("nav a").forEach(n=>{n!==this&&n.classList.remove("active")}))})}),document.querySelectorAll(".skills-wrapper > div").forEach(e=>{e.addEventListener("mouseleave",function(){this.classList.add("leaving"),setTimeout(()=>{this.classList.remove("leaving")},600)})}),document.querySelectorAll(".email").forEach(e=>{e.addEventListener("click",function(){const t="adrainwolfe@gmail.com";navigator.clipboard.writeText(t).then(()=>{console.log("Email copied to clipboard:",t);const n=document.querySelector(".cursor-element");n&&(n.classList.add("copied"),setTimeout(()=>{n.classList.remove("copied")},2400))}).catch(n=>{console.error("Failed to copy email: ",n)})})}),gc()}function fy(r){if(r.button!==0)return;const e=r.target.closest("a");if(!e)return;if(e.id==="resume-nav-link"||e.classList.contains("resume")||e.getAttribute("href")&&e.getAttribute("href").includes("Resume")){console.log("Resume link clicked - letting browser handle it");return}if(e.hasAttribute("target")||e.getAttribute("href").startsWith("http")||e.getAttribute("href").includes("mailto:")||e.getAttribute("href").includes("tel:")||e.hasAttribute("download")||e.getAttribute("href").startsWith("#"))return;r.preventDefault();const t=e.getAttribute("href"),n=t==="/"||t==="/index.html"||t==="index.html";e.closest("nav")?(document.querySelectorAll("nav a:not(.active)").forEach(i=>{i.classList.add("on-change")}),!e.classList.contains("active")&&!n?(e.classList.add("active"),document.querySelectorAll("nav a").forEach(i=>{i!==e&&i.classList.remove("active")})):n&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),setTimeout(()=>{document.querySelectorAll("nav a.on-change").forEach(i=>{i.classList.remove("on-change")})},240)):(e.classList.contains("logo")||n)&&document.querySelectorAll("nav a").forEach(i=>{i.classList.remove("active")}),document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(i=>{i.classList.remove("active")}),console.log(`Barba navigating to: ${t}`),window.barba?window.barba.go(t):(console.warn("Barba not initialized yet, falling back to window.location"),window.location.href=t)}function gc(){document.querySelectorAll(".mobile-menu-toggle").forEach(e=>{e.removeEventListener("click",Gf),e.addEventListener("click",Gf)})}function Gf(){document.body.classList.toggle("menu-active"),this.classList.toggle("active")}function py(){const r=document.querySelector("header");function e(n){r.classList.contains("initialized")||(r.classList.add("initialized"),t.forEach(i=>r.removeEventListener(i,e)))}const t=["mouseenter","hover","touchstart"];t.forEach(n=>r.addEventListener(n,e))}let Yl=window.innerWidth,oh=window.innerHeight,Ns="error: undetected";function Hg(){return oh>Yl&&document.body.classList.add("portrait"),("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&document.documentElement.classList.add("touch-device"),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches?(Ns="touch",document.documentElement.classList.add("touch-device"),Ns):window.matchMedia("(any-pointer: fine)").matches&&window.matchMedia("(pointer: coarse)").matches?(Ns="cursorTouch",Ns):(Ns="default",Ns)}function Vg(){if(Yl=window.innerWidth,oh=window.innerHeight,Yl<=1024){const r=document.getElementById("stage"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.insertBefore(e,r.firstChild),r&&t&&r.insertBefore(t,r.firstChild),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),gc()}else{const r=document.querySelector("header"),e=document.querySelector("nav"),t=document.querySelector(".mobile-menu-toggle");r&&e&&r.appendChild(e),r&&t&&r.appendChild(t),document.body.classList.remove("menu-active"),t&&t.classList.remove("active"),gc()}return[Yl,oh]}var my="1.3.14";function Gg(r,e,t){return Math.max(r,Math.min(e,t))}function gy(r,e,t){return(1-t)*r+t*e}function _y(r,e,t,n){return gy(r,e,1-Math.exp(-t*n))}function vy(r,e){return(r%e+e)%e}var yy=class{constructor(){Ve(this,"isRunning",!1);Ve(this,"value",0);Ve(this,"from",0);Ve(this,"to",0);Ve(this,"currentTime",0);Ve(this,"lerp");Ve(this,"duration");Ve(this,"easing");Ve(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Gg(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=_y(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function xy(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Sy=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Ve(this,"width",0);Ve(this,"height",0);Ve(this,"scrollHeight",0);Ve(this,"scrollWidth",0);Ve(this,"debouncedResize");Ve(this,"wrapperResizeObserver");Ve(this,"contentResizeObserver");Ve(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ve(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ve(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=xy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wg=class{constructor(){Ve(this,"events",{})}emit(r,...e){var n;let t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){var t;return(t=this.events[r])!=null&&t.push(e)||(this.events[r]=[e]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>e!==i)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Wf=100/6,ur={passive:!1},by=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Ve(this,"touchStart",{x:0,y:0});Ve(this,"lastDelta",{x:0,y:0});Ve(this,"window",{width:0,height:0});Ve(this,"emitter",new Wg);Ve(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ve(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ve(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ve(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Wf:n===2?this.window.width:1,s=n===1?Wf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Ve(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}},Xf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),My=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:p=!0,prevent:g,virtualScroll:m,overscroll:x=!0,autoRaf:y=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1}={}){Ve(this,"_isScrolling",!1);Ve(this,"_isStopped",!1);Ve(this,"_isLocked",!1);Ve(this,"_preventNextNativeScrollEvent",!1);Ve(this,"_resetVelocityTimeout",null);Ve(this,"__rafID",null);Ve(this,"isTouching");Ve(this,"time",0);Ve(this,"userData",{});Ve(this,"lastVelocity",0);Ve(this,"velocity",0);Ve(this,"direction",0);Ve(this,"options");Ve(this,"targetScroll");Ve(this,"animatedScroll");Ve(this,"animate",new yy);Ve(this,"emitter",new Wg);Ve(this,"dimensions");Ve(this,"virtualScroll");Ve(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ve(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ve(this,"onTransitionEnd",r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}});Ve(this,"onClick",r=>{const t=r.composedPath().find(n=>{var i;return n instanceof HTMLAnchorElement&&((i=n.getAttribute("href"))==null?void 0:i.includes("#"))});if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,i)}}});Ve(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ve(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(g=>{var m,x,y;return g instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(g))||((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent"))||i&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-touch"))||s&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ve(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ve(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=my,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Xf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:p,prevent:g,virtualScroll:m,overscroll:x,autoRaf:y,anchors:v,autoToggle:E,allowNestedScroll:w,__experimental__naiveDimensions:M},this.dimensions=new Sy(r,e,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new by(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=Gg(0,r,this.limit);if(r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Xf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??(r._lenis={});let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);i.computedStyle=E;const w=E.overflowX,M=E.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(M),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const E=e!==0,w=t!==0;E&&s&&a&&(_="x"),w&&o&&l&&(_="y")}if(!_)return!1;let p,g,m,x,y;if(_==="x")p=r.scrollLeft,g=c-h,m=e,x=s,y=a;else if(_==="y")p=r.scrollTop,g=u-d,m=t,x=o,y=l;else return!1;return(m>0?p<g:p>0)&&x&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?vy(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function wy(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ey(r,e,t){return e&&wy(r.prototype,e),r}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,jl,Jn,Er,Tr,mo,Xg,Qr,ga,qg,Qi,yi,$g,Yg=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},jg=1,oo=[],ct=[],Fi=[],_a=Date.now,ah=function(e,t){return t},Ty=function(){var e=ga.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,Fi),ct=n,Fi=i,ah=function(o,a){return t[o](a)}},Pr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},va=function(e){return!!~qg.indexOf(e)},Sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ol="scrollLeft",al="scrollTop",lh=function(){return Qi&&Qi.isPressed||ct.cache++},_c=function(e,t){var n=function i(s){if(s||s===0){jg&&(Jn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),e(s),i.cacheID=ct.cache,o&&ah("ss",s)}else(t||ct.cache!==i.cacheID||ah("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_c(function(r){return arguments.length?Jn.scrollTo(r,Jt.sc()):Jn.pageXOffset||Er[ol]||Tr[ol]||mo[ol]||0})},Jt={s:al,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:_c(function(r){return arguments.length?Jn.scrollTo(Cn.sc(),r):Jn.pageYOffset||Er[al]||Tr[al]||mo[al]||0})},Ln=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ay=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Nr=function(e,t){var n=t.s,i=t.sc;va(e)&&(e=Er.scrollingElement||Tr);var s=ct.indexOf(e),o=i===Jt.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+o]||Sn(e,"scroll",lh);var a=ct[s+o],l=a||(ct[s+o]=_c(Pr(e,n),!0)||(va(e)?i:_c(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},ch=function(e,t,n){var i=e,s=e,o=_a(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,p){var g=_a();p||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var p=a,g=s,m=_a();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-p)*1e3};return{update:u,reset:h,getVelocity:d}},Xo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},qf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Zg=function(){ga=an.core.globals().ScrollTrigger,ga&&ga.core&&Ty()},Jg=function(e){return an=e||Yg(),!jl&&an&&typeof document<"u"&&document.body&&(Jn=window,Er=document,Tr=Er.documentElement,mo=Er.body,qg=[Jn,Er,Tr,mo],an.utils.clamp,$g=an.core.context||function(){},Qr="onpointerenter"in mo?"pointer":"mouse",Xg=Ht.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Ht.eventTypes=("ontouchstart"in Tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jg=0},500),Zg(),jl=1),jl};Cn.op=Jt;ct.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){jl||Jg(an)||console.warn("Please gsap.registerPlugin(Observer)"),ga||Zg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,p=n.event,g=n.onDragStart,m=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,E=n.onRight,w=n.onLeft,M=n.onUp,A=n.onDown,b=n.onChangeX,S=n.onChangeY,N=n.onChange,F=n.onToggleX,G=n.onToggleY,V=n.onHover,Y=n.onHoverEnd,X=n.onMove,q=n.ignoreCheck,B=n.isNormalizer,ne=n.onGestureStart,I=n.onGestureEnd,ce=n.onWheel,ye=n.onEnable,we=n.onDisable,U=n.onClick,O=n.scrollSpeed,L=n.capture,R=n.allowClicks,Q=n.lockAxis,de=n.onLockAxis;this.target=a=Ln(a)||Tr,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,O=O||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(mo).lineHeight)||22);var $,me,ee,j,T,se,ie,z=this,H=0,k=0,he=n.passive||!u&&n.passive!==!1,D=Nr(a,Cn),C=Nr(a,Jt),te=D(),le=C(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",pe=va(a),Ee=a.ownerDocument||Er,be=[0,0,0],Te=[0,0,0],$e=0,Se=function(){return $e=_a()},Me=function(ke,rt){return(z.event=ke)&&f&&Ay(ke.target,f)||rt&&fe&&ke.pointerType!=="touch"||q&&q(ke,rt)},Xe=function(){z._vx.reset(),z._vy.reset(),me.pause(),h&&h(z)},ze=function(){var ke=z.deltaX=qf(be),rt=z.deltaY=qf(Te),Pe=Math.abs(ke)>=i,et=Math.abs(rt)>=i;N&&(Pe||et)&&N(z,ke,rt,be,Te),Pe&&(E&&z.deltaX>0&&E(z),w&&z.deltaX<0&&w(z),b&&b(z),F&&z.deltaX<0!=H<0&&F(z),H=z.deltaX,be[0]=be[1]=be[2]=0),et&&(A&&z.deltaY>0&&A(z),M&&z.deltaY<0&&M(z),S&&S(z),G&&z.deltaY<0!=k<0&&G(z),k=z.deltaY,Te[0]=Te[1]=Te[2]=0),(j||ee)&&(X&&X(z),ee&&(g&&ee===1&&g(z),x&&x(z),ee=0),j=!1),se&&!(se=!1)&&de&&de(z),T&&(ce(z),T=!1),$=0},Oe=function(ke,rt,Pe){be[Pe]+=ke,Te[Pe]+=rt,z._vx.update(ke),z._vy.update(rt),c?$||($=requestAnimationFrame(ze)):ze()},it=function(ke,rt){Q&&!ie&&(z.axis=ie=Math.abs(ke)>Math.abs(rt)?"x":"y",se=!0),ie!=="y"&&(be[2]+=ke,z._vx.update(ke,!0)),ie!=="x"&&(Te[2]+=rt,z._vy.update(rt,!0)),c?$||($=requestAnimationFrame(ze)):ze()},Ze=function(ke){if(!Me(ke,1)){ke=Xo(ke,u);var rt=ke.clientX,Pe=ke.clientY,et=rt-z.x,Be=Pe-z.y,Ke=z.isDragging;z.x=rt,z.y=Pe,(Ke||(et||Be)&&(Math.abs(z.startX-rt)>=s||Math.abs(z.startY-Pe)>=s))&&(ee=Ke?2:1,Ke||(z.isDragging=!0),it(et,Be))}},dt=z.onPress=function(Ie){Me(Ie,1)||Ie&&Ie.button||(z.axis=ie=null,me.pause(),z.isPressed=!0,Ie=Xo(Ie),H=k=0,z.startX=z.x=Ie.clientX,z.startY=z.y=Ie.clientY,z._vx.reset(),z._vy.reset(),Sn(B?a:Ee,yi[1],Ze,he,!0),z.deltaX=z.deltaY=0,y&&y(z))},W=z.onRelease=function(Ie){if(!Me(Ie,1)){xn(B?a:Ee,yi[1],Ze,!0);var ke=!isNaN(z.y-z.startY),rt=z.isDragging,Pe=rt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),et=Xo(Ie);!Pe&&ke&&(z._vx.reset(),z._vy.reset(),u&&R&&an.delayedCall(.08,function(){if(_a()-$e>300&&!Ie.defaultPrevented){if(Ie.target.click)Ie.target.click();else if(Ee.createEvent){var Be=Ee.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Jn,1,et.screenX,et.screenY,et.clientX,et.clientY,!1,!1,!1,!1,0,null),Ie.target.dispatchEvent(Be)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&rt&&!B&&me.restart(!0),ee&&ze(),m&&rt&&m(z),v&&v(z,Pe)}},Ce=function(ke){return ke.touches&&ke.touches.length>1&&(z.isGesturing=!0)&&ne(ke,z.isDragging)},ue=function(){return(z.isGesturing=!1)||I(z)},ge=function(ke){if(!Me(ke)){var rt=D(),Pe=C();Oe((rt-te)*O,(Pe-le)*O,1),te=rt,le=Pe,h&&me.restart(!0)}},Ae=function(ke){if(!Me(ke)){ke=Xo(ke,u),ce&&(T=!0);var rt=(ke.deltaMode===1?l:ke.deltaMode===2?Jn.innerHeight:1)*_;Oe(ke.deltaX*rt,ke.deltaY*rt,0),h&&!B&&me.restart(!0)}},Re=function(ke){if(!Me(ke)){var rt=ke.clientX,Pe=ke.clientY,et=rt-z.x,Be=Pe-z.y;z.x=rt,z.y=Pe,j=!0,h&&me.restart(!0),(et||Be)&&it(et,Be)}},Je=function(ke){z.event=ke,V(z)},ft=function(ke){z.event=ke,Y(z)},Ut=function(ke){return Me(ke)||Xo(ke,u)&&U(z)};me=z._dc=an.delayedCall(d||.25,Xe).pause(),z.deltaX=z.deltaY=0,z._vx=ch(0,50,!0),z._vy=ch(0,50,!0),z.scrollX=D,z.scrollY=C,z.isDragging=z.isGesturing=z.isPressed=!1,$g(this),z.enable=function(Ie){return z.isEnabled||(Sn(pe?Ee:a,"scroll",lh),o.indexOf("scroll")>=0&&Sn(pe?Ee:a,"scroll",ge,he,L),o.indexOf("wheel")>=0&&Sn(a,"wheel",Ae,he,L),(o.indexOf("touch")>=0&&Xg||o.indexOf("pointer")>=0)&&(Sn(a,yi[0],dt,he,L),Sn(Ee,yi[2],W),Sn(Ee,yi[3],W),R&&Sn(a,"click",Se,!0,!0),U&&Sn(a,"click",Ut),ne&&Sn(Ee,"gesturestart",Ce),I&&Sn(Ee,"gestureend",ue),V&&Sn(a,Qr+"enter",Je),Y&&Sn(a,Qr+"leave",ft),X&&Sn(a,Qr+"move",Re)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=j=ee=!1,z._vx.reset(),z._vy.reset(),te=D(),le=C(),Ie&&Ie.type&&dt(Ie),ye&&ye(z)),z},z.disable=function(){z.isEnabled&&(oo.filter(function(Ie){return Ie!==z&&va(Ie.target)}).length||xn(pe?Ee:a,"scroll",lh),z.isPressed&&(z._vx.reset(),z._vy.reset(),xn(B?a:Ee,yi[1],Ze,!0)),xn(pe?Ee:a,"scroll",ge,L),xn(a,"wheel",Ae,L),xn(a,yi[0],dt,L),xn(Ee,yi[2],W),xn(Ee,yi[3],W),xn(a,"click",Se,!0),xn(a,"click",Ut),xn(Ee,"gesturestart",Ce),xn(Ee,"gestureend",ue),xn(a,Qr+"enter",Je),xn(a,Qr+"leave",ft),xn(a,Qr+"move",Re),z.isEnabled=z.isPressed=z.isDragging=!1,we&&we(z))},z.kill=z.revert=function(){z.disable();var Ie=oo.indexOf(z);Ie>=0&&oo.splice(Ie,1),Qi===z&&(Qi=0)},oo.push(z),B&&va(a)&&(Qi=z),z.enable(p)},Ey(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.13.0";Ht.create=function(r){return new Ht(r)};Ht.register=Jg;Ht.getAll=function(){return oo.slice()};Ht.getById=function(r){return oo.filter(function(e){return e.vars.id===r})[0]};Yg()&&an.registerPlugin(Ht);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fe,eo,lt,At,Yn,yt,Gd,vc,Fa,ya,ra,ll,hn,Uc,uh,wn,$f,Yf,to,Kg,Qc,Qg,Mn,hh,e_,t_,_r,dh,Wd,go,Xd,yc,fh,eu,cl=1,dn=Date.now,tu=dn(),fi=0,sa=0,jf=function(e,t,n){var i=qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Zf=function(e,t){return t&&(!qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Cy=function r(){return sa&&requestAnimationFrame(r)},Jf=function(){return Uc=1},Kf=function(){return Uc=0},Ci=function(e){return e},oa=function(e){return Math.round(e*1e5)/1e5||0},n_=function(){return typeof window<"u"},i_=function(){return Fe||n_()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},bs=function(e){return!!~Gd.indexOf(e)},r_=function(e){return(e==="Height"?Xd:lt["inner"+e])||Yn["client"+e]||yt["client"+e]},s_=function(e){return Pr(e,"getBoundingClientRect")||(bs(e)?function(){return ec.width=lt.innerWidth,ec.height=Xd,ec}:function(){return Ki(e)})},Ry=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Pr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?r_(s):e["client"+s])||0}},Py=function(e,t){return!t||~Fi.indexOf(e)?s_(e):function(){return ec}},Ii=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Pr(e,n))?o()-s_(e)()[s]:bs(e)?(Yn[n]||yt[n])-r_(i):e[n]-e["offset"+i])},ul=function(e,t){for(var n=0;n<to.length;n+=3)(!t||~t.indexOf(to[n+1]))&&e(to[n],to[n+1],to[n+2])},qn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},aa=function(e){return typeof e=="number"},es=function(e){return typeof e=="object"},qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},nu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Us=Math.abs,o_="left",a_="top",qd="right",$d="bottom",_s="width",vs="height",xa="Right",Sa="Left",ba="Top",Ma="Bottom",Wt="padding",ai="margin",Ro="Width",Yd="Height",Zt="px",li=function(e){return lt.getComputedStyle(e)},Ly=function(e){var t=li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ki=function(e,t){var n=t&&li(e)[uh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Fe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},xc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},l_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Dy=function(e){return function(t){return Fe.utils.snap(l_(e),t)}},jd=function(e){var t=Fe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Iy=function(e){return function(t,n){return jd(l_(e))(t,n.direction)}},hl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ep={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fl={toggleActions:"play",anticipatePin:0},Sc={top:0,left:0,center:.5,bottom:1,right:1},Zl=function(e,t){if(qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sc?Sc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=At.createElement("div"),p=bs(n)||Pr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=p?yt:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&p?"fixed;":"absolute;"),(g||l||!p)&&(v+=(i===Jt?qd:$d)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Jl(_,0,i,x),_},Jl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ro]=1,s["border"+a+Ro]=0,s[n.p]=t+"px",Fe.set(e,s)},ot=[],ph={},ka,tp=function(){return dn()-fi>34&&(ka||(ka=requestAnimationFrame(nr)))},Fs=function(){(!Mn||!Mn.isPressed||Mn.startX>yt.clientWidth)&&(ct.cache++,Mn?ka||(ka=requestAnimationFrame(nr)):nr(),fi||ws("scrollStart"),fi=dn())},iu=function(){t_=lt.innerWidth,e_=lt.innerHeight},la=function(e){ct.cache++,(e===!0||!hn&&!Qg&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!hh||t_!==lt.innerWidth||Math.abs(lt.innerHeight-e_)>lt.innerHeight*.25))&&vc.restart(!0)},Ms={},Oy=[],c_=function r(){return tn(tt,"scrollEnd",r)||as(!0)},ws=function(e){return Ms[e]&&Ms[e].map(function(t){return t()})||Oy},Xn=[],u_=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},Zd=function(e,t){var n;for(wn=0;wn<ot.length;wn++)n=ot[wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));yc=!0,t&&u_(t),t||ws("revert")},h_=function(e,t){ct.cache++,(t||!En)&&ct.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),qn(e)&&(lt.history.scrollRestoration=Wd=e)},En,ys=0,np,Ny=function(){if(np!==ys){var e=np=ys;requestAnimationFrame(function(){return e===ys&&as(!0)})}},d_=function(){yt.appendChild(go),Xd=!Mn&&go.offsetHeight||lt.innerHeight,yt.removeChild(go)},ip=function(e){return Fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},as=function(e,t){if(Yn=At.documentElement,yt=At.body,Gd=[lt,At,Yn,yt],fi&&!e&&!yc){nn(tt,"scrollEnd",c_);return}d_(),En=tt.isRefreshing=!0,ct.forEach(function(i){return mn(i)&&++i.cacheID&&(i.rec=i())});var n=ws("refreshInit");Kg&&tt.sort(),t||Zd(),ct.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),yc=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),fh=1,ip(!0),ot.forEach(function(i){var s=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ip(!1),fh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),h_(Wd,1),vc.pause(),ys++,En=2,nr(2),ot.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=tt.isRefreshing=!1,ws("refresh")},mh=0,Kl=1,wa,nr=function(e){if(e===2||!En&&!yc){tt.isUpdating=!0,wa&&wa.update(0);var t=ot.length,n=dn(),i=n-tu>=50,s=t&&ot[0].scroll();if(Kl=mh>s?-1:1,En||(mh=s),i&&(fi&&!Uc&&n-fi>200&&(fi=0,ws("scrollEnd")),ra=tu,tu=n),Kl<0){for(wn=t;wn-- >0;)ot[wn]&&ot[wn].update(0,i);Kl=1}else for(wn=0;wn<t;wn++)ot[wn]&&ot[wn].update(0,i);tt.isUpdating=!1}ka=0},gh=[o_,a_,$d,qd,ai+Ma,ai+xa,ai+ba,ai+Sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ql=gh.concat([_s,vs,"boxSizing","max"+Ro,"max"+Yd,"position",ai,Wt,Wt+ba,Wt+xa,Wt+Ma,Wt+Sa]),Uy=function(e,t,n){_o(n);var i=e._gsap;if(i.spacerIsNative)_o(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ru=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=gh.length,o=t.style,a=e.style,l;s--;)l=gh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$d]=a[qd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=xc(e,Cn)+Zt,o[vs]=xc(e,Jt)+Zt,o[Wt]=a[ai]=a[a_]=a[o_]="0",_o(i),a[_s]=a["max"+Ro]=n[_s],a[vs]=a["max"+Yd]=n[vs],a[Wt]=n[Wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Fy=/([A-Z])/g,_o=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Fe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Fy,"-$1").toLowerCase())}},ml=function(e){for(var t=Ql.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ql[s],n[Ql[s]]);return i.t=e,i},ky=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ec={left:0,top:0},rp=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){mn(e)&&(e=e(l)),qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Zl("0"+e.substr(3),n):0));var p=f?f.time():0,g,m,x;if(f&&f.seek(0),isNaN(e)||(e=+e),aa(e))f&&(e=Fe.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Jl(a,n,i,!0);else{mn(t)&&(t=t(l));var y=(e||"0").split(" "),v,E,w,M;x=Ln(t,l)||yt,v=Ki(x)||{},(!v||!v.left&&!v.top)&&li(x).display==="none"&&(M=x.style.display,x.style.display="block",v=Ki(x),M?x.style.display=M:x.style.removeProperty("display")),E=Zl(y[0],v[i.d]),w=Zl(y[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-w,a&&Jl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var A=e+n,b=o._isStart;g="scroll"+i.d2,Jl(o,A,i,b&&A>20||!b&&(h?Math.max(yt[g],Yn[g]):o.parentNode[g])<=A+1),h&&(c=Ki(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Zt))}return f&&x&&(g=Ki(x),f.seek(d),m=Ki(x),f._caScrollDist=g[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(p),f?e:Math.round(e)},By=/(webkit|moz|length|cssText|inset)/i,sp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=li(e);for(o in a)!+o&&!By.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Fe.core.getCache(e).uncache=1,t.appendChild(e)}},f_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},gl=function(e,t,n){var i={};i[t.p]="+="+n,Fe.set(e,i)},op=function(e,t){var n=Nr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var p=f_(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return p(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ct.cache++,o.tween&&nr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Fe.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),tt.isTouch&&nn(e,"touchmove",n.wheelHandler),s},tt=(function(){function r(t,n){eo||r.register(Fe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sa){this.update=this.refresh=this.kill=Ci;return}n=Qf(qn(n)||aa(n)||n.nodeType?{trigger:n}:n,fl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,p=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,E=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,A=s.fastScrollEnd,b=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Jt,N=!h&&h!==0,F=Ln(n.scroller||lt),G=Fe.core.getCache(F),V=bs(F),Y=("pinType"in n?n.pinType:Pr(F,"pinType")||V&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=N&&n.toggleActions.split(" "),B="markers"in n?n.markers:fl.markers,ne=V?0:parseFloat(li(F)["border"+S.p2+Ro])||0,I=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ye=Ry(F,V,S),we=Py(F,V),U=0,O=0,L=0,R=Nr(F,S),Q,de,$,me,ee,j,T,se,ie,z,H,k,he,D,C,te,le,fe,pe,Ee,be,Te,$e,Se,Me,Xe,ze,Oe,it,Ze,dt,W,Ce,ue,ge,Ae,Re,Je,ft;if(I._startClamp=I._endClamp=!1,I._dir=S,g*=45,I.scroller=F,I.scroll=M?M.time.bind(M):R,me=R(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Kg=1,n.refreshPriority===-9999&&(wa=I)),G.tweenScroll=G.tweenScroll||{top:op(F,Jt),left:op(F,Cn)},I.tweenTo=Q=G.tweenScroll[S.p],I.scrubDuration=function(Pe){Ce=aa(Pe)&&Pe,Ce?W?W.duration(Pe):W=Fe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ce,paused:!0,onComplete:function(){return m&&m(I)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(h),Ze=0,l||(l=i.vars.id)),v&&((!es(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&Fe.set(V?[yt,Yn]:F,{scrollBehavior:"auto"}),ct.forEach(function(Pe){return mn(Pe)&&Pe.target===(V?At.scrollingElement||Yn:F)&&(Pe.smooth=!1)}),$=mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Dy(i):v.snapTo==="labelsDirectional"?Iy(i):v.directional!==!1?function(Pe,et){return jd(v.snapTo)(Pe,dn()-O<500?0:et.direction)}:Fe.utils.snap(v.snapTo),ue=v.duration||{min:.1,max:2},ue=es(ue)?ya(ue.min,ue.max):ya(ue,ue),ge=Fe.delayedCall(v.delay||Ce/2||.1,function(){var Pe=R(),et=dn()-O<500,Be=Q.tween;if((et||Math.abs(I.getVelocity())<10)&&!Be&&!Uc&&U!==Pe){var Ke=(Pe-j)/D,Bt=i&&!N?i.totalProgress():Ke,at=et?0:(Bt-dt)/(dn()-ra)*1e3||0,Tt=Fe.utils.clamp(-Ke,1-Ke,Us(at/2)*at/.185),$t=Ke+(v.inertia===!1?0:Tt),bt,Mt,gt=v,Hn=gt.onStart,Rt=gt.onInterrupt,vn=gt.onComplete;if(bt=$($t,I),aa(bt)||(bt=$t),Mt=Math.max(0,Math.round(j+bt*D)),Pe<=T&&Pe>=j&&Mt!==Pe){if(Be&&!Be._initted&&Be.data<=Us(Mt-Pe))return;v.inertia===!1&&(Tt=bt-Ke),Q(Mt,{duration:ue(Us(Math.max(Us($t-Bt),Us(bt-Bt))*.185/at/.05||0)),ease:v.ease||"power3",data:Us(Mt-Pe),onInterrupt:function(){return ge.restart(!0)&&Rt&&Rt(I)},onComplete:function(){I.update(),U=R(),i&&!N&&(W?W.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),Ze=dt=i&&!N?i.totalProgress():I.progress,x&&x(I),vn&&vn(I)}},Pe,Tt*D,Mt-Pe-Tt*D),Hn&&Hn(I,Q.tween)}}else I.isActive&&U!==Pe&&ge.restart(!0)}).pause()),l&&(ph[l]=I),d=I.trigger=Ln(d||f!==!0&&f),ft=d&&d._gsap&&d._gsap.stRevert,ft&&(ft=ft(I)),f=f===!0?d:Ln(f),qn(a)&&(a={targets:d,className:a}),f&&(_===!1||_===ai||(_=!_&&f.parentNode&&f.parentNode.style&&li(f.parentNode).display==="flex"?!1:Wt),I.pin=f,de=Fe.core.getCache(f),de.spacer?C=de.pinState:(w&&(w=Ln(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),de.spacerIsNative=!!w,w&&(de.spacerState=ml(w))),de.spacer=fe=w||At.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),de.pinState=C=ml(f)),n.force3D!==!1&&Fe.set(f,{force3D:!0}),I.spacer=fe=de.spacer,it=li(f),Se=it[_+S.os2],Ee=Fe.getProperty(f),be=Fe.quickSetter(f,S.a,Zt),ru(f,fe,it),le=ml(f)),B){k=es(B)?Qf(B,ep):ep,z=pl("scroller-start",l,F,S,k,0),H=pl("scroller-end",l,F,S,k,0,z),pe=z["offset"+S.op.d2];var Ut=Ln(Pr(F,"content")||F);se=this.markerStart=pl("start",l,Ut,S,k,pe,0,M),ie=this.markerEnd=pl("end",l,Ut,S,k,pe,0,M),M&&(Je=Fe.quickSetter([se,ie],S.a,Zt)),!Y&&!(Fi.length&&Pr(F,"fixedMarkers")===!0)&&(Ly(V?yt:F),Fe.set([z,H],{force3D:!0}),Xe=Fe.quickSetter(z,S.a,Zt),Oe=Fe.quickSetter(H,S.a,Zt))}if(M){var Ie=M.vars.onUpdate,ke=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){I.update(0,0,1),Ie&&Ie.apply(M,ke||[])})}if(I.previous=function(){return ot[ot.indexOf(I)-1]},I.next=function(){return ot[ot.indexOf(I)+1]},I.revert=function(Pe,et){if(!et)return I.kill(!0);var Be=Pe!==!1||!I.enabled,Ke=hn;Be!==I.isReverted&&(Be&&(Ae=Math.max(R(),I.scroll.rec||0),L=I.progress,Re=i&&i.progress()),se&&[se,ie,z,H].forEach(function(Bt){return Bt.style.display=Be?"none":"block"}),Be&&(hn=I,I.update(Be)),f&&(!E||!I.isActive)&&(Be?Uy(f,fe,C):ru(f,fe,li(f),Me)),Be||I.update(Be),hn=Ke,I.isReverted=Be)},I.refresh=function(Pe,et,Be,Ke){if(!((hn||!I.enabled)&&!et)){if(f&&Pe&&fi){nn(r,"scrollEnd",c_);return}!En&&ce&&ce(I),hn=I,Q.tween&&!Be&&(Q.tween.kill(),Q.tween=0),W&&W.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(nt){return nt.vars.immediateRender&&nt.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Bt=ye(),at=we(),Tt=M?M.duration():Ii(F,S),$t=D<=.01||!D,bt=0,Mt=Ke||0,gt=es(Be)?Be.end:n.end,Hn=n.endTrigger||d,Rt=es(Be)?Be.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),vn=I.pinnedContainer=n.pinnedContainer&&Ln(n.pinnedContainer,I),ni=d&&Math.max(0,ot.indexOf(I))||0,Yt=ni,jt,P,J,oe,re,Z,xe,Le,Ue,Ne,Ge,je,He;for(B&&es(Be)&&(je=Fe.getProperty(z,S.p),He=Fe.getProperty(H,S.p));Yt-- >0;)Z=ot[Yt],Z.end||Z.refresh(0,1)||(hn=I),xe=Z.pin,xe&&(xe===d||xe===f||xe===vn)&&!Z.isReverted&&(Ne||(Ne=[]),Ne.unshift(Z),Z.revert(!0,!0)),Z!==ot[Yt]&&(ni--,Yt--);for(mn(Rt)&&(Rt=Rt(I)),Rt=jf(Rt,"start",I),j=rp(Rt,d,Bt,S,R(),se,z,I,at,ne,Y,Tt,M,I._startClamp&&"_startClamp")||(f?-.001:0),mn(gt)&&(gt=gt(I)),qn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(qn(Rt)?Rt.split(" ")[0]:"")+gt:(bt=Zl(gt.substr(2),Bt),gt=qn(Rt)?Rt:(M?Fe.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,j):j)+bt,Hn=d)),gt=jf(gt,"end",I),T=Math.max(j,rp(gt||(Hn?"100% 0":Tt),Hn,Bt,S,R()+bt,ie,H,I,at,ne,Y,Tt,M,I._endClamp&&"_endClamp"))||-.001,bt=0,Yt=ni;Yt--;)Z=ot[Yt],xe=Z.pin,xe&&Z.start-Z._pinPush<=j&&!M&&Z.end>0&&(jt=Z.end-(I._startClamp?Math.max(0,Z.start):Z.start),(xe===d&&Z.start-Z._pinPush<j||xe===vn)&&isNaN(Rt)&&(bt+=jt*(1-Z.progress)),xe===f&&(Mt+=jt));if(j+=bt,T+=bt,I._startClamp&&(I._startClamp+=bt),I._endClamp&&!En&&(I._endClamp=T||-.001,T=Math.min(T,Ii(F,S))),D=T-j||(j-=.01)&&.001,$t&&(L=Fe.utils.clamp(0,1,Fe.utils.normalize(j,T,Ae))),I._pinPush=Mt,se&&bt&&(jt={},jt[S.a]="+="+bt,vn&&(jt[S.p]="-="+R()),Fe.set([se,ie],jt)),f&&!(fh&&I.end>=Ii(F,S)))jt=li(f),oe=S===Jt,J=R(),Te=parseFloat(Ee(S.a))+Mt,!Tt&&T>1&&(Ge=(V?At.scrollingElement||Yn:F).style,Ge={style:Ge,value:Ge["overflow"+S.a.toUpperCase()]},V&&li(yt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ge.style["overflow"+S.a.toUpperCase()]="scroll")),ru(f,fe,jt),le=ml(f),P=Ki(f,!0),Le=Y&&Nr(F,oe?Cn:Jt)(),_?(Me=[_+S.os2,D+Mt+Zt],Me.t=fe,Yt=_===Wt?xc(f,S)+D+Mt:0,Yt&&(Me.push(S.d,Yt+Zt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Yt+Zt)),_o(Me),vn&&ot.forEach(function(nt){nt.pin===vn&&nt.vars.pinSpacing!==!1&&(nt._subPinOffset=!0)}),Y&&R(Ae)):(Yt=xc(f,S),Yt&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=Yt+Zt)),Y&&(re={top:P.top+(oe?J-j:Le)+Zt,left:P.left+(oe?Le:J-j)+Zt,boxSizing:"border-box",position:"fixed"},re[_s]=re["max"+Ro]=Math.ceil(P.width)+Zt,re[vs]=re["max"+Yd]=Math.ceil(P.height)+Zt,re[ai]=re[ai+ba]=re[ai+xa]=re[ai+Ma]=re[ai+Sa]="0",re[Wt]=jt[Wt],re[Wt+ba]=jt[Wt+ba],re[Wt+xa]=jt[Wt+xa],re[Wt+Ma]=jt[Wt+Ma],re[Wt+Sa]=jt[Wt+Sa],te=ky(C,re,E),En&&R(0)),i?(Ue=i._initted,Qc(1),i.render(i.duration(),!0,!0),$e=Ee(S.a)-Te+D+Mt,ze=Math.abs(D-$e)>1,Y&&ze&&te.splice(te.length-2,2),i.render(0,!0,!0),Ue||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qc(0)):$e=D,Ge&&(Ge.value?Ge.style["overflow"+S.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+S.a));else if(d&&R()&&!M)for(P=d.parentNode;P&&P!==yt;)P._pinOffset&&(j-=P._pinOffset,T-=P._pinOffset),P=P.parentNode;Ne&&Ne.forEach(function(nt){return nt.revert(!1,!0)}),I.start=j,I.end=T,me=ee=En?Ae:R(),!M&&!En&&(me<Ae&&R(Ae),I.scroll.rec=0),I.revert(!1,!0),O=dn(),ge&&(U=-1,ge.restart(!0)),hn=0,i&&N&&(i._initted||Re)&&i.progress()!==Re&&i.progress(Re||0,!0).render(i.time(),!0,!0),($t||L!==I.progress||M||p||i&&!i._initted)&&(i&&!N&&(i._initted||L||i.vars.immediateRender!==!1)&&i.totalProgress(M&&j<-.001&&!L?Fe.utils.normalize(j,T,0):L,!0),I.progress=$t||(me-j)/D===L?0:L),f&&_&&(fe._pinOffset=Math.round(I.progress*$e)),W&&W.invalidate(),isNaN(je)||(je-=Fe.getProperty(z,S.p),He-=Fe.getProperty(H,S.p),gl(z,S,je),gl(se,S,je-(Ke||0)),gl(H,S,He),gl(ie,S,He-(Ke||0))),$t&&!En&&I.update(),u&&!En&&!he&&(he=!0,u(I),he=!1)}},I.getVelocity=function(){return(R()-ee)/(dn()-ra)*1e3||0},I.endAnimation=function(){qo(I.callbackAnimation),i&&(W?W.progress(1):i.paused()?N||qo(i,I.direction<0,1):qo(i,i.reversed()))},I.labelToScroll=function(Pe){return i&&i.labels&&(j||I.refresh()||j)+i.labels[Pe]/i.duration()*D||0},I.getTrailing=function(Pe){var et=ot.indexOf(I),Be=I.direction>0?ot.slice(0,et).reverse():ot.slice(et+1);return(qn(Pe)?Be.filter(function(Ke){return Ke.vars.preventOverlaps===Pe}):Be).filter(function(Ke){return I.direction>0?Ke.end<=j:Ke.start>=T})},I.update=function(Pe,et,Be){if(!(M&&!Be&&!Pe)){var Ke=En===!0?Ae:I.scroll(),Bt=Pe?0:(Ke-j)/D,at=Bt<0?0:Bt>1?1:Bt||0,Tt=I.progress,$t,bt,Mt,gt,Hn,Rt,vn,ni;if(et&&(ee=me,me=M?R():Ke,v&&(dt=Ze,Ze=i&&!N?i.totalProgress():at)),g&&f&&!hn&&!cl&&fi&&(!at&&j<Ke+(Ke-ee)/(dn()-ra)*g?at=1e-4:at===1&&T>Ke+(Ke-ee)/(dn()-ra)*g&&(at=.9999)),at!==Tt&&I.enabled){if($t=I.isActive=!!at&&at<1,bt=!!Tt&&Tt<1,Rt=$t!==bt,Hn=Rt||!!at!=!!Tt,I.direction=at>Tt?1:-1,I.progress=at,Hn&&!hn&&(Mt=at&&!Tt?0:at===1?1:Tt===1?2:3,N&&(gt=!Rt&&q[Mt+1]!=="none"&&q[Mt+1]||q[Mt],ni=i&&(gt==="complete"||gt==="reset"||gt in i))),b&&(Rt||ni)&&(ni||h||!i)&&(mn(b)?b(I):I.getTrailing(b).forEach(function(J){return J.endAnimation()})),N||(W&&!hn&&!cl?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",at,i._tTime/i._tDur):(W.vars.totalProgress=at,W.invalidate().restart())):i&&i.totalProgress(at,!!(hn&&(O||Pe)))),f){if(Pe&&_&&(fe.style[_+S.os2]=Se),!Y)be(oa(Te+$e*at));else if(Hn){if(vn=!Pe&&at>Tt&&T+1>Ke&&Ke+1>=Ii(F,S),E)if(!Pe&&($t||vn)){var Yt=Ki(f,!0),jt=Ke-j;sp(f,yt,Yt.top+(S===Jt?jt:0)+Zt,Yt.left+(S===Jt?0:jt)+Zt)}else sp(f,fe);_o($t||vn?te:le),ze&&at<1&&$t||be(Te+(at===1&&!vn?$e:0))}}v&&!Q.tween&&!hn&&!cl&&ge.restart(!0),a&&(Rt||y&&at&&(at<1||!eu))&&Fa(a.targets).forEach(function(J){return J.classList[$t||y?"add":"remove"](a.className)}),o&&!N&&!Pe&&o(I),Hn&&!hn?(N&&(ni&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(I)),(Rt||!eu)&&(c&&Rt&&nu(I,c),X[Mt]&&nu(I,X[Mt]),y&&(at===1?I.kill(!1,1):X[Mt]=0),Rt||(Mt=at===1?1:3,X[Mt]&&nu(I,X[Mt]))),A&&!$t&&Math.abs(I.getVelocity())>(aa(A)?A:2500)&&(qo(I.callbackAnimation),W?W.progress(1):qo(i,gt==="reverse"?1:!at,1))):N&&o&&!hn&&o(I)}if(Oe){var P=M?Ke/M.duration()*(M._caScrollDist||0):Ke;Xe(P+(z._isFlipped?1:0)),Oe(P)}Je&&Je(-Ke/M.duration()*(M._caScrollDist||0))}},I.enable=function(Pe,et){I.enabled||(I.enabled=!0,nn(F,"resize",la),V||nn(F,"scroll",Fs),ce&&nn(r,"refreshInit",ce),Pe!==!1&&(I.progress=L=0,me=ee=U=R()),et!==!1&&I.refresh())},I.getTween=function(Pe){return Pe&&Q?Q.tween:W},I.setPositions=function(Pe,et,Be,Ke){if(M){var Bt=M.scrollTrigger,at=M.duration(),Tt=Bt.end-Bt.start;Pe=Bt.start+Tt*Pe/at,et=Bt.start+Tt*et/at}I.refresh(!1,!1,{start:Zf(Pe,Be&&!!I._startClamp),end:Zf(et,Be&&!!I._endClamp)},Ke),I.update()},I.adjustPinSpacing=function(Pe){if(Me&&Pe){var et=Me.indexOf(S.d)+1;Me[et]=parseFloat(Me[et])+Pe+Zt,Me[1]=parseFloat(Me[1])+Pe+Zt,_o(Me)}},I.disable=function(Pe,et){if(I.enabled&&(Pe!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,et||W&&W.pause(),Ae=0,de&&(de.uncache=1),ce&&tn(r,"refreshInit",ce),ge&&(ge.pause(),Q.tween&&Q.tween.kill()&&(Q.tween=0)),!V)){for(var Be=ot.length;Be--;)if(ot[Be].scroller===F&&ot[Be]!==I)return;tn(F,"resize",la),V||tn(F,"scroll",Fs)}},I.kill=function(Pe,et){I.disable(Pe,et),W&&!et&&W.kill(),l&&delete ph[l];var Be=ot.indexOf(I);Be>=0&&ot.splice(Be,1),Be===wn&&Kl>0&&wn--,Be=0,ot.forEach(function(Ke){return Ke.scroller===I.scroller&&(Be=1)}),Be||En||(I.scroll.rec=0),i&&(i.scrollTrigger=null,Pe&&i.revert({kill:!1}),et||i.kill()),se&&[se,ie,z,H].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),wa===I&&(wa=0),f&&(de&&(de.uncache=1),Be=0,ot.forEach(function(Ke){return Ke.pin===f&&Be++}),Be||(de.spacer=0)),n.onKill&&n.onKill(I)},ot.push(I),I.enable(!1,!1),ft&&ft(I),i&&i.add&&!D){var rt=I.update;I.update=function(){I.update=rt,ct.cache++,j||T||I.refresh()},Fe.delayedCall(.01,I.update),D=.01,j=T=0}else I.refresh();f&&Ny()},r.register=function(n){return eo||(Fe=n||i_(),n_()&&window.document&&r.enable(),eo=sa),eo},r.defaults=function(n){if(n)for(var i in n)fl[i]=n[i];return fl},r.disable=function(n,i){sa=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(lt,"wheel",Fs),tn(At,"scroll",Fs),clearInterval(ll),tn(At,"touchcancel",Ci),tn(yt,"touchstart",Ci),hl(tn,At,"pointerdown,touchstart,mousedown",Jf),hl(tn,At,"pointerup,touchend,mouseup",Kf),vc.kill(),ul(tn);for(var s=0;s<ct.length;s+=3)dl(tn,ct[s],ct[s+1]),dl(tn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,At=document,Yn=At.documentElement,yt=At.body,Fe&&(Fa=Fe.utils.toArray,ya=Fe.utils.clamp,dh=Fe.core.context||Ci,Qc=Fe.core.suppressOverwrites||Ci,Wd=lt.history.scrollRestoration||"auto",mh=lt.pageYOffset||0,Fe.core.globals("ScrollTrigger",r),yt)){sa=1,go=document.createElement("div"),go.style.height="100vh",go.style.position="absolute",d_(),Cy(),Ht.register(Fe),r.isTouch=Ht.isTouch,_r=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hh=Ht.isTouch===1,nn(lt,"wheel",Fs),Gd=[lt,At,Yn,yt],Fe.matchMedia?(r.matchMedia=function(c){var u=Fe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Fe.addEventListener("matchMediaInit",function(){return Zd()}),Fe.addEventListener("matchMediaRevert",function(){return u_()}),Fe.addEventListener("matchMedia",function(){as(0,1),ws("matchMedia")}),Fe.matchMedia().add("(orientation: portrait)",function(){return iu(),iu})):console.warn("Requires GSAP 3.11.0 or later"),iu(),nn(At,"scroll",Fs);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Fe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ki(yt),Jt.m=Math.round(a.top+Jt.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),ll=setInterval(tp,250),Fe.delayedCall(.5,function(){return cl=0}),nn(At,"touchcancel",Ci),nn(yt,"touchstart",Ci),hl(nn,At,"pointerdown,touchstart,mousedown",Jf),hl(nn,At,"pointerup,touchend,mouseup",Kf),uh=Fe.utils.checkPrefix("transform"),Ql.push(uh),eo=dn(),vc=Fe.delayedCall(.2,as).pause(),to=[At,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;At.hidden?($f=c,Yf=u):($f!==c||Yf!==u)&&la()},At,"DOMContentLoaded",as,lt,"load",as,lt,"resize",la],ul(nn),ot.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)dl(tn,ct[l],ct[l+1]),dl(tn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(eu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ll)||(ll=i)&&setInterval(tp,i),"ignoreMobileResize"in n&&(hh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ul(tn)||ul(nn,n.autoRefreshEvents||"none"),Qg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ln(n),o=ct.indexOf(s),a=bs(s);~o&&ct.splice(o,a?6:2),i&&(a?Fi.unshift(lt,i,yt,i,Yn,i):Fi.unshift(s,i))},r.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Ln(n):n).getBoundingClientRect(),a=o[s?_s:vs]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Ln(n));var o=n.getBoundingClientRect(),a=o[s?_s:vs],l=i==null?a/2:i in Sc?Sc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ms.killAll||[];Ms={},i.forEach(function(s){return s()})}},r})();tt.version="3.13.0";tt.saveStyles=function(r){return r?Fa(r).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Fe.core.getCache(e),dh())}}):Xn};tt.revert=function(r,e){return Zd(!r,e)};tt.create=function(r,e){return new tt(r,e)};tt.refresh=function(r){return r?la(!0):(eo||tt.register())&&as(!0)};tt.update=function(r){return++ct.cache&&nr(r===!0?2:0)};tt.clearScrollMemory=h_;tt.maxScroll=function(r,e){return Ii(r,e?Cn:Jt)};tt.getScrollFunc=function(r,e){return Nr(Ln(r),e?Cn:Jt)};tt.getById=function(r){return ph[r]};tt.getAll=function(){return ot.filter(function(r){return r.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!fi};tt.snapDirectional=jd;tt.addEventListener=function(r,e){var t=Ms[r]||(Ms[r]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(r,e){var t=Ms[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Fe.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(s)&&(s=s(),nn(tt,"refresh",function(){return s=e.batchMax()})),Fa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var ap=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},su=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Yn&&r(yt,t)},_l={auto:1,scroll:1},zy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Fe.core.getCache(s),a=dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_l[(l=li(s)).overflowY]||_l[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!bs(s)&&(_l[(l=li(s)).overflowY]||_l[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},p_=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&zy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(At,Ht.eventTypes[0],cp,!1,!0)},onDisable:function(){return tn(At,Ht.eventTypes[0],cp,!0)}})},Hy=/(input|label|select|textarea)/i,lp,cp=function(e){var t=Hy.test(e.target.tagName);(t||lp)&&(e._gsapAllow=!0,lp=t)},Vy=function(e){es(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Ln(e.target)||Yn,u=Fe.core.globals().ScrollSmoother,h=u&&u.get(),d=_r&&(e.content&&Ln(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Nr(c,Jt),_=Nr(c,Cn),p=1,g=(Ht.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,x=mn(i)?function(){return i(a)}:function(){return i||2.8},y,v,E=p_(c,e.type,!0,s),w=function(){return v=!1},M=Ci,A=Ci,b=function(){l=Ii(c,Jt),A=ya(_r?1:0,l),n&&(M=ya(0,Ii(c,Cn))),y=ys},S=function(){d._gsap.y=oa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(v){requestAnimationFrame(w);var B=oa(a.deltaY/2),ne=A(f.v-B);if(d&&ne!==f.v+f.offset){f.offset=ne-f.v;var I=oa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=ct.cache,nr()}return!0}f.offset&&S(),v=!0},F,G,V,Y,X=function(){b(),F.isActive()&&F.vars.scrollY>l&&(f()>l?F.progress(1)&&f(l):F.resetTo("scrollY",l))};return d&&Fe.set(d,{y:"+=0"}),e.ignoreCheck=function(q){return _r&&q.type==="touchmove"&&N()||p>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){v=!1;var q=p;p=oa((lt.visualViewport&&lt.visualViewport.scale||1)/g),F.pause(),q!==p&&su(c,p>1.01?!0:n?!1:"x"),G=_(),V=f(),b(),y=ys},e.onRelease=e.onGestureStart=function(q,B){if(f.offset&&S(),!B)Y.restart(!0);else{ct.cache++;var ne=x(),I,ce;n&&(I=_(),ce=I+ne*.05*-q.velocityX/.227,ne*=ap(_,I,ce,Ii(c,Cn)),F.vars.scrollX=M(ce)),I=f(),ce=I+ne*.05*-q.velocityY/.227,ne*=ap(f,I,ce,Ii(c,Jt)),F.vars.scrollY=A(ce),F.invalidate().duration(ne).play(.01),(_r&&F.vars.scrollY>=l||I>=l-1)&&Fe.to({},{onUpdate:X,duration:ne})}o&&o(q)},e.onWheel=function(){F._ts&&F.pause(),dn()-m>1e3&&(y=0,m=dn())},e.onChange=function(q,B,ne,I,ce){if(ys!==y&&b(),B&&n&&_(M(I[2]===B?G+(q.startX-q.x):_()+B-I[1])),ne){f.offset&&S();var ye=ce[2]===ne,we=ye?V+q.startY-q.y:f()+ne-ce[1],U=A(we);ye&&we!==U&&(V+=U-we),f(U)}(ne||B)&&nr()},e.onEnable=function(){su(c,n?!1:"x"),tt.addEventListener("refresh",X),nn(lt,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){su(c,!0),tn(lt,"resize",X),tt.removeEventListener("refresh",X),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ht(e),a.iOS=_r,_r&&!f()&&f(1),_r&&Fe.ticker.add(Ci),Y=a._dc,F=Fe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:f_(f,f(),function(){return F.pause()})},onUpdate:nr,onComplete:Y.vars.onComplete}),a};tt.sort=function(r){if(mn(r))return ot.sort(r);var e=lt.pageYOffset||0;return tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),ot.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};tt.observe=function(r){return new Ht(r)};tt.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof Ht?r:Vy(r);return Mn&&Mn.target===e.target&&Mn.kill(),bs(e.target)&&(Mn=e),e};tt.core={_getVelocityProp:ch,_inputObserver:p_,_scrollers:ct,_proxies:Fi,bridge:{ss:function(){fi||ws("scrollStart"),fi=dn()},ref:function(){return hn}}};i_()&&Fe.registerPlugin(tt);let fn;function Fc(){We.registerPlugin(tt),window.ScrollTrigger=tt;const r=window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return document.documentElement.classList.add("lenis-smooth"),document.body.classList.add("lenis"),fn&&fn.destroy(),fn=new My({duration:r?1:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",smoothWheel:!0,wheelMultiplier:.8,smoothTouch:!1,infinite:!1}),window.lenis=fn,fn.on("scroll",tt.update),We.ticker.add(e=>{fn.raf(e*1e3)}),We.ticker.lagSmoothing(0),fn.on("scroll",({scroll:e})=>{e>5&&!document.querySelector("header").classList.contains("initialized")&&document.querySelector("header").classList.add("initialized")}),r&&setTimeout(()=>{window.scrollTo(0,0)},100),fn}function Gy(){fn&&(fn.stop(),document.body.classList.add("lenis-stopped"))}function Wy(){fn&&(fn.start(),document.body.classList.remove("lenis-stopped"))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="174",Xy=0,up=1,qy=2,m_=1,$y=2,ji=3,Ur=0,kn=1,Li=2,Lr=0,vo=1,hp=2,dp=3,fp=4,Yy=5,rs=100,jy=101,Zy=102,Jy=103,Ky=104,Qy=200,ex=201,tx=202,nx=203,_h=204,vh=205,ix=206,rx=207,sx=208,ox=209,ax=210,lx=211,cx=212,ux=213,hx=214,yh=0,xh=1,Sh=2,Po=3,bh=4,Mh=5,wh=6,Eh=7,g_=0,dx=1,fx=2,Dr=0,px=1,mx=2,gx=3,_x=4,vx=5,yx=6,xx=7,__=300,Lo=301,Do=302,Th=303,Ah=304,kc=306,Ch=1e3,ls=1001,Rh=1002,bi=1003,Sx=1004,vl=1005,Oi=1006,ou=1007,Ar=1008,or=1009,v_=1010,y_=1011,Ba=1012,Kd=1013,Es=1014,er=1015,Fo=1016,Qd=1017,ef=1018,Io=1020,x_=35902,S_=1021,b_=1022,Si=1023,M_=1024,w_=1025,yo=1026,Oo=1027,E_=1028,tf=1029,T_=1030,nf=1031,rf=1033,tc=33776,nc=33777,ic=33778,rc=33779,Ph=35840,Lh=35841,Dh=35842,Ih=35843,Oh=36196,Nh=37492,Uh=37496,Fh=37808,kh=37809,Bh=37810,zh=37811,Hh=37812,Vh=37813,Gh=37814,Wh=37815,Xh=37816,qh=37817,$h=37818,Yh=37819,jh=37820,Zh=37821,sc=36492,Jh=36494,Kh=36495,A_=36283,Qh=36284,ed=36285,td=36286,bx=3200,Mx=3201,C_=0,wx=1,yr="",Dn="srgb",No="srgb-linear",bc="linear",xt="srgb",ks=7680,pp=519,Ex=512,Tx=513,Ax=514,R_=515,Cx=516,Rx=517,Px=518,Lx=519,mp=35044,gp="300 es",tr=2e3,Mc=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,nd=180/Math.PI;function Bo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function Dx(r,e){return(r%e+e)%e}function lu(r,e,t){return(1-t)*r+t*e}function $o(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],p=i[0],g=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],w=i[5],M=i[8];return s[0]=o*p+a*x+l*E,s[3]=o*g+a*y+l*w,s[6]=o*m+a*v+l*M,s[1]=c*p+u*x+h*E,s[4]=c*g+u*y+h*w,s[7]=c*m+u*v+h*M,s[2]=d*p+f*x+_*E,s[5]=d*g+f*y+_*w,s[8]=d*m+f*v+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cu.makeScale(e,t)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Qe;function P_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function za(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ix(){const r=za("canvas");return r.style.display="block",r}const _p={};function ts(r){r in _p||(_p[r]=!0,console.warn(r))}function Ox(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Nx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ux(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vp=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yp=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){const r={enabled:!0,workingColorSpace:No,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yr?bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[No]:{primaries:e,whitePoint:n,transfer:bc,toXYZ:vp,fromXYZ:yp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:vp,fromXYZ:yp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),r}const mt=Fx();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bs;class kx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=za("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bx=0;class sf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(uu(i[o].image)):s.push(uu(i[o]))}else s=uu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function uu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zx=0;class Bn extends ko{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,n=ls,i=ls,s=Oi,o=Ar,a=Si,l=or,c=Bn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Bo(),this.name="",this.source=new sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==__)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=__;Bn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,E=(m+1)/2,w=(u+d)/4,M=(h+p)/4,A=(_+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=M/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=A/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=A/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-_)*(g-_)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(h-p)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hx extends ko{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new sf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends Hx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class L_ extends Bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bi,this.minFilter=bi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vx extends Bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bi,this.minFilter=bi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Za{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==d||c!==f||u!==_){let g=1-a;const m=l*d+c*f+u*_+h*p,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,m*x);g=Math.sin(g*w)/E,a=Math.sin(a*w)/E}const v=a*x;if(l=l*g+d*v,c=c*g+f*v,u=u*g+_*v,h=h*g+p*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hu=new K,xp=new Za;class As{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yl.copy(n.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),xl.subVectors(this.max,Yo),zs.subVectors(e.a,Yo),Hs.subVectors(e.b,Yo),Vs.subVectors(e.c,Yo),hr.subVectors(Hs,zs),dr.subVectors(Vs,Hs),Wr.subVectors(zs,Vs);let t=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Wr.z,Wr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Wr.z,0,-Wr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Wr.y,Wr.x,0];return!du(t,zs,Hs,Vs,xl)||(t=[1,0,0,0,1,0,0,0,1],!du(t,zs,Hs,Vs,xl))?!1:(Sl.crossVectors(hr,dr),t=[Sl.x,Sl.y,Sl.z],du(t,zs,Hs,Vs,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new K,new K,new K,new K,new K,new K,new K,new K],gi=new K,yl=new As,zs=new K,Hs=new K,Vs=new K,hr=new K,dr=new K,Wr=new K,Yo=new K,xl=new K,Sl=new K,Xr=new K;function du(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xr.fromArray(r,s);const a=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gx=new As,jo=new K,fu=new K;class of{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(fu)),this.expandByPoint(jo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new K,pu=new K,bl=new K,fr=new K,mu=new K,Ml=new K,gu=new K;class Wx{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pu.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(pu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bl),a=fr.dot(this.direction),l=-fr.dot(bl),c=fr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const p=1/u;h*=p,d*=p,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(pu).addScaledVector(bl,d),f}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const n=Wi.dot(this.direction),i=Wi.dot(Wi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,i,s){mu.subVectors(t,e),Ml.subVectors(n,e),gu.crossVectors(mu,Ml);let o=this.direction.dot(gu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Ml.crossVectors(fr,Ml));if(l<0)return null;const c=a*this.direction.dot(mu.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(gu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,p,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d+p*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,p=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xx,e,qx)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),pr.crossVectors(n,Gn),pr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),pr.crossVectors(n,Gn)),pr.normalize(),wl.crossVectors(Gn,pr),i[0]=pr.x,i[4]=wl.x,i[8]=Gn.x,i[1]=pr.y,i[5]=wl.y,i[9]=Gn.y,i[2]=pr.z,i[6]=wl.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],p=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],w=i[0],M=i[4],A=i[8],b=i[12],S=i[1],N=i[5],F=i[9],G=i[13],V=i[2],Y=i[6],X=i[10],q=i[14],B=i[3],ne=i[7],I=i[11],ce=i[15];return s[0]=o*w+a*S+l*V+c*B,s[4]=o*M+a*N+l*Y+c*ne,s[8]=o*A+a*F+l*X+c*I,s[12]=o*b+a*G+l*q+c*ce,s[1]=u*w+h*S+d*V+f*B,s[5]=u*M+h*N+d*Y+f*ne,s[9]=u*A+h*F+d*X+f*I,s[13]=u*b+h*G+d*q+f*ce,s[2]=_*w+p*S+g*V+m*B,s[6]=_*M+p*N+g*Y+m*ne,s[10]=_*A+p*F+g*X+m*I,s[14]=_*b+p*G+g*q+m*ce,s[3]=x*w+y*S+v*V+E*B,s[7]=x*M+y*N+v*Y+E*ne,s[11]=x*A+y*F+v*X+E*I,s[15]=x*b+y*G+v*q+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],p=e[7],g=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+p*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+g*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],p=e[13],g=e[14],m=e[15],x=h*g*c-p*d*c+p*l*f-a*g*f-h*l*m+a*d*m,y=_*d*c-u*g*c-_*l*f+o*g*f+u*l*m-o*d*m,v=u*p*c-_*h*c+_*a*f-o*p*f-u*a*m+o*h*m,E=_*h*l-u*p*l-_*a*d+o*p*d+u*a*g-o*h*g,w=t*x+n*y+i*v+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=x*M,e[1]=(p*d*s-h*g*s-p*i*f+n*g*f+h*i*m-n*d*m)*M,e[2]=(a*g*s-p*l*s+p*i*c-n*g*c-a*i*m+n*l*m)*M,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*M,e[4]=y*M,e[5]=(u*g*s-_*d*s+_*i*f-t*g*f-u*i*m+t*d*m)*M,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*m-t*l*m)*M,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*M,e[8]=v*M,e[9]=(_*h*s-u*p*s-_*n*f+t*p*f+u*n*m-t*h*m)*M,e[10]=(o*p*s-_*a*s+_*n*c-t*p*c-o*n*m+t*a*m)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*M,e[12]=E*M,e[13]=(u*p*i-_*h*i+_*n*d-t*p*d-u*n*g+t*h*g)*M,e[14]=(_*a*i-o*p*i-_*n*l+t*p*l+o*n*g-t*a*g)*M,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,p=o*u,g=o*h,m=a*h,x=l*c,y=l*u,v=l*h,E=n.x,w=n.y,M=n.z;return i[0]=(1-(p+m))*E,i[1]=(f+v)*E,i[2]=(_-y)*E,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+m))*w,i[6]=(g+x)*w,i[7]=0,i[8]=(_+y)*M,i[9]=(g-x)*M,i[10]=(1-(d+p))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);const c=1/s,u=1/o,h=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=h,_i.elements[9]*=h,_i.elements[10]*=h,t.setFromRotationMatrix(_i),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=tr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===tr)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Mc)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=tr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let _,p;if(a===tr)_=(o+s)*h,p=-2*h;else if(a===Mc)_=s*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=p,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new K,_i=new Dt,Xx=new K(0,0,0),qx=new K(1,1,1),pr=new K,wl=new K,Gn=new K,Sp=new Dt,bp=new Za;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class D_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $x=0;const Mp=new K,Ws=new Za,Xi=new Dt,El=new K,Zo=new K,Yx=new K,jx=new Za,wp=new K(1,0,0),Ep=new K(0,1,0),Tp=new K(0,0,1),Ap={type:"added"},Zx={type:"removed"},Xs={type:"childadded",child:null},_u={type:"childremoved",child:null};class _n extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new K,t=new Hi,n=new Za,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Qe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(Tp,e)}translateOnAxis(e,t){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(Tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?El.copy(e):El.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Zo,El,this.up):Xi.lookAt(El,Zo,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zx),_u.child=e,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_n.DEFAULT_UP=new K(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new K,qi=new K,vu=new K,$i=new K,qs=new K,$s=new K,Cp=new K,yu=new K,xu=new K,Su=new K,bu=new St,Mu=new St,wu=new St;class xi{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vi.subVectors(i,t),qi.subVectors(n,t),vu.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(qi),l=vi.dot(vu),c=qi.dot(qi),u=qi.dot(vu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return bu.setScalar(0),Mu.setScalar(0),wu.setScalar(0),bu.fromBufferAttribute(e,t),Mu.fromBufferAttribute(e,n),wu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(bu,s.x),o.addScaledVector(Mu,s.y),o.addScaledVector(wu,s.z),o}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),qi.subVectors(e,t),vi.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;qs.subVectors(i,n),$s.subVectors(s,n),yu.subVectors(e,n);const l=qs.dot(yu),c=$s.dot(yu);if(l<=0&&c<=0)return t.copy(n);xu.subVectors(e,i);const u=qs.dot(xu),h=$s.dot(xu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);Su.subVectors(e,s);const f=qs.dot(Su),_=$s.dot(Su);if(_>=0&&f<=_)return t.copy(s);const p=f*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector($s,a);const g=u*_-f*h;if(g<=0&&h-u>=0&&f-_>=0)return Cp.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Cp,a);const m=1/(g+p+d);return o=p*m,a=d*m,t.copy(n).addScaledVector(qs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function Eu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}let qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Dx(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Eu(o,s,e+1/3),this.g=Eu(o,s,e),this.b=Eu(o,s,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const n=I_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return mt.fromWorkingColorSpace(un.copy(this),e),Math.round(ut(un.r*255,0,255))*65536+Math.round(ut(un.g*255,0,255))*256+Math.round(ut(un.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Dn){mt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Tl);const n=lu(mr.h,Tl.h,t),i=lu(mr.s,Tl.s,t),s=lu(mr.l,Tl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const un=new qe;qe.NAMES=I_;let Jx=0;class Ja extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=vo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_h&&(n.blendSrc=this.blendSrc),this.blendDst!==vh&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class O_ extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new K,Al=new ve;let Kx=0;class ki{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mp,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$o(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$o(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$o(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$o(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class N_ extends ki{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class U_ extends ki{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pi extends ki{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qx=0;const si=new Dt,Tu=new _n,Ys=new K,Wn=new As,Jo=new As,en=new K;class lr extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?U_:N_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Wn.min,Jo.min),Wn.expandByPoint(en),en.addVectors(Wn.max,Jo.max),Wn.expandByPoint(en)):(Wn.expandByPoint(Jo.min),Wn.expandByPoint(Jo.max))}Wn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),en.add(Ys)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new K,l[A]=new K;const c=new K,u=new K,h=new K,d=new ve,f=new ve,_=new ve,p=new K,g=new K;function m(A,b,S){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(N),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(N),a[A].add(p),a[b].add(p),a[S].add(p),l[A].add(g),l[b].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,b=x.length;A<b;++A){const S=x[A],N=S.start,F=S.count;for(let G=N,V=N+F;G<V;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new K,v=new K,E=new K,w=new K;function M(A){E.fromBufferAttribute(i,A),w.copy(E);const b=a[A];y.copy(b),y.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(w,b);const N=v.dot(l[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,N)}for(let A=0,b=x.length;A<b;++A){const S=x[A],N=S.start,F=S.count;for(let G=N,V=N+F;G<V;G+=3)M(e.getX(G+0)),M(e.getX(G+1)),M(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,h=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),p=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let p=0,g=l.length;p<g;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new ki(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rp=new Dt,qr=new Wx,Cl=new of,Pp=new K,Rl=new K,Pl=new K,Ll=new K,Au=new K,Dl=new K,Lp=new K,Il=new K;class di extends _n{constructor(e=new lr,t=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Au.fromBufferAttribute(h,e),o?Dl.addScaledVector(Au,u):Dl.addScaledVector(Au.sub(t),u))}t.add(Dl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Cl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Cl,Pp)===null||qr.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Rp.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Rp),!(n.boundingBox!==null&&qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const w=a.getX(v),M=a.getX(v+1),A=a.getX(v+2);i=Ol(this,m,e,n,c,u,h,w,M,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Ol(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,p=d.length;_<p;_++){const g=d[_],m=o[g.materialIndex],x=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const w=v,M=v+1,A=v+2;i=Ol(this,m,e,n,c,u,h,w,M,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let g=_,m=p;g<m;g+=3){const x=g,y=g+1,v=g+2;i=Ol(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function eS(r,e,t,n,i,s,o,a){let l;if(e.side===kn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ur,a),l===null)return null;Il.copy(a),Il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:r}}function Ol(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Rl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Ll);const u=eS(r,e,t,n,Rl,Pl,Ll,Lp);if(u){const h=new K;xi.getBarycoord(Lp,Rl,Pl,Ll,h),i&&(u.uv=xi.getInterpolatedAttribute(i,a,l,c,h,new ve)),s&&(u.uv1=xi.getInterpolatedAttribute(s,a,l,c,h,new ve)),o&&(u.normal=xi.getInterpolatedAttribute(o,a,l,c,h,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};xi.getNormal(Rl,Pl,Ll,d.normal),u.face=d,u.barycoord=h}return u}class Ka extends lr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(h,2));function _(p,g,m,x,y,v,E,w,M,A,b){const S=v/M,N=E/A,F=v/2,G=E/2,V=w/2,Y=M+1,X=A+1;let q=0,B=0;const ne=new K;for(let I=0;I<X;I++){const ce=I*N-G;for(let ye=0;ye<Y;ye++){const we=ye*S-F;ne[p]=we*x,ne[g]=ce*y,ne[m]=V,c.push(ne.x,ne.y,ne.z),ne[p]=0,ne[g]=0,ne[m]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ye/M),h.push(1-I/A),q+=1}}for(let I=0;I<A;I++)for(let ce=0;ce<M;ce++){const ye=d+ce+Y*I,we=d+ce+Y*(I+1),U=d+(ce+1)+Y*(I+1),O=d+(ce+1)+Y*I;l.push(ye,we,O),l.push(we,U,O),B+=6}a.addGroup(f,B,b),f+=B,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bn(r){const e={};for(let t=0;t<r.length;t++){const n=Uo(r[t]);for(const i in n)e[i]=n[i]}return e}function tS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function F_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const nS={clone:Uo,merge:bn};var iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=rS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class k_ extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new K,Dp=new ve,Ip=new ve;class jn extends k_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,Dp,Ip),t.subVectors(Ip,Dp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(au*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Zs=1;class B_ extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jn(js,Zs,e,t);i.layers=this.layers,this.add(i);const s=new jn(js,Zs,e,t);s.layers=this.layers,this.add(s);const o=new jn(js,Zs,e,t);o.layers=this.layers,this.add(o);const a=new jn(js,Zs,e,t);a.layers=this.layers,this.add(a);const l=new jn(js,Zs,e,t);l.layers=this.layers,this.add(l);const c=new jn(js,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===tr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class af extends Bn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new af(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ka(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Uo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Lr});s.uniforms.tEquirect.value=t;const o=new di(i,s),a=t.minFilter;return t.minFilter===Ar&&(t.minFilter=Oi),new B_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ca extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sS={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class H_ extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ru=new K,oS=new K,aS=new Qe;class ns{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ru.subVectors(n,t).cross(oS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ru),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||aS.getNormalMatrix(e),i=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new of,Nl=new K;class lf{constructor(e=new ns,t=new ns,n=new ns,i=new ns,s=new ns,o=new ns){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],p=i[10],g=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,g-f,v-m).normalize(),n[1].setComponents(l+s,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+u,g+_,v+x).normalize(),n[3].setComponents(l-o,d-u,g-_,v-x).normalize(),n[4].setComponents(l-a,d-h,g-p,v-y).normalize(),t===tr)n[5].setComponents(l+a,d+h,g+p,v+y).normalize();else if(t===Mc)n[5].setComponents(a,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Nl.x=i.normal.x>0?e.max.x:e.min.x,Nl.y=i.normal.y>0?e.max.y:e.min.y,Nl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V_ extends Bn{constructor(e,t,n,i,s,o,a,l,c,u=yo){if(u!==yo&&u!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yo&&(n=Es),n===void 0&&u===Oo&&(n=Io),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bi,this.minFilter=l!==void 0?l:bi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ve:new K);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new K,i=[],s=[],o=[],a=new K,l=new Dt;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new K)}s[0]=new K,o[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cf extends Vi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lS extends cf{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ul=new K,Pu=new uf,Lu=new uf,Du=new uf;class cS extends Vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new K){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Ul.subVectors(i[0],i[1]).add(i[0]),c=Ul);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Ul.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);p<1e-4&&(p=1),_<1e-4&&(_=p),g<1e-4&&(g=p),Pu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,p,g),Lu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,p,g),Du.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,p,g)}else this.curveType==="catmullrom"&&(Pu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Lu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Du.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Pu.calc(l),Lu.calc(l),Du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new K().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Op(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function uS(r,e){const t=1-r;return t*t*e}function hS(r,e){return 2*(1-r)*r*e}function dS(r,e){return r*r*e}function Ea(r,e,t,n){return uS(r,e)+hS(r,t)+dS(r,n)}function fS(r,e){const t=1-r;return t*t*t*e}function pS(r,e){const t=1-r;return 3*t*t*r*e}function mS(r,e){return 3*(1-r)*r*r*e}function gS(r,e){return r*r*r*e}function Ta(r,e,t,n,i){return fS(r,e)+pS(r,t)+mS(r,n)+gS(r,i)}class G_ extends Vi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ta(e,i.x,s.x,o.x,a.x),Ta(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _S extends Vi{constructor(e=new K,t=new K,n=new K,i=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ta(e,i.x,s.x,o.x,a.x),Ta(e,i.y,s.y,o.y,a.y),Ta(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W_ extends Vi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vS extends Vi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X_ extends Vi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ea(e,i.x,s.x,o.x),Ea(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yS extends Vi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ea(e,i.x,s.x,o.x),Ea(e,i.y,s.y,o.y),Ea(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Op(a,l.x,c.x,u.x,h.x),Op(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ve().fromArray(i))}return this}}var id=Object.freeze({__proto__:null,ArcCurve:lS,CatmullRomCurve3:cS,CubicBezierCurve:G_,CubicBezierCurve3:_S,EllipseCurve:cf,LineCurve:W_,LineCurve3:vS,QuadraticBezierCurve:X_,QuadraticBezierCurve3:yS,SplineCurve:q_});class xS extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new id[i.type]().fromJSON(i))}return this}}class So extends xS{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new W_(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new X_(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new G_(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new q_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new cf(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Aa extends So{constructor(e){super(e),this.uuid=Bo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new So().fromJSON(i))}return this}}class SS{static triangulate(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let o=$_(e,0,s,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,h,d,f,_;if(i&&(o=TS(e,t,o,n)),e.length>80*n){l=u=e[0],c=h=e[1];for(let p=n;p<s;p+=n)d=e[p],f=e[p+1],d<l&&(l=d),f<c&&(c=f),d>u&&(u=d),f>h&&(h=f);_=Math.max(u-l,h-c),_=_!==0?32767/_:0}return Ha(o,a,n,l,c,_,0),a}}function $_(r,e,t,n,i){let s,o;if(i===FS(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Np(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Np(s,r[s],r[s+1],o);return o&&Bc(o,o.next)&&(Ga(o),o=o.next),o}function Cs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Bc(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(r,e,t,n,i,s,o){if(!r)return;!o&&s&&LS(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?MS(r,n,i,s):bS(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Ga(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=wS(Cs(r),e,t),Ha(r,e,t,n,i,s,2)):o===2&&ES(r,e,t,n,i,s):Ha(Cs(r),e,t,n,i,s,1);break}}}function bS(r){const e=r.prev,t=r,n=r.next;if(Nt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&ao(i,a,s,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function MS(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Nt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=u<h?u<d?u:d:h<d?h:d,p=a>l?a>c?a:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=rd(f,_,e,t,n),x=rd(p,g,e,t,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&ao(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&ao(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=p&&y.y>=_&&y.y<=g&&y!==i&&y!==o&&ao(a,u,l,h,c,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=p&&v.y>=_&&v.y<=g&&v!==i&&v!==o&&ao(a,u,l,h,c,d,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wS(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Bc(i,s)&&Y_(i,n,n.next,s)&&Va(i,s)&&Va(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ga(n),Ga(n.next),n=r=s),n=n.next}while(n!==r);return Cs(n)}function ES(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&OS(o,a)){let l=j_(o,a);o=Cs(o,o.next),l=Cs(l,l.next),Ha(o,e,t,n,i,s,0),Ha(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function TS(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=$_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(IS(c));for(i.sort(AS),s=0;s<i.length;s++)t=CS(i[s],t);return t}function AS(r,e){return r.x-e.x}function CS(r,e){const t=RS(r,e);if(!t)return e;const n=j_(t,r);return Cs(n,n.next),Cs(t,t.next)}function RS(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ao(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Va(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&PS(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function PS(r,e){return Nt(r.prev,r,e.prev)<0&&Nt(e.next,r,r.next)<0}function LS(r,e,t,n){let i=r;do i.z===0&&(i.z=rd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,DS(i)}function DS(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function rd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function IS(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ao(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function OS(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!NS(r,e)&&(Va(r,e)&&Va(e,r)&&US(r,e)&&(Nt(r.prev,r,e.prev)||Nt(r,e.prev,e))||Bc(r,e)&&Nt(r.prev,r,r.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Bc(r,e){return r.x===e.x&&r.y===e.y}function Y_(r,e,t,n){const i=kl(Nt(r,e,t)),s=kl(Nt(r,e,n)),o=kl(Nt(t,n,r)),a=kl(Nt(t,n,e));return!!(i!==s&&o!==a||i===0&&Fl(r,t,e)||s===0&&Fl(r,n,e)||o===0&&Fl(t,r,n)||a===0&&Fl(t,e,n))}function Fl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function kl(r){return r>0?1:r<0?-1:0}function NS(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Y_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Va(r,e){return Nt(r.prev,r,r.next)<0?Nt(r,e,r.next)>=0&&Nt(r,r.prev,e)>=0:Nt(r,e,r.prev)<0||Nt(r,r.next,e)<0}function US(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function j_(r,e){const t=new sd(r.i,r.x,r.y),n=new sd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Np(r,e,t,n){const i=new sd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ga(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function sd(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FS(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class xs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Up(e),Fp(n,e);let o=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Fp(n,t[l]);const a=SS.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Up(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Fp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class wc extends lr{constructor(e=new Aa([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pi(i,3)),this.setAttribute("uv",new pi(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:kS;let y,v=!1,E,w,M,A;m&&(y=m.getSpacedPoints(u),v=!0,d=!1,E=m.computeFrenetFrames(u,!1),w=new K,M=new K,A=new K),d||(g=0,f=0,_=0,p=0);const b=a.extractPoints(c);let S=b.shape;const N=b.holes;if(!xs.isClockWise(S)){S=S.reverse();for(let ee=0,j=N.length;ee<j;ee++){const T=N[ee];xs.isClockWise(T)&&(N[ee]=T.reverse())}}const G=xs.triangulateShape(S,N),V=S;for(let ee=0,j=N.length;ee<j;ee++){const T=N[ee];S=S.concat(T)}function Y(ee,j,T){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(j,T)}const X=S.length,q=G.length;function B(ee,j,T){let se,ie,z;const H=ee.x-j.x,k=ee.y-j.y,he=T.x-ee.x,D=T.y-ee.y,C=H*H+k*k,te=H*D-k*he;if(Math.abs(te)>Number.EPSILON){const le=Math.sqrt(C),fe=Math.sqrt(he*he+D*D),pe=j.x-k/le,Ee=j.y+H/le,be=T.x-D/fe,Te=T.y+he/fe,$e=((be-pe)*D-(Te-Ee)*he)/(H*D-k*he);se=pe+H*$e-ee.x,ie=Ee+k*$e-ee.y;const Se=se*se+ie*ie;if(Se<=2)return new ve(se,ie);z=Math.sqrt(Se/2)}else{let le=!1;H>Number.EPSILON?he>Number.EPSILON&&(le=!0):H<-Number.EPSILON?he<-Number.EPSILON&&(le=!0):Math.sign(k)===Math.sign(D)&&(le=!0),le?(se=-k,ie=H,z=Math.sqrt(C)):(se=H,ie=k,z=Math.sqrt(C/2))}return new ve(se/z,ie/z)}const ne=[];for(let ee=0,j=V.length,T=j-1,se=ee+1;ee<j;ee++,T++,se++)T===j&&(T=0),se===j&&(se=0),ne[ee]=B(V[ee],V[T],V[se]);const I=[];let ce,ye=ne.concat();for(let ee=0,j=N.length;ee<j;ee++){const T=N[ee];ce=[];for(let se=0,ie=T.length,z=ie-1,H=se+1;se<ie;se++,z++,H++)z===ie&&(z=0),H===ie&&(H=0),ce[se]=B(T[se],T[z],T[H]);I.push(ce),ye=ye.concat(ce)}for(let ee=0;ee<g;ee++){const j=ee/g,T=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+p;for(let ie=0,z=V.length;ie<z;ie++){const H=Y(V[ie],ne[ie],se);R(H.x,H.y,-T)}for(let ie=0,z=N.length;ie<z;ie++){const H=N[ie];ce=I[ie];for(let k=0,he=H.length;k<he;k++){const D=Y(H[k],ce[k],se);R(D.x,D.y,-T)}}}const we=_+p;for(let ee=0;ee<X;ee++){const j=d?Y(S[ee],ye[ee],we):S[ee];v?(M.copy(E.normals[0]).multiplyScalar(j.x),w.copy(E.binormals[0]).multiplyScalar(j.y),A.copy(y[0]).add(M).add(w),R(A.x,A.y,A.z)):R(j.x,j.y,0)}for(let ee=1;ee<=u;ee++)for(let j=0;j<X;j++){const T=d?Y(S[j],ye[j],we):S[j];v?(M.copy(E.normals[ee]).multiplyScalar(T.x),w.copy(E.binormals[ee]).multiplyScalar(T.y),A.copy(y[ee]).add(M).add(w),R(A.x,A.y,A.z)):R(T.x,T.y,h/u*ee)}for(let ee=g-1;ee>=0;ee--){const j=ee/g,T=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+p;for(let ie=0,z=V.length;ie<z;ie++){const H=Y(V[ie],ne[ie],se);R(H.x,H.y,h+T)}for(let ie=0,z=N.length;ie<z;ie++){const H=N[ie];ce=I[ie];for(let k=0,he=H.length;k<he;k++){const D=Y(H[k],ce[k],se);v?R(D.x,D.y+y[u-1].y,y[u-1].x+T):R(D.x,D.y,h+T)}}}U(),O();function U(){const ee=i.length/3;if(d){let j=0,T=X*j;for(let se=0;se<q;se++){const ie=G[se];Q(ie[2]+T,ie[1]+T,ie[0]+T)}j=u+g*2,T=X*j;for(let se=0;se<q;se++){const ie=G[se];Q(ie[0]+T,ie[1]+T,ie[2]+T)}}else{for(let j=0;j<q;j++){const T=G[j];Q(T[2],T[1],T[0])}for(let j=0;j<q;j++){const T=G[j];Q(T[0]+X*u,T[1]+X*u,T[2]+X*u)}}n.addGroup(ee,i.length/3-ee,0)}function O(){const ee=i.length/3;let j=0;L(V,j),j+=V.length;for(let T=0,se=N.length;T<se;T++){const ie=N[T];L(ie,j),j+=ie.length}n.addGroup(ee,i.length/3-ee,1)}function L(ee,j){let T=ee.length;for(;--T>=0;){const se=T;let ie=T-1;ie<0&&(ie=ee.length-1);for(let z=0,H=u+g*2;z<H;z++){const k=X*z,he=X*(z+1),D=j+se+k,C=j+ie+k,te=j+ie+he,le=j+se+he;de(D,C,te,le)}}}function R(ee,j,T){l.push(ee),l.push(j),l.push(T)}function Q(ee,j,T){$(ee),$(j),$(T);const se=i.length/3,ie=x.generateTopUV(n,i,se-3,se-2,se-1);me(ie[0]),me(ie[1]),me(ie[2])}function de(ee,j,T,se){$(ee),$(j),$(se),$(j),$(T),$(se);const ie=i.length/3,z=x.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);me(z[0]),me(z[1]),me(z[3]),me(z[1]),me(z[2]),me(z[3])}function $(ee){i.push(l[ee*3+0]),i.push(l[ee*3+1]),i.push(l[ee*3+2])}function me(ee){s.push(ee.x),s.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return BS(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new id[i.type]().fromJSON(i)),new wc(n,e.options)}}const kS={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],_=e[i*3+2],p=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-h),new ve(d,1-_),new ve(p,1-m)]:[new ve(a,1-l),new ve(u,1-h),new ve(f,1-_),new ve(g,1-m)]}};function BS(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qa extends lr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],p=[],g=[];for(let m=0;m<u;m++){const x=m*d-o;for(let y=0;y<c;y++){const v=y*h-s;_.push(v,-x,0),p.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),w=x+1+c*m;f.push(y,v,w),f.push(v,E,w)}this.setIndex(f),this.setAttribute("position",new pi(_,3)),this.setAttribute("normal",new pi(p,3)),this.setAttribute("uv",new pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class zS extends Ja{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C_,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HS extends zS{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VS extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ec={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class WS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const XS=new WS;class el{constructor(e){this.manager=e!==void 0?e:XS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}el.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class qS extends Error{constructor(e,t){super(e),this.response=t}}class $S extends el{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ec.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:i});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let p=0;const g=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:f});for(let w=0,M=u.length;w<M;w++){const A=u[w];A.onProgress&&A.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(g)}else throw new qS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ec.add(e,c);const u=Yi[e];delete Yi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class YS extends el{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ec.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=za("img");function l(){u(),Ec.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jS extends el{constructor(e){super(e)}load(e,t,n,i){const s=new af;s.colorSpace=Dn;const o=new YS(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class hf extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Iu=new Dt,kp=new K,Bp=new K;class Z_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(kp),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),Iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zp=new Dt,Ko=new K,Ou=new K;class ZS extends Z_{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ko),Ou.copy(n.position),Ou.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ou),n.updateMatrixWorld(),i.makeTranslation(-Ko.x,-Ko.y,-Ko.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}}class JS extends hf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ZS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class df extends k_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class KS extends Z_{constructor(){super(new df(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends hf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class QS extends hf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eb extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class tb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vp(){return performance.now()}const Gp=new ve;class nb{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Yr{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new So,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const x=[];for(let y=0,v=m.length;y<v;y++){const E=m[y],w=new Aa;w.curves=E.curves,x.push(w)}return x}function n(m,x){const y=x.length;let v=!1;for(let E=y-1,w=0;w<y;E=w++){let M=x[E],A=x[w],b=A.x-M.x,S=A.y-M.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(M=x[w],b=-b,A=x[E],S=-S),m.y<M.y||m.y>A.y)continue;if(m.y===M.y){if(m.x===M.x)return!0}else{const N=S*(m.x-M.x)-b*(m.y-M.y);if(N===0)return!0;if(N<0)continue;v=!v}}else{if(m.y!==M.y)continue;if(A.x<=m.x&&m.x<=M.x||M.x<=m.x&&m.x<=A.x)return!0}}return v}const i=xs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Aa,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],_=0,p;d[_]=void 0,f[_]=[];for(let m=0,x=s.length;m<x;m++)a=s[m],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!u&&d[_]&&_++,d[_]={s:new Aa,p},d[_].s.curves=a.curves,u&&_++,f[_]=[]):f[_].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,x=0;for(let y=0,v=d.length;y<v;y++)h[y]=[];for(let y=0,v=d.length;y<v;y++){const E=f[y];for(let w=0;w<E.length;w++){const M=E[w];let A=!0;for(let b=0;b<d.length;b++)n(M.p,d[b].p)&&(y!==b&&x++,A?(A=!1,h[b].push(M)):m=!0);A&&h[y].push(M)}}x>0&&m===!1&&(f=h)}let g;for(let m=0,x=d.length;m<x;m++){l=d[m].s,c.push(l),g=f[m];for(let y=0,v=g.length;y<v;y++)l.holes.push(g[y].h)}return c}}function Wp(r,e,t,n){const i=ib(n);switch(t){case S_:return r*e;case M_:return r*e;case w_:return r*e*2;case E_:return r*e/i.components*i.byteLength;case tf:return r*e/i.components*i.byteLength;case T_:return r*e*2/i.components*i.byteLength;case nf:return r*e*2/i.components*i.byteLength;case b_:return r*e*3/i.components*i.byteLength;case Si:return r*e*4/i.components*i.byteLength;case rf:return r*e*4/i.components*i.byteLength;case tc:case nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Ih:return Math.max(r,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(r,8)*Math.max(e,8)/2;case Oh:case Nh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case sc:case Jh:case Kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case A_:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ib(r){switch(r){case or:case v_:return{byteLength:1,components:1};case Ba:case y_:case Fo:return{byteLength:2,components:1};case Qd:case ef:return{byteLength:2,components:4};case Es:case Kd:case er:return{byteLength:4,components:1};case x_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rb(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],p=h[f];p.start<=_.start+_.count+1?_.count=Math.max(_.count,p.start+p.count-_.start):(++d,h[d]=p)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const p=h[f];r.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ob=`#ifdef USE_ALPHAHASH
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
#endif`,ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
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
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
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
#endif`,pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vb=`#ifdef USE_IRIDESCENCE
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
#endif`,yb=`#ifdef USE_BUMPMAP
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
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cb=`#define PI 3.141592653589793
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
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bb=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
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
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
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
#endif`,iM=`struct PhysicalMaterial {
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
}`,rM=`
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
#endif`,sM=`#if defined( RE_IndirectDiffuse )
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
#endif`,oM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pM=`#if defined( USE_POINTS_UV )
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
#endif`,mM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,SM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AM=`#ifdef USE_NORMALMAP
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
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GM=`float getShadowMask() {
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
}`,WM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XM=`#ifdef USE_SKINNING
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
#endif`,qM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
}`,dw=`#define DISTANCE
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
}`,fw=`#define DISTANCE
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
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`uniform float scale;
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
}`,_w=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,yw=`uniform vec3 diffuse;
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
}`,xw=`#define LAMBERT
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
}`,Sw=`#define LAMBERT
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
}`,bw=`#define MATCAP
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
}`,Mw=`#define MATCAP
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
}`,ww=`#define NORMAL
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
}`,Ew=`#define NORMAL
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
}`,Tw=`#define PHONG
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
}`,Aw=`#define PHONG
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
}`,Cw=`#define STANDARD
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
}`,Rw=`#define STANDARD
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
}`,Pw=`#define TOON
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
}`,Lw=`#define TOON
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
}`,Dw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Ow=`#include <common>
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
}`,Nw=`uniform vec3 color;
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
}`,Uw=`uniform float rotation;
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
}`,Fw=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:sb,alphahash_pars_fragment:ob,alphamap_fragment:ab,alphamap_pars_fragment:lb,alphatest_fragment:cb,alphatest_pars_fragment:ub,aomap_fragment:hb,aomap_pars_fragment:db,batching_pars_vertex:fb,batching_vertex:pb,begin_vertex:mb,beginnormal_vertex:gb,bsdfs:_b,iridescence_fragment:vb,bumpmap_pars_fragment:yb,clipping_planes_fragment:xb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Mb,color_fragment:wb,color_pars_fragment:Eb,color_pars_vertex:Tb,color_vertex:Ab,common:Cb,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:Pb,displacementmap_pars_vertex:Lb,displacementmap_vertex:Db,emissivemap_fragment:Ib,emissivemap_pars_fragment:Ob,colorspace_fragment:Nb,colorspace_pars_fragment:Ub,envmap_fragment:Fb,envmap_common_pars_fragment:kb,envmap_pars_fragment:Bb,envmap_pars_vertex:zb,envmap_physical_pars_fragment:Jb,envmap_vertex:Hb,fog_vertex:Vb,fog_pars_vertex:Gb,fog_fragment:Wb,fog_pars_fragment:Xb,gradientmap_pars_fragment:qb,lightmap_pars_fragment:$b,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:jb,lights_pars_begin:Zb,lights_toon_fragment:Kb,lights_toon_pars_fragment:Qb,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:oM,logdepthbuf_fragment:aM,logdepthbuf_pars_fragment:lM,logdepthbuf_pars_vertex:cM,logdepthbuf_vertex:uM,map_fragment:hM,map_pars_fragment:dM,map_particle_fragment:fM,map_particle_pars_fragment:pM,metalnessmap_fragment:mM,metalnessmap_pars_fragment:gM,morphinstance_vertex:_M,morphcolor_vertex:vM,morphnormal_vertex:yM,morphtarget_pars_vertex:xM,morphtarget_vertex:SM,normal_fragment_begin:bM,normal_fragment_maps:MM,normal_pars_fragment:wM,normal_pars_vertex:EM,normal_vertex:TM,normalmap_pars_fragment:AM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:PM,iridescence_pars_fragment:LM,opaque_fragment:DM,packing:IM,premultiplied_alpha_fragment:OM,project_vertex:NM,dithering_fragment:UM,dithering_pars_fragment:FM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:BM,shadowmap_pars_fragment:zM,shadowmap_pars_vertex:HM,shadowmap_vertex:VM,shadowmask_pars_fragment:GM,skinbase_vertex:WM,skinning_pars_vertex:XM,skinning_vertex:qM,skinnormal_vertex:$M,specularmap_fragment:YM,specularmap_pars_fragment:jM,tonemapping_fragment:ZM,tonemapping_pars_fragment:JM,transmission_fragment:KM,transmission_pars_fragment:QM,uv_pars_fragment:ew,uv_pars_vertex:tw,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:ow,backgroundCube_frag:aw,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:hw,distanceRGBA_vert:dw,distanceRGBA_frag:fw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:gw,linedashed_frag:_w,meshbasic_vert:vw,meshbasic_frag:yw,meshlambert_vert:xw,meshlambert_frag:Sw,meshmatcap_vert:bw,meshmatcap_frag:Mw,meshnormal_vert:ww,meshnormal_frag:Ew,meshphong_vert:Tw,meshphong_frag:Aw,meshphysical_vert:Cw,meshphysical_frag:Rw,meshtoon_vert:Pw,meshtoon_frag:Lw,points_vert:Dw,points_frag:Iw,shadow_vert:Ow,shadow_frag:Nw,sprite_vert:Uw,sprite_frag:Fw},De={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ri={basic:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:bn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:bn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:bn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:bn([De.points,De.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:bn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:bn([De.common,De.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:bn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:bn([De.sprite,De.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:bn([De.common,De.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:bn([De.lights,De.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ri.physical={uniforms:bn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Bl={r:0,b:0,g:0},jr=new Hi,kw=new Dt;function Bw(r,e,t,n,i,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function p(y){let v=!1;const E=_(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===kc)?(u===void 0&&(u=new di(new Ka(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Uo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jr.copy(v.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(jr)),u.material.toneMapped=mt.getTransfer(E.colorSpace)!==xt,(h!==E||d!==E.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new di(new Qa(2,2),new ar({name:"BackgroundMaterial",uniforms:Uo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(E.colorSpace)!==xt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(Bl,F_(r)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:p,addToRenderList:g,dispose:x}}function zw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,N,F,G,V){let Y=!1;const X=h(G,F,N);s!==X&&(s=X,c(s.object)),Y=f(S,G,F,V),Y&&_(S,G,F,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(S,N,F,G),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,N,F){const G=F.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let Y=V[N.id];Y===void 0&&(Y={},V[N.id]=Y);let X=Y[G];return X===void 0&&(X=d(l()),Y[G]=X),X}function d(S){const N=[],F=[],G=[];for(let V=0;V<t;V++)N[V]=0,F[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:G,object:S,attributes:{},index:null}}function f(S,N,F,G){const V=s.attributes,Y=N.attributes;let X=0;const q=F.getAttributes();for(const B in q)if(q[B].location>=0){const I=V[B];let ce=Y[B];if(ce===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),I===void 0||I.attribute!==ce||ce&&I.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==G}function _(S,N,F,G){const V={},Y=N.attributes;let X=0;const q=F.getAttributes();for(const B in q)if(q[B].location>=0){let I=Y[B];I===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));const ce={};ce.attribute=I,I&&I.data&&(ce.data=I.data),V[B]=ce,X++}s.attributes=V,s.attributesNum=X,s.index=G}function p(){const S=s.newAttributes;for(let N=0,F=S.length;N<F;N++)S[N]=0}function g(S){m(S,0)}function m(S,N){const F=s.newAttributes,G=s.enabledAttributes,V=s.attributeDivisors;F[S]=1,G[S]===0&&(r.enableVertexAttribArray(S),G[S]=1),V[S]!==N&&(r.vertexAttribDivisor(S,N),V[S]=N)}function x(){const S=s.newAttributes,N=s.enabledAttributes;for(let F=0,G=N.length;F<G;F++)N[F]!==S[F]&&(r.disableVertexAttribArray(F),N[F]=0)}function y(S,N,F,G,V,Y,X){X===!0?r.vertexAttribIPointer(S,N,F,V,Y):r.vertexAttribPointer(S,N,F,G,V,Y)}function v(S,N,F,G){p();const V=G.attributes,Y=F.getAttributes(),X=N.defaultAttributeValues;for(const q in Y){const B=Y[q];if(B.location>=0){let ne=V[q];if(ne===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const I=ne.normalized,ce=ne.itemSize,ye=e.get(ne);if(ye===void 0)continue;const we=ye.buffer,U=ye.type,O=ye.bytesPerElement,L=U===r.INT||U===r.UNSIGNED_INT||ne.gpuType===Kd;if(ne.isInterleavedBufferAttribute){const R=ne.data,Q=R.stride,de=ne.offset;if(R.isInstancedInterleavedBuffer){for(let $=0;$<B.locationSize;$++)m(B.location+$,R.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let $=0;$<B.locationSize;$++)g(B.location+$);r.bindBuffer(r.ARRAY_BUFFER,we);for(let $=0;$<B.locationSize;$++)y(B.location+$,ce/B.locationSize,U,I,Q*O,(de+ce/B.locationSize*$)*O,L)}else{if(ne.isInstancedBufferAttribute){for(let R=0;R<B.locationSize;R++)m(B.location+R,ne.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let R=0;R<B.locationSize;R++)g(B.location+R);r.bindBuffer(r.ARRAY_BUFFER,we);for(let R=0;R<B.locationSize;R++)y(B.location+R,ce/B.locationSize,U,I,ce*O,ce/B.locationSize*R*O,L)}}else if(X!==void 0){const I=X[q];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(B.location,I);break;case 3:r.vertexAttrib3fv(B.location,I);break;case 4:r.vertexAttrib4fv(B.location,I);break;default:r.vertexAttrib1fv(B.location,I)}}}}x()}function E(){A();for(const S in n){const N=n[S];for(const F in N){const G=N[F];for(const V in G)u(G[V].object),delete G[V];delete N[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const F in N){const G=N[F];for(const V in G)u(G[V].object),delete G[V];delete N[F]}delete n[S.id]}function M(S){for(const N in n){const F=n[N];if(F[S.id]===void 0)continue;const G=F[S.id];for(const V in G)u(G[V].object),delete G[V];delete F[S.id]}}function A(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:p,enableAttribute:g,disableUnusedAttributes:x}}function Hw(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let p=0;p<h;p++)_+=u[p]*d[p];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vw(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Si&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const A=M===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==or&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==er&&!A)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function Gw(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ns,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(_,d,y,f);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const p=h!==null?h.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const m=f+p*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=f;y!==p;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function Ww(r){let e=new WeakMap;function t(o,a){return a===Th?o.mapping=Lo:a===Ah&&(o.mapping=Do),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Th||a===Ah)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z_(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const lo=4,Xp=[.125,.215,.35,.446,.526,.582],ss=20,Nu=new df,qp=new qe;let Uu=null,Fu=0,ku=0,Bu=!1;const is=(1+Math.sqrt(5))/2,Js=1/is,$p=[new K(-is,Js,0),new K(is,Js,0),new K(-Js,0,is),new K(Js,0,is),new K(0,is,-Js),new K(0,is,Js),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Xw=new K;class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Xw}=s;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uu,Fu,ku),this._renderer.xr.enabled=Bu,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Fo,format:Si,colorSpace:No,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(s)),this._blurMaterial=$w(s,e,t)}return i}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,Nu)}_sceneToCubeUV(e,t,n,i,s){const l=new jn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(qp),h.toneMapping=Dr,h.autoClear=!1;const _=new O_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),p=new di(new Ka,_);let g=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,g=!0):(_.color.copy(qp),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const v=this._cubeSize;zl(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Lo||e.mapping===Do;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$p[(i-s-1)%$p.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new di(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ss-1),p=s/_,g=isFinite(s)?1+Math.floor(u*p):ss;g>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const m=[];let x=0;for(let M=0;M<ss;++M){const A=M/p,b=Math.exp(-A*A/2);m.push(b),M===0?x+=b:M<g&&(x+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-lo?i-y+lo:0),w=4*(this._cubeSize-v);zl(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Nu)}}function qw(r){const e=[],t=[],n=[];let i=r;const s=r-lo+1+Xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-lo?l=Xp[o-r+lo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,p=3,g=2,m=1,x=new Float32Array(p*_*f),y=new Float32Array(g*_*f),v=new Float32Array(m*_*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,A=w>2?0:-1,b=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(b,p*_*w),y.set(d,g*_*w);const S=[w,w,w,w,w,w];v.set(S,m*_*w)}const E=new lr;E.setAttribute("position",new ki(x,p)),E.setAttribute("uv",new ki(y,g)),E.setAttribute("faceIndex",new ki(v,m)),e.push(E),i>lo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jp(r,e,t){const n=new Ts(r,e,t);return n.texture.mapping=kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $w(r,e,t){const n=new Float32Array(ss),i=new K(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Zp(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Jp(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function ff(){return`

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
	`}function Yw(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Th||l===Ah,u=l===Lo||l===Do;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Yp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Yp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jw(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zw(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let p=0;if(f!==null){const x=f.array;p=f.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],w=x[y+1],M=x[y+2];d.push(E,w,w,M,M,E)}}else if(_!==void 0){const x=_.array;p=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,w=y+1,M=y+2;d.push(E,w,w,M,M,E)}}else return;const g=new(P_(d)?U_:N_)(d,1);g.version=p;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jw(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let g=0;for(let m=0;m<_;m++)g+=f[m];t.update(g,n,1)}function h(d,f,_,p){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],p[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,p,0,_);let m=0;for(let x=0;x<_;x++)m+=f[x]*p[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qw(r,e,t){const n=new WeakMap,i=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),p===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*w*4*h),A=new L_(M,E,w,h);A.type=er,A.needsUpdate=!0;const b=v*4;for(let N=0;N<h;N++){const F=m[N],G=x[N],V=y[N],Y=E*w*4*N;for(let X=0;X<F.count;X++){const q=X*b;_===!0&&(i.fromBufferAttribute(F,X),M[Y+q+0]=i.x,M[Y+q+1]=i.y,M[Y+q+2]=i.z,M[Y+q+3]=0),p===!0&&(i.fromBufferAttribute(G,X),M[Y+q+4]=i.x,M[Y+q+5]=i.y,M[Y+q+6]=i.z,M[Y+q+7]=0),g===!0&&(i.fromBufferAttribute(V,X),M[Y+q+8]=i.x,M[Y+q+9]=i.y,M[Y+q+10]=i.z,M[Y+q+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new ve(E,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const p=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function eE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const K_=new Bn,Kp=new V_(1,1),Q_=new L_,e0=new Vx,t0=new af,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function zo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qp[i];if(s===void 0&&(s=new Float32Array(i),Qp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zc(r,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function iE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function rE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function sE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;im.set(n),r.uniformMatrix2fv(this.addr,!1,im),Qt(t,n)}}function oE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;nm.set(n),r.uniformMatrix3fv(this.addr,!1,nm),Qt(t,n)}}function aE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;tm.set(n),r.uniformMatrix4fv(this.addr,!1,tm),Qt(t,n)}}function lE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function uE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function hE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function dE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function pE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function gE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Kp.compareFunction=R_,s=Kp):s=K_,t.setTexture2D(e||s,i)}function _E(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||e0,i)}function vE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||t0,i)}function yE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Q_,i)}function xE(r){switch(r){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return fE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return yE}}function SE(r,e){r.uniform1fv(this.addr,e)}function bE(r,e){const t=zo(e,this.size,2);r.uniform2fv(this.addr,t)}function ME(r,e){const t=zo(e,this.size,3);r.uniform3fv(this.addr,t)}function wE(r,e){const t=zo(e,this.size,4);r.uniform4fv(this.addr,t)}function EE(r,e){const t=zo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function TE(r,e){const t=zo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AE(r,e){const t=zo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CE(r,e){r.uniform1iv(this.addr,e)}function RE(r,e){r.uniform2iv(this.addr,e)}function PE(r,e){r.uniform3iv(this.addr,e)}function LE(r,e){r.uniform4iv(this.addr,e)}function DE(r,e){r.uniform1uiv(this.addr,e)}function IE(r,e){r.uniform2uiv(this.addr,e)}function OE(r,e){r.uniform3uiv(this.addr,e)}function NE(r,e){r.uniform4uiv(this.addr,e)}function UE(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||K_,s[o])}function FE(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||e0,s[o])}function kE(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||t0,s[o])}function BE(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Q_,s[o])}function zE(r){switch(r){case 5126:return SE;case 35664:return bE;case 35665:return ME;case 35666:return wE;case 35674:return EE;case 35675:return TE;case 35676:return AE;case 5124:case 35670:return CE;case 35667:case 35671:return RE;case 35668:case 35672:return PE;case 35669:case 35673:return LE;case 5125:return DE;case 36294:return IE;case 36295:return OE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return BE}}class HE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}}class VE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zE(t.type)}}class GE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function rm(r,e){r.seq.push(e),r.map[e.id]=e}function WE(r,e,t){const n=r.name,i=n.length;for(zu.lastIndex=0;;){const s=zu.exec(n),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rm(t,c===void 0?new HE(a,r,e):new VE(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new GE(a),rm(t,h)),t=h}}}class oc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);WE(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const XE=37297;let qE=0;function $E(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const om=new Qe;function YE(r){mt._getMatrix(om,mt.workingColorSpace,r);const e=`mat3( ${om.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(r)){case bc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function am(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+$E(r.getShaderSource(e),o)}else return i}function jE(r,e){const t=YE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ZE(r,e){let t;switch(e){case px:t="Linear";break;case mx:t="Reinhard";break;case gx:t="Cineon";break;case _x:t="ACESFilmic";break;case yx:t="AgX";break;case xx:t="Neutral";break;case vx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new K;function JE(){mt.getLuminanceCoefficients(Hl);const r=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function QE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e1(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ua(r){return r!==""}function lm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t1=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(r){return r.replace(t1,i1)}const n1=new Map;function i1(r,e){let t=st[e];if(t===void 0){const n=n1.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(r){return r.replace(r1,s1)}function s1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function o1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===m_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===$y?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function a1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function c1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case dx:e="ENVMAP_BLENDING_MIX";break;case fx:e="ENVMAP_BLENDING_ADD";break}return e}function u1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=o1(t),c=a1(t),u=l1(t),h=c1(t),d=u1(t),f=KE(t),_=QE(s),p=i.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ua).join(`
`),m.length>0&&(m+=`
`)):(g=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),m=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?st.tonemapping_pars_fragment:"",t.toneMapping!==Dr?ZE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,jE("linearToOutputTexel",t.outputColorSpace),JE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=od(o),o=lm(o,t),o=cm(o,t),a=od(a),a=lm(a,t),a=cm(a,t),o=um(o),a=um(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=sm(i,i.VERTEX_SHADER,y),w=sm(i,i.FRAGMENT_SHADER,v);i.attachShader(p,E),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function M(N){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(p).trim(),G=i.getShaderInfoLog(E).trim(),V=i.getShaderInfoLog(w).trim();let Y=!0,X=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,E,w);else{const q=am(i,E,"vertex"),B=am(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+q+`
`+B)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(G===""||V==="")&&(X=!1);X&&(N.diagnostics={runnable:Y,programLog:F,vertexShader:{log:G,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(E),i.deleteShader(w),A=new oc(i,p),b=e1(i,p)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(p,XE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=w,this}let d1=0;class f1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p1(e),t.set(e,n)),n}}class p1{constructor(e){this.id=d1++,this.code=e,this.usedTimes=0}}function m1(r,e,t,n,i,s,o){const a=new D_,l=new f1,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,N,F,G){const V=F.fog,Y=G.geometry,X=b.isMeshStandardMaterial?F.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),B=q&&q.mapping===kc?q.image.height:null,ne=_[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=I!==void 0?I.length:0;let ye=0;Y.morphAttributes.position!==void 0&&(ye=1),Y.morphAttributes.normal!==void 0&&(ye=2),Y.morphAttributes.color!==void 0&&(ye=3);let we,U,O,L;if(ne){const Ie=Ri[ne];we=Ie.vertexShader,U=Ie.fragmentShader}else we=b.vertexShader,U=b.fragmentShader,l.update(b),O=l.getVertexShaderID(b),L=l.getFragmentShaderID(b);const R=r.getRenderTarget(),Q=r.state.buffers.depth.getReversed(),de=G.isInstancedMesh===!0,$=G.isBatchedMesh===!0,me=!!b.map,ee=!!b.matcap,j=!!q,T=!!b.aoMap,se=!!b.lightMap,ie=!!b.bumpMap,z=!!b.normalMap,H=!!b.displacementMap,k=!!b.emissiveMap,he=!!b.metalnessMap,D=!!b.roughnessMap,C=b.anisotropy>0,te=b.clearcoat>0,le=b.dispersion>0,fe=b.iridescence>0,pe=b.sheen>0,Ee=b.transmission>0,be=C&&!!b.anisotropyMap,Te=te&&!!b.clearcoatMap,$e=te&&!!b.clearcoatNormalMap,Se=te&&!!b.clearcoatRoughnessMap,Me=fe&&!!b.iridescenceMap,Xe=fe&&!!b.iridescenceThicknessMap,ze=pe&&!!b.sheenColorMap,Oe=pe&&!!b.sheenRoughnessMap,it=!!b.specularMap,Ze=!!b.specularColorMap,dt=!!b.specularIntensityMap,W=Ee&&!!b.transmissionMap,Ce=Ee&&!!b.thicknessMap,ue=!!b.gradientMap,ge=!!b.alphaMap,Ae=b.alphaTest>0,Re=!!b.alphaHash,Je=!!b.extensions;let ft=Dr;b.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=r.toneMapping);const Ut={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:U,defines:b.defines,customVertexShaderID:O,customFragmentShaderID:L,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:$,batchingColor:$&&G._colorsTexture!==null,instancing:de,instancingColor:de&&G.instanceColor!==null,instancingMorph:de&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:R===null?r.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:No,alphaToCoverage:!!b.alphaToCoverage,map:me,matcap:ee,envMap:j,envMapMode:j&&q.mapping,envMapCubeUVHeight:B,aoMap:T,lightMap:se,bumpMap:ie,normalMap:z,displacementMap:d&&H,emissiveMap:k,normalMapObjectSpace:z&&b.normalMapType===wx,normalMapTangentSpace:z&&b.normalMapType===C_,metalnessMap:he,roughnessMap:D,anisotropy:C,anisotropyMap:be,clearcoat:te,clearcoatMap:Te,clearcoatNormalMap:$e,clearcoatRoughnessMap:Se,dispersion:le,iridescence:fe,iridescenceMap:Me,iridescenceThicknessMap:Xe,sheen:pe,sheenColorMap:ze,sheenRoughnessMap:Oe,specularMap:it,specularColorMap:Ze,specularIntensityMap:dt,transmission:Ee,transmissionMap:W,thicknessMap:Ce,gradientMap:ue,opaque:b.transparent===!1&&b.blending===vo&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ae,alphaHash:Re,combine:b.combine,mapUv:me&&p(b.map.channel),aoMapUv:T&&p(b.aoMap.channel),lightMapUv:se&&p(b.lightMap.channel),bumpMapUv:ie&&p(b.bumpMap.channel),normalMapUv:z&&p(b.normalMap.channel),displacementMapUv:H&&p(b.displacementMap.channel),emissiveMapUv:k&&p(b.emissiveMap.channel),metalnessMapUv:he&&p(b.metalnessMap.channel),roughnessMapUv:D&&p(b.roughnessMap.channel),anisotropyMapUv:be&&p(b.anisotropyMap.channel),clearcoatMapUv:Te&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:$e&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(b.sheenRoughnessMap.channel),specularMapUv:it&&p(b.specularMap.channel),specularColorMapUv:Ze&&p(b.specularColorMap.channel),specularIntensityMapUv:dt&&p(b.specularIntensityMap.channel),transmissionMapUv:W&&p(b.transmissionMap.channel),thicknessMapUv:Ce&&p(b.thicknessMap.channel),alphaMapUv:ge&&p(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(z||C),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(me||ge),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Q,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:me&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:k&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&b.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=_[b.type];let N;if(S){const F=Ri[S];N=nS.clone(F.uniforms)}else N=b.uniforms;return N}function E(b,S){let N;for(let F=0,G=u.length;F<G;F++){const V=u[F];if(V.cacheKey===S){N=V,++N.usedTimes;break}}return N===void 0&&(N=new h1(r,S,b,s),u.push(N)),N}function w(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function M(b){l.remove(b)}function A(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:A}}function g1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function _1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,p,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:p,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=p,m.group=g),e++,m}function a(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,_,p,g){const m=o(h,d,f,_,p,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||_1),n.length>1&&n.sort(d||dm),i.length>1&&i.sort(d||dm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function v1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new fm,r.set(n,[o])):i>=s.length?(o=new fm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function y1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new qe};break;case"SpotLight":t={position:new K,direction:new K,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function x1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S1=0;function b1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function M1(r){const e=new y1,t=x1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Dt,o=new Dt;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,_=0,p=0,g=0,m=0,x=0,y=0,v=0,E=0,w=0,M=0;c.sort(b1);for(let b=0,S=c.length;b<S;b++){const N=c[b],F=N.color,G=N.intensity,V=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=F.r*G,h+=F.g*G,d+=F.b*G;else if(N.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(N.sh.coefficients[X],G);M++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const q=N.shadow,B=t.get(N);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=N.shadow.matrix,x++}n.directional[f]=X,f++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(F).multiplyScalar(G),X.distance=V,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,n.spot[p]=X;const q=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,q.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[p]=q.matrix,N.castShadow){const B=t.get(N);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=Y,v++}p++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=X,g++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const q=N.shadow,B=t.get(N);B.shadowIntensity=q.intensity,B.shadowBias=q.bias,B.shadowNormalBias=q.normalBias,B.shadowRadius=q.radius,B.shadowMapSize=q.mapSize,B.shadowCameraNear=q.camera.near,B.shadowCameraFar=q.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=N.shadow.matrix,y++}n.point[_]=X,_++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(G),X.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[m]=X,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==p||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==E||A.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=M,A.directionalLength=f,A.pointLength=_,A.spotLength=p,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=E,A.numLightProbes=M,n.version=S1++)}function l(c,u){let h=0,d=0,f=0,_=0,p=0;const g=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function pm(r){const e=new M1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function w1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new pm(r),e.set(i,[a])):s>=o.length?(a=new pm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const E1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
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
}`;function A1(r,e,t){let n=new lf;const i=new ve,s=new ve,o=new St,a=new VS({depthPacking:Mx}),l=new GS,c={},u=t.maxTextureSize,h={[Ur]:kn,[kn]:Ur,[Li]:Li},d=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:E1,fragmentShader:T1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new lr;_.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new di(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m_;let m=this.type;this.render=function(w,M,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Lr),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=m!==ji&&this.type===ji,V=m===ji&&this.type!==ji;for(let Y=0,X=w.length;Y<X;Y++){const q=w[Y],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const ne=B.getFrameExtents();if(i.multiply(ne),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,B.mapSize.y=s.y)),B.map===null||G===!0||V===!0){const ce=this.type!==ji?{minFilter:bi,magFilter:bi}:{};B.map!==null&&B.map.dispose(),B.map=new Ts(i.x,i.y,ce),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const I=B.getViewportCount();for(let ce=0;ce<I;ce++){const ye=B.getViewport(ce);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),F.viewport(o),B.updateMatrices(q,ce),n=B.getFrustum(),v(M,A,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===ji&&x(B,A),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,S,N)};function x(w,M){const A=e.update(p);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ts(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,A,d,p,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,A,f,p,null)}function y(w,M,A,b){let S=null;const N=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=S.uuid,G=M.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let Y=V[G];Y===void 0&&(Y=S.clone(),V[G]=Y,M.addEventListener("dispose",E)),S=Y}if(S.visible=M.visible,S.wireframe=M.wireframe,b===ji?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:h[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=A}return S}function v(w,M,A,b,S){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ji)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const G=e.update(w),V=w.material;if(Array.isArray(V)){const Y=G.groups;for(let X=0,q=Y.length;X<q;X++){const B=Y[X],ne=V[B.materialIndex];if(ne&&ne.visible){const I=y(w,ne,b,S);w.onBeforeShadow(r,w,M,A,G,I,B),r.renderBufferDirect(A,null,G,I,w,B),w.onAfterShadow(r,w,M,A,G,I,B)}}}else if(V.visible){const Y=y(w,V,b,S);w.onBeforeShadow(r,w,M,A,G,Y,null),r.renderBufferDirect(A,null,G,Y,w,null),w.onAfterShadow(r,w,M,A,G,Y,null)}}const F=w.children;for(let G=0,V=F.length;G<V;G++)v(F[G],M,A,b,S)}function E(w){w.target.removeEventListener("dispose",E);for(const A in c){const b=c[A],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const C1={[yh]:xh,[Sh]:wh,[bh]:Eh,[Po]:Mh,[xh]:yh,[wh]:Sh,[Eh]:bh,[Mh]:Po};function R1(r,e){function t(){let W=!1;const Ce=new St;let ue=null;const ge=new St(0,0,0,0);return{setMask:function(Ae){ue!==Ae&&!W&&(r.colorMask(Ae,Ae,Ae,Ae),ue=Ae)},setLocked:function(Ae){W=Ae},setClear:function(Ae,Re,Je,ft,Ut){Ut===!0&&(Ae*=ft,Re*=ft,Je*=ft),Ce.set(Ae,Re,Je,ft),ge.equals(Ce)===!1&&(r.clearColor(Ae,Re,Je,ft),ge.copy(Ce))},reset:function(){W=!1,ue=null,ge.set(-1,0,0,0)}}}function n(){let W=!1,Ce=!1,ue=null,ge=null,Ae=null;return{setReversed:function(Re){if(Ce!==Re){const Je=e.get("EXT_clip_control");Ce?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const ft=Ae;Ae=null,this.setClear(ft)}Ce=Re},getReversed:function(){return Ce},setTest:function(Re){Re?R(r.DEPTH_TEST):Q(r.DEPTH_TEST)},setMask:function(Re){ue!==Re&&!W&&(r.depthMask(Re),ue=Re)},setFunc:function(Re){if(Ce&&(Re=C1[Re]),ge!==Re){switch(Re){case yh:r.depthFunc(r.NEVER);break;case xh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Po:r.depthFunc(r.LEQUAL);break;case bh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Ae!==Re&&(Ce&&(Re=1-Re),r.clearDepth(Re),Ae=Re)},reset:function(){W=!1,ue=null,ge=null,Ae=null,Ce=!1}}}function i(){let W=!1,Ce=null,ue=null,ge=null,Ae=null,Re=null,Je=null,ft=null,Ut=null;return{setTest:function(Ie){W||(Ie?R(r.STENCIL_TEST):Q(r.STENCIL_TEST))},setMask:function(Ie){Ce!==Ie&&!W&&(r.stencilMask(Ie),Ce=Ie)},setFunc:function(Ie,ke,rt){(ue!==Ie||ge!==ke||Ae!==rt)&&(r.stencilFunc(Ie,ke,rt),ue=Ie,ge=ke,Ae=rt)},setOp:function(Ie,ke,rt){(Re!==Ie||Je!==ke||ft!==rt)&&(r.stencilOp(Ie,ke,rt),Re=Ie,Je=ke,ft=rt)},setLocked:function(Ie){W=Ie},setClear:function(Ie){Ut!==Ie&&(r.clearStencil(Ie),Ut=Ie)},reset:function(){W=!1,Ce=null,ue=null,ge=null,Ae=null,Re=null,Je=null,ft=null,Ut=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,w=null,M=new qe(0,0,0),A=0,b=!1,S=null,N=null,F=null,G=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=q>=1):B.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=q>=2);let ne=null,I={};const ce=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),we=new St().fromArray(ce),U=new St().fromArray(ye);function O(W,Ce,ue,ge){const Ae=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<ue;Je++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(Ce+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Re}const L={};L[r.TEXTURE_2D]=O(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=O(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[r.TEXTURE_2D_ARRAY]=O(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=O(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),R(r.DEPTH_TEST),o.setFunc(Po),ie(!1),z(up),R(r.CULL_FACE),T(Lr);function R(W){u[W]!==!0&&(r.enable(W),u[W]=!0)}function Q(W){u[W]!==!1&&(r.disable(W),u[W]=!1)}function de(W,Ce){return h[W]!==Ce?(r.bindFramebuffer(W,Ce),h[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function $(W,Ce){let ue=f,ge=!1;if(W){ue=d.get(Ce),ue===void 0&&(ue=[],d.set(Ce,ue));const Ae=W.textures;if(ue.length!==Ae.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Je=Ae.length;Re<Je;Re++)ue[Re]=r.COLOR_ATTACHMENT0+Re;ue.length=Ae.length,ge=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ue)}function me(W){return _!==W?(r.useProgram(W),_=W,!0):!1}const ee={[rs]:r.FUNC_ADD,[jy]:r.FUNC_SUBTRACT,[Zy]:r.FUNC_REVERSE_SUBTRACT};ee[Jy]=r.MIN,ee[Ky]=r.MAX;const j={[Qy]:r.ZERO,[ex]:r.ONE,[tx]:r.SRC_COLOR,[_h]:r.SRC_ALPHA,[ax]:r.SRC_ALPHA_SATURATE,[sx]:r.DST_COLOR,[ix]:r.DST_ALPHA,[nx]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[ox]:r.ONE_MINUS_DST_COLOR,[rx]:r.ONE_MINUS_DST_ALPHA,[lx]:r.CONSTANT_COLOR,[cx]:r.ONE_MINUS_CONSTANT_COLOR,[ux]:r.CONSTANT_ALPHA,[hx]:r.ONE_MINUS_CONSTANT_ALPHA};function T(W,Ce,ue,ge,Ae,Re,Je,ft,Ut,Ie){if(W===Lr){p===!0&&(Q(r.BLEND),p=!1);return}if(p===!1&&(R(r.BLEND),p=!0),W!==Yy){if(W!==g||Ie!==b){if((m!==rs||v!==rs)&&(r.blendEquation(r.FUNC_ADD),m=rs,v=rs),Ie)switch(W){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hp:r.blendFunc(r.ONE,r.ONE);break;case dp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case dp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,y=null,E=null,w=null,M.set(0,0,0),A=0,g=W,b=Ie}return}Ae=Ae||Ce,Re=Re||ue,Je=Je||ge,(Ce!==m||Ae!==v)&&(r.blendEquationSeparate(ee[Ce],ee[Ae]),m=Ce,v=Ae),(ue!==x||ge!==y||Re!==E||Je!==w)&&(r.blendFuncSeparate(j[ue],j[ge],j[Re],j[Je]),x=ue,y=ge,E=Re,w=Je),(ft.equals(M)===!1||Ut!==A)&&(r.blendColor(ft.r,ft.g,ft.b,Ut),M.copy(ft),A=Ut),g=W,b=!1}function se(W,Ce){W.side===Li?Q(r.CULL_FACE):R(r.CULL_FACE);let ue=W.side===kn;Ce&&(ue=!ue),ie(ue),W.blending===vo&&W.transparent===!1?T(Lr):T(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ge=W.stencilWrite;a.setTest(ge),ge&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?R(r.SAMPLE_ALPHA_TO_COVERAGE):Q(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(W){S!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),S=W)}function z(W){W!==Xy?(R(r.CULL_FACE),W!==N&&(W===up?r.cullFace(r.BACK):W===qy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Q(r.CULL_FACE),N=W}function H(W){W!==F&&(X&&r.lineWidth(W),F=W)}function k(W,Ce,ue){W?(R(r.POLYGON_OFFSET_FILL),(G!==Ce||V!==ue)&&(r.polygonOffset(Ce,ue),G=Ce,V=ue)):Q(r.POLYGON_OFFSET_FILL)}function he(W){W?R(r.SCISSOR_TEST):Q(r.SCISSOR_TEST)}function D(W){W===void 0&&(W=r.TEXTURE0+Y-1),ne!==W&&(r.activeTexture(W),ne=W)}function C(W,Ce,ue){ue===void 0&&(ne===null?ue=r.TEXTURE0+Y-1:ue=ne);let ge=I[ue];ge===void 0&&(ge={type:void 0,texture:void 0},I[ue]=ge),(ge.type!==W||ge.texture!==Ce)&&(ne!==ue&&(r.activeTexture(ue),ne=ue),r.bindTexture(W,Ce||L[W]),ge.type=W,ge.texture=Ce)}function te(){const W=I[ne];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function le(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(W){we.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),we.copy(W))}function Oe(W){U.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),U.copy(W))}function it(W,Ce){let ue=c.get(Ce);ue===void 0&&(ue=new WeakMap,c.set(Ce,ue));let ge=ue.get(W);ge===void 0&&(ge=r.getUniformBlockIndex(Ce,W.name),ue.set(W,ge))}function Ze(W,Ce){const ge=c.get(Ce).get(W);l.get(Ce)!==ge&&(r.uniformBlockBinding(Ce,ge,W.__bindingPointIndex),l.set(Ce,ge))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,I={},h={},d=new WeakMap,f=[],_=null,p=!1,g=null,m=null,x=null,y=null,v=null,E=null,w=null,M=new qe(0,0,0),A=0,b=!1,S=null,N=null,F=null,G=null,V=null,we.set(0,0,r.canvas.width,r.canvas.height),U.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:R,disable:Q,bindFramebuffer:de,drawBuffers:$,useProgram:me,setBlending:T,setMaterial:se,setFlipSided:ie,setCullFace:z,setLineWidth:H,setPolygonOffset:k,setScissorTest:he,activeTexture:D,bindTexture:C,unbindTexture:te,compressedTexImage2D:le,compressedTexImage3D:fe,texImage2D:Me,texImage3D:Xe,updateUBOMapping:it,uniformBlockBinding:Ze,texStorage2D:$e,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:be,compressedTexSubImage3D:Te,scissor:ze,viewport:Oe,reset:dt}}function P1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,C){return f?new OffscreenCanvas(D,C):za("canvas")}function p(D,C,te){let le=1;const fe=he(D);if((fe.width>te||fe.height>te)&&(le=te/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(le*fe.width),Ee=Math.floor(le*fe.height);h===void 0&&(h=_(pe,Ee));const be=C?_(pe,Ee):h;return be.width=pe,be.height=Ee,be.getContext("2d").drawImage(D,0,0,pe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+pe+"x"+Ee+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){r.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(D,C,te,le,fe=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=C;if(C===r.RED&&(te===r.FLOAT&&(pe=r.R32F),te===r.HALF_FLOAT&&(pe=r.R16F),te===r.UNSIGNED_BYTE&&(pe=r.R8)),C===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.R8UI),te===r.UNSIGNED_SHORT&&(pe=r.R16UI),te===r.UNSIGNED_INT&&(pe=r.R32UI),te===r.BYTE&&(pe=r.R8I),te===r.SHORT&&(pe=r.R16I),te===r.INT&&(pe=r.R32I)),C===r.RG&&(te===r.FLOAT&&(pe=r.RG32F),te===r.HALF_FLOAT&&(pe=r.RG16F),te===r.UNSIGNED_BYTE&&(pe=r.RG8)),C===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RG8UI),te===r.UNSIGNED_SHORT&&(pe=r.RG16UI),te===r.UNSIGNED_INT&&(pe=r.RG32UI),te===r.BYTE&&(pe=r.RG8I),te===r.SHORT&&(pe=r.RG16I),te===r.INT&&(pe=r.RG32I)),C===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),te===r.UNSIGNED_INT&&(pe=r.RGB32UI),te===r.BYTE&&(pe=r.RGB8I),te===r.SHORT&&(pe=r.RGB16I),te===r.INT&&(pe=r.RGB32I)),C===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),te===r.UNSIGNED_INT&&(pe=r.RGBA32UI),te===r.BYTE&&(pe=r.RGBA8I),te===r.SHORT&&(pe=r.RGBA16I),te===r.INT&&(pe=r.RGBA32I)),C===r.RGB&&te===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),C===r.RGBA){const Ee=fe?bc:mt.getTransfer(le);te===r.FLOAT&&(pe=r.RGBA32F),te===r.HALF_FLOAT&&(pe=r.RGBA16F),te===r.UNSIGNED_BYTE&&(pe=Ee===xt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(D,C){let te;return D?C===null||C===Es||C===Io?te=r.DEPTH24_STENCIL8:C===er?te=r.DEPTH32F_STENCIL8:C===Ba&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Es||C===Io?te=r.DEPTH_COMPONENT24:C===er?te=r.DEPTH_COMPONENT32F:C===Ba&&(te=r.DEPTH_COMPONENT16),te}function E(D,C){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==bi&&D.minFilter!==Oi?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function w(D){const C=D.target;C.removeEventListener("dispose",w),A(C),C.isVideoTexture&&u.delete(C)}function M(D){const C=D.target;C.removeEventListener("dispose",M),S(C)}function A(D){const C=n.get(D);if(C.__webglInit===void 0)return;const te=D.source,le=d.get(te);if(le){const fe=le[C.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&b(D),Object.keys(le).length===0&&d.delete(te)}n.remove(D)}function b(D){const C=n.get(D);r.deleteTexture(C.__webglTexture);const te=D.source,le=d.get(te);delete le[C.__cacheKey],o.memory.textures--}function S(D){const C=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(C.__webglFramebuffer[le]))for(let fe=0;fe<C.__webglFramebuffer[le].length;fe++)r.deleteFramebuffer(C.__webglFramebuffer[le][fe]);else r.deleteFramebuffer(C.__webglFramebuffer[le]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[le])}else{if(Array.isArray(C.__webglFramebuffer))for(let le=0;le<C.__webglFramebuffer.length;le++)r.deleteFramebuffer(C.__webglFramebuffer[le]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let le=0;le<C.__webglColorRenderbuffer.length;le++)C.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[le]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const te=D.textures;for(let le=0,fe=te.length;le<fe;le++){const pe=n.get(te[le]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(te[le])}n.remove(D)}let N=0;function F(){N=0}function G(){const D=N;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),N+=1,D}function V(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function Y(D,C){const te=n.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(te,D,C);return}}t.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+C)}function X(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){U(te,D,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+C)}function q(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){U(te,D,C);return}t.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+C)}function B(D,C){const te=n.get(D);if(D.version>0&&te.__version!==D.version){O(te,D,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+C)}const ne={[Ch]:r.REPEAT,[ls]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},I={[bi]:r.NEAREST,[Sx]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[ou]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},ce={[Ex]:r.NEVER,[Lx]:r.ALWAYS,[Tx]:r.LESS,[R_]:r.LEQUAL,[Ax]:r.EQUAL,[Px]:r.GEQUAL,[Cx]:r.GREATER,[Rx]:r.NOTEQUAL};function ye(D,C){if(C.type===er&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Oi||C.magFilter===ou||C.magFilter===vl||C.magFilter===Ar||C.minFilter===Oi||C.minFilter===ou||C.minFilter===vl||C.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ne[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ne[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ne[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,I[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,I[C.minFilter]),C.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ce[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===bi||C.minFilter!==vl&&C.minFilter!==Ar||C.type===er&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function we(D,C){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",w));const le=C.source;let fe=d.get(le);fe===void 0&&(fe={},d.set(le,fe));const pe=V(C);if(pe!==D.__cacheKey){fe[pe]===void 0&&(fe[pe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,te=!0),fe[pe].usedTimes++;const Ee=fe[D.__cacheKey];Ee!==void 0&&(fe[D.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(C)),D.__cacheKey=pe,D.__webglTexture=fe[pe].texture}return te}function U(D,C,te){let le=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(le=r.TEXTURE_3D);const fe=we(D,C),pe=C.source;t.bindTexture(le,D.__webglTexture,r.TEXTURE0+te);const Ee=n.get(pe);if(pe.version!==Ee.__version||fe===!0){t.activeTexture(r.TEXTURE0+te);const be=mt.getPrimaries(mt.workingColorSpace),Te=C.colorSpace===yr?null:mt.getPrimaries(C.colorSpace),$e=C.colorSpace===yr||be===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Se=p(C.image,!1,i.maxTextureSize);Se=k(C,Se);const Me=s.convert(C.format,C.colorSpace),Xe=s.convert(C.type);let ze=y(C.internalFormat,Me,Xe,C.colorSpace,C.isVideoTexture);ye(le,C);let Oe;const it=C.mipmaps,Ze=C.isVideoTexture!==!0,dt=Ee.__version===void 0||fe===!0,W=pe.dataReady,Ce=E(C,Se);if(C.isDepthTexture)ze=v(C.format===Oo,C.type),dt&&(Ze?t.texStorage2D(r.TEXTURE_2D,1,ze,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Me,Xe,null));else if(C.isDataTexture)if(it.length>0){Ze&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Xe,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Me,Xe,Oe.data);C.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,Se.width,Se.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Me,Xe,Se.data)):t.texImage2D(r.TEXTURE_2D,0,ze,Se.width,Se.height,0,Me,Xe,Se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,it[0].width,it[0].height,Se.depth);for(let ue=0,ge=it.length;ue<ge;ue++)if(Oe=it[ue],C.format!==Si)if(Me!==null)if(Ze){if(W)if(C.layerUpdates.size>0){const Ae=Wp(Oe.width,Oe.height,C.format,C.type);for(const Re of C.layerUpdates){const Je=Oe.data.subarray(Re*Ae/Oe.data.BYTES_PER_ELEMENT,(Re+1)*Ae/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Re,Oe.width,Oe.height,1,Me,Je)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Se.depth,Me,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,ze,Oe.width,Oe.height,Se.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,Oe.width,Oe.height,Se.depth,Me,Xe,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,ze,Oe.width,Oe.height,Se.depth,0,Me,Xe,Oe.data)}else{Ze&&dt&&t.texStorage2D(r.TEXTURE_2D,Ce,ze,it[0].width,it[0].height);for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],C.format!==Si?Me!==null?Ze?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe.width,Oe.height,Me,Xe,Oe.data):t.texImage2D(r.TEXTURE_2D,ue,ze,Oe.width,Oe.height,0,Me,Xe,Oe.data)}else if(C.isDataArrayTexture)if(Ze){if(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,Se.width,Se.height,Se.depth),W)if(C.layerUpdates.size>0){const ue=Wp(Se.width,Se.height,C.format,C.type);for(const ge of C.layerUpdates){const Ae=Se.data.subarray(ge*ue/Se.data.BYTES_PER_ELEMENT,(ge+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Me,Xe,Ae)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Me,Xe,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,Se.width,Se.height,Se.depth,0,Me,Xe,Se.data);else if(C.isData3DTexture)Ze?(dt&&t.texStorage3D(r.TEXTURE_3D,Ce,ze,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Me,Xe,Se.data)):t.texImage3D(r.TEXTURE_3D,0,ze,Se.width,Se.height,Se.depth,0,Me,Xe,Se.data);else if(C.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(r.TEXTURE_2D,Ce,ze,Se.width,Se.height);else{let ue=Se.width,ge=Se.height;for(let Ae=0;Ae<Ce;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,ze,ue,ge,0,Me,Xe,null),ue>>=1,ge>>=1}}else if(it.length>0){if(Ze&&dt){const ue=he(it[0]);t.texStorage2D(r.TEXTURE_2D,Ce,ze,ue.width,ue.height)}for(let ue=0,ge=it.length;ue<ge;ue++)Oe=it[ue],Ze?W&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Me,Xe,Oe):t.texImage2D(r.TEXTURE_2D,ue,ze,Me,Xe,Oe);C.generateMipmaps=!1}else if(Ze){if(dt){const ue=he(Se);t.texStorage2D(r.TEXTURE_2D,Ce,ze,ue.width,ue.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Xe,Se)}else t.texImage2D(r.TEXTURE_2D,0,ze,Me,Xe,Se);g(C)&&m(le),Ee.__version=pe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function O(D,C,te){if(C.image.length!==6)return;const le=we(D,C),fe=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+te);const pe=n.get(fe);if(fe.version!==pe.__version||le===!0){t.activeTexture(r.TEXTURE0+te);const Ee=mt.getPrimaries(mt.workingColorSpace),be=C.colorSpace===yr?null:mt.getPrimaries(C.colorSpace),Te=C.colorSpace===yr||Ee===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const $e=C.isCompressedTexture||C.image[0].isCompressedTexture,Se=C.image[0]&&C.image[0].isDataTexture,Me=[];for(let ge=0;ge<6;ge++)!$e&&!Se?Me[ge]=p(C.image[ge],!0,i.maxCubemapSize):Me[ge]=Se?C.image[ge].image:C.image[ge],Me[ge]=k(C,Me[ge]);const Xe=Me[0],ze=s.convert(C.format,C.colorSpace),Oe=s.convert(C.type),it=y(C.internalFormat,ze,Oe,C.colorSpace),Ze=C.isVideoTexture!==!0,dt=pe.__version===void 0||le===!0,W=fe.dataReady;let Ce=E(C,Xe);ye(r.TEXTURE_CUBE_MAP,C);let ue;if($e){Ze&&dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,Xe.width,Xe.height);for(let ge=0;ge<6;ge++){ue=Me[ge].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Re=ue[Ae];C.format!==Si?ze!==null?Ze?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,it,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,0,0,Re.width,Re.height,ze,Oe,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae,it,Re.width,Re.height,0,ze,Oe,Re.data)}}}else{if(ue=C.mipmaps,Ze&&dt){ue.length>0&&Ce++;const ge=he(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,it,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Me[ge].width,Me[ge].height,ze,Oe,Me[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,Me[ge].width,Me[ge].height,0,ze,Oe,Me[ge].data);for(let Ae=0;Ae<ue.length;Ae++){const Je=ue[Ae].image[ge].image;Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,0,0,Je.width,Je.height,ze,Oe,Je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,it,Je.width,Je.height,0,ze,Oe,Je.data)}}else{Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Oe,Me[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,ze,Oe,Me[ge]);for(let Ae=0;Ae<ue.length;Ae++){const Re=ue[Ae];Ze?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,0,0,ze,Oe,Re.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae+1,it,ze,Oe,Re.image[ge])}}}g(C)&&m(r.TEXTURE_CUBE_MAP),pe.__version=fe.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function L(D,C,te,le,fe,pe){const Ee=s.convert(te.format,te.colorSpace),be=s.convert(te.type),Te=y(te.internalFormat,Ee,be,te.colorSpace),$e=n.get(C),Se=n.get(te);if(Se.__renderTarget=C,!$e.__hasExternalTextures){const Me=Math.max(1,C.width>>pe),Xe=Math.max(1,C.height>>pe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,pe,Te,Me,Xe,C.depth,0,Ee,be,null):t.texImage2D(fe,pe,Te,Me,Xe,0,Ee,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,fe,Se.__webglTexture,0,ie(C)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,fe,Se.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function R(D,C,te){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer){const le=C.depthTexture,fe=le&&le.isDepthTexture?le.type:null,pe=v(C.stencilBuffer,fe),Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=ie(C);z(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,pe,C.width,C.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,pe,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,D)}else{const le=C.textures;for(let fe=0;fe<le.length;fe++){const pe=le[fe],Ee=s.convert(pe.format,pe.colorSpace),be=s.convert(pe.type),Te=y(pe.internalFormat,Ee,be,pe.colorSpace),$e=ie(C);te&&z(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Te,C.width,C.height):z(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,Te,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Te,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Q(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(C.depthTexture);le.__renderTarget=C,(!le.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const fe=le.__webglTexture,pe=ie(C);if(C.depthTexture.format===yo)z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(C.depthTexture.format===Oo)z(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function de(D){const C=n.get(D),te=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),le){const fe=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,le.removeEventListener("dispose",fe)};le.addEventListener("dispose",fe),C.__depthDisposeCallback=fe}C.__boundDepthTexture=le}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Q(C.__webglFramebuffer,D)}else if(te){C.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[le]),C.__webglDepthbuffer[le]===void 0)C.__webglDepthbuffer[le]=r.createRenderbuffer(),R(C.__webglDepthbuffer[le],D,!1);else{const fe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=C.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),R(C.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,le,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(D,C,te){const le=n.get(D);C!==void 0&&L(le.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&de(D)}function me(D){const C=D.texture,te=n.get(D),le=n.get(C);D.addEventListener("dispose",M);const fe=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ee=fe.length>1;if(Ee||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=C.version,o.memory.textures++),pe){te.__webglFramebuffer=[];for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer[be]=[];for(let Te=0;Te<C.mipmaps.length;Te++)te.__webglFramebuffer[be][Te]=r.createFramebuffer()}else te.__webglFramebuffer[be]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer=[];for(let be=0;be<C.mipmaps.length;be++)te.__webglFramebuffer[be]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let be=0,Te=fe.length;be<Te;be++){const $e=n.get(fe[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&z(D)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){const Te=fe[be];te.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[be]);const $e=s.convert(Te.format,Te.colorSpace),Se=s.convert(Te.type),Me=y(Te.internalFormat,$e,Se,Te.colorSpace,D.isXRRenderTarget===!0),Xe=ie(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Me,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,te.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),R(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),ye(r.TEXTURE_CUBE_MAP,C);for(let be=0;be<6;be++)if(C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)L(te.__webglFramebuffer[be][Te],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Te);else L(te.__webglFramebuffer[be],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(C)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let be=0,Te=fe.length;be<Te;be++){const $e=fe[be],Se=n.get($e);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ye(r.TEXTURE_2D,$e),L(te.__webglFramebuffer,D,$e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,0),g($e)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),ye(be,C),C.mipmaps&&C.mipmaps.length>0)for(let Te=0;Te<C.mipmaps.length;Te++)L(te.__webglFramebuffer[Te],D,C,r.COLOR_ATTACHMENT0,be,Te);else L(te.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,be,0);g(C)&&m(be),t.unbindTexture()}D.depthBuffer&&de(D)}function ee(D){const C=D.textures;for(let te=0,le=C.length;te<le;te++){const fe=C[te];if(g(fe)){const pe=x(D),Ee=n.get(fe).__webglTexture;t.bindTexture(pe,Ee),m(pe),t.unbindTexture()}}}const j=[],T=[];function se(D){if(D.samples>0){if(z(D)===!1){const C=D.textures,te=D.width,le=D.height;let fe=r.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(D),be=C.length>1;if(be)for(let Te=0;Te<C.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<C.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const $e=n.get(C[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,te,le,0,0,te,le,fe,r.NEAREST),l===!0&&(j.length=0,T.length=0,j.push(r.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(j.push(pe),T.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,T)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Te=0;Te<C.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);const $e=n.get(C[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const C=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function ie(D){return Math.min(i.maxSamples,D.samples)}function z(D){const C=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function H(D){const C=o.render.frame;u.get(D)!==C&&(u.set(D,C),D.update())}function k(D,C){const te=D.colorSpace,le=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==No&&te!==yr&&(mt.getTransfer(te)===xt?(le!==Si||fe!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),C}function he(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=B,this.rebindTextures=$,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=L,this.useMultisampledRTT=z}function L1(r,e){function t(n,i=yr){let s;const o=mt.getTransfer(i);if(n===or)return r.UNSIGNED_BYTE;if(n===Qd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ef)return r.UNSIGNED_SHORT_5_5_5_1;if(n===x_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===v_)return r.BYTE;if(n===y_)return r.SHORT;if(n===Ba)return r.UNSIGNED_SHORT;if(n===Kd)return r.INT;if(n===Es)return r.UNSIGNED_INT;if(n===er)return r.FLOAT;if(n===Fo)return r.HALF_FLOAT;if(n===S_)return r.ALPHA;if(n===b_)return r.RGB;if(n===Si)return r.RGBA;if(n===M_)return r.LUMINANCE;if(n===w_)return r.LUMINANCE_ALPHA;if(n===yo)return r.DEPTH_COMPONENT;if(n===Oo)return r.DEPTH_STENCIL;if(n===E_)return r.RED;if(n===tf)return r.RED_INTEGER;if(n===T_)return r.RG;if(n===nf)return r.RG_INTEGER;if(n===rf)return r.RGBA_INTEGER;if(n===tc||n===nc||n===ic||n===rc)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Lh||n===Dh||n===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oh||n===Nh||n===Uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oh||n===Nh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fh||n===kh||n===Bh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===qh||n===$h||n===Yh||n===jh||n===Zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$h)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===Jh||n===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===A_||n===Qh||n===ed||n===td)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ed)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===td)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
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

}`;class O1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ar({vertexShader:D1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new Qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends ko{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const p=new O1,g=t.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new ve;let w=null;const M=new jn;M.viewport=new St;const A=new jn;A.viewport=new St;const b=[M,A],S=new eb;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=y[U];return O===void 0&&(O=new Cu,y[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=y[U];return O===void 0&&(O=new Cu,y[U]=O),O.getGripSpace()},this.getHand=function(U){let O=y[U];return O===void 0&&(O=new Cu,y[U]=O),O.getHandSpace()};function G(U){const O=v.indexOf(U.inputSource);if(O===-1)return;const L=y[O];L!==void 0&&(L.update(U.inputSource,U.frame,c||o),L.dispatchEvent({type:U.type,data:U.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let U=0;U<y.length;U++){const O=v[U];O!==null&&(v[U]=null,y[U].disconnect(O))}N=null,F=null,p.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,x=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,R=null,Q=null;g.depth&&(Q=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=g.stencil?Oo:yo,R=g.stencil?Io:Es);const de={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ts(d.textureWidth,d.textureHeight,{format:Si,type:or,depthTexture:new V_(d.textureWidth,d.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const L={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,L),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ts(f.framebufferWidth,f.framebufferHeight,{format:Si,type:or,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(U){for(let O=0;O<U.removed.length;O++){const L=U.removed[O],R=v.indexOf(L);R>=0&&(v[R]=null,y[R].disconnect(L))}for(let O=0;O<U.added.length;O++){const L=U.added[O];let R=v.indexOf(L);if(R===-1){for(let de=0;de<y.length;de++)if(de>=v.length){v.push(L),R=de;break}else if(v[de]===null){v[de]=L,R=de;break}if(R===-1)break}const Q=y[R];Q&&Q.connect(L)}}const X=new K,q=new K;function B(U,O,L){X.setFromMatrixPosition(O.matrixWorld),q.setFromMatrixPosition(L.matrixWorld);const R=X.distanceTo(q),Q=O.projectionMatrix.elements,de=L.projectionMatrix.elements,$=Q[14]/(Q[10]-1),me=Q[14]/(Q[10]+1),ee=(Q[9]+1)/Q[5],j=(Q[9]-1)/Q[5],T=(Q[8]-1)/Q[0],se=(de[8]+1)/de[0],ie=$*T,z=$*se,H=R/(-T+se),k=H*-T;if(O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(k),U.translateZ(H),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Q[10]===-1)U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const he=$+H,D=me+H,C=ie-k,te=z+(R-k),le=ee*me/D*he,fe=j*me/D*he;U.projectionMatrix.makePerspective(C,te,le,fe,he,D),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ne(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let O=U.near,L=U.far;p.texture!==null&&(p.depthNear>0&&(O=p.depthNear),p.depthFar>0&&(L=p.depthFar)),S.near=A.near=M.near=O,S.far=A.far=M.far=L,(N!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,F=S.far),M.layers.mask=U.layers.mask|2,A.layers.mask=U.layers.mask|4,S.layers.mask=M.layers.mask|A.layers.mask;const R=U.parent,Q=S.cameras;ne(S,R);for(let de=0;de<Q.length;de++)ne(Q[de],R);Q.length===2?B(S,M,A):S.projectionMatrix.copy(M.projectionMatrix),I(U,S,R)};function I(U,O,L){L===null?U.matrix.copy(O.matrixWorld):(U.matrix.copy(L.matrixWorld),U.matrix.invert(),U.matrix.multiply(O.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=nd*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(S)};let ce=null;function ye(U,O){if(u=O.getViewerPose(c||o),_=O,u!==null){const L=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let R=!1;L.length!==S.cameras.length&&(S.cameras.length=0,R=!0);for(let $=0;$<L.length;$++){const me=L[$];let ee=null;if(f!==null)ee=f.getViewport(me);else{const T=h.getViewSubImage(d,me);ee=T.viewport,$===0&&(e.setRenderTargetTextures(x,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(x))}let j=b[$];j===void 0&&(j=new jn,j.layers.enable($),j.viewport=new St,b[$]=j),j.matrix.fromArray(me.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(me.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),$===0&&(S.matrix.copy(j.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),R===!0&&S.cameras.push(j)}const Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const $=h.getDepthInformation(L[0]);$&&$.isValid&&$.texture&&p.init(e,$,i.renderState)}}for(let L=0;L<y.length;L++){const R=v[L],Q=y[L];R!==null&&Q!==void 0&&Q.update(R,O,c||o)}ce&&ce(U,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),_=null}const we=new J_;we.setAnimationLoop(ye),this.setAnimationLoop=function(U){ce=U},this.dispose=function(){}}}const Zr=new Hi,U1=new Dt;function F1(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,F_(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),p(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,Zr.copy(v),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),g.envMapRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Zr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),E=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,M=v.length;w<M;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=A.length;b<S;b++){const N=A[b];if(f(N,w,b,E)===!0){const F=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let Y=0;Y<G.length;Y++){const X=G[Y],q=p(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,F+V,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,y,v,E){const w=x.value,M=y+"_"+v;if(E[M]===void 0)return typeof w=="number"||typeof w=="boolean"?E[M]=w:E[M]=w.clone(),!0;{const A=E[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return E[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function _(x){const y=x.uniforms;let v=0;const E=16;for(let M=0,A=y.length;M<A;M++){const b=Array.isArray(y[M])?y[M]:[y[M]];for(let S=0,N=b.length;S<N;S++){const F=b[S],G=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=G.length;V<Y;V++){const X=G[V],q=p(X),B=v%E,ne=B%q.boundary,I=B+ne;v+=ne,I!==0&&E-I<q.storage&&(v+=E-I),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=q.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function p(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class n0{constructor(e={}){const{canvas:t=Ix(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),p=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=Dr,this.toneMappingExposure=1;const v=this;let E=!1,w=0,M=0,A=null,b=-1,S=null;const N=new St,F=new St;let G=null;const V=new qe(0);let Y=0,X=t.width,q=t.height,B=1,ne=null,I=null;const ce=new St(0,0,X,q),ye=new St(0,0,X,q);let we=!1;const U=new lf;let O=!1,L=!1;this.transmissionResolutionScale=1;const R=new Dt,Q=new Dt,de=new K,$=new St,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function j(){return A===null?B:1}let T=n;function se(P,J){return t.getContext(P,J)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Re,!1),T===null){const J="webgl2";if(T=se(J,P),T===null)throw se(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ie,z,H,k,he,D,C,te,le,fe,pe,Ee,be,Te,$e,Se,Me,Xe,ze,Oe,it,Ze,dt,W;function Ce(){ie=new jw(T),ie.init(),Ze=new L1(T,ie),z=new Vw(T,ie,e,Ze),H=new R1(T,ie),z.reverseDepthBuffer&&d&&H.buffers.depth.setReversed(!0),k=new Kw(T),he=new g1,D=new P1(T,ie,H,he,z,Ze,k),C=new Ww(v),te=new Yw(v),le=new rb(T),dt=new zw(T,le),fe=new Zw(T,le,k,dt),pe=new eE(T,fe,le,k),ze=new Qw(T,z,D),Se=new Gw(he),Ee=new m1(v,C,te,ie,z,dt,Se),be=new F1(v,he),Te=new v1,$e=new w1(ie),Xe=new Bw(v,C,te,H,pe,f,l),Me=new A1(v,pe,z),W=new k1(T,k,z,H),Oe=new Hw(T,ie,k),it=new Jw(T,ie,k),k.programs=Ee.programs,v.capabilities=z,v.extensions=ie,v.properties=he,v.renderLists=Te,v.shadowMap=Me,v.state=H,v.info=k}Ce();const ue=new N1(v,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const P=ie.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ie.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(X,q,!1))},this.getSize=function(P){return P.set(X,q)},this.setSize=function(P,J,oe=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,q=J,t.width=Math.floor(P*B),t.height=Math.floor(J*B),oe===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(X*B,q*B).floor()},this.setDrawingBufferSize=function(P,J,oe){X=P,q=J,B=oe,t.width=Math.floor(P*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(ce)},this.setViewport=function(P,J,oe,re){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,J,oe,re),H.viewport(N.copy(ce).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(ye)},this.setScissor=function(P,J,oe,re){P.isVector4?ye.set(P.x,P.y,P.z,P.w):ye.set(P,J,oe,re),H.scissor(F.copy(ye).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){H.setScissorTest(we=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){I=P},this.getClearColor=function(P){return P.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,oe=!0){let re=0;if(P){let Z=!1;if(A!==null){const xe=A.texture.format;Z=xe===rf||xe===nf||xe===tf}if(Z){const xe=A.texture.type,Le=xe===or||xe===Es||xe===Ba||xe===Io||xe===Qd||xe===ef,Ue=Xe.getClearColor(),Ne=Xe.getClearAlpha(),Ge=Ue.r,je=Ue.g,He=Ue.b;Le?(_[0]=Ge,_[1]=je,_[2]=He,_[3]=Ne,T.clearBufferuiv(T.COLOR,0,_)):(p[0]=Ge,p[1]=je,p[2]=He,p[3]=Ne,T.clearBufferiv(T.COLOR,0,p))}else re|=T.COLOR_BUFFER_BIT}J&&(re|=T.DEPTH_BUFFER_BIT),oe&&(re|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Xe.dispose(),Te.dispose(),$e.dispose(),he.dispose(),C.dispose(),te.dispose(),pe.dispose(),dt.dispose(),W.dispose(),Ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Pe),ue.removeEventListener("sessionend",et),Be.stop()};function ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=k.autoReset,J=Me.enabled,oe=Me.autoUpdate,re=Me.needsUpdate,Z=Me.type;Ce(),k.autoReset=P,Me.enabled=J,Me.autoUpdate=oe,Me.needsUpdate=re,Me.type=Z}function Re(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Je(P){const J=P.target;J.removeEventListener("dispose",Je),ft(J)}function ft(P){Ut(P),he.remove(P)}function Ut(P){const J=he.get(P).programs;J!==void 0&&(J.forEach(function(oe){Ee.releaseProgram(oe)}),P.isShaderMaterial&&Ee.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,oe,re,Z,xe){J===null&&(J=me);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Ue=Hn(P,J,oe,re,Z);H.setMaterial(re,Le);let Ne=oe.index,Ge=1;if(re.wireframe===!0){if(Ne=fe.getWireframeAttribute(oe),Ne===void 0)return;Ge=2}const je=oe.drawRange,He=oe.attributes.position;let nt=je.start*Ge,_t=(je.start+je.count)*Ge;xe!==null&&(nt=Math.max(nt,xe.start*Ge),_t=Math.min(_t,(xe.start+xe.count)*Ge)),Ne!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Ne.count)):He!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,He.count));const Vt=_t-nt;if(Vt<0||Vt===1/0)return;dt.setup(Z,re,Ue,oe,Ne);let Ft,pt=Oe;if(Ne!==null&&(Ft=le.get(Ne),pt=it,pt.setIndex(Ft)),Z.isMesh)re.wireframe===!0?(H.setLineWidth(re.wireframeLinewidth*j()),pt.setMode(T.LINES)):pt.setMode(T.TRIANGLES);else if(Z.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),H.setLineWidth(Ye*j()),Z.isLineSegments?pt.setMode(T.LINES):Z.isLineLoop?pt.setMode(T.LINE_LOOP):pt.setMode(T.LINE_STRIP)}else Z.isPoints?pt.setMode(T.POINTS):Z.isSprite&&pt.setMode(T.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,on=Z._multiDrawCounts,vt=Z._multiDrawCount,mi=Ne?le.get(Ne).bytesPerElement:1,Is=he.get(re).currentProgram.getUniforms();for(let Vn=0;Vn<vt;Vn++)Is.setValue(T,"_gl_DrawID",Vn),pt.render(Ye[Vn]/mi,on[Vn])}else if(Z.isInstancedMesh)pt.renderInstances(nt,Vt,Z.count);else if(oe.isInstancedBufferGeometry){const Ye=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,on=Math.min(oe.instanceCount,Ye);pt.renderInstances(nt,Vt,on)}else pt.render(nt,Vt)};function Ie(P,J,oe){P.transparent===!0&&P.side===Li&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,bt(P,J,oe),P.side=Ur,P.needsUpdate=!0,bt(P,J,oe),P.side=Li):bt(P,J,oe)}this.compile=function(P,J,oe=null){oe===null&&(oe=P),m=$e.get(oe),m.init(J),y.push(m),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),P!==oe&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(J.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const re=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const xe=Z.material;if(xe)if(Array.isArray(xe))for(let Le=0;Le<xe.length;Le++){const Ue=xe[Le];Ie(Ue,oe,Z),re.add(Ue)}else Ie(xe,oe,Z),re.add(xe)}),m=y.pop(),re},this.compileAsync=function(P,J,oe=null){const re=this.compile(P,J,oe);return new Promise(Z=>{function xe(){if(re.forEach(function(Le){he.get(Le).currentProgram.isReady()&&re.delete(Le)}),re.size===0){Z(P);return}setTimeout(xe,10)}ie.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ke=null;function rt(P){ke&&ke(P)}function Pe(){Be.stop()}function et(){Be.start()}const Be=new J_;Be.setAnimationLoop(rt),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(P){ke=P,ue.setAnimationLoop(P),P===null?Be.stop():Be.start()},ue.addEventListener("sessionstart",Pe),ue.addEventListener("sessionend",et),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(J),J=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,J,A),m=$e.get(P,y.length),m.init(J),y.push(m),Q.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U.setFromProjectionMatrix(Q),L=this.localClippingEnabled,O=Se.init(this.clippingPlanes,L),g=Te.get(P,x.length),g.init(),x.push(g),ue.enabled===!0&&ue.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Ke(xe,J,-1/0,v.sortObjects)}Ke(P,J,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ne,I),ee=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ee&&Xe.addToRenderList(g,P),this.info.render.frame++,O===!0&&Se.beginShadows();const oe=m.state.shadowsArray;Me.render(oe,P,J),O===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=g.opaque,Z=g.transmissive;if(m.setupLights(),J.isArrayCamera){const xe=J.cameras;if(Z.length>0)for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ne=xe[Le];at(re,Z,P,Ne)}ee&&Xe.render(P);for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ne=xe[Le];Bt(g,P,Ne,Ne.viewport)}}else Z.length>0&&at(re,Z,P,J),ee&&Xe.render(P),Bt(g,P,J);A!==null&&M===0&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(v,P,J),dt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],O===!0&&Se.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ke(P,J,oe,re){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||U.intersectsSprite(P)){re&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);const Le=pe.update(P),Ue=P.material;Ue.visible&&g.push(P,Le,Ue,oe,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||U.intersectsObject(P))){const Le=pe.update(P),Ue=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),$.copy(P.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$.copy(Le.boundingSphere.center)),$.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(Ue)){const Ne=Le.groups;for(let Ge=0,je=Ne.length;Ge<je;Ge++){const He=Ne[Ge],nt=Ue[He.materialIndex];nt&&nt.visible&&g.push(P,Le,nt,oe,$.z,He)}}else Ue.visible&&g.push(P,Le,Ue,oe,$.z,null)}}const xe=P.children;for(let Le=0,Ue=xe.length;Le<Ue;Le++)Ke(xe[Le],J,oe,re)}function Bt(P,J,oe,re){const Z=P.opaque,xe=P.transmissive,Le=P.transparent;m.setupLightsView(oe),O===!0&&Se.setGlobalState(v.clippingPlanes,oe),re&&H.viewport(N.copy(re)),Z.length>0&&Tt(Z,J,oe),xe.length>0&&Tt(xe,J,oe),Le.length>0&&Tt(Le,J,oe),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function at(P,J,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new Ts(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Fo:or,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const xe=m.state.transmissionRenderTarget[re.id],Le=re.viewport||N;xe.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(V),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Xe.render(oe);const Ne=v.toneMapping;v.toneMapping=Dr;const Ge=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),O===!0&&Se.setGlobalState(v.clippingPlanes,re),Tt(P,oe,re),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let He=0,nt=J.length;He<nt;He++){const _t=J[He],Vt=_t.object,Ft=_t.geometry,pt=_t.material,Ye=_t.group;if(pt.side===Li&&Vt.layers.test(re.layers)){const on=pt.side;pt.side=kn,pt.needsUpdate=!0,$t(Vt,oe,re,Ft,pt,Ye),pt.side=on,pt.needsUpdate=!0,je=!0}}je===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}v.setRenderTarget(Ue),v.setClearColor(V,Y),Ge!==void 0&&(re.viewport=Ge),v.toneMapping=Ne}function Tt(P,J,oe){const re=J.isScene===!0?J.overrideMaterial:null;for(let Z=0,xe=P.length;Z<xe;Z++){const Le=P[Z],Ue=Le.object,Ne=Le.geometry,Ge=re===null?Le.material:re,je=Le.group;Ue.layers.test(oe.layers)&&$t(Ue,J,oe,Ne,Ge,je)}}function $t(P,J,oe,re,Z,xe){P.onBeforeRender(v,J,oe,re,Z,xe),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(v,J,oe,re,P,xe),Z.transparent===!0&&Z.side===Li&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,v.renderBufferDirect(oe,J,re,Z,P,xe),Z.side=Ur,Z.needsUpdate=!0,v.renderBufferDirect(oe,J,re,Z,P,xe),Z.side=Li):v.renderBufferDirect(oe,J,re,Z,P,xe),P.onAfterRender(v,J,oe,re,Z,xe)}function bt(P,J,oe){J.isScene!==!0&&(J=me);const re=he.get(P),Z=m.state.lights,xe=m.state.shadowsArray,Le=Z.state.version,Ue=Ee.getParameters(P,Z.state,xe,J,oe),Ne=Ee.getProgramCacheKey(Ue);let Ge=re.programs;re.environment=P.isMeshStandardMaterial?J.environment:null,re.fog=J.fog,re.envMap=(P.isMeshStandardMaterial?te:C).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",Je),Ge=new Map,re.programs=Ge);let je=Ge.get(Ne);if(je!==void 0){if(re.currentProgram===je&&re.lightsStateVersion===Le)return gt(P,Ue),je}else Ue.uniforms=Ee.getUniforms(P),P.onBeforeCompile(Ue,v),je=Ee.acquireProgram(Ue,Ne),Ge.set(Ne,je),re.uniforms=Ue.uniforms;const He=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(He.clippingPlanes=Se.uniform),gt(P,Ue),re.needsLights=vn(P),re.lightsStateVersion=Le,re.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=je,re.uniformsList=null,je}function Mt(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=oc.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function gt(P,J){const oe=he.get(P);oe.outputColorSpace=J.outputColorSpace,oe.batching=J.batching,oe.batchingColor=J.batchingColor,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.instancingMorph=J.instancingMorph,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Hn(P,J,oe,re,Z){J.isScene!==!0&&(J=me),D.resetTextureUnits();const xe=J.fog,Le=re.isMeshStandardMaterial?J.environment:null,Ue=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:No,Ne=(re.isMeshStandardMaterial?te:C).get(re.envMap||Le),Ge=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,je=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!oe.morphAttributes.position,nt=!!oe.morphAttributes.normal,_t=!!oe.morphAttributes.color;let Vt=Dr;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,pt=Ft!==void 0?Ft.length:0,Ye=he.get(re),on=m.state.lights;if(O===!0&&(L===!0||P!==S)){const yn=P===S&&re.id===b;Se.setState(re,P,yn)}let vt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==on.state.version||Ye.outputColorSpace!==Ue||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Ne||re.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==je||Ye.morphTargets!==He||Ye.morphNormals!==nt||Ye.morphColors!==_t||Ye.toneMapping!==Vt||Ye.morphTargetsCount!==pt)&&(vt=!0):(vt=!0,Ye.__version=re.version);let mi=Ye.currentProgram;vt===!0&&(mi=bt(re,J,Z));let Is=!1,Vn=!1,Vo=!1;const Pt=mi.getUniforms(),ii=Ye.uniforms;if(H.useProgram(mi.program)&&(Is=!0,Vn=!0,Vo=!0),re.id!==b&&(b=re.id,Vn=!0),Is||S!==P){H.buffers.depth.getReversed()?(R.copy(P.projectionMatrix),Nx(R),Ux(R),Pt.setValue(T,"projectionMatrix",R)):Pt.setValue(T,"projectionMatrix",P.projectionMatrix),Pt.setValue(T,"viewMatrix",P.matrixWorldInverse);const Rn=Pt.map.cameraPosition;Rn!==void 0&&Rn.setValue(T,de.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Pt.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Vn=!0,Vo=!0)}if(Z.isSkinnedMesh){Pt.setOptional(T,Z,"bindMatrix"),Pt.setOptional(T,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Pt.setValue(T,"boneTexture",yn.boneTexture,D))}Z.isBatchedMesh&&(Pt.setOptional(T,Z,"batchingTexture"),Pt.setValue(T,"batchingTexture",Z._matricesTexture,D),Pt.setOptional(T,Z,"batchingIdTexture"),Pt.setValue(T,"batchingIdTexture",Z._indirectTexture,D),Pt.setOptional(T,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(T,"batchingColorTexture",Z._colorsTexture,D));const ri=oe.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&ze.update(Z,oe,mi),(Vn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,Pt.setValue(T,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(ii.envMap.value=Ne,ii.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&J.environment!==null&&(ii.envMapIntensity.value=J.environmentIntensity),Vn&&(Pt.setValue(T,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Rt(ii,Vo),xe&&re.fog===!0&&be.refreshFogUniforms(ii,xe),be.refreshMaterialUniforms(ii,re,B,q,m.state.transmissionRenderTarget[P.id]),oc.upload(T,Mt(Ye),ii,D)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(oc.upload(T,Mt(Ye),ii,D),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(T,"center",Z.center),Pt.setValue(T,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(T,"normalMatrix",Z.normalMatrix),Pt.setValue(T,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const yn=re.uniformsGroups;for(let Rn=0,Wc=yn.length;Rn<Wc;Rn++){const Hr=yn[Rn];W.update(Hr,mi),W.bind(Hr,mi)}}return mi}function Rt(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function vn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,J,oe){he.get(P.texture).__webglTexture=J,he.get(P.depthTexture).__webglTexture=oe;const re=he.get(P);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=oe===void 0,re.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,J){const oe=he.get(P);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0};const ni=T.createFramebuffer();this.setRenderTarget=function(P,J=0,oe=0){A=P,w=J,M=oe;let re=!0,Z=null,xe=!1,Le=!1;if(P){const Ne=he.get(P);if(Ne.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(T.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)D.setupRenderTarget(P);else if(Ne.__hasExternalTextures)D.rebindTextures(P,he.get(P.texture).__webglTexture,he.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const He=P.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&he.has(He)&&(P.width!==He.image.width||P.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const je=he.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(je[J])?Z=je[J][oe]:Z=je[J],xe=!0):P.samples>0&&D.useMultisampledRTT(P)===!1?Z=he.get(P).__webglMultisampledFramebuffer:Array.isArray(je)?Z=je[oe]:Z=je,N.copy(P.viewport),F.copy(P.scissor),G=P.scissorTest}else N.copy(ce).multiplyScalar(B).floor(),F.copy(ye).multiplyScalar(B).floor(),G=we;if(oe!==0&&(Z=ni),H.bindFramebuffer(T.FRAMEBUFFER,Z)&&re&&H.drawBuffers(P,Z),H.viewport(N),H.scissor(F),H.setScissorTest(G),xe){const Ne=he.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne.__webglTexture,oe)}else if(Le){const Ne=he.get(P.texture),Ge=J;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ne.__webglTexture,oe,Ge)}else if(P!==null&&oe!==0){const Ne=he.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ne.__webglTexture,oe)}b=-1},this.readRenderTargetPixels=function(P,J,oe,re,Z,xe,Le){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){H.bindFramebuffer(T.FRAMEBUFFER,Ue);try{const Ne=P.texture,Ge=Ne.format,je=Ne.type;if(!z.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-re&&oe>=0&&oe<=P.height-Z&&T.readPixels(J,oe,re,Z,Ze.convert(Ge),Ze.convert(je),xe)}finally{const Ne=A!==null?he.get(A).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(P,J,oe,re,Z,xe,Le){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=he.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){const Ne=P.texture,Ge=Ne.format,je=Ne.type;if(!z.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=P.width-re&&oe>=0&&oe<=P.height-Z){H.bindFramebuffer(T.FRAMEBUFFER,Ue);const He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,xe.byteLength,T.STREAM_READ),T.readPixels(J,oe,re,Z,Ze.convert(Ge),Ze.convert(je),0);const nt=A!==null?he.get(A).__webglFramebuffer:null;H.bindFramebuffer(T.FRAMEBUFFER,nt);const _t=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Ox(T,_t,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,xe),T.deleteBuffer(He),T.deleteSync(_t),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,J=null,oe=0){P.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1]);const re=Math.pow(2,-oe),Z=Math.floor(P.image.width*re),xe=Math.floor(P.image.height*re),Le=J!==null?J.x:0,Ue=J!==null?J.y:0;D.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,oe,0,0,Le,Ue,Z,xe),H.unbindTexture()};const Yt=T.createFramebuffer(),jt=T.createFramebuffer();this.copyTextureToTexture=function(P,J,oe=null,re=null,Z=0,xe=null){P.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,P=arguments[1],J=arguments[2],xe=arguments[3]||0,oe=null),xe===null&&(Z!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Z,Z=0):xe=0);let Le,Ue,Ne,Ge,je,He,nt,_t,Vt;const Ft=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ue=oe.max.y-oe.min.y,Ne=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,je=oe.min.y,He=oe.isBox3?oe.min.z:0;else{const ri=Math.pow(2,-Z);Le=Math.floor(Ft.width*ri),Ue=Math.floor(Ft.height*ri),P.isDataArrayTexture?Ne=Ft.depth:P.isData3DTexture?Ne=Math.floor(Ft.depth*ri):Ne=1,Ge=0,je=0,He=0}re!==null?(nt=re.x,_t=re.y,Vt=re.z):(nt=0,_t=0,Vt=0);const pt=Ze.convert(J.format),Ye=Ze.convert(J.type);let on;J.isData3DTexture?(D.setTexture3D(J,0),on=T.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(D.setTexture2DArray(J,0),on=T.TEXTURE_2D_ARRAY):(D.setTexture2D(J,0),on=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,J.unpackAlignment);const vt=T.getParameter(T.UNPACK_ROW_LENGTH),mi=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Is=T.getParameter(T.UNPACK_SKIP_PIXELS),Vn=T.getParameter(T.UNPACK_SKIP_ROWS),Vo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ge),T.pixelStorei(T.UNPACK_SKIP_ROWS,je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,He);const Pt=P.isDataArrayTexture||P.isData3DTexture,ii=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){const ri=he.get(P),yn=he.get(J),Rn=he.get(ri.__renderTarget),Wc=he.get(yn.__renderTarget);H.bindFramebuffer(T.READ_FRAMEBUFFER,Rn.__webglFramebuffer),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,Wc.__webglFramebuffer);for(let Hr=0;Hr<Ne;Hr++)Pt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.get(P).__webglTexture,Z,He+Hr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,he.get(J).__webglTexture,xe,Vt+Hr)),T.blitFramebuffer(Ge,je,Le,Ue,nt,_t,Le,Ue,T.DEPTH_BUFFER_BIT,T.NEAREST);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||he.has(P)){const ri=he.get(P),yn=he.get(J);H.bindFramebuffer(T.READ_FRAMEBUFFER,Yt),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,jt);for(let Rn=0;Rn<Ne;Rn++)Pt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ri.__webglTexture,Z,He+Rn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ri.__webglTexture,Z),ii?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yn.__webglTexture,xe,Vt+Rn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,yn.__webglTexture,xe),Z!==0?T.blitFramebuffer(Ge,je,Le,Ue,nt,_t,Le,Ue,T.COLOR_BUFFER_BIT,T.NEAREST):ii?T.copyTexSubImage3D(on,xe,nt,_t,Vt+Rn,Ge,je,Le,Ue):T.copyTexSubImage2D(on,xe,nt,_t,Ge,je,Le,Ue);H.bindFramebuffer(T.READ_FRAMEBUFFER,null),H.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ii?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(on,xe,nt,_t,Vt,Le,Ue,Ne,pt,Ye,Ft.data):J.isCompressedArrayTexture?T.compressedTexSubImage3D(on,xe,nt,_t,Vt,Le,Ue,Ne,pt,Ft.data):T.texSubImage3D(on,xe,nt,_t,Vt,Le,Ue,Ne,pt,Ye,Ft):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ue,pt,Ye,Ft.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,xe,nt,_t,Ft.width,Ft.height,pt,Ft.data):T.texSubImage2D(T.TEXTURE_2D,xe,nt,_t,Le,Ue,pt,Ye,Ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,vt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mi),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Is),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Vo),xe===0&&J.generateMipmaps&&T.generateMipmap(on),H.unbindTexture()},this.copyTextureToTexture3D=function(P,J,oe=null,re=null,Z=0){return P.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,re=arguments[1]||null,P=arguments[2],J=arguments[3],Z=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,J,oe,re,Z)},this.initRenderTarget=function(P){he.get(P).__webglFramebuffer===void 0&&D.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?D.setTextureCube(P,0):P.isData3DTexture?D.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?D.setTexture2DArray(P,0):D.setTexture2D(P,0),H.unbindTexture()},this.resetState=function(){w=0,M=0,A=null,H.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}var B1=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,z1=`vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

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
    
    vec2 q = vec2(
        fbm(p + vec2(0.0, time * 0.05), warpOctaves, 2.0, 0.5),
        fbm(p + vec2(5.2, 1.3 + time * 0.03), warpOctaves, 2.0, 0.5)
    );
    
    
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

vec3 hash3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

float filmGrain(vec2 st, float time, float size, float speed, float grainAspectRatio, float complexity) {
    
    vec2 pos = st * size;
    pos.x *= grainAspectRatio;
    
    float t = time * speed;  
    float frame = floor(t);
    float interp = fract(t);
    
    float c = clamp(complexity, 0.0, 1.0);
    vec2 warped = pos;
    
    if (c > 0.001) {
        vec2 cell = floor(pos);
        vec3 jitterHash = hash3(cell + frame);
        vec3 jitterHash2 = hash3(cell.yx + frame + 19.19);
        vec2 jitter = (jitterHash.xy + jitterHash2.xy - 1.0) * (0.6 * c);
        
        vec3 microHash = hash3((pos + 3.17) * 1.37 + frame * 0.71);
        vec3 microHash2 = hash3((pos.yx + 1.61) * 1.83 - frame * 0.63);
        vec2 micro = (microHash.yz + microHash2.yz - 1.0) * (0.3 * c);
        
        vec2 flowBreakup = hash3(cell + vec2(frame, frame * 0.37)).xy - 0.5;
        
        warped += jitter;
        warped += micro;
        warped += flowBreakup * (0.25 * c);
    }
    
    vec3 baseHash1 = hash3(warped + frame);
    vec3 baseHash2 = hash3(warped + frame + 1.0);
    float grain1 = baseHash1.x;
    float grain2 = baseHash2.x;
    
    if (c > 0.001) {
        grain1 = mix(grain1, baseHash1.y, 0.55 * c);
        grain2 = mix(grain2, baseHash2.y, 0.55 * c);
        
        float sparkle = (hash3(warped * 2.47 + frame * 0.11).z - 0.5) * (0.55 * c);
        grain1 = clamp(grain1 + sparkle, 0.0, 1.0);
        grain2 = clamp(grain2 + sparkle * 0.85, 0.0, 1.0);
    }
    
    
    return mix(grain1, grain2, interp);
}

vec3 applyGrain(vec3 base, float grain, float intensity, int mode) {
    vec3 result;
    
    if (mode == 0) {
        
        result = base * (1.0 + (grain - 0.5) * intensity * 0.5);
    } else if (mode == 1) {
        
        result = base * mix(1.0, grain, intensity);
    } else if (mode == 2) {
        
        result = base + (grain - 0.5) * intensity;
    } else {
        
        result = 1.0 - (1.0 - base) * (1.0 - grain * intensity);
    }
    
    return result;
}

uniform float u_time;
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

varying vec2 vUv;

void main() {
    
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= u_resolution.x / u_resolution.y;
    
    
    st *= u_zoomEffective;
    
    
    vec2 movement = u_directionEffective * u_time * u_speed;
    st += movement;
    
    
    vec2 warpedPos = st * u_noiseScaleEffective;
    if(u_turbulenceEffective > 0.01) {
        warpedPos = domainWarp(warpedPos, u_time * u_speed, u_turbulenceEffective, u_warpOctaves);
    }
    
    
    float noise = fbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
    
    
    if(u_ridgeAmount > 0.01) {
        float ridgeNoise = ridgedFbm(warpedPos, u_octaves, u_lacunarity, u_gainEffective);
        noise = mix(noise, ridgeNoise, u_ridgeAmount);
    }
    
    
    if(u_detailAmount > 0.01) {
        float detail = detailNoise(st, u_time, u_detailScale, u_speed);
        noise += detail * u_detailAmount;
    }
    
    
    noise = noise * 0.5 + 0.5;
    
    
    if (abs(u_contrast - 1.0) > 0.01) {
        noise = pow(noise, 1.0 / u_contrast);
    }
    
    
    noise = smoothstep(0.0 - u_softness, 1.0 + u_softness, noise);
    
    
    float colorNoise = noise;
    if (abs(u_colorSpreadEffective - 0.5) > 0.01) {
        colorNoise = pow(noise, 1.0 / (1.0 + u_colorSpreadEffective));
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
        float grain = filmGrain(vUv, u_time, u_grainSize, u_grainSpeed, grainAspectRatio, u_grainComplexity);
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
}`;class H1{constructor(e="viewport",t=null){if(this.container=document.getElementById(e),!this.container){console.error(`Container #${e} not found`);return}if(!this.isWebGLAvailable()){console.warn("WebGL not supported, falling back to CSS"),this.applyFallback();return}this.scene=null,this.camera=null,this.renderer=null,this.material=null,this.mesh=null,this.animationId=null,this.clock=new tb,this.performanceMonitor=t,this.qualityLevel="high",this.lastQualityChange=0,this.init()}isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}applyFallback(){this.container.style.background=`
      linear-gradient(135deg, 
        #ADFFF5 0%, 
        #DEC1FF 50%, 
        #9367FF 100%
      )
    `}init(){this.scene=new H_,this.camera=new df(-1,1,1,-1,0,1),this.renderer=new n0({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight);const e=this.renderer.domElement;e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="-1",e.style.pointerEvents="none",this.container.appendChild(e),this.material=new ar({vertexShader:B1,fragmentShader:z1,uniforms:{u_time:{value:0},u_resolution:{value:new ve(this.renderer.domElement.width,this.renderer.domElement.height)},u_color1:{value:new qe(8454128)},u_color2:{value:new qe(5123034)},u_color3:{value:new qe(2150293)},u_baseColor:{value:new qe(3054335)},u_zoom:{value:.3},u_noiseScale:{value:.5},u_octaves:{value:3},u_lacunarity:{value:3},u_gain:{value:.35},u_turbulence:{value:.2},u_warpOctaves:{value:2},u_ridgeAmount:{value:0},u_detailScale:{value:1},u_detailAmount:{value:0},u_speed:{value:.0082},u_directionX:{value:.5},u_directionY:{value:.3},u_modulationSpeed:{value:.4},u_modulationIntensity:{value:12},u_turbulenceModulation:{value:.24},u_zoomModulation:{value:0},u_colorModulation:{value:0},u_rotationModulation:{value:.01},u_softness:{value:.2},u_contrast:{value:.75},u_brightness:{value:1.25},u_exposure:{value:1},u_blackLevel:{value:0},u_colorMix1:{value:.5},u_colorMix2:{value:.5},u_colorSpread:{value:.66},u_colorSeparation:{value:.3},u_colorBands:{value:0},u_noiseScaleModulation:{value:0},u_gainModulation:{value:0},u_colorSpreadModulation:{value:0},u_colorShiftModulation:{value:0},u_noiseScaleEffective:{value:.5},u_gainEffective:{value:.35},u_zoomEffective:{value:.3},u_turbulenceEffective:{value:.2},u_directionEffective:{value:new ve(.5,.3)},u_colorMix1Effective:{value:.5},u_colorMix2Effective:{value:.5},u_colorSpreadEffective:{value:.66},u_colorShiftOffset:{value:0},u_grainIntensity:{value:1},u_grainSpeed:{value:12.8},u_grainSize:{value:2200},u_grainBlendMode:{value:0},u_grainAspect:{value:1},u_grainComplexity:{value:.6}},transparent:!0}),this.baseQualitySettings={modulationIntensity:this.material.uniforms.u_modulationIntensity.value,colorModulation:this.material.uniforms.u_colorModulation.value,grainComplexity:this.material.uniforms.u_grainComplexity.value,grainIntensity:this.material.uniforms.u_grainIntensity.value},this.applyQualitySettings(this.qualityLevel),this.updateModulationUniforms(0);const t=new Qa(2,2);this.mesh=new di(t,this.material),this.scene.add(this.mesh),this.setupEventListeners(),this.setupTouchPrevention(),console.log("BackgroundRenderer initialized successfully")}setupEventListeners(){window.addEventListener("resize",this.handleResize.bind(this)),document.addEventListener("visibilitychange",this.handleVisibilityChange.bind(this))}handleResize(){if(this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material&&this.material.uniforms.u_resolution)){const e=this.renderer.domElement;this.material.uniforms.u_resolution.value.set(e.width,e.height)}}handleVisibilityChange(){document.hidden?this.pause():this.resume()}setupTouchPrevention(){const e=this.renderer.domElement;["touchstart","touchmove","touchend","touchcancel"].forEach(t=>{e.addEventListener(t,n=>{console.log("canvas preventDefault fired"),n.preventDefault()},{passive:!1})})}updateUniforms(){if(!this.material)return;const e=this.clock.getElapsedTime();this.updateModulationUniforms(e),this.material.uniforms.u_time.value=e}updateModulationUniforms(e){if(!this.material)return;const t=this.material.uniforms,n=Math.min(t.u_modulationIntensity.value??0,20),i=t.u_modulationSpeed.value??0,s=i>1e-5&&n>1e-5&&(t.u_noiseScaleModulation.value>.01||t.u_gainModulation.value>.01||t.u_zoomModulation.value>.01||t.u_turbulenceModulation.value>.01||t.u_rotationModulation.value>.01||t.u_colorModulation.value>.01||t.u_colorSpreadModulation.value>.01||t.u_colorShiftModulation.value>.01),o=t.u_noiseScale.value,a=t.u_gain.value,l=t.u_zoom.value,c=t.u_turbulence.value,u=t.u_directionX.value,h=t.u_directionY.value,d=t.u_colorMix1.value,f=t.u_colorMix2.value,_=t.u_colorSpread.value;if(!s){t.u_noiseScaleEffective.value=o,t.u_gainEffective.value=a,t.u_zoomEffective.value=l,t.u_turbulenceEffective.value=c,t.u_directionEffective.value.set(u,h),t.u_colorMix1Effective.value=d,t.u_colorMix2Effective.value=f,t.u_colorSpreadEffective.value=_,t.u_colorShiftOffset.value=0;return}const p=e*i*.5;let g=o;const m=t.u_noiseScaleModulation.value;if(m>.01){const B=Math.sin(p*.9+1.1)*.5+.5,ne=m*.08*n;g=Math.max(1e-4,o*(1+(B-.5)*ne))}let x=a;const y=t.u_gainModulation.value;if(y>.01){const B=Math.sin(p*.7+2.3)*.5+.5,ne=y*.05*n;x=Math.min(Math.max(a+(B-.5)*ne,.05),.95)}let v=l;const E=t.u_zoomModulation.value;if(E>.01){const B=Math.sin(p*.8)*.5+.5,ne=E*.4*n;v=l*(1+(B-.5)*ne)}let w=c;const M=t.u_turbulenceModulation.value;if(M>.01){const B=Math.sin(p*.6)*.5+.5,ne=M*.8*n;w=c*(.5+B*ne)}let A=u,b=h;const S=t.u_rotationModulation.value;if(S>.01){const B=p*S*.5*n,ne=Math.cos(B),I=Math.sin(B);A=u*ne-h*I,b=u*I+h*ne}let N=d,F=f;const G=t.u_colorModulation.value;if(G>.01){const B=Math.sin(p*.4)*.5+.5,ne=Math.sin(p*.3+1.57)*.5+.5,I=G*.6*n;N=Math.min(Math.max(d+(B-.5)*I,0),1),F=Math.min(Math.max(f+(ne-.5)*I,0),1)}let V=_;const Y=t.u_colorSpreadModulation.value;if(Y>.01){const B=Math.sin(p*.52+.4)*.5+.5,ne=Y*.1*n;V=Math.min(Math.max(_+(B-.5)*ne,.02),.98)}let X=0;const q=t.u_colorShiftModulation.value;if(q>.01){const B=Math.sin(p*.33+3.1);X=q*.05*n*B}t.u_noiseScaleEffective.value=g,t.u_gainEffective.value=x,t.u_zoomEffective.value=v,t.u_turbulenceEffective.value=w,t.u_directionEffective.value.set(A,b),t.u_colorMix1Effective.value=N,t.u_colorMix2Effective.value=F,t.u_colorSpreadEffective.value=V,t.u_colorShiftOffset.value=X,this.qualityLevel==="high"&&this.baseQualitySettings&&(this.baseQualitySettings.modulationIntensity=t.u_modulationIntensity.value,this.baseQualitySettings.colorModulation=t.u_colorModulation.value,this.baseQualitySettings.grainComplexity=t.u_grainComplexity.value,this.baseQualitySettings.grainIntensity=t.u_grainIntensity.value)}render(){!this.renderer||!this.scene||!this.camera||(this.updateUniforms(),this.renderer.render(this.scene,this.camera),this.performanceMonitor&&this.performanceMonitor.update(),this.animationId=requestAnimationFrame(this.render.bind(this)))}start(){if(!this.renderer){console.warn("Renderer not initialized, cannot start");return}console.log("Starting background renderer"),this.clock.start(),this.render()}pause(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}resume(){!this.animationId&&this.renderer&&this.render()}stop(){this.pause(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.material&&this.material.dispose(),this.mesh&&this.mesh.geometry&&this.mesh.geometry.dispose(),window.removeEventListener("resize",this.handleResize),document.removeEventListener("visibilitychange",this.handleVisibilityChange),console.log("BackgroundRenderer stopped and cleaned up")}getMaterial(){return this.material}getCanvas(){return this.renderer?this.renderer.domElement:null}setQuality(e){if(!["low","medium","high"].includes(e)){console.warn(`Invalid quality level: ${e}`);return}if(this.qualityLevel===e)return;const t=typeof performance<"u"?performance.now():Date.now();if(this.lastQualityChange&&t-this.lastQualityChange<2e3){console.log(`Quality change throttled to avoid rapid adjustments (current: ${this.qualityLevel})`);return}if(this.lastQualityChange=t,this.qualityLevel=e,console.log(`Background quality set to: ${e}`),this.renderer){let n;switch(e){case"low":n=Math.min(window.devicePixelRatio,1);break;case"medium":n=Math.min(window.devicePixelRatio,1.25);break;case"high":n=Math.min(window.devicePixelRatio,1.6);break}this.renderer.setPixelRatio(n),this.renderer.setSize(window.innerWidth,window.innerHeight),console.log(`Pixel ratio set to: ${n.toFixed(2)}`)}this.applyQualitySettings(e),this.updateModulationUniforms(this.clock.getElapsedTime())}applyQualitySettings(e){if(!this.material)return;const t=this.material.uniforms;switch(e){case"low":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=0),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.5,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.7,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.55,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.85,t.u_grainIntensity.value)),console.log("Applied low quality: 2 octaves, 1 warp octave, no detail");break;case"medium":t.u_octaves&&(t.u_octaves.value=2),t.u_warpOctaves&&(t.u_warpOctaves.value=1),t.u_detailAmount&&(t.u_detailAmount.value=.05),t.u_modulationIntensity&&(t.u_modulationIntensity.value=Math.min(this.baseQualitySettings.modulationIntensity*.7,t.u_modulationIntensity.value)),t.u_colorModulation&&(t.u_colorModulation.value=Math.min(this.baseQualitySettings.colorModulation*.8,t.u_colorModulation.value)),t.u_grainComplexity&&(t.u_grainComplexity.value=Math.min(this.baseQualitySettings.grainComplexity*.75,t.u_grainComplexity.value)),t.u_grainIntensity&&(t.u_grainIntensity.value=Math.min(this.baseQualitySettings.grainIntensity*.95,t.u_grainIntensity.value)),console.log("Applied medium quality: 2 octaves, 1 warp octave, reduced detail");break;case"high":t.u_octaves&&(t.u_octaves.value=3),t.u_warpOctaves&&(t.u_warpOctaves.value=2),t.u_detailAmount&&(t.u_detailAmount.value=.1),t.u_modulationIntensity&&(t.u_modulationIntensity.value=this.baseQualitySettings.modulationIntensity),t.u_colorModulation&&(t.u_colorModulation.value=this.baseQualitySettings.colorModulation),t.u_grainComplexity&&(t.u_grainComplexity.value=this.baseQualitySettings.grainComplexity),t.u_grainIntensity&&(t.u_grainIntensity.value=this.baseQualitySettings.grainIntensity),console.log("Applied high quality: 3 octaves, 2 warp octaves, optimized detail");break}}getQuality(){return this.qualityLevel}getPerformanceMonitor(){return this.performanceMonitor}}class V1{constructor(e){if(this.material=e,!this.material){console.error("ShaderController: No material provided");return}}updateUniform(e,t){if(!this.material||!this.material.uniforms[e]){console.warn(`Uniform ${e} not found`);return}t instanceof qe?this.material.uniforms[e].value.copy(t):typeof t=="object"&&t.r!==void 0?this.material.uniforms[e].value.setRGB(t.r,t.g,t.b):this.material.uniforms[e].value=t}updateUniforms(e){Object.keys(e).forEach(t=>{this.updateUniform(t,e[t])})}transitionTo(e,t=.6){this.material&&Object.keys(e).forEach(n=>{const i=this.material.uniforms[n];if(!i){console.warn(`Uniform ${n} not found for transition`);return}const s=e[n];if(i.value instanceof qe){const o=new qe(s);We.to(i.value,{r:o.r,g:o.g,b:o.b,duration:t,ease:"power2.inOut"})}else typeof i.value=="number"&&We.to(i,{value:s,duration:t,ease:"power2.inOut"})})}getUniform(e){return!this.material||!this.material.uniforms[e]?null:this.material.uniforms[e].value}getAllUniforms(){if(!this.material)return{};const e={};return Object.keys(this.material.uniforms).forEach(t=>{e[t]=this.material.uniforms[t].value}),e}}const Wa={default:{name:"Default Fog",description:"Soft, billowing fog with gentle movement",parameters:{u_zoom:.1,u_noiseScale:.5,u_octaves:1,u_lacunarity:1.8,u_gain:.5,u_turbulence:.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:0,u_speed:.0082,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.4,u_modulationIntensity:12,u_turbulenceModulation:2,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.25,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:1,u_grainSpeed:12.8,u_grainSize:2200,u_grainBlendMode:0,u_grainAspect:1,u_grainComplexity:.6}},dreamyFog:{name:"Dreamy Fog",description:"Very soft, ethereal fog with minimal detail",parameters:{u_zoom:.4,u_noiseScale:1.5,u_octaves:3,u_lacunarity:2,u_gain:.6,u_turbulence:.3,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:6,u_detailAmount:.1,u_speed:.15,u_directionX:.3,u_directionY:.4,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.7,u_contrast:.8,u_brightness:1.1,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.6,u_colorSpread:.7,u_colorSeparation:.6,u_colorBands:0,u_grainIntensity:.05,u_grainSpeed:.8,u_grainSize:120,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},denseFog:{name:"Dense Fog",description:"Thick, heavy fog with more defined shapes",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.1,u_gain:.4,u_turbulence:.6,u_warpOctaves:2,u_ridgeAmount:.15,u_detailScale:10,u_detailAmount:.2,u_speed:.18,u_directionX:.4,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.35,u_contrast:1.2,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.4,u_colorSpread:.3,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.12,u_grainSpeed:1.2,u_grainSize:180,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6}},wispyClouds:{name:"Wispy Clouds",description:"Fast, streaky clouds with sharp edges",parameters:{u_zoom:.7,u_noiseScale:3,u_octaves:3,u_lacunarity:2.3,u_gain:.45,u_turbulence:.4,u_warpOctaves:2,u_ridgeAmount:.4,u_detailScale:12,u_detailAmount:.25,u_speed:.5,u_directionX:.8,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.25,u_contrast:1.3,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.4,u_colorSeparation:.65,u_colorBands:0,u_grainIntensity:.15,u_grainSpeed:2,u_grainSize:200,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},liquidFlow:{name:"Liquid Flow",description:"Liquid-like appearance with strong distortion",parameters:{u_zoom:.8,u_noiseScale:2.2,u_octaves:3,u_lacunarity:2.2,u_gain:.5,u_turbulence:1.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:9,u_detailAmount:.2,u_speed:.35,u_directionX:.6,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.4,u_contrast:1.1,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.6,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.06,u_grainSpeed:.8,u_grainSize:140,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}},turbulent:{name:"Turbulent Energy",description:"Chaotic, energetic flow with high distortion",parameters:{u_zoom:1,u_noiseScale:2.8,u_octaves:3,u_lacunarity:2.4,u_gain:.45,u_turbulence:1.5,u_warpOctaves:2,u_ridgeAmount:.2,u_detailScale:15,u_detailAmount:.3,u_speed:.6,u_directionX:.7,u_directionY:.6,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.3,u_contrast:1.4,u_brightness:.98,u_exposure:1,u_blackLevel:0,u_colorMix1:.4,u_colorMix2:.6,u_colorSpread:.5,u_colorSeparation:.75,u_colorBands:0,u_grainIntensity:.18,u_grainSpeed:3,u_grainSize:220,u_grainBlendMode:2,u_grainAspect:0,u_grainComplexity:.6}},calmWaves:{name:"Calm Waves",description:"Gentle, wave-like undulations",parameters:{u_zoom:.3,u_noiseScale:1.8,u_octaves:3,u_lacunarity:2,u_gain:.55,u_turbulence:.7,u_warpOctaves:3,u_ridgeAmount:0,u_detailScale:7,u_detailAmount:.12,u_speed:.2,u_directionX:.2,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.6,u_contrast:.9,u_brightness:1.05,u_exposure:1,u_blackLevel:0,u_colorMix1:.6,u_colorMix2:.5,u_colorSpread:.65,u_colorSeparation:.5,u_colorBands:0,u_grainIntensity:.04,u_grainSpeed:.6,u_grainSize:100,u_grainBlendMode:3,u_grainAspect:0,u_grainComplexity:.6}},mountainRidges:{name:"Mountain Ridges",description:"Sharp, ridge-like features",parameters:{u_zoom:.6,u_noiseScale:2.5,u_octaves:3,u_lacunarity:2.2,u_gain:.4,u_turbulence:.5,u_warpOctaves:2,u_ridgeAmount:.8,u_detailScale:10,u_detailAmount:.18,u_speed:.15,u_directionX:.3,u_directionY:.2,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.2,u_contrast:1.5,u_brightness:.95,u_exposure:1,u_blackLevel:0,u_colorMix1:.45,u_colorMix2:.45,u_colorSpread:.35,u_colorSeparation:.8,u_colorBands:0,u_grainIntensity:.1,u_grainSpeed:1,u_grainSize:160,u_grainBlendMode:1,u_grainAspect:0,u_grainComplexity:.6}},about:{name:"About Page",description:"Faster, more zoomed-in fog for about page",parameters:{u_zoom:2,u_noiseScale:3,u_octaves:3,u_lacunarity:2.2,u_gain:.4,u_turbulence:.35,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:12,u_detailAmount:.2,u_speed:.6,u_directionX:.3,u_directionY:.5,u_modulationSpeed:0,u_modulationIntensity:1,u_turbulenceModulation:0,u_zoomModulation:0,u_colorModulation:0,u_rotationModulation:0,u_softness:.35,u_contrast:1.1,u_brightness:1,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.5,u_colorSeparation:.7,u_colorBands:0,u_grainIntensity:.12,u_grainSpeed:1.2,u_grainSize:180,u_grainBlendMode:0,u_grainAspect:0,u_grainComplexity:.6}}};function G1(){return Object.keys(Wa)}class W1{constructor(e){this.shaderController=e,this.currentPage=null,this.pageConfigs=this.initializePageConfigs()}initializePageConfigs(){const e=()=>({type:"custom",description:"Renderer base defaults",parameters:{u_zoom:.3,u_noiseScale:.5,u_octaves:3,u_lacunarity:3,u_gain:.35,u_turbulence:.2,u_warpOctaves:2,u_ridgeAmount:0,u_detailScale:1,u_detailAmount:.1,u_speed:.0082,u_directionX:.5,u_directionY:.3,u_modulationSpeed:.4,u_modulationIntensity:12,u_turbulenceModulation:.24,u_zoomModulation:0,u_colorModulation:5,u_rotationModulation:.01,u_noiseScaleModulation:0,u_gainModulation:0,u_colorSpreadModulation:0,u_colorShiftModulation:0,u_softness:.2,u_contrast:.75,u_brightness:1.25,u_exposure:1,u_blackLevel:0,u_colorMix1:.5,u_colorMix2:.5,u_colorSpread:.66,u_colorSeparation:.3,u_colorBands:0,u_grainIntensity:1,u_grainSpeed:12.8,u_grainSize:2200,u_grainBlendMode:0,u_grainAspect:1,u_grainComplexity:.6}});return{index:e(),about:{type:"preset",preset:"about",description:"About page - Faster, zoomed fog"},works:e(),contact:e(),labs:{type:"preset",preset:"turbulent",description:"Labs page - Turbulent energy"},resume:{type:"preset",preset:"dreamyFog",description:"Resume page - Dreamy fog"},scholastic:{type:"preset",preset:"default",description:"Scholastic project - Default"},jpplus:{type:"preset",preset:"default",description:"JP Plus project - Default"},rowmark:{type:"preset",preset:"default",description:"Rowmark project - Default"},aave:{type:"preset",preset:"default",description:"Aave project - Default"},ipi:{type:"preset",preset:"default",description:"IPI project - Default"},wabash:{type:"preset",preset:"default",description:"Wabash project - Default"},"bright-future":{type:"preset",preset:"default",description:"Bright Future project - Default"},healpool:{type:"preset",preset:"default",description:"Healpool project - Default"},rentaru:{type:"preset",preset:"default",description:"Rentaru project - Default"},default:{type:"preset",preset:"default",description:"Fallback - Default fog"}}}getConfig(e){const t=this.pageConfigs[e]||this.pageConfigs.default,n=Wa.default.parameters;if(t.type==="preset"){const i=Wa[t.preset];return i?{...n,...i.parameters}:(console.warn(`Preset "${t.preset}" not found, using default`),{...n})}else if(t.type==="custom")return{...n,...t.parameters};return{...n}}transitionToPage(e,t=.6){console.log(`ConfigManager: Transitioning to "${e}" page`);const n=this.getConfig(e),i={u_zoom:n.u_zoom,u_noiseScale:n.u_noiseScale,u_octaves:n.u_octaves,u_lacunarity:n.u_lacunarity,u_gain:n.u_gain,u_turbulence:n.u_turbulence,u_warpOctaves:n.u_warpOctaves,u_ridgeAmount:n.u_ridgeAmount,u_detailScale:n.u_detailScale,u_detailAmount:n.u_detailAmount,u_speed:n.u_speed,u_directionX:n.u_directionX,u_directionY:n.u_directionY,u_modulationSpeed:n.u_modulationSpeed,u_modulationIntensity:n.u_modulationIntensity,u_turbulenceModulation:n.u_turbulenceModulation,u_zoomModulation:n.u_zoomModulation,u_colorModulation:n.u_colorModulation,u_rotationModulation:n.u_rotationModulation,u_noiseScaleModulation:n.u_noiseScaleModulation,u_gainModulation:n.u_gainModulation,u_colorSpreadModulation:n.u_colorSpreadModulation,u_colorShiftModulation:n.u_colorShiftModulation,u_softness:n.u_softness,u_contrast:n.u_contrast,u_brightness:n.u_brightness,u_exposure:n.u_exposure,u_blackLevel:n.u_blackLevel,u_colorMix1:n.u_colorMix1,u_colorMix2:n.u_colorMix2,u_colorSpread:n.u_colorSpread,u_colorSeparation:n.u_colorSeparation,u_colorBands:n.u_colorBands,u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity};this.shaderController.transitionTo(i,t),this.currentPage=e,console.log(`ConfigManager: Applied "${e}" configuration`)}shouldTransition(e){if(!this.currentPage)return!0;const t=this.pageConfigs[this.currentPage]||this.pageConfigs.default,n=this.pageConfigs[e]||this.pageConfigs.default;return t.type==="preset"&&n.type==="preset"?t.preset!==n.preset:!0}setPageConfig(e,t){this.pageConfigs[e]=t,console.log(`ConfigManager: Updated config for "${e}"`)}getAllConfigs(){return{...this.pageConfigs}}getCurrentPage(){return this.currentPage}resetToDefault(e=.6){this.transitionToPage("default",e)}}function X1(r){return new W1(r)}class q1{constructor(e=!1){this.enabled=e,this.fps=0,this.frameCount=0,this.lastTime=performance.now(),this.lastFpsUpdate=performance.now(),this.fpsHistory=[],this.maxHistoryLength=60,this.targetFps=60,this.lowFpsThreshold=30,this.statsElement=null,this.onLowPerformance=null,this.enabled&&this.createStatsDisplay()}createStatsDisplay(){this.statsElement=document.createElement("div"),this.statsElement.id="bg-performance-stats",this.statsElement.style.cssText=`
      position: fixed;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.75);
      color: #0f0;
      padding: 8px 12px;
      font-family: 'Courier New', monospace;
      font-size: 11px;
      border-radius: 4px;
      z-index: 9999;
      pointer-events: none;
      line-height: 1.4;
    `,document.body.appendChild(this.statsElement)}update(){if(!this.enabled)return;const e=performance.now();if(this.frameCount++,e>=this.lastFpsUpdate+500){const t=e-this.lastFpsUpdate;this.fps=Math.round(this.frameCount*1e3/t),this.frameCount=0,this.lastFpsUpdate=e,this.fpsHistory.push(this.fps),this.fpsHistory.length>this.maxHistoryLength&&this.fpsHistory.shift(),this.fps<this.lowFpsThreshold&&this.onLowPerformance&&this.onLowPerformance(this.fps),this.updateDisplay()}}updateDisplay(){if(!this.statsElement)return;const e=this.getAverageFps(),t=this.getMinFps();let n="#0f0";this.fps<30?n="#f00":this.fps<45&&(n="#ff0"),this.statsElement.style.color=n,this.statsElement.innerHTML=`
      <div><strong>Background Stats</strong></div>
      <div>FPS: ${this.fps}</div>
      <div>Avg: ${e}</div>
      <div>Min: ${t}</div>
    `}getAverageFps(){if(this.fpsHistory.length===0)return 0;const e=this.fpsHistory.reduce((t,n)=>t+n,0);return Math.round(e/this.fpsHistory.length)}getMinFps(){return this.fpsHistory.length===0?0:Math.min(...this.fpsHistory)}getFps(){return this.fps}getMetrics(){return{currentFps:this.fps,averageFps:this.getAverageFps(),minFps:this.getMinFps(),isLowPerformance:this.fps<this.lowFpsThreshold}}enable(){this.enabled||(this.enabled=!0,this.createStatsDisplay(),console.log("PerformanceMonitor: Enabled"))}disable(){this.enabled&&(this.enabled=!1,this.statsElement&&(this.statsElement.remove(),this.statsElement=null),console.log("PerformanceMonitor: Disabled"))}toggle(){this.enabled?this.disable():this.enable()}isEnabled(){return this.enabled}setLowPerformanceCallback(e){this.onLowPerformance=e}reset(){this.fps=0,this.frameCount=0,this.fpsHistory=[],this.lastTime=performance.now(),this.lastFpsUpdate=performance.now()}destroy(){this.statsElement&&(this.statsElement.remove(),this.statsElement=null),this.enabled=!1,this.onLowPerformance=null}static isDev(){return window.location.hostname==="localhost"||window.location.search.includes("debug=true")||window.location.search.includes("stats=true")}}function $1(r=!1){return new q1(r)}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */let Ho=class ac{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ac.nextNameID=ac.nextNameID||0,this.$name.id=`lil-gui-name-${++ac.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Y1=class extends Ho{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function ad(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const j1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:ad,toHexString:ad},Xa={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Z1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Xa.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Xa.toHexString(i)}},J1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Xa.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Xa.toHexString(i)}},K1=[j1,Xa,Z1,J1];function Q1(r){return K1.find(e=>e.match(r))}let eT=class extends Ho{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Q1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ad(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Hu=class extends Ho{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},tT=class extends Ho{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},s=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,u,h;const d=5,f=x=>{a=x.clientX,l=c=x.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",p)},_=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&p()}if(!o){const y=x.clientY-c;h-=y*this._step*this._arrowKeyMultiplier(x),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=x.clientY},p=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",p)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(m,x,y,v,E)=>(m-x)/(y-x)*(E-v)+v,t=m=>{const x=this.$slider.getBoundingClientRect();let y=e(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const x=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let p;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},nT=class extends Ho{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},iT=class extends Ho{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}};var rT=`.lil-gui {
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
}`;function sT(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let mm=!1,oT=class i0{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!mm&&a&&(sT(rT),mm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new nT(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new tT(this,e,t,n,i,s);case"boolean":return new Y1(this,e,t);case"string":return new iT(this,e,t);case"function":return new Hu(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new eT(this,e,t,n)}addFolder(e){const t=new i0({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Hu||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Hu)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};class gm{constructor(e){var t;if(this.backgroundManager=e,this.shaderController=e.getShaderController(),this.material=(t=e.getRenderer())==null?void 0:t.getMaterial(),!this.material){console.warn("DevGUI: Material not available");return}this.gui=null,this.folders={},this.params=this.createParamsProxy(),this.init()}static isDev(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.search.includes("debug=true")}createParamsProxy(){const e=this.material.uniforms;return{highlightColor:"#"+e.u_color1.value.getHexString(),midtoneColor:"#"+e.u_color2.value.getHexString(),lowlightColor:"#"+e.u_color3.value.getHexString(),baseColor:"#"+e.u_baseColor.value.getHexString(),zoom:e.u_zoom.value,noiseScale:e.u_noiseScale.value,octaves:e.u_octaves.value,lacunarity:e.u_lacunarity.value,gain:e.u_gain.value,turbulence:e.u_turbulence.value,warpOctaves:e.u_warpOctaves.value,ridgeAmount:e.u_ridgeAmount.value,detailScale:e.u_detailScale.value,detailAmount:e.u_detailAmount.value,speed:e.u_speed.value,directionX:e.u_directionX.value,directionY:e.u_directionY.value,modulationSpeed:e.u_modulationSpeed.value,modulationIntensity:e.u_modulationIntensity.value,turbulenceModulation:e.u_turbulenceModulation.value,zoomModulation:e.u_zoomModulation.value,colorModulation:e.u_colorModulation.value,rotationModulation:e.u_rotationModulation.value,noiseScaleModulation:e.u_noiseScaleModulation.value,gainModulation:e.u_gainModulation.value,colorSpreadModulation:e.u_colorSpreadModulation.value,colorShiftModulation:e.u_colorShiftModulation.value,softness:e.u_softness.value,contrast:e.u_contrast.value,brightness:e.u_brightness.value,exposure:e.u_exposure.value,blackLevel:e.u_blackLevel.value,colorMix1:e.u_colorMix1.value,colorMix2:e.u_colorMix2.value,colorSpread:e.u_colorSpread.value,colorSeparation:e.u_colorSeparation.value,colorBands:e.u_colorBands.value,grainIntensity:e.u_grainIntensity.value,grainSpeed:e.u_grainSpeed.value,grainSize:e.u_grainSize.value,grainBlendMode:e.u_grainBlendMode.value,grainAspect:e.u_grainAspect.value,grainComplexity:e.u_grainComplexity.value}}init(){this.gui=new oT({title:"🎨 Background Shader Controls",width:320}),this.gui.domElement.style.position="fixed",this.gui.domElement.style.top="10px",this.gui.domElement.style.right="10px",this.gui.domElement.style.zIndex="10000",this.addColorsFolder(),this.addNoiseFolder(),this.addAnimationFolder(),this.addOrganicModulationFolder(),this.addFilmGrainFolder(),this.addVisualQualityFolder(),this.addColorMixingFolder(),this.addPresetsFolder(),this.addPageConfigsFolder(),this.addPerformanceFolder(),this.addUtilitiesFolder(),this.addKeyboardShortcut(),console.log('🎨 DevGUI initialized - Press "G" to toggle')}addColorsFolder(){const e=this.gui.addFolder("🎨 Colors");this.folders.colors=e,e.addColor(this.params,"highlightColor").name("Highlight").onChange(t=>{this.shaderController.updateUniform("u_color1",new qe(t))}),e.addColor(this.params,"midtoneColor").name("Midtone").onChange(t=>{this.shaderController.updateUniform("u_color2",new qe(t))}),e.addColor(this.params,"lowlightColor").name("Lowlight").onChange(t=>{this.shaderController.updateUniform("u_color3",new qe(t))}),e.addColor(this.params,"baseColor").name("Base Color").onChange(t=>{this.shaderController.updateUniform("u_baseColor",new qe(t))}),e.close()}addNoiseFolder(){const e=this.gui.addFolder("🌫️ Noise Parameters");this.folders.noise=e,e.add(this.params,"zoom",.1,5,.1).name("Zoom").onChange(t=>{this.shaderController.updateUniform("u_zoom",t)}),e.add(this.params,"noiseScale",.5,10,.1).name("Noise Scale").onChange(t=>{this.shaderController.updateUniform("u_noiseScale",t)}),e.add(this.params,"octaves",1,8,1).name("Octaves").onChange(t=>{this.shaderController.updateUniform("u_octaves",t)}),e.add(this.params,"lacunarity",1,4,.1).name("Lacunarity").onChange(t=>{this.shaderController.updateUniform("u_lacunarity",t)}),e.add(this.params,"gain",.1,1,.05).name("Gain").onChange(t=>{this.shaderController.updateUniform("u_gain",t)}),e.add(this.params,"turbulence",0,2,.05).name("Turbulence").onChange(t=>{this.shaderController.updateUniform("u_turbulence",t)}),e.add(this.params,"warpOctaves",1,5,1).name("Warp Octaves").onChange(t=>{this.shaderController.updateUniform("u_warpOctaves",t)}),e.add(this.params,"ridgeAmount",0,1,.05).name("Ridge Amount").onChange(t=>{this.shaderController.updateUniform("u_ridgeAmount",t)}),e.add(this.params,"detailScale",1,20,.5).name("Detail Scale").onChange(t=>{this.shaderController.updateUniform("u_detailScale",t)}),e.add(this.params,"detailAmount",0,1,.05).name("Detail Amount").onChange(t=>{this.shaderController.updateUniform("u_detailAmount",t)}),e.close()}addAnimationFolder(){const e=this.gui.addFolder("⚡ Animation");this.folders.animation=e,e.add(this.params,"speed",1e-4,.25,1e-4).name("Speed").onChange(t=>{this.shaderController.updateUniform("u_speed",t)}),e.add(this.params,"directionX",-1,1,.05).name("Direction X").onChange(t=>{this.shaderController.updateUniform("u_directionX",t)}),e.add(this.params,"directionY",-1,1,.05).name("Direction Y").onChange(t=>{this.shaderController.updateUniform("u_directionY",t)}),e.close()}addOrganicModulationFolder(){const e=this.gui.addFolder("🌊 Organic Modulation");this.folders.organicModulation=e,e.add(this.params,"modulationSpeed",1e-4,1,1e-4).name("Global Speed").onChange(t=>{this.shaderController.updateUniform("u_modulationSpeed",t)}),e.add(this.params,"modulationIntensity",0,50,.01).name("Intensity").onChange(t=>{this.shaderController.updateUniform("u_modulationIntensity",t)}),e.add(this.params,"turbulenceModulation",0,10,.01).name("Turbulence Breathing").onChange(t=>{this.shaderController.updateUniform("u_turbulenceModulation",t)}),e.add(this.params,"zoomModulation",0,10,.01).name("Zoom Pulsing").onChange(t=>{this.shaderController.updateUniform("u_zoomModulation",t)}),e.add(this.params,"colorModulation",0,10,.01).name("Color Shifting").onChange(t=>{this.shaderController.updateUniform("u_colorModulation",t)}),e.add(this.params,"rotationModulation",0,10,.01).name("Flow Rotation").onChange(t=>{this.shaderController.updateUniform("u_rotationModulation",t)}),e.add(this.params,"noiseScaleModulation",0,10,.01).name("Noise Scale Pulse").onChange(t=>{this.shaderController.updateUniform("u_noiseScaleModulation",t)}),e.add(this.params,"gainModulation",0,10,.01).name("Gain Modulation").onChange(t=>{this.shaderController.updateUniform("u_gainModulation",t)}),e.add(this.params,"colorSpreadModulation",0,10,.01).name("Color Spread Flux").onChange(t=>{this.shaderController.updateUniform("u_colorSpreadModulation",t)}),e.add(this.params,"colorShiftModulation",0,10,.01).name("Palette Shift").onChange(t=>{this.shaderController.updateUniform("u_colorShiftModulation",t)}),e.close()}addFilmGrainFolder(){const e=this.gui.addFolder("🎬 Film Grain");this.folders.filmGrain=e,e.add(this.params,"grainIntensity",0,1,.01).name("Intensity").onChange(t=>{this.shaderController.updateUniform("u_grainIntensity",t)}),e.add(this.params,"grainSpeed",0,100,.01).name("Speed").onChange(t=>{this.shaderController.updateUniform("u_grainSpeed",t)}),e.add(this.params,"grainSize",50,2500,1).name("Size").onChange(t=>{this.shaderController.updateUniform("u_grainSize",t)}),e.add(this.params,"grainBlendMode",{Overlay:0,Multiply:1,Add:2,Screen:3}).name("Blend Mode").onChange(t=>{this.shaderController.updateUniform("u_grainBlendMode",t)}),e.add(this.params,"grainAspect",0,1,.01).name("Square Amount").onChange(t=>{this.shaderController.updateUniform("u_grainAspect",t)}),e.add(this.params,"grainComplexity",0,1,.01).name("Complexity").onChange(t=>{this.shaderController.updateUniform("u_grainComplexity",t)}),e.close()}addVisualQualityFolder(){const e=this.gui.addFolder("✨ Visual Quality");this.folders.visualQuality=e,e.add(this.params,"softness",0,1,.01).name("Softness").onChange(t=>{this.shaderController.updateUniform("u_softness",t)}),e.add(this.params,"contrast",.5,2,.05).name("Contrast").onChange(t=>{this.shaderController.updateUniform("u_contrast",t)}),e.add(this.params,"brightness",.5,1.5,.05).name("Brightness").onChange(t=>{this.shaderController.updateUniform("u_brightness",t)}),e.add(this.params,"exposure",.5,2,.05).name("Exposure").onChange(t=>{this.shaderController.updateUniform("u_exposure",t)}),e.add(this.params,"blackLevel",0,1,.01).name("Black Level").onChange(t=>{this.shaderController.updateUniform("u_blackLevel",t)}),e.close()}addColorMixingFolder(){const e=this.gui.addFolder("🎨 Color Mixing");this.folders.colorMixing=e,e.add(this.params,"colorMix1",0,1,.01).name("Mix 1 (Hi/Mid)").onChange(t=>{this.shaderController.updateUniform("u_colorMix1",t)}),e.add(this.params,"colorMix2",0,1,.01).name("Mix 2 (Result/Low)").onChange(t=>{this.shaderController.updateUniform("u_colorMix2",t)}),e.add(this.params,"colorSpread",0,1,.01).name("Color Spread").onChange(t=>{this.shaderController.updateUniform("u_colorSpread",t)}),e.add(this.params,"colorSeparation",0,1,.01).name("Color Separation").onChange(t=>{this.shaderController.updateUniform("u_colorSeparation",t)}),e.add(this.params,"colorBands",0,1,.01).name("Color Bands").onChange(t=>{this.shaderController.updateUniform("u_colorBands",t)}),e.close()}addPresetsFolder(){const e=this.gui.addFolder("💾 Presets");this.folders.presets=e;const t=G1(),n={};t.forEach(i=>{const s=Wa[i];n[s.name]=()=>{this.loadPreset(i)}}),Object.keys(n).forEach(i=>{e.add(n,i)}),e.close()}addPageConfigsFolder(){const e=this.gui.addFolder("📄 Page Configs");this.folders.pageConfigs=e;const t=this.backgroundManager.getConfigManager();if(!t){console.warn("ConfigManager not available");return}const n=t.getAllConfigs(),i=Object.keys(n).sort(),s={testPage:t.getCurrentPage()||"index"};e.add(s,"testPage",i).name("Test Page Config").onChange(c=>{console.log(`Testing page config: ${c}`),t.transitionToPage(c,.8),setTimeout(()=>{this.updateGUIFromUniforms()},850)});const o={current:t.getCurrentPage()||"none"},a=e.add(o,"current").name("Current Page").disable();setInterval(()=>{const c=t.getCurrentPage();c&&(o.current=c,a.updateDisplay())},500);const l={"Show All Configs":()=>{console.log("=== Page Configurations ==="),Object.entries(n).forEach(([c,u])=>{console.log(`${c}: ${u.description||u.type}`),u.type==="preset"&&console.log(`  - Uses preset: "${u.preset}"`)}),console.log("===========================")}};e.add(l,"Show All Configs"),e.close()}addPerformanceFolder(){const e=this.gui.addFolder("⚡ Performance");this.folders.performance=e;const t=this.backgroundManager.getPerformanceMonitor(),n=this.backgroundManager.getRenderer(),i={quality:n?n.getQuality():"high"};if(e.add(i,"quality",["low","medium","high"]).name("Quality Level").onChange(o=>{this.backgroundManager.setQuality(o)}),t){const o={fps:0,avgFps:0,minFps:0},a=e.add(o,"fps",0,120).name("Current FPS").disable().listen();e.add(o,"avgFps",0,120).name("Average FPS").disable().listen(),e.add(o,"minFps",0,120).name("Min FPS").disable().listen(),setInterval(()=>{const c=t.getMetrics();o.fps=c.currentFps,o.avgFps=c.averageFps,o.minFps=c.minFps;const u=a.domElement.querySelector("input");u&&(c.currentFps<30?u.style.color="#ff0000":c.currentFps<45?u.style.color="#ffff00":u.style.color="#00ff00")},500);const l={"Toggle Stats Overlay":()=>{t.toggle()},"Reset Stats":()=>{t.reset(),console.log("Performance stats reset")}};e.add(l,"Toggle Stats Overlay"),e.add(l,"Reset Stats")}const s={devicePixelRatio:window.devicePixelRatio.toFixed(2),rendererPixelRatio:n&&n.renderer?n.renderer.getPixelRatio().toFixed(2):"0"};e.add(s,"devicePixelRatio").name("Device Pixel Ratio").disable(),e.add(s,"rendererPixelRatio").name("Renderer Pixel Ratio").disable(),e.close()}addUtilitiesFolder(){const e=this.gui.addFolder("🛠️ Utilities");this.folders.utilities=e;const t={"Export Config":()=>this.exportConfig(),"Import Config":()=>this.importConfig(),"Reset to Default":()=>this.loadPreset("default"),"Copy Colors":()=>this.copyColors(),"Randomize Colors":()=>this.randomizeColors(),"Randomize Noise":()=>this.randomizeNoise(),"Randomize Color Mixing":()=>this.randomizeColorMixing()};Object.keys(t).forEach(n=>{e.add(t,n)}),e.open()}loadPreset(e){const t=Wa[e];if(!t){console.warn(`Preset "${e}" not found`);return}console.log(`Loading preset: ${t.name}`);const n=t.parameters;this.shaderController.transitionTo({u_zoom:n.u_zoom,u_noiseScale:n.u_noiseScale,u_octaves:n.u_octaves,u_lacunarity:n.u_lacunarity,u_gain:n.u_gain,u_turbulence:n.u_turbulence,u_warpOctaves:n.u_warpOctaves,u_ridgeAmount:n.u_ridgeAmount,u_detailScale:n.u_detailScale,u_detailAmount:n.u_detailAmount,u_speed:n.u_speed,u_directionX:n.u_directionX,u_directionY:n.u_directionY,u_modulationSpeed:n.u_modulationSpeed,u_modulationIntensity:n.u_modulationIntensity,u_turbulenceModulation:n.u_turbulenceModulation,u_zoomModulation:n.u_zoomModulation,u_colorModulation:n.u_colorModulation,u_rotationModulation:n.u_rotationModulation,u_noiseScaleModulation:n.u_noiseScaleModulation,u_gainModulation:n.u_gainModulation,u_colorSpreadModulation:n.u_colorSpreadModulation,u_colorShiftModulation:n.u_colorShiftModulation,u_softness:n.u_softness,u_contrast:n.u_contrast,u_brightness:n.u_brightness,u_exposure:n.u_exposure,u_blackLevel:n.u_blackLevel,u_colorMix1:n.u_colorMix1,u_colorMix2:n.u_colorMix2,u_colorSpread:n.u_colorSpread,u_colorSeparation:n.u_colorSeparation,u_colorBands:n.u_colorBands,u_grainIntensity:n.u_grainIntensity,u_grainSpeed:n.u_grainSpeed,u_grainSize:n.u_grainSize,u_grainBlendMode:n.u_grainBlendMode,u_grainAspect:n.u_grainAspect,u_grainComplexity:n.u_grainComplexity},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650)}updateGUIFromUniforms(){const e=this.material.uniforms;this.params.zoom=e.u_zoom.value,this.params.noiseScale=e.u_noiseScale.value,this.params.octaves=e.u_octaves.value,this.params.lacunarity=e.u_lacunarity.value,this.params.gain=e.u_gain.value,this.params.turbulence=e.u_turbulence.value,this.params.warpOctaves=e.u_warpOctaves.value,this.params.ridgeAmount=e.u_ridgeAmount.value,this.params.detailScale=e.u_detailScale.value,this.params.detailAmount=e.u_detailAmount.value,this.params.speed=e.u_speed.value,this.params.directionX=e.u_directionX.value,this.params.directionY=e.u_directionY.value,this.params.modulationSpeed=e.u_modulationSpeed.value,this.params.modulationIntensity=e.u_modulationIntensity.value,this.params.turbulenceModulation=e.u_turbulenceModulation.value,this.params.zoomModulation=e.u_zoomModulation.value,this.params.colorModulation=e.u_colorModulation.value,this.params.rotationModulation=e.u_rotationModulation.value,this.params.noiseScaleModulation=e.u_noiseScaleModulation.value,this.params.gainModulation=e.u_gainModulation.value,this.params.colorSpreadModulation=e.u_colorSpreadModulation.value,this.params.colorShiftModulation=e.u_colorShiftModulation.value,this.params.softness=e.u_softness.value,this.params.contrast=e.u_contrast.value,this.params.brightness=e.u_brightness.value,this.params.exposure=e.u_exposure.value,this.params.blackLevel=e.u_blackLevel.value,this.params.colorMix1=e.u_colorMix1.value,this.params.colorMix2=e.u_colorMix2.value,this.params.colorSpread=e.u_colorSpread.value,this.params.colorSeparation=e.u_colorSeparation.value,this.params.colorBands=e.u_colorBands.value,this.params.grainIntensity=e.u_grainIntensity.value,this.params.grainSpeed=e.u_grainSpeed.value,this.params.grainSize=e.u_grainSize.value,this.params.grainBlendMode=e.u_grainBlendMode.value,this.params.grainAspect=e.u_grainAspect.value,this.params.grainComplexity=e.u_grainComplexity.value,this.gui.controllers.forEach(t=>t.updateDisplay()),Object.values(this.folders).forEach(t=>{t.controllers.forEach(n=>n.updateDisplay())})}exportConfig(){const e=this.material.uniforms,t={colors:{highlight:"#"+e.u_color1.value.getHexString(),midtone:"#"+e.u_color2.value.getHexString(),lowlight:"#"+e.u_color3.value.getHexString(),base:"#"+e.u_baseColor.value.getHexString()},noise:{zoom:e.u_zoom.value,noiseScale:e.u_noiseScale.value,octaves:e.u_octaves.value,lacunarity:e.u_lacunarity.value,gain:e.u_gain.value,turbulence:e.u_turbulence.value,warpOctaves:e.u_warpOctaves.value,ridgeAmount:e.u_ridgeAmount.value,detailScale:e.u_detailScale.value,detailAmount:e.u_detailAmount.value},animation:{speed:e.u_speed.value,directionX:e.u_directionX.value,directionY:e.u_directionY.value},filmGrain:{intensity:e.u_grainIntensity.value,speed:e.u_grainSpeed.value,size:e.u_grainSize.value,blendMode:e.u_grainBlendMode.value,aspect:e.u_grainAspect.value,complexity:e.u_grainComplexity.value},visual:{softness:e.u_softness.value,contrast:e.u_contrast.value,brightness:e.u_brightness.value,exposure:e.u_exposure.value,blackLevel:e.u_blackLevel.value,colorMix1:e.u_colorMix1.value,colorMix2:e.u_colorMix2.value,colorSpread:e.u_colorSpread.value}},n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Configuration exported to clipboard!"),alert("Configuration copied to clipboard!")}).catch(i=>{console.error("Failed to copy:",i),console.log("Configuration JSON:",n),alert("Check console for configuration JSON")})}importConfig(){const e=prompt("Paste configuration JSON:");if(e)try{const t=JSON.parse(e);t.colors&&(t.colors.highlight&&(this.shaderController.updateUniform("u_color1",new qe(t.colors.highlight)),this.params.highlightColor=t.colors.highlight),t.colors.midtone&&(this.shaderController.updateUniform("u_color2",new qe(t.colors.midtone)),this.params.midtoneColor=t.colors.midtone),t.colors.lowlight&&(this.shaderController.updateUniform("u_color3",new qe(t.colors.lowlight)),this.params.lowlightColor=t.colors.lowlight),t.colors.base&&(this.shaderController.updateUniform("u_baseColor",new qe(t.colors.base)),this.params.baseColor=t.colors.base));const n={...t.noise&&Object.keys(t.noise).reduce((i,s)=>(i["u_"+s]=t.noise[s],i),{}),...t.animation&&Object.keys(t.animation).reduce((i,s)=>(i["u_"+s]=t.animation[s],i),{}),...t.visual&&Object.keys(t.visual).reduce((i,s)=>(i["u_"+s]=t.visual[s],i),{}),...t.filmGrain&&{u_grainIntensity:t.filmGrain.intensity,u_grainSpeed:t.filmGrain.speed,u_grainSize:t.filmGrain.size,u_grainBlendMode:t.filmGrain.blendMode,...t.filmGrain.aspect!==void 0?{u_grainAspect:t.filmGrain.aspect}:{},...t.filmGrain.complexity!==void 0?{u_grainComplexity:t.filmGrain.complexity}:{}}};this.shaderController.updateUniforms(n),this.updateGUIFromUniforms(),console.log("✅ Configuration imported successfully!"),alert("Configuration imported!")}catch(t){console.error("Failed to import configuration:",t),alert("Invalid JSON format")}}copyColors(){const e=this.material.uniforms,t={highlight:"#"+e.u_color1.value.getHexString(),midtone:"#"+e.u_color2.value.getHexString(),lowlight:"#"+e.u_color3.value.getHexString(),base:"#"+e.u_baseColor.value.getHexString()},n=JSON.stringify(t,null,2);navigator.clipboard.writeText(n).then(()=>{console.log("✅ Colors copied!",t),alert("Colors copied to clipboard!")})}randomizeColors(){const e=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),t={highlight:e(),midtone:e(),lowlight:e(),base:e()};this.shaderController.transitionTo({u_color1:new qe(t.highlight),u_color2:new qe(t.midtone),u_color3:new qe(t.lowlight),u_baseColor:new qe(t.base)},.6),setTimeout(()=>{this.params.highlightColor=t.highlight,this.params.midtoneColor=t.midtone,this.params.lowlightColor=t.lowlight,this.params.baseColor=t.base,this.updateGUIFromUniforms()},650),console.log("🎨 Randomized colors:",t)}randomizeNoise(){const e={zoom:Math.random()*1.5+.2,noiseScale:Math.random()*4+.5,octaves:Math.floor(Math.random()*3)+2,lacunarity:Math.random()*2+1.5,gain:Math.random()*.6+.3,turbulence:Math.random()*1,warpOctaves:Math.floor(Math.random()*3)+1,ridgeAmount:Math.random()*.8,detailScale:Math.random()*8+4,detailAmount:Math.random()*.3};this.shaderController.transitionTo({u_zoom:e.zoom,u_noiseScale:e.noiseScale,u_octaves:e.octaves,u_lacunarity:e.lacunarity,u_gain:e.gain,u_turbulence:e.turbulence,u_warpOctaves:e.warpOctaves,u_ridgeAmount:e.ridgeAmount,u_detailScale:e.detailScale,u_detailAmount:e.detailAmount},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🌫️ Randomized noise:",e)}randomizeColorMixing(){const e={colorMix1:Math.random(),colorMix2:Math.random(),colorSpread:Math.random(),colorSeparation:Math.random()*.6+.4,colorBands:Math.random()*.5};this.shaderController.transitionTo({u_colorMix1:e.colorMix1,u_colorMix2:e.colorMix2,u_colorSpread:e.colorSpread,u_colorSeparation:e.colorSeparation,u_colorBands:e.colorBands},.6),setTimeout(()=>{this.updateGUIFromUniforms()},650),console.log("🎨 Randomized color mixing:",e)}addKeyboardShortcut(){document.addEventListener("keydown",e=>{if(e.key==="g"||e.key==="G"){if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")return;this.gui._hidden?this.gui.show():this.gui.hide()}})}destroy(){this.gui&&(this.gui.destroy(),this.gui=null)}}function aT(r){return gm.isDev()?(console.log("DevGUI: Initializing..."),new gm(r)):(console.log("DevGUI: Not in development mode, skipping GUI"),null)}class lT{constructor(){this.renderer=null,this.shaderController=null,this.configManager=null,this.performanceMonitor=null,this.devGUI=null,this.isInitialized=!1}init(e="viewport"){console.log("Initializing custom shader background...");const t=window.location.hostname==="localhost"||window.location.search.includes("debug=true");this.performanceMonitor=$1(t&&window.location.search.includes("stats=true")),this.renderer=new H1(e,this.performanceMonitor);const n=this.renderer.getMaterial();return n?(this.shaderController=new V1(n),this.configManager=X1(this.shaderController),this.performanceMonitor&&this.performanceMonitor.setLowPerformanceCallback(i=>{console.warn(`Low performance detected: ${i} FPS`);const s=this.renderer.getQuality();s==="high"&&i<25?(console.log("Auto-downgrading to medium quality"),this.renderer.setQuality("medium")):s==="medium"&&i<20&&(console.log("Auto-downgrading to low quality"),this.renderer.setQuality("low"))}),this.isInitialized=!0,console.log("Background system initialized successfully")):console.warn("Background system initialization incomplete (fallback mode)"),this.renderer&&this.renderer.start(),this.devGUI=aT(this),this}fadeOut(e=.4){var n;const t=(n=this.renderer)==null?void 0:n.getCanvas();t&&(t.style.transition=`opacity ${e}s ease`,t.style.opacity="0")}fadeIn(e=.6,t=.66){var i;const n=(i=this.renderer)==null?void 0:i.getCanvas();n&&(n.style.transition=`opacity ${e}s ease`,n.style.opacity=t.toString())}transitionToPage(e,t=.6){if(!this.configManager){console.warn("ConfigManager not initialized"),this.fadeIn(t);return}if(!this.configManager.shouldTransition(e)){console.log(`No transition needed for ${e} - same config`),this.fadeIn(t);return}this.configManager.transitionToPage(e,t),this.fadeIn(t)}getShaderController(){return this.shaderController}getRenderer(){return this.renderer}getConfigManager(){return this.configManager}getPerformanceMonitor(){return this.performanceMonitor}getDevGUI(){return this.devGUI}setQuality(e){this.renderer&&this.renderer.setQuality(e)}getQuality(){return this.renderer?this.renderer.getQuality():"high"}destroy(){this.devGUI&&this.devGUI.destroy(),this.renderer&&this.renderer.stop(),this.isInitialized=!1,console.log("Background system destroyed")}}const Hc=new lT;We.registerPlugin(tt);function cT(r){const e=r.getBoundingClientRect(),n=(window.innerHeight||document.documentElement.clientHeight)*.8;return e.top<=n}const bo=new Map;function pf(){console.log("Setting up unified sequential reveal system"),uT();const r=We.utils.toArray(".fade-reveal").filter(t=>t.tagName.toLowerCase()!=="nav");if(r.length===0){console.log("No fade-reveal elements found");return}console.log(`Found ${r.length} fade-reveal elements`),hT(r).forEach((t,n)=>{dT(t,n)})}function uT(){document.querySelectorAll(".splitting-rows").forEach(n=>{n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting-rows")}),document.querySelectorAll(".splitting, [data-splitting].scroll-reveal").forEach(n=>{n.classList.contains("splitting-rows")||(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","splitting"))}),document.querySelectorAll("h1, h2, h3").forEach(n=>{!n.classList.contains("fade-reveal")&&!n.closest("nav")&&(n.classList.add("fade-reveal"),n.setAttribute("data-reveal-type","heading"))})}function hT(r){const e=[];let t=[],n=-1/0;const i=200;return r.forEach(s=>{const o=s.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop,l=o.top+a;l-n>i&&t.length>0?(e.push(t),t=[s]):t.push(s),n=l+o.height}),t.length>0&&e.push(t),e}function dT(r,e){const t=`group-${e}`;tt.create({trigger:r[0],start:"top 80%",end:"bottom 15%",onEnter:()=>_m(r,t),onLeaveBack:()=>fT(r,t),markers:!1}),cT(r[0])&&_m(r,t)}function _m(r,e){bo.has(e)&&bo.get(e).kill(),console.log(`Starting sequential reveal for ${e} with ${r.length} elements`);const t=We.timeline();r.forEach((n,i)=>{const s=n.getAttribute("data-reveal-type")||"default",o=pT(s,i);s==="splitting-rows"?t.call(()=>{n.classList.add("reveal"),n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o):s==="splitting"?t.call(()=>{n.classList.add("reveal"),n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o):t.call(()=>{n.classList.add("active"),n.style.removeProperty("opacity"),n.style.pointerEvents="auto"},null,o),i<r.length-1&&t.set({},{},"-=0.1")}),bo.set(e,t)}function fT(r,e){bo.has(e)&&(bo.get(e).kill(),bo.delete(e)),r.forEach(t=>{t.classList.remove("active","reveal")})}function pT(r,e){const t=e*.15;switch(r){case"heading":return t*.8;case"splitting-rows":return t*1.2;default:return t}}function r0(){console.log("Setting up video autoplay on scroll");const r=We.utils.toArray("video");if(r.length===0){console.log("No video elements found");return}console.log(`Found ${r.length} video elements`),r.forEach((e,t)=>{tt.create({trigger:e,start:"top 90%",end:"bottom 10%",toggleClass:"in-viewport",onEnter:()=>{const n=e.currentTime;setTimeout(()=>{e.paused||e.ended?(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Started playing video[${t}]`)):n===e.currentTime&&(e.currentTime=0,e.play(),e.parentNode.classList.remove("paused"),e.parentNode.classList.add("playing"),console.log(`Restarted stuck video[${t}]`))},1250)},markers:!1,once:!1})})}function s0(){console.log("Setting up auto-scroll containers");const r=We.utils.toArray(".auto-scroll");if(r.length===0){console.log("No auto-scroll containers found");return}console.log(`Found ${r.length} auto-scroll containers`),r.forEach((e,t)=>{const n=e.querySelector(".scroll-content");if(!n){console.warn(`Auto-scroll container ${t} is missing .scroll-content child element`);return}let i=n.clientHeight-e.clientHeight;if(i<=0){console.log(`Auto-scroll container ${t} has no scrollable content`);return}let s=We.to(n,{y:-i,duration:8,ease:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",paused:!0});tt.create({trigger:e,start:"top center",end:"bottom center",onEnter:()=>{console.log(`Starting auto-scroll for container ${t}`),s.restart()},onEnterBack:()=>s.restart(),markers:!1})})}(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function mT(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function vm(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ym(r,e,t){return e&&vm(r.prototype,e),t&&vm(r,t),r}function gT(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function xm(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Sm(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xm(Object(t),!0).forEach(function(n){gT(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):xm(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function o0(r,e){return vT(r)||xT(r,e)||a0(r,e)||bT()}function Tn(r){return _T(r)||yT(r)||a0(r)||ST()}function _T(r){if(Array.isArray(r))return ld(r)}function vT(r){if(Array.isArray(r))return r}function yT(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function xT(r,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var t=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return t}}function a0(r,e){if(r){if(typeof r=="string")return ld(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ld(r,e)}}function ld(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function ST(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cs(r,e){return Object.getOwnPropertyNames(Object(r)).reduce(function(t,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(t,n,s||i)},{})}function tl(r){return typeof r=="string"}function mf(r){return Array.isArray(r)}function Vl(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=cs(r),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(tl(t)||mf(t)?String(t):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(r.position)),e}function gf(r){var e=tl(r)||mf(r)?String(r):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Vc(r){return r!==null&&typeof r=="object"}function MT(r){return Vc(r)&&/^(1|3|11)$/.test(r.nodeType)}function wT(r){return typeof r=="number"&&r>-1&&r%1===0}function ET(r){return Vc(r)&&wT(r.length)}function Rs(r){return mf(r)?r:r==null?[]:ET(r)?Array.prototype.slice.call(r):[r]}function bm(r){var e=r;return tl(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?e=document.getElementById(r.trim().slice(1)):e=document.querySelectorAll(r)),Rs(e).reduce(function(t,n){return[].concat(Tn(t),Tn(Rs(n).filter(MT)))},[])}var TT=Object.entries,Tc="_splittype",Mi={},AT=0;function Ni(r,e,t){if(!Vc(r))return console.warn("[data.set] owner is not an object"),null;var n=r[Tc]||(r[Tc]=++AT),i=Mi[n]||(Mi[n]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(Mi[n]=Sm(Sm({},i),e)):e!==void 0&&(i[e]=t),t}function us(r,e){var t=Vc(r)?r[Tc]:null,n=t&&Mi[t]||{};return n}function l0(r){var e=r&&r[Tc];e&&(delete r[e],delete Mi[e])}function CT(){Object.keys(Mi).forEach(function(r){delete Mi[r]})}function RT(){TT(Mi).forEach(function(r){var e=o0(r,2),t=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(Mi[t]=null,delete Mi[t])})}function PT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=r?String(r):"";return t.trim().replace(/\s+/g," ").split(e)}var _f="\\ud800-\\udfff",c0="\\u0300-\\u036f\\ufe20-\\ufe23",u0="\\u20d0-\\u20f0",h0="\\ufe0e\\ufe0f",LT="[".concat(_f,"]"),cd="[".concat(c0).concat(u0,"]"),ud="\\ud83c[\\udffb-\\udfff]",DT="(?:".concat(cd,"|").concat(ud,")"),d0="[^".concat(_f,"]"),f0="(?:\\ud83c[\\udde6-\\uddff]){2}",p0="[\\ud800-\\udbff][\\udc00-\\udfff]",m0="\\u200d",g0="".concat(DT,"?"),_0="[".concat(h0,"]?"),IT="(?:"+m0+"(?:"+[d0,f0,p0].join("|")+")"+_0+g0+")*",OT=_0+g0+IT,NT="(?:".concat(["".concat(d0).concat(cd,"?"),cd,f0,p0,LT].join("|"),`
)`),UT=RegExp("".concat(ud,"(?=").concat(ud,")|").concat(NT).concat(OT),"g"),FT=[m0,_f,c0,u0,h0],kT=RegExp("[".concat(FT.join(""),"]"));function BT(r){return r.split("")}function v0(r){return kT.test(r)}function zT(r){return r.match(UT)||[]}function HT(r){return v0(r)?zT(r):BT(r)}function VT(r){return r==null?"":String(r)}function GT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=VT(r),r&&tl(r)&&!e&&v0(r)?HT(r):r.split(e)}function hd(r,e){var t=document.createElement(r);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=tl(i)?i.trim():i;s===null||s===""||(n==="children"?t.append.apply(t,Tn(Rs(s))):t.setAttribute(n,s))}),t}var vf={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function WT(r,e){e=cs(vf,e);var t=gf(e.types),n=e.tagName,i=r.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=PT(i).reduce(function(l,c,u,h){var d,f;return t.chars&&(f=GT(c).map(function(_){var p=hd(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Ni(p,"isChar",!0),a=[].concat(Tn(a),[p]),p})),t.words||t.lines?(d=hd(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?f:c}),Ni(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):f.forEach(function(_){s.appendChild(_)}),u<h.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:o,chars:a}}function y0(r,e){var t=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(t))return n;if(t===3&&/\S/.test(r.nodeValue))return WT(r,e);var i=Rs(r.childNodes);if(i.length&&(Ni(r,"isSplit",!0),!us(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,o=r.previousSibling,a=r.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";Ni(r,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,h){var d=y0(h,e),f=d.words,_=d.chars;return{words:[].concat(Tn(u.words),Tn(f)),chars:[].concat(Tn(u.chars),Tn(_))}},n)}function XT(r,e,t,n){if(!t.absolute)return{top:e?r.offsetTop:null};var i=r.offsetParent,s=o0(n,2),o=s[0],a=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var h=r.getBoundingClientRect(),d=h.width,f=h.height,_=h.x,p=h.y,g=p+a-c,m=_+o-l;return{width:d,height:f,top:g,left:m}}function x0(r){us(r).isWord?(l0(r),r.replaceWith.apply(r,Tn(r.childNodes))):Rs(r.children).forEach(function(e){return x0(e)})}var qT=function(){return document.createDocumentFragment()};function $T(r,e,t){var n=gf(e.types),i=e.tagName,s=r.getElementsByTagName("*"),o=[],a=[],l=null,c,u,h,d=[],f=r.parentElement,_=r.nextElementSibling,p=qT(),g=window.getComputedStyle(r),m=g.textAlign,x=parseFloat(g.fontSize),y=x*.2;return e.absolute&&(h={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,Ni(r,{cssWidth:r.style.width,cssHeight:r.style.height})),Rs(s).forEach(function(v){var E=v.parentElement===r,w=XT(v,E,e,t),M=w.width,A=w.height,b=w.top,S=w.left;/^br$/i.test(v.nodeName)||(n.lines&&E&&((l===null||b-l>=y)&&(l=b,o.push(a=[])),a.push(v)),e.absolute&&Ni(v,{top:b,left:S,width:M,height:A}))}),f&&f.removeChild(r),n.lines&&(d=o.map(function(v){var E=hd(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(m,"; width: 100%;")});Ni(E,"isLine",!0);var w={height:0,top:1e4};return p.appendChild(E),v.forEach(function(M,A,b){var S=us(M),N=S.isWordEnd,F=S.top,G=S.height,V=b[A+1];w.height=Math.max(w.height,G),w.top=Math.min(w.top,F),E.appendChild(M),N&&us(V).isWordStart&&E.append(" ")}),e.absolute&&Ni(E,{height:w.height,top:w.top}),E}),n.words||x0(p),r.replaceChildren(p)),e.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),Rs(s).forEach(function(v){var E=us(v),w=E.isLine,M=E.top,A=E.left,b=E.width,S=E.height,N=us(v.parentElement),F=!w&&N.isLine;v.style.top="".concat(F?M-N.top:M,"px"),v.style.left=w?"".concat(h.left,"px"):"".concat(A-(F?h.left:0),"px"),v.style.height="".concat(S,"px"),v.style.width=w?"".concat(h.width,"px"):"".concat(b,"px"),v.style.position="absolute"})),f&&(_?f.insertBefore(r,_):f.appendChild(r)),d}var Ks=cs(vf,{}),Mm=(function(){ym(r,null,[{key:"clearData",value:function(){CT()}},{key:"setDefaults",value:function(t){return Ks=cs(Ks,Vl(t)),vf}},{key:"revert",value:function(t){bm(t).forEach(function(n){var i=us(n),s=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",l0(n))})}},{key:"create",value:function(t,n){return new r(t,n)}},{key:"data",get:function(){return Mi}},{key:"defaults",get:function(){return Ks},set:function(t){Ks=cs(Ks,Vl(t))}}]);function r(e,t){mT(this,r),this.isSplit=!1,this.settings=cs(Ks,Vl(t)),this.elements=bm(e),this.split()}return ym(r,[{key:"split",value:function(t){var n=this;this.revert(),this.elements.forEach(function(o){Ni(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=cs(this.settings,Vl(t)));var s=gf(this.settings.types);s.none||(this.elements.forEach(function(o){Ni(o,"isRoot",!0);var a=y0(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(Tn(n.words),Tn(l)),n.chars=[].concat(Tn(n.chars),Tn(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=$T(o,n.settings,i);n.lines=[].concat(Tn(n.lines),Tn(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),RT())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r})();function dd(){console.log("Running splitText: centralizing all text splitting");function r(t){t.splitType&&t.splitType.revert(),t.querySelectorAll(".char").forEach(i=>{i.parentNode&&i.parentNode.removeChild(i)})}const e=document.querySelectorAll("[data-splitting], h1, h2");if(console.log(`Found ${e.length} elements for character splitting`),e.forEach(t=>{r(t);const n=t.classList.contains("title");n&&(t.setAttribute("data-position",t.style.position||""),t.setAttribute("data-display",t.style.display||""));const i=new Mm(t,{types:"chars",tagName:"span"});t.splitType=i,i.chars&&i.chars.forEach((s,o)=>{s.setAttribute("data-char",s.textContent),s.setAttribute("data-index",o),s.style.color="transparent",s.style.visibility="visible",s.id||(s.id=`char-${Math.random().toString(36).substring(2,9)}`)}),n&&t.parentElement.classList.contains("titles-wrapper")&&(t.style.position="absolute",t.style.display="block")}),document.querySelector(".splitting-rows")){const t=document.querySelectorAll(".splitting-rows");console.log(`Found ${t.length} elements for line splitting`),t.forEach(n=>{r(n),n.classList.remove("reveal");const i=new Mm(n,{types:"lines",tagName:"span",linesClass:"line"});n.splitType=i,i.lines&&i.lines.forEach((s,o)=>{s.setAttribute("data-line-index",o),s.style.opacity="0",setTimeout(()=>{s.style.opacity=""},50)})})}}function YT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lc={exports:{}};/*!
 * circletype 2.3.0
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2018 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */var jT=lc.exports,wm;function ZT(){return wm||(wm=1,(function(r,e){(function(t,n){r.exports=n()})(typeof self<"u"?self:jT,function(){return(function(t){function n(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};return n.m=t,n.c=i,n.d=function(s,o,a){n.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},n.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(o,"a",o),o},n.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},n.p="",n(n.s=29)})([function(t,n,i){var s=i(24)("wks"),o=i(12),a=i(1).Symbol,l=typeof a=="function";(t.exports=function(c){return s[c]||(s[c]=l&&a[c]||(l?a:o)("Symbol."+c))}).store=s},function(t,n){var i=t.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=i)},function(t,n){var i=t.exports={version:"2.5.6"};typeof __e=="number"&&(__e=i)},function(t,n,i){var s=i(4),o=i(11);t.exports=i(6)?function(a,l,c){return s.f(a,l,o(1,c))}:function(a,l,c){return a[l]=c,a}},function(t,n,i){var s=i(5),o=i(34),a=i(35),l=Object.defineProperty;n.f=i(6)?Object.defineProperty:function(c,u,h){if(s(c),u=a(u,!0),s(h),o)try{return l(c,u,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported!");return"value"in h&&(c[u]=h.value),c}},function(t,n,i){var s=i(10);t.exports=function(o){if(!s(o))throw TypeError(o+" is not an object!");return o}},function(t,n,i){t.exports=!i(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(t,n){var i={}.hasOwnProperty;t.exports=function(s,o){return i.call(s,o)}},function(t,n){var i=Math.ceil,s=Math.floor;t.exports=function(o){return isNaN(o=+o)?0:(o>0?s:i)(o)}},function(t,n){t.exports=function(i){if(i==null)throw TypeError("Can't call method on  "+i);return i}},function(t,n){t.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},function(t,n){t.exports=function(i,s){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:s}}},function(t,n){var i=0,s=Math.random();t.exports=function(o){return"Symbol(".concat(o===void 0?"":o,")_",(++i+s).toString(36))}},function(t,n){t.exports={}},function(t,n,i){var s=i(24)("keys"),o=i(12);t.exports=function(a){return s[a]||(s[a]=o(a))}},function(t,n){t.exports=!1},function(t,n,i){var s=i(1),o=i(2),a=i(3),l=i(19),c=i(20),u=function(h,d,f){var _,p,g,m,x=h&u.F,y=h&u.G,v=h&u.S,E=h&u.P,w=h&u.B,M=y?s:v?s[d]||(s[d]={}):(s[d]||{}).prototype,A=y?o:o[d]||(o[d]={}),b=A.prototype||(A.prototype={});y&&(f=d);for(_ in f)p=!x&&M&&M[_]!==void 0,g=(p?M:f)[_],m=w&&p?c(g,s):E&&typeof g=="function"?c(Function.call,g):g,M&&l(M,_,g,h&u.U),A[_]!=g&&a(A,_,m),E&&b[_]!=g&&(b[_]=g)};s.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=function(i){try{return!!i()}catch{return!0}}},function(t,n,i){var s=i(10),o=i(1).document,a=s(o)&&s(o.createElement);t.exports=function(l){return a?o.createElement(l):{}}},function(t,n,i){var s=i(1),o=i(3),a=i(7),l=i(12)("src"),c=Function.toString,u=(""+c).split("toString");i(2).inspectSource=function(h){return c.call(h)},(t.exports=function(h,d,f,_){var p=typeof f=="function";p&&(a(f,"name")||o(f,"name",d)),h[d]!==f&&(p&&(a(f,l)||o(f,l,h[d]?""+h[d]:u.join(String(d)))),h===s?h[d]=f:_?h[d]?h[d]=f:o(h,d,f):(delete h[d],o(h,d,f)))})(Function.prototype,"toString",function(){return typeof this=="function"&&this[l]||c.call(this)})},function(t,n,i){var s=i(36);t.exports=function(o,a,l){if(s(o),a===void 0)return o;switch(l){case 1:return function(c){return o.call(a,c)};case 2:return function(c,u){return o.call(a,c,u)};case 3:return function(c,u,h){return o.call(a,c,u,h)}}return function(){return o.apply(a,arguments)}}},function(t,n,i){var s=i(42),o=i(9);t.exports=function(a){return s(o(a))}},function(t,n){var i={}.toString;t.exports=function(s){return i.call(s).slice(8,-1)}},function(t,n,i){var s=i(8),o=Math.min;t.exports=function(a){return a>0?o(s(a),9007199254740991):0}},function(t,n,i){var s=i(2),o=i(1),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(l,c){return a[l]||(a[l]=c!==void 0?c:{})})("versions",[]).push({version:s.version,mode:i(15)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,i){var s=i(4).f,o=i(7),a=i(0)("toStringTag");t.exports=function(l,c,u){l&&!o(l=u?l:l.prototype,a)&&s(l,a,{configurable:!0,value:c})}},function(t,n,i){var s=i(9);t.exports=function(o){return Object(s(o))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=Math.PI/180;n.default=function(o){return o*s}},function(t,n,i){i(30);var s=i(54),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);t.exports=o.default},function(t,n,i){i(31),i(47),t.exports=i(2).Array.from},function(t,n,i){var s=i(32)(!0);i(33)(String,"String",function(o){this._t=String(o),this._i=0},function(){var o,a=this._t,l=this._i;return l>=a.length?{value:void 0,done:!0}:(o=s(a,l),this._i+=o.length,{value:o,done:!1})})},function(t,n,i){var s=i(8),o=i(9);t.exports=function(a){return function(l,c){var u,h,d=String(o(l)),f=s(c),_=d.length;return f<0||f>=_?a?"":void 0:(u=d.charCodeAt(f),u<55296||u>56319||f+1===_||(h=d.charCodeAt(f+1))<56320||h>57343?a?d.charAt(f):u:a?d.slice(f,f+2):h-56320+(u-55296<<10)+65536)}}},function(t,n,i){var s=i(15),o=i(16),a=i(19),l=i(3),c=i(13),u=i(37),h=i(26),d=i(46),f=i(0)("iterator"),_=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(g,m,x,y,v,E,w){u(x,m,y);var M,A,b,S=function(ne){if(!_&&ne in V)return V[ne];switch(ne){case"keys":case"values":return function(){return new x(this,ne)}}return function(){return new x(this,ne)}},N=m+" Iterator",F=v=="values",G=!1,V=g.prototype,Y=V[f]||V["@@iterator"]||v&&V[v],X=Y||S(v),q=v?F?S("entries"):X:void 0,B=m=="Array"&&V.entries||Y;if(B&&(b=d(B.call(new g)))!==Object.prototype&&b.next&&(h(b,N,!0),s||typeof b[f]=="function"||l(b,f,p)),F&&Y&&Y.name!=="values"&&(G=!0,X=function(){return Y.call(this)}),s&&!w||!_&&!G&&V[f]||l(V,f,X),c[m]=X,c[N]=p,v)if(M={values:F?X:S("values"),keys:E?X:S("keys"),entries:q},w)for(A in M)A in V||a(V,A,M[A]);else o(o.P+o.F*(_||G),m,M);return M}},function(t,n,i){t.exports=!i(6)&&!i(17)(function(){return Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a!=7})},function(t,n,i){var s=i(10);t.exports=function(o,a){if(!s(o))return o;var l,c;if(a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o))||typeof(l=o.valueOf)=="function"&&!s(c=l.call(o))||!a&&typeof(l=o.toString)=="function"&&!s(c=l.call(o)))return c;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i}},function(t,n,i){var s=i(38),o=i(11),a=i(26),l={};i(3)(l,i(0)("iterator"),function(){return this}),t.exports=function(c,u,h){c.prototype=s(l,{next:o(1,h)}),a(c,u+" Iterator")}},function(t,n,i){var s=i(5),o=i(39),a=i(25),l=i(14)("IE_PROTO"),c=function(){},u=function(){var h,d=i(18)("iframe"),f=a.length;for(d.style.display="none",i(45).appendChild(d),d.src="javascript:",h=d.contentWindow.document,h.open(),h.write("<script>document.F=Object<\/script>"),h.close(),u=h.F;f--;)delete u.prototype[a[f]];return u()};t.exports=Object.create||function(h,d){var f;return h!==null?(c.prototype=s(h),f=new c,c.prototype=null,f[l]=h):f=u(),d===void 0?f:o(f,d)}},function(t,n,i){var s=i(4),o=i(5),a=i(40);t.exports=i(6)?Object.defineProperties:function(l,c){o(l);for(var u,h=a(c),d=h.length,f=0;d>f;)s.f(l,u=h[f++],c[u]);return l}},function(t,n,i){var s=i(41),o=i(25);t.exports=Object.keys||function(a){return s(a,o)}},function(t,n,i){var s=i(7),o=i(21),a=i(43)(!1),l=i(14)("IE_PROTO");t.exports=function(c,u){var h,d=o(c),f=0,_=[];for(h in d)h!=l&&s(d,h)&&_.push(h);for(;u.length>f;)s(d,h=u[f++])&&(~a(_,h)||_.push(h));return _}},function(t,n,i){var s=i(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(o){return s(o)=="String"?o.split(""):Object(o)}},function(t,n,i){var s=i(21),o=i(23),a=i(44);t.exports=function(l){return function(c,u,h){var d,f=s(c),_=o(f.length),p=a(h,_);if(l&&u!=u){for(;_>p;)if((d=f[p++])!=d)return!0}else for(;_>p;p++)if((l||p in f)&&f[p]===u)return l||p||0;return!l&&-1}}},function(t,n,i){var s=i(8),o=Math.max,a=Math.min;t.exports=function(l,c){return l=s(l),l<0?o(l+c,0):a(l,c)}},function(t,n,i){var s=i(1).document;t.exports=s&&s.documentElement},function(t,n,i){var s=i(7),o=i(27),a=i(14)("IE_PROTO"),l=Object.prototype;t.exports=Object.getPrototypeOf||function(c){return c=o(c),s(c,a)?c[a]:typeof c.constructor=="function"&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?l:null}},function(t,n,i){var s=i(20),o=i(16),a=i(27),l=i(48),c=i(49),u=i(23),h=i(50),d=i(51);o(o.S+o.F*!i(53)(function(f){Array.from(f)}),"Array",{from:function(f){var _,p,g,m,x=a(f),y=typeof this=="function"?this:Array,v=arguments.length,E=v>1?arguments[1]:void 0,w=E!==void 0,M=0,A=d(x);if(w&&(E=s(E,v>2?arguments[2]:void 0,2)),A==null||y==Array&&c(A))for(_=u(x.length),p=new y(_);_>M;M++)h(p,M,w?E(x[M],M):x[M]);else for(m=A.call(x),p=new y;!(g=m.next()).done;M++)h(p,M,w?l(m,E,[g.value,M],!0):g.value);return p.length=M,p}})},function(t,n,i){var s=i(5);t.exports=function(o,a,l,c){try{return c?a(s(l)[0],l[1]):a(l)}catch(h){var u=o.return;throw u!==void 0&&s(u.call(o)),h}}},function(t,n,i){var s=i(13),o=i(0)("iterator"),a=Array.prototype;t.exports=function(l){return l!==void 0&&(s.Array===l||a[o]===l)}},function(t,n,i){var s=i(4),o=i(11);t.exports=function(a,l,c){l in a?s.f(a,l,o(0,c)):a[l]=c}},function(t,n,i){var s=i(52),o=i(0)("iterator"),a=i(13);t.exports=i(2).getIteratorMethod=function(l){if(l!=null)return l[o]||l["@@iterator"]||a[s(l)]}},function(t,n,i){var s=i(22),o=i(0)("toStringTag"),a=s((function(){return arguments})())=="Arguments",l=function(c,u){try{return c[u]}catch{}};t.exports=function(c){var u,h,d;return c===void 0?"Undefined":c===null?"Null":typeof(h=l(u=Object(c),o))=="string"?h:a?s(u):(d=s(u))=="Object"&&typeof u.callee=="function"?"Arguments":d}},function(t,n,i){var s=i(0)("iterator"),o=!1;try{var a=[7][s]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch{}t.exports=function(l,c){if(!c&&!o)return!1;var u=!1;try{var h=[7],d=h[s]();d.next=function(){return{done:u=!0}},h[s]=function(){return d},l(h)}catch{}return u}},function(t,n,i){function s(w){return w&&w.__esModule?w:{default:w}}function o(w,M){if(!(w instanceof M))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=(function(){function w(M,A){for(var b=0;b<A.length;b++){var S=A[b];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(M,S.key,S)}}return function(M,A,b){return A&&w(M.prototype,A),b&&w(M,b),M}})(),l=i(55),c=s(l),u=i(56),h=s(u),d=i(57),f=s(d),_=i(58),p=s(_),g=i(59),m=s(g),x=Math.PI,y=Math.max,v=Math.min,E=(function(){function w(M,A){o(this,w),this.element=M,this.originalHTML=this.element.innerHTML;var b=document.createElement("div"),S=document.createDocumentFragment();b.setAttribute("aria-label",M.innerText),b.style.position="relative",this.container=b,this._letters=(0,h.default)(M,A),this._letters.forEach(function(Y){return S.appendChild(Y)}),b.appendChild(S),this.element.innerHTML="",this.element.appendChild(b);var N=window.getComputedStyle(this.element),F=N.fontSize,G=N.lineHeight;this._fontSize=parseFloat(F),this._lineHeight=parseFloat(G)||this._fontSize,this._metrics=this._letters.map(c.default);var V=this._metrics.reduce(function(Y,X){return Y+X.width},0);this._minRadius=V/x/2+this._lineHeight,this._dir=1,this._forceWidth=!1,this._forceHeight=!0,this._radius=this._minRadius,this._invalidate()}return a(w,[{key:"radius",value:function(M){return M!==void 0?(this._radius=y(this._minRadius,M),this._invalidate(),this):this._radius}},{key:"dir",value:function(M){return M!==void 0?(this._dir=M,this._invalidate(),this):this._dir}},{key:"forceWidth",value:function(M){return M!==void 0?(this._forceWidth=M,this._invalidate(),this):this._forceWidth}},{key:"forceHeight",value:function(M){return M!==void 0?(this._forceHeight=M,this._invalidate(),this):this._forceHeight}},{key:"refresh",value:function(){return this._invalidate()}},{key:"destroy",value:function(){return this.element.innerHTML=this.originalHTML,this}},{key:"_invalidate",value:function(){var M=this;return cancelAnimationFrame(this._raf),this._raf=requestAnimationFrame(function(){M._layout()}),this}},{key:"_layout",value:function(){var M=this,A=this._radius,b=this._dir,S=b===-1?-A+this._lineHeight:A,N="center "+S/this._fontSize+"em",F=A-this._lineHeight,G=(0,m.default)(this._metrics,F),V=G.rotations,Y=G.θ;if(this._letters.forEach(function(B,ne){var I=B.style,ce=(-.5*Y+V[ne])*b,ye=-.5*M._metrics[ne].width/M._fontSize,we="translateX("+ye+"em) rotate("+ce+"deg)";I.position="absolute",I.bottom=b===-1?0:"auto",I.left="50%",I.transform=we,I.transformOrigin=N,I.webkitTransform=we,I.webkitTransformOrigin=N}),this._forceHeight){var X=Y>180?(0,f.default)(A,Y):(0,f.default)(F,Y)+this._lineHeight;this.container.style.height=X/this._fontSize+"em"}if(this._forceWidth){var q=(0,p.default)(A,v(180,Y));this.container.style.width=q/this._fontSize+"em"}return this}}]),w})();n.default=E},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(s){var o=s.getBoundingClientRect();return{height:o.height,left:o.left+window.pageXOffset,top:o.top+window.pageYOffset,width:o.width}}},function(t,n,i){function s(o){if(Array.isArray(o)){for(var a=0,l=Array(o.length);a<o.length;a++)l[a]=o[a];return l}return Array.from(o)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(o,a){var l=document.createElement("span"),c=o.innerText.trim();return(a?a(c):[].concat(s(c))).map(function(u){var h=l.cloneNode();return h.insertAdjacentHTML("afterbegin",u===" "?"&nbsp;":u),h})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a*(1-Math.cos((0,o.default)(l/2)))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(28),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return 2*a*Math.sin((0,o.default)(l/2))}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=i(60),o=(function(a){return a&&a.__esModule?a:{default:a}})(s);n.default=function(a,l){return a.reduce(function(c,u){var h=u.width,d=(0,o.default)(h/l);return{θ:c.θ+d,rotations:c.rotations.concat([c.θ+d/2])}},{θ:0,rotations:[]})}},function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0});var s=180/Math.PI;n.default=function(o){return o*s}}])})})(lc)),lc.exports}var JT=ZT();const KT=YT(JT);function yf(r="unknown"){if(console.log(`rotateTitles called from ${r} at ${new Date().toISOString()}`),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running title rotation immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){if((r.match(/-retry/g)||[]).length>5){console.log("GIVING UP on title rotation after multiple retries");return}console.log("SKIPPING TITLE ROTATION - Transition still active, will retry later"),setTimeout(()=>yf(r+"-retry"),100);return}console.log("RUNNING TITLE ROTATION - transition completed or initial load"),window.titleAnimationInterval&&(console.log(`Clearing existing titleAnimationInterval from ${r}`),clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null);const t=document.querySelectorAll("h2.titles-wrapper .title");if(!t||t.length===0){console.warn("No title elements found for rotation");return}t.forEach(a=>{a.style.position="absolute",a.style.display="block",a.classList.remove("active"),a.classList.add("hidden"),n(a.querySelectorAll(".char"))});function n(a){!a||a.length===0||a.forEach(l=>{l.classList.remove("reveal-char"),l.setAttribute("data-reset","true"),l.offsetWidth})}function i(a){return!a||a.length===0?null:(n(a),a.forEach((l,c)=>{setTimeout(()=>{l.removeAttribute("data-reset"),l.classList.add("reveal-char")},c*40)}),a[a.length-1])}const s=t[0];s&&(s.classList.remove("hidden"),s.classList.add("active"),s.offsetWidth,setTimeout(()=>{const a=s.querySelectorAll(".char");if(!a||a.length===0){o();return}const l=i(a);l?(l.addEventListener("animationend",function c(){o(),l.removeEventListener("animationend",c)}),setTimeout(()=>{window.titleAnimationInterval||o()},2e3)):o()},300));function o(){if(console.log("Starting title rotation"),window.titleAnimationInterval)return;const a=document.querySelectorAll("h2.titles-wrapper .title");let l=0;const c=()=>{const u=document.querySelectorAll("h2.titles-wrapper .title");if(!u||u.length===0){window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null);return}const h=document.querySelector("h2.titles-wrapper .title.active");h&&(h.classList.add("hidden"),h.classList.remove("active"),setTimeout(()=>{n(h.querySelectorAll(".char")),l=(l+1)%a.length;const d=a[l];d&&(d.style.position="absolute",d.style.display="block",n(d.querySelectorAll(".char")),setTimeout(()=>{d.classList.remove("hidden"),d.classList.add("active"),setTimeout(()=>{const f=d.querySelectorAll(".char");i(f)},300)},100))},400))};window.titleAnimationInterval=setInterval(()=>{c()},5e3)}}function Ac(){if(console.log("revealH1Characters called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running H1 animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING H1 ANIMATION - Transition still active, will retry later"),setTimeout(Ac,100);return}console.log("RUNNING H1 ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("h1");if(e.length===0){console.warn("No H1 elements found to animate");return}console.log(`Found ${e.length} H1 elements to animate`);const t=document.querySelector("#index")!==null;e.forEach(n=>{const i=n.querySelectorAll(".char");if(i.length>0)if(console.log(`Animating ${i.length} characters in H1`),i.forEach(s=>{s.classList.remove("reveal-char"),s.style.visibility="visible",s.style.color="transparent",s.offsetWidth}),n.style.opacity="1",n.style.pointerEvents="auto",t){console.log("Running homepage-specific H1 character animations"),i.forEach((o,a)=>{We.killTweensOf(o),o.classList.remove("reveal-char");const l=a<3?45*(a+1):45+a*35;setTimeout(()=>{o.classList.add("reveal-char"),o.offsetWidth},l)});const s=n.parentElement;s&&We.fromTo(s,{filter:"brightness(1.08)"},{filter:"brightness(1)",duration:.6,yoyo:!0,repeat:1,ease:"sine.inOut",onComplete:()=>We.set(s,{clearProps:"filter"})})}else i.forEach((s,o)=>{setTimeout(()=>{s.classList.add("reveal-char")},50+o*25)});else console.warn("H1 element doesn't have .char elements. Make sure splitText() was called first.")})}function Cc(){if(console.log("animateDataSplittingChars called"),document.querySelector("#loading-splash")!==null)console.log("Initial page load - running data-splitting animations immediately");else if(window.barbaTransitionActive||window.animationController&&!window.animationController.canRunAnimations()){console.log("SKIPPING DATA-SPLITTING ANIMATION - Transition still active, will retry later"),setTimeout(Cc,100);return}console.log("RUNNING DATA-SPLITTING ANIMATIONS - transition completed or initial load");const e=document.querySelectorAll("[data-splitting]:not(.titles-wrapper):not(.titles-wrapper *):not(h1):not(.splitting-rows)");if(e.length===0){console.log("No data-splitting elements found to animate");return}console.log(`Found ${e.length} data-splitting elements to animate`),e.forEach(t=>{const n=t.querySelectorAll(".char");n.length>0?(t.style.opacity="1",t.style.pointerEvents="auto",n.forEach((i,s)=>{i.classList.remove("reveal-char"),i.style.visibility="visible",i.style.color="transparent",i.offsetWidth,setTimeout(()=>{i.classList.add("reveal-char")},s*25)})):console.warn("Element with data-splitting doesn't have .char elements. Make sure splitText() was called first.")})}function S0(){setTimeout(()=>{const r=document.querySelector(".circular-text");r&&(new KT(r).radius(120),window.addEventListener("scroll",function(){r.style.transform=`rotate(${window.scrollY*-.15}deg)`}))},1e3)}function QT(){const r=document.getElementById("resume-nav-link");r&&(r.style.display="none");const e=document.querySelector('[data-project="scholastic"]');e&&(e.style.display="none")}function b0(){fetch("https://ipapi.co/json/").then(r=>r.json()).then(r=>{const e=r.region_code==="DC",t=r.region_code==="MD"&&["Montgomery","Prince George's"].includes(r.city)||r.region_code==="VA"&&["Arlington","Alexandria","Fairfax","Falls Church"].includes(r.city);(e||t)&&QT()}).catch(r=>console.error("Error:",r))}function eA(){document.querySelectorAll(".fade-in").forEach(e=>{e.addEventListener("animationend",()=>{e.classList.add("has-faded-in")},{once:!0})})}const tA=Dn;class Rc extends el{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const s=this,o=new $S(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(U,O){if(U.nodeType!==1)return;const L=v(U);let R=!1,Q=null;switch(U.nodeName){case"svg":O=_(U,O);break;case"style":s(U);break;case"g":O=_(U,O);break;case"path":O=_(U,O),U.hasAttribute("d")&&(Q=i(U));break;case"rect":O=_(U,O),Q=l(U);break;case"polygon":O=_(U,O),Q=c(U);break;case"polyline":O=_(U,O),Q=u(U);break;case"circle":O=_(U,O),Q=h(U);break;case"ellipse":O=_(U,O),Q=d(U);break;case"line":O=_(U,O),Q=f(U);break;case"defs":R=!0;break;case"use":O=_(U,O);const me=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),ee=U.viewportElement.getElementById(me);ee?n(ee,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+me);break}Q&&(O.fill!==void 0&&O.fill!=="none"&&Q.color.setStyle(O.fill,tA),w(Q,ce),F.push(Q),Q.userData={node:U,style:O});const de=U.childNodes;for(let $=0;$<de.length;$++){const me=de[$];R&&me.nodeName!=="style"&&me.nodeName!=="defs"||n(me,O)}L&&(V.pop(),V.length>0?ce.copy(V[V.length-1]):ce.identity())}function i(U){const O=new Yr,L=new ve,R=new ve,Q=new ve;let de=!0,$=!1;const me=U.getAttribute("d");if(me===""||me==="none")return null;const ee=me.match(/[a-df-z][^a-df-z]*/ig);for(let j=0,T=ee.length;j<T;j++){const se=ee[j],ie=se.charAt(0),z=se.slice(1).trim();de===!0&&($=!0,de=!1);let H;switch(ie){case"M":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x=H[k+0],L.y=H[k+1],R.x=L.x,R.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&Q.copy(L);break;case"H":H=g(z);for(let k=0,he=H.length;k<he;k++)L.x=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"V":H=g(z);for(let k=0,he=H.length;k<he;k++)L.y=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"L":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x=H[k+0],L.y=H[k+1],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"C":H=g(z);for(let k=0,he=H.length;k<he;k+=6)O.bezierCurveTo(H[k+0],H[k+1],H[k+2],H[k+3],H[k+4],H[k+5]),R.x=H[k+2],R.y=H[k+3],L.x=H[k+4],L.y=H[k+5],k===0&&$===!0&&Q.copy(L);break;case"S":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.bezierCurveTo(p(L.x,R.x),p(L.y,R.y),H[k+0],H[k+1],H[k+2],H[k+3]),R.x=H[k+0],R.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&Q.copy(L);break;case"Q":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.quadraticCurveTo(H[k+0],H[k+1],H[k+2],H[k+3]),R.x=H[k+0],R.y=H[k+1],L.x=H[k+2],L.y=H[k+3],k===0&&$===!0&&Q.copy(L);break;case"T":H=g(z);for(let k=0,he=H.length;k<he;k+=2){const D=p(L.x,R.x),C=p(L.y,R.y);O.quadraticCurveTo(D,C,H[k+0],H[k+1]),R.x=D,R.y=C,L.x=H[k+0],L.y=H[k+1],k===0&&$===!0&&Q.copy(L)}break;case"A":H=g(z,[3,4],7);for(let k=0,he=H.length;k<he;k+=7){if(H[k+5]==L.x&&H[k+6]==L.y)continue;const D=L.clone();L.x=H[k+5],L.y=H[k+6],R.x=L.x,R.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],D,L),k===0&&$===!0&&Q.copy(L)}break;case"m":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x+=H[k+0],L.y+=H[k+1],R.x=L.x,R.y=L.y,k===0?O.moveTo(L.x,L.y):O.lineTo(L.x,L.y),k===0&&Q.copy(L);break;case"h":H=g(z);for(let k=0,he=H.length;k<he;k++)L.x+=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"v":H=g(z);for(let k=0,he=H.length;k<he;k++)L.y+=H[k],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"l":H=g(z);for(let k=0,he=H.length;k<he;k+=2)L.x+=H[k+0],L.y+=H[k+1],R.x=L.x,R.y=L.y,O.lineTo(L.x,L.y),k===0&&$===!0&&Q.copy(L);break;case"c":H=g(z);for(let k=0,he=H.length;k<he;k+=6)O.bezierCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3],L.x+H[k+4],L.y+H[k+5]),R.x=L.x+H[k+2],R.y=L.y+H[k+3],L.x+=H[k+4],L.y+=H[k+5],k===0&&$===!0&&Q.copy(L);break;case"s":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.bezierCurveTo(p(L.x,R.x),p(L.y,R.y),L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),R.x=L.x+H[k+0],R.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&Q.copy(L);break;case"q":H=g(z);for(let k=0,he=H.length;k<he;k+=4)O.quadraticCurveTo(L.x+H[k+0],L.y+H[k+1],L.x+H[k+2],L.y+H[k+3]),R.x=L.x+H[k+0],R.y=L.y+H[k+1],L.x+=H[k+2],L.y+=H[k+3],k===0&&$===!0&&Q.copy(L);break;case"t":H=g(z);for(let k=0,he=H.length;k<he;k+=2){const D=p(L.x,R.x),C=p(L.y,R.y);O.quadraticCurveTo(D,C,L.x+H[k+0],L.y+H[k+1]),R.x=D,R.y=C,L.x=L.x+H[k+0],L.y=L.y+H[k+1],k===0&&$===!0&&Q.copy(L)}break;case"a":H=g(z,[3,4],7);for(let k=0,he=H.length;k<he;k+=7){if(H[k+5]==0&&H[k+6]==0)continue;const D=L.clone();L.x+=H[k+5],L.y+=H[k+6],R.x=L.x,R.y=L.y,o(O,H[k],H[k+1],H[k+2],H[k+3],H[k+4],D,L),k===0&&$===!0&&Q.copy(L)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(L.copy(Q),O.currentPath.currentPoint.copy(L),de=!0);break;default:console.warn(se)}$=!1}return O}function s(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let O=0;O<U.sheet.cssRules.length;O++){const L=U.sheet.cssRules[O];if(L.type!==1)continue;const R=L.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<R.length;Q++){const de=Object.fromEntries(Object.entries(L.style).filter(([,$])=>$!==""));G[R[Q]]=Object.assign(G[R[Q]]||{},de)}}}function o(U,O,L,R,Q,de,$,me){if(O==0||L==0){U.lineTo(me.x,me.y);return}R=R*Math.PI/180,O=Math.abs(O),L=Math.abs(L);const ee=($.x-me.x)/2,j=($.y-me.y)/2,T=Math.cos(R)*ee+Math.sin(R)*j,se=-Math.sin(R)*ee+Math.cos(R)*j;let ie=O*O,z=L*L;const H=T*T,k=se*se,he=H/ie+k/z;if(he>1){const $e=Math.sqrt(he);O=$e*O,L=$e*L,ie=O*O,z=L*L}const D=ie*k+z*H,C=(ie*z-D)/D;let te=Math.sqrt(Math.max(0,C));Q===de&&(te=-te);const le=te*O*se/L,fe=-te*L*T/O,pe=Math.cos(R)*le-Math.sin(R)*fe+($.x+me.x)/2,Ee=Math.sin(R)*le+Math.cos(R)*fe+($.y+me.y)/2,be=a(1,0,(T-le)/O,(se-fe)/L),Te=a((T-le)/O,(se-fe)/L,(-T-le)/O,(-se-fe)/L)%(Math.PI*2);U.currentPath.absellipse(pe,Ee,O,L,be,be+Te,de===0,R)}function a(U,O,L,R){const Q=U*L+O*R,de=Math.sqrt(U*U+O*O)*Math.sqrt(L*L+R*R);let $=Math.acos(Math.max(-1,Math.min(1,Q/de)));return U*R-O*L<0&&($=-$),$}function l(U){const O=y(U.getAttribute("x")||0),L=y(U.getAttribute("y")||0),R=y(U.getAttribute("rx")||U.getAttribute("ry")||0),Q=y(U.getAttribute("ry")||U.getAttribute("rx")||0),de=y(U.getAttribute("width")),$=y(U.getAttribute("height")),me=1-.551915024494,ee=new Yr;return ee.moveTo(O+R,L),ee.lineTo(O+de-R,L),(R!==0||Q!==0)&&ee.bezierCurveTo(O+de-R*me,L,O+de,L+Q*me,O+de,L+Q),ee.lineTo(O+de,L+$-Q),(R!==0||Q!==0)&&ee.bezierCurveTo(O+de,L+$-Q*me,O+de-R*me,L+$,O+de-R,L+$),ee.lineTo(O+R,L+$),(R!==0||Q!==0)&&ee.bezierCurveTo(O+R*me,L+$,O,L+$-Q*me,O,L+$-Q),ee.lineTo(O,L+Q),(R!==0||Q!==0)&&ee.bezierCurveTo(O,L+Q*me,O+R*me,L,O+R,L),ee}function c(U){function O(de,$,me){const ee=y($),j=y(me);Q===0?R.moveTo(ee,j):R.lineTo(ee,j),Q++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Yr;let Q=0;return U.getAttribute("points").replace(L,O),R.currentPath.autoClose=!0,R}function u(U){function O(de,$,me){const ee=y($),j=y(me);Q===0?R.moveTo(ee,j):R.lineTo(ee,j),Q++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,R=new Yr;let Q=0;return U.getAttribute("points").replace(L,O),R.currentPath.autoClose=!1,R}function h(U){const O=y(U.getAttribute("cx")||0),L=y(U.getAttribute("cy")||0),R=y(U.getAttribute("r")||0),Q=new So;Q.absarc(O,L,R,0,Math.PI*2);const de=new Yr;return de.subPaths.push(Q),de}function d(U){const O=y(U.getAttribute("cx")||0),L=y(U.getAttribute("cy")||0),R=y(U.getAttribute("rx")||0),Q=y(U.getAttribute("ry")||0),de=new So;de.absellipse(O,L,R,Q,0,Math.PI*2);const $=new Yr;return $.subPaths.push(de),$}function f(U){const O=y(U.getAttribute("x1")||0),L=y(U.getAttribute("y1")||0),R=y(U.getAttribute("x2")||0),Q=y(U.getAttribute("y2")||0),de=new Yr;return de.moveTo(O,L),de.lineTo(R,Q),de.currentPath.autoClose=!1,de}function _(U,O){O=Object.assign({},O);let L={};if(U.hasAttribute("class")){const $=U.getAttribute("class").split(/\s/).filter(Boolean).map(me=>me.trim());for(let me=0;me<$.length;me++)L=Object.assign(L,G["."+$[me]])}U.hasAttribute("id")&&(L=Object.assign(L,G["#"+U.getAttribute("id")]));function R($,me,ee){ee===void 0&&(ee=function(T){return T.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),T}),U.hasAttribute($)&&(O[me]=ee(U.getAttribute($))),L[$]&&(O[me]=ee(L[$])),U.style&&U.style[$]!==""&&(O[me]=ee(U.style[$]))}function Q($){return Math.max(0,Math.min(1,y($)))}function de($){return Math.max(0,y($))}return R("fill","fill"),R("fill-opacity","fillOpacity",Q),R("fill-rule","fillRule"),R("opacity","opacity",Q),R("stroke","stroke"),R("stroke-opacity","strokeOpacity",Q),R("stroke-width","strokeWidth",de),R("stroke-linejoin","strokeLineJoin"),R("stroke-linecap","strokeLineCap"),R("stroke-miterlimit","strokeMiterLimit",de),R("visibility","visibility"),O}function p(U,O){return U-(O-U)}function g(U,O,L){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const R={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,de=1,$=2,me=3;let ee=Q,j=!0,T="",se="";const ie=[];function z(D,C,te){const le=new SyntaxError('Unexpected character "'+D+'" at index '+C+".");throw le.partial=te,le}function H(){T!==""&&(se===""?ie.push(Number(T)):ie.push(Number(T)*Math.pow(10,Number(se)))),T="",se=""}let k;const he=U.length;for(let D=0;D<he;D++){if(k=U[D],Array.isArray(O)&&O.includes(ie.length%L)&&R.FLAGS.test(k)){ee=de,T=k,H();continue}if(ee===Q){if(R.WHITESPACE.test(k))continue;if(R.DIGIT.test(k)||R.SIGN.test(k)){ee=de,T=k;continue}if(R.POINT.test(k)){ee=$,T=k;continue}R.COMMA.test(k)&&(j&&z(k,D,ie),j=!0)}if(ee===de){if(R.DIGIT.test(k)){T+=k;continue}if(R.POINT.test(k)){T+=k,ee=$;continue}if(R.EXP.test(k)){ee=me;continue}R.SIGN.test(k)&&T.length===1&&R.SIGN.test(T[0])&&z(k,D,ie)}if(ee===$){if(R.DIGIT.test(k)){T+=k;continue}if(R.EXP.test(k)){ee=me;continue}R.POINT.test(k)&&T[T.length-1]==="."&&z(k,D,ie)}if(ee===me){if(R.DIGIT.test(k)){se+=k;continue}if(R.SIGN.test(k)){if(se===""){se+=k;continue}se.length===1&&R.SIGN.test(se)&&z(k,D,ie)}}R.WHITESPACE.test(k)?(H(),ee=Q,j=!1):R.COMMA.test(k)?(H(),ee=Q,j=!0):R.SIGN.test(k)?(H(),ee=de,T=k):R.POINT.test(k)?(H(),ee=$,T=k):z(k,D,ie)}return H(),ie}const m=["mm","cm","in","pt","pc","px"],x={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(U){let O="px";if(typeof U=="string"||U instanceof String)for(let R=0,Q=m.length;R<Q;R++){const de=m[R];if(U.endsWith(de)){O=de,U=U.substring(0,U.length-de.length);break}}let L;return O==="px"&&t.defaultUnit!=="px"?L=x.in[t.defaultUnit]/t.defaultDPI:(L=x[O][t.defaultUnit],L<0&&(L=x[O].in*t.defaultDPI)),L*parseFloat(U)}function v(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const O=E(U);return V.length>0&&O.premultiply(V[V.length-1]),ce.copy(O),V.push(O),O}function E(U){const O=new Qe,L=Y;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const R=y(U.getAttribute("x")),Q=y(U.getAttribute("y"));O.translate(R,Q)}if(U.hasAttribute("transform")){const R=U.getAttribute("transform").split(")");for(let Q=R.length-1;Q>=0;Q--){const de=R[Q].trim();if(de==="")continue;const $=de.indexOf("("),me=de.length;if($>0&&$<me){const ee=de.slice(0,$),j=g(de.slice($+1));switch(L.identity(),ee){case"translate":if(j.length>=1){const T=j[0];let se=0;j.length>=2&&(se=j[1]),L.translate(T,se)}break;case"rotate":if(j.length>=1){let T=0,se=0,ie=0;T=j[0]*Math.PI/180,j.length>=3&&(se=j[1],ie=j[2]),X.makeTranslation(-se,-ie),q.makeRotation(T),B.multiplyMatrices(q,X),X.makeTranslation(se,ie),L.multiplyMatrices(X,B)}break;case"scale":if(j.length>=1){const T=j[0];let se=T;j.length>=2&&(se=j[1]),L.scale(T,se)}break;case"skewX":j.length===1&&L.set(1,Math.tan(j[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":j.length===1&&L.set(1,0,0,Math.tan(j[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":j.length===6&&L.set(j[0],j[2],j[4],j[1],j[3],j[5],0,0,1);break}}O.premultiply(L)}}return O}function w(U,O){function L($){I.set($.x,$.y,1).applyMatrix3(O),$.set(I.x,I.y)}function R($){const me=$.xRadius,ee=$.yRadius,j=Math.cos($.aRotation),T=Math.sin($.aRotation),se=new K(me*j,me*T,0),ie=new K(-ee*T,ee*j,0),z=se.applyMatrix3(O),H=ie.applyMatrix3(O),k=Y.set(z.x,H.x,0,z.y,H.y,0,0,0,1),he=X.copy(k).invert(),te=q.copy(he).transpose().multiply(he).elements,le=N(te[0],te[1],te[4]),fe=Math.sqrt(le.rt1),pe=Math.sqrt(le.rt2);if($.xRadius=1/fe,$.yRadius=1/pe,$.aRotation=Math.atan2(le.sn,le.cs),!(($.aEndAngle-$.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const be=X.set(fe,0,0,0,pe,0,0,0,1),Te=q.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),$e=be.multiply(Te).multiply(k),Se=Me=>{const{x:Xe,y:ze}=new K(Math.cos(Me),Math.sin(Me),0).applyMatrix3($e);return Math.atan2(ze,Xe)};$.aStartAngle=Se($.aStartAngle),$.aEndAngle=Se($.aEndAngle),M(O)&&($.aClockwise=!$.aClockwise)}}function Q($){const me=b(O),ee=S(O);$.xRadius*=me,$.yRadius*=ee;const j=me>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);$.aRotation+=j,M(O)&&($.aStartAngle*=-1,$.aEndAngle*=-1,$.aClockwise=!$.aClockwise)}const de=U.subPaths;for(let $=0,me=de.length;$<me;$++){const j=de[$].curves;for(let T=0;T<j.length;T++){const se=j[T];se.isLineCurve?(L(se.v1),L(se.v2)):se.isCubicBezierCurve?(L(se.v0),L(se.v1),L(se.v2),L(se.v3)):se.isQuadraticBezierCurve?(L(se.v0),L(se.v1),L(se.v2)):se.isEllipseCurve&&(ne.set(se.aX,se.aY),L(ne),se.aX=ne.x,se.aY=ne.y,A(O)?R(se):Q(se))}}}function M(U){const O=U.elements;return O[0]*O[4]-O[1]*O[3]<0}function A(U){const O=U.elements,L=O[0]*O[3]+O[1]*O[4];if(L===0)return!1;const R=b(U),Q=S(U);return Math.abs(L/(R*Q))>Number.EPSILON}function b(U){const O=U.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function S(U){const O=U.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function N(U,O,L){let R,Q,de,$,me;const ee=U+L,j=U-L,T=Math.sqrt(j*j+4*O*O);return ee>0?(R=.5*(ee+T),me=1/R,Q=U*me*L-O*me*O):ee<0?Q=.5*(ee-T):(R=.5*T,Q=-.5*T),j>0?de=j+T:de=j-T,Math.abs(de)>2*Math.abs(O)?(me=-2*O/de,$=1/Math.sqrt(1+me*me),de=me*$):Math.abs(O)===0?(de=1,$=0):(me=-.5*de/O,de=1/Math.sqrt(1+me*me),$=me*de),j>0&&(me=de,de=-$,$=me),{rt1:R,rt2:Q,cs:de,sn:$}}const F=[],G={},V=[],Y=new Qe,X=new Qe,q=new Qe,B=new Qe,ne=new ve,I=new K,ce=new Qe,ye=new DOMParser().parseFromString(e,"image/svg+xml");return n(ye.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:ye.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function s(p,g,m,x){const y=p.x,v=g.x,E=m.x,w=x.x,M=p.y,A=g.y,b=m.y,S=x.y,N=(w-E)*(M-b)-(S-b)*(y-E),F=(v-y)*(M-b)-(A-M)*(y-E),G=(S-b)*(v-y)-(w-E)*(A-M),V=N/G,Y=F/G;if(G===0&&N!==0||V<=0||V>=1||Y<0||Y>1)return null;if(N===0&&G===0){for(let X=0;X<2;X++)if(o(X===0?m:x,p,g),i.loc==n.ORIGIN){const q=X===0?m:x;return{x:q.x,y:q.y,t:i.t}}else if(i.loc==n.BETWEEN){const q=+(y+i.t*(v-y)).toPrecision(10),B=+(M+i.t*(A-M)).toPrecision(10);return{x:q,y:B,t:i.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?m:x,p,g),i.loc==n.ORIGIN){const ne=B===0?m:x;return{x:ne.x,y:ne.y,t:i.t}}const X=+(y+V*(v-y)).toPrecision(10),q=+(M+V*(A-M)).toPrecision(10);return{x:X,y:q,t:V}}}function o(p,g,m){const x=m.x-g.x,y=m.y-g.y,v=p.x-g.x,E=p.y-g.y,w=x*E-v*y;if(p.x===g.x&&p.y===g.y){i.loc=n.ORIGIN,i.t=0;return}if(p.x===m.x&&p.y===m.y){i.loc=n.DESTINATION,i.t=1;return}if(w<-Number.EPSILON){i.loc=n.LEFT;return}if(w>Number.EPSILON){i.loc=n.RIGHT;return}if(x*v<0||y*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(x*x+y*y)<Math.sqrt(v*v+E*E)){i.loc=n.BEYOND;return}let M;x!==0?M=v/x:M=E/y,i.loc=n.BETWEEN,i.t=M}function a(p,g){const m=[],x=[];for(let y=1;y<p.length;y++){const v=p[y-1],E=p[y];for(let w=1;w<g.length;w++){const M=g[w-1],A=g[w],b=s(v,E,M,A);b!==null&&m.find(S=>S.t<=b.t+Number.EPSILON&&S.t>=b.t-Number.EPSILON)===void 0&&(m.push(b),x.push(new ve(b.x,b.y)))}}return x}function l(p,g,m){const x=new ve;g.getCenter(x);const y=[];return m.forEach(v=>{v.boundingBox.containsPoint(x)&&a(p,v.points).forEach(w=>{y.push({identifier:v.identifier,isCW:v.isCW,point:w})})}),y.sort((v,E)=>v.point.x-E.point.x),y}function c(p,g,m,x,y){(y==null||y==="")&&(y="nonzero");const v=new ve;p.boundingBox.getCenter(v);const E=[new ve(m,v.y),new ve(x,v.y)],w=l(E,p.boundingBox,g);w.sort((F,G)=>F.point.x-G.point.x);const M=[],A=[];w.forEach(F=>{F.identifier===p.identifier?M.push(F):A.push(F)});const b=M[0].point.x,S=[];let N=0;for(;N<A.length&&A[N].point.x<b;)S.length>0&&S[S.length-1]===A[N].identifier?S.pop():S.push(A[N].identifier),N++;if(S.push(p.identifier),y==="evenodd"){const F=S.length%2===0,G=S[S.length-2];return{identifier:p.identifier,isHole:F,for:G}}else if(y==="nonzero"){let F=!0,G=null,V=null;for(let Y=0;Y<S.length;Y++){const X=S[Y];F?(V=g[X].isCW,F=!1,G=X):V!==g[X].isCW&&(V=g[X].isCW,F=!0)}return{identifier:p.identifier,isHole:F,for:G}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let u=999999999,h=-999999999,d=e.subPaths.map(p=>{const g=p.getPoints();let m=-999999999,x=999999999,y=-999999999,v=999999999;for(let E=0;E<g.length;E++){const w=g[E];w.y>m&&(m=w.y),w.y<x&&(x=w.y),w.x>y&&(y=w.x),w.x<v&&(v=w.x)}return h<=y&&(h=y+1),u>=v&&(u=v-1),{curves:p.curves,points:g,isCW:xs.isClockWise(g),identifier:-1,boundingBox:new nb(new ve(v,x),new ve(y,m))}});d=d.filter(p=>p.points.length>1);for(let p=0;p<d.length;p++)d[p].identifier=p;const f=d.map(p=>c(p,d,u,h,e.userData?e.userData.style.fillRule:void 0)),_=[];return d.forEach(p=>{if(!f[p.identifier].isHole){const m=new Aa;m.curves=p.curves,f.filter(y=>y.isHole&&y.for===p.identifier).forEach(y=>{const v=d[y.identifier],E=new So;E.curves=v.curves,m.holes.push(E)}),_.push(m)}}),_}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){const s=[],o=[],a=[];if(Rc.pointsToStrokeWithBuffers(e,t,n,i,s,o,a)===0)return null;const l=new lr;return l.setAttribute("position",new pi(s,3)),l.setAttribute("normal",new pi(o,3)),l.setAttribute("uv",new pi(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,o,a,l){const c=new ve,u=new ve,h=new ve,d=new ve,f=new ve,_=new ve,p=new ve,g=new ve,m=new ve,x=new ve,y=new ve,v=new ve,E=new ve,w=new ve,M=new ve,A=new ve,b=new ve;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=j(e);const S=e.length;if(S<2)return 0;const N=e[0].equals(e[S-1]);let F,G=e[0],V;const Y=t.strokeWidth/2,X=1/(S-1);let q=0,B,ne,I,ce,ye=!1,we=0,U=l*3,O=l*2;L(e[0],e[1],c).multiplyScalar(Y),g.copy(e[0]).sub(c),m.copy(e[0]).add(c),x.copy(g),y.copy(m);for(let T=1;T<S;T++){F=e[T],T===S-1?N?V=e[1]:V=void 0:V=e[T+1];const se=c;if(L(G,F,se),h.copy(se).multiplyScalar(Y),v.copy(F).sub(h),E.copy(F).add(h),B=q+X,ne=!1,V!==void 0){L(F,V,u),h.copy(u).multiplyScalar(Y),w.copy(F).sub(h),M.copy(F).add(h),I=!0,h.subVectors(V,G),se.dot(h)<0&&(I=!1),T===1&&(ye=I),h.subVectors(V,F),h.normalize();const ie=Math.abs(se.dot(h));if(ie>Number.EPSILON){const z=Y/ie;h.multiplyScalar(-z),d.subVectors(F,G),f.copy(d).setLength(z).add(h),A.copy(f).negate();const H=f.length(),k=d.length();d.divideScalar(k),_.subVectors(V,F);const he=_.length();switch(_.divideScalar(he),d.dot(A)<k&&_.dot(A)<he&&(ne=!0),b.copy(f).add(F),A.add(F),ce=!1,ne?I?(M.copy(A),E.copy(A)):(w.copy(A),v.copy(A)):de(),t.strokeLineJoin){case"bevel":$(I,ne,B);break;case"round":me(I,ne),I?Q(F,v,w,B,0):Q(F,M,E,B,1);break;case"miter":case"miter-clip":default:const D=Y*t.strokeMiterLimit/H;if(D<1)if(t.strokeLineJoin!=="miter-clip"){$(I,ne,B);break}else me(I,ne),I?(_.subVectors(b,v).multiplyScalar(D).add(v),p.subVectors(b,w).multiplyScalar(D).add(w),R(v,B,0),R(_,B,0),R(F,B,.5),R(F,B,.5),R(_,B,0),R(p,B,0),R(F,B,.5),R(p,B,0),R(w,B,0)):(_.subVectors(b,E).multiplyScalar(D).add(E),p.subVectors(b,M).multiplyScalar(D).add(M),R(E,B,1),R(_,B,1),R(F,B,.5),R(F,B,.5),R(_,B,1),R(p,B,1),R(F,B,.5),R(p,B,1),R(M,B,1));else ne?(I?(R(m,q,1),R(g,q,0),R(b,B,0),R(m,q,1),R(b,B,0),R(A,B,1)):(R(m,q,1),R(g,q,0),R(b,B,1),R(g,q,0),R(A,B,0),R(b,B,1)),I?w.copy(b):M.copy(b)):I?(R(v,B,0),R(b,B,0),R(F,B,.5),R(F,B,.5),R(b,B,0),R(w,B,0)):(R(E,B,1),R(b,B,1),R(F,B,.5),R(F,B,.5),R(b,B,1),R(M,B,1)),ce=!0;break}}else de()}else de();!N&&T===S-1&&ee(e[0],x,y,I,!0,q),q=B,G=F,g.copy(w),m.copy(M)}if(!N)ee(F,v,E,I,!1,B);else if(ne&&s){let T=b,se=A;ye!==I&&(T=A,se=b),I?(ce||ye)&&(se.toArray(s,0),se.toArray(s,9),ce&&T.toArray(s,3)):(ce||!ye)&&(se.toArray(s,3),se.toArray(s,9),ce&&T.toArray(s,0))}return we;function L(T,se,ie){return ie.subVectors(se,T),ie.set(-ie.y,ie.x).normalize()}function R(T,se,ie){s&&(s[U]=T.x,s[U+1]=T.y,s[U+2]=0,o&&(o[U]=0,o[U+1]=0,o[U+2]=1),U+=3,a&&(a[O]=se,a[O+1]=ie,O+=2)),we+=3}function Q(T,se,ie,z,H){c.copy(se).sub(T).normalize(),u.copy(ie).sub(T).normalize();let k=Math.PI;const he=c.dot(u);Math.abs(he)<1&&(k=Math.abs(Math.acos(he))),k/=n,h.copy(se);for(let D=0,C=n-1;D<C;D++)d.copy(h).rotateAround(T,k),R(h,z,H),R(d,z,H),R(T,z,.5),h.copy(d);R(d,z,H),R(ie,z,H),R(T,z,.5)}function de(){R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(E,B,1)}function $(T,se,ie){se?T?(R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(A,B,1),R(v,ie,0),R(w,ie,0),R(A,ie,.5)):(R(m,q,1),R(g,q,0),R(E,B,1),R(g,q,0),R(A,B,0),R(E,B,1),R(E,ie,1),R(A,ie,0),R(M,ie,1)):T?(R(v,ie,0),R(w,ie,0),R(F,ie,.5)):(R(E,ie,1),R(M,ie,0),R(F,ie,.5))}function me(T,se){se&&(T?(R(m,q,1),R(g,q,0),R(v,B,0),R(m,q,1),R(v,B,0),R(A,B,1),R(v,q,0),R(F,B,.5),R(A,B,1),R(F,B,.5),R(w,q,0),R(A,B,1)):(R(m,q,1),R(g,q,0),R(E,B,1),R(g,q,0),R(A,B,0),R(E,B,1),R(E,q,1),R(A,B,0),R(F,B,.5),R(F,B,.5),R(A,B,0),R(M,q,1)))}function ee(T,se,ie,z,H,k){switch(t.strokeLineCap){case"round":H?Q(T,ie,se,k,.5):Q(T,se,ie,k,.5);break;case"square":if(H)c.subVectors(se,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T),z?(h.toArray(s,3),d.toArray(s,0),d.toArray(s,9)):(h.toArray(s,3),a[7]===1?d.toArray(s,9):h.toArray(s,9),d.toArray(s,0));else{c.subVectors(ie,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),d.subVectors(u,c).add(T);const he=s.length;z?(h.toArray(s,he-3),d.toArray(s,he-6),d.toArray(s,he-12)):(d.toArray(s,he-6),h.toArray(s,he-3),d.toArray(s,he-12))}break}}function j(T){let se=!1;for(let z=1,H=T.length-1;z<H;z++)if(T[z].distanceTo(T[z+1])<i){se=!0;break}if(!se)return T;const ie=[];ie.push(T[0]);for(let z=1,H=T.length-1;z<H;z++)T[z].distanceTo(T[z+1])>=i&&ie.push(T[z]);return ie.push(T[T.length-1]),ie}}}function nA(r){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function co(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Em=Array.prototype.forEach,Qo=Array.prototype.slice,_e={BREAK:{},extend:function(e){return this.each(Qo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(Qo.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=Qo.call(arguments);return function(){for(var t=Qo.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Em&&e.forEach&&e.forEach===Em)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Qo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e})(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},iA=[{litmus:_e.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:co},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:co},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:co},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:co}}},{litmus:_e.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:_e.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:_e.isObject,conversions:{RGBA_OBJ:{read:function(e){return _e.isNumber(e.r)&&_e.isNumber(e.g)&&_e.isNumber(e.b)&&_e.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return _e.isNumber(e.r)&&_e.isNumber(e.g)&&_e.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return _e.isNumber(e.h)&&_e.isNumber(e.s)&&_e.isNumber(e.v)&&_e.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return _e.isNumber(e.h)&&_e.isNumber(e.s)&&_e.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ea=void 0,Gl=void 0,fd=function(){Gl=!1;var e=arguments.length>1?_e.toArray(arguments):arguments[0];return _e.each(iA,function(t){if(t.litmus(e))return _e.each(t.conversions,function(n,i){if(ea=n.read(e),Gl===!1&&ea!==!1)return Gl=ea,ea.conversionName=i,ea.conversion=n,_e.BREAK}),_e.BREAK}),Gl},Tm=void 0,Pc={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Tm=t*8)|e&~(255<<Tm)}},rA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},wi=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ei=(function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}})(),Fr=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Br=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},zr=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},rn=(function(){function r(){if(wi(this,r),this.__state=fd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ei(r,[{key:"toString",value:function(){return co(this)}},{key:"toHexString",value:function(){return co(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r})();function xf(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(rn.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(rn.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Sf(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(rn.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(rn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}rn.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Pc.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")_e.extend(r.__state,Pc.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};rn.recalculateHSV=function(r){var e=Pc.rgb_to_hsv(r.r,r.g,r.b);_e.extend(r.__state,{s:e.s,v:e.v}),_e.isNaN(e.h)?_e.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};rn.COMPONENTS=["r","g","b","h","s","v","hex","a"];xf(rn.prototype,"r",2);xf(rn.prototype,"g",1);xf(rn.prototype,"b",0);Sf(rn.prototype,"h");Sf(rn.prototype,"s");Sf(rn.prototype,"v");Object.defineProperty(rn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(rn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Pc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ds=(function(){function r(e,t){wi(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ei(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r})(),sA={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},M0={};_e.each(sA,function(r,e){_e.each(r,function(t){M0[t]=e})});var oA=/(\d+(\.\d+)?)px/;function Ti(r){if(r==="0"||_e.isUndefined(r))return 0;var e=r.match(oA);return _e.isNull(e)?0:parseFloat(e[1])}var ae={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;_e.isUndefined(s)&&(s=!0),_e.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=M0[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;_e.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}_e.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),ae},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),ae},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ae},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return ae},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ti(t["border-left-width"])+Ti(t["border-right-width"])+Ti(t["padding-left"])+Ti(t["padding-right"])+Ti(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ti(t["border-top-width"])+Ti(t["border-bottom-width"])+Ti(t["padding-top"])+Ti(t["padding-bottom"])+Ti(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},w0=(function(r){Br(e,r);function e(t,n){wi(this,e);var i=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return ae.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ei(e,[{key:"setValue",value:function(n){var i=Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Ds),aA=(function(r){Br(e,r);function e(t,n,i){wi(this,e);var s=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),_e.isArray(o)){var l={};_e.each(o,function(c){l[c]=c}),o=l}return _e.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),ae.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ei(e,[{key:"setValue",value:function(n){var i=Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return ae.isActive(this.__select)?this:(this.__select.value=this.getValue(),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(Ds),lA=(function(r){Br(e,r);function e(t,n){wi(this,e);var i=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),ae.bind(i.__input,"keyup",o),ae.bind(i.__input,"change",o),ae.bind(i.__input,"blur",a),ae.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ei(e,[{key:"updateDisplay",value:function(){return ae.isActive(this.__input)||(this.__input.value=this.getValue()),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Ds);function Am(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var E0=(function(r){Br(e,r);function e(t,n,i){wi(this,e);var s=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,_e.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Am(s.__impliedStep),s}return Ei(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Am(n),this}}]),e})(Ds);function cA(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Lc=(function(r){Br(e,r);function e(t,n,i){wi(this,e);var s=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var _=parseFloat(o.__input.value);_e.isNaN(_)||o.setValue(_)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(_){var p=a-_.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=_.clientY}function d(){ae.unbind(window,"mousemove",h),ae.unbind(window,"mouseup",d),c()}function f(_){ae.bind(window,"mousemove",h),ae.bind(window,"mouseup",d),a=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),ae.bind(s.__input,"change",l),ae.bind(s.__input,"blur",u),ae.bind(s.__input,"mousedown",f),ae.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ei(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():cA(this.getValue(),this.__precision),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(E0);function Cm(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var pd=(function(r){Br(e,r);function e(t,n,i,s,o){wi(this,e);var a=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),ae.bind(a.__background,"mousedown",c),ae.bind(a.__background,"touchstart",d),ae.addClass(a.__background,"slider"),ae.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),ae.bind(window,"mousemove",u),ae.bind(window,"mouseup",h),u(p)}function u(p){p.preventDefault();var g=l.__background.getBoundingClientRect();return l.setValue(Cm(p.clientX,g.left,g.right,l.__min,l.__max)),!1}function h(){ae.unbind(window,"mousemove",u),ae.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(p){p.touches.length===1&&(ae.bind(window,"touchmove",f),ae.bind(window,"touchend",_),f(p))}function f(p){var g=p.touches[0].clientX,m=l.__background.getBoundingClientRect();l.setValue(Cm(g,m.left,m.right,l.__min,l.__max))}function _(){ae.unbind(window,"touchmove",f),ae.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ei(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(E0),T0=(function(r){Br(e,r);function e(t,n,i){wi(this,e);var s=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,ae.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),ae.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ei(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(Ds),md=(function(r){Br(e,r);function e(t,n){wi(this,e);var i=zr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new rn(i.getValue()),i.__temp=new rn(0);var s=i;i.domElement=document.createElement("div"),ae.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",ae.bind(i.__input,"keydown",function(p){p.keyCode===13&&h.call(this)}),ae.bind(i.__input,"blur",h),ae.bind(i.__selector,"mousedown",function(){ae.addClass(this,"drag").bind(window,"mouseup",function(){ae.removeClass(s.__selector,"drag")})}),ae.bind(i.__selector,"touchstart",function(){ae.addClass(this,"drag").bind(window,"touchend",function(){ae.removeClass(s.__selector,"drag")})});var o=document.createElement("div");_e.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),_e.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),_e.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),_e.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),_e.extend(o.style,{width:"100%",height:"100%",background:"none"}),Rm(o,"top","rgba(0,0,0,0)","#000"),_e.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),hA(i.__hue_field),_e.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),ae.bind(i.__saturation_field,"mousedown",a),ae.bind(i.__saturation_field,"touchstart",a),ae.bind(i.__field_knob,"mousedown",a),ae.bind(i.__field_knob,"touchstart",a),ae.bind(i.__hue_field,"mousedown",l),ae.bind(i.__hue_field,"touchstart",l);function a(p){f(p),ae.bind(window,"mousemove",f),ae.bind(window,"touchmove",f),ae.bind(window,"mouseup",c),ae.bind(window,"touchend",c)}function l(p){_(p),ae.bind(window,"mousemove",_),ae.bind(window,"touchmove",_),ae.bind(window,"mouseup",u),ae.bind(window,"touchend",u)}function c(){ae.unbind(window,"mousemove",f),ae.unbind(window,"touchmove",f),ae.unbind(window,"mouseup",c),ae.unbind(window,"touchend",c),d()}function u(){ae.unbind(window,"mousemove",_),ae.unbind(window,"touchmove",_),ae.unbind(window,"mouseup",u),ae.unbind(window,"touchend",u),d()}function h(){var p=fd(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function f(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__saturation_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientX,y=m.clientY,v=(x-g.left)/(g.right-g.left),E=1-(y-g.top)/(g.bottom-g.top);return E>1?E=1:E<0&&(E=0),v>1?v=1:v<0&&(v=0),s.__color.v=E,s.__color.s=v,s.setValue(s.__color.toOriginal()),!1}function _(p){p.type.indexOf("touch")===-1&&p.preventDefault();var g=s.__hue_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientY,y=1-(x-g.top)/(g.bottom-g.top);return y>1?y=1:y<0&&(y=0),s.__color.h=y*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ei(e,[{key:"updateDisplay",value:function(){var n=fd(this.getValue());if(n!==!1){var i=!1;_e.each(rn.COMPONENTS,function(a){if(!_e.isUndefined(n[a])&&!_e.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&_e.extend(this.__color.__state,n)}_e.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;_e.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Rm(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),_e.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e})(Ds),uA=["-moz-","-o-","-webkit-","-ms-",""];function Rm(r,e,t,n){r.style.background="",_e.each(uA,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function hA(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var dA={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},fA=`<div id="dg-save" class="dg dialogue">

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

</div>`,pA=function(e,t){var n=e[t];return _e.isArray(arguments[2])||_e.isObject(arguments[2])?new aA(e,t,arguments[2]):_e.isNumber(n)?_e.isNumber(arguments[2])&&_e.isNumber(arguments[3])?_e.isNumber(arguments[4])?new pd(e,t,arguments[2],arguments[3],arguments[4]):new pd(e,t,arguments[2],arguments[3]):_e.isNumber(arguments[4])?new Lc(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Lc(e,t,{min:arguments[2],max:arguments[3]}):_e.isString(n)?new lA(e,t):_e.isFunction(n)?new T0(e,t,""):_e.isBoolean(n)?new w0(e,t):null};function mA(r){setTimeout(r,1e3/60)}var gA=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||mA,_A=(function(){function r(){wi(this,r),this.backgroundElement=document.createElement("div"),_e.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ae.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),_e.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ae.bind(this.backgroundElement,"click",function(){e.hide()})}return Ei(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),_e.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ae.unbind(t.domElement,"webkitTransitionEnd",i),ae.unbind(t.domElement,"transitionend",i),ae.unbind(t.domElement,"oTransitionEnd",i)};ae.bind(this.domElement,"webkitTransitionEnd",n),ae.bind(this.domElement,"transitionend",n),ae.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ae.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ae.getHeight(this.domElement)/2+"px"}}]),r})(),vA=nA(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);dA.inject(vA);var Pm="dg",Lm=72,Dm=20,qa="Default",ha=(function(){try{return!!window.localStorage}catch{return!1}})(),Ca=void 0,Im=!0,no=void 0,Vu=!1,A0=[],Ct=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ae.addClass(this.domElement,Pm),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=_e.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=_e.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),_e.isUndefined(n.load)?n.load={preset:qa}:n.preset&&(n.load.preset=n.preset),_e.isUndefined(n.parent)&&n.hideable&&A0.push(this),n.resizable=_e.isUndefined(n.parent)&&n.resizable,n.autoPlace&&_e.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=ha&&localStorage.getItem(io(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,bA(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,vd(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?ae.addClass(t.__ul,r.CLASS_CLOSED):ae.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){ha&&(i=d,d?ae.bind(window,"unload",s):ae.unbind(window,"unload",s),localStorage.setItem(io(t,"isLocal"),d))}}}),_e.isUndefined(n.parent)){if(this.closed=n.closed||!1,ae.addClass(this.domElement,r.CLASS_MAIN),ae.makeSelectable(this.domElement,!1),ha&&i){t.useLocalStorage=!0;var a=localStorage.getItem(io(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,ae.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(ae.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ae.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ae.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);ae.addClass(l,"controller-name"),o=bf(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};ae.addClass(this.__ul,r.CLASS_CLOSED),ae.addClass(o,"title"),ae.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(_e.isUndefined(n.parent)&&(Im&&(no=document.createElement("div"),ae.addClass(no,Pm),ae.addClass(no,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(no),Im=!1),no.appendChild(this.domElement),ae.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||vd(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ae.bind(window,"resize",this.__resizeHandler),ae.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ae.bind(this.__ul,"transitionend",this.__resizeHandler),ae.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&SA(this),s=function(){ha&&localStorage.getItem(io(t,"isLocal"))==="true"&&localStorage.setItem(io(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,_e.defer(function(){h.width-=1})}n.parent||u()};Ct.toggleHide=function(){Vu=!Vu,_e.each(A0,function(r){r.domElement.style.display=Vu?"none":""})};Ct.CLASS_AUTO_PLACE="a";Ct.CLASS_AUTO_PLACE_CONTAINER="ac";Ct.CLASS_MAIN="main";Ct.CLASS_CONTROLLER_ROW="cr";Ct.CLASS_TOO_TALL="taller-than-window";Ct.CLASS_CLOSED="closed";Ct.CLASS_CLOSE_BUTTON="close-button";Ct.CLASS_CLOSE_TOP="close-top";Ct.CLASS_CLOSE_BOTTOM="close-bottom";Ct.CLASS_DRAG="drag";Ct.DEFAULT_WIDTH=245;Ct.TEXT_CLOSED="Close Controls";Ct.TEXT_OPEN="Open Controls";Ct._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Lm||r.keyCode===Lm)&&Ct.toggleHide()};ae.bind(window,"keydown",Ct._keydownHandler,!1);_e.extend(Ct.prototype,{add:function(e,t){return Ra(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ra(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;_e.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&no.removeChild(this.domElement);var e=this;_e.each(this.__folders,function(t){e.removeFolder(t)}),ae.unbind(window,"keydown",Ct._keydownHandler,!1),Om(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Ct(t);this.__folders[e]=n;var i=bf(this,n.domElement);return ae.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Om(e);var t=this;_e.each(e.__folders,function(n){e.removeFolder(n)}),_e.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ae.getOffset(e.__ul).top,n=0;_e.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=ae.getHeight(i))}),window.innerHeight-t-Dm<n?(ae.addClass(e.domElement,Ct.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Dm+"px"):(ae.removeClass(e.domElement,Ct.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&_e.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:_e.debounce(function(){this.onResize()},50),remember:function(){if(_e.isUndefined(Ca)&&(Ca=new _A,Ca.domElement.innerHTML=fA),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;_e.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&xA(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&vd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Wl(this)),e.folders={},_e.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Wl(this),gd(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[qa]=Wl(this,!0)),this.load.remembered[e]=Wl(this),this.preset=e,_d(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){_e.each(this.__controllers,function(t){this.getRoot().load.remembered?C0(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),_e.each(this.__folders,function(t){t.revert(t)}),e||gd(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&R0(this.__listening)},updateDisplay:function(){_e.each(this.__controllers,function(e){e.updateDisplay()}),_e.each(this.__folders,function(e){e.updateDisplay()})}});function bf(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Om(r){ae.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&ae.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function gd(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function yA(r,e,t){if(t.__li=e,t.__gui=r,_e.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ra(r,t.object,t.property,{before:a,factoryArgs:[_e.toArray(arguments)]})}if(_e.isArray(o)||_e.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ra(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof pd){var n=new Lc(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});_e.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),ae.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Lc){var i=function(o){if(_e.isNumber(t.__min)&&_e.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ra(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=_e.compose(i,t.min),t.max=_e.compose(i,t.max)}else t instanceof w0?(ae.bind(e,"click",function(){ae.fakeEvent(t.__checkbox,"click")}),ae.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof T0?(ae.bind(e,"click",function(){ae.fakeEvent(t.__button,"click")}),ae.bind(e,"mouseover",function(){ae.addClass(t.__button,"hover")}),ae.bind(e,"mouseout",function(){ae.removeClass(t.__button,"hover")})):t instanceof md&&(ae.addClass(e,"color"),t.updateDisplay=_e.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=_e.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&gd(r.getRoot(),!0),s},t.setValue)}function C0(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[qa])o=s[qa];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Ra(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new md(e,t);else{var s=[e,t].concat(n.factoryArgs);i=pA.apply(r,s)}n.before instanceof Ds&&(n.before=n.before.__li),C0(r,i),ae.addClass(i.domElement,"c");var o=document.createElement("span");ae.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=bf(r,a,n.before);return ae.addClass(l,Ct.CLASS_CONTROLLER_ROW),i instanceof md?ae.addClass(l,"color"):ae.addClass(l,rA(i.getValue())),yA(r,l,i),r.__controllers.push(i),i}function io(r,e){return document.location.href+"."+e}function _d(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Nm(r,e){e.style.display=r.useLocalStorage?"block":"none"}function xA(r){var e=r.__save_row=document.createElement("li");ae.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),ae.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ae.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ae.addClass(n,"button"),ae.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",ae.addClass(i,"button"),ae.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",ae.addClass(s,"button"),ae.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?_e.each(r.load.remembered,function(h,d){_d(r,d,d===r.preset)}):_d(r,qa,!1),ae.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),ha){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(io(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Nm(r,a),ae.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,Nm(r,a)})}var u=document.getElementById("dg-new-constructor");ae.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Ca.hide()}),ae.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Ca.show(),u.focus(),u.select()}),ae.bind(n,"click",function(){r.save()}),ae.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),ae.bind(s,"click",function(){r.revert()})}function SA(r){var e=void 0;r.__resize_handle=document.createElement("div"),_e.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){ae.removeClass(r.__closeButton,Ct.CLASS_DRAG),ae.unbind(window,"mousemove",t),ae.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,ae.addClass(r.__closeButton,Ct.CLASS_DRAG),ae.bind(window,"mousemove",t),ae.bind(window,"mouseup",n),!1}ae.bind(r.__resize_handle,"mousedown",i),ae.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function vd(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Wl(r,e){var t={};return _e.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];_e.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function bA(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function R0(r){r.length!==0&&gA.call(window,function(){R0(r)}),_e.each(r,function(e){e.updateDisplay()})}var MA=Ct;function wA(){console.log("Initializing 3D extruded logo");let r=null;const e=document.querySelector("#loading-splash .logo-wrapper");if(!e){console.error("Logo wrapper not found");return}const t=186,n=71;let i=null;function s(){console.log("Setting up fallback SVG animation");const I=document.createElement("img");I.src="src/assets/logo/NewLogo.svg",I.alt="Logo",I.width=t,I.height=n,I.classList.add("fallback-animated"),e.appendChild(I);const ce=document.createElement("style");return ce.textContent=`
      .fallback-animated {
        animation: pulse 2s infinite ease-in-out;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `,document.head.appendChild(ce),i=function(){e.contains(I)&&e.removeChild(I),document.head.contains(ce)&&document.head.removeChild(ce)},{dispose:()=>{i&&i()}}}let o;try{o=new n0({alpha:!0,antialias:!0,physicallyCorrectLights:!0}),o.setClearColor(0,0),console.log("WebGL renderer created successfully")}catch(I){return console.error("Failed to create WebGL renderer:",I),s()}const a=new H_,l=new jS().load(["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="]);a.environment=l,a.background=null;const c=new jn(40,t/n,.1,1e3);c.position.z=200;const u=new HS({color:16777215,metalness:.8,roughness:.365,transmission:.98,thickness:4,transparent:!0,opacity:.85,side:Li,clearcoat:1,clearcoatRoughness:1,envMapIntensity:1.2,ior:2.25,premultipliedAlpha:!0}),h=new z_(256,{encoding:void 0,generateMipmaps:!0,minFilter:Ar});h.texture.type=Fo;const d=new B_(1,1e3,h);a.add(d),u.envMap=h.texture;const f=new ca,_={depth:12,bevelEnabled:!0,bevelThickness:2,bevelSize:1.5,bevelSegments:5};a.add(f);const p={camera:{positionZ:294,fov:20},logo:{scale:.8,rotationX:.3,rotationY:0,rotationZ:0,positionX:0,positionY:0,positionZ:0,extrudeDepth:16,bobbing:!0,bobbingSpeed:.5,bobbingAmount:9.3,rotationSpeed:0,oscillateX:!0,oscillateXSpeed:.85,oscillateXMin:-.23,oscillateXMax:.27,oscillateY:!0,oscillateYSpeed:.9,oscillateYMin:-.15,oscillateYMax:.45},colors:{material:"#ffffff",ambient:"#ffffff",directional:"#93d8ff",point:"#ffffff",back:"#aaaaff"},lighting:{ambientIntensity:.3,directionalIntensity:.8,pointIntensity:.7,backIntensity:.5},glass:{metalness:.8,roughness:.365,transmission:.98,thickness:4,opacity:.85,clearcoat:1,clearcoatRoughness:1,ior:2.25,envMapIntensity:1.2},resetCamera:function(){this.camera.positionZ=294,this.camera.fov=20,E()},resetLogo:function(){this.logo.scale=.8,this.logo.rotationX=.3,this.logo.rotationY=0,this.logo.rotationZ=0,this.logo.positionX=-22,this.logo.positionY=0,this.logo.positionZ=0,this.logo.rotationSpeed=0,this.logo.oscillateX=!0,this.logo.oscillateXSpeed=.5,this.logo.oscillateXMin=-.23,this.logo.oscillateXMax=.3,this.logo.oscillateY=!0,this.logo.oscillateYSpeed=.3,this.logo.oscillateYMin=-.1,this.logo.oscillateYMax=.15,w()},resetGlass:function(){this.glass.metalness=.8,this.glass.roughness=.365,this.glass.transmission=.98,this.glass.thickness=4,this.glass.opacity=.85,this.glass.clearcoat=1,this.glass.clearcoatRoughness=1,this.glass.ior=2.25,this.glass.envMapIntensity=1.2,A(),u.needsUpdate=!0,console.log("Glass material reset to:",this.glass)}};o.setSize(t,n),o.setPixelRatio(window.devicePixelRatio);const g=o.domElement;g.classList.add("extruded-logo"),g.style.width="100%",e.appendChild(g);const m=new QS(16777215,.3);a.add(m);const x=new Hp(9689343,.9);x.position.set(1,1,2).normalize(),a.add(x);const y=new JS(16777215,.8,500);y.position.set(50,50,100),a.add(y);const v=new Hp(11184895,.5);v.position.set(-1,-1,-1).normalize(),a.add(v);function E(){c.position.z=p.camera.positionZ,c.fov=p.camera.fov,c.updateProjectionMatrix()}function w(){f&&(f.scale.set(p.logo.scale,p.logo.scale,p.logo.scale),f.rotation.x=p.logo.rotationX,f.rotation.z=p.logo.rotationZ,f.position.x=p.logo.positionX,f.position.y=p.logo.positionY,f.position.z=p.logo.positionZ)}function M(){m.color.set(p.colors.ambient),m.intensity=p.lighting.ambientIntensity,x.color.set(p.colors.directional),x.intensity=p.lighting.directionalIntensity,y.color.set(p.colors.point),y.intensity=p.lighting.pointIntensity,v.color.set(p.colors.back),v.intensity=p.lighting.backIntensity,u.color.set(p.colors.material)}function A(){u.metalness=p.glass.metalness,u.roughness=p.glass.roughness,u.transmission=p.glass.transmission,u.thickness=p.glass.thickness,u.opacity=p.glass.opacity,u.clearcoat=p.glass.clearcoat,u.clearcoatRoughness=p.glass.clearcoatRoughness,u.ior=p.glass.ior,u.envMapIntensity=p.glass.envMapIntensity}function b(){console.log("Creating logo from direct path data");const I="M32.5 0L0 70.5H44V57.5H23L42.5 12.5L67.5 70.5H85L108.5 19.5L132 70.5H152.5L186 0H141.5V12.5H162L142.5 56.5L117.5 0H100L76.5 54.5L52.5 0H32.5Z";try{const ye=new Rc().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${I}"/></svg>`);if(console.log("SVG Parser result:",ye),ye&&ye.paths&&ye.paths.length>0){console.log(`Found ${ye.paths.length} paths in SVG`);const we=[];_.depth=p.logo.extrudeDepth,A(),ye.paths.forEach((L,R)=>{const Q=L.toShapes(!0);console.log(`Path ${R} generated ${Q.length} shapes`),Q.forEach((de,$)=>{const me=new wc(de,_);we.push(me);const ee=new di(me,u);ee.scale.set(.9,-.9,.9),f.add(ee)})});const U=new As;f.traverse(L=>{L.isMesh&&(L.geometry.computeBoundingBox(),U.expandByObject(L))});const O=new K;U.getCenter(O),f.children.forEach(L=>{L.isMesh&&(L.position.x-=O.x,L.position.y-=O.y)}),w(),A(),F(),X()}else return console.error("Parsed SVG has no paths"),s()}catch(ce){return console.error("Error creating shape from path data:",ce),s()}}function S(I,ce=0){if(ce>=I.length)return console.error("Failed to load SVG from all paths, falling back to direct path data"),b();const ye=I[ce];console.log(`Trying to load SVG from: ${ye}`),fetch(ye).then(we=>{if(!we.ok)throw new Error(`Network response was not ok: ${we.statusText}`);return we.text()}).then(we=>{console.log("SVG content retrieved:",we.substring(0,200)+"...");const O=new Rc().parse(we);console.log("SVG parsed result:",O),O.paths&&O.paths.length>0?(console.log(`Loaded ${O.paths.length} paths successfully`),N(O)):(console.error("SVG was loaded but no paths were found, trying direct path data approach"),b())}).catch(we=>{console.warn(`Error loading/parsing SVG from ${ye}:`,we),S(I,ce+1)})}function N(I){if(!I.paths||I.paths.length===0)return console.error("No paths found in SVG data, trying direct path data approach"),b();console.log(`Processing SVG with ${I.paths.length} paths`);const ce=.9;if(_.depth=p.logo.extrudeDepth,A(),I.paths.forEach((U,O)=>{console.log(`Processing path ${O+1}/${I.paths.length}`);const L=U.toShapes(!0);if(!L||L.length===0){console.warn(`No shapes in path ${O+1}`);return}console.log(`Path ${O+1} has ${L.length} shapes`),L.forEach((R,Q)=>{const de=new wc(R,_),$=new di(de,u);$.scale.set(ce,-ce,ce),f.add($),console.log(`Added shape ${Q+1} for path ${O+1}`)})}),f.children.length===0)return console.error("No meshes were created from the SVG, trying direct path data approach"),b();console.log(`Created ${f.children.length} total meshes for the logo`);const ye=new As;f.traverse(U=>{U.isMesh&&(U.geometry.computeBoundingBox(),ye.expandByObject(U))});const we=new K;ye.getCenter(we),f.children.forEach(U=>{U.isMesh&&(U.position.x-=we.x,U.position.y-=we.y)}),w(),console.log("Applying initial glass material settings:",p.glass),A(),u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,F(),X()}function F(){try{r=new MA({autoPlace:!0});const I=document.createElement("style");I.textContent=`
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
      `,document.head.appendChild(I);const ce=r.addFolder("Camera");ce.add(p.camera,"positionZ",50,500).onChange(E),ce.add(p.camera,"fov",20,80).onChange(E),ce.add(p,"resetCamera"),ce.open();const ye=r.addFolder("Logo");ye.add(p.logo,"scale",.5,2).onChange(w),ye.add(p.logo,"rotationX",-1,1).onChange(w),ye.add(p.logo,"rotationZ",-1,1).onChange(w),ye.add(p.logo,"positionX",-50,50).onChange(w),ye.add(p.logo,"positionY",-50,50).onChange(w),ye.add(p.logo,"positionZ",-50,50).onChange(w),ye.add(p.logo,"extrudeDepth",1,30).onChange(R=>{console.log("To apply extrude depth change, please refresh the page")}),ye.add(p.logo,"rotationSpeed",0,.02),ye.add(p.logo,"bobbing"),ye.add(p.logo,"bobbingSpeed",.1,5),ye.add(p.logo,"bobbingAmount",0,10);const we=ye.addFolder("X Rotation Oscillation");we.add(p.logo,"oscillateX"),we.add(p.logo,"oscillateXSpeed",.1,2),we.add(p.logo,"oscillateXMin",-1,0),we.add(p.logo,"oscillateXMax",0,1),we.open();const U=ye.addFolder("Y Rotation Oscillation");U.add(p.logo,"oscillateY"),U.add(p.logo,"oscillateYSpeed",.1,2),U.add(p.logo,"oscillateYMin",-1,0),U.add(p.logo,"oscillateYMax",0,1),U.open(),ye.add(p,"resetLogo"),ye.open();const O=r.addFolder("Glass Material");O.add(p.glass,"metalness",0,1).onChange(A),O.add(p.glass,"roughness",0,1).onChange(A),O.add(p.glass,"transmission",0,1).onChange(A),O.add(p.glass,"thickness",0,5).onChange(A),O.add(p.glass,"opacity",0,1).onChange(A),O.add(p.glass,"clearcoat",0,1).onChange(A),O.add(p.glass,"clearcoatRoughness",0,1).onChange(A),O.add(p.glass,"ior",1,2.333).step(.01).onChange(A),O.add(p.glass,"envMapIntensity",0,3).onChange(A),O.add(p,"resetGlass"),O.open();const L=r.addFolder("Colors & Lighting");L.addColor(p.colors,"material").onChange(M),L.addColor(p.colors,"ambient").onChange(M),L.addColor(p.colors,"directional").onChange(M),L.addColor(p.colors,"point").onChange(M),L.addColor(p.colors,"back").onChange(M),L.add(p.lighting,"ambientIntensity",0,1).onChange(M),L.add(p.lighting,"directionalIntensity",0,1).onChange(M),L.add(p.lighting,"pointIntensity",0,1).onChange(M),L.add(p.lighting,"backIntensity",0,1).onChange(M),p.exportSettings=function(){const R=JSON.stringify(p,null,2);console.log("Current settings:",R);const Q=new Blob([R],{type:"application/json"}),de=URL.createObjectURL(Q),$=document.createElement("a");$.href=de,$.download="logo3d-settings.json",$.click(),URL.revokeObjectURL(de)},r.add(p,"exportSettings").name("Export Settings")}catch(I){console.error("Failed to initialize GUI controls:",I)}}const G=["/src/assets/logo/NewLogo.svg","src/assets/logo/NewLogo.svg","../assets/logo/NewLogo.svg","/assets/logo/NewLogo.svg","assets/logo/NewLogo.svg"];u.envMapIntensity=p.glass.envMapIntensity,setTimeout(()=>{S(G)},100);let V=null;function Y(){if(!f||f.children.length===0)return;V=Date.now()*.001;const I=(p.logo.oscillateYMin+p.logo.oscillateYMax)/2,ce=(p.logo.oscillateXMin+p.logo.oscillateXMax)/2;f.rotation.y=I,f.rotation.x=ce,f.position.y=p.logo.positionY,y.position.x=0,y.position.z=80}function X(){if(requestAnimationFrame(X),f&&f.children.length>0){V===null&&Y();const I=10,we=(Date.now()*.001-V)%I/I;if(p.logo.oscillateY){const U=(Math.sin(we*Math.PI*2*p.logo.oscillateYSpeed)+1)/2,O=p.logo.oscillateYMax-p.logo.oscillateYMin;f.rotation.y=p.logo.oscillateYMin+U*O}else f.rotation.y+=p.logo.rotationSpeed;if(p.logo.oscillateX){const U=(Math.sin(we*Math.PI*2*p.logo.oscillateXSpeed)+1)/2,O=p.logo.oscillateXMax-p.logo.oscillateXMin;f.rotation.x=p.logo.oscillateXMin+U*O}else f.rotation.x=p.logo.rotationX;if(p.logo.bobbing){const U=Math.sin(we*Math.PI*2*p.logo.bobbingSpeed);f.position.y=U*p.logo.bobbingAmount+p.logo.positionY}y.position.x=Math.sin(we*Math.PI*2)*80,y.position.z=Math.cos(we*Math.PI*2)*80,Math.random()>.9&&(f.visible=!1,d.update(o,a),f.visible=!0),X.firstFrame&&(u.envMapIntensity=p.glass.envMapIntensity,u.needsUpdate=!0,X.firstFrame=!1,console.log("First animation frame - applied envMapIntensity:",p.glass.envMapIntensity),q())}o.render(a,c)}function q(){console.log("3D logo ready for display"),g&&g.classList.add("logo-animation-ready");const I=new CustomEvent("logo3d-ready");document.dispatchEvent(I)}X.firstFrame=!0;const B=()=>{const I=e.clientWidth,ce=e.clientHeight||I*(n/t);c.aspect=I/ce,c.updateProjectionMatrix(),o.setSize(I,ce)};B();const ne=document.createElement("style");return ne.textContent=`
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
  `,document.head.appendChild(ne),window.addEventListener("resize",B),{dispose:()=>{console.log("Disposing 3D logo"),e&&g&&e.contains(g)&&e.removeChild(g),i&&i(),document.head.contains(ne)&&document.head.removeChild(ne),r&&r.destroy(),f&&f.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(ce=>ce.dispose()):I.material.dispose())}),window.removeEventListener("resize",B),o&&o.dispose()}}}async function EA(){console.log("Starting page preloading...");const r=["/index.html","/works.html","/about.html","/contact.html"],e=window.location.pathname,t=window.location.origin,n=r.filter(o=>{const a=o.replace("/index.html","/").replace(".html",""),l=e.replace("/index.html","/").replace(".html","");return a!==l}).map(async o=>{try{const a=new URL(o,t).href;console.log(`Preloading: ${a}`);const l=await fetch(a);if(l.ok){const c=await l.text(),u=document.createElement("div");u.innerHTML=c;const h=u.querySelector('[data-barba="container"]');if(h&&window.barba&&window.barba.cache){window.barba.cache.set(a,{html:c,container:h});const d=a.replace(".html","");d!==a&&window.barba.cache.set(d,{html:c,container:h}),console.log(`Successfully cached: ${o}`),h.querySelectorAll(".hero img, .hero-image img, [data-hero-image]").forEach(_=>{if(_.src||_.dataset.src){const p=_.src||_.dataset.src,g=new Image;g.src=p,console.log(`Preloading hero image: ${p}`)}})}return{path:o,status:"success"}}else if(l.status===404&&o==="/index.html"){console.log("Trying to load homepage at root path");const c=await fetch("/");if(c.ok){const u=await c.text();return window.barba&&window.barba.cache&&window.barba.cache.set(new URL("/",t).href,{html:u,container}),{path:"/",status:"success"}}}else return console.warn(`Failed to preload ${o}: ${l.status}`),{path:o,status:"failed"}}catch(a){return console.warn(`Error preloading ${o}:`,a),{path:o,status:"error",error:a}}}),i=await Promise.all(n),s=i.filter(o=>o.status==="success").length;return console.log(`Preloading complete: ${s}/${i.length} pages cached`),i}function TA(){window.animationController?(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0):(console.log("Initializing animation controller for loading screen"),window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,canRunAnimations(){return!0},queueAnimation(t,n="unnamed"){console.log(`Loading screen: running animation ${n} immediately`),t()},processPendingAnimations(){}}),Gu(),AA();let r=null;var e=setInterval(function(){const t=document.querySelector(".load-bar-inner");if(t){clearInterval(e);const s=document.querySelector("#loading-splash");t.classList.add("loading"),r=wA();const o=EA();document.addEventListener("logo3d-ready",function l(){console.log("Logo3D ready event received"),document.removeEventListener("logo3d-ready",l);const c=document.querySelector("#loading-splash .logo-wrapper");c&&c.classList.add("logo-ready")});const a=document.createElement("style");a.textContent=`
        #loading-splash .logo-wrapper {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        #loading-splash .logo-wrapper.logo-ready {
          opacity: 1;
        }
      `,document.head.appendChild(a);var n=setInterval(function(){t.classList.contains("loading")&&(clearInterval(n),dd(),t.addEventListener("animationend",()=>{s.classList.add("loaded"),document.querySelectorAll("#loading-splash .char").forEach(c=>c.classList.add("reveal-char")),window.scrollTo(0,0),o.then(()=>{console.log("Page preloading finished, continuing with initialization"),setTimeout(function(){document.body.classList.add("loaded");const c=document.querySelector("[data-barba='container']"),u=document.querySelector("main .page"),h=u?u.children:[];b0(),Gu();const d=We.timeline();d.set(c,{visibility:"visible",opacity:1,immediateRender:!0}),d.set(u,{opacity:0,immediateRender:!0}),h.length>0&&d.set(h,{opacity:0,immediateRender:!0}),d.call(()=>{eA()}),console.log("Loading screen: splitting text"),dd(),u&&We.set(u,{opacity:0,pointerEvents:"none"});const f="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal";h.length>0&&Array.from(h).forEach(p=>{p.matches(f)?We.set(p,{opacity:0,pointerEvents:"auto",visibility:"visible"}):We.set(p,{opacity:0,pointerEvents:"auto",visibility:"visible"})}),d.call(()=>{console.log("Loading screen: running H1 animations"),window.animationController&&(window.animationController.initialPageLoad=!0,window.animationController.transitionComplete=!0),window.barbaTransitionActive!==void 0&&(window.barbaTransitionActive=!1),u&&We.set(u,{opacity:1,pointerEvents:"auto"}),Ac()}),d.call(()=>{console.log("Loading screen: running data-splitting animations"),window.animationController&&(window.animationController.initialPageLoad=!0),Cc()},null,null,"+=0.2"),h.length>0&&d.call(()=>{const p=Array.from(h).filter(g=>!g.matches("h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal"));p.length>0&&We.to(p,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},null,null,"+=0.1"),d.call(()=>{console.log("Loading screen: running circle text effect"),S0()},null,null,"+=0.1"),document.querySelector("main .page#index")&&d.call(()=>{window.titleAnimationInterval&&(clearInterval(window.titleAnimationInterval),window.titleAnimationInterval=null),window.animationController&&(window.animationController.initialPageLoad=!0),console.log("Loading-screen: starting title rotation"),yf("loading-screen.js")},null,null,"+=0.3"),d.call(()=>{console.log("Loading screen: setting up scroll animations"),pf(),r0(),s0(),Fc(),setTimeout(()=>{window.ScrollTrigger&&(window.ScrollTrigger.refresh(),console.log("Initial ScrollTrigger refresh after page load")),window.lenis&&(window.lenis.resize(),console.log("Initial Lenis resize after page load"))},200)},null,null,"+=0.2"),setTimeout(function(){document.body.classList.remove("loaded")},400)},400)})}))},50),i=setInterval(function(){s.classList.contains("loaded")&&(clearInterval(i),s.addEventListener("animationend",()=>{setTimeout(function(){r&&typeof r.dispose=="function"&&(r.dispose(),r=null),s.remove(),document.querySelectorAll("#loading-splash .char").forEach(c=>c.classList.remove("reveal-char")),Gu(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(c=>{console.log("Final fix for missed splitting-rows element"),c.classList.add("reveal")}),window.animationController&&(console.log("Loading complete - setting initialPageLoad to false for future transitions"),window.animationController.initialPageLoad=!1)},500)}))},50)}},100)}function Gu(){const r=document.querySelector("[data-barba='container']");r&&We.set(r,{visibility:"visible",opacity:1})}function AA(){var n;const r=document.querySelector("[data-barba='container']"),e=r?r.getAttribute("data-barba-namespace"):null;console.log("Loading-screen: initializing background for namespace:",e);const t=(n=Hc.getRenderer())==null?void 0:n.getCanvas();t&&(t.style.opacity="0.66")}let Um=window.innerWidth;function CA(){let r;window.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(RA,400)})}function RA(){var e;window.innerWidth!==Um&&(document.body.classList.add("resizing"),Um=window.innerWidth,Vg(),Hg(),Hd(),pf(),window.matchMedia("(pointer: coarse)").matches&&window.matchMedia("(hover: none)").matches&&((e=document.querySelector(".cursor-element"))==null||e.classList.add("hidden"),document.documentElement.classList.add("touch-device")),setTimeout(function(){Fc(),document.body.classList.remove("resizing")},1e3))}function PA(){LA(),Hc.init("viewport"),DA(),IA(),OA(),TA(),gc(),CA()}function LA(){const r=document.querySelector("[data-barba='container']");r&&(r.style.opacity="1",r.style.visibility="visible");const e=document.querySelector("main .page");if(e){e.style.opacity="1";const t=e.children;for(let n=0;n<t.length;n++)t[n].style.opacity="1"}}function DA(){Vd(),py(),document.getElementById("stage").style.display="block",document.getElementById("stage").style.background="none"}function IA(){Hg(),Vg(),Hd(),Fc()}function OA(){var n,i,s;const r=document.querySelector("main > div");if(!r)return;const e=r.dataset.barbaNamespace;if(e){const o=Hc.getConfigManager();o&&(console.log(`Setting initial background configuration for "${e}" page`),o.transitionToPage(e,0))}const t=r.querySelector(".page");if(t){We.set(t,{opacity:0,y:30});const o=t.children;o.length>0&&We.set(o,{opacity:0,y:30});const a=We.timeline({delay:.2});a.to(t,{opacity:1,y:0,duration:.4,ease:"power2.out"}),o.length>0&&a.to(o,{opacity:1,y:0,duration:.5,stagger:.08,ease:"power2.out"},"-=0.2")}e==="about"?(n=document.querySelector("nav a.about"))==null||n.classList.add("active"):e==="works"?(i=document.querySelector("nav a.works"))==null||i.classList.add("active"):e==="contact"&&((s=document.querySelector("nav a.contact"))==null||s.classList.add("active"))}function NA(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,typeof(i=(function(s,o){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var l=a.call(s,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)})(n.key))=="symbol"?i:String(i),n)}var i}function Mf(r,e,t){return e&&NA(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Ui(){return Ui=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Ui.apply(this,arguments)}function Gc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,$a(r,e)}function yd(r){return yd=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},yd(r)}function $a(r,e){return $a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},$a(r,e)}function UA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xd(r,e,t){return xd=UA()?Reflect.construct.bind():function(n,i,s){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o));return s&&$a(a,s.prototype),a},xd.apply(null,arguments)}function Sd(r){var e=typeof Map=="function"?new Map:void 0;return Sd=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return xd(t,arguments,yd(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),$a(n,t)},Sd(r)}function FA(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var xr,kA=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(xr||(xr={}));var Fm=xr.off,hs=(function(){function r(t){this.t=void 0,this.t=t}r.getLevel=function(){return Fm},r.setLevel=function(t){return Fm=xr[t]};var e=r.prototype;return e.error=function(){this.i(console.error,xr.error,[].slice.call(arguments))},e.warn=function(){this.i(console.warn,xr.warning,[].slice.call(arguments))},e.info=function(){this.i(console.info,xr.info,[].slice.call(arguments))},e.debug=function(){this.i(console.log,xr.debug,[].slice.call(arguments))},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r})();function Qs(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function km(r){return r&&r.sensitive?"":"i"}var Bi={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},ds=new((function(){function r(){this.o=Bi,this.u=void 0,this.h={after:null,before:null,parent:null}}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},e.addContainer=function(t,n){var i=this.getContainer()||this.h.before;i?this.l(t,i):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},e.getSibling=function(){return this.h},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){var t=[].slice.call(arguments).length;if(t===0)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],t===1)return n.href;var i=document.getElementsByTagName("head")[0];i.insertBefore(n,i.firstChild);for(var s,o=document.createElement("a"),a=1;a<t;a++)o.href=arguments[a],n.href=s=o.href;return i.removeChild(n),s},e.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},e.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},r})()),BA=(function(){function r(){this.p=void 0,this.m=[],this.P=-1}var e=r.prototype;return e.init=function(t,n){this.p="barba";var i={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(i);var s={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,o=s.index;n=this.g(this.P-o),this.replace(s.states),this.P=o}else this.add(t,n);return n},e.add=function(t,n,i,s){var o=i??this.R(n),a={data:s??{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(o){case"push":this.P=this.size,this.m.push(a);break;case"replace":this.set(this.P,a)}var l={from:this.p,index:this.P,states:[].concat(this.m)};switch(o){case"push":window.history&&window.history.pushState(l,"",t);break;case"replace":window.history&&window.history.replaceState(l,"",t)}},e.store=function(t,n){var i=n||this.P,s=this.get(i);s.data=Ui({},s.data,t),this.set(i,s);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},e.update=function(t,n){var i=n||this.P,s=Ui({},this.get(i),t);this.set(i,s)},e.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},e.clear=function(){this.m=[],this.P=-1},e.replace=function(t){this.m=t},e.get=function(t){return this.m[t]},e.set=function(t,n){return this.m[t]=n},e.R=function(t){var n="push",i=t,s=Bi.prefix+"-"+Bi.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},Mf(r,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),r})(),P0=new BA,Dc=function(r,e){try{var t=(function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=ds.toElement(n.html);i.namespace=ds.getNamespace(s),i.container=ds.getContainer(s),i.url=n.url,i.html=n.html,P0.update({ns:i.namespace});var o=ds.toDocument(n.html);document.title=o.title}})})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},L0=function r(e,t,n){return e instanceof RegExp?(function(i,s){if(!s)return i;for(var o=/\((?:\?<(.*?)>)?(?!\?)/g,a=0,l=o.exec(i.source);l;)s.push({name:l[1]||a++,prefix:"",suffix:"",modifier:"",pattern:""}),l=o.exec(i.source);return i})(e,t):Array.isArray(e)?(function(i,s,o){var a=i.map(function(l){return r(l,s,o).source});return new RegExp("(?:".concat(a.join("|"),")"),km(o))})(e,t,n):(function(i,s,o){return(function(a,l,c){c===void 0&&(c={});for(var u=c.strict,h=u!==void 0&&u,d=c.start,f=d===void 0||d,_=c.end,p=_===void 0||_,g=c.encode,m=g===void 0?function(X){return X}:g,x=c.delimiter,y=x===void 0?"/#?":x,v=c.endsWith,E="[".concat(Qs(v===void 0?"":v),"]|$"),w="[".concat(Qs(y),"]"),M=f?"^":"",A=0,b=a;A<b.length;A++){var S=b[A];if(typeof S=="string")M+=Qs(m(S));else{var N=Qs(m(S.prefix)),F=Qs(m(S.suffix));if(S.pattern)if(l&&l.push(S),N||F)if(S.modifier==="+"||S.modifier==="*"){var G=S.modifier==="*"?"?":"";M+="(?:".concat(N,"((?:").concat(S.pattern,")(?:").concat(F).concat(N,"(?:").concat(S.pattern,"))*)").concat(F,")").concat(G)}else M+="(?:".concat(N,"(").concat(S.pattern,")").concat(F,")").concat(S.modifier);else M+=S.modifier==="+"||S.modifier==="*"?"((?:".concat(S.pattern,")").concat(S.modifier,")"):"(".concat(S.pattern,")").concat(S.modifier);else M+="(?:".concat(N).concat(F,")").concat(S.modifier)}}if(p)h||(M+="".concat(w,"?")),M+=c.endsWith?"(?=".concat(E,")"):"$";else{var V=a[a.length-1],Y=typeof V=="string"?w.indexOf(V[V.length-1])>-1:V===void 0;h||(M+="(?:".concat(w,"(?=").concat(E,"))?")),Y||(M+="(?=".concat(w,"|").concat(E,")"))}return new RegExp(M,km(c))})((function(a,l){l===void 0&&(l={});for(var c=(function(F){for(var G=[],V=0;V<F.length;){var Y=F[V];if(Y!=="*"&&Y!=="+"&&Y!=="?")if(Y!=="\\")if(Y!=="{")if(Y!=="}")if(Y!==":")if(Y!=="(")G.push({type:"CHAR",index:V,value:F[V++]});else{var X=1,q="";if(F[ne=V+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(ne));for(;ne<F.length;)if(F[ne]!=="\\"){if(F[ne]===")"){if(--X==0){ne++;break}}else if(F[ne]==="("&&(X++,F[ne+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(ne));q+=F[ne++]}else q+=F[ne++]+F[ne++];if(X)throw new TypeError("Unbalanced pattern at ".concat(V));if(!q)throw new TypeError("Missing pattern at ".concat(V));G.push({type:"PATTERN",index:V,value:q}),V=ne}else{for(var B="",ne=V+1;ne<F.length;){var I=F.charCodeAt(ne);if(!(I>=48&&I<=57||I>=65&&I<=90||I>=97&&I<=122||I===95))break;B+=F[ne++]}if(!B)throw new TypeError("Missing parameter name at ".concat(V));G.push({type:"NAME",index:V,value:B}),V=ne}else G.push({type:"CLOSE",index:V,value:F[V++]});else G.push({type:"OPEN",index:V,value:F[V++]});else G.push({type:"ESCAPED_CHAR",index:V++,value:F[V++]});else G.push({type:"MODIFIER",index:V,value:F[V++]})}return G.push({type:"END",index:V,value:""}),G})(a),u=l.prefixes,h=u===void 0?"./":u,d="[^".concat(Qs(l.delimiter||"/#?"),"]+?"),f=[],_=0,p=0,g="",m=function(F){if(p<c.length&&c[p].type===F)return c[p++].value},x=function(F){var G=m(F);if(G!==void 0)return G;var V=c[p],Y=V.index;throw new TypeError("Unexpected ".concat(V.type," at ").concat(Y,", expected ").concat(F))},y=function(){for(var F,G="";F=m("CHAR")||m("ESCAPED_CHAR");)G+=F;return G};p<c.length;){var v=m("CHAR"),E=m("NAME"),w=m("PATTERN");if(E||w)h.indexOf(A=v||"")===-1&&(g+=A,A=""),g&&(f.push(g),g=""),f.push({name:E||_++,prefix:A,suffix:"",pattern:w||d,modifier:m("MODIFIER")||""});else{var M=v||m("ESCAPED_CHAR");if(M)g+=M;else if(g&&(f.push(g),g=""),m("OPEN")){var A=y(),b=m("NAME")||"",S=m("PATTERN")||"",N=y();x("CLOSE"),f.push({name:b||(S?_++:""),pattern:b&&!S?d:S,prefix:A,suffix:N,modifier:m("MODIFIER")||""})}else x("END")}}return f})(i,o),s,o)})(e,t,n)},zA={__proto__:null,update:Dc,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:L0},D0=function(){return window.location.origin},Ya=function(r){return r===void 0&&(r=window.location.href),Sr(r).port},Sr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(D0(),""),o={},a=s.indexOf("#");a>=0&&(i=s.slice(a+1),s=s.slice(0,a));var l=s.indexOf("?");return l>=0&&(o=I0(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:o}},I0=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},bd=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},HA={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(r,e){return e===void 0&&(e=document.baseURI),new URL(r,e).href},getOrigin:D0,getPort:Ya,getPath:function(r){return r===void 0&&(r=window.location.href),Sr(r).path},getQuery:function(r,e){return e===void 0&&(e=!1),e?JSON.stringify(Sr(r).query):Sr(r).query},getHash:function(r){return Sr(r).hash},parse:Sr,parseQuery:I0,clean:bd};function VA(r,e,t,n,i){return e===void 0&&(e=2e3),new Promise(function(s,o){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){if(a.status===200){var l=a.responseURL!==""&&a.responseURL!==r?a.responseURL:r;s({html:a.responseText,url:Ui({href:l},Sr(l))}),n.update(r,{status:"fulfilled",target:l})}else if(a.status){var c={status:a.status,statusText:a.statusText};t(r,c),o(c),n.update(r,{status:"rejected"})}}},a.ontimeout=function(){var l=new Error("Timeout error ["+e+"]");t(r,l),o(l),n.update(r,{status:"rejected"})},a.onerror=function(){var l=new Error("Fetch error");t(r,l),o(l),n.update(r,{status:"rejected"})},a.open("GET",r),a.timeout=e,a.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),a.setRequestHeader("x-barba","yes"),i.all().forEach(function(l,c){a.setRequestHeader(c,l)}),a.send()})}function GA(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"}function uo(r,e){return e===void 0&&(e={}),function(){var t=arguments,n=!1,i=new Promise(function(s,o){e.async=function(){return n=!0,function(l,c){l?o(l):s(c)}};var a=r.apply(e,[].slice.call(t));n||(GA(a)?a.then(s,o):s(a))});return i}}var vr=new((function(r){function e(){var n;return(n=r.call(this)||this).logger=new hs("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Gc(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,o){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:o||{},fn:s})})})},t.do=function(n){var i=arguments,s=this;if(this.registered.has(n)){var o=Promise.resolve();return this.registered.get(n).forEach(function(a){o=o.then(function(){return uo(a.fn,a.ctx).apply(void 0,[].slice.call(i,1))})}),o.catch(function(a){s.logger.debug("Hook error ["+n+"]"),s.logger.error(a)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e})(kA)),O0=(function(){function r(e){if(this.k=void 0,this.O=[],typeof e=="boolean")this.k=e;else{var t=Array.isArray(e)?e:[e];this.O=t.map(function(n){return L0(n)})}}return r.prototype.checkHref=function(e){if(typeof this.k=="boolean")return this.k;var t=Sr(e).path;return this.O.some(function(n){return n.exec(t)!==null})},r})(),WA=(function(r){function e(n){var i;return(i=r.call(this,n)||this).T=new Map,i}Gc(e,r);var t=e.prototype;return t.set=function(n,i,s,o,a){return this.T.set(n,{action:s,request:i,status:o,target:a??n}),{action:s,request:i,status:o,target:a}},t.get=function(n){return this.T.get(n)},t.getRequest=function(n){return this.T.get(n).request},t.getAction=function(n){return this.T.get(n).action},t.getStatus=function(n){return this.T.get(n).status},t.getTarget=function(n){return this.T.get(n).target},t.has=function(n){return!this.checkHref(n)&&this.T.has(n)},t.delete=function(n){return this.T.delete(n)},t.update=function(n,i){var s=Ui({},this.T.get(n),i);return this.T.set(n,s),s},e})(O0),XA=(function(){function r(){this.A=new Map}var e=r.prototype;return e.set=function(t,n){return this.A.set(t,n),{name:n}},e.get=function(t){return this.A.get(t)},e.all=function(){return this.A},e.has=function(t){return this.A.has(t)},e.delete=function(t){return this.A.delete(t)},e.clear=function(){return this.A.clear()},r})(),qA=function(){return!window.history.pushState},$A=function(r){return!r.el||!r.href},YA=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},jA=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},ZA=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},JA=function(r){var e=r.el;return e.port!==void 0&&Ya()!==Ya(e.href)},KA=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},QA=function(r){return r.el.hasAttribute(Bi.prefix+"-"+Bi.prevent)},eC=function(r){return!!r.el.closest("["+Bi.prefix+"-"+Bi.prevent+'="all"]')},tC=function(r){var e=r.href;return bd(e)===bd()&&Ya(e)===Ya()},nC=(function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Gc(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",qA),this.add("exists",$A),this.add("newTab",YA),this.add("blank",jA),this.add("corsDomain",ZA),this.add("corsPort",JA),this.add("download",KA),this.add("preventSelf",QA),this.add("preventAll",eC),this.add("sameUrl",tC,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,o){return this.tests.get(n)({el:i,event:s,href:o})},t.checkLink=function(n,i,s){var o=this;return this.suite.some(function(a){return o.run(a,n,i,s)})},e})(O0),Wu=(function(r){function e(t,n){var i;return n===void 0&&(n="Barba error"),(i=r.call.apply(r,[this].concat([].slice.call(arguments,2)))||this).error=void 0,i.label=void 0,i.error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(FA(i),e),i.name="BarbaError",i}return Gc(e,r),e})(Sd(Error)),iC=(function(){function r(t){t===void 0&&(t=[]),this.logger=new hs("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){t==="rule"?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(d){return d.name&&d.name==="self"}:function(d){return!d.name||d.name!=="self"});var o=new Map,a=s.find(function(d){var f=!0,_={};return n.self&&d.name==="self"?(o.set(d,_),!0):(i.j.reverse().forEach(function(p){f&&(f=i.M(d,p,t,_),d.from&&d.to&&(f=i.M(d,p,t,_,"from")&&i.M(d,p,t,_,"to")),d.from&&!d.to&&(f=i.M(d,p,t,_,"from")),!d.from&&d.to&&(f=i.M(d,p,t,_,"to")))}),o.set(d,_),f)}),l=o.get(a),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h))}else this.logger.info("No transition found ["+c.join(",")+"]");return a},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.M=function(t,n,i,s,o){var a=!0,l=!1,c=t,u=n.name,h=u,d=u,f=u,_=o?c[o]:c,p=o==="to"?i.next:i.current;if(o?_&&_[u]:_[u]){switch(n.type){case"strings":default:var g=Array.isArray(_[h])?_[h]:[_[h]];p[h]&&g.indexOf(p[h])!==-1&&(l=!0),g.indexOf(p[h])===-1&&(a=!1);break;case"object":var m=Array.isArray(_[d])?_[d]:[_[d]];p[d]?(p[d].name&&m.indexOf(p[d].name)!==-1&&(l=!0),m.indexOf(p[d].name)===-1&&(a=!1)):a=!1;break;case"function":_[f](i)?l=!0:a=!1}l&&(o?(s[o]=s[o]||{},s[o][u]=c[o][u]):s[u]=c[u])}return a},e.S=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.N=function(t){var n=this;t.priority=0;var i=0;return this.j.forEach(function(s,o){i+=n.S(t,s.name,o+1)}),t.priority=i,t},r})();function ta(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}var rC=(function(){function r(t){t===void 0&&(t=[]),this.logger=new hs("@barba/core"),this.store=void 0,this.C=!1,this.store=new iC(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){o.C=!1},o=this,a=i||{};o.C=!0;var l=ta(function(){return Promise.resolve(o.L("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.L("afterOnce",n,a)).then(function(){})})})},function(c){o.C=!1,o.logger.debug("Transition error [before/after/once]"),o.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,o=t.wrapper;try{var a=function(d){l.C=!1},l=this,c=i||{},u=c.sync===!0||!1;l.C=!0;var h=ta(function(){function d(){return Promise.resolve(l.L("before",n,c)).then(function(){function _(g){return Promise.resolve(l.remove(n)).then(function(){return Promise.resolve(l.L("after",n,c)).then(function(){})})}var p=(function(){if(u)return ta(function(){return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),l.enter(n,c)])).then(function(){return Promise.resolve(l.L("afterLeave",n,c)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})})},function(y){if(l.H(y))throw new Wu(y,"Transition error [sync]")});var g=function(y){return ta(function(){var v=(function(){if(m!==!1)return Promise.resolve(l.add(n,o)).then(function(){return Promise.resolve(l.L("beforeEnter",n,c)).then(function(){return Promise.resolve(l.enter(n,c,m)).then(function(){return Promise.resolve(l.L("afterEnter",n,c)).then(function(){})})})})})();if(v&&v.then)return v.then(function(){})},function(v){if(l.H(v))throw new Wu(v,"Transition error [before/after/enter]")})},m=!1,x=ta(function(){return Promise.resolve(l.L("beforeLeave",n,c)).then(function(){return Promise.resolve(Promise.all([l.leave(n,c),Dc(s,n)]).then(function(y){return y[0]})).then(function(y){return m=y,Promise.resolve(l.L("afterLeave",n,c)).then(function(){})})})},function(y){if(l.H(y))throw new Wu(y,"Transition error [before/after/leave]")});return x&&x.then?x.then(g):g()})();return p&&p.then?p.then(_):_()})}var f=(function(){if(u)return Promise.resolve(Dc(s,n)).then(function(){})})();return f&&f.then?f.then(d):d()},function(d){throw l.C=!1,d.name&&d.name==="BarbaError"?(l.logger.debug(d.label),l.logger.error(d.error),d):(l.logger.debug("Transition error [page]"),l.logger.error(d),d)});return Promise.resolve(h&&h.then?h.then(a):a())}catch(d){return Promise.reject(d)}},e.once=function(t,n){try{return Promise.resolve(vr.do("once",t,n)).then(function(){return n.once?uo(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(vr.do("leave",t,n)).then(function(){return n.leave?uo(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(vr.do("enter",t,n)).then(function(){return n.enter?uo(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return ds.addContainer(t.next.container,n),vr.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return ds.removeContainer(t.current.container),vr.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.L=function(t,n,i){try{return Promise.resolve(vr.do(t,n,i)).then(function(){return i[t]?uo(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},Mf(r,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r})(),sC=(function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){vr[n](t._(n))}))}return r.prototype._=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?uo(s[e],s)(n):Promise.resolve()}},r})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var oC={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Jr=new((function(){function r(){this.version="2.10.3",this.schemaPage=oC,this.Logger=hs,this.logger=new hs("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=vr,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=ds,this.helpers=zA,this.history=P0,this.request=VA,this.url=HA,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?Bi:l,u=n.requestError,h=n.timeout,d=h===void 0?2e3:h,f=n.cacheIgnore,_=f!==void 0&&f,p=n.cacheFirstPage,g=p!==void 0&&p,m=n.prefetchIgnore,x=m!==void 0&&m,y=n.preventRunning,v=y!==void 0&&y,E=n.prevent,w=E===void 0?null:E,M=n.debug,A=n.logLevel;if(hs.setLevel((M!==void 0&&M)===!0?"debug":A===void 0?"off":A),this.logger.info(this.version),Object.keys(c).forEach(function(N){Bi[N]&&(Bi[N]=c[N])}),this.B=u,this.timeout=d,this.cacheIgnore=_,this.cacheFirstPage=g,this.prefetchIgnore=x,this.preventRunning=v,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var b=this.data.current;if(!b.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new WA(_),this.headers=new XA,this.prevent=new nC(x),this.transitions=new rC(s),this.views=new sC(a),w!==null){if(typeof w!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",w)}this.history.init(b.url.href,b.namespace),g&&this.cache.set(b.url.href,Promise.resolve({html:b.html,url:b.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(N){return N.init()});var S=this.data;S.trigger="barba",S.next=S.current,S.current=Ui({},this.schemaPage),this.hooks.do("ready",S),this.once(S),this.I()},e.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,i??void 0,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){})}})();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i,s){try{var o,a=function(){var h=l.data;return Promise.resolve(l.hooks.do("page",h)).then(function(){var d=(function(f,_){try{var p=(g=l.transitions.get(h,{once:!1,self:s}),Promise.resolve(l.transitions.doPage({data:h,page:o,transition:g,wrapper:l.q})).then(function(){l.I()}))}catch{return _()}var g;return p&&p.then?p.then(void 0,_):p})(0,function(){hs.getLevel()===0&&l.force(h.next.url.href)});if(d&&d.then)return d.then(function(){})})},l=this;if(l.data.next.url=Ui({href:t},l.url.parse(t)),l.data.trigger=n,l.data.event=i,l.cache.has(t))o=l.cache.update(t,{action:"click"}).request;else{var c=l.request(t,l.timeout,l.onRequestError.bind(l,n),l.cache,l.headers);c.then(function(h){h.url.href!==t&&l.history.add(h.url.href,n,"replace")}),o=l.cache.set(t,c,"click","pending").request}var u=(function(){if(l.transitions.shouldWait)return Promise.resolve(Dc(o,l.data)).then(function(){})})();return Promise.resolve(u&&u.then?u.then(a):a())}catch(h){return Promise.reject(h)}},e.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),i=n[0],s=n[1],o=this.cache.getAction(i);return this.cache.delete(i),this.B&&this.B(t,o,i,s)===!1||o==="click"&&this.force(i),!1},e.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(i){n.logger.error(i)}),"prefetch","pending")},e.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},e.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},e.U=function(t){var n=this,i=this.W(t);if(i){var s=this.url.getAbsoluteHref(this.dom.getHref(i));this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i),this.cache,this.headers).catch(function(o){n.logger.error(o)}),"enter","pending")}},e.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},e.X=function(t){this.go(this.url.getHref(),"popstate",t)},e.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Ui({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:Ui({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},Mf(r,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),r})());We.registerPlugin(Ls);const N0={leave(r){return new Promise(e=>{We.killTweensOf(r),We.set(r,{visibility:"visible",opacity:1,pointerEvents:"none",immediateRender:!0}),We.to(r,{opacity:0,duration:.25,ease:"power1.out",onComplete:()=>{We.set(r,{visibility:"hidden",opacity:0}),e()}})})},enter(r){return new Promise(e=>{We.killTweensOf(r);const t=r.querySelector(".page"),n=t?Array.from(t.children):[];We.set(r,{opacity:0,y:0,visibility:"visible",pointerEvents:"none"}),t&&We.set(t,{opacity:0,visibility:"visible",pointerEvents:"none"}),n.length>0&&We.set(n,{opacity:0,visibility:"visible",pointerEvents:"none"}),We.timeline({defaults:{ease:"power2.out"},onComplete:()=>{t&&We.set(t,{pointerEvents:"auto"}),n.length>0&&We.set(n,{pointerEvents:"auto"}),We.set(r,{pointerEvents:"auto"}),e()}}).to(r,{opacity:1,duration:.28})})}};function aC(){window.barba=Jr,hC(),window.barbaTransitionActive=!1,window.animationController={transitionComplete:!0,transitionCompletedAt:0,pendingAnimations:[],initialPageLoad:!0,completeTransition(){this.transitionComplete=!0,this.transitionCompletedAt=Date.now(),console.log("TRANSITION MARKED COMPLETE at",this.transitionCompletedAt),setTimeout(()=>{this.processPendingAnimations()},100)},resetForTransition(){this.initialPageLoad=!1,this.transitionComplete=!1,this.transitionCompletedAt=0,this.pendingAnimations=[],console.log("TRANSITION RESET - animations will be queued until complete")},canRunAnimations(){return this.initialPageLoad?!0:this.transitionComplete?Date.now()-this.transitionCompletedAt>=80:!1},queueAnimation(e,t="unnamed"){console.log(`Queuing animation: ${t}`),this.canRunAnimations()?(console.log(`Running animation immediately: ${t}`),e()):(console.log(`Adding ${t} to pending queue`),this.pendingAnimations.push({fn:e,label:t}))},processPendingAnimations(){if(!this.canRunAnimations()){console.log("Cannot process animations yet - transition not complete");return}console.log(`Processing ${this.pendingAnimations.length} pending animations`),this.pendingAnimations.forEach((e,t)=>{setTimeout(()=>{console.log(`Running queued animation: ${e.label}`),e.fn()},t*50)}),this.pendingAnimations=[]}};const r=document.createElement("style");r.textContent=`
    body.barba-transition {
      overflow: hidden !important;
    }
  `,document.head.appendChild(r),Jr.hooks.before(e=>{console.log("Barba transition starting",e.trigger),document.body.classList.add("barba-transition"),e.next.container&&We.set(e.next.container,{opacity:0,visibility:"hidden"})}),Jr.hooks.beforeLeave(e=>{console.log("Barba beforeLeave: preparing transition"),We.set(e.current.container,{visibility:"visible",opacity:1})}),Jr.hooks.nextAdded(e=>{console.log("Barba nextAdded: preparing next container"),We.set(e.next.container,{opacity:0,visibility:"hidden"})}),Jr.hooks.beforeEnter(e=>{console.log("Barba beforeEnter: container added to DOM");const t=e.next.container.querySelector(".page");t&&We.set(t,{opacity:0,visibility:"visible",immediateRender:!0});const n=e.next.container.querySelectorAll(".page, .page > *");We.set(n,{opacity:0,pointerEvents:"none",immediateRender:!0}),e.current.container&&e.current.container.classList.add("barba-old-container")}),Jr.hooks.after(e=>{document.body.classList.remove("barba-transition"),e.next.container&&e.next.container.classList.remove("barba-container-next"),document.querySelectorAll(".barba-old-container").forEach(t=>{t.classList.remove("barba-old-container")}),b0()}),Jr.init({preventRunning:!0,transitions:[{name:"fade-transition",leave(e){return lC(e)},enter(e){return cC(e)},afterEnter(e){return uC(e)}}],views:[{namespace:"index",beforeEnter(){}},{namespace:"about",beforeEnter(){}},{namespace:"works",beforeEnter(){}},{namespace:"contact",beforeEnter(){}},{namespace:"labs",beforeEnter(){}},{namespace:"resume",beforeEnter(){}},{namespace:"scholastic",beforeEnter(){}},{namespace:"jpplus",beforeEnter(){}},{namespace:"rowmark",beforeEnter(){}},{namespace:"aave",beforeEnter(){}},{namespace:"ipi",beforeEnter(){}},{namespace:"wabash",beforeEnter(){}},{namespace:"bright-future",beforeEnter(){}},{namespace:"healpool",beforeEnter(){}},{namespace:"rentaru",beforeEnter(){}}]})}function lC(r){return new Promise(e=>{window.animationController.resetForTransition(),window.barbaTransitionActive=!0,document.body.classList.contains("menu-active")&&setTimeout(function(){document.body.classList.remove("menu-active"),document.querySelectorAll(".mobile-menu-toggle").forEach(t=>{t.classList.remove("active")})},240),Gy(),N0.leave(r.current.container).then(e)})}function cC(r){return new Promise(e=>{(()=>{fn&&(fn.stop(),fn.scrollTo(0,{immediate:!0,force:!0}),requestAnimationFrame(()=>fn.scrollTo(0,{immediate:!0,force:!0}))),window.scrollTo({top:0,left:0,behavior:"instant"}),document.documentElement.scrollTop=0,document.body.scrollTop=0})();const n=document.querySelector(".barba-old-container");n&&We.set(n,{visibility:"hidden",opacity:0,display:"none"}),window.barbaTransitionActive=!0,N0.enter(r.next.container).then(()=>{console.log("BARBA PAGE TRANSITION COMPLETE - Now safe to run animations");const i=r.next.namespace;console.log(`Applying background configuration for "${i}" page`),Hc.transitionToPage(i,.35),window.animationController.completeTransition(),window.barbaTransitionActive=!1,e()})})}function uC(r){console.log("Barba afterEnter: preparing animations"),document.querySelectorAll(".barba-old-container").forEach(l=>{We.set(l,{visibility:"hidden",opacity:0,display:"none"})}),Bm();const t=r.next.namespace==="index",i=r.next.container.querySelector(".page"),s=i?Array.from(i.children):[];i&&We.set(i,{opacity:1,pointerEvents:"auto"});const o="h1, h2, [data-splitting], .splitting-rows, .titles-wrapper, .fade-reveal",a=[];return s.length>0&&s.forEach(l=>{l.matches(o)?We.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}):(We.set(l,{opacity:0,pointerEvents:"auto",visibility:"visible"}),a.push(l))}),window.animationController.queueAnimation(()=>{console.log("Preparing text splitting"),dd()},"splitText-preparation"),a.length>0&&window.animationController.queueAnimation(()=>{We.to(a,{opacity:1,duration:.35,ease:"power2.out",stagger:.06})},"base-content-fade"),t?(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals (homepage focus)"),Ac()},"homepage-h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),Cc()},"data-splitting"),window.animationController.queueAnimation(()=>{console.log("Starting title rotation (homepage)"),yf("barba-transition")},"title-rotation")):(window.animationController.queueAnimation(()=>{console.log("Running H1 character reveals"),Ac()},"h1-reveal"),window.animationController.queueAnimation(()=>{console.log("Running data-splitting animations"),Cc()},"data-splitting")),window.animationController.queueAnimation(()=>{console.log("Setting up circle text"),S0()},"circle-text"),window.animationController.queueAnimation(()=>{console.log("Setting up scroll-based reveals"),pf(),r0(),s0()},"scroll-animations"),window.animationController.queueAnimation(()=>{console.log("Setting up page-specific event handlers"),Vd(),Fc(),Wy(),console.log("Scroll re-enabled after animations"),setTimeout(()=>{window.ScrollTrigger&&(window.ScrollTrigger.refresh(),console.log("ScrollTrigger refreshed after transition")),window.lenis&&(window.lenis.resize(),console.log("Lenis resized after transition"))},100);const l=r.next.container.querySelectorAll("img"),c=Array.from(l).map(h=>h.complete?Promise.resolve():new Promise(d=>{h.addEventListener("load",d,{once:!0}),h.addEventListener("error",d,{once:!0})}));Promise.all(c).then(()=>{console.log("All images loaded, final scroll recalculation"),window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()});const u=r.next.container.querySelector(".page");if(u&&window.ResizeObserver){let h;const d=new ResizeObserver(f=>{clearTimeout(h),h=setTimeout(()=>{console.log("Content size changed, updating scroll calculations"),window.ScrollTrigger&&window.ScrollTrigger.refresh(),window.lenis&&window.lenis.resize()},150)});d.observe(u),r.next.container._resizeObserver=d}Hd(),Bm(),document.querySelectorAll(".splitting-rows:not(.reveal)").forEach(h=>{console.log("Final fix for missed splitting-rows element"),h.classList.add("reveal")})},"final-setup"),window.animationController.processPendingAnimations(),Promise.resolve()}function hC(){const r=new Set,e=i=>!(!i||!i.href||i.origin!==window.location.origin||i.href===window.location.href||i.hash&&i.href.replace(i.hash,"")===window.location.href.replace(window.location.hash,"")||r.has(i.href)),t=i=>{r.add(i),fetch(i,{credentials:"include"}).catch(()=>{r.delete(i)})},n=i=>{const s=i.target.closest("a[href]");e(s)&&(requestIdleCallback?requestIdleCallback(()=>t(s.href),{timeout:200}):setTimeout(()=>t(s.href),32))};["mouseover","focusin","touchstart"].forEach(i=>{document.addEventListener(i,n,{passive:!0})})}function Bm(){console.log("Barba transition: ensuring containers are visible");const r=document.querySelector("[data-barba='container']");r&&We.set(r,{visibility:"visible",opacity:1})}function dC(r){r.forEach(e=>{const t=document.createElement("video");t.preload="auto",t.src=e,t.oncanplaythrough=()=>{console.log(`Preloaded: ${e}`)}})}function fC(){if(document.querySelectorAll("video").length>0){let t=function(n){const i=n.closest(".large-video");!n.paused&&!n.ended?(i.classList.add("playing"),i.classList.remove("paused")):(i.classList.remove("playing"),i.classList.add("paused"))};var e=t;document.querySelectorAll("svg.pause").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused?i.play():i.pause(),t(i)})}),document.querySelectorAll("svg.play").forEach(n=>{n.addEventListener("click",function(){const i=this.parentElement.querySelector("video");i.paused&&i.play(),t(i)})})}}const pC="/assets/MagsHomepageArticlePage-Bo8PkPdc.mp4",mC="/assets/IssuePageCategoryPage2-DSNaO4kd.mp4",gC="/assets/MagsColorReel2-CasZpZHA.mp4",_C="/assets/MagsTypographyReel-B-XlzHXa.mp4";document.addEventListener("DOMContentLoaded",vC);function vC(){PA(),aC(),Vd(),dC([pC,mC,gC,_C]),fC()}
